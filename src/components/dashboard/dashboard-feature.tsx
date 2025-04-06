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
    "3Wm97YDTJB2Qkk3CGL4P9q8nTgSNvzdnvZAqw9XTYWK2zvE7MvBZVrsxTA1NLMoYM8FkStS3JnwiRe1dWYhDZCCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uqVDuhxq5kSiyi5JuQDxZDM1JerqgeYzsnQKA2apjG4qSJMnHMExUqZpN96cEkPmUxq6pXwBStArgTRAg8Kh3n",
  "key1": "5xvkaNdHFRAH4zE5nVHCtmkaGGXHmZ6DYBmRDt1kgbCzhhJ17JYdgacoRF3kuzF9bdV1qBUU2N6byMQGci28mLdq",
  "key2": "T1YU75QiEaTsvSfPBe8GD3WrTgynaGqXoY9vp3nEzoQQQQBXyMV7fPLA9ARb32YLu9wQKpii1Ryf9tJnLVvNcZp",
  "key3": "5anYG7F962mp5D1PNvsK4cyJxXStmgx2GJJVSV9W5CAULZJ3dZCwdjv5yFASsb1b2ZyZQtis3RTUsVZ2Bi5Grozz",
  "key4": "2uQefsWAUGmx5T9QiEj5Se8WxwjJidBEaJQ4p496RzP4vYfUDEqeW6qP5Vnra7FpnfkSC4S6YMyX1o23arG3nNYA",
  "key5": "4YPDfLpcZ8uFnxCaximoLtkMqNxm9HDNQG6ywSXwh7Cj3zvt77JxnZxDtYBXGo1fJbdMwL59CPCUJaS3GnrQ4Pua",
  "key6": "FDsnexzAR4sfQ3CAKMNpvoLKJRQA2qt6VsVenYPyXySuDhS6SFxarhYHNUWzbzo19YCC2kYYwhuMHkjgYayb7pL",
  "key7": "5Gi5ecikm4HZi9WS7eQP1RrmweJwd7iFjkJwDeyye6hv3NNppYoKo8p3cpimJiokRQ9dft91Ju6mjcQCERXfJLZL",
  "key8": "28XS3hzFvkorWJv7BuLmbuLJuxHTJeZQTWAh6ezGKBbseskXHwDi3XPaWUkFPLDGUT3XDHwWffapZXPZSKt4KJRQ",
  "key9": "4LRjNx1SD4gnisHMBZg4nXmzV2vSaXKcngCTfDymfb2PiE6Vesty2qo1rR28sx2jYwUfL5VqSvjfqFHXvjKmcN4d",
  "key10": "zELiAbSRLL8DnbwYyhbKTU8rCaD4rBfTFHQuN1LN5weNhkPqZbhV9rJ9sEzYzm4yqrhwMK5Jrm66j23SwikNAvz",
  "key11": "5YDXsHee1tqM3f4xQezYXX8Qn3MkdwnvXXZuikppqS2hBA7q3ie2NPJVqJqc23YUKrquRbvhZCrkN2iQVvQ2xqQA",
  "key12": "2KnTfPxMWF6eFqcK65oqTNEm2PsXqRsVFVcRFoaVpgrHzWBmGqpnG5xd4NFuntTn1nLv4uxivYqDkdMYsenNGBMu",
  "key13": "3qjGJrwpc336oeXMn3s7LngZCoE4VMdYoRRSERmKUHtYvo5Xw448skQDzxKYpV6GzksrGsb9hcBdsQd6hLDDYG3T",
  "key14": "4A1RQk7d31sgUf9enEGoszcGu6g7CH7UAwMBfz96sLM7RxHjVbzFfaVwFGjYDGCx4mB4vNAjQTdLfwCiRFMCSAcU",
  "key15": "5QVdgrjPAEtWbfsQiTmviNoHKYgqJ6bNvLYdkCM86rLsKJrp9osCoSzr9JEYQifizmjjoQW3FpVr4cmnpDdLdjRx",
  "key16": "2EU4BNSKwrXepCCPq7eh1aMTmbBQPGMyRMsnGxTHjJfvDascs38vhhKDFV5VTvgecoxqKxZvH62fTXHQZTBjqsXv",
  "key17": "3k4Pey94rgt1jQDunz9MZ7zzrcfMv97oKpsjHsMirdjPsHBkJg6CFTWAhPjV3mQrcjgwijUtfaj3E9W3sYsLwFde",
  "key18": "2P7cuka8AKmR9xXn1zX9TzbwptupZTLoVCiVUhtB4njnUbqnU4UQChX8NanFHF9fge8RdUDtnoqFrosJXjWKdmzn",
  "key19": "zGAycVXvE9Besi2x1pzuQ5se1xiCF52z41pjJ5skiByacyu8BxqBACiGWkeUfmuw99KejjPa8HoxuMRZ8KhYuF6",
  "key20": "3n4CWJj2VTQZkz5vH3uMAECHYCYxsKRHsPanoywLizvNhi9oJjnqAE62EveJV9RRK2MjWaqvRYUprPTVYZFcYbsY",
  "key21": "5UVzLvi4kFPHMPGwx47b8Ew2xSuD3uXWGXou4B7KZwRMMkqSRQFSNMDspjJJHmnz3c2b6J5776v2jjBRw6ip93D3",
  "key22": "haUwkUg3sNfpPZdtsWZNLmyFDzd9e87HckpqcqjyA9vN1vwSEGe1ckeca7PaRrWwZDBVB5uR3au1E9NtkkxHg4n",
  "key23": "64eQZ8qBQUGPVSWJZZGSuaVdcfiu8jEkAvcn7JHcPbdYDou3GiCYoZncgnfnJ5PLRe2PaSBF8PgXU6DtwpTUWht4",
  "key24": "3VxWF6NtiVcCymHpkWthM84FDxbs3tfTq3bea6z3NfyCxYnjQYfbP472AVZCpMZo5BPb2EYNxHFKEMFmRHBCp1GF",
  "key25": "3RdXaNfYxDHEJLHiaBXKyunz4BWoHfQqwXut1M69FDnVFwuZ5PRTDQr7wCMPvo6byhJm5SoeVzsP3mYbozTvZN2B",
  "key26": "3CBWxy6gS8GrJcUd5TXdVHFUZ1pNfzTUscX6cTSWEf1bz6KYqfjK45ZGujopvfJ3B8FhPDex1eBwQ2tis6pmJnsC",
  "key27": "23dkd2BUuqCaW5yiAi3zr7EZZGiuhDiJCpeHJ7jZzc4Nik5Mpn1pkEMjhxrcZyNLPmBZeoHbNYNKAkuFjYYxaUbk",
  "key28": "3C1DizUyc9RfqmGZyzRccnvrvqBFX3Fm2sPzBaQbSU5vTPkT7eYPAXd3ErRE5pNsiBXSWjx3MxDbQSBnDZ9djLBB",
  "key29": "3Vy4YYYKtcRPt1nk6zJnaaxo7bqDtLaWF2L5wJnzHWXF4TrQvXdtQLUV9WB8YhR9aCMurnmUAsUov5hJ5Y4BCQqb",
  "key30": "5G6PTU8a14TUezv7EWVufun83nWfSjr4gJP8UPK6zpRS4CUp2XkU2oxUFwCt4p8eTjkfATjvyD2KSPKtMvmDChQe",
  "key31": "37co4rhxWpWhZSbA44YPjCqhKLcq8YQU6UZ8LdmfU4hmGu4rS2ryLgxFdzmzNfY9Egwy2uMRQQUZ83k74upzdgH1",
  "key32": "XEzu17npGwxt9wNu1CvJB2DKfcSYUcvoPBWbfzh7eTyiu6CETM6cAVmJomPTPas5Ntu69CK31iAxZDtwW1PmM18",
  "key33": "2oJLYy8hEy2iHLT2HDRPu8mtSRZ1RruHpKM7vYgmfcA9YAKJDgNbGXAQJwvQ68FecyC7W19njojknQb5az6YacPM",
  "key34": "4KhuUXwHwJUSqLHwiYzYJamjXTLcY6gpN3hBp9NJYTYgiyhsrEGW3DqNV8eif2rrcxJ4zu3Jt6KenCXRCj1cdYrd",
  "key35": "J34npn9Y6EicGMrbeNy7teNYU3FgTMmMcHp5qL8cdWjtkrdnFxTzAQJZsDsr56jpy6eAtc4SHNktpDiZxXgLcaw",
  "key36": "3gsRFqZwZLZLcTJ7UMdybZKAD8T3XMhjJtsnPzRtnjUxqNd7SkdsZV83TFqESX7oe8qVwxmYKVQuL1LWwzZSzDx1",
  "key37": "2Scasw6417pyQDCzCDVTVoDhsrUBE4sCh9RdcHn5XjtPvfBGaAsCCeubNPwU3GR9WoYTzx7ZoFUKkxEWqcfhQGN",
  "key38": "3a22JNaVbvvbDRmAr65VddHZZm6b4wTqu2mVMeHS326XNkSu1qwveAh7aQjPrPqCD6bcivwvXxrcTvRzzrNj8Eeo",
  "key39": "26Gegp9YNaRu7PFTVAvYYbpk17HW7gPtcfKS8vqdq6mk4o3tST3KvV66Wi4eahHWBTWaT2sLAZ7gzWSkdUHfn37h",
  "key40": "35GtRX2FNQcU5e5GT8GUoRUCJ9QohTg1fzgdgcbLMiqdTUfXT5gJ77i7WqE3thi8dHoek1WimZ4HsH91XsghZuPL",
  "key41": "4D29CeWix3kfeNcrqBLJ7wHbo4wVDaxM2Jev1tNqxtV7ojAmQrkYjBRJrQvYM88DSxhJHj8VjUrfzZbMQk67rdcC",
  "key42": "38od8aT3hhs5nx8Jt7FdKBmg3Fo5Wpyo6SBCvUdCqF8tX7LvtiKi2qa6wqp3FViSjULmagCQxFY4SdpEr1tPgXeY",
  "key43": "4A7AjvdPvC2SEQ9PMJHViKMcXCXk6ymXbY6jTZXo8vfxoPaBHkav6LTxnKUr6e21n2mEsQCyRNfJPwrRP1NnW6dg",
  "key44": "3kXnoRDJphwVUEZDhUtpHmfExYE7ctoaveSfUy9CRLAD5sJ4TtkMYAp5WV1vi59oRSZpJu5LwTwnAZWXyJ4PwL6V",
  "key45": "32kbsL4vwmrFGQAUxCMPdJKrtxaMiJhGcXLsWza9w8JGfNggQdM4iLRzHP6su9bmTKRrxRFM3oCKVBQjLXqPdDQL",
  "key46": "5KaLSPiJcLaMc9m6PjBxpVKAdPGAMJTd4QTpPb37T6eaNjUe9DyFjoaWTfmHLBZazzywbfYuHJTk7Dxtx86gx4PK",
  "key47": "4iKpWon18hYjUjzWYAez1iiH8qRpaMBvGMpGYyBymLWAdjgwt9QarVjqQ5jfnc7a6e31WWLHyQQ8B5jyHHUP1nys",
  "key48": "4TcoQ2qdFKZxaJUi4qdBqXBoxa8vJkRfSSw7SPNwuFPCu6utcUEKfi3DnStFsRBPxhHYTUFJBcWZB2FAdKDTezVs"
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
