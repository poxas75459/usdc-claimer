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
    "67gjHHQQsJ7GLiMgJNctmQBukVc54qJfq29DHNmZQv115ZfrS9ZzJfzayw4ZcACzG8yVdRPHpAagu2vQFSGaUh8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTsdCfnd4sa9UgHTk3rfHuXyYMuXRjiPNcZGQSARr2j35UH7BLYd53NWZYu8zn1LcyLS5mqfw135idYpNEi5Fjj",
  "key1": "5a6o4m311L82qT1zZx5PXWKWWAyUsab3u48Xu4JY5aWuAiQjrrGr2PYzv7qNNKCfZTDCyCT5KUx83TU9ig55Taet",
  "key2": "KaMJorkjMTaAJz1TGhjVKeCybcKi1ZByexanYbWxJchCNbN5TtVKgMJsZPWPa2soZWoHxvqtBhoamyD4Xc59uxd",
  "key3": "5USGWFagtd21fEgbZErXsRxjnueN7GByq3AsTNtiCAPTvBYCSc6bGFt1Utwtzm9hqW5abYWeVYHMj8Nox1FpyfE",
  "key4": "3MNCwiEtBwiZayfixiZj61yfQ56gAfGsTCBLE7dSp1iqVKN5rBtuPTAs7mp3XRBQ5gQkRuQtq5iLEe4gLhSoxV87",
  "key5": "2KvMDC8a7vHBkUPF6ajdCEpFQsjnXNYiLN3abCRhVU3Exavi6hSH9mKP4jDa2ftdxJv3jtNsy2CLgT6yyakXV2Q2",
  "key6": "31MDkeMRoZMyxoL7UEHhKmwoGmLMUjo8V3RpfWBkKTKRghUWJ4WoujPoP9AyBKYVpzxYEwdGVg1KKe1gMeLosdkN",
  "key7": "2hJvmGX3Sr6uwW85CfzVkGkNKkAVyyRepNgZbgF2YdcUcgVbTk4AD1Vj1LJP8po3RrWoeTuSSYhsMFHZeucf1gLC",
  "key8": "4F5EnhVJkC3R5om2agMDD2nPga8W1PPDJrcCiSF6vhB8cbT2QtuMKLqcp1QpQUHp6N8PD9uSYujWs8TCEfvMmf7x",
  "key9": "2BC1AwzntwacPfnjnZLEGDb5qqtRAveuWLApwB51TrxW3nakE3CbmPXzQWkn9CVkgE6jXntf8rQ3toSGW1RuUJK9",
  "key10": "4V1LmQAoqtXXGmRFbcftCmF6HbqFzobvUw6PznxMaxDx4VL4Gwx13qnsuZovBLUbci98gLinFykgo1dkdvVUNJkN",
  "key11": "3m14TW3GpqNfwfoPgwyhoRbZATUD5hBzjjSWXjQQvtBaGoZ77TEVRmCc7qAuV93JBTfoG5JnX4FZ7fFYDgj4zhA1",
  "key12": "2hJvSpEJHDmGT2tLSeEr45U8Db572R2xWRGaTyVEY65LcwDgb2cD8cFPJY4D6NPrEgBAnAwdnKjXf9n6Ym1Rizw6",
  "key13": "nvWd3xhgPi6dn2N5xAph6TYNf4nc6F2L31QP9gLDGpgFRAiQSgRV1CzRFAgHVbPj5xRVN7Zo3BkSHTdg368jogq",
  "key14": "4ZdtRN8cpSxs7b2i52Y23NbGmW69Y4D4ucXMBanKvaX6VycAqawJab3fooxzvSp7tn8WWRxfCfbMRcUDAg6zEyvH",
  "key15": "3F1fEHZMKjUunqx9qxkoRNrxFDmynqxK1Ukj3WqYCpAv3NzQBZ63ZNC85qN66WYTHwieoxuyUrjcfug2TMwVJggk",
  "key16": "3UphYaEs6r1RaxGh8ai5mXGh5cnWqytveJZzxWtiqhhLfp5vddxaEfMZW9BixJja8q4HzYUQ3z1yhtdESLHartkk",
  "key17": "5B5UFZQQPSfwdf8MkPHHooGxHbUpCV3aRhw4RCYAFBzcw26BNikBbwJpPvjp9K2PYv1jbj2tRTA7E8FW9NgZ1FDD",
  "key18": "3pxUoFHho6fs9Upt9mKEoGzMuxtwDJtQymXuodbLJ6QNXgJeAweqkEcQGGjEfxwSFHRSq9ytUi6xDjFTYjWEjw3M",
  "key19": "2RCRDwUX6ewzNq5jHiNkXUm2y3dCkLAcqsUe3MUHn7NbgeqNdpdDyVcbq17CZsoo5FFAQp6uGhnhskjfZh7XYksu",
  "key20": "27CWWyWttfXij2RgyLzKkG26usT14BNJbFBMnrJYmha54LbD3Po9U9DUxbJYCBJLZaTH46hpJK12zHaFkkFiTiUA",
  "key21": "2KFqTFJXtWrGCu1D676KXp9wEukHwC4mwZX8MD7ANhzrUcpAnqpLvFNPtzPTUsvpcdPuqBmxtfqa4tbFMj7texqw",
  "key22": "4EqpnkhYfMjVT57LudYKaeGDo1yB7h4yRXwyY87pf7gkUbBGLmvjeUJwTVovacw6azYjjXdUBd94iJHNuoZpKS6h",
  "key23": "58Dc7ASQM3bQqnchtHbsgHRki42mV6NYq2GrTUCdtJ1brFjH1a5MSs6qN2XuhtTYVnCj3Uh9WnatfY6HyhpkzUmc",
  "key24": "3g9S8sxw1mon6CSYyKa37awYYtnza6unuVnY4WmwAojwGiVq9LtXPMpRSUGmLHnfhYRWKfY1XQoVo61k4RXP8APS",
  "key25": "5DAqYALBUpbQyypPWakGHxNP5CJf47rsEhRWM4aTiRyb5xYCQb3SwbFhNd2iZT4sz54vArLWsjwWe2tknnQWjLFg",
  "key26": "5wEJAGueaNiRJbX95XhQJwNbwVoL2JSz6NxSApRVXcCACLDyNPmasGKbUNaPAEAtvT2sdFTBeViwtuJSkFVdBLym",
  "key27": "5bsEikvDgQ25GLBNmDpEFg89BEvTmGGhdTBDoKzo5wFdM1pqkkvGm5C5LANKAHG3uoJLW7UJxVZAU1hSGssyKagf",
  "key28": "5t3t9ofhDy8Hs6ujSZU2gFfzWkxCipcky9vBQSZEhjSGHZLZvR6zUf8zJwhRbM5kxunxrjKTvhnLechWf5UoRRV7",
  "key29": "5fxaM8dpRTavW561d6PhDWRynNgZ3mCW5R6C3etgrg6eyPbauQTVqgY35mhaAMBXwVQFKmhBZdnf1TNCWZ9wf6Lm",
  "key30": "4oWkhhmPKdLTFybt9wGDsE2x8uxesPws2pZjxAvRMbGconSb5dQKnfpZhZng4E9FKPBcG2UiJnvRVYNGvCZAT7wT",
  "key31": "3knUrue3Bx5d2uPxcQ6u9D1eiJ8DhRoAmMVzPGvvvKuFNPFdTTbMYa9uMQCZ4DwSiqNm5dRLJDD6u4DpifmTJgsr",
  "key32": "BWdC6Vo7QXRxLvcSKsbZAcGRJv7CvweG6UxmUDzRYBNY58LdWVJ6t5DyMHNC9QXd5TFez3CqvKQrqVqAMAdNPuG",
  "key33": "3fGMCHn5VarzW2tjmAzGf38N2h9A1sppHbDfCXktwNvAUDLKBwfQ2od5zpce73DAqsk3FRT3etyC9t8sTFhRSiTZ",
  "key34": "LtN6VGpH8jZ8rrMMbVmvABypDaeqtssvtbkk3h4uZDAhU3M7am5f9NjaptRy3PY8pwJfhhmRLoVENMUsHBzxc61",
  "key35": "2Yi4KcfJpsAjh3T7xmPpBbLzYF84TAipd6F2F4sWwjYoLhTZ9ug4WpR1nxpfm33Bs9bbNTdw9dYtwSLtGokJag44",
  "key36": "55bbQDkH1cJZ79ZroJmxxyk4QLVd11e2cCJ9GA3vyTWRbrehnoUGciPaKZxYMhWQ9VBhXoXiEcpH8WRDMmw6raUx",
  "key37": "2NBFuHNTzGSxDaPpH8qxVaRs7FZbZP4mQQfBxx6zSBCvjzyDCBBN9kBLhFTXkpd5S2jCbLgpwssMcvCUyWLsoY9Z"
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
