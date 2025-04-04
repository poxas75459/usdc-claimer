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
    "4upL69kFDAxeQxnSyuXjCrxGH57nE8deGgGFBC3UugCDSt6coPC6bsbGsj1PxH2ZHk1DC5KhNhCqchHEnQ3aH9hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkLDH3qWpPCeovWGC7Pxo8mjwgxkHRZcrRe3WH2DsbtD4kkWXBvoTTQ5wUuQjxQz88jwP76cKSfHPBASeWnmrZE",
  "key1": "3ckQWNcRvvKPZLBKsNxpaKSTTAtqt6sfyBTCSsGyT5C4WYsRmU731Hpjw37Ndz66C6rZRz2RWQh8jsyZBdcYBXgH",
  "key2": "37x8VpjXKBnkDfbJUVuKWxNEBwkgte9jJPTHDCRT5VdaFee4dMD5qUJ7KA49QXBrUZKPRgBkjqUTAeXqzzPK26Bb",
  "key3": "3M88afhWsj5qX2EUD5meU8g8qTvn6CECu7R9FXknn2MDR36N3MCX6DjBc73qSxkTGCjcYR9e8xdyfFvgJg5XXZTd",
  "key4": "3FiixwkZfxoHDhuKZeuzutcpnzYEJgcKZGB5XZ71s5x3KZdjms3ePsdWW1UxWGvMk4VouCGbfERKt4PwTFnNwrTJ",
  "key5": "2Rnkd4kFSwQBjGJ3Gk469jDAH83uTcvKprVM8hubBMNykKi6CmkrfXNJ6q1JX9fcbEGu72gsAq5yx7o8WAe8YV1Q",
  "key6": "5cpGCB5nddPDVjemP9rgeBzVDN2d62CMB3MfLcL22QMzZmzhfydM9kHadxtYtjzmNwhLMrBxrABFe9i2nKsT5z7M",
  "key7": "2pnSDwG9kDc1j7bg6nmAmij5sqAHPmgyKTMduTUooVgvMumfc9GPvPVkHYmV5M3rcmj521J4FHjdNeAhChMgqXhe",
  "key8": "4uroKDp5kTZA5LVnGc7W2tUgqwarpjDDkJ5LSi9gJvArMfxV447iqZnwUxtjmSd8wPSj3Lj1MyPCnLPi8mFvewsT",
  "key9": "4un6cMVLh5KALWYW2jn8nZCM6h7R9A9GmcxxcBvYUPfZoT12Dwk2zRMBV1aGab4AvyvQxS1nWRPXHBMB3Ysih46N",
  "key10": "5TD4ZHv3yfCmYrMs2kV6snUhfzi4Q1QmkRThpaBAcUjiDFpLhwnqn6k1myZzMdF1sGX237n4wpqdQwTQ8WUsypNo",
  "key11": "32kjBHo8wt8scVW2Pn74gvH7CmHYZUEjShfv8spP3m6ZdwzbFBcvpnHnvo5wPq5HE77erQjh3ASUgB5ot84HmStp",
  "key12": "3ZfbpLwFubhu8WeuXeJZm5pkTkje79LLiEbZTr88E6CLxQabeobD3yDqaTJUNGSBw4fcoRv1qr2FpL1WsrGZ6tTx",
  "key13": "41oJsM1LKj69UdncBSqcNcdhS8xjVMmLe5MNwzi6o79Mz4qa6uor14qHNe8dEmJBgPD1ys7DzXYRjySccqvAJ1Tt",
  "key14": "4ovqoWHYn8BU3dAp4uVtX6Cd2rspSPbuFKsvYuSrDURwYBWUzDSJmhbwNZ6dexT5crpwCCsDSFBU8tKfmfJ9scVh",
  "key15": "2uzZ512MvEBp8Vad9YxGxPS1ws431g5p5A662E5XLskwAyTePLdRNd6vdMyyx43AE7NcML5PCzkHhxcxdzvwnr7C",
  "key16": "2skyYFVtPcjJ1rdotHdnVAcTuVKVryFC5A2vYyAQrykAs15oVM4MY3SrFMh5BX34tbxzpXd21KwxUPdTKreWB3x4",
  "key17": "FyVb7q3Y9eJTwgYHiBhgnki5KuWvMuuXpWZwjjFmxsdemcCGNzGpWiASEoM1M5BGTVzeC5YBGbk1UGKaK7Q2T6x",
  "key18": "4k5jMTGQavdDVMPsnbsCKsQoyahZVZpPC71zRNq9fviWjddhgv8qn1WZGYDLow5mxFY3nDcyqes5baKQXUpiyU9h",
  "key19": "2T3JHXhSzrMLWczoNJ3vin2J3UDN5W4DGuButCW55hq3GUmXMC6goiH7pSCn5bRGoFGjzPKhsBxSgCg2ND8j9PWQ",
  "key20": "3KTULf8HPYFHKcRn5vHwf8kShDJrMctQ6eciwarfDUkknoTvh9yQesrykM9jnYHAE6zNtSiY5TpD7Yw58nN1doya",
  "key21": "52WT2CXWfbJmKvD6F1VXh6YfFsHshFproXcJgthQBDW88aW4ynTYhxdnGzRSN4JxRdVRGnfLB4Bg8pUqivNKSn6B",
  "key22": "4BfSwK2gzDEN3Tb7g2dXdxJKHdytK2C7mHGy4hZLEyzurY7wBJdRztUsdEdfeSuaJyMkdEW3mW8JrrHJ8wRuLrcx",
  "key23": "4YbJuU1yisnS52XowLxLrarsfQ2Wixz614RAiNjXumYe7SuyPmGQFdqtXSkzqdFyUfAkHa4Ms7DuE2aToVxyFzjR",
  "key24": "3N6VFyxN86T91bPqUaTrSgHDA2FfhJjh7J7vaRArMy5Ebtzt8uvARFmWAe3hwHqizfbhVaULC1pjvcqXHSYg54gj",
  "key25": "3j94qqhCwsXsCFpD8esMRjroxVUm1rnvrMq1hri9Exgv3wkPd9w4NwTeM2RNPzopp9kRBX231vcMLRHZq32DNZKV",
  "key26": "4yxyPpZK7c94FUMUHhRJGzHzMb46GozAMxVyAMQjF7bAFn6qfLPJgqxwp8WFUomkAG6KyxshFYzRWbiPyMeHtjGm",
  "key27": "2JjzTa9gMPuRSj3KK1vNXrageFtAzHkqpXguGofdwX1fpDFpmpT2ZRUBJcKrvgf9xt2QCq5zAvXW4kFX5o1s2A21",
  "key28": "1STzTMAdUBR1eUhmN11iT1KntgwdxBnKEKnBj1qayNVxDai5nebfJaH1ZGtFD6WPvt9FqbYQszyHUDjzTGhDWVh",
  "key29": "ZuXgMNw8QR4QUVHVJxGUrpyjokRFYygtDi1W1KKm3VPgLJEsJKeCzFn5fH36EZ9ZvfBhrs31BDkzJig91CQP3HV",
  "key30": "3sM6Y3PqxTV3aJz4sZzQYMDJubRBvTXkJ9bQZHdtZi7cpkTMm2T75XTo3hWHepBU74U6MXTYnA4dWSJdQAcHHDRv",
  "key31": "4aYo21Re22v1xcyC2htXmh3VuGWTW3xVkQCQ3NheHQYg8FjBz649ZkVu9evGwbvcvMQiuDNRAsoRvsvYCSGKL63i",
  "key32": "3PkwNGAeYHkjRCijFMVptjDCS6Mhc6po8g8vLaxTnkUGkXGFKRThNpCXGghUtqoYZojPEtRzAEHixXJNbN3KR2vQ"
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
