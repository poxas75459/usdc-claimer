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
    "49c991MLBygpqDhYtRQ6XnPRvXJf4N6y9sHUcTT62Aw8zwZDEfeEFEiayR6zBvR9etEr3VpDbVhtoDczTDc2nvuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28m7ezKyvnNsD23PHkMmD6QcWmVqCxETuAxyEfgoEhCKyR6pHgthFPa6WH2hCr2ahEdAWtLm1VZFKvxEaRgDuyFC",
  "key1": "3ai5hkcFAQ4hH1hi5rThUGmEFNmYAgYpqi9Fm6cP2kaJZw3pL4FWEu3JXqwsBFSwFsKJQLwgNihBSVzwZ5xZGYdU",
  "key2": "37tuABmAPCmY7pW3PXxxMUUAowx5VtieC1J9Xahoj6U4Tp7jkTHveYMmcFUbqrL4WknkFenYnatg8pZq3GGyvGu",
  "key3": "hoURKcagXZWavwQptFMPf8ynHEEGcoSZXDpLEittmpYw8mXnJjpQzrFKVxPMfVbc4BsSHLBcNDedykJuh9deMNu",
  "key4": "5mT1yNGG725SioFV4yYXDbYxsnzERMJAALeyyzqkraVKHF1JFJYKYdNTkdHVHNp9iGd2U3YnQ2vBWwbPcWME2DY8",
  "key5": "2omkrjmPzmNbW1BnDcyanVV681ZJPF9yJJBz2Uoea12Sk7gdgZbWTP5tcdFq3PE54xsDkYfyEwEnV8YqGY8EUuRS",
  "key6": "2rx9VVhcEzoaZog5xgJMZmaT3GvgknegMiByvAmqNW2sY6uFFay9oQb7uXTCLnrLSdsgNcjP1fhqdiC2QrcZ13h",
  "key7": "5KjKQQzSJKgNcT2ABq4Dq2mGLfiL3Zyxh8jcVHdvfmBe49EuYRjFZZg6ek13Uw8dPju9t5HMzwiVDJ6C8qUC5cvy",
  "key8": "4bQYggEajigmc86L2CwN4XdKoJ4aVZRqbPiBxqfWNDzZLj9qLPtFeV8y9ZNw2FZQWKEUuV26bg3jcXaWgeQAvEdB",
  "key9": "ygcEQRZbd6wdTUeW14QaL2BT2czFg543H6NC88QdJNHhDfdcSC263aCpuk6795yrmifYx5vyt8eCdVy4ueNMrqf",
  "key10": "48Z7UDy69dCHUj8jrBwtYjp2QSSxiEA9KXVRr9AKxcRZ5VFVQMbd3oAAh1oTVs73La9Sdp7J8CiMP6n1PM4SKRfX",
  "key11": "3pHwXiBrQ4jU2UZmJSXZtZY1UYA8zQJNXroHAPqS8C4dwrPagYkcYhg74nW7fBYta1dP3QuYTf5TSF3Ceam1VR8D",
  "key12": "cZU4YxeTc5ivkQbodnUt4wRhxEZFjRn28SbNJxy2nSPaGcAP4cocbQTDh5tXMZSJsrxLaNEHDkuoWtKSCamB9xr",
  "key13": "81JuozoNHE8Aqr9VXYjNihZTfdaSPFkXwBV1H1ScvagfZfqauadTCy4hPaTcmDpR3bduKG1EGF9jh8pe1VqagNf",
  "key14": "36n7sBR4n8DMdD5Ec7QDWyiS7tHgR8T7TLGy1DWMuchy68iAsdN28onUnYsaxDH9b2BAsDugXy4Uyn8Fxz5uXSnj",
  "key15": "2DLSrYtD7YVoqUEWCccaaFEvCW1yyzUHur1gK6Jf6kZtENLvN26tMHZewyWXNEM3gyzrwURa14wvcVazhtA6J1Zf",
  "key16": "46qf7jHysNH8fCuPA2qkMNDvXNTmzA5QfNK5bRh4JKwgjzxwCs8rFZPcRRqsGsv1R1UiKCLw9vpB2jZsxhk9CBrX",
  "key17": "4vYdYaG6LZ4i2ke1eXzt5D1oWQkuci6wqSFnkB6izVfzd8SbVQRwHRZvn7F81b7yLXo95p1ByMqXzWgZChPBX38b",
  "key18": "3VjuLugTYjZjRRJvvtceUoMMRqgRVVkzkT4gZTUoM8GcugB7dvdWJ7mrMmVNrGaeuwpRzcv4JHX3oJF3MAy1E99Z",
  "key19": "2FUmzH8bGhfvTG3JegHqSZ55MRCU4CR6kYQzQkiodEW6sM5qPqRweQftCru35aUZpQPVB5s2m8bKxbqo3xs1C61x",
  "key20": "7wp2tT5HeqijPtMXJqXi7J1b6innxcBiLJNTStB64uV9agXXnNx5jfkzMzuaUMm23QsWuJeRtuPyChj1voogs9Y",
  "key21": "5D4HyFRXTRSTSBkTm9uCjoxMzRwBWPWGBwo5fzRpwTwpTJSNTc2DU2UBrgawy334BHt66a8UtgSK3Wd39BUSxqoy",
  "key22": "24ZFd6ZkzMQVh7o3TLhbHdrQbVkRThRDMbqjGX9L4jWu3Qk6Ee1RyromDMGZWE82pME9ETFaKhVwDxKELA2J3ftN",
  "key23": "2DBKRdqMhsuDrEzgRkcs5fLCH9a18Bwk8Si3YKriUagstu1854dfW7G2DvMh4fxPzh38BiqB9Mvz2jLpV6ee8HCi",
  "key24": "6XdZDngVzst6TvxESHKbU3Q1o6iuUw2erUrMefGWzNBAP8jXHdUUv3UNkkg9kpxuohWGaZgJEKCoxvqkyYeJkRx",
  "key25": "4C9WDKhKr2tEBmqg9vj4BQeZ1HprAA7mSZ5RJ2enGRLEWeD1svYuNuU4peTqBUjdAHKi52uGUDqRYvBgi7G5xSjX",
  "key26": "4jDbeWUMbgcRsDR4P7z6uf4aMSRVE4wmKX8rYgmS6wypYYueHhBvDzik7XQ5ZJteduGMYoHLxvrdNu3hiVz6qzv9",
  "key27": "26FVT3xTDxPjgHXwyrwUGUpVq5Hk4NHiGQ7WuX3CvygQY9RzWcQkNp17c2iGgJ41sPzPWXB1dBiY6Vw1P6WMX1Be",
  "key28": "2ZhTL2dHoNGCoG8LqC2vE58THqarRbUth3w2zzdybQqrUSsggsHyAwkmRW22UC8oynYmjmvT73axee6tYeeK3Rg7",
  "key29": "KTJYbnXMU3d7LTQdpEs1ZZAJn1earAXyQ1tQEV2hvCZXikkNDp6UESpvsoey7MboANZCserKvmBiP2hHPojBazw",
  "key30": "5yavu3ancfo5YpbNqvYHcWQfcGJjjTJFErjjRAs85Rw33ugU61HN6X7o9gHLoiB75kU2szbJnsqgJQuBPz3mG8Ec",
  "key31": "4fJnZxvnTc9SuZincEXP1LT7omYj9R6te69vtMEDoaqwzAnG6Cau42JC3HAfAMK2Gmn1AG9hGR8DEZxVgY2JQToP",
  "key32": "4BhCD77Por1sscG15h5RJqrBqmjG9naQCbD3U7f3badm7v4WwEsmTdeQqKktfcDYqsTybTNSsWuuv5j6twFYFXto",
  "key33": "4Qe43JxN5ZqbxGZtKjGACeq3ZbLtPtsupLnrqHrSpVVtwu54LQiJwcGuX6evP8r2zx7y9GYE9Kws5ebehhyFL15G",
  "key34": "5HHR35TCtMgcNDRXP9PdC9stf5utkMs5b3Vm68dnELTEmbTgv3EbzRdmuk7kBpTz9dKQWK9zaD6Dam74889XMxo4",
  "key35": "2Pn1EkjVD8oDZj7aPmPiUMgfwzcHVTSXK1LEtQL28YfDWSamQBVsgkmaVB5xWDiLSAfspR8kNTGxf9tz9CTjpVYA"
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
