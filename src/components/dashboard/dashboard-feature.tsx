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
    "3md7o53a69uPnpRAS9s3345PEBcKfRuHsFRNTQY278FjWTP9daBAy9gSTQw4X7tRbvRMQ98cpp4rf7QhAihFPfci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XrJz1KMgjks1YNj5Rx6zZvCc1cbsUrWRQGXynf4mPDUk4e9BnBXLxrUBrce8nZeaHd6KqpRwv5CBeDFJ5LTwL4w",
  "key1": "3tYYsk5tKCePhxRrwx85DAhZPD5YMiqr8ZqGiSuoSWrU99WUNLF6b4epKUp4Uh8UhUknRaZh9KsXpfjQethXbMou",
  "key2": "cLpTSmMNfzwnBgS3vWjcQ49D2Ebbdgz92uvg7HsHDm2KfvwnJyhsugPmKjxfgVKKjvGhyR9hayHvDjH9SBh1yM4",
  "key3": "5HFXtDq3REaC2SoZoMfwhEQFT6MsuDiH9oeVArK2fCCd1KCnD6tfKprcDriTnDRLbsriAftSae2fWhDbxX7GbmMw",
  "key4": "b1HFz29v6qLLYzPSy41kUT2SVRyve5GkDywCUZi46whV7Ljj1LLuHXGSnHuzPnCSNyVL9uAnrK2c7gytxZr7Mm4",
  "key5": "3yVZ2No3ULE6oLXLTkSvjxJRByVov2K48QbGw4z6w2wRiLxrPxdN8YGV9jgme4fShEBFYv4cCERMRP8aRh4MBseH",
  "key6": "4DyX3knQTEshGRLftA9bjakzMKZ5NxDeLBzazD1y9uM12UaMDuuc1ozi4t1Hq4jHodUsfh9qzLJKGkPTF6Sc5nq3",
  "key7": "4j5Yq5cguEZ4Tj2T3NUNhcNpD6FUfYMUtsjcLfYBhRms19dLnWG2z75XGZ1gms7KQZLz7D76ZbW4mLFLWDahkapV",
  "key8": "3Ht3d4qeHsTbDUEnQGnA9ipi2LnSTPenTdiU6tFtJEZX8PdWCaApA1czMfjiGHjYk1oTytoCxgFxtA18vk5D8eqS",
  "key9": "5CWrAfuoHkSccuvwE3gURRcrDALq39hZ8Qzs45wBeNtAhsBT7otPUx85aw82yWxh1x7YrkhVdaUkxCYVyErseor1",
  "key10": "35DgvRbvr5CjMXuG5R8PftQLfGf417M4aLVRPocW3fbWKdh7HGjeuTxNhTFpr45M283EgPiJnkVfvrNdQfF4sCEi",
  "key11": "2Z46nN3qRxQ659Y8xptN9QvhmFmKaVeohwTTbGLqQjZRrby4ipMB2qq8iqb6G75JpcnWNrg7bTL8FpbJx5kYdCHx",
  "key12": "5iS3nfZypkGr2MUsThpjdmE2Ge6RAb7odmCoAfjwAQ7iMzJzxok2wDkvpv2STbb3XdZBn52RcvuYRLLgu8iVC4aA",
  "key13": "65W7m82aaGEz5KHHqqsH6ZVPS99uA8XY5WfikNEWFnoi4hBN3Yf3C38pFtUZVJED3wxZ6cyPMhHQ2tAfiQQ6x5Zn",
  "key14": "Uy6XJKZBqGGC7oNzqoZ5Q1Jm3QRwxReL3D8qpmdHiuFR9qheEQ7G2yN9KdpZ9KZna2RTrZLEe44Lbbme6F4rFbe",
  "key15": "4617mzZ4Q4WqXMVtJJ7AR1eSYQ1KykTjiX4hmGpLcwd7xXHPKEi7zmvr2zGmd8ucWpRqo1ZK3cqvMfDapQwW5jiN",
  "key16": "rSoEd3GxY5zsqeuD3Qd2Y7RxgsPLAt8cotL4CierNewHgmuXjoeZjrzGUHM6kbXpnumqyijqC3RDy2RFHirPmNY",
  "key17": "285ZDVs8i4Q5aJihGQ6Ucr23t7GXRvMK9RjY5ymV8nFKKJzmmNoafJj8b9YZ8AjP6pegPip9KPkUNJptKw7oBCqn",
  "key18": "2vp6zhvifHc3vAtiHc93h2h24Cwn3XX1nURURFD4YhvuqJrf5fFg6wDiWmsemH8W8XMRcgRcSFePDmRW5cF9i31m",
  "key19": "2jownQuGxhsmmS8U49ShiudwfvFd8oPdmhaNSPpoBLL1wPCmPFvLTviEYtQQAGoCU1NLCvxGdH9QLd99Q6KHS6EA",
  "key20": "39iY5Pde7Zwwa6jaLq1gj5fDeiXvkV8xsTa4AfXj5cLoQAz5JQc9AFMabLw8rR4ddwKVXDpvWbVYF83TaQR5maWK",
  "key21": "3YLwaLfgoZ2w6DjhcYernxxTFi7mw8VHw43sWK2aGo1Sk8fCCV7DTsNpkMP2rgkYWCeGMoH3rm2pix5aFggGpXGj",
  "key22": "5T8ExnWqzduvcoD1j7f98Am97wBbBxk5pi9khuG8Jp5RKzMfkv1NmHndPFrq1Qk6AUiT9EYH6suGCR27WtTE1bje",
  "key23": "3eLs4Usd6ahGMbZgFRDFaKNHHJpwdjtg5QJjoWGoCKMG3Tk5fj2QCnxkEg9pYgmZmw4rqxgJnf1faXfSGwAZFpQX",
  "key24": "2PaXx7iGJaFbguWrdA3m5AFwocZ2gBn3pdgpWGero4oCaKgAgVG2o4HnobgpHqnggd9RdSF35EDfjSs83xu9VWCv",
  "key25": "2CfSE58hLGndguopPUnvKAVarvECtWKoyj7VaJ5pFn6fALeYM5FVpDhJ5NsuV1Xm5LkptK6Zrgx6pP3gNjVr9Tze",
  "key26": "2ViqgaHjCLorj6jSZ7F9nG3kznXxZU2im6ZmcFpTKyyi3ZoJe1hZwXKdgKEygU9pgc7Y3kDVjPENhp1PbzEvxYkZ",
  "key27": "64yEDHN3Y3zhUvGuuAeYX7KfLMNRRsSqNhnAa4Ck2emTgvrvvmm2ikvtLBAve2rjvByp36rPPMKNMzphsVvvtpZC",
  "key28": "3Gsq1DTuWhJKJPGmBo4P3kJ8pUD9mkytDyuaqGSzfZwB7cuy5sUU7miGXzvUGKv7MRYSkfyZyUmHhxNkAS9LAmry",
  "key29": "BcPCADtLi3T4e1yyswPAteeRZLLY3UZ7tLtNqGAkP3hG6fPr9BKWNE5KCPJYNDoMc66FTGNNZgk1M5i6r7W2i7n",
  "key30": "5FwP4FRWqQ7tYLmbSUWWcYeHP2EgEMdu8ivYwB8g6bDCdaXrjr1JNeMcBFWWp6D4eMsCcNRgoMFFrxHRV89nMspX"
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
