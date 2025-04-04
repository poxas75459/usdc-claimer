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
    "5ydp7av7LhtrGSqriSvKBLLtEL1MceYNVHCp7tKCcdPTXSD4Gf646iPsXCrD7mk1wQozAJonK3woCMgtp6Us4jjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGHhZUUFbfkAJxKtYpMcCx3G5yQwuPw227zDt9oAjR8eyuJPzayF6M9iQTieQiFYyLJhMm2neMi7QMVq3mZp2Vx",
  "key1": "5H6Jx4Cat3YNyqQkjfRTo4bVKcMyPEBAGas3BPpTmTH3RkLg9jwSTSnkKnhoV153nXzSgWRgG5REBMca4sihNLKy",
  "key2": "eK8NEWcxyYzjBH7HQXiAVy6GkGUSwaAEUUGZZU4mQt6oic3EQooGgnPUtxx4yHvUoJnGXXWQ9XiegL9FLB3rEnm",
  "key3": "2pNwE3ksXDmcwfeD9CyDxNAtKbNjvQS151uwxmDpQMS4w334Exx2eotnx16zEC47jRuDcei8dBPs3boBnW7ac5jm",
  "key4": "3nk5FR9xP3QonSRfJwxYDcSGfgAbS4qi91DGe3usu6ByqKCehKsy736T7jGLT9XVmXu2pd8pzU6ZuY9HNmgKkEs2",
  "key5": "5H8roqxK98mvDojS7KnXACxfSrpESU7AFg1v4bG7NLv535VhMixDk6DpaCD1MwE12tdbAEr5CioNFNSRwHY6mJC7",
  "key6": "5uZYQCME7vYETRWWLACTj1C1qHC1M8FTTEiaf8Uu26Pnfhc7RWkhPssDgqmqcfwXBMZbQH1DRCjcnq5sCmdTYwSy",
  "key7": "2AP7mqQTTP5DNqAGPMwWd69TW6Noff3dyaTmmuVvvRP8jbGc7RofuH6B7PgAn4vY4Ddh48U8auwAHR2J16mYfcdw",
  "key8": "s8FpvafxTk8qCSri5ZuYCTtNM3qotft6dmd6bfWVmMg7zpy8dBYtQXSt6jsg34VGiG17zH65MRidme7jcykh8Dq",
  "key9": "4pxbAzy9whdUthyXJR12yArapuzf97Q3yUEMbcfxFiLA8Cdx3dUpJqP8rqFXB6f1SaBrqs6bWhawRPSMmCpyAwKX",
  "key10": "3QgMGLq6FRnovxfVF7mSxVYDf28AtyNGyRNJoRU8kjvm6p98xRv3jgh4WqD7JQK2dbxi2hsR29aKKUVm6nJQE1CX",
  "key11": "3u9AXUqimFKb7CpT8frCHWr2QdQZwWZfPWLZSawmQrySfA9UEtDYPRSYBgUmU1MuvfrCBYeUAXL9rTqESKyLsYh5",
  "key12": "6pGnwffkDctYt9AfSEV5DsUGCLkdpMChoxKWyvK7FeHfTDmFA1CgfDvRtinduLieUFPWDsU5CiGYLAu5kgqkQsL",
  "key13": "3KaCwzBcuBsRf6EZMx3dmUusKxybUtBokkfME3UodCScWNq7bTHj86iue6PRj6NxCwL9ZqgeLKrAYW5CdTkw9BUQ",
  "key14": "34mcryzvzeBmiJWjguQomV3xjGVeMGqHxbBzZKgtfVmms1H3Xi9cLkumSqpeFLcxtYr1fFAfd9Pv2z92EJX2DZVA",
  "key15": "5vhgzzdUbcAEUYpmvVFAVvRkPr5oqiveDBu3Sak6Xd1XFk4DybHrN7gxtLkkis3dLo7xobt4ZN5JrWgEgsyZvuqX",
  "key16": "YvEjY2mw6YN29moeoa4NPh1VcnW5Go6UvgCmEUymY75DWFAdJY3rYKoGg2wfXzB117W4ovjJ9WVcbeYyYSdtNpp",
  "key17": "pRYFqk8e6HU59UZBTMUHV3w2MqTgRnznATiw6JCz5m9Z5Vv1P2SZHC2mLi4Zd3eywKRijfw1ky246oHTW7CJcwY",
  "key18": "HRYAdcBm92jpkSrgjta7ciFnGyTsBFbJtFUZUzjSn2djgwnmU4AWwTGJnMJ8mUttLqn4j9ghj8HNEdZg6BcqV53",
  "key19": "3V16ck3LGHqfGixRdaM4vytsgCFvHaweSWbc9xajhnD46J9VWxyCa6QJ4jJPu11ZMYxVL6Ma5nX3H1QTYzXbjqur",
  "key20": "vmLQrEhYrMxXHtxNtLkHnczkTYVEMiX6ZhbELDLJzZfVUP2XNByyhjiG1KFm7wQAKeuUr2J4uy3x8rp8JzVamYB",
  "key21": "2VBbsruXJTFGGLk58QZRvpbZFMH8Ryjy6LXuiKw46iWbovTp21cUK4SFJmFMch6d4Qg6AWcdWtM18sJbFKNVxvXQ",
  "key22": "5oEJUn3Wv65gwYtnLZQEn85vXmAmPftgwDpnWPiCdkJxEJ8Hg8HVdj1UYmu12hiqi79LVJkywvdyhDoFqV7zLt2x",
  "key23": "qhpuziFVzi5GwFWPd1As2wz3epKREaBAomp5aTY5kwQeMReVxBSfSQRzXbMpXurr7mwqg4Cqfu4d5gEZEAwyPbt",
  "key24": "wsbMmEb4p3sV6gyVhwPk2apuoYFQXuxKV91eq16HhjF1HbHG3cfYLvfVij2TrdwN8Zrjwfaa4aUQ7mikp2s2o3s",
  "key25": "NCBh67DytcBve7ie3S68mbgifzVJYphzj5YBax6fTJDKityFvi47Vjx1ExaR9zVJnL2Sb7YD3XSKL5tdpvPA96D",
  "key26": "3U1bw56xq2B72eyNmgHRBXSyiQya1bDWwbvMdNFfewy8kPXgd5bSRuTwtf2Lx8sZ6fdLB2vuqTVupZQtBVF3Citp",
  "key27": "25wT39tpEc5p1Hp6fV5UkLSDnhLT4TzxdRmxyyMvtYydNfMCCXycbanJb8dbXBCJ1R4P6JXYmijcZHAAX3saWCzQ",
  "key28": "54tkoeLUSNMvcey7PZQq46tPvUMR4zJHCnaWmfFMxXgBcy1QWP5HVmW76qHuFsqpYB5Bkoy43SgFchVsy5jseBez",
  "key29": "4mSUv5nB5xCxcRsR6b7u3kVGSKRaPB3QWNkoEjfT4ifZJ4VSsLyU2UvMbMWRg9m9bRwAiz3gTAByFpXsuaqcyaf8",
  "key30": "2LT6KZsucM6Jm8BEFRi8PBtsdnvYGVCo2csXoDF8iD148kyn2LBKmmJo9bN2TMBcwawRcs3S8cPPFc3ygPbdjmDM",
  "key31": "2tUF4kLqFhCSefa9Fv5u168gCcisSiGsHyBKUcQkPtmM8HWWSFi3KaUrbkYZWDLPT95jmWjeyYQTaHUSWJvgEyVe",
  "key32": "4rVQo6AwHhL2uCndfAasDX7uR9Ln51gmmfeP4YJSeuavftZndwNBHDHFDdqD1ZPTVM6uhf1GHnLyYsS7FCSJjUxV",
  "key33": "3tGSahdErwWp4k7z3t7fSjtkgSUPYTDaXmfLGEsBU1mhCVjiQ41QVbquJwGRs3EPv3ciKvT6KhCKGGM592FDyToA"
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
