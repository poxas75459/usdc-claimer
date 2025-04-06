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
    "64xPoJjpbkPhh8QRiH3FMDRg1ZJksG81A6j8VdogzcqggvynE2eBxPimxq13LMgkMexHXWatzUeuRNNFFPMWqBvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMFuAbYvpf6N4mtkHQ2SHwQn7U8GnWWzQ5SBskAS7MkjFLzoUFj77b5jHHF1U42UxK41mwLyibbaFfgVzqhLdhS",
  "key1": "g2Aore5dJkS7pkKusnUBoMPoNcKkwR2VAnV5dvYzMaRGRgQosRUHTC64xYH259tA9YyKDTLfgJRvN5PVF9kvjsM",
  "key2": "4G8gFqYKx8nD6sCv71oyB2QTA9M7QgyP7NZZNHwtFUhrpKDaszryBzrwSKPnPWVH7iSfUZZarPVX7gYoA9g6nEsh",
  "key3": "4SqJovoSADR5xeBTYsqjWkxkrotGcnbyjzhJw51wgDfsz1yg7FAyW2RXaytjKtRU4PU4hdTXKaoBHXH6PuVrRkFD",
  "key4": "5xaN1Ug37SoV2dQio6ZEAtobmP4mqNALH2GuVDGuWePAtB3ZjjRNHrRk21KyvmwGdp9Ytv8Vt8gWsPrEXaQGacc4",
  "key5": "3c1zbSVUoVfaaxcU5zaHrdwPBBcbzNVCDMBBJ3erXu9mqRPAEgBifRMoYmYY7QnY4mfGRRiBew2PhC3djKNKR88D",
  "key6": "3DJoy6ciSVpcvbKa8c2srJLauGDBGFpsbAvcUdbVFJUa7k1eWwjvYHHJTDUQFC5NSnQCiCM55bHzQzo92Hd7xXJX",
  "key7": "3YUQqg667sEhFurMFuhRQPK5zEyEWhkKYTGbDfTwy1d4jk8dRnjCtHFF4Eifyiu3u5jA8evPmdVRTpKKdzFHcqRm",
  "key8": "5vZGQtpXQnfcUqAJH68n2iR5XjYC12CzAB5rwS67xYNXnXcQ69mgo9eKP9692AxRsKtoivJyRrcjPrBpemyNMxTB",
  "key9": "2Mieokkb6joG8hrq5j2eTythCrVXr3jYkVk6oYoEdEXPmphEYJpPrrn1a7D6VA2xhgNBoygXjNpnWXtJWVvuQG16",
  "key10": "s58MeBKsjf9apKoQEjbu9yEvmvAXYtNW6G7pix4iSSMNoLLmvCAUwYLHuBYtvNLk4DL2Lw4Ho9upn3y5uwUpHXe",
  "key11": "58s6Ss7qvzWmnXqJcMG7vHrWvRPasjpm3P5UrgADpotxBc1KPCTcDfTw839LvUYXTQ7pL2bD6taaX43dxjZTSPYS",
  "key12": "vMtZdzfD1V3xBqfVaDzEavS5jfZnb2i2Ze1sEecYhq9Lvq9NSzWprRSTk5kvaJfouvCP8h5k9nEuRsRHdx8mUY3",
  "key13": "3UiPbMhpwyZfj1D6CNf3GjnLEncPybHsrjkpKXrEaPAeEGDWxjnUzYKJtFG6cmZqn9FwmWaUc3mACvVuXyiv8VcS",
  "key14": "87HuNSaSib1X3qwhhz1tRVN4hnUGQniZfukZKVsf2FFhBZsDUJSM7bPs7PT9zWvYH42Ziff5MUq8GVxaGCnKMwe",
  "key15": "qVJd45YfT7HJgPPGyaWfM6d5VHfdpNtDYhdGWGTrdRbGBwP6jJktRrxpYEsiraL6r1tJBAUCs9C5QPTLhMfeKT8",
  "key16": "X8wPAzC6yrz8ZzjGGRLhJtMiuYYbpvFAefvcabbqHKgYfoYbWFMjzWvRTHFy6b4X614qykKs9kGyZ7MVG9A38zc",
  "key17": "5iDeYiJfJfE4yvNfSVskbgGzB7rJv9Axkzm7LxuruunXN185Jjw5Rz7k1G7q8NRMVm9tEVUquZQUrRWQ9Dk8WAGk",
  "key18": "2YJ3U3Zs5VYwBLoBKaLgpzQk3pAuxKoDyheYTAxdX6A2ws2XDqoMgjFLKprb3eyvBQyPGfj3hgQaHQkZmRmjSz4N",
  "key19": "XKfFxsbTpqno8ims9ZtUqJUT5cW8FQaMMwvw4LEr7uYvHFrLjPPpDJ6J3xDQsBRjp4AueeYfhRyfUMA53vYBHdv",
  "key20": "48U1tpwQ2VzGfJbihRbRtn1Nuivd7EdJmUhj9fhJYn2GMyrdmoNsLyseszAxGjoX1uNpi5Mc42vS3FS5jrK45dh5",
  "key21": "5WfgirBvsLxi9KLgd5xWNbnk249Ri43wLeDJxW1jAS2xazLQ8G5GxZPwMEWFRQSyJVaVqfCgjNuVfEXdv3nWC4Cv",
  "key22": "5rJkU1LgXsbkKoMYnPURu1snksLQtjciZNVdbNETPAtELF5cF9FvxxAd9v4ti19Zm5TR27N6Dxb7VFDBqe18fkNS",
  "key23": "3LbmVvqitvQwzXmhwYUpmwGgWqr9q3VXcJLDhyaUK8zXmhdHcHLvy1HJfeVMvVK5W6mxT7tDcg79Uk9Lv4M7H5WN",
  "key24": "2FkzKghUoWgCBMgfCUsiNuYiCoPG7yo2G4xcZ4Gn3Yqaavz4HS8vHmdkcDx689Q7zJkLRsJAWLsqTaDHeHWS5xQZ",
  "key25": "b8FniUi3QdD2TiAV5U6Q9mdPjZg5nbpAgUkvAYGFaCr8UZVm6aQPkefx7p8Ze9XZa6YGFccqN7epsAVcrvUshH9",
  "key26": "3AFXdinJDH3FMz59aspi4LPfE9oUzET1tSznFEUcqmSYUQYVPCaxDxhAb5qcviiyxn9zD1DPugJwaMGQyoTWx5XJ",
  "key27": "2w1Pj7Ex7eKW7hRCUTSLWoDL83ePPdiEaoo1Mx1pkRjXweWSkpa64NXz7KdZ74nLsuZT81rV9uKeP8hE2DWaXB28",
  "key28": "4GnL9FELpZs1GchzSR2XBmnp1DPqgKVkiPLKwAWe3Dfr9gh4PTQB7Hqrvpb1k3JTFbM5tjtEVSFz1EuYvXGzgvew",
  "key29": "Uz822FE4rdLoMeCSV9BZfy5wG4yoCGpMvvro2RpLGyFXJjo72udqDcwGp2a2P8KJpyxHaCv59mvdYdGznu4Wdpq"
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
