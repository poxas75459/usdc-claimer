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
    "2FQVfcX7pJoaLCibw1qJE8pb9JuWBss98ijHoQSfFDUDVA1oTqP9cKpE1h4uLSrcz6A2bEyCYNYQ5ACaN7YpjmyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfoSQfSNEp4za6fa2ad1Yai3ZMpKDSmmvdJwVPxcqeER4N9x3Z8UpS3murau1g1T5anCTiWufQcBHthTQhXu9Vt",
  "key1": "3yRvT6pT9PKAJBPx25JCSGccGcRoicTqMWhdoRZBk2rDDtm5grdQ88N8ny6BJ2HpoiD15RcFwg5SxqYmtW5Gw48A",
  "key2": "4HESSPjBtBr4U5Cov2638tExyYKenwW3NRo7xFPp7T6Ss6ZZ8eek21eKmH4cYCSeHpUj373bsKuVoMvXfCyi1uHB",
  "key3": "3khFFbajSTg7WX2GBgGBPvTakibGsuHoWpVK3DJQdv86tXGoMzCE1oGStdbXAgAZr53NA8CCpk3UwUzH7sLf27iA",
  "key4": "576nFKrV89zV2ryqeCZAN4MmdiAc5YLQmUnfhFhiYk5WcNKPNjj23LcWScuDTmCaWk3xFaZuxuGsAf4qAZfFN7Y6",
  "key5": "3Zkx8Xbr5skNjDwW4AyY8FhLKKrqPW88J1C5XQ5GdFcfE5MQSACuyWM1HQBvHbnhoNQ7Arj1Z8qNFGeNxmCSijWm",
  "key6": "32KfJBnJHhqddNAXx4RRsJSz6dhjQHEtE68J8oRhzEdfpBP33TkaodC33qBCevbRYDXPYa4SSZDDZ2bisyduLAGc",
  "key7": "43j3mxnfA1moG2DrE4BAQaFJNtceuqmcbFT7BjdY1F9wtWoXT5TM7r3ccZvSTk62Jb399UbQQ9aYHZ1TjbLWNp3R",
  "key8": "iMR1wL2ySnhiZPYPR9gH8Q3ToroG6ckKU1bpSi5891qDEsMynMk3mCQ5zNwb5EgVrPgZscbUnYwBKVzEuSgeKTZ",
  "key9": "3sf4T3Nox1EgDdh8vtEDqQcD8aUTDKAoLW44F78VuvgLdvh7W5JCZWqzjkknWWvFLqWJxXeYYghCv8N3uPHG8jMU",
  "key10": "e9rJugpJNrFNV9YmPYvFjceEXtkDJuGPYhzb9S6WUemm6oQoiZKDbMjuWqvV2gA3FtsXGHP5iJkJQfzVBuweonT",
  "key11": "5sKjE3qPjEWnVTrneNMF9gVS5zjK7BCVSB3f42h9QPZtVEkuWHs2eQu57zPZSfUDHUfxg7uLY4nixSTagTt9wPit",
  "key12": "2B6dnhM83JHXs8GB6ucsBc7uhbNG6MvAYTB6esprJC7Yr2g5LdAs1sZ6ysbRb5TKnS52a7E6LsSJMPJHj9L5a2KL",
  "key13": "27ua6GfMYBy7wCtii4kizmJ1vFrKYoTbRf3Fs9xkidqy3XMoAKCXcmFEnYBVfNiQiacr7U2byhLkZqYf1Z486EbB",
  "key14": "bJKB9Wsfhng265YZ7Aaqh5dg7wmhCdrBCVGpwv2hrJHfm6MSgCM8C3qf7J5YtPE5yWsnNCxgBDF3kPyakoCPeKs",
  "key15": "42Hcyrc53PmxJnR9KUk2XA2zRCBwohY8iDCgxiGDG2NbrFbRixenHhr5KugtPD8pixBmBD1zPqpMo6c5qazxZYH6",
  "key16": "5j3frzyc3B78UHHd1kcocgyLef9JGiyK1GTGBmmVn4Zojq5ixKiRWycWG7rp2JGjbu3GM5WYsokQniEU9X5kPsWL",
  "key17": "4AwTfkkmd4jsXkzDnDurwB3Y3svwKMGeUAcsmtuA5KoBWUGntYgmYzLjW4NJwApXw3HW5FN72W2oG8RHksXMdV7U",
  "key18": "2DACHLKQYvZsKxKSSDyvw2BEMy5kvg9ZrxmqAGiREVctCFWBWmRj1wDkUuEtzegwzk8eAoWbY4GP1aVPnkjXtCRq",
  "key19": "4AuGmAELVCm55ukEsKFHWonTQVf9n4Z8aZQHH7hCGw5evSF9pGvURmAGmHDnUn7as9xw9aVvVyaGyqWbh96pNHQ4",
  "key20": "4ww7UWESatuswjgmziHxAVTkHqhjiT6axj5HW6njDh8fmEuyyEqDyojoLrrNXa1D8WZ6SrUHQCYCueonzyEe2QHF",
  "key21": "6B51yszNT3486fuGZ3c3nWFqxp1BANAPYkwDdAyXC99ZpMccrUK7QpKZpSzpZUSxsTvT7MEKDv3jZYudLhTJE1V",
  "key22": "5UxtDLWe1MdHqp5ny8asYFvagX3Ghdo7pSFCCJWsCNRvBJtzhwwpT9A6VfEHWhdgtsyjcoutebjfyPsukqtsjueJ",
  "key23": "62v5rtk9GtvdYwb9rKWL5GbnHUQCb8t3xN2MJ7cFnpoGw8WFPqoKd4PY5FjnquzqQ4jtbG22VuffEtj4CLUwC2mf",
  "key24": "2tXzKPy1t2hBRcyz5vZkwJwrNaBFKUS8wreWcZXU4BAGcyJQpSKk4eZsiBtwcp74kBGu91626VHuyzYjTuUgF6Pi",
  "key25": "4RFtGSKbcwyo6cLQi9g7fSmVzjvFjYV3iD2aXfR2Syhbwm1mr2sMfV8zTRHFVHivBPkfouaEodkUwHxbgY9dbCZJ",
  "key26": "293DmUMFqF8ws3k1b7D4uaUjRdXHKxvdUmt9dryZPjDvGjBJj59Q6z5NnMjwPZoqjtJHRBZv8yTfCW98PktbNYZq",
  "key27": "4BpwuuVSsRbvGMge5WvW8VJYp9EMfNgfwrGJPtjio8L9CGq35izxGBy9b5jDgorj3jxdvFmQxJecHutkqmqcQZjo",
  "key28": "4KopaiB1XFccLZnkembmFoDcEJETax6fvcFTsvHwQ44WGjbpAtk3g9kPccRL6cmta4CPTNxZLLzTHXcnsUkf4BuV",
  "key29": "4JDikP16kAqopU6sW4GmBZ1LVsARMfTQWVwiUgqPBymuPGxRWQr73Z16kxCG2tqAxttnfdBtE2phMUz9C8ekiUkV",
  "key30": "5s2aWmU8RjqvwYinZ32qqQx4JvSpTT6MaoE45CMGxHtjJyDq6bCYdCUME1P5m3hsx6ZyrM38mwKGwcXvK5fGzWK",
  "key31": "fJmRbjs55mJma9cRYR1qKYZuEgNpVGY8dpnqfAjxuvPFsdHfkPrqmWBstNK9fWAJFqFRJ9sXeGDNamhSxzs11Ei",
  "key32": "4NWxD5gdNVtdjPtM9yMRm7FGXHmg5mgZpwp3xP6gkDkeUJxWbAfmyqbpZV3X5TJphu7xYfc7YXvbbUB5cHfcHDAp",
  "key33": "3afQwZZqLKK6nBLWLeJNbuG8zU6WPJM2X3mo1PcZqbWuKtbneZYonTabspHGZyZ3dtFmQU3KCCsMANiBUeP8yjNs",
  "key34": "4358EdmfExX5SUNR3BNEy2s3QazWNCMngjoaGiXxEUhNq6rJqDmsXUaxhdQq9r1FP5gsngxtsmkuh86uwHZvnR2G",
  "key35": "4KhQyXSy7D4C8hWqxRsVFvj9NDXCSnfHmmtFy6BefSAsZ2b1EREjQ1vDbq1szKK6FeDTs3tarJKnSjJ9KaE2EKFm",
  "key36": "WU6uPYuBhSRnU1CiWyzeGXRCbsVAMszdXvCkYZpDapRBZSqdmM9r4JDfX2fGvss7FgoYYWUEheZP1mWHWhpt8Jv",
  "key37": "4xG588LYMktsevZj71uWQTtbX6xRN8q6A2CQLHXJL9vHTq1CBKEvnQSmq5i5BgWKq1bdSnySkYpqH67gwNy2Rwtk",
  "key38": "5ZR93PegbHnz4bHKyYrkEFFiy11mfTKFDFdc8VVaaAdnBdseExh5ceWMz2wtCCsd11kFY35uWagorWsHfSwjdX24",
  "key39": "zSnEg8LzMUmPEce984juRKzWu5zizNegkkH2Pvjr1jWhijYVbpmc6uyQhaQZvKJrN3ZKqsAzegf2znq5GRtGqzt",
  "key40": "5gB4pfNCJudF3B77hyH2wpb3rbtUhvEztar7gghtmo55S44sZ8mJuQeDER9Ag2cVXbAefDwxRhJEmCky4kSyv4V1",
  "key41": "2EdzcyGpSnQKJQ7HjoFkeSGUVHg2kyMDNrE2d9DQmDtLccNbj6uZrcozb74kMgsxVrEW5gfPD9xohUecjjiSMwKu",
  "key42": "3kMksHTrKiG7rhn1F5a4vpu1VopdSVCTqoCY9uwzavGnDKeMHCn2oUopKqSxSTeG1WpPKk4TpTCDwqcRRRJa5UqW",
  "key43": "5dvyusoT55YVsDP2kbbr1cDQsBKhR86binktv39GDga5H4u7BK7kKTcbjm7UXm8GLy1Ys4P9GKF2SELEuRXtpZSr",
  "key44": "2JmFnNTiv7bwdwGdjG9iixmA9NaL3vXSmM4Tgge6q2UiVXKQ4vaWa86s6s7XQzkcJUEGhC6Qdzrknj4mQCFZJZ18",
  "key45": "5FnbKd5HGUTMS76kakfS9gdTjkPDVje39VrZYjXB7A3Hhv2NLLbwa9ovBVMcuH4s2r64T9MZEGvmJnGmKhEJQtFd",
  "key46": "4zPceY9DbL2VBZfso9wv5itbbMCRYAZpH2SRZHotbzbqJXyxxz8VYNq7TT4YhKQ333c1JZQoQ5CHGE1Pxqp4v9dK",
  "key47": "5cGeEfHnq5QpxXJYf5McVXE9vPXg9FzUyxnKCfbbSgAaugjvoxEoGtsgFyaHg35tAkPWpwqGsfxYxw3JWwzhuQha",
  "key48": "5cWQ422dHpMEUWK3iZwek6pueurHnURZt2oC2GC9HuLLDNpBoWwo5NyAgmJgsYtcaWFkp4Rc98TTaT9ei82hTjM9",
  "key49": "5r1GaZhQePnxCxe1TrwYZNe7bdsyXnSqZdQjJj5sDw6DFAppv3TprE1TUmXti3C9E7FHvq2dVaS5v1iPyKcHfFQX"
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
