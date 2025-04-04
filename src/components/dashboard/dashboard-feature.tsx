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
    "2iqowwfexPZVr7reAk5p7MAF4iboaAhMkN7yVn9FK1oLoeFGgXh2fQv4hGz1DoKza6P6eZ2eg288HahMupAHhXdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vygFoN9K4niBSKYiGJsdKS24H51kFFBQCLstgKUqyKJEkbWdw8zAYoc3WcPqmqaX6LqmiUqqcfXj3nSToezqLqP",
  "key1": "3dy1RmR1Jt5KDBfpveAXo69ZjpdU6WdLhF2c14gibxyBFanqtddZNSDHbf4DPkywYQwdNULmq2hCa3eBjeu8JZiR",
  "key2": "46EdiYkXeab2uwGNZt9fNrrSLQz8x7YXCRmyVjUFQ8ypeLKd9SqYfmLKVPn8Pe7YkAtihJgUhvXMJq59rBT6tjxu",
  "key3": "3xB5vdFxKxAmA4AAHYSUvFGvycxUcbHHns3vrWRddNjdzWFTPpBsxAqnEhTLa1F5mE5C5jjCGkdExzx6G7m4nh7f",
  "key4": "2wP5rr14CpT4YqYMu6vaEnF7aimmbHtNNLRRvijqTu41mvZHRKaDkQrbvZ5g7qFFxH5V8agem3ChiMkDrTtvxmTJ",
  "key5": "51WfNiWudJsueBvqm6b8pdqZDgr4gkRyPQ2dLSaddmEGkyrbuFScxtbTpbkSRu9irWyRLN4vW9uq6t1qoXER7DSE",
  "key6": "3hzSHGYTzZ5BFbrRUrLgwJCP8gKjjCCxU5GoyWE14hN2NPZ8a36NsiQ3yvDf54yoJeeVjWne8FLsGqNAp3MoLci6",
  "key7": "2EXQ1TQ9h9YbanN1MB1GYPvhAp2uPQi8AHQ6L8gyjAhvHgSSRiUvMyNsRjmnYtwNgzUQ5Liw8saGQr2WMrCubVHH",
  "key8": "GLTmeSPpD8bzsy3YDmhD8EXwKhF1wkKiK7k7Fndr25oMexBcsh443DV4W3fFkvrZ8nntWAF1FaQcb34XLQbqFaw",
  "key9": "28oExpTgtcCNRgp4sARceWNzzqAFDgKtUi6Gq63Hqbr1FHcQExV8SJGQ5wk8gTqi31189mvsdj1ab4YG65UGNUJW",
  "key10": "5gF1Q9b7R3q3qZoQVDwXQo5o7t32WYxpDVYawCRMxdYw2ebLNZ45p5yywdKChadLSDuUvgExBknjGEJ78e2esfDW",
  "key11": "4oPwDhknUrfQqmdaqpZtTJh8NLrijnQhMBQjVdmtrZRffrJ48hPdYta1ZfEWTRPz46xDUxxsohodbcyhBgToxDuC",
  "key12": "3qEZ1Vx6dQTbMc4XFpDjdNMRiMCEz3t8pSfNgRwhtxZ2ntaa4UHNAXMxUfdYKsxM19jHhJGPHPD9u2iuAh1kLbdh",
  "key13": "4g7YmXteCvm8TBjH6EefJHWQtB2kQGgZMf5EnvW9kvxV6X2JEyfZJNhrkdALKrmnAoq3RhN9ZqLNSaDW6ZF1hm3N",
  "key14": "hAhFrvi19kqWA5AxADVATKCszxNhFD8Qm93Ny4MEPEBNq5DYJ3vpzu3Ci5azvqnhk3FcbpUQtetbSHLnZ1JLDdK",
  "key15": "2SnoXjhmjmAzdJmiznY5MS38XMSGGMaiNuoXNsnmLXo1XAX4i9LXtvfFZtBXqi3zCTRpdkLG1LwScbhwEz6AZWHe",
  "key16": "4nYG16YEosxcmrbjsNheCDXTwQQBiK1CRKdarJrZkPqagsqaYAkqgy4au55WPzwoGDuNvSd1VK26Rqw7VntwLV6g",
  "key17": "2QTSB1GnV4WCF2Y4fX56jz31ASMXpy9yQNGSPoj6q4pzmGAeEf1mtgtzRyBCK7mzQQXs7ckzf8UTreVdPwmJ7YL4",
  "key18": "4KMgJ74ebSTXMpHRzp8b9C8cj8eSdQT2sWrNY7kqdz9ybJGU4uLw4GoZQP76CpFMJa7YficUegf9TZUbAosCCLMK",
  "key19": "fM51HcAiaEYBRdpFWaLgqj4PJx33ZMLEMjsk73WFmzyMTQbdrGvA76yPDtFEb3wN6J6PL2itm8hgh1foobDT35C",
  "key20": "2AQtzCLUjJUFrQZgyfJ5UeEKABSLn6JawoyEKPnpapGzkN7Udhpef7KCvQMiUCnt8rN5b62dBNh7ozkyrLX5MEFJ",
  "key21": "34Vh8bTyzA1LAA9X3sLuWNMQKnrUCYfnb3m2NhHspzcFGRqH9izWMhygepZCUrBZi6LwFm2gtA8cSrSDbzr82SCn",
  "key22": "nJWn37S19CjtYm6ankwZfXFKPE64k1AuoCCChSZv69uk5AzaDm68WeJJpPcCfQmK4jGZ3wt19yGE3jTVEVhLfrL",
  "key23": "2RMdhraEztg1qyNBeSHqSN1S2ca259pqkkwd7sctyHMeH4WZa1rYGpqradBdyb4LH3he8mcLwJkx4wVcScwwy61C",
  "key24": "4mMBv6RAjepvTzkuRqZZdY4fP23azHfeeruRfrN3TLKyQAvoqeBMW8CVdf2SMtsNP3MQqAXrJ9YwZghWEEU5AY2W",
  "key25": "3kzgkoESkXKtqmUY68S1DNoToqyXfVNf6PtZJ6rtdVekanytuhwE2MYzKSnHFWuPoh2S6XJTDa541LwXwkHCnQH1",
  "key26": "3bkLpG3GMCLQgHe2j5jHEczNAWn2C2VMQVNvSh6rdVpvbgTAPVtvgnY9jH3EqAuFpWQiyG4CTfmJBZQz6cELrCPo",
  "key27": "p2Pz7GDEh8cuEjapHebUXcvzHvzkoatCfrThTwjadFxnMngKrySF4vS55pSqho4TRdTqztS1A3QrRxC6pw91c5V",
  "key28": "4UMquuEUVfbvsHcV2ux3SBYPyFKQHGEDyNskdXYAVhAjG8cfvpMunaws6nkMeVE5XQTf4DTbzms7tgyVJFrLFogk"
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
