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
    "4xWxVNDzuPZ1o5bZ5t7LfViY9D9ADgqNURQQdeqBU1KBfTQbWdRmpgUHSYSkDPwbw4bTRNYBWS2QMKsTWXh1WSAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jWiBTKUCdZCRaj6r9N8vKimWkHTYpZPHZbkebyugndA36zsNGf5NRu31tC1ZAxF7cv4EY9MsR8da4iXEY5U5qUW",
  "key1": "2adbz856YyujMDmgNgE1mAtJcpKrcVucLMZfAeTzcuMv4tyBs71z581kxPBmZ8Bc58JreFDtLvh743xyRPgua3xP",
  "key2": "oQDsFFSk6m1CQssnMS3HJdDfmGwq3inDcjhbQPSAyDsH8g2wWb8Xa5PTaoJzh1eUPo2NhNT5ik4R1rch6k6HvuK",
  "key3": "ERq7rkEpYnQnZqzNmt7n5uyhjpiyJU4DrpD7DgXP7iSkW1jqiZT6i4Mr3fG3Cv4gPjw9o23rB6GdB6skYAPhGBm",
  "key4": "2oi4FDUKyNBLxPfKvUgHjQ91ZUfi2gReYyyhhqssJZzn2YyRmdL24Yjp3zYboTEQsP5je1seqVqeeNNc3ApUvXpx",
  "key5": "54qWjmMvPcsvdfYTTq41BveD7DudaJzyQ6tipKxDdC12Xge4j68HviVn57YmWidWoYj4SYpUELYpDAHTtStHYL9b",
  "key6": "45iBD2tFWCXju8Vhve59wuVhLHq6sUqxAG4BC5KD78EB4qtMFXpdcKA34qaNLnCeQHSPcordaSz8kmNeHpR7RMyG",
  "key7": "46YDy2zZmZZaNJu6B59UeuQmhwJrxpLuc4qwSZ1TZcpVS1ZcP1cS4uM9u8YZm5y76mezQ9k2jJpZ6xnuwXuAPqBB",
  "key8": "jV5P3uN3MpsJ9Kgb2RdYktuj58NSbgGhZSQFucdx6D5WK8SUXSMBq9J7i7uUNCFEeum18EBCXHuyj9233C3XaH9",
  "key9": "4wpMnmTVE45DxWRQm7sGbEN1n9bLr3Y4MoSFEnS6zM4WSPTmhaG5HpaW6TLGwb4tEcEfRrL9AqCHiam64XjoXdRf",
  "key10": "674r4nSZuCfBDuKgDJe8t8uzuhKfaiA7qfWjumqUf3pMxUgZCfyk75NiY6nSKYQrUZmY1m83436NRtqZxipt47S",
  "key11": "3zmafwQoLzpWcd8LWD4MznSCCnBdZNwhugRda2NeDErGMR48Q7HF6maC3EYQ5Dq2xMUqrHUPAQcEJ9SaKy9kiizt",
  "key12": "5dwjoqEvZG5qZc3CSuPxgdAfPXScgp1kLVCBrj3wHEH64UmhendqFyhNabyVnS8FiqzuLiBMipqnYNATNDeH8wmM",
  "key13": "5QhSbWCSXPZkuvLWK3fofAyZCE9KSihCYaJ3uSRKhkMMmBbrpEbf7bsQJDmeGs7SQqqh5Rq5XTnBNkzudMRfyvkE",
  "key14": "Pdxkcu9oQWD79SHW5V3YoMxGuVKea9oAX8jNknPPsHWrhVF7YPgkRX2WSkwKVgj2ecFGYRdthJ2QbGbejWYE5CZ",
  "key15": "2wqJvXC69g95xMzhpH3oesC9oU6SqNchZTa2G9iirrtGw9cfPZPk9H8aHJVqxs2ty4QztjpPYs3DxpaiJShKbULU",
  "key16": "44gZSFGBZHCAbQRqvCQ9qJgp8HfQboedd7UUtWhvXvF5gHdyqFhuLDcA9WXowuH4J3UL6TVpZ8Eg99MVc1xcSmUb",
  "key17": "52AGaUULjpFWJ37Vq7XTW6MRhr7nwDLZyygEyKXf2UmNAsoMYGeefYxEKc2HQPaG6on7YJd5RSeite3sYosNt3Tt",
  "key18": "qWn8HDkGSqgaNco8JyY81ZJxuZKQH3BBBSLFGcNASPMjyuADags31NabwbZyKvKhmywgKZnY4JczsjyxYADxCRh",
  "key19": "2pLrZveH8FyfMBMnbLeS3tfjvpvP1jrbwafQCPzpjKgQ3Q2izgRk8KKr9S1YXVcpH7YviWvyuCKjTYHacYrT1WZW",
  "key20": "5JbZAuHPvvx1Myx78emuWe67cqDZus9d8Y5qvzs2LBMa93WDkL7zj9VnFDWQtcdkJdh8oi6UZkggeCSjWCAQZyLd",
  "key21": "3VXNfAX34GPXpbvkbFhbRm5mLRYSM9GrYCYWBdFCgHN6XH5AVk9w5xddAPyfW9wgymXNuqMz4zWPNyvcFVQwrgtw",
  "key22": "NFTtWVMYaDNaZVZYekPXbLT1t6xXkCrMBCTwhs733ZNPLV9D2WxjbLVBynt5jiB1JvqztayQhTscyq62kBuq1sA",
  "key23": "4PckxUbsH9AY5FcivyQAiPsAgkLHA5m8JJXygGeTJokYCHyLXaj1pe1a7mmgJY619WXvbNYcPxdKsguSx9fjKKAu",
  "key24": "41hNCncc6brNqx6JmsJVq8aGMxtUJedBprYyyVQFrwfCR2A7SJ3aU63XUZqAfMkBeqBN683FqFpT8i8WS1frgAi2",
  "key25": "eCsX1LB4wBt5MZ3R7ervt5a4M1egvL5wnjuTGcYeHuNmF2FS9BwXDtqVnj1UnpwdnLkWsbKPX7j7iEtys6wu2Zr",
  "key26": "3us35GxKL61fvHm66Qy2CpCbDHafEF4M6z5LnJ73NqCjSEbFL8hFdSKYiTNpBgLwQsG5Zboku8N9QNNMZUkiP8ek",
  "key27": "J5BPa8BBJMQSq9pNGXVMcibE6RLDTQJohm3k6WaQ24UhiJz4zWgcE3ZHLGdQGMtha28Spcuxqe3gBbn4NTcnWuK",
  "key28": "327MbwPgFdeWuWu9g7aLsMTQHiC6Nu27pMQLrqcrpgk8RFyd4gWtUCWPjCqxsGrDUDsKo6hety16yMTbd1UoVVKS",
  "key29": "mEqskinJJNQe87ZyM7ZiV2c1b1G144wqYRCVM8zojreST93ao99L77R2DEkuGQanhZYHuykwQyikqErsTrjH7j8",
  "key30": "5P7hYiKmi7xtCR2K1JAwziMS2kqkUyEyozML6y7RQfnYkmPoqFH3tJCw1p6qSRzckjJDBTP4SKfPXeQfoLiz29ym",
  "key31": "5nLkzmXGNG46r3iEFcuquAxXmFGVedjCQpt2HHX54TVkoFt8XKSuNzGmFXpvaoYYPpirBcDmr4V6YAs9UpnYpaqf",
  "key32": "5MyEkm33iUiXMCEvvBfxfDFNWyrBMW2mbBQ1WdEkbJjxkkVKBcax57dHNUMwun8FkuUizfES7Rgpj59HrT8yzBZX",
  "key33": "uuzwFjoMvodhPxDWCFByqrMkBLf6zDnBqg5tDxEKzGt356gsMqDGNW1hU6kebgaw1kRCEwVJ1ZxtzVpjNW1GMAZ",
  "key34": "2h7RzLe6U2Q81phcLFznBp2XWLepF6K8cAYziUpoJMrvQ8BTc7e3pKsFvuSMtLT4bTJ5bizx9ekGZipYz5vi3i2o",
  "key35": "4XgC1i2mg5KKSUK1wX7iirV9hnf4rvPcRy8ya5P9U41So5z7a1SuQ6T5aAALne6a7ANDuxY6k1mYb9GeNKMrP2pi",
  "key36": "4nfbJrcNbMiaMGxbrzwzuyPQJ9vbQi6dgXpafpfzgL1rvXCr3kLmReYibkmhxiftv1eo4psn6k6JWscCPwr2F2n4",
  "key37": "2zLefigxSvdSSeFBkGNN3qYMVYshSFZK2JxMDnLdaj7oUFVqUFq529uW42Zak6tDtj97WFYC67EqQouMMYYJPTAq",
  "key38": "3r7qj8GbRaP1YEZ6CmPPirmn4xMUcLq6dy5qmDTbGu551aj6QERufDkSY3fqyN1Td2yys6oL3K8VmKkwX36Ym1aK"
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
