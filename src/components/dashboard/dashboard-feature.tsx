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
    "2dhWy2bq358aE3FCSyxZeTKc2bB1aDgEZzAtM5JESP8LFFeTSbvwKp7nK3ryo7Hgvikv511r8XBrnnekXGfWxVa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDpQRqPTeT9wFAP1kp64JAe3ZC4fSNKg3Yv6fKnuPHsCDiKpdT2YsPxr21KbJmHkWKo8i3EHKbXufg1XudPvjMH",
  "key1": "5kd6G9AWUfmCR4HvinhxGisxJ4M8qath9ScvVYvSsGXKyu3SqGsLJtjDZCBHUSov8oah9Gc8mqztBEkkH2T22dHx",
  "key2": "2dz6MzUgqb3Lj8jH8AY1rUubrJJFVA39as87eiutjgTWNsNziksoA8RU9Hb6e2BgHLUPnnBfnP5Dq5uUPf2NTzNv",
  "key3": "46R3kbKst9r7R38vYP254WjApMxqAetGJp1JyxJznmHuf4Xnx6TC1DkWPCQGJZN4yw6fWRhX3WgLwEkZWarzvTx7",
  "key4": "5HdAL3UjKPwPTx8KF8pVujF4TBXeX9A3ACx3cxLEpYTQm7YT2dbbxs5zuFniuaqSnJPFNf5WQ4CtG5wBpTCC3X6o",
  "key5": "5uPfm9zCQb9HD3psCTy8C1ZdqteVWtC2uxYv1cNZ3VgeNmwdNpokfMa4N8RerZzotUQGDCsrHfm1t8AytZsyGgmy",
  "key6": "4FT3TP7MBrEy7aobhunnTfzw7fE2kDHAKrezxmeWJdtAqWKLmFC9XsJLT37k845yH3zXsMS9B9FWUisRVL6PbNyq",
  "key7": "3ncVBkyzuPgwHoWghKgEehnhekDhoH9BMeUZaSGTBujBwNSDMx4EadBUNEteS5PhBWNZs2BJ9Aa7jFpdoRmqBA3M",
  "key8": "cTTggwbpgCcVoNoVtCSY5RaMBDHSjHrazrAy6hWYCGBirf6oWpMerVAfA3x7UGtzWefuEsXPhLVqw9vi4KooKqz",
  "key9": "4VxRbvxSQsQbfsVU3bo87KsMawoUq9pXhQLtmk9Qvk5dWLD7UHFWvrPhNityTn2Rhdu7uE1bpQahaTCQa5FjWv4v",
  "key10": "4wwpJxDrqq4WqcXwRKupBFUJrjmnGr43FnyKpbpcvcwDeRG3iJjyUAXhJabcFNEBFUsY9xE1GkYvRJ48RtXXfy1g",
  "key11": "EbrCXQAoNijA2okdHBTjtyoLRW2Wz1UVmxnQ8cYPsYoePQbMco8DJEMHxjUbrtcb6LXJmThUYnpVXhtvJ9q7P5h",
  "key12": "KgLpEARwhbEGr2fj7kkGshRjEChoWksQNvxyUF9jKudcJbyjuiksngqrZF3q2nUoGTat59DGWUzbpY8CjajraB5",
  "key13": "5r9BCGxBtpzjgvw7woyKPKxpMJc5KVk4SUBbs6BnnEbg5dvzpWxQF5qd1wrsZNAJSrRxaJxrqymefvJ8AonsvLsb",
  "key14": "3oUu8pUqk2zehFz7NNuS2UHbQghtuu98MPbYcWGc42aNeYDApQgWDPtPK8xvLUNCQBbf5vMUQDanzjMfUbpFUaJ3",
  "key15": "qdUq4EJUzCisCRB38cZDvtUeBo9zRFPHvVrzKGy1sx4TBiAizJALrLWLrvnSwiWSAFqsZ3TxwVtwGgGXSUqMKhH",
  "key16": "2mvbqV8K9RGXFzoxTFqFKrsYyYUPMQGmKjMMuzTsEaz7qDi8KzdqcnLjqyh3X18582qhG3SSCq1HgqNP3JMnpgtB",
  "key17": "4nwYh6rxXp6kSyHHj1yAsyXHzQmataVSuFK46mC59tEdEtpicBNbaKYAnHD1YCXdkDkecCQqxQ9KrjoqxeWfDFAq",
  "key18": "3RRqBAmGKh3gVcsUA3j8AJotkVRQk4s66THsydW4ZbM6EstwYCJY3AaJfSCbdp5myvvyL2udFKRQqN4XQfRZy1Jv",
  "key19": "3iYqebG7Mg5nA3VjftCGhSEGM4mmiMZmMnMhETaDM9MLKhdMFtKTHGjVrxwc42QcCksFQiKJXpQWGFuNapsoHBNG",
  "key20": "4gbqeed5E2sbwfUdjCiFKC6Wx2vZ5QZrAk9XTfW8Nvib5BawjtLyfPp2sosxT7eCShc1JHvR7Fsa1DR76hiWkuBW",
  "key21": "5gttCHYWX4ShGBt3Uo6p9EiGbT7n81Av6nGWmybFFWg1MuSeFKkakfFuMFYwGd66A1diq6mrazBuZwRps9kkh3LC",
  "key22": "2U5HQtD8PyHGb9uanUcVFYyj9fkHZXAvaFFK9LRUnkuNruL2oBomyWSs26kLSQxoHkns2AvWDi7KkuGQx4Rmchff",
  "key23": "53mFAr3y5uPg1tDMS5xDe2F7KTD4FTSbsH9YzSh8d3uYvqmdTUjWADU7JWTJEr78p2yAGrtzyvKzD9UDomjbkoCn",
  "key24": "5finLNmZEJS2ykAoXLmpMHw3pg4MEokAh3MTSmGvvo85Fi6MCN4Wa4KLPyuXSMtmcoq86esjAnDQ7GNKuhy5pVbS",
  "key25": "4yZye1nC7hbCWFmXa2hGk9r8mdR9dq3ccEzh6GgLkkTA5z5pbEYd91CxAwqaHmH5Jpz9vEzPABWV7X9RGSPfqKiK",
  "key26": "7DHq51tJ3mY4Z8G8xAwbEkcDzxD2ejW5oJuDmdCE9erNTSL51C37RRtTJ8KcJZCo5DrJTzgFy92qTctT4sHqfrv",
  "key27": "3v3aAm4wJz6iFGKxxftak3tPnkq5A3Hh4VpDsYqYpGCPgpt9yDbrSXjLq3o9jpLHKy94WSzj8nJfiev671zUz7UT",
  "key28": "3xFWVJfro4hnNH3C3SZ1wJiQHSTjTYvDXnB7BcSmmegfuhnNB1ZxdJ6Ga51B55ies4b13noRhKanaGyq9dYwAV1h",
  "key29": "6nMh4WRjDDsr7kwt9dfKoN8ky5jsKLUFAZkXFTRWCPQdvc355FU34N83CW4HvxzpEmfCq6RYfHGCcJJN7BdfpmM",
  "key30": "5GeeCG4ZMhXQZeEGshrdjFadeNTdsUUwQVHC8WkkAydczDEFJd8Lz9sYp4aHFTr7pXq9Kg7eekNttQRigEK5nFQ1",
  "key31": "TMnxqM7uSxtKMg9AGLx95ThfS9vKuZXXpU2tQa3WhQq978DT1UoSqtUwrGdVU2Kpg3tqw2oCnSosponyeKrQGdb",
  "key32": "66RF4YhJZE3GPr2WvfRZosmBu93EWwhgkdAqngy23cb5zhUkeZ8rMxqw27ZnwNoKKoWYusfnLsr5wcQdZbaDssrW",
  "key33": "5CqANcuzeuvnbNb5ZvzTpXqyX3WqWg9zfZNfHWq18uE7Rt33xe36fwBmR8cByo658etFkeCqcLeofSyAew3CicQj",
  "key34": "49srj6G9yMjS7xHPnKzz1z8f7YArE41v2rPFEqJLjCVxscgtFXiDHNSFx8owbr5WGv61xZGr3HhTtKLSHXg8Qpr9",
  "key35": "43xXBDjS4i61VYX5No1xPj5TR6aYVQ6KNiQuPMVrMTAfsqGxgR6pNHDDv2CGq7uQZFeRtwRQAK6e9P6p6VqsR6VW",
  "key36": "2DzxXSmBJuv3fNrnyUeJV4zj6P1xAF4kEEr27tRXndvUdNQsKciSBXP6i8KjGE7EBqiXfUotFdbdmicd33ApbAJE",
  "key37": "61GydN9VfeT4ARcHQyNHhPcbpCkA2NP49dfFcU8tArzJugvJ4JptpxWU3qPcoZLzx5ksBbqS9RaFGJnF4VhYnxT9"
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
