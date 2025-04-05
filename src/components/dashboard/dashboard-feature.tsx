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
    "M5ZkF7MVhTS1CLiyELgZzFTrL3KEUfHKZyzAuVSKFrLxM2MCykNCXRaKaYjkmBXqd4tWKorsWmZsduAPab2STSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NChZJoa5Sxu2naqZmXyoBxAYLkASS7MmvcAkATkVCqxv618mC2L8xMo2NWwPRhLAt6WWW6p5Y8WS7bdMQjXCwum",
  "key1": "dmZMRG62DFakaingpBRpnjbXAKq7yzh5fbs1SFX1adjKD2HNzNwyYtAM5YDmU9TrKWwrTpfwUahh5SdtsNFLBz3",
  "key2": "3eqnMMKxbM5f5U5Rff9k4dceNfkpx6PArXKt4ac5A1dtPqKCz1um9dW7X4CRvrafVniBdptGpox1ubiQ6KkzXLhZ",
  "key3": "a2Dn6v7pDxeXxpm7reUnc84R2RfpNUbad6Wd1DsndYmdVBvhWN1cfYHB9p4AHwdeBwrRhG8VAFGXg1xy1toKPpE",
  "key4": "4Q2LsS1FQBXF6P5KeV8QgqHTNj7icY3N1iMCJyGXK7CKjYpcm9R7FRyv2svhHbbVnQithPeLo1FQmqvBDHAmLCWW",
  "key5": "4jSg6586HkZ5EFo8M7T9SQNzLVwqGCEWvrs2yPZ1btnKU2QR6cqM21TYvUdKita2PJeyDqSbGfESTDXdAqksS1CW",
  "key6": "3VQhytH6mbgoC9Qt19aEUb2qFKyA9PqpSA4tqjUsNLEEgMuWHGswMy6oqVbCqK6Tk6fU4B2yA1oapq2towpg6djt",
  "key7": "55QCQWGuU4fUiMj33xzui3ecF2CVJfNpg9UNWzhiVdSMi6KF5wJ9wisYFqonjZhuB2qpJPPubNFLr9zXszziLvis",
  "key8": "3ysd2t3rQ9nepC2hYkt1dYD2tWTq86DKkvsfZQbdX4wTueR1UWM8FcfDVs93Jo4ivMm12mTeH72Dy8oA24jd1ic1",
  "key9": "4d7JLmd2vvdoTmRxCz8AydZNiGkR8gjFH9DNhHna7dvupwedWKF9AAT8vAAAxnFo4PENQzqaCad72fCC68vrxLgs",
  "key10": "4R1vM3wcg67VYhDzA9V3wMwSEarbTLt17ZG2Dtr1JxPvP662vWTK1CMt8L3kwdUUy2SUvnaFhdBvvD5mme9XQsgR",
  "key11": "5Uc5HvDvSwog7K5VS1VHSSZhBNynqjs7i7uXsvRL1juYcKSs5rm47kY6kJ8vBKtm5ovUqEvXG3spWnyWdmY6csqr",
  "key12": "3aenskTqjQtcKjfuyrXVL4zAgrJokYdKgp6QFRpj6PkuMRNNt4DALtykCTVbktZP5JNm16fQaosPSJYUhoAtQpnx",
  "key13": "Je2pmfXew4qzDjq5UNnHWESwis3iogxzmpV1Cor8vvi3cChqnduobmA121TWuCc2ti5chSSBqhv8qJTPD9xVnHJ",
  "key14": "4dQjhhZCP2NpSs2HxuF56KxpP2Nr1jxJ4JB37vYUnBRCFJX2q4gUooPLRqufr4dEka7RQC55JFwdJchMt1W4WkxV",
  "key15": "3acxKDw4VG5CTFN7ivQPvAX2djJ5g3cBzrrm3mSiLkEw48Cemnoa9uo4TtJcfg9RRE1vc29nkvji5Sr6H2xjuNTT",
  "key16": "4VkxqTwGBc4pSUspGnNLYt6PswTZGzKVcjWwdKjoNynf38YtAXoxchfE35PpwmDUVcfTEWCKVAE6zLtccrXR65Rb",
  "key17": "4bCNGqYsJxdsLAbWuyzV2BrW4oj7heemkPvpk8ja2J5FUytfaqB2Q6iBujyV3hoUvr7JDMg9DGhTay3fLqpXGFQZ",
  "key18": "4aM5fwqdiBzGubkxxNL6SdG1E4sn5ucPd3xZHNm8zcvND7Py8MmwBe4vTqy1AqvNhsnz1qkVe5u9BMCH1pVacdiT",
  "key19": "3N4p16svUWt4GzHUcfsfsQ5wBd3TXwiBCEYgeijk36FWLJkYMCsMsUom6ZPKrV2NP8VJBTdoiUZwyyB3KuHGSZRb",
  "key20": "3wzUNDu8RPJrMaRnbCB7AoVszwytVjzKi8Sd2wBVFcKsEdPefy4EWdmZu7JUrxKLpYuSge6zhw2FjP8BiFJysBQ5",
  "key21": "3QuNtKLbuU6rUVD4wtzninJsD17TGbxMCqq6ouzQ2cHCLZU3GiU8AApKUWnf6BKTKe1ChVXAt7HPq2XGoRBSk44",
  "key22": "36MBTVzSHTkKHtcknXQ5HNB1E4tu75MwWckCSVMzgDNWJLrPjtjAGPMkLCFezDtApydNhGHd6f4bcrDtJRregsw7",
  "key23": "3b1pvD8Foedx8xJqXaJSGMNNSUN3YUiHRxcJDpSJwgZV4UuSH3xcDksYZuRM9mJP5XTDxKpFmuFBzuwEoxc9PerZ",
  "key24": "2cJQnzSRVzTsGq94FVmZTW4qhsQo2jdPB84SXjpt4mxf6hhSgTmzGtkAorrSTviKxyS6JLhHDurp7PwjZU4E1dd9",
  "key25": "5MaMfEoPqCnaqVYS7JWrDwSDa6GyiS8daLqnJEy1NYA1ePCNdQTgfgK721bcqbGQF6Hect9RJhwmbZqxm15qPD1K",
  "key26": "aHSUgrTocrWcp9aHMn8Pa9op3qFUn7CqofTwSus7CFox4wfYtrynkW4vuHfh4V3WW27bCUtKtyELPpoPbrJEepe",
  "key27": "zaQB2mFafMgrpiVZ1ggv7RNzBCjKwinfCGiCg9pWX4grWXUvp7mnBorPQJRBqdNBPzV4RszHa81qHLimRVXHvLF",
  "key28": "3qTLCYRPSTgEhVtS7WF6ubByeNcQgB6Ew7zMtXyFsnHCTwttGD9jHKBaBUA38W3yGrPaFGVyB5DQrP9xwYWT8g7i",
  "key29": "2m1Kv3gAqvGDxtJKcFBTSMrgNLNvxx8eeoNTx2vUdpXAoW7vgKjM9iEU4qBaR7kXRsdTxJsB6AXpguxDw2a8YPDz",
  "key30": "3Gd7zTjRiYnyq64RqbsUtEnjRtngaHmopt2jippo48ouM6DNhfnLe5iwY2aabzQZRB9w7KsyxjrfyWGL1nfYZNZH",
  "key31": "2HqCeWDwDwBe3KPvbAV1dJqge2CyuY91QzNeH1VyGTvKA26HfkcKMPPd173SANS1R922WcSkBd337G6zSLCKgKvU",
  "key32": "5PfGdKDndxQnsFtSXq4LKcKdadDK7GKcCH9rQPM55N8f3kcjQzEYm2jscr2nQoBKtjUmVxRXexjS2PQpzed6fmXZ",
  "key33": "1GHDf1wGXxKaicTsYP1aRSeTStwZxL8UWJ2gq7q1iDMjE1yvs1LShS23aUXrmkaRi1SwXFThK6YnS7iwVWGNCFN",
  "key34": "5PQ75jgKg5m8S7x9WNwvJfk2SJ56oB1vP5XBWNQPZuXDJabAnUhis21VkrtvtYkZdep3DWsaDvQRwy7t3ehGthEc",
  "key35": "2RpWsyFdkd6Np3cncXQokX4TRXnBB3CynYHmhuykxAEZPRmf8L6WmQaGBj5vq8GQpC8AhfNKtTCymhXJjdJithrP"
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
