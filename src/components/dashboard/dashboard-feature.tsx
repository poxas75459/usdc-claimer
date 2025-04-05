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
    "3ESDMDRLvso9yr7wsGjJMZGMvqXJShXYVKeQw18PhbbACpJjkv49BgeFNhECSH7qFH85XHboZdvmB5H9okbgukV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26aa5AwuiovG3W34F6FxNaqTx9czRAa9cVZUw3xo9enUf8BFd5Wuw1vrqd3nmC76LPhS8uizvgW75ZCWbLqgsm17",
  "key1": "5JTwD3crJgQNWaJJKXBtttTa3A7KyN3EuPGVdAr7eVnbHFwZZG1WNaYJHCFNzzTrRJ8v4hKBJnS2yGuuHGYkELNn",
  "key2": "2UPnLAtPwSPm5ntbksSSGqwBzDLSMVAXuuhwtCUWetGDhRQB3fDj8uLMGEoPFM3DEYAGpfS86LwyvgmMXHLPgDCa",
  "key3": "2JdmdHoYMoxb3Cqj6JFojRo8osHN7yoa892zDHe8K1HVchpELtHxa9zuSPag9VsxS7nLNrFkuhEJ398FiKpw4cWs",
  "key4": "35RdtvodCCgdVN7pgYRD73CDqMBwp88To9KosCjHpumaufRFhFJkPjSq6vDdtSoMQ7XvybzKQpwTUkW49Rs7DG52",
  "key5": "24YqoQYnNdunXc1aiTVzrDsJcKJnDykVLkoCiyPvjTXS6t5zupgyZwCrD9Z2xd6cgpAH7CNV47gySCAZk9MJkhTc",
  "key6": "5gjFrosCEBbVbyNeqNrS7int9UV1C4kyykL6L5jpHR7oyXVfEoBu6TD1d8TVQ3F7TUJPsV2pAdSE28ZTjALD8uon",
  "key7": "5pPeJHM1CBKBThMQrxdyFnA6tjQwqzr5Yjz626aayU13yHNZxhtdqiHh4DZvhxFYmhWZVzXwG9K76C4vMW5bbFxt",
  "key8": "RDyaxUdnssawFLProyTkSkrubm73KeyAWjxvv3EkwEqENAoVgJEvWxtvcbeRHj3g5DfU4daYUDgbJ4iinXVrqtA",
  "key9": "o3NL4uX5mcJZwKSmHNrf7jnGtRC9ZZTxmSp56GDWn9ZUzvHEWX4hPJgeQo6zjxgm5bhU6h97JRUxU1ScJKEMyGw",
  "key10": "47c7AHqvkfKnZ6SavVF8V3Xf3XnLPSwnGNqHLzSvoFQL9TkjqRXvCJ7DUSL9U4UnLZqv5CS5QVJPMtPunUN86aYL",
  "key11": "5QKjeAznt8zvpZXNRwXBnrAyrq5DviYdHBFHAomrZYBNJpugnnyqLpwXrRu6PkEYHxdtSyWVU5KDwnTmBL2tThvm",
  "key12": "Ket6PMnhXSnbWpveLDbJiEwkN5onr5DQwTLUmM9MKZVuwAGSBnWzbH62pfWg7cqGYZvktACvVGy3Tqheb11SEH6",
  "key13": "4kqGcinPcADA65EMSFnzsKp4EtSNLaRj5qM7gYhBDnxNHGw6uwrM1Rq2mPb6zzg1FCE34R8TabedQMRkqzZ1CgwB",
  "key14": "57BVMroVocK15r7qQcJTcF66c73McjpvN2nhmYMdJZ2ZMEeFi9qcJJDAoF9e4CUDvsu9SjVWmXTJHb6u4KnhhA9v",
  "key15": "22ADNSzSnrY2u6YDCrhuBwHeU9pwgizKxJgwVXL8x5YVkWL2pgxHpDMKtDwaRWmdcfdfvuLzHcY5HSz8LetzARkD",
  "key16": "vHBoEVqZrnMd6vw7cxqwdnNZB7QhjGJx76w5N3PpEbbntuFSjrvEXmSdD7KdTpgHkQ36T2g99LSU1Vg1z5e9xmH",
  "key17": "3s9mFpSku2uUMMZ8pJ1SqJKR2oHPXkyLJtqUYdRNkyEdKcpG8xvns2g7RpnzUbw5rXNTE2ubwLeCHq23gjukzUqA",
  "key18": "Z8NNdQc7FaSxU7K3cW5aoJt8sBBeHVqRtQkqgwuabzpyGhdeSMjDsL8zjLfpG6zwZvqBvJTUEBJYHreSwbTQJ4b",
  "key19": "3MCezH2xmHFy1ksr7jzBXTFpaYvFa5sbZ6Yi5YGjqJStEaf5VYmVycAAGBRbtSMcqPDYjii3WucqNnthsMP5PUh",
  "key20": "425kAdKQzcRWA3QQYHwjX2p3gLyCr9Qyx8ZEuc38vkYKy8ea82D8bmaEm95qeavBskqqZewr2L5w4CD7vwLSW65L",
  "key21": "3nGGp1GYoRirDAvGX5k8KXoBdsqTfHvJr6HLctkroVM7z3SgarQT13bB4Vum6Fuo6Q5NdpnydhCrH4PWaizPgYLe",
  "key22": "44V9RXS5FgKjFwu5rzHKtoj59GQksdaDsLpoZKanXUB5rSFkj6vh4YPDNmLo1MpKnN7RPdnCehafk96rWEAPkY5p",
  "key23": "4SP8RfqXY1EpRZygVgKq67u9an229Bu56YJ9VSnbQJ6UcYExatxag72pD3eymtnRGfHyANrYMceXZzqnGRpykFCe",
  "key24": "2QsbbiTawyQGS5QFKdtPaQWmMaR7G5iWiut7MfzwG1dUqkJ8Gy2zasqzemGTEKTEomCaf3a17rRrXKLocYPaj6jN",
  "key25": "3eQHxBgcJvgETmBkswWmWRiicwBFvNcSpJoEFN8zksU8gNVwJ2WvAuwUNys2W7hKY8FhMiRVb5kw2viWeT3Cj2rH",
  "key26": "3f5AbdC9J9Uypsac9Vnbj5xxbhs7RX8SubutNrypAqW6L3vg5hJewr3uJfKgKpzUExun6jLP5tsswbjgUPD54dYn",
  "key27": "KBDmRW8bywCPvPLq1huw6UiGGJc1UBfzob7SiUAQgCFGXek82DBPE5syTCq8P966F7wnzoYswBPWYRkvaikCBGb"
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
