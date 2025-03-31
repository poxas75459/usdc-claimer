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
    "64ybYwS53zxaNFqcHviXcTcUsg6BX8Yko3aAymjnNHj3hWhRhkd1ivVQbps9SkzBmBT2TD19BPhXPxEyySiAciep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r81CbARdb7j1mQHzcCAUSSdWHR56PfhnXF9p2MD9z1tpkWXDXZJLtH23pM9noHLpY1iGenth3PsrTzVMSoECjqL",
  "key1": "fj2MKa2VVpe6krFcpKfxsVuzVn1mRAZdHotxMajaWYDrXdncn2nMNjmBoACZ457Zbn3CdEuk8rCifStZoVRRD6W",
  "key2": "3FfJFoayRD7rnfzh4HTGPo9CBuHUMBMYLZdBpseeiYdVXy5BQMUmuKK6WyBWvctJCHoVMvsXBDfYepCu87t35dbk",
  "key3": "5bM5jqytCeYbY54LmDvBDdcoGWrofuAaho1Y5y7vC3tK2q8L1pz2TCUwEWaemAqAtWX7prr8DvXZU5ZoCgs58xfx",
  "key4": "26Yihdu8ErrUcFonnKG76FjMCRXjREjic5rCukveqzFyZyHQCA2Ax14gKbdf8jDtWKjiY6ucNAdz3nGFRpaRaYvm",
  "key5": "5hAiKDF9QMcc5WbeiPvvVUqBZHB7sWn9PbUAPk3j6m9wCVwiHtKjJdHEzS5J3fZePR2iZPb7assxmN3WsU9HjsEG",
  "key6": "5pXzajctTJwPtX9NDnVB1NQ2jw42ontGRoNUQz7hCf1QCNMDxvonshGMPYRvedqLwUwWZpLvwzG2Mjv1hbVYrmJu",
  "key7": "2SmAqJuHZ3uQh6Whs5ZfFAFG4wnGurvi2pHhK7t1hMufBTNZW4aY1zoSFAdSMHL3r2dtUHKquf9ym9JqfLcQyJBv",
  "key8": "4oJb4R6WsPct8vV7wARPcsEEa5m98EbCvdvEYZmZjdzbFrJgFN7WD2rtTsVwzg6DWTNGUC1ATtrDMTrZDVKba9dT",
  "key9": "34McbPXc9Q2EdF1ciFop3ZWa4byPZDYF81wGm9w2SR8ZSL4EyC7Xbu8awbCGpqFSbhoLi6gcTiyvYG8nHV7JcEtN",
  "key10": "3u4LVURdWYtY3yfkcFvGkm5BRvKPf6vsf87FrB77vZJ5Ern6P6iEGtoTRDZ8JSCd8f1tBDiubyKRPJp5HtdBz4Ls",
  "key11": "4aw51QVKrMH4w462GyCmNLDFkGZGpH7tzdPhMDgSV7JfyE8BWATSTtFZpsbMD4Ynpi5baGLAWfSTK91q5jZtngc9",
  "key12": "4UqDNEGPoZpdTNo2Da2Aije7WNbJRxegskKeujVYGsgAqELKBrAKJW3EYted4GNipTZnGBXV75NokgxNqnYgVZke",
  "key13": "2fYGayhM21DKEP6FHAeaazrap2NA8q2UEyGBCatMGe4gTbucMQznp1JrqaZdSwCkqY6tEY9LMEzWMbNXek2PxqKx",
  "key14": "4R5Mvw9Rc1L9y3oM7d4unRNuJsKYdtV29qUHmYgNGjzxLn6yYgpC3mN8wHdBGvpsEEQUhGnWL3XAvGx9Ue9E3NWr",
  "key15": "3cL5G2CXA9RqQkB748vqe3kYAHRyaEXrgR4vkU1DVHHhm9jbRR98UL8VTGgn2yaSDjCDomfUfZpy5BdDxcdtZCBU",
  "key16": "n1cyYtWZoVcRqcVEuWCjj3e5WmGWc4WjyHhGPxVt48Jjh6JKo2eZAtEVEUQY7NFkZrgSPhRqzdoynYmYvR3taKB",
  "key17": "Y219Kjc61hWGXB3i7oJPZEzhxjiXrtHTHtFzQazXaYDXGa9QEmPuUSekLT51EHu9gxmsZkULbpKaR8CoiDuiSCv",
  "key18": "25J3xm497qq3mCWknbypTPPrpa641LS85GLzjENZKnE6ER7RWX3kggRiFcxb8EySkCFVN6B14fPGbNg7FyPZGvfr",
  "key19": "2B2SgBE7dDkECPoxXRwDPdG8CsLS9hHwT9hwU3K3r5KzVc69LUPdc5p25cWRpRL2C6rzC2WFC34CnkTefkAFDBTa",
  "key20": "r4FB8A1dVz9VL87HNZtJQLBjEHriaH1DhDvEUPp5VRXb85vC1phDoupmrQpmMRS9LonxqsYDThCcUfDxeMM6k3n",
  "key21": "4cgrLvRxgRYXiHER8fomQzJ3bCBWbkv66x7PTBoTXngTwFmtq9qVhe6gGh2TmY1q4Ch92MW7BriT3vgBf76bbPVF",
  "key22": "2GMd3zgbemkmu6qoXAxFYYhepqBDDBkpxExs9uQxfZW1dwW69PZnkamqTir9oP7H1WqxbijuZAx4ytY7tkGNFUCJ",
  "key23": "5nfqZcTESV4zrRiq1qRyYsfoPauRYgT4zCU9LigNgXW2pR55Z9ze4WBUd5h3eVwk6saoyx9wkpyBjCcQ8DWGHMPU",
  "key24": "2FJn3wTMHyRRYxrS1GWQpDv2v4QwxFYnCQQdn5JqJbxszRRW6bEJHuX6oYDUBiX93gADvyNjEyxejYSPEbDEfacX",
  "key25": "4j7m8ipNfYjY47hgmAbZTLqKKB7ENWjLAts9uZg5saSJNRJkEUyZHdXxvxdy8JZSKKC3MkDbEvnnTJyPNq9ooMtd",
  "key26": "Cxu2YsaYd5S4g7Fk1HShNg7tZfS5HYQmrLeQP5wZkK9QPNWcULeCKv2Ab5U3BG7DjjqP1hvtwA2q9jwBdg5Z2Eg",
  "key27": "39MpYxcC2kv3kYLqnXdQARj3Tiq5atVktxX3f9bJ1XBYeFkchuokUSgW5MzFsuqN6Sp57Ze8ikoWu9p5Hx9HUkLw",
  "key28": "2JXU99uqgQhyaSdJMidRkx8xJHAg9w194b4mF5HXyXHd1by4jqEvJvrG3Vpo9PBMDTLUggmAWxfDB6pjH2eDpZ2L",
  "key29": "2VLP3EgbX8j8345RaWddwZhHgY4NKsAvHxQvbo3nAHYbHgRPSRyPTGw2gM8dNC1BHm1L2aXwzkgy8LSzN15sTpek",
  "key30": "5jnFKDzYEt19YdJkTC5cQakyUnXoksfAYrZ8kW7n3VS9ud7swigSqCttwcyJuJ4Jn1SXCfpzHduoAeurrtWeYwHs",
  "key31": "671Ur4U29QXszN43F3ZMpwP8vi9yr721qF57weUaiQZDJXUZv24PDmikiQC7GtCZqpfVx82wFEWJB3PXZGrDwF7B"
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
