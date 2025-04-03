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
    "5NPk2m16NVK5SLfB3JqL3YKhNRkhtarE4743KUF6SxkZXEjQPuw67eFiCKZHiY3SeCycxTFET765YQzTRokNVbRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23k9ADrd3Cx6C2jumzF4233fBRgpVRGhRCEq8E7XA9xBWqaEK2Lfkh7q2sJDF8NWt4L7b4TgUkH2giiVTdXPGb5J",
  "key1": "2WqxPtW2EQAK7JtZ8MHWrbRQBAgGf6hfmacnrDFdBf8Rv1tUkQwHobbPGnycYP28qstjmZsuzg81ZxLvXsociNQA",
  "key2": "QNq1tWdZbYYkhzTVm32E5tJGnD3b8DCWntQELk6Gi5cAwrKhXXG7qFPRzUJVqsaUpdyg7yWV4zWYNXwqGWraT7W",
  "key3": "5yZZp1BBcVK1qEoP3zKbuvkyyVogM5gvcSSGkfDoxUu2WmjZmmHuLPnfd77tL7YwsoWBv5Z2CZNJyE4YZ6JdPWA9",
  "key4": "2QDtaxjdKkFT8ehzzegRsDWdywNR3mjTjsHiSmrDcQapReSkYR2bvbJcZkh1YXb5Rcas8SQLkSRonVTfkuEBwrDT",
  "key5": "4d9nGc7qx6PaEnBNrebNv7h4BodPogAESnkjHiZiNjsZfXpNZA3XBYWxorFCS2HMeLsm1dnoMTypz5sXzh2KR9YT",
  "key6": "25AEaC2qA7uGC5zYEk9asYy9Njq1hz4c49FbqQRRjuAm8g7FeAKWzug7BmvWYwsJPd9M7gXypFqBAFDT4jxMJrJf",
  "key7": "5W6ZQbqLB7J4XqCTEKy6YfaDgxMw9tw564ew2cjqVJ7YxzNGTX2yLbPEtNsusxi8uq2a7x4hwU98CFxDVa4gAQTT",
  "key8": "2VEoUMkUsrobq9LnK2vJ2USRqwymrayqiuqbCcaJx3TXV1etn5N45pdR2nd9SyHxLqtaJF28LrZZokSyAWzNLwVN",
  "key9": "siueTKhT2mDMoof5n6yheUGAW5PtSNCrgues6aaZrNUoEZvhPqLBggLaMWGHXSoMVivbWaXUQ4rAXfxfpALZTKH",
  "key10": "2gp6eJYrKhQpN3g5n4sZSGmPV4EWMyCP8UxJUFA5NrLiynkPT7j1ta5f3sYHF7Dd8iKHxC2uMNtkAUoQrfjVyHuZ",
  "key11": "36TSvoH8yuLSrM2SEvMVc6jBZraVgnudg4dAc3q7u6vQwjs5bXZfn4mBd4GstrujwSrxKSb7ZwrctzdaR9R1PUkb",
  "key12": "5Cv23njoGXcfY2pWc9Q1qCWwVNjR35rWMuAQiyD98ehZA2AuiadTcqFNDuFe8URP4QZFEawAEa2wMTq7pE8XbPVZ",
  "key13": "4PAN4GEDXcCnLHxZ1qm5w2Urd2DdcNGSHhir3poSFH33pRHeR6gYvCCnmEsp63cyczdnFFL1eFtK1CdxNcDohukP",
  "key14": "3NLdS4f67rGc49t9wYXe2irpdUpPKErUHqc2P1uK8s9cpWPg9nKzqGQRXG21MAbigKi3xVQx7TmGtNRTJMhqwbch",
  "key15": "5YHt89GPofDgqRYi82Trj7Rk1cY6jS3bCRit1sHSBYpqZCPMvZZ3JtrMnv59bjht3FVNh1XccYa29byvhFqTYPqv",
  "key16": "3fJRPBtJfrSaXrMs5JLPzW5Twgs6Z7gvct7cgqvHoPpZhu766rBACtUyyLzrvR8EcyRNzEMef1iyWtQ1RtNFdQBt",
  "key17": "5cDPnH63BqgLHtdY1GZJkQqLzWe6wUu4VEmxTnXGjcQaA8Ea4An6ZPH4amAg1uFiaBHTbbcsKzUAM2v18yV2S4aZ",
  "key18": "3Dx8rrZVPiVoM3LLoYYM1ecD5A4G7yTYXy7fh7LtMyCJ4fNn4McCKVJMbtgwJB5Jy9e8Ne2pW9tVNDzkSrWpWwEG",
  "key19": "3Thsvwy6S7JnJRYmaxjUZyHUy7F1or3ygFNj7nweG6gvi7d8opRarrYfRQKDWqcSL7QAz23Sj8zHipzYRAVASj16",
  "key20": "29TZDgpoTd8zUgEvWn5vuXuHRU7rFxNoQDQmn4Mswsgv7JDDoLmHcQWFK6DjuXtaYcHSM7ifYjmgiBGq9W1QQ3K3",
  "key21": "Cz7RNSRv9Fgc6quzRVBZZQoHFfAcu6eYcez3iCzyN6XrdMzjSLdGB86EZcFGnbeHD6KGPqukHMWWfSoRw7MHQ2g",
  "key22": "3THnhqsJ3tm4tscGf6zDZXyEaeoGRZqvYiDLvyayAWXARTQoYfkmZo3jQZixB5Anv3DMrfJSbX4fXXxdWG48wQmK",
  "key23": "3jsS18A3Ace8rxbf15omgFcmWvj2nuBTdrpZUMyGm2xNWip1XU7Y7bm6Yhjhx172TjoDjeuxcTQunwBM6yUYv2Be",
  "key24": "42p8P53hX6MBjbU5BRJmnZom2H9zLwMV1zCBtTKAyQ76eiQxR1k8wCEqAWmnCK6pMPXye7cCYAoEahbNUcTyNjYC",
  "key25": "2NcUTPfY76FvCQkwZYeiezbbX9iPsEggHD3epCf7XALZAnsZacF4awR4VMt5SE5Ebijvgo7pd1tDV4vJwskUihjz",
  "key26": "NqnvXNwCZHcP21Rhp22NagYh86taNzaRock1NhxSW29MyD35ofdtTyR24c2d4KvVdKUHDh7AqzhEbgSAsL2jpBK",
  "key27": "43LxrArsY4htpreqiLU2pjPvZ9prHpaZyCDNqGZY3H9oLoJcjJ87uGbe3tz7YDg7iAvk9MoV8kFbE3cg8Tqf63xH",
  "key28": "4qKXTSF4txAKU1JAb45a1QCwj8hSkDVrVqS8hATa3fhYkUsaNBqHgx3fzT2NWA7c7SzNxZiwcaWGqvRuaLLd3kdR",
  "key29": "2vSkq1bwqnan1qbhEkSSWjVr2wmnbLmnth5ee7Gyks6KfUMs3K6zjsiNE2QhPupc9mNQx6qqLNeERyKc2sDS7B1D",
  "key30": "55m9h7BPLcZe5rrpZU3PkjyLSzXUehVAMAvW3Ky8JNzE2a5fvbq12zTRMGh1WB6PjjS1kYjdgbBtnU1kYRV5M4ro",
  "key31": "ZDKXKhH3fP295rDMrt48qrgY8Sehta3FcEXGg4wv1GdeLYSD8HeZtqYbRux9rz6JWAUepG2U5KbfurJckismGZN",
  "key32": "53kvKsfSYB34t7GEkSJGDNEn4KUUKPMqB4NE4UmgZnbGEW86qXMbrVbgwEKVHxzpUAUbyyw7uCtf8KXRBxyUE1j4",
  "key33": "5TEZGdmuA49HuFz8hHniKg7t5WWz6iFv3vjyzupmvGDPKXuyVFCvXEXekpi34z3ujosSdnYeDrKTQBNbj7i83uD5",
  "key34": "2wyStvumFpxpK86vrDzj52yK1vKfxQa6FtvsCGBa4SdsvmJUK33GZxFAhwGgqoinqx7xKBwVSRdiWz99ttWAaf2J",
  "key35": "5MZN9VM8LvCPTG5rZUAbAjyXFbbHRytWTPHWNVaoJ6C9A82d9Gkd1oEdtjnapB4XD7NHUgDDZ6LWYWt8tjQzzaib",
  "key36": "5gPq4Grbiukn1edWQyuAHuw5KfbYP6byU7NBXKoY7H7cD4R3Q2bf5qtX8EUrRJjqZaPytiY3L8xU3rr4JkDAZcRD",
  "key37": "bvCr3FnZcTjTjbFnsDWg5XA5cWL5zRoWmjyr1fkfAbHveF2z4sevUSfSwk1rH5owYYoRtQ7f7H9asQkY46kYwZB"
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
