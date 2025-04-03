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
    "5eGK9YDbofuiwYvjopGcgjqKBPwomhZsQ5ueMizeQjaJtcABhEAvmif4ASNbDAAoA34iFAHkfh7sdj8osJ3SgbSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPEJmivKKanGJLfMq2EeLc7GMEY7bqHERydq3zP9YpjHDcP6YUPuRXQpGhxKfY15Mi58K9mamSKni2wzLCrBsKx",
  "key1": "4b9RdMThNsjCRCC5zJNoUgSWHrkfvDAMqtB11xtWcW7kNsJAL6FJAAThE5scYm2zMhhp3PHqtL3sxesec7zT1YVw",
  "key2": "4UFs3pW9dQvm76LPFk5yyswmBe6qAWu5nj5UMuwdVdRmrzTcMxyquGbEieFmypvQeViJXaoNZU3FFFMez3vqdBSF",
  "key3": "5BSVyV4nkJgF2Kwo2i197vo13vnPjYPSfsLU14nNzt4JpBC7679gdZAebbJfZ7RTCScdCbVwL8jWwMq8UjecrEaf",
  "key4": "4FdnuEWDLjw8gosDV5SJ4F8wmtacz83NGy7itfK58cbRYQWt6EW1DrnwwiBET8BHvDmTTBh2UxEZz2Ry6JNyqo16",
  "key5": "DmNWmetQKepa87srZurdxzvCxhuNT4PWqDtsbcBM5RL3CajuGBuz4EtTH93hNap8x6KvqQis7BjTb3BncMjv2m6",
  "key6": "2C1jnCN7gUqb2uLZV9a8eWb8egd936njyEUxaYeroGkZHMUPDRkxmDW8TA1rWYCfkbnUR5FTUmLmgDrjPgNYpZ7e",
  "key7": "3vY3B4W1mUJAjkxJzz865foEtBCoEht1ZQ7mPTRCdxtdUBLhhM2kJpMajUncG6uKWSwSHG1eSmFjZ3padcKuPQS5",
  "key8": "4suRjdRHwtpDRUcoGYEEXDKKmUHXZCmbeMB8ecgMjFRzKm11TkXK79gMuQqWnvcraZJWZcAkbY8kcAMzUq5S5oWw",
  "key9": "4S619xZEGmFLhECETLr4tcYjqGK9W6pTnT1onWADf1pqSuCVD9a95bVBsuFHaNBHvqWaWERqB1AFkJmEqXHh6VTi",
  "key10": "Txy8AmnuFj8McmF6tHUXwyRSE9vybPYM47uWKkUKso6bQpC5YwVEjZCo248U5Mh5H1D3BU2PJkSK1U1s262iMpm",
  "key11": "2dnWaiLaPphh8v6K2jf6jfSVndfCN4gZXHEDXvgR8op26SGMdV6sSxTuGAKFQqvf3n3PqTsyRacdEdq1n2sQo5S5",
  "key12": "3AeDvUtKzJzDRbUjkV48mTFnTqLpuX2yMokEEfEWBwv5qUuhWwsxkDC1kdRf8mGEzSyMB5guBAuRVfR9WPA6Von1",
  "key13": "QX8tkKQrT7g2Hgh6c6pLLG47QB7kSDFwhGKx1CmDfiA9uAsN7qpqfgGmmefz6UiAuVVi2cYn6bHYnkVFbVR6fq4",
  "key14": "23UjuRh1FiTnLKqvWJ1ykyqvWHJFXjatqumX6XRUXi3T33ziA3df68g4u21tH3Ffi1ZvUfCjxBBD4TYk1AvnfCiV",
  "key15": "2LfaDp3FSXeDtNPUWwV7FZ3zMF8bj5GWs93PhzjHMt4779iY1iUMLpqCLJsirnS1BkvjJNRbnFXYEGakXJta1Ctz",
  "key16": "4txgwJ6sXgW5JUTejfW8yYfcXa9LdiT1ornYhWxMwRA7WCzTpbfMvUMxLwX6zX99caFEfXEuVzzj8jr2m2NL538i",
  "key17": "3wEYQswXD9BbosckuZry3Xw3oPMEDgUAo5VcyJHXFyUeFNH2Mh48A2v8bPZtM1Ej1q8PTLXPkG7Nu6Z35731P38a",
  "key18": "3wEX4djxaipZMNH5sToVmJ7Fd7hMNYwmwM5uPGXoixcRKNknkraeCvm9SpcRPwmRusV4AKXmWCRCc7sP5suGsFWf",
  "key19": "3NarVRjE9N86DMkCjKV3krQdCeWL7t3hCMpizUMAMBoT52Ht3ATsRprrWunSPRdpfq6Cu1dEqgepaugS367GbTqz",
  "key20": "2cSJzZwtdmppXpvvmZRJRtFtnwBiCvJ7AaNExNHDcuokoqpSjPAjhzyWqEbunUt7xPe9RY5kUuerH8VWGb4rJGwk",
  "key21": "32xC6aJ5WSohjKTbNPedSAC3sNEP3EJebJbeipzniqeeXcTKp3nGn2fPMKgYjWr124RAK7iWv3hWcQ1xd61sPkoN",
  "key22": "F7sx4TJbjxXdJocBqu8MojuE6am5PeuAxSayXnUhfjZF8LVoYc2iiquDxnkbcSmTRvmDTzV6tM9mE17wrjmBFUf",
  "key23": "4oV3ueYt7ocGwkJpJdYjNDvfV8ymGZEw4Ykkz5bjikQNcgbzGKQ6nuEzLw6yeqTUnHLbXzCoYoiZmcUiaUXaB1M1",
  "key24": "hzPzPVGdQP7dpZTxReDv6LjKYUDb7WGrwDmmmagXS8tURBHyeHiT6mTsgEotTBtrsJ9MyfFnqjJnwwjb1m8e5qK",
  "key25": "2PRuzcY1ZaaAX7SHpE6PVfAwdkM3AFNTPMTUkSFiVxwZ41tUor4FtVZaCaycRcwE2gieNLU6z83iYvV4snfGjtZz",
  "key26": "5kZvatPn8dAaAqJAoAH6FxkytrR9cmEusNhrcXivgdyxhxjNUuVM1EhfWyEUJijSQAbtvp9q4w2tw8rgMwt9DkEB",
  "key27": "5MpKQWqVekC9Q3yoefqeDwcucXozcCyeT1THutMetDF3J5ci8uAqE1adEwpPwTMrRLexcNxuVSy143Xu6KjgH7E2",
  "key28": "5f5b234N1EtuxEx1BU6QPj7hxgFyyCzgF3YbCNBxMfsXANn1QJAipuAmv8S6ARdmXD7tzmQRtRDS7X1T5fk9TKoq",
  "key29": "KNLtJX9k3fTqvcnHZKGKSyRegcGLZ3u2vHPTNneUPKfydoJwopxJ9PbYzGtimd5oG8fDo3UEKYR8ihegrvFupKn",
  "key30": "4ga9ScEr3FpeCuK8PVrwPburRCFnoqyBcCgkxquwfY1TNZLYC2pcgb41bRZcysXabiQWavwcDwnUuQaQNQbPtHHD",
  "key31": "4rmTUtBmbJDXL6G4L1VWzSnv4RQoHwSYTLhU7z9WMeVHoPMLKbncAshHLfQ3zNk1kPosmvaHGDvkZfqZg14G1SJ8",
  "key32": "2bXiF5kmU8KHCLVTmjMaUTCtciCRf29dAddaS9wv4sg5bALDRwac7qcjgvwxtXqA4NbrRtSsYW6t5sFJNUmN75rT",
  "key33": "3qBaJneDyUthFx2kKoNEFqZaFsEGdrSHweV3DRZLvbmffvLCYARE7zgXCU7jGS4nntoe63XSWJng1zhofEbUBCac",
  "key34": "57WNRChiXWSLPJw8vSYQrWn6F3Qbt3wAbfT8iJPqhR3EA8bpj5MWaK17B7AmYrkc8eQ7HtqSy8Ljd8j6sWshjK9X",
  "key35": "5PgUcLHwcisRQNgnYaTmrr6wKknGuWEcCdc8J63rQktjcT7VtttRyoCQ4fdKWUcbNtBFBMUZwsmzszBYzUYwRq1V",
  "key36": "45bbdJGubiLLHAMPC1ZEYJBc58rNnWf9cH1LH9LiT3unQgR1Z5DGDP57UUJRJ54ACfpWiZxHkzYXWQPx3zRKPrPR",
  "key37": "414AsMe8AXiShP64JjjQoUDUmzpoRjirdNNCbTMySh1b5N4Tiww5iUDnJDS7iFM6nidcY3FdLWxjqBLFYiPb1tER",
  "key38": "3rPujosNofA6vYEgC8R1V8VdVWyPWdfqh5G2FReLXRbmFife9TxuKGTHL5UHNeJR8o7taHcZxaV9bTpnebVJbpDZ",
  "key39": "3Rpiyrpf6vz2xz7PvJBQ8ywzYYc4JsXBEeDKGC3PmeiVqwxg587kyWjqkCeZEELE2r85qZqzS17kYJtFvNmGHcXw",
  "key40": "2o6Q4mwREfJm94rp43bvQicoZ2NqcqwFmeYpE4T9r1NwSMJgYsjYKNsMBz6GWJWEtg4uk5dun3r5rcXwUntMQZPk"
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
