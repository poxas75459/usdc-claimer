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
    "5a1JSUtHjKKgkxvVBnDeNZe3QoyW3PcCWALwAGtTJxaGK8r4xj6f6XLEKSM3J5e47pctkTiuZydfiUppHW8GWwPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLzP5GT1ZbPURPggYu7XoSuKk7A8nAwnkGACfcqYNDzEf7cZ8kLYfx8Yz3Zyy4L7WC7AeazhK5mJhY236KonnUn",
  "key1": "3G6HTgba4zWNp4bxuW88kedVrfJ9ua5rCDZoLF7k4cJkhbbgiqmQmhPYS4pfQK93hrYaEmYuJww6FoT4CR45FyN6",
  "key2": "3ZKhnCnzWDbEe2KFvo4Zqnx937Y639wThNBRATR6ek6A11iejd86pzaoBDgYJ82LkyrjPGdSUBhPuy5tL3ernyBr",
  "key3": "5xoY31E6nd1pufvD3f6XM9vKUWvGxByp6YJvE4rTQNeXB2VqQhz5crGkD5pbcsu7fULS3HMeJoC8JULTJft94yza",
  "key4": "5GLhmKphPg7RPVcDxwiXxiZzSmCh6rK6NcFtAHBkDxpfGBSmojTbHm5y5S1mEM9d4hQ3St4Nq2WuWwTkMwdoKkov",
  "key5": "fWkmTFHE17SiQZzh8MMJu3nBMbUirhuBGCGYK9PeyadSzy7xB6TdK1zm4cUCx5ChdrTHN4XuAyy1w5k8YbYDDKc",
  "key6": "4GqudxMaobWYCDjsYvqFVZYbFUf99YtpC27hJgyrDD4bdUcxVZ3Se2rWGg17LNXZMCHuYvPo8Gbe9XFoC9Bg45M9",
  "key7": "vqqZK1CGJD46EMWpjUSXod64M31TswRj8sSocNJHW17AbLyPKit3WrFdvsYXq7NoNLZiZ8AXEAjVYc9xLcgo6Sw",
  "key8": "4YpZfyD1FTxQ16aa5fxZFyzL7qYMB53aqXNruBSSNhwUfm8bKm8G7dgoHkV7R5G379nmY5ep9cPG5LqXTxA8pwhf",
  "key9": "1MctBg7QpQ9PDMUnWwKnZoDu5iQumz5r8W9XiiorUjLtyG3hJqLMKpMXAnJnYjsKbxo3aB1PerC5RAStjWjjySm",
  "key10": "5sf44ofcobr8pW4G1PYKXRdTfULYQNgjwXmmhdxBWBeyKMt3LUFgKGywm4ho1GU9BRJdT9Sm9TELz8XwyBwyjhFX",
  "key11": "5KzyecuYveFUizWK9ns593wTycmv1vkfbqiZjCotSo4Lqu9MxGvJqj2GTzaKFgddNz1U24XKe9PEXgjGxYKjrN2H",
  "key12": "2DB7iT2MqhYsSbywKzQLWDwLqnyNuFapQZuaeJnSeXvAdgVfrh2Y3LKHYQfTXJDt8jrxntrJiPmc2Ff4kDqzSDU9",
  "key13": "2u8NbJA3Wbtpwtk38yudyWz5f4eJsSReQHmKKssjE3ppLvRyTto9UtDJuauWX9VRD7GKgQzQC6iiZtgWcFMpmKdJ",
  "key14": "ZLi3fCEpH2RcWHoYQPghNDptR4Z3KFQ7e1Da1gghWo4oNvbixomPqpneaxHuJPydHzpjY27UVC6xDGhq16EarDw",
  "key15": "iXupW1gaWhacuAfi4CTDbrvKXCVfP9zV3cpM2s3MN9Wf9frxdqu7m6ZfseSZyMYNFKzG9kCaBaWJ3bwV9jpJ3hR",
  "key16": "7aJ8ci9dgJetT1LgULVTR9VEvTHEyjf5pzbWyYkJPjWjHyufr67R6364ahgWpiNscf6E9f74ERjHcqeoGhB1kay",
  "key17": "2L2zHMtWAvSS5CXJe51dLc3QATxUBDMJA5hmsZkxfpxf7opVzyjmt7M3Vim1rphQpm6nt4ZMto8kAqmS8MNnVnwQ",
  "key18": "23oV4CsbsxyyBRT9uFtKqEFwE9KcAyFyE8x1gEzLMU7ZkvqbSkw63jwzuykbrbgkm5XKk3TzazmVo852UfQgjJAy",
  "key19": "4zAaFnEmwwsMzzFqtLkwfNw4bnrEFSFiCm7orA2JY5uS3c4kFq9HugcYtb8Z8TZr3QrpoeSAkczwvuhFdKZQuNPo",
  "key20": "vTqR3LLuPhLnyKqbwz6c75RaaXPvuEfFCzZaiRLVz7ZuQkHSi61PPhn6MgzmQ3KMfLCdHRp6kekmL2ofVLCJRSb",
  "key21": "4QeDkJeuAuHQFd1GE4PyNvAKor2qsU8n7pXvsS3fix8wTiq4xGh4ttEfDfUK3EVxPoS7omY5dnyfEL32qVEapNab",
  "key22": "gaZVi48oVmduCrdF7wrjQPP8a2i7CtnxTi7vAt3Wo8xSGXPYMU9L87ew64Qm22qRdQL3cwr9ek1hS11booNpn2z",
  "key23": "3Wu8nTDFCNyGhbnRZ8s5RNC9XqqaPnQtoKFhSDhmwAgAFTWimcXxebTATDuNYDTwWTNjJKkP78oMKRiemhq3Fkss",
  "key24": "5omc9cHArjjbQqyiFCKhxLQZEwz6SNgrntY9sxbL6so2vpS7nVhMfi9WZu3b8jcpYKYJbwXdtC2JjNMLjK5rTg5E",
  "key25": "tQWSDCJzVoBLHcD17VsfANxNVoKiRHsBbTqFU8zCAoyiSV2t1r8gha4kfJak3yCfboq4j1MF7AJJgbmTMg2Exsr",
  "key26": "4UNyZi2qHxhBGfLEa1gQezpz4HYf1aKmV17cqEdxDGL492ETDFTMZqg81sjBbg7i9suGMpE4UCgzqSSyPG4tK6Vi",
  "key27": "3DnNnyZGeyYhgZrsBc6ccFuTfVhJq53FWLv7DrJn4dCk875e35acNsG9nExkL1QatMyfAYrDQ754fBRFpp9UjpV7",
  "key28": "5tS3e6SaKcwbwG1EJZ1CE62GF466T4s2MBfz4eDs7Ct1FW4KKzZRLV5zSZ9T4iaGViSFUjczgkrVYBRGiemTxjiX",
  "key29": "3xRfMTbPjs2kugbpKKV2qh1q7kwQJPkWrQgWty1B98mr53Tm8F9UokY6A6vAF5oWm9rFarP5Ro63azN34xVjdCfq"
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
