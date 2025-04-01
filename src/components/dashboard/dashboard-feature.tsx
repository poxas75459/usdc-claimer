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
    "3CoMRBrXXZQ1Bf3xUvTQByCih8VEbHncrUC3jX1rRoA8XfvHHxfqdmF3bY79AMDNZHQ3hs9a7zHVgJKpdSpHuvq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJfxwRuqeSnkvSyjFPmrRCmYt3rqXs3YY8mAbv8RQdfJoPvkcdFtiSUbaFBRoMVPt1YTD4g5cbVY9aBkpfEpqn9",
  "key1": "5EdZiFmUWXNtQhkGXYAumpaRmtXyhJmpEB4GBkboLmUrwqL2p42xRWL9pi2aFQkSWvrAZvntqob5LEHEvYKW5eWn",
  "key2": "2k2SJHfmCvuWErF3ky8A6MQEk6j5mAZS537PnF2NbqcS4e1nPjW4KQVeeUercutKFEhEf6EsGp2tZrRzAW1DLHUB",
  "key3": "ECgRWuSRTHy9bd3facxBkWJFVSrU9pJ8KXszcf9jthDW5SrmUKSf3en4WAFXRdmSezaYjJqK4gZqnPbArhCwUcx",
  "key4": "4oA372hmPE3Y5tfzytoJnV9duCqa5AErhqqJKvxb4PX1rmc8yyugY9yuST1bohwP1z7FJagFv2qyeVoR6e24xiCP",
  "key5": "5TjSeJApyaCntaqnkxo8L3T8RTth9XpvyHx43ZwsHJcVA2vNgfZtsKzz7A7bjSMn2Ttu9Eqzg9HGpPv1TWqXrivg",
  "key6": "3iZoSSk8KztJBVQLSzDpR4wRJaRPTWntpTH6xejoFLcjnDDA8cFRPd5eVUTajg1KgrEt4DUZZiL8fGNzw5acsMxS",
  "key7": "3RLVYKVioR4TwfeR6PKvDoQYqAvPzge366Hg4udVTNXZ4Dbw64woywtqcKUP7knde1V66y4eR6Evc3LTGc2v19GU",
  "key8": "3jdrCfKhcA4kPCfpKo4EqtbD4DFgSGmioc5hckZ3EeB7HACufog9KqWJkPnxudsx8wv5pouJUPYoivQj5bFYjRtG",
  "key9": "4SjFkBsMMTzpaxLBBNVUdwPq3XixLfWPNrvGn1BzVkwjt98WMomJcogEbY12aEZTu9TLaiWdDaMHgMrMSDJZxJHj",
  "key10": "2VesYgEt4wDnNA2q8Lw8PdoFrUnTLKjF6hHNVTK6xHXw6NNMqGmjCYes2JYwtEeTb2vhdMkwJ59MqcHs3zLQHCD",
  "key11": "46tEjWaHSce9xN55ETZFdbK3bq8vnAThahumuhbz9fURpCjWaAMHM8AqkcHVvR8MooXJauqz55zsAf9RkkU6aT2T",
  "key12": "3xuTRrzRF91jVZVStAXFJ1MvrvRznYSoV1TrAy2E1s7vtutMEHDJFedkC3H9ax6U2mnDnoMU9axFfgbodxW4CaJQ",
  "key13": "2WXkVq3iQUWunK3NsHYdhYa69pWSP9WJFH4n11mCrzVM1syoZUgyqGKhTBZuSL7VR1VqhFN8UtHJSh1SE5xyYhre",
  "key14": "5RFgw4BvxptDxQK1Fp81JgUxRm4K3xaUWPdR7w5cK9NeYLX5wjyFPTUyV39ujbFMpJKjPwRSjTVTY9Jkd1jgjA9",
  "key15": "4g3pUUDjsdUkFmwJumrkUaQxMn84Z6iHhqxkfAFoHyMChM2MkPA4LVYBPqgEqwwruhdxw6M6yfZQi6VuB6QmKbet",
  "key16": "rozRbKgGVRiVRr8exKgPHP6RmfKtu9s6qYSLMviSNh1YNXqF9ETaeBx7K5HKQDokCuARjDnvWvEaCi6DucDcBNg",
  "key17": "2LLdHoQ27kG94NxnTJBkkRSfD7vZgUaBjeiactprta55Umwu59d9BsgTHQNZM8dP7f5BHbWRiXXtdELzi3bQZvCd",
  "key18": "NWjW4MEvdSxWCZG6p2bfusKzAKexrhrGeNJwyKpSGZKNbgkbiNF3HAWKXV6vsq3gXZTaYr4pngigrMA7Zc1A6bU",
  "key19": "48cxEHo4zGCwvG1P4SF3CKjR9ZKdyrwiM16cFtZWBm9huukcZHz7mpCtaqEaPwtdUBeTqNw85FbYUrZUgUxFKwBT",
  "key20": "3eSmX5yUBQNpEMSKhVceYZG4cpvWjogViobpnVQMtH3cZVJGGE2ALPyUQpq8W7xaLc6PXM9JsJ3SPVJPkrx3rJoT",
  "key21": "3K7SJ1eKHsEnwqe5A4CEgXnd7WrChikvay9emS2dSeFUSGo5rymv7CpUBx6vj2vAa9snxitDiw18Do9gWhec1iEg",
  "key22": "5jQz55X6HLoqEc8Eqk6Z41D8d3NCCaVtcYdciYE9F3mBkiMD3pFYCNA2NkU4KBLkZyPhsJL4TEYku2UhXaCn2J38",
  "key23": "zU4zTvmNLpH77SdFPPZJ7vsRp7pXsPj9Pju8JU1xGzZzdCtyEiZX7yPzuW6FQqBJbcwhBakmszHeePgttYmzNtN",
  "key24": "5DGgW33mXbGRa6ct8zqCRYXxGcUrruStqNNHG4XSkaf2hgG5cTWEjsVzqRBSWs7KfEAGaHSw4avuauPNrsb6qpcJ",
  "key25": "5ZK8J8PcA4xhZPKNe4h9Dh9vBgmeWgp8bLo3QPMN3NkSBdf9Lu6bhpZcfbL3CaosWnogK9D2yyiL35Z218K89KhG",
  "key26": "3DfvcwHwvn7swo7x9fDpX4um1Ju7cdG7ChyeFBHHiettPhYNuDCGoijaeSxjrjb4hQKHERAWw976VFsPfoimuURJ",
  "key27": "4HmucSyTzDpgX23eA1onT6BbsoeR2R6ij9RMXsYjbCgqt2BPpNbwFd5Yv3bvm2jeivZLRPutPBQ54JkSkedY5QjA",
  "key28": "2dnWLZEV13LoYKaTxVq9fq6FFfM1sbutdcs47SuSm7bGvzzvhMVUsMyfoSA4PtXGoErejC1CMmQW8UxHUUmjJNHs",
  "key29": "AQrbXBk49biXPoDtjyde9jpPkohJ1g1cbhYMG54M1oFFcaYaM3c34fjrkGUHxKF6EBRtGBQk8zURvr6ZKuRirib",
  "key30": "3PLx6zcGoqNHv5bTWT9jZwHDDXStrmrwmXpCXCbRueP4iYGMyjHkwbUFcjzpySBXD2UVCpRxXdBsrHhfeHfJEp6Y",
  "key31": "VV68CfSdEypK4BtNtbJuVjTtBCX3vnWqcPQfc9VTiZQ123xSoAskVZWh66EPYcifaNeyV9oagmJRezAFPWgKDQj",
  "key32": "3wNSqsz9MwNUUGfdo3Yu33UNq3fgKZZuaf5Y1tnPDSZvu9edyJAjfjhXkvqSqYCKHaX9wfbtuggjG6EB3VKtCqsL",
  "key33": "2wu5Na4S3av7pSyegSTmaLLyrNwpdvGCSpA5GViMs2myKxjry3b7ED9GP3iAGTy71AoP196792RZ38airJ1CFcHR",
  "key34": "2f4EBJfo3THzL6UzX4bwUyEzHG1DPJWzeBqbJ8F977XY7jZmjnfsPRrbA298miH26xqg6sDoJyLCbSoS6xqAGshA",
  "key35": "5pRpvi1pRpEBZH8pyNmv9KTZbQDQUQwCN5U91g69CnpJr2wKQd4ULSsbgVrHDfpbaL4dBJnf6gvY5NFxprHCkSpD",
  "key36": "3eat4tf97fmgUH1R2DJRAdyH1t7UwwKPpPabkQi5YgtcPBbp5eWn1DJySKWtnqyNWAX6q6ZHvYuoFV4vZnTgEZ5V",
  "key37": "2Wawqv7jWdUkzueCNVj6qcz2z2E8XEnHszetaSNAmpJ1WtSosNwCDDr1Wg6EEr2Fbp8YjjPMAexjo9NhpwAqKUyM",
  "key38": "49TJi3SBKym2GvpzxADt59q3L9cnDQ3STFkzdS8XyfHNtCyFrjsun3GTMBjg4yXcmvXLj3EuzSfwcPRcKJyVaNFW",
  "key39": "6sDFhJ2kZJ7GuwAGwP6zDN6mm67D77PK5ajurJ5uYCEkfXQt3RMXYaXxmKUAPRDv2moEtYXBbzCYRpJWpDZT1P4",
  "key40": "3dysw95nTXH1aMPKiiof3dw4gPpoFzhXKgwDQ8qoncGKw1XpJ1bvZ2GzK1eZrdeDhFyEigQQo8rmwVh5YnctLyZx",
  "key41": "5KskMo1Wz4r2YrNcrJGacPAi8mdpAu4QUKonDcdhTaMyrz942dDy8yaA3exjfyJufyg7rXb8AxpZRGKYYpB6fLjc"
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
