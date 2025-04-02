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
    "5ydxdZGBYTgMxpQkXxB4vKaB1ZiPsqA8tDG7es7q4GALmXqiLyF3D3eutdwNKsgSCqHCxfZPtuUbXxZyM8iGriH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJzc5Fvyk5DYVe7AxWa6hJiogiTKvHMJwqcVJ64JGtZqam1pTDv4yiJ8QWq6qxbvnHr89TzMZEYe4VTuPhfLprY",
  "key1": "5nuWYJ8zan8HSg8LMKtFP93ufrWn2CtywLhBWPuRCLypGunEvokU19qpUY6PZ8Jzsc32JHskjf61nMxcquQdyfXf",
  "key2": "63uf4YgAV6D272hnmWnVwDXNgaMiFi3bSJJk511LCtuY3iDeHaePRJWrUbyk8Ws7URGiNzGVxWLzgJhDByPNDM7B",
  "key3": "3LUm3c3SvMmZSjui3xdFuazUZU9e9aQbh9SDBhKAeqbtRVRZuXEU45V7afxpU1YiQJNS6aLr374avPHz4xWGHCqG",
  "key4": "3W4kwtVK131Rnz9riFZFhLNpJytxEdSvNeA4EMXHCP5ZNpGjdVE3pRGZjQ5q8Fka5Edp5CzZqyK6pCbRFVzecrVj",
  "key5": "2yRXbpjAqe1Wym5n41fQwncPYHAkQYrjDJp4Tx2Hs8JHXRmryJ3np66q54Lu8wRERcNA8wRPTD4746ZeGMaa2e4e",
  "key6": "5oCPCtXGqTLjsUnhULxwk8wonXe2w32TM5aa9abqr21waffXWmkjSSkhvZAQA8zFZ7VMe8smX5SUwH5givjJWmfh",
  "key7": "31PStKXNK4AnwVcidCEMPVREVCYd5uqTEkA91fxp5HB4QUy9AybGGuih8EyzhqXCyMYHKs1qoPmXYYN6wDwSMhSR",
  "key8": "4aH9DHTSiUAjx83cVWiixakH5kbDhiccRyGVkgCpQoAvRuKu7JCv6PhPQMQadueaDcex4qy5ymto2Kcu4Y9ynT9V",
  "key9": "5VyCekBVt4WkqQWF4oEtvARKqjy1jAQB2pgzMgrmwkoF5f99VuDfF5voi3nwaLYuYmkqqqjpCMjqpKgoSbZzXeXD",
  "key10": "2bN7RFEh6uRWVtbgxSfLGyLf7Brtz9kgtcd4SgKvZKABs87q6zf9Yu8SsFfCLH82TiQdMToFrEuypb5kKPgTePXA",
  "key11": "2WMqWUVMpAD2PSaWDRow8nGYEepPZKpdHina6iGr7mDAmFfUPMuFAmVJitKZ8SV5FWL5pVnfGWmEhQy5ifbc3prV",
  "key12": "3tnwERhwh7CcDsigW64CrGV6FKRqghC1aVNaYmrNn5Ugio7CbXLnvmH7AShVJg58yGaASTUWghAHDqq7MWASFEXw",
  "key13": "56ZkCV7rMW41SPUTryFWCfoBxF3YB4AAWmnQSeUM25ztqohRtLma1HXbiE9zhn8LifYLFQS3M8eJx2cJR9SmZeV7",
  "key14": "2X3ZnVxpg3e4SwZ5nV9dxEWNHTmmCYA66cefJ8DzFeqnwvKuVnwPoR3vbsktxDWoEEaPW9XZZc7TtMcEEm3j2cNC",
  "key15": "5FGcdYsXZCyYxx5MdRmdD9symR83Ezi1UCkPeigqSfFecFybRq34P91dQMkJNSkWQMZfuTK2pkNgy8nTcWiFGZG7",
  "key16": "66gvw4v6Lqbv5LTxEC4rAxTYVFpFix4uot722g83mrfroJXagBNniaDG8APRjCKQpZ882SfPhCGbKU6hBfjz8wzK",
  "key17": "kAZ6PSeDGs8T7rGt2BAUCi1zEtnjXp2EV65ZPqeeogTcLBzk7A4dJjsZz3xzLYwMLxMqQEAMP4VsifMucvownRq",
  "key18": "65QWCZC4u8sXKAq1Ww4M9UVJMqoW4yiFmVduJAZPRr4qAWUcohRZCUyKQhuj2ARYwkp18MHez9nYD8Ltk7ddgmra",
  "key19": "2jVF4JLmYsn52XWfeFPJ9yZniQfe83v9Gk2yrbfk6EEmN6j3xtXkoCxeKDs1Zrp5zXvTEVzw5Jbure95h7uwpxdL",
  "key20": "2j5h5DWkiYFtJ3nMZyhRp2c7n632mP8DcPTpnqNz7HzEhvQuU8Zd1HuGJjZc2xp4afdCKhkkbbXs48cdmcUmt7fD",
  "key21": "3KHQxvwoAoG1PbnPuqNea927Z7jW8iXrnxpLqyT8Xp15H94NUbgptxcri1ZKi93XcEJSBdbgKQDsvp49HFZ7AqAg",
  "key22": "2aEQKcmFzLR7CKgDcfkwn1dn5rMmu7LQznySLKJFGqz9nqshgZ5q4nj5iNRQj9bMJPSN3STqcyDTiDLGgg5cFEEY",
  "key23": "4FGSc3XGpEjA9Nst8dMdT6sQoPvpa4Ej4ddNPGTvzDDF9PvQQLWrtNXccADeEFUzA5hp1kjh7heUijdHPQXfWZDt",
  "key24": "pNwvvjUEHLV345sRgxXQEwRg1rv5MDjDq2mZW5Q1tAsHXouKSxjVyxmnVfMDcVC2LZ1QPVVmnyme8eiCMiSW341",
  "key25": "3U8kkxekwA86kD3RhVhpkWX8HT2WJeizq3aYzUjDVsmBrVcSJYm5JKDaFG4UNCXCpHDFtAKJR9thirF29tkWmHWD",
  "key26": "2pt7AnAturRShqBYD4NtMVm4fzfwntuehkBTaE54tjP53iJJECxEQXkyH6L8h3HyUkDtgwgVqCzs5SdFYQRzzX8J",
  "key27": "5ZZkxkAWgE5EzMqgqBxJRhMSDdvUo2nV8Ymd3eVdJm5PJBnRNRDM51yzmLyY3fBcVmUyPVtKgL4uhiaohtyiGG8J",
  "key28": "2n17x1MvDj43rwuJ6ubVfGLeBsHQ6ytiyQmbTgvtLbt9NCFy3bY5rUw43UQDGu3isK4XeMjg8TmVanQ4ZLL131mP",
  "key29": "33bpvqeVPJydUMPG5vyX1Bemps6U8k5ZKtFbDbJvCbM9mT2BGr1SNNVUCDpNBpcjc4nSgar9UQd7kK9BU5dANmhj",
  "key30": "24bZKCiqFaf21K2FpBe4fqBp3KCtNUFkTKRjn2H67n27HE5umiC276BvJNzoYmoKYKVU1kUVQpb47JGEJDccgiWX",
  "key31": "2QEZLW7Uk1RhuQ7NgkPHNgWFHuCFBDNuUUyQhGS7q4Z4E76A3U4mZGNoTXMAXCHXVVKb6PDyLspxqBMWkF8b3BhV",
  "key32": "4HkKV1odSNFX134hvevytyxh5obVy92RR1eG9pchhUBXqSNDXLo1TCGULLu58qo8AiRijUv1s3nH9PdVTu52Aey5",
  "key33": "23YeMNHGoDq9eNFaPgMCrcdn4kJXyTKks42DGhdinD7q75KyvNJVFcWoe7tMAxS2FvXxB8RmxdJYt1BgT2uaotAX",
  "key34": "3b1JAWWNJWqeugtZXyTkWu1C3TNp8wZeCY8TT3DtBbp4BuQFsVccKLLmGjinrUPDHCxo9WmzmNvB49zBR7i4MNeN",
  "key35": "eEGex7iQajGa2JjejNuBn2pfvVFiAk8XHCbHZtso7buazCQGwyCNY5U4AconuczNTyjuDoDthhTZB4e6YjnZ63y",
  "key36": "9iLXEGGU2V3xsR6gHKTej5w3ZMbpFoyAdziTxhDyfGbEvrtn8gAMAKXdB5MZy3Rp4eEUfwqsCJRu6jApXhyUaBU",
  "key37": "3DqhzCxRs2qeF8k1vuqL5CAofRgZHUsB2Ve5UGKMBcg46xuUCPV1ChSWr4qw1P2wTtRs9WJvvZAUm5TVE5RgQutd"
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
