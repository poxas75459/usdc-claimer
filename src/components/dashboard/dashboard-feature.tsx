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
    "2Yjkz4ZDK6LbAwdqUkR1amSFXvgxZD3oFg8j5BHrHW5AZWYYFrxkXEHv7LF3sazjWEe74CtexYQrNtX2eenc37me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79WvGjQbGcyVui6Uu3xDTmwAumQrxpmbZ7gQwbVWSQ1qtPL7xhU4XbiKyozTPFBC3oNfsaB1dHzDPhjdZhtfEcx",
  "key1": "3BNY1iAidi2tpjjxLtKPwNBTyofjfYsss3BbKAPZirvjxQcoAwiP67ZncH2HQhs6o8x2iDnK8SpZQ4jB8jUudUJ",
  "key2": "4mtQJ8PuMWHGW3UfdBGEkmKNzv8JGjSwWxTKBMj5nstJdwcc9jwf6ayManeL1qoB9HWa7DT4mmg337oTmBQYscS3",
  "key3": "5emgdjNmTBdWeigGgaBuda1NVMQ44r9ybmWqZSKyqmfMKi5Nn9zLNuBMNS6Mx8NW2T3nDF2iJtpt7hGhhZs3enAL",
  "key4": "EGQK63HK1hWWNjQiLuRKS5hDcLkJZ8YsDqtEqWQgTATVjhRdgWzjVuZqoxcjNuJdw5fPWc13wqGQaBgrE2zuDeu",
  "key5": "4M2kSpbNY69wqq6P5f79T4u97qHdSqFDRVMDrkz8ia3ieV1aBEaRJZGcovbZshPLbXFQrGzKNyg1pEtmfW45ioM1",
  "key6": "KfspibXXLAycXkjzByS7NJsHhu69tyJ3LWQ6xkWDCADUyZvZjtDm5jPumtGPu8XcU9AmoMDAdBzph7mqV4p1yE9",
  "key7": "22hcWTbSTPozDvDALJo1WTS1e1ZPRjaW531ymYZQ4VQwDCFNznKKpFUXfLRZWufhBvuxiAoYau3p1sjyBAQn7wsC",
  "key8": "3UK5uzCYBZamrB5AT1RoLo7FFyWzssH3gi2NJEfiw5XqZzwCRo4Mn8XVn9VijH6BL831XvcEnAjbFtEDX1b8dQD1",
  "key9": "rQrcZUvvG3XLV2tZC9ThKoaSYDBGTHqon6pYT4XRLCpjaRJBACSBVG5p3t71RKircYtG5bhAfr1AhiE1cMs8Dy8",
  "key10": "22JJmnviAKiGcZdtsX3JKd6wqn6PJkkfXSodHsXYZXJJBqhTjKgwebQMcpcn69VsYkabrda7yiLP9V3yS1coFrbU",
  "key11": "3nNyHJu4xxys44NzXHsApZ8Vvt2jUEiNAN4nUgfd6WeR9Yt1REesM7oCoLZyuHeZGcZj6Uq3tm2HdVpgfCCkzMor",
  "key12": "4vUVKYGz5auoFD9onobnPbGsLvgvi6PSDMn1YRia4aPMXFaTWy6hPoPq9gsus28zuwrPt8riWGZ1TVR8PcymNKiq",
  "key13": "4oVhMeAQfiueaonMcRr5EyCXp2qHg91RB64ehf7SGRhrQ88y5tKm1qFDnKKTDVhRKTu5j56yFdeseZuiZaJpKqXk",
  "key14": "4PKP3RtKvU7CBHuRLf5HVXciouwLuamFti3p3mBNQFNbT89YRZ6d7SxjXAJr3Yfh9JGJoAVRoBZU9zfbZjhkHwEF",
  "key15": "3JJuh9wJE7mQRLZKX8WD7MN2EjLejM4uRZvsEGz9fFiaBxN934LAph1XJuB7LNCdy1ARXqihWwvzxxf9UKZeJLU1",
  "key16": "4vg2xK6XUxMruCQikEFgHqJvKNMBALrkkGX2TqqAqXaUwgx2baoeV8XWoAfKU55eYH1A6NkKvmzCkeBikoc4JcwJ",
  "key17": "wx5Mx7aBPNdC3jicWt6t8JRiV3rPZgnmn8wDtZYAXMycYSJzZ836mYj1dT6FkimHshme1nCZNWNo98AuGs9oRDq",
  "key18": "4JgsqCmVGYWb8f7bFYPbkS5H4azpUeNZwHdheZGvFMMA9HezzdT4emZi4sjpfR3cjUtVat96FMuYtCf8D5DrhfL3",
  "key19": "3s78j3kC4XYHGWJCBUYZhrYtRuLwgyLaP4WfGCTovSgVce5hCjHn3B87vzLEv9srCoRxNF526Cw5wxP9SW72V69h",
  "key20": "TM3bF1Q3hNVemumgMAz2b8xChr62fvJtK6fngYPKCJFEW4q3MmkL8YzP5cydQNwR6cRN1srzaS64NTvM5SQAMaA",
  "key21": "5zsQhfJQmzVPQWEKJeDypshZBo6inJXoNtf5dc6dFKbWjuMZcsKSiVSG7ajevskbvS3Dpga2TkbiQhH3RoAbA9hV",
  "key22": "3j6qWH1swt4cHQfnvkWqYWD3bbmR3TG1UZDbtUURz1J9isUaHGaFuYNNfueKQwufmdPrJbFyVQPPzSsDPCd4Mitp",
  "key23": "3iScxPWzFBYTnwBmrSNEgh73UDo82ix5oaRKYRGFjbydwru2AVCKymm7yohXnYyKaLowS69vnc7X3FRx7BySiw3Z",
  "key24": "4ut37juGBidYbBH3yAeGCQLrBUR7qpFwfWvSoH84s19X3GqieXdxtdiLDvNNQy74zF2PLQJM8LnP4FPfAcT4cAyk",
  "key25": "5vvEtMjfNJ44ssKYZmApGuoUAx2sxE1A7XBcqioXJHqFBSL1JQpVbG5yQZtkCksURVU8fDLKeMFFaSdigtLAP5gN",
  "key26": "NVm4Z6fhvPMxW5CAfFq7XwbEEpwEHWbkNMKekoJ4iWZuEqctNYCSPBnuTS3Tx5mdPdvhHHu2QASh4G5zrq5V5ob",
  "key27": "538WXaxqbwso1pRiazp5DfxRm3xCCXRDmTyG2Ua3XdvnhTdK72Kw3jsyaLjcLvssx2FNUiditzCfKz2yoTU86tsU",
  "key28": "HYGrgChE8b93WtVmouRiZLAHnXiVWwguu2HbE7PbWcStLwfczuKyyU3RKq21yEq4jbXRqast4NsY3Kmki2YJPkP",
  "key29": "5kaPCURYd8qJPt3SDvDbXVsxuBtjiTAxxtjXzmphL4dsWT3Qbj9qXFGLZtGC7NDC6JMSUcFpxRW7gsuPjkPDjYRe",
  "key30": "qnqgtbu17XSUvTvJjcLjdYL3Cqs1ptdcWrHXNPwr8zu9FzjrHRvVSkScnrvzGPstWUdQgSigTn28QHhifLjUR8J",
  "key31": "2TDHWFEBGKHfot926AqSaD2y5eV3V4tijLwysyPNBqpD2xPs5tuuex2Tv3Hy94dReSSS7uzC8ng8zjULC1p37CqJ",
  "key32": "wudpo4BhkxHMctrjUcKw6wFcoby7iWFbA1ubyGXYpjmnYSUHFiEB4xUqjJm3A3LUQJZPr8MNsQjn8NRU4qBc4Mk",
  "key33": "2LsAaDRadqufa9GbTW5HtdCihjhfWcTnt5aC9uUFjUEsU66v8Yh99qUJ9bDbK8P4e9KL1nRKUCNfgfeLM2mxLpxV",
  "key34": "2apGjwPqqhX3H5mTJX8AXk1UWUjsMhmLwNjFYfLzBcJYS8ryLy1xzmGFNozaUS5WwUs6yDxnj3epgHaCRaNfJFhV",
  "key35": "9rCxDizZ62M7sB8q2CEXQtmxoJPMNeJ7FVWD4Jcdxu7FJZQqUWQRfgfEwWpkperpmti4EAVHKgTaEWLJDoYCn4Z",
  "key36": "bysWhDnd7KQZhyQ9xyc41WYWy9oAF96DGnfxbTsXfU9unB2A3wTt6QeKaVFFn4kjoZHXLyyYJYbP1o7LgmyQhG7",
  "key37": "uyqCJR1qquaq2ehDGUcD8UW4Y85PbQtWVRQfQPWU6fD9tRCQA3ZNHUsp731Y6Y8MnxWQxbsYznsfaLcKMwGpjfx",
  "key38": "33auir3EgjAgb4Y2EY15t9PdVAbfkci8hhyzc1KtGJDqeQBrSjcR1V1NkBGDbPhDJLeuTwrYU8g5CJFQWZ63aQkS",
  "key39": "4PZWfS6SCPSHfEqLR8NZ1aKoruQDqPGdEgkdxyEzLwDNThKzGeT3ECZuiGzxpv8FeuxBf7Wbp9KYaPd8qhSJB6D5"
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
