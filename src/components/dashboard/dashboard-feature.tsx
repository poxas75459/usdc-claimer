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
    "2KdB8rpcs9fHUsjjRyfSTDRwkx7bVAw1x5ia6jZ86MdzrB8tE3mvamKHhzm4U6PeFuqX3LMC3bHeABHdQbfhS2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8NGX3eai7t2qNpjKHC2yHkxu8xH1nXe2swnswgekRmdbAMDzypPk8MbdFqiWHFdNUTCkeB8qdH4RxN9JAGJV4t",
  "key1": "3k1ih7yyrotTEFEZ37V6W2xkswY947cXekypTcKbfbjBRZLuRt4idCqnYsAdvT9BNZ2Hyob9EeBnCPLuS3Ks87wN",
  "key2": "3r5mBhnsBkmT8nFVwwT7qTpfi4FujYtehUqAHczqX97LkiYusyLxjPdcg5BA2JojqkB5yMLqjPTKVu6U4wGHBhYt",
  "key3": "4qUiQhrrpLwL4uoAzufVHtiP34bVCMcyJr9wgN3kTeSNgbyGvJ84992Agmxn5czD8cq22iXUuGARvrCUacQDNNVH",
  "key4": "rUr4Lyx2BTAWw6sYKFUhSg483X8JWqNWassCatqVSbVRy1ZviHrEkSM4oThYzLWgJ7LCDTfgGsXY7yW3kkBA9FW",
  "key5": "57krHtnKJGKbtbZ3usnwuYmVAxVjDrQmbKT9ke6KDxRa41K2oszYPRxZABYy8WgcF1NbKBPjJXz2tPqWwG9QZnZa",
  "key6": "4KBjUt6sjvUpFWnjf5WRDu6eaNhT3rppdsppGEo6BA41wwpTffk1HUQgHVmWwh3DVqdB8D9NCMhrKirMk5Wibcpd",
  "key7": "7YiSPBcgCjMJFNEgDeTifZbs6hmUrrR6tPjDPZNUsHGTFk7GztDg55SMTjBtMcyqFsiix6zAzKEkWW51fVtPrwJ",
  "key8": "5XF5KP9RD2oGDRRvost9LSrXVHsfadxK17ReAb9wBVQnragySJbUuojSwUFLWuRu2z7mP7nq4UXWeLqfW1wGNefH",
  "key9": "5MEb2JbJmoaw3TTB8PXuk5UphzPbfYAGuTjU948PbuRK1DDCzHqwpf6xtDAsm7R2yWakVBhSmCNy7u2SUzGdsVTS",
  "key10": "2gN6LwwuFpS4X5zSc6TPZrpDM8pecCU53EqWqu4gFn7wVW68k6yF4Vdk9woW8k2aQJyQJyHUo1PWb8NN853gZCVc",
  "key11": "5mbSN5WsHd1aVJuJiDNZ6sVVpjCxQ6rziaeAjpLnpHuLvWs8Up8bHcFt2w9AsGmQ11tcqYkRa2B5g4WjtcfkVM18",
  "key12": "UfTUFDCoywefrbhJemEnzmScSNYo1xPKtVfuZKFHMJKtpcw8dKgRHEoEGvzb9YT4yhqUzqRThPJbgmR7N1x73vm",
  "key13": "3H1Z3K3STJ6Gg18n9rn5yKm6zd7jDydwXWQbB393zcwTkD9wYeonZzr68yb7NiVh4J4cr7pwaJCHBXk3BLSeHLTa",
  "key14": "5ePJgUnfF9tqmLoFPvQoB756hAXNJnXGJeKUmdNCg4Dz61xQuUYB7W3HcDzSa2NLNBVpYAMuyN4idEQFCr6nZ5ch",
  "key15": "5xAK2HoDFSWSKivZksW5QaiNZcSj4eJYBCL9DiumFdbFPUJxcBxJ2Px2JwVSd7VjuLXEFDtZTf4gBDtJ8J7VSwaq",
  "key16": "3gw4dpeBuJwMb32mL3JSYnEspue4MtzCpCzk8rJWsX7z4LQvEZUvQnCYD3GF4aeo6EkWVZv2c9mfm9p8XWsZ2Yhz",
  "key17": "3uzcN7Bk1MQsc6YeogSPDNqd9nZqaMfSie3f2K61srcyoxNrSJ4YwoA65R2zgSwqVnCJb72mCe9K9uyYRc2pCwCf",
  "key18": "4BZ3AB6yJ611bKKkpa5yBDDDcha8S5NUjCTLubPAvQBevpncwwbK476m8NW6ggDRmR9v7sPDa4M4zDKxHr4MsG5s",
  "key19": "5DTnXJZxSsmNN5KmtWY9xw8QfrqAYPd3rMFshzV172DsTZvVEEe5rMLmJMNPHnooHYsFbrnP59L4E6k1E48mjs9r",
  "key20": "3Qe6TEsr5ch6RVMDiKuF8xYXR2pR3oDBymfifev3qKbc7XNdqZNVjaTMkkYMbxssXVRgFhXAWDMJ5oTyFJN2kHsD",
  "key21": "5B9qxMaujkj4DWhTLTwaZtJkdVVNy71hmtM563MupLsRBugpWG2voe6RcwgyYL3pFVHUxQHHEVQ9PWwczbA4jvfE",
  "key22": "5LAgDdzzGmfTXonSeCA7QnK5hFFJdgLLQc67otTL8RpUygWnDx6JYckGdy2VEa55CTgbPWbkyUCBxLjsBMLMSMVN",
  "key23": "4GTRaV3XDgjCDWJjnbGpVKXneCfhxpdmYPdDynjwreMdrs1Zk8UXVZvSyPmzYo9PhFYAXNFmy59WpMiReyfdy6oM",
  "key24": "2uQcFy4LAYBmbUdm1hoEGBjtYnXpdUnoZUMcbC6tXKy3wksQSRfYATXM2T66QuPEsAEeGhJJo2vzgdRufavX2u4a",
  "key25": "4sNVrkX6zsAUpDLyMuy5g3bpBN5xh5qsYUeRwad7Fh9bj9z6SH1QgYJs8H47mrHMwAcSbYVJ6gLkc2KMDNAzh21c",
  "key26": "2SZgkKY9JLTDt7ezjTyP67kAi6YSUhWoeos6SUqKttZ726voDEwRAxNPNfntWmbppsA56yi9ppAGqSXd1ZBG5iSM",
  "key27": "ophLa2p8nfzmC6PCqf3W5hFBw63TG2LkGea7YZXG5UQaeufBFo7Q5yxWKrboxRhfX1yeBHHYpwiREjCdJ49qjxK",
  "key28": "DaNbXsiDE5wMw67XXaa2UrS6rZm5s64KPz7wV2xdgm55bzphaFeWkJUJuCw9cLUgsGDrGQoYKHUwNXrE4HHRkLV",
  "key29": "2sFR9QbUDYb9XQna5v2mRkHGDL3nDg8Rd1NwGr7YwXFBmLptwLfLwQxFAXveUmSpTWovTrAw2zAsBiBHKK2oaEn",
  "key30": "4GSzj1sibXmpHHCvqdhczeFMBkyh6nxXdccky8NZevHKSThKyJbz6edWDgSvC9oE7pZV5xL6LPkHwJytgjBDgUx6",
  "key31": "5xhQcEfXksdcuy78MrW7gwFJpjqpFvVYXn2gqSyKnNAPCgyAy7cGEDVDf4KDDGM5QcZAPAXN69B3ZExPJVF1hsTm",
  "key32": "5PPDioWRyxC4diMRb9U7M8XdbBKaLhPXyZ5JQ543rGBzGRyxWW9hPNcyhmrJGmApRfGPU2R1TetGLSwuy5jeSY9B",
  "key33": "5CqwKdeDxK8zsG4pATXJWzTogpeM7uK2X2g5oAGmk6DGypHfsqKCac5C9Htw3xjuLmbCtGJr4yDnJ6bEfSHV86g3",
  "key34": "2Z3GqeEWKmzefHLmLD9REx7PRymqXRQsfqKnsfxaxfUVreJKtz5CNRasWtncSGY5LBjDKLtdd6Z34JDiANmgaxkn"
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
