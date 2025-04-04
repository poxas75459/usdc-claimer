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
    "2n529F4MHf4RDyAsMjJCXe9ovPCynjBeyP2sGtFgKSPcy9B4PZUPgXyHtr9pVg2S2Q3pWn9LJp9p19agDPKWB1yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7KvnRTLFYG5oBLoTP4GC5jSWpU5QoVkQ2b9277HHt5bHHV84hMdvQoUjJs65Di59wa2s5Xy5QiF8Qas6QHCPhs",
  "key1": "41Vn4uNPYNUp5MB2pHpwEPm8Koaf256hjksV9VdfePYrzPYHXco2StqCCHrgyzixguptTDQ66ttqbVHhoYquZjhn",
  "key2": "2t7Zk97ikYKP8hMubRJsN87BkLbtuwdo2s8moAkC8e6iBW9A1XuhscUxThoWyEXBMSHBz36y82ijuXnzEiyH6Q5h",
  "key3": "3bZWEgpvkmDjkw2tL1MgEYELCHUczAk7rzqK9j9bNpsn2bVzNe3NXAkzPfRuN9XXTvQXKY7y2P7HYdiKK638ceex",
  "key4": "2XUmm5PnNjoJo4xqFJJWYixx84Mw2E5wvbgwyFVAZwPFC4VN76yBmxgAb1avJ4gVfsq2cS9LUc3J7AxbjPJWdARX",
  "key5": "3gsNQELvQxwSgfHZbFKN4uV2GbRPwJQQsnkJUfSYvDt5qhbFqd2ESaCqyMYNiG9vKVqfnCnzsSe9VHD42KgQaE5",
  "key6": "6i5Q3ZrTpQwZeaUZ7zbk5CyBhNXZ4W9LHHDfhNd3p6K6CqVRbwMBEoqTAxsih4ZogcYSVWFRwZbkuKtkp6yKrVb",
  "key7": "598o9kpjKdeneaDrzpAdCefsAWag6KSThHLwkEgaevbWKfyPiB3aRnCoWm3JHgX34QFR118iiKWQZ6yfqyb1qwUp",
  "key8": "VEJ1W8DvmJW2FMdFm9Vw5qGQNKxdX555kdMutMd8sQ94ZSVTGGG82d6LBeG1AbtCmppJBWk5ys5CPcnCJTJPaic",
  "key9": "9EJGbyrrDNvhxEt6CQDpQBCXjYGs9nPdFNXBAWTnWjf1DnEKMNYk9cYzgQVJBprmAEJK5L7g3KNLbuGFBYvjbyS",
  "key10": "Bsp8rSizEh1zBH4VEmoGVRzv4PzeQEooN41uSe6Yjm8n8UnXpndgMN7X45pdqRYYumhTV3EG9gZXDonygfUV76M",
  "key11": "5rZJR8RMyeJU8qqfArkV61VL69G3Stv9WL1BQ2hKYHdXRqdRsjS6SaLTJJaZ3toYDQecAZyKeJxx5uepKwfgQNMT",
  "key12": "29wfs9fYPp7JQzzuXZ76j2SsNZ3VMSN3wEeCNCDMd9VUTQJTakyTx2TQdQJPpf9HQsEhjXFXT1WPsdY5bKdEDrJB",
  "key13": "4ze4ghPCjQWsstegp12d3W2VCttS5EYLqQsb9XFHJzhe43aYDmmJEMUHfhFaTcSfJeLwpAoDLQpH76pKSgZyRAkV",
  "key14": "aYNZaWLXs5UfPKqs4MF1KvoDLdmWhG26Wi3ad1jVLy2MgmLvXa8b16P4RSR5pNjv6ZUoZXQ1XXSnZs4F797KwvQ",
  "key15": "p8Gj7dyw97qzJkWjL7xqnQ8iwHxzCktMPacDUoFD5PrRvuDDB8Rqs5LRqyciVj73GEeuvCpi2mLFuchdVbb8ocJ",
  "key16": "57EWfs8rf1uoGnUD1bjTTr7qJB9apBcSzT3XeN8yTa18U9qVFB9uNWpq6KWqs7yxmgG4TPbHGHL4LDspYMgCyhg9",
  "key17": "3ZQxHeYHKSPcq9p5Z4Nc3M4MmxF5HhngkLWDHx5CMLpoYpunCkGRKT7VBA3zy5jb2S6dLMGmyQ8VV2bZGTZdVcTE",
  "key18": "35h7xKRvhLXKvHDJAnW4G271PYb94Bh98zBCkUsfSFJr9XAU9xa4SmWFdcbH5FyVoAjQdz8wmLwxx7QtrQ2cZV3Q",
  "key19": "4Svv2VrXk8fwkdLXwErYj78KosGxSWa8bEWMi8YPgorAePwXWwCL5yhb1ySjWMcrxLCbmQBTQou3xC17j1sEhm5R",
  "key20": "C2g18g3LmM9yrQBv8ownb5oSMNnDPq3Pc8D3Wnu8rypg8EoAYa3Rg16RY98ucyARNamdXNxEdgk63kmy9JTRoFm",
  "key21": "2jcvXZ6iEPtdfAG97jrBNGMTEFyNPFzxZigRRkwnGBq6Hoeq1GAyRGQWLdhzBimTom6pAnGkiSsKjFy4cAJTn2Az",
  "key22": "5aMAE1PpaMFSVQLi3jR9fBBRrnBCYZ2xvfVLq6cw8WZDB1JW2dW37nx1fRzeHLbpjcbshdNjQaVBCEMdpjDL5WxY",
  "key23": "2BeEJCSPuFdFb3vnEpvskwKNh4v1RA33ZCgoVsWN7ALofEKs3iWZY5A7WUDmjKdUtitmiqrtjAPvHQF5x8JzDXT2",
  "key24": "LKUGSenNSGry59kfVTYFuMsy7eY2qc6BnDNkznqADvZkXYk9uDSgxWCZcdNU9crYZ56NG3JPVqQYQi8Hv3THVAt",
  "key25": "4MwzxgP3zoK4V9CCvimTvvJCW9Gv78GXYjKzLqFrJ3oakQMc4QTpyftx3GUv6znASzcsLTQWnaikWWmMQ9iHrbqM",
  "key26": "2Sh5vbofnFXdQokrutjE9NbMpYhRFbzoibDm3HfYi1iP5tT2729TvNBj3Djj4JobzUpcwjeT9JE4LKVp5UBBhAG1",
  "key27": "4G8EXRWEPBjL3up7rPFKh1mCYwdVus6cKu1BY1kiybipaHw88UU5w9x6ptzuDK89xUb439Uovs9b86uDApjVJaMD",
  "key28": "2qJL6ZJ1aR4qVJ45vE8CujufT3LLczqwBUFoZkFToY42bGsJnwv3o662yeEye3pA7UvhmTn1NyRnPXnPUCViFafQ",
  "key29": "jRQJUUeyudzdaV5vkCaHpF932jSRgYiJ4wHHm3uWSXTxXQZ5w5sFU7Z4N4AYmdG4jEKNwbu5DkhhumHMBKbMdsk",
  "key30": "5gNGsoqRrbpPTxNDxvP81LQtSSoxfRG5h3ZnR2mP6HgDUBBhSmJZC7Yu993sPy7hSrsK45fJStUYx3xVsMWcr2qb",
  "key31": "3XedyJMBijBiZSPTnssP6BvoJwZ594U3AgMQUX37N9tKTbAkRkUn91xVdajDdzKUisDpHJzaEBXEkokzrhedXSoq",
  "key32": "56cu562fb8j1DnHZ6C1aW6hiTT1zCTrvmNSUTiWMkT46ztjBgxNThgGMuWHcHKRpvMF7YSV7Zujy8MUVi4E7nrAq"
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
