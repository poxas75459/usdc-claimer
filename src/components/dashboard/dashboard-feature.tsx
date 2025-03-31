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
    "4TkT9gqM9yMozeqy16zofFirFBtAfsMwb19iRbCNxWCbYGi8nfuvHbuWAQ4tbMQ9N7FAydpdCPfRhvtA8doSwX2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFpdReS5B9kr7jNhUx9Fcrbcq8sFbNJtjGTFvuF1iEA1cdR9qFwvv55VsfTjZtwPpPSVpoG1iBVssC9ZPEXsBRt",
  "key1": "29cu8F8MnXU4s7j4S93JZacD2UCGEdqtD6bMUW4SSas2BhUSi8oXRof6mPF1VAmoEvKTtJGyJDCuLRtL3WPxXzni",
  "key2": "SJQ6h5PUNhPocio1udDDyCd6bYoD3r7iHRjk7TUQMgpCpWyv4fSsxrxvpAoc2A6cQfaeNnjK4Y95VT1fuuxsxAh",
  "key3": "2qDVr5epUHbxtX5qDZfVBLZ1ShfMxJhidaPPp6nofGEP3ssxUDRe1cpZ4RXAzDs3ebomePjbFtWPHpkTkBbQRm6N",
  "key4": "4d6iJxbMYQEd1N7ME8ZvBYZhzsfwv1jVJxMsHsF3R6UYzqGKJ3E6SizycbwfcxEv1kcgXbyMRuo3A28rvLFJVH9h",
  "key5": "4wXFyCGdtddn5uRuU1DR45VUdknZ3hsYFvq5JCNKtjKp5og5zKquHpfCAAhdpqvAnSSbXoTdQsVXiNFdeUhKLaam",
  "key6": "5bSZea1kR3CzQEHCemUBesvaHMgaUuPWS4arMDxnrdKz99P142umEQ4db1MmxAAvThnUg83GQsDbm4ReGzxtSZTL",
  "key7": "61iHDEzwq3h2YnGokFbDHkd7fWF5PFwKsCbjCLd72hU7DygviRQ156Giu5BWBonkqTpg6V2rDd3ad4boubM4cwe5",
  "key8": "2j8WWoMLUfqmFZxuRx6BJXs9BVPvm4AVc5AGGa1ke1qBBUKPo8yBtR4KkDFpx5Jqyw4dLSTSgZfQ4ALWkPvkyrJS",
  "key9": "62NaX4wd9QatEf2tXXGVWm2BcaccZg2WoVR7QMa48ye3K4y17ENLt2AW1FEsYA9wf2yGUezjX9Dn2bYky3W71XxR",
  "key10": "5vasXYB1oYDUJx6qTyySi66qK5BGMrrRU65hWxutVNsx9AgYthcDUGBhcDZ5qqhjY1K55ANF8xzSJXMZ7kDq9Mw3",
  "key11": "3gs1MJKD4TJWbQ2zGz4YGcDfLCfQj9vE4TmKn1xkpXZnoqELbXdDr7PjKS55xT8H1R47gyYpsyXyB5Gd8PZ1N667",
  "key12": "4uFdmXRKJrcZVMH4NTCExJzwSBBVKE4yhx1XNopEyFNQqjbeYMahBXK8HneeUtBh6CQGZm9seoZRpq8Lcv6E6GDF",
  "key13": "5xgS67zQj6F9N46XEJZrJ1rJUwnsiZJ9MLmcjrqYDFTwHMLm3Um4qxGKuBQGb5YESZ6nZ7LEgDWscTsnJ3EYCh1B",
  "key14": "oA5cuoc9jGbjSyxSCsTpfxLgXHiAaBx7jx5zxoy9mR5nXLJj62d5xKycB4yxYVpJkzvj7uueTDEpVqHA1CsaLdi",
  "key15": "3cwHDfVdmWE9wpdZgDFwCN6ZBiWKmWDgTEWnqS81okzMV13gVStk9xWNiaSQPLaYhAzq4nBXvcpKZP6yS4QM6RDm",
  "key16": "GdSNh5UHcXD2Mzh33wqHhWDGM8wA6YZuRP3cW1uioQTzyRWe5McELPshsqtRcLMz8psqFnxHgTAuiZLFjWLKWpU",
  "key17": "2vct1KtqHxn2FGaxBDch8vFNDhdbjYnDL79EdTkYwjcvFi7h1nNU5jGS2CZHQzntYDBDWLX8pEGkikuPgLjSwKo1",
  "key18": "3FLaxQsxaBFdqc1qJFUbRCyLQQUZWeLSpNmbursc2SpczEE6XYmZj24pNokDG6fCPGjwREaRre3YUH9ThGv2qR8e",
  "key19": "PDGbj91VCvwTLiDiw9aWLWtnRXF3YBJ9hAGfny3fzEG4q6i9RjsNQRhQtb4xnJwXwo9tuWNk836j5yNqsqe31fA",
  "key20": "4NGfKSkJQtAv5okGKiEaLZnLZ6KMFt8oMKWoJxRfNPb3QK7E7iph5qgFhPk5Fc5uGt3GArsfsb6iTmLgbz4x9TK2",
  "key21": "RZ9DsRPfvbJ1UDoLpNx43ccLBwcnsjgNvgq1Y5NNdkWX9knokYonsWwZU8m1ya7Lui68mSEnvAH8BViiwhZKwNf",
  "key22": "3PEMe9P1PtSsmFug7ppeeCsmQ6vqSGPbFNvTqqiAw3MppVwvLD7E6z6muPt8AAsKgWFpmxsoL3NHmmNs8EpNRprB",
  "key23": "3GVJ2BXggWGPRiTWWcKpknytNUpxHeTYuHBptJfRBShyjuAQLUoTTPckkgxuDNJP99Db7jG7ES15Hr3vbsSS7n5v",
  "key24": "3LRRThi7QUCGWAEkNdgyWbV4pf1JSWfM4XtDrHuFQZvyd9bvf6KX1DE6xwxUhX9NTw6BiXHA92MK2yFjWeXQSYF8",
  "key25": "aNz5r2urDZrJGV6J2NL22RweLf3w4NubLfLLf91maTZN2ZsGKxMW7MsH6vR9A2p2GfAmbmDJ7ECjBNEjstLmVeA",
  "key26": "3qkRBpmtw6BmHustRu9ckg61o2Nf237kRPZKu8LZEwQpXCyMsa5tSpSjnmyzVAmQNdrGZrA9eEbuDGKatxBC5J1f",
  "key27": "33sXcF84RMVEFDnUBrTwti4vfT3QyM12PgfgJ7pvi9ZQptu4AiixMY2aaGJCcUkyP7N5MmTksDF3oQ4TUGsCN4MH",
  "key28": "4wzx3migDwBwzPPBBk9R83dbLNUzC2kSfsnQGZYxBRfiQb3msivh7zzgXcj8Bn4PUa4o6qidPjdXmSDHascTvYQW",
  "key29": "2e35JdhKdmbkrRe9wAz1FXX9f1AqVkUe9cvv36RrQ9fTY1giShwVeHpgLgYduoP1mg7dANX4jzokpir3xu6NH36Z",
  "key30": "4Fo7svqHAh14xapMkRQbMy3oBuhhm59s3eXZT66ihs7SqapDE4NVWxAvjg6UXJrTLCD9kH5Ez7yC17d984tZhJ9j",
  "key31": "5qFT61H8S1SHUdExu3afc8WjLY8WUFptJNWH31L4kMLMoyMbdbseCDJP1MBzp4WeeXQxdFQSzjo7Ghk2CsyWPZCv",
  "key32": "5BeKWV8bDDRSgbRcsgKu7hzKGdp5kowyyUyfhDJibXetKoNoFCFzxbsrePGdvinY7SKx1zo1KQzx3aVWBX8swT61",
  "key33": "3jPMyBVzd2vHwQM3bRZ6CGv4y7MDdppnaAejquNnyFdRpZcxyxPSLZoGdCTJmieXYCFwSpEj3RfMzUkdSp1RLFXN",
  "key34": "632D7STRM6mc31DvEEkpqrvVgNy98jsbgrULa4efANKZ8w6Frhti9sLa4pzxM7VskSqRu1NGkbT31SM6H52raTgs",
  "key35": "22vfdUmJyeq55Ce6SBebz2u46W9TnAGHWBv5AnzVfZAgjdTUjYEKgx6w8PkTnKws5SYNmiHteouSLpfTBGtkaVEH",
  "key36": "5zwVpK8sqNcxjwRNH7Dcj34QXiTFDGfjGS7yY18y49wXonwF861BjVGdNp1extRk76dNjDJnvwrF1YU2tLHZjHjo",
  "key37": "35wND4qLqXum15JfePWsfEmssEAb9Y9AYCyJjozSsKehdM8iWVz37ovQv2QWmP1d5Hn7bzDiCkiFBk65dvT27GZx",
  "key38": "35fFZ9Rb9EstHnH6grbBn2MAEuvuritx2UUiZxkzeeYK494peTab3SV5JVvzhYLSmJYTsQJntsbJKjN7E7B4JW7Z"
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
