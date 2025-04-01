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
    "3LJNN4239QhYvuSDeL19mSriUzry79TBDUaR7mGjdtqMy7CCEHy5w7aHD5bPPAqTYN3ChFXWd2PhP9PzGvBxmsf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44jbDhtcUUPnBCUtiiX6ktrH5ZQaR2vaAPyq7rDH11JZCtHNSZk7PazD5j52jcELsTuvD6T6M3pqpg3tbNQZ2x51",
  "key1": "2atuMkbiMFbqZZ7wfZRbCkMm5jnFsyD7GC3AVwTcNC9Ayb8v54mWy6yj1sk98Mjkj1qouDeZDML2sqDqnTiyX3gY",
  "key2": "3rucwzKqmhQqrtnhiPVG9MfZmneFnatp9mnn1VKREkvMiwww7AQ9oie1Rsy2DRxnHrPtDP9WDSZ5LBG4b9xZKegP",
  "key3": "2Z7nQeGHT8sEo7aESmbV87AAAUUBKXH5RZsNettdCGR9NpYqkw1XEdeAoWxayNvjULXFAPcrYQepMmY6WChcNUZX",
  "key4": "PJuydrjwNGvuhkctrnsD2XtdLZozT5yuA1Hv16PDVbhiBrRJHrpAHMXfQMbV4j2WuQTWwHNS925koGKUYRdtuwE",
  "key5": "5DTLTgkc66Mpv2g3aEkEf7RsbhQBsZ9VLyBMbRGGvejtawby2AZctP14PQjpmDcAUQo7b1WmgbJo3LHABw98rekK",
  "key6": "Q7rG8e3WDSPphAcex3qNAsvXr6dNQZ2bp21pqPNLkAcSBzj5aqMYD4yAecXgohig8UdMwUDf4YvDXbFTszdpej9",
  "key7": "4LJh1gvqzCVx4rLcxVJouo5zrds7dbv5YPXbjnZuVC2dTJ7g4pE11Crk3CrCnYiU5YR4o8TEhUSnk3K2oPSrcQvX",
  "key8": "3wJtKgztXvkivEkWCYrcgzXB1vqTLrgfH9cQJ6tzWb94QHstZ9vCQpYBUN1B1xLttiUXxwvoTquUi7D13tcdW6nZ",
  "key9": "3WVx7qZ9Xiw5ycfhNBxdLDsJa7eJccrUFurZ6vQ2Yr39vUqKJEexKE4NLHubVefPZfDpBFBnroz8to8WsLwUjTUo",
  "key10": "48dsZVRCvo3JWhpSZ5vc5kxkZC8Wgdy8pFecpzkN1yYmjrspGJW331K9SaWAvqqx51vcCq116pZqyKh7qPuRqBeb",
  "key11": "isJXxZC6dGT5UmPSVuFdzAtN2WzHReihJMRN1eCGpw9nt6mjrNeTDfT56JMsvkPY1jseoVT15XbyEhvJp5KwXYz",
  "key12": "KKwq7C71wg9v8kAQ3dXQrjF6hZYiu5bBCEEfJEgXb2AE9UgeGJ1m9BgZ4fJB2CLWSrwuPiFggLyG7wZAekhX89W",
  "key13": "21w2T9CLMqmZpaLHMihAeTvZ7CkxSnkdZXBvj51r6U5d4MymzggpDaeSMzqjiAPkNonuqcub26bwVF9MoK7YwQNk",
  "key14": "3jer4xVKu56bdEtqazDmC689Ri9sS26jgYLJ9Cs4BR6HVnGUraEaVL2k7hfJLqCDiFYNC64VJDFSULsU6XMpMxH5",
  "key15": "67mnYUDPYQycH1Hj2tuzA23yTE3ftsQuH3pZ4zH3NUZi6yfU3TXBj6HBpnr2tMb6RjK8bPuAdJ2PNfaHzGjPzmZD",
  "key16": "J39PEYUNDkJyicvRHFSXeDRz2R8AYmBf4GAX837LdaHYrnM11LBwdvDPQtj3XqGDy4iB3a8uYduLWU2NvHQ6gG1",
  "key17": "2eQ8XLVnYhEMEGH5qX5CN7qTTfgtukQTdirRyrWWzTcvoP2MA4iwCmNUNdJdnUXezpr1PLKhMTFKqoggvzJhiL59",
  "key18": "5gpFCdtYCmSQBNdnZGToXTxAisjnRxkWymmJpAwndghW9rUjFJw5eaRJUvtqbJELESERvUztweM5Bk9Nr7vfGmw5",
  "key19": "GUVpfGCtkiE4wLD9iHkeQQ7YUBm5gqHJMBJstKhbCXb2yBRShgerUz14kTqouVRVuRfFsv4vJap1WyWENrmS5K3",
  "key20": "UakpGPL23eyLNJBc78pCaZVQQ1g9nGSMSG2qfHEnnAMMdVPfgBgBL36Wu7uH7HbUcGxe6QpbEdNUPNk45ZDCvkR",
  "key21": "5MmYFeePFDcMPPoDp7L23eBYYRih6b42Cbqas3QUFBxA7XL6XZ5Lfnj65DncpXpgSq7noVPE2zTzwFfe2ofdy7mJ",
  "key22": "2vcLiFs6FD89cMo8QyXhrenDGNEDiTzm9KB1FTnxDQacakpd9CRiMen3GGxVJkVEmNK6VPsJ8s1u7DZ8sTaG2tkB",
  "key23": "2dPoUqAjeCAiDHbPb9ZsSqyvCzMh9zeMAao1P4gKB9HUZ9beWt2QKNL9nA4gzLgNjFopVAhRrxVaY1FzdhjreMH6",
  "key24": "2CE5pRzzy3cQYeNeadzYJfD5c7ZMpPFLe7tGhxA3yteqCDNPAXmF3C6UxjAMPnNecNutoAfnMP4JZU4qwqxYgddf",
  "key25": "3GZDiRTAK4Msjbba6Q21RCqcNUHHZTJTA2XXj5ijYxGct1Ya6a7p3J6pnJSeN4W3ZGNskfRgpTEkGgCqP4oXVwGF",
  "key26": "4hfpn66p9aSt1LoqfP7enuqBuXyTch54tK4zuZ4UX5pwpcpGcKCDHbP5AnPQeGRAoNoNTCGd8jfdaqAjC3ZNydmu",
  "key27": "5b1jCbXMtkDxpypUquzU3nGTgUMsFQWYb649V1kwXiH66SyEjhSXUmtLo7rJKprzknvedVN8C1Ba94iLiksHYhJS",
  "key28": "VGyhsnTsw2DZDyK88QcDDAnjS6zcg1kFgXzZ9pqewgGJrZJwjwj3ggjwqWb2pepo82NB5WGzzAF2K3f6SDJ6Ksa",
  "key29": "3P8vR8eBvvAicBHwCmZ7i7ay3ooeVB757nEmkFFm4V9WhHpS4yvTjYqqz3L54LbmGip4LkY1C1v3UDy465dgr5Jq",
  "key30": "2z8nk5cGgFhHhQXcZL1ExatSZgmX1Ee3yJWmyNZ33UUBGcaVazCgYBMDMW3iRYcpZK2sgrCeMwGC7r4r5Kgv6Q4Z",
  "key31": "3gk54VS9UgJ95GFCUVv7qDpZzkuXeWWoKqSVLh4jTYkZkFJ4FtMogVM13PtGjKsvVg8dgg2hPw4M79XBv9jEP8aa",
  "key32": "xf89oWSCKf18zd9beMLVPkJ1QD2GYopydshJ2FzFtojNm17Va6LoTBHc2nGBp5878dcAbYnBThohgJaxRZfthg4",
  "key33": "5Z76WS7fLmpdJ713DdiWxzYcMiiafpkBBHFWpXZrfhjSGmbMB7ryVXmaWj8PDnrq9gKKHv9UWuYfRVbNc61NDMWp",
  "key34": "BzBeETAtXKoPtSQuGeZpVxuubUfuDVtkcaQVWGrwKi7H62jrt4VW4uCt9j6YwxS2akSKKUkRySomWkNvx7vc6ZF",
  "key35": "3ECa4xjHfC3wwez7d3GapLqNLnzEVFJpESevKay29PRV1eKRBKzeqLpTp7UN1BPaUFiQusHbZiXoWcBwA3M19dEa",
  "key36": "64B1JpWykTf1xCgVL9m2cfCgA1qb8o3xaTWBpHuPnYEqguouB8TjV8P42ChUD7as56YtwuJ7QreF1699wzDZmttV",
  "key37": "MdEyVGi3RyGEXBavM5WqSpJJn91zoNdCLH3qxmynecibau8y4GTjejyr9NaDdYjvTaWj2qXFD5A7nJ1SknmTE9k",
  "key38": "2qkNwBSMrTM8DxbS3RY63ZPurf83AGYRBQ99jt7wv8g4J4zkMn5uEupSGPemRu7QAmv23VJ8dnWgzS4W7r19kmyY",
  "key39": "CM69ozxGD6XvWQd6xoaCjCH9b7JNVJuhcfb7fJDZfbzn7FJiUNnetvwVNTHTbirE9dJZbadYkGgzrSuKm1XMLkS"
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
