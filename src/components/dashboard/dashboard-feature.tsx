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
    "B2afwi6CRfJywh9UxX3BScHMxsLJNh4SXA42nZaDzQzhWkFHzUvrANkPvCndftrKh5y3zgxwQUDx8jnmm7wawzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QQkxia57e1wmZVorKWDKX773xbe1HQmoyLBfMCERyHcr4P7vMbuPcDkDC67br419ENZZCtnJcp4WgraoPVeRc7",
  "key1": "toWTuRXUXeTGTKbn2bBYHceK6k3SU86H7LjML3Apt2MiwAApvJ4b93e1ceoiSnCzCAoyJ5ELC6MbzKarirTnbYc",
  "key2": "4m5933cVgxnqUNpM1XKLQy4oUUsz8gTyBqXGfy9WJrevS4VxMY8QBYhSSQ5EMDjZhyuzzUQLVZvDm4rS6Kr1MkHj",
  "key3": "2zrHN4u7R69ihsoCdjVxwTMjG5Tv1RPu8bc5bHEXuiKvsydPRdmJa7PTLC7atQ9TqmnzikbsshvAHuhc6Ema8moV",
  "key4": "4i4Ja97yTC1cr97YRprjDuMWtd57RxfY1KVVhNmnktFpYvyyxy2fLE5vscA5s3DQmCMKujsvpsMotJew6Z35v9Mt",
  "key5": "2KSdQiVq61dKQE6ymeNCK266NhavhHwLYZcHXU7ebJfDxdhqhQCJvwmb2JW2TGPAfXTo2B9DnLiLusYq61PTZFh1",
  "key6": "2FTcaeiwf6vcZN2981GJb5RVQjk2VwtbdTz519cBwcCGARHywN8eLNyXYTXpayjcn6GtRKT9xYkX8DfxrA8obB9j",
  "key7": "3kN8A3xx57KKB5j2Cpfa3HdduVL7B4GRjfNp3zVtKxzTSN3jWHScvkzJWFJ1hzWKATi81FTNvMGEzjL44AuGbTff",
  "key8": "35m7S8i5j1cDRpiHra6Q6HvUPbyfvtV8zNv6caBYe9r3mox5TwE1bvUbmBJKMCixhvtQcYmNGhqHcnrard33zFQZ",
  "key9": "4NvNJqdVvRjgBNy3E93L4DMeRtwxtYCC3xfNoh8RczjneCVd4NQRUbZJ7k7x8gWUa9NxjDeT8Vi6izDjPPkc9EWW",
  "key10": "3hwfeHCvKXYAtvKRPpphFBJR3WzTmKVkPFfGAkLxBZMENT3opnRDxa1mF1tSa4RVReVbf8K6DPMXSUDDrzhPKZWp",
  "key11": "4Y1EahMBM6Notz8wXm5sjMEu3igV4o5m3tYnHWW7uQyaWR1HfvXHKwSg3qwxApx4mb7dFrfbw1zDWydme5YCSE2z",
  "key12": "4uGX66QqVwtVZ4QJYTp3uCv41JreU5Ky85nFKJVTaNiirpXeHKuSG7bbjRW4PRnrvp4GQq2XDyvcDA79tiQeRd5x",
  "key13": "5VwMpJhPA75jo4zp8JNKg5P115PPWEKDBoCCYNictAJgQzxK4yPV2rcEosrPTTyGxq4V5i1NFJ41KVJt5PV5Nx2c",
  "key14": "4kCh8PRbbWh38wTQywjYMaTyjxG2XDc1YFfNMfHF8DaAFQud7W62pmDFrVp3vrR2DVTmMxsNGXMgFAFEMpPZrhLw",
  "key15": "Ns2dD9C8fvncXNCCVuW5Fhhb6jGGJ98uCfrqrr2vpRcQEHLo7GgFfic7CAVdcDbYsobL3YsQHsd8Yh72X9ti183",
  "key16": "57jTxZvrXgZwefgxFvTtTDfh4o8okGWS9k1JKtCCqNttqcSkgCg8rS3AiGLjeLwwpatZxgUKXpNCWt596qPsgJ6S",
  "key17": "56dXkzjZF5Z2esQGB495zkYYPHpojBVNdkeBZaFiCRWgBSKf6Lo117R29bGXcRjcaoNZ3K7uaG5vZ6c5vFtRD56K",
  "key18": "3HRcZL8Tjt4paLWPxMk3saNj4cmEqMbzboGjAR3XATBp4puy4TN5mrvEQf2KBNkooE4R4p5T81A1Vw1amFaTh2yk",
  "key19": "5iBZo2NNaJyrcBUfvTeY5KQz6xipbAzyRm44AbZGuYYda3M4jfbQGM3HtPXhev3ZG5AUUqQRHBcvE19orTLAabaz",
  "key20": "4Xigi8abjSSUFkrnYf6NcNhmojFjznmBuh6yeZsNXL2cCFX4DbQ5Lbxip8SkpwC5eNMDt3c77YKn2VU3mh7is8cw",
  "key21": "64BDZfaxN8YHY5VC2a3icsQ4G8zEPET1fb7LvNWpZPdKCZUAs1mA39tmf5tmHgC5C8nqc87YuYJVbj7n64QjJ8dP",
  "key22": "63M6No4nXXucUEPvzGfdHU3iS6dMUGBzwwpxsBBcVSrLZJjxJe1PDXqFZWQYt3ms7RLUVWvuNqbtbiJc4Fo3mNJy",
  "key23": "asFPvm8cHdx2cteLLgyampsmNLiuHFAgBUa2Evw9iiaAvpRBJzRMZuakVCermXaLgGjp7YgEWN1ACJFtHQ87CCA",
  "key24": "A4HDFcnToq8BYriQqzWtbXAa5ovvxmM7rjHfZA3seNBieBZQsAepkjTfVYs1EyCW125Mb9DTzkXP7UJViGAVk7a",
  "key25": "3SAAWuPEz5EuHya7oiTeaG1KzhHVGhhdqamSUy4LZ2xRBEKAweW7TPoaSn9vPRBM1KtCbARKVajpfTAw7r6f1ApR",
  "key26": "Kp1xE1KysJMZob2xztfHJ21dDPquyZyiz5qw76kKZ5awhuCSEUEHJtnWCoEUk3T2KpKLmAyqbFCTjjgiUfMULJY",
  "key27": "cMynobiVZJPtJ7oS7K5DFRWYLBr8bKXbByHTm6LJxgoBXi6n8wSmq7JuDvusjpt8sup2sqxLV3hVPGp6C5dpsn2",
  "key28": "3ynEJr7Y4vTPeVbd8xsdfvsbLqgWhJgT2iK1nZckQP6W4eev3a69FUqNHFi6c2rJaNgknJJfeYjoymy3pTxP6zY4",
  "key29": "4hNnCtZpJrtr3BSTMNhMVBngKkXa1tdL3HwVydVod7QfupEB3exp6ANvNap1TwJ31h4EsCWcHemoxBSMxKguxhPn",
  "key30": "3utwBgKK5wwz9bX4SfgMeWDihoq17gYr5rdjqe2cr6yAQXCZmjugQpE4goWM42cTcLy55T4ZwAdGJCtS5vGDfVKd",
  "key31": "2uj94ZxgmcamAn9P2ues6SACwRvkFYi6ZdZXVLzWfzvGKbkdKP1FroBo2nzg16xCmwTtLP11PDXfULWnQoHcewqR",
  "key32": "zJsbAQofY7vi2HmCuhfQtzSP3u41mdXTAYovGHFdnw51bFuKfaPG76cq4NugzQtVfdr65oVDzHvq2qNYBKBwno3",
  "key33": "2UcB2QEScr4EeoSssnNTA4ANXvbkW8MuyWuGta6GqTPohy1xQBtgJtGQf4DcHnbvri9xvm9M16CGH9vVrp14xeSH"
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
