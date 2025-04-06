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
    "65FPqujD83F9dChwYxqgFz74sNFYhGK9K2qvhn1dJA6ndxPNo7GHFrh3D2xn5AMyMguNpw9K1voNwHMqH5g7hu51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K57QMboqeEta4B9dSAEn5vfVCKP44AaPNVEQgkemvkBsnFbN7CsS2PeKQeXWqdwVbyiAabypAfFmWQhRP1e4UYS",
  "key1": "3vAs21ysnepse5skBt6SNMPrZZTjFUKX8aVtLTP93LcgA1D8atXwKvK4g86jSzpmxxDtwimxQBNrSiXMfiL9xgd2",
  "key2": "21zfb8L1VMqg1wKQCyjNxg1cdQaHaEQfznBC6q5KnveP18zVovsfeY6EgnYSJwoJxESGxyyWkB4h3rTboxXgQuMd",
  "key3": "51wmyATYCMaESNtEad5edKsjXXoFqEkg39dQZbyLFEAYTxjvMcihQ8nxheP1H6ck7hpg1HcDmJryR76X7ARABbNK",
  "key4": "5UXorhGiKZCWS4ZWeKJYzzUnojaZSAq7McxUUfWscDfy15X6B87Fzr1UX8kQgQ9KiHmSce1kPjSsdcGTv4rMpz6W",
  "key5": "2nJEMJX5SfkUJvbhzyd6ZbfyKerfAAk9R94qnwc4QH7jgyVvqCkguXWpembVZ4iK6sHCmKpVC1gJkfpJHVZWQZq2",
  "key6": "2KNurCd1erpjqLufgZwyNASat9524sPsSPzxw3F1SeDoMU3ZmDXuJEDJovSr8Zv67c8gzeuKKbfeowZzA56tqZXb",
  "key7": "5ebwiAgxUbgHxELCNDFExpJjJGMKS8bxgSCqq2vps1HybLFetjPLXcKBVWnKBE8on8dHE6XQ9dDkUfn6v2YThFsf",
  "key8": "YENZggJ8awpnJQuAWugjCMUMSK82EmMW8yWWWpHoTSWTD9vQScecFX2AhbZGES1YF8fisz9vqkrf1rspGW58N22",
  "key9": "3KxXxSbha2fDb6GESow55ckkPViGGRbu1HnJ5RpAtG6brHcsMqKhPdc2WLrZfgaS28cjENAvysEoskdcJ6tS6HSu",
  "key10": "NeFaFg5DSHsriCut4bHWjFnw7R2CrtZe6CoPvn87GQBsLMtNxZHLxGCD1KyqrLQdJAWDThycEXAovNH39Vcfd1a",
  "key11": "5wPQL75CWAqZnvPbA7YWdQJGJgDHGm9PMC9kLL2dSR4JP2f4uRSHPJkxNZetFLu2JEyMiHPKfzo8wnUjuHQq6bSA",
  "key12": "iXwRDy239YEQmFBvhaw4TQr4vprBg44dkToxp5id8qG9nitaRfZRE9dYFNY1uH6SXeDmYburKcWys1454U5mCNV",
  "key13": "bmvaxTHJgGUmetY7XqA7NUk2fvUD44yMrkrqn9NDjMTsaPE8FfABLcmzZxUGjHeLM64DrMQA53CEYdY2nMKckg9",
  "key14": "4WPsmG1XtTNaGSCTWLBiE9s4UtEKxFvJmv4dsvvqSBXnh9K8xkafQNhLCeUCozjb3GztSsGhC1VAUkMomzvPS1um",
  "key15": "2ZEMS5aJgGBspLdEnq67Bf3JYxyLgYpArhTS5hC15TBAYyjwQ7JUQvuX2xC1WYUU5Vz1JpUMTyV9UqSDF1ft25jM",
  "key16": "4rhKqPTdPn32sGmEbvFK6Ls45bSmpo2QhktVT3Xa43KbHBu3p3Kyd81P2rWtA7xuUvuwYeeuVk56Gath2RS7fVEj",
  "key17": "2MDQC8LMmELi4Lrj2UjiZ7DdW5rdW4rGJiyKQtChfrcxAsyWtd6AnbyDkpPs6Vy8Eqc8TT6iEG48KqaiSB5dApm5",
  "key18": "4CrY4DWGHCjycoFu6nsnQdjFVqYigBJUDccB39nyKS1mPNzAtKAiPQveyDRKvNjsWK9myd78DZwdPcbKqNkDwPxW",
  "key19": "5c5P6EJZym8iuCmMPfTj8EcSdQ5RtfzrX8PSbC8zg3BKJ7S8tefCLBknAQZXL5FxTkYRSFagfHr3RGTNMWGpPk18",
  "key20": "2HWsbDxY8bLRZC3AH5Gm7yetaShgymnu3Eva1TUFmTbvVKgadM4h7vaRLcRQ4FrYeTximWXu9T1d9Dpj3RmUZWmy",
  "key21": "38B1aMVFRLNJ88DfFa1ZEFKBy1rDKrqyAxXkyrbQhQhaQ9BhUD5v3iBA5HrpKoUrMdZeV8Qdm1w8LYH8YQ5jXygg",
  "key22": "4YsPhrAiRvYvb1BBYGkqqEpCdC5gKoJmG2iMEY1Dr6ZWJQHLUrwefTrR1NFewyLqcvngptAZeGoTziDa9gst85B1",
  "key23": "52UUa5ACY3HrJ61jJjAvoK5GHSoD7vKj96yTHn7aJWgo3wPYKz1u4qDKRys6QJgcgVymB4YNVM1Yr6QncBuy7N1S",
  "key24": "4wPZomv2END8AJ6UB44oYgfk4beNAGemGiKb1Ywwvmx1ADmN4K6FASGk7ymnhaafyz9LkjkMqeS5Mgds9qYMZmF9",
  "key25": "4XM1PWcoGbizSAC146nAa42dY8bFt9JEf7hKGNEdkiAs4SR6uxug7VkdLz8FT1TREw8ZCKqsUhYiWaSpWPAp7RQ9",
  "key26": "9fbPPgoZix1Kc6p35uk2a2Z4nLfTzWhKXrLhUfSHWGUSvb3oTNzgAoPYeo5sVAsW3ksTHACCNXzuEuFUcdSUnUL",
  "key27": "2CNMkAb98KwFfw5xwkd8Q2tHeVz2P1cQpMYaqFf6noZqBfH5UfCcEGBt6HmfKSNC7QhSm8LqHUDW1GV16ajwSXuD",
  "key28": "3vxMoUkM5cncTwzWU7oS4R6DKFxZti9aoJJusGR6NbvGRR4rrJhGNrcT2qsaENcavTwDtn9oQ53CByzkN6vazEzJ",
  "key29": "4h6ipcL5itc1ZF5gHRbRiML1poQtYczFx2CTMaKwBE5EgsZr4ZcxAQnMndPwCPg7Rm4YtJ5HQdBmfC4gwjyASyPt",
  "key30": "2YT4Br2BPgXBgxKqdSeUpaTnPnVWqRx6AwTs6xQfGnQj7wSPrswq8cMd4Wg3mrmxqMqfqPdR3VZppiqqa7HLfcCR",
  "key31": "42pj8i3xtazkJWX71BW4sAyvPXpQjDkMMiz8CCfBW3yaeRepKES7m3BKoeqJcfNDen9FGzDychb5XYTk6BvFinbV",
  "key32": "28kAx6oCfHePiGrXbTpdXFUyMcZ8UWdNsvsJw6XHUBnsPxxPTCXMGmeZMg7tmDMiihP8RSGiPW7pWeBZZ3j9W1hZ",
  "key33": "4REhax5gjMi5sYHEaAJz949mVeuygKzcRLb8i5VjbjGsQUfexaAep3xWNaPYdNCuPqNQcnqKDs511tCbvNmgjoaH",
  "key34": "3XGbYhZR5FJbwYfJaYvKUb4m4uMrHR8fkVSMKL1xoRmHwK7uSvdoeSAr9DA54oF74YajGhMjPogmPJDdMjvhv39Z",
  "key35": "hqN4V8AzNRrP3CSGwF4aj1yrxRV1Q5tJb6hSSWrLSwPx3v3XgPcdgERjCxGAYwg1R3CUvtXFLCXjR9FfXRPiUva",
  "key36": "2WZgimvgxAJ4TKy2mMHfN57tnDHsoxU1rzGCPv7fYDBBSamwSCSmCG8zFrt1PYZio2GHofrErWGJPU8UiDugYdix",
  "key37": "3HDGtrWP3fRzVVBMCEhVwKhS1XFASQUBX7eA1AdQUw3WBumFyjUJDVe55j4me942f2XiRuHm9uPzsx4DBGr9Qktw",
  "key38": "3Q4xaErNx9Uo8tnFTwwQJJSxwGj7jn7mBigNpjxtU3L3MiGEzjF6aiEAYwWnDaNyTrFYtTZAHLvLvCi6WDR14zxi",
  "key39": "4H4n5RuZvGhAfjsiWJbkHQnmkXmKx1Y21nVSeorpRogybcArgvqTZqaH55ZHyaaa8EURVUDrGxvg46SEpbWFY9ov",
  "key40": "5MUY39NkEr9SWR23PRHNzsVNt7GPVaQAqyuoZ5tcPuqpMvnGCNVguWaWpcCp5ZCFF3re8Hek6JrsmCGD3n4Jd89z",
  "key41": "4UEHErqoFjwunwndoZzS3epCVd9yF4m15NA1xk92i9whE7Go8KDkfxgo1FocWRCNQfsTMGuTj2YXMhwsH2mjaDJx",
  "key42": "36jXzegfNcbxCfBhYVvYEJQxevaLNpTEKNdQ2w7deHAQSuomFnWZKEo5LaMxiPxgHRh9kgKEUkqoabVMMn2JZJ6P",
  "key43": "4bmGuYuWmiRvyubDdQnRxe7PwGVPzN8BDZ6bPo2bKtp4iC4cqaD1geCP13NKkszV4joKYYPUCxEuAEVcqseazZnr"
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
