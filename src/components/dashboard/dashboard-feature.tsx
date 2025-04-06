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
    "2g32KgJewZSmVZZrojQSQRyphTB84RLVHgkp9ab1a5RtYSecFB7qoxMJZYcKWrhwTMrFMR1XxjhaERehApcKjZfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586hAUWcgFa2TTX6jnoiWCiM6Prp8kbXGrGkpsf3ivZh8g3asSWsnPaDFn6fNLefdTPP1uZhinRpKSfUvvt8Gbmc",
  "key1": "25Zm1C7X58VLC4vevA1KW2eEsQLqcv6CYYidDmRpQEGATEWiHQnp1NM5YMDAoUF18kbcXg9JJtroirgVZKjZKoFf",
  "key2": "4Qi8TyEkGSqobVeXzbbFrTN3uPXLWudxC72cjrWRRHQtLyKBwzr88gvJAiTZqHACLBugtNHG3qsVc8tmRoxpwqfL",
  "key3": "23A2vtnakr1azy5mXEXHXFkPsWZ84qNNb852KBfyYVGrADmLF4QkQP9aXSpEknqzUcgteE8dWhokNcYAP7rDgVnr",
  "key4": "3iuiGbnaL2X5H6mx1AiEaAg4t2Nk8F7webdHZDCNwk4HcHrtAcf5KumbNVx6Zw8i5pUXL9r2zdFUkmCFUsJBaCdn",
  "key5": "5aBuSEE55Aqckommcm89KqaC7opJEnigYaNnXPaozVfpbRTZhMhFgRNh13HSzan2wTZk2eFyxR47hBnQcKxELbNp",
  "key6": "4mizdW2Wgd5UU1e92BPsmpMWXqSfPFd8DMiCEBek8fZvW4zuitU25pmwqGujMrqMZjFEwty2DMgemwK3xCwfcrki",
  "key7": "34rZrArpGgK3KBALxppjGp3KjeW3UkAmgnCHGdgpJGrtbnPzxhu6aVfnvS4PMrHxooeJagh2AVdQR3BijSKmBbDh",
  "key8": "4nUtbZpUsqY5bHc4mfj79Gqy7UutDixppp98B6Jdj3RbALW7RvnsxFZwBmdr3mzNAz2V7PCYTNE8KW3dKEWYwArG",
  "key9": "64m5HKnHtXX6QqW3XsDQTgG5pPt3piXuUJoEXcg8Vi3E9U6Jp3pND3uweL7kNFBd88hXReHMvA4jgkTHu2ebd6cG",
  "key10": "Z4opcBqy8RMkmyJqEYfPCeBPfWtXrL1ahowadMt3oCk43SRz99Xhk6Ph96iczkhbUhBMkfpfdZhKLsdLVJ61Fwe",
  "key11": "a1uprjzTfUbr51NgewkWzB3JhP6vRxrofpvh3cCBnSmDJ8fs3K2p6NqSbEfst2PxEXo5E66qwgXewtY21BpjykV",
  "key12": "KGoaLZjXjSfTTnhYivTHbjHPjK1ivNnbwU3qc674dSvDhVLRnBwsz8Vihu8SmGHmjjW1hL7VyqYX3AiDZYJvczU",
  "key13": "2XTsVdR1QrqREdmCbRUvvmN3tQNi8Cn6jum9sTVLDDidS437fckHhGP7gRQRW2D4S3rgrN1Z2FpwohNcGSRQZSiV",
  "key14": "3KqYWFXEu3xpQ6dMnukwntpP5Vt1hdZZryuTo8KKa4cWPp7k4soBDG1bJFu7YYZBVgcrX7Kom7sMAMGSbuPSKkqD",
  "key15": "5TK6RTj5QCPUHHqk7MT6jdTyASZJas9ogAXEGA7NYEvkJLn9JgijPKZkSi2szpvfY12HSCUBwWTSxo8F5XEkNVq3",
  "key16": "2qHjSTvEnQ2QVvhfGURzNtUDjJeUJLpSFuokaNUetpgKH6BcsBMpJyiowAwGCSLZoyp7Pt9ZSYnqzYwSesSUMAzo",
  "key17": "4kYRadtZDLtyoxjb1ikJoAh6F86M3sT2EUBEBqvHnp7N1qZQ7GC7qkRbfwJckkYokAoQpzZs4JfnDvd3GtW36McX",
  "key18": "5B6DyCsKcdSBuUTBauiFTxpw7UdWDnSPLDvrUcNEwUAikYwDReYPU7ZYzm1zHohFCX8xipkfwPzqEfAtwAxgcuLT",
  "key19": "28YrYcytkSgJAVjCfy1X8PWhx96EMsv8uZifeqEHXJN9yqhSVUSLN8MMsrTuQWKKfUwiKATe3UW6FHripAJEWBuA",
  "key20": "39nvWSYyVSLq4Cu5pdhEqF63BgXDPtLKhaETsWQ8W6MNwr6JveNNfkee293Gb9pAfjesFc91Kfe9FSun8BCmoiLk",
  "key21": "4kDCDd6iJz3QucoPKdBR52CdhV2hUSW7UF3a5KRbAoBgEeWbZAjbuVtSPFn759zLwNV6zcRVPGJbyyMFyx87iaN7",
  "key22": "2EWAtimfnYLZvfJdUFRbJdXHopmRn4kjFQEvy8ySUXtMsUAZ8Mdp8iKATz94hCzrRpoeSSsXP9gDMsrzgkN7VAQh",
  "key23": "3UaJV9EZwFh2rqpGx5S7Y3V8DSAU23G3Nc7Qpi2LHfsS5XdoGREhuKouXG8upUFqf2FxMa7eMT9q3hTEXSdHRaq2",
  "key24": "vrzCCYuMEAhwgy8dA55x3aDEkz82GAwBsmhCJwspzTQStwXNRDo92WDGdUcWdu7eWmxdjpBxquoQjzeVMhPHnBs"
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
