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
    "5ZWU5SVrKNz7Fw82KP79pTuNENqfMjcKJoBAfqRABG1tw3zPYc6dX7PCoT4SXykfjecGm9v9URGgaShdEdBH6JoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JACaQLu6tmpccam3GmR1V7cYAiKbbUbMDUszYrsM61rmf9QFSA5p3FqUkX6MHmP3VpdouqZYLkCSBgYi3TaoFvY",
  "key1": "4k5JUMufM67QiRsrwAwymfKh1NB7mSU8Z7yW7dD8BKcqJvQLcyqhia1Zb6q8Wg5Jr3UdUjPMsysEbSrayfEcWzUs",
  "key2": "5gTKCKhsnyuBBfrPpiW2qodhzFoJtLGsvbCsdJ8PiBMq5iD2zRTdJp58v2Lc4ERg2fuzjfJxeYvEvAxfEsu4ryvt",
  "key3": "642ug7Nx75SVK8kwsKfKtoR9mygC4PH8bg8hYS8aufig2omZotuw61puQKkN2qA2r6KeLJ7vqYfYdwuxkxnihnZs",
  "key4": "3zAccVVDvkmFruAR2dtXCmfKhyw1SRqzRoad56oJmXBhqoDiGc7PTkUnbf1MNRSy8bQaVtBmMvoJNrp5LZVjGVkA",
  "key5": "2t79iUa2ZHpYhLmJNhUyMJWsBotS4aDjLBNDeuzQLxdLo5T29BHd3PcJpZkidtTHAfmKfUxR4nqrDwh4Lr6Ej7jT",
  "key6": "2kC1T2Hc3d1doPjjMmw9GrEeokrc7JZC5V1bmk1FWrYKhrJixqHdV5UQzE4YiPw22LchvcS7JLr9d6F6gzLHX5iQ",
  "key7": "4xaAQTD5wnNxa85wjTwJMbh7987ensvhH848xJ5nhCbzUQLjpm5ADKCcobXTNYDJiEgTSptDwKgv6WKxDHxP31nj",
  "key8": "1ePyTRwS7UAB6At5DnCwm16brFhLmihnxRzRREtXRFDbGEcCVY2NigpaWEhLfgDBByEyy7Li32MA18whkP8m7wi",
  "key9": "2FBTZ8sMVzZy4dmaWny3p5aYx22VxedtXCSjpecWjNs4BsavSJBmmewRtiqvD38vpMGsiX6QRzom2JuCquNbaF1Y",
  "key10": "3GBB8Zo1EqcLAWwfJbZKdWj3kGfvi2h9fGMQYRBczLWqsF85yP9CFbfY1s5G1AWfmo5GtJdKPMvhT8nPk5uuYv2n",
  "key11": "5zvpdJFv1DYJfjaTLyDTw8Lj6RtyY2uwJD9jwd6DVALjiKiQthNjJHZGjmqbD876rx2Kfi6MRsyqFx3wD1kb6uz4",
  "key12": "4Kq3qXHhQsa8HBty46EEtGbLyXU3Dkfq5VqunWYr6rwp7s6HjxDriDWufdfcQiKZxTr64gtCiwK7oFWhzqpXJRTZ",
  "key13": "59ZJu3cgrYWKtyWndfgqcZojG2X81KGKAu3E2JYkQiXeqDFAVkmquUvFHkWA9cpRFLdgTwR9dCxQtfzVh8x6FPUU",
  "key14": "5pMq4BFHH93JmtMUiteXcWy18CguvfVDDKtFt1eSyMPGc65w6JStJwtaQKYnbMiJY6ctYd1bVQ2UuYCkRXYr7Vrq",
  "key15": "4sgtnWTwaSkzYV48KCFa3FjDBf3sPbETgimEwFBieahigkeRiGESFeXdw154qh859seNyC3Vp62fF47TzNAwu3Rn",
  "key16": "24ukm3XH5NUtyc2jNCFarKWAf2g8RhTZMwwmyxskPDyFWZdb8GFHbXtfA2CRoGjEvUs6x2JkxYy7iNcsHqeLRzcs",
  "key17": "3WUUWQDMRB6UevssRYwciLpwT9ip9cdjjAoYzzWVkcHjahsm9mzLAdg63QGG73WNZB59Heo3GHfTRZCyKaZPLH9d",
  "key18": "4abKN81xs5v98N5sx8LF43BydciMaouGk7FRnV6nKyK45yz49xWqsZDF9xPb9QeR1hiHVmUzZtyuZRZGvpES9uxw",
  "key19": "2bP3PwdSQHyfHaLhuNpQRmNwbn9hNF9ozRY2b1NDjdwJTDupFLshepeRSWr1pyMfcfNnrRJrXdV1JyjvZrVTxNxC",
  "key20": "FV1yMRwUdNz9HPLEoYswMj9nmoEuyURtPV4524aLgXLXX3GsFd6GCyvcg2ZKpEaWofHTYRJR9VF5555i8MdGvyX",
  "key21": "5CJx8q8VzWkSPa3nmJ6EUyYNpuYonvRJcr1DmKf4jrUddkCnSkELGSmDX8Yg1exaAo3E983qsnsTAQhtEM5fbVrE",
  "key22": "3NTXa5jGNHfkziU8CHoAaY9weAyWYykGhuZoTWMiKz64e4iXL5CikEx1xVW3QTL8ZDHZRq8CyY6wkeWkc8NPJ4h",
  "key23": "WBoArxcwD3fs2NPb43z1YE8uPMh8fiGpqTSPS2hbKAZCkRPuwvmuNGVqDjRzHdfGDSwP8beCgfEVvu86zDRnJnr",
  "key24": "4vCpixBVCXVe6RzJpBZtLMak3Uis4cvB98m8KAz8Dr8BzzSBmgf6srJSVfx5ogVbCACpXZJUzJZ6kF62jMRSQHNY"
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
