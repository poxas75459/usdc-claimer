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
    "21vJ7amoRyDAWPpYDhy9X1BBZBoAHVncjevjKjCU9TwRZmU9YE84E5eR9V5MYA1XKAeNVmr6N76RtphMHaXb8pc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHyTDU8GjwwDQy4VpMGqQUXpBDSqpi23Ezt7o4rcAGWVQPoavmTNZh3Gi7YWWKe5ZpeyreZgnuYYNroDLJH2Qt1",
  "key1": "3D2rYSHYaCGxY4evBhG9tLsKtSLSmAH9viTJqqRDfp5DRyS85EkW8kNN8LYWUWPYvgxi9thYS5Md8Nj64srkni7V",
  "key2": "4dmWLgEb3nm67QPm6Rrh5vmfwErTBkuL1S64eZPxwVQmWKP28g14TUZHK39Z16nBr9gwdk9Dct9r943XNjc7ErhQ",
  "key3": "24VCdgE82q9oiFmckAJsD36LoJhGurSd5UYEPBQYkM2kHdA73HTjYsKTJVXaum3yrUvh37ocShPMs4xKayqViWd4",
  "key4": "2PspVWxZLFsNXqrHeciadxGK299v6C5m84sjZ1htuDPgqV1jvBV3j4UDpPFMEcjQP1b77uZFzC2sDSTnJe6nWMLo",
  "key5": "31h1KscF7F2rcpVeHdGwZ6pXU95XZcmuiQ7dBQLAg4qjpk6h1e2mHgz5KHKTkuRwyKKb68paiTRd6qiee52LGf1j",
  "key6": "667fT2VDRY8JnqeBsGmbfoE4toUJgC173BRDiynhfTBKuDUJyFoYSHAvwiLaQqD6tQcuYkjyaNfMsn7APWz6WNqB",
  "key7": "4WuKdm2FJryzy9Bi2FBx8qFKwXQ9hbGPyE2RqhubDAseFH5JhMh2QJpWpxostRcrjDfrmNpD5forjLHMHyNiLZwq",
  "key8": "XvHcNzJpoKNsjXPwKUU5EognMA5ZgPGrCAv9uyHZmpFwbDmMsHccMLMpUbFQMkiPmzEutRJV2McGXRUEKw1eaDM",
  "key9": "5SYbLDKsUNS8ScoVja1U7nzvwamg5ZLJmN4nvRy4skzBLQT3pjFQJzbcFkY7dXEsvpA3btXZ1LuaSk8zXQTHsDSw",
  "key10": "27nspAR7GXM87z7WcUZqyrB5ARbuAXeVP1gP7dAvHrodtJWQje5XdJRaeUSprwP395MQQHoFWJr9ndtLBKk36Vfb",
  "key11": "62KVvhaxKfFuS1U9WLsS3trSbiHRATcNCqiYU3HQoMCXPp6bhRFTqzp6XBj9S5UfKh58e9vs5upBc2tHrFTK4z5i",
  "key12": "va18TwxtiSCP9Hy4S15gkEEcLwdqGDxZ2WkuwV9RAxXkymcepeUrzML7bkBgN2jUuruGaPrtgstXAm88EGEbfi3",
  "key13": "5crsW1ge3L44gUu5SJKnnHKaPKTj4J8fW1w2ZkphfYNaFjJJJcLN836yJeQskF2UCPRAYdYJ8QrKayiuoxCgj8Lc",
  "key14": "4cFLMpFzaaLDhu3kaYCsN8rqTQ6U1WiQg2dKc27FkSvAqpHVse8cQQwPD46FpPhYvLEo4Ks9fXKrJkBY2qy1VFB1",
  "key15": "9oR2c4sMpnX1G2owKAEhmMutmJgiYyE6KiZ8nHnaHf28BCFd6NERo5wuSkDGjev3uf4itfJWvQKHBvMUj5yvWQq",
  "key16": "3XCUWyGJGWvaxuQq6ddMpkQvcSr8i7a8cNSSbg6WMSoQ9wpqNmuaVaTgqT2XL2cDiTVMYkeepkKNVZV5ZhM1ptuX",
  "key17": "3RHBewkyNHNVXBuKKPCPjZRradJwYY3UHtkNmQB59XUu2BKyXiimpRQvFNu5DywoDt7YXWpLtQjkNrqW4QjpiEAd",
  "key18": "4Zd8c5AWfUHeYGPirDwCmJQShPqV8KCeNANdQdqHwfazsr2UGSeqNf13w496hLGXZMgQiCh6U8QTUeUtpXbLS79k",
  "key19": "5AGjJAbLdBUvABY4LSDPKKEDAGYf1qHwsaJo8rtJpmQaqXxKbxnyd7Dv64FfDgUiC6oHnV3rXLyz3DbVkGws9rcn",
  "key20": "2kXudRLvwbwnpM2Rgp8gfdHhEAmy8n1H31kMFce9D4z3jkWFQ1Lm8ojjb5WbLWkgbPUVEnv8pAyY29BYy6xLsyxL",
  "key21": "4TQJvZTReJj2YBPX42Y9GxUQL7jwTVM8FTEqZmEfDPHkpV3HBeVs4VmWxATQpXzdrLjv3n8aUpNp3cqoR1Ki19fD",
  "key22": "5LsgZqWCJ9dtjRDtHjSFEtpdDrtKJ7FU4jbYUpMASCbXQg2mVWsc7cTPUWzyxXaoCjKkaW1qz2MimYcc1crGBxYK",
  "key23": "4wK6CHGRJ7tuokjd7oQWcC6Cx6ZeqADS34jEA57gML7dvBBBqS5JwTGYY6huCt8nc3pJoVo14pZSGZANywmjiNcN",
  "key24": "t1gSLC2oTMknzFqxsy7UazC5tMyWK3poM2B1kryu4YDRV4FYk2CmdRNfAWsxPuFK1h5XziegPwnFZ4KCmKbjifZ",
  "key25": "Mq2ZkfPK6nWqWs6aKfExrARwoirQE964dukDFmMmzeX7K5JHRK7hbzYwKu1jrse6h8DhsihVhPUTizVeQKqtVzX",
  "key26": "4ZQCaA61wzuXt1ZirVBbAUVmTijbqBYudgrtpeUCsJkmPsESVm3ExdrWgCbWPTWiSDmkW5LZLSnruFpqJuiGLDC6",
  "key27": "4BAX67xRJP4FQPAZm2RNoTtFCiUwhe9ySBkhqFg73REFzvXtP62JFngqSesc7pzWMGhmbTLm4Z5yxq3Xracwd8Es",
  "key28": "5kfhDDiaVC3D3c8xu5DyoDfz5bNoNNgrsM4T4rgkmidKLdCkRaUxMMhbJbXkxeSdjdHiKUj3KuFta2E3oBGF48nd",
  "key29": "48Rw7LuGoqSnFbfN4zZxVjoBH1hcpgVadUm9uMUzCbrvBsH2ZhsBXxmhfgJLNU8K1JdudTAyC5yszwUimMaq8pbM",
  "key30": "3iNGEoyLjAhQUsVzU8qdkhdTqQHqAnmRw4HUncLFrkJBqEm1RjzRLuDgBMxBJn7cC9qTWVNinDemmUWYjgbYaqfN",
  "key31": "5X12YdvK9ZcNVfNFys8pggtdHyjfKxvBKwMMCtBrowKvqB7fBP4HJGTHi9bLVS6aEidg8nG9wGpJcUnKpSD9CmKd"
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
