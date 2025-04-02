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
    "5tdaSnQnSZTKEchvaT4BHfWPDLoRejBw6f5VdJ1ueWZVdicJCTQKmKQ7uMpwHrjCPTNRngkXf5Xa1Yq3dcMEJQyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5XrsqV7NDrtZQ89xMuh9fuxDGHvVSb7o8MJFqZz1SwBob1qkmr4jizKQHyUN2FZwVFBHUkeeazihmAQvsxfiDV",
  "key1": "4i8pMcEfMpz5aw8tDkvZpPctVE8ts194HBiMjAKho4ndedZoNgpaTZVwv3bvnkgGc6UPt3VSyr11LqTLJJ7Lkr2A",
  "key2": "4YaTKzpgvMQpnZWeosoW5QWTjbEiD63nm1imk21joMboffu6pHDEUDBurG3Wk2BaLGZjq7X4Fu5hNhPPm1APY6o1",
  "key3": "4bZMmvpPRoAyXUWsaHeSVovjospsuNaPYMzETvMWRnSMg5tMSMAe8eBE2LTk7EgwAimx92XU8a2Z9RdwjJfpCxZu",
  "key4": "3JrUHoJ78F7FCafXAwKsRHbybAxooUNKMypHTpcWC35oCkvRa97PKFJmsS8g3vVFEubSZFWt4NZVHdmHL5YyCtnb",
  "key5": "2bPBbxzMVpzQL9UkHqZNgHLneY7JtDjShK7ffKRCXk3wT9cusFEPH1SQykMXgwAfHgzLqZMvjM4nzQo6awaBiiC9",
  "key6": "2h5Tfqgx1mqUo4Jq5mc8Sdrr9rFQN5yB52rp978gpW7z7Sig1MwJNrVjt3jeqFYMaATuzUse8WuSwdXK5enJZZJz",
  "key7": "5KugTm9Rbg2xcRWAuLqqnH5WGYMTQz1wwyU4A6mbruzszGtd7XAE5xuMqMQE7xoQYe82uknLGYXKyVaFZDmeN7ZG",
  "key8": "32rwDoFDAVtwt5jGvxYFhnJa8YUdKWLy3RWcXtJ1qX6pmALBEXjVkBVs3ZwCS31yJfqPQ5Lys9dJEMViL3mt5x6E",
  "key9": "3vwJZzU3NtaQ5VRaj79QpfeyFz1mQSZNRuZZNqqJzwUVmR1EsqsL4hWCh6eFr9Ddv3LTTXv7R9btojSseYJvKs5E",
  "key10": "39wrABZzNdrTo2aSuFrBAyaM51vwScDzZStJttWYpWBwVJdFFHLyXa8zcLzeNPXqAPU73bKykeRRqvQVqrNM5iqB",
  "key11": "2cjjY2C62q43SuL7VhyMsgZmoms9tnvuZGUxEbXvSb1M13HSiyebVR5nRjTUMBa3m9aaFpZVBvG4fsxo56Rdz1kK",
  "key12": "AmHEZk8HwLoiHTEd3qfPY7HdWhUfjnfNts13nfVy6EYmgeyci69z2j3U8fY8e4trm4y4vsCiWEAQibUL6vUpNBe",
  "key13": "2V2eRUxpKMXq1Vb7fG6GqkfLLXH8BjUApYFFXKtDwNGuBTkBUMY8zEP3qk2NhuYr25aGPoUPuC8dmj3mtyUMN61v",
  "key14": "jMeGgUFytVmEGKNjxmc4zNnPLHCGvgp15RzoD6HtEeBwAseTpdZbiKkuENC8ojdGyCYiF9SGq9VbqDqX2aAJX5S",
  "key15": "5Ki55BuZDUq4NtgSiLHBUZbDsHwURcoTw3dd92ikDoDCAQjbwmiuaWZF7io66oRbZuofNoJRUh2pMFZN5UmtCh9M",
  "key16": "2n6UdET1NEsmoHDGmV7ecZ2S1AzUqEVPPSZiVs2bBMgMCcVYiLGWnFayk6C7kb8FAjqX1pjr43MCcCE9Yn9aGyHR",
  "key17": "4ipXw3UnrjM9HhrLQFQwLwqxCGvwqSBNL2qE1bM3wsxpYnTV2aD6CzoDmky2Hzp6vF8L6omWSaYTocUcUG1CuaKF",
  "key18": "2uGoYpPyKkoLaSFo6UdN2EXToZ97ebkNPGt1trisywxkxtyVXHBivakHTnbHxvHf1mwnNMAM3jNE8h7BJYCwe47i",
  "key19": "4o2MWLa9NK5v6xqmsNnXEMUWAvA64j8Kp5J4MUtyvi2NXfFuQ5LAhJPyoi98VuR21SUMTwFNfzTcwrX8QB7ZxjhC",
  "key20": "4mycs9QVEtbgsxLPoDpyvsi1ZJvyMCGMjxrpPMwjSKsaWTy7ab4ebQEsMV98djLZ4oGY6NWG1ZDYec5eTDuTzrb5",
  "key21": "3YhqErt43Zo6t9qN9WQheg8PgSWMUs3C3ACwsZHPV6DFvqh8Zswwpj7S9Vj8SgNZpqJMAZWrjDWqM8CZUEg2cGEt",
  "key22": "4JJspDSXZABFb3gDJpauYfwY9sW3WcvkXCbUm8Uyutfk4dTxgB3zdRQkyzUhBBvC6bR3bU9bdWiheceL6pcTKGv1",
  "key23": "2Pp8YGtvVQFhGegwZFdGLTHwdzVAHNrCcJtmstMEBZ6ouFrkq6sgmmxQXc5J3rNxyYFJ3ou5Fg8tMkQFzSFMAYwx",
  "key24": "5CDSs2pRhwErfXvzLcdDtheChyFkfWR6aPTTWGMsGnyohJoh5GSCRLAA1PdwpvHmNVpqKmx6hmxe5YTT1N5LufiG",
  "key25": "4kF4SXa5BU5V1pSksk2PFenB1aicUchSVdqBVNAVgcwNJBUwNhFXsdd6Ad4MYc2VmLdmaW21rzM9zGUFMwBeHNL2",
  "key26": "3pageimx988dJqcU3oy3gpkKkAX8pHbQmvd2h3PM62ky59PEc7GiieSAhyS4tw23XFJUj9re27kzY4qNTYgEedan",
  "key27": "2CmLSoAP8QZM4ehphB7qXd5RNHjcx5CGzcjM5RZgKTe7KsCK5MbEvVmoVKBfrt7Cqe8pr6DskHnNCDBgySMSPpH5",
  "key28": "5oEm1TbBpnv8ibrxDKrDSTkbY4GA8D9LQdppEw4sLJTzptQaBmErx2ccYUTb5nJY2V1Yb9iBNpXkztRpgv8gXHCi",
  "key29": "5uD2JawGJZUGnoA74GQiT6G5N6BLT2vV1D9Zvb6Ck1uaeT7X5xRZQ4NzvQx4eB6iDKnxw7FgcJGHtu2BE6QrpEDf",
  "key30": "2uNvPnkr1Q64fCtR5VN1LHod3fcXafj7fKqu6oqTkKn4sujgi4xuUZQQJmEgwf8PobB77XNLzfXsc9uMTa3HFEwU",
  "key31": "2cX1cUa95GNC4RDo93PHx4j6LNLwYyGZVcVHf1u4XGWkgpdgEq5Ug2yH31kQnZXH9ZZyZwHnSqMYjVVjQ53poYcD",
  "key32": "21CkDuVTGmqA97cLvCKk8N6vA9eeQySF64aLK9NFMLJ3P3LwHfzb1d4ZAqaD2iKhnbhdiTbPRPim9a52qcvmAuAy",
  "key33": "5NRvEguxLVpmgUaFg5dPuu1kaHJEMUJwJ9cjcJzadFiSRbarq2QCaFMaNxVSSCnRmr4RUo2kGtu47ZmLEWMcj8GV",
  "key34": "fMYZdSQZ7BsdatN4fwCMMvgqN2K6z7BpoKyERCMSSwCAbR1ocjEDFYwLSA9UNoGcjNVPkQ2ik1XraRqi2D3gTeh",
  "key35": "3j31ndmyowcfrirVMgWRDaWAJ2tzEDuYpEYuMhf8r9a2ehNPGpYd8MZ43vhjF8ieXQPp1yi6jYpxdcdzM4xMNQv8",
  "key36": "4mVwimJqD5cZwHAKWEESs2RVRjBosgvTwAPVKF9rg23n2bnQv8KdcnoXE39j5SGi4SWjMxVCWjJta4rJw6d5FX7q"
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
