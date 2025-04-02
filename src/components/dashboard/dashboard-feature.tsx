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
    "49bUb68LjvdPrS89ifh4a9SbWxPKC6PSmczNEouQTD2QiiVxymsZQxJigjNqGX7hazAYV6hippYNyKRv1fnGYq7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48e2URWcMasbJfdVViAMPj5vxhgPkCUnUHqyCSdF5LAFJ2PdiAMgTeikRmy5aMQFMLp2p8BGVvhkZ4j4z8hEp5mT",
  "key1": "3hM8vBVA2PniZHvhBo2WzUEDF1SNyVs7THUdvskgCuYtY2V8YK8UN3cSQqCnyDsPDf7faD4PgXZ6uPwfWrRcsiEZ",
  "key2": "2u82DS1J5V9UZ8h5Cg85ZGZEUigNixxmwsz8JFvNrwZzhEriL6tceSAjsr9jthQn69kXq3UPBMzNzhaXVmyrLj4R",
  "key3": "43rhT18pPMyau4V2vSW9AVXNDgsEV3omVNoUudKUZcNAX41Yjr8ASurdcUHD3hQ3U9wJSTTDQS1z9k5yjbnYE5Rg",
  "key4": "2pVbmKj33C6iUPn8JGv54hx3GEPqF8Q1zBxurNZWobLRHXH7YbBsDqTXohL8gdULhKgUoKqggV5feudavra4NtQn",
  "key5": "5X6FpY9KWnUGz7HRTiHtFAa8cPPinXsYqwXvYqSgkEEetk6J6QnXE7pPEZUMeK9imtPaAnKNdsYtbeCYx5vzFvXJ",
  "key6": "28VPNoQudQpEnB7uc7Ejcq7BVK5dhqM9DJWHDECHPwwNZFWmmvj9ASvch3tRN9y9XQNzD4d2tKdK5kUwy4U9BV3f",
  "key7": "2VCuA6RqBJ1ddsfGVxQwKStZspPSXe1XFjhmxZAs2ekmsjWwkhW22UayCthv3Jgssi4TDcxeeKJBCJ7Qd5naozDE",
  "key8": "4VNgUiA43iy1DSZRioCGuPRAkuMuPaaf6uwJb8bxgosMgyQjU7mGfRRMAvaEmVkAW1JvKMPztqGNwtYCBYSNxR3s",
  "key9": "2Hqs3pWM465jAQGyEnsJc5fFdXVmDoJtXtUFK3FBnmZdYJZEov7ByKhRdnsAscAhXw4nrvYxzRhfDh6L6Y9ettqn",
  "key10": "5Zf98FNBae5wvRTmuDejGNeG2TQ4vpAq2BpdMFmo3XFeBKLp6jMPGHLTo9wV6hx5V1YmdQXuP9TTPZVXfHF7T97z",
  "key11": "5gH4HvegSkkQedz8aDzELSpStFp4KjGH6R446BWz9Sx12EYL7kHRKqkCszxu3vU7AJ5rG75s7zyNdwhZNymXZjR9",
  "key12": "4wPgDZivxqECJ3tnXFYUHw4kUFVb9Hq9vdEjL3rXkaQ2fsiSwsdYo4teqHhjN1ZRdwTM7nj73zafsFzcmHftUoTX",
  "key13": "3Dqp3HpTdj6M7eTr2uEQ2Nt3KennsfAjErmhqMgoT5kZ3SaiuHGdBpiXLPdxtmkNu3dZcyjZM7oYN4oDBy3L4oUN",
  "key14": "fHohb6ZxdkTEx5rh3YVPtV7UXU4NUm5ojp85H2qS7XH3cMz4LnmB2YB2CRnt4znJXxSLcwwj1frmvmC4PoLGkgc",
  "key15": "4CFabdJgAwXDq7qKcdDSnhZDScNY4VVmLTsTMJiW6fpBCYE6oyN75NjdW436ysStKu3XmymjXuYUfuAk3a7enVcJ",
  "key16": "83U4Qh2xQG8zVymtijNAq99DPyzvMiSzDYyvi25LF19eQKeWq7wEzbpNcEAHPZ8PKVfjrjivwgWnnbC8VGhLSns",
  "key17": "5mKdSPtGuTBDRXJzPMk8wjTgnHAkx4zUxLzgW6fphpjA9NKHQs5jQFKPjcbbP6b1jnoFwbd3SRwbDptJGLjyB3cD",
  "key18": "3g3WB7AzYGj2B68afmoiSFrzmjhqGyBvxQaWDnad6p3rY3hb2mHdF6c6utEtHzUexSTwieRhbhDtvNUR6pDWJ3PV",
  "key19": "2GqhSf42Sdm7GqL39cHmk288CiHGgo1qJrsdqjycsR7pziJTefp16LzNPsvxwkdqQZ97RfHFyuxy3HkS8unNY8J3",
  "key20": "5oW8HjK227QMcNj87miuetXJHNzmDyk9tmgWY4cTZyU12dQ9rRaGNSx7k6kqEbtVg7C7YAqwLwoZxcp9LssvybDB",
  "key21": "2RbHSz34Hdb5BQri5GLrgn4Cwad4gkWVJpD94UVUJdeqbTKqPiWA93FpcdgnrQngmwNBXEZtJX4F2fwVQZGG5icr",
  "key22": "w3Ysvkra6pbAiXjwgGkPqSG99WQzmunFvNNEjyMDhRjpcwcidcx6ZgtiYxaNejgrZYEbN5EZN5moyoSNCz6rGGL",
  "key23": "3iJjSaBv8gkNJ9mEF6vyMBzdSg6V75PgzX3unPn578JSfmuiBKj7FaJ5ae3kjRut5xoEfUcvdgb9pVS788HDRohS",
  "key24": "2CBysVJUmwJ1Phonkc8cLPHYozH2H17tYebVpUmmvWwLs6aRptRyGR8C24dCNys8FHL8oFp6G6pbLMh8SraB1jR8",
  "key25": "5xDGWUc6wRypkmRfDBMjTHX3V4FdJpvFRLd9ocYpUjGevW1364pMFheMbTFZFtWmjSws62biLhAkXHcWBUovK8or",
  "key26": "21Cj17p5mWghCUnJTaMaZ8iemEq2ifJYGpyD2XfbvHtVMYpx9sESDWZeAKv21hnD8FU7P4SCJD7CmAZPrEBbN3zc",
  "key27": "7gbv3i6GezSG1zFJRioNqdxupTe2XB4eVMt52rMHpFUaWJ9d8vWE46ZqABvZTVEZX9dMDjtdVUUgHSxo3KrJnvL",
  "key28": "qyx39z3d7JdtBFMLj8AS66FTpysPqxyzNrVEnPzs4gat8h5SB39kMsWqwQ1dCjwX8qtbhSxtLUbVXCzdFwwct4h",
  "key29": "4JseRUykcy8SGhmW1UBbs9K3jFz8FZBJPdhwqiL2bFh5G1omKWMEEcG1Vb13SiFZSo2UYpPiZ9fs79sMNZPxBMYA",
  "key30": "h1KhB8UJgoY6YMuywrUYnyCUQxqzBQM5YUomePUh9DPebGndWVZzMuAJniPjw5rCQaHAarVHAZ1tTvm6xtWBiR2",
  "key31": "27rPWtqub2P7AAKQMW6KD7Be48cd3jGa4Ta9XPmPax9TFYJsSFTWAHXpWXR3WTjwrCXKg8HxxxedbB1FuSX3n7ir",
  "key32": "3TRUJ67MmA3ET3n3NaqJJtjaKKH9KczRGeTys4QjiwbSciQNYUo9yuHiLYYCZ15phcc4o9XgN96iwpNyGoSV5FtN",
  "key33": "479nMFtrMq3tWAqw2d5gYTBwm2CLhNAYC45F7mVTjNAWjFogMnMA8A9bpkhVQnFPz6E1UMth4xaJPdoz2W9TCZSZ"
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
