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
    "qpyDPEm3vc62BKskZ4Ct4sTX3o2jJHSyLKchDySpbF5QSaWgDHYjUz2DdX22KL6uPtnGFyUTCyaKPx8xjtHsCgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUnz4ry7dRMWV7nfa5jb17GmTTE8ofmKSgK7qVfL44GZcHeGmYTpqET3yx3jTisxGYcfUEFYSUWDGYj3fD1yVbd",
  "key1": "5ynTbE3TtoNrWU7KH5dGYwXhZo6uevxecJfWgspfWkrNKPimsBTHGQFaRgjZtQyYHs4aXPk2AK6SwJPDFaSAzBap",
  "key2": "4oAtwp7mY6DQjD6or3qm7cgVE5UGhxErv4YgxhRDYsSmBe3fAgwpZPh8VWivX8eoY7tZHXqGs1XmeJ78Are29ujz",
  "key3": "4ZDsZ9xuRWp4NhkimnFGPLUMzTAq7E27yGTtEd4Lh2G4Xjm3kVUEE8ULyK2AgM5pxwfz74Q4qYpfMEXPJs7Er8Zj",
  "key4": "5BuuMeB4Y8rHCHmfU5JjERu7CgwkT8w5U9br9NPrShAANYPgFWWXfyBYtadcieybRvmz8anghTqzwwK7Rbp6nXfj",
  "key5": "22XG7bApF3FPZkxpSu9jRM2Y5VNxUkQ1hnZFwQFhYoY4FxHXM4BMaj2U1QTAbRtbdhbiWEwQwLu91jhNmqg35Xz3",
  "key6": "4oRqy3TpqSdxFkXeKNTTWZhCMQjP8Ht12UJQKdYrM2SVDugJRmBVDqgxtGewaiwTiB9sNMNZt1Xf1E7LQssg7KiU",
  "key7": "3x7DCtaJs2JDJiKJQXiK8dfJnJLfTKPbdrLDahqracCgRLnJb7F63Q8SffNgCnWTkSNLMDUMSGAepenmrRxBC6xq",
  "key8": "67eArUyyc4oni1iKf4HTJoAa596JFzrg1Gt4gfWxEH9ZnYkZpfazrMAn3XEz4kM34Qrv2YNe5CKsBPPQvuKfNfUx",
  "key9": "33qcJfNTzy1ySGHkdyAb7uEqpcpWHoPnBKkGdbVPhpyPvB4JA9tveuPX8Ue4nBAHounknCKb6Cq2q4QhoP2sTr52",
  "key10": "2EWdfBRen8gv8zY3QAh1UZNYrP3HmCgBrgmd1ueNfxNda4MGejELdFHEjqUHz5Pmf2q8VNREMfse1BMDCgcqxGvd",
  "key11": "4y6w6DsBuhSgpDbg6zLACphDtymzn173qb4eCCtnazTmcs3dM3Z4Hfiqpi3f6uJ95xhRACY9Rt4gZMiey6H7BY2d",
  "key12": "4FPhzANis8NHGiX2FDnF7nzHyfCiFXeWr41Fus1AmLUN6kcVSbAgWMTvana46EK9XpsxiS8TiKBkkY4aCYhrXTTz",
  "key13": "4SWNNG2DJg44WCuihwLjQFvLvTM9Xg8sr3QYhpr8oVq1HsRfudWQ7fYkgXwrFJzEqDrFS7FtEDzTMjvNmkJtdjMf",
  "key14": "4ZABjx8ireSFT71PD2gePNFxWymbRtTurQ6keD7hAVho6n1vJydyBWKWWUpb1EcAEiNS6NDZM6C6At9NEkhptDQq",
  "key15": "4Bfb4d4gPTMA8hy1fvtEFGday8DgDP8kmXBumAjhQd3brwriYVR1GnjEcxa26kqoYTQYDWFiAEqeBiYE3ttvyFa",
  "key16": "4dc5b7pcM9WFKXS49bdnbxjREsjGzzcFgFLMwqFjSsCauRp5z2U4XSyNns9kMHar4sFwzwZMcVmbSVtRBQip8Hs2",
  "key17": "4BTPXvQyQ7DiN5bvoPLhbvreTtYeMWuB7cGfoMyGCkvTe16j9t6s7kDLCKCZpctfPCQLLjBMGSfFeNS8nDHAFYtq",
  "key18": "3mZZLPie97Lfoyu8HngsDab4drbkzQe6AbQRPs9bgp4WZuvkBV1txxSoXyJZsRXS5Jeq934vpmvChJXrA3hekWqH",
  "key19": "2mJPKNJDtG8yy6W2EwB42k1vFHmxNxBFufQotcQoh4X6o2fRZvXudrpCndc95cghNtBA8i148ECRWVsbHJvM34p9",
  "key20": "5isyQL1Po7TxiTudPkJK2jQS8tHxms7rzy4BuUKVHBWCdZ8qt7faJ8ik7XCR6M4KDsnJBChTHJRktnmws2Dypmaj",
  "key21": "2aBAiwgfWS17FU63DoQo1SNAm8kfNWZMuJGS6MzFZhKHLGbRoBrUSLKeGzqq7PYVdz6vq2EajbMBDA5QwPxGA2Cz",
  "key22": "5Gw4dAsh48uG8C2LiX1rVJNmiXPR1P8TVvuafbfbfmrYjGbwP3wHEPbcbZkBgxMtpkbm1bQm224Y1eMyPzBp88HG",
  "key23": "4fEbaSNaPwy5dLhdGjYkwUwbtfmQZ5GU1T7cZTFhJMZJhTfmtVjDU8vt3FEKtDcemwzDGWsh6LQ69U6F3djJfBCG",
  "key24": "3jUHcEJRx2uBUAiGJhYio3ufvMHM1qqhZUP7UfFMxed2ETZHMe2JNe6uGbbWgC6u5RaZBahit9xad4JQYVhUk8e7",
  "key25": "3NDrqwKoFqH5LPJsu2fDg2w8otmw77naAkGUhUuwS4LUg5pgw3VNnKk5t4g6DEAKk3o1zCsR6LrLejSHVRpSYTbG",
  "key26": "2qgrbrqnyq7HiemAtsBAnuWSaihCiypEmpHFztWaXJYNwSSmimg39dhbpFyJoPz647qYmSdQTKxt1yqiMRWSaSmX",
  "key27": "gtsEixFhxiMSFPoncNQTao6pqr8jf5Q8E9LasbfDDjCwFbRVbFRDz2opNbAsjZ3St7N8bc4ptGLpzDPVsUgVmYL",
  "key28": "t8SXjHhBPwMecy3oUfrB8cLdkNDsMC3f7LNxFAUMyxU8TJ6rzmjTXuvSez8gwjXb584awUQShZmSknjs2mJSxVC",
  "key29": "rLDKKBHdfEUzPcesSjoapXnMww8tQW6pVxUs8seDj45FgDQAG2xj1p87hF5zaiasAWPkbHAZNpXZPStS1233g3M",
  "key30": "5Z3KxvQj2Gp2Esc5VPBEUzaWiaBjnXmCRUYx7KKXRtb7m6hjvVRtQkKnnsUeUbUzvfypbhTByb8mbcVifFpPMHcy",
  "key31": "4uX1m2L3pZXrMfFwnsoSdRaH5bQLQJ5JDhx7pFR5L7kzGX4fQeXYfnSNQD2y656Ffe5PC8MNNNCa3oenNqBf2R7Q",
  "key32": "5E7sDjXTj4QSJtSxBBznAF7E51qxnFTCCEYPepujXD58rikWE8dusiZtGm8Wq1ZqcAHHSjT3HmQVbycdtxdZC26Y",
  "key33": "4mqyB3bL6e5hP2jGE6TCLpZRqe3ZKDsgnV3jUjfhJw2tkcYEPVHPijiGCT5azZMNk2tEKyjWAsRt3QuPm3xrNox"
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
