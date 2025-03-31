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
    "3Dx2NvUez5uweQh9TvH3M2NDh4p5Fbc7hH9YTWJ7CogLL6vuqyqCyPfhmBerPqm88hYL6eQBszFsoGsfDYYiVf2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bt28wqaAiMvSkvAQskaWfeExcWfKaDH43TVmhaPVuV4aNydyzfNDGuxNHer1XAN2Anp91Wev3RaQJrMukED5QGj",
  "key1": "r8RoTQHT8bzhJWQsA35uhAAJ4L6pPP7ghp61pPjjrrZNPcdobsU5zUwCh5wPemuUbq8fktdMkeNmhmUtApXWeLq",
  "key2": "XtpwXdv3NTpsABU4sbyFzrbK8y3V7NNVp14sJ2yajxGLTHjQFpCrux1Y5YdUHTACUFkZAPUqinkhhUYqizy7NJW",
  "key3": "2YFN7NcgFM8odC5jVXZAS3py9GaBoEXcYi1MevS7LUKu8RWU5JZhzQye4PgtPvt6atLB3bX38zf7A4i3ExUA4g6R",
  "key4": "3AE8Wrgt3S2A8oyFCsQ7dybxz2bga6dzDex7DME19MuKoU4ntMQPVdRXpw2PuHQFJcRhesca358HdorfYLoRcdxY",
  "key5": "3svV9Txp41xpxXezmy3msVgGj4w3wX8p9SrA8CEjEHYWw41nJFS1xMjHpv1Y4AzQ7cHcWxs4rBxLL6Q54NwZpsBc",
  "key6": "nDAgxRCurWmDNamTLpBFv8uRNv7UczDspfA4LJ9sR5XgPQbgqarDnHSeZkaVc2S2rP7AdMbS7zTZkZ4VZ8g3xHh",
  "key7": "297PL5oUbX3HL2M1SKeCj8QxKs3Usy8aRtmzNr7KS1GYfbH3nJfs6wwPoYH8q8zp3Ndu12JStr2q76fdyGSkqqTp",
  "key8": "rk4XHgw6JREbZmqB7k8CMLQRBB2B85fJcNhD8ktSw8L7EJQKcKXY4xkmBxyZS61hnFaCuRShjZbg6HnJfFiTiu3",
  "key9": "29sEo3yeorGDVtgy3Mzimo5dpjk9vxE48gNye3Lyh3P95LJ2pZ5pPneJ4FnPj8CsSv3w118V54RF6MznoqSxGuwh",
  "key10": "4fFd9vdis83fAAtWQWWYwb7CJkgSQUkAvjp7jyN8fqKarFTv6gtzcqecCzG2XvWSTEdtuA2G3fuBFkTkXk1p4KAp",
  "key11": "61yfhjAfeBJoPY2X7PrjNKGwzPiiNvrbqo5TTrb2wLWbLsxMpQCLT4gA1gHouLWBHmaoNNpS8tw2JCrhQ5P4gejq",
  "key12": "3pEZp26sjxc3n7adq14wgPcrmznF8iucQkReBftA2McuDVZwJjTLMiEH6ZoLTPmbSJChSf8wf4s6yEG7sypnKzQw",
  "key13": "4PeEqF36LW7LABs5hBG8tYpJeCUqJE4M5HDvxCAZUf8hFtkCMKTtWJeiqaM2cpdt1i3sseMThJnrbSr67Y6w2gaS",
  "key14": "4ZHCwdtYCCfd1rJTkcyd7t5hWL6qxEgJ2QMkXGgyhs4NR7ijveFRbidaSdk9bCtps9nBBMApkJhodwjnMoP3oKF5",
  "key15": "618BuEzap8D2mGx9p4HvfCPBoRjNKD3Qvx8BJ4oHauQwLXqc6Zy5k9HGADQpM9P9Lrsm9YGAmitfg8xYRK29hEYK",
  "key16": "2efYgtb9uXU7ztRGqQGCnzddtN4Rop1bUxok7Vc4TnYd7T5TP5Cg7CHrYY52PqAtn5QoPtvRPzGTPXZuPnj4rSXZ",
  "key17": "tmgJR4kgnT6rpXjrgemEPLS3JSCMtaj5mc5S9gm9yipXb3wpEFdiRTzNCh4vzbRNzhBz5rfAxgGxWuF8ZxMRJ38",
  "key18": "39b8Tkdev7xFit716XVNpYFFi5ax8xpyx689joHgdMa4W2B3WZfDXztVyynKAYxvpnjRWw8aaDBWQ7UQRcBjVZC5",
  "key19": "yPd1FyTBB6CwDQay6RUSoALmnPj8NNYNzq4ZG5mmE89BtSgpfeNtwLHWtGtxJ6JdrmR6GgKkseGQQR5G66hg1Qu",
  "key20": "4NUntHos7ViCBQ59ryEnfXmYYFe9XwWhsBycJU38aeQsp6VAShyg7RMbMji9MCPEWiftBg7nBeYoq11F8YyXMcV7",
  "key21": "3XdDDMsfwT2t5z5CG73UjWMyodA9MPcd7o67uy73UT62btJpQ5bbTGn77GwjMXfLheB2xgEDeqX3tqE6A8mmYttj",
  "key22": "3PbX3NupBjXJzQjTjcGhmqxtBjLU9tqHozePsgGGnV1WfVCx9ovnUumVQ9h4XFNyfTLDkPLBzxi6xnZqVko83XNd",
  "key23": "4w8sdPXPumDtgVaEmKtPwc6kj8kCrkmWDE5pp6m43qqRTAzq7DjojqX9tJ5sF1JU4ouCavGFAS3ciCkLqaDp6iiH",
  "key24": "2pCBmVTrH6LuZk8kTDcVUskKYHxdPbyPapFpotLZnsNN8rTPvaUdWA7hkPjoQFWDbokQxRUdjWqTovS4hbG84Yq8",
  "key25": "4kYvMUcveGC1zpBmgRK44R8kEEPnUKK5skYwHKCiUKDtFZUEphMazMp1MUcydQW9DyRJ2L5Y6YcjJDnGsNs5Rtae",
  "key26": "HTubwPDmnvocEwpLwFwk42CirYFxNWnHnq2zmUPja7m9DdNhwSAWWhQ8KDTNPjj1MtGRPPaxkgYNLEXRusFFSN6",
  "key27": "5wKtZ9JKL8XkzkVs7RGU7JUa6hxfuCzv9Z24fV5PknwmPJfqQns6g4U45hSLb3Zdj2ykwkTLyjfbXFHUfHWANQQd",
  "key28": "2JjN3mtWsi8a93tSHFzKPM1WoX1paqxs8eNosp5oxo9iv5gb2SksmwqaedfinQZ9PBkuuZ8iavuvYxNi5pkGtuPg",
  "key29": "4pT1r4hHh9meemCrNtuNuPm6SeizAY5JAgsKk3fTmBdYVJiq5KGRaK9tCyVQQGncQTJF6zo5rDPk2epbCUEsEbqy",
  "key30": "2CVw5H8wQEAFy7NvvAbpWfJRsr4T87EfR4bJjNKFsXxm3Xub8a73bSSenubz1M9A7qWrVFKf7M7iy7MLWty7Gjh8",
  "key31": "5weE2xK9x9JTo7XC2niFC9jXriCHfh6UhXhxsjjJDHwa5nYpnf3MZ6AHH6fMPbt8zxdqFBnmNHmqYPYH7Ntij42D",
  "key32": "3uFcxVFAPopbefqr4DHXdo4B73Bd8ShF2Yffz11rEyirW5EEjY87VD8xJBpoiD2jA1UHdx9dxryDvvnkav6GHoh",
  "key33": "5iPvGHnCcuQXTK9i3pkEQj6C8PwDbZrZ5hZ8vyJY7wtubB38mRhMgLDVg5G6FSeejZ4i8tqR1X6wJ4QhmBZTrrum",
  "key34": "5w5hsUZ2DQ4DCo2MsDFJ83LyiwiSXsP6aB76HDS3151b3sFZQ6DFPC4mm5fuD35McojjYNTf4jbzX29u2ktgSHqh",
  "key35": "5wYw4mSfgAWHHyDbs5jZK4xMpr2Bsv8TCqhszQFXrNF1iybegwzNADdb7rGVQcN8X35MXAYgcVt8WcyHVGqLk42S",
  "key36": "3iJZz6HZaMsAZTqZhdgBjYqmXJuM9Hvss617aim8zQKfrdK1gjJfnCgm9VxdHCmhgvhKCEnS4TebXsnvvzyC8Lg8",
  "key37": "59wxa2iVFNXyw3nXphXeL5RuVWf1vnEVmTDwu3pvTmhCtURfffaMX7c5rHY79YZwqAQXM24FHwAXszPqhvA3dLZG",
  "key38": "4naXJnekuUamT34h61kxgrceRak8VzeHLHeH9KdoHXBhXcm2ABrwjKj3zMTNEc9LdgKqqpszLUPNnpDrNEhAcG3t",
  "key39": "5gc8pjv5BA9ZPjT5SsYpCvAQKu54EXgB7rY49dEfeRWNAqtze7e2CnLQq2QZtRrS2pCzev5E9TZ6j8KhLUQrXX4A",
  "key40": "4LpgRSSryu29MJghmoWmUDUABpPntWLPWN7q3zmzGJWPLR55iBJh2XjyR2AJiHm3R9VT915L9zeGxs2qJNBYzbD7",
  "key41": "5F2ADqA2wkY9daEXdaWFQN4eq7sUqLXDiua91Mu7DXnmJ6q4FbqMyNN3N9kWXTwbTS8UPzGGibtgKWFbbbAhYBrS",
  "key42": "2c5jENZaSdDXhvkRN8jiqwPVS8XYvKYKmngMydc2emchH6UgmLsS84EBv4cpq948veMoMSzfc2f6esR8UfGXTLDg",
  "key43": "3hWV8sPAzStrC6eVdUFhiiBzR72qwiZfcvz7sTDSThKCWNC2LDfG2esfhffJvJNJ4Cb5nVVS3judmPbzcm6xBYcx",
  "key44": "26zR7i33Mn2q8C4sRrQB1jVrXe8GSx8LTbF91rGcN4ACJkH2VRDdcpXuTwLdT9Q2noabCsvJyFksCzbAs4g6mgN4",
  "key45": "3BB4T48VMiHJERymoXNYgHEe5bZaNM1Q4FEHs1DLVNJbWwHvAbfhin21k2AYPn5eiw2ysX3nwdXtgSCzWgsYTw7d",
  "key46": "2nPEnMKWwD26KEc44H8aKWDAQWaqf2xDPzkGYj49V89tJxZffujswtrb7nWsGHZXe6o6nDZ5QXpDus7WfTyrjkSc",
  "key47": "3Fk9hBrTCjS96KJ9hbgg8duRdS6pDVfYnEVChqLApVw53zsXN6kZmdtDuGQPWBysuD8mQq9rtYYYQVDLEPokL7D7"
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
