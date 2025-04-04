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
    "585aE1zrqG8aiMw3J3UxftWMQMiBL76h2NUKnCTuZCxeK59o7pL6c9vdoRF8yXiYuVJR1KVbKk6VmPiLdjf1YRkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fnhgv8Gba2FHL8456KPXFDkFps7EDzWakVgjBiUhuEYFQkkqrHyQDMsU4Aiury7U7k8H1z51UJc21SvaBYYqanV",
  "key1": "4Uj9SkUEc44LEupoDiJ7Yay1PRykWKJU9mqcMyQj72hzfYDi2ERpUBLnospE74cdHZA3KsxhSfDcfFr5rFdtnwhV",
  "key2": "Zcs34tRjdi45JJMA2chJqaSdznPBZwaLdFXRi3FGn3PrL5S5w3Lf7UMR79NFGqKu5kTqMu7Dp2UbkGD5wDFktPE",
  "key3": "3R2txQGjryo44WaxcBHLkXRzFG8kUhCw2q5tt2WA4z28e49se5V6RBUVc3cVYraHPpHTVAhYN1TK1M6yKr1viuwP",
  "key4": "2LAgV6CLLgeSyaSob17f4NE3XcBGAvHoKQ2HoAUheoDyGoz5nM221wSxd8iRe9oNs1yNfRZnxYuupwc9mcMb5z9A",
  "key5": "2SUdNG8o2fVjR4tDNzg4P6qRbJ62vUSC5HKv7T6i2UBiPQcRZALC2RsumxTe14cCrSyTKB6GNDfCzJUWYWhm3g1g",
  "key6": "3vDqxmotCbBaw2Z3dEi3CGxdiYir8tZjPmsRWKPMNgEmydQVq8eZ28bonPkWq7m17npmQzJcS6LUuesn4bWtswSa",
  "key7": "2U1RK9tkuqNrWXXgTP6MmAW5Lm9dAC6efiWyvsbMS5YSMSqBJQ3K1BJcfUgtk2rjNLjpvPCsgrtWneLobqPZezxa",
  "key8": "s3XcF8SZJx4fqHjDcd2c2awsxR9KEkWhXRNpn6prvfyu9n7ssdmFQPDXDbPyoyCaVRDJVLamqfUci2mViWxy5Zu",
  "key9": "BtFKd7agknvD1vutnTHqTtGXnen4c2bWtFDCmLVf7FKJJCit6c91S7GBsqKLCZ9B8V8sakkjLNTxp9SZsWQq18s",
  "key10": "2veczGftQbgqHUe2N3T9Wh3Tb9bCQJSUT2SoW5KYFAYnG31rycUgyib6fwUnxnba7m7zWXrtvRazUSHmHsuZJ1B",
  "key11": "5c7bvs8nH2uwHdPdu6vMLbSrcPZdvdE7C6Z8W5DGbLFEupen4LpeAt25amwdwGMmJxNJN45E4VxZA9Y21HVS4tuU",
  "key12": "2hnQK59zb9EyRQnJM993a3scVecEvh4ScdvtrpgGPLPpr1MMbVxYWrH9Uj56JbLydMd7F1GRkPdXaaGiSaeevsnu",
  "key13": "2QSV54Qc7JNaapFc1kYhEU2kvujrVM2YofD9bZHXTed6XmCm9Xhz3pBfoGofVJr2675oVXZaHSyihaYwbQpSzymN",
  "key14": "2Av1KikuBmjd9978FGNPqJdjMXu1YGKq6u4uDNH36TTvfGDVkPbULDzcE1eAT2vhdQaVrnpdb5KiNPDvLPPEfCUR",
  "key15": "4rDxAx1b2hLB1zBg8FvHipFZsbz418KS3nArTQqh16RXKzzDcbxranq2sJb4Nvo5NjH8qR5zA7Pai2j8o6PpvB4Q",
  "key16": "2yTguaYMFkpCdCKAFuCFQcW2ufHECHhbcpDojXFuLhHcGh4rBqoesDcq8wQTEQVNrRuTSQQjU4xL1ziYxk5mmwNq",
  "key17": "oo3YodKemuHqtzejzrogSuqDKHn5ZfphzF5B8xBrq5F4hLj3n12CRHzipo8Rdzwx13ivAGSNy7KxsMWHZZBVkEE",
  "key18": "3Vp3sWBi2MBVwv9F1GYQeHkSib4aDXqxAyHa4Jjigqz6kCs19psFdZgtRKQig1uAxSwzprYJzLYW2x4NZ6dWdbuD",
  "key19": "3CXSTxugY8E1JpNp2B6FcDuttRyPCAWN79FUmWL1NxguZDXtFdaJA4aJ615VwFmiNKvcP3kMCBxPZe1mP5bXKr9W",
  "key20": "DkxLfHaLbJKhKD3Ho6yLLBUbWvTUV65o84ibRReujLYaR9MhMzk5EuaRYnVJLoKLFCUv9dwDExB9tEK5k71Km14",
  "key21": "5ALJewES3KWySa6J9dSfLezPnB4YZWrmGgsenu7wJrzSoVTbWUXUqSyWgXgSVzeefR1cUUnZRc216G6mr5hvwUWL",
  "key22": "MbMwbMEvpkXSTBAjZgm55EWpK2vD3qCZLpKJr9wgy4Tg9JZsgQZENaStb2kE5pwme2iyQD9FRdV8jH3w6FLy9T7",
  "key23": "4EERfqMghCLJJhBwZzUhMMR1ib1R3TAQSp8pBfjAm7qswP25HqxvzGKAhsD9mB8GtcRP4dUzbg9HFmZSARk3dtrq",
  "key24": "3MjSvXyVhGRAqDkNcRECe11V7W8e9ip6eAYKCS4av7tkn3RqyoWnnDZStyR77qoxm4tCQnrDsm9uK1YWMc28A4rz",
  "key25": "3XBHS5nsXDkouCtxGCaXPYPufQjmwU5i6fXWK4DX6QhdyvUtrnv2JhstkHACkWSzCZXFxVPrTiJN2XV6KobZsbeF",
  "key26": "b8BwT4oWEQYj8etkU3gb92tGYfY2LRxJdnD6aws1LkjvC2BH3wURfJUt3gCgi4wwjDj4ddta8SLvA8Dc9thUC3z",
  "key27": "KLHNLKAtS2xiyaraP6PiEwxdF47ScxE2wBJu8vfkgMQLT6JAeuuAtivcS8W7wd7oHFEM9xJgnesWPxsL7UoyKPK",
  "key28": "3mdP2em4LEDRBHM3cL6NUQihJEYRNKuruXvRhDKhSi5ZaMRYs3mZCXaxbQrN4Zf6hAPBqPRLx9KuTzpiAphqbiia"
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
