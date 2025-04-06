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
    "HuKyBMx1XrZQ79GMDT6VUaP1bokDK3zwcaA8TCeTMTnTE5qvap59hucN7JsJMnjiNZxBBWH3WQ3sADWPoz98kHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEH5AMcousAP5rxL2CehaGRo8JZpCALptpJEctK9BPYCpEmfKPt1U5mkxJCDfLK8Dzp2dHJLhFJ3JRP16xCpha1",
  "key1": "4yCYy8i6L98TA5KGfUbFDGHEcrR5bGmw5u6QzEgJPj2Xn6diN7DA5qtYr2mRMJ3hoW2wwgz38hPse8fRKjHRWYyg",
  "key2": "bBNYV8wQqjAVSF4WxSf5RiR3Bsb6Q2WCRHPQuG6t9BjczaTADe5BvGhm679AnNGgAQ6EJBgs64s8jYES19gPTxK",
  "key3": "4mXEUBTKVvo2mYSLCCtPymTNGe8pM7q9Pr9fCTg4RDDsNGZseeKnsYRWKM8tMKCshPKWVUG48pLiRgznwFTpjhH4",
  "key4": "4zrx1pNei5GGXZKyDPRQspfQzwUa18cXenPYwQAL9MYcjjkTMrHMG7fGFSnKkqCQdfCNnqHbMwMYsvqm6pYmMxNz",
  "key5": "5m2yY4AeWG7BVENFMgJCwC5cgLdsdZyNEtAtG9436C9epNMvWLyMt4Se3VwEJeJ8XTdE55UkGVcCoexiRkV8PJmy",
  "key6": "4WJiK7dEt6EpXVP7tGphC1w8TGPJCwZmYfC4yYqXeLaxCtQj8nbB8eR8ytCfjpMp9VkNZysFTuMPtUaKGFAdbuau",
  "key7": "5THVKiw3H7s4yvLJWgoD5Pwxtb5CpXAFxVgP2b4PFuU9vjhpdnAaMvaASA1PpYEwUxKCVKJWZfMGFd62GSXihigf",
  "key8": "4rff68LMMGiPYZap4WbxMkBfmV3RD2DFrmRK5j7Cd15VqXAJEkFKM9fc7QGURcBEfNFmTXMox7J44D6aWUeMbdCT",
  "key9": "2pqX9icrcTNCLkSwmYcBxQUSkBM5bKgy8nPGzEhgjt4Ke3L65xCeyu7s7iwSMXct3KpxX8jfrB8zvvdUcYA9TBi7",
  "key10": "3Mu33vVYuiCHjqjhxMY9iBJj3jJa4MfsDoAPYnrcaryd4QA8KvgomhBbATnDJjvL2nRHYFc9NyYgQZ5XGrBbUiQX",
  "key11": "46pbowqbZ6psTLMcz3G1vrraL4AgDT9NJoAkytAicPAqBxij4i8ossRsC2XABmdZ4YE3TTmD9QfdrceGGdGqGXbg",
  "key12": "kN5eEfifZ9h1Uf2S2X7P8CXBtzv3HknzTPQPZ6cSZ7faZenwnnEexu1VWhMVAW6oCLofuxqPndbobPXj15NXXTt",
  "key13": "3oHRZSCGFZRb8Y9PT4puADPTdMeRxLSYdgQuSXJ2gdJqRaF7JoMaZnLwArPkg7kq75Mj7ByQH3Ss2HTXD9iGbi45",
  "key14": "3yikSydZibqQKKENcmweZApTR55gcBydtgHbKgG1NmKFndVUXoQ6zkKTFrQXjZpCekmw186wwPCEGFe4tsD8FaSr",
  "key15": "3ywgPhrqcbSZFLtv4ZRHTduBJVnMVARFP3TwGatcnGCr6X7EpVHJdPoKwkwVeDYVAf74ib5on62bDbxfKcGPF7U2",
  "key16": "2QWSjNZU479TwM9Bgk3gSD8RdkvEo3i6yQpDQULoRLdxwZ9pHH3Gh2xWh6xsA6qhDuoH5vBsWJAmnUyPC4x3Ne1L",
  "key17": "4BhMDWBEpPZJDiBAxrJcALZMTzFV1oFEvcaw9NksbHZyXELDkEB6HpmntoUskAHGe5UNuSxRo18tSomgDswpTXxQ",
  "key18": "sEumsEuFZ88zMPfU2ZTN6LP67DSDXePLu55S4uEqHKprhPFBhv6HsBdoVZEdM8HMYqpQFzG3NKTxbrTzj7UzijV",
  "key19": "2BobqsSmWBBhzcWxCzgu6uztMEcLqB6VpoyLHYDgTWbiP1eLr75oEmfNrZXvcj6H2NuSuTSHeYBgV5y8ePMJ8jax",
  "key20": "62sv9rsC2F9wYg5G7HHFi4PWnEWgCRn9RW3pnV2nP433BbqWTW8GjjPfZ1bvsVQ6Sew6fYFVqZY9W3dgBF7bcMWH",
  "key21": "3LHZvkNEPdoVsyMok7F7naqnermkZ6FmF2NV4NhnX2jCXjyyYa63MqVHmNy15ayxdza7KSzSpnp9nqsPk19m2wzd",
  "key22": "2gfRcMazbpD9234P7HRLJvkANSJbJvGuHewFQtpAqwVo42o5U3qy621nz9tD2jUGZRLsqt4xZtRWnBGt6H3GpD7w",
  "key23": "p6dL9cgvarcxRhgJCK3c3Q58jThBAfad4cyZ4YUYECsKmMmPrmptfcWZmR88knyffwMVNfQV53z8xq5cD8L2yax",
  "key24": "u8yu1oEcMGjFyVCmcUEDNXPM372MNstnLajpaKJCWXi3s3Bbrb6kWjmSbXXAnJ8igUYSpekfAKQM4yX69j6tVNQ",
  "key25": "57zZhi7ugKToraLYMXbNEwN5wLP83LgUSbS5QoMfaxQVXDvfemfWcjeGXG5mWxWGtQ8c5yGrHLfdWWspV5gPkD2U",
  "key26": "63y3d1PV12asf6cr48hqcsWDcHPPzZThq2p4gGcBesQ4zoVprud6Jfq3S8PX9mNXaY7Mr8Ljoru59dQ31qqs3BZ7",
  "key27": "2f42gA2SCQfJfucJQL3J3jkfW7ktEGgRGnE2w7XX3eXNHmyYctDUEUN6h4SViAuwKdbR79wvryYQR4v8r22xDqEN",
  "key28": "2ju7Ah892ZYp4ToWstCAheFvkpt9eBQg6UCzuiodeoNmEUbTznuuxisjeDpAg2Yq6Nr7pJ3f4bvZ7QDPMRgqTYSe"
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
