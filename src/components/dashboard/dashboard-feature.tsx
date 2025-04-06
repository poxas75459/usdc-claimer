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
    "33cCMTL94nTDoCn7tnd9LP1jB19tWRrStQ1oLgksDCR9pR1RNkN3DR67wT145Wry7hdxHnR8Ke4urqaUSb6kx313"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LqSSmMTT6rCnLsdFMGZUUfDmp1p2RvoHxN283PDYMpeUc8cdY9K9fTBn83d1G6npDmyBxUGFmbEM4Vdog1CUafY",
  "key1": "4EqvV9SP6QzWg97r5Gm4EUhMnfkQzNQRji1RKRaKgKCt3aG6d2u5PeWmBaW1t5n5vBuom9Kyfv43dU3Qk3iXDetS",
  "key2": "4hAzcxaNXZHqxaM8t3j4QBDstVy6zkmDZBFipzuKunxntijoRG3BNBGWpHbNfKnwsNZ9jyDU2oBn6uzcsETdu1bi",
  "key3": "2TUk3hc5jXRvCBjEXyvHFqUui4xrDZF6pmQTa5HKvpAbFuSJPUquBzMvXYqPQ3Eav4RvDVySoURugC1JPTPmUdMt",
  "key4": "SgMsA2ULDU6NPKzB8Esbdjc4rREqHV9spq8R2XU2JzidbQ4zk3ZGtKQaok97E4HF4SqNyBAaErBnc4EDe7cU3F2",
  "key5": "jZK1oNbw6cQiv1UvEpfjPzBcTt9w2AbxDUqs7ruz9HZfHLsmWZtfgJwg93g58S8tJTUkdE9KVHZkPhw7zB9itLu",
  "key6": "2ry53jtHMCEam6PkNBPrTwoksBCvr4kjQQEYy1CAGrstRJygqY9V3DigC6q1tg79DeRrP8jCGFh5tt66jUoqiNN2",
  "key7": "5aJVPSmVRFU14HAyARUM7y7SCubv5i5wJCQAf55kNzoXmMbMP9tqi3rfLpzy3ENKrAVfdMboH2wbPnTRU9R1RLvi",
  "key8": "127JKa4PHrzS2R27UkTDt6c45CGCmdDuvBapwoAKisUwvV1G1b3catUDi6Xfkewfr2ozPjkuD7oJKn96mBYi4MbB",
  "key9": "k3M2rAWeipwTcpna1tXv2jYV2LRhJtGGsqhKpZbRAxemq1HxvdKRYhbTxoshYYHcjjQJHwae1AC8KFQ4LM9mFV5",
  "key10": "3mgX1GmrEcuuSkbKMey2htDMKVD6VDiEzJvuXsao1Mv3NuAtrVA2JZBXCqgQwxWRLPdaGtSEFVXS6FMH6gEvHMYg",
  "key11": "2Fou3HSocxqjefxXohdyuWXKM1SyqGSiH1ExZxnH4ZDzyzWCRLDwEBhPKgeNV7cfdfzsn7UsQ4VjEeMPVhGWE5CJ",
  "key12": "36AQcRE5dVHPxYEGb6EEr1Xh1S64DhujmaHseUhfhVQGhcEG4crPiQ54EG3gJg7Wr7GmmRZixCUs2msFr825RVnw",
  "key13": "4Vjwi99JW1yiZcuMoThJoBrdBDfN4oErXZ34AzHXnstNPJdVeLY9LNnS9oeJ1mq8xxn8KeX7u67r6awWGpPi6Hh2",
  "key14": "9GtEY2oNfdXUvpVMXN7AJhLvckVyrJfDJ8ms78hM5eKwVUfWEAyPYcHNdpjUaH3zJFDDhaxocPSX3M3YMnj6VNv",
  "key15": "5YMViomRPnkSZmjPa5wBgSue8Cbst36SUtTdTP3HrbyaULxy56Y4ZvSmgrMxf2DX1MU8XPAyDDm1jhUhLHsweQm9",
  "key16": "638EkbSXhsDg1LhgXzWHy6RX2yBnxcARWZGGcKH3SFfAhXDs4MsvXVY8gocFXHkqGqWp3uH5GfwLznbzZCXEtsqT",
  "key17": "Mnq7KphCBsPiQKsgf61axo3pbE3qWpbfkFaAGYSQTrkEYszLa6Dr1JphGAU3HN4gTr47STiAsX6p1ThSurH55gd",
  "key18": "4Dg4JxNL94XuBPL33YREraNzfzSaV996Hbx1JLeAscntzwHTZKc2uyGdKpbv6kYtzBFTQv4fWsLy1DUtTqc6u5Gw",
  "key19": "2rQo9JVmae31x2MQThu3GXeT3NgbMx3Z88DovYRnEYnCjnSmrR3kptcKH4PHS7gTm832bQMQGN8fkte9vNTDBsyP",
  "key20": "EMbyrox4ed4uS3s4NReh1QXs84TZpgFEqevJjHMZcBbnmoCy7M4wDSkoKga68Wyi8Lvx5JKQWJ3Dhr16ybVMFEq",
  "key21": "38r7LQq5e9hrdWMMfESY6ev3gBvA4bGC3CPdzGYiVzriX4x5xXNBm14cNXDy6ca5bofcMtd92Df53fEzam6F5WvK",
  "key22": "4pzdx5oqaMuhdw9JpmhaXRqoeMc1wZDPNDwhwPZUGo5QL2Bd4rFAnRyK1eMLkWG6KSMz9XoMSAxxtqShARideSRw",
  "key23": "7WDmYxCvABcaoe1WCtbccJYrJ4xQM42buJBRBB4cqtgNTBZhk6PqaQA8HuZzouwhU3PgPunj9VVr7KQ6H6MmdMj",
  "key24": "22Z7rHfXC7DyVirHnFkqo3noL3QZRJwsCDAsfTUYMPaa8n3NdfG8eEFKuLb6zv1F5CFzjCFKX4xV1ep5m6aj4fgK",
  "key25": "4g7jVjX2ihvRjxgvqspBnjYwYLsiWiCeNdMMDd6Pvd8bTqXXsYUK8PEp6ccqm2wyShw7FUn657xpfQtewTaVkPC9",
  "key26": "5amtAWYmpUGsn25tMY5vM8pW7Mh1pRe9dkGb8gaUwVsmPWoHp65q8VMdcZ2pdxy3Q8uLpsqSwQL4AUQmW8g9rwop",
  "key27": "4MC4wvG3h1oUREB18VrfxKavd5w9q3k3pok5u8Tj8CnbyAA6wubEeqMdBdWGGFy7cdM6wyJjhzvkHffA4hMFXmRr",
  "key28": "3t1mgHdoPRowqXWUSNDgSAgrxnjCRdt72DBmgncVjRt8qCx4JbEuzUoSmA4gczmFYpXpdvuNtXaH8zA3NDP3QHfu",
  "key29": "4JFeudjta9J6epPqZVfeZhfVDEvBRZ8nwstbc1vqCEdYSqHVA4UeeoacqQ4Bsv1ymGu6vXhMvHvNgEq4kx1LHDMg"
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
