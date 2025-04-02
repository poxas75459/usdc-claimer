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
    "4EgUcu1HtWE3Q4yrjdw1uFTgBh6YyRijuhSozxLsJrpt6icpGKfQ1Jrgcoxsfx8NYzsjcDxXtYoMWz6J3qFAnKEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMvJ1qgRkES1r7BC75H6vQ6cUvnUPgVoQz2Gk2eX836bF5eef733fYMppvb97Lfk15J9dTh1mKuUTaqGiM45yvK",
  "key1": "4noJAyABZ8GyXPsWtT1tsR9yn7mKh7pdqBCzE1417c6SZRCnJdb7boLzTZLcvDb9VSwHY7KUjEw5qKgPUVBBYvNy",
  "key2": "5AJEL5Vjz9uBHVtjXYXUbaiF2p1mhbcd1rLh2a2AVZSc41sjM8NHnWBCKkHZPeEWbyxvbkMxbDJQzBiEGYELUyXk",
  "key3": "4SmS57gKxnp4Zck4RZMBsRMtA4pFSMX78cYjdiLjxuysV6hn3eHLmtdWPRQhiu6E71tAXDsunw9aNRkw2SqLuMkS",
  "key4": "4RJoH8cHwpMPYYBpnnesKEuYcTcH4LpGfTMrnTXrJtz7iZ6K2FgxcRA89UFxZNjYpFt2LKxtAPiU5G53SHbVm8sf",
  "key5": "55s6yAM2NpBmjYY2VpjKLNkYR4oqDkkPc66DeDyLXVYmGa1UCzjjGpNQwN4f8p79T7XGbtdc8F5qysvE4j5zWoP7",
  "key6": "4vEjYrrxWJGkeupwyo7xwCr6heKvkdJrLxkHxBtDMz57tb3Q9FhHCtYRc4mk6Tx7AdTkFuag9hPbcjqZRQ4kDcxC",
  "key7": "2h3u6g9SCEXbdi9ZhQeofVAukCb5FCS4HcXBbtXfKZngPJDXGSKGQsdkG8MrNFxyYWLHV3JMrUYT6AKsrKvirPgG",
  "key8": "2nyjYeLtJj5mqhcDEXwosqeXwG18mWULhfGN81F8ySnpFVeDjebm2y2Z7USmvWV3jaGEC5o1Xp26N8x2tZS1Xf2A",
  "key9": "3YSwghPFmbrL1rRr9pQQP99QAen9PEoYHUwf4BftLjAGkyh2U7vqmebeQLmPZRDWqvAtjsJmoaNziF7euzUdphm5",
  "key10": "2YTRE4ayYsNUzu1dEnSa6v4ZWDDZ72k1KS2DocCwjRXgNQNnzpX5Sa4dJkoWG1REp6CTYDH8swHaGYWmKZMWycwC",
  "key11": "1MT8ttCGSzPc2cahEro2Dik3GoS4vWk2Cq9WifQHaVh9LqA8eWoeJupnQzNB8rrrwAkkgue4zh2k7FsnVjT3CCn",
  "key12": "5HKidEpgFsDpMRD95MJdwJorcA2CohTR2LCWTyyT1kdpbDQ4Z9dBpnd5uQPndnC3BVr34Mrbb7KErjnDH7Yvf7rv",
  "key13": "sWGDMafdhhzuE4DGWsZFv9ZRMsQuWbPbGKmab1C1aHkLWudZ7WRxP9qswfLghMHBdvRD4Mfh4uCyqiR7N6T794n",
  "key14": "25Mqg1s3DKaVU1N6RhyjWtNuRs5qSHeB4iRzDwUmL8YY5yrGnUVXmvuLHAha2VSP3kCpFFr6mHNwDVjJAvbN5Gqx",
  "key15": "4ndCsdZ5UPc2jaj4P62nyzSjUQiNGdUpQT4Jpn9uT9rd7eSaGSxvfW39DdfMYtVaFesrF3HPhdoLZs1T5NSejksk",
  "key16": "3wtLBpDBa1HquyjbSTtqmZSiBxrggzctGE1XGD7DDLCb8aTaxTUaDudBEfUz1cYgM2dTynQ3KAEeUvZ6pKL5qVLG",
  "key17": "598xxqpjVU24iaVJ2Mn7Kwt3AW8Uh76YeFwSuuXkvaRcN8WEdp8rXDigutcvVvYxt8wpW3GLZmrwUSWXBfLMH3gA",
  "key18": "5u9PxWmVKfyd1LSXgmxy9XqfsKDEb6rUkKtfb57dRFBpvED4BT4pmfQgDk7n8CAofb7nAfwkrz3yeJZhxHMCuRdj",
  "key19": "4hxfZkpSshFFdbekE3jfPsVy7kRmy9BgPAbfAwawMaYhxALsis4B7sKnENBHbiW5pe9rfyQa9bHfJ8B4FxEJYWny",
  "key20": "3E5v3HgmoeQ8VpxLaCoc92dYxRjz18mSsC7nukDPEhVQbiu85TM8vdxrcMP4dJxCndKB8APauvjxDYXFu4VyRL5T",
  "key21": "4hWP9M2Y3Eeu14qTviMso7zGxuVViJGqG66GJHAZR8ZFWsivU3wFa3N2ap6DhEftKysQFfug544FavMM7D7UJYWL",
  "key22": "5KE474ZTaDXG3MYxpZcAKnRGwKEyLuecmgmvedn7vJ2MgcyudZUC3Dr6q6U49Wqy4F8Hrty5kaxjuFTV3RAc7nFi",
  "key23": "3UVEKTqMyzyb6pEQ9r7tjcK1bLSpmMrGAp3FzDaGvCzucM6svzejMWh8RhGRRLc7wpXRY1mK7CuBhTnt6mBBrNMc",
  "key24": "n9uQ8u2nN2d6ioEPuDZRx7MMc56Z5cyJbdiHe4RPvcqDFw43GBgENzvtmhp5vHwK88Wvm2AZCmfQsc7U3YFWkRY",
  "key25": "3Qrzc9XdbvjAYiev2PTfRLUrEykWZrU6GZPJeAM3R9MpCGoCCUHj4JePVKZgw7b5i3iJAr1dmFTAT5dRQU1vP7Z6",
  "key26": "23wUkzQhdHqbHdQyfjePiJEFhKjotgN3jZxMQuHGQMadqu93NuuFN4VJWomDCjRcPffTGE3kXURRWq199F8cfTph",
  "key27": "4nTfp4FsedbineXhashDiGqkhYVfzrv65rF3zmCC2L6DFrNB4PqxQjd7SzmVFp8m6hE4ErGDqHCEwC3eu95yGdKJ",
  "key28": "576jodiuhLvoPsyTdoQ77LbwfhYYPRTT61RekGzzjN6FAR4WjkNQZgEff94NtPZjVPd2ESooug5jXAo1DHdqRika",
  "key29": "2fjsAVCrYE2H7gCV1mkj2DUEkC6XdjBEoepParxsfcDacpjJi6SkkVpmGHMLzPDr3VNicw4N7NbaCx5uAygL3KCt",
  "key30": "3aDcuMvM14kW376q7Lo8pfadcF4CVsPL1ugxTcC4oaMRyoFX9bAKBHKNyaRs3DqZihzbwifRja46m5yAtyjqAnxQ",
  "key31": "3srjgw8xh3RJf7wGrpcBa3b764A1T5KFkU7nWof3nNqhWLPfDSM2dWY7jinZkZYGxwXR4t5gfodkfHjf8w9ByqxY",
  "key32": "fP7hnLy7wNokMGDruUBkzPURFQen9GD6CcfFynS9qwdzvcRWnHzno1T3kov72AUesnoxngbfaw955L4SbBhk5fK",
  "key33": "2TpWLa1eGc5Zt1m5yHL6KHTKfjWCMNm7zKXf5NsJEjfA2KryLFSLihpzbmzaR4VnAh8nP3Ve8rmGKUFdHsTEVzSw",
  "key34": "3W9YkfnVb5qtJkXw1SNMJzNTjWP5QyPfCzAz9L4ekq1LG4zbX2qwTvffHPXQ4Cvf3XyiSnzPBryXWXDqK2nFJd4q",
  "key35": "2Ky1vvC7RCS5D79JjMZ8hswVa8qzPBqj7cg1inxFMwvacqFDT9NmBGwcUXXbAaxe7VHrUyLPD1zbAayMs5fXoAFx",
  "key36": "Bo18retxb7kYMm66tWA1VBP67ydJds2HRy7eWCz14BbCjukRn5Mp3UiSbAjcjWxQBeZsJk1hvD9r5SmPwzSxLMs",
  "key37": "4W8LzEwL31kYKjSZGyvPTfRjtgR6gK9mmJsNybd6uQvyyJDQjn9ULyprw1xXbwD35wh1KgHWodqXAkFoikQkwycy",
  "key38": "ronXNppPS6LtvmxnnP93m4ZbNu43SrDNQuixmL85H3wGdEXNFASAATzNrsWSwfi99w6h1LYcroxGD2dkoAw9v6t",
  "key39": "4jhLnmcbJH85W7fPiRHnEN66mRPE1F37h7ShGn6wfL7ddyW1tcDWeZ7nfZkpiQpZW5UCXz8ibSdygxdgjJcoWA8T"
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
