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
    "5Lwg1KTpJSwyEcJuLaPPHDaZn11BEzRu2mCHqDKx87kxUUzKgV3VBWXgF2rdmFokCZa2BwY6FhtiuvpVEqr3hucs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qbhV5KwKJQVeUUDUxtvqnFY9mnXFzjeD9SGnGw5JPUHzbyhYLyZzPUdHM6JMJaaNZX4etEW6EAr4a8svPFzsb6",
  "key1": "63WCBDNF4UBBjnPBy1ZDuDC9iieQsbkXKv36sTM91udmPVDR9HgmDMVjq13PBSN6v62uePo2Skcjy7FdxfRBVhFo",
  "key2": "3VAdmzMZ3yVoLptxrUuD17S7wdPU8shkU5BzoX912tJLHa9puzn4fhA1TWB6nq69BeLv6rHDWXEx9P4Go9DFuvzX",
  "key3": "3uEwSqEXPgh4v7SKoENE1GhKNXJgAt34pERahxLMmMTEwVBnKQo4wuQ5yPaubQYmqfKJuszuo6G1whbtDfU79TAU",
  "key4": "3kv3NpgcGJCURL4EMQVFMFPf21KnazxkFq5iSX7vQQZxkf7Mf1r1uH2Cz1BGtRzGKZvQzbgQdMHnfBcM38qm9GxB",
  "key5": "476tWGoaf8emiwq6kDpku2NtmHirQJNfRg32FuvnU8YJs8iBqvAVsELDQSQyPVczJyBWGq1kNv3EKZkawQybVgBz",
  "key6": "4k2k5iatTZjjuF9W81RENZuEZKHhzG64mFeX7mMH57FZ8eMaE1BpQR7XQZZo6n8QN2B2JnBVmWg3SKJWG67jPkJq",
  "key7": "413vojZoUi73YXCu8pfPMtMeqWKW7MTu2x2FwF8RXsgfyLj5NMsLunUfBRz9Ka6KJG1Ae4Z8hFutbPzn2SRW8L1V",
  "key8": "2sEb5vqQ4qi9SBAdfMedyYscH7v2ciPLoHhMdDnPZ8QwtYCfuUabSJm7cRHKUbVcnS1x9bHCnpz14JkhwkHsvCU8",
  "key9": "2EDfyLLfZJrRRkmfF5VYoXHDorGw7L6yLRAJeEAe6vxceGitUFcHp5t4SJafwdjo917JxNSHexrwBaks4vZRJ9oY",
  "key10": "2uUKhzd7AryK7o2hXkPnyoqR9JNGkS9H16ViekCiHzhaGTe3vut4jmipPTCtdpzTmo6PuEKsWBLsoQb5NrHz5mQt",
  "key11": "3r6GBcAqNfKso6RNR1vrtjGb84f9oGUtMj8kABp16kqQK1GGaspWzF3UvvfqgHwXfMPfSyFz4DsDey5HSKWZdtaS",
  "key12": "5R1jyqW9Ym6cjHJpRoxcieNmAJDiqAX48cE9p12UaRyz695bPoQr6RX1vMKY7cJy22wPPaS7UtMrvM9DXAia9s1k",
  "key13": "2kp9bYGipzhQWfVqNE6EcByykPpHKQrcYorPyzJW1FTtLb1ENL4yDwVXanqVXxztprPF5uYu4mA2fXaCVGQj3rn2",
  "key14": "5Z11BNXqq1KCUBgL87c6P7mznmt5FSYrMJYQ4oZ6xhKjL8RrHQHMdwE5yXsKsf2YTsgw8vnfnYVySvDwnSesBjxV",
  "key15": "37u3ScCAU1VJv7d6mw6A2xExZj6ZiHMpbhvKRYnhGu4gJhFdxfYNAWj7i9uEh4KvnbZkev6ZqmYevMC1RkmGDgiN",
  "key16": "5q7BAZpb4ar6AAqAsUHkoSJ61L3bJ5xfGdR3oY28RfJ2XcVXTUcXLnHHGTgo9fzETpMG8B3GQQYEioc6v9qwz8AL",
  "key17": "5taZgN4PqvMjVyTj5zyewPkNFFNS6xBo8ZccoGBetgwSJpV8EZ53AcCsA1CnYZvdcGPLKeZSp4gin6tGMPQsyprQ",
  "key18": "6hCAita6gddpGynvWhKTxUG3gGwNWcfe51yatK3FGvKPh5iwuWFaPNRo78fB1CJJb9sU5zvsauk7upiRCrrnUfh",
  "key19": "fsdArHjGra784UDk4LiVJVA8Jzydq6HDXiZujgj3oTLTHo4kjBCdykY7W69CS6ftMu56VHuZCTzfjkCBTr1e7VA",
  "key20": "2W8vYzKyHsGt1dLYiqpyPrhQ9EuJxCxTDx5zrjU7QGG5FtMhE9bciqXHUYkugR2tvUPvs5i9t2568HqN9T28bEFu",
  "key21": "5bUL5HPZ95Sm6BE2S2y4xdriNE2KeHtkBmBuBLyM4wPFG6bNRiT2fUGoahqs4d8bwNr52h8g3K9SpsmMFEzCPLzu",
  "key22": "2DovBEJKUb3yJWoa8zFdaAdubkaZPiWhpDpteGy3gh3MMEm2R4yyazUuRqg1j5NeBdmxzQm2cPh5URvkpcLev8D3",
  "key23": "2hkhhjUHiHF5iYkjXYCDXgs7yJSaxYmwBouHYJV6u9QffsfKgq7JuAzq4ETJE2FpdpBNrYFKdnYjX8NYyUNuor27",
  "key24": "5DgXKjwy5M12hiFREvfLdVhownNHPsNpoKauyunrKMYieQXmmKhHMcHTddGzmrsXNLnLfZnCTdRtEGu9bq5ZNcfi",
  "key25": "4NtvtXC1E6LfR5YHL8muKXpj1gVSz45AkEQJtfnPPsuj4Ms2oRVKMm8rRTK813Vzhn5Hy9Uoj7pRzpsd5nRQpEme",
  "key26": "3My7HrNvoKKpF5ZPxYvg4R3u6kQrXpSNbrw7JBSqfWHzfpnn7pATyETkppT6Uv8ZSFiKx1twDxMB1hpiFCRKwjK8",
  "key27": "8a4PVCVX64gep38ngfRq2mZFVmWtKkDW6cPeLcYBpv1RyrsvMRFwMzc3UeHxwaXXhqNsH28surhoxYoNoeMgCuP",
  "key28": "6T3vGpJeJU3DKzZ2TfetqiRsGRrhy5bgTCo5g3YbmJXEEmeHY65CTY8jqyZPyWutPd8t69ekNfHeLco4z2vmD7w",
  "key29": "4Kcc9Gzp3cdY5yFHz8Vc7qqgP2yG96JVjMqm5qmgynmxZLTNu1vwwXxQTYym42XLpxuVw31m7fr3Ev67kXXK8QvV",
  "key30": "4g1Ppba7scWAydwWzfD5MVxNdvi7Nq16zVcLo1z1FmmPsjsrL9bLDbDDPGLyLUvM5v8otm3jgWJUEuNVnyqKaoVa",
  "key31": "eVqqzABHNigC4C8PyMYTFW4BjSrMzgwLGo3ZFqDthDF4QaZ9wu5CEpFF8o5erTboEpmMj5mfYQJUFioS2z9MX5U",
  "key32": "55xCfzLmbbpcDXJfahHqZDFmE1SJJVKLn8Tmm53ydXvJ3wRfhqujE1JBmB8NgJznS9oorphJX3engjMgA2UBiQB4",
  "key33": "4Wf7d1y8gaqUFxfvvvU9jarA7fn2ofc7138C5Chv1typ11CasqwmrST94vMu6gjUpLrxBjYQEWnPAnwhpyPgJ8hc",
  "key34": "55e8FsYZMcPvzU6G5vE3joQFgVriZ9wF2HXhRByS51KnctiAxi5wjrfM6qqTb1MvzF8nDVRPpZoc4Fo3qusREdVY",
  "key35": "3uZ7Ji88QYZyB5vwtsk9GFw3KhQctx4oXA96C5bnJxnrSsT8Y8wtQBitEZtqB65y4uWgb4cVDBGNae6QX62SuCtU",
  "key36": "3p1pYyBkqWLAAMi5nx1AuZCBUz1py9vbnNFyKP5CUwZVhEmjSbXFnoTBt2cy2no7JoJeZaMuiuDJ7bo9M4mhUGyx"
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
