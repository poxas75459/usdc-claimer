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
    "59AxufzYXSaskA56EsFwqnAxAoDwmUkM4JpdabNXPR1xipe8cMT5PNCVbrN425ZPkDLXB2AdihVTvW3b248jri9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3WUB6TQU5oPvgQsWMSSR1jKS35oHe1gEwDGw2XHj9WnykJ1Ds5oQz4CXm9nLqgubCC6D8jp8fnGZikFXviHwst",
  "key1": "5GP3UKenpzg2QR64WyuabLFeAHVLKVEDBhpr2K8AMaobWXzySfEJhx2hYn9gx6q5gAtEwK3GgZkqWCr2NKzSvzDB",
  "key2": "2HJARjf3p3tb9pAVQgbk5EkZiEhcco8LRGKWDo7mptminSEmxVAVA74e1M6FuSaHzucZy9UVhpUHVSP9kGjpSAqX",
  "key3": "GnbqS8T4zpsiKrGcedSZ5E3Za48ZNyngxBf22ypw69Q5HhbcViwg8dBxSGfvnH4vcfWu6hoeq1kC1QrYfnras3y",
  "key4": "5AejRdvzrsKkJcndwaC8r5EXiC198drkKhM82mc5EqTk8gELKh98pPPc5rUa6wmyCfthbU5nNyYK8rubyvrdMsu3",
  "key5": "3tmd1e7kY1JYbexBgJsRCNeQ6PMwCasEHAXL7PRP2vfA9CweaFk5oh2NSV9ypP9r9G9kaA52dGTPNKztcRP8Da9M",
  "key6": "382zveC7rY8qaTxXX5EUijaEQsFfiBt5SqLy8q4XuFASra1JdHmhmi8LAbJXGh5yqi3mAtG5po2o4thFiX48u3zB",
  "key7": "L6fsBTt4YyuVks2SRxDrHEEEkUEiLSYRuGpQphwXEsJhuAiRY6ep3Q33HL4qFoWQSE4f4JSg5yx7hVBDmWGiViE",
  "key8": "2LVoksmqb7AnmAkdu6S7aech1ZqPvrTcKtD8aAgtnKXXByfDwr2W8zKy11awVWLBUN7ndfB6aMDT2KJe4GFJHtjd",
  "key9": "3atmKXeQ9RferKCPZE8d6crdwsXdJkhbi5QkPkQjN84ATkurrgwtyMCDdhwKrYyeXZdzMucEuACL3t7Am1Da2hf5",
  "key10": "3R2DGyhhHqtvdGGomkxX6tegf2RZ6U8h5jqdpTLLxcU2WSR8XiXDRybNru8gB1DQ2wzRBDfq9En5kjvEt4zrBkRM",
  "key11": "4n172Co5YX6QAbv66WwtNqaGpD86ZhSBNMPAAPHPSJcZ9a1bueuK4ESefrMynPoDuRAGdqHdGLRgM9hiscVQrgqW",
  "key12": "2SLjMBPsCPxVx5NryzhR7Su2LAGLVP9eL97xB7w2zNXJvwqxtbvPJLojkKS9hmRa4G5j8smU7ipj8rRcEjNqSEZ",
  "key13": "4H5ocZg2bFEfZJxQoJHjbaBFiS7JJLdkotuoJxvvowq8QwgZf1PYFTpSV48s1uFhYs6dbQYYrTsKqgm4cEPt183p",
  "key14": "4DjZji72zN7QNm5RLkqDa7Us4ZfsS7NrTcHXdgSXUaQSBo2m9H26tTSRb1EMaiYUPYNyzpsWsdGzbXAUqwFngopW",
  "key15": "2NjWmUwXpvTMoWiyVLwsTBs2hJPQMHK86KqaFxHAvHwwStRihd96NccpLw5G7mBtdtuJFuAnoHCf7CWaCotcdmzj",
  "key16": "53CpMexoCTy9nqAWeKoqHmDXiinzXsTP2GhM5A5zXpHKBFidv9nVQ9RdBJUVKfU9BAsStjmStwFMPBwtJSHU2xuj",
  "key17": "5f3SAwvSG4pv4MjjyPCuNyvEC7jZRqavxugKxRJFknhxwRmf2MqftZwjx9bp2VAS1WxX16VQnvhipjmANJdrnwnD",
  "key18": "pTRS74cHGGNfgDhK3a6v46nLBXSfNTJ1Ktm2RuoA9maaLdoAgLJx8ihS1MuQHNDb9eSAQYTZNST1MG5e2w8iKvK",
  "key19": "3wkTx2nZLNqgcGZnWnbwESjTCdoDvEVUo5o7mrs3j7Sm1DoEqVEA73VuPJ2KnxP2HZHkP4W83murDALxtRu1DDKp",
  "key20": "2UPuFEys2SAguX1XpGpLS1gQZspYZdq5qqB6hdDKh5j1fzj8xe9dNKWYASjuQsMVYTxAnvhvVFFN7jhhsQQrP13o",
  "key21": "3orintQD3mkQprx55WzNzFnvEE4agdm8FQP4uWeQsZABoXrPbfhdLCSHAgQEG4axawfNpczeurbEBw7CDkCV2jAB",
  "key22": "4uYxrc8YJSFcrm4AUWu4w8WHPzNT5XL4hdXNsX2LhhSbSjRiVeJfJbNwWSmdUUaozhDqoRJwoQU3tpZpaaE6jAWe",
  "key23": "2dETVwAariueroYLTgZhA9x7AuULbbTLa5uTYfdxcxzwzey5a19TX88813QonNTfAzuGub8Uf7Kj93ECPKQwqyxM",
  "key24": "2urMbwUBSYaQeaoWsmmqZyBaDZw3Evf8dhcb9E7JBfpDH7CuGx5yR3BiWVEJN2WqEzgbxwv1U5x6FJXjhs9dxLmR",
  "key25": "4jbUNvQQH7qEbKLf57FdCYo4p7cnWSZLErwAJKeXgQ9Rc4hhe228SmeXmNUx55dtotwvL4hUePa29pD7Boza6D66",
  "key26": "54Dq9wQaY2Qp871KS9DiXT9AAqXL4JLLtbUX8DkXm6KyeBWsAtdLP8s7j57SK92LAmHhSoseEsXTyvESjF6poN2g",
  "key27": "3e68eZKjy9b5nnomN772KfL6YnZssGJhFzAgKpSZeHKJVm249FkExNaJKJtYoUuLQcCeMsWhhZcGRxvoG5x4g5Yc",
  "key28": "2JxNHNv85kBu4KdEtRBLFRoddtgWAELNhqqRCgtSbWB4GqjqjTukUD6bmPuzFSBajpZbQKo3VUvfrpo8QQQYVEwK",
  "key29": "43veA3J64WcFZmGh2JUxdiZpZgxAuiQaTN2WCbK64XN9f1DFq97Qcr9epXiJBGE8ALXhtWEWLrHzsthFHom63owq",
  "key30": "3QgbLMvgNLJDog8Fe9rWAFctuWyToMYA2NAVaievaH6598mhto2J6HsRczkwLEvMJ14DxnbRzPd1wCMs7fNjtypp",
  "key31": "3BFDMFi6LbJN4ARxrT6hvjVFNDyZAgvNk9Dq2aFVvESbs355F6mhUAku5HZbeyHPRGjjJ9yW6bCxNwETpPtdiDq3",
  "key32": "4u5vScLucsg5Mw5Gk2krx8jQVCANTyr7rUxzSUrcQKZ2gGcpPyqJCGXDHrEYzDSm88cv1BmJigwmg9AHXELWQwrc",
  "key33": "2BxQ1oTxc9ync37A8KneoVz441xbkjL1H86ZrAogfMeVKE7u5VxG2oMpddMeymvnpBBpWhG28gWRMecpYfUcMXoJ",
  "key34": "4zZ78HtyyUVgR1UCgk7PeRqi9bqzVT6qZXVJmM9Cj5fZgp9RX9derT5JULvXQzh3Rd6Fshw6po2MCngsmYr8ADdK",
  "key35": "PMUqrbF7CXnzfCyH5RpiheNVvF1GBxVqgUHhKukmMM7qLNnX8uDe59YiNdr8JQ2DAmyhi1P4jAfYoWcUh2kxChj",
  "key36": "3NzgEtQ1xbLVHc3kARBMB6Jqs9RGtg3TsiMsEQj9tcDHy5Unn45gTarRa3HxUfd5nRMkDLiGwjYjy7c5uzZ8nHK4",
  "key37": "3gGs3djPrkbqXehf1u5oCVQPFYjfVM39z2RxF1GKS1iRCthrkHYgQqSsVMav5Xj1aHRrKgcDsVzwGVbox2RK4xhY",
  "key38": "4Rv4cp1PZoF8aiyuqPt53Cd3TF8J3KjroyaYVcXM1zgd3HmyEXb6MKt81Su8GQ7nc3ePgEpBQGMxv5bNtaNnjaBD",
  "key39": "SRaN4H5YS1waySR3kHxrMqeWqCHbuojPsVZJPNRyawzayUgULHgf1qrUFWgDHHz9EVM9FPick2pTeFMjh2k4atb",
  "key40": "5bmMQ9DLDs4bEAzSWUKfkRcWbLCc5ZYPv3qsBL2cWS9PCMq1aNKGypYX1cksk64D49kdjNLeELNipNKZw9j3WPzV",
  "key41": "4551hgnZd7Q81fsX71JCYN3NqpsMnJzj5X95eE91GpMFpEwTQhtc3Q336mpMwjQajuvV9Ci6prb9Sw2zFJgvDD8K",
  "key42": "5Ct2cnGHF2mPpUDQYnAsETBPofRkWSa5xeSdenrQ525eYVNibxH5s2YQ2wsNGRRQ74eUofafCTkAUGhUXYPo41ta",
  "key43": "62E6XoMPTV6z5ywKohh9YpVJYCvvoKWPxgbUyGjy3gCGiA66x4wr2Wz5ixuEZVi4jDXQotu6Ytm7dU6CWKDQYUdq",
  "key44": "4BbhDjErURk7QirFugVq9dJxm4THzUxiupNpA4tZPCxs1aKiPNNmckqxkjeVEqa83BotuJdUJAd61ivJqnQ5fVXn",
  "key45": "4QAaAi7Evda8tCfHP2MgVwbVsGYSYYJb4ZK8iKgPHiuEHxS4NaDCSHWyGphjtoDv6gdNY6df4S8gjsoBBJ5aqKk6",
  "key46": "zfDjmHfFZriDABJArUVrLbUVNyTKYGQQChgiENnngiEYWkaDXQyXLXQiH6yMokkkoXZQr2QeXhjZq2pLCFJkWtJ",
  "key47": "44poh4RysRd8TRHNnkYwT8eJpfqNrytaVb5XWX6BdafVQ7yseASBZSkaw8eCJFXyL18iHjQM1A63jDc1WVw2fbRm",
  "key48": "KKHUVmPXxoKYgQvBexJx2Pzrs8BaXxLza1rpLhrY4zYFq2pJTyHai85mcfudPjnFgAE8S1z5vTFoLmXttumpBEk"
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
