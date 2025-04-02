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
    "5dktoM56ytj7u6FTEd4ZJPsNKjUWDieLTHdv2n5rxx2BdFL6EF6ZUYo4eopqea6rc786H9MpFJwzJrmP49kvfJ4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vyw3N9Hw9PkLGPF7mGmE6zSYT28Rd6SxURrZdRTL5t3XHd2PQz6sb8WL5N2AXhvQtJixZ42BjGStzDUU4oVkCAw",
  "key1": "5E2kSf8swXW8rn9HwJv7A77SLdw2hLtX6ta6EUbKEmmtppYKXX1Fka9YHtHFFvje3RjVk4QGLyoTxSMgqm6GHZti",
  "key2": "48G7yaJTqMyUtV6NaKBqurDeYEQ9q3YuRHsiYe3BgtwMSnvCpam9VdynJKHsJtaFbeDvcyjJbGX2rsAPbaLNGCnr",
  "key3": "CpxYhnUjZwzmfqAH5zDhLNX6TKkU3bWiUoKYVxMX4q4fWZxvkvmkHaLKRNaGEp5jjZTBL7v1tzQ7wPAkNCLArYo",
  "key4": "658a4EG7D3YtJdsbwhAyyaKuBTyEVSJdeqDXzTdxg87hEbMGCAp8RRQK2cwoAEL3hn24AKrypddBwLWZr88BTvSj",
  "key5": "4wwigb5317Et6sGcgCjLJNy1NoW5TfevCxvsqxP8dur1gZ9xLCWpYusYuaEmz1qmFhhffSmNVQGwoUL7LiN9Qzce",
  "key6": "vf4A5PQ8GgAgGayeKBMavquPTnz2SFpzphgzU8gwW9SLyzv71p7EzNHSbUAugd8X6WUfD5TAXCX2kAq7vBphsch",
  "key7": "FLNpeV2jo2cNM7nDnQamzYh6JgkdJYaDKiZBSMofGuNW3xLYU2AeBNv3FaRa6ors1Cgw4G7KsnZSn3oCFfyk2QN",
  "key8": "3Qwgx8suefgdSD8hbDzckbSUoEVQTiGg8qQCztzSVtn8nBLLcGLhe3Csv3XYNX3U9dBLN6ctLSGGBz49tkEbNQia",
  "key9": "27UjSNt5j4jp6ccaw5LRVMM5J2NrfZELjz2oLvYyWMAUodDU7kGr5tCD856Yn5ThAHePNr5oWmoidHzAAYq9qtCW",
  "key10": "5Jv35MTqEhR42LXemNjCZ9kjkN9SjDRnNMZMvnJiULbmD2nA4bztUguQqey9QH19B68uBko3aMcUk7Lu5Mk3rNsY",
  "key11": "cLHztQgQoJa2yghRNGEZkXHpErVgbqYKb9Vu4dq33dCDnTuea1zwGqtHyaAYiEchCXkkhcaQGj9gnQZWKJ17qMu",
  "key12": "2cHMrLzxTJkqbHacjavYEKd4ESL9E7HHX3kBsbJjs7HYNdtbipYfNCsfHSgqw56cYBYvpK9R9tpWtQZkVNjE7pZ",
  "key13": "2NkYFJyFNx9jLX3ekkdnRvYYQC3wdxx4SjZs61iwAs1rNR6rdw2F99Bdn6riEKLi2R3ZL5yVz9oiwfUTCAGPLTq5",
  "key14": "5C3B8ZdoREJcJGtxqk7VAQHjNQqxQb22J41XMPUCmigr3jRJC7Fqem3eWxp2e9sYjX59q16YW6L8qtNhLvoCafkg",
  "key15": "25RbADzP62hK8M5713ed8umfePNbqK1eay8JVG4rHi4e1VHKjQWj43NBHE6TrAwLZQi4BgyULrVq3VcaD5Bu45Vs",
  "key16": "2EAF7ZreoGycTHbgqU1tPj6PmRQ3dL5zKTnxfNsqtDY2W7rAYBvHYcFj78QkrVM3MnWntZ2xZuYfu1vBzmSMUhHc",
  "key17": "wss3VhQJz5RqMoAiCBHFmKQX9QgQpAM7x4c6aXxr5ty4SaRFxaAwiyLCjLfv3ecY4NDRaqLRurZH7Vfd8H7eHB6",
  "key18": "3pmj2UghEivtvJvcBnEeqzAsYoKGDd3oxVthLo28PsjnHbk9ytRkAJsMQJtu2YZWUANjxB4Dj3HDA4Q7uLvbBgzz",
  "key19": "CKxWc1taop7EbdPvCNmmKvUzr9phYp6GC4CvENrWiF4ZkZipVfeqYaC35Kb2VJZs3tz9mqQXzdjL3VUeibAabds",
  "key20": "22iw5XRV6LmCaU2mDpSRsWTgBPhFW4h979UdXViKD8vbms5fRCXKT1umJH3yG7dutkfAhyJDcge6BTkeoMyh3A7s",
  "key21": "wxpXgq8E5W6w6FhfiXDQLDkRmyJsofqmcDvewKSLA1oQSc1wy1zZDtf1owxyuzTVUM3Sqpz1aYifWu68LNqzPPk",
  "key22": "4XodEr8ELnNmxf16TfL5w8frHxna8z21SaMSKdXG8dry5e6qW8Mm3TR9wT52pYUjDmH6EQD39cKFGpGs7aoEzvQc",
  "key23": "67HrfboUF1MBLwaiiyPHcd3dZLGf3QhNQ9ycDRr9rdxtXvcbeanUFPSHTyuyCzn6MF7MoL1R8Paa2C9oPQcrxEGt",
  "key24": "58AEAvL7vgTmaaXQczmF5mnx1VK8CSrHPYmxRKNwTfvzbL5hLuyo9AhAawx3APFkw8ow94CDLGs2SFyjonoMxqP7",
  "key25": "3teGEAbDiqBAEpRj1LriGE86kFzrsvAJwqkkZ5DqhQmkLfxgWJggkoitq9f3xY453uMYMKxLHoT4bAmcPevKpQFt",
  "key26": "1FAEpscDNRSF9DfTiYWqpmXUYsVG2oWMc6DAH94WNgYoQCB5jozbcS2JQwgFca9s63aQXPrwpmLx7Qp19pmZnZH",
  "key27": "55YHZhAKLYfFCj3N9dqrPB31xobvFQgQc8tTKFZJoZ6cDyPNYAhZqmRg1MevUDsTA46AvZMQSMdWxxoMSHwnNd6d",
  "key28": "4B4DEeLhHBffxESwVzhwWCmEFhcGoFejJcGVBUtQ9GdrVBpc9jzaXET5aP5ETLh4avrTfYYtgFk3aFK2LfKRZo3n",
  "key29": "5XQFgg2LseWTriMd6AfPnffbZay4FkX3JtrFjxjGc4f6WT6rdN1h9WSTzfxGty3mr9Va4j69tLnFFEoGvt96JhY4"
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
