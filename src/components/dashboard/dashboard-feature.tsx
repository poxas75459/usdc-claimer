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
    "WNNJ8Vr4M5XdSvCwT7SaMGfbz2La2sWWTM1LcUJ2REEf2jFp4aK1pW1RopX39fWtGrcP7BU7uF5UUxFhLUbaG97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGhqzg711csDytSurCTTH4hs9CTf8XA8umsdPSnptX3rFFBQPPXXksZPF6pZei6gpf8in4aYgfy4gRGnnw68sh",
  "key1": "4hwDpCJYUtNcVUurkGp1fhxWzYNrm5px71BVdLSShkqeP2ErVYzrs6Dt2GScLruyjbP1Bp7uDgw4i67uTukNghSF",
  "key2": "2m41jDLjjxe8dgvXATdAMfd79tuVPZkHiVxMthhwmWCXuT4JnGbxmjr1mT8ghUrGjkX6oiLAeaHVzJ4o8uf4PfG9",
  "key3": "5nTHN9D5XT3Tm564YLnA68WP5gzRvBoLyv1ZhebVT7P3sRCMxhEShdqrEdJx3n2tyhVxmaQKWxWCS3KwTA7yu8Y2",
  "key4": "2n59Hq13dNQqkGNQRMPSax2CMmQwR2wLAWSkeV5G1eqC91Pq8fNexehAmEnCpEQ632uhrYoPewkBgguxtimuSsW9",
  "key5": "3mhno1ovrDYnvwDUU6Q3pLMrSWaxR5F9A58LjASjDnYwmoCi1ozY5qzi8TxbVxPTtqrNoheicuQoRgYTgFWPGpjk",
  "key6": "3z7EeBvnpavdCGYMpGLx4Xx1P9CrYxYG1yENBD3SHySPHczT3jrCg93AqxC9SttGTS9rhNkP2etGxpiWBeF4GvVb",
  "key7": "tCkHdaGXJqKHBaVXQzrQKeCvRPNnT86Fa59QRQuBPivwqr71ikrf9DVtM85wQq3FG2RooQuHFUVYorBto62boq4",
  "key8": "4f3rEbKTXGDVbRF7EsjXUxshDtE24kEiyiQmmyc5ofLcQM9789oAAc1zKPCuec2YXvLsxWRSzypqFwE6p8KQ7u7H",
  "key9": "2hA1xg1vtDAHDJJs1Pe8GJVp9QivZmh2RVt2VTSXFVAkynRm6tXAFd94NAg1egzViDuxFiQvjJSypGXHnaaQvvTg",
  "key10": "5s1HDz4K3tpYBkdYamS6FrZjpQZtAin5QiC735ZkPn2Mj9Vk2cmuZXVxzBKkDv2Dr8HZotb1d3kVLfUodutQgWcX",
  "key11": "2uM8RS6xUZ1X5jytd4nVd1hWKSWR2baUmTgELwE6R2KRB8Djyp5HjbgKPFNBRe2DKmo3vB4oVe1ksQhCue3g4tkj",
  "key12": "5hqAapvVeUrReVGtr73SG2Fr36Fb1ajTVKHcbiZx1NPn4S2nFyP9onWAKtmtsTCaesWMp6n9pzS9E5Yw3P2kDEBb",
  "key13": "3ErgGbdTWHd22mQXK3X6BZ97FF5dRJvvzQvXuoFihXJ2NwuYiqpuX8FuM2nXFyHKUsSa6rD9AJS9Ko9WmRMNyTZt",
  "key14": "3g1Ys3vSn1WcEs3eNUgiPnopCVVpdpCwWxGZ9bsfTKshtM7YjSLUSJjbb186psM2gZJYRoyWH9AVGCtPaVnqmZfH",
  "key15": "224SYjrMRwtyQQsvYwfiRbawH2BxYGJXFobngQcPyt1eBh3vaLspN8nRyvSDEX2bAHNJTN74zmqjCno4R9oi7iY5",
  "key16": "ynNVSeQWVoqc9egvW8jhuDW4iVWfgqiTkNzMgsH1oc7dXBqF6tHEU3WtqfxNu9G3xRamo6i5kAx1PX7mXp1ezbC",
  "key17": "77qJeQY17SzJww4pxspP6hMMU1vemofEJofoV44TLQt6bqGZmNDL6RjUTdagxbJVMkBppvH9PDiTNwC3JyAVTYP",
  "key18": "4rdFFiTs3DudAGfZ4DJPM2k9z2sxL19ksvrgWGa25VRTZxLF2SgDQcy1K7GxB8p6HxgQHNFTNKg3sC6TzqVAtbN2",
  "key19": "UthfAHgw9WRZRUMKPSoh4WKs9brjdBPMYHfNUtZckQDC2f4cCmQbNZvtshBDMKRg72GMQMFDyLD4MNsN668BYGi",
  "key20": "267xSbxN7RnPrf26PXeFktTiGKG4ZAv89nEpStjaLoab2RNQ4KkGJUF1ytRjGpB8bcsY3VsxTNCy1zcbxndfNmRR",
  "key21": "2n6X6K261D9Pqn86gPdkKu8ZNve919dLjQDuVm5Wu5aUQNs7iFjjh9UYm8svekJNBsGZcqTcp2aRDkvcr7HwnLWG",
  "key22": "5Sg8FVnVRhjvABGeTwpDTobT5MeynpoaCYZfJ4sncse7cx8gHdTH24URk79rXAnpf9iTgobwfRdsrA4TG5o6Jz3j",
  "key23": "21dkrBUgeZa9xcqLs7FpSeDGqXfRKCXPibe12r7G3qGjAGj9cTJiiB7Ed7mtXJsDNJ4XH58ftcLTCHus1EPHpATG",
  "key24": "rDHHLPFcoqQVegwXxTYXHG8KskuEiv2ARYNqZ74cnT8piEGMADdU1kHohbTpsW9YaKx8mLCd166CsUnKkJZf9sY",
  "key25": "mEHsghbJXjk7GhREjhQXxaEnC69mivayH77KjvAbyzsuTDKVoFGwp59hHRzMieiT9mGT9BZaBxoXxzRtTgY3MsG",
  "key26": "4azbVLTg4vCzAr5L8hrtcvtMsVL5Wm39HgnrTmenLtVaACgpxTE62MR4wQfaQRsbTUnGRXLEaT9idGJekCut5HLV",
  "key27": "U5mwgCLKE8Hfp6pSCEaat3AGjvCyccLZCZ633jE4YKqWY1P8bxAvDdatfeXyqwLkbhJbVoEYMvS4GdouPaES8dH",
  "key28": "47iq5j3GNYv7hHzBHxFL7rEcNv3LxEp93aSQ9oAvFYhjhmkaRZFWwEn7VLZmZHeVnwcQWUrfdqzppVovMKgUqzSK",
  "key29": "5KByXvFkf8A9Jyr2unNWpnxYoDSzb3fNFRsmqaZiXbYdwGvEvA4Spbo8HnwwY9uqZjpeuRupjt1GNMM8DwaFvvw2",
  "key30": "ZDLRvogGNyAc6ACSfBt4pAyJLvzXYvrnk95mxVbgH8KzGyoj32iCQfj5KKrmsoGS1dijCgnN8p25DzrmUvhhmgg",
  "key31": "5xJyBdnEp9GoqQdHniypuV6GSFF6xnH45gJeuYGEzN6g1diqkKugJKGuDHHsBKgBWzjH4EQh3h1aznVHWjBnTrC1"
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
