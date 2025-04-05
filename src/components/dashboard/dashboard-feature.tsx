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
    "27Zy2ydxuCPm2tQvr9At1MJGFZz4bz7GirJfsWd296pAmVu3tuHG8d4SCVkEDcKp5oXsA2dNxfx3ziAbVqbETv19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX95KFXQEbtCsnE6X5u4mNiopsLnded5dx3MGTgvGe94FKH4R4QQJ2EpJ4AaDWiTEe7hkx2yDs1k3KRW7GbQ6e3",
  "key1": "5mbQpJjYdU8L4muNdo3HqrA4JbmGVBpMk8ChaEP7CCTfRpofLFQDh5zb19FvLPTyDiP3k2uD6rSbbhEo7MCdaiy",
  "key2": "5BzjvrqkGi118J5HEocwEBXwB3QbaZacD9CAitbNRXPv1ECT3bSaAdybhCa7RXReTKgqBLGqMbox457peBcRMTG7",
  "key3": "4ezDhSZd4R3xRgt3wseFFhrRdYXv1zEsPm3QyDJqRagWic1ggtiALe5jJZoyUxctGQWbcYk8JDHPs4kdtmdpYekE",
  "key4": "4Q68fs5TgEGkvj6gee3FXvjmub17meE688sPkNqGXY9YAJqxr1qYqBvh8GTioSok7Qa7NSFqJSEV6wepW6X882D9",
  "key5": "NFEC4wovqsuG3xRbdgVqfGFxbTreEgm3ros9qqPxrCJrGfU3JpToMSHD7M16Bn3gkABWofR1xkt293478WHhp2w",
  "key6": "mLvbHAZTmidZDmf7LvwLSAZzg16MVrDbDwWG9abzUk4DN7ERd12EwtafcsBaX76AVeRbnBK3ii83RKKkQKzFb3w",
  "key7": "4gbEzFFcD59rjQazDZMxq7VxSiUsUbSy2RBhKqghpKNGU1npXKgsAFhUZb3hkPxsV7pGof8TpqT6ye2xgyyrez4g",
  "key8": "3srZyeGkNmAzXrdC7LbPGgUKED8HF2NDE7ZTMhjnecJPfEVwNRXmUv7xiuJJxs61PMB83kLVRqnQvXhQgvPgK8v8",
  "key9": "4SrLxZMDri2Qhwy5SnDcrfm9gLFdAv2eCVPr8cUL8TBuaXJMtEKMxKzz3rMQy3XHwS99AKTxUu8M8kzj8JPfuPtX",
  "key10": "3tapNgVunwgawgvVsPES8eLNuci3exLN347uq6F7THqFkAN5RoxMa322kEo1fZpJpc4V48DLpveaDA8fmMogAwUL",
  "key11": "2Ti6BzLYEzKuXpmPF62aDT36SYaqoMwfErTTA9ZHJMB3MzQaUuK8Uh9jxNrH8uHdCocitr87um5Qe3Vn4KKMKxC2",
  "key12": "d8hchjgAGRNdV4mDG8n4sGVLwRqsJ3ynVENhS4smXfoUS8Zxtah2yFwv1PJdm1dPL8iwMRQv8z2YpQedH3zWBd6",
  "key13": "5jC6Zn2v8XGUUmAks4ujFUj5hykp3MBV4DGtfvGeFSj7U7SakuJAGooRNbWSNmEmCWMhiAqiC78Z51SNpx4NQx8r",
  "key14": "46AbUCW9m5PXpsWipxve96hXukThGRuNhKwRaGPCSVbgnwo4C7RDSfwNTEjfFamMx5P3N2Qr2myEFTHa8nwy296i",
  "key15": "k49FAbbdRgRSoZXiKoop7y17jHeuCiAZEArdUWHQUTBMEYTj5cY2EGFf8FFZguGpgxehxRPRn3uicR355X6D9sJ",
  "key16": "2Qy5ksKSj7AhDXFgx4iDcdarmGajhyXPWiuKY7mZpJh2emPHKVEYiuU1rxU1poLNCWVnMquEXKwrZVv9EEnnAPJC",
  "key17": "5c5FpmndnYgLvZMLb6776JBRbA5UqN46fZzS9JZMg1AEqTmS9oH2Nfzs9dRKUJkW8RYHHcMuGRAhaeU4zD31RAir",
  "key18": "gprcgy83m1F89mJUnr8pUpsnc7je5AFA3yWp6tGHNogPrM2X7DyF7N7LzzznbVTzM7aPJsaJvECGJLx9oe9QYqX",
  "key19": "2fNNA2geuVuEg81DYaZpzwxWvc8V5H4VorQds6WR9c37yNDTmeTUw9isDAGNmqh65bs6dK1wqZ3b4UUd8VfBeaA",
  "key20": "5XAe4C7pEQBNPBhcA5Br5rfWZ8WFydFT6hM195zPUkLSpP5WmCJarCBan2bR88XtG8SMfqG2bovwxrNeoi4Hdkj2",
  "key21": "4gK39sUmauqjkNiuZzm78JpjEjVPkYijczr5AJ8eHk7atkjmkm6Nft3pA9RcYjgQ11w4V1p2VWLX5kGUeFKR7SCB",
  "key22": "XGChPjixSz29iK9u7xBy6gkcmpojBGYF2umgwDeNXusdF57h8wpMheJjtTim6AX7u6bQqGPvRtpVbeg2DDsvX6F",
  "key23": "2wHLuBYM8D4uhNQ2XDebMZ9mME2vEfoYSCbk4jRY9c9SG1qoQ4B3TUzMKJghAUteT4zwvnrMuuybdCeSJh8orRDW",
  "key24": "3krj9kz97W18DcqTAcN6r8edHC9S6FuEYGBGZvM6XwYDpkKPYPzf61fxwRNfCv3wwjeWg9FS2gNULNy7V6vG6dD8",
  "key25": "2hbfDeRVB6MtkZAhTr92T1exWbr6Ec9FpADouZnSRELfyPieAs76s1Ft5wZT9XVTswsZ1VF4bFpwyd1VZSN65sN",
  "key26": "4o44JWPQoPCBrRjQVbzRMbDStH8BnrnGMuQbqnwyBWb2F4G929HWqg8To1idX6PsCvu2kkKo8RG4pyU7od26byyZ",
  "key27": "XfWSQbRip4EXCNah7ETZv8aAswBQ9XUChXJsRv52MfwFun1ZypYfpwWnGCKnDnHLN6C15FTmDa4afmjMMuTfuRy",
  "key28": "5DVydYXvwDw1oDxNLYoC7xecMBhMoz9p4TcbFwq4SExZ7jRwBbwANdS1WNxVyid1aqWYp5B6ULKp18P6URJj9eKJ",
  "key29": "4oyUXit3xqp7RufBnTKgXKvWfmTT4eJFqQwnuvuM3aNsGjWBhQhucF9VX3GLzLvRMLryc3J8Z89oV2s6WaLrU4eq",
  "key30": "4BjFwzVrnDfo4VRpyYLYQvR6PsmGEpxQpGeov9GmVr7fWQuKNB1KBfKtDBcK66WWRwDw2GPxkF7MWRmHp4Q2HaKN",
  "key31": "5mMavYDKaitckk2h2p329bwvYr7qdoJnZMawNTNJJfUb2w6RvV6hxfNrwZfJHGtFGnB6CiSsoNHWLUDXzTERprHh",
  "key32": "3dKyFKGzMWzxU5aHsGcDeGWdPhfJukBm72FBeakUfi2TBS5QPCo6cL4Z141iN1XThzTnYTNtWztXbkTysMzR3xQS",
  "key33": "3uqBmLWJ9sp5MQRVEwtfvjXcS3k8bKfrLb8VEQvdiAxFdm9cvH2ocQX1XhWHidTJA7koMG7uYoZ5byVYiyvvqCch",
  "key34": "4xMTrEdwz2wb8ZnyoDaj5dkQ1uV5uVLZbzAi87UxCQ1i6iN8j1C6A1EdfwuMJoKDr8wM263MEdg7HeEeJ6VBU4mu",
  "key35": "46dPuG69P2iHoTCMgrSRL9UmU5BAoA22UpNhBvJgeNkBfJWcsgMsWiqPcvzPqGwpDUiXimmGhd86M9vpVr4Gc28p",
  "key36": "3rt7ddUSdmJoeZKQE6hohorzXy4VB8wbwbTb5LhrkHYTyMcy8u9UxWY5xy4gbimEJxaT3NaCAxJY7PZuA46dVEtb",
  "key37": "5psZUCrpGDbJrr4hWLmEtLxaSrXfxFbhiZW8ec83nn3NjTETPrCH9fQ5pTnU5cGEV6akyZZm8fB2GBimfbj7641Q",
  "key38": "2Fx4DWYrUJzPUecANTe2gLH6E8LDWg8v4FnwjjgzNaoCq5pYRxbFgFhvUbyvyDB4Z8nAo7yYbQDLkNqGUGZLknW8",
  "key39": "67ir6DZDBjHWKFfYomGNYoq4MPRcc8Ux6P7BReEr3tmdjojhGQGzw4xCFYw2MudJ8Uu8g8r5VidBQXbSPeAFJwwm",
  "key40": "62CVoMevMC7L5tRAyz5Yv4cA7BvezheP5jJ9WH1TTdtJCjhznrqpZTizrHSfyEyzHvSQpT7p4Cgub6GuT4q4iNNm"
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
