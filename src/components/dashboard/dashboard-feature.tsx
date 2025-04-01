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
    "1UQdJCaRHsjFnjRJ9NmuK5EPDci9rUzSDTj57kPC3PugY6eyEUJimHy9fyhPFL3vZNNdGDWJE55XYSEWqsN8tF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WpiVM527Rmeo8iVWS7tZDuumio28yaambmeDF4v3BE1X2c2jfKqZ27t8RvqSLqsVxh3hNyXeRYne6iEFDbgg2eW",
  "key1": "xzGn4vyu5Lm6c7vM7fGE3n5wSAXBFRGzVVW6DCvdyMpNonqraN6FVJUiBYudbpxXzLDLj2dTP8HDyHBwviwDC4E",
  "key2": "4FKrmXvp6dXfGvSqfqUYW3nDqQzi56CouUEJqUdyGka8Wy7jKu2vd1aJfLovmM9k2UVkZwRZpRMwcK7zY85SA5op",
  "key3": "Vo3fLzcEnwz8dhCuEfPU4FD89Q62dHkSeUDhfpb56mwrtq2fL3E54jEEgJbWiTMSS3Sa7C2v6caVnidUXEiYoi8",
  "key4": "3oCwNELu1iFGhLsFCtXiLD3BPo5hfUAYaf3f4teEtZJgC6S2X7xbnrqukrratMgkUWaT5qi2VSbHAoA8UGbKxuXb",
  "key5": "298soe9dx4fCUjC1BzhnxYEXxg5ot67eyzzWV3XK4F2nvhjEFZB2qhoaKuqKyCgK5W6wsCyMAgqZtMS73Ve2yRys",
  "key6": "2qDcE2XQUnvzJupVyFkRjAM9BVvm5he632U7bMBr5Qfrijhi31a8ioy6Avybj6o8bj2y6gBirJ4f6w835mHMb3DV",
  "key7": "4N5FmUaAGUXMkzfKzzy97yyeKoXYfLxBbdrH95p81hkAvFcNZcnxQfjK97ZnT6FGgWJPejQG3tAo7R4a8qRMJcjG",
  "key8": "EEDSu3BwKMN5v8W1A6mVaNW7YDpnRQHMAULggvuceMGXZ1w6KmsZ4cHVptmdoGsam6RtG2MkRfBVEwDd94H4stq",
  "key9": "5HToQDpVBi6rirnnGoPJPf4QeoYGg2T1TUqFUR3j1KnrLgFfhdpGoyuTvJybkueP54AtXxGvLz5b3pEH8U5MTox5",
  "key10": "5eCQurg9zjRhiS5RaTKsvEuP5QYPunjdhaFHC9m2GC3qWaFChukdWtWjHQfWRGPC8cgpJdHf6dqWJBzDJ2Y71RRL",
  "key11": "2tQXBMVweSb4Z4LJ7PwqHCByrBtvxhjpokhRwNFaEPpyh3wmRoLMt1uX2iCMBrAXKzNGQ1a5ZrSMnay41WPtNAUk",
  "key12": "4CTBozdcg3dumh6MVEi1665BVDHszVrr1qBSsyAEL1hiaCzLmRJgnxTtRaW9GJKyvt4t2ewBmcywgEqyVG4ZbvdV",
  "key13": "3vcoFY7CaEhX6dwqQvH1dKr3SdjmHpbuLYxp4PEG5ZWoTuvvbwVYcKP8DMVPnj8xMuUhPmigDarQtXrfTqdKS8w9",
  "key14": "5BGpcJBZbfabM6PgDXCacV9pFJASycYuXv9fBvdP3VqecvUN7izd7CmsWRbGcTapYckKUmZNN5h3UyrHayQHZuv7",
  "key15": "3NTdwQwPFHn5S8MMkvG8vKtGDEgPfmZAUK1wJfghMHQauxygoopqv34UxqmeJ7dPYrZWDCgcTybMwCZ6Y22fs2Ts",
  "key16": "5MRfFEAFtK6kQ6g2dCsECh3q4HzGwHQaWYNqqgKHEGHAp4BoB6N9goa99UEvf7qMt1sGEkubJusXCfv8ArtgUvn9",
  "key17": "5iAWqXf8q55ps7YDPVh5DhkUGq3K1RBMJovbpYR1MrsY5v3jpfsmbHT171JkvrSrss8rTJKgCAyY3oo8g3zLef3s",
  "key18": "VhakP5hCFWgCTMAZ73A7zFfuK3SYcQgMhtKukENVyK1cP5P6p14ZJ8ToEjQLhg6SDRurPKDfuf2vDJSjU8mChrV",
  "key19": "42fbpn6cyQZRybnPSMqb34LKx9TKtDgtRfFQKhjDU72gTewUBX2muSm7wKjVKpTiiappGhn3kP4hjMn1iWiaEvHo",
  "key20": "4VZE92RsGKdTdMNPwgydYdeMESAfo5mq14qwbEy6g1yTd96CWNeuT6UAHSzSqapi7cVWRxdApdCC9e5E8RA7H2LY",
  "key21": "44HjG4bVL9SRXfcSzgunE79NA3vuieLPgetmjribiZMphq27UgYZJEuX8aRmAJvkvbJgUc6PW97vDNQv14iwo3iA",
  "key22": "2Jm3mDpsCxasAPFBLBGHeBrWU9NM2SA24UU5tprWPnjf7i1FoLNdcFXXtKNcULNtTsg9qiTLkpCGHrxTF2ZqyNeV",
  "key23": "2VDY6dECAbWRUEp9JAaxXSwqbqGaxdmr1odiN2jvBXwdcQsF7Qe7eJPSzsAb45ahjqs1UJcearrK2fBPf2gZFXRq",
  "key24": "3sbnSvZfqMKsgHQppcPx1TDk3McGfHziBNcQAVoFUZCEHqQRpLrPRYf84ZmBTNj9oCjes5Ahzq9cc97vCXKZ3sFG",
  "key25": "3p7GysrHrj2c5anL92ix2FsJkBsyE7dcYt3ZdfR8ECVh5yYeek9F7tdTxJHr789FDECLBQG3VXWtJXScoJFqsUM2",
  "key26": "4378C7xK8N5o1y7n9P1e99b3VKfdDAcrrJghGZV2C1nhdQN5EoMyU8JvAJgjAt29oTrQhuovD9146sYZ37xPiQbY",
  "key27": "3WutGfZAzEVFYw7yVfNmh8bE4nWh8BUgjQq1pH7tdkrCUi2ka7g2ddVkpReMrzNKM3NkziNSzJiARZ9PKBN6ezos",
  "key28": "4gcWrAZ9xw2bhpESeJgcmw6dNztXN4e8U3s8UKv1FJbc3XdLankmxho5ceP9e14w6UhECFfoeBKH8miUDyTSPVsq",
  "key29": "9826HeL6gwtGC75ENeRf66X259eidbWPHqcob6wioxgBdBGK5fNRdF81pH2KUDiiMGHbZaEtB1aSPErCf145g34",
  "key30": "2edeM2v9DD9pXpvPJsvd1327mJ7gjszhz9pGu39K7yb77GC3gduGvhLoMwcWzWAroKCXHQ6qTn1b3gfEk8mpwVWJ",
  "key31": "jt5RZNfwjAJEks5UEqjvWChbN8oeJmkcSG4m3vkG1nzPVkgrVNNpsCZ9eHhsq4MKEuBACvDrWe9mVHuH1LnnfZ3",
  "key32": "CPBLwYyaSNsWY9Cdhxr6nSTcTjLxpFaNYme5AbYCZP33dpWHwB3gbSwu45guVBY63n9VbBJLELURyzEQbpVrcu8",
  "key33": "3Eb5WgD5HTNbGbnp2TM32FtZ9juynKKnqQt9bCGKprEL5LLg92CVtXjgdcxsix84reALN78Q6CjFyvfXdSbffse4",
  "key34": "2HCtHz1V7e7hhBbywZKtML7bqSeQAMGg42hAXnAaiDxJm5ymy3qkSgBX4KBQJggfiEkRvyaJQTcX5tmLeWHpwbYi",
  "key35": "4gw2CHn5nq2Z6xrAwxNp6uAnean2buU1nvAJE8R9vcdm6f6Pjb4UR14M9iqXN5mFUseyVCx3UU4trADKWSsFsPAW",
  "key36": "4dSaz1Jne6t4zLCiUBbXLCqKUxCfCfqfLijQaBS7CH9q8Z2P6Ftm6DbT3eCHaPcsK9zAnXyfjv9VbKXLNvcCYouS",
  "key37": "4Tu62r8ZXjoHzEmPsPM4t9ifHjy9Ljng1tuMHyeeJups3scaCuJkxe6rUhXBk8SZHeDw5ojo25XzVUbXDWYHTpYw",
  "key38": "52St4VwWjYravzovnNTTQzTU5S9nFfVWFdpbMPJ4bk7wsxnNkqkkBYKQMSRiAudqf8Wn5f96eHzpPYzQ3t3AKiw3",
  "key39": "2cR1PcKfGJVbSJp9i3qwc72SVHy5J1GyeNg8NyGpaDxEemnwFRSYRBY55AqrKacq32iWu3Zn45H8RKEwH8ht6btB",
  "key40": "2gDvLgXytAinSPi3KwMKoW8fxLKMBUMFHGDmYkpCkQvCGn1X7HV2bktm7J9kVnqXkVYthbd57SjGUioG1N5R8JDX"
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
