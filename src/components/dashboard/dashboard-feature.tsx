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
    "4mHpM54v8LYhWoDGmRhw4DDGzJtwhhAKcQFeiXowMjFyPNhuZNRHvhBXj2oBhkWLpUwEXcQzUCZbqL9mAFKgJY9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MUFHcSbQtsqQKGrYZqmgBBuXQezGhTYNL5CkxkGgeB5dnSL7ggq4scPpZDAKUuYey7c3ucAAVEFXSzsjKooDro",
  "key1": "477mXULzKWnMdGHFRribffLHTZztX4uNMFyhQscMdmLuWHkJcwhg3M5aiX2stK91eWibDS44scStMxcNhWHC9art",
  "key2": "5K53jvfM9oA4rn32e6vY7YuZNUmMMnp5ATCSzWXsUr1pNXsbhVoRvq9ZNwBqkzLkD1fZXyuRmZgCRN6zC8yhpwhW",
  "key3": "18UR9nfSxznNukpd1qi4krrYASu9b7vgyfW3cVZnkTmsAAdgjf6cM46hS5BnjJtoyYHTSM5WgkX7jTQxnPe9AWj",
  "key4": "FbeCKzpKxUENP7P6SRaz79YZKxoFPbj7NjSe9kwLCYhnx74WtefopJTPHBCBAut7TakhXCD7oAH9ETTDuvB3Uiu",
  "key5": "2wX2SNt2YqYPXhLAqjLagzsRxPMvFYzk5zNUFjyh39Seo2p7fkEdzXhcamrotR4nccsnoxCqXbf3GK8Eaya23P1Q",
  "key6": "J3bx4uUSYqgeAjgoCrKC6PQiAr86EGy7HDwNXPyrdeST5wZZtfDb4Q7jTEJPXD99xgzc2TX2NhvTAeWSesCB1fz",
  "key7": "4vqUagRQDZbnQoaJPQ2eCPiHADTPykHRrXKSr9kEjCuz2ay7AWUNx3pCZkYFs2e6j2fs6QSmdSzaimp6xKKjy1vZ",
  "key8": "2d7xJ84aRbbxU8SjDcknyjBVJ1MoXgM1DYAhMeKeYKfn7egA7abkv8bpWyDgqbVYanLea8gM3MWTtTjLkRnnB3SS",
  "key9": "5GR6xtRtYDhDqtgo8RT8gWYLfdvGuihGJg79vytTf5Fzdd5XQW1EL7QCsgj9iQmEqEQoQz4kq8QKT4apkSBTi7fY",
  "key10": "3QFmhEf5qWERFi8iaq9xvpJ4GfbDXEqRp3f3KZ9dh6wAc1qFUx6mh5iNMd46j9eVMcGbLWxhT8cJ93s5XfCVsFDu",
  "key11": "5FnU8RaoczSkp1LasrvmtH5ntLr3xb3LjeTvrsZ8LmKvtFJ2UJ6vDePEUU7t62oEs58u1yLSeYvU87anqLdXY5AY",
  "key12": "3sRVmfNtJBhN1voCZ94s4HkiNmiz45ffUL46iJEAjc8oRBkicZtBTDaWR129K98ngWdbLkQGMaKtQ9yRhxewczqY",
  "key13": "3rEiEYEJuL5aDWdhKR8CzLXa2ASMDsN7C4nxbx9jFvTdR3J3kZ5ZsJCqeDTP8QAjUeikXt1W5qT71ZpMSTE42iYQ",
  "key14": "57tjeF8bgAaPanbYHJdmrpSWxaDpMPRqeoc8PBD3sV68Hre7U7suMQ3GpqbNtPcADUThuuYJh3cy6wCGqRf1sziV",
  "key15": "5eeRtDhc28gjkE8zUsDxuc5aK8ZjLQjs5UpjkYdnWXkKqF1hR26sBJDrRfEyD5tX8EDNGAoG7ZHS8bqn4F5BDmzm",
  "key16": "3vvNotpGTuDgLVaXquBhzu4gCrHHFYg5q6yUKYSdViMXU8fgnB4SrcARA4qM4hYxxfDDtbpfb2xCCvVZgQyCzRyA",
  "key17": "3YruUsBSuyR4Gh2pw6nq2TyGzt5FtU2NjqVv7H14Spu1t1cigkkqWR4egzHR4oq3XAY4Wfoxnwf3AkCHZE6UEFW5",
  "key18": "4Qj38Z7fJ4ttesH89QkosRXq9Hps4pqeAqZZP9b9tbB9pDf3rcgU1YXxzwag7dtcAuWQpATM4EwvMroZNCzSpEUW",
  "key19": "2XJCYrwMCdrQFs7PBveJQ1cZkRCT7kMYnZmmzBmc3zUVz4rVghe39Gj7hTAQSS7w4rxF1PSGGG7vBup1HAF4FkEp",
  "key20": "kGYBGvFubjczCc2ZhHWppvWmwZ4JCmBWYem6UYvzuDw6LraEWGtvWWHpqdCd2Vtmtki4GXaneLoZw8Qyrdw3oBC",
  "key21": "5h2cRtGDNu1gCLaDqSKXdHqKGNkLyrJBH3ye7ho3co6hvoQzGxh28zt7kcUWR9uEeb9SawHhp4XjySqpcGoczis7",
  "key22": "3iehx25sdxQtbtVPe6YqXWfvEKwNqBZxAqqtsiaJjS85gEVuzhr6jZDczv7MssGPKcYpa5qCUSppsKhKrDWKksxT",
  "key23": "5QsjfpNrgLog8AK5JN31qWr3hmkzBz9vRDUh4d2XKuyUcRWMC6YHTxSTZCYcsgk8kpBTU4EQNceBGqnNPzrg5Kt8",
  "key24": "AgA3svDgqt2V3cakE8BWEMqNU8c1vE2oxGtmtJwE8dRXnAnoVmiAEGUp5HCz6DeehV2De8Vj1m5vW81bPuBrWF9",
  "key25": "2VXSGwuUWVdpTSG5Yn5i96H6uNeE8RypuSpBiDQNMUZB1PKskY5EyiaVTp1fqk4GNeNaJ27NtREa4pBRUs2xft3B",
  "key26": "LJcUVK1v5cxgoY4ZzdjszFQGBRVAjJmXVPSvydjKuWRx4rFQ7vPNxrUF7RCkN5URA978EkRPrEYoi6XzXrZqPmL",
  "key27": "4ep7LYkGkwFHJ3SQbkEqPg2LMhLN6P3AJ4ARb1yDhY47Cu3d8KjFTCQ6EwrsTgrPca8yRnWcyPVpURwydT4mTvqe",
  "key28": "5VMjhaJAxdQPVvBqTaX6U6w22FycivL4nRRferA6cqH55G9gDwz4sf4MaKwDXfRkdCidrrnAVGDSN9KNub5qDvnM",
  "key29": "61ngdjWdQscHiBYgdjaufbgNrjTGtPV3ZKyCWtANpDztycXmDu2REvjnZAoAu2gpQ4GHCjSfSEfPvFhVRWm62Zmv",
  "key30": "47SSMUL5mpUtaugKKEhZnEvvhUqvb3T5ciTULEjfZidxyhkbHB7ZJXu8nMAbueREbBA8PLSwn51CQX57Er2GDe6g",
  "key31": "VNJVxo8uk5AaebCPUW3fkPm4UHY1guLymSpv2r6rUphm8qeSGfzP63Nmf9mWePgGFt2bdXDbA62WxZkXsa3PjAY",
  "key32": "YAtdVpUCMqHjnZc42yLR4Yi1R8w6rdrcTkqX9t1LhaQnPzmcKE5sQhd8NGzbBtHWH5ramdjtebF2FSn8C2C9ohv",
  "key33": "5X9rVipA7V4WB9TVRr4brW9c1pBayQEZ8RM3ABjEwaQW9d3M5HXWf8JFKr9xkbFcwBLkmYFxLaFGqf9MZP9ud6zt",
  "key34": "3CPWdqJ47maqjmznDjFUk4iqu4aUJ5kqD7JjEYwWc7EZqxE2xjZ3jhcLKUtHs5bBrmC3D3he82KixVzvM9m7cK1E",
  "key35": "5hXbutGAcGj4bXNmFmukuhsheahBfsC9nTwvak9o2ZEtr8KXYDoTCKnGvCHgwTpv8KTjGwN2KEtAayeYiJvE8BR6",
  "key36": "2tJiHQxoA7ErEUpj5wio6o9k4GfztKPathjwHgpEYmZRi27dt5UvUQ3rqqJsF78AH9zUk5DwJavw9TJV7WWRrA3",
  "key37": "53B28Qc5XJ1DTUfjwJnVPsNS7S2rvUJJFi7nsGDcb5UXRVqy2vMsjARjjrkBWX2TJHbvxJoTEsfu5f3neBt46APP",
  "key38": "36EMfFuuBL6r25Er2ZV7z3BEkqyLvnPbpvFiwgHFcufjNzhjB2fEEiYN8bKUo9F6HgUWpzwqnPm2fCZvPxxkMPQQ",
  "key39": "o21CTBGZVxngMxhpGVQuqevnQdKnvAu4JeJ4BTq2XYbvKs9u1pm5YUNttUSQCXgUJfxJduxvaK87eqH7L2QA5Ph",
  "key40": "3D2qw2aRMJvHdUpAYeAKK1qwMFZDuk9dBgGJdkNzrNWs8pwH3tknXeTyXVVa4BBxUKj9jeUL1EaAff1rJQHi7geV",
  "key41": "5VVmUHQsTd7pcz5SNYjsTbUDsHzrncsh2kNKjzQvoaKQGiKe4xrpjNgsHKDnkqRuXVAjFobdymM61WG7mm3WwLSN",
  "key42": "2EYfgy4bRkd6FPXP7nfXMgJpWKccjMczUbwR9HacfHDFQ6aPtLD3mbfuBHuzj4HG8FuED4jvyJ1ToneeUxAP13qM",
  "key43": "26t8c5DAB6ZuNz4JaZA8XWVdECYutXKo9itfr3hpW8mMU2pYEKnfLwYJyQbrHc3L7YoZQSgEnFU8wDHimDfHRYGS",
  "key44": "4wi7si1HiBqQn1WaxMw4yL2YdXvSoV3kyLyM1347WdUgeGaUytA41BMDaeD43Mw5zvEUaGZfX7hw4e6ktCVDHyiK",
  "key45": "5N2oi4sbpdwjszpHsTTmsRz3b9gK1uprKi4Px5mwYnvGs8MvNKUXmjaiLd7AHbQgyDb6m1vwsG3ZbECHdPEcfXAd"
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
