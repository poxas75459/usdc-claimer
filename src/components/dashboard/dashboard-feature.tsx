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
    "5Hxo76mDm34VwWZkV4voEGAZohd1NA4cMsqQcNan6hCVCcdXL3csNJ2gqfftbMituKDpmiye4Wgd6gDFmjH5vYQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htaMSTaqgxke7nj1sFxfUn6nTLT9pAGTcP1d1Tuf8kVRTshAvbxfT2o9bmiJJWezfQfPPbDT9enGGz5NzNmm7kH",
  "key1": "2PrzMJunPhqq1FcQ16EGC4T8HUzEGogn12ppQYJQa2bkb9mhSouuyYHxx6uh7RUYLWfjPTZqXfbEBuk92R8djqcm",
  "key2": "FS2me5uWyrhgWrFzGuDVkKjmyLyjR2KnHHTrsSHY138xNsN25ame5J7j4m1rCyTJ8ePKnhmFCMpe58az4wpGNWs",
  "key3": "2sA4fAfvrwqo4CA2NHjWPRSZcioT6dLKGxPgE55bGSa26rypouyHX7oJi4jXvfVjPZb5cixCYXWQ5Hre8LMdJDN8",
  "key4": "4CjqbQKqMR94ShYwevH7UHRGuFPjrEJ9ZZQoXW8ffeFGBASAk3kFGr78MLXSjXUELHy2yT4asFK8tQhxgjRG9e82",
  "key5": "5cwz9rL1zATQtAJVyDNaGG66UWYxYENzoWPMgi3jXRnAsEo5v4fQGMwRuxyFhUtZyLEWUWazQWchw43DtoHGZA5Z",
  "key6": "3xcSH3mSHX3wWALkuZ7XwKCiey12nGkTRX6X29B3deLU4VNtCB9zvJAp9922H5bHMKKRqHiZ3FBHz2i9qHDvg8ym",
  "key7": "BFHZHRMR4QfN5tXwTdK2Voxjn1hpUoobb7zQYqMwP4Xq8WkvR3rLMgWWDoiT7AAyTDR8YDjgMdR29cXTLaWu9ec",
  "key8": "5VH5rhvnzEgPRfCiJ42Mra6BXjvKbvPLQBv8mPYbbNJcHxYSjPVDi7gLcsZf2GdDGVPCBtLfhbvToDrUKh7n3nB4",
  "key9": "2aWKmQuP9qvvHXgUbBpQji8KuYJRqAc4QWq7aFGdxdPNFumS8msYGkekxpXJ9Fv8s2Dh4vBmPsTjBUD9GhkRQx5a",
  "key10": "3MhvHUMbeiR89fzKBcKdxgwDAruz2LXA2aHFAE1gGUAXPBpde4PfhXQ7GTsBsV8mSeYoyBdjLSV5YXWStBsVoBs9",
  "key11": "4epv8eZueQ7zQZ1h8E29FWy8AHGcby5y5teh8hJ1FEfseukbzgYH1Eh3gmz8AKu8n9QnJY4h6mZnTSXyAHgz18VK",
  "key12": "3weFYVDGKs9S2bpD2YtM5ziDz3GXtYSf7vmSNkuS5gGPiK7R8JW4r68z3M1emGWVywWGubRnd8QoFA4wUMG6RzWr",
  "key13": "2Ah5RU3nAZ2ntPmHsMR47pxtpConuTT4PxJ9KPuUDtncsFnAfjLUfQDqJmypvwVbtkT6sw9pWRt3y7GTwLeW1ut8",
  "key14": "59YuPaMWHxjdnvzAGWtqLk2S5BrbxnZAKtNoBBjw66Mgmc2XhEsszVs2xmpb6jcrz6T5d2xFkGDMCFui1zXm9riW",
  "key15": "4YFVWxJMEhZDpeQxbUwGfJo4fuRDPWs9SZvMssGzZsMeBhZ7N1qviaDx9K99PYFGkA7yqXESv8eBQmAZZu1sSMm2",
  "key16": "TJsZCKxsJo4XGS7YFs9xPBaeRSrVhfLxj5TPxayQXB6rsG2XLozfQMrQVPt46eXdX1fHnBJyRveiLpB8uKYv5gg",
  "key17": "wENu3vddKc1T3TnPjvRTrP2V8kUD9YotWHrG4HUQ7HpYb1gEpPbBgZVxPrafqKQE7JSses6JoinTZrn4mgsXkgo",
  "key18": "3dp89VzZrcpi4eZkJxPWxnS7VNsYUHYek76odr7okszZd1XktkKGmAF9JwrD2udbEBsLXkWAnq5RcnLddHY6VPZ3",
  "key19": "2oSPNFvgPri7LU7ePQUmYubxAzFry717cSbDws5sd3guWDVPAq4xyTZh9a5AAUzTMgdwk4uQ89sC4WymjUYEkpZB",
  "key20": "2ihAtKedqZ6QNwDxeQce21WbFoRuceBGWnDDHWFkq2vjhAGGTjUdiFLyLCoHESDhNh9tyugvgyWDNQMsDzGEjkeG",
  "key21": "J784e58sT278WXBN6mnAdnempRsCsCidqrVujxS8uY5ywfon18ppB5eE3V3zbpkQ4wTVGB6MgDFRmKQ1ZJd4nC6",
  "key22": "N5c4LzhQWjcRVhisfQcanhozYiWeYSh2SDY57B3ibTFGGNoKm5VK7fQ2fHgMsFTv626xmFgVRwCcVHKoBiFUtDu",
  "key23": "YdJBzjCpsWQGCQP8gVbbCqrjeLGLiHvrGKHkKztpqgSmqtujj9wn5DtqPDzgyK1d1oPceko1kU5HSuF9xL3gDsa",
  "key24": "625NhVi8J3XavgtEfyheeYkhq84qrTQXAAYsa6ADjwS1fLJDALP6QT2KbGC5QZDxCpSSLAHGMV7tt8R75FsmXYF7",
  "key25": "4UZYo7oscN5UF4u8BLHwQETo9NE8CML2VxzuEo2ZeqCCMH1ZEmRjzmzzo12y8oV4WgjWFVekZSgdGu2zLEUSh4Rt",
  "key26": "5m2XuiiFF77gAXZCakbmx19459MVDpazd8mwRUyUiTrZWedz1Z4XUx78vdi7JdWF6znaUHFKhzNLMhRYmazARz9H",
  "key27": "5bT1JJAD1ncmkSbsXJgUSWimUpM6zfjd5mN2wY5LoRU4HNGn1mRvam1sttymEYZvj1YqokBu5XpejzomPN3hAHmc",
  "key28": "xag5D5rwxAWXBzmACbw9AnUjU3zc3Zxp1Njczv4v1S89G9GiM9jgPgNHfvnWN8cfYiGnWbDBL1XsuYvxdrHx1xc",
  "key29": "5NfXv6m5CBWS2DXJinuVWQsdaGqVTexJrmF4UETxg7T8JKWoC3S5TJdXv5cULVepL6UC1QKRYjAQErJhmzA1MMCc",
  "key30": "3VfKq6xsbYWp8ySFxdY5sdtR4mPs6f75pAJULWjU7PdYjyMner82UjWq5Y81RYTQ9Fz9TeiLBHhZ3sirvyPiNHvC",
  "key31": "33sSTF3tom4r6DKjY8RwxGKkp4Dw9JNC6Yrh2y8C71KagcrWe1pTRLar9wmqfaAac3sGk2oNAL9EWv8EDqUv6W5m",
  "key32": "mNjTDjHYTMZT3YL6LgasvE2QVRP6Z2g2HEzF8fPYSPwAd4hBGzgQcXcsttm8J9hz8c4bivG4abDLRWfoBHfBW2h",
  "key33": "3dvAaeFCR88KHmtNYjLHH7NNcWcBFGHHhhUcTQffYvgXmgQcmuBxK4r2SPd9VbzZNEZbpoZCuYt91ZogyeDDeHgC",
  "key34": "mfNRB29Ae9BKeqStxJMyDRyJUPZdqq7VgxxeQkvez17VBZJSpEQ6bVg9p6Uqd4T75whYFEGMM7PVMtB5Hngf5ph",
  "key35": "QqwcmrYJLBGYYYVW9Z836LEgVj37itW7HsUg44n4wL6jrZawemRknAE7V8wJ1K5g6XaosFidWZMgHg65uLcdsRK",
  "key36": "9pfzsRN7eH2Fr45vj6C6ArATB4ta2uwUK3PkaioEKeznXJRaZbB53KhQS9u7titS8as6ApHpUULKYeETiF2s1GR",
  "key37": "55vmq8wYotwo4yUyW2JbiEKggJjVBwh7i8FuNniWSq2vvhcgS9B3meqZCdrKwGtsCSDJBHQCjoVgrrcECpVf36PW",
  "key38": "kpH2Ya3m3ScWawCJ5fPuJQjZv5xzQAKA5oZSEKegf1jeUt9EZgi8MQxNLZ6ufyomqxRsNC6o6JQBS79fits3bGP",
  "key39": "5y31gTtbizXDvttvxcYD9TGFzBPa4f8LbNXTC9SRnAXkfLJ4i8ELXjHLxVWcMo4Q3rPU5kUkzmzfoqZJX5wzWQXH",
  "key40": "2JAVzgaxL9W4a112MN6j2ouACG4dWR1hBvWEXpiY3iiRi4gB8thPMrQA2vjWdVLRKHWKswhw1JXDzCvTbEgbqFft"
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
