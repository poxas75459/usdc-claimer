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
    "2YWtzBmG3aexT2p9H7JUkDfs5jNojbn2uWGzrRpZeUiHFDUJFu8kXDaGYtoLp715xQMRZ9873XozpcMRdG3kvtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9ser7W3AdnvEciWbxUgoBXSiiFRQ1YVMcYQpq3DsxdqQCL248cwsyRDnAVpT2fxboHTcwzx2VHA78DYhmHHTjB",
  "key1": "5QzXU1HUcEREmmiJ9idDhAJ6iHs6bGR4RUZqwyjzDY6NDK2nrLPy777y7UwjC6ViZ8F3iQXMxMm1irNKF8jfaBPL",
  "key2": "5NESN42Mb8Jw2c32Jv6xWTLNWZjcneHC6ZBkvf7vFWksEa4VT4udXRbW55zXkp1NSyAMT1kd82wFuaCh7vijAxZ9",
  "key3": "2g8UwrTGzKgRVmaszsvWYDJJQ3ci3TzLF9SB91tS9ZwJkrD14wFTb88NCZY2ojXQF1TjwAoSLVkTqyUjh8LYRWFy",
  "key4": "2rdfTRD15zKGWJmTn6nW9NFeZyZgocz5GGnYLcp1adpJzGpBACwUt4w3YeUBmskpctN8aTMbLFrSsYq6GMSh6sYn",
  "key5": "5erBmszrwqdo7wVydwVyAxQvJfbkLHsFs8fSm6s5bihc5xtnG8jwMdk5u7yBPjuUgTxKWD8S7eK3j6aCMkKVdnGR",
  "key6": "3ovnkrANvr8R8gcviX28oKAN4XUj836thobLeoU2WJdSPNr9NRjUBut14ThcXXXnYVwbfyJnQC3TrArqx5tEKnCf",
  "key7": "26JCgrTrKwAHAAcKtLtJ4BoF1zpT4VBmCEQBmoZ6vF9rLZHEVKeyUVVqHYiWHMA2Gqw9oJm8Kz7BdHevZSnfEhye",
  "key8": "4jZuKydWeLJSbr8wBzLN8TQyXuUtbTFePhTT31TobkAjKMx7a5UVWCN5sSLcME9xopDAe1CdcFp5ZdTxfNJsCVeJ",
  "key9": "5FSHyQgecVG6zEurJ7KPg73rk8VbqtWyKH154kDMcay4G8ybsZhjAPQd1R7WASfKMAXyZqEEMpnEzaA2Yo18LogF",
  "key10": "5BBCYRdAf1MBMaahJEEMrNPoAFW4ByfvusrkGsbq1J4rfVj4HDwfnqLBVVcgmk3s6FWL5em2xrnijMux6txtHNAh",
  "key11": "sEnFanaN81ZtuiTDevt92cp3Ng8Y3yUJ1f5mCBQKv29CKSZPAqjtY45mLjZ461A1ocPQWXZKvTusFc38bFoRe5w",
  "key12": "3wdpUvusgZcng9GyHkCEprfFT1hBgjUheEEx4ZGWUwkRhhGyr7SNoi2NtaRtu8FByR7it7JDN1jznTM8EUPtAShf",
  "key13": "T9PU9pjPVShB9Ui6DLWqgeECabq6tLaq2BPhNnSddCtGS2ev86DQnJjkATxHE3XQhc1xQDge38BUSFMxvscMp6J",
  "key14": "3euonoNXSWWfrfgXjfbEYQ6he47uavJigQmvf8qAwheRnvfgpaY255A1c37WXG5nXezWreU1JDJocuLniy2NbTPJ",
  "key15": "5gaNJyLzsttF9PENHrJgeyawjDZENzUk1f2FoTUFagazhc2EtahiULsPkWSZaxyHYTZZ4Ehad5H72ueibRXr7LsM",
  "key16": "4AZKxJ9bGYSMwDiUWTiRz4QNCG18NsLsup2KpJzinC9Bj314DK93AstHGFqH9QiG7uar8u3syv2UcjSWor8jPszB",
  "key17": "2UbPYTo6oQSugfJFucMgeM7qjxyJPv5sHWd5EXghPCyGgHAQ5NsXgnVJ8xJex5nwwQ7Z2U6qYMWtW5p1HS4VNFRZ",
  "key18": "3Bm7LhmPPuJeTDAc6xpUKBTVhayG66xcqEvJBx8RSdCRevhohky5wANaEbAonuWRtdij6YNy41hwkufkzCoxFgGY",
  "key19": "5rPgKRajziA7xhuRaDyDTYqvJTTj5wsB4fGQRFcT86YhWS676BQeCPRQoEjYuWLoCYpVcKPTyKd2FW5hLFBSatVT",
  "key20": "2CZ9sWKvafSePKavGKHKpCVAtCTgWyoaGkV7HWUfSzaZfy7rUWtK8qcsmA1isrwcebtoahR6jvxCgyn3vaD2t9up",
  "key21": "2EBjNPzd4mTuSzFfgN4KcS933EmdG8WcCUMZ2jxREhprRghPcGF2RHootzSRy1qxvm3yGjmPdR9Bo4bwgCvsYGhH",
  "key22": "58JbKPEbHa7bdKMNxBvvwbWoYzumUFYus8VRM75G4Mv12C71vsgixRndpTyXoMCYCTMsnjdTL7LGiVM8GkZ4w9ZY",
  "key23": "4UtvMXqppQPJabBeitospR169Q8zquZhhRGFtgQYmWaBPwpRGEXxUtDAUy89U3Yuj3hVmDv7hyYsq3iu724swgMR",
  "key24": "4b1GNh16DwYPUYErTEJ4NEkpmniFpRYVa6iYw9acDe2x2iskEaPbRWMUCTB9aoXfWmhDTwoNRcWUdVfQ6Bjbf3hw",
  "key25": "4TJnkjujNjDfATnayMnDr5qfhy72xT31N4cEPX9YMY6jB5EoxQ3fYD4758HpJrXAt9DJhSRKCPDCsg875odbgGya",
  "key26": "3BJfDwkWQ4kKazhvDFH2wh2yZhUWQ1TDMjLp3iNrCoysLe1bWh5SF4DQBQ3vdavhtmwrZsGQgB44u3bbgwPAkRK8",
  "key27": "fTGUwQJLNo3vzocJ1Nwa2XBvBcY6Sau2fnufa3gY6SFPFYPjjKTdb4xkSr8qtfHWRf4FUhJLoqfUxUdhQf9f9im",
  "key28": "3m8MnzFNzi73Ex7HJznmp99cMXYVpotzdTMAjWhMyp25x9j2mRY3Qt6D9TuTPHpSwnaHZ3MiA1mj5VLYrhPrXQt3",
  "key29": "3PWTir86bZiN9TXRfUWeo9ZUPw5Y5FowXHi86Ltyb3vPUEzLLDmZvuWzJqfWdNHQJgWAov11Ja3w4E6xwdpezgZm",
  "key30": "5D1gKUt5s9yJUaCJSSYkGUj9F5w2iwE9Re8TGZChgZsxyRjGvdq6WYB22o6HDuBaxEGeN1aNAQ8JeeCVQ66x9hUP",
  "key31": "4N5CbmSKC7kTbn3HXSWebMKw7gTv98fbPR87rpiHq4qFkZNLTBqqe9txsQyFr9EGQm8E2dPusFicfMfNWaKekwTD",
  "key32": "4bZimfdmYuH2DJG9FXcT4uWm3Qj4mNS18C64mHjLDdV2CPm9KHhqQrFMWCNuGf2Zcu5D2iLXeM6AWVppyj1DU6rK",
  "key33": "pKrr4Y13GbtSqYkBrUQqitVXKD5HQMPpDqPdG3rV9rxuLRzbhKKrCk2RnF19KAh9dB5EX289iTkm1xxXoN22dEL",
  "key34": "2eZPikJS3oM4w6dmTMU2DaZggZbamvkZFMmyv4L3Lfyu4M2WiShbUAs1WwXwK6pgthnEwafd11Y2TRgGdaFWH1W7",
  "key35": "3vNL3oXCSsm459GLh6NhFoDTQQHwvxp3thF5MCdGgi1KehoaYiVs8KdtjRRzwLnV5Mu57ZsX3DTxFrJ5iahjPo63",
  "key36": "2XjatutGCNBHsgHzqA7fDfh7K9cnTtqgy3zZeEAB2Z4zwqQNAHRNayVwrFYGFXi5yrciHT3AV3q4HK3ABJvR4jnD",
  "key37": "3pyRMtJTBJZs37NysCn4BJGsfke8DdGfB7ApZDri8ythbWtYKQS8d1yzYHPseSxfFSVpVK4RFcttVMpZZf9uRNN6",
  "key38": "27pfKpj8ekFwWfQNbj4yFqp3WKRtE1VNtfQFy119SQnpB6Jo2QvFQkCYzYnsBpKwLvr4KEgYEUsaLesaYS3xSXSq",
  "key39": "5PMxSZJPrmsAVw4C7oaVcckYuTzk2pjZUF1QJyZcCaqcwukFzHq8BPxHYki33J5Hkezg6FgsLfNi4vPRc18HjS72",
  "key40": "2tYj6Af42qTreJBuGzh4QYxwKHxnykQ8MqzGafhjvLjcA1kGByVdV48PcHcgPX1kkEy3u9yH6FMx8xqkEgxWDLRQ",
  "key41": "4YMHrMYE4bwd6KvsUqKxz3Bk33BYrRo4VYznf66GcuvGZPUdUF5F3dZPs7BF5BTv1n6Wy2SAmHWjDnyKd6sbntPp",
  "key42": "5dNjwXj1WCfZSb4vXthkHERSiW7XnXKs1Bkrz9kfxsthfxUa9G8m3WA6aRzmyFngzanwZv5c6wiQk56S6zqfdZFr",
  "key43": "2UrpcuGom1JQcskAGiaxjD9VLDFTH7svJnaya1dNVtxPyGJYZXoSMcZuWheNq8sQ7ZQbXiynwVCGx3MgS2RUqr5C",
  "key44": "3WrtcA2uDyXtCWRnMnRxSMtx6GwW5Z6KhRUZXhkoG3ch8Misva4PkpfYRdszPaCLpXC8Y6kCDFiukQK4kCGfFBBo"
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
