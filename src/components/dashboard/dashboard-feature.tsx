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
    "2R7U8BeCVbtA4ZG8uSUxfS39TA9WGARQyRu7tnbfMTGk9yYz3KKNYKouafwQGfUfkWL6kZJRidLpNMm86UBYG8os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBRNZdQGN6EGBWpq2z6szuYq4zDyehkNkyzT1URgR9tpGbDAY9AorTt9jo5ECpg2C2havRNBUKP6bLJ2XkumEH5",
  "key1": "4AB2u7TepSt9L97Sj3fywhVYdf3M7KjfCj9eMmi2rd4ySz1QVmsi8WMaVypcK67Yg9s7ohc72f2vTgu8RUF1H9SE",
  "key2": "2XF7cM277mCrXAy2s7zzd2PQAypKrCBAiS6z6MjoCyoZmZS8bb9qh18pUPYGSNrmz2ErMA1eqzeMk7xMqjLRwLqX",
  "key3": "3FrmhLzbdRc2btxA1QTnDJGyFAGBZGee2czHU9aYaodA3PstQzVndRGqR55d8fAwcKQdj5P8y95rPPfVQ9UxA7sR",
  "key4": "48kzzMdRLBiaFDuCBVUSHJyXZ3s6ZPZ9EcCgJgkvqW7woq7WnBSCUnQRxg1z2N3eJhieadMVySiYYGUkTs4jjsQC",
  "key5": "3qRPc5mdCq4ju2bmn392vgZnmgCuNrq6HnTYwZbbPs5jCUDJsEhFFhudy2EdkwRmf91qFgAyr6mbRCsjWDo9bVCr",
  "key6": "5YXtDjX8XK2vyu77PgNT7MA6qpG3P7oDs7c93MUNsvLHvBriHXnr2NbqP1DL8AqUXDucwgX5BYgBSatJM69WgKap",
  "key7": "jKw8PUwuBetMM6cFR466YjYM4WpNQWtCFA1qGZRN7QtKEspx2zzywMenkyFkJqbAhw6L1BN2Df5PAJyLnQqh45G",
  "key8": "9exJpBt9A9DEWZb6jT2H2WbNFxmtQ7tWMpNNmygj1AodQyfuWVnJiDatzNrdo8pCYdR1FBwFJZgC8cH1QpbyYAW",
  "key9": "2QpELau26ixpKBdMsNjPSrAAtGqvX2AjDMkNjLJ9EH8dTtzjLbdNrQtv5A3rRax1sVNaYUFoovZDykXTCyjNDipt",
  "key10": "3JDepssUAMsFEfrHjAnSasTkYSqrorN7ELatCQViNY5TCDLjsXvQFLh5GE2nKs4W4QJLZ3B4oPZRqpRgrX3CE6Sq",
  "key11": "3pDzkEHSXg3N8bL6u9mGZUmck4Khb9uf3fhH99Qn4dsPmj4jDEyHdHNKyc7hvhdiPHNJR6wZJiDuHfWuxjGdR86U",
  "key12": "3z1MqM1KCAp9PQPjKUZ8KhrbVynfqmYXp8WnFdDujZL2qwvubpsHLjpbeih6ugfcEqRkuQLRsSZ3Fk7yA3dBJrRs",
  "key13": "4uJLHZGSimqpwyjR7AwWS1MG2JodWmkQPhApts1wHagqEJbXuLgisiKKb1NfNn9aaZTXkbTmGs2dXminWUAGGTWn",
  "key14": "4C6m1QEVbSif9o45jHwN96pr4vdMoXyMBtMpG18NynCnFA7VYwdx2rqcd6e5X5JVBD5Cq2tpyfvQsZ9TLEvvzVwi",
  "key15": "KuGUEqfwyBG6MNw9nrmkVxQ2Jg7cdwMyWFVH6HQvfW2kNATWFpueb6hsWpk634tQHYETLf2UD84BrYgD7sWkYck",
  "key16": "2dc1Z4zR1a5ogByoFq5bAwgY3NUA7bLfjMcviM81uV7RXru5NavwR5EC732HzaMKn7brXWnvNnHEKZxk8mXae6ic",
  "key17": "FSHjhMKwymLpWnhEMz9oVDidQ1VL8ZVGB7oescp88zih9MGqGMkZKF9FHhu5oPFY6QpBYYWzJCpZWT9UA6eXX7G",
  "key18": "27bujiCrZQf2WsazTN5797yJDfMjsYTqHuk73EvdFsr5HCJBjv8nGqJ853KoghjXtW6br9eC9sZdpHXFxy5XJ7Xs",
  "key19": "272eczeKuaecRbPjJm7GDsvWQxiwkV6r83SWFV6yYmzrrYEfzS1suJjWrCNnPZPST9tV7ag6DEz57Y7DxoqDRFDD",
  "key20": "3GoFzk5rWXpMkL2PiH4U4t2YfE138Mp2G7BavdLn2pTES2LVX2fqvRFHSozmJn8RLaSqjUQokfLXqpYyTuQ6LXdJ",
  "key21": "29fEUk4g9GkyrsdCvhLzTG8AGQGtmsECtMcm6aNryoC4shYQK6jiSQcJGzVsti8i64Ae7i5kGTWK6WhSUysVJoHV",
  "key22": "KVcqYRmukTVpKkf2oteWoVs1zUJrC9dTJtMjHsGN4Xc2HtD4Zd8LJdQh2SizSTLb2XT7JehPvZak2v4jw4oNaD2",
  "key23": "45aYQ3WD1BkGGcdnaRz6XJDNKGkjzBdu5TB1jWNAG2SK2cKhjYy99PVQLhP6muh3gGquiN1Utfc6gx5uxPHaGUsW",
  "key24": "5qExWv9Yxb3nw1EWh46xZdUc4WtWCx3tvBxA5id6uta96M2ma8snjPN5LtneK3M2gURJBGQmnf3qP9mtmeGQ8WKQ",
  "key25": "pMdGG6HWcLzEtA3TxakFhTtLevsRa36kgNJRJ62cfv1ifDzK4iS4c5hgkHAnNbs42KjVzwg5EqoMB9GwZAjm3mo",
  "key26": "qeMHkWBSQTMgtgF8pbsVBhzqnaZUgmmQyX7erQgBDq1xBhukBt8ZMKfZME7AUVs1eL9y7uDmCh4mburvvgafeVj",
  "key27": "3oxBEjCChpqzZjkq4cUX6pDrbHMGNbsunnkgxiWR8Y9tDqgJWGDrtuKwvDdtfhsmDsDgQu71omfmRaJbnht2t6Ed",
  "key28": "3Kffpo6sa5PB9hhf22JKmPFrFAHCt1UmRezrnpt3tptscdLs9yD2KekxxeodGhM9VktBzB8YK5UtmAMFiTaxMvHB",
  "key29": "3WmvkNL9adMRgtejnYSpZXwSUvLvtTateKRngWzK4jYeZgGTzJxTi2SeDo8t2jv8s8znL1iLrgFG7evnQvH3SoA8",
  "key30": "38aQGkzpRSSWznJPvZ2R1BRMLs9CtyknjfjpN7tJKHkuwFbRrXv7F6QTMSJFq5dGPCPmQ7XgubkLZmgZkykNtL3h",
  "key31": "2Vk9XzbtvRF4U2YL1qoibhjfT3KRbKUjogwPJggTRoY4vq3XQtC8DPC4t57Uxk56vGRC5ojPFJUisT4zuonT77d3",
  "key32": "afPSMSataDG3VfAZNFQpeNPsK7HRyFdy3XRncGNbWFS8az5QS4TLspTT2N3ThApdqYwpFEpB2q1BC7ogJFAJsyj",
  "key33": "4Hqvu89LR16RK79tdnpKUy5Ln5kyLcPBGAxVWEiLNAW8dTTtw6KorHaBeuvo9ZRKaoo9T7x3S7HXpnzhNLiTfoc",
  "key34": "64aoNRi3Bg8WzSKfF47b6XmzfFfFyR7A3zaNinJav9RBy8r5XtWfW2jDTga23deXQajH8Sy1i5gzqZkfDnPt3oby",
  "key35": "3xxopqmN7fCu5f2LxyW9nUHoxoEJg5eB24Dx8uAetaWTSzW9KFp1DcrtHeTP5dUtb1SQ2FWZRdxgHLc9JU5jsZRK",
  "key36": "5u9E3mp79oauFJfLB3CQ3X2a55RETFJknWYa1uFo9wiFXSNXHyfHdUwQU35sS1xwW8qG3XD7dt7FZgTrB1p6M7bH",
  "key37": "67Piz51jznvViXF6FUGyYQAeSn4dkjiBs18dw1A9LPjnv8rDbZxyZiud2PZ49xBKz2kYqeRfTfa4ZzLsnzrJp7Uo",
  "key38": "5QapKA9ZSK9PHLVRcC4hx2sgFfZHP4DDd1J9PzqmHaV7CV6RZn37jEjTG8vTeS8oj5FS7hQDC7zByP4ANinTs9jY",
  "key39": "4thqNiwY5Y2Wqt24GkVLc3t8wWnmH4eoApBNK6K9mYxExfMuyZhZ6JxzZsxZ8N8dYSDr9Teo128btQBnjr8Vo5qK",
  "key40": "ikGXsBvUeLShvYBmgszSGfJk97q6R71yktUUgmntaGTmC3VQJ9egSP6NTGq5CKSsi5EqaSRhPzcgcZ3zSsvhhfS",
  "key41": "5FHsch1zGrDF5tTC7XyFWH6CQugyriNTWqvaB1sjQrcvXAgw8cBbCkcLZK1sCxohk4Y57KkZ2KnmLUSFXssQ3GKD"
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
