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
    "4JJuLQsachgFpbQbBQNKtnsByXwCimrK1jCe2Dv2S9mvmJ2hzhU6aLavXEjsbKK8zokdM6cAJRpstYqiYQn35ZkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EP9wbUsoX6mT9fqRs5r37wTNvKgLU7h68Wt9761hiyH8ar5WUHKKXebPhA8CxqyRfSW9oqyAVi5Hc7UP15R2MmD",
  "key1": "SdE6cBxUzwHDTMkJmo5up7VmszwmeacMNPvKSeYjg7mKTAARWobH33RosJ2gw2G4RNJpCa3W4ZLVDVzntk8LfqX",
  "key2": "v9mEjJqVXCvGXyyenjdwcPoaCen7Saw4FyzZcRFTAqHnmnAQofxRpeFGJGuswk3qmht1zh25dQFQBWdsarwoee4",
  "key3": "2YHB9KdmHZN9RU9AVtcMQmaBRjxzBbQ1nEeLACPR24VuDUVq2VnRVN1wqGeavBZvKHaHeBENA9wkvMAmf6wf8xnF",
  "key4": "gc1M8sUKDyBTc2BfehMSPf4GRoLdHA5uHx8w7zNpFTnJaN8pqHHgP1zq2q8Mu8VGVVx3MdBAgK7jG6KruFpFxd7",
  "key5": "2akP69groFA1KHU46w8bSE5qoVrMYAApU9mXN5YvoR86xiDDDqGnModsqGMCP31GDCrpUXvrn1x53wA4dkRhks2A",
  "key6": "55D4Mbe3ULL6mbJ6v5bXwwg9cV2GBSNmyPRVDyL6cV7D1cS32vHmkAEkS3252GHRTQ7TzkoEqMFPSJRCSbaRfoXJ",
  "key7": "aHVkybWCaeNiZtoPrLjahYkcBJ9ro4cTuLzSVwa5ip9EvHEQ8FSzp95NcbFRPmzLUi5vGL44wCftpPo44aSL3wQ",
  "key8": "58jfAmiW1RTPpa8AoxZsdvgJX4e9QfgfoxyNA53pPU81U2w3Jt26BnyUYAm7pcLNJHnDf1GN99V7dyStRbaHh3Ux",
  "key9": "BCHGMpAQTrVDh75tKgxkGjfyR2ujQQXaPaYoU8SZVaEx2zF7B8xVMyPwPt6kSRkNxhRopLHmjrVf1SxttxHDe4N",
  "key10": "34T42M6mcDv1VcQ546zPSm3GNwhgXAuuG1aCgZBatzBqCJK3TbJFnKawRmcAj7G73DbwaPnVSKXVmAztChnYcLZM",
  "key11": "5myjSTFkCxsizYcL7fiGAH1sHtLd4A7yCf3CZK5EepbKqqrCoXz2d8toGtEke28hQuyDcTzyszuuUAf4b6dSizHS",
  "key12": "2QNp77HEE6pXE5naBVSP1JFc9ArqxuRGEPEj9yqzCuB7fZSFPSg6sHuZU78QRzCyLxFSWwSSXVyM4JTF1je9fxF8",
  "key13": "etTk7EpBP3XHBxfMA57bfuww6b6Kxxf7Csj5qKa2CFi7E92D3qH3N1Xi1b8TXq1HTrA3QAst3GxZyLdHmpNu5Tx",
  "key14": "4cDi7PxFeqbfhGMbVx4ssmo4HAXWPamuH3hvdzRVEVgz37irz2ByjhccvNPNvEcWQMUbJpHf365gi6PcSNxrhc8a",
  "key15": "3W4x8dt3X1sowXrvQmBHyrEqykMfBjTb67bAriSM8rstvuFRoEMRyNFydZFf2zG2j3UcBe3GEY8X36qVE2a4CG1B",
  "key16": "M68JTK4YrP7CiQrMx6ed9P6AuUHwSEfegdHiks2uYmZ7T9AZr1bY64dXbQq4rDEBA6eG8mPqnZtd4EfQ1GRop7H",
  "key17": "4zpCxqbedmWmdhFpZkbGf2wahkF2J5RQpTnxq1Z3BJntvf5heCwCjMfKrz3pD9QFU6K2E5p6zTSS2WELARnQ4jQa",
  "key18": "4AEG7syrGTbTjmqmhXqL91boaxw3kAu667bkh76aSvZMEg53uNaBFKs3KLP8HG6Cii59fr2pmtFrdQSPsQxNKRDE",
  "key19": "21YXFB7iqUrVfk3TvdTt9bsjiauPrHeyWjneKps5WSEGwxBzAWrQMQ1WA4ySnzpAc6wPTJS6RMZgZufQbE4pE189",
  "key20": "45PL7N1MzauzAMP7N16aAcv4yzWgXTBRM8VrYmEFm47CYFTLJzMkDt3TvqvEmtRTqkm5qAP3ahE5VkhAAfXzCH2i",
  "key21": "5XniQde44ZJMtUYP6cC3sMBHuhrLyCSfQW9asYSEWAs2ooj8VWavTwsD762ZtCcG7C7k6q1PBPJikmktAd5aU2Rw",
  "key22": "4MHgF54hYTtLdFeKeDd6dGG9iyXSyPHCX8jNRb2DxYBQEZ42A59quoHp1zDFt2dZiL7D2a7hztzjEj8wwynQ7b2B",
  "key23": "auh9Hv5KY5TXKTXQSGVt9jU8WYhkhkwHCEd2rBByFXg9BmkrkURrCypBRuNBFd9S9ndCgPAHd59g9bSDYvYkPAM",
  "key24": "qVtNkoReYXgjEbjHJdf6Cf6MEX5oP3ahmhfQu8si83XktXf4LPWxhZJp7Hort1qpeFzEeQpWEUG3yT3ZFw4n3od",
  "key25": "21qgoRhAHd2zwyRAx44eT1WSN6wpoCEWRnsbbJfvsu3xopwMTb66H1bGGqJJBF5t2m5CnJiG1WcQNcXLpQEg13cF",
  "key26": "geiC3n9jp58f5pG9XqBMYGSa5iEZCq45Zp3oHRTfGreXoUjHQVJYmyht1ySfr7KsRkUFucdYtLmj8tPYgFhQhfi",
  "key27": "3Tfg6aFUmMUvGsYQpyxbSgXEwEbGXsTK8W9Mhv8vqK7yqjsZxMyXkCEvjd8TgDwfar1XvLTmTiFpvKoSFiy57sQ2",
  "key28": "5pLbiiUAi2n4pZkagZvXAzp9hfx3zS2yi8iLJb1Wj5qQDZidWPANCkL82eWm172GMMp5VNjEvZuwRBsrC3T658rK",
  "key29": "jG5vZQsLQRw7FDDxWWAUH4WUanGyQpWxmHS4YiGEDD9z6bPUpceWzA3fJkK9kyL5foEsGKZGLbEzH9msDS7RTts",
  "key30": "54jDDSKo6rb7bGYjvdYug7ygvE42mbxZTjSM6pi62EN1hvbGT5hVTu9G5bxXvbCFKrptYfeuez9YqnJsfinSzcZB",
  "key31": "4Vpc43oFxc7WKPvtHRRfuhmupiMndjd5zvu4oX6ykuyiRMxB9Fsb1NmMe83tb3eyCKeoQhSRoE7Nww16Tw3NVPTx",
  "key32": "Up2hzJ8gWxrJJ59rnbrBYXP4onn9tSFLK7mG8bFJffGx8mJ68Lo1weMK57ZULkbxvzvr3zfzpmZffQkCE13Xau9",
  "key33": "2KpFhDwsnN6uf917HK4xXsXbZdHUR6MNLUJr4g9B8RnC1MgZYdnDVzKroKUXvb7H4UjMKVtFxittK7nRPxRqxrdw",
  "key34": "2uA6HkhRE8KmP3exaEeNUq381NiLZknvWNxhpb1UCMkB8VpgzBAECMT2hWY5V1ujwpsVFyGjP9XyqfsqscR58XqM",
  "key35": "4v3Aqir9xbLKeGQcA2fWZ8Yjt21aNNXmgffd5xhh4ebuyAyDzq9azWzXuWf1LyAA3KAhWYNi4gy1S3ifk3kKM7dh",
  "key36": "64aofWbT347iSGBvJ8Fg915zk9PE4cFVpnPDAtsVDXQAy113kC1XTCfAPMvJ3r3eLHsUn3gz6gFsPYvfdGYrgeBa",
  "key37": "3ywBt53Ydbge4mLf25GECGKfSMKf8PyEo9F1oi19v3kkfZVgh7Zt2Jsh8hjCmhP6hhzCUDpCzHugGoUZJhVrVJha",
  "key38": "57rAYGCMrntuQ2w4Nhp1mq3QSRHKfFRbRuE99ZXE2kg3FkFaNaHZLwxzqdV5GJgLUsJz4sHEVNvQ1KFMTvttPiuG",
  "key39": "3ceuk8TRJYaQSKjRP7wzJFtcHuWnt5xKmF671rnfeQHZQd5rZRmK9835gYbruaaqYRVuNvY7Zpkn9txNz5nZiKBd"
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
