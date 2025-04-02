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
    "4nqJFMiBdKkKihX1o94S2isiTR2QN1hDQG9WzdDbUUHwiTmncMo2d2KQqyhQvzj3aUhDt4eywd7rXVTvKF2nx9ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxBaMHxiCpEGGwvj7ePPuzQouaaKqYh3rjpfSSyU449h9M4ozPMte3zeRHFG1uSKkj9TtbE8TyP89Jq5KZ8zovi",
  "key1": "39WjkZ99wdJmDUKVnsHqyQGWjfRNStq5UaUrgJ94kBCy9Ft6iXrDcAMgtsiT35pgsQtMBT9v3XeYAibb2YotGRnr",
  "key2": "563gAumbBMiWnLiBbLgtQ4DAR9qjRYyDhacHn1PPBCbsB67Pvs8KPidEM3z1m2Xox6mBPohizub9U3ZT9eLBJWZP",
  "key3": "4exBsbbpKNuGFJnx8MnQethLKFAHEpBn5dJdVdtpfzwNQ4oPn86C2V8vRUGQySfWSVDDe3KALwz68poWnsZsaCDs",
  "key4": "YnZPdg7BJmV1PE6VZephKkV4CcAU7uzCtWyYrVHbx6KfYRt5Z27YXo36EP9krZovYeEvFijfGBd21ozQDKd9XpY",
  "key5": "3gTG948cihEpdvMuoPdaZqrLaGw5i42PAKHWqGjXNKonvS68fQNt2uaqbe4gcoZPkoBb3swLkKPFuGNRCM9Pn1D6",
  "key6": "M6qBMZJcERGHa84vPtgNEzQynQ68hAeKawtcqACDQJDWBMetnoiFz3heHVq5ku4XZ2V9PHYjHCoUYSvPtEFguUY",
  "key7": "5ZdoeXrzvKX3g2y8Eu4Taz2YvchGgrHPgxDHLHcfjc9SonGC3cx26XT9LTowzxyFxibSg8tf5VUztFNXDiJCCc5F",
  "key8": "4LmdFa7nZT6xcRiLtSzDxtBdZJ4T7fuLxNimxECUG8CjkdyrobERC4JYtoVqd4Xw8FHbuK8s1BSmSJY8qiwYCwXn",
  "key9": "CaaCfxduWKoZxYZnVTQ3ak4zdTztayvyNUFq7QMtduEb9x9w13VUrc7DBs3N7rmoewpfGx5G8sxz9jsKPi2iGxJ",
  "key10": "2qHkCkSavwufbPWT5yS7NZdskwH8perKnwXC3jkXUi5Qy2habvtJQLnwMRZri5h3XjY9rbTS5kMJiFcQhait2Cse",
  "key11": "4hggkkqnhXNyiEPtNR5Q8rYikNUofKnnWYoZkiiANQQo2U4JkoLt7SDXPbpznr7cXwgv3HRJwKTJm22meec7dpvS",
  "key12": "UiGyhAQ4XQQzPGtdyKkA2cibYkc9ff772d5mbbidpUjNMz94cjrLwAnwf5QV5pitmTSM7b9aHhZJhpRexZWtXAN",
  "key13": "3AmdmgJjykdA5M2KsX8KXVuspwuTKnUCuiJM81RpPqM41rrKXixM8hwUPnYmDbNSCq6FUVPgHLFp9r1fFBxfsiTq",
  "key14": "2yVpm7xmkv2WkBCVBpni4Bps3C5sBZKc7jsygEfDiZiYp4xfR9CkrQWtbF38VTYVWHs1F1nYDFzpjkXTt5naxFvp",
  "key15": "2RhuANyGMvMg1W9sndv95d5oYJCtb1ZMqCiijokipaQTjvCL3kuRPYEEs8sNV6zz2TosQL4yatxsghbiWX9TrxxC",
  "key16": "RK5AkxA6VNCA1TY8ACTp8zhRtP7sqeomKuyPSthGUsALLJ3to9A2uqirUt8SnuTeMgGLGaojjadCr4RCfKYH2zi",
  "key17": "2TN7Ch2cBWpzTff2hfcmDPR76g4AjEWLMZADM3tG6GvyLTfPiKDUzwEsxq9KDmL65ZAs3BvoLnx3vTFBD74ixvNR",
  "key18": "49TpCbBJXEekiHvC9Vk4iT9kjqA6PGKHUeoE1ZnQga9SPCSVamvRLPa4f7kdopLpA9D2Vg1k3knhSjH13xrubAUd",
  "key19": "4jTj66uT9t53J5DEYVC11WkhkL86hkT4FxqkeZdnT19zKbps4nQqDMgeUFL3u1CWgkdnAY3ACGpMNvMxSWkUTg3v",
  "key20": "z32ufruSvwAp7PDw4L4NswpfiqkLnYUSs8mWVKyzhHfFXe8wuwFGpDtBcdgkUWRr8uzuFS5gJqLw3kY6rvCDsiq",
  "key21": "3EuUQN4YUqAXmRW5NBwJWaSMz4RW4m7n1u91CB3tnZhnPpJYDe4oJN7BvSC4LZkrpoUoc6WBZyu49ekDbHvpxU98",
  "key22": "4g8EYSk78FhFoLTi4DxVWBc75i6jYEREErzb1By77cS81PJK5TzTWX3abLQPbF6SXZsmtXCYeTutEyCZJNmDLt4C",
  "key23": "2fWGVBZkFBGc4HP1Lc8RBGH6hBPfsfZt9kaffZeUqEyPCzXwK3Spwdd7LxM3DfEyG5op8DTcvbhV1TD6qtowVbwq",
  "key24": "2xev1xP3x8GZe8H1rjneAX4z2VMj3m27LaLuQi9pYo5bzbe1etR7DFMGZZChFR79feHhQMeRSxyNLXS9Cb19nZji",
  "key25": "55Xmggdcnd36rev8k1d7vmM26FMFqoo2YS8yRzAC8DxiP9N6oqF7D2t6DtkDpiAmMWBpgSxDUGW3w3SvLqpfDWKG",
  "key26": "3FhjchBR1jkyiV9HTbYErrXgyErSccqHiaRR2892bHZofHp27XNEdjo5pReXbtuuuE2j4sznFcdku5nRu9DD5EQg",
  "key27": "5NCRJYYskXfCbdWWRZUm5oFxZfkd475wgkUUfyJwBHfxGmDebie21K65YTobLKMsbukxFsmdW9yWpMVpvLqca6qn",
  "key28": "42GuXnpEKawPkHGX7MyMZagA7ZSLx1ejZAA3wMusrHhQJ3Bw4FTnBwvg4ipshCQL5x1k7RqmrgNGABR7NyaJtPp8",
  "key29": "4vg1LcUic9DEt9S6DJMUCCKAtsgrZY194haSvQt8UR5jZKuFp8WumiyxCwtR2mBR6b6FXDDs2aySzoQLVLm1vbaN",
  "key30": "3QmVg2e14YVtrNNTAuty97rbdy2CiEcMBuuipzBsWPbcF7jj9Hq73jNCqtW4HHd5RFztUbbhd1nwjTPCxTjXrmjt",
  "key31": "54vfTHXxVyd7KgjhJBuksGmcf61SUGE5oZ1LJCDBsVjwszTtqNDfeCeYqUMiXGivQ7qYJX9j81Ut3QUY3q8GK6u4",
  "key32": "29n7aP9F4fyk83xHU1LkE9qqtvfHHiAnk4jCnLKUDD98bWqAZQo7bf92CEpSpph52rM49E53qGnbbEhqQE3guYcz"
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
