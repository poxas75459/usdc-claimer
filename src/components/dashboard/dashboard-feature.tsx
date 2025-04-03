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
    "F7tZ7ZMojM9o8ipSXH2KMswzb3AiBkiP3LRT2ARWmGke34Lb5JPJFhATRd1kSfho71bNhoTdFDA32opPEcwyMYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xiTJvWsP9dn8ukSmPYFHguuU5zYFnbWmTcCEb64AKwxw44w2qnETBW4rSwpCBwqdtFSnbothCFFLKLe3vDi8ePh",
  "key1": "4xTqVBrESugpjzQGaCbREWguZjMnZngZH5DYEeq7ECQN8QpEmxyGTRB3WLqfSH7XJ69xC8jo4LEDxEK43EYjotsV",
  "key2": "2wb5QexeoEBfBPhAgXyRXdaG6JEFXg2RzrM31j4dEkrfBaNz9sjLEfBZVkARtZhTfrHm7fMLud33XBBzr7un8hX6",
  "key3": "2x9kMgR9YsbtANyuEEEV3XLuNu3PPaS98ZRAzaGSC5aoyVMwWDsqbgXGCXdyHbxiz3kZaceC3useWh3agfadBMfU",
  "key4": "3ihtp1EtAronPNLT7f7KqKmD7TsNyJqa5LJcT556Ww5b95HADdGshYruRfCQ82tQGEDrc3pGvXHVKqy7DWFh2L76",
  "key5": "CA8xJHQeQjCxj3scBbK3R4phBM4h71xDi6MAq163hg7mnDEKhnR6y7AF6ARdotkJ9HR1iBpAsquaoLifhNMJh2s",
  "key6": "2odrzYv8qXDeD1Bx9G6R6bvsk5uXWAWVkVge8tFsCsnW6vYHYfJCuQDyzgEhbtj1ZDPLFrMavyfdRMMVGWnDgKha",
  "key7": "4SRsNmo9wm4NxmrYBmXm4eXzHoKepcEMewCAdNASHKJgxoeuk4Lwv7QFCpGZi1zjtEBr3FwBbfx9MD9dsrEvmGfr",
  "key8": "4gnMmpSVQyqAX7sZZkEkujwTnT13VwFZ4Uta8uULVki2N63Dqf6UXpPudAZ8c6VS458hGte5wAXdqZ2MPRBWA1eX",
  "key9": "iKMFNncAyPRf1M1xVLBFjqnVsoin4c1ho94FgPpLxub3czZhRQHPLLEBAoA74nbKXEBkwFDpkHFDGPix19M41aU",
  "key10": "5QoREGCgGMgL4QpQXLD9xG8JYjVjEoNou6EApeUCXtGAXn7ZzJM1iTDsPZPG8SeTph8WwLyubKb4JRaxb1CJXDVv",
  "key11": "sLZwkN2hU4KkcCGkKJGxSUq1yzb2HynPqn1vNAvUnzjRhyHQGGJsMighs4AXVk61ZVAUM9NcQ6bEDeWheyNuBhz",
  "key12": "5fzxarf4gEBL7WjLbY8JisZk61mqicfNreJW5jwFjZUkZf5iX2Jg6RdezVA8uSHaikD8Ay7gDNw9NY7hWhoxxbaN",
  "key13": "2S4HM5YbepTbmbDB2MrfjfwJhT7SYA1L8yyVHgpEKv5nzhQycesN96C6HuujVZeYjd6VkdDeoLk9DxUBU7kV81AS",
  "key14": "2isnn3im7soPPQp1vEDtAPrmpUeQtQ5sA9LAWES8A9pTjRuP4gityEQEw5M9qywDj9cQokHJUADf8ZkYRbLFb6F",
  "key15": "412tXoGWfXSvqW66AdWZfnNdjJSkuF3TkMQZsaeBmcsShxZTf2GJzCHTTrbXgWkmxxkHcYwr1WLGLxVd8Grziix6",
  "key16": "5hbNJioYaiwMLzdQJqPDA2dZvbs9dkrqPC1VLBCDiGJCLTD7WG6R5nqJG6p7j2c6qXVkwrX6ab2Wh5icFKU4uosV",
  "key17": "5MEWn4vYjEtGJexP7BtGbKLga3RJqYissNA1EZ5NhiRvvW6dKkFGpdadcNvAVnwsVgUEWNspqX5DLeamJkUmTpQV",
  "key18": "2DMbgbZCVDRS83H3hmTTb2GztP4RsD4maubzQ33xpA8ZE1sFUhqNZKWQQ5C4J6GCjrQiuSvEiz7fbQxZtdMx29iR",
  "key19": "4UWt9c5wP7LiXv9jYrvqT5fYRpzdmY32Ccc75DndXum7D5ekAMkSAsgpYE7TmgDrAqxarcspMkKgS117dR4nT4je",
  "key20": "59dNrTMMrUtLVbdFe7BSxoPSySSuhtVpPoAEoL8rS1fCbByiKFqCb1hyFHPbLHAkCETaoQ9hPEYCNxUatsnPQZvv",
  "key21": "dxjfHWqXfeoosfgdceUN4bX2rfTwwUxbBZLW1qYTBQ7XFCdvfdNefLBp6tyMnXbJe45SC95H5d3mWTt3vWaVDYa",
  "key22": "dTD3R329pnkC79uegr21GbLotFSEDAvybjSxajeY3iNYsYqTobA53Q1zQCs7uYUMCj65fSZ8SrLYxGHjbquesTM",
  "key23": "cVSWgBMoiHsDRUa99dQL2yEbeVwKVMMtQE4N7sBamypJRJQnQv34eU9b6YMbxKgqNKb9fh45MFuV9hcVNohAnTq",
  "key24": "352rvKzkZYQgm7w2iUdGm9NN3pKxSwukchThHvKngrwtpP42sxu8NpS4JNaMbdVvHP8FsEi6maR5tYiucbXQXk1E",
  "key25": "3DBgdhkPLGMGSRqW8zgvgzyfiau9Hcxb1xNQLXd1F7b7Y54iLhKeoK6uqZNwBipY3wNXNEmzcxSDHgMn6WM7xcmm",
  "key26": "nphfxcjEm3ERYXPcUycQk91eCdt5o77KFEuRQ5rrWXn1RF5ubbgyqShJFAwU3K9mJsopbP22qTczfb56wS5QMtc",
  "key27": "2nemjkitWGTw9EQY5reddNhkzkzzeFJ1PGwTqtX52om8tFw2KsmNuC8RBvBV3DiKt8Jn6CczfTUNi64AnooQe6AM",
  "key28": "eZu7mgpzwAASyfVeixWffYg6xBoz5mMZiUiGqk6gnLNs6XWCN3ZsRCjRuqwCQNNQWU8uyiuF63qnw1gPUbPVo7V",
  "key29": "ViUX7gcsJehZQbmQUkyU1Fh4ppRkKb8SvAFSv5DFGJLMhACk5ep6d7fDWcPzf7RWbEnGBXw6Q5jNoHVQAiM5m98",
  "key30": "3Z9CEdbdMbRJ5K8k8ruq2cwxc852Tqr6WxLBxoLgu2NciM7tGFHQVhfitaDMdstcybfvAwUsk1buEiKmXbbrxvJc",
  "key31": "2btm241hHpzz4CxfngYdZKpzfVHazcTT7HHEtpw7aJT5kEGKicG2nwwpAF42W3UzK3H74LcDJrBcKQrgBxENgZty",
  "key32": "S87WhF1nqbZUc2VKoarW2pKQLgYCGRbgD8cWBFXRXQw1KLBr8uGDYnM4756uZvh4pZ6LxM4MDskLdahVeWS47ue",
  "key33": "3Y2vfdAYxUkPAdPTAf8EZBdfvfjv1QDBHXvzcB2wCFHBGee16tLK1yhxkYQCZMtqVorb7bg7rtGfeJMwR5GykpwJ",
  "key34": "3ARGYTpjxekMzrKZ8RihFriHTfiqs5CDsuxYixGkmGFofg5bdmP3X9qqqZFMPjWN593Jes27oQaVZ6dVAmrHH6F8",
  "key35": "3aj3Hg8HssZ2Cc2MaBQeGELykEr6C6zxcXF9sfn5mUrd91Jou84KCRd1RpvutRJWExvDqWwDXSxGsXVKWey51P7T",
  "key36": "2cVdZ1z2WZwiE7NzFugefFqLLGs1bvwPXSjxuse8RWziCQfA1FshtdVLgiupuh73cR3F3CNwmqdtthrNzBmDMeoP",
  "key37": "5NXLnJqWCjPbqJs2wC6AnFGKodNrjhciFAknPcU3aJS7EaB4FK6Mad8bLQiGvsvZRYDRqiuaftwAqCMEv4FgxmFH",
  "key38": "5UVAjrgKN3ifrK5ob9ikGxHmJXJiW9PE5mtZsYitsdzhtSqTfoaDiPRsPgreXMjcUNY2C9PbQXvgmhZh9zSo9Rzp",
  "key39": "53rR4bVZE34N4WxZ3B5Lv1mNZgEueNyZxe2VzcYDHnw5v9aWcCgkTRdZ3xiX3py4bhrCNXNbTHGwbydoQkPS3sji",
  "key40": "3z1xZK5JHxXVktQyy5mAsWruoGCVQ2aH8tgdxxLCo2mcZFEeYZ6xgANBAUS3sznPWuUju8YS539rDft6rBDWLAFx",
  "key41": "4Ha7dZYBu9ZxHKVa8JzHQ2KRCF5HwqQwFQsNfswepnY4UhAvDFPbArqXghtXsa1szCSNXU1NkjrT4yBET29nMXR7",
  "key42": "4X6DoUbwyPKSiyZSQNP7PvYQ5iejxqWGoxVd4c5yYKhXdH9CU4tuAu76TntgH3AZHKrsZtWgt5jvv9Sbvhpq4bwr",
  "key43": "2HNEogqjsS4q6urx1s73KDC6ySpoTaFjTRvLd8HY4xkckTw42CiHnZhzBTA2iPWyq3qvRx7WyH5nbLpgqe7F278B",
  "key44": "4t18PTuioGtRSZLQ9tU2oHMjgKvYnbZmK3wMgVdXuLGbqozyDq4YRHh3LXSEQheg4LNedTxzipdDMfAMS8K4xZbt"
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
