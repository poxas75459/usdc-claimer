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
    "5eg1pNS7SSbuCSZ28ctUzex5ZQzdgH7Gwh29GgEPP3Dsd8eCEQVjPmVuJdxYB2cU4RTAgFQxzr1nyDvedpYdkBTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MKudeohjCLcNMRgd6nRGLGGY3P2A3K4qxRTF2y3zFN59Qex16iNkKZU9epPRaBBMfZiGxG7pRWVL9tMTSRME7o",
  "key1": "2gpum48UXdENLXqXBBoxxSQH2RdgZ5nC6Wgb451QYPqgy6XhEVU153a6qmUFUVETV6u93KWDxibmeWKBYQazJ8N3",
  "key2": "2FRD5TT4KjjsqGoMXQheRcUXCafuGW77NgSEJqcBeBE2FxkBaD26EeP3pMggiBJPLEvngR9rGvC8Wy69iQN6FZDn",
  "key3": "EH1jZUftCE9CcGjg7ivAiQDLiJRaSqMRavjXQ4EamtXbLtYa6oBYN8CJ1S3gUxuuwPNiNPepLfFHuR3DiS3NPQW",
  "key4": "2FWjiTpAwh47utZvcgXq4Mvn8dgydQUZmgsmGy9m8rNKcWxkNp3piWPb9HS6i5VtHtaSE4AYXcne4hWzz5Ps4DSQ",
  "key5": "5UbQ7NLNdq2anjfvEdqDK4MRB6ND3ZboQBKjc2Bnb8L4uo8y9eha2rZzDkDbwpPNyzzsnCYvKQMV5U9D28vjzfFd",
  "key6": "3rASR4EDnamciP5ojwPS6eXU1amwQ2exgnyAaKjqKcL2CCVes2UQdaXCEqbJzQmaLCoANqupoARmJcemwMxvqN9F",
  "key7": "A1a1deg6GGSt3eFa3qvb8WpMQvLDSTzxxbeiuHxGe7Ff8ixNShnbCHKHwNtemBjR4xTsu2b18mjABf93y2gU7br",
  "key8": "2yGNtJX2ddMLtZ3mnJnh2C4KQKXzb7TRbXbzRk5TrBK2L7zCqCa4FW4Z9CfdWyRxvT3GqVbCXq58aVC2VM16MMVk",
  "key9": "o98PGGGbDGGiCSsxbBHPnH2weyaTXUQ3YgpSxkN8ym4i3E579ffLoUvKJGkfuTQ9BYCnghhz5YXESNr4p8PUsPw",
  "key10": "hMgiVkom8CfP1eouC8QmN8RSWVuXycjzt8ZRm9VQYAXdmA5KcdAmW2y2aZt1yvvKjL3hMghgxRnSFgCSJ3LP7BE",
  "key11": "5ir13xZw2veKien4A6mJqrh2QhCtHuDNnrFtLT2PgXw3EF3HnnKNX2tWxPX8P7ogkqpMA5nLZLA7b59mwgB4dErd",
  "key12": "2sNyEmLv9Ef8DBBUoZr9vmEsvrLYg1D6Ve5a4rmcRK9DJKaJCMiQgnUbF1zU6RXfzxGZjsbCnqPomHMpnr9xQiw4",
  "key13": "HWZC19Na5TnXRhyHaWcguSqWZSftNQ1BdHzAJQrenajbGMXPzGHeuVRFkqcQMaWUUdYHoCHX9THr4yDsQZdtTXb",
  "key14": "4jBuLfeKGiyaqcJwEqAPBag4bZAdmL4DJvMRfyDafyQFPwhG5cP9uvnBqa85yPqcu3WqRXv5yJ6GWZGipWPSp7Na",
  "key15": "5heZDrVxGf6Nxt5nPKy8JZyM5XTqdzpLuYHkKQ6VfdRasrwfM4a3PUCVwtYYio92xRg7eBS6cFJAHogTu7jeysDC",
  "key16": "2Uf5ppB4pTnnYm78y3w9ecjnGfXcxVmyXqLTmsTH42HtMTyQ5BHVyNjhAt6kdJCwAu4uzN4nGWKLvNue3hTPx4VS",
  "key17": "5SExXg9FvMyw5LmrjQx4EnH2qVnQBey5Y1aufyenD8nrJAq8NQfZn9rn43SRrkafgTWEoWuMUFaa2CgEPYnbZakF",
  "key18": "5fxZ5XMrCtBqjGENRyxMWs4mAdhZBEmJvPVp2GfKNt165m3iyUn3dwJEumVPriRSuzAxBrh1pHqbgB42yttAUg5B",
  "key19": "wcZSij6JWrx2pthyo5aKsSQRSDK4DH6iXEG49azX8qdSNQzQPWjvxzy5oNQDeo341Cj2n9ycKtGDxoiFqPBjvkA",
  "key20": "3y4mFn5KW3So472qDNaEEgbrCZyyteCdsv1DFHBiFNxHrzcNdBiSA8mXy35FQnktkk4PPwFY1eZWjT16fgXTbJm1",
  "key21": "2WKWXCUsr2YRxNfuNLYDeSdLmXxaudjizQAu38QykPK36s6sfJrdjkNBggdTe77DgicWnuGg6xJYsGC6BiMDFgH7",
  "key22": "4M6YCp5MBuJzTc7AonoT9xK1povvPER3oTReRc5Z6QQHdYoh5E3hQNWJyb664YnWZu1QHqwgSzzDdFKZ4JcKPZfm",
  "key23": "32d8zNQkx3b8yAnMvTvsMmf4RBFpuzY4Luj19QwFVRYK6E8GDadKLmwDFMtq5jQFCHbrS2beFBBFPN9YuB94vnrV",
  "key24": "3G8YpRfTtSVqvragqwfRoZJUWCoEK9BZ9Ft3sd4muHMCHLSrHnXVqvt6tbNXSR7XW77t1Mh8MhChbJhvYRdDBQoD",
  "key25": "2dk3JKJwc3V9X8EAjF35WngCedFksmgRd5aYUTWhsYTGxmDn1uhaDHJRZt8sVXwBvgy2j3BYi6bWzQQtXjsihkGE",
  "key26": "CGRi8xZF6zSZGhqQpUN3SH3sBWY9cFiL9M1sRZMxJGLWekBgoHv1EkFAaiWNEsK5LKzN4LrFaKeiy2au6nNzUXP",
  "key27": "dSCVWWTySyXNFRgHHnZqPNJdqkjtnFZJsjGCHbmTMqJFcFrU3BvrTeGZddipu1XWSbaXtzWb786na21BoJd9mt1",
  "key28": "33RmKTT1qY9rG7zcBpnjmWX1wgb5U5iNeib9EtGcq2vrjCeCDC65B7NqHtQLwbhmyAnW8oo8GjRPXV7JgpD6bjbM"
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
