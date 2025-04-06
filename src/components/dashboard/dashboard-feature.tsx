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
    "2rYHGtjsdUn8rE7oW51T6PKx8qWHd2287E4zks5aG1kRp6HiP1tp1fTijmHkvq5GeRfo8ziYuTPJLbvEpdRCVj5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQwy9Q9ptjUZdGj8HkjXduHzvK6fsvSrPytbvWfecAtjxgicpfAsYU8d7uzBhekVXkR3EVEfDxwqfiBHbVKuEmU",
  "key1": "2BPkEE35ZnCDdVAXrx4tbQxYwJsKZMvwb5Efbr9X53WRtUd8oG7jatt4DG9xirhKoY8wkfJMmUFuPPjW2xMAAVHS",
  "key2": "3aMGTMiLzxkQEmBQ8xFDzMz1NuwtLA8FX1gbFd9MYTD7dzV8xeuSWitYUysGQTKGZh5fxKLp2Q1bLqdeeH655be8",
  "key3": "519iASV1o8PK29Cwag5PysNVUZxxGuWLKgrgy3sgcbwG67PAdQzXvqUT4VDHgb14WWQqwck3TxivSreqqT5AFofZ",
  "key4": "36VY7us1k9s1RQRvVEM4mw8zZrX6kR6eWagbfTc7omCCMhcn3M2KQVCMmq3stF8nwPjWUzz2kUn465J8Si5T6oaD",
  "key5": "5aTHbX68tywRd4F3KuZEXes78mjV3nBfF2h4YHyCGZdaV9W95KQ22ESWbteapkZPm6NKNycQSNyqCtPkLTG68p2G",
  "key6": "2JM1A3TzfkAjcKJ17npuXi1QS86SRA5YgUNH3P5EU89o9Rsz52TkXmPx5AnhtbcuKVmRptQteBQYH2gr9BEhqHYR",
  "key7": "37Hnn9k2nn3RgzthjbAtDKajMY1E4GtQJwwEVtGATJ7gNWB1yrWJCRb9YERWwTAkNrY989vA6VfitCQGvt5RB7F2",
  "key8": "2srAMXRVMfmriv1f2bPPDKiH4PngbWo6HV4WrSYoCUta2Fwg4d2CyNxqZGToXVDAJg6PUNaDUCpbWoBioySRdd7C",
  "key9": "4CzXCtPVqcTFpzspTxAX3To7k1zyP94FTzYpPWeDpTVwd6iNbkCoTBKSeqJ67AP4X8bCAT1RehAFHLwcYQuHGVJK",
  "key10": "8whEBSYWfeACsBjbqT71M995LZctk52XEe2rD8b6s7sWaJoGJcAH2fNoH83YXiVKQXm1C4Ak1GHvMR9dZLRNLGn",
  "key11": "22xQzMkTA5GzpXsM9f1cfQR9hP1N3X9Uxnnr16qZrVdttRHN9VJh6Kr84QVCC2yxpBS3HggNhp8mVmjuoeD53Zz1",
  "key12": "KkJMDXQHYbxinGezgRgh1DteLGHhPCNySohNMjnCLQVmdFiBhnfbfdxgAbKtjxd2DRW8GREekWMYph2wkgCSf8E",
  "key13": "4aCv4DSzm2Uv1kSfik1YGhUXJPq6KngWrgunjdiUfSCSotHeU3hauoudQhMtT9qTwT9HmupeVeuhs5zdnzuRz2jg",
  "key14": "5uyBTWu6BYbpnBMqGrNSBTV24GT7bb8ZaLMEHvrGkh8Ykf3ezpqC3ZmZbDbrismfbT9WNB4ETndNGa4aGB9djCYP",
  "key15": "3sbqhUWoSTPK93hGJBLUy4UHUCf8RDo4gpsvcecsPjr1W5NgHNGHt3d2XtGsAyVs8B7JTtwPKRTzkLi6zhwHHKsS",
  "key16": "4PV3LtrZw8CHEmkdC4CXxNqfwFJ8Nyt3mLmR5J3btTLBo5fbMKNmSEmmn4YGDoxsdRzEVx8Qek2NNgF5ZkKfihVy",
  "key17": "56QEfwZ4R4MLPR2s59s2xKnCkNCjKvBFfT2kJkJjXSdgX3Wn7AGd34eGeZCNMf7ukeCSmGkYEaVLrmxMUESZMqVR",
  "key18": "2jZWLnFtH177kcGuVaqEjqqr2BaNJeEct1k6z6mqNE1nz938bRdwp7qEZFJT2kF7JTt41QWkisLasWPeagZC5VsA",
  "key19": "39NeoX26Yu51DZttGyfv2ViFkrC8xRUjUNV2Y7G9ZJuFB742ZM5nUxDS9mi2Xo4SCW3YLNQYUNbMenin2eFUnHQE",
  "key20": "3poBqpyPpFofsphBJesfi5UQprQ3vpFAvv7NNsX9tAMozY4kWTPQpsfzUKR8JLuxVHe7y2H98cv5gNtFBwHeFL8y",
  "key21": "5UMLaTag7kwGoRUPpVdYKwYN5JtcgsmruTZ8ieXzAVJWQ7RvA9V4tFp8cNQ47o5Pk3ZAXtvMsJq4yUiQmFWb23MG",
  "key22": "cwq6pXeEyCA21hK56UnBvbXDRzF1ujaLGjikoQw38unK4kCvW3EJDtXSZzwN84dLe5XcPe2rpCaNpq6mYiZZd9W",
  "key23": "65nVaSrWGFbozvnHE1oLxirQTMjUh2ovoceEwfQVk9oQFdHv8UaZ48gzogxdvyVAv129KtWNj4Mo7Wvi6sVAEWRY",
  "key24": "ocNY54cAmH4UFumrk75FJjHDoJ4mAstmJY8WvDBgMDNmKEcrWAydEPcXSv5HqTJrrRKcXUPF8veg1gRugM18nyq",
  "key25": "4RHRQwVGSt1YXEnW9MYna64UBt6L7w69rcPfaw4kyxizYLvxtqtYXsVNymVjPfCk6gpwC2ackKPwxbRCZCMFo6sD",
  "key26": "2eVwg4o9UrvRMQdT3Bj1DMKvqSSrMM7mD37LPjRMArBDuybyNUrHqydSSdXeHyG7Ex2nVL5bZRRqCF9Wu2yFkDuh",
  "key27": "4kR2JaNbrDAodKh9chPc3dpw7GV7fXWLfy4FxFRFhJ6aRMBrqC5KgZrmJMQUGUWen9vEtXhQr79H54DYxpRNhuUh",
  "key28": "59h6kf2HeH68XbuZ1fNs7XXipnpszbVgxMbRjzWuMDyG6aajHD21GrbySga8JseorFoChR4bMX9HfmBgjsv2iVrX",
  "key29": "3H3vcCupzjFnNU2rp9vT5kXAhCaKfnQwEVKVPq9dmqoWq6jsHr1db19jgZUamkfGiG3GnZwGzvfKrptfVYvAGVBn",
  "key30": "8NJotyWDC3N2j7aYCTPjZgfFptwzxwMRLeiFzAgpCfLbDvqXudxmjYXYauqbWoNTi3HQgZyjgtaBRv3NJttDCav",
  "key31": "sPR89hdM4GTpsyJ7QsoJ5NRFt1ajvD14CrashzXSqhqg4RL65fFeD4s72ios7rk4BaEZP8De3ymvAY2QoDuHCZW",
  "key32": "44MmPnFBHZKyQMjwQSTh5kVLg5CZsRoSbyGdPwjxLaWGGw9TE6bHQ1VAzwPvRDiy8ty7RpEKmBuMzpoUV7ZaEKZ7",
  "key33": "2w1u4tchQFoaaYeNvGx8cGJqGw4XkxpsB9uqjdPVt61Jef7gpxTabr7vmXr9PBu9ywpmzpery2uyn48CW6gq2fnH",
  "key34": "5gdR9ddS9d3iTdDJuYatWpVT8VEUJehqLB2BujU1YxNQuuuwWybpKfQ2TUCUxxc2V2DtPQRFv12GRTiWNhuehzU4",
  "key35": "38TS66m4RZtTxUimdD3rDnKdMJX5GKXAgxBvsAMFR3KvyhaZBhqHwUXdbnEVbhBaTYpXEgy4HGDzfyJ42b29JUNo",
  "key36": "2wJ5WRxPs2aLSABMMc7jHMnXqU8RKRnyEkeeCmbhaApK6EDSoVRtRqKhLYmN2oXZvD9JrmYUQ7dZiuKVjg6usr8a",
  "key37": "5Cw2mfv7g7M7Liq6WLBXdgwgWAXu3MN2jRHhHLb9zYxZ8LiRRkCK89nrgppgZz8DkfmizX5fFSs1gTr4yGwWMP87",
  "key38": "3JY3VbcB7C28MLJYqzAJGbWKJw4jzycLC1kho2jR6xPebjPmG6DcKAm4C7RbLkjNqjfkhcoAtWjYvKDaf1Cx223L",
  "key39": "4qQzn1NN2S1zeCFLHqGvKAZZhYm6p3v5XHxW2Lkf5QvQXe8H4ahcW8Xuf6Zpx6ZqXp1EVxX28ikgF5F8JGJfWSia",
  "key40": "46wzQnrnWqFhUbGGnQao9ZSJZitgunGkaQP1VuTeyWtRW5WU7gbEkSmtxmkvsmTxUN3CK6E6Dhm9Kg7bMADSuKjE",
  "key41": "2bdgmRH9KYCxmiQE7p3ZWJp8X9pZp3KJXoR8SBAj8eb1EFdPjACSKd36edAQtMNi1CiS5xH6SpTnhJsE5vweFRcH"
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
