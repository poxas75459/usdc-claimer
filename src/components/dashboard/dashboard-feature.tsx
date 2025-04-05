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
    "5a1J4SzcJQbRNoCKqoyZsfZUEPAn7Kto4mTHZ1fQAvk3wFASKgUNJeqphVfR718vLk11yrVukY61RMpFtUMM4Q1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPTz8TvDW8NEsjVF8BABEPCHjJwbdASWcNNkJzfmMGZsb26anzr28pinHBPzDk91ESpPMH5JpA76iMZSE13aAKs",
  "key1": "3BFf3XZ5je5Zbd1qFGFgPk3KXAVGKixwvtBzFGJkjcBdMGbQpbLN4B4vJzkSDUxocaRhkFA1WNCGR9ZYFfk88fLh",
  "key2": "4zFzoDEGeZrVY5K1RXdXdRAnyURMAqmm1vy37jmCirhstb2mLLSaVTpCAwcwcdn5FmZD396Gqz8SGwdGx4X68ysL",
  "key3": "5PVmRxJ5TPbrVDbqqMBEBP3NxYpbT6je8h2zP1bCihtBNjCUJqpWdBcatUvQy7L1DWSpixCPEv1NX4JDea7JWZ11",
  "key4": "2kEHeJK3ARdXtn3jeHFjaDaTuQHg5a1EnWuz5eZ95Ge9qbdrE4H4vsjpchg9e16Gn2AZGjfxg5h22d3zUGsumvBV",
  "key5": "3AdVvQ2ZNNoxR55e7cr9osZP6mPUBkrPGDsWcfZrnjJaonnz9cTjdz9yo5AGSFGSr1txqqumYcGBikKyVDB6RW8b",
  "key6": "2RKeTLyvgemf4TkJYoQBGQPK8sUoVGu1LxiCjybTTyhmcV8xs2mXV28bUyDAeqCkBS1gsxMwryx6f65SABpR7gHC",
  "key7": "4wwqd2S81xT38qp71b92h28ooMuui3awDixTZFp1jczL3mFrk7iUS1218TqHDj13No6LV1b9e9Zt5yLDhj8FBezs",
  "key8": "4vUeHG2ciHmvaf8Sfu8g2MG3gvh6b4HLFaS3JyovB1UDDZUkeemURbeyu36NhyP1MNMSreVs8VP8fCAQBEf73Crb",
  "key9": "pfHyNUJdaFvdDRF2VtFv5Epy1HA6UzgeDuahvf7PDNzE7k1yERXqSGku9YaTbFXW6QCAk3KatdEwMphpNQJrvD4",
  "key10": "2La4n1rstfvmqKaGhQBdhR2XVYWji1qzCrPRAdmS9qd794kzMmMcyXP6E1QFajbgK6yYrgctG2H1DipunDjjMfxb",
  "key11": "cajZ6qApizCSxnD68F3QXCcSLNqYNqjMuxeoVXoP7uXnJsnWFSXPmz4YTA2BGjiaCg4tVT5QEe3CnqYNrrAkUbD",
  "key12": "5hpMuWJx6daFUdar5MQLdUeV1TCS9qk9stEqqHaar3tGKFx44KUkC5guSDCHLpoZxXTEekcCHE9QPnTpZ9fY8fU9",
  "key13": "5hWd6c7zKVVQrzHiTnP6TCrNTVzKLCAgk9hhvaqH7XvkZEVnJsji3VLa9D6fVGMCUiHGt8dRnA5bnBR6kfNfeZVs",
  "key14": "37q8iHm7qjsHzPu6thy51juu7r5maBofPcXBCbhm9H3RZLpomjjFCQgiGjRpVQx5QpMKf4ce4qzyg2gvzuwXKy1E",
  "key15": "2xRzjsmprGBRpnGLEkKywNm9oAp4oh2rEiqJbKKUQjFRNgzqnHpHQ9FG4QwWRGauodnCkCdPRRJdHxTYLcW9SMN5",
  "key16": "2ioVKyTrQbU7ZfehwF5o3SPEBPp7JTQFpGKqWp9KJmjLAWPkdNj61PhsK9JwpnpbYzhVWenJDX6xJcPTV36Dq3Jp",
  "key17": "DdHNmazjqt3kKNFTkvvsexk4A2QHNXn95CWoU27iDYTwx3hbkuk46Z1d4vXWVMV79H28gFcDg8CLm5iEostwPnf",
  "key18": "V9JEYLgQXwvz44L4nnU1iDubvJ8mphfN2aZTojiKYZvmKJPC8cFr4giySGXVLwaYW7pfC3BC2wUkXitr32sLT5m",
  "key19": "4N9yF32FCxtvJmoy3CgEHj3W1Hy8C1nTKUXViQT9PKa5YQztgYrYy27LvP588Wubi5C7YPvuVXhRHBKLZgzJAxwJ",
  "key20": "58KYgfRmRjg9xD9evrnV5R3LErAaCBXsYtjwHqdbGM3Jbg6tF5ERJ4vhQZgXs2rZUdcfNU7wwLsq3ArehdSeXbN8",
  "key21": "1saDqLjWZWf2fDYBGj1kvezowyoThaLujELnvewGQPof9o9KP5AS5Q8tneC26zT1z8nNX8V3tquoMKq2XvNXqCc",
  "key22": "9eGNm513ACYNYAcNBvcX3uxMDQmanibUWqFwMJCgUHW38kTqPfSLhMiPTcLdgC19V1HQsQAR5VbVU5BRjTcAPy7",
  "key23": "4uHuk4jkWcM7BTzmqrbDmn5YDKQ4QtwyvTNN8ez6kjvXmBfQbA4sAC9pyN6UADXnyAkBaEN6xDE891M8kF7dcigp",
  "key24": "bAeKq8i3XdFeS2xRUnWzPhDYVYWG9JBXR2Axcb6ZXkSAStApKDr5RBaNCdFtQCpY8LV7u7imBVmFbm6rq9k8ezd",
  "key25": "26SyS6Q24W54TEqedrFHTfTooZg4cF4TbmEhKbpPyHE6Q9HxCWWzt7yYXiCCbb94bzg7AfF6JXXzcy5cKPD3wfzj",
  "key26": "g2632hZtbAKR3twmPTnY8FC6BDQVgijcRBAmeCTeUqZtaomk9GjobfYtbbedu3XPWrqQBcXxE12jnwVbofXmzgQ",
  "key27": "5jgcXptuAYXQds2BXa8Fj2a1s8CWSipEriaowrGuPqMnytsACBd3aYzxpa8croNteUQ6FoQw4DEw3zQRym8tG3wD",
  "key28": "37BdmHA9waUFHKAK6qrFpFh6HxoDpf1kSqZUcUJpXZBVE4FJwvrHvuCz5JbtEa9TbHdctNTVzrNC9FndDVcNRYPR"
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
