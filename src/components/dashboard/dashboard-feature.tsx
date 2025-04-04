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
    "3NutwWWvsfLSnseA9Vy4u4XfwQfBftqMFLbMZTRdjrbAcHTvRvZ33W3NRcHxtoRej4W9d6vueKfRxpwYD8aaQWd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAvq9dRHAXpxymT88fSrjvbX4t1AX8bkv6DM2xAdmCVdkubWgWNpcJudiEcH7Ycb9M92DAyx6dQxdkkw8Y2kVX8",
  "key1": "3EJ4GkKnmLHwph3vrMREgC9XyyojrtjQ9rsY7bCAcnqp86ZigKhnySZ3FsGnRKRRTNFJwzjpsbgYpAYAYbAXibdU",
  "key2": "358ak6A3fCKmnCYzFqsfnRaPhWxvdtnYoGf7TFcKA1ZU9u4wLCTnYyxkKsWiThpKdCfHZE97XFb6viC96KnngQEb",
  "key3": "PJ5vSfsgfNLeJfnzforSTVbKMQGXxcAdsSgorw8otUgoDt3GSFra9fZY8oLhmwALfjeYv5giezGkpgKbp7kNgL3",
  "key4": "b5PBbn81UXYmXZZsA9MCXypDUfUHoKDrA4eqLYiJ4mTCR3yeyEi78ycDc366FzLxU1NhBQwA8aWE2Cqmny4e5zy",
  "key5": "aqwKtwhPiS825B858gPeRBXP2yMie5b2EuSJjz2DGVEud7FKEjrezriJPihuLUQk7J3BNM5EZzcHnYWSSyWb6FD",
  "key6": "FmbVz3QHzNJvL8W8QME4EiLtGXFwCJ4jy9S2qa5tgGWc8BjEZhV3Yu2WtoFpoz5rdae7XaBv1Sd1Nma7gV4pr8z",
  "key7": "5mZ9M9uoqiBNCnpBGH8FsuveiBHEPn1cMnwfkH9hSuK4DSfZLAfzgwMhT6oDDCNXMELz45Tif3jvxB7mqxtcuR4V",
  "key8": "yDAtPaaZCPTZWVS5oNaY3BPCtyKX8NZtRpmCsbofUYZF9QBqBZ1AKWjR8sLcdjYLoNENXP2FeNeKPpGCAKtFvzv",
  "key9": "5d3LWGs7kM1YZ3oQ1gJhTFsBXreu3SF8SvwvXpnzcCbdh2gaTrf4sfqMhcspLULo5XHKoupJKVEXaqaExUn2qQmv",
  "key10": "28BMb5aCMe5tG139fvHCHHiLThViiyTHz84nuYapXfyL1kd13QTG6pQcvHVFJ6GDtnid1jqgnGsFFru2fVLafsmp",
  "key11": "2EWm5qXzQfPKLhYhkJk4G58sijqQumPzJxhLGbyTAgKEZra9xcJf8yg3v9F3ba5BpvDiiEbZGKRtGCpnvAVxMzDQ",
  "key12": "5U6mEWWxCD3dsC5xbz5MTUG3QqyMEb2TNQaEJudfQNx1ec6cHxV67PTAh576ZJnowQKsEihCKHXoaTLDernzYSWb",
  "key13": "4GQmS7AhJ3SPuYVoHwboywmWi3BMbyVkRSquEVt1cBaZMxiSqdSRxxEa7jaKE4eMDh1STktC8bCqkvEnZAGu2i9x",
  "key14": "ZBFA1PupRQYQvQUaLNbJcUuHvywoMdamT4dv6PNcLFdZizvbDSfkvSZmM6Bc4m5ZaPdZ5egm2wzKb7yHBrFZVRz",
  "key15": "5oY7x1b1e3LnEXr9fTHnp17DsTsL5jyXNFVBwu8ZT1kNjkpyNMn1jMJXAtgDR6iy4Mhq44f6Da19LRdyqXwGSPm2",
  "key16": "ovwZCPGC8TDW98JJGRuHA6TPEMM9ZVPqRgQsVVFvazjty4zXQnmsAE1tBALgWSiGrGrsqEjYP71otLoea3bEkDr",
  "key17": "5csNJ8H2CrnfES2KWrEeLMj7o8SEp6wcqKTa57j95iy9BSBtfRq7uvCgM3VX7StF3X41zphjNSVvqhhe66KxmDXW",
  "key18": "2WzYCUZ6o5Cv8TLK1xyyzihvzMWtPdsxcbFoJpSh3uBL399tXbUs5vrMaitmYfwaxbQS324EpY3Zmx5LTxSKoxwz",
  "key19": "2kHS4MsJv7bwU85S2HdCsant7fhSM5W9z6maMJpdr62m8Woxf2rQJGAsGZgiYfAqThtNB2uGpGrJXPcBo1QsDNdp",
  "key20": "3Kint9nzH8uXBtQHCXLtjw5XDSWBuRihMFoRcCZGnGFbX5zZAha3St86q7kpMRSQagRxRzubR8C9BLaDS9YEqBzG",
  "key21": "2zHY8XMvUNmsChdd9DAMmUhhkbU8W4vpA9LQzeanvpjscBHwiPgRLVqnCMFm7SUAPnMta6dzNmvKh66XbqhvK3PH",
  "key22": "2nxAAp3szwsAUWDgJrieMddvtXE3AneciA6qJ6i2M29ArCc6oPNLL5antX5jRQYUQVnBmPRGtJgCSeK1ki55AQFD",
  "key23": "5noU367NziYtCQ86ovcLCtr1HCSUBcNDX9i2kjeWZ7imgUcNx1z27VDduKccyPdMBYU1DviD4SUAXwfhdoA4vw4Y",
  "key24": "5xEjBJ8vNRbHtomH8fMHiqWF1ndG5ck27z53fuYkDE68GUL86STm3cY5oB9en8RjMokGGGK8vfMZUH79vVyqiXsF",
  "key25": "31wZGY4aXEtnVywWLPWu87mLdL1dkdvwWJDmbftM4mxuxEEToheoS7YSNfKEbNSu6MSAhkBe85S937hRjC6RVsMn",
  "key26": "3mVcz6c3gHvQyxkm443A4bnZagHbmk9w6G6RWZFSqzeQqFsneDKZRgAzD4pT4u3EvaTyYnT7B7y7NSiPU8PahYkX",
  "key27": "3FdgaR8JvfNXP82eXYTV77uPG2qrBNvrrnUofa7qYZLQr4VYb35mLG8YfrqNw4ZsH3XqcxXJpgQgBB3MxQfyhPHR",
  "key28": "5rkM7ktgYZDhZQuoVLt5bDSuLSyfZ8N6jRk3eGVxpUod5tDxc7hwLkerYf9sCbWzhAnpMNcocyPGvHTKQ2r5VfhZ",
  "key29": "2pZk9MoLVCT3tLRBMbVVFP2jZkAk9rWMq8j2gDgg78bdiQHzW5gi5aoDX9n6x1PctQXG8p65BnYNsCVpQfxMn66p",
  "key30": "FpUJAcBGnw19ryB55rLWZqPEdUgTou4xzjhrcatU88iZM8XjW4gQtdTvj3ujFCYgnSKEN4PN6pyYEVnLES8vwV3",
  "key31": "4VHPUHrvDHD7pbQiFue3B9AnZbhosWVS865e1Ce6k7eL7XUiufKCJoV3w2FDicZ6Lkc8sCk9iBzKwGWdMHuju9G7",
  "key32": "2pT7TQDDB56q7JmQaPQUuADKKqS14nLQkQP5xXP1jkQPC8iDZ2ZmXdTQBujqToMLqRq27EMKD3W5FBFMbtEUm4Z3",
  "key33": "3PBhgoZnimgtTcsKjaTdbLfXFZtxgH8NFgKE4eAy4hpPPCXWdHVbpmxaSDepH4bDAZyUzJDJnjtoADtvwAkSChcG"
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
