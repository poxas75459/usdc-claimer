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
    "3H34agAEs98P5eFtUMPu2HtZu4u7yCq667tVHqYU4mQeiAAMAHp2ZDyDQUuGCWZ4JpWSdG679kmttcL1dJn5CTgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyiwaC6zjgT1NPbGPeDzDfAsd1eS9T4Tub3RvdyavMiUL8p3X39FDWx3iPSgV6HKFtZbVJ5W2Yg1mK36isyByQm",
  "key1": "5y7rC3TsCGKY5qYVtvoHECP4EhqbDhfqg4dNMah14SzVdGrNMkY7oGptgrjmopj6qiEJWFAkbU8L8vvHPP73jP35",
  "key2": "3r8bFBQ5mmTecCAHyUSKLAFaMjtJuWYd28xvoTezp5MzRCxVAXs6gezwYY1cTcemzrTHT38fsx5tZsRo3CuZBzB2",
  "key3": "4BHNyKgrKVX4DZh52yzrCDiJKZdi6roEfqMQLvrEGzT8AYJ6L6HR5NXLFzMMojtHzQKh8Mj8ege1Ri2M8B4aSui4",
  "key4": "3cAG2hFmATsbLqGGrxn4viebZmKc3T2EfWgi8QjmXaeERwViJy8ADChQMbFKfrhz1vMUbiDWwkHhsX4hQi7hd2E7",
  "key5": "2K4yEqT3cdLs818cLypHL65rsxsxH6eGzG6yMNRfBs5eJmKxi2vTgqgjqeVNRzacjhdDTwQpsLCKyGtaHzcgyG14",
  "key6": "4NReYFURSJgUgRJ1AoHjDgH3eQfreq7u4DBjYPLAr5v16AShJGsLZMvBPSg9WjaSEtcrRWnoWmzJm3FS29TFVv3s",
  "key7": "5F8PQ6dsxgpycZhcK7VJq7HkovhUxEeH4yd65dMBcfZtygfUUFESQhogeoVFRkHYach5SSDcK199mkRDppAnQyvM",
  "key8": "24DSxnz6hsxFffHsod3bGaABQciH6e2wA1finC5cgSmyFiKu17QBWHara2YR7wruwxizQotFdDfgMn9W5SCsSxar",
  "key9": "BpFDSWM6GUyBMTsmtZJWVVko98Sv2FXEaEptd83PnDbARuhgmZFD5Tkft7RtLe56b2CATB5LU8H3X7HVANDFhp3",
  "key10": "5RJEofhVpg89Hpk2NKv9kvjtMe74aFqtin6fturVzpQnUqZugkx2eHB29VpgGcwU1WUSQb1BDqNcc6Nfy6MAzNah",
  "key11": "3ccvreUqkBa2rwbgNv5agGnRHhjUA3SRYbdbtJWuQMrqFKukbZAgqmqKu89Eiko26xHt4V48JAiJQWKV2uc4dLg7",
  "key12": "4oKPtBX9a92cWakfjACTSYB2ZbytkwW4B6Mov8dXB4FdoTWcA1V75K6k5JYTniRUaBiuvS4WBPaiFQC9xu7ef3Uc",
  "key13": "2vqoMqtagTfzQkMpReWgAxfzaaTdx53WmZ8EQcd8R5LPrN2S8j7xKrgvYYx4CKcqGmBaFrvqb1dqyfrJrC7Zwupa",
  "key14": "2sQkfjYsYTHA9qcBaDMrTxsKwYKWhYYnQ73gTGVptZWYYZtX8VAptCa4ybfxDHraUTeyGLXRsCbc8Vt4R6AsGuBP",
  "key15": "3jR739whYebBfzfU93aJmGxGdcp2R8KL6dyyc6paTD45JsgTxvZkojP3t9TwvmG1U9WDtKmkeBgKeGa1n8Hq48TA",
  "key16": "T68RjEW2NLZ3uDeTH74B8nHg9h37v8DHvCLXZJg5XLCeb4KZiedE27SY9cKCKr8EGMRtr5tr35kMVLYSwsFbf4A",
  "key17": "2LDFQde3Df9ppKd2eKT8jtx7FBrgXDxLnvG8ca8BgtErio4v5rsPsUKUmA3Tw2eK6gB5brM8Ciyn8ybBN7xEHEhG",
  "key18": "A5t9mejdrY8H8AWxE9Vyx4QyNQwQXQCQVqPV1MHfeXE7WWuFHn2Lq4a8haZ6Mtsg5SL26qMg41VxxGqYJjZLsbj",
  "key19": "3SL6rZXredqaqY12FtH6YhVzbyAWL4NM3wWcFy38xXFHQrXioBkuCrJdYFGzMpXhph3r5He6nj955h83eG2Pk1VK",
  "key20": "58925ggKek2wkihMddxtBsZ3kjJNdp2McLnG5ZStVqUdyYo8ssqKN5K2biBQEa4tR2ePE19iJuR5z5GAhWrCMpPH",
  "key21": "4QxqiGWNDxgCwSXvYnacUMMmmQZePQrSzv42otzEXBrVNyMth3WdoLYigt5TaQ6RTJjifyYmv3PZgrv9X9pZhLos",
  "key22": "3eJsRCXY8toNqvEk4QUt5SLkvKaW7u6p7C9xzZmQmkqC4E4DHf5jpbz9rJQJYMQmEjkWFL81jUwAwzc6yV3aFQU4",
  "key23": "GTmtwqW2NCsGS1gkzbVpfhf1w6cMZQAVsRxhUkkY7ioykatiziPkK6A67wuj3wTAu4QsyLx6nH9tVsnv8SYowSq",
  "key24": "5srKNjRug4x9srsV6FSp8VCxaFmMQNCqkz7FpkYV5yVcRtfzTLgCXgALpiZP6rEez9EksZciwcRDiTjQhquYRh5k",
  "key25": "3bjmBngErbT8aKWVfv5nFjSYNfe6CJ2o3E75XcuJ2KegwUw7seRgTgwQ6Yw7ubXk3TZXa557jPE4Pytci72zSYeK",
  "key26": "9XYdBaqvL39Dt441d4e3pJWUBvgum4UPLnoe7Yp62gRDMhQqNpbpHachwPr1rSiEwegT3qZ6gnifqL72yYbRSu2",
  "key27": "4TqzUqjaszD5JnuZWmYBxpE6Xhv98SZo26qxxmBh36APvwx2oQQakuxjmREEcDWJepo2T1BpJRWbmX64ReSGfwv6"
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
