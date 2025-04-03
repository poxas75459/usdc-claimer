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
    "4F6qns5ByVHyDgTbc7PKQG3uYdHmi5Q9hjxRNWAuQ1YiPdUGLiBpM84AXLcutnAngTb2uMeibMMXL5cjpGWeErNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcAy7JFGr48fvynqsaWqVAc5U3LwCF2iVd4vqMZATsPeuWwMZgpm4orAzhv7SLLrQnP8gnqeHh3bFbbaG6XMDvm",
  "key1": "5k6zDp6PRNVAMbFqqB4zVrQQsrmFdBvH19k4tVpFtJf2kYUQZmdjajRN5swcb6wQhSy4kkQXqHJaJaEWEn3CmWon",
  "key2": "4mKzc2WT5MDbiRKvQmQQXbvfgxN93Uwv7W2ezM9oGyHCD1cxeHv9iPBvdQAm4eNLw5aUYZbRHyLL7W93jtLR4YGS",
  "key3": "YEdFdj62ue7dQuGoHGLKNRoCHoisSUf7ktdzkEWF6N6HT48BhxJ247bEHb86HhG2pUt2kBp6R3PuthqS27zmsZ4",
  "key4": "iEym9mjy1XezvxMLDsDgaV9xoW6YtjuV4YQgytN6wywjKx1mefcyFi56fhHgW8CjZEUbhJakeHTWHTfD3tGniSf",
  "key5": "eYia2TFeKVPT6ymvyZpy4UxjWAxo3B7JhX94uzsLxBbUBToSYcDUUP9XLq6D4zwCSGvqDtWzxCpWdonjswrwwV1",
  "key6": "34cf5A2jw6CQP2u3ebpEiT8Dv4W7PWpaKUSKHa9yckcvB348Qqd6tgq8HEdbnawngJCdUm78367jjHRQj6fWdwNQ",
  "key7": "3LtR127W6r6B8VwipRfWi7CygXJLz6kPeBir8wqpgWjJ5aA2ud74K8AhSdE43AvDWjcvVFa587xz2Yx9S28kogym",
  "key8": "5r3dtjg7kM3gj2CRumkgMVACMSP7SYJ8Zx7A6A8PNL6YGTv2EAjx6MGQDud49NSwNvrQc16c7cFdFn5Bab15Nic7",
  "key9": "24fLVtDbKmfMVinJj8oAyayAnRtKQrwNrwR1YhUHzr6R3SGdzJPtAM63dnWoMiAjxg5Knm1TzRsupefYwGMjG7hS",
  "key10": "3q5iwtxgnX8mWEvWQV1osybEReu5Jo3NbRR2Qfc7pxGpjLMMTvpbJrJYTDodBNZbpfWJ78QNdXm57E68dwFnCMEa",
  "key11": "3ws5RcJwJkGKpBWVM3b6bPryj1aR383u8JPKb7VCpiBrza316faqPTaHwTRgdBgJCNMVTR4zcqf8cCwL9wgabZ6Z",
  "key12": "2TAadWpx2HNGTih2cSokc4xDQCKiWcWMYMu5TvRURnNSrXFadibv2LFLUngvFuQsyHiV3sAACoSXDJv7tR8pu7K6",
  "key13": "bm3pAbL1xGxZ1ZStnTwAJmeDY9yUnDJHZHpzqJwrSxYVAFQ45mVXVYQxaVGU26u4TzYw9e2wF8pwR8gE8JE1Bgw",
  "key14": "6kpFavWeYzzGoWZpcKgP1kXdBCu1wfZjRsqpsQUbmNEQEy3d58itS3jabezx9iASrDe2xfXHaRaTY1yDkf77V2x",
  "key15": "PDg9SLyKzLKC1BwcCYA6MivwzsktBut8VxYWfbsJkwnyPyogCmi2xHomi1uyMhZ3ooBqEQqU7aG8CWxGz7UQBx1",
  "key16": "5rYfbc3hoNy1wcjkRpc5cxSpC1MATnz6wVHonz1VbmpoBjwfpfm2AZC68h15SzSgUsvpsX9Q8KQJ31zvLLERMwqg",
  "key17": "3F4FGn2kdLsWNPWhZQu9fzMz1qUNadNLKQrRXoruPfZQvuwvHrJpChkQbozKirnoAEcM6DoJckR5QFv8WYSE3Ppp",
  "key18": "4mLTaUZwUULQGrrcHk3qQRJaDZ6E8XWunaDPCyvdXMiNfcyN69nXToscvYXvueUtYy9NvGZtQf7SfsGt4ukhXnFW",
  "key19": "2gHzGCVKz7E9BcunLawSrhcEMD7cD4cwxLd3WAa5ysrX4fxvgtmD7hzZ8evwSTrctvKrW7n81aMXnRNG8y6bYn2k",
  "key20": "L8TKG7dgfbsn8JGgEFTb41prGVHGQLvzqyRChprqKMBT9DWXNe3p3XRyourqffc1R2DnQ521EcQujZRtrf1g86Y",
  "key21": "2iQVnEEa4Zv7ybKTXFZnVaYg8KrJGRRmcVTWaNALTHcHChuJ2CDqCbk17dGTbs8bNvZMUVUWxdW8pvjLnV7zAPFP",
  "key22": "2pBV7WhD55CJcWjbdLZ2sHBb99WMQtqHrNgMyauhfvwWKLZmyHMrCUzMZLeDuAKXjRiASd7zRenpqfCdTWWoHaVU",
  "key23": "2511pCPWgferQEfDoU1cYWmapXv8291xU8CntTmfzn3FJYnFdDHr1rVkXmqvPrMU31iz2i6xRbtYmRhZNyR5BAfh",
  "key24": "48EabczSQHrkFwJG1WHQTYYvEvi1ikGfmQEQd2BQsitwQMXoXjGTKJiYjd22on9mmCwBZXZKQxWCPZRsJrdH9uyT",
  "key25": "WcCToxHRdvt9pexnS4mWTUo14UCHgwQUzNktCkqMNmFiB3g8UEXrQUpcvjtUd51CHiuN9WRpZqcRMJcxbQoc53A",
  "key26": "5i44CjzPo47kvt3yZYWJy3SuVZAu8uy4fBiLt6XhJ7c1Ck9oVuWASti6Qatp5aRu7KLiAgdMyk9KqvpZCXQrE1UC",
  "key27": "febGA78gmQbhFddU4BwKDNeTnq8Etug19Pnah9ovtiu5FYJ2uwBzbehxQu8p2mm8XXkgosPCcc7aeqpRMUFzAdA",
  "key28": "3VXhJWnsEPHapBFs4kRVCE25AJFfTczm3ENou83T2n5591q3RVoPTHHmeYQDm28cuz5Aw1mi98rKTrgCoZp4KTC7",
  "key29": "4RzAYEEyL7sTAMw4QqToW3o6VPt7cnZtH43Q3aHwDcsUhKWgY9hz5VQi5HgJ36U8vvSmCej8tvdxR55g5WZ1QaZE",
  "key30": "4cdzYvsnBYA6qLYQWcEqjmgodDbwCk34qLspnVM4qjVGicXfECcvwgjTvwhzSDMqpEkPNZ4xekWjA8AbxR727efD",
  "key31": "3NGWvAfLap9T8PWmDSVU1CAmHnFPXcUiALKyPy1NrGbzJk5qjKGQNyMZxSannSC4reGnCdoe4bLkQGbdR3E8hCd4",
  "key32": "5KLafgQPEdKwStdv8u2oREXafXfexq91mGQXv8detWt5mT1wiPUQst4eSekGGcoFHV5ygGhyp3cnVDSeN4aZaXdq",
  "key33": "4aZW21v6UgyVz6TPw8yPYudtsq7QNb8ktbK4c3eG3sL7wipfCLScxkja1n4bziDoQRzLzpSEyp5z9wvLQ1uW8ryD",
  "key34": "5yM4zsEMXM8ugsovDxd7u9pTJunHFsSVyRAKedmFx1ie7P2pPjcupMoGysgiWLfHeuVuP8qYdYEnYtXoiNhzi4Y1"
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
