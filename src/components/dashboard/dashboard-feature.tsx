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
    "2WYrgMcCqqamomNmc8nX4pnMJ44ge5pkgDbVEw5LphnmFRQ2UpgUaAoKAzia7bf3XAGq4GzKxSELyWhbT4nhx1eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGBxpe5Vx78LmYmfzxuhafkZPrKJE4KXCPvnKN1Zf24cWSD2RzeiN6Gd5rv9jiBLypDpvuJMjX7RvLc1ysgvw1n",
  "key1": "5cYuC3PRkJANzL2JMgxmLhkHXTaH8cms5dVJAwDtgpwGCWvQUnWmn8DTjFsh1PJ1dYCZuGhPX4pqWJwiKjJetH5k",
  "key2": "3sb2TaYzwKKgkUb3PdxsP5rxuwHG9NjaY7oH4FLecYk4bDS5uNbACe4dUwgzLvtuBiqsjck2Zuoc92y1JV4ke5hp",
  "key3": "oCF3a87ce2ugaZ24YNv2xascvyERv7D3f6MVvdjaWQHToDyBrCayJUekFhosXmqYvrQUTQ3agYwGPaBr8oaH8b2",
  "key4": "2d4zS8vkm6rUt9aD4xhNCbbYoJ3UFvTP8SabT4YbxK7rf39zqizBeiMUNKzFDp4iCDH5Q6XTP9jKRbm2S2GYGji4",
  "key5": "5LPwi4d7AqnDWsbjwxMzYApsJChqgsffirFqzxuNfWwiz5ZzRBmNucK3CLucWaKqLwB4Eebc2aGYotWK5b5Avijm",
  "key6": "4imfuWdp4nS7vp6Rh6bT9rBUouVocX9xCSapdiqsGF5tLHgF5HxdsxY2HsoMCFqDqeXJvHuArRyxFDP3aKU89Mhe",
  "key7": "272REj11sWk9zJ9itmxwZyU3iTpxS9WdYtKxsx4DnEhs3VM5ZrZtWEG8F5wLaLkRQyzkXTQKDPYmXUMoNwnf4xTs",
  "key8": "1dP2BhWbzk8RqESNN9RpAQ8MMNd8AHfgQDTaN1k9gWRMNcbHerB7BuYxB3tAvBxskDR2cWZ1APqoBLZ5CVWuwP",
  "key9": "3MtpQ1QfHfyXSdNQoDiEk5ME4qe7jGwKHup8KWT6KzmpviG29EgcKZ1SZg8YXDL31GDZeC1AMdKv1MdaD8jC4WGn",
  "key10": "2tJDfe46nC9zzXA3cBSDddN9sLrC8z7chxChkRF7o19JaB57AhM7juU64tbMReJdzDCY5CFrdeu4WY45YDorNGPV",
  "key11": "4HvuY1mLUSpmJ8j9TZ8LTsSrZRWMTLbBbbHAN3qSPKmi2rJgLhc3PHZQpTVLgPrHRd3BGrLBnuKeURV9eFdPuWa7",
  "key12": "5Gtf6uFBUBDmPFcBywh137ZntwhJV8a6STjU9RWkDGDt7ktYiRdDxmjfNJCxaX7NkuRwfzXNhrmsMNQWt44kzHLG",
  "key13": "2oAPdhoTqW7U85AtD1FiDwV1akyYQtrnTFJb56Sewk8y9gsr5HqE35P1rXizTvtCztqr3pnnskdzgA4M5cyzMpnD",
  "key14": "4NJx9GMQYSV5oApwRCGcBzdzCXr7WDXmEvu7xZbWWC1iYBDFnvtZBmNCTv55D6NDw4ifx26K5YFXwVk6X64yUg5M",
  "key15": "4V5MU2hj4egV3CwhXiGn3FAYCtKPkZ1MSdiBmVG65pAADr1MGobaswpw9Mwjhcavgx8fKDhPi3RmZXEHVYnWePDt",
  "key16": "5i9cdaFSA247NRxooBQ8Wxk9fzmHC2AGxcbcTTsi6sgqM82Y9KFHa6pzE8zKCFQnekhRUUra3PVCmPTY1vkQRJdH",
  "key17": "57saDkiNYUxXjmBYC56RWUtwMHUCZb42uFxmyxQFQ94xdBpVhM7ufNyVJXc3VK5V4jdH89XmJh6GaTn63v5NB4Jy",
  "key18": "4jMw76ttxDQ8DrP2HAcmXSvNEcrP6sXjFmsrPniXhmREzA3oF4pZYt9SDBsHJExQhqtrWEu43R5x7sGf9t8A5cP",
  "key19": "2ZqDtCsd5iGLenRUjz1TjvVdLzAZ9VWaPwSTNHUtkw9JzPZBMN3RJrVQrujb8PftDp28kPHiKSZ3f9Rr1g2CKVVn",
  "key20": "58RATQd68an17JDMyoXyErDPoWdPTDSzGoNGj32K4tgrSnphLarX2NMbmN7VGvVRwfmMzUBoPtyvRE7qbFS43B3y",
  "key21": "2CBTgDyUr8Heoqj1mg7rXosXbscLkxZYPAnWZ9JyncfuvPvkr35p7RYGuZAnbgFjA52fB4Tm6agH6FQwWQjXVzxb",
  "key22": "41NVhP2b6tdYJFDX47xxZJcthXwop9rykB12qoJ7nE4xz3uJA27Q4bBbHwcvRYXGwEioX5XLJxAbnLFb4ia7aTma",
  "key23": "4GKwWuFvT7vjpXDTbYzRv9RDHYue8GzrszMVq68NrBHGhtw59jUUzAxAjUeewG6mF8fbY1x2ydfZsicexuzmKKku",
  "key24": "5kSKMwLm6f7cWc2p12VN5nDyEisYUR2qdtxUdN7UdH1PyF5UvR3EnBdNWhtfk5LyK9HFdg2AHyASsFxMmfAJjzzm",
  "key25": "4xBm5ZDEH41bjDRUM4ZFNLiTZFFuo6By1HBMxtXm1xLy8axo2ijgEDTHi4zS6Z7ZVLK9aP3GuoWW8Z2zcSxb3vTa",
  "key26": "468EnmSBXxq3mpB46FRx2gJDTk6ewhjf5vENE9Xf1TcVVZR1u2wRBpBdXdXx9M6uD7ARaa8DZJwazXVdb3K23PeG",
  "key27": "iemN4JjBTWRpeCQPhaCNW2dWzLf4FiFY8WDBFYGjVfPjwb9iY8Cu74SkAzbH6QGS4X3Kf4BN1Ce9Rkkzt9DkJey",
  "key28": "3XpCKQcNBE7BFpR7Ghvy1jhc4eS4hBY8sNYDyKbKUT5P4rg1vER8syjHFDspcKHpv7fWsiZS6NTrv4UjsVrtPfnv",
  "key29": "2iGK2PYufr8EqBAbm57TY4L2CQGwb5aoXAnWmg6x8LYfPjtj9cqQevJKnT8WmCSmmv8cpzMT5XmPUfh4qeRKhHKC",
  "key30": "51ofqEvvhp7qTnzuBvagLfv27tKzm6pWub5jrfUG6HqdxsrGsv36RKgVEApwqm3oREfU6cUgnLZcF8UikbR9LaZq",
  "key31": "W81Hmp1M2XKEUVSSeHgSAoPvCMZpcT4y4qcrV7KnaxVSonccYxjhnmt3dJCLZ73LTUJJ4J8SGTAEKxnVT1eeEe8",
  "key32": "66zGgATZe7rxQ9PNatpXxEDySiUCbXKZaGdauRhZwKojNHNYezKGSAzP6WNG1LPHWGREQ83HKSAKTqhn5ue9UTNa",
  "key33": "4GiQ5zrqc4nKJBLdDEqac51CJ9Eru28ZeqjC97yH1QqwtpRmdH9UagQbZZfybiqhrERApj2NQ41pSzJvC6toMGa7",
  "key34": "j29BSf8du9epgT4TtzwTRGReVopb6Y3iNptCUh1rfnozCtaQ8UciPXdQTyXeYSqnqLgVnQ8EUGWLSJno3x1j45Z",
  "key35": "QhaYBANGfe5K25Pmi3wyLRBchXAvGNa9Nwfu9EcJkXn6JmKBZVZ1XTFcA2muoAsDP6V4g6NfFWMx99bh7m9EkkJ",
  "key36": "2Vguy7oA3F77pWfgnM9yJi8CfNbCDqfBJHnev7PWWAmcAzbDmArFWoEVYyDPAgzjgsSKDcPX7D9MH6PH6h4YkTzw",
  "key37": "3fjzf85wved6kVwV5ohTZswM2kejY7iXXE9qCge1yEpSgYRSpU5a9TMod6Yx2L5QCuPieAF6Cqf8LQHKvm6stX8k",
  "key38": "2dGrMiAcCwcNDQUJVtJYAnnKpuEtTvUt3oCGhDC8vRXm9NvwWbQn6VU7AKPxxZBYuT2cqoiNNpUUjjMZCQbHgp5t",
  "key39": "2r7Heb8BpYZv9oEot9QzmxGBpgjVb3udcW3teT6JUe5DAT91TDjtdYG4DARYnhTyHXoPG1yuqa5trzjfPJS1o4ye",
  "key40": "5nTkF5AYFEWMERhbg2TuZJjUf2F4XP2W3szSX7CwAS8WSCBScKozAhfkJMy6vK3nPQjES9rpNQo7ZZnkSFienxa3",
  "key41": "5vUcHsy3EgThK4fbW8gkr4i5hmuWhRonPkUUcRaSt8AdpMQBRzeuAfYoSuC39QYN75ws2Hf4PPEpHEN6zY6T753o",
  "key42": "4Z6KgtbebNysMWQoPwcnMJXtLfVSouWGRqbukgzw5pgBeUkKiHvRDKMTND1gydWJ271mDWMVf3EqcWfmjAofUQbe",
  "key43": "4GnaLLmBDR9xBkAszWQTWH7tqCTAkQBpsE1f87P239hcvv5HtERQquh39SYWdj2reStPaG3v49S7KXbWPo4mY6o7",
  "key44": "KDH9wyVbfmc32zY1c62333Bg51BQUYctUr3zcLSMSG7hDEQ1bNueqnNuFL8RPdxnSfZ1pLM8KmR9iQhDUj5Mphk",
  "key45": "5iLYEU6eCc7SazTBoa4fVB6uQqzZEfyzuxHN64UXxhGdzPmRvVTVNvnWUeq8v88UBA8KAFRLQutGJ1qTCF2S1FoX",
  "key46": "4nhLXJg9vCJ6u9BEZbHALEn2KGPdVyNFwFhTFD5Wz2V79MSWV9sxrwrDokzoN2mNog927eWx63JGagybiRMneUrW",
  "key47": "QW1YEsJ8mNGda5LdATCG3y4VKuZFvTt4tp4od8iZpPYzTusGMBmiJr4gkzWAHWoPFQ5LrXqkfpoF3SJfZxGzWA9",
  "key48": "389wjfLA8fmiw8d978rAvQKjybkxCZJXTiXbp7vPqiEpsxK2WCzTWD4CJ4nHqny2uH4L9u7Qj7KT1NG7pa3KQZru",
  "key49": "DfPgbLBW6LXJLwQbcz64WZtepUpeVKBsXNRoL73r3aTLSMsWGgb31RDhfWxgRChYmF5AaMpmp34tkuhZ72xgNoX"
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
