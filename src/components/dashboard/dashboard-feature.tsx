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
    "5tW8fXs2aRmKvhNb6RpKbd5SqYTxJWVzdS4FYCaN3n2Vmo9YhbwWrssjsGvoFWHEpoGEUVWGtwhzwgChyBcv49aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RrpDwCZWchi35Z3dqwZnW2Rcv5S1cFXPom2qmn3VjBE7kfagCmGyAdH1B2aLfZfW9zDPGWHcdrPRW2omHtcPZp9",
  "key1": "3V6WMxgPPyaUHxkMiAfbm4XGZeDHHWrBqhZ4zcMXN8GrYzBx9JRDroG8Z6aC8vpMYKMLvYnqWJv5rCQsbN5npz59",
  "key2": "3Pmh8GNMXk9YcEyTThix2Guo7ur2aEu4SeRXpLiLULbYexAP6aAcHDf84YKEUMomE4ak4Feb8UfVfWVva9n7ggkX",
  "key3": "Q8tiGH1VDaTmfQuaXf1mLSQoaAcW8AD5atYhmiBZ6U5SGzFS3Bi1sxNx4BkBJi6K1AaN9uyTx47sSTqxti27Fq8",
  "key4": "3Nk6G32aGNdFhGx8vsrJBpyk4PG2PbuuMBHGvoAg2wHWYxyR4FYEniBVeyZW3CbySgBD13io8wE9iaoN5o8Tj6GQ",
  "key5": "3XNb4Lt4CreaxutN89pncYiiinoccpE12jugy3XguJDgR45NKfUVx83p9cXNeej28YESp7yUbipiBJkTRruW2Le2",
  "key6": "2iPTGWMuzQ3gS1ZQwF869NMP4rnx9C4qN2DFLbJfg1eEew5EYDDZLyJRkygk5rei3cz7THEA4aYxXmXWaMrc1b38",
  "key7": "55BkbkpAL6X8gBCyCzj4aJdkomJXHAzsVLvi3mVBKsTAo2kmMrvzPLjWotMzewca5i4QCwenD6AtY3GY2GoqVUG2",
  "key8": "wQGET4VcTHXSyjZ2Tqdt97UBiGSEG3DSjr6yEehhhoYNDtafhMCxRReBC2vu5psNqwaMMVVcajHx6ps3e7iWH9T",
  "key9": "2cRzcbJK8fjUsFbiuNTimtvAPC7S8ewVxFgfCovHqiZ9BY9TMeCrBARsWg8hgRMgFrjqCDJuVoYmoPjDuMkBb1VN",
  "key10": "5HRF12e1BLhFh3BAGF6CPSz4LHw8cUJ4M5ZsdkQipTYEpXm8y6HzexR4tMaDAyS966ERfgvSzbg2dkCEMZzrxLbH",
  "key11": "3d822DBeaCdXZVEf1hvSBbAwqyJRAGN5vuP7uTEHsFTTuutHJkmyh7kMr1RSw8obfib31w7gAJQSK7hggxf1vsJQ",
  "key12": "5ad3MQr6zuXiVuKjRFrgcpKtMpVYFaYHXtxx4eFQQMNoM3jz6CqDxBPtEzdES6nJrQLJbXUYN2K475LrFc2q3e47",
  "key13": "2FxoorSNutahaS9mDFGB863w22m2HUMfSieZXQrswzNcGzYfCmMrmtrA3KAsZ2qnQU6S7wQ2nopZnhuzC6Jce4Dk",
  "key14": "2yjZGWxZYkUqtx53Dr4BzeAYa5b1KFMryjYEBDb1RU7K33j6oCKbur8UBFN7U4FS1n6ir1ABB3nmL9cYNQPcpEGy",
  "key15": "YkXu9xTziQ3xG1yy3qdSrzD7Ytf7Zg3d8GLXWNMHyvYUzp41Pcu7e3uDS9JojreB4Km8h5omMDR1QhnuwXVZCxm",
  "key16": "sotJDVWma3qnLYyj5Yv7mPkcoPs3pzAvmHRZ3VrRVvDVL56w26tco1286LQveSv8QqNTPxmLJe9xqNBzHiG6ZQU",
  "key17": "4to6uLku3oCw2FQPLEdxb2S6wonQKdyoZYRVykNRvTBeQxMnTQGomxm86SjkuRvxgBi1oxA7pH6XGkc88PJSUt2f",
  "key18": "xv5rMA7Yv2VQ4i9PWn3erFqRvPWMnegRdTNEq4UiNw6baAidSs8P3UAAVhCiT5Cr64YjnwaXN34mvezAuDqosPh",
  "key19": "nWJopUoZu1Q3o21nUWMgMUur4FP4gZWAzQDWPZuWmLF4Ti3M4AEQffTnqtgzkAxisVFtqtJDnCuF2NDBJoDz9R2",
  "key20": "36DMniUtpjuzngjonsxP9Bj2pr7aiz1jXB69YHynMcujD9yn77BFQg3niyhXS777EaHNZP5otCAbnotoUBE76MU9",
  "key21": "5RRd7N7bGy1jvUAzwURmv81K73bfjX4aHtVsx3auWwCnHXgRCo5hpYzeo6hVut2eDBWnjzPvzHVWwvrmBGYVaqAz",
  "key22": "23Pndn7UMixLseeoek69yg3kngFJMHMnyQXqEiuSpzKZExLxyGigB2ocgsCyYuCxhrnn6MVhWcfierGDqYshHRLJ",
  "key23": "2VH5HWN7hUM3qTFC19DuRzYRqmGhWa1U48mWwignVosSgcxwYcKLUbjDxmNP7W61dYLjaSWKrgerBXXJTwxoY5Ly",
  "key24": "3fS7VzLW7HmDKvosgndtW1XSWhsVoBTD4Qwge1Mv3jXWWLcq1RQ5wZzX8MhVJA8L4WiJWFRrRSpUN5ACfHLE1NjQ",
  "key25": "2WGExdorjbGhAE7qECJ5Cai2rP4mKpubk5dkc99d62uT5RbebmUyumUwZyej36ijAkxKbkRqw7zLkabg26nQsQcN",
  "key26": "2tPCBkoE5vvrVVTMZriWVnaKTwredVxEGvmx7yfJTZxv4cHjEFhMEdRQvvGpmWcc4F1woTE9bunP8whNQjJk8ezo",
  "key27": "44ZFYLZHWziQhaVWGhg3i7qbaKtK8sZwmoZqBZ5fijBpdFhnoF6p9RwFgHxvwDbGbjcNiQyBQnbjw3Qu9iMzwens",
  "key28": "2zez5YM9m7Kpo6S9Po4Ja6BRWTdjgvw7e48nwuACQfbzEnGfj8aurWj82mu7ctK84gQsbP2KD4xRFq6NDVsqnwbC",
  "key29": "GFCNcTYYycnbBwdW77bnSV5bsSXkFgE7FqDz9YiAn1DKVNhxmWDdvazwWRTuDtUxTDLyJnqjsrq4QswcvpoY9G4",
  "key30": "3PPvvE9VSPbzvPaSKxc4EmP2u4Q8N7SGnyEgnZ6y8HuYP7kVXX9FHRMPn3ngnT27ZyLjPAybnwB77sa2xKNLFH9J",
  "key31": "3tJTwqYGN739DkGBHMCxJoJx5REWj5uGMVMnvEDGMniKeWznEVdU582S5Gyb9kXFpbMQUwtsG26RwfQRQTfskBKD",
  "key32": "3MRY876zMUNbBqyGa9e7dbPWjVS5KL7W6dVTb4c4Z1qEFFJnt5fdZtBmRajS5XtFmy3zDpcS3Vhpu6SsAhVKcQtd",
  "key33": "3EohEqm1k3yMpyu4crWniXvNW3R3xESCMHoQyEQnwLv3TwpmcBbkJMhdQe5x52FC5JWKtaTH9r6sQ2RWHJ8wEoVQ",
  "key34": "2HB9bfVBRLq28v4NcKFLiWF8oQZcgWkQp9KT7d3vfq25ur2nE7jJLcbUsB4DEgAbQ7TaFztBz49n2oK2rikePVpy",
  "key35": "4EBNFYNEhARnEvnWizzNnj5d9y5bHRoqrJ8yP4VVb1Kv4ogiAAWA9HB44gEHDzx7bji4GUqFkf2QtcK8gVFsuFWh",
  "key36": "4iXeKehWHvZVK35rYUxYApXXntaLnSLWoeoii5dib5rLoNAsdCQxsATnhgjqRqY2LXMk8g2GGGD5etCuuM4KDy1o",
  "key37": "2pSPfLgwG1ow1KGFRgocdSS6YnnKGLEz686cwYizgcAghgmSCjtqM7eWsAeQgBLtSuoV73xF27xLJUBjsN3qrbYv",
  "key38": "oqwgwAuKkp9CuzhjQkhN2KjLWpBoC8gSkv1BMG3KWCqHn7aCvs61N57cSDT55wvQfKUhRTvuaihUp9E1smbggyK",
  "key39": "3c3GL6CncGDrLdTLhtGaMo7yfsbuxDWi9jJ8nbwLu11LeiEpJvSVw98KDhTnkG79zqdfW9xpJmK4gwFCywDbhZBp",
  "key40": "2YFr8FXDhe1rM4PZ5ZzdaNvfpvS9w7rJBY9QLAC4Jz65AK2txFhwdGU5NFMQyNXfhJZaXfFJB5agEzsrUxPVfr9Y"
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
