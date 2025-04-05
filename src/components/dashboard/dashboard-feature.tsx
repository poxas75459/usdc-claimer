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
    "2n1qGWYRjRRYV4Z5CN3G72x2KVU36pFAMf7evKYjy9Vj4STtmNwxbt9qTjzXt3oMzcpUUnT7tVoMeRbqov3DUX3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJuMhRM1K9nLWh95kSPF8AfKf4jCgesoNuHQqqXZkzdtRbp2FBduvu3V1e82zeumYmunxwE7SjLCZ4trDu6PH54",
  "key1": "4gZDCWwL2x75TuPwtc6VPLagpUAPTVHDSDBRTL7Sxt8y7fFdWUeJWSJHtrjvb83ZfG19pp1M5R6ZeSfDpqFRa5ga",
  "key2": "5riwhy5q2VvtVnipVxsfLUqibSX5jQ9MUw81TJrtUGtRM86ANrnJNnF7jMh4Nc9g7K6abwXjkrWE4hee5zfayqFK",
  "key3": "5D8JY3qUutp48bVF1fcwkPJo2vqUdKHxQLfjcZZ2x9ZpfY5d3Jk9FQzpvAtWyJWPHneKc8J3uT132cWskVv13bz1",
  "key4": "4za1XXbR5Pj6NsKxsaMJndP6DrN6yJdA1W9wRK9cE18U2HWiGRrVqeburJHvt7E6ycCXUg8ahZgNA73PAjdca3Y8",
  "key5": "2GC2mynj9U4SAAsJFdaZQ22KvLfbaKTnHfoMYJy7EH4itboWcxVmHetF5FnTMFcxoH49q8KknDg1VYxixs1ZFjAq",
  "key6": "27SXQEAkQN1mqEtAgbZLkbmeait9cfsBa2UneEENzxEAtqGCgFsMFd1swZCAvQqQKm8k7fjzgqUytdKNtUQgvosp",
  "key7": "5V6vM1xQry7vHUsM8umynFZAVGy4QyaDbcKkuKxpZVr58yKmaxqmqvCgScyd9mWNxmZ84XtcVdkHXcuqhXyY5YkK",
  "key8": "3h3n4g1oZfYBZMsWSeLEwABX3ijtELxQYYo5HkKksJ6Gi5ay8TNfVu7jUGfQQDkcTo1k41Jv96euP9iyD6kS5Tdo",
  "key9": "45Hbvs1Mfo599RNi1mVAjbwvLFHaV2nXbD5GhghvWnGNbFvLVV7NmCsTMXoMsAPCb9bbTtY9mNsstTukZFoSh83S",
  "key10": "2Tfw4jEFdaRvXYn5q9e7GWa819dxef2UaCHoU6GzUFrjCkREdYz2db78hCcGKRoGhGKtpbwkBP6VDsHqbzkGiJhi",
  "key11": "3RamX77r2kjM9yMHDtRVUm5u5DLanXavexWwtyQh6JB7eVY1xKDAftQAYsc3FEvxTYZ3xkS2rZU1yPZoKbgotXrz",
  "key12": "324FmYPtctTRibHukTGS1Buf6YKHAQ8pEnbCFsESDjk19j2GQGVxTJBEavhMLr4joa4fMnNobJqCTzfg8j1jrseR",
  "key13": "5DMzYF9cKKduLVF6TpKwJmiRAEBvEoP4aJLzCLnk4SkhQXKSy44F5KGgxAa931kMQGmL9JV1qewRS3iimDvTAYSm",
  "key14": "2CSEGiJUw3pn6Erh37q31hGSJnqYFi7srqC9w7J895wbTkPGLs6nJAuDdzKz5TViiY8xHNPGmj4Kym4sSctGqjvz",
  "key15": "5VBrEEeXtNq9NLL92EB9kbmBfXNjuFsVJ3MXLrs3kocv5vsyaS889gYiQWvwtgLukZJTJMCQLMDSu64yJomLzQrd",
  "key16": "66EbxWfuz4UZQyFR7PZJcMvx7GRq75kaRnEjwMYgr6to9Wr2z9MYF6WGtJeWbPQEmKKHht7ePe7gt5ku2bfdRnh8",
  "key17": "245qEtCvexha3hja3QSiVuciXYDom1MXpQPMp2wFt2vH5KsUoY7xXNtLpjHYDg6CtcKoiiXS6GuqkKMiiiwX2hXu",
  "key18": "4HnoAWPdNyeJNzhiVK2kBnGp5PVpoVpWiZkP8ScjfCzqzuprzC7stnaypwN8fJE9nQShKzso7H6pjdhRKv9yMTze",
  "key19": "4sjsaShV1zhZomZeYkaq87sB2d81SWtg5hnn9yBKC79yAuYmysNX8DAcWGRmf8qKEgkwFHZjr9zKDuJxHFpC4UGU",
  "key20": "2Yv6wbEZTZxrB7ECLggem7RqM5jX4veE9BtYbbaEhSQnExoRAud75jD1Mqxs6oqhvb615hxdxx7XFhDX8wqrLhvm",
  "key21": "5FP44Uko9iRT54K94juZjZerwLY4XTXfzDqAP9ZhTchGVxsTHrc1Qz8iDC2JNuqBpuVu663vVH938xVQNAh6RSS3",
  "key22": "45ArsWVbWxPQGrpt7sj2BZq5gzQ3eatDpwWr9SCRaFuKkxBZvV3k9Ppqmi9xuc7bDgPhu6AHq1o1zaCHdF19Z1VM",
  "key23": "5FiZgTJkd1AhajKtZN3T43EXYpzFVfrj2TRU31ZsCdrGQdFXM2ybN7sApQAsrrV2b2xVtpLHk1vT5SstrGkRAKAH",
  "key24": "4WeKVk2fpUs4foeWVLJpVK2bzHdpXsBbGpmWDUjDGQ7VTsTyJaX3VWqWaws2PRsfXcb9P3YizoMKgAMwCwQz2yPS",
  "key25": "23yAXU9AHTqpdLHG4N4QmteRgQSH6kAbPJWtSryAX6i9SPepnJU4nta4WuNskWrLsmRXa2ZtmmMFgNtzNswxtoXq",
  "key26": "58ixeGkMCkuRWCvzeqq175w1cGSvapH8DdjULU9VJ9QhSVRtyLGxKKAc5vkkHBgK2p9TdLdNVRawCmvS4wQsTk62",
  "key27": "3YMU8DAZSxZJjWyU1TQBovpS9BYPfnBEDukudiw8JgJunP44MFDYGodmTxoux75y2mdPZDwzEhftC1T4ZwVo4SNW",
  "key28": "vhoh75iKE3RhyT5YMq5sSdnC5bKZWgHMEreu3QPrRdBbgHM55zE3aqRfqrgBvomF9TsqeF6eztRNiH7EQ4HDqUK",
  "key29": "3bUnu1sCEXE3yF7Q88xAfteYe1MNWkioHzafx8zXMR3UiVpGcbBq6FTPixeeUQevRa3DDLwmZcr49dgENfh3QrTq",
  "key30": "3rqvUbNgLjtQfBvNiabuGfkGPa7WrwE6ChpuWhMJrxmTo7qeypCghWfG4VaA8pCi231VJ9R5TVf7h4k4EwPGAMZ8",
  "key31": "44euroJ3BkoLPRuD5zrkhE4hoPacif87Rx78QcynX8S3zv848XjfJzinRE6MYiEqkjt351jzgBkPJFWBC1zMKmjg",
  "key32": "467Vun3e3ZxA1Kc7kFrUnRtL3vPLvzHKPwdYSfKLyPd94kG4QWMco59Fxw4dBVT4K2yJBKvftLuBPFtcfocyvv5Z",
  "key33": "3YdKEFfXbp2HRwXxX9gB38wPYR3sQbHCJsPXB9FxiGhG3RVzSySFVkEFtiLWzddLiQ8QDqQguNebRknBi9DqfGKo",
  "key34": "5PqtHJGnQM6BJCPYNZYsWnsULogGwZ9YEpFtiKmCuybR3TKWp9vMdeLgx5ysNvovzfJU4K5iwgTgtCMwRLooPtyv",
  "key35": "4uc36PU9ziYsYxrKWMGRXjxcL3rBDh3rSsnAdz4Kr4ajuFknRxPJ68VHmgxxSzAyG6ptxzucQuEe1aoy2xmXq7Th",
  "key36": "4TuzB3MifPAZQDXJxnZ2JtcRWDUiTUzUMZywr1zheBdCnWgmVWBvJh2MhScobLfgh1546KSEKQwXDLqkXanapgWb",
  "key37": "4SuReSiyEy53DMXoUyVgoH3wmUabUNfageMN4jUSs5ewh9rhVJpoL1pnmtKj1F9KGnSPWMnMjkPGXGgNS5Xos49S",
  "key38": "67Sp1kZuamF8cudyYZfuyYhW5Zzv3wxkyChwkfmpbs4xKv5sTV9ny5ByYYs73oF1ciLbUcWzQxx73qdQW26NAjE7",
  "key39": "Kni7A457vWKYv3uwMNJxQvjbf4x3oMXkpBd1ahdTx4QbTFDWZ3aLnTiozn1rQhTVXGd4p4qzS7T8uo2raFQn5pK",
  "key40": "W3KihAubSUHeb1HF6Fvi7hz1C4EmrgXNm4LbTxnkPWkebmbmTg7mkDDzKLadd8MXpDVNQogk5UXKqxH4hKYrRQ5",
  "key41": "4nc43FkJQ6NABeD5ZL7ELgHizZHdn2miZRypnA89RiSZBUn4ZgyNJauduQxKnjrCFMEEsXFxc9GtG1o22mYrRcxT",
  "key42": "c63H7VBr4Y89Ztb7Pmgf7fkYhWGB8XEPCnQxz7Yt7JBU9ACzhVzsx9J5MGp3guy9bXuPAmymZfuHRENnoMDDxp8",
  "key43": "279LFx2QZj51iMmFQfgkk4jqBWVyCgZZDkrnYopTxJUxJaQpjHJXf19C1An8dbmrXCz9BtyVU2a2tximcEsv244B",
  "key44": "4daUJ4GcydWUi38ymyZ8M8ZAaRHFtmuE4yqEPPRYnH97HMSKv1aCxzniztm89r6ehJVpWSH2c8qyBDejRwyt2P8r",
  "key45": "2n9hAQ1j4HDepXEyULpLQ5XJmHatoGMA71aP6E4wuG7c3B6UDtW5eXnPXUwvoKwCbCUqQUnbJbTztDTzRACv2Kz7",
  "key46": "7wqmLTyiQRgUfsRC8C37SEAPBpDR8qcATZoC9KGdH4Btk2JvGtXHaNkRnkqSZKHJrsgGGnTtZ1rCjMLMoG8sQCm",
  "key47": "2tLDShqBdGsJiKfeuJYJ3NKcsh9e3KEYrsN1k4csRB5vCiooKb3L6WMML8G66Z3HbihLWWi2TMiAYmqDXYJHKLKA",
  "key48": "5emyFJifKkWSC53dUMSz7o6GpABFhsANSF8nFhoz61Ecg5ei2VLX2BDnctQ7yGkRcmnZoVNnhb2Jdsgmd64RnYBR",
  "key49": "5dEkwF1QoaDDts6DtsYHppKy3yKMgrtTjJWT4V63ywkV8vzny6z9nXRmMiXTYjctbHAxXAnSY3CvYQzGKNUYkCcm"
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
