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
    "4C831cV9A6jQ5UoSFjtfkrbNnWYyCidU7SyyZQC9j3FkRkEPjwcDs8Wu1nARPafqS4PvDY2jf24zvKrJQCaWNo8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBozrLgrJLmD3mysi1FGczNPDZMvCUfji7SBtEJTGQnFiZCVuBDbVhnf2ipJdg5Qg5ka59wt7yMPat37F1KscHb",
  "key1": "28vDxDh1Xy7jNhmrhjTnQpEiD5abzZ5LFEDZ8y8aPLbJ26LNqD3uDhvTnNAevECJUjy6dedfomDnUABrcaSpKQEw",
  "key2": "4QjevUr3egd9w88u9sc9XpMmZTyjoE8Hd8awWkorVymwZGQBMG6Ke9LCjESPU48RuLeG4F51Gyc8MncHfEJaZFyv",
  "key3": "biADypbPjnjAdDrYChqJwByL5NdC9EGNmFkYXJs8MDngAhSFfxD4A7mLYryWiTABVot3jFg379MJZoqLoJ5544h",
  "key4": "2K8dQdH5PmYZR8oUjQeWsRaMx34wz6LLwqn7tphQRFJ1wHDFQ4iGFdKfuVoDyCQVPispNjQD53NxbqDUiwLJfghA",
  "key5": "29jvpDnofRXRc7cyo692CfcS4UEcMpacV68WJtWhpTuWumfKdtUrqmbhr1tXrc4A4maWwwbCzkTZkVTMVvuehPcV",
  "key6": "w7dx9Bsc28wPbc9SLWpX3LUJ7f74HccGQk3rGswVHL19NpDtxaegm7KDhXN3paWVkuJNXcfxmM5Pxew3GvUH4Yx",
  "key7": "e3KSk4mvgHuG4xyQJny8Yek6bT8TDWBShCR7n1Epyb6t4Z9uCor1iNmnCyyLMH2hbpvAs1fdXCNFQSN2CcctoZ1",
  "key8": "4bqLNNURBzjWvdVszcJSiYqJb1EB2fp8PLx9rt7WakJGU8dHanGmUora65dS6DUXGRaUuVhhuf4FpqHDSkTPU2rf",
  "key9": "tVxLELV1tLrhrQXF9iEC8WUxVLgVpjMjKhiQW7qU1bMJk7sfv7rpYgF8pYsis87C5mWBhSHJHVU8AksWXUWxiCe",
  "key10": "25Ach3cGUNBFii1udsmxASoahkutFX2tZUhjZsxYkSbmWBfNZ9DTzWvwcfHDAxAkHAN1kWtUDGsyqw7yncZG3TxR",
  "key11": "4Pt3aNXijHqjssHUQFfbhcZHrBP15HegoW1K8848eB6PnsNhm8q9bzyP1x7SucwSYM6JcZhhcqMwpvQixtuqgFCY",
  "key12": "2hDoD2KyUbuT89FuipC7cYdzfzvrRuRobJqs8ZcygJ6oVrWsQQDGQmgAWDdaHudDsDibN141N647r9fomtbxiB8X",
  "key13": "3ssgoRfJDPjsvvRXn6uSmt8vKrkD5HhTDHpP7hiRazoR3HKQTQjBACGphCLEX3uxWZYbp4jLCxzgHRvwx2kwdCm1",
  "key14": "5vHbwnfCaF4uqd79C1m2cmksRFb7qk7nRR3skBBRrnyR5CEHDqBf3iTXvdA1zgW5FpLV9wYrJwc7wjNfX2U8uYh6",
  "key15": "3Mhz8zLnQgtibXC59MB7VG9QGacgRG22jcEQ2k6VMY2KNxs1zyUcMXgsxYP3druWtumNmagUS1SZ6cFtktLJ3gvx",
  "key16": "2oQQuVgcEbtUvbj1pLexaC9okeTmXvoanz8qWSbjnpuu6dEjLyYb2bAk96dX6H1EYGHxZ7YLCiPUFrS6iQoK66k5",
  "key17": "2TwCzaNDCFVuNArVuoXEbT1ma3nJzorxmEdR4jzggJtzsi7XZaijr9Yhss1jYQpgcyFctvrDyzWk8eDYMWL2fH5X",
  "key18": "4yER2yh8mFUJx6sA48PAAc5oKZiX4zHVrx51nExtHZKRJyF7VuWNRe456KWPakQWNc9mvZKB41ZCQHbg3W9tw4Lg",
  "key19": "4KP3tFyriTC7dKoJ2KmtRp4BYio6Nq1hosSjZhwmQJiejgUfwxsGVj4m5N69zcmGHHvuszuSvhaq9csnnSa2PioC",
  "key20": "JiwE6L1SBQRHWRfrpAcZcU9RnPX4ceNnR9GWma17sYiDtNK4n4xYi2rszYmXMxryxeYSethEHdhLeAM3dNqfu6j",
  "key21": "PfX3VJWSW7dcn6iJZJqvXJHvxTY6MN8CrqFVy9He4wHMVScS95vHp7ZJkjdrquboWUqpvdLbNygoNpuSoqZKtR2",
  "key22": "FiMtAG552Ks1gmTGo3Gk1qjcgEdnzYnfS49YBmXn4cKQuq3xi3hUnnkuzroVAXVAnNpfm32kEd7eqNwJwV5yrYp",
  "key23": "5geG1uD6giaWjZQ5r5FQQRaDvP3SNA3oeKptNxP14geZpKThMGJj8yFCsdfH1viAkZfqQ27NndESHhoN4jLiKTed",
  "key24": "2Kg3UcPnAqGfUexx8feS9x2EqBU5JSbcFCa1m7MDnj74ZT9YTuLRxxaLcsMdY4E3Z9iBHBBJ2qpVfQZw6Wa3pUE",
  "key25": "Wm9j5Sev1S9d7jTesBZbPbRHmnj7DAovpGngzpZt4ybEwNBdb7QPx9VYsvpdByDj8RYwdWwy7qNhbH5c7gNcLHT",
  "key26": "5GuR7jPmVtsT9EDjrVuJCMwqeydBkx2DTG3vKN2wzMhMono8Av5GQknF3ywf5F2dNvGsySKvxMPsdqrKoF9H32Bp"
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
