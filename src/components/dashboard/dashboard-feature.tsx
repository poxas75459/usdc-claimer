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
    "2mDtoU2ELfsVc9PAseYP4sN1tyFhqGpSuEdfYSdfMVet8RmT52GSxgrnayLkhDYwLm9gHjdBQZ4bBx36RQs5W4ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSKipoo99u5jRTEBSV2BkpUPcEpqpQf2PWXyPKdtVs3wVYAapd2ib5womE87gtkVMoY4G9RoDVD12pyEQzaSNCe",
  "key1": "5sj74mbFba9cffy2W3wfsWuccBfNtdvDa9BPoWB7b81oe7DJQtyf6TEKYwwtoYSvt8QG7dmcAMcJ43C99yyVPNgY",
  "key2": "24JsPHsnLHwPXP7vtzMSwseL7G3e2WvoRXKimo3MD6ymg79f1s18M1X86mme78ywowufL3G3MzEZgRcxHUpEsHHX",
  "key3": "3QTLsWyUrKeuuvK3D4asMUdJo2N1o7vQwyq92nAv9LkC95YiagerUzQnSF7v56WLhCoh8PTddEHBbmZB8ZFakJv6",
  "key4": "2UhwU7ihWHPZkmNEThxopzQ2JyG5T3j3WR71pCgsCydqW4NHeatoouB1UAuf9FV8ovYttKRV3WFVj4wxRiQ8TQoG",
  "key5": "4JsicFn855DG2pWRDKUsZdg3T8c9owhu6VTvx3V6hgJbWL3mAA7yehbCq1Z2MddbtHPeRQobcwnn9re7NrQKzTm2",
  "key6": "4Ta9cM442t6bo554ES42MbzCSUiUGxKiKHcKKQsBkUCn2CgkUmmbVdoZNdU7hmw1PPg9YLaRtf7QbNDQzYxRrvxb",
  "key7": "3bzMQvPhV7WVnZM8mYmfRwjSyXDhdQNdP1Xjkq8aY4RPERhCVWcE5ZRyNZTey1y3WJAY7ckFiBWfoE1tuVPdDwT",
  "key8": "LE2Q1yCQrorNGeEiyPUqzcJ1hSsiHRTkWe586zVb6s9Ueyt7uAuk2NxWreu45LQMG7dbkG5AiLrE2Jz9dSdmPk7",
  "key9": "3Zhdgqk1SdX47rKvtcBVMDG3wVTPH8ruVAv5NGAwnRsNKAi8hGUoQTjvUusfqXZ9f31fYDkXpJix9opWAUsicR5F",
  "key10": "u5kSPHJdwvN2oaNS7NuwNi3ee2QZe5iZNuMWkBPHWGRY1c5GK9ekGeTDLaAQ2UQG5BkXjtPdhJ1x2a28kXzA3o9",
  "key11": "3NsdfUg3hipwJmPxWHwh5zYgajs3je9k1JbvgJKh7Wx3hF5LG7tSdVrse1ArTwT4bbJiqHuzTEGfPsSfdFp9bD6S",
  "key12": "4C2craXdLqqDAposLHx74MwSzSoXxjdbao9feN9H6fheVbntUWXMH8PRuZER5cXedBKeVU16jL7gjk8UnR963XpU",
  "key13": "AmffDpJXuTEuiaRhxeSbrL3uqmy9cHnbvaxsHoWmGkiYusWnHTL2Bu6BFxYLGLuDsXkxse5jqXs7ctxVfCDnumf",
  "key14": "5ncCbEoUXwfpMxrwehrs8F8Zkao8tik89YP89fYjvGNZGAyCstRU1Q3vRSSBkLWYvZBkoLn3FsECwRceoh77Xv41",
  "key15": "3wfzbT1czuud4Dbm9tAdpL1wxVJGeL2hGaxWNjZTe43SqSbbYzATymvkLQHAhXPKdogLzcDiJAEe6S9fSCdfnBJ3",
  "key16": "2Ci1SDnHxX8hMFyXDeBJiXuBvJYewqwxrxKZFZiZrP9R622bTDa4wPXmczW64yZuNx7nZLyRWUrcu9RHmuMLUu4B",
  "key17": "3ygVYG95vCQsCtNNrekdJxjg9N6wdrd4DApnSAVLHNAw42gBRjUrYkHgS3hgb37gPpSeoJPmbHxJ6ocYQdwcDrcF",
  "key18": "2knkCuaY5y6GavKEsvvuYQLAvAYSKnm7r7qRnDER721gfmtg5ozEhinaA6LrcqGdBp9KeBX1dNtLV7GCtYwAFaQL",
  "key19": "38tpbcKqfLL7gKdj94QaufyW7ZvmHzh7SbcAEbWLzANadkV83jGy8AUEgs6W7E1qkGMN7HzKB3YewtbPKuEtrJw9",
  "key20": "55TVcETQd8uryXsQpTD3FCAhdiwfRbq6g3cXnVBWHTqF1nVLvaeYanZia7nvrSwbs624aMjqZXsbWtr79GSwf2rL",
  "key21": "5eY7oDWRcoB3hJTH5YM87VJNQTdbY9bMo29MBVQUXZAVJjdEt7Ce9QwBpXTgz3niq5fA6tu7XLxx25x9YKSg1f8H",
  "key22": "2HqZSQXXAdy5ar9rMY1wLWfj2JoGsxTNBB9855XXdG8zQTRcEgrhd53CDT2ZVGSEM25du1jP1NVv7PfDXewofLuA",
  "key23": "5KMEr1W9ZscQZXvCkJdLR9zYckp4vN1zVV9BXtG9FgcEB8Xw2GKuz5wnnjWkKsHgsPLqTBLH2gHHrSNByQe1MjsV",
  "key24": "47PnTB28xSMEe9XxEztQVYmWmjWdUj3DwhC1Ykub3xi4D4GU39JtqSK218xos69FFZm3bptDVy6hDb5v2NgjZgsh",
  "key25": "5g3eFNQYx3wKZ166ST8spcxXnFsRaogV6GMVqwh8M4iXuoLpJzUZqw8b2MrPgrFAHBUb7X1dTq8T73FGpS7WGWgt",
  "key26": "3Q5dzz1AHQKrbjuXVBAN2jDHEs7RktL5P2aBsViznTY774TXPMPHFDgF12CWJZwMh44N8QZDui9p4wTo6fJYPEeD",
  "key27": "3Qz2dyZyFaXKcDJ6VZjrp3J8VnG4bGjp1PTQvchMiXP6MbJwvxjLRjsq6SsFvAbAWekoPscwr4pjFeEHfhjX4JQr",
  "key28": "56YN8eXTqqhmHZtjT5W5ndy7rvWxZyg9QJ7pQCGsvcqsfY4Af7pqxjRJckqX8y6899QpUGtTKojoBDPXmziyVGfM",
  "key29": "5rt2cPmh6tMqDgibZjdZNxnjvT9fnCgfWNcPc7YmTdSLsG8Wbv67xdNQnWxfuCBsTzu2YJfYuzrNiagaym78GiRY",
  "key30": "MB9XS9JZpVyR27hnESGxhxzedeW7a7WuZDv3saUn7Eyhzni8JU8McdddLue8F5uxit2a4JYdP1BY1xvwk3XDUmH",
  "key31": "5WFfsxWfczScW237mtwpLGbbQo6Qn3mXgX6sHyPeLgMpfcDDhmSXoZQLqd9MXVjSGishG1dTQvD37aiuzXDPFvSF",
  "key32": "j1F7jcwLEVY46kfyr3QeYLMEtTQWzTqByFRXViporrqFa9Sx5GsPyP3vKQ3ScRxY1dxDhQZeQh44kofbUAmRFcz",
  "key33": "4G6pvStuNSndJquap7UBC3NvAB8sqMksxZxeJiHFMT4U467YCN29qReQAePmdu36A754s49cTt1RofgLBZsbrSge",
  "key34": "4MubHnQXiS1NSJNPBL2nH1YBrx4V5oCEiJQzUMjGQnyRj7ZgSpemJkWqxVZZnhBUo7RuNURxge46BcqJV2iCELRG",
  "key35": "5mUx7BA1UBpdmPxGP5VayKrAumesBN8TC8owujM5X7AamY7bTjqAPM4FygncYuyo7mw8vL3onKXEknL3YwT8V2bv"
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
