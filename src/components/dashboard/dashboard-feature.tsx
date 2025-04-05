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
    "WgUqj3uGWZR6N6bck9DRRwZZUMUmPstMrFWm8EvFFeZDzczfZxPhoaPiMSJTmvsR6ecf5UeYvynaLvTxfLGvX6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRzuKXRkD7e59jC34fA3wixF2QrcMThaThKj2EEhkLEiQCYrmuuip3dKvjCpYhG18pN1dMDA3bpWNTjj1nkRHWh",
  "key1": "3W32Ka934BwiGNa9uWitQdh98o1bGmdJhgyRJcamhe6k1exsd6zo3A1BoMaowcZqBACvAuu49VgRTfT5zSeBVtZ3",
  "key2": "5eZ1QK9nPc5uMDnQ5m3vUu87DUi9FzZsJPK5SaNMVXpL8sGd6RUJhXa7tnTzNzid26VJyHfEkUMTomKxRvN7iD5b",
  "key3": "5ztWSqTkQygbjdHKwAJahiCYpkvqBsyCcVS4VUoiHS5XvE6omhFiKzEQhLAiqGZQoePqz1wXL5NduZDAzvWs8wL5",
  "key4": "3wEiyPTCS8gaiiEzai9zde5ZAbk9f8ZVJhoxMckkY3ptHRgcwKCq51iGQLgxu5D4WHNqWU4zVEPf2njmRYRhY8hZ",
  "key5": "5HxuAmS48684KLbVAZDJE6fCrRThZ896vvDrzeLepNN7DDhb7J5RXNZDULdSVPUGt2Xqczc3bXnw44iAzgWsRRKq",
  "key6": "6fySPMh4yr9gKaG58bjmNmVvZe2oLT9W8LyQQeJavdEeK7TjTve9s7yHCsJEhPWG5y9dS3bHZJdqBDk5UxokrK5",
  "key7": "3TsnsbFwxdPtHGy8CQjiNhRSr4rjrfpwDopdAV6sMwf1r28hGJCSgKzvcs1k85pcUtevTPrrf2EGwEet77VsEtoZ",
  "key8": "4Nk3KHnwoNtq2Wg4Dg1rmEVhTDBZqbKVVXVzuLWyEhWfzJcvgyZYrZ47hq3nvVjAgaTbGgfATpijNqoRjy45qwDN",
  "key9": "3R5JDPgBHyWNWEJN6XuHNwqt1UDeYg9VRfXmDMgnjV3GEy8GsvkrsK33YJQYmHmtKW81o1nuPz99cmtuovut2DLG",
  "key10": "5DWZxPFhBuomGbnT6jdzkhuBgLn1NKNpG7VEWHN7sBtmqcZr4EZgvw4DdJg1AxZd9Hw3yFTAzrvJqgoHZNSbcfjs",
  "key11": "JwuHnugNBLeSLqfqvfhb32cJxq1A9FSyM7VYRBojKHSbTmEDjKAXR4UFt1h3LFwPJaqztFfy8Am5JksExLNaXyL",
  "key12": "2AinAn2CYeY96vir3RV1GJjyFqapeVBsTVJQT6QKTwnjrF93agijyQwDGeafYeX6SqNw3Mif1hQ3ah8dS92HgbMm",
  "key13": "5GCz8H2DfRFnMsT1RVDmEMfbF5PcKbegEW1xvBMLeC9QWAQCG7mUW8Eb98e6yYaLiLyMZDkfM2Kb6qbvLRo9hSp9",
  "key14": "45af5GwETHxBFeZwh3RLHEARhq6k2K94BMmgm7QGYYC3GjNWbTPkEyaMS6hyxqP4AfbtKSoQii2cFzMXUKshuuXm",
  "key15": "4XBM2Q1hCtELgzLpjgEGJ52U7riJ5SEBPW7QaBW7w5cN5DEhqFrAuyrs6AkZMcRurVT9PN3BXGqXZRLQLzQpkQum",
  "key16": "64X6YyaiHMEpvVACsAF39M87ksEDAmRouMRGdQ1F3gkV9PL6Xk2wZ3zWzWJy3omDRaMjiUULPBZDfZw4DX6JjWUJ",
  "key17": "5eZdVBRL7Bp1s64QhFRDW1cAkAUZn6gSZrEsjnz823FsQRh4iU98EHmekVtvZPZf4wCe69MFuFipbZxBf8nPQrGr",
  "key18": "3ZY4rMkALk7uskys1m1hDL22bwp11FAghQwxyYbzwxc1iF7N6rVfJ3Di7ykqiymSsG3egvokxvSpkedhDcJZpDUA",
  "key19": "osekr96rDjAGEtDNCzZFy5WtavL2RA2DmxqykWfhPE2zV3iteroVVL1NoVgubEnGQkwdorXwSMFn8VakCPtjyBN",
  "key20": "2Kmu3wWWwx9bBMsTUCcrVP5mM2xqQbVprpxeQ92bbPhJV6MzALgmUfZHK6s265BvJrJG4YnTxXw8WgjQR7atb5hP",
  "key21": "3vjjcryAPGQf3LNf7UJpYPLSPrxZgzxE249iGQ3ZViJQwtAm6gZTfusghptvXMA7yrFJftDtNvdokMy4FxnoM4Rp",
  "key22": "3oiHTMEEnyZ1mTkEv1aQEtfEHagZQEZDWstjQzxPGGZzC96YZbzTZgZcqBss39idTAR4nDjiSh2g7ZDTXwmYpqch",
  "key23": "bmoG7RL2DjH1MYfKAsmRicDFfgqB6HM5pDT7NGYyAMfX8TSCZfeCuNomYjG5vK1QBrMpE1LXWLRbd2Cxo2FU7co",
  "key24": "3MPXCet5AyCvenccS5NX1tLvCFFmZ8eAjejxiBf1k8b7bDA6hEAEi9PaYp4JoD91ToQrUL3v5tu5cxvffAUetJMf",
  "key25": "2B9w2BWKGCpbDXSE262RZf9uRrpzbMzhJqwQtDwm2P22nmK6nSwXWYeCtQoRFvBcuWDPqp475azYYaGD7P89NnL1",
  "key26": "YFF86mfpKnpu5kAqLZGYFjZMmvdP8VnSgrYkrzPYBBXPrZgEWFoV9Ae2aCad7N1kHU36iDTAmZEswnG9vo8gzmw",
  "key27": "4QxibiR63knLig2WE3SsqF9HQKvECHSwHGUhV64PEXizN938R3bhQ6wxhp7nu7C2QHZD5KR35AgTxGtDkUJoCDzQ",
  "key28": "rMPNWz2eutPMSGZivdj1MVy8jDhRk1s9g4EGCuQjk5T8kmKXHxsQdd5uaNSvyTj97yDn3CAX2t6R1M9c7Q6E4YF",
  "key29": "3xbMpuCNyc9F8v7mi3CvdyjZR5JhUSPNvntUBZc9GsXGBRhshQma2aEPTJXkLsnLEAyKG33mMAHriHXUMkALhoSw",
  "key30": "5SitKrH3sojDCxMhFD5QFsrDEs64FKBzHiZbDap4re29sQ45gWXPhrJRwQpDq5ohqfjbnHsG5Dish319iEusMgCE"
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
