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
    "65kuTHKYCrbazWmgStP5Tm5K5t4AvhMqvkD1Tm4X4BDbqRKsn5UQkJL5Gor1kQgWGTN1UFrhoHa7KTp4Z7EivWjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v11D4v3UpjgSVhqRsrAhKNMDS9qt3QgvqCR7g7VvCsiD66NbgYrtzzKnGHcdQyGvQdgDYDQQzmhehB9z1hakDm6",
  "key1": "8KtcJAij8n7Fhgbdw9GzUGrxpxHiMiDXLmtPhAM8b8C8ohTiAhV6yDJpL9ysFoMDUyQiSciYNuUP9X1oGUbkoq8",
  "key2": "L2qsXNmJBLZ9sPNZTUAX36WDiqv5519b9rJvoEVfX3y23saZAkTrktSRANNEwTweExXQE8K2dfJPcubbg4q6gqb",
  "key3": "3oVB7XVoKXnUcquNMZYhBAfGainSUNPwnJqXKHFfdRDaKekR6sXJv5KFhT5aaNWV5PrPZmQDWK9mJJGU3aYSUBCd",
  "key4": "5Nqc37vHM82b3axR5T6kxXrgkE7gv9MpQXUzGuebMwiErU38YP4qmkNyjcVMwZwVezLZo6fdvJHxXRYMCxEgrrLN",
  "key5": "5UVjHyeXa2tiVdqVb5t8xreL3U3nZxaKKwhyJ7WURiFGbP4FwfNGhcLxoK9x18sqBL5Qib1MLFxpSzv6d27sS38X",
  "key6": "vJHxw1AEa3zKhsyUtniQs9H8Y2QGhPKAG5urP6A5QVzq3f5GtBrKAdWtfRmWfx9k7XmdNkChdyoP6CUci42yUKh",
  "key7": "5cqrH8C6Ccq6kfrZunGLqJExZGZDuMHgZ6f1keqDsVawryARG4WUUaipQpGB5grocS2EcXCKB5cDPth3Fi36Svtj",
  "key8": "2L7uvnUDyKtQozNCYf2kMYoXpRcYtPRWP4TLzwZy9eF3zS3ampw1HkJt8c44XnC1JdUCWjTSA5pLoHPHeru2cPrv",
  "key9": "49kfQWfouJX2KCtfRcXMxoA4hfs3DqXQLht59ymcfqyAAB3CDFZus4tLb9dV68Lt2FrrruagzJJdRaNQUY2EqtAq",
  "key10": "2zCD83muSDu1D47mWxXAaCti7sEXDjheMXEdsGnLpuxCeCb996sX4MRybi9Y9CX5vY5Ro82E5gnPwKvfbrhmA9iV",
  "key11": "MqatCfhLQz9jMREKtr1ex1YBwBBBNJXv1vMzt3Bf1VDzv5z8Ksr17AASKE5hDuYpjJrrdquMx49yqexPBH2wzEn",
  "key12": "2tCHiNAKTW8JndmLp5EzQsvYArvtRGkPJ1uCxbTNWRzNF8Gw9ncim8MCJwHp5rFgJiEbnCGBCNEtu9uLgEFLuVqT",
  "key13": "dmVnypWruH2TWCwQxfMXsTSwPkc8Rg8XVybMjjP9kQLGQErebz5LhSTguEXH1vC3cEwzvWxmDFu38VBZAaafpNw",
  "key14": "2jmMze2kepYJVxBzhXGA3aAazTy8REh6EFQEAYsBPWo9oB4kPf4s6PoRvRwgJeftNYZWEDVQ6rjJSd3bgjz8ZGxm",
  "key15": "3p1JAisu9Z3Ls2DeD2vHcyFYbaEu2g11exqKa8Z92T7A259CnqJHvWoxUsJGHz8gvtpP4oh1qeWMzFzti8UjExR8",
  "key16": "2b3Vw2wditZjwaFAVkqNECmaPNiZ48YYPgmZg4rmi7YUr16qRtQQivt9zTKig3vWdsPFqotcmsqho2UEnNLCJczg",
  "key17": "4M5jhAUSpR4KShC6fEn1UYogBpBXXK22YwfdXT8A9xbNvuFJz9P7rePjA1ditEpc3hSiTp6pisRsXP458gJfQpUJ",
  "key18": "5hyKuL92foavh9B5ddRCqDD6eRpjhFuo1gCkvBGYUe3UZMpKynweguzrW6mQEuvXBf2p1g6g3xYCuCw3k8NDuChs",
  "key19": "2mssqg7qG3ScqsXZ9HVhAmKQ1XTBCfJnyY3iPo2hP9dHm2Le9rv6uWj46wsBMhmPeFSj8KLKy5Nx7KLfvEKNDB8t",
  "key20": "2efmwVN2EZjuHAHgaWoY4Q8DXwjTHPPGtGdGrLwMgeXNSDu3YNj1HhnNnr4QnM3jTGp6Q6cbfmMKyF6cQdJhPr5F",
  "key21": "2NGTJXnCZBeEocPDtmWvuFnrgNXuGnCg8oXGNeXrybfZ1LkcpboY8Doh4fk6q9ijgZdaCN7gR7gXUTZVNwBxQkRv",
  "key22": "4rjKp6nnfuCLTmqjgAhZwwreYyFpqP7JwZbBxv9KLuYuUvF6Dw4DcoV2ELuFXXtXP2nJN9aAYyztMkVyiWqRMB7i",
  "key23": "2kwaeig7Dt4wkyoZGjUx4hiZXbLPZJLxj1s4zMoNYgsjF4Jj2uZ6rZPNKEuaFJrmriozrd7H8H7W7zzup8r8YxR9",
  "key24": "5Wk4SbhBKh4LPjHQYJrkBYXnZVS31ZHCWCkGzDZ7dwGHBhLjABN9NHV9KMAXswKajMypktfzEEjuLiZA4wpB5s5z",
  "key25": "5KhdvSyf59CkXXcShgvyGfuu5UCVabngMxuTopyyUKQBJ9mgvy9GCYmqqu8ZR7iPTNoq7LMcVMHcwFovstjnRaPD",
  "key26": "2Nh1nSg1ffurD3BTuptHZhFydehqWceTY9fuqVHeAtuhEqdWJQfqStdRUet91yxhWS3pUwzQUbHuLGNQrF3Ezi4Y",
  "key27": "5ukzUkrs46Cv5tgyNmikbkaM9eJKwDf5SJ1n1FUSD4c5Qxb1w3ayG2PFNMt9mSujqnqUCcVWdB84ETXScWrFyKq",
  "key28": "43o1fY8VgVEEm8JdTZdAHiWqQ4Wozj4rmE6xtMiS4vv4nFc8MmJ9Z9yViPqsWwKXRkDVG56xUERPfQEscTKFv6XJ",
  "key29": "2xxfJMDK5n9kwhXpy79YCKXphBLaajWX7ony8EfWCepznDtfY6QGjBGy7ZqEPpo2iaETpvphULgvK9TZx23Cw2rJ",
  "key30": "5novxvysnPwycEoQeFutV6a5fTJrbaB3p5viAt2b1zVrXmFBVHXoyHxpdrnA97A8XFryLeNWMmzJWMSqYoqakSLq",
  "key31": "3RbubeGXDkzz9oBnpXbEwxrdAgyPJ8EXXzTZQVxWL4xbiGMns2AiEHZKN1Qew8qznUtaUPFzcG2Wt7ScpiqY1MPk",
  "key32": "2DhMnTtAT82hqXGvitPBGULxvSaP8C2fsaKJegL1PmQwUJwsuigDKyA2EXsYeiKWu8MUEaFh4MWxnxNcPEMa5fWu",
  "key33": "2j3AFMSTmALXhbQJv1mbHHEjiVC3LhVUm88xzBtVJJkvYLmQWkLVFQQvbggjm5ogXqarj8ek36V6A1hbvsEF6DKj",
  "key34": "3Lj1ZKLPYNkKH4FYseF6v4bDrT4FfUQ1gCU9akMG1uEms3gR6oyHUmDAgwQcPjj8xNRhYSYJmPrYSdGaB4VpQwuR",
  "key35": "2eoYeM91TfxrsYXTmxGWgetBxQQCTk9vbf7J5kZwfxA2hCqa4Khu9akfPwnkXojNy6R4gJmexuAEMDEysxZZU9y7",
  "key36": "3tPMybbKMcHyftKyCLsjzVPQiBpxmCXdVWCZn6rCbGCFAJ2XMcUZfYGgyi6AaAzKa7E5UxrNbxguhHxK3UKJ7UnB",
  "key37": "2fjeycyBXdQz3SJhTP5qomTrR2TVuaHZrzi92LYge6Ns9Q8wbQENvPY2i9qazFs9wX2Cs1HvaNQjqYf5QHoM8v19",
  "key38": "4cfxvZmyVW3MtmpMcCkJWZxWpQ9MZrt95eFvreT1QRURGrzyHaBjLSVrdpQzy5zRqAdNRq3xxqdNGDhj7Ws2mDqt",
  "key39": "3SwgcS3BVCKwcPRmSV4fc355U5Kj61jbmtCxM9bKfKKyxrGsBKvzQ11YUb67xhzNPk7y83zDNVKe5276rpMX77d7",
  "key40": "2zeTZRciPg6yi6oXkdiPRLEnxSKcP7MVVXagivAA5tNBYzihLAiZU9ynWbWHcDYB9WTErARzjy8azdQWD7BGRgwS",
  "key41": "4JyEk2BQXxNBK3wAqu8QqoVTsaTDwKT7gSM4D8pE2K29fTvxYz75hD5z1HAa4MdVAJbiv53ngVvUtNuRyR2Eg58B",
  "key42": "TUx83zofsKUJutVsmyKg3VyWseBCaBKugEAJwZ3LjaAugn8FBsRKxiV2SEgbh46LWJDvr3zeaThr6DXcnvBE1ok",
  "key43": "2w7cm82W1kbMbtxq8Y4bq6mvSA6VwW9F3GBHCSUT5gErazQ1J9eU1cjjLcXTASZGuoiRrNV2bdAdq9GYG663RxM",
  "key44": "4tRcLFJw8ofKjh4cungCqrvx2XnEbEhaLYos42ugM1zX7iQF4AnfLm2LKcfVHXdfV73gRkynJrfcdiNnhsSxu4Ka",
  "key45": "2CkbkbVEhfEmezRg2sw4jUYAgwK8iJZ1NrcpeJ4eu5Wq7Yu5C1cfwczxmKgzH1FpfQgnAUXvx1fBTuynhYfAozUF",
  "key46": "4x8Xd1LoLCA8xupKwvwBP14R34Nm6oEA76AF7ZAM172eGQ3a8UFUhFj3FmjfgmqhgucmG3kukuHJGU4DYSaHDMsX",
  "key47": "5asynNSEXbkuXQCnWMjgYs34RKestRUPL7AuteR3b4DMaeoenZ8o57U9TwDA2fWN4MBpRbzrF7jvbfHyWScvqArn",
  "key48": "qd4Vk7HEGi8r3Wd9Qh8UJUWQhjLWtAUiyZZZWsk6sWf7mu1PwvoAvfmxSGyiqNVjD16619gueqZWFWVTxfXi2E1",
  "key49": "2BWz5oaDkKMPVaKqARQa3bsa71b9HRtLTrfGPNScHZZWitztKcM2kYaaB2E96H14sfrxHmTxh5S6DmuV8mZs2YGj"
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
