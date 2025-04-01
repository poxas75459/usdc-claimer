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
    "5DuKrwvGgpH1QVuTfWwsYJESkFmCDfoSMSrRpoa6hxddeK5yLfKGTbBHDrmhZ42YvirhKmejrnQqXVck8yN8nge2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RssZm46FR9qdTc2RuUH5gkPyua1rz5toYqj176o4Bseo3ZQdgN6StdFDDTxoRdJ4nhbjPPghyVdEvP4WLhbKPE6",
  "key1": "2tNtNL6wjd1yJbENQtAPWwmpvMd68k9SXguSUjZ8EyiL12EHg33fT7swBPTKqWqj7qJ2STkGdf88Sb42a1uGBfxY",
  "key2": "3duXu76sEo1o7hbCqXvbh1r5oEYtsmW3zYbYnzbFZHpG4nWSrPpUv1VMg7fx4iBN4XL3k6iT1aqYUu11F91nBhMX",
  "key3": "25BpCem7kTDr1ViPcfqdSDEgyeLoCxAMNLf6Nhkr9YpkyFLEDY3cpMSGV27acgdCL51RdCnRvTYBsMPhirhuKEmB",
  "key4": "4rWKz7KZi6tNbyey8TzwhTuGTpNMCVb998oVYZJP5HdRURbPcwZAu29mZgEAENyJ55vz53n515mfZEgf58Ngvq89",
  "key5": "2Bf2bs7sH133vvUZoTiQzgbPZDCukGkk6Cj94LsYrsdpqnJjmdWCnBHLRGvyD1Mz3erttK9p3939e7yARgiApT8T",
  "key6": "5dEnrKa8zD71uArbyxrAW4uXoXu7nYBW3tL6QbodL4xpndYMA7RW8TPsejXPbHrzwZdrcNq5peDkehyx1ozXACM1",
  "key7": "3i2116tAQ2gYxFziAB4qMLwamzH5hSffL4GsMEruMDDad8Mm3ppu4zyskkCD4Q6wR3gr89zYqZnabYrftXjtJuuF",
  "key8": "3auKD8Hswrgh53nQQZJyEHCqYHN8iYABmTW869FK59uALXV1kT22Ky9ioEHZesNimE3L6uYtirGC1Xmv3VYhe8H7",
  "key9": "2KWPozoU5YUPydcTvkyiPereKCwZVekN5NRrzVLicxQmM8gQN9iLuiUYsExCm37DW9zahrtFKBxuFJp2irLTzR2q",
  "key10": "3GoPTJJoXrDsuPWoscQ6Po4kYVH2eFYqeAJpZuKVF1Z2H7U6a3nGYburNTDfaQpTdvPsdfWfJocz6TZViNT6fStZ",
  "key11": "4AybnmC73n2FcwLDesZYCm6wJfjq8fNrHJzcS3JBpnrX6fWPqYbg7P1gv46idtp6QMXSXNYCGTFyzDe5CJcdWmy3",
  "key12": "3tersHtvuD1Z3kU2GjJrGy6NdBXa7DU1CEfe2rpBG62nuTpJNUAAJpTEVUog4zoF4ZH4gPBEFhKHWPJ1JvX2yzqz",
  "key13": "2pLiu7t9gQYgquxXk8JUNspdNr8ViEJmymPUAG78xqsjJVTWh5pMi3LrANwCTJqTxgVrLPQbRGfAy4hvJzcngXg8",
  "key14": "5sNMt6MJRgbXfm63RXdG25vC9d7VHPyfQ3KdQCb5fnKP6xtYCzSGuYcNMPb6aRm6c1ZefnDQWhsSzQok6X4UDFxX",
  "key15": "2mGtodaishc4Fntb6rQic67i5Yzxgf8kBhXmTzSnSrkaJSWQpeJknDfr2qeXq2UoLbYFZscaXY4uLcEJCZQ6iSV4",
  "key16": "4Pc51e7DLAsbKFSBCMErEedgvQDUQv5PHp91Rn7RvQtceSTd9y47dfHdTMuqrX3YHmtKM8EHoiBsZL4YxdHWLGU1",
  "key17": "Ns286asMpCFRCjhDttREqm8o1F2ooHXm3wxV2tY9a9U18QiwDp8W4VmQzphyzjuywpc7a9fzkSXdgVZKaFJ71RJ",
  "key18": "3WEY4XkMyej5HRgMSDvu1S4f4VM63Uw2K6TmJ9dR5ozUDHX9Q7JGhkkTDbGx9cbFyQhXddQau9x1EJDiXK1r4Lpc",
  "key19": "53oYFDR8wp1V6xN2RjtE66ejiGQbDhRsmDSZzuvQmWSHKQBQ2nEThbLWNbdWFdUkyMXRqKUW1EcR3sZNwSZbhcMg",
  "key20": "3tXu2MrKmj64mgf7cbKpidtPUcXVyf9MrWyGXdoMckpQRKqWDGPkn2KCWNLVUeXRp5EEavNP1xy6dYX6bRzr1Se1",
  "key21": "4wd9sXoAKmj6GVmpDuFj6yWtgyNJvJKk4zPPi7DfX7CH1Gcsp51jVVUaLd7ZCesKyJAmx85hSVVoji8c3iPasdKD",
  "key22": "4PXPWueFaLsEsSy9KwvyATK1KtQS7NQpKxVM26oDKPSBsUXg7BNdKtYe52nB3wGMJJ13xed3QhUEUACWxmHhkCpa",
  "key23": "38gSpfDaNzMkVHAL36xndTxWPAb6cNFokDhdqQ3YbFL6WTi8mpyUFUX3ubbBzdgHVVMsyVTEPodMxV9fMrp5wPiC",
  "key24": "4L3kzKVSzdoLUyvXA33zTnrRuXgNxvK9gqz3nFAsXMHMW5D6t6rqg5ceNGVYp4HGeLbMiKX5yRgatYrrr4ijRJYb",
  "key25": "4owVYvVt1p3D1cz1xJ2xHVAdWuQ6jmzK3u39WbmLMJ2FAyr4ADgmDP4RgUrXeuzrddV6oEfFe4BCpsdZe4CMFfJ4",
  "key26": "4UEk8o5fgL7XuLG2xq2hkHntRUpwUAanW8JTwAiiWbbMLJRxBzqLN9kxoKYUbuXUPJYecxEFF6rjYBy26ADjSc5S",
  "key27": "4JuW4rKAqcSpQq64BPoi8sBoAEKxrLYQP1E1r4shBMVJDExkifaNxMzWvRMS6Uayn29HjYojULiLmh5JBMk7T1RM",
  "key28": "3pz3xpgro6fa2czCMubkKdrF52NWCpqsRpUH2xfvsDDgWciimC4tifrdK1NfaFw7k5pu1kmyV63mJgr96Yb3pGTt",
  "key29": "z7jKmakyvscCpFhXLydQhf8tD8LDpXf3oggP5VfbrwgZUxjHRYNdmNNLxkRye1WrAWykKJ2MHPF6T6UxARneBGd",
  "key30": "25XH3QfGe5UfuzctEjek8Foe85C2c1WD2kGbcdZSEAsfkMT7pm3epNqCHs5Py4ZMsDGiSGcu37iFPihD8NTn7Qt3",
  "key31": "43ka3JyW6Qg7JaV6BA737fd9qyQutHa21xDmpkNjoixrVDJNcVGehz6hij4Y5wywZAKANLWKRwxWQS4KNJ2qxMPh",
  "key32": "4MiEUUuM7cCeGeb7AJeuki3WV2Nrrzzv9fbXdCugEbik9CatiVaWBW6asM1YtYabuCjpDVLFr5M9uLcjdmqEcWeK",
  "key33": "9QrAgkpcQ19BHhkDdeBsgP7DVj4bE1Fj5chgijpxJFtB2poaiKR6GHnurEt8SBVoMbzQKMeseH7nPGtLxotioYv",
  "key34": "36HV5EkK2hnzDMEAMHFR4PzVZc8x54ysf1964MRRj1h4MX628FkmTsrNpaZbkzSrimJb9Q7P8AAvh9ZgpyHBFMu3",
  "key35": "ZxEdwjiHuZrLNjYE2VFKBJFNtkAyhPRcH6EEjzxteoWkCpVdNWQe6HYDZDVE4dvxe4sCFBs689nJwPF3hYXXojC",
  "key36": "t5MpNWzaD3HbrD6F6iazy9XjBbsRJYbFVZ4uoGEnCa88mUR9AKTHjXPRGduAkUaMEww7c3j5yR1qXRWCRL62VKK",
  "key37": "5eeayu7LTdZNMuoTYbXCBW4VdLNNYLKHJkAj7TA4n38BZdnC6oXvorANDrQjb5PUYgeUk9ZNbEiWJTD6pk7ej9dg",
  "key38": "2mggTpSPxcaMB9UJ8k3L6kkewa8Cdc8ZUdt1UgwYWT1udQZ8EDKhqVmD8bMT4eKfWMKex8313kqd4rMPbh3NMBo3",
  "key39": "5tcu6m3JTR13JjC8ygL1qZDx5JT65D4iwsFWgXzr6g6TQMeCj5bQ9MBQEFxczex623ivY2EoHsWAf3pWUxdQtw9Y",
  "key40": "5CGfCn1BdJ4eWThvmJPEuUfwNj4KdZixX7kfCafaZfHvKSCVc9XMaf4bVQa2yCHiRcwcj1huAHqJCj1vAgncqZJo",
  "key41": "4RB8qk8GwG9KcjPTg9nFT3oT75hZS7dQEiGLnzBnKTeWooSWP4f6zvFh1DBPuj6TazB6zGLEzhKsdE9gmebS4j96",
  "key42": "4Eixu1YYdsEuFbmC6QoSbz8UUqqYwTQ24hMd3p4YfPBrE8Ka7bA3m9zW27wPZ6LHKwpwRmxXZ8yqkDUuB431bfK4",
  "key43": "nqqxXg3zUpjeDT3rmPSGbFx6J6pFLAtXaqUJoVZkS2U2VNhoVjarZGQomQ6CPnhzWqbJTKC1T4HkF5Syu8GVF7K",
  "key44": "28aF52U1CqLpFzWEdA7DrwxLpc6CzxBpM2wTZ6zQo8kmKxZ6eGrjraY16KJzgZ8yRmsMUEaVuRczWSacRUgzSTZD",
  "key45": "2noUFJ7FcU5VqWkeNF5qg9Jy6eDrqJ3EzQinpAqM4mMDyrhC3Tho6exsid7WNgvTNkay7dFdXeKHckXXa2RxNBq5"
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
