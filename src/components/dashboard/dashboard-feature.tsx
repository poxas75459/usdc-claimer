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
    "5Nvc9cPnS4ZtLeNp77vkeud8FiVnhL3zJLmSrFMSj9eZyq1RM7W1dxsieKWTp2gKjEhW7i83hZr6hfAzWKAz484z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewYD96ty3WaSzrADPfkV7PY2xFhUcvnMndy5gZrja7X8YDR3tT2hHHkjn6yECoRQoPmaQEbvkSDkaU2kzaTfRp2",
  "key1": "5uzCmTd1DTTFBTcmqWyueTd4US3LhXZptrvnhHbxteWBVfkRLJXtBgHiZaxgrpdDkrKZVRV2Af3gkJNMdy5gWzvR",
  "key2": "2ajxKNSH2fFqSrYtMujdiZw3DhLgFX9kkMu7oVLW1K6tmWz7wjEvvZGdN1uy24stgqEFrWa5P9n5FaGgrck7NtES",
  "key3": "3pPg6gUWQ2easyGPaX2SJ75tc8ST5C7jVh6nCZHEHQKiUx6rXoDNHK2SbHuLiL9LXNpRntnRrAQu6Ui9qeADy2vL",
  "key4": "2XjDtgKkmSYJxzsyTP7cspqc1hQr7fJjfPKGWtXyMHCnBVvagQCorGpkH4AuShJnvPhuKAeYTZuqMmVoQaJPzRNN",
  "key5": "3YWbEFeJ1UKCU6KBT1E71uHVtkrg5jPUt1Xm5P2cCLpJL2crnQrxwzx7FGM17Z6vKr2GpPKr4pE8nquYnF7vqMxC",
  "key6": "r3dX5RTcFsFWtnpmb9NRKQ9fUV5i48F6aDFDx9JNz9PcGJCdNyVuFqawV7SvX1RpAJKJtsYoLhYCSNfZ4ZNgRB6",
  "key7": "2cnnMZyaJrRqLznYJD6NcYGduDQW8SJ5zinHumYb9nVodiraYJVVAv5Axa2hVvqWR6H4ggp6AjasfXTmLNc5g6uy",
  "key8": "5EkW64paALg8Yg1XkpDvyrRSGoLQvhgWHs2wtBCgqVgKs7b1Apa5kZv76fSUx7Ve9vC2joGycP2NguHsLUgzry6L",
  "key9": "669Dgpok9UayAuhiP1UcHUT5TNg7r9K5XdQjcbfubJU5yefHFsBjxmpb2zSG2Ehj9f7PDcD7jqSkGqeAcxCHarSm",
  "key10": "4J8zXP4jEq32z8uDkJuFichg3F3QBcudtmteugZd3cgHtbpLoMmkDAvdy7vEgV628b1EhkriNwKz3xFcHQq72BQh",
  "key11": "5UN1trgQhJijNBt1cPPPidrAcnLS6KPMu1j7SQNToVdDV2FWVkPEDhpr6YCy8zAi4MPW5wqFhEiTRPKHViF4cXqr",
  "key12": "2LSL6UZ1PnsMtvaaoF7jQo5iL5VtMtivi8EuZ7wfrG8cSDgNeTyerfgr92MB43fX5YrqDyEeT5LkAQWY4JLJUKba",
  "key13": "379MU1Edbq26o7wSJxzGh6UczffXXdJNEn4fhabWHTKH7KTBhmyWj9W29Fm7YARXfs6fgbtZJqLMYB5G5WUkwqVw",
  "key14": "2F7d6teSXG7vGQhY2arKL9TePXaVNhK5U1oh2V3ctupNVtxcWeDYG2Rd9RHJ6gxtbJLRpxN29LMWz8aXumPLHSPm",
  "key15": "2Trc8Fo2t65dqVDXEX1Gf2qc6i94jjkEHz22bobz3Jx9LmpsCYSoGbhv9FHykehskLVyALBvFGoxPe67hwwLg2MU",
  "key16": "618RBTTknCABTGcDqAYJEBnPM5ax6ev217uScWanzEH8CR7qn1fVJ6ojGgE6bSrQn8vkrhsgmk1CZdzMhQxJKD4h",
  "key17": "5odZ14N4rt9gJdQ3ryWtnSyqBYXr8owLdEFxWiqaoh6it8FUoqoP83EAtWuPtCL19HR1gQAsv3Ng629ZkwBXg56W",
  "key18": "5uko6LoAE4YD3XT5FH1niLa2L11g4DTVdtWdsYnB9HiPkmroNWJKYuA79UXrFhJTTNHA4zVbJ4Um5fGSMYkbbmyR",
  "key19": "39nMo6HUpNUmnEmUVkH7vvnDX31P3G1NbKaPKw1S2Wcb1uj1izo6UZ1Mz5egS6iZKN1R4XmsRQVcYB9MASz6ySSD",
  "key20": "EJCpC4WYx3QJVP2eSWjJ9VvGcSzC8Kfj8W7DMkd1jzwcZm8kECdABvEJn2UA28TNd6GT7SEFbKuiCYuCFjnyAng",
  "key21": "4269gzsyhBHhYsJfhjdCZFBqjracqsTvi7nPH6z8eZphpJ1HtLkULiMWMTF7tC6ZzaDDoVJK2DFFzyDWdTo71xeR",
  "key22": "4FmYkjDwBdaCysToRaFBuFFom8FQbrEM7EWrar2C3BdnGTrm7PqQkX5RiGwt6ErQces2ichCUz5K7iKjD1c9aQHP",
  "key23": "4DLXv77Vg6uQgYqSnk5umjGTHD8C3HJBfNxZs5V2WqSNWeciYWfLZRPmAnjF3pXc6DfEfez8E9PrfBnTt8VcBtVd",
  "key24": "GCNg4tRPEDN9ujh1z6wasejEwxuwWjv2sQFbjZcMXkoi5ZjsNNwJBVCEKDMHi6XLJt2EXZaD1yGX7jQFCmpN8gp",
  "key25": "4KLk3SGoSSowo1Epeuk7LzrxLSt2xc6zsH9NroYaKjFf2rdL3CTh4LEyoBhQWPqM3hyc7xeVLJxmNZRsdnGgHS9q",
  "key26": "3Wr53mkZcgZZLPh64meJwfqYf9WqVsjdknyHGSz8n8XTSmd6dJrUiTafEWgqtAkPoZ5fY2Qq5QgHDxEWYU7p5BFo",
  "key27": "2fcpCNcG8LioKbMcxF1yu8sqGtF67uAsLMgicZUtP7uJpQNjr5AHcnd5mbXLUmLpajYhfeyaLV762XHuGju2XDP1",
  "key28": "UrLLSFuAoAHou45hLKF9Q7ssPFbgf9qU48k8PTRertAr7iUerZktxccwxeKMMKviWgLfvhduS8VHmnkN2jaZGT4",
  "key29": "3gY73n2ETcKFZQfGMjTHPKmeUSGZCQUEHkHR6SHN5VjxMUkCuvanEJSPmC29WwcMQJjHXjeijVqdVhdgr8kqNxU7",
  "key30": "4UhVy8cJ2CEeRM3b5DHykSk6DueSwQPFas8U7YRD9nQbg1Le16GXcNSBCGjQDcZodqTMgZRyi1oGjREaKvGt3nbo",
  "key31": "aJdPQnXWagv9xjLHvdQZEQFVwHB8jvKkvz8BCeJF7DwzTzqRb3auqZyZuWj6xMUdbHmcfegMRywQgPXMUxAty1Y",
  "key32": "2yLvBS7y4HfyiQZQzJcHTbck7zRUHgJc6unKTg4bAPAmPYycWcV89TgCqBQKrvs5GAbzLhzKfJShibjYCELGx6h5",
  "key33": "3HLTEMYTja8e9mDo8HRx9vbPU2QCdMTacSCmfVpbV95WdLSynxxP9trR8PY1d9Ve5fY52K2xgLf6aM7ohAHiBRQs",
  "key34": "4JtQAtE5vwPwm67wBAaJuSEWjHozaEVv66Ve7oUwdeTnFRf8ssTJ6aJzbw9GpUu7Hi4NVv8Wc91U9w3cfVkRL3DV",
  "key35": "3zKqDcHty7b1jQoF6hWpLUSURfVpbTNLdurxZJk8BnXBK78sJ1eqHzMBNJiJVSRSgJyTJbMS5HvhbCQFKHm5DArm",
  "key36": "2hyBagJXfxjrdo9GNAEEUqEKKpvyCodSmqfdGXyfbSNeJPiuQ3jmCbPdEGMm5wqDsQswYsXTb19sdtCDDpnKdgzi",
  "key37": "4yA3yNdtDyqcKdZxPNt5ox31JFFDNoCykwmQXtRkG8pNAPwXpmp23Sjj9opYcgBk3w1HQp9Sf8AmCWPWkDVkopks",
  "key38": "5LomfksybXFQGTnNn5AA4Fw56nrt4SSJqsPaWRDhZ6SNMXw7whs5wiWxnc16vG4h1JvwFaZAfCL2LM99VwkStBEN",
  "key39": "5jSiCorRw7Yqa8V6jE4y5S9W5nmkhVqdEtHrrdCgS2MAB9KaUaRJpfG3gygeg9MDeYsLiX3a1DvvBNHEHQSHkTjp",
  "key40": "3RJu2mryjthjJDMsVKDhYi51NUaH2FttYbMxzQmQtf3yKnxCycAXw3K1DLbFZiP8NRzVzYKTLg7aDVm5qi3sg3rH",
  "key41": "5Mz8Fv8VDrbyEQjPCRoLsMnKJkbMwSEEypP8f6T4GxZehNKyMmjgxtJJVyvkxEeHUBv9BHMXfCidiRFAmYZFVbBp",
  "key42": "4EEKLzRMgec4t2iPmqg2NU1SHiU8cnV5Loqet2gGTEtS6ifsZRbPrMhYYbdkGAEtgJR82Bru12SPTeb3MBm1PVTW",
  "key43": "mzsBB6gksuY8vmS9Cte8jbc7YQUEvJPhMXoSp4QkgrRCn8boj8HuPAhsYUf5ty98jCeXXeixvvPaR5XtwdY3ykf",
  "key44": "2eAgDx9Bz4wABAXyfdtj5xyxRabCAr58NVNk9B7inakSUQR9CWmGenzpsxk3XSJxK4vfF751micwjk3KG8BoUNw5",
  "key45": "3GYv1bFZkiSwxSxesArzANZrzFpE3GFQH7zeqnw2HUEtsBFoFcff9WJFDKJ7RxrBoWeT1UxvaQpS2RhKKSKFuTdU",
  "key46": "TpcrTSSyBmPQ1m1sG7WzSVwDjR9GsjJg6DDETPcesYoxjQwAcneFrWirVZcvhZEPzXRPaWq73EmfU23qtA5cVXg",
  "key47": "25y3JmejV3rPygRKMUQ7WvCpUUhjAyv5emDMG2fkGFnaP6wHhTTFBYLMEqdZtZieJDp7h6ccpiULLEK1y8Ko1Nag"
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
