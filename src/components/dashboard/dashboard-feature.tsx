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
    "22ggJGdXxUmA77uD3Dci6c6hoxmRpUJfL3zw4JbENkHtQ47792gMXg3riMvTitJFjjmKfGSy5w59kA4KMV2ZsmKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVLexurTD6WtKybLMuSLF55e93cnTEKK8YUBgEqebe5NcQAmoXBxuek4pQ3fFYDhXbCXBS6LsCXaWb7y5YAuaWP",
  "key1": "25upSUgb1WF4hJqZVhueejJeiCbNViASLkT5rCzyg7Yw6mZKHB2af9qxBNsJ6JZ2TPaLugaqfGaJ7jsuhmChh4Yu",
  "key2": "2u9DECnPXp1Eo8odpUzw84iBNZL6w9s4oChGc4mxxdVpTMTfV3iTrYCLwjNfJYjkxcYApmfPD14mrtqkohW9qkrG",
  "key3": "4wRri8QU2MVaKXeNek8roKNzyk9AADCUF7Y543C9mWCPZJevDNNKeW7gsXSEzXKsLBK5mhiWePiuuGpdukNvHew3",
  "key4": "3uizJpLsgoQo6YqK4WmTQYXqgSQjCvQmn4x8KKTo7veLtdgxUXNn14htgNzEvi3Q3kwX3FviaAPcEy5otdnevsQa",
  "key5": "4PHLgVzL5usn5p6cyxbvAq5Ccvf9o1LWBAgMdry8rgtjvepqeNbAMcrqdm2zT3fKrNU7czyfeFt9KwwLNqLXaNR9",
  "key6": "Lp2xSZjudAEvjSHm3fxbZDzSqWdY7uERD1p5kiFdCnf464EXv5qNewk1ue7vWQkLBo3e5Cr5n8WK3SfgW7a3M4S",
  "key7": "61YaQTSDzjbqGxv8NepV1Wc2aCxzKHdze7yq8afExaUbdqfe1TUjLGxLypu8XZD6QnKxVC7yc1ixZrxdrDPkhq1J",
  "key8": "4HtTsZjCgod6pAKJN6ByBnn8kvP936sdi4aTPpZLitQXyhpz373M2ext6ie3i4xLmJx3bouqG33hejqKAhs3qWxE",
  "key9": "2UT6dQhzVjs2Uh2mYZ7hWcrPtSjkJ69FH5nqHPyyfxH9fryiA58EnKXxoA8gD832rPzajt3yCZk8YoaVgjtJxRvz",
  "key10": "5X9xJygVfLTYAzo4MFtotRYu9sJp39VKDYGfphH9a6kiLznSm2AXUfTUNgRD3vjufdXNu9zJ1KAqTPvYrtGQjcwM",
  "key11": "4LVqWvjGmwr2dcAERMSyaphqt72pJ1pp4VhDwmn4deMdubJbGMkqiV2kbcUTvsYAYxfCCSp51yBnFrLRy8QJtaGR",
  "key12": "53SDB5K8E77AmzZnf6NYuhgZK3wnbWR7kqHb7f8TUXwkcwivJdHKd6QkpE22xuyW3jMAQCbCzTZyWYNoEucLHQ6h",
  "key13": "3MoHVt9RDDwJXhmm9Er1YBjoGsVLxD81mVqQVk89kvLrLTfYhX2QZRyuChA1BdG7nUp56jVsZ1gsb2MPxQtHUmqW",
  "key14": "2Fyg86rUkUVchAgZ9hhsDGMhHttaTctyJZ41Z8wJmXnYv3QmZ2ELeq7UXNjqRfKhs7avn1sHnvd5QjXxfzBXSPNa",
  "key15": "4yU6oLCi4EvWk71JRe78zNVB59TnaNTjS6ATHeTWbq4u1Wzt1p6iXaFNbwxzpDU3VQUhjNYhoRj84sA6TVhCkGDK",
  "key16": "rC9jYLHG7Gdyr2zYJ6iHxJh9cm3e8jfsCuZZ7LhjoYyzMSZDZFy8dhsuc4Q2YoZyD5Ancw8sFuqfANcEZKRU7Qy",
  "key17": "3dsT7WmH5Ykc64JPA1p7TKHMsuk3LzNaAavEPDxy2yVEGqPcusmGjD34s66PpoSa1Xbj9eXHtG3cyyfhAQWHAjcj",
  "key18": "5BYe3d8Xn9JTu4bp94o54Xit4ndoLH1ktKofQqGxHZTiwfkKx9x5TnGoEedyM5q4MB4JNXyLsCPHTC8crkSKQvgx",
  "key19": "2bg3oZ1ZjrkBGBA8qmcLvhk1AyuXsq5pr8a7ZQJ5hwMMiW37937YH3KacUx4XV7Vzh9FiJ5oNc1cU6mqxJdpLY5R",
  "key20": "h4sxmDYvkrRbgs5XMx7u7hEMxUdcWChj1mWcZohA6BYLfnyy8YHjekJ2WiHnqRhKnJbtiwh14Uy4AahXQKwdxdf",
  "key21": "2SsprEqPjYKGabScnEdXvGCcajZRkv2JnrLLbSC9kAScRike2rpXSX7AK2Xge7wjuQmuwBdHSvNXA9HfwEyjFvs6",
  "key22": "Fvi4KjXyhfrQGBUySwBn4CKrBE6PnfHPUZmmNnWmiS4gs1drkcDZo33tsTKPXVypKC5AebKCxwmY9PK3izpkuZ9",
  "key23": "4BzkoG9fkMYjjizDticyGxnKHWdqeLpZVWPhQCm3S3ZzMr6uqCpRNUcwGBgA45eSA3QL7TXF6Fq3g29t6XJoJn37",
  "key24": "2VXbaRSj28Jf1P9R21VSKzoFAHGvP3cdzH2ZaMi8MZvp8rKjvs3zax7XHYxz384s4VDJPymrmriE6deyken3MpKj",
  "key25": "52zxNFYcugdryobh98A3Dp6vsSYfxQrjrAiVfHSSvwMaphgMeALYDeXXTq2Z7Cc2YbbbVzNZbNT5Gju2DFZAmBmb",
  "key26": "4bwEuMgRTWgiESiXhVdUFkyxSZmTt5rQUFWm6W4dZZiTtBP6CWN1WSj4HJaNZxT4F4HstKqZpCyZaWogG4Afu8i7",
  "key27": "5u5Dv6Cm25MvqDfCsoaq4i3HwsKqAgwK4Cw2UfMJh5bNaRALChWjvf7SQpJvFFSfKmcF9goCf5WxFNytAHQoYbsg",
  "key28": "B3U6UVoNNKoZthY6CzUpd2YAccQmbjqZVQzmX2oPASAACrLAeSxfQWDRhR6LiGvf6C87WMSbz44GiiCT3ryxbNk",
  "key29": "3zPcGgDdMLmTyxeJgph8HASoiL8oKSfUgmBvb2hvhtbcFdCi6L6Zs9qV3bcR97j3pp2Cg4Y7oQcGBbdnK3zDgN49",
  "key30": "3xCoVpGXRdy6WJtrs5QokcMy8t1sPqg4iewdPuig4pGyvFFhEjwdkPnt5Tw28mKi3t5Gse5zFUc1DnGdb5G4h1f4",
  "key31": "4tpLxPSD3JPztKZBT2osEo7TABXmWNKK5FBQdSmfbo7b9gYAJ5nYtsVfisDbhuTAXebTY4ghD2u2PLAKmhawdVGL",
  "key32": "RyMNacPjCU5R64YgM17CXno2xNq8JDU1bXj56hjxLrMDSmKvCiPy8EY9YpesVGyi64W3fyx4WPCNoMeJtDw6K4N",
  "key33": "3ExfRc53sx8AyeeB9xq4USkGy38pbZo7KgyVEuYPkcGiG5s8JWZq3LXVZfQqCgAuQogxWvXbNKyCCT5cGrvmw97h",
  "key34": "53T5oG1sM3KwrpSKDXX17kzqSrHrXQFS5gP6vmb62jfYweKkT8F1VcCrK3JnAWQoG9LTWLGv2SdMP1Dc2Li6463h",
  "key35": "5pqE5wDzEatLZDBhfVqvVXnLefKJmbKjBEgkNnnroD9fvR9AJUm2zT4x3jMsKx8VDJuahqVupkVQhVpRq2TRFA95",
  "key36": "3Huf7GRCLCrHNS7ekURVRJVbtAXMirxTqjf3myA2G1amQdzfNcxpNt2WovoZ3pMUbPo2TxSRVa8jvdjnavhD8cNh",
  "key37": "5mXtd1gsVAEZVdYDW5Tjdfqus7xNTDZ54U9WGxTpoKWTsjjk3aY8y4gjob8yquRnzqViWCsjQp1FNiAiW2MyghvP",
  "key38": "3jiHaTvuA6SPndLdvsTyR4EPWBKmuy1pvRLbAjLNR5GFNEr2PMbZiMjVYomibRVnwYFh692pDYFDTJPeJmPXELzh",
  "key39": "LQVMxBmnQ4zbcCqRTTGLq1UPvibZyPCcHHifKYJVNMzi17HPw2TyPAkP1zcfuzE8KH9kXN5wMg9EUnsi8pmivve",
  "key40": "3UM56ve3mLuE5FfpQnDs5Y7axeBMzeuxhuJ6D14VVSvnydsuFzjgQZrhyP6xa7kEcsH1aqDUeYYUnWbXnCJUpkTb",
  "key41": "2vFhMAMTbugkCXSmvmVUDwcUxCPYnhEG9PoxMhQx6GitJR9PTnziyoPNxGritEne1vC3AXA3yBx3vN5N8uCHczRt",
  "key42": "5DBxDGK8Rs57pp9Db4dF55hDQGtjcTsfmruWeaSh9Mr4znbeFGie6CU2mFysf1XW7QZ5c3XFxmMjRcpPM2ZaZ17p"
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
