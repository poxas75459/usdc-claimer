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
    "3Ar1bsztfAmh9LcTQY5G1GGcZ4umC4pvkcz4foFaJwTey8BzjenkK2nEWCMQD3pg6QK5gZTtRtkqbzpHK4vmcpkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGArqqT3GHMPujrGBMpdxVdZAKqy8QLDjb3aTxr8oJFeYCyWPbQnEmb8UDdojtvZdEFn44L7WPtLb4W5Jp3qwUL",
  "key1": "56L4m56NCgWDGtRdd8nuBnktzo4EYve1XKfxqPMdiPXb6cdWQkFHtGjNBn8grvQ6T5jERhgzbzR1px6ZyykZV3YY",
  "key2": "5Fn1nmzukoQPRPRZxkEQJ1PoiNJf5TanDJUffkcgEwkmveNobKmVNcUY4Cbtdp8j9PdzmQummKq1gdiAxYRdWW6w",
  "key3": "3eWRHfBLwGE9Akw14NXPTTFoYgEETzdEogr4ExVPwZ2Vb4mZ3AoSC3EpHQ472xKuiXMRzKkJWZw4g9YZEQtywtFP",
  "key4": "585zG4zgTGtPb1vMVE8qnf7mvnZVtHMftyR6jJgRbvpWAMbqUhNHSY6Faqkgr2q9JGkX1XCfcjn2AThmS3dJ7Hfy",
  "key5": "5nsgroRy4Q4VGiJe9LyKvWE2jvUCnSzTCn1jG4Z9b3oVrAoxFmu7LV5PNNmycTUbyGUST2jSQHfVDf58QhH7UA6d",
  "key6": "2c18Vbtu3C8wiH44ovYpdEZSuDMjeQC3ss3JXJyAkEzypuHCqWhnwghePEGJfPJ4Y2QQJ4KbJSTaudCxmAGN72iD",
  "key7": "51Qmp4fbLTkmX61VF9e89TsvtdCQVjCyqZKd8JFjAFGW5Go5B3UCdxBFGGUZYsC7ewh7mcpARSNFPuVigPuJku7u",
  "key8": "51h58XaUBE4Tr2ZYuvRBz6LXd1K2LLZeHZ5uMTys3Y6hA2Ys5Aptsa3cRDGkLiUnugcZ7nWLXtgyerRWh3kQLuzR",
  "key9": "4xSnSiJjjAAeWbvmu25rxhB96d1BRCHfce9qkWcXJAuZfs88uMBbLwksSjvjpUUxo4ycrJamygoavtBASJiedsHf",
  "key10": "4Js3jb83HHCCGQC6WaJKoEHhDmgfdH8knxuqZ9UTJsu821txdYSq47PXHHA5f4FLsJJ8Wt55QhtiTKTFN3nVaN9B",
  "key11": "4wKuAx13ANAArV5UMF4q6WjUoakfGwyr6DZP3L6f9mWc9TNMrBjBH4fxg9jnfjeuhwUC2za4acs5HqJtAjrnrHpz",
  "key12": "3q6L161Gq9mrcp9AEszeP9ab7avJ7ABFuBsMeysrLUaetXqw758NYUYAbousjHBRiFfYgk2D71azs98PzbFcgw61",
  "key13": "33kWLCe4sbschEjgyyU4Nnj5rDnJ7Mq6QgEydrQNM2kNeaCRjKHC6cHmBEAZicF6MUuf8rskLZgQDJ5RVPaeDuAW",
  "key14": "5UN8RfU1s78GB7mMikb73Jq1Xm51PunEiUnjNXJPTZaEkZHKXLCkqwaAvQMf9EQ6MCZjpsk5Te7USEXPgzBbczW4",
  "key15": "3Ebd6pS3sVMt95pZX1Ju9jxwCpMxS5v7eHLiRRKgPSzim8QvzdQ2oWQk5VvqW1KKdjmdfDqQECnwA3ydof6ZbNxc",
  "key16": "4d6Fwg6JH9ML9CCbd2Ru82cg96THSB5ZXhHkFMYg4bWRQa6KxSizLJxA2ws5g86RqacRwiFQ29d2xxxjczyTfJ5X",
  "key17": "3GMYo4gfnGp1ecRJZ5xBBRqAMXzXGEjrtd6FgjT1vYH6536N3E92tpqTbziWPJak4ybVvH7SxxCqmMH9cw52EZG2",
  "key18": "3wya3Y97nWP4cQuAF5dDzKE6J8JBLNCMWW8BpAYxsh2aAtUNhwZg7EDn2JY7A178aUgvSVZ15qXxU6WFgf6ZJojG",
  "key19": "3bz64XSnbwCQszoaMVZnc7Bu1Pi5JZWhSbJM5FctruknWeeuESbvTgKYiuEwptTGu8GHfDc7eFQdYmkcmeucehn1",
  "key20": "2TChMquYbedG2VE1V5bpuF3tiJ8Ry95n4RxhakDNUHKd1GYcoyYURvSRxd3Q2V42zW8EVFWn3hdtrPybEraL2Vks",
  "key21": "5Dmugi3wy4Jc6ZPKx7PX3LwZQjZVSW8gcn77tddN8G8CZdS79uRDrBQ3zqEUAGa8hbEHuZRAtsoso2eUqS7FtQMC",
  "key22": "4UYMrFLLaW8DWh1wKWKZgmxFZzo1kKYfZUnx5KthdG8jU7Vei9wRa5KBVWxHAEJQEGWSM7BW4VHGToYLsSm68TqT",
  "key23": "5jmmM5mAvvQrzZMQb2SMFCUzcXcEJzky6xX1RPvCXLykdmWa1zEqXPG5Z8Eb17dU5wTSZMZVVMVXF7VkNgY46S8K",
  "key24": "2X882LLXtjUij8SfGMEZ1inksdAq5XYewwRHCtVV9oaoTZsY6wzf5dG4QC4es3WqhzfygQBsMWarArseVUkE6cGp",
  "key25": "67i3JWDDgyxBdu9AqswZNa3scnpRVoJmf2yaqd6m9mdteb5DK3P9dRt6zsKevyK5hvmbueeqT6KSrWzMsrn54ck6",
  "key26": "3NRhJc63wLPpQnarYCjkRekjey9XM3wVYUnD73Z63C9pmdoFUWHoN5ejRi1exXB83seVbQ4zxXTEBziuqEZYscHf",
  "key27": "2p1GKbHGG1zTzgA3mAhhADstRP1MPknQyD6FaYSgVcywzwQUJjnsj4FUKRRPWSX1PkRnBc1DRBQvKCDnvwaNvwbE",
  "key28": "KiyQSLjCRefxyoqUfaLEkujqJar36StWJVQGnxYFqZaR6rcbMDxkKAK243z84iYBFmUqm1AkkCjDFMWEsncTckS",
  "key29": "5F7UWH7hokrgkreBjHKhxPcXcormS2aZjVch5XJGCXeBQ3qakmDa7MkUP5hFAnDzHDB3ptujCYWc9aqNYSU33K6d",
  "key30": "DS7c8KSxirVmqhxoMkJVW7Bj5RmQcyjG16gMWSfiYmXb5NLFM5Atgbe9RuspFaQa4vAa92SLmiZgT7M1FAT3NgX",
  "key31": "3dpoVvoUFMbFgyDfKsDSacQ2TFnPrQBdPgQnNUw3M3zBZfVbL4wKU3vKn9BqyVLdqhMi5bx3CQ7jdLT8ky1cCUgC",
  "key32": "235StAc1ZeDnwniytHc5WhLJv4BApvUVV6Zrr2etqcm9XxByKwSB31Sf4Zuf4dT7317SXPtxX2maLhDVMtu5TbBP"
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
