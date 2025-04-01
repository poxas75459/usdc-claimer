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
    "2gSPpd7iAf1YCUk24paZQL2XxaE2ZnefcyJsvfh9UgK12uonMSWLGdKN6dNTr9pinKF8PtRD9VwpeEJzjKvkneWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4z9zZXxjsAWKWYZm3jouAjWH4QTNT8wSuToRGTARpgXYP4DcxDmxcWweAumrq9LvN27uW1hyw6iSKiA4qEzii4",
  "key1": "2fXfG3sNFyVZoyLQCbHAg3YyALEEzDMWEZFzmFSvTUpkoFASthQ9fG9e2yZVzerSM6LimJiGxD6vvzWhPq1iWD1A",
  "key2": "51Rss1RvZHN4ioJC5bNsvX6VP32mCN3mr1RYfoCcVhe8Z6nig8SwpoG9sbbvwGffNG8QQMYStEtabPPAYRwPVnfU",
  "key3": "KCNrTwy7s6SbJPjxPMMLefU2sMNCKqKDL77PqKSwD8AeWQAbELmf1H8qddGUaCDKEgwGNXS8mdcL9F5jtSmMPhc",
  "key4": "2XhgZVkbbsbRm5nsTG6VCPAHrkdEuEKm4ccHXCoPdWCyVJ83c3p9AGnhrm5oSp3MshaQugg66TFLUAb3tHf9uTBh",
  "key5": "2jcZSjjY5NANdDcNLmnKJdEEPTddNbchFuhmryk7c7LBzij9bRLbegSuLsK4Ra2z728haoSU35vF6hBz3e85sanw",
  "key6": "4MnCMwpakL5Sw5UqjLcfB5oxAhBTZmDqyi1bx9Zp7VfY1PJgZ2wv3YknwCMHNQ3BU4aq2jfX8gMY8V9oR4qcGKt2",
  "key7": "59FTVauxXzJkZ3sBwRkjPZsNxnxCds9JX14b2ukTJyE8YjQoRKiBSmqWMtoUFBdMFnVjbdikzwhadTybjdR2oPuj",
  "key8": "5oQGqbirD9Wi38bds9cgkMxMEJ34xEuhA8wkJgBaiKu8H4o84Pm7SX58JVUTpBf9BQay4kcG6n4s2THMFQtR2BkS",
  "key9": "57W35NKjbATGyUQsDMztEzLEsFjnsxADXWv7v6K2KiffHeJtyvwAqrZXUgkDZyyfwHEuSnWjtEHATnx9W78rbg1S",
  "key10": "596AJVLCpoCokt3ziUE82MMJqTy7HzYLkyPj85NuZCFBFrpBo9wpXK1bGeomPkfvujSKYLXkx1wy9YeeLFT8vxys",
  "key11": "61w4eaYb3g5U13ZByttdNg8mdndSwv51SF1yX1FbD4evjZ8YeB8841EE9FNziULB9Wgzy13AupKb3WQd8MEHHHTW",
  "key12": "4fwGhfVmDBeiyHyvzCCyJy9BTjVo8SqEb7AUcQ8kUKXHe2w6jpyowEYhdi4LXBo9SrphCYcwkzHMqKx5yu2FejbD",
  "key13": "24eoE2Q8vdf49US9HMzxshPZpKSW9SX32eeMq38ftkLKLbozMAq9W4sm8id8QGCsoCotv9ufQenj5QMUDQpPGnHR",
  "key14": "2jYndyA2p3gEEwSFPaKd9dG1vxtiDJYLzNVVZ8ph4pf9PSKPtfKxjxgJQ3bB1uKYxA1CUY8Lt1bgC2jLYje9Nfio",
  "key15": "2tWe5NcRncmSwdS7GgW4qXoA35myBNHAepGDbMydx4mJk4Ru7v4bKfXdZRafGBJ2EUNvf4hjouaoU6kua7h131FG",
  "key16": "4cqoFF9izCfyRM1pWfcXCSBXtxnCBakYXH23ziMvSvoEavLQ2nfd28v9Em3hjgsqyV3iaTJ56h6evutZmfLNGD4o",
  "key17": "7wHBnhXD14QSguGMR8W58Q2YJjz6k9uWPp92ezBXyXjFNsPbLG94VvAnVDMcFtc3a1Jg5v5Svbk2khZEHUdfeRu",
  "key18": "4U677K3MetgJaU1NBGNuRT19KbC4WRvhHit9xhKAx7bswonbsi5oCuJVBs8acqe4TEXouzzPKe6sN3nh6ZcKyHUw",
  "key19": "58JLD7Ani3kanMtTM3hQLa41qT5VhESb75S6Azf4MYhY1RCD47WJ7DE24czFhpmackQ7Gb19Tgkv9QbHB9h45tm1",
  "key20": "2GBMNouY3CLZ1V22o8VRvSY54NBhUpUMc9BS7cBzPAeBWdSSA8Y7eQ9SU3nFLrHLko8zkeYD5caCxZzCgum21zo6",
  "key21": "3Xj9UGrBkkE7tmQLobVpRJb3AUMyfhaBT9v5YPwA1aYvtq7c5LXn5Y2ZF31QzwGif23w5YQDJqMuAnHmAu3Y1sXF",
  "key22": "3Jp8sZowUbjmc8cF4g8kzPmqHPLUbchDsxZ5u51h5CgWxNvvYoKt35psZ9n7jK3cwHpwYtFjcWwMvPJzUKgxcyNm",
  "key23": "3jDvTsN5SKam4ivbBksc4NqyPXzSc32jMTmGXLhvTisrFK8UqvQAaCQ3DT82ehS54FxyWfgXFBazX2rZsjQGDner",
  "key24": "2QLLD4tHD6rw6BQTjTQEx1vdT5FeTFpVdiH9hfcRkcpcfFZS8KaT2jJkTJBrkJNKb9vEduowEFhrcgH2cszka6th",
  "key25": "2V3UyS1P1KkXU5asQyvVfFv6QbbzWjXaEuvQvE1ADphVtikLM7a81iCsArJhie2QcK3cpHfKuhgiHicH9f9KUmb",
  "key26": "5X72hH53tJ12Y8xqrJbay76FouRde7H3i2aJEtMNtZx3g7KYLR6eMKuzpXxdrhMTzmE7zxQP3FwRmLdhVVQhF2he",
  "key27": "Evb7KK9qte3WUJ5VXx147mZFzR4xEmhRenzHd21Fxa5nmxd5qjgseVPu6uZyZpiXExViaHS37PxL32WkxQG5Vni",
  "key28": "5TYEzyqd2ThTQpCwpUSxwZVzEqANTSnoKMoz2T34qvyvd5ATSh4sRimH9zjDoXvohqxJu1CRcM9aQrGbRbHAzxvT",
  "key29": "4nWQVGgEoucisE8HTvGv2TAsDEm8pGugWAETJibyheTQFeBP8cs3QYGGAAeceAPnD8qFyCA5Aq4kw6JtKrNrrFhM",
  "key30": "2xpWkWKWCkc5Jr8VRLG1eNzuCZjMKvFYy9AzbCSYAUkZgvf9CfEheY83tumUNxYrYgF65QipEfp3dWuXhoDFrpri",
  "key31": "67CFC3b1eGTm9rx8aHqfXJNVELcUqAKfZb2NnpAkcNiPoRFEQiGYGnuZ12wwyWgnQz5Z3ZJEJiFXFMzHJ6fyeoFi",
  "key32": "66bsGGYspM21vsekqGmQ2aonNnLWaghsyUm3RHdsyZFiTypBSWWknVQFVoKSK4XNbSK5LbDfDLzd84qEkF2ces5E",
  "key33": "3iqrrbnx6EiTT9rvCZuAz3odPiZZyAMbzk1ugYqh9fS9UBHKtoZQaxQcYTQ25XV6FZdX7bXRESihfqV6gqZo9Ti7",
  "key34": "4vRxYLxUXb8Vwg9MUhvR5WtEqVUx1BovnqnJLg5uk6ATiuyv7stRTcTEahR36mAVagZvLuQTJ25EzzeTuuaDiha7",
  "key35": "56qh9Vu5L58uGTQcYQXwqkd9bhTMnL7YG3GxE428MgHvQaJ6eZcp2EJqXSaSxeYKViGCq8f5oUqX2yMj9z9WNKHm",
  "key36": "4sZdbGDvPsVFnEZL7taXra7HeJg2VsrLk2KSjyztq5Xua9ip2b9EihWjWXUHixEriWBrUgrfbnycQgxLqPARD26Q",
  "key37": "26kLgBTArhnMeQwyS7yPuGtoydEHPuN28Hhc9noSzAHVESLfNiah6o5VrqZf9oaGqmRVQjaoWM7D33TFLydi5rTn",
  "key38": "5NGD3HuKxu4f4eVcuGgGyzkZR5Nqe6vb9tkjr9GbKrwkUs8nADs4nWUr1VseyC24FwHyaFwsZ2AdsrB1oKQHJeGJ",
  "key39": "3nhdtj5nGvo4CAS1dmqcj525g9bArRMGAvVrDGetRGcsArbpNn2S4263WXa8jZZuVJ1bBAiS7y7cc9ZNgXNuh8Ee",
  "key40": "3vkJVSK1XCnE3jPqdayWcXqRuAUShHY8V4n4zNB2RBcPMMisyQykV4W4MPykcusKht3v9xSno4U3cCF1YRnRbink",
  "key41": "5JcF77PzZFJpbyXcKAfZjxjcVK2eeBs1XUPfMccmRBHfzBwMFE1shtokpuFo6pHEVoE7PpxuHicq4fXQBYHCqQse",
  "key42": "XjLwej6eXKzHgmXo7sDC4iP6AxGKxHTcu2PwExoZjayxGh9Zh7ZTkAgCoRbBXeRRC8L7yE3BKRHHfhSse2uS2L8",
  "key43": "5w6ixbbc3sZ2sptMqyABPfb1WCgJT58SivKFQuRHSSXyv7afXBoEQd4HvE3LNErxBpKn2VWCmvi4SYaySCG35WVW",
  "key44": "2H8KeCJ1j7oUH8zmDx4F4EX98w9kWYLfqqR7i9UeDXWiKgB8R5EprVY48ua3o4kNN15TuvBwXtUba61L96m3AK2v",
  "key45": "47e573dwDDanEMdwvopCu13FhsAiexCZ2q4Eqt4NDbSgkSrH95zw7cRc7i1Tr6mFkw5iqBCja9FSshg2JwB95Fks",
  "key46": "4qy5jCfPKHDn1tMEwx8hL3QREsf8eXMBbV12MaiPDD8xfGBwfAbrB8Q77udNo1RpAyvz7hsNEoK2F2pyvGXe9pNH",
  "key47": "4bZf7Kf4p2Tp519FT92h88F2q5MgLSYvB5ZJqAYsyNbGfgZuy7mr54UqdgL9T7zd7ZNcQZVy7UrDca13Ctevejma",
  "key48": "jNAdWJkRRsWtMQ7b5nE5JdbEjXD4Dudb8FbhHTffay1hAkxuqyo5rVxcFQDABmHD6tucteVNeP4GxVXaSqTWB4J"
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
