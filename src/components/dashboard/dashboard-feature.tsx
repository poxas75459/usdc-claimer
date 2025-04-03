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
    "gAFsPAdtkrcug4R82AaYBKHaqym4jtU39VBtomC5P5AAcX3LCJDNsCsYWHk16aXXKnwUb6B8BECiwEBV4ehtRHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znwHqFfZGQ5H9r6P2esjFGnmqWF2i7es9vAsPdkiE1emxvUU7mQyDJgpMsZZWnLsEUg4vj7DxXuSZcQyYKhfNwj",
  "key1": "5uvZPmAm54nzJ6L5RajdSXbc6naWD96DDhDV93QEguq1dQTGKxtdGCQC7XqcwDbutYga1G9GrApSReJDAvMJHgtW",
  "key2": "3mgbxornatAegDSHaroVzUQrURu7LkvaP4LHoxZs7CHW7uuuecgtbZ6ZYn6SgWkbiswBF6bGrvGN4eo3BxZ3KFpe",
  "key3": "3vAcopnvtGLzgsjwLwJMBaUW3zBycWdz5Q9vnvrg53E1u9FxGHBoXibo6u7RxFZ7AztHaSRczssBwXKaTaW9hQgc",
  "key4": "5oDuLSvMyHvnL5RJiTomWYn43pm9nBbNYdfC4Esecmjfb5W26gvRF5r93nChGJymT3ughgbDVKqeDppWY5gRTk9V",
  "key5": "3i25gubGARtLAjt8Kan7RaaRytb8dVXTmEFfUpSifgxKPB4sKPekWofPEsPDBvZkVz5Tu1GXRRHLeW4EqzMroy1m",
  "key6": "2JfaK6wJD9BMWUcRdpTnXAE1qGbm2726Pw7sQP3bq3ckMBXCRAFzEFeEZD2vrRxw4UhL3w3UbeEn1T1MeMAzYw4t",
  "key7": "4MwWKfiUwNh6j2qzZ7mdQU2JkvxgQk44DeinPnw2s95qFssMKzpXdVCwRLvahnMN1BmobhAvoQgBGxaUG32xeEa4",
  "key8": "7r1VZQW7Aw2N1JrCTLea2M2n4hZyGEtetxWA1PzMKJUvbsq7kD6fxuNGpXeYuLXdxrwft5F1BpWqDGGViKCKKHe",
  "key9": "5b8D3ZKM6iecvWV2CzibrgprVBfei7ckcD3xziJmwDBWRkwJabCyK9F2nGquGwYY2B5xLTZvAA5wiMdRQue9f8ht",
  "key10": "21a3jvhSHNqXbHSMpP5yEs4cvg5E5dA4ihgWddWkQZ4HjgzkwJKv9jGEkutSfCnhKD1xLSFSgDqitFWGZQBrzEv6",
  "key11": "5GHd5DmjnbV1VbM2eV4GfRmQYxHJCBSZCBNMYMQaysrwwMXfZJkgu2Hbppzgve6f9VvfhKe4fbmhgXemjyLCG1NM",
  "key12": "4FwTGmXq2WoEN9ETTyaLXmAkB9owx4wiidVZKvJEDJMpU4ArdWnXmbuANGhBfZGPaY1uTmraK8cgbHqb6wKktjLP",
  "key13": "3TDj3RCoNVgKRBbkrbpsoPsqsVfbjmzXZXr3UuH84NX1pk5ie3MhekUxoMXx1JxynSKpmJe33BbXdL3dXESA3NRo",
  "key14": "2Y5pbQsUdC7iEWDPXjaYyqcZEHg9sZAEqn7rTo7ELSr7ydnhtcjNvB3AbjScjDC2N3VcECSAmgtBz1iiar11UZvU",
  "key15": "29jxYsbh5VpMhyfBgYshRRkDYs6XkLvTmPQSpS7wkyHr3hS9i1f6uLYaVStX6bHX2rxYjj9dHQT51VNxNTc76jQp",
  "key16": "syYEyp1Y8FjJcYWMsipHYKpkNV2ukRjpbL4GXrSdsFmx2ZBqAb9D2USAeJZBYA178Bz5egk7FFhJ38wuxNJLmFz",
  "key17": "fKL4H1DknMisXatx7dkEyHtLLhx25qTQ6TLY3znyd9LMkzjiJJB4o4QGjReAXWRD3YhSmgLrXAaoPd5L1rHjgDv",
  "key18": "3N4sQinu8pgpC8UwKynkPR5oqzSqyfgA1FgHFFMo67oyKHCAjw83Cg2tvy85UHM5gN3W7pXfG5ZUiL5prADPUGgn",
  "key19": "4z1oKkrEtAXn6JEnFfiB1Edr9espp2jBjRYo8ZktqJaytngTtfLBppefg7geRck58yXXgK4XMfrz9eP2vaimspLE",
  "key20": "4gegpRJncUFuKeLDwWhfBn2M8WjCYT76hrWfetbrxJhySvJ2qSXncfpfKJopHMLitALxAtRkuw9TjNWz1w7smpZP",
  "key21": "38bBMyVZN8354aqvfEbdeehYjQLToJ1FBpBBH6tGhmP4zq4nRxWDpVyFYbp1nCYPyTfNbZ56JsRBvZ72J9cCyFPS",
  "key22": "3fTjh5Laq4CqLDiya3o7QSDgpZ12zR9pQQdpeLE39T7TsfxJWdUJ9jrsfi3gTmK8k1vvfJT41hsgxc2ueFyeAGJp",
  "key23": "aSUJ27NUkpufmVnLddFMtHZ7EH411dnnHs7z62XKYhFzBmiE4jx68vx4tTWEvRrayZ9PvbPVUMy6pZDHkHDNep3",
  "key24": "DUxNMzLGChULX3jZ6oiBc5t5dL15CFPyrGvtrmNnSWetwiQbK3AV1ncNSMA6TEHgTDb8qSbUuzD4NeX1HeaAvet",
  "key25": "5sTn9DDEk3VtBdSY3yhqwV98LrGKyua8tpRn3zuiT8gek78FnoiPQNDvz5jWhSLmN4xT3AA5oJ583d3je2geUjmv",
  "key26": "5d6iLWzL9ES7BeCHzbpygLpHEPDbHrhXVwpzTYyMR9XRS77jctbf7MD5BMbgNpgEeF7nurf54qVATn6T5mY4huHp",
  "key27": "64kopjxQVApVr3GbD4bZFaTbdHZys73paCiRe9jwPXMBrmdWGYTbwMkkBgcuwvm5Kesvsq13tZawHoRMXn4vYUMj",
  "key28": "2nCEE1piAxSif2mQnMk7r78fcGFmEtv9wsvjG6CLpFUDHPuUFySCb1YNuknmWWDPZSRSe2pc2yjNDcXbVgccPP97",
  "key29": "4Jxyo5PSMwmD9xLRpnia3ToUHKWr1WrvQVjn1kXQhV4hQikwh3LATJYP5hybbyv6HWDuPkjDnjjKVud61QRC1YRo",
  "key30": "H8cR4DLWD2vKQEgBWwYbpmVnuLH6E4BuEH1awg23BRmFsVw67gJV4qwdvbYP1C5wff3hgviMDrtaccir5YqK9Wm",
  "key31": "5AgcxWUfJ7u4VLVknptNEaoxzB4W1NDCk4gnvs6LpUEAGKmhra9zhHCaebPJuWdjDDakinj5PBdMLgemRJarEyXP",
  "key32": "KkRsFCdawYVWgU6PJLrR4jsvc4XGJ7AK9PA4oiThN5mPc58qVH813TfjHXPtmC1PmnZv7wRCabmf9evCdD461QV",
  "key33": "2a8t64hYrAVUVxJDHaL6vcCDC3RVivGT4nMJJudWXJ44o7AX2rpKAc2XvnbumRDpPA1xSfd2a1JSDr4JvfGCVr6F",
  "key34": "WvmiJGnVutemfwYjbENa7cxCzwfj93BXSin33rpMgeG813a68Smqmu7YVj22JzWH7rwNbGFxZPtxBXWjfhgfneD",
  "key35": "3ZaG68EjLnDavCrUvVKEr9L7Z6aFCJAWQy4EKVuRdQ6DBfntb8piduo7k5jufCmuv1PjTVxF8EHLAWk1mKHAZyUk",
  "key36": "4UzZ3Fg45ZCNd869d3h2WP2kWjwL8bDEF2BayLfcKThGjdHAVXTpf9Gq3ZKA5kBWpdPrazvqWP7FhEK1CZCpuv5c",
  "key37": "dnoN8PpoyM9p7h6AJLEaSTx67bBPtaLWES6C3iAZdcxJDeskyxoXdtAnA4QysQFMDUCN1E8Qr31qZS7QgE1neSS"
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
