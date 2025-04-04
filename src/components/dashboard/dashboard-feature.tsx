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
    "27H4b5mrkRmXXUwcfq2AQ6JdTnc4ctFZMJZRqWYBd9ce5ds9XKaRe8Uuu3ApEXGvAKVqVZYR9Uja9gKCtxcFYY4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4huULC4joU8C4Hw5uCMiTTfR6f3L28uru3fmLyvAX4MAFAbYFM9HX11gUR7Rs6La9hTB59JueF44RYoeQXGYkGgB",
  "key1": "4sQz6D9kFtcboM36dShmmW4Ku4un91TwTbribShn4HyxUQZWmZeHdDGJnLcabh28GwSYVuuRaPVKGmKy3iS3UzUC",
  "key2": "2P3RzaG4Rh3SiDvWVLdXRqLs3yWCDxhSoZy6k8jiXxq4jvNu4yhdTN9dNg9UGgyxTPWHHVVTVYjHXjTsJwdzFkzj",
  "key3": "2RAVqwtYUD5krpgVwH1tedB8EdGEvY8ymUUoAtxUvzxfdLm9o75PXEkJu1kUqYqk7zr4PNDxYPy6xA6Uy982RPvF",
  "key4": "5gyRVcCkVHgv2RtsXrnR5xyg9CadcnMuwj4j5p4YCC4uq4fxaDk3To6HjBWVmTemfDZGg78AXm1Auw4N5aZ1dC5Y",
  "key5": "HhidAdXZcr9VYAfNVVLhGkJskXVdaDPZSmQFbcLkEiYfkCLvkpoT3AAMKWLgxbWwSmGn2GJ72nVXbbbLwCRyj81",
  "key6": "3HDy1JCVsvv6YeQSDZpQof6GnXLLnt67BpeYNL1D5CfmsioZPxMRRLJQAfZ17igd8Yngst5toJzpZcaPbyfCpC8X",
  "key7": "5p7B5WuX4zZQdjxL1iAVmXwQ2omLfP7dPj9MdqKvHww3xAuuQFZNokNiqZgNdRP9vZoPVxLUEBLL8LncMXcAygqB",
  "key8": "4TTsttsVF1qGEAWQC1hh6QRgHcYXsoVWYeZkz1w7VFxmBriYa4UaEPxhKzsYrDonicZ4jhfPAaw6R5q4VMr3uHid",
  "key9": "4zK8jdB2gG87txA8334LfStn3P4iGMjp9a5YH7wXpJTBjarVjRojHgGtn4fsYco6sEgegGEciv2YH5HZUNR9xusF",
  "key10": "5HJSPYvEyfSvWX5xhwJgJJkSVVWD5Zcx6ueeTYNY395dbN3xg6V9v1h9FJTGoBenPDoPiS2v71cDscAaKUgVZi6Q",
  "key11": "56BiccHPNaWZcmPUVtroG68JBMb3DT1wZXb2AixiqStGo2nX59rUcwcMnB3C1JDGc7qDrQKVagiFbb4vohTpesHu",
  "key12": "5s86SmVXUJ1NE3M7boV6u2gSkX6tDtXMkNeWHJazAy1SjAuvAGagAf6w6ttMdvr76cnjWSvKgRNDWg4SgAiDrKJu",
  "key13": "5mFCww7BwcHz8kkrAAEW2fFdoZderQQMiuiRBqBX5hfvrZGsb6ixxejHAbyGaULo4pom519XKQYwkxuQBrYCUrgZ",
  "key14": "5sVPdXLFnTpDwVsh6DKXKhVXBsTGDfJVdNsw6VfR6nMXTVDoWT1HWhRJGLcgtmva12fpcmGUW957P6s3SJ8uhscD",
  "key15": "2tF3T6KCjgBkNikt4kpUoNoYTUMLiekqJe6pyddszjBzuc6pqmMkWbX2UnC7VkieuAMT1y3d7x2tit54boyQdoQn",
  "key16": "3KhNcWR6YoyoyfDYfcSPjirM6Af2WxiykkWQU5X4y67Ji9U5wW38gHh3d3CGB4adrsSecmUEVicKQSi5Hnu1rZ4R",
  "key17": "4xhyi1FRePhy2MMBmn2uBpLUG5EVJ38yESWsRp2TBWbMbR86f3YfmEFDQ96Aigpku9RJkv3cqk8oqSjKixLdjRGC",
  "key18": "RoXZGGy6rdXMq66FpT7YZPdRQMG89o3gEWHXQN3QR9B5e4RTmUTbhUzwHDHzGie6V5opn5CSH93hFFdEbc3XQKG",
  "key19": "d78ERyyRMGtUs5MoMovLyqg6N16ro3GE9EhRm3QoNq7cvQGdHQKGBjP2c1bHCAsSnZmBEjLKHG1HZTCwr3vKJ1D",
  "key20": "5EwSKwCzQD338bz6tGdFdzKu8ogaUVFB8CKBrF6Aj7ysRVcmMHA9has7XoAMJt1rydAd2rxSy7JxqJMhSHQk3Ng8",
  "key21": "4XGbkzDc4946FaH9BZEHhkUPSsnJANQ9v35rkknwstD2X885SPjFBpKnjbrE7zR8byzNhmASgTNNcuTnn8dHxA4V",
  "key22": "4D8ttPXEFSUw4gE4B5ysNiMD5ahyK7SgCR1Bs963Bfj8wb717sBZByXtduu75q4tya7XJkiMBHzaCSabneByE2pw",
  "key23": "Piwc2oiSx2uWF7Chi2heruM261L6ei6yjbw3xGUsN2hxGBC6C9NK268Ta4oxMxCjgcqEoqf13ivd4qebW6jpC2s",
  "key24": "5h88m7NmPuuGraRwqo9pnPFhXYt5bxj3xoWpUTWyxmrN6xM3sFkp3HBtw1KAf17QkDiTFKvRDim95jRS5RnK2DJ2",
  "key25": "3tKsvUhpLszYWaosLaLbTcTre5ALp8KBeThSrFZvQ8mW4K9mU3g7KkDmMZ8KJvMdpkLif7eYp7B5chAyfY1EEVPA",
  "key26": "oMmduPRBf94YWyv11Tq2uE9Kh7tEaMKN9NRJ8Sq3yXTjPDo1LmiZRcFTBCynqJTPt4vrAushv7Pc9LCkNVTPy3c",
  "key27": "3ajbLeoddM9y1AYCzn1XrW2EHwEyxBY4nmj3SMM6PUDUpeBb7NErnsyhPrramHmVb5iQKmU6AEhB5RFPrNq8MiFz",
  "key28": "4YApaVGXvbUxuhdRhXQcmtxNc2FS8VK99Li72AAEzVqco9MEjATyBVfwipHJqZmRShTU2wUn8AR8YqwMMhuSgcjv",
  "key29": "5w4KKZ1JPrm7Ek1DQh3WkJHBY484R8kBeaFkyVHdcqdBa95PZo51bkfumFZ5mi9wbk5U7apqCevnaGzsnKDWaddu",
  "key30": "44VC8khGpY7QyAingtTfdYdD7DYxaJXSydBfC7MpwLTQnW95DAzZHPow9FV8wTrzK7Q7Re1uo4DDSEuWseq9XY1K",
  "key31": "3vTcytYJ3wyEzdsK6MmQHz8HvZgQYmUg21BkjjpxHCK8e6prrPAnw1wJZbs3GevRRv5FEAao8LwpzTgLftsnRasp",
  "key32": "i4eMtr5mS5UMEuTyuRJUY9q6vfWkBHSfdTCfn477CxYVvkLmu6HwL1wB82aQtZjjUUFXGE8pLExMTHSdtDwZH8o",
  "key33": "2Mo2oGxnu3bkHuGNZHzYMjpZowyDEp61rAWFPhocZpE27vwbHJWtiLvrRMjAaeRbcEgvHNDk1bpxXNQWxaVTGTc9",
  "key34": "2Bee267zBmPYPsuGdYygxB2zJXK9MZjNVtmGQptG9XzhK2WcdTtSpm26ZzABWrxSnnMvteQEbvPfyoMcrd8JGTB1",
  "key35": "TpXLDoYDKRXmgaZgcnQ6qJqyLe9zUh9ZHvQoJEhdWuYHfrE7D2owRK26A99FDQVqcARHDTQ8CnueKLEwCBZUhm1",
  "key36": "5ecXpFw1wmPAtRPhLpSAphXMWdekF7Kh28MpS47Cau6jMjwVKywfGVewd14VajhEwb8cRa1SeDHJoKZCK4HiRRb5",
  "key37": "4B7REpwuFtjwghyaAs33zD331jitDLTvFkTeyhm4M9McWEXpm9gidtseyvQ9x62ip34fp8tDnokzVRrNhsEpYiGb",
  "key38": "45nQiqTLMhXvgw27aZsXBACQ8K6qt7LSxhHw7uTtcsawVpwfhyxkktmuKgU1sBNEmQpBYT6z3VKXES7G7XYNMqvQ",
  "key39": "3QeTQcJ5vZpaewnNVGvJa39ETSVH2GYwZ1iZAg3khvG2K1aY2Gm2Bb8xboXHgtg6YyooaWzAwsMGv5MYR4j73qjC",
  "key40": "Gc6q8p7o9HDAf8prTqcm6JcEdgoiqmBx6g11A7UT7sLoo5SuBQaoNx62jeqMvTPf4YfhaAhZPtP3skiwDBuJrTK",
  "key41": "kmQqEtKdiKBaDAFFKQRQdzED9DbpASDt4q2rH2oxBxEArzmJkRocaWbTNqAuFBN1Kim5f927CNsLzKbSJK2h1Dr",
  "key42": "3cnv7R6w9Q8MgVrn1YZi5tgdr9AEwQodM8RrMckJVyGgiR1uQYuN7C6ycvHB5UyNv211BWqi1aYwdUN4D9UXyv8X",
  "key43": "2JypMjGKsSsjrQDmsECFi7X4jSEMUppzLdMnHKbo7vFyyTd6WMLb5BZZ6qiyVtrkoCcuq5PXJQoZsfVFwmmi3zkZ",
  "key44": "3BU3q7mZt2kdfP3qDTPGk5zhGAHTYPv1YZjeQ4dnAuXLCn2e5rJtxUK6h854Pvs7vxfFiKM9zXyyvBk5hi2ZZbKU",
  "key45": "4TzSFc856u4qQSaq7hrKf5ufcd5S9PQEswYh5Zh6oqN2qk2aDx1Vx1bAr8djFdF1zU6N2B2HRUZ5PZtqfCXrGFtm",
  "key46": "U16d93uHjrrtxNjWhsHT988rj2ZRC4tkdZQD18g2xrS3wBoTRhkKVvmtNBcvWfEBRTbRD3rKzsby3nQLPPyYm3X",
  "key47": "55HWWM2fMmvyywZZLUjDQyBi9A3eMwfAjnLpkHA1z4SJ4Qf4835nzHJwgkd8gNiZdLrRgkwQ8qyu8A4rr6dGNRjr",
  "key48": "2EGeMWByvpZdGz4jsLgmnXEuHxPMaUxFvMeLA7k2Yw13qsob7BPcts1eh1or18mJTpKDxzPe6CrNANgiqac4rwQm"
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
