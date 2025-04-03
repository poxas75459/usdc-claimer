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
    "4REJCjfsZ4JTuLfJKQRK7QSADuD7PDDHhqYP1Jv6Pe1Ehs62tfSWihP1cFopLnLrYog9EeDQKg7aqJVvkMhUpJbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcsHXfwAVg11kfzx8Hc6Rsc4oESDJD9QJ8n6EZVXYUSmT2ixAzY4nWDjrJARwW67RLk5oFyiLFaYXCiB2wMtL8T",
  "key1": "3WB9FJz2uPT7v7ecdKnBi4Bb8tpmwNBL5jq6c5Gzc4j59BazYSEh41LauxvtpVRdYbRLKERW6NjbvFRcN2sRZDui",
  "key2": "577JMaNbw8F4ZGFwkG5G7rDt3ogYRuPtKzMbR3L6gqJs27rRxmJwb5nvCUkpzo4hVK8Y2bhEsWv4PDV7SuKSkSSZ",
  "key3": "5pEX83zmrqs4n8Ygo4ru2PEFWbgBNvE95i8oEnkYfDQoNvN2so6VjCRVGLAYGEHZqHXXMywmJ2onXWg2HWMVV79Q",
  "key4": "2SSfRHEPMyUFuDPjmpw9NmZQLmZf7uZ5bWXeeFvihr5pipUeFi2Fntn4Jx2x8F9wAge4EFHUUVziUpKtgbBR5WVY",
  "key5": "4usGzzLhVc2vyk31VDi9tLLDoYRJj5AEX8yprdung9a8ixFfDEF328cj7rJfxtUSK1JQxCTZVd3aBAr1oaaTF3AM",
  "key6": "3P8YhKsTu2fac3oLAL8zycP186EbiJ4NnXpkzQpkJR8Z1a9j83reyS9TpWZb4aeaosTbACGNekKyYZCH2vddFEdB",
  "key7": "5HVQcjdLUAjnimGLtKERywcxfjxB7Aout41AjJ3rvUv4T9zraaa5HXcXymsEi6sT3fG7K4eBaj9Try1Jmev1eXbZ",
  "key8": "3goQapBPsYAmxNYW4KgKS9xfXq8Dr9dKaEcjooAaaS1zaPF42vemDUefSYkCbidAZZLVkKGVyrpwyrCJXKXRasCB",
  "key9": "c6CCHWxCAnViGaxf2vqnVW8fMxuR5Fh4qQTCQMACqzGG8jJDccMN6JF5niCeEvt2ydu8c3xxpnyiRjz1Mxxsvky",
  "key10": "qpoUzdRujyWizBEzeTWekVX6BSeSbJzVJse91gXsxTQjLi8Ls26SxoRcmHkJRjoJRraSxqP4RGdwGvw5FTXJrYK",
  "key11": "54TbEwwmedwepeKj5cpnkkgxwPZAJmdziLepVaopeCuYtj5Wj9N3UiYQQEgTmBT7mFJNrQG2hMTiraMXbhfPpay9",
  "key12": "3aE948HtZfwJdBevjL8QzzPdMxQJ9dV8zpSyHHUDFNLiow9GLYiyg23nYnbDg7aJEpFVvLK84Zcyn2MJ2hYJEaXx",
  "key13": "62nbrQUrcE1KoidB6y1CdFAME5Y4oYCQ3dAvUXh347wwoGTBw4oAHsv5rMVfmouXeRoUMw43dFVABA5EjLVuUbUn",
  "key14": "3A4ZVte5vFeWG6XpWyH8wVHpHSF46gFKic7XZnPsPt9YsR45ReUoWsn5nybgKsNB52PeSgL1wvrXagYLBVx4z96s",
  "key15": "2Q9YXM1grq52Bxn6udZJ29rogJDrnWWVmHRvWRCGopuYGJwwEADdT7LrcXkwYiVDQdvF9P9n8AmEGYw1upTdWa6b",
  "key16": "5NYEi9Zgwt7ZPpnZETNenoZhPJhjrwnC7pUwNmjC8aeSW8k8L6CnPidNe7JKss3JkLJGiEv7VqZGMtDMdKUTQYQv",
  "key17": "hBbyGFvo42ABzax2z3nvYaxi23z9UKrQYvQLzuE5YZN6oCUV3xxhupXW9erdgk6on3y1ANtfxU1SvpzKxxaoSf9",
  "key18": "233rquSbQ7QBbrvknaaMcvWV9GERQT3q45XVKFgyDgzFBYeZi2Ft7Cn5rDxw4i9cCFh1mwohviPq3xzUZyHfnvzt",
  "key19": "49LS8CRRgbVfRnwH7wZ5akKco1LHjas8keUMFQGSYGjxoJzFpRRPve6cbANkVv9JzxF4BHhSLkjUx7ZZ8yMvMiVd",
  "key20": "QvMzBskSozRUc5gnYxxXwmEFaHHmqqQ1cbwcyCBACUuD9t1C2XiUhGNWsU82kUa1w4tYmT43VBVFWcePCHMkezY",
  "key21": "3EYkLCjw1XYY2iwnhECsVe9NiFfsyVoxMjrszJBEE6Ajy8W1L9wWWMBCpMUfggCPGb9FBNPmabMyD3m9MSUdHWHy",
  "key22": "2JGttvUEjYn69VKtw3MnFJB34daUH7hzSNTv853Jb8uDGySUdhB3JsUSyQa8kBcu2nyN2d3PMRjtKMxVURjnja7G",
  "key23": "295dBsxceG2bKUciNkFhd7H9xkMD856HjX1nd6EnVG67CP8yNGScuiyDqY5wFyoVXk2mvPw5wMBJFnSZ7GeyvQbC",
  "key24": "LkVi3ZWZPbwMDLWqyfjH7DACmoV75PBRFveGw3DMVoJJ7aBxP5vN1Yf15E6xWGUCAWPrRU9HL86ws667JuguKXa",
  "key25": "1T85R9NvtGb7ZkKkpXnZD37HgshQjAqKxvC2YhBAvw5TGqL9vndYGRTMK9Sm575Ma4hGEvcwmQ51HaYzjQyTxYV",
  "key26": "46psg3kamTTPDJmNc4VxdGbFv29izs6hGWzjZAJEtLGJZhmMSauUzcAeY2hBxEgwkq2fB1u6RfquaD9xajP5qpRC",
  "key27": "PL9PECieTrMB49gvDHwKKquJwV9eFFzvZY4bT9z8T3JHCXkV6RGaJxvqHiVAfgtBYUgToA2MaEYKHyqR6EUNGeC",
  "key28": "9ckZxXDdq6H7KfmaANxWo2xxNUTjXKcj6xNX7gLYCfMw6qsCKJprS4bo32nC67AtCQVSdQakkHGEJDvj6HJAqdU",
  "key29": "31TKzGZiNZmGL2g8uMkWcAyT5pCkBr4RkU4gtSwsUd4og8CoGoeXkvmrACRqdP9PUBdFLZpziguNMMcn4sjf73rt",
  "key30": "32GUXNQXtnn8Nkga62fA33ttz2L8j1PRMT7ithtSKREu6JxsM1cdmfqyY2SJNiJCzK22iJKAE8cBwUCPJpL7XFhm",
  "key31": "5TuK1DYKsEC2f87xLtYK2kWVDafxLCRfNjX3HVZQvVRUcVCvCBzSkVJf9nZRmm7YiPfGWRf1eUpJK5wTtMZUejLj",
  "key32": "ZwnEJvgBG7xr4Yegteu22sAZxCxBko34K1DEepdSvaHw1ZBfTPTaW9whhZVCn6UntMdr8Yeeyqyoup5Sth17VoA",
  "key33": "2VQpBw9hoQrCcCgh1ZexjGbxqA4fD85t6nNfRCa5yByuS3bmiVz72NRn9zek1TeKf7uvgwNeMZnBfVEzyyheiQhs",
  "key34": "3hbAK4veEMwnnQEuu8z5mYDGteA16YUTgwzw395BTfyZxzYutpCBpX5SA82csuDExynm1Cf5jCAwG6E9AAfbP5zE",
  "key35": "4yT7dpEPwuwpAU8auCxT1fcdtryNidbMTAXqvxTtgwpVqUnKzUrwifYbVppXaDnEwCssJytA5xswnkGTXzGFzF3s",
  "key36": "4jmwyMMRJebgDATMMKECQMC4xEbAncDoa9BuGqY4ZmyHitM8dpMzR9UaaSGHizTgyuj7XiEMoZN5FccD3zGksiVu",
  "key37": "34H6NURYpSJe9z8ruSUxkUSYSoMRjt1nzwEd1BjUsurE7uUP7rLtkuGKoHgekSgyxSLLsrGZUr35Uf51JXtWTk95",
  "key38": "5ATit83cX7urL98bHihZFxuc2yf2VtSkKmZ86Rxawq9doCUqjeVA1Cby5uNND3zPHEXkHrJ3zBZ3KkYHkpzxC6H9",
  "key39": "zpXihPsny7nwHqyQZWEP7xoD3QPzh1A8pigLBsfj6agQLwzo3th8LthyWq6ZYGsrY5QEAKzwreLzwHTYnXv4A7Z",
  "key40": "5QmGTH8WqAWkMH7gSqM6xgxXEuCuDgs11qbGHD7pWTzHi81jKUMae2DK8ye63C7J8rCrZZgvyVTwBs6Pk9VFEtax",
  "key41": "3eVgx7VJHFDZQd9Qo6jtQE5K8WjFzPNZ3x7R7LgCwhtgaunRyhaBhV2pDoHSEJtL5BmSDWu3tKs1kLK9FeN77ghz",
  "key42": "WHghZErZ8t3r5zCU8PkPvUr6HhtddGaKDdcLZYtKrNF3oeKFhbiUSsjsE3ZLj83zLCw7PaWjPHwc9aXD1TsvkAj",
  "key43": "38SQrRXxfxX6bGAtV3cUNFkVAeddnsV59mqw2xSychSxhwJMxr7fqGobry5LXdyTxHd4DLVpu6FpLt9KT33uqvWA"
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
