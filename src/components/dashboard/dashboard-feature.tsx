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
    "2SwC9zYSpNYBZJvDmY9pV8Qg7nTgvayPkKDE3333Liunr2nnyZzqF2C9KimpPtKX3Lv1XCzk2G1bDCTFF5prscDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNoqNMVreVGW7r2wy4Z77kF56Fw8GLBDRc23JFx9G7xYpbCBSVewEwRytWxTuszxW3nRXokSUxTfGkVVu9eAB7S",
  "key1": "4ivygXFmGhUaH5yeqXZWxjLq2Y85e7At8SzWV7nMC4SdvYbHcAsoCTkagq4tmeD8ZzcV97wJ1CbAWTi5JJMe6pRJ",
  "key2": "24botcMXoHSfiZmfkxKvEn8EA1dWeGKXXQVuWHXrL1xVchXXF8bH9H69xUvbVYPL5yFA1fj3WLwtNvTt7TyUPPCw",
  "key3": "EaCn63TpSsHMYFrTC1bhAKX7sJRPSB5fCRVXfWVqJtutUWU6CkyNN1pScEsFXRY5XtyEwPXzooyLNcwNSizdxLi",
  "key4": "ep994n9YEHRN3de2V9Mpd3v4Cx3gZ3vWQzczJBdgeqf3MnWiUZERTsdo6pi2nrj4Lo7c1CoPmztVYp88GhAJDbL",
  "key5": "pQanrfgNUsBRJWCwQbBCyNbVaoGFsvccppH2KaK9HMhUYmwmm2UzWzDkQB1r5FoDVcoGSEQ2s4iqUHZWDaBBLG3",
  "key6": "4sGfS3RP7CShzUPezfh6xBbNY5sZhNUkvWmnJiKMNocK43SLLwwA5W9FDsG9VxJ79vDo7CZXTgAvtutRHBk8sUA6",
  "key7": "5gvdYsTohoQevG8mgkv2MLCU6HJ79wCrnKGKcEycnXrQLcAwdYF2nMX4B3oVRnfRjqDk3cSiAb86srdcG8AU2KEp",
  "key8": "kEy6VQxdyRwMfcELWWcnMN8g5kX5TwcGJ6XwnNrsyUjG6yZdCbMFfVnBbCFjG21DwYraD9wx9g2TqaaM4p1ndvs",
  "key9": "5sJf8a3ATL62qWkQwit1RHsnxsWaLxo6PAgEtSLdLR2gNEKnEibJCX1JFavaw94i3ASMXpuExQECEn4Yr5866KnM",
  "key10": "2e68RCFWViJu5Ri8m9uKTcq1mafFKfrYADM1LaQtrcw3vmTU1VG8dysY4C2sBbzoWtmyfFx6kXFZWDfSVqtd6noT",
  "key11": "2b2RWToJFnRfrbBQTFmdngwzk7A65djrBwpZFtSdXos9jygSVsbiSZRbjsXhxh4izaSv2nWKGX4hchbB43joEFCV",
  "key12": "4BgXmnXVx3sYbKCeFiS5CqbeYBbKbG3n3rVMGEPfvjDqAz38NEPU759kv8CyaKNPZYEGFAeRR2c5wvADPG8L8C8Q",
  "key13": "2cLSw9GJ6dJg4aV3L27s5TkZxdmDauMc9dQgMSr65tnunHKzmW7J7MiKP9icmoLCtk2PFQitAPhgh6ofCoEuirZK",
  "key14": "5upv985WWZnMC7SSbEx9p5vUxn7WLZ8b1KYWwqwr1JRfTu7gJRHaecxFYxj75QH34YwTXC2LgeE56nHPXEae8wbM",
  "key15": "3ELK2a2w5tQfn2gEQpqDjHyr4r5ke1Knb1wq6Zao7NHYnpr7TByq7arJtWR48r5CzzFdJCqANmFSZ5A8YExWf3jB",
  "key16": "5YMuWSoufz8ehMbiNdnMfBEf5hYuhBYdvdrvUgP7AVYiLpD6GarZg3gBq5XjbkZTR6sgUWSL63Y5CzWbbZyN24uj",
  "key17": "44DaZaGdhYRA9GZQ5oWgZDdymCMJZTbsHUVZjLPRpkxfHQAAewLH1yum2CGL9MbraVxzDChpWpajGn2TrNnMXexn",
  "key18": "63QgxDAwrCg9SbuXTuGtNMo4YYA2twGhRjN2j5jTcktMesgM8fLJZeg6skfMXEU5v11PVgfWGKhN44fxwfqZh71b",
  "key19": "21ybfPPWcyKGNeTvmbyxnDG3ci8Qu5zGmVg1pq48Zcnjmr197CDYKxFmy9e2YTFCjiuGo5iiqtBW6XJSxvKKXLXY",
  "key20": "5cB3PNwQa629Mj9mtdDwWCQnXd1mu2EDmzMmkmZbvpLHp2Jn7A6W1qxc2bHsP6Gk9UUYahBkDmCgMTAMn4oN2ynq",
  "key21": "59fY3h1RwWFRjss3W2kfTAE4d6UbGZrbnAcYdrqLi5Nm7KewXfBHMhEaxbZcdym2joRe3bcsKKgQXoAgNmXueJj5",
  "key22": "2hvZmSuvnNrZdnSYzot2GjwNJte9rTSa3KL8N73Tdi721dvJpGWyif9QgsqsutWJHrGmQCRCAaaC4RzGVsbNCfbC",
  "key23": "23WwXFXkSGKUTrQZgRBhgRBBu34TDrxA5aiLKkMzex82iE2EbGVrJhC51S7KGhdR4fb4bm5pbjiGBehAL4JnipEr",
  "key24": "4zzUyCisAYsAiKj7RhnMRqFwZW6f4cZ3xv6hkuxuvWHQ4cKRHnhYKPPE346AvxcobicrcLroU6iFCp9Thw4Fq1b8",
  "key25": "5eVQ7VHaE44zzGXeJLPcSCqEAEH784cPMi3fwDUiB5HCrqh1VYCyAxrgtRRXAJZGWkXREJyY8NBtuXgCyEZDV2Ec",
  "key26": "2dPzemmAEsX5tzHgJniYUrwoVgKKEsckeNPkGtsscvB4DowbySLtXsoNy3SDCajvX3rAUPVn94FCMrThWDQgP5bM",
  "key27": "5fUHUMhpR1KtaXq72eDfCTdLZfbsEPynXzv3NB6UNa1prpGh55rSWaFBWuQdhRoZY6Ykus6Zk3pN7t5TE3duFPN3",
  "key28": "yUqkm66UHabSL1KCjXyZ51Ctx969eruKeXT4boP9qinnRXuMboGD19o7xYws81DK1hZDpWrHRNsArKP8tUBbSh9",
  "key29": "2KZrPrTvTGC2RYru6aGeNf1GGVjanusNfcnT6rJ62empdnL67BuLo838wN4YzWm1VPEZWGPbH22yEfcffLjfBiPw",
  "key30": "A9u5z49ZRXSHDWJ5QU65UHygCyDDx64LwVKUbzM93eMA26nnnYb6wmo6BgnfpYbjVzroaeauZacgLz584nodCuM",
  "key31": "2nyjodzmR8LG9yHUMovc2iaEZcvMnrEcaqjxiBDzU1e1p9v3uvpr7WbUJnE7GSnLcnQeQ55f5eicuZcvLbDaE5Jb",
  "key32": "4yYCxxYqK2VGdWhF7piVEfwMs98Pgr5rpkJHiLHJmPU68N7kpc2Z5XbamWwSEbmPtSgqBo4GDFEsAHVGfXPtbBkM",
  "key33": "64CCbjins1wrB3dqDQWC4oeAZCqZQqq56ZEZp4Ltz5j2akUD1kZRj36P7UQK8kZUVBST1y3E328EphbFUtJnVNU4",
  "key34": "4qZ3LH22o3MB8AK1v5oYJ9Jx4qsbN9fDujUL36BUEtqTZ6fDSaNKZ92A2VwHapvtmtqC6h3TmEdyhuC47VFHiph8",
  "key35": "emGx4AFTJkdFjn7EwyjoHUAw68XTjNAso8ukX8kJDdiYVjtcpaZ23aN6b2jEYFfNGyECL7TtDBe9RwPKEqayi1G",
  "key36": "2YicMTLhuW7SEn6UYWipJ5V7NVUp2AnDditZ54A5sY39ZvDhkFuTxvENrNyDNZ3opKgEHx8ZzbHEFJyttVS4oDW9",
  "key37": "MH2Ziwo98xAAcUohFLyqYHMGhZKeD6TmgQiLPqtw14w6LBhYQpeJyqfySj3ZVqr3SqpASmrCLcmAdx7GzHE3NNu",
  "key38": "2XmBehH9A9YJqZ7Fn1FccK2bq9SnJ9Jcc8UhV5WTNCFxB6Petc9NgKTu83PFgsSRoCc1pmo1n63xWph62fsFEW3K",
  "key39": "4UZbmZtG54gtFsXt6qpjEBUM5V69Az9wy1VjENXwKxr2fwy4TnxA5Br5mKKhLQ2s792qccs7dSobBzNPHkddMBXT",
  "key40": "2TdNiwXxN71ufcFbnWq5D9JpY99jnSKuwZ8VkxALrfG3FNDJ2xHLVK1ryEjebjZPkXSpZ6zcX5QNom4AHPYmTSnv",
  "key41": "65Xfv5N2sjAZqCoPZUtRbbFAEgZ4vnA5rR37zYE8NrrYFZMvLfN2efo34TWeQShkro5osFgo5owJkT1uogtvW2DE",
  "key42": "66CE1f6WW5BFEe6FaetP9jnFGSvSWqW9k92UcSMxrVXgse5Jw2X4sM7dABXQpPRHvLDBGje3MKbbE2ZQ7TS1Efcs",
  "key43": "28wVbyRnQYPkNHdZpzhRMLzvrxUuP473SDhaPonKutyLgcz51wcgycd9n4ALWLeb1T9VPQN2LN52Q7Y2wAks1Kuq",
  "key44": "5rMfKuBKCKm8kn1jwDGM8JErj5iDFb5DFQqJxkKWX7BdJ78LyGTtzF3WxFTRHMsg1GA3FkXqX9gcAywd1ps1qRVJ",
  "key45": "LCVkEPKsSPgqAQXiWuaD6tq5UZb5CeDjCezYgLSJBy58p3UicFcPnz1p2Q6TY2Mh3EEvrJQeTrNqVsXtzoHBizU",
  "key46": "2MU3rRXL6ptgUuqqnFRAaLJ1YgEuGknD12q8FhqXtt3tdavWiyfbe7RsnxZ9v5UTyHb7xEQxJowRXYsB5FnHMD5K"
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
