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
    "5B6zBzZ8BDsNmJDBTkYEtPJXPpaNQbv7kj4vj4hXwbHFKyr3LCLWjbHj5X4Ro5xMn6dCk4z8eJpXSBhogNJfyJwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CDS2vD6qShzvWiaYsDivzy6hBCbgW7dcUUh8w9WKqR4TDwvKdBGspyAb5SyHxLtcHj1WKCj9bhCnSWUdbZ7bme",
  "key1": "5m9D1caStJu7FtNpftQxVPY5XcMhn9UtK5g2aensn3e3LUYrwNXzvG2RMHFeVrSAp2hyuermXNZD8KBDcPb6vUG8",
  "key2": "5gycjJnAwk4CqH6Y6H9y7j7qWqLceGk3t3zvLsqjaGPcKBZwU3czUM1cihS75NWDwRUqnbXEbrTZ8ADRKPRbdVdi",
  "key3": "5B38ujZFqtSbr96d5wW8sQBwPaWq3fW1Z1DP7hsBqe6pGg95TAtSDHz6Z8bE5DsAw8tX6s5qdMLfAZMrrFuvncTP",
  "key4": "3FYDdQUL8tQiGyFYjkqwbJY3ULTTAF4wWW7Hf9KqnBv4rQM2ompNUy7oqmqpgZsa2d7FqjScJpxLf5iGTxnTXbL4",
  "key5": "51Na41tEeMsRzfAUvfpn5EUNCiHghpwiYQzNRaBMG6gs5htBdHT4cp4VcZHaMH44qsq6w1PqBtbRTNriBZZHbk3W",
  "key6": "3tcnaBnibr42ZYCK6QBQB528v3aEF3umGZReGffqramc5gizi18URGgGX7EzyC47mBDDWaCRe21xVHEYFzYj9kHY",
  "key7": "89VuUz5bMivVPR4uBvaa9FmQMupMDh3VY5k7DGTezhUb9emrafeu8LeRYuXnestDg9fbaPXXVv75Hqy2SfN1MxQ",
  "key8": "DNNp2auqEkarv2fiWq1ke2bHucxZnHA1kiCs9Ra4cx1uUNnYgCnpubTpsZ7rEVcR2DD5grikKv6F4kv1GLKdrz2",
  "key9": "447HXXnPSmNp1s81Nh86FoPeDawjxh75mMGEE72Zy5uFSdGYToRPnYKoJWe6QbrmpSH8VdrhsKmLnXmV8W49H9DG",
  "key10": "2vghbZPCKVt6YbeA7ouhu1pUCZEy9QMdg7RHusjWpYMsdXmy6Y2XLZME3WsV9ZDrfVu4bppGwhYbnmSygsbmzWVT",
  "key11": "ZP6REL14aeUUrc1BcwEoVMJovBjL5RFMudjdvaMGbmybfcMrqBAYmeAdy8XyHXTgwAfA34kenkEWHRSTTzQHwDw",
  "key12": "5csDk3GXad2dgnVEvL5WsxB9o5ctm7LaELn2uAtE6HWQL7dAZYSCPdR3ufuPBGwK5Ksd8cpqHCtHdmUbJyft34aw",
  "key13": "56U5rq2vAFkwpKbLn4eierdBdhSj1NrAkRgnEEmp3Q7bk5X41vueYUHKk8PyKfYYzW5MFFQ8wJvRbscjvAj9oHaf",
  "key14": "2uqS4BryXjMraaZz5E4uSUTjUea2D5UM4T68nxGRtrZReZt6nzWtZkUcpauAXJgCaQS4x77oSeczaysokLohmLgZ",
  "key15": "4YTEfd8nQga5TEq4S54LPibL8m1N7JL5RDjbbqUbHEkewRRdwth6mXsfDme1qqFSfiJSWHewtezg7Lb7dzgcyMvr",
  "key16": "4FyWtqNmV6D2Q7RpBSATqtd33QyLckFS93MWrD5RQd19eRjQx5SUGd2bEvmHGRAapBCvQsLHePQ2R3nzjPtvDU1X",
  "key17": "2txfWRqsAV251cda2XqYmcpyp4gRGcEQ3JEpKcFfbJ6fjpnuUSZaDBRDagfNTsc81ZEP5FkUY2jdM1yRrTyQZddw",
  "key18": "5Q6mX1SRaNGKUKjzN8XWtqgdwgMbqg8yobgCm42Ced3b8E3oAuKpU47mAasTbvd9ApgPM5JMddSjyQTmCuovpMTr",
  "key19": "3AvNwyZX4pMorjetqxnvRDaULaj61miY3bJEKf28RAn9oVTdCQADc6cu948VT93FErA9fnMEYeHm18VsYisMbGw6",
  "key20": "5H7Rav7tNWyvz7jABnGJRJGfKZ5PFzSXczsErwiSt3thPfLh1k2wr29M681ghQjg2p672VxVPLuFpjeS1gPD6Tph",
  "key21": "4HXX3Z14cg2HpmNrr4TdhkgXs2UoGZqifRLBBjPsMeiqGjD1LvF8eu2kogbjdr8DXM2eNh2GB3hPvjaTEDUEpCk8",
  "key22": "33DJUN1pSo8SKp9ag7UtXV4AcLDb17bfK1tPTBUA81u4nuxcqh78Te6QoBpVnVb32bKTLqojoMeSdB4z6BLKkZ9s",
  "key23": "3cQZRCFzPw4dDpoTSWoqv1BW58JKC7cm8sJeNesteXSmUuZrEyLu7iYNkWsp1orScPssCQTZ4sKr2S1bh4o4EkD2",
  "key24": "pu9BFv4bxKNiqPpfPT1MmGKWsW57ZLDpMNTkW9TW61e3j3pJ6TKRwRscfuGR4QuYUuephAaQeFEtemHwzfJYGKV",
  "key25": "4m8bQtXJcnSbGVQyedWCmXxDvo7e66MWrHVmfQEMMLEs7eXzZDjLncXpE5nEPR1oUXkQbFx1vqco6nV9dgHgNysK",
  "key26": "4fPEa7w3pvnWsEj9i7frhki3kPdYsGjyLWDZNZdwpe98zHCmZzimfjhjBDELMG61NaSFLX5dbmaTsLp4qegJBLay",
  "key27": "2aShgnKPA8Hj6iDZxrHeAD1gJDxg87n6YbhoQbP3LyuTmAZdbhsgJaVtFzoaN3M7TZ5u6gurNdH1i3WdW1LGzZXj",
  "key28": "KNmafd3ZtNCMP8D6vN6N1dG7x2LesuQ7ucwSQ2r96sC4Y47ZPw7ws3Xo2M9BjcDs6xHEtCXKwpS9JNyMFg8aSfG",
  "key29": "2fhv6qeDQmNWxE65mhKX1Bgpc9NGpWP15shEzbY4gf3jERYqiMPKmjKqwQhUs2NJh2K5Mhe1N3psYch6MUY98knA",
  "key30": "5o1oR2cxjh3TdDsxLciTg7yhRrC4sT6jHHJF4Y8sGuFuV9HoCeKvprM9m6PW2u3T9xBTi49dhXzLGPqCc6YbPwVY",
  "key31": "2nQU4epm23aPVLbAZhcWQihrHhF49ZVWF4rowfaj5VhHVimVjNpfo7nP8dF1FJFSP6L4nVx3PAGjbp1Qks9yMPHN",
  "key32": "52y26rWBniAJ5srvdYDhTKv9eDQazPS21yKybE5YqUzsjX6Sma9JKSoMWwreGZ8TsC4xzvExHPRW6KNL768QXmEy"
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
