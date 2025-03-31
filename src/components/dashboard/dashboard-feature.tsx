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
    "3R1FN162W95DfywUvkFaNWkGYqmCh1P6yiYfonf4vLQD2sZanojFdM5StE8uHQGKn6iqyFxmRD7EXRhrpzpcxzQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmnnzM13otMWbkhfWrRtroCycD3TpQMfELYTY485tVoCHCxBtBbUACcmtcUYgUMTN96Vz5ET9oH9vC41CWVE6DX",
  "key1": "CQQwmKAn7c5oJceMFE5T5d9YRXTy1FdWxfVoBqG4LWmovs6uyDwfawKBgyeaz2X4FJJPtyjnxjUEAUJEUJQTauZ",
  "key2": "F7e2rSL1ngt29szH9ASMnUSLWkYh7BUFM4W4bLsR34V4SYmfMdUFwDsSMufx1uk9rtFQejWT3ijoMAqNDdC3TiG",
  "key3": "3BMyFouCrVfxmEAMGARzRQnjT7Q18UP5Tt2CAgfpHryUHKACmzbvd9LFyUw8EZMABPeSUn1YCdUCzJjrUT75njmB",
  "key4": "5VjmbpNf7ZCrgdMZuoYAbJNaQkfc8WBYikUnYyYtFhz1cePK1JbaCLiJycXyjm2jZdTRMaZ6hC9v2Jgj4XoukRJP",
  "key5": "kB32F6edcPm1SHLYmHSihdngV4GyA8gSjo1N59DEBCAo8iJWVsR3A27g5wSnFqvA79YG9tEjcf5DrXioYEwfpVJ",
  "key6": "zZobkXCYxUZLGtQSmXRy8jEe6C6CdNSABEgKMxX7k8fM7Aem7dr2wTf78M3CKBrPwHSxDdu5SDovMQJUiiKJu7d",
  "key7": "53XbzxzFzDWohD9M2WxxjQmQwG1MjCH5ahy2jj23dAg5SsXRxA7PDak11CLfH24mtVJuxaxBiNnEh3bT3TCQwU84",
  "key8": "4c9i2adHR4b1XNAM6xmde6Hq7rmBn6hWwszSKEwo97nf2Ahx3KuBoKRzFzYoar1z3dbZzjq467MNMDJaYEGQDtLS",
  "key9": "4LAYhBd2SAS972hjxVDTa4sJUUpBn1sDnbKuKXMK5HtoEzrs5h42qd2MYNxRoFfhGhUH1SU2FHKVyodEP8JvoNpM",
  "key10": "4xfTGJJBW3yLVsns9RczN68JUWahNL9AQpHmz5LhYc7PnUnUZtyayEb15rSGNVXvkCDVchRfLCaeG2ALzz9Aaaps",
  "key11": "2XNRGfaLBPkEsQpvf547EDfZ3tHEArRDYTAfmuU39rLKExSe7CoWa3YHNHhCGkn6pz455wQeHqgnxGbRzJfWmU1k",
  "key12": "3fV6oQGPdsfDhrbE34F4v3CiHXhSGYBDjc2H3kEPsjNdrb84TH2yQpKuV27EC4xctUyymasKchK1Wo62zweri6uY",
  "key13": "6556BgN7Z7BJbcAWpYzz9H9ixhy6SXFM6mJ9TPdoQWDKj9UQE2YbtADW3iohdRhw5UZUYDiLxRqmL5oqsh4mThwT",
  "key14": "4tFC5ibVccJwu6M9ciVaEf7xoafayg5p2FVsGTPa4hSywrY19sxxTszFyjpvNHEHE3tuv2aaLLA74QA77AcqSusz",
  "key15": "5bfjLk2E59gLXGJLb7cEkaDBXoNmgBPzvVSAGRXUzjbYxRA5VVRFraotLF8gzokz5pMmK77LXNUGiaFK7eGpTspf",
  "key16": "4XqJ2ZKGAVG1bFDQceyFx5568mrUow7Dwx2YiDoepXC5RBpB5NzniJqAuGsGb1jTPsDPgQfGwmyUM1BpmRZCzpzb",
  "key17": "5ruEfRCFV5nWEc59PQRNP9cRh7UzEbtNYtwafxSEqJ1xzN5qSLmj4NjgiJLFbCnojaPzWqUnPfZNWZvzod9b3TC",
  "key18": "2W7KwrMPVreBZP4CG4gCoi5CVnSxmpuWDzFqqjzsi9jXY1fjLCKB9uep4cFvJAMhMmDY7ho3L7JpbcugJfKu9goF",
  "key19": "54rSArCjz4YaxCw17QPYBjohp3JmfVoQpmBUUiD6GESQZYMi9va3czvsfvMVWwMZceUcDY3rqZo7J3XM1EP4rXjX",
  "key20": "fwFmbG63W5cwvmhaq4jTs4f6pqaq6FC3saHHW5Ssex7C24dfGV3V3umr8cHJyeokdLbGiVZSZcb5LRzsmfsDdSC",
  "key21": "3XSf9AqVaGnR7cziaPVXX66puNPztENsGJ3zycjmt1VrHyUjRYeZoKUDuUR3xdRa6VcC18AqW6oPRGoUCkTJhVSq",
  "key22": "24BHtEyEmhFCHcS4CY7TsMKvEjizss4ZS6f2XDWnZGksmTgLVoCUVf1iodxA9Qxs7HWUJZx1toRz7LUywUwsKXsi",
  "key23": "4kAT4gLgGo2uWaDo3HEcRFBmJzqZyrAWTkXXwV5iLKys8wNxavuPgtX8FnjCk6RUidQbQnCBQq6eo45tfCAL9UH9",
  "key24": "5EDceT2FhmPrUsTCGE7Tx26gVVHTK5cuohGjm9wLB8DSD5m31NPemhxbPsLrYR6CnKUsYkE9DP98Nn4YAwndrnJX",
  "key25": "2eBUBSvx9T5HXZknRntSJFcygipAaeWCbgorzhqRhSFkVNMWzgpBG9ZnjopTMKRTssoDafBa8Zi92sNp4a4bMthE",
  "key26": "4eGPgtC9xgsQyWgLyhyTbnHouTCWNwFMKy8mpQZMA69sweKVZCMfrVT4wCB7Q8gw24xX5iHPCPY6frMtLQ58c5Dj",
  "key27": "JNnEedjmZVxf5dGtFWet43cD5PD91FtCKwue29e59R3fEbYE3vBnUbWyS9EdiSMBdFjeN3GTGz2ozpQ6VnKGM6e",
  "key28": "Xm5YTMgUx5zxtXqonPWgpf9hZruEDGjRiQPGPTefCVnJgfrhoR1zncF3s1AgYf29yfa9wERzwm1kewrgdVTSkfG",
  "key29": "B1G1NgUEKDvsqz512BrVTSuLdk6JyKh4jxgNznehkhCWocC62BhQgprNvBaV17LbZWKEEiLHSvcK3w9iVn92vQB",
  "key30": "5hT9SndC9y21qPZ8fhD4PTat16HAb23eXU6LFW56LGHLinjYvCTgRWyJA3Ve5fTxc3NhCnCwjEuBRYMAsL9i3DQm",
  "key31": "9qnGjq13BJFUpvkXJ9vKY63skLb7b9pEV1STJLvL9agcmcweuNp5YFn3Ke1EmgCQeW2FhW4kskEVAwHMEZj6Wox",
  "key32": "5oC8k9WRjg7VXU4RFmCQ7FH98vpKwMqq9HFXLd2Yo9b1wZV26NQj7aZL1QzgxuC6niStXuYPFn3KkpztgYN4NM1R",
  "key33": "51ySAsKuuR3emqQsjpTqUeJxSKFaLntvgtaDbURY7jdzRdmyoSrkNLc1UkZHpXygCesUz4Fe9zofDphMHVV5PXvv",
  "key34": "47WGLjX2TkVp8vj18fEH9fyJxUm8SjqqhhgjfXmE3YXpmUMBXDmyPiJhaz6xH4Ap24jQUvQKY25MVDK8Rkx9J6n9",
  "key35": "3KJBizhUdGLRfGRh62ZaDapCBrYvLyyzenwxvetk5iQcVYVuSPpgs21f2p6VG4NRbwBjMWzsZoncW366jmgw98JB",
  "key36": "65jnQkqVyi5NqdPtMCvqp1RCXq8hHAxBuvWzNkjzuXgKdGTSY9YuMD5BdcRDj4eJy31iFq6hFKnka6jKrLYHmGNH"
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
