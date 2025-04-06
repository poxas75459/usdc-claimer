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
    "59qnnc9day9Pm5x7w8TLZuPigT42tNZT2knZbCA1VY4pUxZDRxkot4Ndv2VXhrkdmRmHe6QtrVuxCWzR2xHh68B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpKFxNy9HRuRpu4cDDmP5g5M4dCpCwB4CWvymsDJ6dc288SaqU1icF3JStbJELWDrtmEdDVmDhVXwk2Hk61g5nc",
  "key1": "jeXdeMp3HYgNpxJ2SbVjnK4YZzojCum7cXsz69h32NdeCYHyksMHvqLfzDCrcZtPWHEu1HqyqA2Gw23nnHMKycC",
  "key2": "4q53NT4QTAtc7s8s1RyoPNUiDQDUKG4u3DDQGJE2BSZpighcA8vVGxRKs6F4ou4biR7fj5Z9cZ4jGpiYR6SJDFBv",
  "key3": "4sGHGzHXYAYrqxZgtFt2Vn9VYeMt3dHY6W4rr4FLbBr9UuUypoFKE8GdZz5iYdVx9aCwZmGFU98uLXDMusQqp47Z",
  "key4": "2ZTmttbaTeMXb4CLHigjBpAnZbXsXkX9FNxerkLATSyDLtxmY6QpWCZhibhCxyMZRpU8ML9wY2CsW1RY2Xm3K2g7",
  "key5": "2QoaHw7meRGVi4UgiQCJyDPf43hLFZoEbinsoXpVG6sR342AdRifU88eMCmM5SFosAmKiCJ7mi6ttuFMV311TggD",
  "key6": "4H3HRjauozBTrMQ86mZa4gb8ojhU5DCdL2tDESGLnz3AhA3RRZ8ip3MbuWGSM2wDPGkjvBUhEMtGRBmQ1h8W17CU",
  "key7": "2rPdg66EWtUQr2Ja6tfcoKRpQ6e4JBf4RmHxmC6DzqUNYcChrmzDBF8jDfSYtsAoe8hwFgfSscGzTwpHvBt73x7b",
  "key8": "mQgjTL7ZQSJC4jwGiFCAjBoJC3gJEyJT5rxnkdmf4C9TjM21SvfhgeDDek5tXkLpJGSKRKrsea9kzfP6gK6yB9R",
  "key9": "3GXu1oEYCrbabbuCEAadiA6XHfTCYUyaVskB1JDxTGUjg948v1mfruaCjP8EhU4mPXHa2GvBZ41qzGucAeyXvM69",
  "key10": "4rZMgFxMfa3m7SuDjqVaammdf8Pq6xEev3AwYbuzssnNq1yLXqdaVU9fKTkAwUGTb46BmLN2TEvaqFnADJvWYoDB",
  "key11": "4Qhc5FmhUgoNj13q4zyu4yfGPyQu4G7whyiSVCYKbeZymvTHbWRPNq1VKAUJ4xTeA9XKKvbCGJ9yg91EvwNyFUZA",
  "key12": "3dhETyZvriUbJWR1uL8WubLmSewRBykBMT1SLkM4u2AtEErfNZ5wcytcZgkLsK4R8mwRCSbqG7PdVj7ojBa8QxaH",
  "key13": "39YwrDduyAumycgTh24vezKzQVmwHKFp5fmDwZ1Z97SzrB5GZxrsN44jTZsZPn8yADZfwdpVLwJTVJjTFqPgbnBd",
  "key14": "5XPh4qqpJXAVAb6wx1hP83FD2CLcigdgQSCyfuRDQ6C1DhQkAfmE34358nLu9LWD8dAPQvsXkzCii1kHjtTXhWji",
  "key15": "4pKrjcth18pNzUTqXxFXY1YV58ocae6xsoxZL9BAZdNtUnRbB16LZVjZkWHtHyiby9ngBk9wdrP9S8DWPU94j4dj",
  "key16": "2xSSNr3GJzSGiWveq42259FjsHUvC2Lh3J26JeRhG5dt35qajEComvsUFBpEeHTiT49ESW1ReoFbGFjW6faqVRJL",
  "key17": "3CbJ7yDFsiMNL9sFi1T5G3Up5DqwwiGAzT7vPsaSwH65jXMmipQgLyPRxtadPZwEEBhPcqWP1C3vN14JRCzcoT7Q",
  "key18": "4omRkWTzUhL61Td7zyZo98oAxsSd2GvbB9mqxiuYvzgpvvYuaD6yXsnvPrqwFK42rLmz1QLrZYKYhCDhHu18Nc9c",
  "key19": "2RbWsP36ceT7XvJAzpp465coxdnsFLvUUWJHC51gKXoajCnba4UBk6emUkahfZAsmkcjuSvPsX8aXi3Gfqs7q4rv",
  "key20": "4xLUzjehVg5hTrPdyJ1g8i9ZYQdE1YMXqFbkPD34mrhuLD23sa1batt7tY3oAp5TrsnH7wT7eRxxHkpL5JFiycZr",
  "key21": "48kkax1iZHhRoWSrQ7mZ74Tx19UjHYxPP6ezXq9BAar9ebtyBfNv3gmZTdqiXu21tcb2p6k8bFmu5JAsTR4gqeH2",
  "key22": "eXzhSomrRDW18srwZ3ESw19qsXrHdVCsCV5db4oyYTdd3eLkdQLMQt49MDs8wdTdmSdjSXFrwKgQDeSMLKKjMD8",
  "key23": "4bPwLVMqWgjjqtsvxJ88u62sYuyUEk1YL4svbXvUUhkBL5Z5hyAXNXCyL5VJYWbZoZ14qNSc8XcsMmoBXipRkgcm",
  "key24": "3etD2ty3h8t1Mdz8tSi9tcC37RGNjuJs1WwbT8qAU2Yi357bt3raURyz7D3AeGs7r2YdAmJ5CdW5TgG1NVbxrRRd",
  "key25": "5zPRoS3ut117fnHk5eawbgdf4UvgSjSLLUQ3FKzichLrWwE2cfUBTjUWyyqbgviLzFskgKTfnoDcvuhXiQoNmaUU",
  "key26": "5QXB1ddMUuqSCNsrC4qnQj7rm8Fgk3qunSa6otc9cw8Gf5TpnRpVY7U4yKhX6vvwMKL9rP5wJwkVsvJGFESU52vf",
  "key27": "45dGEPNm9iB1HuDhjNNpHQMuzAkQBbTdFtt4C2cRfVnSmyc9NqZfKvuagBCmwEhzQUeJ6DPQEXTDFGrg2Sd5NZT3",
  "key28": "AmbcfNYVu7y8j8cgAY87Z3QxD7S8tjydQz89ScqV196js9Bhm7Ua553XZQ1rjekxyrUbmFHygJ3neBjy5Sm2Bqh",
  "key29": "4CD2TN67EDH5Rs4gmfsWGMRny5PrfkwiVm1TUhhnHk7J9TaGBsFEA72xWoFHvZu5UfrBg5GxfhuDbLZK2REBFtQB",
  "key30": "3hHLGHLqPecjwRHSLTp5Rf876FMnLS7ZTkrmSCD6sx6YcXsQ4jJmH5egPqGUa53gJrknMNuNj9Nek5UmJWviY9HP",
  "key31": "HzfVKzpCLhXaXztP38fL8dP4TKVqhHRK35GG2JpmWJVSCCwyEWNpspi3LePa9scb7FSYnMfsHxd6QTfHwptMScP",
  "key32": "2TBWoiyE7qdsJXcHf5kGR8dZSK2yWuKQTvVKuz9amNarypU56e2cWb6m5fSS86jiNYumwwRwEj1gWL7JRLYH3bKk",
  "key33": "2e4EryvZUHG38d1BSbbHVM3Nw7zdhyG5EAc3snKNXZjPzEd4tBzjuLAe4ewrF3jDAVsVEKD34odQuKZX8Fjt5GWC",
  "key34": "2Bn9SSQjC8bM3TsgTBveFH5SdZXAE1e3sjp2ccEwzcqB2DCT19UmCapWpXY7yVfa6RPRgUd81id7r48dYCw1Usgg",
  "key35": "PwzTcLFywSeeZAaz1YREbniEvpVB5qcBKccJjdr8JiaYmyFrrzEcJc6J7jyAhgo927BxWvnFM9yx9Siq8F6Zd6K",
  "key36": "2B7GPnY7iN7uK3wqfCGoNBdtocKCbiSA5XU56N8ZVXoVQt5CHSYgWHpNMkGNSCgY7LXE95WN76ubGqDrRr9VtW5G",
  "key37": "fVcT6jzrgcmQWpGGeSJv1DkwW5RyaDy1gCtiCDSgaz9wd3GJn5KYyYtp1rpEEhuDaxgmPkMWcQ3ARykG8bpmTjB",
  "key38": "4Uq4GR3Zt9KdbTCYE9zeB35hs4HLQkgNS5Z61WyAKXjWNkeK7HcKLcasXzf8gmNHaTnSytNsbf68mhXopMrGowsj",
  "key39": "54CuocZGD6chxanX6mX61UkQjeEbFSLnRAgQy5R8Eic5CBBG23R4BMVKzHix59KhdU1qtSKzjNszPsKVdNwBDfeS",
  "key40": "5v2kC2oGvHj7jiDFAivypXHxr7oUhYSYB21Gnt4cZHtVxhP8WqaYZgb8JtrvpN9mQMhmz7R1b3hYt3FwpskStYsH",
  "key41": "2ZMzvtT6fsPhr2B3bPfUKCLL5b5AtxJMiaEkhbi95j9F6YFf92jd4Bs5ojYTW1pWFkaiboK262RxYn5yP9v1iZ6X",
  "key42": "2dRmVDSRSxkuLTX7CstViap89bSFFmbjNHbAdiacc285QB78qXppGSFNY7ugX3XmDhJqDPuEHE62XYvUkoMoZpLd",
  "key43": "43gg4YsMSEobtQsxyF4NKGCeipJNUdBNTwodyEhLMBj1EY6LVcSUNQnfdMDeDy8scAmo4Pxh5fWc1mZZ3qatw9bD",
  "key44": "3ho6WLqdeYkZAgNsiGS57g2898pmQ8bUeBytJaVaa7LoCX4ogqyEC9twEoUCJ2EagkVr8QX23NPsnGU765G5a48W",
  "key45": "1bxQmudY92qqmrK4VzuUukBpibWV7uNVip26WWeAdHJb6ccFwb4fczQmzE6XVNMudaAuhdLGUtui4QStmRYmVWn",
  "key46": "5LmHAdpRtyYg6k9feYaTUxbpAuVLWpwAxooQEGinz17kQHBQqpmR8Ag7c1SZTnpgpqKjtNUhoAMzS7kPma6M4PGe",
  "key47": "2bUYWsgggeFA3Pw41Q1igGyCE4PiLDCSmZo4orTEihUSKDxeiSUtiE6shcGyaGPcXHpirq2ZTQyMicQfJDGguJrB"
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
