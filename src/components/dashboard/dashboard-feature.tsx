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
    "57xJstmd2V8b9PkoJEPqHqF3kbE8EGzLgyooC55NNkcGgEMS4DEHXVfHWr2nbvwL45g4PxSXB34CEGSLdKH7CSxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rfRmidefRWdEfDyTUfJ34rnVWGv7VZMiFbnADQF7Eqg5knuKCVtYYotPoKbUAVxFkX8WmgSoB7a7MFtAwwxGiC",
  "key1": "4gVKHwpq61EacAvskvho3VAYPRawPDNasCo1zPZyj1ivEBL1zRnucjJLF3xumz4y6m86PwRgNTdJv3ahPHAtBMZc",
  "key2": "4u2XGXPHhGWhZc81PxEdddaWP3LiyowfBAr4mixYxy1fzvS5PGJjQnpgmTsMyyCaPxa2PkEorUga4sULUdrrVCW2",
  "key3": "27oJToegXxs6QuDnTqgktt5F7qhs4bSPqfDTnGzuuLFw5AgWbqs3tAE67vhtXz35thAj5sSqA9zS6YTHJTkvFXfs",
  "key4": "46tEuXCP1VbiZmvDaDHztVoQyPNiBiFZqxC4vFVmAuz2NP6QNPkquX5gdnTdLHZ4P1RpnGrMXjo7QmoMdcYt8LLS",
  "key5": "5P2Z9GByYkKbs5iF1LiLSLGBrDMaY1xfV8yQV4c9kiZR4dpfVkDndM6oM1zLkF2Esb6ocUqzBvynpEHH7yhDXoFd",
  "key6": "3WdvCkhVvo823cqEvR3voVuByUmtoXDvdd1pFitpNFDjGVE9p72pL8XzjnkDYhH4A8YGBeqG1dU8KCgEnpiR4SEi",
  "key7": "3iPfmvm2Smfa3Qb8KvxibT3e2dqvqBSEodjrxbigvVoEAsZVXz14vJY4iGpEvjChsJfjzJGfw6boRSHmYAPM5tab",
  "key8": "4rLa7ESSDrAswoq4FawqaMRGKCmxFYku8tZnV1trbMcM6SkpU2jEv6HVVpxh2FmaHNgRt1aS2PteLjtWEjvqSpcg",
  "key9": "34gqhcW5B71MkxL7jieaskaxUh17HaHgXiUqRUTaiqAtkSbNLCqyig95yKS2gods7gAEFB3rhTrSWQaCHTotSKYZ",
  "key10": "5BPZxnVY2wxiEgJGFoM7VMxqxJpnndAgCYtSqM99bMDrEcVxzPKivrKL4oUmjUGy9D2CUqhb8754Dq9zwFg3myo7",
  "key11": "5Hd1eumtzTr4RrQ4F7hHvJ1oU3Ba1B5aaKMNnTAibYvyjyydbvgN6fuzdb2AKCHHBjYB448Qx9x6H8PG5bYTUW9s",
  "key12": "31gxkU4P3P8g6hheZFkSrvgWzWcb5BCxV7CCu6kdjict2wNC7XWM1ysXhMBhpnbVccN39qewcycCubCNUkH2L1DJ",
  "key13": "4x6XHTDGidJLbsdR9XXnmFPzzqyuRqH4scj2gqFYfQq3AzTdbDsorQc925fu2R6zbNZr88sF5vPWDHk73Bp3zqaF",
  "key14": "2rmZ6PNJqtuE6fZDJr43i75hcWr96Z5FspBawfBExC6zf4VQNTigQCKzvNfLRwfAygJZNf9zrDtEb6AXkQDe937w",
  "key15": "obVY9HQ7JHSw5MwC61Pm1guN6VDLLtT6hE2asSDQEB12w88et337ysuWAQFzWZM4LKzQqJQQx8644e3MEbQKaDE",
  "key16": "5UZvyEK1oZkfqmkNYDLxQw995CJYmKnzztsHhcw23mT7571188auLsfMgCSUy4VWNbbFdcEQoSKzqC5JrbAPYsa6",
  "key17": "2DK2FbpMVCvsnTGS2pSQbWRL67wi4ZF9LQa2JcstbHXJ2gB8ZdPezJ8CE3cu4uGDrRXpEJfSMYFNzaZmmRLS35Pi",
  "key18": "2yLM4kbzmpyHhyg8gMLvYFLCshMonGkZ2NKvwFqUruterEhcAtx8raR4RjiCMpLFoqECguvj8cFuMmJaBunYmei",
  "key19": "33CnHgKLM4NerqzgMPGQZTvU4YfcwxneZUQfVYtikVV124Nd9T1MpiSiDmgVxKzSWJuauEELJ5rYgWqVUALr1NVd",
  "key20": "Kwi3jVCR2fLkj56GS2eSMjFq57DYN7QZwduuXU5AUEcct1Nx74cA4uEUqaNoazkBdx9c4oZBPPVS96QxWxHgM2q",
  "key21": "35brPkKQKaPr7uw3Vg3Etur8qgwKyQz7tQ5ewR5gdbHQ8Ei94TqYnLQBWyiHpHWGZZsypKPnsiFMnLEKYY7wD8WT",
  "key22": "2HaMW4okCKJ7pdFs86BX3RkLzrnezdoeWRcRsnZUCPFwnJqTmFTSPLnbp4t3CmoxhvJdae4mcefLSDCjAw3D7mpg",
  "key23": "U9o7kUJVx9izgmaZ7Ggsyg6xKLtNDf4ibgrjBAJ2gZKNNHEt47gQVUMRZetHm9MvCGwTEwk1UtCSB1WkJtMuUAw",
  "key24": "47z37HBuouvpr2qSAi2vAYE3TpTGqfu5oE1jS8jd8oxN4nzkp2AWVuGRZFYEm89X9R5WA2EL4gHjAZqFV5eLLpt4",
  "key25": "4wLUEPRfHAhf5b928nXcCsAMjRrkcZzLKYe3rNHzSnLysPVwSwM74ddkPw4KytyFcNZtkE4z77ode6Yf9G9YMqua",
  "key26": "5TWnL6LjMi7WVn78ysvj1n7bs9xH4TiGwu4rqZ1i1c5HLA2sFrExNoFUjWia3fbFLseKxXnQP11D1gG6xhc1QDuW",
  "key27": "4iYN2q58KLHvS85bzsieFvsA5miXfDZPna4uxcqaNbYPC55DguLVbHySYStrW8dcq3gEycEEX1SpdTbos6N7Jtde",
  "key28": "TzP3crjKxzi1Xj21yzBt8neHbFGeKopQn8hQGpTbBcDssNLfFaFS2tagkfQRrgiAPTfianTXQcgkdKYq46NJ7eC",
  "key29": "2rxf5Nmed9h7C2PSKmWSoNh9XyqpBhBvvc8HodWqNHSghjG278HcgVW9HYoH4zEkcDCWp2TLAVTPG2Tn4RUottdB",
  "key30": "2iaoMZNgw6c9XKay57sQ4kU7L37ATyWoF4oUhKgdcCzyvGkcoAHf9Fustp5EWXfxh5yoNvnwTv7V3yLMHL5gXzkg",
  "key31": "V8rSggfr3kNq5YhaiUEncSmzHNGdSiiJEGuUusjs2JpvHkshsv9dNSshq7qn6CMHmwHtFcgkXbkCmnTuWPCywtB",
  "key32": "4B4RFHf1ZcKHXzXPF3WBVdWm9LG2h9gviLDr4Nkg6XUynb6kbhSFKDLsQeVoYs19tMMpyFVsMW1ExEEskCWJTKjT",
  "key33": "toKU1L6YupnkE737PNsx2jgydUta4MSrDN5fktpSJT1LEALvVjAthYh1t8Xc42dzoCjLNphXzzJmxur3M22XXnd",
  "key34": "HjnbB7TSHuT4eXy6eNHiCUE2N6yMyVzYNNPwsud2zPMScqrGMw3QBS5M94yFrtYC9rZ5zjhMzSejZmrZqvbwzR3",
  "key35": "5NQyYu71tmrwARseAUWg8oPMSZgGz1HmaqgYLxGcpnJW2ckyA1fYCjLuKRZVV4ps68xPsUR7UKmx8rKuGhZQJSiQ",
  "key36": "2XdXx2R1eiRCRBJy6qQ2g6dhdyZ8pKRTiJFziPxKt3KVgxZfyTvXTVwxbTHP3vzUbKT6hZuh1JnRJY1DmeGuDUk9",
  "key37": "5cvXzf8V3SS5M7j4zqak5ofSjBAfpx4smD8vjvg59ErrSex2WeMSxHepj2pPiNRN4x3Jd6NPY75cQj8LfsRwqf54",
  "key38": "5L92X7PSN1n4Wpa2vQZBRFR2Xcue5U7D12QpNpFd7GDr2pVoHJYVQSt4Ldq9Vdu14g1DzdecnAqzc4mmJLSRUSmJ",
  "key39": "43NrKFRoJC6Z1dUhsKQzKuJqCw2FmZGhmzvtuyYFt1eNB2eyWqDrEQmFBGMSN8kATT2z7Re5DS96K9W2bmBcuJEq",
  "key40": "2yrVrGKvkRbxoiG7Hffb8zrv5j2EGH6PY3cvMjG9CeF5Yg5R9kBEvfiiiEcWRNXVATXKNxV7hAQ7p7oeZmvZFEyK",
  "key41": "5jL61hR95k7ezW9hXZ4TZ9m9AGeX1bRz71KS7HDZQ4VrB4U8bjH1YvLcGKK9vgkMkz1sNcqnCzpSm2cTZEHd3BBA",
  "key42": "4d1Lqe8tdGG15dh9Pppcxt8Ev8oAjQD5k3uUkD5Dt8MCdrbMfuFKgDUSdNMg42hPgeeunhNshf2vJzePGew5VRgf",
  "key43": "5efHXLTCxKndDMeBe8e7K3mz9TyZBXwCGzGhzkQG4ybGxAUjzYtWxtE3gTjd3mcM2pRbmCd6und6o7tBiJMEFpqJ",
  "key44": "3WCpjaoZhkeATh7JvZ6k3mH6uRGkFFYRaZcW1D92CDMv1N5dieUgCJkBZbXXMW9gL95HnJHXDfsu2fuCqe9rg6wZ",
  "key45": "pDJdwGmvD8T3sYzg9UHfT2aU5xPVANmdgpeTgXzg7S5J7s29oM4W5TDQUP2V6vUtfZX93oEdGpWp88FAGWKxdTt"
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
