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
    "63HrjLjsoanS9Zop85yzYbKMPNttYVFZnXNtQcHAxNneTmqGsG79Tn3ARPejirLwyqy1vFz5dXR8M28DTBZqXWWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooLnVy6QYtEieKWFx8dZPorw1tVshjmHurBuHFEmqkimg2SAN5o6oS8rDEK4XatMmzVPUeEni8mYTpSq5sZL3Zn",
  "key1": "KEZtLCUYdzmRi9rp6xhHUV5yScmfVmpJTyDoeq1CFeYvKG6Dsrkic2q2qUvVcqeVCB9HrPsa8ZZBopJ2THU9LTw",
  "key2": "3RdbjQPQxXSbbW8UsL3nG1S8GjBJrY12aKVtkrXg6znCG3vVxwEe9qxCFC2kRsng5hgxoGTp9GX9GC3a3dXQbjjh",
  "key3": "54jib6d6kcTyden4fZsmcSWkxX3jAnnCKX57z7DShjXceRQ7ibNGJctdF2xcS8CJNmSQHoZC38VbxE3jAaPbK8Uv",
  "key4": "4xZhSPgeKv55ecPta8FwB1PzNGuqgiV3KQJcc6M4TtRuU5vdA1Gu7JRXqaGNyDtcCEbyPFoXw3qDJZvrbEVBYxyN",
  "key5": "5BNss5ddVHCtaaGCU1VoneMdBDHhywswvgYrk26WjQxa4WDaaHUXhk9j14QyLWAduLfeNPftdvA2y1Pk5ikAxe3v",
  "key6": "aqY7ebuQ76DLhhjotJV2XKFGEQXKvu4XxWuokQAE4cVUHyrzuH8nRyRQn88Vcg1h42DbnWfDzkh4wTUettMgTv4",
  "key7": "3z5rVxN2wEc7hKes3zssgXSQpnx7dTT2kjoK6QzYhdwrKx6Wd2tUvPd5f2Qr18VYq5MrQzWgUaTX8xFVfBmkzFYy",
  "key8": "2WG5xvSLcFsCTw8NWTkUpKGzDWgiuVgR3ztr2JWVuVqwjF28HvThG5uBQzEwyyquocAvBHWhWuJx3e5SuGE4eqZU",
  "key9": "26VQng6GRVyfDEk72NwgWNA8FzTuJQxSKq13jwuvh1JsNooEGY2gnLHqtFgjsVN3wZQxMt3EL5CKPogVtrU26k4i",
  "key10": "2CZTw7iEQm83sjg6uuvJzNSAMfckP4WNyFqx7m5kEqhxjmmEozKdzLGSjrEkowdoE51jfekxa96KDjgitbmond7H",
  "key11": "4MTh29UHJukTHMsJe4VaNAPqRbQwUEGPviyaJ2chf9LiCnxDc55d27xJPVrM8cr5i2B2nhE2fhuoyxXgBZV7ARxg",
  "key12": "4KPLGA5hr6fvky9BgYngv7cDgPPGh1y5UWzgVBZ6mGeuuiDBHsB4sSN2Qd6wxBh1XAzrWeQsAEmHBKWAghxAT6ux",
  "key13": "5y1VTDhKcirgnwoiaSzVbS5mtHDSu24HTuGMC1ZisxrHsSFT7fEzrh6RPKgrXZhZSDTF32SKd9UggqxzrQEnL69b",
  "key14": "5UVqrX9R5x3QHjeUqghEcGo2wzj2mYBEsdL1QNJSofa6DL7hoNrHsrcbC3RYiHTqFPLGFeF44gxPc9pkUJGizPY",
  "key15": "4dQ1vWdi8Xtgkuhs8rBPkQm3iLZtUUkqrDRLFpgNUkkK5R4fF4QkdpfvtKGq5NjsSFLzpcXXzk9yXpvQtd72KRQy",
  "key16": "56SE6LaWZLNFXe3nu7k4mg3TJUgRrWXYPSgyEiy7VwNPDgxsepMF9XoWsNjEtwbQ1WwtfrdXpjeW2zUQF7aAnVfD",
  "key17": "X8VLA7TKrrqDMRYRkMKdSecpFNwtc7d7RHpo8ZwouVVZoPyGAugX4o63XiFSoPPT5u9UNRBXwXYG2hhqsKeSyMh",
  "key18": "3Z46kLFrbMFbphatCd3r8saE8pGYAFD4xFZQ5K2ZneNW9yg5WEBZUYkV4QwXTUzJ7vB89RMHsjMGyBbszyzbH4Qm",
  "key19": "gvBRazoiBRYjBG5pkFzr2zh9oK8TouksDFicZo2sdhtpgcYE8wdT5S4YWBFoBsSoqh7cfZwPMrEUz5hBfEBqgzC",
  "key20": "aJEpRa36WnmdhPDYHBcjq5rjCQKEbT79oKxMBe1yarXbc984H4RcLfvahiFv5pAW5SCAk8Sc5YPM9ma59mFXb1o",
  "key21": "yHnLSyEqJKkeJ81JV5q2kwJZjEjDCccRzXdF9RPETRCmgVewrxk6t8HG9w5RV9KDiPHhd7gjuczsDQ2thi7nHDj",
  "key22": "31rU7dnpx7XRkzCMXdG77wka3q4mubVvsNerGC1uMESD4eMHoS33P4MqMW7tJWqPmHuWjamDa6rDQdEPqE5HJjtL",
  "key23": "5rVibjqjDMrcMu9sXYDNHohGN6dATXoXVL7jSeR12RbZfx24Hwag8nhpzmuFWxHQgEGyfK5mmi6yC4WgdovYCt2k",
  "key24": "2rpJd7eGDzLvBHtZ1La2vcocziZdmNxwSMR8VaCvemFcPGE7WKj1ve6KKNd5sdevBYzBZoJH1c9eJma8dHmNQma3",
  "key25": "4M7JfCKURnXRuUQugypvbtU7mxpsDUELChVVgX3sLNr82jR5VyE5PnPxZ4XG4uYFuQwSg3nd9ULDKsus71ZMbPVh",
  "key26": "5fv4zJVBzN9KDvthxkKrmT4hSDSEJeNQf45iXVBwiYtoJ8zLrsV4Gp3hJhAQuPBp2soEzw7xLg2rWVYt6bsQn7hV",
  "key27": "2ZeR57tDBRuKXErCWD94CZcUjTn3mPEPQbG11kncDcSBQuRSVSmhUTAFga3XJSXgH6Wrmn829EQF326um9xcqVpE"
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
