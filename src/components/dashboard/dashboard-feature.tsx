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
    "2bExqBj6VVjSecGdCb18aiBoazWoYexczCS4KyesM1ozj8KisZQvKeM9JAS37DfbTFNVftnFZwrwJzaRnnhnUMPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4PpQz6PcyiuRNyHVR3kTMrMm3NT2m6sjrecCYpPWTuS7gP4QXXWJ4Jx4uiUTB2kWVW2ogzPPxfwvxFkZnDb5Xi",
  "key1": "5BsmYzXoLHMcr8iH4CM5Wa8GU6iiVPMWq5zwJNzYJxX2a5wjaDav1nJbP9ZKthVCqH1ugHfRXsXBaKmndUPH9iRJ",
  "key2": "67qTSJaQKPPTXW1hUUCBCqekdmWMAo7TQ2dKHr1ozGWpLgEV3tcG49RLgv6NwiBFutGX83bKsBU1ZyNkYdsUThL2",
  "key3": "5YxNMEMJFLa11aahbg1jRCE6vjQu1UrKwcZxPeTaZ4LrNxXDp9ZTgAht64zMuyT164NRpuFL22tjf1X1BAt8dLeT",
  "key4": "3eJoJNEHUbRAMtKWBmMFGZ5rNq8371wFJQa7EAGm7tAnTeXhfhUV5MPr7j1Q3N5rsVVUFpsDEhfSyXJh8c9Gcixb",
  "key5": "4A9ooDJuEshEYrifrxg2ruxR4N9cMJNgdvPdXmSJ57regBiFKTy95vbUZtkdGGVgBXcqAP4KWenhKvZyPrqooVEs",
  "key6": "RMs5tsNLQRUQJqRgHs5eQBWgXc8ai59TXQ7QjH8S7yGRejbwr8SYtQqSuRR6VW3bmkzjHMLyumLYmXFUq7iboos",
  "key7": "Hm8eEmmZMTVrZ8bS17BEjHg5pG9v3CsamHnEY5EnDec7WUKLy67fPRegEAWrmfwVGJtDbMrmQsB2a3oqVP6qFgD",
  "key8": "3wKF87DR1GthSLCStqvDtfwRZWmdro6FpWSwXTwy3STmi7zhnnk9Yav7VM7Qw1jxEvsMTcssDUfAVFSczdqjYJnq",
  "key9": "Yi2UHBVbs91BrVGNK9auwmgc9J3cS47E5i9ez4vd9uFQ6NH6R6bg43KWRMbF8TZXrU4NEbaRHpwSX35fbKMcbjr",
  "key10": "49wmVi9SngbYPrevuxXEfnW4C4rkFbjWpVvRw7Zz7gKBBwYZVwB2WYpPZFbpgQQYNHnFmywb6pEn7o7U3U7iydRm",
  "key11": "2Au8hGsCqPjSS9cfni5ae8YARDVK9ZkCzHRPWbamtMMkbsQnxgi6qACNyHkb22vRY1xseg7U7mHzUfzYy9CCBnAH",
  "key12": "4AFkjfJaDpQ4MsHXe8KsMdRuv243iRZcshHdBuW9Jp83fUWWGgooqa7xAyLsvfTHxZSEZALSD6AKz2rKNtnDvf1R",
  "key13": "5MVnk5BpAhemqFdiiypGTmQja9CZ58ZUBZnVx397Rkgwyfx27GT1vgvxeMtUwQVdGDPmDwRbjVzs3wHPNP5P6Yr5",
  "key14": "28tZV6R1MBMKA3zVDMSqyu3UZ4QQ3dz2s6nc5d6goQBD51L2qxNLpDmC8wHWvU4KmLwUU58ZmnJfeVCgy95DFJME",
  "key15": "2HZeyiCbwW3aCaE3UP2tWXtxTZNGikkgQ4REepL3h9HqDPgcs9GzW1Ad82zWGKkDNfyPgDecK2apNf39evVpn5Q3",
  "key16": "56NURHeA8Di9pEtEdYdY9Tnxcb8ngY94NUYaz3xeBRd9kdVStjHXZ7CAbsMcwof8Srhs6ku8EyZjvQDD1QzjHVwF",
  "key17": "2VyR82srh8vZeKUoFZ73Zcoa8jsLaFVn4RHcxVSzYdDVY3v4faPsp4tx93vBFemRjZTobtPHAW2WUR6b2ErLvK3K",
  "key18": "3gwDhNEt8cnnw4LYrhda1jcU3H4AC96rf4G5QwMXBsgi4JkWAr8iRoy5eEJ8cXsKqASZKXHapMXjkiB2DM9mzHVo",
  "key19": "4XGo9kWMxYTywySKd4TQwqxHKfEtZSXZgd9ryttvVKmuM3RD38EL9VQwohJpsVaMWdnDcmFdQ8P9s4juZ8SM1j5E",
  "key20": "44uty4DMPvqnKbGjAsrEDRhgsudBC8WizL2MtT5hy41qfuvebFe8TJjHZhRMoQVfvEvmSApjZZp9S8eSnYBZziwh",
  "key21": "gWKfNzVnvq6yGSz5BcT4z3Qko3befiP98qKxtXLXw9NUMokxpiQPdgMR5xGxxazfackCGbLU91h9iynTLe4EqmE",
  "key22": "4LRHEE1dvQGTYaJhVXhunZFdfCAW5mEzygVXGCcLRi28V2fupyK8Y7esZ7rgk6rsy62S3BcUvekoJPCiyWXNQD9c",
  "key23": "2mijY9KKBWXU8wUB1icLRUesKhJ73ZrkdaJZF82cVduXpKxo7xRQZ8dta1m9kHoNSZpvDBEisaC77BKeq74MHMmW",
  "key24": "53RVdCBC3N6bYbcHtpbK2gj1gkpxPScG83kBEgDqocM4zZNfMaQ4oXLRVGWRN293J65y62nRrdhW6R4LqEceyHKL",
  "key25": "5fJHZK13ECrdzss7VxWghGQaMQ8RhCKYrSRQ3NkqP2K8Mve9dwu7aeafwu94Sp5bJ2k3XYiu6EzDiNNvUPDcWkna",
  "key26": "QgxdC4pFYJdMs72KHv8vX4fq9GvayhzZvTNwat24gQDv2rkYGPN7uSt616QYeFEEMbFM34vGZ8LcMgDjMrQcQpQ",
  "key27": "62NDKEhRCWp7v1sJErWrRPf4A3gbgoWNu8r8nVNzwh2QS4aTcdST23ZkwS5ydkdLDvwKgn3oD7vp5e2SGzAohzeN",
  "key28": "2FhNZHMeZcpxZo3pLybT4rrcNKPZnRFJ3Yzmo8nEDeGRK8zsh6GPStBasnVhzHH2iFVfFhv27rC7zFJ2qhKqfqrY",
  "key29": "2isAYytFPzdijNZHogL3C24ugYKVEEjsK3EmhT3dunb18QMt7omRCCsVi6PyzrRddekxE1MQpxk6zfheYkrSftDz",
  "key30": "7ceP6tRm9oo1KEDjx4cP9fQSMjbK2QeqWpAa9AsfxLRacgqi8BwJHmCqXr9jsqCPC7XH4KKaPiMUZjjpScXdggE",
  "key31": "4wHaVFbgC24bRkPR7PdRzDM5c5tJiP2CMhZuzsVhyDCoFWn4L1GLBAGASr7NoUJg91wSqcpW8pDZrM137WF5xNet",
  "key32": "2ksoHiRUrXrz4WAWWFZp8rcMJq1oKCZjsbgWTghDcWQwWkopMNCx1JaWoGy9x7KRc8Pke8RQpF8C1CqabvR8T8AL",
  "key33": "3kYtvHjfgqd5GxzYkaVx3iKXNVkdcAo4cccguDA659WpLRo2C42knjV14NPybtKSTiFbFtt7S5dAf5GMHfL7byht",
  "key34": "66ehXF9fLLn8pez6qxfBhBSuNLFFdNqd1K4NxApCbig14LMUbKm995TPUoD3hxv51bXeXN5tCMDw6n8YzSiWqrHZ",
  "key35": "3LQBk4qWNVAZNmgibqqEzobti3B3ARXTdoPcZoUD9xiGu9impdMP59Uu1qcsMobCBMhtnUDaf6C3FVJ32UrYgaqR",
  "key36": "2FvLmscg4CjzVeSbK7DRTP3PgvhVv2zjMrKpTUxfmyg55PW7ajGyB5N3R5qctSa6yHNZxP7Eg4n26Z2YEfAq7JWj",
  "key37": "7vsmwwPLwn7KAwi8H8q2FZVw8HY2mJPHoJdnU965QvcN2DLJN65pcfVVkDjdB5brLrYFuztmWw5eMjdbNdp49vX",
  "key38": "5tmpJSFMesJXT6nGgSG3f86kCx7CHsDhedfuDZ553pQWW4yJivZNf2QE2HkZahrJgnqr38PeAyB7dJtmK3jozt9u",
  "key39": "2F4xgPxP2HAWmZULsDFEzrJTy456jzPJryXRzVu7Q3GNNbtmj7R9KkGBkDusJdVnZNtyyWAi4hXFE2KKNB5Ut5UL",
  "key40": "4Sgd7wp6mrGT2qSKsrcuA6c3Kv7nbpJvxYtMkpdGPPhPncswpwqYak11iPYEP35minYTMWNZCrvZ78Kr5rHLMM2V",
  "key41": "xZ8ZEdNk2P4Mfpv25CxdnatKsC2b4d63jrue8vGnsifWMPZQdQZpZRU8T95yzvebyRYx6gPvHfqBNahKx8k85jv",
  "key42": "31MNwTFbvCyaEJiJQsBnURppgdqfPnGV7WPjJZsqusWLAUbEoATHiR7AmKVYid8e1BsPe16Aq8NNePGJ4uh5bmDF",
  "key43": "48oswE4ShA3sLTybPkgWsxz9TEHCCgKFokvMJ2aRo2aemWn1T4jPQQHQfyZzRBtX92hDP8USTqDtWw5rCYhfWgMK",
  "key44": "2zh4gFJigGyNdHjxZfN1zZX16Tx99KPDbhKiMgYcQk9PFjHt7rthAiCsShi42QUBhWW5yShQXpLRuiQoZprWAQ1h",
  "key45": "2XAUdvFcUba3k3V7YGgGgsH5grYcoQHeRYn72wTPS1XZ48VwiQUdnHaCe1b7vpF1pR2GqDCk8oCCJMKQVmfYXm3j",
  "key46": "2qjBf92nYsTkHN8Yx5KmEHyUDQftmWWCbGsKspfSpViQ5JtZmapUdRDjKx5ceUkAZzmQrH2b48vg6bFcYoCRjL6t",
  "key47": "Pam1xm2NNdgdVR1FYpZxQTr2NELttzBHKy1CFvkiLFEvM7xB3CpHzuhCPM2HBzijRf2Tf6pSsRNvdbc25C2zPGY",
  "key48": "2AS9XQDTZJq5aUoMvsqcA5Zt3u5cBkX1pHdJYLLD6qAXrHpUty7X9twMEhyx31FXpsxwAvALa2aZ64qeHDbvbfqR",
  "key49": "2sJ5HWpnKYEuLMoEzHC3NBkPY6jGBz7EnS13Z4HyGyiGJR3hnApkcsHx1Qfo1djo6EVmDZgZbn2i3UoHTGYYHZ8o"
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
