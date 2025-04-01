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
    "2QCkM1FQdHyUHTJq5X27oMEjXR8pmaU7wCcaWJwNo7No2mBKsfrXce4sJbqzGgKRN63szbiDhKw7C1T9oK4Dygu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hf7eYdXxQLX7Tvc4d1ykSywxdnsGXfX6aVGVWmUpLgZswGyXT2BAw9YWByTVkxqKKHTxUAbpmATdgYdNUmKCD9W",
  "key1": "5hSMK1RcZchmKmQxYwJQdabVffC73rZWamJJToR4Ay8GPT518zFpwVBsbS1m5L5wsABuHxpAjkMPeE98g5EZcP3y",
  "key2": "3iP8MCBKhtStEHQv5o2M8fipDARD3tngr1zFrZ3mGFixzP6RW5JBnR226d1PjXGrmZLKH4z8as3ts11Crz4NMjM1",
  "key3": "5SSdUBu7PGAcNEggP5F7HBsoq5VmDMicB1dtJQsnJsrYzATAkRVY4p4XqT9EDrZzradSqEMP3thWQ1ehUBcHdzUw",
  "key4": "3At7FshdWwCtQcfffpxSK9dWgnhjZDwqWEAdwY48xDf2oXd6E3vVYPWoHDs1HQdYNce9YeBMeMhCbUa2Zn6BEpy5",
  "key5": "3ML7DPzMZWnSTHfSeELwAsFREN4oJMj1E7FNQUxuuNFUSATQiaXD9Xf7QB23fe8jugXN8iFPtB5JAL5PcFCKpUiS",
  "key6": "Vu7yZTK8UbhcixHmFvAoJA28yEuhaYwbjvaoKGXy422FVPoC199P64LZrGSy9GQo68JqPY7LSufyi6gVEarVmSf",
  "key7": "N6w4XTTbzPu4u7ARq7dTABiPNq7yLCYB238xcXPwANMY6PH442KUpMvej8HpYTSazumLqoKMQ3Rfr91jPMSAbjX",
  "key8": "5fKjszvpNsymeXT8rxv46xKQ8ghCRbKA1zaNkJoQ5f7gKrwsZfwVvmcwxTwEoLe6x7LcaoEgFjSa5o2DS6g6YX5r",
  "key9": "3gVGJwTiBGXypeMGWimYw9SHdpnqTiG3xGEnpoHFnP9Sr7Z1rbucRVmDRgrmp3WTK5JUWgokiFne2kQ9sCrvBm8C",
  "key10": "3JXuiFHqmD3zKwyAFYQ9dQNCzN7DwnmeATeAGvDdVuanv6omhe66JqeePv3sizpKoHe9tWp8QoRVmLCHhnmAmrqw",
  "key11": "3FpSBTsfvTx97RDFZ8zZmA6RWLjVpzQ5W3JC7Wv7jPhpwLXyE3cY1e6jPfLKBpobSTx8PtUSrv1wNzAT464QyVXe",
  "key12": "5KQePidRemW2zGi2V4pszWXEq2WxzZFoQL4Kb8Duk99CRyBGKzBi2GC2TrUuYRxU7Hk3WRs8HdiKTVeSRC8ZLLPC",
  "key13": "BpfgYbgTBmVS3XHhL1ptHs6uS3jgPTTcER9uGp1QSZDLXzeoPYzx7Vgkpp2vkAGGTaWDDnteHTR2Y96MP42R7iQ",
  "key14": "2MP6bCk5q2awXtY8gfT7NhHBwCZtYpP9J4REXsDyQp8iNtRu1WFiaaujQVYLMg3N8AFZCymU5gcMzcjfk9tAZdPr",
  "key15": "5bPcUC5XZ1PtA4bTYqEHZ1HTuuXcVnaP36UK6bgEGjtRBnmh5KwiKoD6tp5kfp5NmJpgfNCns7dp7UFiZrt3eJDP",
  "key16": "snbw1FBTZaaSiunEPmQcNfc5GRVyFMwF81QCpmtEWZcgqLzKyPpB2ZYUN6WEvKJYLwf4FD65KTCJioxrsiwQ3cS",
  "key17": "m2souqJUpHf2SXSxnv34mMDVjeeDvYxwsGAVRdGrSXcCb74yPLX1De4F8S89GDXWeSAkC9Ncdt2aVayapPFp8p8",
  "key18": "4bUgxipS6bcmXGjaYMua2VuuXy9JGm5UksjJaMhcxPHejciY96NdgPmnPzxUU3fcGHpvKHL1WABB3e3yspogCn9L",
  "key19": "S6C1b9DD4CzJSztKufsYTzMsUBW5Mq6uMBfZRjn88hdNoAnASiF88GRA8dB9pp78jHUuxYzMJwRQfDQVddftwZo",
  "key20": "2VXHdtNH28yvmeXLK8Ss7sKVBtnXug4BYRaZh3FhuE39DAitRrpUwmz5XvUYDTvyyC7tRdULNrggchnVtK9JwngR",
  "key21": "5GBekns36C4MW4JAMyMyuKay9SXGhhTb8wVxR7fQ7FEbZb6GNLgD5EhmV95L8n1MkP5QH3NbbyrUDiQwywMoyxYH",
  "key22": "8TS8deLPcePzAzNj9jjhYjaFY97gaEz6dvYRSvngjKeKEVDC8UCpJqZ21QwmCte5SSmzpX3n1orY931CUq1E5GV",
  "key23": "14Jvp9cjnvPctPMdXkSXRSTiojYeYsUfz2kn6MEZuuKYs8pj1EHmHd1QfhYsCkafVGEcjcUH6gQjEUQJWePmprR",
  "key24": "4KseKSfGYmyyrUzJ3GPAufs8kPsf28gPu82ceD11akL3JrpvzbVjNPzJjaqEYvqQ66fNq5mCet2ZKCLSnUk34RL5",
  "key25": "5joxxvFqALm8euztFbSKbTeHVKXGbKvsEpXWDiNXHzasnGZivtYRnpYECtbYxWnvxAR9Drhj9pbnwEE6eEyMqYBT",
  "key26": "3CdK69DfXL9TeXcHitVjEgWvFUhQH4rfiAPwYvXsuxntsG7ESWonwdehtJbQJCWpP7MbKeYGQTEKrfq7CMHWMmiZ",
  "key27": "4qjJEzTXhgpbnCiyifrmC9UmvKbr4hw4fNZ4JDBkBxry5XibTTq8NpGVy4jHKyBm4RjfbcWAtyN8mSB6ib6FzZqW",
  "key28": "5SfWXtjkbRdx62SbhPy4BUcU5J9ujFMdpfWHMogdSpi78YGcc9VKsAJSU65PEY49moiKNsE9hH8XvbwLSrGT3hDW",
  "key29": "3wQJDHXYhKRTjym8SdGNDus8tMia1jnSXeBy9mh7YMG4TX2kFexPvA9ykVZkhKBbmCyKWTX221vgNJb7sRdpG1it",
  "key30": "5cnqrsBY8MCgUtkbhArZBNH9f1FuB35FeX8whboeLx89TfrWtddwzkpFo1aEerWPk5MfbssffiPh6Wsv7GdAxVU5",
  "key31": "2Tjj6dbinuFQXWqQMETXys6GB2vrwM25xaNgKoCjjgwc5DoWPFPRjCBxtf7jB6r6qPAhyLCtnjMT6Q7WSvQwHV3F",
  "key32": "4bo2mWwxvPryzwKweojQqSK9Bmg31PdifRCs9CSNm3tGzWypqnZJtrhk1XzSoqbNGvd1ZuSMWgh6RYz1DwLPf4e",
  "key33": "4icWqPAZk33uxYC4FPg4BK7iMMXnAHdewHd3zhySpY2F6h5AHuv8SNunrWE1TsUwaZYxxRBhmBthLBUdLBLNmZHg",
  "key34": "4hitze4WdKUuhr4WpFHeREtMMNbNEAcSatrKCBpPfaaQzBgrWpLickqxR8q3u9tj9NTAk571Tb7e6eme8TFvL7TD",
  "key35": "F3ExzZ7ywW68pkV7Z8prKZcqX7oqHRLcySTdkJWyrNwR19KR3mHRMMoEst314HWvzi4Q2gapbwSoZq84YqnvCjr",
  "key36": "58ecutxgjmE9FnmvCE8uiTR55DecH9uGxduhW2TSFxEc1fT6rB98nAskNAnTjbwNNHBksbs5P8zjgCr3zJ3LZdcW",
  "key37": "5eHWwgX39E5gqTNKThvcJLGQKem7x4dTJa7k76a1Z8A3DhAJzpVAs16mFY96aKaF14jjdX8qiGMj7DFiFmwJDrdR",
  "key38": "2QemNrbLZUrqAo6yNoTDjhQo1GW7nqyniDYwYPwRotAgvTFx2VDHPNtqnsVCrURUzgCPDKSLfsom3652A8Kp8hJf",
  "key39": "4YzLAJkrguSyFfSvZxfNzGYUL9m9nzimW6NQQHqrvsLBMpkmB3xDaR3iM1kx92wmzNLhrpe9Hu3uKZszx5chERMf",
  "key40": "5RCxyV25Di2KXyH82ErWwQsvtnKvsQtv4bJ8JDyL3C4NGTakkoiN2XP93fGGvNxAfqwfYDNUGtehmJMGGDSZj65L"
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
