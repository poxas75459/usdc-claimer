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
    "2FuTUx36zdbQpLng2iRph7Qgg3owHhsCJoKLaQE1Zuxc7cCPELHtNfrFVmpXuxqRkypuLHJ1jSeWwwsmxESFeFY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BR8qkuF9v5xjbnLfSPe9CLvQqxGyqJeu6oBHqYGi9yoiLU5Bewew8WGX3A7hGbUHgbn75y9JjDTTt8cPjFT2C7p",
  "key1": "3Q7m1hhugoixpgoda2MM8Gbp2q3zokKCoXqYnnNhzPjrK424utaeFb3sStNDNYBe9KnMt2ZcXJxWMm21PiNyVnmC",
  "key2": "qA3BbM6D6Cus9CXUvSxRsWkSvaaG6nGugEYNXb5Eb4UrRYZy4wYwSYK92ZqT9B458tYZJfis8JdESs6X5aieDPf",
  "key3": "UsDtfmAvHbFchToYrThSgkHHFUksy1yXSDPNtTGShwNfrVjyBBTebfAMsdmydN9SpRwSG9WmeAhEdfcDjrYCqZg",
  "key4": "5uBgyzvtLpNeYhW7W5PdQ4L16GrpRyhq1FvRffyb9sBvPHY8N868ghgT6rAL21M3Eb422GAa9fJfQDtgeViszJSV",
  "key5": "3BTAomqwn1LVYbfP7Q6WYRLwWiSCLJeANBMhjfLgqqreCCrHPupNWXXrm15UtSFos8jbxs288ZpAb4yF2akspvdK",
  "key6": "2p2SGY9AQaGDCmKJHv9x8fZWw8HpLeYk3X4CTXTZvxj5P9GkuQBBtXYow7N5YE19mCP7rGjKUN7FkZBYk7VaCtS5",
  "key7": "2tbFfiADH8mXQ3ppTgU3iLHqfNtc1f6p1uam9A1r38rTJfEWyhxotecoi9H6ns6w4sj62utUt2cuq4DEqaE65PPq",
  "key8": "61Zfr6J6mvTWK3yNSPjnxddmhejWSGvP3RqRn1TZZHY1uKqoaD9XtDDWK2hzctpzw5rTeuaf74VmfJn9pyLWruDP",
  "key9": "4ZoNytMDMwngd1Pqqw4vUccrbM3t7J9mW5EWXjpDV6YZjqXcbNt4aVkDMPS2fT5gnv3My282bmNiouhEgT5TpN9c",
  "key10": "wSUBW5jPuTX3xWPXjzXsAhWDVZc68vr4j6ah2oK91xyyWiceFHHrKKo4rzLqtiT5so6HfAFyb4VqGK7qpQ7p78z",
  "key11": "5xQXhssSs3pjPy3VYaZ5hbm3aJbiWG5GpoVSLZAQUjsFvvLLdKggG9K4qYDCwzVDvuaGxgYtSvq4fiTcZ5L1Uyq7",
  "key12": "4JAAhs7aKKmJ3yFhQoN7LyzYnbEUwZFMM8oU5rPHXRzXhnidxEQwxpKXh3bHFJ3AQiwWwYsvoLeJ9jxjKC2XXKG2",
  "key13": "59XbZfh961fNeHuQdcPArb5DFyWZnSYDLabtaiudD4UPhxV4Yjm9YWxSbnTVtVyFQQefTLMpN14pG5FfBNSu27wm",
  "key14": "Jto6jPZYkeCzkQEZ4uaoqWeRkhgQvpro3vUQeUefqFEKyggvbzm2jJRybuySV1u8pHg66sLg2gNmQsnn3ANiL5V",
  "key15": "2y7BB61QDNeH7FqiQ6QgKfGXgEkrPWj5Lp3BEEdiqJzaWkBq7EpU41ByDJXjfEy7D1FELKxYuqTwErRocm8Bmpan",
  "key16": "3qjLewsXiioyV9GUBGqYRUNNaBcbhcWAaCYi7c5bk1GcVmjqoLtAfbZmqyqZQtapnP1M6LSaSdcMunaNDbZ3Wu2X",
  "key17": "5wHLJrjhD6vQdKbCAYyf3wEYrnKkpqm7Sw97imHRwfgQ185gFpYHDkLcaWQDHwmv4QdaazyxqBb7yXhqrQmGbM8k",
  "key18": "gHUXj1yZmzWz6j2dPse2GQWGq8MVRtp1jY2dp1npfnPPJCDkMmwc3GvumjR3LqyidkmoyZXFqVVqfJuydHaQXLj",
  "key19": "2pnza6doVeMmCK9zCvjzVvtwqu5i4VFAw3i24yHtqG6QQNkNHFLW2ZLfxnDsBnDLWUhqH1GjGyyT2LgFMRGyj83K",
  "key20": "msdxayiKHQXjtCQfNE3xQWCWWuD7YagsYMy8afh5UQg8Z5MdEmZEgYMxAJ7yLPreArP614LMv7qpLReE8XxHWcM",
  "key21": "R15GaEKYXrV7z7eUxuCTFAhjeyoGbKDdDcKqfvHbMmBTRn4N7u5JafisiMzaMTMk1SznEW3GSFhk6uSCTkpQHvk",
  "key22": "H8t4rzijZeywbGUxNbmEWiRTxFVSisRiM985At6HzeCeMqEwLe6Cnoe89BqEE4XeZ3rUX2QDkC4YnjsnL65A8DN",
  "key23": "zbMYUm9e6HFYgVpzBj1CBrx7rCAkFQQijLPfEvzhk546sp557cqcTycw3SSawJrCx1Hzb6axmtn8ZN9fFGRhgKZ",
  "key24": "4a4Hi1Nma1Atf1fGiFXJPuJvyhXRYqJaye7G8L9wSNdEhf9UW8Rez3kJFvGEyEdeXrbba2qrV66MYpTPN7WwrX92",
  "key25": "5KKcGzzMAg5GC1gHZHvujoFQTvm9aRc5moqxPWcgDpYe6P2s6wBFjhAQ9u9oSybHvNfRs3QhzCA9zAq4ymd5kNFz",
  "key26": "3XpfqmLraW2EZEXdBU3awF9gG1zvugtGB2Gz7cE1QvSL5pfMoGDSCfHR2GcG2Yiu8K9foeQKX1y7h35EHDfm699g",
  "key27": "3Sb7kJHN4k61f3T9TmqwGhsdQy2uCk9sF65FGRzjH4A2SNqhViSJj5CqsDkUAfgeH9gbGTfpCsjLPPzup5xhyFXo",
  "key28": "4ubybPP1fMSFMdymSFfSeMwtcsqD6NwRx5btNc5ortssNCNw3Ed3QvHActPWmQTNuvcvruRWvvLbzegv1v2Y9bz6",
  "key29": "4sWs41yx7krvUt4KDaYYuj75dzFtwq8vTvoXLQgyjSvjuEbs4fDFNrxnD1t8E54q7UGLwyDHmB47ZV7aEeTakjSr",
  "key30": "2YJaPoEp7s5X16jzRaJ9Rb4RrUnqVeRCH15qyMH9Q4gDNqBGHwGLwxNs7oaMXSZBZ1vbqybFN5sKdXpaQAtpWDqp",
  "key31": "3Mg8jBBgLjV4uKZUr4fzSDsvdofvf3G8qktbZYbnGVsYDpqXEaVYvwxUP8aiVoLqYA9B1zqbcWfLjmeGPLJY46BV",
  "key32": "mkaGWCKwFBgQr3tcw7sP57Vox8AtanKZ8DN9FhhmpA9RtuWTqkF5MfnbZvGNqyiTie6GjwFoyXFShB9P3FSgBSx",
  "key33": "2KzCPCnhhhZzFDSCgTvwcotwJoC5MC9ZvvYVCqMp64CiqR5HqMq9FNzQEAycwzpgj7BFnqG1EvYD8xLFJrcDnQDz",
  "key34": "3KDtZ1KWCuRSSUQfDrfgn9o5fDugKjMHmxCTLNZvm97yxrvqZoFw2t3VXbqnovcT18Wo93NYyfNXWLq4TZL4UPiw",
  "key35": "UnegR7wwF6yaf8yusAEhbji1sok9bDAFuKvPCiMuMATnDqCUWpPT6myXxXRTALaPB1fveffTkFNkDRkFZbVYYDt",
  "key36": "2xZVUmwdhqSHYsv5UN4CzygtFXvLLqySGEfUUTUwBFMpYoKCGfUzPcaoD1n5fgeuGjoXdCheseFb1V9aUAdAwAqr",
  "key37": "5Cs28E6hFKV96BdVdMGwNe3rH84bBKUwvNPRBDLJu3CoU4BCFcAm2xgTevWANuzAXkob1dGvJr78MVivsPBmNDsw",
  "key38": "kfbvjsc8RCfUpcT41fVZn2zsevxUX1F4KpUrmQsDZWyw55RFKqcVXHHCP58etKjJshifJRsG8b7EScZft7MsivV",
  "key39": "3bocLLsXsx1K5xxRUQS1nfBeRwh1SDf3j5mz6LjM3yQm9jAGJN1ptHuh89EUf4aiBQLxm36x2eQzncjmGyyq7ASG",
  "key40": "2U9P4d9U4BW6Dax4ZMXYr54vijP8Hr7WvqPKfyQRRmStzf3AmKN4eKi3JcLC3DPbJRwmBBH1xtdQwTSdaW4XT26r",
  "key41": "2VJDFNsjWPL8EGZp9FtsqmspRXmBWPC2fckRf6yLuU5afF9iB4maRYNJRuJRjzt9rETg7hb9xjaiuQPytDUqjR2Y",
  "key42": "5GZRktwUBdEtmjtXeSkWoY24bCyhkEwgrownsXndyzRFWCJXpfAwz242LGR9k3vobM7TGo3GaLZcMTHyH4ryRKPz",
  "key43": "r8pWdVuj7xveGD4KB1NfpspkBmSqHPmSEdQwakk98kFzpLzhXSoQyTfEnu2dzNDiZfe5e1V6m53XhcqAaA5TzHG",
  "key44": "3PsrcGhb7RHfbTF739CM3kWzeX6KaKM3vMoK5heu4NxVzZLFXiuwAiwde6p3us9uMJzHdjs4QDdCsDLxfd2iJRWH",
  "key45": "34hZhtXJ33oJRVXVDxtcbd5wbgB5vdEWc85RfGPe8BZ89fi7A2ZCWcqrLXpoBgRHGBZrDycTVcqC8qukoaxRbAxK"
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
