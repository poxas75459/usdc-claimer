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
    "3SXqohnoSebgt2RpczRqebdiBS7dvMfwYeCryQXpBABcbJAfPiURtyTqx32vK2zCFKMfziwvr6YfvxVfgE1wxmRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAG53AFkVeo77xSPRFQLkFHCpKeKYb6S7iCeVPMwpZXwN6tA4XEpi6MfTNvR72oSwX6iZK1p8gf2jSuyUR4k8fz",
  "key1": "5c82oEBT4ZbpWWrLyVQHCNixxLBhnnoRyBpG8krPry2chuUzFoChye9XQsytSi488qxhkQ38151M3VAbPjNCeq9c",
  "key2": "3gYURKirNcrTH7ybN3NqXtMt24REgt47cbKYCcyPNraywxR9vYY12gtsRcNHpeeaKbCsZ4AsqEHjk1PvVCGpXahv",
  "key3": "3BJ6Pr5hXaksE1fWRbcLjQbvNQHsLikbdit9394mGMowihb94zBC4KiMogc8DqbxcmsMkBU4UtyJL3YcozqZ6Lhd",
  "key4": "8CRNo85xs5d6ANeGJQBRDvs8WJq9eqTRQp5PwQu9NVcqL4bLUMi9acZm2hh8HFKU1HbJNs8QCUaHbLXo9B69tZd",
  "key5": "5iQVhzsDhRBT1F9Z7MZWcdfs55wKbweYUqEupqc9LcUVQrJ6qWS3CwzBRsJA9BHi7kadfy1h4EwAkG8NMHybu7pq",
  "key6": "43vqKGWg5JtuoHDZwrG2G4nYXVkfGUtjQ5zsUFx6k6YciSoa3wmegoJTbkiJShg1gNFEatwvLFjZonriEF4A5KvW",
  "key7": "5bqn9SjEkRXy5437N2SXF1q7TZ6KzXsUZSdSDhgqxL6gdQ3Vdeo5PMFX5otLVP3R7MTgvWTrv41tfNWYZWpxa5cd",
  "key8": "57Y65cKEgL17dgKGTfmbgX8rWjCm4tfzD6CopjTRwyah7nnvKK17KQKRuQW9TEEf4V3yvyemAThU9izoA2E5FDTB",
  "key9": "4BNmvJppjcmhfMVYoGehvreUXzeqjpN2RZvBtVEnKyRVgcLtftPnkdNcMdJapFzDLxUFsgE8MxApAoUZMZyefJow",
  "key10": "2kigHEToN5feBWuwjrfyY6mykiT7HFHRbcLBrCNbd6cyeFnbvZveDYQeFMpEiYdk8yk9nHdxNR2eE6dJmtHum4mQ",
  "key11": "N8iYP4SMLzmmav6HmSvWfFyEHmpxj9AT28awKkbX8MCn9nxapMydYgn9nWieY4ghsX6Acopr3cz3gFogrvExqf1",
  "key12": "4yjGBNKHRmsxCQ69NffC9nYxcEiUQyi6wADP2c3d4DaVWQGAyBfLz3jJVkRHmEFQXpxQ4L3SwEScA9aKxnXT57RX",
  "key13": "QYvC78N2rzSTk9269Sn5h99XFbogYeNJYn9zoaooX2wbdH9B7uiGNWySguJiF1SP4uGGyLM6k24cWWuSjgQQGTd",
  "key14": "2wyveQrAg5zi2cVCP8h1EXXkDNaeSf7uVPCB3jQqT93Laoyw8hXkyagqYSsUm2chTvxMnbtaWqDhJx2DDnhjDd8b",
  "key15": "5AgvwNCZzqM2qj4x9BWTAe3DNcwo3U7uiufxKaiunLTz74ywhnS6XFP8xkjRtVUxvCHqhXznRk1yf6MY3DAqwB2h",
  "key16": "3M5NdwQL4nwDnWSjqbtQbx1R4d78i7eNzRNS9yNag8eSbpNLperrThDczCnYFFMSdHxi1Tsvy4cpUCSHn5qVDwkG",
  "key17": "4JmRcvbp2TPu2mp1ZQX7E7dR4kosRo1hBf6F8Tr6gptvyoNMwSc61gQB6twawh6ggQs7a1iySzih81SZFN2B7ZTo",
  "key18": "jWYCN4vV7Q2yGc87d9jfqJevBA1NeUwg5QFhdyt8osMA3oeMdxc5CvBtZFqEy3FPDc3T4DWPcUEihcHSQy4mQq3",
  "key19": "dNQ2hYzRPu3Hr3RtJZnayMrp7gDsSxmu5LUEWTbFSAUAjQ2YZRD4rNLk4yHDTEvUsavpWci2VSRnncAo63mDvRx",
  "key20": "4Q1szmBfKFQie5QbBWAVWSg4EHiM9rowBmBGnnpuAPA8bcxUPASMmv7F4YaXYAbJzgbmu9KnL9FJpefUcCeitNsK",
  "key21": "4WxRiQC1JHf5FwHiovqtZSgfrXwUeqJS2sxVymnnH2Kkxwu8seJSnDjZa3XCsKjg4tcBVbt21XmB3n3bAk7Rkvdp",
  "key22": "2UpZ3Xb33ic2wFdAjLxaPg41D2BSSwj3iYN6LC3DyBCu3V2itTbp8Vbots9TSxr9gbuMzTQvQ8JDrhS3SeBsqJ3Q",
  "key23": "5FHCW2V2xXRXEHtfsDauVSvdbPy9HGjXMsYTgyccJkidMrhZ8bHKXJteGdA44N4Wu8R7sTEupXam4z8coATn7B9L",
  "key24": "2Bm9QKCFNizMLBLwbyK17j21U22GvnRzxYUhRQUJ7oyxACeLk6SacGRT9cUarUYuWKByuCkmbxaebskAVHwzpCkP",
  "key25": "4SFetPx6SrrNjEZDGCYJboMmEVDhXKqRnXYsQHqdWsbdJ8bPWxcJMM2sfLhnegXvWVTBQGDT5b71UeMuBrLHbvud",
  "key26": "tjpoNza1Y1Ko3XF5ic3fXdp8cyEV7BfzShJM7TMjt7dSuFWPSwtFKVfMoiCXykE3b7ukeTanTbPbbVNdHuKSmok",
  "key27": "3fT1xbSDadq7KzpDXRokiWjZGTqvkyFvm9r1CMz36zBdpogFFmCWTueW9UVNZ44hMaX3JJGkte2sTDqXfepoWW68",
  "key28": "3CGrBJF6etWXxCh6ZDNcJAUhWkdUK289zywvyEmCaRCTgovb1M1XiTBeDBLApQwYvyMzk5Vxtj8RAe11Bsds8FNH",
  "key29": "3GvhJWQtCSPgmJFq6kuUutZZNiugoRbhNWmhbnMAtarATETGJRErbukkWUxP2DBzmNakKZjS2EZkZvxFeJ6jwhvR",
  "key30": "326f2pvXc6rLLuUWWgRHd9gMkSAh2JQLmLquPebTDArZ1AzXX7y4t5GBDX1ZAS78Z1U77ghXV96ZUyfdi4LE1dz1",
  "key31": "62wqrMJprB3wvyPWTkrjrrRG1PHtqiasVd9TF7b4vxX8b5tPsVKqevuqXDifwpGa8X4YnARwgvrLeVTn3yTKx4an",
  "key32": "2ButJ5ZW34nLkuQw3qGQNQvuUtiGi6Rnn5MbWcArnydtACicDSmgP59fWNPs4VVp8gg73xLdDMahn7wdNso6opTs",
  "key33": "3BjSsmJXMbdsP3srQV2eo5nY6YbKAK3kzBUQmxqX7vCHWNP3EKhjFXRAoFTFqkCVXS9pNuYGAuzqfBgVjVjGVdy6",
  "key34": "3sCEjxxS4cuDVqizRZ3Kfj14wqhRDCXHjTuv8tQvhEjCJiqhhYFKdQKGEvfXWcDyy1SKfA8o7AkxZhGxMEogkQ29"
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
