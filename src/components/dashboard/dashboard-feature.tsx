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
    "VrABWN78YSToYoHJ35X2AJvJNfyVALLAa4EheSCAfztgBxBvYCxQ6r6FYNfyQzuiUdcQhkVYNzJaMAnBZqFt53e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dAWMy6zeRCge3gyeneBzdKwifdpBhCungucNZ3YVqoQzBayLNZfHverc4rCCb44VGYAzXcoXPvTn6PWB7ZCgYY7",
  "key1": "pXQdrpwkTMRdLicg65g5DtRibhyP6tbzCmWAE7hXmeqrpPFHgKXk2f4dGKi2rrZouuMkfLkVAK2waicJx3pQJci",
  "key2": "WqHRZ7ZNFCiAS8eo6AHxu1EeYTFbVjM7jJtKhSTshPTiebZSdomgh5nhAimeTJ3BvvSbZheiGvTM5WBmvrhqREG",
  "key3": "3zYtLTNwYLQjUrz2wPk5AK5nUm1YKNrqpsqrHc4SRiMQKDqL9X8LnV9WhKDeBuka4kaT1Nyo3atwc6hmPHwtBWBv",
  "key4": "66VFTAvBdpEsJEbBydUmFnpwntgjghKDsUg7A8s1cqT6FnxxoyhtqsoE5JxLokYAnFBhekwjGoTC4KNb3PGzgBnc",
  "key5": "4HDh6SFudRtpCKcecC16M8QKFZ7381CdrN98tKwt7aDXfwQ8kpzWkN1oRAVLyzXL32DViDUfds7Kkbo2HzytQU6K",
  "key6": "V5yYe4rM4RLm9tL9USbvhqTB4ZyeCPUpv8UnHRuv2EbdBJByEoj8JQkjHG8LP8a8bdFaiHRSS7xTJ3STYEEag99",
  "key7": "3rBsCWobLn7D9T7NZqGNLSBAgtTZYFZF5juWqTLKXPj9Gykq8WoHTWrQhGuGjTZQabiGkf4DjVHvcCPdBrtL3HBA",
  "key8": "39SjJBNavpLN1n5XZBuXRhRT4iTvvfLMKJ2c2MZJef5nAXzEuVZLBdKusvVmSMjhYCtzFy9iPwQ5hV3U3cdpC3XC",
  "key9": "j9RBwZKENZrReGzcGsxkf3v2EAtJxeTw2F6NDhiY5XLsp9Xdoqo2ge9adQZo1tBv8PU4KmHoCsNuLiesHnTjFQV",
  "key10": "2sd2LAxBgbe8J1G6B6acbQ1Vg6nUvBbxfkrojsmMWCeurSBzcXRwV7KrFuzx61hkNorV5aHsmXPV3CntNyZf9sZw",
  "key11": "C3rmQc2yWkgwxNwG16kAbBAhMMcyiBamzgw76DsYGYjQ6xKiB3xHg5dddsa6851L2uP1n9RxBqMSS3axpqeskih",
  "key12": "2sxEwEasMUaSFMyEamWbZUbBrf7F9o8NozmeKGVozBwm8oAtyhhDNfonftmZqHS2HsVNB4ec42DirjPW9fksSEFL",
  "key13": "21wwG7bTq9EwwMs3emdikzRuzaJ9GutVvTsPJ3m4gJH7A2AjtDWaMByst6PSJ398HF3V39xTWC7dHuXZHW5reLkc",
  "key14": "3TnykSrgHX74oEwpqW8TX8zwx1D6tPfLi5XUPagzeig43EPwgfWYuNJ2Nrc77N6MSh8y64wqLWzdjqxY6QRYRKdh",
  "key15": "4GYrc9meNMGoFMCJXHyRqtkcrXy3xmgXFBN3krpNqkp4jowKGkYUopLf6mpwYWRBn3yHv26aoXUv8gxkHvGtDSPM",
  "key16": "2ci4FnFJzjTvL6XzEdcWXsmdNRUsBvmdy2GmHmxYZYsDmZAHAEKB3gztfDEuqrLdEpaR464cAm6QvzfCEyDb7pcA",
  "key17": "4hQoDHRh9jwvkjbFMTLqzmomgLR5ay8ns6jroutS6eku5GLRrifL72CovU6ToHARTsV2W6GmjFv5c4GwqPDBZere",
  "key18": "5f3D1PvbbzDq1AMYUxLS9Ykrq6pU28KDhga2hKQ2juLE4u4fki6KyxezrfSdLa3Y9hs5yHUVPYL8e9PzG77qXKZr",
  "key19": "B2gWVKrq7MMmMUt1smgFktXgxK3mMXmugFS22jZ3sWhXtxGSnsCZLZAPvaeNM1SCK6tUMA6qBFEcTfC13ktgLVw",
  "key20": "3mLXj8QxUqP673LvV2o1HnUPcQz4B1bvV1b4Rh6uutwj9zeDpLpavvHPNV35GLTNutr6cGwA7WL4yqmNMZi9ZQNc",
  "key21": "5FMZikgYi5MSUZY3hp7AuKmERwzAsMpV9ANXekrAXrGY1Pcx5m1J6RrG3SvDrHTx2t8H1wNu9TrC9gnMv1BbyiKD",
  "key22": "2kyWLtqLmjgRFRetUwSSPLSjphFSyjdQ2qv911RmDwfRdCgukCyqzSTbGLJBXF9j4QEcPYm4ApApyQn2sUhmzee9",
  "key23": "52BGgzcQLdiDQi6JemhgeVKW27roA2hPbWVKD47Zkxic3M62CZApnSG4v2G6BMi9RcN88LmXRD4KULEjjE79xLvG",
  "key24": "52aZmqGqKdttDyvDqqxTVAxccZ2PqwE6XjhWJirL969T2FfrnnCrxPpUwCWTxnqqyLqn6BwdXod6TLYg3fFHVpjj",
  "key25": "55NecTycs5oNeL6kh3a5yU3GEhTCy2NuLJp8tL9ny1FJYzW3MKNE2A7KFA8iiMhgzmpnXdkthkcU7UZK383WxRfT",
  "key26": "yAFngRxtA77qn5qFkCMtuYsjGwjUVLtfFnqQAekMLvtLJSBoJpEVqfVmojUcoJg4xwuwPqd451z9JKdJZAZzkxf",
  "key27": "3BghWgghjcMD9EjE1zdrEysXmkru2cM8YVxPnpAS9TD64UPxaj9E66VkniuYiB9RKTAPBVxKn8sjUuKWjkgyQk4a",
  "key28": "4APYcquL9DeeTcow988BN6DPoYgXiMyunidmJwGysrKDKc4Ps3HHmFF8VY1HdmsDUmPDogurZpbkPmBom2D8KTdB",
  "key29": "2uKRsESCUR4R8tPrm1pgHwtcCu3voNRryZukbtTMrpUQVRjs99cW56r8xi3AjGMXJUo8WSaSgbiapvLdDzp8txrz",
  "key30": "iKVWZii36aR2LhcmsHXBVmhWgUmf7WGwDzLdK8Lsh1uAYcgZH8FGegJ2pAsYTFYW71xebZqs8eMdcu6RgxhWujC",
  "key31": "3nmpzBBN3R6HuLQCE3mm1P8Dwyyc8Kua8bALi7BjFy4CmHrH2wSqfuHRvN8cY8FRKddoo7QS32jcjC6gj5tdoF7N",
  "key32": "2Tp9rGqFhaioPmRZeaCn6P6GHzc5huJEdJXhFTSZyW8kWwho7j18EhWq366LvKqFeLioV1pdB1xR2d5gHyWNopSF",
  "key33": "5zwvtoit1ULWMYwRbeB7nRy5d4NM6W7YFsvEy5bTG3URe1JBJjJwCdSfc19d6ahSrY3mYXUgrV1pCXYYokMB8TMR",
  "key34": "NP2iSZwRzcVYjGNsBmQ5H9mWseJVKEUhwvNMdXeSfPa1SrGmhoaoMGXN6rRJ4Sr95HoswQBAMEBdT8SGnZr1sZ8",
  "key35": "2ZMatK9ppH2YVxDQGG6rrwY3gn1u1DmffJjgbX9GUo5ReWQmkFqa6QHVDsfXv6rHt63qD9yd6XKbGyKbQujCzySn",
  "key36": "48mq9B8qgsZVivnGBnH7wZVNpjmFedxqS7XRs3qhmWtEBfK1u46JzibUThCGvpoR9EVffwfMvnTb2NXnNQXyXJWR",
  "key37": "4cFrQFYh4JYeLHsRorZn6CS49i2BvRtWhXzLrXrCcAiV2iGy3UfJhKASeiSrLf49VBooDeTBvYrkwUHQnYxHzHaR",
  "key38": "3eibqTEQehHmUmj9F1XuJmKAabMXm2KPSQiD7Ht5R56ALkk6CR97GXvCsCW7Ho3K1P9ft6y6ZWrruLQRcZ6fh72j",
  "key39": "25kTK8CJihHjjEJ8n1cEb1snYKUAEiumY7vmnhTwtcoAJzU6opBTMWon1DCoXQTb8DVLsFkVXAxTh93VCdxLrKeg"
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
