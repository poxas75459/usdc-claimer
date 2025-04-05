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
    "2ak78Z9FRAkWUVUbvfu5bRkhhVHrraACefwUUsLGH9TeojR78fpCYjcHc7W4GvRgC8iErmvQ6MZCPyHA2QxbLnzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTM6yt8v5PRmSmZsGxFWUyS6cMZkNw19FYu5Tvofb1KxyNDUZbDkT4xVCDcBeWqKCdDCenLKnppcJwdXrcmQopm",
  "key1": "4aFVbbUy4rUXixxjxVZsj9uEUpW73QY4TLMwmkZquMRpgsHrCFD1vNLTgDdQTrbgdZxMUCgAN8MwdxTiS1nozHNu",
  "key2": "5P3WFNmbA8ZrUsuFheat8b1wysdxF5tPDzTjRENxT4Q55kM4HQ2sHGmU1G3dnStCv39uCLZ7SwD2us9zmZh5joMv",
  "key3": "56sQLfJV8LPXEtGKQLCtXdMGPxnJ5rXdswGNUybiRWJtxF65dihJhwstTcgrjVHTxpD835hU9Kfe39QG6goSBKrj",
  "key4": "4VVTSfHZWbEA3Wcxv419T9sN69qFhidpMKkhBMAK8Z27WdpBFCf634Jmk3eemtvqmULPMn7jsU9i9D4L8cfrtC1K",
  "key5": "3Lv82U1KGqHBnJhzEcNDpN5fiPU5HVcdxFsLSZn5N5Zzidt5gPbPSAePCDLggCAeV6udn7uxRm4BRqA6MFoo69zF",
  "key6": "288YWL5EUQyv8qAXTs7VE1PtnPeZxRpzvU28VTi8vaVAn3XKZkKRXXhkfwzu6K6d3Yd348gr2JcyfGLeW1Umw2eH",
  "key7": "46TEaA6EeVQgHyYrA6bnEjSvs8LGq7Y9oB54whL5zD9HvaNpJt4mRLp9W8TJCeTsEkdK5mR2FiijdDqe6cp3SPpW",
  "key8": "25zLJk91QYPUKznosFbetiUcrtmmi7qz72vfH2rsQXeps7yLrDwvRG1R17R3Cxg54feZ7dQMmBZMAQgaLexCTAPd",
  "key9": "4FUDpdFzCwD8KJstA64LMHdzmUY8UCJM39HpTshmVzVgiVw2ZNqbpWGhr3jaFYPKxnuMx5vjTAomR9BbNUYngN2i",
  "key10": "NfciUdtPnxnWvvEnh956wm1L8tDrKENiJDB4TnYuv9j2AZARn4KBMWcqnQiMArh6pYqSTf5HpaRjnhtpPY2h46R",
  "key11": "3STjku3ehbkDVn49s9NxvDz8VDnzzznYhRSWW3nDXkYn55YeLpwP2MWbDfDBwUL1kZ59D4PYZhjy6X5hJNs76bzQ",
  "key12": "3zbgZWkjtXgDsRSbgF8XtLE14fgKx9dKsLdpkn62gWEfoFde9S7eyScq1UqHUTot4Siux8iGtgo6LjFq9mP7ks4v",
  "key13": "3wqskpQHCFhhApYNa2Ny6hH7T25RBuzGXFZ77FSM5o3wV4fxW6PfTkiuykyBFaiMZfRkUQjEwS16vTQHkt8W1ku",
  "key14": "3DRuMWFtPqr8L1QnqykbfugLy9uRg1YmfDV7tKrtwXkKqpHUewBnFzC3sJpMJVnziQ7DAbA6xr6WCdLKF4gnyzjg",
  "key15": "hRWmeEpq1shPuyqrJUX2kTee9hV9v5j7XcGwJBwjDQmGYV7aGcEAkpd2N6um8uYahnmjysW48DhCDVFEcEf8Kmv",
  "key16": "c4Y5pnWHJYSe3zTbkxWRhZUnKqG9LA3xYV4CAccUdW6atkMHEEF1QQBGbJhvVB369S4Ci5Xa96tPFXRnn9JQwyu",
  "key17": "3s7J94bXRLH9nNNBNkW2vsV3QqwsCfreQdyjuaGxkjwtHQ5WsoktCkdFPQ197viZJm9cQrQjdpv1ETBXSC6dahT9",
  "key18": "9SaGihjvaGQ9nhbVzvRRDxfdtDHDrBqVhgYgrReWxhLmcSjr6V82FbHELzBjq5m15SLjUKqDFipxTqzCXF31S2B",
  "key19": "234uunovwvsr8h16WtPSHCae6WLVgcUqcenjANRR67QJy37HS5SzNSDGRGTni2Yed21vP3YnRCm1e4YbLxxV73ry",
  "key20": "5J3VDohM4CK4r9otjbJBErgEXPUbE62eLkXieyrA5fJQFoTKiDvVYGUA7okvhBraqv3fWprDqaAj7t6FkHreGrXm",
  "key21": "5gHS7N5KJTrshZkSCYcFTSH9b29Sv3etGg6KVNrJUQRtQqNWayVuwkCxzUeZmaxiRrusF57G7JPocY1hS16Y6CtL",
  "key22": "dh6PwS8wQ41rzk57FMSheRELWngdR8tMWMTBnof7t7N69tf8V2PzYfoLezvJCeG56vLRpA9hzqFoG3QyRTXhNfL",
  "key23": "47qm9c2CjucSBudkytAgDHqwFj9hGV7uMLF1MjnrtmcA77rCGoRBam4o32xoJagKGfnQscyWfVvzQWVbqzeUCF12",
  "key24": "5vMKCZ81MQBU7r9Dj9jGVF4UXCpC9ejaMX1MFcfHqZ76AKjVVJXNCyUrJnRR5WkWnC6KkCfJxHew7eZMS41vsQw",
  "key25": "5574pG67zv8M5qyaNrjri79nPLe5nyTqarNswb2sENfSQC5aHqtxLnUrf8vXFmSqsq2hvYHsfM43VHwWfddKnwqP",
  "key26": "2wWzqKvFABM5PWmGU5kv8mxo8Ur7bkdiRh7CYcr26oL9oAQmb8VZqsd3R1f6e26NrkaxichLi15HVuD93jN3ecKG",
  "key27": "7iuzJSKU6kNGE17213ubXarUK9T4KhKKtYeD6F9fxChYkg5uVDcLDPF2G6Pfs3jpN2x2azBKmFurCJzSCendC4C",
  "key28": "27TNhxWYujv3GdX5jXDTSwsEhUpGCuS6TetPGfeMTXfaHotMEerGdh8rUNAvjS12EhTFye6GDvJUj1FBa5UXLa3j"
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
