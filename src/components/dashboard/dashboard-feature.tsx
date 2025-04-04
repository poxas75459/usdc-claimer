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
    "4CwogoaguhrqZmXCxzG2hArE6mw1QZaymp39BTGwH3X8oYQsFfwxif3RnAY4oXedYt9MBWJYvm5eJ7Vk46pCwBNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9zpX8No2jPEXDaz1ugz4d9iu71GbiX7jc95YR52mzFMmw5g68D1GKoBNnawJ2eL8UigASMZ2xTA2aeggtZ6RcK",
  "key1": "4Xum3nkTFKVonMvMPWAnPTneY3bgCvUegw174bWkfWkqEr4yt7EqozYS7cu52R6aTNUS2ijwZwwPqs9Vs2vYysmA",
  "key2": "GKwgM7gwz3ogMCpNPXKzwxwwoebCr5paQLYZyK5CmEi14P63xG8jMJV7VQFDfThnr2anPmVpQFRzVpu9GkLQbwS",
  "key3": "5En9AyGqPovRWxC2v6eLYCi3m1Vhn57JLy5cscXXwPDwLXDGQx27YYfFQ8VVuR1wX68569EMDCknNq8PBKTizepg",
  "key4": "KZmGTvVUGhhegA4P5n6pAvhG6RGUukYFHaGGAvtqoN7GrwTPYG8M3aSJKjKWuL7qYkUZZU6VYq44Yk8wjBvcSBL",
  "key5": "3raMKv5QsPmspNw4p3RKVxubjBQHyzJKtbpEWV1tAofYB4F65ypVRDhuq7JtLbnRpa7XmN84S9PDjmTPXFfRLsbZ",
  "key6": "3LK3fYpbAjPEB9dWHbfcpVMKDJjKANXdebDmUaVjpswRtKgb9NcvsJitqwP5WcM4TkY9pkFGmmGuS82icgdonfmB",
  "key7": "LYqgjdxFTP7bDKX44ZrWi8UPXqbRdTPehoAHFQ81WrhL4QczibZuWtYkeNA3w62Aos79LuSJcZkzH7We6V6WmL3",
  "key8": "48raYQQgkuJNidFMhyXkekD6XsJ6tGUfnHYYB79RQwHfKGEVaZ77PCrhV6eQbLu1fqdn2Addx6PVXi3sS6iXdCTD",
  "key9": "3CYZ6jHSmCU48sQhg2DSxWtbs3pJdZFFnJJttpBTqV5svmb9Y4mfYsy2AwS9FuMkkDCcHFy3j4bNTm3RyJFrq8GH",
  "key10": "4xQWBCwkxCikrCJcoDAG36xFdCHP96PND72tE4cK2i3KGYGjjB78uesXjt4LuMvNatLrXyZ6uDwE3qLqwfHqhmT3",
  "key11": "oJudQgrtJCtUY6t1hPaxGMZUEJK9sVU6MqUbJXuY6D3LxoN8gKDJHLAsGsrmCGN7FxmwTvMtd4vTY6vCDMktrGW",
  "key12": "3ibMh3jKuzTCnepBCUuytG1NHCFhhsfHj5DDQzznKizxd17xx4sJhYjQEGn1jH4iLK27mkMJbUwhpdfhnXwNKngA",
  "key13": "5P1Pgm6fGgraSDRk1M6JZyWzSR7RbxHGxFjE13A3omafyq2b6nzVxwQpU3KqKQW5pGx85JU3KR6mS3w8kdeg4Ez3",
  "key14": "5QV3dSzXaJ5BducuUXduE4aDm2kvUqVGHgaoepq1sUWrNNEK73U9DGDHxKFGWcVsktSeYjAgk3VVgXMxUFUhfphD",
  "key15": "4CUwdVj2sEsQ9wQuxBprpB8NKYseXjbKV6nvVaUb3P1YLSDydPMStwtLKK7L1QMBBrFi8oLAVwr35pLrz5ZjwG3Z",
  "key16": "64yefgU1gn1LUzaBBTErSpUwrbJALt3QrJpQUQG9t7GtaiE7qafz79q5tP36nN47MU3w67s83qL1uthJFRoRAHHw",
  "key17": "3FPVNcGB74e1zgqodRv3R2hmnc9AsJPqafa16wvLgvTWjMue6Mk9ZtBeU36rRZPBbQSbdHp1eevZVtwf615otQT1",
  "key18": "WVZPAzgxpxqB6tbgnSurQmxAG8CjdNdxZr2amQJhbdzHFTLyLTPWgbrS1DdTNWNnVwTvWYsFc5w6TXNTdjJ1G24",
  "key19": "4QKpLDn8hXRCdKg9jTE11ko7vsHyBw8qQTx9Buz4eXFS3wMjT12kGCXUTUe7vx18BdF4FD5Zw45QwdNcxodnrkHq",
  "key20": "WE9Dibhh66R6YZSv5Hg3a4x6SVT3n7bdfYMRRVvC72a1d3Cce4RvAXUc8TYvacHEWykWLabyfcfdgvdqi77m9Ry",
  "key21": "2inzBkqoyECgnjBsuftBfWZ6TmGtZiQVTGi98shiyoVAgJSg9Q5B5QpgPFmr9yuyJoQxFNX5vTGAF9NfsyZ7UiWy",
  "key22": "3YuCGf6tmNgjv25f9EBy6LhSEAmd6UvjxK1xQSqqL8FtzaVb4UyexizF3f6yDUzncRRfQ8f9YCVDfjRwtABYdDHR",
  "key23": "58U4GB2W3Gn2vCr3wNYzeKE3xsRWvBcJQVwTsXe46cvi9SbFTuxLosLEK2Y1EwzQoS8iJJuia7Y3nW6kmKPUbjCk",
  "key24": "35WQxfiVDEjAFnpboEuRrv1iVz6rFDRsHgVtu1Wb5AR7WR6YCVBNnduqBw4zBpdUiDwkpdzWqQz57P867rj7Mw9W",
  "key25": "5zyV2XSAFJAWAAADwLV84K5L29SPzbvAazpigFWoqMyYEFMeTce5qt68Sx9en3fJVVU25aCYYCfej4U247XQ4aBD",
  "key26": "2TGt3ikyAc6VpwyL5wcEifPxUBhr6xKrDd9zoFs3CFkndrQxSqs8KVsxUzbEBUVhYpa92eeCnqjDwSNsS4mrB9M1",
  "key27": "5ZdAtWMSSxDBNFWd7ukpDCrS3CK1tZZ7wyA46RTKn3foke3zgWnyeMFC2cTe994cCwuXCNwRpynHecMJdEtCWGyU",
  "key28": "5VqJbbLMwwytuUtnW6AsGCUAgNqTTbo27AY3Q8NStyeULvRe7BGmVtnE5t56GvpgYSzvDn9BnRzNWURtnVzQVgEf",
  "key29": "4MMVGU962xKXZyx3x5c3V9BSHQHMH2hyYPpMhBrswxJPCjBJec4XhKZAYuYCgAKCcjPa3LUJTBiCyfPosUwvxhaM",
  "key30": "4fAsDMtyXw99P3TzsJfVfh1tYBXpwtoAW33iG1zcB1G2uRHCZrX8C7P5j4WA2mwg18VH6KtqxGDb2zVzDifnEttc",
  "key31": "4ehiZdMyRLjpUoM8j9RupApqSWmNNFLbWdGXQDSsqJLgX3Mvb9J5EkiLEAyVgVPTHqDTBHm5R4cdZxnJp6TnS3FA",
  "key32": "2AVuoLowa1dSgiRSGmquFxJRz9N1zL928UfrYesKiZYxFaeznFPeqE8wnRPLYDKo2NBcQb7EpLJhgE7jDmm961M7",
  "key33": "4a5yDF9QwSY6TTaxLBfHgabcKx4G9TK2Lkq7BBu3kVGZSn2GfYZRum9Sx6n8QEBrUSGbZjss2ZsxJPqT4bGjpK4a",
  "key34": "38Zx28QV4sEhj93qQJLUmiV5xnhaiTpxMCLvivY737157CpB1jqo1nuSR1VRNnphbsjrUj1tSgZJhiMdFn22yoPb",
  "key35": "2PY3vF3qFDLmYq6ghivifkBBkZmhmfTGuScFffKcPwPXiKxoMeK2vrozyw6DQzLRt7cMd9wMgwvgDAr59gk8R2hB",
  "key36": "5Pod7vcLFC3cPR9xzSgxGWXrdbCz34T7yHHMxMZbaAJzZRKhw83PnQQyk69AJ3mvjSqBkET8PxhEjTi4jLggrxcD",
  "key37": "2kRfodpT7B7GfTH5g9ZMFiJjKy1A6YB83S38uTnVwWg45uZkLRYXLBfZtEVAzhGGmr8KPQyNvqNS19C34quoZwpA"
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
