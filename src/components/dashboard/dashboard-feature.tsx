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
    "3UYiwQfgtvpu971WCGULqywpqPcwxuDKBdwY16gMp9XaeKYwwHqEvxCvYcmtNjLN9h8XGD4SEn85hFFpsPNhJivk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36vXzPUFoo6wJMhArJVbPzeBF5CENxwuo4aaGCp9snNVhUQzhbxWewjksfEMa3ZxRHuTCzwRwKx5KKcLRJerY46k",
  "key1": "45sZx7MhN6cw1XfJYb6fnQ5vUB3xHFRnbzFKSyegzAAwi8VvvH2WWrf9YbCdBZJaTnjFQyMUfK5cd4XdFjAheR7E",
  "key2": "7uZiGscCj7k35wt8x6APzSX7jP4T6QoS3VeaALB7BEdWaRGyF1aTuCqJvMqCXLdAmVWiNu8ufoMe471J42kPH93",
  "key3": "2mNm4bqYnf3kc9LWpNZCBwYUY6rAFvmPBkzKYGkamxHoWJ49vmBEu6VmpkdEsQi3sScN7x4FTDWuqiMpHSp2F3Zp",
  "key4": "3CHEgAN8itSJK4RUoRG5SeB69LTBPzZWeRgb7Xth6JGWt3jAgGNeLYMcceKf8dXpYpcXkfBZfzKPAhrHdnFHD38E",
  "key5": "Z5mqBJzuKCnFoqAZef5FxzC6y87k5xsgLrowY7bY2XgwUP9emKW92QSLgQQXvYJ5MVkT3vPSM1CRz6x9y2mudch",
  "key6": "H4jgF71Px9W2yXuGLXPE7icQUPyeQNudywyN4s4KxVEsW2nXQWEtJo7KGAj2M6j4nQ5UqxoZcuS22LDpEZtVRYB",
  "key7": "4ea5unnopisqpYM2LhxH69jTUxm4tsMcisNmvrxgmodq36zS6degyA4vXFKLtD8LwvXrMPXk7WqLEeNwvAcVUGAx",
  "key8": "3c318hhsARN13FKvX1A4NUVhxVgRC3NRVMcyYAXZNinU6mX6rH8T17ym4vbJS9B9emViXHzGxKJgUmDjnHZKVSxP",
  "key9": "5EHUnYRM87z2knbcboPjZSoTzuB2tYhtBiwyVHgtbDYHwgrQ1MBTyyYt2NKkuB2F52X39yNewdugoGEUCQMyh7W4",
  "key10": "5XAVRGfGauWajuBVC4NAbVsEQ3WREobuA3QPzvZ4J6vomR3RtXeHBYFLF1tEK8pFduziP7Wxbf1EEWeavPZ1weSr",
  "key11": "2agMAGsi1M46ecJ3qXGWmjNWY6N91XzmKHgGjabFSW8nDywN8Y3LSBPScN24yfKg8bm7cmeu4dG3pPc7Qviim2bz",
  "key12": "2pD4QnsYdm4bf8jJCdmc3Mnj6t8QdyZZrfjX19F6vtvFKf3a9mkU4qugEKmsezioBeNUdNVYaTuTd3eaCYvtncMA",
  "key13": "23kdHdb8wSdmnsiZtSkiLxUufUWkvUYemhTh1j97YunhQC7r8PgiNtcAzASefcPYMwwh4aTKLPEVUbrfdTRj6pAq",
  "key14": "3ZsvPPGCAx1QntMTi1TVV49ar4LKq5k8A68ksAeWmSaCG649rFUovLYt5EFPNY5tYQnEUef38ohLfHttrQRqPYgc",
  "key15": "3LM3ovAiSLavbG7rff1fP38RpuWjER8Dg5uG93D6JTrJFaKqgSCZXUuWg5HTg6MdrbyayxxXajisp8sWVwp39dgw",
  "key16": "5XPKTZ1BAf9xdeLM7wPMBWfFEoe1uPs9gKk6vRswzf4NKxxhDTQUYt1ed5McyypjDVv9w7hz8opzzRtDEeuHvbWT",
  "key17": "m6jDWdcbZ5XsCKaKmCE5FTGLT36CyzvbbaTsmaxNn3fncc8iVwwGKJLSqYVUwa79jzaeorEKz5ZahTJMA8bewS5",
  "key18": "5sHphYNJ5FSxscJfLfa1mt88YkSHC3FCkxDa5LKw1mb3TP45N2hCCE6a5ZNPpeoJcEyQKhLvGCJJ781kKWJf7Pxe",
  "key19": "4rXsMsE6EtrA6CLACt6KKWZzoUCYhnQM16gpEak8GA1hc6Teh5168yPk11gUr6U2v9PhfjhWFRfcAYEWFZ3GA7Wb",
  "key20": "4TZ45XqEuMjAZYvVMHUpF3YGHKYk5D6AZNgBTSbppDPmP6hMazjk2jgcfa4tRH7KiXVYyvsW1rVPnF2oYhzaJT8j",
  "key21": "4ZdgCxhYuYcGRDjYGSJBN8oP5P2mQTrufGojt7GZNJoc95wHGdhDBEMDHGNYRhAHQEHqrMCoY9DzxyghrHDnXeY1",
  "key22": "2cQjvLTPzi34tsBpda4QS5m1s4RhEYZCU5i2TmAfHHUqjByfuAougBcYGDpDjsjJJFeoYGqXcakMakwBADh61Sj6",
  "key23": "2XuapmWv4Rz4H1nAocfXbU5uDbXxCLBxJLfM4jBc3xnnw8RvRpXxQCjp4iLiLCE3G5jtgFqjGmJRrzg8Wz6p4Xmn",
  "key24": "5pcm5fuH6TyQCEayrBC94tT71zed4LPn51ohAzireLmjz7u2MRJBYaSmzVoxpS9Jo75stY1StYJiRTQeQ9FKqoe3",
  "key25": "5g8uN3YgjM3hWhF1Pm9R2YzFJYMiMSJNo5Yajs4f42qC8xxnqa9F4mjTN5Z4hY97rzu2nfgQPdHxBVLZj5MWQzye",
  "key26": "5oACo8A9FtEW6RCjKdhmiGBVYQefb5vAYYwRyDUnYof7Ztug1ysarXWU6cCsyYrgy533jCxtybGZhcK9ZYzHcBoZ",
  "key27": "3dHKMv1xomg4seuYMPAKNYBsuQm6XsK4JBdgNZDB1hxfQh8ELskAtvf3hfGePs3zt5e8rs9aknL4HPCDUCGqvczP",
  "key28": "oyV4qFbreDJtrUuCNuirtFQ64tpovL5ipdQDEh1qSmRXCRzavThHJ7WuAENjTH2wGipzy9RCN7LDfSJpny5TJQ7",
  "key29": "4AsyNLpeQnxMWU9gDo84SF6hrZb19nLBiqEeHFyjAKfYLM4ttfeFzTBBjm18fqoJf19TZwWxd9TZotNSBqkqF5JQ"
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
