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
    "3grdKvqhY6aEi652YkfaYsuBbS2U2xGYZK8HFvNVUdFzZjeLBVSEG7YMAHSyYhDEHtNjjqx6eSHdPvn9AuY819wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZoF2sdsdGUxu3GUxxCbJ5F8cB214PJJqhDVUMhbo8P9LvwTntWGbUBibzFAXNmnJn4LA46qP6JvsRvFQHcqJoY",
  "key1": "4w5HPaXSzc8cKq3m8vzRRak772Xks7xTsmHYZtD3aw12jmirwGzNaMWMYLCe4HBZGFs37tk9YpDJ6QCFVepTrJ5z",
  "key2": "jz9YMkLVus13rqr7YWY8GxaqSDDhJkGwfTxTWBcJNCuH4NBCuKPDSddR5HS97Yp2mxKfT15Rvxu9gM62GwCkyJv",
  "key3": "N7wRd34pTEV6n58BXFPnBVp8NKXLhgJQd6QPnvzZ8j4PFK6sPCXyXCvDRGqtE9Rh5hto6AxuLpDnEfWn2NK7yp3",
  "key4": "2U4yr9t1LrXnQoezL7BeeFXT6a53AhoPVUvVXBo1zfVnJPho1icudsiNiE42pek3ZLsU6zzcfBASm6ZbKXv5DYYg",
  "key5": "mAMDwKUMMEWuYCUwv254ycWSDMssbL2jhmkmAFiboVCHTT4TQgxBtJ6dMKG1eEtXMRKfnzXQ1nqk7jWpyh2apuV",
  "key6": "5yBaZsTxdHzyDxkV2BjiGBhfrMpiCCSLoE9aBe1XJ3fhmzK2dsxuTqfoEYgsTjG6MVsRKFytNdNNRnTvHtAf65Wa",
  "key7": "3NAYm78jdLDDPrvXXuqwoT8nX36Kt4Do3QifmRA6F3UoXEHzRNTuC9ZTPoJumS4CPo93uAC63GzDTP6XCctKgPfL",
  "key8": "2JhkvBX7HgiwYZYnhLcBH9b2oh4pYwwhRL5cC2dk1CgSMDEfdcADaBvn7rgghFfaSTSykDhTFaEew7STYDC8qmJP",
  "key9": "3yFD7V97owS741BBuw5QBEkJnLLDgwiTzQK1apFRtbJFqBnah3mSwmfiMcwPsMLAQcyu81uaECtb2cND5Zii4zox",
  "key10": "5T7mARV8RprjcV7Dbsh5Q8mnk8PWjkpQHxhmtRSsE1PyrBR6dHgGfbbDZhDSE7ufc1b5AjPYboKzgyAptcF9bAUf",
  "key11": "67TXGWjj2zvyjQQiy9LWi2UhjYWJMe77qgc1WsNNCcY2LS6ZkGL1xF5Djjh3aQ2uxv1BAwegJLsTChGT1iugEC3m",
  "key12": "55x9pegyjsvXuehoequp3hg633ZC5uUJD1r9X63gFAu18SzbKhck9jC7vgFSNougSjAFSw6YZqBtoqUo8e5V7fL",
  "key13": "5UWJbhsuNDgu2E1Ab55YxqruGZ1fhtJPzoUQ68mwgvyZBDGYvEcBmFGVTz5bjtnExeKR1ZGJR4pUu4KwvoDpsUnC",
  "key14": "2msc1vBGkcAqBTnGh2WYDcsBqQEF9V8sQFphz4ABYXnYNrvtkdajSjNUcXdp26Jk7UTgBMngKBiD7rrU2rKsuJQo",
  "key15": "32XPywNzJ6z6HYckGRxC1guGHcqrzS8wGmde1nxr9jCRo1WZCNA3LYkAhbLpBcrn7Jh1yUtbk3tCj6tZURBym6we",
  "key16": "4QDS788BrANWQ77gMgNitHznUf8wTo7pUyBQAFHFnsByjnXjrG7d26t5HrW1WYUxJbioA6GWEUs4f3ivJ5Lmdtep",
  "key17": "5hZnsFfMS6LWACsvYfQD6bQnnTPvmPYHr2j5BurCUzm8fGW5cM7f5buUyUpmT7P3QKJrGsTYxLtP2T2ic5ZvWSpN",
  "key18": "22qi6zEvJdovU3dt8nz1nsG7G933wTB7dvMgkXxvUyadsxXi4TKze9gPP4ay1V9HA2AJytyY6iRBxXB9nmakjhTn",
  "key19": "3hz6wLB1Lr3zTKseJ6UkcjpCeoTMGA7PDqB8WQ5LxwZsjEs4fLbjFxR6gSoxGj9dJ8Hqu18ny3KUdFFqLRUT1C2o",
  "key20": "4kYkWy63EKcADMwF5WUNY7iQhPeGLxVpP4Bt5gSe8Mg3aoEzDDnpdsjbrQcZVUiSt1yMzMF5CtNUNANjpSMgV1m7",
  "key21": "5C459NsvjkTQm7yoVpqGZVTR3st4BUkBwsFd3DApQttSf1k9LSKpMWqwzZayfqN4m9tX5iYPfH3Mgr6HhJETXihj",
  "key22": "33q32xHoRZeeDUKdMasRQ5ec8KW1FGQDc65zTDGR5grfgr3rh9wsNuosbeD8dxcjCkjYtSKejZCiHtvZ3LhQhfP1",
  "key23": "3oTWKP4JveYCj9trbUYznrFYZaPP6RDD9eV1PxaUhgjEmFnuw8mNQpvG23Ra1ofnaS1sawr2f6nJgRAAJCbEDZMA",
  "key24": "57mGqSZFnvnWLntcEofFeremM4vAKPCXdg2GPH8DKw6GcxgAqt6pwXioqPpCTy2kuSHMAh1jdZcHoTukq5J2hx7e",
  "key25": "66U9SvRcPqxDP17LgjprZEQz19xyKgpMD9vYaSnAxuEcLii1a6mvM6htqD3N5rhFv5XKx9R5DiZk8DcUXqKLFZjA",
  "key26": "2DDBVsSwnqJ6jdaYTVEo71W4HWYgjFkkPZcyuQN4a45ezmkUDcqUVpcDquPwm6wjYfEZ86TVVzpHX3CWvLqdYRid",
  "key27": "2ZRCKQ2MyPr4Up5Pp1Wt2zCDREKiFGhqbynE8gQML5oVjjdFg5jTfAvrbJSSxiiB9AC8UGsYuNamswzRaw82M1xw",
  "key28": "DesJneZMDEeze27R7smxkUnSALWMTa9dkKW2C2NAkeZ6YeAcLDBDUtqKmes3z99dK9zHQUJiudWBqPo5h244wiH",
  "key29": "5pJt8ViK8DuQjmhcT6coDEwoa66wpyu2uFQiWsuazoCRFfS1qSZGfYDnpYoFRXvcNxt5SqtQCGxVuAiTfVUSy9Lr",
  "key30": "3nsFJJkVZrmF8scmrWDaJxKcGXSdwATfwVfVzAaGWYvpjuLNuiMd6JPef4k9byfhW1VBLGt1z5Z13bxabt31QW7k",
  "key31": "cTUhLNfKiYqCEoz9rycHevbghP3w2DLoMzAGPHJuRQYspKAMGgrTqqEoTNCgkb3t7DdHG4bHYqxTwLPgeiLoPZr",
  "key32": "4y15M7nvJiqknSGdX3P8MhbVLpoQtH7Z9PEFPrqynStDzHveUsQ8AVWSyV5LybX6uhgkvRrqnhs6uAUaRjTg5Wnb"
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
