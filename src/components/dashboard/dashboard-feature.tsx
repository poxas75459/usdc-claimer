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
    "2KzfwJD6TnA1Z91Aux2ShEWDJbWnPsMocBMnBd4qFXJLc26yPRDVwdXbKBb2R4y4p67fx2xLfj6hnW6qud3EqNfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mNuUSKVZtL4LK2gytE22FvQXhTZNghpWBzDn526CysFH43zBr22c5jpg9zfXqrNCrTyggaGLRqaCAJJWq5JGoaL",
  "key1": "669aYyBHVPo3MhUcCVWehq4xnFuyFRrK2tqrViN9gRX9KWo7Lw5bikGEzqCrP4CKvs8b541K2JEGKZ6tuMFbSSrA",
  "key2": "2tzpCX3paeiL8CsSXqAvC1KZZRmP3zWmUucnpHG5LWaaG3hAUCAd3fzRCi4sztY1QWi4Mv9B7v7eVi8nGdEVFb69",
  "key3": "22XWfxJXKNv93SnTnrM3McPUogzsi37oU5bJcV9hinLxNjawfUPdZXxVML6PUHwZmqCV4DjCwxVZfnGdf51fDTJw",
  "key4": "q6P9CAVK68UAHrkBZaocCt6Ao8yzQB7cEiWGn9qSipBds9NU9VJBKB52cBLyjoQo6yguvKD4u7AX3G7rLEgJdif",
  "key5": "yeVpkrPNGEU1MqmUAnLPvLgxZpJUYmsFvBvLZCp1LYngbzAWSq58uMYPXFq9UyXcvcCXZykA5ZqrynjskdnKE1W",
  "key6": "47iihPheAxkjp6sXD3jqrTEFqUptVPwuSohjjCUxbAPiJFESVG5eiqDuhYyKjpiCy47btiBo536i1CLLwpnXcS9t",
  "key7": "4XEQSXANcyoAXQ8omGZRvJ3FSvdwPQZNPknjD31csx7gBS8EVPebBCV3NtDuLWeNZBFWL9Qx31kwKZDS7D8DtTPS",
  "key8": "5RAwqHGVvvpSBRTfyPJdPw6S1Kic8oNY3uB2qdToQvrsx27ZbZEuvsKFj3K3cc38q5DtGahhDwio7ZXWzLm9H6kD",
  "key9": "4qKVV5PRiPEKWyzzEWVfBWJmLaSomzehaiUmVBrAfD2U2ctyVn9449G4fx62zKRuqCx9ouVndKMsNhXeRKkFBNxP",
  "key10": "3tjCmb1Rj5ZwF8J7Ceuva6VwN5nMYPY9q3EhAfGZVLL5q7qfTaowUoQESxGDc4bgHQ1wrsHo7vPVgiYLzs4CaUgP",
  "key11": "3AdBGFiPFLv86XPSTjV6sUcoGFfvh6e3wmhWZ9L2q8FoGapfQjBbgUem5zGKKCP4vHvJaFqsywJuG54enqDD6vzo",
  "key12": "3FR8GBgbf6GJisLYfxDh43SXiV1muUyW1G1oprdNLAKTXehSySzGr2mWCScdWvi3RnK25TnSmxkHUjvUsxPXHU2p",
  "key13": "5RNEkTzeArWqX2mxaxrB7V2yS2ekZokReKzJwqWAMKCKPU8Loc4oNajQyYhgYMVKTbP9JvrqBsVTR2Fb1cH4npnJ",
  "key14": "g5fiVWF5z31NsgNzpkXg17kERZPWpHVjMprgSLkCodfpWebUeTDLjvNEguUVzMjhtdjuiWtVPvMBGGEuaqLXKTH",
  "key15": "VkTVSMqE6cmoJBLJqsjP4CUQYvGCBBrK4Mw51v2dPepbMZyoqeNeYSsQw61G52vfRDUKRjRoffnJcGg3sp4sffS",
  "key16": "2GtwD9sZ4nH1o4BLS9V9TEuQwwX3SwBw4aNMxBwj54iKJzhCxfERavWpyGS5E6WZgoMUmMe2pTBeLo9SSejrAcAe",
  "key17": "v8FCMX7Hj4aYVUjPzA9Khy2JmGmEnpgftRE3omuajDRXQ9D6w5WwDB3G4gYLoMARG3xqkQCtxegeE3dCQb3VMuQ",
  "key18": "4mzt8mpGcHscYVqm76jygh5W8pSFJKVVKqM8p7Co7yWsZd9bRA6VDYhmua2WtSPDnY9gWwUB7G3PprWuRrXSV9s8",
  "key19": "3vfjYTAXrbPzRsoBCdMeevpcN8KGS9R3niTWHbJ8y9eiTb7S3rfRmUtsoSNJYohdiNPKm8tm3VoLH4k61r6nkK6h",
  "key20": "3i4QcJWqGCVUvwA3jeTJEcRYBheK2FVX8TRREVELibK5zdGxYPWAFDD7qPiJKrxGpBT3QJsdNq79vS3XWbneQros",
  "key21": "2WzAwBzBLSe1cCp9JyYxpfdhudAYSVuLVi2UaaFBgfY8XPn9iV7e6FVdLupZD8Nfaf5JNBUEPQVrsJ7C2eTnhkkd",
  "key22": "4BDjGVt4g2Ka7KYU5B1bjoyvoCFLfkQpGgDUKidWFc6H5eS166PSssHRYt4enzeTeGp1pxEYWYC9LbMKokinefxm",
  "key23": "29auSxEca6tCFMPmPEW4R11gcnPqTgNYc9z43QRzAdnWoVDDi2ZnYbzw2SNwb7hKeg86kHPFfwwSB1QDAXdqfk7w",
  "key24": "4frnSZMTnSWkUuzdA46ZEPKUDvSqwcQnjgCnz82NdtdZ3JxrGQvTTtGyPD7nZrfNCfDpHj9n5juBkuT228EUL2UD",
  "key25": "bdYGyhaYJ4BAFS2CcYbabMU4dFah3is6EYKozE12iWEFkC6AGNU7XSvqhVxkPf8omUgZPaMZa9yNY9spWUAM54C",
  "key26": "2THqG64CvrN7LwGF9D4wBPoP3rCJrUjetdLgyk5tFv1ohX8sMty8ozazWEnxaXyHioH6jGUM8H77iRzGo2ksDuGA",
  "key27": "5ETNdgDsTxVK7q8ufuuJmM3feTZEr5fnHRMmPE3T3jgNF3rEps36cNuJ16dfCR5BvhrC7tTuSUiYTj7CRL9vJzo3",
  "key28": "5qZJxKvFqJWhMptHTqfFbDKx19v8neTxCx1hQXZKvzxCiuw3CnUauVRnZ867H4mCoj7hU8g4z4MizxaGMZoJP6qE",
  "key29": "5U8Xf7wQk7ABwb1A2e89dqnYindYzA6HRdwRjSPc3jxJ1G8sDZequnkRf1TaRpgfQRKzrCRiuZQ2c8cHxGTgrm2Z",
  "key30": "ae5eaVC19cNvwAQUqTfcHP9BP2DeovkuLjbDeQF2BLSPF8vWMx1fQS2Yx2uz6pTrKyPUx4eJYZ14MakBDuEwyY5",
  "key31": "3NKhCeD4NJsSgAKuyrAhQtQfjFTQonatWnVnu7VhTDTQv3nMBqyv173FFkMzp39xANzoYRfytYktNoJQpFoDHyzY",
  "key32": "tEDKt9vKRz4ov2UeQKPxVY8C4MbWtqpSAmLgwNDHQG9jmhZYmCQDU8JoZbFGsJhf3N9bwH1LCR49CxirRCVR17R",
  "key33": "2sRRCQ13mSModQTDvW7nCn9x3bgXAwUcUUmRRNH9hpAtQUhqb8E249Jb6QnihP7GnkKtfCRHSsVB1DJQiNGxoafW",
  "key34": "3zaDd7hTogVXjopTau8gDYaNguXBNPfUWqBRWge69t6TQti4fxDnYgDfc6GA692npW9N9CSpq6A9Sk8FKsbBVL72",
  "key35": "3VpY4wBi4Q7RNjhM5dFzYZKCbCDHmHuZTTwv1eGC1epo5eyi6Ffd4Vh97v1GqK5FSqa7jMqeH8dkL42Pcy1FUmYp",
  "key36": "2GDuJWbC3p5mtPGZ8k3KteNa5H9znYxmE1ScrJG79bqdqvJAbwoTdgQUGpWLt7UvBWLUDoJArTF6GSVobRu5p83U",
  "key37": "4yiTDyvcDiMYHuw5b7tRe7E5sk2TqYqDP7sz38rKkqSyjLT9DtxGp7HB5wrC3dCWJQDR3rbHLKuXsdgZXLXZACoe",
  "key38": "VuTiAMXxDmF7DTjpTPyABodoqEG95kawLL9WdCCABocjTCznLe7xJtWsWUngzoS21yuy12wSQVA2m5eEFMwgWxa",
  "key39": "SSkuxve5Ww9YdqbAgtgb5cqA6iacaKF1SrqfwanFRoTApMPdoChbWas6nxGJN3KkTLs24iFREgdo6V2o5zCCWyd",
  "key40": "2eTXSt97mWP8ncAgzenj3nhP9WZf1LSit8SxmNYqfRKQ1vGp9i3Au6CxQ9aPCnUak8jV34b45EGKPfpwDVQQEqgB",
  "key41": "2eHLBDBKCF5jyTRT9x943979E3kFF6NijtGGeiupLo2VuGu6wGBkHAroWiVaPFTW4HpjYkFus8YhvnXuUnqsAeyv",
  "key42": "vmPUDRTNnxosjD9aY8VdpSY7pAWi7uHwQpyQ53d4QviSjPx5kMsUqq5j62SKfg6X4fVeYfmWX2fkBEktDHAst3B"
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
