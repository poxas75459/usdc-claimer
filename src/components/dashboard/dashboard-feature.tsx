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
    "534nwKxFaUUwbRB4kpaKdbxAa2SLBiNX5LK335KdTruNAe2tP44WmTPfFPWDdzfaynrrU3HFhZ5VwLbco71HKGsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S5d6ZcyhCDquAKDtuxD63pYkvQgPdvFJRV8vUNXrsXq38f9jToGj7wdomZvNKz7Dwmnk6UUZvhSnXNytQaf9nNq",
  "key1": "54zJuSaamdh5A8YEFpVmoFYaEE4kG4S6cyyipPkjRFcRDSHpUFXwW7svZ16zLyZRFtRMmZdZWGDCWXDPw8LLUk5i",
  "key2": "5rtJheDeQmffhzTGGnBjSBxFoBGnc3LCuTHfx4MCyZwQt2TbT3EBcnj6spMHysZhuFkVZoQW2DBuFExWvajrZGfJ",
  "key3": "2Z9jquETeFR55uFg9qMXcXcsipkMrsjFaA2Z681nRjVQWPvf4xvkhfNYyA1CyiT4dSWSptWqAWegtMiqCtZN31tV",
  "key4": "55asvDaADVB7ErWwqpDAUYT2enw5paVngsUKwB2aTXrfNPRnYQ8XkEnH1QQQo6jc3pDGkBSrChKvSHiHaZMwZzZY",
  "key5": "5woYrktfMCV5aikk9VGVHGjJdK9MqpXibCxPUdi4NFFzmGi998cHaw8xd8ejccogvVyn8SqozW4SVdPE1ybr8bLc",
  "key6": "3KJj6dDFa3vcXV9ro1MzbFQadpU1JZNKKwPB15u5iL9Mf15Cb58FvY9kH8GHXHmkH6dii8ci7NhgvYuPkx7ey1Qu",
  "key7": "BqYVmnfh9doJ3hZoiLf8Y4NfcfcCF7uS9fGdV59GVPRBSGtKUAaddcZftcVd1RAdnUQRS87Ak981FhSoYy7Mzbd",
  "key8": "4Bku7pP3cnuBnhjZdkSEMWXVxuxBQahX5ZooYZaBQaik5Q5gDJWMn2oGXYKw9qKL6kvsEawkoDZtfxbQxDwtGbeH",
  "key9": "3PzfzzvhKUckTyDhAD1C2wLrcWCZpBd9de1wgce3Qxvtfb9yB3P6wFjSE27UbGBsdkfRdwbfBb6mYHPYCZPHh9Lb",
  "key10": "5J5UihkB1s6goRSh7LZwS44czg6PBnUxsTHniPR3DCFeB82fKw1cqwJRfojCy93joqwr7jbK959PnzDZ6MYdPEDK",
  "key11": "3MMjBgGLR22osn9K3X47ucPdz1Xt9q5fvUdTWjaZfX29d2RXBV2vRGyKRjnk2ZDQ1BWrb5PkkSG7raZaAsRLaMt5",
  "key12": "5zmKge8SygBCqjVmxiEuvNTtZoeBwbk3QTcqqozF9roMuNs3TpXKwh7nkA6Toy963mBv1GR7fys7dnUzXXkCBNz8",
  "key13": "2sjXXWisQTH1mcu14UfA2EgDJkufCuU97AJCp2z4thaM5a7dgCeRv8FawF6Mjyeq46DmneQzAUVCyVTaRw3DtKta",
  "key14": "2cWJPjCTqEQ2TSPnTcDFqSjggdi6xQQmGgbr6Mh2bkMbFZX2Tsc49Z5FwKFiPyADGvuXJ9WC8XMkh3VAL7cs51hq",
  "key15": "54AoYx2TDbNc8EYRZfohjDp95pnagjSXSiWhk18hMXGJLZr9Lq6zhbfnKyYFfHY9614o6grNbowD6FZh8cpdjNzH",
  "key16": "4V8n9gTTtEtMSe8MH9rTEZvpYYQczNf5xL4ZuR3pRNUbHDj6y4BR6Eu4K6skpzxBNnv59DUyWGQVMaacAGRzyYji",
  "key17": "w6nkkqNSaxdwYizpmXJtLPGjSXv8ZoEqjG87r7YC5aKecbkojjDLfNEU8wMpiAN2UDEPCpxFcHbq9EN7oDyHVBU",
  "key18": "5nBDiJw8UpWHDBmbBBDFD9po7EXg8FSZmgzTLFmXhZ11u6ESXqc7VRSb7R6w1MfUKKHDoCwtUBcKK5wT1kffdf3B",
  "key19": "5xatpuqqTprK39xYgj7NZJA52fXYtzwp47VeLpj7mnR24nxbp8XrGp6w4mzgacA4gBEnE83Ww7v4f55BsxiKA4pt",
  "key20": "5iGtLtWsvbWZfLjsiod9TY1eFcq2sQUUdoDK86Nzs1SL5MR69fhxBwA8gTaVZquLC5WR2thBFgyG3h6G6dw8SUXZ",
  "key21": "ZCXZ5GPpjmMkXMPrKKvoHCwFa6jrHpHiMpDmtM5UnhZXyuNNXnqiE5vKtpHJon3xQeAhVPX9dtQ8tigRmdsM3Wy",
  "key22": "2Fu6nKae8RruAEZKquKKiEbxz9Kg1CZWg1uo9hWzgL5ktU6xKSHprUmK8sS34Mq13BQyXKN8VpzMdk3enbTJWJD3",
  "key23": "2eES7URuMFNttX9LcZdESyLyhmrcRHN48QpD1NJjXHaPtBGHxmKq1BgYiGwC8cTf871pJBhAxQZuJknUQpdetmb",
  "key24": "3NgRa9e5JVW8DgZZrNojJeiV4hxsSKGYvC4zumysvL5B1sthhZEPrRQTZdmSb33S2czceiWn4RAiEwLzqF1Sgsd9",
  "key25": "3PdwKxSzJNs8D2YFqcA575T1FTAffbUFAFnVr8TKgh1PX5SEMKdTvpeoHnqCkJkpBViqE9sxEKLhF7denaporogk",
  "key26": "3Frpe3fek7BH2WYesxWiXccAL13wRtQV3uHFWr7dqEPTeywPZXQVUTt278tBh9KnkiKCbKLZ8X6z8FL3EQwpD5Ea",
  "key27": "KbqiQPA4H1KY23da6btYY8BD4Ut1cUrv45yMu3bXEroeJiPxE5fyghxTpnaFtjosUq1zRtMYb7ZA9afkP6deWNb",
  "key28": "4RifBsmgcFMf59sPiZjDLnTU284NUfZfpScmdWjZngUG4MQhRBSjpEZnEHQPsqL26ZdqKLs5a2uyPLvAQSjdchV7",
  "key29": "5orWHWLkmxEGEaJ5Wi76ex9RVGc4f7cciasA9VD2M1r4MHPMijiV3U8AEzbz1s98BDVb6YDPbYawkXv6q8ZrZLov",
  "key30": "5XmSWpDA95odHheDdAK5F1rcgWkfSYHys4E3dQahJBhNtRgUafqsypEXyTry6nYWpuh5CJ8yVNR6QbAjLY18P2Q4",
  "key31": "jX5ybbXRDRZv3oWmEhhNoswyNkrFfzie7EW2Bg5348pviTkCse7zDWAbuEe9jRzxaQiLguLTgUxV2MhJQAboM4j",
  "key32": "2LEixqErXk3Em7tdrYQP23nAi4QAiKuFcZFto88x7DzF29j1npSPRbd4exvLbakxgg1P9tWFB2BacsDjhQmfg93L",
  "key33": "4cnzg1Y8TGgL1bjpbtY9VSViWapY7H8EAsfmPvrZNJQCtjTe1CQBRukHmAoViSM1qnwUCWqa6PQHYsqr6FyaqEaT",
  "key34": "2u9fZr9CvMJ5D8yWMcnSH9Br4iYFbQ7NryXEqvj1swudqPmPwvBu46RhAW48Tkh3n3w1FYn3ZA71CYuVCS4qAtkv",
  "key35": "cVkfX5tiQs6NYikcZ6pgbSYcP5fAX99Ebr8FFMcQfFoBX2xM7xVmM9WirUwiDs11PJAVgQiXo1xBj82zacuB4uB",
  "key36": "tKLQ3kq7fMLBrxv9PKb3fup4Szr9YzjNosAc839aTvJjsDFfpxWidie6CG7yugY9Njvik7uG1Q8t9ckf8fLGaV4",
  "key37": "5seYJeUM6idhrAQj6Lzw7Lo2FeWPdSpP7gJVbX35SYU94nZfdyBRVu7JJJcccHVjmoqYDarndu2vmuxFBEPGoiXL",
  "key38": "2wC5J854hiFbuKnwj3biKynpjFoU8Gkwrb4VJ6YHk83xeDadRD617MCjNHCvp3VyhbmrUBjHkv1hsLtZMvzC1ngQ",
  "key39": "5dgVkcJKBzJ5eKGXaMeJRPamGhuqyNAixa6MMyBKNUez5j9QkL2zwLrun3hRz97VMeDzGDVgaBNmn9nxpB5psaAw",
  "key40": "2LAwcNHdk7mG1XHs3iBRcVgKBMhPzecyP83NPN9byfvc9Z2sTrJidysCjhuNgAUeFPtraSGKBqCGFgQRU48ofwj4",
  "key41": "5QuAkE93pGA8qRu66wTrc5CAJuvaWtc958tNtshBqHoZhwrRbu3DNkExk6Y1wTDuWGXjUW5RpjX3t8AZ7Z2x6fAy",
  "key42": "4mXyNraX7U4AG2ZCPGbybGiBE5Jbiuoe79RfZU8RfMW7z9M6w7bkUpQyw6mhHE3zb35ZP7KqW1UCsDTWxsrvyxQC"
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
