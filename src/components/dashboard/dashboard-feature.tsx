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
    "SFix4Q5dDEDGzqYAVJ3GhZHH84kf7x7VTwESKns3DcpfMNY28zc87tb1QAX3SPa4EbpzGruSaMSitKhaVXr9wsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39cXY81xMjTxCsXtQpC4kmNwWcX7wexJAtKpfxNka663sp2Kna4bN4TgP9fQADBq9nZZpDAn47vcTCMAnPcoRpGR",
  "key1": "34WaG7K9CYGkU7Esc8F3DdcwMnfuN8vByL6TYsWcFKk3ixNFyfnAYNXhXGJpTs8qFxUHyLps2bz3zdnGoS23shYQ",
  "key2": "2MfsWRGCgV7J8C3NJ2YHRKusbktU2hseiAw7XkPJpQqFDaBBR84wGGtaV2CnuQkHg6k1DwpxNdq1yXcWu5FdERZr",
  "key3": "2oTxi6rnNG74PHM8TFFAGgE6ora41RL84ZMF7T5X2yxtfWWzcjEw4NwGGzhUJioPxS345GiaWt18yW7JkNfabKym",
  "key4": "fBZWmKjZMoTP7z7yrh5SesZKpXdLQJZbJVRbUVBkbo1xkft6S7LbCZRuBGS4i8WBER1zxTM34LRjRp2HFCiwigN",
  "key5": "2mwDqCx9NEKkbWNzTjq1EsvwSTBpkbJ3Knqa82Di9h9MCWDtQJMGTaE6WokxjV4a5pv5fhJcNmHMsJCb8sMEWH1e",
  "key6": "7hDk5tojKeUvCUabYByJnkK6UocPUfDCj5oe6BA63UpPqvGg85NENviAFgQ2F1QK7uX6mB5s62mPraLge7VnpP6",
  "key7": "3HLTSBANsLHZKGL9KbDtFxHsakM73TW9UqPDH8U39jaeBTPtzYVDdsgp4J4XE2QWSyhha9cgmA6fiRXecc9hRR4W",
  "key8": "4sk83uU2FzHt56AJ8g26nr5XHXEyC18fQNGJzRae2im2MPWLdkpdPuKXJ1HfCWyCGcmUpHjXhHJs4K2iS1RS5yX4",
  "key9": "vJ7kNjrwHSuoRy2twvYRmYVPehjoxu8aKbBUNBcUAENcfvWaahxQCexuL6HSViNFQZJkFGfbeUHZKhgFwSAD8mU",
  "key10": "4axPBfPAHwhH1M2qVbETk7xkiK3dfvVQd29T6Co33GyHeDGt9UPAJ5MYtuYsKCpTb47r1jDom7hxjXoq1PUVXSJR",
  "key11": "3a4bkyoP8H1ZwGfwZoc3GvFN2TyKgfhoKCCBNisw3Q4cKNVJVF3oKQrm8KagzncDmYAtL8J1fecLfDJwASCz2fRT",
  "key12": "3NKHtLf8bx1Mcv9xhmgD3QAMWATKheGJFoaTCZhCLnCMLykJeJfCA1QcKAKp6xTovNmYwiftJaAU7aT5rA9o8gY4",
  "key13": "46wA2uB8aLFgtZG8FyEAVQmFrXYhduQoUo6v6q2vixnpQVx3EByGAyE84gQcdoFZgAzMTjcx4mnYuQvLTBAuLbEe",
  "key14": "4HCu7NCzZcvi6FdDF4Ud4PqYYohfKPQCy1e5rfjHVwqFa8vvZTEGYuD6Sk3imdpH2t41rnnx5RLufYNuaRjmpJr1",
  "key15": "UxH2EhJo1ZtMj6hzv91WgxKSWSDkSvQBtXkAaf5isifmGB4VRiExckQ118Tramyhw6YomNMJBjP1yD87tRAKjtQ",
  "key16": "4gzdVNK8MwGiHt6a4VRWKhD8wSoKefRL1n1THhF2hwGupw9sv5QQpCfNf3Kpx8AaSiuBQtd2DSu4ScjZJnuwUeRf",
  "key17": "2bL1jHJCycf3rfByjTL6psbdqTxEG6AvAqvGfwDBU3uZhJ9THY3V8NWwiuTNykjHcUJmxfZX11g6VSm4Pki8PwKC",
  "key18": "2uC2hDL4p6uZc9nHHwtoB6pbqD9GvQDUugvfhPD88Hwjj6G6h31rRXYBuzNFCjZnQBCqKGZFLotjpxjqf4envcqv",
  "key19": "2FGV9nb7YkLpJ8FUAZd4ctKGUjAgVQm6dakgwFtpxaazuq2mUtwjdVJzwBqh4zkGDDn8uMN9seppwELNLBCJDShW",
  "key20": "5fCZFuhob92KcsyB4A9TXmBPw2KeRYcduM2cYHEm7pTWuubbsbix1AUXqyoqYJXWLD41DAczx3teVxn9cyJtGnRd",
  "key21": "24GJuzUsx7uR1D7uF1XhiyHEi5nAbkcNLMJiv1eQx4tuo2GkGvAnG8DpEMmDp9rYHaJjH4FT51pv6szmBGbTW3sD",
  "key22": "6eAy79UJ2DkpsiHZRxGEmeKHMTiWuRGCWEm9tb8u3CZssTK2YaFkFRdy6Hp5E1JZqS1GtnaiCPmA94s1h5brpEr",
  "key23": "5tk1hqfXYe2TERYmTAjVmkxPhHZx4815KEWRdyZjDMb9HDu51sD5Kb8KBmDoRMDgM2PkK26TzJRtxXmssiSa3eLc",
  "key24": "fDgpFjhWY8rkJgoyVTWbZCKZnMxSgPNec2zdPR2vzQvFgPhE5j5u8Zu7AKM7jBq5iczfTr15jq2ha7wS37GeGCw",
  "key25": "3H2fFn28RkMjvStqX2uULFNgpev3p5RhT93XhA3NWA12b2xrii25XC552o7TaPdLYMPEyPYcHK5pLzxgsXsNymk4",
  "key26": "61oUDdF81rPm2cFtSX5Vu3WPrPB98pCjoCxCXRi6z7Z8DtwthxodpaqT9BJrqSSvCMtfmKvT2scwqqxUF48wuWb6",
  "key27": "2jhcbssZMdFacGHcHhgvV5db46Uh2fXiRP8k1QtiNWTTWGm9ayUqyh7xLWggnSRYfi2bxZCs9TTGzDCyjz4D4iW4",
  "key28": "2CwTPKwAEGJ5ywQxwDeCz9DUttmPxYQqsyaPDWvvXaper4myQ1hcubAwrkJGnzFVFHZ7hyKpy1E6cUSwK1dGfTWa",
  "key29": "4wvF3yP58q2ngZ4JNEWgP3sWTHAwbmgCYuWKLJTi3YuTnrCN2PpUStL5GAfCRRP1NaH1Mfqc9KTYwVLZWwwZQCGY",
  "key30": "3T6VJTsmfBdy9WvtN5AjYVnFsrtDtu4ywn5AcMnLGcFrNeuhWN4hBFy323NRTWQHXdh9FAHjRHa5DeyjwyRFNLub",
  "key31": "2ihDnvHNwB1tniwPR8qfnW3THELzJ9FTZY5WbjtQNfg8i5Yy3KFrWoBBRZ9vfh7CJJfTXgcupxJwL3ccFmL8SK8i",
  "key32": "4R22ssok93unXp3jNDpxzmS9jZri52ce25vYmnKzrR81bhKdwAoFv6xdPWFRWiz43xWcWfZuqxVnh5Zr5QodtMqy",
  "key33": "3UkL5SPL4tHMnXcUqW623zZsRALAfhrTngnEEJYxXTsG945WQjKKpTMRQxySthGhZ5cdGtNUhmMo8GDGqD2Hrnx5",
  "key34": "5SVLxQDw8VyAs2NKMGZ6o3yvJ1xvx41RTVQNSz7aBL6RJexw7yJoKHFPBDoGWzEu2MPePpFrc7iF1YWBz36ZX6NP",
  "key35": "XPTu8swZf8mHZXA7WDKMdmR2V2fpnon5mxxmNdCd6NFRJ8PkvaP96tiH2XPjU85cTLdockeLegpnNbJ4hZFDZL8",
  "key36": "5vsKURntMCja1CYpUZi1JWzqjEyjix8Tn54FMnXVMjSntqbGJRHnZsSxmSjGz9g7M96LsMLGE8eKVuyEgAxCfHLZ",
  "key37": "5AR1JRNT2PrdFURtRnKQnpsFwRYRfmpzJA4kxUQ1NNTC9w9Lj232Vf9fgEpuWVf1qxCCd3XfA32FJZMGR4kz5FvX",
  "key38": "5viMw1rp8eb1nqCpt4tcdqtuWQw8aTdMSkRfvs5Au9QXmmosvoEP5mSsRr6YqnsLMQ3hTUPnzwHfykrmUSKWUjfa",
  "key39": "rMfy3CWZMz224UkJZye2q8JCXbUivRossDyn1YtQxEwYCiwDqtYn6aZGk1Eog2Fcna3uk4hCPAVYdVBmVvb89Po",
  "key40": "fREg3HtqsQDKtKG9biv6SinbFEtmAJYyKokvrBUxwNhqodnNf4GHHbSyjHpPcUtnxxNcXeYYKcw2WZj4bxjNsBv"
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
