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
    "62PL5DYcsYseVBp9YuKYypCBWjkrsk56q9PCDBnEdFPP3sEi7rHVGhkoEmr7GxHo4mYQwJLqi1zDs1oVBxwaTaDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25q8TL3QBwCcgCYhdPT8MHKQqqFDTnPw9KeqVK6p45ex2JQf6ypJjZY8U1ZdoaDL7yMb5HnRHwSZhuM5RaktCdXr",
  "key1": "2f8mB9hBh9FdK7mwndWFrQUzfwMZ7FBAuaj3KKKhrujV5LCNoJzK3ejoY4N9icAngih2XtvU5WvT4mJumr2dejpx",
  "key2": "4EQxykNAefBvUZGiLeuMmeTwJcB4ig3MdAABmPGrRPJM5PvY7wm7ERrzNTdfQxAuuepyn3JzbCrAtuGAvFFNw1Sc",
  "key3": "7RvgkAw9wXFZDrZwSxE9MnsDLiofHzBjKbUYD5nKkGwPSQJ6Whwbgbu9RJkxijB6h1t2YanWPxF11w7bLeEpCo2",
  "key4": "2FjZekoVV9qUKxEC2B66VJeSaRfpRmfB59gk7dN3ycis5qo7UhqU82UfELKZpdDRwgucFpDic2cyHyyZHGk55dcm",
  "key5": "5zJ1CDXQqdG6stKbUxoE1ZbMaxPFveYxZcKhnELsHhCUCQyeQp7kqctBdsXkea5pCGTBGXFp7hdUcAEqNJnrKk1f",
  "key6": "3gHR8fyXmpi9aYi6DgXkK588S92mGxijnGqBxQiQmvnGQ4qzdMPbqbGTfe93cbmQvjG7futqASBSjcNUDxNbVtCT",
  "key7": "42MFRY92EqKH5Q9eU16kyrQWBTNwwcVuLYkh9TcnyEbQpaQfKpftXfhYMrhWdE8wHp8TWAR9LybjccCdSNpJe3hJ",
  "key8": "4Q94J2rHhkhWTxRvrb4EsGJTUE6zcDRyJqvPr52BFqsuUM1SxyQmjGSCXkGJTdosm7J7LiJgLKi37oSrW7Db5uiu",
  "key9": "2AGstxe6GFrjPKdCqbPoZHqc8zwfX9eCrUqteaCKUFBGUFW4M4WpKa3U5d8gbm5RYyVhFcNrW7BVkU4cHGuLh7jo",
  "key10": "3Gm7KAUnZPkn2dMr5arCwzcS366Jv1xdnfJ4BEDMBkn7w1LpsD8rwdGKnyWAeet2epK5fVmEgDDv9ULPWJ3rkvgq",
  "key11": "5Qyg9JmsUBYNC6KteXXayTGR6v2Gp62cGwhgeJCmD17ajxCY2XiPyCgRUeuJ3zCxawaCmm4YinYiujZLW9CuUFYL",
  "key12": "5FrTopeME6YGNEb59ygA3he55V6DiCTbByySvxW6gjKzCAjBnMxF4sX39WywEo37eiLa8CbmoHQSwQRehwHAjHAk",
  "key13": "3T1AQ7dR8xcRhcJC87UDPLUbrZnjuYeJwckXzpWeqjjC4EFtEqjS6eNP9t5ckGSPYyzMq5MrGvuQFrEz7LJ5MAgC",
  "key14": "3KD3yueZUrD1644cuizTyiCsma3YwWHUhFj41EL9QFVH2iuhcZAwXjFRvaTSMkqBgPDuke2DqsjwbKeC5cd4AJXH",
  "key15": "2apQZUwQ1B7FFGDadrjTruAKkX2Zsvok3dMh2oRKrDTMRQLyX9fchjr1hrKyPszHf4dQQiZjsDkZKe9FpdbZZART",
  "key16": "4YSCu5o7aXA93iQiNxWjKtHjGQWwpBVdNym9t5sCFtoy9vhpSnRx4sYSXeXs88ARHC1WQCHCebTtFsnuZcQuJ4Kk",
  "key17": "Uo8bArPA1bxC2pUNnFH1bDw5MGfZhc2RMvA85pqd8zmed69NsTFcZj8p1HjAnm55SJdhuPJjATpq6pEBSyUw2Yi",
  "key18": "4ZJLHrkXdDrEzMfzEDPeSHD67XCwqA5FYZq2wKCL55S4c6MjHhzAST8HbV5FSf5ot5rVvetmgnUZoKbtia2PK1Wa",
  "key19": "5o83G6yAXvLmehRiNEov3CC22jS66bc6X4BJRwEyPq76wdXheNWKCuNkhSGpYARHHj1SRB7WSSYj6DcCNCWamFjo",
  "key20": "31cBPyiQJJYeGpXdugKzn1ocmee5x2KfoxiMX76gLiCsiA2aHpMQHggFFG3sJB4Jn7FT3jMUtUkm3yPJNb7jbY8C",
  "key21": "3ViAiQcss49K7cjYC9ESjLbB3Yoz3k7F46wk7xRt4UiKM9KycSvDGscqV95T7tLsi9Md1nv6kE3SfqcXxQgTLQkt",
  "key22": "5rBruRr8Sd9uEHDChfhoMVHT1jjNqCvpqbAoFT716vN9hSTLvhSBjcEzgmxe2gNkxwXxKzcxN89uh9bJWWu5GEar",
  "key23": "27tZwPcGKTCkV5oXLwurdxeY1pz7xnxPYCY5sKBzKFZKbqV8B1qUgNW83zkePcYkkyuZxo2bfnfYLsziNEh4o8Wo",
  "key24": "2J16FKRmQSLxjEsAA5MR3EcWF3Aw6ped78kqifSBRZcaUo7hf5AEnKeiERBdb6gZAfunitKnTRXeXSfe65Lq7mpa",
  "key25": "2sMk6z9BHiR5AmdtifD5ndY4fnDXqiXuT6dNaEC58fAzjvksYwwBJTKZYRn95zT6auPXLebXrZ8jZFG2dW8jK1ex",
  "key26": "4LQ2sixfj1rKnjRggPizwFjZJ6QoAjPsenmygQBVi18mbckqUnhyybkPzWAFQyHmjTxmogQSbuZwPp1jRBj5ctbw"
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
