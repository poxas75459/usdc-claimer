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
    "4zHrVcvuuvk9pZU2D4D9XQTJNn2HPYb69pzHaB4x3h6E9SHNZSsfYBcGYFWGQ4K8tRzWdPzToTT7djZ95LqgCVUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FmmtoPVQZ6bugdpXnC1KadoxQ7MjiZPUNRehWsBGRE3yGTG7dmxuaXzXxwWD3VW3cxfMG2SX6LaW95mZgjy2FYi",
  "key1": "2iQ9GWHHogNhB47Bhwn4XAZRbJyh1WiXiomDPpQoTg5qQu3bQp8vEwNYkpCDuup8RtcwtobunS4jQV7GEEE9ydzR",
  "key2": "5NvsdSgXCZV1WSrUqQ9PMyyAt9pzFYrGKCQNxM16dwKxBzfHPaQe4aLvjd5SQCL6pPyqhFCLTnC4E9RcC8nnBb2m",
  "key3": "PVU458K4J5ExmuRygZqQJ4dHnewz2bm27nCmauduFU4Z4dcPMMxNYxFbRrcUQi96YuEhbFMLhgNQGQjKD3EatvR",
  "key4": "MfKrTJWNsWvt1EmXVCBjNa3oR3sTUFnfaJvvCdcGeDQSxUn8HMB9KYzvx4d926mrhUWC5CC6SbSoPEK6JRQq6t7",
  "key5": "zqUvVvz87c9T7vir2ZbiJjzhjaDqdwV1SHR7YnsaLZ841VACfnF9nk9LmMaiY8Y4H46wAzM5suCbuY2ar8oCMts",
  "key6": "2sjS6fMavtp56b5TbnbVRtKS1qvNUXXBjCBCHfnbAVaWcqm1uscRq4rjtRmVzoarBr1DbeEmZaQTdKMFfnCB34s",
  "key7": "39XsrY8hvFqnGcYSo9nyjM8c3EdD6K5uZCnYCyL7b8xnRxeB8FpUtCxBdBc3wDuwNXUDuye9MHciV5fZQNatrw3i",
  "key8": "4U8saRiA2JHfjwsmz3cNXTb8Sxg8dpBp8RCCed9af4MWfotPhRv4FwUGUokr9DjbqPf8a9td4X3b1srZxqCmQoih",
  "key9": "2su7t9Cjzd91Pkv7pPokrbWpRCxJXpLbFSE6bGeDTiNGDiVPBuQeNQnsvd4PVG67cFZcWagvZ5Mzd2GhYNkNYxcg",
  "key10": "ynpiA8rVWioCQiY4fmwBr7bE8estDDZxSVez3ZonyQvpSLJtWeV6yAch2t2Qib9488K4tVrZS88rjJbcL69a9Sd",
  "key11": "2utjLBXnFCPMrtW3Kxi2tDKcf55xusBChTknR1KCchPSjrJ7vtKFQvVbphZnyVcZgdUy8feUwrtj3YFTK3RNQGcf",
  "key12": "mZ4bLSZ3ZNgvzSpNecmMyBqkP19QxW1GK8m1fouoMxsfMwwU3YSfZQDCurhF9nTeMQ8jpi1oYiKoJdwfpWeDBQG",
  "key13": "666h68fqSn6CWbuaUrh1Wcg7FHiDyijebv6bnbUeM2DSF8nEymfCmwq9AKjJLxFg8Kyqmw7t1S5cJLjQvZ4aVukd",
  "key14": "2U8mxgZURzqLAgiSwUuQdAnFphCpsAdPmEKyjg4aacZmYy2vwADXLMMWtqi5xcvxbUP1HxGu5EdAqeyAfGjshNaF",
  "key15": "LZQS4kHVNY6tfU855Hhb7abFJpRK6WwJAtapkw9jcwcGKS1wVfJjZ3EtznURCndoKQTSPxKdEdMuP2Qnki5R3AF",
  "key16": "3qwhM5nWVQ3mxt8MQYsXFGmFhzmH7fdt8jx2KecmZP8gxzv641fQERs4f9rqiqsH6m4fNsK8T12TsBC3T9PVxWwM",
  "key17": "5cZN1mV9MjR2tABomguvpL2mckLmzu8wpLnnLtMQkxmHTYVMSmBpYd5YdLwQZcsvw2ZxNcFr55DjDu943s94kevd",
  "key18": "5rhuC88MLkkeneWtFUBwdpr9cB2sbAXdTBkiCTz6CLpXv9NVRW92sZzuFoCbNPrccFjjA9iYetA9UazynaVe88t1",
  "key19": "5HStnKrNpRNNWVechEq5Vsc2pz6rDkHx87uBLApEjqgBfmKb8pQnnPRT2zCmxs5e4nK7EGDdw1pGV8952fmCUjph",
  "key20": "3U9fgrRZ8C9Y9CbjB5BmGgCFT8Vt5vzqM14wmhPDViYG8GvuqRkGw42E6hPSTVsFxqgKFMHbdFY7TmzCysoCPAiQ",
  "key21": "3YaYeZgd7gML6UC1Md1YPTPwnmEx4ECPsG7drUhRACkVc7g11PLRPFvTYUC1gWPZiA4KzDkHisq843STSfAViqBS",
  "key22": "589uTqkqCPMp1L4xDRWXHPCZqS133aeyK2Lu26Ar2tfJnuSaALCR3oP7ii77Yx2F4VYgeBMBBDq6zCKmAm4VrrN7",
  "key23": "3ezt35KqmEGti9Sorax9xFWdo5yKXMjJnkqUGAk2BLjHRENGN8HxqtjQg2qkcXCyvvE6wDg7sPDD53TqxUTghmHT",
  "key24": "22nLy4RVE7JKA8gyiqp4wdGKQJatbfQ5kmkUTaAxb8iGtpSHgLQCW5zvNRGHQTRVtj6fFxxujZktT8z2fqZzchjF",
  "key25": "5wxe3qNEaEnWr1ytB8YtsbhZRSVCjSbtoGH64Feh3RWSsVr53N2R5HHEkm4vyfbboEekso9WnYBv8tTAqbAnnena",
  "key26": "31ESwJaznxsWXjexDkzG19d8eFwmwUmQ2wZD2SHbVHujM7otpLszKmZ1HMbUEXSyyzryFsSmibRnuya1oHZ4mjMt",
  "key27": "2iPRQe5r5Wp5pK1CubG1qWbccZsRaYmL7HCrXfNbHs9XoWfyLriyzpfhu6R3F7TDwYg8BMAKxePMcwbquFhwJmku",
  "key28": "rik5WKh1nxTc4x2nR3W3zQreFHSv3239TsS7k9oHmt1uZPTBZp96NjrWNYLpNmoKTEC9qjVGjg6v8zizZFpoRSa",
  "key29": "2TUvikdYZjoe2SenFmD199ua25BSGRWydVGcGce1bjAUm9uYGjHJpjNZScCh7i5XC1G6LADqe2kDK6VietnxVW1t",
  "key30": "5N7sy4vhTDMiMgfTwXVUAVNLJBHgQtkiWz3uTB8HfY7EJGTxyP4jfhYetj1GqfBqJhbKPJoTVTfiF3Lwhig5qvVx",
  "key31": "5FPf1uU4ZTmRuxorcT3cuQg1kpLRihCHEnpXJHszWg3FjUqXtzhujMpPSRJBvUtJXXn79wDPS6sLMvhLszSRHCPd",
  "key32": "LS8CM5KdMBAB1cm9pdmHQBNgqKbYu5fSxkqfQurPYZNBCsLzdbVLt6kc7nKD2d3JXGNaALNNhq55Z1qJTco5Y4C"
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
