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
    "3oFfsoU1kkcrPEtTHgwtovHDvNSkbpnuDBymyJXRwXr2DNcm9ugPwqihTDYoeMNrsGJDYMbBFxuquhRjyLubzWrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mB1d86yyLcEPiH6dmWzWVg1thxZ3oPRg7UbQcDxC98qX8a19Ju2DHyjo5cisay1drwxedJtCyLgwQbQwtuDUXi",
  "key1": "33KXyT27uXJWUpdRdL7JHCeBCUpoqaFqq5WY57mzvDjMvrrhC1PFHbSoykauNQR8xwH6rKHSrb3eUMjVg5o7PYrU",
  "key2": "5GafDdVHcnw9NuvT4B1zo2mUCRh2yxxTevFfcmF9rSLF2AYh9ekr3pUFutvK9Jg3gUxiKpfMFA5PosdDhJoHahmF",
  "key3": "5FXGzX1bZyxkeKUfzEgnSgQwku2dtS6Dvs4bUyEq1RLousEjg5JUvuNPPou1jUibR3u6nrCkGzmR5hTMVDdaCAPd",
  "key4": "5JM4KFjiTVSbdT5nCVrQ73spQUeUKyqFHr126i7csMAdA5RyWpZgbZiM5dmWGqGqLTUxD31m3JSk1mrQs5cRKByt",
  "key5": "3nHPfj3tSmA8eGtEqLXSZQDbKC4T7rDB2SSMweC8YTPbfaFh1ki3eYz5nTCY47bApVEQH1GQBnXb6gU8WGwqCh9k",
  "key6": "54bPUUwgnTYLzYgkzdDneNYmEU5NfEgSVV6mAbcRUhTDyWRHHAcs3hEo9ELWVGE5Kc8aWaYUQDheXGJZmfCXBWjE",
  "key7": "2TeQjR53zugV8NBybFF9J6wg9ypw1JfPoY9dUFcuhvzQ47RqHzUJQrRZ2eKfrvwLmFjfRgoCNCqfRvSgoExjbbPF",
  "key8": "35dVCeNe9V5tSV378M7oVQx7AZ49mfjiaNZAJx2bax7Hj61FADemmTQuU2Ge5WrKzkjKbyo4SJQRJ37QMuV9ZfYc",
  "key9": "5ztCwnzbZWTW3uVe1Ly1a8XmWAe8nU63w9jP4YVRtLzJGbjbJqoAsQ5Mdf2TvvyLHypGAbcP9chSnTMUnNukxWpH",
  "key10": "BVk6YByp3i4TCbSuKnFhkckp59TZC6kYAQ2Rg8eM2uHjo4UzwPxGBbWi9Xo7byFRYvsp77S2WkBhdUttnqcAsD7",
  "key11": "4mMRt723stdCRazPzZq1KDqvTYKkYaQjyd5LTF5MtQzpb4gzZaoHcu9jwJrgMAgjvoofPx3QsBcEGnznWUSyhqX4",
  "key12": "2b2opB1UF4q2wfAfPyPfhoqaxBMYc5xcp51EVZMDAQyjjJPSLEJfJMpyDcB9Yp4f39cp56BmZBAN3T7dW5S5Detw",
  "key13": "ZPdqwvPUakowaM3EAXPJ2qk7rARfCqZuDrx62tfDcZKEeEu5DzQNvvPgpEt3YE8XGYRLmE2PT8Az88qH5fFJqDT",
  "key14": "4UkW7AuP5NNdggi3BTMsQ2d28QctNtL4MV585P4oUGiqSkzQVSh2VG41GTA4TA9wgXtasWQWqz7gfr7CVwyr1fK8",
  "key15": "2Rrrd63Mh1m9hC8Nnk6wy9vSxQi12XaU7SzqdKdJKGJWHkcChFiNyocR1sdebqf5MgYzrBe5aRJSrfof4CBaR66L",
  "key16": "2hTE3kndL4jJmrFewshK9APknUYqmcmRGoGUDa7KnDPx19pbyRMRakh3Lcu717d4cDVZqGCABzYnf7MMboLPT6TJ",
  "key17": "2bd24ujpsJGVEbPdjprnpHRK25oETprXHpDSLARrfkiy3bxxNuEzDwjhXm96XobZxFdNkEFqcoGueFzRnMNXYSqo",
  "key18": "5Lcak5ZZZYyjCwVDQZBR3Q81vud1zwADYmbLa3bGWWNF56RbFzEi3F2vQYpJh7MDLXBEEMUZTN3JD92KDbGbMMTG",
  "key19": "4oiSg6fqHJUDWZGH1Ex55zV9jj24jJi4xErJP5LjexwY16rXfATkYnBaiGoo89kFWrwc9EM6MTSjhHU435ZU7aZ7",
  "key20": "5AEGdTLEbkJTDWYJijsEvjtCcQSp7LSF2xw4WjmneW15zdDsZttxCKtVAv1DyQR9CsdEJ2nZNWsRtLFz7APLhhCt",
  "key21": "5N4y3jRRzhAqkrpBseY8vRg5sJyDCaUTCGbjx1XGk6Q66xVmTnuDamxPVjscoTkSuS4QteS7MDfa2tDfxxd76Drs",
  "key22": "3aXrcuvfwi9TTiyb7SLbpuPcmPQv53ASSKyMKoXpoa1UFkdHBrXxpnDp3XJYwCcLJyxkALNPh1qfTm3PNtW1KLXD",
  "key23": "hwfRGCscwPY59FKQioLmBmeTznT9W1zUqYU8zvwECWRLeqt7n32MmGCYELmDqf6eTfZZ7wVnpegjuDtDfs3r221",
  "key24": "2pLhFqKDamQhd3YimiEp9Fu7KwbGDP7vcTk6cKnvexSp6NuE7nbQaCZNLuTMxDVD6ssV4aZ6bvhM38Rp8G1RTHGs",
  "key25": "AJhXUSmAEoYcf1AtHAJkcsH1KDqVZNP4neVhj98gfuwPPoAgVSNZdJV4eZTfDM2F6CFM6AoA3fWnfjQLWTsE5WR",
  "key26": "4QzT7zQqvwpNpU9nX5etaWyRWZEXXDvScjjwfMzdBCFo3vToAd9AyzaBBRnMikoXxK8cXsjMR7bWHGCLYT1PJPcJ",
  "key27": "5zYvNSV3SiCWASthQ6pvn3Tka25nppzF7RfxGegjMWAHQ3kkY1WNL96dHZnc4Cozhz3bw6tejdFTPGF8dmiaZbcS",
  "key28": "5wwLLcbYVLmH23n6DT83opXQPpAsKirKdfGAhK2S2NjpRFB9tr5diGcPo4xkkxDfH1FdNEFcfjfRVdpPdD5kpeBN",
  "key29": "3vW5kRX2VfRyScvVVhG6zW31BwNgxzTA9zAU2o5WikhvmJjvtJmeEjvZHvA7ThMpqX3Yio8rWoAe8hhv9GTLKoh9",
  "key30": "3YxfwhFh1P3cGkTZRe7DgyM2udxRb5DoZVt2QdoARobhGkoZ7hAHQnXe4SXFvC8u3pvNxHX4ZEpLUqtCcGNNui7q",
  "key31": "5q755Kg1EfSn4rJquqH4QkxPAVkk9SBV4gugGp6i12zza6MphKXjrSywupgQzpq3knxtVMuciD6uP5QAHLckXgtL",
  "key32": "2dRQBb1Qmv7HsEFWdZooh5qxgYssuHA69E7zPQ3kdQkaQ5dyi4iTux34d3Ejx1SeG9mGLxP4WC71KqP2Zx4jNBcp"
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
