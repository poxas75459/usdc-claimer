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
    "qmLegTqWu44jmSL7WR6cUmv7XSnHyns3eGMBRQ9kyvSv7ZebBvu6ueBwDWuk74zQPgv3XcjxdbYdJguSr5zM9qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSB7ZSwMBjrJFBCNeyaSuS4bfkC45ZCYrDmwvzJ5MEXSTukSbVvLAbP9ytM2MPeQSgtxcNNNgEi7pE4mp4Tiurf",
  "key1": "4tUTRi4S7Fr7mJ752UdrAMgWiCTufZexTLrAWCAeYwj4GbvYfuvQDoJ6bRaWCcTjkbrPf2DM58VC5XPu8tERPMX9",
  "key2": "5wznvLeWThFjY5jjjQkvkGy8Me4J5VPRZrR2h1Vn6oRtsT9qrQVsJrJi2FHf3kiJzr9gkLmtJhA27JebfgRDQe2o",
  "key3": "2xMw9e33oF1n4stPJs86rKpSq5SM2kZDWt4v75sWnyhAHWYi189gLPqs2cTzcBQ7PVFbD3gVy3Y57pozLQtJZbo",
  "key4": "2uhZQxuXY9TMbbkU5NpwTDbSA1uNW1tktbBx3TzaX8UyTrmZ4xumaBzf3EENAAFSWGnAYy3dSZvPc3Y5hiQxmRWb",
  "key5": "4YDwao8ne5LMnYK5zPiiwC15nJ8njv2J8uMiaeqrvaVAiQwawbVwq3cGp9fszByuxe9PsksTHszj4a11xcvFVJNf",
  "key6": "NL9o5TobFsBhGyY3HfJxsN9d6W3piViH9iH4aVnvxNXpfzvToVAGRpdbLQCExHhjUWjjt7p2u4A6zd89VFpR482",
  "key7": "4R5BaDHyzQZVTBYgJnonGyJ4YqYKgqmiKVyXBmmLfjxSwN74rRTjBB5xBg2BWYMoZGM4XkzFSMZezWWwpRmi3ufa",
  "key8": "2jpkETL1ppoDVQ5sQLhuP4xhGdoaQMvJSeveKpduKohh741NLzVSkRSCB9bRbTQAkZMpJJYD4BHFhtU3XbxA4dfm",
  "key9": "3VhUXDntztj8eFoGGqq8vco4Dysxga3rPTj6Z22aKPbEUf9H5cLZCX8nXX1vLG3f361TcFoDTs4GhC8Kb9bAG6kQ",
  "key10": "4GU3V8xEX7yARw7MXMhQadx3ApyjQY7bh73xFnNTT4GBzF6DAjYY7krBQbswEyBGvL6uKiMDN5JyQUn52KEzYPCk",
  "key11": "f3AcvApwzJAZzqFpf2W6DiMdHLFLKdC6wQd9wFzNpP5LaUbmhA8UxVRnFPiAR1yESdVdYXPYitctg6RE5e6Nwqy",
  "key12": "J9iSCMXwhsKjH7Ahjzfv7f5A5rJWj5cSKBUaP2MqV8KdNoUnWdqHwwVrub18TCcku3ggFnSx4ZhzTHYvvnHt7cF",
  "key13": "21mSWbW8k2tymC7656NQY8bgwVhUwmqdJwbv4mbdjyNxp98XaXdNtGExcssVKjRXha7zSWLnJ8xbcpHmVrJYtF2W",
  "key14": "4KAxemx3acqYjT2pmUG21Y4XFfnxrrNUBYuekqiDufTYNsKDoQinCZPScsm1n7mDPmNrqkHttdZd3vE6rZyUtwuU",
  "key15": "3AZySuoE2dgDM2xapfjv5ikvQUUJ1qptUcXjQR3Zfk9asZxrRcQfyjDMPkZfB2gNYJKHk6P6YZGpjmxPxhqQVGNX",
  "key16": "4woUxMGFdCNyPPjGYXLvtbrbA9tAyrSUqdoQsapCgs32aiYt1bGSsZtFhoC9NhoNXqLoajgZgwuqKPjkJs59KuyX",
  "key17": "4J2BNauH9KNzWw9NGkYJZFEai7JjrXNRoZdfDvXBNnmWtqw9AWwab9Lry7E8xAz6uPvhzS8K7x9iBWtQv4z2iXTo",
  "key18": "25cyF2k4MMsMrcE6gVTZbwrsQ8uwxBnUa7c7aEZuTm2XebsGhARDBiFeE49zUcaQ1ypdKygrmep18gccKrSYjW4a",
  "key19": "tznvqAgz2n3JTJQbPZhiRSNLNjRWHyyBSaHChJTzywxGyZbsPT11rrQnu2Pj5hoRMAjNuqMbhkCx7NfcJAy6BXt",
  "key20": "3Ry6VYfTWJSTSqQGhwJyq7KQxRAyB6voWNiY42WyDoLLVCk5ks4f2mEhi9sGtmFfXbt8nqbKJ3KZ5DyE83Q3Nm5K",
  "key21": "3DgdSUcKfAvhivSecuJFiEuZE3r3obnstKdra6Pt8zZxKwyt8XH8KzyFWKcPyW4ZiMbJk2jesXaqvj483GQeeaqX",
  "key22": "43F1h8QA8AubxP8U8BUqMrS4TG5z9mvWzmP2o5aJJd2Hi5KSzwbAc2AfNVXaxQ1UgR1NEPsXCNHkvb7h6Nq7kKjB",
  "key23": "4CBNcVs7F3PvntmNhPDGBAqerDpCMbTkSwHFzPY7DBu6kp8LxyxxUK9U4Tx64G9FRX8PyTBX4wh4LZbXC615Br6Q",
  "key24": "22H6AsGrRPuMLpxzMHdQ1zGWan9TP6GfwnJJ67bUMJ9rKxZ5jqTbSV6Yum2ehAC5tLwgBAwthDTRQRcGtsnDuLvq",
  "key25": "5p9JR5Jx2qeczjzdiFYkot6GaG1B8267dyzdNhWydU8hzSV9BoTFECp6cz7CEMuuAfmzizEAPLNhbJyZHSeDymME",
  "key26": "675AHRQ6G7ZLFsAfxsKetAf3fka6NfSBpMPBvaYuGo64hxybiLs7iZgfbeHREy55gUNdkQkxiuVRTKE9CypX73UW",
  "key27": "43jnfgqpvhvnBUTVGTfxQwQoieaWJcuy1o6en3m1PdpE4AbCPiupv5b77umhFivFoY6HdNc4ZrvZrGAg8gQeCsGY",
  "key28": "5Y3284UVKFak3pDFtV6ZepRDX1yeKo2viL6ycus8YKB9jHKAyiRTyaPPA6QyH7pNdztboiS6aZE5ZrLXESGizVbz",
  "key29": "5u1TgX6Nh39XR4nV6fjhy6PgZC9Dg1pFR9Q7WWPZQz6DKJkM7HjZsPNn6oP3HVGA17w6Qg7F6v87QKEd3HLdrnEx",
  "key30": "3y957T9ftX9NRWbhCrja7TAApRfabgfqB5nKhhp3dmzfb7FjZt8vy2Hiw3H19HjXtXVcSmRgUJbjQF4RDyTd8qfU",
  "key31": "37n9GUsSW5qm6aWJqvoAHnRCwGDJvH7EfbyTyD3uyiGHua2pFVKcSoLmGEdYRhz63iVkH5BJycZvG53Cb457pmEo"
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
