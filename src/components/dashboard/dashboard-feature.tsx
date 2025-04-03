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
    "sDGj8tAyL6mnHzUnJmmfvSmQAaQogm2kMyUJpD3W4UW5r4wruMHn7YZBYggVHhLuEzoJyMpJSrP6ceDaJJbHsFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eb3UgrNKTZTz9dht96PoeWmD7aKERVV8dUWuStz9myzy46oFuoCZhhG6NsBU8n3N21spycsV17Na344x2GGRJUD",
  "key1": "24jjDrqoXAfn13sZWcVzbMsPQfygkwCG6rww6Fkx2XtZqQtSqqxgY4svzLQALWvH53JbuQJa2JX7RVEvFzcqAHCk",
  "key2": "5WuHnAwvweMg4yZqUYKhoffUPQYJFqXdjP4eLnRqU32biqXfwJSJwuf2ZupQzha6YBtDDUqKojf8BQda6o8aX2UJ",
  "key3": "2ZCfVQZP62gHRHQdu1orfwNa6hbYPJ2UzJPiV9SWnPiKuJZtEvKwVezqBFUd7N59aesQofRBnhQa9cWBQdRr1dnk",
  "key4": "sTQ6AjZVV6y424o5TNAMGc2xaJPacLbTFJZqzYemUeWaavxXtaYxpAck7ymZMAs2BSXxQo1v2sVwGU9KTdxdRpU",
  "key5": "93vVMRaETDQxhXNJhS4g5zmG6SMTNrThc4Kj5bMD11DyBEqBchznDhnAYE9yLuMvaMKzj7joy9fsjE3X3CAX8d6",
  "key6": "3ypKA4APBJM9mj7sq5ZXd2MV2nARtBUTMmazxWWztQnAsT13BK19JddZLmwxJXPwJXPYCnymPzAYmCL4CL3dySig",
  "key7": "4PLGdY2NL1L1HaSUiZ2XSeRJ3eFXSS4ob5JhMykst49k172VLBszTo8bKyd8bgDbCpCmnxM7K8Bs8maGEfwCyYKA",
  "key8": "5mXpSdYaGNvRUnBPPCJQ8JQHKtS8hVstiMsAj7PjXdYw4syfm7DmVXA8wJuZu1kDH6vKpoiF6H8YshAJdYoBEJLq",
  "key9": "vSDTrd4z71uc5FoY3tmdt2pBTvLdNjwkT8rnQocyGtnZVWmDLtrY3gV7RNBvL5gqtK1KrTMPJfJTDumST3jvmY9",
  "key10": "5JCiW2wy8t4Ff4kcuK3G6BdP7K8rSRuaP5EmMtubVq41XYaJqsuE2ZGXjjVkchtS1gAq8Mfwbk8vUS52Qdrc7g7F",
  "key11": "3XSF2vNtpzmQahYueq2Wvk3bve72f2gDyKWMEY2i3ECJtnFaw6nFg1jZNn367UokgSHLELcrjAhGdNwX33GtPQJ6",
  "key12": "aGV3RQyFDWqeLhL2QHs5Dq9Nnqv5T7trukwdy3xWeV99zgxMmqbjxn74wd25vscPQS8xnhb1oqHM7E7mq1KR2PN",
  "key13": "oH1ZedRAsoQugxBo3M1cpxtLsBph3NjPuobFckETr9B11d2XLNc9wuTG8r2ivTf8E886XWuEQFKquuMoZoQQ1gA",
  "key14": "2jyTsYsaKkbGfT5fvW37ecLBDGW29Juvk9oaZchKjouvaVdNmoLpUUdDd1Jb6D4kAXEsr7fJcHQqVmmQdWYeBZ44",
  "key15": "67b3TZzPaNv5iJ6iXvJXXXLWxhxToMapjiuqEukCKbQVVDTrXms8rqgY5hpeirvKMHBgrSp8FNERB6rL1NQeigkZ",
  "key16": "y7SbSeVTE1nPVYMxwZhUESBTQqvS5LUJ9e55esWWb7LfqrdrPkDq52WN2RAhcZJzbGVpBd9B9VZLNrHUce9m32R",
  "key17": "5rzgAbrCR3kssJoi2Qh6JgZb9HvrKxB2qYC1igktaVy6Xy7KJR2Tguh7k5ShCMqZqyEfJZMifouXYRisWEvhaATG",
  "key18": "24TmLzc74EiUTnq56wnhnvhJzU1zS82acW6RNu22i8j9jUAAdut6E7xi6RjrzKL2hUG553agxnb78tNx5cTuG4pd",
  "key19": "52A4fJQYQKErCUHekz9f7Mqtedvz2gTytHqK7cJpXDQ8kwfBhy4YNRmzTief2DKxG9Ni2Dd9kqLDRfgcVzKxgy9C",
  "key20": "5ektMaGtagpgVWy2YJzUDXa2qRuTczBftAv2m8hVqJGktAYkPm75g2yXCzQz18x9biayeiVVLg2nnKKGeQFqPzdk",
  "key21": "4Df9NfXAat2QCjkJPJjSC1K2EhEV5TZPQppTgsm4FojaqM8eDL1QxPTsB7U1bFEk86RCseFb8HK3K2JJUDMVvLkG",
  "key22": "4bAdoVEVK78uinxdVi6GhgfnSL2aryFjFQ6eTky4EG9KRxDTZ2tAFTh4pFgyMsjb7jJ2Zzc6MiYk9LxBtfbf7kFN",
  "key23": "4fgqEUULYFzWuVP9cHPApiBasroYfZp4uwDkUTBAf6ZstHCU6CQF817aNyeRVd7hBZGwgtoFCT3qU6UemzNVvuN6",
  "key24": "3LjwMA8aw7pnVcgaZ2y6CTS5cfSNc1LUAdPdVKDunpdpMA417vYyuPcx3JzT2wf6Dvv2WiZ626vkCYCvftPsBd2T",
  "key25": "5vMXtyCiWRDaFe4LYhrFU8ZYLpKt9fsCoS1w5QhcZidJCujSW5weQyCpbWGwpyUUwGDTLkx36rbBW76yR4dGhZQ5",
  "key26": "3EoUMnBdKHUTYVyB8Afhbk9hkCx1PDNc95VGaVWypTm9bLuSmcLKixPLH2JYe2re7qc8Pyw6qMDUrN3dws5hLBP3",
  "key27": "4NqENtdxqewfHgkaNN7UemRqWkZhtxPftaxWpHha71XjvJyepQmJyK4zbvJ2QMVh5n4zK68VJymtYgGdRtEpYERb",
  "key28": "38oCdzKxCMZUUnHe5jLxL3vgsLy4UrGddntB9ufpkQynRm8DMVbqoYEbwJFsbqCR7zUREqotYEbR35d7edEzrkQM",
  "key29": "5gjHjDEraZ3TPKDnoZsGNiPUZbDuUqcDJgQ9XvUiXE1xAsY7TKr8HjD9DtKWv2dwCKEkynFp5bQJAN7JVyqtPUba",
  "key30": "3rqchHPu6TSd5X3Wk2ts5q8FxPjYUJLSZ13GJbCy87gAwJwVySvtX41TPesQc65kd8sL4RCa7uVFuhRhs6AgMXLn",
  "key31": "DuX8Z6KaU1ffBPBamYLsnazYLEJ3RpPP1o8FYBZ5RpZ5s83J9UkkAVPFBUner7UykZUP8cQihH8DDc1QGCxw2Vx",
  "key32": "Kfnk53EKCYwnwWh4vgYeEfsrV6qEibSgSD6TdV16azQfxGAzbgy5adSaF8ycqGfn7XsHAM9kn4jzT88ZGmBM2fE",
  "key33": "5FhHZk8beKiJPLfCL7Pgneudw4CpT4vtMSo5gMXNdgbGDxNsduYdwnqMBrsvB3YwQ3oR818dMH5ue9qxfY49YEsr",
  "key34": "3gRFTCb6YCfqUkU2bZnVRwcV9P6qk8tqPRR7jTUTMuRXkWJqY8xuv8Fur9rJgsNaV5BaZPRgi41Aux3DqzrRkJ6n",
  "key35": "3XyHb2SkuTHkwfFSAhQp2cEDncg23pj4Kno76eehYLna1U6KovwmzH85TZ3KwCFCn8woGJsTRYirQ8utL58w7V1u",
  "key36": "2xE1pfcZy5stmVTwzcgPTnm8XCFpQb2SLNADumFNuphrN5fknoSKxzhRQ2oATPF7c37nUWwF1u4W4b7iT3iBSBKD",
  "key37": "3M3UzR5xFssipf94ezh6tScEddM7f3h7eqEfvrHdDA46i4jLWDjbYmbqJarZt4YqtbBHHR1GHQxic5mNb7PVugqW",
  "key38": "3Nv8tBu1WUoLqV8UxQQY8iHGhJRRtHMji95vECtmCEXnHCzasEyEhwSA82mNaFDg4YuRJv65rk6q2kxtMEHtS5UN",
  "key39": "2Gg8x8tyWRiSrJnc8SD9tNgrZXtvoZEMh5MQ4eDtUe9Vk9XLgu2D6B2Y9Qz3RexTS5ewVy76aDZzKoZsBJ5g4S4t",
  "key40": "2Un8d8c2WTPWQCqaGJ1x2CG5X8Pn1UJ3v6GAbk31AK55MXv4wcCRkNC1eHnfFaU7tp6U8wNroZKnShX17YtuDEdq",
  "key41": "5WxWZsuFxfA9SabetRzg6WUi3PDvgUwDdrNhcpnuBuFyEiPSYVnPHUDYTtpji1LTarBZff7ufT12ge4LQtcFDd7",
  "key42": "4AcRxQZe5s9QDEzmg3xCkkJHJD4JfDZU8czH5nwchPuBeDABVvE6v5nBWDodn1wSJ8a6zYvuHhoGNzFet8ZBJEv7",
  "key43": "NiDkr7dRWEA7q3JWXQB8xdSGAQzfYUU1vtSy2SeE3Yv1qFAJhe77vEZzt2RfWZSxKXP3mpxCYYpepjwhb9SBxJp"
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
