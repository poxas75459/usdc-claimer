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
    "4NNnSrQD3Nzfsc1DpLnxY56fUuCi9WaU8f8her8VwYPY2wQ7VCwPuRHY7CqJYhxAGV3PtspfhUsqW6hrDY4wq5Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25q4MtYCCXfdtZCcQp5buFy39UCYYwLjoz25kdtTBixt4n3tf1vtHHWnXVX7nvDxrae162wX7tcHbt1WLw7c6rVd",
  "key1": "NYyn2rQpFKpMJ5yr1omUpDEyLFPjWUNxJNV8WW8p1TvVspCHFPwBm45PzYY2zQQ1PYCEGEHxVu8SHWgpimj1ecv",
  "key2": "4ibGsKbGcLZE6wziiSuLc25FpM1M1KgKd1g9G75Gc3NTNketZAfFvzv3ckuvWGwBPxfTm3pkt7iVY2ZCSwooMKN7",
  "key3": "3kn7EGngFis5EGfRsg9jhwtPWhDyMuxnXK6ttw2EhCMQXwH5fZdVM19ZQVKurwiTPfLYCPx1JP71V62rvRSrLj1v",
  "key4": "2ZomaowoMDE9DPcqohSZfxkFezEfyUi5ZqBiYQkSAAs4UVpqpfuEcQ7pubHfX9JftC7GHxKFwZ5T2kMXyYAKBffV",
  "key5": "2cGq6ij8YT86pGMHGWFgT2nvAhzEedkeawPkKk69FSTjZCJUM2jfGAQEUEgqagCJFzVxdFfPY1r5pHX6xhEQtiLu",
  "key6": "63FQhiygqWVHfaFVCrawL8kBrEDjojJ6qvNNktFJLM2Q6Bp8v1yGJhP3bFoR1XG9ukaqxDt7GkBscrpZpo4N3G76",
  "key7": "24G2yfe9ZyDEUPbdYaDvNoDMUPxK74GBJWXWATfDcgyxJSnfKyAJ98pQrprrL6R4bVBVE7WYiEDyHyjTN5Bg9sRC",
  "key8": "2mvAWrdrqXXdZQFSTLxGH4BTs6o2mBi5XvRHo1XgxD2XDpfA3tR6ZSZ1ZMpbNxW61d97s6jaAKXF5PL4BjQsjHBn",
  "key9": "5FwtBfSUb3nigogEarr34p2T8vAoXrckS9JuPdQYNUMPeBRXGL4p2LtSsUL5n6ASXoEhCLsssA2BVdcy2UqwMS5G",
  "key10": "4qPKLmAkGiVJKrPERedTmA9RzXURMyDo1H1Pd3sZHehAWvrZcYPWH2rhuXCQL7Dfh8f6dS1EGffpxqWKEnstkp5X",
  "key11": "4JYCA13JUt3csNffKw7fNvkDAUatVSQ2mNPECog49VpmM5jpCqxm1NZYGXahdnZ5bqEJ8bF5VPAgKRV4RaWZQRZf",
  "key12": "5BTH3pdZzYHN1QsPSF7YrN4tfHzvLnqXHaFkpTQmmPHTZvb2zAR8NnJWym5mkys11xC9TmWUt7Kx4qnTwSpEoVL2",
  "key13": "4wqqGgVPPFVZRWXzXsUfiFbBpNKUTw1SMsSmT1jUXUUxbic5TH4CSRYURPGSRam55xqRKkS5KWYYiv86Fkx2DwJM",
  "key14": "5Amqk23iXqhtnNRJuJvbXZtexFSpkYjrixRBKxnbDNcSs2ukAYu9QYXkYvt5kTkrg2he8tYMBCbSGo2K9sdcQHdr",
  "key15": "3PQj3dEaCBPmjZfoKzpDY7YWSm3kF2chdw3JdRMTRbb7UAfq3vd3DiF32gG7gotxtWyZMzM9ru92CvVacmhB3J5J",
  "key16": "4o6raJfvviqtxV2FZx6AdYVqSmaWPTWRbBrFN83DTmUFpQCwRpqz3FNySLf7wYBConf5hXUHvdHDtMAFahGQcmGC",
  "key17": "2KL4q7YwKp9b3tUrrFJ5126pzunJgw539UBcerEgkfFhyLfrM1LEVtsEw5ZshWG8Gq4jZnpFbZFCPZujehGVJDHD",
  "key18": "4j5tyjaR8G3YdnGrCDXtxXcV3Zw1hE4YUgJLYvNH62aKoXya2r8jdfjc6eP6C1iccTyE3QKLexVqYf8reBRpMNNq",
  "key19": "2Z7T8MqjUgRSEkoCdXCA2ET65s8qzGu3vowJHCue56qCbxdZCCg4h9294QnJiy9LrvdcYs92kqU5ut2QQoYrJKKa",
  "key20": "2JZ1bPHc15kmpAZGXQVX1s7XwPyqjo3PG9E2z6kNgBgZAUUQ6hgQm3C2z3jWBuG9TJHy5e2rUyPXxzjg19WEmn7o",
  "key21": "5UN4hCNmf7TeNjQvq1Fhttc64BR6DHmLYM3ATYQb1XQANL6jgYw94H4rpSNS1LRPxz8J99Ffevg5wUZxx7R4aPsj",
  "key22": "361ejzEpwj7BhxwH8T5hpE7NUzeBNfbALLn9BbNcaBTNHpcBBamabeJAx93uQNQpEMZ3u3yoVGbG4reqoTnGSaW6",
  "key23": "5muErqDVZNwp89peZ1DYUXG9y2Nd47chCByd3VoNed34iiyknL38d1YXTpmRtJFRbTzD5BbrzXeUZ5deXmcTuDa2",
  "key24": "2Yvpn7CvYAhAAdVhcvL2hAgPHk2kRLc1wFMAnW4kZ7HfGQnywxTdtpJmBjBysMsaNBEUH8ytRy3qEqAsqJ4D832d",
  "key25": "3yRhM7NAXtscTNTFuiedqzCP6Scm1ngw1jokGuANWoymbcUmj6HBeXkSdLY4K7ww9b6VPSMho3Ak1Db9WwGSpUgh",
  "key26": "3hvMP2KnDmMHU58mkTMxTHoFnzBYRtfvX1N8KBqgYt8vvM6fr2btkXQXvDoqnzbLXcWZc3JLRiVpRxtjgBcqiZRw",
  "key27": "43thyYqSUXrY8Amaa82vnbMvEoQXAU9EX7UPjeW5EcdLx1AVoThPvrjjt6PYLLRh3Nk7RYY3mP7hfBMQt8xf3gCH",
  "key28": "j97TNafMgQmSRB9zJxcQfc53yWs2ZMpQKPfUSjWGZLtJfPB6HmRgfbFR22pag9StthntDc8DHHGvNmrdwJ8HhiC",
  "key29": "5dhkLeQqaVgMYRKrNnPPnpYpHGkoE5PQBtVJzFL2Sovrja9fv3cUpQ6DzrHjJXv4iQ2ouN7riNKrskxGtyYAanwb",
  "key30": "2Po5yA4njWNBkMTSCxoKU1aRgNC2Suksf3rzjuBRvfuTH4UAfpJ3A3npywrjeiYj9EFY7Pei6AycttbfN2vdkd72",
  "key31": "3gengdtzo9p7X8Yp6qHmcFvUrmHyyokFQQqk5hXoPojrjACP87sKLLi7cHQ4kpwECg6xLjz4G7BCxM2s6R1L9vUV",
  "key32": "5juznRpiUSM4CGS8oWG8kR2mA2poxSt4cxVGvhoD9RB3aDAD2xSAkqGnAgreq15UakG5snAAmzRPQshpyuw4PwtH",
  "key33": "5U2JQiuZ2JR9iuSRqNMPjbqHjpWKt33JcTTGoBYBxwit2gkz9NairHiYsUxW1N6Y5R8iSRknwjwoVbT3Zwahhsxx",
  "key34": "hsTJAUFPAzcp4giRPEYuvdbPsiqpU5XoWb3hP24QY16Vfa1SX34CFmE6FBo4JM7dT2E45YMn3KZ7LiMLgiKQmbA",
  "key35": "7PepZHZaXAR8Q7Eg2NTPwWVPozWbpkFCVYjhQK3DStLr9XGaWpVhnjMGmfAZYtxeeqbbryaJuvvGntB89zLFsqz",
  "key36": "36HH951JsjWpeqKSriCeXY2XdaFg1AqmWNGYgGsBrdYKMGUpBmDaiWC9H8krNQg8o5z5mDJsF1BSBZeVbj8XNuBW",
  "key37": "2GcGhVTHmYke3mhsjgZ1WJrz2bLNWLUkhLa4QyjFHuzJCEVd253YQ2TNGXLDNZB8HTsc4cNkdp1YCg1ArYpEymgH",
  "key38": "21Rv3RcbjB3DkTaPvqpKXSs2fPU2S6PdzmytCemT5dQkKBcMxKkNYBDLjtfk3mQvnv8kKpJ7D2SgHBaT5uQoH6hV",
  "key39": "4Ha34x4s75H5qQLUuoXc6Se628sBLwhyUC22n5ZioDAbiWsHQcxdHWjachfgi28UALKmyPyk3vTS7HGpQDHz13hW",
  "key40": "28pBbN1fxqBhMdC8za6PfEW3gp8AP9ddm9aYG4ZaBiaaT98T5xTyaVpbnasZv3LVCEgS9Ac4BtEUAJZd11rwYTS6",
  "key41": "5QDsNNm1XGP7oGgajDge9qtsrJcMFt3vEqMEFP2yF7GHmJuAJD1DXJ7JfyJEZbagPpeFRmAxp2vhfY7vXjzYmNAG",
  "key42": "4DEwbnBMN3xxsWjWGmv5cAKoBrZfxMYGoPv6pFN4gVdXhAxUYdjUWq7G7NavX27gfWAEoDodmCqUTR24rh85XoX6",
  "key43": "4S3ueUhH3kzg3wcBpaw4PDvqd9rWUxDPDVzuEmaeeMqcxJ3LbuC4RFGam3LAZYGeCADQLaREsbfVLRNy2gWpxdbu",
  "key44": "5rhEA9pZCWZ1dUeLfUCNHzbZy3WXwk9RCnRtfJhsndMQkrXTNNB2YxTHT51b8z25cY8zaiFympKxEGggvGjHKvgy",
  "key45": "QxmN6qV1si8K4QVyYfctCkPKWdxyftt4fkeLJmuU9bspXY41A8fBkEiy3S4sb9C6mXsq7pPSu1rZ6wQDsLu2MGh"
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
