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
    "4P3b9mBELKc9QKprXHkBywBJ1WNerWaTpTU6jN3CLTuCuF7WQznxdDT8Lx83Yz2hqmzmTxbUKwUtoAWPo36w7g2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SL8N99mPmiBnqqJAtHhNvF67xtM5zRBRXgKwhtwVUWLvimXYbpjfJZ6RbqguMBLmjyCjxn8gmFNA4ziSFAqzsfB",
  "key1": "1xkMCv5snJUeb12L4iQAVy8F687sTd54Kh2VS5EDtUg3udVN5WF4TXNJQdWgu4tJabu5YPMFipEQ3GoKG93cvEd",
  "key2": "3sXmdQD1HqwdEY7xGNTTMzSA8rsSkoRyzFVnW2x3G6kNTYCFLWESxb2tcgEAczFYUwh9jF2YPW3EC7KWxzwWyKVb",
  "key3": "3W2ZHbEqsUtnt6u1YmF8fECPYYp1N9xJiEJPJT14scSuNr6kBXNpPwjZNJ2cPShHsu7bUwQsgDimGEsxEwUapdhH",
  "key4": "BQ22grUkLx9J1sLzRauVg5nzvgL3hDgDCJrtWBQSc2FKGxdvTWNfdFSfVGMUqN1fAf1kNnMtLNkChH73FLPf946",
  "key5": "4Tb9ABmHAmLTt9GkuovJn3JQqiWmmad9A8iBPE5PsAvUgiT25rDX7ws1ddjVC9MxUgGRjVqDWWyMkEa8EYMn5fup",
  "key6": "5BeK2UunB1f2K9BCUHkstgcV2Hz6HDnBo4MvmeXjJSAd671XfMsuHm8tvA9ZLZtgc5HG1zDnj9f5b1YhXJZvhVDQ",
  "key7": "37psoAzyfe9ncUAgqfMBdy846PUiM1LD9BeEu4ax4NeSXHvTd2sWsYbhagM4omckrVbkXgK96ktNm631jhYiTAQi",
  "key8": "ym6vtzNQf35dweU495i6xv8U2MAvG2xE1RHGyoWChMsPgUomNQe6DU2nUFk6DYESoLwTubwdHp2iGx2ZGZgrz33",
  "key9": "oxY5u4q85uaPBtx9JGe1aLgoPtMTYTAXkMHHSeznULk1vzdDMyARGVBtpkdnMaVsxTQ7pyVgsJoYobkegiBLQq2",
  "key10": "35BripvDtqhRe4oTtBLw1Qn8tSUTx8cDcSnFmcK1opm81RBWqkGCasYHd9sW4uoN52a3HgfaAUPGZfPkq9D3MVeW",
  "key11": "3GwQFytWp1mDoRBvU2v68Aix8TEVx5ED9FC3o9x6Dv8mcb1yUh5iwv7G2aj2VcSBHB43YhKDHraht1tgvAPaoeKq",
  "key12": "4zxu7LTgWaseAiXZGTKKVWs9w3BaGmgzS8FCMmcdMd1Xy3BE36DMyuz49V8JNKpz8Fot9dLbL8ZYMXkaZXzhNpS",
  "key13": "5ypMG4bMczFzhw4G8pairN5hmVSEBFxDxGaR6NL1CenasNpZ2yLRuaudxgqoEZCki26YEmt16xy4XEDB1xRYmYnX",
  "key14": "319RSQ38MKfAy4GZ2kG9WnQZbWog1F7sGRbkXpu4xYXzrVHDRmybkzoYcnSLJR9cdYfMSFuKLjEL6nJFPruxVAQE",
  "key15": "2oUy4nk5ZjN716abAUtxDg3aYCYkeC1LDE5X9SZT5QDgzudfrRv5hMdhrxW3FwMDeiqWf8xBRmk9VFpY6TfjRsi4",
  "key16": "5CUvCoP72edy8GTcXhGBFeUVqqk1XwSjSgMKEPhHSUkfibFkHmmoj4fdCcB3Pxit85avGbUW8psNDRPmnVVYCpmL",
  "key17": "5MsRUGe6Y2T8tCxAcwL4681mkppjNwYZKXkWLgPjHhcBbYSDHww7uhhMUfFwi2Ne8sw1hnuD3MdVwXP63kBqG8Mw",
  "key18": "416bWHfk8ch924J5MmBXUdu4a888Dcn7wwaJZH1EZaQG3xP4QvtaAWy59wv9ijLiWrvxujz2mSx1Rb9K1rgApux6",
  "key19": "4x1Fupvz5PzDSDAvGicSPZh5F8E8B31QThCGUotYzGLRmwUGVFvpJJbXB6meWNN6YJBCHAVGS1C4rE2EZXrB6k8T",
  "key20": "3KcW86q38zDNofJGWU6Wtgazf1NSRNpas3CQDL6QzvuJfzrQ7fBESiPNybWVwpe2HT7uTT7CUwQgQ6xdKDahwRqQ",
  "key21": "5wNzFbbf9oVWL9C7Nt3skCEF2kVRNTWfzo6x6VujtjzoqRJoDRyZQ4TcwpCUSp6waPdBRySYCqRms8zd3uoDuY6z",
  "key22": "cRuBHEZYd7mULNe5D8y8iNYhWWMdswMZU2hfzpK4u7vnqzCwL8Ak3UVrUe7NWzQwJYdjXi2LswTaxyDnQPp43TF",
  "key23": "2NFTbBM5rMJBxmP2ktcsWTCZUzZJjFPNips89WvF8LsSTMHhZPMP1ig68tUk5oqm2rPgTneH7zdMo94UVK2xW3N3",
  "key24": "5gEmZMZk2J6vd3X2NMNEcJMk8xu99nXS5w2uJDa6UJJ7fvk47mUs8PPdtmxp2Wj9qEaoXqaBuhHLcSYetgXVopt5",
  "key25": "3HK5ZkNGPfk6cSPJueojPPpTngMsmZ2AYyf9ZfD2qJVBvuKq57CLCGfVFsY7FbmF5YQjcUrCXaWjtrcHXTGo5XXP",
  "key26": "2PRokmeiT93vByzKxgfTwamNS46BdkG8uC1whpJgDm3JoWAxxcqNr1bD3NMyJukF67ay2rUFDpcrXBqANHRxXmiU",
  "key27": "4tgDeVx29x1nRVT18HztrtYpoh2j1xYUhuxgExXVL4JT77E9C2idZFCTfDL2rvpN5udF2W19N3GMaa2kx85RY7W3",
  "key28": "4w2JzQK7bDRoqYrf2E6NQiJH3Tych73jHDyPwWitX8ZPXMX4oeBwsFkDh1SHZjFefqan6eCGpDwJpjqUkBcrAf94",
  "key29": "3mAPRwCQE8vuGvRSmH3gF4F4FXqumcsFU7i1A4jUE2V4BHa48kqmSr6QWtAr9tEpKa2um9iFctob4D4VZ9zjYQxx",
  "key30": "dHPbKrpdo5sJDJRGXM5B4krSCXbdTY9JtDd8ekDSQxnJZAzMnAT1GeDzmoorSZeWZcSuw7phDjzketPbkS2PBKC",
  "key31": "5MwBQFzk3ZSV3kf2bGXYj2NHX6CufwF3pNi46pim52RfMpj2PNBLKbxVdPi6ffyPDuUZ6EyJB9zEMxfS4iX2C1Lx",
  "key32": "2RiBLLiP83tb59HGUAQPwNiek782aMKN5SZJCCMNMe5P6fJM9dwrWETHqF5y4CEKUv6YnXZ9QRfqs3cuYyV8Un37",
  "key33": "5EwPQgtB212B144kDj8QfYZx9svDwaHiPU8k7zR6XTZ9aXhwQEDqaG3Je8L8fnACVuKsPWCMUDBV3dxDcTj5KFeP",
  "key34": "3UhpUayW9q5F2VPb8pzo8fz8WyHXpwvHUFRGebBtEg2rQEC274avm6WCwRADJyn6AVi4xiyZ3jsbiBAsSbLQt4br",
  "key35": "58CrnHK9xBdQdNEnT35G9yTWb4pbRAJyK6xVFop6FquCFyLtwsbHoSdDidzEDtDkhzhqQQmLXH5fCGNvZTong8Ej"
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
