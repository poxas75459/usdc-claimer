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
    "3bHtzHTm5cZfyS2wHhhLPS4iRKo3kaBFgUj6kgG4EKH5KggAuas8Ynn6DGpm5XuUhxJjCbdW9rMaBxbWaMheBsdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yX9rQ1MeYrjAtNFKJrjsEZU7y87PFicF1RMGMs6vyQAj68WsmERV82cBCpTqCdCufxhCeDLmDjX2Pjbwda2bbnQ",
  "key1": "5xyjbXwotw6iT3Bm3Bg24bxXFRJApEbfJoCfhZmVNa4KNz4zScwMhYR7PC5jtZX31kTvyoMsAdYbZU6FUyVaRWq2",
  "key2": "4EHkUDUtQuBW2cfmuadqUMUF9PVLM2Rnja9BcZ4C9BSfQeg5eKCvLR48n5Vh8YdNupvLszHTFjfLZLc8sgLgr7rC",
  "key3": "4kgpJNM7iPibJH7EUUTeX5B6debeATC32whroHPBnAfSPR51P8vRd1XdpiA1BYcpouBZHojJtb4prZEA69vP8cU9",
  "key4": "3CUZEvUvi3hCY5aptNEVbWS5PFBW9yshpNo1QXq6ANfHkTDmJv9eiSACReVX7BbKatHLWqVzBjgi3PDNZckCVra6",
  "key5": "FtZGLxSoQ25RPQALys8W8UCVs6SdZCpV4taNXSFFjRWzZAUwSzV5kqyhLWoDLuTVKphWPpHzVfyBRsYHM8Ew3e7",
  "key6": "3EyGySemaxREu7yfRWGBGRNF8vMvbHMRDxKDEKXqUVTVGdAZKzRXxiiZuas6gw3kegcKyjX7XVnA8qnPy2D2DZVp",
  "key7": "5eY9xCdnh1uyMQuDzgPZ4wQE1H5jwPsio5UaZV8X1m7zgeQ7RE6T3KM7DzffgrDqmGV3ucoPJwmq8tM41UNzqBpY",
  "key8": "5NcgzfJRwUgzFfLJZZinTiyfcBW5KpGV2DcLDu6ZFQJs6SULFWHx38ENuQqQLL3VxwEejQPxQz2UUJAXSwco3YZm",
  "key9": "NStTWnUki6m51mf8SKimpMBCVDQM7o11HVWrkLdvXV5rJnKGAvf5YZnkR57TfFdabyb9WGTkg3P179pY7xXNRW2",
  "key10": "5dNXA7nrHHzRUeNXAaPodufyPro8NYVQirYPzSKCuvN3uGy3VHDywbras2qdvuLj6GYGHz3E6HdTcYieJTQUZefY",
  "key11": "3jKoQkt4TzN7gJrXTCQkdtfXphRWsD8rBNz6PcqnLiiSEe24mtB99taEYmqJQy5S7JdxKq2jXw8i9AFHzxVrxSDT",
  "key12": "2N8xzuGXectQkhMv8mdX4NbujnmtR2d3AiVkCTjkhuEd6qEQckaMbkAbMQL9u7hE2NSHmmoVm6BVajRxSK2WnAiM",
  "key13": "4JmZsRJNYmY2bLhQWpGy2FH7ZMVyR6LmFrj8HtyxgWMeZodLo3khKyPrJ8usZhW8meE86KHN3QujszHTe3VD6eVt",
  "key14": "43JbYYzVyEmWi5ZiKUyZHhMaTZ3NwEtALciwzBRN1mFZko6qNupHPz8abc8ucvxJ26xWFCCPhZsXxDNhzePUDaLK",
  "key15": "5RRuZ4TsyQjcvbh5zV2G7C1jR23hECwRXrivuozCRWkVfk6bijeMxKSWsWW1oE6jCfmfqyjCttiAaYCfzmfhG1Xm",
  "key16": "5YUnNXwSPjZ2jNqvnTTKKSCTD9Zv53h4BUbxkomMfwRzRVr6bwDiiFWuqHwnQV1cJM1YZMuxygcVSxYcnKy25XFD",
  "key17": "4HHtz8cczJHErfhbkVsFrkNAY1WYo7hHcwwhCUh2KiuqKA4cNYb8k6nza3x3QMkZ3EwXjuJipaGR8L2jumoaM33T",
  "key18": "3qzVuae5PVB8MpmmtCHUP8WyvhNzcEzad4EM3mKUX6TU3PqrdtZHuzz4V7AS1QtCrr4h4qMQLnP21fym8uQocD41",
  "key19": "2sSUg5q6yZ1omvK2XRu4tUgXj37N56nJBvaUV8qDuyW1inHdp2WAmcNXpcDdFqRsKdTQr9kuy9a8DwwRaN8YZwCG",
  "key20": "329kYtYRPRNDTjLoXbWr6V7m97YfA8Hqnnmu7DXWgMM8pywBjhexKW6KrnscghSghkmfpi9WL1ZEQL4fFiAsgWL5",
  "key21": "4vkdjg3GzZTA7Xz49WKk7jrgpfx9PLARHSnpdwMKm8w2R9Rrk32QWiVZSJnX57hQnkJdnJHEf9iZyPB6iaFLJRQR",
  "key22": "618xs7VmM5hJqQXVj49aqZWaYAqsFUfjwzVothdKB81i1F1hiyyQGgpqh2rdrgEdaW1hZLNGhVHJkudwZxxTDwQf",
  "key23": "4Xshuucn6Mot1dKMiMqbEWhV2RGtxRU67PLreGMy2kHKdkL68Hk9uS7Ww9wN8sKkqEr9MMqFL8Jxmbg1fHd2QuLd",
  "key24": "5DRAHxSmRDwkF4Ddjw2QtmjKAGaovAj4DXXUrb3fV3fcz2jFagG31vgsde5WKmaA4vZhDvUTT4VGm8m5KspLNstD",
  "key25": "4ZNvookSnACEeejH2E63c4KhTnLwSgTXrpsGtMbsX8YTHUWAFUvXnsgm8rau3mYNj5jWbbkNctu6UoJvpZrezt22",
  "key26": "63upBUvNq68qkgQP5rn5QKbzNc1sNmEu27pThnbfp8BRoPm7aQsLGyL2cVMJknhrqLpG54aRDWpzfkKckv2SW5zR",
  "key27": "2741AUUZvZi34FXfdXV3bQtixvodid7GYShTvu2Pkd37hqdF1cm7uQsUAiMGunzokq1dXpRayNFUSqU13fpeFTuQ",
  "key28": "5kJV6qeMf2SmFCgjWhxy2GBs8Ccn6kndbHDLQRwKLZcV7VAbG5HTMrwME7vsNRxAGDYsAvsz3jhCVj9yDpUeHRLk",
  "key29": "5MHM4qLxxzR1dQRxRD65i6Jes5J8hgWtNdcBHqg1zKxahmxgTtA8pLFX4ZtE85YHbF8iMVuy7MybPMtQVZtRpE6q",
  "key30": "3m5xG2XPqVqiexoVssqgC8msaQnwQhEiCrFbzBNnGCAZDKQaCwBupb4NjKLxkdCPAyRyRfiAiYVjM7ryuMEwZuZQ",
  "key31": "41BPZReDS4eeEWPFQmRtp58oRFvFNF92FGkQY1KzC5knvD5vpbf9pg2gU58KGzC4uzbYVkfX2hdUAnkQK4bcEKb4",
  "key32": "4Xzp7JX79heYqrjt3GVYNkHoDnwhC3gM3uFsDtoYQqCx9YVvoiSbs5Swct4GazcanEq51wkNNEMYgGY29eQB5uRz",
  "key33": "3YeCfowqcJPUU9in1JbceTyxAjzpYRg2K9rUmMLdgbGeUaKTXGJpjrP6B1Zt9BaEpWTm3fybM9C3brzHr9ShSmUi",
  "key34": "4LfjMfHtiU8pT8QRQfjqYoVTQrsihAs85Kx1AXrTZuRdd2AMX56MAcU4Q9gjWUMxQzb6ihiUQb3SSTBvEzf6ML5x",
  "key35": "2vDuTvEpwW7HaHBKDvR3MoYLwHf8au1tBD68bobkwWC3pCwXaCU2TCxi19Fsbjfwcg3wdcxLJtrLVttagRUjcBwm",
  "key36": "3rTadWkKt41BLzpAdn81FcGYzPvUWNK4pfoiBvJ8sjsYLE8cb6rSkvcDHupbBmf4yNSJ35PUjN1wqoZu7UAwa3vM",
  "key37": "3V4iTLL2g1newBeoaC4LyYiVB8ttvJv7EsCQAi4uzCMLBqrfUHcFyyC2vvztfM2RLMHkVkaoKvtadHWrfMqr3agX",
  "key38": "3m2EmxnBSRCEhrkc5iwpYxepLeCMwpgvkZqneX9iq5tpjSv9RskZWdhtuBnhNaJQti7SLP8Y7LkYRn2YVhQ1swNf",
  "key39": "3422DMYywXCPXrtm1N5raoKpg1z2XNThL2XcaeNk9rN5SuqqiVg6VX8K7tGycDMEFNwHc69hDvFcDVcRG65SjzFL",
  "key40": "2hPd1KtewCyiP2U7iUYdTn1x6toeYFVf9p7FGvizVEXCZjZp8PdByXMFFGWiKK3a8LzDpErMPVyMMuw66attrM2X",
  "key41": "3uQxhHqH5Y8orfs6W9QSkVEYF9KNUqEs1v84qTwnLsTpqTYRfDi4ciQKeLD73TeM5oz9NmPEs9XNkNuEAkbJD4bS"
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
