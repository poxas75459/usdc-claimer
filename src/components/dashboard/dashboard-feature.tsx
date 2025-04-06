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
    "2a4iPay4UjePKmTbhbRAmW6GxMzsfEpkEze8QxF4SZnRtLBcnAWP6DFhWujG7XpZBc91SuERmD2vRkh7fQHDgdue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWb1s6NN7ogf8xf2fjRoWbYjJZ53q7hwVR65sncHK2zodbHupbaSgBYDqgvdHKfNXNSDhmvaaX7BXvxW6aoDanV",
  "key1": "4ZNUXp2rAo6HybXkvcUh9P38AvxpmfEvbYcrQj99wLkhCgbg9kvnctGizyBYUFVebcivvNpV4hJi7JkGz6mjLtik",
  "key2": "4Wj8S1fSaUGpT8Y4vMevcSirNgrdfrM39YkdTNEhMc1vL9e247yia2282APAikXvSN9fXQEpyis7pAZ6Hx1kHUPV",
  "key3": "3rzfVLkHMJwFrxUKBHKzePASBtmyxgvAZi77wsXPXCFGV5hTTaWyzLHHq9XFNUGpYceFwYqTkiUM6jEcjxffEQ1d",
  "key4": "Qs3wgYg8EADD5UstXxNgKSAUPKd3YnmT62rZdzRnSC2yTcN21brw7WBZSfiu6xNhQHCvvh3DXM1LygcEANj9dDf",
  "key5": "4KPjmKGanpa22k7D5czuBPprfRW1FGmpqKXSdzqP3cEpy8WrHC1v38uutyp36E3C7D7fddK881AkS3hT91zW6GS",
  "key6": "4bPXqiQ3cMbPENP66LpTMcA8C7o7ECjUexsb2kAgodRf9Tta2HH4riGZ6vyjZxwUK1Z4Hp2L2giMts3V6znLE3uE",
  "key7": "2EMTT37phtWXu7HuGLU3L7jgaP6vr7H9qYtN9oGuUsapQ3xuYWonegD4BpCx7VyF16AAHM2dxHrjEZeuF4tQrZhg",
  "key8": "2BLaD4xqAWFjCSxFaJsdji4K9N4poWxNB6ZXq27PJwDPCToAscTB6auxaNaZjt36d1J2q4swNUiadbp5tNb1sL7W",
  "key9": "2soTbfr8f61zg4rEeNMxqZh4Ay338wTvsL6puhTeRqpRNXeeJZEcYsW9W4JYabPYRVYem3C571i81s9GYD15zUwR",
  "key10": "2VvC51CZioXoPtnxf5G4oTQ3kLZBaVbY7ouktQ4eqtNS3Q5kZPoeq4pn8pBnYsNjc3VHqtQJjSd24iy81ECuPhN7",
  "key11": "4DdKbVyUBYqY8vDN3cMEBUNa7NcjTSTug3nzW9FF6apQAWQFLRsnsrgWsTzLJ6DG8d9qUx5wo9CSix7oEuTw2BoF",
  "key12": "3TfKCT19kPS4MKBKQPvJJHsowmoiR1YahQQW5sDYhg4qdtg4nsAkdFTiLskK1SzHt9Ns47uuj8js9T2qyhQ48nyT",
  "key13": "62e4GYvpH7gba1vnKmA83qPBLGfry9VcoJVH1zoo8A7ihHad7Bk2ixMfBCxCM8SYszgnAvuj8we9A4NaEaZJSMuF",
  "key14": "39yybKV8ipVQzDZrpFXZrDurzvnjbBoAD9ojjh8AavyEqU4n6Ns4YDbZ8SvemZahyG8GBMbzDUqZ7frbtVHN2eH9",
  "key15": "2e4buEm7sbwFhDFVdsvFxpYPzYF6VaXZwzmFVVFnxBLL2FBKFMataQEjpZ54bcyzcJfenwwnzXidQ3HKx86mTog2",
  "key16": "5Ye1BpJY1enPBEnhrEMwzYTzo8eC673JeGHbHc8EPqKwzeVjknPDfyzK9GGg3ra564GDZQo6xLRjufyHUJKwMEvz",
  "key17": "32feHYWNi3KavoTJgfMqw1vEnwyohwTB45JrZ3VzDCXezA1eCxdUbLn32yp68QLEyWoiJbb5fndGMJozNBMc4tbt",
  "key18": "2nHv9ynsdJkwuew1QHdcqvmMdvK8R7D3BP9Kk39QRPV1SMKmC1WoPsPitMGSppAGMaA7pE96CFHdJ2eu1MtFybiP",
  "key19": "P2phvJoyHcguZ5bBBacp7jN5r67n2RpbMyX9V6rxEFR678dmu9PP7b9gqqEoXEu3K7cTB3BBcMc29CNnsarfypf",
  "key20": "4rMiy3QG7VsWN4sGFgk6MkMJN2oQgWtW2qUfnRjSHFQAwuB2ytgDa9G14ctAVxnvwTaTJpYhnCeBiGswGGNjvx4Y",
  "key21": "ZCGXmctufv18ry2zfuPsnRCE6jowCkKiqWnFFSaFvbLQX7wv3M8htZZ9Wq5xgPkWKi9K6GthMT4ddFW1AcXzzK6",
  "key22": "4EpxmJFBpnDSMd5JmBBfAjaXP1DpP19hDYakuykEm6GNMzJkmozM42GdN2UHUsB37iJmHVv1UvEHhWcZyym4RwZf",
  "key23": "3FMkkpW3RiS5CnEE6S3msuMEywrNj5QLv55nD4Hn2sz5rcivPn5xs6pmRAQNNt8n7L3C4TYViquv9s9vRh6PJoEK",
  "key24": "2JpkhBC2qacfx5fGeX3jjN6pSuw2sT6ymL9G1dYSQkJwspJXEjJTJu59ftVEmg89N9mmNkh4XsMSiJrw96YpCN5B",
  "key25": "2S34VUSdWpfHFUEDz6ESEgewjSrinwhLiVcKRt4Gvf33RznMREjJ1E3YWw34JFmQNdwYMPNPMLVHpLdZ93ESMiGc",
  "key26": "2Y2fTa8QJ3tcjokG6WsRumkufKJCtStMfs67nzXfvoTAaLQi3PiYLUZbEzVLuAESATjn2f4yDuVUdKq5yFes87ba",
  "key27": "43vQCmozsTtmPBB2u7rSmY235r2beCak1feAozn9PkWyWLvuqT4XZjsfpwk7J88QdHSQgALw7hg5ZfuJAk68rUgE",
  "key28": "4eBzwr1S1idKdeFph89mDpTL4oQHrcwHUeXgaANSBtkhVnL35Y9PXUsm7nwSPLt2iicWha2ZxKS22icom2VDHQeQ",
  "key29": "3CNRZagBRE8s3m1GX1wjMgA1BHtjEVHF5czJjkuwEAh5wgeRw3oVrfKuE5MpBguXJfCpkSabAFJwwmmnEaKZMC1f",
  "key30": "5SQ7uBQvFe5qWxWYby2HSfr4b1QJ6CqDEs7kjPgMBUUFkDEBCKrz5FRHcd9ukygbSbU9rE4gCBYTAEa6grpgCvUV",
  "key31": "3cfJLx5Bgqq3QGR3bJ8pEcexQiGrNyowerPEEpWVbSkPTJZFw77yj3mEw33r3wiVh28MZDnhDTwhonJEbQGqSTTu",
  "key32": "3a72BxSXHm6WucBg7d2DB7FU7ySgzT3DcjBnjkQFZBhpvC2d1VuEHsjWo8RShwu1LjxCiX3SUBKpJ6zXuQ41w6X5",
  "key33": "2knVo2PiZGoR13LjjfhofMDeABbZ24zRgfiNrMbpKMJJeFGgBFoBJ8a1EEpuP7nUvr28sWNMYzHnc5mqZQwVmuiB",
  "key34": "YQar4QQsJ7MSrs3rJuuwdvv5E9Q82BcNKMXTJmVVpSaLWSP3URAGyjwidhD2Z595ZsPU9TWFBtEZiyL7ooAHFFW",
  "key35": "3JNzpGoNZoCrkAQJjhGCdDEuRP7rPpJbKYu5QPJfMTRn5zpctyg1Bio5afR8LBGRsVRucnc2k9YwCTBPiUJE2qe5",
  "key36": "5z82ZvFHi19X4TiSsGWiVzyS8HL4CBT7gcpt5xMHCvX2b8wqVSq7R17mPepX43xQpAhZrJ35JM4KXf3R9jZoxgbv",
  "key37": "4fi7JgqzNDmEPsVLTobgnEzFgxDcMQpRE1CrQnMPCetmK9RYu98b8x4gMzZhwXAkiMZvhGFpyXsfqdWNcyZMgGC9",
  "key38": "3wpXEDBjLSc5tvVH4XPdhhCp8gvnCT2s44KXk8mBFKqWEUq5DnJ2QBBAEnRun6mepNJb2zW1kTYzuTqnGJsR5J1n",
  "key39": "5XWkDLzZV6TtdpWjEyKdhbzfNyEWXbXqALLZAAMHbbziKKGhYhbDgXZizKnzLNZvWGe3NEqjW8p2RYRhJ6j7crii",
  "key40": "AJzfJbw7QsntzhQXRThARhcLrj7vqFn9rZJMVUPeys9AtvWQe5gojnEgwBLB8LSi4tR11F8icTWd43AVKnkhTXb",
  "key41": "3MQBcjZKjsDa7iQWTjME8nALdY7dor6MAGCCx2fsYdryd4vGRdMQg5T7jKiTnG7jMpiaNZUKtRpogHj6iYjFADkM",
  "key42": "82qGAiVkygeoGqnkNHYM9wyhQxcqq3m5XCUTLPrsHoZ4RTWB3TkKtdTHNjePcNZdvoDkvCLH9AC3T7f6jFrY41v",
  "key43": "5KJuDXv832KspDMrdyQAKtm3hdkFPeLx5r3atmrjoJLmyjeEppHXcn3Zy6wmBrLrSLiVrJrLRkd9vwzyurnRA5YS",
  "key44": "5idhEU9g5989AoXmKDyB34aBy7Fad6ifARJu8r3zCHRJ8z3WuWCTresdzuVXwgpgpmvDSUkLB16vpcM6PQppdmPk"
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
