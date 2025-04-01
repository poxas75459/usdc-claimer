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
    "TTraVuXrQQFGkPwFqQmN7f8sG72UbAHcoFGsoxREDzyXbVCPCWspXahcpFypW3QFshSu6HioZLnVRGDKgaj4rkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i4JkTx9AKdekGmWJX3ifcjAzT4byYu5aht6nUGXJWuLpjg8QWmpfx5xbNtKoE6hBWYBgPhdrRbd758F5yj8pJMb",
  "key1": "4KGSw4FBBsng9ghXknLQyef3cUxWyunW2aMZEk9NPDteSuX9sYe9dtorCPcuKBXK54oG9LU7KavNwdGKS38GvBuB",
  "key2": "DKKRQsj8idn9nQP32ySTkE4A4Qi5k3KLTwWk3LjcX3obVT6safSparmb1UMhPNn8VcK9j2uLxHKpPbYJEnCL1T6",
  "key3": "25kX8uyNkW8htctAFsjzZv2Z1z3xwRwpXoRrkv3qeebToc1M4oHwgi8wP813Xhm2zHYQANeFzhEnAxXHHBLNR1Xe",
  "key4": "evmMQ3PSjgP6euNz1mnzGgepdjcNHcm6gUjAcicphpxpjxPnAGiA5Wps7VgD1UfdJSwWsDPYaKMAKwUh43UqMTE",
  "key5": "4xR8xH9XQeBZQA7L4NcASrV7Umsk43tnHgmMc4Q7JbHMZB2tdBZnNh4dfiYNzWWTpogQEfGgkRL8m7DZDB4GFwNd",
  "key6": "e7mKoLJDmJbP3cpfn55DB1pcEL37bN3b9yCCugzrb6XZnmxMCz4ohM3AaL8HQZN79t6uWGcBWjxurB8AL1BiHpL",
  "key7": "3iYTHEiswsGynbbMir5P4DM71qJ9Ld1QRHez7Ek5nNB7uiWMxYNeMLxBbaRchRyf77BXCr7aUPg288yVzjo55pUk",
  "key8": "4EW49KL3bU3u9gmd5qsrw6ZoyixFvLapzvmNHzMPQXGXd5ufT7DhCABXeTq41WEP7XDJTGRPt3ET6L7xMEDS6VEg",
  "key9": "2TnNrV6JDUSNHgb5r1wsHPZzxb6gpefMGm28tVnW5c4W9yRU66rdkqUtacZoJv8Avno3L4XpZ6uapcAPyNmdCnHf",
  "key10": "2NiYEVUHc6bFZ7kVpFatZ9CRxPU5TMPnFbtk5UxifqahCK5FB7GhQveZvRaKGRkeNCn8JpDVBsV8i9B6MtVkYUxD",
  "key11": "4hZCbGbHyjnuY8Mp5t1DDdy4hPHKNmx441S3C13FFTvYp3EXmoSxdoHgLgLAj1uAfiztVr3Sc5LmhRuSzknEoWjE",
  "key12": "5XZMURGVjdcDN1jN2qpp7mABAPCeoVQRiF8bCyYYF4NGyBAAtaXVMq2aui3pv5MjqPtMNgZKAjLtsLxYQtFtUL5W",
  "key13": "67mkZfXSutu9G5n2kuAEE6qi7jEvvf9tbH7vgPfqDY1ijkHnL4bAXADkir2qP3EjHpTUinPWn4AyFsNNu9MSLrJu",
  "key14": "5xcjzrBmYWq5oyF5x5gcWyLxss9LkHEyaJCoCDQDKE1eCWo4SJtFxiRsRQLaZ2ckmBx3aCvWgrDZHSeCE4WRPHeb",
  "key15": "UzyPncMxdohVBhyyawiSkwXxJ9StfXENwaL6BEpPf8BeSZEGVj65fpcQ7e6HtYTMqAwG6CcuVqCFKgfjFB3U34F",
  "key16": "3JdcagDDLmf5X4ffx2qUE1Zj7qEyV31W1a2MzVMjYXmtFwr6WK7HvtJ9mXuC5pb8nrbh2GW4NgXHm95wRUcv1tks",
  "key17": "3Bfngk7dwAzVNVQQT2fhcnQbjAQwPf1SvoJQp8CJ74Kq4M4NMfbxj8uQapG5GVhdy1U35bxQAMYJKTiH9Cw7EoAK",
  "key18": "3mcgWywb1QBJp7AwP74d2At83AUWHXVnZdZiTkaky4jBY26Gnt7wgwXnWZBFEdkoXtN4app6oUqnYBxSc1f7hhG4",
  "key19": "2z4zKDq1Ld2Yy8msoYdzG628J28KS9NQ7RFPd4kd3XnxMBZHfrokXAzpeBEEQeamvADo5UWh2RTLPv3zLAuQXcMz",
  "key20": "Gru4iPkCMFAcPhMbdcQSunYFW1Stc7bj2WasFttfSC1c3NSJsRAwd4SgG5U5m8fBtv5DWCymiFHjXY9KeeZsPEA",
  "key21": "5xHqb1kTPCVPJka4rTAZ4ycZ7EsjHQ3htYEKwqdaAfyxVwBhMGULPgoVvD2p2NEaoHpHRtwG6hWn8R1dgXcWmWu8",
  "key22": "375qKs334iMs4fBczbtSkhuUF8sjwWKKcoy7rJb25MR2F6ponRA5oihjHWnrSueaottH2sGT58YeSAbw7qHrrrRH",
  "key23": "X86g5r9SNkoWSmarmmdaEULpxeuBBrueU2pxdMFR5b3gvYEYFM2Bidfdr6XU9mRvUPqJ6369XtJJHmJ4ZV32i33",
  "key24": "hZwpooanpHmvcQVbgmJfWqju9rt42ie8hnZyJcZ7SxZo3s4oPCWgg4VAw1SfMKnL6QF1Di1gCDqLSEx2agLiY7m",
  "key25": "479tqG67dUtM6KGqtEF2y9YEkGid8uG5FbVCgErxJFa6m9oLspB7Rs4zSW1h1FFADX5RHpKd6ZLAnKmBngBFgJhg",
  "key26": "33JKUUkEHpkSFg38JJ1T9bzS8EBtddbQRDtdEexsCG45gJgvikxr8JEtjMh9fX62GQi95ojoReuMs1ASF8hLLyUv",
  "key27": "h5N3VhxXqLRHavk62iQpZvuVTWpP2aNjrnwpVH7PfN5wsJuddAv5xuQVvYTD9d1oqFaYhdoRUisiPwVYdumtS1h",
  "key28": "3V92gBAtXdqBGmjRj3EqFbdf2H1ampyNfxxRzQa2E9coG5Jvwf3LHmLNGcBZPxdp98pMTTcSx5upqJ6msmosMn1L"
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
