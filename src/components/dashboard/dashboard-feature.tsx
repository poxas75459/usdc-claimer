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
    "D8FV6kmVk6sfWfaWFAPjgHBNv7BDaQmekji6K1uWarUTn7wqrHdAe6bcF6Tr43wQt9sHtx1MubLTHarJM5CEnyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Py6pfUYbxa4iHFY2js7mojRFVsdVNnNLQn7neutMFDdc5qXvGLURTS8AKgKjhPHqdVhhqgNSYeqg1ztZoQvKMRK",
  "key1": "2pm2YNiWyEvbmVrkVDE2tmCM2VgFn21N4szTQmvT49Tg2FZHac25VotZavaxmDS2BVc6Xct9XsRt9BKMoicPGknh",
  "key2": "5v5hpHFcJEovJ24uELZe7dd1weEW5sjFpqMBqFxiaxXZyAgn1Sebx9pAtRSd9xXHUKKPPeM5U4RywKXQzZD8jw7P",
  "key3": "2Smh3FKDUoCgrDWRd1ov1U9s82xKQphVz4vemEP6dgjUhznFjKmp6hmc1ZW8CYxzBfFqyrzXced5mKDfDaxFZY6Q",
  "key4": "44qZBxtBExiT2cRckyQ2puYrfRsqd1f56keKgnaH37vRPrVFuCH9uPyMJrPdtn4SAQRe5nXVDkjXp7AqvVDvHPav",
  "key5": "63LAus3c7iuiLx3NURvzbFX7pNGa4pS3xvsS7RjcsWTykTFTDsXjwjtdVzAYs5dQ7G7hRZZ3wW7ybzPigT6A1Qhm",
  "key6": "3SWQvHwhtXDGZt3Ek391W1EUaEZu5xEQXmoLd1LJJCn2HBBy7jTXRwmAZqFnKoLDeeNkTGjk5AWnqy8rcpsU8u9v",
  "key7": "3LUU3No5rj2PPYzxvuf3494uWrTRvRBSUSZAYrUJ5o4mTakf584UPUcQuZ7SHY1pU6tZNZif2eAFbTannkC4kh1j",
  "key8": "64wd2JrR9vrxrchP8EcQiuJB83R7b9DU7JG5zfrRob6RGR4Mv7SZmxgsCoSm94MkrHaXVyGUzrFAZa5DfVU57N9Y",
  "key9": "Zye3REiMTQh1XkDGwhsEJdicuQzgCDwcojppWCtC5w2hNXaHttABDM8DE6A9UzitYyY81BA2adMcsuVo4sJLeNy",
  "key10": "3mEJidoeb4XoVVR5hkxWV3Y1cizHLum4j8n8iexoaDCg6RPY9mFG9LVN5paTngpXFqpvPWd5bXf9w9CLan8Byo4d",
  "key11": "oap3nYN4yRLwbBYhmuE7xjT9X7pvQPELAzwuLjPyz83NKtyg3mrN2G85BwkmsTtXpKFPTXekspuWC5qhuHaSGqM",
  "key12": "5zosdELk3kc58iebFBkCxVU5stJqpjfNaxnMQmHQBizupRdu7sQA3xReJQVwvQJaDUN3jr9M85KxZw6cGapUED6r",
  "key13": "RYCr3e8VJjvLPFDTLr7BqXRypvYJwjpZGoTXuaU2HEo395RkcJXDgXYjbtCCHLtYmasb88EFmJC2JKB212PStrf",
  "key14": "5VC32gvRWqkaT4vdRcRCcuXNZpCLRVunMi5H1RSXid59XCsUAosHgkbiwLVYHu8q6pS6fLbMnwAr1KWYdAJWXc89",
  "key15": "4CgVa9Kk1o6JxyLSMBLgbmjxH8vXxDkEU565rqBcxAghTWUMJbMDnNzhDV19TehKZpURvZWMARgUo5UqREPwwWiU",
  "key16": "2MjGTip8KghQL8eVrNTAHXn18m3maD7qUr78tzfcfcEyNXEXrgE3uAkkfYjJJJPmfQiFv46Fv9Gyd9dC3gZEH7zU",
  "key17": "2cc8dXd58Tu5oXBywCvDoqMHwQGx185wZ1PTEJHkgE8nqfxH5ohfxp3uDpHQ7Fpvc28AtwH8YftZDzsgEyoQxWf5",
  "key18": "4cW28ap7WFkwR3Xyb1yF8NSXQBmzhyAqk4L8qTsdG2DpGfwZwxjYkjX1tbnq7BAjhHmJNXFVkJVHL5KXedcNzSFZ",
  "key19": "5hv2TR7AogsZfCxEMRTAGQZqMKhymW4jGpkssdtsWUPkpofavRGCBnszbT1hQ5gDfzvTKShX4oXia88iS4kwWrQZ",
  "key20": "3WMSXzjvWKGUxGUmRULDcG9hU4DS1jkDGCecnaVw2fNjrVMYfnDC5iohwvwTB9fBC7JUankqD2txnzwheKgn4tCa",
  "key21": "5kPzkY3DMYYddkYhgKoJVjRGJgYiRbMyvHhr5GZw3WwDy5eUDR9X6CdQYBsXaqV68gG62379Tx6immK7nZnzPbQ",
  "key22": "3W33uuCdadKUfd5bv9agq9BAtenUGNdLXvJSRmVFEkce7H47nKE9ak8prYKJM7sjYy1kEaN5zdjugbwYePMZqkUm",
  "key23": "3QenG9qFiNsF1A5H5mLhVfnPVjPaGWoYkYsoWbuy2asou8LW7CA55XdcjKdL4F1isea23L6Qi6usv99MJU8RjxuN",
  "key24": "4CVQj7rA5g9epXtEjfpAeZdh7u2kP8NfFyFQwEeuXJam27ieVhbFx55RkCPfhKr9emN8vSmcJ24crK4bkDJ35ik9",
  "key25": "NvBLN92nyAXpXwmWHyvYaRMvJiXxu172BFWatpj84ht5AcppvoywSYdVLefZtkH8YFUNyXuBmgjjEHUv3Z2B61o",
  "key26": "39gFic3M5EQyUTSt7eUVKZcQtHgKiccV3m6ksk51rQsZVqjw3sSXQjAbjFiRn8XCnyhatvoZYhPA7X4EGhU5Skta",
  "key27": "2NgTBrkTW6MzauJPGVwUEQMFyiFVmD3VCyw4ECeGQ52GJVyXv1pxcd8kvVGUPdq4xVYDvFybtTAnas2jhUyhWNoy",
  "key28": "Aj1ENoVapq9ENNfK6jNubV4Pyvg7Q86VG1AUpXTXEcA67MLBupDxSJQfVmgwbh5nZ4fveeyMbdh2gSPnd8z4uaX",
  "key29": "2uhbrkypwX4JeakFm9acXpbNXG187jDBaiscaTHwgHS24dkgcWsbLAxuy6QdYZbVqdZTvz99xX1gw7FT7cZxpWzo",
  "key30": "2JNVQQRquCUTLAsxdKR3kpkTeKrLPNUxWridD7jqxtt7d12TsUVFFdgyEVoErV8JQwyntehJpKcW6XYNRkqjdiKq",
  "key31": "4p4Z4Ejb9xJ8rHQDnG93a6rHUGavCmqLqea9A2YrtTrT9JHEckDegqJLYWKnWMnPngcgpPGeM5pmGqcaEr5iRrBL",
  "key32": "kf1ekDPSGZn6TeihRfN6BAymdmz3AWMSxZTd7pLHYi3oUwyktuUHwjAR5aL7MqrS5eLn1FrxUvKZ6whUCW33zKQ",
  "key33": "4W2L4HbxYp2Jkbh6CRzWT9ykXU31iPbJw6oHSLLviwPoQRS2w4sFxgQrptYzYEUD8sujhHNaUgz6aWdNJ7T1bS3s",
  "key34": "2xvdCtyuv33hgYUeKZf1bAned38WRM3x8u7W6s6NmwSGoJWCEHgQr2pPFZ72A7mCn4mwPB1MyovM5Fj6iKFz6M7L"
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
