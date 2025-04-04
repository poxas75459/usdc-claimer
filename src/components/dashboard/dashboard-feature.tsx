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
    "XX4QLE6mmBRP2B9CQkFA8z3V9txbhMBgUYcbLxfYgngiV9kRwcSe5xYmFyVc9ZuyLZmUNqKaTDxi7hkJ1NLeMWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyaSxb5VYmFh8PdLUyUMEVhPgim4jfdEU7tmsHwrnv9TKxx8rf3KjGQVUQMog44Y6k3uFEqdghDnpHYMbuAYBFb",
  "key1": "2KdUSea5mdmRQisZBrmsP16w82221Mg3LMeqeuQSQwFGy2j5AbSdegtfDM9ugoqEDyjKUN6zDjNBxMKJaetXuTKK",
  "key2": "3Jop3yQRDX79SoYyZNMkUBVYahxLD6zUJDkmJE6DySJJXNkkRb4gPXqBggHCuZa4bfcuw9UAjxM5MHKqwf2JFwH7",
  "key3": "5CmYJLHqmy3MpiPPM5v4KVn64F2UhUvd8q6BLhWJvTu7tT5PBGJrnuYPwEVUtXZGDAeufdg1hnxaLUdKLA4h3x83",
  "key4": "3FrdZzncmGdmjrrt3XuJxu1NQH522hTqbcH6RRtc6Frm3et4PxEoSGZJk69qw6mt9rRhoNDEAtcDZN9hwfVD736v",
  "key5": "pfhpA9wcGn2JuezNKcPqmPisWjTX6gmKSfMA3s1Xdq7H1mAGdSGcVLCByBwz9NmaGhEDnLFYp3rnxa7HtMbDuow",
  "key6": "64DLgCHvRmHFK7qD8Jh1zhxVCMZQ9stN118DieB9x3H39kSizKw4oG2x6R5gNid2VtPxaNLEo5qCteiNBdBgWQ5m",
  "key7": "4QWQWuch2ENQwwpx7dc965ebF5Z8GbX6wpmR97JCzC9FjidnXR3zC2cA5hA8BawANQSZPkL9ijL8puQGQHpR9kt2",
  "key8": "2PVsGKyVcsPzvVZtwvtJYX9aezKLLz8TABhgW89C4yPYCEKhFZwg7teExtduMzKsEKadNoMUY6RmKcwSKxKykv13",
  "key9": "2AWHqfWMvbBX38PsxBBMBFVWXzuLUpYVNYVJ1Vg8i47jbgMZzzQGhi9x2ge3wCgojdHpRkRpcyzXmW3KxE8PELdA",
  "key10": "2M3wz3JHR8ofLdKRLejVzrr1rDWdv75im8DFLcqos9DRrLE8GYHej2RaGjBBoQRBrvzK7LgYYu1hJ62qD17o7yJh",
  "key11": "5NbTB4EXHxcimiJn3Q1GWnva2AtK5zSWCRcBKqddoBvG9NsEq39p3FSa1vKCX73XRuUSnJABMhvGpzDqpVWf58t2",
  "key12": "4SgnrXwiWFCT5UGNqAmuAonqLLcwKU8ZP2YWG57HQJNEt3E7Pj3kvPoz1h6wCA56zNZoc6FcoJ8he5Cckxv5LK1b",
  "key13": "2RVLo5QwzasTCJskNGFqWX8q2iiMt1CsFPHQjksZqcBzYfmBUnBxhT1qHQCiHm2HzCJdjDEjEHBaFg9VPPhmU3Gv",
  "key14": "38kWNAYv3Z9NNhGxj1YQqDJgqLpt3zHLxQHG7fn8juSLLbpwYu3ZmaSCqDHcdz8oCGacE1GJphNoWUhSa3TbKaNf",
  "key15": "5PUTjFE6VqP8Nugor23RscpHDHWDMBKzqiG5JwYDKHerR3xYaN388HaFpNQWBygvjhDHGCvb4SrCq4qJvcconGEn",
  "key16": "2MhG9MVZma7iQD8saWAocvMbeMUBW5BqNtysnqDsViiLZXNLAx7HWKJdiZu2kbZr2dhK2ufXtG8xy2W8LBXF9R3o",
  "key17": "3FrLJhWAme9itHW7ULU3WDjuonCbgZv6ozPaDg7ThSPmhFfvcswSoeqYamVpRA3kNRtwY1t7dgyuAcerRYSfzmfr",
  "key18": "4mrtgpHPadh28fizWN7jmKM8MD7VRTcCDq9hMVm3dWNXMqjs9ioEUqfxhpNv9Z3hQZ2qUpjHLvUqDem9yTXDPWCa",
  "key19": "3fby87rBXGWmPipkar8eayqkxsNaUGCy9DTrLpxKeb8ww3dUtDZjZUPpibuS13AefRwuGo3voNkZ1ZhczXNBhPfy",
  "key20": "bt4hHXe56rsabKve1SCCaME32HUFYrCGpfF1CbegefjKFzqUi93tZDCizTEN17L7hPBCUbwgHby1AAdbiAgdLvv",
  "key21": "wUp1uEKz88vBWonNN8VxvJpGECes1csbY8cTEML2CKgx1dGQuRfMxFBQrHhg1HxLyK8RaCi9fLccQYxVAo4SH9v",
  "key22": "5oVs3ehJi3CZ6a3YP3iMzi3hrk4QYCYFFpuhte1YbskPDDYunVzZM6BdQDsG4mPnreb7wnh9gvDAnNtoKV3FQ9cy",
  "key23": "4226pyU8VXUUQnN4yjPyGux9buLtZePGKC7b98EPrSGgmBpcpmbzce2focGWSRPHgiSpj1Y8KtbC4brW1XWtzPNk",
  "key24": "4aGtmZqnhbGu8gxEm1zqEM93eqxgZHfXPB5KwwjhgUvU6tCMnpXYWeATPe1ZEpZ8VW9a7GmLiEah7e8AFrqnWYA8",
  "key25": "4awvjdg8Zxzpb3jh4TKLC8GizaTg6Qd2uCtBVMwwbktyDWQw4SeW6Fgxp2bENTJTapfF6CmsgdbPj9xKdG3f3tv2",
  "key26": "4JegdGE7hHCbADGf65vFCdafmQp6sChd3sTbexQwkLxUT4AEqZDdzznL8Jvb1qqNiLYi7dcynQahJ2Z7o2KjPGfg"
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
