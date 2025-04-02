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
    "5NYC6C3DKcKACe4RMNd5TC1eVjgVyL9PDm87Rm23DsD42BxkKGRjG6HrKratb5GXCArzHtQm5KhwYTMsepwTgnjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACrGVgPvZT6Qk6j7VvtivCRxDRLBZtKBCnPcoSiyUteTR6bBMnw81fYAkMbBGem3BbUER6aRNx7FXU3vTcy4e68",
  "key1": "5gtPXF3g75Cm4DCvzD7veE4snbFndukjigdSuEJYM8egd4DsuB2U7YknMkPT5y7rVw9Mua3DjKJZMTKrVVmRLSqc",
  "key2": "2Aa6yUyyDPrJCDgbLJbg126SNuMYMkQETisg2AfkGPiUsGUqo3c5ayMyWxeF6KKfqnUCDekB8q6TdQzHV6Cq92pb",
  "key3": "5YKarLH2YomjKda1PByYtLLmr3Y4EscDEY3BzyyejQBu22JGYEvGLrdqx1YxossQ7rHkvPQrnKgswKGUPLYRCMGU",
  "key4": "3UpjbGqkEEWUzwyQsvjkq58EGeiDJRS73AyMrsQxJo2i3P8jXVGXQ3VqkHJjM3XcuJKMr8Luy8ExSRkS7ToFQwjK",
  "key5": "2UQh77W7e2hRD7M2owzzkFpAdhX8WbJYzVeDck4DYE3ELhTTwDh9gp2XBy5vtcxbHWtZTeSuaUZZhdszrL2bcsCg",
  "key6": "3THNwowkttiX1RrVqkXK8sKXqu4TN5NYEs7tceMZTK7evTVZ1zhGasa85GemPEtENvRWF4BJqiqGKR54MD3eXaDy",
  "key7": "4zT4vF6p2fQdkQKq6Boo5fT2p89hS1Krof4HAfMzPKpB57nQqnAoCYU7vpvBQTicEmShNFmwixFY1wKeQFW1eP3o",
  "key8": "45a6pDaCDADSnngdt8z6D1bTkLrdrgevqxinwFysrNoiLkqkrM7YALWf8gWL22cBsRZZwhGev6W1aaZZSBAUM62r",
  "key9": "5smd9c22Uh6H7YsfwrrbBgFNMwQccp4jPH9YppBScmdKTAs7tdFW2yp7MqQrBMra4WUdgUSrkQDca8MuFoVkt4Wi",
  "key10": "3dGDqizeCNCiSj2uyy91R5w74tWuuxisvmGfBY3yEMP8qEK8hYQURxxbuWkQxpX7xxuaVhZLvxrRYCtiFtmEHpsp",
  "key11": "4PSn3eFdZxH1rhdcQMMiEJB39Vomvi8r5XW352rN4RpAcVWRdw3JUntFkXCSJ956p6WBCRcTk7MT2ay1xjm2rHBY",
  "key12": "328bgMbew8VYMQKZuz98GbXDrpBnpyCvMpbebw5n2LRAQJ3cKtQPYcPfjTNXGnwhKZRY4Av3jte2kvsyENZsK6YS",
  "key13": "2QQH8nh18EyBJMpUam6DLYbUnDGPuq5vto8oqpvudVCNcuru2q5NLapNeL9XZDSba2KcXBbQZWq39ZABBdmcA8f3",
  "key14": "3xbNSfm9dg8rb3BPW9mNJDrRHcwqVBKjqxcPBG5ufNgHk6AABzFdviGyNJXVnqrNJipMJmSHYSSaoU6en7hyZadd",
  "key15": "4FadnH7CWnfv8XDQXegEuuuu9cUxjJBjFo1rh32e3v9MqYpKjHvD8aaroDBxgrz9Zohm38XMAXkUiuLf58EFeCbW",
  "key16": "3kKmsqSV4SpPYmxQrFqbfEwm2ooESHUkH2RPDy2Jvhx7zwXVyDLeYJ8KBo67PgMdmw5zyVekkYxpAFMoHHcBNbBd",
  "key17": "2WHnt1eNk7huNDszkcfcJdNjDSQzhW7f4UyZcBgHXtdb528zDnQFPLVQ6CYaYueWkYWM5mmouv8ZC7xQEc4jzRus",
  "key18": "7jzK6JUPZyXEiKrePjwk8ynMY9N2SSaccUyC4EiSs2UCoYNJr1Bi97h5TjtHY7b9Ad84HJe4d2giPbRdrrHEtsZ",
  "key19": "2JjgrWtZSZBEw7wwvbZEBYos5JzVZmX18WfauCBWz8Nqxk581MrahZfmJrv8vNwk7xWQoqNLLbLyg6aQRoPnnGa4",
  "key20": "3p8nCXAhTM1zyEbwmmWLY212EarHoYAjBPphJR5MuBYCccETp3XejcLzpEpREdiCBPvAYKh36etRerrPJXChts57",
  "key21": "2YTYegNc8AanJmCHiz6kt1mfkD9FYaTrQPMAwrDK3UDVcodHMngod4AxVxEqfRm1jhA3TEw7zkhe1FrbuQZ67p7U",
  "key22": "2uHnpGJK4MFf1T4h9ErzBLZLeQmm4qMzmr5rxfedGnCJcNQ9WTmaAcrUu27h8PEHZ1EoKJy2A7P52DMBaFfJEtiZ",
  "key23": "5YMKpF9QsuFTfnKYDp8sqjGDgNsXG5eXsnDXKsBAGAE2oPeVABrSBmKYVX88vcjEUSgbHjSyDskieqKrybTX39VK",
  "key24": "42KPncxvFNtqvUn3BRPoLFJysc6P4iV1VYLVbsgp8kkpugJjjPUtevKEX5s9Dm6bFWwHGjWhcsucSy419y4UL4Qn",
  "key25": "jZ1uGCYjkBnwCX6DJ2x56d3vaZetAQN5L6tHByoZW5c4V1FtK6fs7rvJm7Co4CgccMAjJELFDb2caXPfkr2PUrc",
  "key26": "3ztv1W9SkCooeKT4r27b5Z6mH6mzxUrgrB7r8CyyegEp1tdfup7oPZSbGYbWyFjZn9ij3oaziiUZQ7AFeHon4Ktx",
  "key27": "5xaZvtasNoxocCqtyoN6UxtPESiEQwt8UfUAyhJjt8BgZ6NfJ9Yd8jJXWGZZtV5BKdZWdKRRugTWPr2dPLKEvQoH",
  "key28": "4dA1ST8WPAaLW9S6Qd1FPCKQTUBrG5jXK4QK2UHug2SU1hHeVgXcF219KQWq2kjoTgqgYs7MhCcAFsQEwBYR8LX3",
  "key29": "4wpphsK7X18ZptVosXRh7t5kjvHkBmA7hBwDKtArepDgZYX3d7dsrzCZcZU9V5XCiRDwmBPg1KB6JsEqgeXHCuLr",
  "key30": "4bFWMTHk8qRHztusHhtVQwL12UaSPd8mDmgzDtp8NrZSzszLwRkDq6kjsg6LJWiACoEQjZW6vpwQwZ5CVRdW5R3y",
  "key31": "uVgWSTgWeAgPdmLaoHaQo8uXe7Ak2SLAsoUWEJv6WEc8LQQ7SWpNQv68q58BeRNsSaWYQyobXfE7rCPSpLWDspc",
  "key32": "65gXZb7NjDGjqvE15GERjA3kXuq8x3w1xRHcshb5A9gxePh4mfNeuX8npYAohUemUXj15FDtTurmNFKbHqR26yQ9",
  "key33": "2qEko8osXMToxaqRvNBqXmVMqLtbtT7Zj8Ht9TCDMVjqqbRcHDYo4AruV41vdJsawVniCZv8DpNnLB94KieEKWgi",
  "key34": "2qMTQcJc29H211Mu6oYJJJqyuyrCtXNfdr74jEQSjnCuzrfZqnpiTwV6KR3mvzyQVJ1gWeSfpbEnMVXKeZzNSJr4"
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
