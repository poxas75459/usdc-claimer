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
    "4nxEaYr3tEKPfey6jjmBAMGdHFZLfQkt9m7WVeLcnFFz3x7PRLU1Nrqe74uZipZoSVH1czoxQbMayqqPgaHN8shb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ungob5Fi1GEnAY2gQ1Ngxfa5JV9dPnsToZCmqp8WYJ9yErsceh5RWHj5qk5NAVzaTxVRyejgUBegNHjeBW4Cein",
  "key1": "kuFokZNwMPRoCGYc4m6EUBsDTHHY9UpkfTs9cjBgXeLhJMBXkJ4PMRvGX7zTpBJjnrPeNgo4NDjaEES3QkyFtJ4",
  "key2": "SqsyCSehP5TFcLg4m5GvsSTUKrXXJGk2hEpNSguazty2rZs4RDME8WqLAhhHF1QYHikJ7FZLuTJFnTsZc2CUyZJ",
  "key3": "wPgwBkebJxbgzfkfqKgieScAtjJdMJ9J2LpMd6TJ5xAfMWVkoaMdh5LX44VjNVPdC5d9A7A4E6Zhf6ApjL8DtfT",
  "key4": "5vE8ppMcEgk6yoxNiJmQ9CnheNYHvma1mvizyK7WERibHa4DvcHyNMc12izH4iXNqCGofHaDKEfmuNWZCudKuuDV",
  "key5": "3EcohG9tf32p3UuodF7otPG9dkXrEL4yNrQtEGQDvygyKGamjmiZ6UAqja4Sa4UvdR1woHUdJWNcWeDLu3TT5q35",
  "key6": "3MbVgRjdDeEB8kw3PvptQNqjuJPbUW6m9A9joMUg3ErC9MMvKftQNbvjUN4nmRNnqjEQsAboGJ4ve9KyHMHg8pf",
  "key7": "2wqZJdSfQoyaJ8ShDV5wkW8zkcug7Hiv58ehgmYr4ZFA7NadSCtqLADhXTgozycGNca5KKRsADKo19XAcLNQfXRt",
  "key8": "5sC88YMP249nJTXesojJFrzSTBvXG9pkjYjxV8NssteRQJE5GA8bXVAWPkttabEg89XuGhyJFrz8UzLc97XQimWn",
  "key9": "46PjETTBLAi7N4C92uVphneWpnJ2wCCjQhBx9aWotFLGyo7GPqDu1hCuCSWDbMyTxALPM6FccYLncTiPWXoT1B8v",
  "key10": "2PHj4qcyyGNLNQwr4Z8NyqfDUpyQsEeRuggcY4XJzLonqKXon9NgVDh3HcJX9TEJsKu715imymMmtt8TewTgo9Yn",
  "key11": "54jmRnoiPkQgVFvQdj9QJt93tv6KwRhDjbDZVzVonmR5XciAttV8UGfFsbupthVpDpZUD6soD3bGUUY7QxX7GnZb",
  "key12": "5JES5siG2HKJL237bd3SrXzAbcoX8dm47WRELhxJovJx8Xm45Bnt1t5tP4wbGtW1jJdrqdpH9piG6iNNWQ4Bxo5T",
  "key13": "3G9UmHpfjyxxb6qfE5BjNXStsvKgBj8d2EAuPFfWuqtsy27Vcr7rszbfsn1axk8mT7cxJdxUJ6V7cvXZHSeG21JK",
  "key14": "3kS7MwebcPiy5JGgeXMUAGj47k2ws8UHhna3jK1j1NmViZStZ8YmcmDsG8CyTMnRKwphmm7tj3uSkcRyebALpRPK",
  "key15": "3kqWduB1BvuweZcKQ6Hm486EiWgJzpdcsBTvaL3JLbKmBALhbem7UXTFbtt4d1qqaTb5VDMpq1q51rcMtKVkA7Gq",
  "key16": "5Kvpuiz7TSyRLqXvW97q9dTrchoaFUVurwP7K4XwzxzY7yATweEGpPQT3yHoHPQjmw8qCGcxrVnXR8We6xfRvd1M",
  "key17": "2jx3nzkwv2jJYEeAhPsExsf99VxzKDdHpPRArLCionNG4u5abewnoxRtrvwJC2k51TT4J8JoJ5zfTtUYi9rqtmyp",
  "key18": "4UJBvufYExXpU1B1ZcYyrC2q53aU9agaV8obTd9YBQasgLQj9WVENGrA5Nj4sBUxuULyuKPmhV9FigKbMu3Rmkzw",
  "key19": "GVY8rc8ytPGgVzn6N3zJQeM5VGxdPyWX1uaHkCXWyjwPsMEZuTVpx9XG1EEbBo4pZGnVp9QAjy1XJaw4dXxt1AJ",
  "key20": "6aTKwZPuypRBFrd3HUoLsXSzbjWdQ4dk75cudzaeB91P8PeYh9oPgk4i8v7wqYspM4rzSgMws5FeGSq6Lwbx3AJ",
  "key21": "2pzLhGEFPG4gk8qrgXjgZjmDBRJtvEQNwTfPPq2v3svEDbbkCJwq65SSrCJGYvETHSMk47kQP2dX4tYHutE6LqJo",
  "key22": "3H96a5Vu9pfty6QmQrg7H98s7FuzQDfs5hMmz9Qcmra3Pn1jmuXHqpCwGdHxgTVnbzX8X2SgdBvTX3psd6dot3uc",
  "key23": "4uGzkzhAyXi25VgpZv54qmC61BebN6J4tpEubLrk3hwLmbCxrPzXThuyarSoRW1kPprzDcJ1pbSn52rR8jM2vMfQ",
  "key24": "4ehBrYEJAtKzqGvXiKo7VfCFFUrkrNMgdPKZf68PxXXDH9NnxFbK6Sb8fwjZWWdug31DRVkZBTU8js43bHykZ7bL"
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
