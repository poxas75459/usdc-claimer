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
    "5VKkeHg74nKxmRYD3V2SbCDfRo1DGjSB3kwu64QcCZmBwYWwvhQeeuRExF4YQAyKtJnDXk3S4Bp1wXspg23QbZCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDXJCCET5SxAZb88Vyw2WomtgT4WWThrMSSf1pZNvo3JCsKZWhuJTrRDPWRcFwzmS7DGDWB8DNxqRXrgMbUsEAC",
  "key1": "2oqA7MwCL2ogY7ArJ683wUAa7CxvrtTTpVNWDYBf93XqLkBmjdJ6fc1axpem7cyyJmY2mepmUFRHgn262FoST8EH",
  "key2": "EMxbhvB9R1AinbzAgtWjpQZR67SmxNWxmdniDFTnzR5UmznZtuTkYZeHwcur27L7RL77ynCc8oXq9dm3FMas1ts",
  "key3": "211TozgkQjqdKvvgz4ynEcwecRSgerMrr6Q1WKQhMfBxPJuVCXJ3UByTiRseswqgEx4ZFWiNrnbwA7TZo3bqqLo5",
  "key4": "s6YDTc2yzPijWxHadvffPqG9bxYrSzMea6yRgURhdwzdSjjb9nB5r176odjb6o1UzzFj1BXQJnkXLGZUXdLk8mG",
  "key5": "45ToFtdk7xxZdA53G6Cno1Jge4gz2VG9fk2WaSXW1Y8XRyp8LpxgYjr4dVEXS3hLTLhBU7vDGaAfxbM2eYq67nq4",
  "key6": "5stWVahJgWQZAxQAS6xdNaNfvbvhz7rLxt4gSoCLHvjU2PGCVhCVsUL9MgLFp6FcA91gsU1nEnacWqyvUsPPkYQr",
  "key7": "3MbvwqGLgMMLPM4ZhNY7wzC5UjpdDwuxyaCyYVB5FYibatqroTDPJkS76a6H3UESkwuWejGYmf8yqH7AcPWujHfe",
  "key8": "3eYCX9cqRp5e29X5YAoMu9fQ9KT3RHRrPbtvxxWE3DRDaZiYixHJohSRMCiFyjeGUb3VhxVZ9JpnKcJvaMWt9Mpe",
  "key9": "4MzNaDLMNUuTq17kU5RbbeuGB9ekAW7iBCxapibLDEHBcZxh9JJejoh5qbVmD8EphUfk7bG3nV7dqswSxqrFiYKp",
  "key10": "5c1rNjYEGc6KLx9DkkGDoskEP1iTxVevY1bF42WXZJtDiLStdAoPyekwdj4AfV6RdXzPTEXctX9XHPD2Es1gWSHK",
  "key11": "2oRNiFcfcjLJ9g2LLgP3UytSteebC1Ym7UoWvnUdH4rYQgmZwEzq22HsCstk19fXh6sNt1Zk7YVa7i1XaR5PAXst",
  "key12": "Aq22sABHNjYZBkEo2Y5n6x2xAiJTEPUgo5DyzV32ZuZkwighwZBgCbVPBTiYPd8Lu5qjgKRJpdPWruHvdgzntab",
  "key13": "2x4hDZx2JRAykUoryVM87WB6TU8QWKKhrVZp1h9Yxk3AgpbKR3iMsomkR33notXz99bLoP9ehWSFhfPyhL8YAoM7",
  "key14": "5s41uBKhynZpynGQ5GvgLFtnVxqbRMGirz2Nc6nxDJrk3DuL6Y9tDX43hXRKp6EszJ1XfVrxA8xwwBNeqcS7zkyy",
  "key15": "4w8oudjtotQ28X6gyFLsudqVG8EDquqWpYbUYNAm6y8Nu8cUKHMFpF9ikmRECh1BTqrNDRx4QQcewZabuVCMZcax",
  "key16": "32tZqno7aMYfw8ncoZs68avpJtvmGfFJR9JSc4PZ2Dhz7meG63szyCxty9M5Xn8dXR1mdqtHYjPtcAG3LD4WvVts",
  "key17": "3QWViULxDghZorc2eB1jS4rKfBvdkpYr66p192izKSNZHpcDyzhp84FBj7dUr9Ss91fiybgxAnCV7uUsF4G7WteY",
  "key18": "yd9WxEMuXoKn9THxJeXUdqokZebKR5SFwNycDMp8XKcUCPTpR9mwh7kEtijn9zpwNTRG3BL6SMXYJnPUkp3RXhW",
  "key19": "5CNWejTCNkRc4FnGJwNw3y9G9pDoGovZ9stW94pBejP1Ljs1jgGQcoJHweNnz472jF2Scha3mfAhEJhLFTLWPNxJ",
  "key20": "2AzaG8z67JMCkFV2LdeLmQcaCisvqGH88XEehyuLNb46JdqtGYbTJEFDtpp28KJabwZxcWadE4wxX5v57CLVnmeV",
  "key21": "5cPjhiiNxy1mgfp8rmZBQns3wwWG75bURKLuhFvZoZrRvweb2iD4o7HC9WwbYCrH7L4aUXBuKvsRDpNg769dLrcC",
  "key22": "3X4xZmDgrUzhgQg1KB5Ec4zEv2rvvDSiWtfA8zb9b4dWmSU5VQuiqbzb7Mk1exmX7FzNxeYo93iB2dSKbDyCdbw3",
  "key23": "4hEFwwYBTgdPPXirEuPGvbnPxa3k2UoQUhxh7saoHj57ehFdf8xfmomU3iAAU1cSXcVmpT7UMDSYVTLeAKAy4txT",
  "key24": "UbRDScP1TMhYARz49FXgg1E2KJSgv4YUcZiqB8FHqAEEgKEZBmdbA3hKH5UV8eMoQQQQFUPu5viUBoucg7hFwr1",
  "key25": "Un2HQZ1H33gTxEi8uATJfk4KExnjxW2mSXJKnsfwG9nYTBMeATFDe71sKvkHHPjqXkNyBw8MnQgNW7wP47bKCB8",
  "key26": "3qVNLGgMLM2iL6pmgu6wmxT8Q46F4qLEAry9SNKZdbTh4UwPwPugaHs4uoqLUN285KvsGRbWyZSV9eJ8oSDkcX26"
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
