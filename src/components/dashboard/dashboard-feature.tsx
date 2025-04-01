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
    "2iwv7eaWT8V3YZKZRt53tsQJ9KzzdDrB2eg3Vhg7eyn9u4jKyFUZAiVqcKaJcXubYto34WFAUxkHRxEusNuEf6vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VLJfj2pddy3znwNLufmrun3TWhqnr2HyBgRSZNeE8JgGqC4SmBRgdebr6Adr24tkPyskZNHYWtYoA7wxryJGYA9",
  "key1": "2HLZb2jVMZKRvn1g535fyvfem9dD6whvJs1PPFPkddKFtrd99uceb27qwaeTsz6or7iBSQUGoh2Z1B8QuN13dfTM",
  "key2": "LqBhpfw1wAPrLLjgRhfuAFx67LFiMVzxjgJNha5wmZsSNjxcFQYD7b4qzbWSgstSAkkUMyWEm8fu2Nziv4TYEW8",
  "key3": "2SogH3tkArtxqAC5Gdsb73ExBydeb853vNkQYbqrbberqGhf6J1fsbN1y1N1t8Q9iJQrmDXJq6LhgGcEVRA3Mty1",
  "key4": "DPWosfTGCamFNABo4jKhcREmuphenkgLrB8nPdjdY7mD1WLxpTPjpmuAbcjpTSBKBWchDrgSd6qJ779AZFvoNW5",
  "key5": "qtKKuZJN7EU7o2MNKsdSkYwz2gfqqrH7hsFw1mxhQh2YcnkwDF63mLjkNfcKWVMSB7WwCCPdbqh98RRHfCWck1V",
  "key6": "2bJKMWUTwePpynHaVYATRMNcDUY2xttfwBtec6RLSYAbucDEZ8qaFxU3Krf3kq5x4gRfBwBK6jt3oB1vEpP1roMH",
  "key7": "2pbvnHyr7jnkkdbiXPVMjvRRqV6TLcv9FDjUkmdcJzNDifcxPCgT28K4CkQHyNx6wx5ViU2FWHkxup5jQ6aeBpYW",
  "key8": "2tpvWGNyaLy1DtCR6rbF6jEdRMbrYadZypgpj4yZpj7FtmgrQU4NAmMvLVJeNrvuSsApXBdpRANh1pi5UuMv54wK",
  "key9": "5LEDhXSrk1ZY9htZ25UqjCXy76ui1xct5Vgo6mR4Lrpb9zaR7ok47Hrq55NBN2QvLgQSsRMeWYWwZc6ymjQn9kbv",
  "key10": "55WbJ5As8F7TDeiQ26F7oMkQeePMvwmE5DHaXjcGbmLHBKTundwMVFvdzb4eWkZpA7oqm3ovKEhL3jb3YLANLk2H",
  "key11": "3H1B161XMfKtcVFMW2i5BddfDfdprPCK2ibWGaz6gqWqBPifLHh5CWnmBd2ny5Apt4deNGNRGqVHbR962wBKVHnU",
  "key12": "4tFKsHtAdcSrjoDMjdHpKf7pZGJVCnqBG259EWtP5Y7gT29JzHaq2oMBGiMQMo5C42hwgZEpMaCp3SgHAEjWfWJA",
  "key13": "3jbkssdnCD84bTVyCsMNCSvvLxmE3hxK5FYrtPEWYokdx3eJt1ej5mmpToiiHV2ZXtVntYotYAYzZm64mRPLoh5s",
  "key14": "4xe7AHqYUHb3wVLh2ZBc4aD6xeaB18kr5FQmWXbzF6MW9JD8VWQChakHCwrsGgoLnCiiMjzGjMYTq11Bmuujs96U",
  "key15": "5nG1f4piQsmgSMgcqg9baWkemYUjV3D7Q92WNsFXGY6qdmu59WtNQjk8fzEe7N88jdTVmNc2QPaVD3EgGNuif2V9",
  "key16": "5B6Q75QB7yE83GanqS4jYLKBkpmJcjSriXMMh5h9izei29v2NNs7c6YTTk2dULLtsF9GXqdTGKfHoqbGWj84mND8",
  "key17": "2PkQ8qXJG7YQXMrbYtcwTAvNP8wBARWB9EE68QyxnubXJzCRBUmAFzyRp8ZPBojtUn9uUGkzbmKAH37nUTWr5wGB",
  "key18": "4c1qfTyh2F6q8dgJhWiHFXm9bLzHDnrS6KAQ97CcsezdSAhUcVfQ9pExYrJmKXr2AKFgex81VUir8zzbmbKeQp85",
  "key19": "4wdTRXMHj7kJqtDwgbEypG4vhDCmZbvqKqAdJESf3zRPHUgFNmMZUfGiYS9YgGxemdX6BwASqxqF19xHQwMZjtLG",
  "key20": "2qaXDaxVRGgvhP69JXZ4LYtu5Dxd7NT5nXBHRGqZ3GY9sSLnCM3MANVGtBMk1WVvKzaDPR9N71KzBeJ3o471KwQe",
  "key21": "3SpPcQLXkqGmjHMbncwjwHAPNvPFh1b1dyHUTHHKLwKZXMckahAG7ZY2P25dpQx2i1pFRm5CedNnqeYfGvw6Rh47",
  "key22": "52WMPNDoKe4XrBWKsFaupSDDh4bGohmeSBcfeQ4vhoCpFAjBbfDxcCSqcDoGhcPnwXzodUkVah96jtX3YsPJ7TQ6",
  "key23": "4D2EfFZZSphMtq51KL59gLAc8fHA78TSj4V3GAp5Xq4vH3sJce9N4p3jN3c7RWaw8WQmgsw7BtkNKEehP7SmFiyp",
  "key24": "4u56Aj8CCHXa7KPsx5kuF6sh2aF9rNY73HQkZkwjT4QaPDYGJRYq72YTXn8nFEekVWHsUoWd2YEEq9YpJ2XciXau",
  "key25": "2CQPjvGSP1FLCMKYh9JwtkxTe6kbRasBdme3fdNpmVnd5rv61ngJB3azxbtMduw5pBJKU5L8PiFYgfvXEKs2Exum",
  "key26": "gw3SyEVwa8kDqEDaqoCcuEHNhivB9DjTCZ2g6WJotetpF4Fw8HwqL1FsePkQNgm3NufRaM4UbtvhY22zqBKAtKW"
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
