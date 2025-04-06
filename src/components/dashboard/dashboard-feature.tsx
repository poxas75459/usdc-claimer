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
    "4m41HE8uCDjGDNMGogjibiuSeAidJfhbVdrc6y3xZsRhEHrHsdngv28XsiAHbqcF5tLuotHPQJ6He5VThk7PuFMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SoFTrzvzErj1wC3hn1jvoJ9dtayQhZkwUDSQj8yg3vcy7hYr8angcz3ebQYWuqxX1isrNgdgEb9ppPcdjxuzVnG",
  "key1": "357wmfPpAQ3njgBfmhnzAiBUTZzu8ACdaxw5nHhPE4mV2KtimyLVYW2geqsq9Yq2P352wdDcPS9Rs8fyn7CPDYwq",
  "key2": "Y1t4Eq7gsp8f2qZQ6n3tJhD3GckvrnhHWAu6KP8thDYjvwrrA7FcNXkjVeYeeUcrRatgvikU1nggrSuN39bpVmX",
  "key3": "2L6QrPGfdv9oKSYem9LDXNQxa8Dfs25vGKe5Vq3q6DQNh3v3SFKu8cdm4XSpvyxwJXa9SD7H5f35qwFYjogNd6R9",
  "key4": "27R4bcSzxCqgdXB3N2SE4oUPLDzUfxVP6ErCTDJST5iRTsTBAWKjke8ZxQgXt8fyTtuY8ZLGQt6kpQ8HxNTygBn7",
  "key5": "3DxcByNNuc8mMtcKQou1QBjsvh7MtkQqjY5zijCRch43EKtpc3oGjuBsia7ruhfMcFh2D7gdXoNoyRLduNNkLeXz",
  "key6": "3oetSBh7FeyfgS9dPqPJtCMADnQ5CaQKoLL3WEnqEktfYgSPzSyKhV8vp882KJ3nqatcQ7L6VZZqJw4wfmAqP89S",
  "key7": "ndeSMvi7XP5fyHKZW7DheRCRp7QJnB4J8XtCSsMtwdyfyxc57Juxr9PMfD4oq47hQ4dJ5PH2YS615Axuq7AMBtn",
  "key8": "ZJuWk89P6XxLxQC6DzHCY3Y4gq4fznqknneKjoXZZ1JcRQFYb7edADDqobTRaiw8niCojg7YFdEvgcvoBXC3wWG",
  "key9": "4EsARFDGZTp8ujKuGxvUi5ydTM2wuzZ4FZsNXoEu3yPXmtejAbrW2RSDmDGLUH9APBi6cNBpx4PsuFQUq5FoYJ83",
  "key10": "4fUVTxiuptnK7oNqz5EQbG2Ru5rZh9wrGMQb25s4BjozUoEo4FJ4dHobv3jNX4JyxmbzP2SR1s2tKdTRXBoS514n",
  "key11": "5uBCPSRttstvQefzDdbSMDbBKvyjt9ioPigHNQH3XnXqwVfmRq3e9KAuux9CYoqhTVUzLn3132ATdVf2JVpZhx5",
  "key12": "Q3KR61SEQAWKG4r5JSQhK85i3vXQMbfofSq2jWzQuDapxrCyAzhBNSmuBVhY3F3LJq1dKqryoLtNrsRmwjxNBB4",
  "key13": "21ADgrDGqMYbuNGVwxKUZ4pWWNf7XijEMwmSo9HVsxHUmn8wmKSfAJhnBZPTcZbpmHDWtvJXvuQ6fiZ7QspvK93J",
  "key14": "2BADVuKz5QCVuomF3aFoGeM9cZXCGsNiKzewWQ4bx11Ttc75enC5uXUtPJMWgpoeMLPWCyM8LJiWb7tSp8oaQvMF",
  "key15": "4jEdAa3zkRaZCTG6EiGBcp1HXqUYtLt37aw3pDCFB9hKCyPQCNJmbFJXar1KJiFW1SGLE8kaWSeEnkqvkh59KMJB",
  "key16": "3TxQfnw7vaMoXiRribY9rMFVUeaHcJFcwBSRFvdqqf4yzdLvPgPi5XfdtAnf9oyaxUogEjCVz5Lit2USrmWKZ38g",
  "key17": "WRXvQXANUMrrrmAmM39JYDxE6yVH4SgoTxR1DG6WjLe1k2gUrL6NyMNiKRkJk8QmHNEo2JmpeG7hyouftAeXypb",
  "key18": "29LkHdoE7iAAHqoBUi5ztJ1b8YtQMcMgk2WojEoC98nTo2sz3PgYYeVQgPrwoLKhw1xVMhW46m8iP2YpCCDJBA9J",
  "key19": "5KvimhnMHfxW5dMy5qTGy7aoYWzeE6cW6EetDaPdq3XCa9dMSnAHTk8LWo8zohpkso4rhMmYjHA5tdGxi6rGxWwh",
  "key20": "4D7Ckb5xMReqnEBwhKz2qWEpkD2ZcrnhpyA6bSy7LohPuntJRwPn2Ss5gq3mjwENcJmM5jpVYo3AfWN8M9y1HDtm",
  "key21": "54YsbCqpT1ho2gotkAsmQyUR5tUZtSymn65SYmuxsJsDhFkmpgyiBXGiLtWUh9LbuNihwfdZardKKdeGxk158v1i",
  "key22": "5kx4uNzXtfDby7doEPpNEBSBw6roNAgusjuLybiUDwUkdijxhBGysvMqAykebjA616yP4S17uFj1XFoYdgZZJK1T",
  "key23": "3VSsYFX1qMjNJDnw9nXf1Drjz4xmu7oRotovATFhiz6GJjJm9Re2K8hzerdd59LzBrDFLLBbBD9LNHxEPoEDRfpw",
  "key24": "3okN9xZYpHcsxTa4c3LCyKCYskktM7voWg4PzNZu7TSHwzV2yYNHtwnPvbUBuCHkBCVDQ2w88Q3rGHWwXa9K1evy",
  "key25": "2TSYwaKRCxRjdXUrcewN7C62FsdnYpkAhqbidjPVDAf7Lyh1GjC6cKht9MNdfu3KVve6RChJc7qyW5MmLLG4TmXa",
  "key26": "3TmD6LG6s6oaZSWXwcxycz5K6nBADAHPeE3J6zdA8Pnn28EHYFcfufwmJupGBR1QbJKrTCt85MJ6XHJZN5t5BKpr",
  "key27": "5VQmFC3BJxV9sVebfiM4QTV5Bywd8sCoK4djVxvtV7SjscwJ7oofAqnrnKUmcKZU7Pimuro4srEzcEN1RSLx4VBQ",
  "key28": "5vh4iJgud9g1GkUXyTkwSUdKg4cyDbE13zyjuPJctm1jB9RDG5vXmyMrnpYkRX7jcgUxE9krNTVZEGGzh1cp92pM",
  "key29": "5y8oXeMABCabCGjpm2QAYm9WJd6idtA5k8MGjnuAojVj4PoPahi79ARosaJoHu3WUE7eFrEK9o9vtg9nD9f6U98P",
  "key30": "2XrkHyDe1FbMavQCDHbLHJmdjPC8hYA86Mcc7QQuGx7RA6Bge1wDqh1Tn939CnmaVh6BqUT7HZAD3zeLt6Lo1rJy",
  "key31": "4Mr3YhycCZicTQivsTWGJptvDDtAHLpYZQWZ8wJRjYEjbQzdw1NpWL8i74vpLJtFq8zpE2A8LkMG5ZPFpk1reh1M",
  "key32": "3vtbnfyxPJPxdxXDrdEMmCf8RHRLTRDYoUPs4DF9i1Bp3Aev8rzo29MQRs9QZsmKk9Wr46zbEKCHCpE2qowR2B1Z",
  "key33": "5mfjnwygRTKmyx3dugE86jWvgxfyU4DTcY3XF2JFn8TZF6F2d5bGfj1JRCGng2E1bd1UjJQvhU6avbWmKu9RL4DT",
  "key34": "5iLpbCTrSrWA7ZDewqKzz2N3NRbPLbwc7MmeyLQSVAb57tetHKEgBs6vhJP2xWaRK3Sp1Hhg2Er4aVUEocNuLScq",
  "key35": "4nitqM24cQqjHbDAVuEzU9vpttC2tebQVQ5KzUtdfFiVkiA9peEpG7dUQFzWBegtJdox9EiHMDWdmm7GQaz5HYbV"
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
