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
    "5qzaF4jtsbyZXn6N5JTGts66YBm3j2qoaJAGd5pFnhFrjPRWQfU4VQQ1tY1rcUCS97hPGGKKkkPdoQDTMUg7r65T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbYdnKBbj3NVPM4wEqNXuNNQ4sfKPhLLxV3R9fuFBbyGVm6jV4Bduq7EcVxWu7LaNFScekGyrxJU87zAAhz2kFp",
  "key1": "5rmm5ZQYcJVb6DjtRpeJGbGUMsBw1ehTcmB4mLwJuZkuCFEAXA5TZRTxLrXH32cjyGVmoT6zXN2LePVbMDh1abar",
  "key2": "5k4gtLPhDVsGHVWg7a1ZamyEidGWnNk7vvjijihmjtWbDSPCWf6x1VWqLdMkFmwB5p8wkfYjBWmsyHnWXrLrivHk",
  "key3": "2zmpj1gjy3nZurpzj6w4fkZXRY5GPP8fHLd7nWtdwsiAqThu6Y3hLnf9AWqwi6kMxnjGJvWQGLsuQ2pv2aEQSVZw",
  "key4": "78JRBtSXe9v5vuoYvRNjGs9GHLzrntY9zpYQboLwsX8YG3HWXUY8PsVDKFU85sL4UVAnwPG9NDeZqVSY1AHnj6c",
  "key5": "2zjMLW8teEPQtNNPu6ZHEtGCzW4jCWt3JBPsZRxppR7RoEjTnFzncYdbSUpRcuoC8K3J61RfeS4zzfFhQCXzcFe5",
  "key6": "3F8Bg2NmwjPKLtwEYfRkdXY6fGnWxF9ofja6QPW9HqGba3Pbp1326j8n5yRA1199G9U6vrKCkmKU53HbeKbX5Ja7",
  "key7": "2GKzCVyVUJiKijiRxVESM89a7LuQroCrJkeyy1ZvNvfjTFp3gUyf32bMNgPkHyNU14HufWs392x9uaMSo6qsrnbr",
  "key8": "4cqKgJ6NtGNynUsytao8T73MEH5GiCTTdDnKD4kuf3T9Qg27zCoc6XopRnHgkYYPPVgUQEJMCm9NDorDLwFqhg5z",
  "key9": "2W1DGDmWph89Annh6QAYuDrB6soWae3Yqp5yEctZV83PpvAT1pQqqhSPQJ6zJjrNXzzn7gm6Vd6ArjetPQtPDCf6",
  "key10": "42CbJ8S49zTy9kTTeNcuzSnXhni9CYSSwKpkNqWAYQXig684fd2VeigvhTC2aDLV5ffQoNFsoRQT8XYivTZY1ZtH",
  "key11": "5XQw5YvVt4FXVBn8wMcZfGQwbm5mqvjWJFyiNHnA5xBiEiC4RGfMqD4SCiss2zA564z6hF9zM1sDgNhy1Y13YWCT",
  "key12": "4GtdWUuWph63hUPmqhJsj1B2YmoL2GNtmfM3Bn7YF21KtA5aKaf9ggyhrxBukoLb5jGd3nu8r1ti9p3EsLrPZttP",
  "key13": "4mLTbpsXzSYPGzxa9x3kV4jZnivTnk8TWtooiXr85REncHmQmgAH6gLiRaW5F7LBpKugmUhPKoA5sGfKVtvXS93B",
  "key14": "YJGbi3qvg1ZqHoPDH9sJhpbcmkyCsSxvLS98qjynKrMa27bW4pFBjfUdymskqKNphNZcYQo59frMPP5zaLA5AjV",
  "key15": "2Kd2VgoDwbQnr1gf1VsWdX2U5UwGfDKHC3TobCNB7LvEuu6XVnPHVNKgsR8W9NaSGG66gsjphn5DgsWcY5LmSf6t",
  "key16": "58zwzAEuV8QhGUWPoN58YZm9wZFUA9qr3U8PVPc3UnV4KcsydoT7k9HYgXVeQ9gQFfeaGeKcUrPy5Co3iq6fxvBM",
  "key17": "3JoPq4mmFBru8QVUjtk5HsBfXFGyTmYWRXLCFD8BeTCjk5Morh3jNv5dY5aHCr1ubUChhu9fjzzqwxSSsR7KZAgM",
  "key18": "2AYNt3wanMXfjbXFmgP4YYLxLfR3SeXTfiXVxiPcZd3sp7wY6EtEhymJAPu4tNwZbSWSHZmoMFmvsnT3DYuJdGg4",
  "key19": "5Xtwn1eDh9eiuRPtMb1NDVKwHvNZUppaemnfeQiozguGDexEV1NarKaEPgAwDMkmaiAX3NuhRCHdHpkAmcv3TTPH",
  "key20": "57XSe3hbZ7xNPXCkLPujd4mP99rK8SY5xDS2cLB3FtVERGpZMxmbDHnR5tXdSqiD8mcaPi89LBULt2RBrNRNNeaj",
  "key21": "5gTMRbsZWVEet1276nz8eny1TtPN2mKoQAdp6iaSK3e6hU9TYUkWDZkHcqPCT967ehGd3g5kfYrtPjEEiVwG9WF1",
  "key22": "33xiHtxhL5NebwREgt5hJc2nPsMgkTDqJNc1qSUszGjz6ET48ZLeYgeEfD29Cw47bbSFP8kzQU2mN5xV5XYcShns",
  "key23": "xrqP29MsV8XubJLGhdcynQRRuCoETJYKxHdVpftrao1iXj4tNXim6sP8w2vkPd75uDiZ3CohkT8erm42Mcys6Zh",
  "key24": "4etokr6gQhULWJcpaqGpP9XpLRmPgo6CaHgdMfV3DiTLRMjiPoLq85gXZ1uRDPhG7kfd6YKMNWwNkRWJJMveqycF",
  "key25": "31gj6j488W5Q27C89RDoc7LhNyBhJQJMfm8P2wBwJtVL2q794pnNMBzd1BbmKFuDUa5RppQ8i2CTHBjP9Mi1XKVo",
  "key26": "aD8TrDJNTR7uJ6qtUPJsaQmjvXSszUFjsksTBXpAnFmfKskvdQ5ozDhCkcrCsbkATtsHC6stDo8goDsyJFua7H9",
  "key27": "2DZevcqmNQENnmPctv1KNuV234xJhnn2zYYxzZBwD3c2SFrGkwhFotbEFfeLRNiC74TzKERV8oWy5eSTjZjJBbjY",
  "key28": "MWE2KtM3gHcJ4vRJJnaLJ6WU5S6gnhkQvT78HPQ6JSsTJo4NojsPSoQV72Vo6uWBug2MKJA9e99WZWe7ucyFzLv",
  "key29": "2EznAKCDAZrKs7Fi2S95EgtGD2ntwYHD5URiiECZNdBLkjkBx3NF8nS3cLhAH3eRwKKzV9MX69V2GLJyWdmm4hBc",
  "key30": "4P79JUZa9VaJ42BKqQQFPkH6915EvF4Sw8a5ci7bgS26QiWpRxC4M7a9Tv5rM6EWf5YWckpZQBELa9s71ThSD8zv",
  "key31": "4JsNpToeEq7pC3HNs8ZJH3A4vJi1XyRJ3L14fyLCL6MnqPQmvEMhmkhoCcCKGL15NgiNyp6uekKepbGSQuHhMjyr",
  "key32": "2je5UDLtGxrXi2ZMsHGrjLQphci7nxnGYKscQ8aFjvMingt2cBdY15Mgud9JhmNHzWqfkQP1SNTyHUiRemLTj9m",
  "key33": "26aEL5kmTfbYXN8GuYzgjwy3MMfM7f7gFcL9Y9hohsrJiNMwHc77Py53iuaz2cHqyQT1WTjJnfouLifCfLdBxE17",
  "key34": "5oikQ3VWDgM4Fw9rEXbK1ZRtWHgeqX9xhgJawZo1a78UuzA9xd7DvwLtVaXLQzcTtbTZNn5SX3zNWDFmdy6DwnjH",
  "key35": "3cDVpY6Na64PHoUxSdbJVSaG91RqEUhCTTCyHqrFLyECXksFtTpcAgSz6tyufHjShKKPyU6ehV2mk6inKad7zYn6",
  "key36": "5n1Zpr8LFkT7QmQFMPjm3ZHVJAdhv42eiQoUNst8GV3SS1GMW1B9ugEdNcWWFByGTq823VHLVUd4pZLjHq6y3nVh",
  "key37": "5D5VkmFhumWoYP7pCwStamrPfiCjq4HtKqQfvoyS3LEpTKEEt8KyxxvbDYQoVyKqGTpNY1c6d8j165xrDw7PYcNj",
  "key38": "2UqPXQkwTgdsoXL7VJf5ApMEgGiApYUQ1WFeaxyE6Cga6kg5tVdsQz9HptUgAVuwTnfruihGzRMzzA7igDHpfmHx",
  "key39": "2Nd8zirQ4ApZcKox8J6LE8tsiCSbrGi3RxAx1avoJYm8HDmWvxE3FW3EqgiWUSDWri24UzZubUGfMYrUf3orhU6w",
  "key40": "2gi2JSC7K7jHWKSYRjrgjSNi28kmXwckmrFbgZU1RkUTsNEAWc3iHSctu7Zzp3Y7YfQ4JaHUKwQW5xoN8sEHEb25",
  "key41": "32hAEZDTkzkp3C6YWyB132D7fMLr7AgYPzLnJNKZXk7not2UM314E2uHwKLwJ8dFZq9ptjFNnnskVcBVJsqata3L",
  "key42": "5tWi42nEeiFJ51hJsENHWPL8dqpET2LWnz3zFiF1gaZBgiyyXGzjudnim9dUK4xFc8whwcqP2B7R4aQ9uYS8mAA2",
  "key43": "gtaU6bPjT2r5fmoG7nK4rA4cbjoMygpCWKCfXsKpGtp6xzYu6D3FDiurytsj4Q1ZELMsHcLNJVReQYHmghtZbKM",
  "key44": "31ncFAs4mFrRwFXPoNAKUb739BqGr8ZwFF5yuwQejg7StwGxMMZwWHJbkfmVrbRfqPHqzH8JWamFSwPpiQdvirWt",
  "key45": "M4WuavMKhhiaCzE12c3egPPg1AzwhrAN5d2hBKJnhdLbfRfefJkabFDUX8dYX9MSia5LfV3BPBbDPLi37y7rfVL",
  "key46": "64BdTuK6uhpBQP9tanoqUgyTaTYSAeUo3mggnkbCtFoQupyoxoB3ErvRUz2ELGxoZ6iRyQKsjUug1VxohM9uWeRq",
  "key47": "3WzWvvzLURXK9RidcoHCfjqi6EcbWtpAAY7xQVrXDM96BycbTbNwWGjWCfgmmA8WMN4gHPsEG72TP7WZ5JrMS2UT",
  "key48": "fm6SLJDVLZCZ3GrZMALXEURMpXZETsiBemFPcYKgookHiwpamwKyDdQMkApmfTRvFPLwhkHdcuZdjr3Zm6JgDed",
  "key49": "cwyaRLcBjvXxtxE8M44D1P45tXuTPrErPiQGY7FU1mtxVZyGKEZpqzPwYr2LNspRKTsPC73YQ8k38TXtKkVSJH7"
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
