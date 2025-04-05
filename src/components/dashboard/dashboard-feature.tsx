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
    "4tdEL92KNcY6ntwPUFpoEkxwd6SfLFELcJueZpAi8xPnTr3Ugu1KaHn9VfTUHwTx8x88WLzbf32qkck45u6JsdQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ujjjsBS2awyC8a7obaDWHASCoD6BdyjAngnew1qrRxgYWK9iaRCxRH5aHN8KrgF514JZ3v5F9aniahA4nkVastC",
  "key1": "5xB142cXZVzQaesLyg3EoJgHF8xk4vDm2qVkgogfQBoKfU61XrzNCz6fxGhYBXZxPA26W9drHgX34LP77aWWzJ94",
  "key2": "4udfvqGTJUrFG2q4dikbcbNDWZmu6MUsHTzGiNYyamnW4gcP1Mp6Dj1ccLUK9YWijHvk5kNutEppJ8fHZCtjCJuS",
  "key3": "5BACjFU1oyQTHXkDapv2HMHQ2K6UaVpkkSitPaBGTPc1iTReRvRqrFCmJdyiq43QE6x7iTMenVCbgpyz7k1x51AH",
  "key4": "3bwawJ9KokWLZkkg5sqWj2izASfgHG3WXiuwZMhHktDVoqvPsbZxjUN6QCeEkVVAyHVh8UseCFVsRRxFRfTPGNRD",
  "key5": "2yNQD2YBCMy2E1L8zmdKBmaUyWrB6zzBGAXos17GVp1aYbh7GbJXayz8DcuuajDSBASAPGirtJHq2FHLCH8xf7zp",
  "key6": "2ksixfNnwffDVTR31qenot6PS1tKFo2EhDFENs9cp97z14RXqmETPegQ8LMqUV91wwkB8k54a2bNHiW97Mwy7j5P",
  "key7": "2XqkpTa5VbRE4bC47Kpw7HWwtdvBvDx2fadBY8qbHVX9KYxis9Qm8TwhjM87HJqBvnaLtKDWstpZaF5aXs31d5mu",
  "key8": "2ewYMfyJVZKABnKUg8WUMbVrSYYEzyZN1q1fYs5LzMNzZArDcuGueH6D6EPLLwLc5WZDv36GowJkZpVMctcqN3xE",
  "key9": "2uwUJHZs5TDFrTpAcAy2iPDBjgYLphj8Ck6G7Ny2CfkEK9QY5MLEa4SfyivJ2xtum9qoPEuZRBJJVADAuxfTefmz",
  "key10": "61D2Uxp4Wn4R6EAkDHxH9o4gQagTG7L2qJw6BNS41qzPtztuHMzVSHS92whRhiTFq5xSowopmyPJjzdkh3JdRGma",
  "key11": "4hbFisPeVFSc3nMBeaxB5ZNMmjG73v7Xc3bmvXm4Hg9Pcks2tndn5Mih7ZKu3MLJc6QXae9YC1ztawE3GUThQ3eh",
  "key12": "5um1RkFhKgDKazLvLd5beZr3rZdiiUVwJT9AyGGVJhpUvpPhyQxHpYsPSiW21ahPJxp13dNbLvFQ1vh9w5hy1Dcm",
  "key13": "2RCwYzNKSobhtzYoLtBxATPLZ6RZMByzBBigdEbfy59g1dYeswo28Rsju7wtHxwZZaTeBo7xwMaGSKRpv1xZvy1q",
  "key14": "3LPqhpX49tit1Fu5AH65yNvS9W6ZPXgcT1r8acxJLkUBeX73aLwpyLSHKFhNPJfdf1kUwjPe8Lv4hqCqH2YwoGBt",
  "key15": "2VL6EUvj5eAGvseakCJcrkTe4ZS43JpmskqVREnzLT8DwhH4EVbZN8RjeUUpuaU5WFXJtT9ridm9xkXaHTBNG5sJ",
  "key16": "5kiTL96kqt8fVX1cobgEsqDjUnxRFHEs6cNjKyL8DGFmcH8rkDCEqN1B3cTPCR3EkCx2kc7DxH1NZFsVQqM4FQ3v",
  "key17": "4z4Dxh5nXhLgvfstxciYhPdaDzqL8v1jwEa9MnVWdM4YWFCoyfaJfbsWtdepVLm3em4oUvkM3GPgq7Rr7QMVWs9y",
  "key18": "5bRPjQxYfnqhafbupQSJFttdAFq84f95Loi4wv8VwWERSGM6nX8QjRrYuorLhmL3epF8Cd2T89jzWJxaLoaa7JtW",
  "key19": "aJeXyWBLJpwXTro7tttNKd3xnUco4CY6n4296bLcRU2vYguWAbpVpppqQd6AUxLchoW1f4vuA5yAigEM8fXLaqk",
  "key20": "RfmJpaRbKnZZo3fKBHZdEqj3WTPQdLsczWromWiG8hQSGw9kJoQeWAi7JcAiKXmzib3HP6odxJyXPHYUMaT9jcu",
  "key21": "58C574G65u9ncScmTxYg2M4a9DU3oHyfmhQzbSZ4u1pwbCJ1Hw2woowxqW4DwfAVN2kRKFYCmcGnshficXrLE6yZ",
  "key22": "sKQRojqA4FoStqb8xavVqGjPx6jcbBSX9zKfUrJJMZhw5y86AG3BPtDXtGkcn6mZSgG6UFbw5sGk15qVjynJayf",
  "key23": "5mPyXbGv1J9LaQvToQiDxmKuAw4SnQKz7NutFMqmcMN7nYbVmUobqJf78TA3Ze7Knbw4Z3bBNbfKSk3x3aFg26dc",
  "key24": "5QtgbUmd1otqz7WfhtSnurXCERwYpahtBHXNdEXCoRTmqxQiXM5R59GRZ6o44RvAjLNcoG1ijS9eaNkU1E4SmKRM",
  "key25": "5gMWmCNZgLQbLTguryMWq3zQxtSEbun8FRFqS5XxSnC7zjQ1Re7sdAVPMoV3fgQZDXrG4kEwK4D53fAUK7sujAHz",
  "key26": "pGaLvCBV2D5cKL3ZDNKnL4W8agVxBXvm7H3w8xmXB8Bj3iyDWx5HgrcdQ17j9kiFkTEeVeJyARWNvzA7XkGDAox",
  "key27": "4P8vKZ924GZV13bbf6SQzWWwexjG2id4dAEwdPy6NVSxnFk3p3y7GnHRZGTCh2iLABosVj7dgbT3N32cwhJUmoto",
  "key28": "2CYKtaqmCQzjb2PseQ4PiPqBug5igVsiCyiQmcXWvz7xn4Nxxq9B5a9ZN7mQXZye4FxckFfQj7hKWbvVvvVAGaxy",
  "key29": "2GQSrJ6RWUXTu2gKFy9MhWEvCNUXaCHNWth8Y6G6UpcdeJAb4ozV6TjTCSouDxtzo2kMNTZmELrLHkXAqWhgZ9ea",
  "key30": "FfC4qudNmnmshGMKnQFA3yf8rUfnXxGbVMQVWY1DJBCHLnHbYWnCoekEwj7AZXkrod2N94tAo3WcSpffd8ML88e",
  "key31": "5gBcafCiBXy7TAs32o145vE2vWTuwdQcikHdD88ordTzPcPDgXSf1jhKiemkfz4aBBWESrWCQCvMsBfXvC9dmvb5",
  "key32": "23z8WJ2P5H8tDkbpS5U4PwsT3uRcWfug1a2XCDXWbCe8MPTZAjyCnShVXNush6L64f7QYZ3owipKFjD1TiGyM7fF",
  "key33": "5AbpCnvnNrLE3Dgps4BEusFFe7g7iJt34s5SwS6e2x8SKnxCaHdUXNAW6tskfHn7tFdGToYznyc42RDgehh4FB1k",
  "key34": "48eu75wKsHfYsEn1FwAFB3cEorwmDxGpq6tANxycPwfVv55PTD6ERC9bYxAqfe9mxfzykq5bsoKovy7krz4pFkby",
  "key35": "u96uGicUV9WCxETATMyCy5HxZnocJTvUR9kiBnuqB5TWYfaez6hEba3R4JgWchfCJmjtZwxojecSRs9ksx84tkW",
  "key36": "3dkpDeJrMbK9ygnycvdK4Bkv22xdiL53Zyiwx9v7CqEUujxG9YDUAj5JyGMsotQyohWeoRNxiczBNgD3KW1FNUja",
  "key37": "2YycqjcWTN1QP1RMxkFPPMML5G8jPtS2QqbWkDUvCBQbxGs2cfcEc1N3sW57XBdS6qHoygQb2QuxHSHqCFWNeNDb",
  "key38": "2fGWNeEc8b4UudT6zyFhC1Xm7yhkojHCMNAvKK1tMdoUdrZQuiscsPiQVoJjLLzV4d3R1KDBgCeTRY1RHcKqW8xa",
  "key39": "4ewkQ6upa4mZUd9y8KtUdSqosU83baiDpoqUZoQ45GD4LX5sfCsTyNHypHmd8R4NeoqsnQwSVbP7pPvuvU1GAMc6",
  "key40": "2ekjnmCeEaMMXKF7pJP2PExAWsGrkagwogg9Zg6vbERLnoFj1dKcwugsa7sCC8MExiDkVvVSrAtzurtHjjFjrVPM",
  "key41": "2DJSpiShr6dXeRzJ3c5sqS833kiSuLGe9XygG9wF1HVba5s26XZzzS6EKaJ7Gt6w2oy1q85yjRXdrYZV9puBBz5r"
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
