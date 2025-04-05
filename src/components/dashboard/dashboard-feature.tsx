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
    "n2wNhZZMEkGKr3p6hmWm4snhy7849me7L8gM7ggn7GVpr5wmHSvKSmDAqRBfA1PaQazJHeqQKF69Ti4LVLDdsT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApYmpDtjQy9WpNzXCXuPECU26QQVRMnK65whY756ggheWznbfkFq87GMDWpBFKTTtHBnteVtyHxRx9MtBzL6Ugv",
  "key1": "4DDTGgDqeDL7gkENN35w75H2aMFTo5PkKEYWmhcNoZdf16ZMMUo8sBrypqvv2NFnSJNebzZXJEyEoScKhT8fa7je",
  "key2": "2VxaYE5ww4AVARtgvkq9woUnwrUMEfg38UhgoegiAzii9FWJjdWXUMwQQazipkadBUdwZfgK7Mxpk3UXKKnjXBpP",
  "key3": "aWndFjsaAGVNG1s99MxRCMaC3wpHUVBiLgReNpFdwfgg6rEkkgcXMH58JP41m5nTd39V7KtZCSjaaiUJyR3JM6t",
  "key4": "2dwB7Fa8QMGHCEXMCXsaQ2of9SKwZN8uqVTTShPM3R6Z8yCxzCZgpz5B93GnoGFEZEKazNJXNuYrQQtcjnMBmauS",
  "key5": "sJk4LQLfUzikgMj3Q9qSdZUXxfpsgNEiThr9vMEMracVYMvPCy8sBUcJTbJ9ojjW8XaQjsHVsUyL5uX26StNrSn",
  "key6": "56RHsdxkZmWf39ax7zbp8WgFBzYMp7uTHL7tVQW7YQHKFpjkBvtorSippcm2vzz4dmwgBzUcrM98HGShVfPWvwPP",
  "key7": "gxtiMRoXyVowtzwXhAamXbVvvSY4tEitZtEc4DhtQx1sW1zFpFHH8KKHZVEHbNPDdpZNRjV6sn31XQvUSP4LCih",
  "key8": "2GNMYiHLEumKyf2mDkcxCNGrEdrKzcniLXfdP93Adybkezjg35PuJk6i21ZzyonSG1kcXNkUNJxqqzDvPZwVojdo",
  "key9": "3kQpTfW8v2eCLVkSqZ34o6AGnB45ovs5G7QcwWPL4MZCczneEuBxhs5U2E6xoRsrC6zNyBCSxW5KEmcxPmU7Z8pn",
  "key10": "43NDPTfQALy3byqA5BinpBGJE9wDELJzUWgxJKcxDTXtrnaMeY7Xp2kVymmLCYsb3D4sxZT9L1X9h9tCBQHR8uKe",
  "key11": "51QxFPz2k3tbdpoyGKjGje1QWgYbAKiHA1BBbn3yHo3Zdav3ddmYR3wMckC7aWQB4XpuU1SJxzsPJGVKvHEXGc5G",
  "key12": "3bhDJ5eit8hw2mMbJNC2kFJBja8b3H1eVWrikxfGbHJnC8vFVB8stA3eW3gygrKnsyDsVa6rrqjGFSB43efXBvTq",
  "key13": "5U5Cjna21pwEUfa1rBnJf74PaCrPdmFU3ZvbXYCP9oi14iD46oWCQCGVGuhinnSX8JDpJjsidbR8MWDFu3goT4AZ",
  "key14": "3dKvxc9Lxbmxk1xpXg3yghteQUPhWxJxZTAyQewpoPVghv3rAJZqN3UuxzxdzhwL8cJ5aq6hwm2H85MB6xV4CuoD",
  "key15": "ufDgUHcwZnc3hxGDHrwRg5tYPfdp9krdeUaxW3xqCwNbHAtK63M69EJP5p14pz5zSqP6FVYHceZzFn5ibQtApxn",
  "key16": "3Ai7twd5cHAvxSUSQjYuax6VvcDWCLNbkanspZma6cEvNBcvHGYXaz8WfRBtbZSjx1Bz3T4ub25SBqT5e6eQA3kT",
  "key17": "GMvqVHYyEeuHzFYwjpXmFbpBd6CZuLnkB5Kq727KNMR7znGU1H37Vxjr1iHuK9nvSqAQA8uibVX9hNDZe2JWEuu",
  "key18": "5wBX5imhwbPCwNZBvnDarZx8GgV9bgGvW35CZnoQzJH4kbi3KcaWJbb1grD41zmVaCGgWUqNBpEA4StECWZamNFA",
  "key19": "45zZESxYg1UiSfm646BDBQDLkhVr2TT157dUdHB2iKrk3N3aegTPSPkzh4yfHJBbopjCEA5ZzqFYHV5RpbgLBtSx",
  "key20": "B45jpkArb5YoAR5hCzbbQMzFS5AFE4CjAtmkNavymEDpownbxHC2HFJYafbwDvvgN57ND62KUgEmN3w5LGz6CPp",
  "key21": "5fQeFFZBBdUSCV9P9ttaQaWZ7f37FgLy4h8hHGaLRCV2Baq5wxnPUK5xFWvQssKEwJdV1P98zWtBhdWuBMNpJSUt",
  "key22": "2JpC3brbw4eBDHqvTN7eRfHDZEQ9PRkzu6mMDs7upngQTtYK97ws5rfVoQqnGRdXJuZadyZxVmviKetnbak7BNQc",
  "key23": "3KYQgNiERgGivL48ZUr6Axi2ysL4emZRwBVBiCL13F6gWLFfkagRMjepbSq55arzngNwKWpGrJf81XjGSacx9VYy",
  "key24": "5bkYCs8inoqExw4J9FExDTMd25b7R8W8Vh2KD83qW7D3s7M3Bz29mjQaEJNub2pLSmT33uWbddYAjTvfpGTPmMw1",
  "key25": "3w4pUhEXWz35ZqN7BY2xcpW6p3AbXaQCr27WubqoL6Kt9NSLiDMxe1H1ojd6dKSL8sCKrNp72SfyXXVgFHEHV6P1",
  "key26": "3oqab1bojWDLMankB4rvj6vxn8wgQ1k3gRy9CXeFh5adzGouN3FqeLg6CzcmVFLSGts8HNR2AfA2AUNUJZh1FuHb"
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
