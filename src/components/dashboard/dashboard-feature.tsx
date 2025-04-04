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
    "3Nqqjnwo4cjizdf2aPmKxkHkCSxRmW6Q4RZcQTHrWTGc9rjLKMXV9kbfGWncXKbTviKw3sgudTxWrV9sYhHXgkpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ng759i2TxLfhxqD8bEMFBwW8MdA1FuUkQU4CD924J94rh3erso8dXmdTQHXaLhimkgVgAHnNkRizKiG7bUY57Ws",
  "key1": "2xswjwVyJFadJcjoJJAgE5jij9ANxDonQthbrERV82mHB4L5eLipZsVwE7t7DJbepNSvo2w74vtPLf8DsciR3MGW",
  "key2": "3RRXYVM366W1NjTLxASbyPa7t99SAdqcziJz19e2GkKVTMCfatbc4ZvqYhmB4XkVSieSD797TTCxRkjQTZLDkJpK",
  "key3": "2Nx8VunKe7BY8NQe4YJmHACsLYGYYGGZ5sy5cSHKyG777TLnFLNnV1dX14HWdgs1H4546LTq8kohzpLK27katiHw",
  "key4": "CsXJDxFfwrGGSSNd7oGpu4CZCbbMFkyTs9zZqwtrCRd2YwBWmVNYQ8TvLuFgNrSpYTZTLPSDwZ5wCiXAL3hyAoX",
  "key5": "5QgjzDYNX7r3vSdMQRrikNPy2SurSZUZwa9vLAZH1Md3y9ByYQCwEf77wSvDs5onLMPZ8zMDfYsMh5NhRz3U7JpD",
  "key6": "2nSCH6guQMD9jaGt3pR32Lgt8qSPxst8KuErK952X3kZzr1NftPPXcq4AateoWRpE1YC2WaZn15ksjUTDGxthjmY",
  "key7": "2bes5vyz44TDcfKFj1hXMnW8Poj89KbxU4KBr9C2udExZpmRdhVg3nTnULyV29yeAedUgDegdN6JMgs9TNz6T4nX",
  "key8": "2FRqDJmaGoF7enC1dzZYWVF9WaxogHkTbAwdQPpp5TdLZxjBaQYmUmG45opMDpYuY2rHp89sRp5c3uk651uQb9rM",
  "key9": "3rZizzrRbp4sdvajPgWRvZfNUDi5fwRf8qtPsziMx2YKB9ncAr2D8vUihyLh83dUAPDS1QruG3uKvW57LH5yXSqQ",
  "key10": "5U4cS5BM2uyxzFBCU7cNgmfuim6dWBHK9P43hkcP5do5rNNKSS8yCjriaofqcHpYzuKnUXYZreSy126kqPpwrQc6",
  "key11": "9yYEa236i9gq9Fzxa7cxryjqfpzu4cyfxdMDubqdAYW1qaEbGyQsmJihpCnrocYFyrTmcZwgdVGKmDxnVgp9X6n",
  "key12": "3R8k8aCrER5BdDXdoW7SLYEjGnXmSTHMoieBkebWmzGd39aR6GUjWrwuZ52KhH5Cjvfv2svcdtd3JiQDu3RqwPqm",
  "key13": "5tWSbq6ZSAXrhMECdupaswHNpbUtPDEaCiKmjTDDUwam4tM6EWoinNuvX7i9egAGZ8FUDnirpPxDXcS7aGT7gymd",
  "key14": "3GoiZ8pWZxZcng3TbVMht9rez5yXgpqUkm1FbPHZQxCrNcnUHNoDi87k66hFhMRRnvvaZLphmY5N2aKw8bkaKKV8",
  "key15": "3BJhC9MiAdUSixqtFFqS7RKWDwnzoMeyPjKPxTyS8D7sNPBoUYj2ajrZr5GUekod3WhhVNr6ZqB9MzkoueQyNjZC",
  "key16": "4q4jBY7jgLbgsWBCtF4ez9SuAxvksUuhZYK66kYYuHDmSgqrXRrNSVhLwVe7eC8X9QNf4TQiJtJXdeVWvway2b9f",
  "key17": "4irb9UUspxEvsZWwKRWeCdGf6caVSbtLpvWvxGTaLWNUEyM67zhJDvsAtJSZkSYuFk7Pkay1XTdGZDx3UttpAfxk",
  "key18": "5aLfekEqzEWMALXXdEBNgCwxjnx7G3eFetg53nWS3kqCjN6EbwCb2AFd4qW4igLnh84WDMAK9wRPx7pTh3SWz7uH",
  "key19": "29JFWp8wzYTNX4k8qTmsvSDMFQCJJqNJ1PZpSiWgDE5farNdxffQGopm74hCPe16Jo9yynt6FgUcmFzdgKqpf7KJ",
  "key20": "2zaEdGDgVWvuurh3B5XqLDAWL2HvJVJWWXPq9XBNG781bb7q1wd6FrUCxkZzRjKTMAnsttb7YJFZ7fPKaVFDakcz",
  "key21": "4LkMnJrdo9wywWsydwNaBp7b8U3dE24gaGqRyBiWga5uNKJvRW7smL2sas1X14pFcZmk4fwKhH8HytSWmueB1YbK",
  "key22": "5XJEpS1qz5zGYsSn9B3hrXp8eSyCjqcwn7EEmnupqHYmdXzXqmnAW8v6Azgnk6QWGhXRNM8BjjTjJa7n7z9xG6Hh",
  "key23": "222GyGRchy5qqoiasGnmcXpUgq4fk6B6eyTSC3eBqsHzNGBSrwV5r3UbGsvraiA257G9HwheMx5ZVeXdWyWsKkfA",
  "key24": "5bZXQ257fHqWxAoe3XKkfvxyAAUTdrZ69YtvEGf6xRc4vApnkQuejf9yztpYeVx53xHhUqrGH3umK8EWy5mGxif1",
  "key25": "5bYkFB15AsKRUbW3P9ikT4y54s2foY6wezQbdBjMiTYKGZBwJJuM4AGNbvhL29Zo2di2NBLHQveEMrWdVwtGWpLv",
  "key26": "3yS6aieWyF298VgPX4WcyKuQ86ib3wAsXvGZB6GgoPCtQy6dqtUN2uKTeiGx5Vhw55JYN57KaKqFRn8AGka7Mrch"
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
