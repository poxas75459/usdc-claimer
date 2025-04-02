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
    "2sMnXV4WymVurXCaqWVJxsnBf3cnt8t8BZrMmvhAUgw9xEzaHctqPSr57JbJfFdes3szEvhZ3MftB5osK6atyQSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWVKZJaiZBYdWZzggKgbhFRMTXv4t5P3JvXzzEcmfqtZXJ9rrwYGJhntD81QPHq2KwUyXUuGNj4LyKFg4s2a1gW",
  "key1": "4VjeBWwX3rP5mckaUjJW67ZKkGYG3sVuvB2eSUYiZYm23ZgyC1Lvf9jftHt3uo5eSpLEioFtrVpAdwmDx1jJKQY7",
  "key2": "2WPW7FcExqCvwkBBrw8cQVw9o24BhCPkbtdUqnRochx46mPAFn1fbivQFQb8pkb2ZjWLwK1sYKRcfErxeuygGw9U",
  "key3": "64C5kKoLNpwnm1o6xqvWpmGjay8XVhrrhtNKyxKqNhMwn25ZdwDaxgupvsTTjtaJJN4LTGQsbKqvi6ypZkTyRZkC",
  "key4": "3gRd7L4ScZ71dRR2NVbcV9q6gZJ7MuKPvP9a23rrHBQ26EGagqUFBVU9K9RjN964xy6j1xc91Nc9CYwZo8vdepd6",
  "key5": "4rMWWhZKjURDCK1sEwKoHUACLogYJ1JGyD3YxeTqPp6DZoqb86SKWkjBSHU82VZMspJHHbt9cbMx1FSoGXJvfqLc",
  "key6": "Uz8wTn86T3kkRAzS6fBKHjD6ENoqcUKsv18BMr2rtvjHYQepoa5BrvCWybqfsnvJgQH3adjenwwvh925woPu2XM",
  "key7": "2tcuFbEj8MuCrokwpi8idMkhnNFVuvEfT5A9yJuWtUQCx5k9bb1SJUDvBdcjGfvGRQLru5wh7wwq4nmwDSV6nhUN",
  "key8": "3e5vqEBte4PgJaqkaqj764fyRXAPfe1AU5dwcM1Tpg29xfiAu3W6WDVhntepMsNg8x7HiMUKws3GoafHgTe75Tg7",
  "key9": "4UDxSvBvPj3HM3dvaKJCZ1ipwiLTiRoneVQUg2N85CpYSw6YGpSfqFEBYEQ5WVFbSt2axgS7amkzT6Lm97Dq8wcg",
  "key10": "zJRr9TmQ9oe9TD3etGtgqBMXPYmJtX3LjrnDmfhG6G58BmP8MBym66bqsXxo5wRHRV6vTS7GiwUbDUpmRFZnNDd",
  "key11": "5XyBq3zVzoxNRrfT5it3oVAzU6ddArmCzSE6MJAnWSLe1HWBTLKLRs6mZLLB7tpgRh6vYTo5BHSfvC3DMzgJWh9p",
  "key12": "3dd3c2sbfTKs9cEL6sSDCodnXLwDTfm7tuHLbWmmgiHpJhXTqB3Sf7MxWYDHwBienyBNFbmjNBpuVhrN29ztENRZ",
  "key13": "2HVXdm4oi1NXw7H9Gt7zvyDBLSZGPA6yp7BMmXAps5p7CPq7PucUnbsiFkTamvZgCPn8DosnNqPTdVCuXZR6Myjh",
  "key14": "NucLbWQzjsH7j4F11PDtFmukopAVznZvwQ5es24iM8r77pUxYFpD9M45Rwrv3n2prJkG4Ty2QKSLJJ6PWjf5v21",
  "key15": "4QmYKkYaaC9Ut5NgSnTQXDT2sPWwiurCRew3cj3Fv1dMKdkVj62Ck3524W7jCRu25LjSed32spVhgWsCeYMn2M8F",
  "key16": "5SaLQvNhaMRCoiashhQLoeMvMYP2tHaLQaCL8VNVWdG42cSzDEQUd9DZHU98JpgGGcHefy7ZU8u93ZaLmGavXCNt",
  "key17": "2pDG18BQRpXMuCPZHS813knKVirKXzhPiD7ZLAXzq2kCp99eK1XV5TeTdiTBXweP2dyPLJxk8s6zfje1KL72M3ox",
  "key18": "2o4rYStCn92kgP6ZYNBWq7gSKn6hG7Eq5ZckTB2ncTbqen82vUAp4eKam28jNtGF2NPXH94hbLBKhgFyzRQN5V91",
  "key19": "3rWQywzB2aE5FCXpWgnaTM1ERU28Jp69y8SmtwyA6xzRNSWXjmGnpGS2fkJxbarsbk8sBuwDSrrS77o4BqeXJVw9",
  "key20": "4mrkdA7sCegE6hFbjtHqUQcEHGLK2paQY5W2R65vvCkB9jsRP3fCKFZ9TQvjASUnw88A3ZF5geAu69rSwqWc2jQs",
  "key21": "3rUdpgcA4RqarPd4fEtYBTpoMuZjX2q7EMuJy8hSGPpbfFeoBJDGj9jjvH4HNbQ8rp6yqUCgH9XhfbatXEBojN7N",
  "key22": "5KSmt6GPUUqB9BjzQ2eYbMVQQJYznKhnzAiQ7XK2iCa2cWL6LtTV2Z8TqCWycFK32FuwwqrXAiXtJMVR1ztHEPc3",
  "key23": "57DjJ8TxbuLoZ6GBosa9c28HeYrH3N8AqZD15zeqKw6PApECjUcgjWyZAkSA1fEyv9nWbFMvsAkbcAWe5iSUY1nb",
  "key24": "54KT1E9recmRVtrTTX9M9yo6gn4sDNzXMSE8qU8pwzGXmiHLKiQ9u6W1pZ8PnvXzdBFqQpLDqVwBzJQJTEuSrr64",
  "key25": "oHP7NLYB7EyhYx8TzerYhz4BwpLsNfjtEL6irUJ9GyMcwuRv9CUPCxbykWE5EKk3o69JiHgEKaZxNzEo8nXHxrL",
  "key26": "hxmfnNm94vkneXvJMC9bWqCDppmmr51hS2ezReYftkUr3Z8xKRtZxWR83CBN7CUuwU56UBJckK97DBYPs68NFwJ",
  "key27": "2c2spDCBU6dYDRUGP51iMPBnEqWTxGeiTKVAkT8QiZ3i7QvH2gVKKQnv9eweUCxDHciGcKZVRt7cu1a3BG2jBCsq",
  "key28": "5bYpaVin9bEKD2Frr6u6TrWnoptR1t65vsUFZhokgVYv4DCYioexTF8cSHFsc2BKzbcr4jJBZyx2QicDwPdc2e3z",
  "key29": "5sNa4mwse7tL3G1YSAk7MrpH8G5Tuo1Kpm5KJWHyfM6bV896aviGaFVd8BfMGpjH8BY8N4t1dM56gako6vLnAfCw",
  "key30": "2yYGezHsup2W1eJovMqiqKJcKJ6MqTG3AzVkYqdvsXkcvP1hovnZzsDCPe4R3C8ryGjXwAtrvmMBHYpSWHC49ZCo",
  "key31": "2jTDmp4ApNknSQbDPcR3axAq21c7c8xQAHqv2sVCYLETMuzeFjNt6dWZt7Wx1a8CsZ4A2J9hQwDFCd1UWsY5j2BM",
  "key32": "5DTLgYSfxZApTAPvNs1QFjR1zNswRi1VVoBwxrNvMMgJgbngCwhNmkY7JLfgNR5rBgBFfVfzWNhTWXjfGfuafbUz",
  "key33": "3Hc7QwQkDqujE4qxvxrKXXuTC7NscoefszJUGzkWLC3xV1hHzKxB2BmUw8C9TGWNokS7kukSh54nFwSeBvDSZkQg",
  "key34": "5oZD7E6ogb8wYfRX2yAZ4Hmjq8epKZ6jP52nc6wETdbPKoftceRwCDtaXe7zNtYZ4SdLByAc645yZ35SGEdBpqng",
  "key35": "4DSArR1fNbgqExsARTUArvQQQHPJVF8NMmpnrG529TNhtrUg9WTGzh34XqfeLKTikLnBPms7mvYceFUfK6Hb1YYE"
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
