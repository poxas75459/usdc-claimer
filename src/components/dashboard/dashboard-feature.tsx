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
    "3xZfuyZmPeJnNCiM4r4H5MdFKBn5Ad5L3w2aUK2CYp5tNmmdU6DZppeveSsguhkZHtVaURcCPuASXmzdaTVhYA2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SH3EfGx1zKdb6wANHZQTCeXpW82sNzF4pJHqXN54vr1XSN3pXWyFTruvEz4ouDTCfwBrVbZ96swXHreW3jyLcZf",
  "key1": "4MwPnpqTKuvSh21isYv4ZT8Q3peHKyYVcV4r7UZzeVf8SSVktQcz8a5tdR6hQ37SpiUWydeqREmSvN8vMaDWKGZA",
  "key2": "59m4FnWYsnCPEQyLffmDH7ovy4pcoxqfqp5aUf7u4XbP6sSeHSZR6Zvf4PvLd4XP34tjsgSDYc1EVmNQ2Drmzxwo",
  "key3": "5F72EiBYzgAwzWkL9kzUfiDQdoz6tMDgnM6JzCTyiSDn8Ud79TTHEg2SmWSd4ZMAggEzQHc4baiNzQEvd6exUqL5",
  "key4": "5nnxhX51MGk227nB6aoDXgnaqSuFDn2JV25r2bNUAHwHVvs1eAenuP3pzjeoQbZfLyxNBjJjRvSvuX4kK6qU135R",
  "key5": "3BRUfHLXbDkdYiCEXNiksLqgwzZ71dGfgVcD5VZYnFnuPNRdyeViPnV1N37i9u2MSCzmTHss7bWKa9oGZLphRaXZ",
  "key6": "Gt31eJAa6CyCKHtAb83kuG7JCBg49pEfT3Nc7gsmX8KutkvNouxoVugVcfo7H9Dr7QrozmKLzf7RwV8twpNbB4w",
  "key7": "58jUiQgbJEFZWxbQJWGNcbu6w4wX1QASp6d96Gaz224h1psLN1mK977kxEDbZYEjXr1sGqTcnPC8RWvG91zaTXXb",
  "key8": "4Pcd9TWt5CJUCR1LpUpTAq6e8BgcLRzCRx5qKPBMp2ogcuJzeUUXSUbaedMeRgx8CZidEndM7VRs7Qco7TuV31GT",
  "key9": "2h1AL1PXoHk5TGqcLkJcpYLfwczDhwBbVGyEJr4JtYimivC56EvxS7oVNA1mTd11ZKTkTjG3NUYgj4FZeoH9FaSW",
  "key10": "2ANYZ2ncJogu3XKRpcthoNDEpuRpdYfnkuy4aUxczm6a1G4bVMYdt8udPvSdPXLZqpTSWjndvYGMYGtXJw74uEEz",
  "key11": "4LovqXdPSzxWrKKyRJsRAjnNLn5piDx31iBmscPGYz2ngDrMhB1BAEoogu7EEqXMEHy9pLbhtHbhXiCJPYoaKAzn",
  "key12": "5QPt9iUioAAsV5WS4A7YrK7EJB1S4zNj6C3WLBvKQ7VZ8gfzdXzGSK7Grg4pfEoUFewjx5Gf5hN1RcLEm3zcP7K1",
  "key13": "59DV5gvxZ39wCwgtf6oK8Btdpi4NMcMACmSxzhFciHNCX2Lb9zvqaPG3fKucxMQbDM7D3V7YwJE1fGGjTgDMoVpG",
  "key14": "62Q3BG51cEMHFGwLWUQTpvNdNvHoMyt5NgrA3938rHpbJLUqnK8BWmTQ1Vc6L687whxiG5a9nQyQu9ezaaZvuUMk",
  "key15": "5KNVX4Gqu6MtCW3Nx9MRvz8UVeFe1VRHmuzTea2qae8zTeP8hE9ADQ1fp87sS4ffhaTSCEJjtcjVcXb7wPsAovr8",
  "key16": "4e64iir46DFwFLsomHEsj4R3zgxjJKsZm9KRfgV7af1zRLJ6nZLtJXyLx59wY8qk37sUCMm4YtH8PRmLCrR2Z7xz",
  "key17": "641Taf1kTaDbjHPTw9HcLUkRLE3o1Hhwh8dxXixdgMutMnyJNgmLvZR9ykrFB9ufFnq9AnJ8ryRckQWUD2emqLRC",
  "key18": "47kTTaxF2LTwkyQVyQKeFBqaFnue8g8aeTTcCrkCTvhtuJhFZ3vtWVy7waohjMiArhpJ4Cfw87akfFyvbSmA9BMu",
  "key19": "XKvndwiHPZBDentfqUA7bfkV8p8yzMCV1vBUPauCFN4GFvAvigExnKzC7Vf3op8x4kHKnUEvAupV512wZDBCcEk",
  "key20": "63CYVTUsExATpDn66zNSqsefUhV5WqJsDVeJjzyT4VQup1fCECY4SteqsXEYCkV6onsiAHCqzbeirXVZZURwiZe8",
  "key21": "4CR16PBKkdFsJfUTfGcyMvrFZCYSGQMy2UUb2J4wKcxzGTUJj3X6PTYQbUKXB3Koht4sAiRan2MTbRYb9XUwawmM",
  "key22": "4xBEgRfTY4ZY8x3XSrZWohb9ud6LTY3ea6cKWPgZrqWjrU8hWfTNF5gGzxBbTUJgRbnLvMsyJ2LoeDKAAfoA7hp",
  "key23": "2ks15VsS2wC8aHrnTPNQWK7e9KwMcbLTiH4CN2z6vh1TcYYUY1pQ6hkmiTgeND4E7ZaiKmQtAji356RJZbmdDNn8",
  "key24": "51ZNPasqWd2b4Xjb1rZEkHZK6EfDu9qudtmSMh1AzvZxGiK45QURv8VzMeVVZfK3UNwMvNHBduBHiTHt7dT5aCBW",
  "key25": "5URkEFeEhZ6tLDmHhiyDCicj23ekNnRnA2gCSRnAqqTLJGBkDodWs4yLkXnVLYun7y4V5HRhvks5FDjHWb1Q61tf",
  "key26": "5AcGfK8q2DiFrETh5WqZq1kibooLjNo2WWmBHqfE3morhn2b4KJBzhqHjKatMwPVFTjv1CFuBxtGEeUAuS5MDeXi",
  "key27": "31xV6mqb94mq8mSFSfyKnVhU8TRA2QSsxUHhz9Fv5N1SiF4EVyh4kU3BoJ2gS5pPkeKC3a6Bkdgec8wc2WFZDgA6",
  "key28": "2pCiRGmAZ1vTP1Ju6A537xpZ4a4fRc8rkLyqWLdafuBr8kGdhGjZJW5Zza1du7CWhcWNFe1oPPb5GAmui1APbvj9",
  "key29": "2Cje5Ewh5jqZEX6vQJcMA9kieHAfHmkeYWAFBNcgV6dEyeKeKCE55ug48Krc2jHvzmNFzDeFp9C8uXUYmig7Zm6D",
  "key30": "4jfoJ25FKPYkRePYjb1HwPkALVRzTM447EckbdhVbXhuFctJasoKduBD2ZauQarv3ZPPgjpsjV3VxwyayiWhATWH",
  "key31": "2xLAJkxVzmZJ4AkEFXcQiLFDnCFRXKSXvqwwQeSLkTLRso7BxEoMuHq1q4UoFnPFCstQzAHjWUgxMWi5k1rrLTQG",
  "key32": "5CFbtLmfMux4CCCk6UJ7uXUxX1NSBVfetWyKDgPWusUfLjC7UbwiLfTVyGjCZSrMadoveSagGSH37cPcSksPt5Ru",
  "key33": "nwgJrXb3t7w7ufFpBcjGrqL3eT1ShSz7tDKHbSzgTXKaLXwJmJiExh4EtGA4cwKZR8PuodhAAKMKXc5R7R7kBby",
  "key34": "42Sw8c8gEgxVQDHsX6ESHUUdhozn4oWPrX4G8eL1y3z441Bf3P3awXJ6dr9CJ9qVdcgQHQyHtKB15YDAUpJo57rK",
  "key35": "4JtF9jJgu71hV97izLxMDroQboTWwJR3CRhv9h8zCXtHpaDcrvyGCxJuw2mNBeE8B8mS56CpyHcfdAkf9Gd93YgH"
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
