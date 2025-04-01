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
    "4MZ5fUMTWqwoyCEbLQer2vrms7r6AVCQe1LhA6ueJY4hUEqgSCTT5RwsGXqD4gZ9Ya2GL1ENvjhhVpn2MxZ2PRhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uyGhAU48ueb3q51SBS1Ba9mMX3kp7HF8fpvSLUe9LWjeBgA6tUcZt4R9R4tTNdCUmfJTSxccbduY8ZGsvchuZn",
  "key1": "32wAwb7ehUDYvFTi9cJnba998nAmcTVCtB2A4QRvLQZuKfw9fEHGDKu9aoW2vh5yPbN16Y3eHJJtKtBtDYEiKeW4",
  "key2": "p4JPwBZitYq3R2fADJy3X3YGhG41EMSkw5XJVHPx33A5C7FxXrTPJe4cBuBHperF3sjbhYLeWirgq2Su2YqtVHE",
  "key3": "4GfVHf8Rmjv2hiDJMzXNjyah5oftAWKbNTiR6nMZkdsghsuLcG94ojJgyfALbRNSMzfNVmEgUg5UuAo1iR6WjVCG",
  "key4": "3QdoV7TNyxmdrNWseEixVm2DSCFo6cWxy1hgsioKJxzt4F9v5dfg4AQpmmuYEVySJvhDVmeQxTFFpYVuFbxzy2Fn",
  "key5": "2N4LxAzfAnpHSpNPdiLdWqzPzTPd6cmQY5J3sR9puVReEDYwL9KnSiwZ3SZrebF2Sr6p6pqk36ijDCxkds6sYSQJ",
  "key6": "1qyQ7uYWu7VQhaGw29Ssr1Pupz7wxu6ZhT1JUfHTgaaJsoAdezQt9grTMcnJKzGb285ivxWjkbu4dTsdu4HGoVo",
  "key7": "42JmrPEChgnCdan288gb8p2uyvKn7TpjeZLiYvjqiwWdTsbCHcdRCE8dB9RQXdXaxtmD4BiZYWdYCurWzFEx9RKh",
  "key8": "5mojUaSqbM6HiM139ucr6ewH5n6W49RSWsPChAZBjCDrf3MHNsBeZxvMgdzfFLDVKFpStXM9bkeJT4f6CXSuuuGF",
  "key9": "HcqfAMp45jDUHUpWboYRpcJdxoudZRLZ9JyzJoru2HpT6ZJHE21Pm9P81i6AEhBxr8B27xJGtcBjPHb674LYCue",
  "key10": "4dfBehSqSRvr756FwCCBHd3iqoRzUzoY35DjasL83eTdYGCtHydPXcU3gGfgbKL713j3kptjBKffcYpGjGz6zD1J",
  "key11": "5RWDfTUz1VeQ4FzbeYYSGxJTdzHpa2fkVwYBKHV6FHRg6SWHJZBFMxPxAg9wmK9Yy65RxvAZmdoE3PK8pfB2RRYd",
  "key12": "3wsryXHazETmd7dtWEUJRaQiiafCAHoGDCcYdufq32ZJYVEonbFwC3hH9GguVF1ND7m38KCM6pj9e7Z14XCmabEU",
  "key13": "3RnbBkz2iQTfbWCcdcc6rA5E7tJaFpLSnBsEV1SCZpJarK1ELfzgYgJgnJpZVctQdpCTDte5ChgJNDXNkN2ghZqu",
  "key14": "2hoqdTWHs88rKXbpKfXV23QKR7atrmtUj3JnmkEMy1Nec2Zof2Ai74csXoutWzZVPF12zM2i8Yy2fcBLshAQSiq9",
  "key15": "3RTNkkrWXWBzwywTuSMkRFCGUaSWvncZLNxG2fdHFNXbh644pHeqNiLDytL4312MtgipinaYarqPb6Yg7cxHyKpR",
  "key16": "4p9vxzUUnGt99SKu1fQWcioFZVgUeZsEAUKRSvgEmx2gfA7MDYbKWgmAEWHBUd4rzT7QmvXyJf2g3WRfQd4q9cd9",
  "key17": "5jBdnuPGZytHyRFqEmUCZch14ryvoXbPpDcEK2rfFbQbPcqYbDwxKrmHmAB8P5H9p1jM4rqig4ZZYJKXjAzG3PcP",
  "key18": "2Lk8M7goyRZUGKfznzXgsscuHRr2yJggAhR5LKzhFxqmUAMu7uXX6XWQ6CisuXyaFWWfMEskNoMaCp8gH5LjQ1Cj",
  "key19": "2iRx94tms3ng6em5TQ5VZfwaCAJuprv5PSext63hAuKwbHBvPzmfhmEnqEdNwSfVR2fsUdmUoSde4uqWnGaexr8o",
  "key20": "4ba1XxJNjjz87F5WF6bYddekaupAYDLqoVCuMmqSy38Andi7iYwGjWyhhhuFJbWZAX5QSUh1vnqXKK9nzZoVk7Ag",
  "key21": "fnV8RLgzdkDMQ9CWZnn8uVhbtQ9BuCd1ghm311qYDN2ffVTp1ntvmNH2ucyAq1Lugxf7CnukHJWJdPJB4NbF9pb",
  "key22": "5jsdHmYshDmYKzZt8Hbdm94KgvgGc2LF6GBJdRHeQVU4B8e1ZJzEu1j5w2mBpdeTjdekKjacVg1Mr95tCwEscCSj",
  "key23": "15X4UbBbqVisgEiKYtE5nsdgyy2PtYhiXMCqq8a33y2KMNu3qsbydeNdjtu36qgNU873VYdNLasQ7Mhz65kFurm",
  "key24": "4dmymZmF58AoK6YRue2RNjRUyiQWUkCXF9BVrKhXiCGrsqKbz8MPTv8Q6J6Wfpr17PzC3NCsLoHVCEkD4bT9sbe9",
  "key25": "2S7YREwEtzvM3J2wA88dA8PUExxYkJC88A5BwhKMBccvaTWmH1X6VpRVXDxM8x42nTYh87HPBNDWQvS9RkLRy7gg",
  "key26": "PkEyc8PzFXL8DWyQtefk5zdBTzjXj6gpbFL7dFmczmKJ7yHB1egbcrgwMYGu4PVYnM21KLd2qdSFqWSfzR9aCwD",
  "key27": "4qskPwbWft4PcGhcXT2no8Et9S91a9XqPX9VSpDax9zNfXZaDYWcGH5URCCkQNfm8PPKksuZcW97pXm8QH1mVBqV"
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
