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
    "2xSCZoqR9k1jYManVpqPKmUAHqYTuKUQW9XCPigNbCSMLezCSfRdHA3U773DEythKk1oSbGCN6FA9EZztGgZPcVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UB9HWLHL6uN1L2qB44iJZSBa9ZJ2vETFZ88kVhSJVK2AikfrVKJZfVRyrPTGXTUYbKUcrjLoHB9WcyVMxDrhNao",
  "key1": "37ErAAYFw2UZqbfeQ73ocbuKudcX7WTQgttTrPecx5thHgLVwNipo1Yiz2CkwKvwrgbx3ZsifGJVc7arJtrMmefX",
  "key2": "3JugwFaEmpneUyibH1VXHWCucvpExo9aDiXgqhExZ529k9ZpA224YjPUo1LhpkWVPLMLRLDVB5hJwTNadBXdJ1pf",
  "key3": "viNF1M9cZd2CCFBGC5TiBBgNELr5xwckxARtPVA8seQQZ8xAdKqF1XigMrZaHfMdKAszBf7UhB8Bbr1t9itwf7H",
  "key4": "2p1n8tiTvZbWg9adbuATjWroDPMv5U8ymX3jHRTNu65yYnpgeW138cWE44Ei3DTnTmr9iE15WadECQE1ngiVSPht",
  "key5": "4oQjsVi55TNKgqggzvJcjXrWKb8ANxSmgvwDRSkAk2qQfdATTaak2HRp92QEbhRu2RDV96daX2MPpG66y9gexWUN",
  "key6": "4Gxr3gcvQj3jPPMvrRdKPMZf6ATMsNQxYPnfGGYpGCmXjHsJsUWYsvFi6M1SGwcJ5aJmbaLaGkdsV2iebcrGTR9T",
  "key7": "5vqBWw5qKZwqFfEnxZEu6N4hXiGwBRFTgeppnUpi5VE42sWGV5rpqonjr883z3EXy8ef6H4MuYmhKTBVCGZja31",
  "key8": "38e4e67AeNEvDr9qWockLQVSB92pYZtiCRoEZhUdi7vi7JzEnJAqasrtaK54JYepaJkVht4hns2ADJigmnWCJziY",
  "key9": "pqfGY5DuehScosecBnSd7Z1hSRwu3hW4Bpxs4w2yGHmiDAoALUn23qwm6bDMtNFnDdz7g5EpkQK8nouoYxeLgma",
  "key10": "5CtrzZBtDCWjm9TYtSJFCoJfgqqJM3f6iWNM5HngVKMKTjyrb5CAcC1PhPnBi7Lx3jTUnxmfc2S55V9jungkf9jN",
  "key11": "3RnF7duwB2wSqtu1kTobcL88LtYRnujyV2yDrpmRDq42awbSJp3jFVh5iLp1w2yiqG5VfBWbXYMcpzAhB8kxiLfq",
  "key12": "3mgoJMe7quAZbrKwFva6VRMjfjQVEooZ1EshiU5R9cavnhi3h3m37g8samvN6w5AcZJmi2KUDmn3KNZM6p9FJxsh",
  "key13": "5YWGBPpcmtAqAQvVGUMNTfHkrp64hmjG4Yt4RQGGCQX5zbo81kqZuPb74piSqpghfdmTYMmSQEzvWbxEfi1sx3tv",
  "key14": "2Xng8GrotR9USp9A1j7pbfkWLGo8UaZhmRa4pMDfdokUjWFaMvA9k1FndSjcmXvvFTJdC2PUahyLGh5TfkN97zDY",
  "key15": "4nTaYTYEXgRQjRgHCxRWkj1A25974vot4eZsjmWKySrBtBG81WwqEBCGGyyXQkPYYr4uZmad4TV8ZVbHSHu169Kk",
  "key16": "2AvwAnSRpqFPcEA7gj1EhW1gQmd1fhrfNPy7aqLxCgzxPzxTSuFz7KC4Ze56XXRFppQBRoFTotYiWQGLt62aeJvK",
  "key17": "AJDULwyKh3cVXGdrYEVA6cxjeLyBoUdcXQLxKLbNTJ12vfthJjWPg2xTUbgWVSMURCDvbvw3DriL23EyudZrZfE",
  "key18": "5Fb4mehvbgdk3Gob4rFQN3sPsYpzKDwGWkUsqcb98AewzKq6A4o5VJbYjUWywdwKRKDvAUt55NKBktFoVVVbm4JJ",
  "key19": "4EvgiZ49TPdUN4UdUNSdWzaC2CwpziyWioLeoR4BohBeiwWFTCMvH599CpqgLQwX2McPZmWmwk2iiKWGeBXjTvoa",
  "key20": "5JTbfLq9PnVW57e1sbyJ8Sb8L1dwAoSJYQdFrdzqvHFE22ESJ546h73Xp6HKKo6D7EKrq5qd1pXjWXDWnoZxQ5xL",
  "key21": "aJK4K6gYiRDTEF4f4GWNgtHq8Zfifr8QBWf2npjpQCBPBQiNgUEFSXJFqnMHG4tHo9v7LTvKRtSaqq7KPusj2QY",
  "key22": "3iV7Sa9prEeC61iZVQRnx6gx465BrDy3L9W5X4kMnvAzcWP4o4GJQ2HuU6uaRAnUHT3ffPNBvsGPyPAkD4GhBhQR",
  "key23": "4FmCu3SMup9tAV3gKFbDN3Lmh4XbLXZjhT1VFDMeQsntNC7j8qiYfw1oPXemvbLv776iFZrrCQRyEDgNKQpNfVQq",
  "key24": "4SzjS1sgoz3k5v99CHYWosDRaov4jMovZj5mKGga3NrgTig41U27hiSjuKc49zsHXPk8gXxB4nzacYNWmj85hj3M",
  "key25": "jyEpN4LsdeBkVjaitMx27xi2yAtzGTBwcK6ADXbJ7ZnECqWFK52FKEeMwmNRiBzx16eNfP1axWpsHJbZJi4871f",
  "key26": "3ujQN1D5s1BFZjZc5YqsDuRJbcZUvhZpZ3Jr1ipNSRoafWTSqgcCXNypy4Q7BLhbDtx5Mi8uTbGZz8HKB4Mrgybr",
  "key27": "2UXC9hgrvBdRcGwNZud64oDfBocQpeg5JNnpixbPiNgCRkXBcJp5a3CmRrq3yH2SgUK7AzMUvBfU1UXJCQhUzEE1",
  "key28": "2pTe1DeBUQSq5FeVYVZ358f7tCLchdggTYKViVgXYE4H1RLZkUEdkGAcMt2aWohK5qnQeNJCuepjwWjeBHPvH2LU",
  "key29": "3USXWEJhRuUA9TowZYQGc7qVRFmHM5L8tAdmKb6jE7smPx74YXoT3cYDgxdDMzsexQdFCcvY26Zni7JX6BakajnA",
  "key30": "3w5iuxYd1xAEouUhzSEDN24EBhWPum3QRgS6ZuDuNVnfc8qBX1dX9dnHA9Zjirr5ht6LGJvSbBYLptzmVM7DxtbB",
  "key31": "4rf6n3hEDKHcLwCULHpLyFdotJTbqUUgC9z1oVZP7iySfP1XgBLPHfGWkVtVeKBjSUZB34cbnoyGvw3r51Q6gyYn",
  "key32": "5WrS6j9JR4n2qjSX5rHUi5gUkZwat5M6tYRm2zmc6wCPcohq862AKZgFP7TXzRVPGhiLRodf6xG8pGS1fJjjnoTA",
  "key33": "3Gqy4Rp7yszZdXDgmgBJb1vCiTp1iEck8rXCtS2pZMXSN4DQkcaWcRr52ULPQuvaymkqB5UfUFnDiGYqZiBto8ru",
  "key34": "5FUZQBeZ48Ei4zKiUNR8aSvZzcbgpxFHtHiJygvGE6x4p9vtiQ5sAwo1NYbqQgundnaKUvQ7XnbpEQJ84Jj7K84W",
  "key35": "Sg1kqx5oAmnatydj5fU2ZQ3omFwSxQ3UWBqv2m8LsehsDGWsxrC3D2JQsHUELzM2VeSrFr4YG21pPEUyQJJBzaa",
  "key36": "21Xvbomu9azcVD3WW3PhF8NVQ5uCgRc6FZbKAvs3Qyw6XuHyMgbmujKfGtEh2oyR2deHCpEibJK7JQHPQ9WBqB2u",
  "key37": "dx5Cr6aXdCrHBaWwLdwR81sqiNBQqDrem4A8bR2vkv8tVibqQmRCkHAQDawiJsHhxJHWAB5kj5jTNcB7z4TXwJi",
  "key38": "4fxxJFPYGBCsGWjGPJxMkSW17vv6j5xheWULtk6bWSCNzaYqV451zmow9Kf87GCyFf931PEfoHZyPz99bZSr69Ex",
  "key39": "hFPciFsjr1pJSjhfUUSh3FzgeaJUaqcmnMfxftbhEcKNTSqSYxRW8YToFz36oMFAVHYFX3pGttW2LZNTzfjfZpr",
  "key40": "5sDfPWivrpW9XyVNf5DDDJ5ws79ctHTPZMPsAQt8sm8vDinw97QqGJmJv3XMmrj9Liudb7kZ26Hbnib3EaEHrxoY",
  "key41": "3T2ab5RLZfkRYy7crMDTJTK5AgerHtvEQMN747ybYZKpFH8NQa6wi67aYEGVmGyWfpvqvevFgLBZ28ZYvUiUHJek",
  "key42": "3vGr6sRyyAoVjJYprCfE9Vj492hRVAFgqWVD1Wid6tp5RSSrKbsvxTWJB5uBngGGZT3TX1Dfu6MTX5P27RgTgCek",
  "key43": "2hEbRtVozXXjRKzQ1hcpzMuxjRJ59HrXmuWQdYNcrqLMGRKzmRCcKyMMfuZjHEFdM2ysSMJPbYjkAMmuxgBy5BPY",
  "key44": "3Cvb53wFrk1PFCPdFdUiXKeZLGabcxD9tuCd8kNo8zsvN2FcPug4YAumg9kszm5WTtKSrVs2LbKNfE4iHkxKQew3",
  "key45": "2i3mnQyCuTAoDAhqqhq6C2QsTDQ2kcN2Kas2nb7FWWXUTWkdg7BbDcj83mdi5Trwvfr2APj2SotdT1e7mhJqCxPc",
  "key46": "82ijVDCEevTn66kjQxsB3QGaZVHyVu5AH2n4fkQVQfffP6CXoYVNYwRMNakEPbRzDbMQr1WAEuEFvqbannxZ5Tn",
  "key47": "4VtCmKz7dkqFSsRAXygbSGqfbEhxqGsu4QicvfeUJMNvmcLyq6ivf5adQGhk1MS27UgQLZWF76RSEiXQs7EC3ytH",
  "key48": "5UHvAFNokYM1HiQBaNmtZEDf1SJgd4hz226DTrNheTYJ8NZo4mPN3RSmcxxQ265RafnNV8WrVsXTBrW6wdKwmfLM",
  "key49": "479VDvbkRhgK2VbCGkQZUnWEU51z1N6v13ydQPnXQn26pLdRya7TEyd98dGa5YYDgvVUQyHFAvn4FKHM5Pj54dXC"
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
