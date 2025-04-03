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
    "44TMwou71HBygC65JBnVtoynwR3tMHfL4QbJfSnNisANxDgvtnRz2gt81C3d28vope6GQXTpdUkG2ykTazzBezUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkQRS8bABXi4NThqgabEKZbrMsynWvdVig3GKYpDBK8PHNqzmm2R7pMAK2Xn6s6Yhym12Lv4zweuvFrtTBEiSPz",
  "key1": "2Txwj6VuC9WKyPhNAEgRXrZtNYwfJZ1ExuRyo46yGypXMMF1UUwrz4dzkytuAEHZ1qXp7BtjSWMf9sfLCWotxJfh",
  "key2": "5phUpFtiriML7wnwSCG6P6MvKzMFc4UBsxEaARkLw4nPBCAn2jsJKYp89tZ6aiEkxpBVfQppVpH6NjUak89Ph7jG",
  "key3": "EWE2izpDUKBgD9GMSHWqZA3u76Va1LG8NEDVUkvhNaJApN2w2rGETRboehbkPBCRKGb6bpF487cZ4EPYtW361Cc",
  "key4": "4Jj1JhEyQB72mtZyQ6MrrW26wyAVqDC3964HJoFvGBhyZxCU5f5Hnvw33KD41iwWd1pzVenYAnpva3LDAqM6toa",
  "key5": "2ot8FecUDuHUCFV4wNZdd6sECJmT8x9WyjNDaJDZswsvb3hW6PkEnjJ9NTx8PwFrhw3m7SLQh22Q7dhG3ySuZVfp",
  "key6": "51yTcV47WWXqdEv5rPMd27zAsuKktZn9ZwCrpq1wfCbdSXJb86TbavWP5tmH1BoQhUBTLZxPKZ1nZVqrBvDLJSan",
  "key7": "5DjG2z375PLTy38R5HAHszY1grD3D5r1PEP9LYxZeBEBwijG3Sv8W8zeppFEam9PqJZaFbDtrLPW25LyTTra2rdG",
  "key8": "4D6eRpSqFwmFa5xE3TzdfZXx2wAnvNUiKsiSmdWMt5Z723vYcHfKFZpJqahjfMEaRDXNCiXUeg2HZ2nn5DEpJprq",
  "key9": "3pxnDsAtkwLVYTwybRMSvQnxEG8aArERz2TFoGFsADTortuLwAWYywdQtC7eQ5mu4eehtq5bWbnKqA6AYSYVXCg8",
  "key10": "4zVqdqvkseu77Jz2fkYGB15b5Eq9EzPLTz53juVoiG1p3VNsBusimzLai4F31okqzztmJaVUa6aho38hHpWKVurL",
  "key11": "3XwQGJkBD6qZBsQExnrvqKfz11EHm2EWSJ8Tj3e1XGTBit3kFPAFDEq96pxAwpwxGHjpEVCMX2mUNrKwFa7wU8Jq",
  "key12": "3KZCxWCwhHVf4iK3dpLbMv6JJX1nzR6SxTZQKv66QrFU6HUkg52H98MC7QRen53cuWwB3ig8U3mySURzFUFiQuwW",
  "key13": "35EmCKgPa1HRGssvssYgd7bgwNju4XWT5NZZp4UwaJ7WMXbreVRWEct3cDcoMwsbsgPT75AABJ7HvpRQvpGx5xcY",
  "key14": "4N8hmsqBPK2WVYa2LdNtxHm486YqBqEJNc8LNf9GVjLiDrkgwKVmrkccuCrmfuQG9CTyiqdWgZFewjkX5SBichCz",
  "key15": "2xxJNcWsXys7Ttnuvzu2ps1cxVN4rXnkvZh7J8s1reFyrrSLSEMSycCcNh3J38o256UVnqBoSogTJNqtXZzMBHo1",
  "key16": "65VtbALnu1RW3QFjYjet3xqH8Po61czpUywatnac6FWtoKGXzNyqEXcU8w9Dyi24yuustr4UKrSkdn5BdAn1Mn68",
  "key17": "2hp8K4LAgxg4QhzMRzDKh6rbZSBjJFRZruq7XyZTKfsAZmyRMsuWYK5p1qv6UFEh57qnPrngHopHgcASHx9x1Q8B",
  "key18": "4HTZrZGdMEA8SLd2trerJxVW8Fw2yD8yeRnafM4kheugCRWmSB1bCMuwLsCgGPNsFsRvoTaqZMz84jz4MgJL8tzx",
  "key19": "2dEF8xf6tvWvUdmQtGcX8DMqRxiuLJb9tqYemwpbmr7g6TRz7GokzF2CChFv2cscaS8nq42r9hJnMgXv2TegC8fh",
  "key20": "2XiQ4mkT5B1oSHrygTUbmpCa9dydSs4o1eXP5Lwjc8g7Bzjhzkr8Dzeg9RPxcN6kUAJFzBhgaoFGTR8m8nTGMe7W",
  "key21": "rTTYZ1Tnun1sHUpsRDVX6AyJfFJGdkGmpnsbYDT81sKzqHF24j7t79XFPXHpiaP9ZvnJVK6n5buFx2aiAsVoTbt",
  "key22": "5iLerua3XsD4vauanKsdFfULyrsHPzZamuGb9xYYpgtV1PvGu1h7NivQHv7VsLEjtPQPWrLEKnwyxTG3UawTocaB",
  "key23": "4HCntzQQGkkGmcEEy3B7v65aPWH4F8Mxq23XTXt2KW211aGfJRs2KB3haTid4MSntLjsLnmgGU6cTkpqKivMAYvW",
  "key24": "9x9B68hXNqFQ96r7FwjfKFgnqn8pn5nHwKwTfhCQ987ra9NgdsUDNW8YiZPG5MEjCMhSbYUussVK4KwCqhuEvPt",
  "key25": "3oZi3rQKh3BJ2YerKVrrbWeFFpu8qJ6sSwqveEaX5qyeehZs7a9BsgvSo49o78bJYeejt2z6Pnmv9JDoEA1xD8vR",
  "key26": "f7mA52PoxJwhj4cKJUj5esfXerTurcxfDTEhgBXtAz68MCzcVCykaBKem4TnUJR8QHxG4YCUTWgoVN3stYq5Ven",
  "key27": "sWUSKxUXUwqbQeA5YkbtETazfDktJJWv9MWXxSbPghtjLXMpggPxVJZNjnvRGHinXuzfKnfzaVqL1dMKPfzk5GV",
  "key28": "3sgqhXvo1GdnXNbkzkrGHYzksFgYgPEYo5PuDA1dhFhJHAZTKUBTAvKH7rCSmF9picrfMXUkJwrZw2t7P4bpm9Qm",
  "key29": "5oH5QN4H2xafeUgnbttk1FNxpvaDHEQNHEVNC8t77pAZSoMX6MjJaEq4qssMWDVnVam3bk6e1oM9fFnvQTQHYEyw",
  "key30": "3awR4iN2jzKB6jGi4VoiJgDmb4J1LqhL7ENb8pspM3TZmHpsbxKYQfhUKpkHpttfUK74Z1jsdmac8Xk4zMqdJNeZ",
  "key31": "3VMCH1A6iMpjBQ5eAR7fDwJQJ8KK13KsxWRRG5KBKAoBh2vTieiWDsqYEk2s6A1VvAgSctZwi1djxMd6KReFoMMW",
  "key32": "3RZAQxNofENo3e2tpkvxLs5J9nk33og5HMiL8AvJXd2XDEkAiNyiuv3GhzXQFcTfzx1xTVgQ8c8ffyu5JQ8g4npa"
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
