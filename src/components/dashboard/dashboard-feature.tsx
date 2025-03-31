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
    "2aG1GsifnX4Jb9SViEUWG8N41PnGM9fYuiVWEuZ8ymBRicJTkPCwymnS8S6bzyAGoG2btvvzcg7NebGfs9w22bPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGnTuZ5J6b9yc22JHvnoGAffA8KkkKLNniHmuNqx29u5dAL9FCUGP1DqVocfrzcMLr2DUZzYSSzGRGoAUUPZiyH",
  "key1": "ZtUDv6gJqazYQsFXVU2KeK4TQJGuETf2EA3tZcNb1AmQTH2a58Wz5CMqxrdEEM1CK79HNEHiA4rBXuie8oxvzZr",
  "key2": "2tDFPDcq4GgWkCipGTodpvJhyKKGoAN25vmj1vQoMHn3aBjjjSYqT74TYCH71MxuoWN9KgAXX6N7toeo3dUKRgzs",
  "key3": "4tNG8DhVkMMNKzLmzu5y7aYazt71qku1ckgURorGsJXQwcVDWsf4H86YbYJ5BEwdm7kta1uV6bXeLsgJi3Rsd4UG",
  "key4": "54kFB8NcCx752MCRWpkBMxXTqXdxqKd327b71zcjLGEMBNanLmTi2ighc1EURYtqdE2yuJt5F6Br7GxcjGEjzzVt",
  "key5": "Z9r24WZEwXjb1oTMv8BNtdGpuVpL31LJX1dEGckUGauLhud2zTbzJtqRxApysUCyCjpeVaeqmxe7nkiZS88ppPN",
  "key6": "2nUCKDfrVs3N3aHZbyb1YGXZRDiwUG7feGm5g58mDuQg9n7QDEAK52vFATXcLuFcABhth1TvEG8NKFw9JSeppro9",
  "key7": "2LUUDQ5gfoH4zNSwUptEEP6NnSzX9E3JHJdcrL2qigAr8YsJpgzuxwKdXrgJBZp69SUf2581GtVDVLUVahr9uEYF",
  "key8": "4qnHXVFxjHz3tNQ4g3cjFUTnbQXc1wSVeZniY1E8HCQCWWY14wKC89dmsHCXawXaLP2c9Z2ki1rHr1iYWvtHJA3b",
  "key9": "3Msnu2QPyycWYYhBCiBsV4sGoSDP19SszmzEgCkn2Gmcowz3bwcAkZv1B3doNtLpVvxzjkRXGqB18CeN5qgbXxPh",
  "key10": "qi7Gf9zD4u267GvfTUN2a5C43WK2jmUngsnEzrfB2Hb2TF2i4jKdTXyTaMhDDxmNUjpPsLSpzfxGq6zxpPxqc8F",
  "key11": "G4gUkUKVHSsDC2uDGCwcotfpXydmFiRsPXu7tZGWWHfDK3CVoc4Cevauwm1AE4GkT67yHREdGRJaz69MFA66SqS",
  "key12": "EcxuczGhhN5jkzVpDuWrKbpjH4NbfiAndVtXGWQ77gnFe1N4BgwURV4ufBKKx6mJ5we8GW47dstW1P3FjpeY4tg",
  "key13": "2WyXvC8KhSY4yUBuMd3W6Fr4LkJzhCBRW8VgvmCFfsRHyeckfEfmMWRYqTDmuensYtpGgKTrbMaaNyiQJfL1Jjcu",
  "key14": "2KAznjNtQx7J5xdBYgVkAGFN1TgbyDzYE6eP4KAyb1XnXzMcVpoDi3D1qAEXqHZwbvXEaLiwNG9xWBCFEuyjZzLQ",
  "key15": "5hgJJQg44srcDBqkd3Vdz2Ujm757mRb9CnQoVxV6oPQ9kT7MT9ib4FReRVrxTci94W3LTKaVKZBNoyYFxsRYBgtC",
  "key16": "3m1F47KhWwLHsbk2jk2VRFPBkZr3tdxgJksTww69zSr298EdEPu3sSRcoFCY9oV6xnnSN5FGL73vEA7uxWzJoLRP",
  "key17": "3AdtE6wwk1L8qvQGnb5iCZKq5qheJm3Ub221qSUwqSo2jpcYCXr1yC9EueSGM9DxmZ6WhBUorMmZSj46WEmZKtYu",
  "key18": "62ssCY9Yqjz5F49NWnqbuCsoiadUV1KpicevJSwb9CGJBW8yCodkC5NoDzSKNGP26yU5HqkoQAyWb5pzbgT133cJ",
  "key19": "3zo3eVq5f75Vd1ZE7C85GV5hksheKW3RXuYgGvYGqLAMdRouDNZbpCPBLLteq7XjQXKUtSxbZJJqQugbE1uc59zN",
  "key20": "2LG3nB8NBE8UmuKqtSaRpggnfb3uEGrwy6EPsrRbKyqvGX3m4NmwY1zj4DWhHBx8dATKkUgWTAyqq7WBr3ST56Fn",
  "key21": "67kVp8XoQUPubCLuor5dMxvFmMjptPsxV18L6U4ctSgbUiTjiVd6zvAU6T4ExpmvkSVbT5ywf67bHvRLL4ehmRyX",
  "key22": "kSAv8UGRGGKdF7pAv1KavN4Kz7uvxHRPz1uUKZFMktov5EttowPuhpirjpynqfneWjb3mk8hfbrvYkwAUrzYpwH",
  "key23": "t5iaavYxeYm9mfP6Zo7dp5VH8iLzQSTUfQau82X7GsAFJ475WTYaa2dGj2yU5KrLtXWkVWcaU6WLR4ZqtdZEbcC",
  "key24": "4YzjrZwetqZRXgJiHKpaGeVY6iNzDzgBGvvEF4J3N1hoAvbwcNv9E4NErXrQFuSbDVjyejwahgQx1hYaK3MiKJAU",
  "key25": "66ToerKwifLm6gSk6U8p77jVLCtqqTi8orLG1FgDv7H1Yakpdw4Q6p4e6MXVyWxvxhReJc5KYRounbGrPcJk9kRb",
  "key26": "29SyATVBBmo2JVyhtzW71i9GpcRSyjsznQzuFKajXaKrqAYL3p8ZDKeqrk38tBf9jr7e2opWDs5oBpjGRjX4JAUa",
  "key27": "34bb6w6EcjMUCX6qejYcD5c2jVmadwx8eBtGXoRR9PfG34YwcAizU2PtrtvA42XsUv5nQGx3TXtsnChSRo4FTtmL",
  "key28": "5noruYUVjyvDz6wjdnm8nXB44krYFpsR7rGQUpRbYmuQz6UbetvGDksmor7NJ8KKLQ4G3wGPThasy8hM4NZfKbJz",
  "key29": "3rLRTSXebTPM4ARMHiN6YSoRVEtAACZbqoHtUJQBCnChXefvjenEJv9xPYh3nYmry2VMfk8SUDKPSMgYrEvB8Rwz",
  "key30": "4YsrspVdxBoPEQS4XkcvigtYW4zALpWdJvE22MST1xe3sg7ZxMz2GgWTG1HevmqxsS3MP56HFhiBgQfLoaS7ysB3",
  "key31": "pjQtpq9i3RUdPUnYyzpycSEouBgmHj9P3tvDbQiYmP63dpjFoMr4rrahSFC8X6DzBuXk2rvqXHNVvDGXpzEQV8q",
  "key32": "3WtFeqj4U2p7hLa5PTASVJ5vJUmgRZ1YpTFjDe4LzGWDVkKPaWzqmSesAixHcsryttnFyTUK6Jh87tNJ5BEbJwEm",
  "key33": "3KNME66JADMjocaxUCRc3bpXvDWsyzPXjJWznTpuE5pN796GwR8h3A8Tx9GFm5zNF7RdKn4M7qLNbTiN8rWEYB8Y",
  "key34": "5APGizR6jmdkAHsNokM62GjU5GkKiDbdbQypwjSfeDqCjpbVezosVpSRVXL8QtG2ey6RycPCDQst5q14iQ6fF1Ej",
  "key35": "D27mntxYys17mBfFEG9uGjVGGPnx8wsTLYR3CfeRi14jHGipic33dXyznoqToLWnVXgj9PXiij7AKRfzo29qSym",
  "key36": "4fDLyW4VAXGdAJpeD8jzRbjsXeiNAnYr5iZQx2brHdav79zwXKsuGQsyJLi9vp8MdRAtWYLWa8E2VnX7a9jtqzSu",
  "key37": "3PcuHiJAZnGRBreha8csGdmBvNQNaMdzGetz9wLkXParpnmHBUFvHMvAcB69ySDKiRYFgACU5UTzzRvwv2xbjBet"
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
