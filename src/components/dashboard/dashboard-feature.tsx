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
    "3R3cxYmY5FAzzMjkEhZRQCcafzpDnvwDXKBZyim1SRbnZBGinBEQRRBX3qyswnitxJmxwwurVgJDfGrPo5cMoUmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFgu8dfZC6sgNpBXWku62BL2XkPKAgWZz66K1wjFkGcrUtXy74FHZ7xHwFYxf8tmEterraF9WRZ3uzf26gmsAbC",
  "key1": "3uqcTACZCT8YfQqW77Az4YVdPDkeXRxMNTw8w4sXSDcx514FXtpaQdbjxJsHreTE6FBQZpoe2vKD8ESR1VmryuwD",
  "key2": "GKno3hsB6H8AEHVV7s7SBsT1xNNWPUgzhqqfPayw6qUQMApLWz54kEXLRTcW39gVu1nEpX1tpfZCzDLmispUGgx",
  "key3": "3HWeWenykKTXiDbL4cjXAetZBYs2Gg7oqC23zFGyd44Q5djjbreXENURSUhMH6ws3Adf8j2nz4d7UXbA8RaTNRy7",
  "key4": "22X41n4NfPhpaZsz3wg1p5jw6XcazRR13evs8k1QCcRuQH6MRTHmiKtF6pAHCRsa8vJPEDdUxqQpWi4Cq4wbpb8W",
  "key5": "3BRK5LhC4NaTCL83A7R5o3ppy4fP2HVUGVmmjpqqZv5bQrbK8tBHfF97EW78puxuVEabmN5GVjD7bV1V7A6YvpHP",
  "key6": "3etMPmoBi9shxiKT9v73itNb7nZh2U9gwYg6ZKBYT6DQY9dE4jP9JFx6h6R2KkfkZqhGh6T6LBzcNLpDsL2TFQaX",
  "key7": "3ocNmJegxQomVdXwa88sszmth94mkVbHtCA1FtkU85eKKZUdjebCm4HVVdNFPxHD3mzvLiDT3f2n8XhSjv2eSx8n",
  "key8": "5812mZ46BxRDybS4rwmnrUJmmGamTQUeEzKr6WHHdmAmVV9jvNkb49dCEdZHNR7VtXyY6zebWJpGeDNFFkJ7Pqhv",
  "key9": "3Kg7JeyicBJ5MPm9Vqn3XtFQguEzzERvkb1i1X4sR4Gz7z6WXdJyHE5GHm3meA1D1T3GK6NHP2JUeRs4Sy5Uijb1",
  "key10": "3XQToXMaTeajiS7ps3bgRPG4bvmnJSgVh2v658y3iF6Pu5DWPU6YFsgUfqQSTqNBvE8QUNy8VsF61CHDBHgCxbcC",
  "key11": "3Koef2BtkGn4WG92wPYGfzDgUenbfEGr82CuBxVzetvJr29S2Da3hapP7998nJSQTvjb523LAZdM4GrzHUgW8Jw",
  "key12": "2RQgaVCceUZffnQZSSKGpfaC4Mu6yPkyzZnxq4NHDVxN9ajBH1ydmJUv85nomY8VZj5iNEyGeAgEo689FKk9NvNB",
  "key13": "4H9Mo5KGa7fDAFA8F4zDi48h7J3fqFFqrsvfF92Fv3YKHPACtvtSVEqeW5jEbLcyr36RkHQUw6JkxcWRP7NXy9p3",
  "key14": "61BeXXj4692FBj3WBDD3sTmzd78Z74fu2pYhGdtL3iziWixroaBYZyBNUJ6et3zhoVhVFMrZfARW3iZTG8LktHDP",
  "key15": "49MShg2cggSyTSrFXJzMymnSw47SaG5ZAXK66oyzNkvYNiVFwu1PkP3YeBk2c4ZGhjkPXqALCUDPsfoHH88sYFYV",
  "key16": "4Tj25iiFwVRFcr59KDsmtoycDQh3Tyr9vK7LjoyPJ4J8N8QFLnQ6peArDadXgrPXBtmuc8kseyMaGzjSqBWvpAuM",
  "key17": "2AZHRFEG2Y35qT7fh6BRV7pHMhdupidM4Tf6yQ1Ca4xzRzP8Av18EqpCbiRSSQKwbPLgEM824QK2cPCsW2wsrieK",
  "key18": "2pwDoiSxUsMTzVE2rN5SofJKxreDCaFPu6oLxTH6pMrLb4j7UgEpvJcBTaNgveQpymZeP39mdpDywcLKFvAuXiyq",
  "key19": "5b3C8QPo4oWi9A9YcfM4i5PdM8VEHh1Cs2bNDVePipr5EPTL8ZppFXzYY1zQaf8o9oT1gN7x32etFFvVavaRXiTc",
  "key20": "4DXbZn4eZ5vKXoMRqdgQEri37yw2jvoMsTsHhQM6TBFkRaxXmvfKQKo6EqzTXxmYSKyJveyJJe7edn46gBkfVtVn",
  "key21": "2pMz2bZB8MuZ4JabW3k5ed3aJ7srkVCrZ31PovvmrSUBM2hivpzbvtA3XdamVnU9TkQofAP1WiuUR5UthhkZtUPF",
  "key22": "4mDqe4ewgw2tGCvACgUKXTNxAUfuJuyQ9ihfMbXcZCKYCEHYuhVNjKKXJsoszb7iLN6Xq9TqdAtxxDX3t5VyYKtU",
  "key23": "34w9jH9ShJvXAM2X7ZbQZFSnTNNHPsT7xKm7W8ePodnvHSbFFhigXtophgnJzEiXUFtUmV1NaDmwz1auasNvMSdk",
  "key24": "4xRLRTyKs9VCveis6dFDLwjZbgLBEtGvU2EdzmdbdjuUdNzcLJFYqCZVDUydPiFveXsMpnVfDgtsPuQpvnXYKFDX",
  "key25": "4cB54edER8ZveDXwHs7VAyR3pn9uPXzi7m9B6kjBDKgubEyJ35r6AZVfo91HA4vkU1pk57tAHrwzZcZYcbGFfAug",
  "key26": "qbFYtCrc4GGoQChDAcyHNswip9eTFjUA9HrT3EHVzho63bFTit1a3UFqiGwthFKCxU5fcdkHDNZHtT7jtsAwCcP",
  "key27": "AZs37tcvLmR1kTETesXvJC3scks7GFcKeAkr8pChKV7V3x286rRPzeEoGqbBq6MVF2C3Vwfybwmm15e1NvrHgZU",
  "key28": "EsrSfADJTGokPs8qboKBKQuPyL1GCyNsmJAFNHnxqdT4pXgvXEfrs9FBgvC472Hcr9UBoMpFrAWRGLQNe2VFEU9",
  "key29": "4mt14x77d4rCvEeN9xRbZAoAEt5nUN8zyvoxMjfgf1e9z8RhJ1hvJgnNGMzFTH1ZadCDw4ReqRBn9mgsAvQBzmCt"
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
