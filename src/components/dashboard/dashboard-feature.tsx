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
    "2hReGtotKnABGARQbXRyvRyQgUJQeHfAEEonVSty4yKwhmLkNMqCgiKwRaBbx78jELP4yFt22UCL37X9UWxN8XLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "352dAXyyCTU6pHgBVZtH87NTmbSF8z6VTzf7PadCJeodeSP3RZnkWiyqdjJjzeh2cFMbyyWpHYPAu5LP1tjSMYui",
  "key1": "48PdgPDvXXMXPeT1Lf68CUaC18jJCHj5oBEjhm4t5SUdRacMnhyBXa7nrgCSAE1pL2m4BjgaQvyrEAKoCoo1DMVS",
  "key2": "2J7E6XRwts4o3nfqi1jrwRxcP6Q7dqhLzT23uGW9cGWSvAt5pJXhxoXZAshxZ48w7vsJ7XYeUwHzMTFnjRLsRhpt",
  "key3": "Sjp7FsHzQtwRZXJRpB8gKhrSaZKsunmkDygKD5A4QQ9s2LLCzWhbG9oCMhuD4Y3RbwEkRwMXjGFNd5acQ3LYCZd",
  "key4": "5ZfAXGZyV5AvUXJtU6NeHUEWsoQn6ZjNYhWWApg1CRbX3rdzgHz7oQ9KLK38fdv2gYdvJicf6MxVi7vVzNkUvryJ",
  "key5": "2k8naRqkA21YfewyvuUvHDvp6NygBYivRCwL1u6tECMyWesYtZziqW1g3L7thyq5iLFzuoNLtD57XA4az1VXjFMk",
  "key6": "ume5Bcke9GyibAPTiNJAgka6pgL1bmLmErhGQwaXTrCy7quGKCYxbpGkYzAVewJnzebnNx32XYEM7RS4rck1jGL",
  "key7": "5KMmnStvZEvZus637TDyksjgu2FXwLi4q2CyQRDBoq6UFTFzbc1utD6HFXBAd7nDXG11W6NE5d1DnTByzQzGk3d4",
  "key8": "2MNiovc6X17SD5CWosipF5fDv4YA2sqmj3eSSaXaP4tTgVvKymzNKuM57V3GYbEodiaCL96UKekp99gD8CgqyvwM",
  "key9": "3gtBe52sfSDUHudhYnD8bNp4RnxPVgWYkEMs48RhM4FpPJ2XNMK7dTKVWGAJyr5rsFJbp4j4MovQg1jbwt4ybYsV",
  "key10": "48PZrmg3ttHGSV7JKxZjzyH23ws828QV9TvpJ1i4sbEHHiFaSAN6hNMnohPtcfnUtpVFpM77WJ6QBYdV2DrwfPFt",
  "key11": "5iRSkqwa38LvysQfrMFdroTEwMH7uNx5L5vabr7EH4UmALM6nfZNVMEMK9EmaTvZrJUmpRuYuTqs33mCKbgKyqVB",
  "key12": "YGmLY89UPz6X6ZbyhEMw3wxupnF7zEdCSWBmHeTffA4RaXa66tYXHKZdZPetcCuaseW9Fsz81NF7frx88vBHLjn",
  "key13": "3xTJw4kDBK4VMGDH9ojwuoLvdukkCSYXshVpKQyN52RdXLPeYxjWH3ctYVb6W8weqfH2RAh1ef9NZAjunAV8BfwQ",
  "key14": "4mBdxhMkgTznky81Kx3BFXMm7LaTbAzTCYKxQh1kG3Q7WQo515xAS4pRKv2Ba5pvDMnfPeFG8z17ap7EuqQNFC9A",
  "key15": "53uw3obLcY9f9viXUwMLSGs5qxmgpkYfPBp2E5WMFJBuAW7xH6DwnYN7a7nd1Sj32mBB4mjzQuLiwVGkgSr9Prgn",
  "key16": "4NYrJCFTvFMU2cHo175phsCwLDrcNvWdxipcgNRrorfdSDu2xMiuGHMEDmxoVotNy9yVBrVaDTcFaZ588QtDtQJA",
  "key17": "4aweypNjg7Bw7qfCe4SmFyrwg3xuix26Gt6AKbYG7xpWnG9gZgsvbGGtEAZW4EReCm91M7d6bmaVW4sPHfgTEVVK",
  "key18": "33SCVQduw3XeXe6JVyU6Uy9pGQ7rr3EXwDP6HrkZ3Kh2EtgK91nVLu472QqfoXkz7owPPvPgzLUpprhmF2u26qum",
  "key19": "C6hVD1abDL1roXW4eYbfMQtv8tBRe3fjsVg8DXGijn9y9cyaAQ3pPpnT6gmf6HqkumSKXKuztgsunNCwJyT7p7c",
  "key20": "35FGMc77Nampkua14Jyxqgakinjaunkhjt3zqyiKTfCmjQ29R6CWtLihsEzXgS6hdVE56w7RytiMqbjZC4C21CsQ",
  "key21": "BaQ1DL7SeHJdydo4QvMxZgFZ1hgvEnnLRRW7mDGUDyjjzyY2nGJFeaWyEZnXGsqiJQmD5wWDu7bhsNfdEKA5376",
  "key22": "3DTziiRzyn5hUQ8y7SubXhsTztcyME6XnboTKQkpBovjZfcsJS153s3uZDK57xzcvcXokXKMApg4oFrCxYKhAMqY",
  "key23": "4V3vSNMkNKXKj9FwnLRrNpTYggQvGJPh7V21fMUpjuLqpuRxBTRXgwGy2CdDczjkMr72xJ9EFkdKPCMTgukzhAUq",
  "key24": "pT65vvXyknMHBpKvScr7Ur73iSxH4CFNSkfVZqj8VCVpGjQqH4K9xWVif8MH99qYxyZCUnE63JMyvqNVM1iK5mt",
  "key25": "2RrSiSZZzzh8RAFxVht6Dqfr3qew6u6wsN4ph9yC7ASTUNv7tuSuMQEfzKAbV2hW2rBnEawdh7eQKVbX8VBtpi21",
  "key26": "36MiXSaMC359y2Mf15pbh2JthYDK25H2n5wNMkzJV1k6E8yNcdzDMENDHpprsEaw4KwCJsTS1HQDm8qwfSZPKDEN",
  "key27": "22mGtPd5mVE13QWLsjgGEAVrq686eG54jbUgc53vUoPF9e9FLodBYhwq36JfyYyWbeGqzFQH8vh2Vq9kiJHZZJdL",
  "key28": "WHCuLh4c16TiqWuXQV9hMsFjMFnTPadyxhEqDH6MzRgNBS52nRawdxNC5k7VFfZx2LYRKm59WEbMFB8Ui4cjZ6X",
  "key29": "3cwYTUdvk9MdFcYfzS9Zo1YGQs4oRjXCrXLcyhZNXbTxUewBJZrUpRnJhvXqq6Fuc2ZdFxwg8svM5BNb52wCYJjd",
  "key30": "5Dr4QYCcX8guhacwYmXM9fTw92JkSn2Msk2fmgnpUmtVgEFejh2dbgdVSpuu2GpCwDZi7Jb7wRe8VRhX1XqCmwEd",
  "key31": "4wNEaHXHobVM8QnJz6FRewPuvgPXeZc77VEyDHSEUe5VqkD4qgq6A3ACihqeBUF4QepB8owoBaGxvahiJxaNp9Qu",
  "key32": "2MXwcuCW7JpPWFmvUFdQxJKBhdTXbDLLZdzEMzA3HiZcoUi1UNYbZmxMxZ9vFkYPYTdzvsYUiT8N8o5poypCWo9y",
  "key33": "gBVDHxKmrj2AV4ru3CAwqY3aMqqgbbnJuxRg15WDnxD8vLJQQrbiuhXJQTXg6PDA1dHVnhLrEdFfiyYUH3vpEkT",
  "key34": "2Vv7Dn1AZ6AWJaQpumfjdFAVV3n35WaktVinRjL4omNptUeKHU4Yt8ZKzNUkdF69LNC2PP9dWUCYoykYfQktEz4E",
  "key35": "4pohQvHzLSApA1fSF8uusd1dXUErVabKzAMWLwFW1V66hrTkHvwX8FFVDgku6bDNCtLXz5NQFrMNFJSYrtSGhjKk",
  "key36": "2LFw3v3j3Utw6mgEg3yueG8WfnqAqzijxFGGQA6RHjCNxAcupB4uJMDxKGXb6GofDMHbCQ6e27iYBLAFoJmLFZMf",
  "key37": "8EZgFYXuW6z6U9xzxTrV32gbjdkRmwASsNqpfLk6G7Mry3ZN6vUWeGWSAfz7GNVEktrwaWMnHzECBtbHuStmEqv",
  "key38": "2wCSq5TD9b3FewqcpXVTXZEKCA6VMfWr6VuT8g1XAjDcTPrEbhNeuiZuD9k4v1MzmeEejB6JzairVCepxzYRJ1DT",
  "key39": "4SwHUXmNX6o72PQtGeYaiEMpEuN5DjwWLifx6B1gfYbpUCwWzPBoynJVRWL4zuBYq5mcg5hAgrXfp3nTx8D3hxqz",
  "key40": "3cQUhUWQdpcSQEzKqmWjQe9ek6TeAHrWRkArUTJ3qqDTPcNCzyfqr8UwTbUwN3oGm7VoGCtgURcjsmn1PWCnVgq3",
  "key41": "2oHeAjrDipVxqLgbLY9w9pFf187uN37gZto9jUvSbGQZCogTDokp23byP3a5NPZiLyFTNmTgHZw4QKkueA8PeUnL",
  "key42": "97dJkjwt3LnywxZSiZAbSz1rRzNCmMUJCguMd2XFVYkqW3nfzWcWB2sFeFqH4CiV4s9efW4Fp12fsDoG5tDZmw1",
  "key43": "4bqYL6eWKu5sSsWMrmiH4qFhuEFHe9ZXP7nFaPXs6qvVAV9NyPDryityXWGhixUm2iyQj7FAoPw5UjgyJT7cfAEY",
  "key44": "2QdUi49Z6BRP9PcWdGjwsX2RzKF4vb5agi1p6yx3FaV2ouVSG59ErjW8m5n8KTTskqowhW6vpR8iaA6b88rXaYsV",
  "key45": "37x4JBSpw5QSqjT3aZnNTfYPJQn5iZchjtyR2Sekp4WEL1wmwQwh6dA4ZwLGMZQNVDo2sKi4uE39Tt82JZQHvBd",
  "key46": "228nhAwjciXGMXwsLUPCJchwPeJcyBX8jE5ScDmZ1xZybvG7x2u3o1cfAyU41y2CC8axTgKnBZ21tnLt2pAG4BcM",
  "key47": "2JFTafzf6B42v79TYp6tc5zB5AJt4Yq9tb87Fo7QvnczWVeMxbcmJjEYowWf1P4TMxDW5iz6BRr1vMqSimaKbe5G",
  "key48": "57MYD7LxtPzA2RP3sLWK9de5jW6LjRgScyh9upQCrEy3DYb63QjRV9aaCnUtXkaqLQm4hNmmgkhBjjcsAcDSkBrh"
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
