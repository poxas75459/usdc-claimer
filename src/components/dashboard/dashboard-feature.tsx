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
    "3i2BpZ9r5VGWcYrpzUhRN2PUTr8NdvRosreESBNF7DVYqxEqHKM2ugTb3ZXvNJjHaEt1Vf1aQgEd8gNdqhnW4RU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zA5hiTepbukd8d4DxJpsighV49medm9CeV4PXcPY2XGhn6fgQm8u1FwuVkCc4ApMZN9CSLxCFmnBJ6seSfWgMR9",
  "key1": "99xXRCdZzUstmSaSVfXgs4iDehfGhsxR4jYM8dE2u5FswtdLSX5anLZiNyyjUXNRyWfyfuE1mqMDMKC78ikSHgF",
  "key2": "eY7t7giWdmLjkgQuyBdHmmhGQg6dioHNRs6pChaiBvWs1S1f7WkWawUQGHSFuHy8cwHv6EGK4CbukQtYxk8bvPA",
  "key3": "53XHNBWftsi8ZhCm9BX3nhZ2LBjVexErKvuHD56ErpjsbXx57eue2kzgJGnynJPjFkZKCJcfHscyjWKzB7MLuRMS",
  "key4": "5huYCEZe8VHeVZSeNwYzMdFLU5BBoGFtMQVp8ViwLEbQKbbr8QZvBSWBKZuADasDFFZJysSFPX6CCekzwNa6XR35",
  "key5": "3nKak4Smdt2ej7PfKqXsjEKqstFpbYxGuckNdfa4mgT7ct4nJanBYuPu1pKaps29euPyNDKMRJaX6s7rZnz4TA2V",
  "key6": "63LHjr4i6M1j8GbXyZzaDi3KuTJuWaMjaYsspYsaF6y1FvefoUGKBpt8SzfL9zFD4LxigFsm3YymNoGtUyVW1y7Q",
  "key7": "3NcGtDHKPKEF8zWsVPGZ9Qx2EK6nitWp77YXh1qQkPUaYWvoKdnQ2PKyC24dHABW1brxjuW4snNKp5E3gMbJcSQY",
  "key8": "3CSwb8Eu2vNd6fNb7SQDs64J4B9TotCgifAERK2crdcLWiEVdr6zqi1FvwUkkbSL4ZfFLobu2dMBxrUSDnt3D7eJ",
  "key9": "5Hq1vtBNqA7hcsTzDP5fci3KN4c6BMexoVRbgVWeYXbCVGqgxQR5cEGfafPMfRqWLfQxEsj915DBdB2EsMZjAR4R",
  "key10": "4cBttXaEqJdk1q2TuU6cgy5s1uLKC2oVd388xfgEvXqNB5moQwyuvmqfKz8eMRAf96qM1GBA6GGkwnCJ6SJpn8KE",
  "key11": "2o3F5Pc49VM4Ch9WA1PKK48vmFDPzPF4hjLP9SmBf99BcociHCADVjoq8tuSQzPeuYotX94vAqeEx7iTJxVb4EqT",
  "key12": "X8x1xdBxDU494XJnBnkrWwqAPYbVUiuX1KQRqHyHiHoNQYNAjxdSTMh2sSZmC6NLbxYPh3JJQTP4eK6ywXtCDBQ",
  "key13": "2Xc8LrGzf2UJ2xWura779PdRWvqHUJsN4CXWoAycvaj2adZrsHk32jAzaaW9FSi7j4BGDNTZuUKx1gpN1hi82oeF",
  "key14": "5QeRieFYmc4eMUR7ZM2nvCfnCL5wC3cFu3V7mKuopzFpZ9MELJaaHnaqXM6jm1rF772PWczb67xJgQmo379uSoMH",
  "key15": "2JqfYFjAzcWLDVz1rw15uhnS5uKxaRBSfccCXQwkaeFMoAqa5Mb4m1grTZRqpS3snRDezq933xhRXirFXuRZtJhT",
  "key16": "663N7DaxbL7tmstpGKCUzEDHzPV2PHNXYSdToHRkpfxnUVLLuUzZ2TAJtfCsBjAS41PeNdtFmPr1pUNwgZqGX9Fi",
  "key17": "4gpkMVZzQxYfDcuKACybwS2uNTENG261gk2H3XFWPBszDcnZpg7oQy3WeLkm5sDJkXb6PQrt6bAuVhzwF5AJZNRD",
  "key18": "5UcwGNSTe8pihzDEFeTQGP8VQrqMavx2HxpEehVoHbT1aaRZCHjbT6mvaEH7jM3KRTuK6mRGJkbHeZZSMqhMrtk8",
  "key19": "5ykkL8mAypfy4bs8ye3dXdu75Wb8DygfaqzX33vtsvHvax8tVVZ4J5PMrA8xBV7uPn9gtKt9AFoUSZXRHrxV3JhK",
  "key20": "aQJtyG2pabnAujanSnsTS7iCC9Sfvh7J57gwPajTbson4UE7FZgJEfCQPwJ1Ysagm78Sehh3XGr5pCn1qQQUB8B",
  "key21": "PDV7zjGwtshtqbY5Q3r8aqCuZkBkP7Fad5ktNXwkJpuRYZJHKudVVaSGQKrwMD71AMNS3NxECXSnoJmPoHpEH6b",
  "key22": "2hmVxqiU8F469aV58uU25qgmk9UrC6Yayu6KnyPW3H48QkzP8vUu94QPWW35Fk4uYp6dzV1sqXE98wfXyC2uaN5N",
  "key23": "4mvXS3FcxnDDMkdNpyDYSzRyQTheXTKmFxDFEeCbrUM2v9Z9rY2J6X6MgdU2Kxc6TNs6M5MQs1DdZfojCuacLjq8",
  "key24": "5eWVtHYX54Qc4JQ7AgNy4vt6yCkoTLXdDBrnqXXGEPwdgF9tykv54cu3arww2w4LdbrWL9to5aoNMWPJhL6go532"
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
