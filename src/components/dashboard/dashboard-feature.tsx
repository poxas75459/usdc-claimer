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
    "3MEbGrATCvm9bxdL6oWCYCWGA2iJLPE1BehJJ8mFbJDVfCWU7uFnKFWy8Pf4dD4bgeM6MKjtxAq6sZtvkZjeiknY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTcbXFa5mUhP3MTgNP5MCsVm9bFBGWzrDx2RTogv2LmLxhZTZ3QnB3VKgTbB3w4H6VFcBwamb1n3obBUYVHXbKp",
  "key1": "2MDWyr7kZs9GSwKdKLbR4JMHAHBnYnYNJZyJtuXX6NTemD593QXZsERxyCv3zeed8bsTNDU4kGwMyXkwxuwP24vC",
  "key2": "4twcZb2SBXr541KYAjXWXSaUfKjWFrr8iP5k9kG4uRQrugeWc82YK3QWjifhYrSHwfxmtgJT9Sydq6RCsvvFUev7",
  "key3": "2a4vW74xCQLLcpkY4Z96QYHgcSmZAT2xZLgMiFFYdNVsz5515H3MK8yoBF8jsah6F6681owAcwF63wvdRTMSAXdz",
  "key4": "5hS3eDGo2mvNW7X5LGNVvtFoA838EiqHdbVSEW1aKEVkvsuJoNjRujLptYoeVjtNLwvty8WaHpuM6mCnYpG9sZdi",
  "key5": "Ff7W8z1mGWRQgRqTFB3XkiJF42EimvzRgpDEbLKDxjcWen7uenipLhnyoBLKEzeE6215YZddPK8urhcAVEkbahF",
  "key6": "2eJu1uWWudoscB3dyfjijjyKqQ1VFYhcCUuMnBPpTcAMaRaHnnJMHtYoXPHH4z7KyeEVwVvzjQak5aPMMp4LTfrF",
  "key7": "2jzPc7cz5w9bSKgcm243EJiQ75jV6b6KDeR9aWjA3ntaMvhZMEWdWNfUnCNCNGY7U6YAyQYdFH3ahLMKSCakqwKy",
  "key8": "67NzGDK2ua2oNkDerfHtqKiSSwNeKY6MABtAHMQAbsGbnkD6GLURVsmMmyDFJbiL1HTDk1hwdcFChu1nWhxvdvai",
  "key9": "2MLDw2zNax36THHc9sCp1gkoN4vFruXcvak181Sko3NUH8mLGetvXhXKe7pT7VhA2FUhPgyHcR1F76cnkAWqS2pH",
  "key10": "23nmB2fyBknokYgPKXVG9ZhaQZZTZ74KRSkpnT8bwH8TsPf9fcHWJtAPjJtif1Lkg7HpUwhYgd5zsQE8csW74JHc",
  "key11": "iGeCyuWtmRiQC2BsqpszTVAGXwzq58qzcsDomT1DKbCyFrWTxFA9Hu7XPtNfDvCK2tkFuLuWs6kYcZgKEzTmqtL",
  "key12": "3dUsb2dEqej5NkE1rBNatnepdx4UipxA4yUFPr3yZPeV6pMEnKT4t5fs1dwevfr9Cnqpg1GDEWwHD1PkpLgGWiCR",
  "key13": "2Cngw81Jw5uVqzBpFhqZzcxCHyda531YrAhWcW6dWHipqqqW13i71ukErpThZwa8pr15yestc1BY69AJDqiqqNNb",
  "key14": "4fCSScxhCg9zNt2PJ6JH4YqwXhb7HeMngffcbqC8BAbbyAYd9P3iHEbGb6vLqySopG5MTvqP9gzuK26tkmx3gMav",
  "key15": "2zgC1N1zXbPpmbXm91D5LPtrmGQBFsRmwP2WzZrQG1auXhGKCQhmda5P7p94hyAXAZCupfPMTayq5eUyPjNKa4NM",
  "key16": "31NbJzePAUjDeRpUgaikciFgseNY6cmMmgJC29U8LYFzK9r7dxygRDLTiGqUfhhXwXaUz3n2Y8P3y8basvVATb7j",
  "key17": "2z5jcSK6xVULccSafSt1og1Ap81MdXSjCcZ1Vcaca6WrQN8v4urxS2hxCQphFm78yHjJoo2dotfZ4rnCXBMY95ch",
  "key18": "3Ltri7RK2MPKvM46wSaNtXs3SQTqcXP1ZcugqFVEdrQMAZ4siH3tyFjADa1sqxWAbpTCvVuKJpHVxUHMAVPD2C2h",
  "key19": "2wtHGKqLd6Q6ycz3cH1ApjEEku4Y15t5Lv9kHop7EYoNTAWEN2B2AEGsaTUNHhawEAdWEps8ERcsVfXKGzNz4oLT",
  "key20": "277tBmLexoqp8k23G7nWRQtqKqeban7CRimpiWe7rHstA1wQXEMgR2cMhBAwEuDSCiFtpfgScymFiwc2CFTH2tJL",
  "key21": "4L9pErekPWVHhbji8F42rGLocjpVgWcxY1gZZfYGakVyZTwDbNymQWh8XLNUtkumqmUZMwNEp4D8VeJAh4K6hqfD",
  "key22": "yRfFi8JDaAHrkC4dq2wtjEWWPSCFdZX2NUQhKiKe6ECqt454Azf6RcwCurSXmnKiAscjoJSJJM8NN3YRQxmwEsi",
  "key23": "45Knp3JNth3ReBz289A3SJ3St83VL923E4PB3Y5bknaUN5jRD8f2Z2QrAw31AGSF6d8sWVMnfKAag4dhSmu45hX5",
  "key24": "4bWu9ZPpf2CDMa9JacNJV4nmBmh62oNWD5aML2UphZfjYfDGr6mFEQUVz32o6evd3rxus7a78NQQD9TW4x61FZTk",
  "key25": "62FPUjHNdjWtiaZP1jPYgnvanjHVk6qv9aLtQG5BvWkcThDxFPDFWEZvuFXd4w6qDyREzpjAYuSU32U5iaUZxpgS",
  "key26": "5TnmrddHArBLFsueVcm5xsuf4X9MiFzuAx7vgTsPt5DeVzkC9rSpM6K1dy7Bpj16BeJFn4XtB8cbsMsM21u3okkU",
  "key27": "HCitqQzoZaWLzEPi6REKJ4UzxeA9btm2WKEjfEYvhYDBZde3uHGyyJ2onhroBJN45MDmURfbXtrzb977quzYekM",
  "key28": "3tzmY21ra9h6m58RjbjkazSSYuBKAa5hshHhmZJDXyXwjji8AHkCMEN4DQZ7LabhUb6w3faC1RpLNWdeMqzsgNQi",
  "key29": "4XYZSH4owSZ6mMsppVYEEkykv395GDZX7DBd4kNQfKRLdstSe81qjDDAW2Fru3DhFMymZfg2mM6ozh7qubNiNVdf",
  "key30": "tD8Q5qQKMouU8HbNSRWKcmbRuJCnxmyGHHDW8uoTgVfZoZXVTwGpggibeZay2VRaKKrToRHPHQCGkPPz5c3U9GB",
  "key31": "3XGiSZVxunQnLQXihpDiyw7e2cvQRaDx3QWRioo99jRpbcHREJnqTdEeSLq1U9RxuCKyK3GE1tners7c1CtH97xx",
  "key32": "4P2kWxonZnPXk2nQQrgeM5yG3ubRwXxNddSCKaMnsEUdGTf8ehewfyErLdxnAHMAUwjzQ4CMScMnrhgPVjRKRNG7",
  "key33": "CZi7D7E1RiPLdg2xVHgfsSQgse8mxn9RwF9MafptymMjkcHxqwvkJc69nvfj5yAZCpD7XpBVfdrUMRSmtw29qwR",
  "key34": "24T5pji8jtVcgcKRF6G8982Ndms8Z67PWpa6PCZKSQh57yA2VWEdGWQ8cNU3hUysNvkPDGJDWsrDPPu8yjnN3u8m",
  "key35": "F1pD4XCEX8XhaJgXxdL1VumXfNHC7HeKrGvUck2ptovo4CXX8GR2epAknXK9cLTGEzYjiBLFtbMLDfDUTc9TYq2",
  "key36": "4WL2LA7TwVEgAcRNSVkAEcDuoWKMRi89fHz5J7EkrQrf5gg9nRRkYN5kf3WvsMiuNpfFvzzieFsHKbUhYjv27U2i",
  "key37": "32kP3N3NyUEre834WinSeeos6bBfbcSckcFpLaXw3DazJqJnYyygV9d8EZiYo381Z4QsXUJdzeMoVo5nAb1njJBG",
  "key38": "2GTFc3ASP2zdhaoA4Yto1Eojfoe5LqqezztNs5XpxnxuoDwwrHjBz2q9hzT9dZpnsS69qJbLsA5JeDhQzVPdL9fu",
  "key39": "45jYms87S3JgzT2vFVc7Wit962zFWU3ivpmAtz4acxvY6dNmQTrkp78G1K93bTic8jnjyhYvLXo7UgayVHCGeeNG",
  "key40": "Q1NzQgsYAM9fKDnCzConi4tDCq8FtPm4uSewhYeFf1QTXLfeQ35ZLt9i6bv6aYnGCGnn35LvEK3HttdYN7Yscbn",
  "key41": "2EUPLSWZWgKLgifLbnB5ZwZKqEnE8ZWCmAPuLe6SDVE8VpH8GMJyfyu1rJ1fUGwyeToAckKWgFrrQiCeMbUipeFk"
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
