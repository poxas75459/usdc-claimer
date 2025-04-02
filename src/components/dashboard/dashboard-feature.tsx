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
    "2akUovgxSHr2SdbfVAhCudY52b52kfQ4gAgPSPMVwvjD9Tai66Z7dbPHKQR9XyAziSUzHxzein1nUAicAftkJ3V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7zcwT7xda2UCNZvvTRnkn1BTPnis6EdJMWZ2yMFKgmnyDCadNL1HVRnodDRP7tjNHmEUy4H746MAxjoVcJBD6N",
  "key1": "2V3Cum3GZSK8GSuuzvoNu3WeJYdz1HbTXzvqhizXozCT3FKtNGthBkQfo7wCWeGfrmZaDY6SUd4w1fURXHgUQVQt",
  "key2": "3Ssu2aRGUodCmDXm2TfzZrBJyi924P888vd9YJXNqBiPd6pZnaEqC1XxsAcSf8Q3fe3hVYvcTHXaArkYgntxJszw",
  "key3": "5tfpmDhGiuRtbri4YQ65NXCRDKSfFkfJG5H2CfvVBhbDU5eUTNgVDLbqeNVDK4LP4B4DcpZvxAf3XwHV5NtcuGtd",
  "key4": "3q6ERRP4JPQGiweqvN8khyXJjaxbmvByDhpqtw9LsLFSMZRE2YHLsFGTKjdevzeUZVpKSvqWnNbqXRmFN5Gu2uue",
  "key5": "JGeixwbzGR2iK7qAS7rGAfKGc2KN6NVCiF3coxQycW4DHcFMpdHtmUm8Peh6iyrY8xqRfadqKZm4Z336nK6qF43",
  "key6": "gyDQrTtp3TE6foASRypkJAkw1srVAivRS97RPkqKaTJWSHoNahDKoNQdc2Zo16xdRvEAXWK1RgWajSn6zsWhJ5y",
  "key7": "2iThbPQxPXwCzcv5vMfn3ENvxLTLUwkAWG8WC8DrvAqKW3SXXMiGc9BtfWRWjFcgj3egmmaSSsw3Z8dEw1PxpHE1",
  "key8": "HmhDJoG7NKCGGD2XM6cCxsHTRGTibJrKUy29wqgwMKxud186KGnbBp1cm2qy2xHXCmQ5XFwzF4rqr7CTacraLZp",
  "key9": "4oF7zQL34FkXQWCjrPKwSwnjejgteqFeV1suo1ZgiHTZ3SnJeJsmcNbZ3nEdUfus9fBqjdyqjUYjxFhr8T5Ue14X",
  "key10": "4FWJ2rgEMPuofqsjTyK339GMv5JwmEW1Epx8ka3US6KcAXTiXxmwcujk5BKzEfJe4AkbfPs2opeLtbGB2anBz3aL",
  "key11": "2pTqm9A5Pa25r43TpfWGJcqXRt6ZSjzpytmkTEbGth9LjVJUC7Y3tk7YFLat6hVYpYfkv3zMahMp1m9a4PLCghks",
  "key12": "4BwW21A5E4RGScc2x91WHsednrmpm8PWDxx1Smk2dgJaV73S7b1qtrKS1KN18vaLDRHShwnfbad13Rv4HMZSFST6",
  "key13": "5kWzGnna3v6obtUDG9vQH1mWVFKWf436gSvAv9RnsqmrQ5Mf54sLeb5U65FcmsUGUDNnLGgLn7jGrUQexhDVMfCQ",
  "key14": "4kMzsn9MwkzutDWH5JPesZTvaNLdetPdSoVToFqXHRmyQkefme8QbBzrhLeCXWYczdyEFk81Ajp78Y1nW9J6mGz7",
  "key15": "ASjFtL5G3M9gRgc1RBvCEk9iZre59KKHdbpky8HdSC18dXnKc32E8hQQpLtx65KABMBLUjKA5o8kNZgX22kNZoY",
  "key16": "454JsxdsD5296pDDSx54kUPojpjGGU7WPuWfAVVjM4k6eUA2LBmNzH5MejyGcm4osKCxhELWuM8FDmicaBabFACu",
  "key17": "26c3irn54Yh7zaVfPVVksVWhPJhRbHDHMZRr3GNNpCU9mLxbDRTKxU3nb1DT1aCR5JApG9PozYh4nCC2PCw2dyvD",
  "key18": "6642vAUgr23mhPKfpxC43Qn94AtShtuXiZyJZYNeiT7FCAcFMifuxwZ8bNUv9JSfNeTBmcWhYLMYsq9HYN2uVSU5",
  "key19": "4PiH8FuWbfJYLNiodcnxAnveCTsmPuwySmnL3WbB71qmJEQLCYLgRiBWvSDrcSr6WrEai7H4HamJJT9XetxY5oTo",
  "key20": "4ownWr8WBWF77isvFP4KmP4TFPZAZW3k4xy1JEHXEkYcojaiRuKFjXNy2hbkzrQZzhh9ingufXFKBUwHwVDaPnzL",
  "key21": "4rnjCFzauPmVwiiYA7axgr2imJ3e1X1LcUrhYKd1wMvxekSmWSfSShkVuAcxM3YY3nAf5oKirccZXQtzZDsCnfkQ",
  "key22": "5VNHRkFHe3VYKKWMwNpXDW4QonF2JJHQgXksqRmr8K6My3T3hRYHcdQPgzpWFRU4JiNPzfKKoETvePwN15AbRoXE",
  "key23": "2gvsQzcb8DDyW8PHny7hmHk8B4N1j3GkPY1oty61LTqN5jXzMnkbpxf5HSdVyG6JcHF7wbsAy5CHj4WR3hK4n16F",
  "key24": "8UUufHTRZuCyiuTteSrJJTfyVaFVbGcFHRXsFadmp9c3j1DgtvbEKrtmFQphZis229bvfBJDGak7spHy1mrbM5x",
  "key25": "2w8dwgF35KXzVFqYYpWwTnEGs8i3zySxYj7TM7tMFFFSF9aBU4tVw9tCvTZnRC8quURsfQZsPPNSEYGS9BPcLMi2",
  "key26": "3qm4BCrXFjtygdRrP2Sn9wVeABxo1ddypPut8rZKjnKsAMDjsrLRx1uhDoGo7LM8kmCsxqATrhtWFsqk1dAXuLXQ",
  "key27": "5fDZqgievPcxveTMXPtuizMhctKiTeKdV2uLkWSDyGQiAdPSy4fnLd7GT8zVPfTbVtqykUA261xujkR6vPBCQhsk",
  "key28": "DcoktAhMgUmAMx1vLstFsTLikdnMHUsB42Ags1mDF7YGzenpYaDB63ZyYGtbjwPiLv5ESDBaQd267dMS5sCHS2R",
  "key29": "Wsaw6zympH5uH9LSNCtJFUPbJnAq26q9HUkv5FEWz6Ae7eAQpyFaYHnM6v6uLpa3nXsuSx3sTjuUCc21RsFMiDd"
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
