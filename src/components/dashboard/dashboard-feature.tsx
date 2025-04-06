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
    "4vH6k9mGVVXpfeGBeTRRC25tzrmSH3zCCbgWm8aJ4dwhdZtUiAkFbK7TBRtSChkBEnrN94ZR9YwWdg5J2YnHHvTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwqS2PmkidHYxN8ai2MGe27Czy6qf7bK1Ln5DUvEaWHmAKoyr36vuuxJqWptMmPY2Yi2gBTro8YyEe76qtWPd31",
  "key1": "3CSoLmdregoqviw3rhQRRhk3GjPV1MmwMbrp39sPGUJPXaA14HZ3d24W4jnLR5QjkHc9NF9aG3AnURqL64awKYz7",
  "key2": "5bAHo4o1fkDYuJcnLCATez9fYXYJwsQRFLBag39Cbxr3KaTCrWojSbNgqiTSsWWufE2S8NnPDAFdo5XgudxV2qHN",
  "key3": "PKDmJqLd2WReQbtaJuTxfPsCPoHEqXuZP2hGbAu8GVgGYB1y4qkVpad5YeKPMVQn7F5FvtQ1iryD1J6rHNd1Eeo",
  "key4": "2weZ8dXdvA5kyhozfRA1yK8wEHCZHss6s3peKkgUz223RiTY4xEG9rxhN6cJtFg3RqHV8Gv9eABM9cAKhSLN4Y7Y",
  "key5": "VtHY2FYEZPTDXcAGpBTaZ3C17ABioUtw5kcBXiTSXusWEFjVaAR3tb94BsLMWoEdhXTAbqfcXrb9RGzjX6WjyDg",
  "key6": "3tzdnyAPTsgPW3p74oZALXpZ5hm9cruvAgQYreZy4qKDyUbqqsxG73nVVGjddwSkrK22XuAhFuKUEvQtGeS123S4",
  "key7": "3r7aaamkPjuV5hTGPrk6zabQwUr3BWJTvij8F18JYRXbzDpHQUbvqLoRQbxhrivJnNYxUivfnsJKyGr8wTQuvwVy",
  "key8": "w6ZM6V9gnfA8kQV19PpQFt8LTjpinaoGd39mDcihj9tCAs2wscQ7qwUwcugqYJ3gsRDMqiny7qEBMf1TMV4vjER",
  "key9": "4TsotgdXXXEmHdh4J2gQ4xq7VNrnJtmxF8sD2ueiRnUY6k6ntFFEuZQwftZTNM2Tpi1L5K4NHXPkh2EUKtrFQmWD",
  "key10": "5jdS2FtiQwxntsyXi3yKGk1F1av5VDrrQWaQWJ6UYZZCDoWg4g48TYgzeUdGTq978JQaG1cZbVniS2Xpe7uZCv5x",
  "key11": "yh87WMDXGuvwAShii3bsqJrVSQXDAuwAyG6H5Hr8n62hbmWZxdN6tEnXb6jeubPr1pfMcodHk4ZtwRJ3XLNakj4",
  "key12": "4JUCvetJzeZbDJCcXjTq3TgeZQjvrTgEae6NeTNhq2K6MJfGKxx7nqsDZxn2ay6efg1Dyhw8UwZhdsDBk6Uv7HEL",
  "key13": "5pJp1jdxuoHbmayjFc8CbbeVcqAaWqKwc6fxUDEzaCJmAyfdVYxnn1ZtfHFEJdjL9N5PNJgbML71RZMnrjrpes8e",
  "key14": "RJZeLwdwxRaGDxFuPaWRXujeRGiLhw43tS1FJFsp1XUmhZ5EZGU9CFXcsxq4k263WwctbHDnsLEd84pZTp5W8jb",
  "key15": "5gXjsn5FqoCYyVxQ1NHJJnQyzc7s2zqxYUCFYv4eNML8TRkFonk3vC6X9pNzTUrsouDUpXuW3Dv8FLdHRPDSASnf",
  "key16": "2Q33aY2u4NS1h6xC6o7ZdRjdpHYKVCEiFjQxu4pyLpaBpQuTPhngmAdK3T4LiLKtt3xZfeuZJiAKwKUZABFSoLPy",
  "key17": "2TAmV3LZwfkChygQVzCFvSwhYSLV5rZ79kq84wVXpRDbBenXKxVc8bFvaa89zvg9jZojVS7FrEkpcoDb3cqWeNPq",
  "key18": "5XMgnRhT2BuCFc38WWEXmhxw15rzYPW97EiAEMJrhrtix88gC9vyBXxAio1pNeaYdTsycMG1FBDDKe7EgY4WP2zr",
  "key19": "3vWfAacRQUgHeA1Ku1ggJp5w5uzwSwvqeoWKgGZVS7gN8akH6rhjZw1mX3e8mYpeGxFuYr1TGY7DbP8f5fEga2MM",
  "key20": "ZiPsjtf84C5NRg6N41zHBFKiN9EuNyaZfa2ScVXGvvfD91P5jyarVamb5H7zBwonGJ7yGtojimmN6mAHQvPciWM",
  "key21": "8j5W1CpTgkJsUPc6VvEjgd8mCfXqyaiwXUu6F5r7Q7SEXkgeaJTpyoEsHy8Sv9wThRcnBAszuSmptr6Q1EcAdbs",
  "key22": "2d5XyTw4wmuSACuGDVU2tunwSZGpg28sz4nMfnm8RLrYiZviM3oPfGZVzjsQEws43Ruzgq5uaMDDo4YFXvJZoTPR",
  "key23": "2iER2K1ir17nZLmU76fBDCT1uWpnvrzyGcE392MgkQvCKW3xgkfo5TSZsWW2f2WLNTbZRdoscNYZHDKLJ367BcCg",
  "key24": "34PMF8tRgeqbQCSSpMdEEqLUFUVu8yv3MPzGxHKY7xSb3f1Q87GTSXQFhohNq1yfB3qY2cUe5DEzKww5XtmFDbPF",
  "key25": "5bTMnAPJC2aLYcQHNTTKUhTrukiZ62s1bsDW2nNwfNzs2NwQFMVMgnsgxtuTcQz4WAJPc26fLBPNjucBFpFZ5vHy",
  "key26": "MpfdPs9D93FyPLYTownQ5bXA4ijSuENcikqUwjQ65yAmTpgTLrcXdKxDyV1VD1yHfMb5HxLLcWDSB6jP4eJ2FXq",
  "key27": "5jDHcb1N2xKcY8x6d9ub5S5zuEbJKNZ9jbaTnoSNEDx9Lbdn2mw5SPgUzkCjrH2YxxDpZ6uxZ5xjzpSiaMZWxsM9",
  "key28": "ykf9z796pH4UDgb1CUL8ffrAkq3ZjJsidLkeZXYfE4boQFYcBe12k2Ujy4WihaQa3BN6G7twXbCwheGoLLikJ4f",
  "key29": "2gkrDabm1m3nw2X4EN6GrwbdP3gC1Kmrx3MVCjKnnTvT4QtJwpMninXwNGKjnVosdQcoqSq9vvZuqwA2Dr516dGR",
  "key30": "42zEQRr4sz83rQAiiPtiJTKrrRQ7bRySZFbEAxMjWuotMkF5gXSb7BuHRfhohaoezvBjUJLUr9dAifKfREHvXNDw",
  "key31": "5biTP9TvnRWdo5kXf2qTqrBdZsFTchHbwEWn5p1wqx6N4gKaYFoi3a7A8mBxHRtot12Y7jFAqt8Eto8NKTYgyRV4",
  "key32": "4PGEP1dKYhPcD4ndupnM4FkAV4p7mmY6Znz43rX37MV6TWMrDjciDhHCJfY3knzcBNcRmykXQ119NvFy8bDSDKep",
  "key33": "5m9eit2x7z4VFmiGzWdhcud9LfC85Ty6wapQiLzhvKrS253bHGNovBEJqphGcBWeondA2yJaqJbS2ZQPQSUvtuwx",
  "key34": "5hCi2kGsnbhfMMJrdZuP296CpbJ8j8AyuBfiVhiKkABAqP9VrW15yTNVvu5QbWtzW6jAUtjft9GVVxANco8NFDMJ",
  "key35": "4vBi7163ithXB2AbR4kdiQrQoHVbLo8CPXk22UFyu3p9ikcP3SSYF4NdEXzXEuEYc3xWrB6tqdNgpatEwwDcEDVW",
  "key36": "3yH3n5baJ3Rtc5Ynca55YwSFu4Jx7ZexxQyFo7vcu6ZfgCTdzqwsRvoRN1kb7Z7JGbrKWgLC7j9QuJxY7ndEPC26",
  "key37": "4Ncn82HoQDoDXTE7hpAdeJtyp3hAU6dQmhRkNffdh2B1sGTmcwpNhbWhKbPur4kqQdQVdJ4fKwpnV519ZGUjEGQy",
  "key38": "2Ey6GTM6jvJjYrFTsCPfP7m838TXimMhLoezccgVWqoz1K9sE556igNXXNhMH5QNSTUos9exmWPg9XnXqLq6LPep",
  "key39": "4vfm4BQbdvRUvVCTjUNbVry7VkRLBgQn57SDWoUfzjdsWAkRwcnng8ky6MXrvvw9MYAcD1P5NueLbsn3AnBW8KH2",
  "key40": "3A9HSUeYv4X1oqYmCNLGYUdkB1um8NgWgXr9cVsBYu677LnTW2zkB5UgDijmpUTxNwWvVMDaVNBiTwRegF8E2FMj",
  "key41": "2mnEp2pnbJTe5nWpifbwcURvjNkE4vnRcHYcfMQ3VJsP3z8rZ5SyhDD3ovGxhWdJjoTVRZhKY1r8rHF4Ff8X4HbY",
  "key42": "ytfAV3Msc3xTQMfDzN758MnCNVtowxUs7a7jrEUc6C2feYzP6UETcsvdVpYy5eZmZ4A4DWaRbRm6a4PLNX9NbZN",
  "key43": "5mJ5XQ9ZeJSwLbEEVPxoDBwbixM6PNiBpduhdJTo1J7Btab4nQWYXSpvxwfhg1mjNjkfY6Sc1rkLDuzw7gdG9wpb",
  "key44": "5RZQt2iwy1qmnqoUgVtWBEFGiFpfnhDg5tmGVqLuD2EcYphAR3wHCX2dHrrZHkg6c2614pmLqvXjcEmLW8EuMuMd",
  "key45": "2B4vN2pDwNtNfynfXLyorxb9BPZ6MeQTum6aKAL74KaNEovXmHeAj3mH46jgfjThJgHy2yxqs6RdGvVJZrudoyAv",
  "key46": "2M8X8EhpHreqdzcDD7AWk9AJtdF8Q75cgsHx6rwTUXs9zhyhdEPNrCQmrLgX4Zph2rUVtGtnDaXHpFWYSPU7r1n2"
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
