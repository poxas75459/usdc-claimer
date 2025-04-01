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
    "48fW58AeYFpds5fGRYaWTSdyQMTmNPTG1hT2SjHxXtQzjqgVejv1UFStuDUw65cBDaMVJp8Z1USvEwwrw7EGp2fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiYHSCDv91YyVBBjiuPcijz9Zc2iVakMBpsFWrFPGQR9d6NSwVeAHr4mmiByRoA4ftsCDNqw4FixYWu3xLRT1z3",
  "key1": "35qTWo6YQYW6UZQTjqPeG2wvmsexfNcaVBavYmhJMzcRcpLEuBTAdDSLhZVXVndtUwDpdspabUTYoNCJMLCHSzVP",
  "key2": "2G9c8q5tWGvNSdnhEuq8ae3inuE64jjsTh1ZQNnDLfRP8m4PYconmJDjiGCez8qTGre3eDiovNLGC1LH4xfWXe4z",
  "key3": "2Y5QKh57LmWQLzCTVQM2mpnc2GPBBfpPLVBbWnCpMJLRk64Mw5QmEetEegW1XNiWN6Yo57pZLJLg2sE8w1n6XQfn",
  "key4": "34kF5VNiYgM6ZQsMXwoThXsYuZzkCroYxYAd9zcCUCeY6JqVasWPjdWT1McvXdV2iZC6kwohHZN8iRFUJHB2fywq",
  "key5": "67QJGKE4Xc2rTXTvR2uFNwPFhsNVhz3ytyAnDEkBsQJijMEdNb76R5oWrxwf5VXUosUHKUdZ5T9qXt4GRz1974ta",
  "key6": "4GZtHCyBacmkBK299kKvPKpQYWteXDEumZooYZrzLpP8BAK3pAd8wewy2gjABs5jDFXQin9xz82a7PJ4CoNUaeFV",
  "key7": "Dp4PSYZ9Y5BTzjCyVANK2DAL69K1VKStMAv4gZ3sjgBUDpKHh1iHk9qrGaNr3adAgg6kzc2PqD5HzVpYtB7SZ6q",
  "key8": "2TEYSVXgq6iXqe59erwXehgoKXPixsGubmo7fwRaDZT1wVUbDNw2gK7ycouLb2yKRiaZNjvSQduSbsmYiKE89boV",
  "key9": "5d7N3QvWjVarxnNr8N1jQBZ79YTZGGKX5YJuY47qvVRMPgMRaoqemRcriZJCYSebf4qLf556Rfvu969jYpk7QBDc",
  "key10": "4YuLZWheiYkLMygYsX85DgkQYgjpQFHnpnwP1zJdP6nadNJdBFaufNETGMj4gyFoMbwighAjJHXgFTxDDtKfABUV",
  "key11": "4qugRNJVkSGLvoaNr8rSrdgRnkJxdedJ1gxexf3wskivXoWcxX3iqiBbm9NDi5XK7gfcLM7DopKz1SRoizmbTti1",
  "key12": "493SjZmYLQymydHdYtz383BevEdZKixt83vs5cM8EwGyDv8kSqDrhoGwSFGejBnP47TsmATwfWTwuaoLgtVpWBv5",
  "key13": "qzBR9PJdb2TPhfS2UXtxNQ8T9QWGFQ7FQmxDjjNC7TPSGD6SyET2U4gmZJAaP1cWXRvbcXGgkr81YbXJkKcRMVm",
  "key14": "65bsAGAaX8pCJ6dkvdw8wgGnQenJFrsaxMoQYmGmoh1rKCD6SR4cpQiGSMtbgcAqvbpFkjWbiKQ2gEgbFSnYTkH2",
  "key15": "3sQLduSmMM1MFXCoqMzxGSzJasHnoj6sZW6vmGjvvKjj3pNrSpkrgJMYJwmGRaT6YNaJWamCLBsGSRHNyaCQj8gn",
  "key16": "3o6KQvo7NmUs1gKyxEdS3VNKwgSHQv7P6JFurRWreTTUoFsjmuAtCPCEq51itadYSRX2cNuG4YTNTmKie2RtKsxQ",
  "key17": "22qdBrsj4V3bdZgG8ofFe1vuogL2NQ1s9pzSYKbEuuyHVZAVRrUW5sDxw43gim4FakGYxT4XpvySofMzeugRCh8W",
  "key18": "uCLpecHYLdKwADVKRd77hNirFpMVFFz2podx4zsHbo5UhDBLPXfkJZ2JamcsvAMyGS8FGacFnJeSBerjJCeZ5eK",
  "key19": "LRXoM5vmfcyjm5z2jDRKSkDPH1bMNduuepGA9HqkM9fDuxzK6nUsgTahwX96gEkyxQHX1aSKjiHH9aptkprBhfb",
  "key20": "hFURhhiWAq6z4CCzKpSrxht2ZXnMDY7YsNkBYchsCVDhej2Eqx88ZKdvb96SNz8EgeiYyshw36TxhCbGA8ckCYm",
  "key21": "5QkispcA4Jdw29VS1i5b3TF7qeSD8wzfuoTgwJkNiRHUMMpp6LhDWdjgbLwPKJVcsdyv3d69JoDgisoTJ55GzRoq",
  "key22": "2gj8b6WXvyJWZRhVZdTvXg8WonWHirrvF5JobzLrUsvCnfK88CUooHYKwLtGrtDoXEMYKizJge27JDTf4dTWQwTZ",
  "key23": "4MdfKqueu68MFXsyDmbWbkvjXdJRCDrWgsfGrxN5XVEDLMAVyEcsFBUjDUxAVker7vZ1pUYx8jLrcRQ2HzZcahTX",
  "key24": "5RjEKWUdcgqMRDsyvQvnadNzZzfkSxtYrCyDhzPxsBR2V5QJQh1mPYvWUm5xLRL9B1sLi9znnRfXbSyLQuSeE7Vi",
  "key25": "3BtPRcydWvUWfHExrPfC2Tgre84gqbXzVhMvG9boZz6pKwZShxDiHXPvuYqXdcEi4TgwnooDZnqk3SZ9CVP5f6FC",
  "key26": "2YJTZFACjg5mga6ezeYkFtMTY9QuXiLQjFW88oKCeuie4gxPcQBGvNzbZEy2SCRZsnZEWUCLkLGBkykZ75q5SwPC",
  "key27": "cezHwKu8YMhrUw5MrhGSV6dHwhimqtWhFx5UgVnaUiL2Xdx1PGviBPzc777L51fAei7xZB4aGmYJAnXZSw4mXWD",
  "key28": "SN4vidw99cxuso1C33VWNtKSNYaefQLaGHiaNhoGFa1G7KZgVJKfw7Lkf3xcBU7FBMMkUgrmfXbZ6oYLkbhqmV1",
  "key29": "2D4sRzV5xCZRQ793cWa29Fx8a8P6BfriktbnsYQJQX83acQAkLtkZ5ki3fy3TsxUrmusseaBDShh8pXHwCk1UTYh",
  "key30": "5kd5QpbvQoqLzwBYRpS3Gd4hLWvUtMKYU2YSCYjYHux8ygMN64nqcgDow767DFcoNHsb85j6JXzN6eFvLc9c8zBf",
  "key31": "5oMmY6mbeQU3hduhamFrqrpu6NU9BPQeVcukAff32HfTYntYL7PTWfjjD8RXm4nwckrsCj1vK7Lnq8ozuA1qUT1n",
  "key32": "63Q4d2ZXbfMTE7bYnmk1bqzXE7rrvenNqRx2DHxTYoT2k5qWYx1tvXJs7jG9nv91N9kNjq1Nv9pmuUAfiKcNCcj4",
  "key33": "3YhSdyzosSE7z3ewiG1PT87cPts9gVHRKfiJQutC4hHcoaQ1UN83Hi64FPeMg7TcfK5hCjUrjLUwNobz5BUKpxqb",
  "key34": "3PgtSgjAFitnCypQWg856UXwcP3gwfMp27v7VrM7uCN59qWevoeQAezTaxhHCs1rRxSJ28WmWYw12d33RDutTDNd",
  "key35": "5MvS6qsTCRi79KW378MiinGEgvDSqqDnLQq6839P1HEjR8Y9LNeDZEmxGKE887nFoDb99xyRNgy17sQQDCq6ijvy",
  "key36": "3oxc4GCrwdpe6WYPqK8ZcqQQnDY7rsJdkUmh53s5p5mPJXXG4SPmjcbafR7ETWH4W3xS7bzrcTzLrMBV8t3GrNYP",
  "key37": "ZHYa37Bo9qLDXEaRKpX8dUtF1EY5RLNkMpPMjCcUMhXzCyiaoJKaCADgTV83zCcSXSxKppR3y5bGJ8TZguSfyGD",
  "key38": "2TSYHXDjJgabGgsiMv29wyfscVwu8AUDpsCBeiYQm6CdZ5Ha9z5ZQY36aoHydP62djvNJn1kNHJ4dinvCfPuhXKE",
  "key39": "4zHUdKVWSg6vpN5Q7CxpjPU5LWB1dHM6zJMewBCDarpV4aco3RHuW8ztL3bQJgNkLmoSNrvgrcog7DeEcKwGMz5v",
  "key40": "oWGpo6YzaDzxRAQ8QsjUK3F6iPeKDqWe6d9hpNh5saBxavmYZr9CUywheXyEn51ehYwx7gBGj88Tuvbh6ixhpb1",
  "key41": "49Ru7dSnnX3U5cppfE88UgryberRRXg9W3dk2E4iUGQB9aQLTg3C4EDMyVZztB2QFUqyQFTfupC8ad6hHgHPd4Lk",
  "key42": "J93mpcP4vRqMGAtm3wpgEkRq51GEsgp6vxqDECDZs9Utm8gtid6XriekB3cAqtsj9wPNp6ydNmjoBCHPBibksgU",
  "key43": "4Ws8pCA3JxMpvKAY5DJtawkNyrntWS7aTeQ1BFxuCG2N86G8Nvt6o2hePnM6nQH5f3eesWCJ2z644FEj89r4FxZE"
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
