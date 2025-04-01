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
    "2hErPUkwyKLvboXe5aLodEntqLkR9n5cKpidmLNHxAbrbQh4kHr8UwQ4iHE9FbhS3FuMAiuPyZoaS2BmiUapNQLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQywjWKtFQAxxk2tGvsCDmZ5w5mmCY4k2gsz8uHtBZLVwuVvt8qpEtgoUhsoSwUrSmdk8B7uuVbqkjYFvmhY8zp",
  "key1": "2GRRrPtSRmMWrQ7hJbc2v5DKPbMeyHneiieX8vHfVEvRGzEMZtqhWrE2uCHEdWHVo5XjEDenkUUHWwMZJp8n4FbS",
  "key2": "cQquV4LfaMbWZdQvHE9X5oZZvgBPyLN3dMTQFCzCRCNJVxDst1f2oxPdXWJXxqXjxheL82wKbv1hZVsmgCt9D4K",
  "key3": "53JgWJZ3PcxfWaPHm9b8dYZWNcdi28McGV8LJoDUX77Am9aVRUxKbrx8Vx5DjnfmqqnJn8oEhXjcnMPFKNTiCCmm",
  "key4": "2C4veMF7LamC6yzw2Kt13zybcZ3R2resXqcNd4HVk3KBemZHpAuutSTKhHvFnBBgfQRGyzNFGqd8hMKqyNpbVPqt",
  "key5": "5UqmfAXAENCesdHpgjQrpb8dmxL4qC7Q2Yji8wKbCG9oTqhbg62TgY2h95XCPsQyaaMjbjokHPBkDGLYc1YrBfTQ",
  "key6": "48oxj3ZgvC2qJY8tyVMXkJpdv5uYPCfVRos68G91WXyXyuyM6LXU4S2CPzN18LdSHn5J78dn5b4ugFYvpaCJXm2a",
  "key7": "2tzrEAj87DeC2UYKwxg4HBiMvCoYP87kkCHPFRZY5ezcLdMwnDNSGvsKfHDXYWfRPjc5JrfxHwTgnGmz7hkVDJdr",
  "key8": "32F46kpDhkkezQWodzLC7XtgVuGxspdNDZFztd9K3u6Ycn1GsjThfD11b2C8CeeKXq8JCtzMgJBNU8QRjC1vYb87",
  "key9": "3vScZENRYNpjavsPhsHv33x1kaF2yqFMFx64SXaC6aUH4YLu6V6DXpRd3UJPiWM3sFvQfEueatxE11tzPib8gaT7",
  "key10": "31uAUWq9tZKt8Nt758oVKCcYgsC956H8yjNevoQ2XyF6ApimRCLgDXZ8YBNpGMpCwpGnXV8frkbNB9B76xcBhqeC",
  "key11": "5YDHCjeTzeV5PcjehsXUR6BVFhphusZS2eo3r1qscWdxLzD51ucxdA2xwCPAyX98LetccJd7B6u18mxvLpDg7Dcg",
  "key12": "3CQv8XdCDjPyCV5YWmZ2EHGQQGxp9HvBudetFfRxDvfyr1nMB4orPhD6inBhnwx7akYJtNMqHwwZHaxma8sQXBtv",
  "key13": "AiMjK8DYLxMnDYFYhBWvkZFaqVgX2YPttTTedjDf8aB3EEJMevrRxvLuHSgFghMjhCWCoo8LvZSSFACF9G79a5W",
  "key14": "GkCuqd8cn1vsZSZG3SgvSFTbtsVzzeLsJN8EZf2McUZm53hmqqxZcNmEwNpsjXGNuA5cHfMubjYoCcRJoDK6xQt",
  "key15": "2porJKUFYzgy57bXedvFMMFFULXSzCeaHtY7ZKTFQLYVaDJdY96ZVwc97d9M2PUg81e1EkCwWfXB1hnegZZnWGEQ",
  "key16": "3RmvF4dcmMPDtQ2q5FqgNEpQFsLr99RWmmFhvpVrDmpJzr2SKaou3rekB2hFNsxsiBYfgskZ2g6rjbTbc9BKy6ju",
  "key17": "eVKUjkqGtsQ3x1MPTYTudSTdWM4Fb43XAqWSEjYcG9mJUM8woeekCrHEx4f1snQZv331ftpWvhf4CzY6ZA1sg9j",
  "key18": "2Cd8pQDVAZZsskLxpS8XftT5ipvauFfW3cko5bt5V8MzgLnf5GSGm8JRnmmdue2KEtTCCC6eBb9absPNH7dJTyy8",
  "key19": "czxoGKeqi7iVbAoPLdph1gCza1P51CiAgHfGWAUYgk6hLNqmQRapivjpjUgZ9mcEzHGdPEKxLd1YJSNGWEJokQB",
  "key20": "2Jq9mHirkGLpi3sMw2KHBe4Cp6Gt3r1ZzJjAehFC4DPcnQwrXXLMfjqQtH1ew8YzyDZk8jvajML2r67a7DdMvksq",
  "key21": "4a7FFeGGh5BAg1R4h8M9pkiSmc1zhZHGtmRFVqnRuunkJgExp6rvVRoiwjg6si2gPzh69H7CbGdgsGwD9FP727K3",
  "key22": "4ReMYz5UyWxxJTUJ5dd8CWYf5NnT1WvQ1D7Fur93yGYQ5WfMS95dSQBfYfKWiJ3NVDwM7X4WHVkMmNZyPUG3XLYw",
  "key23": "5xKhAiqjFURDW7ZVoQctg4cJmjk13UxHyqE7D5ixrdFW2FQyQQcXoqsGLCzSwse9CPKrRVCxbbVnrVksCHrJMS3y",
  "key24": "31Sr8Wm5FgkBtKbaWBrWQRm3PvAHo6iDJNYzoa8nmp4dWR2hku6dRM3WvomeG5LSKF9VyRrMYUsJwPK9SWNLaed8",
  "key25": "3evzkneZpuRboRBzUDEhyCqsJydWEpynHouuLyD3a1qv6N3iMJsttKCCyCDnCZooc6gNqV8hccwrmtkkWphMUNrK",
  "key26": "k11ajcrkYPegtn6PLxHb2jeyuGNihsiFJstGSqBi7PNAaAiMbwr3jvNAJUrmnwLCibnxLveuKpXe79dsDmd4Axy",
  "key27": "4oSA9W5ct64bbdm11BAjpeXFim9toSyc7v9foBJe6P2nLbd8jg1tC36eYyFJJBYmjcvb3bgfKDUwvbzpCbYrjz5B",
  "key28": "cyiEAH7NP3DDRcBN4Gk3SkdcYzKzgvvQ9MoG4DsEEsdfz4EG35TsNRVHjYgyqbGgYh4Hmx8regN4Ci6EbFY7PQk",
  "key29": "422FZcRRqaTEyLTX5E7cjzdewAwBpGxtBLePjVfVUs2yteYdpuayQkGusDBC6NAfUEjmcpRWvLwwZRVrVog7irvQ",
  "key30": "3QzmnH8UB8BUsi3vKa9wS5AHwXjKg1oecBvfRQj4G5JcNaPvd1tjtVb8vAgKZGrXd9bcVZ9XZpsCZvSe4dv75tgx",
  "key31": "2GuezP1GzGF8hm4U74qMnxePuBYVe794U74EuGhphfKEfCHCa1UQrJiPiHn6TUYce8FZq7o2od8e4Ksr8FNxRBmf",
  "key32": "4M69xmB75jpBsrahntyzV9Gg1NLBgyaYZt1UgjSrx7VgmwevBNtL68SzzbgqAp6Q8sdvUcVyTpBgR2heR3yxFCo1",
  "key33": "56Me2UmxnVwpbJudSisYEXr9SrBXHZJH799FTeV6RJwtGkfswMYLHDVcWLqrDDvmM9twvMr9REaZ4BehBaLGxRyn",
  "key34": "4rREqG2jBQSATZ5jL2fLAjn9Gkpf5gpsivAp1JWSboCADwokXyzCJ8gHQk6ayggwgMdwFiWBLtNyceBTTtGCNf4h",
  "key35": "2Ayh1JHDMkQGf1gAbhCXQaG1BUKWJCcNiPfG4iHwFocffZVALhqHKcjf9p5qvHNmKS9xS17rSB88Xib6pkwbK4qa",
  "key36": "36QZQuLsQftCH3M9sgzj3co9cGpXKUHDnuupYpBdpJNhtpqM3C4T2KrpcnxXV1RmnzKp4QdPHJo2UKGYQ9Jzutd1",
  "key37": "7GNn4dcWFugVjKUYHBLwTNrMzMxjZoJDV8SguPNbUq6XMUB1ZRMfRLSKxrrWhEtxhdUMupGAnBfAW1qmWGQj9RC",
  "key38": "wp8keiineBTjsd6w5CtNVRQNa1SKzMMYnUGUsMXsXXR5xRwH3WGZPfos7tYmVCMVjswpGzn1JgqUfY9FBUw9ujN",
  "key39": "7EJdoZ9dJeMP3FyW3VyCBVr66oe2bdLvucTqhsNxnhb93ofPavHxCprPPPiebCrucQ9v9nQRgTaQR8c9Qz7z9QB",
  "key40": "4EVLpL7FpKqLgcpYqt8Rx6pVRHN4RGUvjEBDq6HyDQ3fU9SJBiKCq2mHTLMLmmc8oJc8Zum6g5w2wnM97vkcbdoU"
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
