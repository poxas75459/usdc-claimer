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
    "3J3dJmtAKq7gjmXasMMuUxdZDYmR1XnkPmcF2THdUBX1KPHd3EHiLLqT9on5bSiEd5WvmTT3i59NSuwQ9xwpgL7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yK6fZVK5Ws5PBUbZjDHVkVfw5AiUdZ1Ad2HoKQi8wQShXuHkEA44CuZL196xFk31WZ6zAKcyMhKeWVVQQdUscV",
  "key1": "3RjrmKYyisW5SN8BLHXoy9oE4sn94TJYwwouRPH4hMMJp9XLuijTTK8kY9uaZWh7zdFfukMFUfgxs2czBbrZVfT6",
  "key2": "5Ly4hX2egKUJbcaJUfGkGugvJYRHx66sbVF6bzbqSSWbeTCgKNqEjdVzRLYkScUk6LndCgpCfDxUJf37yq1bPtjQ",
  "key3": "3AcaffSfNiuoNFZWZiSRnUAmsbQdiMKHbnJWv1nKS8bEvqnoiWwmUu8VRjq7SeLWGJukaxcqpwd3ZeW5YPWm5d2S",
  "key4": "2vxYMNgnMXKgy8bzJ8WscNfVRtPoLyp8dLNcEJyj8ZjjdH2zT9K5bmdUCBGPZRcvesTwotBYQanGzNraG6pwuHit",
  "key5": "2WiiUGrKQt2QYTi6X9fiW67JpXMzc2TJh5V8SYWLdcse3Fi7cKKg5fr14CoiwJNFcJdPD1mAGAJu2qAbP8kZxME1",
  "key6": "3aZ5BnLP5Hz8Cdx2hEfHgKdm6M5jrwpYdKgvAMmmLnbW551dfrZEEAJDcni76xNaWnVnqrBQWxBKRubtocrrSNbT",
  "key7": "5WyjZ9TBQW8dntmZcQ4ob4oT9uiGfgtSoeF69UReho5qqwR33ZrhGQnoJe5Rt7DYvQqQbFZ9EMERqAnxD4Ko7YBQ",
  "key8": "CsQDZYsNzxtpHFriBecRDjGxofnVkN94UQqDfvJCcDjLrBbczKuRMXzbTqkqUTWUMvmzqN3WFx2kWLQ53WRYvcx",
  "key9": "5dB1daCNPPVf6sLc1AiW2q3YJ6LPK7VrHs8unzoDXg3N8UkWvAWPJ1wR2oiqfi9FHsgTDmsQLLdBTW4gZqWj1zGy",
  "key10": "3QWocCLmYUXQvcJF1QPViiBEp5q4E4zGCG24WZe8F5g7Ns2dyWhw2xrEAp3RaXYsNZZBdJj5dJK48LzJJjo9uSS7",
  "key11": "3npAtriWiPJFnPotNEEaHdkkpLK4HmzoUjhmBn9mZYHa2Rtj3hqbctsig3Nh6cUM5r3w1pHV1ppE1ftmctxKVux4",
  "key12": "3YcarC1CwfhnmB7DpJ7U8FFghfSemTfwwDR3iqD5fnqghCx34cVvAGjjxUfNd8S4dkENgeRWro3dKmNQdxdb1wjX",
  "key13": "FPKmpstHng8WDQzB9mUXoejCTo4dNNzy9rXwMe1EH7BLgGZL1KsXEnnwimKVHmDuYYNFaYbhhgNtQA2gRaRegDR",
  "key14": "3KL8hbWaaChcxSoYdomzg7wSH6tiutVtxT28Zhkd8fs2Q7oRGKgmxqxmTtbBJm6T99ucwtdDf32ymAMMrQQRM8A3",
  "key15": "3yP4r4mJHXhBxH2pNZTf6wNoiGfrNKfa8btaLeR87JtQnQd6DtHKWu3DhyQDc4mnC8xYfQmxmpFRweeYehykzd2v",
  "key16": "4bTnZiVkgN9JTWZyAcRDJ1EDS378CcjaD42r83et68J9Z33hYqKVj1E86kSVCzRwFacx8oiqxALkhWuHbgdgibB9",
  "key17": "5yD3p1qbY94qyBwPwqGWraFwZNAjdaDFsa3258ASSJYDDAtjo9rHi2SqaoPxeFiSDFynmiSK9rFYQg5egeDD5xEw",
  "key18": "4hceHF6eUEjoUbmweGj6jYygRzihstEyoqagUAQgsb2CPtfGdbRm9Bbo1aDDo1Unz2gZBhHU3AtA6kwruNtU8bc",
  "key19": "4YB3SUjvGZ2VeEo6wXi2vVcKpbgwKmcYaois4iRBNUiftmrHUWmdp3rrrmJ3uJFZiyFLkK6EMBgCsYZXQWUY88CA",
  "key20": "4otwRz5hgDwNjNj47mXUMHH2BYQq1Lsn2K1dLsnH9t874YXYBMQTs7fd461CgXBN5Xaeo7zjNxPdRR9biKQKKJ9X",
  "key21": "2CFQUxr1enxtgq53oY9AVR7KK82FHDt7adK3RwmDMAFkAtfioXznGHGcZDnray72H3oPtzSz8rWNNcVaFj5kpUyy",
  "key22": "4W7NL7rYdZcSekvM4utJbgUGrhswAQtDJ1bza8HpiSern4W7BY4NyU3X7Qcowuei5kryYBtJRutkvCWZMR9265DT",
  "key23": "2wvfYh1KTh5yPsTubC2E28q9TdFocYhERtwyuEHbw4Ljk8zjbFDeeNwZJ3bjEkDgq1xpxhVFQ2fMeMXa838Cc6UA",
  "key24": "4YQtZe9BJWRgMF9SEyZ73TwYgpeiGT9JAQPVaEJELQFoCz2cLqyoxh8UhDTEAYNCu246sgoYRmaRf9SDjMqZwnX8"
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
