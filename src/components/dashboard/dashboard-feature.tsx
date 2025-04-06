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
    "61cZaD87MdoytaY7hMUzy3ZzcTH7aDZkXNWbzzuqxmcU3KxtBq2b8r3tTmLzFXB5o9nsAMwxfdaAVJrhzxe7LcHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zi3nutKjijUExemrMfKpxGs4vbpDQHEEkZZLFz5RJcnWAMTZEW62AZbQXgQgsV5pKe8EqJYvUPQVt7DdY4Hivbt",
  "key1": "5ehf6vGbCYphdyEpCYr5FGTZDcyjWkaTev6PjNz1MubpuzbeaAKrTXEoThn6qDgh7biRgjL5EQYE1JosqaYGYciW",
  "key2": "4EdCwUryqqsxss9idRRjnbbN3ZYYhzdzmDddGJV7BpWJK8MmoFKN4PJ2ZgGZiwkeFZwyddMbxWVVQGBCqatj3QJP",
  "key3": "j2JX2XJNgqB8qHmv8bRgHin7yp1jJnxKei8Em3Gf5XkWU2Kh1h2XyboqwDhsVVsgsrPSo4F2dLkgniZn2gHK8mv",
  "key4": "4Kq4Fj3jAX7csYQr1BgNssRPWEBrzjtTmvCmY6DUDAsjULbmWXREr6dzNgBDWBNrPZzLPnzsTmvmirEGWYpf5cTS",
  "key5": "MXRUSQDeSkeKJesfEY8ppn6Pk5KFtc2jubMRr2pzHq9zhLYHrG1THaU7Rapq6BW4dDNyXVYQg8PWwXJUrWp978W",
  "key6": "3yQeHHSiohBEUutfTym5Btxi4wLdHNraVxyTfNpVwitY63WBGixZwaCELa8bMfg5E4QzqDXXa3JpmszQhHrUP52v",
  "key7": "5hhZGFLoEt7dnRNdvbAMua7x6wECyEQrNQ8pk6n9J294QHodTitUbZhrwQbfFmczcCyjKxRKx9q9yQKUzigoy6Uk",
  "key8": "eF8xGzyKKerJuK3f2kySJfpeQQPRJhbeXWLVFBCQHQWQb8a5wVvYvJtZsf94wtB1fvmc1DGuc2zSTrNNeU93z5w",
  "key9": "5z3zeeFW3aAXmYN2h7aDUS66X8keXEm9d3UjASHLz3dRAYPDJpwQZByQBgcC1nQvcRk7FDgeFNVazUW9Yy1uhAxR",
  "key10": "1kcCgxvoBexY1mKXH225kS1VMLApM5pLnemBt3nQ8zi4LSR6GDm9TcZCfrghwm4AEyu35qinDZfyw3ZwyrSNYHh",
  "key11": "5db6reQRMQySrrxgySG4FRQQekpZggwH9kyKTUvAsoxxbx9dbcFQr31W8TnrdGH6x7y4JqEh4VACtWPbhkENz6qq",
  "key12": "2Y4t7aYW1B4vSLJGZNhiyYmkwcREre7gaCzXZiWFuogQfhTwYcxgCyEPeLVe9n7q8d6zwnBCKGrVyAkek4hyfxC6",
  "key13": "PZZcmdTL2cUsJprBdXRUTqJ1Th2EjYxBs3SqwMrgsMe1MhL44HGTPBZh9owAAyDBn7u7NRt3UKDuiqnTTtiQp4d",
  "key14": "5johKtS5pnLhL9RQ62NuAx6H2BUEWiNBaNJou16mqzMmzP6SHuSHDeghHiuMNSCcVCgvMwv7QPzwZxXunADV7EUC",
  "key15": "4SCm8SL3xCjcdCN5j3sA9RW3TCoTPrfzCuLKkL5cX8XrVkzzMBC8aL96C4mqoMQAngfPFaVp2vfDLAuDdJ2nGyLB",
  "key16": "4TvKekuJ3xLtCD2ftDTjfsnVo5mzBS4XnkkPFY78QnVVbEg6MdgHEzHD8uMgfhzLWirnoARScCjLrtZXBnCDJrZt",
  "key17": "3kyjUYmVoe61cFqkG3qxqekzvC3AQ1h1zbyNyrtEEFxtZPRNTTrXSGK7fvebyNXSePHend2XKmemzcFv9fam7mXX",
  "key18": "2Wnkq5tbS2LWit3maWGo238hvAQDo7j1accj7fbg6GU9zD6i6FNrq3gMMhmjWtZQNXLWXiuaWzeAXVhgaaSK1xz1",
  "key19": "2KRdrCu1fcKwC6oELQ4RZVBVWrNdfnRyrVZ51wZZ2BypwGt4Zhm22GwQL548GHqxtX8QXUbQXAH4D43jWqjgABc9",
  "key20": "2QgN9KtcVii4H1rrb2pcb2Ew5XCXLWPJN5Qe1xXmNvXYDrxTHEwEJpFUQkbZMqYN1NCcz4kFfTA8YgV2SivCx3EE",
  "key21": "YWm5FBK4sx8yXdbeDE6nGtcXxN2kYo33X8hMmM8HCr5bZvwjQRxhQDVzLXaHyJQjXFSHZsCJcM2KBurRz4NRa2X",
  "key22": "4C5yEjukkrfj7Z2XiDYCCNJfMtNJTsHKs8rt87dZMemhKH4GLParxU6deXcoAxmkbW3ZnGqozX7qdwqPT41jFd59",
  "key23": "5ikqgDtFtqfyCpk4TFhnEwS5A4d1iDfuty8T14i45PiQBCYN8aW3cJiCTubsLm2heUEipg193LSBWzTNPeqUZx1M",
  "key24": "5Lo1kthzqn3FSJ4Y7SfspceuKUbMTjrDTvfbvqBsMtciZ2FxxYGdgsWPQyyErpqPn1DoXv4LK3eqaCZv2JHZH9sv",
  "key25": "64LwLgND2YG9ZqNBHjA9R2BpV1mEzTxsxNSz7dzZaFZnCyZc7d6LHoZ3AJsnvf6R1fDLDbMXoBdQQUMmfr3CmDDi",
  "key26": "5ZWuef7aGJD1Z9eDyeqWHWavSG5b46tQBCa3Qo85EKo8WnDBGWnxyKSUcQSA9omKGctdkVLZ8xQvVchirFNR3DfB",
  "key27": "61c8UtpDSY8p25M6VuBHpRX6scYRQKn98Lfa5PjPMiiznDB1CarhJVXUu2FmnenXmE1tKmGHteU3h57tvHQdf7Xr",
  "key28": "5Rj5pLr4dU4QqaFooRdp6q4foVPW9k1KZC2kAdjV85iNmNZrJsPgnDbteEWCLGRUf6vsk2YLcBuUANBu1hfNd3Hc",
  "key29": "3LkY3fc4yzYKxGR6SkGhhp7bdFCiVzWUpVpakiXGfxAZi2QjCqQnZczWuzNVENoxcoZ2YKHnTQmJ1ehdWLpC2zgC"
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
