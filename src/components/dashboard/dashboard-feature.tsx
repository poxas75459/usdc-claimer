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
    "MSeM1scxRp2ZSq3jUaHX3159mR1q9JSxQiKJvsJ8VLHLg4xGYCuppsnP5pwwX2uVP12c4goLxRJqiBvBdN9LBKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzco5a3KFLU2yF87zHArnboFGpMzBzz7Ss1hqRN2LgAtpPj36JZYxq95Rkh2ie3tbwk5P8iqGdRBXGPT2dHPBMz",
  "key1": "4dR2wCe5ayohFZCNvD7vp85hGKyoF5F14GzhTB3STN6ASg8QqEBZ1hew4dVCdLiphL7sQLY3VwFAQogc7DMUo9bz",
  "key2": "2H6sUJkawdbLm3EFjZtrqJF34hGHcyY9BdTzt4bH1G7p5ruLXHGr8yNayUaaTKDCm7bU6UNDqKhTu1PdEC7ULi6q",
  "key3": "4e88uLcJLDzQ1HXUBkUUDcWxAz2JzR4TrgSWS7geCbMkvqvYPz1k2C29LBkxtfs7xmujq4HR9VqA7ACwjFCTHX7J",
  "key4": "57cK9v1e77KGvefSDyAgarShM3kDRKu55ZLy17hGw6Duw8fmTqKbnpTrggDCrWbuAx551M4grdsHt24kRfk1bT5N",
  "key5": "bTeSqbUXV98rShm8Tf9vyUYNdPapA7oSfiYuRaTwYC5VNRTBAk7Q1KzrehPj9kg5w8oYUkbGB5W2HMCc2mgJMsD",
  "key6": "2QPQTwXKm7nZK3uJL7PHmWgF6dXx13HfKZFq94u73t66Yup93jKv3oqepwTCPqx6dbKD4gPdG8qxc1TDMxSM4Ew2",
  "key7": "4i6Vwo424i7pimvHFSwm7BPkxjAyvZ4jkyM8zMyVfL4q2gJmzZ1srfGBpEBJ4zQvFYR9cnAYPLyougr6PtRJBmTu",
  "key8": "QDs58zbEkMt7HStPPhDTW74XrpnDDVTj7Fum35MjxbZFuTqzWbLMjy8DWS8kr8ck85cjhnix8WEYEBEWkXbcSrS",
  "key9": "35igfonQS9tfgWHixhgAoYNBm2NByGbygR8HFQbttdm6txck4r8k6yHbeC3FabgaC6hfgSRzRTBhFCXF2feEjMvf",
  "key10": "2euqCasHJCGjSP5khrspjrZsyPD26VHFTPZYZKkPMRWCxFqBeAANapPJDAHJPjfm4bq67omAsvsMVaAUWPvdmWH5",
  "key11": "57L9CEq575KVTRRW1MKWq8dDx1jPKc5bAqQnRa5mwxDT6A6mFqvFBZNas6ndSmuwJx8Yzwde4X1Hw6syK7W2gCuv",
  "key12": "4t6AsjH3rBe6EZqpicMa1srWfAei4VpgkE49tuC9hdN21spPE1hWS5VULvDEk28jveqbQYEs4FkdbeNAia7Y8pN",
  "key13": "2AsUd3SSGob1mdwsruqydNZQeWih2un2e8qfMavyPaEKvF9UpgT3WZmF7Mwpqz7d3QbJa4Xukfktc5c1Auao3c4v",
  "key14": "4Hff2espTgyXW6HkNEaV1hfgFWAm9EfRC28fAvzCJfyA6mGcXEyCQfJZfzEWd9rtKfY7iLoBasAiozj3Wp8hTwfu",
  "key15": "rMsTMRePEJMi97D2vc3MJZLMYfD5MKqF9w5WcVB1n4fgA5FSVPqwnGJKvdf8eoPmuavFtwyJVUYJTS1RJqUQZCL",
  "key16": "3zC3pDh8MjTjt2LwpJ7mWxyan59qtEQCmUCWaqjaAzeBDVew8SGWMWY94VtAscmgopXtxqc9u2TyRAVmDHYjbtiS",
  "key17": "5YehLA5KXyNCJcgXbPVq18iZGUKooWu2KCaKZTdXPfXmf1LmDMEb3oGr9sajfZp7ez8MZi4gs8bV61kG27byTm54",
  "key18": "26BXoMXJEhQkVEs86WyVYHLsgaEb5EUCzKyZpLYzjQ9eUUtqksDf6Nf2WMui1fBoA44SJBaX4FDiEKGXQ2GYLS2q",
  "key19": "NCaK3iZW4k8Xq665rKGgM5kw4W6p2cgVgmGqARkdEGhVD3FykhpWfJwWp5gDsWdV6XBdv3NfncUocJTS6q7V3VD",
  "key20": "3YMn8xbjWLda3NuRmibRBJK1hDB1s3e35LF7QNRkieXtGTb3hDF3AKQAVcHH1CoZVva7zg9KtQzfMMZ5GkEKaXHf",
  "key21": "3kbFRcp3nvNnA7qfEHiJRKcAtg29dnaswRciiwfyJuFgmadKVYvCgNsgFL6b1g3MzJ24ohJ7f5FXLDehE1UeYRED",
  "key22": "2HAE9FkiHqpxMEUzDUkz34PceFSw2tFuuXfdB5zkenjhVx2UqAqBnJQjKQvhQHSpqxLtx7533uWz6MYFCUwHjsPx",
  "key23": "4tcDm137KkHekCuxKB14ibfePoh5chA44evvXtUDmHQw6mh5yXJudcKXGfGHJofQ3QoCUV6BueCwEmDBg516iyKx",
  "key24": "3WRJSUUr5XEgM88rTYdfvEQNUA9H7iPiCaNaQSTucTxZi2Nh4sU5rToMoaHqHmLRsTFv16uvwdrGiqePtKhW8nVL",
  "key25": "5MyYbph56BDvg9jMSD9uMeyPo7Wx7QGLymgUAsgo4e2hTmEwBQnvhq4jxmC8e2yvXkTeaj1ybnTdjQqobLxXGSuH",
  "key26": "2hw9cWRf74AEYmNRgb71KXxVDhZRAhpwL4NZ66PSXfUwXVN4Gp6pxjqJRzBpdYUtcEv9LBwWKHAEbFCP1MoiDm43",
  "key27": "5Rsi7xerqL8D1vmW8AiKuV8ZwsogqVR3SG9vEMd4MhX7bH3k3KpSFnqpt8FMwK9nUJTTs9k5uGSj7pYK9DsDWbtk",
  "key28": "572qHXGx5qUhQyAFvEjqTzAC84nUnruvzhMTccFs9d9aVpYJTo5osu4JShPHG4eDYAKyEMsxekY8NLB368DK8LnX",
  "key29": "51sYmjCRYCKGSPKKp7GgC7waJAtoXZbaRAFwtdRinHZHxwa5BFoT13GRnSMWigjSMFHRCk5XPTCyzWoGEVmuJyzL",
  "key30": "3mfEXX5zs7goXKqnVLdbnMKHdV8FonNjmkzbEdcYorgMJXxfqo2RNp9i5CwFG2BaNQDFLxytejb9PaW6w146MTLt",
  "key31": "396emtEtQ88cQoHMRXKMvxeaxw4UiaZ4mJSUHUUXHMDWLhFcfzUAN8aN6D4PaTAqi7H2KSQCfwVrUYGvJb4Xiu8i"
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
