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
    "3gLtRGnvM71ScejkQLhKHuZjMfhcF3doCAbS6LdTgzGxxrhDT1yukKagFZZBF4jpdPtVz4BeBeXHNJyZGhYon7nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UH6sNY96FudwPeUHL4a7i6woKdirH1rUEmKJxuRzurJssYZdPyYy8mS2h9LKAAhytXrp8ZJdTda9wyzhnKxemRC",
  "key1": "5tZT8UPW9tvP4eig7tJd5PFZiVJ6fFQRxirP961FY52Ym3nuu26T2s67dyGj7D6FP9VEyWSeyeYJdEBJ29xgmdSt",
  "key2": "5LBzxrSZ8fQUBJ177grxcYn9zBLT7SAaLQThMUStgNik1hT5sCCSfV521mdjWgg8krZnut51g9y2mzsDixPbsDJv",
  "key3": "62DBZRWdLVLsE8qExZs8HVByQRk8EWjTeiyezNLzLRvvQGcKdFgG3dfc1py9nJVm6c3gqxTv4rjBkFZtAwS6CCb6",
  "key4": "2EpEYoj18hA8Ls7TMdcV4KofwcZQqBnJxDaacL6UigeM9Vnkf8J4Fo2AgHakg6UmAJiCtqi7sSx2pEHWrFE4J7e2",
  "key5": "4v2R2M4m9DWpHvYzvguFai2EfnnR4jzpADC1WmMawcyQK4it41j3TYAtGyrnHZML5RmfTH5cP5rHo17Z9X5y5vja",
  "key6": "2JR61gzsjQsa9SrSMHsh8NYJymRNhqQbc42jjpiTuWyT1ZnAEksZyxBVrFvG4U2x7L6rNYezFoPBrvX8XK5XTM9m",
  "key7": "2QtgdvweSj4EX6QjJSkaFQjbJpA7X3ypGFwrWTnDkVzgzmCK5aZ6vZXKAHpW3VqHn9UU5r9LNpk2eGRawhNszEXE",
  "key8": "23snwMEHJnfPtx2dLnPSUahpuEuMV6cLjJfRP4X59cmduDAiFrjwNSpdsjh3YL92M84Zr7kWkTBD6z5wC6WTByej",
  "key9": "8jJH2ytKNAtJwghYQcTidwzNwnRqURBUivCLpQNFHyNy1cd7zTpucbDTBoqR3Xjfr7z2DrRtcS72CtuVCtq4P2w",
  "key10": "2xcyzYcVHwsnBbZfHbxFYSvqzW7K8Q3gkGdeJ8VFTMyTzA846duZCmfdfbarjBr39RWi8D3BrWvDvXPa5oUwXh2x",
  "key11": "euZYSmvAmq31SG2kHoiigTwMtkqRUopsB2XuYoYR28G94UFWdcbwdCniXXoDNPo29pPEw3d2YKbxX4UUkzoBuoy",
  "key12": "4SikFs7W3kSbFFoAmLuftaQJSU2FZGbAwAEGW2HtaZPDZePgk5Gh1APVUeaquwaWEhsGErYhsAekdZfpazcci6AD",
  "key13": "3GGK1kLLJwxAMSdFKvVnojLkY6vqZharPy1CMEQHSgXvrEdzwLravgWtWRwkRtGh6EpGhTyNLgi1aaoEAPNaBzxM",
  "key14": "4r214gDY3MVfHECSWeeQtJYnUfBGVhuTzZvPcY4oqpeoEHAvRXofntZjiZyBbAtSz4TgZKyXiLStHjP2U9JeHSLG",
  "key15": "pcaQoJxksaY7N4aeTzJsKEraC5MrS17TWjLayvGagU5fvpv2G873VGxgRvWkXCFD3EP9yKC41u82ARpk5XRhr6f",
  "key16": "KiayB2PZuNJAhcN9vpGg28XEbAYAb7B56zkwa26j2E3jt1qCa7wa8DqXpYiAw8VNiNFrvRC2oCEHSxowVgtRm53",
  "key17": "3LDD9BtAFfsgMLuDpbsudBpvjerBj9kyjGcTXUEArKZMxU4B1aQd2hXYrSs6iWw3EeyoUnzJVu9cbf7LPgp2hCgj",
  "key18": "CW8vrGdD9hrXAovyC5nFNpgaAwy5cR5BGzNEiNbtkbo9BT1tQVkznPkoc8MtyPstAZjAw2MPKTGvgCUtPmKBNFF",
  "key19": "4WqVfXKkB2PLaveNq4JjNQfwtf5SxYd8JSPcdEo3dfrGAyagcYG2vVsUELMFqfnFvAnFFdZ97D35mEwVvjUGu93m",
  "key20": "53pr84e7s3rkjSYU6ALc5Lfd3oRpvhDtQjGKX7wBAqSX8AhFMbSjURcRukpYPHd2KGVUrQF4jmPPZ51Mgsxf1EmV",
  "key21": "3bb9ae6cH4VaqGCQVUv16L1b35Me264eGyQ8Fg6gzY1VjiTyXrD2ZYYjaFauW6gxkriUXWnfW1GKDezrHBP3JD8u",
  "key22": "45DVck9z3MWcVEriNY5Bhhrjbxf86eEsuo4kmmdYXSZRnX9jpwdnbp4qvtLngjPbYw3SKhmy4cwkmbxR39UxEhg5",
  "key23": "3D9U6WN8npDNJvkwChoh6fzirQdfu59NNy5SFuUYp3Lumb2px8UA4o2jc5WmAwtNoj1129qyd5YGKm5ycFuDeAU6",
  "key24": "2AAVQ1YSmw7uPYmEVkGyLXGe9YPctTYDv1tYe3RiC4zNrcAvLvrnsY4oGC5Zc6V9ff8YT5GSnUUChufe56cn6UBv",
  "key25": "2XJavXHdQsdPu4ENev5DVR8YNdPvvSbkwkwqBk1wcG37XNGDyRYirGow6PvbZRq8sneyDWKnrJqGYDgTTK7BG3gy",
  "key26": "Gm76nNWBjzx1YGXdRDCiPXuR6iccBtUr66FMjytyFZtotnm6FjAg7rvCaqvzLJjcM67pp82d3S5FR5b2WAZkkTm",
  "key27": "4KZTN8mVAQ1ZEhHJjBFbJqAKcCLzAzy1jUdmsX62cFVUAYst2u8dLFCshtUHTd6z4zng6VKVbozEEJQ1BMAH1Bj3",
  "key28": "3w3cPcQFBBvkGBYTSRmMc3zERxkFGVpJ8XV51bC6CuJyJyiMvcrPzo6papfcvXR4W5wFz549kBzqmoNzcWJsLCBx",
  "key29": "3nRNXq8jwfyqJ6aS6ydu9hmyiLciBBz6j6zJDxPDvfUhRRfo5FQx4eM8uzjMMyF2rtATNqHgL9h9WmbsFJAfNuJN",
  "key30": "3BVrcwP1Eu8Ytp61eXprRWHJERqXbnhRbb44j5799jfYyxXamvgWJ849DWQKV6EQArbMmcL8aaEscrJdPayES6rQ",
  "key31": "645Yke7RhYmNy8JdK2QYbDyqFUf8YBHKGXP94iRkaxuvALtSgSVgKVzZ1Z87EEcRM6jz5YyjcRd54Hd4Tx1xD1Kr",
  "key32": "4dijCDffF6v26Uk4idzeLMRoGHBfuhFNHoJmrZYtCHSSE3UUztDxJXniCJYhdHrYGTTBFnQCe4PgcgMe6UuwAzxV",
  "key33": "3HFeukVXisHYA4idQm5A4DXgbsedfaNacVk2TwKsJ3oL6aphnM7X6W1rk5ma63Gi7WPoEzrtxKticLdSUKDjnUSZ",
  "key34": "3PmnwVkvJNTpxZvzXey4ut7TM8wXozSPUgc2CDsFuPKinJgQdAK7kZSpBAUL1hf5Tp6prdD9AHwGSPgRyWVZCY7Q",
  "key35": "2AdDsLxWNh3Ypfc53ArbyYEu2Hq1HrPDEEPEQAAu4xqhbCQpJCevnqJ65ro9eakNeM5kT67dFzjePrEJRYbmcbbf"
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
