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
    "2JUQLErvpaiQykYdLADdXBA1Gdds1Em6gE34ay18TUfJo2k12wJchqrrmm8H3zC3FESAjHMqrfyWSDAS4bhgEbJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKEkqVmekS6P45AuVKSjU7LWMEcK53dGCvYV17RGfahZ3wZK7aTkCQsyqDi1DNtbFWNhTSfw7ZZPpwG3i9hrXEa",
  "key1": "L18fAStKQxhPHnTdybQ9SnbuKKH8JVsD2Usrm1Y1fwds8BiK2XJ1pxhNuLHiQXTg11ba7frDGaAh9cYSNDkvQTK",
  "key2": "ZmZTL1YYRsUT71WXZ79TMxGQqtcgKBobRTUEBHpheFV28tN9EXvzaLA89KXhCgncu7KgiHQHZqhbGtULUVh48e3",
  "key3": "byw3RNx47iudjJv3yCCYirzEkPFRrqn4RavfcW8fdJF1A1JhgBgo986tdKoeqxXRa46en99WeVwMjfUGzok7ut4",
  "key4": "5Dcjuy7rPNF8t6yYUgW9Ac5jQLjBPwPHuZDUYdCMKhkcP86J2Q36kGG4DxGSSznXCoKZmznTrjqXxoe8zwNCRSMV",
  "key5": "2TSZ3BQ6hjmMmesHA86oQZZ8gGw8F9WQ7cAASWv9jtM5Q4fZDPi6SaPxfm3z9SuWMQcSGk8YeYVyhvzK5mx7zJ1p",
  "key6": "4TXfMiZZqiZPJhZGRfPVMgkKBLLzwwHPqgNYLcvdmK6UUrp1ed2nAoZFc2iJiFPn9p7aLW6ZQvFL1bUaBoTmVRjQ",
  "key7": "3V4Dncd4F5jbSkcikFR6oDQs2g8K7sydy3D1tsKmZGGCEHbybP3a4cc4hsr3QeXtQhCyRkgAjvGUhnpwgyrBdsW6",
  "key8": "2wQviihDcTDJfnpJNUHEEdRtPhDGdfKyQiUAp4rsuv9qio9Kh9EgiPbpKPsfRF2B9eLJYCoTUsM6TjM3dR5e1WuS",
  "key9": "29cFn7wJGBv8euKpg91CJspwrLhw9VC2hhGRJzMcvooC84rsh8efwahUdeKBnYFLrFtmBVxeWZH33Bs55wwx8VVy",
  "key10": "3LqhpY9TPkrQ5E2Yu4SywSyEFM2yDyRZ5YXEFMtVrdqTcdK8gFcGUJ93zVoWK24yBEgvvhneR3oc8gHm8FnMPD4r",
  "key11": "22UGwtAcgQ5V855wQoLcaGo3fKmcPBVvL5YRrbJiutsFU5fZ3w78Pn2xWnjPSAX9SvrqD64wsF9YBDRir6L5jcuc",
  "key12": "5dkTAshR7fNKxvzqcE1nU64jp5Qu8UMgonk8HSVWg7zVWo85ScqmTDGo1un8Bn1AmED4nnmZ8jRW3GpfMRhXibHQ",
  "key13": "5aZxA4aegw5XRV9vfLhaHbJAVmBx6HKACTmvqfNbvEH34kW4Ct5bKomSnHex7WnDuyryox2T2b29jkNWAMtA41zG",
  "key14": "2ACoiyic1pPnvZ72kvHzdBZNqD3AbQXN3p6yTBxGUomCWHhNryVYT9mrCE9TfmC1ghkhNxWv8PgGxe6v2cMGuRgL",
  "key15": "4f2s7mqkvseeu4bywNXJRABxogHxe3npnKQcA68zs6XT5vmKtBqrKFDQDVKuN9m1aLzPmdeVCBoCvi6m8uexhQP4",
  "key16": "5Q6ZgfzLinFs5YTURVAUUvob4eNYSYvMHKQG2zvgnGGS7RWvett5oLLxX7FP1tSwJYYfYYFu2kJHHhT2Hhn5ZG5K",
  "key17": "5kUrwn2aDqJMH7Gs5dwiCVAhKWGE13RAbi2YEXXhpgMRhqwsq2z8LvyyU95HQHSpUFJnvL7bPDxcQKCJ3TAGmuEQ",
  "key18": "5y23hAfngxeuSb6q7K87o22nxTypU7zeLnm8cSXob1gofeyRhgkBLGF6BsJ9cMETEHvGfagNWAQRESpgjnq55S6r",
  "key19": "3PVmXKWcyGXLNkpAbALkg4yrQQgnsQi5F92KDb8k91SDWpods1wmHrZoMZTdPJTiRxCaGmraAaw4rb8yKceJCi2L",
  "key20": "5oRX2S9Z46vQMUqp8s5gtYJpR9TLwHDSYegrprnfYrajUPxUt8gH4Vq9W6vZriC9Gq6tFWdsq4KdQxehAk6AyJVv",
  "key21": "39oWqgdKFh1JU7GXtDsbZLPPg1EAdc7N7RQzp8FbXY2uCzJxLNoc7K8HJb6hKLvwJGHZC68D13AsV7xirubuC5J5",
  "key22": "4boqyZDAcjdoG98DE3kmTe3vpsfuCcszDfLEv4JM6BNCpdtNGTdWe5GHo5L72JS2EiL11Cvya4jppH8K2AENYjQW",
  "key23": "KjrCwzDAnzDZdxbqmXAddTir7yXUqBkeRkkiZgtQMxzsKLzgBQEmKXkLGaPkBVmb2DGw3ni3cjaxCZ4CuDi7yEe",
  "key24": "2xAXDb1MCzbovP6GEKZThRTHPTEUAJornMjMbQTUQznvHHcqfqtVWGJ4Ri6Gk9oEwHDa3B7R22JjZrgo9FAAEkk8",
  "key25": "uLVn5xwXJQeHaED2sZfu916LwxB3eYuXdw31eb1zGmZZ6wWXnPbroxBy4UUjbrPodxhsD8g5rr5dJDwtcZ2KMwr",
  "key26": "3dSkEZ74zP9TPTPf8yiXzL9KLnZ3eiitpMuuBZ4HR4hdQxZ26E5LBB1pABmMrJR1p4vGxtKGvGQGH3VLHVuUaqZi",
  "key27": "hnLXKmW2dJBq2gPZvbfhGzhuQLcqajrLAUEAaCvJaZTkTZqWA4HUD92C7mMXjPM3j3iddMVfY84i2niTCHChD7F",
  "key28": "5e5crSNDLZ8PHkyM1sJ3FKE57J4Yaj3bYcRVayEkKYLoD6VfQNF1Q7gwVC4QYtPHbCD6zEm6hXraPipg8kv6BYYc",
  "key29": "2NiohensRmkc12buZ6Z3grXaH4HKgqNxjKKBF2yvZ9SpmBdPHgFvC6Uz9Qk3e6DKMb4ise76q4nF9tjVvWyNbVYm",
  "key30": "4p1v4Ye8jeUtRDBaj8wQTaRrzC8eFuWbyZpfvyT64N3DXzuAzHm7YDufF35JS8XPn2VraRU6wC7K7KBVDr8EDHH",
  "key31": "5DgS9FGwZZA8MFXiTssAj1iuJ2P3CjUXiYJf5924e2B92jSeHaiskcJbMz67kEDEUWPWyaZdMAVReWcWoF1CFrru",
  "key32": "26BdUsKNzgrkKsufZ32trjfkPazvGSERny7Fe1ggbw1Q9sJyXnfH2Jf1XnPGhcjUU8Hq99FoT2NgTs82ay1B4KS6",
  "key33": "5gJmzZyL2R2NyYKpwQLhvYe8H3jcKUJfVCtYha8g1rXH9VL26xiaa1ndTVK6QjAYnDBzD5SjSiBi7dBYcHAUECPM",
  "key34": "4BqtX9eC1hNh629LsXozFaReFWyLAyeQ4q5acdS5nbcxX1vFSKvxgz1wHZ6S1bhnaEjEeRU8NvqEvRz1pCpoU3ik",
  "key35": "4UyLhidwnrTojT37tDQwgz43VzijgMvgZsvQh62jgr62aqWVsYfcnz2bt5xmgEUPBugpzCNKp2MCfKnxMatrD23m",
  "key36": "3gajp9XjAUFznyKX215NE1zQhrQBQhgVhuPL4DgxUBEEKDBH2azhauvTGoQZWE7CNkg2iw41gviHVtVnVFRyDpm5",
  "key37": "5xxhHgprSXA76RKDfJ8M4E7UZFrFyn6J4wrza5neJe9ykUHcaqt9QJJA93V2RnGPHZw2unVp6nMzjwwjJD7NT75o",
  "key38": "2XqZEYhg14xdDwbtmVhssN6cwZkscwuWvCebQVPSHnBsRurCDiyszFtppnGete1sfp97pevDkVCN5gJWiWnUtBWo",
  "key39": "TfxPALakFRfnkmjJePK8xRRytXk3gm3Ys7kbtzvo9U55WAFyD1R4dPi8LYGthFMysuTg76QGoC732uv9iX6EK6K",
  "key40": "46pkqXwSe7JwfJZgsP72k2uEL1JTJXYGAYc8gxvyFkyvdedSTizAwQGgpjRYV1Kxtn2dW71fmC28YZC7BS4t5GXw",
  "key41": "2JuZVKirZNwH7RVvu6nyUtsYF9fMnhb1SexgM5xjVcyTJyPHgiVAM4agcE9X3nQRopcjxvLr3s9EgcHhxso2jA4r",
  "key42": "5an6cpBPWx7MWcjPMM7W1PbbSfXoYyNcFpeofpRZuFqsJHGWVPDMyYNDu2MV76quDDNcp8VUxy4t2XTbzH92dxNU",
  "key43": "5uk3WtBG1VkZq85H7niquY43mE83DZXv45sZ8zB7uvXEPxpiMcwcYGWdxtWPNdNJynVpQsyoouZTsoGdQx3SAJNQ",
  "key44": "5hAY79VktWzhiDFAhyjR7cW82kBvrviw5qYycwsEMSgQi36Apa228zMjBMXQeMuZk7MfGGvcQYSNFLDQsMm6R66B",
  "key45": "3MVd41PPcD5jfF5ihpNsKbYFuJeuYyG9HY2XbNrMte3xBBZ7aeQi9cCBspA3waaLupEhjMQoY4rpavqyajnsu4ZC",
  "key46": "67Uk4skPNvRUT7xpgmiQXDaaNKBb4SEfB41NPEgsSDrAoCMsL5ZwJYPmFjaXctmKBepDxegui3S8YDF6a9GHPGQr",
  "key47": "4mZFAejbTE1XSBC8LLtn6Lz2ziNXqNYUmf5vanUg8WLK1m2sJC6o8dvzjW3aXBx6h5ui5BKjBNFVF7YpmXSL7MUb"
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
