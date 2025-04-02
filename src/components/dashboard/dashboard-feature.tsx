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
    "46MjfZCAFhX7cGxb8fRX7nopBH5gBVBVW7QDnrm1rRngrfNVRVURK7qXrHKCCHqu63Sq25YyuEDPK2taF6WXc3Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PfGj2W7c42FwbBgzvZCQ2SyJUaTtH5rkZzz19mr4tkthJ7o87B85JhNCGAfknpRqegUSb3E6LSv3Zq18eWYqon",
  "key1": "3b6krV8Uu4tRAmz66qd6TXGatpASLgrbSVRBrsxPXAX8zoRecmtRSTpPkKyHetvZx5gRyfphtSGEBaeztDVaZWUZ",
  "key2": "5wbrasFtquRgpfuaodYWe2Za2pCMwuotySf95Vq9wToKha7YRMJKQhBJQApGczQueoLihvLyKDBSW76emNYWAr5v",
  "key3": "2tG7KGe5XUSVQabusoemGoS3mCuAkNrGA1rQdzUXY7p1KMA2J1MSHYEM7SKQ6RTS4mb3kvm8Tf8UL5LxUvYbsaHE",
  "key4": "3HaTq3uGTLbkTK8uhcGEQJPtpsTr3aie1PuEM4LXBkjifbrjDsv9u1q1b5uXXwkWft6x6QgWy3m4yWFc2TWmDBDc",
  "key5": "3XQp4TszLPMM5FW2s7NCpACGES8DG2M8P7cPbgrH3uXur5VaG8UB3fboERD2XNJWFSkBQFXbXLJxaDhXBW38kVMP",
  "key6": "4jB8sSXTpM4VJ27DBVBDrEBGqWSvKcnuN88mRXzF4rr5giyMuT3ZShD7G5pfCsG5dwYBJrN4GYqUEPvj8ntXP7Fp",
  "key7": "4mNjeQVwV5vh8xatDYtHgH1e41uqK8cRvgB9SXaV8vmLW9tuFK8YwQKDFZz8fnb3BrdepJ4bJh1Bx7MuaLQ8HVDm",
  "key8": "2T6gZzxsstRxTrh8jqDfwXZ7pkDzL7Es6sFxo5R9LSzrozs6NoQFa1kKGWrs4ZN79nPnqPGALrEZ2odfuAw3Nq9F",
  "key9": "23Pyufzbo7gJT4uM1TdNc9jcxbtMAPiduovs2UDi2nGwLw4C16F2iFsdzzC3nHoVwWBP4cgmTEXiDRw2H8h7FAth",
  "key10": "3LUrBdta6ZDg3XjN5FF8m14fZ6CtUQeF8JvfM3rKZp7gymCwCPcrgXY1zNvrWjx8hgFoCToHTri5XnKoqnztUbD6",
  "key11": "5pE8frh7xGoDeriqnzU2ryMporpc6DxN8SsQNYf3wnDjxCuYsYyhxGchGh4Kt7DumuQncZ9AFvX4tVwrymWL4skz",
  "key12": "4h7fxsav29B5SErSZT2CNjmeShysF583mzM1LpuDdh2T9JMfi2U3S8EQedgq2ezf9yeQ4NdrEDNib6ZQrzqK3b2X",
  "key13": "2j62McupxLsbT6meaz7NmobZmcRuqp8c8w6ig2A4YmMSmK33UUyT4dbph4KR5PmvZLvn1wCwFPrKfj5SWoQNnwD1",
  "key14": "46fNFtf7vwm7ayc9gx1v8WxkcwenkWCAYVLTW87RKxJvYqHRnA9mdnY9T41qMrp7KhTLcDCDRJoKYQqayQwP18hn",
  "key15": "3yxaJUc6GdHDmDxtLM1yvzRBbzppRXR4nhN7zwsCZc3nYRYeeYicUiFWyfcN4kGan1763sgv2cKT8b6RPP6NdJUK",
  "key16": "2LNyjzUipnmB1gXmA5xYhDMUChuaCQLPn3A7Q3NUukStRVYsi9CRHUSWQhFwdzVawk77FkWvEQ2cs5wzCzX5WFKi",
  "key17": "Stuc7xR9jYYkmS9V5iTVmc49K82n4bxcV7eTsJarETu4SnWFf77vyYVJ9Kyx7Qm14pJ8bhJa5mRjbbGh4KfVUGE",
  "key18": "2AXM3vyf6o75kuCFEt3n9ujY7JBeBETBYm5iyi9hffQjSenEmN5VjfcSS84KMf7ei6WJZWoFTf4wsQu2nfUA65Dq",
  "key19": "2or8XQsZBED95Rymvx37AtxZ3GHDih4wXodDPJf8E5MnyfkdKNt7RcAvMdF1EurgpPsCHAmspEGSEyo4vLhoPfQA",
  "key20": "26YHfNcFJGd5j7upiLa87qM9Hin9b2kkfr2c8F4mQra1g8r3pZzQFSUHoTVancGxd7PuS1FtxQAmFXyMkHeLxprZ",
  "key21": "3Kzr5hMKa2oakSsZUW3Wz2WLgihtJ4hNdHLnJjEVUnjywjgEwMKvrcLCetztHWG2FTfoA8guaEhboodbSjKkW571",
  "key22": "2kqwPX2iPnbmR8MjK4gdXdZ39NMi9jB5f6BWVFGDkTjUrJ2sdfkrmNEyD6cDwZKS1qW4qQdpdDKpH3Q2QVQFnQQG",
  "key23": "5xvzXLgpU5R6CUsBzomEGeFEfC9XC7HHjeJy8WoziBanUQwefrvy8u8GnSrzEwQ3nBie86wt6tNSs4kPSCzQTu6L",
  "key24": "2VEMAv6zUQPVoLhwEbr3VLSmifetzaVUkidwbCfY7DxxMYZCup7ULTmjLChp6nDZW8QotCdyAZJiDyy2hp58VKHa",
  "key25": "sSKfm7xKMcwS6gAg1kro9G7XwUM3dVducVCMERALjk5YZUq5PBhU8nTwgJXfnW84wizxyMiducBSfdRxPahwBJZ",
  "key26": "VgYYqyuCExhQ21WXNsSvwHcTLy2EF6prW5LLe4WAgVqKxXPMf7SKvQuQga9FoePZCWMdCpCVnCoUivhRAPomCZh",
  "key27": "3DqCMJ8L33RAer9yLmYv9zXaPyjPKqS4zjNbZpuRK92V6FAmicjTDfJQEicEocWtAYP8Nchcp2BDoH62XMygYU2V",
  "key28": "3691zxdSoFHLqhYvG1jAh8EWBQiofVAE2tkaEAXod6oiymvbp3vmrA92bp5XPncR8n67ZBorYvUYjpyybFxhZzmr",
  "key29": "f3YGuKN6yFaCNmidJayn8mDkEwYcijvRFPUGfSKYNd91xyfzkJye4fJGyCsqT4SMyB8QY9K3rJS9jLMwuPFrz5Q"
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
