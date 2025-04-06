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
    "2Z1vKLdawABE4ttaFe3CLQzCVDyc4bu9hWArLAqQxPSe1PcoM3vkGrzPxgCVCBDJgYKC5VpEGA9ijgAfDUcjEVsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4NXw4RogBqwbFvADu2UkiAJK99qHiK6tf2U1RAtPADJYEFjmU6VcZVgoNswtdvTcQtDNNDvTTzGSKEdZTRL8pv",
  "key1": "29LtUzfAKKS9KcbEDoHkmgL4jkLj9XTZupgSZqtXUfo9RZLJARNTgyWCn1B9cYT9CPXWDoFZSiareir6xuy9Q9X1",
  "key2": "4DqdDYDwPkvUbgZyocW33i1PCyMoV53Z53K816zzg9Q5RxMHsiqvDHersvuruV28NGHJzePBDa4LUsSxFWffJpqu",
  "key3": "2iGd2SF478hEeGW3oA18gt2ie2DChXvXPrhLJ5cYZwhg8MrDhRFNFmUC7AJzGUpw8noAiwLfh5J2WSewS9gjHGyv",
  "key4": "4EkNoQx9hqtALcqQa1r8LfC7c8TPS1MPdNz8zKjzikeYykwp3TaycS7kgp5XGcDjV1FhosyVGoQ1YpzxB3uvmmRm",
  "key5": "2bhtbWaxXRq8TqaUJ3K47nJ4XC5uiY1eZhHYnae9ZfqWYEDw1u2qrbp1fTYDpSvR1a5Yp1bCCHpr9aUtWvyYWiXb",
  "key6": "4sgZD8L69vHNVUZvktJfZAnSc7HgUcCLh4qDQpWb58Atu7bdXnxHP83czhjn2TGvYmsLDp6XxassUSHFRGBobXuJ",
  "key7": "4u3eWfambjUzRRQZ2HwJ63JrnmrQzwAD4dpsh2WvJ3usowp8Y2VuVWqVJ651JGo8kQyu8CLfaLrhWhxKwqo25xjE",
  "key8": "3EL59RGFxpyVR7EurUhrd2qnNWCEg8ZFsDknC7JkbEAzybcWHwwxWKut2RChtX71kysDcEeitnCSzjAc2eL5oAvx",
  "key9": "g3DK3dS23kLzn6ExAD6Z73mzMBqoEbb8kP2vX3qRKNYiraqQnryh35rswqUwpZgJDCtDXF3UW7gTZcHE7UkRttc",
  "key10": "5nCcqqtTYwNDvauLJ1rtBF7y5Yuxe18FNvF1fZ7HvpEqnajKsRfZFMxSZz6dz1tjt22pgA9qKskh9Z7Lxx1EnwJH",
  "key11": "2kg9AtFuZDwLQp9jsWjGHAys2BrhccSK22vRHoCFFpWCJViJMsJdukz6jKccuhSVt7SRDieddB7V2v8ago4oH32z",
  "key12": "3sorksXouLJL8HDfqcs8yHDhErVQNp6KPT2buNZMgZdAPWYPQwKyBpmSDp3c59SoNdVjCf5Di14gbovjkZfepNiT",
  "key13": "4WMkozbUYng26kE3Q1ibbsDMfaWi6rEnE3MVzj5M26hUo4aUrAcJpbfiXLGZWH5BgTqp7tnPi8e8ZBZHzSRoDDXY",
  "key14": "4J1a1bB3mgcDgQcUEq1YFaS3pFcdgFWbuZfnNNCq16C2jVMtwmgeWN9vLNwBuE9TEasUSBTyysTSuXufWze9SfbF",
  "key15": "3ZrjBtfBWG4sMMKrv1HkiECuk55Mh74PLRJ6Yn65Z6WVNEYUiutYsCfhTkh1yT8ucgpwKKmjqFnDjwEsSbU3jyYY",
  "key16": "2nN6gN9K3Ea3iZstGH5JQDPCbCJAXkYVyao4yshWSsxg9LWDgpCEs2Y9X2SA9xwEkBQCwrAZkmTDCEg4Vips8aX2",
  "key17": "2PdroEuJmLPHgoWqCDVjKu6PAEFQKopumQNiusxv143czihw68v75QtNATnoPcUpwMevaVeHozcZNCXTULa8cfTh",
  "key18": "5jrMxZdkiE2KtGjUJoxis35DYLyL3o8xpkm2cTmqLdw5g1hf5cdFdQwt17z2KuqV7Yh3UNcmVB7VWSQnwMkeMRQR",
  "key19": "Nobyn6tyWNpoHuTe8f1HKrMyJNgHTbuoDtXiyApy9XCm1CWoot3aTov2aqs7i5DChsivfgFj7zpfTPJcU3oA52x",
  "key20": "4WCfigtMaeU2ehXPAT487hXwbpEfytYSNKyyYUNq8FDCcKw1mW5yKMq1FSsQz3MyYn4yz8E1AVNimp1pa45H3cCS",
  "key21": "2fLnCYB8FvJeGYWNZHq3QKQnmWSrMkbptuhfrum8Pb4nS28dJoYC4M59PNATtCkx9TiFhndqyjSnqNQKa5bSw9iu",
  "key22": "65soYQN8vJxWuBrhZH3W93GMNA1oWWbmAhH2tbdxvasKowvsrSaZkd5hwhi55FeTVNiMD2U4TTFzohj28fZ6Kg21",
  "key23": "3y9gH8xWps2VP7TmHXX9cHUrQe7SSzGwWDAGkiTocFPb8toWqritqAreNdW3TXULR9RcHVC1VJpPkddf7FAASxfX",
  "key24": "2UitfGq3PznL9x8LnSCU81jrs3RrmdGGtadCmreYRDwzLxvKHFyyMDy6Ew2xbgSVJCkNXAcPvaouduv9fqWyJFvi",
  "key25": "3XpMRrj62YC8UUypBQvR1uk1exoaw21XHDeaHXrufUgGb7WpdDzazw76bQkKhkc23SijqHqWvZmRAtWKDHcTUgzy",
  "key26": "5FRM1vsHaa47Yb6ic23xEnWhW5iwcnCzCSLmQzKdeKFArdf3xNEpbx2xeSVbLhvKfoMiTrakucC8pZ6x8FgKRhYo",
  "key27": "4Ej2XVbwLkGef75y8QNS9CFvtGk626qSaVvqVgP8KmKJQNSQ7XxNbUMme2FD3fNrqNRKmbmawmsFqzrTCv2TnRZf",
  "key28": "2r51EkZBx8eQj1cUSq4DdAVdyawhqS19h6brcNayZdqKp3W2RiQL9VseBMHxD6zWw34sh8LCKmWUEw6P38puFEtk",
  "key29": "5qdJRVgXqYWUvF8PCLGH5torLTvDHP8Yoh2JGDbrXAM3N6nZAZYn7g7M5q4388UvvEaM8K4zLgdLQzZa3S9hrZ1e",
  "key30": "4pQ9UPuFQpU46PTrDM9tLzpZtaZuWABfNjcM4F42LfvuEmYe5UX1yzSvyD7apCXuAkQ6kDd3oUXrmdtvqvJXoCLY",
  "key31": "4RiMdDE2hTvNKcgLwzDtVkFiQejqbqXLv132E8zXnxXRre8GmpLGKvZ9dy91LzaZHMjDHqFoHiCy2abD2YpZcTch",
  "key32": "38G1uiqgDD6gbkFgNp4NJrMwCPmtWA1b7T4Mq7APKpH7SMJbkJHzwz4yQuSqJZRojyGRog5KYcAJ5DoH2wk4uK2k",
  "key33": "4zpq2FCjVRtv526eePWBqto9tUtbJe7sjbcywJn4zvrUXwEZERNqXt6saTPJ5yVrTDt2KEfEaNRXD5LHjZwQEbNL",
  "key34": "2mob1ZEzSM2zdtMjnq44jrYW4umf4rxsWpAybn32L2o4kt3KncukkSVJVpXVcDuEynzE2sW7itf2rGQPUbkDEXSp",
  "key35": "3g2kfTKbTnJoqhPza5YRUjmSxuprAkNZkoBbNzZEQvNEAAY9CkTkg2NDutyNiuP9Wgvu6GfWqd6M4n14q3MHv7Tm",
  "key36": "2Yya7uAnPpqmPvHkyQ5MFLE4Yd1gTMWpCEC6ASUDxMw4kSK8qAF9ohtPqbGnvyK4xME7bvNzjFiv3XB8TbR96ucM",
  "key37": "23sAZYRGWjiSwTRnZXbLwzVvN2DV5Qy3KSn53wVJmJgVydkiTABUfMEuNrXVM6rXCB3gitrKSwVqkAGwZ372XJhA",
  "key38": "Ld5GXEJBV1ftz3BsgRh7wQMsW8HQWbfCBFkM9QQh86SxbsvSBcYrVj85esnHG21UZF2qG36q1pG7TMqnAfSRkDv",
  "key39": "kohcoXbQYpJSt8Yid4ad5Vv6qwanZ4bstvWStvpSfo5u7JYHtprTEQV9YoAfpS7FGeQcFHbK4KCeJQyZWEYgTMZ",
  "key40": "4u3jjbuAdJCCqsPsCtSt2BQowUzBt7siyiD7627fW63Vf92TkWVn7Yr5UnVRAsfgv4oJmyJqaPwjKwMBrBsftUzA",
  "key41": "2U6cigo99jvYbghMhvaHXraDTowvEVbCMRz2jEA2q197u5daf2QxJvvrzUFGDt2gGsp9KYjvpByBYX4PBd8TEZkQ"
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
