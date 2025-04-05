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
    "uZ2845NbpQmxXk7gaDKVivyY1BKZbdxKDmszmcFLACE7oD59dQQWLkAwijWqroCEGSCkDajWPg7rYVVweGUDgBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bd6FWNnLqqVmeENZYocMED1qXnKWYGydn48eggNvRDt431mCLSk6gszJrgHsy4E878FjkFYK9TXJngpU26faq3V",
  "key1": "3KNBEVfkAC197hSQVizDkGsXfgWQLCRk83hb8tprtKCm3QS5skpaNTAk4Qzvg1Ug8BCwWjyZkYs2MCbu3zDwbJKf",
  "key2": "5QPFq3U2bnpBkBCvmUhEiUF3s1oC3Cw4H5JWp4SK1ed5RjMbcwXuDr97rvigZnQecaLFwxK344pkEmUWdVayByp5",
  "key3": "5jWPT5qWjMDnwxc1YdUUVxVuqF7JdjgW9pa92CXukg1pe9ysbBR2rgRECSeHojhQAwUrYJaJQEpkFSLJKYURr3zo",
  "key4": "4MSAiF6axs7MzCotYwnbxWxAd299RZLKdMzqgtTC7PVgBofShMJq15WYFWSNVKnHCRL7Fk65etk2WXU2TzmHyV8U",
  "key5": "5GQzwQsAdEYhpv7giBDpLZNfZ3xSGaeQiWJ1zPj9hYSZJbPw2f1LwHWyQGMnV68SWKxFaWFpFwbukikDuCFo1PZy",
  "key6": "3GEQg1DewsRgLYBibDaCVpFTVPjD8hZK1egWEkMYP5RWZg4nGDvj7BTRhhdPP621QSXMQzhBmufTYmJWVvP8NRS8",
  "key7": "4uZ9c3hoaub4dCAwD7ivpGeMqQ7kX6WWzTKzkNbXKADy3Pw6WRtJHoCf3ehUL1Ekqx3Qoebbq9UYvqxo476hE2bC",
  "key8": "5YWP2C5R5pdWjywkDPma3LoHZ6SoYeYmUTg6xqQwQPrsSpCNnboHBuRT9WG9YFANEERUsshM9nVhnimwQX8DtwX5",
  "key9": "5Jka1RtY14Km4TwvLB2g9oMNgNQEq3SznxVd74mtYNK3wz897jxL53HBkbHYwchDenpowpeAkGwjCMh7SArXncXZ",
  "key10": "8RSdzqpbQig9ex56opythBfY2aWUUfv18jzLSwggsGet5UFa8TyexhvPiQrNmRSvjxY9s5eEHmwx2CftECYMiYT",
  "key11": "3RVujesvJufu2t247uDj8sT7iExAWs1ajaq2mFnZ6W5MEbH8snEt5YMZYr62ikaw7PADQSW2MuqdxhQypcyjZvkz",
  "key12": "3Qjr66MVqFn62UDAkofsBSHZbiXof6YvFCZazTHSUbSnDLPoUEKb9X6L36gKByb1rcWQsczVUxuBJRpgmijZcg4a",
  "key13": "5JJk3qsuRBDJY9qKMVhtZ6Mvmn8Fds2LgDyAUnHMuCvN6x2DRe5LRaHU2LrPthYdVx51QtuNjrhqzHvgtiDsihNr",
  "key14": "419487GZPWVz7e8WHEzJYUsRnYVoqv5ywyYZSYZVjWcUtFAS5cJeYLCb4gAvu9CEihadZMm3zYbsjVNgD5hVQ5U",
  "key15": "5hu9JFK1BEHR8UDvP6GMC74B7hDENLVZMMC6ZpoiFJPC1fphTu13Y3k9BBKMB4zNw48Jv1yZFr6GEPwT3PrhvvML",
  "key16": "3Uh9X6hRrwMLN5qBYxhazJfHcAawn36U8b3VpwUUHyo6xrPSrVBTYjRwK4Nm2BEykTox6o6btJtJZNCHZ2idyCY1",
  "key17": "NW1LvpzG1fz4rimfx2GnYw1J7gXKNjVWhXCp7JrKymNcYjzT5Qrq9KMYidKfmsyrAmTvS2McoieyZ5rzbXpYb8q",
  "key18": "4YYsXgo8m8UGfhoShWhAdy5fsDCU7EmnGKpM43o6Yo4rqzNTVVw6LssTXUDkkD1S5FJAnuZUEB7XQ8VMCGiPphV",
  "key19": "33a2G4c61X4s5Hh1c72TqogXAuwBLb6V2K2eQ312s12q22kfKFmpz9AbBAsJbVUe7oEhekMSkHPYyMe93UYWJYgG",
  "key20": "49LTgFpw9z3adVPpw95KejbFNwnMgfMx2yphYhwkqbBjykaUBCGmQshyhtFg5zhqtibg36osoNsLqGDrMihsthc8",
  "key21": "52hKFqzUBY6iMfPRBm4gp1xBe6699xhYUBwmepW7eSPyqRVru7yZY6uJai8KbNj8BnsVr42HAFqX9x3TRbKhEcjP",
  "key22": "56q46DDrKGCNtAKzTTSs2T1j3sR7HmC6FCvn75W7G2LFgJ78x3N1fkzwPztXnBJ7iGDBiD7QwyCSH5DKgABcZ89t",
  "key23": "34W8xFKuVeyW7tv178fkTvvEAgJDjVAtC4BdhncGGCPCaP4eSs51zQSxrP4uL3ksaGv7z1dEvrEByMWcqkA3Nb83",
  "key24": "34LFgsiFUogoUvuxATZamRWVRwLuGAx87zQMCo5UGGbiiP9HdRkZoGR6Far3eyiZgHTL3UCGwnf6d2Soxi8u6oet",
  "key25": "24KjfsYqyPKSdzHjgqZrzkAw1BcCsJcnsJpFXWbnZTr1RYZrvTKuTuRTHpbNWAe4xrfteZnQZNJ4mmRjYCXwW5Nu",
  "key26": "rCoNXHRy1q4p8FwR4SW8La161yuDBWukkX4kLgVTX7yo8g5n6xDBzS3fMSzT81LtYAHb84SnqSMLmsZbBXZQzkL",
  "key27": "h9Bdo4H7rnuEWTKgjaBEnzaWWZLY4QNti7qfqeY8b2i5YyxwFbg4HSKvtaLp3cetoa9aPQcdknnqBdnmC2waMLZ",
  "key28": "2xVfBvujj6VHw8KiHriyLMyn7CXGM437u7UmEm255AztUSYCunF7gBTLmriMKv2Ab6A4NBTJ9E2burbewK4fXgCw",
  "key29": "3iaW5GpATSFqBqkQurWL4bHjJ4RxkChy48Ki7Sr68pkwhmRqP9T1bbu6oJQENDtqevQMUJve49BY2NeCuZJneD9R",
  "key30": "5wQCJ31DntQsqqxNFqedZRT3hcFP6H9oEa3YQmZzB3QubzjKufPzQt6ufFpY9ugoUCEAVZkVsLrUwej1wZjv3nPu",
  "key31": "3jUvgu6JSydTNu8mZC4jfjA2dYMtRujiwzzEtKmnXiNa9Ezj3NfJmhQ3yCiyLvaWJXnLuQjPA3dnRt5cSLpinLWG",
  "key32": "883yQZoxc3AkKNfaNszhQfvY7Jmfj3VMq3ku12Xvb4bgJCvEA952WcmuR4xH9KGiUkxsaBtUHKLTypALGRRgbxk",
  "key33": "GqRuy2r1894eBQ68euMh5gY6aVZ1wQjNUySzWA3iWzjyRJQRVXoNQ9TYvfB3WwianF5pCkNvj5hCTPT79BzJGAa",
  "key34": "4z61KwN8jYSnKUd67ot5NVeSfoSA43w1X16C7d8rqA5sRfZehGq3TcXhQxyRyR9DwJrmNP2kcDEpynYrhiUdwFSb",
  "key35": "3ovoVXUrKLPcGixRkK6bjWTbT4aAdPeksAn7KhP2eVxVno3JpnnBRArR7U1CV9xjFydbyh7CdApUim5nFwGC7byV",
  "key36": "2ruRnqW1ZSaSHr6Sj66N7pZvXNS9QtiW51LG7En1173cn31f5rH5b3mjD4ms9PodgjJmCjtTc9W2bgGmBLyMddve",
  "key37": "43krpQgAbqFezxUvhYogAtBhxJN85uyoQAyRMhiRreYmEEw1ta7iu2i2RYrCj6eijRMDtmPnYzGAFD1rfqCk9ohf",
  "key38": "65kvX8S9yhhjjcuswRQnpZ6DkMrHuzZDcpSMdeAfGxcntacsTgPa3cj2Jf4msu8MAs7B8wKoQjscr72Qoep9yfZn",
  "key39": "5NNw1gQZRaTTqjmWb1eXzzYHiGQNvBSdWas4GeBqWMeffHkqtQNZv5TgAq9NieaVyUtQC46z4jUyv4eXnFWGRtPT",
  "key40": "52EeNxTXNmcEvg7iJFYHQH3qwMWSWW112gKq3EKxW63UDqT17vm8enjgYntX46wscQtbP8UJn7g17WZFMjc4DgYm"
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
