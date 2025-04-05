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
    "3VoF7QSMp4dv81pM1Bu7A5qrSV28AqwhFgB4QqF99w1uvGuag1KdLQKLTZCHQbo4DvT3FzVxHgs7xzmxtJkAhE6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scNeLNcFYKqjR9VD4qKd6nKKCkasiEQvA9mjY6mC5yvLzLcy1k6bvegP39vrN23Efc5g9snpGs9B7Lu3jXMB55e",
  "key1": "tShVsi6AaQLRg3DYbdCMRYAzeAga3yQyNoUED85FH4fYKMhQsKLYLFqTpizqMEDsDnxBb9CRM4WGRXgCz68b5Ka",
  "key2": "49Lnf6ttw6djMbDV5MxdjYDPY52jLNCD7s6ahKrDf2VAwNLedefzgLWSnysyMwPLFKveMNgM7xhikMsB9oRwZeBb",
  "key3": "25HF7ZsDHvpTxJc1Ymy6rYTPJErr6h5GcAdpET6x6D2fkM2vdPC3J2TqZW86mWAFaXZ7uyL1AyZMNVD7mKTnCuVp",
  "key4": "36ASzUSd7Eprg5LDL2oGx95WHGs2u8EHNyWpQy9qdFaLdPFw7gg59R58Uyyad8jFZuMnFKsDMdvtE2CdZmjq4uWf",
  "key5": "bhwS2JAYHPg74JATejfbWwmdKYfGbqee5SufGYLC68vMoTtvQCWD5AKJnAFi2aT7dE1FKcfPU2QyepeQCbiTPqV",
  "key6": "y5bjoHYgMe5tNLxDy16KBzCW9y5XpkW9qzk1hCofRbmJd1Nq1QVYzMMsWXw4bZisKosCx8jKbLEzr5stnXoKRsm",
  "key7": "4dmn7ZUsej9Xgn11JdWJjkHQXKTTfx8RzN6mozkFgXnUzr1RpmhjG2dpYMhLx7dhtfCX4LaEGX7wzEcH6SDBNiT8",
  "key8": "5gfQUxyCaS9rWRsQiGxhVmWqfyoHSSbCmLsfbCdgSVBV2is2i9J4xZysEF8ZCuxtyY6htrmxcN8zAxVzv2uQEiDW",
  "key9": "a2XoiFPL3b4St6DoTjqDzQkudaYsjCysQ7iiYRyDhcWasKGGFYCPhc4VRHJ5aHGyHfvEMC8QWmF2i1kU3Npymaq",
  "key10": "5puhFZvEV2CXWYDMP8E2NpkUydiREhu9YPwVinTs6CFGBydwVteH2Cny8q5Q5v3mhnxYCUyivZa6GqzK5DtogyKm",
  "key11": "3cNvB2t49CTuNWLQoNw7fp93hQNs7CzEvrmNv6ptARbrvY5hsMNjx74jRqDtZMCQNY4kHcgBs5mRiLf7kR2FeKd2",
  "key12": "4ETzYK3Mnj7SeMFAAHnumF52RHCeVvesirkmuDyuJQuWbgDtPUxPuZxxt9XVqdXSYhv56pAbpEXuFwjXzYXz5hQm",
  "key13": "4K5dU4ZNTAofWwQwmKjyMs6wFUcN8FURupqfp7UQps11U6KYvEsn2L3TcCXAWeBJoGUaG5VgUM4r7KRFnKHDFjJW",
  "key14": "4ggM4UPEmG5ZX9T3X1bH1rbvom5Qih36fs64qSQ6hqkR3vxh4Y3xTu5SJTJtdKRJSqYnEN2zyfRu4Pj6SAkLj7V3",
  "key15": "38Kt7THdsfgcwqcijCfhuPxtzC1x9mUHQrrJ3YH9TVF7eKajBEgMw7uFXuuF89KPQGdMidy9hasgGCbAb98pPp6N",
  "key16": "33LZ5FBDSHQBsbxnCxX5qmZ3Dg6BSFRuVjx7yCTpo5zDy11z3LKSbkEyb4ASXJ1R5xvUyTrGby8Pj7KMApFgqvMK",
  "key17": "5bFr2qbscVJHmG14rqbXkry4bimakzrvfBex4teGd1Zbuk2pb67ud8YAwqP3fzK2t9utTo7EQATh1deBmuRegska",
  "key18": "39kwXQrx4zJkJAYuqp6cZGuFGDR6h4HycuGG12JQckLPy5LdmUaAxD8LgVeQT4K7zT17De7JGN65fXcC2a8fHpPg",
  "key19": "5VgX8KD9QNnfGmvaRHHFZ8LD3ycenxBhCN8PNxGqKpavfTogGRkJLRSuoiBTXeTb17dxvwSKtfJfNSkZ2R9NNiHR",
  "key20": "4uz6QSbZdbWAWdJSVmbvn6JgaDQdUknXvn4RrrtumfNJAsAoKWrz7FXjy5AkSLaBbQd1aypbNaRo3n8GGNFykXP4",
  "key21": "3bUyXyD7T9FUobW3eNoLJ4PJcAzd7pwyikjhUBLhXaxSNDseR3TpEbeMVYYR9yLdBgpX8xDa8LLKS6AvJuavfiby",
  "key22": "2mywPV32TnDEsrdBQNw8h5XNXXaeuzpTXsVK3yve7UQzz4DE3AH3QXHBeXASRcKubskZagLB65FJ1LZoT9QBUWqd",
  "key23": "3B7KTmPUtAF8ygVzFNhz1hVsX5BdYeSq6yZi1KFQyihPp33EmctbxzVZntVwMZ1pVaLn6ox7yUuwzmextEkLgse7",
  "key24": "4HpB6DczyQWmaSJzGKLFjzCV8FAN5YWfKEKoHZnPg4M6Q3YqGnrucAgVcRWkeJSuUMaX92325tpZZxGgGqYZS1Fs",
  "key25": "5VRQRi7kEpJA6qELSW5aAzt2JQKSYwKzXc8L4pzfjZa4oRwXJrCDMZFo4T4TJgCGWJ7PViR514CXxtBrG55Trfht",
  "key26": "4FdYwyq4Tu7CuiXXNh6WEgbbLoDPnL4Yoc2CSUEdU38DBPXD9kVzvrsUFznZ8SL1bbSWm5VJ1FEVPpcSQweVKudi"
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
