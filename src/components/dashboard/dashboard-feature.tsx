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
    "4HSjKAutnKeGLYSrW7X3hbRdwTiQqr6vQMoSab38hzeFEuFdFtLWF8CdzhcMmKFXA1xXjz79h4GHgoLx6cAYnTWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JnZGZioL5EQur5A4k98caqoQCp6JrmekMJ6VVJ1zzLKAvLzfo7S1WPCSwS89T5npfUTnCziKYHPxFbkvwkndNUd",
  "key1": "5cYqbXbMutiFTpt5UTvAJDW2RUQjDTVKnkpEtFo47qTE2QfPyTsYDCoTD2MZ42YitR8erP7qMnN2mPpe4A4V8cmG",
  "key2": "2Q4xwN4cevaT1WMAdPd46D8XCbpsAfMiazshbUp1Ed8HQGHGTf6URV7bQGjGSuwAty5XXkGRGJ91xhiyXYFoxkHW",
  "key3": "Pz4Rd3PBu4YASqkxwA6Vsc3ABWRNpyh2L772e6cNiLWVvbTNPD4ZP4zM3X6ZZ12pV3HTL9jEndRihvU8vDv8bsn",
  "key4": "5X3pAHFH4msp6Hd9DUoU3bVeBUfQGKybN4NrfpdV51kguPj7JBaFGSJjK5uNfvBMMxLM4wxgLZMjmjssxnsGZZkR",
  "key5": "2hJPPmLcQ4Si9is4PTAPKGYTb5EfxDjGybNRXTJkCaGXjjmi4mmBezfFtAhYs8yfadjCEvbwbWqg6beSFrrwud2H",
  "key6": "mhaeVwuyBBibrNsr925m1QELPk2vfcrunvKt6zGN1tGDHyGYXeuiKaFgurbQ8jZ9ZMXWTRbMbXKdVoYntYZBaxj",
  "key7": "3xoneB2kqjRhHSSn4HgRYC9jT2pndhQeEs745zjSnKNipbzPB9J2wQtffT4u4BQuvdiz5mHikbpj2kVsWzz3yeTD",
  "key8": "273a2vnCGM1BCvAZkKaa59neZYydhmiCgoeJbeDhB35ThXKj83fpVYHLm84CKCySgxsFxdj8LGeCA3mQtdizmuyb",
  "key9": "8n9qW7U5jrXzyeHuyCSGduo1sz7kRk5dUPxLTAyFxbfYwQdm2GxhDBXyBCpJVwLHQZRbt7KUJ8z63GNPbSsXm2x",
  "key10": "48JeJmYsVMdkcr5rwAa15Nag7CkWv2HHr11PUg9PdaBK8b7n9YjT3VGPCZjckQNcBzetaTyiumnffLdG9bv75GfP",
  "key11": "56VXvdcquNCLMrkDu116EjaPaHNNtnkSs4jEaFoPYcSKLpDkoBkrM3RMrzjDiLwqzRyZkWWvqUfFSJ857Yi7JUKk",
  "key12": "52QMAgoB7NMAcHq6cPTQFfRVKh6E8nDvs4KBtmzDoEQPAJq8zGrUSgxkyz3vqaD23k5BpmqE6y418AnFQAWtGm1F",
  "key13": "4ipGnJWRVeyGpb477jMd8odnQh47eGrsrgvQuxxhVx99myvYAASSXk6UKmSiojpjS3r5CwUgCzTKXVVzdhDY1WGb",
  "key14": "3LDY5rXLdwD2BqNoba7eCXVxHkqWn39zudhEdEyT7LByBc4zxW4GoQs5g9zt1KpCFYzUM64nPHoRQaaXs4jHZS1Z",
  "key15": "2YK1ZgLqoLkXM2h7J57xbvqnxp5693FgVoWnQ3i3RGb7qi72rCucuXjUz7GWX8132TAHVbW2cD9YAHtiAK8osz76",
  "key16": "65tY9nn8LTDgUDjimTesExs2Jy7bJqBszhhCGiNSFdCoBAAABcRFjhanKRfkPaiZAiJ6MSCZZcMTZLkyY7icVRsi",
  "key17": "35PR7SVSrV3SaELY9UtLc2tFaStJGTFNTczMiSy7cFisa8WUfzy8rZxzVMh7pUCPZ9k8hyx9rGLBvAmfjY5edLrA",
  "key18": "3fmoMVdGTVAoYPB1vv1wULP88Xe5U3JerbL46Z3Lz4Q8ncTof1QbvyhMrcBrdzxCadVLQvhjeqJFFLVNufH1Qm3X",
  "key19": "3hXsUUaRg5JAiPJSrQjvsczp3JN6sw7p6jjkSQsmKAdWk5GaPJnb2oVRSysENJvzsQYxi4UdmD9tQkr2w5i1tuNz",
  "key20": "oGrkHJvdWx8FVQ8kJFjhmuuSvWWFim2oTDmUR1474YijbR7hxZUUFXs7iF8Ah3QG3WfDUbqkHKrJj8s4xHzWVCP",
  "key21": "3TuHRjkBJay9ohBP6jYkSpX5U2UHoLQDwLcLkihgzPkAWLUtfMSRMAoPcFtv9Z7NSWtTVjgkcThbArwCoP8ofvnn",
  "key22": "5kwoYp41BDjbFUX9t7Umu83f8NwGwQUi8oAMj9wvBBDk46emNgqrshPzgK1Dr9dtZKV75KnCTZgFUoHRurCoagwx",
  "key23": "5CNcu9cnSS1jPjcpSGdg2eQBbvAknxNzNa8TRgamn4cZ5a53x65SQHxaK8CFybtL6Dzj2L6u81VbZC7w5oHe324M",
  "key24": "59wen3cBCqJLTEyBAcHNLPEynkQSJ23hnGWgcQaFLyAJ7t3mfgLN2h9ZjV8SmhALzj2ir8UWKPFRmrkekiJxXsuh",
  "key25": "5SNCpAhL8nwo5zftcqeWhpFgBvxxLxhsmoTbg8j4mRAhJ8N49fUpwzgTHfbhpqmcBiAj4PK73pzfTpvnmegJEsVo",
  "key26": "MAS4LeLSQ6XZoYAxme55n8cirJCXSxEMee2Zp6qXEvspHg47QobbyfaiSeXk9NCZg6doX5bX4cNzRqqH6hKVSkg",
  "key27": "zMQ78RZudDNCxgD7rgNgmWnfoCwcrnMsWjMeZEyVpVhDHYZGFUvcvnaYnLWCb9eRb6Lf2HN7VacUn89JMQCaywT",
  "key28": "3VY8eFXXJ1DwPrDdZU5WijQnaD59H8JtkH2aobmtnFfAThWg1aB5oeu3H3DXpJibHMJbBxLgXeUa89R4rhtuLEVV",
  "key29": "2HtR9sUbWw2u17wtydFNbc3gnfWfCxPiAa3T9NbTnijvSVuiZa2ACuFSSdX6rw96SfZmYDTUYRJcR6QscWwK3p5J",
  "key30": "MntK75VqQossL4tpw9VAhoDAU6ZtTAVUh11JG6Y6ouwTxmRKkwudkF26XsDUxbWZ6pRaDKeQYX725xCLdT66KKj",
  "key31": "4t7GYjCzTD9gEkf4dxz36CJsUxbGvCopFzRsbLXHdWW6iBRbedE26udKmiHXzBEn7Crp3Nv2nBUZ2SJXJ9AadtrE",
  "key32": "RMgr5nKkAKJFe1zqnpMHYTGsKmB8QTEJpBLY3rCtNYW5g8NDex9vYxgSFvBszxAXVpFu4rSVymgaMLzcYZQMix7",
  "key33": "Zx2EjA8xsK2C4Z5W1ufit46evZxHjRsb366DmDjwX9rdrtRmPuuhKz93yCtMmV7REmxHhTgo5Usx5juT84utUob",
  "key34": "3GPUXpqfyMhqBHz3fkLnTp6Xz4uVPGxWwjLp5T5ZadaciU3PSv7RTjJ6CynQF8kfAGjvubzphwZcf4So6Hb59pbi",
  "key35": "24vnmpKWBNLf8tTahxZprESddpTRV6ZKwZaov64jHqwmNpgJsgyV7SH5NoW1bLFyPtN1DE5rTZWS9NcQwqPtc3nh",
  "key36": "2h6KyWYYKAUXJVPbooEoz5Mf8MdBWxqzqdXgUsMbGzH86BeNP8s1JrY6tss56nBwSEwMvcZx28zEc8SiK1kARSNk",
  "key37": "3ADRXHEmLzgfz4XpvKcC7s5rpzKkHrLK3qYepipMptGCZ3gtz1mnRpWWF4rA7kPAAHtxg1qV71rcZc5gsQQRE6Jp",
  "key38": "34y1PkgbBaA38yw2ie92hSF2wFCuL6rmCAMY7zcS1hQTax9en8QWCCG1HXPW8xnWYsdqyCHfwLYwZWYwRNo3pWCN",
  "key39": "mrXh4crESKGpsHzKrxB6jtyeE8u58irofidAcmPPKyhx1Uq3MNoKxARc8ycs2UKerTwnkKiy1hwiKdD6XnknJbK",
  "key40": "2tfoVuZhHAmH5skeuPKG1yXKMorDMhCUj6GxRxdfXMp67gjupG2mNmv5wGePBZzUEo2Ldm2T1MSMzwGV18vqBuLC",
  "key41": "4CkX9978ChTB8J4Ksm9hBixv5nphowuHggdmdYUSeqXkryksR4SwoRpXfoCXwuWmAjB51NuDtTP7ALapX2gcGnCr"
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
