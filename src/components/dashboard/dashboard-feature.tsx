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
    "2VkwLyWTshZ9hYzj8wNdfTqbwqcXgy62gtjWapenqcAPayKKaNoSyj1jnSo7EC2zNv5frKxYegmS5Erxi8DmbAt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFP54dDge1wMiKPwFRhVGhr73oEzPuYw6kAbXtpUHLg79c8bEq9jawqv7XJVA2sbaWJKE7HUi7SUjKpKH7SNF6R",
  "key1": "5aGDzWBU4JTWHFkHbf95baC1EfAh56hEjDRvW1YaD83Aj12czSBiiVn95aEJ3WMxrbdpkDdF6k1vWTcNkHKBQasW",
  "key2": "5tGPFmLbD9C7G764Lsw7FrCQ7VuctLovfz8Sknu2kdSiFXGh81qf9drGUS9a5WdGFsjeCHFnWwEvxwRixpjZBmUY",
  "key3": "4gvUn5NUYHo7RrLuAsRanL4ZXiLfgwaUPeJkUjFR9EQpz8qt1bJe482tjHWGYRFhQajgNGLaLGEGebwusu2RrYUr",
  "key4": "3a4VWppuiVP6p2H9th48quzVuBE7wtwLQVU57iWZJZjQ1mfhq1htLLXooxKMkjRZMf81snrgwRUDe4nFuk93b6yk",
  "key5": "4GcRhm96ZG2PH6XLj5MUKdxrrnS49MgeLpovRsCzX7zjycGNiXJ6q58938mo5mXEi6RVbyyVfh3BsCCDnJnkGNuW",
  "key6": "UdZEFTuNyRgQ7yN4M794xi8dUkLSsSxQLEMf2bDPSrR9cLnpUMfjwCb8GW8oaybfDkTgqvNXKPH2ZjGfHr4oV8U",
  "key7": "4YZsoh9cP6NcH7C7vKcraiBY7eU8khJt1XnB2HQJt6cT5khd4JN5krXihjn56iaUCkNbRasLV2i8ZaxaEr7E7w8a",
  "key8": "3mgYxyfGaaqarUUzSGoeGCKxFTK99TS1So6YFHAGmE9rxZVpp8ptqDrMCpUjaQ41TziST5jHrsy5zn1C9ojTxt6b",
  "key9": "4tT4WND1oyBkn4KQrKHnxcsZXPBxDemECxnbv3eBEfyrB8wdAue325r1KPGus54A7G7BHJEyJQWcBd5AKvcMYYAn",
  "key10": "66UA8vmrc8hs1B5c2e42BaUXkhmd1gZB48kD81F9neBy35AkPaKsy5dSd5u7Q79zX1twSpAd7wTzff2BBT8YrVwn",
  "key11": "37ev4xHcNh3zuZzExX5piNdUn26mt6F7vZVLH8ScYDWiGqkgtq6KJG49Rhxud2eHtMfAqb1zVhvwB9wuMEPGsVdu",
  "key12": "AYNJ95L4HGDihg6AEYLsG3o69dEWXo1s7P9CNCEjuNNgAA5bG65CpvwNDnHvdsdQDqnXCkLt6ayg2iW1qmWfzeN",
  "key13": "5doKoh6bN6ymEJPjFVvtqxsJsHzRCZrX8HwMTjehRk8EsDpN6QuVUvCR2XriKta2sU2YG45T1s1DndGTfGwpWoEA",
  "key14": "3Xk2n2do9TjeGtZBDhZRevK71Y4ffH3BAr4Fp4KZ4fKm9CubeU7qpPRfgWrfqJ6tfCFLu4H1EKqc5LPSRpmvStUd",
  "key15": "4pfA7WTsCAniFxkY4UBAcHeZpLa3m4bDtKDtNBvHNkV8M1uujJKCvRzV2Y7bSKpVB4fCuBek1Pdabj5ZbX8sJcep",
  "key16": "4gZS6hP8FXM76SZxQVDD83VPe2X81FKZ8z22hBrU5Uty2gTse8QYnNvX93hHfzdYVtLKRcZKo9Wp6amJ9ou8uQHF",
  "key17": "BCwqtYe5gfdXuZRnLZAep9AjQ4xyY8UTwSejHRcLsismmtGRoCJpi6yEcWmpcGirTeyvCiNmWgfcEesT4AfMGu9",
  "key18": "jVJgKmnXUEcFoP6L6NVdMFtpkdwADm5VWzeMqvrnDNzk9MvF9mTgh4jFGhpPa2Q3Myx8jMTCio1SGrbUAWqcToA",
  "key19": "2qj1nwuhS7P9CMetaTcPhFwMvpDRktKb9rgsuZU41QNsahtABKHKoWJkX7JGMTETE9f6fJZRbpre45ojTZ528m6G",
  "key20": "ey3F2s7dFRwqJqDodpsu2jNhcDRYBDRNF67xqg4FujSddNkWNpYvdfdbnJHHde5vq9vF1u4uApP2W8CjjhVAHFE",
  "key21": "y2yUHsdXWG9fc5bGKQwArL6RaRVgimBiYnnQKPcWsWefYaFvfyq8VyWrinGJr7G47NL6HxhXRHVg867CxFLm52S",
  "key22": "4GebPTiQ6hGivuQNniKTcvSuL5xjurVUs7iNnxkinJPcLDcMGeGN95AePJr2t3ivztUx8rZxFQiuMmMfVGvUKqzS",
  "key23": "3Js4MMpAcMhCBVnzPg3J5Pv37yWzMB7gBuJCoWvjcceGz88oaiB9DSgBdd4c7bSMpfCt6dcv2iXRbrM89teUZ8ab",
  "key24": "3U7txQMrwDfNR7wv8BWvyUeidh3gmtrPwBpANaLkGEPiB7zmzjpmVK8zsL7itA569KNL68CrRtSc3PgFGmNx4TMX",
  "key25": "ED3uj1FwciZyb1EDQ9co3C7mN8s23591RXBwAiM6nXpgqEbdnNKehbWebmgPLn6mzsXBGiH7itjPxkQ3KwL1Rbo",
  "key26": "2KfcJbtjoP517biVM1GQxnNn64ZKiXxr3bGCAgfFV3xAPgNKAi8guEAneNKMgQVpAGv2MPUavyzsQCLr7YnZHiER",
  "key27": "2Hy86HvMB1iBCZVVKt9ug3zSMETVFkEQSkeXWXra98rv3aXu1iKQac7KcoZDZVy87XARZk6EXbnY2U9SanK4n3Us",
  "key28": "336NDNMc39osR7FRvXMrJjxUYhEatJTT9vRWSkvhwPnsWrknXB2eqatHRDyMwGys9zrMtrt6joWAskYvd4gh7M5E",
  "key29": "54W6LRJUVvj883DzvCKrErgVSv1e8McG2kZdH4CGpNSFvMixZFkfDThAxEw4F5PRCAwG4xrMVLbqGTw79BRV2k58",
  "key30": "67haw133QMwqctes4WXzip4f6ERba4332bAsVt5ncEGxzb8UE4wcCPp5YxNVTxUkF5vyDh6qpX8SoZr3jsSooBM7",
  "key31": "2vzP2MY1nc5gEWHMWTxbTPNZYWDxJyret8jpp9aPxQ8Xp2hEbCtiJFpCm1XwFpKH1WtrWxC4wDXriqwg4y8Nvk1r",
  "key32": "3AgkXaA3J6WCcFw6ukBwNq5MJ3dAz5BTTd95dLtkkRJj1MakAXE8giqDckmaxFr8wX3dUECGwcxPoLYnHVueQBiP",
  "key33": "4MRrbXyYKHVLV7RuaaAfhqyhHfz8qDnMWXFCQuCMtJg8PMpZ5DRWh8WwaPiL8ZEif5jNe6RcsALKbYzUi8NVHNgX",
  "key34": "KTHYCrLVmXkNkyS1ptwP9E8rUFKUubBsEnunbfEjY8LNbJnpDBAjUXj49zAE1A6bZKssGinsbRkQDjFUCPRUqzU",
  "key35": "3s5rHJprQU975pNArpsx67wRuUrjK3SynYHXMV27GENPQ48qqEyuPrMUno2TukYKw7d2m5WKUiRQ67AFcE5YAMNz",
  "key36": "5oD3gyDf7GmwtayfE4fat7NnEMPyDGAD9EZXsW6KEwRRGw2ctGxABTv52HaK1EAQYT96J1vDQge7s4dUWL2EELca",
  "key37": "34F4vpUNciaxZJ76VfSKHykL2rFhUwHvJVhvPtWbVa721Vyv1xjG1cJHNACoFmaBDi5bYXtVTdKLFPv9hMThoFMA",
  "key38": "4oJmYewNr1mnuae2aop73Wsb9eiBxdzp6FHpGPFr3pLmfuufPpAAQ3cnbgtX5XvSMBGAeoGBcSHHMUVuTbi2efUF",
  "key39": "5oy2h4bnHLst1rGepNM9VHiKddWfES6cz21Ma2oQMFM9X7LFRWCb2GAwbHyQB3Lnzjh98Qgiu2CKWxrzZeDJFA5A",
  "key40": "55iUkKnrwbhNHm8aSF99B2yD8uF6UWFm53xnCibnfqEAnEGUmcswiA5xZ3DJE9cogwUyL4tADi9trkihWUA4EDx3",
  "key41": "4VmL1asNqyoVbwti1i9ebk1rVbuKowaSLrqNBHUMPipdEd7HzGLZUGrXy4bciEheg1npchrwNHrN9yXGSTwsfvo2",
  "key42": "MyHeSM9YrUYhHejsoC8XvWnPpwo3P8o6hArjkHGYvZcNSDip8St61KkKPvwiVmZy1tbWmnGHonN1VAYjYH3Ej2F",
  "key43": "28wrRxtCAC9oqWyt95Pj8X28zMmktU4XeUa14Te1FgSUbMqhwNoafdN2DDr6MkPFT6gGikDtUv2qZgboc4H3qYrs",
  "key44": "5Tbxreb21tXLCu1DTP3338fWv2uitDrtJHZYhBmbJBwsQtQtHv3YyZX5QCX6MTrB7UNFsaCzCrdwLKfvR7HqFEur",
  "key45": "52xDi8whrEhGdDcWNNn1HGumpfXrMWVCE6NgZbY4t48f8JKeNvXeWRTsyd8oSLiMPB6sJsyK6fQdUgSCJ7Z6h2QE",
  "key46": "9vJPt2NdEM9RTAKu6MzhYTcKtiFoBZUP1LcPtZeDHhKEgKYgK7UvHTLzqWCciivEq7FMMJP9F6wJQgBVgoNoksp",
  "key47": "MdesT6RzS5j5baPV8x4siSXrBbzrHEz2cbc3Yei2Q8e4HNaxYzS73dR4W9o7r5Sk6oDocFfQz9D8DDHRkxjbkFF"
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
