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
    "4U1nbUbCXWjDxVqcJQZC6zwCew6NoefJvu2EZ7KbuzMAHY3zLB75dukPKMSLvmGxZjaLicdjD3Ch7GXjKYZbwJAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gH2QrK1hH5SXUpv7WsWcm6HbCLZCyhDCiS9846TuSzWnshnjuPjU1p2VXhYexrT143KiL16Bj3Z3LPZde7LHcJR",
  "key1": "4ZYVP7Y9EMrMa2bykMJAnmQo9Mr5Xj3ymbFtTWiMz3AHuYPkmbjaVNhA5K9s13AAbw5HPyEpHaX7oXuSMDhYwiV9",
  "key2": "3Vu15knARxWuAMgVEkiB5HpHGJZWKRcy6RjRFGqnRivYygF9ujQe33v7VJn21Ys1cqxPPKsgQphQDjoZpvPS2sKH",
  "key3": "5P5HCjRzrje4uJNjxCFw3DBEoCNQcY9eqe7q8PPe9T34ov72iXeeoc6ynD3Pps7PwRXTC4bPC3hJf42HiZjFRe8A",
  "key4": "U9sxLQ8AM7WXQdk1tAvTf39Pz86zzGLXgFZH1jgyjo3JnNJu8uTFULQunV63uzyADYrVNDaunzVGSerJXyxqv2k",
  "key5": "49C91LMQPjDQmUUNJiCLRDxa6HGZQ25ygmTgT2PrZD5VFLieQUzfaY2MHHMp9JUB1ao3FUENZk9QY9W9mBbL3inB",
  "key6": "4rmoh7yEHURZ1vqAeqiGcKhTYKNisq9yAu9XWW8Gaae6PKYK7zpKZxnJQ91Gsdzg4ikBLckBDnS66CXeYoq9q8zH",
  "key7": "4s7RSiupjdUuJVh5dXDdTp2TzzH1m4gdLfvjKnEz7QTgLGk9aw9u7oJVA19fjNpYD4EucisT3v5tLtycnPHDMNRM",
  "key8": "3ERvaGMHjRBcycBR3zcYictGGebYUtFXBYtgesjHSQWuSrbrwY1A22A6wst9thrJs6tiJ14q5iMy7icfDj5vYsZq",
  "key9": "5AB7S5zjQpJ6t8iUyWhD8Pv7fqdH2ELMxRKtJ18qTVbwBLAc96MyQXoGgJdoCNGfrdq9UKnKP4jkdnhXwZRNxwUR",
  "key10": "126hsxorTUu8ARPj2mQ5pXkucLw5o8kVu6Bf3e4kiE6xftoBzzktVFJx89BJt3EtLY1kBbnwgCydZE6y3d3ckQ5f",
  "key11": "5BYsy7zhMTPcq8AAupDuvE4oapka6TQ3SiN5nXM5qER5FwtzJZRpmts5A3MYBofvqRfZHb89KJMCgELby1XUfkn9",
  "key12": "3cNQMAwcFMpPUHKa2LGXarVrHKgqgCDbjXr5oJ4um63L9taGtxgMoPKqcCHuNVMk5myYRgQ3FFrffjNSgoKkHPqP",
  "key13": "4j8vaSLzqu9EQ2W9vZKqrii4bjkS1ft2Hh3oNQEKz9to5LS2xcHuShL9cumg6FWvRZ4iQNsbvgeTpiEaNg2e5G6v",
  "key14": "zP5iq2WZu54HhAhof2nh4xLSRHLWqS4q3WWfUKbANUY73yFCM7ndZkSBTnHRjyHFgNZNbw3qaEVjopa2aymKXNp",
  "key15": "5rY6PPvdmHHvx9PEoSiYxJDN3PtKkFodxiRAfFRXTEin8c5HgmHnXbMC7P6YFUqxa9ZqoowBDXh1Jd53J1YMav8J",
  "key16": "2U4FJgNfYwP48FoSJanenKVu83rZqDRWEqFz8iacRDuC1mP6oqpgii2WRAuu9uHAFpuRebkGBSwiKMpXm13N7Rr8",
  "key17": "4grPtWBx8qDJRzpNSii11HsUdf178MsYuXzRzyEBVFrWAxai6HPkAFXiBN6duu6xT6hS9zkN21iSsNTvq2HUMcte",
  "key18": "3Uzxes1orUwuMneauW5LZxReyuxUrX1EK1HDSxG9ZjaA4C6SSYEmMsqWe3T3wniYVdyam73U1cYPV91PQm16p4o9",
  "key19": "3sSeJhR9wguzC2pKWYQ4t47LACt3sdTQMh8yxPEJzFkb7t86uvkRk4RLoVd9SgwGzzSdNGQKUCDBQpesBMBfAAyU",
  "key20": "4pCYgBDju6QfyaVQwTun8kWb6v9Vgwj29Jv3QVtQov9sUTwx3xyKC9trDviV4kyPm2JkSUFaEMqe9wmcik9sd2jd",
  "key21": "5hsN4PjU9MnZSH49ADrEqvKG6esrcoA5yUCkE3R9XQdCxnWcwHSEzPqPWBpWpRoKVEXDGBJkS7aqpLgHXMwwUwZY",
  "key22": "tJSZzzNoRvcVoGcEXboR6C6cXn2EUNeZFqdyv3cp6Gcu49rYCj572jZGRb5E6QyNaiUB3tGYCeqEPi5UQS17ou9",
  "key23": "3icDwf1Fr8YKHrSWVsF3WhHWN5gs9BqpM58pp1cikFdEiCAcQNrBRaFUowN83mWidPF7C33NTGbLmyh4WQbUwiHi",
  "key24": "2DE8Lu7FzXj84VEh8ZAmM95VhMYruyAgjwN96U5mPvNbctDKMNBY7v54uhXKsVSkpz78pVQVoNwsScTiQdjQPDs6",
  "key25": "28kTnj5EdutGp7cVWKKhDaCGXYJFCwUddwgW2kx28UykNSupoTPMF5mWa7hBiCf2P7nHmpxwidiWGSpt97YMjzfM",
  "key26": "UtDP3Zn3dg773uv9LNureCCqTkRAwwVsSqKg5cz9RngvAjMa8MFdhqpjn4poTW3Gg8mjpe2pF6ZBBnbwsm3aQoA"
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
