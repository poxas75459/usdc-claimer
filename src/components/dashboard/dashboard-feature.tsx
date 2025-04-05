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
    "3jWFGjNDEbmiezzEjcxBLzsDqRHR4J1b9ch7qJ645MBK4DXkncqBWWeUYRLjC5CdGQ9BUC1r2erVWrynUcxhcSni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nm6h8mF5MM3SkU1uojXvpJXUc2mbmrAFLoDDeurECKytMSosLd4WPAzXXvrPqj78TZUhXEbnLx9asf3oQnfV4k4",
  "key1": "4XpNayL4Zt7as5mxh3QUmgA6bqDLwV8pyFhz3UYmieYm1KRnt9HYAkP3oM3tfysqxzz7CihqkGAG1AsGKojnTR8n",
  "key2": "2B8xRcfky48No18tfnspd8ZwCEs3am53bkJqcgEpg9JkVJLMV8C7MZWsERKuoeViFxBJ8aatiJujduwua256y1SH",
  "key3": "3MAAXyPsBFwJsrQ3wxczmPjbj7cNvuSEPMW1nVupNcd28jnDDDQSfeA9LGe7SJkrmaodssGohexwe5uEErRW17dK",
  "key4": "44gCovPLkgcdLooW7zaQoTbUQJTawh8TC5iR8KfZgMJR3XZo3NPpPNx2o64sL2Yb4ycs7QefSdqaAX2Briuo3se3",
  "key5": "5YNG84XXKsRpALJY4mZ3EBAUYUs6A3N89C8oLJuJA152Hwh8EjbiyfxHs3cKBHZrX2NPXTX2AVjBMd4xRQzuuCyJ",
  "key6": "4nhKhGbiLgWkk8VwmPd5jacn9AAFtYsMwvBvZcJwmuim268vkShcGMXZv2ZWPJdHKA978arn1xuEtEYgXTv7M12w",
  "key7": "4TJAqWjtvXHhdtRT1uA2tNKcenAmAPDVLCWMSbpj1VtxB2RH6C3tw5x8R4C9hbdR63asFjrKJ6C76WYx3sGUQx1K",
  "key8": "wTNyfARhQM4tZ3ZEwU8ieeHrUTQkb2KyBCsBSrpC6SAqjEQBzzoiyjE24w5Yq4AM3Xg6CJpadsRcYQM3BkWyGA3",
  "key9": "5QB9t9kpUNvREm9BJ2jtEPACPYP1gVMJe9t7Zk1S9SrjjQuFniBPJhwQt5du1ch4tgZWxH1nf8AFmwSpdmrVywuc",
  "key10": "3AhtH43pAs6JYQ6Wxqcainwv1bn8poCWyeSBR9KQP9FvZae3E2NjZz4d1hjMVNjMLhzo6C9eYJdXkVssNKWQgDRe",
  "key11": "66WuHDmjYTKwFbeii1Pgh6cWNTC9yAkdwHUJ4uyLt5t99ZBNkNoit4B2GRyQQXabrE7RHWh2t1eN4ywGqYYdHqgn",
  "key12": "24QjgQHXJxK89xcWdsePDX4PN8gZvo7zcmNKStgJqZwG5dkLH3BjCECiVB2aiV7cvGMw2iXez8ZP4rDd7QV47nvr",
  "key13": "3eNeek1zDPPrrZCoc8orXrmCGu6udGRKHuwwRNwWK18TYzfWd1nUz3wbagaYkYSaCZ4jS9BjU9eR42s2cVzStz8p",
  "key14": "5zekT4SyBuP9toiyAduxNGfBaunMUtuEVfs18ChFQfGWDm7XyDKUtnoMdLp4Hzezi1MXiFv3J6jC2XQZuqRHqZH3",
  "key15": "4RCo5UdVoDULqiQYRdaiKdPpw7dJWaqzeKmgf7WdxuJUBJUZHWWu3Xc8cWy5jLUwY5waGkSXCkujfRaWMLykTu6j",
  "key16": "2K6iFpKscvtGb5zkoKqjsBTYAoR8zh2YBaWeC2rzgBVnH2spN7EQLH7YtDFax28VAcGMgMDysQBXFw1NYwFt9Ztx",
  "key17": "5qcthHUWrVW8yARjFZVZ6MvB5RPY1sPnWJqo4euzjuU5DDKzdk2n4gJxHg1aNgcpJv49oyVhptu8Ea1K3eKyBN11",
  "key18": "nmXLT45iTo2qmT8Y7Yv8RyKhEDjGqJf6TuCZ245DbQx8Rfbz9BJ7AF2vdw9GSQdjcTLDwDxeUQcazdhEzeHBKL4",
  "key19": "5ia1akjw6zWEkkoQtX6YGpBfjUtLibBdejoT2GtApGUfCUcL6TuvnrbMpusuosboaUZJb44fBYghFgXjpgmoBHGd",
  "key20": "5gRpZS1grv6M2ry7FDEE5oUddkfTZJgCuSwjZWVfEbce31tUeotfnrqD2DSGycm9XwjK6Y536SNNyzdbS655RcBK",
  "key21": "4Ur2reAD6uQfoHD5oJmygSnSAaRYhMZYWgFcqRiLDjgmwsHyCWHVQo5mcE9Dmd3gaTTdeGL3XcyxKX7ho7CjHo5h",
  "key22": "2jbvyn3xGDXvkAR5ePQnCF9v2j1GSyY1BvtDiwtfpEdde2fRtodVENszMD16wxNofx8jmi6RnzjeBFpqemUcqqTT",
  "key23": "2EJWQoVpkPy4tCvih8hEBMsQ7RzFugfksVsRexyurWebYsaeVcb47UxFxEh14D99wsh3iuKasVUMk3pMYEXYzAzd",
  "key24": "MpqkcKRXyz7S9P6tnc1DUPS6wFDbf7NWzzXDjqCY75TZHW3NtjvQ5hSmLRjdzsjqu3CeJb2Rh8VucthiDAZNQgW",
  "key25": "4kWCpk285kg3LXrtkFLXpUtGXv4wcb7FaGMEMbdqpvsksxr4UVV56mVN8A2MzV78ka9aKsbZsCexRTgSGs2hyZFR",
  "key26": "4gh3VeQ92ApXdQXW7C2nsmS6cTPzhtYHSTZtpmDGfWfsv6NjYPwhotYLbPZDdoNptaGscYRWjgg7uEjTy6Df4VzZ"
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
