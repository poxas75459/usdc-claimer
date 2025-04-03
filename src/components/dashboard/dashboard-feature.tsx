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
    "5VrAEpS631yLen2ofcYQyfmzZxZJCpqNyftaXbwhu7V2XuiCHnGW1MeGCnWf91WLFbo38pneATNmpADe9iVSuvr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9fLTkcMAjvHkhr753ZPVZw49y7i4muZK3ooPTvKC6CBBxr9QqSY5fb3QfWPi1kmbx5U7Xh8HKX7TsSEdqHBs6D",
  "key1": "3HyedDGTJVwNMRaNbaBLqvfxTdz7sTKyQkQenntv1TVRUDvzL6tWQeUy4XhbsLsHWPup8vYHHU3V36C7bP5NwAfA",
  "key2": "3JW8Xai8xRsev9uHkFfW4MebSchYyuJgtngbM3UGUvEFcF6izSTE6EFxg1SH4XPgv9YGwC434B5b8QwU3zK12npc",
  "key3": "qrXcAFu4xfN3ZRu6HW5hUjWcnxiXqP9d13t46kMfgC3rk81APKEnmrmuoaU256KCQRotTdWjTRuCNrzsgpvcEPR",
  "key4": "37mP7yzk3px3cCKx1rAjF7BmfQALuh7B7nvrhMbMgUWhfY91y5jpaS7LYt9WX2bf5zaoi6UHdAcfsRUwvkk5gdxJ",
  "key5": "2Zmgb2SKZtnSsVuWkhrcqAdCFMHkF77WxrBNsmiCVG4n83juUHK3vFC8MTo7rkczVGbwD4HoKemn1rNkBFiLm6VX",
  "key6": "quDde7VKuebnbGeUj7WD6dPbHQ3F9W6RJnQTJQNgZR9LAKMN1umYf5b7gqnzy5F5x6oYi1gvCzB1zhLRbewbwme",
  "key7": "5kyxnAd53antNNbbA42NGtM4BfxiavQRHomQs4mWXC5Xuqb8qpP4aVCmQyzUFGg62MGfEn2dXqZFV4B1WyX7YsYF",
  "key8": "3FkfnWTYQtdzeZX5V9JeEkfEg3r9E5XtXibdPT8FsrikDxEEWt9AkWSedUXrgVKRnJzRMMLdDm9bAfxzTGVeb8rA",
  "key9": "2JEoVMncbBb1p38bbUZa4WoRjMn9aQZ89FmcaQp3pbHcYC6Zuug5kYANSCyZpDUWy3eAZvfzzVq5DxoVLH34RoFR",
  "key10": "5P6FXKWGSvdMJgdeS8A3Mu8r3eEK55cGy1PEKVsswjXyGx64KiP1MgeRrvWRtXURfYtt4QhsWowV4xDJSTyoTwtw",
  "key11": "4b6pwcWigD2NKajyA1jpz2kxtDZ7ecE6EMWv5Lmeztqbw9zNRKUTX3fw82Rz8XSkgfVwFz52V5KcwvcE88y93xDd",
  "key12": "UpwxrrNhjStHsWMwzc3d4yMhG7qm2qzdWhNQSufm513nF138EZVRKAN8QeRuGoznkuj7MPThjYqzCAxcfiboMLg",
  "key13": "2nMF9HQtfF3PtTGhVEaU9TtznbzWnbHrpwMUF6GHDxbnXyNta66myidxWcRcn4gr5CfGpCUDFfCBJFcHSLH4QZT3",
  "key14": "4NmE22HKaRSX9WGzAaSiK4KzBwVT3wx3SVJTqygnpkcoHztgFb24LtAxiH4uqFTuxNKUDgMCbNzsEL35c9RrJcj1",
  "key15": "3YufZ5EYfhT2WMMtKR7jWCVhR7euGtrcc5ipZevsFPNwqkuGAe1oJuDF2YFyiAq4PhSVWw9r9f5xZ8aYHbqmtC9Z",
  "key16": "3oeRAh7TfXbnVmsoMn3ACBeS3rHmFCFovHTHwoYjnji6n1CJCDmN8yPiV8JF1rxQNJccvoCLvueeaQMuzTx9yABC",
  "key17": "5KYp6Wr5sQcnE68Gj97oBkSNF2HpunbjXCy96Sq8jDx16NUNKC19pySwagTwD44dcKQLu13gmZEWgaf5BwwVaqQd",
  "key18": "2VDoCeUTN2NeahKuC2SwJ6nF5vZmC6jj93TH1m4FAgW1G8YQjo8QS4b4kAds5kkakNwCLHRgA1UkKKWr8gDiVTCC",
  "key19": "26ekw6mHBWRtzUYxC6Te4xKJQ3BCpmPCtkJYd5QrNPKdQf7UEn6ss5hqGjgthEZerFUNamSh8K1oduM8vuwwabVM",
  "key20": "3QE5g3Cc8W9AWKST5PCsuPiPPnKCGyFYgaiZ5neqKRCBygCfFQRyr6UjNy9vbfzQ3AJ4pihgF5Bkb2PWByZd6o5h",
  "key21": "3n9SuoEp8avYJiEGXzSvU6juyYgguBrSVhQy3wJhvG5n5MdawtabjKG9AxB5tKYUo3xnWu6ELYBswptAFqhvpMJz",
  "key22": "3KSnM4LGvxaJaqrSJ9sGqEr2uVhkRHJxfAw2qC8HYhogzrxEU4CdcbbLMySC64J2nLnBJ1jg2xUfFCZwmvtRpQ1b",
  "key23": "4Je2bUU2pJ2YDc25edib31jvCvtQQRoAgAypzUX9GWmG3X1reUTqqJf4getniWanqQo4yqszwp6mBnR37CVoonDC",
  "key24": "5k1Zd5jVApYLvdaoouK4fAYSNxcKXMS2CC6XrjggkmcgYiVcYhVkEuf9VRHR1cSG7RsWFFyn5tfgay9jHHLFwLdv",
  "key25": "5GYo29Pru1MFkUixYhyPGn5ERknEvEHkcgzAEJhYKo54CwFbpAt6MXJhE8eV1dAtmAzDuTMuYmRQVAqtnqWzznax",
  "key26": "2wMvDDVWgWLENS2XNSBTqyNBLn8sJdndJorhcqA3aofCYCAm4FWwjeRjaEsVvohBsbaKBpVvrn6KcximoVvEw81r",
  "key27": "3iR5vpSsfSLtnAQCCvXxewPGsNv883wvJAfQ1gmYVQysRfisk8mpgvAPEeeCuAnRbhcX62yVZ6MqeMK6Mj9bghYf",
  "key28": "4qQ98iZMhYcrHZQ1Hy9se2JvXRxZocCVp3nirqhXwbz8mGrUoZYx6gVk5R6aBb98FcLHL5cmFyx1cior1XqQyEGQ",
  "key29": "2RjxE7K79ASEiV1EDu8stqsq1tA1KTkK9CeXV99ZV3RsUT7rhpiTsjS2nVmdS8fFsVsDm488xzqZZJuvDfVSLcRf",
  "key30": "38X3ffjho1xr9AECf4oRjhqfeTCYmwUk2hzoSSCuwcCNh7kDGEicW8uZMSFrD4y5sQwizaUxi9CzZz1ciXYzBrYV",
  "key31": "4Bhu97WttUyXZMixZUiDSRD6ELrQHLCrYQmkieTXoNGoThStSNsnUR71wWUzPeUrA2G3RSZWoHDBxa1jpjifwoke",
  "key32": "5jgw8vt17cpScTELizPXU4EgYVdWvsMecXNjjUPGxXaGHHi3wT8a5rJsxjNMpxwRoZ3Vp8jUo7216Kc6kRLwC93a",
  "key33": "swZ8AkE4BrUasQsXQTmn5cL6KvSmPEDwSYuVQG7KfkmcUQnEKRbdSBWdPLfuxvn6N1KF7scKT88BfrZBUWQJXS7",
  "key34": "3tMCyav2hkcFHpVYaoxmwJHy52RwD2Z9zuoKHAuwJ47V7prs4T1nN6gGuAJbEBP4qCgSp6vAyy1Tw641BWnjcXPK",
  "key35": "4Ttqo2FXQswiwoABuMPrNTj2Cxw41foNizgMCsoFVqhC8KB93E6G5ATj2mZ8knL88pyFd14n5WCpqgM1U44evWbs",
  "key36": "57VrWRrFP5RfPDVM24AHYMVH1KUMjiANDvRXZnGfrCumMK3BtRXDYGRJdiHf6qoiJLEBwJwihMtHLBectLVvP1wj",
  "key37": "5ZMqikA5W1BXFYc6hc1peMnsWaHkfC5YztUbvur7CCDnAMAk21pkQN9k8wZahM6ZGUzHWRRkfLx1TpYXLjTAHgEh",
  "key38": "3DS37U7HENpTU7Hpsm45kABqxS1mgzXXtKJRQg3uJTM9aaAfymGdjJSSF8PZYJgvLZ4MKoSjUt7bmSyXuzEHZybx",
  "key39": "5zfZXdLeq1tb1Ec6Rsggzby5jA9utossukikQsrPPxbHQWN72Qfdx3qztkmoux3y726cbtt17sLHUPDro9iNLC7",
  "key40": "4EUMitzuVoe2KiKcPz9z8TStXFHrY6uFUPdvNpvmQJSYwrUFLDLvJPb77bMWRqvXzGvdbaMZ1WYVDtYeVYVH45F",
  "key41": "5po12FQAxp9F3f7j2NRi5jjDpMbyK7m78mhEwv67MTu1FH8GD3SDtknrHATaEAwB1Kvs7VcmsuuAVdZj9NX1VQop",
  "key42": "5j8zJp9Du4t9hYfXtMtYhtbT6jfBpbBNCApuXKHTiQtpdGEbV8FDVWndVG6mbh9ET7J2pnLUDLxyPVdKYYqoJLb3",
  "key43": "3cmV3gB356L46HB3XQYWWSZWkSq9HxLJsE4zAkVkAkTNLS1skaQL11G8E7aTC7oAwMMWCruQRpaLKrz3FMd3HgJS"
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
