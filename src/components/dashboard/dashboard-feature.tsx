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
    "Fvr87qjb2sDSBakbkurhKSV2KRuTkgs9comJGgAvRVahANEk6GXemfswKLQcrYDg9h84dqkjhWHTXaCDwKRVaqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFyFz3TYp3KPJmFkx2GWuA85U5GYiT44ZkeutLfou78jdbmuouWqVmCvC5ZtUq1wSgUipcF9Fyj85x7Dio8gEPN",
  "key1": "5hJe5b5XxvEzSk9wucPJuRHkBTgmow6LMTmmAe1HjJiPtH3Qv2xAar3vkbA8LtvYjmxEYWAaZiPhKLd3eq2225ti",
  "key2": "3pHV9dianyNqRhacVbbFgwxJnzLBbr9sKfDF1xU6rthmhVmKbtMYDNQiLWMFiLeDZh1SVmeEzEYkFt2k3xb9XHoT",
  "key3": "ggKsP9A8AfJ1wJL4ixFcZajJJeMz3oJUFWWLzLAijzRpufqziXr1F6aCbqj1jbiE83D6eM2P74D92HXhxXk4YUR",
  "key4": "3XnXwVMoV46kYKHK23vnZGmjmvoBCPtwqspWj9tKRX7vBzFxwRef2XW3wPyi8Q1wb5wP22QVdhP4PJbmMXFUiHCB",
  "key5": "2DapD3YrF3Sm3ktqXkWuMwnGVMpPXKpcJQUmpD12GGncUpaQPM6C2K1ec4Nv5Ap19xf1VmEEyLZGcBVb5g69HCna",
  "key6": "4T4D4hEnGx5cyE89JbMgFisP3B3mYJhygZV9ejJjt7eWQiUXhpW9vPUdd4b6HD3ffGB2dPeKm8KmrjSdTwQ5AGpN",
  "key7": "Eox8aiikytiAKrgX3SDD68Wn3mVBH2jE15zgtEHmeaMqVy9nLNerSPk66WPqrcue5HK67zKkoX9MbFVNJdRzjuz",
  "key8": "2tixB8idtxJwTqpuc3JFxMEbtKQ6qoQjaLyEcaBjtA5m7KYx7doriCLV5NRE76niL7ohZJVzKiBdriZ9kkaf6YGP",
  "key9": "4vSWfWDqikbtxNPDqjwk6KtntXXgCT8vtfsf8W6fu26DDmFspJLK2w31yMWbpuN9qxVeCjdAqq92tgxuBvPRjpEB",
  "key10": "4sJm3SGMNLSDRK9miNNgTPQxULsQNPZdZdRYVuhtVn8gtcixim7Ye5SQ5yQgEDcZEqHHRGPSa1xW8tpYRrDoYMBv",
  "key11": "3XzaVb3CCdgNBJGw3oyKA2DGzA5TFtxALeys8Je7gmC3zhg4hgFKssG1d7pmSUi92bhdwvPiuse3ep2rvRp5SDgt",
  "key12": "3bPwg549PHZcPbCERttGskrEEPVKmWHMzVP2nVFoVZwS6u9rerULuEpGM68qLCKMRZsHE8YFzMFjSwxXdjrm2uWR",
  "key13": "3C4DcAXPzc1dGCgck3e58WPbB7WwXVFV16DcK2e5LKxewR7nqdq3ZejskyXxeKvo9pDvv1BDevbZcDvy6oy3S6XU",
  "key14": "4K8HquZb37akD54tnAjPYbkPrQZ4DsEqwitJJUk7mmMiPe3XucCkqK9GevGqeihUuThV1BUgzzwRXVHzr8Qcrjgy",
  "key15": "5jvHMndoYu7YZCq5mtgZ7wMnLAfAEKcfvx5VyLYovCQ8BhDANicB9FQWqBU1Y7p4u8H25MZQwmMNSSqt3sLJ18Pp",
  "key16": "3L1qV6tGe3h4k2EPjgzurJ2cTjMDm2Rfat8vkJHGnbqoYcJYuHq261R9QCPPsg8n4TSDsfDD82TqXZY9bCrWkwZG",
  "key17": "4CwgC3knUKaGQSxVa97EGmfiVY6nRdRLxnvkzjkqPKHVSqMKp4CoMVEGBSF48LFWPe1Yh9M5XgpwwHXsARUVqN8s",
  "key18": "2zyA7EGekJ1LeY6sW79tJ4oNDt64k9rRsBYn1XvzMgGvgEZSvNv6MsqTjgtXu8jkkhMhaQ6dboymymfuQHjzJSXj",
  "key19": "3XTvC2Hy5qftw9JtkjtwFD9mnp9nFD9sRjaWWjzkeKWWAVqE6XR1KUomhKkYjGvaCxKruSgrr1h157EUdeE3AhQb",
  "key20": "6dDBPtFvvN4HkTgmCGKqj1QCUkNZP4NRKfSXKN9VNWmew3uxpiWVXCQziJFUi9mVh1VgPG6DBoPec6F8VCt734d",
  "key21": "2feZU1BPVAMRBqnCNuATmL8GheuXN4pGtMirxB39UpvCC7hmHsBm5g1kYuwx5jidzUPDFCj4TngYWaKseb7Jy4kh",
  "key22": "5mEyVkzedQm4ranPES5UmPZzzRfycQiyXVN93CEafSfxK9SZ7wEuCZp9JbuCKjEZ9vhZbE3oWHqmNs3qyBJzn9fR",
  "key23": "7vPYmc7ccqLDod9rYuVGpUQ4q25UQYSKBGvGBQrMrK2WgyDYNVHJq1YYn9e3gBzMJ4tjKHfN4RVEG3zhi26rT1y",
  "key24": "4DGf2WAQBJuyoFZpsJtKSonXqnLG118jovfLEdrkzmHqgsb87ptEPfyzS1oApJNB7B9iV4swozTXye6TuhoMeCi",
  "key25": "4bavBJ59Ti9DbXLy8Z4V3XUaieJQ21HU1mZF9pfZoLo69tigkfoJzk7QVM1eqHyKjme3dSGQgdcbBsTszsYadwtq",
  "key26": "3CcvGaQCZzWc1osKMwU3irKTs3FHEVwo9Rhmb4VZMdwLV5mDD23rQG8HcA8b2aRhCvwmBDGa6vwq8MaisPnAHNK3"
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
