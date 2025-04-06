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
    "3pkMe89eYd3VRaRc56HLiNRiaa3N61dRygFuwHngbo91km1aChLWM7BZngvrebGG5mJqHfP3gNbrjiFgtk5ywiTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zCkSrqkSvARk3JeBj5GKmpe7cZpYhvGWZzWW9ePe6Lo1wZBgLSybmVw8oFZH1YBAy6WJoTH3uRbTnwifg9XrBHR",
  "key1": "2DoW8fsLNPpUAyE6wnbY1yq1Ck1Vb65KjGeNK24pAUpuTjEv1UEV8WVFDZF8HuaZgVq195MfHaRBfz5ps2Gy2tp1",
  "key2": "5VqsRRYmz4eJwgFzGga7vX2Mx8yTVLPZnE25SCxQZyXfFLDgsY62DVvbzqhMhgMj7tkTSPXXDXrkDLWvGi3PBWzK",
  "key3": "4YQ7pfxLAkT18W5LecAESjGYt57YxpErM2YW6rV3gUVwP9E6uz193wSF8UU84GMitiKkUVq4WYbeF3tgJGCreP2E",
  "key4": "2AyBRkjaTrSNrc8JGHe8phB4XXtF45SoMc5qWTCW9Th8kyG3TwEgwVdERKEVwqdQ45mPapgZaNZZjpmWW2RsnqWC",
  "key5": "2xsAK7r9Khbnkn7rB8sMDLExkqxBZvubLuRTSmjqADf85sV1v7RYBuLjjHwEQfbrVhWrh66R7hAHG6X7wJyrJMxa",
  "key6": "41ZDY4Vxetqtg9yeXUFGYpzSurm4wtNkjVwK7fZGAB6ovyA7sxJYEr6tuurdNJJS9bAVc2nwhyDLrtPJjniim91o",
  "key7": "2DLVbJ513CeNB4d8fBnLNcjkuZeoty6JG7ReaXS7APkB5fy6m3Kqs83ccHx2A7nSaWucnusojiwoPrm1aYtjsvYw",
  "key8": "2zjCsiJft7av2iTQWmsjx7s7cGkwM5HSqNUFWAwFsSw8QLusER6MpYYi3WqZniyF5tZTm95bWTLVZKq976ioYyxL",
  "key9": "3H6bFd36xoAGabZotkJxUKw27SXPvnunRqX38f6UXpgSpWNg4wVvKn43BGtnqSrmsRcw3FLT9Xm4VH6rBxtxjr9o",
  "key10": "2GCdP38sfX2UdQbpmGCy9tnppkqsAmRixG2fknPzfMUyThk8cZb3XHUJFoquSv7QTjpMVm1jpf4wReaoPnpTNwsB",
  "key11": "2qyPhkQ8ZKa9hZjJzx2cWDdZEugfi7g7t7iCJQEzyp2GhJT9rubZmL6bdSQwNPrAZEZm9okcmp3gnet7qE7LTjo",
  "key12": "38ULS227noTgqQ9JbGjXhvo2c8sbiXZaBnqSfpyo3rr1q4i3SugRMy3EzLvUQygvBh8USsZu3QBmfKLgimXvuQNC",
  "key13": "5HiXDxaZ8GkeFtLTNh5SxGzS1wfRSmR6PJoajDoCRgLoLKygk48WNmUvnaa9cC9YsUrTaoavvCQ9SZvXRVUwyNKv",
  "key14": "457XZ9CotgHnzweYnvY3yCFVgiN6jRtWd5Xg81mbi32EZUrB3cm6Diov82m1zJvEJASk5ZqgqFh8BDvTK1S5spGW",
  "key15": "w2RD3uAQzr65zXgC9VJDcfK252hSX8SRp9emcRcSWQKqSDMyohtVg1BqmJQCxC9SGDRWyWg8bQrgivyw46Kj8Gj",
  "key16": "5ohkm7C2U3vjL3WZzyfGT93m97zqL3QrSgtZyoRLGWjJTB6LhHgPqWGTq69wex8FYRm5R4meAeeGQ7kEa4RKu6Qs",
  "key17": "22ap16ujN9PfdDX4EutxyPXfWSa7kz2fmGVZUVucRWYRZHQmdix9QZhv2Mw3fNWioYxXCWUSoPHJhSUTQYufMLdr",
  "key18": "48ZsKJyEKXHu1bUFZxArGUdsKhZL2FYKeTg8bDdt5AzKQ49wxyaVBLJoTaHC1TScuvJipa3he3xSGGTGqHCYPWAq",
  "key19": "2iPMrQtJgFtNiXkQLGibQqYNaGGGKD2TrosErYS1JxCC1ps1VrJJzJYdPLFaD8N38X5aVc8uTeiwSz2Zx1aCGzxb",
  "key20": "5nbXsLaFJHdEPfEpfs8eU3L5pCFrPEnhtFUuBvhCA2m2HNARhm22URtps1bWf4ifJvhfAFNhRCD7QThaE96KMPQD",
  "key21": "28wuXwDGf1FfpYteuYECEUypSDBqqAE6gUJtgBLQMRDhDuaSjg5KLfnpxmqH7R2817FdRVKcUH9ZfSxj9MV2ScrX",
  "key22": "2Y4P6gHrPr9FkTM1NoKVBgiiECevVshutJDEY5sJRTfGVeGgtkf8ib8twS7Yhnhb7UV3FarmHmf2Az76VA9WyGq7",
  "key23": "2dXy92Sc8vPsnkBQ5r3Vs5JK5mpFoakCzhQ8GmN6W8uhmFtGE4SuQEDhA6n1jCtspJvJAp4YRrykiCgDVuuikg1a",
  "key24": "43cN41dFJ6jrNzGEyijL7511qDpAJyocvLsVwhuAbskNTrwrbSV85ieWHU1Xq2SjRrCLmTdSH6jC6mo9wbEiPSr1",
  "key25": "3KAX69Axjs66f9oqn6rbqpvqiTtw4u9tfjhJyWRcHNgoi9VmTXbj4Nwqvbg4Tybc7B3JQQ94uFy3jrRNB61aePz9",
  "key26": "4RBfAHBfjNioudPzctAxaxLAELM3qrTwRoJBNe5NBf6Fm5mXkL3ow8WzafedMVstzDdjjxPFWvuqteFbR6RLVSwb",
  "key27": "5MD33NTqF2r77genaw5o3TNbRiv9hijKRHTtaCq7nU1hewLn1oGyMVTGXo4YY53WNzdLsLzGckSrjsWW7mMvqxvU",
  "key28": "K6yHp6UNMYrHFjVUqgyrSU3TpxKLTusSCByXKD8HMw6MvU4NFyuoWPmuc7WhnGNA3nRfDeX4VzsvLbRPCoZnf19",
  "key29": "4v5892Y9xW6XVzKrJf5VDXY5mbj92v1WA3E53K7Y4GmZsQuyWBFnkb3x1dYAPLMdFaKboJjykzRoBBwzcP4wFMM1",
  "key30": "4tUsK5rcfmjBaFBTEGYmvHjJS1mSy9z4duwjaHvGfTSdG6UFCwzY1EgmfTvEcDPndYZU9JTiM5VnFmRWdKQ9f1XP",
  "key31": "433CCnf9b3WZvsjjy4Xy7KRgqE54YcJwUHGbnkXEu4VvUtTZVoyCYyefn7eW7YNCWkTC1tPYZBC9ro6piYWoV24p",
  "key32": "4GYEnMXQnxAjjm7HE31LWVUpmegwBU3SnMDsjCHoEPeJ7v6LAsyh4nT3JZhVseiCXsdRcjUeF3xFBNAuAmBGaeZB",
  "key33": "44gW6aX1XENavEX8weFyPRuV14FnJirPJAj1ymVPZ8hefJzR9wTEh168jRoacLmrhhoqM3Gs6sV59sb2PtmKqeYM",
  "key34": "21qYu9gyEPhwN65wmtYusTU1ViJpg6844xo6X6uhZb7qqVwkBLt6NG3L95DcyQqvQcrnnDSqLL3yxB4BEQ7QzbrF",
  "key35": "3M58mVJv1giCvuHfKEYRYVSkhe5vhoifKbry4cpKcUdyAN5aBhfeuApEj4Z2DjpqkfQGdrEK6M8BfBg4R3nZx9Gd",
  "key36": "3CfSoCiUfU99nAPADQM7o5K6Hz7oriJKu5BXruwyxUzDdzjtiGo9y8aTmY86adHGeBjuhcnFdLfwYLGNbufgCA11",
  "key37": "8UwScLmTCMvDGx6k46qNV9zKvfKb1VDaW8hxVqBYRgoDzKgNX5KiQDdp565o2FDtTDmmAbkPLscdiCr2UxWeFho",
  "key38": "KQjB4kVvrAzSDbzj9qFf6e12hTKGbvwRzod8pf3nCny7FeP1ZmpRcLxLMhGrtQde8ASrfaNX9pCUkvZNrtwBUgH",
  "key39": "5YA3GYoUDABjaZ4bGmgUanvHZzAMzBJcRGUAqGhiJDoWchxK4YEknXTKv8yvAVZcCLEF8ciYtkYNbgGe12aWfWwE",
  "key40": "2Krcss99BeUC2JUYZfioRDNw67WFWdxBhz7tmQ2ha3TKU49K7yUu9swHhVQAEQd8QNZy6Cr4iidUmHu9Nmhk2i5B",
  "key41": "2mSiahgejpW6gdm3h878QPBEw61CHm1ppPHZVEXH4n5D7XJNG5NzsmTMWjypAK95i9grSg1sDKorKzP5u1jNqQk7",
  "key42": "4V4m8QBd5DCYPtifcNcS6eubjjk1xdPaajhA6CtrS6aJbhnh4LMBjeJhV9fXbhJ7Hbm2BHWFUGVhgHHm1oDGkf7u",
  "key43": "bg6afixHnrbqHtZqZxvJYY5Q36HvksfTxLB9rY23FNiHddNBng6X54J7fgnGLCJz1yJLZH1fMJivuToEzk46NwN",
  "key44": "5GqPaMJrtKcXwjcdxQ3fKi569zhcX5LjyvtsNdRAR1PWMaWMULd8rrDNVy8tQe35yaTRLs7hpN7BpctAi8MvzhQv",
  "key45": "7ynz1mNzaEYiq7Xkppg2ZKy8b58vYch1j9gxtBXB7dJiwR7Lh7ziUHAwBPkQZxM8xzkoKHxW5MqoDxBbAmgqef3"
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
