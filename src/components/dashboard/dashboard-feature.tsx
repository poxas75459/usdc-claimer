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
    "3QAP39iXsKyXrjcnuGC78ZkC4cU4YKh8VBT7neug5kd9eSibmshkLoE4DbgvSzkxgbu89F1jC7kBfStgVm5vzxBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6xJvuqctG9hXR4z6rHb36z3N4hsvMypKw61Gm7pwhGkmkJRHJe3YHcFsFgFWCGRka2PDnvFD9QR8MFLhhAVjjH",
  "key1": "4xUA41VdxFZPGfUMNvgzSZ3FcBf9f4tYD2punpkK798ESTJnLgiJbuZxDEdSf896zAHcGqNAaCqRLZTVhSLuZJ6D",
  "key2": "4wTcX1GeMAuDBdSe1JCQK1whTVYaoPwKnm9yxLsgdUir2FtJQpo5eDUs5BTVzqqCnyKvTBQzUAs1QdfWsJmr7wWb",
  "key3": "9yYHNGynXEjYLwckiHuB8rfJNnRUR52ECHxfu9bsru7q17Fsyn5rjCShThYyyNtUJY6tyZB8asrCUQ1EAp1uyRo",
  "key4": "5KSqTPcAYTKYevnydgowMccoDmEJdvPwEXqwMjDdy132wd4r6pzmZUDMJfEZLa3u2iMZr1QEfghavoacmrU8mZyN",
  "key5": "ejnQ1sGAibnNrt43upJXRdTX3wTvnDmXzcwwq8PsnYFxr5Pk3aenUPcd4MjBUSw6e9mzoXaLjXkp3CRHUewtrso",
  "key6": "5m91bnPUhD83qKZZ1hohCAU6V8ssrAAzt2JL116ap8eyrgqdwLPLaT3fw6xmbD81c9Azxb1P44mF92uoqAexty52",
  "key7": "4dvhZjE2BL6jGxgX3Stfp2dbyFxJ76Lo6gBHaDqWvh29csQKBgFaw9WUJTt151zgkkW8eF9HmdKogf4bXbmFCSxG",
  "key8": "JCFUfPws9Cu7JHyA62bnxikA9zCve8uDcP8ZsCXXQFcApf2FdzkM2ekHmZmNDTsqAnxZxF9mjA4S7jjUEq76c3M",
  "key9": "4ZRapULBxosjJ4hUkC2HELmtbk47QcCkacRkTuH4ikHFL8UMFCMTxKcnEAbnXMAtpVeUfWTWY8AfmF6AjYHXvqCV",
  "key10": "cp14dt4e8JM1ocdiS5ogbMCR4h4mAMdd1WoMduzpZkmUiNL2jaDzkNe38jw7JeJW9t1txo7Bik1wF2FPGSDWjZP",
  "key11": "3YHtuLKG5cNX64VvxrZGw2VqdvADbc1FQrCcU4QAfXbScYQdmQs6aNsQau8bdDaUx4XUmiBgqY2p1ekq5AdkPVni",
  "key12": "HG17JFXwfEVDRR4EKgTiaUjs9CD1BmD4ExQaUkGqvjDtgevm6X9EJWwcZ2UqP6BSuqJXc7wfERfL2RJAMTeRhiK",
  "key13": "2gi1vBbPaz9TCwHYGfYZM4zBVkFqGKf1d1tTaDLfokj8Jrp2oC9v2kTUPrbwP3TXxnRJXf5xbJZwKcrpbdYikZBF",
  "key14": "31wx5r7QnnYz5jhHD9ZnHPxy2BhQSqqkZF68rWsd18UnPhdSEx3iZZopt8ucZUHeG7uyLiwtAzdS7LjMFv9fAUPU",
  "key15": "5JXWq7VTnpvrhUEwoK1VbjLYkv4E59sorm7yUQgNhh2mqRwXTL1rsgit5bYLW12F6eYceLeWwYWdCAHbSyxUVYSY",
  "key16": "65LYqo2PeR9d7bP9HhxwCbevYdEPP1fW7FwrF6cc8Hbsu5bqSM1jjqdDAXsqB94LnjhrTip7x6VBvCZ6WQQ2qdNZ",
  "key17": "5vAJFS9h6S4cNJ8qj8oXSmX6TtS76QWwUezM7uDTu8Cg8MqfPhjGuVNG4VqqwVDVfmFFdmwBF85WYzSCfpF1tUrC",
  "key18": "3UudsHSZuw7N9kH5uEFF1va79vcWYQdj8d5q2Nu5xSUbWunMCX8j33vMxjYvGZJqowcuQ5Vtd2xD6XwH2ALKUiU2",
  "key19": "33sU2sDTfxTTTneuSv6YPpcSipAtt5NDAqfgeHibTiMvYBUREt1wVhekardmHBX76mep3vYUJ68ejE2chyLp5vuk",
  "key20": "3R9NkHvSV2xVGqeJf6keiYVb8CjDNpKxW7aMywdNsVdcFeuUVbLQtRSqxpAnTNZpzVM4nuewCmUW9GD4uM6bAwsR",
  "key21": "5Ka6qy9gnsjh3AwJ2wue3U2H6iD3RkfUHrPMrS5LAyEHREdqWRCXE9PydgPpT443sYgLymTxwkKTiKFx46s4Uxhc",
  "key22": "5nnFM8AAtEoFXGrLLEYtSiSTmCe54reWeYmvs3vuTN31WcUY5Trsh6zt4CM8v5pz6SXeiLHKUW3d5FJZh3P1HSx",
  "key23": "31A7ZKRUtsdjQqD9VBarFcGWHTDrRjzdqbX8xkrjYjusWKMgDzbSFHNgNVYgDEX9dhCnWJ7amoLkU3LDRTSt28ot",
  "key24": "4LzHguEWj2LAF2BfSyPhnWbEbSids1D73gJ2AmrfhAPdKZpLZjHHba2faYei5N1Cjv4skhoFusEQQHPNfAL5ssq5",
  "key25": "55sYtgoa3HZQtqqgmV9FXkYR1yGo3jBULXKHRw4vuZH7oDyk8CrqCWWd6wnEYxaKuPLcQHTmrYPwtHPZgb4eAoUi",
  "key26": "5wc7hoLVGKvpq2C9uVWyGUDkJAdV6TyywAZX22mYQs2dVjMH62tKjo3JrEHEqhFgYTD3n3XY5mfyyx1SKLXnTJHC",
  "key27": "3UcSf1y9Ht2T5PTeMmbdnCioXrKihU47j13ywFSsDBeUEQkSn62wwB7unhoTBzTLqwD864tuxCQ4iJzKtdHNX4nw",
  "key28": "5q1pLPdobr4svqrw1CzM6idbgdG7Ym3qr889Gq6YFgFymLsx1KGJKZkacKDy54dgk6UmVpJNvGjo5ZnHgJdYaUR1",
  "key29": "27jJ4mnMsuPTfXgHU4btNF4THmhLY8mnJSi1ASh4WyqUU5DBEX9qZ5EAAzzcwnL8UuoQWY5RXsJTRVQpF3gtYsdp",
  "key30": "666vW7MAfJM4qbFbKkGYKbZPhc74Gbqu8PN9CEW6k8dJKCeRRuNXLCy13ZeycyRKSCUJtZ1j4XCPLVPDdYZcXGFA",
  "key31": "3RxrQyHQGBCWsJtxhrahr5pc42JJbApXxnAU54GfqkJ8SEMjJhJkAE4fMCjdNr4quV6VUKGYr6cqSU6WYFsaKGcV",
  "key32": "9A5wC5nDiWaJfCWEqXbdsSHrajWY6Cnm7eXCCX6xiUecUdsqv2D5Do4gKpNRjqhNt7pa2gsDKADCNggK3LDYGg2",
  "key33": "HV3JpumNmVhFDSXTbLzaepJRorVCSsjXyvN2PGerfedzmqHHFEACLapY1i6BKVidFyi4VjqACTuHNRFqLf7dPji",
  "key34": "3zd1YSyNfuXewZuyEHbQ2h4PeZPj3PPA8gNzJ4UkoE3zFMk2FKrkp2dxQF58gpYLsjZtZerpYFZet1ht6N7oVcoL",
  "key35": "2Ac9XAfjPNUvf4K77Be9QNzoKB8CqyhydSw9erRr1Yfri9uhgZQLJRtCy9syvN6MgrQQki9juTgyLWXpKFSz1Ztj",
  "key36": "PLxHhBrVBEQg8Cansihx7GDo2GHJXZr7bq8mMje3tNd8JcateSEXvbcopro1FFs7Eo7G8LBHG4NsUrbEa4SWr7n",
  "key37": "4HT4BSrhY37sVPDZrXPno6j7cgdcJap5zvhDXshAxkQkP8Ut6mrZNEgURqguGVwG5mqvoDfdaSb8Kf87zLhSQMAB",
  "key38": "4rA9tXgH8zUAe9X52iavZpDEgDyLoHSado52zU7mNLsexgtmUnsPoDVeaUq7vx1fdXjmFf7SMnkfx8JKpxyn9awX"
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
