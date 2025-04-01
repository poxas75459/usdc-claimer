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
    "3v68Yqvcvkz3uJHjvV3woNHgmyE5uRw3EbigVrSuXSzV9RWc2s7vZ2zkGLSMJReFThStKUnwPegyczbBymQWFQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48P57FbGcBnUosCDM4U1K58vken5yfK9diWmReuAD4vyVMqusfRU1aaWLeWCVYxRNpeUabGhQonkZer9YWGQ1VEZ",
  "key1": "g5TXaLdZ9KtCbmjuacwm5Cs1b5xCAecTu5X7QfgRkooKNsD5Tbm5PgDXeFqDY9f9Z9g1ngz9q5ENzyaDWL44n4t",
  "key2": "5JYMgv9DzdC5J4YbUAAmqcL2hyvykteDoaKgKEpUPJMJfYXKfNvgRuQqEExgynq4SsmWdg3Hx2FHTuBJnpaRy14B",
  "key3": "dDD8B6saPbre6dczpLRhXZ4CBCZD536nUbDmYJAso85iMHh74fLko7TD1ZhvWvT4H3GZtDZyKbo3mnioruBsDqw",
  "key4": "41pF3P3h8475W6k5Xc6tXK3TkJuPAy8DeCvrEhovNaxyUGPHo6B6VNmjhRV6fNff1Z2cQnd5L3c25bc49MEF7E5C",
  "key5": "2GqhW4WvmrLD3esyHYXSAfgxXGQfwChHx9BM6pN2JxRuJoUdiQi5ExnFWt7VuirLgeM6PWycyEpESqWBbSj2biYn",
  "key6": "4fhvGXKMJ74Ryx4ZMpWNqRTkso5GH1JZvbBqu3mCiaKAE9oiatsav14RpAeMokkRNkLZDZvJh7xPH3Wo7RZKhpvB",
  "key7": "3ApQTPTyoin5ZBDTGgmqySa6xxGYuYzKPyeVskahXLhyDvYAV2fuaPNy4vVhoyqJhjTzQYuprxvDSan7Yrf1ejVy",
  "key8": "3ervTkBCWwtJCa3NS3MYiZ1Qo71nLzFV8CpHo1K8ow2GoX9kWEtPe4DyJQhLPgArt9F5ef6icspdijQPFj6wDTey",
  "key9": "3C1VGe6v1vAx4TEzdqSwknDSGZYpU1heSjnW7znRJtmiGaJMYNvTgGQCquGYL8oyTqRx2ub2mQg2YPF1zfBQwRBY",
  "key10": "3THR6R1nxBz6qNwxNxWETYr4fwBKMQd3gduFwMXgfrmrtQh4RydbhFyNc3SHxVgXDy23xG3m4qvqNYG3jRRxu2rC",
  "key11": "4TghfcqnaepAjgR2pJmr6gSczfBrNYHXq68x8c16tMsbUTewzjtmZZnCv7ok6PFoXELA9vrWiSNgxPZSgXHvcpee",
  "key12": "3ZgkEWcrM3Go3b1KKDJLWAeiXe2Uz12jmUboy91w6F1oWVXyBVpeCgEWNG3EiyzxSKSc3MkUv3vrDQX97kykpzqR",
  "key13": "259Y52xyPeusbivDdhd84ZFboc91iBitveTp29u8mgwmVbUCfqdwhpbV1JP1QuDDiqKQFPvmK9viqeSB5mBaQJYm",
  "key14": "5choDQps7AzvZPRyLX9d13w2ZgaMCQNBBhZfbeViLhmbxZj2zGvuUAGeeGVRF1mMs6ZHuwJ4i4cMHeeqjgGhtGZi",
  "key15": "3EZucUfYZ2Z8JDjv1poLPGYciAus2eoJ9Wjn3GL8Ed8SXDzDfaTxUFBBBFrfp4pi99HLz6xT15mZcAnbqu5XXHwi",
  "key16": "3arm8kQSrQ7KQyrVuVEwtD7dzwKPEusAFgw33wfm9BNUf6SSNweELtpSKhQtmRveA5gMDFBPjo5khYMwmK2FpbLm",
  "key17": "261ZHLdintLEBryRQHoeQykf8U24zPqhzkuHxdF7cPDx9QYB4AcpmRPyT3daDWREgPAUf6Kmi12Twf9HJXwRTcWN",
  "key18": "2Vg6wMs6hSsczhST5kgzasb8N1F5AoSWZhM4FiLSebTSvdULSdh47RZMKDnyZwKwQktSVgXTBSzba76isat8HMAu",
  "key19": "2piNits5ZveR29PAWenUeYHTfRHgkaj27N8pTtnxF1e1wGz5GAtH9BiFR1EkBZG69MQjP8LVbg2PhLGHdQy8EHE9",
  "key20": "dTAwHnUmFCxbk3oddVsR6Xqoz15nK5t2CmekwX9k1YYUQMXk1uQsdsnZo7mEguZByBNzmBgF7HbwVkcSgGwNGDt",
  "key21": "5iCihLYQxqe1BBJKZWyXRdCVXUpcp6LGL9iuwV1tBuFWoGNDq1PpMyh8wzLrAi9SHuNfTXQwthQAnD3fCpkJHgZa",
  "key22": "2K1N73xihVuYKHUDbGVxpd76orT6wU1oyXb6HMTLyB1KXmuDZ3ZHUPB6Y5Rx5nTFdPi9ZgPzGi9qg9udSGHM7sQF",
  "key23": "52tfuHBoa5jpMbhNpnb9ETdxwf47k9vGEZ2aXPxWFuNU5yLjAjTh13iBHT1G9t9Mb47CUPR4t1MQL619J4poNkN9",
  "key24": "4wQoLEdsWgy5sQKKoQv2rh5kEM65FW8rGeJzJ6x2xhLL1wF2afZhtmcvUEoUaANqyULe5g1LXRaL3VSFGQnMbmdS",
  "key25": "2BSwJfE2vnaa2ZzGGbrWxYo9bhmWagTt298EPcGhuDQ5HtDYuQiyRzCFJK9htsqNQStdP9BovBhrG29whwcHLxjw",
  "key26": "4BKKZP6dFtcUe8YbJ5nmB3uFG5e8a9ZFK9Yo4sB4JFSfJNwQv9othWJMk25HVcyEAZQ3JgqJcwNmw4GZkcHcFpro",
  "key27": "4fZmMD1BMMq4hFdCSJE5CYww3PdhPMUbixDSD4HY5f5GETShKNkvRe3hwrDejwU7UNyD8ostsXbdCbfNKw6T6eF8",
  "key28": "5FnSS6XJ9LAv8gnMkumy5q5PMMrHiFZAUBrf51EYWTtozu1ggYEZcjJG6UvYQrUawMFXuCMTtGdSebz86DR2BCVv",
  "key29": "3a5tCQiwmSwRZ2mMBd8t1zq1ajGZNq6EYAUbRB5NtKjZjEbP8F4aud1ftkUt1kNrEsf5NxG2VMypnPvyvTNwURuM",
  "key30": "zHv2vVKg4cig9yX1uM78HXMB2TQNi9QXK73St8h2unNCQBFiwMV313yAz8rxghB43Y6wcWXnuZZPv2NXSyCaqyU",
  "key31": "Kq6ye9fB6dSNbBqtBsJ4m4tCgbNhfmkwAfwaitKqr5buodKN2MNJfu1NiAvmW2qj3Z4ghXsQccF25stYcK5xAf6",
  "key32": "4iQAsUThCKPyW7dcpT6BgWbWiAGaPWXRg5P45Aki9K7nWtkDxe1EbDTFMbhMktEkyvZFvAJYnY7p4qFmf5ET6nVy",
  "key33": "G9KBrS33mvFDSxBRjegAxa35hVcUfujsnTptHyFHfcN4Yu7PN36YmMHdb5bVNaNYFV9frqKUKpBJkHFQjZMJtTx",
  "key34": "4yJfMdJd1G5xBaMLbD1KS7AG9sWzaj6aQT6oTKUpmpqSTwy4Ms9caLyQtLgBXn4m6BqU8gjTyvB8qQ4qVY67oVfb",
  "key35": "2hhcwknAiXoTSjUYAXSLQmwUHHfo4bZqG1MJin1fuMt9PG5zDSo98E64en8V5YcB77dR8DQ9SBYstrr4F5RTGKLL",
  "key36": "3CyuScR3R7QVFj4rgRHzYxZXeVupM6pFw5hD7jc4X7DKu7yWSr9NzrermE3UnUYozL1rTQTdorhibmmM3TveQDkP",
  "key37": "3KcT21YYjYEgjCFghyZm17g4M114BiCQCeb1iCFNKJMzs2buXA6fGKmn71VBrBgii3PnbRB9qY27ENtXRaxNg2kX",
  "key38": "3f2tgRhPjXqAmXcWtHDyDZZzYr2BRMNGYvgNSok8qC2KQgjvF6LVjzae5gSsDdArbNmN7dcSeLe8gzxJeB3abnNB",
  "key39": "3HeK2EPnyqJtYGcrXZVEKXiPQ3hj8RCP2HXmwuVMEuwYANvyMnWJCqEM5AWSRpeZKhr3oFrxuHEX95QpEmtaEaHg",
  "key40": "2HX4Rqci9DVQy7usC8f9aK8ZM7TR6nVyB1u7Qwi6xaBCFHUAPn8mKJ7f8ZzoLFKeGh2dAwYyfHyzB3jJtZxYauhU",
  "key41": "5FoveLkLP9hPCvuwVbtGVEjjdrPBPBNHm4k4hSMJNRikHewwREvZsZsZEsXhC7D5YiJ7QRw4i52kTbUJXjRgjzCL",
  "key42": "3Ap55V1JGYK6qreafcjn6srWtoNuqV9YfzJdgbBpuNJKiVu2H8jppcWL4r1mASxrM4hnUuznaWWabVJFCeA5jKY6"
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
