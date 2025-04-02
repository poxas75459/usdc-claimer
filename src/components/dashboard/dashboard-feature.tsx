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
    "4vdRGmJ7hUf5VAmBsmvafonMhykDwjE16rtps2zc4ewdWUUefiW4Sw7t2HHnYpfYbF633R1C9Zh3XsTzkbD1ViZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfwXSJu7iAr6S3oA8S71CyGhgqE1GFttXG6qke99xxgV4djKzrwfXtj8Aecbb8bSL4wNhtX5u2XqWd5723BEPag",
  "key1": "4FoDKHtcogGzypM9mfLEMiS6DcTHZyL9kBVfi74uZHTP3E5Ngmk3wSypQt2Tcp3ffzTSNdSe4bTm9GEh9Latt7Ab",
  "key2": "2iTDw4rC8kZvWgtLommaDngn92uLSg6qFRuEn4YAdUftYC6ZkvnLrtGo9PpbX69eEKCUSL1VHVH7HCBes41GKAbR",
  "key3": "67ZNz2D8a7ywuvo3L67URjWL3aKhaQXbwZk5A69A4fNKPyTMZGoJqAqccFBYvyjY7QUEGZNGnakCXpky7pfQJ36L",
  "key4": "4mC3iMTbFiR4nAidePXuvbemktBbuh6QAFRKeRovTKQmSxfBV4sJimqsfEte2gdz57S9Ra5LTaVGjXYbWP4nRbav",
  "key5": "5Ev5prG8L6s7n5ogAaPgG4ZXrJmQ2NJnGvKiVCmXNkTwaV2aPcibPACVshL9AM5KjVhNf4fVhtQMXsKMQvTMM57b",
  "key6": "ybYHFzyo8Lp9TKaSr9c4TvbFP21NPEcoD7zKGpDzErXVWTdoFQDvvE6LpubLBhi5m2UHcFuKD6nPJNmKyRaRKie",
  "key7": "nnyc6ZtqHJjVz7XwkaE5C6U7eLHRZeme2scLJMZPEwgsvGU9bZyfjzrTEZJQecvYzVbLB5AKHseisyqfTffe6WC",
  "key8": "4jxoYPcmcc1PvhtrggYD687VmqVvpLhrrvSsBsiewjckntrnXNfaxtQQ2rTKsZ4ioX2F7TXdMCPVctRRnXSTB3Uz",
  "key9": "5gQvusSQEhJ6h21nCwoqVXg2wHL9s3A9kGGZS6egJKMbHdU9hVjzBmNzqio7HpmeoELzrFH7D7d6ptat6qe1GCSG",
  "key10": "sgTYZ1c1kJAXu3iFHG8AYF3c34Giq2skmuD1gHyYvqk5SiTLjfCXv9LafEoTJqe2YAs97BkkkfbrjstSJmB9XdZ",
  "key11": "nD9s5C6Z5nChtiBJKRcEVwH9UYJFAgLShzJHcZ1EgT2meKw12fCxBfbWqqVVYE5283TKZvZHekGSLt5N7LMvW5J",
  "key12": "2XrA11D4YLcr87QnrGukm4Q7oq4qnKE5qZePuEDHgmV9BHYacdv8ZDgdeiwJeGUbyRaPJVj6sGHmpw35Vcexr8C3",
  "key13": "5vJfQRk7LGaPuG9izC3Qd9xwTXozSTRSXpHHBdZrezpkpvTcHssKmYATrWXy3VQz6qY5By8v7tQdkfJ6eXa4Ltys",
  "key14": "5LCNKx2QSejr6guS12VrMEQL5mmjzihTHzTs73nNXXkWxStfs3jZiJpRa5ZkttFij3zP4V76URxSwZVmqHQiZc9n",
  "key15": "3iPJQQEYhBC9nPVdr8nU6tpcx2ngih7SfvdePwP28v73tDyAz5KqH9SrJvA19qEczerBahrjv3SjaMDZeEts6N5W",
  "key16": "2EDwiaMz6zEiCLQEirKVSJQEg1etxzxQzmrGWggHypRTrGMHNsBDhYKaLaymfHZCMDbHTwBG3UvuZxLzHqCjpcyn",
  "key17": "4MiMrmjDGkLaPa56k34FxY4if3NcPeg2fzHsrLKN4LzMCuHbK2tGqqaMXrkBmh6i46Pj4ZmeK6w2LjPEgYX3s5cm",
  "key18": "5BFU49jDmLrBuXNkgZyEMDepPoSS4Upc9drVD1PEqaLPXn5rfmycZUBnruj5MRiE7vW9qBvS5vYn5e584ot2SDfP",
  "key19": "4D4CdeZS74bVKAq1v7L2xYkuiTDGW5MvH4WR3GQH8GjYhZ2PdCvTHmci1RwHo11RzSM6qBt5ihAfyabMveQ4215d",
  "key20": "3zhFipGkNYxikGQodTiBdNiqw9gkzGYdayQuvoBtCTj92hHraZvWvWvvXje4YYQXmVWsJFFzMnnmw769REhguDdg",
  "key21": "KRdFm4RRcF5zYFP1SYsdsdFmMD9qWjgdXydo9vkJo7GbkLQVUmF3ovSzUQ4t2ZhYBk5JYv6htEyCFKfusNEuyZ5",
  "key22": "5D5VbkMMr3aG3iucWJK2oNGhzkLqMPLqiGA9emY7fKteqVAc14FezsbkGguEoZR7faCArrYPce5QHxMsD763PohR",
  "key23": "2tjtVPNHnBjBVNLYzpXmv1CiXYorF2SwG2kjkwEDdE7xntSKyHDy8BcYdnhWd2n6gujDk6X3giBwzgQhPqaNtdzR",
  "key24": "PrmrVtkNXa83L1oVT3bFmZGPzZQvo4UcNFozhtRRd35hHeNYWB4814mPHMSCyHh4eXwNSw9ucz8CLSbAMBZAVud",
  "key25": "3hjqtUDg2bUxThVSNpxmQcBZY7xRcHAN7CLFAN6RiYNYepLvogmaWwD1PsDo1o97JBD6Au83FMe1wXbJm2g7Dayk",
  "key26": "x6cBXz81NhUPfjZYRm5Pfk3Bzh6DUB4BinF2xpxXSJMg19ACLm5oFaEaqUyggLhX2Q171zkJrkQedjaMoBnexYv",
  "key27": "LWA1Cd6fzj5vM5aPYV6tyhGVJKf5o2nLmKyXo9yvH11hRsNCpQDpxA1vZPmgS22Ke4jWwHYq9gtu9PoviAFDqzz",
  "key28": "5hzX6icJV3XcQiGEpVhSYvbtgtbGS13uAee2SHu2uDgxwpsJEeB5XP5yEdHZaKMaPdouFgQWgdSa62exyVKhuZjQ",
  "key29": "3pJZh2EeKbrx2FxBaEezuvNn7SYA9SqhDSqHVDZrgTD5pNT6xYg4gwA5C3eDQn3GrBkrxmgJPNyKzh2tqxhmvZuJ",
  "key30": "58DMy5oAZj6zAzcSyTB5ztJi9XQQtzMkNHNSyJtW4WqVqZ6djVtxCEXE9FELWjaCfhFeg2C3B3BDHUM7zvEY9Bot",
  "key31": "4VQuJqWRQ7aCJY5YmxWkoQnZAVojU1BQXzFoD5XasTtKr2Gr58dZeE3Vynoc9KNCoRUxd8eWBdXmTBm5vxNAosrx",
  "key32": "49TRdnWViQ59dtXokLosWK4EJ6TGx4cbZCznGyPRHYKVVvT7neghNBeViSRcmex12toaEeRcxsSmeisEK6LzDSvb",
  "key33": "45xwHmog5b3338n4FfKLD7zzZqY1JJEZoPWPRwpSu63pkU1YzhjTpTQSDqTtmM96NVX2KA4Gac712BMxdRK73UVC",
  "key34": "3kT7Ygr6Y6RWkZq1odXXGxRe9FjvDCDeASUJcgNZifx1nfMYLJSVckVRSmWafakJpiWSkivEb5h3TgtiwGXMn6cy",
  "key35": "2niWfehEoxQ5nJhbb8zmx8DhToKHwwaTuRchbYdvRAd9njteEhuvLJ2PCPPRUHbKQPaW2tibGgrgXT8wYkeJb6g8"
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
