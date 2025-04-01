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
    "5SRN3U1cgNWeedzmbVarznhhbLDt1j86MKg8Q3W2YsofRNMJtwKeMofKj3mYj7WBWdMFWhQfs79ZCVh1L4UrP1xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jHT61LVhicTxMoEdVtq2SZa4xGLkUdm5evZjxSAi4A5H7uto1qnicSqLv1bYEuAUJABx9HUBQwHZm3Fsrgx1Hz",
  "key1": "NMoPhWKQihXxHUaxFb5BWbFmSnReLX8t5MH3BA4sRfYAdSBaGdx1KbJoXXpYmXMjnuH5XUY2EKxU8q2XZ3FntPG",
  "key2": "w9ZPdQVLwfcYqawe6j4JcgJ2Nb4JmB1ta82DWmo3HFF8oF6UL6k1FP81EP9A71THMTXUyMcXCc9p9gLVxPQ9HPc",
  "key3": "n98Yn12fnuPd5kVPF1BXqdykRMKuGb1QP6ASQoAc9AriDhqBuXTJre63SJKcMLChXsaFtLyoguWcLPQA5EmTEwC",
  "key4": "h4GMKt9vEQdodbHvMR8KKWDsm9WtZuoikgsy8pQDQRr4CX8DcpcfB8KHB1AQbYJ6VxKNgbZaLXpXvMxWM77mYX6",
  "key5": "2PhSLCnPqsBhRCYnzvttHQ1YDuQBaUhmfKj2GSYkiquZJ6jbp4oM9AREzE8mJ9eooTQWSRzzgaaLT14DibtvyGFQ",
  "key6": "3Y8zDtT2ocKzy6SaPjdCtNEJemhM7z6iVwer9fQyafHEB5sKTazjvys8r6GTUBfHoZLFHjNTnBwFMqiqX3L7b2eb",
  "key7": "anntoJhs3VLRYionCtbEqGRZfaZShtEPmA5STkBxNBy88ATqkpcz6SXjqgnyEh55bRj3ggArJHUwKTHJhAQhzca",
  "key8": "2QESuvPrpicMzEqDpy1aGC27ANw2x1R9fFj2YeXAj1d1kxxH7khtqbbLuhvy36HQBuBSpoH7gC12f44tz66fPGFQ",
  "key9": "2Pu9dCU5xLtfN8A8dcvcRSnHobdqAwSPBJynadcEjoHKaM24cfzdM17fWkyeH1Q5Nap6Eh6axwVWnunb7mLCz7mB",
  "key10": "2nTWBc4xSHiLoAXLhEyrQ4cHoYPtTTA4Cnm54spyCgQuLBA7ZeHX2fhxS1NfwQKiwgUDRQwJ8gzXsWcFFcY5u5My",
  "key11": "35Nhi41txL9p3iTCqnV4He3c8myNdwoyP9wUGeVUGd3pg5tuxgdWkezhG11DmLiZeaQhDAtrF2u6ymhyB3WizQSh",
  "key12": "8EdNpHDFxhEu8AiL4zfW9DvUYu1VahZHmMYjBazf8NqySJ7ZVJtGeC6Ejtjkqm8LSE9K9mbGY2yPi1MvoYZbHHf",
  "key13": "48Ju6WJERcEMzG52gNnw5wcZ7r1rypreshbpfd2C6GsWGwj2eScHNqf8Jw1fa8KypkC2hsuCM5Y3FmJLg2WmSHsD",
  "key14": "2Udxed28ktnCikxAEcksJijiKyNkdsWSTyFvgf19sZxLpcnz63xsELR2364LpZv2HsdKGS6XeZYnfsX9cTS4wrrE",
  "key15": "4VkztyLfySsQWkSMRtb1hgtX3phqQeU8DAqUchMTcKeWPDb9wtLV5Friq5BiLjz9p1VHG6xFJDhnQfveKZe6FQMu",
  "key16": "5fDxP6pCB2VTTbtoUb44QL8jCkK2LdY4JThjyujNeThpxqpg6MchN9ouzo42ER6NmApRseeCGjzf4MGPwSi9KHnm",
  "key17": "AMmy76UBKJV4gWzvTZPGop52G6qF88v145YZcY3rzDeEHy4112Qnmho7iQYUhnVUFFKYo2fnyfZMx8DTYVWBfmE",
  "key18": "5MQPNubmZwikNFbsaNuERB9Ra3GAAKR9vALpxFQpasXwvZfKLAk3mKfbTNWyMAkef54jdEJepshARLWzF42T73Qm",
  "key19": "3MCJAyJgKkzTpS3nvseZAtH66x8iLjJujJrttKKV3xZiEDp39rJXXy4Wf4U8vAPyNqruP4nfhqbUttq3qS9fwAcN",
  "key20": "4bese9Yuc4RESzRV2FDKvfFoAYx11MwuSAvbUMqq94D2D6mhgsg9vdXDMKPUjSoqtvxh5KivAAyU7S9Mk5kvN76N",
  "key21": "2x6zHn4bU997mUSMQbpVKTAQoWGyAiWL6QUeQrDBGXNou7co5DW9B9jBSDjxbxXk3iwfGZnxNtPzMPTNaESgSbgt",
  "key22": "2GxZdk3yy6iMbVtRt8UkXvZ1TjqjSYet6pgWaqSQFfYGFseLCw7sbfC4w5of7CmeK4zeNcZPjoFAZBmtCg3TB8mB",
  "key23": "5bsHLkr4Ls8cCBVX8NNheHF7PBgmZNi79ATmDb4LWaVRhXovekUN5RTrS8N9nh7QEWxTwhrn35xcByCnnBTVAHyd",
  "key24": "3ws4E4Y4des3M3vzxK6JVX49W9W2WykGtUx3Yw7tvj4RRs2H6bgNvY3UsxDf7saWcCT8iUzbeRhnRBdBxnvFcP9e",
  "key25": "4gwgAFgno4hbL9gMkcATiUyY8g6f84vtMTxoFogb5xCDYnLJ7g4FPRHyhCx7iSFVzV9qyH7hf1GoRe7wNDxPLZDS",
  "key26": "CnUz5EpFM9PdAZM1P7YLjArxjor5xtsxBfDvTJJHFBjsuG5YWYrpVs5qwcFFR3Kca6zrqYBSgeAWfsunY4M6hLj",
  "key27": "vVqSU5ry4f1tFSt1cNGhyHyC2hdj4t2bbzpyn74rGeNpuqT3gD1RXh2pgHWuXGZ4mERH1A6BRyyMDP136WyNWsf",
  "key28": "obL9Jt7DY7eMZS4JN8cqnBn56Ypr2WKkxxU8bwU6y1JojrExnjcKPuctJTBP3xDGNuZHwQoezEAwH6A535n39K7",
  "key29": "2ZJHM4SMohSEuQhWbUVcHVdrp9GrAeXWfexxbm4JvwA7s7DoZPoQWbVYje2dBT9EZpg598gKhQzUjtDaR9yryobS",
  "key30": "394mUqxTXDZQLD9iPXczhUikSWyikbB9ZymXzcUs1X5uKqG9dsxtTR9r7FNa6aC524nduVYU7Bb3iceWTuWdNaMf",
  "key31": "4snZZBJSRhek8htQpBRC4EPhE1cnaw6BBxZuiSY9Q7usAhJzkDNtkGiotvLqUT3ifzm9HWkpzNfe5ftqKgCY1bYY",
  "key32": "4debe4nrn5nAjWex77T8wcPnCF6gjnEkWEVz2xZfzr5hDVcVEKRgTFsqectjMzC1tLB6C1njsT3JqAA8f3hBULvL",
  "key33": "5aQzDkBnoXC7ZxVvj9WUG8hipmNBfVe3ZWVjCzbaRng9QHRumr1M7JUbRUuxRYW2Na3vFuY6zmzEsHhj5gPsPGdd",
  "key34": "3CPSAS5HDgxkNVD64rhdE3P8fGR5FN19mak5RXQbhoTCPzQx2e1byu1ApNoRf9mwmNYcueg9FPwTKCydsUarJ9ZP",
  "key35": "2irPQEETvd4iqDd7djQhyx9o4n5e6f6wJDBnLvsPxbV38WEjayGC4chDpv5Ty5khvLsKbYDFFuz29L8JPaPv9yyJ",
  "key36": "33jFgpw1W3cQHoqN6mo1zKzsjKKxh5GFVcUojEHTau71ddYRTthvvMHQRwc31dCkSXfCRZHHzTpGgr1Cfnkjv5pV"
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
