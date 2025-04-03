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
    "xr4dXSAYPSDkj6qHVtjP174Q1qUj4BmCMVWbNvEhnr5oUioWfTMZkDzug3DSsm3W4estX5RCVV5s17jmvG1futV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzwZcosJwb3tdYohY6vqAyk89H7p82wmCKbGjuU4gDZsBqXEg7EHxTvqNNy9rXF2bLmfsUjvZE1fcpYru4W7S5x",
  "key1": "5HmoaMFgzRd8WGdAkGz4MrWbXctGsVEFhVNYzUHctCPTg6oUABp8zkvAeQoFRfGwHydtzMkTX31ffgYX6fkudzUH",
  "key2": "2WtnqnDmr3ZDUsUe4KUuTFwyoFGtvvgDeePA3FyZvJEQfJryyMUwS8fq7AYWX5NvqDDfn8rYaGaZFnHBCXXQHVB4",
  "key3": "5kGvSCc7agrhBYtjcMZ1bKwwZ4uynDqzrMFWiVgYZaAX7K1JCWL4aGwUrJ2x54nWPFDxLqxbGgU7CuVPiUznheqx",
  "key4": "qnUb2RXG2wrPtzPCyiudv9ksQdQZmgyxNMpW3Y6cfik3T2wT6ocoRbY4aa6XgXqv89YwwKQ9trbSoeVxKxi8FXR",
  "key5": "5XMrnA6FJb54UuTCPKzUfWMMdBfepW15sU6ZSj5K235fqVzBtqgigXVkktVgbHtu6YxbeepHgrXGkmhB9jvTwNSF",
  "key6": "2FPUiAZeSExBGa41sSEJwamz3oqtGDernegudohfcRvAZka6nUmt7X6dxL6iYXgPJWeyFQxgVzqkGZ6hAPqRoHHF",
  "key7": "5m5yG6wcHbHzws7oyfSejVRhHB8fYwmeFV5YHnaxrmoJKVH87nsUKxiHmu72L1qnH9xFNGoJ8DXqx3Qe9qYo5WNZ",
  "key8": "42iZBvtv19QWPVVrNKSytNwRBS23aMo6YsXvWakB24cHrRp4fnLiJE7sxEkjCcZ97pHJgkeoDzeAcHkZDJuv4tFA",
  "key9": "2tfuj7kfM4H56c2R2gBPTWaqpvXKTdiGmVUqf1NZ9jr8PpKzdEmpQMZYZ8jeZjK6QyALA6SowJkyPmLBtegqVr5m",
  "key10": "3Gko9rF7iu4pWovxsWC6cihYbgyZ3zC6MyaG9txpYJ9Wd3LMikcTRRjJwceXW25stzDxkfEe4uTurS54jD5MTdhw",
  "key11": "64x6ER49NDwrEJKeJD9X7frBPs9t2KtrAVtCjjtSF1Hc8Crz7yGnZqpugZEPECPQn6PDfBam3sRFvZk6sYKTX5PN",
  "key12": "2ooB8nA1UgrCrG4sdgqHRBB5rSLC61uxFGN66YoAqXzUqC4pF9wKUHUJY2WzQ5x1cPGSxBJaAfau6eMs9V78UX6m",
  "key13": "25DmP76SdVsKF9mxjLJ3eTgXszR3AyxRH3LztxvgKxvMn4Ate9D9fKsAVgmeBotX9o8Eg5bkmP12ci5UoMa1H1qL",
  "key14": "5dz4xZFba5fuT8gksRcKbNwWYpn5wkKtMuBNQaNh1yxX5qxREPYbTrJRnHquj7nMTRqrreavs7mY9SyF7qkdXfvp",
  "key15": "5gTfys37piPHXbSAqh24kxKQBAGWDhSdEsdo5MhGfDQVVtcUCDT4r8e6NptipubHyZXoJoWxRYtDG4GSFxj5jvLG",
  "key16": "25FuuXnnPY73QDTXY4MHJWq93meGVosxp4thnnudyu8JQf1GRLzi2SiinfPcsdiH7vqMCBNhAprJ8Bdf2iAEFosv",
  "key17": "3asubRSWZQP8kKpXgws41cP51dU5BB5NsXTSo9TgBAXCpNN5jmukMs3BW8a113opHc6zkEd2e2rUxbG7mHkaaKqs",
  "key18": "Ka3duchUm2LPaiex1Lpups42D7s77ymPqqm2mfAghKEG9dXMThGdCW8w1pPbLSnPxDJVLdYMS5iqhmWDnmJah4t",
  "key19": "2zC9vT5TBKS84Kb6zpy8dvKnX5xko7zZ77EfzxMAxn6wKNCJjKAGnYb5ELaEnFMjtFHNAhXbcB8HuYJqVJxEN2im",
  "key20": "h7oBLpgkfwg3tZL2a7YWJTrUKuWnjiAGwHJM68zgcHB5oVNJDweBLEPZZjWP2Si9VDQs7ZVdMsnNycypE4H1p7j",
  "key21": "58UvCfGVQauFndjCExUJEzwBcxh1AaaonkucU8T7hESkrLJPUrXVcXBwx7iRdpwkiJrh3QE31Npkpsww6bitioWs",
  "key22": "67hQtrmiutznaysjdCaWRicSs4on2E74FH12YWzTn5EM3oq73BRbHYH7zRDWZdMtdF9muc2aJqdCRRfTRTUE1PmT",
  "key23": "3B97jh24s3aSv4EHifEBMnDM6TMAT5j2KNs4vqWSezLbAZBt5EuLjjSgG2odHSMaQmjpSrB4KzrfHCdsxRxtUVw5",
  "key24": "4bZ8g4kDCYU1wwv78XqA3VWSXtBybg6LeULLEfee4YJqKZaxGZduNECLAMgoiCpkgd9XnCSmG3RDgeey3Kn9L852",
  "key25": "3u17HCyGtWxq2nvqu9zrTxCbfdBWVCvubVVnw1tLyjGDdDA7XSmp49k2LPnoj1guysFpJr53EftKhxePUBvwvC88",
  "key26": "3zSRdcd6DMP2UXkRwyPtdepme8XcxnuWANcFFip3onWz3XeY2g9Fmnbver4okQUUrHP5Mirsizr7ECfDHekZPMTK",
  "key27": "3uanY5coH3TCn7VWmESb6DuGA25tgcu1KN7n7WZYgcEPWfwm5deqDrcmgsJHWdBEjqiFjzGo4tPWrqh4b6GFNNdD",
  "key28": "2f4MJPXh8Rpq5LqKtUp8dBYoxLZYLGiJhfsdoPVhRCsKuMAMhtVKPgRQRqfVbLX8kYDbgjCPKtoCHZysvxPqXEHo",
  "key29": "4WUp8joEBS3Ng8sdA5GA7Ppm5dhqkunBdjSt1ioeUPmezi5emMmrKGfm6GiZ4qMJ1rWhXfpdytfjsRD4LUnnkGtj",
  "key30": "4Hhuc965QKDb19ALH1DvG3HmRnAtTWJ2erMd2gur9hJL6HFqUDYKTNAxPZxVaTtfYURPjC1BKSuPF6RHArYtdHjo",
  "key31": "35MnMpzo6dDBfc4dLRpVxdGdgF9eGcWyJxJ9nXf5AqurUqtdmEMSVtLUcxJtyBAEWFaTQwW3EmVYLL8N5wVXaUxs",
  "key32": "5pV5oH2pY428EoFGAYZM1kDNcNhk2eAkghV9YJgBSrtQcyTvH1trZYNxi6KSoSMhuWmkQJKThtWGFU9Bc6fQwSWT",
  "key33": "4gYwvAhSeV3Ez8ULdog56AeGX6NkKqwtKMg5BajtSxWcRPkMvcXXsyJ6Gx2cYGzC1cuxAtCcKhmG3z7tgz5t1EUu",
  "key34": "4qrSeZvGbizaxRrP2ehUj5wM9mJ1UncvxdKNgYAurNvf64YKdPAn1HTXuzefY975qFUL5DwiqEbLoZLtMr2sJsqy",
  "key35": "4jCx2w3mXbTArnfVsSW6axBRn3NPAdCS98v7YeSWpuZC1VxNYnPgWSn8JmAkcNrGxX6rwRi3iVxWYGm7ifDXF7wb",
  "key36": "53S2kCzSyhE4LMrTaoUYeJ1ozc5eDUGaVUVmaDznvVRnSbEjg5mAqjpQ48WKRjeix5yfa1QtsKZMSYvrGDiy5rjF",
  "key37": "2JkEYiuLadSkaKCg4gUuaHDYz4uPCMWzyD6Hj3wKJXAmP3Q3eXquDKGxVk1cjL1bgRLBEStqeZvMoQaHAB73K9Rx",
  "key38": "jfhx95gRyZGibSez2EkcJ2eDyWZZV36qxRsRbwKKepnYMayZYjd8dPvvqbou9Yic3kJyFcZNX5H989zzqBieFXH",
  "key39": "jetE7621KauD1eBzryK6H7QUQaN7csCFzGCFC92fBqSzxD5MCBhCNCY4p4f9TewSakzTq5eXPmGs6wGy6giG11p",
  "key40": "3f4dPsuiTMBp6wmcvzmJB3aSSmXqYGTD9xGnBWiURyseAQZVatmv1mJDVUscDQoE1w31n4finqCJMdWptgc9vXKT"
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
