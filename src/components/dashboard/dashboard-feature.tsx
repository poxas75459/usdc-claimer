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
    "sKtxrZpmqLyP84ccBWuQdSQq843RrUVTTzxfZMpSssrCoF3iEJxjnnGMCsQpzGrXvib8zRiYRzVkc45owMRX9AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33iTdTemjAvDCtYj3AukFNHvoku5tjXtQLfFQWpNRcgLz3GxHZ4ERUXa7cqz1D6DyWvwpEutMukTAUVHrg2zhLTy",
  "key1": "4NzUZNf1z3TsPFW12XpPhZ5Z5cDHgpjYiqirjggDMwA7mRG9DQdWanbVTDydDQtJ7TEcuauXDpWMzFg1QWVD7q6Z",
  "key2": "29nU2qG9QN2ftAvduKDtu4L6jZHVFf7ZhRppZ6AofXedbkNWnUe8vxPXD4XDwWWnKXHmHFEmmawdb65qWjozhngo",
  "key3": "2EaxN6dPabT4BCJtKnTx7cA1o1qK1r6Y1rhpuf8f6Z46PWFBpqoxb3Vyn4xin2oRYJCNDrf48GN9HWmBLWWXYnbi",
  "key4": "3C7nP3VyiKayXSNwEydqnxivkaSRsdrUHVCRMEKAWrL7mXjEh6EnbUpoopi5TTvmq513daJpKRPPdauE9K5k4Abb",
  "key5": "4iGB3AkkAF63Hx8UzVuotKPZTaDCmftuL36wTEFUmQzxCdW6URjnV4xZRHpdJHeVqJnWLWa2bE8U26buYKZUPHkM",
  "key6": "3cQhQqo6T9N672dZTErZhnSo5fozdUF2csayA8a396USWP6kmVHJUzFiSmstytHPa7NXywxSASQsVVSKYuLrw7yn",
  "key7": "3EHhws1T683NfisuaAvis9GZ3SsW9Z8DGofBdVCeXTimwJYDsQ8hEyAU3kdiuds9mSJPQXG8C4GpchfsiCBRZSBX",
  "key8": "2BgfME7A4ScqMEPYqvFnrykErZXtEPxTsdBe7rCkQkPa4YPgFTqnLxkrmngLuapiAkiZbtFJ2A6dNsDCJGSk5KG3",
  "key9": "2p2LQoSdtd9NARvceYheTGGf1DS8xXMc1rfACUMcL33UJmqFnkVznJzK6m9wYd4aoTBPi9ZkFJ8mwxCknHRVjemc",
  "key10": "2vBd91Xj3PnXiL1DSg2g1ZC8QpHfCZMSUpYsgswF6gNFBpcVLSg5DmPaHbKiL6NmwAJ8iB2CN3JLAcysXCjbu6w2",
  "key11": "38QkDDoop4qTLn5o4GARv1FfWx9GCpi3rdw4k1xpgE41KwdQ8a6uTmTG89rLDL5Ua91LjVt8anNY3nCBebkwCd3n",
  "key12": "4dCuo5nNygBawiqppvpvXmbGqKfcnB3m7U47FwMd1CNQtDjQrbFxouzDzhzFzphNZyCwpYPnXHAHF7xo53bziPmY",
  "key13": "5ixoeDw9VD69bZCQNPDkrYXtyZTtG5uJR61NU4SDsQCCXTM13S1baSPucPFVwcLZeQt7Kj5UeJ6B1FoW13yTHAnj",
  "key14": "3wVA1g9AAv7aj9CqbgbRodorXbZsxkMrGzHB5i1iAArFc5PhQWqnesBtdbEwLBU6DvJx5ALFCaLeDzFea18ysZbE",
  "key15": "5yWR5x9Dc3FqG1nXpEeSaQ7WSquXZJz1v2sG1orc9HzGYptKAGezL6YUZnWRcv81YzZPDUSt99B9XbvbxxE4a7qr",
  "key16": "4wRiLKmZAK7nLbAba6avhU9mFjP8u8YV3mjhQhipf2GxE87TxE7fBiDKQ53zrKiVtXmKYuBadisqkzKS6nXgDtgX",
  "key17": "5ipzcUTbGCsGrtpyE6EcdacqonoWFtN1WyjCzr9Ezcxd4kX1RLzmhBHSgv5p2ykJ7widPiuoehRN62YhPt8FWuBe",
  "key18": "518CvBc2FBz7jWM6839Ziw4F8fbtWQ168sYroRG4oyaYkNmg8UF3JGj2MkT7kX33ERUhLAZPkxuRkKZAHSj8YmKk",
  "key19": "4SYtaQRJMUadpaQUTbXvZ5KzxmnYccyRf8jdNh5GjsgZSmcFG5gxkr2gVXgadRGPxv9Tz9jkAWsJ8RAfXB3fCBaa",
  "key20": "4qr8iB3YvC1cKEFCzJDZbE5wZuTCn7fx3GdndvoNBoJQqUsUG1XuZps2ZfHRoD78CwQ7ZCtWSDoqpbYauiexU8mY",
  "key21": "o5RexWgYqbGNXpNE4HALC7WiZBCz4MTdfzF5nboC2ojD8SJieP13cUWx44KX576ehs4dGDCCdkvEWh1Nn2p9YVQ",
  "key22": "5jcYQn24fYCA6cGoF8A1P19dy4BYTLbSEytW2wzoPqeTTCRzsXFeeF9wtYZngHnTfRRq4nwnKUJwVYZkm3fEGWcq",
  "key23": "5LDjABGq6u957NMVrG77nHCSNY1csjKR34ThMai5WPGsHnkZGeLD8s88mqyDpq91LtkbnthqkhNYuujXHRcEUEiD",
  "key24": "2mYcXNDb52gxCAEWn6UqY6vD8j5r2AcHYSF9Ppi7NnQWzYjT6hKiSXd9JeU1hYn1Ppz1AQPkQ17CrXct3cjx9VLk"
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
