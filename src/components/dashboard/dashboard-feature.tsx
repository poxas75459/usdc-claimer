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
    "5X2A9gzWR8QFBs1bo6WgqdJVYEMc6HTXnJBM8KSSNLHeq7QDBz7a6nXCKnrPwSX4uvX1xwzeb7VFaGkWxNcdxDhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DJbvyW35ak6nM77mtzyAdkGxbERtCjenSgdam4JkBL6D2FUNvjEwenZidfXzuu1gsPeT6NN2nxBUVTU6sPsvpnj",
  "key1": "4JDPoFot4TUxTjb69DckD9yCE9WEdHdyhTkxkd778jgMXAEQT2ajeGKBefFE5bQ4XnticWDqKsEaqe6W267XTnbK",
  "key2": "Ffs73uxLEt1EDyChfDdhbzu5tkA4EsqEdxfXGDvg7Ha49A8by65wZdkEhpVeb83QKgGKVHw8timA4N18QXhbdR7",
  "key3": "5LyDibVuqWFmQD6QGobwQ9L9FDmcrsK3mr9qTkLnZae8XY7PfrYX815ME9eA5kXQYXWeTujBBDab9sdCBGMEsNkt",
  "key4": "2qtbbYotvfE6DA3DSajY887D8kJDU6ockVhtccwVn3h38b4Asb9a92yvgvbmdQvh14wv7ZoKgVsjqnvzQRshztrv",
  "key5": "285wo5DZ7v6rYkvAv779LHUEBmi52ExCnDVjefoM1ifRKwkHre96CqiXJZnqbuQEPGhjfcKmF6T7MyLK5QNmB29N",
  "key6": "DuHatGawCELPbxuCEr4zjvFXdJCqAMwR6cUirDtNn6EEWvardv9kDEYmhVvFcJNEruEhSWJnVPpMuDpRN7Vq65w",
  "key7": "4XcZ9BcakAtSqVi9XBwDXkUbXdLVyH76Ykva3ENQtZMcqg2YiDWYQeRmEAxizbvLQpXVBcvtuHnMpVzFsBNiZcZX",
  "key8": "279VpXLv31z8qoZDWkTa1R8jKyYwPEAMkwNgE8bCJxuWSm6GP1krrFXWMv76TkynAaCSoVkYxCDFe2ZA7g7MYGA1",
  "key9": "221hxQefraMBCT8XfBbEFMTJtffVaNA79TgsM8frRFDMCbb8HZrz2c2xvyiGe2CCEeLsAx3VopfDhnFQqnRoWMxu",
  "key10": "51sZsNo7xhianvKeDxeDBzdZo7FndYrzySBFyrjtCzaNySqy3H2EdxcTL68Ef71mTxo9WuKACaAvJnxbEs3fXPRH",
  "key11": "DbMVbBeo2cdppMW37MMZ5SdBZG8toC4gsWjGbNgv9D6KwFvsPTwUNMZ7J4teaAhqrAL3LzRLfdvJJCDUedjZ4Vw",
  "key12": "4VVE72rdkBm6P1mS5VCyzHv6vuGhJUtFBUmvr94aQPTtGqHSgTmd1Sjb8fx5WuxSu8YdnE2Nw3KmQFcpZjphVv5k",
  "key13": "21m9HwCsDmE6FPETmXJn6mpf6dnhqq3BUnHtNgvhR8VnWc8ydCovAHjUoAgMj3CQbjeKwX8VkDibJu2V2hDFfaDQ",
  "key14": "326fhbemRhNxF5PMSmWzt3rks2jXr5TakZms2AQCDyxxUHhFxzCXxmmii8ErZTAH5TUJirJTmCwLUZsjaPDgnqAR",
  "key15": "QuUtEoq4mt21dWhWKXNtW4NNPF48XybDhSqWSMwxYB1K6uGhoRzMz3Sue7g43gkiaw573qiATEAEQdh5fnfLzjW",
  "key16": "5qAG4NAKTEr2ye7sf8ZKKDSQ9ZwNuz4snhT6cZ1dxFEoyCP8kGLzBBRdC8dkkqmsigZDUnkAEziy3RH4cCHAoS3C",
  "key17": "3uekm3rfRo5h91eTzGt9zDuut9XQKB8TSw84vhRTa3GAQ8TACuTnd1p33YvJPbL1KYjqzk5rKwe5N6KuvFgK9HyU",
  "key18": "2gMCPxD8znTEdrhMWzKPaFJ8gEzuYegxSgywb9Vjx4MfYsGAjZuqaTETy6TC3eDE4qRuXDV8cVf8iCRDJCZBjPz8",
  "key19": "5zYPZ3RBrsaajcmN5sop2YiDzq7Rr7T2U6L2FajTyrecKWn4rubzbHySuNkcDvhevPYNc6uXopaGzEsnx9RdHzJr",
  "key20": "4fR3gfKMiPM3HbPJ4hoFAhUaadXXmk4Jiizvz4ZLDF8zJuf3bc8REmKiJWFRvUt5L6o2zKHTYLwQfp9fZzbLRedW",
  "key21": "3PzHKL7DFjotLzV53Ai9qyx5c6144djX1FfupUzxGfTzdsVBvbvyZjx5PWVsHBNwzqxkvvZ8cg4GPUTbyJheFxga",
  "key22": "67L9tJp3pJcLe3CATauXfdLJGWzww6Q5BzehrHmSctZ9w9qp7hXBQvijEcJ29FPVxhh6bP3RMTA924dpfFbmbBgL",
  "key23": "3y7V7kuetJ3diP9Z78RuXq9L3qhc1HS7snw9xKT4bKUQ1r9qMtX5Qfpq55GZETs62M5YhwCcRovtpGC8So77TSyd",
  "key24": "5CecWHwjwPn4hUtQtch32Hpb9F7oz7f1EYMMgBdzf2q7FmJ6B8pK1qLCRJhevXqz75x8Lfre8ZsNhXVzVVkACWLw",
  "key25": "2e6tcmfSbDREWj7q6FBF8EBVvTaWkqKZBMVBdzMDmYagos1jczEyzgczpEAETSk4cbBzBHnKtmr9mxPfT215nBjM",
  "key26": "4zh4euCRE2BcvNHgxRngweJYQoJkNoPhubFvve1RxPT5bSTiVzfpDZDquSK9wtkudZzLvWejNzDmqrBV5boCkUEN",
  "key27": "isvesnYmt55CBT2Tmswq4ooKLsgzEdZyzMUbd4YjcB2geiuHbW1se5WDGWTN3hzNA3gNv4rZsqFwKHWMzX1WMdg",
  "key28": "ze1Qz9wwbfnqaNpVsFNd2js66WCnKeVnX8zfSJBFJcQajkU8DZng5TWfaRXhGyNYj5MUYLLQ2kU49gBNTWLpSPn",
  "key29": "2gH2VpZ1M8ntshm5isjGKCQtJDpLiniKmZYtDtJP8scuFpTpmwqHYzdGvrNU8WskDFnKWHWrw9Mhb6wsKHK9BsbM",
  "key30": "hAZ4sVrBX329L5JZeiUMHGz1xffb6tsMHRzU7xZ7WWKYpKQag1Lwo7CGQUWDctyCU973xtKHG2FjG4C6k61TtBJ",
  "key31": "2YioQpti6xQCbdNV6cYLjPLMYECcTqnxZN2SChCQZ54FP3ir98XFFvACkvYceBG2L9TSj3QunCqXPpgdcbq6usyy",
  "key32": "42ujR2xekiVKRvfjJSm4qdLnR8C9Cmwh5oNVbocPZHWdUMEVcJHzMDYMP8egKmRwQvkKdVW14U9ud6tLCdWyrQfT"
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
