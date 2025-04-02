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
    "3KBd3RXqrQJ6jXseYJkzT89vas8dUmDprGm1rR7Pund2wnF1izGcmdKJKooiSrzrvaTfYPtX6p71Ffu24nfxmJrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbjhSf9WxFB35vPQ65TNAmZGswFV29p3amxZiwDNBvxS9asN7TaNeFrr4ZQCsZhpT1sMdQLXtDRQcezSiqihpin",
  "key1": "56jSaDfBs5SJvUjzU1QCvZDWborzemBKkZP163jYj2EvWqUDJcLmxy3hjnY9ZNUQH3c1mYQCRiXaYBTm9p74gKEi",
  "key2": "5gvENtUDrVaSsJrKaN3fCVuLN8twLx49pByNL6xiRfyxAqXYDP3E5Yc5VfXFJqubY8zQomzajNJ2x2SDkrCDsPgT",
  "key3": "3db4bMxHmTLcdEnJTrKQX4Y6wPRFdbgLc8YcVHSaaog6rmL7ST3PxDkAM48txjzrTeN2dzLwsGpe9scqWuNQNXnz",
  "key4": "2SsAoGJ3cXhN3ZdHzdQsU6cCWDgVkgxYW2YNnkyxi8tqXcQKdjhStynyrrrfomRHZzvBCdWEsbrN6NQEJUxRf2xR",
  "key5": "q75AHgjTZFBF5dbHCDpayHvDW1Cm7w1JJvaPcasQ1SKFYiC11y4NsvMGTcMiPLU4CJdWTtL66L4tcDh7rx5EtS6",
  "key6": "4TwxLaW68eR1BL8GHQt6L4oWbJHeDBcsubrP3suYMyUP43ETsnegLCDkk3tEa9qPuCbTUsNzYmLpVr92sDnEaQ49",
  "key7": "AuUWau5yR4AC5ouzSFQQckiz56mJnwtuSHXwurC2xvTU1791bjXzpWUG2ztsGxvt3KsvjLX1ejR5M5TUETyJMcZ",
  "key8": "2Adn8LZYFU4YzkhsJkNRECUXNe2CKfMU8mdaPjV9ALYYoBbTuFmzHNmyDuB1nFMmJf6LqevK5ikuMGKjC9Z2SCS9",
  "key9": "5NrcAB7iCJCeh68N725k8xt8FivLGThGHg3VWEsWmKTcZK7ymJCFpQnHYVWGxuesiTYTbbStUY8CJXnDASrW27hA",
  "key10": "2xbg3uwyRaYfn2jynzFhosJhe6Gxp1wtR8B6LNnEQV2hq1wRnKwQWycJZ4A3TBjaeALF4us7nwotSUnFXAsHgNJY",
  "key11": "4fdfhKf2RiBwzzUDTcHxXwLrCBwRD2VaC9sECzioUP8taBPmYPUYwxt2tn9w8umZM9b1jVsf3p3CKRkTfBXc4Zkx",
  "key12": "2z9bUJTMMkFugaJMAMV3reqzAyZbp594VLqUNN17pg8yNYzSyuZxfdirp7UePoLab5VjgdVG1nuiJNsPjQfBgBnb",
  "key13": "5SNpTFfabSD9rY4kMMmtRbwoQAtFAJ2MV22h4pL5W4awcnNhGd4RLQRB9wYSbtK3xwvAce4ZQyLpfkcWAtt5g9ek",
  "key14": "3DgPCELB4nk7JrQuFT8kePdyyMayjbCHsnFxZQzz6qL2D88YUGUowVayGLhrFNLwJZqVb7oyvf3zUQV9tGeWWRH1",
  "key15": "3VjqrxkRybMxk5fSoaPmLZgkr7G5RfjmpqCxzxyuEDngfFKKMezTSsWG2mHt7L28FzYHKXtHK8imbX5SrJxvfEmR",
  "key16": "5NHQauFjbP1dQTtBcZjeng9swaMVumFDcctAAGqjHKTWHvxbPPmyPUAPh37VHWZKZMyYnSePRx7eP9bAQ1MnWwnj",
  "key17": "329PCzmyjxRroQxCimKKTrLAjkypPPXsb9LXmBeqoB9ZzRrXTmVbtJhctgJH5J5JN1EdW3TSDuX8zGmaXrUrRKiv",
  "key18": "bwGTaEyxjcFqdCNV7fSCjK5S9ofJRXiSVn28uVb4DPo1jTemaWLx9EssRQTq4sccrkDoMKzjtTC1kdxXGnm16CT",
  "key19": "2YpGHc1bEyCLU49i7TpznvS9hkAX8k6fGercMY2r77RuNvykoD5Zq3zJw4NzP7nkCieouqdpwL8nyAGEaMvYpiEU",
  "key20": "5TbSYSTVP2V2fMABj5JbhijC3o88x3qC7tt4vccwM6cqMtZ1yXUz6kg1ENbnTBGVHkthVHqSP39CiytHGZCfG9yu",
  "key21": "3B3VbKBLZ5TDjxMYxRXeaARaWQHP6jpSJAZBA9Y8zfigDFYSVea7KQMsLxfpMdkEWmeL6bBUvmfdpFGDk4UTT9bY",
  "key22": "3MnfJKTjf3UXhGgHvU2XUJSRzsU78PZRjgtresvuEbw4oCkDLRSfeUj694TVTDF133QwVJ5WSAfm1ZXfUuD8Vph4",
  "key23": "2ST3MYPygs6jhZ1yqHygdj4FatBrqxXzDV8Fb99B131crbR9KGwoyteBMFYRZStH91NLiwKuHVKkQW1ek9qmxdKp",
  "key24": "27paTDRPw43ebYJUAV9vbgqwjYtX5LenXU9z1KLfKwsmXghsrym9SFhkBQ2WzmwQRfWPYLCQSrZ91aoGxZ5dT5HJ",
  "key25": "3TM9k85K3vSsWhMJbtNgFUaBFvdYq5cuvW4vRBaLnSAyWFatEJDmhtxkhXXzowDYHUtVY7e9DBY1vvKjEK2JnAkG",
  "key26": "22Hn1tcqMvcHkJcW1y9FjmHGteGmJA6bAapQxfn5HLZzNKBJGybjK27ArnskcdDGv5AK8DtmbDJhWaGUW6pbNeRA",
  "key27": "3rUPh6xm8GbrVS6kSYPEiQ1oAFcLRHnKf2hgrASRH2ZiizbyMP6wbMMEETbweCGDn42vZVpAX3ML8LQPt3VYEGBh",
  "key28": "4j45ExiSQrmb7gfRqSfEi2XHx9SuVwRkvq9ybazS1ZxaZUvpYjiDcdHX1tmZXvFcLKiEWXDj2D3ENimFDzfiS3cf"
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
