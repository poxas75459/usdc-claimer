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
    "5gmNZ4C51h5g4vk17bNXpLV9jqsC2mBoUueAfXJJZ8VV9yPq5WzfV3vpL8ZSedD4G912bDCWvv3hXRjNSCr4rVhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4daCJ3u8UQ1C9gdNm4MQysphFjQGoFLKsiMkKJaiirZxMyhXrpoTxBQZa8WQv6gZJnxXMf8nhyw6CFWB4ZwfDXnw",
  "key1": "4sX2d1YUkvvxTrAnMYLHDeTQjUzNW3SWfbUBduwTK96FVnJkyPJ6nXS4j2WwoLYn6no15YG67izBaFVv7hSmLAcW",
  "key2": "4W8Z3Ppf3744CSZZ6PozSUcSV7NikGQ5GnnL8GRPrTyQY1nLFvfw3XYVPrdoqCV1DXFVTsa6JhBzRqWtyD48M3yz",
  "key3": "KudAC2hdkrTqGDQUxm1S6bwFyZRfezqqKbgGjAmRL83JdYQrTtESEFyUri7xmdyGf872qX5c91dv7n95aKqw86e",
  "key4": "HgRMsi4iNGN6BfNsGHDYcALvcVWxxTxDrNTeAJe3d9GnGeProuuVfgQNCb6Z53pUE8Xoa7c8nY5SJkjfEtCAhUa",
  "key5": "2S3w6NyE8V6zSYKR49Mu1kMHq6nDxa1tvC3iW4qGdg5W3fWM85XNQcMxWh8wSERifKEWRwCNwXkF8GQCuv6WW3UC",
  "key6": "5qyZeHJ97ztuDzTnwt6PruKcbF9jFZd2S2cJQEPm7JWTrFKrMCdZ6KXMn2rsvdyfq6B3exYVvc6R73R3UxJmxjWd",
  "key7": "2ubm8vGWGcoYbE5bFYySeQgdyvrDHgkWzCXCEajGiwv7NuSysPQecrXiWhPKQmrR3TyFwi1kDwk3Vq7wMEepbkph",
  "key8": "242gjQnZqpZCgMjioWUsW1w3CAu4CdroVnoYwe46nZLdqe44MbEPkR2LLJqip1ksqs8Ac7PEZJoETqr4CfVYDZse",
  "key9": "29xfwiJdN7J4PsKNWtipnPAv96TvgKonCWyLrK7dXSUWRE7eGd6yNkA2i5AqWpgPjD7Y4BBaMTL7rKjohsChroTK",
  "key10": "2AznuAazgNKvHxEbDSVA85pNL7ojFUAUPJS9nQoLsHSC7V6kSp1y3ajSt9qEmFzY47pRNs1hpSUJzQFLFkk84cuu",
  "key11": "5zpjyZNDC26uGrW2dgNzCarvuW7ydieJvqMk1YHvdrTY8bW2WdxXuLc4bqtp2qXejLYrGbg1gnyLkcjXTBrizihC",
  "key12": "3rEKn44LNR3DCq7pUaAcndwJzT1S6wF3GNM5CoLPbsYJ9zGoxEJp1ATKTcWY4KxufYpbvb42JKQgc4HeTaV8yZbd",
  "key13": "4SRnd3NhmCKowgKqSnFDqaQwfCKpmUmZWGQ69qxykJhYxYzgzVF1zX1gLATaA8o3C99sGBU2mqr5d9eQXSKX9Qbt",
  "key14": "2gCzGSYYYH7KBTxkeQLFXyBeJF5wCkA2xfPUqJ93MyNgXXyZEVmQ3ysLPbDnvDFBs4YHs4eZpjvEPehdsd4gkq9U",
  "key15": "3QuZ77wGL9arPw3vPMqP4NF1euLV3uXVkUEvpUd2MGAubkm3ajDzamjTs8rxe2YMBFKvUt9mxgsF6eRPnvX8zqgi",
  "key16": "4EfWtj7mkmEAKUn1MqQnqySVaDG6agsuchagHp5SfkTqJARd3D9BaryJsyVcFVmxhyTwj7RhM8SPro73Ve1zE5vy",
  "key17": "XSu6DBhxzvJTN12RBc9ybdxANj8f1YcnS3qFJyqMo2RN2BhZ3rw7q25CWw4ebwiED9gByBhniufnToucWazj5NS",
  "key18": "3BX2wUYkSaWukdT1uzwHgitr7BX3BvSCGMDxtiUqo1SqiPUEzq9FDRRGoCWVS5w5WN7tsijqj3EgJ2Up7AcFEyzW",
  "key19": "2oVX12onKjVzMm7CSq2JHv265cHRvC13tw46qmaMHkh4d3T9BMReVhY4XgDSGKQ73Bq1GQMMVoaDgizcU2DPA72W",
  "key20": "29oeejbuEbccUk3XwHfMimzxuJuAQBYvHQkax4QQ2CknjaXCmEW6CXDuPuugroTgTHkhJh3MKATkz1M7j4c462FT",
  "key21": "qQRswduhfDtrym2nbbTkXoaes1DdkpFCdZT1y9sQW5G9Q2YuVedF1UR6dsSrTBtHckz4BfA1c8BrxLwTReRC9eB",
  "key22": "2KV42YsR6thJqUshJTm4Buvy4PP6jgEZVj8YMk3jbvnVpEjGYvGNghdnXNLK6rPgJvnNS77oabmLSV92saYVUVae",
  "key23": "2zhZaSxARbY15j8kY5i3vd6byGMxrePru3Ffh7yEALpisjqxQ2TLCewGYb9uAR2Hpmn1NyFwDFjceB4mGqBa582p",
  "key24": "3sS6k4NJ8KPAmTbj4RR7VAa48e8kQAjha6Bben18TEiG3qGjh5FCFguHr3RXREb8JEccboGtMc2Hn7kJVPNQZMa5",
  "key25": "4EH6iUZ9F9NqqCN9TeCe3paiWjxhmzvsYq9GUGULAKTnyo5Jc7J2yNMMZ7aDQn6rJA7yghmfaMW7jcpUzHBzzQmo",
  "key26": "5ZJtVR1r7TsUQPWtig4Ji8kYLVzSgEqxPnGnUsB7TE1TYsuCK1VKHnnmMEkeedhwfaZnzdKr8fhbs4ZwpcgcgeMY",
  "key27": "2agY6tUWr979Kt8PdrDvx8HyBpcr999KqkJWujZLEiWeGTYDpzGmYSck9EiMBm59UUUrBitAmhsTo3i5DiUvEpW8",
  "key28": "5DvtmAu5jhDh4heh2yXESeycyg92e1Pg1HotMLYpBGzhxJ5w4tMeiMz98HM29Yp1jU9LdCQbMD9x3o9b5FArWD6q",
  "key29": "242HchMUAkcNoHgxYrb4Y1jM3XpCkKs1RcwDZRmXtMnRMQWhhB3VH7urj7wTLep3CPyLdb8MkYrXz5X5C8wHAj2g",
  "key30": "51jywgFAzo8VhpBvLwSxSopr6UKAK57XpJqXDAU653Mqrg6jyC3RbNxhMHLhGGQiKrNVdmGRCh45VGzoevbmeJym",
  "key31": "5fVHCnNeK6f4NQwMniq3rxVyEeY7fpPgDwDda6x2xA82pp8F8t5TUfKbjNqSw6L6NE3aczSdFUN7KU6MarSBELQa",
  "key32": "49SgGHA7fqQqQgRpPUuU15YxyXKQpwq3ncSk7RwqdC9TNfe6JwUHmxixuk3eRVRHaxt5EBhyJkjfyG16wBEQP8eH",
  "key33": "4mzBPY1fbcQNEE1RQtgNyR6Nrx1Xf1igr9Z86QYPErPpKVHsthjLMzU6V7AUhfhrDEqyjxdyNnEUgZD7ky5QZEfy",
  "key34": "5naT4QoAJwck3yToVnEzmEd33GgTgcgtbKXNAXutKiKf5ypE59YdqcJBLVEY9gEznKzxNedn2tREpVghTYALvA13",
  "key35": "2AuK4a1zEUmaBhaaJi1yAK9yCmviWbot4LATHCzjTY92WBMxo1NyVR3CbMJ5HY8ftrbyWM2XBrGJB2EL3NBnTMWE",
  "key36": "2ayEWEQodBEgoK3jWbSE2tvrwvrZLxhHWPwE69fEiHSV2mWFEFR95TPUJVz6pMHeXFbf9hcy1jHCxyRcxJJ1ehqy",
  "key37": "2QT15QEsWPiwu322dvvjYsubQMFBccw3Ks2Gut7WgECXervptWzavsdMkZwfc6i5ZNAyfzoYg159b1YbQSjx3uRT",
  "key38": "3yMuxoBE135WaqH72aF2dNLkgyBycc38i6b2J21wS6Gj46E5jtUtsk2E85hfG4x5HKMuiG29r2zL89mkqvE81Bxo",
  "key39": "GwjYZFGUpVmEBztMXrS5ygHiyhDfj6dc937CUEhLKqJkngAffNw3ZFxxHEZrjuc7Y5TfNpD6N3xRgCiYPeK5q6f",
  "key40": "48uLBQcMVhG8UDbztTxuzZtzgZtrQj9LUwkSuNiCjLEDzGby2YYVpw2UwvpkNHbjYfwSYy5sx8qBi3qwxErvVmvX",
  "key41": "TYxhLvW5H8sEnLCTyixRcANzr6sDTFmtiaXn7NHTrZqby55bHKFXHWZ3NhMZBv78jXDHVqeCtvYFVDKoUctuKrF",
  "key42": "3cLYvTtWVhBkovi99r827X1ndur3wChguEfiYSTBQS2JGrQQcLeUuVZye65pzoDm6LT1wUHVGko2DMaJw6TKTbSt",
  "key43": "2Zy187fyBWL2YjrcxYP7yTCfGXtkdLgjCyLLE9Yj8YCruY2PyEA3RzPS6uTcVeNdXkyAaM84q3vopJ59R6uPvkoz",
  "key44": "3huFpsb6yz5eR4wLDVzcvSqeqcif1iMSvdZX8vYFLbvotGqensygMBg9hqZWRDnHuGehZVRo5a7rEuUrAvpB99jv",
  "key45": "2MVJGyXYEnRC8ZjmgLb8JmX7BJbCrxLrdjobD12kGyVrBSncnTzpZt7LkKfceF9BS5ki6fuXGCn1WVZ6FbTpRKGd",
  "key46": "42oQuqrCmRhkQGucqLYsn7S9uJ68F9u99aCjgE4KXnMvojBvR7XkdNoKWrNEiPqqZZh25GdHixt6hFHogqeNie7R",
  "key47": "2CgPkeySt55zaWVJSyDyfvJF9goS3FNr1S2XdFqsoirQCxgjBav7zkof58yD5nTpV89wuPBkj41WQQSu348FPpSn",
  "key48": "51ZbMec5j1nj3AqopBrCYwMeY9uWu2q2tK2yC2BgKPXtUAfbBobTanHEK3zpmbgRsaiKBN97z82UXjDjc2D4ad25",
  "key49": "3aGbLmrEHWTMnpoB76trGfMvL55h3Fkf7C1tXkLFRTgfXhUrUXHWuR26QnZc7RYCJux39m7PKUQD9UNRQpc83SvC"
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
