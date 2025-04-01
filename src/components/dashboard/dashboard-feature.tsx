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
    "3bPWkXEBjEr2V44moSu3s6XwfXcf3VGJ6L9Uh55G9CSzWrCD1viyPH3WYjeUxcYi6r5mNGEmdEA4c9GXbAtAkRyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxb8nSBxvWLQzoJZiRf25eKtimGMeHR2EuFNPL8H1Xid5AkDXAfzJDD8MG2P3h5RCtBy7QVR5oMHehQdosTxQf",
  "key1": "4AXRdSmcP6GMstGgHS17SYHbxZA1FvehQ43fRxG4ALVebvjkJFaEBkJFWg117GgYaHt1AsB6dtknFxB1c1N7ttLY",
  "key2": "2NpWemQht2NKzMWyrf7QKvyHcKe6c5hm5SDgEUWu9bJR7WGPme1nMPTxu8phv41G6ovddEtozerqZ6sH2cMikYeU",
  "key3": "2eU6nSqhaRwMb49mjbjKsF9Y9VM6iiWU1vTK1RqDUZ1pTYXWr3HQK3WuPuvZP7MG3XvEAaGmgjqriPNaAj4WDmTR",
  "key4": "4WdSydSSDGTpHHbvAaWyiUaWW2eSstJiB9CECUdRENKLB9oUieABARnEjXZQbmqwHamGgZc3fgKCirDJ6Ab9J7WZ",
  "key5": "FAFRwuo3Gxq9ngaDwSKZZnR4Tk311rsQKucvgvZ9WhUHmorHNP3acaiBxQPvpHb5w4Ep7PUc6h6nJz7sbS2Xp8A",
  "key6": "5yvSK8d9m5rtANdFL6HGzkBE2VaqTuowHXTjUN8vmjJT8jHYpf3B6caTcdRQCFjW93S63icATR4MmRVczdneP5GU",
  "key7": "39RFN38SBXALiNP3DHLnESGqdkJ7VBK6DG31UWhgBaiBXu9tAXa1WPgGUCBBkDz95xMZTeUfYL1jLAgdzvVv4bFL",
  "key8": "36GxdPpmD3Yi4URxpxWmitshwY5P5kDEnBKddQDQSzDCDWtRvDbfPvZ8ipPJk4iV9Xnb5h8LGUv5U8DNP99FTwh6",
  "key9": "3cWDipNqs6vvfei1n5X4fKh7DTRyiePMcLDtUBLAywMoR4LsPSp9MwhPxMSP14bs1YXZAfbheX9mJjawaa5jMd7B",
  "key10": "26F8VvjEQijbBkG29aCPsTtWc8m77Va6rmV8WciQKwHgPpuPwrEXuooxhQeqg8L6ygYCSzFPbKd1E3apjS8rCyq7",
  "key11": "8SqvYkVfrPkTTpp135CZCYUdpkzdBSwWH9iGuwoDfdWK6unknuQtEp8a4ZTXcorUxazEWqAvnf4WxRztEnysGW7",
  "key12": "55ZSh7wnUT8DRMHXgAUM9HWKAXoD58dR9rxHhZoG9LQWV8iBnKNoFtrsMCZDFBvgJ3vQ8Q7TSteK3qULZFFzuaHm",
  "key13": "4tW5Vem6BL9bfYXPdut61iV9HQBsXfZ5QdXrtBVTD474mjXitotyW8vHCxjJLGG31jbg3viHfDZUaAa9NaiRLtJn",
  "key14": "tPGQ4aooWgSwd6QQ8mppfWAGyBghM3xJGdkMYgGDXnYYtsrap7pW2DqFpqUcRfJMQKxUtrpVz6CbpK6CEKKor1v",
  "key15": "5BVYEcGK5iRNgdyb97uQM4ejjST2ff67RLRrtwWE5F1JZvifyyQFV9JwEpmiB9fPf4Yq6KbVGG5j6mAVJ2bEPBWD",
  "key16": "4cgGTiqanM7q17tUdfWPnzBMdYJcGaXXeBdYfKuN6C8V6DdmzomUN23LBCjqitTqvgAVqbYZchq8nE9Pum9bzDGM",
  "key17": "4D8zU5UbbX6ByeQ397xRQ4UXE6Zv9uCGoe6GfggqM8zkMh9qHvxsg6Cd2ZKjCdHivjnNWzCZk53PgS9BzYjjTQMC",
  "key18": "5VVa32jHuVP4tuHUeQtSNrPL7vCBHG2oRBPrE63K28hwUQHaSMVageRhsXsNo6sPUnyTCcDwa9JPafF1RjJvKffC",
  "key19": "3EF3jXt7DjNWjb3Cmycpd6tc29f1eguHayFJvrJbHSjarUzY8XZGcRg1CtEz6wmKjAEdnMpaDKoRwZ15zbu9bhh3",
  "key20": "2yNRBLg2C9REmHPPjoa9eGkLmXad8yJ3ku9Nfxxav63ZHj3VEZMhjwg9MqCFJX3i72WMgrT7KX7vXWjRvZ4aEYEh",
  "key21": "5wVxAwxr8KfuemaNMSBF8Yjrd8UA5d34HBCaD7wjQpDM6bFoi9zHpASd5cCLGSnN1A7fbKWLpiFL9VD3onvt2Mqu",
  "key22": "5ngQARWYrnCTUY45b1pJYHnwQq53P62Q35Q4E1iwUbLsud3H1KVHxU1ZHLgegJr51JA1dyirgQiN7Z8pbYYJ7MW4",
  "key23": "2j1xAZrhaNSSQdkzXra3P53KZ889BdB3Tm4KdmNH9domAqyRR4Z1Q5GGHJ2hN6hQUvtCBUF7NeTj7DML11eorZKU",
  "key24": "358Lxo4cg3mEDxRaeXfo6GvPZhLoxusHoEh87PdXuueKeGGtetcszpXZc5PmFWCs1yvmV4WfX5WKPg3bZHdBF6QC",
  "key25": "2rzydEC6MteZummVv8Z6HcguCzaqJFDHW5MHeJ4LPbuJFz8mdC7LJt4UCaRkqtphr71fCNsd6e9pff3QT4CkLHVz",
  "key26": "29v6GLXmNVi28Yoj2YjczzGPDCo1ZQTriJ6zqjwK5JxaUNpHxHMAyEMHYCvAQs8VuuQoFT67vUzTtajwBkAZgxKz",
  "key27": "2ajDgoU3kP8V9ZFooAVpCiTRug2UdyKjzCJy329tUJ89BnBfgxgmjfDAcekfSruB8gncoBdendtWBH6LJhXXCikP",
  "key28": "R3dg4QBSbDLtBk3UZt5t8AT9vKtB8RFUK5uy4pBu6sVxWgS1Y7CNzageMsR4UfZxJEFjWfd7JCRjKPTVV8wLoqn",
  "key29": "58NrBPMu3hhT2FWba62PQKWqHj9NZcjKahMvzCkMfhncZxo779rDiuKf24TcnBYBxc3hihMBsM2RY9Yk7JeWL7ZH",
  "key30": "4EdLLraRdybGRTrW4GJtDwekkKw3cuet5uitadpkYs96Ed2RAZpaxrYZx6DM5Bsf7FxtWL9fdonopuJNN1k5izYN",
  "key31": "5DFiM7UZh24HFynnSwxh3AypKuJkct6myy9sjrSwbRkCoMHXgBoYT38NWoTu4FypA27RSUtmwYxztPTHLJfHtAi4",
  "key32": "3d4PdojYyRuuZjro9yxUaSTzmHXku9S887ouB5irxJvKezxNFuE8YhQEnouvbeHe4r5SPngLRyT73Xmi81anMd48",
  "key33": "SiosMCALqNgTVC6XLNNe1yh63hGTiqjLSzeDZWdTu8xCdQQ2QDrvLyoTMYg8RbpSjNU3mXzsuhXfi7NLre4we3z",
  "key34": "4hQ1ghGQBRfX4bt6WCkCTKUxUyyTZu9icwYpkEBUioKyvCFjQAMCTKfWzwoBtF3ytkusd6WZwYpkUGXJ8q6su4bb",
  "key35": "54pnBe4pQfppb6FBsjd7pG7RRVUxacL3wi6yGnyZCoHoeuWYwVYm3qzyijC6a1HDf4BA1XhTQQA8Hq2TmYaRFHwh",
  "key36": "3s15eqT5msMNuwKVdnbMCRLszB6P6hsYedT3h9NztTsr38R4ZPvPNg6dTTWKn8yuiZtzzUJ6zbrQz7b2G5e4P4S9",
  "key37": "4rweByqU65vRiC4xXPMk5uZfAQTCGfz7KA9oFkb8pVoJCZNY3bw6ZDzUkHDuniy5X2XY4azVCryZNypsMbWLwrSP",
  "key38": "4jE46m3Nv8hkw1FE6wxdB4denYtyY8ys5gqKbbUDCLk5T1NnRWjDRPZowDqgPboGTzg8GBbHfKqJ13vCifBW6Ybt",
  "key39": "4T3RoDvx6x7dDqzccbFAvSJAoQehWSLfqunWse4htzeVysVBfAShPMnu9mXL2Tw8NjN4AmgMHgH4gwgQT6pytbqp"
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
