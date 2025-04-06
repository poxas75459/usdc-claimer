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
    "ZrBM3znF4d5sUpgT55FYbMkGLg2LCmxtyHSLToqgkeGYY6XnGXcfBwYge3hRaCboQ96oWJF358D8dqafvS1Jtyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FrUW6AUJudNhbsgNgCPP6y1umdRwQCQ8xEjSSD8aVTDVKxN8tKbzdVM7Zvb9mq9QJW5PVkRp8qyQQvvswiQu7kX",
  "key1": "2Mf5MT98v8Kc8u7FXnyX1qxxJ2ujwCD6ia85J7AcD1y2LCLRfz7T3wniCMUzeqbbS6MouV9AD7AhS5EJRVgGQUEy",
  "key2": "4pJSyXJ1AjhMxmURfBcyUS3t2cZrrjdrFEBgmnifZAyhQcDFfgvYnrXtMZtcjicy6Y6pxcHYmo3cP8RKC3MWbxyW",
  "key3": "3AmGd1GZmMUpTaFa4Qi7yk48ZByb3g7py3ZP94RsYx8wJqeg7dfhgWZxXTh7cPvjatroEb3rw9LZycxAk96KP4oV",
  "key4": "5M6cvQ5koGXcgrcjgEzdYf9Txvq3KdzB1a2swAL8ufTpJgMxkZkaY4TENXgipCMCgHfFnrFxE5zxHwGsCUAsJgEi",
  "key5": "51RW9sjDv6pTffxvBGV1nrzTfBEL4cHCRbVkAtqPyccdBFDZNcLJknAgdGEdiGn4D1ELwemYN3QD1Dw4szntQ8Nb",
  "key6": "3ZJJNWJ7sWVP3qzptTGQAK3zekfntCerSc5BsdgsLU7hKKmAyKNCeX5rkMuqdb2fcYWfa9k9SWpfJ3E8i6fTCuFH",
  "key7": "5Ggz2gyA75s3HywEM7oMiGcX7GDEWhDMHPJoVyCBNFjkYy7jjeFnfLNDmQ1LJQuexeStSdh2cSiEcamus9dEJMfY",
  "key8": "5ri1CBDkmgemAfdZt9C2yzLGiS2ycxjUeTrfQnESsEw2KNP6quodiK5U75cNFQzzW7srXiNUkrzDj28mVshMycUZ",
  "key9": "2QKDmo2ZijnWnqZwXgmnZTWjMjWqsMf7by517p2LMXhfdVz79sfQQdzacFnUvM937sYTpJX46vuUcyxmiDvfupi1",
  "key10": "VC7R6cqrqXT1Htafhqebst3FBeLJsTGMAzCCoqn3RWHL33RsmAUCYZbB82x3fP4bJGsGJS2pM4Ju1bX3FNfNaAi",
  "key11": "YoLraNBhsPw2dmjxPP64ebNEmunJ3wEBv75pgawPzLwSqHH8jfGSAJWyLX32rGMbacgs5f6EfNtfevA7Yo3aJwk",
  "key12": "5kMtXujjxgShKvf8gaNrL4zpfabyHr6mhrVT34Fnf4rqnmSo1xquZ3ur6En6YFoceJFyFdTAEtwbUdPi95apvisx",
  "key13": "5wK4dpeMnqyTTs6uaAguEiP1jkarQCqDR9D1K5kKmJ9tWWdS74LKSbjNoZEtcsShDqWEaKVxeoKWqGQ2Fd3gyRzL",
  "key14": "2v95gmbi4zXLnMAQyZYXnoFidbnrQaw3Mdnx5MGBcrYoWfWMtxcYkgDGQdEzHyMAqTSdRo4EQwSnsz7Hk7kY91Xj",
  "key15": "5zLGQQBftHuJJ16WvHx3WGFgGMuJ1MdeRZESGfBHN3m1av61Waty8WgseBPPYwh9aSLYenTcHrLv59dNEniXRFRB",
  "key16": "5cNZmPrw2ZFmmHdPUiv21h91xHJNq6b3R7PaS7YFyWNEGKWzw6fkMYcAgSYgtKoBmFUTrK2VnAZsJ5RSTvMrJmyX",
  "key17": "3U42ukMixLHHJ9qmz5gRsVAucmVj9TWXdkhFcaRzHNVGig6Y93yNMeBW5agcyaj7sX2kPyzisQxSQptYf8BV7ucz",
  "key18": "3u5Zx5nm2UygkPRC5m8v1WNRmkqvStXcbLpiZCdzd1xRPvzhqFKt2aJXb4pPwxv1q1DBmzLmD8jccLHSA93Kdrqg",
  "key19": "5yRgyvJ9NDuqPXc88BFpDKwWv7GCNXd1F7zcgEtJzSnrLwfLm6rNQLrMqqm3QeZ5LS2MFugHcrDde6YmiAy2CHkd",
  "key20": "5MuZDip3dhVTpBTCkahu8cBC5NbhhwBimJtLjWf2NuzV5mWdq1yFaFR3myKBATv36fgKuiVbmERAWiCn82h2NHGA",
  "key21": "4ZCqu9KhKNpZanDTKcG1QWmHZUqb6KgRP61jw4nHAdL7toGFw9nN44bByfRug4RRTvgoDUkpaznpNEgbdxx6sAzx",
  "key22": "4U4JwaJpWHhqMEjBvAZD65dDqXYKK8kr57oKBH7RxZJkdbSvS7fd5UKAg8WA97ibmyEvSCbtApV9sJNLqmcy3Q4e",
  "key23": "4nex9FiR4mnCPfkB7rpsCxbajVLCW25kCMcTAb9w7gp9oDqKrXk7rnoZdGVTGGYKAo36R4495N3p9BR9JDrMA3mo",
  "key24": "38aaDfM4ktuLkK9xN7SGYRptwsfYL7uqk2NoJEP9TuyFFjhNiFyARfzrr27LqXfzVufgz9CwsnwVs4rFF8ypvtsM",
  "key25": "3tK4s4YVPeyN6DQ52DuXT5CbdE4wC9aacxyX8tFkqtGxG3D1DH5JFnU632Mg5CxmLkNMiTaL2v42bBeTTvCyHksP",
  "key26": "2PXLLdpM7nbqVaXUYvbSBxJqE4S9be5puUMnLm1L1yKcx5TF9zgvX5hT5bQHoq5wAMUk5R5X8xE9XyqgMRFVbv8p",
  "key27": "5oYsEX3AxuPk2Jfd5859sgsCyfPmd2ZmLWEr3iuja5xANCxZGXJRkXB2WdhNrmfAMrdUj9AD7m5MXC4FAcAi4y61",
  "key28": "3mkQGvGn8AUtEJRThJ4wAYCJQVeGimjatsV3shHtPMDiM2sePBzTqFyBYtxbFtAaKcasVBPFSbrb2RmYsjeNLbq6",
  "key29": "4Yd37YBmj8NtDNwZUnrvZScdyHWyUtYgprm1iXJpmDt7XMg7fT4YmTa8T331K7qUtVdnVuzUyeGeQpocDzuo7MTd",
  "key30": "2tEsSqCy8B9MJ9wr2sh67AxpiHG4pSJZXCEMDauHmQ2rSdVcxwrNjhbvmTUmCwR9NBFSoqKpZtgMxBgPwFqvCk1r",
  "key31": "7dUrXTNWCE3m74guGDZtBdoUJ4v1tRrr7kRgUsXKcfNFizqekByLSyk4rzpfXS26gNReEEDBzSCbvks1dFcPFSD",
  "key32": "BpBKDUTaG5gzHuKVPE1bhAza1rF6yAq6Q6KUgSRCWC6HEqYi4mHMm9wJvfiveSvPB81nuReT4pPTrf1eU5AfWEB",
  "key33": "2r2GqtrMAbWyMJXD1KpLCb1wDXaNBKXmgRMXCKUiaHLSGG2gcABbCHcVHPxVDE8cETJibERVY2o1U8c3nHkCNo1Z",
  "key34": "2DFvW8k1SHrgAcFBFY6T5giCFufWPpMc5RodtPdKRe8Lx4gre1HJGE1oHjQmt4xEijLGo6TuGtgeurRRMACvWWXd",
  "key35": "649uUdtU2fbTobHMfwM8Zxwc2Qu138RU4LJC8eg8nAhDsUciNc4X7xDJd6EFr8BBuN5JN7h4HG6WmS2DjwyJmpK9",
  "key36": "2BHjgYL3QPkXLox587FXPvsGTTKmk7FYUpTHNpXWRfqCqmkhYKUKrVqiuXVjpJaxbJMx2GRon2wrpQiZkLC21JGK",
  "key37": "4Wy7Qq3sEutkNDAG4aj8scDVqys41E9ybDDTXfe6dMukbZM7UXXhd7uUW6MYVeL6sPQMHmzaXWdR5NBCftVdGhUj",
  "key38": "2hmSKvmDUAA8qSFytCMxfpXH5sUjFAmhHy2iYkxpv81bmBVdhHxY932oDCUEuGo4QL1eK7LamEtNaGPExkFXPJVT",
  "key39": "4G1vt12qcuvWSt6wuEftMLiJsqjpE5sqUnwHw8EpEkryZFaFJMDk4hntkPz5zTEefg8BVuntsZ6RG9ZHqRmNC3yb"
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
