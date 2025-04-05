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
    "3qZATWyTda8cSN5tSVYwrB5ANLCP3b9RJT5igzsgymeTc64oMnDAck23qrT9LNuZWx3tna3HLZW44NQpUyzWE8Vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5JcGSJfqkwqRpLZPNS1Xxp6hDgJV7ASwnJQUaktACy2EzBzb5HjyH5UeHWvE8WuBLcGnGnzLQEbLjsoFbRuAe2",
  "key1": "2CYaJRCY55Zwie2pRz8n8qGKDHv97xA6VqSgHfTmwghY8vUnsLQzVmoqwoWH72oN9yctF8543KHwzD1YXm31uFKd",
  "key2": "23UNfzFwStRZe9orYegU1LRXZmir48Gw54KzrTaX8yVZS73Zu1Rx6qyD1nnU8xkiD7T6bctUkytRdGhLyNQ1nmvD",
  "key3": "4Kddc1NkFARbPWr4UVFVshTWhRYvRKdVA3hwCoHRz3FVpi1MxBN2EbEt8R4qo8Zs9vcHSTmM3HUQvJrK24vJHSK1",
  "key4": "54nZHUZwYcnLQbd4avfBXFhZyrUSybdu8U6qVD3iUnkbJPMKoGB2GzA8sGWJKLJiAEXvUWjyQBeozeEUyqyAbESS",
  "key5": "64dEtUik3Mv7Qs7mAxMzfnng6r1kAq3CMMk24J7m95CQSxjHABaNgFUKXn5xPHX3ZBpJLVyoQdDid4evLbzHwkZp",
  "key6": "es8EFfZc3uuqiNb6RM6EwGbN4qVkFLL9mHF25nRH8SXmnNiLMoaETKouHu9YDEU2wRvL4xh87ANymXtNTVuByA7",
  "key7": "51LVe1PuQkRBCw4erFSLXd5Wu45awpxCXFpJAxTrqoS657cA1FE3PzUEE41KYJgpc7xWM7siLSkW2uXkogU41rUT",
  "key8": "aGudD3M14AaYDkQL2KF9CcLQrzJTmNcvtXVcuY3ereyajyJm8zoe78CSeaZPzjAtUkRRPdrwmBGBAYbfSKwwFyC",
  "key9": "3dbXw1NGhmZbzjyX5PZWuSbdRJSis6uvbZN7nZqBnihZaShc6pTANPhD8XTC8nZeogtcD8gWacpxt1MQdpnrAem4",
  "key10": "3fzizxUq8tjnUhTWzdx1bmD8VEeXx3EdMS6UfGifpVhvyDUMmF2nvtyrSSx7ivhWc922DghHPjvr1bDJPSTAYuXF",
  "key11": "4CAZQJExYqpDK2U331Nv7U6XoYeKQJCbrtBAu6SUTfpy9oTbvG4146kNKSBpXRdrSDGCUaXAffbQZTV2qFbhwPLU",
  "key12": "4oepviRipqHMy4ZD2krPs6bD8uUttgxnRssLDPQC2xCArZnHAQPZCGco2NSy4qTi4Z3DUBYCCVct7ejuu8d3YNs6",
  "key13": "3Yn8edfWczNQnsoJHtE35XbSnayG3r3r5RbNHiTdcRNhVyxTD4Kh85PoVbAabeQjDs9pa7CGeiEYkZ68JWQdLLpL",
  "key14": "4YT3ieBeRvNox1NjpbWb9Rg4CNRkmjLQiSq5dm9disaCwM7eNGTAMaBA43fvXBXAX1vN46g7m4sqErpnEDLMLJvc",
  "key15": "2uU3WZvanKypiKc466nmuNz3BdyfctFpSNEbFSFoH5WiqggpBuwHEsV6Jqt82ukvGrymJTFbrx8FnVvRR9et9eRM",
  "key16": "4rgGf8a1kp9paUBrossPU8TRyRc8QC1fhtg3cbbkhEdBGmADUs6AHvrreNATAtZmLDHhhyHMSpGzQpCPuj2sQdeX",
  "key17": "2JVV9caar37Z2tRnyzm2CBeyZANPbmT9pumdgwNwA7ps5VMotciq7MgmqUHUbhuokTMhRJ6P5UpU9F5fcpigumDi",
  "key18": "4bmTipSrhBrJMdXBMYHfayL29e3cda5GcsAvtwZFAQ59YardwGaZKp8NhGrgZZmHP4YCdvDas8LQJatN8WVsF1Ag",
  "key19": "5kqi8tR5VVgbaCtc61zS4NgAr1ecfgz5Vy3AkbPpi9VpuCQsfgXFUTewoxYFazuxfUNVZQrkFsT6tCMf75KgcF1K",
  "key20": "Dm9CejJQnLtMj7t5jUmkic3Q9dsUq7UYYGvHhjPz7FMEiBwNFWjvjbUG8VP9QXpjwSzAaEXBYdV8rSSWV59recy",
  "key21": "5wnknyCG8FQejdanCjs3j6vFpvJqHWkeoRNP5HME2g4co1H3xvnJxN7sZ4i7vfwkBNgToC2m6S9apaz7tBJsZQLB",
  "key22": "55EyZhDsbg9D5L2Le7tQXDUKexK44pf5TSwEC7b4FXVo2U15L2DxbL9Pm2vdRRPYGTqMGi89PDwNoAGB5arNkmfd",
  "key23": "5n3oYQAtLHLn6rNzBU5R3T84YjU2vGBnpQzCEBYw8x3Pp4Tobkru9ZpBtW76giY7aLChVX5acof1iPwSjnrFBAEg",
  "key24": "3u18wZEPfwhxfuGuXERGjnDtjmpmhEGQYMfsmK7DaeTRQFbFLoM8rTN2qPAaQFREtQwYUoHHGcVGuCG5Kjm3Ek6N",
  "key25": "51EvK8XaSrDxGMmjZ2V1ytchFfn6s9F7nNH4Hcv4g64NqGkC2pYPSW9BCvCnaquWkBiQ7gev9xizZ1HHfJgTe4LK",
  "key26": "3FSwaq8MJKgLC9FtHpaZ7vFUxbzWb1DAuTWc1HusiPDEwFNCrbeyWasixj9RZdv3zPPkjrctSyqhtNwfzAXi6kz9",
  "key27": "41SuHHKmUd1MuKtTaQJ5njuERprueG9LzFPdXY9NVY4eHbwhfvVegpAyTnrCp1avrYUXCHAmaJjR52efMRZjurHH",
  "key28": "Z9Z6eLBuAN2XvPjKfFwAwkLCyfzRYAiF6DR69j7G3WR39cApv2zghDaSyKwDU9a4i6eerVJ52BzrgfEUXmS13JZ",
  "key29": "37N8Nhkeup3qycpVRbGLJSF7NfkxWwCJ8CyAxkP7i16GVJKdgQcgfcUpmH3AbUMZfN4QepbT46QkzSPRfvR7XPiz",
  "key30": "3L3zKRcQrRCfHL5dZcWL8JiMyZnZgSKrhxHBqehCnAfXcYZPykkVBaFHKhgXNiRB2BuKpiXypQymCPUj7SFsdoTt",
  "key31": "5szhbZmXDcDviZxqGPiky8vjuLvVNUMbTaGpGmbbUgZFxHBR4Hg39WQ8v1fP6Wbx5w1x1r8UNFP2JfKXTCDdz1rG",
  "key32": "4XV5MWeEEgsLcuCNmen8tRU9s7EzxD95EqfdJDCECerQq4ZHraeZXbJvmjhMN2YGRwhXVg8W2Jov5MYnhikxz3mq",
  "key33": "4sob8bcRkeHoRL6TtpaEFTYnJawwAuLQqZV6Zc4SNzf8uFsotA8kAyXieBEbvb3j5yNyKXkVbPwwkE4csfvgioYn",
  "key34": "2auXkLTnLyV2mcRCbw3bpe7Zpq6Jo7hgqT3kZrLDAZk66mPQdYwYopiV6NtXg69Vmkz8YWGznniKAxQ5Lr1Ync2q",
  "key35": "3U6qQXyVqdiXhjiz8x1kpjgvFUVahUAQH43XyRUKefTEAHbhfiVaMuY4TL7cazKvbnBnEuLa6KfKvy4Jss1niBL3",
  "key36": "7xQiAdrjeh8Smm2GJDSfX1MgcL5SXQG3mHSEWsuMB1tz68fKq2xAf7FxvAbw3ZTAu6NCup9Ux2y83aj6PiSHCjH",
  "key37": "2D2fmT2Ce8ANEPRyAadwZQ9366CTmSrQtrprpbfvQdyKcLEKLRb3zapfKmQkaJWUHS7FNrHSYqk3XyRKa4VQP4W2",
  "key38": "2YTBXVNAjqHjzVKgxR9z2fdzFvehJNeSP5FFk5ptqxWrBnQML5vgTL13P9xAeHVn6LL5zvYfaAvoKvkRSMznWask",
  "key39": "5GFWqeGpYo8Jz3bDMRVDNKxXtZAuQf7gH3pUKQaLhnPMPJCSMN6uQdZNvu7AFX27yUkRRchzKwYFJKn2DSoY8Kzu",
  "key40": "27kZk6q64m8bxVWfQXW1QUGuRwBGWCowWxELEJWJAPHZ43mNBh4qfkYgik9sf53ygz4LHKrY2EMbqBsD8dfiWYu7",
  "key41": "XQudpGcYtDmAfthNsHVJbKjSA46CdxuV1AFnGEKpTxY6HqQw9U6ESkYkYiv7EGUDChT3CAmjMsxxYWFewL268sX",
  "key42": "4FWViqdm7GLkVJPsU8auvPQY7W6sXdE7MxWLHr6ykRjHZ6KZ1XkQ5LYF6qFiXhHvzpVhQ22eFVEG1pAtryjCm6WK",
  "key43": "3VykUpVtSXkePY5Nq55M4ye3xJUGJyxAoJbXhRC2DvEh8ecP7FD9wNVuE7JaLwKEcKWShJKkMxTBRTG6hJSx5kJ9",
  "key44": "5TLm1zEeYEcgBFNnNB2Lr2ih8QWZtnWP59emeDmxEUNoJq46DZ7YAieqPLavtkijPk4eeb6wznVQh57MpeArWeVG",
  "key45": "cD2zchi8dmahujGQ4Xfj1iR1MqKSCRoVQsqNPJjH76gKNgUwRUPTXchUD69TT5g2W6wdPZzvwijqAvTgxbwCPdM"
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
