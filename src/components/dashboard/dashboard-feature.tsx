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
    "3bX7hQQPBgt1CJNQbQeuMxpGaPJDSGQPfGiEvDey5rBkagqYeFzNLDbMnTGkcs12AydykZjNHpd1qVkT3NyCztAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Y3PRP4NkLvMUuLCi5pueuhqjsFFzpMqUFzdFpwiGVm6biHPgcbG8fSYEhPaUPtj963f8x2AjoEgVVriz8rQRr9",
  "key1": "58H3S83ePV2rWiBHVfmhqagMD7ssuhNeapTd9wpgsiBTgVN7H3AgZXYXY1i71gB5mxxDn6tYreztYF4SummgvQR1",
  "key2": "RxJHKCaGjhVVAAbXGerYhE4NqyYBGmFhuVZrEBQaQGcrKZTwcyZTgZTCzftY9bbtbYvJLUtDckuLZuz5Vk5KExp",
  "key3": "4Vh3k2M21MDyZPdx36pXM8wRdv52sgpL9VXv6eotCa8rwtsaWdCmEuptwgqtd4behEHaYgp3dZqSNzgY43e1TAM",
  "key4": "4UHPZ5D5wHQPwe7jZvfkJ3K9dCZ4szhQj3dCwh9pUCoWByJ25HYKSQxCECvKYfG46b7CPmk8izXtFThaPGXfFgWx",
  "key5": "2QtYY2cTpT67Hg4LNraMeLyVWnBFkuJUrTZfCBYB8U9bBKJpJN1FZHpxmbpkTCrRQB8hEpiLE16aZjBprgwFHmwh",
  "key6": "2L3YvmYKBfZPG3psEvaZe7KjjNUMKc3jLMsgcQbXadaC7eREB9ydJ5xVDtJdEs7MLiUFHrUwhiA2gMD79SHmeKAt",
  "key7": "2Rh5vzNFMPsXyGYMxV4ZLdLwtCfh6xHWKp5Hut5GU75dSknNaXSiPAcQSEibeKYafH3EvHVYQejuJNyENgPRndqK",
  "key8": "Mfcxuqc5rk9tF3xA8E6cEi67Nd9HnoDajK6VJzeAiHrcWJJjibkrGUwKL91YpqvF5ZVVZF1s8XEqShD7yNj4eGE",
  "key9": "4ohPH5Pu4Z4WuhQ9u9DdmXwbmpRNf993bj2kp8QXNU6SBKrRK1p9FV57R3eJnfLVVbBAmR2thkJdkvvYsdNeoPN5",
  "key10": "42FzNyhQWBjCM6zWGJoUxupsK4qt2QSZiYcDS152tpMvEqXskE4eDBz8WLtF3X7dBQWqBKZsb7A93dfgQHs82R7E",
  "key11": "3Y7QLeNgXkQxVLoHNy1PKLDtcPDfwNVZzdRRWt4n4wAXSFMBaHUjK5t6ugnorEDYGeow2cPWdPSEGRR5BqtzVmsS",
  "key12": "YGkedomN3kgnZkhzc6CM78MCfPZJnC53RrdyHGEuMJbbgrAG9bqZiw3iFkg1pQ6UB5fGEvj7APTAjk8Cpm8t9HX",
  "key13": "53wLhZVGPxxH2k4ib6JFRKgJbiwzacs1F25M7RHyg1zDzPAkUSczCPsoqo2QmVSwMscKXc4DJ1wJ1GMddee1Tg4c",
  "key14": "3T7yk28D7k2KYRdt1XH337azivmKLNrFdVigWYSSn5Y5damYEukpVF8cPF8DXumPsckjpKQBMNHNf6wr9twECZPu",
  "key15": "63iiRk98j66xEinCKZa9evQBWS1WhYTxxxbW4eAX1tjyTENeUfaDr8RpJsktuY4tSpXN1xojh1pAdEwzyyUJSggY",
  "key16": "2F8iuYztpnC8DqSudcbTjyFMWiHfrkT76DtNNkJofWrL9tbzXWxsHTBqYAmDKc4hZ1JLt3ZMxat4kBsvUCLP5Tq7",
  "key17": "4Jd1tCDunS6gGtbRd1HqSJ8CVSRASmZMetVdFFgX7o65bEJs6fgbqHyNrXJDSGSWBZpy7Bym9aQhnfi2wUrppyhm",
  "key18": "2UCFb14tcWVMLDVpEo79sNbo2juXVuuBHEUqSrJMDcvcRFVdwBWqm2guvdrSHtDd4Pfb1ZnmdHdfAgckBXuo6LPo",
  "key19": "3HYqKk4QQDPdn5j9TK5ktzA47RWhEuo8wKVD9pNa19bgMiJTij3W16o7F7Dd6P6vQ9XvHUCRaKCcZfSEiotvuauY",
  "key20": "4zJEamJVvM7iQiYVAcdg5BNFhNV3HDW2ruedVdX4ANpcPy7Ftgt628A3L7FB8deirh2uZ86qZiDWpvTrB8H35bd9",
  "key21": "5g5U8xrRmAgUNXtwH4seZ6bERsYXXfp4GhbyLSg6c5aufidNRHJdWakyrwtdjgku4uTjuNLNoqcwX2SuDMq8Tk8k",
  "key22": "4WhdJoDyrg4kuGRPJ8Y1YhcjojsAfqc6QgoJyXcvWPDpv2WREuZWJac55EVTYaE7QWJwfju3NJHR6F2KdGQNstKW",
  "key23": "4KeeHaYx85sSURZgrafEbKrPyNnmCCLBmGVuxAc5cvNzp9DKRY4bNaApwB7y7sCM37j2LP53hHRwZyGH6qtYTtL8",
  "key24": "2DbB8vUP6MWJKCAWpkoHj1qpsouUjVMuWM2HJuFUSjiwsshVynh3ZKAGC3ZAVtrrMNE1TfKdgfbTeSNpak34gJyR",
  "key25": "5Zs19ZiT4DqNePtweUKvi3kNcYqNuVtmnjk6VbdRGkbozNpngWwQmc4eFb6XozKkaxUY7YYXxYz3uRbdfbP81H29",
  "key26": "23T2kASmn2MHm9nkF7m3p1N6BCFQgmd7U5jh5UrDmaLqFviATiY21hvDDRdmeXy7swZPtFyzY4X2rdy4PjLRfFo1"
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
