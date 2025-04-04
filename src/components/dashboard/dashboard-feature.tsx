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
    "3mdfdXAXa9j3njFXu4J8N4VTXtZn3YoBeCKtwdaRe8kHjL33bVdhKtdRUSqjSxRe2fRBmnFib1qxs68M1KDpHFF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPNs9316W6KCeiep4ninYkmWAzFeKTaRE4YnvyNza6wyKdHsJ9obmsFftJG7WFStAJpzJdNu5zwkajct4LX4e5V",
  "key1": "mocVT5oKfkZUmUd1RxmqMsWKWC9D6gRHt7tRPFfiWYq2n5qefXshbJNtrFwf7JpxFtB5n19Qh6Ts55TmVG7WsxD",
  "key2": "3STJRaNEMnpPRSvfEDcJicb2yZ59GMgAK6k88ahn3VXy3Qk9FVq6tS2n58sLo1ML1RVFEkf3veN4y6ocz24N49Ty",
  "key3": "GPzCsgcE9CoM6DZHjzpQciiHh5uGRp8GxmE239fnkZq6zW9ammjefXRQJaCvYUerkKpMXFiHfA5Cdr5XXHiZKEw",
  "key4": "5gdrHqgcAHwdR2QKJu1RbXtx7oacEbuWHjm3kRpV4FH94yYiHhBCHMvVsrAazSGtxGJ2KhkbuzJ2XjUcEZkQTdSe",
  "key5": "5vCfcoFayLemgG69vEGQpxx1BQPenduERrLZSedHJ8YWWXv2b1ENYeMAb2a4aSBMhrSsy2ZQnRukDdBxBSzBXMN6",
  "key6": "2AF4T7XD3adfdDerQhEzA3SE1ibZi8EnwAfM1617wkyEWAE8putMhLM6CQfAqhWnTg9ZQh41V7LomdEHRbuVbKrQ",
  "key7": "3rtiRxHLh7gFBrR3AAMuJY3HTDMqaFXUNYkAAjc5qEHYGNLy5NQnL4gvZKyT5vHqCqL3n8BpJnzpz4JPBikG5dLQ",
  "key8": "2JBKeQwsHXSUaQsNdZ897z5osHxUL8pgeSHHgNa46ApFk9oiik6YDQus65N38tKwiUZTmhWemQQtBvaidZcdFwyh",
  "key9": "2F1v8EtLR9B6S3i6ydhzpDT7PU1qrvjvdPgaKBreBKKvE2JdKkGSogF8rrF29jTjMuQqGfo4cT1xDKBpuh9WgyDt",
  "key10": "3Aprkodu8kPeg2u9kXQmfYxfByGASprwF1WiPjwiW2N2sdYwGm5E1BJvW8PbAtcKxmdk7rPo47QjvyBQgwymGLe5",
  "key11": "vfauRhNRWZNpJBvats3fbbV976KYxiJKHEvCTSpjLkCALx6RHNu283BxowovXZM4uoxDCUqqrVyr9pgJwK8n1j8",
  "key12": "4WNXmB8zAZxenj38TAM6sJuH27rANeVrN95BV3xfbvrcqUSw5eBcRG2QEMQ68QrBf6xN1v3mLqBZ6oQf8WY6nxoJ",
  "key13": "2wD7xzf7bJMmw8p64HnkG2bgJecBWDJnzVXLGX9TQVB8SoUinLBitvAGHYRYqoCbedQWJZu86kMoFvt3kcL1uYeN",
  "key14": "67RcpKmFrE7pwy7CWHtfDkKmWm8EjRxcnaBKxyzePzqqn9vEFo62B96XBqrFYhmCwb6L3gZhvzJt7twh61sgtTfp",
  "key15": "4ZedVW96532JVcnDCtEC8kKXDT2Y9RMf9avNJp1MWGVFJn7SC71KDr5Defcei7k93VCP8EaFnEsboBWsiZnsgK9p",
  "key16": "5HUM3661rHE2paoThdgJizFBkXYkVXXKZNH1ADwWrXn2DWJJJcLcZa5DbtFyw614EscuhMpKE2jyaRwfFkJbBAqE",
  "key17": "5GruZUmRpFyGfXeoaPst3gzZZVEDvQfsouj1V33taCMSNEg5nJmrg4XXyQCQ9mLoLSCnBieyDRsNENmhFq9VhnZa",
  "key18": "2nt2tzNPXdsLsx5u7sUjreeiJVtLrmCvFsNvSsFadBGe7KqWfzJkjxqGR6ki5gQZu6kvYDsgJYfEwwFueygEzPe3",
  "key19": "2tmrsY7d9SD5Uc4NmPuFCxX5kzMAAfmuvwi3sJFNskPo6eYfxdq18SuckVFxX5ucfFddAuhCYQ8LLdnn1aqPxu6k",
  "key20": "7G8ynt9tF6EEB5tXwc1QmL8nDYuF4Vdqf5dP2TPH4b481xkKLCEokEtykwHHKT7bhLoYMGZTeevUbxPX8YkDAK4",
  "key21": "4zwoCCdiN1xps5eCgJMKpjZCndazueHmeTdRZUgcbRZb7goKtTnbrr1x4zv2BxKf1iKBKaCa8Mr6UdS3KGAwu7Va",
  "key22": "4i9C2mM7YV7gz9ndD3wHnpF2LbBGwTRCeTncj2VdTAS19xekuyAbHZyRu6C3k8z1ujbXE6fXu1nRC6UJaqkT3T55",
  "key23": "3XHrDK3Jo87oxRhV8asWCp6xEwwXJEzZ5kr47fvXejC42n3woGJbnvAzCUM2h6kmrkCQEQtZYe992UY3zSxr5DNX",
  "key24": "5WB4BcQwyRKQ6yFUiMi12WHYPNnKtS6MWcMHchhr1in2NsMWjbxZ3vCcy1rVTgzA3SAy743LwoCD2bSHz1yHFKF3"
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
