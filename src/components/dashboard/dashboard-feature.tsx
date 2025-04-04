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
    "3eQu498f3VfvuDGbaNehPwun6zrnZkKcpKUPrrfuNcFHHKbFm4pdzoEWzJmrq27pT6Q1tLpxgFX55tACZJREptBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49r6qHfWWcjHWfF32e4oyp961YmCRFgv2mhXDPiZsXHpUTkgw6htPFgzdFrXdKFWC69aEVJ7MwUzCm1afaABcZ8q",
  "key1": "43D6TXRSDxqrCFfEu9oERWGKTi6y5JYsAMCRLGuNmNkKpjJD8Cf98L3ikycWw2r4Y99hfCiHvSiJ3LnfHSbqWgVt",
  "key2": "cHg34tQiLdrdGboREK93frPyq34g3V72HWRBah5nTex7XZXT4dSpkLCUWcpbZpjDxMwdgzUouj46mefYFHZxxGv",
  "key3": "3yJXKQq5z844BghCmEUAaNvAsuPCWHjYTtUYn4mxabaSKrFwenY15uoPMvEbFkiiknt8GmgUhBDAwi4sVkisKQ7r",
  "key4": "52y1wiZFViuoSv5X5UMKkwHCztR4sWHSnVLq2QagLLS4YZ7pEb8LvYr1EfN4ATU15Hf4sPLjKW7CyRxAJtvY5Dme",
  "key5": "5Ckh1v1Gmi3bTnAvwJHbq6qcQZEec9JqRAVXYBfqNcATgTiLTW7rL3AU9Gz4Ahu392QxGxwcWRRVZurShxQwychj",
  "key6": "4FhrTkH4yoUMi1ThZdqy2steDP1jhQ7c3kUHvQ1AAEr552bnKvvywsQWMp2HnzJmRJzR565GFMCLrzR51iKVUbhk",
  "key7": "31yFpfjLuQYe84n2d3LkDmQ9oFQs6JpRCtGsyyewhpuo9WushTQygSxKM5upKdTqDntVnVJc6iMorvsuLzUxFJMw",
  "key8": "4MVTJKFUhFx5F4XU5zPuW9oQPuR8E6qfWZ6YUSUoRbkm2R9qyZ7WcDTYVhBDeGuJ3hXJuvNGc4gfyPX5NdPPwZVH",
  "key9": "429fhN5JrTSv9fU7aHcTcu9GzMvx2m2mCfbYWZfh7J9X2a65L58U2Z9LNCZEQJM8ECcwZHCnGSe5UCN8zYtuocpq",
  "key10": "4vysppFwXBjzCqncdkADPftpDQJ9X3smgFoaJjg7mmHZX4nUw61voQmPbe8QFxC1X9VJo22XcsAX7nx9UGEKQYeS",
  "key11": "4XrgthYfCxXTfut3MwWuQ6ZGHrD3Ybnbix6UXkChPjku1fsBRWPaM7zb3T8g8bXAYK8hiizj2C6UhypqUfnPabJk",
  "key12": "22c3NLBfAaFgvK6f8Xi5DzbM5vghYr79T5xmcFNTYoGpHninSqjQM3531Jxp1vZ5mxoULXKRTM3HzH4MEs9aHok1",
  "key13": "fNwak7FQ5irZ8sG9VGBcnEi421RzESicxkcUYgqiBuHW4RstuCJzKijtSiYSy4eQtA8kv1hiDhZMW2vXKvAbb6Z",
  "key14": "4RN4ZpP3YexZcycmpNv7FTfX78Ftr7FrdE3qBF5rQhkaVQayQrp9jQnaDkUfAKyTCbbvFdmDDuf83TTspJP9RGeG",
  "key15": "5BshpBTw1aPp6ibi8r1EJ94TmsepDkXLpRp4PSxPMA5WTaKMVHcUbP4MQ4srHTAucs5LXXKPBy86kxwUfpytab29",
  "key16": "5foJSueMDpCHBZodLNpxT6BHDNejHmzGMviQZ7UmjLv2ZdGF8G6GjWF7XRKNu7BtDj199cdcfPZL5RfPVUPWWmV",
  "key17": "54DZnSA6nthUSiSanF7SVrFgcSksyyjEMMvTBMwBxZvyzKcpxf612d5j8nZkR8VNi1cD8wC9GjyEFj7qiUYyeqzS",
  "key18": "66Q3QG5nJhcqYyddanvZX3R55WPnZ6SqYjLi5T5UaKiAmCEghXp7D1faD9U1vS5j3DzCCrJ5H3BrjUu51TD3Sc7Z",
  "key19": "5bNvCvx4AmtXrQivz1gTRmmHde7CLRLZPb1qr3nWQc8nRfBs9nctBkyHbGR2TgLYgKsVtjqtQ7pfBCsA9rZXCWsV",
  "key20": "3PcSEZWvTbNxBftBtpKnHQpRRSYh5ZYtmZoaJsFX3Lxxvumi7AoLG9E4eV6jdDfR6cUbRZVLfHtkS8JeHjf5jSUS",
  "key21": "3XotsARj2zjaYUdthME4DNnGGXkj5VJupuwbwyBBHPdKLxRZshTFLLgCnSFRiGRE55AHtaVnD8htd7sNYrAyfAb4",
  "key22": "TcSxLButR9BSdvCE1PmgbZJxAAgLY5sFhVG5k9dkiTzCfy6mEPx4S3gNkThmDhoUhsYbr3Ht5a1QBHzUaMZgANg",
  "key23": "4ePBoko7TQzdarSKg1xRLtjvzzoVbxCtvj4sfd4hhkwJ5HAZGZB5NWyg1P2Yw5JkizNERjUpevNhRNW78TicMmyb",
  "key24": "3fknzR8X8heoPkwURUjWLYuPMMRDnhBTCwWgiYc6LT7qK97dExBYdeQQADWFDvDNrVHKDPpmuhLd27UBaJm3Tvj1",
  "key25": "2hbse5B1uSHRrq4jzTnth7rL8hvi82XgdY8j6dRSwehsGMkNzjEQZPHNyS2M8W9HJc7XDfhAkQ58DBP2jGqDhqkE",
  "key26": "5SGQCgSZLiLQyeEAkPxsTVu2hmGCwhYQi2AjJ7xsmxwL2JodVcPjF96mdUe78o9154R9s6KTyd5YnWDJXpivCD8W",
  "key27": "4n7kpxyvBqabQWSUyD3tvjWGQS4SvhzyybHZLvmovVBYAUP7i5oc5q6cXyrYb42JBMxVUUYiuDJRaJDdjhgm7e1G",
  "key28": "45YD8oXRAuYvnZnVy8KNte6Ns2Ujo763gyR8Jufwsv9ZYCVnfdQZBAZ9BjQ8QnmKemMHotHVB5jENoa8wytBwBSN",
  "key29": "3XUYqwn9TQ6JyGBfnwFugvzX1wepi5rMV5oWBa4Z5oNPNhrpJUpYwBb2ME582dGSgq4DpjBVaMnyUYPrb2CQiMD7",
  "key30": "4phmjGXYQh6EjWDuYGVDRDWpyniWQymhQZurS3bnCkZqUt5UMwL6tvNA4Vpbv8czdgDSp31ggbw1jQQBKxaPt8sM",
  "key31": "2cQrx6NQZDRPnbkPFGP1nrscsfee427rEEhP1KHdSmL6Q5VoYywVBkkXttat7kRqjg5Jy46nhoiTPxQFSx7egYF2",
  "key32": "5DMrF5QELBj7E85mRGD348gDaaFknKoVModVQKA8zMVcnCkF63NEFJWSxR5My3Tt6sZWdp6sZD5hYtBtMFX1wLLF",
  "key33": "4tKB6DGxdeZEcDiMjiuBDyLPJu1K1bJK3Br9RnyUBznagL3diC5s5vBkQHJLW7oeYywStxNDtT3GQB268hGgQU3Y",
  "key34": "3GfMa7eKf9bGvbPHKxoQKxTRHoC6KXUuD9YezpYp7SA8dwL55ufAYSDQ8jZDauzYW7tAzEXaefBXEcrgVMvd3Zpj",
  "key35": "vi1RLvCVHnXW7sjNLZbx6fBe8y4JLWuqSNz66A81aXJc8qcFyjohcfA8s7oqGvcHx1XTwbEuVY95Srzn9TDa328",
  "key36": "3j3SFDpME78Fnw1v8SwUzGrjRePEFmfn3zYmUGeUafXdajYGh4kgPp4nLEY2rJ761JRRyE7DSuX5rMv1AHN29yZN",
  "key37": "2ZvKZs6euYuEJ2zhe4d89KjuC1EMUJmn6tPxWoN5FNtk122ZafqdheJEAfBi1CCj1xrTp55UmxUG1pUR8ztQvU5f",
  "key38": "4MA6gWHMvdNsb8zgrKF3JxcxCa2xuuEJ1Dp84oy6VpW3YC3mo779oQCatokFTJwENEZQAyW6VnPkd7imsD5umrs3"
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
