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
    "3WzdLga3rv9BYz53wzcUnb3wVUz88tvq1oYP44c8XjQT6ZkFSJJ6uqUBxTBS8QAB516uzEWVjsNrBTvmEjDhvrR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCYMQy1FzVStKmndJDZ8GvMriJWw4Gp7WUnEjSTh6yMKnSBVecxGR5DQn6T3dsGarGVPSzSCBdD2PSHoYgds4Q1",
  "key1": "gHa9hPRiQ3YBu81YjZiasi9wjHxCsNYPXRSTpAT5CF9nHnAsgT12Nxpf5Q5SgavrqY5vDStZHk8GoyVMtbsgP4W",
  "key2": "3T8QEqxkBD4RAkpZuxWhPNYQZL6rs7y339FvJt72p6J6azmLzXALcEV9MJxqZpr4ro9hhmx7mLMxnTPUWCXCANfv",
  "key3": "5oR5zbe9qGwJuPBcPhaEK4sT9f2Q5ps3MYUWFTRkbAYxfet6LqWKdxCw5kBmR6XtQSeSAhChiDth5Nks1w5A6ZZB",
  "key4": "5wdECQ34q2zjKbexKocBrfRVShdDKHYwsnFpqHM1EY84cGudmPnh5WBPUrNYzi7y8E2L3c6Agj29WtmmeVpAGrzn",
  "key5": "2E5enQJVvNfQWs8uE6mvoqh6yXjJhMr1wkF4WS6XF2FhFsJGy7Xv7sSiJ2MBw23jXCs1GAyGZSevTVc5h1rgLySH",
  "key6": "55owebbv2unVHGp6ZofSjsJzgSi3AN4stqJkyKvKA9KhMn3BLZpcyetmNYbueUBnNv5a5QWwERiRWbuVuEbNJVzK",
  "key7": "3x2so38pjMzWV49RB4aty9Ukh22shocEBptinKYSddCCKgQx8a9NEfwyP5DsZZJHY6FFu61YqRK4veYV9B5zTveU",
  "key8": "2TqgWww1rRikJ5C8RAy5yuFp9p68d3dWndckVheYNpckgkH41vm8g4ZTJ6fdxZmEyZyA6zDaz3ASbzhAt1SNmsjB",
  "key9": "59792B5Yq5S6Khh2xTmCG3CADQjQJ3fCZMkTLK6LgPpt7SrJBUuFC6stWd25fEG2CkK4aKaTxbGPF9RiH64Bk6vK",
  "key10": "3r6DjrovHeyZGMAmsQdFUFLEKC4MTLwsQXFD6fakbHKamUvyotnGunUdPeyoy1x78tNJVdYyzadbjepBfPQFzY85",
  "key11": "2xy17hjUBmZnZMNzXar1sG1oGdc1jCnPXrzP8MFh82qhYTeXGeaEk7w7zzBcsZY5h5dRjuVYF7YhAa1XbnzoYCSi",
  "key12": "5K4TjX9L1irdgP6nEuBgJCNxnQwM1zVsuVKDcGB9Qs4gDBjJ3fFYUMdx2Xx6h3FMFf4LhSwAowZSnTtfzvjJAkWJ",
  "key13": "2m9Ud9n9G1jAjJv2DViL5A9MjFKcs4ZvArxgRh6vf9XmqHc7FiG2m2G5ercQXJ2jvaL95PBMd227GAWQ5Kmio2cH",
  "key14": "61Uj2bx6q1LdEsHF5qZKonCKbQZN5uXq1wCcFyfUfV82nbjY4Poci3pis8R5etxLPJbDkbKwkiQB6f2PicvjN7B5",
  "key15": "3ocbW8jsbQYwMdDih3PhVfG3r2hT9qZEYA4AvDe3ZAhPKpf8XyJ4ZZsiVrcsoQFYQ2wa3FZUHxKNpTo4QqQydGud",
  "key16": "bQ393rwzntpSuUoo9UYssYxjfyvgozApDn3qmBdzSmWVwnvj6Sb8F112EaSbeir79e9Q9E7CY5zFayz4on6GrGj",
  "key17": "55o8Zt3UsHHkXJsQAhxqM2BWAfp8SYZAwD76RFiWcGjcEe1ZWE6E95yqhDP6pahwBN7mxJFSVRXY26hYmB6UqdT6",
  "key18": "2t8m7R9mkDttUorvCfNJ3zCLz2vz5zbgV8j9DBGccRfMPUUDcMNz2DSzFJjLmNZKXBo551XFiZVuehGt2FBt5NN1",
  "key19": "29VymvFKsCqL67jwFBEmUCBKpSAE1qJ1oHTEeeK5cXuFb5gsN7qWFUp7vVCSzBZriK5Bg1MS2BrRyfA6E9fq68ae",
  "key20": "5zfoVXh8C9PDuuNAfKF7MWjqTz76iGQfuFCPNeiqVguuhyoPAXR1NECDTM6hD2BiSPbuYc8ZbBYCJEdZgWFs7D2T",
  "key21": "2Ujd3w4aVRse385qBd8V1PUbaBcabiFd5YoAvPx1Mjnw9h8r1bFRGvzEAng7Z89kEs4Me7Dx4dpZoJH6UDfRT8Nz",
  "key22": "21bpGChq7N6Vk9x3iugPFLbvzqqNVE79529xxpg9m7ZLHixcF6Ra1rCf9uVV1GqPShAcDCUgfF1cmNGKy6Z5w13U",
  "key23": "C39R7G7EY6eFWszBppTwsieF7WbVa8ALK8xQ9udUiwetMZQr6PKTg9uJAUERGw4WJHyXoRU2ebuUpp4zhRyunue",
  "key24": "4jgZVnVQJhkwaiu59qfVYJH8PkSkU4Se92iUqac8E9pbiRYJnWJj2c9fUJmDB8Wr4MNcqbBboMRD6AUE7jXnTNLh"
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
