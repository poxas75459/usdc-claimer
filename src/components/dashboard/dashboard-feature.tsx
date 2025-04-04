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
    "5adsZSk5voGNB1hhFSkKovJCNdWph5cRwSW6gqhA6H71yKPaJo11b1DfYR79RyjTDCiSfgem3cGXdweSeobNKg8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDpxziRZA4cRe7Nv5z6KfQTNLWBCvhq27FMivaAnc9h9Jpciw8wDJkYGrG9tuYxVP1wTgQaphT4eYPDnWPLPEk7",
  "key1": "DmSnsyjj9vafkpgHx215CFpQCNgbjTexv5jNB2rBLC8qjSUNMx2rhfrtVuJicAsVxKqrwbGKUwNmnJF4YJVUg1W",
  "key2": "23vM81ZXLcrcqXk96dnuNWxqCrwygf6NFV1RKoZTzfRHBfW7QNWZ7PEe9CpJ25EiZbsv8qGcGca2xsgKjRw6eCtY",
  "key3": "3eNJWhtLGmdPEyKUAapgRzfJbU7ncsSUQkntVWaVz2Vi1SLczbU2uyYey3akNMj5cswnMwcuiCrgACCuujeG7aF5",
  "key4": "4zLNAdEP2SUs3DsgpxY1fSfYpanr2DbKoUMFto5Kwkn4rjmPEcY5pFumafg9Pezvt36pHP2zptPTKcX1spiidmBu",
  "key5": "yG4tydtovM1HCCqUi9debqQnVQJYBu6AsnMYkQHRzqRuHHFCrBDKgYUdTfsRRBmje36wsWST9kxBKvLEPrH3rtp",
  "key6": "2ZBd5opW1MNoNdZ9g9bVr91HejazHw8vc8hNV4wbaAPGuRaCqha1E8Edi6Bttz7S9FsBPtkc1M1igbCW7p37SZ7i",
  "key7": "3X9X1awvw4nbDjNswFyUDGPTR7s5vAKe98sK8N8WMD9uFGbpd5mu6LQzg5f4xNfNpZZb1MKbRsixTXKqpPmEBdgw",
  "key8": "2VQ1kB3qtLd4cfidEHp1kTpLqpuWd864TDCE2ESs1vtSS94uS5mu5hnTDqtM2u7UQbVWEUDm2gdJvijugGgHTsgh",
  "key9": "3azvTjP1fb2gyEQoFvz7HMu94n7WjpwjbLcAfCrAq5XDHygCuPxUtxfcr7yqhaoyfWyemVzNwMoxKdL7hMcFfjDv",
  "key10": "3o7fxdNun2q6h5dqKca1HHQU2bChZoars7QYxd36g9xHX3wpU7u1UBFtYPYRMXAsvMgLxdzJzfnXnA1kxyZiFSMh",
  "key11": "2EcS2NWQ2TTuiXzBMMuNRPujAGyFLZiW4kyWpjkarp1X8ig3FsH1pLFe1d4oTh12TCX6CzcvMktLfSsj6Bi6nQ3C",
  "key12": "61YMUcQQdvuJYk3iMiFWeQnvYgtcjN7g6tVpBikC9R1hSDk8guAvu86zUvdhCqULeAhjziARzoMHFUWjW2vChPF2",
  "key13": "2hruwu95bsu9TC5MRLMpGfuT6rz8HoW3iZVo5ZnVjwc9jWtgn7MtMMYs6CnZH88pxYeuCuTrHj4ptkkhHSzZxMrB",
  "key14": "2dQAyoYRQjPkdYEMmvisRhEgYw1BzPmV4ughEtnvREo43P4f6CXitAWnkZ5kfxJdUxXfLi9jxN1jk8cMfbYqCBw7",
  "key15": "4vYicVw23FGFpWAtmW3YeoseEivhrdyQxX7f563AuzkGmsgxHRQMQW6oj9xKGCzv9AmQf2TNgoq9gZaSpFdmrs6k",
  "key16": "mfzdYREWZPZd9WR3cCns3AsGxYF6j6gaTYCmeSXydvZGQFnKqofQnjjqxAmiSMvqNRVgqmrR4FJMNZhMEEvZEBx",
  "key17": "5bwCK8shcVWeDUDekDJyFjGBLZRdbMhtd6Gjj8QfNvKt4iuhQoTcMAjfZ4UTsJg9gBfQRYWhiHdKVqjoBFmpYojy",
  "key18": "5YvdsEY4ZvMiswx26kUDW2DUzbcgnpQ4v8DNzp4JoAWZqomuVQx8Ldg9txfPpZcabbV7z2dw9ssicP5vpsWRQfoV",
  "key19": "4QmH6K9S8Uyfci6jUeoXqWXmp6bbmpC4pw5ZiV3Un2phuVNwSd1TgmXMUng62VAN2XRSts5f4A9LPCokKsC44AEq",
  "key20": "52tg7VcpRFcbRgGDAJVqGGYxNhmSCz3fe4obdopFY25vwZp45vxThSNTtDCopS2S9BErwAi8pFwbFcepk6sULWkW",
  "key21": "4345KRwB7xAMRTSHM8YK8QQPDCsHKKvgv9e62CBLfxsEBPzj6WwQxqw7zeZcMT1RNNn5bDji9ooibj7g3oNBDLfQ",
  "key22": "2Ue5f7s2BJ8Cwg6kVxGcfRkPPFTNZrWQr2WjaeXB1EjSh6Xui3k7ZeusvAXctLkbhxhYUzqpvH6cxacjSJPAwivi",
  "key23": "3fdKArjcEPredVpCtipJLg1wjbpwi6SLsYZH3vfce11jFonop9ZZ34mAno6uQAi3L3jz6oq3qQJis1wKrvFZANqM",
  "key24": "2WLXXPX9NFxBCejLdL8MkwL7zt4sKBekAnBF5yAezkXS6abEaC5AAUBAN2oZkFpBvwKvQko1y2X8XidEwpqrtfeG",
  "key25": "4fYJHiFm2DUeB9h2qEv9Zbki41iKyzQAbLuk59mdeRYHkmw8UdedNv4sXAM4xXYvbD3uHRS5Tx1Q4ZJYt9hNpzPU",
  "key26": "28spYBerrN8SPmNe9SgDZmBMu5jP3nNuHs9pFDqzQWx8wKzHvUruR3NRhVE6JK6xBAt8XwoPv6GxuMb9v3SZw5bD",
  "key27": "Q169ffWQuQegfH5apx1E5jTVUrJmEJU15HiSVx8z3Kq7szUKzVngAJtjuRip5fJwzvnxzDYp9gyeZYSZksfUM81",
  "key28": "TsBMTVoahF3va9b8A2oRB1cE9CnzvEduCPJr958Fxb5XMX1q2yhQpRrQZuYz4LArC4jNHMrg2zjMrXLGraCrkFS",
  "key29": "5G2xeNXsM2fbPc64asgnvzybHd1hJ5EKgMGUA51wTHEhRF4VNBWidyzxTF5piNHTaPDLwhfzssZEfJxSQh4w6VzK",
  "key30": "4D3g5kCaDVS5G1BMcWo47MrxgqDPprkaPDYmRHJrcF41V9ho4CAPcP7eSnXfy8bFvy9B7vmvuGFox2LtHrd9wVCC",
  "key31": "3jgLRSC8XJvUEeqP5aSeZz2NRAvcN3bRPzA4aVahDGiXCZGHHkeKuqny5ebj5HGMux1Ns2hxDEbGnAQA9P8zcQVZ",
  "key32": "5jnP54SQJmDtyjJ5qjAao3NBo6NCtNGyHyY5GcRVyLDCWJrzTy5sEWMTohqvhobztqKzMrWA2VmTuFZDFi2XVPu9",
  "key33": "G7vRkEgBXnZ9NGGKoqyWPYzXdgxENDKd4KiV9yLNYf1qowkzPtmsQ4x1ufh6zxFZhCjDHW141k6RBeKUUd6unn4"
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
