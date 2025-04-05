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
    "46xKsHv34GQMob6sC4VRX9vARxsWJfjQFwpXej7Y5mrdZndAZoCpQD3y3Z7WkJ3RehU6oU4xp9tE8h549rcJYugZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVqvMt73VQKhD8Acpg1YadeYft48sEk81Qn6aoHax1YigquAhz48JfJ3gSpTWn6TBLma4VhteFMboreLmMDjVBm",
  "key1": "4KQ2XiiakWeMrrfdGUKUMvfJ2Ewq5KzNDJRR6QGA75TFYgh15iifZf6BR2PkAeL2AcJoqkPtTJocoH1feUxMWUUg",
  "key2": "YRuwcJbMi5ePkDL4KW46s7Mrn12p6p6JUuLSx56kaeapnxiiZ2E9ENZfWWTKmg37wXp9xhgQDzYwzc24nx9Ps5N",
  "key3": "27BhkLwoDnE64d3TwPKf4bBZNeESEVGBqK3MJP4vfwmxsUsgTPmKyPmiNc5YU4mdHH9kYjG2TQdkGni9zCGQ8txG",
  "key4": "2jnF2k1jbFjZ9FBvMzY4QXPTJrNLhdbWuGK6v45bw5NZsyZbb4Nj4Z4eX6oBkaLTLehKTtjc6MxKJaNdzbG6So6T",
  "key5": "2koUWdAZymwRcFLg7b4girsT94XaXwKJuGVpjK4n3kc6TqRcNoH7hHXekTrtPe8SB9iBRmwHjKVc47Sw85iydW8g",
  "key6": "5QhhceRqSWppZ7WsQUJfUCc46Ri9NGnGjfuTLvj4AFhzVmLZMhwtKAAMGGQscLEV3N2MzttnbswofioW7Cchj4kw",
  "key7": "xLuLUTEgjFSVXK8MYf7NgxMeZ2uNw7VjZkbdh3p1gSH5R65ztEdGESUX7vZpRDc9w1wTUD3PnFJYbc1r6fcsC66",
  "key8": "2E6qVPYiGhcMqTETL945gdeuPtEdJNhQGiRgh9e1ntqvTEQmNmUFWPSa5YnEfFgJwu9ELb4WTgzAQRwx3AmV44ag",
  "key9": "PqNZU5UuJBdBBJ9rczVdCVborvS3GWhUip3ruD5Beu67gYTSo1H32mva5UpF3hePNu4Z4pS2yVdoZmkVeGg9r5t",
  "key10": "5pmmrRGK7hQNY9qVBvk6YMQMbPikMoEkk4jkcb3aPgEmyTH3AoRVZedzL1cva9fqego4pJkZ4MnrSGScYV4JpnZV",
  "key11": "2uhVuiHJukPVzd1UrPH3FQXJHGJsHKoKLnK77TacMTAn8dKLq6aNTV1EY3LVUeXaHv5wezY8SHhN4MW3zPkEsrtx",
  "key12": "5G1tkwPhMsq8n1q9GkxRxTcxvsyC8TbYqkLN9k2nmBroRLFqoGko2SVvMVugXnGMbu9kHKAjqxUd3DYghunXxdwH",
  "key13": "s1dV9Lqwjw4UeZUhm3ie9m6isdmGeV4y5ouibLUtJMjMUWNizxLBtqPVbnbfGyde8jFfLXaUQ9aVHNkCup5Q6LN",
  "key14": "2WVtFnqqAwMe7D87Zn8QeTQSCd5D1MBn3p1tmgarZjsvUoxx4YYtQybHVjKKwJZoP7z4WmjjLgk8JRYx82FKsM62",
  "key15": "2BB4VwpbKmvDRUSMqLKEBJMNyDnyDGtNPPz2oN7Ek5t9xYWgHC9gWpgih9jY6EwEKQhHMbZ2c2YF8TnSJ1Wwv99y",
  "key16": "oeKR7S8UWCgxFphMQFKzUUJ6qisizoKmosaXxTDjmRWem9qkiLfR4K9FCiDGfuqDHvPY4tsLfEwSFSWbshiYk6i",
  "key17": "57f9Z4tUtzynR93Yvo2m8a4ahEYpw3hTtAuz5xTcaJetHaYryppCGt3JFNrWfvbm5WBXb2n4FEQMFAQoKksowvLn",
  "key18": "45HaUt8sLqn5uFtZt6Dk7iEUPPPNXY2DGqHZB4RW6H2N43aFrL1SvZ9jLxnz1dwRPoroqX3epv1PJCD4no49LmMX",
  "key19": "3N5FBRUL3AsokFWcioQ9QA6XqfKujRbRSUomm2BqGo7N7v4DG1R5Vks5VBCRox3JRdgVbzYLLt3YtkUue2fsj42u",
  "key20": "51ttPzrzmfUCHe3ufjQnjymj5HYaKNJMDAoCthJtCEznDEwzeN9QCNs33wb9GdKxhMJ8hoorSgXPv4kFyAf8ocoM",
  "key21": "svHTqHyyKgchNeJjpXN6TwgAH5Ut9MdFsTFJYNjNCkiSPumHrfga98bWijqanFSyYHaGA2T8Xh4ZiMp1VxG7E4s",
  "key22": "4mMK9qjR4PWAdDh4c4is8kB5ssTbDnWsQkbefSHnN2HeWHRY4SyXGgWmvnb9yXrWHr7o8Wm6nPvSvuThtu39xerw",
  "key23": "465VmQxLcXF2qQc8Vqu6rNcvMRp6UfnmEBf6TnuPHwfW4bhDodbF6Do3dz16D1ukrVgkrmoxawmZ7taygHCmq14H",
  "key24": "33uc7jShxVvwhRf5wfQ4yhSnWhUm84c5WV7eR9qEfShKy8sLa9wUHDunYcCSmcJEnAcHLUZXqKgMVPJKacmFLP1D",
  "key25": "43SiwjScC1BSFhJrL6MPHxxhLP7SkHpb5i7okYo7ibM4oAD3d5nQTBfYVtznk1bouWtsFSPgqE8syFnXmS4ujhoq",
  "key26": "zxMnmkKgrz3k8FMh2XrBafNZVbVjHVPx9B4cuKhBBRWJFPxLh7UstdAm7BuecDygCjbSzXU5DNBsoQ6H6mUE4G8",
  "key27": "3zQvgrggJSUiDYKWAFbPAYVfbxqNqtcGzqaiTpJTpZAmaBbZeNnBEUEX19LezeoJBCSFvoLKW5ZgwG9f7ptcNCdz",
  "key28": "5AXBjMuLTYASc6K9i1abwDQFy1JDfxxPzRGGrKKviR6NHcRPdHC7UKBJ9j9rAqJDSXJvKz32Tv5SYfpUWLTrbyWM",
  "key29": "66hSWmTAKtGFReK2YGAmTaPbtp87DZLrQtuwcHVUTxURrCEWWQyQUXhZgdjn4iy1wNC3Lynn7G1xFBoaZKuMNCPS",
  "key30": "p8yAT2qgdJZcqaiLFSq1MvaoLYvQbdFZr3fxmmzuxpKFWbhhN3Jd8QGZwy2cgeRguwfnJ8Y3aKrNhD8CBtqwB8J",
  "key31": "2LXPnL4PT5XFFxZ15YRo5BfncpwEGLcy6L3YPsydK9QaouiAMyv6KmcFcw3u4RA5WfuvzjDQwhdUvgTQji7HPZmq",
  "key32": "5XgzxApvzDtD4m6swLnWgvGMkciNWX3x17jLPobUeVL89K1WQ3P9fD2pAgiwQtBd5GxjCgC8JQKxUfca63S1zjaf",
  "key33": "3pLWP9VRUowctXi9kDfPBYXGQtDpJrRKTfjVhVopC8F2GqSiWjNEF7wwLtYU9HrAv8gpfa9HTjPhccwnDYibsRLb",
  "key34": "57iYeQn3xPdXYZuRj79eBGpnTUM4VxQDfme6tqKsFavUYLdyCv1UDbYNuibbpswtZgAKQjDgYY4HrXpCsLzgKj94",
  "key35": "3d5vxuNWThomV3BYXdV2ModDk43T6Qgr9u6EdBCu8nv3Bv3PaZ87sqGZLphW9a8gpHGDdGDZhLaVdmiEaUai64ep"
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
