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
    "23jnCaqovTxDDU3bxqnnRttcw9LZxqTBDVYUFHaCXxfiybesxsHbRV9UoHXEHb9KX8BsPrwjrKGjxUUEvpNCcsjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCjNuYMkPMJL3HuZusk7rY1Z5eKvkAcZjv51ApE9ACdWyJJLrLgHzSMXPJueGsB8Hy25hRkpFM1EdsNdLegoEiL",
  "key1": "ovwzWYWmzduMCcarkJnXSrzC4ZvLVxENQhPgxmgqTeWBRVDLKHLapm74G82hk1n1dErioiCXcGWFHcXUT12WW8R",
  "key2": "3GEoCGQSDz63KTssNR6L1EygXeFpMXd4B9iM7oF3HPrKwjQj5wcpiHaMLG1hGkvhzgdnAmAuDBXo27GiJZzuv3gV",
  "key3": "3RYjDrMfrAKTS5sSdHQpn8EDGYiRQM174VWorgJ17zzu8GEg1LmdfNBaJ6LMseQ9BPodq9559rWRDaP42KTyNgFj",
  "key4": "21JLVWYmywS7Q3BwWmGMG3Lk2N7bGhEeaFng7fJfpXMFCFbvqNYRVFN3TfCpfGdht85A31r7RsdKpe9CSa3vcapt",
  "key5": "EQH68TZco7ZyBwRdDPfb7r3qjpFQoqEKW4MLPwKf3yxncQ3xuiWJxXThaveyYR4ngoKBWkgupMadsceWZPdFVs9",
  "key6": "4iBt9JXLsxKDAyEtW8nUxJbJWq9eYEMThYJ85FA7XG9voAFxvpMfzppZuCzcN7sq9P2igS8LZ7gxnQALDA2mvUSW",
  "key7": "2TZiyNYd1oHsga18kpYKc4ZPgtW6rsiC77r74Uz5nkkCbCZTnuXqDyQw3wxiaoqSss6T5PM4inhJsRR9MvZg5Cni",
  "key8": "4PRGoPiDohMZzRQaQfGYMmjY8fv6Z9J3jAp9prGAmQkrDrNEmiv7zzdmMybgjSRb8tbR98e8odZ1mGH1ymL1365s",
  "key9": "2ipYaB1impx9A134zENyHvs1Ysk1wFMuMBrGKW4gHCj3L4KAwHwvndkPj7Mt15PCq1nz4b1jnDiSmz5GnKBNWqSe",
  "key10": "wJauPwXeQiHJhuDXo2MPpZmvjDLGppYwm1mWBwfRZ2UafNfnfArdmFXCycY1nLeLCHm9PoMMBogXyAE6JdA7UjG",
  "key11": "2c2EX2vvMHBiBQ7fDqzR3x42bdthRMKnks1TTeZEbeNV8pPJoLasSU4uPxNJfkwksF1gaHgFYf2hB5DasDmjkVEj",
  "key12": "4nkCDAKBUv1bHo6rzcBjpiDanP5D6gAaAGLjV5YBFGbmURZPFgvhxfnVQc3YitpZLHQgA5q6b8YuGmq7vxU51kXU",
  "key13": "24wAr8xG27ddYv9VTsJ3z1LXM9BWwMpmmCAZE31o1TKtcLJBuuZ5y75fczi6avaxJ95pScmGkncdbwaHEumVtyfh",
  "key14": "KRVXzpX7ngjjBEbNLW4Tsq7J7MvGkRhukgKunMDCZDsSynjCRnojBoJgQW8JQU5V4Qh7czk6v82W2Fqe1RdJqbT",
  "key15": "51hnmR71qJWjbDat52cbbx7HjdocH3t4LKukvtRUBB9j8Q9vzrh5ncxqa9QfeSwmHgYggvk8m58yM5xeJi6XX276",
  "key16": "3nCs71n7yX4NaPhPiDWcBbWFSRXoZ7oYYEEMPoaBT2Ai1M8ccAG8LF2rD51jFKn2cKm9yoPDD5iswLKUF9dny2NX",
  "key17": "4XpJvwQSF6fFvow5KjraVaQbcEo3AA36mbWztWNqjrbnvesHRK7MD26gMhGifzFTjmr7jX9Qi6i3SFcsnqp4d5XJ",
  "key18": "3DPpRa25YyfFPoymqWWwAqSD52cMHZwKZZadiCxcUiBKdRH6M8UmtbjrnzWVMjKeQkGUBzzpMTgbGMbYjzMP71xp",
  "key19": "5XuMf33aE68KpA5DfQAJoTGfUChMomoD9Rp4PWwh1juk6uGKncJkYwk68riXesEEDXj3G6FgUTBqwiEGjFw7MdsR",
  "key20": "3t7kWEcv3F1Yj6119Uc5MRcohgv9RpEp5W1GXmzQAe6CA88XbHTmHabfSxVFKuwZuXxdcho3G3PKTeqke8PNYHpC",
  "key21": "56hfWhowpnA5ux5LbcmgERcNHhqAm8KX3AANasCde9e5euWjYMC9WN3fv8e4JzAbszTpvwv16WmqqsKMXtDmyLdb",
  "key22": "mnnbJTyi1XGo5pV9VjMa9pEU2v8L56nHAkUptz4pJG4Xj88Nw6erM32ckovBxNRanRAofLRCdkYcMcZGGQADvUD",
  "key23": "z1XD2C5XTQ7tyiknHjPkRx5rZUR9v3EiZJz1EKJm1GPY6YHJ57zrHHj8ndzjMoJsu69qhNiKC3MdD38t4CvqgpP",
  "key24": "3hYBQEWrPvtFDMUGr9a6NkAUfFEe1kAsAekRy323C18SfCK9TJEdDS4cwUVgetEXiQrNGBM1LsY9oYov9svZfRqW",
  "key25": "kSjrfyZhkVZAmnSGLtS8xbQTuLoTVoNHA1EZ6v1NMHs8H21zk6R1QRjj1STEmf1scUAQgbkCS9VebUAX1zXxyob",
  "key26": "Ww4dkfKnd66CSBJ76bRKqZZ8vcQzZH57Wrq2ZUxFUtiBR5Zgt8K3rqJ77q7qiE29s4N6z8aXxjp5eciL4n9pr6u",
  "key27": "3qAxGSrANjFKJ5413X6L7R5gQxKzQijCV5ZwrnseCjVB9hZu7KgQmyncKFefufUNA9JCrCFWm73McacjbLU15DUf",
  "key28": "4JS8K2VPF772mA3Fkt4SYdF7vfA7TxT5MX29CWBUvGBV2RoSWAaPjmu31KUuTtndCokf5144GAhZHuqBse5Xi5eN",
  "key29": "3LQDxnsJK8AeZQ5EwQUnBYBqgMAuPQ8KwbbUsAcLBWC37vUx5X1fKcC2ZzN8UZm2btzM5CmST1Rn6wNL6fzrWtuY",
  "key30": "5KmumSgpeuXkskTQqkN9wSnmTyFgqLYSxC1os96FqkDraXyw1UdkHw2o9GdgVUz4sPURYAYhbrWC3K1u1qQWebhj",
  "key31": "3u9V2z6UmiLoneT6T634Hxh5iL2gFEzsDop975qXXsvWwwDD2bRyFK6oM4Vep8G5spbDXZz7snFMPNBqojLidU6B",
  "key32": "nLZaMwF43wPesXdhdLpN2no8SVSCJvhbpoQjGhHZf38mxsJW6YjNGYPJxYGMZj3QULCJnSE2a2nG4i6xiytWZQW",
  "key33": "4r4Szopda47Vw5i6kxbWVTubDuhMA5MgnjAfL7mbRVFFC1DMvpT4aC2NLQ4p316dNRM6Knf8CT15w51xASvzTGyQ",
  "key34": "64yYJm96GFPSJsTXcAB1nAyUJdDV3byGDqPMqa6tdniK1aM7aKw1QAsg66FvEKAyo7RCSf1eKWmEh2sLK1fg4dKw",
  "key35": "2bNHz2F3XmNprxjDSsyHDJTb69QYHL3chePKMo3pQ3pDACRCdFiA1Zcxj8m7V7qjSzXjFcTvqKYSvEkKMgHWypKS",
  "key36": "2UUEPGDXYB1h7DgBeDKQ1kEPjEoTanGd3Rozavv9Hz45ttnA4nwo8sFobkvudyeVH2NaDerfi378hboMkhK17H7w",
  "key37": "3DUiM6yHuSZ3g7k3xnGsDdSWNxPDk6nthCy5KzY7ba3hMQVtSrhaPG4VtQzXNgBKrj9YL7h9PNmWLQoeJihD19E4",
  "key38": "DqTbZZf2uSUVoigfEyWja9KAaquFgXYV1yibHErwDi9PJM7aHa25xAQTNRB7Tag11upr5w45pyYNgbgwSQiRevf",
  "key39": "3YC3bqTUNeLgZsiYSPfPpFCiK3f9GbJnWCKzLcSSZhVSHvUTWe6h7rgqgWz7kaFz1jwEfJb7YNXVaH6W5ezBzphM",
  "key40": "3ocfQDt9FR9tq61iYVzA5EmhCQYXTRPCgnopkxc2qczKLQEgULZV2F1Zed7NXSonfzYtmKKNoxDtkhWs2b7yCm3Z",
  "key41": "Jn8KNR5Rni7pHpFE811rcaXG1EXZ9Hb47gdz5kZySwoQ1Eiij3ixrop56mL3cQrY84WJmk5Y1oc8YcfkuHSvxJz",
  "key42": "2ZJJGbUNSMo1D63TCkYJtWuKUyVPKn2T145orSfhdMGBbURavsJvX8oBtHUZyxuhuZuLUQpwJpYV5xhEyqXHoU7r",
  "key43": "xnykn6ic9SeBnB4ysHvjXheRZ2HBana1kJLjeyLQPrBTjNbaNR42WzqL7rAdJxLjPBVzaKFC7YZyFQkvwJD1vbA",
  "key44": "MCdz1ySxRgXEN3WxSJznr6PSZF9UKU9gqh8t7hma5fjyKH9n6kBqzmzKiGR5HjSKmMG8YcF415pteRc7237aseX",
  "key45": "5rMo8krzzXx8qqPRng3Z9v2ayjvdWV7pM49862JYNpoMq696fEd9pfNXCSHCtyL3jjg8cufWr9qMNY9j7ZLzf39g",
  "key46": "2E7MFoACfsfEpoGX5YaEJNmQokAfD9R85BztDsVAoSBZGZzSb6C3ZoQ4QzKMuS2mKksDXNGirfNA5H9avTUUtasE",
  "key47": "3XNMt9iHdZyrevRuaf7L8cApxcmGtYvKu44QixJM4Kvt3G8JzZzLACK8BFAJjo2461rhrLLcmWnBtGfjDF5pmJ8F",
  "key48": "4CQFtAmUk6MCJApUdspraQWzxgJWAA6Mp1q5oqtkfT9Mia5bDgoohTcnTysHek1FJ7xMtNF3TQm9d7WLCJERx7GN",
  "key49": "4ev2j9Bqs2zNhZLjMrG9joQjA36AQQkWrGcL9SzuNgdomNPaek6nSdFMs9TD3VnNgYV37nF4YA1cmLiXF2eHatvU"
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
