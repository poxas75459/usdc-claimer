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
    "4cK2h681Edqd3gQPNDbuUL6pgGyiumKwedAqg4S4Zvv3TxhAqoY1GaPn84BMG4nY5zKQwjDBiVF66CLgQt9aajve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dfaDSjyVnw62Z56Gfj5Cpk8Cj4rc75cZZyxVaJYrz5cukHznCScjinmukDiCpktE4PvLzT9FCdRqAMQf1RrRGpK",
  "key1": "62Hm2pshcxQkFhunJGWx4uxxQJ4yaEz8BjcBzjbqKumEX1unadyYLExAi1ja6fVB4JBryEgyHLqSZ6QAhhCRRkjB",
  "key2": "raBdQz33W6JGA2p6fT5c1qxakjqMREp8C74UWtseQx1jNr59geiivGsbnRtJzRq1qWgBMzNQ5iC8unqUE26K3bz",
  "key3": "4mjarWDc7A2FVar9xmQedSN8AEoMts65FehKfdMUMkgVT7kytHNCzp3kmpYzSXtRsgWzshWEKhQrW4sJH5e2q6tE",
  "key4": "5BzLmRVe8ipPMeye1VS4QFwTgS668F3RKd5Ysfppi3Ban2YLuzAZpqhkAS6UfoRXdH4Jq2wHDQv7KVwPEtyj7h3",
  "key5": "2tQfPazy15K5kH49GVxxV8tuFBoeD1TqPMywxr7xcBvdTUJrZaFDESDLyJKUrX9RJfzfKQEtP1n8q8WM7TqLhzFN",
  "key6": "3dT8xXMQ8AC6wUJVPNSh4GVDCBAr7mtwGWFeoyXr3aiStY68Fcnqzy4iMzZWygGEk6zTANDzantfHGuPU6jTh8Q4",
  "key7": "2t8EiS86f7cmtC629dsj349HqL9CJxjUYg5SA2T2VmKoZEgZtrGLXgBMRbGuqxRHfuLWWCbwd9TCuFxtLk7jvKww",
  "key8": "dEL54DZT5Jv9DrWNQqUroZFYReMKYatTHTF2vh53VcZBw2XJctA68aP5xJs5bWiwa5Gvr52XSvETNCLGPSadLtg",
  "key9": "4hy2mEiGmrY3u1CNnTY3Jx2JNY69uNQzgipRygzQ6HUhvqwTLeWm74bJMsyCMQdYGDqAyCNVw156YC8uFHPoRuNv",
  "key10": "4n4jUnG3nJPv1tmvRZBEcn2SaUYy5tBz7ubiKWLm9CvXpY1eP4FMvEdY7FyC8Yq8Vu7u6xhKD7AFj2jAtohYwkHx",
  "key11": "DBw1SUHY7ZDTsxLSp8YKZ8xsGGLrYoUqhhcLGrXZhC45cJcKMmUSSdkXhSd3Dfsqr8aWPgEppCMrADSDAmfWiRx",
  "key12": "4wdTSNLAPnyEJXokyM4c25GGHmapRfsv4YWwfjc9Cz5YsU7fNd1Ej4Y5swCsNecyjzmW4Zhazc4PQMd6sPSVN6dY",
  "key13": "3SWxqziTsxqGb7qKmPhqNofetSf7G2g3XaFJgiskjaeKfP4AJmpbMCDBv2BCyoC3rHLYLfiJSMWCNnq5kmUJ1YfQ",
  "key14": "5gQrut3QBZvBzghRsbfof97YKiYdMnGq2dPQ5Kz88SVnUMkqZwhtX4muJN5NTSe7R83HpEZwiHaTWGuh83Jw6AYE",
  "key15": "2K8x4fcLYGpeR7mvSheGXQ6jE1qiaZ4tnoi3Mamek8NJjfrhBAyhvKrvuYyh3LSA1hEbfw1xvtgNewPRkkCogkc5",
  "key16": "2ME6s7T9DCP9erKSmZJhT36c8Sa5nnoMxzX18MC6Ezx543XvqZkzWXEjcYCyWZMW5d2uPCfdkR4U8DrSormURKLx",
  "key17": "2vhhhq4uVRk9rHmCKjYQXcGEY6egS9rBftHmwUHqPxNe3je6dkgykcni68AY24F9wTWnPYpiBCpHPR5AsKrynZR3",
  "key18": "4REePX2d3Dt4f4ewcA2r1z6FxUUqnzsXa9HxZDC31iHhC4BxyPAHpRfq8QYXWpk98tF5rF7Dm6PcVBvZyBAG2p7G",
  "key19": "2NgWKiGJSL8sHTLpGSuUdqB7ZQEhtwr3Fa9ZQVad8odWgNthmGnE5zGK68dikcqSe2hndxR3iGZ6LeMaCRtwgxGh",
  "key20": "4Aeb6fFgrRdGVDuqhMjCRmPgWThHLj8dr74GUEy63HSbiE2nBGX1riEFHmjeKfJnGgezHsBmqsoVsScNvb5RjWTL",
  "key21": "3mUuYaDa2swFUNzeHJ1yRiYqpAvyM5c3FBpdEzfm5iQ3X6tA89QDbTuLZPeCad3pGABMEAFFTnnuXeSndyR3rzJo",
  "key22": "442MZ7NzcWSciASiUvw41qt8DfCkGBeURQYrmgbrtPon5LQBNHdLEwaKCCcgjRe2ifQFEWtj7TVH8dn7bpNXSgWu",
  "key23": "4LRzQESigwD45A8wjGWSdDPPoRYJfTBRyirMyd5ERkUQGz1tKeufufLLE7CP1frgTXeUDDmJv7hCnvQzhpBDx6pd",
  "key24": "3LnPzQhx3ypVcvGmbGjvCthM4E4NiEdFSbHDzqKfbfDg3mzUe9x1Cup4rpwb2mXMJGApvfeFMTi1Li3jk5zvV414",
  "key25": "ge17AQAbvKBQBnPxjzcYq5rxTNEcaw5s215SbT84TtejY4RTApNuvbXrXb73Nuitn48ehPJuyCVeGuSJZEvZeAw",
  "key26": "23T4nG1xu3uoi4pWCyYty721wiwQDq5YQF4rJtXjBSdqVF9LQAttz1N4ensWN95JDtQeeanDs75CG86Kjfg4gaHu",
  "key27": "4N6nVzdZghAkruSedtNzTaLJ8cGzwhe3vto3NDCBHZfTrVRRJFYd11GLgHa59wTfBG3DQ8xjKkJkSUzKKFSpgEJM",
  "key28": "AHwaZxkiYXjzostTzwkUswHdnGBPhvS6VGHfVJKCEz4APDUynwaF8GpDT1YQYWeUXhvh1Hr4327cagYYcp6zna8",
  "key29": "2wA78BzBZHTJihAZ21JmieT2p3u23beAdWjRuCGqhSY3DX6U9oXmhnmb71Bs6mH3iPMo1HxfBLmPspJy6565nN9v",
  "key30": "2WoKJxgx4EdHzJJecW3wMM4evYYKHPGZAhjtr4XoCibNrq72jJqvYFqjhnoURF4RyQp9dVut8yTP979woBjQjGZj",
  "key31": "tVYdtkssKXJeVbXMTmgTyrpE6MhQ1SnF6UH2PDWV5xSyMce7CqWnX3R229yUALehCEtF2Dkcqu1eoKCDkUfFmyR",
  "key32": "2eRPyjicRWQrYWs122usgg3FQRBRvY8iVcDVbwp4yiqNBJJXJBFsPPqN4QwLjQPxsfbUZUWKPdLEGmbM2wWMQyR",
  "key33": "2ya8EMrVHq8SKmPjN3fGydiBXP15vrjJWg19JCBL31cZoLF3bzQNYfV8hXXmog1Ye7jByt2koS2AjG17nz7xGQaE",
  "key34": "3FUG6wXst3o2bwGnroEeVYD9qbE1EoLFGEWDY5ANBEp5HL2zkGnGvhGjFvhwmavy75XLsParNVbPTSCVX8HUKS9a",
  "key35": "3kJxzQmTKAZ3BA12vEUuwoL9Rg82xKqZdTMHNHhRTtUsKYuipYkARbfixgpgPsQUV6UNVrLZLUSfTKp48AjR92vw",
  "key36": "xAfJMbe9XE4SCcJk8AdpmmH8cX4WuiKKa5cTdM1QGASNw2s5JXpXt6uGyufTBJqqBsuPmPa4ygjeVgVowH7rxN9",
  "key37": "5Erw4TdN9nfUmUKAwZuUtuexGwy8MXdimU5Eeyr7ownpJKKFu5dD8fywHqhqiFcPiRpygWj29nXgUWUvozDkodFS",
  "key38": "zpMcdoDGJNcw1TmKBzLJfeujURcruYqJqHTbn1U8y5sbAubumwALC8qb9cWspQCs9KcwSjP2NWaE9JpGsRe95FR",
  "key39": "3AFrTAp46QjhWqro8dA6e4rJtqw29JaqhgJeyaithpgJB7C2twiKQnthUPBKSreS4sbLemYQjCwHcN2UaJaNxmmc",
  "key40": "NgZ18VANFL66YVb6hANDAtU7YYN3DB6mCxUtLUGaPswPc47m8EPG8DGYXvgyq4mHG9rV7oaJQF8YivZ8URq9cgY",
  "key41": "5or6uWFMp53j8y3Z6nb7vJVsEpHFk2kPdPQzM7keZ1eFmTnUfVzqGDUVArdka921wbDDmrxahrspaK7TpKAncwqa",
  "key42": "QrEFX7JxN7S75dyXR3fcB4S1J3xEcRz7j7sQrbD52G3KnRoJSi7y81JJR8m2uk3u7bMvQe5CJaGR8jtb9SXY2ty",
  "key43": "HxxM4Nyf84KJAvgAo7wKFJ2w3w9Mibfc7Bgpb56fMAsKhc8nkyCREzun2W3KfHo3kcabEJwb4nnD6GTYNeHetYJ",
  "key44": "2oVajBXPu1wkx5unD67ZoSHKspjuxz1DkMQTwHRH2PpZEvvvkm8K6JuU8cpxt6sL5n7bcryKBDmyEdRKpMDqof2D",
  "key45": "55UQ6ohzFf4K67kBao1pu99co9fyEcYPhFWY56q3rAKmqQWHCgNBF56a6Hi51n6zxQmAPDovKYqgvyNbQkkbgTa"
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
