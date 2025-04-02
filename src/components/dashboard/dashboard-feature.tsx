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
    "36nMxh6a45VCVP4t8rQmbAzFNt88DJUtqyEt62SLVpxYpvJyHbhuVbqUVuhiRwiVLNLTh2TL9xNFTsx8EhKxhd3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6LPxoiFpYf7jCgvYs4GozUdDjYNagg8ccEXQS47Wrgh4ttpgrTTD9NWvZaRFChpUSqwpYvAehupBQXbb615UhU",
  "key1": "3stajPn8FRdDzST9qfVcQgGNtH8N68UchQ4Vo1qi13DSMdMBJy5F4G6WBtBReyquBHtxHTLQaX5pyVRV9Jc3whm4",
  "key2": "3RpveKqdiKyRVJ9e6tZ3iyj1nfWuRnDt2zWrUiLdceCQe8ux5wpuFsYtY5X7Pao7wrNfZ4LSsnqj17uETD9kPkGe",
  "key3": "2wWnGbCTaL4K2N5WW7FaxLFocu6kjumMo4BFx9umet1prDjFos3F89pjcg9Kv5ZLjcvpr5bzE6afhAPaKZtyAMP6",
  "key4": "4EaQq5UA6UNNPsyg1JB9U3JsM5WCGwXPxjxk9AWNxj2tDbqkoGjF6VKi3aJzi4ZWhnACCvjHJmR9j63t83SExjLB",
  "key5": "2j82JaYXMHTbpVFVP6kJkJwDxx82cCGR3Zbrbw1wv1n5Sivh997CxsZ6FcqENjYRjBjo4NUmmoETXsrwBPNN2eMj",
  "key6": "3iiotqMLp6AT8S7ZB4eoC5AkzqsHbVTRoj1PtfGfo8w5jAimsJ3KAQfgN4gYbyfohobeVFFkqrVzhP34iRz5W2Le",
  "key7": "4cjjqLUKASdNWMKjP7jR8mwhcvmPV2n6tByPj6vCZFSNWTyvo283Gt6M5RSsZFcDBdxJig9LUjfiNoUan3VSUT3e",
  "key8": "2m7JFvkLWoAtyC2g45aWKimEgL4gZ1TcHpykb4M3mw6QnWw5jPwDwLXYvNbmNrqA5gezbNHZPnVvQHDohCjKFoaJ",
  "key9": "3YpmP1re55tb365Z2zxnWhLaP1rCRKkfbpYkLFpWgxAjvNtGEVUpxxtSnsSMcUCK5iYKfidSkveA7dCVNc1zrkk3",
  "key10": "5iyqiBbJ9nzN3255XowesvMKt1TbrVgzMSXRABGiTVtYiQzmHh4P9J9cNwq6mMjy8hg6BjgaUaPMPsXBC3iX96c2",
  "key11": "4PebmDwfZEuUE7RP9S8cEbTeqG5fbhcNtkE3GpJHuqjZGgp4ZkvZaLXdzCj1AQweHTdJbLxVLbe7UoNFxH2iyNt",
  "key12": "4CXh1UjvRqGQnZeJ5SHQmscTtf4N2PSGt9YmUZaQFydhfv8MUT5xwNECaFiRbgsF3MRzLWQLoygsjJQc5NeEJNWT",
  "key13": "5FXuBBcHxyXEboXq93ihG3XnVDr6GGMTi7ZqMwWvnaz9eKuVSF4WbjzZydYSFGWQ6yrVGa1yKjyJkU1KQzJ8bi7u",
  "key14": "yuEZRT3K8YMo4Cx9Q43KffNSiFGawt7uWeAhVmctkUoHmpbqcTRuvJipUy6MWBD8E9UcVRh23WGCQGWrz2uRyc8",
  "key15": "47PRmi1jafNHzF3Xp1AoFv4FBPYVcVPBHvRk3cr5ZsRVSyDgbe2dtgEBBhXRD1hEPMa1xcYqtuV44ZbnAHDd3u2T",
  "key16": "2vRqi8tXE4qvtA2HhcxaaSB8ohvbfxrKReVgciYP7FkpuH7kJV6572pFyeHEY2wshS1oLobcjau1NGgqayvGfqaL",
  "key17": "61aEEH45pDXbLses3MTdwpM92Ba1xfR3r8TjBCbDjmw7RuqoYB7sXsdpWLW2DbTEDM4piMTaUpN9KjLM1SFgW6A5",
  "key18": "623GkRiXc5dWng1jMk7Wjfh9N1wqtZsAcxBbeoSesui4hRSqAMrbAoe2zvjRt2ECCsE4UEpSmRoWd4xNaLyhNo1t",
  "key19": "5Td3SiZeCHWsnRHA8bS1e34Wtu6GQdriXgWXrAm2MyrvzxtRZ7XLS362QsStAEdsAbtoaHwx2UWan27wcCEkNCdv",
  "key20": "o92iKUQ5g63AWkQ14CDMAJdTXHxc45nFHRTnMdUrJNC2kmVvb9hCC41opt95sVT2HamMT3jbx7JKz1rZts71H3P",
  "key21": "29oMRgfbD7HXScKX6XadAsxArFXr1ReqXabGHHhW1XxjtqxX3Dq2GAuxJ4ZnLjPEzEGJxQ4ujS1oLfYNBnAxjo2j",
  "key22": "4L5zQmwTwbMgSPrVVcZ93rdRk1toLspeECMm6iGRuHtL8uWKeqSn7bcx7pu9HY3K8jMkv6iMwtNP7MnhAQaZRPtz",
  "key23": "oMYGCkKeXALXaphGorvxq5yUrMBr62HzMyc6wisT7ZCvM5dGuoJGdT2VyT8pq1fXH1hST5Qc4oFp9qyCTDTMVUc",
  "key24": "5omhaRY8SNHgb5EYStzawwdXzqZXUwv1UN4JkNeeEJaKZY7hppQQATtBAY7erYPREPo6A4HFSC7JkRqC65iqgm6f",
  "key25": "5ooAooiR89ZWbRYAEX3XbYFzfxrFs57R5hVtyTQSpUjCNMieGmDTfwMzQEwU8h8eZJdffwuAFfxp65t4SXw5X8Bs",
  "key26": "47qyZDy2df3s39KsMFz2jExXzoV7wZjZpdWtBWiytCEyupTzLvKMcufWHhDiBUDQVzfLBxmAo3CSPD7sQ7zzQ2g9",
  "key27": "DSgr6mfUcKLMVfbqiw1wBNZM42CgtxXyiLmijH1cCX4TjJt6NkYk32WExccNSGUMwLtxXsMENrjF7KCcTEQTdzB",
  "key28": "7JXXBdEYS26BWmwVwkbAVsjYSf2Q8ZfDVn4KtMMtbrhEdGGAW7uveLqGP5ptNnYAyXAPXBiQdHzKtjjkrD6wQsn",
  "key29": "3QLHBYT5rpZojuj9XFb3MWtkx4ZpAfUcoqmbijLZj6CfCweYi3kumQa6EwqSwvm2pd6afGcKHZsc9zh8bvsC2pbn",
  "key30": "3QPVdygKUkFgfcCgoRBwN26PgzD7iTkVP3jKn8AxDhqdN98XtdP34kid5LNLEc638j3q3RVY4ybwxHXRdGvL4y5V",
  "key31": "4PDn27muqAFTo4e2Kmp6surwVYzDLAwGMphPfDkgZMk8j6NZ4fErmdhyaVQcHQkikxTFMQGZ99nP5nzSUmKiEvsU"
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
