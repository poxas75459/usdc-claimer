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
    "5fgStZimctmWabUhrcPBUQq2ks9ez8qH63BcHDsjuyTMBDMRWRZLSX5Y1XdAiU28JqjV4qJkxggYv86JaGcHeNJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVjgKN3ja6HM5JThi6VVd7sCkStGD13Yk7vSQ4ZoJoyC2rDdRZaFNGfZRnujJhbkrR1N1NJnYSBNpNsKrL5emQk",
  "key1": "5HVPipxfQ4C7eJyQ51fZ4MqtiQMmTzQEknPPs28CuhChett6vnrbbpYrTUxX5qzNxyKrKCUbafjEXYDmWFUpDGS6",
  "key2": "653RfVN7TKkQVWbHwDjWwEgRiujudpkt8zqD39gCD7qv5vpfnBP17SbK1odUVZJsYGj89EkTpJ1btLRLEwtkfann",
  "key3": "5QR9QxDBdEQyVNHgUVgZiw75jKnFX5Eknojrwk1JadMZT3aW2714ABzeUtjWqdhoboCMdfFGjdj6SVyeUL23ZiyF",
  "key4": "2KeVdUbF4fh2gjq1gEHqScfHiytFrrPp9NimiadwRR5NpnNTMZo2zKtE4J39FtNVucAkz8EEvxB3bDLxApmxgfXa",
  "key5": "5it8DAFZ918uaRWS38HM4XPzFUat19dDLv8CWAZuyu71WiKrMfW9wF1JW61YvSTu3pEocFx5xxAS6h7S477DyEGb",
  "key6": "NCKwEiSnvoBiiiLkpotBEKqFhTLA6RgCpPBXFZYVitDjjP7DNRBa3e475vxeNvxv6em8sGLeCkoXFJVGPRggTsk",
  "key7": "5sW3aAhjwtPE7CwA3SaSfBq9NNiyKGht99M6X8c4J5XQcc6UPb8WsDZF4S6ScLvZUSeF35cdnxmDTfABw9RuECkR",
  "key8": "2T5chbtRZJmvUyyR8cmXSFS7GcLm9wFxh7AjbuSMdzYQukCoFBPmNayqgLt39xSBV9Axf2shzZEzbprcRYXq2sZg",
  "key9": "4PhVCLSb9GEoBpng59d7Tyyf9X2K4LcaeSeJpTBByQReQsk1RFPPPVoamEWjYnc1AEcKPr2UiSKK34DbcrJgZ4dy",
  "key10": "iqrrL9bwakhM6A2U3bdYNwecK75m5mFvczzZ3VWMTdabhrcVnSo5r2ZMheVxcEEQtxQgNmBeWE52QRX9k1YLVRK",
  "key11": "5CJWQ1YYuve4LnbkUrSKmA6gAuffHbRshU2JDfiJGJJp1k7ZSKEgzs9zRyUZCdwwYYCqejFjdjpuYGAUk5BYstbp",
  "key12": "4ZHp8SKwMr7yZJc2UWtbb6FjCMfETHqibx9H75JT86gUmk2pQLEkv8xpDBUu9hZKBKraEf1s8uBMZpX1zVkUgsTB",
  "key13": "4ysU1KmjihBEanU13416iFn4Rp2H5DCW3zucBGbgsGQoipewB2HMmoEZMVpCfVNK9JXoHqR1adoeW99zLpDHUf4D",
  "key14": "QPu8a1kuJ6CRtQRreitFH5L4bsvBobxbytFbtd9EGSA1i3BPFHbqUqm7hxBpdRsGCeoZxHw9TEptk6KvPJkQSGN",
  "key15": "9xmbHUD18AjpM3MMEo1dr8fyZeccdEmdW54euG83TYeefsq9BYTpdjqqdJQEg5b23SdkZEdCPKisWE9waCaBgzi",
  "key16": "nHEXiw2KRvbUN5qPeSfmTz3iSibAEd9dfjBpHHjt9Y9Uf2uFpnAQHHbViRnoe6iReZR9rM2vv2wPBi7c4cN9HWC",
  "key17": "2eboNqccKrXZ2UjSUNksgHb4e2ky9BntKny6cqeHCZMeeS9DiuMYY4jxyKBnezq3vd8ysP6QqvXry5F99u22ENLb",
  "key18": "2nJZ87qwFprLszhBvhHGWMfbNFugB91QLMvC83oXzdzPmmWdPsaMVc8R1WfC4oAjH6qvh9mQ99znUxcojKixkjmm",
  "key19": "5oeVGNHCNijweTTqvmdBDDuTbjxGJrFgp323T48ssvgSPLGuerxX8nwkimESXdzB1h2sHNmCSQfcowzahjxtFvLS",
  "key20": "5eyrQDDTwruJsAsAuxq5Ln5Wv92SnhhcueerhFQ2j3KJFUgQABXQCsnpyHQMMm3Rk9QfcJrxFu8k2teN5LdHmnSp",
  "key21": "5wWueygapL2rGM46ngvd5FgKV72ZMY34caPizsau2yfoXQ6QeRaBRCECH9f1sJ2Zv79juPwu2Qs3cqn2oj6gaKiS",
  "key22": "5Wy2PKktKd27wJkSbq52tgQRnoiTu4mpZRKKjkWotsf7c4v9bzZ59ZAcaVVgDnEKoNnMVdJ7HWDB8yUM4ogBbvPx",
  "key23": "5z7tXvHHAeNabZ8hEFUGvDZdtc33quWE2GJ3Hgn2y8EpXrrXVWhZuMSAdXPrm2XZJ966cYU96z1DgZY7FrcJuV1d",
  "key24": "5UR1y3vdo15yE5TAsFcho8PB21tUudgrSw48UEjRhw9XUDHBws83QXDHWUnSpiVpZ94AinDpVzH73FBW5r7K7GbW",
  "key25": "5LccesfzsFhAEmPb7e2aFHScuMjYrjF8jLZ3XoeTaiSbFkX7s3wjEtYsUdQzVSwE6h5nR3EVyZhWmVHaiJNteyyH",
  "key26": "T6Bw5qKENadox9uCRkskk9hQeCBzgypnbCANZ2usErQZNyfozsYPsXFbw1tJDyntGtrMMQc6fmhk4n3aJPfj8hr",
  "key27": "52ncfpoCZVaeYF1XfpFy6C6ZCCmVsaHj51JbbovXcGwKFXYqh1PWaGWpR8UjjVTsEJcRzX3Ew46wJh458pb4sWuP",
  "key28": "3n4R5o6LoEmymPEAeuNuSNFERCg44dCELtctreDoKgbWFXUJMqhGu1fw1A72jtQjdAAYr9kEmp8tGySLzMdyronh",
  "key29": "2A6Z6uLL8d5CVZm9hzycCDKQa7dBFGDNm8bpGoZWJ8n6rwDryDGnuXYSwp48Nd49b3FR1SwVYqbLHUZHbBBGGJS4",
  "key30": "5dTT5Apuf5jpNJTwGFm1oPZEGNHDPjx9M3AY8KJhts5nkqT8ZHBksUPR3ci4LxdgGzS7qZ7Hkw8FgoGZXu3kpR1V",
  "key31": "3p5FU6DqPQURrh79p33ANmSq9qGe7aS6ADLxKV1LnUQQmfbLKcS1n1ciZ2LrJukTRdakJFLLndWUdNydGedrLcCX",
  "key32": "5k3a6CfqhxffcjYtzg85dN6UZzrV6uuP1Czbcx3BN6KPkY9C4XSLZKeAuWqLmLuMADP7TSE9zgfWNnRmVPg3HHjX",
  "key33": "4vC8d1v4qXw3oTkb3FMuCjd7pMA54tvWr9AhmL5u2JGHxt1tyEMCJN4PrkkX6UwXdQ1RESHRQnceRh1VnNr8BDBp",
  "key34": "3cSVnuVUHzHVQxEHx5UVFB3XzxL62bCGzKHHJHRMTMhgvK2v3uNeHqcEKobZnMRV2SgtCyzPzZ51yPt7ZiL9vdHg",
  "key35": "2YiK4KAV3eBxFn6Zo9qWbnNJqP2zRoxj6Ywp2dCtb2mFbDSyYzRtB5HK95s2ehvhckPUJ6Qb2UBEHgqEkcdC2jka",
  "key36": "3GKfJFW1PMKCxfh97bWvRaiojLM18YXTypTCjmjeM2qfYcBkqiKeRTTabxG5v4z8vGAytCg4YuLfspmAGd4mzwTb",
  "key37": "51bxoso5nnQdBhhnsadxcxRj5p1cPtkncZzsybY3QvDKJaZsQ3VAyMYd1eZWBSynwzRGcexQQUZzCyTcht8UEJ7D",
  "key38": "yYuhL2VYQbYYMr2oM7SchHqBdgkYGXmXdyKG7w7c9Uvpbh266qki2FFTLbviTZofWJofEmCQN9q6WcW3wWeGDiL",
  "key39": "23khepYib2YjYV5T6q42eFEYu8gYp7JnaHdt7h2SiWZ3cSCY8yafFqPLH4g8SKSinCC2S5hFipTn1jFswxHAmvAc",
  "key40": "5WpV84cB6pefNBswYtwRiMcgHA5rALLyhv7yQ3jqYVCivcRQy6fb8Vy9JfFaXhoSuW5NrYtaCUcfUo3HkEMPzvCZ",
  "key41": "5q2BdMVgSNSKGEgdKrTqJmPyFamHMRZUzeeE8vLr7Wi3z2APFgMzYnfHaATQwS8HDjAUFcLvodaqoWVRgLnDdVZY",
  "key42": "241xnAhVLx2A6k3mctgVuuFWZehBYEUBgEtS1T48tzYDcoUvg88oQHrDTFeYwyMvzshXnc62bhsA75a13QAmRKLM",
  "key43": "MZs3rPz19UAVEDX3nmhkcozCx62bpinp2FSd1DriV8gab6qs4GgPzYUTkyyy32AzoAr6CJ4qixXE7M6fzGEY6Ey",
  "key44": "21BF8uAZmUFySrsxRnnVvuUBfRvodBTYWYqS1P9Sy8WMhcL6EbCqVXghrXRFdP21EJQfKv9ZZzkky7xgiS5x2xLm",
  "key45": "5LmH4YyxQn8nptMAhyBNYm2FvXrarjMmDfX5vWGGdobQ6xC3WdH7kSRouTbrdcdbNoyJJTB2oycaticFtjJaPEjQ",
  "key46": "fMFw6Z718wuVJCWxfq4AJjoPUn6Q45Mp2nzaTBZGnnNX2GSFg67XN1xgZo8e2TVhBhYjqqcA6dmh9BjFWzCK2Dz",
  "key47": "2gNcGjSN8pugMoumFK6dVmiUKfX7rd9Dhjxbsnyv4V57uveAbnNsWcS7op6zSeA5f8pbvNoA7p9e4ey5iMV2FPZg",
  "key48": "2HU3TsmhK1SkDdVzEsN8P64B5oWjy87eWSSHUuvcrkRMc5tnNPbU51JLrqHWigDp6JyxmV8xBwvEiwNNXAFDhwaX"
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
