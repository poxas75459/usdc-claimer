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
    "3WuqzkdomeET7h9h7GZeRc2PkKoL3UP1iXPNvquQNB4E9QNHwK9RyiskYuJrtXoaEWbXRCwL9G9srMHzj28LTdPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWbpvpZV82S4afo9qtKrcDMjAB37jYZkwigFG2T7TH7cv8sdsXwkSqDoFKVutytMUiV9pLxHuFhhQGnR4rbKWcm",
  "key1": "4yjv29fwo2Pgaz9dcmje5nKnvUuG312wuiops19qMBS6vy1JE1b9YLtyQzbCZtn1n6KPAq8uhAcTjvLwURbEGeHb",
  "key2": "3z593nFKkRkN9y2QytReF8EDTWiWXsnAkZZ7byHCnXAqicf2Lg2wcbTCfSjNXL5QxmYpdXt1jF8dLdtdmUBLRxQG",
  "key3": "VuZQC9V53v9jtn8tjzeguFiLNtDtAz4AH121e5oSgYnP496JHte1tZhsm1iJDGet4Xh2dLXs5Mi4uGLpG6oUrhT",
  "key4": "bLXnehsT9Lu8eg6F3ATxHj22jxFdQJzvboxsktXFsVdYbq69sR8BboUwssPkRBb6rLVoHh8V7AJfmLw1eoaYm5S",
  "key5": "Lj1EVei6trmqvHBXUM5P8F9qDmDaP6KBcnU4uziuN8TvNHkg4HHi5QZi1QxvK8JifMcp5dXHwmXzEGKTVxGmr42",
  "key6": "25zhipYuELFoGPwRAJQmguxjy5L51abNkdE6KXmCi3KkrtNx2UEksY93D4qScnzp5qqi1EsxmZBPoXTBgU2YcNFv",
  "key7": "4vN2UYquyD6zfDc19fTUDYqR2x3At4VrCtfGdASg6P4AXQE7XBvk9vhn7B6vhK4MnfRDXQrTsEeA8GwcY8JJL64v",
  "key8": "5WLqSUefyRZh3n8kVELa22vG1jDhtdyCERPpGa8cD7gK3oheSEMb6ELcjaxtxn9mhJdupnEhJJXRDG3jjAr87ZMb",
  "key9": "tqs5tbGPztwkESErr2RK1rQ8zHcSLhBN35ngX9LDw7pRJenCqT7YBBSjFGZhDYJdBBRGsqTr2GtdAagrcurrEof",
  "key10": "2sE4BnuFLUiuCzDcWkywBdSAmpEuQU5V9FxAmbaynU35NeKPhH6VPWVGm8RjHEWgeLzMcY4GG71SMLPoWAqRLkuz",
  "key11": "4gMdYB8nPXuV3TqurMkVU7TsRqrywohM51dfUS6DwvAWouET4SYonf8ggKSF7nKoSxHg7BxYWqbkyoBkc5gH9noF",
  "key12": "2FKqqYXuTBUrwR9tszqZgmGnokuRwSUTteb1pKm5iL91jcsAumpYqhLKXxfDJmPGGd2vY7zqWb1ws1cYMeyPPUco",
  "key13": "5pTagjJaVVBj3bjVf3SE3v5tijV5zXM3mwDPMfLFdBS3bdKfFiKJz3Gttesv6HhJVJbbDFtfhFY9aCQmW2iBV7iG",
  "key14": "ht8vzXw1cXtUaz2LVfXCsN4cch2HudDqNehmNZFrYeqP5PXcikFRRiajb1HZHxNto4wfQhXDcZd93eq6FuTF7eS",
  "key15": "3DosiFfACBipFhyChdx7U2G2xUe5iGjGxLA3p9JH1Bf2YGxSCyJ3KRdSDnwUuPUgJBMb6KJ1op4DqJMrzRA6tPh3",
  "key16": "kNq3iS8eS8HbYn78xCrNUUcPbGGuw8BriqryuVkPEc4vTXh7wBsGJ9NjdDXAxGt1UBY2mKeiAHRYMRXTj3HD1iW",
  "key17": "2NnDHu2b1bMM3oC6PG9KtkVKKydRZSvPMvbQamcSUAc7iakzzmHf9VEcPUs2TaUTZTU6QVYZ2tLHJoqGiybwFzBb",
  "key18": "2orHTRZQUKs4mARSTtoq5SFt78hbwRj4Z3YEGzYqtCpB7xZpCWLW9PAwpndnxGJEZMv9SDLBpX57iYfJyhfxZFbf",
  "key19": "2NBgFJdtmTXpcVpwWvr9oS6tzdzA3jfabwa9oYgAn18hodut843wV3d2yMWJdRHH9Len4jW2zNYvCv6ES9tjkB9N",
  "key20": "63oRoe1sT9nvZS7bUx6HR9cs3LwtXp3A89TMziJQRBajyKJNpMw5o731BQLRawr3LmdLLaKkgwHbr2a3PpSKV2ig",
  "key21": "5BzvWwuUQwwLhAMh3Z55L4cgZ57jcWfEkCH8DtPhtdgvy6hvJmFe6sEU3cuqwywiaetUphyxDMQm5UuWFgCvXtVJ",
  "key22": "4fm87bhGHHMLdVawheNyinseyPT4HE1ZUCnaVTu7ih5p1xLJnu1HmV1axG2QQCWLNyDoLvmHVGQNTnhUQFmMJMJB",
  "key23": "28mdtaEJxBLkqCSjm9aM7pHgyX6A7k7s4MniRapoEeJ1CvVoY5x84HNZNN2WiZRxhDV3GNYztKTtVxtByJKXtT6d",
  "key24": "HSSTgGwAApVefVGFozLbNFu3zkztQW9MbLWvznKu6hQmWS7EnGgUV6rqwSKU9nHpSCde5yRK5mGhPkgGZrVPpMk",
  "key25": "29DQYqt18YxeWNmSN7fntqaYxHnzoaUKuErG36PDvkXHCskiFYd6CvRWFojAX4bXABy4qa3xFXkAELqrMTMUFxeb",
  "key26": "57BMb1W3Rki3uvpBmwoVBoxZUnVqujeZ6Zbk9KpGF1AuGPvcSWbx563v3xhC6g91pL4FSicWCbxW5A555sSeG16q",
  "key27": "61WtWPQ14Pr4Gi82hALaagzcmtG5YmFUsGyBr278zWtE2MnYrR5cmSMPq1kXh8HvEPBfDTdpKXqShVcgusorcFYu",
  "key28": "4qXs1StCdZhEJ6oA7KXN1u44nARK9LPbRvCGB4mAwSMKzhFkWeoHDaYRfgL7DBDMCXV7ERKbQNoNAwtQqXnYUoM3",
  "key29": "3XVU15pVT41PuuiVqNEbQ74tanXFBF3X5ZiTnyePW75UiGmAFcVQNAn3WucW3ve81WtJfx2WqhyovUU2cCVBZk4M",
  "key30": "4DWx7sqwypQQfE5AZAvuoFKiPpnsevw8D9shYfVNvnEHRyrqDk9mAuQQ3ktqscDkhRZNXgnod44KQjHZuYcCkCUM",
  "key31": "FsZAyZE3djsScvCoPH6kphZcjy24AhY6fSGTZUhSNds3r8x16NzLUEULf4h7BPq1mUwdKRvgsCPY8bXfCNw2GGp",
  "key32": "3b4RqVoYeuvDWz67XVdvUA33imjzheJMot5Ryt2t4fH3H8kAKWnmdwnuDmUuvN9MV1rYBgprzZk7b6ikG61GMGVt",
  "key33": "2ARRDGpxPJ3HPdBZLjEtZZyGnGad3MA6xKQYkHmiYrwMdKGwe9RXdqdT2cNk4MJCDTsoBANQUq8xrg3nYsYz31ex",
  "key34": "3qYfFWUtDtWhTzsZr2gWuuFG48br4rtzyaxaLryQ4TLu7hLQ7AKFMwpfUaxH14pKuZjnsc33VtrAUJqTt2wdDNDM",
  "key35": "4UeQSsgPrDuQFgSf78kCNDZduWfhgYPoeAGQbcVGQTYKBkxFzFQ5yhNjvCCnxH8Z4NN3TzKBdL1oJ9stPA1dUJLx",
  "key36": "5oN1hTkEhSxzbvctTCd569bFpApWdh7Gu18HjYTAzGdFCQVhCud8NSPsZpFUgNgRKXxWN4Xf4cJ5Scsrsgx2eCMZ",
  "key37": "3zzroozgXQuYhKB3qCJSPd3RjG1fnAfnDiT5VyS3Xeve4D7sUZbnkk6WXwfuE1GwNmEiX5mxFtUX4B14i9HUsohW",
  "key38": "5fPpA4yMQQD6egAn5KAqgHfbCdrAr32xNNq5FTqo1R3yTXkW8fz7T8gfWQ9hR5GCV2KqVRxADdqyPQVERKLTXJ3a",
  "key39": "5oJi8XukuFtrUqsgTXJWKA5qyJubtqDgvHGMbnoAD5XhgGUCGjgRKtv3TMGXiXnYjJAwikpNqTaRxxWBZNELpPqA"
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
