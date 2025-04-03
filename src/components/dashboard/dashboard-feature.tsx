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
    "5fQ8jUgzqucVXHu8qAi3SgoXzct61hgB1VFyppBMmXx5s35KmAr984FHPN2Qu6UTyYj5zv4YBTPPKN9etLUYm9UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhaneFhXrVKNrms7dPhG4gv53zEghbWU6BtWJrnBhPNJoi9D8rndRFs56XF3XurSas3bdWovHDmN1moqcJgX8mL",
  "key1": "uqYwS2YTAxDCcjQDizsnfBtU399u9Lmm1euLdDAWz8TT8WNrTg9GywBUtkHChd2iusRVKe1bHFFEfMbBaG6eyeL",
  "key2": "4CMCJyqb3ZPoqA4LrMVD3qsAAUmeJH1uu8X9diGN8Xzgd5xGFcUSMHcTgd2HAqC9HJisphwA5SJjKG1fQthT3f1R",
  "key3": "DxQQRReJWBaHffygd2RHbov2FcnqN3tq5PiA39VxapdBEfuKb8uZVRJcKzsDFstgSDnmNyxkshhQCFQaqcVioYY",
  "key4": "5imKpWvwB9GttbaXMTNABAgRuD1fFFipQRQ3mskwpfnFrvKAm7up9pMj4VmHspXPnwdNbrqWsdeJGcvtzr9VYr9s",
  "key5": "2pxuvY1hN92gR2YN3WvP1aNwn4KA78AwzzxyoGCs7JKqYxgnsnL4PtjAXa7txDfxLtgsMRtvirW9VKiCVKeE7Jxt",
  "key6": "4ZG42sXhPWah9pwvEArPwTyijLCtUVHZMWFDwGUH3vLD3hnKMU6Dedc693adzuid5CkLeJiwbYYrDzVcgSqgzjuN",
  "key7": "62Fx4eN5XBztZ2MU1XswaqgyGCSmG1FvcB8GbNiqySUmsus8q5PXysYJWPELuUfYy7mWazrnbhYVYNDjcJogANPq",
  "key8": "2MUWs7Ccm145RvAQbvzouqrgr1nHoay4t5cCXPfAHvTg12Nwp97ujjDYYvCPfaq7CNEPEauAqycY1CKHk4XoYtvi",
  "key9": "57F8GBvSPvBRHB1J3mzn2Ayz8ftip2rzGkuLG9WswQ7TsEZSJwq9Ra8mvCZobVNjGCXNvve7afhuA7JLT7mrZ1A2",
  "key10": "4BLxPc9WyFYQ6NNt4S5FyYVHYe2PgPM5bQzLgvnMnkns7kFT4wx5EuKWeb8xYB8yqUchGnv6mVRjU69RVqfxr79N",
  "key11": "YSDQTmaS94yJm2zZMjkKaPB8KzUFbHo2bNqkLYsKV7G8b6ubPN9MXpyzfnmgAsJ2S4StvVf7UWrikfhrUtu2MEK",
  "key12": "42FJatUronWGLSmb1Va3C4aur3khHmtfernKVsGPGkcQqkjb2KaC1kKFciggVDH4LGTaG97AB7AjkyZLtt1sWcUd",
  "key13": "2HxPPfmbrzRZkjRByXqfG9MMZV433AvUwMU2s5eaFU3Gvemxa2WXXu6gpStN3wKJTkSyBc9VGWY7e9hKY25C3eXR",
  "key14": "2giQjEHjgmpDeLb9AjrG7v7RaAtNXQSGLjoUYrY9VNGH5bHV2yte34ZQK9iu94dVupSEjKCutkyyZBWrRgZVoKUA",
  "key15": "548y6YAmAgo27NjxRxJnoGsFaUWesaYWms83eLebMAUcf1U2tA93cmi7Acd9r4pYQqQGdoUKXXBeVszYryekPwSP",
  "key16": "2xiuXNb4C6gmSYC5s1pkBwfEFUjt3hJxkXEcfrt5wxVfsFvvn5j14LSUgEVcRQLeW4NDCoP3c7Hs8zpsswMdeHqK",
  "key17": "49PvDrGgU9Q5nt7aus4beC43LN9fJHrMbMYVHzR5D3kQjUsGASAzqnwTUnhFBeYr5b9YxrDfUiKYw4a67XTqedxh",
  "key18": "5JT1GQSn8ymc8unDBFz5qTzxn3qtHJjfdvZKcnKBuvTFBgSN11TpqM9Rd43Ukj36qeuYbzUuqgt2DgqTe6vKPwdT",
  "key19": "heA7kTKT2WMYEf8M74J3tU3DsDWhGpiYzPnMee1jeabAvd65mCZXDFJKvup1LXcb9LdyvD21zHgayjPXKgbKneq",
  "key20": "2HdxaWUG1iNuKsW6v3HXDvrVor97kpk3wQRjSjdoXhcxoKe3FftxZCfipTdXhD1yhwGTtRQQYQzdhqwggFdzazWS",
  "key21": "m6q9XdnkYpWZvc9yppf3dx66RVMG1Hbdfbe3KLkxvjMdgAQ4gqmaKay5QeSmZ7Vaaq9pNboZRZy6x5HKGgf3VuY",
  "key22": "2tRSuJXQ4FziybKiawoTkB64NcvPcqYxdoHVcTrzCGVjj2MFHAwFzqbufLQukL43yMo3RwtE4doomrBRwpPb8ccw",
  "key23": "264U1rKzhZt4vmvw9Ek78kKUaQfDubsoHeTY5UbcWh3WGy9jfqt4ZqK9p5jcYGrhPdkM4eqLdGcMkjR6CJHqG4G4",
  "key24": "4YdVdxoZhBRWp543WH1pKwJBfuWQVSF1fggeSuMJukHmUZNkpDwjMCb2jz4PbLGJp1mi3ozb9K4P1EHRCg12fWna",
  "key25": "36XxfAcZgzU3CKSJn8hz7WKnnhqLhjBr7buBY5yS8Qdg2e6oadebmT8dMgjsoJhJbwKqmmJW7bUPU3wSZGEUbx4n",
  "key26": "62PVnL84Z2EdMFTk1ZsJZ3WPuwNGwaEnmu9ggB7AAaCtsUo89VC6haVxEu7HxWM5bxwNQss3TewEwDHV1taQWpQf",
  "key27": "4ANQFWVHr6TjhVEZ379cfm2Wi2U8pe68G6QMgugUv8ariDeFhuPLbv7bWHaB1vUxF5hR4CU1UUDune3tmYrwLbbC",
  "key28": "3VjGqhDUJPmDuuNkz9GKXcHUuMv5uZ2qKUdNvzjoegy4T6hEjWLcxj6RxoLiz8e8MNPLdaosHx9yaBRMoCGtYVB1",
  "key29": "29wF6HGBSB9AnfRQoC7w27Gfx6KSXFVkazH2gQQRYSRkaioQKk39JCiiWj92uyLyozWFo2VfqTNWdTijP1jgZstX"
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
