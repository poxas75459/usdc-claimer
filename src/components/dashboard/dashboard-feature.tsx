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
    "3opwfH5AfHqe6MLvDEWZp5fMdo1SzNhKCjztnfctqQMebGPZYGZShq8ub1tEiGNGiPwRLwHwAnVuYTkiFxAxZe7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrP26NZeU3ETLgsgetCjRg3FBGYMNfwCJFU4bUrK17C9MMXCSHDXpAQjRxg1F2krqAr41CarAAaL1cqc41F7DgH",
  "key1": "3XjqTfsWTSa3Tm4TzXPMxvsedXUqb4D8qqGxNXgkL4fFk6SzZpg8aXcTfKxzXJtk3JCHzH6RQv4hZHv8cgbwpxE4",
  "key2": "3rpdW9asS4GKe4GDgLqafxPZnpPBGhhABqvGzqC25y7gphURXxKofWeiFvJ217EabohCWLf798odXuXrD38Xt49f",
  "key3": "27AW2s4oPKVnmMTaw919HYat4NRmxeXYdnVkyNhGmuAc9f6Ep8iJVcbxK5UGKEwBmR3XbxvFnp3yyVuzxENvWGvq",
  "key4": "3fHShM2xmE6X2XAe3N2emZ8ncyQya8J42sa6yxiBEv7JS22Cq8ddTR2cQz565wD4os6M2Ukzp4Gpp2x8xZPFx92W",
  "key5": "4USiPYgPTVatEm6VVDotg6gAdEFddcY2jLjUZAYG34LWMSYtioYuQJdtu5z4ovwUaRm5rAzebJMnK6ZHUDPB8wp8",
  "key6": "3scADZvYBJvevhP6J6KpfbYxh6RmJqUczJYFL6oShiV5BTUdbTHFupisaEbx2BtTiQEdGSd225pzGe4Hkyj1Qmam",
  "key7": "2FCyua8SX8qv6HW2FqqDwZj96gTBZ929LHjGB6cLj6i65nPmDXYD2vaeDZziY5FpBwo3UcyAv96qBANsX1hewCdE",
  "key8": "xSpzoZSU2GC3zFbnj99MnMg4GrYxCunFAvAJTLHH8eDvJ1VZ97DFjJPKHzdXZhBxeKftdCKx1rqLaUzM79dtf1u",
  "key9": "55dBFQ7f22HrV2QQVsYP1bdHWkqbtQ9zweiUqiq3vzEHBgXSqu3mxK6EWXE8qSgtHsK6zUjaMPC7hVJkJzVHN9E8",
  "key10": "4wkuS6BgR1gDBeqJ8KXx2Ru9av8CUpdwznPNM6YVUP2ij67oGj3ufVCvzPdU891Rsee9PUAb4CYYkHVwvM7dF9s1",
  "key11": "3RbhRh2NXGrWoQQ3oPc4N7JaJkZpa7meVXTFHYHC1BX5jKiYi5ejy345eMiPzmNh17jirY2A1PtUZZCCY7jMXs7r",
  "key12": "35DwXBgXH9JUXaUbVH51PNjnPYWvdt57kMojV5Qm8XfumsrjtnNmukvoSZf5THcR8sR981DCXAqrYUDW5X8Jb9SA",
  "key13": "5ffCTgVr3cSNJ1bGCjMTh1EAvincJLLWbE9gL6zAivwqXXUJ3ax56R4efvDafc7uC5A7pL5D4BEBmFCXgHdMRjUF",
  "key14": "5UTwND1pFbpya82KRXcENZQN4HT2r4yWxHA78wrsneZz3iJ4FbAsNiwnMfN9KAZaSgzrrW1TvsixjxAuqrecFzBg",
  "key15": "39ujhSqYiYErchhrHoyjKYQb5PkPF9baWnNJsN44An5Z7hEi4zb9G1TbNRPgYU4PGbcpzQjh6XsB5yeWUZZ7e3No",
  "key16": "2TWe2dyHhquMVrvJdDU8RL5kXwMwiLGissuSNKAUFvZop5jE4MuPvtvatw771R2mbFSeV9MDEShBfgxpu5JVRXuT",
  "key17": "5RZRodDiqFTwXVYpammGuShpJfaJE3v2G4onVcEfL6ycRV4SnZ1sM3zKUx6RfKvbXpFqUFRHj9DaWhmVnfZ2ULRP",
  "key18": "2XZmvUiuzExwF5c17tnLa582SQR9yxWdUZH7KcLVp2BLzrxA2E1gWKzyftsANEFjxJgiqLYKVurcS7HEEYnMHWgk",
  "key19": "b5LAbuJh8wbY2Kn4fr8VaNaSppjgSGjL8aQ83ddB8NFb2xE1YLowdhRZGtGZHVf9GtLg69MZTKPytHfbUq1oSFx",
  "key20": "1wTCJQBQRwipCqsjbSCnhbzikVMWpyjXoLrpAjXiytPusXEEzy8ZWZFAZq6bpa3X4ETsG5GoNxC2FMf2RiwxWwn",
  "key21": "5Ph2EF8FhLrYXXtiBvGEK76jM4kh8MfkDmztKhEs5DiN5DfNSvBnL9je2nVfck4V9iGFsBPHKYhYuzcPNHiL9Xai",
  "key22": "2r57gKqgiAx1MvJQtExmTgC8zvExSaAJF2tzWGJS9sByCsdVUVLmATcDV8CJNr7AhQq9UvJ7bWub8idCwrkrntJC",
  "key23": "3B8T3xTj2Yy9S9C3vgHDUoZz9i5TJ7iba2bkjp6Q7JE9CyUkTRyS4zJum5FAFviHc2wxyc4YVW21ja4Q2EJTdmjg",
  "key24": "54gE2bvCgmHVX68MK6beGqfLe8xuuGevFEYC4EiVACNiGbhLUdCU33mbfh6Q5RwcwKFZaDVjfvcMo5nRULqUZ5Uk",
  "key25": "evx9r47Fu9ie3YJ5tb2KbmL2JVX4Fkzz9kVrnYokxtV17Hb8VpZa7ByTxxgAp1mWw3JfU8tpUtgJeiwKK1Ayrcr",
  "key26": "5J9KwpVqNjLPixhEb7rhK59Mw1MHiCWq6RMRgy2C1aXWWGYwjdL5U14s7eqXyi3iLd2SDcNedpabUES4Xf6VWE96",
  "key27": "24i4xSt4QYLBWKsoGhxwTB5Xe5SBhLzTRsJWTBwNxCGgEaPvU2dhfEPTrLFFSzbcCyPt1JKS4q6LrrjsBEGigHKQ",
  "key28": "33Li6g8L3BcH5MEMikdeLjd7UeoD9fLDwXsPfj8jAAjTCfY96EYxyhj5XQd3j8f39w7BsVNZmBY7FJQ12TS3wVnK",
  "key29": "2G5PQbkN7FUC4TjmH5cRhJfWq51DgmjoqxgWAr9EuNakMAhmMgpDRw5fh1Arva9KyxZ4PwQfWBi2SgyvbbePwUNN",
  "key30": "5X8kjTCuHvf6zLsqR2S9bxoVaZpQNfKiUve2fAPVSV9sU8dw9gZXWPk17gVRdMUHTwW9HjFGMvXoGWWkmw8urYoU",
  "key31": "3QjazM5kHGFQwRQBXGvVpNnGbyo7doFxJyQ1DJyvHZ7Nj34MDfZjZ5843RDHzaVm7Qp7NbW1bWhai3Ep8RsYKGpp",
  "key32": "4DoThBwXFcskuekgG6rgzLAMYHxANpz6KKP57UhENLLWGcRj1bRyscqK3gAQHwjCBGrJLMURzAAiUFse6roC8DC8",
  "key33": "5jm3SRLEixkxArLkFf8xYfHG7fGeRgj1mtwoJeBX8FpgabS4CjrgYVhZwb51YgZJQkB1oEox38AWH5qSdUJijxL7",
  "key34": "52ugaKXiB8njPBdL8nqaQtsdHQTAWTR8Z6EdSLSFfeu2kVWJRfQakGbDxAZMLxxLUzv4vZn6R58b7foDVp5vvqwb",
  "key35": "2DzddgutmfKg2D1sBUBBvDiGc4ppvELiY5D14XGffSmc5YqUUAaZ2hU1jfXYoeT1Wxg3UtBxBdFmUVNVgHQo9d1J",
  "key36": "tJao5Ecpt9puDjNzBxw85WnEMh5YcPgQGYvD7kVz15wf2BdZw2yzjV5NajQXqv5MS2cAL1WF8XjhwMcek3RLMQT",
  "key37": "5s4YgB4m3HiqXz7RjsDfpdDJzM3LqYnw6J28c3dtFJkJognj913S4o1EvYArp8mbRRoSxY53ZZ59aKgYJQxSFfNe",
  "key38": "2vy2WRU5bh16pPjLMzsQSxMs1yARkNKAAgCGnKpknhAAYwXLrA4ByumP8fmRJK2Bj9yAQQFje9gsrRxiVu96g7QK",
  "key39": "2cEwzRgaZx2ZdczwYb2sFkpYbF5xvaWtyiXMHAtbzxmyCKHWB8qDTrRQJtVsrANtqLvg78RGMeAuLiKtr1YEg482",
  "key40": "2Yfj41MknftQPzJcd3QaaouBqubshBZ2ddxMctQYYtvqgwRyZugbsueKsQrrKQ4AuZ6zcmn5WgzFdUxkiZ7TUb3K",
  "key41": "3LHTaSp9Ce5Ndx1PmSVW3q9GtpykUJ4fPEidDenTnRv7zdBVX5D8rnz6hVpa7AVQou58YbXetBG6ZAq4xkhitvgx"
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
