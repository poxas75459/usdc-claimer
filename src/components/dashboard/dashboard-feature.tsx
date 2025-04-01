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
    "4Qgp7e4tCVRjdu9XAkk6JJwZm4ppDG1nvas1vDSWyLzzbVVsaFUhjojRbcKLbjd1tvChqqCZDqo8Drz8eqFJFjVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v8fL2r5moTBwAcb9MKPiBqZUWqsPr366za33wHyHmhZazhyDUsYpX7QCLCKMy3M8hjUT6jaYJqUpyqEfGKwDWoQ",
  "key1": "ho8KMiQxrNkQFAHvjh8Q77FCGwJkHkmUnRsbb98pK7krzTNGCipic6912WQ7xfMYTDXsvLSFMV38Kc8mbFvquJF",
  "key2": "3T7cGc6F3wjPVHahV1G4m3uQ6N2dVYyiyDBJaK2nSLJKs3v1mjQ6P3EveKv9zsXCgtZ5YUapE1ZQJRi8aqRGetd8",
  "key3": "3Jn1Vj5zAkA9cQeJgdtKxQALQJrQKGrsJcfcGfJcknYU5UkF9CqBSimYyj4jnWgQ7fvrhx4p5pe18BErV3R9ptp9",
  "key4": "2YWEk4YjYEc5KJyt4MVM4qcKhAfwoif7ho6o5DLi8rsQDVXQQZxVRhza1vmen1PmNjEQjA9Bcvc1U2Ko8sjP8Fag",
  "key5": "3WMtQjJBToZ79G1XCARgP5JC8guN3Nn93BcMj4i9bE9HbvJ3rZDHQAfEnhw4y9xbYKxdEGKDcqtgajNmm25i73UD",
  "key6": "57zZh7tCkwdEuWDW1LjreeYENb5PApDzsj9wdmn2gY1DpdJrknGPPF6xWyKsoqJcX1WC1kiG53YCW8gwUmJYVRYG",
  "key7": "35iAHrUpPm9e45B1iTkpBSgC6JKeZJfWjtqCQpRQmF1LymegWBg77CpbHU8ycdcVU4UuyeT4vLanH4JCpXwtdrJe",
  "key8": "zF9mq844BzK5vCoSsRLbafX6dfRhigqB2vCLtvr9Ch1YwWamiibCbooCK7nmmYGKbykpTeB31Wfre2PyGAjCVtq",
  "key9": "2HsyfKASJGFLAnDmNSuM1a7pPcmUwwGiLDNrNR3QpkLoveno2ANfvniqk2sNS7j7y3LD9diZ7yh1j7dBywtxRk5C",
  "key10": "32Vqbz7C9UQqte55bZRKZgaCCqM8q4bqu4AaGvfmb6kPLdw4cxekYndoRpc8vZxdKbMYYXuh6XprCNb3ZwyzAxWR",
  "key11": "3REsMwwVoc2hzU9C878u2d3T2s3gmcTUHqRmWD7yVdzqePdf5As5Zp1VsnAMM2EG4bSxhN4NQYQnY8sxvdf2hbg6",
  "key12": "4HxvbyJhqLTdugcQTQAUikMKQwRnS55w9NeX2n4Rt6AVV5EJ6B6GAXP8LC62KHGcW1qRUpH4gJWehhu5kwsTgJiQ",
  "key13": "27o64Pgy28soz8d3AiwgcvsrLbn52ZB5oe12s3vicEPSxxs755zLbteyhfnitswjvvzqgePURd8BcZzhnHN6B4Bb",
  "key14": "38cEt6vpvVGjFd74aNYTXwW9HyESvpVJxiZqUVyZiEERouvJaHWtotVa4N3YrRybVmSwJRJBmMQh3BDF6v1dfKZm",
  "key15": "65UJxm3qEqkXePHDjw5G9EThmjkqqHoanCBci2STQSZGHvSv5exeFAxrCT7yUbGKfbnShHw9B98q3fFujAns6cx2",
  "key16": "4h121KE5oVGX4Zb5k9bQo4XA9yirqe3NUkTtQZvTSxcMhXUR8F9jRHznE6jH1qZnRdc66d7gbAW1wBQLHWKLbaWT",
  "key17": "4oz99crAKqBmUUdHENqozvp2J5UxaywJ5kQ9Tcfoo9Qy9A6aLfk53t6f1YHsbKMcJjdY3rDjv9hZoPHbpQPwmsxk",
  "key18": "33xsPyutoB5wV6e4Bb5i3KuZeje2FKv4g6zEmkSyXRz7T7fTkbPqFQnqUcqknRsKD4LamTXxP1DCZzcLYwpVHoBr",
  "key19": "59mzUu4sDxmNA15QuVSCYzj2J6NyTCYmVJtQ2rrsfjDM9NkbEU2KEyA385c81pfs7i1eKJourdB6Co9NozjzYox1",
  "key20": "7F85uZ4touR5Kqj6pCaf5Rwmz2nsyfecGgiXwMAnY1ANyrHjd2TYXnAGAtvoABuqpzLMHJ5xz48gr9p4eTpvor5",
  "key21": "4LoY8CcbnurdGJov2h5dYETNy9tLLoi856M15geJ9YEtuVd74pFe6fscmNiYuJxbWXV9wMcKWBVTRqvZMrdZhs8h",
  "key22": "4wPLSD8shkqdnFGwC1cfpfth6UPjPor2sboekcBUXfnW5rVUmbCLjziLBAH5XAKAFv8gkVJvrjVUPHwsEXdv8Kqe",
  "key23": "5PSm8tf2pTUeJ2aJcZnKpu9uQVUGeTX6pYktJ5G3er61n9WU1awWgwgDmENsTtkAtbgUyzLL77R6cGjrSTHQdbKD",
  "key24": "4Ly3m8moxsTzf9EHCgy8utxPNk8Fkinoxk9FnaUCcYNWcrSrAQHxvtWF2vpVVFSk9TPBhXVipX91AoYCSefqcVoq",
  "key25": "4B8f3ca5TLss2hJhSiux9DmAr2txRHW75rJ6nE4qjdEMPAgnrmp4tRJk4CDrPRf4DrEDGr8Zj6GECp4dhft5DMp1",
  "key26": "9P8JLuDxaqstqstMio9Wva71d1MoNtJDKdnrTU3Ak5qAGrP2SfXDY2jrGVbfmSvUXGzbGngkyUD429si83D9ksb",
  "key27": "2XdEbaXrYwwdoQV8Q1n5M2YRDtm4ajUxHozwAzqUdNzY9hmLkhKBJLecKFyRE5SgMCagTS4inGkQj9qji7SvZa1K",
  "key28": "4CKyCULdinZa5V11js7QXnbNsdCeJ8HGjUiyKWeJ5A1cKGPT2czhH4Kx5nQq7gxfD1BfTBVoDDdBUymym5FHgfuu",
  "key29": "4yuQfjEfCD9d9aagZgAYBgp7bjDUmRqkR51ZJvtdTj8PS8g4kFN8J2QhpKy72zMRcTZkjyPfvhRFWxRUry9rHnmq"
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
