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
    "4cTLb2E6Tk8jQ1vbbfGKBxmYcFnHqck3o69nY1iYmdJ49Wu3w5ZP9sg7dVSQALV3FpuBntDcsbEaDMNJ36a7u7gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWvykMApanvDwxogbCxE9d5aMvyku7MT9SSLwjUJ8HVTikG4B3zPjuJXKPhp6xJm53qZZby2BtZeeV6o7qYsSvG",
  "key1": "5pF187LWw3NMWQt9xWxoZdBg2fs1Pw4eZMsSyV7RxUjC8NNXSheKjhPFy66YQzasgvFVorPgujVD3jMSnLokhdua",
  "key2": "5GAaVimwnj2M7PwjtJDXDRSNBm7sVdedUCvvgvQUipbbnKYRFxFnh1GChbGqhqn4hLG8NK95UTfZ7vLyiMPS24aj",
  "key3": "5DA5kW34e3V2SiDAgVQfZzWz6RL75Vj6tbXD964HbbGuUZzk1y7J6LvqpHun9FYNXMLGEL4rnMuHwp6SNkLNRU6J",
  "key4": "4un6nQnCw96mV5aLySHDSiajg4Pzo4i3e6Sz6CbMkJVqKWdabWPJj5fK6SJugoMnCNf9MjGBJv5gamHPjf6SP4Pt",
  "key5": "3Dmm1iaiiZJwiK4U5oFdFgCnnUJvafy3e9Wnt47KGP9DTuTX3ihmYUMtqNd1NuYxR6id435T85JHbEKW4udibTiQ",
  "key6": "yGzfBqgGerQgZ493Gy67P1PF7vqHkkkBb7mPXSGGzAovp8N1S9Njw5ABuMnvYkqdyuzGMzCAGjsGgAENiZVxCr9",
  "key7": "2TQSGiExudX3uKYv6iJ9FRnty65Skbv96LhkAg3Hntu3AWTE6SpNxARtAgS2xjYg99KTHbLQZRYq8CXLZwe8fKs5",
  "key8": "3kNwFdKh36GcrtdSYB9nLD55JV2Zu17aXj64BPbb1z8emkHdmbYsUnSHwW3rd4YYdiRt7mwYaYcwCedYr7KjdR5m",
  "key9": "5qX8wmZ7KdnNtpTEiZqi9YEggBjz8t4mgAyYiB8eAkbbfxe18jqa7fu7rqVKk5EeCQUShFXNBySoVhyhtg2j4vt6",
  "key10": "4jsQaXWqnrbo1uRKetbijAoePJfnhMjfcL3ZibAsZvYEz9mNTKbe7QoTmsZYEvZgXhmGwQYRAqNekaYRXUAbWNFc",
  "key11": "4reqdE2b57DwNAvdwoNnc86pv2Pb2pZTh4LuFoFaHwwAqW7qys6K4D3NyNqHUfwmv4jiyoKfG1kKacJxcXR1s4wK",
  "key12": "4LcELDAQgC251TwbLAHbnQ7aYWzaNjQyxS7v1yWqTDS8fJZMkG3XtYvvFBt91MefUHifBEALTo8JvVaZRFNurP3m",
  "key13": "4bBpXQJrfYXxGadoqF2r8ch6y6cLJzc7rJYcCrGPkwwaJ9zQfts7k9VbKWq8Sdta9aEC1BRr9XcdZhZMUz7tpaxD",
  "key14": "pvGGkAfqGayuiC47f2deGZevATPoUwMtPHprotUojVw1R5RnZgcspAwZrpJphG7r3VPXmM3431CwwijG4Edytcz",
  "key15": "5RYqW7NJ7yJCarx6qxMiBfQ5KRNvozzhSt2PqwTx7LyKgDAbTcNsYf37Qm7hMgtWM2MzkWZZ1Y4hTTHv6DTY8pEY",
  "key16": "4LN31PnRXqtbwyXbqkmAspunGV1A9JHUMSNVj8p5fYinu5PviDUXo12gPv5LcZUD2SLptVJfLChCshuAuEw6yPvQ",
  "key17": "W52k2bppEkAKMe4cLXEr5c7dLnhnjN3RkAdP8L7b6dZDqf5BLPs7wGu7mGJK1gby485JWskoqbJ3CBnw3b7Wpqh",
  "key18": "5dPuna1344fa84vw8LTMn2WNoCJ8d6BYGuwF87apquwWGhipQ4qvDaiQ8CEfPYeRMXWfVqZiHGVukhabqfFqtrEC",
  "key19": "4qDvHwt4dpCxUQyKWSpFesFki9oo2hjTuNv6YLzo3JZbyrgxgWb3eCFHVMmhXQ8rwtVicCY2QoMmApj7NaLasWM7",
  "key20": "2QrNqHdTTEGveRraz9awBsCyktTnMDf9XnuJwRyUAkS9yAZiDVWZ9j83FUoo7VqTMv5GpZkCFM7TadLWcGFcA3tk",
  "key21": "Cq5vkuxzmx2g6WafxJsYnuCwCozB7vF8U8E8Y75fZo7Jxrnnn6dWM1bQWtK7gQrPzJWNqdXdhQzERGgtBTSB8Tc",
  "key22": "65GdmepM266oCvw4CQQeckBuJWQjDHhezty85bk9kw14p5U8oLa2UZWvn3LKkZ97ZS4hBSP5EN6Pz2HfV9Eoabqa",
  "key23": "5yQ2aw3d5EGyHEYzqYpCex1CfbM7DFUnd84KTZVrFV92rZxUFnN8KYCHBaZwxXFgt4LFapBhqdGLHbBgNbBZgTqP",
  "key24": "3NDLeHN6aQ9hxRiPeqUwdiDKkMGRAZKxbELr2PaxfGh3JaeZ4HokyBWFxdvaSy4ZXF3FwVAg3Z3k9WHTWjaogeDh",
  "key25": "2sE5rntbbwVQ1f3un6CgYLJqhJvbfmeUJNApGxN6WaAAmNCvXHKoKDxQr5UCATkjAe23cVKDzHjVhxTzqJ32oSKV",
  "key26": "3ho372Mcw3hKjm8NhRpjnBCN5QLHFjfw9Fwvxiw2sNUutxeKfmTTnSAgoidoJCoYT5hqVcxBWMe2TonztL7ikiTM",
  "key27": "2KnybwQp7rZ8c9AkFxbpQGqsAcf7paH5JDasi91fwgEN2iYYor5UWkhugBSnLQL5hGEic3xR5LUVyrkJJzx8r95i",
  "key28": "2xyK4E8GMfAV91E8Cm7Dg8qpXzNYyCdqxdGNjHdHvPiFo298T1y8eMefL2CtDmaDtRCWZYZsUe7BtuoHrmGUc2XU",
  "key29": "225NUiE87dheBzWXiLJiF8UgcM3T87ub6ymeuiYTLFf76eiShg46xbtfnFyWJCkkQKEr1cHfJGDbbHeBKTozZSTA",
  "key30": "TyK4umXZmQM5VNQfD4RqPHGpVSu3ZAKXYLy7Rw9bQDo2GTYcBMEmcCfJfYZKmdhcmGuYMnS3N3XdLUhuBZgCZnA",
  "key31": "4KCFyqEvsh7ZSUbP16mdX5doKCHhfHrZYpHJrBNyXQUmGjhSueH6dsVdF7HuW6BYCYqRKZpg1GmzPWnmA8KQabDn"
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
