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
    "2ZDPTSEhTHBnBYXMtqSJK6MnUrLrbU7r5gdsMZvVpaLRHzdDYaMnoUJwGTUTspAJgNtL4fnkvHfduv4Vv5AfCof2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1nY3ht4KEtYxF8HYKH5tZ5H6yLFXCtn4Y9wmGd4VD5nURnUqnayf78SRGL3vpzBT4mWft8qYMa98qW9LM4aQcS",
  "key1": "5n8AthxQMBNkYGN27Ngr1Sg2jMxqzhDDkdAxtMHH66TALDSPY749yoTNSBEy1BJD4e5GxftEwU4H2vnE8eRCpis1",
  "key2": "2pZmk7gQmX2tkNZu2JLqobupG5vV1j3qYYQn3h1WAe49Rsk5F9zbRGHhnowUdJTbYYhcZH7RMTvAGDni3ami2GLP",
  "key3": "u5yhRMFcZZCJesi9rf8Jhzq4euj5JykeXtdbsjk6AB5LUBDRLWqZsUVngk2cfVF3fZtVQd69q7Sk8MokDtktVMK",
  "key4": "wgq1JN5WDk9Ao3XT4yUARKVhnP8Y31FNfAiwSLMF3nKrfnYQv1t9TGSJ2CMNshH9v9tsCBHfEvof4hrVkNs4HFv",
  "key5": "4d2GuoGnHcsWqbdyFUjx8aCLv1ee1EDVcWBL31mH7vULURBys4uRY51ftSdbkj59TkEvXK6MqH819KCeJ7QYoS5C",
  "key6": "4PqdhmWq3XNr2zdgWhVfjsDV9iz3KGbB55SDxbTdaFcPmRKJnxbQVtJowErER1REYcA83n7WT5DtNdpDMrYaE3Za",
  "key7": "2ZZrrg1GtmweqbLWfjyApNWAKhBRWckTKcXxvYrFk6yY2PN85XfYSMbzyxKdCGV24gutwQY2YYocSPqQuP6KcFiv",
  "key8": "HBSgLrXYtSUqgCuQhbWoo8A51HbAZocKipPyBKvK7ewCV8r9mVSNWfzbwNkgJ7Lx4g879vAsPG5aGSpzPAQzmep",
  "key9": "2awoG74VR9uPgcxY3aWvaG7dKf8sAErUojYpXgLE7VexPV61zwXo872mZEsiLpWfLFD6PmckepptfEtpV4f8xGXk",
  "key10": "3EZ12nkTD9Hd1GWuUH3QWX493iRJXpaZ3FdrwbrqepA3BpnaMDsAh91c9JYj5wByzLpSkd7sXMXDduWwUzTrgxha",
  "key11": "55Q9baJ9aCWYd8bPFtNa1U7rc1k639qZ2JRBmgF4E6rrg9n9LYFcuPjYLC81SUSkuxF2ktSTE67AGwsBX9WntYpm",
  "key12": "419UDRVhxeeUBuWB81FsWctRvEBeeEtmZkwcpoP6jWL9JcqmzYMnuyMqgLfnorrQD9Pz7c8nrScQgwCBvD51MaG2",
  "key13": "3d4JHb4jUKvKHFFUa8gqRppbXcFBH3BXcCuvh24rapBBxcmXq9bGs4mARXsN4p4vmm6geqGyKpKmCcC6R2Yzy7of",
  "key14": "4mcV37vnA64UqxQiHbyghm2GMKcEzsqojc9WvQFCc2oSKBRLGJ32GaQ2APA5owiMMG9bdpUwN2QePCJVevNSQB4n",
  "key15": "o5NGN7F55PHsRK1qXAcyEtmzusb29oPFsTH4HssWheHy3wKrjQZyJo9L1DqtnQLUqT7EwQUgLHWx6uN3tvQPzQ2",
  "key16": "2WjM5CTYtBaTMNJc6qS21dcVJUp5ndueL32jvNdAi9EoKXcRpyvg4tew4D2dLouAakkC3uUtxoSJ77HgBS4QPPRX",
  "key17": "36iq9Cjf7uKhjQ4DfEwNPmDxJ5HW5feB2xQ319Lcpnr9auPcKhzt2Chq52Ekky1heMpXr7cZK46YwA3yeVkRxxWB",
  "key18": "46ihk2wKtZFv8JxgT255ZqdqJTFr8gDXff4zLBsjYVsXdP7YtWNrfGqUAHPbSmYP814ZNZdM1rFV6j2R8eM6Ha48",
  "key19": "3riMQHjBhFjfm2hwkgCBv4zzsmzeUuZQGJYHWJotXjdPzvqFEJmvAYG1GjN76FZxzoYxgt7AH38HnDiAy4VbfbFa",
  "key20": "5VH39db55r4JqsZAmHMXPFye4wz4uCRYX7Vm6QdF5NyaK5xYntReNJHgszXKH1F9L6RzmLJwrnc7UK59VYBiJcHo",
  "key21": "3rKDuiozZhFpsa2nMLjo2VLm6VuZaUmuZVxai2scD6Y1uWgnnaKZSPVzohUCWzFBBoP8tkMr3dTCDXoFu7drrCka",
  "key22": "2esXiaJHWZaeQjKXzYR9iizt7G1zUcLV2ZAm4VpWkBN7qGiMAYkUNnAM3sFoj4VPbGgrKUiiHfQrxW4bmoizCbKa",
  "key23": "54Bdm8LnL9gcdR5ruJBaNnr7rieeSvkGNY8iwyh2qhfUSLU1Ewmjao5SguhG1jDuS5dBf95yijPxEgVFi2wZmhZB",
  "key24": "nE9JmPC39Ar1X13jWh4fiUYmqzUoAB1BiG7AhKtVCAXQd93VnLgRbkWhhYWqf1PC5c3Gn341WdTjqduLpM86Nw9",
  "key25": "2Hus8y5vFnq4GPMxWvAWAcDVHZFhZ8gbPCVa37Aoc8Hvg9JvTgWwPtsE1Cy32Mr4tzozNVnKtr5SLv2GKCJSQFPP",
  "key26": "3KewsS9gxoD5cmSkDt4Pt8zsa8ydQSw4qApk6NvoKxpeBES7Eq1ro6Ppoq7KWAYL62zELhxrwKNtEoi7T6zCa4BY",
  "key27": "33c8pqNMkP1hfxgF4h1X7veBckRCeKSM8YCSa7MQ7s4rkWG1kqZK2D5TC4uGmUB4SSAVctFfyeiMemZmMqV8JhQc",
  "key28": "5KMoZHBVY9RPSrF5Qgw8miAaqMUAitf5LWcPG8B4TyPoHz4ruHbAgFxN9SJgWD5kDodkFPX3AjSvUjHvyZxUa3Mg",
  "key29": "3CXyz84XknP8t2ke2a4LXdWAUMMzmpeYDxjge7Q99CkLXDjCmPAovy8aGfSTBW8TXoN9ZaBYbWoDQU24Eb5W6Dsc",
  "key30": "5MDuBbR9Ai6TMXorPGvMBg8WxeSvoxc4KYuZ9YYdrRhJivZxtjun2irS5vLsFAepLUHPcTR6v4r5FSHUJzj3J4bh",
  "key31": "2wqkmYsh3YJCwJisAQarziwMTq5uYfYLQU42nKipGP94pfLqBXRbQNYYMnxvKQg5pqFxxeTipgLRcgC2SnBnCErC",
  "key32": "5pgTEeCA7vYBnBFdDMFAykjvxahCt6mB2Bq3DsPT9ar8UfNQZqEqkd1gFqEqVPKZYxmx8m6ZKn6TYz35yVyA5sih",
  "key33": "zpmuDwz2YfUHPWFkoZQQ4cNC738B6Yz2fUUmDNtf47hPTp5FzfWDQagXjo78GAP5c4rzCfeR12WuFea2e1WnxL4",
  "key34": "HoNNSttHVgJGKADUMCSPKHpu521B3NzDPJdsqHme8uvqYfLfq1Y5pv5bdUvAcA5hrBMkWRqHRg8oxzp1Qo7SUbr"
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
