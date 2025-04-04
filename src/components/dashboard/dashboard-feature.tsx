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
    "2fjUdeDXcRDXqu94UnTk5RgnCeaQ9VMxDmHauerPA8oFqFg8w7yoKmm7pcGfU4eGNsnboM4m5qrHgxLgakDbT3dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNywCuvHqeuNqXe6qJJ2HYVy4aehnaHmJ2wLs6wL7uzqDEkGisJb9KuketKiFWXKZbLccqGnSL36TfZ2fCNH4sN",
  "key1": "2CaRqTyzdmo1C2AASVAqCjSW8Hwgnff8Cce1Sq4ZtUnTxVZGtVmjL1UAYtkKTaFNtJRfdT83XgvQa2PpdWGg4Zeb",
  "key2": "5jd5wt17CLkezJ7HiQmwpM4DTvL9waiEJX58ki7pQ4EVC6xjZyZSgY7BXmKw1L17BrbzUrh2FfUQ5HD8trvisa43",
  "key3": "4NMjQpmnMcVzQ2mxmsnTvk6uPNNDrVuM62y67nsTv5gDetx4B6GeJ7EkYg5pohnSeKyDCEUpZEEjJzdkM3rqJFs8",
  "key4": "5jAEUDVzaziRfcAuko3JykBw9RTnRjtToZrpzfUi3kzzuH4ctjxjX5Ap4qcetapWa29qbuKNYHqbqkrQSYLJc9iG",
  "key5": "5XXsSohHzae5gQMzwNAHasse6mSqo49Gtxf3ASz8Nmf9NCEEArLewrrQwzDvxWAtNqqYA1m3Y8Hp6Kzx4QADQxuG",
  "key6": "2wwUfN1NxnEYwFuLzjdyFVaUkwdK6T3EnnLrizwjszetjuyaqGPUkRpvez7CQiSoyKFdBdCd8J9Wx1VYbgKBL4NB",
  "key7": "D33eWUjCz6bYzHmKQVZNVUYXMjTpHY6EPnWUpFiDkdMXk6DxCPfanhsGX7zBrvJaggmJhxfTqcnm6rrjSwExzTL",
  "key8": "36kQEaKsFhDXShFWAqgok6hTLEMMqz1Bq7zs9T4FdfssJsZPfvzaph7oEP3Qz41EjpFQuoQQ5uabWLfrNbxyJxkM",
  "key9": "2GiwWPnCQUUkeSBV6sHwncChcWa9KMGbZjeSxB8yep3aymEzvHFPqP1YfVkqL9cm127pnH93fNMBtd3jSMuUkvHZ",
  "key10": "3zj2ccaTJvCkxGxx5wzm7gs1vWbvt1Yucx4ZVSnAv69GrWGrzxjQratFNpogVvA8gpgbUvLybhck2p4Pr5aBGVub",
  "key11": "3f5kTmnEYFbBWo6nDwXaigaRSkzM7cEoXu4GhTwtn7yHMYYbj6ftchRKdiHDT8TwLQtUKXVY7nJv31eVZVJzF1QS",
  "key12": "5KBo2XF2oFRZL8FbqBp9xoebPjVEse5DRZJdn4iPpLSa7KbCgrHXyP2WYQw1qgZnQKPm7rJaL4ikGZEqu8RKmRzY",
  "key13": "5M8sjDLyQzzT9wtiweFCki2mJr1Wi3KkgsUuviZc6WWAK7oVFFTHDTG5K7vXBnJDFoQfr585vgRrVbrKwErzuTD2",
  "key14": "4wmWuZWSbb4b2QRBUZ5XDQgPyP1bisTrtRhranyug3Q9kfT5DBJDQmntBaHcUp2Z8jGyhhjfK4NuLfLYG6CsXyJV",
  "key15": "3mxirRboPcJhF3RqzjwBSU5wZjJ4s1msabwSXdLqLHkDfhgqu5Ky5MZjnMm79VXg9TU37cmXmwrxymK4H7U9bNvN",
  "key16": "5tDReNKTtvTTT85CSyixeF1M6mYEXRS6KhmuZGV68tQfVEyputW3hX9ves8t9Q6ivkbeWFu9rvMoc1gVsWAmo6PP",
  "key17": "2BeZjM6HDxGpLhbtLS4qstQdoQpTJER5FEoiPJuqEa3fP9kMMp5798xA2fddSAvCiN2a6g1os6vn6n77mMDkmRmr",
  "key18": "3gVsxnzzqvHRNPk119qxyK3phwVR7wwAjjNa8bHyVZCBcPi8amRSbrHaxWFEtSGL9VCa9YRWhus5UoNcyXettsHh",
  "key19": "5xTi3DYyJUWxdwUdPCJfuV9r1gcULAKHqSf8CVCBpW6YW2Zuie7WBuV9uJDxsLrTrQbbV1aV5bFqwBDcDqyYDzag",
  "key20": "5FeeP1pKsRJcsEht1Y1XbaWcTqa5ugSMbdYiP6CtkX2SZUtUUWv51gUd8TZsktYBo1CGbaWX3Gs4nJHqKbgopWeP",
  "key21": "5D2pqntA2gEPCYcWSXqcKd9EjEcqjWJBrs5TG6AUCmWKeJ7h7mVTW9H3BPSU2ybgRbopyhtEAFejb1BoCBkNZUrB",
  "key22": "42FWKFZej7DTn5ynZ91Ka1sMZG4NNDschwArKpPzd42BPERUc5s4V5t9B9ULyYYGr4yAWmAyL3mYjJ2ESWxVDUuF",
  "key23": "3dmuvKStaz2hedKYGePxeUfJdzsFcrHjj7Ev9pbwpLLGT5BitWMsCVvw16oX1QPEVv61GwXg9obbKf87PxdVQj5R",
  "key24": "5R8bXdgcNPdZpJs7NDebK2vvLa48zB3fYpT51Lg9AbPFrJ7wa88xKiYaUuMiENrzupfdeDB4tWQEpWXW6V6VAn4T",
  "key25": "2ouLPrKngJtUXiBSmELariw9ma5AQHMcFQPvmfmSpxtcq5u9GGPV35eeFwPovuyyfwX5MVX78ZvDXuTeGr4bCxYo",
  "key26": "2nKrQqwEYxX7GoaDEsCm9531JYaoN6bRgP9YbpKoNsdUteNJa8p7J3dQ6C43UY6j13kUAD61kEs3SfLsvRyWx1bN",
  "key27": "YECyYPz9WbhiLuNkRzqsNX12zfkQa1cpGN3qbo4BagMyGPFrsoere4db6tfrdRcQbpno7D7vx9dKjb8d7zGoryE",
  "key28": "4TduJuHZp79feey51hgQEda2SHHFYHm7S2ycZJr5FPGdZLGmaGn8LJjRWB2FNvcSKAJu5PKENTwFvinhFCRFChPS",
  "key29": "E8pXQ6DJkZ16AK4nPJAGjCxYjB8fGfejeqWD3fMRDwJFDV9vh3sDyfV4XBeSGy8MafEvtUFsJT7jCyE39GVpS3w"
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
