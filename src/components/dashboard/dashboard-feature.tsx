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
    "4fruatmSUGZp88SeJFVfnADi9cHbDUqKN64U1w7aETxTzovJMVZ3u4fzaqsNeqGiV1gW7AHuvWtABvQs4iypV1yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xFL8iCid5zt6P1wfSTARhkSWcPqvCou8PSnSprVCGdgiFM1cCrqbajRdaDCJVLXeW7Dm318tRSbhJYywCnKC6sA",
  "key1": "2LyQqZ9y3hMEH99NDW98FkwoCZjyEw7pmuPUbJwa5ZpzzS44pJokrQnehz9agjK2xLvDJY26AJyYvsVHigxjQfiY",
  "key2": "4VSpyvELRCme19pT5NRAP5yAjzUNpybxEYxrimfT87FraAnkURvaMwQpoghZxj4Pyf3DwkqUCVUWWd3RPM7ZpdeN",
  "key3": "5MaciGRVZd6oXYcvUAFxshKArK81DueQqtngTHisNDGGhaoPBtrfXYfHnPb1NNxJLMY4S4j9CDK3s48cUTFPTKyZ",
  "key4": "4xJ1NSb6aMPgv9QZxdmdhDBGQFnb8S1PqCRjeKShfCP8VZY53H3L9n22AM3yBrXV2nY9X17E6s7rwKxNvwHEhN1p",
  "key5": "2E2VUWMyJNu1vf8bYkymXGNhLXeAoxPXdDiH99Y6diZGHUeSij96aFRbKvYcAzragn52YHUUGC6bsKi6rVMMFPog",
  "key6": "2X5rR5JrXtKJ5qYvap3bBPn4nhAFVLQujigBpat2m6KmbBJmBJsYmjqX4n8bq9MoYgtKx6UsKgDnRhMAQkMXMqAi",
  "key7": "5byaMhyy5HouQf3yrfQRkHYQha8eJBHjzYpyXm6M8yW65iguDwT7QAm6omrxgGGH3B44ijFppyqWsMQLxHAoGm8v",
  "key8": "Mnq3UB8CV5Gqy9zfGnfmxZUo8MVmC5BvaCPHgFkY9doAachYnUGpD1sXn1pgwK5Vtay3jZaw7EufrabBfG7pvUu",
  "key9": "45AEftiJRyF9FQvLLVeiEDcBHpEstVNydcdcRqK1sX4MuiY1UAKhqPkM79stoP2QynGLKXDjhHYJHkESq5zYMp2H",
  "key10": "2yuGMeYN1TQrj2G6YcbyyvDzunE64paKnJAf8F4Gi4oeYQqkY6vScYJ7dREZEy1y7kYyB8iC6mpTGzigeR5DLarn",
  "key11": "4YHLnqsFoT5GY6DmWn63kyGmkFYpwxtjKXvMoLuaMRCFAnVWio9aen5SZBVbtubjS3244DNw2ZMFdvFM4Qf3mLrw",
  "key12": "4Lf4VUS45YzRqr5ce6JtpPoDM5z9QjtJJ2W8ZXDeYywFdfJS5MF17oJFj8hQfvFgih5zPtEeuHeDGnerYozharDg",
  "key13": "3e3YKt6oT3W4p6Rv9dwrvD1ZZgVk22oDqrokFr4Dy4MZUMqvWbSBDS9CAZvcgLsBoxQwkoaDdsKZg6mrTovGCrgB",
  "key14": "3e4k7C1qdP84KmWUD9QpeFhxJFsZvh7THC7UkTntcEwCSQVSM8qDaNdvBwbFBav4Z73Lf1YehWUpFRha4Mx3c22x",
  "key15": "3BQBBmxVoYzizbZ7mZWVnFU28SR6rHaoYWxHZBzh1VkChUZXjWjTUqS9kszoq4wJxxJrUnHvJywuPzhQoRhwBfc4",
  "key16": "D4uW4QREGag2bfLsXpesantATyqqcQFuvTKRNDfrExQNAjGVxwjGRQjQLgwSmqefEe7guJGxmuqzyVJbBx9tJzH",
  "key17": "3izD66Zrx5z2JUBWe8ZhpY7xG1Bh9aaRTZ8Mbin5ZhGjhYLUQCVXVaDvnYoZfHz5TzwYZar5QUVS6rXGKx8ApfXY",
  "key18": "62ZRM1e1id2Bf6XNEa5K8DksDRvjeyCR7P4imE4kkZubghEYVKvR9ETADTiGpADo8NwGJ3jsmG2DBi4rFRV3y5wX",
  "key19": "WqAXnG5H18Uz9vfg8qMGAJ6NgqzdtbXc6WcV2if2r8wZzerChaF8MPGr3WeUw2Byo8MDjCAH38SNbUv9RmNgSaD",
  "key20": "63jLVtYzAjJTg6yHxykMwCRYcPCsCvZANBKKKrq4mMhRaGxzahMz24gW93YhvWzBw88QfqZAp9WGQFnQx6oqEEuf",
  "key21": "xoA4VPwGzpmD1UbANfsKtz2Sj9FH3uXdNV5cnRL8nZ71FQkK6CHHggwZ5pgv9PR492qnpx85LrBRxLv1ZsGFBNr",
  "key22": "2ewRTqQphPgCjk7qVXq1zMevg8z4cfudp9jHNF8puP5zkRgMg6PtDctv4vujbnRDekPhCSh3K2n31eguGvks5iwC",
  "key23": "23KbHGXAWYaE8fSZ8aAZ7Kzgk4yZWahSuwUHgvq4ayVo1qT9BqZFoHDQBxmEgn9VmgNso35zfiU1w48ktetq4a7n",
  "key24": "2eDr2w65btoQ8C4UJPmDB4QMUsT3cKHzBzAJvd4czG1bS44VMR3M7cLR6sTmBBKP3ooq9NsN1t5ReE7VrQAMteQ1",
  "key25": "MnxVjaEnRFRgK1bWKsDwy9UqLFotsJfRhbHp6YdmoxYp7wJ8qBt6xeCUH6x6mdRL3gacU823ookmZw95c92BGvB",
  "key26": "4eXCLN9VF7tZuaCQUq76oE28Vpdf3XR6bdHmFbtJqpfzvUYQebEYwRtwSWwZitQaU1zf6vmXByXKMNzDpErnSPNh",
  "key27": "5Q4CNJGzmQnfNWNrU7yuLEMGhF9yodX1wCBS587JtP9MsQwdGrfGKQgoAzDSTnvwniD8Gh3bJuG6SfJfHrS9ph3L",
  "key28": "2XPx7HazeJdMSJ4mrLFt3vBisMZkQ6Saj4k9QNsLtgWRjsX2DHfYfLFYDYdwQUK1XfTRrpwutEUqN3yNRLJHLNv2",
  "key29": "3XmwVZkBVjGjLifqK6fFJPw4837Wnj3zDSmmskjTjVZj5r8FdHQ4VCvLwUWLnGh9L2UdnQYAswmYSwgCbsEh3cUw",
  "key30": "2gRSEmpYpNAnyok1XC3XcfqXYAoFwqnAtqHoRTo267xqqchCjsZsCnCEWWir1RhbKVm4rBgD1noMxWsZAYRjmHvE",
  "key31": "39tSzHWobz1u6UHN69JRS1Ht6Me9TX3aur5LCpwhZ9U1cYHvMtumed925EMQaWdPHxPn87hWWVi52KWhMHqkcUq9",
  "key32": "51Q9rEjx3HoZEkstTv3qNvBNkocJqaCrAp6JAtJPxPuVTEPWPxiJMS2HnURs5QsEAve2XqA1njURkq6ryuTXQLyo",
  "key33": "4kcB6ZTT4tLZuN8mnubvdqAqg1kw4gNruf1Pw9rzq9vfFrmws69YiRQdCZ3wnSoCP3Ue9nPrWDpzXWim17EZ1qNB",
  "key34": "3k3kL5SQfMUjHeYgU4uY5AdjmNGAr6NQTyMSxD8S7iMGoA6R184dctGiSEDRzuNazFUVRpgmVbWfak3ZetoTgHJE",
  "key35": "ua5z1nFQuF4PebbxNC4A5bY4MW6WESRAKDzP1hbpmpY7Xm6sNiwBNB5XfrcGiN4mW4SvtJTg5Cqomk5x6vRbguj",
  "key36": "4LPRL77nyH2JLc6KBwAXaFU4tPsRxyYTQ7tyTvU8FeP71HWYHRSgDCzuQ6TkFwYYnXw6W7prtrjjp5am67mnkYzz",
  "key37": "27aYAkiCKsyiLvTobDGsycyyX82bUAv2vwDVpkbupZxFizv1HauqHxxqpmb4RPSr5YA116R4MAwWjzxTWtcUFoPv",
  "key38": "23mhc5uhxvzTqWUktixR9RYHrn8sPipwwvNMW3izDFip5wnhHD15CWUvE2GK575EeLCkxUuGkCdYFQST82baiBKK"
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
