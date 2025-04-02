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
    "2ZbVddEVgA34YsjGdAscEh89198E84CeHoPR7Nr6pDvHcArKLjFGT4wY2QUsnLZ2dMwQA6he2V1LvBAN2wHwPfJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4KGZoAC7gzmqA6v8L948XVBHcjKEpv1t58WhTJAnPeUeJsu6MdR8buVAG7UXsNDXcqdiXoyhZNZat5SdP54rof",
  "key1": "3ZYDr5i47QuKa7HG66c59aGqnhSukN9in2gePU5xA7WcYUawjB97uuzVayeX2eMjxSSRQmhriwaXLm4pAiz5DMrt",
  "key2": "2qRy9v7mDYFfpeXf7f8YFr8jdhK9MYzqH7Zrfkx23sQkTioYQSHwd4wcH4PJdA38GsNmfRhHPFvppRAkVDivBFMM",
  "key3": "33Eb9Bv1CGX4QX1tAsZpsNRZFCth4evy8C2Dj1srEnQLzXaNKiDFe1FvRR5WfJakdm5tiB4bKBYeQyPmxaxBTiDw",
  "key4": "3bm5DS6p2pZUUdDjuGHtHw2Pmwm1nxaxv7eJsPGaR42BpyPtA6gj896zbuzBqfLcNYwP2WGAQxpucSqc3cMqeZXS",
  "key5": "5XzT8bHm3AEBKbTpzWX6BYicTAJqEpwmDPyTx4JPDuoyzuqqo1JpQqvB3CFXxASFV4w5yHmAooXjdVXLXPdxNLKu",
  "key6": "3EkM26fbpnaLivfM2bFpWoeH7MzeTSzXifREdidCRanXP1a61b6ALvhPuxHHCeUo7yoCM9BfUUPzF1apdGzj3u3s",
  "key7": "2NSbrNxYAqs9sx8s8XYfFK7GqVUjk8JBt6DeeYEcyfnBmNR3Z8dg8fSfQNaZSkf3d6qU8k5vjV2CdSik4xMrTPud",
  "key8": "Thhbr4E3qdZrbUZFw93s9S3Hypmdmgair2wCedSRQwMWBq6Hh5HUhpLXnZ2MHpVGJqAPxeByUZbJWxvbMXFAYyJ",
  "key9": "2fCghHsnxitYbj1ohRyiNAEirSWj8K6LuRF8YEMuxsiCuvSWiWqFXWQU4kcqxH2vCvEXF3y7Z1qexYTqX5fdTH5a",
  "key10": "2nixWzjyJJC4sbSp4g8qLYTawsM6PzWQgVXe2JEc7ncJfBJBYD6zfhy1x8dWkWQweASPn8Adf21mGaZ5kfp1N16Y",
  "key11": "2zyoDeiT1MBgKLkiRFVMLeEH5rnrr5sY8kJPaArentgeb21HyH2phsp4cEGzzXsgpdAVua4QsEWwADpYMyz7wznF",
  "key12": "WkgK4Q75svXDz2QAJznUd1MeiKpXCN3jNfwMtaC9C6yPmxPAiAUVsbYjAiz1AH6pufTdaVwrvqBZ2L51J3FYo4h",
  "key13": "21DWAm6WtS8He4m88t1C4ZFLBySSC7Pz9q22VQnRvfup7ZqAGEDzJq54hysLVYWpdQ54hXFoghnJ9PcGGwW3synd",
  "key14": "3B5czkaTM2i3YNf9CLinANQsxwGK2nS9oijFAyz54EHXvfGFGFnCPJmSPdsfYRd9KkDYcNxZwDizkBBseAz2UChq",
  "key15": "3axzaZZm2ng9pJsU3em8HQ38dmhMxMLrkwhtvR7NgEehvnW5Jmrm4aZ9ueYmPHoiBrdWPTHzHwUxAgAXrVv6NLKA",
  "key16": "BxwoYD9zdM6smgCBGDhDGAK2pggyn3tFvaHw1Uh5aZCEfKtDRTYWFeohCCCFX4vFEdLmsouu9aptK9BaBb1dy8V",
  "key17": "41cxTGMsNHsoz2ack6KW6UtkScHBDnSeYZmesQfZDYtRQPuitBPvPskTu6yxoKYQADk4Qn5J8QRx2Mmu2i7M1cvA",
  "key18": "4A6Dj3aHEpkDW1CFbov7XXih1q2dFNZYJebNzKN5gxeYLBQaPFZqKtQHKvAvS1N2vEEuXgUSko5BjrSJBDHNPWWr",
  "key19": "4qFKmx4DjDUZNJ6ekr8uybcSzC3GWnmLdYi9NQEHg6PJHQv6Wu8hjFjyXH1gWv2xYPShhFFwzP1HxWDTRJ5chbxe",
  "key20": "3Fppc9d1mASwSBh27vaBvjnpEkJ6FLezCMfeCWpBgVaPoGqeYnChNQSvGD7gEWLrz3QdSXu47eYN7deHeLAvYR78",
  "key21": "3f5WpWoo19iys4756QiCwALUZdBkV7CfSYrmSEJ3CKrBzbx7kMTZeBfYPJq4sSSwCfQAvmU3gTX7rJt9djcRsQSk",
  "key22": "4y1GwXbfXnX4pwxmQXatZfpUs5kXYQtBbJbzcfV7Wa6qxfSg5DtrPy7aYAASsc3QfUTkAAU4rbvHWjYxe1UuYE7E",
  "key23": "zc1Fu3VQ6P8T29G2uGSYBkzWBUr6AWSiu3kjmjb3qcf9niqb8p1YMsCAdh2qjRJZMn4h2mcy6xE6XWo4WqUBk42",
  "key24": "5ZjigMYkzakqf8K8DQ7yPJW4yiLMTnziTAZ9bDD841frw5VcpucLGP1pgCHSXZn9KkWQavyWvBxMQgYwbnKWYKen",
  "key25": "2V17nX3fXxhRpodAJx686TAcq6szH8cbUixqcsoroCVxjtbNitUgw1ptR1urfDtGjmBpk6cuCCw2d1vzeARSF8WB",
  "key26": "5CVz2VuKPpxyw4Mum5r4WxCcbSYpr1QiUAQu3K2UBnXBmGxhYnWj83yQ6F6mAC9s7ruBMPKqeaYbhTqAK2gsGXvY",
  "key27": "btck9ieYevJEjnUJGAx5NMfMxKrZdGPV7F38pckr8EWWdVU3tKRX4PvFkJHCyed9YsPzYzTSbVYMcLtmE5b1kJp",
  "key28": "GvQu5DvWrxNLtqNBcamKNMAq6fRxEQGo3zNQ6etW1XdCzumNH9d37v2mSvYj2NPMoQiSBqFoTet55UBXxPVPBb3",
  "key29": "5zAvvAwrsG8dsA6MkMLErpHTHGpKPBdYGkKuo33WrzmWPZvPWq1nxTErmuCfbkz6qBNhrMCQDLcVsJ5VTiccRZD9",
  "key30": "Xr3EPrzXCiAs2K5vZxpGQJeRZfZZhaMX83UduqtkxXg5SRVUooBm74wJgC7ZTLbDwcW1UZ3CLb7yLS28qtSjzc6",
  "key31": "2ys2eGoVS7tMABCjJT6ufRxYdJozo6VSBY5vDQ3hWHbEC1GsKa7HyJh9AT1teiiPHGQEtVJLzp48e3hzPe5zeHj1",
  "key32": "31enQR4q6kFLYbwzG2rYFtiWhv1xHaQfwcepyPYXPxpRmMPVdd1zjYPbUh37jGL23nL4xPdghFU7shztL5mD9U7Y",
  "key33": "2fW4WHs3X4sngD2gvYjtnYvccSxkH1bpxGMDqHBDMqTusRkNmsivae5PMySisKzQJAqrLXpeant6MvqTLmhuh6e5"
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
