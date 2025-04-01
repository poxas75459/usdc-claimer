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
    "5NkzDQjsjftgqCZuMmJdhZoiuCPkeNRpD5gu4g8guQzGFtBqK68tq5m7bQZuEAz4vquT6N9dDHngRAirmY8eHEw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KHpoA2aTjgj9yC2TpUP2UkjGwJHeUTmyP3TontMzHRJ5uTTSKoSTzUKCbMJKbEswZtL66M9g5fPssxGcbJcsfT",
  "key1": "4SiG5vUXKjqNTq9hCTGZad3nL9iqhPsdxPmiyeYLqumEgzY7MZ1hWZb2F1g3NC2Fw6BiViFGftZzgU7Y21j1GWU9",
  "key2": "4GxoDq6ZXUYPdhpkWDewhPtoG9vpAaw8CPLHdAC5b296DtoHjwieq24ysP3dJgxNx1nXiB3Dqi2tg9k34e3tMFLA",
  "key3": "4CsegZEuMjAtoYhwDNYyXCvXVzft6H1gnG6hHs1Z8zF4mbddzAwYMoe62kfk1khQEyPZm5mCU1ffCBs2RJ2WN9zv",
  "key4": "52XPM5tPWg6dWhTDusKuAcgnyc7U7qWvahvSrZsTRJUzKRu8xMwYxMqQ3KUSnqcDMFBHzdEEendf5JdGdbVkeKrs",
  "key5": "5TzTdvPpe5P7x5h2TbDB8GpuxjquZz7fRPDR3WAGyn8KK1RPEWBQ1RKAVg6ffypSJQDpngjSx26ert8uxFR3cPAb",
  "key6": "36DJgv76BBzM1DkS2FcXZoR6Xfn5mSiaEuGkKBEW6UakujQKnHnfqkqDS4YhJeiHKF5uWueiqABXYYaqTKPoTiGu",
  "key7": "4rHt5WshCrZN6oKY1drVzxnwxUioxqJxRPLp5e5FnPcfBX8LdgvdUVgsGSp7RGzDhpqyqE4RcF4t8DfMg4pqefKQ",
  "key8": "62cyNHBaY1wqt1THj5FCzCFqGYSxDptQLob1PhfSA4r6CD4JHVKuUiyVJSKsfMCLVKEjHb8gBShFnTTVcvfHTA8z",
  "key9": "5PUwhfbYYsGcaKxUx6fW3vbWJfPmLa2p1E2fLppkCRr58pDvmecYmZLufb2r2ivNPbkXkFrokH8sLQYi8gnpoDGg",
  "key10": "4b6b2w8v6MrYBhN72LuJaSxJoFmXD8HcKufycQa1NheA1iw7eZWDUtDn44RH8NVPnWwBGtLv46PPmc7Pko5sjk66",
  "key11": "thkemqazqDxuomaHnqNz2trzodL1wEZjAQT3zBuoK7rKP8DmDABYpoEU9bfA54rq2aX8gZzhJ88KuF1CAtvsHz9",
  "key12": "3KJ4g7dTbhhXbwsXYK6z1kfUAhSgR27P74qPgjULwNeGb1vetaBuV1Gdv3betWSKbnU2ni5mqAyt2gqiY1XThQ51",
  "key13": "fK2oamigQKDoJFieMKXmWA55anjWsJuPYKiYApt288noFz9hSciEeS378hDeMyq3dQ6i3ZvTxPzLVAoMoRtog3y",
  "key14": "2wDe6aT9RhLZewNArcQft9tuazBjBfymn7xGDCsCFZm12qJGovuCMPTtwpzMnNWtLDkSAAyuy19gZ2Ac5PyVy1kr",
  "key15": "XxTwq98MzhjeAB8RyYk7vNQqDuUVK7QqsLQXCSfimafvMn7HwYaqo5xaZaeNrZfLJcwEJt2FvU5zGaAWcHtmsUe",
  "key16": "c9UY4uhZgBxbgwvMDtRnzpoxDLwaywufbUbkghBeBGcqThh6J6n9bnqnsFnhYCi8Zd5ymDVoWJKA8khLVDTzcqB",
  "key17": "3wRsUBc2J21TDyX2Jb2ayV8JDDgWFUnqLLcE1QTyHHTd5zkcCB3NoHohEvzg8Cg7CyU3csohzNXEQ1Rtsfhp3gYt",
  "key18": "3UDWv5xJZnj7VWLiDQM5ZYZeJiJ2avnf4fmzk6f4MSmgZb7AQQPfN7kxS2kAunpwXMXBy6EACDg2xUa43vEPao3a",
  "key19": "39vxf8bYVJFbX7JbxSvA1fRPRLfxQ2qe2fR1YjXk1svXT5nxy8y6fqqjgUzuMMzWBjxowTAK4KdVBApR8btfkpsL",
  "key20": "CwP6tmBxPYCzGf2MpEsuEaLLU8aVifYQ71QcgvwbfVG7G38VxtsfXEUqb8xZHsDaM5n5Vj5HtgpzLEKAxUfkqH8",
  "key21": "2u7kWBNqgF6YHhyafJ1LkzxVo3xEC5kRTwWeJ3NHR7Gpvhdha6Bkt1iFyFVg59bFCFbgoynP9TSn8VLrEaehTYr9",
  "key22": "5Dz5VRd5xHwuH2dZYGGBSYPDsMn6Nt79p7YBwG1MkmGnrgdPWNzSL5w1oKTfiaKyGFeUi3r57W4tsyJPKxS5gphw",
  "key23": "5MSLQRVUpyoA6JKAPx6pzcEtH1q56oHYCS6Aqjpy56By1TrkT59ikjD75KKSw7U89MRc263binASVa9cNTSAGc6z",
  "key24": "p6PJetiWRhpfFpsFRrbTagic39W2cthRKRh7TmB6oTNW43u3Pen9oc4PhJEP9CkzGT6Uo2mULxsHDtfh7QxEM5H",
  "key25": "4WbXu85KcHWfnnKZuHRawCzhK5Z1USdmYTCU5zTukieCfTgCgXhcWNpRH9VbgxmeV6qNU4QGgpi5GgG7kyA8HyEs",
  "key26": "55gcCmETWY2kmXvwvdfWdyXepdS8YhuZ8F5sA2WoWLMzyrVY36hzhuxwqUttwGAmfqiy1GUkVpjFspsjztHkKbC9",
  "key27": "4pvzL38vfmZoWSdfAx8iF5tLTq78Wso3wUsD89bVdQRzWh6xUgTStBj4a8ZrErrYYbyu1bEwtFWdVLFmXMM68yHF",
  "key28": "5K9pFHhYCHo1HHjD2fkWrNcZqiPTtkpLNd56jWKYgn3zwc21hgL7SijR1Tr8CBfwAZ7beTS6wHMZgLRc5PH47jUJ",
  "key29": "zEKTiVfaNZs3CjNGFNTZFa4ronmGfTRsjLvhRu78SWj8xa2nqYwY8UQ3EF8u5NjYt8dYZHmbRcTgabzmKoEyUnB",
  "key30": "in9kmYWseG3KP7hCtcsAiVXg21QWyjsGuTHQKS4AbDt3TC3eupjemdRqFUdikH77cGWatNQmNa8QHPwvsrPNWcr",
  "key31": "4SDKALquEYRAf49E5SgSdSHuF6Zwnp3Mft8uCEfkEeWq1jRrJ2M8cmtiYke4SYE5zHnJzW6KVCpBG3eAUzACXoEX",
  "key32": "EXjPeCGZqZEMSRdsJir8V7uEboMh24nbFAdm4mMeFWdBwUYWxqd9BsbXdCboU8XPKSM1RoLvSNTQck5BMiYDYVt"
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
