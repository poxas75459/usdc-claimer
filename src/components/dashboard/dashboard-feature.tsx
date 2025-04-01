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
    "4mLtEyhJcnVujsqDMBxka3VitF366qZcmjHe6VsjcUiSMeN2vbY3sVT7fvZw6FHusk5cuTBGAxAV8VMSvqBesuwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4FsiK79eqNz3BbcYZrA93cKmVXumpxNLNrWLHtw2yJg3bSM1B52KUsnZvVYhv3v1G4KQAbVUZAtEQNTsA3DjdX",
  "key1": "41EMdLeTU2bcHF7iZCVTrQbjvcutqQJWUnhA2KWyi3XZ9oA4nV8D6bu9Fa11kgoLrzgBsTpVButHd84teo1LoUo3",
  "key2": "5hqPo9jH34pWcy5BgvhnACzM1sTJNjXn6HtzrxcSysHYrE8PfH8J28xraDFx1Bq3CpALdiuZ6x5aqpfQKQEMuRGm",
  "key3": "5ySvDE6NFeiByuUt2eqY3cUJ5B84HKDVQDnreLw7qWhLLaeC5LeoosM8buxCx38BoFYWPUe9avWGPA9A9SBf5ykb",
  "key4": "BUMRVA2aUAMN9PFmnPHNraxCFMPHkCxDhnAVfKPydAAnpf7iBCwKKettQMLwKeF8N9ar1C39yz3gnMeKXUQgBMK",
  "key5": "57MRj7nq5upV7KgfWDEE9prmWTvEDQFuT3jZNFEtcZXfoWadExWqWJhJvFEZiZdQTkjHrKu1y6S1B6b7CdeJchdd",
  "key6": "3L2vd9JZCcUEXdNL5vUipKL84z9ziW26t38CYKJVVTVAc758UyMoJ38ZTRECB2rp11kF83pSSjcXzCZrNJNSNcHb",
  "key7": "4oxM9mBqb69LSthu7GSbhxQPiCENFQvZuJ5rvWmUUS4JZ853eTmuDSviUkSD2bixqaWfELe6vQaMqN4MZXgPwy5p",
  "key8": "4g1C9y5sdEKR6iXbyThV7xPVAY14AgzcvdMGAkrDStuCVxyvjPVMoueZx9veCF3Eq7tr8YLqp7RDrFPmjyEAxSKE",
  "key9": "5ChxF5Zjcq2smjg1yURUo9shBec7mJWQuyEwWcFciyZ77BbS5efBtR8Z4FH8NhypzH82Qj33NQ3pXENezq4YZCmx",
  "key10": "j1GEkSQPRLeGgkt3Mu2ewv4N9anioCqgWkRtnrbhwtJb8rSxYYhHJkvx52wV3CmcJBKn1EjVzQUmUJbfBYmWeRr",
  "key11": "3x8e8MzAr6nTs9Jx4YDZgJ1nMoGPkvcadNECrJyVSQoruzTN8uDqGWJ6CAaKy51s1rjVxkTB7ePhWt384222MTRU",
  "key12": "2em8ajLqhAkRerMJPWN9mZYomMsT2PkbU8dAoCMK2F2H8dKeVVPowRDSknVXCB6fqaQCNM1cPyFDY3D2WpYxxGom",
  "key13": "4432TJePgTyTV7ZuvPNEdn3jWeTTUob236fvyCCZ7MgHwvq5i7wzX7FeJpNixwahX5s8M2MujPmMEmeGmN6u6rW",
  "key14": "2trknq2X8H7RSUN1icsomXmQCPrhr29LEoYpKVUA8ntfaX6azQyGZRTFsLZYMH4VD1QiyBZprq7T2aLSFwQ3Qonp",
  "key15": "35fJCXkPX6tpD7JfmhqEbDCJz7XhbNfdoHtF5twSWYD1JkvG3zHTfiSDEyhjWJUtn3QHYcnVCjF587PTHKGK3vK2",
  "key16": "4swoQ9cryin5DGeyz49tGFSG2sntd34aFhKBhLJft5rXEiFeT1cjT3J6oDYQnx2JFgUU7e42B933Li3TBBtp5j5v",
  "key17": "w8C8x7sPGksWKcM4m9ZtcxMynR1d8FArFqc78myvAmtxXwvc6xTH1iTu17HMkfKZpJTzJvm8HheSN21yNtSCtH5",
  "key18": "5hNaYbnbAi2Tcq3jhL9KTP4QC9Fnnrsp5Qu8wxAB1riHsAwwdZk4LT3xT6B6kHLKdsjpkTDm7EfKUAHxsRTBDs5B",
  "key19": "4ifERqxHj21rV97fhr8EkgPc9HhyQT51ZwFpDvj24af24uM1j5Rr9fnXLbYJrhxXXDDD2JKyZpNmJijAo66hLzqk",
  "key20": "3G1w1Xkkf7FJ63Fi6pzAJWsTTzCsbwPKDQmMMSLM5jPw9s1DTsaHQmZBm2SjYtRRoR4hCSvXh2rtNpPhYQBQ7ucB",
  "key21": "5f74Ar8J7wpZne87XZb3vJPCxvJnrb96wsCiggn48J5C1U4pKxLSyqxXV4iAkVXStQdY5KTSgiWFyAi6meAYoBxi",
  "key22": "5QR6XYqhkWe76wkgFmacVneofYjkyZnvxW3B3oNrbWPP3CYuBSuYYFCq85asDjpdNGYcdZhUMtjxKieWon3b116N",
  "key23": "2ay67Lpi1NzX7fVXApCNvUuPAqQtUVLtioNCWAm4wJDQfNf2ygdTwSQn3T1qnUfQKCPF7xutTfoaiAXxEmQA1JQo",
  "key24": "Bhw1quwByRdAQ3ABE2rKQi8su7u62c65BbLGvN31SazAAAweqVattMWjtuyvXX7qF5fueiQRTuo3Esg3VXWHev6",
  "key25": "3WQyPHVvHaoCZZFfFN2wsj4pfVumz9FQUTkrbt22s5UVz51gkt7MZhjtfHi7CNUirQAJ9Zvz425CujD5MjUWByKe",
  "key26": "38dhRgGaQQPT9ARbfbLqY7jqDUtJFuY1Gz3GvNkn6N7v3CCWBaJ5BpsPKwkMd3jEkciK57MmtCrHEyf8apPN198B",
  "key27": "3Th4kMjzW9MP9Fgt8wa7zPbsgBmqkmRZrPPZb7Y5jsg8JoXry3pbyeiieUtHuwgQmbopjAtJi93L3yHZrkpCxfzu",
  "key28": "3EBHvMPKWNUf41aCCLUv6vmC3xVr5Ztrpta95fEcqr5xSEDq1YE2YxWgURGP8C8ioEdCeRg5zXAqvPNDdutKNd3z",
  "key29": "8c6WWHA4fc489Uz3vBjhv2J7cERufUUvfdT5wLL8AhbpHepJ9qr9nnQGhc17umX3M8yWnhfu98BYFQm2jezsZRc",
  "key30": "2yeoycav6UJEAhit1fAyo32WbsZqpDEwhf3w7gsfYHP3UTZsGX5NE253JKHEAMFQftqBbLsUgBHCqQSoJ3MFDdzn",
  "key31": "3hSSLSWAiW2zU3qi6fq46gSBdm13XDKovPaFCtP6KQp6xwgYzgMWheQoDfJtfsYHEnSovCX2MxaCZ4ThdhYTU5eA",
  "key32": "RCJHZnCdZ1fsehN7DYG7RBgBy2Fe1QECbemUeqH7PUUz5BCEipv2W3zyFvcMkrBCkL7w9WbHA2Xy73WjZdR7UXc",
  "key33": "55NK6hhDwM5ngUWBdXEVYYCTWe8RnbdFLeVP8gQsLxwY1vAdRh3C4bcg4DKZ7TvYN3zQE9NaYrvxnFqCRhapR2ev",
  "key34": "21sFxk4kpkDNu3nQKxz1Ta8YjC6RpWcyxEWBnLxcE1ZNPLDyjSJmqdAj5qiK2ha9i3hHM1mXDtZnv8goKatzPRAe",
  "key35": "Rr9KmMeX36zYnqkEg5XqmL8AX145MP34toBbv4HGtLqux2fPcCNxtAMyXEtrGrmTfCb6RVYMMy79WcmS2a6VqXn",
  "key36": "3ntGPVkEADs9Hts5vL8Higiu9RB23NZUxJqG4KQqSE6geZjPTG7FDw4v1gonjaWTZpYb9K7hbsFaejqoPSHXJ1Hs",
  "key37": "4TVN6hbofCYmntFYqnytv347KSXUQ5CGj3jHxUckvU8i46XtAUam1ppsywpaVKEGiCwhmG7AyJxEWQidbMoxA7Er",
  "key38": "p9F92PYh6d9g4wQNwjr2aWzvaKmMv7mSJrNQML3Wepps5upkwKL45Z7Ver5yyBo19d49XhP1eqYQRn7RXAWvGoo",
  "key39": "j1DfpBzksPLdT6juHUQFCpXkHLxTqkfgAcc6TtorUEg96QpZ8PVA9GvVYdvx3jMnZuguzfZWYbg7objz8UqMCjt",
  "key40": "HiT9JSbSx843do11ARpzTFyT6qcCrr37VvTRCniA2ruRZJY7dkeYBd84wmuJmcdXxr5f4EbZxCU2t9oZQm8VTL9",
  "key41": "2dCPwuW7sGwP99EB9i28td7KM2kP2bdrbtiRKsSEfXBBsZjAuZVcR4hWp8xNPKkx2qcSw6FWDYUpPDb5df3LiUQL",
  "key42": "3TUKXGgZhDdC3dteEKCDA8Hbekv1tabrQWoLoSh7RZ46ePakaf2gB76A6thnmHPSDD3nikky3qFeu1WTKoqBAz1J",
  "key43": "4UdkuZrb2y7Yw7g7CpFcVmsnbCKbpEa4NWwUtvyjnR12iaSD8mFMRNo2QevMSHZnbWWBV6w6m6Zii1KMCXMBMtKx",
  "key44": "3kYob5KWaAQZrpti9RhTy6cWC7givFzXZGVsmf8uaxSQ6NiCghT98XZEYoCgxBnQkG7d6W26oityAbzE3pu3YLjV",
  "key45": "3LvvzPD4yzpBscMmBzbicbqWoyoP5n1c5QS6y5hcJs9Lm9buWCWH44BGm3UtkVxqhm6nyXC93C2XYxA97CFTt52U",
  "key46": "2HgLXiHS9wkz8A6HR6hvwZpvduVrrh7PtiUABWjqrnLD5bwaRevFX6cQ1vgfZuJ2XJVWrF5Fa29pqkg5pdFqa5AD",
  "key47": "5msUeoAw3jM1a9HrYzj6kXwasQ8AGsZa78VsWirJ5ronbuJBXXFSZYxyufY4urDfGctDT6ZZPWwo3cgS4REuAFwV"
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
