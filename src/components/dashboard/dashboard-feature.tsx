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
    "28TKjhajhptYctaJTrirayBkX1zGBsdiDmvgaYk1n2MnBKdCM2k27RoU8boyM6RWj31nv1bHKnd2mNpdBnMBmpQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5in51cHVm5AsgQ2tRu672tCFNZbVVW9nYtRv9cVFkij7CXgWR3yuqvxS2mpjzZbPAaJTCwThhCzkVDQremsPVUoo",
  "key1": "57hQerkSQKsA7iyrdrHSX1Gv1fjESZNbJEvdZa2gF7QaCgsQJr7FM4xyUw1caVhW1ynGEKyky2xaT8qFrh21crQK",
  "key2": "3jbiSnHymGnaU98xMmyDrXHdhuYdaT7GwG55zrX6Ztq8qYSdcFRX7Vn6MrCfVsmZk4ndoZ3cwEpzUVCM8CpDA3sz",
  "key3": "4KnLuZThPNtF1TkYxXfZQPLrTGCjAvjbD3XKu77XYKcYgrxHcCCHCDodUuJ2ooGXrZUi9kCbiGnAsw3noS5Lozux",
  "key4": "2d8QzwauEhqdXkbhxHRMA1yivTCgAUyHadbivtKvRnbAZA9j9joucvHMTJfJsobxBC7iAnpqAtzfFZnHHWbQGkuq",
  "key5": "csYdsp2q2DcZmETZiWpqpR7BvMCr4bTUfZCKBzcJGzEqukkwN8aT5v49ufnhFYbJdqUZLkZqkq3zctZB41yp4ke",
  "key6": "2HDNwa2Vgm1qfqTjzUVCLDbYETY6LtbiVVhXotAzbJyTXt2ShZhaeqfQLFyNxaHsQaVUMKdQQaJX2pqHBvSf4UK3",
  "key7": "28RMmKfsUYDrSxL2BQNq6T8gpCmPLeo5251RZc9n47DeMWRRWP4EPiqnVcbChnxaaqaNu9axnCKR1PuasPycNmpJ",
  "key8": "3U4paWPsCj7sXAFsGd5mGWxsBKJ6nreV3Ujmu8y3copHWCs1rMwnYGTEGJzFKLeLdZXRtJinyzmXaT4QeTmKJFvo",
  "key9": "RNPun4Wy89MKF14s925U7C7gHgcfn3FTP9dLU2XuQf5cBicPVY9mZS7rSBjznM7ExFAUCnhKraayJVWKA4tXiQD",
  "key10": "3qLzTWqCwnTfWL3NM5dLDnAYSmj4FK57WiS9pSquSVm1zurVAQ2VoYNfP7U5Wm3N2YZbzvBj216Mr247w8vfRYX5",
  "key11": "4YX7XoncSjdoem2nAdTZr18mfvCnEvrCXUSaD9gg65dQeJzM7XUDGB2ACAkdK739SVfa6jbCB4MxeZ1FZQPcfvDh",
  "key12": "j4PbXF47zFTkSxZvwmWRNePF4ZHSh3FwdCsVMa2B63wDBoZbABZXy7YtwyrFRSCE5aam2n3a6ecYMYqPJWZDwBX",
  "key13": "713EEnFVE7n1G7bmxjvWBxGYA3LN3VGV8xrzgn67oppPMHQo3XXF32ACda6ajsGwVMBaVh22EUzEt4kGPKvgZSN",
  "key14": "2cTpHh6xCWDUFemitcUr55q3cmfHbrErvAfE3YEqPBkhUoaLdVyrBboxkn955Xr7WdBpNtGfEvakXefEV6CUHHwd",
  "key15": "3G5LKRVWmzpns6nFDmu88F1kJQCRMN3tCauKDdVUG4enk8DAPFzSCDoT6xFvpMXrPYiF1CTysYRsVhohDXb9hptg",
  "key16": "yBHjGu1SKXo5BGfXJ7jyppYy7muhcPH7Dn1qsCdSee2hHcn1xvWqPBAamZGTWfcQtrCLbG99dtvF8tG8zHgEU5U",
  "key17": "4Z7whBzTCBw3qb8jR9T9HtyfceShaLnvX7iBNzrTyhh1hA7bgwyrUS1dEsMamShRh4DeuhhDhNjdyCrSPZQ9eTFC",
  "key18": "3VoHG1tFxxrY5xVyu1P3zPhUEv9QJW9tPTGxiZ63hrUSWPwf8WT771ZW4DD4BKVUiCZsSj4stNmqSxvTjYM9DMn7",
  "key19": "5Xn385v1CSC62g4AT8Vv3oHdxVy8Jf82phKYNfJJ21dLvBAbe7ve6Et97tcNN3CKYt69Cm9k6RUpGJH2o4GvudG3",
  "key20": "WE8YHPc8F638jyPATDjXgjjpe9AjxCcLWYh8YsenXjKH5xotYLs9xRVPjb82sPVBpwPSXXSxfFUTqhHunyPAxKz",
  "key21": "454taZMB1D7L7nx1Yw2yUMYqGFEu7k6Rtoe2VSrZZJkt1C6AYaXdR9peV3MaJjaowCMzHVPAtUrmLA7jKUKPRUVF",
  "key22": "2kLiMdy1P4DQQjVW5ZubYvLCpTz2ELpyRH7jAbap8t3TmtuX9hcc27ysdPxZ7qfnkMirb3qx3VAt4CeWbjnLGgMo",
  "key23": "5iqgPWKMwQmpDrdKZvNjSJM4cMLHzrSrxLBRe4ASgRqSaDAh6HvSdfWWfEDdGNARz5xmtHk1Nv1kwnqCK5Uj3rW6",
  "key24": "LmgvdXc6jWobBGRE44Mfw8qDnJ6fPGPQizjBzqSxRWFu2RJBqw9iJyNZZUntqd5pXeM8D3LCbqv6usNQ6JFmhCt",
  "key25": "2fQEqvbfonuC58SkW5mxMSE68SGbHy7nEoWEeHz6NNB2nKCFtKQ5zEik8QHTN74jAwZFB9Knxq3fTkEoEvurHNKH",
  "key26": "2XL2v9uraC5sbfv7eKJvvAdq2FZUJ2yw8gQBWCyDCDcEAKyfXNPhSTpHe23kzmNz25NHoGHRwq9W8DmsoqXoGy25",
  "key27": "BjKpvFU4bDgseUVn1mkfTxdq626vkeHFj1eL7AxSD9CXSFMMd5fsNDcZAtUuqgrjUTxEgLXNJLFEfQ5qjWZMupA",
  "key28": "5NVtgWmK4rZKyMLkoqtrSPmWdADiKJjonH1DkHAL21WL8Sic8VwD9U6jxRQmW6XLWMHNCq6LDG9YoNtmLhvwMESf"
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
