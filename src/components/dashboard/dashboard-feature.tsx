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
    "2hNFSbzfLgCM86wN85FgSJTdnfApivYACywh2BrY2bTsvco49Noky5tjNYaaWiMbxbVi1FddWqraqnQmJVXyNdt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZiQBoaNzuhSyuEShUYje9FGUHh73g1d3cnVke4k3yQxAMLAUe9Q2S3U7XfxSCzyUWbGkAkoQQAa385Pg8KvNbp",
  "key1": "59u7V33KDtG2yqxy5xsX8CVyHzJFz3WCZVm8igR3HuP4ii4GHCXDr3UVbMewNb5HymT5YeL4SXuPdANnGXrd6MeP",
  "key2": "5ogF9gCqKcjwWsKih59tWAuEmdAN1x7xGQnMbwLd4aQjRT9MbpBcqikQbU93NJuoBxG3Qmg4cQjC4onPuvtytLhP",
  "key3": "33u2KPRQddQb6CRScK6DEZ1taXt8XVZpQNMnJg8eFHgUtMiY6Mwc8e49SaGQAqsfqHrM7ZV3hVqKqNvKS2hXg4Yp",
  "key4": "2FxAw5rxqGuLqnubwBMWKLYM9zUtwHUTBsxsDwYYtRaLwzDDUt2A5MN3rn2RybuQdyGKUHUu6ZHX7X8bp3hUE5mw",
  "key5": "z2e5YNiFBbrXmWvM8TK6hXZahPtXZzPgMrd7YbUYrjRBpYVqgFHWoDPwVpYgm1Ehh7kuoG52Ak6vsU2VQxPWnYo",
  "key6": "38CwBBvDHnnzFW59TZpw5SigSn8DGywkDhwruBvPvK8LDDbvVHqyag88uueuKeTtCkHUdcrFUGJ8gQGDk4eJYXv4",
  "key7": "4iL32Qhx7wNP2gXP4aTXrgAPimE42RzSGYJX6CpJQ2ZUasmi9uHvEsCSXAkFRtU5tFZQzxWshpW4PNRxYXkJFyFD",
  "key8": "2MWWLoYvtbuGE3YKTa2y4MxppkdJDhGfioPyqZE4ZbKNrVS57wwyxPjStd12yn3w2MAYwEGJzT5XwpBYXnzWJsR8",
  "key9": "354AJLWn5qa21Xvn8Xf6ccrTTdGGJaPFLUPkUW6EiQLqhPBCsedr3Ry9N1HDkGNFmiR1CSPLzmQ77LPbxiVm6HF3",
  "key10": "2H8MeL8Gq9mjsPVwYj4qqb6kKpLYo2wrxZKQ7SPZNfHmQXznSc7N9AZifNCCk3tegdTMCP5b8svcjbRD34o8M944",
  "key11": "5JQKzW4YqEdtu9eBi1TrDb8wJFjMPWQyKEzXhdHu2MdMJAWa4RWUgYrgzSPe3V4zbSnvhC3Ggv3cegb6QwfRyShB",
  "key12": "5HqnsqarJX15LESmQiEbbSdrNyzjEK2QJsvn8iRWoDDibcSdJEadnt6NcszbwxMc5VxTHiSu4Vi2khhJhr2xtdW9",
  "key13": "5bit4vkUoZdticAwRrJqQBzjTB2HKTvMR8QijhpubaUhm3kwmwrVQLAhRNwQkki5QZDAPGRVr39aV6KfUh5EBckm",
  "key14": "49CxkpYUEcs5A7vuAHSCgp5GELwRNcuPwYKmL67GANXJC8NuiNyaRgwA5qqiZQLQoUXcJV211U8Rn39e41qSTxxP",
  "key15": "5xvCECuDegCzbuEDcn4SAYMA8hmXBpCv5kJ2Xg1R3itcPu66rqYG8fHshVF4JbbSJ8zmddayLrKYqjCZvGm13BJr",
  "key16": "3LEpUnmwEKEQLqZXnuYBmWUR2ZPNTBgA3KVB917pHyjshLRZPSQ3TnTpe37JB3ivqvnGWitsKyCXooci62ZEMyTD",
  "key17": "43HvmKM7SwnDuRRDJ37PKBpKXWRaZKtFwARz5YjTAQFLerUsEpW4JcrCyen9KQ9eTnJzkUKtCF22GvHycPPynvh5",
  "key18": "4uWzCvSBXsUQ285nsVp28E8PBomKWig1SGpzFCrt9Z71uVh1LzsveC4745KvFuU6ogHYi1tAcXYZnRVvyuKVXP3j",
  "key19": "4pNaf8gZF4xDZ89xPXqc1NnyTGJ2xQvF3mqDf7ivKuZ5pwKhMUjb7q3DGMoFCyp3mnWGTrFywhQbmoaYmrtcyFxu",
  "key20": "2uzic8BmLvRpJHaiUo9bHf51oene7ykhg76dugDTLgMMwxWDzQo7JgGzLKisB8qs4vfGBCfNfAxJvKq9gdNyhJx3",
  "key21": "5vs9LovLuNsTJ2Eqp7wnzDJx3r6RpsiGbTkorFHRJxZLqadTruXLogkSW8qHb4jEYh7o5q6b2KBPk6vhvPzmy6dn",
  "key22": "4n7HsP8is8g2Bbc1ebBskzViq5oyRJt73acU13xcHnAbSaZL6bsXSkZaJ68Y5fuFroPH5o5ycdMJURwiFDGkML3d",
  "key23": "5FuZ65AsnV8qHMR28ZQQTe8SJCcrH1Phg7ujgMdzgtkZMruEFgvxLwWbh9q48eF19tpVxpqVmKxQM8zwL3ZnSxND",
  "key24": "pKdgkiXeSNrJZgFPDXUwC4mBeakVtVbwsHftLo4tH2SU6eiCQRUEwnsKD3Fa7MjVqu5q1FY7BpPReopV3dRLvxs",
  "key25": "3uNqckPvAj8Mki7VK3j3NsVRxZaoDypjj8zLfXAPDUpvuR8Kfj1T7TTZxyFAw7LHP5PPXyG6g3kRsv7kvJBhaQ55",
  "key26": "3eHdJcbRojfXWRGizLJKyW4PBinWET2VNqrT77pCTG9fm9G3DgR2sGJuEh4FUspqZEF9Q5vcnfbYg4UGYPJnoDHW",
  "key27": "azPeRriDnFAikj1aLZYJujDnHEHUJgAQ5yorSsdzhFboN8zsJkK8pwdB7H5oDEmap7R5C7bpgGQxsia3zvvY8zG",
  "key28": "37BSS1yFUgBPWBmvQowgGLJoAQyLm6iFuVR9PuxsLdDChBio1PBHQ5fGDv1P8MX1QTiqS3RxLEyFojPmfRHakhhc"
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
