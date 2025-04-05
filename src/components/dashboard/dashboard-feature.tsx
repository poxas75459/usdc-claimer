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
    "2jSg5WqESi51KcJ8So5SmHfbFkHPtmigm4oRz3LL9RTuaMTGyVEbuV1AREsgte2umGx3yyVFYaVCc9tm1L18m3Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ez76y7woZVMgnHCJ9GzTQVQhs3AnKKzkY4P9HhuRKCaEjUaUpPStWsrMq4db2CaLWfRZckwkqCuvqXrUtuHmzj2",
  "key1": "ozkZ7isPPHpkUtuvPD1zetEMJFeadhJcB46ihEALgBsixBAkMXqKFbYARDTz8YqL4vYFZgpyUNea1L56P8PUxTq",
  "key2": "46gjtjFj8B58Cmkay2SctoD3ifQjTwRQk3xWRGo5nwbaXgKVUZmqC9nKe8L62zB4AeFkr81Z34v7ZmHmJwst6ya2",
  "key3": "2CuNiPeWqQ8maekQz3PttGYf3nygFagUtVu8DbJco7mhwQizzUNmwi7cxuyhJ13MVVBUbziaM87YDN43txpdXW7d",
  "key4": "3uHdKxjdikFuqxzEcKh5FuRUeLhmqSFsiSuq6dRhNCS4cdazesf6Jx9ndbrCnYk2dhA5DA3c7Z1Aso79BbB4YS2i",
  "key5": "2T5d15MKz58XRbhmM5nq7V3ZoxVknJG42nk78VA1HWnMDhq64YgkWpRyX3W85WiY6yxF6uFm5JxRUWwWF4ZqyXsB",
  "key6": "3Rq1i8YnN6DLxvkSj6oW6iR7Hgxi8DT9YYXjgcMh3y5vg6Z6rhD82m28bnFzCvyxZZzAWtRyzF3qrkPpWXCGLmQk",
  "key7": "54e88b9Mfak5wkWsGo8LtKYaUUn6uqvLu9H8VVHcMTrxojwobf6RcfBLtMC5AScYKNwBvj7keSrR339fUjLQe9DX",
  "key8": "2hALpVbfJEzoEasZQobUR5vqvytrZXWSNcQ5TVz9Da63Qmuwte2mqVPiL3cmrsGJUyv7JRQQnyQes8z26mHryg91",
  "key9": "5LfExk3K9Hi4bsqWv7fqwnj3Ec9sJNSvh1HfPaGv8yjvgKH3dvRff5U7oj8gHh993adjHacPwvdCia8BxCi7EZWA",
  "key10": "5LfSi5aQ8XXC84on9UPucAfXAQ6qY3cwdDwxogJNQsN11ytye6MJfbKtRj3An6QZDm1wTEbgxYgYpxtvsnJ5iuQd",
  "key11": "43cF5d7MU4faeLbp5aMGMPJrcaJGt3U2CRxdTBF7WTHPeYkrWCBngEK5gLMU2ZYtCR6oJbGCK4nZWb7g48KFmaER",
  "key12": "3HgMZm3hBur6m8UoaE41P5USmQRtfxG7mmD8aXavncCXx2MZVW5mNHr3DSbRXnifownPs2sD4sixYpjjD1bDsf18",
  "key13": "3RE16zNBXPnUzhoXEnFsgGPR3onmJ4xyeeDZ3dWxRcEFXwxzND8ZpDfpqMaL8ReAo35jRiw1WqiDmpmcoVrVN7mC",
  "key14": "4UU5F3yUXVkh1U7E7QozQYASDZsJD2KEKyDgx5NL3XzGXmaMbTyKhz4ottWU8o7vck7wrQjHZGN32diwAfFSkTHf",
  "key15": "8Ws4gwazcjh6PGmkoKGygKsmpcokomAE6SME7ogeeDSDPpwJ6YZAk86PTVwVi8N2UspiDZyx2Cig2vbBHZyxc8q",
  "key16": "2G1RYS7SUQXjdF1zPAnWpFrFApcYq3g25nGw4ghAJXaFG3fdZXpWu9MeVD7TT1knjSmYmY9QBcoH31kfGprZDG19",
  "key17": "NKoVPWGjSZJX4sRbHXTPvMxVtMASfNqQm95nqKiW2XXGwVGNuWLSZWS2zuv78fb8tN2y4ZskpuMDy52eaq4LVCz",
  "key18": "5Yw1zZ1cjnEMpyyNjr1jUJqzM98C2ugvDVq2rKgQnhyG33kFLesrqpt6knrsbFXXUg4J9QPG2P7aDXfC1xGFTVSp",
  "key19": "4AVkWQUuvc9rVUwuiJg9RXxJa9A9eaUtdKgNqquRkrnKCrLfmBVdQ68Ceim6unsuXii6xGV8ng7KZHz2zMLpMntH",
  "key20": "yzsg7RP2RuDJ6gi19NWRRvQuVvUtAzLLKKcS2Qd9KhuYP4jYw8WZAUiw6UJK3tMfuUg2vmu4w3wuvqJRMrqQKqj",
  "key21": "4U7wU2petnk756p1sy8NGQ3thMY2BdYreDHfMuiotKV3UPFAM5at6bsG8qJjcNzeuKAana1DJEmpWqepRUz2pMkw",
  "key22": "5e6zLfQh1xXiWc8E6Cg9czSEKLuZrj1GdJHWCKRdun4D8zjxgDeECtXyrTBK2qhsEpycdHQu9ZKpRUjMvkhHHHiA",
  "key23": "Zu9pCq11E3af6DqhUBZHWoxuULHiynhJYbR4muWbYYnikdtkKZBUrakQaiF7srTpDeQeY7SvvJGBL52PMsWYMg7",
  "key24": "4Z4Kg37qQ25bdg6Ct3VchrUu6Fy5Y4h66EFCqKxhW3TC9ompt4HDuzWrtKuwhQqhqvVwk5rtHJXpEKHp9Nhk5tD",
  "key25": "3vTgKuaEMrRVZKQrCw91pVRbxd29XWciQDBPJnHRogUEh8JyxwJTQuaUvRGhALHtJJUt9pLDps8ypDVGPfSTBCG6",
  "key26": "2KfjRzaP5VvvwMwZ81crdSD4VxA6qTFx3pGaN6RSmSGvQW217gD1ZHVTZSKQ8hSxCwqRJCzLFQA1N8Bmchf4eTBe",
  "key27": "47XBCnweEuzKBQKGFxZ18m1yPsN5ncdx5tMnFiRHeP3jwQ6kiak7Se7x5jEQi16abjMc64ap5C4CmsYhzmzQycac",
  "key28": "2S1oe4BWcQ9AxmG3MPVnqD61ALBDxoSn2VTHN78Vze2Rzd7dMekSQmbXZkthrHFDNu3Wmvim7wAUVeyY4q3XXTJ3",
  "key29": "61Asv5iZ5e244GyzhmvRxTZ8zQzDumv6ELFNWHGKVWbSzAGtBnAmwUTjc5arXGEgTEiXb2Hg664AHnNwFiE7S4Cd",
  "key30": "4Vc1jc7h2rMGZTvbXfL79r14rNuf9mfjFCWPFn59maumNydWCikTsQWjjgJ1xbDW69H7Rm3mRrTQv89JkiD6fdoo",
  "key31": "2MEMGGpFv9wCKnsh4eu6yhUH6bChjJ8SJPUnZrhQ9DZcB9SfXWEG8b5hGgfRq5B87jMjSj5cu5xQqBmGLT8Uvien"
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
