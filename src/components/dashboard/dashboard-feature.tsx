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
    "2wZmwLXSGc4bBVN4723jC83qGpjfG37We2tY7b2WLQqkEHnedYxZezLBBNCEG4V7YKGVYH5C4Hoh1pQXRv7njPSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQ7rX3n5e94ceVujcbQPoU2fsuty2y9PbWsT16fu5qacNMJYYa8XdUSY5RsUgtoYYT6MyjcoVzLLao9NCTS7q1s",
  "key1": "GgLX4eu1EXCNDMSXEEev8AjgA3gYLiP6RrkbtJujVeoqdazyCfWr7jumDXSVxwJgCYfqq2z38s5pCQSfHD5ybyY",
  "key2": "3HWdCpW4qsDDSbn6QKUtvCbQciY1SxX5j9rrY1rq5z2mhVZZPV6U6ooUn4XwUpXXvjEVGHT13Pd6T3HZnLAMZ8H2",
  "key3": "658o9MkaMyW3rKQdDLrCM549i5rMXiy3MTad5UFoXd65iP3YwRYoVN8Z7dsKgaigGzLy91iiTws4m5y98aN7u9t4",
  "key4": "NA3hs6xzUkAoGuz5h3N3JKJGjX1xxxogVBTPai8fvmcBZUBf2ndnx8XxFf6wnPRe85meMrGmWH3V9pgjrKk5AXm",
  "key5": "5UQgbpSYnhghoBj1wBYv9L3fZyfaUY2nmbGnWHgXzg1fNXpoB9KPnbbEZNdZZvuT2eu7fhpFq5ppoampMMVDFFAe",
  "key6": "5vuzTwuUQv1EjU6B8FJ9sZezQtv46jz3hgXCQQU4ppAZZZanbJC1xyNszvv8XWh1zg5kruqCuKQ2hsNfLUnJrHiB",
  "key7": "2LkgJLLLo7nCFA5LDQjmxE4fzrc5425kpd6ADTuvRW9F3RKKQrXhkqsyMELiaJz2YSxrGLEpeRjWiVjFZ4WEuwrT",
  "key8": "2qwLecgdGnie8hHXHR2XtRuxRDkLBXwaqiij7ugsA412udgLHGSyzUfwbKGMNFwnHVPrfBe1XatcPFXLx5KphPQ1",
  "key9": "4RY94xtUK6foxVHN7FDzQPmiCgESNcm9nEUHrDDeqdpVRiiBYQZ27UBEKBzgHrJbB9ohwzGJVMeQd8YrvF92VxPP",
  "key10": "4zoHMPDhRnNBxA5XDXhS6RmXQGZuTm8sh3P72DB6kwL1fe4UV4riCKWuYSxtAko99qVABanHH17Xcry1dyNw3n4X",
  "key11": "jYrxgDn3H7VVu8A6atvCgNqF7cWzSSwnS2ut7kXCoxfpDxETKhEKuMfQ5FgQXbgnnHBfSvpACd9NhmvFaLycxLk",
  "key12": "5WismN4z3DufAdyy85WTkUYSiyocfuicoZ9y8g1zUrEChhFbGSTYtas2twjKh5Fgvnfw6c3bHMUVCFQmUnNqePVA",
  "key13": "32FJj6rJP8U3g5HY9UvSuMVnvMcecNQNBHQeDyXKTHytN9AMwnidU8fxssC7tA4czyBuogn1fPruqqzctPnxzxdf",
  "key14": "3VWomtoz7HTYKxFYJVamYspVpo78VhqgYv9GNmLfn7YLkQL3MmAYyLfVASizs4dwurgAaCvF9qd9XufhiHaxLtBP",
  "key15": "136vt6oB73XUHEsA57M1D3UUhkG7NSJ4WTbxcJPRuWAQzeVrwKtW7bMEfG8CTp3NPT44MX7GYjAav8JifK3GLp2",
  "key16": "4dHU8rDiu2X9Y5gq3cnd2fYnNF5vunnjevY1KkBaoPh5N2GEp1UjbBHLroMbBXTJ445Txh23Ah2y7vkECeP9SdMw",
  "key17": "3cYN5ygZCyJSPCvw9WC9BG4gLXNL7LD8YiEXKxpdyMtP1QwmAiPHWCfHCBdVnyFxjvp3GcKxAn6YLsRTSLKVF7hd",
  "key18": "5u72wo2ZDquP7FUJ1pLhtfuUeksy6KPHqMTwbXHCDvMHZ12sxgjMF2tHu23rW4KeEBb8XcKhDNWvxKhBkCXu8wDm",
  "key19": "2TmTcYA4dCJ8byK6bvhPYfkPRv6p6z2upXMeZ1fdhUdFj2LPTjHCcVaD4kd7KjRvX2zLFpa2wfeh557Zajexx6XQ",
  "key20": "2eN6oPn1xkxvc7CWbtuRo5UHjxc46SMuxwGvSCFp4uSLirZrAZUQ7sEfmPqFuYKo1B7aSFKSLaCViMvWUgmdY8ho",
  "key21": "2ebFqakoSDBje71L6hDdMvZDBCm9F3j4BvGM8bJU48miHM8hhNXTHpkWRH6hWozTwCMi8kJgA26ckUS4oJrkyEoF",
  "key22": "3Nm8xWXG9DcTUTcrTRfXKbw9NqgKmDbtYtgL38zvZ3ePghCESP9eWphp5irYryD7yZxkG9isv7f2RaL31heQ1iwW",
  "key23": "4zFvjkHAQ9v2nuwK6ca7JgwKN4C31ZT5xRB9Zxs2a5KS915bPV4LyxwTeuuvkoA3R3q8osD3jCgPwXDdo1ePwx5t",
  "key24": "4ENgmbHL55p18719TQYR9bnC7PDuGP7UDwjrKHbyC5pkBRGo69Bf4eJMWTapLsoCtQAfZ9i5Q6dfCa889C6BCmh3",
  "key25": "2hhzEsc5QLzw2WVJSSH5oSEX9GSja9zgeprnCdrMCKcVKGVtGR8QvRWZYefDnjL1MpuzNPt2qQ3ncP2MTVABQRQs",
  "key26": "3PvpGnXkLDA96rFpADwzpU5aLVCdAZVpYSahZami5ANMbkrKJjFUVBKpxKHebTsuAv7u1yG5Gz5etivQqKAf6vNp",
  "key27": "BdUEZEFYB4BrWA25t3kLEPNRg9U3wfmjg4U1xDn8HRSyLRvp5wcDGFixaK3HLRPEfwMk5Wbgw9chGi1mYmYUpTz",
  "key28": "5gwntamjA7nzFhhVfvGV6TJQWHmkrPP9LtZYwuZ1zvvz5vqvwQDzgLtEdAZBg6qxFdhn2psZdFfvn5FwuUE6EKe8",
  "key29": "5Xnu3jFPXJybsPCvihCVJhBxB2KXvDFV7fvEWXKFkWyy1qZCoMkwuSbc4qNhRJKUC35P39BTSqMTy7baztXfFq6k",
  "key30": "4ysWRVTLko5KjGLwsVAb2XK1QrB2VdTXMetSQWgW9VaNGi4EiRcZ4BaQSzRUkWi2gSpUJK2bC8UHL8Xytbi5Gk6c",
  "key31": "3Pccy5rmjRDndUctC9nGLxJT7uFyuDxNwRp3TzwSnwtS52erSBhShncpHDfGjBHCAMhsG3m6UT4ur5hMShsDF4GS"
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
