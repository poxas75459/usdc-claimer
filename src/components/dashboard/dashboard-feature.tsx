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
    "4o6hZA9Lrki3cD91AMcP7sDV7jMi84iWbYGg6SYwwR7KY1THVRxXEsEyQtn4br25BNREXJY2BqPqhNkXs4ivks5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LX1spszrNQuuNnrF1ydkbeNdSqXTrcgV4YyXgMHzDUNZwBuRc2xeJaTNcN3o9mJpUt79C4eg8QN24mri5R9YYRZ",
  "key1": "34qzcXrDvNvV2nzt4qLokPKGpifoxuCU1rR71jp9ueQmvgFKNMx9BjYHJDkR6pXdpzGsCSMigi978Nugddw9c9jC",
  "key2": "5LQJ1GPgrJZenY6TLpLaKCbAykXrViFUVxm6v8xa7o6eFxEZU2B5tNPh4z96JjALqPnkewsrhNXNK1y4NUXjEgwD",
  "key3": "2qCBVGz9j4VtoNyswDK11yoAv3JBJGQpZ6AXW8ixk56DGsj7YyzmiWVeRtkzKTAQgPjD4SuaeRyBTervjKdpFdjn",
  "key4": "64Nk4SPWbTgftUfjWvinPoTHesJhtXsAAKM75zTkaujUtHdvHFERYWmEps1tRyQxKQGDjkZTNgVpBNicVXyvyJyj",
  "key5": "4kesytmyGzHCNrh2i1n1sviJ5yDgJJ2dp5zjDhXR1rmLjkzbZuk4hXBxZ9TLLUsAhCuDELVafu93Lwzkaoyrx87f",
  "key6": "496hUqh7k949BXS4WXc69zo7ydN4FPUVjN1krYxqaYKnsajRU7nciM6ytepmRPS4zpYFPhdk3HctYZdRnpVqGxeX",
  "key7": "3Noy1JjFFb9V7vontsfKFTo74ScZN5fQcdDDaToR4oPjZWKyRiazdvn2PWaqdGEA1rCepj8xyg4yBPuDNyoz1Bsd",
  "key8": "BQqYQTodPJ8pRU8gHTxewiTUdHTL8TSzk9KyjxTS6ymYzMXYc34xkuSbe7BerQstvbQ4N2rNaR5NeM1Hji9tPo4",
  "key9": "4wnXW6zkG4yHQhpCEeszxGF2EYiSjgqH1CT3WL8vsAy965DoSRDM9G78BR7MQETKCvtui6u7LMEj2Hhk1agbwyzW",
  "key10": "2dsP9idKUyECPHBgeLkEyWFjC5WyBYvEkcypCvR4zDPtC5DWUXVTt4jCt32TQnKcbmdyMQbKTQ4roGQ8JdX7e59A",
  "key11": "4mVcdwYQANRQbpkELJ3nnu683JY9QPyhTWS5Y4W8aWYwEsduLHhMd5SrvVZ3qbrHvEkWJDUAdedtNmxA5qqeFTSL",
  "key12": "2eGkfUrw2U6FGCDpZ3SACS4zu62DwHRabeEJEhJANf9AGLbbYrL9trpLwraLRGBug4YVtME8x93Jrg5TGagMPofp",
  "key13": "4dEwWa6QDdEr7gLLzAeRXayfZP9fxjUAAw3fGRgsR6CVX21PGx1px6KSLeU4TMJPpQHukHRnTorypiQymoaaDiro",
  "key14": "2RPYqWUt1k75XtupV2ZH7kwsCnjaFr6XGXyxP43W5n2JXaF2hyjcyK9V53U6NPcWss9DGJovVr5U1cy6HTkzmbbU",
  "key15": "4nEvd1fhGHZhKY8SUbMZvdLnJMrXjn5Rtnj7iXWr2CW3od92WY2HvkLQXf6zXwwQ6sBxHVyjRZBaUSCfwe7yR65W",
  "key16": "5ozS2xw1BJdFAVpnqS8QACkTtsqysevboeGMbuzQTigEK9SjcjRw7ZnrgNjzrAURDZ9gZ4NufMs2UoVzcVcHb4oc",
  "key17": "3iY4Zyvtpk8jmasJXtUcHtNybkp9Mg2eMFToa9n1uXUduchMx5ZbEUqeXBUT2iiCaQoPecEAEkyJGjUoUna4c9Jg",
  "key18": "4Y7d3YMdeMuuAkvAMZWfJvcCjdL4whtYez51rUZYFPCFs3z9iaAGR5kDR6Cy2ip85AsAqCFNanSws5nDeZHTTsgt",
  "key19": "55SzXXN7WxoLhZ5Ne4qgydsLGSMmrb6njgvhVWoN5JcipdNsZYfszbH36J6aZ7Xe9yFMuGU3fq783vKwe1DLppJe",
  "key20": "2Am9YGZ9hqTp2nsdnHT2wCLR75Z4gR5SuoYBfCFKT3tArvrPydVWMksbdsteFFVr2waDHNo811wWwk97KjYFE7vL",
  "key21": "5kR5MK4L2hne5rmoDdeuKFkuYL1DcjJoUvxPqLMdX51QXCjnS1Hi1TQ29N8ajpEWVi9GfqYRLN6po5xd6JkZtKz9",
  "key22": "5KvpAv3RuoMj6NNv4JpRGEpPx9cEs3YpCVi655dAG44Qj149ki3JqY7R38DiYpLWEfDNHc5h2ofbYa6iDJ187ckF",
  "key23": "5mw8jcvuy6uAmyw8Et2c3y7Xh5vLEmCWEgupQ42cS2wpAx9pozBAQ2M8TjBm1sa3UBoowsL63gXCE49Vi3fzmxSe",
  "key24": "4TgvkrXkyzHVVFMFHsQxhpesj4eAdX9hVZ3AeKkRR2ZdWmh4s1YuzFUcab4hEAcB2kBcBAfXB8jqs3KM7YQFg9gi"
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
