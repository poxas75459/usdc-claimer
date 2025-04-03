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
    "4YPAZuUk4eYsp4RiAhBaGhAAzAthwN2Cju1LxM7My1C7poYLBfRYdWF6tydrgVg9GWvA19sD7dvJhhQdWQmf3FmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufro5rvDwP5xgvVb1SFMJFuSXs7P1vVwwxotMGRnDPPw14FvwKEfD7yAJiiB8yCX7Cvkfpbr9m4FUB9sUAwdS2b",
  "key1": "EwPjTN18Zo9GUFaYzAjUVEgVpdZdL7gsykGaccZsFsmhfPGbVdbE3j5iyYiB3MjTWjih1NkojbLZFv7mrpT1Dxn",
  "key2": "5CF7U1Z8LpjqDuWZoenHH6bBNgWSdM2qSb1mF3bC2r7BwCQGpnQSECtM7iYTpshZFNVP695BrAWe6VnNNbBX2Q6o",
  "key3": "4p7L9n5ZsK4YMyAu7Qcpo9xwsJDsEgsRtf5X4LvWztcD7LnJoauGz2X1nD81PhEuXaud4uXz8P6KK1vti7fqdUjE",
  "key4": "4NukDev3PYBJ4tJesrqvdtbVtTMFuTcgoUFpRujSgqCnn3QEJZH26B8J937vJKTqueLUNvpQAG1euQwjfNchgYod",
  "key5": "48xZXBxXivBzJEqREVzzwXHXBygJqnCw4vVLf91uyC4g1JYnT6VPX7tb46gefAGFCcaUYW7hC8ZE45PCn1MtyNG2",
  "key6": "2c5Zmc6oJoRzCwdu8f2Dke6PxDvnJ5uUe8MLFFv9wDUweTtkVrW5YhTf49jh1PGTaXpDXFRFiz5ayr4W58qi8bvV",
  "key7": "8Fc2m8WPTLPW392cGvExs19RHvgZvjyKp2KajwKuMiPXKXjbHJ15xBHGVHCC3wFZquWReMGGCEABCcajkRj2u9J",
  "key8": "5Nj7Zpgs3jKNjjEjssBqLAA4JaAmxGw4EiPjvwR8pDfkpDfeaR12iNgDZxVuptbqoJMQLB8eEkfpEeR6QxYqbTNF",
  "key9": "4dP7aFo2tpTANsiW75U9g8LhHvKGqthwxiVfK7UENud91SUkhXF7hrxQiRra6dkVdgcf8rdVUiv8NTErrzkbRM6f",
  "key10": "42153Qae8uu2cqpykynQXPBsAdLXwqb4UMvbfwo5kvgS9HXny7eGcm4eG6w12T8ug3jR7JAUKNc3ZZTDeY44RHpe",
  "key11": "ZPwCJmowxiNv8QbayY5KRsokPmZRMgvXpAKZzmBGpt342uK2REJcpNH1bpZg3xoe6eo3V7Lf6DuXULzcQKkLMxy",
  "key12": "He4PhfnznjDAP8xoL536mLiTyY4uhQePF5qCSFXCkdAkQtwyFikteiNEbroyGYUbgB3V62B7wqWCM4GHMvHgg6M",
  "key13": "4XxeQy7seJHtq8oeaWFcmSvVsHGzmuiUKMzqFeqBHtc1SagnskbHdbpvkuehqgqTfCG2kUXrKnTk3hbwGbzzdNox",
  "key14": "35w8iaYykHkHHGJ7Ma1onrvFLjbazNan3g3M1NeUrG1Nk3QRCBsJHwDYoyRGXvJQXQ5GKL2BsMm91VHuq8psRLT8",
  "key15": "2sVptNMCdoWBWXybvpch9fVdqqejKdcw7yrsk8b2v172RC9BTR58NSMvSBibaUQu1ePW45DA7fU4RveMiuJNJZFU",
  "key16": "7h3DAKDEPy9AuQwag5nYC99Q1r7JDwg3q7omHTQJ9CAWtzFVNSCEeyYJp3sFu4sjvtvrxipveVPYr8QeTyL1Hsg",
  "key17": "T5jTePoapSSzv42H6hFmuoXsYA3GywHQEYU9A5aUxkncTAhgKSUgmJSYUPAajQgPCb6CLFo4x1HEXh3ZGdCFc8r",
  "key18": "433NsAQw2YMcA19Vrb9QbR3riEgDSvKCRwxnfm3HLKKAP4EEtzdF5EwzQFhVagqsr27VeNchYq13mK1u8ZEQq4LZ",
  "key19": "4wsJwrCQq9c8xVWPq89hMUQgiVTrDSMAvHDKdE7Psfx574dX9RbHLLVmiLc3H4T2xQTrCGf79ujpPLfUAtmhUnqJ",
  "key20": "41sPBQe65Q52FA7U9FBR67834U3QPKJRDTm9nrcYZ22WhyBUqCADFbiDy7U96s5kNtWpovxbVaanEnjsjfpZ9uXg",
  "key21": "4MxhKcH9oMJgbe5iJ33uida5NNhGXekhPRLkPQzymDHMc6d5PxwwRrHrE554eak9U2mqM3gfahEXUToq6EguQx5R",
  "key22": "5NBug82WwZZKHqWbgJWxwKQzk8ib9ELJwPkEWdeH4kNNSW6JsSWEHBJZTDP23pELUbkWNXrB3KjpmckL8exSvrLX",
  "key23": "2XqwzgzuTG3AjMGxZrcjHQ1t4ibmjCdRUUDuDdQTMX2WcAYkXuoaDGoJKrY6WHC5neq3ogo9AHHuCSRkxT6vCpRx",
  "key24": "4EzRabbq4e6FYYhHKAhmbqYP9TigUGY4Uy7c3vg4HEhMY2m4DH2bNY2bNhpmy79HtrhHsXaKbJqKMsGF72awKQCT",
  "key25": "PNA6TpZepLLfsGiN7gdkQPXdvjEGwV68Lqksz1pueNPfkD3sVs73sFx2TrUVe2nRdCNpk1ZJbGnJUDCfZ6Tw3vZ",
  "key26": "gN7NZc1xWHWKuoL5AX6xGfsWZteLx1VWPvRF8DHySiamfa2EtzzCvQw2AyWpxccmMRaXLq4AyiWJTaNzUnAGQ2w",
  "key27": "2e9EaKvS7ATmtksidLGrDKmLzjEupCA7u44mofudf9A77zYiBGScnMURgYQeTYJW97Rd78UemxqKL2G4SCvgLSJB",
  "key28": "5dSo6uvJ5YA6LUVWLQZz3BnrvwtBnm9BbqJ6Gp6hvpNQ4iz9u2VqgEvjLtos4T51bBHPS1wsPQoyQA4BcmfwBYak",
  "key29": "58wURhLq7XNNPHHmcJFMgkbVyhfgXfayxxZLZiiPiKJyHYBbqDyXUbNT4tQjWTdNnPZRvdq61yebTvo6xqWtqZKZ",
  "key30": "3DgrkmHYU9bS8iiqSALTaYZaWXmqe13oddeskk9qNsPNrEDKssXgYE7UtM6RTPbZvDmXbU3oofS7nYPorLeUBGF9",
  "key31": "5vJnbgLjH3nMoNRijd2AGnNVSp4uYYLe3hZDkBScUcSVxFVEdij1EDYUQoZnbCCeFVbgmPMRNDwW4qG1JDhmaqdi"
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
