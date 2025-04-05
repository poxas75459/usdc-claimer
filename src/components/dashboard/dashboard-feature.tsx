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
    "62Bsge4zcnaBwjZggtZ2VdUaH3Co3owENxtLWwY9hv6Wv3am3wbVYb5oCTPKrjpKZ4PQJBZ3QbkErTRaJSLjJLCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U89vpBHoN5Zt9hYejBQnSk9yn9aNyuZDsTZLxBJZoxhTYqyxpwpk6iQxsdy6DKj31ynaHZCCXWeFQqRUxKJ4BKg",
  "key1": "4jkGfsL1edsQ7p7UsBQE1zJfkV3day4EDHSWm8CWV2oCMc9yVqHVJ62fT8zVcWr461htVD3ZLR5pNrEFkf5QMo7s",
  "key2": "UNXYBmjeHrYbbabsSYgpcXsQETKCMX6pXq26wjLRTCcDGvdjZTXQ8VwRmULfT8a3Z6vxqrh847n6odDo6vbnstV",
  "key3": "nAhUhxTqFseoTE4EuwJVJmzGJynm9cbM6ffZ84wqLpAaRD69HXevG3Y5jZqQYAY5adYJsb89wVbUv1898TUyx8A",
  "key4": "5afKnYXgyJkQkwPCvWCqNheM2jdN8uUnggJCv1NHLFFfDMPvJa682HBXygszL6iN1gkTUrCx4UAecN9v5L24XMY9",
  "key5": "5J2keom6Puh4v5AptmGkrJHQoHuSsfcjmZJxGcaRnWENtmzVW4fgwjyfRn5Rp7z9no8MY4pAV4WKJJmz3uyDuK1N",
  "key6": "36ApiEUwRm9DyMdzD96BQLgoXipD7whwspQHR7R3KsSjfLTHEto2zctvB8xb5V68TWz58gVbWJmj4uXt1Cjxviiy",
  "key7": "4MW8fPkRXusJyoGCAn2THzFE4udXiHr9pYZJfEot6ZJuajv9eXtNvDp2NirR5nC3Fv8THfwwfX4qPexzjYpjwutQ",
  "key8": "555y5K1n7wkNArcM8hEKdjY5XhgpDnyRW6nzzTzi1VbiNzrVUFMQFZPGNiVTPJPLKELBNVFUTvYPvi5aktC3KTkY",
  "key9": "47fGrzMjMyD2wdtpawvxvtkUWDqmfnGww4AU6xsrLsxQjfU6fDw2JNzoU1MvsKYSiWQ2BErrVzFVjKdAftahpSRN",
  "key10": "4NwGb4JPG4q7xGwAvotXAnux8xZu45qpUvKZfB6iu5KZwFpWs3jd6L7Pc7zPx1c1HEB4hwepjCmqEVUmw5B9UHcv",
  "key11": "4WpR5SKmNzqHmxnhsWmXwWgUdUHsgvVqqkdLPaM4rr15Ao5bvPeyMjMLc6iYnAAa5ZNXmBXzTpspgTDeJfQuir6F",
  "key12": "5PUJ6PaKxDP4Usvqgj5Ks3nAMeFt24VdggmMUKfq2L5VQgfXRDDeUvQfjy6jbYRnwZjktdd2Me87n7j195ZR1Z1W",
  "key13": "2rXBdRBNf6X7wA6TnckQ1dJGstonrjp9rq4TvnQsUE1wq7WRkucGx8Af9ufoLuEFNKcJTHHAcbZDsHvygUxDUVFK",
  "key14": "BhmM1of6KzxyzNrtqhncy5mRFf2WvKgoygfpV3gpmyDDuq6tTUwi1XEeGTGrUjoDcSHKHf3QNEfXBHKBBFYMmxb",
  "key15": "4Xq2yBNPU79esHPPPaR58bfA1zzNJqrupBRxG81WG86ZimBYmQd1BBjrXjPYyJ67JxPsPHz5e4D9469S5N3oU7Sp",
  "key16": "TdTruqUbJfST9dSRdT1U8cPTD1TjCxppFSHgydGzWbkjACXQxgTXq33RCc6aAcrAZqYkVAs2UFC64WeoEZrTmA5",
  "key17": "5PMt2RsUpMjHEfpJu15WFHwCcRBq4dwgynnwSwiVfXbRQyxhCAcdRj2pPBqi8buTvp9gsrv9ZtvLSLhgD6QJPG5",
  "key18": "aCJU8cpNND55UZDjvpnWAsa9DBuknCHkCM1EFgyaD9yn1MfBZUpH82NiDkDP1zcJXxPhLGu9oFWmFxgxWNvE9x4",
  "key19": "3mxErsG9cbTnH8LDvckfoDAyLZDiY1ZN4jz9g6MeCynaRGQ9o8x37t8nrjU6YMXeZydiUtNLpTUdpbLLMofubZS3",
  "key20": "idasQmswQ16PRzF8NEsDJemQNyRkgp6Zn9v5Mb7dGG8xwqNvkooLGWME4Za99AVMc8EEvikPiCs2m2rEFoqwAbo",
  "key21": "eHiZoEK39xGeXYrqdVSDT4Z1A3ZEMNA4tKwMqK52CnAPZaqWCYLMvQJemJqLZvj2cmsbeB1CUcTWUtJbUiroEQ3",
  "key22": "59adnm5qpt8UXyR6ayj3jmhtcmUh36TZxJoKbLz8EUXcAUBn4r6xQMkcvCuPJ3DekWNbXvti8B1vKXNra4BXuLYD",
  "key23": "S8rKt9nJjGuuysR1Kr2HN6nZtHwTS3Mjimgi2WaWKWyCtWXBqGuPxVsrTo1D1ZnCBeztYtEC4zWok6WuugiaPae",
  "key24": "2xjQn4cxQSj7svUzgDTLndJZ15s8qDVgGhkzAUaLiiL5bM7SqmjDKVYkjL9PxkLZMHXJVoWbCQDkdJXF8vtWTs74",
  "key25": "5fsFwMmUsgrKU2QAgpNVfmKFmYJ3ruZjCuUcfkt2BbaX4uvrah6vczQdSUZKSqPN3NhdWPya2SGufv3r5jnLRjt4",
  "key26": "5KremcefJAjxubhJSNhYUXWDPn8BiafB6wEcr684asjhiNSAh3sNgwpJZJq75DPoZK7EJ1vHeBGfwxJCARk4jLVF",
  "key27": "4uX5Qbc1M6Hx7onfmqxvWn5Rk4p1aSYQwFvzHp3nSVYkAHuDHJh5e3XLeXhkbBKBwZPEPSYEguVdxPsor5ZGRyGP"
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
