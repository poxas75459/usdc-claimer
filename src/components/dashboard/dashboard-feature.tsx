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
    "3H8N2k1ej1k9cnub5DnP8fGsfER127sLk6wKT3ii2ho7a8HQ5GQYPrvRvJ3WKwyoPkX2dEqsvzysaAV519ENL5NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTLQ7C59V97mW3bkJg3LG3KqdKqLzXNwD16kRMEr1bsj3mpn9kL44s6q7EgACPAyXP3FJvUtELt6xWwHmMQy6EJ",
  "key1": "5Fg3g4j8ab5BMJZ3jSLfpSUfFAks9LVhWfvuBPDxN3WsUSxAoZbmb1ixj6ETYgYZDfWBeG4WdAL9qY5EdBg3mAtU",
  "key2": "p9aNKWR5HbGkr4Vp5vVa9swbeaKp5uwgb6aW4PU8GcCora4HfZJDBEoNmRVW4MxKqxQYJ5FE691McgL23LtyMhB",
  "key3": "4X7Fy9uoqt1pW6shTPmK3ThkJtWTWEo8HAMjQ2VUUjPEWh5bVFdWogk9zQvsongRRLBcvDJ4xS2suUKy828TZxZQ",
  "key4": "3pDXpLRdqJYaJf7FRyg8fzx2tXWmpudAjxa3tiVKssYUg5r1izgFZeoJQtQRHgKEb8N6d5rqnv9fgQJR2U33HraG",
  "key5": "42NYeCATSHaAgAZeHc8hNXGm54SAWZHwkAhmaJKupZhDZKEGdyvfZCfEfutRBTxvdGg3UPMgBAVDomi2Wi6M9G9U",
  "key6": "5wiRNvGD8vmLu21tFiFTN3LZzcsxdhcfFWKUUTWwXyQ5VEvLKgjzvMYQLcvLB4DrXzYQizkb6PVhPp3Jqkik5pZ4",
  "key7": "33PiE7Rk3BavpNd4kRsiAs8fTeqctVb2AKFArjzq6mPetgEbmT4Rhyk1uQPbWvS2pCAknpsGSfh2G8DcK21fgXdV",
  "key8": "3RQEQphP8XeJyv868JKNPispQ4qMeDMvYjmvhkBRCHpkQgCT3LMGC8boEJiRtfr2h7zE7i3364QBnqRK4rXhAQZW",
  "key9": "4eSD2fHsEbBEUr4a2B2q8FBQpy6f4nFtzBP8Z7D5SvS1eXkNrVRrqvys5EnXDW5byDFMDPrHtTJa5GgWMYgrG8fX",
  "key10": "2URXnwvTXYBZdT4qjsfWfcB4tYsgGWpoHn7DwX8ci42CUe2Q18AzUW4sTofrg5wP22h714kaHdR3X8tgkPejZ49n",
  "key11": "3DyLqKAZsFSeBS4QEp7KyAkneLzjwcXPTx3opGoDYwyXXfGNDHLiA2MfZumKM8PpFnwMSJuZe6asVrtefiMZq2GT",
  "key12": "5fiGm3XadsZLQo444LvhqZXA41jLRzvrQu5JbrVyAWHmfi15we1pS4qaPYd3o7PEUprxmibGiAmjyu8UmfXN4mA9",
  "key13": "vLAc7YTALw3Zr6Pt2gJAGQ58LoLGMMxGQra7ULAHHFtRXHPW5aEJERYKVtoVvHhz6wZoksMcAe7MdDW9E6xtuJt",
  "key14": "44Jieqo5iASmxwrLJWbMaGKTPHLeaA4wpGtacPrfqZnGJKaH55YBkSvmMRcWkfCwA9GpqgWG29wVWFXsSJ3L5Tfq",
  "key15": "RWZtYrfyr8SwgcYUJhAL5MUTQTq9oBKWaSDpM6F3f58i4KDaSRZP3y6QKmnBxvV3Q34NtyuqCdmzbkHrm6q9U8T",
  "key16": "42co1jLnzSGmJ1JR13yWqhR7BsRr9cBw1yty6a4QAJEtmezivDxu73iPeNnpCFQJeuMiNrtpKKzjLcYEyzHz9LDf",
  "key17": "CyHnzhsPUhRGKJCsCVJk8yfNTR4sszikvK5xZfKi4SVP31XSathyVNsmds3d843i6hMSN2ApuNDBpYENx8g2DLq",
  "key18": "R25J2fVKVjoNdLnLN54eJs84CXdobZjxcm23fddvU72CNhk4STLSYfTYHFnxvxzzBLE7VoQW288qmk7YpRPq1Rm",
  "key19": "3xYRiMcJ19i2xN6gVmukBMg6YH4FXwjCPFVGxJ2HhJzpXqDZPZTLvGnrqLutKKaC1reQa3CGxVxWQz6FGxzDaj6u",
  "key20": "ETWT3jRs1FbnthB2MZzeY3nWey43ccRuhERY1aHnvDaLwTtJdMUZQiZNPHfo87KQEB4dBpyzhtDT8oSFdVhF43b",
  "key21": "4Dc2EzsDMvtbnfsDk1pqxcNPGa3ZD3V6bZiYvkBbQxX1YbCPLzLZBX8ZEWkoMoENFTx4cpbb2Xv4fkxRhsAsXsWn",
  "key22": "3brdrSBRRPNutJurvnUZ3bZBrGckvpbfbWuJpV7beFjRdGaGhcJhmovafzSqNmMbPXZYQkTtDRAGC92sGu5Smc1D",
  "key23": "2CFcki2fkWmpgYv8k2zBYZWLNCkuNZKTaQEJn6cVJBDTQX2jR7QWg2BAy52YjcdGPDt2erpfuaNRmZwBVJBB2jxe",
  "key24": "3dpt8rJr4RxY62DfPYfMS5FkkNB3w8Mi2Lvt2DjRtUyN3k81pRsWUhSA3VXCtY2A2xciqPxXN4wEqoS1KAvrsm14",
  "key25": "2tiHncbj2hMW3NYYJPj55snKTLBX4A3cdv6JBkanWWoHDigEywYMvpHVp95UfnoGJqcc9GkbsfPAUb5faqnMmy9x",
  "key26": "28J3Pfj9fJYjJANCim67okNcAabAbKXFbvb1BQhN4BKbd2FnifXA4Rauwc2VgGFzUpHWhyH89NSLSqb8dRghAoAz",
  "key27": "2hvQPeBvhagHjgYWUc8QfPhAByVJxpnMgc5krpFPbeaAEXfYpg7Fn25cJKn3yJ3JSN6QcKss7GGryQLJJtXbhbhu",
  "key28": "4bPLaADHrPr1wFHVvVdd9TR1vwjvuzFtWupUixp1KTmkyA5Pe331km9atro6vWM65QpbbTpjwSxUJvSYWaG9saH2",
  "key29": "2taXaRXVgVPpAR4Ksqpi2gRDVtsqHVG6onGfPx1ZfyWBAbNpEuH5M7ubNfPAXQSh8T1wDW1NoijJqG1TXDRFTTJY",
  "key30": "2AuX3NPxZ1u4vhB3R1tZUWzdEbW4oionZDJErBEAmwnW7hncosDGv9FZgGo6tSoJZLNmF1CYXrFw4uP1HUmrg55r",
  "key31": "2b9RkVapkBYgLw89TBbC7MjAsyzpQcenv4BqiUbtJsK845aTFMrTxtGNn9yp1Q26Rgn4dq5xafFfafqMRkPodg3V",
  "key32": "2sdGHr788PvX62oz1FJBLzU5ybhXJbww8uBaVuFcuMeMpJywSJr8Nx8rghPLKpzF2b4K866oo1xwze1dx5oj1BNk",
  "key33": "2bnSY6QZB8uH2PP7vCraZscsHBUEkrpcZJnJA6WhPeLxXpiACDgbkfzbg6xcdjnc2s5bTDXdWQhevCZf9uWcCxiE",
  "key34": "2YFZenJTB7o8ZsJZ6eKaTeuJhEW7faFwbzWxstkqUbQEhyHN3fDkpg71rbVtC5jNENxUVVg9PovuChXG5ZdtUg5b",
  "key35": "5JRyh3JQWztzSDbXkBfSFcgbXa5RudAXRbYnXM3evJCFpxekXDTjTvziVZw3XAACaphoPeFyXJWMyemAEcHLWoM3",
  "key36": "5Z4iAK1nx3NemQRYUAfMxtMUoC1eTdwDNg3SDom9JE5fFBc7PBJ4w7FBmqxZEBUHogxiqoNimYK12Cww6Cw22cRQ",
  "key37": "2ceDNbrj6PU2NBu7uoCsWXNFCNFUM2WHGQo6ByCLNNTvgtVM9DGaFM1XEf5zRYnvBERHZtDnymbCHaKjf7Mu1xTm",
  "key38": "2g2tvHmHZ1gvqWBZJjivRdsQVhPqb7bf2M33ntg9mfeLQTsnJoh8hz6AJUiumvaLCgWxfo5sUgrAYC2oVVLPVdQy",
  "key39": "5oDYGX38Z4iTZfs2JservbtEbMvs7AeZjshPsW8yusrf9oM2YaknKoyMsz1prQbAxPi1zRRd22i4gBrwonyisRt2",
  "key40": "8foJFri9SbkSZjV21TZxxQBfzQex5pwW251DaPzfUZc62XSwbwqyKyArXG5sTtHp3YUZUkAuiSwyJDKfcDzPEGm",
  "key41": "4FRHZcG8BsW8cGvQJBqC42S2RF6K4BxWMJe7MAzidHzz1Co1tEvSwWNbhjGwFq5mb87m8ah6BGfRCEmkCv9P9vu1"
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
