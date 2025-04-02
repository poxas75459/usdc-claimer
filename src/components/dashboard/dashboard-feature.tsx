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
    "QxZ8VXmZguigWw7u5vLUKRyU4hipuc8wNKxAiStJikhDV44TZBfxqnW4xpsRyCZEvCQi59JRUhLSKooEdcxX5t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nd6mzxwASMarZtcpCZjD2vyRHwMpHxaPf7rmmU6kz1Y4LWdRXP36X7MeDdnFiM55AFEHasfPRakvXWSZe13tE6",
  "key1": "t9UT23DfUjTt7zXzmVEvfv8DJ8G4pfVcbzL2dBxQ1xcWJFrsprPbxQMQECCZRXrzfanRg8mKTAttX5S9KLMyLmt",
  "key2": "5DbWo2wUHzpoHWccZtrPjf3rnNSL4FzdCnaTVFgKYJa5HUC2pMJxca2orRoHr74YXLRQt2DNp6Dmvq7coGJXPsMq",
  "key3": "56sPjQ9ihRu4F3TttTsdKddyZxaqa2nvNnB3ioaDEv6xjT5KyktYkGnz51v2zbxidQ7AoRSZ2JbapYSiNTxxF8Ju",
  "key4": "5GRQBu8exiM56NdntSCbKovNdCgpdCzuULjkfCQotUmGC9TpGkvPNpyTHEh9vjPAKQgWNEd2YrUMXL4krqBirVGc",
  "key5": "3kK8o62umpqva8Ff6V77FngaSsMTp4NPTEfQcUcrhL72L6tJyZTuLSKBsD23kEHbiYZELvHbHcHXBLECBACqgxbF",
  "key6": "3uBwn6qfNYU7TedFUuQPL5JeeUp8tNuNuDuXeT1e3ZkKiXdHxzn7eKnbjkxnqE7wF2rANjdEgAikGcW1HD2GNJNy",
  "key7": "4F2so7sYLjM1VXsTr9ssBSr3DetBs8GzBz4pxcZzqPNBbm9NgMPYFKArGdd8t396x4Y3xZQ2fVsjh13DeZSdshnh",
  "key8": "5cJEZFC2dUrEi1RSkvbVReEg3aqC1JqgUxpUJdidwigDAb5wTK9hgUUVJnahpnVmckBiYCLSLq8gSztWnKj72ivp",
  "key9": "cVisw98bFS58RZ7pMRbZ7KPKRqCYsanJ2sKFasW8UBpYuzv2bCFpEv88avEbbWCHXmd2d2m4SXZoGyRCbiDWJ6y",
  "key10": "45oinDsTXu4Mx1vvod49o6XHbLhRb8cWv7oT1b3qe2ELpQiTCf6AVhu9zQ3SNZjJ7cCvMx61WhqiYZHhwu6v4wto",
  "key11": "5LbBMkrU2pBd47ctHwPyyFv3SLL6RYd1UP9He2v1TSkyE9zFZ2nSnLvWJMqw1XtFumxKz4jDcvQbH35JJTZ4vYeP",
  "key12": "3Mh4TQAPm4bFTuu7u42Mrh94CVk9i2L6xA8iZ8pNz8xPinJAVWNeZkev3hTz7n1sn4GXchtQdEYKvFJmQPPaos1v",
  "key13": "2YwbBjG16ESgG8a1BVw9oD71v6Gqhf9rYN7rw5LJiXiiQ4BmjU917gWrv3hB7oPd13qyWa9Jdj7XcuKKsdmMjM8y",
  "key14": "3kZWL71cydCzw617HpUhUmk2uGLt1JotNi5mZhYvY8aQShPvNzEHeMKf6m6MBABEC6WcFG6xYcYgEvtLaW9x9v1n",
  "key15": "ELtYcLFoZ5rwW2Ata8Wmr6GH2SZuXRt1UdLqKqLwz7EJEyjCCXEZGUkXgjiveTiYZBUAoFhSUwCYWhXSAfahdkr",
  "key16": "3UbnQqPhfncos6JSj4myxSvpcC8atkhwB9U9VwCTJM6aknf3EgqufMVsB2nBtsgPb3ccEn3fEoF2inGyCFCBLkiR",
  "key17": "39WkDUy76JyDUf8VTf9f4SDHcENBc9dLgdXoMe7EUEJN31LSLAHZAgnmrBSkVeUe4NuQbfyir39rFVV3xXPzoqzV",
  "key18": "TQmnGoesi1k8qGR43vr5yozJRBEjGPMbV8BrFUZU6TihbJfu36Ydhpan4A2fQxAmzgdBGbCoTrnhU53xfHt55iH",
  "key19": "5a8CifEUcpmjDLQnc4MRKcBrkRMomh1D9Wuc3iyka1si4DNCs9ZyikfqCzXeCbLwoCo54kUem5dDTbqZZB6WuPGN",
  "key20": "2p8frG8smTX6xq9ExBjzFCMUjycNigzHFQzMvogLtezaxqk3LM7HvNSQEYvGPyLjttVZJA6SkAJgeP8Y1NmkfMEz",
  "key21": "swZhGzjyBSJVDRzDCnTeGNmkdGbuC92ea6Y4o32nYzrx9acgBRHMozFo5neWTvgTP3uPoSnKT87WJuVz1Yrejww",
  "key22": "2qBEDFaeyQ68MKxeBndfWifsnumWF8WcYjuDdnkrfa6nnLd6hy6B8FpwcMKe6XX4KSBGp843B8VTC7oQ3a1onDLH",
  "key23": "85dSFSmWCinkNaibRqnDcPcykchbzgBh72WuoVPKkGwVc6Zj3eKP8gW6YQc5bH12qyvwgmbxSnKEMMj5bY42dzU",
  "key24": "7kCoXfFjddjuSHBUPShbLBqrbYDFTtoHQAYsdg81k6ttiYGeaxxE5fgwfZyzQmWi5H8G2LHFtEqvgMbVo7Drn7F",
  "key25": "2qZLwiqJqQEYUbSqLsRNeZW6cZwTRS3wES1FA4ohDXJxAUeMUCf4mqDbEzhTqFFMe8Q6MALAtf1NF3mtq2n8H3xt",
  "key26": "vXcjk87SZNXBVipeGPgvdUL8CXbv7GRi1JiuukS8Wo7hxw97LaRnpVu3PN51NVHXSPURQvDV9JduWeVBiU2QTzD",
  "key27": "52gPPjQtfUaogrxZ8gTzt6K263NNpjMcq6oyCxsU3BbZc9KhNCp62rFsmmyg3UirkGUhV2g587ipmWiUqHV8kpjj",
  "key28": "4kTvU7f1qHVw4sAmSYuscbkmNrFPFy5ufdQqrCf6kmmneeyRMirKZQQ6mu9EbJFb2MHQmfwZFUttn3yRPsSQX1QL",
  "key29": "217NoHvHHatikggz4CkxTtJaLbD2XhDd2ShMzGx26DkFf5hvMpiPkKUm67Nm4quvtaEqBRePgnLY8vra4Xa4M4mA",
  "key30": "3dy5dVQan68857ErEs3KFuNmhCT9i7HZxwz8VeNsvABWiqesD2vvVaztXhzxGgmvfrXikAmkBVrFBAMq2Roupxuj",
  "key31": "3ikbCz5tJaXKs8y4dnfbVnxTUynReZeop8x9vR5vQGZbJMRmqkcgN528LXTMdx5prkNRPjsp9WVYWeoZgfcaRHoe",
  "key32": "66YoEaTwU26msTjFqh4pzguCFNWZvx4tWUupSYrhZLJa4K8EtArr3SShUShwAYXx72fq9L6f3pTGWHZskEsig5Md",
  "key33": "TMJJYpggHA3EjfGqtoYhfaRkXYnD9K2v3U9NGcaMxP5XVsT9QJw5V91GiwvbBbpdvEbTMbUfugSRJTDK9i258uc",
  "key34": "du2uBidDaELvVmzdfrsNmW2CMf7nizCvdPEU5MoNnXUZg9ffAQ4qvjHod76rmHLfE3bpAT95XsdNeMv6Arib7L4",
  "key35": "MLXuUpj1bECdV5iSVv9dUejv3VSGL1K6NNASGREvQJELQFc7Qiit7HrdJjC7DfD7TqjZXcazTdMPjbVMqGnvFDw",
  "key36": "2UEpCXSSxtZZKFAfX44YgHeVKRzaG7gBFuCsipLzNSGnNjSPKwDbPF4ybEuLt9Rci9bPtvx9mQyhVLDbw2QK3TCM",
  "key37": "JfbTE4RUWEveFVNUph5caRruioud7Hoi32vTPud6LFyX5wcqnwaSRqZWyb6mguKc1FXFtPrrjcFRJv2jJLT2rLZ",
  "key38": "62UpgSPMQvw6osyfhhC5QT5Lk6yF9Aj4aq9AFQEC2g2vquq6yhzK3ow3SvcCf8Z4aW2SfiNVsojhSm6buepdaJKB",
  "key39": "44jLdNuQrqvHty91mS9hbXMw2HggtXAi5d9XYpu1HyVNYWcv7JaPBLfSeSGVWvnS1vvREUqkKJqGUpFCeZEECsvQ",
  "key40": "4W9229zigahf49Mcj5R1Trcoo2sVN67wXkdHyGAz1JErEnveoiA2m9P9w8cgSRADcEgdbsHZdE1MaowjhgrwxUQe",
  "key41": "Qsny8h7v7jkukhMCFTYbbWmroAeYaGxxKG95C3ptjksxHKsyexG9wLkZ9AYgBwiwcnNzcb9WXmqmrUeNXVkh7kt",
  "key42": "3KYZxFpUVShQXiBhzao6FXk4z11dZmZvzPY1fZdimn1REKg8Uhk5MQC3bmeuY8YxmtNmPeJ8eGYZCWBc1ePfAbf7",
  "key43": "nrxPsxZwgkALH7MkeDjnxDg2cdNxLsfEeCriaCtaxnay6Cinrepe8ncS63x3Jgj2os28mqgR2XvyEE7vfe2tSKo",
  "key44": "2JaJPx758SdUe2GxsV65utqFpzkAG66ENUKFaMPCNrn6sXgL9kXYwFippotA3ii9Frh92QDWSg9nUjbPz4LmZemC",
  "key45": "35QpPWZ9KBdaSmc5VPjCP7M4fCVVLTPhgbFaMWuQb5Nqmx2wRPP6HDFi2D9A4Uzvw1q2bJTr39SKXuwYagjW1uVN",
  "key46": "4W8xS5WzTyWVt54QAwT5887mYtvC8aDBiXM8qyfMMhhm16MJVg4tfdhY4RRSvFoGksCoSxT22q93dhEcBaGXVyfZ",
  "key47": "3RYjXcfEzzP8V3MhmNECDxqzZug4aJYseo2oiHzNiPFJ8Sm9HhALJiCAywgoMBBgnZjEQXTyJd7YV3wkxUC9N1iW",
  "key48": "5re4z8pmGMg6L4L2KTDHComWnJc4w96bUKg8xN8cbBpDDb9jbopuDSrsGus6d14SuZNvavP6Jjfu1arYed1TSDaV"
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
