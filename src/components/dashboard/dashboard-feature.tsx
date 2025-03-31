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
    "3D2zPZzqzFQU4KMf1khVe28hZCqfe14VYTNqHWEzBnyaGi4CMPJ7YZSCzetXAsAbRD1nLJ2qCdkzLHZM3kzAp2PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RTrZDHmPwiR2bPV7Xp4ceAZcrRd1TqGq1m3jiae3FJaN2AQi9sg4chnGgrdhFXA1GSCD66KVaBK3yTPbqAn3gy",
  "key1": "4MRbBwZv82FseZbGFpd2c7BW8PM8vp5GpTyvzZUvB3GGfSyoZaAQyTjD9DLDYkcfqLfyyxCmqZkWPUhVNC3qhpmJ",
  "key2": "WKSseNTX6UFU8p6LQyXpXT1SyD7NHVczFfskSf3N3pxszJsbuaZWCxmTVBMGZE323yjtwPzWUezs4GmErfYme1S",
  "key3": "w8NRUQPYJnP1KmsDgNtHsQXiECGQsRNzucTKKLPR2Z5qbM3AWvCbhpAmGXwL892m3SoBXyKPwFJSLC1BQ3sEMAm",
  "key4": "2j1frzkQNmv24VgFA6z22qpCzwayrVcZ7whx9R1Lfx7NqyWUfwgu745Yu7ssuCRw7KqoLYvXBaMmbzc8DEjD8qS",
  "key5": "H9pfgVjySG4asXYfkn6y7ajTtsst675XoRn5PFMwKwrNsxxHQCcNTNK1WCQuyLgAXqdAy9VzdFqV6J3uGTKTxzc",
  "key6": "2Q8pTqEnjbuxmExp4PFAZTy4W7JsSbNQZoPQBWSL96yYnoTqNCSvK9Nq1FHbBxVatRdCfTe47LTG64HmMxKydts1",
  "key7": "2kFGdm15LPNNrNTYFZAwE3PXn5SgdCsgvx2ys2GCe5XAoUrAyHtTkaaZYucpuAvbttHFLSCpeNQahFF7B9CiU3rq",
  "key8": "5AZ2DQ5vd782Gmq582Fdri2vS1zQbwfkNCpJPyoUqi7MXE6XvVyoM9sg8nFNrrPbqxLieB1DxgQnsG11SzfGgfjb",
  "key9": "5B5reLNK2GArMEhtFJGQRjqg84BowgVkYwEfhAdcViVv4ay4ofxrm7dkgprB9wrsPgzFd7yrMDRCiU7P7F3yR9qZ",
  "key10": "281HCp6CbxEZGoxLmLiT867q5uXBhh9innwsZJ2jPi2BPvWYSWa94xt2Q8Cumjmxq2kPdraUL624gk3ncvB2xmNK",
  "key11": "2io56quUX67iqCUL2yzDbSr28hDstYuQ6gnE2LfuezD5XpN9ns81GHCW18ph1QdmcVTtsLiRFeANEoP8DDc43ZkR",
  "key12": "2BvioN4c6FvNUhg6CKragHzgAUCFhbVxJi4jtyeJj3EA9v3Soy7kSc5gmH2YdC7ai1grKpLep5SeijCXU2mt9AdS",
  "key13": "57bt3SuWTjVBgWXXQSHF3CrT7DQyQYxV1J9gdkHzGSHXiUyWazkgU48vnP2NkixcYb6ZMB77g4ZtJ3xGbkmRNLdm",
  "key14": "2gM5KXXzz5ZxxyVfybY7F9HXsCgBzDX3ourbwrhFDbqbqb6CdZPfoc8jypBhMKsb4mS4sVezZaLRKJJtKi6LqzYE",
  "key15": "nQtUU6aascGeFW72BjnnS2yuMtsvAkCPLD1n2FxjJpEcKYNvLkdLQCLwoDqhkiYowtXwDthuhSMJvKYTYpJXzDu",
  "key16": "3CU3TvwzkPUU7X6zvE1BjZ37dQZyBGmTjGwama4ei2LdDosrdnCAc6jZ1KfxqxYuGqbLjBJgczByUgSJwv4pbvg4",
  "key17": "2Bh2Wvkj9CxnApuA5rPFCNoWSLwqc76t31hQcKzsC9KYwpYXPoe2tTH3KCQNqc5yqYf6XSi7CtidXuEh4LBwP1V1",
  "key18": "5BA5xAtFLm6XrHyvMB6nqtjCeT4ZgaE7TfNWnqnqMVtAtGfQCk62pzF4fQxvxj4iCM2eoL1LjzSzMMySBgByEgJd",
  "key19": "4Njx6uqwavLfNMB53BBB8FxinYGdmysFBnX8NXwvcQcYUF8r5ig9raZKVkSZdyuVUWFdXx7beaksGMPkJgv1TjHV",
  "key20": "2pPP1wuiFuYzecZuUhyUfynqjfjEEytCZ795G2Y5KY2hDdo8hvjWSoRMmmenMzg3HkHX4SGmMRoiUdtg5GPVo9bB",
  "key21": "DiEJ3mX1zi3m43KW45KokKWBrmQSHyDQr1k3z75Kd7aSNDTSYvvLARP36DMAp5KMuPWgYos9yZvdycjfsVnq5ok",
  "key22": "2Ly7vB8SwofREeCBenN9g1m4zcwt86hNcvZ1dykPysW7f1N7bpHGyUqHRi9sAuA3uSKoxPiZD6kuY1FHavHKCKxo",
  "key23": "41ZmUvEbihZK11AeSjSaQkWhG73yirw9uc9fusXTk8RFQdNUE4WkjqX7Ah53qrgTkJjZY7ZkTxQQ4GDvoCpZcqJy",
  "key24": "ayHaMZTKCvpxAmgi6itaxXKTGMuqRchJqMDukYn8X7r4XrZ8m6DpFreLS3eSn4qJwaMfs9yGHzR89Kaktjxpe5s",
  "key25": "3qCfu8L38TFmEbA7fetoxHZ7pgdu4HRYXWK1qnhmLDw7KyQznk2768rveNnyfy277Vj81WQkQyN5BgdX8PPKGWGw",
  "key26": "3NWfN4PMKBycSvEwi4okS2DbgbPZrTSh8Cf6ggaH1iWPhq1M979nDdrXP1bu6Wz8PeQH8DW7g7p6RYZdbGrTBEZd"
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
