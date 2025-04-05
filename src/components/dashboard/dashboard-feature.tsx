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
    "5wNqTiewHnrHXbGJCN4rhJA4JgTodTunjTEMmk2wvSgMYhUQDwLEBG8LxZiut9HwN8dKbbaaEAgB3CwSKVhxWVCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYPgxnqzgFmFGqbYmq7T7w3KJg1zAkdRyBhRmknPXExn2HcgXLBmg1nfavKR3nMLiLLEqPSjxEgY22AYGdsUWKn",
  "key1": "NXEzm5VkgHYY7ssq8quwq6zQkZNfUdmuNFiSqn5xjPXWaz2xMzEvac7HfAruArZZQmsY4tQuHez3XojVEHZnNXw",
  "key2": "2kojm4zM47gZrEEFhV3TwbLtfg9torvB6xpmGRfFUY6apEdd8QNfeWaCwUCikzJnka4ZeiYcnP6YSLYt6CfjK2mj",
  "key3": "3sZT4NPM953LXbjBGgNjdm8vMBz6JnCRy51a2cVwTr7jqgtnCrGgL1wNss5N6KT8RqnH5jbUdm7ffh9W7wR6WAWQ",
  "key4": "2JY8vUCnnWhU79ucxTJN9jPduYu8zP3Yd8dDuYR5aVi85SfX4DZr3eXTz4L17YwLZDz1kyD71h2dncK5AtSk5Yt7",
  "key5": "5Zbq4iF1RWhTKpAa3egE75nv7Un2gFjKiEsjiMesTyYGRoAtEgQaQasocExHT6QCQfgJDjwsbCA7oxTVU6dfiUA7",
  "key6": "5yKHYWa6GUULcHKFCQeYrpUTavg4rEv4Xpnq3eK5egmGnzTVk924o3puodoaGtKuTamJ6msMj98xXrtqUZVyQ5SA",
  "key7": "5C8H4N1LkVrXAFvcFrMe6PJbmayZZtz6SGfo1yHx6LVte77A1hW3Js4E7iwbRfQHcHEzi2jhnd68Gp2qME8h9N8P",
  "key8": "Dw9hbNzm6JE3EYrQ9uxHhqahcAnKswmg1P5iqWtH3woZmd65dUhSqyrDf1WhyF7uyMPWaLBEY9Fb1TEaueipxcw",
  "key9": "5Q6EFwQzVDzDHaD5JoCzXW8cP6aWMhxRbtURDXLPErWxXxQTkY4rX1QZSXg5aaTzxG1j1jzJJdFGaCLPxs1KPRih",
  "key10": "3GC58VqvC2xuPQhVLSREMSqBarcixrcmx8GZspDvrdAPM2c96NJ8yvck7xhzmBjsk7xH3pbrYQr8BwLeiFFbkqs3",
  "key11": "5eYcH7EAGaZtBebvKyk6Sqt8uyDfGtWTLf6UYdP6uL3hEvTbiuEevmU2E1u9zStFtZR8iUSFJGoCbv7wFmmJmNcJ",
  "key12": "4r7WwYDH4bAY9AXq2cZASURoAKAR3MyrVVfynYksDNuVhXCDbdTbGuU3KCUrHWE8QNKVmK9Ku1Z3QwwrwpbzDgPt",
  "key13": "5As9N8TZTmz4NgLfXMbe2Z4Ka3NsBFvsXaKgg5QvoRDZXWm8K1tU4zbYub5hsaU6dWbrNFfKPkT11b1PBvY5Gq8g",
  "key14": "4JXiLLKvBGdKtBnA49SLDfXBBwPAyaPZmRwNSnoeNPQy96vLZDXJ8Bv5bLUfDMRbJN2TsYEYPMVAKHjdHxrmuxcU",
  "key15": "42SUZj5FeEYjRbVKcqMx6YAzGG6jyP5d5hRmnAWLxcGQDPDYTDNJoEeNSzddsYXowHeWFCj6YVcUjN7pea6Atd9V",
  "key16": "tB6rrWXVpk4kKHCV2xhjGvhcWXcUw8Ha3kuksxKwm73mQWoGUmNhpH1W2tbjRGW9bziu7bht117XWNvgGmz6AXP",
  "key17": "62zwzCjGdMajRtESxKwm9mZ8kqX51ygb6e3hEM9rPv2z5aFKSzyf9XK2P5RWA6rVBKUAfam4PmmyEYtayiC1dcPB",
  "key18": "3xMYm1dnoWBnouh9bVmV7gXNs2ySvSDHY8CgbJCNw1cxDzqKJmYjsGoTzKaN8S3vc2hbpGW9XDmwJfM5GMqNPL78",
  "key19": "5b82JadsEPAcYNosdYntbXVp5rN7dwZT8K111BNby3Bn6wRSCmuShk3Df42bLNHvt6y5iZbTW92DwWXk6hTU87t1",
  "key20": "2S1ybNBa9mPoRdrdWJyfbKhW4teoFvQJXWJASmfhuYR61b5x9LkzaYXHaYFQNt85bV9iXtxoS2hsJG1btWkpV2Q3",
  "key21": "4zTmRWENbwQfcsLiu9mcwZVG5S3MVRQ2yDLBBD9zLbzwADhrD89dDReHSJosb7D8JTZiyaYjtPhSUCqpgjRJMvj3",
  "key22": "zgFG98aoQr3EiPhYqucYaGZVkGTicSdQfJ65KWsXBrmXPKMCykTHu57LcoYAG13eKNWHFdZ2ApotVwLAeD7B8sV",
  "key23": "2GnduhiN3gfmFWQN85nJzTYuBXijYkQCXA9FMBoJ4JNw86LU6eBpzVcfRescNYxWzvViRBnvko4hhotd8cAVBSNC",
  "key24": "2bCXMv1tvWF1a2dsQX8BR4i4QAmQxJTVmYqBzEktSngVn7aiLsRkSn9L4sameWdit4KYWKZQzth7ykU27hJU3uMs",
  "key25": "5W3hUE66GnH4tPYDhoHeiTD9rHAvx4KMdpaYMNTnEgcsQUXnApVwMJeFg4rnUef76bZjuVnUNwrpHvpQgpygYVwQ",
  "key26": "47kj2XrFvfG7zh2kyDCrG5VMsXT18N9VaayanZUnUvhxQv2VVksNJTpCawpGwfmxCZcQxkrS3qHV1RyjNfLxj6KP",
  "key27": "2f8uRtXtXU4bZJtbBDie4gtCjXeofeKd3p1apB3gobzny9djFib9huJqvnrvndTBn2ibUYpPvTQivksroQx1i29L",
  "key28": "2w3YeoSF4N9HUysZw6WPCL1EYmiJK3xx8VjcvoVoThkP259AfAtjBwwnKgVNGWbyvFCNzkyHYDaXfDuHX1wuS7Mm",
  "key29": "3427vsAn1fv7pyUj5TpxGkCA8vwdmjWgZk1qrudXoxxgqpEX8LGjDFimDn5fhQRWVY37uYvaqUhq9DxSpKkoQkWt",
  "key30": "4hfvYyszumf6oLxRx6omZhrEEkCUuAoXXi3SWpfm22wC7GH2AREGgEYsaSDACqCtn2tjZQeEGoo5LGpB2CFS6Ztn",
  "key31": "4pcSLEPw8kCiVFCK2grfDVRkFJHgHMwZb6Hq1eB2NDPafRYqQv6wNznDaVSpDz2z6Egaiu5Z7FaFYLkBgb7grgbD"
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
