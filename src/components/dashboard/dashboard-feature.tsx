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
    "4nzkPcxVTUR1gBUSd8HyXPSQonEQTvnmDmP7HC2PYimcbHPUkNCqB6SdQANB4sCpEu2fTPzTo7xQH64XgHESwrwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TjwwCZFok2mqiqzqEBpztHq5myYZj4Uz7sB45FcCPLzyXdtXaJ5ciM3D3AanmbQL4DQkn9CiCTUKdx24KEsQPt",
  "key1": "2r1ABym9bhr46ZahVtXgJgFsiUkEbBEu6AQkiFMxYgN1GrNEwyduU2N5pSGFwR5FKZghYjmwETqLRaMa72Rt9Gn8",
  "key2": "2cXd7iKCPucUGnt4p82LA85ewatXomdo7yx1GH9uchC6yeA1pQK95WGUfNeid9AQhYxJsXDHF29U2Z4L7EzUCdKk",
  "key3": "5kQnHemaWFyQ3j66JcFpBbtQwYaM89NWgB8qmZzG4HkTwSSmrG5M74QRQJYnuhg93VfGwEAgS8WCznwWW8DJuURv",
  "key4": "2j9roCdS7ojSQ1VB1vbWrwzvRKs7Ksp3kwpLWKVtuULEYurguTq3TpoxHc2vQSd7wzGeW99soNXvdFjXUdenordX",
  "key5": "1RYriAZ7SEx6o8fa7ScyfAUytF4W9P9xTbjDjoW9Sudcfke7rPj1P7HiUiFiKMBpQbRingwR2HM89YfmawzwtKe",
  "key6": "21zUH5Q2nZx6CQU8HCwzUEtafzrzyxSyqEF6bYQ52qokhbrYZMtu2Pgn2m4aYUMP9cD78DAMifowTdwmtYpaqwXQ",
  "key7": "1bBcZzNEDiU7HckUCZoxag9LWKakuUHnGZcaSHVoWYzjRYb2FWZqmj6rnP2UYuKYZ37sBkxUmEEu6XjpmBX3zMf",
  "key8": "3mrGtMLddiUzNtMVw2kbqkdC5qCpaMTzqwJqzqBDFi9dGDZKd6SDsigJvYvmFzizWVTohAfPXtgaS74bCoE3kNsR",
  "key9": "56kKpk8NWi2jczmYpjL5DuUPzaFHqBGr5aMFhzm2QG9gcdQp432vp3kwbTUCrasK98NM6h9mDVCHwy4k3j34NHQp",
  "key10": "4NiA56wun8ejAobtcGnnjVZAWho2VJ4bJkfC36eHGUbKEE1jbe3iGDh3EK8wZue8LwZteHNVHu3rTVWpGkf6gQhE",
  "key11": "5k28KCmQeHtpH7HpoLss5uyJiw7MA97kFC1KnACY86hpZajCRLY98WsUbVxZMo1HiXbMP76XDe3q8mrpZad6fYTZ",
  "key12": "4FjH5VPubTz5NooetKPbgSpohs3A7ntH2mvBpPdgT7WDqQhh57LyJ5tB9ZVWxH4n3RUGiR5iwq7PoEGKgJHFyWJp",
  "key13": "UbCU9JoBW5onkZ5rLF38gjB5rs4RjwSfqCaAp2ww8MnHxCtQs3eo46BgGk3xfJGrSFLrcKsuHkVenGbVh4YX2D9",
  "key14": "52NNAr7Gx72PSgxu6MYMpY3XuY687skBN9eLtbss8RMoXLduwuau1vSj8ier8WTzDo3o16jqGkJaqh989PPL8u9m",
  "key15": "527aB6Px6vkTWqMemftnNeyBAGNc56Kg48byy2gkmqRcoxNzbkRubWMePPaua2fRYzQkrcEXP6cpBsh5Gu64V99Z",
  "key16": "2rNWzWNoVK1KWVh1QqsYezSwxeJiqCvaDqycTzDBuW2M2i3ZCx17cttL3Xe11FhEWf2jShjgN2JhJWmJdbvVKxXF",
  "key17": "wX6A1etp7S6Bs6mLpjy4vuh5eV1jwCB1na24GVAJeerFRzDmWXueWTLPHPgf89i6fQgoc4263cdFPj9qDKR11FQ",
  "key18": "2yyXrdjtXFQHyETADfUpLF4mWJSRWS65QhQNC4CnfzdzaqwGqo8PxTnitTatcvo5wGsMGgeEXrDp2GyLMaiYbApN",
  "key19": "3NcsouU5RnaxFXdfrqidUyYHzidF9KVZhzAyVniaJca2hfLTpBNY21R28WF7jgt7vdLmHSkD6FEvE5WZ5pRfLASj",
  "key20": "3w2VoELBrTmQH8gaByG7dQpspHoywLmrgsXUmejW8nkXk5wWQvMDYtb9XmFiRrEdZq22Fe9ytkLhRyfgT9sQgMvK",
  "key21": "4gsvANugv6M5UZjo6ToT25HoeBKNcFsmXFayGgGwgmEKooPArYUrvUjZQNdPwfHPUoa6BMbpeqnj5mZMzDk6nSeq",
  "key22": "5PJVuU2rnNLZnmZHv4jJJnB5yPVxAAP9cMR5J835Aoo4uCYWCy7vhQJhoVtZobSijGFQQcvE4hTRNxM6rUZFbiib",
  "key23": "4Ff1xwQsNghVZuYqRafJbbYQvFbpPv8JWRUVqZxFCbLPDZCa2Hj6VJ51jF8RsT4u6VNoVnAir9wbGQSzShx6DDJo",
  "key24": "8ELUz8W2x4yJ7CRjb7BRv5bJomPyFRcXZHoqYrgkMM82Sc1Z5dNtLDpR1PijZfvndGCGgR2PEAYsMnAjpsrvCah",
  "key25": "5jTfFB3vLd1i83Dbf3offDW4pR6euBfutbvuE6CSeNfi8yYXgneMMTmc529MEkDkooHZwEdiD3JibtpLxnCsP8Hs",
  "key26": "4Y3pFB2EM3DzhAkYu2H8boKynSmjM4o3Ugmb8KcZSDVNSRXEUQ1zsJumSpW4CpMWHt3ia8Jx9gEhDHQKGojuYrhi",
  "key27": "4KYL1LgjRqa9RtYVnJQSY3YLohU4Td7stpH9P8hzTH2fnMa2Qjg6ivxQHzbvjn445xLu4DzbZi4FGJKcZtNJ5SuC",
  "key28": "4vMqyfQUGZwPZzPrEM8rxopBxqVyNgXmyhGsfzccxevw6qcdQdET2Cv8ELYck7gfKS3um2WN4gdgSumCAR7visbt",
  "key29": "2wS4ba8dVqX8Cy1E5pfFvR3mV2NCWT3hPHYZa484bi7Hp8DEwpnXQYQJcMBiUj3kdciaMge7RX1hYBtPnXqJ4Efg"
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
