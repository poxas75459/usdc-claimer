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
    "33cJDRcGwW3GnVczkoUbhRJVzacjjdcm7vrzBzCJnB9g9XEnbSWXMfa4kRULtx55WcZeSAXdFqvGjFVdxqr1zEYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqhG8BkBfVtTC3qwK5aEVNW3HMM6N3SNkCbAH87FfrGYvwj8hseSaESuxGmqezL8CKDvbBziW9zsEasUtvz9eR9",
  "key1": "4ZYgSWADMhCZLbjr8xVL7UkRhNkpq9ckUAXVXmwBWzSC1cvRuYkDYdYACFbEZEyfFxcnJJsCJiAhkZ4YzLki4yrs",
  "key2": "5NfZbbTxLFqAp9odM6h41exrKdv6PyiwFigK2rNsvK39AKuehSizk4iWrsyPv4cYMFnZmiZncj7StGdu1LDRzks6",
  "key3": "EdfagnpfUVRFuiPrFeb6oHNG6xNDQ63CALYMBrsYSvmnyZGu13hbrEpMEwnnAy3sPbe4Ly8TBjeGFA1PMj8A6mt",
  "key4": "5iewBRurUDxxQ4eUMpmPPpyQPk2FA1MvTzSuKXWfMWeZgvdCAbzft6VwJGVzHABE6nuVBmriNu3DfwtBZUWFuow7",
  "key5": "HQ4523HbVe7692teCorsGPcjCnECHchKgR27k6vYw6NYRCLJ5ZWpxPL9Gnimu4feKCAVjgxmJh3eF8GGnVjAmHm",
  "key6": "3H1F7XRxu3KpLBHXN4UbVjw2kjPTmf4LD7MKXTig5nsHQ9LZ2dbREgCo5GQDwf3yovYQJ5u9KBteSCpxrFfpTv2g",
  "key7": "52WTefGACUDmZMRBGa3sJtzMJegYd2qsgmMyWSN6NtjSDU7u2dtu4nGNtNa9DBdN4hmaXAVecEUDinAoX1jCpZ5w",
  "key8": "35Cn7uirzGXUgCpMPH4QtNJo8aTDg5qcb27XjuYxhiusgLEfdVizYrJhPh8f211K5V36vN7urZnRKK2118znVeNi",
  "key9": "SGBv4zoF7LVzptc2RZBp1GPxifHoZEimtEJKjCeK9xBack2ow5Wg3HrepSMsGq1x3XtxUqWa5c9Hz2AQJF9C296",
  "key10": "5cqNg8HGf152evEXRBqPCxmteW7qtttWVXyx9spwzevmpHLCsHVrjH12Q5cadDvwyYa99XVMrpeBWCr4H5WuDYLn",
  "key11": "btDZ6t1Byt9zzmxD3czcsu4mTtoyLYaLpdJNBZAz9AUXHaDvn3Qor4wXThiySTaiNqwWko3ZX3UuNyha382B5aS",
  "key12": "2UY7YdVX3B5HbyS6R9mNEo6VvndXDqpcUJw7ZLyfcgEkqQ2gqL2DmDWdYq8TcXdBCzy1XhgoFZRQ3rFp8iWgoMHC",
  "key13": "67dRRqjcR9Zhexf4XZLVHkWhp5ZgGAWaociZfrbgjpsi1vJGWrhSfxdbpA342diEfGCUgm9sdqmQKAgBciYFVyE9",
  "key14": "3NpGZBHtSQVJFAEUdYw2Rn1rKbNdrSAs9oNS48dF2SAVDXqBa9d87j344iADAeyym2SpXh6sBxjbzHvFBe1bjQ9u",
  "key15": "3t5Ff4k8K6RWUKAMDtjXCeG8zubpvUFBsLEC3iphDc6Gavh5pyVoEesyYWt65jcBhHqwH3zS6g6dRtsqVrbkBPFH",
  "key16": "65qqK5DE2iwffXJN6wRauAWxnoC9moG7HQ2vrkcsYan9c7Jy9MhvsAAdt5QazEr7k9wJbDWcxVGyxo3qsmHYT1FG",
  "key17": "5QdLY6JZKjmaAfxPW8BB6Z1ymUTRL6j2p4AYJSQcWmuiBSAc5QtjSkNwRaR4oAH4YR7VxrUe8gGS8XZL71n9E4d6",
  "key18": "5ah6LuwJGxX38ufw6XRKkZ4YujSTsUhxDaXDSin2N8GpTBgqrxyuqV465VanVfpBM8qhBwRvSzyk9KjobPitL9oX",
  "key19": "rALBY6SpfRAoGj3GeKV9LLipuLcF59QhAf4x1vaNF8hjC6qKRFpy4cZCSs22zfQfiuMEvPzq6VxUzZJff9x35Hs",
  "key20": "3A9o3WA5SNJf1UuyyDkj8dHG1UGZCMmduYJYTtZKgv7FbvmetzA8xvM3HuTU4ZfEp1SPwNUhm6v6P4wK6cmSMdP6",
  "key21": "5iK94ucN2WV5kGLyhLqi6DgadKHqt54ULvtuSqsRDKA9uGduwECYceWuikVnitrLtxCWLD2GKm9aPHRD5wHWEF5c",
  "key22": "5NYJmcNHNs2zjHp9bsBVHKKTSNjrjvyEngAYvEwCHf37mNtReR93NvTT4wsm1V2MztFZUs4T7mLGGpcg3L7CW4ao",
  "key23": "2NrLrxDG2G1zbhC39tBYLB2UJK6Tfe1fQSn9J2ajeca44a9fX3Jvg4F1FX6x2CRMhSqJZ2HTZhzzeACZ1cdTho5V",
  "key24": "49KaFjF9BRKFjVfJtT1RroPcwvjkmrAmZef8TEdmzxAMMLsQZ2ZV9qtfJWTqJUVhXwgJrGDcw7ZjyQU4w4u9AnSG",
  "key25": "4bPCpCebvaq32eV6GZJ5NT5MmmV86EHBCghpUEu4GAf6A4gyUDUerkbT9xyo1adZ496jc8vL7JSYfaKpiwSWXZWN",
  "key26": "5hJszD8MkxNZ9GZ4QXzmJGomN7Ry3qmptfHUTF3yLAyFD88qNSch4VV8TYHJCpWEKwzmbPFewUC6BHNxGwtkkdRS",
  "key27": "2ZKTogxZZkxtYNNad2HQ47NdEwLMixMfr2SxS26ugeggHqAM8LniEpy7DLzxKSE6Lmjeh7296BR2Jusv34UwModp",
  "key28": "CgDqu177PXBrzk1fhToMZzV3RubbvTLJxRDwMUeNK53DS3bh7BBGPsx1UnaFtC3gjsErDBqVc1B7w5mKPgyyzdm",
  "key29": "CEX9LZdV1CZn7p5cTXiEFA96voQEJnMmD1qKPeooNArcjcGPKL1yJBf2ddPuUijkmCXN6LP5HNroNMiM4FGis1A",
  "key30": "2YqrcWR5Lkr74nwD87n67QiWFtQj5NWAdwK1a6N1rCAddqtJ5n38bGpGpPst25zxRt63smYo1P9i7nG1U4VUeY9z"
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
