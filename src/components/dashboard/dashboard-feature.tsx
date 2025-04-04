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
    "5Bzo9872wYzLCHjKPmc4whnzrcn4fK6YS1uVHRbWhqN5qKKN6rPviohwNeFHaCdpm9AaLDK4T4V6ihW6hYzgyoGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzryGzL4tAtUjNWt6aDctPKH46DP2JLqtKmP2jYFewTpaoy8fYTLpPZvunHwRSGkpsMtF1iVNFeULBm12Cdy1PD",
  "key1": "3K5WbZ9acqYTCkKhDMhM7grA6C6vJxhEmHPWxg6Z619hxe5FR9srSf16SktYkLnXa6EVBZwjghnzVkgRSeBtTjp1",
  "key2": "ay6SzKA4xi7oyW27DrMeCBUdUNQxRo3729FZBGzDS3aF5yBuC4D5hPjjbYevyfcGcnJ5tmUGjqjYdaro3UZWjuK",
  "key3": "ou5h4vjAGdXKgui6jDQbxJ7TeU1p1uvPBYf6Pha66AJDg6C9Y3uZ92jX7VwSr7Kt6R6312H7PxyJsc7aC6WppRY",
  "key4": "2Z2Dq2cyBpuPbnMi9yJ4SUFbL7wRUQkvpMpVaUj7DrVDJ7nqaHv2r2yjArCGynXRbgutJaozyaWDGjoT3BBTTNEs",
  "key5": "4exXeaaoxeDNwgJcyDHSZagAvgQUfhHu3CViNXcyVuyASw9CesgDeqwQrsrjm3SRtrM5BsDKhJFSDBbRjZrnQq8s",
  "key6": "4pWS1PABqXuZB2tUtMHeGr3jibH86Jn9nTvasUHGUQMnYiDFbjLgENJRGZbCkWhR2NPeS4iEsG2EnpovaQdC87xq",
  "key7": "dvDt1t2zbxb7BsXFY5kEfshE5NpgATZzPKRMN7k7VeZLg8F14JU2NkFWE2EnT28xrBTBWcYz6K6fV439cQeKjnB",
  "key8": "5ioVrF38xisG9eCGoM2T6LRceCKsgyUG7t1myGiD851B4yJrvXjK2uwRYSxb9oy5jG15zCMHysm85YrUmJCQ8oF",
  "key9": "5DkAVJMtqiUxGKMPNfgyEPotsu3niDC6cChmo3p8kX1K1tm7icRrY8YFTpUfufRfKSzC2s2ypsXTiHrM7Q9YdBTa",
  "key10": "4FxoFe4NeDxHmHhug5axAzAMd7nx6GMjnBYvK7s6kxMDR2hjSsirk7Lq4ZrnZmvr2VZCMP65x5LkXQo7Jj9tPErd",
  "key11": "5MsFJTVa391uMTFk2rrXLJYZxgfnkNoj7ntAAUhRjQGp97dvYC3vgPhEKUywMWZBVKJjfraQR318o3gYWeUFmP44",
  "key12": "2q5Swo9rnuBJ9ii5UsE7bTKSERah37tibhYZj9TxkQcoY4cEQBPWWcuAnJDKkqJbNCQS5gXwTVsevtQcqiKurygx",
  "key13": "4Zn4Eje6u9QU7uHAGHJYcXAnRgJNM32ikF2pdgZcDHmAnuJHxTGRr9AiCFcduYmAPQT9tpYfTMyxsquAa53aqQiF",
  "key14": "4upWJYFaoY3pXE3Pgw3eFqzmvfndwN3KQBCRynfQdJ15nfBeyhj4Sujcv8Kfq2YcdEBcnshTnXuEL9gTCbAcMDMB",
  "key15": "7WASMxHSTXbyzZ3PRtyycbEJfPKeYtBvQm1hfjVeSHHiZjvGvfVJ19xTs7GAKP5V4aCpj2QEousRo7WUVkv8VZY",
  "key16": "2SQjG7s95y9JQpMeKoqRGcUWrfEctMNgkRdLHXHVb7E3nGK6myr36KTqmbjo7Pd5XCbH1bUzpWvYDJZdTgsS9mLa",
  "key17": "4rMyKoXoitiVctxYZNLmfdJc8rumhR96mtarRqDJAEbUDR1BJ4DYSMaCo6RjoybaFA1zuuwZ45oomg6iaqDFPZmF",
  "key18": "u8m43gDrPWzMafAAYYAKPq1cEwrQtnaBe686xBR721myJD2uAMnGoofHMmTiKkTFGW1a9Xm9SW5dahu82PZ21GV",
  "key19": "4iuqUQfDzRpXSMfXY8ShcdufsYtyxGqCeysLdB9Vk4FREP5GLJpTpXgi7DzQw3eFiqSEjNjFep2J5mp299mWhyEQ",
  "key20": "3qztRVacrVwaLHtwVfGtSGaTxZc5E23bCg4JtbKLoMvYtLyyZ6ofwz9yLpwMW6vF574tC4uvfeop5AzTQrpjpckD",
  "key21": "4Spy5Zskj7JgbUxCAaozdb7zeQUu9MhjUmAsAjtMumTLVYH4G7nTVBmixMxPm7sUR451YsauGF7wHTLoJxKpycB6",
  "key22": "34VYHmUWm6K9fmgnumzqW9K6yfF6k3hZZL7JFTGpqHveoVbjSPSbs56NqW94c1rPrHpjqD5ZUC8Qofmko3mhAxWm",
  "key23": "4ezrcSH2hSdSmpeSMFbKcLrxwbagMCoc6dVX3Jrhfaf8qfv5F2WVZJB77PmvCEyCY3stdndnaxMdecLHhXrmdieB",
  "key24": "4czXFcZcBSsKHg1XJpVn9RVDQCGonBNcTNPcd6A7eutQER17vPCu13AporrFytbBfDZhV4hbwVDeVaggdbh3GwCH",
  "key25": "4f3xxh2D9c68v3ezddfhhdggPveHU1fFD5yR8HMSgDvBsYoEHzoTtcCjYB3bvnEcqNuzr2Nx6VTfJtb9kwd1hr8p",
  "key26": "4YuML9RTWwoVHrWDsndHTci9VsFP3TVNXV1D1V81ART6i57mhoCEp5hL7KfvoPSAVgbstXP5KxrVJSHLsjFncsxn",
  "key27": "3n8AJhrApG2y2pUnVLiyc5X7qm34yj2b92L3adv7pAMd2VsSSL7T2B1H7uCE3PZdNY7375tqbh3zjRjst3PXCQdW",
  "key28": "QcBSYsg87qrPGWZdJZeNUpGfbnwyenJXNuombioLQCvtU1iM2cxcKCvfd6nP2QBwiD4t6XP3HXD72FrK1ZGYecb",
  "key29": "53QXreGCceaSzw62oxkjs4GGRG5h5uEiCgWvwbg7G6S14xtrHa9wTZ812XD9tdpnA2hFZxwDW9p5NASsoYz1PLoh",
  "key30": "yXfQcRnAMuQh5hQUqTv4DRu4skeUi67Q5wna9RQpXBzjaK9RDmTYn5U5MWFRr7rmddi35fDA6ivxd223PRhsAeV",
  "key31": "2wpmdbKtCyQX6xrUNdSjvAvJnBwpWpCVfYbNWyksPki5LJJVuVEnB7VsF5JuPA71CrXWUEsC5ADDqmCJenCunoTq",
  "key32": "2tkyRAdSfgEi1JynxmyQnUPPFZARzS59gJVVNxLYDaNvQLpKV9h17s9CzSvU5J7cSYqbZgp3WmRwvxQRwDAzvAiA",
  "key33": "5uBELkaT19obahVYC4YHvF2X2aBfgWezem6MnLGKhyWAQRaPuqh1sjTxpZNBEkgk64HWzLt7ojYp8eeeRh4RZdX4",
  "key34": "2eJ5KzVmSnFLuYgt59LyHTdX77ycMnGvkPZUKSMidCpQT1ZZ8zPrByoz8Jok4ETftNxBNh2AdQ883aiPyooQ2yAR",
  "key35": "24Bk4jZmLn1HPZJB1oPCYP7PUULCCQ4BJ2TxLFyMakVR8gYHFv8jDV8CVxrTk4Ps3FUwvTgDjrLnKTpkM5YivaxS",
  "key36": "d4LbiCpRCyizpiBVKU3Gvm8xiBgtAhTv8D7KNZ6y1d92VTRfWxH7USVp16aBrSw3LphngubacTNDHYQ3fSm7wk3",
  "key37": "5ypSXyFbMyc2dcVVohS2nZB2mTxhLkoBCnJKUM7uKfC8iv53CDZDW8iYtxuuXro9foMS62SLgPq3dJPRddDzhbRb",
  "key38": "KqbCXrF7dzu5i3Zs9Ps4CfQCRSAPzuxaJXseyhrJJ21kHSaUh3CfZYrwbsnvmCTEznrboyws7jrq7psX5Et7iGJ",
  "key39": "4V1fsEz9vkBkogw9woNZLSNDZYewuHov66JYkMHBP26yPVVyupeq3QxYZioJrM5PFskZzvg4xoNptoczPMJkpV5p",
  "key40": "FBxgbCYJNvuLA7FoTPhWJsJUmpCQVok1jKtrREyUPEzdv6QTcXnrdHQMHr1SvXh4R62CHTxgxSBnreXnuAncCiH",
  "key41": "4gNSxKzpJgtoBhLtuvmJRWBh6UGjJSmpHeaaXngGVtrUNQnPsqd2BbNTAHuq89VkTZQ6KdxpSnVMtSFKv7Ammqa3",
  "key42": "56beWmGBMQoj5kRrTxcKh55Y6fJFabrBDDCJoPuMjgYwogGAhNTfhdp1sd7i491TUW7QUPn1r2oUTRBAsoZNnqG7",
  "key43": "51Ld2FheDobVjtYjN84MbLjHZmMnMc3JEHbS9N3EVb9xTPb9hD1rkCBdrMuSW3w2Y3Jpe3MmXaExxXiGAfgsLGzZ",
  "key44": "2Uyp2NS7xFJmEDaSJmVyaZ59fxy2UNkptR65ZVr83KiCCLfmQxtHYqWHJ1JstaHjheZFYMK99Kr5tFZ9nUDhQq9A"
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
