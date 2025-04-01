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
    "4TPr9gwvXxb8WSXbd8DMZj2mQEfbM31F2EYYeHo6BT1vpXqYANGY4G2mQ5ZMxuqdjNWDXXvULrisiobQ7CvYk39J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqdpFj2g3mXmxviaw7mcfqkrEosmUffzheTBsum6dU7CrfwiNAxApV89fzi8mYGVnJBEKiGKhpetHgSrdTruaUz",
  "key1": "4byLTpD6kFrB9KbB75az2UWBpYvswVri63gXpVf2NuuD3dAvNBf7QNPVvTJaHzWZLneu7iBJ5cJdeXiYf9bfauog",
  "key2": "vFUXoyJGnsmx9kAkBxVFqFAJNh6tzQzwxjujN7Nswr93pfcE56ervjH99fX5rfyBnFsfJkRv8RZtNW1QyX7Mgum",
  "key3": "4u56b8XoB3gVnAM1XgNYDXjLiWAnQBNhznEMLjj9TGX7cftMMDqikbp4TzV25j5895KuixJzDVLaDKD5S4NHGr7v",
  "key4": "4fh6HWjsar4nLKqoV3ZicdnZxL46m4dw78bZbVh8vKuqHzD43k4i1HRdmDz96hUUUEvdyn46GiGXEWDGPrRT3KVL",
  "key5": "2Csp5sCr45PeZMEmqaAYGkxidcZiKcdN5o1gA6ENntrrTR7BDQtvdiXyX2ZbfhEHzS6AaUWEMx3tYyqofFaMjTfL",
  "key6": "3Je4onbLeXcBAERa4UdFnCEmkTSmZ4oZYQjrtSHXqvkLd5GV7SeWC1nTUkXNn8u4puv79XKDcGf3xbAEK9Z3Nd13",
  "key7": "3iGSA26zfyb2CNKX1bVCiat2uHxroCVk2hegeLtKYkauCtsR3mmfW3WQnqTMBdp1ZoapDRpx8MoSinnuUQD6STSp",
  "key8": "2vnexG24G9YJ9wW5YQJt1YWj44zKAhdvixKVx13qqWnMKvqLDURCeiA9uHYRL3guWauaRoViJoWqQqy9cceVeGTP",
  "key9": "2wv1AqXjxp9qtR5gBsAXe3Xb1quXK9nPsqmwLxL64B4sbNiQ8Bnxcz6EzWJv59TV6rpiFhb4kpAqsMJwKTHEfWvU",
  "key10": "ia6Yq7P9HrnU9FeCo3VqNFjckuZUZC7FR7vh1se65NDP9dWKauGKuZWKdMeiKLNp3iEiWPfUd8CpvXEj8MSBiKi",
  "key11": "2FRhxpLmdYWH7XQRvQ4opoTWeu1jucS4hTBWz2v3jjY6vsR9dCMv2g286DV6MJ5CQ2ELy5XRR6khsT72YMRs1LNq",
  "key12": "H3KgqPWc59EZpf6ECkSTtATrXNyZv6UwU5o1wX51ZQbj8waRk1F6r69AwENzpa5WyaM4pS8JV1GUm4JZH3skwfo",
  "key13": "BS6biqnA1My81T7bscgHq4wfxXkm8bZDvb9oaSyWprHJBEKF1iHSjkVXYsgUXbEW5aXbK5c1k7wgRXEisgUzXMG",
  "key14": "3DzbbcsAhBFUFixyPVdoQQSad2Uh3ps1ytVTXzVKpbhEzW6DjtQo8ZPNUesxTt1Yh4cajjaEbeRzJM6pC9qBfFWK",
  "key15": "34mL4sTfiQvsYEcFA6PDCCzqKujPMdStyboJEwHevC5aBVDEjgf9xGwvYAyEXatbSHx5pjCtfdekj5SScmnWMnC9",
  "key16": "5gVwvHHFCfMdha2x9DsN2WjJERvykAqpyLz3BcmDk8Grm72xkm2ARwNFFgp6ksRGxx4Dc1gRELaDn9aMkZM3fQ8Q",
  "key17": "R2eZgaD5qnFHpV6MXL2kVsS1NxyBTqFtP2TpNtBVYaPDvCEMkGPZiyrgVKdLPM2XsJVsZkiGjocnPLtuL6zmaFo",
  "key18": "3NWGH6HrkJni2gmXgjqdBqhmzMDiJVaHoDz8eRYucNFckFtLqvAbMAzJM6Ne7RfQWj4YUrAvUkfvzerVoZri5DBE",
  "key19": "4w81jPZZWQnnLwx6ZPdyNGbF8musTZshgzYxunoax3yP7p8DfuBgKomWAKab6Jd1n3BecNdfEik82kwqLr3Vws5n",
  "key20": "5q2MACYUmyhGLggiNZxZirHc6tAJRVdqDD8Le6Z6fUwKV1QatVWKVZ9iDUi5aaVKH9DMoxaXspsZgystdMkn5HXa",
  "key21": "3bR1YmxBraKDXpHLKQJRNGVJdLgZL9DXSaNnBR4wJkfhu8C1cFS2CpQuh2PJyAhRGgi4vGXxfH1ChxZ1iEzZS5DP",
  "key22": "5CzNk9BaQaFjbqdRNJSaH3QXRA41SwNykjy45nuc1rrWYJGyD2CuMMpooDTe2C3Zx1N9NyKUrtixWesg2WmwU2zP",
  "key23": "5LSuLDpK4uREoZGEUgF8xUTFfWyVpZ4PWBBL2jfEEC2KAoEVnUXCSdUjaj5zUgvthdsSSHiYqZ2B9J1nPVVEhD6Y",
  "key24": "2QxGWXW2C7QdD1sixvbBpHjfcGS3qfNigpjkzQ5zKjgDXCpLrBYYzW99NMzS85NBHEnPNaXMh52DunZ2BcRunGkU",
  "key25": "2DEbe9NAf8x97vqYt32SHHj7XRufQPQfmY86X4VwSEyctfSBcoJo4moZgnCuQMHRKeRawn18jdeqeymSsM3h3XuY",
  "key26": "3Srh1N2PcfLwG7VGPXgtC2urrPhNrrUoBazpSvSFh12WZ4hGcWi1PwbhpuW9DQY35uEDWVMxyHX6psZH26JKjBWQ",
  "key27": "4PQemvQq7h45sVueeKUX1dtwf3NZS3P3ShVL25F2Nx1vQ223TJowYRaQRfqfUVfkMmyKrnUowjx7Hu8bSkzETpU9",
  "key28": "5z5oxGpJyHfVjgbyiBvMnCGoSYY2RABFJZDJSXsS9pRCNHxAj5Um3jM6F1D299G4Y2ETPReFZuHUNRwSH3aoBwbt",
  "key29": "37ry93w2Tre8CPyyYNP7riTtaq5N1M6sFAipq6BpFTWhfWLUguaTgThnTkAiEbU5uzREcNqhRNncU89DCKRd5oWG",
  "key30": "5jnxKs1rfsHNPxNx8eqkfq4TcfqeGFc9u8efXka9mPDDkQV1cu7whMjwnYJV9rzKnvf6zQ94AQBxGx3xnqxghnxv"
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
