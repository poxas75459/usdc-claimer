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
    "3AHcAajNoajp1g9TMRrhZtmWAgMRFVbiNSVctWsSuZ5uA296grtvYySVhB2nHUfCZm77jzyTKm1j3yQjMkQXuU2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4hLpwKQMHUkcWbyjJwq5xvBqKrNJcQronhGxkhX9zmjiCJLjb4CKVjyL8RQ1R9w3K178TwfNoVhiphiW1FmjjQ",
  "key1": "2KGDrygsyUcF1JW2p9aQ1kwoY9HaDfT91kWmZorfWdaGRCADcZheocrS8uZXGd58pyTZ33oGbihqLRe7xVpEkYk3",
  "key2": "2NKHwNQAJKdp4epKebRTzvaodFGvTePoMgtmvB5K7RFJAeAVZqF4Uwmka5SA8rJ1dSATDjz8exexFqHnuGA8CSmE",
  "key3": "7eurjFFVdoTT4eEYDjdEGVvEyrS3bbTukp1C9v7sogw3dcxudd3MMSZCeCXzGRzrZxyLUPc7Z1VGg8Ef5Svkj1q",
  "key4": "sSUFBk1oRHQ94CdBuVtRhXyg1N9ZarbTRmttx2PcRN5bPgotPM2fV5gCwcZstNG8qb28RnqU7nV6TsJJP2aYqyG",
  "key5": "zAC9fFuitcj49JTdQvg19pA5ZC9Sj1m7n5tmTe2Govmj4PyXK2AXQRFScyUFVhTkY8XcUmDFDTw5aPjxBcUPPJF",
  "key6": "58cE4bJHgkfd7YvdEMtQLFSobUaAUFu9xBETtEvsdHAPWY6ZhD49jCdAf9WSvLMt11QTVaZ2u9o9jJKjyNgHP2jt",
  "key7": "TAbnQVY83jZ8tmvNg3MCGCgusu5Q6BLdtJK9Hfec8AyvKdraELLa8uCGnvhu3Rqnd9u1AN6bZXYABiZ9RPrSoFw",
  "key8": "8zYBbc3LL7UM6DdbkWFJCWwf7xxwCUsNeiZ6YTwu9DcwqPPxWaUEGRNbyJNqGBhPfAFm2zBiJ6af8EEaKPbf2ha",
  "key9": "4jv4gQjyKMFBAYqxhAs1Sop2iTCP5bCe5zMGfpmTD6gShMi2rHdReLvTV2mgCW3od1LxfqDXyoiSxU7pc1WYpn41",
  "key10": "22RbVah7YchwWvfhrVc9qR9HHwE6D8MDpdrgYdpatz9QGeALLa5a2aedfVz6oq4fMihdkjQotFcPGMZfaFR3aVV1",
  "key11": "5YjD7vgkiseVGcGmz4Nd9Y86gNSPGbkA3es5azLvpSjziCZon3Fay7GhfZ6wDzqeH1tJsPNa7tGyJutpozdxCFJ9",
  "key12": "5gyadUGJ5XrMZUPqh4R6ZLdui7w1bBgVMiRAHa5W7bdhWKoqqCZJbrPxhHdgdfSqP3p6fFMqctnDcPBNx7inJWwb",
  "key13": "4RxayGwx9K5xLYScwcqsw9hGDoqcxvTCFknLuvxRpMhRnk6dZPA1AXKJhe8ghWFkjN9vjGegYsCNk7vYFoemXUDY",
  "key14": "4iaX32jhMec5MYUZZoixY171FH8joWAwQoBdFUvjvzQ1CY8eLWSZAD6saSyZ18oMrwekm7WxxWAbxTk79G4Zrdg4",
  "key15": "2tkzvyNayuY7YHf27GcyAkfKxCkHi1YxV5iRwNJKjGakP7zEq7cHk3o7Ftw1m2ayM2A6eEZjo4iYV9mqWTGHZN8R",
  "key16": "65CBYj7JnU5torixRW8QjbNWqTZrGHJYKvfT4wG6Vo46Z51V48QhtW6YvjdaTFz9CAq3jQHbnAoXn51DbNw1pCGo",
  "key17": "3Jd648EVkLhYyqZ4rnvapBfFJCBgH9TJmDicsff7aK3izmP4yRpfK3qQedqjmix8mnY3izjsexu6z1JM1t6WJU4V",
  "key18": "PaS5c6dC8rrwGm9UMZc3aKiehmttPiTZzz9UtKyptTQDhzrD4bRfPcrjbHCcQVvCooLHpntJmaPZnGNRfk2Y9sv",
  "key19": "4MGyikhiCF1zQhRGid7khbLdMEJmmb8e34h23v7mgPceUivTnC9pkHK9zr2mN9rzhiuKKxoqqt5X9PgQbr3enTG1",
  "key20": "2i7Nh9KVaYt4PtC11dtXEE8qAhv3q8mzpWnPZyuNJ7N37LvCJuryXvf87kA7CFrP4QHiej8NKSWYo4yTDUga3K9o",
  "key21": "2wApQV2bEf7qwjivghHBqhpMNW9D3zEiLJFBJyefmwzpe97TrkpYRHJZU32XaA8RZSzdnkDyniaKoXLMe8tWSciQ",
  "key22": "26Ru2jgwZwKZHNbYhxP9hUAjttHyx2Tv8LMTr917zWGGsE1hMbcbDUVBZLB83PTshdwojyEM5otr374pu71MWzS5",
  "key23": "36PXPYoasYMHmnQMjv5UovCPTY1Cd3hGC35u4cjASDY2py77ND9o3sUPmHLcTde5iX7NcFJUthpCYZefzHsC4u6U",
  "key24": "4dy53nG9YbnxWsu253ashfG1VCu87nd9LP5RzgfLru9ohTVU9vZjZPQwFWr1wLjx2uq2nhmogxPS4sw3MPr6wAtU",
  "key25": "qiBJyMSU8pqCfR7yytq5t8Zkjeip3XVvGsZebU4Rz6c3CdViqMjSJmSKwMYE9YDGYKitfAyF3xBeBJ6L6ub9NkP",
  "key26": "2rz8Cu8cTsh8baCj316GyDUu4QCiSNM4RFc66QYTBVUgk6Zbvs8hS1picuNd6GfXb4mnANYP55TaUAo4QHTD5CV2",
  "key27": "5RvQYjugRGZcoMq3eAz9e4MUXV56mvYXporxb9UrGvZonm4j6FhXiLF4SjCi92dVzHwkR8Dzk9zJgixXJ7dm7WAM",
  "key28": "2shgNibZsed8khXh5r4HMCajGAA1EqbdF3S8WfqvpWdhfHMUJK7Wmafp1f8Gf3y6eUagxhF6R6KiKb3QtfNg6sBn",
  "key29": "5ECG5TLymim3LgEsxu1GnFNYKJLegbf8FuLar2cWywe6HXsPvHgvJfRRguvUNBJhrB696pH2PKmzQ7BFMNq8Dx3Z",
  "key30": "52tNxpZsEyEY6UUq62x3aDgoTT6kYyyqH7Yu2M39xLRvk9hqQBDp1t8qnd8h6dbFZY8Ri5qPz1r6mmA9ZS3STuc2",
  "key31": "63Z2UCzYxmmMRwYegB1FvnQdejxQpLkRdtAfX9taxMWeXTyoRxZgz3uYB2rzjWMM4aqWy6HAL9pzYiLB9XiiNdpc",
  "key32": "2mmsBHDtBGqPXvTFV8YpH9wa7a8ZqMyU4ioe3u1Qey7TurwXhgkwwh3DDfZAe9EoedUxFk2uupuumd9Ho6QNnPjZ",
  "key33": "4Srhif48f9hwoFM3uvAb9PUr5q1YiHZ3VNmRpyRia4mDGGQPy7cPKsjs8qzgrFNM5fTtk6hkLxHoxz6oWrwTW295",
  "key34": "rjSbrgErY4f1ZRTHXUR8HKbeSadJeSuXnyYWNSY6BazNei4gzfvEPZj39oji3n66G5SKTXktWFDoUvTQSrzbRfi",
  "key35": "xBQCBUA3s5bRi4K4HwDpg7KmgB2sYyqG44iViWsvriM4m57kSJhWcP46LsqWNEbW7eXP8mdAtwCyqTwdqQahEBJ",
  "key36": "5o7rgzvpTkZZC5u5UKtdHjg3trfuh1tMx5VwUbN6g1G4P2vYNgAmfCG3aqviqbwapoJxydbvhoX66u4wTuXmMx48",
  "key37": "48xCtZnS36GcBzbWepfRTbmKLq5VvPBG4KtznkLxGusKp8SBmfB8zV4oDAMah9Q6ft5if4CUeW23Tp7btiLMnNvC",
  "key38": "5v2Ktmt5H22cV7MyU4TUqJh4aQSRzDSyPe6yhJibaUq3575M3aiF67izS9bup5rcrMspksqCvSCtY8kX47H6upNH",
  "key39": "2nXxagZNvEpCxurKrmukQr9epdwYMqpEZuxQ3PLP7T8VrgGdT1CtUxBQnLp3GMDJHFihcTneWwmxnSoLKby8Cy6L",
  "key40": "4tbrJg4SVJgMRLFcv3q3j61WRTny2Kxb8XYq2YVXz1RPUYRkfaQdoBPmeLo6tUmdUqf6DMVco3LZf2ForyVnkWq4",
  "key41": "4su3iByFDJDBBTzvWAdivJHdFMnwKJNuJu16Ue6YDqfLsDaxuwbrv4j4r2EzhjUxy6LT7nras4aUHrU24YTzfKXQ",
  "key42": "37ucErJ6FEHRM57g34JB7LkRZwt8fvaBhnZk9i4u84hevA3gYdUwM7DdDaoheGS83veRDjnXNVFLQcfmR6ryN9pU",
  "key43": "5sPhcqbEsS4A4s4xQvXF4v8hDFenw6J5BX8PwykZ31z7RVsYggjT17HxRwggL4kNUM4PoW9ypFoWagq4uTqWJsVp",
  "key44": "5Rpok8yz4taup6xxz11ZaQNRkNPy9dEH8PfkLGJExG3Djgy4XA7v5xUMwZpEuNnJpruy3rSMeHB5ZVgNuRuGTbcj"
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
