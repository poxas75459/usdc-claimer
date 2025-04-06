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
    "4QWpWT8qF6DjwYaAFS4nCkguZENbMY5pJvEmeGzx54Q3tekqxudJsJ4BvWHZakHmyciKedJnM32wVY8bs9qsAJi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5jwj1K986ntJV3AdTjY3H8nY1HUL5ayLuSzA3UFzRC5dd6rAgd4CC3ZFeuqGQRKFzJ7ifMMeWoxzKRSSRv6tx8",
  "key1": "2e6Pih1z5Pdt6yUUqeJKPp9wnCrpYLS8ddzgZLCB6YL7koSEA7GfT1t2mKzJ2RdGYUX7vu2VYWbKTzx3EKnGw9nE",
  "key2": "38DBvi1Riz7sDQfzuzCb6N8CqxZe4TnPLJZyotCiafBdVtGNSEoRNv5Ht2GMPXyViZe2swa2Bz8ctFB73iVqFkse",
  "key3": "2dJkCT7yRagZCarFDvgFfkwsknAdUV75h8D21MAxtt1VTBw2KJYu31drQh3gRNrXp2X8ztttqNRfBMnaiQ3vFo3v",
  "key4": "GiniuzzRoRHMCY46WMo8N7mdxPDwB4gb1nYPq5RmYc7KxMvvFbR8pSpF2pHtV6jKyFkxVPf6s1eymGX9ZiueFVB",
  "key5": "3d4yZDM8pv21v2YPgoRAGwLSDHAJy7uVr8wF96ceHWGTmE4gwiif7JYmYvdpUE4VVrjzPaoPFxmscQLD1WFy6i4N",
  "key6": "4GPqmNP6Zo9fc6z3iQMPYnZUS3stvT4B7e84KSukPE42i5VoZBTRTWLGFEkgiLiJEvGvBf1CZhzNN8DgLEvBVrvW",
  "key7": "4mp7r6j73s9Bf2CtRc98F6qWStbeSp9KJyjdxAKU7dz7ng2jwqtNPMssppKK9VFaRi5zPgVWntDatmjvN2FibHaB",
  "key8": "5C6RWvmZiFFnz9BGcMtP9HCLMeMZZKaj91DgNDmFpZX5XCoiByCLj9XKKQkNMVRsdrosGuyNNCpZsj2iXbquUFKH",
  "key9": "3Rn5cN7BtcjzuqQXN266pPwrb5jqPhroF5Z7AGt1zGmGKNQimnDdLT7scDMqPDvjNw4oyzK4xjDaK2CN8WFDMpfT",
  "key10": "5JGBGS4AkNZAJ7Yq2GEv2e5GuzC2fuDQ11FkxK3NgNqifgoWMypaAuHUs1qQKurcu4xU5AthDKLN87PzeGn5x2ai",
  "key11": "22RvquEgp2qTH3ZYNNbPrHK628yFniESxAy3TAPb1iw4v6CtSEhUNiVvovqjqS6Jw7maW8QWssQKRsGvM8EciJp8",
  "key12": "4MMgawCdzDcxu75PoS3XQNKzqaNA5wjzfBcoYUZLHEPxPN38gqc2LQk1BLTtYQoeuTNWRkFKdvwGGNvZub2ezoAr",
  "key13": "UemuAL8mRTHJJbPiciA4s2sfXNEH27qzqP6HdYXy3imxzVnHjG9nGos9fqafaXxiPtYZE2ch7GcojrtTbFBeyfL",
  "key14": "5Npu2ezX1ohxTv2RdkSyCGmpH8pZARBf7NJikTRTeRdF7PyujSyGiBiMhx3hLbpodjSgjbxv1MT7YTfCC7v9xGne",
  "key15": "5ZdxKxpwvhMfQxjK7qNASdUzu4RVKPQ3bZgzeYoA65WDA11M4fXusCokk8hu7WH2dDjP7kzT4uUF93iG5vjdd7Vi",
  "key16": "5cqe72NPEJFTBXTZw2UtJrdWAFsbN8oiDJRhZxNBWrbNXwKpEewoG325BZrBkJjHeZr3A5Mpvj9EULidkU28Hdff",
  "key17": "4N8n7gXFTBrZTeU3zvpLZMNzAbbo2bpGRVQG2qbdVfGg77mtS81jCdPbtA4zctsWau9ArF33A8SmxSnojfprQuh7",
  "key18": "45A9ehAaTZxu1tu667CoEmqhxoir47WyJ6kPx3wEurS34vaNdBe5XKsUSzppVxcPEJPzvN4aKe81HfkjQTaohB38",
  "key19": "5sKjTcRZANikkVKyFwERpruw1ZEUCbzuPKXHnBUmB93diBbxyoAZ1VD8mPt2vrXgyHoHrKxAVqX6faE5mGGXVh6g",
  "key20": "4mNRbfHDZ2crghZS9HujDBw4c6RUWCfhmJTkh15NeYuD1gLGVx9duUrQgAH3VtbN9yh3dKEpTNFCGhn5pRe37o3q",
  "key21": "5syabmWgmHzxnB8ZUtwmSrbF1MAxwi9vnjbZUoQP83NmNf6gjKqxiDgJQjGKaw5YVxxA8sdbYSxw5ww2h1cLeBv5",
  "key22": "RojfdpXfShaDXK6wfoVJzq2egaQreER3PCCjBdXL31vnBZtKVdohkkKkw14TPs2gxx4gHD6NJio5U2WJgyJjDmH",
  "key23": "43p3E3qYeVf37FZhMZADMxfpmLHMDUqC4rFHDL5mf3ghVqhdUDFRK35F3VyMp2AmryJH6bkabLK45ce6PBNwq4qQ",
  "key24": "2ByZ3NYJbGcmd8BdKvUFv1wKj6RyEvs4rRME8mTez4dBf97BXJGwSb2ADwLfLoqMZMprtpZwnkDw4SR5VkdSVsPm",
  "key25": "5H6VXQEVbiVUFQ9zWfDzyjtMgwtCwyBVkVjpKX21Fp4oDFVBMz9tM3sXvXjabs9Wp4Y8qQ16xCfkNeepFyd6Wb1e",
  "key26": "qJe34JvvczsknBvZvCEDNX6LZ84LPYNrVoEzC7YA52mCvTeyyh4hVqbweNrXJZRoihPnrdfyvHyg64rgmkS85jW",
  "key27": "5Y4mZPiHKBHNG34Ua3aJ1HhYspVNC5rqjb9qGdvx96vr4jQgMdaX43bA7mFjbqL1c2q4YrtgsQi4B7UhZ1F9ihiX",
  "key28": "2LvLk6e17FkNaq6z7cBaxQJ6QGKYzj5bJUg4KRNLipbfjt9QmKWE6XaaPUeepmgXXn1Pk8pjYX7drbkTprBGziqE"
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
