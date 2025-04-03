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
    "5oCHAkuyYa3F8SbYXbKi5DQ6EkmvcWGKahgiUV6HJCsoa4HxgayrqiDbQiPQGiPNEVoaEsRjr5X6ESg2ieptCWDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAbEWuPe3Hdx9Zt7AkaWBgjsiSDPJhTkJDeGuZ687dbS5aD6x6SGSBGavARTLWvK2vPkBZ3TBia1PEbrtm8za3p",
  "key1": "5tfk2jdBnbsZnWpEBHfMyagtAPfQ9djyHZEFw67eZgo9gmRJouPmVMc3arxsu29zpDbiVRFbsdf5EZk96vXQdMfu",
  "key2": "21eheeyy69cmKx41P6jw4EV6Wn7L98upgNePPE393xfAi1swnNjXsC6ftkC1zBob4UM4ZSqPqXKtjEJYT7zbzj6x",
  "key3": "49NYU4G5N5ftg2vcJM6iWcEyiLHsSckma4pqaR2icxaBf3vKB61jL9FMoGgRCNX9hSsCJSYSPKGpp7mAvLGsrK7j",
  "key4": "45uzuJFury7UHimWazxXwBVegeQRYwH9eeH4MQ1pHux12b1Mer4imKYuQcYgUdp8TKDnR7Rwx1vDgTqFY4CXo47d",
  "key5": "22ZzDiXPgp3DmGywfSqLHHrQ7iGoUZZf4QSbE6XPvt4eJxNsWTmqRoUGKK22dB7PxrVR84KGVkzPvueh8F7fo3yN",
  "key6": "3a6t9maTS6ehL7v5rjLNWPDKyjCV4JAGSmqUnFoKpeVhCDrJdm9vHz9uuWNDMGfW1TzBA6M54c19rsD9K5VJreD5",
  "key7": "4pQ2JYKV14ZbHd9myaRDUqV5wJmEpfTVYu26bdWncEq4beF1rhJw3qnqPKkbYsrES1Kkb3Chrk8GLcodwYwubcii",
  "key8": "2y4jFsQfMzes5twK78Vi4GHySHm4PGv2k9ob9opWqvUVB7iJ1BSwbWbmy2zt543vJwB4hSDmyrv7K8QMTj2EXmgQ",
  "key9": "29DHjUsu1hr5gyQuc15bhZkDrHMJSkgyYYsfFAWkMTtBb7dKDG1BC5Y6wG9D3ohErYkNXPi9v8kFAqZNGGibF9Yq",
  "key10": "3BqyBSSm8JtCPwtY7HkDvfPNEtUREsEgPv9TVMdJnPctDGgacAMtp5XUiDiUtHhYH3WFeFb8sb7MWwezHP5Dd66k",
  "key11": "2BPYsXrLQZopaFPTCWBiku9jvSbZMJvyroTL2z8My1FiKMCL4kMMihi4HwtZd7tiRPvgJrAui1qRMQcEiuPZ2GbQ",
  "key12": "4aQt7STu4nQ12BfsDCp5mBcYUuR3bv8hDtqfmAjbBU4bW9ieUuRUcmvY8HnQe125RkBLU9aPxEL3rHxrGyLgDoFh",
  "key13": "5fQSybo7pZUXvNxFn43NBKoMeWuydgiT3Pu21z6tMFybtNzSYv2GMzkUGR73MYej1iGGt3C5EEGgVnypxoHf173D",
  "key14": "2xqUnQi4qhhMH7HcLUf4PGA9qV5TQTTY57m3fQ1oSuCdsqjPtMw6Uhk7BimTUZS4rNqmrRTEGBynAgXYNjnYXn4H",
  "key15": "iwgzPe4g3koxf9xrkkDz8n2ACp8rYhAoeMQeRqtNhR33HwoRQUhY51qGGLASg4bnbFaKW1aLdLpCZckePruAV54",
  "key16": "2rQ26uxWXZykyJhEA2pFNJKmhWyLKJghQQfFjAy7ztvLvSiaVosKsVQMUSWmVg1zKJddknuq4ge2WKTER5K3aUcH",
  "key17": "4hzoV36SrTJgmyYnAEL8TCha6ZAbigMeSPqTXuvqFguggNBvus5MMDNyaosDSwNKkrKF9wegoFdNsUb3uGgFfNYh",
  "key18": "567fTx9vGao8r1F6CFVH36R4fL7svhJhRtQEwBZ26rvxhDiRRN3do6LcoDyPErMejmzctDs88txJnQNjEUdpLHou",
  "key19": "3J4jrSLeFVv1mfchDWaxgjDVTQESjhXj1H58rt8QxavsZR4aniz7E8qbTtBciME9pGrVZyi8GchKHFW8bwpnsbFq",
  "key20": "S97Ky5sQrrZFnGaevpTrcZUB9F73FTA4ockQkCMmBeA9msCLXVxXWrXKo6mCfDeqLMaGxkMtMJct4XjDnaBgcza",
  "key21": "53CuMTF8PPSRmVopiDdyuHvKTt4ppYXXFYFViwfmFC2p6jp631Y8gx1zHavMkVRHZnPjjg6dRF6Sh1PkaFgK4esz",
  "key22": "3RYD4T662AQr8EWZnB8mYKo6JXncNJtug2qz7VyvnPrLtzLbw7Fekc8pRuZNZNZHeAimtp1gN1kYTRG1EKrvPdq",
  "key23": "4jqp4MX7ULDsGBcNz6PQkAVuQR1SyG2g5uxNiZD9XWR4VMZ9Kb56jEQuKYHubpH5qcxqyeWH1mQPHGFk3isHuCt1",
  "key24": "2cEkoFotrUjxg4aQBdWreM575tjBiWY9jSZG8Mak8XhJcqf1fKt495juwEPXcYbUrb6CW7TBMLv3Zw8yBmouzWtN",
  "key25": "eQJQZPYdneHjoEJcnMg5Xzme8aSg8QzQwdg8s74o9PP9riZ49c2fxXYbUAEEVRcfK2VXYoJGcnzGU1ZPDCinb9V",
  "key26": "5hi46Y7qyjq9bMHk455SrJXYvZyrGDdkt43U53FCpVKWDhkhrZUdc2CkKstXkxmZhSsbbu76LTtkMHYMBN36KAhJ",
  "key27": "3yLnMGEnUFN4HjWvdA1GEfALG4wai2WXjX6PArz8V9ANAxXtptKnop8AN7MtjxsasBu1PNJXgoPspoYTvsPDsmCF",
  "key28": "27jFpjQ7HsUUXkxsf8nZ7iMugKRELJrzJGfkZAb51fSAuycA7wyAXFTDmF1Qd8HUgF1W6DHhacxeGaq64b8qGCRb",
  "key29": "RhSgjTUZSu1fhkk8QSEjVPTgdFFoLk7QPE64xuiAvypJDgHoka2tBE3R8Qgt9tTywsWeuTCkoLsgbpsZwCgxYhZ",
  "key30": "4tDCaavXDgL5vop4HaPbQ5kLGo65TPuThkwfuuARaq4yTMKKn76w9QRNDpZhAAAj1EEpRgGtf14AYq71vMzgwfFF",
  "key31": "4UbM9ahugyKmR81ZrmHZMwxQQnkFX4GfqxG6yo1SSGeSQjEXh5dX4xK1oJSooBbcxsW9AWHbh1oDDS6U8sEZHYZW",
  "key32": "2uyAeR4FQNF37EsEeMN86At1xm4vBdVkzvSWdpCzEamjWHs1mMgRYw46zDUbC6MbFP7TG66zBjWMTFcAx3zA8BZA",
  "key33": "NgzEnSD4GwFtJcXexryMYZXbKF8DJytuHXYDdxTemNgT2kotrZbvpvxvy5fH2pHgevwqrj3sfqWs5ebiR1DnmfV",
  "key34": "EYY2249SxAqTPZbTjdzcKRj4S3y4Wv96h4US9kvXBnBeccxD3yAQ8hato1s3R5wYWpBKwwtFaReoBewLX7xsBen",
  "key35": "4UViwVXJLBKx4gqN4fubos4rMz1iR5k9YpHAxhcJbWGmBBRXzYyKpLz1QFzoH3Bi9Z6KRaR6ES17AuvFvWXSdUpt",
  "key36": "42QNiRB5BKvsR82HEUSw6ye2Hs7kQCkj7WSLHtTKj9xh4EXs7TCW2TmpF2a3yy7HvHmScJzZ3EiotA6Qtexy9VUJ",
  "key37": "3EW3tTZUCv8PWtjN5157ZwbWCggGBFnjqbLEbZ8HtDYqsUM4gewNawc4r5k4gS79CMcZa7kqsgPWmEaKAgyuPSxH",
  "key38": "3PoELW6Si3GaWn2NhwWw1x66uyZjmubvcZLwKGTXHojxu8ki9deoh8vTRyB4QkaFvDXmGc5je169Xfia35SFjQ77",
  "key39": "2iXABZtATHB5wwHMrZUeCRMjcJ9BL8xguzi8rLM3uwinHzZJpVvuwAWj5rgsXYNHafCmuwodw3auMWLi9WUpgG3U",
  "key40": "21NPFNw5hTNrjL7gcdUacfYmHcnoBPpPLypN49tepwxZ6UfghvBDS74qycDiwMQF3barnopEWn7q7punCDK2XyVr",
  "key41": "5nwcQHdGYGdVLAhz7mNQmjA4KsTbLHfEugt3619XRGwdRm2uwweMgT7zbRDWW75D49i63BczvPXoXh9z4mvvhpB8",
  "key42": "M3Bw71SR34KS5yDwViKqo85SjfjizF2cznx8Ytfn6rMBrhMi1HNrcXKxitKqQ1dTuqZpuWfhnfC3qUwnaqEafcH"
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
