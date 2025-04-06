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
    "3AfQthW9PiZYEgGX955s3qiheZbZUVqcMdHMseBxf66UXd28nGGGtsqS91x3BcUb55g5vsLdpY4DApgucK2WVPQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVzXb9pyRfZGJ4PVJVfojBqXBgPumxL9FGA5XbcRDmDLVvN8JCvwiQWJJBPGohqpEHgQXvyGy22VKsJsLgGGyD2",
  "key1": "3PeUuuvAaKzPXTCL3ftJxPZfXHoUdj1yzgiZwa9idsRrHhkggWH7n4joi8zkx2ZBftGK7Y64JBverPiF6h3kDaDr",
  "key2": "5qYV367aPbFW2p3LoZvybsm3VfrWJa6zHGdBcgwAWTVk1GhhpoEc8heYoAGquHdJ4yfwVWtTPwQExahgWX2i3tjC",
  "key3": "359Ev2o2eAeiFuqH8738FcdTeWNFG1aMw4WBePHKeLZWfojxkfNR5XzMsjaDLBzeQmPWgMFL7KkSKzgoBWaNQmKs",
  "key4": "2WYof2c2o2MnWYwsEnQSgMLEDDPM9takib19Kxwr719kjdJ2qMF8Mkm7LH2a3U9M5ugVvo4Se4svZVoWpDWpuUmF",
  "key5": "4KFe6c1mr8tZuFPrFmCXiphgARDLuABzd1kvESfdZ5mjiTx2ihGwrkGq3MsusYwNW31FDreqpc5hWL9E3owUQRCY",
  "key6": "4hbrKduNwi6up5q1PcfCUjfs68QDqtHaVtsSuKSN67GQghrxJRFpgs4xhtKJThVVCvfrka2tedmFzvB98PeMzxaE",
  "key7": "474Wg9k2Lfi7hZCSniXVnNvFkhc5zBANmddhff7FkJmRYZuMzYcWUXitSE3fHUBexnFZqd2SqJJ85Y1cH82XW4J9",
  "key8": "2qkUFgRLU8JBnHdsCLxvp1yDwwKTYdws4FB4swrJuf13FCYwadVs3vN5bK1vH6vBGoBrbZARWVwoaqk2qLmEnfEV",
  "key9": "5WLcBcZDi69NAahHdWTrLo3KWd85JxXB9HAXNhwEUPdR2eF1VAyCQj47r5r8s5ipTMYU9TU3G5SdUbFsxjVHWhRa",
  "key10": "3MVGuB3FbKW4DpMJEB2juFAQDEaWh7QaXbHXdUNVEHtgttQb1NdKTh1TwY7fYvy9v9aUhg5x1uU1pnSrFUcENKLk",
  "key11": "4RWhvNNHzRqf39W2rKASgqycvBjjc35Hs9v2ZejaVQDCe962TLbp9FyNbppuwXBZey3RfWoPmgodMoGNqTrg1Wt8",
  "key12": "DXnXQym86hCDeapvpymDywNt582yB1VM6UEuMHoZnzUw5AY1WwKe29u3BpfmNQZdv362AWHjauwRNNbnybFriM1",
  "key13": "2nioaXon74K7Wh7uHw1wxckA8MM8mL8uSeR8qrJcM4Av6A8qmkEdUvTT3n4KYcz9P4p3sbrJ8A8BA1rLq7iFirMh",
  "key14": "2BtxBG5m3St6misknUTwLHWRfrjyf6q1uRPLoX7T2FWcVDFxgnsfDFEj9nDCbeBdj9vsXwDkBPdC9dAWmwGSsxEZ",
  "key15": "3UPDLLFHJZC3RYVSa5F2t1vADXnuM6mFqWvB4MhAu7C5tXz51V5zeR4xJQNYjfHbT2yuWt2QAAdSipAVEZLaJ5Aw",
  "key16": "3bcarhYZHPYBe7y9ZAdoMypGQAymyELsP8ejcND1DWcdJrikZCkgMD5KRT83MSw9ozg6NoPi8jSLrV2W8EkEkVB6",
  "key17": "4kom17YpPZFDFW1cPfZ8LqoSkUF3FaKBgmqRazPDaWwyNf4QQmvbVSBCaNYgPX9cQTdSKZhBP9nYJKtZYmJty2xT",
  "key18": "2i8tEnPCs9HaZVZabv5qpZAVyTogHg84NwiMjYLX4GcqgnUGh8HDVhBTBAMtWY6mq7FpK4MGbzo5drybYoEUrceH",
  "key19": "3UUWfWktaUrCnQKJkrzm2F1Y2RMV24DB146UnCn1qNZJR6qAMzcNfeMv87H96H6SgMgNgvuDEgM4ejkrKkxEi3qi",
  "key20": "3qCndZ8bqvBccShGFTR9rYidRgpPV3k9W4cvMz6kxy2zsNinFgBEmK2M1iERnKYbwcZotN26TvambU1TdqaoJiXL",
  "key21": "2N8urEbD5X4ThUeqxtvZhfnzRHr9g5RivqAEZdPtvp3aiSGBCsVKeYWpMVqRHacAGBoZyoGbg9C4mZpDqzGgkgsA",
  "key22": "4wiAeRzvBemvzkNxdN8bNwNWLzfDE2goYCxVWNdCm1TvRdSac1KdREP4CESba6Kos6Rc6jvxYX1JENfekH7PURj3",
  "key23": "4ibKMXgvHDTV7fQJYmhPebtw5gteV2T5ZZ7xakpFXj9Kwiq7scdL37foqM5Q6S44PVQhTtMzoWu3zczb6Z8mGBvQ",
  "key24": "2MhL3fF6Tw7DxshAtsui49x5XnV3iUvzqGZEWYEeLfvcpEjkNAzpKCN4L2rnpRCnag5kdMd7xTJSPVLK55pxc3qW",
  "key25": "4rkeESesX7g9PYQDG5ny3DFjJmRuSSFBj83jLpmX2C1FDZUiCvGynH6hy6C5b1j6yf5B1FwCvTWHsNNqbXb97vM8",
  "key26": "wouKz5LkNiV7qa8LtiTreV7DF3J1xjRnXiamyaHx4xBhutJ6VKtBUZkSA4tM8qLdvaPEJauxVDBV78Ub3BZTxNo",
  "key27": "5uQqbgQkatoYMRhQd8k7xroGuinaM9CU4Q6KtSWrUQnT4apGbmwTFwcozxk2trqCwZ56UykpuAZJdvkXk37jnKt2",
  "key28": "648b7LRnutXjMkqvLJDz8zBc7xhhM1zVQvjjt7A19wmSNYaZ5UC6y73uu4vigcfiJ2HZfbocBBV67j8eGW2uDeqb",
  "key29": "5YXLKJE8N3aMKTF9szHxCSvXoweFuC2txBt4DLe824ySXMDcjFHLPghBJQc9LqgMnjBbvLiUvKbiCSXgSonwdg4",
  "key30": "2XgjC1wB46FFS1JznWtYiJSfwp2Eohh6d74Qkfp2wiNjzynDZbhAv8bbaabKsmcv4rPW7tXK8AgWX9SewxqgDdm2",
  "key31": "4YNDbZqSdVq87WPA9yEjbTujGegC5nU961eCyTCoJWp92NPCewKd2tP7jFknPjjte2RdRqxZLnrqQNVgZqU9SLFW",
  "key32": "3aPrthtKRRQLBuJxCK2mVHHRHffuooP2zGpohFCCpGR8N8aQeL9bo9vVQMv5jQPphrVrvYvvCo4nnmSkn7rhvkLu",
  "key33": "qcMcefLmXTakK9yCBdo1EANC1sUouqsNSQ49maYq9Z99wzmaL8sfYytZ2d9ur17vw93wZycH8h7wcrAg184J9KX",
  "key34": "3W2tF7u5fQMSZXKEifD8SAXfEPtWL9RrU9GsRopCRCtTCQtvoRvWZa1hRgL4sThXKtHyAnoF1ff97sXPHaTLNwE6",
  "key35": "3h4zcoKvzoS3d5BkXR4YZjCy8QjarSbsixfYM3sLfKmBmDooXQ9LzS4E212zJobzTW1Ckv7fBqUyqagovw8RN3Ae",
  "key36": "Gofm1jm1KxgxZ9ctopqqgYT3HLf9qjqyDzUafS41RccXxvtJVMDsu1sFBv7y4n3SsFaLa9ELsb1J72cVQtK87Wa",
  "key37": "4ZuK7icEFUDTAX1sYrvQGxcShymXzujDK2GsVaRNhugEX4uTMxFtLXjgeaPV7zExJV3RJkzKM3RhUEoUbYS6Khma",
  "key38": "4tgX8ECpXzTivEHeMGJbhK4Yfwe2QvpQSPWhf5ZmgN5AGkndBP5LXafs9a3BC9LZfAf7PD8xhPnB7kwjNqQzftFA",
  "key39": "4AWm4AyYtvUapDaRgWq2bCMrZN9r8jvoWFoMZPMcAiLe9gL5bN7A3Xo8LxN6Do77gXi6BW5bxAQCVcdriZUGjeoy",
  "key40": "2HuxHptkuAvj51Dmxpf1L6xPXXkBxCfMYtx8HuCRomaLkM5H2hvzK8VD199fo9rnUeo5vNL5Ge3UsbVJDugXdhmi",
  "key41": "551fNgGK4wjQ7t3T1nDWU1SgreujnfHwSq5LogMo2DbyFVwhXcKBtELTF9pZadNkBzbGdGfMKWzMfz6r5m9QSfRK",
  "key42": "5FkUQXGNe6F3SCPXWwPx2jhd3WrrR3vEHbU8a4S8iLXnRSNPi2nfEzZtysZ21DJkFeaVY8bcMEKUnkQGrTd33w6Q",
  "key43": "JgM9z8JB2YDmm8Dh3JfFq6x37LeDVMkt11k1eJx5VcGUavJyB2h6CPRauCSTczV6gXNdRKczavqzfvvTD6QHsRq",
  "key44": "4rxQH3eoerspJNGiu512i5x9cUkrLf5sKXYBZ6GXcnUzmAUprYNvHiTWcQxZStnX2iVoz9wWkuoSQ5CNkS4GUsmP"
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
