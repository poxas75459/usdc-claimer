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
    "5tYcHdJUkMDK15HL5dbg64JexYNtqXvZci8JmzSuafrrkj3bsdMxLhs4gLa28ZnJjwrusFzZZg2GQ5b8gNSzSHS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48n8kPZhebTafZ6z59pt95YrGL17teNdMJPWCxbdShrhARiuZgrsm4hksq1zdnuqZ9RHS62aMukp5mmosiXyc3gM",
  "key1": "592ckUKvgp4scGD7mdy9y3mjRSHJvebfpedxu9GQk9h34k2bD1BDvS3sgJMgDuvdmeRCAW6vnBjwaNRD2NUc5ZpQ",
  "key2": "Fo4NRgNZxSVGnjgAMJiRHVikH4Vs5Mr2VT4eXnA9XL3bgszphSYu8574VMW2P9kYeCx1Q1a2dmjwLk9ifLdn7CT",
  "key3": "1UBQw5XXjC5WnJSLscBg3XnCjQD7TJY3Nebn9GSEWBmiLb2nQvwi1WXX3AhMz2SSCrZmPiDtnMYZHYEVJEgaXz4",
  "key4": "EtegApXVtF4x6EYtL1Nnnm8EntpRCmirRc7webihT9jJ7e1iSsExe22FrMRqZsqYvkdUmZ59wGxgEK8jnk163Ax",
  "key5": "fhzoJKViYf8zL7VWWrYWh1MQWUQ4pk59K5ZVda52HTP3jJ3m369Y62xGtui1NhWi55UsHvijA7WZkN1248mTExv",
  "key6": "58VZ9UHHf879Ppyt3zHzJwLhHULgERBUDLjANdEqaQg4wCptUvp1StE9jw8ZqguqteY2P7onVcd3k7xtUktmrMQs",
  "key7": "2XVyX5XHLcyqsNkHUzLLXc9WgP5sFTNMk7Uahxi3r79kdifi3QvZuhf5Pc2vXXVk8gJf9UrdWNgAQXHqWAdo2Nxk",
  "key8": "4aCjCpVE4gG54Wzt34S4upGSbQVBo4XLpWbqcaGoN6cG8UCbKAZtcv4sYeogf2avJh4K9LC6T5ervWXdaHxfxi2p",
  "key9": "JnDoqSQ2BFLcVCNyqgjFieQoJEVU8f2tF1fVEdvKfNp2mDYeF19i4ccYKA1cA4J12hEtptPuACAbLipfA8vmxdK",
  "key10": "JX2ZBp4DuwikXPW7tbGSuq5k2VVcymnEwAXJpqJ29Fzv866AwUk65Dapx5z6zShQLUAPp1SeMahnLBmk81jizXd",
  "key11": "38HsfnvwAiYV7f4ivGYYSCKA74hbuvrrXBSjVqB3ZMtMcb3P3g1fKvwK7RmQzHHSVmUfHeYQUG67WatSVHAeobAu",
  "key12": "4kQtAitMLwtXdGfvHNpQG9dk2TDQEVNUzebxuEAaEMPEM6FRHc5jeWkM3UCasac9R5jV7hPSYb6W8eXk4mvHQAfw",
  "key13": "WtiDz6uZzPLX5mdF8rbesJEco5c6gZGvc8MokaSHFo4accibhTapNR6a6yahFXm7kKkKjrc7R9YBf4uWKnXkX3L",
  "key14": "5gKocDcbqEj1txpZPHLNuWt4p6n8ywkQvJSUaJhgtRQet83qbvX4BwxXnvrLGB8C7q6wfPFpbEfShuPygfPFTyv2",
  "key15": "5hYXhejGXtJPqsoFHqx4yxhvXUw4771pDfjA6LxfMWAuYTAppi5QMEm7ktMmnRmbEDnwJW2QRUg1ZSzNUURwaVi9",
  "key16": "2HL41cBvihqKPScTLdf3wpNaP3xEVmMRKmeDQ2Z12P2fHcT4RVZ4PWmXPzWD8yvCKVqxa5jAefEz2KdxiPrkKxwa",
  "key17": "49gW2yJhJQykrdt4zaLMDxV5TyTzPe4rDj6a5e2yCMt3JkUAMGPd6sKLcKbBc4KEFgejMzBSa8rksQSYoDrc7iKb",
  "key18": "37RGpVQvTFkq5a4nC2Zz3DFykNF1ygSXx4khZoUH64JvS9bocYC64f1BSDxq8xZGYg3Pzewkqj7BJaAKwhrr5QRW",
  "key19": "3MVZszwAMVK61bkUDsGVzmjEM62nX77imw4JskU7Jb7319UunJFxcVLQAjCgeFNZszvRY7hn88cSSF8tuVoRf6rD",
  "key20": "5KLQrox6LVdcQCedt5MjM5xYwmWFE4fPKwCKLVm9zPX4Y8XFfhQDPCr6tKdvNrYayxXE7xUMJzk4noQHKGUwpbpq",
  "key21": "2LTXkDwbJwaK23ufdHRBP5U7p4pKBTkGo96SnAQjUEpzBU4hRsoZSG4UFDQf3JoKUwFnCvk8mhpeWfqyQpvwqHGM",
  "key22": "QDwZ5gkMULb3SeLzruJG5Yxrcs9wSXQXYkVP8xQqGVVBGhqjWG3V3PujyBfDoZ9hc1py81TCKSxStEq7fZTjqEX",
  "key23": "5dMg4s3veG3y19My9QsjPka5nANviQNRdEjajrvzSJp3Dj9gWGJBfTUFeBbiEoyuFKeQJemZpqAEdawN7UBVShfj",
  "key24": "RUEspqThMuQG7SNR8f2msQjUmavD74ZXb8bevNGMjzqmKq7CHiPhVbJcQgY4V7koFJE23vURsD3Zuin5mfAviJD",
  "key25": "5NEoKjex94KGCFWi5kg31ZeeJYtUxw4ygUrSHy1YnG9uJsKW4MFk6whPJiMoMEJ1wEDzmqMAuVpHbAExEbhsZSnS",
  "key26": "a5mawiM27PhCCwYrjSUM2BpFsEsFnVFze6fF2DLbdPKaKDK8jYYxqjAEpK2cqsH4k6Kg7DzkFwKurkkVDXrrfRa",
  "key27": "5ubMRstr1YvYG3e57APzqbtXU8MC2p8e4gs7RumecrQtREEGWja9vbchq28KzxmecoHPTXpLbrYRBFxgBgNLwLuV",
  "key28": "3CuUxrMrPmccu17zFbFHTuWEfFoSx8uyDpqZNzMpBRbo8PunC8v8zcfDb855kxEeb3BbWVh23PMcDzeT2AFpAtbh",
  "key29": "5U5Do47kwzkYGe2q7RGhtwNo9tvjsLrzNQwTWKrabmupw1ZcUS7gK7D3MmuYh71qnNE2ekEc5x57kRt1zeN4DQ8K",
  "key30": "5eUrD7EBsm4CjCGNQZ58ycCDWZXmbbhdQekwg6iPesdnVu6xJdQXYDrWAaGhWNt8JgDvycwK53XcLxrbge6p3Bq3",
  "key31": "2xM7d8N2QkgfhHExipeNBn4beNTNVGHhemBj3bEekUYJCB8Z1ht5wWvWvUqsc8FWn727G62G5hNHKE92wLwHvLfu",
  "key32": "3mGuq1EQecctpXMVUNiru5FdZJpmV56C5eghmStAtZesAkTKW49xMNuTEBYbarF8gLXk1E9yeKsw7DZaWtmnJzRy",
  "key33": "3NcdRAjxnmyjkpXtL56RicjEDAtyuQZVbxv1Ksy1rrH7fPKZsUHaw7LwXruGjv1QLoGQ6xu8WYzFCRz365EvvifF",
  "key34": "4vKypYm5ejsVQ6RAnWioLHhwJD41R6LZUMQsesqUGBZtNoMy66AnC2En4ipfwJjKd9hezX2mYCqyu994KGZCzYqC",
  "key35": "5TvHc9pkcCUAo4kj8sdijaniEvmMqiKj3ZfZHoKhqHd37Qg5a3vozpWiJzN5EbxUYeLf7vvQZMQC56HytbnsedGx",
  "key36": "3T3NRxUSgeNak4n7dnmGpXe7w6ERF5yzM7PabgUaxaCb3HNhSuqXDRXhWbVuatVK2nLg7YZJrTqAChhoegTAode1",
  "key37": "2XhuAvgnAQ4ss8ouoSNzMigzsVzpX84RYpEZVoEX69eYJV9tTByosKcuwRc4bgcBBxUDiikV3xyHk8HZ3iVpTiZg",
  "key38": "47MBmEdX2W6XQZRvUHQhygVQtzGfW1so9USiadcoN4TT2JCYDwWBK6KPZmU61MEvfHFRk39PUamVLTv4JZrFoBDi",
  "key39": "5zSZV1ufj3PRb11aQYf39eBqUTQyhEdhdtomFr7wMLXeb6kDukBPtiz7FUP23YM7b5bPF7GvfGhcSqdak3hSv1hR"
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
