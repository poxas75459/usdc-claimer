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
    "2bYzFzByy3LYZuyF9tNSLfY2syUhsYJekBgc3tBKjSHcTnkZG1kHfwR96WDpU4MAGP33XKzT1VkPFdaZaLL1qhzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKNq9bbgJzydu8aQUpv6RvMcABYw9d3SFKQzsehVV9Q7dgEVjJmTnKSDimh8LvTyVv91wWehRXf3BoSK7vDkE5G",
  "key1": "5MC9oP7qpu2vfyaTUFKzszkgKceENQYPEVWAwoM8Z3tYrbvEzrcL3dXPriyLyrWopn2Mz4sn9RPyfjyCNk3cq63v",
  "key2": "sqsaYbJW7m4U2cYHxxLC47CpSpbXx2rKQTwFwP7Jeni1ya6QrfWDLt8vK3oJNGwNX5tVHVmtA4SuE9b2jNHF4GT",
  "key3": "5fpxhsELEifeFom5p53ef1SRsfaxew8MyoZPgKhimiGDKXYpoe9u92UJPJ7zd8gjmwdogg6VWrRwR1WnRFNPaduL",
  "key4": "5nUDQLToi3Ggrqf31KPVZ5QR6GEJJ5zZL86bJ2reaLWpwaHt16JD7n7k3ViD1oefdLKVDckufhDqD5VAUFcHsaLz",
  "key5": "3kznMSBt1ESY1SEXPmweDLhWazivbnR3tYcCUfaLU6PHHEnubhRpiyNS4fLLS9R7KGx3PBEJnBhC1gGYFF7fRix8",
  "key6": "2Mug2x6DVwFy5U68hgTxj7enSTPpfAUMEa4gy4GoCejLo5vCPcUBX2CoHQgQVbM7RgKFttG3Dpx4fJMymLGT4Q9s",
  "key7": "3wdMqAj6cJqJ2w8SeUkC1jwTQaqThG4wePcet4r2NLzp198ZYz2fhUk6CcsXnnmhFjPDuZGEJzMo92pKnWDvjZQv",
  "key8": "z37XJavgv23nUafkDaRwM9RqDALj3GRHHxPPGfVkoYgKGzBAhEfZDCPw9ymH6kGtpJt9zq2U3cXJLBMh6K3bHX1",
  "key9": "58DswoJ7SqUZPjGP9sfQn93LxAWBNz5q7Za3LiknbHKEnDpszPQVq2gK6f8JQfRCu1azVy9hY8Q8w3764pcdTi4c",
  "key10": "2U6qH1qUbvrnoVAjTKcUq9PmEHs1Lr14Wy1y1nMPD4b7zCeDqGFVtNc31VJ3budt5uZZeu63DkqtdbPKPWcTqkyv",
  "key11": "2hQsmGqQ2LgmyR2oKRNp8YxFSfuHRXyNxX9ETi8mRa8kWYjGwPDBJFkWsdTxQDbrFaNvsb1qwrfyhiX4CShSQdK5",
  "key12": "osMaUCJXrKHELFpyvRYdfzKLY8raAfiC9y232zWS2h8ZwbGL7tpjukVE2WaHqFRY2CgjkUFXQ4PAwAKnqVeuaNx",
  "key13": "B1shWeSQwG1LB7nX6MzKr3wmvSegAQ8w1gdmDJJwmPMkn2Amr6rFrFnpqfSMcjUeWD7sn5EddqiSBFTeKxNUyHR",
  "key14": "3tC88SCswEp1XiiuCHzFqThD9f2cfSwTFBQNYph1toP6BZX9hcge6DLWv5z3UqvzwEgtaF7uXUz4sXcT7jTgNtVG",
  "key15": "5hzozGQL4Dz6rTe5QwvF1deVp6G2ceV97y1izgxxnvSbFp1oNiaC3fLFa4c7pEjP22V8BB3BUFFurCcN8Dvev2vx",
  "key16": "4HWNeHZTg8jy5zfxpbb5JKma5gunFrsAFNqebrHh7Fvoe5Bx1yL9PD1SLfXFFNJGDHFw3RGe4Z2RTVVginyiMha9",
  "key17": "3DAYi9TaDZ8tdV9j8EjubnAAmTCx1tsfdway3NGkJiDTA8QST3c6LaheTtnznRB3sNwe9dTzZqHhQUFBB5uFAVRD",
  "key18": "5hnAw2vnhWpg4a1DmX4BYZYPrwvvn9guXbL2Y6j8DEEqr5U5frX6hFvTZHnoYrZAapWPrq4xxsLsbF8CjLjkUv2A",
  "key19": "3Jn3GK1CxbEvWXztQ8xHuGYaVn1qyy6zUByFvWUQgyejvcAPN7RT3QBxV1h2uks4xDduR3C9X1wokVXd9k1ZjWPJ",
  "key20": "PhhgCbk9uWP1G2Lx8Fcfu6ia9oMxL5MF32V4qT7sBN8mbdgH2YFAz1zvhycrZdCb9LxJwU9uYoNAGixa2TcXHXe",
  "key21": "3PRkFJHuoLcy4J74WcE2CEsMFRaxJ4Y3p1SAqPJayMckeD6GGMByQ3aTyfEW5o7c1EiudCqeohw6Ps7BcqVqER9H",
  "key22": "3BSzKDFpapjBynUGV38rZLpN5ke7DagpaUejqCwd2m4q8qnb7sj1nSfbHnaM3Hcgt2wZoFSpWhKSj782N9ZWmzx8",
  "key23": "5mJmi69TdxxfGW4pLZS3QFBtAcVbFvZExBiiMcVNc9fLuFGrCfp151bDS3p4ocZjaVmT7QhRq5TNVymQsgXMdK6x",
  "key24": "3zaasbZfdXAH3q37e7zz7xoqZWBMbaY9r1bMTTRsMFvtAzcTafowJS4WPqB5PCAdiZyzexEmkDyoSkvsweDU6tes",
  "key25": "3NFSj4mHvBah95vie2Mrv88UNsiQySC8SygLsMNb7sRQ5RjUQgwMdDMZB1LNsHqjQ4BdfftxLLUXSWyXJcWu81Gx",
  "key26": "4Q3x2t8MVrTcR5krtouQctL2AkzUmkFxXWWEwx21Tes92TUX9VSgCbreV1vnbaYNVA2TgbJi61tcd9K1uuQy1myo",
  "key27": "2djf1QDu9Yb5yGxTMpx2nPwwqzfHQ3V2YNXdSm15bGkdZDz7czYRcrnuApJNisyhGSmTMcFeJJN1LZoQPHN7SPSp",
  "key28": "5bCymSzeEaQKMbywHESAJQonYxEddwujSJdCb5TY2SGzFyQHicrWhxPSXLL89NbdnCT2hyoPPnSFWDFmF73UXyiA",
  "key29": "4Ti2icunpRT21dKGYGQKmULZUwbARnyF389tYPiiCw2KUaC1wCwBT9nCtHc2CKBweFrHbYrET7dYKhgoERSpxnF1",
  "key30": "4v9pdZWw63w5VxqQE7LLRd7VT2WGiJxmWNtpNyVZzDJzSTGjkFuKiiwEi6m17dafYJUMS9xfiYS5PJ3fK1LrdSZo",
  "key31": "3Y7ggB5zWP3YwFvxTDdA5gLnaZQxg27w7wzPMGBnUMDYdmTxK5DZi4Zv6uFvTYtWJeVUaTrzopCnjtZYf386Ggzc",
  "key32": "8kndnSvym1dgAN8mpYYXugkS6zk9MQEKBmFgnebxptEPPNbQrLPGGtPfdxzeMbynDWuJYyng5RgdMwTSUjk76BF",
  "key33": "4JYf9ekr2s7EvC59CKbeQah7UPbt35hKrTJEeVJyAmUVW8UQ73e899i8RWEL9jutT14tVP9qgGRuSN164vLKshqa",
  "key34": "3E5zUVWPPg122zVzyuSS1NkTXZkKta7iwWT2gv61tuFjGGUm1XDyoBPeeexkBjGuY8xctLJEp7Aq6zDHvfRZruAL",
  "key35": "T4W7gywRj3dPhmUB97n55GbMnoUzXQDLWNbhAcqwiaNWEsUAjD93fgBYGZn9S3Jc3BqWyFMD53Mss9p3A4WSoMF",
  "key36": "jC88run3TjadHNQkGKbFXgsdNpQH8HU8D1qoAUPc7wHMuDebpm5bhL7P7RwAMa6kjJhX4FuB7xnvQ5CXRzX3dF4",
  "key37": "2CYqCMrsgfrPAZVaG3ryjGtxdcLss63wsy5vDfMY1dVMVbU1zfVrb3VQCCcHe3yM3iebjYU7t6pc4n6DRWpkRpSj",
  "key38": "4rCt1DhUR3rLXein4ft8CXGXBLuRFtsA9hGXijHiWbiEfN364fCkbhss3PSZj3D34RquGiLCTrTEfdiivdYRdnj9",
  "key39": "3DkubuUJyq7115g6f9PQj5fXirey2KbCZ6PFm1XqEF7tDe6jHZfqSK7QuW3pm3VrkrvQiTBwtXWwGSQQuxDJabU5",
  "key40": "2aDSyEpQYpVyyzCEXMxmHLNWcFggUY2rvhCQE9cRJdrJA2ZfRZ7om9VtFEK72VamYVueNomY6gGHCYdXPQasqFCs",
  "key41": "4A4MFctt6RA5pSboHMJvPZyZTeZf1XHbvSwmNpgYUjMwWNx2f13ocUy55VWSrK9eXw1hjZV2HC86N4ghn4R62ecd",
  "key42": "2yxhkEPGVx3HdLGM7VhnD9zHq21aTPMDF3uqrgkvKK4wD4er7vz7XxbmfjCG2aVuMJxCuC1JEzfE5DVeLMYgrK2x",
  "key43": "4tNWsJeFxZ9GabNtMbxGwFufKPsbZJysreGGzsFYwDDNp4jsLqHVHimxUbG2e3Ym984KPAcUkGYA2vWBZMTfEQtW"
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
