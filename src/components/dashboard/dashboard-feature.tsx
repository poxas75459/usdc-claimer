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
    "267VWeGKUUTrhpofCbcKDc4TeJMDePYSzMmmZVDasA7VJ5dKSN4jHpu83NnTjm6A3Jq99PDGxJ6w9vTyxJ8bmURq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eu3Cb5bS4kAj3a5boLN75E4YN2nAg7zR3nCRBqCCXv14gLkBHtsxaht9GWry1Miur5h4ZJH1cc8orqe1f9GBcWK",
  "key1": "4oSFQfGRNGBFGbdnXxG6Jjb2mqTLyzpmJqKViVesQTHzsibDaMwuENKBFgxgxLcXe9ThR5YvbEsUd7ivw2DhKz9F",
  "key2": "3L6Aa3QR9E213sGncRCs9sXXcYCcMXPbYaJRyLgnToroPuSCPQq9rtBCmFe5bNs2Y8JsVKthvySvcgZoLDMtzZa8",
  "key3": "5j6EMt8BawZuuXaHyKejAPX61PgUPvsQjcczcRpcptDrW6oUxjXfTMLxycPx1WCVXjnkavjnLxLSQJGEqNKSzNhF",
  "key4": "5oidgw7d5T61QfezZhhg1WApqqt7rBEa7PHK8EiHx98twBKPUZPfmiKVhctD6g5xBad6PSMZ1fKEwrnf2CByuUgD",
  "key5": "4Z2MHyhGMVZ7wTZPwRVeJexEZwGyjMeeJ3NeZPcf3nPMUWnBagcw3FN2TweTe2KcMSUCqDGTMAMotVLktYBTEpYk",
  "key6": "4njVxGzPe6pdsi3qhw3QpzCvgpbVKwBGwfcBaAu3aNobtRhrE4jBGuzpsBzrwcj4tV1VVYD2gSVoVvy2UKMwW8k3",
  "key7": "66kBEFLiTvxLJeTn1upY8M1KZserND4B731PTbKS6Qpet1BKZ5BjgBMeY2Zi5tM46SmLhMYn5fypjfu8KLryc9SJ",
  "key8": "3kZ8hQ2rZu7M4PpWg8jrmHrQDubTkXcoAzaZqBLYc1rgTHeDMJtdBQrzfdhKMFKfk6K4cSMnXBgBfcqKJXZAx1DK",
  "key9": "3mAEUx8Uf9yUR6FXGN2UUz7CnT9yCSFh12fKq47Cid42UusWHmp6Vt8eY1TNeyQ3vgEaSyqLWwP4k8eFDV4eWkUd",
  "key10": "5C2L3szR1QEWWxEwiEU5KgQDwfP9SEXmLbBEdGyLmqphiUGFCVCkzUXA5FMtKQNUGv315LSVgwAMUJKaok6jqAUv",
  "key11": "3gRWJzkzhQA2F4RBpC9y8f4sSdcZpEMZWQsHWC1TgVdbxJPfSqvXmtDkw1Mj7SwP4ojtMwohHCcXBtLetD9rrvUM",
  "key12": "5PXBmmYLBwCFMcYvcTFQH3tcoJm9hdTDcqVUm4PCiBGdENywy1D6c1K6uYxG3H8b2SJ6GZVGTPgjJekbyxKUEZ69",
  "key13": "zqCsAmNXwr57rXzqAwJmeLjrnFp2KAkXx6LrbTNEi5P5GGc8k1DRf6SsXVS8fJ1eSZzuEfMdxJBzcGRk9ux3xc6",
  "key14": "5Juwj1cmpfJ789yBpJ4HdaMnR453XnEkJixdGqrVw1fy2JF2bwVqdwJ8CjgCeqNVCNdM9EPcrKaqBM5bnLuZuhRC",
  "key15": "46cddz5asffeEf7ZsC8jJAaxeNRZX8LRDeXaifXp1WBZ9mzD2ywYjUjJmRnYQrriSMkRRtBVFGBqiD99GmVVD3Gt",
  "key16": "3G6aRZeBh6T3QzQg6any1HjVBRkSew1d3vXzRKBuuZcr8HJ8SBQXdAMXWRCYPittZf3DbUVdn9nyFpuStXhVm4QC",
  "key17": "3HEwbKY6fpi5VjuFyTj6JR4ViXY8NYH9UcKeyB85CNxf5DGhHdLAfCMzXyyo7b8KWb1iKmWyPZWLAVCEmq5eiTix",
  "key18": "3vNcQBrwB3vB6a2LG7L5YcQxa8TqzDvGQmSyakrG9kzCcFes1shRKP2DVeVVFVyeEWh3SwAJ3RazLmbrrWXY9ACV",
  "key19": "jpqkaQ5yzdm1UpmzaaqrZW7MW3NH9wrhT2KsVRpRmt3HNgdUUqhPEJ7iLbCbLYVeaiPwCcUjXjYsV5u2H5jf8T1",
  "key20": "6MijiK8Jvfgh6cSexpxfuh1kw3VpmPuiRQQcxCGHxK9kGwtJYEjUScXkbUx9AER4nfUYaMpkaA4kmxkm2xtaJac",
  "key21": "3dMyLUidpbyJusR7SUirnXoNaR36DrSpqZcppU6jvV4fKpLFmJBdANj9HcGuTbYvDUfR9nVCh2XgRKUnpRnbD5TE",
  "key22": "4v8VkdEZVe33mh7LfhSLpJNK7EaSbKQxf9dN3CFknPxnF13jcH1dkr7xE1yMspmB14XLSgtLwVHkEGRMiTmYAfjj",
  "key23": "4RPta9KaL3Qz2DAWLeZdwktv9YeTH2qjeA4mtG5ZhFkdQvEQAJVzqnE7UuiPa1bqTARrdAjhPupiwvnSy8nVMPNG",
  "key24": "3BYCLEytw2AJLaNWJhzLXFCy9JuRfJB5PbM3QJe3QnvQAw6hDBfrvtacTi5oFXdzZhhG4Qn92PQHESWcxj371CLn",
  "key25": "3k1HczNycg9wPw14tVpsjXYHskH3YAt77ANBhzgtuoi5e4SXmPRUPVMBR2HzWM55QSHsUXDyVYeuf7jmERcQSaKd",
  "key26": "62hcztgBconBiaaT3o8wZwxXehQSZMPkd7Lz4fZzRJGBaWCWEjCRCUURCotHMBS811m8CR27R5S7hFwpF3bnQC1Y",
  "key27": "2CLmFZ3opn9gCe9a1RyEUNR8CsKz2ys7jftfHm9m3WWbY1YNKwdL7JK9K1Jcgbu463eUW5mC7kEJji8bf2gS7NZG",
  "key28": "jevbyKUfDcNcUnZmhKjEkyDSUbczEqxC9gwcQmJhhdj4zy1MZ1cMjZE1y3bQKxFLUjyXu1nB6UvGneYwy37Yc8B",
  "key29": "4VFCaMqEisSoCRzrQQs5PVVvHdNYKUipMJfKDaDME5Jz3FuHqYjYgKr4WUvUsaxgNUpD1fbr5rQXn7PeW5C72j6R",
  "key30": "3R1BHHK3XLfaXkm7vRMRHQXDAfCMoV3cAwB5U23p5zE1WPEs2gvtPruhFYCy5PjkfbFR76ykT72kN8zvYAsTNhVk",
  "key31": "KKKjdcd5iWY3HzHbrhKsT2C8Ji936eoCs6ikWASoW149rTibC4bqQBhhSpK76T4sKTC4F8vNj6SLtR6bsuYspAu",
  "key32": "4JDTacKc522yX6DLZbgn79CJyVXKDRNE7VrMGjiJvuw1vCcDCgor1h1h9U1N7UfuF7NU18aC2wK3T6XrqyC7xr99",
  "key33": "3LTcS3yXtwJu12aszVnZbbiMhGUzhTbqipXZZ2JRBs3KD3AH8x2EQEEsrEMwF3avBJWaLKfnwc62My3kbnfresco",
  "key34": "2oMMUozsgHzoLqeUBTnRmvMA9ozH8mvviwiz3kBTgseEkmbbSUyFgWNYhevLj7JQWBDVZhsCB6uEZ32GrtbwBAxb",
  "key35": "45y6ddbXdRycV73J4FTDSWFqw5UdgyvqJiYZFkjkET4gDnrzpvD4fvJKQ7b2JsEJjTeDT1N5GNRbnXChJpqRoaqE",
  "key36": "5svEREyzAf8GnrCdGzKzHJ2uaoqTLzBLfuVYArGMRCWiRUxMyrJSSk47w2F7y6XNgG7QJx5u4DwpagATbQBgsdn3",
  "key37": "5kpd2z97MLgGf9ibbPdJPiFwgFoSGkeZVqajanWHbNFRDhXWMKS8Ug11Cnf9JGaLQCXoviURHiUaCdS64tJsFb3S",
  "key38": "5ZpjXMCRqehvwa3J1PXkHSkXJnqhETxwGWruDWsGeBxfTbby4MYG8GnsJLYUcMJMArTKozhEhfzBark98QtFUmNm",
  "key39": "LRefEd6MK9QW1ECx4X72a6CKfPaMqzSDY1jVkdqTuNM8FyNAMmAh2u9JJD7CzS74srnjA3D74GuoB6bdjWbAPzP",
  "key40": "2wL7qEe8U8kUuJCyWqokgU3ahGkN3qSGv4Lw62WgJRLjCyZdZQhPt9EWE9Yf2wYonSbnpGruSyzCqTvdBQGNYWEL",
  "key41": "fHw3ujQphXx63XKvZM6VVewRWNM5GBDKRQytNDipvXCeV1VwcV3TcJGL2Sw1MTmbkeMGModgvYSJ2P5tQUPMaWd",
  "key42": "2Uq7YMuwMbFFpPFNpcqLVwxrR9738oGTqo7qerD2N6j3i2CqyAbzUHprjHSchS73EJ2jMXepg3JpaFvDtutuS2SM"
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
