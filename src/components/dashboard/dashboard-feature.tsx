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
    "2ydeRG7rfzJ7DCWw52EqGz7KiQSXmBsvC3HgiN2eJ5LHGHFS9wtodwyEWcy9pFA1MhzqxtZcX2nGcquMQyekrrbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTGyPZ5PQNcFue8wgQdZHzC3kdkg52njuuvamdo64yf6XQmxBr7DYkobMN36oPm4tGjM3kJv2aGZC2USMuhxG2S",
  "key1": "PmsSg7zo74mrKnQ8rphCo3hacexbfc8mYUXeUkvRpW3i57t2v7FnUc4g9bcgVnCGTkw1HWQySvBmUpvphGjicL1",
  "key2": "2SgJD1FSoGq2RmBK123t6oMrhVpsq8CSs841qup1EeuGtKZL8QzhsW1odBCVdt5cXnNsnb4mmccWvnk9f8WKnMFX",
  "key3": "57wbRSmdzEa4Kev6oi7XYUrxvuosRCaqqjsbXysva8QFSjrbYfHJ7EAXhnJwGfYY4HnGXvyhBY6WfriEk6MjW3dZ",
  "key4": "5d6b1UjSTrN5fLmfL744wogEDSBDUzgUzVSbLfZXLnVA2xkqQyVstDsmWZvB8vYebsw8YxzYGXBJi1s5sEeijnP3",
  "key5": "3Rmoo4FRfPs2yNGNLv9trnB3hfXD9FGf3gh91FwGEqVyM2XstX4NUZn8qquQXrrmmcr6PGaET1wmcZQgNYoMzrGm",
  "key6": "2SiKA4BPyoRbvr66dfstFfk1LtrPA56xfrFu2krJmBwAhpBCuQxyps5wyJtr3Ysr4bFCnMCMz1ZirvhgEh9DtKXn",
  "key7": "5TtPZ5kxThodeEy6JphUWvYxHwRZqVbByabjzHULABjZiq7ZQvVRRD9gkXbbf7pKWw6n8wbc8KcCBFzyKVLNNCUK",
  "key8": "2TqR85v5sru9UGDytdq5Hm5EqqNXRy1MLDw1ywX5aAMEzXSPbMMFjzdGHQLf6PucuTdUBb1dBjuVYkmKZStGXwgM",
  "key9": "3rtXwzSsxEQ4dY5oSCW1Xt2P6SjAZ1tUXeAixXfcA7Vx7M8Kkr3mZdJ2ob8avmx56EGqs1TSVfqZBVR4kHBx8vmP",
  "key10": "bRyY3HGLcQixC6J22uA7MwN9DrpGGS7u2PXtP9Xmn2UTCSbT7VdZdSi17Nk8hh3AJsCbBjVhh6mAtMUeo8R6sy3",
  "key11": "4RVCPYbeZZP3e5LmhYdsE55yhzrnU8T4k91aQkVHozxzoBT2zyKzy1W3kp3TDaCNMEL6seSH3L9F5JjkHX7j3Tz",
  "key12": "5uniwumpFj1dLm93Hv138hYJMDSUZ9kobCafFGvMgMKgpKtT6kRDZFLwXRwgrXLC8xB7MppHd4hxea298gtwNehh",
  "key13": "3geTASvZBqRo2CRgpu6Y6N4U8VhjriFCZAHqyGPeENH6ihFrdSrXHhqAErV9eNMaBrszohtfFqLkzNbJ19SdSG3e",
  "key14": "4iTSq58NRUgLyNZAYockByd27vmgsUTNm9dqeGjEz4EVut9PLb1adcUjdJxbMYkHZ6C5xiC38Pyez34duAaguzJW",
  "key15": "35igWD5aKhKJrYLnrU1FiiS5D3ryyhk793SUBKnd37TYNnrZWnXN2NTnvNFVtkTU8EBmdiRgaFVYKfK5BK8yGDa",
  "key16": "3NzWjBXGHoQEn7iT4GaT9PrtoJxmrNtwcHrURt1gLsvfhJPeAwkoYzxAgvQXETxxPjvXEaqRJKdKqQZ5b4sjfKFQ",
  "key17": "672ob2UCXGh8LqN7rAaX8qLFUXsMQoe63bTL4Uup6chAa3Q9gEa7wFZ7iceAcZXjFm7vS88uVFh2hwRiy5qCWW3M",
  "key18": "5TeJ9ECHzGr4uHw5eXnbDe3FKd4iKSjsC4FgSB6DoRTuWEn3q6JqEdsfM7SUcp5fizGhC6DnJmZ6W7ZMpfyvqzLj",
  "key19": "29GLBpvAYcMFazikFG15xh4FDC6FnYQRASRmLk4jTRaJihvLgDACeNEGy1Q38xUkxg8vV4vBm2Y6dh4FWqvsU5Y5",
  "key20": "5yUSwPetRVbRYJxdzd5J81W6nPf4FF1k8FQcFmCcmktwrnts79Mpz8TgGrPM4eutWqTyjbwz1UUte2QKrvB6DcZR",
  "key21": "4863nyrdTC5Tp8mhYAMz4Vk8dB8W17WfijwYDiUL5u2gTfefapRXbwBQ5QeK7LtHp915H8xWjrzAtiGBFZySoC6q",
  "key22": "4ovBCGSEbYob98ufbLdxsKEiNi3MmeCM2QCE4KtwAFDru1sYN7c2Dtg5QWUStN9kySbASNFmnQfZZVkmHpduDk3s",
  "key23": "b2V79VBLF9NxfXaYqy81dCtngzdhZN15Qwohf34r4QstCm3pqUs8QEfYmJJGh8BP5jj5iL5P3WGPtmcwtVNSby4",
  "key24": "2UgkWbPfBZV136t5BBNkPmuhFnhxkLcJkav8xpP83VFFQUagNxbY24yTxs1QZiZ8JBtR2CVdV5C7uZuhLcNqpvgK"
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
