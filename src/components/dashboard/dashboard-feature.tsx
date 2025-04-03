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
    "45sb6WWJpRwMxHG9dvzL9rpMm4mPVqT2jcx4ctaNEMygva4TtSa3eq5HyEFpNxEAQLfwkyscvNfRmh7vByQHcpcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUddtStuCwEBEDqQJSN6UBfM1QVc4xL55tasAQRwigyxJ6ZSiTnvMbBWJp5AMbzd6nSGwJjneDBEmEDX12iBnqy",
  "key1": "3urTiR93c8FvnNrQ4jhGYf4rXfg68hBTjxcBmUxDQK2FZC83hqUMKwGz5iqn31JK46pVK2e5e2d3LuZ9k2sNFGj3",
  "key2": "5tbBt28by8fQ1HRVKwPprVoekqKYULerFmxsvQ3dTT7sgWy7D2PKwobyPPj55YCe2abXqnm1Kn5Wp7h8PoKHqRjL",
  "key3": "jdg18nuKrnU3JeDHyLk9BJkjV5kS48iKysE4Ct9BtEM6Lm4e3d8gvNebTKKKAuUBmX7FkcSg9xKUapa4NkL9pMz",
  "key4": "kwmYWYWw6Ee7A8ApYPLGCE7sNoZvF485XwUWLyy1d9ZYRZRvCmpW2zNHk4K66viDsg7BkBnUwodpa8askCNjJHn",
  "key5": "2LsBAVPRrp2M42mxasfUGbDzMabHygXEUHr4jHD7cnX4N1wn87hcX6WLpHbhPNGe7ygdSkShmRBtxHQf6RGkKdtF",
  "key6": "33AENLNkezCLrrPfyL3CHuczNw7drqZMfHHXQEx4hX1Qn4t7MxN2nemA1wXqrG93JXqsteM7tQmVeDdovvrcdTHw",
  "key7": "VjQYHciF19D7zonhu5LY7Ybq1nGG2WYBnGFNgrn5eyx6aokHCEwviq2HRcM88PBiJbwohxT65zztmWwxtjBheBU",
  "key8": "5NFvVKJfAzWP9ptiVLwXwQBicEJYnT4NjZnZgUf8oGVnA6oYgtx92wkv4iVPyFEVX9MTLSf5JPUSgDmBbbWxyFp3",
  "key9": "fAcN4VN49Lie8McYn1Msg99Jq2ppejSoFgd4heZ7ShsiCmiPw4R4ySJtKHAETP5oZEdEsCD2nhLqe4A9sci573L",
  "key10": "5VPeeVr8xVmXFnHAc1E3pCU31aZKBNYQC5wz8US3d73GCMWHJjFdHT8sTSThAnvaqnrq6avkfzfdSdT4XCBLUe1K",
  "key11": "4wH4E5dRHwBHYApfeCTLAGbJg9cbd1vhdc3sREGDuZfm54eqyDTnT6BovEc7W7WBAnvXWZwV6LYZPEoegoxBgPTu",
  "key12": "4dKTKaypX3UeBcnbCVGyr84oZTVhydvNnmUvbaWNvJh7zPUmwtqMhp29wxMbqaXSWg39XneUw2WZEeUW7rMv6j6z",
  "key13": "2cyrJ2aiCSh2Xyhn2P43gze4S7P8DakBwZGPE5GPYywM2HhBnhCMBCLsiUcEv5Mpge9DJuJuYPmWiThHXruXdg6H",
  "key14": "nb4GY43KEwDzG168GLx8J2geqxN4qzZaC9bnamGNDGto62gGFP5PH66Wbat67C8uBZACbPiw8RSZppntEAGbJva",
  "key15": "63VqnWLBqkUCxEECmxEPFx4oTti337F2cvqMt78G9BMZmaPtF7oFYcFAWumbgySU1v541wU87Xvm166t25Me4a2d",
  "key16": "2MYXAePXd8xVuaW81Qb2DGUzmxLSkULhHHDndH6hsXBBP3MZLRQ5iga7Z61BzznEJZEVT9G8L49bSEXYMp9Ch6Gn",
  "key17": "3zJDhLwow1ozHdQePkkf8AhyrRKujWxfsv1eeLZRPot31s5CotBJpSstEJVsnraw4UuDBfMfEp6Yb2PUAYdACcbr",
  "key18": "2nYMeGbA2DQyknoLjoAgRnSBYzhC9ybBhqNbCHQW7k3ZUbr7NnaoBi13Z9EyV3tbwBypU69KmzfwAhq2545DgUQH",
  "key19": "4dDU6PaW4vLZvqbaVBwJ7ybbnMMUAo4mhNGk3k5EYo2jTAgt5bobuWAcDYfjKETtvrxz1ZsvEz5kDUwAwb2xqF5W",
  "key20": "vx53ZLLqCWrjNnWe2SWLq3A2pgW7ixx5qyejf22PRpXBSM8gKLbppqwWjmU3k1M5hLGFoLnB9FkH2Pf9WoWYHmc",
  "key21": "2TygcsW1WAmtLeR8mdX44NecXGnYQpiXr5yt94B6AThdHBdH2Cv1uUDA3Vm51n1g3UB36r4SCzQUj8SDiWRE92Xp",
  "key22": "5DM8aJSY2t26dZJmBkwzacFtdmp2FGwsn84t83CfM4mUwRisemaBSbZ16txgKfgvFbrwQtAvwHZEw4JyLG5HRZVy",
  "key23": "4gKG95V62F8JZfqQ3YPjrNgekvgS659J8zXoA4KXaewRtS4XUgtFYazt92qFpnQBZRCqo8mTZ78VbmbiKr6nMrb9",
  "key24": "2ZfUEjCn8E8pd9MXkXRb2D77kjMbYiPQVC6tBscCAKRrKxrCvxG9ZHVScDfmq6ZUrW2v8E769QH9HcPcKo9iEVps",
  "key25": "32bkdy2Pvhagykqk7kz3R1ezkfFHcx2J6mBW3nv5N7UVWDbdrJoVEQkD9EBimaHc8jXBqNvV8nco87VZXdbR4NUK",
  "key26": "3fgV1NBBCgvR1Wb62sT97G6y6wrzJWETxQaQiMaGNNvfA9wHJRFctoZ3YyYiZGXKvbThS7pAoZMYYiVmFt4kmFcp",
  "key27": "2mHTngGrKsE6WgMmujbHox8Mqn9rEBgW9Fq4r3utVqJD2hrrKVUdLwBx3dn5ZmfMhninucRyvUAHMXTZnHg2q6mn",
  "key28": "5yMt3aJATyypcpmLW4mZbQfDWdah54XLhYSXVy2zUy5ycMCrbrw3x2xT2ZbhB4bMEC3pgXgNCx6Wf5k3FZbwHQPd",
  "key29": "FHMz5kJ8rTpcGRfbUAikHfomWJoYgHEu9dqmRUZrwoTKu6FRikBiARZi4Kbw52n7W9QNkD8n5pac7DHynVXYMAw"
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
