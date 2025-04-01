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
    "4f4XGiTaahEduaQcosXdogQvjDY5gjHVLKtNT3tWsTQhKnW68Nn9YVcuJgr8eh363xpwRU3kcWAvVhMcoEBP7biC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1jduS3622hXih73dKWb3DYSoB6wc2bG1GWyjq8fqXLjSS9Jmt9eq8b8wNNjeJtRYmc9GboS3cYH7dhXBpSQYaC",
  "key1": "3Gypby4G6DDj7rHSpQyR1ba3tmcbK9tJ4VutqMVD54V4vMUEqA2paWwvZL7ZUJHgFRHUi1AmcQ5Q6HTrinjdPXKV",
  "key2": "4SWa3R1FQHYKjS5eM3jTSqWKCC5CzTvAz7cog9mEH3jb73SBgjHswr7bRZPxiuyMwQy21z7LwrQeYrMCn3bNjd9",
  "key3": "41nr6rvHmYCdZdHYVSFqhnkrr1NZtm24F11WEqNAHPwGN1FFJqWTUGej7hbekUpEwWhytbegGmxi5tbr2izTE7Mo",
  "key4": "2HGDzthdKmCu26kck6ucwmQEZCHhuGMYC6pamsuXWJVnqAVxFiQxP23dZnWdCC4LhBY6DmtfsckFB1Y1TpADtL34",
  "key5": "6qpEasiRnQexhJx11wBQNAhww6qgjp8hQprgkgJPQG31GipmFVxaGtyi36KG5TUnFB93fg8j9Dr5X7AftY1HSKL",
  "key6": "3R1L4yQx2t1FSM4mgsW4qXHJgioqRXdFtiU8yCJD72LT8s4WHiCkSZuxiFVj4JH3WATpNMmCQBw5xLBSndKtisge",
  "key7": "oCj11fAPwzNC7SdhyxJmWLcs31sP9qTx7d13LrW6cRGS1GWJtYSDFkgAS1HBSqgtcgQRzVz5vnMB7McJQVp9zuA",
  "key8": "v9YK2NU99yz2gQM1KkJSJB8xfPMiD2H1imcshmv6Lmb4qjnp8PhPoe1UP1CzMqBqzDmXdBCKRsFCn4FnU4dtfHy",
  "key9": "bwttCmAXcH3e3pnTdHWkCBGGY1mV6iKnN8o4q9sz15Kr6LzmrzDtmBTnrW4YEfiRGhpKb9qNvnxdK4XXP74t8NB",
  "key10": "39VStMDdsxr3mUdCGBiwDn59fMp6bS4J6nNR2n2rh9fKGdhGm2gDBk15NNQWYEP8a7FmbjYpubGzzmdpbZKCQUts",
  "key11": "22WLNHD8fJpwVXvnYAAg8ZEYxSNQytJxRxEvjmzNFwtjJcdMb1zzLRianoZHg1H6qWLj3RuLXXJV5hzrPMTF3RA9",
  "key12": "4XCicTfkbjx4y3yEfGH16CCtKQ3NgNTvn2kYunxQgLugkbbYJvsynot31dgg8e6hTdifbXcDpjCGnLC7hYbfPzyt",
  "key13": "2d31aJo27G9GBxJPLiDtk3tGMB1o2nXgo5pKTAFQwx3nSAfNdZANAKdgk3eUEcBcAWMNiQMCCjgt5sabnwFhY8qy",
  "key14": "zjJHy46ZeSFM6s6zHd9d8Ht2WuYpq8K94DXUxZxn2CSFMJHRuxRPYvaM6Y3f3eEfGy3b4k4PC7ae8PnTkhVGo5B",
  "key15": "oWgFZnHEYc8B3h8QJXgF5AcXh7tw96LrpSDTKmR8e6grLoK9HJR3fUKaBCu1cCqUB97e2DyBuE288uuoLn2EkPp",
  "key16": "Gwgb4iazt7Aue3d5DmL4bVGHrmcSQWarYWTbh3TE2V4CLLifJTQX982BJ7UA1PcnvCu6NPCGZbvp2CpqEZXqQRj",
  "key17": "4jXZW9oa7Egqf7G6EnNqc88umVMVFzeXmWUJBnmgR9rVaHt6YRUXpsPD3TVGnxyyr87E9Xhwkoty5DPZPpQoP8cF",
  "key18": "3JSTYEB4XHWo6TArBVT2RXbGoDhVxf9EA69i8z2eNLZVJscryQD3pbDFRHFAc5U4NqG7DJBRzAwiewJWTcBZPmzb",
  "key19": "4HgTnJzrEP9ZG6xdbS27rabX3NKbeftP4qwZRz9iVqoYYhbBvgLHYeWEXuxvUEVCQLrUUXLa35thBiUYFZ6hD2z1",
  "key20": "5bWpfqfaDM5sfLmf8PXLqKetiJ6WxDXjkGc8zZcaoTpWuqNCQWKE9B7HYJnBLn3oDcNCovqEHZMNadbcBxibH71K",
  "key21": "iBswzLRzu8pxDa36NqpKjfNNWNcDzahLL7VyGLhDmchi1WFAqXNj8w8PPs6tLS5UHscPuekuoBKNbmaexfuskkH",
  "key22": "4zJwyWbvf5cUB4Udw8XQZn7CzyGpRW3HdNaX3qnyETsWa3cZvvjZneUc3EgtS6swzxQ4ihQ1GW39CX1bRefsQ2Ww",
  "key23": "2Pf2aV85ivExjL5dUSNR3hCwdajNcHEydJk9bPkEmP6PyUQrnmFEG1mNSRhpE1svJxsznBNVKZEmkrvVXxcvB8wj",
  "key24": "3vMa3fxxwg4CD1qWskvtrv9Twdbf19SKYJT65q3nzn5CWLoT1NRt33sFAB2RB58R87HYHbHS1wvxAHS37LVkHd4Y",
  "key25": "4auFg7Mo8TF8Tr1PBCCepVJty2RfPuWZXbdEw8UX5iUcVncUGHrb3Mt7fvoS9Dk2uFDViz8t8bwJ8cbYCyBfRspV",
  "key26": "Qq2QKzr9vzGuZmvmDftCgYbm4FLRTycurdDYNPJeeUkdf73KGH4Zwt7Xe3wNKDNn2NmekntMxr5bsA3XJRRhDBG",
  "key27": "4CGT5VFrSjBphEcxra6WHGLm8g91EVSMp8zCp3c2C4dcM34XocrgtavHeh2xtPf4cRc92jwPKWvCHiaYsLxshj3b",
  "key28": "5F2eUgHzLvvkLtXek7Pu8nXfHBz7G6KPrmeLgDY5ZRG3xEoixN5AJhPDEVj5a7w8ZT7kDN28zqTvgvQkx2SHrAyc",
  "key29": "568wn9FhLT1sR4sEFLRVdejTxdvqExqVDpTeYRU1WfmGDwUw13gp2EgD8AqzX6K9Uizbw5XSFwoNtzzLMaujFuMf",
  "key30": "uQ3in9EWh8aokF9noe1G1nTvqANz7KxNhkMMTJm67b69FikC2fE8BXuqzKrDcGmxE8i6nw1VPckp5c66kvZuWhh",
  "key31": "5t74etJr2b9rYwRqFAC5iqctDyccMwdybjrdK9GrfhizmNBm4k5VzaH7kC3YXNNA8vgfsbanPoyag3gvsjzQ9h3u",
  "key32": "2gQdjuwMYeKb4uvN3MAvZuX35ad919PcgYJ93Qt1vdfisrsbHtucBEhP9d6JkQxRyLqbziW4LQwc77DLuWBXQsHd",
  "key33": "5pHdJbhYy19rih4vYavNCsxhQtSksbLL2nSAGszyLjUdcBCjSRG5i9yHNqhwauW1mvgjY7TwKAizoYEkN9NxCQPa"
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
