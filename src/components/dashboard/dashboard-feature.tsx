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
    "2YwmWuqDMrYz4MuY53KyvNUaKASs6qrS3buRYFSEqv7Mw3mnSMjceNLFUJMtWy1AXNyC2D3e33WRXj4VYfuHrCFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQ81BADjhRZ7CvaPRZYJaoiNCk87tanaHLcv75GBUbd8iAHvcKwZ4cgERVnP9etFv8J2ErEpynR2SGeftN1NMvz",
  "key1": "FDAYgPJNFCxcSqfDFB3G9xippNYEaAJG2FNwYXXkWF1pBATLeQ5GzttYgpB7s3Vkqfi63FEwTzZfgBYkseZdVbp",
  "key2": "3dN5F82BUcLaVhrYioKQFei85Rfnm9zLmvXQ7h2inGtDTGh7mTkLDYcaGtNeMXmd9jU4PoWM7EJXKWJJNkFhseKu",
  "key3": "235V4EybMLyzKMAJVcUwTwpFviCDcNLfT74rWMcmu6WbKpjDNTGawnPQU1SLHWRqE7vHyX3egEcPJNt8cgPR8QML",
  "key4": "67nps1tvXQFPpNPEN4CofTTapQpmqPqvLms5kQrVUJxfKXC1d7M2EFpwRfPKt9hRQALkDfdTgU1b7wKxxnz3aAgh",
  "key5": "2F3PiriokRopYZ1F8B1DYXs7fj78P1AYNx8G1Lj6ekXf5rL9uB4BWs8GsrrPg8dPkgLh83DtiRu8fXWi6WfVxuXY",
  "key6": "48Dq9AEMoDdhNsyBs8vHpMBCfxZ9Yf83RhiRHpPpuCYdbJmKmZDkb889PeRRUqmD9xABkH5pN4rWXGU8ju7DLAmz",
  "key7": "5hdjSbxGyX72jbDpgbXXxyQAxtUqrbPtkNkm6fYNXxCiycB176WTZxPPm1dpwejP6NYB3SH37Gb6qzfWfgMP7SdB",
  "key8": "4Ua4ihZKWdmPKwqVWVyg5Q2CeV34Smq8WukxCJbcQrSaUf3nS9GQVnUf7T9SMY53BZK6qZWa45RVybSCVmzFaxWM",
  "key9": "4BVvK5ugx3gd2LjF1MNkX21MHgWPyLsamLJuG4vxxR6wbnVdKLbvaFWzAseoarYxGwGfdvPnTiB6sbohDiFgmQtB",
  "key10": "4icKgLRzKjSgqPnZCWiztYJKjPrKXkfH1A1L5Ek9vFDkw3ceLUtkU35zWcf45ZRccFSLwdTC88LkmEcVwca2tuYg",
  "key11": "m1kGCqjciUy6eHDFT6WFVtuXGHxSyk14Ddnm5Wk6E7LcpB3JtdTiigvkFbJt7CbbkAkwxMZwgDxhgy8MkevPoue",
  "key12": "434B9xEugnu4HBwBckLeQNAgUKCYKiRR2W4N2NQv7nwHtE1Z5Y5kUwpkWj4AyP4kQ4XhugpyLdWFmt4sdxqQYvkh",
  "key13": "561UyHqHWnP2VoaXSipXrwWsRiW7nKY8sfQN6rz5oXA8bsb2dLCD3o3LtvampL4gfM5ZdL2hTHJsw9Nhem9Nm4GT",
  "key14": "5SgnWjA7D8Vd8ng9QuJbuubbyCY27SkTBR1KzSNs1Ae3dAMCiWLLJA2vDusQKuwwhb1bf2rgW3Qhg6747CPxQ86f",
  "key15": "44xrBhxBUj7wWMUcA3ZV4WXjWFDHbV8mer3vbee1pUjvB4XCNimSGQcEsv99wSKnV4TPsfqwHxuvNqfv3EnDujFc",
  "key16": "k6oVV5158WXff7ZTAMHu97FsdgmNdWFj4bJWHFWTRTx65mADVc1bwFdtjvq5gixqUvuPthuYA8vSAVLWjJzRhSs",
  "key17": "21rStAVyLfzvEhLXzXQpzLDxunspDE6vLPCWGqnEWkYxK3jGY4dukMCEb9Cg1FoeiDcvo3z552NKLzTMJzTV32ei",
  "key18": "4PSY6uz4yt9w1K3LSCsjuKHYK93RByjDocMZ3rPS8WY9v9uFWhoHA78F5MRXH5jmUXNtXFcGuZgLADjAdaT4aT9V",
  "key19": "2QqEjR9jnZ8ZKAyB9m9X7Y3KHiQ1CKvjN1fHvkbeeQAwMHMH8b64VwdR8jeaAZVdHAEykhhkmg84hSiTKvjb7W2o",
  "key20": "2ayot5zzZTB6Z7x9zBXUwfvyZQAH68sz96wT5L2WHZQvRsLWW9mS9mWCKmk3yXS1LmGXWrzrtR1GdJ2pFTmcf69J",
  "key21": "5Fc9yq2NixKdtQUqDnWip3wERPPZvkbxoZ7v8W1QGZ4S78Zdc6tDBikyqVmR3x2hStd4c8y6WtWxnkGTAB3jcpx8",
  "key22": "5JS3aSBBaDasUVAHtG9GRKyFQMqf5Md8ukDbhVTY1m5HAGEZTo5aNJayP1rSSrGjjj1y9uVJk71GuiFmAh4i6SMZ",
  "key23": "2C4KfX4DNfi87s99mKn89E4K6PtwwikcdMjiNMoDLERQdtcCWnSBu7sXjdtsR33dQvKpHrTN3hk4dG6FFzsYr9go",
  "key24": "3nHpv7swvoxe4jZXLQMYRWfPLSM9rQH1tMCJSDocoUVg31cFhscm58GyvWUnEpLjamCfJHTSXjQgFqgbuWMfEQgg",
  "key25": "4LyXKuwHp5Dh7WL4ivUvqkN7zBs2a8UP5piJBGMP9qzm42pofzz3N9NVRRht112UpwV6i1jAsWk4X4AshPD2Vas3",
  "key26": "3BJJdp6H2yVr55ZL5VxePr9XRtFcSavWM3QvkGpw7eq8QqGhxeB2aw7pE4s8iLBeH7VDcCcqpGUDRHU3ohT3YuSE",
  "key27": "64B3Gua1UPS19yuzSZPts2HTEhUsMMun7aifDe8Fu7D2psiSMdiREfzrdgnLXycGd8oPo6pfDYiafEGZzYmaeyhL",
  "key28": "FQxTN3vtmVkDShrahvRnCaXam6Qq1NgQcjEHzpb8QEMhFRoBjL3rW3octjWeAHkWeZyjRpW1wZR1d1i3UwdeJEq",
  "key29": "576xma4Tyz1A3FeUyvZiQJfVu2tymRw3KnwUshruQnSREonHbFg9RRRwSCgQQi1aKoKSVQrjhh7v5nXHgWoxdgsg",
  "key30": "44LUvJoY1CwySmYfbRVdYZpicj1sn2Ac3ibqjZmB4vhSdedpGsc7z1FkryiJcZVScyKuAjgHbYdGfd3wRWs8P6mr",
  "key31": "4DYwftoNmnGbiJN6QQkvKzGySkczNLmXhyobY3ejTtdJHetUbYxsvaCHWT5EVhnJ9ZWnmsQrd2nSUZLHBHhuf663",
  "key32": "4G227PWdBGa7Kaz5CrXE47JnsyjHkVmidpXPzo7AfjzXKbcPghWkZKMVUe2D84csUHTYZkbpWH1pa795BUgY5duN",
  "key33": "4bhx3uUTHgVf9CfHmgbz4sYFegd2PuYpax3efcwSAj75h3Gi5vLBudYhXxDQMo5saQahZygfSDvjywoxyqFUn593",
  "key34": "5kJiu3sJj3gEiZuhxPZKnnF7Nirwzsw5MAa1HF8t3s8UAWL2HrR41HecNTZGewWLKtVvDqRfJpVeP1Ey6szJSgGx",
  "key35": "4bdp86mC9YUz1Y27Xnwvrg2E1JE8RG9P8voKmBHuMukUeGhPnWummYb6RCDoH6dgDL9tfjUUjdxQTTaeFB2wC59F",
  "key36": "4wPt1yMVnaAz29G5w113bvWqKDdVrA7pgZvtwgBgSbqSbvH3RFhRguofcKojJXwbLYC4cjkgwnvBvrTncx8mhg7C"
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
