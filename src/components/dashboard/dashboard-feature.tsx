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
    "3rH4fiaUSQX2YB3gDgZKCdjVWHHskN51iZnAd36dcHsbHuksgUkNuhQLievHdHyjzqzZdAL5ZA9Yf3JMYc98pZTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtvt3KXjEBt92upCnASVGhUjr95erB6JYedYVMv22mCuBJpwyDqQ4xUv5muKsc9hXMX6Ac3bHEH1xTbfDA1hFJv",
  "key1": "4g56ws4ZNPwZuFLcA1afp31NcUtSsVCdEHJ2EeFiYfJndm5X1v5HfkJpkKHckmPxSJmYStbYv5mmxM2GxEjRzo4S",
  "key2": "43nY7WzBojc9g5xZAffiaZdhXtTdLcjT5QT851U3yB6nTV9hugzGrFEK52eSgfNbUJpmuyCaXfeLcRE9C1qRUy4q",
  "key3": "3fGJ7qWEQqcCngFWFs1RQ8xWVk1eYKFNji1fXHA17VWpKPisSFoFGesVNa5sBRMfJC8sstVYD1yWSnX6BQKwSqgv",
  "key4": "5fvp8xvpFJgQ57BHvqWvV1K4yUMtYqn7JP35x9icixCvb5hcmX5t9WduwYcrXzNsYgLADeqczsizZnc46iBdh4jt",
  "key5": "5QAfkwbLPo4EyzivmgVa5xCFYdSLxram4VXq9BB4pSyjG8bimuYgBz8cux8GiwHQTjg3PanjDmuCvPzFoKJN3YVu",
  "key6": "NkWyqWXUmiTUF6tjtUSRLj24aSQ3B4EF11ia4R6PkogYmGPvahrXABCgVu3f4eSJdqdbdn6FAGGdMapp63MG2Sh",
  "key7": "4Mzm3eBeWQ6eknBq3Jz43uEmd4FgMLn3aKwFgK2bZArUfDv9TpakmVcAfmAJXZMRQEyuaWgCURDe7MbRbnWFTgJM",
  "key8": "5GByXRiaz9GtB4Anhd1aY1VUkQE26Euha5So6tbeCt4orNvwufyC5E5xcW1gfuSCPQ221SgAudT2TQeLZmWbjz4g",
  "key9": "3T66z7VmksHjBRqjSyXmez3fdGNsRyes5jJ34YnAHPP4RLJT3VUuJ3KraizcJbrDsGWgEXFxhiABhX7aQPohHvzg",
  "key10": "3HzcAAfrBp1kTCnZseqQaAhQjUcZrY52Hxb9AdNud6QdVoi4FNCnrdvedgGW5RaP4Cw4qRHcDFhSGCS3s8RhxVGB",
  "key11": "2sG8NMhCN49uV5dbngBiDo47x4mLBKjZ8UdhiKStFJ9GQ9rhFmiex2UEhkkJW6UCjWyi5mxjWJoddTCyhepyGdBz",
  "key12": "EfhGvP1VSKmRXrGGih9BWUEQFxhXbyfMgndJLhSeob2PaEpHrbobznKiA5zX2ELKZGJufjNBbGTPFLYAG6EUzGK",
  "key13": "65WwqcWqmZCyfhCqfqEzincCsKRB4vMoSgACDiVAsAzAxkykFUHkR1LpCMqFq4GxKJPduSWo9xZhEYc3T4G4aicr",
  "key14": "3xMhaGhDY7JYdDjiXZrFsZFfY7ZHyjyyi6MQRmVj47CasjQbfY72MuNyQzFQtNThes8W2xxsyRGdFiKqDqrHZ9qA",
  "key15": "DcW2gShrrWzMSd4qNGuxLQdtSrJK1zAKaWczeq1chkgTbLvTMvucx91mgRcLvNi3DPp8Q8swpr5ArEZuRF9QqYM",
  "key16": "4qSsTcf1XHAbCZBRSUSUqnigKQSvt3QPWaTVPe6nakYRUUV189yEystNi15swsjBqqUHvpB1S346H29GbsKU79i",
  "key17": "4zH9uehiUKkw2qDjTg5eNZD2wvd95pE6gYs9GV2bRn2w9duBiKMSx6vfe9GvAzLrvVoGgz7K5YbHMjKWvWuKCm25",
  "key18": "2XeLcwqfdPErQxoz87ARo2p2PMfe5WzPidchNHXUsC7sQJAEv54RYrYExKFx8pycBcwPGcvW2kQJT799R6NortXU",
  "key19": "3DNue3tbrzLC8aYysHTTj2a1ub1oAE8R8AeJmvCxoEdEMXv8u7T1WVyVLFLejbydJuzmKXNz9vk32y9V2J9J4YL5",
  "key20": "3JHiDujPwTE5amMpAEg52qskiKSXJH8DZVdQtLJcAFcV9sfVVBvnK2tjkPUFVQdXnQ1ZUThtFM1dPYbHeDKgzBZG",
  "key21": "bDNFX95QcptuMyC5AtUpEd5EaTgDFEvsfA8JEwosYnnxpMa5DUNNwUNWKWYm3bi7LUDWB7z9hYBCTVB1Z8grdrM",
  "key22": "6GNadiKgXT72LijUjSThErvCQcJjnE5LkecckzRPZjci3AaYdgP1nSC2nPd1hJAhde2e3nWopswh66tWneGqMk8",
  "key23": "md9ox16aUzyXjCLDFb4eVH21zd9yMGjErCGt8LoyagRXLgjBPubetsVQqJDNPdiyuG5XXA5KJWsek9Hfhjnj2cZ",
  "key24": "2yBnQruXMzswoEtnbPFae2mmfpmRRbpbE6XBST6UV8UyDPqhvfzqXX9nY74hPB5dQNX4hN65Dqn82GVjAaXsUAqb",
  "key25": "48BEoJcUWv13y5T1mWNJeynsF17M9PQjqk4NBQak1G3HWbnZsX9MGasQFR7iVeoNnvs6CquAxAAeq3ZSiXy3GX21"
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
