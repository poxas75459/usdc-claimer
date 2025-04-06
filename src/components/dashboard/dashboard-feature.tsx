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
    "hxcFjpC6zYfx3KUGyam1Z1zu2HjJDPXVkTQoUQ5Nrwtu3znJ9sf9vPqsLAnED2KW7rvXtqAwrAeUKMhQ4Szdjfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o11jdVeaoi5TKDivTepn3UcAv1bXZmdLLpBJF52ircRyrbGZibYnQfK4BGW1mZS9MXoaFv1FEBDqrpLKd5NeBGJ",
  "key1": "nLzmVsyYXbgJrNLDVn9DhfqmAVyqNtgPZbZnNjBiTRbFKf3Su3LTYNBaMxMHAKhqxqjpAmzB333ut7TzNBstzS1",
  "key2": "WkmTkQDADGMoFW2DdSyeEDBrdSAijXRvE4kKaXJjVX5DvJYTH7br7J5P9V1FSrEjcZxoHcqNatD4PNbCvNSG2jW",
  "key3": "37JB9WGHsoDG6VpsNdJYHfq94bHUYAdyuH2DfHFxw5LWxz3J142uxnHiwRyxMXnmuopXtDk1TsZpPkPDQt1sh7jD",
  "key4": "4k11NrCWoEPhCrfrjj1pxeCJ4jTcYatZiZ7aXhPa29gYj1cogLbUTM19jzzf2N799dTNpAoYXWCeQydBKf4MJAfx",
  "key5": "47YVyeKpk67tBntHnZn1AUFkTY6PEJBRN4vHqR9DuDA8HtmedE6qv3WPa5UuSot6po5mE2w9zjVXSuCPs2uaDRrb",
  "key6": "2USWQTAxKWnkubPk4uXV1zjf8F7nu926b7G4f46QBwWjcwvDZ5t1xYhkuJ1G2LGXxzQJJiYskxG9WbmcLUNnZjfy",
  "key7": "4PiabXdg3sR1dB5CQzxDkEm9D9m7sW3KK19RdHDTns3cAHw882E54u5qe7cyLtgXU5syzDGdG5yxiDoZrmrxobfW",
  "key8": "m7SCND2nVjwgQ2whTjtYkuvYbfJozEmh23unCh5EjE76iHkDs2vf74K317ZBto7vBaMv7XukDwP2jK7ij1kBMJp",
  "key9": "5csnr5Dxckeyi4CpQqM5nujEVWLYer9VRpFu7TFXaSZ2VoJc2LVTPJ1fG65sd523wT2tYEB8zquMpGjfZBSLB2zZ",
  "key10": "2tVV4PBzgrjqnoiTdgSwaAccs7nL5aRTeN4wrWUXHZFskdKnoWqoFjm55cQHnJa9MqeXkFPUyL6xdTBBP8dwnAxi",
  "key11": "57wThrec44kG3Avd3sns3KDs19mdBdXcVmiBh1GsEpYTvJqbYLiwDykURGFNmGoHmr5J8Edsrtfnn3XXT36emWLJ",
  "key12": "24rRFS5ggRcyj18HR3XVdf9WaFP46qX6Qj61esMFhVCvejkTEUR9ptNzRkUxSRc4pJvQiPXUUrJrcJCUzLe63AhR",
  "key13": "B8n8kE7hrw1Uga4DcJ6qb7yKbVxwG44HhZBX35J9vYtquRLgwmaDRnvZ2YEyzVEEeaEJR6dQQp2wQkTYr3xEJUB",
  "key14": "3dPF44KgXpFvGwQAYcEHDbSATe9UHRMZLm37PpXb6EYPtP2pa8yjtwEnNh6qQ1qo5GBNsHoFjvadmC8986qPkNap",
  "key15": "9w5gz4DX95kxUKXJtqX9ePGF5RyaCrmuWTmcozoitDWaMdbHTAgJkQKLUBhCbvgEFyF1h56rb1iozEqzm9gnrvv",
  "key16": "4KMn92kmpMA5ofF5kd55n67ng4oxL6HvsyNjPAaVmGp58DzVKAv2Z6kcofZW4w5pEkfewMAbjhpx9apvXXMh4Mr7",
  "key17": "2ee4q26kPxiFbFo7KC9H25sqSzgdGTkekuqB3zbgFciNakPJs5MjRESMArocYuLzHqcbYrVyTByENi5vDqBvCAwp",
  "key18": "567knPAnhhtiQP8epcjStts8zGXShyp8AuMVzJW6AWDuuutMS3jsYYWMSPQDJNfHHjF3SevNpy5xZxwhyhmdBeR2",
  "key19": "4Kc8gTRrVN373vnseSgfDRSC4E3RdVkkbRLfxsMEsdP7gZVT1x6owaDfQ2wpZJDSm1LktzbtV7HwXwyskDk8mk3U",
  "key20": "32xCNBbzSMfDcJqMMUv7gFMV6MTLdcSZcniKz1RQnKuwYFxCgU3eaJTC4pTzgTsMy6ceyYnZn7W77EMiiHntccn7",
  "key21": "5dVfGxNkFUryVu2DF6mi2RfniyAGA9bmXbbvBKM4NgML8zvEuk76NCd6H63XsfnevQgf1bZXerTXqeMyuCzBzg6r",
  "key22": "2n3Dk1vtgKZmt6TXoKLbonSHprkaG1hFuac7rtMXZx3Dsti11oGmYasXP3pxG6pUctQ2hpaaVBAYVgr59zs1uETB",
  "key23": "5gwRMeeqNZwCSdtsv1X6TdoUE3jVMm7b9a62zi4wwfmHy1KDNM5HRmF2zkSzWtjUa5Z5BKHykhrn5K85xqZU2J32",
  "key24": "paV4Sez7h4NaEEqEmyRT2LcrTBF7cQy37X5Bw1QCke2vta7XSKqKzNSuD2mhuAm2WTi3VQZ2x7nsA11CQe53aNA",
  "key25": "677xzviJbxhBQdaKWQJrmgS6MpAoPAbbNk2Eg31H3aA2oJ68vvgFGyxZtAt7X8B7AKQ7YZBtf3etihzsHcp72Vta",
  "key26": "2awD8xdQCXTdZ4mmSEBpZwQWTxpHVBJExBefBN4rufkAB6Ptnobj6xGhihVjCenQkdCnTgNC8aU3Aob6YWJ1oFU4",
  "key27": "2zgBo5zNYZkzXmTTfTwHcEVevkanRbVw2ESyh65Qnci5MMGe5ZWQoZqn6oY6sp9zhB9Q8dywCMxSwe7Dz6EnMXv6",
  "key28": "61C1iDDzpjs82WKrXXUms9xpabFG1HJRwaALaFn6KPGz4vTLnXFBpzGmei4zVdKzN2YeeMPyfEp9bzuRVmCRjkH4",
  "key29": "3chhxPKosABHJq12EQ6YU5Zp2gE2n6ELpPTKqe4MBLrJdnRvW2p3L5DFQUkeb7sKBg7ynQ4z3rdQ9vbtDpesiDm2",
  "key30": "5WcDh9AfRq5kHYEqDpv9mPf27nXakjppmxt9QthjLhXjwZximJp4Lt7uMGRxx2D6QtYCTLaMdNxxPEkdZBb8UdU8",
  "key31": "2zKVvdn1tn46PFAtzoxBG255syAh3JFG7ih9noN1YJUpWaKizvmnr18YsYP2bqvZXruQJsC4WGRsQzaqg5kjnYsU",
  "key32": "VDdk7tRr86FaV4kgjEmJSuBNenSYmomdyt4ru1eBd6ncKK7TPv3DdYf9KehfRGN3xSypjDAZAXykzUrohHrEiN2",
  "key33": "4UTPAmPU4viMoAnMoaCwthbceUmeYBA8w6ra8M3GdFJ1qhQY1iaVhupAx7bfV1epVF2aWpB5bZcx98rgB5uFbtb8",
  "key34": "5MSUwwPDtQg5wMmfQW5t1T9FyAJeXQB1Xwi98aJZ485EFEcKWPh6fmx8HeBTvcb69YGNABTtRyNErPb8uqNWy1uF",
  "key35": "2WZRXD32YfYVZWhEyMWpfPhJgk5naS74bB2kJg8LSNZJdW7nffcaoLZRW8FeLt7dEYbRidCEJtnu9qYTPQBzWw8j",
  "key36": "2EnWqAfbGd5cCUbjd1CwLiZ8WogxK9FMGhvDcPp9xxnUeA3eHyK5WTtc9eUJN1D7eKLbLsVsAUB558YH1uzvSytr"
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
