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
    "2Cqz9Difj7q1upfiVeZKGMTu1V5mCiNruCVYmQUmekyLKWz7sDhChQhvLgomVF1AVUrLMVPikQnBey9Ab23c5J4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RtXvwgAxgbYZREK7gZLu2FRBFCbUWofuVNXY2BN95iDJdr7oD6ufnJP2rQSpCir5PJwKnFNsQirXDKYppedmJM",
  "key1": "27kgz4gXi28ws1AgwydvDJDmrRmoiwUVnWLFsDZy9ETVFZeVHqszxohGCHciRXbQiGVLxVzGM3HTw66YAq6t18Ph",
  "key2": "2FMpvmqWwD4x8oXwjKdK2knwQLB82RkqRWrm78nRcKoKPWbU62W4fi11TQ2cPFtr3HignmBRPMuWFMjBb3fvDBJ2",
  "key3": "4f7zLMbpEkLeCJMVHE7Sy4D9cnfYnDNRYMJmWytGyuonYLPpPgLh1Zn9MBjKqJE19C4gmiAJJdnME3xv7wzK2FD2",
  "key4": "4PZmhyGaGyYwRgm8ppb9i7ckuTSDF65BkQrqAgVn2DtW5LZMFdMoRv1yBS2JSQsfqhKBUnaneMfmCJyKGRX7tvvY",
  "key5": "5Xkxvf46ddVsq22tLSpHpTtwhxMJZZMhgJJitPT5yxLx1zBp7xMny1UG9aJCB7Ph7BkVRFnGbPU9eQ2EmuC6cCQj",
  "key6": "3WJ6idmGHHXLzpGQb9u7bjwnnb4rE12YAnUWWXcd6YGjauVLBGHhkqfkLYLXLc2Ng72BwLVh9SHrZQ636vrDZJTt",
  "key7": "5fY8nPRVgUuq4wEE9zeB2WVuNmezau6coE81s4BfCjwd4vWPz28fC8zofJpps4PYt4hD6ujAMyijq5TsibNLhgWX",
  "key8": "4fVituLDCCayvEhb9QBHnJTk5NESpmzcRLLgEmmY6TDN9hZVZLjmhcyws14zZ2ZzmdN1TBZeE9CMjnniozxf7pF2",
  "key9": "5B7AP6DjERCnc22Yjszw4JUaYL5F2kmAfrt3TjzbMnca4HRszYgyH9S2Y9aZoqcQohWnh6PgbiRtELS9DPuTYkhX",
  "key10": "2TwomTUtssniwAQfyQA5LCRkkGGUpTGwPyvLn9SJjVTp1mqBGNdvASuPFWvtRN327aZgQGhbNTJwSdbsMes8TX9G",
  "key11": "4JyVkqeMmVtWbHWsxVCizXjcBFienHCNUvf71j7aNWTq1DwJ65LDHwSSC2uBXZkNk5QEVYhTw5cx5D4KujEa5XZp",
  "key12": "dKyM6rb6wCHsEuMgZyG6egt6STZFTjRjTDFeHsp7qZyXwPcFuesGq1vCjGxh2gVVahcZkmJZnA1yjVKoAkyqG5y",
  "key13": "5Z3Y19YaY3gYTL3ri225wou2xweAo51vGtxGhfdmtkxRL9XdTNGVge9rgZCQbTEZGm9ft5DxidL63QoVB3gj3j6R",
  "key14": "2P7BCt5d2pSSLz4Z8iBPpawabXm8tiLSn2uDCHZfFBoaAVc7UbZ2bcWFffN4H3eoyArWKCoXFS8XkyQYsPHNSmG4",
  "key15": "2d1j5dRCa2kXkFCkqpXcd44iBJYFmGFs2hizEw963LTB123iYFDMYzJpKwMgEUoVguPHkZDXnMi2RkFGbLXU4JrM",
  "key16": "2kW47MBT8ZyLCE4rGKKFQ9iE2JYDVY4U8bATNhbiDJV4b2jcknimNtbYwZzPamPZw7Dv3C7fXNnmfSA2Pj14LX6r",
  "key17": "2Tr7WxnabqJrcCPeBZxksUsC2r39z7zpzuzTGkweNkfweooAAf4vXv3CYvmNLpQPihRhefuYSWsH2ZkwEZPs6PSS",
  "key18": "2dbgEZE3zPPciRjfjfPoNM7rHzzLn9PevVv3HvuuG3xfowsi9jeWgr332VhqmEa4YS8FEuYcRW6kDbwkHK5B465U",
  "key19": "27wfFf9HSufxWxfUnodenB52T5tgA48QitFsmN38R1GdpQeT1ZgcjVcbA1kyDTXXTmFjYU5UD46G7qK9ZDoxYwKE",
  "key20": "23aEN5s77asEnVvqoN3pq6biJonewXfgjFeZwvkDyLCHzrkHdz7ymknauiHAmKTrEPgQymC5ScM4SrtGBJ5metF2",
  "key21": "3XfKWTxufvakewg8W4BdCkePAo12ngkb9Cn5Bvmf8iGHUtohSwKPXRgxKsfGgWW69WrxDHwcF1jZDX49WAbi7AHz",
  "key22": "3Q6rZ6xPPHyc26Mjx3f1iW4wdcuEutp5yXmNZtHinJsS7M7iv54GBgKcCHiJmhZf6DQzMhMaE5Jb1ZvpqJCvk93q",
  "key23": "2oZ95MQigXcGU6e413AKduwkWJgetQ2Vb2c1qj7fqxxiZGZN9qmhxLqD1iAZHz6X4hD7js8FG8AFmxc1xf1SJnx1",
  "key24": "2f8YZ1UKuv9HDxgS5UWYcgyfu8VbhhtjBCi3izsWjYFT7AZqt4xZyKkRTp2BK9sR5RbYnVdbpuo8rLPprRkHcPhQ",
  "key25": "4gB159yc8YhoibZT3YUo82EZWLxatbwUsQDH3WmGssr9RTFKxJDbmZKQJHTT5Z7gZCefFGNekrQLkVbUoNNESXjJ",
  "key26": "2int9DBTQtKtFy5tjsNH15NzhuARdpQpZxDVi6VvTn7WdQR6gmr9kCYcBPVxWZEyoHWFFotRDqBmASGrFZkYrKyd",
  "key27": "5CHB3msZWGbTLqBRiSexQ7hZB2L96BiBDXdS12w8VJfYHv51AB3EhzcA2jQ1rmY3GHseS8oFdQ8UGTVS7xPprQ6s",
  "key28": "PKmuXiWdh3riACybbyzXk1Tokr6fD5nYCRzjjHRnDCDNLfanBbj1vFVKMrjxei3PMRp6kDoqCFM7QyYbogUU3XP",
  "key29": "4TfGj8KFXnfd7hDV2mgmcFczN426RyT8jYw99wi89cbwDpMGxDiR4W6DWSgAG2GQQTKT7qRtLQ4y8SycSLaYZQC2",
  "key30": "5ozw9VDAFYvLV5xMbPpVe9eenyVBdwp7Jf4YYk1WbXPzyw56hjLG2J93pNM96VdTh3ZpaTff65mcm4zMmbUoRQXY",
  "key31": "5dZShar3K39P84L7TU7VjQkVa74UZdPJ5StmWKKirveQMXS1UfkVmMpiEerHFTMTU4hJWFTvsctofJMufKYEzT36",
  "key32": "qbyHzrn4J1UigsCc4yem5ELdekHKHFwPE5eR2ZU5VrYDg7tVwqcuBJEt1P8V3WQTdVC1cX7DkhnvZugNuKUWHR8",
  "key33": "5wvMuCH7ompk8XpL6SyyCErSaAqpiEfzKsggMgjVdMVdCtTC1QczR6U5qy6YXKbQfZB69PEh9NBBjF1ZrKyXJLDP",
  "key34": "5EuW4D4tof3TDm5h3HVY4QiEzU2Av9yZxxoYsUm8pqjByHB89Mmo7LYEFVj6Lt5tePkoSqPycLB6KQXwi5mbWS1f",
  "key35": "5sEqmQAycWwYJVgnTXXmbsFm3stpKkgo2C31Q5hZ5oiN83Ft9QxGYfJFGzwEWUQGMVrsjhTyaxUrBXuXHx393iaL",
  "key36": "3E6JvAd22uLumzfDuDeaQb989txCAWx39JCWpocZt9u52EenhJkRw89t4NsjyFtRk1VahQHUufiSgtCvDhnnqJAT",
  "key37": "p5HbaXJ9VrfLC5Mx8qXPUmKnKAQSwp4sSyAWb2nzDR2AZdqnt2vP9RbortULPcgkGajw9XX817g92aKvA9V7rSs",
  "key38": "5qSQSxMUvma6pUJXXVWpDz64AdK9PdpJRu32PcDVrgqoW9RoUvq8tkZZAJ21byZ5KKpSCxMYXnwM9SRojFad4sZG",
  "key39": "3NkNYfYyNSrV7mbV5HVjw7ikaJXs913zXzSDYP5s8QTvKYM98R6f8fEjkN13Ld8y7vZ4sGnmVoQ6cftPpD3DcmL5",
  "key40": "SQ3w4fLfpiCdLLMMk5Kr2DZDFAHV1Tp3yiaoXRQhTH2kM7fQaohEUKwh4gozBf9Geznur7AYpebub5mkKCzTMr4",
  "key41": "4H6hVXgx4vVR4YLPjZmLNXdK4cNVnKqCT1ut3hmtNNWSdfebjGC61DJLALiNL4Mgkg28rex6jQFD75tLcqRSYF7E",
  "key42": "6ZqRsPeW4kZSG4GJ5MN57ndAJLyG7CzQoFZYzgrFaoWDEA8rDNtF9z4zktY9ScTXroo7tcbxoK2uM569RZEhQJR",
  "key43": "2vhe2ptLn7gJdfSWCTg6fUTxQ5uja3Ti9rHkFvcoWvd8KhbfFf8VLuQKbYFYw2GZaGHeGjMrUN19cL7pyHgfVBvV",
  "key44": "5ULyDaoqKWfiqCVhNH1Cq2n5CY7YoDPzfMVJWHvKnzmq1dwsvZS3rDFj2FGoQ3iQevpAgZHUksswnDWLCdS2A215",
  "key45": "5UxixWLVU9R8BocwD7j9tqxBKHQwYpvQgLz8PyL5DgfzQMFVh91P8KZNwgU816SaAoJptjGqB3U11ZpFxndbx7h8"
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
