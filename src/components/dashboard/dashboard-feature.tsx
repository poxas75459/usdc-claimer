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
    "345inUGXkrCjuXAfJMc5bQWVrunHZFUuNVzUC1ZvitP1w87a115cxZEJgTrdL5vseSdEpHmTyobS3A3opNejr3UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2tV4XZQ79kahfn1D5vDNGULja8sfny2Cy3FVnfGedeF9BYv84kwyFWtKYiwAaov4WZ6rxmk4SeUnUPKYviz3GA",
  "key1": "4uzRXXbenYNPwGsygJTLdFeLqqPZKy261r6wAcs6cnH2zJDJKhgSF9K7XBciDejVQ44LRxweqsbjY3aNTpETpMue",
  "key2": "3LkLH85KPfb6nxTLNGvnCN3mw68Yy5EP7n5CH1Ae3QvkmXQ5MktprtXSPDdRhE3Kq6NS8StwYGABLqrrhiGcZTBM",
  "key3": "C4XPaBTesNfH372Ehn9SpFMa49ZjR6ZzeR1HZYjTS6gHa3a8BKy6JRfcSyaidPoDAE5NuU9c2x73NcF7rc9pxFe",
  "key4": "4Js6gFcYnDNpNf9ydP5W3HFjWHywseycQqFSp6MhyAYkt22QQNYJfwqSheLiL84XtSJ2bkuGLkskwBHLCMMYZScB",
  "key5": "2yVyMwuW8ck1LNdj7gZ2eXPQ36h3jop9WuAYTtAxvCYDbwTVVHtx75W5LEjWTg7rwAEoDaJ5g3HtxvJH1XopcYh6",
  "key6": "5ZxGVLvinfmCnRQPJcaHtmRBoHYqjknAVojKxbfw8aHTnNWUv8233ZfEbNk93qyYDbpP4jJ3Ld8UVoGrp4owGtog",
  "key7": "5gMFczFreX75HxqGvYjraVFJx5b7kevDuSaNzDA9RPSrDwyUrzET9Qo4518mLwxeb27Z2f9BgkgAf3buC2e4Ppv7",
  "key8": "2rqZ9jiyBozdYtRmAa58ZfQmXATNwNJRSCVTwSiqCaGj9AS1Ye3XSvFBeC3C7YFyvPXfNP7WD4wxQboNLde6AXT2",
  "key9": "4LnwvZJ47VyvGuJEvowyN5yPiTMQXPeZqhfJKL8tZVBe6ooRADqBToek3WppzD4EwRJD9BMqL17RciQVZX735qcG",
  "key10": "4Wec7UieQibUaKbuRPPa4gNd9ogmuZ6ardbkc7jwLX4hGUSdCxQNQzycJwNXYrSGzdLw1aEH8qRTMiAfn2Wyo8ue",
  "key11": "3Lk53xcUrGhqyTVMSTTDLRSv67hrPdsST1fwvi3QYk2sigZYUHz5yx6naGtMVqss2i121F37NBvh5smW2K494zEA",
  "key12": "25cyxTVfcJjT4R4mhe2DtbW3uS2X6XWMDXcM5SviKA2sZria1RMguGtUadfKbQMiw6Xj6auutFs1c6ttYrmjNFrU",
  "key13": "3RDHFKq3yvhtisGzNpdvcjroQzL1DHSD8Wtd5WNWjCPHMKXdNM5X2Mmn6SrsUM51twkqax9tucZUFM51pPbrYwX9",
  "key14": "2vs6ifJgQqundvxcW8536Fc7gjJ11pv5ecCDLc8hxNK3NMnhfp68Mqat1QPkCB3zoEb8ZcCXV5UnM5uHjZQiWtyx",
  "key15": "tbKL24ZpqKKy6i851EA9L2DXP6dSSaMBvh1KT6bEgxcNi1DqUqDjrBFRLHLcZEYdrYY35PysEYYW8aytek8Na1b",
  "key16": "335unMdnuWrdoHsE3Hodqqc2jzEBdNJpyBzn58T85L2UdZjjCpDcj8Fqw6B4RENuNRez868iNrLdkKTgoBBWukvN",
  "key17": "4zy1cwVafMuyDqE5DDkLvYjHvHK9zWxogtxLPdTt9LSr6U7fekinQ8nScTSYRx6qoUGaTYq5BEuqGcRLF81NYHWB",
  "key18": "25qF7ATf9DBxNuXr54oAkADQRE1hA6ryKkNWcpCtU3MZKUg8TeFmLCzEsUa8kfjyTC8dtE2KooZu321ArzkL4xEB",
  "key19": "3Atox4VLHABbMwt4fc7MBpJ9prYp8KSpd5ELGhnyVLSdZCsHxn5aNoqvAxRwA9NuSHPK6xiS1CYTi38zooSFpSru",
  "key20": "5mqYWN7QHxA3ArtCXk3pWcziR4MXVwns6k5J6Fvx2j1d8AXd5dU4BktnnKUy317iedxBiPqXFALGq614ivBVGU6x",
  "key21": "46gdFvJNjZr8KVnnZ9hchmQxTzKFhpjCfnnudbQuY3GACRnygvXMgDaeeVsR5K17ckYzNcD2h2vpDRH1WgaCZiuz",
  "key22": "BMponxRqGuZFawQmo4bHEoQZHJHg5z2aZhr9T4qTEMvyT7gAV7AxuGmwrnZAhqowMuj18VjgQLvn8SGtYxVGWwA",
  "key23": "3kz9sZRXiXEorSXozm1MXDJqYQVYQ6eCPHnwaFKy9hcEwetLto6o8AEnawcHYgorRD4ci2hFrZiNVVBTJwvr1eHP",
  "key24": "3hZT7x1GDpo4fdptaQ3QxnUm9pA5ryEKcLuDn586QB9NJgAWWbbXVh5s9pLyqNuBKCM6DZrZG6dNXNfKohGKqgV6",
  "key25": "2x8e7otnykAei63ci1eSkHKD28QhMMDTob7c3NXece6tAcruaNHRj4FzDqhmsnLqSSHcz3AFAdvvcdLr2APbJRMu",
  "key26": "2qRjKoKBbNeEp7jFqoNT76oPQGD1ok3E3BUXiTc77k9BcNUUxsoYPNQ7DCkWA3M5769p5j2g2crNwwsRYc8X8Ge7",
  "key27": "38cdABWRJ6s4hh1qJGxGg8aqHzJXDXRnbVvEkWCvr3oiUqy3qCgyU6PXQFieqf29F4A1nXDe6TFEki3KyczeWbNy",
  "key28": "5YwwsoGUZnhzoqHwtpkZY6FTRaa8uEkqEe2tPRLgK3xx98QASWKRPC9HZfxYQjGse3dsJ2bDY2YQJ5cQaD4C1p2K",
  "key29": "3PwQfYdGJrgsKyswb9AXKNreYetbrtebK2JZzGTTXfcemx3HbfrRQx7HQu4oCfh1NKrQcpJ3fuvDgxmryBdFJHhG",
  "key30": "5knUMSANgsqWDJK6DZyJocVrkfsHv8CFYhVhBDu2kVt9hV2FLRPawjSHeQvFM7YxCFvdne7MzmcPQ7VRmzjUBefR",
  "key31": "2CEFMvcpVqUmXrqvqbU6UrNSTBrnMtojUjZfqH3kgP8w21sFYns3xYFtch9tfbh4dGhbvNxUL1GfiRDWKGBnoGP5",
  "key32": "r4oT7JJxjZYPLdVvvKLXCcJqsRDRtrpWpvL6An92z9fyJptTjvyQV47MES9hsjvsh8oxEi3aPnx5YJJtZjyP8FB",
  "key33": "j3RhwRPWZ7uBPkEbM6zczzd61W1Lio912ekt9z8k9nK1Vi8ucek7es9riWu8VgdR2mXKcRvYePTMzkPHTTz7y1f",
  "key34": "DBSwF54R2Lpo6axQHLug2KFjoMFLUCTQZNurYmBpe3yg1qZBYtRhLtaZHoDhBHVmog85o8xmrPsVDaqiAgCRDyc",
  "key35": "4RXjVnJYabmQBs7zrPEyJ7HRMn1vP4bLDFpBQinUwzuXebEwYRKZuejYXasA7tcz32UJfHjQy7nRXPDxZUXXQoa5",
  "key36": "ugBPDoBMunzqscGW42DRn8D82CtC3YrJUUTn3o9csVS3GJNVKKN13EaBNkBTitwRc54JYjdkAi9Mw4hq6F3ZPmE",
  "key37": "2eyd22r9CoRA4SUtYRNRtvFYAAy4fm1jQ7eNXks89YgEit3ZvEwBvgoxvKJ1Rx27rRyRDsqejiXfhcuaX6Yp3rf3",
  "key38": "4UjbA9PmsXf1PxR4dvZVCZw4nbjHJGXUSuH2JSwbsTRhpVvxNFmrGrgtZpKp78ZEvLzuk78Tz5PLCiJ7ftcobtaX",
  "key39": "3tN9NkYuCictu94KxGEXG4DHThVHURjuknhGNJHBrggvNmuV7DJSGZ5JWt3Ao9u9RbbofqPCX77wjmtp218witun",
  "key40": "5yRLjoCuavpnSB2cmxJKq1uDXDfCn4fQTrU1FEKn8hguVoL1gENSEeBRRxc4rTsHb58zggggRtAZRtVEYDyDCedi",
  "key41": "4QixcoYc1DbtNLdbap9dg8aRk3qnoWr3bjKRk35hGi1vsabXQgwwtdyfgwKb3z5Y2ggnqPAWc6a9g5kjjsa4hc2s",
  "key42": "4k6CDnfMWv2hLNufY1fjwij6tuVsGUeH1Y8eqfLdMkqrQjduhBmxcRpMSGGQjYf1irEH9QBYpYhfLj2azUu5fyaX",
  "key43": "VdC4UBxAPVRhbm4obhkD5S3r7KAJrr3wcRRWQ8G2XQTK5hNwUXp7kZEYagctRHS4AsRwDz4ytiHRzoducYRNyaq",
  "key44": "3Ay1tfJMTpJHzAX9QTgQkXzVsVBqdyA32EzBfnGGScDML54yyA82MD9eQ5yjVMDpqeH7pVkpcRuKF1kBCR249ptf",
  "key45": "5iVNdTYySujK6952i3cAkPcBHbvHnWfYuyw8x784y5ShybkHmqsEMNFMbYk8ccAykRzv8pXnJUkrewA1CQ4MLvNz",
  "key46": "4BBo6y4YZoi9bcpVRs3juvxteyEiCH4M3fS3k2BGGu5uDzVF8MJnN2p9XH6DpYhmFFunXXPX7GDutHqP16USkiZ8",
  "key47": "2QE5yNVYAHu2UrtjdBMya5Zcp85fy8JLFc8oJ6poSaEuJSSbX1ghtXmHNAMBa7e1sW1ieuVGsEJr8PaVHDqXnFeY",
  "key48": "2o1cU8WPAUezwQAPPyXTyqmKCe3K6KrmFNC1ewE3xTRwHpcowVzmgmKWRs7LxpLNUH843XWVZf5TggHj52o4wnTz",
  "key49": "3rPKBXKCUyDJZ1CrS1A4MXHyjAKMahxQN8Acni9FyNcEmWZbrL8q82mSHxBAbAnum2nTGd1GZbwt8few2N794RPb"
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
