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
    "4wY4kmSm2vnqNtbxJ6yyiXXg6gz69m9GmmWatZqXu6RRwXpah2MoZixecZpwL7bqMfXYpSbqC3ru1ZRaDE7dt2SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NcS7ZofaSFiyuQw92v5gnuVZhfaqHStA4f1DiwS4XeVMRTFwBqpkbkehKbMYiAHghfJWY86JTWyTQP3YvXz4GPr",
  "key1": "5Egu6hNo9vEPBYR2LmkmZMqhctogw3H8VPmzAEPkoeUty9mT63V2mhjwY9GGniZbTNng8AnCpdNrB1r6NF6G6s9m",
  "key2": "2HU4HQVhfcrM5XD7iNMTqWGjoF7bsmMxEnivf1i54osF6Wct27Rn8viDnQDf6JbsBGs9gbUHmoR6xkAh6D272BD6",
  "key3": "1xjSJYLfgM5dryt5zhriVXYKp5YRp84LvUuqrpy1ZGPB5TGKFfbMa1PX7e4krP8afBzdgS4gA69ZxDd2Uzhiyuk",
  "key4": "2QCB4LaWHsqBGu7kDGt5GjsgovAkgQwtXwWbupeRhVVTr8BC65YR18daUSu5BojdcBUoZSTNTCfBfqbjnjjD5d4",
  "key5": "VHGmhCVDHPBZmBja8161e2rivArmwvVubQ17nC3nwg1TYt4ATZB8Gw7c48HsEQj3LBaQbXxzk3SvYjBLP4VUUaw",
  "key6": "2Ab2uMQ19bocykCsfQugSbnUKw1qAzptxcXV7Y8S9dMkNi9QoE5pT44da7PpTm5BQd2u6juUj8pqk5zRzhXDhBSN",
  "key7": "3ziVCWNaMCsCXZQDQGZYA3Y9JNFrasScYLYtCDmBnycsyXJj4iTEqWicJKgGxK7SzvyqPhLqDbq5SbSiFCgKoibM",
  "key8": "2kaHrCacCp7pEHRZ254TirdFKsXH6wXMN82ajLzxzsqVCfhGdrh88sz6Pj4S4kHna7S2ZX24i84k3sd59NgEKV9j",
  "key9": "47TgVmKVpgPBnczY2aeDLPfGmRdvY6LUHUAXXQvpCMkwNeh1g4yonazRr1P6Mska1dwq8TWnwf4KcsmBj1NyMGGG",
  "key10": "53txXhqQe8cfBHwka11RFV6uLNnWDDd7TBMmxeKTwfCEuVr6yzRTxb76AzH4SJXWd4WY2x4aCQPrJW7kUmJJYv6L",
  "key11": "3VdiSHEcwtgum2wWM38xEYB2TB2aEQ6eFmScDJuCtKrpBEJBfcptJjntiASGQXiYo8siPnmhcBjtZLvBShJ26Xft",
  "key12": "5zBtmYTULJa3KeeCLtm2sxBHybWzQCy6nfHyRWkapPRnSNhbZe4DH24zvmJS8WxjLSGaw6oiQn8UFn9UamHEAK2r",
  "key13": "4S6LW5xzjGV11Ys7uv3ZXrtHP4RVMguRWd4fpZq2Hzc1wJZ5XtbsiTvYZUzs8e2TsKXEY6fmg3ohKvM7bayEQjiQ",
  "key14": "d7HFxNxqjyQeKWNz6CTC4Nn8r1M3Q8uWqoz4WLw9oGbSecYByWMnafdHnYcvv1TwhsNrajYdtHBUMC27JTaHN8u",
  "key15": "2LafT8JshgtxXHZo2tu7mebWStR4xnugbJ5RPwohvTS2D3mc4hXCZU29GxLVQzchzEABPwu7J5v9NXQjymX7RnHJ",
  "key16": "Hy6anADqv7jJY6n8u7fqqHuZxfFBXFE2aujuqgyyYcn85fk5Ha3iX5QW7FU5TTmaqzCENPybq96vddHuDtTQ3xT",
  "key17": "3fJ2x1D8vLGeRR1bTePabJRNyc4AoGWdtd8trW7LrTV8ReZJAgoxD2eXnpqCoXwR79hh2BNt3oBVeeEEiysdt6dQ",
  "key18": "5EJaCoiyvehsKYAG5rdBJDcHMwLk5uEGjYHowWyo9TMg3LGb653ERsVcuNkNp3NZUaShWBWHN59C9P5pcS3dxBTW",
  "key19": "524DAyHmeAoxM7FeHo7eUa4WfV6zKtGx94UfFSzeFnheCzzABeMCcGhCBs228ovC7rHg5svWadQs5iarfZgPod8Q",
  "key20": "5LmjtB7582Vm9RpBkXdue485LSQupbLyVicoLykxwNAqyfUrYyTgFZeTtjjPsFvUCtkX6SAU7Q3FfSYZVVGaj2re",
  "key21": "5ezmVdeTwu7gPaLMwwXyvReJUYASCAbJSKTyjHYLCEUeDKVSqzEekPkrk6rWxmKXCxGepKNf4X48rUn32Pa6PgNm",
  "key22": "3AC3dwN78U6ySieUyAmjkoSAAjQibe543qvCBHzM3Raf4U6DHK2UaBm1ahLTgqGnRxJQRcw57fqcs4ujdcGuzCY6",
  "key23": "P4TccuNp45b65nBkZgWYbkX4UXp9oQPpu84WRtZREVMRrSsKivajW1taM7eVgAYhsVQU3oj6coqHGaQRH9Pi5oV",
  "key24": "66XuaEsh6DxX1JwhvCVfhFXwQDSGgFGGxUa6txbBx2mFGUdgvbrskVgvXW6F3TC9FkAgCEWqWnKrqaGiwuiU7oiq",
  "key25": "vbjRYjytHzR1vJSjUMLwVFASNDnVtuJBZxiNevSYHpHiAMi1Mxa1TZCZg3q3E55RMT216y4X1NMtedRtM7QL2ww"
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
