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
    "5GuUUZooVGPK2KkLAMqmwzJ5XmTpCwkLBftV4XqQNMB5yREkpKCJLDxYf7BXEQkgBX2NjDK9uJ2n11kV44eXZbCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hy288uGbxDvkduriJoQFvfs2QZsrGuuEDMg2nMdCrgaatpLA2Njpb8uFFcm8aBBiJFaSV99Q3DHDkvowvDTqVD9",
  "key1": "4EsB3gSFDJP2qtgwmgoEGUYdAnj5b1zizhb8mG9fcBksXjXhnP2p9K1XMUPPy2RTxNervszBa37qegSf9ZD2tBE7",
  "key2": "2EcJvn93xQgU1KRPvhAPF5FeDZQRokseU3SYM8gXv2HmWu3XPp1ZDAtsHvxPVUwfzQJtWTEAR2MQXVKfDW3Pm5XM",
  "key3": "3QiHEg3rRfALYB8nSWp7jCGyDb98zMzBd4h1zkRfzT15sNthPgTSNYHPNJ13MRHT3WyWmaTDtqzSzGhXhXunaJ7P",
  "key4": "5KzXvb1nLWLDSEsiUWoRHgXAtZ4mPU5NbyubVnbpQ7Nh82JYFEDj6vy7zAdjM2a245H6HrcuNMXzCP4yo5CwLF3Q",
  "key5": "3MRSgeCadXAinB4sAmwS7tFD19vT21XpD61ehyurm3GSsAJtZWjWXjsYAEAtzPfGjfXn5EJr4WyTJKxBGPTRtkfx",
  "key6": "53prnR2hbfJnZuQtHLymNikWiB5DgyQUhPyDhdbKWSYgv9V4fBGQviqH4F4MKxSXirqUu3jpQLCyGxbM5g8rAExp",
  "key7": "9KsWbBuVyegsn5MQduTJKt4bFaSNMSezMTWnZCNyKjrM8raue3PXFd4yk1EudyQdAaaEX4EFbgNJQDeW4vS72xQ",
  "key8": "oLdgeUCynvuBf2Qo7arHBMd6m8gtYcWnUaX1ygm3SdwEtvCtiPRU4i5UPusqvHgnoDXxqr7bgce2WmZ9aVLGay3",
  "key9": "3AnezqJMS48b6x9F5MWwvpFNKQrsSiwsMUqeHu5z3MWm1tnHdYVkUBDUzQ1owPhh6DbzhqXqcRiA6dWeC35tX9x",
  "key10": "5HZYu6Ynkx4z5eREHbgJyFjsjXAJid64kfvuzKauBRcoe6698WjHuVw3UumSHTNVtDQ81Z2vQnqkK2Wo1apCohCW",
  "key11": "5wv61ww2dHM1tPjywEMFLtBwhZDjLdxp8AT1BtwFxdYSyQUxUHi6TbnGWKxsWQqC9ptT8Eyc2GT5GxYCyjNBEa3A",
  "key12": "1Rtf61PaHTKXCGAu5qEH7spx8Sqok31pAPywVVCzpUAB7KxpL6ZFyrfzdMgMof4tnJCfvabRrCsNDukdq111BD8",
  "key13": "2a2obvZsiiwwWCKmLzztRGpVze8MbtBHUYMmz49j7jj5NcStTKJtE7VGk6zsy43mVrR9kboAAuhxLySYGTXwoymf",
  "key14": "kXMFnbNd9DinXXqxSNK9z5RsMwSYMSi7XsqLzJ92HQTZ4KZuM3jaqti4vv1FvhsvKzhmgQwpR5vzVxnhMGunSkj",
  "key15": "3T5QbwpbDkN7wg7rtVforZzE5v8TwrNvSqrNPZPFxmpy39vHSiChJvJbUuc9ZofuG1ErddwnbFWATFz4445nsibq",
  "key16": "5L7TfSNXTZP2peGgp2K5V4pCHoPtmjiWW6UjANezn6wC2qD9JwRGMKNSdAMwf3gnJkmZcUwpEo8VR6RHxGyXt84P",
  "key17": "wvCAsZTmQxuBiWP12wKP5uK9fFcxoCmPYdrDQzdQSLYac3SnAb5GTbL8HNeyN1AintQMK7UftvveMJem6RD3cnx",
  "key18": "2c6vDXxM3tDVfgNX7RaiNahc7Ub7fNsZfnUs8B44bFZP3gRKoUhEXGEneATrWpDdXyVQPzPBkdhtfMagePkB7133",
  "key19": "1K1c9h2VVftT2o288aKkwdq9n5dVharEJHmzJ1AbuACAjGR2zchYhLt4z3yjxEWA6PtBTtPL64n1qqjmbh3ZEek",
  "key20": "2NXpRBdHcZvCLkng82YcmQ4RBrZPG1mii2ybpvK5LVBgdtNQHiDqBFMRzhFP8mytoYqVAmqhPZcXUSVZoUVgJ1rF",
  "key21": "4XZY19u63HBfFswGW6gHJcR9c4eaogfUZALh13dWGjAoXFzoEgtKUvXMGRPigQnD64yp7FxxCBGQUZ847DFMShW1",
  "key22": "3aPkArFLe7iKWkJ3j1UtS2mogsWjwdNtrqkmxo2WfuZQ491PodLRFWghCxGo7ny6AgVj9AdW5TA88iBh2AoUEHFQ",
  "key23": "29Dty1ef27jTksTYuiAGcDWuCuCzfCZvyYEoWX9JqJeGx9qG8A2Te52Wo6PNkaL4PX4NR8npqMfe7kupPzd9Yn3p",
  "key24": "3UTfLXoweubr29LhebnjUJGMnmnqvsRLrURG6K2iuKJZWqdAoMHufLgTUcYkRHZhGqkvTBKBcGmbp7BxB2nPUKFu",
  "key25": "HAYPCkoqXWaTiQe4aezsD8fnFtp6gN2RmrCTY2caAD1YzSvR23DEcLM8phsP6jV86C6sBSqi7yTNGcsBxfcmsvB",
  "key26": "58pfD62acazgvVSfWgYHAE8gvGhhyq7XQwCejt42vgcZDgzqwAMg1EpBv4RwpxYEzhz5Q83iJSZGLhT2iFNo15rs",
  "key27": "2FtHJWJHvACWB8mApiyoCdcdMYTK6cKftmNtqTgXMDaaaXiyRdxyqgjST2n8fAyc4SMAzhbv7dZMCkEwk1zgthqF",
  "key28": "29ZyeNVBmMKN43n6dtCGyYMs2axRT6mSZnSAuDujSG1Wv2AaeEHK9keV7ogRDzrT8ryPeCYnnt31uzKDZq4eWWcb",
  "key29": "2Js2gjX3CGk4yBvbBT6xGDmeDdoCJ9R9dAcFHj2bx4LZGH8Aq7EeV565dVdBM1pnQFoQXjexqGCoofm66N7jHbU2",
  "key30": "4BZfC4gdtAV1NLs7xdF9sn516R7AsTBUKWdCAhHe1mruqW41eQPVKySVjkqZ5oHqxbVxQmWNrMKxkkYrnPsHiWc1"
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
