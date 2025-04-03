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
    "44Q5958gL98TJLHy5kJ6A98DG84CRvuhvCVNAGMf9GdmmsfjF5hqz9haAU2tegQ5UAJJpayXqww9iRBHT2eoc5vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tka4fXLmpzhUTaEebZRWHpbGZNK6Szpv7hiUGair5ZtFqCCrTdTNfuuNf5iL75SrVGg8qxQSE2TbVTkmnDHuBpL",
  "key1": "5dvpxgvyhLAqviYJLuREdcXnSpUJSf1YfCwBPEgLsWTWKugCjSrJgqNvRcrP4w6otuh3nJCtuL6FJjNqHunYwhsy",
  "key2": "4WiQ352GkfhCyhdztkxuqHRmUUyCdhaWHBw1KNu4f3ExUirFkq3WgGVRCZh4N823ZrGkSpVFrWRsVDuFBXzy6TUV",
  "key3": "4GNHUmAcQ4Us1QSs8CTFaZcKxRM5Z62zEshPdEWsproWxGN77hkevy4RqUG7BPHyioWQEfEviWLDsD2Q6bSuXKVM",
  "key4": "63Wb1rhpJHpqPr4cNCy4pi2f2H62yw8YijK4t3rJJP5guLLKrCrB2DdzLTJB1oYHpipYGY9KueiZVfWapMRKc3Sb",
  "key5": "4rarB6DM548BdvFTGHAFgBQj3JTnAPbCZCuGT5MsvpysCnmhBnU5WbbBH4kquyVVUxSxtu9439eJRuxvUVC7BYSC",
  "key6": "4AjNcu6L7RL8P7kTVkfPayrwRzziYREtTZELN9c6S135hpqdAmUG7ngPZhNCErrM82iq2sBxXgGwLUoSwzo4b34Y",
  "key7": "5jjnxLVDfp6AXn1jNNnNLqiqLquccdWwgh7zNBbFmHZZa84P3KtmZRgphRLKCUxw5RT84natpemNdZ79pEhwESLs",
  "key8": "3FjjYVAa9MxDpaqaU7HmAfBAoYs5BqBEtFBxtgiDgeT6s3QQSPTeuuhRASW1Rtp2SF62nWD8h1jeafe3zGEWvaBi",
  "key9": "436eRxdnzqLGtRE1T1A2pWGcD8fSzVjveER6msYgs1kR6FXBk2jMxNQ28r21fbXFzZGvpjHNhMTTHeRb24GzBvG8",
  "key10": "5AA7exM51XmcpTDAofDAGGnZFbfvp9hgiveJwkEvJiwuhMAgGuHuDFz7te7HdFyQTk8hNdgZN1QfdY9aN2RqjtY7",
  "key11": "d1gge8ZBJ17RXDqNL82EfwWP7nvBzkZLX6SH6pCM6SVgEMq8SSVCjFVWnz3aJ1C4FvjgUBnN3nopgLR5J12JMqC",
  "key12": "4WVyopT99vAzgk5E2JWBrNjDR3VmeBEj1pYTPjtUxry9TncB31fGA3nEHMaqVjJQW1TU9zAXfmRb8tSbCJ88yLbZ",
  "key13": "3z1YLXdvnBCgHaHo3pokvdqYasgDzCNpyCeoGXypgtHgVHDG9dj7ibhqBjV5itN7nX6vAX586kRyEX8Ucw5QRwQs",
  "key14": "4tB7MyrQEF9yUPLZQXx36RTFESm9ZWH7d36yz1yW7KqLnyGeQxjQcWmxFtm2EmxVXmxvYZ3UbALkzfSYxZzzTFxT",
  "key15": "5VTk8PUTz1uNh74H7h5qtPauie9qgJnRK1c6ms77LQsL9ykzKjoss8fCbPWbhnmN8AKAcnMgXXEvMVdWTby3d7QP",
  "key16": "3w4ynyVqqB5jR2Wzgw5oCWifFMRatDZ3w5LwysKRerLYboNuM7uQjz5piF4s62TRyzyA3NhiwYrFUeE61kSAne28",
  "key17": "4bo8b4PhC5dn7TPUdWaWM2vS3ZZnmrHBDnBTXmDW8V8D9EBrzH3Sixa88hB1iu4ACae88akh3SbRpD9Tnxo9hjbV",
  "key18": "46iErF72Pw6Qxd7jDESXhq7MJ6JVtkLmyqmKG1nFkvviPVBv4wxzLdPruQwTzMye3DN4rWR1PgpnnzGo1gJPVxhe",
  "key19": "3WfkamenmF4vKNyU4efUxxxQFDCcVA8fJZtvfEDWawASoQ2JHQq7cxxZd794PpH632FBCbwD5BUGzuMwrqPniu4X",
  "key20": "2ELFXg62tkavHGjf43t2aWUJSHG7jQLBrJMvxCVbQBwNyQbJjm8wCqx9Jj1aoNSosQTrAMunKHSzrHWRhecvcTpA",
  "key21": "2rTQys3u7yrF5uThNbXu7kB6dBzxCe21AskK8d231HCBLYgVdfEVX3YGbLwXVsyHentvinD5ioDRQ3bEci5Eh59u",
  "key22": "3tYfSYb8nMWfukMBcTUwxVYTt4HJTwys3JcT6nZte7omAbtje8mXwtRfqtsczyEtj76N253iDEzXY6V1wN96tokp",
  "key23": "3YUSkLok6iP8N2m1MLZeZFo5xWLK8KTxf1VscsjWykC66UQZUg3gkCZuykGbLgohjARTWr4soe5xi1di8MS2fAmv",
  "key24": "4T14tXzSm9WqN19UZsEzmBuu2MF1x81DsqDqnKVXYB3TqENfPM7oke8pmUJQM1rpFd6W2QqzvVQk1DnWwnaviaHY",
  "key25": "4rrUaiF8cjtQjBshCMNhnVai895spEpAFCgV7YX4tfSL2pMhVcm1pSa6KdR2GZmU1V14b6SX7ktZYbcsfcEnfdHe",
  "key26": "5893S6hTV7Hv1NXZMCDpZ4GvbtxtKjFEmZjKF6mgVCqDpR6a46aXAitaET5ucTcrL4D4FRYnqmjKMGkD1obL9efi",
  "key27": "23NdU2EwvTsSpxwbUXg3vG7b6AoQv2BdjisaaNYgKet4BM8scwQ9oPszo8STG6igjmMcedMua3HFsLJke3xnoGiD",
  "key28": "WkSnrMHAiXujg3zNBTpFcYvRWmMLcJS2auS8dMifmuXaR5pFwDzwhrRso5dfP2axeZEJYTTmxrg8GLV44wzPoQt",
  "key29": "57UtC2hKEmjKTpiLcHGdv7KcyfFAcXAT7DNXowm7N2jNxqwSD7tpNbptkBPzhYr8tqskBCqxwwX9CcDKfTqUe7Bv",
  "key30": "2ZWZzoEPwB1AJMYT5ErMbLAGQUtHiboW1iKAGdCuGC5QrEif7J1ZFELQLHzJ6EALkrm2fq9YxE7FKKTvXsQ27ziu",
  "key31": "uFCgFJn4P5xdYmMKgVSJX4vMQvUkk6JHYiofvCRwJ7eEBqtz5TMPisTxTrmreD6rBkpsSwvbhk1UHeerZP9RAcm",
  "key32": "tGKG73h29RW2tPKgc16FdTw6uAYufMV3QPLg2MwxURUj9EfypTq37YTm7esBg1ynqoXjdXZFgaVdx7ySrb7As2Z"
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
