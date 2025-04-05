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
    "MRosDF83gvUewRYiMeF3xPSDZoonk1eX2S8J81NRDnL5WhLn3CsCZrmkSC14H9R66XikUEGiSFCiZDfXK89vaXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWi8aBQ9GE8nPAoFFv5Lpn2m7QbHfLtLr2mTucavqKiEESX3RpGAPg1bFbNZhxB9GqjCB7Wopshhy3ALLrZ9LNm",
  "key1": "4HPGsErNAC3hNyy1FoTw1fyMqiRyHUWBY9D7rdRoskp7nrwpoTSf8winjuRS6xq8MFCUu81p9DyzVSyUm4Zdp6HL",
  "key2": "3iYwqjrHso76BYsNoFd42rFA8vzXKj2uNDBZ5GCiiq9pq3aBBCV38hft42m4GwoDTma891hHyARSvHn4kUc21KyM",
  "key3": "61jx2fpMd9DDe7JSNsWnupQMXLKA4R3rSL1N5e1YCw3iqDj4Gdr82dPkH6czjDTgn3K1W5JbfRhefYZnRfadykU6",
  "key4": "5YNCbm1ky715Rjv3MQ2UyiqSfwKA9QtT5muWH8bekddU81y43J9evgP9Vvrmkp1ujiKeXjT6n2UKuqZ7jy9nHgEo",
  "key5": "5yUPu5iaVsP3uXfBW6w4GFqjv486uLayyGSMBRCWgHKFNFRZ1qyJ26nLAWhinDxsUL2U3dhYU97GMfwvVxLy5r3H",
  "key6": "26aq5FmJR927zVDyZJTnEQL9GbsDqCqvdGKZeMfxFJP5FJcevetCLTkCUYtBWk2W7jeYS9oammKyVUmJgM8GWpfy",
  "key7": "iHZ339RoL4Pjpgg5maxh6Kc7pn8NvJ8nEMbyvEFLrzAk1RGS7vEAoypFVxSWXxLe1dUjREAeWM5B3vLwHmDP1uv",
  "key8": "63PQZqzyycmjTrYKn16QeCDgF5JkjYRn9TbS2EZFiYG9uvKRJsb8abASR7GYkHkMiKmi4S9yAHQZZ8g3qL3LXLCE",
  "key9": "DqYxs41oqfsgodMw8bBNXriu2gjNSquSCbVanTuiAdwo1KPtKoDHWkGUaMaa1tNZ3mEkMaGogvgJ7cAipTNLKR5",
  "key10": "XG8PhYf6Syc3xz4MT55pMjXsuac1H4WFeicxq7APzhwfp8q3BjTvCtFe8MQZ5z8rxw7p4ZagvZ8Zq45knNq2RFv",
  "key11": "47QC2TyBvrQ7Sq1X9wAfZaKDhrT1XCL1eLWkY6aZpCr2z1JdMFuRxKFaGQYGb6zwoiPeQZHbkKERM9X99AZUfhXs",
  "key12": "TCfyKm59LuuJYbKe24HKpALTMed5ufHWnFwG6xp4ewFUnQMUNExdScDgmA4PXVtMqHVDtA7Skajq94q19Nmzqiw",
  "key13": "5ebNymrkFq8HZQ6hY9nWz8M3uKAuy6KJTsV2axyhHRYWDEicExDH13ZYpt4QjEwyiB9dP3QYzxTL5rM8FKj3H7NC",
  "key14": "WKLGkfzYq95WX6PerMAbqHEnDFFjRE8MkcGMDn6SUBxzh22QVuNXF6jNpGXgJmhJFB8BeiUtDYNVvpPF32jain8",
  "key15": "5j2YVwN72yNBJrFEZ8dabcsRWtPw5dwm6SNskmr7zpeYpoyCy7WpEzpP9PjUCHiizaQ8akFTvKhTWipKuCYLKMzN",
  "key16": "AGPHYiinruDuWFs3x3YqmT4UsyHw5W5AGADFVybZnvKCcB4v3xmPKkdBtsG2wUTmUcJ9itQ8NoxcCKynqGRKAdM",
  "key17": "WVGmtEZQjkoKuxJnmsqjARGP8pPiGzxBKceAxFCBxyipj22TJTpFa2U67QZm2qHfUTTwFEc1NXiKT9DNQYGHjn9",
  "key18": "XP4TfXxiqJE3xPVK6qUUtpFFLWNufwdcUdkBv5BnLE6eeYea3rZfTKVSVnSCfYDX2KBA4bKvm3Mo37ewapYqeDL",
  "key19": "5pCshaCrVP79aSzg14VPUFnahymNkpZD4DsHngmz8cJikXH4M261hC4gPcMVykdjyfMg1UtizEotgfPegBTBUxMG",
  "key20": "XB7bEuQGyihg1Rmkxnqfpp4cQe3RVJ9pUtZucTGpDmQevP7Q8kY7gRU4bgMiXXcveA78btYBq4imJeitKGFiNip",
  "key21": "4448CgjpEndfqbyNqeE8f9ma5u43J8uVCwfzduRuPDZmH5911MmzCmjfSP8QEPn8sMygmJGeuJoy4vwefth4sse6",
  "key22": "3uTkXmEiereLzHmwtjupeKL6YF3USZGw1G1kqvKyaXoPin6aSAo8UyWB1rVDYXTuE89wKuYfMpJ862XPiYuK94Ct",
  "key23": "UwcujR4YwFKnctCMgbgbKRypjFvJwHLxikkirCozWAU4BL63yXL7WBt4rarmExS84Y58z8Due9E9cew5JhmaqRg",
  "key24": "4mJTz2JYxQsMBXY2b8Pu4A2iumtoumBGcLXV6WCmnuVRRisfJkDU6qNdUezHMnCjjRU1iwre7FULAspistEhUM9Z",
  "key25": "3ERszrc7whAVuaAAxLo156RL59o96uYkYUWdVBTR8GmfhXa1EppyCMbhvMcfA53RsGHWESNwh5Ki1c4iYqYTY1q6",
  "key26": "5VWczNWAMejyWLMCvdiXRP7MHDAserJzCn9xZt4fM3TpqyggRDa62NQBuyAUTTeGgjH2PKDyHdTgXV5GgzW7xFWW",
  "key27": "4Au4SD3FrmZhPYErChLikBYciHGWy6LUWWmXwNtUK2ECXqt6u2c14E1TvuSnPRcnUWGqeZFPxCpxET9CA6HXr9wg",
  "key28": "5YjbZnVdqAkBBivajE5hWiRuk1gnXBSZUHroX7k1ZSDJUqeprHC7jsxBWwFsnpgvfSs2CzPLDwQfK6YywX68Wjtn",
  "key29": "2CFnDBBhUFPdNAguiE6bUs8qdyGyn9a4M8osrMcdLVZPHMzXb9vwUaZSHHm595tJFuxdXzkWBF8usyoUV6xxeGj",
  "key30": "63uprY5QWVWGR4isrnU1uScgGeGQmX95iQvVCUoVyWaqJsgtr624y1fvU6PDDtnndx2g4bh9xktzXHfq9SccNVhG",
  "key31": "47F25Vf2EFozRyx2nJzK3czjfrEht62kqRo5hY552bqpFCUPCFtqeLdeN23VydgZhNr5eegP8s2whom9gNWD66M7",
  "key32": "5SPuXs6VzDcavYmPKDSJiJR2ZqrkRZ74yfwrqgEigTjJEmaZpY7fm7x5o7ZhnWt28NS3nVvK5ciD1TH6yRsKsWdt",
  "key33": "4CM2sxZ6UkWt5SeqqMqbgMbhmt1CaRJmkujB3cwqeJjDMc7RhpUaX9uFEBwWJMt2MsEdSpRof7UGSsn5t3zGStti",
  "key34": "3m68bZ2szNRXce77iXtxggZGFpcu6cqmPDBC5sSNTSSQfNr5q4q459oSgS4pSpm4aDd54xp1bm3dgFtyfDVWhm8b",
  "key35": "2gtfzQuXUhBg6jLg3YR39KSQgxDd5ezTQE8dbBxPyPKwy3vKgqxUsf1SLR6BUMPp9zLEpn6te9a5cKJzhv1fzQiq",
  "key36": "4HgsX4c5DnwAxTouk5Dd5Cm9RoJVN3c8PVqxDstoipdX3fRqriajziJuy2jKzws1iBxCGgjaZNs5nw5p9b4LyrXA"
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
