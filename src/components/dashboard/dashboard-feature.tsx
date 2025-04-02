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
    "2QkCgEonEunstsoRkLAjQx52eMJspitvacaNkXmavA6a68vhoJtqCMt45YzhcXxWZC3ah8kXdgKqPpMyUoNRpk7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uM9kY9Kahn1kwrns19Ri7CNbnVUNnURMKnZDwsE61jBd9mXuigYD2XPjbmdHyJ3KD5GbjkxYnRzcbZWxHsQE4s6",
  "key1": "2uwWD7haVPBohwCSS1hbDZTBa6WeuV4cHnPKMHVYUEPsUzvxFg2KGBFMdJdV3ABZhiaBBVrUgs3FvJdChJ4eZZDW",
  "key2": "59jacTWhbzVe5Wi6c24RtcrZPKSbHwVL4UK5rz7D5jcRKvBy1qa1VcHMo1b2bAs58NK2zmyaJ4pCSRhecivuYYRc",
  "key3": "4Wj8FWWFtJ9vjwkKgEF1EcxEp2xZZw31Cy7VA8JB1rtrUixfpi35XyRibNkrJxUeL5FpFGuEcHJqHB1wgB59XZA2",
  "key4": "4QjH4McUdBoWTYedo8GHYuJHJ5KWs2JV1rK4wSBMDn7nZae4bgetTUG1FstnwkpxdBPdHiKMbSpYiNT8HXCV2pe",
  "key5": "2p5fEVihMPt4GMyZ5hKYmQATpAYqayv7QpnjQV7uysZWwaJZ7A6Ze39JZoDfSBKnVRz3YEqFm88qKHsCSp8AfCje",
  "key6": "SYw8KQ3rGv3bsSLKSFKshZNzbdBmAJEFXCJFxkxCxAM1cKDAJuidWsqT3FRFPWX2STNuHBb4qbJda5b7YoJ7kUV",
  "key7": "4MafJbvcSTLHqewEJq1ohQae2KvqgHgbSnUa2uiLqtyD2Kx6EfJgA6KuJ7KxbW6ZjKvgocnJJFGiDcVrqvGStshg",
  "key8": "2AQZsC65vyLYyC5iWsD14R2rTfgS5JRYVLE2WZfN4sQvJShzPKUL58W6f4qCYSFo1tNmWFJAKNVLpGmUBgvmcA6h",
  "key9": "2RA4RHbz48YwDZxT8hc79V1HcmVtEHZFKFMCf8qgpeujxWuanxGhrtRexGSEV1xBinwTSVfjXMdZCGkaNvvkv3M1",
  "key10": "31XWsf3SA7FTsQ6WsDFTW843A6bqQXSkYepgRFgMaetZccu3WHeHc3CsgkaCz3H1dfaK3ceDRKkviHSMg7T4s4z",
  "key11": "2mey5bo49vtLeT6bNYYoTgfbfaNdMBDTDXY7wbKQmfvpw5F61gpUX1eqC3FzKJc7H3GyGpASQBRtm8omcDwAvp4w",
  "key12": "5KeK8sADkGw4jy3RNfAjtDooqUzTanEuXe4ugMCGcaCdBvgvRevfq3fcA8EbZX2WpzvCw6AyjEuEoQPM5bym8LKP",
  "key13": "4BhH2hHxg4FTMbtiwucrDkJj4MX84Esupfaa281GDEgkYAKDBGF4mL9BjtAEatr4XTZJr976j3ZCit2onfapjDkp",
  "key14": "3KodQsyi2pZ1oqAkjhbmxRyjdPykbva2qc1adubv8Bzk8SFbBUiKx7NXJbsXrvxwucCTzaL5XcKnzmD5tUVcj7Rz",
  "key15": "61fhcdDKC9Jotbpknh7tijoPfoQg4SV92HG7Epct6DGWfSUX2THWAPdGSDum9Mzmy1kmFeTMrZx8884j33K1Mu8A",
  "key16": "XxKWDxGqnLkvhTqRCAML4H7CqR4WEh7RHEjc6fUfCnaCRVmop8s7Ng3pV9fYSFFWvdZX1BfQfWbrpHQmQLqYVjT",
  "key17": "kuCFVifUKm8RwYMYUmush3ELG3wZAfvmCWerPftSJP3siBWyvhGJpSYFXCPNaqbSJzG45Ln1ewZiJPxco74DQna",
  "key18": "49ph75KPZmXzRnphjrJ7abQFHrPN76UE1Z6Q4HghmoKN8jepEdy5bwN9wL9SgC9JDuixqvgMU5jyyGaNXMrS9NRu",
  "key19": "3rHxDZRoBbqMChqVeZy4yo78Nd2vey9HYtGTtKGqEbdrB5Gi9hYfW1555KEt5h4mkaKnVsCJAiVtQS1ZtAwSm35q",
  "key20": "4WGMsH8iKYRbyg69Pipf88jdsUrLTuk2G673MwKEnpt77Lw3trxqMwnpqZAyxGfDqf2LAw3NTK9nPxDJLsJdqm5x",
  "key21": "5Sj8aF66etMvZHU79ao1FAzggMCG6XaYaQbYxUMrtHEBGxzGeLUX68Mzb8r55Pg4hr3ECehGfF9wfLELsb5ibwYU",
  "key22": "orFpbPZGD9qdMsnMCKWjMNDDQPZCFWbzQTa4XgZTqjcRUyDTcE7QEFR7vbLYx9GGRtTkMwZNh9ZacaMu7MZCmRL",
  "key23": "d4G1257vPCSVNvgmnL3CLjnGoUyrsPZKUz5hSSVmNFGEwVSgtAJJDdD5scpayX9c83Zp6efBDPcYYzrpfuM3DGM",
  "key24": "3xo419EvuAnLqzMdWomiop8hBqf31FUJ3HU9TXz4mKM8PLdikcJvfGN2pfvEjtZs4K74VVJDcLMiLtbD1YVqhHtn",
  "key25": "4iSx6pvnDnutAXdZ7sQuADq4HBBUo12ELMp5mqxEratqrc1FqUddzfsiSFtxYVyfNKuhwH4D9fCjcEJJECg7sQkD",
  "key26": "3tLrkjqt6WJhLGvLweKmCfjD1AXdD7SQNYV6zefS4Z4fEa11iiYSHyw5wvE4UnxBTx9JkLDCvKDBzG5ezkV1AeCr",
  "key27": "68k41cKWTGR63VqXDjKSuDYE5cQmUDBzvGjjGjcd6aSgpzBXGKwPXrbQeLWnAzu53F5X4JSTpgDJfBQ9rse4jix",
  "key28": "RDPcQGayoRC1T8NLrmxxAbQj65KQxgTj5NrpmBDtM8pD8KWZJ8evq5nb1VPS1U5D9DqXx4FH1sdiKfGNASbMah5",
  "key29": "P6SYWj5z32hfKGhStYhEr395Wphja8HJ9D3rwkPPvUBDQNFjFA259TDZMiYMJWiJamwPoPnS9p6DSjdjmNWhSkg",
  "key30": "272f9eBX9duHyAK2hqD5oUKmJtqsP1BQ3tTTYVsNFVjKvxALw6Ai3HEGQHJGB2ZKaGi8Pzz3wmgBys7k2EiSaXND",
  "key31": "3oLPwJdscGwccwLKqUg53FNrJhnwSFPBojhCrStA53RRgnK4NM3z7KN8fjbj99KMzP95YytPpzEeFcGzTuFQ1gUn",
  "key32": "4DRXNP4iMbGjswiQx6Kv8tZEcdW2TCJEXxdubncvKkawzXTntSDk4PvURcuHbtzpzfqiHgCXw8oFDK2tKNiJnw5r",
  "key33": "2K7QbGTRTp9c7y2sneY2zm44XdrBi9crn2LwZyAsPE6Goeyxz8NN2GdDcAWER4Q6UU3kQJv89o1G7PvNHvJXXt2S",
  "key34": "2ieJnwCb2dXv9YYF1S6ng44dDKfH9qLiypa6BPaTAfsVn1xRjZtvv8mW4dZPxEKpxodGa4Y2fQzJ7qEe1QGXqRow",
  "key35": "26GZjFFS8TwniKK5Q1pJYyNANMMXDtCJdNkZVWfKUA9fzu4vB5BWzCM917f3VXPGqknH5CXsEacMvz4wTUkfYAce",
  "key36": "3FxuuNkwJ4AtY8uXnNA6VJxw9opXo4BRgUULFDQXuUsqKcXZ1dY6wciucxns1UPkF4r2PfRQ8C7u6xpSFi1p1DqM",
  "key37": "21r573HbSyTdAwYQZZPBDpWDrjeGor5aNvet9LCTkdSh9iFyZJEK9jitAzpUXnEVqjiaMcWvWqB12XMBVCAgJYYC",
  "key38": "3WAauszyEpyPKC2nqT74USXvNfNGSp8EtRRAgUpBaFUK6EcVH4qkauFwkpLoijmTmUUwYwoS43oVTTTBYWZgESx5",
  "key39": "5QXRSPXdhtBLD3puW5mbxP4gsnF9L53ovf9hntDPo2YZNCXYddVh13dhuHvsjeRHwdnqJ72wJ7nzTX9o9dV4Xnkd",
  "key40": "5gdsBs8dAcxtjvYktxthyrgfi5Ca7XRVFj2JWL2yEpt4pKmxGWZGbiWQ5jVX4k2eJ4kdPPZ6FCLSHDKaec28KMKF",
  "key41": "4hcZZgPr3NZxJFpYHSi15HR9qdbYhUxXixx21hbsaaYvyhLe2SMUCz9Utihkom4nqv1tebNaTWUiXAQQrj4TWrHa",
  "key42": "3uY8mUonRi6iQ4xQMeeJBWQDiKPqa5ECbAt62Lcsnj4ziaAU1Tzko3tJEAQgpKydht6Kyokk1VQFiHPnVeDhqQvS"
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
