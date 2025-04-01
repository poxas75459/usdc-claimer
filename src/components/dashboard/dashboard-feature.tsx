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
    "B9D5MhpVuk7qnr27XpezyV5HeZ4HCX97MJnHhnoGguJjqkmmBSdTjATmRehZZcABN5hufQc3bfsvRbJgHRqNFfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usM9dtCqJSDDjkCfqTbNEy7EUpyibX3PxKuxUfmKZtnc19Mc3m1NW6ECD5AKV37sms8yEb8jWht94z9DKeYSRYX",
  "key1": "36CQ7JwL25cBZgJBwofhU9RXznWgFJuiPgDSEN1BG86fQ4oRzuSiyoaybRKVMAeEnzmd9tm2eDakWz7nbt83gN3t",
  "key2": "64XTaDiMnf1C1TcoYsCdNWX5sqLS6BykxQqQcy9qrLXKeiBoQ2UUS93RnfD9WBvPi4LroXadxY8VXNMNC3DQFuM",
  "key3": "5qUyt4zgYkULrWZWw4woLLHvidoupbbdaFKxQMi2hixetfgD1nDwEGKUvKZPr1NDWu9shjodKVHuFv43k98SjEJf",
  "key4": "v21kak6Uxb6ek3Gg5q7ukv133k5nqmZrktMqjB1vTN9BMtrXjArfah8unK14AsLnVYNkUNSQEPJDYQn5XbeP3pJ",
  "key5": "5bKZ6MUBUEEPq75AU3HmboHs48MARSYam6Uj5jbkS7wjfGpbFyugDJZZMYTDxbZU8LUviQhe2c7hVcAKEBWjbpWU",
  "key6": "4sTqS4hiTAXVQGmRMxveBzYJKtzPNaXvbUD6v14F515qPP9HxBYgJhRt9Hksr67cMYVC9FkdJ5fFYww3XC6AEXKj",
  "key7": "3D7AyyNznTzBUjDnfnvdcmUijB2GFhbXNW3nixgFUq5kXPnuz3611Ab38JC33xB4EXEzPdibzVYJBribv1nENWkz",
  "key8": "2Ahvco1m7WbG77w876h4vNbGyWZRNyd1gwyRPB6a2UeRzHfxNQEWxoj2ZzGkLwHebQC3Xdd4SUoM1GYfN8oXkBDC",
  "key9": "4p3ebGQV9zesvVXL2C1mtU7GvYTFa1yia1n2q4BDtULhYDMZns5yc26xXFkYuzrN3Lo1Bg88EvYjMRKDB6bPqDra",
  "key10": "3JyF4B25rCaYscMJfe7A4NZCj59JdB71URSte8UfpsgkKYAAaMUccPCgvo9qZXkaz45ysoFwPZgHz7p5MzeANvWn",
  "key11": "2JftCS48hz8ZCGAP9jHQWeJx1RD8yaq9eHiTXyxyxKWc1nHDDZFTCmcjZTGAQeS8BYdcrDtWT84kSQZDBaCvGJEC",
  "key12": "4TXGAFd6wSBLcVE5WyDhrNGksw9MR8dGYYaqpEg2Gqvy4bCfQstsWFiwmi2bUXh6p91ocvqNpt2eyCjWqoSz8nzc",
  "key13": "LWgXnZRnTLAf6jGUDacqgNiwUDkGfwECZ9wrG4xv3gd8Dy3r8rPgpC8aTcpe7Ff7W7eiqJnAU7MdzJ4uapvZyaS",
  "key14": "3jxAJ4u2wgXv6fXM6pjwytwxQBam52Bc3i7mCn1SgT4zbtm5JgAiHAesRp2VLFtQadQonPJf4hoLic5JoXZKd7pS",
  "key15": "2bAcZhfC2AhXQED1VnmqYnGuSrJVFrA8rubVfbFQ3msZop2orPFUej6tMeKVgaxZtomx3RAmFsni4FMhdaPK6kii",
  "key16": "4E9t5B7Ta5rcxNd4ALQDvMVXbAsGNRLZrTrbBCKDrCajtwYX8dubYZEoY1Jsp5MBpRB2uKJ56ZbHCnX7k5f5UFyN",
  "key17": "2nmLNCrArCqPuMhzAuCG2VLL3JhUdPN6ECyJ5KkHahaGX1hZa9xS5YUpWmnTEL5cr9EXzySD6vDJk5V8DPKkATFH",
  "key18": "4fuMBzyVjQbNpcUPKv8RmSY6RJM7gcYo6BaiNMUy1HmrWXGDLExtqZRD65VAQVyncZ4mBTugoDprEUBf5iH9vzft",
  "key19": "eQcuspVTrTk6GoKhLbAF2EPpxyQw3HSeRG9PZemuA2P1223Ra1p9P5JtoSJAGZH7Wei7J54fQnujy7nuuSxKSzF",
  "key20": "3tuqmu9PBoRRdsG2JoG6nkm8dGmCMhCWnW5pbV1tvqUbF3CUiHi661pnzy6T7q5VFPNPTzJeGEtqanxNRK6cShNb",
  "key21": "364KotPfPupyraxxaDAVpYa1GRa9BFGDTroyrrs7YdTqsEgYU7K7txoSk5duVPuUwffCzX91kPkt31WVKU6ZdnvB",
  "key22": "E4cmDHhD21SbTmKNvXNEDxezUARCMYv95eAun4x4VermS6VjbFdvBQU8pyEpReS6ZcbSDTeodggtEerBorFvSuh",
  "key23": "5zCUEGzLqu5qrV72p2SVBE3Aaj5GnfFL1RQJ3DaqYhF1RkZ55vXpDm1ALg99PTre2ifEFfc9qvFPyBJhRS81FokB",
  "key24": "PhB6KT3UUhsmjgko7t2bpuopLAZkQhUGjfCz5ueBfuVrNkppNrXMPRNsi4rYZC5CUeJVoNAQoc6arq99m6L9Jot",
  "key25": "56KWj1rFSPvVq8FALahHpJPULSvkj7RawoxdzRFLPP5fm5D5W5S6LdzEkrxzcoySsbaoWZwxp36Yryze63NHY9uL",
  "key26": "64qh47T3ihyUq9YKJ9j5wxooSRymLniNvFNxpsgibb93ehVrXQoYqFnkADUvBz5eLBhfshTefR4yvtwvXFpUpEmf"
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
