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
    "5AgRwD7i3z1c5mG6dLFbU9NmfQTuDyBj5DA7g5zF9c2BkbtXQrGnC1nmYH2FjgcgQFjTcVaiPAgXjhrk2BsC2T9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41h1w46LEBFNe5uRbEqWhpN8KeLfAttLPRFbtFC4TALmeU4AQsRHanApaVJrTT6xDaWEwyWjPbrQUFLEAG3pUYq9",
  "key1": "3yQ1Z7paV4afk7zg3aNjUnVdFBnQ8LrGYPtAnzUea9qSPwadd3F2Poc2iqcYVbe9siLetKVJybpA6CsQFfpQ5ge8",
  "key2": "4teyfKSzHRvcB6KtWsoV9SeMaMbKv7TNQwcgiShjAF378otADjZFZLQHQYZgtqj6mpMBFcDuubo3qeE6jmGJ13P6",
  "key3": "3Ut24EGEJAhLsctb82vsh9AvUXNg5tvWLWvw3cCtfcmJKWQFWPSBsV4dwHiXV58ZeMdUEQWqMpAZJn3JfyQNQAs2",
  "key4": "3r9K77XDskzdDWfkAowtqAwRmwMLPRfpCTRAyVq3KPEEYo49HjkfSg7E88BNMXU5VDUm3cirdrrbnExpbUZxSm1t",
  "key5": "2skKmVyhSrZfx92z1Wt3CvkZ9iraj5Zxu4d3HhrBNB7Y9GigD68jaTtx9XSSfY132kd4jtbJAJv7SCEK9VJHpSVo",
  "key6": "4shcFVVD1hZwETewiLjNMo6Aaiu9zxBmkSTtKmPdgHqBMDJWaj6uyyZW65dDdNfA5hUPk6ofpSs5NwLH5gDp6des",
  "key7": "4hsvgUJypBrt48cqPcUbitDDPv3Qy62f8b64pVMFrcGrMhtRU1x7RmDuTe9RamxJqFxcg3AaRq9SY6RMrawWbjk2",
  "key8": "24mTaadncEHiJPVygRzoepoCHQr37PBQD5GqYQCYKG7bQtPb9DUSZMcyjF2B2fUYpWG62SQsW8KUSg9hTMNRxB3v",
  "key9": "29oUjPNR5jL6Vv4AVaHjo7vCzWRUEGkt77GAhG7aRgvcFi14b2oAaf6RYgQ9EDcfJhxD6VNxCoCPRkgeVVrSQ6pa",
  "key10": "5W5qXjmzTFugL5iv8i2g8bHhyu75ynjLfU7bBx7utmj54oZgzH7oV6Drs9VhY6gnRcA6pWQfDeiV7RVkaZ71TDk4",
  "key11": "5cbngSV1ucGDr7j4Rj9LGBv7gWpBVgiM3se5b12kNh7hGLtopmrDgnbbuDSDaUmsaGWxjq7Roqpp94heqTUqEfnF",
  "key12": "2bZGX3d2qkrdpzKSErCthwN18qTSQN6eMku7MjnAxFNSj5KLm6jvx9Wndsy46dFcEfFHmri3kur4tbdt74Aw4d4n",
  "key13": "2HrofDMuqwoQx9v1qretmmtNUJb1N7Nt6AiseagyajhynphwGBCreTvrmndqC2286mHL1nQ2T41S7e4QBXSMH9qb",
  "key14": "59JaY5NrZTbgr1gc8xuoH8qhikVsCKa4wstbvceHupGLs1UfFcQ8MnFPTJfJwF4RPRCmjUBCkMzs3PaQHdwRrpAw",
  "key15": "5xyJhC2GWeGw2Wwz5h5zs4C8Yt86JSLwWEPAnoqxpFEpy6gBtPZZCCuPABeVam9jeusTTg13PtYY3h5WdQe1kykk",
  "key16": "21ddSZw2HZH4C32dM1iHzEFgkyXUuqrHtJjyKwEdN2iyjGk4nwRZ1SgjjmbGZNtfk6D8jE3QxyrT1nVKZdCBYmGU",
  "key17": "2hpJA4vHcjoeANkpsC3qPf412aVV1gf6myegx7nph7MHfVazM3ciurSi2uPkzDpTTbrBiQBNcCier74kxuKYrQec",
  "key18": "3Vg89ZEZY921sgRvz8c2PvMFWVP8n2RcDcPLgG4AMYWsWz5yKXcRezQYFtD9GjxnqPMkC7jdUqRBthYd3kUyJ9JV",
  "key19": "WsZLFj7qrsPn9LasJ8vNkN1A2kkP9oSXutv2DD8xFYG6M7DaxhfuwJs9CwonhYh1pajxBcAUMaUHHEMnApYJDGe",
  "key20": "3j7P4y4yDAttQMtoLiKucqhKewUxWLRc3MjPhp9wXr7tbw5VNttZMK12uLw4ACiYARtWBTokK3iKrZcKNyBwdRQK",
  "key21": "4QBNLrdQ9E58e9ty7kA1RPedj4JJQe15P9jWuPZuegRFxpey7J7Q5LTSPD1c5dDAvCicUk5McHpPhTheighycPtz",
  "key22": "5ax2ZJCjG7BNqowV8e4rG6w28Wqyw7qBfg664E323h2pbFkLEEiLHtdWoiB7dNhwVpMJJafi6d5d8bjMqLAAWSzw",
  "key23": "3FTCFxU8frpRif4yHaEsdbQ9uM4TnSseE153tmrTV8wUKnC4vaH6qkRZR5vL6RoJJx4V91MSvRZWpteLwHd9QLGN",
  "key24": "4PQoSbPXRwmRqHuP4BSx6A27gUoyXJvn7KGYjqoQPCQqsGUk7LfMAntz13xQQoP4d5GjEG3eXab3kHxv87JpdiTJ",
  "key25": "5FCrEysoQ5oQT2WCH2PQj1B9fVksuyTtvTnrhQYuZXxPSujwPpzduHuVvdtyCzz35x9hMKGutjxGQBtC9n3DtEN9",
  "key26": "36eSSbJJuoeFqXigzcjbNey1m9TwVktq7HT58YjSsJgPEpMRPzLUQTfmdtfmtohAHcriqjRN3wVoon2Xv57AuSCM",
  "key27": "4RGSFqHvHSPHBr9e8DTroVXpEm5ekLKQNGaKFx4BGfsN6dMjB11ZHftC2HB6fg5PWJSNnSdJiyPRjEY96aJnZUP6",
  "key28": "4PWXRHZJTnaXxfSJpywgg8QeUiCHKLyon5DnDwhvj8gQG3gHUVNPKNXfpxZmp3GzgKuc7gKKDXK44Uv1R9yAC7vY",
  "key29": "5VhHCp1TtjcsSt3Uag1cJE5NHx8cjpzVLNymo8XmYFznyyi1e78XLP3cCap272nP9kx65ZTLz35Q4NggUKWqc1Kt"
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
