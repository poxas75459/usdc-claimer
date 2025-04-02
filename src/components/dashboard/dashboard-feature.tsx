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
    "2EwRcdVcwUYRDYtYD7wjXiBqheGp6gmmEfK2STfn6Q6hpxYhrjLnUHyFgQhEo7ZDdVnJwwGj32SYqqLWgiwKyG9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pu6R7FMM6kuZN8xp4R2826n17nNjEeCJD59ugwpgVjDUBBSihBuZAzXrH3W9SZxF5jWBSLBnkuEFatavozNbkAe",
  "key1": "4gZkdQEBErgfhgB9XtpTyThYVBRbiUD5LF92MR8FZccZTpEwk3cSNpdF6acv6ixezTb4VrZe3KXpkw9toAo6aKYp",
  "key2": "2m9DqfCqZZdMaAWULRR4j2Uvuo1jmJC4Xaa8NhRrhWtnAAcvQUVTrrtu6WoP6Rdqgbw5qq6rFyDmFCssLMP6M1Kw",
  "key3": "4uTC7JsXSKj9GxG3twx32GMYSnVW4VuRqZQK7VHJawFbUPUbN1kSGJqGfsCmPgD3YQ9kV6YKG1F4vAP74812jZLJ",
  "key4": "3DVPpXNbFainFTUzQhtUxTscqEcJEsWJzh4pyp1yyNv1Hno1YBrzNbGgTfx8Jaq2xgdaPPCTU1vSqUhjNbUs7spV",
  "key5": "4gSF11H21DvYDkYKWsFW3R18Gw5Df6G5SYXt6GFNLojj8d1zjf5H23qeztM6qiaBxZS1BiQVAZfLVBg7WM8aDHjZ",
  "key6": "WDAb3WR7T11o9qPRntof9MfccpyNw5H7oyNg4Lc4t6dK2AMzxPMjJzD8Bry8GxNXEM2vx5rRf48QBMrwYppopgF",
  "key7": "6jN6PeNYGiuoV87h7hFAJLw2QrHG7jCXvuk1oWvywJB3J396cQUn2TE3SireRaQqcBiBJhswHX6Mm7or4L3Wvei",
  "key8": "2c4utDpAJt6KC1P4UYt4G97418aZrf1NW7eh7cHT6LG9NR7iab4mKTA8v1fD26TjxvpQpQ45UbC3gQM1ANJMJoCx",
  "key9": "4fq4B6MqeXHqiU4NqZbSKristaFGny7GjfJYpRsYtN4Uujmh8kcaC72pxEHFAejGAucVQNK67GxRa3z4Wfrxc6yV",
  "key10": "25uR4YU77GR8n7vgGNtGehhNzgtGRtk5KLNN5VzFF9vCKT75HdHEB3Chmb2e4FpzByCVtzVJyxaXVkHzi5QqqpTs",
  "key11": "QN53Dwhjgn3PEGDq3bH1ZkPDqXsaFu4pX2pPH85cgJJV7vscDFu1zutYZqVWEh8P9tNETUJRgtAr9Tkem9QmTPw",
  "key12": "4LfQaK4CYVtweZqcEB7wysRK1opdVMLWiE1i5XKRXWR3LfGU1LHPtLkwnnWMdbabwqwK1GoQF5PBLUui4aNadcEi",
  "key13": "8U9h8Xbczw44Mup1jM8KLW1BqwjKCvxo4YAQr3evz2cbP1BLbM4aZt9R4tvrW9jUJTH37pzPFeoxBEQaqxn7QYe",
  "key14": "4Q8HKzjMAA3H6i9m2QV4TZ2unDiWrQsk7xNPmxmLw5U2WJeBnJpjGHgQ57cDLvGm8qFBeZY2zNegz6sRBobvPABZ",
  "key15": "4X6hy8RTaUo3iTSLsdLRSeXg6uq7bfNNaHctW5yaaTiAh5YpKNLqo6p3aRy9TJLuggqRWKKnq5inwu1rXGDCG3UN",
  "key16": "25M45L66YQffAZwM4XQFxU6rMRAURSRJirCCA3gCRRU83717Q5E6rYXukb5CYJBvizHXUNHFXZjK85Vy3wDgtBqN",
  "key17": "2x1wsXmueBkqPmnYYQ64yYqZkUcbChUC7eRUxTfsPR2qtjv4wpEu68cueXGQaHDmEAW7AoKQGcdXn5rHTB8cVbb2",
  "key18": "3gHkggAfyrVi6wfRQwZp5XfxCkTvVSUqQTF6KR2PH9GfRRcjDubs21o9UXJiYGx5he8Y9BH1KGp38wGSeFTMHC52",
  "key19": "2uoRkBLkzBg4nhpQpZDxXhrjwXK1mq9WVNTWsZBg84fw2f8PSTfgH5rJi9qmu2uRzHR4THpsGjDosizZnHR7BNrm",
  "key20": "4TK37wEi5BxhS8AuayfpUY12TxQdpUb9AXUf2P8qYRZtinQES21V7mPgfstzngabhyyhhvrdDWjYkU4fzFuECeLq",
  "key21": "2YZhpERMNGCQg3XjX65VWNXSG5g5neYoykmYwYSG8qg8Kvmw4UR4sZt4SsLjPSD74DEB4XoKQnFW86EDNJwtoMmL",
  "key22": "4FcNbcQ5CpDRCUj6vA7FrkofUtojg8rfsTaZtvH44zCsqaHCyUferiwL9NfhvtscR6d8ChuM6Ed4kexUaxSmEb57",
  "key23": "5aaDdqEYcddJS1co6oeDQsNaZYUs1pWse33FA424r2pjcKUK4mHnWrtDQSJgupjHv2fdfdipF9vipurVDcUGPRxa",
  "key24": "29PcBWUrUpTnyrFAWuPpgQW8JLbngWp9VFEjfQi4CJG5WC5YHKZazQiGWLRvXWiMxWsEX1awUK36DeUub6CuBNZ5",
  "key25": "Dh9BuXt5KU8Wbr5RBbewakvdXYtSJm65xRfKA8ZBUJaM3NaE1RSNQvKKzxmtiq8xeXCXr1NrSybGVKh3hgzz47h",
  "key26": "4NEt3JYeuovLxVuEGU5PxrSVf18ykGV5izAPqtVq8viRizQGG5448LCAT32hBsPmzT3YgWD3jiNAyH4oYJgpQiAH",
  "key27": "U8wtUUxCRANZPiXdmgAQPSgppTPdgqNFtw8MZraQgjQWxcZGdnpoJV4iS9Rkd11CVBSoRksbzY4StR5xz81UEtT",
  "key28": "xwntnskR5dnAH2MJUQ61YjvmpEXYuVJC4rq3R9MmfjeFELpTy29HDouVhofJtn8WyXXNhtGSUn6xnzb3Kf1Hq9B",
  "key29": "2axf54MRp5fyc3DZk6xqD8kLTKpuHxdn9kdSfD4ji9BjCFFJ35hiCoZD7ZmzGkZ1UmVcn18s1gmwrjH8r7Nb8fVd",
  "key30": "5WZKiRPYT8ZHjSwMR4FmZigaSzY4kEb4vs9SKyDtDK7EzaF9oNWCznsswnYZBeJu6JwXg4NsYc4tsTEXQD72p9bW",
  "key31": "2bLZQSUp6HVQ9Ez6XvmgQBCANf4twFHtXSy2SmAvTMd4S8e3n12CFYVZ3a4x3oZYayW4QQkbbG7Cg7UNgHpiBSS1",
  "key32": "2k4RVfS5eDHHYsUYCh2YAL7WZXeSwYPUsm2Xx39jDf28QhtxVgaHxjMR9duNY2VqAfVAz3pz7xRQBMAm3ugWfrrx",
  "key33": "3nRWTW2JAD1MQE3vp5okvdowU8vuFZyvbFwDiE95oSHqMPKkybd92ZCr1DbVUJYnRciidum3aKpkitBxQctRi58g",
  "key34": "3UT1jSdJ5usXRR55QyFE3TUtjYcRr1gTq91Cx3dN9G64Rxxk9HFrbo8Uv7m2wqy2htNu6mwgo4giheAACSstpcaM",
  "key35": "5bG5Cc6ZUNNSVbZHfe7rdmjBpDxe473HsZ1n3UQtmET2YuzVbs4fqxoZzW8jqNz3TZ54uxNwvfLyuA9QNVKmVU9L",
  "key36": "44WcxAuexrMqoQh5AP4gLf6yYNhvH3Q6z63UawcVKkXQjxumKgmoh9duhdyQca7VgvHaioaa1Gce8pNV3JoQGQgy",
  "key37": "3dNnb7LFG6YUsKJkyxjNvg8bsivBjqaZahveiRSFa87hqJw6e25iozSLvfKDTbCzgmzMjpvRkq59s774cCFyHgZt"
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
