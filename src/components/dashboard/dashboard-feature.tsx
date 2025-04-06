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
    "28rTnTukM7a1oAcnjgmFoKwFVuVbZmtmsW7nRSBSZQLKjSrPDB7EKgerMJ67nVuackEVWxBZH6hVmNaEg5GJmc8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ui2BmDjAUsQ6GMqqXjTCKGry5mxMHBPmdJXYmgWvB7QyM5baCopJE314dcvW39fUtXzGjzC29UADwa8byizdaqi",
  "key1": "3G2eiw9ivqPL6LBpxwDouF3yzNSmGSHiUqVCSmiVtb5PRaeP2oekhTboWoqU98KoPDF82dY7PkmjaWk3fzdZEDPc",
  "key2": "2YjFPnBHdM7D6DxwPTR3gFpzagJc6aSBu8og3rBB5u2BfBfiobtyJKVidF3MPLsLqJ3JpE7ZKbDfCjRkhBCPk1oG",
  "key3": "ztGN61pc7exegdaoS3ZkJ6NeoKitQKRrhqcccvtoXHnt5ZCjKFtU5vShbnmt4pa8BEfZ2aw81KLZnP1SJRU92Ya",
  "key4": "4vNsy3cMxQgDGMLUN7gLmfe6SwMwUCQ3hsBwSzrd22JXDyacNy3uwdDYsUFzi6uoBZvVJRhnNBhsbGr18uKuvan1",
  "key5": "qprAyXPuvHCGmL1UYFbdE14aswFCsEH52dCrZtLEEahPewiGwWzV4YacWv4hvpSkk1EyuXebQgTtChGqstT3oVM",
  "key6": "3JQyn3q4kCVgZzuvAnumvV3j69Bmy4wkuJDn7iPMwEdZ2CwbEm2JbycNdaTd7z58WPU4BL1SPGvb8q1mq3CGX1Wb",
  "key7": "2Ed2EqB91x35qamoR6aXLAT4NaaF1qsSvi4CimKKv9MKfQdYzCjC6qd8JUe92t3jBYEYgxCrNuJUWSgXehGgahbx",
  "key8": "4gjL4neG5heENBYRfMdjpnbtmUjFBxP6MebSMZTJEJGEcJzEWne6unhSJfua8xMGKM4dDDGcMvpS1v9soTA1uMq8",
  "key9": "4LmL9uSamsPP6StZcfKS8uXnCzTNFUrECVdQKefx4o5qxNCPXmJVWeVucMbN9kJ4zG6BzgXn6uTHpar61msYUvoX",
  "key10": "RfPNNSsGfWYvzcU2FieghVRW8DhsBRF6X3yBh8TSkjHQr6m2HAEUdhbMCNHAo24MUC5yB4VAjJyQXdBUncLEvJ7",
  "key11": "4YCZJ6qJUWHNZ9bxyvt6NGwYD9LC9cqZcKaLC3zNcEuPBv18EnYV5ZKbSeDv18szgzzszfKeQq44mWoRcVMfMaWx",
  "key12": "3Zc4Eu7aq8WBye9sZHSCcHyWMbxLFqy4MCtKVTBGm86vvEVhSrr6H7ZCe9A5NohsBTHLPkfQvNLcDNoGRRTpNvMD",
  "key13": "4vtb4rfZtPBvvdsuxs9z2zCLvGT8Xepezg9HwvJwvsfQuq4SakgSLsBAdKuZ2dkwtsssv86VtQ7T3V7mPtRWGDuc",
  "key14": "2b1sRJTB39EWfEjcnF7TvgUhjNjSPfo54a2GwR1xLwpeSVB8V9bS3x4nJ71RwLjP36zvs7w1VNiLviNNmzhH5RZU",
  "key15": "48xp6MoG46Y7oyf9CLtFEeUzrzkjqzBUqRS529SuTZ13c5tAM1p1Kw577njmM1JU8dUq5GJmhUVMad6h9MwyLTpp",
  "key16": "4FkPN4YeKQoNBoML1yoXsFFd9dLsYfzEmuKtfeUCWdF4VL7FvWfS8zsGyp2WF16kUG58LGyisL6EUUZYqmcJZtMK",
  "key17": "5EmK9CbBsiK6WuhPqtGS4ujE238kTf6yFirNFdE5H6JTadJ1vzSJKY1w5eWjwjQ53hj7LUYi3fcLrtruKbxSuYxW",
  "key18": "64zfikTGRRWCCVjhyvvPCxVUqd2GZUgBGdmEmLVjspZpU1sAhHVC5dd8khrwavK1YFpyEQsE1s5gKesSyJfhPU2Z",
  "key19": "W8ZRen45tduCYBTFRneFWrp539G4XYv51st5oRg9wyYTvkJ52FdxLTTRaoj1BeC2R2cCeUKoHo2VpdywemEVVWZ",
  "key20": "2WjrWdYEyJydq12SyShmXRwQpbg5dqDD82k9DnHU64mSGnwMGtAgsjvWTFKevGCHZUuN3AYpEEcmRUXETSYsm8KQ",
  "key21": "5XZQKhQZqGrQTc9iLdrJwLcLqtxpZU9Fayo2RBraV5oLXSkkWQpEZpPK14yvxnBHFrbMapaYJ6cFp69Wh2qYQKUC",
  "key22": "4mfGMcMtQU1zeEBTmyRY6Gt1QWcEZxFMJZ1QKK1gXGRewxcA9DpmmkFfm9R2iziYH7R4WkfPKk5ExgioaDeHP2VW",
  "key23": "4TCuNK1wuKuoezdSgU9nUsvQc5mtrHu2asv89STUfxRYxRzat4AvdEAvZ3BhyaJuZ1rzomzLAveBfkeumzgERtDx",
  "key24": "3gpbQ1pWMgGQrEVYK6f1xwh8dgs99QhrJucxTx4sR4JU1t8e6gF4rE9q9yRu6nakApBTSgnBZRmtSk1vFwX6idnZ",
  "key25": "2SWvqwvtTRLXD6rsFaeZtSKwKveCVCzZCdk3WfDaQSfwvg8KaaxkpwmwPw3YGvJeP9CsWXyeYaXjF9sHz5pwqYyp"
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
