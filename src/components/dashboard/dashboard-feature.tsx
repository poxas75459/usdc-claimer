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
    "5XneBADLWw4gVnyTPePU6Fpc79wSzXUVZk2HKe5vqBZ152znHL3wCwvp4K9ARMGnAmiYeFMJva4iYn8TrLgp9E79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zc7j9FXC5cGGZsAPxkH2HbyLJzjk8CGHoBuGCJwTHjeBAzjgyj6gCKDQwgKs5Y6a3muxYe7UWYFKiFv4oVmBDzy",
  "key1": "5TJPifNioiiD61cxix53qJuxeVB2dTCbAZetK4JpK5fRAWGcTprVLm3J4dkxV7GnXxFvcaERJJbiBofACZMqrQ2Y",
  "key2": "4RQpdMMrgKA7dk6KnbonDwn36uC8CtAVLbU7DRwFDK85fhRNSWbidryDbMyCE71YWqNgZyKZNEx3e2t9bm5ZQJQn",
  "key3": "5uohaVHv1ja6Bv46Db1MHpermP1pKTfFEama8swUs5Dv5ZCs1nrMMi1EzfZyRLEdRvuG8WWe6syWxhUnknEguSH8",
  "key4": "N97ieHCRJB8pkZn3Kx823ARoT5vo4mwaDRLiH1JebJ1U2LPFBZiwihY611L4Eq96avPdVkmvakbt3biKafgVwNY",
  "key5": "54WMpfVVneDc72es77SiGoaX2VQ4RyAMHgw3omunPmokdCwpyfkaz4t37y21DBaqTpowaSRuep7izERtzALDVnyY",
  "key6": "2aY45gcUrmVQrWTtjwjTRZN2aGqNS9vV8rj4Fbd6hURNxbv6A9ZqekheBF4TqTrDNm4MDMFpkSGAfAPvufq7UV7",
  "key7": "qDs1bxSxGHy7XK5VJGrKyE1ouLe8wM3x9CHgvi7Hx2CbMX6LCWtCzCbmNhaoJ5kzrxAZb31g7gm6ckGwgB43EBQ",
  "key8": "32Xycd5vmLefDA2Vc8u3GgibjByiv1uU1yvDRDrwxPq8uLXgSuF5tVRccyjfUe55NXuF7ymz4AeyTq2mken7eLQ6",
  "key9": "2uBYoGFdc3o4WWmu7iucyU9fzicXvVhsv7hzGkoR6FctGjsCW7Qg1yv7WKXEyCmQVWBYwDyDRj83T4aguJgFuExs",
  "key10": "4EuG9WEmXNrV47VbdnDYMB5GueHBK13qieEEjKcY9pkAhsFQGTSbvEmRhF4yz5CbwZwQzFz4usYd2kcaommZHdjn",
  "key11": "5Bn1CApNVhbtj6JRXDjppYW1vxYaFwUHCof28osCyGqR815gqE4anmc55mkUQKbnCGt2kjupToiSaeaKvzWTsYL",
  "key12": "4hQnrMTRdv1ZAmCDxK3ZK3R5EMYzDtYmLAELKh29FyHb4Fr6VoPbifCLRQKAGYCwZsCiwEpYyrJVt56hNsRJVo4Z",
  "key13": "5HQZuqBPaQ7CNZC5bb8k5W6KyBH32b9XRE7SVswXkndCg2XXPVhRQ9NKXBgTLPxU2fQsmTZdVKBQEjYus1aQrr4z",
  "key14": "4B3xjfBKMLahqP8C8gx9TNXPQw6z6TcjLzyEePE9NFDEeMQBgfLEmr4JS5sGFQazdeXTXyWGTduc1ssvNLvdYAv6",
  "key15": "3p27VcGNgdDoE5vPtb5dRt6cBgRnZeafrVMSHvV7bFwEWdEAZjpeALYsiHb4wk3GhnTEy9yyoVPtnKnQE83ERLXH",
  "key16": "3JBuyPjKCaYotxgWtbctM9fzZskdwg3jjaw8YhjqF3bGiiAFAVgaqNyj16bUjMrakfwovivexpZKkW1HxaDvkmeW",
  "key17": "5JFxMKHnNEo8qHUu78YxsumrvcQf63k35xiqjiGcNcoq62GmtPmcbBRpvUP9nvykpM872iXEQ7La7MAYBMosSY2C",
  "key18": "gKrcuxqckqJ25k3PThKnWcby7nEmQRHMYKrEedJm5fH6WBwgjERWxXnNtDETfrvKFkobUZRbupqP3iw7qRfYZwV",
  "key19": "unicRa8dq3n75gZn6eZGBTaE4jSgHPpzGFN4sDQSAekPS5bUDtvgenw5KXbzYNrK3cWi4RjT6cwjqzTMj4pALbM",
  "key20": "3aejzhVy8497fdUGJBMaGhn8cauMefjZ24BrPbZz4X9FRj5UQ91TU2LvMH7M7ouTaMWH7jzGGV9HpTCmXwx7GLJW",
  "key21": "dXJn5ZuRnZAB4mvjout1CRTkRwyYAjTLN3BZFCzXV4mJnoqrGh3pCxdd96EtZ1VQwg3FijuFUo7JfN2n2JG1mGc",
  "key22": "5ujsUqNq9MBPEr6xbTWYPcAWXYpfhfcWLq9uSH2Gdxr5VmbLtjHvoapGMrqML5X8uYQdTdkZXLzdc2uDtXv7bSAk",
  "key23": "2tGAQoi6di4vR6rhy48ZNb1YZtamSjE8Eaka6rCMoicVELvLek8t67Mip4gw3wS411WJpMNW23Kktos5roNFfVR7",
  "key24": "2yxzC4BHJYubY7DbXhrPELW9nBsQWZDyWpoYR2CtTcL2y7EhugoNZ5tHHBbAoadXLSD5mFHdMu1wWed7Vh9tE7WZ",
  "key25": "4tJb3NQ86cVHVoDSPjhpawKjhGKxV5gCEhCrBYGMCn3NRiRaY2zRM5dQqUWViUccrfaQdoWrzb39zQ2hWANsfwNo",
  "key26": "3JUaCxirnsUc3gpwgNofhXekqFy4Udg8Wdcd2TUBaG19qhiwAM9QD7Xmr5oYXGd1evxZjjx5PtTVRvbPCpReYTYk",
  "key27": "MsENUKs14hBrcarGTFao7Lqjk5MbJR4DJsxGaHjK6B7DmqDB9wsmvyrp5XFbJF3ixfQcXEeHby5FxsBfah1sqaU",
  "key28": "53NVJq3B7xWdWjwoZz5voWYb6mnCyCZ7yEY5ULdjVYvdy1CiJj1Tefw7txqUA3C52CtEzUG4Xt7ubVxduFoVyaBt",
  "key29": "4qTkPw8CEPyFNr6S9EAS25EccQUzJwQJsYBCURPVsm59ezWVqzk6qSaPeES2TGvYRYSzTkZdp7UtZFTJWf39yJV6",
  "key30": "4xEZkMnBEUSohsRQB3aUC5URW633fFKe5HhpUNtbFmiTn4zm7EEduDzwNp3QJruEpp97U9N7aNcEo4thEjVMxFxB",
  "key31": "5p5vNcpckQuFdceWbXgWteYZC9D9gq32185s6dwTdvGVSBi84LkFZSWwWCzfUBsVtGA9URWyZgcCZi28qxhjdWKc",
  "key32": "38ke2kSiEVKx4sd9XqWsphigEGCZvzXtTRABz24qKh4gKG7qyGAHRU9RpDHEP5GJZcEh5wAX3Zmm8fpjJRJJM1t9",
  "key33": "5vjuEVEV7SstZwdoezpZ8yy8waqnV3qwqf35t2odH2ZUt9okpqntoPRcVzjxw1DMxaK5N7ExNg83zoZJTHQrwHTp",
  "key34": "3BYC5W1AHsU4RSk6eHyTn8i3sMnpYtvHM5j5jLNG37xTExPa5CvFxeWN21hoS2czx6gykEJC5wHrBuhpVb5GxZFF",
  "key35": "4TmPVBMZbonXXu42aEdzQzSmpXTJtmGEomUdAY9jpSf6DCdzWkvPM2hsUJRKqx73WQggFV8UUx4QZUyXrZ1Gen3U",
  "key36": "4HUL5jibhz6uS2Q3b2QbfpTyBK1FJ9AWEvFzEQ4SFArxuBHLzGBztSK82zRhaxG2FC44NHp5YaHChTPiF7q5FoKH",
  "key37": "2i2UYi8hcyHYxebEtnfPqDpHuhgR4b82VQw7mFR3F1GacoRL5ZEVp6GTV9249giMKrW41Vs9Z9ydAaCmN7oDSE9q",
  "key38": "2AcpxW49NJ6YGRPQwiTsuTiABmhpzd7hzv4jF37A56UwLmzj38BGUaDQkueFAWkhBTuyGg8PHHBfGgHUcWkhSDm8",
  "key39": "27Big1qps2mZuAGz8wf1bc4TiXdRz8aB5izhJr3aANECo336erGHD7VUu9jJh3cG1cx7UYFNi1sUbFZqjyJQoP1n",
  "key40": "3o2VJLwGHUCD75CWEkDGsHMJG2osrrzWTgY2jhCEw2MFTwGtiMTeMLBGTZd9wpgqs6wJCmNRpEZw2b8YUEJqeNGj"
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
