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
    "61Zay1eos9WSiwTiyxbWHfGkTzHvyMtRXSmQLgiF8eMzB2ibrp3JfDrgbh4e4v7Z2AEWiLts7BSHtL9yDD6MiyVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTB4eFt6YSsYpdsEuhemANFjBsRUq7TveysPsPKi4vM4kYgqxjLMUj6oyQEaAMuUdsSYJQi5BNTczockt9cjL72",
  "key1": "4iFT8jrmB6KSXRLrhmcvrP239Xy2H1pz3gpMLje3Gmd3VxTBRNjkWdVKYNqpYibpqxHsgc8LKRWFkKyyarmMZtiv",
  "key2": "6ttA9wrZNkgmB2aeyRfRwnoPKYwYeVa6zYeoFgH8yfkmRSw82ieVw8ZTN4iTozqk3xcdNtdfWmAhFoumDbnxw8N",
  "key3": "3fu3sVNW6yKibbXZmTAbgKcVEeMHUUQJwBUjpMFVApr4sJCAr5QAykf87EsYu6KBsZPoFdnpJN2ZPKH8XQCkusDS",
  "key4": "4amvP798uQNCMNFbyRT31pBt5gfkkYH3fAZQahdAAEmTXxyTKn2f3gcaYBAifS9ZokWj1kxS3XHMdrK19E3orLfg",
  "key5": "UcszBHcmDSFErS9caFbGaZWcboVicYDahsm1JoBwLnMDfZrG5GFVecgaxPkEr2fv9o8ohuPk9J5jReJqbCprAnY",
  "key6": "24K2Hz1MznBwzFwrWFYD3qjPLG8hnAmLnQ4WfECiEEsebMZt9gtNcoAFVRWiWukUsW8ETgbo5KHVxiTUkDxzXq4Y",
  "key7": "5ZG1CKZcSbtC9kiKQDacEpDrSyWpgRWjGLkAbWJa4aWnLJdZ2biaG6TgaWKaquqizqGGezcTPztQgqAD6JmnjkBb",
  "key8": "5LjUbg6gazm4tLWwEska1XgTqXNSG8XwLQkEiQLxz6XeG3kawweG4F6uzJNNgVRx5thGggFDDMWpVT6pWgE5c7pr",
  "key9": "3GKw4W8JfwC12YPzCsnDbNZKVjw8xH8obWifUELjYEHKFfE91c9AdX5Snv5aN4FUm9dzLWScLvcjx3RK7VFMawPK",
  "key10": "4USQhrtdUjbemPdfBnbqg6t8VPhguMB29sJm4FTNqqnmhTuer1FHrEiD3TATYnYgP4y9V4Y7tXqTRGxPmE4kAxwo",
  "key11": "2U72ZxDy6a19qWoeRJKKBjN5rGGw8FmuJbLGWEJfa2pxCsVnHjEfpxuWKbKotbFh2FoDLFfcaAqkz5NvbhZ7H7y9",
  "key12": "4xxjeewJtuA2XxAGGDJzSPU3YJFgpijNykJUi3W54xn8MHL8Fg8oxi128gHz2xrye3igGExLq1jZqnvu9tPwufqS",
  "key13": "3xpnG1pdH75Q4wCkXXH6WYYBZtXmVMeaa12pJXZALBVrUHPNkTerfjK2g1TGTo4zM18Xpt8pfk99D4WCu2F8yc1d",
  "key14": "5ZZ6XewDtFDF5nbbM2iVAm4p2Bk9qhrBEyvTh6MLtK6GS2y4bNiW9c5HjaQpjcwfQycQGH9HD3ijxyVnZGUurTnV",
  "key15": "5yPKq3Ckw7tXcEbci3DLZ37FDLNmtp8bWqFDrav2zkj3n4DRHgiYTH9trnP7csVirMxpum18j5ZsJnHAWoyvCJ4N",
  "key16": "57ChaWrBoM37Ut3jW9EUBvnBAHcdnHQtwwYF98B64QKkF4APybi3Rx77kyPUjgdgdbKLRZVHCTdK7TV4x4vYKqEu",
  "key17": "5wMM4DyXRMPegbhxXPnE6FMeJ2r2otWotN58x7pPFXZHppx62J7gwVR59cfyBC5z23aRQh6PpzXqx9A4DgRJwwek",
  "key18": "3xBDzvHobLWX635RQ44JYvs37xvk4DpDE3nH52gug1yLp8SRQXUrgbj7FJ2C36z6uqQNG7DT58HDqSCTV7LQ3JJr",
  "key19": "2B6V17kBX52ny83mc3LeLzF8e9RYEzsW8dpdfFysCqxiPrMioy9rkjCKvdr78XrngSpn3jVoo45cwdHxM7cUxY1v",
  "key20": "3DXT5CWraCrEC1W1rCaMS9soHj4P6sWV8RsPs2uCHdWz94WEEyoNvAGFYpH8RwJjr8V1WuqYUiqDr56vTMFq1oaa",
  "key21": "5WD8Cp8XNBJD8HPa4jPkHmfejD3CCtnD43VMxpnpD69hRmZuzsduvD9k1kabmsTyvsDbeZcbhFfJwX5vbDhgvJbg",
  "key22": "U4FMYFMHaQEjED4qEPCsMiGrq1RAdNfwrK1RB14Mxf7VkPQKKg9vxzZ18cFeVJfNNw3PKNhExPKnPxnBWwsHQZe",
  "key23": "yQTh3WaggqbAJduapbbPfxcSFqAySMhRWuspfgeQd8mzeS2NibDE6APsVEASJDtNFZ3SrPTTX4TGXAfAT1M9yYw",
  "key24": "2EurjgnLPSVQcFDcT5PjyAAMk7WXSg6iMnRWZfBPkGfgt5zjd2daqu6oyNWyx6UAzCXWmGNXJ2qbL3Xwt6EGL1dy",
  "key25": "4tF4NS2BoYxFBrNpE3J5c3Mm7uWGDbb52nGWp8uARhpQQWr5u2yVumWxzJ12ZDivknzEn1z5Z8E5rGSqAknYCMwA",
  "key26": "wrvXbrNB3TudGGVjzcVfbNTmQLh2CrXn2B2uhB4Xvf2kqRJhW6nkTykUwdQszAHes8szgG4kwWxG5VjAwDNCy1h",
  "key27": "5kL19A5s4SeXaKxgKnXYBmGR2mWKtLK8cis3NhRK4DsyhhvtCEihhQESiVc33Xe7p5wPx5E2QEupXKVTtnZtQhnG"
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
