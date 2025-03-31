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
    "4xfKZEfTdud9BgKfpuVu7XvmHYxiiWGqJm2hgwXNYeFrTD8Mxt7wvW2BiapxEzQYtnXH7SM4PhV3RfkBauT9i8e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixv7cG3iFYoK76qsxU1xJB9BooGFe1rAboyWrzC2jGERjvFKqHDqRrgLzu6L4uukXrpVpcFKjnJvtUrr9Jzo4Ap",
  "key1": "3PKMxKy44qsVJSChxwc4cnQ58oE2emaEqSmba2h2qJmoqP1e3KDniQz4yDKQEn333rwrfhEFsEjeT9mESZvi71eC",
  "key2": "665tYVHUdUWJT42R8itFjysZ7RrorBuAkhotRsTbzXqbkvKZdJwhR9hncjUeDnzoFp3u6uqfczyAeg5UWAJmqtH8",
  "key3": "2QwHH4jo7QtwQ8hy9jeiHyTnEyYiQLrv4zfJsAhMKyq5iQzsRHFdzmDehbT2w3sM3E1BQHkrf9fNWUxdK5jcUnce",
  "key4": "62reSGjKRnNjqe7JpQ8YsaQHX9qdbT82h4bX43GgzVBxzRm3dCQ8z7djoBX7kDcWKFesGYK41GpFcDe2QJWv15mQ",
  "key5": "5UT1H5Y95GtW22kd7br6XqjcgXvPz7YP7rgEheq1eF9bigDiKGK1eeik94hN9wUc49TJZzHZ3tP8w9HQmL4hX8mL",
  "key6": "5rdoLTFa5KaXj4a6RE27Kdp6EqHu7KH2y7mJiwVv8K4pH1zz1tcjweQVe7u8fbXgAbTbgYBegbsTSE9md4HWnjwA",
  "key7": "4P69tGprwMV3zHXRP5mzsg1RFs6tU2VKbDaxSSfYVshv34huWQbAttoMHzBRjwjQSFdEcpVio88sedozMY6E6EiU",
  "key8": "46KJij2E4QRZjWeiWhtocx7vbHyWAB4UqCg4trBx5MVs3LbgCxhJDUCwZcBQQHxzjU8VJBWw39GTKUh2wASAoKQn",
  "key9": "45x9pz8LXRUu3txi5KZvpyrE187Xs8C9RY4Y63Qi5mqvh1vmRKm9QXAc2zqZWz6xxMxuy3kQzLxCQZv31bgdz4qe",
  "key10": "3ykx9FymEDt9jfjR5M4eZCscTLSY132nmiyGUBRESHU8kqNGubNVEhX9u5Rhi1kNhZTiSKWdchfa6v1SyszpJps6",
  "key11": "29HADpZPGtpUgGfazwPgmQaN1vxsuS1MRSsx9KSpwmTcUSjHPVznemvvk22PdUiwFJKUyFL3EVU5eKnPPgRJHQZK",
  "key12": "5pmoDyxKboNscHDe3TmnNRMkgBsrjEwcqFShuckJLjNG5zfdg7ZeZTnVfXeqxcHs36ubvNbWi4XmEnT7ZtcEGYjw",
  "key13": "5Pq9mgdrWHrwJvbpFZz5sR1c5ToRyZQh2RzPaHLkgwwCKt5nMUWZWRL6umgpKHznFkMA7jsYpModnJb86K31FEfS",
  "key14": "4LP35SbmkrUmyUffBwATEzwdxGdyyyPM2yWRbJUW7ZhhjhxWqJqtyWrQ3FcjwfPjVCT2eQ7HDxVUq8hNCH4E1o5X",
  "key15": "4csP9YdPiPNMoG9KAB3WPvUaqnQMj5MzF322h5GU9owBsjNAV2cuEbitTbBPSg2cGoxKDCwpYgKJ8uXWbe58pbBh",
  "key16": "o12tmuHzAneVVh5Gtyvh4Sy7k7YNoByHMLuVt3nUuN7a6qpr8GEz8iL9SFWfG5YL73KWsWxfCvtjUKcHRAU76sA",
  "key17": "5A7XPHyYdtayNxVMrTiHCfyytWrayuw8QxCSEGkV49cLi7UpHZGthkqwKJDuGLv4qH49CiP1DTKu1UPJMXR6iPEd",
  "key18": "r1Q2P6LNhJRLPsERe8Cbzx9x3vtbrF6WXGZCkLXZ2q9XEhPonxcbVbWdqe2BKtx6YBFngV7dtRHPpQgMMAuDwi4",
  "key19": "3ayJ6fcv3NWoNN7GMVvpLMvEm8SnrgrGPBb17RiXJn8oPUTStzwHbfetoFgHmkovP85jZDXRrGKGQWZew29xq7TA",
  "key20": "4JXDfKvnNqYR1tfeoPQ9zYTg1VZawbAvgtHE5HXQWg7Padc7aash7cnmaJPJfEify1yved44kBeqW71HD13JHm6B",
  "key21": "42t5HRERj7icYpTFNhDbAw7DpAZsb3heGKQnNixiMu13MVJq1pVQ4VwXiPMfBjPR79TS8o3TdSYmz1J71dJtDiv",
  "key22": "5yzmSooMQNfcoj7g7Kre4rguJdkXRmbrdzF59yQqXjoXsgtZ8eTR5QpQd4vZshvJdEMR1nnLbpi3yr5xxPkzYLX5",
  "key23": "49NMtpcErAacF9eCmqn2fVtkqpqNk2LqqQ2VWmLBCV2qzt6bUnhvimXoMouQLN3Yders7RM3MA8wWNfEoVd7M5v",
  "key24": "2wMxPCkFAwtD3smEwDbgdYoKcTk5EHaLjNcsLB5BFERki8HxNqbaR1MKzv2XUaUEq52PVJT3wFHsVcAZEztQ14AH",
  "key25": "2m8kwgNJy2BmWEyvJ2kdK7U1LtXiCK8jgLiujbwqLFT134Na1rKEYDR86fMvuuZEmi877uGTjURenD4tiNLK2kqi",
  "key26": "fgmF8gZoKW1b1FCoD6NrANonhFhey5Lha44nRKJCtAJtEpXfZxQZgfGqcsxmouFhWzv1gVfEsdnQuiiq4xWJLPU",
  "key27": "5nxX6ySvkxpGKuEGCzoHtF6xvCBUfuVJYU1iHEGedWdGPo4522Jb1zUpe3rzuKDgAL77yEuxTEH9D7hQsWj8vCSH",
  "key28": "3vT5f4fBwqCHpoRDPiUZMADBo7RUqPqEHWwDPFJbcYosB8PLfWSqdE33woPhzRcb6hUE4un26qFm4i9L81vG2VWz",
  "key29": "2qaWbC7sK5cViEm3LJT9pDmCgs2AaXzJsScw2gRCnGGTjfu5W8bxA18LjATr36qLkTrbPP4CRmyGvDijFBwzwVgF",
  "key30": "63JjmzUR4tRb36T1J8NAWARLwduVzgs9QhoKUfXttZFgpf14q17eHJJLV4ALqybuXBYdWijdusqQfBsRtc2Mn6bR",
  "key31": "2WFssE9ofwEUrTBT8UdzbwNhHwZbEK4QFQCLyJm5SypKWpaCV4sSLyefmJvwxVAzjQc5FChHHmHJYbNdadgExWnw",
  "key32": "36SNqEVc4xKoj4SXYMVQ86bFrwiHcBYCaBbtwTLM17jHBxUN8zJRLBdDaxRQc6y8TK2ty6fzz9BYHmowgLGTF6D5",
  "key33": "5TzZDSYGW6W1QEz7sYrcKKbfFwHwS5nhNc2Dh5GcG6boj8fBKFK1bFhjj2jncfS67AjNHfhHs73ZkRux9S98dNym",
  "key34": "4sRSqyUP6St8z3HbLfEgXXwbAYWY1pWj3vACjJJaeBzXHKpEe4h3BA2NkgmWYLogkzCDanCUpHUooiSd2QhZrG5b",
  "key35": "3qMx64enskQXJB1EaAuygczKLoAdx94i2qCQon42RDvBtdTFofLDdJqHXHu3eVxop3ADBa9vbm9Wwq1t7m6EBkBZ",
  "key36": "51G6XMUBfQ21GA7zFvq4mnFpXogkM1gPGJH9ddw1Mg4LhBxjHNpiNQa2B9dHqXT477TpRoTWkZpbMrnaHjhFjP1n",
  "key37": "5gvARqHzrTmuYGJGEV8kzbSPp1JqQYKYpqBHgw2mXZywyaUDYy78mQwgLpYbCqcMR1R5aYDryafvJjr1ZWmpUsRE",
  "key38": "2wC3jP7byBF1ESWRGQTApLWYQkpVJkABnUJKAtw1TSoTNnScqMM7usUAG5C34aqgsuRAzUUyfLn7Job339rXb6Pg",
  "key39": "5RDvfNEg8SKm2LCWjiTPpndKVxhzUBdaD3mMGodCqk36mPct7GvzpMT7iDCoVMdHNpScYGuoLRX2dXcnJwUPNRjT",
  "key40": "GWU36BCHL9wdiTCvf6QzqbaYFTGLsaGtLpdndRxyuhe2wFAs9dG1xFf8HxhkMyEVnJVQwX8QJ68VnLkvFiH8QZo",
  "key41": "5doaLcYYZ8bSkpCvKaexeLuViGaB6K5srrum57HETeiaDF5iRweDKbyFNofzZXdcy2LNYcmDTbA826UaxhoKrTHB",
  "key42": "54HAoag5y2EtrfRtychjiEsbHqZcNBt446V3WP21sBVp3JkwdT5AX8MHBbxa15xoxfSiRLzMXCGc1C5FSKhGGrev",
  "key43": "5vPMBthRCArJRkBHKofuHwUXAVNAz7ibH26VgRhbYh54g1Zm25SFGyNdE46pNTZ4TxCwzgiYSTB2f4LExb6iSVzN",
  "key44": "4fXBejuNoJ7bvwaYoDfJJ5VmkmBa9teU5S4L3ZsULnXXHaTYA3JybPaY2o9AWi5fh8edUb7FkDQK7gLMwFLkrBbk",
  "key45": "5cUZY5Xbk7ThAAF7VyNkMmaTRk9GgQs9p3gaZCbSonvfshAhAzSLnSkeq4FcDrqfVgGZNUn1hbuKdH25dA7s2Lj6",
  "key46": "35L8QgAvZXg3QpgYnB585ZY8B1jGJidjanR7Zd8JfcanuwzSgRQRZeqnR2Ypihnh5LtyrCNGpbtqQQua4BFkQu8J"
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
