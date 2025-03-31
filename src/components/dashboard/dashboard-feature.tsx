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
    "q7u1PQoCyTop9CqNAMSNwJz5mFByeVxmrticHvNPUczdk1uQ7E96quJ2F5dBY6eGnoJDCDcz6nRXxu1ETN2L45x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WoxuKJgLJCP8zV1CTc1tgK4S7ZoUyAdJVkY9uBkCWMtdUcdLsWDcMxQ3dVDWZ3oNHzNxT3hPgXX3UnDzoiZwaPp",
  "key1": "5VKEeJn6V4sgEaG1VezP3FWcF8yefLAWMNkzwKV5gK6fPm3mDWXPXYKqHU1cXBVs4qQiHM3fdyR4vRtuUX6LCCEZ",
  "key2": "G8fums4sFofZQ426zfVA4VqND9hrRiTh9Q1HBuk33W6dN17duzx1J68fD1evt5CNjQ1aH7hEz5N22HqnNcJ5i6X",
  "key3": "344BjeTakvmc7GfVrRSA7bYwHrSTht4bQLSytgvJFkPuzXP5HeaUANi9apqknWxuUnexmdGKMVj2mr7D7mRjQ4KS",
  "key4": "4MYAN1jeZEzonaYTcMU8PPW4VvG3fBcNhzaNjQ39BRvb3bxhq3RPcEjwwe6rW5iYQKDGZkS23BcAd3pRzxNuDveQ",
  "key5": "4WYC7QZwbwMvHViURxbuHwsB47tvGDWpS17pdeUUQ5QKkjNKz7BPUn6See9E4fMqp5GuhnLTEdEV2G7c2B6jtLCn",
  "key6": "4PWNAs46zcwmUE46Qu2H8FiH75cPRRdezQjgHbYwmM7afuftdWENfQr1pvEQqjfZHNJ93FG2Kz6pnFnj5xPJnRoa",
  "key7": "5HTznk8URQUYTAM2vZwQWp8jSpRNqg4TtQH2gGXwQiegEULkxg4Cj6dMFXk9xwNVXe7XbHw2o6EWBQm9DWJ1ojJq",
  "key8": "4LTUQ2NET5d9NgztSEnnFYfcNKnLEmFsF4ScNrsoMNQrhtP7zvK5x7rFrNgaLaVWYxc9s6UAKPYH9BtwJbSeGVqj",
  "key9": "3JL3Y5sAvkbgrazbNZ2ZycmLCARizDT7zBtMZyD2FeChSMG8YwoHt4VhGZTLFY1RgHHcU7DWKEhiBZKGpnJax5v3",
  "key10": "47pCGwhGsYLAt8EZw3eqHm31tMZsad7oKgXzEpybFuuy5mM8ijstswD175Cw4F2iGfBeZoXvLDuHZfJEPUA9ByZa",
  "key11": "2L5KDB1u9Yu673VpJqLk7uJsgthuStQTr5nasoMUu7Nn3atSVA6fjCDDbxSPMazghcnG3Ff4KGZG1rTRCPS56LpX",
  "key12": "5yE93KD2BhSTgiMspZN6H7tasPfhyUzYTZFF6c9oYDogowJtbzSTfKCKdjbd49SKj9N1Yk3yGP7a5ugJax7wzdLc",
  "key13": "2a865ULmrp1V7CFzHw5MiYa9agS2uaBvnsQsJi3LZLeLWYqdZ4AVdgHFcvZGtLEh6KMzfP8SLE2EYpz8Hmx4pLVW",
  "key14": "3Uh96jH1uJT4EAxYvuRMTznhUBguoRYFP1HP6fCFiX1FYPV5JCjZbtxznMsSkEJ2fXYTaPfAqftu6bizDfTuwGvy",
  "key15": "5wq4kxZtdwDwRt1Vp6h3tUCeXDhUe4GY93fPF8nf8McnHsSrEcPJMVFcVp5oozr8VkhMWk1MV98E5YpS5WihnG2h",
  "key16": "2MniB8NbgpyCcMWqxTpt5KerpFavfjBXoKnb9ajStKyWEGXPRxEBAgMXqwbFY5JDLppShXGLTh76XkQ97sTc2GCq",
  "key17": "568DKNsten5DU13xZdWVds83wWrHFU8ytEAnLp8ag9QsvhgkhnsytLsctqZ8kV6GQ6s4MWvA4E1M6xGnLxQE9Mp",
  "key18": "3QurG3VecEYrA95oaKhQdVUQuQRcHcUd613V1ZQK7xgckQ21wsrQhZ3ofPcCkverK4RbikUsTibe8rMX2xqYpDPg",
  "key19": "eG5rSXa7QBLwy52ZDeE8Bwfs4MFyDHdWtABdjAEUXGYxXK1B4c8BmE993qbEL117o2fNg913GqiPKPcc4khJuTm",
  "key20": "DaXcCZrddgkPTR187vrvkx5qaFoUhsbkNZrM8N5Abm6tkpdDn8M6Dc3T3VD1579dEpzkXoVVzKr8DWVSii5TTc1",
  "key21": "62WvcdRto7yL2nzN3Qk7WrC4VsiTeSZrVGVmv8kv6rQKxFUXDyL6jZESmHTCGbpAydawgPJSQN5wW2s66gao1Knp",
  "key22": "3BY7tYRbSFx2HwzcToMjwkkraNHtBME8S5RaiYXhEkvVZ3dpAsnEhf2WDQst4effwr4xe3KoziB2s6hh1RPoRNFk",
  "key23": "4KpSJmVZrFB6QtQC2wwUbpMcKqmJZ83wyHHH9KVQ8Gs93drcrKTJ5CJPH6zmxYjQJEp4Z3XCJSm15pN6K1gFEgeP",
  "key24": "36JStic6jp1mVKSXm7acTED57b9N2tD769K9xGKz4J6Fg9Zkxv8hPF5JeEf8iMXNG3NNLDrbRCCUcwaHxzHSbXPF",
  "key25": "2ps8eXanyCTLYkzfzabB8HcHBj2x8TF2PfRq9fT18DFTN9ABHjViANCqZgCK7KiWx9qg1rF1XGxry1YAtLgyZUDW",
  "key26": "4pxk2x7LV529j3exx5u3uYcgAYCCs9MqJyrwuM43NHLvKM6Nn3mZmd6XVVp2SDcb77yRwoTq5UDbmoPakSaHFuRh",
  "key27": "4pnjMn5Z7HuXe5ueRuTdXhfham4EbGt38ZHRaV655sCoiW1HywUeWsLXY7cfNqkU7sRmwYXrSZwXYyi3T7hTySmW",
  "key28": "5YEA19yZwY8Qv2r68KGybpsPJrj52iPxHopxDgDxYZuHj1iDJHhmhcgNEHnQgjc9CnsdU5mRJXEYs2PQqhDG3AGF",
  "key29": "3bJijGy36PcpxWqxpYN6rUuesdV1teg2ZzFXAhVQ7X5i6zzLhiQ1d2WtxSrFnLgjfUKJc2APwBCKtM28BgJRprxP",
  "key30": "45CixTsyr1CVaxwnmjzg91aJwBibNCWMQQPDGE3y3oztHdiupPMvYQ54Jc6EHJZ5hywzg5XhwsPqPTS5S5oQQwMm",
  "key31": "345fLEuZ9c4iAbC4m1nKecN8AJNjUof77WrRQci3hDaKQJdWVpUmqUnf64Yze6BuxoY8etDN2naDx9Di6RU3YAUd",
  "key32": "2ZboDi3TAKj2oj3utAduPgdJR3U2e1xfgWYTMayH9ioyEUL9yBDHuA7Go9JD9JBzaD8f61D2Y9xkcpXH7vsoNAkj",
  "key33": "3Gj58iacoDiVJDyc9Wc7MuShwPn8FCbyXagS15JzjLck6uuM2Sym9ABcen9ENiEQyzXN7WXHCHw8VBZ5HditFxep",
  "key34": "3gLpF4A6TeaA3tAs3CSNYBbcvKXaEs6vKqxLi57pFu22McL9EasZ91NgX94Kx8hj94c6kG2Y3f3JmC7XgJhJDLRc",
  "key35": "5G3jCnd2o36h4sEQ8XuK2ZhSEV2DXEmw517rsQrJct5ZhuH1ksmBAg3maBnyN6Ktg7jhyvobdKJF5onfD4c5HScJ",
  "key36": "66jir4Q3sgDep92DTMFfwvFhX9L5DnFGmF8G8YmjQv4NTVo9Do6ZCRS4Gg8GpbWcb4Fr3Mq5KPWwhFJ8mHjGpxVL",
  "key37": "56zx8bggG24DiEmUqbt5ABLyzEcdXN9DGuDkp5wi9yAjLeN2g3LCYhcLY9U1TXrBaU7ja4EJpvpBuxb5v8WjDUB4",
  "key38": "3Tk7c1wGBU2gmfogFJZpAw6PXidpV76HXCCuHVaXYw1sUC5khCNU1quQ9Yudh57sLDxvU9bepuXFyHBwAUFha7as",
  "key39": "2cCP63ABgbANcbwB41wgc5mwRbHqkSZ4cdhEFbBhUAtqe5z2h7PmcdY3q12z5Z89phRJvFrot5WBzpHodAUfwaZu",
  "key40": "51w2YMiTYvsSNLabvTGahPSD8p69Co8UaJjhHzRJFCPbnm1XgLSdwmUqvcjUgXtAZFj4mERZoNaDDhJ7c9LBh4ig",
  "key41": "ePog4zX2RqegX3T2XWDzbqW8iY3tWQmGHmcRrADh7dS1Gv8QzMzuRgBNzCMqDeYrfauqBhR3R3i2kWHeewkzVhA",
  "key42": "2mLfV8RnvcVk1xB9xU3CYx9MPLJRjnkvsKNjgURMF3mUa4pCjEVbE6NY1RDmSHr8VQ6wHbqGpxzwta3ypamKgUmV",
  "key43": "4EuuWpn7BppnrduGKpipNa71UinBeALh9sNTxPSBpcGayhgaaM2RtnR5gq286Dhn9jDRLbG9Y8nX9Vi51b4NNZ3W",
  "key44": "36yyCa3wd7LAL3Fevf3AXyNVA14BnYGAr1HRHxXynr6kz5Xta7eb7HtvoPCJCmP46PF65j3H23t35wQ5ZGWSFzkc",
  "key45": "3BPpHK8iJW7RPeyoawNetvSrPa7dt3keZCMPXTznmnNXqi6BoQmn67BiFCQV5HRXtYPA8Ws428H8JUpwZm31YxR6",
  "key46": "2PkgNU8ZULnNh4PxUsiXhtkHPY5khfHvpsNkrYUvagMTDyUb79r2JaSEhuD2tpAxi8EZiqk8gPLPBCJfT1g1hTH2",
  "key47": "wKut83ZbD1JDHkycG1KBQWesGphvkmFT6ocLtpSM2YHxWev52Tj6FkJFiFcZRV57cEtsw5iJ2SJNxdkig2N6vUZ",
  "key48": "5E2NqrPjoBzhYcJftbHuCYv53iP8KNAkUcQCLnFkbJfcR8XJazv8LqnkS4h4XfcxBiisyvjHyjVfuXiVVrQqcboB",
  "key49": "4s6G4ENSka5PcpjyyAmW8ipHuPq1BVkpsNGdLVnAH1hntrytFJsU1t91kRupVaTqbfrWoQbkAn2NSnD81M39nSNC"
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
