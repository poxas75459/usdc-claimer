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
    "4BzRYvataLMwfHnu9Euj2oGj5Xmzs8QPna2Es8CsvguXi1np41QDgDrPpwptTpar12xSAFL6Nu6SyV54Dzao7PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAbC6UokXCrC3LxPivAJWHTSfKTms22mqFyJzZzrVMci2hCRQVqYwkV3xicjzhX3ZYvE1Zh5PZmEUPWAxsWTyBJ",
  "key1": "3N8KVi33w4rQQ9c8NBBJWGWAJSj5zv4LbF9ebXYcU3nepi3SL784FWGdvXXTsNgTYK8xFpysUKh8kWEE2ZYATB6G",
  "key2": "5XX6oQGEXkGTtB9bMCdZW7ZfoMEysHyY2o441pTt9hjQ9crbvFk1jVD7AbL24eE4AEt5EQr9ExBcp3JUp94tShav",
  "key3": "348km33vUmjzR68LF3xbcinPeAx84A89rXfe7d1ck9FKv6g2FSFU1VjYd8EDnyos1owza3ZQLqgcwUkm7bCX8Zun",
  "key4": "5XER4CNBvNiyMiPQrBtBviLyNP4odxzvHDAG9p9L4QcvyunmHn7wASHjd3PuwgqkhC5BYAAt6DgqrJEssAqZ6xdm",
  "key5": "5KnxsMwxFzrHD6HjXG2WSgJd2aQEpqmNkPJW7B8kfmVdkpPty25BQSKA7S9Ju48aKM8nriPo32uTFy8QbozeAjpN",
  "key6": "3Q7Dn8SyydT4RLtGXa6zB4MsesJ6s4usZ7TzPAYiKYbCCN9CKJpJDGzAuEWX7FcUGSmx2XmH4rpYu46z2tmdctid",
  "key7": "mULL7tsYP2wWJ2RuYtzbSBGvnutESxYj5hc6uUoJ3q63qTuoWFPjHEkvksPg9LZJL9PeN8gJ9JzzyaBH5mj58KK",
  "key8": "4f4XBDnVL7wDckmRZgnFbjMBjEUnrAR2vHyP4c7hJhvE7yLusndAVB3Nevw8V7h47GFKTo8BSjwQZCLRAG17yeme",
  "key9": "GUNmxvY1LYZgNxDZz7eXCKmKMc4Kj3T4N5YvKCMXwdEaNBoZqYQkJHKUZZM7B9mVPyHtWM5AZiACyupVnvohEvb",
  "key10": "YTm5pun6aZUMSLaCgLmhiDJdEWXgwSVaNSumDYjGjxZhefCqmG2gh5TawjPfYohp7Q1zdjXpjd257n66Qcof4tJ",
  "key11": "4zitgvbxHWQ9Xbnv5cxg11KFa8n1Yh7Qupe1sGCqq2ksCsZoboiMAfV8Pv6F1bBV9HqzrfaQJxbRXybYoUnDX5Xy",
  "key12": "5Qpf5Eu2emzkC163wwhBsTcdwVLHYyNx3hB6tjTqScmWMeswZrqC3Y2PzjVjBJMEmbhwWirVCbum6NEJQnLMs99Y",
  "key13": "Jv6ry8wkLGxgWwqerbQqHALF7v6PvsV6yKZp1XJv2Qxwx3bEVRdVgMcSL4Z5ceL55g4vudfFqY6hwoz1trZ5M16",
  "key14": "4CHjv4bXkoduEHvPs3Qg2SkKCTHxgpeKUup9NUDvqbi253ALxFbQtBPTeUsSTTzi7TFtT4f3rLL6zw9w9Lg6kytD",
  "key15": "3zUAX7TjLvKR2oZjuaDKu69sBS5mU7fxQe3gouX9rwyPiCLCmQe77x4HvGUqkiWB5fu6AKRJSA8cPst9RFaqoQhw",
  "key16": "2cbuDHKXEuDKXMsUTKrPJoMNinfqcw6dekpgxGYxTRpa1yP8bxPYPdxN7tBaEg6v8uTAJn9zpeUuiim7Sx2bVDhP",
  "key17": "4WH8gZKzTeN4iBs6Roi425ZBEUpR4wsFtJbpsGVLNhzXfdamz16it8LEpgy6R7BmqXrxQ3BFa7JZwCd484BksFap",
  "key18": "2QHivufuvrj2cA39xk5VqgGo4WcENsw46JSjSfN6Yobvaf8ks55TyQ9WEUhycmoUbTfk4j3oHs5gF3Ym9vk9ykJr",
  "key19": "56FfwDrBYm8eifQ4fm68cH4SaYETD1df7m9R8DDnjBg5dpoQ91bEeKvJ5wTzhSjTZgoGxvKdNK1RxCENAamcXnk6",
  "key20": "39h6NMEEoJBHtbMfy14gJUwArefzW3oJZFPk68ai47Pb8eoMBN89TnGbERLhdii2k7bGTiMLpZ1jxjaUT9uFY1qB",
  "key21": "LuqumpaiU2JcS1jQHcoCgd9dWU3m9CPW3AgKKaG35DsDTV7VeYKoLqC5AYVkWjXpVeHHTfJAVmQPT3VLaANKj1q",
  "key22": "3WRSoU5wTa9Y1pZk156DRr1gBeT3hYue75Nmep7EVAg8yCRUbbpxirX1u1ozwstuu1WHzdyE3q9DSYwMKSX3kXqV",
  "key23": "c4gbS8UhDvQxspcWHxrCUit4CQi2Rsxx7wRvAoTjnXsF5Low1MLwvK8SKjM9aMvBEmw1rfvNiqFnzHNgeQ4Kkrv",
  "key24": "3iGvdaXw5uPHwgbAZ4oqveMNern2phMwMnZptarKrbhDdcAAUFEnUELsHDKzHtYbN5Nv7nvTdRG6shPhq5LfAjZS",
  "key25": "3vtU7hPATTankbNvxACGSX5Hpba6Co5SzcXehT7TQSNh5KQc439aykTGNjmvo465nSRJS1YWpKaJk1RnyQzAMFCa",
  "key26": "2oWPPdc1FMmDx9KhNnnQAD5CA5Zijm7Co4qGPQwGwsGccdJ9GAQWAqYoRPoPTWGWsoiLL5v7fguDmtHx8ZMNc5Qs",
  "key27": "2FBuAYKNcgg7A4PvmynB79SQtfnraqdfQyCSvrLAr1THjFMdLUubzpkKrrkiACbNKonniFLv8k59afgAen2Pbiqf",
  "key28": "5x5fkXPctkbyAA2yg3VPUuA5fbGJZyEsC97PGCCPYfXuzsPgPSQGNQTjgifYBtGk9YNjiosTtYEiUK3qyAicykv1",
  "key29": "5vccnm9bBTosMvXyBFCVYW5VcCYcaGyZnTN3FVBueFhcE21yW7KMF1U9PseNiCBmjFGRJLRaSw4eQpR5W4fdtUZM",
  "key30": "3gkhtNvBQyLa3ptWZ3GEVyKpYiw3EPbPiGMvvXT9AkFQHtuQMQ6Cvoc8P816byGrDyG4nsA4EFg8jht9eXztGLbg",
  "key31": "57HoNfj8n4orb5RzCEARWkuavxYQuy4ni1uKe2h4VEnzkgLmneQe9MxcrVRtEYE17eUJHycGs6EcEi5QW8VjnhPa",
  "key32": "fPxSSHYoTUYnM3GiHQcDZTdGNWKJjcHzRzkYUgyxwz2RezZCFX1MPoTCSxDRdhDvt3p7oyhrYhb7A4oHsEGMD8u",
  "key33": "ZfH83f8ADTcGbmcFMqzWJdEzzpLN1c5tFiHSH58WyVhdLgF9kwt1KVZYuMAqfncnmwPHVgqKqgQpyrqaodo9zMp",
  "key34": "4jUEd7L5x2DbzogVHFLsE8ydYVUetcXmSzGwuuGamdYvg1bDhKAmy1GUbrCER3PkkKft7eKufskTUg9Kmfn4mD4P",
  "key35": "4zmxGVVpHWUuK5sPbcb5nZBV2nQsTbAvpbLpm4jsgC7Wbx2dmd4UAxidU1fAz55SFHmZyHsYREtrcK3AGEY5VuyA",
  "key36": "64ZNn2zhDYQbKpQ2CktSPAwzZcvj1qjBz9XejKj88yHdf8tM6bP45hmueZzWEuvfCgcGkAt1qbnFXya1x3PRq9dg",
  "key37": "5tW8u8L5iQo26DpoLDFUGUzrGpyoPFnGA9rUzxSVToXUnCxEfVABJ9zCWRMBNFwKaof8v7AJZCUFPRpuPGPp8Pnj",
  "key38": "PnHm3CgBEiDnBY14A2LBXYr3rZeBKNzF1tcucxs2u3GeBw3r126ruttfrzePX2dbFtQmascmv8xakmA6cJZY2nh",
  "key39": "3eyvsRJ6W8fJnVdaUY1zbtDNPQjphFFbkxHwWDR9vTtqDpPdM5BNPHbugLgTNsUkjZu6Vr6AVNBnwF5WueqHZyFm",
  "key40": "5tWtTmcmzHgPXbL9QXhXc4X7qn2ReTAoCoWKUc3biBixvwbQYiFUJuovnKpYKtz4xJTiVWUHTb6p8qHoQeoVVUwY",
  "key41": "3CXxU6odaDiwmEpAKqmzrizZescCd6D9nxM3dtJ6MdQx6d3PXvjQzegtZt9pQ9ZVLAaDKV3hrPsmrwpX52CQyMrL",
  "key42": "NTc4aZuCWN4goQdDXKUJPW7JmQpyvfxAV59ncrHCSA89WYygZVBA25JUpySHWXCUAi9qnM37cdwpNB7W6VCyLRg",
  "key43": "5kEEENKQHRUpdQQz9FGUw1t5ySgj2gHUT7xatqYGMGWDnge6qHW3Q3ZeHPiCvS3Q9uysfZk2buaK4vzRGiJqAfT4",
  "key44": "5X8iqFKpi59AC2DRTefNViqMN7Y9Zw37DrDPb7Tu2Dky1A88CxcXudVJT5XRxGZXwYJxw44jgdAXi2gfkrPNJBRF"
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
