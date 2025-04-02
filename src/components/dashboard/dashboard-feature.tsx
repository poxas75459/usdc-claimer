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
    "32P67xgur5TmLMCQY6pususpGM9mZtbG4Ytt2iihj4cWaFokNQGqy7i9MjQ89CWpDsUu83Y8aHPXWjav534ybAv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNfuvAoHJsxNTKSBzDGpiTCo8rbpgj5m6nPrpRvDb1qhY3Kv95oZTaciGGD3ENQJ9MjgJLax2BTtsRcJi1dJAV1",
  "key1": "9T16xuCGZ3thPxJ59Jg4tTafriuDx7kPrUSVQhzQfi7SxB37KS39B4MNqHyk4f91rmJotaCHJd4rB2S5xv5ZXPa",
  "key2": "4f5omRWvz5sE9GVJwLc5UmDitxchdCT8pGeakkEwykKBLRZ6g9HcGzv9snSADhGMo3eH2biuTto1Kkmz8jJsfcNF",
  "key3": "5ktGSLaTNJn1wGjjW1ZDhCbJAsYHX9emtmrmHzUD9ayUhw6coEvjdBjELNYVenvnGxgvJxQ5njLsRHMq85bUwDHe",
  "key4": "3E3RRRJDeiZxDDCkDtUy31ofcwG2xMVgF1DhJvkwo2e9GhnEBPUgBTYqEXUjYho4JmmBKQVyMS2CU6okqN44AZ5n",
  "key5": "4eQfYthePVfqqQRBUS2AH5xLGoWoUXCfMMtYKxbUFEsDKTZc2Wn47VM42smmWVTz71996vsyabFgacZztHH7ozBw",
  "key6": "35zygLur3LEfpd26GKPZcrCnPj4jfuQPxWTyMEC5pHiaznvwExeXCpmV5GtYG43RRQyAjXFxZfEyHQoYu4JMnhfG",
  "key7": "2Z26LP9ezcuCFZzNRGjPD2JtpBhdkoTLboGapwmoEozn19LG7b5E37VMUWNHEeD9izTuChe4LaeJfVRBEtn6FRgy",
  "key8": "4hBAZwZ2qsuVBqZU21SYjqMCiqKyjxRPaUoN1dt7ZyiZPG8jkrHvRgKyCYBAG5uM6XUiMGSRLfJUcJRpEgVCPs6P",
  "key9": "V5H2Vu4NAGRgK6xdyabxuMdve51couXx6yqPvzJmMUf9ZXu1c9DDbfuE52HkRaHiRXKdwCGc8HEjJUiSrhGyAD8",
  "key10": "GaitYTxoytape8zwUcH7NNKCFPeF5R9Xd4JqfUcBoYKrt3uQgTmDFyiLLCV16xwZHAdMeBTRagvVrcHGj2bgdot",
  "key11": "i6XqqGGnpNqaXTvFSymUQCXhYFFHCSaHipJEM77XRcw6wmUEGqakN99PpgGcwpDjZYMHnkN4fvu1c5kRzqgxUWY",
  "key12": "5eSY5jESoYQdXkMykQyWrp7t98tkarwXXc5wNUFJEhnf6xb5G9FfGiStogxoxWwNPtxrLsXUQgF9VMPi2wL7UEPG",
  "key13": "4BH6qKhAczajU5pbVGF68UT6UjnCEq4y91jaPpeQTHoJrae8etVAoDY7qGiAKkjmbsY1JFE1mr3tZXLjE7dwPKR",
  "key14": "36k8xNQopB4FkPH6pYWznAmgvhZhkYcGQur7gKEWFjyF53wUvH6J7kjfaqgAw3m4HbPtMLKdQYu6QqusnZ5USmcq",
  "key15": "42LfdiFu5LJMoRZeB5zs5jF8JXdy4dq4bJzXfYPwaLePrgFKjR8NRroXee7Kb9SWsPq2bRKhFABjaJ18LG76CD9w",
  "key16": "4haqr1m3DrtBP8FY1a2vS4VZwvjy3k4cv4hvoi7aQ7jjp1TNmSZzumUSS6rncQNi8FfSJfFzpZ8ZdhNCbQHP1Hzo",
  "key17": "5oibETokEfrrVyyMyxNCoBFuv1Qr8RmouVcNLN5BKmV6P8UFmUCqN1LGuCWAZwt4trdM4skSYF2kkbiHWsm5bkE8",
  "key18": "25vMz55TxP3qvgznZRLixYDac5PPDUUJWpFCoMhsK4EUTQJ2xiFTA16EodEoGECPzRrteTjGKA2NXGQVVGWxjAe3",
  "key19": "4QonKWpoFEgucA4QZ4BtTGxkcjqc3XpHWPbnQBAX86ps9CD2WM97f6gdJuZtiQcUz9sWGZ9ko1snKqCqCB5T6tdW",
  "key20": "5nXAWppEpBJAKxVrH3UjNRPRuZ32EdwBXPjf7J1mE8QhXMCKQe8QEcnmhtwLkRvwwD8tLeapddhuHqjnMQsJxMCc",
  "key21": "CkNjVZYfs44Z18vkdDCPcy7ESW6zr4x3BAPmGM53oqGPxX1uQWQx2x64tBv2paiXvGLp7bJ6jmvmKZ1oKFeAkrm",
  "key22": "2KzJ5oyhEuFRPgQd31E1uypCLTRqRWeXXdYvQzjoUeEphpQorKsMYFTGNXPp3mHMDWVX9FuZb5x8DwUvLxw5udsu",
  "key23": "nBkJXbcRLjfJbuvc7ZAPdCEJA2Twb2XUccCNYnzFtdMGRQxXjX9akydLAijjvK3KjVAKxoHQsHowtL2auRaotRs",
  "key24": "41Tvc1zTGCwxrs6mqW3yatdaeLAod2dgeidnAP1eQKWtw1yqgziyVu59SJALf5v9znzHmJ1TRQNUYimdNFcEpv4R",
  "key25": "4CvFFwghbWyJx8piqKrWrgra4SpqLBDsTpDRBUk7VVZLvCwHoC6h3rTFPaT78HkW6kNg7qLawq7CRTvCkUEFhpT9",
  "key26": "W7gb7w7pkYodrJk5qyM9gAktzrgGtnVBt47hcwbD2A8PtapPdhV9MzUpgkx3PPw2KBEGXw5itNE99JJqRR1VkAp",
  "key27": "uKC3ATu7j1DRUc51Dfh4x2HpeSTAMnU8ZSnruUwo6bPt4uUEad8VjqySzPvbXmzBa7eic3wKNcmxnLXw4nCqHds",
  "key28": "oNDCpdGKYvm9QH2u3tgB4TAXHsKYbDxBXyShKYsqw3cJaHw1PCQb4R4nxYSbNBz2o6qNWu9fNutb9docXSWLSLe",
  "key29": "G1HJTVrGZ7y8MvYBT3wsNyAytriLH8TLzh6YQZ6VoEURQXEPK9Zrr3ibcMif2pSDPmatu5K9PmrQJJh276aS3pD",
  "key30": "5VQA9QMgkzSztMpcdPvHE1UJKHqsckohfV4DaN9FZTx2yznubBtHJVvjjVNTRPTzcjndML56hPVGCah5XzLAgQFk",
  "key31": "5tdvg7y9XUTaJ6qKMhYaQgAwCZiS75LKfzeDmYKAcML1JVcxvQ5ffQYKPMznaZbGS7VpU9S23EEwy8EMc472j5y8",
  "key32": "3xFWZQQ5NfyKj2MnQkztzEaH7Vnh8GK6FGjNKZqfDQsDue3aRALUTbkvc44GUXEwUpsnzPDFtkUvdPMWcwgXyrco",
  "key33": "2KAuXyzkjVYCq1wHmDrRatbuwveCwBGuY8B3q9Kz1HpU8xSx28k3uzA8A7NSCADRjPeMLtL55Gcu1nw5Rk2cPvuY",
  "key34": "2CSbu69hBLHqnuComE95EYPK8t497SWyvAmc1wwoinfURLC9vPyeNx5Dmk2Ybcrbs1ZiBtnesTT3fKLfJQpeKYvF",
  "key35": "2G1hG1zpDnWQFcJcDFynVwQD2ACP1mfM6SqGtrWcA1KzuNRKsLEtCVcjH2wxEsSTF2QzeJg4nbLMPzQ8rYMmi4Bc",
  "key36": "2GmMS2VH3Gq7UMUgXgAzFGwp4aLo9gDENFbJDvgQzXy8g9Zz16hHZ9XzSWPuNAVg1p4ALQL94EKu7v727LspccLa",
  "key37": "37eAiMWszAvGbp6378q2H8pux2QPszPRPcu3ni1FD7FCtLiRY8TRZfiycC1k5utLoCNLLEd648ePnXNDeq892qy5",
  "key38": "67JU6aUW3H8tCBabG6sBiQguxWprzjyA9tw4jYMnbT9J9UPN8GjBc4c2grxWmPMvMEieVncWLPNATZokBgDqR6yG",
  "key39": "G9o288exUwSKDtfgkUBaxyErin8eb7ugZYrB8XrCijfMN7LYLWDcdgdjSJNeUT7UsREBfqFKKZcYkyQQn2PCywH",
  "key40": "4s9LjZazTfFq1MBG3QU9sPUvhcrq3c4EGjEBb4B27vYQ9LRdVoGLnbfe9eMAtBFdpkZUJADRNKZtyLodgmDJVuAc",
  "key41": "64btLATBBAN8ZhY5a4CSzHst2HdaXW9sEBeGwVACKHZaXj68LrYycVWo2KM1tyGNQpdiW6ZvUNVcG3c7X2K33SX8"
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
