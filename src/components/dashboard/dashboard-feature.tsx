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
    "QuzLyTiUNsa4JmCc2hErt4b1bZ49bqW6rhpVZwHx7DvPEL4z3bDifYS99Y1Ks7PzPUAbCh66cStLFDN8wxodNzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LCwsRE8iFKXuFeo9k1iXBJAjF5AmwCtyMzCSnrpGeNdzoRDMfBxjEe8a92JTf5yuXRcHMzGYjk3nAYzHsCs751H",
  "key1": "3jspZYjYJPao2H2f4Aciq12m4uKZ64odd1RFWV8ddDrDcZ4wpLZ4wp3CZb8WvZitdLJch1qv9HEuNfGk3AzEQwgq",
  "key2": "2QrbtQxEeeNReuVq99y3tTcUgYzq21KHx27B9LNpHP51PfT5dNp7dNezgk78wELEcCUm8FDeLB37HQfmCSiwpVeU",
  "key3": "5gss7BTwuH9Nn52gVRJEdMM6DXrCUTPdEm9cfWx4YnuTN1Gh5AzzLGEQVqAcc3gu9jt1b7TPNM524Tqyb38wXv6M",
  "key4": "2ASfLDRU8Z2PkdVmXszAPQmWJbhKXy9tnf38BDhgxP1asWkWSEJ8UznjisiBHh6qhNFsMSimPbBFs5KXinraaHAj",
  "key5": "2V5DmXtCZ4A6KCG4ghPPkQk9BgmQFx1Xat8MYvkQXor5v9ngVwwULs2yHmNJv4Y79KJLG75SFbHMYJ6xaxrHqVnv",
  "key6": "285x33uPijq6VyDBaVZbYsx4Hv6WBbNHZPP7qqMqf2WFGyWnA1G9rehkdE6TUwx3mmGTeTzqYmRH3rnMtB3t69Kd",
  "key7": "XVfTFRo6CL9chUJhB6E9FD9sWEmdxh9GydLeuTPSwxktahn6kWUAcBDLtx4GaSNJtQbx42stN5nv7qkDjXxiG9b",
  "key8": "3u7ccxmVcEWpoByPX6S4uZRNPjxfoTpUJimAKy5fDS8UX7WsigU5Nsg7zZh9S6Tvr5btxArotMyrDUhvhpJJ6XHL",
  "key9": "41XpaSERHsMhzxSPmcCLjR6LQ8D2NiyoEqkuzarqKBAAnyNh1i452k2TzSDgMy6UwJrmHRgSFDP9KuCfeFX5qSQq",
  "key10": "4BfFWxhCUyihe79LcWznp1aSFj5vQJyY9DZJ9EQj6HE7rE8SwZgLHsh8rh7fb3Acv2RUWFsn8EUK76k7ShaU9FHj",
  "key11": "w2XHhpShTDb52qtvfkDSKZUxXhUqXHQukCgydj5Z5WxQEk1DduvCFviHP7x3LomeSBz5FTUgJZFBYb9YQ2EJDYh",
  "key12": "2Uw3c2VKCgVp357GEH8jnhKAbcd3YURsi7t4ehhruedRVm7wqyfuLjdpVNQksXMLPpW97GZ7mP41K1RuaPVZPLmK",
  "key13": "38WqmPJvEvN8ZLM816BmQ3eRCD7pfeCyVZL55mSGbdqG7ovTtoxzWDTH3qkhgRAJY2sBdn9QsZRfjFAk7k8ifcQy",
  "key14": "e2cCjcvYfohiEm9L6wsLMdcVzTJARPW2437CTqRrvTZAEnfuKwhtycK7cHCeb6fjGaMRAJEBqguY5J9YyoV1UE1",
  "key15": "55HE2wpHaG2VFaGzUEQXCnbAMBkj2wP9N9GpTxSSdAQuP8P6SW4waBcGaDN2r46YfQeLYPV6v3m7c9giFBNpg6iX",
  "key16": "4noL7Jk1FJQHwaJsRaxKkNRhkMzxDUNrW1kwbFUvekYsySPoURoM5xWtMoNTTtUDhgxYPdp3apHptdRaNYytKEcu",
  "key17": "ts6zoCqPDQw25rrR1aU81krpkW3qR9wjP7ZXUEtyuJfw8yt5HDvqLorXWUowtxKuZEshiHNxLkRAGD6K1ArBRi5",
  "key18": "3HmPJwzNKjMUZRhGgfFY4XGCZuJ59qf5iJ64LKoEKWyVXvVog5FDuQ8XAvq3mTGns5BjcPFCD9Rc8GAYgGoPJwYg",
  "key19": "2PTggZjWbZfVj7AuoNER4v3VDo1GV7hZgX1yVYi9yjUU4Bnhjc9JBvFA9DnM8tYRPeZKM843WoRu5jK5CDP5BAPk",
  "key20": "3yZogLzNWm79Gm7YBqCBEsiMQp8xC4k7zpt7sz7zQmgeRPUayjfdr43nrZZhMJ9XudW1PP6X2kXU4br7umqYMQKw",
  "key21": "4MkHCh5ydApp1PJGhm115d7bYDJYq2Ahsw7t5p5YPBn3w49nynvomj4niArEKqmPbecP4hhpSSDwCTMRVt7zXuJD",
  "key22": "4U4QvoZo2A7PZCJat3rN91zE8AWnjPtTMj8XXruWUy5riqt7F2wz5yjTeLkHtHoJbyDj2tWbiEnC9cF15qf9aSmE",
  "key23": "5usnuAhAjFBFqnztNt8nA9kqcEeNDUWvywKZ7DKHSaFwhY6uedwkQUGDvjn3Xr3NFUqJ9qTBtz1oCPCaT3pTY4a2",
  "key24": "2Tx13qzPfiZerGWnX5HpYci3rtbpgbm1YjUH7mVwhp9ovLxuKqyGs3VpLTehH1K9u8iN8YTBtxy9TaJU4zJFvBx9",
  "key25": "PYLXx5Uy91g6nKcDK86Mzk7K85iBmk7a37uqHrqyz5G7D3Cq1DAQyUkgC2fkU69H4TwD8dBLuGPGDRp88uAH8FH",
  "key26": "2WB4ULh8UjbmgKTgdCVVtiXmngkXf5ifBdp9mU5dKZNQFE8dPE5AwLZc3xiYRGAvh42LaqcbRYrLxJS1rzNL4oGu",
  "key27": "35DUECm4GtwuXNmwTgUU78dE5YS2BXxtcr1uT8QeGhypgMAhQGUd5VBs3JANkeDnZKNybgiiQHN685kKuuC1dyVZ",
  "key28": "5BjATdeNy4hSpz9H9PyYmuT7XMyP9BiJVKVi75N3QyrmsRSNMrGy6CTUcwZXjjdFfeF1kCq1ZRDw3EKqdw4YMFEm",
  "key29": "3VKA1NeLyxvkkw7Ks5X1dVXMctWeFGtdYNmKhkeDvpom6jJ8NZ6cf9yvA319L2BP4ntPYuckWQ7dNu4492rV3o5n",
  "key30": "3fk151ck8VnLAW5go83DBMvKU1o1Jmm7XYd7DN7wv24Kz12Bcc8khjs7uevkeJf7gSp3DV4jEewXaE18rEiDCFU2",
  "key31": "2esQ94KPUXmzob66eooXHZcaD7pZ7dz5SZMPDWVAkHtyZa22ibWgTygkbHhvnUR6Yvp6PLMrJCYzwtesrHeAewqA",
  "key32": "3DJjCrhPU1HyPUoYUGvDoXHRNzV8HMz2ZBP5nMvg7jTv1gpF5onnansZpgXkXUDVghkKGUeSazYkfCFihMHqYnNj",
  "key33": "2rHhMsjvxjUa5T328JQXsA3G37QMmHyKN4LAZAxJpRufvhrYiALW4E4QabsvxhHyaqWhVes5gnqJ426Pfrg9dVhC",
  "key34": "2h1XGaHwZLu5txmnG4vQ7HDMy45K4Guwtug92oZ1gXnS8rzgUYjy2rvBsN93YgHg3u1kY1zpEGa4P32yQ77s1Txt",
  "key35": "3fenLnjc3AhZ3DnEUUmvDnadba8YtQBCdRjE5DhA9JrBx1JosXsJSgtTDnrPeo5BLVa4baWnSqoyb8uWvnWcCZh6",
  "key36": "5mY3UE2xz3EGfrF6YT94ocJBYbd4TXE55AtrFjNiFRVodG9K2LWAq8qkUijCkTP4YD2dx1myVpDpGurTypfMUgum",
  "key37": "5MPv5o2VRGQvct9V1T4owpQqwSf4nshpFiV2YyRjQF3e9sbAgcMdZYy6bP8LqzyCwE9UjUkkNkrLbekiov3JGQCk",
  "key38": "v9XJnHnirDqbtW2TT2eDX3F3PDLQxR4C2EMVAwqLuYgdLxpFyMPvhq5qBPD62PjJQwG7uUvdeFbeaG6njrPuadk",
  "key39": "29VgTy6rXvqDZoLs1AwP2oP9yiE3cncVG2JcWnHuJJNgHtuCu8Uf6D38kC4vsAWhZ8s99B2ik9YQG8TrhZbqNa8z",
  "key40": "1CFTcME5GHxwdwyh9uMAaZuR3BQtxVQ3w46UacXwuWNojKyHPNn3iFPvuW141zmYoC7ry4gQSV7CP4U4SAWsZV6",
  "key41": "4RMnuevR4zDVT1LngJSsfpK3FcfDQghneYo7GEYKQ9W3RuuU7wwBSqDSQzDT1UMJKqzESyrUm7Z7HqMJmTnZVtpL",
  "key42": "4Cktft7VAARGtmx1zMhQrJ43zkbanftEyAaMaAtVNXAUzGXPweyMq4dWCXKordaTnDpumMqPS7Qc4mcDdbJERvvG",
  "key43": "3hBG5Aa5abiwAyU6Y7LVQF1vCuxS7Jjgm47jZbnu5Z1W8ghwHNuRCiS2BmoUVsYFQ9VK5xHgZBefhvBfRU2x8yNn",
  "key44": "37YmQiFmrSebsLc6Zwh2kq4VCyixG3Ftu8yR2jnAs5iczi9YG4rCErEFeC4pbMd54xtDhJwcd6NbWWyGrAGgHiCC",
  "key45": "4PfTc5Aqke3326eBQ9idPmpvxxBFHUabmjEBDm1hNCCA4LRtauVdH8c2wjqJQ7sp3adve5uMeH7NArAjreKCmCUo",
  "key46": "3Mtx6VcXj6XPX7PW3FVT7VBettJo5VXHFZgYZ5dpZD4tEz9JE2F9uR7eoLK56sLAMcEMTMgLumxbo8QCGDvE875r",
  "key47": "BECaUE7M6ZABBjdWktYWgWS1KWwfREMiaCzCM2XWpPXurHYY5vcj7XVnnRU2A6bAZrEiMa2u3CQx6NN9YRhKbpJ",
  "key48": "4NxUki69wmNePpEa7JoaRenMyNjTn8s2LKXkYaAjWBngkP7m7QXPZvdrFYxAGLs3fHLknBWwYJZK9pVP5fmnwYgr",
  "key49": "5Jh3QwjSYRHdF7iPRMom982LSScPsTBo4FpwPzrwL4X3i7KhBkDu4vBcDryy1Ca7vhNWN82n8ywa52o6CJXK4Kmk"
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
