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
    "3A1pmF8ueKeDeDTRGTH2ksqgxZ9wa5RiuLbRRMDRKyJH6QQ6Dh93CQqufqD4UYLxgw3JD9TbuJSmZUtWLccs4YpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469WtixvXKvTYqLdCu2K1YCfFaTAX2Um9Tu43sxti1LEqHvKtVKqTaHSPMGJzVPKvUhu7xPEnywmEPW2p5StfCvX",
  "key1": "5q1RKwyt42sRFgRME5jkVYUQgUoGqwJ8zEyvXocBFTzpf1u59JW5wN9JUPiHqqWcF9ZbeZabNbom22sqri4LcHmS",
  "key2": "5y5fwZDwTMd1SQfWuCwsFp3FcvA7kE12zVjuQo5Bh5mdVPcDaZ1pDiUo2Ax3u25qmMSqRVGdZjogx4URzuGQPREM",
  "key3": "4WQQcK94Bi9hLAxprqibJHcFe7G9yd5kuVck5K26NLvUwNmV22EpSpXP4ytJdMNhX7EHTaxSfxjC2EgwXiN4FBDX",
  "key4": "54suPQMHRwLGELw5ZUVpqhMb2odBTc2pa7pW8SF8g68bUQWBCfJ2iB5oQsbw3ow42ZfR3EUWo1gJENgpNe4sBHqA",
  "key5": "21g8a4gZjJjXLHzJdY5HSwkgJWqNeximRSBbMH4QZ1ZnTT6tV1kqu8VWURrz8SYzQBUPqTPW4ovR1ZhD7FvWLLRL",
  "key6": "5MgGYxp2oGHtgEgTmhWpbEw46rwodc4rWVuJzdWLDCchrFdwgsez6wKeqZzVdsL9JC7BeGcGDL8wiXez4dAh2abp",
  "key7": "241brH5TgBd2Pozo4xiMbuS5k3ZV3iaUHnQkRyUW5S5tS52qVxej7Qb7ZTT91BZWHAZbncijqBuVGH31BEb8npLs",
  "key8": "2RSTSNw8b2NSk5MCfv4JoWSD7vRWSurxfj4f7YhG5n2TBZ1Xe6XUm3nih81yymiL4XZ62AMP1UpKGhuhbqti74dW",
  "key9": "5MbENbFCgMyCYEwVPwextaNnJwnHhkajKxDxN65PmCZpfcm1krHdU2wgz94mgFhnxmwYwoPre8NqbEkqWJQjUfDe",
  "key10": "4wmU6aWVd1ZcyxQzJ6i7XXiRAPPyAMhyTn43Lpj1FKC6hn2r5y2YX8Bu5ax4S6iqET4GvoBrpmhtbAhb5wL2sgXt",
  "key11": "5zVFnJxx8BGYsj2hj4o16ASCyaaSSLyXsFgiAKHNS8PbJNbemqAggaip8gGgb3iYE2NjRS8hRwWTgVcmdyY8Ber1",
  "key12": "3UE6XZwDaXCiy9DaFGn4sgpDfr1WG7uC9p2Vko8WkK5kQQhKD5bCcmxxRHqEmVyNFJi5GYGuVFw2MjQAE6UrquHH",
  "key13": "2CZ9WMzkumeYKZsyn22vcJxJeQGtGN1hzwSoG98h6aRqPxf8iKu2oBbRHVzGWiunr4CvHibFNJFLQ9CwEFPph1Ga",
  "key14": "2Acvp27wJVtnFnY9pPVEMiCAcinhvfv6gBfKoif4G95qSNtEnhHQxyLHhHDHmToqdzbk6ZjdrmpcUPygiMNaxSYU",
  "key15": "4UpHbArihAMk22JQxUBKTr81mEE2qNknyV2zGuXcThZCyeYHQmv5BdpxvqiJ2CCHDHMT6E7jmbXn7kLqwN29HWXD",
  "key16": "4SGekhMfUt3795hH2tRkBeAocsBtu4hiN5a8nuGbuGqFdsdiKYesLSRcEAgcT9FpFiRKfrpxWuSpFAcRTPZkijgz",
  "key17": "3ymnAsCAC2Gcb6e43ScGRkuGpzQH3g5m49biy1y3a4ZspmjMceMTVkoebKGXwN43FQxttAe2S4occE1pqctd3aff",
  "key18": "3JZR1oEUGMsPeWq5TgnpvRursnUDsJYJb6m8LeNq5TEQcecMr5BiGdLwVDuDGk5DL7oUVThuh7qseraTzG5SVdxF",
  "key19": "5wixeQDGUMWasHyxpiXTdJT4EQgboGtaNuwPDav2BtHZCbkbJgY3TrTvLdUySWYhMhwfXnzkNpVduRLUZJW2Ft8U",
  "key20": "2umteW8ASsE2j6fy4LzdU2m1QnaFe8tMb1uMEL9E6CLbNW4ewHxApgixLw2HYnaovB91hcRQMkVMCwEy12vH8J3y",
  "key21": "4mpP2YyZ3G1ZcMJ73Z7vXsrwyZEBnoZe6MvhZ3upR2YDsps13jjk9ZDGBRLQSupuRssWQQdDonCxaU6QvpNcGeUQ",
  "key22": "jYzuAn6KqLWAo5sR8xd3Ncsq5sAGa5hGwQ8sSChC92rkxNqZwchAEMbxEaCpEk7vKBUGBj4XVtRMhYPenyFLGRF",
  "key23": "2PnCLKrskAqJqbXi5pBaDoaNTgV6MtfnG3R4EdMc9Xyhf9wJLNv4dCSNSarHHVkdPdtmS7GVTXgnm96jjnX68jLc",
  "key24": "5a5kzCs8LUzUofn7TxnqiQgKRNuAsbQQYGNKLU1daAshCHU1bgvvgV9ahjpwGJpehc62v8xrdcxptRXw8d6ctM3d",
  "key25": "phswv9kNbaEfsBRBBp39Q3tqicPjxt7pwGqug9ApfDuuggVHRZpnS8pPb8XGivygYsxgKhhzWP4MxcWZGcDUuys",
  "key26": "5n2kSeTs5pb7MQhLPu6T9uYkujJXndkLnq3hhn4q2VzEFCQuvaNpYxKCHe24p9Teuz4QKD8WfdZwJ1q15Qe86jgo",
  "key27": "32LrgXKGHAzh5M5dXM6ySpvQnzhqx18kzmq5c7jMV8QNVHjKiTcsZ3xM7FPRCKfsXKR594yNWa4hPURfo2FHXYmS",
  "key28": "2wyxRSnUEAbkX12zvbnssrtho3ofeQjcouyBFV5GyNi1xXD5tFsFdLczTbuQMA9mVBENib9QBPykcxKga5vwTb6K",
  "key29": "61QLBFyMkCLBmfsHHwfLXHkJB1uh5XzPUtyJok4kRomL1qUgvjFJLjRkQaD9rChJ656PE1xHSjgn15quu2tBj3Ah",
  "key30": "2bTK5mec5Y7FFFzwRSaqKdzWm6naZbrTofRNNVYg2HAYj5Sf8UuGFJwtr39aZ291LyeJkHMw7eAaqpMuhGGueqCd",
  "key31": "4TTBSwE96uaHVb3DCJ848DBzspunsifD1xkLWzDzwgMsWn4R2nNYCcy184Cef2ajiiMgFvT2Kp4bUuU36cDv9V9",
  "key32": "37EbEQFSK3p2Y12RyTdd3kBQuhUd1cKoPhDRvVL4igHMr4LVd8qd553faBmnZmefpZ7ggpWBvRHEw8EyD2WkcmpU",
  "key33": "2aZSKqRaE93Xj9ZLMWBd7ELaDB4zjPM3m8u8qPiyTE8ccdxEYSCdcgsMuP7nqJmffxHD7uF9z3CA3teykz6NJ3zE",
  "key34": "2Gd26xxnVJmbRi5c8HAhYQntYeVMs5mLht7JqNgTjJpdokDrmA49961b5odwnRBaDnTr8LovRqw3tAjXe9Bptofz",
  "key35": "483NNXmsXdJyS3xeSE9LNjtooyswzvzc5ke6xyWWNFhyXvQyzsp4aeqKscRhXWhxWo7CCG6oeBZhW3B6TK1UNttb",
  "key36": "4pGkh4ZgV58riZif14SvPjhw9zrRTBkcwMV3kSyp5DFYGQRdSJS6Mbsvtebk7j8Wsu8BtbqqKXipaCsBBh9mzidT",
  "key37": "4FeXs6qR6fr1bT6Et4EsTRRerArJAfLtqGF4PcoA1mggsK6RQsubSXPdRBqZ41UAzdCbVjqJmPQANm8sAuFfoEvv",
  "key38": "u2nF7dyXy4NbAMHqBRGrYut2V6D1ZYn4zjh2co4SRwixQ8xq3c8aZFbG4YV3a945PdisPJCTUw9jKwDrcFkHsoo",
  "key39": "3PGJaCtA7nMCnJrzoBpAVgyZC36dG7ssmLKhy45D4zj1ftqDfftJC843M9BtTkEpQjpCKGuY939vkvYBkbEvfJNp",
  "key40": "3p96HVbJfyG1Siy836eQuU48ZoMQL1DRdFkzpzonHEvTGhEwhcXY3UArbCjFv4Az3pkMZ95W8b6YLJjK3bJ2MY88",
  "key41": "59NeDHKB5vM1w7erZVX6UiEJ81EefRcSeYLRvHxTK5W7U5d7c2WNvse9YZWJJF52sJfLwmZw5oQNfN1cnwUaeyE9",
  "key42": "3SuDkJSvEHa26D9Gg1qHQtqwDMMRtBHSNSzyzsAhsTo7VQfy3sRNW6FzXpZZag419LdL2XBH3sWnFMZ3SMHfZ4wr",
  "key43": "QdgAsaj8EMdsw7VmNSxVQ2HPpZUo3KQvgxPheg2tXNUa1xaZbkBeAPXFsG1rKUES4whfXphaSJva8RDpoLEyHxT",
  "key44": "2yADKLQ4y1Geo2asNygv9hVJMksTePFx8RoEw1CVfYYnQ7TSQ21nurnMcDjiR91zQxaGR4JYtxqZpWDV88j86xxB",
  "key45": "2BATmJHGrcokiLMmzGARU6d6MHktSVKMWD4ugFpPHYfgpy3fixEku7spgCius3DXzhZqZv8q3xvnrkkh1mfZHpQM",
  "key46": "2e27DEfqXRCmkNDTbCzqZHxmq3xkLkPq6iAM8PtAAtV9q543BDeLTM6gkVVnE27dcwPx8P6W3eDxrkw6CEBcr7ia"
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
