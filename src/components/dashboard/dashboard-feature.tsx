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
    "34hSkDjEdSBo7g6sfA4QyQqsAiC4TFzFEPW9Lu89b2dX38wv2qNVbHjkWXkDFxpPkHAfH1mmfumSkMMByLtvvfYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZ43SjXKM7Ky6qehi3MED6ABBfmLtcU8xysApWC6gqnqUTWGqwhBzYBpZ2QxiUzUp5bBidpdR5k7zdAWCuQCAYb",
  "key1": "5GGsBxUVkHnntL4i6V3nk1zfyeiuUgSeYZBQPWHuwKyd2Ly1KxJYP8vkFYKN5zR6EfCNDtpkiDbz8wezuwCMAWGG",
  "key2": "5EfJgBx7Jo1F8iHJGdnsAenjh5aPb8V4df8UjgsHNJf3ta7XsgpWNhdoEnUKf4jmJGyv4j7TqTxfanq2kSDTPpKL",
  "key3": "3Z913tiUZTqPwADHz1PvsnroXbnRuiFYJrX4xzsYnmqoNuVjLL7dUa4UmKPC4bpsS6wfD2iQPMkPGDEMUDz4z3Lf",
  "key4": "2byxAzspE9jSKsgowpS1Mi7UGYTUEoKCnBjQ6mcuXNhFaEUdQ3SF9RGnxZW3Lq4aksDEHemHfLYWAiMzbBorH56t",
  "key5": "2FuZYxoWUBqtmnuD9RF912ykVgu5vyXoTYgVaThe2E5RT5ZpHGb6wV56ZM6DkTwKLPsm6gf8p52g2miaxG1dG5uM",
  "key6": "5kavnVJXpmPtuDFvfrez6iH6r1wVWCse6hogHcc8bhAcv1DEKdEDjddrugXkXoykzJmFaxhCezvPMHBmpdicLF2s",
  "key7": "3wAceFRhKRqCTBEpdz7AMuCZWymt5rdzQVkZWNiZKtoJEVuJn5bGaVppZtdeDjQqgikoRrp7oGLNYv9i6bB53Cf4",
  "key8": "3xvYfq2jSQZWVJCH39f87RFb6UuasqjVFYQVXz8mpir4XjvBP579aMpD2r3DUonGPunc5KEtXcfyrGkFNH4ciEgA",
  "key9": "2D26tvki4AdiBghcadW6HprPxtm8KRcX7eMEkrofo8rj5w5BdMy4pKpP5iEKMgwHMMWTNFQxvkttK2VxSyYQaAYb",
  "key10": "4gkHJo8MVQjWQfuuqYhZ6FdFRg1TANVTXGPhiD7j1NiA6hCiGvj2GnqZhuuMKxWks97q9rS32VSV2DiUPNPQQHiL",
  "key11": "5BGn52erAE7WoYbD9VYCnnZ8aPhmKX6fQyDJFSpi6R1DhZFyyPStPymBNjrwrANAcVXjiqse5ToYyWKmXfgpRjGM",
  "key12": "4zCYSeYaHPzLd2iBar9WECRkogc5EjmaDC523SBQ2ge1hitK3zDzqbCwNVXuQFor2k6ZDsqqdfVoRBFjfYdmJGbt",
  "key13": "49CWDEKmnyjeUWjY2C7snLijb7aispYB7DbPSDfcek3gV1LBnnyWThSSUGkhuLAiSu71J7cgWr8fvVptPvZKTvUf",
  "key14": "4Ucn35x59cHikMi8wTYR7QigpvqfjZLfkKBv2QN2F84tLu6YKMXKwHpZqxc5zkcWc3uc5cyfEZY8v5uxP4qyidqL",
  "key15": "2BCat8LVj2UUubm7fwqQmgjP6zk6qKYGuL3YuhBZhGAw1GR2M4kaPnUBF1emdCssu8YBRAgAoxE3ZGmDQQ2AJyDe",
  "key16": "4vsWiwopKhangNJLidC7bYdHmgytHLN1nF9ButpnwGCuULCjMbihjRiUdgoMDyRT9rGW26nMsGnrzDsQqbDUwfni",
  "key17": "2NPnJdfjAH28Wtk5pVjBLTRV4qVdirjXXukyYk4FGaLKhNh4kn3F34HxNs9g9M2r8qkRBFRGTm6osM4nHGAJj5uJ",
  "key18": "4qic2wsm85bNHs63uPKLFt9oToNZpeHdyMREqyAoyhk1A1CERRJGACaWm8fAvfHMUgdFJGSPckXpRT6xwP19bP6p",
  "key19": "zFVey3zwprLF2LmGqTRmVsrMiRShLiN1Yq3DVgFcGnM3h2dX2EXGtj6pWguzAmEyvzVHE5Afh5v2nYfsV9bZYow",
  "key20": "2FrMguNU2HSBtYUCB798hjK9raEov4FWAwj9Ryzi3L5rZ53Gx3HoNkQ7mda9cd5knKadFZ1bf2FCBFZke2qgnzAA",
  "key21": "3e5CsnFYatfhqwBCJhsoXEniGPpHtgqVcbscttkJgvx2oM7GvMPX74VyvTwF3FDoibxoLopn3pLxUBYjMsNzK1Nn",
  "key22": "4kJE3sXnP7RQ1ddo8nRJeFSvg8tnPMxKKQ29A8DnVbxB2DKxUJMUV6nkF38CxCXQSSj8x9n5z3ZAGNr4TBzRKP1U",
  "key23": "SbPWfLoJ6abw2NDyaLf91Rnxa645VwAfvc8tiVwhNE9mxHCB1FjWqKydhc27J5t46GpdTKACGm6Zbqy6HJkmfXP",
  "key24": "GQWSky5phSEbDXcY3ZMsBThou2DMPJ17Yxih3SrhQRKn7mQv6ocEMMjk66Zfmey74cPuuqyL68C4r3HxXjhri6g",
  "key25": "313pXnw99c4F1x26xCz1LgMB44ZRoFXGr74J5pTQRK7vEuwktsZXkD8PDErTKZWav1i32MX9HfeZr3ALMvjCe2Eo",
  "key26": "5xxhDmPKLrJG6zgGvrY5QSrs8zpwtUvTSsotrdpNa8AY2iL4XSdEeDeVg5Qi29X2RPNtXLYkouiuoeFzKC29Zugw",
  "key27": "3T7F4yr3BVdBusv6DgXtMhTSSd7MCsWwpcD1xZhzPoB7t3mLR8MXTt5ahYpEBerm4vLNpHGrGFfJiQwcfReXnJbC",
  "key28": "4pAFnhAcr8pF5M9D2uCFULZm5oFvLwxL9gqadZk53RcLyPZHGictgdkRUEoeyJ466ykrkWBpmMcAVA9X6Ht8vrSr",
  "key29": "4uMchx141wPn9fM1CJbe2ivQMdRxZq2fjiLkeRTnGQ5Fr3KikvhW8Wa4RetEDw4ehFTPCEjUPV6mH1fXNRMRJbnA",
  "key30": "hzGNoRfARtNSGMXJBZBGjvYntN9eE47rbBex6ZvMEfUs5tzKR7sHPizygBiAXXsvg9YnskGZ2psjHp4R88v3kS2",
  "key31": "BCakS33HxVP587AyFH7USGbGzNgum4D8r3HnqT4ndYLY4t35NBWYc4ED7aqYVKxb63VhyWTBrVawGr18EN4BqdC",
  "key32": "3VPzJKRDLRSnXn6B6GJqrvG31hUXD8gwTjpsf7tHYdnVWyVmf43fgL47uTwh2S1tgM6kpysFib9NPNobLQDt4Qht"
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
