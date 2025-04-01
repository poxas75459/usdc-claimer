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
    "4nyiY7vXioVqQzJyng3iKt4kH7H9Cw7zX9F5tgL4PVR1RdXXHBYDZjcGrTUXUwaJsm9ox6zyUbEDEJiK6Me8HKTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdQqzgjGCwFsputuec5Vx1Qi11oFYnd3BannQmCA7PbAEjWh8dSobiJKbwGoq3hctPvni5PhYLAj7nGoT5LJ95n",
  "key1": "JXtS31QaNTjKB6ameSCWwgzCRKHbnoSp6rHP9r9YpZRFKj3GUFE8EQUAEa6BYNqtLKiLdmyH5ccAfS1MaU315UJ",
  "key2": "3xrDRdktCChGRXNP3ANGrUoPvBMQQPYY4PzDNbu4BpBD7Q8FKbiPLgTNpnUncfq4TsnFoAmHZaqQgtATLuzP2C9u",
  "key3": "pwKDzgzMdu67tVPgBW81AnezhNjaBJ5J4oALfUmJAvkTx3f6juQtaBwiWQjveLvg7kVf45M2M25bDSRM6xpNWcy",
  "key4": "SQ88QHih7kkWvbA6YpYmaBYMphmqHMuNRZ7uDiDje3TrdtVBvoFeJqHzfXVapPQYApjW38esTn8mzc2K4Hcd3BE",
  "key5": "3RSaxiizczS1TsuNcLBwESH8PGxZSXKhgZxuKX3TnkGm2m75VXmXKP7kXwyBjMwbyGXrZqu3Cg4YBLbxCa1ojykq",
  "key6": "45tgm2XBLNVwYPe8M4hEwMJREk4o5RsxtD222qmGyeEgg2o4S7QwJDYtE3YanDVPckm9GT6VqH6eMb4b57vEaeEn",
  "key7": "2AT43teJwEU7GThvPLw9Grm94pNNFR53iyEsuH5cmSd1qjJTa5xGunALEQfahauCCXg9sAwsU94fP6sBSH6u6Fko",
  "key8": "4kdhBgzgpa4tGjsbAeiqBbXFRhcHG6bxsQuKtn5bp2DBLPozBzjCEX8DUcDqn5J5iEYCXF498mQXjEzLEkGFdFo1",
  "key9": "3dpfgkQtvNeQpSBGoTRWHZdzLDEMSx859shZaGkqvXM1dYwyTjgUNKCoysB4c4Sy3gC6w2LY7EwtRj9A4FiKCbGY",
  "key10": "2NDTL77evUfLuYKiWvdXERzKY7RNvuNkjWFBGU5Fb9mxmao91RRLh7TthCsHing2xdWNQWc5PYNkFRiBwDCG8ZPd",
  "key11": "4xvrD4jvC58kgBqkzu5cguPLUvmd8nLZh5McDRpfxH5aEc25jZre78ESXLryEJ7fP9fAHed32cbJw2sgv7x6Zive",
  "key12": "26zWiacojBCGNUKXyWVtdNk1zdD7XicCa6srH6Q2Gfc8fKf9aRGsstPoWRwaRDc1zk6asR3RZbw5tdonrTZjR2EY",
  "key13": "4HLtx7Z1UGaDUzPSq7qrSx2WNgpQCRshdipiGg58nGLGkWqhVMW9FMWwVkLnVJAqQviPdiTLo1AyraX1Wa3Hrw34",
  "key14": "5WzVCKHAAYfYnEXkNkcq7y3cRH1SraAwXFa64TBwSxUaqQ7crDMuWCgEr2hLzsN6kZZTgDExcdP1mGpK1nbE7VxW",
  "key15": "5xkaqQYpyVXcvwa3WNHtW4n8LgivpMXuFSXMUjcbuaJ1eruTLXGmdYZqULG2VzTrmMxKtcyY27iZdbfVDjV5xToB",
  "key16": "4L7e4UkNWSy3n32ytZLXHZEnsxTbGapNv1or3huXCqXopaEwUxkUKtQ2vd6xhTxmvgwqboNYupWsduveGFsBDoGg",
  "key17": "kNkvw3He3AwuqpRjE6cNXRubyzXuSeYDoyaAw1SKi6AipMq6PMRCHFTpg6kFz7pd2oARCfxKRtwgwMsAhMst5Aq",
  "key18": "3XYDCsN4J9bHH2vogkoASTGXtEQEiKc8PcMzwa5chxrPaxrs9zdzCHXp2z8tQmxnGwjZoW2kQdw6bULc3RZiRKzE",
  "key19": "3FzsnfhxEvivaSzX6kzaCy67P578Si2FJhVZDs6R2Df29T536E5MSzmX15zVMemjDbZm6juei7nwJCit5D3cR5js",
  "key20": "1Y2jy4ZToCddq458GCyMhpgbn16pCRrvjRxF3gumNAxkARaZFhT3y4ipA1QKnyW4bZvVDK8J95KLEXY1kwnCGKy",
  "key21": "3po1oDSi45owW1Y1K1XF66gRe9uNbVnzXN1aYzgW7yy5taT6pWc7vFkFxfdmwQNMrsjDNfRHVS8U2YoZPwzmom4U",
  "key22": "2SJetiW6S3byW3hWsKzJ5zi3fuCT2368WSWqVPEUTJVBEJSJ3T6mZJTTgESCxLDXtiRqFrVkGBJ3TavFHthBifym",
  "key23": "3JHHRn7gmp3szRpw5DtmF4cFGmzesCwu1EFYJ7LqAVwiFNeSufSzLmiAAwioRK4sBnH2A6KxV3X1fSMtRxaikm45",
  "key24": "3Egod3UT7C8eD4TJJhZDGS4k1CaApR1NptPM2LVm44mFn8zVG4b7NoerzXRbJz1WpsKHT4PgFGjkQ8tbMXFyWNTV",
  "key25": "2Fh2LWvboSTkxZ4it5tUZaqeACNKdUsZLisngXuxDDUSjeBVQKrcQsskUVhkp1gGTzpC9UQ2yN5UySbBjAPkgLEC",
  "key26": "2JcWf7cxqhTjrdyG6roeF25N8mr6XGLw8MSmoUgWEaJkzThNUvdNYreZ66mPH6xbS1TMkcxBSe3J6E9HGjNWxAJd",
  "key27": "LJ4xdAnDvo5bw11oB2jp5ZVtZrNAS2TpzfuF7QdMVCTYw4zW8bG88FEPJKYJFqBiuDbnLjTzXgxFJDLiEzvXo64",
  "key28": "28wnYzbamGuaVGg5RjTz1HHgw8A8MLK6LJwTbG4W3A9NiqnX4FQcGaA4WDafijarRVp7CJk7tXNzZsgVwuuHEYpV",
  "key29": "541EPxtftRGpnN9J9fP4wNphs9FtwN6A83xScNrduJwRLtYPYMmMx7KbA485AXaVd69pZPzprUizMkBR6g6au9rA",
  "key30": "45bgQJnPXhdLZg6Yu4Fn7V9rXRjh9Z5hdzvMGQ8bFLbYCnEdrQtVNKLQfWLfkpjCwmMQukwmnB9BiDpzt5b2cGsQ",
  "key31": "3w3foidSJHWiaSCX1UC5fKse1eWvSt5MbWhsnfwGTZZGHXt8JhGdC86CfKBVNexUQULqaVgHkuc1rj1PWHwxRRZ7",
  "key32": "63irpb9amSrwhcnek6UbcVKX7Tmrzrjco6B5Ej8wr7MKNdm1oNk9bSiz8kTr7j8YHCU9QUvqyYF6pK7J8W3yaDXh",
  "key33": "4kSaSFnjXRnL8DuVY6nJaeMBGjFb4Ab7Lgrsn18sUrMmGi1maBF7QU847PKGoC2Ecbw4gc8LiBYqppAdmoRd9JVJ",
  "key34": "42Fje6PbctymmnQ192cyDTeF1JQkwewgavVFKU2HFfDxYg4QwBH6mu4iPef8EGJaV5yXudtPbNTNpUVj228Ma7GN",
  "key35": "23sVBApW4inrAdLxDkBidEwthQMqaWKGXnjaKtkgiHiiRenZnwxNKUTmCFYf49D2TYaoUps63GyXtXEhMFpJrZ65",
  "key36": "67StLTMwb3Dhgssr8XNPAy5N74pstPCFus9Ncys5TWgURkwgKpGe7axVkKLyR2NxTHNad9o82iVG6tMo8WLgcxMw",
  "key37": "bBh5Ky5UeEK3Gw4scB6rQdyo2xjXT7ekFan226kMAVjiEHZs3RcME76nBjZkwaks5ysEGEnhhwShQhjGP7kWPS5",
  "key38": "57oTzrz1FASaBEAQxWSstyobmfrNG7S74skZBvzG4PFMasHdgFHWjLoJqJ4EUvopzcokQyAXf6k4VqqwC83Put4H",
  "key39": "3ScnaxZDXPPfGHkoa14KXSGd2bNY7PV3huLvdBtmMqgbYbGMdXi9UAyR2DPoMA4KZ4S1WYzRePL7JDwneG76PL8V"
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
