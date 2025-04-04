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
    "4Z9LgjJafnsfEKz9eMovcTGCBXMn4NFmvSTpo7TPxnzpS7hTWWso9iVrUPk3aTwX8di7GZYnD12wTjppcK1mqSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8PYcrhMAaxTpqpG2qxsJevN2KPx2v88tG2kYtRyKPPPtfJUraKyibsYkikmWYSvpUQ3vYRNvXNAWCU6BwRExYR",
  "key1": "WoyXhrEGppwNZgwpsvrmvFG3btVkSSLY1bFUk7Jo5eEe45Z4MeefsCvfg62zaz8TADByzvTr64dLZBBj4sRSRop",
  "key2": "3KBPmhv36TwwnfN4QV5LmUBPxoZKH1PY4YgpxrubvdqhwQgk9ogu8CDqdUxhBYo5KfvAYMSpm8n5v7UG8CN1wpTM",
  "key3": "2DEFgVDRaBRpQqMKvy2YjBDBqCWafiFDQypvdKjvWywf9haXPrX5GdkssVWPJBAwb8f2QM9ukTdCUrq3uWxSenfs",
  "key4": "47AuV2D4xeBqXGkdqx26Gy5kKetyJQ7jCLf5Np5eN2mx7VQZ7dXoG9u2SWbdVeG7N1Q4j2mMmJ5kTFLFX5XGq9sy",
  "key5": "4RyEC92SbFaLRcFDQjk9ZiRu1FnKgAZf4xEor47xLcWmCLWtWCihNwXwycNA5WQ7eyynyvD3FcxPCPcz7SAZSsCY",
  "key6": "gRbskUeyistygiDwD3Ne6xMhaKJkTq213hr6DsdqwyimUMQHiq6qPduGk8PuE84GBGMLHCeSbQFpJHrAGUbFT5j",
  "key7": "3zE1EsWGo1zGvFkQHyvaYvzM72hdXk6fo3KtVyeBqXCbZ64cgWGuSr2jB183bERrYxiisrciYrCNz5NAdGuvzyFz",
  "key8": "24M7QpHozQd736Vov9BN3e6C4UzSx6gRAyiBasVXsyWdpog48AqAdnBAZJV6pUQQ1R5vja8v6P1E2BAXEdpJKNNX",
  "key9": "3ZgCWEezc62GatPYVzgaTcm6p6jrj5GvdstCejx5CM4WVAfjpM2qnj4F12NHHQUVSHt67r8t9XTU51eWqJFJDrFk",
  "key10": "5CxsYD8gCcCjp4BGZYyiFYPSp5MkR7px35RBWuaybTEX9CKGEorhA1aegTZMp2qe3JznvbGbbGa2rgwSea7aX4Zx",
  "key11": "5EG8oeA8pXaevL6eiHCr1nLneJZJcX2Us5ARnijsiGEiLjes8pbR1xLj5Nus7jten5mejgPigZiJLaVm11gB1uYb",
  "key12": "2DCq2MtNtVvN3b6wafUu9YyxoHoFgLuiZs62DbhSMVKSEFB9yZGRzgexKhBT7twfGyJsC5dhyUDW4oaM8823S8ku",
  "key13": "4ChsqFbHmqXuvjTfsdDd6rXct7LdrDWCJpue9yxU1DdPYGujYkakjDs6JyJZWhGa7NRzceXAVFRPhWQyUet9Vc3m",
  "key14": "3ESgUDjr4MmBi3KyZhe7ccP7f2KHgKdWW9koKFrtR56PeXNsVE7wPgMkh1xEhe7qHd1661DpGSLmqGzhqbPUQVWb",
  "key15": "q9LoazqgjgYQ86vZUHi85faAiqd46WigswpX41DdPATQMRKZREez8ED1VRjuAgQfUfqiBZJzqGbUXf3YeitjHC6",
  "key16": "3km5YWiWAB1KGhSseLBTDCfwNSKmxthEuUCFTGEaeEx1QpMhva65sd3TsEcq8zQTEWHu4JzjgwWNvddu3KCnJqag",
  "key17": "4nbGDY1UhKaom1a5YtJTdcowLmVfu8BHEz2z5HvtCGbVbREXQWLun6MEmCDjBrBbuUeYyGEP6866LM54AbkwtKNU",
  "key18": "24v4orhzFuKXkuGwpPZdFtpAu1NfouSAqHsytBcN5csdgGpdyfNEtRCC5AmKx19rqAxML18pw4tmDDSSNfPk7KuF",
  "key19": "2qQSbkeqXCYkRaPnmumyGeG8LFe39axnPpjHRPvigUeRxGvXzxbuj5LKR5AtRo3T2wu5q9x9SLpGE3xi8rPWUHxz",
  "key20": "2nqJNjhaSQUrpWRdkwzw2KrSC8KzKiPLkvi5bADTFs8Vxj61vJvNzr89FNGkwxCezJ22zF5e7Jk6fh8tSoBVXNRt",
  "key21": "s6bhmNGUAhrJftniudLfosSvFvt9i4UKcjM5Mhu6SaaUYWAeMEbiUw5dzoDwHmPoNsB5LB5WYKEs3k3ZndetREE",
  "key22": "2sGeWKMxENYuyUBFiPobMaxXvwjoR6MCMk52juttwQBM8JNg5PC8FkbhJWCZfEo4kWEvKgYEbce8CXBNhp1VZD99",
  "key23": "2Wf5AMjVEQ4XK4XDS5Z3kPZS6Ygzoy42ESdrNdRxG12FwR4kQy8UjBdA4JAbzyeptqvL7UNcXhSQiF4ZMuJxPieu",
  "key24": "5bAb9Ck4kCuPjeQBqTw7sYWhSumS4sbWLXp93qVJoNE2Fvynwk6uLibtQ5jTHrYt5Z6ePSVRNqMtpnYVUE2STZ6m",
  "key25": "439evkfgw3orp5wYpHST3a4Qr4MdqxsK19a9kWZk6MiZNffk5Gkb65oXCyhAuJ1577w738uv76XJjeEZTYZ8x8X9",
  "key26": "5ojAXFxreVrex52vwSQdD6bbbHvagHrjENHJqFSt47wJrJ3BnhKHmYEAKHFgdSCGTW9ktbcL6kgZgJcWvywGhaW2",
  "key27": "5Z6WnqKLFEUF9Cmzz5u7JmHxVErH1hVPqV3hgsHDeP2J4wfYNS9P5AyiUfkY9bANNHc8BzB2kcxK7W6qwWy1SKkE",
  "key28": "4ef7EukirMGGdaZCT1CWeuECdUysGMAMbto4mMpSfcwPL9FCNjmtt7ot73qGgQR4s7TN5WRiVSiTP7cobwbpuFzP",
  "key29": "54ycAPkKXoT53gqukxLpAYmWLmMqiNyydC5EyHPA4xLMCSdQ5jgWzJi4cnyX7Ahtnkoa85N4KB4ZSHfR4wgfTTQm",
  "key30": "3gnUCJ2AS2HKs9JjykhkkRv9JUPz5EE6aiijUasp5jZMacC7EAkqJTre4r6wuzACNBBicAzGvwbauxCs27S1j4Te",
  "key31": "5H3LKHyk4EKDTyUu2Mfg2hoM61kFoWzAwqGUbWZrhSk79vZMKvKwUjmyHAjjuCDv778c7vnfHjMgBy8c9R3NdiJQ",
  "key32": "3eAthi4vuyNmepLf3ihh5wPam5Yhx7BwxhHfBBpi9qhMMfsHkF1TatvXFAv4NBsgLcrneud8RLtvJMqCCasej2Ym",
  "key33": "27THQQkvetmascMCtr9ZhmJAyscSx9JFKDckAfxnW4oZM4GLHJ9SZxkm4GujgySxCNpRSypqmsrDEYm5TWs2oPrT",
  "key34": "4HdFhpaeT3qarsCVtktGQcMQc3WBr2SZKLyKLN45Ykw4xh4CX6vLkp94hWd7sWH2h3CWwLxH3TE4SJsk68tGQcxA",
  "key35": "254ZiYKVCyRdjZykvQv7Ypd7eF2deYrpqjrFiahYbZHRC12Cv3U9RSpKtpQvAcEZYCufXrCU7VcQp6YKUPqwdY6v",
  "key36": "3DgwYcuWQ5pmH5Rf7Vj9DbCU7Zt1GGH1m8FYzm94YMtBGBjQxmZMFkkmEUHPwjZbdRKeqJBXuhxAZyRtTCSwZ25F",
  "key37": "4G176YCRf22S6GXNYc9MUsUzAaBjgQJDkEPE1wnqSA97qVwWtnJzP4eU8NCqe8JrXTUgev7e3SgwKNAWLzsNT8tw",
  "key38": "2pY3f3A4xdEG8j6z1TezcA5MVCsgerg6hZM49CdhcESnMwXzY3xtun6dzzVAkhzAo6Viciae3ZgXRrLjWUFzhwom",
  "key39": "2kEME5gCbbCccYHdhFFrRWji7HaieGTPRz6R8yBv1JSyhi5YkBeAUTkkR9cMQa6Di2UXa1tUY8yKU8mNUQpCygog",
  "key40": "4bRbSUh4eQ6oGSMFfQTRgKN8w9HgivAxbdhqHVxazWkmaHx4ZasG821vmXufQA456jrvvvXWEXTif3ufJ2B7aMm7",
  "key41": "49zwf6SgkXrstiocTn6JF97FskDFmDSXVUJ2NF4K5L5nu4HXn92jtxgvRJf5Y1Wtwguf3pk5KPQDuVfYqkaT42Vw",
  "key42": "3cb6cSdf6j27rsFzGjGC9kryVdLQt7AkVtpLfsjuWnw2Y2CWtpatTcyJvHMT43RZVaobBSSBpeS18CcC7BfN92pD",
  "key43": "5zzqv6c65YyaxsmuoUqtooGMUPTrZ7e4AnnXCRHgQJ5N6gV9WX5sSqRAWyNiuTNr9rc2z4echkGzZ15m8R3F64Rt",
  "key44": "4G5cnqjc3SD3ngiFSQ1rh3qvjeWYycMR5CNhkanNS9qQr3DyHjCW5KiazSb2WDbRSQW17ketwe6pZDv8D7ZYeq11",
  "key45": "3JCi31xBnRydoqMLUXZgwh7yFFJuE3HXYkmLqYscnSgXtxJaBT3vRQnD3PrLqHYkY3q7eumB84dTa4qb2aKPW2W",
  "key46": "3V7bNUj7D9qUB4Ud2yb5L98k6aFfNWFmE3rnGt7jN242FRERv4Drs8BdLfW2hD58GdyYrbWdbu38anQHbSwkgjUB",
  "key47": "3ngyRBBDvxtZD4nitkt1AEHAWUH6SPspAYHL8eTXMy3EDyqKAwQMdfZRSzKFWTTax8TiN9XuzJQXGmmW5pLsbxtb"
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
