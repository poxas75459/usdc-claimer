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
    "24KR2zbFpSS1txaW93CwKGnx51wUSb7KrJTK24zKzct4dNuQRH9qBe1LazekQ5GhJnY24KK6DFEHGaxJ1cNZBYq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qToZktAef6eyiANn8JXFCJGPnb5xPrEWCfUM1pQ2DtN4XCuRa4T9dcTuj3BdtkyrkoEaEixWqbxASq7PCAXXu3V",
  "key1": "5DBeSkKHoBNZGFrgz7KCxLN7XYCVEyfdabQTfLDcfrTzcJThM4Wv6zYXW2RYoJNUSSnLbaWs13qKreuPpNKSZyiL",
  "key2": "uBabRYnM5fdqpCjsXEjXdjsCFDEL42KQZQLdN8z6nMLuTCGZohyCKAQetJv6n37m6Bocw3C3u39ZLLPtZe1MFu5",
  "key3": "492SQjEaiT6ucMtQnHqtTpRziCyZJzCM7DQqTGPU6M3E1JrmgVpSUsVi9h87XuwXYEW9Qas7tpL86pBvEp6dNExD",
  "key4": "4pPc3Bcy2cHqc8yNtemWw1SDdXijVhtanPgHjPmkqoW8H9N9pG7kLxaES7PcaWeHyPfhSSkDwYupsjg45dGArGbF",
  "key5": "5JA19461whJFtPyisG1AQs6gpWRpWzCjJz3QvgxD2en2tgzGw6ou8PXcGusmjbwfWnphPPJjWSNidtdNGVGgrxCo",
  "key6": "3HehazBSoihLd7BsnyRqjzQKJRpN6WxnWpqrGxJuQp88x5VUarsG6EtqyXjK4BNwjf8rf3WtBPuDj4VEjaU9RoK4",
  "key7": "5G5YzSX3rjHcDiLRYCsv8fyhSz2DbniL8uAqTvYy7ZaasGBYoFon6Gvt8agtAyaHfCU5cRFk5mgKTH5K4vmPsjuj",
  "key8": "2GeBzqiMW3Mir32wv22RNomgA3UNJ3yM5YV9Zy5EieXqAkAoRngDr5pR6qAKA66uKm7Bae1umPDSqpURP69Gynbq",
  "key9": "2Xj6aKH1xRtMXDhvSAdbKfk2UJNuDjNMViPo4vyk3PYqrU9yx7JzWjFfRpZCDRHZKnQfUb9aPFqerCEHUphQoQi1",
  "key10": "4C91BHqPMLkCcPhkWHoXKGMcp8kbcRMCMbBqJQgHM1SLFvaAs5tPSmqA4BQjTKmnbVAvTRSRP4uZakJM4yhVfEFA",
  "key11": "1YqeGUo5S4zSp2b2XQrg1RZqrCnJvdS1SRzQYb9DtqvvLdFDMu3tToy3Rd1c3K33BzbsQENcCHeSnVczDkJCDac",
  "key12": "ZoAa1Q9PbJA3AFy1mFgsRUTXmtWrE8rEssTA4W69JbDM7iZX7eP2s4iBHoidUrDGwD7owZFZkfc8tsU5VF9z2p6",
  "key13": "4mG4UZjwFxA8WThdtPDTQdu1dJkc5vX5dgL989bZVgP3APUanbSBQUNRfvWvc3VFz5iQKaLNBpgahAWprSBfGHeS",
  "key14": "45hV1uqDqsvGUHYoRbz3RwHxKEyaddEbqTrnXwGptuuHaJ34zgmxpH2y5AM3pHxZCfWmC2B1EhJypyHV2uhRisU3",
  "key15": "3qaseXrYjxjmEVUe5vZTrHPqMsF9bYr2ZFHFwQBySQN3zor1HetGtjtwN82X2vwYpQUxiLiEdozFmX2GnwKoujmm",
  "key16": "2F3RKQDTw6dr8Y3SGQqVpaeBdDGdob2QfHxCkP1fPdJwK82ZEVpgsLrWtRGPEcLFSTY5QgJAfc7XhzTykZSTi3eh",
  "key17": "5gcRBE9t7VeFYdtntDNmvZcvfuo46Wsee3XA3KmbzzbCPikf2LrhNrMq9DHySbSAFkzQG4TD71RRbKKzSsCHpjtD",
  "key18": "5vW5TVCaF5oanCrmVXf7CiDAzYn3aZCAAuzpxW47iYQk2BVsZ8QQh5iDDGrxfGM1wqZzjq8PtcTBoW43uAbRgrkw",
  "key19": "5oqmdPe9ieBZ7DcFUxbZ6CWWbgogYGwwMmM8GLZM9VLTzHmwJhpMfSnaKxTdBzPDntWCvXSStJBTCUkacact6nJy",
  "key20": "3MuupKi5Dp6YRqqTzwdKPtpCEAveqpPzNN48yYLQ9AqhNowEuAnrf6pqseietXYEXrV5fAx6FnaqbNmccFcjT6bR",
  "key21": "RMytiQDCsnaZvEmRJ1ND89j7XDCdi28xL7tm4LdsekRNvFt5gUuQvX524rSyQxkVwdhXTukdbN5e8fA4oHxVnvY",
  "key22": "2ap5UqQaoND2eBe7oMj53cA5ke8cSotWgiJvsqAj7ZJ1Zog7WMLuUEM3NfnmWotyYvicKhuxo3ZT6wk5JbGdNL8H",
  "key23": "3E99euibwbMCbwgtim6TSxt75UokpQehPibSs5fF63gxBS3RukaJPTqxZc9dw3eb1NBKEJ97SiNSrr6NT39CWV81",
  "key24": "3paMcMVZxFUZyxZeEsQ4zNiJvkiTi285sDN6kFYt385bor6KNptzJ2MhC2xjK9x3Auo2KEEiXH8judhzTjinkTNP",
  "key25": "2ziiwuBkeGHcYtJjVo5ypmcWJietdWXTYGYJcsaDtgacXHJzDu34vhq1JSzv7QXA7vhbWpuhxgmx2U7mirZzFoYg",
  "key26": "5sdqthvA4ngx6s9nW38MBnACD93Wht8Voa4TxmxrRBdTKCDppUeSniZNQz7cDFX6hYUY6SQyg6CD4MvQBKz1iZcM",
  "key27": "4kKapyPcjLDZwRBTqTYQjwiF6YiUWHN4fLmMQosTyTN5q3dA2kH3igxZfkqU6cCWRAZ9xsqV2aF7LmDQM9vRLACe",
  "key28": "nwTo9MjWziwm9bu5LFneNuM6c6SvBDBtXqvsntJRQuB4DW95zKrS8S9bvoHC9MGZSKcwmYJJGqVZjsem2VvNreC",
  "key29": "2UVorCUPGMV997ma4JehUp44ZbZFTazewZ885LESocJoRQaJ7gt6AETXNtQYES3WVsSSjrb3Yt8tLFBkUBFp1EMF",
  "key30": "5UUQUW5QvWPqfBHMcCa3pxEBtayyhhnMBM9vux6khj45p53wEP3mtVPEjFBEd7ghjdTFaPEZQCzs9NjTJy6Qzduz",
  "key31": "3pce5Z1Eyv2ySzHDaKs72HVac3QtCJXTF3QfrHWTv5cZB8KNqPzWYRsY2uaZE5G1Jt1tnQFFxFmuvu5nfpNWcnSc",
  "key32": "BJZy5jBek7bQD9Vos5ibrJfXuYT3MaeYryWcdFy2e6cYvW1LzAGEQNPfkCHjWf5Vx94Xu1yd4mA3QnDVNEKrcXP",
  "key33": "4vg4YQ7sQAqVb1qyTiRKxiHBKAgAJ8nVpVmXVzSzNeqJw3ZcvEpLfKZyDaQRov7LNCsFBGLUU3bALopUQHru4fFp"
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
