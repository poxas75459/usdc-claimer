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
    "2whCfT6rV3autJfQzmjRW6KxB9dA7XcZX8NJr9s2dbHedhycG6AYweEECouzeFRFj33wBYKUQ5838oV1j7jSSNfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcrwkbvsYMAnax38xfCY6h2SrwkZfxrZXPZWTqoswVhec1WJh2HBXGSnJEzqQRsDXUBw2Ln2dA6tJxByQ6igk5E",
  "key1": "4hr31wvoCQCiJP4xhoCR7yrrkoc3ACs8S1RDTmig4zZHwxFLwBegTxTnbH1PpHJpudTxAHSGd7hDBTow5at7mbBG",
  "key2": "2v5mJyxdP9gfbhoU4ekjVZ6GKPDjvGXuhW4TUPahzccUsbtqknaUUVDrNF7PhQiuSXEcHytao3DpZBEs3dtxJykC",
  "key3": "okWKG2RRJtk6kUAAW1ZxFsFyB7ZsEGi9NPuaXGDGY4FHJYmGUgrkn34Y4aeHS3C32CEomYVNa7p8yETewfs9NA3",
  "key4": "S4UvW3Kk6cBRkHABdbNA4W7DNaSave4BVMoApF7Wp8dLKZhjPh67XBpVt6LZXVQtQUVmBC9u57TcDAZMWwUGgbB",
  "key5": "26NxbKJjQ2B7VNwqDppiGmhoBTf8qtso12wKef9261Niu7v93x8xw79pyJMaaTWALG3orGGb4Af6hxJdstFVgfUh",
  "key6": "53EVT4Q1bLrksKpeTHkJnjFY3qBdUmj42iiHovgV3usCXgPTYdesrMaUFGJfertyFqxVAP83rzWEAVEAfCi2k47j",
  "key7": "4Ue32MdGYY8nbfBDr5uDbHxhVhUnkf6D9F5Gp8Db9RjbbKGLA99mpxM8WrMDJ8xteeBwE7xi9PoCGfcDa4F4ydYy",
  "key8": "3jjRq1Dw1grksTAqaf3rXaWh7qURnVquFKS3jMrbvvsYkqKUGTQ75vJ2Mu1gSM45yeujkahHH6pz64LUwbRUACQv",
  "key9": "2Ua8xQMZbMJcmu7rwQ9Nq5Y8sCCUCKMfy9LfFCB5e7aNb9cYicuREgWivWUhJVyBhTZnpqFtCx9RjYfVv2dSdi2f",
  "key10": "25ooNfRgKGzhsvCWLpTDgvHemHTkmx2nUTesbYtDp1SVUwvGVZ2kB57XocggURgQJwgUW3JJooE7th6PrSDC3UkL",
  "key11": "Lw29SnvrqafStzmS7PNQmPxNzK9MmCRuaZdzpD1JnY3PrPicwwtGyc545j4hm7oLMRGJp3WjyqhrTsdyMRREUV4",
  "key12": "3JbnLyVEBpPFBoMyGoYuQ8o8r5QtgJxbkP6EVQbYVybntSKQ4Cv7skExiMhZUHGyf8LdtowpZHzR5LXW3C2iRLwH",
  "key13": "2LRBdPN1XenDP4iCHEsB7x4fj3dxKjX3izN2E8N7LuEGHUtqU547EVbjwybV2b1CJymtoARfe1sDSsJa7ZFqTthd",
  "key14": "5RUxp9BtVNV1v5xnhjWczLdHSh7uCeGhyPaRDC3XXDjV9jtecQ4mUN7WFLA8K15HYFpA6QkjzFQeADXYP4RcpLQj",
  "key15": "2rwwJZh6xvivYWDCXKXEosfRF7KPBeTdjEmTonPTuBeagAn4LRqoKbDbS5jRRER8DuUFfrY7ZXBENEFeBNbBycHp",
  "key16": "2zDhYfkGRAxuXd8UdPht59ErQ9kDvvSKACR3iTCxbb8HCMsHP7PiJgje9vSKSgpAAPm3V9qTXkZeLtQrAQBRYTWh",
  "key17": "22WUCanM8rcQshFbd2scFzGdVzYqUFYNhVHZzASti68MSCCMeoyuBj5WN4F8ge2Uv7wm19Ecq1LweavXmiyCghCp",
  "key18": "4xZuMRB9U8pE8cCPavFHvN5vWTFU7v2c5HBoRZgj9tEmpDitm7NsNTE75TxETVnAM1jq8aD5mNx5UkoW2m4uE1z2",
  "key19": "4DkE2JJ5CLWoyd67XQD5t3h3C6YqNEsVB8cC7rb8Lj8DAPs5BAXWVK3HKeSgMJyrdKS3s3ebSPjd3jhohrsNVPbx",
  "key20": "5psyfEgmQVx5JAGh6TfixSx3xdLMMryhXcWZHcqXYNDseHDBWZXo7S21LTRTGLgi6oUXjxonvCSoYUuqfugmJnoe",
  "key21": "48XjHtHkqJw37MQjujKuR1dBfGpdxvP2ruqfbYFni2siFotuDNKQfQncjoj1oLCaWk16ucHkxgAW4JEwJqmoAWxz",
  "key22": "4ncr7ELeLZiDjZhJfkarGTmuY3yMRCRxyqFyevaNojqZFwGf51o2Kt6aZHD7emvMjQqEvKssi7XancQZk8y1d5MK",
  "key23": "36z4j1jhHWkQkA5jvPMpGwMWZxFbpDQtHE4ggm6SkVXWB9SvugUePXKd6fTtFcULcvJyXYyWkktmUaR8ZbrsvQ5Z",
  "key24": "2SXzfjUrEkqFW9jUiwMbGfrZTgyffCiw6ik65JrVbKWH6db7qSZiWJfWvJzJx5Q9TbV9sGvLUWb5mecgPtNhW5v4"
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
