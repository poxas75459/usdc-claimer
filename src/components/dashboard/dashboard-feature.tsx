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
    "xXe8ASsLgS3QCzHVTXWEnKibiue22HtHVV4dKdDYkGYHmLRUvMQaY2FrycT1jPzQTbuRjCS9TTuouheT2abuFq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBPBZA3i33KybSzqzQwBvNtkpMKRuXeWa6njx6b6aX7hJRJu8H7Z4c2DRXQXYvqguzHvf3nUJmv63C23FXgsC3c",
  "key1": "2oGTws4k7Bs3hE47d8P4JoE2X8rsn5nUnYa3REuU1ZirkqtfcXfy5BHTnu4YBtVeyn6bBu2wd6WnHKSv3eiGMFrE",
  "key2": "5s6trqj3n18h26b8KDtN2RQwvAUVLZMKqyxotBZqaSJtWCYNP6xdMC8Ri55eAHmQdMK29aNK9LarvEKjdooPkJng",
  "key3": "32Te7ZT1nLn1uV6cXv1eKXyzNaxUCwUkKCATW6tD3g4ac7toctvCCLTnyzpzm1SmaVhon1Kk4NiZLMTSLSPEdhGj",
  "key4": "43DErBfnkdqed8ox6xd9cnWE7xFyM2VoGAXFySmaPkYU8k3pwPjWwGNT1r8uSB1MZBykk1g8NcTECjpxnKypkFiX",
  "key5": "meSkH5UnELdUHg1j1Bh66yAgpzEfcPg5rXibLae1UU3bnsj36gKJBGbzqNcieRC2JKR4SXtXWB2qs4yzG7q2xiq",
  "key6": "3j59gLuEzLPopY5KRYfZXaJdRmHSmsf7ha15Z4MXLyNqLE3sbB7WebMoFEoiDqU5fomGZPGBfxugV7tHde8BRtSL",
  "key7": "4L3vkikB9KFka38SPLjFaovfM9V1h7o6fJCM83DRRj28pz2UZUKZKNLqR4tcKgHjPpsMEEnLzKqx8PuE4GcTKNSb",
  "key8": "dHpN2zgwaQg6kJY6KfmbvezKf3ApzLoprRbwxaoQ6CCDBb4JXjLvLZTa6efVdHxTkbj12zNWKxhc15K2Qe8gHUb",
  "key9": "3rNsBhnS57sZMZMkwXGhA3GujDiTTCZ8mHWdnqo3KCzVw2GQPcn6wsNGgVKSRPy1xcQQz12tHTtgxxpFtQ6MLaUx",
  "key10": "3awUVHt7fRb6Pp5qfnPTiCi6XX6CRBV6PrQvQ1Te2PWr2r4UAdRdP9E3osCV9RF8K2zdGJUYiCoj2tmPUZwxAtSY",
  "key11": "49JbiKMnXkVqRKCvFvEJrW1AvfuF7gYM962yfddfTbrjAyX6jDepKQwjGnRLohZM8wJZ4RSn1WdYvDQ1GZ6whfze",
  "key12": "3V7F5CbnFVqwnA6nNqmPSbfNfgidqxSqmCzZzpsxeM9Js9v2H5QbGKi9bxy8uvLrkbvbBUcS3pvLg3Qf5sb2ERpk",
  "key13": "4jeCqvdw8szMLoLXaY2Y96NaCQaqdw432TzGzSd3Sdp3WWTfUN6QvVjeQppqKDASGidNJyuq8tkVnAeLnCBqHzG1",
  "key14": "4Ntzofg5bH2jFpvp8kdLvaSGR2ka2dHEbRw2kbkjEbryhDceSYTwZj13ppA6dWgsQcxzqN5GV9BRUN6uzVPpzegu",
  "key15": "cpp2mQ9z72zpR4twr11ntVakGqqB13Z9JXLEwdGMXe6C6WfBWSehnpNYsnrh6gxbYJeoZAuCuEUnNWKG9SWVuXF",
  "key16": "2teBgqJn3Yo61sgMUzYBbheDFttNjbTMCJb3Yo2zMHKrmmXzx67LEr4x5BkVzLBx7Bjm4qY1EEJcx1e2crHUuxGW",
  "key17": "4abwekDSzWaRE4Si3F1XjMniuqgfRdWqnSygFexMeM7icE3nmPNbr1AQC4SshoC2jU57FUKbKZo4M8Eeuzhkposm",
  "key18": "4WCGStKCdaBgnhwNahTa2eBRkHfuP4meipLiDh3k32wfuQ7CUMZ8VK6KQQXZ7pTdNScp81QiSNNUWMQMKn9M3NcR",
  "key19": "e4oVdghEeSaxB2ovvJTH4BQFAZWMnvzWCVAWquMMCUZpCniLabXegibtLwQTCuqEHPMAWz3igQs3rQcRrjPEWDr",
  "key20": "3BdJaJrHbwqWqHJVNjLFmXboiMMkKfNacRCBB56byVK1k8eu71cwQNiLvrZHFbXSjjC9vyBdWVhZpJL7dXBGcvU3",
  "key21": "5WgqeBBUxrwvqife1Fy6ZqDur7a3eMPXFC4mjFuHmveaKSwx1Epp3GSqrAtUSMaRcpaccbhcoSd4BjyCHd5x97AU",
  "key22": "4EJeVsbYSvizdgAHcdBxBRxqy7jBHnPSVtFMg486CmZFidd9E9Y3U2DfhyN72vZxuJqYNt951tBh58oZRbpUK3kQ",
  "key23": "43rv145apL6krXMFrUbwBRxkFjYBzcPvG93LPAWMkFRyQ9G7okg8BXhoVuupsjR6AQoh1qAwQbScmzHzHZFWxN71",
  "key24": "2UAZRsxDNqNyU44ktnXJeu4wXUNAasK15dbkxaikteKDJZQyFd1PVaAdg86jhKLgbx5qbBDSz32Q6ru8ScWf8yd3"
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
