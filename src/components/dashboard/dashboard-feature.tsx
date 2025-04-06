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
    "2jar5KXrPs9MVNKq6EAg9uj1yjPRMpRm5vxbpMHJ4hZeGwttvHkLjpSwJAjW9jzfZpNS4CcfBSeGr4joTZNY1V9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bC1dCQJew3GfkDXJXMVpdGMFwFYMbjzRXSDyr2KZfM5NUZao3HDpLks5NYFfX8DpRCRbHVtQGuT6F2WF2RX7FLZ",
  "key1": "3rzzjZXV4TgfDD8PP6vWkxmL2L4JbBZ7X5rNxhxGNHUq2y54ozxRKZ97648xvkETSiZKzaGaVoUpEoSZ5iheXZng",
  "key2": "5uvcjgo2e9jrknGGoJw6zTFTfiJ92wohQ6T7EAxGnxzRErmeuQfC8J4vDQQi29iha4RttVzT6Apipk3YKq76bYda",
  "key3": "3cwNqMhnaq5DHEDxoio2Hf66yyNewnmY8FkBstCpjBAxRWRJegBXggwtQNs8mXvg6XhjJrPLaLDD4u8HDCmAc3nx",
  "key4": "3wzP4SS1ZMJDG4fBXv88yp6StEparaK1Pjc6pwowYXxThFxAyhQhyYh4HSiKCsZQM1CyxCSD6ViANLry3FWZoZuo",
  "key5": "3zpE2VN9WF9ZaQxaZ9KnGPTda6MZhNiF3qAwuJwPKn3KA4WtAZH4sVuzPT9BpzrC1zjTzhA1ACz9FH5ck9moRQ7F",
  "key6": "5c3NoMK6mguQESPH6uTyCxmoNBJd5iGPiMyUcR5dTaeJ4cmxRMBLi6zuvegi2YvvuvUkPEWGU3mHVEErmMHmVya7",
  "key7": "5hY9rogeNaxycuhsabxDLGRhyk3xkcwuXxgB3BcmndWaW5Ji4HMQ7vuvGk1jo5JtVfnGnRdXH5k26WyPba14gzHF",
  "key8": "MPLT4ohLMdhAquUjtg6QHXAUeiP6KiTecadEdKMCizwLuQzjNwzwgTSPeyaJJia2n8Pyg49Smg9vATc2RUxKWtN",
  "key9": "2W8L7nFCTa8wVZz1NvfR54McPDG7y6dtzLyi34ZFKHNdMf1UeeWmMC9PEnz4iuEztLnfc7VpXYozTPA9SMPcULA1",
  "key10": "4wm58BBeww5qCQd5hyhwMTKqB3zdVTN3HnkbZYJGkrBXcf76CyrLBaPpKm5wqDTSgRxu4f64vHW1h7gUNrCir4gq",
  "key11": "2uA3SDhG4RnC69NPeSSp6GyX2AeuJYU5DQPdPnbf2JtEDwYzXwtvfJ8Y2tJcFe9SqNPMSQu4SyDhTeij7jaMxrcA",
  "key12": "2yjaAjHJiL9suZ5pnDHS3imgLtdtkVcg2E5SfPzif2Xv8ukfRPtNKAvom5r7Lgpwy4dgGBqsLNqGxT72ZVgt1AVy",
  "key13": "yedR6SnWZ2apCnZ1WG27u6c8QPsDkVydFAfQKSW4okr1oip2H3mZ4YqbpyQ1xkmnqnSnQNPhBDwKMDDnYyxaF7n",
  "key14": "5YvaufYgRb8Kbe71KYqjP4c5FgqsPtWPWoEBr6EyALwT9ZrWTbcitjgWtvcJ6FPu4D41oqcE8DBg93uxka3G7cFU",
  "key15": "w8CLm52txnmULH1JEYhA9DJE7zg2A4jf3eSjQ4hpWbeyEE2t5thyLZxPt5654r9Dht8CKKygUDQqZnPw3st2VXF",
  "key16": "2jbVdA8hfJ1aytuGk39jo7Ybz15K5EYftfS4E37iWE57s3bACp1Rq6Jb5JBYyasuprzKqjdBSzobegbsCEkJCJLm",
  "key17": "61Lup6TpR1oBxCSKJdMLDXpzymbh2VeWuk36Sv1GnA96pcpnGGeXEcceo8b5MvY27RqfSubCktWp3qcdMfLuyVCy",
  "key18": "mGLxDEHqAMuASRuXbtvGZJjFH14h9KRH1xeU4jTUXzPtSs4fa1VhffLYzKV67uNscUD56A2ZqDY1hG5GRzCbFR3",
  "key19": "5zTiGcyXqgYrMYq3QwZ5st8rgamqV8Du4Pvy3rYkLvjXMXxGCnGWi9VxJiN4k11xKzaKoALHs8aJPcRnYeFWuMAn",
  "key20": "4jkkoPa3RUhW3vTPTd17VjYcnXkJbrAAYS3XDPKwrJzjhqFcZxBJuWWUK3RihJL9WoHuopBAHtnuMWW6DrMNK16G",
  "key21": "3LCiiVenv6ZoyELmcmXG9dgy7VK88bQ5ZXw7udGykycfEaQRrzEjLcc4dV4A5JeMKTgTBfzua3K1xRYaLbcrt3XE",
  "key22": "4rTHa3BAmb8h6Lxi8v6Dg3LUVvGzUoNg9HMz1tBbxErkfadKRMZbxEortRHyBW8bmxsgo6mwsJn2HP9Y17k8y5SS",
  "key23": "4DJ3yk9mj2eioje7AjX4wBYvssUAF2ExkH4WwQwmyt24n41kmQAFKH5WFSRrCvwzuciwSncmEFSxCwxGZM8mckaJ",
  "key24": "5ve2PTAmEKSvGAbUh9ufpHiAnJaC7K4qhAuknY6rFmde3v8w9GZUn5Pautu2xx7pkEYJWL4ZrJFF1tVq3HjNXrQM",
  "key25": "4vd7KNehAePG8ZoRZGyeWHx4nnWRe4hGqridKDtcc8FUeFsxWQ45tpp9HBshoNQASzSLFyHAQ8u3aYXWAF1KEhwr",
  "key26": "2a3vziSuv6H1D2DatWfZU2RPD8k6iyMtSrzT6agSrrCcEfpiYJQosaqbFVRMMWaqovL5UcTMV9ciXz7E2FD9h9dG",
  "key27": "5HvpsYLSHHXaxQTiwNDqrcZE9wJz9czAr7kbhsskWLV9T9dwFTXAqtMfD9Fa7rfDKtScS7VLugRQAjSnPh6z8xS",
  "key28": "3psTQAei8EGte8mFeduGicq1VCfU8eZXUnppS2gWmgJDdpP6fgrSDxHEygVjkbbib5LdBdqLeRhyRquD6yf4PLSQ",
  "key29": "2CRmnfAh4g8kMYxTdKYnUYG5trR3MzqBW17uBamCzbTCTPhcRBWkSR8R21G5h9G8E38r1C5wiEKCxt1mZdxgRjLC"
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
