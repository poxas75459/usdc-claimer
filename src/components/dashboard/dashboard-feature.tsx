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
    "2VsBppD1CBmdwt5WZJJV37mZWon7c3MCbPaupEwXPthLc2jc6dxx8z8w7pZe5LpqspFYNfdCCJcQvznQReBZ8Ki5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEVEDNEDJBpeCeVPXsRTV1Ub2SHvgfyWHBedHYVT1ZhWAXfMRR2WwSpo5bz11m7nG9SmuKKztmpuDBXFxnEAXZH",
  "key1": "3BWyKrJV4M9TMvVycFDPM2MmzKWzX7Ghf9E3UYJMFgqVq5tb5jeNt95Hfi3pNYz42RfWGEgoGpLGhXoth5L2kgQQ",
  "key2": "Q9MhrybjHGG1MJhTVmsfQPv7eQSAuyaSRjVfm4UrJighWf8aCk9RVrSKnif4RSJyBJtGaaEx68BU2hieBmrggHP",
  "key3": "2Zjp96wPRs3vERA4tJjU195kB9eEz3peJkaV1hKK7qgfmWiQrKd5pY3dWbgbq4eTTtHjPZSQoj5SyMbWhyRrd8Bc",
  "key4": "2sxQkvWBdChzq7a5wrNpD5ypZmu14Pe6ka4KaoQJDoJsrEfiABkkMuLyVK3N4BeapkYdAUvkPMnPRjHW1atM1xuS",
  "key5": "4F29A27D1cUXsXAX7CTfpesMGTam56tN98gFtnSuwtGdgY927ewFxXhjLBw971HTxiefGtooN6yG2rmGgysqDrqW",
  "key6": "5VZryBe675dkMAizJwKdazo5oEubrqWAdBTCVTc41EimMRHkDbPLqJ1kDPUpZ5rstwJr3fdgfwfLoxwDf9dJeog7",
  "key7": "58MRjWz1Coo9i99vdg2axes38TzqbLhWwvevG2SyT7PzWB3f3yZjy6qmPzfXJysdWk8pRpct9AYL6beEmDwm7LzQ",
  "key8": "9DjjFsEmdkwsStFb9LxipdRe6vruKcVLFCLikVYAJhRMixrTQFA3MEsBLrN6SXQ9oH8rVDyizBFEbrczTfptbge",
  "key9": "4MDhyRLQDpLxX3iGrLbafY6oQVaohqRfMcZwmRm47j414FxM3UJcj4Zw4yqH6d7oPP7B5vvcm5iM8ExCSLbJY4RT",
  "key10": "62VLRpeFb2ct2pRXusxZKznr9B1fi8PfxD7U5tcESUheQ2C2pF4Yo2EDj7vFk3jsGqFqYucmDvPu1CJ9fYqNY6hL",
  "key11": "55Stwx1MGJCwKUVWhkjbJmbHusUxSJEtjuwu8qQcUoXNY5TwacqVYed7Uor6o2g3U3eYK2y5kpdugk9MzZ5oNhcX",
  "key12": "vFKmcbxXNkbUaeKQ3ZLoqGmoTia6s2QynT2ZPaNAuqqrHiB4FaAvBB1HjE4Y3LvrfLUgefB86AMt3j7XctURkVt",
  "key13": "gmh6Ukq8sGwPXAgkCQnJozcpJLnMwyunu5Jve5Aa3q9BzfEyJ6YDWpP7ZCARuDumr67rxGP56nXFrKKPZMgkL6p",
  "key14": "2e2oojfyFyZystmY2ELNX5j4x4p35ikeDzSArMvm7V8L9DAug1sYKXWSkqXa9QS9LkJrB7bqnZCRR3Ho1nV6uCtZ",
  "key15": "cfGSk1TAxz9hJSPLrYfXgF7e1ZHHwGaiwFXQyjf1GbvtASLi1m6Ec1ZascEHP9F5pemBKgJC63FundA9doiUQWA",
  "key16": "2HzucCobbwX2qHbqSmKbnRVhdeA2HgQggXky6GPvkHoXYraxLtmC2VRS3aikFs8ZBxuPEFD8rCmnxL8AnsCKAX8M",
  "key17": "3wZ6PLbKBtp5hZfMfNjidQnSeshV4ZiAEEWqxDu2d6xQJZDBx5NWz8JQ9TYTCX9uCFJtRHJLA68fLYrFWLg6ARUY",
  "key18": "vfsCtwGdD4fiS68pNsRn4xqcVHB55s5bQCKzDJ8W4gCjTVaTRD9G8bHjgLjmK4a4m6YgWs6HGFEzNZSdUHCy2yL",
  "key19": "s4MXJ69ChbMW5jPLk3jy818JpFsmuNo7E7Doz4qqpfcVkTmxHTvAAyayAmxf545n9BJzbY6349Ef68fckpzZLAM",
  "key20": "3uRdPGSsRsMEwhv1yekctoFhFvPTNnkiQZCHrG8TLzspqufmxZxjnA4y5zLNWQp4NMqd9H552DzbPiPDrugrbmcf",
  "key21": "4nTPNpN2gh2GJ2tvvcnzsZsNv8EiDT4utq7vUot3PJT4JbwbbdEyUsTywmnKRFXR2DZ6pxZ3d8g2Dg4r8g65GJw5",
  "key22": "4un35kgh7qAEDhj7D9D3rN9tAP63Lmw2y3Uu138hScYoZaCtxGxAEWTBYxiDNHcNKqoWoq5x4AZcoaSPrcwwLJut",
  "key23": "3XJNnuU25MdKc97nScrXTGctDoQ7t3gaHwoQ53jtjKxGWS7qrwuuACen2B6YGuLrigsjHoJRBGpEbnSKq8Ar3TQc",
  "key24": "3xUU7qYxzhEGxDg5ozyEZRtiG4DmM3L7Z1KTSHYE9PtXyV15SfJzD2yDF6rXbJ7MsxsQvztrsiNTCNmkewtT5hph",
  "key25": "2GsAZRbrCDjAFBsnnSEKNsziJ53Yknomw2wm24UTBf2CGc3YV2msDeSiVbXqe1FpTLgXNo3iuJxVMTSTGSMK7aYZ",
  "key26": "2x9SY6fuyjV6MJQNetea7K3p9P2jDD3vXqcnELtWZB9SnwPjaorLe1NGfycA7kK1q6BQjNP6ACZWqM7xyFGwFRGB",
  "key27": "fmQs1Rq2y7oybkvRQExUGc1fv5ey1SjbKGs7gv2JT2ZSNTmNyT6D1EJVWpugR1Ak1nUMZyG1nchPPnCBSGh1cEk",
  "key28": "2WatL7rSab1WVNYgJt1ArtLiMd8yQmodgsTUfRuJmLKs1UaCogxM8dEfaqhFA8v7eARom5SCMHUjd8Aj4gMyuPms",
  "key29": "5DH2t3NR51i8M56J9ANS77YrRppt14VNgX6CUrx4VrfVdSxrxqz2wJrA3WyNnyDRac3LVjfEJLV5pWj8cC1ZxhW9",
  "key30": "3vHzp3YFek5e2nC95vj1P3yaadfPe87gaoXSLCQyhQHfTgWBR5APjHfXsiMa5UYfAvQvHEzTgMqYou8daHWMSjMA",
  "key31": "3YhbW98t7pD78oWhdn1sxA7KEubd7DA99xVhaW9vTAbinFo1x5RF6iFWaoFX9uRispkCyWfHrML4JpGJmzRNggYC",
  "key32": "4v37dyyg5jjTs1esT6Hc1rzEqFgmmKr4NTsPbu74eeV7VX6XxnDGCqnReCJY7KRM99yax9Gq63u5gCW2t7UZk832",
  "key33": "4d34Wv8bZJUSnCtwbQDA1srqncwBade9eiL6D3koKLoQDGgwYPcuHneUVnFRm4znV22d2V2YYLzQhzUD3TvAdVH4",
  "key34": "4gb1gwkkM5tSxuk4tNS9ukB7oQbyyU771qMdmWKb7Epnp8XSuX8dtNniGSaksRaz9KQgavR7kZzp8mM4j5FRdai4",
  "key35": "S93MxowujoYVJnBWGz1EVLDVCWAh7MAXUxXyj4skBBYAAb2rP8g1yHa2CLebmjTMTcNKiKZNTWMVzECsruoQokf",
  "key36": "4HVr1r4Updu2HPdMR6Y3E15UAYYKFGkFp6CSj31MzniQm7y7GBJZBJ2EouJVzhqPDjhDM2rqn4HCsKKUUU6jNGih",
  "key37": "5pX1RG3RKcC7y2Tst5QngfjZ9b6Z46aUNkzhHFPXdyPnWGSdzySqFQKHz3fQsnTzCbVh9AVVEqTDqBWd2TWSEzTQ",
  "key38": "3rpGYvTe5825qwjkeiuMwq22yxpyrfQM7uJXvpT1asFGPzdcjKwYbNp7WbJLqNhb3UWxQfQdosy1Afq83vdTgRyJ",
  "key39": "5NdVoYsA4cMqyjxUTKgBTYPmkA7grEjdPHdtAFTVm7cyzB3ifk15mDzckLKyRuWrH2TuqF4gWW96j1uSdoGMQ4qd",
  "key40": "5rRDy4J9CsczYpsxQz1NJwfDgDgN7sXDSN1gutNAKu23PUcY5MApVwEs21MUDgTG2C1gnV8tiRy9Q11a7dWVHWBx",
  "key41": "37ziXTuHrDQU7314dXpDGt1ZASLJDEUnXRCphRZ562RHfGVSzyKLVAvzT3hCgTRzfoXgtjHJHxoNrjziRa6JrDNo",
  "key42": "5hEowmALikFAc3WAJjXvtEHqnD64k4QTnbPXz8Mr1VFxFHLsKo9y85biVdBb7RtZMFDu6b4e8hpffdGiM8annAwG",
  "key43": "2JhC9HkdC92AJBMssZVegjMiYeo6ZhxvQfBYbcmAf8H9cYJygcYx6E8wCSosUzht73DbRHfEum1UbbrY2zpccg61",
  "key44": "ZcEiZ9pc56hPaFjLcp2vvTJtY2q7cVop4twVbcFpS44JbNz2SUXwpw8zUs4ZtKcpUhDaZVMur72Ae4t7r27gUDf",
  "key45": "4dVtgZVYG23qoXgk4WGG7v76Rg7atoi48GWbkFQ1a6ehTvHHEGRi1oXHSyprGjat4TtmFusVC1anM7KCbXuBWGC2",
  "key46": "ZYoaUuT3HJSMLVuodirCwkoagEfNpGEJsuGsv5qCzLUn2xZS2uHidbCFTrYVvyHSvaytnt8QfEArcoWVQH6V6z7",
  "key47": "3Xh7H2rJF3rtgWaP1A6PdZZ8Nk66gLrVBWNHVPaCj69TvFEK3jB2JbTiLL8ZhrhRCLDfdDpP2gGHDrNLPqE53Pdm",
  "key48": "3CX1efwG4QAXRG84LrwPX5uHHYQXSZ6ghn7RY63H7tRWPpSpTLb7XJGjosUjVzS1KY9NkDmzJiJF3m2uGr1iLNNy"
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
