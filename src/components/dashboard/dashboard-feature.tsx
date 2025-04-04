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
    "62HiaFoQNPm1SfrZS4tVJuqMxcKqBMhMgMHhWQaHkFCoPDbq1hZ2W5f6D2QySvc2fGKGjZfKpFZqLbV5FQmY3Mb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Whj4P47nUxEA2JbNYwS2FiRiNnEP3FMVejNUd3QaUkDK64EoDZoUJGcq8tMngTuxT2ovQpP3dMS6DCNGamLUsmN",
  "key1": "2r3Wxz9MfsirCWSjmSzMYAdgNYwK2HW9aiHegH1xU3YG53sjC1TSnJRoXxVwkiSqpKmzhQSdV584GkpRy4bznzQm",
  "key2": "5tvtsBGYqjTbAMFkQBuCg8HxgWMaLeSFpXdGbuwZ9QbfGKJ49Ewenkc3esj14igqDdFLadGSPowCFsiFYZkE6bqY",
  "key3": "3cad3vVBdXVg57oB5qntDKFngPb9Y3F5CD2RXQzEb6jLxjzedb1KrZKSnowBuR7FA6qauVAeyB73ieZ4u9Q7MexA",
  "key4": "5hTDhEpnGbkHe5dydHSWEAAuKVeVtNYTMj29WiwoAS1K1e31oaLdChTn8QXNtbNaQtNAWRuaMGTTZ3g769qVCmLi",
  "key5": "5kbFfqxyGnWH9jtwcDnXoEZK9E8pCtvmVwHHituo1Gz7WVp3Vm5u7MPAJJoWj9WTtoe13gHuDZef2ve1heTuUtqy",
  "key6": "2fNMgvSQSMPupq4PZd57vLUh3C4g6wfNvUqTo8MMErdM4h77fTqJxnZdGAzJhEyCiSeyeexuiiXmct8GcMJHbsrF",
  "key7": "3YFYX7b7frqnzich8BryTqyJcfeh9yGqY3KQQGynkkWexZKC5ieKyDtxf3d98vHZa6DNd78PAKQCywBLjgdM7mpk",
  "key8": "2umwxD4M5CPy2jhHEogiEyVpBhHRUGjLkhEQ98R1hSJH6wimPPbz8du3y49FV6cK8ZW7oiubhTShckBVpzDNgHsr",
  "key9": "gNoCsbmFAC1UpPGJsEHpMCNsEuFpd8n1tKXwyYhFFD2Ah22QS3Hsq19hMFJ6kFKCpwojba2G7SUTVa4KTknaFTy",
  "key10": "bLWKmmFQYSMnyh4SEtumUS9Viua5kRQVcKaWmYB3SLPiUjcs3Xqfj3HYUAJ75Vft4Tzq2sAVyzyBciPYtkGdZfp",
  "key11": "5tR2jVuCrYGxpiD3suU3v9XYvKXeHGwx8esjYY11zLDiScGqYLyyxcogS5chozm4JJnudt2SYfMXNBkigMM75PkP",
  "key12": "2hdQreUzudsppvH4AoaqQRo4qUR5a1z9jjYaZcS8fNhsL887SALUjdNP2odTr7wCbpwtLW1HFGrkAUxsmoRyvPmT",
  "key13": "5TqRo1fPBWLSwYpqAgFRCuJDMediJ8qTaqdNBrxMtjuMxvgKrRsgMPLJG3piBSPsm8XJJ4d6jgCc9XBaxEsgJ4Yg",
  "key14": "wBb3mVupuDYwQbvWeCiqoMtSePVBgKoWaT7j63uBNXHqaQpnDvCGShKE8Zqwwn8muM4upj7w5As2ejvWgSps2Yt",
  "key15": "5T4TJM5wUpyLNNoL4cjXMZ4PEqLf2t7uVtBodtBkAJfvhuJFMxhyUrSPhV1gfXQNxGgfrMRyeaQAfyGPE7z3H3EP",
  "key16": "2cY5BH9xSQdn6GwjXiVvWivcicKSovQcndKPyZT2oUWm67xtgaYz4C3RM7mGPvwioGxpH3Ri5HJ18joVvk2AQPef",
  "key17": "3UyHyd9xCKzcXJF2UPgmin2cohFsh22QauBMg1EhLgCZwfziwpuRZur473rAjjEmPaiUy8jLdTUwBCYMYfiAnQ18",
  "key18": "3bhLJnneMLcHwdAerojzgh6FZwyFEUwbeq3QUPnqqcktHdcwcDWrnLcDVeJpeLZyGyYd8Zvs7wWEX7wwWLvmso1L",
  "key19": "5RaxPY2WSbWYjVmGZvgw3KVNVm7U9MRfG8eX22iQYXpBCWZyAkQ598sVKcTb5vmzhtgawCJJThq6snmoGN3ySYAb",
  "key20": "31fLNmQSFvEGLb4Vg6i4h8JNxDkqfFWCVYEeGWuiHK9iVd94SDhDr8MTm8znqHmeefUYMEntJQmhswzm3EVaTptt",
  "key21": "kywvAb3HaH9KpjdasLpCwpWjNX4rtZ3jYE5hETNxj5qfPUNz2iXLMS951AMQdC5NxQbFpasoYCbWwf8DLDxMz7m",
  "key22": "aVMvbvwK593LarNyCKQcjzDEq6ZRTd1fWjhQiVZ5CcAtqUcSMExtvtbJsKcxSTuQmwMPqqXewLBhqbKkXbfMmLy",
  "key23": "2hxwoHpSKFYFxkK2NsUUmmbpoAg8wKr2UFWJW8Un9RCYGZAy7uHpuCpdpe2joSWKQuSwByu1zjNangHMb7syZ1Jb",
  "key24": "5nLh4fVp4ZadCHHpRQ9KBsQXifUut5oUaPzkXoGo2D39xoyRhxebd5QAkjFyuaHJgQMUWH5v2Mo375rgFBgRvtp7",
  "key25": "4pqhPtq8P6buUMcGVh4nQbs3iPJgFZfwc4gtWxRKy4U83ixApk6YaCEytumYbsxVig8RPfXZThc3d66EGtEUydwK",
  "key26": "48g76hG3r3SWAzF9tvfozMp4xWRNupL5hTw3SRfSWU8STSQZtcgzTJMXDDAZJcjEdbgCNkguGtrAc9sp7djVN8Th",
  "key27": "591p7yrC1JssTKvzsA9H8fEZV857GYdRTHamkEs3ezKyQsgLMeFsXXqt34TWbceRqCVywPWNpeg4yircczGep7dY",
  "key28": "4gahrFFikc3A4YoSUuUEyadWdWefeeSXn7MJwMQLiGcvkg9GgJQFJcvb4Kxhi1DUMuQvL7RdHTGTcwMS48vesbmJ",
  "key29": "J5fGej5EuTHfyQiJK8gJScqhzmAqQKkXMwZeEEKxemHqpsrvzcdHCL2PmTGSBmn4vTdyQLY6eSDYAdFTQofn49G",
  "key30": "3s1m1DtZijbRMaavdPogPRWa8EDez3iiNHFZsYvxxDrpJAm8FxaAYyYRt61Z9WP3ufwQzo5MN6kaioYRjZjoDkN6",
  "key31": "tLbZ1s3jDvZMnK4CnSpNX3m7wkX8iToi3ao8ki9uMWNhcMBMikZpdDZfPmxHDWr3Hup1sXNuxqNKGV351dPiZRg",
  "key32": "4CuQn7HvLEuHsgAQBy1qWtKxc3c8AeTtDh9aw22KX9ji8CtFXdVMdh3KvT39cmqytYAE8TGTtwDxyCQ38XiyJqie",
  "key33": "46Ls5bm9HCcz17FUEMGADJWmT31r5xnY8UBLehNeTwua9aM7XqgToe77MDShH6CSb1d31a3dYVyXWP3cX79N83bm",
  "key34": "2ydK4sboapQH8vmHoF4KoAKyUyz3qiUDTvvBHSmyhPfpM7pYDRAx4yg5S2jzYQGZJNAqzJ2TUgMWRtDxnHLDmFTn",
  "key35": "4sCCWDBvsgB9TqL22BVqUEU82k7DJY53uL7ZySzT97PmtSCmYEsjMfNC21zcK36YJALid9E5sxBg2cm2Byy7K5tw"
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
