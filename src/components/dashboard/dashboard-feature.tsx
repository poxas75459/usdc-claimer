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
    "6ae1UC9gH3yfM6g6Mgo1DbJZmRFuLdjeWYn6gTooxfAzUzUjeBLE9zZGJ2xKEjepB9L6tGzdtbB1mzzGyARoZuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8MN72CNwck45ysiHGTah9MS6Gjnbgxc2ZrJjzWZeptmMsKpCxxqAxD9cUK3ioNMDuBJtTweiLa6ESJyNUSfgo2",
  "key1": "4UKzAVNjSJzUSJ1Cff5SucQ8rQtkDt4JPs7aasuBuKm1p3T9Tr16wX5guEMs3yNjciLiNWLZWoSbyErgHpTHEHLf",
  "key2": "4tGEFjLTWZsQ296o1GoZWyqxQehBXppQs8W1TtUVw5eDccdij6N986UJ1tyywPJafDu4aUJhAM47tgDuSDoVgNcV",
  "key3": "4G4VeQiY3jpJfvUMPXtfX2AGRRwaBGZupnd2wtqomGVJ2XTB3t4E2kJ3KSfBMkpXTo2izvDpuXVisWqA1udoF4C4",
  "key4": "2uEXjzNABNL5SSJKErWFpL599vxwQBwjEocyLcju1vLSVqq2jz1YrfFfLzeXnUseJZvc9nEjgHri8nujfUxbXTWF",
  "key5": "5uN2Diib34LXaGMX4F56bH6qJsm2W4xDsz5J18B6jSqbXL2Tci4X8jGyR35YBMfe6RTMTJGHuH2b6itm2qaLY4eV",
  "key6": "3sbLJsHDYp2sC5YnuE3k8t3xj1hgWwci2yby9YQTdSVoTrrVkMMZ6nGrEY8qBTk5QbAtQRbfZZzqpHrG3ucwffZ8",
  "key7": "5bvB2Z4N34TrgKqdLdDufDg5TZ5JvvFBgWwNs19odaSVabmVwJep46mmkWR51by8NcyRhhp2PEECumsXvDdA5vaW",
  "key8": "3QSxEjsRndjqZXF1DUz4zKyFsGF3s9pp1H2RfJho6xKYWo2LjtEmY7poZm6LGNCHe3q93jUMjriDpbP24baBKMFC",
  "key9": "oLQbUBXD1927D5teeZXs1LSX4wB2UtXjT7oTGaWuE799ajfCRdqy4yyP9AaGmvVaWHwBQ7yHyRcmrCyJtb5D4Ri",
  "key10": "2x2YqirC9WDBir4CTNSa1ypgVnCvVEJq7BFhiVibcxK2v57MBwVrhbvvZr5PeNW3SwMcCG5mpFxDBLMS5Z8CM5y6",
  "key11": "2BdLTyJKGhHx6AVQzHdvGWGvVfXgvqpBsPqGU1LDZbKDHyHBaAs91YvRsgXd2WgJL46ukWGdAjivoWy7MqSAMyGq",
  "key12": "3g8TjfjwegwMC5iAqK4mtYCvjX9tY8VUr56xSQGVq9C9Fq5t4qAmuWP8ms4xcRTuPPSaZRd3pX7RBsgvbYJtfbmA",
  "key13": "3euC1tkpk6p1ffgXgbmnFbjPxh39QUDJm1vXpyu8zRjtApnGqcTkc7pTvDU44fdtMfrvdtuo1kmRyNYf8ooQDvP9",
  "key14": "5QCvT8zhLV8v6R7txkWF9UzfzKtwYCfRQ12f3x9JfVzQctT7R5vGKXAXfcJR4TjZtbZEE5g6LtDgp7qbeoTkVz4A",
  "key15": "3SiSUuVKazALZr5mJWV1TmCmSyh5xaHmwM2vnigozBoZYwGoeEMJ4fVsMbPnWr5jFyWT5ZZAQC9cJQMfeFjvyiRW",
  "key16": "2LTaAuoo4r7vWJhfw5tLxR9ysufgsRG45pZEqhsgT4WJN9F39bumUWgfDF9ntTkefymN4tznW8iW79f3F6fqkzCh",
  "key17": "oa5Mg1ym8FanybzwSX7NGjRT8skm9PZfpgMnTDYhsJ45XtpsUv5YTpvTttmkWF2anxqu9xa6vqoF9Sy1KmBfgf4",
  "key18": "512xUf319t5NJ4YkbdnAUccAHmZBES8MXbzEcxEZ5hgMJ1j8KwjvHzJGxN2QJSV3NhxvLYtTkc98stXtzGoaPjF3",
  "key19": "4C2tT21FLcP7efRh1ikEUn69N6gjdSGPgnc4ptHGoc66G1Nx1HJs64je6ayQLVy4cC7T4GVVgdtM2bBbjFwV6cNr",
  "key20": "358VQ6amARxUHMdbcmWcuG1wigzzkz3FJvqoBZH8tTRKmdvBhYNfwRBvYFeBjd18cLDuxJgkcGrJcJd1nQqFJmnh",
  "key21": "2qpnsqZJkHtcF3fK9EFWtErDPTKgiPgYJ2BqAMCRdBN5r8zA7dRsKUbgH8unUdQZejLqn7pD8PcjMng7UEgwikwN",
  "key22": "PsDiodW6Hj1rMoiCHRDviW98vt51aYfJ8vw1QaPuzifbXYA9g5UdSQq7N7UQeKmwzEiRzdNgj8VkeSWPHsuaPBU",
  "key23": "dQ98FmLv3gjczDY1ERwY3UbYFixEjUX2Hsydqa5FXYbpou23DaiTyn3XT76sqB5f1uVSiarFdaG8iRrcCRWVfVT",
  "key24": "3wjVZ15wyXacxSyecNvr9uB4cY28PZUifbpnqcwj7MBb2AT6NJXSNJi83YoEjQwC8aTGEk2Ec4Qb66uBm2VLE1TY",
  "key25": "4h22GpQMmc5ieZTBQZCpoaNL459oeFLeWHnGiqSBZgVzDucnEngMLRUmNtQXVNJHTSj2jL87wzNpYNtkvJWT1kXH",
  "key26": "5rijvdAL87xcTWwE8G7i4dyP9VfMTNgTS7XqRodpDZBr6bhBf9U9QFqqpdUG6mQuYQFCpyCQJ42eAkMQef1sCtfU",
  "key27": "2CNZttrcwGtNMvSRjpss4MbVi2vtoYLxngdR8ysRvL3aMiYr64uPEmB2jbiL59NH29NwgWxNXFnZZ1YrnTCDbk6y",
  "key28": "RwZsZR7pN6N4PMYmhJ3DK9MvzSoFEbqQS4bH5eUThxF5uPZVEMfbZHMV25Mqir6KFTr8HYfr66jq9dXqEj2sKju",
  "key29": "4V2tvhQAMj77FhdTDcw1478bQYhqpzoZzbXtbVUS7nNE7ioVoCVYGcLqeDF5gmKEvMLEUKLDwLuN2LENxAk6msZ4",
  "key30": "3ow5gPMzCiDhYYDxRZu4LvffdhAzAjaauM5z5GZr8Gs2gaqhtUh2oBEix1FXgSmYRuZXg3txQSSCfa52XH2RQh88",
  "key31": "5SmiTtHfw5QbKA7HVCExf4k2HPBu1RUERiv9JsYgLiYZ4y9qENXyAnRx2ki5W9iSQbGUMizJHd2ZBGu74sQz6v5j"
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
