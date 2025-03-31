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
    "66UvzVc4faW7N9NA7vcychv1QTx3xFf8uDkhJ5SjXjywEPCmU971HNAu4uTBPtGgBhN5ABGxEjcRmYErqchLiUFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDP3a1x3mffswc6YTW35spasa5Dr4GmWngzVLGN9V1DsJFiQh524dWbMPsVJHL6x8YQSzBsG6sw9P1XKLg7ccud",
  "key1": "2oq3ocwCszf8iBKAALeZCsXSCFsqBAryCdrCGPS5NTLPbEHvZnqVr6oC13oLzbCRuRrVY7FEX56pm6VRQxMY7j4t",
  "key2": "3ezpbJnZ85M1ZtFnCfrpazzrL6tVZNa9QzGBEHUC8j9pBgmnC2Zjqv4mhzLhzk67RTjinUcgMMpZiuxrp5hWmDZQ",
  "key3": "2LsoJYHM93FVCVGp6AKeUDWarV7nCfAjvqbvWYhEK9HYvwukqoGpwUm4BmbcGxigc5U7MptuVzMo8xNLfDuzAJEm",
  "key4": "4A3wKywzbv6rJkp78TknQ3EAs9Be9ekLaoZ9vGamxXnvz27SkfE1cWzEK5rhcwUUpXvwGzR3YNTegDKoF31Ki4xR",
  "key5": "4fYHRhS8mVMbfY4fvjoXoMGo5piz3YUJ9o7wViEkyCW2o2hMEyYuUnnLTYt23B8Rsb8rA1RFj8ee2ki9S4EaTsku",
  "key6": "62sNX5xHSCMhGiJGi8Lvmz7d7Ht7rmdkDbctnhr8ukBcfdEWURQBVngsu3E1BxDk7M2faPRKsaa2dDgNHu2ydNZF",
  "key7": "2B2rh6WAS9dW22ZQLzRbZXD2KEZoYUZLbQt7UyB4htwMF4fkDmvyMsdBKuJuLMq2pa4Nxu7WgHDvbdBrEdM6KqKq",
  "key8": "4kqenqsRNQshPa4bz9Fq5bHuaqJ7xW7Wq5D6vr3J9UKWKrkGyEuZThi7ftDJ3n9FN3HjQJ8gTtxMTY3FWseSRGZc",
  "key9": "37K2xzDjBqGh311TwaQmbXsFwiexoQaxJP8pBJzGMKrLym7A9SUTpuS1wCn2jJDqf7BtSE3h7ARrY3gopPEaFD5H",
  "key10": "513DRvPYn1YpHU9RqCYwDiXS7pRQtfNfTZexYeBKYBYHsezrbuVTmP6fk5Ykm2pSjruAmku9sa6hyNNwhkG68wD9",
  "key11": "KQSyHXdHz4xHQZvEkcGF4ZQ7fxM1YguqVfx5gzCbPMxJKV5yBQUsCvK3AeACNRoJX8cFccDE2RXdBCsgPE2tRx3",
  "key12": "5AosMDnzeJKBLSSo77miHXfwqqDWpqsHZeM8GkSxt5zKJejFD6FuR7iS2vZyqQR7Wc34F8XBgHHKWDFd8LVDUdB2",
  "key13": "2T89gAfRJv4WGRgRKjpzT9antsqyErhFa4iWU99Xz87VxnuvnJc232AKSMmAoc5vYJW9cXdtZxhiasJk79vnrdxb",
  "key14": "3ohfziLUbSbtiFi3sDsnvgQD55BHGR6ubAVPMfUzXtVDx4N2gGMhWwG7ZntqChWR6MDitLC12hXh1zKxeLp3NJDV",
  "key15": "3KG8nu983bGwbWKbVHZuNshAddqtFgn5ok8usXMMz3C9X7a2KTNWTk7QBEo5yUy3TDxANPGsEACqkb2FnzkF7coR",
  "key16": "5DGiycrnT3NdreVtdLKNCuzkFAPuFkECSMiWDtEKTqXhPF349DFZiUARyqgkaG9nPTLX2A8ePo2nHw8aMEaQKBS4",
  "key17": "soLkMR7qnKTM7qKWRcBR2GZxkzYigdaNFkM6pQdLAW8esFUSJYALh9j17AZYh6ZrUrrX4XT3mV6EE3waTDo7CKe",
  "key18": "2HTHDaVWcdpB3Zz2BMgLCUH2sMcDkggxD7ka7uJA148szGMsJa3wqtRgfBYmTJUqewLdbS3fwzmXatnm2pPJqkVJ",
  "key19": "53QMfpCU8j4i1e1anWrcFWgiJy2fZ92rsnY9yrdYz7ci4K6BcYBSugaHnfHdxU9Vm7qaigg4JD5ASLmFzjvRTnDv",
  "key20": "RdShn3Jwkto8VUiUbp24sCbixq5GgSh8s6DWCnG6xBYJ1AFYNA1dd12ZzQrymoPeTAtHxhct9a6AfQ3bmQBq7N2",
  "key21": "4auQJoExNy9yDtQKJi21PzzuPpS4XpfXinSDfiByW4p56NaUkby4ftk2ZxTBjQS4VkpHqQTpSDPMRb7d8KirwZHy",
  "key22": "5xdvmWoZbG5aCAzVuVQzbFidbTED2TGCYHakuCSoXz6d2ahC6Fw2Y7soTdJJiF1Nq7f1mnL3txj4iNZHouRASxMD",
  "key23": "5R1MHsxurG6fe3q6qG8CfGiZWqqczX9oyZphraSg2abwtcnxbf8x4oFd8Z23n2W7J6CUyC76FCW5a4vEZiDhZMh4",
  "key24": "5ZJpus8uvhHC7dRiwSSKz31Bv6KigRQb1CgMqcRNmZ7L5K43YkYNN81AoYAo3cLw4rp1ArHFTVfAq12XjDMiVeAc",
  "key25": "2WSinaAbHrFv1P4nhg9Jt1pnKBDnB6wYKJXp8R8X1w7Zgp6h6UkKsFX1qTmShGcQiHd9ngEeKWZWoMxt2NDtYfpB",
  "key26": "53Up2KexnBhDoe8ZAgGPudqnCZuWZvJQzcozdx3uMXTJSSwojHeFDZmoTUuNpggWVVqDRqB3SBDgUB76vfSEnBgz",
  "key27": "2hHNySecYL9hU9uL8XL1mvSkiFbV2orjYMBVgnA3xRo3T1XdMRdMs1TAkTfK8x5XjjJqp1p8R8XR2MK7ZFoJuaBi"
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
