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
    "5ALMrqnHgvyrvTAGpQMYsK6PqFhs7Xs5N1kjyJ9e2yj9Ra7zbi3Bezz1B3jpEVNUJ8cLn6GkVmvLczEvi4FEPbma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJf1xXxdXTqrfATwQwTgFyiR89M5ip11QuJ5pGNsanNJaRSb8SKddiDCKZ43NTUYseuqsxUBLLixfGpn7NMrP6E",
  "key1": "Kzrszs8X1gKJ1hN1vG7iuxieXty1mSsT8WepshSsmxbhF5ZQoTHcTks3LaL5cerde1UMAbyVKNh8Ki11iw3Z9vB",
  "key2": "TUBm8WZYpoV2yX5SjTy7vcbTiL6JrXHaUpfS1DFFnre2ybX1gypcnD8Qsuiv7vFRFQSf1JpTXuUR45poL4vp13u",
  "key3": "KNntfRsMWjM7mGea3XTyBDN4WmWLBdJbjsDnyYKfqmYjVWVhPzifGdCBvStCJY3cENwfiiWKquXANwhL1AR6Ufp",
  "key4": "nm67ogxPNJUVtaKPpvXAVAYgTAxGis8r4brnPKKmtAxWc3mP7FSD3VT9ff5WoDu4HuFqXmPZ5ZFgYsBUvYqJgdn",
  "key5": "5jVVhgSELFGsrPLrUCrcXWf4xqitZjv3LcmqzsCxkLFeKoXP7i2sAx6imkkSQn9DHJ6x9xYNgwxsYqbNX8cA8SNc",
  "key6": "2k2a1khKByqb9CHfZgYxivgR4aSnNqjgMPUhLfzikTkrE3fLT8qVNVRd1Z2hV8AfwcJ4z3VzqQrUqVPC6AdvRR2R",
  "key7": "5TxboB24i1fRrKH2iytG4sqCnW4zefEWt3LJd8KZwJRbX21ZyAB2eYgn1Wd71YRc5R8fmhQ91SQAKZ9z9fvB8UW",
  "key8": "4PWcihbC2RQoaJu5jsCwnN1e2KC5ofmDj4g881qW5ScmYnw4CAdN57QVvKe635GADdmovRnNhGtMQTbG2ZHNetgL",
  "key9": "TSikRX8T4x68v2r18NKgwVjALaD1nhcBKeFWZBmNoBhn4fdMuoRSMnV4zhHd9vcb8ivcWRE62MbwAfFnHHvwiw8",
  "key10": "4HAYzdJQZ6Gq6MWUiqXDDEhxGSPDPyFZHUnupe3P8L5rXk7f12q1M2RfWjVN35iqPjwc3hUVhpKXF3u72KyUNhd1",
  "key11": "4uJcgk5gVaMFUmyWRdcfFGV9dL4eFa3ww9grTqBCE2XwDLZUbdsJB9TZvkeh7kkFMztBXxX9fhca2bsLJjg7KbH7",
  "key12": "613SrfPbLFbe2q9acAaNSQVWNimSS3NLHtsYv6vRXePGSjSJesvakUGmyZqiipN7uT7Gpje4DZmmw2gXtnUS8CSc",
  "key13": "572AdNSL13gg78oDgWM4T9B7Q43ohxG3VKANNnZuQyUh53RN8KXaiXcDE5nWABreq79VGNDQEwr7StdH16E6Xyxj",
  "key14": "5qKCC58uGDTuqBbf247PQ9yxBScHH46s3nr4FKF8bprrMihwi3RgVC9wce8LsogebKNJkMpoKdqwb4ENkFRQ2RXQ",
  "key15": "2WDx6SbaLKocWcXg2LNbarjZZYz2eWVD4jEKSxwXBQULPhq9ziWPzMwGw6tjiMNFKsjj1d4DPkCxNhdmWcVsNjvJ",
  "key16": "4d8jmywaUf4WaXukvFHaGom7TSGhtNCmNyvgK8fYuJ1s5xvBGhyY89WntMaEdjbwqAGHTZzNf13QDdjEe58Z12g5",
  "key17": "4PTbrQS1gLCs2Q62JocVsD8yRestLe3Zbq9ZaoCBGFqrBgqgJ16ZNNjP3nEKwXsMBuWUtzDVhDABySZ4URhiz3qi",
  "key18": "4yPAdDWkcNCLSyiSscgqS4SEGkt8MGRM7FohPuPrtymUvNky17XX47Q4GTsh6VPYFhaAexSyckgfcNCeUdRvKCK9",
  "key19": "2B3qpJEFyHgTfFdniFpU4kztVQQvaFqqtxcw1fRzLe24fTRLR6FR11tk3bUknSaVn4og56W7xFAKPP8e38ij9sCV",
  "key20": "5iyj3DbHqRvqovg2gic2BFs273iESEcQxddot87FrqG85ZPf5gKs22gB14pYunrapTHya8LAJPcuQtW7N3p2D3Wn",
  "key21": "3emMejKSCPNqsU8tg7wNuYWetpDbm6EXmoUMQEJMCBE9zk3V63rmVkqmH8wsQDTZ16XPWioAo1Czw64MjMfeJQSn",
  "key22": "5WzNZeJMWF6a142Srsr2MUxZvmn5TSQkhd8aAJLyNxTDsqbSPZ9B5YrYmj3wNsA5y93uyFN9ptS5PPsc4LaDwSxX",
  "key23": "2PMhTorb1RwiMUwZDCMT1A8LufGnnGKmYKvcMUt6RC7CXcsNCxo1rykoVA7fRqd7RrwuFxcgcfZs55ZvnM2qFTr7",
  "key24": "X8c4U41Ewynjui53PbAmF79NyktGzCBzxZWnwMfyM5hCBcFWHwtPvwNocMrgodYSvEKBiHFmRoxyKwoKDViAe6j",
  "key25": "3B8Hv76TY821WuMHVN86jV4uQXyi2uf7eWNEYSDcK68GksBLy14H46pHv27MgUSuY8jdHn58ugBC5wfL1GXUjyCt",
  "key26": "yZhbuxtCzxSB2vdgzEWegkMmmhe69QXXgi9srKhbMb6HVDwbhzGJU6eHn5bJzNtX8MbsPzRFoVq8dANUVLvvNwz",
  "key27": "5ttyPGnYNUDxyB4znrSMNUY7xB4xGqy4cowoaaD45aN8dyboLfGmU9DHdxvbLrvj4PvLtVDouaNWN9VDpWPULE9Z",
  "key28": "3sm2utwkDuBzUnb4bUP7Fso3ghdRupLdRRaBEGvQg51wdRX7VBHJeUb4BXFJmV98sfSGQFTN8qdDoCJYU6HYC1dJ",
  "key29": "3quw4wxx3QGRZJbwusDTiDTjdDaLfmNfAntL34HCK5iEtXtCbcELz7k9ig1LqGzakEx26qC5Yf1Rhev7zqY4ijsV",
  "key30": "55gY8u8ncdjdDCFPY2HLvznsXuwRLGCHQPpnQSXDH5rfTb2pMjPxQquWbHv7gjq7hbm2NSNtw7m3e5f38TsBMCkV",
  "key31": "2MjJwLzCNAVP87P5nheUTCBQSVw5k18j9GPFLnm7NkMKzbFWLU7g6oJv2xhnRZzQNsXHBQR9MXDHTkN8Tg3jKgok",
  "key32": "5PeYwqjkteiDQ9D3jgM8xYu8LK4L1Dn9vLznpjB87JsUacg143awEGYNoCGKnUk7Qbzustv9qLfunNh6xzeppZXK",
  "key33": "2NYWEEVEwx6zDTvaJxzqm482YXn6v58QtCnPMsL7NeSSG7HqyJcc2GLkDJMJc38Z9H5wCw4VZWSRQahMJLXZTwyi",
  "key34": "5cYoMPott1HNtM9s7gZDFhj2rBi9o3aFZQGFbyFYMwmUtpJgcFahNwJumw6TBoK1QSgycBeyjvsg6gpeLnwevYCN",
  "key35": "c2BSgY546p47mdiLU95aQegz2HiEDszJVpXHauoaVPtMGYWMm6Vtt6x6tDkULfw9qVshwmBBJNmfgZu4DHpW2T8",
  "key36": "w6uzWr3rHEiN5rSCnFBwDggTuViwaHDzYRU9WxraQzzNbzPqqH6Xjr1Jpr9Mgif2oSZUTx5HFAoXJroyBU3EVHA",
  "key37": "4K6raHdjEvpWY1xp1SSGkU7k4CTeERgroX3avoeaTPoPCj12B3ZxrC35Qmu79ETU3ma9xR2S3eR3ZXa4wGqNALLs",
  "key38": "4WhAvxEUtVRKUUqGbp74cpD9PTFXTgnjFG9yH2vihn5Ttums57tVUs4muPsJLwroFQXqy6UsdosYQeeo1YQP13SY",
  "key39": "3PgNPi6ebM2n9KFvi7uKysitgmNdtrM3gRQzXEHg3gtndixEv1JSYC41SjKofw1Wwj2s6sRwwoY1MW7HYFecaYfD",
  "key40": "52Kq4yRJ81BZ4p9r22etEJvowD522tKBDU4HYovXAhmeicH2MFdaDsFEQtDpn5u1kc9KMo3KSBU9r3qWTcsb5XyL",
  "key41": "4wC5tYEMdbuHeeeWHLCgNFsbNVFTSGMq2wnnt2sDrq7536YoWqRZGw4mVzgkxmdXSDfscpdYabSSfcnZnEmoGhMz",
  "key42": "4iz4PZugxeYvNCNAdstMSouAtSLGgDfS4r7AP1PnuRXwVtR2hrkPXAC5G3mrA5nUDJVWUyE5auZ43QXLEdYutXk9",
  "key43": "2bW4KYSRXn4gdWND4pTnxdudcxNT12x4j6oB16UDj9wKnkCA5Y9sgrSNjrzw6GetYHbxhcVAWUFDWZoWHGFdXjEH",
  "key44": "8qkYFBAXzH7TpjvbzjSHZH518HE4ZMU4W3LhcU7Sr21RNHHBCGLhnVk8fgCXiCqqt1xQirJWvfEPVpj3BLzvpeC"
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
