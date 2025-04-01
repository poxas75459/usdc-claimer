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
    "2bEZxXTKuQen8F372KsjMLQZnpjpJaP7NkwMRsnKKFeiqe8k6RLZm9rVc8JAtsF7BbLBYg9C9oNizubajy28ADQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZFWRv72jXqBqf4jjNeeFh5X67ZNx8xEhVJF9cfYw4oKKadowfeSg72WmRevdrjmBoExQDf6RaS75DukzZDFr1N",
  "key1": "4rBcaJqHjCNrZki8fTxDA3pbZ4w85RuvqiqSLfEeojkeJHZiGzuV1yupNJhDDtM3BVTMnHeJiBHHiH2dexqsqQ1y",
  "key2": "2vSdKwJZwLrmYtGzahQdZPDc9LXDGWUSs8iZYTjzU9kX3hx4DXUFmP6eH9KaMvC39GyZQezMHM3SWtZV5QeWY3VY",
  "key3": "3nGevA58KAcPsxiXLxezneTJeoBHKz8q5SADDsHB41iMByAHNQ96pizhDkPJ1yiGtyTBcFHjNn5scaLDnxzw5sEU",
  "key4": "5Cets2cz4z87fxATJ62oiSwjAAqfLejZPZ92JRFvz4nPxmZiZj3TDYQzpqauJ5uhDVpSyENfUJDbmvwL6ietiD3e",
  "key5": "5MVMaAY6T1Mm1UdtcmXC4kbitXhnyCz3pnSBmq5k5HzQryyd8pMpmZfoTVHgQL1YGp7hcj4aoXREarbzvuDnvaNd",
  "key6": "k6hUaAz7LAPkW88KgpnhpVtxcwhPfFbdL3xRLFMF1uyZoQjpGqK3Pb2Qp4Mwyc35ApgeU32AFJPfiQfZQ3hY73v",
  "key7": "3PWeghFPpnr2DZjJL9YQw3pN7JRe4EcDReyEzP3PzrCGxvqZv7dSTpFgGtZ4b3KA59McDtCvqftArRa9yyqSNqHy",
  "key8": "SA7EXjhfqCpF4vj2BbV7PZsdLEmSUngRcnbes8knXk6wadhH87dbXVZnfZsmf2mKPzREkgJfifapGDCXwVrCPFU",
  "key9": "295edPYQRyoKbStuYqdrFLQeXWazE83yqLebNNWkZ5kdX7ebRizShmZVrc55X9Cvv65mt2moCigi1nsWo3mCM6vq",
  "key10": "24SfmJAfuH66EGyGWJF7jGCETkgzQownfMze7zndLmMTWnscwyDAzn5KLmmwNVLsQMdYpdwZKNh5R9CWoFpUzYjT",
  "key11": "3YZAMHJoTRvZo2gZnBuh4uVcny2XBzPp1pbe28cymQkpmaWnxFFepiJo3ecHNmJvXbsYhWsAp4tWfziCgzPUsVm8",
  "key12": "2Uq3Bnnodwu8pNK3Ygvd9BTJaztsYvjutxY2cUdJtUa3CFk9Rhaw88q5ZoG9o9CSf2g7wqEa7F75vR4NwCexZx9X",
  "key13": "4VP6SYq3bFeNsLPCvGzCPyytzLPx7bJcV6GnaPVkb91GhE4VGRG1hMtpyda1qs2a9EztkJ1fZifEPggLDTHkL2vf",
  "key14": "2GkDUc8pUCsbkK8J3epmNVxwoZh8UKtG3CMrrFmZczkU5gnXNxr3QxESVpvtqHmXj8UcDfWKk6n4qTirTn3BZ7U8",
  "key15": "4g57o9DtFskXRtMuaFLYC1fMBXbU9TXQFcQc7sCTgFu9RnAiKH6m2P7C3Bq6zjhCy3kyMqJ25UuF8QgU3jp3LqaR",
  "key16": "4S9REgDfWadxSo7sr2daBkX5xDvzpRycp6UUhcTLeG398LSE3k1JQVFhC3jsPwpdxEhWt4nscmgM9e9PymMqtGtC",
  "key17": "2AQxNzZbrtWevcDoskeBCueSF46rKpcXJcbz82PbYoZ3MYFoUK8st9zrxHVKzEWQm7uT153bfSePrV6hnd6LgDyr",
  "key18": "5QSQyKuDDTryoJdoyvN4PRN4mAhnwDjb5sDvg258enKYUqXP3u2KZEgzpJ39k6KkxECspGmuwwqWU1wBPsjrSEyh",
  "key19": "5asc83Z41xP792MdeBsKtRq82XLzDff7idZxAxS4fDxrbbwPJMiPh1Zoyr9J6ASWbJXzfPJcpVfq6wGqJiDQwoqv",
  "key20": "326pRWUCNqyUc8b5jGirZG4XomzFQUhr7iddJHKN46VcaUMGmVgixniP9mFK2bSE8gSUjedHDTpvkfc7gr6MpSHB",
  "key21": "5JFWwpP8MyzkNLhhyGtwTyKUC5n6pGrCEDiW3qxpMzEVtpxvFnBYg3NW1wKs3ShubL4qhYWmygXvc2FJrDKLGri8",
  "key22": "2f4p1ifRCRpz1XboVcwGdjrhYrZvKZX9EzdKzxhGEz2e38x2fnC8189xwbUs5hZEQhzXPJcEhSFsvsnKaYjZJkrh",
  "key23": "2vZgQKMBuDwzhyyiceXoiwn57UQQDrZtGDdkuCof5BFitc9Uk4jcMgekeom9f1SpHKzwzgFXDQVYxvkGg9W3xWJm",
  "key24": "2p8s4unpfTXRzYnf1ahHvRa9Ssfo8wJ668Q5FtxjgPd7UsLvKrAAZ94ChwyPrmyBVrtfn9gA917YicJUF2spPp6m",
  "key25": "2aQLd4QbLHmckMgaqpBUSTeX8GTqQMg2yKfvCNWxMr7dawndcyF8ZyFW6nCn3qwnEbmouLCQfETzmdtZwCuG53TR",
  "key26": "2F7ZELZ9GZ6QY7JMg9u9YBpegczoUmoZgTr5JSkFG2wFVZRWLYM2ckpm3ikTPKWbrvymAfLWYrh9cFRBbMtu3jxF",
  "key27": "377NR7D1ptRrG9q5KMyVfVdK2Dr9ABM1ohua4RnGx5sn8zNjfZk7qU2DCyDqXoVvvvk7B1y7vn9LSHwLEXXCY5o2",
  "key28": "pJNsyXBb91rjjh3ccZk7SDbtWk1tZzL1AGiiLLGBLyerZGrAV4BWbBDBv1nv8UkeNtJEtGaPaVsTiuZgpFh57BL",
  "key29": "5DAF9n4ViYh6jWGztqSsxDVuU6hsxs6rJLWyQPThzLXDHEtW6FYdtTNidKUN87k9s1Jyio2AXyMhFKtYTtyEq7rH",
  "key30": "3YT5UaeqfoK2aSsaV2G6Vstna3TCgvWPMybBreKpgPndYg6R2U4ckqPdwb955y9zxREEj9PRv1PLKEF9hEieFspB",
  "key31": "4hiMeHWbv5L9SWqLVeTsKWovnFyjo1ZxEBBphXEoeCWYLurQakfwpLyf7deoUu3GMGwQxtZeRqSR2SssETK7uXZV",
  "key32": "3RiQE5GJbECdCJZJtpiNtwprxKSx1ueAseyKiUzFg8qjHhBMghGw4oM6X9ePtA8FzfoXQfNLJobaQzsLtUpbujLB",
  "key33": "5CUYU6NtnBwFzcVnTiQz5cCayAzyqVBg9tpUBzpX9YnfNaGGssLDWzMYR2tKmuaQdLR9rundKWrgTa84pbw8nfqv"
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
