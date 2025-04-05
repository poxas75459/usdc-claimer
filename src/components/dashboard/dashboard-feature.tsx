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
    "5roTSWu2UenyJssXkEvar1SjZtiXjpREzcz8nsTxguSjfv7rC7aZMiWsZy1JH84QAzrFVBpLgQJ8FYPG5HKcYrh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVYC3MmUa5cP8r56Ha8fMcDnhSASUSjkeeuARfwnLaoY5YsFz2LjD36xy2kkzuXyRybi9XUp7gUtsaZzhkKHC3N",
  "key1": "2GgaBPLGCVADvJabuUoQx8kvvP5gHgbd9n7e8ukVNHuqpgYV8qADidysxJGrRJPeUSsqSLqkCpMpQs1CYE2WWxPW",
  "key2": "5D5qouSbUUSv846CXeHYBsRxghnMWPQUZoVHcUMUXTGYL8UbLCWTJyZAsShDsXQbSuJrMUY6MeCGw7BLDYcfzVMr",
  "key3": "2b3hHJzBLBpev79TT3h2jBsaHHmwbScgKEkWrocFTa4UYvVXqHzLjAH1fcQpeMWv3FzMv2fcQXfvA7pxNbqyuMdC",
  "key4": "4eVDcPXwjiJ5Mq8HxtNaZb1NjMisqpY6XBQZstLeyD7yXCWSNefEy84QtYeAAp4M24V4f5UoXeeLb4ADBD48wZLE",
  "key5": "4pWnKy2NJTVQQECB6PF6mK4sELFLinvmREfnhXcviNDSjEG87y3onDfYAHY6isAA1TF3yf2YgPExob5gZ4b8y4yz",
  "key6": "VAeaAnZf2zVhysgAzG5EHN2xU9vS9AFdREiZzW9Rg6cAjgZ4PEbUDx4maqxdEFeVkjaM1GcDhPNs1Xff349Jfy8",
  "key7": "5uoWKvKBpU2Sgs8tY4FY3JXQGLFCX6C99N9bAnwxZ6ckxYp3XwnjJBBw9vRxc6t9d9SpssoABqBQitg1k68PEHLA",
  "key8": "24rrQEkxxUcdL3yaRHSzFB4WFsr1C7ywNEkBzPTtUkFS7syJQsAWVW4AuLh4MQyoB9JRy5fVSz46z8TbKa8QcE31",
  "key9": "24gmR26149wPVuE19Yp7dGr7NwPpWmEW3QMTQXpFCWLGMoBPY8ki7rXeh6KazMWmeF6usaa16TxZM1hy93Mo4Q8N",
  "key10": "568UQqmtLAnF37cHHUQohmMp1mCQ62GXa8HV1KYaVNTiCe3zyPA4G7Jh1v3HR2JyuejieMSBhNMYt7kjwFqHa6jD",
  "key11": "2rMHUJWuBgtV7t1V3eqkaHiZijn6djTQ46e7CoPs9ijW4RApTKqHfdcpUXCYFyvPkATHJbXyTXdK3t7QU7GfGWny",
  "key12": "5McDavKhQxjAhU9EEqMATP6GL4qcFtaFCpXi4pcduxcCXTj1CxqhDeysDib1NuqrXnnmTUkroSy5bu7g2VXGVX9J",
  "key13": "4N4mCeTdF7BXGKrRo2AeYZAyhuAAZZWPAtKa6yMxJWoRtbtrJCvxL2om2V6HyGQYseCaZ8y1dQ8ouUYp5PAcRENy",
  "key14": "4aS5qwvpJYycUh9mugxh9xepM7uRE9a8AoDR2FtrxFWFmv1Lsvvox8GZmgTx3eh4RDTGVWZc1q2jnUd7vd1hfrAp",
  "key15": "5ndrKaTRJADTNFtwpgBufH85qaGujRYacUu9FkfGXYx9AP77F9havXmvWJiu7oHPLQ5wnCU76nQ1ugJUtkZMBSKT",
  "key16": "4JQV2Jgo4Ddo4e2x44rWPaGxSFdd9XfpNJGHxCH1f6M8JTNgL8DuRn4H3VUUbjH6oCzHfpAmXdXrupFoGNjjCW4H",
  "key17": "2fyAc5NiRhpWev8cTvxVsPy8eJyfEXZvbskt5eSKy3RQJqBnEkd6BE33bSd4nwjRS6QLmghqAYNDWYagZcWuzPaz",
  "key18": "5tSendWgWLzLCvPtp5f768pfs8W4quQ7AGnSvBpFRAv5TA9he5BGcJPxCDQWfV4w5u8sRxL3dzXH7x3REfn6AJoM",
  "key19": "3R9h4gBALxHXZLsAXip2sarp8Hc8TLxLNLB7BYArzwNxRe8Rvb2xpHV9zg46izwCoLpop76YxKAVcZWGzQR9G4tP",
  "key20": "3hwo4Le9wnkpKHEikThkf6MbNDd9VfxWi8fPFsmzs2qWG44FkTxryizxBUU8yw4LYFtpE7mriY2UKTa2NbyigDpA",
  "key21": "3SvUJi9Qr6hjieaxf8Vn6z4ZE58MN9J9dGwbn1otM8Bdj22P11PK3gMPeXcQ3KAowWmEihzzsca4yo5sHfHk71xm",
  "key22": "5PV3hwTpVqeaPXHcWJ3T6zVnK5nM6sVfDy7fDmqAxwsmU6rw3nYBVTCpE5tXWD6xjHLyJLe2QwH6izqihLrwNP4n",
  "key23": "66aVFUe84vqhiVLa3ZzsXiSrGCNV8T4FHsRjtyubQpXmTQTP4svm2rFy6NTL9ko1C4vX1bbVjGSyxtw2s39uxJh9",
  "key24": "3AEE2k7Lw6rfyiFfXGMNajvmvhAta6eW3beGJqr7kzt7LjSS5xAXYSLkisXNw9bNuPPxP8mooY6QuTKqxhx1FJZe"
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
