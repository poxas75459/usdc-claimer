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
    "31FPAS33bBhqKRFCNvLnBzSLrSFzsJsHnYwwKx8HZHV8hsfBEf5DWohPin5E4FJTdP8cQs7iVCWCJXmPDR7SRTAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbcUEN8Lhz6VyVn7pptdPvYREUTTqVXxTNDa6suoCkXfFroGb43yaV44AsJsiqaqLdmeNEH27HgDAbzmtLSFE2E",
  "key1": "5ory9XajXyQCUiNjiieo6VXMVtARJnnCnEibCw4Fd3UccQDsue7GKpXFnR78232YGwBMGAjizqMhbRYqxFdgibCK",
  "key2": "4BRVyUCZBA9fBC7vTMXgRGhj1Mzbmf1AAmuPFnP6jqzGGMnWNBnU4dFeZm4fiF99BgdzoM9Z5SNBk2LY6GpeCgZQ",
  "key3": "4QtspuyvSj9xBBy4ve6moLgckED7JLeshMhZspLg2b2UGJ2PK7iyxxVXXfAmMndUWAJiMmKz6ASXSq3ajwHo1WAY",
  "key4": "5KygRUAinumwjKPgsSJX22UcVtUUzeD9d9smZuFiuaGaf3PgUsXNjm9YM1KJKs1NcJAYEy5Ehko1jvhtiTHgLTu",
  "key5": "AjrknSiy6rkKTV476i2YYDpFtQYaDsPt9EUwAZ9Z9f9PPFjMWvavuFwuRSvSyHiq9dKWegDbfcXmNFKoeTpFtx7",
  "key6": "5WyDprgAwFtrfPgEfF26iqeN4djcost5Pd4ES2FckE6eLZcEtoAKCA6WQ57Kcxe3zJjoLkVbHHqAgNToULNNZUZk",
  "key7": "4Cw7hYccVFpN2sjSnuzWzj1cWTPBYS4gCF5zA5XZxQd64scGVUjK15Xm5PL1zHzbfAJ6d1WSQ4yHunBDNJ5j7Box",
  "key8": "4QAYfBy4KNbsBev9d9MVQxDLKrLPaNDcLMMichir2yiwEAKbFufMCZuAtzsfeSbPQkrfbSRUtCzhihCHDWcXXZZv",
  "key9": "ip5u964KUMi2tyMnJmhuJdUmq76z7dqr57LtYKZ5E5HXCvg3TkU8Jwiwgfcf6adoKmkDv3VUWwLcwjqpZzz5uFu",
  "key10": "3L7Ev4Y8A1289hNpmSvnU4zWgK9M3PWY4WdMFjP7hEJAXiHsae84VmHhmLAsRT2Qik8GkAMjNNyhYJWBy7pC7JEt",
  "key11": "4m8tzPsi4jSVvBoD62EUgGUBHHMdukbZnGpGAeXTy7T8oNmNG2gCh9G19jfjX7kRj56SnK3JMQnJJ2yosG4BVKgU",
  "key12": "3ddjUa2n1QA7Tw9FMg9YdUmWN9qqaLbQxmHpgkVM259jU9PqBasrVPJC68pXD1m4iELuCxA9wxgeztKs8drmBvPW",
  "key13": "4tXfhrPGshC43YKTZT22cpoz2iKx8BGe6PqMSwJ79Gd1DwRgCQ4HfxkWYt37LKhuHxPCcbQnX3tKjPxJfVKQyAPi",
  "key14": "3dpac32C9sXReYGSCvULb3CTMsYQbycNzRQ8eoBa5mVH9BK8NfdrU5uXU7AawZ6KQGu4HoJBFq1DLmPuYDdfLmEx",
  "key15": "4EUKuY2QDxupTnEkZAoZGwmj86vjGu4PB4jbSpWBEbTKj5JDqsQ6MhuyHHprmwzB7uFwxWVYxgnGxaEic4a6bodk",
  "key16": "67R43RJ6kLF9LFMC4StZtRgvc1QXLzRXuGuCKEwGFNSBCr9tMKGWKvhqnLshooKBFMreeKojNxk6mJXJeNNK1w7N",
  "key17": "47y1KLLXW2PcesXnRcry9xxUZ2ksyaPKfRq3P2fjxV1H8X87wuDctbXfJY69HB9ub63xMu83xkcgeAMeoFojdSbG",
  "key18": "ctRsu7RwQX8rL9eTGypWUjTTQXQVPjJ4HBuLsj2kNTdNoHJnF6yS4MG9DXPaypJHtHodymyTVvsZnHo3JbYZJf3",
  "key19": "2r2iCKFWJmYUYMb2m7QfvBoJ63mowW7Vvhxh2pPfaDHUqrSkfr5XjMmHf3aVLL8xFs8UFnZ6KMv4XbVdY4JHk4Kr",
  "key20": "45NE8BinwHJ1RvsY4fVM1rGtYhSfeUwXTKDVoMJyfCHTM5HTuLeYhgohiy7FDWCSHXZcEp8Ym2AwsrAFKJsZLRXo",
  "key21": "55itFhVPDXxtpgxQeifBmkYsKXmtyE8VVD2z4SkfvAfhReBCBTZvDWvasTTkPD2kFLJDrSSuWobzxaAvtQXy9S1b",
  "key22": "5arfE7k2bxtHzR3gJA6zjVuP3Yub9KAoEzTB8a3Hvfj4XeUbkJ3pJYJkM4Vy8Uhxi3QHr3ZdiK2uQdkwKZ8VBYyR",
  "key23": "2E9Ywokk41bhNqik2WhbeBXSb98Sgva9PF65ti4sZt23n5teFr2HiSSTVEVZTmEasMqev7pNLZ31oHmnCTDFvEGb",
  "key24": "2VKUTsi2gMFsjg9smv8aHA6K1wy1iyHTB1aZjVkLqehxDk91X2t7hdq9Srf871mhKqrHZJLh1bj2HYz6spHk2scw",
  "key25": "55NfdA9yE6BvUr18zbrZL2PaTHfPGJcx9FueRZ5bWvffDsBhFUQaYJMmdimkgwZzwhgJZuorqt6BFoievcNyC35h",
  "key26": "55Q4wzux3uwePzx4AqFGr4r5A4kwbaXxUeP4CfLi9akqEwm9XtZi5hk88gd6DCzTHJqXUNqaxfKarXmA1sA3CuSx",
  "key27": "1jHdg52yg6yFrYrA3tk2vpDRfx63S2AyMwQ6LxKcVYurGNq3gQMrALnVQvJnSszjt2YZMKBmnAXwscMJFAb1N7M",
  "key28": "wAMizr6r7PwWjPxRRrjL9MVJ9bRb2Kz1RtFDzzpXT7TpC1ihFoy14AeV2D3A9sLBmqdecVbXWm4c5wqzq5xXQ33",
  "key29": "4jW5uSPsvpxnziyvA3DYYvgnoQwg7SFCyK6hN2nQ93QSWuqWddtXTQPSWW6dyUhE9oLuNSELKpyWjz3maTYna6nv",
  "key30": "3GpojmuSUGevq24UbGjChT89pdihDZNi8K58yjvfdgxdQ9Qb4EjcMfqCUvqqPaGrjk4igpvcAaszfdDUPqTJQVi7",
  "key31": "2X5qb1QEkavkvmgYYPtCUZGnnv4jZNnsaDuxh5KYECQ2Tj3Q7nGawcinsNssifcSXz6BHSSDMosuN6aYmmXXqaEA",
  "key32": "KL6zuc2rGrBFwstckGLNXrJdWfQoh4MvGQcgVXv7W7piUrMMPZk65XoKasPWSszfXPkErszJaZLMACr5vQnirfy",
  "key33": "48FYYqD1kYM9VmvdE9goKBF8AHYXaw3L8hb1mQfCu182hGoRSi555qFtfZaCERG2ZaJw9K3YQ1GJ7McRdW9qqT4u",
  "key34": "2QrbLFQ2wbjdG142vQSB89GFhEdwz2o4uGwg4WV9SmEJykcDWJGY9298oVz1kQRNuZha7tzmUhAZFTMh3yR59UB3",
  "key35": "4UtfNzQN1mAv5KkSGN7H6NwuJvNhNbL5RWitPpNAW9KcNFJxAFJiku492dcC7z7nzPmK7Si8u4VYPWH2qp97cpmd",
  "key36": "5a2sSZC17spXQXRzFUY2ZUBALMV74tBQ6TQmUqnxZuMNtSoaUFiKsM2BEAYv11M9SK6PmnafpHZ6tuaLrYZRq3Td"
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
