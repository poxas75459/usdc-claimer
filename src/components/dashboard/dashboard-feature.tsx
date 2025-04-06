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
    "66SbHuSvjw9Dx7vvnw9ri2stuBpMDKNuhZJLk4ksX1sBmiWVYSZPZFWWFzKevUyex5ax4PexBTyHmfATCqvSJmaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AkT2FibZZQG2FV982VxdEsbcnbLNCurSmm6UMc5m1gq5JG2HKXp4AFb91aasThK1KTCFRqnbkLPsu5tga7FksU",
  "key1": "2W1HEnSdtrZAyFNyUNBoit7FWtKetoZufb2TQuNnLrpsz36RWtEsFok9hnSRyS8KBAzZ8c2ud9ssvoZ7xiWQCKFA",
  "key2": "3wT8ecPoBDTmvyef45idYAqzChvHGTvNTFZHvKEk1GQPbAuwzo5CGNsZrCw2TD4kgpmc5hreMHTt5nwaP7PDRoUw",
  "key3": "2k6vaNsx6FihkU4uhfA9sUXxyUpdm5RwWCZzKqg4gFfdyjSqL8mFHFjS8Q4SzkiknwNKfc5FjKMCm8C1329tcJHS",
  "key4": "3eAZbZk8bwjSd4BQoQWoYoGFWHQpfyXXjWqrfFLLqZv1SDSZoxDoEjHpz3a9TdahAgCxv6p9QjMu1noYtqD4Crwc",
  "key5": "354kTvgGbCLUKcJUrzabDRPPKnZFKbExrm5Rr68etzt8gqKYR6dxQnkPQ6x7mW61uWirFanWhaiwhMnztjKgrQuf",
  "key6": "4G5fcQi2sUH6Ba8jiNvH2aVuycgaeWoV8TjbA7aaoqkPKexnwgnoTmKrkAuAYENrkzrzyYssHUNUaMzisE1NJAXG",
  "key7": "3U3ob7CwWq3X5rtCaE4qRCiCVPSzDi22c2Bo18APgHTG79AWy9qbDDD5jW42NAThxPht8nJ7kzBcZAcQDUSSN54h",
  "key8": "5sWTedQPFYSotzqPnkBfZcBVmF8ApbcYk2NxeSLza95YyKc5rsSNbgPLm7kcK4oz4pxfzSDHkjpXYbE7F6dSzxtK",
  "key9": "23z4e8eSTfxVvwyByn3y6jv7pU54aHuzAsrxwz2XwKbiV4LN9YP7MFE6Yv1BVxcFt4CjAUnCMXVpEAbKNRogXFyt",
  "key10": "22onRv9e3m6mpnt5wvToy5hpBTY6rfFMyQAWvJFfaURWvyHQTCcsN481auYM3KaQYcTpZCSwh1kvnCx579y67gqx",
  "key11": "AoPTdBbqV39b6DMYkNn4LPcxC5TMZnSGPiCiRANemyuD8YFkfZdjeAtvmc8YJVcZoRRv34DnHZG5n99ZQTnenUh",
  "key12": "4PKK5ocsMTJVcrf3D5KK24AE83jHjT7FKtqXJLm3Tf5k2HgjrH6NP1wEJiHupxyPEqxb9YNk5ZMedfmAtd4KDfL2",
  "key13": "4njbVFPRMX8YYyfajy3Gx21ieznrNHiVy1wzA7ZMsgtLZWc2sjqKXrq9n7FFJ2YULBqcd9q6MwNw5MAG9t3tZS77",
  "key14": "2ig1j3Lm7YJ8o4QQ6j97td9d5YXqvHx3WNs4fygf9ecphUxXhFb6zgujJmDYsqs5Xh2NJzWgLvpJmTMDrSQEt4Ls",
  "key15": "5vRiRKmv71NjJqugDjbV7eUUJd5FvrM9VnZPhjHTdTfJumBNwQZEiPCNzHeLE1t8HfTfQRbhqvHCV7qcnuKiEn3b",
  "key16": "vpRxt3dMcLKMTsFBPKRda4bRM4sNnt1rSanUFhLhBpbX3JkHtyUuQAqZddXuku4zr82uvptPSKxiLzbv2jB53DG",
  "key17": "4PBV7Gf4UxiZph65BsLcgaQLRKBjiTScr8XPDzcBytoDYyqHK9W2WHZXZTnbiD1Mc2M2naX3jVYgLgN14Zeh29GW",
  "key18": "5jFRshR1pg5NxwS63xGNudTArcpcruL3Lg3p3LAZmfvUrsFUnHuS6cQ4LE37GLbpG2puQ4NCo4f1UQRxwX7RW8LA",
  "key19": "3YM23Aafq7aMBA1sLTBSmnQJhEmMGPJ9ximydgj6LY4EHzf3KA2cAgy1iWF2bGfwRwvsESJNzw8AJJ2RXBkxrPXW",
  "key20": "63HWEUhPJJqpiTHwBKjoQFkGbYymGiiT9PqTyKpBesiBqB4pbmybKR3PR2c59o1F6gvuMzShuEktuxoiZDGmXL1z",
  "key21": "yRDz3LjCUTkJbgz16JmktR62wjwm6A1DwwXpmos3FWR8ZpWJTQEnfWAdFyQETtPWZn6Kd72NHkHwAPJmqDvz47j",
  "key22": "3pgb8Yc3y3StDAzGPDAo8YPUobWPm1nPXpMGGNG3KM1LTAASunuorwsaF6mTwKMo2vg3y2YSg1CXW9Nto3FzsNCs",
  "key23": "LW2CLLtfyRp3Yno77rb3JLF9nxrDEuZ5K1Me8AAThoGkHAMTAT6WphtjPbvzsmDbUV4vpgEvLtgik9YmJTRnQ69",
  "key24": "37JA4fCzvjV4Q52hi2EnBQvXvjQQai1D2VFsUn2ahPdsedPLY8G5HhyYX1MwbPoKogkqp4HnB8qvpjdgDRM63qFc",
  "key25": "3dyN518eWUpJMxsozZcEkdA2sVXdGdvjs9ysXshUBMEvxUW3Jv1PheKihdFnyicat9LBCNvJEJg3swEhYG32GhW2",
  "key26": "2nvAMorm5Lz74HMSBBBaXMQovcibVcAs2CsyTxaFMUEyiEt2WTmYbEUrDBbHooNATwQRNqQ3LQaJ6h1gtz1uF5w6"
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
