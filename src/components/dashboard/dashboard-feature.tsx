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
    "3XZUrnyMxgfYSBBWcJGanXFqYHvBaPb2L6MynVJD6n8jrACFu1dVcT4Mm3VR5DZPkRGrXCgcnZHPq14BVvbRyE5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjWmPvmrnNkpRHZkMdRjKBBT9hLx5RaiJxp7uk7Sh5qLDuA8pbKCRTfe7f6E5aYg76b5xbXMMktdsH9ycv9tdZx",
  "key1": "2gS5AipML7mP3h2XrPQVwt8aCLapJveGGkXo6BAwjpakyTNrZ7VBb2awLxxajrf1WEkfm8PYvc9sPxNfRjrgbav7",
  "key2": "2DJXDB33YRP8ZciaRtsEagkrnXCidM9TQG74VKL6xyBJH6qygsYe7b1xXFKZqttHhLppKckc9Mvk9WCKpg6Hwqi3",
  "key3": "mFs8yBakBJ3Hyyiaj1mYh7ZYLRzwDWn2hwXtAGDsThiTUyExjvhbrz7fYGWUSqt88m9dCZNgX7K9TftJYof1tKM",
  "key4": "21xctkHCS8pbcT7ZkLWJ78dEojP4h8MPHhD5JnJxSq1r284V6ycuXPhLbLNLcN5XPuybGkqpBdCCNQsy3BEinDME",
  "key5": "619tKJwDkM9kRCeS5Qidy4BzZSCYJo1s6nNuCPMGo4am8ba3VuNJeUyLedtb7izMGNKFFYaY92kDh6Zk67H45QrD",
  "key6": "4z6MJazLKCviWfWimMLiq3ebUZDtR8oDoPtREMPFwr5if1hanwPrciMJwCmna9QxAcEfZ7gTYqRkCSPDM8sgW5Qh",
  "key7": "CvxQtsYGvvkAkurviqAr9o1iJjneE3fHzzVz64fCdCfpXF5nxTPkWpKEQD5cdYRrofhdKhaRyREscXCsR6QhTae",
  "key8": "48WWVyiRCXPehvLonBAKPjzi8eGpxh83oa4w2FHZxkX3WZY9KryULwoX4P68R12a1fX1ah7bhqkpCFumcSonS6Vy",
  "key9": "3EY9BptPJH333o8Tz48wxAMT6aGua9vndQ2KGrH93c6YLUKh1jD2rRwxkjFboDoD3gydsqwWBYpccEb21pQHNcGY",
  "key10": "2Hs8G5V7qXm9Z7enGGYtokT1P4TZwNR4eBL87Zt63J4MpB25UZfXMwhfu5dQS3HZpe4rGG51b1nPyL5ptQRTD4Jk",
  "key11": "6C63WD92NDPGMyMqVUy6Xn7UwNj5EXPYev6hqUTpnBoXTLCg5DEgR5AB6aQribkA5ntVVUfFxRtDWM2gsdmWPw7",
  "key12": "2515u8bfmTvVN1qWZeX8FLRCLGXKvwczkbnjEAeASMHk8S2JXTfCUeHwpfiYpBNbGbRqg6PpD61wxa9y8CjrszFz",
  "key13": "3AQ9DV85wCML5W6qwjUUiXUEEVCBfdNHkhU7GeZKgHXeQcXLNGQunNXjTPwdFMaL3jhK38g68BLNCoLUenDPwVSQ",
  "key14": "22wy9uScsmQCHU3fzqJMAiFakTAXU8KGAEsXqLP5yYQFf6npG2LEUMHmARUM7TBYJYqMLc5zAHnG7xL4TfkJSSq7",
  "key15": "2ehb6qApHQA1L9NfHXVyYWVdffQdsweRmvgTHg3YEn5a57KoKEimLh2nicZjgNnA7U56R1sN5wGeuVpngUrXSQUt",
  "key16": "41JBQehqGai7D1ntJoeBiNPms8quh8zXG3wFHvPqyRypuGksi8CBxLN8zFHU1ZMAQDrW8km2R8FRYDBNygrrGFbj",
  "key17": "3fbwqLGf3Rt9hGnFAe1Ast5uPidDviyY38kR9bZDGGm3KktA2q9zKnhURvDuFKA5sECLBvcUHUExpdJiumgMqXKt",
  "key18": "3w8mjLtC7ntjAZVrFi3zWsGYoUXpeW7j8Ym5dwvLs3mmnWv7rMNRbZYW8eKRMFo3octGGHQDRaCaHaHhi39QYQzo",
  "key19": "4wfooF8fB8G6ujtYboEWRejuxA2qqteZcgfaMYFWGW8644PE1XfjGivjCsBifGMSTqLw1np6ZhZTwXUsb4RJqAmF",
  "key20": "2GQbCmLUbtH7HdNKkRoxiuupg3jBEqgsrCCKEvP89Rf5zmG845EAR7XwD4eSEbPJ1B8SbmRN5ZnUwZSb4dJxsjMx",
  "key21": "4ViAZsjCJBKvipsAF9LdMUyKjk7Gh252hc3MNeQ4XEsbCEQsNsUpwmg5LhWCW7VuJzp6hs5MufDroHRbX9o6NfqR",
  "key22": "vHNMYZQvyTFirB7Xp6w9BkDtVSijZH3gEC88vQUDULXVs5iXS5faMmbXvV7t9dra9KMPeqqNNvYKiuohYPXZXEc",
  "key23": "3Qn5Rz2ntSTAaqikAy7QJgg2ayXyzhs5eNhUaPqbVXtoB3Q1qVnjLEtFmDbuWK4ThuUwwdvQefP5ELGs5oUvchrC",
  "key24": "JBCdy7j2YVefuRtRAbix3xuB81UAX1Ropcu6zgDdqSHLGMpsYQMoi5v5pStHmMZA4DnwwsGdNT4R56aB4ZZAyGr",
  "key25": "2ctqRCwW2XrpLq8svkEw5xeqek9y5zRjKuZkTY3oRzst71LhsfZpPLBG4qDxgMSy8Cm7LpcbSnpFej2MSQk3UcHy",
  "key26": "3DgPk71286F3o2Z8vY1AmuGXqi9aTrGLmyr5GDpgan1VwC8YvgVPLkcuKsh6T5ArGJBDMYag5mV64ABAr5oAQstY",
  "key27": "2GzMvAXW4Dw85ise8DFJofvgfD8AzubzbuxQj5RgHWFrYoGDAckB1UzrgKh5ooiEY3kCXj3M6aboBxHhVgUuNiFW",
  "key28": "2ZPHh5vS8CAYUA9XnSGsqeHkMEGsYbLmMHJaDATdaiwnkExxAtWyiLHXUSDwQxM7sLDTgamQBBTGsPRqRgHWCjq8",
  "key29": "3ypzH7iCzxV4r1fjB3sfd1cTcdckiJphNWsAy1dmccLZvCkvfu2eBCHKGuKoLFjYVVcS1qYHRratHMsX9DoBqtmP",
  "key30": "4P6q8ef6ThKzSg8Q2LYhDKrCLZvzc6tFXrB5DkkAr1xDuM8EmPFEZzGPZcgrox16J9cHkoc5KW7KA4sQ7BAzqZZa"
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
