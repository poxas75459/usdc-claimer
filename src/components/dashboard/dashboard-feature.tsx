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
    "2RfZRvQUxqFPeLXotcgaT3Hx6muYyqBMpXKHiBd6W4jqCkxGChGBgpMTccQS3LwZ9qpCfaDkfCjEfYSwVdASbPB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Fe2yi72prpUTgpFAqMcgvzTf6jH4K5nd7FxokHTxFDJs9c1u7C9rmmEBXpNQ2KCjy97VNAMk89mhNNXfWNfJsd",
  "key1": "61HJEPC5uiGdHD8ctVsFejbEV9eACEJjv7Jq6PeGyBdV9U1RnPetC6jQwdrjC9okukPENPUEsdprYxQTVraFERTM",
  "key2": "2xcNQiHoaMtcv9fGAfE7AmYtPwMN8aQktKc8ezm3AQxAByoi4GeokwfgZDet5G3gvj4xLNb3zHJU2mibQ3NESg2u",
  "key3": "4UNWUohb4aQpVYLRyvU6FCL4V2CyPrn87px13ysPmKye98atieVjeYG7BhNapVdJ5eVzqug5QZrk2KsdsVKxKG4d",
  "key4": "Dw3rHPjmuUHqELegfkSDB5i6GYW6AzKRAe6p3SpMxnTe14WUpxJ1mnJ37mDzMskjVgg7oC6xBwK9oFRQLPR2Vvr",
  "key5": "3FBe1FE2LHfWiTfK1s2hAbxjtNLa7kkjpugB4fYGbBmJadiebh6D7GGLrQtHoDnN5s596ebeWRAkjmNwHPPm1Vib",
  "key6": "5zAqG68RWpZEQKDXLuPPNzWHRazGyUfGsxcNhTgEdAbaJLGxVL51tWdvPvUdNq3JTj4nL3c6Zj9vug3UaoowxaUC",
  "key7": "3nBhJa1nvBTq3TDMrfCnQ4ATg6KPyvfXyN4eGjj1fUxwGs9WaW6LPuDb6LovWeCotpPcWMvpdKP8s9VdxrYT5sGR",
  "key8": "dL5JCoqUSWT8BunNxgkdBZHaPUqirZqPwgSoGexDVRaEVBdPVkLBAgNFGpTwypkUvnAr8snmh7z92Gw8eDDs7QR",
  "key9": "fouyrwoHtKxsuRETjzGSWXCSHtTnLh7yDuMVwZMggZxCaEMRgbJrgTJpvnqDz6WK9acasLLzn5CdsrHCrpND81F",
  "key10": "2nFfDwzUXCefqZYTa8X3GtQkm4HNq2bRifjCWJhdxg5bi4vHJSWNLRtKEzvT3uzj36vDxuisSWUc76wGKHKd9W93",
  "key11": "WsAkRbbjcYdNd46mk3fJ6zYW8wWrpzsbB6R86vczicW9qVuGLgafMK9UZHwwA77jegHyf6SKCbpxx1BdsEUw5bp",
  "key12": "iCNwArPA4oydUyBBLSHJppBemKU5HMpQ9xcEDn7AYBqL1p6XxswwgE2hwyvTStH9mVceJnGTFhapo3FChJRvJTb",
  "key13": "4HpTpac2uSQd8Yk7kFokt4uUjAZjkHA25ReMjEGmCd9cx5EFMKgfbUhtavti8sNyYAws8Lvkk4nU7i643TTCjgjU",
  "key14": "5DC1V7d3EiRPBXpbYAQVcQac2TtAXHzxwtwBcbsrxzyRXV3j4d7oKsCE5RP799kiVvibc4QRmfwfEhXsMaA1B9bs",
  "key15": "2uC4in4jtD4H1wmfBiSrTjigVrZ3TY94dnpSfyZryVU1wKpUmGhFVYArbxSNGa5C62X4cEwnHRRvAKYKtBujbuPC",
  "key16": "2WtGZF5QtshjBQXaUKLnef2yrTZoHxeYnLCgF3sxgE1LWAbpLrL3yVVWAaGrhCLwXHST6DSfY5oyR5FMHHEhHgXK",
  "key17": "4XeBgHyNW5WGskZasxemNbRS9WwAfsT4gk77Y6Vr2rxQhECvQ8XtqNDeVeGnVTQ1q94w5qhtNCSsyMZfQTtKgT32",
  "key18": "FG14PWqicaH9KbPiL6wko6zeMSWe86wenEJFBN4Ssd5iBruXQLCoYh6FAs1mXJMHpHSBUEcACxj6WwckFVKhANA",
  "key19": "Dnzg4Cjrejcjcwzsc3fty37ouF9N8QYNwGRMv9WTZ2SVJ1GG27358zLLrqhZCeq3tj6LUQyqsmVqUQfZ53eYCie",
  "key20": "3YJGnL9ptXGPtP2J16WUJHQguFZcPhZgcX2AF6A9WuhbZZ4FqbDuLpS694z7SNSZTmPZuYDBvC8Y77AaYh8v9E1k",
  "key21": "35ybCPbBYesquCCkN41XqWxwrRM5FXZ9gWjqnjbbsuAjJMtCcXhruzG6iDK2WrQ3Eqg9NUKoFAegQ1z5vwehD82k",
  "key22": "NXGQ3yHUL4H3izXFdHSuw8AHqJnZWtP5iBSLqxEmfVf9GSTezywbaZBwJjkb2XUvMAnW8WZuBvFsrhAhFn6q6qo",
  "key23": "23NJWGkBQLfghpLTYa4oKpq2iaQ5eREjGC4QxXKctR1DyqEJPgYxzsHMjnVSNuhK3fmrupwV6BhdFQr1qeEmHeFq",
  "key24": "3z7GV14zpLS2wZ6DDiFRhCxx1gygav1gPxbA7qExpRemfM1NrUzhZwJ49Hi1cvVvMf5twpBQdDW74PQGuBNb6XgG",
  "key25": "h6HnhNNxxHvrhV4iZTVGTTkboK9hb9EN6Lu4Gw6Efy9D6gDpsWpHjoEnRN55mMGWnaBykqauWw2wdtunCNCi9gh",
  "key26": "wifCPAw3v3QpMxc5GpHVdwPrjn81XyCpvbe779QrVhZBggmGxgu6m4mGfFsZf7UsWtga1TXurNhz57Q8oxewpjj",
  "key27": "2Q2fQFbV6FeMWksDjAnzTVexzW9U5PWYbXWLUDp7EZZ9jAWCmdmKvJXejLfk9RqT7pYSjCuNYymY1WXY5PZvmKNU",
  "key28": "2DbvxVbJKy2spyAmMoi5FwZitpCkdoAXiyFWtuKiFEyQic869mXJwtNZYPoohvQyAEigoCjZVifEKSa9qzft9eZt",
  "key29": "u8bstnki7Lrya3TQutKy1A3cJsg1ZBwXVGfRLEchRvkdzxZC2wq2MNn4cyE1zkYjVT3YWDci3wvrKCrnrBhtC7o",
  "key30": "2ZaKZFxkKTf6GXLiHqCh5dSmx5PL8mvaSEMDbGzLHsHBfY98ZBTzPGjSCrtJC6ZZz9haLHc1DkUa3ovaJERGH1M"
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
