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
    "4jQw517JkEPRfNThcaQFxVU1rsXGeEA4ptDPjcXBfxCJhMQ9RCgzNqJ2UgqNFQWcjKszeJcrJ8aE7s5drBau3QgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4UxNL5wFQ6tNpMtC2BfaRWTgKocrNMkuf8fCMsLqbv8s1oZ4fPp8CPfqvTpbveyk8ccMDFSpdVzP34HNCLVC4Z",
  "key1": "54te1qtz9SJ646ExfSacmag1CHzQ5WX7CmfpmRcy5Yq8RwaF4bZbG4WZWxkaepJ6ZDnduMF3K5WWeXS15ZW2DFwY",
  "key2": "3kU6ypDvnnjmHfUhqp5tEXdCh5mwEJgkk5dVaESb3vr1xq5gM2TyyyBdYEYp9ZNhsmx9NDqycuHscu3pAtYLmSZ7",
  "key3": "5Dqp2cfuPK32PganPJDyt88cSRDeBws46gyxVQfPZaCGhFWoHRCyAWfBACw9YT6XyHHbSQFMyEPa9HpFdDdHSGX8",
  "key4": "3rKVCtiE2YKPkGW22ctf6YAvt2tZob513hKm9j19M51mUyUHiYkBC373Gq7xySqc6L3LemM2jfVjUR6mrxEyooh6",
  "key5": "nSG3Hp4FNr6SYR7an6izsCi3JSfcHeennKDCtPd8YVvY1p2AoRbGsDRdt5w91jyGLDtLKhXPJMQatFHevyApmkD",
  "key6": "3LL5Pd3A2DdRtzuAvMJQh2CAZXUcz1n7e6rxBXupq2Fpbxdz1yaRTBdvKMAUHtYRehPq6QNPzDz6WBNCRpdE4V3K",
  "key7": "2QwPxP7oLuP1S8mxktdaqNSMUXrsS1tAL5wCci94qirzVsqtZSj9aLK8uqBB6Dscou9McNygkF6R1LdntfUAmYdi",
  "key8": "1bnrGBAEozSEjrwSMVmwZR3XpRoXfaeTfhaJgsm6cqTuW2Er37xr5bwGKaPxMVXZp9iUXVBVc6ZaVTmsdsYfB72",
  "key9": "3ZjwAFzCmH4cX8H1WAYe2XfKwpC5jbd6GsEo6NiybaVX9GKn5utupNsSEimdWMb44XfLwMb3KFbxMKWcmKTR4d1p",
  "key10": "FJt3jL9Xim5TMkJRKeg1g48Pptzz1bzVGM8imhoQC5pG8g3ucusuVEde364W4wvRSXCm3hfjeAegUbaN9VVQR5J",
  "key11": "KxHKDCNsWx48BPJsNmykg9c6my9yVe3jPmVSthvWjX7RE61iwt4JLUQBHpdL2Rqis8Wz7hRPNcvUUfK7SCu8zes",
  "key12": "2ZGfoMamouoDn9NwoJJihcUfXzwcLoLwXBPY6LgPUM9xJpFGkgd8bDE9jm2BVFEG48JxHKLASg2fKUXoZHM5QDG2",
  "key13": "2fGvVxRv4ty2iAYbwWUHVWRr36qNBpHJfhYiS46XFJGNznUkaUCxhjKfgCq2VW15RfUP9eT3TctPk2AsdqBPSQ4G",
  "key14": "38PPb1QsWGDKawRzTaWBVBKkS321fRXQxSfFxeKkvkWSzu2DC8TYUBPXAFmXVwAcYpUckFxNstQhrDrJQcXJ4Wkh",
  "key15": "4yCh6WLLqoBkKWRubVjo8hytouyEUTNEvjhGWt6MPz47DQPF4c6ejdcGB9ijZLL96rwZSDrDVYyRTQq6KQYDykPf",
  "key16": "4NJ47UdteHnxvEejfEx6mRSq3xrZpmADXwx1CrivNYcxJoB4SJX3R54bFsD1u2E7k39JSwxWNXPDuiS3jzt5KfEj",
  "key17": "3LpDwd2BSLAUNy5eRNh4CBaCE53dd59HeMybeFMs2usQoMD7ZJxqQiH4r2MBNUnvthySsxibnxJHWtU5uftdR8Fb",
  "key18": "3D9A3LDL6yKheCiAMy2R7gbA5M9Nh1yep5xggcRh5iw2f5kKyQwcXzydswvxg27feSs9qTa7uat3bqfo9Ftdcnz1",
  "key19": "3eC6i1hceBfP8JH9C7i8yHfU1pe9HEtqivai8BXLtpTV5QdXhNGFgbN5DU3PJ3P3UqKvh6G9uYzZJyhDnPe69MLw",
  "key20": "2dLC9RHgiZ9JTiiT8r7rj5rEPzUaRCjsNYjCGbfJdr2Rq8cVCKKyJnDXRwScfLcfroecZpPJp1VtgVMy2jqvveML",
  "key21": "5WuMG3Lxr6zdeRKFtDSUCJ1WtjfHU755bQRypS6JgmNQ3EbPaFvfmiNg3nrDVs6wYmmLEfUqvCsBoqNRTBKBy89a",
  "key22": "5EN9cEWdg8sUQ1n4vtc9yd43dZ6bofTNBo86wHPiCscdEXfvdW2J71dXTdimUvDSzA7CnFjz6ikczJQomTNSjr5c",
  "key23": "5t8NtNpBEYM7Nkg61x3DiNZo9nc7cdBRHHg2Y51WgU1sHJeoc1LzRSxJtoaoEvdkCbbxXVNzAZQNQbUv6rcTi3Zo",
  "key24": "5NfwVPEoFMreWta1zdAJtLQPWywhSoGZbBhk2CWVo9YjYgRfGXeLCbn1V2JiW2x9TXBE8hTGNAbMT5W4BHfAWXE8",
  "key25": "5ntduQKQHvdMyHfE17HUrjdj1suWmu2f5YmLLcJj28PSdiuvQVD94wuE2h2JnSrWb8K2mF9fRHnanSJjiYHdJMgX",
  "key26": "X3Mhz6GsSmjvZz1SDYvYjWrvc5fQfdzwXAG8sRuyFoyQBnW714nAd4yvUC1x3B6HdZmzCuJxWxbp2ebhMYY9nb1",
  "key27": "4tEctBqFW8cDMb48fUTTyDe1z9qpFDPbgFFY8FUxCRXPpjf9LeQdUa4hMgatAyS9sCnq9qDKNJDV1i4eKrwP1gdK",
  "key28": "5ytnn15MrG6k3MHKdgUGfo8eEKriFJYQvp76yapL2zJcuc3gQeeH3zyfewLvWe1ecxtJELxaAquftJfJvX61dvv7",
  "key29": "UNJXxisyfCjVbHB17vhaTdqJjs7QaGSZbEkGp52xzqTsT8N5kTSazkZ1mahzQfMqcvCUs67LMor2fiMA8j71QA1",
  "key30": "58J8nwwHQQxgGpbpHs4ryV3pbKS9AADEAFEcLBwUVtqnntLnqqFMdCYs1LFEdF9kVZBy5JmQETTg6e3PHaM6G1zH",
  "key31": "5EQePVz3NsQUkTWaB7z9aknEs4Dh7YDokWPcSF95oDBKdag7XL4EYBJyoapng4qeJL1gefBeKpHXwucXb4Kdc9xi",
  "key32": "4g75KPxJCj6gK8pkN6D3UPnenjpgj91SzY9bAXs5UcMqYZnPDawe4QTGfYXLbnExHZQagzjab9PZtdC2WjKyNPFw",
  "key33": "23QRv1k2foam93ApoMWwN1w2vZVwAXrHBBQdTVroqE8YTrFo2dnC5e2uLMkzUyQYw1bqKBhuaCxHeBbVKGC4mAJ3",
  "key34": "NFe3Bk4ZzQDt3jnUUjXWzQvQFQCUjpGmQxQCvYUDNBwnkpYojtC4EKhDVSYX6MNnFfidiajz8VifBEEqe6tVmNw",
  "key35": "4EkSbMN9tyQeZ7mzZ1XKbPiYXrV16aGkB9RvwJZFxnTDonQi4caA2AxYHhap1fanZ7NNKnWeeGpYrqwBuY3pka5u",
  "key36": "2GTsgSSWiNK7k6nX1vF6iURHG8uf4wtZgzRx6aFDDpNtWTRNwXNxt1NzkZbYiHNMG4k5MYaQZkztPUncJkwVTRFc",
  "key37": "5jqQghocRxbuEpcDWcbMy2fapbtnX6GA9bHzy4SYc6fo8EeYFGwC4segnTax2FYBNcyCUwV5gX6bBvcgMctoDrLZ",
  "key38": "4LbQ8YoaLfHLDxBpea5cvn9oATwosWEXgMUWTVUBE6u4abV3YdPMJ9ywLvd8HQ7qg22Xb35rLNDKEvUDacSKQN64",
  "key39": "49UNfgsyAbqwyUXo4ww8wj8zhfSM1JCFyW6NexKzVyYReNdhBS5VX8SmTFEsXJQgNHWFvgKd6hJXyJg1gJU5uUx4",
  "key40": "4SF7JfY132Q7mDzYRbD9hPXzhNFUH8iLLJCS9M5HKYrzQuUqoxh19KXM3Hz8L9zeXAvcooX8LFnhSCzsWXXJarLQ",
  "key41": "27rV5h27hdq9UqbWdFHyzMTuSv81V3Lb8sLvQrWEqXnr1ZzMYAdvTYmJZX5Nn7tiY8FSsDxjXNQ4fdd74rDkTQy3",
  "key42": "54A9QEMR74xCFi5QEbVVVd8kGMjvcLfjSLCzH5peFiKKPUy58eRTCt9QgTk3Fu93nRU8kkcTNucaLvseHLMk6Px1",
  "key43": "kkVPESHkZ8tJ2jVcfMJw7u2wJXTe2N1K9zHwiRzg8pR7wDTLMSPEHrrYpuTb52k3cBjLmhSPVrwhqXuyMpsACKR",
  "key44": "9kKR3MERpGbgXp6ouhMwrq5tn1MhpYt56dx1Fm5niVo7Y4ZWVgZPbcv117Srwh6c2g5fP8mgCXnqzCtBNrqgZLZ",
  "key45": "P4gQNj4EnUmrvPeg21xFTyYSG8mUV81qjjuwGFjFD58dQh1ncymeJbHWYdHZCNeenyaKHxzKtNhvHCTFGoCxFrn",
  "key46": "2ryQSMjPhJtcVnFdnQTa2RFvHcz7nWajYnP7uKu1h1skH7t9Rx6iopwA6aqDLe7wRw6tL5Mrpsa3q4DrzbJdKEDb",
  "key47": "24zzaUENinmNmqNXcXk9XKbGYgGPrWANnj9S5EMTKc1hNxbHGAye3dpoYSF5zMwT73n3jeSvxS6qAgezvMx1Z6jQ",
  "key48": "2ms9YbqYgTQJG768fBvEWeUva6xkgMr9bJSJyEhmcxnoFERcRHmxcVHLgZeUL2F4DiFHbHGyrEHVzRQtSqoM5eb2"
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
