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
    "2xwRnqTu4kCESrFV1n4wfrot14UpGRpMquvAv4ER6SGszJhF3cLebvQTDggR1UsXd5H6dySUopRqLfF9g48VW3pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wcxyUp9mmiqtRTqcLaK5JFKLkxL7WLJZmpB6n9nWXcTtjf9t2kGvMyzH1v8USB2fLRw4Jwz5nn1HPr9FRnx6sQE",
  "key1": "4rad1fJNuphjduv3LpjfT7n8Qv6qFBAJusPrD3pEPfCGMp4qjNGtv7yUWZdeahFomsR5p6AqzVWiN2BWC5xaz8Qo",
  "key2": "5HRdnqQzqHGDBMKP9yejvMqboLQktoB2hK77MZdVZJCwiwon17MWND3rD4UJL41oaatGVSi5ctNz871kZU588RFw",
  "key3": "NMLotzWMVErAy6jesmMSqZtJN4Yy2AizAcGLpQpmUKFWw14Vokjq5twNGrprZaf8aF9UQsf8BF5YbzNpgg8D2Zv",
  "key4": "2ccBcYDXRyPaFomFWxXDvRnMeRgf9xRkSFZNffb2RyEinbZx63dYex6ojuz6RHWCqpRm9t7F6qBPVTkshVxXvuqa",
  "key5": "3npnD2JSJFkmonUXbYFvch4RFvsxGAY6MsY7UJVnqQEhCPQnU7YS9jig1bZZBAci97nGxsJds91DHno7NTpHh5Yk",
  "key6": "5RPHeF72XWC7oKC9sHwcBiEB9LsdfNBjCzJsHGwz4HcA4co8wyM19uc2EddNt9MNA69t18gFk4q9EqXWXhuiFYVQ",
  "key7": "4hUTAkWCjnpCM29dDeeCnoQiD1zZJkxYvBogDwmggAvu2Tr4LkvC8PwzQNYm9Vi3c6kgi5KGghMSDDy7ubEw6gz9",
  "key8": "5wwU8j2gabmfpiV1goM31wNKQYo2sRbecGQVwgGtQhYBR4MQh25FCMxCeWE5FiTMDQ8tdrThhnwg8uT2xz2j6gJX",
  "key9": "5qiYkL73zNWTTN3GkcRf2WvzEfuUvixcuSoW21dPMhLeBaHuuJAUDNVbq8LRQkxQZL19P4DM9gLgLJzYQBXWgoqT",
  "key10": "FW2wVxJNnBXiHNHH84uswDdg9KNsMtPhRcTEvy1iXn9kXE2bGQDpTg3X2TH8jMS9WSLQQSZeexEeSLkMimHYB5U",
  "key11": "3zXrb9y35fJuWF6sTsULzPpqPPVShteeEfs28sZL38p4EqJf7oHt9HofbTFWXCj7UNp6JVDKVBZnMVghEjoRzaxh",
  "key12": "5yUBdsE4yeTsVbHTgfaR2p9cqCaqyNsYYXf814yaSk8nmpcU8jBRNTtPPQQsFiC87bUTQ8m3eciaV71qxkNTvhrM",
  "key13": "661za4qdu2DFJEvyd4k1S4d8JGYPSPcENAjysAwnWXGKH2q7FSUGAZdABwad6sVLX4FuZiMe1TKovbjRAxfWpfzy",
  "key14": "44CjzBBtPS7JZNoW4oKYqu8VMww39cG4sNFMTPmfhJpprn66U6b9V3QaSCyVkjHTjdxuf53W6HHb5iS6f8WrSWoe",
  "key15": "PoD4DwwsopJP9Mk6SzxRShzggTBkxK8Tt6CnZQXe9V3xfLKcGKNsTxZXTyg8cEsqq5argkFiai9cD35GTqQzvgn",
  "key16": "2jcUntxGuo8Vy4tvyDB4RGze2z83QL3xMRcBG67d5UUJJdcxVk7FoBQCEPy31QtTMcNZoCdkvzVDfu8PQUg4x2kK",
  "key17": "Ewca4J4H14bCcmrAqvED8Hu1SQtuj3ACrLauwGqwDJLLCcaJU2ku3RWreNtTqP6zaBQMpLhMJFKQVkveTyhFS92",
  "key18": "3WibjauxiZgbJsnc2eqFHK4vbPETCBgGne7uZp5eyxSNCt6Dy9CC4q8QHce9yXebDEDodtjeFZefDBWuwL6Hd5TB",
  "key19": "5Bx1FSDCtkYvMoRqTpCZbxZsRoEsqDvnmUeT22czjDoG5axGnHwxHrEGVXh5SNvhpHq7CoSy46xBFpBVo82NRQMM",
  "key20": "2mLQUE39KJ8kVZFPshfCRbmXJgdPe7QwAj2diJPMtwtvvy8eXrjhtCRDSLWjGUSz39gKGgryGC5Myo8NEYp2G3Ui",
  "key21": "4dWYKNtrdMCMg3paLNUcyfRKnh4w6FMpZ1w7owFSCc4cgHS4nAUQ1uhWZ9N8SukjQevYnwRUtzzAJKTB5DDUS6gH",
  "key22": "2Rfd9FFKcR3p9YFryYBwAWz6uuVg33HW6qsSPjRnmVAkLG7V6DkWskyKw9eVzNnGLgfiD7F5rL95TNvSo2amVkpC",
  "key23": "2X5eJvx2GCDXDNv9gBQ8wGTm8Xs4ECdcKXT1Hj1Q8R6BaE3hWucxtUh8kSC8jTnLhq6FMpYGLueSVyLoFuPfu2NS",
  "key24": "2TuJ6DEg7ZGRQB7FpA1UuJbxS6q9ZurFex3urUd86W1CNT4k9bAxN6DdZWX9xmEnhreSBfjck6RWuddhE1Hg6i3r",
  "key25": "4L3J9vDwNU24bbwm2zfR3ro6tZKYDpmZbFsmNMciaYWsXkbUXK3RwaQjrtDiRjvMAT6rwEMntfcoSn3KLZGnTvPR",
  "key26": "4frX3KR9rdUu7QRFuYii2HYndu5DUwxZKhdwnuYDycgd7YCpsocxAJUPMahpA37re6L2jBcSmjdypfi5LTSChYwQ",
  "key27": "2Bp54WCiKA1HhcohTQ89jctzvwBeiJtJgEy61hNLiQECcs4qCWdQusd5wwSEe4W4F8Pn1RBjoUSeDF7cAhvvfBoY",
  "key28": "2Qzsj1SKRSQtx9ZgpF8mQHFBdc6CkdMwFLdgso63Pw4UHAuCRMup8ECGSReVeGoDgUsHSQ69oLMQCQcCez2Nmf55",
  "key29": "5fxw8vHf6qoPqbDCmBkciN6KaR6PZ5ghDXThspYn7r59pfALFogSHuBG4DKdy941yE92dRqi8duuZWrmZ69FkKmT",
  "key30": "2A24Qg15jjmNHeC4roKSb4sWCQeneWnuwzKEVRzfm4UUNBbSbnmTTWkN5AE3PZ64RpDsvy6qKHofKqz6gnrD66FW",
  "key31": "2TTQq99KvQU81hKbrTNVen7hsH43vSoAhVhf2NjmqpJWEHfCzTYu6okyFEekQAxDanZ2wMmW3Hc6AJcaErKjBhqJ",
  "key32": "3N51FPk4bTh9yHHkciEUzr1tji7XRKGGd9MHwNGGuHFjpU674WDNXdzeZzJgpVCSU17zWJKP1Gu6UJFZ64gz65Dv",
  "key33": "4qD39nnd2R4yQsrKT7TXZodTY1y4ijb4cMcztADM6P5neMBkA9R5bmjHnHzmhhC7eRmFs7FQtQu5zpy29MVu5exG",
  "key34": "3ijtMhBtrF37MUwzHCrmd5yTwnAJso9H88DYSc5u3nLbx6xZdnpzp5yiFkQjPMZCdPFzVzjG4DspGmKWvMjNvRmn",
  "key35": "4p2os2ho6qMHbeoLMako1yLPKpTgPtwon1SV38JyYajMBWpih5gTd7sCifDZUXB1mwT1xsLsHKiJPyFKVbhVdYmP",
  "key36": "64sKwwY7M2MzZ6FSJ7gaLu399v3JuAogWpo55MbDbxtfCxzhqABbJR7QfPMDuPDQZZp7tVEU87qfFsGXq7fgCUNf",
  "key37": "3Xw6L3yJkA9vkyss1qYMiRutZ5PfzACy5S4RpKmqFy8KhHY3j7NYWwjJVD6oH6CD847V3y4BpSriezTxuXELSBQZ"
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
