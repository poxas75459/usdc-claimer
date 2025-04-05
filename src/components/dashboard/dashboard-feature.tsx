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
    "41DrpZLfCRy933YdHPFZCJpAbMB4yM3pyvJ8dim4GLCRTCr2g1sNxXMYP8cS56Gdg8DokyGs8zbKBXYdDMj3MXBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqSCgtGGN4v8aLkpjpbSvu61FGA3rXGgc6QddqYCe9Suq7Ciwowxm4KEaQdh5JqjGaKmD7B2rxHT1gU8pou2mBv",
  "key1": "4LxSH3AqYRWyxo9xmRAmUjDHGaVoesbSZ7QAaWFfRCBnwvXYBQNUEto9MmeLw79Ytxb4yi5e1Q1x8uGXgMx6Y12e",
  "key2": "3QrPWtrZCbqaddLv6dDuK5ZW4sVxcd5oYpN7hsbytBGLoymhDru4BeAc81WTPXNgyd9nFW4nF1DdCLWreSnPidjx",
  "key3": "3aTE8CkgLawhiaxqeWSvdabc8uyZoZPcC4UW5UstTXSFRxcQTjkUjHcQPNg22gvvQr2t9XqtfAQX7oCRvmrUzyBe",
  "key4": "4xMuF6oab14mvpSJ6r7g21J2rjU12vgXfMknYWmgbhMuamCbDfEQWg2dCXAuxU8rWNXNvsVdT4459xUxAjNK5JD4",
  "key5": "3TDdqe71JhftgpvVq41DXnYowTJpZuHQaRYSu1zCq7sUqr8WjeDdNpMRQ2tjhWHTkFqPcbB7ziri6SXgKMds7kaU",
  "key6": "4v4iUrDjerDHNBYm9WuBBwkvfwUzZKkREthwjhiLBESJ1ALkGm4bpD2ks3FLAEfEDtuqENj1BLgggA5y2UUg6og3",
  "key7": "5od2JyG5kX28MKV4R84PgYzHJ7XbSC94REqyfNWWkBEPhcrm3trPgpbwjHPoASdicZrB5MEEzCsF7cB1BFJN73VG",
  "key8": "5ZJcKkeKpqPBN8Pbma8LV1CWaxpfu45ApSkYgsRqepNcRZRkryh7abCsuSnjUSQUJYyiHHcoFRaLGsZoaWbDtPmP",
  "key9": "WZYqQuAfvosVDhUgzpnhq5Mf2kKGvh94BkoUQU73dACJmaD9FgkUxL42fEaHhmZgtFU6WJcDYAPenPgGoFG1Jia",
  "key10": "2qtSjCDHGJeBoMAJhDzJfKPhqeY4PoTFN3JBh1mhVVe3uqTiMWsTELJhNk5hUhaV1j2m1TRhNfXfLkGzHKjECdgS",
  "key11": "4KEUeDXtFD1HyUh8YvseqSG3sYVc7g8PKacjk1cco7tCiS8mQ2vPDWx2pjWZ43xYuXY2fz3ke6xfoiarvLwMSTCb",
  "key12": "2X2Xyc6NwvinTB5gpwrZjDAvZ34aDk9A1uL9sqgZkC7YBaq8Q6qwdSX2WMN6T9DVrkAo3NC7ZqnGvUAjg4udMSoK",
  "key13": "2VhySjwm6UbRA8Qt6BASkrWMVL7audxobpk9H7pweimWr7bP4nmDfqqoeBeHdi9yAcrMU6SDp4NQbpmfdVwa6zaM",
  "key14": "qYW3EJesK5wZe4CQJRN4A4XxCdgjSyPdQmEfdWH7FzYceH9AR1XnkhWQ8XQbHqQpYVRa4khLzUJvpkKxCFPdVZU",
  "key15": "5axs7NSJBCd8TU7HAQ5tBaEqhCwGvy5qbXDkio967PRr3rFfTdn5CgsSTAfShbHbEZL61FxvvjymRQNUxG6YrovW",
  "key16": "4wcN3mXYsM9ZtKDaj2PgmXd9QrAtAdLyqmuRNw7wMqRJkUY2MYUptLcBTgyz6Zdnmu25oinZDS4EzJVasDZNZLW6",
  "key17": "55rbDqMZmunAmUkqAMgmo5vNonvCivnaNberzmdmymFBnUpePVpGxG7Hiy4pFkSPwK21e1ZBzQqP7WnQfqfCGoTa",
  "key18": "4xXAerZQPzAH3NHXyKBno8aD8wr71DUvRsrzh3aR22dBdiJZf3wSugjsKeqkGoJapEnPzN8LFMUdLWRFxXN1c16q",
  "key19": "5vpQAPGHgmP1CXFnWFBG3RzK5q9uqNwYUUJcJKyQN9o41WZTeBaMEUecgTaP5QWL62RYrvBW18uPpevbSAEKs8Y7",
  "key20": "4xSKeWhDXPZtty64woQFy321VnhUMhkjCAJXuZcoDJMVeD6ZpsuRsGAEvy8cxQh53B4SA5mFeqpms7Q9PJkkX7Kd",
  "key21": "3KxPHZvmFHUVpempwbbgHCdeTtsLfRJQMqNe38gxtSGKYL8N1T8GMST9LsTeLpADChTwjbRZeC5hR879aMxdKgeD",
  "key22": "YP87qikPfYaUut7LX5BruCkAUAcMuT5TG4AbuBJHFvJCJdyvzPMPBipy3vTpb6BDEZVAqFACVWMFNSTdUWn77Wt",
  "key23": "5oxLdGANQjWxufqucVjeiuoaMCG3ucxMGRtWebdsorK33ijmTfZe6uQwEU3pyMUvc9QejVSnBm2k6Vo9VRw4LZ6s",
  "key24": "gFpp5v97vU9uKidSrfMpWNHy6ibb6Tc3xHP26znht83wgoKw2m5MBcZ9CbQKk2CuSsmFAV6BoekicgtrC9eRJhN",
  "key25": "33PcZYueg7J31YigbzsJvK1Q7vVzk9VhQ7xGRy9p9fNpzopKQxRFQVEjc7phhfoxyFUuMWc1phda1wEGmjEPMbnX",
  "key26": "2tgYMFo8P2CMrhwrKfL6Wpvr7haLNzupMsxCNNPw4G8ZijDdBsLbaqCQ5nLDZerA5khXQbmujgDhgsUaWfDG2QjH",
  "key27": "35krCG7N2nhH6TFDajrbRWEEFCQP54uJMZk4E9FNNQXxQcfr7LXbBakx3Aw43bhbuEZYHVzRLjUwa9bqUbwF4PVz",
  "key28": "4HpLZa25FYy6M9rreVygn4V1YZKVuLC9Kp5hdgfi32JdRTWUBvfQjh6kY6U2M4QDczskfR5CrGDrTYCqdfywxPyR",
  "key29": "2DLqZLqR5SbbGDkf1s6moof34QkEGKNJZY58Bb7BcKh8QzDUXHFdVxVYfPN3kLgrPRRCdUkw2S1gje5VQP5rz4Tf",
  "key30": "32wDG9kVNHdaa9yd2QUNYYzK2hvMzrtBjWqUTbZQxSK4rTBWbVLFnJrUYg1Qs947LFiBDo6PiApzkXhzXz5byLJb",
  "key31": "2BgPKKKVV3usNopdJQQw6T5h7hwRC1BUsmaDZydEXbAhRasmVUTL5bFWLaFnYf6wKPmMLcutS8GAnZA9VxmWwGu1",
  "key32": "4TXGx628EUqNtSJmYNwhc4bLj1eNLEr1594s68pX4SMichY5ULnunLjmtWFHaKSheLYXnprZbzLCZygS5VC3iZXq",
  "key33": "52K2Xy86E4CzLFBsbhacvAWFW46ugL4hygTkNnFKCBQ9QG1BQsoNow3qZ3WQeYyLpWWbwifJLpsi8iu96PxcqLuR",
  "key34": "4BmUUQP2oJTkg3DbmeasvZD7YQbvQxQE2P8aDaWQHYZ5ffuTvxP7jdFxFbnW5NXVBYAjH1vfKLnx68XtPGu44V2E",
  "key35": "5jCvPHatSBVxNR2Nv9Hm699QCWY5ai5AU4uJBCAkttbqVw56AFHyjcDxaZXYYDj1vQAYrZCa6nppqGH1cz4JJVC8",
  "key36": "595AFDQ5BiaTjCCJVJnNbxKVYSig5xmFJRMdopXoEAnkCoUhFM4v5Mxm7Gr5wWxjN8dmjNxjYZA8tVCRRwive7pE",
  "key37": "2fsqtiNSUN46AJrRQYzDWVRetQYBK4JnCaW8gk6cWZtWCAuvuXbMBxZXmEycZJmrHZEWhuR5F2t9EJCciPEYGtY6",
  "key38": "64EPwXZ2qken2Fku7MYJsS2hWzQ8fys3tove19p3yeD7ztjqNg6us3qrmCFJFp2fQbJfY6Rzp79fv6ptZ8SkhMHs",
  "key39": "bXJqXFCjPqpA7e7CTUETcokGXSVFQHfQfTos3kc3WA4d1zPR4kYRr9FB5aoMkkN23knV8CtjHnAuVT2nGpU6UXb",
  "key40": "PypSVuUQrBtciSDzGfcvXx3D1bapc3odsKvpW1xou6h3U38jkVSDXGkQpgdEEw9DRMh1i2fTsDHkrPK289hoZYm",
  "key41": "3C8Hcyys2SCSczsiF5ShukQxyXmrpdKucsf6j6oYk1nAeJ1V65gBVP2pX4yXc9oppDx62yX14eUNknxpaGByGfqx"
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
