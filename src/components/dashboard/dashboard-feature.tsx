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
    "4iA5DG5deaWuAJXFtm3ZffH1FqAuBdh8je8XjEETxy8nSJvnZnkuUTmrwkosGjxTsr5L9KZ2mx4jBGSYMCkVxL3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmiTXAkRQihikoJwUQVE5ZSXESjjiQNziEeJfp3rRdiMGq18U6zn83yoMeF4oVqerT7A5BEap86UfoehAwFEFZ8",
  "key1": "3us1wKMvWauozyN6AXu9GQVeo3iPzJodDyjGdVkhRyDWJDsNf4RnwgFmVPrSEmLh2qCRLeqRunoJU3h8okvbYbGd",
  "key2": "4bgZA76GunYiqtYDJ5U2RZNmmbo84SkpnU7gbnnDHmFBTPS44PjxRqQzCBevDhvQkFoaDgWeZa5DooQG6tjDzy3u",
  "key3": "4JnKiCNVMzgRzJWXc5sPcS4FPfq2YaFuXmw4PcZdf88KNKuxRBRnHzCpkZteReCob6ydsRLsKBos6Pqz7gBmcYGr",
  "key4": "3ec9BgkJ2YrSQS1yBcgk7YB125RbLoUqxfh7JJ9SLcnQ7VCwp9Jf3kw7RTeT9Wp3ckkUJjjvrGtGuQLKZGPZFgE",
  "key5": "dS95aCbqzfKXyZBxsihntVTgDh3oEm9J4nguqjNJRnGMirQmxc2HUTZ7n65R86hdk48eRyeEGgMkcAtqMKh8TnP",
  "key6": "37M7zTfQWjd1V2pLgT6kAk5K1yeZBdvocnQa3ioR1YZBRaYN89CMuPUJgWUX1G1BDsh8f46bfjWcQoU8dV4gY1wT",
  "key7": "27kCxAPnQCvweCgZGxg2uG5ky6fBKoFPRWNgDchxenANdshJwPpDWdrZPbCRn245ycNCpsBJVUMGXGMLq44Cvh45",
  "key8": "3JUo5h3g1iBnLJAy7qCZhDFybSiwHtQP3cV5xgdM5FDgK1xutHtXJyAFAeybGRHDumQjxaAD896S29PQ3gTcpKVQ",
  "key9": "5ocS3pLALmKkAr5ginWVBNQYDQ3N2WXer8WwbrJqysmdSH9xHQda93aRn9QeXnq6K3E8NSJsBcvThc7fn5GBaEY6",
  "key10": "2XTUjXPUBtpfjneGGLw5wng9yp3RgetSAwKeZeCF1Fb8n5y6bNqmpB9swK7DixFevmLhyukHyXWSMp5kzeWqXkhb",
  "key11": "41hbCf33MhyZmfWXm62Ciqimo1FDoJDiHdtxsUWumMEnUVcixn1wf6GN1Mz3oMTnN3PTCmM2jZqcF7V1uQXbrnuk",
  "key12": "54FNygKAbWxKgu6zBsq6ya83PmL8Xh8z74buXMf3MtFTT5wdT4t39GUnQiBVRTCJ6vY18b1xLvfE8QCjCawTQmQf",
  "key13": "Qam2WMwoWEGZrS3qANjUUbqShv9hAVWqeffiRT1Fiacopdb3qEymnuN2KsmgxYHM1jRfjn9kzyQhym4mWkBJXMF",
  "key14": "5DJu8K3WxGBmFVZ9ubXrMRzcS7CMc5G7RyPfdzsbKa3s9B4ixU7e9Tva79QaW4k6JGfVs2AE7GSd93WP5Fgo1DoW",
  "key15": "5XzkmQ3rpTp4brqSKva98LvZUPga9QsJQJZuaNKD6Q3HrQb9raEKwkniY1QFcCUQvYAfzxfXChwvuS38JwjgJn3U",
  "key16": "48o8LL5XFcdr1XBV4ANTXpHMSN4urJyBbQk7ViWxZga9dn7dU8w9EtpfbirSn3vcMj7VoYMvqRQktzvgfXRNEzHL",
  "key17": "2wh6zzMk3yfer9mACRGCnV3vzUAJZSYyUEyTgC1WAQfC6EK6izPTYQw1sDrfSKdNHrreE9uYgkqnW6VyAcS5gjkX",
  "key18": "3a9mnaCEx2Rbo1csChnvWeGGpW3wYowmV5v2ymvr7Y7EC2YL5PxJRBEqUeUf43whxYakrpRWw661FerrbnwdqP6",
  "key19": "26EoVnj6yLBbRXwWmeTxffAUrShDMxdKE7PUypEbLq7XeuyjqF4u4MJDPXe3sGHGLVr6nVAkoCaLceCCvkj5uPjs",
  "key20": "5oLVBjANQH3cxtGVP6Y27EMgsjS2VriDPsRksrEWRpWHeaX5tpM3Tyizd79jXrtsaxvjZgHppnfhhZJHhp7GfPvH",
  "key21": "656pWNREmPXFDqTvMb5dze7CnTJRM5WYoKpnWHksyJrqLYkL2CbmHpGBvgMGp4b47ovQHMFSpnuMSCtc14u6VS1d",
  "key22": "5Eei4iuyn8kVSfMiRj7hH9AqD9Zxoju1VjkXDN2GRo3fgCh4zADRtrk4r7K8URNJPRKwoY2TPxcswh4AgsJhn9UJ",
  "key23": "44Jchb2P2ELVzujs7N5X5vGwPjkcMXBVRebNFzkkpiq64E8zhfxDtUnhbfemKGuDz7TeVEmTgSuCE1pefVP2EmtH",
  "key24": "mRys9xpkPgBYuhG7tz7cdJVgD5FP4aMuq82UyVMxjnfAJT6zqxzCR1h66tEMMyHm3hiKe5mhHy8aythgzRvzmsy",
  "key25": "4m3u4HVaLXzyWPhWVDfHqj7fRdBkgTqs2S4tvKzjqG7AFXsNYG4xzXgJbgfjojXCckSkfC6HmMjPS6AhsfpSVvqX",
  "key26": "4qaFa61rLzpi2HR6aMFsFDJUwxQo5psCERTAjd2rtR3c7odvzTRkuHMpVPARa74HyLtnt1MG6L6f9XhP8coBibyV",
  "key27": "2QutYxa7tQLBry6xxsWFL7Lr6WssWonwxitznU3xYnwurnJYvhY7QSpqHNxoY1bQ2x9HgHSu3B8CCV47GNSa3Rn2",
  "key28": "2rKX7YFkNLsYNkyxMe1PNr9dvRYmTWX7yLHNswM22so24uMH85zD7uYTWr7wQbXn7sK5B7At7MXvqa4vHJ5crqPg",
  "key29": "2cpj1VXs18MFaY8gDJkT97DAn81zjBBvP2HfUwd6gZFm2DStLa3USHkdM62KXJhkGwJXXK6c4HGLFup1ucJgnfnj",
  "key30": "676mEHD6VHHdMzxWHosouqHj1sCe6EWwsNwpxHHHGP3fqbGV4Puep6BNdYgVj5w1U8nTRLzyB1NkR78s7WqvZFi5"
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
