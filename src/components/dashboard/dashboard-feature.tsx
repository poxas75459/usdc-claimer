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
    "5xFvaEcWBvXthhemarjn9bF3NLctP93LjHjmT3q2MhJPuEP8ni3awXZg21qicpXzmBMi7e4miaYqXHvQJpfgFNhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7sFAGdXLksrVa8TvPHCyvtQtTnTtp2rF1scBi7LtC8hJJgKkif8c7V3vfRDpHWJC3i9cgbDvXQ4jPTUWYpSnoo",
  "key1": "4ihKQjF9EJm5uwEewJcHx4uqdmU4oqmKb8TNFwFwnvef7y37LULgzcCxu9KoKiV3gTtvEQcxfVot9SGNHFbRRz4j",
  "key2": "2YZ1BfQppgs7SkuQip5wCDjrACtvejZRq174crLB3nVmzmE2F6jK7W6CT46Z8pdhNfSqSDeo18oaVdrfzaAxYAN8",
  "key3": "4CVNpkBGzG2PcT7aifEeP182ps19HGfVydSXy6ZeiXAEnYYmz27X71SaVCnHMby61SBL1bhUAD4hecAr5JDbgH5e",
  "key4": "35scPYcYssRjfG2QszX9Hn4kFSFwF9WZ4pYwXmd9tR1fWLFrEguR74PaCY9ezyvz2VAJLLEqz64L4iJs4gk1mpGm",
  "key5": "5Bvo459H1qTTr4ijhiD9yaCRJNUxeFWrXzonv9xj2w1fKG3gz9ckiL7CB1Cr1Q1nNeRhoGWhXyuuTDcj4mDHfkF4",
  "key6": "65PNR7NbbKPwq3f7yPUT5C3fsLsxjw9DbGocLTa5h5xR34KZMsdpPJBMbM4x7DZ54y9T3k2SAGQHqiFjHBLHA3GB",
  "key7": "3JUhqCH6CLAbLMFwfYwUK3ZZucWRnTgm7eFJvTEKucu7op9ZH2e9uyPnGuZhh9C7XNemM1ZhuVzpesfejy1U3frJ",
  "key8": "5swQCtWEC3f8XHoj1m1hHsyynMhS6MrPrSXoTg13gdtQ3T4uY5c27zh4ptko5235khHazBAKqfsuzV2MMgQEtLYi",
  "key9": "DyJUHaeeaJJkRnhyK1tdNoZDsviMhFYNkLsUX7kfUgfB6ptYwARK1fYLcbLYDyMAwNJ5E4G8Sn54beHtuGpn4Gi",
  "key10": "2FAd5LDNWNCKtNZxxLhfR4myXJBvKf8EnRD6RmZBrP7K8n9V2WcNvSNwKZT2UJz7UjY6brYpjGwy2Q6SH4JC9BZp",
  "key11": "4BGyEjerMTXo9D95Wkpnui9rFW98JvaGrpaDZa1eN5Y9gPbkC3WYoyzXocchLuRB3EByzCgUkWvanvG6yt6qowDz",
  "key12": "5HhQezL9mBPC6wSfuKLp41mamVxHEB1gEvdPxfTpPpH7cLpuEVKpc7ypfN3mmsDiVcUFFcdHoJ96fUPxUTSuZJWS",
  "key13": "5saGjV4i3PMEqENDZHmHbMzokZJtpb3oEdcmS6qJPPLJ1qyqshjSJQw2qdyvSRoX1KUoHQXhW8FA24uDT7Ns3HCU",
  "key14": "r5N6VEg6bY68cyPySTJc2aNLhwFET3Z1nJciU9DJP4JAg9dU7EmPsM56mr6MJ2Z3zdnQKyPFbeLJJs717KCqj7W",
  "key15": "4caihZUMAneb318G76u6U82Z4UR4r1zu5de9qRtBm8f9gWsxnVbcygDpUfrJdCo2MChi1xsjcsgDkKcVkmKEVfen",
  "key16": "jNB8EGFQrWfFx4jadMvwi4aJS5T6rgTrifTUYhcwSuRfHCRKyR3AMrUczfW1hRe5kTGbpWPWcGjBaKx61FDQLAf",
  "key17": "39remDv6hCcXY1dbA8gefWj4jy2dPRUxsg9kpUFpQCazrPqr18HM2UdAcLfdRtrxA2KYPDUJVrhMtaHqVedgZk3y",
  "key18": "4mr4eZugr7CyboDDfeV8X8e72kT4BS6K86h1u8RquNXSmXEC9naqNorPAyMzXLv3f3i7sVZoCLRScUXejT21VAAa",
  "key19": "2jY8SX2BZD1HRm9FmHNybVR15PDiofxYSDFALXD6F9Dq2HnZQMKYVvFMKab1uvoTf7TGiUQHHRohUxSZcivh8Ttg",
  "key20": "5HyBbEJcWH759Q2W8SRDZoATPTzVRf343Zem6W9WGSNBRJADLvX6JQSwghAPnuFkSabkgnTKrtird6D4SEXu2t7X",
  "key21": "3tyR4LGrWGxSqhUiWHPk5XqmZPRzB3Fpr9hchS9CurZ7zoh9JhWu4Sw9svuBRVbjrJaccFVva7zASj92qQgEbEts",
  "key22": "4ZeSwHgHeeYBa2LJbr8xupuiwVriUHttSPsBEk7xTYowWgosuLzjofUhtzTtEjT9a7aGGzgjsYkSWyf4S38VSPkJ",
  "key23": "eVzb2FU81guesNnuwXQKZjdUJCfLmKYP8tme1iL77frM69yjFFqA5sYC1jyVu8FUeLQVaCQxcMiJLghQTau2QQ3",
  "key24": "uF5CXzdBHZrVEJEZw5NtbV7P1ASdUAkVw3NV5VmMj1peMB7rZ8NGguDvEEBwiSrYxbF5aA8uX17ZiY8XmHrVuf4",
  "key25": "NUXoVwvPMwVKpGz5pYjdkzBkCxdSTojvFAFagyCQK6qiQ3M6YGLB1sqkEWmpg3ZpR24QTgCVuBEEfktHzHdEQ3L",
  "key26": "665ZDoRVVCDpynbs8u9FhXQvALZikQNRPepUWeTWmYfatvhTcHBDgGuAWAmkHB7aQTm4QBMVaGqTcrRFbCpQgEw",
  "key27": "3kJBg58Ssi4pTTidZuvzUUwi2HHygHNmE6jieT7jtGn57ZCEZRhYgVf9az9m1d2didYhvJ8VqucCLhJpjZPvrAkL",
  "key28": "2BYM454wemanfPARvxGWn9yTLFrvPQE2jriqm1y5DXzAEYT2Cagq6h9m7pMkGw5z35tYXQ7V6JcFtrErSwVBvKT7",
  "key29": "3kk1DnFuVFoak5YkMusxohEnpQ4Ywj62aryV1bmRS2DbmzyvWfsnXYRmnAY7zyVN9TvGXZBzDSGLY3VfpW2JgzoU",
  "key30": "W2GaHpVEe5GHEB3yX1CJUyVTfxuCrmZ7VyEFAxW8aRJj3Zyno1oPqiWVPu1ng2PDd5VaZB5whdTTu4tKvfjsxjq",
  "key31": "25s4hdoQzQP9fpRECMPbY3XUnM58f9WPkJxGQQydpjoVxeCecjdKEHAsGFBQxVGTLCVsHmZSvhejGvveYwxbuHnu",
  "key32": "3fwSfjFTLQjegU5xabnEpCuAoLqhZj1HZxTrKpPeLU19CjDtE8cQpFeN7C5feZk6roFz6e48mKFmm2vXAZU9qjPR",
  "key33": "66a8sXfXcCvEY63XVbvo1YMGG3LW2a5yfuGZSimh7t6fw4dVmZ9KaiTsGrPXv5xVDDRA8WujUtemQ84GVsShfwZ8",
  "key34": "5KFtw3QpBp7B4nSJy9RW4py2323sbqRgeQJFLp4b7w3HsErJfRR1kvGjkScpxPzi9LZ6zcWSKCuvCFUnmci7QmFq",
  "key35": "67MJQ4TAib1uSZ69qK8dtRGuopk3HivMCavyvpSxZkpx1BTczvCi5HzdW1qBAxAgm4SUY6rw7W7VMCJKMSZL5znc"
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
