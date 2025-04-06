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
    "33CcKxC6PBWct4HU2MKaL8VjxNgGj4gikukwZKfzHwoubNVbpu4ugzi9mKLxjVRoqZS22w5rJWEwGK7aePLfZjRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJ7of4q5UyR3AN8CDX8Hs15kviMap8CZhDGtNY2UQ4HwqGP9bFMPES4Zvi5SWjqvsZtt42w5M3qnQR26NPGt8wC",
  "key1": "4rbAY8LVX6M8KC143HGaAB7SbBDStEbSuWgEPMWiLeUNoCxRMPXnt5wDcZXH1q5uvWEicMEtP75YQjEghJ6tDymW",
  "key2": "2E6XKkyjDmh8X1LJq3dKRaUi4YbNTYRnLNaXFZFGT8JMECQojCUhkKewYovBPDy4daiQUH34yxpyzgYqp2NtoF6v",
  "key3": "25jgHePdMNZxHeara7vTiqakU5UWwXVCGiGDMr6VKndxzuqPgGs9o15VBoNF3fj1QCm7WypmtDGq5PicpkoH4ohZ",
  "key4": "4xAbrLTR6Ku9kDNmwXoJBHu4eQYDADATRcfFVcHUXJFjPstbqgrZTKJwHY8YjVmnJCKDKypAig2Nmoe7wPi5rBDn",
  "key5": "4ZtivqmymSbq4fzo9zwx2KWujtxfoVsRDCZjacrFRbSe2HuayHiJiVLkEYkeMPNcsWgwGVgQeVzont4HKHxR5gi3",
  "key6": "59gAXwAcCzg2tXyx5EQTUHNzENTiQ6cJ1cBin1HZHVUGWbrVSS3fCU4jNqaEu8JcGW3QD4oVtKPKJ7BvyqmSHn8Z",
  "key7": "37gaGVHZp4sESsgVnh1LVBwaz8LKwy8vYnAqMfCZUbz1emtnFTb9NW9pcg8TWzGHaTgJPTBdQ89uh7awHfCpQwVB",
  "key8": "2BxVNdUcJwhkMMiFq281ptBQsuQ7GNNRAhL1AVbqQfbwS667ocCqKJ1rE52oxkazU9KuqL4DJ2RJWabgEFndNEx5",
  "key9": "4rZ5w2BiQP3uUQ2YTfgr3KnhTnJNe1e2kD2x7A7jNegguP1JojJfPyGFE6YCtzA2UtKwQDnbUYK5wa5z1Xm7WiCk",
  "key10": "4mm7rBAE9MkwVFd2fMfLsCoLeh4Pw5sWjC74HjSooGXLLCHY1K7WV7z2rnzL3cRCb5FWZEAg5YW5UFXvuPh9sej1",
  "key11": "61hksRGvpTQ3NKkUh4EaZpHerw7mTTYx6jjHQi3zpKgp1aZMUXF2wE9vK5ecxLPXx827NsgvGJczdoSVTmTU2uHx",
  "key12": "4aL42sUmswWS78UeyibHBHRwFL2d4zaAYxtjoue7r3azryqZXHrMTMzC56STMpva2rCfxQNf4mX2vPwT7mWMSMTQ",
  "key13": "2oASRaSdC5o5Vkb2wTmG7Zgr96XitTsd4oWJnuikDvRQMANhMRbaTzJVjBXLjga6bEF9NufFnL6YW9GuL4KjAc31",
  "key14": "25HrWTyYNx8Vvpbx7CjKzYn41ZVHSkoZAxF1dVCyKb6HgxMTMpqzWCbYKTNw9ENnT6K33ptXXat44bHsQMyJFYbR",
  "key15": "g7wkZaqEoLPzCuRyMUKYoSBhZFivn2H1vKJ6MKjx6f2fDK1p93b3CqesDLmk7qC7GuJdPLKbC8V19n5miZMCkhT",
  "key16": "2bcqStCMauA7vZdBjc56AC4SPFUFkCuxK1ZVb52KEgdrd9L45pHy5gn1pjiY2y2fpnEod2dcXV7nJmGYetiUJZGW",
  "key17": "rydFjNMdANYvUmx5adaf6J12k9UQAEFsqmyDvxhk6HvDj2xyXZ3nf1SJzZKNdoMefc5urBcZr7sZfSUYN9zsPke",
  "key18": "5y7WLYPB9yudvzJ9H73QVAkirLasH3AU6bkyrvbDPVF6gLUZUXgWjqNUyMrdphMeDZ4UC5VecwrbG8dc5xkCCeaw",
  "key19": "4nHw9BgPadzDxiikvE48TwuFn4r9NjVTuCaceNr5juFGS9KccS6Ba4fpUArZBV4Q6KrSg1ARq11JRNPBzqd3enTX",
  "key20": "YhGaVDVEbQUoq4CGrRHhGMjk5U47KNEXrXHPQpUu8HwQVQRR7YfbpLvMbgvG1RM5uVC3ouvUKjTCDNWTpebom6a",
  "key21": "5hnA5Wj9RRdjVukY99Fjxh3yfv4gY9HWnzNaFdPtp9GNJK29cq8azXYpadcRPRJGhuGSyu1bQZUe5D1o1uscxAMe",
  "key22": "BLr5cDmbXcgwkW1dewUZhrYNByZFHao7j2jJCiN4FRx7USBQ1hrd6GBobah3tZSi5RFVzMj5HDLGTsPYVkfCn1y",
  "key23": "4CQGT7qnbdmuFW9bx7imrVGRswTtyqFZFSV3acaQLeeZ8BAJhV4qN6eJk3GSgwM62L45J42B8pTkqD2Mt1Y5MW7x",
  "key24": "3iM3mkPzXAVQE9pdmwjwtqcobWGeLNwVvy3bsXznmE6DinYnG3mFehbjRyBec1kK28PdhrYUU4Eno6xCv1H3jNZf",
  "key25": "ZMJYTEUVThCewFqKm4tR6PQo9wUdYpBznThSWR8K7NGmHhHCT5m5CyV7UAzxnDywCxi8XCj99TFRvX48BgpYDhe",
  "key26": "4kR3buSHQ9RTxcVnJv2FkEHnxysxc3j27XaaeyTgVnZ6EMASDgFMJUWFwEBfLY8z8GpcLErh6dYrPmN7eBjN9J8Q",
  "key27": "vckwqoDrybBKe8Rctnv39TopmAXtewy2sMVdygSxeEjHe5KvFr3nSbF7nQRCaWnfr5fJ863WsewPPp5XAzSxnER",
  "key28": "CisT7rfSSaYAPuztiZ5ga493WxPbyXVkXzAEPF3LPtyqcd4zpPjy3ZFhw8uFMmyX43NWhKTGFDNF1kZY98UciSa",
  "key29": "5LURNKkhLyicty1nzypeAT4K7wPyNGeJeBkDuJKcqZcDFExAYFe1EQsUPJ8SMpcCysCCjmx4Va1Kv9smudJ93H83"
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
