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
    "t7dseRYo1q4HBzyHENLT7o2XaasuVrXCLD7421iN9ctpzq92GQbk7dpZwKhfW5snZd1xY3fdGXhTA7EW24MHHeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sbn4etgGzGZYEwuN9XBNL5b8VfD3QkSwgHDTXRDouQ4KYYfFG5RLjaSoa2nhAEz8Jbc1Zp4cjMDEj2HXhbW7xhf",
  "key1": "2P6VsVtMKfr7p81T8omav5orjhuh2bizER574YH8R6rddPcmS1ZNSPU2dH7v5cqpZykzmvMHv2wrhBTBpU6GvJXP",
  "key2": "3wrVDytz3amQXqFXtAjMtcsbsxjmaovh8ktAaWKEGCQ7j6qKucfXMLkCSBr9hUwjF2Y3S3zGAugUr6abE48ywhEE",
  "key3": "kDkXVa5BBKaq6XEyXXurS4GMdrGPKEXxNtPaomdUqHbuuL5iWE4hQBVzoHHQyemnbz3GDfSP5jq7RpGyeLUof82",
  "key4": "4D4BWLfuiqe8Yer4VfMMekyDbZQhs598sKuFM3En8RMAFS2jyJgUUnUN9ntMbS5kzLitF2VWNjuHywHWDrZG6Xxh",
  "key5": "bztzbof1E2ryErtzondwo6YTyH8dEPTfLqF5qEjHhTG724VY2DLtCaURs4n6qb2dZ7phe8brFDNfP6nmqThaz5h",
  "key6": "5R9PRbwzbLqdhuE8sp9uFXQGnMuZGb9desh45jpK6MZoDHjJ671wLSMe3JboTJLh5RZXUeMK2ArJFDBmz6XmaRDw",
  "key7": "3o4NE2qVr9Ni9dhBX6LGVgHA8YK5ejHCX2qqNRudtGwz2nVyXFzRgQSaF1UXRDJrsnjwEfMb7XU7Jzgwhyt9QzGE",
  "key8": "FBbsPcfeQe4NymEk4SpGKXvdFpDrvWMzXYVykmrKmXeZNThsx4k2UZCXdgKSev5E1rmkvrULbJKZ9tPRmbdWWF8",
  "key9": "5cLiX71wjMzDuWR1rk4wniVi4icfunrceR1oQF9CW2Ge6pTfh7x1iYkhE5tYPxUYXSSGNsPNWmws76aV4KSSXnTb",
  "key10": "2B9h3tcZDUsj1zmnZ46Dx1nktxrz2SnvME5stdvX5qGFLFZ1WoLC2iciLnux5pm2LQ8m3zsC66pZSCzhTTNuAG9E",
  "key11": "JEJ5hxLfEBr77YWe5TUZKTt7o8SYEwFSHxRkrWPCTCdqAPT87wk14ZE9UaR3SSLA2BkKd6hsMZeFog6ED3hHAqA",
  "key12": "gN4iwpN1epSRHwak5FeKWPtsX4r66xokZU7rm1QrwHvpwRzmC5ZRQ2GsVyff3JJyW9te9GmFp45J1hjGzisXRud",
  "key13": "2y11sGv7auLdVsphyzADoo7XCNdE6Y5EKhh9M3UAvHwPAT6qa6ZWvTTbXGvXfdgLvsqyCkwXQHnDRfdAzCxsX4Uh",
  "key14": "4JqFXUmnXwdQ6AGLjFhYAoefYnCry1g86rKLNs5osrc7c63wekhHEhHcDBzKGECtn12pyXpnuBRrFbanDnFEY6Rd",
  "key15": "2dMFeFfxiTP7J7UNTRmkKmmQEEPcwByGTXqvkEVsNnS6aLuxoTrtJH1c7xem2WKsk5Pm1ZHramSuaerRhHMWpsZx",
  "key16": "3tmHqVcJr2AMfEia8VupDFRzWhQuFUvpffi2Wbe6TRWCZLkYwm6kcvSgKEpsiLg6rxhypeQo4dPGqKetcMYqW7km",
  "key17": "655jxQwSUPSkbiNMPrJYU42LPqH5WMWGKmx38DebqUN1f9UCiMBRAgSnfSQVaJHJfwEvkUpnDgYn4AxH2SRv58Fa",
  "key18": "DFHvGqYr5oBzp42Fn3iMHtTQLMSN7ppR78goPB5rWUQVEEfxvSZACcEo9FBvN9tRQQzRG7EXdG8EKqYBXdsmHat",
  "key19": "3PmNEP59iHDE84eQpnjwqAghthgsda5UU3o42HjigpDcg42y39CUwFCG4A6ZR5yNzPEkgfc818keUTNkzBEgmupn",
  "key20": "4hghm6dFAGWwwqWmSVyUZ8fzRaYBFKNYZhu72wJFhzpjkQHwhaGcQMUJ9kbyKpL4qE5AB76ghdLrytGtuEXpD5tp",
  "key21": "2Lfyj2TKXK87BqwatCgM9uHmfVM6hwCPuLoeQ2xs67rhkh1KiKH4gnMgFYe4waL3boieAJs88Jqv2xjfGHRuxCDd",
  "key22": "4MiYLKP8Tihs8aWqv2FryHmBKpughB9JpUDUxVHMH9aBDtpRuhmash3kn2V2U8K5NerKCzCr7fknu51Qde7wqZZD",
  "key23": "XcJRijVDou9GbZbhsSBJycneEs4pVKn3KeUu5dZ1vEgnW4veJtvgsZag9RSoywb7RmoR2Q9oh3zwMj1VRm2Q54F",
  "key24": "5jopz3J9GvzDNAZv3YteqY9yMJJV52HDxSeaRPt77phBnexjX7WCtwBVPEvb4FAzPfULbbzDunBknm9MQqkjwC1P",
  "key25": "4YnLhnH4BZHhXHk6Mm7sEnK8vvTxfTZcGwqAnX5a1vMFnXuajBmaPxt3G3bDwmv27sK8Qq2cStPD4TBHNt7uXXWR",
  "key26": "5hzAev3uYSdNrc8jt5xJWFmtv5xVVpEgmZQ3whixBcimMf3WimT1tLykksNm1XudVTxtQVA7SQEpsKccCdKrfwZh",
  "key27": "5oYWq9tpzaVCecX9ARgrKAvCFFGwSSoeZgvywY7DAnY96KsyVQ85vYCeJhJiGBnBNFUq1xyQ5EqTqiS9abAYxj86",
  "key28": "XdzTHGCogpJgepFsm6WUr6hstZtCbb4qJASk8HAeG9ENFAtZPekLpaoVvbXuRof8J8rJg11SmjnWvN6Hc7LUKYQ",
  "key29": "2DTvjmvG2jtdeWrFNf24P3XcSdoaQPZq5Bb3tP8fcKWQJwZkjMVzT6UXYpt4uej1PkfFka7Z7skGemBZTL9WPyGQ",
  "key30": "m5YU8FGHNZBGD8DJ8jehZSFvn4f2Acp1NMAuk6pzSyrCr4pnZ3LuvtMQj5wDoiT4xtE2ipm8DKmm8dmK3Ya5Vhb",
  "key31": "2BsdCLEDxywQ6BGbs922LHQRkWMyJDaX9BY12ujbbXCrTqYXz8B6Jx5oARWYHpqK8xDPexiVw31meU9tYThuKQNx",
  "key32": "2ULPiURzXz2Pir9C57CJryXHnNArdPUVALMnMUuppmKMsc1N8NhdcgW1m8C817fPexvAKTEcC3qjJLvjCB2hJw76",
  "key33": "5GkcB7RaR32SyvSLC6dk6rSdbQw971E53UhKkQknbPfgFCnsxZQsYQbiXXSKQJ2aGgjfiiw19TRZYMTdvJ5TAkCU",
  "key34": "4XwstCGNWSSwRWciCdEJxBsUHX2eCnnmEouLBjPhwsntS82tkHSa4Bj7ta1oxf1ffEngcktz9XjD9Tqbt9QWZs5a",
  "key35": "3VVbYtUHzRAbpD2XPFutkYKRAoNxe9op527XajxRmegRGwz7mbL7APnSM2wjyfHRBBYAem2N6tbTotbHzVpBodJ2",
  "key36": "2rrpewUmjo6tftwPikVncp9Fsk2rM5k3miLXBVgDE1ond56h3pVnU2Swoht8yfmLTgj8X42M13o7XeXR549J3VhM",
  "key37": "4Z5ACC7z4EXPiGkeaVtfsUBcyvtRnDEWDGmA4egoPX3Da6Dv6xLgGtGbKtzj4hZvfKTyeqoY8DFqcMAYgVWbh7Bo",
  "key38": "5ysEHt5QbdZpSa95BYWP1GuksjVrF1RySjAJtUkdUbCXqyq1qG5qsDVNmkbUa9AaNhT5dk5o5H4hcJBFQar1gPq1",
  "key39": "5Z5SpYXdfEicvosMie5Z689W2bKVHWD5w29NkK268JvGY1PguRiDZmH22zh9CtKVVbQYwodDMwQFbUGA2rSbY5Jp",
  "key40": "A9pPtQYfeKpam7RmJE48pphongU8QowwYr72RVrkH9ckQMASg55kvaQARGaUZKTJXZcVCAULFTyBpZRcoYWfb2x",
  "key41": "2xpWjKEUDVUQ59ASBF3jRtthgWn5CQ6khNrbcFYzx3QHGVMLtgiYz4S6MaaTJSay5q456FBQYQd2rWi3kYFj98pf",
  "key42": "2tLbbQ9fnK8gVUDH5heyma54vPiFRq5FSFX9DhRyZM4ztqqRSENu9vEXjW46WwpUSSNtE5crVRBsA7VKfwAwK252",
  "key43": "iCWkWRu2kXt5ModPFYxyHyQdhv9R4f5Erx3NmLdaNsH2ZNqRazb7wMwUYMcJZnKKTUYSFE739aibUsah8XAFdDT",
  "key44": "27vY1g1pTL4QGtybg7ztpKgyJUmM3X7PtwWnmTDkDsyDJa3f5hsEw7VEzYiybSJDjR5uJY3t3gdj6wPYp8QKXPRj",
  "key45": "4tNhmF6Tk1MM8751wn3F4jqGxVTf7hrtDxx5VLzPzmRbAJkzF5KEB4aT4gKnLBeKCYnD4NxtdsyAzQHgyFePxuiq",
  "key46": "3FxukWNfsRxrHXUsB1Am5JNvapnMx1wqdYJqa5BHAMK3KpSN36f9AXUFj2JEH92x4CTB5p5AUFQbNeSZMo9LP6kX"
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
