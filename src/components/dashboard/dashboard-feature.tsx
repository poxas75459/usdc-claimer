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
    "3YJt5iCHXvsYupzhKrhT8iNhQQpvQWw54HwyipNR3euf25EXYfevZYXDcEFgtmxrGgxknH2LoYZK5BSm1r15qhbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUYRdSPRfgWtyvEjMyRZdWWMQPdCW6i94ZLJUNN8seoqubfda1s1EYsbHqPrhdeWjgo27VmwmEpvmTfs3LYZ5x5",
  "key1": "4s7pcuMsmqHnAVi3YeYp3uD9LRXRqnSc2MZRy8km6TmsqatiNibWoQyPdFFfDVksovyaQ8YqXAMsqeF2psCQoe1c",
  "key2": "JSYgDAt4XEvT6MikGsPdvixtt3Ahb1zvtpd5yQ6JrB5kPjumm4ZNF27sDNGTbtfoWFnYWD5aZXoQ2AdHciLxstW",
  "key3": "HkQJxZUF8XmbcvfH6JL8vyeDxWcXEqPHanJWLW5nCV6oNGHtChPTRC5vkUVamgDpUo6Zb2RzEzFC94N6uBHcntx",
  "key4": "365buhjUerD14jLsfkZ1AG2t44F5o6BjTPuWK5XgqCncTc7F8ULikVU94vJtrGD7Z1SXxAgFXhSjvRiCjXmNosCT",
  "key5": "8ayBvaxbwqVFDpoLyFuj33rFs35a7CDt1zr7myZPTZqukUfxvXAuho4jx7vjtxcNh88FQJgvHb3CVmukqgeUmjF",
  "key6": "5kmt7fyKha8KAptztKk8xXDAE5VBh5gfzFMhwwW4uCe6RtTpCv9NQ9f543q819i4jHzdPLrcysPfWhwpSZw2Ty34",
  "key7": "qeuDMNQabHVAyYHPZdNEXHjbBgfqG9jhZbTpm4AQkPDMsCXHf6dux4HCeqnUusoGby8o6Hi7QRJZ8Mc8auva7on",
  "key8": "4XuuTsDgiXQU9r6wqBMe6VdR2jg2sqPWkdj659LL4ws4aSxYakvYQuqJV8WRHTfnJ2arABHbKW2ydFSdUb34vs4Q",
  "key9": "3e14KcP9TAkYpXFq3yAHDzKBQmEvc9ZzZoHZAcugcPS7BseVfPguuXo8KCWGDy6MboRzK3Ffx5ZnAz2458E3CzBQ",
  "key10": "AuKSYdyAgf89Rvm3BzsCpun6HZ75mD1HchnDUFFbqwdsCn1qD9xnfWxPsfuYfWxoV9n1dstHJjv9GYEMWDKbHTy",
  "key11": "4AQhc1Z6WLQzceeszAPkpY9vz263SXA1e8mKNYjLM3Ks7Pn39xezwBcCSScnqUpxf9ZkivrHenZBzTPSKHuj5XjA",
  "key12": "4z3u2KK2Qh8tM57nZyeEycA3mQ83EoQreDQurEvPAGPL8e6dZmj6Q5m54vwGW3ZpC3fJyt9h3zMc4Sa18tNmPjrC",
  "key13": "2QpNyFB5zmK2pJ2eJkDEGjvCxN4PfjmAmKMNHe4tng8r9tP8gpE8nCMrZ6ZeXkvxeqqcooPso9BEqo2z4fq3YGsY",
  "key14": "XpKWGVWXtvcYu5p2P4jSTyRts5v7EsZkUJEcQaUWnQdEnC7USRGhg4pgnAK8E53m2pKwn7Ms9hJ3yhrbZhqXzTA",
  "key15": "2o8oHt7ZH5DbZWiw2eBoZwPRXQgxzPRtNCUMwNebQhugUsKGGwaaZbvm29FErepVSXqXGWYyPp6jwf4R5gbybv9N",
  "key16": "4TrXoZcziMEZnwK953sfEjhGhAb6GXgfRPrdHirMCWgf22ksU17et83LicAmzgDVFLXTNEH6e1qVNHoLKpUPksXK",
  "key17": "5xmjc4cu1MchuEndM3AHRoPYyFVbNbzXhsSN2jWrjAYR4nYohv5NqBSDTy2iwokHqW8EhDX5FwdKHHomdGHAihCb",
  "key18": "51fdu8cPX6VNW5wqLdM1ZRkrHHXHvVYiD2XfS9qKB9bQiyAWTAKgMhwZ7jDghtEaYEuT5QhA9ZewwTWXSoFNnEH5",
  "key19": "4E3HVaxAhwE8bX1EK7jfGDAQRHCQQEFEJVZ7bwcNdgZfNWZqRmL2riVEhhFbFLu7PefpLmWead6ynt2NCLLKkD6r",
  "key20": "QurVVNmU8NnZYfDUm87ZLLNi1JXDw9woRZYRc5BCWq4fdUivvXExyXSo2RScfJdn9RBfa51say2WeRsiKDoyGc5",
  "key21": "3UpK47Dcnd9CT1xJnvst1DJG9J2Brw4Af1ikzeQjLT2qY717PXo7PkSM7Akv4vjBEwzLrmztx8JY7XMgVQhLejZE",
  "key22": "2BBjQQrdQnersV6DEv5WjFVpbJgdqpQSKLbeYNSvFYWhJNKT3woDAFsFNkDfkkYDpB5mxPySBXeKxZdeizyVpaPh",
  "key23": "4AWT3vmemoLvx429rbrMSAEJD2wE8gnNaEd68FkvytGLCarvzAWFKLWASmNNqNqFnQ6WFeQdQ5WhsCy4BYnDGkM3",
  "key24": "27UJSkZYn6UVyiQmvVfANBJaSdW1H7WrNcJk1m2f977KGxqNEvze1C8h2pvmZs2TmMeN9hXRSKcuntGRm4t4meio",
  "key25": "55qfXissnJNq7T2unG1EkSmTckhcMfQULCfQZA3thkcF5bGqWhmBqwa9Ln7iLnvxaNzwwmpKjaMpkhRBjyZMU6hw",
  "key26": "57eVwLFtJuqzNyEwF8HBTFQ7un4CdcWzwRgipfuruBMgRYVd6oQ4RsfvfBZtuDQanDNzfTCLNhCLNwcn4MtssDpp",
  "key27": "4ndJmFZ1XiMAMcJfgQcZZaHqa8QbwYc3deuRjfgeFohPYgWJVCXy42c8beC5o67AjPSgV7YzBCJbE8xXvX352qA2",
  "key28": "24T79rQ6aqgUCamAASqmqpF1TTzsnpYxkChxV6SA5EysXeiHizsMwgD2etzzUGfY4a5towoQgNWg8Ma9fJ6kCZ7A",
  "key29": "32nyUUqerZvGnGB4zGRNGLKdV1bfDKWwG3irNCR6zxHo1ffMgNehQfR6xjVq1Y1eznhwZApx8dEmYkVeitxuznUH",
  "key30": "3UusUwMcvEf8J7VxYfBLxugz5PyXmd4vLBBi4gdMBKGfDogADmBezpCnpWPR4YnBoYBv5faznwvdeEFivgBvkQyK",
  "key31": "2ebF3bQYmtDcoCXu9LM18d5VxtJqXjsEtTC15hz7LJhsiSdXncoLiXSx5HHvM7Eivp8TffWebsvUJJ36awTweuFj",
  "key32": "emetfBdY8kTWsE2Z1jCcYM5UQ5SgbVb4KwbggbfsZjoADyZggvji42TcXr8Qw7AFkj58mD74fCfmtCw7g1K83MM",
  "key33": "3V9anJMYU9cuSH3eKL2Sv15itTMq9tFuQK4FouCkpcmGSmspCXGw5hEjuK1pzJ3BarQZecPTDQnKxhtfCDUdcPZK",
  "key34": "i66TPa5buipnjiufnD2tBqL9Fmprj4Cr5z27vGqkZxp48GBuzjnGBpkzWebT9Z8RZyg4AoP5owSsXBD1iCKfxEJ",
  "key35": "5ReqXvpWXNmyBbm4uQ664kGncRD3ENJfjuCfoFGbTo5HnRKhqhGo1fWGRyACv7mMfRxNoYo51ceg18tPq813S6GS",
  "key36": "5qLWX172fguHZYFEWpTKDZmwDcRY7XdsFVvm3cf7G7QJFmuKjdUpyGPrHxA6XVenziWQ1TtQPfMivy4J7LGxPfAP",
  "key37": "56C4qGMi4sZNos3EmS2UJrzuym1N3ZWtscy23UXjgoWUJpAb4McTVp3Pdy3iFA43aFLnDd8e45g7j9U8Do3nF8gn",
  "key38": "2rzLCoFr54HHGEJCHcBMgaHsU7aw1vJbHv84BEZEd32h55LacHVywgH8TfDXmWkFQPFmpXE6YENjMkvJ11SSpead",
  "key39": "32HMKZdsjFmqD3ru1xw2h92AzV1CWVz1deLWr4vrMxG91zTj9263Zg7uWctx273Khh3MJdVCDB2JGwa3JvGpy3f7",
  "key40": "2C2ug7Dy4GLb5fM4MABq5MnNDu4KEa7ePV6LYriBoeeeFWjyhq8Xc6qZzgPu4Bm8SQcen1UCUCWmfJp5bGsFKAjY",
  "key41": "kPZ1m7Ksfc4FSKLCZEhQ5GBoK6Qg67tPoKEogpNA5TMBjAUNsjaWFt2qMiRbsaV4bHNkQRN2MayhMKb6Vhkrfz2",
  "key42": "4TNr1YzRVf2rQ7obffUpj4VkVwwY4Vp4FjTGvowiqqgzeBNTSdi8PtxW2fbbBoVh5a6FqtKGgzGTptEDBWoaawUG",
  "key43": "p2eUkUMHLLqi9VW2W4C4mtYUfSRtm9EJKe1LN5Fx7cWtM1AVSkPLTJLKJxvm3pjpSzd1uSmNVFFyBDgczffxvcM",
  "key44": "g7H3iDvztm3NuFFYZ1wDxppvHm58mRdhG3dgpoGkv8eSCfCFR66k6PBe9NVb6G45kZJMNuPaMnnpnz8ktmaRjZa",
  "key45": "5FqquqyJkLd72zzEgqV1Dhw2pmgioKpNcx2yUUPyLCubsdt6XifDDgLKZaBdPU822Toh3Tq26iqLiwDk5CN7DyUz"
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
