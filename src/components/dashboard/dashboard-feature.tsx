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
    "LYVnkrBkymtJJcwCEMsGWrDJkqA1HswWDYzShPzxJpx8ERXSy8xXmyUjvhztpZZbdkG7FHTqkECDop2kKCdJerD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fa48zUcAGr8y1eFshmA7np4XjRrthEYdFSD9kezc2MogkAdGv2huJxaJi16HDDoQFNe1V1KvK4ohkP29eyeGYGB",
  "key1": "5S8cuzoFwyCRqouY3CAhY8g7kUNRvVS7LGjfyzT9di7Z8DzwNBeACyfpThxzXuQ3eC7WiN5PTcEbHgEBxgNZf2BN",
  "key2": "2hhVRHWywhi1KpZm4Yvv98wJvqSt1QrUmCZmFrdW3tQSH5kYq1Vumo27xi3RnWsoUGf7gZFEbZS8S511Hjb9TJ3r",
  "key3": "QuoT4Va8XEEuxZwhP9AzZ81Lia7QkmivoTzeFESnjg3sNbnFaXRgTV1y7Z9rNBA255gtCaXGbodpGt32jW7ZbPg",
  "key4": "3kXjC9dVnM2UWhuqDHX917nbwVERkYS39GqikP6BbEXs4G9sWSBUZo6w5g3QwpogNf3LMnwkkd2ykng9LxL7JYAt",
  "key5": "aiDj8heAV4fRmiQhojWQM5fVCN5JEQht7XDrABbgMU7SVKfqhZyT7WS8FRV4PSmE4aadTfBgUAP4pDkg7dX8GKi",
  "key6": "3k29YNvdiqHUsiVNt7F4aYFyp3ktMaEiEiJ6Y4FcU8hfU9cG7gZFzEUshFuDtww6xQKoxibKXYYQi1jT3uEFwnoE",
  "key7": "2WwpSdZcNz3yYdEqChs4S1Urxjs7515ob7bJjbWeR9qRoPFvrF82EmXXZCwB4z458dV8xFggis1QQEMn6cHu2QkD",
  "key8": "Trhvpsb33AxNKsaSCchvLPVYQwTwjZu1CgZE5tdEamRu5feefAqhPZTqLs6URDUGzh3JQNPGynecN1M4fARB7Mu",
  "key9": "24PVpiBDmfXkciQ1rNw2PnEUarrUumK13BQF1WRwnThmgBDSrNMiAmwu3TG1K4ZhE2HvSYmsgDWaNVXog9MbB1Yx",
  "key10": "4sR1q9vS5tSEShNSDPgHLY2dymrGRi8xgYdHR2m3v8CCmttALiaP1Z8pf1UDFhiMZHGpQBQvebQiuJGKNP5Skvs6",
  "key11": "4xkYbFY9rXugwbSLsk2z61xiRnF55GAmCXiQxN5JbaqGEiHZAn8c2kk6gXtMo3TCx7V1EPAivdLyENMWokNqN4p6",
  "key12": "5KQ4muSfqeaAWBNBbPyScfmyZ9wY6eJ4sEVDuz47ACDAAY4vjkNoL1Z3PmWVL5kWaibjZBYX4YjWSSB6TTY1VjUE",
  "key13": "4S3W8f1ZxXyk9VXYf3LPQULf3LGb9dMiJmjhYSoMaoZ1nQZMBqX2kGn3Mj4o5vt4Ypjk49wrnfhgVSTnDR9GSgdC",
  "key14": "q2L98etHfposj5jPYknVwuikt1RSjJCATJ7pCXr9UfiZmU2dMUEiwM5R953BcfjjMJrDpDe7mUWXQB9sNqFRdj1",
  "key15": "3W23rvUXbGvmnHLX6mdBU5JLKUKMFcFx48gCW7EvL9izRXy5wK6kszRzpea6JixoHi8w8tQKCLNBA2UGxuaPq3BQ",
  "key16": "4SeZ6usn3vR9kbgSLoUDsZp5rg5JY2cVWSrxJq7hMxh5H3HLnsGXsps6K3z9TguqeYqjR8WMUp1q4eBnAKpDMzYi",
  "key17": "xJKpEpdGtoN893cBoA93MwcHDXDUvfrtuq4Ke2zQ49siy1h2gTUae9Gr7PxyU4CoJoZG3gbJUP8HpURRZZ5Keva",
  "key18": "5aoi6pdo8S67nspohR2EVW8fsHLCpr5i2dXm7H6QJNBvpKZm8NU4uUXCs1znnsnxN1zfkWFXuUsDMprPe1ivYugW",
  "key19": "4RXPoqcEvWzakEyiyQhQRpr2MxbyByaWY98MFgjir1EjBH9Ur1GgJL1B7c3gtAvV3qZAXkFnJ9NPZsTCDN39NhVh",
  "key20": "fjGuRpnLj4jL78iEiZK7Z6Rhik5VPi198baMsy5TC5XGkdYkhaowCVJUQh2bPHK21JBevAVRCsdceuY8AJ6Mmbo",
  "key21": "4u6MpVHKZsuGgoyHpy718X3ddHVcejPW1FF7qmEmj5ZHutcSSx99Pw7e4ZbVpPKp18UTZ9hi8M3dHpYk7XSBXvMt",
  "key22": "4gwaEnLcRdGuyMXdKTJtgY3ijKX76mwatGNVMhdz4SvipJa5Sp45r32u8Q4JLGkkKVbGwvwi6owDRR2x4qZgf1WP",
  "key23": "2dtyrQFiWrqh1mqpQnsXf3BNmN85ZgHHjAjn93H3oYSnoZApmUNUiNw6aYPm9dQQ658cr81MR4VrRr1nZToD9isM",
  "key24": "5gdFYbYaFXLS5ivihyzxn13VHddjmqkeAAac3SLJh5HtFCeCFRsbA535DGSMcbLL1LiRqdxFzstbDdEf3AWGMPwU",
  "key25": "2Ju8SB6sa98t9LzfintweqJyGniHtmHX6mb4w7DHz95eQgDDGECcWvmFBpkfWfgYhruBNUEMFGchbrbZ9Bf4fUsz",
  "key26": "31aPG4vb3jsuw4qCr6XPeVPbFaxMhN8TkeEXnLy5ALaXsvBhVhCquJxpQVwAmHeBmoQWWEYpkABvCr9iDWaeYdE7",
  "key27": "4Py8rvN8SV51SExpyoj5HDwBrcKhufmqePPM7hGrhFjjLducFvv6gZ8GgZSbB1aXeMXiZThxBqP9Qk1zUaonApLM",
  "key28": "yjLgzZvEA56bUF2cbif6sHwQxF28WMiS1AZLEySSGoBPESLvLu54R9EZy4jwb2cQ7gqXKQE1DzH6cPJyDz8JovY",
  "key29": "4uogQg5vvcYPPC3PgaoPJ5QFapsCVLEisM8R3ZQSKfcweRexx4mdjWN84D7pbq7TsK6ZkJQAdoJU7ZWt5wXpfYZ8",
  "key30": "ar7rNPryuHAs1byohBbK9DNcJas4P5hw7FkL4Yu3d3RzjLqZYtCsaxxL59on2bpnSDgzXoAWUma6Xq3hr2voewe",
  "key31": "Eo4A3fuLQWtifLrC15oM2MDrjnBPHxYZWJnvihQV7nTLYvgor2pWTq3iKg7FZ2TfpX1MV4k5WbcHe7c35ukhZdg",
  "key32": "2a87JmGiutYvshrkGYcCN8fWmMNUqsmLme9qDugBoqSJJi8y8BVi6QULcsHuK5LwyBtcxWEpCbFBSSU9Zs5b3VLJ",
  "key33": "5G8NxWKLzMitBAT3Pkwu1gLqZoFG33ras9rPq8MiAVUvhYFZ9erQtVCZChS9LpgpbXLv8XeWRnj5J2qrx9Vkq9FG",
  "key34": "2arZKvWMjuKdeXU88QwpqtxJZF6nfepgnGoVUphV2mAoaisMkCqdQysHDt9LtGiCvAAiF2DhwaEXvyJt3BqzJm1k",
  "key35": "2cL4Nuyha5anVeUPTUa9bLqwfUgQohH7XaoN6MFmNbuiZArbcVWwT755Z4ryKYZLP1JsKvT643QXtk61hmuFuDr8",
  "key36": "3oUfKc9EeZXAAFiFwY79qBeeSB1e8RSssAkBxNsjEJNmSM8DrGfnDFYgnwsugFpHyBcb3TmzLc8AWvMHMJdLBx26",
  "key37": "7yEub7YNZhRV22vbonTGRcm3nzFuY3KDvDBWaQbwDLWtCB4NNUZ3rPcdg9yPAzH3x54X9uCYe6vtpq3auzbLFjn",
  "key38": "32Tn1UUCM4TvwDFrCGh1yCvePciHFcUE1RVCMKnrZKqJbT3QiuM3YGw4H4tMvd1LZf9dXCBqPQdM7LkxiGSSVYuK",
  "key39": "M7KuohynioAo2fQY878T53Cg9KSXehDhFxzzWP3bFXjMrexbt5eSTqESEhCkMK88XWYc9pt5uP6FPH7QijWXaVX",
  "key40": "5wqC8XmzH299FngzAyAB9ALP3dTsfyGsKBr5yoQwEV3yvfLh5CzxsxSDUjncRqFzag34bTYGJ83PSAbALCraRCTi",
  "key41": "cKvwJkLeDcBGH3iYrHN21VPqT9qqYquBV8XM17dkDAGJD8wGQirUj2o14nbDcE2yDPk6vbQYqYXeUX9cYChCHaw"
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
