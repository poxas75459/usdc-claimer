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
    "5yMMA9bznsmHHj8tDuZoz58RK49tGNGKTT3gjKGBH21Zg1UaG4D1FSdhqJVTixKgJHHwTxHz1kuU1ugx9h9xd5uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XW9f2gb1eioyEPDNhCPXRmZrZN7KgAm34DhUQSeBQewaawj3RQJ8szM5NsDq3EPAHvPmUcExbay9vS4ykQvuyJH",
  "key1": "4vjyM3rSpWUFMZ3UZt68LaEKDUFDfpv2cmJvCqdRmx58u6puSR1AN4cKWsry3V6qP2Y7YjNSUEMnGXiG125NDkxC",
  "key2": "jnqsEQRMysDRifBzUkW1Qohj4mmz7t3HSXZpn845mXVDh73daoBnZi7U6i1LcZhEaJg6rAwAGV1RhzfU7cyKBHP",
  "key3": "4ReKXuGFrH9HGNAUo3VwnGT6wMX23qdMEcBCat7cWUPWF3dvioxaMgX7JwJ9fTqq8JRUvrhTVbiwE8rwdFYMa29X",
  "key4": "3gcrwB5Lh94i9mfQ2qZ2ntc5sJcPexTiNNS9mzVgn99FGuCUeJRLPKgTxe2HXMiMEHKptAqXaSZcvQWPpKLfxrMv",
  "key5": "3XZZ9BJ6zmvdksSoYSa3H7GppAZhw3vVPT2re1gLzVnM3B2SMn1XkEWgnvSywYvb9VNcwmrg7HaMnme1BBH63eya",
  "key6": "dvrdwo8sJ7XkyJCb6pE3nDbcmsg3eHa4LmDH6K2mg4EYX4Si382ZUaxCbwvrWEwSFBTiPuAGVCN5JE7Y3n8vpe6",
  "key7": "3hWtSiAzgjBYfHRz9eMjpYduR8wfdohtEtaLCh68bWnhfFVjiRh22Ss7hQwMYkyQnhpdEtYZDikU3FcFGGfERdjM",
  "key8": "3r9qx98FR9SqWPvHkpMzeTNiEQqu9UmLQuJtBNjcXzE36bo4geMYTTqdBiSYUa8QG68t53NnbUYCHqnQcCAXeoX",
  "key9": "3uGN2PvT1MUozRjY3H8316mCbx5RW2d3XR1yJbkhn46FYzy3c7gyNdPfHiMh7BPTXg5qar5KNZE4mfAtbMS7HLKG",
  "key10": "X2BTcLJVpXWJXCYeaBW6T1TAw6Q6Wf1R5re8aNqUFWBMh4RrWqcwYCj1WAkg3p3EptiKhN5iN6bybX1jAWBfUFi",
  "key11": "4xZFMrFWroNvVMdXK6MPBVdWRei4DRobmt5GzfZqRbGU8KZHYaqZjoUthUz1p5KsWMdA51Rc3Yop9zk8Mit95TGs",
  "key12": "26zupGfn54k4ruRvuPeG4kGWFNY426v5iAMCYCMN2dXomx91CSQjyUiC6VK2aTibrHG6m7CBfBzxVyxWvHFAJhkB",
  "key13": "3quvbHo2GFPssFEe3F4AKtQzxmUBicZKKPiLPDboZkG25Gvhko5CsbXTwXZ2w2fvAdX86nSdAw3o6AcDXqAcFQMx",
  "key14": "2c4vfmYd7d2nBv2Xn12vyemTDnWL216c5KVpyPqtmbN7784sN8zekgQNgNFj6N29Cv3kooVE3MrcVvEruLGcLJw3",
  "key15": "4YYn9ptahLsCZ94M4NxcASTBAbgd7RyvhAeYVHmW1y3ohEvzC5N32cLV77AQYY8xWLgrDschPt9phw2U2TB4NsGG",
  "key16": "3fjQL6bBgQTQkf9vemBEmwSNYUd4CgfZq6q8AaTS1rn5NupsjeKsJz66CZpEan6EwUszYuV8iTYU1c7YLMUpAewq",
  "key17": "39pVg6LJmbo3pYd6LZuQK2K9Cbb3F3U1mm5DRE7GyhtWGjLQ2M7cTwUeLyTxp5QfbeocoEs3c4vEvqHq6qh2ZmZk",
  "key18": "4RybxrooJCBVtP48aKENHvYRkFFWrWYRdbLEnT2Jon99aT1m63djKGXsaCtZUkyG4TFEJmoVTF3JpMAjXuBaNWL8",
  "key19": "4XjwSgGHXT2x84sBtbSv7cUaFJteWTznHCLn3zDhFZ4Gg7soX3VGPaggmkgt9AezfuooioRmz5EJRujsHHxaGXun",
  "key20": "252ER4KzQZC5wk93hG6hoEvNMP2hgbpYyaiMcxi2y5t4WrHCUrrtKWpXjE5NMt1XJHoprVMiaA3HXpkDgAvoLbYS",
  "key21": "3UrxUhysn2iEGK7Y2ubfkAGfM6F7CYYf4TnCzp5GijsERVntndRmnPjurntEEXgjPnzea6ZLjVuJttjSWKqZZn1Y",
  "key22": "oc92HghYa7sp7Mr4zaiETgw1U6CTQJTEiahZLB3ACFcbddcNnDcpnHHjjA3PsdAjSnruupkY7BMYSpcG26dPsdJ",
  "key23": "265Y92bkuDPJgZ57y1FgAyaNgTuFntex1fqA7GgxDF6PYFwFgSZK2qmLZQyb5rK97HuwigymtKhnstF2w3tUYJDL",
  "key24": "56kT2MCoixzHJLTTogpqHVF4x6UB7tw7BoZ9zK5sDKrx9Zz12B5yB8NqE4rXAivd19xxba9kRQ6Mind8Z7K4XJwb",
  "key25": "xsNYrXSDFaRhmxmh2jZgdrAPrb5KgicuUFcCqYcJgWccZ8Hpe5ngTmB4UiSJnJiyjkuXxJBfNTDKaDV4KqaGHH2",
  "key26": "36hZo6vXy623crx9kUFpAdv4Wi1eh4FSv693TjbLpMKPkjk3DrSjUA7W2w6WrcjrZz6LEUtdMCYwyfrvWawdLk1Q",
  "key27": "2kFQrVB8KJqszRBRF6KVZA3xAvDxNEVYPpmRnW9hrPoko89B3MgwoKUJiUgaf8K1iXyyuVXZytmFNWgcfn1hVzRx",
  "key28": "eQVBjKd6jhMucD2ZJHhkQhtcgvwvLEm54fUyGtEa8rhN9W3sqm9uTHezjtNZDoHFrbjRLRDQVq3WuQwABWsyDWc",
  "key29": "5DtaW86ADRtGeetyVuJZD8GgxACXBwbEmFCwxmuDxadd46VGbtS5zJu1GEhjPia5vaUk1Av46yG5cdfKgvfzH6rn",
  "key30": "2gv9m1P4PzxcpXHzmRnCaUPbyDGEUW6kHiJ1kSEaxidXbk83ccu3X4L6mZD26Y4wag5Nro6c3PodWdKj1gm4BBK3",
  "key31": "5cxgqXUJq8szF6gaAQEqjB2WGb7eoQnbQi151haGg2C4rc6BwC8qiC3aUvzBkjGk2s8n6dHX9KJGEckGEiV639G4",
  "key32": "4GZRKZAEe5pGuZ3ZnbXvVjzexoYh3E1Vo8pzbd6tmndmHeVGuN6SyEiB4EH5PJ6uQH3m8JYnNVgLToYtzSRWVARy",
  "key33": "3G2eiMSpkpCfTHLpm5x5PL6cmY3KqKds1xn1SHcnC8rmkNGN8pE2n72F8E2fkmPL7Fjs5oJqNy3a6xj2C8QVEpME",
  "key34": "5NPToPE7dZhf3Qb1dKB4ZRfjHYYkqMtXUaCUdNPML2EJnbkPtWCDqQLmyQYhyvsniY4yxexyXETUeNPY8zTqt9kF"
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
