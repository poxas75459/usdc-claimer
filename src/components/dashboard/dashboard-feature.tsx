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
    "3iZYcRVZDZAGsfQkCLHNCCejvZp43S81sZceJvYoLN9vqsVC6NfA5ANDE5VZtVKpK94utjWZ76CEufLL39PuJ3af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1CErAdgibewZgzXrLZBDvnPkRbxo9XNHtgoJWboFiXoTwGXYKLnVqULKTgeX4FhJyz4bySBHUB2o5BvtBw192b",
  "key1": "5F9HC74XVEp8xM7chFmE3Hwfzx9TjpBXFVAY6cfdeD9G8mG4PZh6p4nRSkzkPSZbTUP2sJvB5F6H23pxuRxVPs3d",
  "key2": "5Bbr3rkcYrSZP57HVy5xJ1yxRqJA1MrA7rWsG2cejggLh9mwYdcz6y5P92jjGNEYjKDsn6WERLQ8tQ9N91qAQrY3",
  "key3": "328Jn2Tk3PTC3aE99TJEUogEVNUGd5go5YeRigW3gz8YjbK7K5DRQbF4ggPh3QD1uQwdxjWLtWyi1iUUfwYEcf9j",
  "key4": "3S4opSU869hr8F5bqr5xiKozVHQ3PWQtNYTjKEaFnp8XtU8hzEPGC4uofud2AL9QJc8zmcv9MabTBbXMiBiTFgJU",
  "key5": "xX2zPb6RPu5hqwwVGjpN85jxBsJNWS2gBSVwmN9Cqk4F5HLfG9QVrrskGd2CkE3JmnyyJH9oEbHocggTQKDzrGG",
  "key6": "2b6FuMNMAkasJWFY9HAuJryA3N7F5xK33FfKo4s47ZKxwewoMLmux4Ddfsq2mWQp9DwxDGRokgnch2xRHbXu2uYs",
  "key7": "2U8rw8sm2RnrisJXUtkxSQqZZDcK1kJTrFXrPcCAVxBv4rfKPzU2Qr4KDqFAQSkQZp6CCoHXX3SvafVpWprL6vKw",
  "key8": "3gEUdAfwCwDEwKE42aTTPxwaYE2KEiGE8zabhXfFpxQ3idFYyHnSSjwhz5GF7UMyr2brccL6aAp57JXVgfLJ13XF",
  "key9": "4uavvSXhy6wvGdPmuUEMEZ49Co6GZS7ExmiEqpZjibZebMKt3r3UjsA9eDAvdw8Y3ExJxk47Fuq5tTPbqXoSc4pt",
  "key10": "UstQRKmtw66wAGqjkKZuMagNwykwLhnRtcLvHZknM9dRK4cn4vxj9q9fYHHiDdxQDFEWmv6iNKsDcR7cprSmE5U",
  "key11": "2e2uEMyto6nQGsiPXcZkwmrwfni7u9SJYnGyWGke4yL8EhxcwvUdE937J8nJfV1YCQzBa5aTcdhPTs4iieNuRQew",
  "key12": "5FKpyKanS86xGvHp9FeMScizrHkUDxwUCpU55Dq1AKrHDKTuiHNLuGccsYzBLyjHfXc9FasvTtNU3NfEHFsQmTZ8",
  "key13": "4KwU3CnjrJsVGycik2hxd5L4nsoEA1TpiENkQ47ZCNbXVhgFnZCWPQuVXQUZg27QJSbhVJivh48SaC6tPTGeb5MJ",
  "key14": "2XB6jJstKw158TidjyxMaNP8JA6Py8bpLD6gZB5Vato2LojYq4vCou6CHLA51zVBx8nGGXKHwHiF2RjEJKs1W2Xo",
  "key15": "3DZwpyReKmMwXNehWjJu6a4JSCaJASF4VehUKmEvg5eTaYNxfL8JZmi2B74EhkvMZxS8pR8aXvq5DBYbMsjWZodm",
  "key16": "4ZpXphLa7jrZ1p7mFBH2KsKdr2wfJwNdgzuBj92y11vp8TaBqWH9N6WFJieTJrnRSMHc2RcBZyJk3UsGiCtbdn4X",
  "key17": "3WmW9n9iWWzXAXM3mTHEExyAryGUsonyfLkggDuwNRT4shkQdPF1p5J5NY7jRZKAjuFwFqoja5GxzQCeaGfxHZq3",
  "key18": "2BopHR9coJnte3KQAQBHAz4kTayFtVPZqKw3RbKcw15jk4miTZUvqvRgtNnvYsgrRhqjKAfcvvJFG4uwweB6d2p2",
  "key19": "dDeHiviLuRenBQgPdJHc8qwPT1FcfEBxQCFMntEgu5U7E4WC7JJy8hNnRVeULm1MAV5kcUpXFVjcrpdDbzeUA7e",
  "key20": "qmWTThnYGZYeNsHR1hgKzuaA1DhLkzqSuATXUHW6LgekiNHV5SpQ9cYC3eR6atDrAQGSz6jtg3JWdNGRZyDZwK6",
  "key21": "mBRu5TTachH4U9uMBoVfPuWVirBkp5ThVjvpvHTGQ77D6ndiu1BimN8wokJcF3cUW7wAJMKh7e5TvbnB737Aef5",
  "key22": "5L5XNop8FX6jM2QEEwxanQwF2JJ8AVbsYPjz418RycEyhbgWnUC8Tr7DXy2ndcZJ9Gmo1Qj7eN6Wb1he4PtoU4ea",
  "key23": "5YjthP9ZywkD4rx4UsJnaU6CGFW95VCUpKKi9QPcmuJdVTRKm8KKj7YaeaK1vkyS6FEAYJFav2kvPhtXPTtMMtjd",
  "key24": "ajGCmdVibqe1CbEuch3qgoGe9R78d5BJMMVTNbHbhi1XE6CHmtW9XY922o11XmmaaEcgTN6nEJFZqADGeL3Lwn5",
  "key25": "5E2tQw8j8Ze35NYmVrWjMfSnhL6bBRkwHTTaxyNGSsfsvku5uWrrFAynXNt91pSEKqme9p2HXnqWWG3HnPVHMwLf",
  "key26": "2S95SJmNFXVqD5n6hVHE1aF28j8J9Km1NWnfw5gX8b1ZFTLY7KZevV5EEuGnVMXKQMzt5rzRafZ2t9vHT6QZZ4aX",
  "key27": "3obsUnf64m9G1s2cNY9dhMoca6LzewgY6wXfemV6obK1vujkjuTUJRvuW1aLSQYQPChk1ExMjUgCgwt3vhrfoFU",
  "key28": "ZGWH4thmcZULz8veD3DwztKt5UEfcr8xkcFJ2LinYiSLyNHt85wubasG8iaChzEhbVTrramNjWxB5U2RAaaY3gp",
  "key29": "4kgM4sKUroSXNLWC4Mjnde5LVfRDAGvxBuKp23vKuQLhL6ihfC5c3z5aHV7mGXsXMjvEx6ZtHj92t1fmK8XZuMoZ",
  "key30": "jFpA4rTmHrCtSfmmGgfA1PkqyVvS6LBsHyNkLgh3dj44WAW61wAxXUnrQ1KEc9YUEaAvz3sE1tZcWi28vG8UCXP",
  "key31": "6gQuNRpptZZmgRrardpee4sf6cw9XansRvphzJeRjtkFewB5jnqz5UcPCxPXkLYoJAnvJV3MnZEpy98zqmATDrE",
  "key32": "4ddvtQzRuwNin4ASig2Jt8cUJeCioBvHMcHhSGEjLsrLF3rP7Z9KkoX8X6kcrZmJzLbGVUDMByJ1RqiTPPbhJqdX",
  "key33": "5sMHHp68LHbH2B5AZTD3DARrVZMLk1ypmJabR2uL7TXzvfwSjxiWyDuVgREafbzeynEPVXDy1WLq3Q7jMyy6Burw",
  "key34": "5qVRWEBY7KU6J9xcRNXycH8gTHb9wVasyHM1EN4nGkqpdHEcBbD7gzMSGaXuMYwoWza2RrAwAN6KfeTKtfLC6vX5",
  "key35": "Smkdn8N1QdDeDtPw1r3MCYNSxnH4TFrk5U5LEMiesPXFw7kHLSKYkNCDFYUAt9EDEQLeFKqAW7pTtT13njy47st",
  "key36": "oaPdwM3utsEhEStk7PuBorVB4cxaEUZxGZPeMRDTDsVCKzK1bwfZhATg4ypqj9nGcrEaGenFk1tfuR5vLcHiX3h",
  "key37": "5ZbEk1ujgeYsSFrSPVbcaDiGvdnuhyWfEX2DpWmySKkD8CbyjR5DFyNCia3maEmyT8hcWxAVqyTCACTodXiSNzy9",
  "key38": "5rfWMD3v3neVDjK5xnsYBdMASuLsST2XfG5f5k3zdVFYLzi6EXveHJ5VNWLgQ5quY4Dsg6aukEjTRPnHhibEbuUY",
  "key39": "3B5yWguzakqJYE62AzHieQCPTpyhXK9BoufLrZs2hCURf6F91K2i1YyWSfQmU867QmjdgPk5xTvxuopUHUiXifv"
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
