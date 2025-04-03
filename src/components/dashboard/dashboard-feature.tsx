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
    "47NKWpeQHg3FCTw14S6KvrvTz2C7GwXEUdEjR2Q64A3po2BbCsBfGX5n4Z3JPcThw6b5EYvpg9gUdqvjmLKPyyLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NwQp8hk5h3PkJdb1PG2rB3qbe16A3vGiEw9MJv4hmrsNTQGckp5A99MfGFXfS6gzLA36ZkboGaoQAohJfRUpgq2",
  "key1": "5WuYFfC1pSMQtbFmkddeNzg7Qy4AVpg4cTywmNmWB427SVFcGWnRPU4osRaTK5Q1oxH7nSud8goc4ZCpv4uaNSFr",
  "key2": "38Fmf4gbKEPCzzgoyCgmKhMtBYoqnEhtGpkok2tDQ1CVQFVoQvwEVfwsstcpxQwutQoBCWY9AFUbiXa3iEXTb9Dy",
  "key3": "3byTHWTotHf4rinWQEkHvnfqosRLQhfm2r2hax4uTixrELHqUo5Lm1G5CGZq3WHJqbfE6QDf8HKCnzntaPX2jqgw",
  "key4": "qFzeRKxhbQ17dVAw8K2F1xQ3T9AvsHuAW2yivu4UAQNjyKUCjnp8JvTaW68JYgas2K8kCia5WA3azEybihmrRJf",
  "key5": "28K8NvKbTH51ZVq1YcrSBKGCu79XQ34vHowcDdxj7UBoyjZjWwNhD2XQh19VQfrPS1iMMavtLCrVzp5Mu5E3hxMk",
  "key6": "5gBcKMdC4Yuco5PUC1J62yXk8HvHkgzzswWaoUUaDLj64PKpYXHh4AAnvuYgoL4QXGq6YhqGbuJrjGJuW9h3W7Y",
  "key7": "3HKAMmr5yCuqeSNiLqbz6bnfvsEura7pQTh4ZmNi3tpAgHptmVVKUAt4LviLvfRLQwkzPT1YaEzVzaPU6YAZrpF9",
  "key8": "4rGobRZkTd3VdTjMu9jZdTExpjkgW38LbkssYfeuqJqDswnZvQrrh29UsjSov8GFynqeNQ4f4vxAGQNvmRvG2yUz",
  "key9": "2Pb4HybfSfha8aoY5g6KYGsfTYXsv7demriFstWbUuvuhhSjPBwRYSCoJNMvGShViJsQsAvG2cQS9Y4tJ3hR7Z91",
  "key10": "j5Mmr6Ffwm7g5c99yGbPxnpjjPqwbeg1osXHLhFZ6sLuBGG5suiMjDzfxrHBo13Zz63PEPojY7UMEufPTPJAZLP",
  "key11": "4JUFCrkz64mhnLvPKN9zS2ZdT91aenwU5htP7bApd94ZCR5FaSmC9FronjZ3jPJekdHmPSRjZRoq3YRVrFPnfuCV",
  "key12": "MciCLK6a3oFX253zsjKmFeZ2i6pHwpfQFYNPCNKdir7krHgjoj7saKfaPS3AXdfzknrC1aZqBkyWrKD3qdynsgN",
  "key13": "793AuFw5VUuka1SvyGG9NTDHN3WTWKyPr5P8zTD9bxkyTeCHrUeQoXrrz828d88KsbW3YvrBAiijmWcQARHZGrS",
  "key14": "a4kEfj3fESuWoMTyCyH28KN5SDcyb2BtHmWKBjfCdXNS4cbTVkyGzc4sVqP5vZzjVWL9t1t7EihjKbEXCRPhP8p",
  "key15": "4eVdkL2dnrbaLzPu2x4XjZLp5V7KzznC8JJBYcjpckZhZyMTbCuGni96rn1BTvtBh81HRuSb7z8pQT9ifDZ6DLwt",
  "key16": "5RHyktFDjvHD7SafdUXtmkm15P7gtnoFMjFc8B6KesVf6hTrH2TH8nomeWx23CXbpdopwcjpzvPV4bxRhBqGvuto",
  "key17": "4daA5ura7BzUbnUvvLSJ9z4o5ZFKdan6NYY8AJ21D8V5kcvpJWFENmJYiWw5p3S8jm9DFciDxPf4oqk6yebETaJ6",
  "key18": "4fdYgJCqNKuhSFJXoCF8RDQGNZbjPQ5EJYqoqXNCqm2T1QvrJTaCSvT7ykpgraaM28ig3UgzPuheq7RJG67S23cn",
  "key19": "31By1FXp1CvG8ZCqhKmjkxCBFk7yfpmKjKBDwezv74vVEqTTx36K6658NpfayFohMtg1E1wTDZqX2mtj4oT7VCUP",
  "key20": "46xNuozzmSCxY8P6pizxNtm8iz2A4oHx76KE8uZxyEpqzt2jJX9eTwhonoGfvkWiVVPeXh9YYjUKJ4wZ9CDz65sv",
  "key21": "5UpG4y5f26SLDkELMxDzv5QPo6Am1BMhAf8yQ1D2K3SysaYqM11FM8vLdGEoRcVdtpWG5KxhzXxXK4ahDuBHz5en",
  "key22": "2S7WZ4fMJ5koaiRHae49Bgqo4V9eX8Lk7Ghygt6JsBWJxsFYdTD45SwqCd36SYwibNjnyScHP1aM7vLM5NprmT6X",
  "key23": "23ZrEgWm5V9V8nFWqrLUCKfKnjtFPRzRUxnhLs2FmvemZ3zH2g9wcebjayy5YnKvUttAyAvUxbHYppaCsMto2jJK",
  "key24": "4T1MjZifm2xwQB9m49rAQ4Dte6bLj6mFpb58PwTByvqdveVMfj4uC39VA4fMJku4jAFUQEkVckwZTuEgydPUFWy5",
  "key25": "5kSme8Cgccv1cKDPynb7Q7xH2ijBbFxWHNSamgagWHrYRhPNqscLGvTwcNqgAi9L1egZGuUi5WTmr9J1Fcd7JvPi",
  "key26": "5JN6vGFYRrZn5eVk5Q9CVCgNwJv7kUeMUkHtodMWou9qJcxh5pUjYmn9TT7GFZ9savQdbYTMxahCgb3BY2Rk3gmc",
  "key27": "2M2CnZD1cUZAHaczzFKWcfPM8mJPbt5DBp2acHX2HKpntEVMsMW13Z6xNh2cZo5ChiCnqjTFuXxjW6ePHkA19g7d",
  "key28": "3HYFHrDnNpTJbzSyYCiRV4xspqnW1rijbQxawsRxynvkoz7pa9CNU2hmYWUsUe2nStQPtiz8idnpSBemubJPvWZg",
  "key29": "w3FjFwNNvKgNcxjDNob8uK2MnuXD9qnqygr1hmNoJRUsQBdm4ccJQ76QP8r95wvs6AmLtgddU7dLZVvvpKbK35y",
  "key30": "3Tj8DFvThiMarWKv2evwJ2ZK5xAjG6FxiEoaXDrLC96PVfY1PBoyZ4jbFy1hGk2NYhiaDJRtwVBqQSh1hc3zzPGw",
  "key31": "3TmMnrqPPVj7ZxeGCAUox5DkitA577PFt1DgohHQofBYUvrgrtoFNP7PhqD4r8AZgHTCM31Rjx4bbbb5pgdWgTEA",
  "key32": "349LRFGrmjCRm76aNivZAngZcM6DD5YcCXgKT9ZwDep3zmhRkdvyVff4qa2Zx4BWgjkoUMGScTEuBwev7PRTnhXR",
  "key33": "4P1yMhjt563cwAZikXQRjwbS9WVqDnBbhmhCKdKpQAbod7cy9RBCAsYJARTUwZ5JUyheYLWZRoRRFuY36VvF4UP8",
  "key34": "SdTa2aQWH3FQHNhBuNFFCqAwV9tnqPUWTmRAvqwdmR6ohd4sjUkAZGtNjrDxQYMyZxXf8RwQ6zfGBKiKdVhVAL2",
  "key35": "434RN59RPe6U882SkLDxgSTQYmFN1SGPEEThVtva9m7qRARF4tkEkXyaVYujfVzDSEyLkFpEDy8na8PuSVMC7hHS",
  "key36": "s9Z3pwwE5rB5Q5zDBegyj2Ef9otbH8s4gdYdckhM5K1UPY5G2wm6HaZx9ErM2ncJp7DPd2uZrTofjPDjS2FuGqL",
  "key37": "5NoKddFDVcgqdXMLhS7vLHrC4NRUXqsWgkcGB8oCZNEvzkeHFhnQcDJwpH6hUGG6XBRGuXhqc3F579gCbr2Shbje",
  "key38": "155GwJeTYfiBVcfyW8To3bgj4jQtyRoDK2fvgX2Zsxa3w3dMFy5DguX7X8Qo2MjJmfiYdbDUnvifW89M15FGisv",
  "key39": "23xdNTaW49r7oFgjEPCBriFxthoX8hy3kYmesKQHkZiaer2Qqg1pDyY5R8zBumzo7WCgGR1WAcmuY5eshtVpzUy6",
  "key40": "4dNX3C4NtmjXhWSNppF6wghfQ7JznhkSY3Xg5XradmJdGW7o2pcViB3gynp2hakN8e6xB4EB2d92i33DJECdLYzn",
  "key41": "4bWtBhgvJqjBjGswiNG6w2B4WNHbcgT7ALKdmU2c7tJWrvbrpZP1gTJyjfK9okeNVDP6BqykkjE3zhAjkeE6Cbt6",
  "key42": "3TchQCFDyJX4QsiJt5JZEvPeUQ81pUsE1aPYpp3wusPsMKeZdwqB1vGuK1ZnP7UR9hE61X1pPEcsrmzMsFVm2i8P",
  "key43": "2Th5JkfrXpA4YbdCB54DuNLDJnRhmesMJoc8wshMKkCwxvwtHArmazUC11xRBqsiziAbf4kfqkd8sndCYpZyGtbL",
  "key44": "3VtJck1PayhoRfLcZNDkLMbR6pgjLoqz8JhpKbYno1DYdJ3TmbRhaz7rQkq4W4VUAwjLqSw31Wq9CqPR3mZhhybr",
  "key45": "21eT7zwcoF53eNSYN5YBLje4EDx8jRE4qAVQ5ZAQjnjw3otevvqE6RHuaaq25Q3mbXZeN2QB4AyGXw2JPF95TuSD",
  "key46": "3siSrnLsAtGMVhPQArULRXVDUsYt4qTpTNCsVDKc1fuaYkf9jzBE454RKehzJdMWSWWrkKtrkH86Ayg7sEtimvpY",
  "key47": "3rWkwzQxLeW4qhJdgTA3fdWyKBuVJzHqz1MAySsNPRw2sX4v1M7tP9fGu6tiia35KbryWrMd6ms31a114QxDKQ1o",
  "key48": "3tsCWLvuXG1xoDgXNJozPNuEFPX2oUZB1b41CKRFgfSeeCaADK4sE921TuR9snvHg5rAG2Aiz2K1ZoxaA5KMbz5A",
  "key49": "4THqmDJfC1JYQeJSg7okZZmePVdp2LnvCW5NxAcaEygGnYSXSwWeeV1DtXCS4st11nYA96XtZNUSv5cZc4XredBX"
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
