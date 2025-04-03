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
    "3UX38cZut6aeKFoSzbvqvQTuKuTZv98KDR9gApdz44bYfAEEwiULAjAb6oam4ft8gb6g9Q6UgQLsgkQuhFzGQjvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KcaxiBVvusPePiyiHbVsospAV6AwD3HekS3MTjM7PuAm5rq1Kd3mnHfmAxcYK3JXEc4rMc7r1y4JSGsUydz5W12",
  "key1": "3HLnQxqzyavdaoPMTiVhe8ixFE46dX3uQjjQD2QS9P7ZTZyqRsTvoNk7wC2MgSPv9c3kifaPN2BnAZCe6FHSjMAe",
  "key2": "3WJn2kFu23rmC2GnwuU5jwovabdwfy6HEv7HYGKbvGU4WLKp5SpWDddkRuNz2MhftjXhXhNVfNnbWLtcbSwkP8ZP",
  "key3": "5hT6PeuqWXbUsKBCRo3mxWgh9pnrBto1efRFdpo1QbDHN7uZdRpV5ipRritQJgsgqdN2YFBy9YmfnBEkAJS5c3s7",
  "key4": "5eR1fMgvvvAHGQfeaLM5nEyKiXTYSfMqW37v6nW7pESU5TwLtkfRx7noWRDyddEpGyFMBn2ZXyQScxKi5u63cYau",
  "key5": "5ZpQBbH6gswhvJUPb2YgqDNyYDixugKX1LiKkPVkfwwcNniR6u1V4hxtTgWqZuuzxG9c4UJAMRn8qQwzhg2V6WPH",
  "key6": "5sLSgFFtn4FVvHHwWTv69RrsMtaGxYR7scwQ81NnC9Sbq3kx1pPkTEGSycfDorUmHQ6GAdktAvLqUVq9mavGSv47",
  "key7": "5aSm1TAxtWC1V5BWGd9mihNTXZWzfnqMjokQ8c9692VVAfERLE75jybiGot436DV4AYoTYhBxwka5knhcbF8U9Kb",
  "key8": "28hqdYaPcfJfXy158kgxQuS4cmTkt9eUZT2hf3S7BwUgZk3iYaURQPsTQ3yryr2xeViEYbym9hX4H7e1wxNTHq9r",
  "key9": "4LWRRxv7DTQUNb2Beq99HFeHnuBd9UWD6nQ5PzJADSv5k1koJ7NpLr9WQR3tAXfkg1znpGFfE1UaVWyYTv8oDqo8",
  "key10": "42cL4Rgd99UWs8uurvs7L1zG5LtNftmX1KU37n6j5edFj6pGbXaMiLbCxZpCen29VD25YhCKtkj8nZg5k6okFdeK",
  "key11": "5pqGEsowvHUbL5thpBrTQxYdatsqf5FL73GbDVjrnEXn7nQGpSZbNMjwV2Zr6txvJ9DCTa8TNjBFFcR11K9QeLKw",
  "key12": "3rY7DoQGXT2RcsXko6BAggD34VCh33dkU8Wfqw5K7WCeGhPiBNpJc7uj7qaqQfJJRNfxEbhJ6cF1b18RpBeUU25f",
  "key13": "4oeeGzyLX3BBZ6XTmuNyiepcJA7qAEXbjijNr4wyLn6GoTuatXGW6cBiXB1cbN59GwseC28uvKLtjMVHKMm8nXZZ",
  "key14": "65LMaE9pAxBJypqDEtkB5HwtoyamH4mHmMYDAuABbgzuqNXz86aXBNtAv4ziJSMrmHxBi7FXtUzGvvmFrw2VcRM",
  "key15": "C8pw2SLf2cBWGe4J4ovZyALhVewMKWvFs64AHPUHiedrEkutohdCrLmzYPzmH3ZBXWUPRgJEg79iBwBRvfexTT4",
  "key16": "286UcorWvKZdrJooDAKgjbRaBs2d6nKxC8kbz7epNT9UFkEhfe8rnfrKn9hQTpKMz3V3M4Q8uGGMJQNTT2EHRKVT",
  "key17": "2LX2eFfcJN6wx5BGh1RHSzgBCEYyXJR3drERYNPXSciRBM9BoNgXGh7iTfToRyM39k8cgxTsk6GWtJUHYukLgcdF",
  "key18": "48fzBuKV9ggktE2iK7oQTP3aVcebA6J5TA8vkm13MLue5rizm5Dy3qBHQaXdKQaV7uWaDihYpHvM6EzjRaG4DLmJ",
  "key19": "2Jzqb1xtYFvkPHbUvMod3F4udNvntYe6sjUUo9SctinpLCqd4sCTxzmW8Nu2wNXA1Dsz7fc2hQxDPGBxnevqaYXc",
  "key20": "SS3RqiYYJ6cezLvQGLAqvYKvS5hT81FoEYJxk5H3sFDaWLyk6gmqpaGTobNVbcgF1zBhAQ47LTb2sETadeLQLYL",
  "key21": "3fAytoNFgp74Dvvw3mPvqmhbuaw3h8oAXQkJ4D6XYaEkNcCueWJufGMSMuhqC9ZdfxLWLUADRqm2c47vBCy6MND6",
  "key22": "j8BpqfYaE4gwFE7wUfAXBVXEGHSov136so77Z3oFWZDiEPAKRQzhfyfMb2k3pk6GFY7bBSZfHnGgU7YjyKReiYq",
  "key23": "y3quC32VwrofHGPchKuSD3PZUSdzRpyp9CNepBEPdu98yCpkHGAoY29YWvMfqpzv8VmqdHQPK94BEFkcq1FDHdM",
  "key24": "2VgtDCmnJcf8qJqpQ4QVhDcmTvQaa8rNeEzDjZ7kVgJ1dhFziJ2NqTnNiFyCnPZTThgoqiNNKToTniAhG4BCCcaV",
  "key25": "496CR3QpTw7KtyiUAhQiyL49ZzXaA6w3m3U7VxaPwfaQqnWf57KvUv6Yx3yB1cYHLd4sPNWF2CqFutTC9B4FBB7D",
  "key26": "4Mz6tyd3HiCbWcNFzNh6VGj2st7z6R1Zk12G7T9e5f1vNNzdkRDuAxWEYcjXsNgntBJZTT1ATYoBvRpZN9uVsxEc",
  "key27": "2iw4LJMW3UApbes2WBP8r5ySDTQodxAYwPjnXgyYMsDP8tEcmqPhMfNKXZcSpG1a8QYtdM7YKTtXZGrYMBczkW94",
  "key28": "3JeaUF9iAhKu2FbhoUk4mtzrxTeDz89FPnF2q3wGX3hnzarKJ4Dxh7YQ5w2M6hvRWrABQbsgnKgh4jm3y6ibf1SP",
  "key29": "5KnBz3d22VaooJbqDBP5RydupkxAYYYPZt4biRF2r4NVpvrSNH5JUZgMerijmqZAAJTMbJBfk9PRNjF9XMHxPvrk",
  "key30": "tU6iAwwGsKJAQRvfJyvzEUFQ7cLxKqeeSigU9eQ5a7QN6hmoQAhiUSH4utgRwmhBkBZew4z981TGUfyeq2aBtm3",
  "key31": "2e2ycBWwhj6UdpUJS7zP58oDAGaKwTAYvsuMfUCb6fNdKb1UBP2Bs1jC2JeFA5PBmBscodHrwsgZg1Jnf4YoNUoG",
  "key32": "49dWcMmzHj3oXUt9H7kLUpC9Nx7F5wawsMkN1eFGeavYyjRV9RATaBgVTUVKFGXxdziuCZaVewNFZJKLbmADWFX7",
  "key33": "5TFu5Gdq3oNZJm4dBwPkV4sHsiW3KMtorYo8saZcKQLDNi2hTTnFms6pNTqWN7LrAKXM9h4N8xZHiEM3X3RGRUBe",
  "key34": "C9X5GJ9ugFNYEgnaN2AAo4SKgMuHhwHDTmW248QSw86Jp2zrFo64MWgQCZXj6wd1erdRMD4Cd8uhkCvpiwNzXvB",
  "key35": "2kCrNAervKoijAxgdP3tHoSugfB6Qj5vjR1D9FGWRe5n6CPHHBWNVcCoyukFPSzNcPqhDkvsNemQQPzKkdiiXFGk",
  "key36": "5N4KbV1GtBGqdJk24k1sEuBnPQ2QpoW9x6TVYw3oBqw8YxvqVyRydePKvHaDFUzNRmkGUYQJUuKzFTNYv1B9pZHe",
  "key37": "237aHC3kuH47H4mmWvndSvqFkjUYp6oh9a5w2sNRVjhuFprLmqj5ucsBMdMGxuzNJSsVzrS3osdGP9p1LkafgF3E",
  "key38": "24a1iovT1xUVzdQxqJUPS4uxoPL2abi5BkpNM7ETE5QmeGCPVdvbGvV6ERLXYCvWqx5iSqhAy4GojdcQXJWn1wLd",
  "key39": "3oiVwKNfjGhgswTpXAWw9E6QAwzeKrGD7TwBNhYJiMf4cHvxGS2i4yEaHTCZk4ovZ8uTMRxyB81pe8nVJxXCRbUs",
  "key40": "4sTR49pNYriYRKP9BmH3vJos7LpkdunMkYqneDmz7vKCNfTpfHBk2dw3GZP393rDLnXJVskWPPaEEMv6BMSJARMu",
  "key41": "4ct4tQdhdb5KkkfYVRo23hs3n5PjtVUeF9phoaeQ1tzaqXCjMyYZZqhGmM244MjPjn6GQVFGG2qXWfGym8dDsS5F"
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
