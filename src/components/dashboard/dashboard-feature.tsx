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
    "4VrgwwW2PsDGuh9HMNG39obTbop2mW5L3kwEUSQXLdiGCXdyU6H442KF2wyH9rNNxr3diquAzVH6vmmQXcy3gSXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LHN6x34V1WPgTH2N3vFtnHxZ2a2mdkxgKBYqSXAQmKsj1nZHtYTvMN4nyMBTk9DpdqTAF1t8XrrHo1fLHGRFYoi",
  "key1": "5gn9Cnc7kicZFti6LdxaA7MMnPpTLhFegGwdq8NG782mtix3dPb8EAsEYmSwcX4BMrH3upwae7TtmFShuwwS5UyS",
  "key2": "5JxN6EdNd8ULakx5axJSsoBs7ipqqAjHFjVrUuwLQ44EoPVWnZH664ZWPLefymKSrj9asgNL8Xz3c5GA5CxuxTpd",
  "key3": "3d43NRH4ZmVem3gDrr1j6NR7vEdsdiu3y6pbutgiueKpQ75ByALXWruiA2kRgDbzmRPGFexNA1ZkoZWueJF7Bqxc",
  "key4": "3AKQN8cLvvQnYRsr4aKyykCLHuJu76XqhAsQAMzMKcyffivVY3amyZu5i6CcNMkJBNaSmgZmbDg7nuu1cCoRp1jK",
  "key5": "3r4CQUXJHWhkBDDiAYWox9QBsxrqWbJAEPyBqJM33gujKjvrD44xQdMsV6urNyhzQ69pydNiUfxhwiAHcbW2KDoS",
  "key6": "4KSmUZ3jm2CkNaDwJ9fTKkPYPBpy6DyfRaDrSkH3gYHXt3MHm3wxSo1nHDXJd4CW61cu1sHfUYXT2kQMqJaaF7n5",
  "key7": "31E171gy17zCFQurNZoZUFX7WfYSgM5d76CbGXT1Bc9hXuZrvZ66BkQ3tnko8dqC6bPeE3KP9XdqfPgAnRzBN4C4",
  "key8": "2QLPXPVCxBaxyzooAxigC1YNn66xhDnE2EkLopi4RjXVme3Cx2z4RoeZw49BJ1cJjC2jJXRnm1xGgLjNfq4wJWZh",
  "key9": "357Z8pEEfREvtXkcauYVkXi4iySzYwYg6cScysYg2yXdAVt9mcZFvKgqXDQKDaMpzzokQKj8FfvvcVLD3U8qrc4S",
  "key10": "2gHJ74s3FY3gLEfb6hYXK9o1dJMEbSnm7RKKASrEn2GnafjFCgDDuL7sxJuoB2bypQ5vuyy6eVPo7PUvsp3A86h9",
  "key11": "4B34oDBqVSB8HjTe2sowAo9j5RL5nmriR1YLVFb3zExdCDPzajEGbTpi4B3qT3aEWtj1Fmn2Y1vPXRNmzodpR3b",
  "key12": "4WFNVaQxpovYTeBCsp3jrH862jF4nxS5YFZY7UqibogVUwd2FTB6s6iChYo5rWcGQi8pWuN5ZBaT2Mq9CCUTo8dS",
  "key13": "2qsbB3xm9x7WEjPEm9ZjPSG3aEuVJqk5Ye4s5v9rFL5pztvKgb7jD45sx2xR7sk5BU2gunLoAsciogDuDdUSLB4J",
  "key14": "3hyReFZr2mHsqbRLe85BvPW1GCrTWcMwMDKYQvaczBSZ8KAgTuqaEmJwrV35N1asENNRXHcsnpoqp1DtUjWPqdMZ",
  "key15": "416nSdVVryce2zbMPK8etY7tqb4QPTLmzvo48Jb3BN9sBau9m5w2UnYdF8z9fNY4rxDVtDyFiYYzbthx37rwXtcA",
  "key16": "61xhEA3Phf4BZSH6ZKWRBQ8bYP4M6MYT2EsZSX4KsDj2fbUMFJ1p5i5uv6DZmMV1GEBWuUAz9vGkf9HvrCD9eAaF",
  "key17": "631zkjcSssQm6JP2h3sYHbnhrjUU6nbLBVFEkRJBdGZMuErpPMqVbEEtd4YGVrF27EcMmuzoTddMmnfiyHFDiyPe",
  "key18": "63XNK84QE6xnzRoyzc2vtKNghsWWZE1eapERvhUAmqQcozxZbmYtbv4Z8cP1tSfPkcAHPaNk8xxMKJXr9ycwCKFW",
  "key19": "46FuiEBRpTWaduxwSrp7uPiYALSAZh8SBRjiQBA77SvjCKpEpz79AE2mPFtT4E6e4XdyKFJYdXCo9QSzY1zRmTCR",
  "key20": "4pMuc4Pt6XZiT3QQbH7NP89Q8LniyqsBjzTh1t771MpHGC3cBBKMo9kSNaxUecKEtHkPDZpVsifPFRgzmWhcKzyH",
  "key21": "53vqjLZxWRCsNqdN6hHrgnTJzKatsrymLcprAQaVc2jzDyaZiomVBGLKWpMHDPCkqHcb8jGnS7X5YUcJyfNtoNxH",
  "key22": "5BHU54uCbNKGuv8ZpbmVCyZX4GVZfLD4DnPDGDHtRJbN1AtUCgGBSU2B5Ph8n3cWWijkRzAHacEyCM1DYX45jbDX",
  "key23": "5kcNXdFvPFQWbbErv7t7FVFNkNG7W1oWxDtPWSi4vXdg4uorWGTfEor55z5Y4nqXhPY7mpVTo2pw5TVziLoTTKSf",
  "key24": "h8FzLxChR1tZFAsG95LnXh46BW8pNHrFvJc829kaJrwzRTtPrfrkzUaM8VfrgZRkKpqhBmupjFPDdrK22RgEydv",
  "key25": "4hfiHirQVFFRnuqdHYad7s4AQ8ygbKTuycsG17n9cBfUg8VuYaQs3Bb1zSSwYGVxHCeyxnmjqaMWdaKEhPBkcAWz",
  "key26": "ECmczw155n3Y2a7hmCfCnZQ4brrNFX92N5nUkS7eXteuRucpbm9dJzMFpqVfpHHqqz1qVZvG8UG6AWyV3QRZTc9",
  "key27": "2DspZRfymno4Judw2qC1zfATMsu6AMZEHWikt2kxUkEbRQPG9vs6UCqYRXEnekyWsxbAgBBS4xKACMqg24eQKfGT",
  "key28": "5oqHfa2Fz9qzYcFj58tsD4GRPWWAF1EFfUWsg2VgeQiGEQpRdtM1WTZBJ2crPoomKqrbs98DYNPcQDBtZAXLqrHm",
  "key29": "2LUBaqHXhxAbE4AWvpZ95QB2jELUCkevduRppJkBDC3bwyyqjZeTmSHuSefnkf43P48KjN32ZLu5Be7516bZ2Pyh",
  "key30": "63wF3Yo5q7TySBT5ci26bRcbfCpmDGKvL8inSh32Kc9RUENahf9fE9kMV3HM1vFuJyUhLvg1v1TdATAt3NxDtvNp",
  "key31": "34txtDdTVWNovZzSLQyQJ8UCnreouoF4qpG4Rq5QGWUaJes7yk2VwZ9ugeRqkFeG7VvEE47ZKQ6qdHPhUYUBUuZ6",
  "key32": "3YB8XNvbs7QX6k89ggBB2BZihHbCfhb1zsRUcYoPXNA3fw2caJPnvpZ1KwN8dFix4HiivfFZ9Xa6N5e9k3tRrAjC",
  "key33": "5515xcjZ8QZoTvokSAMwcqMY9oFBjh4rxKM7x1pXLtSW2NTDWPH6RnyvzFm1ZpSZHF4f5qLy7FCYdjnAMHvBac3Q",
  "key34": "3Dmoh3qyR55hFPUuntAVFzHsXq3KEBPuFxdE4jHuRefnS1CjFoLgLa42WFkMfP9cfmS91stop368kxqLSjw7TL7",
  "key35": "3rXZrpKQ3s3ixzJpQtadJwBbkSifpWr2tjVFz82zBtxtChr8zfH48txEbd3JuXrFvSJoy9yBvD6B9cW72B2oCK9G",
  "key36": "3UVV2riRUuMPVuXJvx3Zv83uoUxFdA7DeFbL4CoEpps5mKYJDcNHJ35hPGu2j8g7siawVUmVfrqXMUPb9oUBosRG",
  "key37": "3znGeJFto9zKa3xMaGnkU5K1NYs9fEDFKpf1voPVUyG5zoa8r3VxJbY83pT6d2Tdi88XrTzZh4B1YAucgtdtdRGd",
  "key38": "3hJDeX184VjNhTaoRrzEudeDba4RPZYxzu5AiyX4jHTm3rSzbDdEQtH7F13vSu3LswhZZhTpTpyRDh3r7VfPrq1S",
  "key39": "gCfVesyBDA8EP3a3P4ZXr3ob8FM2TphVmnvJCUj16GmSPJgW2TqFBkaCbczHuamXEAp2ndfr21RC12rgfpZFURb",
  "key40": "5FwGA7BfgkM8RuphGq7VKkEoea3MP9fd4xWeTJHqnGjkDLTV89GhETfrjTs8bivFthyRcjCHFhwD1oQ2CrVNNXMw",
  "key41": "4GYmFheHTqraaTSSpwMfkHRN47HLsyXZRwNitoYpURzYsVjGer78ULfVtSUiiAHv8LppAzMmPuTSYcJCQEH8TnFs",
  "key42": "5oHNmBjzLxKAjDQQpLkTnZPC9LwLzA3NYa2JDnLgKDLPAAQ6qW9CvNPQLjHvKESBrySGgWd1Y1Nc8GCFgLhGn6xS",
  "key43": "4QsDY791gVw5SKRTNmi3fvdHgoxYGTSnggron6mUfuUqBsq7UjvQCFGwHsXTe8TKs5tnfJFrryDQDy8CMmXFAR1c"
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
