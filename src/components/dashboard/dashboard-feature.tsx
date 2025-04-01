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
    "4BKb51khYVk9zMaR4JUqzqbL4W1mXcyYsQE2RMbzdtjAa4ART4YRhU39o9wj7KUWry8sQ53hKDyQWFt59Shea42T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GofbVnfgH1Qph3pZDJTLiteE5PNgQSxa5QGUj9qMWG86Zhx2iULZER6CBi7h5sWqo9mvc7TFr8Pvxn15GpfKVwP",
  "key1": "5jTqGd3EVqhrxGL93vGuukDqTH88Ysthnives6aHtnB6rvGjFFkt1Jo6cLox8nUkeLBd5S4wAdzJTEdJRyFqA5Fo",
  "key2": "3aKsABWNnxTgqbX3Uek2m8rzuEMYduDf1Y94pNa29EwUqqTp8wNctsTfwmkZy7ViS3TU25gVo2EyghLi44HySVtW",
  "key3": "17cYRcVzZ1kCjyDhDnfvewbEjP6W6AALRXjDt6pmiEv3AtS9dUytr3Ee9hMeN2gdXw6mTt1241MXPbhTCMkZMLr",
  "key4": "21adfoohG4Yzfo1BMXsyRaW3zFFUVv4SSyLtjGtSReptq6t6fSKPGibgYhnzzNdUhvpfYnHCnax9nMw394V2ybaH",
  "key5": "4EeHWjXVoK1vL9vyjPQXkp9q9Ux3FNeRC4xrtF7m7igFxxZps8BpztcsRv3iegahZ76MmDT2eKeSkk8kiJWYRm9D",
  "key6": "4mENG71tNANLKdi8D8TAAs4VPTNpm64Xhn9U7EVZnYR1fRoegL5BeS4pPDBwzzUix9iSp5Cd4KohALPaynbJZLKj",
  "key7": "5wUXDcJ3dCrGckYPBmUmgLdvuBa3TzssaKScsKhaGNjvHygSBsjJBuCQvaokmL57MuRXVjoJtrcK7g5TXRSQEvyc",
  "key8": "5rpXYAurt8nen6isE8VQKzipJhz9E76FYdWwBzV9qKit8iiCWAUb1kT46gcCqPTdxLhQoFia1rvSSxBQTdpbb2rr",
  "key9": "wq8xuwN7KapcKR89GnvSz7KCofJgxmu12cjVjD6jrxXbAFKyxcvLXQrway4hnGnn5J9SanCPskLztApTrf95EJ7",
  "key10": "2XKQyiapYJsPWzJYE2kEkEidT1mhXZdpYaV5oeEVfuTfjWLiGRBrtoqGWTM4Mar6MPiSH5KsbNhWgFPcnodJ3kMB",
  "key11": "3u6hnn9pRzgSrrV2cs9m2mNyJXyGgDERPeM99Rqi9faayYBrYeNqNdetQ2ChFFfG4W8zdFKGpRAiCTqA8Yjc6Hsp",
  "key12": "5PAD4M9y18NnbVkebwcyV647XF9DJgqJJRq43teQNN4sQLgSFaRBDXmT2n2ki1mFn3F4mvj8A41byJjKoSEVK6ix",
  "key13": "3M6Tv3XK98GZStVM4zFWmdECAP7Ka8mGqZjF3E32TVWQGkFGTAAKs3NBuuzPF6Feh4r151m4yDdHHJWVHUh7QJET",
  "key14": "44UWt3RSDGgVABzxtnSkLQuD9qNuwrAinUrcddmdFEE1pGoVuQNpk2hXA6gwrv42pQuZVbyuvvn7uEu7SFKVRZh6",
  "key15": "4G3o3CXcdDpkLHTmDMVHrdkUPGJ2qY9rPpMDjYZB2KUTNj9tH5VTiho43s9cTiStTSTcSkjqrwRFTRnjnxnm4mdz",
  "key16": "3etcpL7Nn8yi8cCcWwcFCf1pyNtYHNoWS2c5L7sWRnm5qtVEq7HS5rLkf9qGjviiLjsVKxsHJJANjh4NvfvFivkQ",
  "key17": "2ZvWJ7WLccFAAdq73SbRJdHG8b5cABw7YDttt9vD9dw8dSfUCwqRpwaNoX2D8BPKmLAjwKuXB75VZaa4b4i5cX8s",
  "key18": "3YxybfqtoPtSSZ2SPrqt9BJyHCaiRFp2DTZuojSt7sCk1W7eaRzyiYjWJBFLHkpMJ81jgNDzhze4cMft2UzyQTt7",
  "key19": "48j6FDfj7msuKdCCQVermor24KjkBRe3ML3cx8vUFHQEciTsFMx1EQjYR3pj6TEugJh3A8XostKEyfCeDGKhHBLf",
  "key20": "3WLK9Fwq7K7y6aXAYeuSgtu1E3oK9qs8uKx7n5NroN242gAJhFct8zR5mhq4Qf6s4SPzJZYoEjhSq5r8ZrATdYyG",
  "key21": "58QStytJ5ucaNDofVSyp1dz29AScfnfBvpctiaFSXhNtmBYwheRxaBE9ayJfvSSNTsm5fKGd43tBXAQuPVPU3wYT",
  "key22": "5WKhiRJhRwCXjku7u51Y9CrnxVp5gXXz227MbaPzrEhKXjih2cYQ5qKMQyrG4Q8HfJ2E7t8RzQ6jBWtBsSGpxFQA",
  "key23": "3MiSQ69jdYWuB7E5StFaSeDS3svfozqvmR9QdKbsWVc6u2cdF3gHy4zs8A3WmLBVKPAtijfwK3qYVKV2d9pkoiP2",
  "key24": "3Gfq9z1xmkwgxWWcD36TjRf6wFxLVg2mECk4akd6T9neQANoVMbE74e1YQCZjQiSuUVBz7RRX6nRAigM2co2h9m2",
  "key25": "2do8DdNiJ21foDWKP14vfzBrJhbRC4jnjMbKphWhWfWWCNCXirtXQFFSzgXkCpuxjMAkmNBodCQQnaaEL6oBWFPn",
  "key26": "3vn8vHZrLqQbPMUYCB7htmuR6AspNsB23NT5PYKQ1GndRkmFFMqkGgoGNkYLRidsiAHC5NyQvwMdk2HBqoBWTSdQ",
  "key27": "uXbTfA3sxszMp65N2oLXh59ryiyATN5SMUsKNcVnJDxsSmqKargpxx7KguemNBQAwW7Euu2L2dfR7bKXDNowoWP",
  "key28": "4tUzARYBfZHG2gg1xXjqgbfTm98d3JDCfutxskaVajhMnvKoDqBYqR5HQnmHzFJ1VxfjQH12hxXtR2jstsVNuMZm",
  "key29": "2ZDbXGaqn8YuHJBf41hpPhcqoJCzwiaZ55sNf16WY5TQkaPFx6A9mSWzgWaX55Q6iWESZ2cpyo7UwW9Fg3EhcK1k",
  "key30": "533UvMu5sYj1ZgCgs7eeLd1rz1rWfekVwstPjt1ZvSqDnib8uNH9RLFKiSXANguhWGyUbqZdZbJ5Yeup32LokSxZ",
  "key31": "4VQe3sDumcfzFDAyNUAActKE7z4FnSpZX8z5MC1kUVML5Gbv61vpPUeZxL4p3yv5UuC7CyocHYD2Anf1cHC83rNX",
  "key32": "3ywra23aRw2cVN44o23Vrr8HWbrxbpX4UJYZ7RUyLYx3BQJ96k4o9GAmi9R7X95AiMMx7LGKm9aDngVHooMDmKv7",
  "key33": "3sddDoFHEYXoP9CcmGrEEhGHR9svikcMyKx6XaWznjkTNa2cxk1oWAyZYG3MgSdz5Cje7tNivK8nB86E4uTGSGpk",
  "key34": "47eYfDAop1e8vzcsPP4iLMuHjmmsqUUyTygKKVJqA5cBUQABNJYuhxsZKYTfhjncEZJca9pGUm93tfy4VJpH5Wz7",
  "key35": "vUDeuQ9pZybuFpdZW7AStxECDVs9g6uuQ2R57tPd4971a86j79drvuwWBMzAAu3RRVam7armDt6xYHTaykmTMhq",
  "key36": "2JePb3udT55UcT24hJo3DTNziVjd8J29TnjtWA8dgrpWF6PTbfLYiiED2hQKduTcNzu9bE5JHjDHQsBM3Bd9W5DK",
  "key37": "5uXsGEU8AgPYzvAWctPdZVRmKCD5eyvbUX8pMXJ85hqb2yTJSmsvDARskiADJZAbDWhsF9Vth9BnxmndVdTVV3N1",
  "key38": "2HJ6MKkWW9JfziywrGMnvLjGrhKxBfMq65eewfh92wGuA4UFDpo1LvAKPcekNxHNhBjNwz3JVsJzwxKwBq1EqCfq",
  "key39": "4j8wwSD5im3FXMQs7UDNJLcnYeG21MKhncvHMuho1cSEvMs1adAgaqMv5n9mmrxyjSByJUbFYWxSXqeCzzci6bXJ"
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
