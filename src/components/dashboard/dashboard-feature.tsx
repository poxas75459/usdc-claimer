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
    "59p3U7HJWFxfCiufrMa6i9L3aB57wRiHDPbaxS4yuTRtCZZ6tsFtDWjDexzB4PhHi6LvVzyRaXv8FV7zjzJj5AKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuWPjV4nQQPkgCCDvLeY7GeoN6jtNPphwMcHrayJmXfT8K74FjcEpXJgutPYZvxXQoN4k5tBA6qU85HgrMBP2Lr",
  "key1": "5rJPJgZwW1is2DjSyHqVwKEec4p3dZgx1D5tGg8WvMjM6QnBLQxEq84s78JnZ4G1X7KLEwoHbBEQc6hmwrBE7B6d",
  "key2": "3TdMehdaBiwS7eQhQVkDmQ9jpAQxATJ3qCZjufwMNBGTxMtR7rtxGjo24u7fsigW8v5wVpNr8Aa88pjGNs4cSwft",
  "key3": "ne2akDoi76jtunSj559UBTEquPczXVzYkmnREGZ3y8w9hmaZ2rVieFeUWm7ui3ypNCJKqMoNuvnG1DiEhkLfEVG",
  "key4": "7wiwW7zL1sKKBuxDTUJMSeYDBvhecYwEQTEWLT7rzB66mp14oKpjVGNtLpnDwa8kHCR1cpn7FA9vFis4SUyZ9fS",
  "key5": "2S81xM9uckqGmsZvuqaHVCQJNEe1yALTP48wBVX8JNmkvcS4DV6EfiRXyYFwMKbmidz2E5ZtZ3iaQQQwJFSyZfw8",
  "key6": "2C3WSRMVA3SHfL8gNudu5Unvjw2ykmCGmEXXisDDCot64bAnPCJPSv7ebTr5891ozmf9ZQUqoqL6qCi9dGbuNuSo",
  "key7": "3G7f3dH1DaDY273aSgqJVcV4C5JwhdKnCjSLdJbTxZ9mdRvYQs32tU3fciwwGt833haiPjYCoJ2ax3qPVECnovk4",
  "key8": "3Lu7DpNfSyTBVSqkgZ5CuzCFC5nZi3EH78jGZwqnGW8RZkbwFive2L1X8sHMX9FTvaUUQhWhwU43YS4aXcPbQRvw",
  "key9": "2pW5WB4f8MWEBjNES5f8VPZ9kcoPSAmshPJ4RBkFBFQ7xNp1Q3eRMwpMwsy7o7CJumeBSap6pgvhQegY1gyDGVyW",
  "key10": "351tasiL41LxSR1kYVtgVUgQYmtUQDCC8NFwk9G9sb3yK9StasiuofMTNCFUyQF5tp4WJLPHwXFSP7W775MuLtPt",
  "key11": "MErGewrK5WU3w6QjpRkdWaDHrxiWXBpvZw4RW2qrhjopPzvRra3JmRVqmh2W839J4P3zpNsZzc98Lr9ubpviQB7",
  "key12": "4eqHWPMkHRpa3mAQQMknauXYaqEMt8CXoAHpct9UyxuVMKfJYeaE32shTL6avCBNLJUD5zPCTykka7ywVuhpCdU7",
  "key13": "Tzo1nSBJLtq1cnc55jL3WhhEm21e4SuefjzUqHA97FWYCRG7HTtayf3ngSzvVKW3dgJTTSCKQVHBeFK4UQPThNn",
  "key14": "53QfxWQKiiF6HytrbjDkGyGU5UX86r1BCS4ru96VVkGio2utnMnXn1xon85rTDXMhUHPhkAA6HbrPjt1TDDe4rWg",
  "key15": "5wy7d7yDkQafJLpGp5neQ1LpRAAApJWCdZCAT43y15zwx97ZRgdJ4XxpyN52TMvNJKQ6nnMyLBeKZCVLnxaKGCFk",
  "key16": "GRTZ2z7Vdkd1AjFyWcq7Y29xQHTQ4rHY2ySkePg9oavN9TndDJDb3o38P1hELKg12UaSJ1haA78Z9idPNDxe9Ud",
  "key17": "49edPsv6R6cYhVEKbDDkgGx8811LjzzvztPFEpY7UtxUr1ruaHGN3VcYvBysVRZPG5H5PHb1oS1Qnbt3E2Do7nBU",
  "key18": "2hpx9B4YxnBhfzp3RSkMixQYiyUAfnuXtennXH1wrUtkze9dUwNPLoZV1Azq5MfNHe1W2Z5SH8tnXAADeJredWvC",
  "key19": "3gYGZ64qT6zS1maCaBqrPqXD4PHoi23V78suTiSWRzinrqgibUkBK1b2uMXe3DPDW4bK8s42SDBZLjXZdDHu1RBr",
  "key20": "4xDkYLcZiH2Y5M93x93hUTcm2PHVvEGQ8LrnGb6NP7GfKDatnm9gJXzBzz7gpM4heiua2jWh9bjCcu3LT6pvVbDe",
  "key21": "5vpCKanJPvQxYTfXsGU1ZPmDsXSDd9LVdPYoHQc8SqPGoqAiJ9CpMy7qthJGgcWbAkfj5qd86Ku7Pk7YWNffwTSD",
  "key22": "2otoHBw7v6YvWDRWqQBaDxUhT5Rrrm6pYTTpNDzafUpJUCVWobM2erhHGjKbKA5aoPL16SaJ5sDpRLajqXi2d8VB",
  "key23": "3g64jqcbJkngrGDnpJGPjrwCCsUBz1pbr3a1zPuJ1e2tCm3TVaKHrhbTFSBJ64PCz7Pu79snSUskcvRjHEPye6AZ",
  "key24": "32PD9URNk92Z86GRCHYqirf5RhHhnfpTK59GkdNdEommy86S2k8HubbWzbsXjkp84GbmX6vW6yaG5prWaHho7RE1",
  "key25": "5CWRb8HVGKgbJZMY8ArJAx7LFyfHQ2vc5NjdtoJTa7invGy9qsaSAan3y4fC8dW6ASDW3qa2jKYLUpSM4aXfSHxH",
  "key26": "4vxRWfjg82ntVsh6VybPccbUwY44tjgCmVVDASfhrTnXirLgPKCpNefoQN8NRmXELRgdjXgbagQhyZknGdbBo4co",
  "key27": "2taYGp8ssUZchzDAkayEstUvs1gKcNSiu18sZcwLv7Lnzp6eUxu1J5FHa4jw1fAcTPnoodX1d81znm2AZF4qMaWS",
  "key28": "5RF79j6jaiwaHWiihm2JAftp3PAuKAYNLobxxShowYZacGQ9pznvmC98W5psaMWsj6Q7sMN8soeWQwP2mZxHn5GT",
  "key29": "3cyqc87TwCvwC8A23gDfNRRwHKJeumqsJrDkj9dYbW3RpX4AEeprgdaWWuVmAh231DW8pXBoABgq2WeMAXc1MGgr",
  "key30": "3Ruwdf5MueyGS8A941HPsiTwiCvND52QGMUhdxpHiKGB5fVa3rt5cSMWuXWBcehbmgJ9Ge7R9hAUccALedw42sUW",
  "key31": "4zRh6DA6FsVCaS4YkFm8vYFmNXZEkAJGNxJPjMEU2RD3uLg1mQV7doH8uyQMeo3Q1yC8yFar7Cd3CtoyfxxbMAHk",
  "key32": "4J6f92SgnyE9nhE7JAPZrTxW4yErEseyZBdaXB12vTyiGeiEpukpVjitmDhbso8NKdV6Nf8JXFppfMogh1Tm8rCi",
  "key33": "5sQfUw5N8jer8eP3Vgp8XD1tQgHo1fiwN9ch1sD1jJCb917d1EKUeUgjt7wjwgMYjmDutH18gP4jqAkyYZdMKeHZ",
  "key34": "5TonbHPoVdXxoGrWUfTujVwE1umGsZwhMe7D66zDejfJpCpHnWF17evdmtUrugfQDpeYuwviocUzHqqWvyZzHcoG",
  "key35": "2S3pFKMSts7pFStD49YzSKohZoWofathJXf62kSH68VTXZsLyqjnfpQoB9TPmmcc38QkAKp4FXCvy6ECPWBF6fZn",
  "key36": "4ZEG2579gSDsMhfzvDm9gv2DbpiFaVsLpiW4MruSCFKyci7x1kXyT7FtzdGsrvaZNuYWGvRK2AkAkTLbq5K1xoCL"
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
