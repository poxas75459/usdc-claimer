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
    "jenjiwERYZN3V78ygeFwaBNcegJo6z321h8ToBeHoHtBwvoPbp7y9YMbmDEnoR3SXK9m7TKKmBeAZdj2TZWoVh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CV5c2zVBAhKzFeQrDcyQZYsR8ngBVu8NPpo5i667qZmeoNYBWy8EoZJgLchFg2qe4KXYax8Ap1eSeC5brcFv8g7",
  "key1": "5EvuMtsqw5kZBKa7RVk4apR3KLtph34pNHPEsuY8qgeTtHXNjFwVoA6WoYUqRQ4k2EFXYhuUXt5mvYFVFeA7huju",
  "key2": "3PAq91iJ6nyNJUxzDVEYaDznjhMagPb78DHmwtN4H97Ge1FjpAYbviMb7PdkTfnnyeQ5TCEbEvQue1FRYVNcemBe",
  "key3": "4Lxg5XpX6QrJgwCn9k9txtUw8rJn15vEs11DqK4KkfTLHZ99CDZovy2cYW1YhiYwCkH6KYB5uHUBJWAN5xVvQRUJ",
  "key4": "488QAFS6FsuPa84dJJ6LbqMtEU4oywjFEmmcvEDD7nPWKSzKFwfDRZ4cvrxafdN2KbMDkj6LuegxSPuEvFaMZbdR",
  "key5": "dzXmjLX8Lrg7nx69oHyPvR41KfaN4xMTpoLEc5QFDCR3iU3UNzbiauwLGbCZzz2DPWEkMgEYTpe5j3P6b4HFKsz",
  "key6": "3kR2ZHnvavWeUsFm6nLWNLLQxKwsM4DS5YuDuWequoryvGhNvPjJ1s9rT8dm9115RnYR8apijuayYVniPsq9Ji9U",
  "key7": "3gyYcRAxR6KmdNgL1x7mvNEGStHo8EXKywmtUWjCJYZZg7X6mDD4CeiZz1mD4E8bXmuVrX99bxPkPH5Nac91uHEn",
  "key8": "3g6Z3nm8x4NRjS1FzKqg3DBRm37xrabMF1fjXT7SdEy7BGUQNZa8ubkyQGFpKNbSjzcbwds26ik43ceBhc788rmc",
  "key9": "5RQXxzes5123DqNJMjMkkyC2o1BC9kFp8xBuygd7m514ykqgSX1vBQXsY7q7JNU6PG41oyMx2oDbo2LeyGB5GaPm",
  "key10": "5Ju48tBEKXZeFhFoxJuQ4xuvGojHfXBZhkaF3gxHGcetw6Xrn66iDbMomW5NaW7a4jRFZmPBnehe9231J6xtmWju",
  "key11": "2gJxk5mft9JFqLu6NPKePKzi4pYNKkbKjrjaWnFFhR84wq8D31EpnvM3rMhgAUCkCtin8gSbUfYmZJpEedkyfAZj",
  "key12": "7MSyCvHy6qHEVTAptqD6T3TWrHEaVTSfRCeVtceP9HPHZxx6CQ19immLpd6pr3oWK6eWXQ52t19WQRtP6gvzmWS",
  "key13": "pU3sbFtGvwXVh31pYskuLaFJzadb188yNnUYgwg3kQPEAPZ2zGyMk3LimzvNu5jDgzd17kz3FXaUTxiCGediLcs",
  "key14": "SeshQQ6LYF4WiaCSizatSRcmnGqZGAHdAyLPKmzJSkTkri6AvJ7A6HpZhVWdsAYHfyo8Cpjxdr7mGhmFTJuT3Zm",
  "key15": "2LnjNfrbKqE6mpyz85VoeGHsFu1zyGDxqfmWD96d6tbuFPzNy2Nze3yPqVyvXWW6PQUeFKG1pSFQSkZUXfDsE7U",
  "key16": "2JeJeexbBkusK1feqNYGoXCwP87yTKBKT1mcUnP1sfHjpRKaLtMqvLPPmEZpoAyWQ7sMibCHE68YDPTXG4CDRZo1",
  "key17": "2HydtU79q7dg76KxK6agBJnd7FSRgDKTDA3EafmUoPWdqmsNC7wey7DtYE5XjSrHaSjxwvBoDdt6neaRER3Mk1Qc",
  "key18": "4owXKJdYckJ1w6sZT9kJby7r5HFuiEmWiPLzt6q1BoT1JrQUENB9RPtjGKbUpuHP5ubKd2re3Mpo3c1kFZTEysfk",
  "key19": "4s7Ca8281BdAs1bePkF1rFmwUima89iCfxfLu4fgtKLb5XxG6SWhyNXA9y8jKinD6oLvPxHHgBt9vqHDeRd8tzMB",
  "key20": "28kDykVcBTcyN66PwXNCkuazgv6kjRg7iB96ErYm1ZF7skkop6ccZeaMz9aJrLhmp4cbgJauAs8Kb2Kq9a7Fp5zC",
  "key21": "5Q96CgV1q3KvDTXLKwgJd3cyqukFW7jF4UzQ2csSxZmaXrurZFVRocc5a9DtykJih1bH7DpRrgLNEtk4ukcUfUFF",
  "key22": "3cgJpi7QBQBwD38d15PEiP8SET6YA9dp9rNxDvMuUhG7sagP6FpB924Hj8AjNvLJRUeb16xXWWtXUht1Np76tEV2",
  "key23": "3UjhfCS9j1CqJmkhhnKWubGnvYjFwxkneBUQucv8mF3vagRPU6ncUbFsxJVRsda6HjtrrpwK7351iUicXosDyga",
  "key24": "qAYphmKZ6gAZay9SbDMvxorZMwJunQtSGLGQYcL5hWDWuA5fBtpVXQX3xy3SVjKztLtEMQFyTuC3o8k5KhChzSn",
  "key25": "5Tx7JKYmXx2j81KVnEUDAW7jNeHNjs417Wiux2DjoSUqoGPUMhKyyGtoqKZhH6uqCxY7e4pxJBsgh2P1EZnAwVR3",
  "key26": "5USevD1us1w67QSM1hi5GD2q1s3fRg4U2FdEs9PRZ452JwJCEv5aHTH8XM1MEUE6SgjX7pKBHzfDJhDpnPZJj2zv"
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
