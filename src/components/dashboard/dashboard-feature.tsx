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
    "2PvK21Yrc3r7F4zFi7jixqF94TqfXZC3FKAzDWMVtnq4jz9hHvfvXf4zCjBQxdXr5t3xUGoK7m2UizLgVP2Bg96R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wvto4EMzauUWs3S4MBMQvRngD8yvAST3rH66cWe48BJx6K5xHR3GpG91aGVDcniL18GpSHWW7yWHZGaFkCMFJDk",
  "key1": "2i6mZ1CNFxfNPAQpsRX7Cx87vMtaTrz8mjjM5MApjdPMW1TGcqgTigFEHrxRo9uptbY7SGDrpdfDcZRpX7ypahbx",
  "key2": "65nhFSdFDWz3xAZHTH2qTi41MFn7y565AQnymTGHEccAcXW2mpUQpYEKbfyTsMw41dkLpohN2Zmo4hmuiHD6NVhM",
  "key3": "mCofTrQXv6LERwWamRfBoTe8wpvh9ZwaUNsPXrpPw5w3FvcpAwR8rVRRLyVPHyHZFAKqDUpWwBUc96eg1i3bwZ4",
  "key4": "52dSxAwXiTNeRodEDt6krFLYoftZ5R3QuhcFjqkrz3tjFaV2FdM8j8FkRrMJ9VQ4JwcXEm9Fg8U9g55cTYST5uU6",
  "key5": "45BYrwcUWYYReLmY9E6JkpRhQd3THZ5GH78Tqya2QaMWJWwLP1n1fjoyoLzEDTEDTDwHTvo1Lnx5HYJTNC6i7RwG",
  "key6": "2DESgX9tspYEP2Nk1PbGKDwuyPcX5uVsc45k8pqdt8jdLfR9a9xQAUDhjmiv2zQa7R7h3ugTgBUqgoLsrtJXo6Tp",
  "key7": "4CYRaz2XUTJFpNnXeH9AcWSNz5q3LuvGSiuDx9rS5WK18cJ4zG3219en29REEoxkjLuRqDguf2NyuU929t4Mwc3Z",
  "key8": "3EbR6HA6SKtMWVNoFf9yaW1LJpTuVyP11PBZ6FXE6sPj9nx4fcFZtAuL2zd36XrBudzARDMArtcaktj1qcCL91ms",
  "key9": "KuQhxFRuHdmsXPMfaGTuHVZsesxEd2zaTABiwFm2Xb9sLNxw3SxJFcfY2MFufA9SPCi4S5UbW6vXPgiVbMEkS8b",
  "key10": "5LTp21gGRkN8pKrzbxFmQfZAsQPom7qMNyVG2Em8NZPPiHupUyAaW3C6PTv7fo17RtRYMWEcRDh7jkiprwvcwXst",
  "key11": "4iCuXcnvehSxfQPmvSnaDF7o9HsJL4gC9Zit4zvpt6xQ4qWBHi1cyUHUCWykg7BDq6q5CtXTcp58sQS1DQNY8FEe",
  "key12": "2xTJwkvzhrehbVvHAishRJQjhb9gsFT3TwRTbMqV5d4zB6J8wPhMXWqz8VFTNhpBNLLVqwgVu2pHZJkQwaxGiKCA",
  "key13": "HZspvcWPEvfgDGC4s6qKRm4J1H9hz7S5sWsg4mfGwWvLnQyFnm4XTqPuurZowEdyoEiKptC7HBZfhGAuXFMSiT4",
  "key14": "CtDPCGcUeFJ4VVKNMm45SgtATfo2oSe5dfBiKb6gqADrMwpV5v8D7qM7tsfA3xbib28fKNUxKP5oQSapX5AMRrv",
  "key15": "4n6WC5fhR3P6FzNAdjrNvVNTQNPNk4o8NUWj9vcXj652qbeBfEkk7XUENaoVgtZQD5G7eVGSkkBHuh25bAnYhG2z",
  "key16": "3ijnnC4mhtvjpBwC2Na9nbos6kCwutBgrjrSsR9hXNFEii6qZAno5y6gvTptBzFCvRpKbdsvbxDStNxH8MgE3znE",
  "key17": "4i5NagufzM7ZM5dFsjyX8bT8bT7KRMbEstCd9jkn11xJZ2dutTQewtJu76nkbfT4a8ZJ8aHPdzZTfhThUuHTrvc8",
  "key18": "3QD83a11WsCVuW3vj9GVAA11LPP6AngnLcg31yxNDNPsPsGgB35DZBAYngkFH5xTqKSwLnfzPX4oN14hvJcCdrEH",
  "key19": "58SBbS1XiKBSLz24GFNhdUFLDEp5tXc4R9mV29pvb5NMwPpJR5PfPFxB34V4LjkPPN9jBiSkhG2QLpaeBxfhxeG8",
  "key20": "3Enc2WoTx8X9fm35J1eL5Z6HLi4PuhJbhcWuoqHGnNyDQdGaE5Q5RDqYRQQah9UoL88M3xzTMpT9LJMFJp2BPcqM",
  "key21": "5xB7FYXjXUvLBk6ZSmy1QZntwKRKWYQeurm3xpZ2qDXxfxwXqfz2haNo25p2xEj7zcj8ofKhpkryppbCDCSKSZjV",
  "key22": "2bhMy7LBpDUjrtSB1JAkyXg9jLmvJVuJNZw93qpjzGDFUPBTnMhwd6gXUMDoSMnBWeiNjzDqpxZb94jpBNFmVPM5",
  "key23": "2ibSfnL2qxAXWjZVfg7tywQ8kyN9sbxPy1DTxSuQ5cVf5in92oRHmUu8srpfGxx49dQS5MoNbvC8zZKYmk53NPxi",
  "key24": "fiQw67e2GmrSYCzyqw4dtKwJ8Z4wt6N4nbQceTLrZuRw23koLxwg2oxp9dUo9hGYsSfhKcEPQ5JgG1TscqUWcAB",
  "key25": "499L7vxKXW2N25ow5jYGDyGoXbgpVKobzmBGxpVUm8UjJbTQuZqMa2rLKQvZHXFW7T6cud9xvVi7SNidGcGPsEDe",
  "key26": "3ScpXULzzDW1DtKV7N2JWfhVUHZSWJNzrarBSBACajJiQJfynBFyKKypWsuuxS5qx2pADmLes5jeBAazMQtzXdmb",
  "key27": "4AgDoBY2E9kBFBxLPs5mzBpm67VCSDYFWvk5Ekg2PFtFSrLyxs13CoQJP3DU5cCHcYENZqr6H4uPrDxf95B498Wr",
  "key28": "32Sqeka87dZuAXZdcDipDyFotfM5TjPt2CFR8Zxg7uqvjD1TkeAGNFRcjmVs8BVJb88cTRC4RsuAEwDYQeCJ3aDk",
  "key29": "2LgMj7HqNM1r2raszmXp8D6dGiq19rBXdYmF1Vs2RncrzYfmZxVyXyCMWcM9GWqwVAXFdFGXKv7hwDgnTwpnUutY",
  "key30": "5ND9bqYRNnteFiWPzDk3MFG1nWoEeL3j4GCNTXWvVwjEPFMSFJDhYrR1bHjnpt9bMWjTi4fRLrM3MujrFDrzsL6q",
  "key31": "3NSroantgmBxZEcKuWJQTST2dWz5xsRCXd1AzoyGKyNjzDA1ZGaZ1fG9c3XGJBDwLVgYfXjd6VFxKJvPTk1WabW1",
  "key32": "5mfWXYRQ2ZpcHGsqDAqVP3N9nQzuwLfWeWVaEzWtC31Ht2WtmPboASfD5ToDJ4DbCTRS92Y2DJcjb8CZ4nSFgRvz"
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
