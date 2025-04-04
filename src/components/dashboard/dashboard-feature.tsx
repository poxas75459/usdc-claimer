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
    "21NSCKz5mUxvXDT6rGZ1NzyE1mh1JcaRNfKPQH2tBL9GQjj5TjG8aghDvYSr8rcdTAGxExxgfetyKA5MHPuRXrsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgXakeux1t3LaQfyUuZDLYryEyceUX6oPStG4Jjni9TSPHF8aZJQoXtqYuAhn78B2yH5RJBLkzYposv7qytUrVf",
  "key1": "5qQWceQ6ikYSZaQw8FJRwAZhDinqQ7TYco87czfZ2eYzVqZ9mxteZ2wHouSJjfdpmsz9swBeDQGoeJzEf66RQBPH",
  "key2": "2vpcfRJDQ4UiQMdv3xB44J75C14NhjqqSRcCLinHxrYN5msJkJqDyTTtUg9QbC4GmUhgiGMuEwaZyuwbfgTy6hFc",
  "key3": "3uC49Bxp9c8CybKmW1KjBJh9uXmx1tcoYbg2aZbDTeQbqDQhCTWoFPY3ZQfB7S6FLb7jNYLQ5aQR9bRLffUKQfhB",
  "key4": "2iJh1P4Fa5WrvtLnTxuKvBcbVakEuMCBDwQDkPi1o3hmzyME73oBdDDJ7H7pHFE3UrCxA9Hr9SzHtUZgejdwj1wn",
  "key5": "4WGzydMTTwmhcvERRSQn8ap7X6btuT6Hrmasy8PcHEDqntoqSJEbNQSQDjyxYgLPhLY9qBrZKorBPMDecC3z6MXv",
  "key6": "3vjDWuUNsejBdiZfKRGZiKVCjNTUfyLFsUZVp8TztbbgU4fC6jw2rmqbqvniahJKVFkmbMdxVpBTN5Rkpgz94ZjT",
  "key7": "tfuijHyHuFZN5zwtkMAKVsBrAAuQNudurepSz4QZyaVJNrJXhR21NmAGKRJDZY58NtBNb9QsV6VBsZoswysym2F",
  "key8": "zrR3sznZuc5gpBEP8ddnbZs6muhut2z8ZT56PbpL9CKT1hphEF4YUmrVjvuiwB9Sg99WHaRLee5ZcKvXyiBFepu",
  "key9": "4MjgVX15ARMYmTtMEYKXziUdEVEvC2QvwR9dncPZAP43JYhdkoGo9q84hAgSY1DkK7PGK5BDCPcCht59ynTzvrdk",
  "key10": "2nEuXavYkSARpvbjt7uEFjEUso3MjpiayyQ8hZ18nQUTARRLNTSk8rV1fHsDAiJHTvuxWMTgRkjEsZbtXNuzp4f1",
  "key11": "5DSNxAVE6YQUdGKyeyxQZHnLigFEMZ4tDcJ4kNiC7BpLAosbYbExgyp8JDu8M2VByiZBBzsYCT8ZD6RWhihiwYLU",
  "key12": "3WyK48V7dohT7syZ5fkAajR7AT7eKzRu7uovesna6rRUWGimhfRNJvCKJqiu5ZRu2npPDQzKwJZvWMiAMP6Tnd6G",
  "key13": "2eFvqH8RQEGRMDyRugWQJ8WrBU8J8cfrCPtnAyKgVvvifNegVnDR3T221fv3eqrzxzL8n1CnDprLbM7Z1W34EMsE",
  "key14": "5cDGhoNs9AJGETmaPiFDHGmWxDChxNrhvyWjMxvGMwq9rvJCF8YeUwYXA3gybdf8CUZbBK2P5LNUAM8WTo5yk68q",
  "key15": "5MsRv221WQwKXzsEfMPEQ86AEn8mu77EnAiEgw4GG3E61sUqEy7ygmyaJ36eED8FmxkVBfqrV4Gg7GQ8YmPBTX6e",
  "key16": "3Kjks38KsjZXS7WQje4JiJtKeJLvKwSHJtJ7U1xRkaDevY2W6ZWVeeB3p29qQmFxb18LqKDszx3itP3qcWB6rgV9",
  "key17": "62d57X4Re5LAQoT4V7vFUhbL4cmnoa2yWSkm3Z3tBALGzrWu7kBAunqqs9yJkHNQZxaQ7tUto8dAxjWaUPexrguH",
  "key18": "L8ugxV8TnDTNvJEbdipSpmwNPvt6MDDKAoidM4m2jJjhzG4Lk27JuxP9D23rGQkjyi42CVesP2XnhVWcLHKEZL1",
  "key19": "8sdqs1ivAdWkBTKQaTCBWWVkH8ENi5j2w9LpV5M1iWFrt2PtPpMAKZmhW7jD5praTD5NcJvV1Aob37AmTheJsyU",
  "key20": "5P1KJWd9vDZeWPM4ZDnAkjcynhdqLTNRNntJRVRbscsxgysqF1mEK2WCcCNZ9seB2NWUV8s3x7tnsbS7mj1YhjW9",
  "key21": "3RiVzHQEm6Bc3puPhD34AXnjF3tM5GMp8JRx8AzzbrpCVJ218sbmiTRFVaLNrhrz1zv5ePv2my7HDxiJDE7qHdRL",
  "key22": "5dzDM9m9YTD3Mzibk3oJaE564EVRmLxq2yjUG35k6o1XAjSa43eNcnnC3LEbr6CcUByRG6beCh4GMKvQnVp7fUsw",
  "key23": "4tswCt4zHwQxr9wkB2ujSq1ZgDPEjyjR2eBUhqGzLB94c4ScwDdqkZWoW94BDWFRgco1Jx26NXQDfDYwaVWk4VzL",
  "key24": "5EUALNWCoeGBVP5MJskAZDxfJ6zmQesE5svLihdZpqcnE94PMzyeAXmpgDGhDGKBASNn2sDPZdnC6t9pCbju15Yq",
  "key25": "4vbV1Pg3FzKx6x2LTihivQLy5kLaNLzE2uuSSrPdCC4uQjMBGaBvZhYK5Xi9X7xmmaRdMSog6zP8BWWoPRZSztUZ",
  "key26": "5okkE9Y4WTXkY6DLYPnjSKTefaoyCkCutenh7mwWdrfdQVUbsawWXtJzTkB5ZHEYSfG684YLoPbv1bfGgRptQUHt",
  "key27": "2NYLGetXNUsQEz5P19BwNsS4WtpqXJmhYkro9SmcrRGscXZi5RjvzCUA9DfmUMX3GN1gMisMHonXyMNC9iycAxv5",
  "key28": "5Vsv4U6vQwpiir1F3D6Z72Kt3kRTa8uh2nGzp18TiDAccq6mxPunj7XguJo7zr4MqJ8tQvy5B8dwivvRvyo8PgfE",
  "key29": "3m9LyV3cFJ8NHNMHMzc1mvrNttPCWCYSg3gXUBAXu6cZcJyxoMATroXen8aiYYnBdpLWAoPzWhHVVFJ17sXbQPPX",
  "key30": "3gRzYdxcHtARNfSLdhGxwfk6UVUVRjYbeT2XMVbgNJ2e8PmRokAdT995Qyesht8aKvxfYygLwi2ArRDsqXKk8YjF",
  "key31": "TpRLvhR4PL3UesWQnCFdnJhTLd7DYgsMvY82RskYJLGYBV47XmUZUGoYAttDhXVrRwbW3opTsb49ZiSpgWtm7Qr",
  "key32": "3ZAUCQ7antktSTUrCFq8rjsriKw2kcYPY3WVkg8btgwhKbbmRw5LyGXTaLgRCaVebdcymL2rqg9xctKufjUx5z8w",
  "key33": "2N23CgyonrR8XjcnWuzCo9wp2sstDAdmyrHyvucS7dGT65UeYYzLhJdtpFd4Xj3VeDejrWNP2RJ7nPp5z2zLgThi",
  "key34": "5JsXUuTr5a39uNnspQ9RyZD9XEjcSMNxNs9qDX5mFqa88LvRabf4Tstub7mAViBDxVBJDZJ4bYYuCZq3oz3TRTzF",
  "key35": "3hN2fUPQc9nxBjPgiS9oX1WPybwftzWFRWJuWWezmmGDxs2FAyq7CZi2UKat6yKiNP3rkeYqnZPFSsSh7MA3Bocr",
  "key36": "5kxZSAH5JD89qZCZGs3mEgv3bLXAuLAThBXKbaXfSrTZMQHB8Tf2heKL8iyvuwp8DSb8L379SCE4oLPbVbKaFTWB",
  "key37": "8RSdWirhPDkYJGLpW6kyJcSifgG8NJ37A5YBj2A4QEweqSxTM8RQk3PeSpbv4fAYMuc2bXWjLx828sGaun2F85e",
  "key38": "5HeyU2BLRKa7YYTxdXqJGYYZPc38cL3azrKSDE2Rv7fpJLPB52FKJAWpHL6KWtjFdTHEki5ZiHi943GoR8wcnQ3D",
  "key39": "5AhF2vamy1RrPMNnMQYNVifMp6J2EwpRVNZy56pZPH7GwY8Q7voFFX82At82J9E8V16Sczvp8681ohis9e36Y7pF"
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
