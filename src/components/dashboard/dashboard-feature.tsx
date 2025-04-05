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
    "4M11kEN5FoFDwdkfBquCTyFcsoj1sUTNJvwNhBzWSG5ZimjHKJsczUUhosh7cbai9RGYLdkKWmc4rgRE9RZyVxmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zUMjHMePZhuDdtZvn6JP3jmA85LJLkuQQ7Hf7N6KwXWLhWCjnDJxB2oHUmcabgHxfHh1jhDWNcoNdoQhDVSfvM",
  "key1": "L4oWWoyXgfKaqrUDVf43j8EfHYKVCductDgahvvDL5by9arLyo5oFu2YhYp8otSpYT7ep3cczRUvcP8KJLZtCgj",
  "key2": "5dgFPMUyxm7VyuYnv6jLJQ6e6Z67EViAW7v3Pmi7dc6wdAkTjW1bCzk6uwNXhoRPz2qCCvbWDyHqtcweb3GrdNAB",
  "key3": "3t6Q4Jw9sKtgGhwrzMv6qGFLkfNguURNviftZuSTJguC9cr4tuJDK4NpUG3maC8nDCMfQ4t8Q7EzrLttTLHJGxRU",
  "key4": "3QSS1P16grFNoo1FjnsvmMte2VPqCDGNFrc4Dq8C977Za2Zk9jh8myCbkqpXAFwYDmLZhC7gbrkXxfNfHmuAdrg",
  "key5": "MuH7PQ8PbaUGVBM59AtjE9udHphKxc2nzbrwDKJ7qvewoR13qnuaUDUUHYUy3f2EFVyrGMTKBFF1prbAmxxXZuf",
  "key6": "4vAg3otNwPovwfm9rYP7rBi7fXogUf2Mw1BHaFY4deP9VrAWSRkTtUznmbEELzXhkbL1bnpbfS2c4gHXpCbUYrUg",
  "key7": "2pQVfLNtSNVAqtrzy3DUepLe1fGN6bGx6dB9U4fFZSiz3Nq5rprg4HPAPjjNHdaaaPGtXzEb1jCypoTbyhDzWK19",
  "key8": "5PMzSRUgEnPjcW6okXqKwdK4Z8wSUwDdcAMt27oZYrcTrew5HRz5ztuwsfgsw7D9ECfAroSz8kEC8cHhKQbEW5u",
  "key9": "5mMRBzEiJAmnav4CCMh3uqyZSkYp3HNyNJEiG1cAiiJWkvq773Q1j3rwD39QYWeMjgKaRoEK6wwWBMq48F9KFeR2",
  "key10": "ydU6kfUCJ3fMLDG4WZp6q2eZv4CPcCbyehi5Hznf67EpSL6wngQFWYRikeTPDdC9vsUgyH6xTUKCSPyqh1qzL6A",
  "key11": "2svTKDKo9Uz9EEHY6gtBDLZc1ufmDrCERG6Mef2iukLtNsBtefdkgbsfgbb1YU93o7hSeu7JSt6wF7Npwhc91JD6",
  "key12": "2oRFqZa8qFZtPD1MbZi34MX7CjzTm6koPJNHGeRhX2ovaqzDQ9n3mddPxGvBzWCre756AoSSdd6icrtrLKmpheCr",
  "key13": "5Sax2TEr33j6Gp1HjhUsNSqhz5aEzTCvnohjpYSHJoY9JsdSJhRCiy6bjjdWwb5vzNkUy2SGotxn7YWUaCZgvWdW",
  "key14": "4gBck69UtL1LrZFFye2UwvCc6KVk337X1ZSBPiKMJ7PoGtprW5u4XDyiTc7TyidYZbjZaEeFwCUju3CNjbAXYVki",
  "key15": "FWK2W8bmnCLJVganc52gXfgvminf5gv92TwncEWqtkREoSrfScQTqhKMcykdC3VBCmNyrtcqVkVmgKZBGquZhaU",
  "key16": "5Ao3zuMLvPNkE59T1Tio8ncAM11HB7QzbbB5Vs4R8gt38EhCHnDo388Fch1ZQbD9tyKAUb67wfbtjuFth785UE1v",
  "key17": "2UmpPo9ms9VMJ7kUV9gEiPEkeMLvdT2s6pY3w1jvXpkysT62naMrpEhM1PF6NBwxQxEvQB2S8a9F6CK9rxuMjTnD",
  "key18": "yiJG8NkZHo6eKsfcsmokUgAz3t9DbuywDJKU3ABUrj5YBwepC3wNyXFEfqGdJG3c8rQ18f5eJgdg1vUZ9mckj6h",
  "key19": "2xBEZ9u42xYwaCmbxrJ1BQ4jusKiXXZ682UedShh4vaEhosXNtucfeEBNAV6Db43Vhb9N2oycaLDGHin5aTyxFrE",
  "key20": "3zrgbpicmLqPaYN9u4t24fkdDqyQB9kmDwRNWTXQJq3RAFsNxVUBGaonruJBrqo5xip871Wgz58iURFuvoJmfaym",
  "key21": "9A4suRipkn9iZ4M3eMngHfk6Jjxc4G4cdCwQykZG1GfZafYq9PZeUp9sDpLGDhaCvspvH1GYpy8rCvuPd1te8AK",
  "key22": "46hoGy9GvsyLgb38MYxSkduuwRafrVxYNTJfCi9X8uuonT9KuGg4cEEQhgq3S3yDQuWpJQTFaQ78iNjRLVEK68Zm",
  "key23": "5KsKbGRukmTwYPwsAL16pjx3MvUcjfcpYfvJEJ17DuaCojNAtX6CucBxy5MS1uhU3gAsJjnFbym9wL3CgrbRpwGb",
  "key24": "5r7McePpH9Cm6x8URB9g44CQ2QPCMseJdGqrYEV2K8bBucs5vJoszdYEFjoXWCskoE9jDx8B5cECK38BcZbtzMDB",
  "key25": "42jSKaFe7w3uMKb7u8uwqjoKqecBPmbPVc4vtizPHGJTfhQF56ZNxuVAdpDQQEUv1YE3uevxDgazi3PjGE23SJ81",
  "key26": "5eWe6ayfSArHRHT3WvUbiSwabNQq4AhCSXvXzHNy5x93dUJwAbdzUpDwGPvPqDqtLurCS4fQwHRmhRiapsU6cHt8",
  "key27": "38m1F1FmEVVCuY1pjdms44kXo5vqFcK3fBBRMcHmgrS6qqub2gAcBqtKoxwby639EppBsbqiBVCABP7NUjkuQ8pu",
  "key28": "5x2jkuTmYkk3M5KnVTfqgHRRF7qf2TkCYgS5u7KPYKwrQPkJyHFg58JHk38YjeVM67khTARVp3jhefuMCDZZJRAM",
  "key29": "2srFDX6vMfnbG7bcpZaynmEh6JxCi7CjX7TYNpBxTvWKx8tJbvDpda4tvT78h2237vKtLSaXtsTun7dPK6Qoxcpb",
  "key30": "2X6cmtMhCJzDtwW3aXpzDxZEnLB7TM6raLfwkgrt6VLWtUCAa4XCXM8UeMHr1oNjGRh7ELmNujuwUP7epsPoAqG6",
  "key31": "64GhuHfjuLyG6fVckA6Hqy3zp861DpNX9BWw6wVPpmftJVv5qRgMqMJtzEAoqTyX619FkQhEeZVH2aHaWjVcdg8d",
  "key32": "5dQ4bRQqdVa3hNca1JC7TkFpV2sdb22fnQmDZkKgLut8e1h9eYMVMns8AyKax1V1AzFD2NFkFryMnCsDPjHo3TPh",
  "key33": "2hBaNbhF5rTvRSJPjdK9E74hhEF2goT4yHGwYGDS5Y5Sp3VfCTr4E94LyfXkK74uhp2FLHUisjr52vA22qsPSYPi",
  "key34": "5Y4uskNuo5xV3WczkRKTJxGTMCwPLkh1UGZGCPW6TYL579wUC1vmUxMqfPjDSTPemvvJ2EMAoNCaKGELSjMniTx6",
  "key35": "3hDZ5BAdns78wZ6a3eMxiinUufhzPLzYP3EK9nq5XZozhWCU4ReyzbnhSbm43vnWMLNrSNgyyBpobiCM5poKkgQt",
  "key36": "bJBhb33tpQdh7Y35CmFSa2UvUUHh3P1zeZXue1DtwNRGK3pQG1TPvpLhTinRYUQf7Jv6DqfBPZNLSzGbdBAsktm",
  "key37": "VvqUvTPAWy3qPB4hkvRQNoYAwMActy7xqcyPHfLwcgf1ZiLJ6kVLPPaaNorR4nREEq2yF4CqMEuDrdjiue57asD",
  "key38": "3JAJSyHtoSugJk5E1Cubi1Fc7C1mZW2wH3Dy3xFSxXtQcPy2j5dXgP4Y3EoGVCh4qGwuBtEYP2FzupGFfdCin6ZJ",
  "key39": "4oBJbjNcdJWLU7WhUogFkqnMKMjnMSZ9newyBAsjLQNH5LnFzeLF8HBrmes2DTWn5H1BaYfGuSpnR1jLtmTrZMiW",
  "key40": "heQTHByWQLrxzidCrqKQDGpPrNqVi9Eo4TMNiQThbU169TWnSBowZ9PeQ8KeyMLYumjwtCiJGTK9bgg3haeL2C9",
  "key41": "3ApVaRJhRHnGEaeLfrQR1bhJLLTZpzuswPF8dW2KnCSu6G9mqYqyHgCJM6a5pohBfkT6UtZThj5JUmDcedrNLTYH",
  "key42": "5zyJsu4b1vaNH8p4qjYV1bKqYecCUYKTd7YFDa49fHocPZNzi4RgGtLLTqLFqnqjVDBXPCpw43z2Zm6n9GgHyBVf",
  "key43": "4x2tZyBSxSNmonz3rYFAQuB767ckGoaGqtpi691oS6DwzgZjVxSBrLKWroKktXZ2JU8RkU8jW34XjEEmFU3RzpHZ",
  "key44": "5pe3MgpZd9DEhmj6zzMPqtgxAhTT6ca4LNSnsVD7e2n9Gbc2HyZfBC984zMtkYLM4FueKR7A7t9EWbupbwT4figj",
  "key45": "39S65PqxJkGVCZwYYivwej5Soe74cSyaX99XAGFvyGPqRtPnoFnXumg95FAiGPEz1tFX7dHKL1JvLN5a8BnVWGNf"
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
