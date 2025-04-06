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
    "5dpxRXcGrRuzmfbDoQ6e8KT7MYtW9nJaUXpeG3FwxWnd4ykBqSicqbdJ87FrjBknzt9L7jsMMtpZsrkTGMCoRHSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsaRZ9ZqnQYDgY3WCCEdKJAo99M9F7SiZKWGiNnPPBVM3wJaRqmmWXkWkkbTF6pe19MuiB5VvctZR23LD6rbzMy",
  "key1": "2h4BEkfw2RpTeYW5DxwuLgJoZQmdxfpwxqnVLD7D7roUVNmHMes9SHjtud7JwLdHAugiHR1y6EibKPBSFJSE7Ref",
  "key2": "3AYtnmMo39B7D4ebyxWA2Epv2fMfJQCFrbprGhECHti5stcDJdgLtjMGsqbjvkKoXuDyeD2Y3ybjHWpYkhvZ3uWK",
  "key3": "61bWQBTY2RDdSmtEuBpe6ZPq36RSS3aH1T7gifaiJuS2c7q1mLhESUWpQ4RMGkxtTD5ahn2sgZVE4ZzkATxPiGHA",
  "key4": "3DA6ydQuzZDxUR94Df1R1BEYsxbgCQKmUYN1S92o7eYtkjuLtLNMf17wig7tEFdJTpksPCVERBofgfnTKo9rTnhD",
  "key5": "bSU44vghBJ993wYR6entHSG3jBy31cLrFYxHvLypN4jc32rF7CxhNMjp7n1nA1pee955rZDvQxGiyUwWozrm6VN",
  "key6": "2TX97Re33YcobKW6q8KuEjMecA6hgLYixRYMWAj8E1a2XBgdu66sU7ciqruZ1D1wxdb7ZMyLuAiWkx5SV862RJSL",
  "key7": "4F2vCLQvYWSuDYCBzQ1V4Lh4Rrobd5gVqQmCtpJs5UdrwpFaiyc7vRLWR1HMpfHMRUe2U3V8xAjeBJTRLArAVMSH",
  "key8": "37yNovNL7j2rngDHVrneRL4PGUwvaiknDoTTcaSREAhciJ1h36Fhv3F642iaZB3Fc7yLu2PKKXPPwh6X237V3QWi",
  "key9": "2MyYakZdrkr3nFwp93A3CxktzoPvEzkxkUL3PumDqe9WVXTsf9Z8tshGNtSLeRxyoW6cuacmByevr7xCUHxML7vv",
  "key10": "MKH5WzaWFrptph6gFr6N7tgFYGh5T1UBYXbsMGpbSsT8gzmeequNouBHXMoH5B3iwemDc6HfVXusvMxm9RpDeC1",
  "key11": "5SQ6dZSE4WJN8ZYhkkHMr3DEsEWhvpXKCwxzmzaBvenaz3dBisMTjov6o3s5MzdBkLp2ELDna2jv6XmSrcJcCq2S",
  "key12": "4XpseS3oQvmhkUbcCmJz5e8XhmavYhTWt1CRHd9yeNyu8FTRSj5fAiuL1stXCyax4G2vPqFn95iHPCU8vYNcmiqh",
  "key13": "23Hm1gBMnukZkkscYKWNUbVyQdXu6Y17KHUy7wx1eQxcA9qmNEoymEan8WHPXLYUVam6cjUmkVA2ysxeKmDewZF8",
  "key14": "2WNfXMRWxV4o2neu7przQfBCQngr2BsDqzFpXbnuJnmqZtg4G6u15tMS2ceGSjsoaocctRfYTx2a22BMHukbxhC5",
  "key15": "Y6RxJbTamHgJK6L4n3No5K7HJkj3WuYf928BzKUASojAMEw8NSW9LUSCAZEogXZ3z2CLDbSkb7WqhvahtJyuq9g",
  "key16": "3esy9LUefeJrJNFHmQrz2qKyGUkcmMsJ3kBBQA2g1FfW4gEtBwCcyZ2Kyb2a1i9VJPSHRohrtcUw9tMBTnufPWLC",
  "key17": "5npPTaMAub8hJ8SuPMRt5cCqQhCrw3VDTksXdWkJTeSgoesKGbcuXaKHcksPKerWpuiPW8UyFGkNDaoRjYgLSKGK",
  "key18": "2yMyLe2eDkBTFL2qwiBHQpLkT3qohc316eukXLsXc49oCRZ5ne8ShPhpHeEHGC3ZSTQRfENDrP7FxaZGMNwcxUbu",
  "key19": "2obwxvcpB2cjb7GJyyxyjxsqmFhY1ATazuYVUYp3C9VBMCL5q1KeQaZuNMba9CHhyE5GbAmnZ71LvtwgnjM1asqR",
  "key20": "674LcThmavCEaPRRVL9xt9gscX1EJ18HbJKPDEmSUb2tKBZw5WHUE5ne8eYudmgmQsQQpxHfsppBsdFYgsULRwHt",
  "key21": "5RkqTNKuyQXtKf4W5ppXqSG9ER5k7ZJ6kEWNk7rWrnRJZ82CBni8gsZ4XAufiRLd8TZzshzAqpJH42EN4gRWR4nH",
  "key22": "SYTKBNcdHEQjWq3N8hSRN3f8gYd6A9Z8PiMq4pUo8Q7QTQbR1DfbsaqeKN69FULDSr2PQ5NLXnzxYRqNXyhtfZY",
  "key23": "4krsZmTFEQoRBmoyuomZZUerHNbuv8HpVywg72ozoke2oqMASjwuPtrzki7KTqVooHH33P1ptbB12gfJV4a593bf",
  "key24": "5kg5xqqwGyvN7c1LnbvcDBxmvybq11vuBMPyjTANGaj3y87Q3QnzHMfCcdVyrLw2LouHidiQmJTtYetiv38QcfNV",
  "key25": "4ek296atRP5sScpT4tW66RkPyDyimxonMJHVrUDwUdTARPqcrvv3Qvv3e9KBBjUdMLHqn5YqDGzftsGKxCWJBjFL",
  "key26": "3qMEXKt2CJiS9WHDHqgHv5P8skdaDQwhrmavruJr2iRnLdb7CHFjPxcoiC8urLpPYYGJPZMhAhkXTSbSeRduhPd",
  "key27": "5ttEuPZbvvdYAjbWPFrCRjoDjdCpTJRCNfTtafVRff8pddkYC1S7hNCtXqtJXAsxUE9Jt1zhZKAF9uTgsPbLgMpL",
  "key28": "3BqpYu8TcyQ4MT5xtf3QovoPvA4aEG37jD7A1SUNXhqohx2dsx2PqmM6rwQYPgDAK6iqnS24Vdm1QN8ZSdrkhdWF",
  "key29": "2qqG6S79oF5WA96UiFpZWLx2sJMA7RVyBBe3c69BaoxHvmhBUgg98qBnZkVqhUmxfwGGnQSjMyyKEJBeK4x7TPi1",
  "key30": "HtW5DVAEnFZFvW7RQweAabYcpafVPGkxuAzyC2YcKEDwyH8fQSKLZhM9r7kriHMAzEe8aKSwcRuyh2LKs9mJPJJ",
  "key31": "29uBmYnkqHEey2hxpZLzXv32ySQWhxUZwABtMjQPKwFsFyxCWCYhqzJoC4U44iCQcBvZFDQ1r1T3pKanKT96X2t1",
  "key32": "CSw9Ty7z7vvHA8mCLuzqFzLmpxwftFk1EXd4sgmXNtgc1AGnCYJqcpW1ZPENENeyR1z7GWhA3J5aanpPpa5hA7o",
  "key33": "w1swTzD9xdAM6zcdqj4EcoNW2UkgjGTZNQGJFh3XJ8F2beyNmKhbsBfYyoqXnP569CedmNtD672un7WtCb1sNhd",
  "key34": "4MHhiCPjwiHYow8SewtqzTC3AM8DRV43a9UrLFriehxxTXN12sfaUL9iH6YzXHXiKodTacuhEVDZic1eeKtaJoFZ",
  "key35": "HcxdokxcTKV1DWGjgRTap6gXXC4zxNxC1oy4ZYjWRmobvA1RmeSdxDeZ1zuAdffAvywmqwo1vprEnwX6TP1tRPC",
  "key36": "2Dh9MvQr3NgAySRi26fQSaJcDx24quocT13i6odoYvQBMTYY8doSr4pGVvBcJgU4uPLjvtqrWTos74st36dQ2Bcd"
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
