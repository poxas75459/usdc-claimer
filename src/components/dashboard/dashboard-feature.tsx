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
    "5GdQ7YkkWyYiNoz3qMRfLcY3Fn5Rj7PGfA8v11UveFxwgmUXjB4Ar9xGVrYHA5icVDpPUWbtXQpyPuLeTFpgnTmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dz5oXCZngY9t7Pqjab5VvRD6xAuc11YatUbDgAxGfmsa9cx6s4JGVDBNSPjbDUrKr1vLCG69kKTASiszJwHov5L",
  "key1": "3UbbTC4GUkJ42KhB2SVPUkNPguwSraYymE615oiERq1jML5veqqKiWYxTPANVTDqfxMfKaoiSnpUNQG4tXgMBb35",
  "key2": "31ZBsDNHFV9thKGhTqqbN6GBx4NHcS36ghRhyMjaoijTBjYhpq8rt1QembSdidF3cwNwboTfUYnxNWDRafb1HweP",
  "key3": "a6nTCCNSgzhtqxwfqyfSHT1PYGAf7r9LZVGC58DUVMvLG8WzspVmWVRg1xKC6DbCXXQv8dBcuM6cgNSpSNYKavb",
  "key4": "5q98yJpyNmwzChojiHDs5Jq1yFSQUu6pP41GCsBJ4Eawme3kaP3tN1tPquXhFJgGyZqt7ngnG8VfxBCCKFqGWxMR",
  "key5": "5en9G2mnRqvBJ9cu6uK8u8F28CUJv9ZRYd3SjHQvjHZ6zKMFJrickKAkF6bycwedBcPwVn2ZHictDXzv8tYHQwXS",
  "key6": "uX8DYo5wHH7J59EM4KREtXsygkPgSmcD5EPd1gQ1Nc2dDEJCuk5gbarGac8jLYXPqA8awCWFbywretHPAkhCb7b",
  "key7": "4MZCK4CY5raWKFgCq7fmorGZBSXeTaFvT2DBGsotFirKyB5mkUAX4zpd3QdUhuokKihjWohwtLg5v1pVA5Z9zwgL",
  "key8": "3FXk2eKuz5cGUdJgfXNyFBsGUHdBmzKwek5RKipAL8zQ5FyQTz8JpGtzgsci2xZvAp8ntUaYQGKc8gD64a2iz15o",
  "key9": "5jMMJfCLgfuZs5iUFWv5Gbphfm7tgN7kzRpyt1cyWLpGqz28oHpsmEt2TGEAFZnKwH8PUvSYyhcdupSG2LYedwYX",
  "key10": "5sbCYZbJTLrzgmKuFsoGVGxDNDccddjqhWEem4h7ftZiMdYF3hiXDwYuogSdtVrbm1Tvpd7pP85kMU5F4Wm92LNi",
  "key11": "5fNWy5kukugZXo7V4jfGqyVMpsDdeaUiDwa2tQbEZ4xD1BD31vXQhshNLisKDQivVYXyPJr2FUbJN8ZpzMHVnieX",
  "key12": "xgxtQA7L22yHzLMAzuNUJ9o6MAJqThK8shS4D38TtYxVkgB6EUtr2788oJB7Pw5BXoVzePsTycaeH6vcTV4e1jS",
  "key13": "3DytXFeSbSEfGffRU7BCorFWQZ3Dmti7ZcCw57njakBdU8xeNthHPPguGsVzVutKbFML2uAhUQonLpaWLYkodwn9",
  "key14": "Tqqz8HpA76KG8hbCz29D5bAfrRBwbp3gBsXyHCWST7gNZbRXxUof344vtRUPHAtGgWMytCgPxLnGTtCi86C4hzj",
  "key15": "3oum3o8Dx2nHoPgcSjQKxpuVbkAYaeJA6tXzRw9E3hXTB86vbsq1CBfXhdSRxWDQqmni72HC1EAJvb5TNf8iUmFA",
  "key16": "3hm8oRiRiqyL2kG136vhBzHDK48ygxSJUfsL6QUHEUeLw6dhC928sUHQbWnXGYdVahD3wj4URaUMDScG9DZty25y",
  "key17": "Pc4Vj1fvrdYFjTBjyELcsFaBfvge7fWgLiNC9b4nmeVZ5imrnzejhhf4mXViM6tooY6z3tZd3cv4Jxxnyx6JugE",
  "key18": "2MXK8WFXy1z8RsfnPbNdwqWuoFNxmSDEXBqkdBraFR1mR7sJu12xdwAaMQ85xyXNveLXsPwemN4yR3GYFE96jVHW",
  "key19": "3K4b3XAiFQcXmHk3MKaKhq775rgBgbrEuqvkmjvQjoRR878mQogyWTtCGHNhE2D8r1gfSheXwvrmmAyeU9eqK1PF",
  "key20": "3EqBgjL2xoJvZVhXWPgNJNXqfYAYP3iBbeTzr6VeyHhaeoTqhtFwRKS7RtVkP7SCsgqNwCRhm1hXgUF6hxySbgU6",
  "key21": "2Ku8SuNTdUX7MLQKEpH4JfhhStf6eJTHQ4xGDRjSkWEckpp8PR4vZaHaknYK9AcKapbGdjyLVS1TvjZaecnL7tWs",
  "key22": "61UFtupnzq8jVTXqgFVmtuBCNwEShGMzYhk9EdG5r6eJtuJgXWTGLyG76AJhTBf3eXU2p3VRrohnpV5qAvHCmJBX",
  "key23": "3e7214KXwCyfWcSA8i43yZjxVqaZMAjbaTcJNFW5hupenWJD2XAL8F8c79fGgBs7pcgs5uDFqojy4iV6eyDJYk5X",
  "key24": "4rqRSXYAavWw57xEV6Powa8B6zZBzPdip1WcXnG3ycXoDJ8YCr666ixkvXMNzZr5j94ckKNkTVPPTHpLPeS1KeBU",
  "key25": "48HxKrHtB5U4dKhZ4783T76YeWtu9dncjvewEqCz4w9CjAhRk4sEfAZvtnAGXVoRcSM5KmZJ52x52cAUmHNqyKBV",
  "key26": "5cBkCXd88dAWdQYtQx6eK87aW4sztJnBEyz62fYik7LYLBXHJAhUxyPehs745Hm5DY2uh2Q4E3tG5h8Fea6R3rQn",
  "key27": "1yqL8hsLRcwHQuaUg3PfQyHXj9ukjqnHvaFu4UAD3SeQ1s14yQJew75BJF4AJMrDxuo5wE78bjzjhWgWeXquiiD",
  "key28": "5ZqRfiUdjeciQsmS9dYSt7zu4ZPNrmmVxdEKzsAaVKqNmZz69LA3qoFqY722enQhuMco5vJUkfnd61tyK36JXdNV",
  "key29": "51sBNeumBhP2PdL1MR8gtRRKQzc9goyd3R6cwQRDRGYj5VM2nMuHErnjB5qAo5EAsuND2kk4jRkTNT62y5DRtZSb",
  "key30": "2E7umtqigqzYX2zvecAgnw4QogbJgtnHLPmAM5mAjvuSEm9GJpy3h5BG4dx5vPxkyGHiopyvQmSyWPg8s5Lzo1t6",
  "key31": "5H5RpyDyaJ6LwMkgbji3RJK6jDLmGyTFUqhvaFS1zAD4E9qB5vcMQAhNkmd1NXHoUFT3UckgssrfDVjFVDJr77ZM",
  "key32": "4HacwHE1uEGMV8CQP4MCA4WRkkraGGkwCCuL33orcNRHcz8aE1AZ5oRakX5iTL1dvKMBdhyRmaF93CFSN6aN6L9H",
  "key33": "48FcAK91srAHBVZFUH5kijNFt3adZcNsmqBiAwTG6RtPPcQWzfmkGqmXGDxqCgS8pERemf4HdhAroq3NVGUR8nVt",
  "key34": "3mKvdocCbBgKsJALYMHAoGyvmNupbGXtkQZ7mo8FLqpsh91EfFcku5RpAENbhH4PfuNkyy2LYH3edeYmZCxHgQby",
  "key35": "q3ZmmqUJX6Rsxm53N4hAZmduwTi2Z5oHZHivxRnAoW7TUJDXumJCQDWLTFAmC1g5EsZLxB6KnRGzDM4cTKEwtXx",
  "key36": "2fTJBV1q8YDseB2AcVUjoHJC72ytpbjZBgDtgPUDmBi7R6cFXfNhK5b5h7VcwX9jC1EPmEWFT7gUbDUE7JKc5quQ",
  "key37": "3CvcKrs7YR38DRw9zkwq1HeQPzS5cTdJMNuygE195BayWVnPayFYpkNQNABKaMREguCfndGyN2hb9QQcyvFQGbiF",
  "key38": "2jszqQDHdmr3DmkvMqrR8uPMPefU8quUrDRJYHw2oekjs9cCNQVaJgKHF8FWkk7DsePKkq7AHjNE4f6ayTzWBWEx",
  "key39": "4SPC9H6iusdzE4ZyeMmNx19CiBZ7XnQgT2VPN4JeTX5jTtzSrQhUMjpkWtvDFEu8ocnEpYvCJcd4ykGGo499PVHS"
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
