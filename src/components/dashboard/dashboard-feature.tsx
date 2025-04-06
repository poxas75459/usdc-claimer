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
    "qxRRfiv8LKNGCJoFcXQhQ9qrdkoVp33VzzVbJyGXDTdwsgikeoSZJQ6pb9KxTS8aBfVqBtnTkcyKxaS55PaLQdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmsPU1u13Vxcebma8mbHtak8r1RX3V9d1FG8q9ZLuxPD5HDNXYtEZVHD8tZ9zbEWpchWaT9FhonEEjbz8WCqDv5",
  "key1": "4GWqNsr7rE9tmja8GAQi73vBNZmfRzR3X2MGYjB4iA2MiMtDrGcVpRccs6XpE31PnG8BiGW3q5j5MchfpvVAzZK5",
  "key2": "2hftAvdEThiTD7gWQaHZsnX3fZL7qKKJwEB4DPSMyEjx8VcBgdC8TxwbrqxTR1JU1ADwb6utMcUPHcq49RH39tz7",
  "key3": "4SoYEkeE76FvztpBHeYYxM9sDW9gfmrReXGV46uMoLia75mAkX7rN2XpXaZPaTB8j8QVtaZC5YYL6gpcwCLnyhN3",
  "key4": "4EbbWWhbzrQDidryu1F5Jj5qYtEDyRR87EA1hs5jjmayoYova2Zh6Lxe9SAUcmXen7XzQPYXzUCs5KnxZHfKgpYi",
  "key5": "22scSZ2pPQiw4SKA9zT1G8sqYACAZbDR3sQSEK2FEGSYu5g25oMgYEaxYVfguiM3Ni5BdBwNZM78uhaq1jcp2B9K",
  "key6": "HjQ8BKdnffuP3fe1E4cz8SEw2e94ooMyhjnytnqff3NBH7grJYQG8dWbwSdfXYvzjNp7HAmm4kqMfgsD3wGj5oh",
  "key7": "53wtXghHLaDT5zhnyEiPTkXkhf86uS6y9L5kqwk64wZdxigQJp5EcVUpbtDC9kFJz6xT6F2eKcnmNkwNxpyfU6yQ",
  "key8": "45zjoeVxaW8HNWJkntr1sSJZWjDgGpXMijtyNKGioNdWw529JcmijbDNQ4c2ks34VqoVxmE2VsFafVvogdLz2BMq",
  "key9": "XPk3V6E57YwTNYrTiaKdcKxZTo8G6ynuFDUge7F3piv7KTUh8cLW5wbCWuKjFZrEXJNy3uirtUGpphAajMoSBoa",
  "key10": "4q8QrxGiWB2PPzQCqyKsbRJv2NJK2SrAfoVfhijB35FPangRPrrcqSvfJ5SzAePvbmupwtPYFK6QjBELLygBQMFT",
  "key11": "58ffQauw2sdXajHHY73SMebiFpEopXCjjgAbZA7UBNgVGvSWWsrkap7QAjuWSy54AAzbwCauKhCJXftkqW5YrvSQ",
  "key12": "5qPxkM5T3AE7Wy5TM9MqgVRZBou9AH42f7rM2fV18yaGGZeQ9FrdGSBbgmFeUNiao8r4U6aynE6CZjXrTGK4MK45",
  "key13": "4uGKexQPuYbZBHDH2Guk5ZRLmLmiYVqn4MHSCccUU6b3LfDze7yFHLiK3rAWjfEggtLXQ8fZXLG5EXs1Ltz3E8nN",
  "key14": "236picQ5mWSgcw6RmaJ5b1d6FFCxdxECJJfm32HhSVbfcqfRePUXjt1p2BJ7HVtoieVNoUJ2Md39aRSiTdkLWUpa",
  "key15": "3nTBxfNGDzcEDFjC7VEXc41VwxrSgRq9rKhbzzef3wbmrTybusbt3WkoqN9Vhg59x5aQiZnPd6R3z8kMyK9k8h3p",
  "key16": "QLZv6K6sMiCeYMnY8taXnbBg9Ab9ysjhHoYv5gFGJuoMrw6c2pnBzYnQimKCFtQ8jur1pGBwmKi38sC7oN36ANw",
  "key17": "4WJk3S61ikAgtHEVFGLTJDmaqNejMeUo6ukvXSgajCp1N49aPgbBsx53XG6GNbJDKVjwMh3qoXmURyromMDNgEok",
  "key18": "325U52jKT3sMuUs39vGqssyNCcZRDbzr9K6NQyE63jKS869wuUWmjDZGrgrUgBnZiXGyyZfWb4Fj3YzGPdu3se2b",
  "key19": "2z3HwyTQjDtCctQ9dSto8oy4mFHspdHor58mD1LMyuA9wWiWB2CeN5M9EpAsvYTj1h1erRzd12fZTpi9gEam2vXR",
  "key20": "LzE7nwrFSFgJW1b4onxxUo7saHdKsoiwmWQRoKk1Foi2uWSVm84grkJACfUxVEreCAvfNHH3mzd8P3zE9izKkB9",
  "key21": "5Qi8oHRA8tJzPuXAh54stpNC55mKJqo1roMVAFtxEH1KPk3jVbcqqYSKccnXEWbqwPfkMJNoTNT51hbKngeNocAt",
  "key22": "5trQa4UHfdi2KFj5ZEFK5TvBkqEDkDUjW4fVvr2nNCTJ3RTZNAnybu2dmTvLWsGk9X6jFBJ7GwMA4XyY4vGZ2wCj",
  "key23": "5XU3LUcBjn1vg3bQd6iQmrVumzQwrL2unMTY49WkVmGX6EJm1tgPUfZn6wdtYNDx9pakeocBzpu5V77eQWZsSAsE",
  "key24": "3GjuEzpRuAkhnJXnqk75YGTTeKbdvx4W3xAVZE2SWxJFLxNv6MqxYeGm5xbeZ9hNR1mhmTSpYDWecNHvGprSVvo9",
  "key25": "TNmfobMjhmMZA3JwMvUg271qh9NrJ552eF2rNXjsVm2KDy642f1axDfy73SujHPmBmLSt6HKZaLChSWCJwi2MCK",
  "key26": "5ymX6kSmtRJqWgiWBXUk36u1dwjFVY8VyyDX6dv3AZdn8XCVVnXvYHuTTqTybPcK2Pa7xk4r2SwK5MPxLsJ5Pu6V",
  "key27": "YUU9tepgniFS3xy5EvG8h2zrrT5fitJytyZgZzW4bNJQjrDJpKGCwimRFa6jiWPebFZnwgmbhTPLcaoPEbLN5dx",
  "key28": "3DkCgjihH6hpmXFmFXCwVQb3jWao1Gh6ZJstS9kDGHQeY3NtQ8iJatEqjeN7GoG96ta1rWqR7z2RuxH3yVciBJwP"
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
