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
    "5Nxhm4zsJmwWK1PNRt1eENTt5bGMtThcDRHgsmwL5wXTVBdNqgmmW1vzESPuyAFTC87t3QUYPZ6qcYxxTNgAQ9pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1Cmy9qb5sPtcYDQ2a2wVJmEFQWBBFJRrArTjATsYA8EbJ87T4y7558QK6aB8PTUKjxxMd1f17xdUMhLC1Ne92H",
  "key1": "2LhpssiJ15x4y9CK6tp72jXfjcHowoguq28pnsmoQu3p1Tw4WXjgfM7o8HN4hPk9L4qcnzMSAEnRU1Gdxx7ATE9s",
  "key2": "3NSYsRzhpytv9XMqwRMP5xb6XLvYeREkf43kemqj8NCN8Bg3LCsqcxbsbjGn9qAZHGktC93ABj2qGFeVMMYE2ZBQ",
  "key3": "3KCtb9jdxEj93x1MF91nSqbfEahU2YSbzHTS8fagyF4nvjzboTPizkQMh6dyWEnFE5Yvrc7XEe9JNA5hPsaWFwJc",
  "key4": "3XLNLYMy5vwYypDopA2BycK7FraSJwiqUicbq6APQQkW87orSsHciEfVs3C5qfuHzfibuoDbFBThwvRYun2wrFj9",
  "key5": "3wWTUWmFa7TK3VXh3oYrY9M1DNY3kqZWYiBoyM4pKCarDWpopbTRQs9YbBehheKctGXDa7RLxpSiCjLami3poxzJ",
  "key6": "4Gyykd7Qnmdpe8yJUixE378MM2Jo11WcbrLVWKL9hwxsJmbPhPc2v5cm7riaRqt3U49NQYkCLXEJJfNQC3bmai4U",
  "key7": "2aW5ig1GaDrf2fX4QKu8r5nhcQbZfNar7bN4iQeQTC5V2XbGuL4fNEA6UdcM6JvWdZKEDCVKGKQfBMocoF49wqbv",
  "key8": "4vqRtACpb5A6cJo1jxy59DpdotT4Cz4PDcHescLGLmAtwEada8x7WawN5T3vfd9mhxismbTjmQoLApG9NHHgNKAT",
  "key9": "481rCcq4dtHvQoY3P7gmss7BdMa9iGVAsVJqUawwNRVFoG1ciDMga4hMKaTTizMtcbNRFT8GbKbiTEcj8abexbcW",
  "key10": "3A7z42WpsoYfewSRtA1zgiUWw8tovhDmyTp4jsPpodzhN45jQSpPfDkPDq8DvTgnRBEf9VWq411nPfA7XvT7j1yp",
  "key11": "4WWEFFpjHNpo9gTdyTGm7TLimpo3NnHP1MtARgciWpWqR9Vh5rfR4RxBtD32gGgAsBr8VBXYg9om1NfcRR7sFbAm",
  "key12": "5Vo8P5V9CRqXEYK4n8xwhKrY638J3yoK4QuWjKxvtixCtNqrjCMrmoZtgqscCrF4Ljw8NwPV8rTNbsntcbLziBj3",
  "key13": "mkCGSHaPQemQmnNEH6XNyeCBouMLizjitGAETcRfXjLMYuCs3LR94ksRnDjVL4dfcZRqCuQ5WNp218MwgepZzZd",
  "key14": "tGYd94dB6DW2rCSdeAcFZNr1fT9Pzz94R9J3RYEMHpu531mzfeKnFPeyfwVa9y1ACboJqeDbjszDu2CaeKLpVw6",
  "key15": "KiZuXwb6xH1B7nULRZKqtfoDn4byAqsBcGxKPaHndjNE5SCbcAf83yemnDcbXx9kakWe2TtTcesAEVw8uSRKWix",
  "key16": "4ebqNWkLQnSeWxbzyNrePE3djxecpk9Jt1q81GhzjVcMUV3o8xjmnjrHe2Xs284NHfSKVyLVeDMgoeJeqXkhdKkB",
  "key17": "3kCg6uSrwk8SdHjfYCDkCuFqVimToyJiL5siVUNYSJdHWU8neb9EhU4LJJeV8M73DYfu1EASffSo1qxH8sqop8T",
  "key18": "4FeNPeinqoTvN9sGuytRVZeDpsNtpp5oqhRjVamCvMqoTBMMte2tQLEJ54wJP7NXDr2vBWun3jGNnEifKbuJ2dtR",
  "key19": "3ZRTR3DvfrVbBSBTULksUf8e3MAJoS53WvQbGuSRE1XbaETe99Xmcr9oXJDjgkzLJiPkt4chQsfSY2vtss89C8tJ",
  "key20": "4PXaugUjQxnnqYdokb9xhLT1VUKcaanafy7yh2BhBFrskSQrM4oGTAB4sdE9gAiNnpTtpEATma1X5kDvfXmUWWz5",
  "key21": "gzi6yJJgs9EEoerGfQzi3CVZsa79X1gHjSJmMiy6CP7WLKZguZxXr7c1h5xTCCZTNfGMFEM7Z8F6y4t53SXzfGa",
  "key22": "jJfeDTMWK3MtMPSC6eucdbEVKLDe5XKvFWGKhwe3WWCX1Z3XFYeLQXbBbdm97denzmYM6CjgtHy2vCXayvtV5Bi",
  "key23": "2DQrA71e3N9k7iVomxjFWPwozoVS2kRFuJ9dKizM9uQQjyPxbyzb99n37L9yhfW3FBYz2cGgogXYugcg2jau8qWs",
  "key24": "2TyzuZj4GAZDSrjX88AkTKgx6McNSJD5qxtMuNGibdQ2eNChdjYwaPwuR8DVgYHmGGf5PdBnbn9heXtPszCTSszG",
  "key25": "Sc92M4VhALtXnDwy3Ngp6iTYLSKx3fnGs2A3cBUGUkbFxXQkqUPUjLiP8Ch3izWsYv2Nhp271dtCTM5YxHf8Soc",
  "key26": "5gyWDtt8rmpycNZrK8uhXvjnDXbKMxzkrw7qHkCqXiXvTCxqEZSmNiEuA34C53dpnpUoYy4gXsom2wRRetBLu69Z",
  "key27": "QnykP3NAP7YmPcMFYhv5kaDirNV5qdqWsGNjGsHD5NK6uXNaNZfC3qcgU95tYHT4D15QDLi3v7frPReRMxW8qCx",
  "key28": "3ZZ3cLEm5XuKBPN8Khw4ajPrXHUGkX9T4GvcQ3acPbAnQPn3YfH358TUFKtidcbyGApsgnJoSXWKn5m8AnCD4L9z",
  "key29": "tNgCSCNjy6evi65JjDFsMeJAz8FPmLgQWvbA3EetKJgPs8m42MTQTko5UY1VZPH1zCZeiAnH8bFMUA1oAfz9oxn"
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
