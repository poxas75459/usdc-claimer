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
    "d6RrxkTJ9vm5dnKpfG7LXdZ1RhmgDpQfjR8n6JHkxDdihQ5S1aMg1sKK85YVT3RnXjhu7ziidkSeeTZ2cjgCPES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HDH1TFk1ucLU6boat5aaumPphVUqSsPaYCDmww8SNNXhgELLszPJe7rMGbhJvJnSDMRzTBs8UtxgwjMx1QERJKW",
  "key1": "4bCMkVKxtdpyqTVip16SgsvWWBdyKR272mvDhuDzFKjJoHtzGYpt98wFLfgK8KQq5VT7fDBHJifcs3m2n1VLpame",
  "key2": "5y7p26CeThQr2ErSD2aRpSjNC19imPuyCY4MBAJRtkMp1mxrLG1pw8eLyqMHgSkWf5fnJv66U2nXcJ4Nicj7f5zV",
  "key3": "2K3u5miSdym3nL4wfPKSPXivsxS9tjB2otSwKPMJPqcQc4NMuqG4t3RLMU2qeGqkufRxxaMeJ5i8ns12oXmLrktp",
  "key4": "4aUvkiUutCrwitSpXVW8r3FWomabjo65STC7J9uUZGXS2KWYgrUjHiZspUsAk1DdYh1hATd43syVA65CNnDtaEwZ",
  "key5": "3pxW39d49LCf8uDhys8euUxgYvSnSzgvroNmx8DiBv3qyAYHXYqksmCbwypPupB3fEbQLDiM1stDxyprNYufq6k6",
  "key6": "JdGKpHvSREGBCnLxWRFimgUJrR8EPKWqTxqtExZhYYpdZ6XewMNzsiLWxVJjA2danWxpwZNs8TGUsxdAUjNDvN3",
  "key7": "2nxHXGSxP3RyrDXbEPXgTEuaiTVRmUQKvTZMiR2ppMq5T1VdAULQENo3gChbPGtdazQ8JHA8zfM1iiXBsmFJMK7F",
  "key8": "3gGTushVxJY1C1G3WVzVzKHGaxq6h1tqRRpgofSmjz7cVPq1qiHymksFzcvQ3FB3wGN7gYbHC7jbGNJ1XhiJGopD",
  "key9": "4nNFMN7Zoab6ydKyE7ATGBZfNKwt34D9wRcUVNMgQaYuLBUjJp4WQCirk7kj3nsaiTtMfYVBrA6Wpenff2RCD1x6",
  "key10": "659gXSTwYA8J5UhcEV5FCrYpuMVdaoWDTXwS7iUgrLpkbghATyDhegdwDmG7wzD7xYiejzh21fiFkcU8g1xweAyH",
  "key11": "66XiKsuBzMFm1qh8z1zpvPQbqeJ3bTnz1aJfxrdw6HAM9CggQtiDSr9Yw77bQN5bbB1f2Lv9Prsu5xFTFeRGg9TS",
  "key12": "5qDJQ6S7y8tHY3sKDgUQbCg3ruQVeQhPevkuVmNmujs5yDRoaxBamndY9NadrbZ6x53jSNcJUMx6bufidWJcFuxb",
  "key13": "LH3EhniPHjBx3KPZC5UncTKShXCqd5BoZx7v7zugGn297KrjPovkJxQFctnoFFTtQp9gJYNEZ2yszjBFpwCRh2C",
  "key14": "5UEQJPDeEd3Ntk2ihFa2cUgq1NP5R4uTsKhqhX4EAzyiXu9DUWmmmHhkHwWRtTgvAL8UqsYxopAGToCyRAEm54Mq",
  "key15": "3g7CbAk1XoKgPPAF4CLKNYRArrzrnM5yqFe7h3fmQGVdjoaumzizeSSpZe7xtpJpM84TTnVso7wwTggjDTfqUA3R",
  "key16": "5mZSQFj8j2SddaP7XorodJmdkLrcUiXwuUiojoJPruhNMFRXWEvpbvv4bk2A3xgVVysRJrFshJiJHG5Hq6Su3ZmM",
  "key17": "1XPhcavTswyU9mXBuJgBpmXoGyEGy8LYEWKRfQwc1qMy1sz12KiXqmx2FMCy7bc7XmQ8k4HrkDpXdxSY3vyXjer",
  "key18": "2Ytz3mojqmLybAAaWjTYCvKYxEbDsX9LPKid5oZQ9BazMvJXehJCjb5fLSDxrdoXi4FSpVq3bKVVuKEx5bWCMXfZ",
  "key19": "3fHRK8WWnBHJNJpo6KQJXpUmD82fEwo4fY1edQ83gty97YNQwNqrhSSyUF6EBmWyXxwY7DtyPANTTrMhLWZJQuc7",
  "key20": "2CVfUJ2np1indk4x6yLZg4YdjWvcBDmzESPjqZZYar6Fm7crsBWDgqWTnS97sESLC5R6sPn1RKpKHyMqoBp9dJBx",
  "key21": "3p8oSxybnYiksmNdZreADz8FrK1FmqYTm8UeGbjnszoZi6wqDzkZaKJ6HVxRJZB9V8xwkd3FPNoGZVSLvCy562Kd",
  "key22": "3Cy5sPnAcGVAMyeGcxAKrPdcVE5KDJy7tYDJjnGkx72EZCVikfbPfEn9VqKpArXtjfjE2pTHoYCGGbE5u6vDCajy",
  "key23": "pzesDHsVnCpGVhvo14q2UFL8Er3ExfmXGUD6sQBsXcBJVaqh5SgNZRX6fk8quLvPUVK8pyu2QYfxsDWmp8EwVGm",
  "key24": "4aj6ukyZKM7fat2vycVfjFaUG7me1tCs2e9rmeR2m9dYFRPqpTqBuDYrRatU3pbCBY6oKk549DKrBje3EaCX4EFF",
  "key25": "4UopdRBbydiMtGHuKmDptobuLddNbdv2y1ZTVzvgJtgdBonBHx2BdPTeKFqHcyr2MAnpGCQPSiTnm3Qd6VDamqDM",
  "key26": "2dQNLppQJMry5Vk3krXuUh3xcq9LBVqWRWDRnyGVc8wzhjpYaAP5nRTM1s2XCBJRVkDEy45FCumDo6WudiobJzmq",
  "key27": "5FzqHHKJ5mjXLige3q5tfUVWnidCu7MryjzB9DKUz7MYWdoAx6rJBi419tEave6i8B4L39w63iXATFV4Y7KWie5Y",
  "key28": "4MjEi5U3gJkdP77SV5oEoB6rdecf8K7nwVv2Ur78DNrr3Edsbh55b1CvqMbe3odg5rHLVrQPdYxVJkN3UwBiLpGF",
  "key29": "u5ogPX3MbisLkBezzV2EbEhu4tUETBfD4fK5owcACF7c2oMs55E1cUYzkCinTSxwSrLbErtGiYNu3Z7asvdGfoH",
  "key30": "2nTMMB9gW81Y4x4qkG5XfjhLcQkUPhXaSTj8JDWwpJsoqdqMYLxjP8Jh7fj446dTs9RUPkRLwBNS471AURn2nzng",
  "key31": "42s8aGr67q6ryby9FzSUffpRzjMkbnpDfBTjPKjqQmzmPbWd2QF8B1XED7RccHFhFg1ChjK61ujb7Z774gH46TZe",
  "key32": "FCLY32FLuxqc6GCWK81S3AeQVXJ3xFkUqXe3pYsjSenwT5ski7F96W2FM8tmSuKwWu3nJEcMDphZzXWv4NW1tbo",
  "key33": "Weo1jgketuUXv3FLsW1ANU4qd5Gz8tm1jfrqwj4qKi1kkys2sKQp4AQebrHynvNNbpqF3Pji9B6wwjEjjfGYg1z",
  "key34": "2sm2ZR2r1NnYJ96BuA9DaJJVFKsH51qxzw7xGzk35E1HKofaWnT7Qt68euHjrUGFJDQBdwFZTCZBqR7mcSrT9SAm",
  "key35": "3noXjG7y6GFE6kCBT4Cmb8sjfCcxKbK2znQZJMVJLnnATPvNxidagqnxh3HdFnTU6ixF8VD8kx75TDAzqrDaoeQb",
  "key36": "59RkxRWnUZXYzRzgjjfNR1TFbdsv81JimwHccUU8BUnzNnknTaskdUSFFrvUrxHSJarjZUnwVgZYQLUk3DAcmGKZ",
  "key37": "3FJiEH2tnwgJbVic45GZsmGJxXPJb56MDwQAUYQQso9irDUm2Q9exVMnr8ZCpPRUqbzhXj1yw254fiHxber5yKU7",
  "key38": "2ojyMhY8tfBemxfnHbfZ5VutJjYsSADCUAQq1upr1TDX1BBygwM1gdef5Hdn83q8ax5tcYfz2V6HdZJA1UrCsiMr",
  "key39": "42Qo4Y8Ykrw6EijhVsxxDuHAwTii8PNzKMFMkTY2dnixTZnGoJkx2aPAF3hHg5CKbgPLEdrRLpFiE25A94vsX3FE",
  "key40": "3xX6aheh1AMYSVqRRvNugcYVguf9nRWFZpht15vyuKgD1rMXvYSon3sy2bBV1brnxksX7WARwEV1KkvYaeH2XFbv",
  "key41": "2PwgkcBVrwk99JC59npqWEftPx3YV9JE4tAFANL62PqY4mxvGFku5qdCdvSUH3CcHCaM97gAqzLUDVs1sKVV6KF3",
  "key42": "26cQMS4F7AHyf3i5A8dmhmgbmoKJq7YPvQbR5QeMqbNq6Jndgg4e6FGY2uzXemYLFU7kA1SEdXAxaTsja5iS5XyP",
  "key43": "3gxpUWJmn7cbuRnkYVhNG26vSFXerQpFzSeewPrZHVdSJ3y8vA4hPQzFiuoez2BBmufE4mwvENkHcDeKdoctm7q2",
  "key44": "22oYtDyKQ9w96BenYiT5zGYggm8iTZXD3R4ESyUZssuwtQyuwC4y4ryYpy7BbHV3CTSCWWZy5th8iQu5B7k8Qc8n",
  "key45": "V5cuK4VkfQjLHZbE4TnKYAEPpwMuN2VpVWU3kN1x5haGeunooT7oyYauqPJ9g1Ucq91DsFfBsdXXywkSh1xCXCr",
  "key46": "TXGVX48EVxYzDcoZr7xSZahvfLgfsFyf8gEo5YdVvMkFekYJyYsaawdyfLwts9zDkak6kytfPLxgiSZCRNakrs8",
  "key47": "3vWp8tAf3PAEktNnkUsiFYcsZJZrVmphPxxfhQSqdnmg14auc16L2KGNKxzzhLp7NnDqrkZ8VWy5kizb5qVVKBuA"
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
