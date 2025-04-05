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
    "67FJw9PKkZjFRnVHc6DHJ4y4PRV4Xi3WoP5dDSZB47RHFwJ9tMDrYWSa2b8EW5aMrKo3LhRfYS3Rgj2x9HLvd41j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoG2ExvnReWQDmWzqFjQAMMG6WK48wDZaLuHmq8UU52yTeCLbJcb6v5eA6agLK2fXQ5uxknhKkVmVq5BUye3hBG",
  "key1": "63kZNxexGKhzqXt6rxN8gCC3weXjyQCAAFRRHgMocVSeGXaWjrhvwfWryG6p7jSwNRecCFYTAagR2m7rSJgPNRcy",
  "key2": "4WAFo42Z9tG5kn4F1KtqF83BP5uPEaxMPLU5BXtTrcTQH7wkgRnGpv5jLs2tBw62dW8mc3HThmRVGy6rFdiTxX67",
  "key3": "XUMRGia3VaLfWx696YBs7SHF6oEZth1CGJ2Kp5QZDL6vtjqHCu6hdA8Lkz91SWYPjivRQAum1AVmLa4Uvs3XM6V",
  "key4": "5LTFju8zZKcfKbfqXLNcpbWo1ob592KQ4LJJpFyFgzTdui9oL9L6bgsRjTdcRGQX11JjRFnEjBhdKKnsxQJ9C5xs",
  "key5": "3FjNSRmtpidymxCaNaj4KgkkAoPbXwSG3RL8nj6DoNK9LDNxE6XhXhcUQF15jgFTS5P1QSyb1jyR8h5wCHPrzz1r",
  "key6": "5aKtAddD3PH6957cdtCUDrXLszqjXthJP3ECXwGS9bA4H9QMnyXiuxVo3wKHfHVCCz1Q2JCW4Nf8rNvHAg9pJFDX",
  "key7": "3T51YmQ3BA3XuGtT4MzMtdKJNwf9kTTroxPDPC42oNHDEPoLmmbgjBK5zcdeA5Fau8Pm3tJ3kuVXMTLTT8JsuDmH",
  "key8": "2cgFyiPQg4oPfHkP1zzhy4qE3WXTUsPzWaEoWPcGsFWBFmip1MSDHDdNo6eBqmXW1kDNvCP2ne2UT8SCQEap9gPZ",
  "key9": "3WiXuAtNrCGddv1SQppm9hZE3QcrGqgyk9En5ZxAGVH2QUHTdSN1TwW7QLdTMMY9mTyVdrs1cLSb57dHXRGXJNVJ",
  "key10": "3Pk4aeKJYeE9d4EbQimpUeXeahd9MCgGUjHLL4RBMWZ7ySbSVsDgPbbKkXV1mpqgTWoExFHnt4ApjMGvchjiFs88",
  "key11": "MRCbLMURnBDuSLUGquKTEr7MQYbytuD6z7jR1R5yFasvsnBLNDYNxg5JjBDC3E1PGKNEP7PUpaA7nuCXpeMBaoW",
  "key12": "NYjkbggkTkUoCfD2STXjMqdz5B92wTsPJeiF1QCsPnBL4of7KxPSe6e9f6m33wEW8ZPryhmtxRuKHmBggWPd44r",
  "key13": "4zrakkMve8VcVrwFaRsTDNezmN3JU8hpFjLreaMhnD8mN1ubrWVHX4XQUjTqeTUJ8nfehRNX87qUrotcdoyoiJsT",
  "key14": "RHb8orNe13Sg2B45j7CfEYjabL1MnQNW2CjDDZQDth2G3CebQpuuxwUjiHuZGqcJ7zXSR4d64dqRmQH3HdCKCdR",
  "key15": "434yH22AAgvs8XBbiv55Xy4h8oav7JyEDFpeEePgSFEijvSWjkCQw3sMdFxTUHtq7xQEECiVwRfG9MBzCMDzS16h",
  "key16": "52eMM5kYGtgH4ox7w7Hwxo2BgU1R8gpaQsgYWNEUcKuwPgpf4qmY8v9svTuALFbrcGapQEUaxqViuTT1TNusgPR9",
  "key17": "4QsjnAjucC9LQNFNHWC82AwppdQYSEQavEKvboLTdYAK9QEXSEEZtYzUoBSQZnEDvqsU9epCp7Go1HKMLJZfVYJd",
  "key18": "4Miyf163KQvJ2T9h8GRAMKifz7F3SHP5iCEqGVo3sa3JrfcUAEUT9Kvfws2xrhvpWyFoG2NRme2erxPWZ5BkH3d9",
  "key19": "3h4B9ZZYUt5zwGWP45EZEyficf3wYt3rhZfgaJLotNF5JA4byfXd7ApyJGRn7ukBp9muo3bAvf5JVxubg1WmF6x1",
  "key20": "2MJjpcyKkwothXFtY6E2cSj6kfEBGzgsdBrJidTw3hVB24BC6fWELHSrznKmx6rhxtUygYAXoNYgpEYGZ2RGQ1BF",
  "key21": "3NpFRUvPugcZZ5ddZWdPcFwKMiPdga1Ge7PumJMHMwFZ63FXPasMAs3J1JB7iexphfny6FoxDngU4xGmnie2fWid",
  "key22": "5v43gD9tKT2pMWfCA3mDf3TFQQiiWJpbNViSDdbPGgej99SEzWquZzBHFnVvbfiZVX14FymCMgpj1sFbyKAbsaQA",
  "key23": "4VCgc297ungxMAsbBv32zhbyuVXz1QZyMsvYdkMWCixi1wArzfpwhMBcrNSA2ekbuuU6SpGqX6R6CvxvP347tNH4",
  "key24": "4EiLnJHEKkK7FYSSCgkARRNKpExZnBczDuEtNZ15vyTpgEy8oHqU5y7BRqRivNjMS6mgnuTGs24gBbAdEGyPSsiX",
  "key25": "5TEFopp5GXRj7yLtQza4ojv7Zryi1svLkgEpCR1cxnqEj1duUTjsR8UVV8zmvk7peUdgwWkCW9fG3zk1zm1XD77n",
  "key26": "3sdCdvswKoDnFvSJPZ76eXxzkcZAnbWfUcQkCVofYE5YqnAA6MW7D3X1AMiCetUMpxWmcHqGNwpKjF8EzHK3krym",
  "key27": "3EsJQKRUAUgZgJZAe4Eh8Se5ca6v7wXGi8etStyeVthpQEa6EwWD7xyjxYniehULoEeEnDR7ciodxkGrrHSmuk74",
  "key28": "43mspurvBUMevyZ4SReRTtzRobXDD44XL2vzDphFsvhXb91KJUuuTw4wcJivVn3hT7VJ38HapGUkR4VEYuVLbG2q",
  "key29": "2UmtzVtAUbyXdsGid9dFn7GigacNHZ8a2U5iDN2UseyvSVu4up8Kmsd1vxbe7BTv1BLUEWLwArtDKE5tgLcceQrx",
  "key30": "sZ6cmpo7SMbdVGwfui8AuWMVba9qYvmPMnBsfDgjouB2ZbkzDVGKu3N2zjTj4Px5BjkLUs6L4o6U2sHm5AMd7WU",
  "key31": "5TmA7iNwLGcwW76wrvN6AC59LcTfETig1sMFyCT2rNcfxFPK5jpYRQwa1RmD3rxE3ihZrH1P6395fboVJveoNQVk",
  "key32": "4wimCfNnPQBqMUdRDNke16CuF8jEeWnLsaBRFYntaUhp81njzu41yfwGQmQz2PxLotd2fjnivxtBx5rbRidjteXY",
  "key33": "4YztTL8mAsAedvpzW9Dov3UcEHCvEmo5fjFgwUxsbimX7ZkxEx57uUcBJhzEPop2NmWp2KmC9azTnkQiZfGSTFV5",
  "key34": "4C4f69xa2RhCc3FAbe5UQvBx7aASMKAT2J1CX1y6RaJSAVXYALJ2fuFnqZrVuXmeBZ8maBKgmbQSXcoxPFbsz94d",
  "key35": "52hJfV2qBYP4Xb1tMyVdzSKqiD5kKgeggThWhfuVoNNUGuCvG1eETTwSVK9faSBFBRpH1aMoMTwPT8YDFwx1eg6D"
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
