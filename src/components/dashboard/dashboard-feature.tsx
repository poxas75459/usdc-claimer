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
    "URfnqCHVpp7GLEGZwtRdfn4ADTEYMu8sxhEhDhmR4k64nFsFHfZv1bLQ7xryLnQdohP7egdhka1ywDRFkEE7upe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWTp8Pw6PGBnXRsqzmTDNccc8uCbmGaVZdHnYXzhjkSzjgBYeTAAcN6x15RQGBBMRYuYRgxcEepzijbjKbKigdD",
  "key1": "2WqvRp2HqqQ3qWx4eDEGrULr377bywnjVMgibwrGJ6Vh5FEoxnH67QZRq6MLbFVdah8PP7766KL8j8Ftht2bvr1v",
  "key2": "5LqV45fn5depCNBvfAmfSmaHELK8ikFdgmPKJRhSkzQHrhaCHXXqBk4W1qyDwtSKwFrYg2GzmuZdAoWwb9JgW5s1",
  "key3": "3yPNZ7HJUsoq9HpfV1CpyWUAa5WUw2hN1hr36ir3WqdjhhbMpigHSMSei3bL2yYYtP2pJZrZJK2mXe4AmQzC6JiM",
  "key4": "3qptgfWbzzRrQcy4e2rJuQ1AMbZojRFKKotbCSt8y5z3taJ2y3pPwvRR2TN1dp3G1cWM2YRfTdjipqBZNQRp3brK",
  "key5": "4PepaBijzZxX6GHP3SVhsNjQLvDhofEDpiLmE2G8ootvYiK3Tuyk1H1iG6ngFMwcPCaxijXuqrKiAmDrCcqbX6SZ",
  "key6": "4Rhx4CHiaYS8YPDo3HkwiBvM29DhKKtkbjSjZpvF6kvk1TU6M6WfYnFNX6pifhWmXUTC7yEjqDSrSNceqvq16sqL",
  "key7": "3hn29qUDP5Wsc11vJrKR9bevUx4oEeU4Yu2z1WLqPCxyURkcswp9nssmUk48q2944cKF3iaRvXYSZ5dnpMt8H7mG",
  "key8": "2CDAqKvAWBZWXoJtsVaS94yJN5tUAudBpKVpw94csjKwEgTxecY9DThejHTtfpC4KGHXcUbZZ9McFNjS4R2Tszgz",
  "key9": "qDtfjRPn8eKasYDA7KFD2G1GrmwYdFejTbcwe6xkPeheGz339xFrADr4eh8NJQ6Rr7wDkMvYdfSyjnr4KgGzDt3",
  "key10": "5WKKnkTFUoUUC4w8P4ZttT29s1HkLZPxn5qi9bouBF1hVetwaKoGWqvHwWWeMBfKXh5EHfhRgAzsKBDZjmVg73wd",
  "key11": "2364yEBJQttuhL4MjcqcdZphr8JbXDEQgL1W2jfZ729wXDxRLh6HajuvZ6xu9X9jKTR233MPRwpVGttZM6ZqN2mp",
  "key12": "fttRomDNeVV8FEjwYvYmR6tGGZSTSnj84k5wLEQ931H8jUUq4NnmoknAbghHBtCEAVySEGgkYgjCCMkKn9HkuPR",
  "key13": "3ksUTRJRqQRDtTmgdK2LqRihXHAQwBhnwhPZu9xh6A4TUHNS6rWzfY2Gffc1dkQFG76gHuK12r6xrpJGVVdEZqAV",
  "key14": "5fF1u82fwazQBhgXXH4a2jocy8dU9M1yYUMmAbMK1ZGnK9jjCjm48ToRtsbimEqnT9eqZQYL76uRZL937CGKfTTq",
  "key15": "4nAjp2z9xvt9QhHS8G2uxVKHHuVPZcMEWmiVenEUycHMpdygPzhWi16VxLdwNcuZw4xKM7VKNAfKhHz7WtgSg3JF",
  "key16": "4P5wXeNbi9h1xd5HDfnKML6k3udmWJqdcsvUD4vbGjwQUAB2G7as1vKtiguWUkQ5Acd4Bb8oqjZd6euDTHCD6BJT",
  "key17": "3uJpd1HQ4hue3SfVF2B7AyyztZYsyp13gu31fFYRNz2ufDe3ZD8dgYpc83a6JDaU4yAX2P7Dx6ECK2TUzDkFoNtP",
  "key18": "ktoNL38AvfZkPKbg9VNCkRAdRi55HWGHUAPE3JHW5B1jhmNSxEaU3j12N2eGNNmKSVoBPPprmBY3Eranf6e3FcD",
  "key19": "3HLYQM8D5mXAs4qmUGdrQ4gdbbM8mg4b7abjzJq6KeAhTgjgKwLnF5A8kMQAwvjADARLB929PTguceqwEAZkBJDf",
  "key20": "2GEM65mZhVJRrpFWd4LxnYuucc5eG4dYTJ2wTwGAt9H5UFs4LxaR8WBbwJohcJ5V2yS9k85FoBcvMo9iuMZLey8Y",
  "key21": "2UinorD7FXkqtCnUatKa9F675fQ2B4ocSwFJmqHbvf1YJ8k8bZu7at2DF5BGw8hfxfDW4M8hcEfr9czVJ9oK3ZzU",
  "key22": "29NNhDnWHQ9ageukxWJX5FMGo4cBviwkYyeN2Po5XJ68J1cgyvFJqiYXiKcV97c4ddDq696x9YkkGr41jv3eCWxD",
  "key23": "4W97iMo3bTUy5nFvUvDexV1R411jmpb73wZxKukopHSYx89yMkbfyWUH5CCZE1ag4oErEgmpfrpeUY7k9xeXNuC9",
  "key24": "5orHNFBP2ULxryu9Av8sWZsP31eFG1KqXAJkYpixCNsErHiRqdTnU7PnmTx58arApCbXpVFwqQu2gVZbmE5iwvrs",
  "key25": "H4cxM8d1vs94J1aZGALmeiyfNMYtjuYED6WfGjh626fL1fjRhhXRQBYCSYmxWWpchn5WriStDsBp7C4fbCGcnbe",
  "key26": "53KoJJ6diuymMPhBWp3MXksLKzZAKgCNnd5FurM4eGdcqRhbNF2GSfr23DJDqBXzrNAuh6KppdsjppwL7yMAuQbL",
  "key27": "5r7uR771hEXJeqLon1tuqBzDNCoKfVeGxstytmhYY7RM5iWU1e3RWn5w3sqThDKppJzMVNZT1gT6N9zqHWdsukmu",
  "key28": "2iRPQTysdF3SLkoSqEK94fVAk7rx1CnNVmgDFuWWjX7cKZMox1it72iifhWyxsg6RbKDUpfGpMv9wYEuBmZTt6au",
  "key29": "R9rjHWpsFZ6WCKg45TGSMETmBktEdha2Y9gAYszXHp4q5MrmD4dFY99Bk3cfkYHzi9zkXwseEZ9whp8yMJdNL91",
  "key30": "2RhKbGPrsXmw2RBurdYxT4326KaiEQxAmgC3tggrqsytBsQsFUCoSFcrNe7wKbxC3DVDVZzDc9oZrgT5Z2Yq6gLh",
  "key31": "3eAvPNjJwfCxYVK3kF1EjvEErCpygjLtfMwMFcxZD6RscdiaVdzwY232HJ5zQ3ajAuLBnDaasyBY2wMeLqs5kWwu",
  "key32": "4oT4Gsa1n7GWNAb4pQNarEqdGAAEYL8E2HKhRJ45xS1uaSu3586p753Z8gesieeKwmCpbKip5YnYVYjwYU5jrXEw",
  "key33": "5mszcntY7rvYryhSWWSdm7q7tgxwNMxqGbX6BbR9uBEyLYFruAicbRbsZutBKAcmfDvc1mVoWVmcLdLbpQy3gCFm",
  "key34": "4q2tSeHd2f9FZVjf9HptFp7e3UPhTFdEAcLPTDYDLbvVqq2pgMCHV9fdZveZufsNB2NEafP5npBmSdCTmBZNkyLW",
  "key35": "3BELLEa6pws89LZftTQJqPXdQc5nT42UNJuxwCqfQHxZjW1BKnzhBzA8joTGknCDe2gPPN52XZg9xQw1DRYWchUt",
  "key36": "gkepXb28MJ4bre5Lnbahqa1PU5MCK7aDQJsj9h1z847m3dyuokmiUCYF5WzBdKZcwH4afoMH5ehqAaitE8oaUyW",
  "key37": "2kJrRVv9wSPxQKDsDBfiRGT4tSzQ1XC8gNjR66LvyWrK9VjYkoS4hXV1PzbvMN8aQYzqYdnRXMu5qBXNhrwMqtzk",
  "key38": "2QmfpXk8rRSLXnjmt5Vgq9FN9quVyfSzaw4feEAVDUnHh6MAWEEE6G4itdxAnKVF8ZGTmTSiGo3sYX7EXduQU2yn",
  "key39": "8m1jCH39Wp9wrTejzot4Myw1UKgTut2AGPDB3RBWUqPr5XCjKkhBRgynPmNkqhaoV5HFzTC6pwia8CZAcZE4bVB"
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
