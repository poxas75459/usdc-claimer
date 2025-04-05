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
    "4BAUyozG7snJtiMkMXMNGc1ceCPZSchy4xmYM7qpbfJQVYjW6begTdTDeTrQvdUZobEZoemxXs9in8ATF5WDzmzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EE8EQ6iZ8eknqMgQ1ruCX3hMUFSJf51t5bwfzKnPjpw1xqDviUFaagwNih4fsPXtVn96pu47VVVingWnoweUQs1",
  "key1": "41t7keow97LWUH7SUJZWagmt8eZAgoda3i66sfCEWJZ4FV7VxTRRqYYDFBQsUQeukhPw8KXVSHDp6wR2jKRASHYV",
  "key2": "3KfYwxxcK9GtBKrb2tvqW9BwAaS2PeovUkaZXcPABuDTY9cwTTy2nAbPqsUzVxXh4K21sSQWE9V5oJvowwixjVTM",
  "key3": "2zS4RCYrVEkShHongKUEnyqT2J1wvJ1CAgdpNWvU5tnxknM7ffYNgbTt3pymiZLBFqBQ3mumhnoUzqrzEj61jRws",
  "key4": "5N82M6mq4AXofYv6NbgzAeAL9wH5gHTWUVX1H68xgayRanKwZfW1sW2HiviNtsNVnhREgAjTnWdfvkK8dStz2dam",
  "key5": "5g5Z4EFUBAbSpNGj7B5UBmAKAXRa9aNnUpibkCCrovvMi1uv1b9zuCoPNguD5qes28RiJoWK3aSBhUqTkB3d8Buf",
  "key6": "27f6cAGrUSygDxB4roSJPp4weCEjDixZmHM9vShnizes6YU854V76pkfceLfvugwxDtJk88hEq6KzvfmuDFCRpG8",
  "key7": "4xvvvs2bitsTvW9vCmA7tyzw2DZHvL73uA4WiAXaWDzqDrzax9MLnezcpL26FZ41HQo5HV6DxsjTFmyB3udpL3za",
  "key8": "2kqp92wiX6mhnvfvSgxQULhTVRNTuphf1hBdH57RCYB3rEi9jBEGu5e7Ym6n7sWTn4jRKginw1wdD4HXesDZWEzL",
  "key9": "2FNF2a8VU4kwAuXubwxWbsXKnSgAQp4cyiFvc8QgjQPUvLFrNhsmQBuFUmyE5E8FPNqXXxULPi2wmaCVdo3CgRBL",
  "key10": "66P4QPx9v37FfgyGAcWouezsEPFjbqxCNk92kxN5aksmz8iaiBqa1Z4w5niTJ1DJvY4mPeCwwtNTZMCjfwcgKWpW",
  "key11": "583WQTUbnAM9MaMmMe3dgQdiA2Stp4BNhu93LMFWXYrJjENEGgyxaraMT8gLG7AmUsn1FnAA96BN67UnY2q7XZzg",
  "key12": "3LeLksRcH49X18SijfdFx1MPwfZBsFUabgGFGewrAonQZr3Dxeq4HBUSDo1gwbZmkpYCPWoipopZ9xFu9e9udyDW",
  "key13": "58XKvbfxyJYEf3SPCBsvCdtAYvYaoLKLpgrZR1TrZkYzBCoDe7VzQs9NUqSWQpdQERFEEwDY93Wd2yDujP3YACGm",
  "key14": "3GhELTCEz1hANhSTkpQzraZDzey8BuZ6t5vwm86Tok5j8qxMTvXkn3ZL7KHaz4Sra41ZVxMvPHg51kGhFtJGHDK3",
  "key15": "2K3MT4jxYU73BRC5zvG8UvPiyLTf2BvLjE7Sg5sKgCGMEZQnQjknBD64odW8Mi9sCjUSjjRqceJCoTz8dyHhEHmF",
  "key16": "4x65xXqYD4HcGYMry3zprywCF4TeCRLoc4DhsXtATt8KRQrVHBvFdKm74XU1HEksz7TxvDf5V93512TNSaLBN3R",
  "key17": "3hjNtNpdJ4oYv4DDue1Q9CZZY6PcMoLmyzRL8EdrW5f6zy37vEiLEKxFSFPQBRHDbSSVs8LsEaUvEW2SjXLZMSd2",
  "key18": "3Y5UxWFmEkWtxDm8FegbVkJiCFpwd98BESPMFtZ4rdqgE77Sp7QT3uBbrUhQBzqxPkc2C3VtCQkiJayhA1mXvSQf",
  "key19": "KGxBUc288vK7eNMD7So5uKMDUNnBbBV6MP3uVYSNnEF4sTqZDyv39HWNz1nnz1VyFiFag5xxn1sXAPPntLwf6hq",
  "key20": "5rR21dsG9bz8RLn44dv9DbpHcZYrfmWt7HrwNLPMHiFWR1G3vaeztphNz4UvrxB5zUFBVUNMQz8iEpu3rCcegPQB",
  "key21": "gaTfSF6xU86Ha36AVkGfpw1Joo8Azfgu7RRCYzX9uSdF2dYa9KZBXSseaxNppPuqAhmQSe1vaXg2UhfYy7BRZBA",
  "key22": "5DMSbPBmK25NZ2ev6RoRjV8GVKzD9ugvwXTp7jFwJorP1FNBoBoPzZy4Z8xK5BHz2Q6WTdZkLBnuC9AF9rZGXJVd",
  "key23": "4VGja158wSyUD6s3oDcKtVtVhP5TQW921bWyikf1qd1GkEbX8Eet29zJGg5recjwLXZGYwBV9FiAvGkPTjoyUT3d",
  "key24": "5TmKbxeCC6BwBEHdC6D8TbXXjNNkcSeDQYipCfzQ7BBdLiYK7MdxDENjCsYZCjKGUwoPRyRGu2RTQkNKiU77W693",
  "key25": "58A9tAcMUYEEGApqVQNGoDLgQzKtiAdopD9uMDNHKh85ysEyXRLRWCSJL936CeEVfXqVfq7czzDzHMd3pdnnicRP",
  "key26": "Dy9LpGz4qJZZpLGmKHTE85qXC6oNkreDcBJVDJSUbw1FgiU5FpJfGz8Dbc4SCUeSZFNTa3jtUf2wygREekWxDWZ",
  "key27": "4TgyQYJUf5FWaYki46fo8YDqPQrxKTwJ89K4zVsedgcjHiWGz3bEYNeTXgtqykMQfvZvAtCRrC3QAx5b8Am9XnBY",
  "key28": "4Ggtqvw8gz6EmVR84LWjGJKCDefHu7cGR8HUVS6jcMEEvc3tv2isfUCZKsVmFJuaNrSp7Y1Gb5g1j27NaCR6tiBe",
  "key29": "4oq7H1Gt6AZitfj6jTqj1Qx3ADaqyjTiiVntKadMqSg1PR41vfvTx9P29bp3E6tKyQY7HqwBoruuDg5BaxNcrvCb",
  "key30": "5ctyyURAsv4oD7Wn34m8m6RYZTP6ozLTvD1bumdJKZe8LPqAmgEeqXbpHmNJnX8XB1s7pE5MPD4xZaJyxaV6igsE",
  "key31": "y7gPMGChsyN377M4KMmyznhjnLiUQaF7jrbXgCncRuitf2UNnwTEY9VfR3Sssoi63tUqYBmvegLHDLw25AyG9cR",
  "key32": "2nms2g7MS5udMotBixziifUXtuyk11b5eMtobvxZd4fRRWcBWVqkmhWbeo3TKvajHqs6uSe5kHhgsuPqKQXrcBed",
  "key33": "kuNG4hbvsuqmHJ7FaQnD24LtDuifxcKLH4cXktNSrZWg1hTAgYMMdJqdSBQcGE4SdicKNaYQJurYBFP457rtaZ7",
  "key34": "4rghSiDDFqX6w77MBdxXq1jByxXt7bUi4QH9Jw2U9BUgSaGfVFDCwe2PwRUgHS171dVpUXKQMaHWMxghmRkK8D59",
  "key35": "4siPTxM5qck1BTGGYqYL71mq8KyE1tVY9Z2gBYKYreDKdSJ8cTzZxukfobHRPrfhru6L1L4sA2RDaQyhZsTEue9v",
  "key36": "59kNk2aqFjh9ZPnZsc4ZhZXmAJ7e9N4EPFyUMbZfAbvkmwddGGFn6sbq9s5PJ7W6poYPPsAQJCkbc65btcWQmuc9",
  "key37": "4FQ6cCMWumPCCDtEUr1XniGKB1ygZD6YfNLX611ED94JREiiqd4B8oD5nyaRxuhX2mwY5p2uuDSwinkDECKKEsjC",
  "key38": "p8HzFmjX3PPt1LoYTrQ16zPFywtyytgLAT7Pus616Ho6RyxoLDnzFgGMK6DJrbiDUULzvAFfnfjeMJ9E4STuwum",
  "key39": "2tWeCgHPrh7SRg8YNqoncwtTPejBtATuECupjRqp6HY44GZeEDfWrvw9hF8HRzp15SQ6SbWBcoqh2ULXdYsJeUS",
  "key40": "5G9kZyDjWS7QosEM7vhsXX8qtdFzAUUHkqEVYXB5iMctB28igWQ5iYtt6GgDTuqM3nCoqJp918vMkUtUWWz8psft",
  "key41": "4AA44CyoKfqSnFyyeVw4S65RJ1YW9ZJEr3xZjJpRVzuUJRBHyysqfFh33iaM9o998Nfkbn7o4JudsLzX9DLwn2Fw",
  "key42": "3LTqmwfU5FZxRjUtFWcAgWMDSTaEbkaGjZ5sBrvHWN2289EzeKcFgyQJUnRuFcgTjdMRPUAn8HTmUhDLVVrVKLTK",
  "key43": "2DVNCg8oFcqmAnj3bXbJbHW8vt6QZYG9vjUVbt1qFwPA3bwyhurLFJMJ3d3bozG166ZjY4Do3u4XmwH4bWSA2Azf",
  "key44": "45Zmt8s5rF8256m38QLykUb2ZpqJ45sLjsydDC5ubaYNpXd5pLQ3x3nanEm2Kv2Z9DxM3Uuu4JFurrJSPHWmzRho"
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
