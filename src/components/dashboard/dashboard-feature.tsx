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
    "385n1iGZowWW1F6eE1XYww6i5rcBuFoYbFnjv54v88ABQM3GvKu3nCYSJoVSvZahdgjonn5SCVBz4XVn6dmTH1U4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZnvXPNr4f21LevheEWJM71NPcBM35JCUrMGTvKeAxNefnkDGB4Yur7xJMaPMz4aCHYBsYXiNHAH8M14hCjUj4e",
  "key1": "N7bURjE5uxJMxQp3wmU7S3jopHWohFp4y1U5AHLPicNfh3D83iwUT7jPqoMK1k27obpf7HJXPaFZmj3z9HkD5tE",
  "key2": "gFGWSQvN31cF6jmxLeZbTw9F37VrcnWcFCduZQxctLpxmptarHM8hsCXTN2j2ptCjsWmGrHYfY5UvbLJuYaUpj5",
  "key3": "2oDm1qKtSYoBGSDRxJC4o2i5rJiX3t2Hb2iTR3KHNcSDHmMiKyspk3tq1FMzA44P8YhstzTzbHN63EKn8yCtdZhL",
  "key4": "2DwKVf3ispWRnE42NFPFWxfei7PV5JY2yTwFaDj3xa4GWhjHpwvAJuAh3XLEvp6qB6EQy61FfUpMsprxwCoXPKsx",
  "key5": "4RU3eqURgTXTvgBk3kRFhMeZriGVr1qEWJ3bXt4JMz6tFELuTvkJMRZAU5BwCKRXWqvzaK5CsBX1nGCPWahriaZP",
  "key6": "4V2YQP2FchAWQvbETLbrFkc3n3vV2xHDcMT9NC632GC2uaXbRzYJtcsNxfrg2zYdzrFfcT5YTfPmHpGm3H6TLawA",
  "key7": "22QXuEajLfrn87S5JVZDXfk9dmBWdg8yoqLm9dM8zTrivzqhPYJzZYjX8TfNNuipYaqTc12rU3jzNsD83pbrLY9d",
  "key8": "4WzYXgGqP1PjcNYVBjnrw3fuFQF8EBunZVGKuLptD2bgprjJqmzyaSvxShvFaZU7ZrhEtwS4BTvdrcX7gMNuhi7C",
  "key9": "3YScL7M3PES9NKCEMS3tn4qp4BUVLqv3juW4hGB8dKNs8kyLNmkczxnoiAz2fYPshpGXyzUuMuaaiimgati5Fv63",
  "key10": "5s3dbnUXMCXR2VkMzeFcggHmhphCqUHnykkksZihrVX1w545qhAhF9anghmTZv2y8oxG8vRAjfo57E9xnit2d4S2",
  "key11": "4hpDqXmvzceHAeub5J33FoZf6FSKhseYL289bhFNVa9kBBbSeNqBcDZQV4R7vCLqvUPsUEbX4WTTRd9HVydd6qKP",
  "key12": "2QQx1HyGbeKJ4xWcfnpTmMbE5Bj2JZqn61eLzDddEacmZ2qr2aT51FRbt1WcjcARHdSm4GCRki6T2MEHAYRjVsRk",
  "key13": "247g1spdK686U6dLjxUm82rWrP3wEsDFoZgYpiVaVAqV8KXvEWrZYCrk7KfVtDTiow8U2kxw9WbA5ZJeeQxXTmCT",
  "key14": "5YkcecARkwbTTkvr5oFShc1djwoVQ6MY8gYoc7KPF7hcEwZvvcwHaVRvatG5cjE19Pg4ZYMAtkxvzaCkAoEopTm3",
  "key15": "2KgfNEJHgDbGNsHp6cqQwNuHiaNqeEgCCTTato1SjnRRjLR6Yu3oQfUQjV737n5WttQf1zG3d9eDtUp4ikqQmxPw",
  "key16": "4VwS3dfZwJC7SXAkdQWjASRcTm9bqiyNfwJB6sEXZvbUwqYNsrc6HMYW1aZpcWrPDCkzMUngsRob4kFzmxg6brjp",
  "key17": "4y7UgBYimUi94HshkfHTvoAcUBW5Bc3btpunoWZe4ZwsWhgjkcnqz4kkUavGodVRTeEbfPu9Ge9MWEwj27cLxhuM",
  "key18": "65Zqpg2p2EEZbeDSCM33NN6qCz2h1owxQY6nFHXJHQzo57BC4fz2UAnZDF1PhtZ1muKZhouhW8GxRGA1mDxT9te4",
  "key19": "4SjFRtqNKojXChikvopSfnHwW8SgVqfmbX3A3VU2kGN9w4oCUKTqPv6hsmzgweoG6URef9hrtoGUDpAbNgZ8wk9c",
  "key20": "4Kwf1ZMsonk3GH4LeoRumT6NnUun77unMdpVBhupdQigUvmTNPjLgUGHBhbUPNu7g24z5CUkjGJAccCatehafVjp",
  "key21": "5A7pksMctMMhSJfcXnu6mgGYgDADroZnjiZwc9vU7d5mM6bET7CpE9JzzFwdBcZxM6HnLRTDoS6kzchvPazAqhTg",
  "key22": "pBRR7kA3rAn9SCHtJLpUhXGvFgHJskJ3qQdUSdJN19zhRCP79cfUgoencz7M6VUicn4SonM8RRdbqm3uxhRGnvs",
  "key23": "aFGVpvE6dcgtmoD7NmtSbjKWGtzi8cqDXqY5CeqSG52Lf4TcBw3QpGY5rsBirapZxxRaDF3x6sXCBVEs36F36if",
  "key24": "51gYd8w1Ey7VjtBmbQApp6uUST5FhJWPSJHYq5FVAeFj1xDkUBEbanHmZLTQokH2z531YGgnCqGqEBQxUa2wQuf6",
  "key25": "WTBbK8o4bYPDqQfXNSrCczHWLyaXU8uAuwGdey8FUdTqqsRxfLYg5EE5kiYcqZfpigwU1v44HuikoLJftwYhiDB",
  "key26": "2o5K54Tp3QRysw5aozXbnnNR8M29VE7DC4Ah8uwpgfrNTfTz3ca4n3DfFJxfL6w4YQQa6R4czi9PX9erfVkBBNCt",
  "key27": "5yoAxnp2nARH6VAUzXT7XeLSqH65yhFHcNqDKHwgJDdHmzmRXCqciWh6Us7dFVmAGYNz2B7eoo9vSvak7bZ9NbH6"
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
