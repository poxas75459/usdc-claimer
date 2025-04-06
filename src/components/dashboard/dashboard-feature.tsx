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
    "2t246dSo8TMB91t86QFXftStb7Ly5ZcR52tK24TRMKTUNisgEbvoZQ8sVQNFWzmFwafTWdcfJASxdZUMmbtHoCvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2sRKe4fS8TLQ8kHjkxjcQpvMFS5JbS4gGqnQcDms8Sbpi899Jgy6Xn2BQddwypdr5yR6m4j9TSmmP4KXh2ZBNp",
  "key1": "2t8n2ZTSkDV49wVk7H78DchKqvTZ34sybCNeU3dTy3JGUBcfMbTWAUzgX9x3F28xz9hMmpNXTDGRhpk61QV3mNUi",
  "key2": "Vszgoy4hDT6nFDjbjpVcKNLFNwVQHJWaGoy3C27X9Dfx2hC3qhM831iwyTsKHMeZCdWWp8KBumAVRB1CFAsQKYo",
  "key3": "4T8GVtRXzqAPpWbCQreKRTM9XLWwQo6hXuWRFk39tuVBmaAKzUnEQAUkqAvuETEoveahbaFxgg755rvPFYG1ACiS",
  "key4": "2CxL2zuwuH1xQBioVTboSyM1UBa6RHheD81ocmYCU6iT8rWK9Hj4zkBGzVnapJnjFWHznmk8DGeNnV3m6aGR2rFG",
  "key5": "5zSVhuwTKQxSLTkX392jZUUCkUxUSjafy77xpM37BxkaXf2zDYKNEY6tZ4hNmPBEeVs1w17T8M6xCrH5mmeB1cjT",
  "key6": "3JKapWbzbmXaS4Tq4RpQX25dV4hPKw1WTkaXrwaiXbRwyM4QuymiCWAyyWnR5tRLdHv4TP5SSTC14zmB9uehjaeM",
  "key7": "3oEs1HfH5V3FsTHqeBqTgrc28GXbGEvnNMiVfmEQryrYSh1b1PqY2fAcaL3WQPZqLfwuu21VLdSR3A2QsCbkp5uf",
  "key8": "3zmU4uyeGifVatwEjRy2EjBF61Q1txe3S11et7LNHGzVteznL1UpmUSW9MhupHKpnpnvyuyuMwcYLDX4JPVUfDqG",
  "key9": "k16vMYFKwVv3xZKsEHLQgck8cT717tjox84FrKm4Co5dHAjg8oh8bwvGDp4Z4EQhEu6g4xJL4McNfWReaeumUN4",
  "key10": "2kAYom4pnDTuwHAqs2w8DtW73X7owZTJxLL48L9VFozpzceLQDmj1QvuTb6RAffnC7jZYxgYDFahxHsvbarQ12wr",
  "key11": "CGK6sVuHu1Mxpq7hMYjHAcnwncFHcFrNyEzzZPiQxgNcoVGfHrYNrJFiNaerDuuTBDa9qFGE5DcnEMHahdZvWjq",
  "key12": "3S4kiaWyi8JaTAHL5u34oKGhcorzx44Jc6HHX5YdKb8tvCgwAQXVdC3J4td2fBx4VsquM6XQHo9HZKkLF4hyEocw",
  "key13": "Ra3B8YhVbpVm9x4pdBvqyA5iapNeMgzpgYcUH75oDEMsK6g1NsmznVWEi8eaNV8j4CPcPYvbGQgbgadyM6m5VA7",
  "key14": "4piL6ksFRYaeRLsnR7aFf6ARVCbMxWha68vsEoj9SjYXZ3CquNwzZ3qSXjPSgNhbf4ntGv3W2FD79VZJaFFVNURY",
  "key15": "3S6GW8zkZ94mYXTSUhbSXaBzvLeDdviKdwUSq9D6Sg819iEBuiskMvYtaihqJQFTAqhkr4iwRtVuyYDdZdnU1Ugc",
  "key16": "4hz69hQ1cmQsjPqtsq987PW8k96PUWAePhBAfd6W58zKoz9ZCNKVGEoKDEM1jhRYrB67MqgWCs3SRRNn9h7q5cQV",
  "key17": "59GEAeoCBwJSF1vA7ghin6chihWXZNm1mLy63mhoeL6MjJadD64Pxny37ANQgDvJTx5KVbJUZAJqLTxWyLgtdHJp",
  "key18": "4D7j1JaRxcE7LrDd7PfKEr6u2sDMwoWJavSrYuq9MCgtkGuZs3fQTLssVronMQKTyuW23JbxnZ7Yx8m3E1ZNf5rX",
  "key19": "BCH3Z7yWVVPUdBEWdqhVeyi3Zu41RxpiB7LutPFUBszrnRVrRmYR8Mw54GcfsyzUhGUVfYrkcXyfJQ7AShhhAqQ",
  "key20": "4uWLoFyxGZGTfpfqDooGP9qZhkLZwqWGB3vQ3PB3e7cHpB8xbVKUey3V4WdgRozbAya7U5qBEEBhVKgHF4s1eZ1d",
  "key21": "4htQ3bUewS5KG92AeN1QSEckFtSw24kThaQrXx5Pxyzevv7v1PC6hLa8HvQPAxok3sPBtwAcWp7ekkM1wiVoLcQZ",
  "key22": "3xp8GK3WfAUZGVWJoLuy2WDC7FQuTfUnnA15SPFmR332sXVUnZpSB7GoG3DkDVsdMKVWqe6oZBr72NCYufr8eufR",
  "key23": "2FiFMpwik5p57oFFprZsepsS1p3FVc1BdfuSP6btAjyep5qpVeJZZ1YdD3f35N8dTPMVNgMruwi5HvBHDjhXn5Nn",
  "key24": "29ogFa5xeUSv5xWTWFHvJf53vqmHcHcCnpdeuxMTp2bGdEZj4bzis5XkBavgWErUxLjyskWwV19avzPEgr8BEJgK",
  "key25": "5rGooei15godKmThzVnJU7Du5TCdyQpfu98ciA8axJpY7hutnBHvbHp2rNGUM5jymncpaTrU8CnsdCZM7Gc5Z6WX",
  "key26": "3FYdevhDP2wk9uvr3Fq5eGJVZehhaGDNsfUynhRCGvsNsTgoQQwzR1HeGwL3XSxBzpruPAEiFXoeVysrs99j1ZTx"
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
