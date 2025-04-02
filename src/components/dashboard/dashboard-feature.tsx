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
    "5qB1jr5zrbMCYKs1PoPseb7n3VMvhzr8Qw5YFrLbH68KdqMY6viMXdhjQBbXt9JPM62EKhFHgaWQ2tvc7FxCjVKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mJRrEp65r8N9cthrbA2A2kqxpo4d3UwWXyTW9HKCUxKE5d6A4uTKwAcsK93bWvDcrCpJEXAQX2Amk6kLkbK1qn",
  "key1": "5D4mvnzNYaoUjcv9LiMy8TshiUCm1AxLB98TfC2EVtNyiwaFM5tzVuid2wXZSQ4LL2mcfhCVnRCpJ4HZqk1AMjJK",
  "key2": "5dRsYyjpp5ErUC61QbYortcHHirHqjVRC9qfeMGnPJ3U4dFuRXsGKkP6JVnRzcUhq29YjBeqsm3h4qomX4ZkZiUs",
  "key3": "4YgVEndMEjFJUNVqweRbTxpnNbn9yayGMRvoLm23gEefRfuG7ye5cnaDY6jSTH1u1DF7JMfKHJGGhMwZt2XnnUQF",
  "key4": "XQsnawoE3gUur81PAe9T4N2nsUmQDhiys1izryp4u74GaSowGnnF3CZkXe9o4GoKNhcxKpnT8XHQPLAFAXLwSkh",
  "key5": "5xe9oDj72dscLoNtpEu69SkfXUdU5wpcd8RDsxut47CU1kC64az57VcrdpyNEFDmMZz66sJEFfQ6s2dYfMPeh98Z",
  "key6": "44qyeFCfn5SpuFhsCWkdiznfekKmVNNFobbdVMzboCEfjT7sqp3cMgjfHzEADLr9qLcfKEjjXx48fo5yUUSLmnez",
  "key7": "UaZoUwrizXdzzrzugw49ydtkq6vmrv6RjfQ44tpzxCccdYdmYnd81zThnbzu4PzH3nmWjYwfEWyCTY1UsyYyZLm",
  "key8": "2TipdgoX33x9FVeqh7yLdbcLGsGfUQB7x6VGaeG4WGwFu6NqQj58ZcUMefiBjeV4auoXFKeckZCtnZrMwPb8LgVo",
  "key9": "2nvFTzrtVto8u43TADUFrfTVQwdLJDwA6PAGmfVHGpDeE5yrDyKFctJaGRsfNgWCXe252KDaAJo7vS59iKztoLvg",
  "key10": "tiLGr5CnWP8EVqFjxNdaLh1bJKw3N1DigxL5KQyWQTir5MAU7skPLeCKpMDLwiC3DFMyFYTZ6epkU1EshmfbKbW",
  "key11": "4A3GMhiwfZqszdnSvG5M1aPJff8p8FHVYY3Emwio2YYWW2r99Bfx7ErU37JLm8KadPLDagdHp5Lx5itMtQzAzris",
  "key12": "tq9juUzN1t4fjrapedNUyG2CCS1ery1VcqNu5yAKvqtueZRcR5KT5t3eFwHH5S8TKTDkz8bPhTJLzZBbWygiEUF",
  "key13": "9bZ7Zf97MuqrJm1c4eBN4nMoBQauQQCbBDuuSLrJ4yQJsFm5puC76oytg3vzvoRQHVg44CDQB2ThQzfPaDLkx1S",
  "key14": "8XXQKVvPkeuDJ1VvLxjG45tefBvJHALY3xchu4HfvJwmndn8HqnhwJ932nrSGhaejM3Wp7oYpzUhdS4GHbXg8CX",
  "key15": "5CMTrpnFmnRz5UXL9RbbzUZyDfosve6y4Q75SZ1Nz3KF685s1aHQgrm6ZKCJC7GofznEbHK1jNrgK1EZ3PnE5F9c",
  "key16": "2tScZSWpMnoyzwYgknifwwNXcqBjyg4JhVxtif1Uf4411PFWfEZsZyk4hEQ6sE4HdToSgXPX8i5vwx3arxuTgf3T",
  "key17": "5JNTZt25sxZpcs2C9QDAGi17ChCg6RyMJbovm8e8nNLL1ARoJLYPGzouwWajWqV7AytnrQToa3tyeRdqW476JkfF",
  "key18": "2Swh9KXmXVVuLnSAHmCAyXQKCRHKRhzR3hHoxrvPUr3JEmbevTEpdrHfdjLttCTXwNDt8opcAXBTfH1jG1hkgYfA",
  "key19": "5dLCrsJHQ43RLNtp5abtcMK4AneNzsnGWNhTBCck6mMkNisibJJd4m6Nv7KfCAjoAfiF8AsfiGHNYn76vuW1hhzz",
  "key20": "2VwkQHLaHLEVYQh7e76Z3QYgJcDiKq7RaRHu12H8BdcsPWL8JTX2TtCdGg3vJxcpbFJzdwkAajR4q32Rr3QKzgmu",
  "key21": "2qsxw7HxXZhC7bGNkYFajWCVF2z6EFKTWoXPdzSPjBwB6EudBqhpE5gYhHq5L8yw1efyZXcrzGA5iNAaxnCp7omB",
  "key22": "QcHzLtv6rv3fDc6FjipgfhYg3d4nqScRyD2RE3JKP2c56XmtCt4SRJg3perQT9jVj393S1vh2bfsLbUXzYbsrMY",
  "key23": "bhUquhsNatU96bpfmMSnYimnnd9raG1L8jWYhrJuuykyVuciinaTauxEgtiwEeEZjHiR4zP6EG5xShQvyBKe68o",
  "key24": "3KUwSzC7UiNkjw1kyiR4zdhdQyfuCT649cBMcsUEANWf1tHrPcBz7jLmhadqLnyhGx4AaCrZRrj1a7EADpq3FZyv"
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
