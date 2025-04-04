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
    "4BEZejrri6pEk2NwoA53pfpTWCmud9YnP9JsqmoFJ4Tu3asnDBGjYQaitUZ2yc9gfQQnejycHG6AeZG6sUoJbNZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LmekxUniFEboVm37jxaocNqfZtvDhizL4RVdPgRVX1Yv9oYJQZBcy8yFM2caAWmU23WheL9sJpgijJ99mb6kU5",
  "key1": "4cB3NgGkiit4Ma62Ps3yLobQ6UV9HgzEq3E9wvzp8tGGtkXjfiRYnqhmc8mMS9Wy5TQKe4hogEG3KSfMdRNxUGfN",
  "key2": "4D5mpvq8uf3uUfX2YPQCgCQYArA8YeumxRrHWu4CqwZq2oznNNsj1Ufxmgz5Wst4xnTBTobsrgYRRY1nf6Nq7kXw",
  "key3": "57S8ugZPcY15yfXmMs5qMLaWmBysFRmJNXEdh3AfFDcBhCy9oWkua7kc9ETQX87r8bNNrSi2xpsWVrywiVanRN8A",
  "key4": "4qewqG263dZXJvEH7ysYoS7gu4ExS6veAko4VbZ8yaxbXoDmMwJqwhK66ii7rQUaSQeFpue6VtLdqsRtdA9FArXR",
  "key5": "JgS51S364CTGYsvehmRZwbReCXfSJYcR2iyxHfA665dD1vXHyJxEshTq3ptWTy4UZaxoEt9id1gNxMUzazAVXBb",
  "key6": "5vHmfPA3dT9xJiBAGpRaSJUkaTd97x9NGBiMrTdB7M1MCn2Hs6spun47Nxa9FgDZDZijd1KLjZGQUpC8xABBmnFK",
  "key7": "48KYcKWkdceuSQoM3CMuHXRG2kLKE5H5zXu1KGP73CKUFg6Ef8qQjdybFhAoyHEVS7SKAd9o5ufaPg38aEjahhFL",
  "key8": "2QNSKvzTt2zaQzC8ZT1ALhR8rkgquULvZkgmoRcsZHWSPDkddP7VWueRkVL2rhVujDRah6fHGBonxrmLwuqqrK7Z",
  "key9": "ubcAz1Tk5XqY33BpoJBpsivKYiffb9C6tXCwbB5HpBhmAgEtp7gaw6RzkcEhzjVoaEvXceEpGyERzkr59LT3w5y",
  "key10": "2UcTPjytLNsqZkXDxWHBFgrJdvuSBWRVUsDVSiDbGjAUr6fMu68HxTwj6sKhW2iSp3uhySYzpAgKgZcGtdECxUcZ",
  "key11": "7xVRbwH6S4dRKELZWzRuVV1tdffDfCSekGD3mAhQYTqx6oQCVoAEezfdszjXXftiKp9E9D7XqRSTxB3zBMbEhp5",
  "key12": "4w9MNAd3qagmxd8tXk5gKjt2UBqFVW3MfLrV3rZA7r19E5K6ATAa2ucwe9PdGoUV22js7gKV5DboHPakjBS4cPpb",
  "key13": "2hJGrkAH6Vg71fv2VkVbDsSoGasGTDJuxW86SDfexMaGETvVo2ZUxFo8WrUdd6nHQVb99k9YJw5jS4e81gn16sjt",
  "key14": "5V64vmdbXsrQ2RhzKynd2tn1XXVgDzzprX5XYZxU8S76DizHqnot7ZfA2c3ZM61QqngQCTNpx6Hs9mipb4hxVYzs",
  "key15": "5EjQGnctaqt9DvbQD7F3o3PMZ7u3iGMiztYJume4xD2kzmKzcPYS5fp4fi44p26aaM4CBEcKjru65B8Avk53eXUX",
  "key16": "LunsTpZar5H6YcNWFGchCnXso9VZiLSynAawqDVX99HQiCxX741DE5jHtWfDRqtwWNbEknL6ne2TjAYeMAiyPtG",
  "key17": "572eDU14pBrCXeEKdQENLCbZqziKVipfAsKZezNj9QHNbr1mUtVshdUZTStxrrmWbViSei5GESE7ozxxdR7iYUoP",
  "key18": "3ifGvkd8tx6TjV4XE7xFUz5EiyWsstYwF5sJfRtfXuJ48yEBNbi8RBJo9EnbZuuRYdkJrwyx76kZoBbjW8A8cCZb",
  "key19": "fGAADGiZ5UbkfhricaWxhDZV2edryrefyX2MVHN96CBcuYTor53T4pTNrFc7VETiJxdTFVm3wjpZmF6SLVr7aXB",
  "key20": "2wy7GN73JNFUsqNHNsWJDcKz15kBkjvNCsB1ajJ7cRe5SbG2JXkURD2BSWbCaFyCXP45pgPZF9AFFfwqrE5YRuGp",
  "key21": "3oCmrpJLbrsq4wDiFUCpwK9SVqt2ZB84sM7difPvssb1eNu4cK7oPqEEuA34YSQeU3JMJSLMfvQQiLPbLHX9B23X",
  "key22": "3bEoWReG76bBGfWU3QoUchGUsDJtt9QAo4fESzCV7533HMrCag7qJkpE8EJH9vvz59swYJor8e6dgHCf5s9JGFbo",
  "key23": "2Vcd1FL9Y9QEWkQBLoGHRytwMPVZ4Cpv73dhy2e7QnDYcLGFJ5GscBuojekS4EQk8Z8xXcvpZa2rJtg7etAxCppY",
  "key24": "4mFH62qsfK4TH7zso11oMpXQ1EgX3umzFGow7x3tQhkPaFVAADG3WwPcNMfWNkk8ubHQuLTYwf9smEMGnyuSo2Aq",
  "key25": "4tUZxBSr1NaYKTy9Fm4tU9cmBQfKdAVaSdnnqBgsvWk6D2moAfgDfE8fmUae4tkdyvCK2EHRtPF8qLNjYxuRZmJ2",
  "key26": "2WfU2Rw5JxSCZxd19fdUq8zMA7QxLKqQMyzTVBYrmgTxUyTQ3RJAWJzoT4veZH6fiqjWpXDxLy8DAY6NuLvnkF9m",
  "key27": "2aoBYbJmestvvYsRaLfG3drDjr4CRCod1AaLjfZPBuj9M1HX8xDaxryf5rdHBVk2J5CQZbkfZpkDosyNcR5YLn7m",
  "key28": "4thASvPBa6gAHEkqTRzt5wQF3bNhMpTAiDr2dHeMfbuaJApFq6AXBmLaA2mE9at79Bd8Cy397dH5PNGeKBnjif9F",
  "key29": "5JehKfSHqtLM1QLbSMUAeAM6fa7m7K1qbsLXSt8MuS9WzC8ejtCSSsbyAiAHD2Ub5D9zX8DAG2WHw2h86kiWbu2Y",
  "key30": "29bsfYAwazMqH67FC11JaDhTPhM4LRdpSbySED9NnCq7wUF9knpet1urCq8XXhJkfxFaxumwMf36ih37FKeNw9jC",
  "key31": "471u7F6kL15965Y48bXa6Zk6AWdECV5BYK9bfwNPULzLtUu1G9kghkKgTUCNvzzAZ6xY478QUJKSDKXnJyT1kgSe",
  "key32": "2Nu2wZeBrBK3Vfd1LFDycLHijYFGDeUtboXehem7jxa3briooUB5jRa6jCuPpkgGYwLBWCmnbfAeKwzTHMVpyXRC",
  "key33": "9JvBA6fEDM8T58KPYuRRJyEqMtrnnBw8TrSirqGtCTsEJymVgc3GkqTd8TFCaHdYEXrDqxrEJQtwEcfyChHhW6u",
  "key34": "56PfYr9R8LkE7TvtxZjxE7oYXRCc8n3XuSfixGk1WeNjpeZAh2DU8VSTWxmqbp3V7VJmUoxDZTGVUX1DKsKt9c5f",
  "key35": "44u9deqiKY6koaJDqH4YzCWF25xtJnJAoLfChYZY4pbTXvYZR1huhrtCHzjsF9sYpKRWNGPuxaJH8HLyEuFBuwB2",
  "key36": "7msuvZedg91KbsZwznKgGFdXuBzPLYHx3i1fT3cqmyJTUNXwJ3TpjUm2MjWZAH6rZrwUZcm3cUMFZkaP3bus2YD",
  "key37": "5MWVnMw6ReG6xDo8BxH5t76E9vtEAokj8jQapsh6d1UC9Ht4CZR8EvNuSTRyAFEAcToFJfmvLPaV7hdWq6H51RHK",
  "key38": "3vzuSkEEkXrGoAz7ffU5mmuYcgxBadxwYTZNgRy2Qt3fYGVUtWqtGCwJSNTf33qsah8LR2ZEj6JqWrh4WvNgPh9g",
  "key39": "2qh6LVFZ8dwc6y82idLLT6LvTBTtTPATa8LNhSQNDJHrYkZhK6wzyZGUdy3p4ifrfZfYWi6u26HFH2F27GLRUn3C"
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
