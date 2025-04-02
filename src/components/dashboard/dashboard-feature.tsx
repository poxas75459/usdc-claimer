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
    "5g6CP6mK5BzVejSLNEUAu7EmqezqmabGu5LcqE1kgwSBZNquYjVgeBWH37NAeFGFFbQwpoxsvShqZxvMHbDNkKqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdeC4RgbxhVZpd6pVYsRmzLhA8ddiV7odhKRUeNmKV4XgNdnfHKWLjKRamc65ePMf3AHmC81Bskv1Pc8RzCJHo4",
  "key1": "5KNF3m6ZssTBZTWzHF4d55CSySbzxQfwp5PQPs7kSC3F2HPURDgc1ro7E91KE3FQ4ePepsKsUe1UakEoyFaKEoaB",
  "key2": "4oxo6is7hd3DakEkLYb7iD3ReNk7hXSduzNiWQr93EozCNt5exCjQetTq1YWfjtKmTvjNDqbYFSYKC33zVHHgNF2",
  "key3": "3m6YE8vRTzTcRqEww1gZRvR84F5sLDEoYTfckBJpjo7ohSAu6Mvtx3xzW6C8wAJEmqpfSP1F3hvarhpaJvsYkxSt",
  "key4": "64nZbrkabdvqhS2XfMLAZkB5Qmd7dJqUJ3intLSh2mrhFNNMf7c3TcjtuZJXynM7JDNsMhZzuPQ9cfd2taE8ZaBc",
  "key5": "457PdkyvCyvM47hKZcderCUuYnFSNKJQ9tThDVLwgtKiHNXWh54pEwuW5iN8HsoxzaMbT6dRLNUXEV37dxWyRp8p",
  "key6": "2chTuoCtUFPEpje6qikkg3bvQuJdazqVnS61DTDBKX6jiEXqbcR138wyKosrJmb6vazp6LbXqzurtUsJkPurepgf",
  "key7": "281p5bbS3Mhwc4UVFAwDAEq1v3NQ3E8eKC6LZTM571Tpkfua1dBdoCoxMXYXdFAFGRJiczDEhgeo1y4kShPyWSVr",
  "key8": "3hhehhGeLcCTJ5fSaDQ7DvMadaqhodsAs3dRbC3fUKcrJF7uaqxqsPkuKPnZbvgQzjwi9MpoMF3iUqkpECejZY4w",
  "key9": "TkPwaXbuBo9tMqN4zgsYvha1U7aqXMd2Wu6gYimGuz3EFsrHH9unvPHtrAkNw7QYzJEVYPwXE5wqY2hfFmWMFgh",
  "key10": "35WA4kYLV6LiJ7dc9ExsgcVgvTVVzJo84XXENbLTxwGseHyqGuxK7hiQUPSdjL8wrRLDH1EnQb1UF48U3XEix8pu",
  "key11": "j9WduGenQR22VbpAjjVin9pMu2Et61pRqWHgssUShCGFz8xtDoxGXGKc8TwSEsEDGSjfU2Rna6SFDuVLc9MJixM",
  "key12": "3A7nHRnmj84TfzTn4SWkz1D4hBGuRcVEtSkuMsF2vmKkahTEtZhyg73ahA3cvFnESbBuCfJtuZLnMNmTjNNC8GGa",
  "key13": "54SnQ1fDmx2YD3WXy8EpASuV23Cixcqm3ohqACdwZ2z1PJksoYp8dKgD556q8SiVnDXYL8Fe2px97NtKPrJfnX2j",
  "key14": "5sHA49iQ6M8H3F9jGutFE1zMZhvrTvGmnUgFihu7vr7hXBiLucDH4ropgg84BfpVnU1U61RDEUzmSfTU6KFNgYwA",
  "key15": "3uYvFrkPYdzQ5ojrca5E6w1vsEaS9ESqasq1DiUXNZdF8ZzKv2aFVfuZ1typBimqRHWWL6FvbBdoXsh9c6U6gGvJ",
  "key16": "4QLpY7uGieZf97wmV8iZhHM7EJyLn7ENvWBiuytnsSyCUCxxH1ioQBaFxW84fjguoTY1rRfTpWkomQzhUnYHhkKQ",
  "key17": "25nXvXyvvi8ZCin3tx9vskdhdcdgLgXUYfNKEf3SMRx6BKxzFb2Ut6NwPX5hiC31UtZyZd19Yhz5cfWQZZ6VbeVB",
  "key18": "StDjM33VGQ5Mw5pc4MvFiVpV2Gb9am1L5NzDShji3g8whmbCvShEexKVhmqTERCYBqbiJRMVLhgvRzTXQDnm7Fw",
  "key19": "5P6Cx2rq2i3i4Rcd7TaqLRqtns1xJiGDHNU2nJkkdRVwKozoCBM8FGXz6Md9aXUZuQMYK8dAxbWqDThK8Q4uxTNK",
  "key20": "47aYzzaa56LxxohN3nZDpt8hUmLQUkvXFqyqvvNruFiAWFVEa3qrUFydy9UcJcDbwEmyVXorZd5DGRFe5QKgtVfy",
  "key21": "5CGLrVcTqfXNEmH7Yfe2PnevAa6pZ4NRVDBg55K8y8urjJ5kNanNmhDSKVRgQ8mDuNUE7MqzS3ucAWsrD6zM2CTz",
  "key22": "4KxD4cJX7ftrfZsUGyLHshshgBm9KsPtmUicV8Zb5TegvSoKg8hhLt38D71ijcntF62WDe8t6dEr6q9XHRkGw1KH",
  "key23": "66fyu6GdSjjbPXwvzNsDVSQgu2KmvhakeghbJtohK8SbMun6UUrnMXKFyDsqHjhiwcS4H4o8dEs6ZDuQNz1V9GKv",
  "key24": "2hCR3PSysQxEwSoPFp8CnGTJg92Ze4rgbi5cbd34VeZh94KsvmNykvfCPueVhXREzWU4Ff6R19uyGwaRoA1Mvy9y",
  "key25": "XbJENLjtneGvU4naQ5Zfb57MiXG3w2squLcXCtmWM3yPKRjU85oMSSjvMmmyBzuTJZX3NFwWxAFNMmF5dVLwaE8",
  "key26": "4vBBZxLVKhyE8d64HxDoL4Cg3GSBF9pAHbvQUrDws493BX4vmo5aUk7Xsc3nnDWctA5e7WnXSuwHNWA8Xjrx1dnL",
  "key27": "2Le54g2igyytt2A6dMNCMgxG1V2drZEMDkx2n9kq9ZeEgBKLsNLyC7q7PAgnhGGPb5LRXy4FzL6BjCRPR7sgLJjM",
  "key28": "2V5MMBQtjhaNfMM4tuQ7RVbShyPLbBmaLMRMwHmiJZGMWekczyc8URgpLMionAjRTXYHQXtj8eaqgu8WssTK5NRa",
  "key29": "4mzysozuyDWS6ejPHAPydXEp5AhCnmmzR76x7GoqH1s5HTENud5ZamiC87Wib31M1Es8CXrMW7QnX7qry72nMef",
  "key30": "3ZVqPQHuxS34chGBH8MvjxXUT4DosZLE9EN7cvhRrqFNP59WfeahZZ3RQJi7pQcQTAT2LM5ZzYJnyNHZ1f7RUhP3",
  "key31": "4qhqxzjDUrxFDzM4fEbBDEdQwBgTab4eh3B4uW57bE8NLSXZEe7aSN5qyXHiJ6Faq731K3RWvk6EciE9BEeRsQdj",
  "key32": "5633f9YXBCcaeeAZapUNxFjiysYbac1RrvRTBoFFSN44EJCsgxUZxdtxGJYJ87TnzKyqq1xMZjV1RskvUsDNtMjH",
  "key33": "5fMcCNmxNSDJfbtayKMSXtL2W2PXrCfkSNCTs53gBKj39dKAJP3vNrEyn6QZWdtjQ1Q4vmX2KAG7bENom5NBrzKd",
  "key34": "4niwd5J3A8Z5MZb1LNdwmWtVeqQ1URPnUdQ7PrSxbvdKqhTLkAXKZqjwdVutyFbtHT7YMeyTNa5SXBsxdWhWNq43",
  "key35": "5orQTS62e8UmpcXXJEiC88nuiJpax5xBCQ8sf1dBk23cuTUn4Bm7r1UvwnPfjTnq7nX15wUNMsG9wyXxrVHEbJP9",
  "key36": "2LxTqm536ZwFxRpU5CBPHgvCWKWnzqjf7bEH7Ym9sNJ8UkCzMjVMz2JftbAPkK2Yk5k5YV6Fkx9U2WT4kS3BkGXP",
  "key37": "4BZCcBsiL7h4VVMYV8CJcj3KE4YURuC3SPaxDicR9VPxw9oK76uN11Jw1ZgWzWn2ZqbmLwmBFsqxY95xfwjpogt6"
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
