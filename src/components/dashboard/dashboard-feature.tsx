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
    "2EmwBgcxx3epg2ihdZXHNrTo18VGsX5u3iVUeAjSZoMVUGmvtQvvgnEz7kiDoKTqSESak1Cf5ikJFzosnp2Y22Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWLmGywoWjgnmYRB4bieucCBS73huS4BDCL6uTt33hz16wwgtjxNzkspS3hyiNnXBSK9WNnYRDSCsHezCp1YKbP",
  "key1": "4TCwBVWGA1RMcQSBQxLKpqUUkcPrgpARAqvKFGbKfbCaVvwUa85h8H8Yfv31pdgQrbCYroeMpH2WVjMxvjMp7qhX",
  "key2": "3ySSfoLuLxaFrTDdwsRRBmiAuLRZm2aBBKrkd5NuxHwV9LJqf1w9YbPr1CpAG755izCTk4AmACZUAKXVWokuV5Vp",
  "key3": "4X4wAzGTiG9uKhANfyxc44VLhogD1ZUgrNH5JRK1wHgxUADvoLjUc3ec6WnwKkp8toXst6wMBTf7kRwApyX5scH7",
  "key4": "rVTHZCiuWoHLap8sHeovooi3q8PMdfCa13ZBn9xHj2cxLW6h7eu9bSZpCUBdZioQ3MttB3YWmQc2LBY9epAMKBj",
  "key5": "5bNAhP6eZAzCUEhc2jBuUHBBFcidMDctzLykHkoEoz3qekqHYTKwW2edmjzChbd2cb69B4AxgWCooW8YYV1Tc81",
  "key6": "33g2kGaDFKsvg7rdbn48NhtjaXqNc8QmWZ5wCpcNEz7wj1thd2gVzKqs7S2GHTGXrmi87B2CgFz42vShZ1n5GV9x",
  "key7": "5cY6FeG9BQPZtqTfoqRyXiZqLBKeiiWsbFtwZrWNWWNb9Ng7qsBWHzbJLAFRwzDvnvkPANNo8sH9X6P9PvkqRiMZ",
  "key8": "4Y1qNzWbUnHWErJLM4npogJ65gz9GyuUiqGxBc4MfkaD1bTP9Gvd17BqXEkZTbrhCZSYfDLKCoapSrm2NDTVHH6g",
  "key9": "5DgFLecHeBgPMTp2QAtub4sY3MvFSuLxhvk9or81jVY8TkuhDgEGJJJSLcuhLXg4gpj5wJup1qMUVwXXgvpq4uUB",
  "key10": "4S4KXtVgi6aangu1BC8QdyiNaqGzAhqY1keb5UfsqTFrkjGv8ZsqQvS9Vhc4Pcfbbf95YVTX8MKb9viW16xoEXp3",
  "key11": "2hRjyFggwagAf4Jbf4wyDz5i1zikD6LqASvDYfN9Sn3oYyAxRuvo21FP2HJwmNWU1PVAx8hkHecfwCf1FvZPms4w",
  "key12": "44vNk3mCv6Qw7SFKVLsgehyuHuD1zA3WjjhzNnSqR2Pj6vuyTkcBbgTKx5g8gDCFWpqKgsTq9iY2uYtTZ75zkDMN",
  "key13": "3YiYZ8caKUVD2WQxTbMCpTrb2dFQCWceyUXjdRKuXveb6U6HEhDH6FKDrCp4qejCuTCtGgSupH7mcGvVAWt8Ewau",
  "key14": "3XoUTkcmHKgz2rkFspdr6eXfP39mctP3Fw5NVu5KgQxLR64pcoHAZ26FUi422hTdEbk9D4FpPUTShiLeUxzr5j3Q",
  "key15": "vF2qxkFfsKbg9s1hCc4oUNyCtQoRJsNRybDy1dR1U7TJcJSdC7MP9t3o1xECs3PNR18mFafYNDhkgGb9nQp4ptq",
  "key16": "3MRxXVkNQyizsmn6SWeFTTRA5Ken73ACfPdZ51oD2qVWr5bxu7cK5csru1AubTCnKFczWzSqfNNicToMVTM6Pjb9",
  "key17": "3ZWz3M6zZYDgPXgaA1j7KihpFEJhpoSk3Pe2ws27tEX8M8TAzjEVmREy57sekgUtc1yzyzHSJn4rRDPZpVPpDFKF",
  "key18": "613yMq9MzEJyNLNxX9tJm5WqH5dkd1nASqLh2nKXYknqjjViCtfqFXQKmNkXNktPfMZuDfbSBLP3HBTQNr5BceeK",
  "key19": "2g29JPVz9viWfFpoEk9AdUKXemRDUqjDTUT4fmY794oysyL4b4fAy9VKqHgxbanxDE4XDMmy7NLcyw2EouehXxrH",
  "key20": "5CF55HsKCZVPdQa8NTNhLcEKA1GdkJSqQ3WJ6G2mAGbtSbTuTMwbxhSDrisCDTm5Nvv6YoLUvLGM86GZj33awmxW",
  "key21": "3iHuuhsnmcuCxuKgGAashCn41x7D98sY2p2vCiiqrZ5RHF6vh6GdBEorH8HkUyPaC1yiaeAcFtr1H6cyNagMzYP8",
  "key22": "681D6Z1awKKhEF217D2fG8NnaVhCxT6dZCMBoitDg2k5NayJHbgC3APwpB4WQDMgMqpqSWFLJnkjC3Fqnokem5K",
  "key23": "PUxmy5JtscG87Bz6FZZ4tRL8T5nXpPc2Vj97Wb2UCLEqMTF9BXKxCbZS4ALLZbzuuL2rCVZ6gHY2k6YTaoETSKA",
  "key24": "54JWaVpd8cHb5W4U3iAWUnmdCp4eDqRifNcCAcGt5obxFAtemW3G2vL2kEMDos8EeMjuugoRr88tP3dgSmiFgTzt",
  "key25": "FnMTpJCSK6vUK6j2ZTbyYtRL95x5oCJqdTcpz9HUHbALm1PRfVpdEzCoJojupygnuPxLmPQgbdK6XPnJcpBuiJZ",
  "key26": "bd4ckyYh6kdjgUNaM4EehLKnbPXjf2oB28EqApSN5DQkFs9yRknrpySQwrvQvhe6cxpEhhAeg6zEJtMQB8CWzsy"
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
