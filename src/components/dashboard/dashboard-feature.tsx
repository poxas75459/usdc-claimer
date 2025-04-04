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
    "3nTs3b8E4cxX1x7uozrjhU5vmk473fNSjNmkcgU26as3ken3szbDn3JxmfMCaABQEiWpNiPJ5CfukjXyDdMv1kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZqL2ogKkzik74p9HhvPGvy8QxyGcLgogZxn22HsaLSEivjQSFX1wxJeMoMbd2ai3afWnS1CJwonbcofW1k6UAHE",
  "key1": "3meGp2Tu1oVTmi6PfDWKRrMMSKyoYN7fEQnR1t5w8MdJLrgDNDoBeCwS7M9MwRScrJVRxtNXNqDb2keBgmsrVYNQ",
  "key2": "4GLtKbUcURhRSpBSka27Tu3eqSjLvHEA4TmmxbTxyzbZAX6tuyUMovumw5en94XuWKPFk8tJXpuxfE3oMKGeNK7o",
  "key3": "2AuuEJiRaZjtB1tfDsueJJyN5RGttsQmr2ngYwwhff3Cd5ZrMquofXkfebYbrmLACZuutzzpAG667c8AZtd6EZ4C",
  "key4": "5CSmBzySEFb629qFU1AZ36Ux5HKSxq8BMYfu6NY5HsmdrfNEqZYhHPwbpVKmYDR8CdrLEndEBGQrRT3dhC3LQk2d",
  "key5": "5qJrWVnq45cLCmXvnSAVHx5Pfag4HRPpZ9qdhw2ygm1SDh7W7ayvTM92pFdPKssSejvtJb6vFUxbkrevTN7G51os",
  "key6": "4z89JFhpivhUb8PUpdc4LGERHbvHFK9mLfgeVNt9v6ErB5rn54Y31wy8RPjQQJWi1bswTb8CosNdmPtKWT5MJDZB",
  "key7": "2DScNE8wfHdzNgJwxVnUfXJbZA5nVFeqJFPfVhxravrCLFCjC4dPrBs64bP6pB8cU4a9Lu5uVjNECdrUMfAcCzv9",
  "key8": "4fFSzM27SseP7BFALZhmehNHHgWcDZis1DRfvj1gFgxtQ5ASMP9oD7AvubrVBnu7867fEEscN9TXkSMqm2Vw3TBb",
  "key9": "2KyrWAVFPpdww1vKb4Gd2jxidsgDJhTAykB8Hnm9DVhTpSpbtwo2PZFePF8GBW3ryU4Kg4ZN6rUFhmyKgzJwWSUP",
  "key10": "436noV5xZ6jh9FQHPyMd2DCA8s9pzWJXz5GEo7oTnmTA9hPJXAjuR6g8qhVvbVkge9qQ5BMJbu3eSBvqf2Xitwv1",
  "key11": "3VxPkFfmga8HqbqF4bPTQVGYpKo2mQf4LPMtRG5vXjgiVsyUvMjYeyvYeLmw74vXJUPumT7R7vTB47NTYgrm1p7t",
  "key12": "nP6meTuBvEiDJTgC25sK4stxK6KpuYrnHxB6DbDr6FKX7i5KBiLxkg65wpdS6A3ceyFEFtcLm3pVrHW7v5mdmee",
  "key13": "2pHikHXHs6G9JhsTt6bwtLCsukxVn9qe26NVxoBdwWRtGFFgXb4448UDM34cnKavnrQPUHMLGnfLpAYLdBjVTom6",
  "key14": "F8ZpfJ3jnBCr9WhZyNhAfY4cxf5jx3xN5Jb5PvHqiEC6sK2SdUE2KWjikyx24Zexd5RNssEpvyhg4oyRjnCxq1f",
  "key15": "3jgBAW6wFW9u2Cnz5nU8uuX3qJH2JhkYtGbXkf4faadEZtyKNcgyqK1GUb7ELVys9q6kgV3n96CcgHD3XGjy1gvS",
  "key16": "4aiuydQDQ4qExympnTTzSirkqJFxMDcECBCDmyqVd1FEy5mRujz5JXpnMtTGXSqhtiC6MzXwF6TPdTuHNzUxQgiK",
  "key17": "379qqK5JRfgqs6EndReEL4cS9QrgFGVF6XEUKqBq28XjE7HcE1d4oAhiA5UhPL1nPRPtiQiiit9wREmd66ir2gAL",
  "key18": "3oBT8UPv9zQUfdY2RmdnzBJ3igMCXH66fpWVLRKod4BPr39FgXvm3ySGwusWsdw6hTLNifwnbdivaN84DUiqPzvR",
  "key19": "5p34B8g53SDXC9nSHeBnN1GoEQBvpQhWb5Gxq6rrnQFbJDdrnw7HywkPYJrFdUUvqvbSSLkK4Y6RMBxruekELn6u",
  "key20": "3HGWPxqB414LzJJghMgBEZCkm3qePRGghTbC6xZgBvhUuoUdjFXyWUgw8R1MXLiV9LSGBVaUcq8uKrSg67GUb1CR",
  "key21": "3CweeQBSoFrkGMjadgZDYCucty52xmAUYcUwmg4Y3WN3Xt9nPafZwk99LjX1CFcTvqe6KSEMHsLEcUSKHHYYg8xd",
  "key22": "5xkiSnM8Zj3c9Mz1njYxgc6u8GvgNyV8CStDTfvZVxQazMj6ELw4XzeJuy14PFjNL7EdLRqhjwbeJR4Hp5iEEjkK",
  "key23": "5sGFSNcWUAYTY44JNgzufC3Zxs1VopxTpGVNAsrd5hD3h8t1SQrviw4r9SPVjR9KkRzZ2UK6B6x6rQxxhLADmcdh",
  "key24": "4CxHiKhzc2JjrhbyS3WcB96dGfV7oMPUNabsSXkFuHeQTWTz9V4LV6EEc5jLz85pCYhRVU1DUtayY8N8S3KPjmfr",
  "key25": "5GaXqsrCJmeLaW6KdGbc358mYoU3StMiEyQKYMUvmnMwGqKDsuokNK1Bamk3RUzPEHLrgF6QxJZY7NDPjc3GF7cE",
  "key26": "4J8TerXr1YXxX5gMZ1NywLQ7Mw4TdxUwQDb3oLbvBZLMAQqMJbywYvhA8t53Kk6XaSHXghGAgNCgwNY3X9DietAv",
  "key27": "tSKGXa76wLxGZtNRRtuB9uPZTfdHWFCv3UvfeHLownzAMpJ782ugmTUEXZuqevEMAXLXHhSUMr593ejpQ2iNZFc",
  "key28": "cjrF5Gud5mzhsQDZSvMF4UmMg5F8S1mPkoKMBHnrqA1PPvQrUomTX4vGNR7TMH834uei9XLY1YrmLxCVjoNvxUB",
  "key29": "pWbMkTcbFRXRPxuDpSdrZ5p1jVVwAVjgd3BCreXqKVZ1G3WU4JQsqtoWf8gMXLBemTKLYWduHTp1EhNhzi1GfXN",
  "key30": "2vviwk8r8X5r5GeSS3bUbbgDvoHyXNWAiPVMnatpUz1div8uQnMLqMLDL2pJWAFyx3AzQ9VFDEKRJsrgFSMksSqj",
  "key31": "4U8ALStiBZ82VA97746Vfv1GKZhVfNo4EKdYM6YUKvsTzrcAf1yqrr3Gigh7x1xXS4mtt4kAo9bq2g1qebcYihfe",
  "key32": "jDxAo4ZS5ctXrnwwzpGcKRMG8CWZJrCwh3gM3MUneSDqcJsXqhDLJDAF6LJVhTDkerWYMxkmxY8WWpoaHY3KLip",
  "key33": "ALxtdEXtaySnKBKNBqjj3yCUVECsDJJH7eyfaryGsTY292cJBYZGacFufoq2SZsMJgCByH9DTqE6HPQJK9LBPkC",
  "key34": "48jjnpbKhsidDEsj9cT2DxPVqVoEqvEviJnCcNJ1RvsY98maq1PWGZyZqD7D4gbacZhhdS5J1gKUSSzXMZf4z46k",
  "key35": "2fRLF6B59yTWi6nPYcDD4NhyjNXsbHF5D61SYuBquHEuchfQEVyfUzsLKXPSCFm2fEVwR5M3Mi2ZRd6RJKzGqea5",
  "key36": "2oHAYxsugkmuvpLqADgq5xTJYz58LhQxg2vgFuGDMq2V6fDj8JsCBZBegNoXh3mp51xa7cGAVef4xMzfoWxmA9u6",
  "key37": "34j4Wp6GD68W8SVtqgSMvMvPuKP9UBXyaiDj5FbcuQJvVi4FsbtCCo7w5TDU6pd1Kx9E9kfciRD2jt2zTqqFzudm",
  "key38": "21LvfefnsUatrnrF8KvExSaqiSBhfRzVnxLGZ4hmK4oagMeFoiNxE5Rd9TKgZZjVbUmLUCp5RMLAcoANKfz84oTd",
  "key39": "4VjSo8zo1kyqKs2KZAxsvoSoACddaVGMJtPKZE6rHW2D7UyBShoHBnTEQrr1W23qjeQKmte6vLHnDtVTrzZTteWM"
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
