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
    "4P91rZF3qjxr3qqHUQZdyLFg9Rn1oLSUdfipeuJrbsZF49ooW4Gvp7yV9Lihqwsm7wKsztJ5rXWNf8Hd8T8BHT6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNZaQdhoVHLxfdwSuVGVDRfACT3V446nfFKg7dmYSnWZ8fcRmub66r9XX6YxstuvQ1CnjzB1Jo9NDyrwZM1M5gQ",
  "key1": "289dowEB7D7JjrdPb7zY8T5YJUvgDbMXSCenLp5YC6CLFKQ1ZBCAHXCJQHkUXGotDtLSpqnV1wfdju5ZPrZGqaRB",
  "key2": "1oBghhom2GNKA9gj2XTnRVcAJw8p1vTMfjqef6efTVBVdvcgXzUHPfsXwXoSyK5WCng7uTL1CZHkUaBK6Bb6Ydp",
  "key3": "585Axq7kqiPpT8duUsDREWLtJ6Q9f1Y4cEwNiYHH1XYvXqjgzVyR666weoE3P7fcGozQXL6REoj47RTTZ2q2YUgM",
  "key4": "5vBWuySUqwVf2rcYXBZB2z1759wmfrURYkTQTy6rYfcr69MrK6P51aqwJjmnej4jFpMtJyLGTeq5G8AwSKy69wAC",
  "key5": "4Hr5jGzFXw4YZppPL1tS2K6sb3zioJSqjx1kKbPodYcF5dghmRsdHtLv3viVSa8h9u943CghPXfRuye7p5d6UgjE",
  "key6": "4FuJyYCZ1ALPaH98r77nmhxAUqeBZ9f3FtLW6S5hzDp3TDNVHVgNK89S64z8qhhanusDcaYUh2mrQ2pvTeM8Y3V6",
  "key7": "3UZAKggWbVHsYodGzvWNxbTxs4FQCLnDMLEyo6bnWr2Vjg8ZXVdxuf2yTvdVtX2QNfjfAp18XVunZqd44fiPaEhp",
  "key8": "2Fb7L5u8WGMcL3Ac3gMxW5qcwycLR5dfWSqxcr1jhNusdFvnZd5aZbT95p88RJ62xexaZgJKhFuxyJkA4Hbthn5n",
  "key9": "2ETwCbWrcDV59E64RbEaYdPFgq6R1VajRVgBXrY1r4ABQtPyqg22puexgfoUFm2gope5xuDYybTf2EZirdZCqnGu",
  "key10": "2gevJtpHm2p19xFt1tXSAcurwoDfs97KcwozBpUbvE795xUr32H2YKgSNJzvZjEzN5qXmrAfAxpoku5fR1iMJoy9",
  "key11": "4KB71fb1ucyh1M7PT3dkrT1MszgcupdL565CSth2JXrHgY7YT6QQsGEuJps4eg3BjUsX96svGM65m1TTnLwmZZsK",
  "key12": "3m5vbGo16z31U2C2xtCPpecVtFrabadMzWxBRyGQBimHPiSK7ctJ2yqq6MQgqrS3hoKFZGPFfEdUyx6u8w8htKLn",
  "key13": "VQbBRBhCizo7kBfG4gY1f7o29sUAVDvhWgFhvAbdtgVFwu8Hb9wTCDsQ9o6Mu357oi4MC3uUjjbzxyEc7DwG1Rx",
  "key14": "5e6LeWnXTvc1LhzL22XWnYVKrQErvMGSBX9iPKmAx8zCMwtz1yau1ac8YmeyKTqUerVS5nQgk6mVoJ9At6yUBWG1",
  "key15": "3E51rkGapCfFtHtA7VDhLmnD8VxyW8soss8B6kJ51pbG4PeUrMS66xW921MDRcK1otiyz12r2orBzYSirudhSwzj",
  "key16": "qyQH7J7CdC9vuYjLp9yJMFVDBTH1PduUBdPdYreQuNmTbcwvEsCuvJNcnEPaVrZHD21VpsnzBUC3K28kfPRUxgA",
  "key17": "2uJT8ja2H6UubpjLKyppVeXyVAnnRFQt1NgYsxQSbosNsBJcBidvBi5SwTnp2EBLaVu9dG2FnBmYK9vmKwFpBGD1",
  "key18": "4cktqYnMTMMB31DxvYNgvEs2Vmbb1mcgTuJJiBzZecnazSG1W6mnsD7DDxWbhioYdsHGyu1KRiS2q5fibWS37LYd",
  "key19": "61Sk2JfRojSCscGknsXiAmFNAjUrEGFN3K3diDV6LmUrt2wntzFgSZVVGU5aVAs5cKe8TEuCnWsUEDKYhPqZgLFm",
  "key20": "5jwsFRMMrAEz1Fyvmm8n5f1mfccs5k9R3JAr2845bccE679DusjQqZFn4NdiuXGfzz2v1C2Rj5PNsuhQu7SzUqAP",
  "key21": "57MNfgqmSU9qtysbxbcwGVJHP8E6eY39Dk8LncyhCJqHnZzCGJreAJDwyXjYg7uTKfiAka2xj95Wt32pGV2zU5Z",
  "key22": "38dEZF13PQX88s7XEC7pFReS3uTujq8nQwq8pDoWua9rRkkbirtmfRG1XvAQcKzMGN9uYxYc91xgctWkPKHRPcPN",
  "key23": "DgmhTSyBfBPhRQVbivSUdHRRgLgQFWJZUdKKovYhpzksu5RchBoc6vi3bLjM4n3LkrcZTec2zpzmLbrChieLCE4",
  "key24": "GVg91BotNraCDcpjaGrZpTdmAYSa1bWtSWMA1SYHg5DV5Ps4jNnWdW837SG3rjuECbaW79WYFQfh4A4fn75QZTi",
  "key25": "4uno137RpJX5NC1X5riNrCpMBHtrTCDricpgtYWVD5MCHGyjLoepXjuCB1PBHybRrhPrLhGEeF1zMDo4us2EBJaf",
  "key26": "4Vsm8vRYs1qzVd1vQkvbKyQXBWPJfRSriZDWJEMXGU6kD1VmxHcZkkxUXYtcexATb173fZ5S63fsohR2JTby9ahe",
  "key27": "3sgw9Mf6MjirEywKLcveaM5s6hhcWyyjbiV7ZVEWquEnPGZCmotS7DEVYtN1D5a2J3f2EziLTuLdzxbCKCZpjRdV"
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
