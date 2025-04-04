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
    "3tCQehVH1VP6V5UfvBSUfcRxW6CbmKHDbmbVBHYrVBTPtffYzhRGXMvkATdGhSjvxEVrKGZsaKaMtwNxFqhHh9Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWkNE2cGCZWHB66mPANML2o5f4hkrLneVDC6FgWBmKynU6WgoQXjgTbLJnt7ev1tSJWSXLZBsFHdmRBTxLbSDmJ",
  "key1": "5BXrwDFLy82AgVSZHys4j1CLHZUimgpu1uN28hRKNamtHj9HVHr3bDXqrJznoi2awfvGN5EPbbqQjcnzPdsBk3FY",
  "key2": "X5kmKLfgLdeDiJxyZMqx38XJusxfRf4eS9CDKVH2jjUGmoqndVSr5jTpvKXvgS8zjksJqwz4cd6fJCDATX2wgWE",
  "key3": "4wGU4bfzhbz9zmF5ZcsDrCdEXhigEM2tcnYyirYWT3YpUaEWAW2WNxPu3BxtChUCpAdrdJP5VaEgCX3UD4EQCZ2Y",
  "key4": "4XFHkX3pjYSC7xj8Qc9G84CHaUjwx1zXkZtqvP6Lzp24w28FpYX8tozyRiesrepvymkEAoKohAMEAsuy4v8UXca7",
  "key5": "GdhCFwAS4cMWuUck2zoZrq3A17gewg2xbM38vknZw5NLkLGe4jeUotcJhXi31Md1rJ5FmrhASpuAJjZWd6iHmZq",
  "key6": "3wS13QSsrTf6u78WTwrGfteS2yZCNV6AphT9igcr7mRywEyuG5hbx8QfpZGZcy6pF6xFUvoEChBjAMkrN6USKBfA",
  "key7": "XjEs7YozNUrm9wWffPUy2iW1GJsT9zWrBeY2Mu1aDRFXFzzL5yvDtZpdPB1VpWUYkeaJPkdvmsuHASBcodokVtW",
  "key8": "66Tn9ueihAq3eBkqeGYTkNDntAtuWiDxmVCWKtzBzq94ysbCaiT9QekfDD9Rn4VK4X1ySTq3EiAAAiankxbsbBLY",
  "key9": "2iJgvvrqBtk61ZgPzZg5z8VZZzf2a5J8ozkvQAXDudQrfM61cAgK3uhWZ5nV32Djhpq1fLWnQ3nogF9rwLrHa66d",
  "key10": "4CEAUFnmc7CDmpjMqT3GofE27EqYZbr3QCpQHxgoJYyRVLPPoWgnUw8NjBUEk5MDZGuTWWHxr3HvE6mxqu8NNGx7",
  "key11": "2J7Gomt4jccHjXzXDXBcYoPZ4PEicMDep9AAADFpvAoegQC9eSyHY7MQwXFoC7ZMnCf1LvyhAs4K8nhc8WUoLWfw",
  "key12": "2FWRpcG5fVi1MWmBWiXnUYTxWHipwkz3hEg19sJuSfeyvLjcq5x1ovHFh6WjvTKpQWeCjzfyoxCHb8j6f7w6uiy5",
  "key13": "3otMrjmkHgUhdpJdcXUdTEkQZnyUJ6cQ8E817G774qpiPPJdVbj6uHdjpaUobmph9gZP2jLQj7kq4RF5cLHy7p6V",
  "key14": "qBPFUPZ4kkAVsh9vv7nmoK9sRGSnA7KSRYEkuY3GBVAccKKpFGcLa1WBqgFkdXm7kZWSnZMpqhs2zAwuKWA4oQ7",
  "key15": "2RgZiAmRGz49gzGNpC5wh78YRYhmnHJ8soTWMgYMCW727HCBDxxeSubFvDNcxiKAxDWAAUuJn72zE3j8nnfRNYw8",
  "key16": "2RbSuVeX5boAfHESpGkndBrSb1n9KLqrAGhm3BJXFFadsWyydQ4dNvR5fJR9D5BpNe6N61UpdFyrENUURyWyeVqr",
  "key17": "2BeZ1KSjt2iGHv4Y7dqhZft63sUym4WvxfE1xy746uZFEw7RsvGnAwcAvCbjK78bCDusqqfkQFiQqLuzF9jsqzPF",
  "key18": "4GtEZ1H7mtgNEtsubT9f8CRGEKFjEADY8gqLBTm8w8SDUv6jNDboTY4TuviD5Nz1fcEkdVST2MqggYBvFsUj79QY",
  "key19": "3AxvKckaVpqTzRuqXX6fY7JPCtjGRwqipEwieo6AMoVJH8aa4dqeFY1vqAxXjhGgfQHvxVcrQrAuDoPDqGz1KgfV",
  "key20": "5FgyphtQijGJwMP1cLC9Bn183S6dg4CPSjazWHnzGHxFCDyE4GxP7Fi7AjDAwkjjZbaDVZ8JLsNg96yEwNj4Y3eX",
  "key21": "2jCvZHZMvrWp8Q83pbDzD5uRXFCXsb9mveSodFHTx7SnY99A1dkCcGm8Z83UUh1yhKcDyKLGC1Lu4LenRpjCtrYz",
  "key22": "31imEjGQ8d1bhXfmnBZbunJvwpp3hRFjk9dUxYe7ys8CcPbYKEgoJtRJ3mFh7Dmey5ccsQHmbgZFXBqqgqXxK24b",
  "key23": "3sNx9VRtY1YCnf3xAKKGLKQxe5W7CD1hSqsFxxk1ji6rQQ9yiX5VduFvDBNjBACyiQWE7YMvApuB9SvGKex4f2AX",
  "key24": "3qsXPk2qLBQsgbRW6xVY5aM6Pctp5JRdeQ4av4qhLLDsoiuFEzPsXc2ePumFwVxncKuQxxUtmsrqsBhu4H4gxvp6",
  "key25": "4Bu9D1HPzKo4RHwmgid22gpexgxUpPgFKTABcK63VS51tGY7tymKuQzWi7sX2EbLjec8sxRw7mbTnbExqtYSKEuN",
  "key26": "44wpJdAuvEWBG311f4xeYRqTGAKTny1Lv2Vz8ZmWwJWR7rhN6toVc46Lp2ZhZyyDka6QzmzBiCCJuggJL6A3UsR1",
  "key27": "4wNP1NaqFrKGaAqqiizpiFUgzAJTvu75Sn6megWJX5VgYYC5paZ13QWg3sTtk6nogazaCjERqfHMxMBQU4dpMyMH",
  "key28": "3mh7esdoFATgWYiBdCrEGgTbhzpcmoSfYB93cC8i6oa4hL3qRXMQa4ygjoqk5XLJ82YaHoUmpa6mXtbgDgcLxxeC",
  "key29": "2G48xVwCtuVKHPHxmSSFC8wBPgRM8CdwrUCirAZdagxPPp6t9kb39hqvn5TRQCCP7DBE8VVXxcq71RVEdb1NsuCd",
  "key30": "5zwiCHvmy3qqzsnRjJXQDGtfhAGvrKiV3nKpBv5psAEjoJ2H7W5nC9zYnrirW8n9w7fjxo8YhDtuWyCBCgfSok2y",
  "key31": "Y8TrSrzy7s2417VLhHrJVQBZjctYFYzoJdi8h4ymCwHoWemRpfDTo1ZX3ztZhjDR5wrs49Jge1TKGm7DQFNrKgh",
  "key32": "vmMtGYnEbgwkJcG8QEFrJZuaZX4KNGNiajERogLDthcyE7SzbVQHDnBG4tnAz23pXFPSSQyuhwEVFMi5UbYVS6U",
  "key33": "3c9fvaFd3YZp2sLgwTF8F4bsPke6HBkZay53bs5a7jR9YvV1S8zKJJmuWfH1Ye6LXgUxy2SBXZHY2sXDSyD3BX2X",
  "key34": "59xYi2pSgQ5sUmq98Yc4STocPGb4A8PbkkGE9qkLTd1TaX86EuvidbjBgAjk6Y4Mb54k5fTNUyS71g7AkXHXFzr2",
  "key35": "4DbLWbZd2718j2PwEXKBaN9CzBGho2XB6nj12tR1b2c82mkt1xWRAZKNoeLVpSk3ZLes4VQDvQoeLSq5ia6wLV7G",
  "key36": "2sPZvT91WS1k8mPWvg3tZauKYed6RddqbuAyKq2R1whCRUyHVdyTewa21wjZLxiq5MdVdh67LGpZyZYbAWUZNoEJ",
  "key37": "5SfgY4cqBGGTzuPfTEcYKVRAsAaHU6igSH9J8rvPDERoUwM9tUc3JUXSHpP2GPpdpTzR2khoyHSWkXEnbPycvCvr",
  "key38": "3xJgx4JtBpkYKQr1uqSyhzKDQNp9dEX8RBaQYGUE3Bozz4192c1vqh1xj9RsTPJNA5C9YvemZzDE9wRp92DXSxAS",
  "key39": "5qWUsWikA3FL4MYQNobzNoFRtLVnyhJnoELXaB9VYWGhoQZ9FM94zZ8ZB2pM7NF7gB8xChCpdGARLnSChjGsXoYU",
  "key40": "3UYkrqQrb2FkZerXkNCFv1XQTLa6T6UapgCz9KmasaxEkteFUavi9B1xjycmAd3bM7ED9qCh2hCSf7Q8WvCzW2DF",
  "key41": "xYGGA3qMG7Pp5QmnxHsrEscQGtDWNenXgvEyvRmCtUQn2rfVCZh9gyTy4BmEnWpMZXyH6BaGBYRr8cBJM76AUJQ",
  "key42": "9JrhYcs8wzynqcp2bPCLanmAHUD4ScGXGuNsQtHpChVyfmXZxyRchPb2P88tXjokHB6cg8eAeqwJCDRtiX7d37r",
  "key43": "3BMhSPDK3v6oHbmBsyiweWpxnzFEXAWz76Aai1WSkrj8Qwef8T8u9eLQn6AK2u5YgmB9V81piNkw63dsAgkfcWep",
  "key44": "5wnKNXQdMLKfza1ZcGdjJv1wkFSoe4r2gQsU9EZ19q7KrDvtTxTGuidcDBa36jVytXXz53yUVw5xwYYbwCYZ7FzW",
  "key45": "5ZYEuYhXzjcDpaMZ9K7xk3idLFMLdeNieVqXsm8vWCnfjJHkxrZLKK29sJVp9p9zohqUmAdfwrsXXmS4P5aw748Q",
  "key46": "4fNkWDbSpMaQDNRyjmdwi7eD3hVA9ZNGRH7WCx9idhR7Jt5yMYwXVeewjYAADsiU2REVpoZz6E6AJXrAVznQpd5u"
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
