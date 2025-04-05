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
    "4B1TyLJFSoaMpMnNsW7MVkRas7hZMZhV3cUxD5MPvED5E2BimVPporMwfMPqmzmDnnJpSTA9HMEFveQ25REoXiTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKWkrU6b3MuVNcGKD8bNDpAxYrR5139bEB9mxuYgkwTi1nZXcfbvcKz5LydCj8f3DbavnYLQTcEX6nxY8YYHvBj",
  "key1": "4quPhTEddmdaqseFND1zXXJr85zcQFkesfgK1eJVdbnQXozovhei9jRGrhwvYkXSfKjri2vcmbjkCQ26AT9mcevE",
  "key2": "sk78ApZN6N1GJufd6NyPLXdGnKPvXSAWYQQrMsu6VjfRLkX4S3UV5xgCa8i9Fi64AgbdEBsLd9GzrW7AopzqkyH",
  "key3": "4bFALj1xja2rEZd3bAdppEuBhQjhn2hqYhfhJ7F1fRVmW6sMuYGgutHkjNC54ai7NT29gmbAMLnLunxaQXjjGGJm",
  "key4": "3jur3KdrFKzUu9DW3uMvJ7FEgH4vdeRWK1cCNy4vnRYCbJnb9Td343YTdrZGCmjMrHcFmuCA7NQpxraBnuapw1Vo",
  "key5": "33Ybp7waysbL8mddm4U72jDHE1hWWJoeEMVGT2w1pZzhMcmmbvS5LVQuVfVr5MznVRFa45HRjAWFR4Lk6aRGB4uv",
  "key6": "GMRWNfnUsdMr6YSQsF7fiWDJ55tEV91nwokKJ8dfjEG7F2es8cGAf7Xu3vkTSXhQYtkbymLkJS9Myt3QxfTS23E",
  "key7": "4ACNf6D7rssepL9tvVnpkigX7Jj5XFgnyeDSf8qLFGZDiduagEYshRDgPauXeXoPjVrJ68esCJoKPuKndMgYnQjn",
  "key8": "F39dEJBFAuYV6zw4ABfJJY1LKP64gMNQ6dM9crK6qeHyJg1a5ybNZMKnVe3KKtTmSaw8A9JgmophQbYh9Tnp9eP",
  "key9": "5pJgKpyKMkVyU7Mxev2q3rNPkoeRfJ8rWTP4HcFXMV2zJkiehuaRGiNRoE8qKaFfNBQmAsrWbrKQi6nmexYicek9",
  "key10": "4e6a8KVAWvayZmT9gkSNz1AADFgPKdRHtFYVB7JkUFHzNJP36uuzdu3vwrNRqSJKfPWJeKRzfn5ak5CrX8vUDxot",
  "key11": "4H9d9hYvbdCKHNFBWJR3aX6BGNmX1JVFddtk4xh974q35tLygMwbNraPrx3YXPssYkC5CSH2F1LyRb8Vz7PHkcWB",
  "key12": "5jQoHFb5Y5kbBqiMu3NVXvh2P8fUkr2agyguGk59KcZJgYcB43y3Yb9vXhwy8DyC4jNpHaaKwvWiVgMeuexrv6eH",
  "key13": "4gwq4Yy63PGqM2b57jZ2ebgQdPTiBhPYG4kJcsBALkUTgUMUULM1FKqsFDapQV5NfKuHTTMtM7m7TMdZpgL1NUdj",
  "key14": "3yBB5uaiQvvrAQDSiaR8tCjWLeJ9rPvxszG52u9fNYbarAekmxwD2xdh3uaKP124ewbjbbyzchx9zmiy8hAE7rN2",
  "key15": "3wEi88bdML32RAXSQzVnKHGM326TFgarznbdMeDikM3UULGrqjx2BdxkGhiwJToe4BRwgeb89DdLQ2d63XNRNJBJ",
  "key16": "22aQY85rGzF2QjmFfXaR4i36HzkToaGnPompbbgLy4Joka32w4t166J69ThcTSyMF89sqBngrJo2YQiz4KrdoJRg",
  "key17": "4ZtWs6dcskzLRjA12FCjjGZquysbD1xv5NfJ3XYiEWdTMBcPBhtWVHBdhQ9zfw9PgKGtczJkrUNGpGLNBzuHSZEa",
  "key18": "XyBtQvQHZqAugzAzY38PwmUuP4hXMAQiYMbWCi8igcXKR2TQx2PptinQ2LqBQwqH6GdMuLbiMJKm4bvLSTEVThc",
  "key19": "2E8S3Wp8MDzmtKcRXGKPtxUKW35dUemYS9R1p36j8xZcBYYCae6di6rBCdkUAWPykNj5iMdUcJ7Z6zfaLKfLgt6a",
  "key20": "3MrKYhXCTNkDjMnqqrwZVBvL1BoCd4gcL491gAK3xZek8u3Qh9Xa841xHJqmmGpJchJMphZAxwKuxqGJn6n2DR2W",
  "key21": "F12tmXPJEh8Sz6PNP8n2uBNZvXRjGK16MpzekQ32wfzP8XVFYNFan72QG3xSSs2NQu4SM7j4Yka1MALQW4SpLao",
  "key22": "RkcLchEQ7h3j1izG79xkmbNPcwoGCEy6yqqbB3CkVEwY6CowQnfsQfLosBs5cPKHXkGMcvnt9SyoWFaLGKnDQ7C",
  "key23": "JGj5HwWSoZ4yXEwtKA3wDhcYSZDcDmWRNG9AMU7nUi3oADb8DH6TYDZMt5TJb2EtxCTGsm3SSBwurzZUVpFyEgX",
  "key24": "2ZC67Fp4DRYc69G1uDUA7PCnN18oKmGwWbrXBa17g42ZuATq9KrgcVxrH73dKwgAC4EDYDtiWfM2Ln3bkUp9gWEG",
  "key25": "4FMEho39zuudT4ACaCcpZEaZZvtu2wK3GnQQhB2af13GsJTw9b4GxeiXQKF9tg84HiVhgGFyFaRcpF3mSc6ESXFd",
  "key26": "44RE6MH8eh1nK9nrL1F5um6C5od9aQNDRkw8TmU1C6DspkSWo1BrxdDtutWJAJMXDwxDjkg28ssu2Hr2EVL7Vt2x",
  "key27": "gTtrqH2EyPd88NCvtqSpBAoxwS4VAFhE3yU6hnkAzB1u5cNf7tywDBD3fbNdsr7dm6CRvLnJKY75EwQECKedNKU",
  "key28": "PhQwpxbQjWEFuUUY5KnBAW1EarwX27cW1tq8m4S4bVH5TBWsdD35pyUxn85GDGUJP6UghLPuboJnAmdH9VsgkWH",
  "key29": "5UybT4hHvY4VUms12HuiHWN7Gpm8SRZpCXweWeU2ghvrQBzGi1Ms496b9fJBdTjtVpDx3n8Kde2TA2stdhnfcK9g",
  "key30": "55oJEDBjkrtBtBgZeGKTorhBA1jfR99sXV4RxXTKBFiSTvrQPyYv6oHiRWZ5sq9a5abbrQ66rzUtYjC9WZCLxErC",
  "key31": "5jL2nz6J784iswZTtWcnmSwH6SdhTCX2KeqyrL2ZjcvgUmSA6fTNfmsu3imFuVBfd59SrA4M9Ejwo2THfJaKhJMz",
  "key32": "4XciqroTKN7c88p4TqRPD9YbADF9vpYYGgrzM1qbXBeGjxDjsPu5VK3Yrji4ziYf6taBDGRC31vMe1u5kmHNy56B",
  "key33": "3cj5BpTJkwiGcDDt8xPLcQvX8rksQXtj7NBFBcGoSE8N5VhykYj1NwLA3yzLsQpok3tH8PLsXKxwEv7HcjujEgQW",
  "key34": "5q7Dcqvd1Yd2sNFhAdNLxBMNSGwsPYc3qyMaCuTVAKQSSGby1qS5ebdxLDM32tH446cZNmKdZw78ekpG33PuCdWn",
  "key35": "2mMEwKmBPJKyoj4uFijk8Cmh7rBRMhAsb7GSgcTZZpcKVMnAJjeyDStoJHZZpFkvpqApT7gJTmySZYGNLadAvqmE",
  "key36": "5Wn7WMGQcX8AQD6bSbF7LvMvHFduzXXfB9B5nJM2xf1f4X8rHkkV2JZTeMbmSYXBCbbwmCcQyHBL56kjiRtCoRyc",
  "key37": "2ksPRJg4dfbCxzEYyrp5KgCAnH4rN5W76hZhdTjLWSKJ7JdNwv2dbCmS8tboRpfyzGoxHrXgER1dckYXDKYjMs17",
  "key38": "4Q55Rtn9wudVFR4NbatLzLVH4A4tfiDGfNSdB9GxS4iFTcQctXGJWgnSMDzBY8AN8ghMdeqo9SByHeF2QheRpH3L"
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
