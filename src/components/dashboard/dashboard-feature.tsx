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
    "38esdNHbg8MB1t7VhWVLmpk32S8vSYmP7SfpHYqiisAe4ZYyn94AeiuHuG8SVAz276H4eYf8SKtCjWfqQBBAvDzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Uk7M6dKPgYx3NaWB7kcBR2xfyvADh3yZYbjqgFJMigkAWYaqUGvfiwjX3jttpsqHeZtsVqAb9X3HSX9x2M8spj",
  "key1": "2YPEoFaMZrzTDRMSTeEqD2YuY9xMVV4REaoWMeM7vWT2HiyJvVyNpVYt9ehcjgWHzQEtTVAVLVbjWanvJrhzVbqT",
  "key2": "3C2qnFMYMbwHqtqANekjEZCb4TwYsxDfF1TSrKyExiXWfF6gQPV7jnLhhWZsws1LcqxQU4DLecXg5r6tsvrnKz9o",
  "key3": "2tBARwoRNZqcsxCD4S8fruVNkp3dPoRRmn4mK2QK249hyP1rb3jTD9HnKLhYLv2HJWHPoUNMpAoCJYV54RgoYCPo",
  "key4": "nm3q2BXs6RDZNvtdNmc8X2CgA6wxjbq6wqvPPJDcNm7ZpKwYAeLnyNHvh5TWDvGF4wryJphfH82cj2mKRn23hYR",
  "key5": "tPwhbDmQVKXV9zq6B3pVDE8MNJvaaoKovbS6syqHU2LzqXb1mQvMCbXbM8G1UENnSTcGDPAdGA3n87XWiiQzk4B",
  "key6": "2hZqkkEzrU2emj53qBVCKnxKn8n2sGiJYMAdqJshZqszvt3bA2wbzSxhfs3Rm8V13y9YLPiEMFe6uvLwBmYugVuj",
  "key7": "5CqxwozAr1R1Hb2nm2avB6TpJhBpsa9Asmwi9XHmkTnyTLjmUJnA1SYyaVhq5Xy8KBZitXW9rZbLt4c7FqYwEQgQ",
  "key8": "2PYSm9brGpvi6mK8f1KBNS9fKkLNLvPomsVs5PtiY9FythTTWwBUifFpaAgUmY1oYdxvCSEcep9jZsAeqcu7hynz",
  "key9": "y3vEg5ziw5SvJ9dK3Lc7RiRJhZ6WtJpLLszbDGohkpNc9hEoix4Krmm5WbPbujK56LMLWBpuPNj8fzw8rsnfRn2",
  "key10": "3BGy7VuDvYmSAMfEGyn1pztqSYbpu2boX8DWx2AAbYdpAydeRuzV8GpKaUAZ1zhUHf7iBgYQZhwZbB5FGV5UeCtG",
  "key11": "2onx1fHWjWtWnHeNkTiLxB6qWaygffGhgDxro9G24RHxoVCgdmEL9UWTLHDq6sm4wPtnX8h4A4oSXzDEy5U37a5Q",
  "key12": "3ciUu946557NLQ8EJ4hKjTR2QoMoVcXEzpojq3LSvsbUGYc6KdSLj3t94Mg2VqUovhv99F5tSRMnGXnRGqohucKK",
  "key13": "2TGRw31u8n68Zg217sYUSgeEcEGkA2LKn7562eGX8UeAwERmL8by5ChUhxAR3mxLekQ6Gk6fwEPzz2n3oARUbiFF",
  "key14": "VAAqcCCvroZoYwccjuyMzk75XHGTJXoBSpmqV9AtTuXME4k9GT4rZ136nAaNf2SWvPgzfS5vokuQM5JDaeA4pVZ",
  "key15": "3miXiCJUmGnA3XSH9LW4465LEmEaMaoDNMAzNo7K5wfmGnX2SgneKhft1khvLyDJ9N2F7GBfRoT4QyidFHyFNJDG",
  "key16": "xHjreTsRk9RvKSj6JsUvhoeoTu1ztFGC4rTKvGVfpQk1bERcHq1LY81VPvGQzh8sQMFvAuiJBz9zgYqtP1rkSUr",
  "key17": "4qY8iX45PEk2UWkQQd3FixZdrME67X4zij35dQLseWok6kCy6KDoaKksXN97NyVMQvmqo3jTr6V7Ko3pMpx2hiuG",
  "key18": "47CQLW431JShPPKWcMSoKUaZDvFGtVU8kr7FnPYUZp1thn1McCjyhCAQ4Q5LghrYRbHXLW65pSkTa8srpErUsgWP",
  "key19": "3hjyYnSpkhwLr44CQsiEqWdfDHSJPikwr6scyH2wBRX55hqNgY8gWDFcxeRUFEZDoNomKNFHnkBRoGn4TfsDBLdU",
  "key20": "CnQMTFiZ27kUEaFKyib2oJb1P2aNnuY2KLwv3NsvDYFD4JJVK7BoKTgEn4kSavQApBec95KeS3GpLARikRjCYqM",
  "key21": "2TNWjPSUDjPtT13DgRwMtPoG1STR6j5UFnf7pud3YQ5SWBTpH4M8BEBDVYx7etnYwiZUahcWLehHWqXWrHXtapLM",
  "key22": "28DGDRqxrWtLszfJoQAaxab8f4Kt6NJFcUw8oXa96u9xDdLas3bb4b39s2c2G9uHFwptMnFKE1MXJ4Mj5eLiB4Ba",
  "key23": "4ZNLuPrkAhHHEPC2WRT5shiSWzy4QN6mNYMpD9eJvFUkJzBNG9Vy7GpfEQypKe3LQcgT34JZVtxQDBKV1xh4eno9",
  "key24": "5i3Kecgh1XfS9DKgS27mJ3pkcRvGTse72BpZaUod4yLFvdpBu7GToZAv8mZpxtXHoSeUvJvFhKNCRGe2ar6Z59Du",
  "key25": "4RKQEK7YVSG99RUxhsqb8rirderL5pRvcn1PXTzAJGie8g1i3JKdQ6aYFTRGndzF57yMb7CEd6bdtiPYwHtr2q6i",
  "key26": "58gitrQrw5y69ho7TBKmwVHq6ueVUwHWrdWYYGwk2aWweqb2ELxiAarGENDSvecjyrmevC2Vv25oa27xD7PWBivr",
  "key27": "3RNZk6iU1zFNMAuchtZ9xA16yVCpeCHCxNKN4TdBa3NHWx66MkaiXzdJ1fqRsowaE5DrUrhHoNZQMjE9PvsH1FbV",
  "key28": "3pDM5ZsqyYiWRHsMZBAKgCxYgP9XNdEm21Ek9zsE7yR586fE445wYrC8tTNXChN1tPKFGnwffPnjzPCkSXNvCWL8",
  "key29": "2ZcdEKK4K8reArDyKRz2qj1xF6CgFtTTHRRvYF9rxHVm8dUbiAEAhYuyUUsRST3Z9xeEkn6BX5PsHZGg64yvzCS4",
  "key30": "APfTPDzFhYUuFXabNPWzdkDk8cLUpVmQL9eNDknUmuCsiqwogrdchKiSWNLZg7vnFGZNz9WYdzNhRv4UVXMRVzY",
  "key31": "4anE9SrRXuzXF3ZJJR6pfRu5og4dzQcs31fGf8g7XUaVM2VfXNm6iJLNGdJp6bqYmU8Mqnd6UY5U1ogfv5pt6WAZ",
  "key32": "63u6HJTibRG1GXaZFPmh8kX75uj7L41nUcTzbGnnwRaBZMEEJfBW4Vxj665w2RJicXnCFAWsMf2m26PQ9aKjSYH8",
  "key33": "2QqdnR8H8TRZuskahFUgr8rgS3sU5A1nXijiwnmRRLWTWete2Q77LuGfJmRo2knzHLK3k6ZEYUag5MV1zVvKNLK1",
  "key34": "4hMgeVKSujrvtyhataEwx3mtwPjSJa6Lg1ekyRTHvzwFkfLEkHAnZxHV7CNafQRqeDF495bXgD86aBMp9SNTYtvG",
  "key35": "2EHKmUo8Qe5ewAikRGxV73r3X87URm1uvxxbyvE2yUnHNBvt9T3UWakjrK63akpJWmKG13N4aP2rC7TECxSgwuEt",
  "key36": "5SXtS2oryHvsB3pAS3XhHsnAqK7nbQXngjbazvj2CfriArAg4sepGvUa7krJeQZiKqkF8MAQ4r9Sv9Vj1gQqEcFU",
  "key37": "4TxX2XUQcDqZhcigDW4ai1TAqJPasC9gTGa6UNsYaEsQEX3WQWtZUyGDf7Ecqr4m5ZWBqa7bFPncn9n4PApsG6tW",
  "key38": "2RBhaSdKsvyQuXP8YuzAVKC46dbRjtbbLbBhdWJjXMdGgF5De2vyvpuN1NES5o9x5NZYz7yEydwq4y11UkjKY1Dm",
  "key39": "4ATHxgdNZz8xSkt6QwprPghdwxb7FHDmmBwU9XBP9xFHpxsvZuyqcP6vS6TucFpLmdrVmjG8JsQbEhWRvXzZ147B",
  "key40": "zxrCrNRQzjw27wj7W87gafUuiSoSWQ5wPQ8of8M7zem117hAkMCvwLFUMLA8fJKLqsjvJ3Ktr7Lswo4CkVvJhS6",
  "key41": "5XYV9ypPf35NyYB9WmjEGUaJq5our1LJhmNhX9spVEUoJSUekbZHCv6XyGvmeG9pRFfhJDqtMzSYGR1QMNCdjavY",
  "key42": "5eZDYCqdqDKry1vU6STw4KuB4zDWG5aPxZ4jfd3Cq3aAiDVtGhMnNWh1UHon6wx6nBvn2sRxGbLvQ1VZMWJCfAzb",
  "key43": "371vQoFE77JeLKgeMsLrcgdhZf23KZeNzC5kkmyLUmsGTBZSWDjAnLpAPSeVCr6RjHbGNXaj1wXJgyxCWdfK54ue",
  "key44": "FHnsapr8WAq4hekPfV1Ww7hho2oUPBPy38UssJX32FW61EnZGrXvvFWtBrBPakncuwB6wD8kGF6rBu1KXeXHBcR",
  "key45": "YYDRQUZK39Qf9ospmXDMqBRQ3b1yGzDkE5ZbxU1SFzSQLb2GHHbg1AFE5hgvD2DJnyNqKCEFWHvWQ1dik1rCjpm",
  "key46": "3huXbvDxCxSzGca6zMEWSdMudBVrxW7Xk7EtFi3EBzSXFsc2qYXbHxnDSmu7oD9R19ukTkwdRFqWwYkrBtYUTDws",
  "key47": "fiFkMpC8Jkeh1bDP2sGoPhBznCgYApKzLSbNubQ7DHeCEYL5QScS1536aP2PmrXwtkYzvksjQJFfe1wNjTti93x",
  "key48": "5KqgbPS6b2cexiAQi12s15pf5XutzhE8fVDDbvcgbzL8fRZS7517GVj2kXki2F3GEAJq25kushQSdMF2Q4488KTj",
  "key49": "3LGvsZnrDVuTzWF29MVqhxS6zZ5YkLUsfX7HFyeAomzRKyhR24Grc3Pav3tKQ6u8EG2vqqJ4nkZcQGqNqKNwadip"
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
