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
    "BWvsWuWGRwSxQVp2QD6JeNGJWnhLgavMQ46BtqwCyp5tAGzYHJeMoKM5p8RJrpP6t6zKVovCit8EGDTYuRJhBm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEdZFLmwrYTenZ59Hv7ESHjgUGWcw1zxTWMQznTRuWhvWfzkSBCef8sZYu9oBsNwn8AqaZx7nobAzwJr5Q5JQBq",
  "key1": "RKW3859CLDcrHr6jDLBL7roDvxrAoJD5t8ijgRt7VzPvXaexeKaQtpZv3AQsrV9BBCTuWAoXmJ8HdCE7ANFCiLx",
  "key2": "3fkq1RFZQ2nu4xi61eyESAg1mLYYZs97nDSvoqdzkguABYyW6K47usD1omZyH8doygMw6JaUVqMds5D79yYWFgaj",
  "key3": "65ztRJs46wxpdmvxMAANdhb9YRftvg6yAvV1g7bianSpqBymVvk5MPzsfYY7UXP1FBcupkRFfWHiWE6awUHp6hWr",
  "key4": "5kMhxcZyhi8uD3qBwQi1binUoAwTd22GoYGDtNQKZF4ESkuAkAnZB5GaFZGRyfaiMv2jroYajQZNwuJtde4zjtmm",
  "key5": "3n9usQHe7mJcj6Pi1vwwgXr4JZ4h9zyzxrnQFnWXS1nwhheYwbMTQVCqeoU64Lvq4aL4Z6LBhpZrZym8kFwnLvKr",
  "key6": "26CyJRcVKisLyELDbEsQs4FwhGQBZncPk8xfy5UV3fTXWknyWtPyC2FqLn7J8dfoR7KUU9ehcmdigcxB76pQXx6W",
  "key7": "5KBKmka4duPtn24LGpN73YMsdeFVh8i9wLPCNoRNZr7yxnuER1vBz18ujWvHc5z8qcXrgWKcNz2ckVAjKrqu2XFe",
  "key8": "294ditWnW8maVazmCWModhvbcfP5eVXw7Xo6rL7uvKeFCbt3icwy3RkgZ1Ak471pC5HpcEE2r8cUxHo6NrRgarKQ",
  "key9": "cbbZMvEZjGXJTTbZVuS4otjrpcFdhBDx27wjHsguyDAQgDnqu1wmM8hCSriUq51AY9AV1oWjfMkZYcuoDPJUnZC",
  "key10": "5rPyoNExcqBB7PV22eoUxozCGUwiS6X8NGy2pvWZHAobALPcoPvbGJVW24Qc3JHgVtEEaRfFF8jvub8ceP5MkzaR",
  "key11": "356DnPDLaVhUiy4qJgUBB9YsfHUugRCJVE42qGyXejm6bFyAWupiDAvk2Af3Ex4RZ2AGhvJgALQdDYnPpnqrVJ54",
  "key12": "4cWyXXCwKAPorLKN7zgAmpaABihZUsJgd1AFnPdaM3Gt5pDi6PjRQE25bXuhLiJjE6PTsCHk3vMTCbdhEERPhYG9",
  "key13": "4DDrGgpaLJHMe3oMdmKvypgdprMVsAJ1GxCFfvta5ZURDLVU7fMJdRuyWZy5BdFuG2jRGew7RiEGzPeNk9y1vzPf",
  "key14": "3KTNxNDKAvqmDmASRr3qdTcrWXnQRiU9WgAQJpqDS2qTxvhLbuU7UnVVU3MzjQ5rMGUA2NZwVARqkiae9RgA72Eo",
  "key15": "3Tm7s21ShMVDbN4u4HpsJEBuFbNAt4kNtRbTTgkY9MvMCMDMYGvAoSkMFe2JyN2fhVqWhWS9aWbnFGDbtRAUzKAh",
  "key16": "4xCedUgxtTmkYN2PrwGsX89SbPEqgixqNit3xcYVADEN44Wywhte4g5Wgo1k8monmUbCEQrCmj9s9MxmbVHqkzXD",
  "key17": "51frwPkuUWX4zqf13TDbFXzJftWNwWL7LEnXxRc7TT1w6vWRbdPrZEayUNQsAUpTAXk5mooTvRcJ7hEH8YJzHta9",
  "key18": "3vbLiysBqbWYoaEtqwWvUEgKywSbQJzQYzkeNVAAo67Ei1KzGLqT1zV3ewLCAkwMkBQMWJTeRLV7yzr3RJn4vrWt",
  "key19": "2DntsQn5QvRAi7R93YZL8Tan6qCRaZJj4gEeugMC2ub7Wza6RffKmSk7GBaFgb8GLSaJ3zWzXZmZVT7e51Mp9E71",
  "key20": "2PAmGsJFAeEJ17qutpfJFZgoXHLPxdtJhWXA4rnEptaZjGkjLKJ78uywYvVHYGiNGdQTcJBfFFMxVSYPwqCuSyRP",
  "key21": "3MRmsFGRUMYEdDt7jMm4BVdMp4K7wrEEDKGGTzuqeH6jeuwGjBovJ1ji9jMLPEAFxd5LVxMQ5dgveRbhX9Y2aTfv",
  "key22": "5kFWVJpM2x9hD6jaNKVkMqY65L6qCRaf4BXmwaJMu3tBtM2RqBdHQVLczeaoBomZDT5feZsPj4UqtmH8zbXSKyNR",
  "key23": "4umpp2KXjAox1FCdK48M2UvH8DPDUDr7XH9LJ8Mx2C89eghNy8G6WRnjrC2JnqDxG9U8ZG8Pn3UN9wRqWTpkHZBH",
  "key24": "23tyjykbmgHzyUosVoXGZxWpPL4Rc4XvZSjDi61xkKUNZiyiURn1iqmW7YiqE7xpPKAALi7LgqsCpKafNm6idCnJ",
  "key25": "2iphUtHM6wPfhKYyFntQ2TrxRU72KuuNdpB1bPogjhJPveNPNJcRqT9ZEBAmNdgpgWNz9DcbnjjrSH9MBsgd19RE",
  "key26": "4GMm2FTD56a2y1btMxKncKmj9tQDNZiSduczkKthTDQqDAqcWEkbGfEx8jzV4YcGdCkBm7wJ6SvWw2V8emg92pQt",
  "key27": "2zFdG7NKAffqKEoYRAVRXbXxjV9tuWeS2UkhoA3Ajrm8aEsreZr2nLBHapMcqU9QFuS2jx8V8P6H3555azCctpwn",
  "key28": "289tkSmBjkHwy2VVRUUWXXu7tfCyowqVyxDtgX4LQE4KD8Vvbt4n5qJ94m8fu5Ti6X5LAedZpRLxLM28YZspDqnc",
  "key29": "NeYX9czekMquHb7ir6VSsubzBT4Tm65XZhooxvhKhCuzzCiRzEGYzyrBKDZXvikM4ZaGwgmjRB5jaHvvqYKLcjh",
  "key30": "2tkG79vnpNceeD1QMRHTH1aMenSHTxDJNC2xz6wuWyqx9HTUdTVKwYTNFQkcTFoKdwEdmNtrMdnzxzaVcnDDBmow",
  "key31": "VS13AF78yEXTgrF43utQArhx4AJ3oeUnTVHzfgwwGtgaDHsD3cJA4oCnFFNt4TmGtvEj4BPaSQbJEpmCmC1eYBE",
  "key32": "2Td7Sb3HsnSvaMuJWhAD4Xn8YTrJoMCqPzVkonU5YFSaNMSniFK99UmqWjFpLQ34LB4KmB6bQnGCpE34EPBJPCGU",
  "key33": "5nnDPyBfjKJQdSiXvLGuQwdhuQpThBBMFdSzMa2FMX8HBMENKtu518eKxZvZXbkyFdbh4z239AvdVrmyR8djnQg",
  "key34": "c6jAZVharxYvBAdn5HzQEXxDYjxZWpdwkD2drSX8g1iwfS2a3jq4RMXDFX3EDBdmYvkBu8Esxz69qHrrjQ5aD4D",
  "key35": "46ACVCTVENQz34rJuZiXKTqN63G5eEWHQVXEFxnT3Q9VNtfD9BJzje6dAXrm31gSP735w5LF2HRAvKUyqetqdTNT",
  "key36": "38RMbHZ8vdJ4az54rTnS3AWYWp4xZpUZkCTM22ogigXL7yfb82wJGdXTU1gg6ZTJq3UKHZPiGDqr6bZy8wkbMgY6",
  "key37": "5zz2RoeAmmav6TSTTch6W59YTWW3w4ybsif7wn2DhauBKdgjw8kEpUErYqgmfQq4WCrCQzMqASDCwMkCGrut16As",
  "key38": "22Fkt9431DTFemFGW4XPc1cCLVURgR5aiCjpP3iExgWVeUB2c4EYtmUhuwyibYnr9Sh9f6kmyq8NW3XN7ypPsMcA",
  "key39": "7h4TLhQAsZ9BXkiE6XDxKouE7tAkGRffpd2mx1Ys2bqps7ZZ2Xvk8tc5BVuYp8gH6quMUh25CpqLD8R4FBFzJSp"
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
