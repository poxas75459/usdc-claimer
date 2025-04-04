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
    "MJ2hmmYab4Bo93wihVnBQWiz72nUfSpiufje21C21kFQ9VJpk1nQDynfyuix4UYLZX4TU3QrjmSa4sKHEdYaxae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZ14sW59yoLkLVM6GFof2pmJztwY3ezJ9F6AGmAkmVjp6FeVDCHLvPX22QYJcEAC5dWPAnm313o3irhqgpfFn5T",
  "key1": "5PeMZGHAY4cK4GGrXicmenozMosNkjkf2hnkD9ABkQSQeaSBDqGE15z3JEYRe7BKC6VTP2ELiyfTymwmDWuMKav7",
  "key2": "3euLfambjTatALPBNhFMbrgnqFdD6kk1ahcA57FeYXKWjCthWwHH3bEPnZURF9KvTJaAhH98EnhqpBKh4AP2psBn",
  "key3": "33cw6krDiLeiV2v44BcQVMwFqkCLS8KFZ65LKWiKARD6zzfxFEdGg7GjPjs5jgcFrJz7FSHztTFG5HfdkUjx3kVj",
  "key4": "WgesM1XQucFPuaPpJHrk9timBhgZnkgigBZk7Wup5fQU7hAApz6DMbXNMCdBzcs4P2zidRPB7uzt4hFBwU92ECB",
  "key5": "59NHmedhnnc6wFotx1pCFQQk7YMQ7aFmbCUGv2HjZcDmo6SaNjixstJ1D5pyF7JfJqxVNHaQkgZ7VVhbcAj2CEXa",
  "key6": "3tCjudqCS4QhshoRvqCq8rhEdjt7oicNbWPiiHyPvFeSngc8TNZxsRJbH5cToRu8e5QDBuR5csKAzogvNMY4ZcLC",
  "key7": "5kkLJyWa5wKxWq39LQzmnPaJjKabC1EPyXGj6zwYkpLA7uARjPZ4X2YSxW1ppzytR3je57L3MQxM7o4rqCjMrZxj",
  "key8": "pb222NEABBQbm32GW6YNFsMdZ6vYGzTc2StnDiRJDY5wwx9id2J5ULckSNsiJKYy2xEhUSbf9ZQuEgw1BAM6J6Z",
  "key9": "jSebA2UPaWXR32rTda3thj1tQpAaxEuu9W6JhkYsJ9kQS1KC5Xwkb2RvTvpR4WuLLFn26YizBGbwmWtChYctFvr",
  "key10": "2wmNoxZmPBajFt1pEWuzPLoyRYk2cCHhSRXN7BTVVNXaRFsYvYFSVCkDH2Ajo5SWVx6aRBuKAS8fdd7HNxetmXTV",
  "key11": "47hKaNaGAtDuoigdsKNmjZJQxr4pWFuMPf74rXu77da7f1K6xkH8J8aGuxHLnBgfS6ppEwD1CoUzDzhyGP8AWE8c",
  "key12": "4vsipiLatfDvf1BsKhU8ULLVrjHCh9tgHwTQTdTB96mQzREr3sJDyLnzp5pA2wAtQWMbE1mWDdV7iPrMQbw7wmKL",
  "key13": "PX5nfX3pp8CNCMarscGBySuoAo8NF62Zz7qYdGMsNRRWZGB5o8ypMcME8VMPmBHnyTS6vrmaesEgRMJpJ4EkPat",
  "key14": "551MrSvfuNHAM4rEm1jvkZEjV2Tou66oUqGjYCGuvYkfdKyUUYPFp7PfXmv2ZBWVfXkvRBmo4WczmmRD2RX6UvAP",
  "key15": "5YQkCBVobBG7DReDT37koGY7vuMxDM3XE1UxsCMdYhpGcKB6fFmyroHXKxKULxZDXHV9nZEwNMcokMemQ5PdfiYK",
  "key16": "FEfsxmvm2xo5P4tSUMEyKypPeGhC83VVqQucCjLoZYRQxJhw31SkmDpLFMpFzeN7hdYkeS5fgwwnY8ixaMt3BPD",
  "key17": "2M9e4wZDo3vPrKyaLgwngXWH6fME6e2D1EByNAu6XgfsE5HC53p3Qujp3zzRtrfkSYoKqDSU2yREH7yBVL8QUmAy",
  "key18": "544A4aiiDuzTEF7piFmcQSt8YZ6Dj88hB79GLWVD3wEHHHwbnDPLzNEqHL6DToavTmW5T8Rjs7qw68SYtF7XJfu7",
  "key19": "4StEg8kVMXnCemBbbnan7qC8iyDHzF4hCRp4svjMBhytKjYR1PqHpnkPvvDB7iWBZP5HRSNQfJjPLwRWMgYaTixS",
  "key20": "4SCiqzD9VV7ojVMGALu8NURQoQkGGoF5BLEvLg3KY14jiNKKjd6ZDpAkojxGGKwFv45gxrPyj1VTbbk3CPLwmXo6",
  "key21": "5aueCjKB9LWk2XKy4yGbcrMSyZgmGCMe53LuFQT5JnXPKZhDd26kEBjcyXu5buQoKP3mg358FXCzoxyPZguZYUFD",
  "key22": "2BypkS3TTeHc9MZYRtJKmHSCWMMnHxhA5X3NNUCAXhsSP8FWRTMWU53WbQGv6FNY2bfVYJ56KDQ2w2MPH2CRekF6",
  "key23": "zc6aAvG72j9HXdmfmVAV7LGn9TXrmL7d4jxeMWF9m5X1MVzvgM29n9U2yB89MR3LzQe365J2EuW1vf3oRvU27Ty",
  "key24": "4E1PwULmNaMVKSDyWH2fDGmK7ngoPP4JKaeD9EZi3SaQ9ZouKu15GeJCxy3ezwKCcVuDJNC8HSs5VNt6UEaC6kuN",
  "key25": "4JamhcBPEjQBZ4yCEgGgGjpqwz1qoTAudwvpSoFx3QGPPYpHRJn63apka2WsjhoA5EakmW3Y6QjTzi93JLqc8Nfg",
  "key26": "3Gpq7SXw92TnPLEsU6dSAeVCQRmXkU613PRfNSxsmQak3Y6ZiicndgpXaHArUZVFPuwFqZyXH4YV8jBpu65m7UpA",
  "key27": "35zNnekW65xpky3t1vveKXGcbg2N8LnWfqLC4n1vZNwsFzg6YKrSQpfjUtzUe9fPL3WyXYMH29EM3A8UHBnUT3R1",
  "key28": "LXYijKN9XGpua2V3APsCXQX43pKXUGZ87v6m8M78nDapbdDTvGLrjJ5poBs8jgR2woN3mNTZ5GJ5a3Js3D8c9dv",
  "key29": "4kuERiagUJwL1hDouFK3uVSxXBadhHMUPDTx33R2fMyLUKatzGduDC2eoD4mK8FyLS8rf4wo1vmzBgJ6Q3kKdAC1",
  "key30": "2DyStAEAqUezwC17s8jE83xtaC6yaJ1AzFSCgKYp3HXTXKbRp6e3W9onE37PR1YVgdqApAvMg9nbgBFcFXnh1naL",
  "key31": "xSh2PfkB1kmSmooEJgJkK1ewAZqh9ERWP5aVfQQNDSmwvPgzieGiv7sELMf9tsPtofMyVucw7Q3dKonK9vuKLhZ",
  "key32": "2KLDS5DLYSxspJjVM9xV8V4hhJhaMpeBUgr4KbUBGYjH3TJcSDVUQkCtzrht37jBUD5PcRPQdxdnMCwgeTzNrgnf",
  "key33": "4MyfjShDjvtZVA9G9XeGgg3qHP1t3BAzfd6em46zoZscqPGT8TC7TK8sU5cAQzbtVQV6ZaeSZ2BbQ97F8tn1gkpa",
  "key34": "5JbPUz4nYMvukoFikDWiJdqZUyN2q33CMJKuJ1x4tDdD1tZ39Q1ShbF1BPaf3a8kdho3mPBP4zKnPyuNmWg2tdpC",
  "key35": "51uCr1iEKe7JZEot1LNyne4NTqu4xuYqnt3XQUGeQgpwu9CFYwx8q3Djk72ug5fXR9Wbydfv1SR2Ks9XSWyhULa6",
  "key36": "4qoTTdmuprEmpRWrPNsjQsdGcN2SwMpbSsGbhy8DXPpYcPUUHRY9wudgX4kLhNsRag14XkZypStrBFLBBmQ2tLxS",
  "key37": "42PychjQHHKq22bwQq4mgPPJixp2o6zEBxcupTKveCv4C9WwmXKpSydrybakTfRpaJ14YTRtDskKsRyCBJCgYnWD",
  "key38": "4Rb5CyvnpifC7YAB7ptBQC7FV5DQAjgZgPGM9PGhNSp2SgJj5WuKiVdGd6TFdjyLvbYZTJoPT7UC9ppAZHSWBbv2",
  "key39": "3pekq6FBSnWEe4jREUSNAWMmDLg3PYmx4edzA9Tiwn2KLD4D3HJ83Y5ZhF9BVS89wm9D88Q8kAr6xphhfmVx6Hkp",
  "key40": "5XBo8jMWZFM79VB9wyUwZvJ5ekHUYmoredgohpZ8bWFqrPrSAgjGK6Qew8vfGW7f8K7GSpYSrE8WGf2dx6h1EDtF",
  "key41": "3Zp5ouPT7YWA5WAN8rXpKcfzkrQWTDqbC4fg3z6rCgupydfdvAr8WLwoZuE46TsNL2Ymrf3SAkCkQ9qsFYCqmov",
  "key42": "2cDzTV71bPSaAwQz4vC6kWdHmDvubJWgfYkpfuZhsUxDbZywfebf57krAxthBYJQXLtA5tFe2kQm9AsuDeURDwAx",
  "key43": "3inqHLniT5Rhp7VbkUTkxKkywGAxqVzaiB5prRrJjBPGd9p6WPRyTkqUo6XynWEiroru8A5s219oCt7mY2oFwy6B",
  "key44": "2CYeAgREgA6752nV28rexkNcLEyg5fyWP3NrK5Ugh5w2NggpUiWyfhKFMy1FCCmt8xAXQpp2JZW93vPgGQGK1bCw",
  "key45": "ZguGD5w1M9rz7MNdVur8NuZHRGmPCg5ctJgmod7CmQ2PDU9nH7HjXa9KcxG3HsWMowx9JCwQ9JPAiKoQeinP3gi",
  "key46": "4eShAj9kEPYSHixnuHTTX7cL1BkmrkKWkjH4DUfPr67xo9Q31PDvsaACyHrnVMSZcfHq2VtP2Q3kY3c8pCjCezED"
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
