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
    "y8453VX9kxTKLGudKRZxetYBSMnLtzgWZq5KKRidXkSx2wy4YDzhZXEcUWonRAfZ3sFhAyT7GgCp7BQD8PyWZFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vS3orUPNMKkCr8g9eknrx32g92YbZXroQqX37jfCfAzee2GDfnFvSuSqV2QmNjpqqr42cmM4sZ3hjNhNnR5s581",
  "key1": "4Cr1FPQES5pqNamVgDeZyGrXuNZAwYzSj5kiFykt1JZ6V945zhZHjsTFedTrJgXb8Ygtq3NLzGMXSfwugX2CJfAc",
  "key2": "3oMzXZPGJCZRBRshor3nHBQFmUd3desnAQ5xcTCMobsD2AsfDcfka4hn15PoSFsGyux1EUPgUUi33LgxVJiE4Hgr",
  "key3": "Zstrb6BQXv8mk5D4VtY3ZenwugmCbeowAuoAB7r2j4HB97NhF1CsRVZ68jgKrGEpR4KUMnnz6H2wzSXybUqt161",
  "key4": "2asPsVbn3PGbAuUpMcimUKo4YrxaYJHYwH4Z8xVXFHM9kxJ4wEAcQNeeBkLX1GGSNKWrneacqeJGDpdyfhcCiLqk",
  "key5": "4B39DP8ARmEw3Ra5PcrFX5dKBTJydGUQ5B54uKPsj5r9ni99H17DGDiCoBPwaeWdBfhNNj9e54Jyan76Gom2spJ1",
  "key6": "2r5BZByU5EuK5z4gmEPANe99Ax9ABnYKnChS4n81fgsL2hSRWyAahqR6uZj5H99BSa8fkuBVxEZuawE65ySNY8Cm",
  "key7": "5TftkC5w5kaiSMQFMCwJGaGLi64dAz9ffY3jrkQx1Dh6e2dEg4nQxSXX7GoUeVsue5MqUoPGNBwrgMEUbG2nFjs",
  "key8": "5xivp7Pk3BWtfoUD1DX1QXyRr8rkzFvAcVQw4MJQo3MzXEhVdKZyNLCUKAAYJXhKbTJgvH8VsjLEhQVfCJ527dCt",
  "key9": "54yWuwWUrGUynzpHa9yPBgJwUCsatS6o57rERKrSW2Q7HcytiBeSQPUcVigVVU3mKWA3PJ3Zy9JM35tEAK885GrA",
  "key10": "3RMG21z8pfRPWYrcbqxGToEgFHkf5D2LvEmSSuoadYaVLorRgUPCJRZduvXegEUoXFgqFhr7zjhtTwZ41AW1hgD4",
  "key11": "XvzThgkuvWhymsWbovqaQ6VdcxA6HKAiD2SnJPCixeynnYw1G6upn7CLTfjXVFooYXTxrS8j9jWT6wsqyWQ4J4a",
  "key12": "3kH8hymC2MQ5o9MvqMdHeB5QXQzSyhv6MdZLxQrvX54WYZFvQKJEB2PvypRAazU9YdKpUYk3QqZjciokhpSd8hYv",
  "key13": "vYe4R8hdenohsHXeg6HVDAGYYB1zFcuvxtFZkTTr9QFq8XRgYHx8BrR2U8fcnSFCa49PViNAw21G9xSWxiWz4F9",
  "key14": "5Pea2T2shrk2a6pb4pDFnYWaRWJ2tYD8xo7MyTTzokMM9B9X4BZUXKmyBTgqc1wrnUuxUDq119xW7ZM3ogdePBce",
  "key15": "4MxUq1Yf1Hv9Vh18Gisrmd5wBbYR6VvP35xANpshSBWc9VyawhUsJatcR8HVG3zBa8K4HrAq5jxp6T2rHJTyD82a",
  "key16": "44Ai8S88JwQ2YmFvoUJTmACXrz6CeQQKNrEKzBdHLtLZiRqKt4yJXkis9S2rXCK4QEsw6E98HmqPw2brdtNC8jXi",
  "key17": "reqF3mUxUXHLb49t3X4mRwyRMUP19ryrKPtPLmUTPNQzGcVo1oR19oasGuA7Y5PwwdvaHf1fnDKC4NoD34qm5Vi",
  "key18": "31S4gy95Wy5YsPm4X4ZAJsAKZHeSSyh15cinm2g5rRZ9PLMZS7CD9FaML98nZXAfFZvM4GuVoGwLnWTurnmrzwXC",
  "key19": "292ptf61haiiPcXHAsSQdK3VLQaYHfegkivcAJHpwXZc7ACTgxQPRMNhAZA2e7jD47KEvBPipoPVaBydybCWtn53",
  "key20": "3HWaDQ8sQpY4iKWh62knqGNVAAeVcia4rN94AmEHVUmXG9NUrn3vm3NkWFYqcL222Xg2XHXszfUwYRi84AeiLvqm",
  "key21": "2ywroFVZXw6BUogY8ih5Z5gGT7o8QscvioZyXe2K521ESrxjBsQPXLJEgi6wPRiEmMNAss3NdUBs8VpotBasi5A2",
  "key22": "LYTdaYbT22m7ZazMzrzafFssvC1jeutaDqD3Du97gHbgRPmuTMA8xphLfPgEj52q9Tv8tpkM69vadHTdUMKiyjr",
  "key23": "2Mky7ZeGaDvQRpCyLnQ5Ti9HZzY1P1fGw7R4ukjbJ6RkvGjFhzwMqBtaToyA3ZzrsMHinhfem1kJmGRxKYwjn7zY",
  "key24": "22GWNkrdrUvBYS552cBwXnXuEyCZ7usHR4D6WniAFmbKrWtNjYTaow578oXMv6S9UA6rYyYQzrH5FJ1kCyVtbTNH",
  "key25": "4kvqy7G8RPwpaiVDcuezd4zNfdsE9p6rRRAXZN6ygEqLNjcEQEyHt9WZs6WffX2iRSoThw7QL51N7S1V9WxkqUNT",
  "key26": "3SyBskCNDzqs7GwsyjUfu4xLmNoyFkCQTo69GzrDghtEd4TmvH1VsTWRJFijYHgZze9vuWNw9BqFj5h9EnPGHnBD",
  "key27": "4bLMS7Kc7VA5kJ5Ug5tqmhfatz3dUFCxXTPYbM541kehka7APQSjBMDtU3LyWqksSuiEZigUgcxw8NKJeUBZbXhy",
  "key28": "YVfnnPwbigAgJyZeYpcNjCc2HyJDckMnxtDgCt9cYRqUJpgHoZfg2MAuWwtX7YhvM2TXsrK3jBzBejxMPS6bpDp",
  "key29": "4ZNnjA5zn4LMHQdU8bUWF4uRScoAycNwHp8FBjrk9vLV3pnpRtqdTFLSYoTtbpR3fxgB3cM75ReGtsK8yszRx3YP"
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
