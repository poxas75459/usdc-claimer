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
    "5Jayoh6dfsSj69REPTKmouFYRKta4nrsvfx8FaFjKweghMMZXnCuFPk9NPrZBYvqvuB2WpgyegcgDYMoR7cVj4mL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSJfiRUK4wQE763vHPwEaer9j2Fye9kzs8znTsjB15m3RWYTdJizgGympZjyL8PUyzvuPwpExbd65JkMf86sXgw",
  "key1": "42FC69yrNoxgW6udz24gSZGYtU4wQ8J4hiT3uqpgV5kgfHDAK85r2A6dLN2HZGezY1rQXZAU5jpRpENo7ocaje3q",
  "key2": "4Dw1F2qL9KjkATnrK9FwNMCw2NEGqRdWxb8PNsCgzShhEcX6zE6PRmJT2xANhkgdtRJiMmeMmxXz8MKXeGx3trWh",
  "key3": "2J24wCis8bQTqjVyrYmueXD1WJSNRGa3sCchmcPR58LNEcdn8EBoUsvPsAnozdK8wW4NceFzBJwdfzV2GR6sY1P",
  "key4": "347M3pXS6g4udnMLUzBddJoSAoUpxMWBxYGuXbETqpEVFoU7j9yvS5yuHjuuUMf4C1u5wW1kaUAkcC1H4XeWnb3F",
  "key5": "5J6EZQ2DPqU8urMVZoTev9gcoriWwVrckk3mm2iCLQ6BDMVnRV79m7Vv1W73kVyjuPvCeiDHwuFhAFFNwfz6KDju",
  "key6": "4qg7m64S4uRWCn3TWkTE2StMNBtVizwSEbCbPw34QAGjDrJSiPwgNVA2Mu5hYncxjNfydwqQWYB9foadUnr4rQBc",
  "key7": "3bYMekgVPyiGH9gtWSb298yfEuBrPjrBpBKpEGhhebjkVtiz6uTFxqDQXaekgBoCWC2HKmNXqshsA52591BExjms",
  "key8": "2up43bwjMj3Shqw1DwX3EPNGCt7WWFAXFYP4YDgSRovHgfLYGDFdnQayJSSjVPL3fyMPVPsEEMi6DhDiuiseaYRs",
  "key9": "dKCKgQJgCxTz7opfomfuRSGgJH1jAScWsc82RingjJsxs2uGDgaSyCAJ644WzDJ5Ubxyfhn31nhnkjkFKv5V2ZG",
  "key10": "19mEMtkTkvuY8Kh3R3myJ6azvaaiaoXSpoYFcGvS2d9q9F2Cc3gbSELGz61pQM6W4iCXsdVB9tb4hdJDq2FeCrc",
  "key11": "3HCX9U6Sy4Ph6VMkjP8NaWzUvZDwkgdwjF9tbWuJvKY3PrPTqTpQzsHxiZE1ptrFnyxzqAnoayUzB1TTSu48jJam",
  "key12": "4AwYyNrRVoZRqM4AsMdk3fHJQTgq9riMqRVPfqhS13CWYyQ6N9QZsHcWBFyKGGkxV6mpZgDncibCpXnPxvpwmGLJ",
  "key13": "2zj8CD7JUYrtNkNVWwkekmnwCKfykbMyLoZu86HtDKg6rA4VWMG7iVk8pheHhhoSyvEFUYiy4DW83ARyzsguLSfu",
  "key14": "4dixWKg2kKchxaVjLGZMsrezmXyhv8bnqsajNPwi4rcUGkZK7vr3fWzxd1W3cYhmf7HkyRxsRE13CgEgf6tdNpMY",
  "key15": "4WakMmdegmVDHfAHPA7EKWeLq7PD9VX498N2MUcnuo1AHvGmbxnnGDECiyvau4FVHYz8BTfy64g94qTU5ij992A8",
  "key16": "2P6j7gcS3pzBui3bvgL5Qnk1DNFnujrmCZKJChNxAVeRMkKDT4gTjZ6BcFTnubhnc1ovb2qEP8xjtBKexetw1bqF",
  "key17": "SR44HXcPdsLE5Rbu9FBrAPdqPBodXh8m7BNq6HocMNzLMQ7yGisBETd1eYedwb9JSjLQ7isQStXXsvQD6X5eN9h",
  "key18": "qG74RByzCJacQofCPt6AueAnEABgQ9bS4rymm3EJ5E56S35WjEeVjhqFSBuQoYuSqJcEFn361TCaJx9vKw9jGww",
  "key19": "4Db5sFmxXFYqnK73BJXMHU7jmUFP6FLdqe6vpMLkQWvfZr5zAYKtjt4N1V6z1BqWvKRJ1Yc12doVHmiajvh1gkcY",
  "key20": "4wP6n9rGqH9KatA7FouETKojeU7Nz22f1qx1QzetxEvd98HR4onjcjWeedMFu5c4bN3s6tEr7eAULfkKhwwZfMpu",
  "key21": "3g2AevgqQmdRYepeuYFd3MqoZqrhCwpLx4Fthod74aMht86Jcm3k1AHEn4neuZWQYawGchtDaQV5QxRts6jYJqsj",
  "key22": "2DUKo1N839B2kX6fmXS1Kd7RcFrHAtJ1KtMX4U2P3fp7xyYo7GjQj96BHzyzT9eyYZBcDCjwSkzPgHn9qJFPnXsK",
  "key23": "TqD1k68aeA155BoPXy6RqpYpkZvB9xskGy3HYHDAzyxuE4FpfuX3Lg6EYk8z6E8bCBBJKt7pMa6QkpLmErPpc9F",
  "key24": "2n7TuxeEvhcWp8u1LbdvRnbRg8JcfBJKKtfayujfsp62SG7bGtMrkqm1kNzeVtYYTLfXPKEiTjXr9JkKYHgDw3vw",
  "key25": "4NQF9VHhrE8Jr9pNWqox1ojoDLrparxXPn79c365xUWqdwQW1ccqRFMMY6SZ8PXRjjjxS8GSUPepZyUrFQAaXSNP",
  "key26": "5Kgnc8ydQNCDvsmso83zxaZPNW8WMPtjSAH3CA9ey5D9S719wjiGTBXsyWHfURkdujkLjzPcVtmzzcfVoiLTLAys",
  "key27": "4GuP92CPiEnd5G35raEJwSM4iN6RmBA2ApXsSoU4BA7LVC1AyKytmvanY2eyhED13rMy1tXUVw3BG3128Y4ZGtjd",
  "key28": "5wTtFBu97A3VqaHUA2oggakvJ7byt9HBsHBVYkHnoKBa1GfpRC4ZM3cXq7SPSfWEK1EmqrYWbdN52xMtqAMeBep3",
  "key29": "2FVr8SE65XQ9p2bWWJkGWXDm5QW1sNW39EjPDNiroDiUJRkBnRQggtAJL5JBRqZqy22Z5xEC7wWTy7Gy9j1H6xd4",
  "key30": "2DmiazZo7XpR3L7D7aPq6PMVCmdSgewnYAVoFxgZe2d5RSM3Pw9Fv41wKY6dtMF2UB8KnELrt7hKryEHFGsRK95d",
  "key31": "2EpCGpcqKvLwHkoddYjMkB26Y2b4pCZG7CxkPhQFAgP2uetph8A3yduSScdWnJtbQ4Y62F9menrKQuFGJQwMv5Au",
  "key32": "Uahwq2en8dAcxpuxqnztFYSXDQBKmB7iAw1uSoiQw79JcWU9DDz2HPagKSEDeJwgGdUnnsBm5F4VVqVMHtWsbHU",
  "key33": "3Qforqdjf9uB66Wzdm9yZCbiQ5RvvMNNqnBVuwepf6TQedFRbhLLzRh6hDUpq3WV51N5vycvvAgLSEk1WRdEPhWm",
  "key34": "2VVYXCNfKDtpo6EhxqA4jQ6ptMZDWmvxcEXU3v4Wkp8m9aAocfPpVYUjBUDAcPJtebBFWKnvrWuiHovmmmGDSdU1",
  "key35": "5ADw6B4MfXKZpbfLSkZ95t3AL1cvS1jwc6nxjFXgszNWSXLa8YTS8Xsh8y7KdCHPCWS41DUJdYRfTehL2uNHyvbY",
  "key36": "337dEipKsZv2LSQgVpac5KB6389oFi5z5Y4Ba296MAvxauh2Rn7yiZzefXyEBGZHnnfQc5av3mS3RhKi2UwMCWZa",
  "key37": "5ZUoe3NRzviJDmdmcqdZh89NPmhsfXwTFPY4rVemqK3HBsyk69pqZETedF6Lwv39JWxbMmVs3Hqfg1qeF6PH35DR",
  "key38": "55nwRwiEgoobRJP5Mc21s4LSySF46n9cmgCWae1ea8uQTHjdrsb7ToAXTLQg1kGCyMgLa9T5HmjeVx7tA7C2Em7K",
  "key39": "5v7p42akNKLZiH6LNNmstaMRD4R8t9opz4aqfxm4CTPyUZFjmwoEQsc1tMtrmAc818i7kyVoBsuM6e3gP3rKJmJQ",
  "key40": "4hrSzcakBrhFTVXjYyndzdDXj7h9nDfVPfd7D9iCEKoKhuGumdioanThaRYsAMBxVy85Yjkk99VxfGQxD9LynKzu"
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
