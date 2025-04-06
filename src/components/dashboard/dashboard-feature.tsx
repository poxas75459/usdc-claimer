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
    "4XSNPCBjZ4TisMLD8BxshcgJpnD6TBjcDX16hZ5tghMbpArCm8nwk9BXJ7hkHizwWT5eBACqBmV6yZZ68db8p129"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64naj2RdTwgWLvLSHV8cyaZPsmAyf1gBSs7ELsMdMgdjbQ46b8Y5NWNiMTTQLb5ATvniutokewVA3EpMFCiqktZ",
  "key1": "4iroayocz9zmEHTDbHsqAa6oaefcs1EVmhcTUJTehSWj7d5Qk9Bf3BKGGe6mZMwYhbchqxvL8BJnFPEg7BkCKnqW",
  "key2": "4C969VJUwQpLy9u1kE1C5XV23UzSKXuteqV4ytJs8GpjjgDyMQCE8tnJKyFBjnJp3cvbKq1cY5mEZLC9w4i8oUXu",
  "key3": "4TuT7VnG5RYQCKspe679hxXUr7RSMsPygVapRL6XjUwAP3kQ9vzbCVDk6hK8yFiwYA9F3nJMpCbNHwj1puKuTWAm",
  "key4": "25ExeZNRZo2PgeQcvVuKy76Kd12nWhHkTXkfAGpcEmPFY9ki2vYrkpn9ZeeoH3YbTYoWYpmutfxZFX6p5sp3WThB",
  "key5": "5PRCTuFdP7PQkFWWbtdYLZSPuuuWBfAUPiRC4daEyWpRZV1Pqz31YHZ847SQ3s2RcFgXfnQmRccj4GyFKz4pGz8f",
  "key6": "N8941LLLSCSiMm4wV39yU8aaqkRJyP36cNLGbSimbCws2agijvaPt4hAsXs9HVU9PBsD5FPDeGTdFNis5CfbbVU",
  "key7": "4tGBmFY9a1evw46vtKDtqaNgL5RAuiozANdXXRu1uRnBpxgdY3Bzzwo6A85RdrX9JpHXvU7BAqabzVKs7fJQCATc",
  "key8": "57mvj41FU2t41wtGhiu5SdWLoPGQVsv5kmakZ79ssmw13MBgDyhUFMCNb1NghNLk2h3ZesRbF58bB27fd3DC8zLB",
  "key9": "2NPxYKTUCCKgvmw36c3SSdDAhL7tEc4Vwc5gEbpMqkTbseBsV7FFmBKrD5PxvhxedR3nrmVpQuUXew8SXSCdBSDZ",
  "key10": "4SCvi6snGD6dRb5XE3kMDtfxtQM3YJezwhHcQv7Jzar9Mwf76Us7MKK4YXfVPrbExNjQaGeqpAGgsSMorxcmkZWP",
  "key11": "2816J8zWYF5xD9PCoT24ejGWLQA8LeQB7bfbiLF142WZExoCAzdb5yuVLzAgnJ4gmktz8eDbfZFko3X4Q9LfJMcB",
  "key12": "35HBuGx6EwESFGYhBUEYNHzVuXsowrubFKQxF9z9SvUXNkYiCyYNUKPDty5DHk7wVPZjrDEYoSEDViP1ke5d5T8w",
  "key13": "23wXpvYfgafhMo35UaNgBUFAzKB7AShr4MUE2y4fymeMddNAEWxCAnU1tue6tJCED8hVMYVp1Bou3CiowmVuWGVu",
  "key14": "5j4QqEetsFAFqqtnBw9dZQkQjGcDRbpMjSLwFVvFj5hV5NqZUCbkcV7bCMzWfu21Cp4u8Uzg65MBuZ1avmA4K9kG",
  "key15": "5LbgFjAW4FrHC42GPbakdLfk2c8jSR6YQemtJkqz44YBtdNdV5rTKLyFL6CyNPLUrxyU9YTgpUGJHgTtKnZaX94K",
  "key16": "2VoNjRNi3YDtQvRKyCgyAMxqzyrJMAaqt4BSbL7srXFgHfLZ25A5mRPv79T7aqcgiqS7fUHgsuGwvAvxpipZFTYq",
  "key17": "dv73ekcCGQ95Xr8BDdp259Zzy2fT4hhyf9bDLwXJASMaqc2u86JV2RGZAqpVnCi1MaFFJDdB6Pp7zDYV3vPViPG",
  "key18": "5r3ZRbpHB7ZdonoXDVNcNF6AFNmAJVyMFSAb4sQsaLnz5KAWCXuP3S8uGEM469GXx4939uJ2uvsxeZrj4b2aeXMg",
  "key19": "3xubnqQmMMNcWWVpHJjowqkLAeNiR6xLFQ1KuGZZeooUTAexrfsHPnzFdE9A7woEcwZpBjKtvUDsU3QobYH8SFXn",
  "key20": "2siRF45nUqfC8XN4MnkU2gfkCjyJ8DjhQHynGYKFGGBdNJhkh4EdV4b4NRPXKEQHxvbo5E5WswgBu1igM94jLnpf",
  "key21": "ht6C4dYcbUKhPrAp8hJrEWox5NjqdwULs2qLJUusJiBu6GyekJpXC3Vd9rJLrZSL2gSaTNrudFnBxjKHexZSJ4W",
  "key22": "3UVuvo7At3k98TTo5PPt7LX3VSd3kBk9mfabVzdaZDYcbvLPdDkXiH6hE3YSgUht1qWNFUrjU9BGsUmz6YK55NYt",
  "key23": "58Vj35A59jW8cy7QUKnoTvjVLVc2hq7qoGbVGHdrygSwvTSSz8HGVXT2FZF96nR84KAreuU7GfJxJ6ZiCspqoqKr",
  "key24": "7J6A2CGv4Dd1YofwxaS8265QFtLCp1Aw3BaeWSRv5D54RnorJUgo3a63eSgRVMdSUzJGGMLoH3uXnczdxDHESHs",
  "key25": "29S4npoq1r5xY5Uo1uK3h8gWZ4uRygUu9BXU9CD5QRqhntrnEnuEGxAyJhshGBfmmMUaoijN1x8HVnkzxnGdaymL"
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
