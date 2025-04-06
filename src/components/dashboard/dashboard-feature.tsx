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
    "4BtexR6GH3MUPFkXfdsDyUgr5SStTbNiHXh13WPFdCTc4ybXuGZkmrGqXgPebT574t2sQSEe9BSyA6EcUNDpbiHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SbTSE1gPu3xH5LK37NzK1dq1xaYovgZTWd6e2gBERmF4K5KoHzd7S41hNSwyk31Wdcvf8L9shgw5h2bX9vsQ8AB",
  "key1": "2bCD9xXa3JioNLhu87np9aq9FAo2vuYECyVPgx6xr9D4Ppj4dtbP47QKD8KuAe6wm3a3iFnJfawALG2XAcg8DPiC",
  "key2": "BgiP2LhKfMBjBCwNibbEErrW1gSKPfrBsH4LRZajN3snUR3RhYTyKyHG1AvUoo8Fsgy3tHbFBsSTpPbQJGys5RA",
  "key3": "QVCaUumJfn1AVqosHKB85MYkcwP9aW1HFD9CqccAGM3e5bLh2gdNxGghdtxsXj1cMgXBqZj5QkTQ5yK3GEL46JR",
  "key4": "89GQNnykShyFZbpef9GdvN8Nhv2xGy7CtB7wPGrHX1m79dhPYgVEoeqd7yArEUt5x4yruYuaE2tkJW4TVUBm2MR",
  "key5": "3vKsx98FN8V4KCQEe4XP1LwpjgdGhLJXaxYJoMgr3k9oPLcemh9UXKMZRr8RrEeAFshWpQgJkEJcDqopgmzyUbu2",
  "key6": "5qnRuTiEUKRGjqxgSppbckUNBmSYCmFkmGKjKGrwQ1HXYD5RKtbzb27ASkN9qTqUyazCTJdCc38NSUzno2Q6t92P",
  "key7": "5tnwBP3zATnU3uGLtevYrTLUFeMXEnHa2AJsW4WPTJERXmX7VEBDRkdSmpCa6A4V1dGg9eMdYc93UqGztj3PqdC2",
  "key8": "Eck8vhvCsKBX2qmhdWGvReNEbwzNxVtbPvYVyauM82gvhMyMkctnC8HCQGsUswvqU5hfd9TEq623HAx2zfF4tKp",
  "key9": "5odR4LYW1Qw5JF4cyzt3A5JHUuU3NE2QgHrmVYfBUY55KLepyEVYwRCat3oB2a7FzmuvSPHQJcFqzFnMDc1mmVpU",
  "key10": "3kQs5eMkorGHJkf3zqm9tzWAj851iaec435vVobjG3og2C5HZ3owNoABi1WoYtnrZQQW4CTFAh2K67ALdufPKuQ4",
  "key11": "3MZW2yfuTautdDSNfvVTnax6wa7GbuoRhPy2LE22s9doTK2NNjp5JNtb2UYTr42s5WfJ83W4EE3mWGX2v8126rpc",
  "key12": "8egVeitr5NRxoxvaxboVXTjkRWWmnbCgBuyAQ88WGMYS9yscyzGr9YjUsL4F8PAWorJUYUTWHRFxR7xQ1hhUGZX",
  "key13": "4dc8opMgQgtxN19A92mZTK6jXcwmcseRKA842nxbMkX3ifjnCTVCdnD5QX7LHsaJ2hiB17y72Nh3j3ULXDM2DK3k",
  "key14": "xJFWxMn7ZwmY79dMb3q5KwcPtsU2yvDeMc2vwMaV9tBNGMekcyet5PsH4syd3mp9uGpZhHRJ1aeqxvBk3Vamywd",
  "key15": "RFTHC47HK2xfCzv7V5tHtdpmzX3AkXkgUxqYZFwU1Wh5GYEqgGbxa9uzf4CrRjChdpdCfi2JVcRm1qh8rUEFbyp",
  "key16": "2AJFGbKs7ptQWM2nrNz6e2hsE3og8d2JEGAJzPV2weTkghgwyp18ausNe6CScRrLUZVz7V2SHpXvVYZeG1kEbQ2W",
  "key17": "51jyooZ2riW52RkzF5mnhKXAsNu58wFxFvzsHdywtGfqXwZu9iGpgQH4Q1nvetLtvvjd64bKisy7v56tf2EA7hRq",
  "key18": "SuuNQBLsoXDqWyXQUQHbmKihVX8S3eJRgZWUjsZcSCGy6xYAgW9SLWsjekGCfWgSyY3vj2aGhuna4H7Su7tqrkX",
  "key19": "38C6LVwugPwXNnDnqSjv9Es7vBSAo9ad2u3v8QQZ9T6SWbXEiKDWwwhahFpTnqr7P4JDfpHqocz5iuayvo94gf5k",
  "key20": "BQ6R1BmtTKyW3KN6CNcfzgCYP9GVVtNstxN3bonjasQ9CiKQj9iBGt7beXK7XKpwWqC2Vt73wFmoZQjavQBq9zw",
  "key21": "4Kgfkfvk7MJ1Uu1yTJYWyTGUGcnN11bxc7eKpbh6eAua6DW4wP9hWTYhWPsYtRN8FyXmi8jR7BAvTLCQAS1GvfY7",
  "key22": "3LVmZ6945x8fxAMKLJGyMvAGhkLuwjvnYR9H7nfBVQFXyyjPepzMUsfE9n2ixXRE8GMWgcs5iX7cWztnoWZsMHDs",
  "key23": "5TBcT5Ws5EmRQgML8HwhDgZiLkuxw6EeyupXYDEM2VPri2UwvKrfWXMJdFW9X9MNYs5PYWTV8DzixdufuU7UMxue",
  "key24": "2cz6WjbRHUaRfecwbgfSA4a8erAruc9Y9dPgAghb62GSS9xkeSUBa6FiD8AxUoFcwY8HU3UVoQy8t2NrxMiD81TF",
  "key25": "5TggU8odpE3xF9kwoQX4LjFU9aVz4JumXLx3shLzG2Uaj5GqZTqS9iwHe9YwKKdmM5heYWXwSHSyZo51HzpurMNV",
  "key26": "B4t8kMwACuviCqRuZ2omAsbRhAJV1AxCaRGeuraJQLHdFmRuBUR9ntBT4BGMydxk9kQij8bgfJDLh9P2xEs9nsw",
  "key27": "2rPriGvNvGc8pxcHqiMbeXTtcL1rE7298SkpHdjbRdoh6QG7Y19FZ7emoTRksia16KkXKozvtBFpiRB246KscH2M",
  "key28": "47GVcBjkK5kP8jcMqjwFmY57MmzVsaFEREReDD2CWduBqcTfDJ8s1V6X6XG9Lq2hnQ8AJqwjsJSftZfN4E6Zf7ik",
  "key29": "5Td39arHktAbMXdY4sWRqsnzrz7j51gh6TUafcLpoBziSn5CLxvLDFt5L2XjpoSSYYPqjKNchYoimupXwVkUVe9E",
  "key30": "5uwjasXBmWHoczD4wmzifBk74ufPqAu2QjByhGiDoMKpRhNw9ZL9JiehcFzz67DK9jyTf8WGRCWG8gPA1uqa1GSL",
  "key31": "E1e3DwKYQ1HT57dcjBLb784RWAWsAPm1X6WeZczko1VKQwCjMfNh6tKdkVy941Nk2gW5AWnTRqnNKW18cGX543J",
  "key32": "4Zwvho72JJ125zoNoLbcvcgdgFZgjQZhvnydtv53FLXxm8it33wvRg9TgYcDtHaLu3KC2S8HkGpyBWY1qhgDgGdm",
  "key33": "3EPpeEidBqTqf7pTrj6MtNzQbJSuYecruLNZQ7WtJN5JsFJ6v7CZSeWauPoDhnidwyfA9p1WrfMGoat7XxeSMjzi",
  "key34": "2KD1JRVhoPuwh34UvXnvUvLF9fP8qvkQDaxsqmEt5QXygN4YutqaYZgXvAwvc4KZsiDbCxSpQbW3kr6EozRXcun9",
  "key35": "5q2yzdVRJjTx2hUff6Y2QyTxLLLMFwnuxx26EfQUKqzV8qvSJcJtsq7HgthvaA9B3cZS5nQSKgcFTN4oEdbMW12v",
  "key36": "3armDYRjoVRMKQmQqzSXwRtGqS9nKPnW6nDtT1PTW9fMQFCuxjaWQ3eAnceHcnfmy7JjJhJtEztCNXGMty7LH5e7",
  "key37": "26XB9NCpFc4oxbszgYxXY7GaCJpgPWDoAusAPDyeAmai2kLgMxBVzP9s4NN9B1BL71dsEaUNPYtSDjZX5tovxofg",
  "key38": "4UU2MiE6DPJJq2YGVNbZ8iSvioGgGZQeVa3wxxhpsbaQnYJBzeWTsGRcYLLQshoCDufKGTzb3BXG86yN2on5Vs6f",
  "key39": "3db7vNeVm37zYXHjbCdCTmVJ3P58L8sWXgWZF3Q3HsnYkbZwytSicwmEaeTRY462vQWvgnRQ4a141L4BSQtVVLT2",
  "key40": "fRfUp2o5AEn77QArXBoQnYkDYs5wyG5nz3UbwzGoT2W2SUaGSXsepSSjs3edZUpSYN7SXNhwJvW75tuuziPr9cP",
  "key41": "BUD8wjbmtJRUK8qWAD67FJfdnJZEDB4n6RCumVfw5eubjE74cwsBiW8Fs2ayhuePEJ5CYKfNi4Zbs9kV5DLsE3P",
  "key42": "4qUMjz4tJALD2Y36ZrwNY5JSAW5tryFD5xrSzumHVwcv56U9uVicNoLEC9w6SNLJmHfdDUUd9mJNqwNisZJtgCQ3",
  "key43": "4re6Du9LLtpnVFpnUrVrftHdPDfnaHqt38SBbrfbXRpe41KKqcRbBDHL7yxWiNaRSs7KybBQHEmhEB7htKhjAok7",
  "key44": "5rWMGiEW2Z3KsbMCPnZGCMQHguauLF4Ph9axgNFcAfScCzTZ4SLK5nHf5UR5LbLaWctZpcLEmucjwrUTAs61QgjT",
  "key45": "3ciogg2Pkbhh1zmE7ARQexiqW4ZHwmi6EAJbYCTHYFmvM7ER7XAr7Ajea3Uv17BNpRU5vPLDd5vRt4DpMW8PAro7",
  "key46": "2Cp7SUUnDGFpdDut14RyfmDNKwnXXybZQeAfWf9epBn7pZQBWzRvR1CiDzAzV75G99BUGZSBiG2dHorbTumGY4Pz"
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
