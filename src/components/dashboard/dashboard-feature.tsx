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
    "2MvgqCcs1EFQ8CnEtprVvNPoNctvLsppyX55cuCzVTTKpTNdbJfFVvWybGoFM5chmUxcaP4KUzRH5meRRfsTVrU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4yfpiWyxYtGES26TURJX1NgrWofrRtUsRdfzAZsqd8Tc3EZKMUfSi3edfHtKghw4hUGPMua4NpaC2jRFDKAUM1",
  "key1": "4BViFNgy1Bcd9yMGFhv1HxQi8rrbSKXVQJxaDyEbzFUSoTqQYSUfyjFuNKDCN8FbL5bF8k9QGti7eXUmJC7kvRfN",
  "key2": "4TFY5yZevehqWKNFdikm9LrJ51EVseFqoLL2t6eGNf5cRmNic7QV5pcjDLUrLgBDhZMyfNmFm4uqb3NKwyPkJFut",
  "key3": "jzSA2JwiCknoWJrhhxxtqYhB18WFFDA5cWYqZZTLKNpA64vQsECPa2QbqawFonjPQkohB5rfmztc15YX7UoAhVM",
  "key4": "3cH8mNaLr6W76NfTuJdxG2Paj6c5wVKYU2bwA4Vjx9f2dUDmAF7sKpbiMxvBsqB4jVj8kgLALAR6CFJorfB7dKWo",
  "key5": "2iSyfhrsNPcztXTiRgAMyUNY4hTAaWGRRHt6RWQvoCNVQBJM5q5XrojQEi7X6PVtMw5x7CTY6egLL62MJ7imSdZ1",
  "key6": "P2uHVhKq9kj962x68H26pKS3imipUB1ZNPQYepn8VUs2uV6rDqKQ7k6z9g2cbPcF1fKNsuLCMK2K8CuDNhGcXMa",
  "key7": "5wu2ZNr8PbZxR3K1CSH7SyvWEtATXZxHs6mCpqDo7eJKKtpbqxnKoN6kn7n2AgKzs54mGTMH5hjz893qm914Sbnv",
  "key8": "2Tow3MXpoMKW2f3ft9oxK7FYhdVNjSDJvKpCaAZjt8kNUiyUqEsTtPJuyQbPioV5gQTDwVVykQR49TMVUjmV5GaE",
  "key9": "4628RkXDGWx94EWUXWrb41CBKUbVTV2doefkUm5HHWEEUhL45C3b64UmwvBsshMa2LzpJARmTG8SH44YZcvubn4P",
  "key10": "22krSsGQfonuL29LqCqBrEm6cc87eUHppMvSws5Q3bTbeWGoBYD1rzPAdQaqjZqf5bZHaX5DYeMqU5BvpnAJHw9h",
  "key11": "5Z5CXQJS7epkLuxWthMb5UTQYnFyMA84kYMv1nEnDQj8VWyYyndH8wpRftckdW5W5UfuPSbivX25QY6BSbDYippV",
  "key12": "3mfY4wYinbicepgmvhMoyTzsrJUyi1jNKV1U7VJi2F27GjMNjrbWj6dUJS3gjfgrxWaVMBUZDFzPRRTUq7dTzkmE",
  "key13": "3Ei8gVGvXX7p3mN22vKrURBxAzpKY6MVSU12kU3puyG5juQHmKVFgAbjFpC3hzavbiJcH6e7XBVom5JZ1CGyKydS",
  "key14": "3K9nJ1bK3gH28B596yb1fxZZGCvTwj5q3U4mvfu8EXs4JUtajd9jG6T54KoJXpAtEsmWk5owYZBtUnBA96TJ51an",
  "key15": "indWuinxf1DTWeY1tSaQkQ2fPKPZunzxWpskbt5eDe65SnGi1PWbTGHpoA35RC7tepELrxZNRuiKoUKhp6e7Zvo",
  "key16": "du5TKq8KHvgg72Fjm5TG8JEavyvQ1MQMLLdV5NnQpyZ4VRUF3Lbq1ErbKh3httx3fm7Z3KU85sYxKQtSCSZJnfU",
  "key17": "6nD4cT3EqPWJd4DXHhr9bh82H2DtVryZ4H7jg5uyRgg9QVR2bHiia6iW33hTup84ZG5y12k6H7SkeEYxV8qNrvT",
  "key18": "5ckbVaqEHyHn8xpE3CVTASWCvtwN9Wimu9ivddPujZwiyx5fyeYP3Fm2MHjpTxchu1JFAUTR2aEBWzTjoDJ6K3qx",
  "key19": "5XatGuMEAyeWK5Qy3DYHvf7WAZzNqhKYWc5fiApnfioQC2i53w4t4dGQCCY4B1kgQYCBWU98ycWwMAUs2FtbvLYY",
  "key20": "4aK5BzjRmP8uBQwFNUF99zL66mtYPQTZAA6WXHHNUfEsYp4YLCkeAcf3Pa38VRaYLYDnjGZtYPXtFFXfTK8yaXbr",
  "key21": "3Dg1HFGx7g11Wz3qFJR58Pfc9m4TUABbXkbXitbCut8rXGUZXr23ZNu3LqKxfWm5K7hV1UuCBJmBPg5pgHDmFX4y",
  "key22": "2bv49DpEoccwU1iKbbFzQs6kf6MJ2hqP8gmDvRnjjTJuEp3Z9ZUfRnKDKrKjB3guTcnQPpLyofGESSqv5Fn5w8t1",
  "key23": "2BKiY8Bu99AfjBuLCvQoeQ1sU4JfbQiKFM5eqGRLbECn4r7gDK5n4JTdQnt6r6A4crA3nKCPqdZHhXExVUtKkizR",
  "key24": "4tmmQaKxJshr39Av6g2U4HU32nmxU6HYNj7Bz9JBan6m3u6ZGNaH5MTHAW8xvuubN49eVCuDLXqmCrS58H3tn9ff",
  "key25": "5QwkuUnnx4Y9MsJM2HPFkJ8dMe7c192ABNkaEiz6UM4K4kK11rhyKFJ4xeoSyhgTmrQwKJeeAoJnDSRZQnJEn9WS",
  "key26": "66MGwzZKVwNaQmVTDNc7ayHjH7q4a4xsXJqpoq6ntYXi3RoRqSt9QDHu82yvrYDBdhLbYxhkMAAmY7MdFpNWBLr1",
  "key27": "2HbvUiC3aMJ9t1edGhQhuWutvG8jDd46be7JGaGhJfpUqfgE6htPi7xyguaHGeazUJrt3pA66Yo2Vo7P1mqnm6fR",
  "key28": "3cR7mh68KxMPaxFANxK5GmJ7BL8tyLAe55yQdDo5iCozyg2y9NtcYRWdBrNngRcCK4WKkvCchQKoqeKxcHP9fFPY",
  "key29": "2SvEPozjSuv78DV9qvrjpekT7uisbyz4AdRJ7keucEYyi9YiJybXkNb1zEU2Mh8ti7zT8Y9YaS8vdwXpNHem1i6Z",
  "key30": "4K43q7ZpKkZ2sgMYjWtkW47sdV3MwrEbefj8i3QZb5C9XWGM1Assetf3uY5cVjw9uwHHNXZyQJzbToQXN919RSAx",
  "key31": "5c5m7fepi4J4XjsZiygJt3BfRaLwmaHGfXucrbqSzZJokEkRuogxab4Ko63ESCt2zEB63YiEhHjbqVtEgD1gequd",
  "key32": "3LJQctdC66aHdui5xfSSSP9WbARdxABBSp5P4qzGwLiBSwfqY2Wq5oxVFdRrCUq4dakkXr1sDjqr3iNbeCMTnJB5",
  "key33": "66VBj5koUqxJRKtY8qoyWNxUkW7iKXnVwKVgbtQToRTc2uXrkXE8NFH8fiB4QaztRTekbzYQZ7KXnUdSRQekKoXk",
  "key34": "fohD3HxM1XmuMDMoPYqbvcjqVDvJ8XRRkVvyx3S9KgjaVTVGFoPPNiieqZQrNMNjxsHc8P6TcRkgpq8xtFDQLZp",
  "key35": "5ZoBpgS847EKMZbZPiLZ32E1SKjrxKGY7zL8pTjHswFD7AWWNjy9aK5YJ7kzC53j4EVXFCS6WAVn95to36n8UuR6",
  "key36": "4Pc5yE8gQKqkZenepuw3zAuvHKaQEQqUcUpQqRYktoxvsyapYYqBfWNJYCYvM64dqmH43L2P5dJtSFCPiHBHyHbW",
  "key37": "2cfVfRCEHNv7bB6RmBUnf4ftiEe6TqzYdF1cinsY5FuizENDLrkpXXJVh2mCHPNKuEaScwTzbTU8McLCSrUJghba",
  "key38": "2zCzUrrZzhdzHgcSZPsgL7jtKpqEj8D4PcK8EdZRTpGYKupUXoh6KKdtiXWTke4b3TJ5UmXK7UFkkWktvb2t3bLw",
  "key39": "3iuGUw5NgwmnkW9sMaVER21YLE3bhDQzJEhdzFGJjoS8214iJwhGuibJfZ5u5ooAAANCCePgWFauqBkdqbkCt5yp",
  "key40": "3GMfu8S9KnV28wNSWpzUYCych42pvLttuzXgKcNmCShUbHPYCPMtoG56KKdEnLKZGuTVq7gathJWUt4EA48csaqD",
  "key41": "49kbJhWLdtYLguhXwxFp8ZPzWohFXx4LYi8wmwMdgoxpgmuK3onVzQjD2hMH4ZvJbuQNCek3Lt9N3ABv9qzoqgbV",
  "key42": "3z4YScSGgG146URrL4AsPQvMuJgHXMHrGXmJqSEzhhXKw8uiR5zRM1wQU53gFCgzpXu7W6G5c2meZzbhtQFpHToQ",
  "key43": "43Uqb7MKh5MSPJ6QmDwDQZf2kyoyV1CQvPefMggX9v7iCHJX2KW3rAGC9X1AibyaSBBFbY7CJo9TRiBH43nHYXre"
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
