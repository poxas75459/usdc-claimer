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
    "4iPM2DgBZ7pXf5Trdfx7EqWdBRZgEf67Gi58UkJ27HoyBNwoEoZsVQUkbE14RQ2vqbzR5YTiK6Lk6E5kD25DjgRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPUasUcjCqD4tud5prhKuiQsLZqumtzbDHoSThjHr1YKnAhon5pdeNaRcEfTJ6F3yRy2XZwCWgFThyibyHdfvxD",
  "key1": "4Kp31a8x1A147kmPGFcp12Gwo3VWayJaNnKjcmDArRyU18ewEZaqwKiMjzv8xLWc1dLFWSUkXqz9jZpTfJWrUbN4",
  "key2": "533FVjHWjG7QFxYtTCPuxzmrGSm2bxdFFX11fbma7XHXSrT1L4nM949FwtKfwAXa4winGZtbZvdUqharcGJAZ97Y",
  "key3": "8xN3hd3UUTuRuRWXwhAZqNNCZFWj3bHR9ey2WgQWzbaMtypbsk9en1AAebXNKp2T1QcK95ThWD67xgKnS4G7E4t",
  "key4": "2FWUJyKZWwcUyJsfxt2rCcaBLcLr7ALDe3kRFLS6mNoVmFe2EEGRQjXaSFhinr66ZQaGQ1GGqw9EXmSEVSD5W5tW",
  "key5": "2uFQCziUub4U17Ue6SYC848Lrkeaq3ES8x8XCjF7C4h4brWdXyMgQR1DPfkDkmyV7UsbVCpgMehE1NY2W6ypTrPs",
  "key6": "2f9wSKxuhaJ5zUVyDEoKYDbR5bz7crjQHq9vjvA6zcHByjqkzeDzMEz8vvnEvbb6a9wJ7J5EM6SaxE8DFeC9d9dG",
  "key7": "2AW31zGnbt4Zy4pqHfAyqqA1UMZTAiCkVM9ip89DSPjQ9KT9e9VreehvdPXTUZNDXnL3mf9fyjiu5Ai3BWfc3Nj5",
  "key8": "5SuTF3MLL4pgWk3ANgb19fU4CAjn4wNe6EAiPLiRimJFXPJ4SAaBnv1JFUwSNsHqHaLM6iqLFZ98kV6SvMSGU6gp",
  "key9": "3rysmEKSTMoAUYR8MaQKx4D2bGcjS7GrRoixEvowuLfE2gjXhrtoP6fyRChbnnoV8snMfMuHG3pTAdArnEVrQByE",
  "key10": "6FLvfZYSrd1uHcG8xQnGvhX88kd9rmqT7NXbtgcQBCqShNobbLaYMjSYo9HdiUZy6XMUGoTtZRjcKLjaZ9JGaHs",
  "key11": "3X3WxtvuTo6QQfhXoYsXesgEpNTqCRWH5hKFq6noEFtqfMY8Rc5Lk5qGnGY5KpzxN92fGQLBgx1dWdUJtxFFtrJc",
  "key12": "Ptyds1Qup2zPppZs8e7dDoMAkesuoi7ktAQfVCJhgHw2FniZxNHejrJs4iHVCiMXm64maWz2riE2Rdzbfcf2qjU",
  "key13": "2hmbNWxfRLvZDENoV1wzdfMDZPYz8KLNMurwy54Za93E5mooL8PLT87HB9KGXqcJYqqkhUjQjBwxnvXhkct53sZG",
  "key14": "4XpZWcTwfAJK5eofuraAe6HyvvGTbUWnxpkxTZE5SDasYMZ5xv7jJmfuqGPRT1ytcVZzkH2p3PLPrsBKdDTTzfQF",
  "key15": "4UYhNcfnxnmFT5LDsxPkuQnYn8fFzZHXMRM8SjuuUPgSFK1jxL9WduhfqUyg75ZZc1pvQorsGttWS9b1QTUWBVLi",
  "key16": "29bmrLvvRiu4Vo6xUgc6RsRDqPYKM777G8FDwCncrhBpEFnhVHfAAFedcDCx6KnnysLoRpuRDSjSDsHQUyEitxdJ",
  "key17": "2LdT6RkyNX3WCAxqWhsGPK7a3cbiLKFjw2NypL67B3HK1ao1TBUTGyftKz8eqG15H8VuPPJwKgdPhJ3aNSTaHWyM",
  "key18": "3CSVAtD2Bmp778NieZCkztMEd7qsftghTiyVjwP55ZKSg4PXPbCdi43CvpbBHFpbDzEgDyCamujzzfm2TaM478oG",
  "key19": "tyrLkL5Z1h4hdrekXarnqTGARDBVJZuNZ1u7tXSxVEpGGLGcXVKxk3eC2n3sCeNFsJQ1YGgMPSsUaXmiRPFsfKS",
  "key20": "4sFQCtJz2ijovQtMM8pp7mHkJKe6M7RYsovp3nf4p48LajkkB7iasehYo5d3EcH883YtRm2f2gcqRr64NG87RGus",
  "key21": "3Q6uNHat3xPFXXqFfho6R4rCQYzEJkbF2zWX5hNz9DPvj6CH6gGfzNgKcFLmCkMnR3PCDEPUoXopB34adsW3KxNs",
  "key22": "4NcbSUVjoXNwc4Y1D2q6kYvdvKumBbVMvszbsfXoWvxhH9KAAEPHVpEhAUEHbzx7HNjaWV149WVxCKqJTWvmwL79",
  "key23": "4pnRX7eKAojGp2fW5ZUbJXXrmeuftM2MmgprdMpBs1bu9NhU2kuCHRLzoAH8bWiaBK7ncvdKCAtccERWmhikHEA4",
  "key24": "eQDoUAwzjkk5dN83T9AeUtawSmWU2WdUGUYToJMkQ2roRjBmY4Cqazt3esj2jdbSw6JVAFPnk7qA5hE7vGXdaKC"
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
