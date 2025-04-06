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
    "48gi6VnenKjPEWVyFkSSyWukhWT95AagSktXtoFcW2ngQUxvwraE5BziyEwa7mRQzpJFDKWRSqmaN5emS3wk5bYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Mvg59SAogZGy9zDAwrXpdenbWFzQV7SxtwxnFtwcrgr6qqDDZwjwVtrScPWTKDUUh3V8xtZeMY3vcARH8FQ1mE",
  "key1": "4wszn5dkyy1AreH7eJwYS7BCXdAWnzwajpu9TZK94kKUev9y42nA75Cd775c2dK78dUPPxnTGXAUr6cpAUfDsQih",
  "key2": "5BYWGhDDyNSJxUg8KYTFBA2b7Q11YDy68P6WmnVFrTVLByadDtN8Y9Tn9RXSx1ZHWLfn3G3GFbryDAVWvcrm42YP",
  "key3": "rKK31GHGgWNBVcfmzadYJaeYJecBAdmPYPCBhu6iuRdbWgtPE8zUmUsR7ecyCcYgbfuS1smP5k3HnuBTsZ5Dhu1",
  "key4": "7qXo2Cgna9fJP7uQpy3dQd6VFHByVBH6qSviCkjqrurcbjmtaXSxbX3AULVkGp88anCMbb8kNjFsf8mjY74aojm",
  "key5": "2AEQUdotgajcCHFR1yw3EhJVAPFpU3FqDPn47vYt1WAgTht4qJyauesdF5WzgBPcPw5gzT1tfbeGkYS4d5EAneTR",
  "key6": "UqhL4nc96SgMGp1VXYwH7n8XSZx9JBp336zwuuNhvgeoyR2VCqLYDB3nF5dD3eufwNMvb3wHpfb6AwMAp1R8Lcm",
  "key7": "48xNdH594ci3MPCQwRdCJHp4yrXLm6DtiggzT5S8uLQVdMFiR9D3MiMMn4ZY9S1xFUe5LnoEGdSJvMxyiib951Hn",
  "key8": "5wu1EC7ppGvVKjBqpoVVABNPwSQHFT7Hx2P8vs99iv8ECrY9Eck5szRCBoKfxPQ5qn4TMKgPG2aBfpysSE9898b5",
  "key9": "4PcmWqVaovCE3Bu6hhbbnhxuzLTCfwaEyPBgcYKEK9VA75FxzhDvMcxmfQ2BDFvyz57otGTHQP1vnVFUuTXa4Hq7",
  "key10": "3V96zeA2HgKqASs9U3jgKtP7DdKMDo425Hjeemou9Pc2zV74PNPaUNLx6txc1G5MATJJ2H5otF4gzUA8WmRk9bKE",
  "key11": "21ZNfxGQFyuFo8zcRBmMEk7V8n7L4U41WFBWYzEngDt5DiZnbGiYU1sYr4bAqxxDv78TARBgzzSpZfMjDGkAWThC",
  "key12": "3cgFv9SwaJvHizwHbr4UU4iUUipTJ5ZXrNfkJNnPVoPithgY9qy4ybFWCwd3LgHX7BEnLSLhNd4h7khid5kXHHQD",
  "key13": "5ntmwTxzHLoT4g5zgY8D8uo8vb3H52vJMMsUsz5hUu5wZw4frZki3LnB7NZbc7EPH2jeiGahC6DWhNU8vYDfYveK",
  "key14": "4KmTN5FaFiRFTJpfyxvxCFsqSTXJfJLSDroyk5yXwdhjsSKg7tpxukjADVrfmaWeeskisQweXena86nkMoCaA5oV",
  "key15": "5aZCSLQYuWioCM1UeGs3BnBDYNREAU5aPz4coekpxhAz6bkJtvHaG7JCHMyTo5SMRMi2PXDW7qJnhDk5bbTzcTt8",
  "key16": "RqbonFBVyXSrWDqWwL6nZzcwrynfZMM9VG27B6Bh1Cux3ARt1JmfPAbayRj3N2wL24b8CHLoMJS7JDvMGaBfNYj",
  "key17": "4PNVnQWeumvLRRbosTqMJnn8xE58A5camEjPoYnBUigKPEKfJ6d5AwZYkLQJqb2BBSujy2hnnnYBxv4or3Xjud8Q",
  "key18": "2vSSVDikB2fJsTbP6pNLK2CLiq6X6T3jBk35A7GHBd7frYmodBk5BRS5dwNdtYgATWeU1dYaGk6Rof4NXWYLBmha",
  "key19": "4ScNQvHDCxAV3waLTsQdqyN1KhwDVzFii8Ako2xxqCpAUn2Qcf6EtrQQRCcv6FS3LwT1TeAWae3CAVJVJq6GgxSf",
  "key20": "X4VgxuE9hUKwvY9x9MkkvGQCGbJQUCGS3dsWPdMsNq4BMoYNutS5b4PAwPPaQ8kQtHZPJtKRAfQopkqE2xiTqdq",
  "key21": "isXqQySe9tDdXoxJkHx8fRkWjfSGfA7LqrPfRdnb1zQU5LnMv8kFrWnQvzxV6KY2XZsXWrZ21ep3y1bT1J7n6n7",
  "key22": "4EDmTB3FuqXY8sYaur6TjMdV8u96DCE1q6UoNNamiKaEYF5Go55QHZdf3mfxWarVTiwgJ1wyeMmMze61vCsjjC1c",
  "key23": "433ZLwecKFhpc6pVK6f3H8mbReKJhpMEZj7tv8PZy3SmmGx5pT2TPhziGGDa6bAHJeNzi1movLLH4urWXfzp4DKu",
  "key24": "2H8J8GLv19WMbYpNj4JTbZi5H82dXF9Vdo7KjU6fq425npMa8pvq8TBqJe2ZiJHn5tSY6cM8tGZopXoLaWFPfiNA",
  "key25": "3baMdMNYN3PnyLMmhpjLNCDBMsTpDvmmaqtt6uq5yfftnMu9dPZAL5zndMpo1tR94nujgvm4pZgWNrDjatf7T1cj",
  "key26": "9zkQ79ghRZ7MTE2wMohT4EVCCrRic7DsdjCG9xAWvXBTwRUKgAfthFJZBW1rsN25XA6dGtyRqZe8EQUt7arSmwt"
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
