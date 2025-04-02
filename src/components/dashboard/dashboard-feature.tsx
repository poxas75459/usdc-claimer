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
    "2ieCwFjfNQSg4eJ6P7tDfawBSVnWwkfM12NdaojBVhE7B9bvw7vhW9dtG4FqGNWU5gpQRRisYhrJE3gkAmvuFs6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NKMWF6HYshfUK9Ej7R9fnB8pZ9xXSWqKzqoTJXJBmUHUb39w1qHKdmcu4Fo4v6YbyvzL8vSb1xDi4CAXDBHRXP",
  "key1": "5gyVc1cE85eheS15tGB2w4LCaD84gbDTm2fG51pXXHsoPoPDzmBmrkc5ys9v9XvwK3qqDoJVmyHE6NHUbEVggvRh",
  "key2": "ccJaKsrNGR628LVwEgq6m8R3M1ERKgTK34DopwmJvrmQZq4F13zEGDGRuhNCFb69sgyMs1sZAJZZViPBM6wpm9F",
  "key3": "5x214A8Yywdh1CLg5gARMTHHhHPt2AGdpmBSvbQsx1P4vocUJ9vzN8U4NYKeYks4GUZAwrwMpmjGkjhfhuLiwQ22",
  "key4": "5MWfiAgSUZ5JsTM22rWiVxZZtcE9SThACyeAPdzch57UdQWFBCstxYbfhxSJL1L9kywNeD3e3JxnGkpiTHiPsiQF",
  "key5": "4tkPccNo2yD5FQ3qx2VrfKxUu4RbwsqbVXKepa1YhneUpeebVA3WAvRHbu2WWbm2JVzk4wFzE6HGWTPPiujFphGs",
  "key6": "5MLiwdbzHarpwKppi8hHGAkLXCayWQQLSJpvPsyp7oJwqKQ4vJK6t6EQdPX2UqDCVqqWbeG6pWgyibwGfF5Ax4MD",
  "key7": "5vsa3KsXBJ6VzqAqTZkpaGj5fTxjehQkA1rEKbf4FinZrvsJrohsim8wiFRKNX1PvyNFYan7LdwUs6jVkHoMuX5P",
  "key8": "4beToWiVXq5sD7cYPhRUJdPhfyDxKnMmxqv513B35sCUVbdSahKXcrx1gGHKvJFuL7zhKxEmzffVygHDFk4yYiYT",
  "key9": "3dLUeNimpFB69tNWavKDKFK6opa3Sq7Tb7XE6AeQntWKXEneedSwGdawsxyQfHk7nm9EB4G2p3YdC45d2T9yZLpC",
  "key10": "5YYKsmLtWFU355YJ8HdXyHTAToFshpQqVpiGsfJsQvqMjvWwWg836V7DYSjzNd1GSQ3c4j1eGKSxGwMyysphwke1",
  "key11": "589EXAG2312w5etNjhxwaFeNRtYjv9RQJ7LKAo25N171fPsgFArkiR4vXWHZjxWf3Fhe1Qn2BF5g3SHT2t3iPYRC",
  "key12": "3nFgMEkWtmGkuw3TEtHPqTYL9xgrraqn5mqERo85yX52CGh5ciMFRCD1TVvij8PdQtHirQ53DFG7aqB4AFk1fEnd",
  "key13": "Jpu6G7u2kHTiAfgsJqB3GSFz5R7px6NaNoFsZj8JtBFUGNhGoc2B9Qp3AUx7gNmZTePsfaMrpaHXc5VEMFYCAv4",
  "key14": "5pfXwhRpiFRocb6Zu8w4uyRXk14cBEXqjexJvJj4FyZmNeAS6vmZjG1HoCRWaTabmFbsDiXFbp9pbathCrVWkFzB",
  "key15": "28aeKU2nQvZ2qbgtyW8ip6V3i19e2SL4quUxcmHDEywRHWnph2aGLcS17sd4NCcPX3Z1VTui9zx5CH8jheBHQKBH",
  "key16": "4ApzHcUi7QJef1xW3iPCCu1RJmKB4ADR6ZhzKzpTzvUMaXTW6zy6NueN9eRjFrTo7qVtgrQZUmmxRWe27sfbRjuX",
  "key17": "pUajoJppzfJ1JgWHQ6T5EUfTx1WxPfzWzr8Xc1yu4dJvaH4xQSCm2kJf1mwNnJ6Cf3NtejMuAYwVQFxpjruPx3c",
  "key18": "3dxesfumZj27f8SSv2g3AfnUsmEdZaYdDHfWY3XFzmXQoji3icTwYzUExpaiF3LGJknPyJNaUopUZRRx86AqFXrD",
  "key19": "3hWkNhzBGKs8NCUQTexP1EWHUksoTVeLN7toVLqt2sivH95xKCGe4yigVmXLaUwUAirshiUt1djquKh8fAeE3Veh",
  "key20": "zudV7N5GMPVjyACTnaXn9waivFwYGtx5sw5cP5qU4rn3kg5Dz4Ka1AQ7aYFnMECaut19kXotKKjk1PZewCosJNy",
  "key21": "3aQwiyc8BSM6dZgU9ArUEbdjtNvxvS6GUnWAvvdTRS8iJfdDCGwhXXZ7gaaqhdtqbjDJvYJdxkbeDQt5wh1oWFLf",
  "key22": "3ohTkDEtQegnkvu5e7pjaX8jBYisAtS5xqLrPLoPmehP2zB8gEBXeJwRQBoXmg6nZZhop4d5xXAyhyzvfSMxLoSf",
  "key23": "45nJbRZA4f8LVNpmt3TSx9AKr9p6yM7yuFoqDFCeMESw7vfEJhLHhrFEdbqnsnNgQsz3uuUSaBRn1ejXb9f1gqHg",
  "key24": "4LsQ7Lwbmg5yMCQmvHrFyktGfkzMLdu69SRJXu1Rj1mtKYPosHcexVq8Hn7rZe2HB9rcQVa6pPh7pPgBizdtLfN6",
  "key25": "2nayxivHRwfoi3NK67jBo2AMPUzzWgsFwserTvFeqdogtz51rpKp5R3SiFjsKGNXPMH3BJuHrqUTytmmFoFd1fue",
  "key26": "29ASQtFEjfoiY95Mi2dmUNNtwVeUyi9CMq4VDmC8Vcx26xWau5Epd8yARVdWuccgxrg9U7M8EJyFSD9uKvScowUL"
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
