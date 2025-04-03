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
    "NpmnBw6AakXkNLLkYSbe6xKiz1sArtKEJZdz5ecCAPb54rWBC3sgKJt6c8s1vLWDNdg1Ps2ft9sg8Q3pnB3wB97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AE6EhaVs4HdxQubKyrjFcgqGUEGAz7beeiTzeNMVTeazeXaCKUodvHunitzU6nhi9uDhyTeAKXg1yJPD1PQJfS",
  "key1": "23U72tNhtrGamLhtUzUcsFjJgHoaSjRifVxW1EwUradeCRwQVbJ7zeymRUiNCE2moYGWo5RTke2HMFjXZv8Uq5TK",
  "key2": "5Hufttd6YmNFxt2oYfVpUgekDDGPRjTJ1ksZyVkx8kwfN3HgEccmuqxGAX3ru94G4TZA2QsA5tywsG17okMoQ4hF",
  "key3": "b1LxTi8UUMjW62yz9iDWK1CH2Qo8Tf3w9dR9rbgBsGbSXg3rRhvrYeiTtDA13BJN83rUEFQJgg6ZoV7uZPQowuT",
  "key4": "58XFksUEDpSkWcgsEmxxt7pKtPeXzbLmXgjcZ1AzGME7cD96mvsjMZ7ckPDc4epNc2makh5DL3nz6k3ACvwgktft",
  "key5": "2tHmGGepxKoW5rQoUYv9i2XYzPRWspPomw4pcR1uTQzJ3ParU6SmwNYJFjB4PZpzFZ3wagy7ZHs7KYSunWJV8p7t",
  "key6": "5SSLdzDTnKghbMTZCKhY6tjHtQAmTxDv6D38Gj5ftYQb8ZaBUKnwbbZYztZcPZTBzSt8m9b6WrdukC8tD7rLgvgC",
  "key7": "4vipg3kUhEKgJfNfjwF4pyxzfRK5bzZobQoUr5hj7az5Jx79Mf534Cn3X5LW4PE7QqbHT84Bd3mjXxgDgC6JroPf",
  "key8": "eoWXLcrEP9mWRwYhpjiCMQdk5RyNFT7gfK2iVQ7sTkYYqW1HTToSLFQjeCa7FeTSnyiRyaUMan7oHyvYSRR8K15",
  "key9": "3zJgmwSN9po82kwdiAeB4ki9ovAxPzqJ9efXApsLh171tALuq9oChvAJPevCFoQepHJ5SBJSRewbgBCD9Erwh9zs",
  "key10": "4VpStnu89ufQd43toUnpadsvGAitj5ysRguPUqUVxutJPSzkNRNdQTcq9RpxXUfnoRd3QDdvDnyfUqm5Q9tSNfya",
  "key11": "51DfseL6dYpkfb3hJ5em5qLQjCehQaE3JqoFq4XgsNuQ7ui6DPVnnL8i3KLiybmUJEPUwG9Jc1BnfRBvZ1izb7p5",
  "key12": "b5VLcAjwAHV67BSxryZPmD5SdQz8D3yu8u9PRNVsS6tBwqZ4DpBF2Kd4DzSKniq7Sx9aUJhEBTLPnmCCAPWxVDU",
  "key13": "54i4UPXiBtSTDXk3oHEQ2ePkufQBe9bcy24VebXkqf5F6pNU4nUD9ZWwTTTsXTWj5xjiCLK3tAZSYivFL1uZASdy",
  "key14": "3Ae2ZeqaCMYRsNCzbtdGuqiYWt5L3jXedLqtHUUCnWBf8cDFXJG4QPcj1yT8Axx8uE3Xo4SrmTSuEzLALWSVGBLr",
  "key15": "2QkkJQoJQjWnZLsJv9jdiEtjAqcafdbNS8ssf32LMfvgtkqnciKDQCgkqa2bACg2wGuZ7JeQKSYbREjmqyGH9DNY",
  "key16": "3E8mHtNbJzMBpXMD6i16yM9vXr3zHmh3dvGxoVCA7qd2Ck1ErPnkVNRcuhDuBBmiYcjVzUwyXGXk8T8ecD4mFrpi",
  "key17": "2KcLFUAvXWUtneEG8wZQsfHuV4FPXfMYrjZQNukoQTrdFr2GVJMtgzma2Sbt7c3qKN7GCy2EmbbAoB6pvwy1a8uW",
  "key18": "vMyzzyUFt6o5vxxGRjiszgF8xSEhnaxgcbu2LDL88XmrHNjCcwh1mHgCd27QP5RuC1mKVNcyXg22A2LrKGXdSdh",
  "key19": "2jKpZUaDjxhJvY4EqYt32RMR1n9nvrKHnkJE9p325JVXLm4hWsHyqmCGGKYgoBf16nzuKBsfT3LzLitecbyQgt57",
  "key20": "4UFdScg7WwMEMKTfAtfd6u8KZe1T4L3iBzs92cT932KrsKKm16JgQY99k824RR4KxkxJriV9oVZoqyZv44mjyk3K",
  "key21": "634Ba7vKtBTK47c1S58Pt1aT4nLouQ3EZpcabHMAHssgtnVqUB5MKmRr3voxb8TcLzKBPyKqYavBSzTmfhz6sVvg",
  "key22": "5DUvRU4yofrRXE6fp2MRhod11iKuHWvEQqykhCDBBAw7asoNLVB4KSvfsbSL6wULz6hGaYXNMxdrM8LGZKjwaQNo",
  "key23": "5BxH8gJq9EKw7dA7pwD17wRbdzCB7opNtf3ao99NhvVB5E77T3aRwvZ8T8HFcpsqzs9RF6FoiMvnavfMDgxY1L1y",
  "key24": "3cmdW4BKPJNhmQHCH3ECm5oVmJfqAWe5USUbNM9MmjeD3TSBBbTwm1teAhwqVKA4guZJD4vv65fbHhFncCv6TASn",
  "key25": "4g2C24kCE4MA37SyekGeLcfvL7VCjh56TQB7mT7BEX7xhNtY3p3KewPy22HPwD4vFi1At3M9rdgxHMyxDVKoGU1j",
  "key26": "2xH8Mj5mt7kKEUjiVz46Dj4FvjcHPP1Z878W8EizB2GEU2HVHBVhjWn8WhonrhtnCktjT6jbaBBuCzsXYbGnN7Ne",
  "key27": "5USod32YU9nd8giXo4MKfMoS2E6xCfKxneJDT319xhJSHiveH78jSDxDSzTurssJPkL95NcxLPfMckgbmbEmGC7i",
  "key28": "252QhVatT5g1SANsfpP1ABivZ69i8RDqEZCFf8DdAaEHQb5p9XCFHnojKAvGkD5U1GTqhKSNkKrQQCC6MYzoQG7W",
  "key29": "44fXNzdUgr6qnvTprp9UrUmU7YZAtX93nZcukSERYswUVqH61CkruPwvQb5UrFsco8E96PQ65n5ypJQdjqYJffVc",
  "key30": "jpp9pBGWkBJMKm5rTRVY9qBX2BnfUx7D3RNXeqmrcpQzyjMJsFSmEhF6qm6QrtC4gveGFHc1hQnqY3WcfxbyQyH",
  "key31": "2qyxggiLckN97C9MmderP32Ki7ADNkrgU5Pufp27gGtZhV36rQum5dJWoo6kGnm8CbbdTGiHg8syS8JRM39so8Lc",
  "key32": "33Y1BE69rhS6fNyjdJViKkN7eSSXE2YJXgeqQ8oNwgZFywpc1D8vHD3fQsVJt1T45dVHsrsATAt89uhgU82MWHQ4",
  "key33": "53SU9niQUqKg3z7V3DUDwMmn4pa63Yf4a43DvGTCxNVuwHKqXJH5F4M3hbGjHhWjquWmN5VKvWrsuuy1foQA53kb",
  "key34": "3X47yut1QZoGMFVnKKwXEYs5dCS7WZBjckd3DaQtAvmc7ysiRhj7JwV6H3wwAu65CYR5xsVvdjnSFzDK7B8x12NC",
  "key35": "7mCZhW8CuMBDmywscacedn7MqkaFNpxjYvij159txb8shg9KsLQVSo6ZZupFSuGET74D396aVfCadjVJDTKjhcG",
  "key36": "3dF5igf4nEP3PtJHHz6WMbWGAVcMAV953MEhLauMBjfyCiUTcrM36bNZavncMVzHfPuhJYAcWfjfMWqQGDakQc4Q",
  "key37": "5FxN7VjmGUzEsbzr7752vxmyMa3uSCSpvr83rn1Gxk1W4akyowiuVHJXcZznaDGsLtbNAp6WxxzVmhECnC7BHuPq",
  "key38": "4siMLbC54cxdL5ymxxtVFy3Wg3n1iyKZTxgrDUqHcwiC2G2HdgfcnUBiJYLUJTr3pFxBt35vHJxakB7DVGN6w7vp",
  "key39": "5cXT2vcvVHeKVhMbFdwH9nh37jUH45wQhn6ngMRnfJQqnqU8N4GRiMNLDh4QBq2N51H7twtWom39iVb83YX8boPA",
  "key40": "65tWuVAF2Ewq3zUN8wkYSABvUHBdSxN1CjNrdDSSNiaAh9SWN3xWZZxmVoJ65MUrWaEViv68UC5JnsFidhw95kkc",
  "key41": "248YUzfV4ULTHAyJ8waiNSHqEZUpEHJtphPAs52uwfkxfQxPGqpSnsW597RKtrDftKocyEyYTKcNW1GBeAQjHdup",
  "key42": "3rHwvRHsxSD6dLVwukbV3XRfJ6basgzNkL87dKGzQHiSoqEkjH8CcsiPQdQiowwFETYgqF29vaz7TLCGUhbirRSy",
  "key43": "4t9G5sZ8aDtTbVF11Q26ByEHSYk2gNXPbguDrpJMyco5b9Ks1pGUpFtbtmPp5jASCk4kvubUEkrRKbDsJmLrfVNt",
  "key44": "3ST8ToSdhEpoDBdLGs3QPNhUpKWf8o2xKKzY7pQYnF8fm6CDZiagGqsTco79zLGv3bAFwLPLz5a6EU3FPDDaGRH5",
  "key45": "31Erzgn2YocV2UmENhm1tLKbuzvtoEQsSzuLogXE7bvqz3UMfiq5rWkmHMXUNuB9tgtPUWHmFGMx8gV53gW9zHZq",
  "key46": "332D1mnJDYoNmxLkamCKYWAjFxXjyFbjK34uascit2pkJiS5pjGJLwihrD44xy2bEtGnDfGUgPhHktiZxmW9fVxu",
  "key47": "2tyFBvUgrXWRTxJJGm9bvAsDSzcwNuHmDWMBc3Qj33b9EqrR6JLcPgwsegddBYjPeQtqaBKv29nJAbbb6HQuUTfG",
  "key48": "4SW7uQ4CGGXfWdRs5mcYCtSsDP3tY8x7ZsAueLUytBxW5XPE8AQh6nWiUchsUEEzJjE4miDVzWmdubfV5t6RaPgR",
  "key49": "2sgqG2vocGFEsdX1SoQaUjCoFeH5EQTn3AbKhA45iBJaQpyCgKQP948CGQr5zKxHeAMz7sKdvussyuGUX9gS3TCH"
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
