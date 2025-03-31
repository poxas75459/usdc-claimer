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
    "47kk74ADWutxpttNN7nMkvy5RRu3vqsSqZR1kqeBxNJKi3cHmVrFxoUwCEfrszpthQkc2Kn4RBxuRjS9Vzixi2fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbV2turuKwwAk4NM373CSu7aLSjeZ45moWsj2Prqr8YDD8u4uMFN1tV5wNqmmjAgJHWrc7DJz1aNgDhoRMjVnuE",
  "key1": "32ruwC1PYWSkVYtdT6PryiX2Y27cXZpuys1SzSAVv5TECUiqQp7ApjCWL4ruYUGnBE62h6ex7MEPEEDDgaz3yWeD",
  "key2": "qoEqBWgubfGEcxHQPrc7JQBfA5i9Z2Ndc11tTAiw26cy23Hrp2hNqoRKQASyoTAjabexVRSuUhrGbERKJfcV2xY",
  "key3": "4pAZZi5yvf3VAajUjr1eNFC13yxKSBfh8ppzzJyMowvVL9dcEVzER8RKvTXKu2yBYfm4J3VirjWgM7ETsQLL9J9g",
  "key4": "4iB7JjsEWk28MuVxpL2eL39uTPUcm5BEQpuXe27H9a6a4wc4pZv9uFnk41mU9QcnEie2PceG92cU485edXQp8rsr",
  "key5": "k89fYRoUj6cGR3ZdJkMrTtrZfF1sYMRHNVD6Fv6eWkHBXSERdAqWRXwtN6WDp8fnPpP26gJm1eLAmRzAzDBYetE",
  "key6": "2c78BM2y7ocE5chEtHDxdFxP4VaCTLvity5auXr97zFnRf27HXqVaQTQ2AYvfCKsqsCBQkr2QVRTj3K3azk3Tv4j",
  "key7": "5qrqcFZMFo4TcfjG9kenSC7Hh3Cm5iQNdxvG94EhrtSVDTzNuTJAcfyijLPKzsLWrJV4S7Md1p8Lp5Q6c4yT9MTZ",
  "key8": "5nxdB6jNvNfAXWXwC6fBw8fuytPkTTh6w9aUp1EUWuVZW8BGzZ6iQ6Va6JWUuhHxgFfNmq23kdzAUcZtfy75GAah",
  "key9": "5zbcuJjUUjzU745WnLmpjAjhsyyXA7dLTp8WDhtSsdMXLJauAqFtAutjRoU6h7jBaj6xuSeQRdgPyAaimw9Nknuy",
  "key10": "CCFBkA64xGrnv3ub8x368Q1X5UA8PZpVjWNBtAASPvHY9axVoxhYLsopSCJQfhfMnZ5XqQVJCxpZiuRMpiQFfbp",
  "key11": "3LwbtVvKUVCPbZDUBtNoixr4QViA1UXMcENzNwdL5enFeA1B1haocuqRbg7M9NjLX3Q3nGBQvTA49KimGr9AqT7D",
  "key12": "2u2Fgz882XQePmCZK7GuiXeRYJxD8kqezmvLxjdsAjorTczwwiLrdnB2QRiTbSENLGSgYYHZrRKY71EdXh1YU5mv",
  "key13": "2woV4p3BgaFqiZunwqtxqr4BzNxGqCLfTHFU9kKDSqV1DHkmzY34c5wMEjzNLUyqJsHQvDZwrtdM8pB3Fn7GwEgi",
  "key14": "4HgaPrtDMWb6Hfrzk1utp1DHNkbrkXJamEA9z6dhzudyZihpUW8JwyM9WpiLt1Z4hhicV5mqMwaDFyxbb9aPg6ZK",
  "key15": "5hk4NJHRSHFsKhnSA53KHW5srDg9XYgV3oGkUgpapsM1Ybtbf9o27wcgyxqEN67JWGFGRXqCSaiXtfGUu9rJ2tLV",
  "key16": "4cNhGM9MxE9xp91VnQJQKDFq9arq4cbmjU2iCKA2Mn32Bb5DwdZMspTnF17Ve96CrRCkTiHJkixkkfQg6yp5LaGA",
  "key17": "3Uk6VtePD218QyNCnPmhfUnQAMzkM7Le22PHrWykNXxNs7tUfqDxMwAEDQjxysCQmfzKxT4XK5XK5iqgFW39qQmr",
  "key18": "3DmBAdvp5unMXhvUjpT9PTQXpN2kLQN7VK7dokRB2un6hsfm2xfVr7BxW8ksVzeHWui4aWY9VwJSf9cnww5GR1py",
  "key19": "5Dx9NDxtqZ5v59C48NmpRzFwwbotjYVDNJgh6KYTLSaNZN9KxyJR1yGEB5Ea2HoxZsVk6yhLaLaKMmyQyu2VekqA",
  "key20": "cSxMqVAaomo4yRcZjQYc8VYTo7wNc2KeVF1cdapJxCxuL1TsdLk8Vqu7n28UfgSU8TsGb5tDHEyFseU2BQtvPow",
  "key21": "4YuNLgQGFcjQPrXReJnNFsFKgQpuq3DZhi6AXGh2rHL2N7WeHSJezXu4Ms7iTNREaHjNzPfCKz8bUUyrwR9TBwVZ",
  "key22": "2Vn7aY64n9qeC7eSipchE7TSpzEAKJTjtfFSUh1GpZZXbtpzTbKhk84SQgdMQjdRGKG3RCTYbauSn1dmA5wt3WMm",
  "key23": "iVfRfPUDs6jMnpdvrrhbKAXHD6oTaswQCxsu5Znr488hh3M2k4zokxx9DCYLnGQGPGTtzo9ujAwss2XswpcQNJC",
  "key24": "22wVLBZqwG23ezrNPzgw3dhU1oyzaw8KWzcYLcHQtgHHaQCiqPR6G5Mu6xbjq8XG5if4Pzi6jy3er7x29WwYubSV",
  "key25": "38qaKTk891P3PSaGYPNYj2C3bRmHu8DSDcqKbXcVewkXECARXCavpEcy9SKSwWSTMP8srhomt4LKu7K26aed41f5",
  "key26": "2KZy7Q3nJCSt5eCuNmwWovmGmerb3vtCwH3JbDVSEqKzTLE6rJ9Vg31CjsUP8E1owKFkHvmaZEmJc94jvNCFnJz2",
  "key27": "5jynPG31LdxdSLe3vwn8obphTgbsk8YCR9RsjiTBxDLwNdZjKxhtMbt99EuqLWyAzjXpTCCzs3jJAjUaoT4pS6UV",
  "key28": "5rqG65vhjAEFhNSWfEmWhxpZ9qYd3fAoiCB4KxCp8dtZehtJKpi7ChJhuUzq2f6SBcRMdXhh5xxJa4HZfNcWeRcG",
  "key29": "257ry3kgspjBnGXASSD1CxEio9RDNtGNiomqHfVd86Skn1zwwgbNqwkorAQmqcZkbBJtirerx6r9cSyrEdjyKp1v",
  "key30": "3Vx2YL2PuyxzKTkc3mZgDgjbPiqijZmNiP4wrJE8gAxZBLSosSzmkn3La2guH7HCNCHf2C84AoTh2LwqV2XXMn11",
  "key31": "3utMvB2NRxnsy2K1pSnCWvTxdkYd8wwjwX651B8XnxbosKpyuNyDA5w7sCiLjL7RaQ9PtvVQknK2gt9J4fsTB12V",
  "key32": "44ac2pc4MkHWhVzBPm2h6aqNPBGjAMWV4Uzz4EQNbUsQzTRgV3TCeSnHyiPCsT2hxQ7USMBJcQk21AteH8eSR36Q",
  "key33": "jBRFVk4qxUGgbmXybCPiALX8Aswdx9hBFzrxcdBtdTut4WZygqt4EKLNsJEjR24pGx2UMYyM8Z9SGFravVDQLCH",
  "key34": "3EG14sEgWjFBHFti2zLT9cdctaxErwm4nsoGfgdmHsHTBaPb9mKgbB3UgE9NaXoQj3BR6Qsz2SM3Z4UeppJiD3C3",
  "key35": "63LG2nYYvViQvgVoqgyPD57Y2d3rHMFKSek1TurjEdWvb6kAJVvSAKDc5sPtUUdKdVHXVNc1ukxLrNs7trJza6j4",
  "key36": "iMfCQdsGG9HqgJhZ1D7jzL6XCyoVWLq5PkNzAj8jgeiroMrxYzBRLx81vYLwNsWffk1sudNtRyFMWXV3dqQfNby",
  "key37": "2WPWFkXL4fecfjyLCTQ8bXVFEbF3poWuaRgectX1LrtbD2etJHmF7xpwWNUvm8FqCBLm1CjsXsuZRwp3gs9r4UKc",
  "key38": "575y1WsXWWbfaVo4M4Y2oEWMgznAF1WfGkCC2PajjqtGu5E2ciF4BiLyTtAq6xM6BFdkC2gbiGxy3xTtNM56DrA",
  "key39": "5X4ZQPbMWAkurtw3aTdZT25GGFHbUmiQeMTMUyoqU6ELA1or1BLkexsu1EQYGQxi9LZEZ5JXUahQTq7enzAs2WGv",
  "key40": "2pzxLTKGJEts5heJXBtBgqyqkwF3HKsBCqDqX3tXGUqheo8GRYrcREsFJqm6LKqgWZ8WZFpaBf3DpFyU2TQ1h65G"
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
