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
    "2kcWr3CJERp8NpuhLA4KyY6R5LLtEF68uWNdPbp2Mt19NSnnwud8HboCmmtECZBE4SmvG7XhgNGCrG4fbCQgbUfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hg2ED9HcnfPnJ5Q2A5ZimBpNmAdGEu9arfMxC6N9P5vaPz8NhQV49y6QXchh8Dp9NrAZT4q1QobMtNbt2a8QrkA",
  "key1": "tkAwqEXmnW3vMw6vP39vkWDz8K878WinRKnR5mvWPCWvyMEVqVarrpNKF9WH395ce2c6ZpRZpDp4izfbSEZLhv2",
  "key2": "5mTeL7ZAqM7YKy76bPxN6x9553zdx3aTLXgSiCVxuEoSscJgL3QJFQszX5eKNZES4jVi3V8XUYC9aDT81qHVoDSW",
  "key3": "HVXay8VPHVaGXMbrjPzWPVLryNaj3yGFDTawgvkNYcwFaVsc6grpbCxHkHDLZUo7oxwMwi51UxuEHTcjdF9H2BU",
  "key4": "2nDojsBnTzSmcbZGZNwsg42jRdpTDu632cABF7BQjB2Bz7JZLqxxXyx2VcpuRbZ8Ja3mrot69mTCNvoChkCPqbzc",
  "key5": "2cU3jkvU4eX6KbAicab4cgqEmNWZFjEHVMFG8gt51gv46BDZcDpUyWmSi2DvhY3HHyV793zioC1FKwDEu9Cds9Q7",
  "key6": "tFVrdbg7P9d1RWJnP1pRbC1S2eieC6cAkRGhGfiv8APQCZmG16EPQj1QxUB9moDgTkMxKDqQjCuMggu1ckxz1xf",
  "key7": "4is3g8fofztE9fUQBPXixiaYg4rP3Kg5wSxDMXzM218PQ5PPWedUweUVHsXYoLuiRXdRuduCJHwUebZqkrjQs8gZ",
  "key8": "2UWfGx7bnmFW8YsBSJs8zpoGgSQK3vjd9mrFqUy1BXhBXPHTUYbURf3cXwpR9u5ixZqCbWbh4QWVxY8WHfWkFTqv",
  "key9": "2PmXJipX1xpDP8NAXy2tzzz8tY4F5UAGEqfoUuNVaPn18u82iu7rAh7JHcnH7LpwwDFmEyWCFEzGWbF6isQVkHbm",
  "key10": "QZmpjyyDep5w1t5EfVB4YLS5sDmjktjVtKSW51rym8fCuM7qCxKZWPAJVEoBBgnYTmpGuMuuvzFLXUnh7Eyytcx",
  "key11": "4pJ39WPq1urAVn7NiLA9SUNoKw4VfdpZAYP9TH2jQ2ECAZ3BXVYanFhjGKaNnwHBTPeM5cTthzYBYcaLRGq3Z24M",
  "key12": "2yeMQ8qTxsuc75NvcgURbQpFWvc2UZnQJWDSXZXPJceQatptgh9n9u7d4ahsNpFVzex229xk8kF5tcujXDqTCUfF",
  "key13": "bim7hMyW2RY1G4mS1TsMWqkqLHg3fycasGNMtc2X4qpQ6pnM5JhrUqb8q32AXW46DDgHDT3wXvrXTTzG3ZUPwDJ",
  "key14": "5DinTc4idaiMCNuFjF3gEdjVU7emmJHJZ7qPRRP2sfx3ysyCUsPWaSzb5EirCBNBMVPB5vbWc7Pg3R7YHEp56Jby",
  "key15": "5NeHuURZZQPG1AskPXxJu6naJPWaquzfHXRLByE8nCwayavN26h9BodRZzYwHPHyutEmYkx9YXXvuoJckC3Wjc1N",
  "key16": "CbFXstBSxFT2hXcB9ZrArJBpcE4upQPPEGEcJ1Fxc4mKNvugUh6oXsXLuhfuN378HHn7ZyR3GsMEUb1SSUbY3dD",
  "key17": "59aiminEd8NtgZAnTRch7TFNKkjkSCXBLLzLkw7uRn7PBxu6JVBMdqNjsrNNijxKxER3TBTZRbga4XmLZYnKYgNu",
  "key18": "4WpPtWzBPPMTHT59bC38bN8k1PiLkr8eiE26gpWMP39pHDAfkpLjoSmQWTqh17pVBRwtTc3kHYXUSfHim3BZyCN7",
  "key19": "49P9VVSQMR3w5WNf6j6szfTACKJLG3yWH8HMZ8Z2v29EnSyKjcYCEjuMRSKZekQx7Uiu7Ddpk3hd338fqReDjD9p",
  "key20": "4DexF583VUE2PMyqo8CHPKFLjfZLsuUhSo4pyaMNL4d2SUgk5gZzCDvQaWHGyet3468fyKxsS6sRdL6KmjVXSN2S",
  "key21": "5XPzd4WBGqzgmA4mBDW3o4gvuBP5G2t5ZKb1eFKATMGy76AdxzkS5T4m32xCV7aNxuQfY8MoVr8foBrPpCryhoMm",
  "key22": "2KTFrH9N69ejNCWV8uTdi3yMFoUrXtfMnNbcAJDbrpaCs1xQzmysPg715keDiMmBuzUdw7bjNDm3wG7bWUH2dvuY",
  "key23": "44qKAu7xbGRSEWxEeKHXwjtKtMAupYx28PgmY4hFqi6qyxbxAeA7veKZt7571qk5FMYhNswrDUzRh1LAUBYethNZ",
  "key24": "36vBETeg8sCD4kgnk1Wb7ot7vo355WXE2B4iciDaJCuD849Gyy6G1EdQhmaZjhivfhEBEuVnjRKnkrRf862KbceC",
  "key25": "5rTJdDHCkkzqJhjWR5RxEYr8jooAHcvmMo99jMjD44SmuuaQ5NeqWnoCHC58jbqgoAXk7JmE3DCG2PiXpQTeXpzg",
  "key26": "2JqA5YwGmLEhCyhRqvcMYDQiXUEKxk4Wnn4pve1QKjuAPVdfVaLpL4F8LqBqJhUyG2HXAYpxxmjzqLencXBVYYm6",
  "key27": "3KffpRN3t7UaAWhGFuwjmkftDtQwhLRNSe6MYDzj6DV9J8bhiwwhRqur97fGNGh4rk4dB6EWu6F2Q4UaJczKxFEP",
  "key28": "3eENNBgpnujbAxbMfTYgHwjho5XK6EqocBSnWS8UxYQrokwAV5AadmNq9BuVEfLvpoqxmMbJKSXW7CX88UqYev4f"
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
