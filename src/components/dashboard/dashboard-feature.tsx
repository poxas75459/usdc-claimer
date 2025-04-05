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
    "2CDJAGYiwiGAStG2tSvgQQd8Cby3LkReenBzip8bbLuEkHuF5nhCacGdnFywCg31AoWd5LEakbYaKJNL6bkunEJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541fzhfnY3yue81Tce21wfxHrtLzEik9FKHfUP3jpHXmXftFYLuAh34ZfarTMkyhLVdcoVxJPx1zrKGZnim6ux1P",
  "key1": "3SQ69o21jLLYawxh825rKQmmAU2gbPsGSWFzJZv1nHvYVfAhramzeLcYiecb4feGzy6CmtpMtcTjmMArovK63EGz",
  "key2": "3GeeMoyMfMucV3XqzDZSzra7x2sYVZ81hjEKjQz9SAmsrbVvSSCjp5DVn7L57UKFYXjXw718CXGHEL6moGbp4sYN",
  "key3": "5E6sWPvkCCzQ5dkNCWojCmhUnZ21B5J1S2oHdZ6WTChXgyBju6KJXgJ2U3njZ6M1gbBGK5xMX3oEzsdPhQQ3zE6",
  "key4": "216Tm3f9CuwFHRoYTdaV8uTnh5k93z8Y135d6nXHvS2GBHviBGbHWyZ6wBV6kPyCZMFf9nN5ZcUMTkP32xkcCaUk",
  "key5": "5QuhgvhGPsU9j1hyicVk75qB9F3ayABVDjZ33RMRGb6ybMLwrMhSyiLWRzzru13eV9m6YWNMxX9SBN7sA1VCkFuJ",
  "key6": "56JrwjgdvN3F7JY9gy6YK3LKU4Hevo5rK6AUaMoVtw9G1VqgoY64moPAyvLCP3rN8e4LxqiPhKmbgtamkp1VbF4e",
  "key7": "3pLojyZ3Fkwq47vFShriqB5HpKPiFJvWe7zCUBEJu8tHVVYwuJy4PqBkko8EqSGBw8iW7xCDo6EnjxEhph9CWyov",
  "key8": "44KmH69hKpkGcfdYj5Y5PSjZFijHoN6qexFjKComT7PwB68W3MeYbr5ZqX4f4Gcq5SJYSwXefT4hUGMDW1yHn43j",
  "key9": "5434KeHXzUxKid2X5yuhamcbeZciG5wh7LZLSMUV6VuANsma6FojoMyRgRWhvwka2RTwYmint5Jsikn2h8AWGFGw",
  "key10": "2zsmgvcEtpwoxZKdtBC8c8fgipbLKvaMXNmmhHU5vwjgPr9cuckbSBowALat2rWLBrgRGd1x5cuGNX4SAa9iXZ4W",
  "key11": "5xTC2Px5YvNcLTYvW9rKKNTiL1ejg9CFnQi1k7Jdpfj8Qp88gSzdBhVoduLcHhx9R5eKqmrWkfEgUSEPm57dMJgx",
  "key12": "RxQ1GqcprFi1zde9Vq8TWQLWDDsu6VZdXCNsX2gq5rkRPvNGrweghii5rhqg5WBeMapg5Ft2WgtAzs84FkyCgNY",
  "key13": "5eZmyBSwLhMruKiSwyogFWE8SAi8zUVT9f2dhAs6zrjspoJdr8omX9xTKFDRim3ShJgchjUfYZ5EpS8DKQ3Eo658",
  "key14": "5S9Yv1dnpsuEAXfW2gpakt3ajETM1923HV4eAWZWsSpjutSvZvacyaH8pp3m27uG41wuVqo3eKFt6zGwXzeSJmPA",
  "key15": "4XXf5UCLSjyQGwsPoAJUUTJ2DqzB2JrirPN78B6b3MZcZkzGEMKP9t6ZFzP7dSQUxebptZRz2J7Tcv91tfsW9J8n",
  "key16": "2C6MxA2tdnYNgjf4EsDhGsMBU4aC8pMmDMGr5PGc891UXhh3zWGbtwZcB3jGYTr1nuVCDCX39vkcWZPqUJkfmDYi",
  "key17": "3LEU6Qjuzfa5fGrD3ismByRGrWwJ6Pp6ds8FcarGMAkiniZD98mHemmF8QH7px2aoLep76ujDqskcNmCi2ENPZQ8",
  "key18": "5ziX73z7LWpySJFP8Kwyg4SjcYHTtGSurpwfPL66tsKtfdjejAfihrdGcyN3bEzQrKrTbQmtgcbiyXjMYUJZG6aG",
  "key19": "aoongQ5PEqSbgwpLr3eotuQ6Gf1rgnfaS7DK77yoXD3SfQAZ2cJS9Ze6BwqEDW2pjEMSwiRz4k5WzqvggePcEjX",
  "key20": "gW7fCDpWUoP93omsidCGVvWQSDeJi2huomYvBqT9DFadHN7QmTf4x6FeFGeMtg1Whiv6VS2b7fpYDgvtpUMJa64",
  "key21": "4PAc55PadfFCAkcPCkiuP4pDdMkQiBbr6X4yqMkPXN73N9USxzmdSUqfVQj3avwF2DfBJxaZKFRCn5o9WcPs3fhi",
  "key22": "2AHzVhPGiJNneivSumken5ZFBbCw5a2XXjS91PXXnVMh9KiSvEdQYBA9K7NKpSXZpJV9czvk6vr6waBJg76D1A7g",
  "key23": "42j4S99dYFSwSm4BiyEK2iSpSffxPCD4kUSmrPqvwkuVtYSNawww3qfn2mhPGYnQmnz5vwXtAniY3LrkP35VoLy7",
  "key24": "4cAJVodBc5ZcUcouytLJKC5hHCDfWnFDGdN5vVvfv5ZG8dBCHrs3GHZcZraMNeTkZDaLkmJzogrvtU3RvnpmwAg",
  "key25": "4UeTj9diHQZhUaS7NWEUzeAV5NScn7ix6cLRykotTGrdnCM1YWjpzdDoe2RBJLvzzTSbrDXBRYQGS23A6TZipTZK",
  "key26": "3Q2SXBA86FBgPFDzFCt6K1GEMbVpcoG3rtNL9CZWR8aXk6m7ydkzx8zaviRwd5qntoecRDs2r4QM52Hxjb9SwtQT",
  "key27": "5Ri7XtYWp5N6HeYjR2X8EdnuurFfwMSC7gcCpwNu3CruHAk8ex6ZJ61TdbMDfQeKXGnX1MpYHm3zHUtKyTfTxjGm",
  "key28": "2qX2i3SiV967BS1ixGdyMRWiEPVCYufxCWybngNUFFvK2sWKVYpi9Zx5UuVPbkgVTkrnp7WF7AymxUDZ7oghDihn",
  "key29": "33nmYZBvjnXrxeCLrrResaPchhvBG8diEBNEpncYMkdj2Vx5dr1uWorwF6iKD24nBVpAKUaZVVk8B7UvcYx3DagT",
  "key30": "RWcZ6zZ9Be1owvsyj1NtTRMR8xTwiBACHKxzkEqcEnTTzVVnri4xuPznEx54PLp6tmcoNM6CQAHJkmvTqwrvk8C",
  "key31": "4LmMwsUJQek7aLdPJw8N4ijFVNUaf8fbJfJeoUDEv2SmN7bTXKjZFjAo9kvGwTt5jGQsKrSsoNYxrTk59ERQCY24"
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
