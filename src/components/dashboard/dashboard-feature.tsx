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
    "5bqxCpCDw75URZ72DgnKNgBsm1w9MrC592aP42u8ALBKJw62MWtmYpLMEcZvFLoEc8Xi9wAfHWvXuFmAJqozePMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQAciTMkjF2iryj17tAtFvvHdQVq7VmJWmM64uWcQ59sc8JqoK34xNUf6ztS9Dy8aTJmEDcjKSmJURJZVGPzTYP",
  "key1": "iDaBsBeKZ9dQP4rDZE8uRN2rmdM7dZKWnkgo3kkfTHxvKzuNQoQd6bwPmJTXYapf4DwJNJvD3yVkHhn4zciB6H2",
  "key2": "1Noj1MB7JGMmZ5RvsVaLsC95rvntzcTb99fPTpZSUz73AUrGjTJGy2XSjTDoJpidoFyHwVwY39kYS4FcPLNJYWA",
  "key3": "4GzghBrZ9TUF9iKw715XMZD7Ft8Ag5j8wXrveQSTbKmnuaazsSJoWR7uDkmaPeKJuAzZafEkNDttJRJoFr5pB7r9",
  "key4": "3myedXnGYDehHoQyPo7oo7CjGmVUXnudGmzLY4w6XUZZMEH55NjXrkSk2vnXJCiBBbyoRQYE3XKk4HzE29kZ7p33",
  "key5": "2rEngFTAcFz6hHTJLSfLnWyFbyCKfgrBQanbBf977G9FyFwPnFxk7u6iKeNPLtiqnjyFe4ErxY3TGAZppbB3z2Xt",
  "key6": "4mGX2vkMdZkt8us9QppgKfrMVvSwkSM97qDwuQQ9JoLF9bqsGjJVRrTfwnwnyXpkv71PVAwPKQFPcTJx1SFXPGPf",
  "key7": "5gscvy7CDSqSbYuqF9NprFudqTn4M1Tj2kLZyrGa7agGqFSdeGoLD5ox4389xNCRcbcpFde4ka1smUKbjK9r7mV4",
  "key8": "3BUmgQcKzDxYcmWXFKBjL1A5UXZG5vzPvQ8NZDzda2AHiDKqDVziXHkFhAGiyYUCZZKzQLmigxZtw9tsNPVt4TxJ",
  "key9": "4kUeBhSrE8H2gDXwAFZWM6jXgy8GLpYoT5A2rPzTTRsio4PXpRR4x3JugJfqreKZ5kGTvfnUhDduCQ94r42Pxkeh",
  "key10": "5Tymm9KiUXRgCyVbptWhjqCZVVMPNY3smHNuTN4RU3vxcWGUxGa5pYVRqfiHaoStCPKPTcbF5qdSdLhgakTPqjUa",
  "key11": "3stsJo6KA7LB6iPb4Egcw2LvoQWMHTEEhPdJHUm3wr7LXa4mHax3xBNsy97Zh559ZHuxeEftLn1E58jQ3pNuHnFE",
  "key12": "4Dy5zmALm8P7RXmhgBCcGGY7gC2FB26jFUfV3vDgSMr1MQup96TXk4LaMBgmDtz5UW7VjZzv7LrpxPQL5c8qgWNX",
  "key13": "Lp6nMn9P7WVeTsjkLaKNxZViVkuevUf1tWJ7LgQobXHMTGCmUriArbNdNAmYg5okokRYhSbR1GkG1hxJV2H5V1x",
  "key14": "2nU1TQfXTjSh454fbKozgyGGZtKx3kfSypEF1Upb5VmU2cPPwCMwdsNCJh7unk3eBAkHJpfa2mUbwP8K2w9HhbyK",
  "key15": "r7CWGcRy3PSDze9CUvC6jbyw8EsG221uUkZyQrqUQhFdvXGpBLssrqQY8UJuTsrNapxxmUfwrP8kGVZHLGNwy3c",
  "key16": "5sT1CgQELUeJE2TGQjedT9RBjGsBwAq5JBUJncX7AstP6vnnQMSxYL7TBQRVebWPh9EXYf2tEAuUpTYRfuPpPsw9",
  "key17": "4zefh7t8FGCSKnSBdUBcpEsVWrBuouTRXeksAiKomNXb5gsfHgSqu23LVeQRiwTZGih1eduEoFjxSrReAunKYKKJ",
  "key18": "2JfLHuZ5QEAy6XaPNjVReT9MGBFiqNZ954eHrEUsH59kMG8sWgupsiaLix8uGFbodjeMkd77eE54Rx5Btd17T2uf",
  "key19": "5689Qr83vzHipvy3bWvrMdALHf5UfrPSZNwrcjzEXpNDh3MVViRn6AzwkFmHgp9sejJY6GhxswBAf3d4iZVbFQfg",
  "key20": "3DktaJEdhunzeXdDy2G8FmV4WMZ2ZBV8nQ8bbh6Jk9SjTPKdqKNQfQ9XaKRPR12MTbBmfHWx8tdFCCMvt14uoaxE",
  "key21": "2FmyykA3StPDWsr9xeCUBFpDksJtuU1pYNT52g4Gqt3z5gKgWuccekQrCa66DpFLCzBXrLjJjBDJ1SsNRNzBV9LS",
  "key22": "3EzXuEQwJ7jcBZY3r6hba86CMx2vBiGxLosq54tj9CQ1newMiX6YkDo4V8kEbRLqPhgkZZUv8mBbquqCW8xwovoC",
  "key23": "66m6CHkxC9nfsZ5nkEVxhiMcf5Xwy7Kj616GW7GvdyyJQwEYtTwQ2kkTVL5oCyjEwEZHBJmpShHpz46TxzSgmMC6",
  "key24": "3DwPT6EZRvTDPbNM8p5m99qr77WJeE6BoJt5D9NQsHWXZrfgrUeQWundMfxuTGXcwYhuRMMLFEs5M7nKY73xo8MK",
  "key25": "5CLd5ThfH5xPgzmeQSS4ajeJFvU3E3rXVfvzg6yAksK9g8UARQfnNGjQCDkRgMTcSusr2h42VShtQSX292exAdnN",
  "key26": "5yGu5yMjMRx7S6qRgFZ6VQE5nqg1veuA2FCVSdXWdzLwBhKbxTso4CYR5pe3aJNBWR6Nf3G9gYYcARmq4TvRvWmT",
  "key27": "4VeXDAKTFbeVJ1mgWji4uPiaFT1t7s8VW3A6qdzwkzrqqjktK1ecEVPJFpMYD2Jg2hvEUoYbepGjMfRkiMYsrLDG",
  "key28": "64AhFsgHr7zdcFTUWWHXccnKMK8orcvnTBHEAbAw6bXj9ME5uXopXYDWeBbFxgDvn1mbGbzHrYLqiq9VBwDRs1es",
  "key29": "Ta9vYvmeQL8mcxAJZYBiRAWHUeWQovrrioBfmuiNR8d2U5gDDYW6RvEWqDYDnqj6oLsedNaH3Jgo7Rtg4nMiBaA",
  "key30": "tHMLYkbAxNBgre8CHVbggsjH9saE17cSZP11HNdn6mZLfVW5hHdXoyXPbBDgWkQ9ynsyKgbZjQsCwHzfnUApmma",
  "key31": "2zRgiEodUqrMb35S5R5uD9SsQ8nh1STay9tj4Q49BjffFrXssXuMPH9z7y2S775sw5mrtwcfKss3YythJW9GdrZ2",
  "key32": "3sWMeHpTGCcPjmTFGW1aPB8vfNoVZqB8FXC3xyp69KEMNr7jfGgbjnsYoPMcHLN3fUBbsAn13VP7y1ZMZGwBtt1c",
  "key33": "4fF7YD8gqhcmWyB1eeGD8KdjSc69MWuWCpQ2QEgTCdoZ3HhpGcLPXaT2nAAEo4DGzjEGSDbm2rkm682WH7tgWnya",
  "key34": "4HdXcWk8exfVmxwf7F7jq5H6Rmv1keqgpVYiW1HAg1XU7fLMEyNKCrcSLqQGNV1Bcp2Uew8pmYMfbfq2GNfeAyqe",
  "key35": "2xzpanUSPifU6tuHPpGdeWhfjYzGNxFfVgPd4Z6dgTtoAMvURMxA6x3xhtA2UmtvKZaVKzi9Fag1LzL97LX8pRHb",
  "key36": "M56nDeMzBJDvQf2b8wHiwMHx9oz3zxpMHFqdJJhPicyb7wwZEuphd6d1tGJAqH3bc5WRrPed7ayqyG6pLo7iL2y",
  "key37": "3BzZ2PoonovLch5oaLbDpswAXJGGc4X4v4oDY9MwZvuYDLQNjVmqSL98dRK2dXmie2dXXYuc7DGgqDwNUb49QXqp",
  "key38": "2kJAQXamDjMGuh5xTSmPKbMa7vwGQjcxv1AajatH79etrqjRkLgEtBzXgj4zYSeEmPf93mPvHGW69xhQRJh3VKqw",
  "key39": "4wKDDjq5N7pRxqwcKP8PSFzmoewJWpD67e67jMQj4cHj48YYas1P6a6EgfnpCYp8znpTUPQQ7ASNr1uwzZKpkq9w",
  "key40": "59Hrg1ppq4Z4Z9X6JcU5edofi3hyZnpMe9TveHKJqk4YXgRix3H3nvmbeFKB4J7d2pFRVcRJGUiCjKfCdHARbNr2"
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
