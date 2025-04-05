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
    "2GtC6qEviaoGKJ3EBTf2cxR8JgwJMkbV8fCe7Szp7ExpEeGbKdrfi3rNPj43jzEHdxAnv3BYuevLdZGQvNS6tQv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyxpr6CweVVDSnedAHY8DumgRRLTozKcs98xb3q2fLgLk6wqVZFfA2RyUEp7itcMxzaf5kJFwpyk4CRXMmKrCUf",
  "key1": "3kQBj7AxvRkphrUkq5sChH6HsRmcqwaF76DaSXo29XGMyHShCrxaun6BGGF3f66CFEdf9vfCRro3M51LZtGr3haM",
  "key2": "3FQt6SVygcZwoGNjhG1HjS6sDEeyPjnqNrc2VzjL9VKNfumKfFGcu94sNpYMpV4TcoE9bLVN8VHEnzwnKi5fT5dw",
  "key3": "4JW6So9LKdZZWrn6UmcCda6mLeza2CtWt48Wyf7RYZm5xDA5P9XyGbBvgd3nTYQ1WDp2BV7KHrbAxbyjnqUiKKtE",
  "key4": "2AvQVD7evKFNNXUZUfvXNCnDcDK3D2zycgM42FKgzB8snBDrkcaQPAZD988wtVvSbfViLyqKx3CHdn7ABRH6MRNQ",
  "key5": "3hKfCKUYqSHw1AKXudqDV4Kv5zGmR7DaWxym4GBCSC6vhxi3dVgq8KsjEtVD65x5RkRMV5qDr78uCuKsgYLUN45R",
  "key6": "uQksbNQSQyC2TXns2qUZif2w5UnXyYJKsVTMPLauibjrziVsfA2ivtzS2ytiExYpjsu713FkTNAk4HcGSYyu6HD",
  "key7": "xgKCmifJ1qMVNeLtCsez31frUaVSkXEuDA1VjZxufgks4TfmXJkDT93DLLGL3yw8b9SJy3S4guZiqNnw9tomGUs",
  "key8": "hEsw2ZEabgRoWjevW5omCCqtzqP9RdRRm7BA4sxAR35egU9E9bJ5aNcDAJgD8BBr1aQWDJmW8vhNcQ3shNqY9dd",
  "key9": "4TT83JJceA4my9FKGTFGiZZgdGWkKrgaKN2P8pQjUpoWwFrsUZ84hzFQ2eLft4G6iM865vVGXKrTZT7Uj7CzSNwJ",
  "key10": "4hxcx5AUw5AdFbpUV6za5qNjWhLHwQsAS76WMUrge2AQwkSdW6MzQ59YKxdUQP523yNKPPYgxu1JZnaPodXqmU2s",
  "key11": "joZ2jBDkZUwz4HebbBCkoxxWBG6eeL7ibVzPYgmVY1QX5kuFBXByDmypqB8d7yN2v9SExopt2AW65iHEm7EZaeA",
  "key12": "3K8jHVpACECKfDxvMSc9awwEaA4GxZh9W4mde1x5p4PefDwYKd1d9gXtPrNscgZaTHGsCQg8MV4BeZv8FChRuTcZ",
  "key13": "3zLLUaj8pxbD5ZreEFvUTFUmTZMMA9iDsUrcYDCRrr5K85D6B5cgJ6Urq1nXyHwrUqg8Me3eMemkvuAc6LZQR2gp",
  "key14": "Qt8gLLY75YDqMmR2YLmvAD6eJvWRQZJLY8fwT1BC6csMBereuj1Sq237dkSvLSr9wZe1eRsdX2FywFgogYSjuKX",
  "key15": "5W4z4mcBfcNEXnzv52Edk4bEYbRbCyw1bEbeVzFvYEp4MwT61AA92AdpqYwUCXpSbKbc3z5c9LzxiiKNUMsFajaX",
  "key16": "2t5wkMhXZDg6mJd8fCaP4D7ARhksATycLC99rVHhgXBEVubGDAiEwk7WwTd3LhyGGyrjwR8tM8h1Zfj11eG29M9g",
  "key17": "4wyYekpMTKdMMaVJeoVZbLPEP4vqoYoW8FdQyUFRBV2jf8pxvGnV3ByPSKaL7C9tSr8f5cZxHd9pAbans7Sj2A7M",
  "key18": "4M7GaN5p1BvzPoHQQUAfnnh19YFaVLEzUVydqE6btgjfx1weNpLLzgqAzn5m8CkG91G1ffzySUrUVHgmNDBpG62x",
  "key19": "5EYaMtBdR4yYcckJE3tYGHf8hSEPix72vGu66iDEFiACHS4uG2egmHdtUotdQkipWcW9krG4bNoCx1vMVVju5jMU",
  "key20": "3MVGGSr1kwczEYrCFtK7kSZF33Ehy2S2ermm5iFY44AtZ91TJ29iSXTtxAzhpi4NLhBLRmKTcgooFqkmnpbNWkAJ",
  "key21": "4Rkwc1AhpcwV2qgmsNUPrquz1tt7wo4DynAThQP2DRuVdk4JKBzX9ejVKVoe1v4BBf5HRow6ajnQJrWUwXj92dw6",
  "key22": "2meHWPQ41Zb2ziMWVDuv22JbTwrytfzkyZ8DewnmKxyNKa5RNZBkdT1x7rbPmTeAcGDfatFahWxEarn99be3oAML",
  "key23": "3ykiD8rBmXsiwb4ApNXjaDdmuq8tYkVTokJ1Xs5vHYShVb36Pv8owi9HuKtG6aWpujpRiAu9pmAGHcAm7BUhWGQ8",
  "key24": "4btzaQdeNr6LNRdMvagQPtwnb3LfeCZrqZzRrg1U77R7uMj2JF3AVXqCjr4Sjk5E74441gzRJjptCHf7FhA8evhx",
  "key25": "2ayFnC8HQcKMRfK26KFGk22syTuZE8ZqMzjeaRFYhDK6DVeacUayKfpYaPChd1CQ4skc41pfWXUy7BLZ5gbTaxxF",
  "key26": "2AVxbKDT7BMRcU8dLw3y7YhfpiJfFg1Qty8Gj9tzFF4iiWuaZGTLzR7wciJWtekqvh9EGPxRPKNSjTbmzPjtr9Cw",
  "key27": "4H2nRUyRHBvVHf7k7Kxk3CwL9ANNX6ZpPVB6mrpv4KcPR1QnmetVoQpPEnHXY9kJ45kSgjyZ9YAYycVpkPPnTkTa",
  "key28": "4XEaedTuXrHFPqDujoaDXMFfUfPqYZGY1gYWivpuR6kx5eLY74kdnS7mM24DnXu5SjTm79hRzBdg8zvL4iLP7SHs",
  "key29": "3YvyYRbvRXipqNfVVVU5FMAJC3YR7ZZm2EvUT3hG2LxHv7nCih9PmwGLWB8FNdsWCh9gacz6DW12M5gEhg59yX9d",
  "key30": "3HovcV3i87vJtMmZzkuxY9DdCTmfTVL4VEuVtw71howMwLFCo6GZsSDtsT6HsFPoXrV67ZjTFn7kjTnRJqKnZBqM",
  "key31": "nDGG56cxbRw1UK7iM9AEaVMvkKxYFk7xSDuFMsaKTjcEgJq2dYSRwVK2L4sJ1C8XgPzmscuq12UFEiX5uGBnGn8",
  "key32": "2C58TRS2nHJtCrj9x5KBYEgQ7w3k1Yk4XjwuxDz5HELZTUNepapC9PsHSjuK7oXdVmcLqkUqJqwbpW1cZk3Rg9se",
  "key33": "4e7qkSzaSJzZZuaSs1L7k1YQXHSauEb8kVXzAyvDcEfvsjkkG6PsoJSp13DKMaNGV9mu6fBPFWCqFt8kjFsD1CTt",
  "key34": "585wwVDSCrBByN9ZksUS7bHQxqDUWdVuTx7B5JcXtBsGWcthHAxrgM9B7dztDtnSPquvMJoLbAreMz2twmM1NA9a",
  "key35": "4bkcVpGNExmv5cnbyhBwB5gvJdzTp2A9To4j99wT3NYvVKMr6wJWZT4WLn1aTTxxhJGLwtRz8diJtoQDhodnJw5x",
  "key36": "3YQor1YPHuJgxhVg9gnNcEFdyPgxrZrJzPybC6DqM2niZWnyymgvWn54gP352YvPVSskVQjeTehqMSh2BYVXHDoM",
  "key37": "3rjVzi86FUAbi613jWsNvgtmQjPmBgWZh2n5taLrTB2i3MdQQooj6jBeBfGjQej9asTbc6VRLFAGdY1xCTQVqY9u",
  "key38": "55DiSifZyAd6gM1HLMpwzbWScVEMB7DQBskUf3QWSaKfsgwHmz8HY2DJJKS2wetmhA8WjiS81AUrrkc8AfRhrW9b",
  "key39": "4FQFNH2ewFbGsHAe78uXDSCmteWj6Y7YACd9SSeHgZQCHCqUJkpKEZXvUeSzwFDGgtE5zdfXP8VhtR1Jo5t9Qiv8",
  "key40": "5YeAjytJBXdwny8ixamk6gXS2AQYc5nnRBC8LiJ42cF3qaGXwx5ZiRZ7Vp4GpYcKrgX3T4uSqyuVq6L3oZC7wGw4",
  "key41": "4fUCYQre6hPqvPk4Yzq9UynYXB4eZUzeppK9e4ntwpiJChcLYuhdwGraeaRNU5qxBcXhRyzE53AuiQ7fQi8WhF5P",
  "key42": "2z4bAcuHGbCMhTwmXRnSDHomoyDu4a1PsaFDKe9GsrfAj1KYvcrwBsgncDMFViqvpB1HSLBmbUPy8kL6j3GsHhfS",
  "key43": "FV3vHJhmx2LT1U58HtD9RBrMVQiKpraTBqFSPpQu28vk1Vja5ERqwJWLEwSX4jpT9zPSFrXrB9TFknSBaaAQB4m",
  "key44": "4psmccr7moWpG8V8JYMJ6y8DiV4ThYqYRCRgWXL1NrFqe26UnQ9YWkdWFgpUjqRTEn4zqNZ4ZNgYQ3LH7sXjdA5b",
  "key45": "4nqncvXNRAB1Tpj1LpyC7cEwvH9qMMSfM2KWdG3L6xkmzRoiPtNu6Soq8xGRDt5ZuPXtEjpYQPRV8FwpP3zkDkzt",
  "key46": "41vvtaFMaFbgUTu8myB8n7ndH6qwzi7rByLtugDmhzGUzVYBB76VFqiK7KjbuxVDJcgmxrrJJDKUSqdGSNmhVBcP",
  "key47": "4tNiFyqnbyvvJgYQa9Hd1VRcYSyeozdMsAFmDqz7GhDh17DfM1UMgX2BUxkppeoaRD4KTP2t9yuiwza7cmDvtxwm",
  "key48": "3bTS7Uyxhg2topqqdEMp1vkQyUnK3DB6C7r7zgHQmkWq9Ngsx6vQa6Ndn1ebc2boA1af77hA37VTkFGMg7wpybsP"
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
