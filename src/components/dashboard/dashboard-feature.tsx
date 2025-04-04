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
    "3BTZdTaWRJkZa4HUZc1XHbgk8AQA37ntSkr2Sr14uMXWwv6YcvdByHT4PnvUF5sYnJ19ZWzCGhMRgbfpzrfPV8Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4USEoJ91oxVfCKgzaj9A4FvKnv591nT8EuJqfHKTsA1Be3JPgmEQmptQCAv2bf1MjycJ7eGFpSs3Dk4J1eryZLQN",
  "key1": "4Qyx8JFSDAqkATxhHYDh7FSAAv4rqT1En5p1hbsDyFv642CmEJVcaUKsFvXZyYSi6cpXUykGLh5x4G4gTzy7wgJr",
  "key2": "gQ3HxhURHDoeosHAHNmdVbbhuMrhKwQGPB4RFQJSV2sGztfJ6gUfAfSe8oM9UdD2UaANTpTsXAjxVjHsT6A8hpM",
  "key3": "47HF3E9YQLVn8WWz5L4DDiC2dx39tZsMYLp3UHD64jxNoNSBnozjZ5C6HmubPbFGGtWnm7K3A5aytgofFs2YCJtN",
  "key4": "f4SqV2XHZCFD3R7L6mbJdNRL6c166mcctdRkbpA5wKv3bTMoy3JKzBQDDXdrDkVkryAtAGW9AbcGovSi5rjC77U",
  "key5": "3xmPtTvuAuAaCgC2KtAdsPT67pNrgtyV6CfFCzMbtNJgLZdzGTc7hPUZ9FrbSYBauthdMY51uR6jXiJitdJNgDwq",
  "key6": "4G6745BGaJCY1aEGabCJ8gNo2o3C6yisR7FGx6FkMMueZXvQSz8dpdKtysCsDBivcUFRcmxE9Jhi7xL9fq6QVoXF",
  "key7": "4TiUbubK8gUP68yRVaqSyjmfEST477Seg52R4XPVnVdEMQsbwYTtYNSFwSNX95ZUZWd3WySk7eCvctDoZYnW7i5G",
  "key8": "46RDjErKaCWpKg8GCh8PcQpEsWcKJK24iDbSpS51tXjaY4gjx9YG8a4TkyJLKpGCbapt2zeRPgsGS2aqCHxVMwno",
  "key9": "4oQpwFk4HNpgvLiqButGNAzn5xE1VcneG9yAf9MVvPg4RVxetq2iwqJe7MSJbMcdgjAmMHWys8nB9o8W8WxTkWeu",
  "key10": "2DZuBwUEdT5yanEmkcFRYUF8tg9WE9Ktfh2XFfHtL3Mwne9ZgwF9GtuuouZ8vKbyPQ7Bi9beEFNfzVJynEv7VSxH",
  "key11": "nKcVfv8yb8yCxWiNLwUMTtoQk7qkQH7NVgbxMkeJ7HVdSWdWjVEb7tQDqsM2LHp6JkbuTfYjwGoFCiYrbvjwY9c",
  "key12": "5vBVU97SA7ueod758bgHRGgnKwtXezEUjZdw4H57L8oSgPAS1Gn1gMstoYLD6RUC171Vx8V5CXUaZiVfKFZMzerM",
  "key13": "4v87hDGSqhSAR24SEgMJUbRdiYnAgjUMynH3U4H7pJX2uNrVpQsy84X8FqMzVszJAwDEFqEWgPATUhWSViXJoMWm",
  "key14": "2JXtSjNaHkSoAfuegzCgJHquVATKNJszHFDx9V2jzuiEA6U2N5SQgpX2nNfGT691FMuVpWx8XgHoL9E5uaeGeVKv",
  "key15": "3CXD558HoEKRuJkJR5AttM2ox6Awt6xFYMSwZfpSs3MQQ1tnqQgXFHhhqeRvaoccGGsQDgDp3rLMBEFzZemJeuph",
  "key16": "DziyxQtd11GpiHGBNf9v3MCgcJKLkCf6rvnL55kvTsWgsRP9ce6ccpm6oPHFWDADsvVXgY6qp2Yt8DZy2Q5q6VG",
  "key17": "5tPd5Qg79tcGYb2ZsrCPLaXEpH5Qa7bwBHRWJpdhVKSNQnY7QkBTKeqi6NR5M3NBW3U9ZF2K66bRmEesXE8bV4y6",
  "key18": "2Ssdg2EKQqwx54Nkvy1ZZf97pZNpA1LFV2XTUm3HULiD9RE5ed2WAia7jGhsSpbZi8u6TB9eWMRvY8zLSzJafs7a",
  "key19": "3KZyJ87rJKkUE5qvA4CXSJyTZpcvTk46gh3EgvW66wRyGjUqqDiz7hYLPTmDstXWYvqQ2bc4pAF4BCZVWmUoZB8Y",
  "key20": "3T62WEK3Se6eyLcz93a95e4ht79GuBsRk7UbKUFZSxp5ukTiAxCf5Qx9tFJVrk7AqHftndB4AHnekuCJBX9kptFZ",
  "key21": "5SKSXsavq6EycnmE4ZDqkyL5Tb67zy5S9Z1ZpWjSK1Z7mZuUSdNDCeBDp4xgvsfiywekPwjyUrHCYfkCnrqEwcfQ",
  "key22": "kvB8ZkTnbY38Giv9wLLp87aRfvDtrkkgkcJbpT73nDXjcWsdrc5zj4GfyNRKS9KtVivCqzDsaQKZGnTYcsLqFCp",
  "key23": "539P1iXjNYPd2EKaoonc32SnSuMzaE3bJjoxY9U6N3rQqjvcyBQsLHSoqdhmeGt2Ebjfg7px72VHTzJRJySwaU8V",
  "key24": "4QMB8SC3tyPuh6HVDj3F2vE7eUtJqEH9Tc4gKRGsv5vUZYtehTebbB1A6QXC3G4HxtWqj8zh649QnQKAxHPGRsF4",
  "key25": "5bKazQtxasFS4DzXPR7ftC6w4ijnbb97C1CEkx8CvfQNxLzkgQDp7wXSj7kyaNro5K8SJXzTTQG3i9DFDsXweJSa",
  "key26": "45CwyN1ZZGoPpuFes1yKMnTK5T8RVm6AG86LrjRHMLT73jaMDj9X4tY7HmAu4CHw6WpWfM5PMY8zKdinTkuEKkLy",
  "key27": "z4bfSfxi3kUJ6iD9xb3s5wQNb9tKQJ1ZDHC9Ft2A5D48sWBte1eSZfGk5ecmJuJPKuBkFCMUtZ6QDjaYTLjGULr",
  "key28": "rJbQ5tXg5a2FDanybs78oGUoHzWXG6T4aB9FWbUMd7bKcyAEQ2zJVQnzdpyyM47Tim6Km19caMxkzWKtzosa8k9",
  "key29": "3VMQSoqjJT8AtUrGnZXJJhMMmEbQk6cgxPMfd7Hyp4YmzzXJEFbP874PmiybgDQhnMYPbLyqTcP7AFUCBMFCQgjs",
  "key30": "25SsuiqsQeYoFAmnFAB7U43Lk78rpbp8ZtFiHFKJ4GPWhu5uFy9jv5k3DLbJ6rVMiKBgneTDw2hB2qin5SqSTKvV",
  "key31": "2GMpgi5UuE82zjNimvyUqUiBvE4RuDBZc863VKoKRJLAqiHdKB9pgKoGgYYhpaDZSoEF4TfMBnt48d81pMqwchRu",
  "key32": "2bCLvh5ks7F2uDjf52sAS1tCBCCXf2LQkf6arfK6auF3GZ31UMSR5FSGGWcb9wn65JJNMqPd3QQdFsJaHL1QcABK",
  "key33": "47iMS5FPLTxJwPW2sdFSbpgyxySvLW2hh71Zc3Bn3jkLvYWhzJqvtPV9A8RfK4Np2yaak1QumjnVuuqPNseLnd9y",
  "key34": "3cNJshzZSMe9KvPXr8oT5sTB4zcNGBEZR3HZATY1ypVKJYAtisXP6iXB11JQV9TeUij3n7HEuBDHwesWCfHKEXiA",
  "key35": "5t2qwgfXfZFrXLCqRUZQgGVzrLpCKhg5Wj4XWMLfczNmNGRfdn7NpicrjGY3pA25MJgoz5suS4tVJt6mfF2f3K2V",
  "key36": "zLJPcMeUzPt453CYs7sdeY19qrkvALdumZqsihzyotr9qsZ9DSM4DTEgM8ytAVJGnnwNCbWxCr1wyPUELdfKGYh",
  "key37": "4h5bbzqiuzavJwGmr872RB52ysmSYS7FZzjBJiQ5goBoU7YZMGG5ACgyYcUG5szmJSao8WyYeDdbnDBKJZhUChL9",
  "key38": "sFjrgugcYstEJTZivE3ivcRk3wQhHkxGo7Q2VJycsy4UAhDaLjjumtZdffrvkxo4LGpYTJ2wQ7VhHGemPbuSHig"
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
