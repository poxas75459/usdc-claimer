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
    "3nxPs1dD8ExkE5gAvRoYba1VJHvbt4bM9KMsF3smSjwsgqw18jHi3SnSDbkPdkpFBYhdfvZDMe4sf6ywmiGFPx5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZhfjXNcsezBBszLGw2RyNdv42ToEP7i1JVCZQ3xTjcAMEDJbBYBpMMZaoi3ri769eMaikSRF2wSpL8T3D1uYmJ",
  "key1": "5ZRqXKqig6q5b9UjEFnsYE1onvERfgNnudg7Tad8cmS2SxiXQZsLsBVqPxva7ZdjmrFvsPoJTRWus421ncJaTYza",
  "key2": "2Uf3pmJX5RfuZR5D4upnUrH7Rk8LjRmJP9v5jy99jdjt9CLUaiKUyDkuKWxPETtgFUs5w4hRKQL1eiY4A6Vot1bU",
  "key3": "CXJeBQH8PsLZa1AQmCmSpAxzbhw57DPDx63q5gR88UuAViKzR1pQm6kJA9CPFLP9WKEBJHmAGe5YaZpwpmUd8hL",
  "key4": "4xe572jdNrqbzKQbQTwJnhtxFjnfJEBGAHR8qXUPQCnkJYX6ac3MijZAs7YxRH1h8kL6ssjGkY7u9WaB9eS1g89w",
  "key5": "2wnw2QYL8YYxbTHMk2ywZ7Gb58prZB8xvjv391DKZ1Ti7n4wJ8MqYakzSyWvGDvC74G1sqLckC4tVD28GmEeVKid",
  "key6": "2iarzBGhWgvqw1mPheRAmp448KiQyvumfjHQ84DLtnJZRmXaXfd3zVzD4bZPNbdBgxhQYPd4SQ9yC6oDgg3xmLgb",
  "key7": "t5uCKnPCfg4pg9DyhQxHBxRzKpHHreJ39kH89cBzzdZVZudd7EVT6uJYDrUhCZCWFV3EYzkKsJivWLzv7yMjv1V",
  "key8": "wnYW9ZDF2P61GVZFfdd2HDJEYV8TLk4db1JP3pDtF3waLCGiVNT26JNiUfMXaubwsGCCv3qaMVxtRMsW5Q9kaH7",
  "key9": "5xYVJoRYB4zL2TiKMSK8ejevQdVwNeCaqVGmEpyA2538aBZJZ2qWaAmNR8x8PJ5uJgYtBRzjY53ySPFL6GyEgwED",
  "key10": "5kmPP6D7mG27zjmP9d1PjY4HzsBgmg32VeVMAfy4Mfn7GQbjJHhqqKYaYZ1LKGwY8xUN1CSxkq7bNo1bb6RtcejH",
  "key11": "4Nh5oofyVAQo3rEvPYXHYVkTyGjxUZDvT8QstLnwRoS9meraEJvzENFbdya9RhJzrLfvDhzhdKL5KMQgT1xDweaj",
  "key12": "gqjviF4NshH7jssSPrmPgc9DPAvVC223VZv6eBXo7uHW6kbUjrSdseFPHJvKjCLHfxuQvik4PyhzJGasZuJwKaj",
  "key13": "2f9W4bpXFLb8CGAjA5nmJbgX1pj5RzGbqcEzcJjDFj8eHCDhogNoFerjAiPTt7VLmCLJwBDuiBd5Un6yzekLyMRC",
  "key14": "4WV67XC9YeeqHoB95ywDJ3LbvqdoUoHQ85ZNEZTVqZV4o3rVcKdv8ZMCRX5XGBCQYf7g4rXiZYDqMGN5rDH39nTh",
  "key15": "5ap2EQdLAVJMcy8Qcbt58LLfMCj1PHNwpVB2sH5upQRdhndYRHSM2ZCtbQ2S2mhQJYa3av7fCrqiCjiEHJrzoA7x",
  "key16": "2XNsNxrtowsmWEpbTWCRkK3XknKivUo6bMFp6w1smihfu18a9GcR8jJMLoPfJ7spg63kYR4xwCqt1yyYt2LVomxi",
  "key17": "4hsmtFENVynsb5XSeUcBsyhamuXmXKDK7tijDAy9U7LVT6S8CkWRjeeQLmLixU7SnUTMYoXdxfbCHhvYNqW9Qda8",
  "key18": "5or8eS2FPBV8XH5KUdxh1N6L2FfJ4yb694huAcfvbtNi7X1bmJAihCicgJgmqkxeDEiY6DLKo8V1ocPk23wAKbYv",
  "key19": "2Qc3o6k1QMho2HjSceHg5GETr7gUVuZgR3iQJiFzt64Qs367uXeNfqEvFMTQFcWcAjBprbYwWt6s1b5QZW6eBfnY",
  "key20": "5LzSPYQpcFXVbq1noA2XmhKMG8ahT3DWucKWhHWCeVguC1b5JRzhvDePw7ksnXqW7UQfEnfRypfzsxm3nkUiFzyb",
  "key21": "4jQp9L182e3msTnBmLE8cUnHFDqX48QiigcQEpgJ2Svg8Vdwej3gAUWyeufJxaTbtBUKjWogR5Xcrroht6c7QBP5",
  "key22": "BLnd3Js8mxKMCY6hvuGDYcdsJbxCVXyK6Fa8AG2xh6sCqWNduZGqXaGa2iqkrugvPE5NnE8SNMh7zcMfqT8gTeE",
  "key23": "4kRA1nvCY3ch6aQg4V682jiUGMpQ6EisKbBBKRPVmBoE91tN2Bj9DMAjDD2KjRbHb3868HgtaxjKmDK5v2azDoW6",
  "key24": "4LKge3wZdsTADpNgW3LQ2DVf8KUb2VqnKD9DLCQKx5GmgvSymdc2PHWx7Ec5WGyhJaayNfaA6KXVtamVEJNVGcVf",
  "key25": "2J9qiSPHLCu5uxJsyNfiwr6EQXHqfQGLo5Crdnnc8PAPTgRdhbEFgMh33ztydsshAXavfLi4wTQWxNTZu8T1ZQZ3",
  "key26": "4nY4ehzNWPXvuRTZgr7xqECD92aBPENkUKrdiZoBWypbrLNR5BhC7ZZC8XtD5kqV8vGkraiiWr3UJpwFkn1hgCfQ",
  "key27": "45s4p8fNH9nvkUGaDEwTBxXT1esp7TqDcYUsp6cJFJHDr4MYQooNtyVZb4ZxSwCr7xTMHo3aoCwYJZwqFLyCyVtX",
  "key28": "2NaZoVnX3dkKpt6y4kJx8uWeSqoqGoy5PtmiXSoWhgY6s8jKxZot8dwT89wmFVAX1L5A8Py82STRSXHguFNtcd3G",
  "key29": "36Sb9vAxYZngrmLLb3SSitBKtCB261dnbUz4KCBttyrsM2tBTtx3ZZSxidkk8Wc3mZKNRMxpt48EyzmLyr5MnK6A",
  "key30": "4yMn5GnU5UCuDeXtW1Jwkg18oVahMCMCFbbLK9NXG2qikeXX2KFV2eZqkr29TNbRdyxvKS9e1zBcTsoNHGXGj9RB",
  "key31": "2B7G6PfzPVySDFbUnaZKNg8p3JUUgQqcoWrcRa6D6WQZnSZpUotUYv59XRRL5N1bZKGzp9kmjLPon7njNMGTYB5r",
  "key32": "5yvkP3mp2b2jQGMPcww3oxAQerRcuKMhMKcJFQm4uWeVJEVGjYPAcar7Bot4xVrCyQfVyE58WvRtUwwuTECrqwU3",
  "key33": "5o5jCUhw4g1Ryp9e7oXW64MA2TKSim4eqxEPfz1fztM1DLnGuqvJ7FJL55NQTiCZjKzcdqTd4G9yzARxvLyadpam"
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
