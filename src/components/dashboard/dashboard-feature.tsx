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
    "VWJ8tCjLSzEw64pRskx7ga292FZWoQhHtxWTs4zHgkVVuSjL4ovye9SXN21Xj23DJaRbsuDPBsLAiJjwzLJyAMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56t2i9QoyYWUVrBVesF5pTxDLdH4VMZ12Am9cQHuy4VAZbCR6A3pcmkkx1kcY3YqPCtJu7DqQAGfxhuWbm9thKLU",
  "key1": "58KubdryMQT4Z1K5h6FhJVLWBmmGVDfJHCUgEemxb1QYtRhVnG9ng5p7vtc5MACnKC9QcU16QMKqXtZnN8NQ5tZS",
  "key2": "42fqstijKEYyb77JBU62sSs3RrdLf1AgVLLptzqjrzcnQnB8qXmwBqUtq1h6yC6dT8nmvtE1UYZ8XqHQ3RGBt8mR",
  "key3": "7jP3LvNDLtc8CBB9ynvM6erEZjeLL6DmPvV3711kUECZ1nFTWtwTvaQrsemuBGmKULn5r2d4uoCdpd9TVbFb82H",
  "key4": "4rMpRtpRR7U3ecKwqgfSCK3NDeJxX1jBALQsR6qkCMassddE9ieBDvxxtziUp7LjkZmMbhJhwjeoWQ78ZUf1HXzw",
  "key5": "4n62kk6WXqshTLV2bt3PjRMeqDnXMrJxsoLxs8mtrgM1iSTXLF4vXufvM47hMsrDZLet2GxLes7cjZRZfACy8W65",
  "key6": "4UPXiPq7veXdpVrQd95UhehxLWoS5X1T2KfHE2J9pmvNd23QbCGpSjXmWjTVRpt8C63Su4EpzdbXY68akMogyqeQ",
  "key7": "mNZDU4LDof1V1GeCYnUWNY5DcNYzEAbtTpYP5gMYXYDN8KErfjokcWxQPSfJVMwAetegzjC4uaGVLV39fBttyjM",
  "key8": "5avFSvrXdEZeRDRF4ggJh4ma1ugr4b7eRTY5Lr9udLP6izu9CDKTApcy33ttcc3gLVg5wVdvmYiXk19MnzCqT4Qo",
  "key9": "3NmC1jyDe3k2qmnp9cW98bgoSLAaebyhDW7KSCAnc51DXJA9XmBFBLnT44VvouHPSdCwimRskauAXgKRvX7cwAgz",
  "key10": "ui1yMR2YKB6FwdHy3guSmVLvAkSVrkTFBmKX9Aotq3ode78eMTCiFb1PFruzLLPmzBpZYgJvnecrnWSbvCDjzqz",
  "key11": "GYgeCBdgkcGH1z1sPCjm4AkYDE8do7ddmyxQemBo5GgHiP7snK3SCjb4cfmUeWKREa4f9iX3TWBFB6rgtk16yHQ",
  "key12": "KYbYDtW77m3yT5SnRhtjkug1ij1Ynw5AZ2cdeZiUczRoZDbB6qdeP9cv9ry3dcn8dvVDMacuaLZYfPnTjfqyyEi",
  "key13": "5UrS3RtR76Sr9qYQTpW6RRrVWZKhZGah46vj9kKJGAmQvrBnKnS5QAekHehFL5rKCkMC3f874zSGeejNpkE3dqUT",
  "key14": "MnW1eV3ZYwYSYpPjgeSx8sfy7ttVDyPVpq7YDC1rFFYpLFSgZwhpNV6wkYV86DaFjYKL3b448MxfmeiZTunN1vJ",
  "key15": "48AQWoVBVhE2NaaFvWuq1Sf7sYm8JiKMxannS6cutCs2KVVAWME4pKu1DzkHez7cWJHSTBeSBH9EYFEYTLsDG4ev",
  "key16": "3XQW6rfExh4WriJ5oBMuZZk6L3PmbRYCWvwac542HiAssCzXHuepMBT4VpZsyGVbwwY3CTTQcwE7nniMdrYLWEqD",
  "key17": "2y2cKqVEThNFBiKbEXgqneRfAGQAs41vcvTd57HuadKPfKchLgV9od37XzduixZpghKSQnDTEYhpdGyqCafmAW5U",
  "key18": "39qFsaFn5KaC5gxGUAyfjW7WvryU7MiUmE8utgCDezHhLh7MiouzLLiD5nhepGeJUPXnVX7KnSJSvufLxYmrjBnf",
  "key19": "2XCKqUbcTWz4ghAeEbdYJX3hkCLNA5ryz3wuNNbaHQckqR7MRzLt8ZCKL9aRpCRYKeRCdqoR29jvWPRcVVuqi5c9",
  "key20": "ivPc22ggQYdjPRe2Dt69QhjMc5CpSh5Urw8jK7v8fbrJwTDXVPcp53kWu774EcoqZafUus31AyrR6vKiEPwBMri",
  "key21": "4NSV9SAbHHyf92o6J4rERRRPVB9yVHWEZytafvjeYLXoFGX6xSp1M3hGT9UNKcHcMT8x6A48SPa8GrLm2ksizBju",
  "key22": "2WdJgJzxqR429NAnCJqxHccJguYKNPcjANcf5vc2jvdtPyS67vXNHGAhknqoBmq5RdknToPD33VHM8zm3qVHsEVX",
  "key23": "4paCJsDVwhnHE1iamgoGcswvFi3Q2gu4Cyjtunb7FDJ4DygPWXzu1ADGRBuueMV9hY7wW7JAyGwyoQAKGq4YPPQN",
  "key24": "5UTCGDJRCEoRnSmR2WvHu8ejw3yESyzsvgSJruZAY69iydbpkHojMWCokWZpEk4QNMFQexSmb2eajZp9Mt4KQpHq"
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
