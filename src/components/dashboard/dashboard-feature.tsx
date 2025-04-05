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
    "4gQeYsSA1v8GeAHzKMjAAfDtXJtEuFncY8PAxu2q2qGLBbr6YNdmgoJTiEchi6tiHP9imVVDryxsMByh4VuRpVx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5nyZiUeXLJtpjvd2gg2Vd7QQTm6QRCmgv57CNJ6Wy2kYt4FLu9yhi5meJ5MBn2jrfmFFdyPvWyYoDYXEFwSctR",
  "key1": "KwV5pBgEQhM1SFcYX3N6d2AtS8oMtks8gZpLAwt8io6RyrS9ot7qn87ZchL8T2KbuKZDbfRcDMzAgoqyxd1rYtq",
  "key2": "kUJyGzZEAyBjTVmCM5cYs6SP7yMkyaD81ahHQxBgLiEdg7CqwXqefjeVkfhMg2db4qoBx75r4z5KZb3iwGCT4SA",
  "key3": "5hAd7Rz4yCWML6L7LCEpDSRE39t7qyfaead1C5hypnxvi3GUQyUSQbid22qKT1cy5NUiX55v4V3f9pBeHKcGmRUy",
  "key4": "3WqtNo5XaxcK6aZ2EocWadXmPvyXi5EyThGGCVM9i9DYeZG39QDfP3uc5hY1UFRGBumL3Pe6tCMDK6QP7wFfYdY",
  "key5": "5L5z24wp54Pqnm2BerxA5kGEwvu14RfQ2p4YC95Rfybz4NU3XpGvzBCXAeTDosLbgbNDFxMCtuUdwZCDG5oZgJn8",
  "key6": "jPA2NyFgWyRRjBh4Nt3ZVce4T6uS1tRisM6UCccah6bJTz4n6puF3k3LTkTyo4DVtuMQX769fcbcdS8BsoGRweE",
  "key7": "3GdV5HEbXwt9jFwix6xb9uXAh6tZRJGXfWu55auU7WwCcixdbR5Phq8sPjTyMTdYSmhL92X5AtNc9CEXDdS1wvC3",
  "key8": "NBdr6K2Pd5fRLhjNxE8tpxgMCy6c1MgKE46aeHZC5efaquikrpux7cKBaDvNrKiasXMYR771rqDakbJ4Cj8uyux",
  "key9": "51EbymLw4EsWvwCX8vqdqNnapWomttcHV6ZHKp7pvPfPeUA2TuEdPSCpADZLJubHEpEyserDcKL1ZunVCGgYrst1",
  "key10": "5ukjNKcC1bprJvZGpcFoMfSBQxD8PWffTbj6k7F1XktW5Cpnvu2ogTzH8zSzjji4WWp9rQ8fekiJoMXveKtTrzH2",
  "key11": "8rfV4WZe3MDzRHHgkqNeX6BwkYoM3XTrwXi7mQUdMvAf4rDR7GdPK13ZyucBvNa2vY2Y5q4QzcPNDhpCNhuNmch",
  "key12": "4TtGCgKaSCoUQiNVyvb55tfY4CKmjeCL97BJPV9Du8wX9qjToYz6UwcFqwXMndMziVPxtCiytFDLMunfgQe9mGtM",
  "key13": "3EYghyd3EamctfwrrGpsTfpyQi5M7MrivcjqpXyi85xDN395Rn6r9J53HRheUNf2DcLJXcPU3HLKY4U4Kgz1DixQ",
  "key14": "2RhhEGC4rPW7ojWMkmv3ePTjRjPPnuqTTuzZzceKQddGR3voW9sdG7YE5sDxBsMMNMngydGRK7Y5BBNeuRaMKxN8",
  "key15": "3gsa6Ch5qFHjFWYAkAjbRi8x2UrvEvcj3GNTqoXVLndXcBY5JFFu4SvvThHvZiYhGv7rf4Ls6yhcQFR2CTnENXSh",
  "key16": "3JhmpD5VgRCTvZ1WKu33TKU3ZH32ttVzftdsL3wdDn9EQAEJmkF1cWWg3D1Z2U8a6cFfySw7LZ9HQDLbFfRqF8Q3",
  "key17": "4VgqSEHkktMcBd9uhxuwzbPMQBs36xSE6DrWYpg7omMgWcHVLnjmEhvxjdzTT9ZuJZ2tww5tzHaCD8tK2hP9U1h6",
  "key18": "5ekiVHPwn1oyzwVMBtm3ZoH54aY3GazEDSC4PLGjk2WBB4rddMRBfyNpwMURLYNomKRWWbKjSYWxfAFjz255BN68",
  "key19": "5kkZgWZ7oYapqQB49jR7pea8n2v7M9aFUTUsfaNR5KXxGDWmt8bmZ6E4AcLWH7bQ28JA9A681532emHYu4PySDiY",
  "key20": "4mZshp3rXyoWvMWPFyZD4P8jAfEZwxQVu9eD1dThbGmJiiVXFQ6oDUiWPGcqwup4gHvBGm26mYXeV59DvxbswJ1n",
  "key21": "4GMwPnEwEJDb67ShZWdkktxrfRfF493gHBypDorfGVt1dvBBLH7B6BFuo7on9vHQnfriMzo6zMaD2FzdkPNPFUaF",
  "key22": "3dExtpbqg3Uvzz3oSxBN2YiNFJXgnechxD6LamkEGWWB56GCrXNFfBvZ4nNvhasU78KVUW2G98A1rjzh6vhA9edf",
  "key23": "41EkGnMpA2BNjELciVoaq2pjNkNzz69cRqE2Xer9gQVKaCg14yWp8yePLTu4YLFc8jXpNQcGKyJSMvQ8uE2gZkA",
  "key24": "5g8kxutuu2g5G9dn6GLBhRPidK3uVQLu8NH5LqvjiUTswz87o2XkboWSQBdFCYvpRquyeuU4Jzph4mVdiXGQUwMU"
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
