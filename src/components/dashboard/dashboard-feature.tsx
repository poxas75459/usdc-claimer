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
    "iD3H8duGZiWdefVQYJGArNa7mTzgejR7xFWdTAivJo5g4RwTPrFGw52K51pYZAPxZH9NAZdNnDmNZsVxn7bVLxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATNJLGFSNMJYmizE8oPAz32hPhmGEqYe311LpUyVxGABixcchQA4P9JEEeoknVseZwWGSb5aRHbMQLaq6pYFWoG",
  "key1": "5SvxosdSJqMbhaHe2jkQSwCCBXEzgDaavkJwc554T2uHXNiwftN46XHQ5JsN3uNTk3RRxDLhCShCgmNQDHaPoTrh",
  "key2": "4YfXiDdxLhRED4PnJMsW5vkYuqnZKRTxzXXSEQu3kwYc2NcAzxddv3Z1qSS9gXcQdNX3G35em19Lqj1Lg441aq4C",
  "key3": "3sj6HqYCLPa1YRvDuiqoQK4v7K9dF6iBDpFwFQB8WeXwAzhoKwDdmhcypk4iHU5FeurUfGsniFNytJZQXw1PkvWt",
  "key4": "4wbWvx5oHxN2vsVvYCTtEUbnQhcPdzRhBYWy8xWmMiYF7cvaGvB4Qi69MxWe3U9jQoaJc8xcxepPoX1Eyk1S5iAZ",
  "key5": "2JvUN6jjP8rHu3dPcr3dkRbMJ3pfwVVMHGhGT7i6oBYBRa6yyyGpSAotALkQLwzrnRQMaijEHWW8w72S7oX17vBM",
  "key6": "3HCeiBEVoa2bXNHdXnmrRtd9eGU7oqBJAmukfjPgbL4JeM9FRmJnpxPAb736Rp2wRsgWXQxrsdfT7XpH36yWnSut",
  "key7": "4TuGvwKfAj8MC1aR8x53Lvd2iMUTkVMUy4hq8VRPrCaUV9nQuJLtNEQftuBPn2MeY55D8EGYcZtPubnmenCu8GW1",
  "key8": "3mVHdh36j14yd4NwRzaQkP25GcfLSEnnopHwSCvN43ta8DpdFgoZFaxAQvWydS13JhzvdiFGJwbptn3LED6SijQu",
  "key9": "3a349pUnKwFZzyUCsBX4C1V4RGAQponTy8FnNVC8dEUaiSgtCmo2ZkRu9DBu4nFcLoqh3MXcsQ4V7uhZiuXkbWm8",
  "key10": "5qphpYnSgeMrv1J2LjTexDtzcAMqDnpK68QAdoDXJWzsvBEXoak6P3UUyTQPGxv4cXaTaYVmACyS5yKxwdWtBGbf",
  "key11": "dHo1taXoxV2QmjsinKbaup4XVFWeCHzFb1tyRGZKeXVKgftxNi4MvGdi7WztLHAQfdGDwsESoQKo1ggaSHmC1RH",
  "key12": "4xvXrtcwAP9FXfPVrZ6LXyPhiAFTXxv8cMr8sQP9JoGBM2MH4GNxbuJsmDi1G97gnuFrUreEJjJPCqysksUsNxCS",
  "key13": "5Vj9KYEQJdndEm13D52kRPPPHXo6aP9WcVigmbWDbCVm4WyLkFRDJKcmdSdypZmkGvtLjq6s3zHAKemHyh1UR2dP",
  "key14": "64EAn6nQRZ5v4M5QNvyRqub72aUiskm7kAtXCdYA18ZUfPQdQQPweBUcLNhDDw6P2EJvsp9nhnskWYxjhYZcDHRP",
  "key15": "38L4Za5a2bvddMMDtvA1RfkNYQrLeGPmtD8N4JS8HwTu7cZfSCgScXMfi1En6MYuh8Ldq7TS5nH4z6xoqurPeX3P",
  "key16": "4nqrqzd9HcmDYYCd5aSHom6HykcjNr5gUaAFKDEUps8oLU4wWPxB91PDzfGHAyFTkoLRqSc2GVZvwgA8adLui6mf",
  "key17": "21ugYi4zgxUb9JbUCtQSeRccWufM3dJJc9ue8sebscsA1ACJv7k7UNgNwpDK5JXrcj4D8pC6dN4F4DfyMp6VqGdz",
  "key18": "58LdcK2kLB88njAWfD5ddeWJ3qmjcn2qBQjddtzoSYZhW6cVUnFgL7SoAr3Z872CqCLzU5kUyNyQWPtJjhLfmoxq",
  "key19": "2N15BSCBqqEz8WcRVoW1E4acLq4CUu1gFWjsEK7AMga6XsWZmTj6YWhw3RNF5hg2DiPcehvz8w5m1LLhjbrWCrCz",
  "key20": "5bGZraYKX2yXnJufjm4rm668Y3oxjBERCcEVpwXg7oSXnqsyCRb2rQHchN5ekmmVYod8MZhZYuBquuM4ET3q52DC",
  "key21": "5BgGu7dVtVxWEvGw6UApoJkvJUJZFcxqLqzv5gkW1wmjQ1mTTAzrZkn28LUVnBA72jNRB916Qud7HWmSuEFT9GUM",
  "key22": "5LLEGWDQVhDDFDUvKjic3Sav5WemsrithdmazTKTqF7A9wAX15HyoqhjuX9ZMSfuJvDkAD2KiHXLKsQ1UN34dRRj",
  "key23": "5s8hrwFsP7cU9r5V74kVvFk49QBW4ZbGA1MyE4BnVRaTEBsbZt2GLhEWBivsbTFnF7hMiwhuN5fjaWCWwxdux4mA",
  "key24": "3uvKxS4NDHgvKRpBdcR7DjU2FmKybdAETQKX19yG2UVTpQEvzEJodREJDLSie47SpBKXuT5ktuRJDUBZffdsP9U7",
  "key25": "36LJHaTqkvsc5qvWn5yjEpvuENAo5jo62c3h3mjbnXXv4yaf8wEUMwP5suKaTYUELHwjYubcCgLHjeWQ4MAjCJmz",
  "key26": "2jask56BjTyAZf7mTC3UzkBSee77smpYsy3BisNMQVfKzsuMXoQpt6o1b5y2MwApfe39U3oQuwPvPSv23Rd17hUp",
  "key27": "4Crt53k3kGk1r2UMerVbRvdfwQjyST5zVJo5EEcSBACJB5SnCCwLiedetiaN5WatNRvb7AsedMeA3G6YJUuqAoDg",
  "key28": "CAUeq4bFS5CDsb3gLKh8PbfATmjNqgQrQD4E7Lorx29KaiarrAkgNSLqYLQk18sizYwtr5U44tAAqQmkcAXSGf6",
  "key29": "5zaMzrhnWCvpPJu9Ln4YFEQ1THxtQyKJRx1bQKfk7vnSyMLT3zKg8GsmgdbDUbAk1YfhYnCogfupyr1jAqHWyTj4",
  "key30": "4AqDHJC5xjSasCGu74d6gEUixiHffKjbZfT217XL4AECcvxrcSwbN9m8PHciSy6vYCUtuoB7HsSEgptv2v8we35H",
  "key31": "5iahJ4YLvD2ozshusBLoCCESLsc2qpzf9q9wmzmZbQ17gZNpXHFncmgYjtw6gP1yfVue2tUQbJEYWiLBRvgeUwET",
  "key32": "5wbpFUVPcEiTpHpLW2stEqu4eiSoK74gBJDh8fmp2vFAcA6CGZh5DdddwZc2e49L6vHAcEWSm9gDtHUWZhCYGRaF",
  "key33": "4fFoGxgAHTVtK4CaovFQa1WnYcVZwoVx3YxYzrEQWHwhdBS4uAvxhkRMp6zuLq6mJojou9EaERS8umy5UL8acwzU"
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
