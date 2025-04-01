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
    "5CpreZ8pPSnH91keiPbD5K2RsGWEVRZr4KESDYUAaUp6XirzAzxNnpRYrAVpnBV17HdqhANNCTdSakz2P9sGvQon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHAn6hhnBGYA9Z5yjTBYxFTA2KURtAdo9php65QFRA5HYXhVSXCYG7zbr7rDup8Hr4j8r5g48wtT4UaibRGQ43c",
  "key1": "383Uv54osX4yQt79gCYTzAEw4nA7LNSCcQJXfhkr5pbfV37WYCyHvgbEzmNxEpjhvmTWQcrMLSXD6t4tzznrBLbp",
  "key2": "5cZ4bfK2BjyekubEshajExazi4shZX23iETmAxHjxGs7AYrRhvw34e9u9NoHEuw59pGYMLVXsR4HzAPQxVCSPX9j",
  "key3": "5niFCJebG76f6WtsP7xgpuPshs1mLHbv4UEiWdAvPEPJWEnhgVD9Vqd6MfC29dkkqrK8eSvkHuMRGWnGHVaLd21d",
  "key4": "63Aep7JEobFd1AwaBdSEWADrkz3qEty9H9pmVU6o5ACsz9crPjtEqdHgEyEUDJjU6MncEwgDJGN99eungYRVvvPT",
  "key5": "6156BqTyVQ3eC5JXD4bMh6jv2GiC6uH36X24jLyQR3ncuMxnsMmuW89MvKhkLBnnDTiKyqVq5E3vCm8Q9D9VX4Ed",
  "key6": "2tQaPCNvSG9hFwdLLweVPyp7a422bXvruEjM3cYZEg4jE1fuhkLViLE9fofM8JAtATVEF2BB8MeCiGftVuAZhdae",
  "key7": "nXH7QsxJt6SP8ge7FjwkkGBHFVDA9PHWorW42EAxfBtMtG9GuEgyJT1TazQ1BUSZ3og492MmHF3RmxTuRNtqgGq",
  "key8": "2NSBjBj55hBiTbdBSW1GsJScXuNDR7k15jUg6HRYNcoaTNqUi3ymLBY7mbmzhdFuP7D1QHsRGicUtQmQ8id2zuib",
  "key9": "3ZGKS6jiFvnRBM6rLvjqoU9R1kBYu1q2xbLsp8Pv5A1S7X5UC4qc35624BgiSRQ9vMGSHETyGjjdntLmSFmk4id9",
  "key10": "61ZF1cuKywCw3J5HLkb8Z68idRbc33JC2Qxn3AgH2NVGCxbWYK7qv1cH8mhRqtCYapKZYijUnoTYfzCnsi22Fas6",
  "key11": "sPJinsJQyzp8wvDekdRkdcgeFPi4TYbhWExz7ayH5BkZ28rLvzne3BbwwDw9sTxRs5aUoHWkBxTDfD8HNbEVhjH",
  "key12": "4SDfPFyw791UFNXAXstSWx3i7MKbJyCXaWn4EMqEUHJeHWU2AFJNrgc5yt97JLYJF2ohwJLDiti2aqfxwnUBn4d6",
  "key13": "4SLjkhbVmgozvdoKKZmEGcsvWMpev7z1DySty9vMNECai8oGXNZztxiqCwWRJ4rrNaxzMVWLwfu5BDonjarT8Tta",
  "key14": "27Zn2cdY1gdhmL8NRRGTjrRQSm7wxjjA4bgGD13kxouWHUUGz3E6iSi8ZuAyfx4drz4zp3cKW4cyv4VcWhn3dY3m",
  "key15": "3UoEGAKF4vck7MxQEwTFDeT4wKgS1RmgxkGm2XT9GCBnBppq9AztfgdTdsY2LcmysWMMsYUggMtQJcFU8r3zA8Bs",
  "key16": "5et6PMwBUHtV338Ez1LUCi9azXbGs1Wub6T2CnYVu8vbUKhT371ukRGRDQ2XVFYgidqdvJUGAHCgvEd4SThurc4Z",
  "key17": "2SKYQAZok7wCyN7Xs3YxCtXa5B6kjZvBvGpFtkDpPUkmUiC61sfYyYSr2Fo8KpwDHtRkcvwqmwYXR4tYfJP3QRmZ",
  "key18": "4MqARaVfXvZ1g7Ewx6cveefDyAEwf3CWzJ11PcfMdijEXDwod5Bzqk1sm5nuQQPYdn3EUjVPrLd4rqr2fwfbBV7W",
  "key19": "3iQ4wtSQNLU5r9Efkdg4GKy2t1rawr2fmAywY6yPjHg4czZ2H7gnLDcgJd2rPbZjSVcTGmyi1neTxkrX3h9cS1be",
  "key20": "5qCZWGYV5NSoku3qAuUnvx9T4fMNyDQZAgeJ4G9kKDMnNAd9C5PkwowgjKV6g3Kzxev4XyeioqRXP4LfkCXrXkcj",
  "key21": "3XeaPyUjPUQGjXAZsxJ572krTRyD7MH85fBsFyvjws6GC2TH1aWNWQ1d5B6z2N7G6dDEBLiG2stzfwjN3nQ1PQKB",
  "key22": "47CiZxBMpoVqSPvrrUHpQqK1XPo6wVprgEXV7KcdHerV5jFV6FCt99A2mRoFUUy44Y2xWpQ12qTYt7tqoxfh9GYU",
  "key23": "4jcVjkACpd73ge7ygpmHmWCBLSg1kcWcMmNWSizGbqztvX1hVAVREeJxp68SY7byheEhXSH8RLrDBke3y9h6NUWB",
  "key24": "5Spzt6d5eE4s5wdPLL1bg9vEhpAj7PBHrqt1iTL8iM7sFiYgVGYprC2w3AzrCFFvT3Emu4FuFzp2264jS2TpW6SH",
  "key25": "5V1gCJPz3DZru8NxgwWP7FyRHLEVhg5pkUT3eie3wzA3z8tHU26CDvStc2i67gfutV6SeoNz3pBUXPN6f4kb74Ug",
  "key26": "3sTeY7dXDK8xRJAUiFePXvBFKStNi2d5K2WJXFfs3Hi1iFjMk1M5QwU6qqWiNUZdaQYcZJG1UCZU4sy2nNfwDwmf",
  "key27": "4Qn8WFUpfzLSSfEDVgcpVAjAxTKV3tVeGbP63gEocvkRfhp3sWVBVf6rmcfAdzuaYMGouTFCU4zMb6YK92cDkwrH"
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
