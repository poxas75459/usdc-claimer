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
    "53SZrs8uQtcsKWJEbcogcDsW1HfTqvkKyUBsoVDCXq8uZWVY9DRFW7ZjWUyvbog9Avkuf5rLhwk6DD72ajYm9kkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33tc842JZSkYT42CMC5BmSbpA6idpUaMFqNbWyv3nWujmCWHuLEUVdmpm3bEPvENxVUR5MaSJpucSQa3Q9mRgX32",
  "key1": "4XSjjEMikZW8KdE4vRLFSeTPfQ9n3b5s9DzkR5cvbDeZxcwBU6C8ewV7uY69BQAiinGxvA6dnPvGS4gScBo5ZoiW",
  "key2": "3t1hofXiLTMzP7GNwT2NHSXeYJgLcQe6PT6AYhj5CJEDqms6dLASwogkcPp3ew3us16MSfaqDyRJudUVCWmfLA7o",
  "key3": "3UgjH9AkKxLtDfYWt7wEcY5h1WL1MuyLvb6SpcZ8jNoTpEVLJ6JSN2kUKaMhMq4krpRKg8jwcjmrCSGjnFDjf8AL",
  "key4": "4jmjSDMvstmMFnoYqkXTDTJ5CKg4wa49Y3syzxWii16MbQMLxLLx56tqqu8murxTkYBegPnkKdXkEsYH7jNaSrVa",
  "key5": "4BhVZ36wwhCRHMNMKWSx88Ct9zD8CWKpmeZ5b3EaJUQCNmYifPdnFsUXnfjeHpDEQMshrQjK9V5s1xkGSnXm7nGi",
  "key6": "5wB8Tuvzip6gdbVCdRrvvYhC1j4TZpKzHojPLzHZYN651pw9uxQLQcSxS2bkpJVhLVuaxNzfqFZL7ALGzciY5qtt",
  "key7": "2RhvgV5XNaWgo4vGmG6ppLrtbs8r75unj7duoShQ86UnzF4rDZQRkaif5nvhL7oEeX9tzUKioT1eQL1ekTKuR6gY",
  "key8": "TmvpJVpaDvwYRGUnztSAAkFuUXCuRFUakA7XYzgBDPu2J4DkgU3s8Nka8Gjphf56jQzqQesbXah4wfKoDFPsEDC",
  "key9": "2kr4Dfz4QLUscpm6Nr7k4UuTM834fBKfbcTwcfHEzXevAceCKhCjJiLc8yFXxo7x4cYNg3ZfEoR7H3ComJE1k5L8",
  "key10": "5Y18b6hLe1BV1XaQUo68ak6GxJEoc6sRjeviAqHR8x6VWkiTVvGfsDNrM6QsymGWP5Tp2hXjKiKjn2VdBEeDqsq4",
  "key11": "3ge9HtZPNrjTw3XCQVSwxd6pXJKZspSBhHAyxhiU4tq5sudHkcYH1CGgtYAu7pYLKn99LAXGjVq2SQFfs8KUiSin",
  "key12": "4cpa8XfSfx1NEz3QaaQ2FCEXp8B8axEKgTpymUrAfAX76sDuyPBqnsW6JZtYH7dFxTNpo1SD3xF8aPGYQAoRKhN7",
  "key13": "3RZjzvX6LdUHBjccSbj7TqqRhzJHGimNzG3aPhLZLwt5sS6RHFBD92tmZRkB4YG3bXpqowAWD2gEBr6Zxb1swAm4",
  "key14": "3toRSVUQDdcVth7tJAcZfPWHr67vcZsB8j8HEF7HJG7L8ir1FBHoPgqTceMgno6ghsAbF5Fn5tGifbguX2x8Vjw9",
  "key15": "5jstGmqDPVvMnbmrGV9UcJaoUXrN3ED3BuC5QLsGgwvB9UpRar5tTQRVMmb1WkV8C9V9H64HFCNfEkRse8pErK6m",
  "key16": "299fQS9EJJ3u93PxRLn8yRWQ3GHtmUGNauPc1j1vwh3jFFtSTqDNbdCLhFoTj3w3JzagyKrydovcDQkdGcge3ytB",
  "key17": "5bwymugYdwuXxoEAn7SQncSvzmQHmQb13bXitDmvtfeLeih93qty8rExTaqVApyYPXM1jRD9zb2Zcg6RvUATmCLd",
  "key18": "4geHKw6MaAS9FbYqWQqGTecxKiJA4wPNG7tM1Ub36cKghjxe49yRUcWP8DmseZA3PUeAo8wgSGb2qATbAsFo6CFH",
  "key19": "2Uy4LPC76xp2tEyuvRiYCjZdKiqkn7LeHDn9QQssuUr1BhnKpf2YhzfssJpRcjzTXm1LAxY2KdiH6ZEbonhcmZMj",
  "key20": "5hTEuUN6ebxkK9ZCv2AJPTj4xFkgkRACJDmvoXr5hu4EFDuBQiHDb4vjCGHEMdzMthfVFRoLNN7UNbC756e3rpEP",
  "key21": "5aqTMkiEyv9UYN56LbEbUTxoS7EhDSq4GmTHCoKMXxGtr7UJMp3dGaN2dYLyNtwT65LPzhVyigVAcxYHPFGtxu51",
  "key22": "5hP7pxcvLPFkDCxEyp4QTRWu8KbeM4n1QJ5BznUNRvRKyRGMkqRSeYcpHnBMdFmh1yMuZoZJPZoicLhJGH45zJQT",
  "key23": "7qPVeybqtEDsxS6NR69rBZ48cFYnuKVbtt3RtrZStDe8L9WYD4yWN6SA3aSieAXdAuQDmNoTW9dyjGZ7gGzpyZd",
  "key24": "67JTKCGyNP3W9XExurikdMKZGjrZTP3rYvRq78qDu3fzgqyxT8iRbprLnzn9DgACtpfF2AxAMcm1k6ZkMCqtK83Q",
  "key25": "4VTrqvV12xonaUSKaw4hCga29oGVScyDhUzV1nmbWdDFtUDqxqR9Ys3XwbaCXVngNdNr6EvGWRSAuQWTrXn3MV2U",
  "key26": "62nKpHWyP7LyCwdfTWJUtVgq4GeGSXsLGw3JL8dJhR3kbdQUZKzMPmE4EJgUs25viTasNYhCxF6mfzpJ3XZi4icD",
  "key27": "58HArqcTmcZXWDqTrGWnUNoYE5cESRdHbEbvPyTV933z1oTL7Hsdc46Wyr6HeCo34Q4wm6ZEFWFYGghmPpwmjJ4Z",
  "key28": "3pdRJufWb34SXJoM48vFA5Cd5yYUV1KHiZhQxHfCauXAyrSEdLUQ9ATotYvgecmAeWyMFu58yJFDYUrnThVRJKBg",
  "key29": "NvusHRnpasNtbvn6qs5VcTHn9mxXyag61SBuofRmY9XSd8G2qkcPoQpjuAC57MSYQheqYsWavth3c4mBNnNfdqH",
  "key30": "4szpLMaMKU1BD5py8Rkok2qQw6N7JsK3PRhZw7kVRoczAER4211qRn4PxmuGx95akN61DQkQHchx4wkQ5ELuQLFP",
  "key31": "2AH1y2SrugQBKmH3fNcNCn2M9wBPgfqhceHhgZc7mkJZM9Xn1mKiLWEC6mX3vHoFEMFhmHhrN7zkqD9yeLXr3hxV",
  "key32": "31bd7ZfxDiaWzhyJ7paqEVRQzMh11PVy8NMidGVsfCwmqS78zRhndYUxnMjGRdSj4CozZr9Kjm8qk5RNZ3sJhWGQ",
  "key33": "2aQo3cSAAE8WtBc2MEozXPE1JrMi8hmWVewHVCLDCL8uRs4PMQDMLFmYYAwERHzXwatmJQQQbAJa7YecWn8H7ikk",
  "key34": "3eqB69H6c8GRTZzZYBrniuThiiWAJmuVZ3o72zN8VTPWRhFd4nGCKCtCDUWnYXPnpj8vxDgjMNcxYFRMNUBGUDN4"
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
