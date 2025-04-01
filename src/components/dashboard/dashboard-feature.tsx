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
    "2eqqRgCyq1PkzWDUKi8v5bhcgVxSRrwMNn1X7FsRwPauSoM1e2MzXKUuKCq39NFMpQohVyfo7EMaXLqdBYZDRmWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpZQLaMWWmPCCAcDTNMwfQjK3ym2p6u3FJ7jaALcUkn9eruieppvtGD1rGYYKKsTYxPC7ycZLUFgcJcR4Xz6Q1Y",
  "key1": "2pmeWY9KefdzHdk9JjhCBj7W2EmpxJzJ8mceoKT5jHGEFBoE34wF5Gs8DnkLKVyUvqQYrgrsALRVjq8X9jepNc1x",
  "key2": "rmJKmSMVhMJShomCL7JPxJRYHkn9LvMjoSNKzRvmYC1rXaS2iBfduxeLmWAnfhrsVLDBmMNXAcnNbJEsiMm4MWg",
  "key3": "4tRDqzbURMuJEz4keiA2dww3w5bwC9Ankgvo3BsPnNee8fFE7xCdEauwYjGdpbd1jfQhxwhy3W8FAAZ4su97KjGy",
  "key4": "2WjRvNHRuBAHQcAXtULH8WRpvbtHUPpMWBfh5KWMLB3oVpt8qG6Mcojzxuiw8rdM2pJygqprGgy5oaEC2PHNqXa3",
  "key5": "4Le8jnpsByR5zc6HbGS9cWq3WcyeokpSmPdRPBEeh1xiKWiXdgssp1mobynYtRPfb4tjEcBojacXvZ8pCbBYjXQ7",
  "key6": "5n11ynLNmeCD7ZqVQCf3DFYjGgWDJPKVCQbDThY3wt1UYbqeM5VdwL3miXv5nQuxUwMuj7tFw1wLfb2QncqygsAb",
  "key7": "5iByvZ6HSxPHyfESwkhBrwG1DXbjAZ4GQRWaouowGJWQcRjC5TUkrfnaTjTtnHQkzffo8ekyLXC8eA49aU6Jro2K",
  "key8": "NhUY97aUp4HZzFHR1sBtRAwSNATc3kyE5Nu6DHJMB8yko2rwuzwykwiWcrzUZkYD26vJUGxQVimgDbF93pagy6F",
  "key9": "3jgjjHRrMSZGMfASHUbEeGHEWPPne7y9bfG2sUgdhfrhVmpQjNPeXDvrdEDTZqJZw52iKjEVKHdhfanesMyrkx6J",
  "key10": "4F9NSgFwdTvWJGaH1k6zTtT77zNUzhwQrUAorXXQ4h6idgDTuqmUChK98fiTYbcVJap4PM4twfET4rqchu9oU7iV",
  "key11": "2FR3S6mKMmPufJ2ZGb5QZRFuWFFBEvXmxDoj1UFiUCYcn3zMbRTZL6pLDbose8NfnfsuTXic7sWaxqb2RxsxMbVP",
  "key12": "3jKfCfFUGgJtNNoAFoopikxmb9z79pGXxg9yYaCvPadaWz5r2Z8MgEPUob1w874XmHchgzPq9afdEtaM7QvVwKqA",
  "key13": "5hBZjbML7M9xMieDJfJLyk4uUkFNKwt35z8MbG8Epzj2bKSaYFVKNbtskny2QdwD5DaDYgvYiH3cpHLZNPBmvcMT",
  "key14": "fzMsJUdgMUXAZf2Hmk3PssRZzGe2yzwNxV3v8yiovZVGjSEnrVB9qNZ8jaZFZmMyUiEJj73STBfvGzpTiXUwxXX",
  "key15": "4fHkmkZUXzmCK7kyAPiwbZd7K6mG2H9qi8W5tMK9FJDESKbdPToJAEZ26TDokPD3ZaPKnD6gQcdHYK2hr2x8adEq",
  "key16": "NFuRd7baP5PMRoYPtzuuNNcew3LM1ujv9TtoQSx52RWMEJqNtmqHDfyvZnSMiHbeqTNi21bvkwEWi3RZTjBoemd",
  "key17": "5rYJuDKmDMqqVzWfW9s2JQ9J8jqeX8L5KgJKYpwV9uBwopJvGkNQ4kHyiHqN42i2sFguc5Ur6N1fnWgCuwkEi5FT",
  "key18": "4nAbEVgf4t4BjqgEUKgyRSLK1GtHbML1hzz8Nm1KhhVCnYC7Liq9PofxWSqxBweMySoVYkxMeJVy5TmqxnQUmh43",
  "key19": "63aupNstFy4f7X8Bp6u3NvMb7THEeFQEL37JugHQC24pC8ai2RZpFaTdCZC6tuZHCufcAeXok2s77WQ4LuGJFhZM",
  "key20": "3pREa8CYhWzwkDMtDqvvFDnbXe2LgPcQKfy6H9yKbAged1JNm1DHrLJP2hDQaeUcU8yhKeXVppaeyjWgeZ4fKDrG",
  "key21": "2m474iWzsryNzwTHPmrepFx7UiHZjP3JV446EX1SEbT8SHY4RoeccqhLwWTfcQwGZJoS4cfDgx6MFas31Jc91p4y",
  "key22": "2j7S9iBSxbvp7YWGr4VF6x9qkn4RWih8A2tEK4R4Msr1wVWzgirGwpzV38qg2ra9DbfqyjQhJYqFrPEzpjfwe4BV",
  "key23": "5TWHfvVhYjbgfTiuWtZQGGHo3nDyQHCvdqq9m6q48kiFFoYfEr7hu2Mo5SwL5QSYbaw8dJJdpGBEGRaPbTiC3yLx",
  "key24": "y3HFR11v45HP6Ayx3ixyxBK7cfTmWFKGr8g56FCPoWbpoZAngiP8N3kFwhgDDpgav2ezstuLxVH8CwmKZZcm6Ar",
  "key25": "28STwdD7jNUCH3uz4AeXqzLgvhAXf3bcgZ39ohbs4T1HKNmZhbmn3CxbbW6ioAZ3kQMTAbj5HF9RZyxp6psi4HFP",
  "key26": "4wCCx8SjVyktp5poZd4ecaMs88p8zUFjbM5farKexGyjaP7bKU26joazTCVvd3FSrbK6MvG89sYzUcz7CxANg5dJ",
  "key27": "5MztRibXd2MxZaX8oKq8hf9E9uUzoiquU5HpeB4WoMtaTeCE8t932PxHSk1pdV9YJRfM1huVw2xK7MyWx9CKJTGh",
  "key28": "252dV6JMURGga2TNdMEAnWuneiTiF8yQWKPwDZMcFB34sp1haQagyVyKADqaF8vUZjvnSYVrEA2d2Wjf1pZ14zyH",
  "key29": "4qYMz31qwSD65e6C5tZJFVz5wTuDvHPC34qaySeu9zVaFjVwVaD9Nh7x7mokENckRrNVzrEmAoDBumJez2JGRy2i",
  "key30": "4wkrggbPfDctionyFUVdRqDrKXhCKLQtgKPGh88RTEt9GoCmYGDzuF18gAmyR98uobzXtx8aNU41cZSKG9iZg9ir",
  "key31": "TV7FaP4mPKXkhCucdYrCUdQ32eCGG1DSVqR5WEcj3nEfUeGdiqHBUawxhCg5D6FfByqDVwE7pwho4Z6x2vQ6oey",
  "key32": "67UdNXofiuNk4mLjS5MsuW2bb8pwpbFyb5fP8JNhBVRDGCENCkxYwim11m5fAUeesym7MXnHRXKC7ozLgwvAD4gh",
  "key33": "2ZVwMZoBPxS7TnmzMcCwgvAxGe7eauNFtdq3fQRW8MCzH2aj1AwHxP85FoDhev6kbAWnBTgSYHgMYsUWyL2had31",
  "key34": "3dQERTr4yYSoW3omuwCM3ZndaoSuiATHyKVGjyRbHheLzymv52vj6axuhyJJ7fFj4ngTa33jaa9cByBD9BdXkZi",
  "key35": "5rmpKWHULFhL6rzMSe3KtBQFEzyu3hyUmqj3EiKgWK61fwqtXxj99ByyMR5Vj8bu7UbWEVzqqgkTc6XEUqqXF14u",
  "key36": "2yD6oG9BTmbk8TcJTWCywb1QiPpxvojobLbg96HLG18vwjQGkEEsWS25bLSK5KqvtjXJL2poTWQgXT5Swdqf3hrw",
  "key37": "sb44AWTHNs6t2MBHnHPp6og4orrT3CJFxMW6RVokV8nehK8g1oDkknH9AsHQXrh5vE96hhBhV3xP1pLZThX7hAL",
  "key38": "4hGGSK1Pod3MwfnQgvszbJ7d4EU5avXdKLQaaSt4VtvdhaY7nkyMTbV8zKQ5i1bXCS37tFxgYTYBfkAJqad1eDib",
  "key39": "4k8od1MSTJ37fqc7wp1xbdcjTCD95NFjGuqMJ7fV8Xd2iMtahHHTS7xGtsfZ4NzPkeL4nfAnkTLRCaLadLqs22dz",
  "key40": "4H3m73hhuxt2Xd5PoJsEbHmo8LQmL5EHxxYM827zoEgKr2smVfyfzbh8tw9zYhRv2qFJrd3UQ8rPb6wNdf364CDm",
  "key41": "4X6WQJHPEgZ7CbUVeaBxDEkb8qYjt9hd1eQXiCTzZvyEdsWjYcoTNqyooy2AegoGydWXc6fpdSJoaqmSdDWvmqyK",
  "key42": "3vvVinjEkQehXYJxdRsVU3sBiodh1acEqq8Td3fY14RXDvf4hQiwTzHtNEELZ1RizKqC8rsCPDX2DRKLPMBkwqKz",
  "key43": "2zazMiFc14yjReMfDLEV4rADVdRRXZxbVwTC3kzygea8Cnoq9zXdA5AiLjbTupFcD47tpPsuZXBhKBrTZpdKivBy",
  "key44": "5DAWJdN7wUXsJQD14eHAdp6K75bJ76eGRmtJ9NSbWwBK9heyawq9zHLkVas9eMwXjZmG8e7SkXoytr4vR8DXPxT1",
  "key45": "245B4YkPXWZej6v5jhhNQs22pyRyB7Qruofw5StZL59MZGpLUrUbKr4f11BEaU96pQzyr4jqGZjGzQn32zjhxWoi"
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
