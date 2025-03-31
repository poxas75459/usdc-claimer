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
    "5vxSqwQXJLaPCfN5RSGj6CSkj75viovQxgJ7oFh6TTgiazsgCrTPccV4H2sTUT1KJtJ7kkEa2i1nv4cFfGCgacD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3ERGcbXM2SJUnymJYSAXGGoJUfTBcJhknCRsWknGkBCGmz2bu8ws77hQ7M29Ymbu4wJZxNvx3qZQmfK8i5ESit",
  "key1": "4p9fiKcpSxdu8nLUdYXkcD2YhfiSus7PxLZW2oXMWFagRWZrr5i9Ms4rM5vjbEe9as1WcyzZKXq2vqsV2p4zNJf",
  "key2": "3vC5HZ8A9a1ZggXg6NJ3cUkU7R8k3Nn9DNvYU3nseokp21c5bTbdqSpm4PgK8PZYR1hvZwQNpcmErkNVKcSx3Ng4",
  "key3": "CM7d2ARpq3qoroQhFz1uqWh3ENajaEJAEURSRpGUQYnTJp9xADoXuKs77ZbrVhLMKzJqaQvLdNT4PqTJ1XfuuD2",
  "key4": "3Q31HAYuA8s1s7BQXbn1n2hTMdMMYRF4i5eW5U8FW4TRWPJ29UkrVKFsrzEGD3k6eVHpcTQFipRn5BW7Fbr59J62",
  "key5": "3vZC2xeUienvqQdpRGCFAeUHQ7fBVxgnQpyRmjwSpigLAtegoHEU7M4E5wj4ibY6p8LUAdvTcM1c5XTwYBxgxmfn",
  "key6": "14rRSXu4xaJDXt4doyASU78n8uWQuqJPTs72ffqiC7jGHvKc84QJ897U6p4Df3Xc74wFMdBamG43etcpUVJqVY8",
  "key7": "46wpGubPn1aoiaaek9bJD6NsgLybTCPP1VzPUK7xRKHCvBBCMYnyq3VmMv3nDAcxQ25c6ad6RdppEuChzk5qofaj",
  "key8": "2Yv88GK1WnuGw838hi7hQmrPGCkhXGnYMe8SUgvDrNzf5GoQFVYPrdSdVAxTFtrqpx2FNJXjGHY52JUKtcjXNMxL",
  "key9": "5s4J1YW6LNsW4LarNKkZBrDFWNEPytnm5kYDVVmXiZjTfjwigjPGHyqAzuGMKtLDyxJU8nXt1wa2KUV69W3YTSng",
  "key10": "5gcULjwe2jDnuKtsfQEGjk5fdzyb3btvqL2EsMxBjy8L6BkyRp66EF6mgVMxHMNnDaiTdGUXUhfUWhn5m7w2cb1R",
  "key11": "mogeWdPV2YXf2mjMPYQCDazmQyg9fcJzcCNmWycasMYpvd7ejSURdz8GPtSytdTRLW1ra34134wUs2NVNXpKfis",
  "key12": "5PYt8BoNCw6VfKB8uTuWYSyv8gFA2ZswFLLZddjPVhYGZGovYWEjA9FWVUKvne49ErZQUiGKwgbBSu4QdZBqpdPG",
  "key13": "D3j6rmEcfwQ9FqB9ZhQJz5QaGsy1dy1ubZJqhDL1epRvUZSzMZjkuMrNeStaC9pBvAtG3rzgiYB2cwYZQXLTt7p",
  "key14": "xprcEEy3ZmA1pR9GQrCRwxpzdwvKPyxrv3cAjjJXSbbT6FaWzTHyPQJpPzAp9f6zkhXXTEFP9MjHGBZ645TRyM9",
  "key15": "ae6Zods3oMWttMXSHEe1oaw1RAjehpSwghPkUytVDXx77KVEGawnHnQTnAx6gGBkQVn7BSqfTvsMVC5jzEWhrZa",
  "key16": "Y3crVJ91puY3vxtDYa3R2o6qe9AzNPdVokMZb3oHCpXAZgaUb1K8XwAg5363vqyQg882iNWVzgD1mkjPpd2HGaL",
  "key17": "4ZqYqtQvjWvDxiswKVf1N9JkBGU7eiKfabvxYZL3rUAXsg577s3kcnVaEU73aDUDY9XkmVcGetSzVcoEnoMkbARJ",
  "key18": "2v9ZXnteW3NQZQUD3dgBYKUtAPt5c8efuarxy6Fv4MbTWwShxqQxb1TkvwF34HoNntVJedpfanryKSYg1iCXSLmx",
  "key19": "2E7hXn12DnE29JrwjdDqaBnT67ksKS6dBFYnScgHruCAScMgykLHHx3ECWcxtgXUNYCFBXQjHWgfemLVaKmUa7wh",
  "key20": "2VKNB7mFsVQZ9wmyWSgJd5aNMW6z5qHMGGMhMeHz15FF6aERMAJgxrvLgeCiKnWEoX5kjoQcgYMeBVr8QSw5TSCy",
  "key21": "5BemRF5hzPazithaYAS4nYpcu4MozUBcVJaWwYN4PD5ZMLkEo5YRAEqjrpcq8ac9EASwPzGucR3ZeDqB9BvPYbbf",
  "key22": "2Eg7YCzyzH9VLHZZTT6xNyhP1FgTNHSPHJhFjEF1CZfTXZSn8nB1FzuHGJ1NoXP3VWUzHHtxGqo3LPr8aSEqqMd3",
  "key23": "2whVJPx3AFffuNGyV94K8wykRrnTpaK8hbzCAG6griQygmmusXkHa69jxLdEu6CxD3KWbxoVY4dYqjdqRXgzEHhf",
  "key24": "2hkiy28APuhJSfdBistegjPQk7dVZ9Dd44twpTMXHmmLvX7FYTJ72ZF7tugNScS9RrUxXp5U7aNnVe7vVU25uXx2",
  "key25": "5XU2kAYjPgfNq8kzmdq4YUFYRSiCde7YgjoTKTSzzcf6EgrrxWs2zoWppqjkNY7CWmy9ArcEriQ4frXZ3ZqMATD6",
  "key26": "E6EpVSjGjTzhSFiJj3itemaCVma431JndaK53oxEG6nbaivTgfEprsbzGZe4UvLP919kZ5tM3o1dWFaYBhcdNXC",
  "key27": "4jJhA5MtZTAt8fTsBd4nTBHgZQubcTQvpHsq6v1LZjuZTKzxYDapsqkGwZpfZRooyQwCPthjDGrUnGeV25m9249W",
  "key28": "2f8kDpZN3JiLaMvjG4w2fCUp3ZZ5UFo3SSPNtPaof8xwpEqJHCtZcN87QSVwTi8WjcUgZ43SnDVBpSEiZ5ZVi4gb",
  "key29": "duuqKgDmxZKzA8WaqBd9wJud5yNVxrzcznCPNzqAKE657fHQpxLjA6ibaS5MixdyzSaaBMmSmZo7XLV2j8qwy8P",
  "key30": "ycfLD9JMaUUbeXfYXPTfPTXWtjFwMBa4fYcwq3R7DokrRoURD1KNSJ52owjZtvSRZL6tEsApsc1ALMqbZubVFGf",
  "key31": "dAaV5s2HmMQ6auBc9MzxBTSj22suYEf2SdqgPLMraxtPdHPa6S1CBG2PygfR6Y9p9oT7oKWdV9N8dv6Xd8VCztS",
  "key32": "53w9m8tpzdnvb2z7BQ6cWcCLdi5EXwxPXDSBaZYJENczmj8u5Uxu3mMKpH88o7exfqbtvM2GrM86PxSjG9AahSjb",
  "key33": "4uGYTuxD7tU2hoRvrgY3AuGxecLByK6iJMLY59vxb3a9RgycCDXpgLfYgFprq981dVZSamZmHQHmdevQQD6bNd7d",
  "key34": "4t3KwgMPTuK6dea7hUeyz8EhQGVokFj6T5hheMtCpd4fK7FbG2PsWuMUPFHsbBzxbZRUisSC7XudUip8ZWqCYVsY",
  "key35": "5dw8VaEqJJxgZVFrpQLkerhVT1nnL1s8XSkfMmJYciTAZg9vtJRMqT8cyesjLpkBmXzHNVVm6f9cxV896abT47SK"
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
