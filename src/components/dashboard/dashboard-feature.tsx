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
    "ARfut1BibrvhvPfD9VNXm7WkZmbZc4QseGziJiSiD6eageBaTpUmWq2FFVqJ7hsJwYZD6aMiPJ6dN7dTyCzQEdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vghVh5yTv9ywuvLKaCJoBnKmnskgNdf8Bb4G3CKtYUa4uwgfCaLYVYqxgdUPrUvfPb4DKPjt9fBxDYWjadNWxQN",
  "key1": "3F4UxM8Mse9kUz9F1CRVsFg7NyxkBJbtckmAQRKZfVuCxq4GkLn2iQKBNp2d8BzMtej6pvdWN6UgTU15KooryWJ2",
  "key2": "d8QGZ1ngPMUbxwD5m5ALsvUGUHAvTjjwfbk3pxT53HK8SpVpRer3pPBUTbEssst5XWYmzLC75cCsti9sjKkUE85",
  "key3": "4Zu8kLLFcaBiMPvtuwaBQxPmJjGTA4H9mtLUMbkYSNiPV1MAZyQywFmFQMYLoqC7xy3E3Ffq9WWbDFomnc51ef9U",
  "key4": "NoT7nSNQdPxY9xvEEmjAHFtGup45Rnv3aQwjhN9g1HD2uw4GS82Lp6C1PFGQPebVXTRCNuP6XFXhyebo9LVZGti",
  "key5": "5tGUV4nGnPdU9aa5KVE6rTGtEHn1iPJhEaNDzHTjSumB6M9TCfNM9rty4wHTLdAhWM36p8b2exheZqKyJUAxdCbz",
  "key6": "2TaZdJELU2nZnXgKyik8EHBU9gnER629JP53TgTWsxGGA4TEHQ66RRNUsU7wz1sbiVCjo4cFbTaAdySwEGRFXqJZ",
  "key7": "bqodu1sZGV8kQcXVj4kj1EhH3tkWjaDwbRwBzgkrpoj5VdoR1jMxhTwBdhUDL3GGBugAvBiboGx7S3CftAaa8tF",
  "key8": "fcVSZoHvZekR9W5p9uZWyCMyVaWyiZc3sNU3UBN8orkDF9iV5H2hFKwgSPJaCYNv9aDiwKZaxuMtywhCCjyFPzL",
  "key9": "4DRASokSfyAVZuZe5fUioQzt8Ak3pMUmgV23a7FZ4FnEnCtbqLA79HZ9jsDLJeEkfKRXXbFhZV2K8G5RBREsVtnh",
  "key10": "iWQBaovVAg8dacCPiKcwhFAjytxe2CDgNqcQjbLCJCBFsRE98kaTjJecrkEvepzMJE7KEVrSoi8ShjAp5r6bEV7",
  "key11": "2jXZvxSko16LJKQdf498FYpvetbmgqigMK8m7qQpyFDEXaBLLq5BckkdjqnED4Cg8N1JKaB23SCv2Frq4VjaYST4",
  "key12": "25tjNkMijssMRZqHJaY819SoJLzT5d4R1aoG3x5fJKCfmD8iaaVhewX6jWExvwrfq5JDBFjakaqUQnGfGLspXKkH",
  "key13": "4sK7sJUgMShjNxzRRJFxeDvAmRcTP92Yism5uLj1jeKCb6V7VTCZ4STjUYJcuChfojFUg87v6MAQGzPgGGPLfFHw",
  "key14": "5Z7SUbcWKLMbUvVcEHBvLPVFqm3dERLQamL1XzVnM5HeLqjK4PNfDjJCpciDFoWrWB3oBrmvRHhTyDwhDb7hZkog",
  "key15": "2dcsqW1rhL2xgWPoZxEKLJC2bMMGg3t7NHH1wNRMxD4gq4QsgZ51jwciWVvJHMTeivphYExrUfetk2xQXvj5WMy8",
  "key16": "3sJf3yadrkLcagtBg9WZU8gDZSmU8r6fNWk3EpzqSaNbfaRkttta8haifJ4p632kpEdqeV41FXJ4ZocZ5d6WxKXG",
  "key17": "2NGZdQYRjwysNK1rexvoRnWx7vVz8pZ3JE4AD9qmYm7cLq2eXSJwq2f7aDZYNHZTBDDGrWQzsSJ6eah4gZ7LcRCs",
  "key18": "5vUB6W9MF5Pft9BUfMmrUAtSeKASZXK59m2s8fKNHkpPhHLx5VXzgncrzVsY1zMqGXA4Fvfo8BVPTzCcxi3iX5nH",
  "key19": "4nBnxB8zwv8ve1V7ZYLvG7LivpQuoijuYLoeBBqSUkkYpTtwsPV5CzANwGnppHrPYQheJ5KPyVyW6RgCFi59LeeJ",
  "key20": "5xPZPsshLRqQWZPZBZV2nC433tQ42xLPjNZ362TYQNuqJLVQEJ17X4A3mrLbtvL29kmQfESASC685tkj9V72FWpf",
  "key21": "3XqV73xQRwBBU9KDW1tpZsBWckEvipCMQH3LnY1cnAT8s92MKqWJqXRY6rKSqXqgP59SaPeV5xs1VbbRTMzTN87F",
  "key22": "3LeVAYiKyGkpK8W7SGGPZgwrW6vav4MHU71DjmTtYELeS3GmDK8Zh1EVNVgstG7MEQrZcpXVberMF344q3uyFSP1",
  "key23": "d7bAFWCLFF8j2ZHgxtvydexaANw42Xh4be9DjMvs82bGVcjtXbhvSCaBn2H6gRm1NV2DeQkkUwoxeXyQdtddp2h",
  "key24": "3seKJ3GLe9UVa4RXkqPAX7Z7GbLLEKEM2XsjGgdb94uTsTWNpjCcmCSmc9rhYx8WEwvUQADcyvwecvXKxU819DMQ",
  "key25": "DUJ7oqgppCqjFmwHQzEZfuDdYFZtCgwnXrUDod1Y2xMugKnYjZR9jMnkHS2wDra9EeWtPF67NapDZ7zrxYTL6A3",
  "key26": "5JyBW4FVaZtW6tCUquUe6phmyNfUyZirsFSmGXdsBNhGAwgPkj4XAaHguDE8s1HTweafxjKwcPLY2YNSTGMeCdt5",
  "key27": "2eW79LcwGNgzx25LXMLhLbZeg91nZ6MBC9AYaHaqMCJTvhxHbWaftrbkf6G8QSWRDZavVHLU4f8K89EnoE9YjjYH",
  "key28": "3FiGUNjLKB64pGC8zfNNAkKGPq2Y5vd5zhDbtVpqxAHe7ZZMJHnnLX8anSWbfTU6Kc2xzT5nQdKpfweTGBj2Yu5i",
  "key29": "341t4BK6oJQswUy3eePvsAki5S4ie23Neruw3YCs67sEs4CCbLJkfVQxW9y5PniTtB3tUHMokdDjPFrw9p7XxJQc",
  "key30": "2wHdrLyToE7nNMU6ekfk9po19cKSsx5UsRNWncUNypUuZrtZ1nQn9XXqhbjoEHJxKc4aweedDW7Bd6KciC8D3kF1",
  "key31": "3msX9NwQiic8KPceBJrEjYMQ6mr3ZV1Vev6ikkk1TH7LcU2cWufdcYQnyskUkvELuKWRxiVnAV8PzxtjchJSLiM3",
  "key32": "62zdKcjASCbzypFRJPuxy5QBcZSrKyaV3dVSCX72tCfdUBZ3f85k7QCHG4NEJe76PN1FZbg19sNZZfoDTcxu8oDf",
  "key33": "4fx5FmN6WTgAZWbfwgEpb8uGbkmEpGxMg285SrcrvhoE2bb4nb5Ht16An5HHUqMjjgPJ1R4vAEGpm43UzwUNN4Tr",
  "key34": "2EV4p9opyPkh7CYcJ4xwA63jDHYaa7rrPdZLMBq2vfcfdf6YbBXe8tYyT2L5pz8E9q5RoAaAsbDuaNEjVpxKU3Ts",
  "key35": "2iCnaXur1nxJxXNYP1chZgTePC98dpyAuWxjFaY8d6FbV6T8TMramQb683xMD64vUJHHFtQnv1UHDeXLLerpLkLH",
  "key36": "3XbUEcdyjipTYuJ65gVA3g4Y21rEhqnnz7UaWsqBasUTP936YPhdi6KHHHABabxHBMPEN7Wms76hKrJGQLat4DyW",
  "key37": "4ysbjYWArgS7YBQpsdqTyZ3h7LtMosZRcKTp7Z5G6fKHqzjdcsfBctDy7twpAVoaRp9oMDkEWhQvGS4MFYJEVqxE",
  "key38": "2zBW4ixabiFx3sYNBukDkiobu19ms3dMhVXb2Qyctwn96MdbcyLA3vUg7ua6EQMvDGkKyfga6BKPi4mM3ysAc2h5",
  "key39": "3vN8e1fvV7NAACzXQ4keVYGUz9fDaoSvJzygLvewdkYBVeNaZfpwn4Gbiz7cRLkoK2bdWn6cUbGBMiQWKB32be88",
  "key40": "3XPjWuYwjSVe7atAwLwjYDmn8osYhmWGZBznG4g55FoBc1iQDEYDeyJcQt82QTMcjxTxULMJ7Mm8kX6iNtxWTaoU",
  "key41": "4DHr7CxD3QCRWxCWuUghEZ5H7vBKjR2CTo6bBCUZZdXjbqM3Q6mNLqAGj5CxS2BwN4ZgWPwmuwkjiH3kRrV1h4sJ",
  "key42": "35FqDJcHBR8gsFZL4onqtmA7ni8tqtEctuAEKL4EhDyujgDVQgY5QTnZWTh7EajPj4AvDCH89GYEuhNbNsR4JGpe",
  "key43": "c3a9cshUNPHLtQsYmBD9hCuHQC99J1MRNkGnwtU11t7XPSWw5AZfXdqTSrMopD7wT5LnnTARZZgUErrj7Q7cWLy",
  "key44": "fNAsyqD5JEV5cKqWVV1sxt64eLZYYGHLpzC5bGPnDBXqk7kGcwQEhFpdjymNhVqyS8AS1P5PUVPooi6sArHaUCw",
  "key45": "2C9WYMucgYGLwnQUN5aBj4AqRTgUSRJnBuwGZnjSpW8hqBFxxkbeqFmjdvhMDAneqpnuSvJ19xvzXSmiYEYRH1n4",
  "key46": "4dSkWbpzT9uuwib9P2PsRcxVZdbt93c81SjFfinADHqEFDVtxzKX1SZUJVXPhCGVV9tGgkp4uht9CiZUDrd2bPqM",
  "key47": "2kYkUrpBEfpVFFga1F8ERsDytAPMYDQe5Pvuogf6JDBouBjGAvDXwrRwwZiRfNu2KRCBrbBjLP91Hc9dS6c8oqua",
  "key48": "3GC5ZxrSMJdFrHtubrrqmvUJm8qNjdCVJnZwuBZBgjrQugRR7ur1Z5rVWh7XciahwT6tj2YTGAosP46mGEwZ7QYC",
  "key49": "3Nw8ztceDzzHqnuNsnu6M6FKc4gV2ZA6CqbFP8uqX8BUJqkPmPLidCBnZXXu43PebYVxkNSiw5kwjR23y8WkRm38"
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
