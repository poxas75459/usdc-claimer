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
    "4LuZcS1CMe2eSupppo59fHR5kxaYuVyhZpg49dSSn6fsdavQ6po77U8J8W7BzFYv3X1ggTy2xvZgR8oFnhByuViA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSRWzdGVqfoxrP1ZZ2TobwxKs1nw4Wu9MbGZi6VbSs4yAEEEhPX9714CCkwQMJKp9Q5dsUcHp3ihTp4nQUoB43M",
  "key1": "3VaopGarpJqBA2j2H48PrG9wpK2GRsdn4bNy5kmdEkDYa2CuvbRjkDyu4BQV78KnAR88NwvCnaK8C1H4iYTgKnXy",
  "key2": "3q9tkZuLGwkB4APpv5gpjGPVUKCW8mtDAkQURuRLABQvWxG2Ch3Bnp1QNirSmqyu7ZrkLmMB5qB7JDN3RdiQQDMt",
  "key3": "39eu3EwAhJu8h1J2WyTX64Zs9NUEtmFRye26mkcV6bkKtV9fRezH68YExrdowjTjj4NRhESGBPq1fdpTqhfwTtvP",
  "key4": "7vW8Mvn1XsPrnSRcmqy7FUK2d2KhDNDT6DfQHaLtC3KWv6Y7QNTTLXRURdY5kCyqsJZJ9qvuvGeGJaS9KL1oa6U",
  "key5": "5H3VtMzmrftaWpAA9QsYx2jUqWxNzdDUVSuHQmQq6Xpd8p4qU5FzAV8Za4C69Wpt2RiyjxRvQXq1RgmdE1vPspWc",
  "key6": "5QtyxyzGq2woj24br3KBxLhK93fT3h1JxRPW8hdAbShyEynr5dAzurBvDByDBjQDfhUZmJ3hWdZciEFinCZ2sCDN",
  "key7": "3fbYGEkFJ4R6vFNBewHqp1nD3VSUDM2ET8B8pVsjcuueR6oXVsMByfkudeA9jKJh8M1eBQ1XivdJfKb2SkPP5aR1",
  "key8": "gw3pUkf6vFhN3f4fMuN37MnxLGwkWNoSBMAaX98oJEAKtNqgrRjxa8v9WjsFZ7DgFUM72L4qBv9teqhxZzxoekp",
  "key9": "337qQveRU4YsURnyWQ1mcEoXuVU6wjNT8gdHGxGgN1qnnevrU9HWY6cufiFBsyza1L8S6wgPEiMXVefXYMbC4W2a",
  "key10": "4ESVTKKkq4GNxVcxb1amtGHmGfPhLi6oJxU61EmnGhePPooRw2EC5EmoczK3WH7YNo4QZQYZgkg57X81Lfh2wM8L",
  "key11": "2K5kPDnYqFcx7AnjZckQTkPZcbJ3AhyqnKoXMwMNjjnWGakf2hoUt8AgHinjsngMcfP8Y4XC4E6FUg5rksPigJ7N",
  "key12": "jSrV4okG4wYdkrAz7y1yBRTzBaTgtLXuwWxVZ53uxKQeNHfSqyUWGeNhSi7dnTk1ztB4iRVxw5eTkG1tRJ3paev",
  "key13": "3Y1CtX7TZXjMfnUVSZwGBVVns2RVdgUoxE55kMznrKMs8c9vYvwDYU85rP7xRrBB2JzgNrwoH65FmFevc3WkkDz4",
  "key14": "SuGBhPLJTyqrRDDfDnDYbDXUNUaUnffgNxaLsXDhiZ3b6RRK3MbJcKTCxm5LVvjbQ9RGDCVtBJ71xMVsXsmEXYa",
  "key15": "3XdDHirfDVw1W3iU5cFU2xJgs2UDYMy6ncEKbHtFsWJs75hBNvmwrCpHYqvspsotN1DtYYtdKSnfQtbc9CQqfNzK",
  "key16": "39YACSQf9Q5VcGkvMh4aKDULek3JP6qVMvQLe2Ghdf3Ppf1P2ZbuQAdK2AXR7iwuz8ykjBT77ykXrhFyebprwScC",
  "key17": "5WeBXMK4eLjoG84Ni4M5ZyVeHkpmkfT8Q37zPnq1kQj582LAKJMNuQTkAfMjZ5QpHa2hZ8frpLkn6bK8ZFSjSmNP",
  "key18": "2TGVhs8LX49A7VsTQnZ8wYQbdD7LJzF8S7PuSpQe5aenazzxzGAF3MzycJamVLan4m8Ub1HupEXmgS8EgJnquaW7",
  "key19": "5RfNFtjdQm8wLEsE7WWgRM2f3zqyRcFxJHA1KFceocaiZHtHzbPgZ3chyV4X3uqk2K83JEzDYw9j1a4KPFnHauuE",
  "key20": "wKD8qbf3wBDtyUea8UNKKvLn8eDCc7G79ThSAohvi8W5rUZqyWna3BLtjctHeQ9nbrhHXuRkvwQeyZC3g4w9sYj",
  "key21": "bPNQxCaJi4xm6ZG2rxye9BGNR6gxai2CjbXMsPErHTPwVSAGipGn49eam4onNGBpjrMoWmPBYCwukpqDSJrZHiq",
  "key22": "4tnwBjraB5Cb5oxeGQuhAcCtpzMDiZ31ycEQQEpoQ4pDxF3YCEERSWXtVR4Qu1PEz2sGuVRmwZPkWRtdkQXGBNRf",
  "key23": "4uj5NgTM4TA5qzM8Qz5Jffu6LmYj2YHgtoBPZjaSNyWgYqXjhqLysNNXgny1aaqRENNaFEZVKWYWY9GL7BtRhRsz",
  "key24": "3mn1tun3otXGWRqbBibVeK9vzUj9232fc2Zrw3ZyxvhcXWSMKEoygPVRMZQVHEfzEy4etq2v57YHtsAhYBVfAKyy",
  "key25": "E9CvfYzsdMmKt981NrYv58QTQyadu18uP6QCuj6g4RetNe7iMRJJJHPs37S4JnFu8kHiTbp7Uh2tfQMQ6kQQJW7",
  "key26": "5JyPmAdBGx6wNtjxBFxemDyv3P6YCoHGCwCZgJ5C964qDAn9aCcV9iDhC7Czm4N9vk1omp4SVDSrAsgnCMuUd3gi",
  "key27": "FQfBfb6L44n1GjMMNtMo7u3wpGHJhBT2xMDZ1hDzXaHemS7eKWjwqAhp8hAzQ3jfSg63VFDekP5ggD63oga3EvW",
  "key28": "3PJcbGnp9ZGcCdWSCLSEp4D67bkwKxNap5zL37TA82CLxv7afaTAeLkFwe3DR34rHYtopAtb8WvGVrMK4rNYRnHk",
  "key29": "3956AHEbmxTpR7VxMny931woggkd42pLRQgvvq5xmLXBzjt4Ujcevn59PFJeEgMv1Hus1sFomWAoJ9ZHSDfChLgy",
  "key30": "8rohF4dGfuSqW53Pg5jP5k9t1Pk11UyXmViA2KfU5aWyVL2Ps4vmvB16bye6zj4ZRGHJGK9Rb94U6xmRnwv3fUs",
  "key31": "1iP35Xb6uLeEB49T5tVJ4g55EKL9eRNNDYgANFGSAgD3qyens7EFeHdY9D95sAfWnaUhATBprpGDH7dTDgtP2ke",
  "key32": "2gpRmFfZg6XfNnLNuM73R7yrcMGo3PSiJgWVcbq4GhdL5xFhUjim4m1JhQgE7SmX3Bj7eHZYe6dhuxK8LkUwXmip",
  "key33": "51py8gawey8Ge8kKZ5fL3ck74CLSPxkfHdgHiUSTeWYtbMBLfxS7i98hkZw1MaALJs3PXNcSV4x7Qos2YAmZjGGG",
  "key34": "3UFsV9uC2WcZdiaD8ngSxXcUgV4azqzZT14LwZz7zKgPn7udHhwsjPRFDpjzDc5idtE1XXHERVwi4RMwLCMMnEe",
  "key35": "3Jkf22cfC18fYpHn3fhhpSxRBTghJ4UCJGL8L4fJjcicAp1zh7viZDygCra5Bt1QGuhbZJSKReZrhonaPuPwkALS",
  "key36": "4NpWykX1cJwK9JvKFNRNo1nrGgcHU8wy7Tuz8vhuQtewVMhgCoVKS4chjWytGMC1TF9Mme4hp8ciFjscdMinF2xc",
  "key37": "3oRVQbhUC3fp8g3HkuC3hM6wc5ZeS66CDs3RYp7eA6eRWxiBRJzXymnw71WiUgGBh6zFFkwq4NwELWE6MWQQEqyV",
  "key38": "WVH6zJVfVMtATdqgF7r5jKRdMA4GP1YZKbSVWwBa84VkdqFWwt17VCiZPZAkEvCjVSVYRX3bd9bwNVh89UQXtRV",
  "key39": "4xovXubggYWFg3PnTCg9HficqG7bxFAyMwFajxS3pb9htqhYkNSVjn2XV9ftFV6eFEntHHJdsZ67acAXJHbg1LWD",
  "key40": "44EZka9LKXhsrLThNnmTQR9cKmRcswt4dScgXHsSpHavjHH4F6ibQzRWJ88hNAP12SzX7TYnUQt2K4bRD3WRHA5P",
  "key41": "66ffkxCJL9jCbzMgLSMHHWZWhctYk4B1DLr7E1sCa61C1i5pN4SJZjq1H8CuFmdS9Bz3jnVcrGj8YqfgT3gYSmYU",
  "key42": "5gwXy97oLzMmRX5gUp4GjD3rYHDCMNiqQ4LGEzatvhxoPVKRuCvVaFA1KVpKkqprVRhqbW56kCeRc3PV3DtftCZR",
  "key43": "2vC7Y3S6VdnrViVZTTGzdXvPvM6vayDGx31kTZ2SvSXMN8LaQXyWJ2qrszdD9WUvPcogooPFkKK9Zthug6ccu4FN",
  "key44": "2uzdXN8Jdus2piKbDQQT6k2V3NWgLY8vMGbXi9XqtKYwtAHQVtLd3FETRi4seagCHokfFkQkz2XNTBgbfWWjwR7N",
  "key45": "4T45XrgRiwksnQFp9GBPjXUptfsKm3wGddL9mcmP51XTomjVjqhGotWKjD7Ra3BAg2dD2GudibaYed2rjP2SdG3i",
  "key46": "4NSFYUPS6qGgzcThooBpCA9aYdYsetrShq2GNgTz4xPt1hikesQJP39YR3ZP3EurbU7ZgBMgTGXgqJwAYvDATaAE",
  "key47": "5CiDW2CGCo4dmsHN5QdqZpDwRFaE9innsEa3V1XUg8eY7Uw46fmyd8me5pFzgJzmA4vaiXXQ6i1Jgi71NEFiZ2Ti",
  "key48": "4Ynxx6McJZkSAECeaMdJFATvxgi4mXjTaRmqCx9mferr8837z8ZATdjWCBBhVnNLKfa6M8UFuzcPUSZjoHNpDQKw",
  "key49": "2TgPre7zwwe3CqjRBhbAjLeHtFUsH7BjC1vkeewifQ3FSUqgFH3tVbhBgqzTJQn66zQ6tAUTG1F6fMznRZ6txDtc"
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
