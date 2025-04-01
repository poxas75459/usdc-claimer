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
    "5ZqB2gcGoiywUtrCDUbHjFe6yF2gbQAwzDDA3r9C4urmMSmfxsfr6sDw3uJjRAuQUxNdcs9jN6wjDNe36N2dwqJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSSEWYJbwDSvRngMMcfEvQKbve1FXLC9HKwuTDipEXpTBg7houBCU5y4Xqk7xNtW59jHk2xMpkVuPK2mnzZp6bv",
  "key1": "4A44n3wCUHq7Lu5SULmkFDjiDdsdk1n6HL6UMbSBwos99uBZBukpRttZWdNMwvJFFw8iQmqXTfruTYTEryRmyvKS",
  "key2": "3LaNSGFgNkuC5cpd5fLNamv5CnNarDirVwp45V7Ega3rTcS3b1xzSGvaJE6d8zKAqc7B8R63a8m38Ndd87UNpE2F",
  "key3": "4JUDZSpT3BkkXagSmz3FGgm4hWLY3UGQWguAQQitjQcqKF218Zm8Ymq29Uuu9tYRgSevW5izmtGjzzmb73mQ4Go1",
  "key4": "48PGd2MgPUutzdy7H2KdEUdVdyKQ3GUmvniJW4baNTQXVnHJ66ZwsdrJACxz5XHSaLPQubvAdQejsADU9EaDQUbw",
  "key5": "5GUp3YhBndjD6Xc2nXey93kZomC4FMBag5ZtdxZVC3Ep21eNc6Ljotqws5LPUFhhnwvHbP4n6TNSnDwHQ8yyD2L",
  "key6": "4QPx15rXknRPaGcWwoeh1yJrsnBELXhhgCFYJxgTHPoWjP4TAkbfjTVPSva5StUqgYzH3KmPZ6hFWNjE85aa61kw",
  "key7": "2Dh4Np9DvzmYdoUmTrKUTyU2Pf5TfcECuzgZhagPfxLvJXHuUa2uWY7yGAHDtM3LAh6nxdwwaduCBzTzTCQHDXPZ",
  "key8": "42kR8yD4kM6WuccHggS7SwrGxUKQXrT6x1aRCKt6UAKSS42poKemnZdQC9F1fkzrvERp4BepFxE9WWN4uLSxMprV",
  "key9": "48Lmx8dC4e35etCPsGmPtDh1SXtfjXLz81e24wfJsEUNHPNXecCVkzyMzmjrfTjFfiQ5HUiruATjvanV7NjdX5KC",
  "key10": "2GWir5ts8GVUFzybTkNw3aJpkfc9k18mVaLRDeAjSNhdPQEwasscBDeKeevTRFqMkbkxGjQoErBe71MNsgxEu2W9",
  "key11": "5KMWGUsDxSsSa28vYasx2KaYmnSYtFKnKJm3y9aJTHi6LpS2qfzutVZukevXW6TvVpUgu9ccDe4CgwpKTt9yGZyk",
  "key12": "2pktWqSJYcqEfsBMvNzpcQdRwEsojdXrPYENuGWLz34We1QsmDchtuDty7PjgCE9rqEjQX11TBrWk1CnbnWSEqa9",
  "key13": "NiUCbw2onHeUc9tk8GXF93YmKw73af9exmYH19CCDjye7f4BrErdcq18aLTKTYtZ1DY5tLi6UBUrWLM6YtikNj9",
  "key14": "3bznJG1N3JRaQ1wbig88HpwRr23qEsBfJzWLRgnqfkwr5GBC9MRnKe25Ev6V5Js9eCCzppD7ZMksW1YvGuCx7swG",
  "key15": "2PVjUeJhRqEaird38cKk7uTeLvdZZ53S8tPRKFL19Ywh1YwUVQfY4YN8kwerocMZF5fYqWaso97AV2pdBsGJec6S",
  "key16": "Wyv4XaP7UovN3QrmGDbcATmbSTfKjmP56MLER4c2AjTpooPPuLp1HaCaukDbfeCJXuBZ5JpdzjwiuMZ9qcfj4cu",
  "key17": "32xweVWssRDHmL7LHZEse99VxF5MZzNe58JKvuvD8yGETdVZQDEvjwuUkJEpa5hH6ahxadWbCRpZa65dHwivr2bd",
  "key18": "2KAjumDr6xnFz76wRFt5pMUCK3YAdakKtnnLcWW2fFj9Sn8ihr3xBAb8t1F1BCXMYgTN9HqJ37duwBZmcoz1oUK7",
  "key19": "4jJ8ChDJ7UYNQfC9c9ttxMiSdxtkeN8vSBuL9URPUxEqspM3wyNBqcDTrim1mBZo1SeacbbgHWRj4rUkFUcsFQ8C",
  "key20": "3TMFMXkqPsF8gvyUgyeaaEYpMwSJd7KA7zpspqajtUXpzcwwYDffgqBanWjAwct5dUGGneyfzZy4vFs9y6b8uQgE",
  "key21": "bRKcA8WGVqDm5T38nHdHcQyQpVXNmwa7iRmbSZdSvB5TrBSDYWw9tZ3h6NXvDxEyWGoDz49Szj2S3Tve1j6ZcF2",
  "key22": "5EE6cAse8LZh8HjnkKHaChZr5TipqYEHtr3tLmNDjAhTmX4CfXsaJEbMBrtdMriNKYi1d5XATMxD4CVJSiAr5SbR",
  "key23": "3HJaZ7jfGrbejMvmgUrT5d6wkXn8N6ZYHUor3C7vbfzAALkX3f4AfDhPuu6MvtYjq7A6EvB7vZumnzmBpwGcjDwn",
  "key24": "5afpuPEHKQhJqtyBBSnCZApw7Q41fcy8dZ1mNudE3tTTZqDLxT7n4xM9pQqdDn9yUHUUsHnWNkJr5Pup5hXruKzp",
  "key25": "4u9GLjwW6on9oVK7wwqNEec7mkMYnNsAsgDTVZCWdfPxPon2C3rywLcdfvMrc4ZXk6c6PRY5vfnKRhHdrGAyC8tW",
  "key26": "3cA8JKPEfgooho3ACFWN7XJP9U6ciQSgHuGh5WXJh8dfj9nhpvxbW2LacB9GDNWv7uwgV1P6b89YRc7uaxMWMaee",
  "key27": "hB1FhBb4AzsygVrfapgjCV7mMNbtA3GLTurMPgASgjn7eP67qWUGYRH7guNWTEaXNKsx7a4YtXswhBbJ34iXUgG",
  "key28": "3cNZe6qftn6hTCx4hVi7dZogQg1etipk2TrYN5VJUwYoTAHmnmD96EEM8rzeo7tDqLETat25DzbziD1Y3cvu9Nvu",
  "key29": "Pih3Dhm87nXo4bQoiz6KhmXKEHGAtfDrYw6GR9DYqoV6Jpi5sZHibTiU53MY8tfg2SYbSbvf1VqumBKVvr5iXnZ",
  "key30": "izva6dmVjjPHo3wYBQHfg9S4L3T2RFBGYruG2mtufTsw6RPh6tCXGwADHHbLYEXjgNyckwy7Zc76iTPNv8r3zYG",
  "key31": "4ABQ8AtByGL9ZBcQH5LwBtwQudyyTeMqUVvBMqdrJnebuYZLD9jKiemCz6TaHRC8p5utJZpnzGu648mHyonr4BVk",
  "key32": "4HtxLcdrkmoELSzursbcm3vCwkBiWHEhfKmm8PMd5SFLMrPLJnJrAXeLiFizFP5coW9CiZkwySYHuxwjMBMXmJhV",
  "key33": "1hRc1qVqA5QR9VkTMTAskyC1A82pppzHMQs4gy8K8ChHg7Dm2bNHiy1LswpA7SozyUgfDH5jQ9Z5cb8LTfgkk74",
  "key34": "3TMYXkPuuJgfnyJ2iQGWduhAF1sue8WBCbNdHRPQmiZg6ZLhh62nb9t9nDta2xLPaFgC3XYv8j2VBfzjiKcqwA8z",
  "key35": "4hdzF5VK7qgF37JSvgykBxzjpuLx1kqfdP51xx8GtBSxdWJirgYBccePJaYXkTA9cnY2jZ3xopbZjjcTnELLwcZM",
  "key36": "67jUZTCoA8CMJpNpfd9WLrFBfjJUpfkJ9HJLKaWvcg9jAEXYwuwWhFggCcHT1ZN3hMhyYf2tod6yuXarSGGbtkcz",
  "key37": "3MFm9vtkw4v2bGdFaAXxCnUHTfhG3BjH6fGr9X7mdb3ELmZTKokuR1Jxpe127r2WZLVyGfFF4fy5KbBJxzM2Dg1Q",
  "key38": "37qfj8RaTaspnfDdZDuwjfj5m5srefFDXwg94LuBfGP2EHJNkLmdCQGHQkaEZ57G2kTJ4PXHd36SeeNVqhunR19j",
  "key39": "4Bc9VazG6BeoV12xg1G97ToRzM2f5UtB3wii5Jzf9XC9yv4fPm7xFGNi7PnKU8qSTe2K67NNVpmHYvfr6Zu6z3AM",
  "key40": "3H9YWq8xEMa63PgM8qab9KpFGvb7drTNV4rLcfxhZkqs4fh5jzyHxSCAbTrwVNCf1nPgoC4FjKLJgZLUNvnKkr41",
  "key41": "zw4Zcbk2YhDvEUi4fR37BYoFGr4RH9TSkqnAhaHmvkCJKALHgMs9NmLvEsbvxKJuqpW59YRbkGyg5y6maxbtdz7",
  "key42": "2H7W4QFxiULFCf9eqU932M1ogptnZX7DRDDWg4wHmgmS4So6im28peHPrVBFiS1zFARA9TpUzjBq7M986eD6dP7Q",
  "key43": "3Jm6nDrjy8iUjgx3CFMJbABQv3gwDLampdHG4PFaSMTPeW9ntQunUkDiyY6g7nP4vQNQtpCziZY4WG2tBz8a9L11"
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
