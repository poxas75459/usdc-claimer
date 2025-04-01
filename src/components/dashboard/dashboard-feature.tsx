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
    "5oFt2Q2tDu8VQat4DQpbWVqpLTwLksuGuhh6KsAz3HhubZyQCrv8sZLFQMD9BivUvtEXmThK22kmQ1asNNYBnGRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDgzoj8QMiJVprpVStuHBFjVZZ8wYmcq1u1pAuire6GhXgNK5JJWuvtaYFPnBj3aE7kpssbNXjvL6vxympZzUtg",
  "key1": "mjcHBPauFLnBmUh1jK8nNdQFZq9YUiCHvFFVmmiuMQgkFRvBTnPXMTC2e1zwXiwbBnQ18MPQb3BNrMfedwSTQEA",
  "key2": "67DB8hvy47fJVjq5HQi4ndo28HkaLY7U1rU1gZ4VichtbnkjDWZHGiCxbUEh8XHbQ4rwn5LwEyb6iNpFUh73uc5v",
  "key3": "2dse8Tf9BsrdstNYKQXJN6dMuCmWpCDYapJ43wYJhH4bhBJJYcGBsGFxznaUGb3Vcnf2Mkn9mvSRBJPw2LZNWgPP",
  "key4": "CdhVd4fsYXfBsY7eDfUffWtCjSxgAZwq6wXzSTNmEBFxfgLUYh3z7zSE8tYkzCeSxUFyR9ZibrHK2TntKEk54rh",
  "key5": "4SSzsLNw8g1CB2ux2dMyPhfyEXYvU283qQkjHJFQAwK6YBH3GWgNHeqAqRnAGzWfkL4xxiEUns3oshK9kSjvV2ru",
  "key6": "3kP7LrX7wo7RjA2tjKrT6gsxbjc5eVnseHQZ9DsDn1msPsC1entg8b9MXb9h3xjaaGeG3dDERzv6U9qzoE8XhCSr",
  "key7": "3VFcVFqUDbyarig9SeuqALK93ySQNuxcbkL6omQ4DuMxSkXU1LzuVnNcbuq9SEpAkoRjVamYNuvgvRu52j9684fX",
  "key8": "3aNyx6jxJVtuVomy1niMggb7ykb2z3G9XaSzPjxqyiZrwVuERpdzPWcmDSGHWoUXq4Fc8dzEUyTPbLRS9xExwUSM",
  "key9": "2CZjW2kXuyuBX8UXrwn138Lz8yXvCUSDVzoEojTT1aA2rFYM7xfNPGqq9YhnMB5Uoszs7YFGVRenotai9p7n5JHT",
  "key10": "xTnyyoprcnqH8ctpebKT1GhgyPwjwAvoaZv2vUtQp5SHdMbht4YwANYn6fkgyhCtCaYouhewzzcuEyjvmx5qNiS",
  "key11": "3un5hx2Krm74jY3xe1tn3TKfYQnPqPnZBkZmURPnfTJBMJg6qUezKQBVGTZWZePiE6uYxv6XeJpsJmRfQaGij83v",
  "key12": "2r4EoV5opzPmSEbAC9CcT7mSsNNu3Mc4DKKSTEWmheZBGQXncXwDrxCoN3YrfMKQFCu6hm5xVNJicJPopX2B5ZBZ",
  "key13": "44nukaZQG6k6uFBne4dKcf1pf6mn4AZc8kgDtpRjpdzZBHH3DH3ipVhqNPXVXkRiB8UY6YkFp7cduGt7oJTrYjKx",
  "key14": "5twHF4s1mwR3XJ5dw8D7ijwekRn4Gn2fTsqmEGgyrmcPJqYsuBTd2jYcaBdMNVnZSKXDKgPLGAcvChxUdG4P4sd9",
  "key15": "3tnJb5JuGjPZWfXAEp5V8HvqJsPBoEwJix9dPLtSjbukhqqgwjLNz1ja6CGEPSyjYvQrajcAVwYkP1iffc5iCosi",
  "key16": "2ANYtB6ZvipxWzwLgv1L2bdihVJRPWivYpRAC8R7fKzZX3NTmBoNpFYcB55HxMiA4nxV4D2k5axjF2FkEPJfCrK1",
  "key17": "49NALceiwgctT7XKMyrz27WnsLrXtrck7HKaX2zrSSYEEe4DNDmZDQLChrRthuSys59jJ4Ua4GLKmZA1vLMETQgP",
  "key18": "3E5eJcZyFDeUpK64DnSHAVfo2b1JBhPHjEjiruu5tAUmUBhFpfbVjQvW7iA2WkaHx3ka8WXeZnuzkndG9US3S1yS",
  "key19": "4fyAYGwNc62dpqwL2R78aviFdhSvJzjP3gDME53XMRT6LBXBgqLgQpCX5Fbh3TabbTt9rN1tb4qwdL7WB4JfwYyq",
  "key20": "4ZW471XHXSRhjgJEFnRha8q26n5rqfiXZ7yvcgqm35A4vTu5mjwvwb2ekjmrPns8jaACTwHEch7taDq88dMJJnq7",
  "key21": "5hLsKp1BpmvDy7yi5DS6MAGt5vFcpvh7X7wjR8Dj8QXQmdDcBpGLME3fkvf8ATQQPFkxmKVK5jfS1z5yapWCVXhJ",
  "key22": "ZDj7tatYhw5RwAtffr5yc6X5xYtrcUH2doU5qhYNZvdbCFL97JKbFh2wJqLoFvvKMGpuvGqn8mMvRusw5ihDc6h",
  "key23": "3jWkgLijcQgeynqEmtD1wNzfUe5NbmpX82QdcZFsa1YfG38Q3r1ecNsj5WxCus523UMeBU851M1kQUFydC3iY5m2",
  "key24": "KuAY8SxNsJezUNQ74uadYBx2tGCxxqaQred8wxzu2Wwt6hJJrKPx5RQ6hQ5mJMjhmxPiqeccYRy6JrJ2iX4qFsn",
  "key25": "4L1C4sEshKyinBdhLzX1u1efCoaSm7aYQ2FNwd9ZF2P7Yh7YwnMktWVC5mC6QdDSXqNCVAABF88yz9eBDcXhNXS8",
  "key26": "1K8Db9cBgcnwiCbLNmi5kcaNfByfzxCD9eMt87bqEx6fy1xR2WbPUh61GqodkcZpXeHuBLap1CfUMBKWuGU6SPJ",
  "key27": "232sEgTX9oUgUdSCXcDZbAXwXpX6bWHayzM7kHpTAoD2TptSKHMekfXHFs1y49snsC5W8HpVFeGsATYcsUwrni4b",
  "key28": "21g7Ee3x6amQghNG8UFNYDKQAntVNgmfeK2LCa1TnFkiurr9n7EHKCaBgvV2KPrsZawLKhbwyowTvHhSdoaveTvE"
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
