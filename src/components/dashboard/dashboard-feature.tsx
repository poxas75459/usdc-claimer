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
    "2m4Rn4654TQ1EchWdy48EybE8feJ1qYnndcVwa1yopSUuL8SEoEkHACrYHQifoqFX9C19nGkZttehJDh6KTnQgXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HuCnWSnbVAtJtxnwxz23nPGJVw9WAfPrTqzu6uMywnJKmokvxhDBUGy6mJcMwLjz5GcsrfyXrtqAZZbJ2oSm2nC",
  "key1": "4PiX3ypeejydJPb1wntnQH3qq4iLuDyDGVAvrdEnsFJK6TRcpBeHL2TEmfQXbst89a4yEhatmoixGJBNp2McQLmG",
  "key2": "62t8x9zTJ24tviCkDdpqr9t7bgGuuWJE6kCJ67FJGxV8i93Nx739bwhWQydMhBgkEscGzyuFvS4DBDJLpMWNBoxL",
  "key3": "4DcRKdJFz1NJdB4zuW6Zq54zUVuP7a7T1SpaxtzsTsiegbbjv6XCmkep9e34iyppGaa2FxiDkm1torLSwN3cXCrR",
  "key4": "51Pnh3cWyFZ5HwZEEpjbffDeFAwMtp1eqvUeFpZ7NZeAiUJwczK3u1aBCH4ygaPo2uEqegayp38Cy4sWutaFsCT9",
  "key5": "2GE5NKdpz2KscUhfNjm2c2VNFvjuVnuVokq9ZJ4gQUbd8Pf8t56w8oZR3wJSRjfE8CrTmwrmDVox2ya8Lg59q9Ne",
  "key6": "2JGBF9VbrMFgNLV3nX5gvN7ro2t2iGmeA9rN32qzKmmKTLPbMjTPd1BkzrSuzjtSKUm2swPbvsrc6VqEAF1P5mdY",
  "key7": "4AKvrCegULcYVyQQX9v7kHBPdDK81N8MTFFEXLVpUf1PzEkB434kGTYiUC5wMMhubsYxjGtXEERXqUyyGyu5Ey3w",
  "key8": "4xzi8UQRUSdEmJsR9mswP4xBXiPqsaHoEpne3t6KDXMDGGrq65fEt8qVb3eEKbtW8FDVCoqzZGRt96Yo2E4FWtkP",
  "key9": "zYDjcJhjByZmghvkbN7UT7r8rbg3YZUtaRWBAc2E7cJLSUsCWZ5ajGSTg9HsjXvUZtFSDTexjVXd2UHpTx7t9s7",
  "key10": "xEj72p4cXWB6DLAwJXTDUmSUFFpu9VRMozqeiG8K38bLATrEQujXysqGsgRmrx4TK1DJUuWRRprmCSjekbq44Xj",
  "key11": "5EPbptTPKkdv6JPfPPeddR8N7XEuLzi3zXm69GoTSknGKnJxjRrytDEP5sA5tzc3dWcirBaQwciNj9E5TRtPZf8P",
  "key12": "1otT9i3JKtz8M1fGqpSpEc8ud6gPveU4Y2UhFxxRspM2VeMEuQUjStdPyetoyqAdgwuczVPVZfaSCE8chyYpTt9",
  "key13": "57kwvvXgUTZP8qVC1xhnBzEfouASkjM4qbrQbmBzpSzhAbr9fCPesgF94jdwW3dXrjc86MYs4w8R7xc7r1LVFhTi",
  "key14": "4bMQQcsVdkBD86t8Qjt3TXvWrYvcKKYRJrBco1iuiS5hUQWEfFWm2mppqqyZbSjz1U773bXprGJWCuyfMv7bsb3g",
  "key15": "3phRV5ZHQdsfonHk7mz8QnZUk4wp7Bm8xqsT7yVZJt2Qyxxa3JwL9t6siVzQJA3AynNhXZpFEQMPENB647H7u9Dp",
  "key16": "24oiwtwN5mdQtji6BAT8PnGTbi1364VwnYGWySWnvxCbR3xhdjMUcNvykEiBZNs5rLowesf3MGmjKKEACyEuV1Gk",
  "key17": "5YERhK6o5ATZ7ncxzKVWfA9gcg3hTdifCKRUyF3onXC5CfXoExqXi4uKVnNPLmCxKTUm6DxEHVp7aLv2CNCRbZdL",
  "key18": "3tuEcALPq6XWaHuK6h2tM8DA15QvXU3PydqS3jUakVMeDtQ9g3rg9xXXLWjfrtmC4vUnQ5JAtoNh4PPFzfQYb6QS",
  "key19": "3dYYhUkJCsvJ3ZxF7DsERkKTugXNjjTqrt9yrjUwdFEFmWFQYgkx5DnfybmeXFDrDJARTtwm33RahcGV2eUJd1TP",
  "key20": "33TmifNR8FxCRN5EddyuEhLwSrdAqRgayd43BqQvYAxDHThPJ8kyWaa2sh9NQbFdU8Ks7cTdcNedHrR6XtUquafE",
  "key21": "2npJztE4yREQvsH7zfSVbzkz56mbMhuKtMkA2u9C1fcP1Act8EufwXF8ZAfaQQA3mS3jm3KgpDeNQLVP3frVG9Zz",
  "key22": "3dyuxzMJofKNFDBkVRofh7gUJd1ghJi7o5MNnwnU8uBwELyFSMRk9p8SUntByNz63kKQ3wTBowihDU1RmUMpvBER",
  "key23": "3r1VhdJGA6Pqz37FJHXqvuuEyigaT2bKnewKpF9BM7kwjE9w85YFw25v7ufwyZ3PVFNaJASagiPK7S5pm4WDU4DT",
  "key24": "3GbucCNgDX8PfBBQXKGiieqvpVK1Qr4TntBpK6vocg64ULsLYVKAQ13HbAb8S3J3oPA2nDj3pfxdEMFtkSzTv3gA",
  "key25": "4RgSMe72rCYj7Dgx1vB7pvuXbt6iXJ3KJh7qZUw1xQ1Ms9TQyUSGzEvdiWZRJabxAtZSscK847Zux2WdJtTGqpyu",
  "key26": "3e1JwXyNdp3aiYS8KGvKyJA9gvXAKvXVPGiMvqyagegZdMixY2ZeyinaTJsNuKwDF8J6kDQyKE9iUMVfv2ZS4RUB",
  "key27": "38jqCJLSt3iyr5KW3o8q7fBkC7svdzaMNd6UUzu8wWAnpCiFML28AF6DmCp28fhBgjBSWC2vianb5vXUHr3rcAS1",
  "key28": "52rpcpgBP7ffuDGgvrhm8F3BWqojCepTHvWJTU86zqYKCnwSRTFS1SST1nmkPu98zS4bpJFFeM3jzpziyg7PWFyo",
  "key29": "325Js9FQWLd8vpkXr7Mf2Nxy2kC8HLmVdP8nt2r2cvgakhGZ4ZHwbF53ZpjQP23NyPERz6ES9oyoPgLZy3TsaLnq",
  "key30": "2E1m7iATRzyMrvabtmS4WzFJWV8T1sQ74vdhqn6bzGpaycmkDBT8T9Amh2383UZTe6swGfiU8JQ5wx7KAp6dKhnX",
  "key31": "2rqVg8JYqgEpdCK6E79xnaLgmGuLqW1cmEA8g1FbootijfNDnj6BmnJ5EJdxb8Sz1CxiLJXKXwnXRqo6u1GDymqn",
  "key32": "4QkoCXVvENQ7vzNTUtcHSkahcBJ18g1QG5gxnQ9Z96P5AXQcqUCNF48PsCMUAaHQv2asUEmWEJ5jbpdvE66rpxAA",
  "key33": "664g6zaDmamPKYErKhiWJExrvt6wtoZYpMT2L3VTxPEiuLkTVp8HPyDVpX8uddiokJ6EAuMNc23oPjwU12cRGxWK",
  "key34": "4Si8tY1vfib2oVQUPgSKG7sDuuJzrb9DGG3zjot3cJPj7kbLrgQyRMk5XAA1qXCvNR3UJhv1UYZ8pfpcUdUCMMNb",
  "key35": "2Cb9FUQpi3wMMLy8hUnnNrBt6q9DvMxJHZvUgoaKDZg7RvV4oLGYtaXxo17pRoAmXJnipSfvc8TuuD5SMehrkP6b"
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
