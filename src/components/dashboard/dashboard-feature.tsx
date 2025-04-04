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
    "5i44KRfKD9oz3DhvHafCot2aCyKSXnHypaWzxfd2SLgL65VEYywkwSxLQY26TkQJVP6qUKXQFRuH5G4EVoi4BFEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RE45fbK9Ys3BCdfXJLbQZBiL2dhdsyz1GndnfsVw9Thpm2CbfSUgbnAmb6nzCBartae2yjt5RLY8U9khqANg4ro",
  "key1": "3eYCqtzhpXEiQePo2VQxG1QZkBaQys8B5dV3cfioSdXttwKZGgm2qZFAShr4EaHwz7t7D6xXVXyV3PvuD5DP8GfZ",
  "key2": "3FupcjCFMFrQ5EAVirR5LbyU1njZv6FpMf7djEXrqsRBGuJ1XWDNhjtSMS1uy38KUNGeBdr4Fi6HDmaEXkXAzaYn",
  "key3": "4swSTCrvfKrSDEZ95at7z5Tf7PVAJSUHLcYTQW979ZZTX6qWJg9tsGN7vvtCHmbALKR5cwDT78SbJuYAT3ysw32Y",
  "key4": "37iJHuaSq5bxKfj5i9CkCc7Rj9dAJGANtCLpkEaNnD4xUxKDdK18zxda1PUdSeFKDRvPy8c8uTL4FKihyX9HZgCY",
  "key5": "2cKQXukXRSLQ3ELrtGdt2uYrk4ry7EknkeBcvNjsWCWuUK2He8uCJiYMMq2HTariGvWoWLRcr7TwZ2PGPgt65Yqw",
  "key6": "2L9TdU3B868N6h5xANe5LeQqnzgXkrXbajRXSDVpL5ZD5aJ65eb4d5FPxn7YwmzDv1nStKo6jwx1xUj8GoagLBHR",
  "key7": "2p9ZwhaveQ36RCSJBkaCAWxHEL3cDqPLnTnv9RnFXbmRMH6F8N27GjmGWsnKjPakyCG9aoLKh6nA3oDfRdPV1UTb",
  "key8": "41xW97Xwg9qcrKsbVVFmmZa52gtK1jps24gyGiUVVxeZULonZgNxDhASjQiaYiobGPLU81ErWMugm6opRyP1NMfh",
  "key9": "5vPnJJy9ViUSuYEj3kAeWmqBjB8CK7hPMYd2t1aVqrCFgKvhdroCBZ6wMxr2xVkF86gmrs8HqxJkP4PavHsvY7SH",
  "key10": "4mPWwxpj1aZFmmE97JNBUakW2sXJBt7gxYNkeB2R7fbk1CpW7XEdkguHatL9w2t3TqcxGh4thFLjEbYhCU9LeZkD",
  "key11": "2vig8kfGpvGema2mLdkFnfhXbnyNiYcU9VW2KALuZxgH4fmicAoCRZ3UT7mx37rPFMNoF6h6VXk6pqBeWdocajUz",
  "key12": "2pE3RGCLVrBAoA5cSFNwE8CBC7qL2ieFWqd7woEr8mUgiNQQB5KA81WeAsxLSZskSfF3tsx8gwDNHgdgdoW9DwEU",
  "key13": "3v88Q2HkFFPhZXmMV4oZtLfe3nxK28Rgickx6h3w9xFnTbKaFAR9FxEi5tm6SKoUXThwEJ33UbFUhuZ96Gs1gEY8",
  "key14": "5CxAJRhwxz8B4W49TjWUMXdapeA7aXNs87aQGfb4NgrXgWFZeies6JMxza4BPNM9NxK3uzqhBxZ8tMcdEMynzHcy",
  "key15": "3GhTxFpTmKX3LDGPiG74vbrkpkkDhyYfgHnuoyVhakTDQ4QUSraHk9YRqfrYKFrnihp5bRxgCxvUdwVKsXGR8spW",
  "key16": "33TLBX9N6z5RP1Mr9JwLgxv8bHHZtEUtyoGsjBB59Rwy7UyeU8F9oW9sUkF7foBAD9ozfu3EsV4z1mtnu4Rnxj6j",
  "key17": "2hPPXwSv9iybmSc7AZVHqm5hPNu1kVemSjYUdsJf2Dcu6JH7gnfNreVAfwfRV6sRFw2yr6D8F347kDEY5B7e6uwp",
  "key18": "3BcxeLrJcnYNaJp5jj8XTb58FX65TgcpAo237otbUzAt1U6UeGHw8HomnLM4q3UXaYhRLC76YNH7BiuGBf41gTaX",
  "key19": "5JVS2ZUDZD5vB7xbyQwLNZEnMvy77hxLfHgPTnrP6TRFyHoeWfur3W4M74Q21XsfK5KnrXamZvDSaRJgYrTi5EvS",
  "key20": "4DkGLmo9QH7cA7ruTsMepn7L5rDVaKf9C5C5GSRCtMsAD7RR91DuBeXTrhGUz5tGeWVkhdgC6USh2BJZLtbZwHLQ",
  "key21": "4qwVrdNLmQC8fdHZ7aY1hb3akF9eXiE2ctnNvgY6Z7yxwR1VRnwgD1apSp7pNGV8miaTxSsWPn988xmJYqVMJp7E",
  "key22": "2Ly1QnpLwjJuJu8RHnVgFp36qnALSbqXaaGYAaztkRPbgZTzEY9eLfEXriueY9MdjYVMjtZqvVBKxCwV2U3hU8nD",
  "key23": "gsdmye8xh9UV9mECfpAAd8eoYdBWYUbhoJW9SAiM54X3gjT6qsoxBocxvMcYpH4u3yQimzwGG39A4nQPHoskrS8",
  "key24": "5VJZmWzhswBp6BSDLztBmun4tn2fTKWx72PpcnUVaVNHgLJWfTeoJnfTzcKXSUi2UVZsfFx7A1HnJoK39ML3ng5i",
  "key25": "59Pd41y4YUrQnWfZSUrvNabjS4ok52Bhz9tVED4XytBcfeedE5NB9CycRniJEp5XEtSakYiZoy8FTyUbP2AMqcgM",
  "key26": "3dHmP9uBuyX7ZNeV2xYwLtSb2MZvUu98NSvezgk5ccnJFpv4XFr617LYgwxvxW77xaAYkTPhEm2MLrNsrPLPWzxH",
  "key27": "5YozF4jAtJXoonHamA792UVPxVstc9KoSuAgrQ3U3YRupxAQR2EREbGEo23SUsXNRm9AHnFDRB8rXggRvnVJDmZD",
  "key28": "4wNutQBh8YDn7yVVKtLqfovqshcrgZ8MtuT9o8asp89afH9E9RyKSDWxyGyjXy1UFey9BG24M1mr2UTiEUJ3NfPa",
  "key29": "27TtSnwdQpxeRRim86BmcQjBSdtPReYG8qecF7VyMFhx4HE4EAEAC5zhVK1EdiSuQ8jTDHwc1qrfgZMbVirKTL7Z",
  "key30": "5GQgpobvP8VAp3KnYdwz726JVFY4L5m6NSzbRJyteJe9iN5eifSZu8BKHhUXuqch2BMPS1vJsUimPAdm2dQdaRHU",
  "key31": "4Pkh7HgLWipL65mjfVuJ3tehAXgAd9FmQuNzt8d1Awp5MAR3QNvZwty7dcVhvjogLLED91yQtQdRiWxw1368f7yQ",
  "key32": "gtVzQiQUNfMDfcRQ4QdWU1F7LqDTHofc19aYamvChpTTAMKasU7VpoHCSS9XSFuC1WAjH5vx5XM3apKoZuzuAzn",
  "key33": "pU55eneBugjMb39BK6dfMjPxKfmCCvJzA3WgnHPuUKFj6jPFZw2pGrvjjtbvAfLhi8u9AuqQh67QNbhasjg4rGy",
  "key34": "2GjyFbQTJtWhq8DdsjRgUbchZ83v3Jbgw28gqEPj8NvBFYNjGQaPCMPwKmdxTKbJdsDuHUzFzfwa65xJpiQ7phxJ",
  "key35": "65ULB7rsJ8ooV44nax7Z7xEMFwy5hhwsGr37hJFdB6KeQkkzdqCXv8UD8V82Ta9PjSANe5NxT8FqWTqLwJMT1wLf",
  "key36": "5kAYtYKiHVfwkbYs6arjnT2ZV2dhiad56g4D39vQ5PYxp67umDxqaAUHz63N3AfNB1XhdyeQPXyszGJc4EvQD6XA",
  "key37": "3ucFYXntBxve3YMCbBwiR7zSiZuFG8egKFRwT7yHsy5rMrj8nK1SvahT8LeNesdFxmvweCYGdAW2CpF3r6U7ZnYD",
  "key38": "2bqxaybpgZvkmPRXw1zWe1K7thZAWHukPKm8XSrdS2L5snTo3KR5uL8iej7adcU2on6Re1Bd5puhBoSUPxnAxjuj"
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
