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
    "3kY8tA4t6SskEuh7RNbwc6fMWnuTA26wZwfBHSn6dgBSS3NoxweSf92hhRpc9EQoRrLbYYtrNtLD1znqnm8h6HyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qxc1b3X4aLX6Q99oNZ22eZTy4wCVLWNi5uh1nxh115wjW56sP37ozS7rGad2hsY5cBLssgzgtFFeQsahBCYgyca",
  "key1": "5tdo8oRwHAxad1FWnte935stQYQF7JKysMvaD8FpGP4MFuN5sn7NRGTgFc22fwCN28EajAhd4kfwRZ1p1fDMUANY",
  "key2": "5cmXfKJy74mt4CuR2wcudpSZqinNMVrNTXC4ELnUhYx47kgDBL7pYfFkJYtnQpnfXMJsY2kaPPh5vJiCEnyGF5GE",
  "key3": "4udh2qsd6vubpXjH2zfJgRz5dPHTDEjB81kC7rbm43wkqQRe1mh8zZcsywr6KBXwW13TeDW76bdDFvLBSXoYZ2C7",
  "key4": "PitAm5JWkEg2Z5Abxh8LXJWJQETVUKTqVPSmZDzrAWHvGETeEcdg9BYaoe8cAK54Jp5FA1Qp26aKKQZ1TdKpHhE",
  "key5": "c6y3gCeXzCRZW1vu49bpxUBex7JrBzyBrrmUzJxWjenpPzeGDdxBr2yDgtUersLVEjFZgNYr242w6eJztP1q1yJ",
  "key6": "2hvmUnvEnifETKSK3wNyjp2A2jDiR7wvGoXrLDyjbYvpby9tbm3goY6SuajgDsAtCeCjRuvpjhKevEKVLQJqD2zA",
  "key7": "4kddGYk6r4HxPQEPTkML7oBrQF9d8CAkoGpe2BRCiKfMpY2PswCWhtq2c5Jo3cwoPg3rmmALe9QSQzPpQn5rm8M7",
  "key8": "L81tG96ixJ8LJM4AgRGFWmVHJkPj8iHVJBCESmPFVwposJRxGipQeTU5aBkXs3y1vmf2YoJ9zSFzMaiUKKEzuup",
  "key9": "5JHj4tS1WuR1bU5ogf6ChRcUSBje5quVkJ5UVfDbb66u934oU4ETynHdiu8W8Rzo2mTBT2CJbYLCkLeamVJwkzs6",
  "key10": "4KxpqCWciYZ36TukBR7564XyDMi2uPdPftukdFhWqFmwFghYFjq9oYDH9jjeW9pitvewp5JnyTbANcgRstPDruQM",
  "key11": "5M6kWNHDDvnoWbLEimtkihLXBuQcEa9yBjs6F6acjtmHZUpmDrruiVaDJXdhG6Bfy8jKqynpRAXV7R1H4mbWEEtU",
  "key12": "5RYsAQLgQwcbxf9SekvJFMtuFNPbdgNs3HEWGtGgitXKN2h31Y4opHpxUzPDrYntk4kv2LpSayEpeBdYvrZF44W1",
  "key13": "5TzXwbK8knJofdvALmnw3igCztANe4JFMSReCi2a5aXvxY9c2e1fqCrN4pY3eGnfSSpLy9toUYi6WV3hS73GUxR9",
  "key14": "4TY2YQrF1kWa4visqN7i657wdaoQSCxizfZhzHD5dZtEnX56B14G4jeP6kLB7fcaxRgPiB5tcAd9UwuPuPJwTNMT",
  "key15": "3Psu5rShYuG63wZP67nBwhRWLmpU8eTzKETvkBa2AvyRCTAdRE4HbqVLKi8EKZnMYDjFUuEQqc2dKCboo5oFpxsB",
  "key16": "5j8QYZ1usCxSi5GqiXNCnGTuoJ183EtUXGpVykS823aLn3VatwBehSZzyRPdhQ9twAi82HjC2xVtTfS1WAHizGDi",
  "key17": "56AbmA9ymv7ko2ceUpAGqmKHL4povNb1KBT5vKKuRce6PHuvH7fAodjgm1LgHaDLSuDBVwbNtcYFp4r5XSVvYouL",
  "key18": "3xCTZaPnNYW9xZyVJ2SSCx5p4SMX5A3kWfd1gmmoSyaoe39ZYc6gvizNwQBHocFL7RvkSc8sFXNUcQc32gGS5D3P",
  "key19": "k7S52TVm9QnHiYtPXYXE4xBw1WKswqvCZrUfK93cAc99Vh4EdqDn4LjxtRF1fkHB8VKXWf7pqLFaLcMW4JSKTHu",
  "key20": "3uUuxEDUm8Mbkt3Lrm27gYrq8BXMxSroCikFRoYRZVzjansoxC1TbJmwj2451S1VE5jLAtAPbFH6oNqbTqMPSGZ7",
  "key21": "5hAeo76q3inB4bTV1Wb44KcVRS7tSBtDr31R5dgmAywKDV5GmRwesVX9941pKW6T7G4n1Xxc4YDbRvTWpbrdrLpq",
  "key22": "pvJsnJxJBCvMFC5LJoQJYTG5JzKKNPXAdzrKihzhrW75sPF34w1PT8PDokfpLJM8Bq6i7aBHNfjzZMkrLfaUK4V",
  "key23": "66bdvNYxeNLUTHqay5vc8atW3hPtCZ6jE2GFzJDvUkWGzhEPSyWEkJZ75XzyUBoD7JNf9dw1ra3GQBwC4AFmuV4J",
  "key24": "38GwqaHFBwsYjaNGt7TMuSjAt94NvftNM6KubiuSwzwMc1AeHv4enxCWauiUnYyKoxJ9G65AhsXcZFsbtNZvaMjZ"
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
