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
    "2VhxgYkJGZSUWu1hNAbj4Zn7uwCyamjog7fKRQVaeZ63DioPTVyjLxvPCer9G5qum7Z1JiwAwGFi7vmeaSB3N4m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yk3xcM72RWt1X1XG65zpD7DUKRtj1ALJqBHBELm9RpHirgE1gEZCHPGkNwW2Pc16Vgh67pbqwYEQSmtgxiX37EZ",
  "key1": "5BJX3VP8Gtku22TdmADbL1Qua1LJpyqXQeGFSjfnFcvhgMDGFxWShySN39pAMNH9pqB8MzbrzwBpXDTy4a43C9sP",
  "key2": "4vV3ohN6uRFmQ8ceWmLA5utWt2bxhEaK7aXf5fGB8Dqs4r8Vng5qqnTAewbJ37w4aSeZgJdKCwenpa63jhidVbMP",
  "key3": "GRL49JskqeAbUVBueT4t15HEB9iVuL9eZMcJU4LnJSWovx3h6v3Rcf3hkfPKsN9zaJj7CNiRVchN7eeo3qc8Qem",
  "key4": "2HgdEgLh2XZDvjKGgo3R4ftrNdVYZ3bQ8rsJeDK3XEQLVNw4bi8TQHhWqrxE7D76DqjvhozFedd2XGZ73qvLqwQ5",
  "key5": "KKYmQnwofQ5Z66k5kr93uGhjQCHrap8CZ3ASXh9BcVS5r3fZqPia5DFRbe9uUzCqWD9763vipF9YvdpToysKKHx",
  "key6": "3TZ7Tfu9GnGHDE5C2ttAjASw9FUvXoCuqCHNAEMiMWAP3HuK8g6qnmS2mw6mjE6qKsCcVVnmKEdAUMvPJz1Ez8rQ",
  "key7": "5pgQPtLfrkX1FNTbNXzqWdQHAERhSrnvzdMB9DBYiHWHAcoK4NUrMAMrpDe6ucqUH6t4sbfWXJdrTf9FJkZg8Muj",
  "key8": "2LBNyC2HsEUi4twyY2qVwArvoWMRVB21AHWhnSnvZCUZXCGFqwbLMVfeTCP9yr6pyHbdKKdVagbAZUssEDs1pDSi",
  "key9": "K6g7DVX6nHVYGeUWWrdsrDtAhUS2JL3RTKVLAETZg6hmoqHp6QGaV8iZSUBWD6FALw4D4fQJ2ciEnfv9dngo3iz",
  "key10": "2SCngAk34TiDYfwxQQaezTYf9VK4U65SHo5WbaztwoobSHUQCUDBJEmvqpDY6jejeTme99AjHiSppg9iEW8NE3vZ",
  "key11": "5ggGSBQs9YPe1VwZBDY1pvPa9nbwRuoHtyYCDytTsFzU9YKfy1fWtN76EeEW9B46vVega1mSk3LFF6UwckR2vm6u",
  "key12": "4UeqpZq2PZAuyLtj8EsY5F4UzghxGhBr47QydiD7kbJNqsNp1cDw7m7kYxuaTTMrgxBeymdKF9LLDzphUfL8AjWf",
  "key13": "bYXgVxHLWEREdPVNaq2kVRrV1rvj4PWxuHxQKQAvkDNMiYKEX8HWzT6Vfpnut3fA26vZm6nbkTGACXLd74r9uiv",
  "key14": "37CqcodBH1QnjcckuWdm5WWYiouGekQMJk1Sm4PRo6te5B5iW6BaCGm6oU9dfrNDD5fgaJWrCiqAbHwnYStbFdo2",
  "key15": "5rtRnu8qPXoDQDkkUpc3XHZ5UP1so8aD326abMeTgt4wtmMWXDpVS8mbd5sWNdWwwHdeJRkSLZ772cYZBGyNTUS9",
  "key16": "3C2ukrG8jC6cVWVLSc1femFnb6jdBgJh6r6z8823ZvfQg9AohXfpFh8KbJvj6MsNpXeya1drijtFjymUKsRsTHCd",
  "key17": "ZsaptJUFzKGDNZNXd55zCvNLv5DHCifbTSKuXvmXa3iwyze6U8fDpumtyfDW7BKU3Vdh2TdDa6XKwpXNaLQtnri",
  "key18": "ivr2CvYD1U7LoQrDgB5XHqJ1XhJ9GjH1L2ss19J32tUxcAfVVmYvvG8g7gqdCrDZMCZapnyNG4VHrjcxf8EsQMw",
  "key19": "4bKdum8NCLAXpNj8xQE1hHZzGbeZQpwNYDR91kWwB5fThKvmr7431FZ1SqTFGZBBU7GaQVyZKNyoYGKEgKBe4dxK",
  "key20": "4EnmomytuyrLAG2EzSn7bdW7XFWJmNh7f25pBofZhk9CAqaDPxsckUxV5r81TmwtuwzByQCPeqWPiZEaTh4Z9Au4",
  "key21": "61ihu9VYAMpGruWnppDTHmnug1yQBN9Sex6WiuFzQen2YV3nytwrEoR5t3wyu56wCq2HX5daKdeK6Y1Zv4KwUgfp",
  "key22": "24K4Qt7LA8FWWfPDqjYRkUfFaGSHmp7WgAU1tSTeChRtq6SuM3m6qJN9L6K5kPNu7MsRbAVcMx8ADXXizGGrTEZ3",
  "key23": "56U7MsWXiMQnPr7LRseUFrgmGJNtfAahZYDCcFohABxHuhGEreLhPigc9GJUz5FkZi7REdp587mQUxKhEYFWwuRP",
  "key24": "5qehNMEe1cWA2Rtc9ArmKmhHNso6uMGRseYvpoN65jmDgkKGPKG3STR5cuvzHNjC2eBVxurtkeogxGyuqhajBWyt",
  "key25": "5bTNYTtE9CxsNQFcidoVctG8575GPhe7pYqHJVe6dkM1pYHF3tdS9MLeKwKwRkMCjDmjAXaVh33dzz5veUUi3rW4",
  "key26": "2xEPG9MEff66wqFjZbMgVB3RF4KPVoPXCpHPa3mXN1b42MGeENyXXnoncyiPdJo5wxxrShzvmWv6YJN7e4x65Nkp",
  "key27": "3brTdCj4yS6ckx8sBRncsZURJGqcm1jF5yX2Q3p8JvsGV3o6Cu7FPcnEa2spQSzfCFzqvWoJpkTw5iRdWbfPbnX8",
  "key28": "AMJ238MSFtFVwk1HSn4UnVca9AcdbqkX56pXxPL71vnzfqmG3zjtSXYs5KsHkXJeMduyHRdL8jPp6eGm6B39HG1",
  "key29": "2vwZnvee9MxtNyjCvQnfcsXRkrAkKyxKxPesYxiVbRePXZ3sKLAPALpwwHt79tUAB5SPYLnKiyYNdYLdH3k67VzK",
  "key30": "2zg4QjU7ZkGzZ8k4bbPwevrtSZ4zsZVXGCshLxqRJ5ujW5LuyEzgd485QZUU78CrDTXQrEfHKBsVjGooTt9KgoG2",
  "key31": "Wp6JFDjPq1Vv1gt8hdhVh859t4drixC48VaQzFDSGCGAMLdGddAxYKSEw6qDV4JAEBKRjBrRzwUxHGfuLCUQUT8",
  "key32": "3HSrJs8vya1ARVuSVSmVEheXtAt83pztWVz32snGWpstDR45DZtThMnBrbKuPCQsC2XWqxKB5wHYwMCS5fMJUWJT",
  "key33": "2ur1ojWmYcRYZzTM8krpJARzMjz8iKJynEHEYzbCSSp1oFgMd6M9Y311oPKoHaEu9aeUooZ3L3y5sdRHQ4AKrGLS",
  "key34": "4GbuRjgaZaUwckVC9dRjHHKfA4gkULmfaivPtNoXF37J5mvk7ttEEsECjkdh9mW3eSjXzNwq9wniyFkdNZvNdXMW",
  "key35": "2e6EAqMYwH2t4of5v4aAPbwAgUFk5nKkuQuHxKLzUojBdvUFobseHCqnsiyF726EDU6Te7xd9eGxdJR4c5vb9PTQ",
  "key36": "4KyPVwi21eFsYnbwQYpiEjusMwCMJtiZpFQmAbo5bV5FnVmePRNDcvr3nPk5cH8NgvaR7qu47QFVgeKLZpBxtqMU",
  "key37": "4xVxUsqTREy4RkmVrsYe6D8cDpJoMbaDLPxm1EByh8LsN4EUrz8dywoAtVV2w77Erzz21WaE51ryc9ttKKUVMfSD",
  "key38": "2SgsFVZswBaWtWkMvTNaUdtiT1WrAEnfAnU838YZGM952LaZcZnmCrynFdPGQ81DrJKgXbqFrwCNJBKBYvqusr4f",
  "key39": "26rjngFVkGKGH4ZPHM1pQjwtd5WiE6uopibNt3hH4XWiqyUPf2m8d378oEnoPzhUMj6MTsHJNDAZGVP1saTVcrGP",
  "key40": "2o7MUKtGMmm1j6nDGKCMHcLTzy1uobwPZ6JsD2iwMrJjrDLDvDor9PBmbTiHTA5zNz1cQbSUb59hDebzeo9eVjTQ",
  "key41": "5DLotiktGBH7HdmgaLvGMio22uZ5YVBYSHauCWY38FuDp1xem6zV9sjJWBEAgMEMsDMzEktZixPY5rerhYEtsaud",
  "key42": "R3vJuPamaqyTe7UhERQqBGXSeb9CKzbTnfgoXdqA2A1oEBAGMA4wenHTGLjKoSLV7RNrZLXcPCYkz24Pw6BuLYe",
  "key43": "3u6KsTMCBqtF2qZFAUUW4TG1TzW4vB69ReCXAk3TvXKNTXFSihtkcokyRHChhUu2uuMhBVRXqsPJJJQSMUXvTudc",
  "key44": "34uaqxEC6SaXTocEtcuVdGZfgFJzVbwJ2W1qS5CRZ3S4kGYo4jMxiuFkEJRSgWcNMookcjsc5eBA5rntJNqCPC4i",
  "key45": "3fpG26dE2QznXaKbv7x9DxBc5dHiSyXdNWU4PCrv9jZcNoCFQAy73KoFQBv9Wy1XfKCwb9mQLiABNQnaF9hF4iQd",
  "key46": "39uJ2w78zZsJm68URECHLcT66GMkidfMc7THgN3gLKqXQ2mNZT1oP5ZhpgnDQRNnJ9ANLWqNFs4ZBwrUTRizqhZR",
  "key47": "3Rc5qMXP7iNnJ4AP7f3LeKfZfvSBXWLzPvNRexp1AmudWd6tr8YtvqKmJ5ixuEE96ZfF2meQrDnsDBmvjXd6DSfA",
  "key48": "4rArRLMgDxHMsAF5nNoSc4zLEPWpFjBQ63Nz298iTDSRGAS5U8jhHqEnSTnQXHEyPrqwZZadjuFNBDh8MxgMJ25y"
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
