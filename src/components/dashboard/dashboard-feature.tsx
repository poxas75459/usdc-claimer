/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "XqHgPLQu2JSpinq2ApQ2s4ixuJENdyqYBDrKjM7QsrE9VKQPUYgiYWqgxUbAJhLfNhHY2Ah9hNHi1TfiT35egCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsX8xzZDmdEyQW5LT7482iXDUXFr1oB91suy5epQFEx1MDBLaJKn8sTKnoPS8BPpBmQfHjHFMKTZazAynpUmhiU",
  "key1": "2YqdkYCcao3vkpxGdvMnTwtFSAa44j7Dv7pgBKDbzeGkxfVCnUZetLEXnaCMeuBtwAriNJYtvJW5hwKdKic4gwSe",
  "key2": "4zAK5JGYXy11FKxFrv7qkTKbH29i9xiMgLt1v8ohZXAJS4bYSBKFxzuzqDmAUX3dDjrnKDbiqAm3jj768mxa2UFH",
  "key3": "55NKfknNXehL98fbmmjvmf1YruwcNCuEkk6bB3A7UqSR2LbFrY5c6D2qxXHz9oHAvZS9S2QvHVBVXUSrtcu6Pk5Z",
  "key4": "5wrqGWcNBtRRDv3Jk2ZbdZQp8yqjdoBimsMHaYLqrRNas1aYuSudT91Sn1LakBhAgsvtKeJP1dWSmGwWgwJdH1g9",
  "key5": "4WoVf1tqPzALqnJkdrxa42hZabKWojNjPEVPLYCtksevHxq5mVycRdVucV3PkapptrCXH395qwYfcBBpd6GS9PkN",
  "key6": "32ocLD6BPZ1mtwzHaDkDhagscRRk1rHC55nnNCgMhrfzicLvmXKCDHvWkgiThxiQ2XhnkPUPciRVi8XNTX1sqKUj",
  "key7": "3bYG3hFubiA3qDJSBe5tyWrqazkvqFJ8LbPTy7f2YrgTkDjyZqeoY7Q2o615d5hUEPAyR3T3qKWZYwaRjq3pkpDT",
  "key8": "5Gnp2HUkT3SNYTT3eKWgDKYMJhkepxdaeNzxgSFA4wu99EsSmPvytYi39fUBBUmwHpG35MY3wKupoVZUkbwv3Stj",
  "key9": "4x3hGa4uzUpzFKaRAKJe3fZczmqBXm84tdrHJbrtCLyN5ytEX8tEnUCLQdj9bwbDh5sgWpdEsVgBQMRTsYT9NoAi",
  "key10": "4mZcFWzCcxcpFEUFqJdpdS7tGUMbEavYenrVtdEDcxp6SS89hzg9NMytjYqQPSUsofnX66STBoMGqyc6XP2iyXXQ",
  "key11": "65SiGScYmWVMnNofXsfKUeYANMp56FjUNU8jRmRnHsPBJfrFDfqF2S68ifySRMXpfkWVhq7XsBELjuj9sUtN5oBh",
  "key12": "3GnETdcwSXKtpip5TLzDMbW5oRRTTmbZS9JTYP61713Wqz9t2gnPN9CmoT7Z5dxB4DgGCJvLftUgkc17qMebUfVV",
  "key13": "8nPLQWYpKdTuk6sEtEmp5uQGyeJ9sYY6QP9zD3uRpLV6x51enoekqo9PCNgYUkPUQmrEjTqCJ1Q4j6F76oxA96A",
  "key14": "VFSxYUNWdvKPJb9eTRk1oBm3dQd9vWmmTUrq9EaRYKwAxtwXFbd1ywy7daGZKaJcyRJFZ5XV4EdNWP1Rab2EVX5",
  "key15": "5QAJ12Np4FXJbXxV8BWBKUDjTzenugQjA8DATRFvs7cWh6H4TnM9wfujDbYERpNCuq1VVoqLMNnxHZAFAuMMLX5Z",
  "key16": "4GKzEstNZwL4YzZicKAjGiaKDUdMCaKZmfsM2MNB9eewiMHYEukb1UDHtyAfFZ2siDSdKVa2USadv4mvPRWn2SLM",
  "key17": "fqpq4KJjhr2HXzUQdmGjnK5UN72oBRjymspid3XGvJzzeWxN5jrUC2SGweQSRHrhswrtrMVhjL6TGVM47Vaj8hr",
  "key18": "49R3R2fgAmRFa67jqBGErGmJTdSdQuts9Z9g3MXQkYoVPirJp7jSW86Cb6XzVTavVhzSSzvvr7pGF3JzLSZHzGXb",
  "key19": "3GSvxeY2x5gjYmBsVWBEzNiRmeJJbtRaQe8F225cwvrvqP2UW7etMgn2oarjtw3JzFknnmpGiLJQGQiYJyDDVCfC",
  "key20": "3h6TzeAc9o2mBG6hQxzERdYMuGuwdPeHHKoySeapijdsZsjHYzuDv3kesZZVa4SE92qixfy3SKVXFEvE1xyKsYX1",
  "key21": "2JPRbifkZewNH6BrdXnRAAQV3KVV11jbaKHCFmsdyGBooroiYNuS1Zr2sj3xt8dtEPLuGW4YKkoiZMciU2Pjkwoq",
  "key22": "2j11ZFJJo2ocFZgwxFdtVe3AFTGpzU6Zwh8zzULfY8zprGKa3KGtio8uoHocfNWn55eR7pQmcopHJQ5pEwo7z6ph",
  "key23": "AT9GAcTAjhCXerbP6sSbVsBSdnCWhdAaARE4mA1AokeMSr6GZRNfr5r2kuDJcJrAF49qpXASVHTieKsQzzfaJ2v",
  "key24": "5FytJk6iCZRyPcMBzb7bCUL8UqDgWqSbemUzgPVyr9CjmpPj2dT9vjrHCk5rq5mZQ3NmF9uHKnbAx9a1AxWaMgDn",
  "key25": "mgPqPAk7XcaVjk6Fc96vBus1YtGbZUs8GedQRcJGz55case6ZBgPhVcZZm4VEud61PfxgVctbobuuMpC3int9dN",
  "key26": "5f865BaC6smmz6vaa56P6nFa49pMScarUsiZa9QK3UyxAmzkau2f9YiJ3qU3ffzvywDFe21kGyVjBoZw8KPDoits",
  "key27": "3gL5A3NbZWQ4BqsMSsQZQPTjLUqzDdHwonDdBn8dGs6gaWsqQfCpiR8PgQF6GzWYu2yr7jXTJ22BkCSvszam13fQ",
  "key28": "3P77spNRoPvVKQgVgNPy7m2zEbQDwy6ipCDovisC77uXuWT4qnqgA3BSUhVMqvxPEPq2TdPPF8BYZzWNduGsiK11",
  "key29": "6evZGTHdKPGiog3Xv8nkys41RPnZ3aJrLTGMzz54RtmjLpwJ8SWUGhYxCUUmXZ3UnJ7mDWgoB4uJhLhf9zqRQUZ",
  "key30": "2AbZMCyTQxDTLG7pCg3c5himaafcPPtjL6sJ7pQoFyLLez4aFyKMX6621pqiBLH3eSGcscbAXpmEUyTPMkMWFc6D",
  "key31": "3JwTAVURbsrWeC8DorsTf5FJjAHdUZdkxq7wDM1cBnX2W2D8ck1ejL6cq8LaA9XvvXAkgqd1ukS5FqCPzcoQPhvt",
  "key32": "3kiAiiLe3kiKGvqkcN5arEuzyb8iyv18Fcw6zUJ8tcMNBSZPBVvm8ESKQLKfvbMqR9aXkrmAX1yRNvwbdArSBsyp",
  "key33": "2AWByRf7WhyetQf3rnhp5G6bsYhWxaQAnniVoqaekjAFybqjvSeSD4RRmyCMgqoGYGmhq2Rvqf8faFkpNWbcu3tL",
  "key34": "2bXiUrmCjx2YY55rbBc5ELTCq89foWSAxjDVmdjhVyCg1XnQUHCiVrT8tEHXxrkZ8SEQScEBPaeJGj9nKXZPbDjx",
  "key35": "3R6Cnch3wkRJsVhWEfSLmfex7eZF99ijHV8mAipy7kWegDmS7VJZEWoe9ZTHA6S4Um3sZ1HBpNzPpkRwjtyiXtYx",
  "key36": "2tpxdJfMyyJUUh42ke5CQEA9umkRZvDNyvP9ZEUFDRQRiFBUGdipY8fockpHTvSsnCyPTL5RXHiWVyCshju81NZu",
  "key37": "GrB62LJiNY5nf74cdzSLJkVNWQyp9SXSKhKbAVW91wSdtmvbzp5D7r2z4AkPMr8jYaCEAuaonUQzxqf1Pm8Nrmh",
  "key38": "5A8Lca3LmAFqsxua7iBUZcnwskMCWfYbgtt9BCavz7TbshMgeDHWyy2MgExaca21CJDNciQeCRCev7dP9XvXf1G5",
  "key39": "5pR9qaAuDa1C5dWAAfAo9Xb5yKeggti5SjutypTVWqMK7GQbJ3PaTBy4qFMfmWfXrZedrsArWRKgZhE7Yk4M7BEX",
  "key40": "d6JXMDshgr3AeTJTYsGKtXAP8zu5GQWotxCD7nLh9AzafL5TTCo1CVY5bDUWy3bAczgKaHkX2dnr5tsibt9cCkL",
  "key41": "FQYoXkFvpEgaZMeJGDN3HNCHcYXtstXkupsNofKkJeT3hF2defQQrpYa34zumm2R6rtuM3MEoZUZn2Uvp7zGiAX",
  "key42": "4aEzJNW273XLWvWdN6BVhQq3wobueTJssZSb9LWU8YTXDEXY3QFaMnb5Zqp8EfwLYnDd5fSha1MhqjSZBG3qSwLS",
  "key43": "2GXvYU53HX3q6hm99kRLRmEAqjwcUsrRx6dkwjZJEtA1w2dUzTaZUWUjnRWHHx1FWDP9eB8crgMpMfAqHcRVgQFM",
  "key44": "3WJafrcjvZRVuJ8ojsDH94mVKPuqpidNfDRSZ12XZnbgT1gjxwVUrvqER8TpueX8juWtgA1iX8jNwWt2u2Tm35ju",
  "key45": "5WkWLp7QEi3u4rR8bVjutyyPdyFTnwX7s2zQFEgi1ppaN96ge8aimPD1Tyh3osF5eCh1K8hHe4CQaqxtZcXXztG1",
  "key46": "52soYuX8xLiY4nfThMGr1dzgGUeh5Xk66i3Pgim2Pq5hGNCaqi3Rog6MiZ4tfGrsUGy7F8LiXjQ2Bd5BYYwszbRA",
  "key47": "4LkAwbGq2xNXLJkmjD5b3AwABxoHTzR9ZbdzdWAbEiW5ZQt3uoneHkFg28tjZXVVGijsMiUq3Ln4hAGu8m3SGXwX",
  "key48": "2KWghorRMu4NabtMGJmyBD6kbuDatTy19f6RsnvkiAiRfx9XSTpBN6JobZt92K6qG4fMwWNwPueutks5kp2hHcnT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
