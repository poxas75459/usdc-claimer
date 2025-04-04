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
    "4fsQdQK1WXHtJUMjn1ux7FvnDkr3UvqPKwTZaiiCLfy3tGn2jEU3iPN2cKx8ERyuHnnYeMHvRaEa7D5k8RW8HDMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uC7pkkJaUzpaEVhiYSJvW26YMyuRE7Y97MyhQQrPS71bX7VuRen5LJ3GvszSr5gFf4YV6XgE6JaPnLmzWeuRqj",
  "key1": "zfjqMFxU6Z7UGdLTQiXsS19efZrfG1z5Nswhukee98w64ZUGt3zNfb8pUyfq4M56fnkzsCp3iokkub9DBTuAJwC",
  "key2": "4nKQm3AjCDMD9VTSA3P2Bt7gQhdbbXJEsoZTdgx6D1yaFHiL1y8aiMXDoPdG6y9fRT7MMfoHCndfJYi2fthPwHGn",
  "key3": "2VyqRLj8Jw9bXWLH6WotxyYFoWYFfhrYs4fc6B7vYH9L3bnsvVUJMjoESQLp2hgsvWgLeQXoV6rJ2Qom7zqqeFAW",
  "key4": "2ftw1qCn7k43fZYigjvR1QmxpdjUaKcV65Xvqr6a7dM7hz8PGvA6zrj4tf3uPJHSDs1hYnBjXN4XDxmPrW67LYwW",
  "key5": "2mmyprfU9Av9K7nuf5tRLwv3MAC3dAT5x3CJujmsgxM1KoGdhzK2VJPvvRPaxbqKWPJogwHu2PBnXH8kDnZbiggu",
  "key6": "3WTijKDLczJY5wQ2YVPPDPMnG8qNjnv18oUY1YMLg8tYktyFRsdqMLtpJALs4faWCc9aXcMmp7h96n2mD5LpuAWh",
  "key7": "3f5YizPunVrwhXq5zefCZ8uccMnMVYEqFkhibpCH1dyegpj1QerMgsaSC3uzRNHTMNBXA2rqWJWzbdNM3h8UXnQi",
  "key8": "595HQmiA128wHpAq6XMyRGadB6XD1whxnV6UEesitqiCeR7fQExUdmSkoeAjMmBzaGFuSKyiekhmDFVYvpXkmBYP",
  "key9": "fYxPztpepAL5fpQKst2i9LuJE4ZenGUh2kCLueddQ3DdMKaW71Xb65kLvgaDGDm87Nrk5NuiazCvBGJsXG7GziS",
  "key10": "3w2YDJ9Lv2B1mY4Sr6UTFsFAxXhEEwoQh7kJPwCbzxxPNysrvMmTfHcbENy3eesmNp8woHESeeL55jztu3NSRcMF",
  "key11": "Ny6T9hCgw4pBfN748f3ZJ8dKP1ws6RnMnVbguk2Pzd5josMSrYGwt71XvsnhLMDAxhoqTTqJYidj1sx65nWh8qC",
  "key12": "28HbS2Wiuxe8N6jrXEqpTuM6F6VccxT38kAW5de2y475cHs4AZxSM9MXTRPipoCYwkkrBGKDhhkJpKdEqZY1aUWw",
  "key13": "5CFcCKVovYp7X2CPZUXFQGz3WamxmM74y3LyRqN4nUWkAixG8WFPLQHes1U4yVyFSsmc2Ebep2NZEYLXf3E3P2zo",
  "key14": "3BQJ6gCU3yqmUAbHmab2LN5tu6MrDsavBaCoSYUSi83iVwGM6rofjodFuFXvVHCVoF1JBajGfxNoBAS52QyVZbJX",
  "key15": "4yVRGMUJrJhtecUtymRzyN351CrCbX8S5sjtQxESgBT5KPZrhgRuj4PFyf1f4dS8KkA5RWZboyhNHHf3rhtMy1vQ",
  "key16": "29cc42XjfM1uLevz1VnPsFrfizqw9cy1n4kvvSkRCuiu7yhg6A5vV6Y41pFyv9VBhe8gC1zHY7i6o6UzYCmqqNYp",
  "key17": "2Cv37UaVAad2jLdUhUnRzSzJMsdLAUMvVpaeHmUotrVeLT6cLjSXUM2PmUuerx5TNUeoHByRiKS3Ma3GHNPAsMkL",
  "key18": "4bm1CpEenYwkssfwfwcqFkSyrn5P6ZNSdcQbM3jQftYagzVJuALSansK7uewsLMfXmdxmtkm77fudspa6TtmxyJg",
  "key19": "5YxHX2bCrhYozy5jnJE8HxyjQvtbhHGMpELSTuZ8yf6NaFur6i8aQpzipMt8ubqD5oYL4DSkKvgXwcdaPryzeezK",
  "key20": "3ZtnNPqs5AAFCSqrB9hL56AoayoexPPBwHQiz5UeMuBn5wuPggj9PsyG1ksGiX7PUrGibzMhnFCFg7Yc9e9JnuNk",
  "key21": "2uuAu5UPPuedj5Ls5cT1mN8tEMEH26Vi6uN77CeBy5a73o2CHgeHgiPbA1BxsGbcvoocC8FaCHrHi2hfbfRrPrPT",
  "key22": "5riEkx8NeTof76LZyhN49uGntqxbofhfpZRjQKfXV6PG7364QokMRJZ5vuvijiWuvtWxoy8Yc8RHCLZfwGRTNXf8",
  "key23": "s4K3Uh5MRYS8MWgyK1gBxJVPQ6kdNcKjS4gWAMLppZostZZZiktcMJuc1gXPwq3wisxy2iyjd4Uyek4eiT1ydnR",
  "key24": "Vtdmxehp3Fz6HQYvpV3Bz1LdFqYpSNUnrSAofEG2tGFSXg4sWHTpWU98eTv7Ub3fj3eatjtSoZ5eH2z1gwVBYQA",
  "key25": "5rrTT6VShRuwRoE6DzCexEvnGnxgQV2RaGvKe8Q6eTLKVvK314hqvRV52s2a1vprB58E1i66RQUNEbSLgrNsc9xN",
  "key26": "63UgipWSjaCgiwgP9WZN7WSjrUN8uezhhAtNXspD39CrNAu566hMVD3jRmE62k3BxjRom8N8jQVrFDhBFSXWpwAa",
  "key27": "59S1fEdnqjm5canHLigpFcW4adUQLoipAtmiFN9mpMGbtGAr6pKrLMVfxwYnYTFQHUgGqBvx6eaVFdmZuCyW55PF",
  "key28": "Xd973rqj1rBALvzf5964NWEcxq9uP5cWtZTTqMh535Y9D7TE1PW19NgLuBxAt2BsyaAQ6cdstFrBybiVkzGHLwu",
  "key29": "Jf5oKFbGNK48m5KiDKqdwszaABFQ1ESvZsrqDiVH5vieTxEDf7CearEd5RMWwu2NF7NhyvcrPzvrkKu2yCKeb3P",
  "key30": "3dHTop4FMARzQMpPTs35jxFeKHttXd1ecJH8ciUu6VzhmqV8NHJP2sXWtNYrj9JRp4SWS1GyqcKpttpHn5XpyRDd",
  "key31": "18NaX6exmBsh9cySZf6x1GAJW5iyDzW2sitShXYUcyXie1v2dk4FQv5zu8Kkn1XzMNJJmdxHG35DdDafat73wDc",
  "key32": "GPHSNEua8f7vEzWkvepHMiKnXV6j7oAjgM5DTegjB1uWSpkemKZurMXmSn4p5syBiZk6DeirhwgtbU23kanu4oP",
  "key33": "4R6rEwbeyEnDXSmiQTvH5odD2hNtrviusG8kwfZ5uy2Yn6uwgAvKrBCAU7VeQWSs7LoZBuDdCU4CG6z5yFuWjVHu",
  "key34": "3tqFcRFKnHQUk3CSTrdryoeYUDqB7cTNmvz4FVJvmi5siXsz8AWJUGkFu4u5VnQrVrsrvExWxHkP8hzP2SbVNEpK"
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
