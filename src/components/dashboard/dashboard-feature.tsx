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
    "5UArQwuCLY8PSB72tuVpwM2TCTZ57qQ4mi6nxXJYtHhvAZwVRmP1b9SK1Bj2xDwcV4wTbiAeZsu5k4kebwhoo6HN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPQuuGJaS8QBWuunY4MX2M7iysZdz4oxHV1A4RLLtKB5aAB2UMd5nJr3aFMMCTrg5gki19ceXDPvnkeECYnE6nh",
  "key1": "4qTeme5SdBajE3LevanZWrbN6sbaMdaCXkocja47hEM4RfHBsDPwfoTaoUbC9EajQTt3LKswjLGowAiB22k5UaXh",
  "key2": "4RZaAdsbZPKUkEdzrdbZqMveK4XY7EBENsUZ62Ydc87wmdLx79k1V812a7v2s1MXamLPZpeUubTztNPWgz9K9Bu4",
  "key3": "3x6Pur9zzqDRNLtVdeYm8fDR9xjP6eRgHMKMxfRk9J3yy1kM9nXygQR3yDPzp8mV4dm62V4utsJY4cVeqHRDmhd4",
  "key4": "5GUyw7dPR9jPrEe2YopSjUyx94QiJpzAj9YFf9zJTq7PxF3fznjBKPCsAuku4gs9do4pASC3FMTtrKKX6d2nwiYp",
  "key5": "26hbQNxrC3QEEUQNgfzAXbWmakS2k4B58qJtjS98rC7i9VAdYPr3Xm3b1CSoA5KWtZ6SevHQ1q11kEbyrpLMdg37",
  "key6": "Ym2UndJRUM3mEAyfaCCqbBxz4CWsJmzX7RXJoYXR6iv5r6A5bjS2SikMMvws8wMXgzDxrAYDMKPsyxhxpvWeC47",
  "key7": "5Qj73jkLUNBpFzCeUtC8JQgxTsdw3TFXdSAHuuiicft5Ag2jL1k7wYWWyYz9mdx4tcT3JtfKaNbNAi9rqQWBdeGp",
  "key8": "2i9g4QNd1SBhDAZV2wmgCSTuBgFd3VVmRswBQMeWfFpurUdgJBFrZ3qvCWdvEcnCmSz6bT96BxUZ7Zw5zhGMCv6q",
  "key9": "4Z7esb5FZG44mTJFCMKFNYXa8j1wG7Wxhd2XfKsVh7RaijsGwfvJuyXk8HbK54Mrn89deW5P4Ea3kGeEAkWHmDT7",
  "key10": "32s2YUbF8PihJL5bjabpzY6WYHJ8YhaA5afTJixpjJjLRRChtftLY8hPnCah1sEKtFg3d8v1S1NUBgX2WXmz31Th",
  "key11": "5jJj5cJpdrT8PNmyEcUmpWKWqYcqbDLnQiexayMPy42D1ES7dUGbUz3JNoFnbdDkpFJexqpPuJZNGQxdTPZGkHvt",
  "key12": "4RqofYK4mZqLk7uWwVZAZ9hXr9wvEAGqdmD2KbfEdGR55aYYt7fF77B2HvrecJuvmxv3iXWMNcF4KiWxptDjEwFS",
  "key13": "49an7PoKDcwfpyKjHx12JDa87WUf75HtFVPa3aRcQ3ZjbSs6Eqv5EZ2jThYd9njGneNpWMQ9woSi8cgZZms3Jva2",
  "key14": "MsxuGL6uZr5AMBMfFmSiqWLa2ha6u6h5ygBQTtxSpTFsbDGN3jawkzy1HWkc5wbukDybU9Kg1Zn36W9MJ9i5tbV",
  "key15": "2cGEuJkD7Q9omkXzWLjMHA1VJY6LTj1YYZWzERB6SH8tD5wXnFhVjkbwfDuLcdfP5TiCaQaHRuzjXLvvjatUNbzE",
  "key16": "Qa936TzZzAi6P6yZ1sUErSAudkehEbsD5t1KZcCiASRr1ohfSdbzuMMh8inggRUMVwpUS419wR2invUKWVbB8Dk",
  "key17": "5vsrnCdarWsdHVaTm8Z6bfzmwVeg5NyQHwZozisH37apGDydssu3BrDgQWZucrdhZsprkrLgpKWkCpipwRi4D5xw",
  "key18": "4UbMeAnJkBNaftZe1HA6HkhjE8puLtmf7ZFrB6njK8ECr9jwVBpMJN2XdfSmthivMtcVDP2Fx38UA7zFYmy4bdC3",
  "key19": "2NfidG8NssooGJpJgi4fxUtUTADGupbykWrdmC6wkMmjGd6pc26S4qGVVzp6cFewyTzge8HnQTpCUVkiGpGJNn5P",
  "key20": "3Rn17RFBzG3aHjbfwb7o9oQUKKGsDCQvYMzptAivQ4bXQoJBwdFD435UahBAsKpteyGNTG3cixTgC2sycmeQE3ZG",
  "key21": "4SSbXqoKGyZvEvRqKzFkB2D8zeEP3k4sGc7z7sqngG4w3eiVtfagVnQcT42ELg4mPyrcqz32mmy87FTTVkhbovQZ",
  "key22": "3166SxL76K15gk4j3dVPhaTfR5JXG834CdKEnqwH5gjLi5F31xu9Q3jPNM4gETvpj1AnsLha5YeNQjBi7dsDzcuj",
  "key23": "5MChFADLGeszWgeX9zsH3JK5KzdqBwnYo4mQGfxB3TTL8BaDHhqZpKaBYPx4nKiqpxo3evU3v8A9fNTSYrS4XDa4",
  "key24": "3CbYgSHQVgxdiFQve5sEmyAcALqwZpapnt1TXmAR8XP9wvFM78NyhfMTkWYJURCihfbzJ3iTXMfYe9jLpx6i5j1y",
  "key25": "22K6TEbFfFqhJpy72CSh7kDP71jzh6mYsfV5rBbQga59cBGadCzRkA6ozopHoMpRaR3hKjqqgFSJQPeB1Vi5QK6d",
  "key26": "PCVZGTy6Je98M9BRA8qZGsVxwggByz5mnmWrLRbJjdJBhWiASvz64RoAn43jYgVPHwpqVWrmGHnpTbcGKojH97t",
  "key27": "3mmrbr8t6HpfzKspk2NvpquSVFCknZBjHjRHyJNDMz38Na4rHkKDdPzmZWD5Mzf96WsEzhqvMWSiwaQZpFr9NA4w",
  "key28": "tLejFxygmnV5jPzkmfyFyoY8YJWNwp3RXpfDyz1kTpeCTArQhCW9wUQSaXMoLRMhCaCAjkWbKbLUX9JQyqu9UmE",
  "key29": "4frpGroSXGKEMTvxLzfevbovLdjNrdySAnN5YNrHprUHPDk6551DJ3X3a3eavMKvUj78mhVdeoxShBMwHHqKhf1r",
  "key30": "2K1tJLAEF8rbynWRGRjACnbuaDZvfC5YAhVMy7B6A6i3u78CwcuDpRCusLZcyeLXXcaAVyRaCnrY7X8pnk2rSHMG",
  "key31": "61rVbHpsrK187d6pB2YfcKBxsVNx4qYSc58YeWn1npzS3edVUz8UsRbryKafNgcqdMGjyKcNXRNy1eMUyfXTjYKH",
  "key32": "5tKXo2Guc7yC1xqw18hwVAUEnrcB6xdoQaF1XveYQ1VoipgsAzHHhNvgJjDjvZbLyuTk1Nmorfyf7CP4ocEJfYyj",
  "key33": "5KAuAqmkAyFzKWAwaKeU3qByoriBuxdpXmYZfirqFw1srmHVFR4JQw7yTHYRUifovDcMGpUDLqzTEVbE8DUYFUq6",
  "key34": "2cNNEtf6b5rYJ4DhURJYENQ8xK7QGLL8wiGrubxWNkAgXdFhj5a89T1eKJq4dHhwzEQYnWPixU5Yt936NBG6hdkb",
  "key35": "4CUW3RCYWsr3L5QK9JtNSV5wrUv7yiaY6AeprogcMFf5JBMNKM87MfNF9gFQdfw67nZvzHg8iuW8fqwT9cgyPpPP",
  "key36": "4ZEc6C3ppmUmz95zKkAmDZYFw4WbjP4Krd3nPpqx9ANJr1nrfSJp8UZfgrCc295au3mgH6As63VGGon7595kNiuq"
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
