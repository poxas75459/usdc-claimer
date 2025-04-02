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
    "67cLUbKnpuW6yq5oVbtXUBiDGKRxSQYQwJn372e6UT2t6PVTUQc6yyWFx4PTrXSKZEHpAEGgjXSFukxVWAZQQgNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uBqBtKAhzfXxahwoMzTPVpEttxM5DGPiM77MjH4pAHLjvnBUhukeFxcBChLrutM7ZX57N5NtiP14HLqjhsGT3Z",
  "key1": "2ADXDFp3gkHLwDECxWvkTdtLBn2krFvNMekpmMYe17FvuXkAVrNErdUMpz9khdbyZNsvXZuuu2L6i4kTXDrQ5fo3",
  "key2": "5TXUosarjMGNEGNQqKMdQZfxHBJzrav6ok1P4k821AYWucLxXYtBXaMR2eENYA31kCorQJfyT13zhf9UJ8mJDaRB",
  "key3": "4Pw4wjePp36qReSCEdEsguMoJFHhoj7sdvcsidUu5s1wdySbuEtdYNNd38T2qLLxXrAtKBn7ddVoK9X6thKSP831",
  "key4": "2vBKyKxgsEz2LBXnkuD43uJrxZfVBxWn3eVx9EiUKWiJoAjL7QNszG3kJXGLK4rqVLHRMKNqhUWTaYwQspz1qQUq",
  "key5": "3X63x6saG3C9aS2MgmziyxkRtrTyg7r158jv7qfDUBTKq5xSTiLSBYjERzFLYRnyHaH3RoRzybdoc9fktUj6xmra",
  "key6": "57qKCwiaFpDV9QrDCtJikhEYgWZQbWnEdsyi7y7ETooxLNk1LwKsXJYtabKGbuvwuk8pNBtsEsNX2pAJXQVdb5j9",
  "key7": "jdCB6AfF1su1GTcUiKYq2YxYK3reeMYspwKdPishJ6ei7Xdp4oCAkwU2kECQdWQJWZR6ii1w7Bms9nN6A5GqMD4",
  "key8": "5sbWTEmkjUoYrn5LUQiUz6QwYDYJ2LLenS2qQuttcRkQFsjpJQNvmkiDFLx527BpEjt6LauL3iVzSx3QSWq9DTYz",
  "key9": "3f2iTfVdb6UnUdt7LQKb7JXvndSSS3JTwwnQXzq8UKCxUAiMRxxL8RkedsDaT9kpbTB3ursaJDfNid1H9DwPJK2g",
  "key10": "4uQZYsx6fxBwrjFhh4SLmh2MvEyBxiwVffCpoSQKYJMx8hNrmAjuePb6dwjKG7zkBx266Web5hc4tP9Fn4RJUrHA",
  "key11": "2QjcSvesZCsdPGbHJsKKv7XRs6NJYzKPaL74sYnjAdmaLKs9ZCp78kSWwaYVwCo82JfusAfqkyjDKASd5PKyi3od",
  "key12": "NffYCFRPcfGrCeGiT1RnTVZgoM5gSgGaMFui3WtFtcn6pfJ7eSdeWderMkjr7ZLdHx4ixD2gz37WP1gde3NX3ro",
  "key13": "3Xe7tCHx2RBqjw8MfDRoETrZhTWWEPdcNxE1wKwAZz2gwxBp7BxFP9TDYT3U7YdHZAj95A8LHsEJyzNeRckXAdy4",
  "key14": "2QS19kZxXvQjXGz3TdA9URrxAf5EuQBoAZWTRRRsxCALPm71ViZtzVB3knywVqgD6qeLx3Cq2tYn3ZJFSVaf8j5c",
  "key15": "31RDYMz9yQ5Z8esDb15PDescXdeWv46njW24UgRRpcB6niD94LcRM6oAhbNkrRm26QG1GBzzi21ceH9BfY9EYu2e",
  "key16": "2qPW6QT22GaZydo6AVftW8vjpWoc7eDHtiXvsHEAtHeePZpUNWoVKJh9oMkeNJv8ZHeSDHzENHzcdE28XLAUqyna",
  "key17": "2bxWDAt54mHBD833P7JbdEMeoXeFzND5yEPo5QwkcdEdnseFVqwdMv1JYxMZAoNu4sGATozLm4mBPCmiwshibXao",
  "key18": "4DCyH6C3r2NHgKRwoLuqLeKjMf1oEZrn5YhzEoiE5ZeYp1TYS9t4dGWPRoaWfAxptumcmTQyWiwepJva3uz7Kc8N",
  "key19": "vK49jVWoyFbVfNu4LNRAaBDZof9RcbERcJiVNEjZ5qVjrxwLShCJfX4UgRS7wzx3M4hXveqQMNuG1np1KBdjbyD",
  "key20": "RUptM3gK5BQLCLVsZi2u4JtbHa1pzLpBMxod3qD9WZRi1grazyDRtZ3BsipRBF6WHzWqYfYYXxpwePBBE74utRc",
  "key21": "5jmaidDwNjJB8LYWtMUzf8AH4iuP7LcxDHcH2FA8DrfMJRVg3xyjbco9hQhvTQ6YrG2XeyVmS86ph9cmXgtHNxXV",
  "key22": "5YhhG1HgoBtDw16Rh9777MaHX1nJyLeSQqmmpx567iMok25Uew1h3khZQF3pUFNEGQWK6yPZbMM2uZU2gguKwAUq",
  "key23": "3gugFmjLKXdmcPB6sfsfvgquXviPg59VLgPjuC5Qz1j4TDUuCPu7uHvEPfaWQDhGkWFWCraoQxYLx8xHPmtbDTsU",
  "key24": "5XrnGk13QYHttDWoKJBcsj88KWhYy75YQQeuAVzFtQXowKRNvCM2QbMA94Dqc8Jy48oGE11mS3Xeofi2tWnPLCec",
  "key25": "52sgmHd4FtXKTg66KvqL2QxQPfWf43xph4UvMirz2m3iqrT6p4pGqwZcromfGahdeG7rLkmBxPK53J4Ykjga8gMk",
  "key26": "FwDzNzwZD37peLyzy8yWpN1VXFgziiedYZfZJDwfPy5gPK1VKt5A2ioEjaWjLgCqFyYrsX5bWtQXnML1krJeuPb",
  "key27": "HVEXUy1oMqaBDrSMi5NthzA7vEaYmCDv3Zq5Emhh768Wr4xMedaNk965pyEPqT2cSA782pMFkwQv32SevnbF1Qi",
  "key28": "kYL7CNAN7wJvRDWrapFdwpZ6nuzv4wLtFATjEswYBhvUXUBRu328uWUSMrhFUsuMwetzd67EpeFt4fBubjhyfn5",
  "key29": "48n4bD1qjY3YKiey4FsbrDyqd74KBGToLQ4Qvqo2KLhCX3c4cBDffE6QSCUXDh4VyCL3FBq9j1s6mJsQjqYtTTZV",
  "key30": "4z7SYAyRkVpLQBVmLA6bqK2mwPNDA1ygJfw8gvbw5WxoexSD9DyT7ufTUoGnMr2UzuBYAuhXcrkBM9cgEfjfrvQs",
  "key31": "4sZ6mQa5A31DGiAB3xD1gjr6Avd34MYqkvL5uUjFB3SJ9Q2Cxqgoo9DDi7fa5fqy3Bcd7JxsqfWvWKbDgSbuA3kz",
  "key32": "4yuKib1Tc3nwYb7bM7dcWBuBJGJzz1wUMJPopzh2bS9FvmjYaBQ9sJL7ZuvoG7L1AXuSDfnrDCYggeyHi3g9ZrsY",
  "key33": "2sQxCM2DqanV5iHy7uByjTmZPy5iQCV5zbJwmsjyMZT7hcQxzqkrg5xWEHtPJerBJw5HhBGjezFAfJPfAhCo6h9x",
  "key34": "4f2ag5mEPkUkiNjBjt2Z66k48TYvsk76QBMdb7GRTzLx7ZE3CkZrRHom1ycc6Juz2WNU1xwU78qbSRVUVjB3e6vK"
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
