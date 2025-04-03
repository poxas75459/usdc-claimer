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
    "4TYwdK6KYCuHS2CaL8fkE75V8VDAhPmAGY8q1G8buvCYhMCxP8kRfGw59ugNRcuYhKN7Mm41Lq8SroTNBG73jnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTrj4BqRX2EsnDpvqBDC4KD7QsY875iyfikVAMYRQ5124Tp8vEAEnCWvmjfK91pXvfX5o5Nq4EpStuMZ9ySMA9V",
  "key1": "5LK1EYKB8zkhQqC5XzgDh2tss9iZhuHJSPwpVGAjkLQcWD4xDbUyNASdD2LwWDgoAWsDffbgH7wp69E1qdj7r2GC",
  "key2": "4MasfaiM2VJoqXSByY7LVAH4BkftaBRFmqPU7yDCiHDHpvNZebtwBiFWHDQiQXdLxGn8mXyn1LETYFcKWHrnVWtE",
  "key3": "4NNEVY9qZtP3UaqBPBjESjNV6Bt2DhPZXLbRJg1bBaf9GfkX7U9LMg2aUq6a7tdudAhX8SG7rrV8yNbQ52GXoNzo",
  "key4": "QwBzd7FQxdemfxCts5n1iBDPv3q4VPgCMB4BzzYch2vAR8JcT3NabbrZQ6w4GLxK3BcCEwU3Ru9yioSBwPekEpE",
  "key5": "4T9K1ACMwjRTNUNGbJe3tNGCKWCVHQtf5Z731ys9CM94yCGoRaWxcrN6RpbSZ96qzv5eB94uftn6Rs7rU8TGoQqg",
  "key6": "fn2wNRY5VBkKJxcC7C53c6Gy3VNXUzMkuNnoaxc6rribp3EPjGWGiKo9J51BYHd7B4eGvn5CXj8ZRtpaGg6Bpdu",
  "key7": "21fQsfbBErqufyX2i3ZGGcf7J6RUsR9VQUnTC8mHJvi3CscuSTKNcvgs8utv1npa3SBu4LsRa4NvA27T6jSHseNg",
  "key8": "394uBk1LDGKBBsAnUxFsxUs8RGTUFCgRgtngycxBpdFtUH8dH4bVz1Xarv22Y6vi6ozD8mAVtSmruQC5Skr8yTfF",
  "key9": "5f8MtnEY6wqv3kfVN9w2R7VpC3hM6W93Dw59aGvrjhPeCy3xt4YHLooQmVM646xTiddHKJR85ufVurQua7yCJjg",
  "key10": "5y5r9Uv95axfGp3XKEoWhu8hM4AhPfRVVgW9yRwY1t5tUYJ6cHTPYKgkeTB7NfMhys5oXVrPLe1RLjKqoV57dhjY",
  "key11": "5BSonnv7i5NUDCF2X4jDo58vZqEm6pt6F63gL1kZMoVPcNyc5hWgVw9hxBrhVt3DEuQARZPkWngVHE6H1s7p7nqc",
  "key12": "4dhUGdGctrTtyEQLVng79GQGg1RkUn8kLiDcR9gaWRg4a7eKXJxGH1R5cMWHCHtjtimA4S9b8CCzbTR5xoRu1gwf",
  "key13": "rEK9MkkivoJjDLpRWc3w2iwBftdXmZ868uQtShLR6xL1FmNtbHEoQBkzJYoBcdiuGpa9ToXA54VRRaf59tBiVby",
  "key14": "3KXCjy3vPsTu1qMVJEhU5SV7k21JGtvD5zwS9eUcS9vA9GE7VQGaFdKXUFPJqxT81gTqwz2htbs7animuPpQPR8r",
  "key15": "36NQud3drULyrw8gMESDHzyir7Db3QsF1uXnGDksD2j4Wd6idcfqV4tKHFbF7AXZNi7uUTQGYsecbk6hqFFspeCW",
  "key16": "5PFyQKnEY9ZMpoYZ8MAT6h2Fpa8iTQ4K27YL6HwjZR55tB58LKBosznSXP76tcCEyoWs7SeB98s5MHPXsCkGRh5C",
  "key17": "riNe34FDbxVvNecDs6LLP3kHYUbttG84diCCUwskQgUPrxHtxSRLemtkGzJdKidCMdVgju18MCLbP4sR2shUbhE",
  "key18": "A7LjLqReWwzH7xUWhE9XVauR6ybhz8RjT6HcGn7HnEsRmbhRnzGpeVd1ZG4PPQ3NJDXA4zN3USZTBP5swmTx8GJ",
  "key19": "3VJvkannz3dyGV4AJpUpqsLWY2RkRddEdQ7g8siivDgmr5rBakPnmxsJhMyMuJvsJvsSgB6gZvKF3SEyK8RLbbGb",
  "key20": "5UVyYy4oav8q26FRUs2vQqFwQ3UXhFgJPpaqvamrN9Jx8HUUrYBF5xYRnTPoTrdMrLX4285y9ZH1LyWTDphsK2HT",
  "key21": "2Mgfrh6ierYtcMNdwNLD5GkKQWEeo52VHNiifKvKRupYby1APJ2XqsJGtCxksGosKUuouTf3Qrtgb54GchWiwPHu",
  "key22": "kMjZ6oFCt3EsrUswjvxANunqYGGEa92UEgFxtVMReaxHYd5n9ZmHpb9Z6UPZGpH7mV68Z6Zn96ZjGD4cX16jZCY",
  "key23": "2rwWFbzd5RsKcPqVSUqAig1rPkbyHpcXiaVsUDXkp5QBaLorJFrQK6zyRcTqhNMn2Ha2aij2aEvJoys2vwrW2yBs",
  "key24": "PSvYS3vcx7rYAHSZ24EcDs7zFzadcLViNveZ2bVLHhZnLYtn7eLFtJemGR82uU7LUESBdh5wD8utFDXVJ2vgSUp",
  "key25": "FszNbrPcykLUC9fY87cXDoXsXCbEU83tqCF23T47YVk5FHASQmeWYjphAxMMEqfeab1ceK2KU9Wbf2ph9nad8Qq"
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
