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
    "2M5YKS8mN5PvhBwvKj48k9iMk2CP83pCJGMnwNKcYucNtGEpZfAMuJhh9DfoKMmKczzebqMoKGo37PUhMvyjMzqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8v6f1jp4aTvo9srQyEgxu9nnJE5pMuXDS65kSum2Yr6VnBndCNUqz4DqV4JkJKizqWgLM1zsx8bVr3RYNT66j58",
  "key1": "2C8fNAaARm4LhAhEH8mKYRmDPcYvD8EENsgeNPbPLhtvRYSwFSw1YtRV48DNvYrv4MrroFFGNaYn8JrgK3icmGCU",
  "key2": "2vaxTc77NVjXnp2YApGdaxtXyX5oQMAU7JwoBo8MpiBPkTCphKxdhPgMuL68KQzgPjC7MuigGpp1GcTqPfd9SGam",
  "key3": "5UsSYJmF8GgPqNGtm39xpGJBjqnVjPSWBggo8EzdKB1C876zrHwKmGEwyxsutEhd1JwiUxgCmCxxHRXepP5MehSR",
  "key4": "366QKkKwnM8dE7fE9uudWsZPV9eNw8RZt2icEYN1D3eqpDXT8FGy5v1jgvVUJEy2hByn8EvTPHvQuSBWTWyM4ozx",
  "key5": "AYxnGre69H5eG2NapRmKi89TgmQFZB7aBRGeVwN22u4BLwbYfHotL6HiCsRVtLRasCu4HRUVucUwrBaxkbx3Mc3",
  "key6": "VYfRr4WFpNmU6kJFcHVvk137BqpRenyiFNR6f75YeSh19Ba8QYrLdZnPpEEFb16PBSziE5LHKUdBAE4ZR3gkTdE",
  "key7": "3cv9E2ZQDNyoWa5CX2b8q3xLrK5JPH5dwKaUXBHpkSW38ysCAWnRrUTL7qCh1ovDRtk2sY8aKZ4ayX88DafUFiQZ",
  "key8": "2shftJeo7FvbT7ZJv9APUAM9XWXPxcrbALHddSW874UqpMNxjQ3frob1WZ9jJiHBy1bf6CEiBT29brcSkL1v4VKD",
  "key9": "gNHtpBzB9X4JAoidEqQLbXFwTuG9bybnbxcvSLsatPTEQUCpftsDBYHGg8SP83iRBf9gqJ1tnTNynFCgmA539Pq",
  "key10": "3oNaELyqeU6m4rpbMd4FGRJhEupZCGNTCW5CN8cirQseYrzmTyQjK4mDXNHawTf2PfCBCUnc5Jyeki1NaCbCafcm",
  "key11": "5PrkuKAUf9tmCUcHPa3ZQ1xNhrs7GrJRS85wVWk8ByqY64VbVAP1B1Gu8Gcezbae3vZ7wAHKr4PHVfh3q4AqNB3i",
  "key12": "2DcxCvchqBEjnTHaDbs6qy5iDnCGCj6rmfM1QD7RHTWo738tD7DJJdUQ8GRDF8UEk8baM4XDxvXDx5woYH9eViZf",
  "key13": "5UV3YbXmKeoiw168CQorzhgmv5GoaBKJk84sNGvhrhR5FPSVif5bDTjvmkZJeqFYQaj9ee9B19uit8YeWRaEeNAp",
  "key14": "SxLTn49fPeCpj4fSsigM7LGGSd1VPjaHP13js7Bdzfdi29rSshZChG5RJcAAR1ej58Jirrc1rpEephzddhEKhHC",
  "key15": "2YaEacwYhn5ww2YUvzJ8RhXat3F77DKTz1L3HQ1uC4X4ZyzPpAQT9owUyxeotjEr9pqAr3yg5UtNhP33JbpMjUz",
  "key16": "n6fK7NS9YGm775yPJwbcLB9bNQH4Gory8r4846BNSvcvo4dTrrzKLtbtTk9tpr2YFn3ABpKnVNdGDQCKFMH9e6k",
  "key17": "2WLMDtVUphRrq4bLtxW3XkvrPH5zNtq6eyddWHTkPdHzKmB3MrZpS9Aw52Kf2UV6aVmTNrfyk7G8GzkzLBcEVHvy",
  "key18": "5uNjS9ng6QmDXQC6fYiNDoUK5d763KjkyxBTkCXn7ksZtMiKizMfzZQmvWYWTT89b8pqqV5jWB4B4B1wVpydEN9z",
  "key19": "2Tt7whqmMAXcmmGyCgM9bns8uSxxtDPMwecD4a52D2myce1V1gGLqLKpJmRcRqZQNDYV1aXADoooREP8SeQm3rk3",
  "key20": "2dPpGZKTe8tFUegKbFQ1VVBBEibtBvzJtUADMP4kp9ufUeChh9Kk54zejpfTfTeM7Zn6dgTXf2QtBk97eNEqEQAK",
  "key21": "2JgNMpbjBMWJbWoevbQ2TDrZ9Bz3QLsZu4bspY14hXHrZ75ogWs3kDCzPUdXFKGHAkFN6YmeJgjGgsTo9fbV9bi5",
  "key22": "2C7Nvo9LwVSPH3rfB22WqeKBEBNdPTJa8L8MBEtatmWeAfV8CaPY4kqtU4V1Cp8fyBsu1z6nbNdbk9hAqByYuSh6",
  "key23": "3o28uq57EC8dVhAg4LEFAaKsBvqCFMvxE4ZSyE8yF6V1rkeEyXKGAkCBjSJJwyvkgvisMz9tPCsT9U41HsEBvpxk",
  "key24": "TKr3Tma97hiAYURcBqz4bGWa7rubyymzVoi9LTMT9vp2w98Kt6qgSvRtZux8tCchNX6vX6VqjngBgEydnXi8tej",
  "key25": "2HedbMcFf7VRpaNZr1KFMBUaz5JwMUMND8JLXU2KtDR725WYbe4zXTkfZXdTDpsCmatttEuiFtzKr4FUJAhEWeuc",
  "key26": "5NqDN6CD9nPKfJEXaRxRGSysbQadCt39ojCFh8t4em1kW4XiCy8BQb7axR2GbxXwNgDCGoUw6vcuefxNEoPCCgxJ",
  "key27": "5Ran9ZiDg9WBhrq1Vcm56r4h7R9SZJxBv5xFGsGiavM1BkTrM5UCxjQtCPtTTGmbe3sWUqhJPaFZeCmMjS2xreSX",
  "key28": "4cxBKbR96nW2tqUkCmgtjP5s34C1oC5vsXUECoBxv3RwEeJ8kmjxYmiMajKzoiZgVKA1TBPFrDfDFoW34Xaum6yu",
  "key29": "4D88wNrWACYfdHQXaSQsvmsixWHhaeu5N6Bo3M5CM9V5YBccWdhuFMjFSF9jPJCaq8nusAp7DNQsYhe5PSARr1Z5",
  "key30": "2hJdt7JyfBaEYswezdnDkGVYT1LJ7QWiZYEhYCZWUxy6dL9fseKHvxuRLky95fkyn61qSR53X2vcgJXzf3jzbm9F",
  "key31": "ZnSqgSsjLEnfxEpRwjrXN5yfR6TfagcFZBpVMF3UPTJjrCfB3KbJqeu6Wb5PjZ2mwPwjRwz9QsuFaAppt7wue7u",
  "key32": "2sUeY3yKG6ZENd7GAofSntvE9iwGZXeHSijP8UMCXVgqsmBo9fcDqmExuideS9QvsTWJx9ToTKDo3A4BxSYrMq7c",
  "key33": "2RcvTiMWub9TdbLVbFyN9NiZwEEMiVpdHC5ZSGVYajuS2fTi3zp23JFjA7o2YTfh8dwRZ8ENtWUhyuzfJWyokDa3",
  "key34": "4yNQMzsw4v72QJcBLQpqJXYDkEgTpye3Cxcrz6dyw2QDdMXhnMAKSh9SCKCDHqfFtPgGQhvrUsXDoUMi7ZnzUtEV",
  "key35": "4xrTkMwbPJAFBgoSff3ke36qTDiNK8cpphCyw4qLiGY8F4dfXMrdU38GsAvvZDF9UDL9r51tHU2J1PiHKXHVzLM3",
  "key36": "3aYsBAsXToNGhMsMxPdUwucJHiw7Rtif75xpNvfR2BrvcATxNb6TL2Yk3gmnX16a158ZyTZ4hSDuKAhYYWc4MCBq",
  "key37": "2w4GjVfUiR6fThkRpLkiGQ6ZUqqRcaxYKdqacMdy3FD7rjZ4vsNTtLkeCA24zxYo6Hm5Hhwx6TbVEwMPHgsq1kRL",
  "key38": "648FWDQbB8eg7utjSHocJ3W4fjYZCMF7zyXZzitNj6RuGUZ26MWpvGzVdDrW4GZBkrFXBPeea5VmphyKjfnhn8mg",
  "key39": "3yfXKWUAezmDyjyJ9nkntZGr9phdEsifL9ZS7nb7FSuSR2Pt2r8yWXpwC6jVy5CpLBEJw4KeMgkiFjJzE78ecG2z",
  "key40": "2VyZPDr8hUzUdCo4Hp3Ss7eFsWUT3dUj3GLSotYj3pz84SLrzHKLpJodzdLvxV1HxxrpNHAswdtDbCnKN3iyvDzi",
  "key41": "3mxZLXDLM2AjmGvyvRhfWNCH699foFJ71z5MryCyBJv18qDfXYfHnb1bTF3qWRQM17cHevvFg9Fo7t732eScGBYU",
  "key42": "2hNfMf5VuuHa9xHaDRTSCxtqENdpJ1DdRsNqkWg2MnEFazJ8wfCbGhZi3oojLjPTibi7jtWsGTFz6J3yMQRGQ5N9",
  "key43": "2MM1R3iNmtCP7kL3TtWcChbcDd4utiku5zuWmyfG1FQMkVcH4VYeixtbWTBNJweLy69GUJDtrEHejDu5LUSXWYu7",
  "key44": "4h8vSCPzms7HbDUH7v7ji3FQTHBck9xoG9sZ75qstMDAG9ydaou1RXrV8zsBGfQNYuYhrzPHMLt6Nb29HNkYHGCa",
  "key45": "4WZZp6w8HBwkcXevrc5RTWXcQNzhW4Xh6oLPcjVujodAAYUAxjr871xDqRnE22u4DgxK6fNGVpz4BN6AzwXhvhS7",
  "key46": "4eoD8JPdvPMWjZmKP6viPebT2WwDj1GzRUVxHw7px1WiovsEq12DtBzcCTPNGds6hU38gBGNPofy8g56kBT5B8Wa",
  "key47": "43xWzZCbhGsd82dbGwqFvgagk9tBKo1J6Hn2YW4xPeQpsbXsxBe7NBeDpscBi7wxRFGcxCKMWGe5KDrA3TDxW8BX",
  "key48": "LPrSg39v6stP5szojitUxZC7UuP99XZWWTB3CFxiVy5PrWwiDKXYArkuBWv86nRDcEEu3TBsQsWPJJozEGCeYAC"
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
