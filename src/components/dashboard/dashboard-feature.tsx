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
    "5zeBp7Tza191SgRMR3q9oRSqoy3SRsBhiSPTjMoVueLZUpkF8XteKkXYGsYPxM5RqYj3XxFgwVq1mMJedtR9zLo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EadXjnuwsDPMgq45S2cubZrA1PiHDFZds5Yi6U8HM6UmvoBA8PgCfb91mvEobtwZckk4R2krMqsZ9aUpTR61N69",
  "key1": "9CxYiPFBJEdRumLhCrcu9ESt64xRoD8WPhYLgdeqpkirrYeXtuTJqnat22fsHf1hyT9dE9YXGoBJerKJG431zKm",
  "key2": "4wYcjs3ksrn3budXy5eSh4Mn2ZwiCx3Ko937DDD6AChQasKoqecA89Gmp997n7QUzxUTxrGHPTTzABn72BbXWDEZ",
  "key3": "5rwCVV29QrzPfnNad7pyBEkWC92aBqW1SM4wBaNwyekNewjkWADBeU28vogV1xVWhrceCsN6zM8L4TVWG3njhGFV",
  "key4": "3x7gbonKTKxXDfvo2K1aAVzMq9dCdFufdQJX2B9quXobuE3GrixHdpGa7UqDgpAHN3AoPEkGaMnTkCNB2HtECAUM",
  "key5": "54X9oc5kZwy8Qtb6Lf92NDwJrNPYim6d7JQ4PnpEb83CG8ZEmoDbD4orFfjjeiricVRK6uC5S9khmfLbeu7eSfTS",
  "key6": "2EJBx1uHFF6ZkWsF1NG4P2yURjGtPJUZdi3hZ5kJithQVFFgTfXoXLsj1ZpRNsPDodtTNMuRdvnqbFGhASU1CaLc",
  "key7": "4LGuNVM9nrozkFsa6h4gGb8TdGuTxyMFYLubTab6yNM1W2wv5KkNhk7g7emxNHpfGZuyGp6Tp72Xuyqw1YdYbP1Y",
  "key8": "3Lt6EW52gzrvnzNuPS6gmK2M4JoPHSBmgx3PJto5pqc4xUTxYShqWHnxrSWNZsudADgfiQZVUPXoj5Gwys8X3qL2",
  "key9": "4PJ2sxdVgLnuk6e5gbGm3f4x8TQWnCncrbZSZGdWAFPoTMKi6PvriGhtAbW2r9ttLkfUXtkBpn62XHR3TurFnDKt",
  "key10": "2yyHmhgfbvZRre92NZaGNpuu56bXoPNUT1mrp8H9daLFsLUrQZgyq8JhtHPoTK3rANwyTrzo1jnRat5GHVJTJ1dK",
  "key11": "5LfQNcxK9xJ1JJgz9oD8BnR8dqAxhT9ka2pZTitTeAFRShg1rd5BWTCXvoaYw4hwK5hNrD3A26QqfBi3Uv7DVTxx",
  "key12": "52xhoGg2qpw3aGGx1PPyB1nwbEdcgrX58FhBdjXmTeYTqu9RfGX7KAiqXQUuXhWTaHnqjaftu1e36sHQZPxGq7Z4",
  "key13": "2JpgmbrKsAgt2PJM94JgWeqrzLDT4ZQPx8MvGNr6QCpupxp6CepjTjrerJQ8i356eerzCACrqJKpvYgnMTyoS4xm",
  "key14": "3QpEgvoaTSybryVdcWTaz2RRRgQj7Am3G91B7Au11ui1hARGdXRgCp9DxZgp5nL58g5MqUWHgQjSoaL1Phf11McM",
  "key15": "3fkmMtBJSd1uL8tn5N9TcMsBw9LaRQUBucHP3AxuNvtuhPuvhQppdzbbVWHiNhJHrRpnwUcFF6gNJgasVRSbx6a8",
  "key16": "BxRstiXLttoPJKi88TycHyzScdYsjqvXCKxxMy26EDEY7kjEgyZGSec9DVayLfLrCsVbxQcVFW3AhcVzG72qhcJ",
  "key17": "2x3L2kBpg6LzJCymcjHdQfiZJabTCn8s58MA7iVbyiRVSGe5EVE7W4XjHtGXAUToSzgUbL1cedKsVbaPwdByAapd",
  "key18": "3r7s2DQuej86LiYuegkKQ3VCQEdYnJtQYv3YsviugtuEkrXqbapZDPCRfsBwZr3mVmLSzyqY85dqUZtn6cCah82Z",
  "key19": "4qHGKEmezwxbvQ1xsXSC5V6pB9yCMcMrKMPhrBF463rifCAsSZrzdFzL78AExQPiQmgBcnFmKXfkDA1L2fE931gm",
  "key20": "6urfnHnPs9HVw4vMBGuTEnkAySGF4tyW6P84MybSAqcq913Y1vDnjRYdmYnExfYjtxPc6CwLX34jjTMLxSXxYDV",
  "key21": "3Axd5M7SQTZwxwvyELjHRBmgDFbVfpeVcAqHJGwwRKPdwPxb96mi9QVMqBpvFQgakXMMWZyuVbvHmpD7UELa7b1Y",
  "key22": "2hPXCkaXyaVEcD9vWSXUnKmZo77x3xv22WX1L61AaC6X6qMEvb6gswLUnH6nTGbcfSRnxqSkhyxDjoXd83nJmk9r",
  "key23": "2NQuqcx9bAY3sEVaic1yz6658zoYaASRrJGh7sPcej7z4yXB8Ji2HjZNeehCKS7oNYCxV517LerzWyAxsqsfBbq2",
  "key24": "4ncAipFAL7WcKFLDyHqSXpJXrNiH3L1EN491kH9xZotHhe6UAcgxaCxSyks8dvLRUvaCBbwqhRYTsDq7YJt3DeHS",
  "key25": "5oz5yUZgCqvFzZQzYG7151XTc3LcieM9M9YieYzUjUkZWj7WEZz7vhouS9SjPEusRuwzxf2Sg4s9wNZzGEkxez7N",
  "key26": "4Ueh5CympgTwpArUvFKTWTovscXf3oqR2RPWdzohvh6xQJnADBTQb7nCofL9v9eDgv2xRgB5Yx9mq1wU4oTqLYuV",
  "key27": "5yotxKffhnfwRkL6RPB13ERTBJd7sisb72Jc57E7cdMgLvPfrjx4iMRBsz6QqoArJ6anJLJWVLtgBKpKhmWRd9kQ",
  "key28": "4GStdoR8YhkEu8tggfUt9vUrDwj9JKWL54BrRtff2dAcoe9Bg6QJwLGx7Ci2hCWeoXEjPreLvgZ7mpxukU35tEHq",
  "key29": "4E7BKQrwqsdsBigCq5S7LueAcJJ8vkes5B382SBF9sDqEg4b5cvDpYG7ayjmJHC3i4APTodwaTUzEuwdP9ccTkfX",
  "key30": "3u1iDes2Zz35fBs41UiAbTqx3nPXoJ7TWdJq6QF8V2Rb48CRCNGwWzJ72h3W9GmL5S242LfuU6TfKtNtPisB762Y",
  "key31": "21WUf4QUgWKtGHMf2igbCPCuTVS97g6ZzAxx3anqx4FyXCAGQdmrEiDWp2iQ3eF5cjPvKmPmEkAHvdb5MxzQYn2T",
  "key32": "2TmK1AJZ3FDKBQYqqpGPgLUfVtuZ2vmM52odhMeNtegthBHmU6cVuZWtd2kCjBSd9ZktZXLdRff2qvkfb8CcZKWX",
  "key33": "2vejJBLbud7SuQ3JXmJKmtHL85z1FiZvA8JiPjnttaJZSPKuzMCV6yUCZyEAmUzpoTC5tpUNxLxwB8rmHuMoYwof",
  "key34": "2y2gFStLMT2o1QCYNSiTWKX2LT1LuWbEKGG2qsMf61pA7ZngwHXcHJwJwiZu3vg78PFqBQRCdZ3BMXbzfzYKjZ5U",
  "key35": "5G8KHcGz3zPzLxauf3nHreFA7aMKRaufpCHoUvCKByvmCQRWqaVV8J5yB4J1J7dsoKhDyWnoV1x9xTXLqToGCCGp",
  "key36": "22b2KS1xaAMttEo4QWBUezmSfF9igM3tNjkaw1XzACyjY7G1V7dhdBeJTsHzas3hsAHPq4aBjDeKBj1EovrM65zC",
  "key37": "2ynEEFFTNUERY5Xqi3q7MqswHRk5SRgMF3rNvYHGiKJMj2M3drEqBsQQuuKy5QkP1p5kadtwJ4x7SiH7LkZ7DcyQ",
  "key38": "54fB5WTVNpGAN6U4xTnKPgDntdBkG92QCC2gSpQvKv4jACDz1ErfgSpV46j8L2LqdkFNYQxHzCfTV99BRXmp5kfM",
  "key39": "2RyLxdkxm17u5XRkaPzVQrxTCdWqkGisEUkkn4Dv3LqxYUSddovAXeBq3xFpqrCFZBHmFtjbMzPAuMTDmr6hWrvv"
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
