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
    "2JomyTpNVn8S88PsXrTFMCf9GtQos2vtftB941JoHUJq3aZce3oTgymPgsdw7sh5E4h4pDBcGthYAir3FBVSE2HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzcJzC7F37GWD3LvFUx5LbnM7w6is1BNw1KhMNTZge89GLLHYv1qePKFeB3tfJ37MUTKhFck4ANXfejYSGtKznx",
  "key1": "3R496EHZtzyHo7eD8whnvCHWMpAncaoXXUfJfXuF1vLLWfCgXJGDfdjY3JcMB57RzKF4xH9WJ6pCzCwGer8kpSYv",
  "key2": "4jspee7FbYGrCXf8EwzZnhigy1LA5LeQZXY6Zp6PL7uQr27uYLXpT8fT2PXPbiXPW5e6z95MhQu5axKDZyGdE5mP",
  "key3": "45CxoF8bMxxRjpcPNmht8cGWup3nYX47rr8cDhjhFGnJaEmnkoVSe5cU1RRRcrscVgJj3PMSqQAsr6doJj7QxPf8",
  "key4": "23Dk74L6tShYcHzitDFShT9Pjv49nmnkUrdLemM75ETbaM7xDnMrohrVJYcLZTh6eTEwDBbHr2Rkg8o6oYJhNXoC",
  "key5": "3LQM2Ud4TNcCGixfwifj6waMiWqKVBXGxZ4kRX2jhMoh9YhvyxhKXpZ7SDu3EuGM8Ax12m3bfh5H2PXuJh47K9Hv",
  "key6": "Bft31ETwxStqTxYCct6bJgbUj5P6z3QsGP8NiuXywgLDtzSKd9ge2US8TFQJMYvSLDm73ys42tmPZtrx3DdtgZn",
  "key7": "3UdcxvJSfqsHbhJgudXcMpxE1jK2DtoqMNdRWFLkjn7WxZd4wzyNuMog8rgGUqMtm8sgCqiLKnroLxLWAf984Dxu",
  "key8": "3VQDKqJhoRak6H5r7jaMgdoUJDsMH5GS6Trw35NgwXMao2MUj3HfQVoo3rGnjrhPyLY2kmx69Zx7ArULT4TPZmNu",
  "key9": "4yauGKEYcFsTiitbkFvkMegs3coY1gEe8eiJL1tywnjKyHz1pUVUtDG8hfGPByTncEDm1VCEEjBwVd28CfAJUjx4",
  "key10": "52qjCdc7L4WMk2gSpQiXvMvPykwpLCpCZA24ygw8z8zoBbKk2DSr8WrxyYzqeazXP4LSu65JTcoCA56EwpZ98pit",
  "key11": "5M1MZKbR2cJG3c8ExnQRjksqJmjBjJzHwL5kQVnuD3Kdd6eimBv3Zvrgx443LZUUj8QHkE1MseWGfWbTgT8w8oub",
  "key12": "46AVaQtX7HmrSJebLoaKUqgy8mPENM2UBwvAcZBLGbe5x6yoJNaH9xJ3tGwsvUi9w6nfgTJBZd61d8K1UqRrE1s3",
  "key13": "4jvmBdUaAUcpdiT5iiiYF1K8XoePT5GpDtTbvcXYC1VzAmNV5CPMkqoiKDpXNJ8zNodMXub2v4FKkQn5yHXCNKKR",
  "key14": "44ugB5wWKBzBV9KfC3FGSe6t2d7KFMX6dxFoHMQzrdpMDnMwchNgfYofenHoLd7BMBkrPqBSgJLo8PMcfnunRemX",
  "key15": "2rToLJFiEuL4cSYDwziKtzp65nNU3CQMpK1KSf8oGmDJogVhqifwsP2zy8EJboiF6jchYYgFMAmuRErXUUCdLimK",
  "key16": "34xHUD5DTzBhSMJVqaTjVwLgRuJ7p4xhqz89a9qPL2qaKhdrg56H9CTbVzFL3cNXvucvckXFrfaxxFsjZYe2WzQB",
  "key17": "DXZePkCBouE1cPo8wK1Gq8ELpBXaf1D6YGvfKAUFYfZ4tDkFKcnGxRGrLoRQA9Wx3MJtriSs7aMhjTzKxgeyxMH",
  "key18": "32E2kqKHRsYSiPj1LJLKy5DDF5QVbe9gBY6QNsXj9UjxBVjddLN6TGE2wNdBpyGG4eRjLWBsK6dSFC311Gn4A71j",
  "key19": "3fXhJxm4ursaDj91JkroJpWmo6tZPCXnL4J9YEXwUfjotnJu5ouJvoyKx2BQaMksvhvQcb3K3a8Uujo6DnZYc7xn",
  "key20": "3osyXDcuSuUQig48A6w4bbLshqjjitjp7ri6cza3H3VGUgydwMRdPe1bZvLH7V4EVR8kVSUAY1dDmCtQzbD3ttY2",
  "key21": "2FzLgLTvWkmQG2gRaRhuiN2e9UP8hAZW9AyhapNQvLPNQKeof72BWALjYpVZgaB3YmnjSByEs3XnAUEEHwdSdVzQ",
  "key22": "3kJk6kW1Rvp9cpGokNpQzeu5eBwMJ8qWyDgiZfLUdZ5WDjZDUimVsfnrXSSuwppHqLmefFjRmNgdHgUyJtWNXU7m",
  "key23": "3HrRugbaUppeQwVtdKDijUm6CwarhKjANTgeb8Swjxsz3LQAxo696x7kstvhSWWRJ9eFsBU7HUfkGr956pRZBsZM",
  "key24": "2PakTs8YipxexoZmPXMd6QgLF8pptqkPWweqKE2yJXFtUAJ3Kthep6PEPNrSJWuLbuWNkVy8m5ig2wEbCLLYfRRN",
  "key25": "4n71Xnx8fMi1WTMurBCMgaw2gJphE3ax8pzFBow7SouC1hEaEe9ziLNGCUYLCZPfEXCfYPaKwyW9wHPyQwtDwzQK",
  "key26": "53tHi7oq2SqSU3sT9wSS44G26zvX49GSc59Y9FgkAKcY9ZTPoYPPy5S3tPTLoWcRyfyUXwo816oepAr8Pc6nNJGR",
  "key27": "4WuVoDBkkbbpSAQVwuhYwMrpEfrQno4Mm2dtP1jHHH6G79hy9hszaihgT3MKUxLKDfLfVTdF1qGbjqSKpTFQc98J",
  "key28": "5aF7jazvghJWWwKzzRPk1hXHSHdbVJ4SyNpg3EhC3EW6b1CanwcjJU6Qbj9bqv6rncHPM4RCMrDGbWZ3k4bPkpB",
  "key29": "5hJuAs2ZYZroGNGpkZCG2iQ1Z1Lc4U8knaWt86mS6n5xnzkPd9bU4LsfNpZfXxLvKQr14SpUycKxirDK98qo7bdG",
  "key30": "AT8YYkPWMbkvn9txSR24wJqGReck4nArQzFU4R7F1HjtX7TzdSYtYd5fuN1qa5kdbEQm4YXTdcCNWuWGzhy69Uj",
  "key31": "3rFxi7iCZ8WeG3x2A5ukTbXW4qFrtqkBKWvBdBr5mQWDLZSmesw8qXgJKm6fGLothb3HBpmS1Xryhee9hL7Yp9ca",
  "key32": "42ahyaosp9FpxLVBUcjqJiHFHA1DCaYePHoDGbfZrVD8jHFNaBYHi7y2w9EoVFzZfjFvZwXDjDDP6L5qsnyBk8Rp",
  "key33": "2Fb2CLGBXcsWpXRwrfEyqiGmiZ9UWyqaJCNasXn3Wwg8ddSPMibFZoQh3RYbzpUCCwR7BSAUCfximkV6VP7J18nU",
  "key34": "HSfU1sKAnUcUL8LJbdP5bFsGSVoTC64Wm16yamauZ1E1jWVxaEyDPqxoGhcVVANcBYBscypnVViZgJvXwh4a1Mk",
  "key35": "MaFe9BZAyX1gjanmBXkEv5vKymAcxVATf96cpdVk7ECJagojyT2JzgdYsnpeNA2gB5TvraWdhPceWE2ttxFwpvX",
  "key36": "3EZBab6CsydoKz4H7UtBWCsnuy6dTA6xNabFEwbZm2MHvnXQ19wxMNGXUhpLRDDdgaarCsYsDmbvimZJL7noMgN",
  "key37": "23uNmFgVv5FqM9y76pf3vcBT1eu9YN9yJg6PHYtfNLFddo4UDLc93RWm4neUmfiqRALWG62wgjGTiQpvXw5y3ugv",
  "key38": "3WQCNxX6dwNgYm7gTCbRQPryzb2ezmm2Wx8JbmUJuosCqswvppz4eYv6PBxPrR6w7G3Yks29P5zkvDqBF3idA51X",
  "key39": "5NCqKzP9sj44rqC6amxW1b9xcgWC7ekiT4poPoBpi5QaThXf2JjJ5FdZ4SdKKQWXi9qnpGpdT9HwMifxHi1kQC8i",
  "key40": "4XA44PTgnLah1PmouCmvqcymebf3qw7BEY62QaCJbGMPwyqDgUa8UMwbm5wdKrVpd9ejNmv86mYFnqtaFrZPcxJE"
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
