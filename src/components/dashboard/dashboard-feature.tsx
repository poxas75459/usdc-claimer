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
    "58GjrvfRaG6SGkbgFjFpJpSoypGmvpQQVFLzSCBudy8MwwsyPbo87yT4Y9gLhqs49kWnRmko97rgoj1Z4wZaV15G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1DmksJP9NPipdTGMZQN8BBSndVvJKp5UPTr8bDTRb9GHxHSnJvgRH5ktnza1JCaqimfyYcsFrSGb9rXJ1H2r19",
  "key1": "5saj96nGdaFHWutesGge7tTZLpD1g5ca78fob317ij3bmK9iojZF2QPfWQVi54XErAEHS2w4CbT6JnGmtk6RfhoX",
  "key2": "2WvFQbkXp6xM5vAM5pgbwJYaogdv5W8ufUH7qSrVLfhoqW3BXJ7GevCH9vPxhUWPJwKgvNUrcjJ5VWuyjyXkeD25",
  "key3": "4taD7DmxVafu11dmamSBGagg4f3gryDaBjuS6RUVD1SSyfp6DT6CxcxompVhS4cMkj2F5Enqy5JJQJwnRkWWzXMa",
  "key4": "4wCK6ct3TqLcS6mL7jD4NBEqaMgLCsMEmzQ9QQDJz8grAkZU3bgweYUQUpUCMF6eRtyEhNFz57jr8J6qjm3jLsJ1",
  "key5": "TuhTMGhZYXUDcGjSMbbQiASyUc7u6K4TQJyP3ttiQTFtE1mAZAM7gUumTDjLQ5LnQwtt6841HtV3sRJYcbeT5sj",
  "key6": "2qL5tX8r3tuuKrk371KmDEet3nzomTv2cW8WdFeHL86HsWc4Fqgww8k9e4eBvHACr4PnrYVua5gm3wWVRcMRVwbP",
  "key7": "27BYHDXW8kwktRj45vMhPgZpwBYYTNTUnKjGZS1gu3EiHSEnE8k6BsZCRA6LYJUWst1Qop1GarJVRL6LWvnqRnkD",
  "key8": "2pK7eeaniJkTV7J9u1BPN9EvaxcgwsVmVCURw1HPjNdYs2GKLPdowjKH2CMchXgNQZSgFiAUJAdnCvF4F3XDrekt",
  "key9": "5iprsCAt7EuCH75Pv5xpm8XDagrmvDHLmcHBm4Q8RQjoz7dwpY98co9dpzNWyoKhx8mhnH83S7C5Dr1obKbYX8ZW",
  "key10": "LoxNf5N8ebDxrMFKHWCdKaFoHQZvCgur814BZtzbkV28MUuFtYo4sUbH4Mgnqtk3BVxNpDbqPhT3dYRGZN6UJm8",
  "key11": "4oSFcmhVFfMa85PKEJSJMHdDw2PJwTqSGWXTNnVwbtQZPSgDYB4bAFFU7stfnroi1GZcxCXmd861iZqstHUJfYNR",
  "key12": "2MpweNYumAq2LgztgwQZfToq5WoM7hGGXMDjgGx481pkWxLE34FKfjP3bNTNmhZy5ro5yhARpdmnVpFxaHMc1MTF",
  "key13": "2u8MJE1nZrUC3hUDsmecZYS84x71SGhL3TjDW44DZRJPtViV7sQ5EYccJemfmd1tnEm8FLrijymcsrqcY23nEka2",
  "key14": "26j25EVpbzKihEmJPzDULP2m7fW95vz7XCNbzLjAgvNbxQR2Gc82DixfwTAvx1cYdbvXdCGw51kynJFJtHnZDbDY",
  "key15": "S67xo4Uj73xW3qbKzXD2hnDF6JP7b23dadG8jcLTW2jVyvm55mJLcA8BevurYHWfWMyTEJpKEqUqnLhBppWVdVb",
  "key16": "3Grh7WTuApAPxrtLCUMS9ocj45T13aPi7ANU7ogDSmNuLdAT88nQd42PwhUV1vW5vGkV9HBL8GJbdsrDpU3WD6ed",
  "key17": "5eY1bqsGUVyrKdWTXcbr8uDRF16fFJthBRZEdWudVVXmpUwfRGcf9B5hEnW9YFEMMeSUzK2bjGuQh9cfa6jKX1ZU",
  "key18": "3jok21LXorUc9xacrqASN7XVh8CDBoKdQvow2tPyiSS57xiNxGYrJJTDiyuuab2g7PdSxypNa3p2QFBcqB1yFQeS",
  "key19": "WzmZGRUKdw3wcWonFUgbs1gxuZhEZuSMnnVDERUiH2KdWLV4Z4Ye8TjtdDm78756WjnjDnFs4wtwAHvhoho5Lsf",
  "key20": "36erDHpwMnUMZLH4iUAB19AqGU4xK7aHrJiTeQ8aPzWPNKZK5B9K2eHXoshrTZ1uaE43qUsm8CLThdTY38hto7Uc",
  "key21": "fPUoVJaYb16BcSH3U9vC7CMfFTBWYXR5wewyY8kLZDu1YiVwoDWsAvcHXdcAPCybmJy2h8VuTTFrQoFw63Qxb1d",
  "key22": "4s2xsF6gvXPvLDigVEj6N2DjZfFg4s3CESeCQg86M65cNyXZCuSHvVKLwxfWJwFGFy9unykfzyCRJRpkM25j3b2o",
  "key23": "3EvQdJbMRKj7JGULbCxvHkfFcmWHrDxaN5JonagB9WgR6SjzLhPgcK1hPewYMJRkad5piUubQV8HMNiXZEZfvPH2",
  "key24": "2eRgHmeQUXbJ4ykgMaLD2wvqQkxDwUzFoti46M7etGP4DJRjg4YLD71JjN2RdB5ExBcARNrb6P8JyNgiN1FnGccv",
  "key25": "S6A6x72SN4eKDyEgbmrHPtDMJ78EMjaY3BZmufHBX2LSwrM9uVBVAq7U9LNsFDw4xkPwJDZpfENofqbFAohQHh8",
  "key26": "5Ay4eUXihAN1AgJ71zese8NoC3FYiuZnbWVV2nYJdG8JUBikXH84rFgRofVFEaeuKAjrZc1QPYaAsHMYUS2ATjAd",
  "key27": "tcQf1r2k4J3LcCLipP3Mf7tC3aNRws7bQL8ShBzkM5ryHVsW8eoMHaRNv4oCHbMxNXb9RyCCz95h8VtNbrpK8vg",
  "key28": "5BWbhFEXMh8z4TxtupSjKwZr6bR29Kpokf9TgqTXZuFPhoyejEJg44zYJmPioArVkoDecuLEVqQ7TnfxfoNJubD6",
  "key29": "2tWTBodh95zB6Qa8e929oroTirsyzfkaTQRR6itQFzpKP92M9Gc36DCaYb4LipYaR5KmPLRn6vR4Mx62s5226U11",
  "key30": "BQFpfzaadAxwCDBRu58CnuBBRzzuSFFZi9ttHwZwKfnCmM9Zg6RHUaz9eYDVvLsbPhEgL3nEhFfNF3gpN8s9ChS",
  "key31": "4A35W3LS2aeUV7MmaVLKt9Ks2keT3hSwHpbLrpvBiG7JKxLRrBWpiUXU34PW2QWs4YhbUK5RuCVqA3LGuZHz8BQD",
  "key32": "4iVyjHYScG1dYuCjXYHrJMtv2NPUESmBNP4hQZDxEDopVG4EkSpLVpcrVwmpupyc2etHLjeixgeBrxvNgNsiR8Zk",
  "key33": "4gZptiyeYk9VYUcWWRzrqXEgpWBtdH2heJJUGymsUFPCWVPXRuTU4fRuDMXgkmEVKTHVrnJvNk4rCVFBQouV6nge",
  "key34": "iM1aYF85BucsV8XQbMmak2KnH2Xk67PXjxoMbNzDaPMjP1zD76ZEvctQgK25vRoWvfr9UckbjVpcvFbjQJCssgQ",
  "key35": "4UtE9ryEWE7w8HDbpUKBA3H1SmyFNc5SQmScGWpS2QGQrTtxTzMGfhe6KK1QpU8wRQHU9WntaVDcQ9QQJWive5LA",
  "key36": "3eU9AzVGmPkeJRQsAzx9gFrw19tgrcpH6QKiGcUnZwhgsPGAWKmAfYQzf5rNdedJMSuSn4eVPAkks4bjPMZ86A8m",
  "key37": "dyrSyDf6Ti677NJZ1JVngUDxVK445PSDKc3mjw7am8qn5wvHPdi6tRFpNDiKwa6tuNE1RArMCecMkCwXiuPKwuo",
  "key38": "FCVUu7r6VJhgUB2TcRFsJDbDUq8A5zyvEnX2kruWy9X5UnihkbMj6BjPcP9oTjkviZGWcBQpE54QnpDsKqeEwQM",
  "key39": "3uVv9gVypLm2xEeNERdBDPVJWHy5yU8gxTDUJhuAkRKw334FSuDEJBhEXJRHivS3LWNE5FLJLTYetTeC34FTKXUw",
  "key40": "4oASH1Q7ZwCNPH2Yo62r86d8g8bugkU1PPBMJ2h848mAQYzrDqvXCyT1QQo3a2AZisXruopD5jeCsF1ByE3463m6",
  "key41": "dtS1WMSWD42QUuC9Gv2ZZDySKyDgWLiyGw248vVybnSSeFoeHmwpdqMehep7uotA4T5UCkpu8qwi4k3sQDmQSJD",
  "key42": "5nv2CjpbHYGks4jbgfPgzcmqeSnHGrV48YJpuqQzZ5kf8wqZBkd2JkoQU5ZKnMz3Ew36jmxwxN4FBME8vj1Vu9vN"
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
