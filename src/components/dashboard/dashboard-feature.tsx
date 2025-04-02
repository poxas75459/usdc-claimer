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
    "23AeX1ERncwGqyShBzKKvV1H6FuFfd9RVLFTYhv94s9nPxpd34qngxwWq3Qwttdnp2FxhzvPhherefSf2tHbosr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uSq7DnKPrZxDTfd1LxM2xGapu3PXbhj3Uw4wFTUxP5TKSZZWACBLLkSbD3nmW2agJWBDfF7mGVBNJ93bR9nZs",
  "key1": "5YNUhHtZQ4ibV1EaRDP3kmKcYnZQ4aLjgbGJw4A3WrSDfS1bc5ak3XaqpW8VYJER28iiXEv3v9xJSgvxehJPqp1S",
  "key2": "3oYebtztJMrWQCCQxBYNwAowHgX5CokyLmZjCLrJP8331wngi5HbWqYdW6rUNqmaXFNJN2YgBpVq7bXdgEfU7E8A",
  "key3": "4Fg74wtrVz4kNBXF3Mgwk5Qxg3J1AJ3hv8ngke3UMgMvC8dY6JkQjCmpf4Fh8SM5cwggmgu9C5NmnyGC8GMcNehF",
  "key4": "4HWQUf6ba2zgnENEffMxuo8q8tBKTrfygVD4EDAbzfmZXdhwiYr3fr9wnUxn3BnGhjjnBRPoRNKUYLKJCsswsqyQ",
  "key5": "4uquZtaAcnUYn7bEZFnXgf2sFWonKHuwHk3xoNvpy3HP6HpQRvkjLrQy2NQ5B5Yb13fHvjLnRPELzmptVBup4QBj",
  "key6": "4dQCEyodSR5pJk5PJ5c5nrgz8J53bwstCsj491XSGeCXGBE5qChb928MFJbKKhf6194q6DjKiW467eaKtVRyX3Pd",
  "key7": "3r7JFEEVrfvZJBKAcuYPpdYrQSXPkFNHoeBhVWWCKw3RiGqKiZgJubTVVaKaASf48xcRXR6rtpNfqrFttrTXQuBh",
  "key8": "3iuNa9tkWX5kNnmX45HgHA6cpK3BbFfRc3MMQUjdxgvuxMqYELYYniHtQbtUBLXg18WwCSSnjG6zoqu8NdnNBvhj",
  "key9": "2XdCCwey5wSFrj7HK74qXbZ7Pae42hp6i74SWbBhwdWG3idf83pbQ7YT7DRatSwUyCQ55J7dpvmybTft6vAZs4DC",
  "key10": "5smd5F6neEjpHm5g84D5Ew3LPBy2FALgTsardWdwExm7xiuQ9ABPYLJoWEJTgxspsSkevyko4b6aTeZvuRPmZ5j1",
  "key11": "4wbnpK3hGrJ6tV1fa7EbMAf7qaTRYhbLR7uPE6dkGNsrWqffzS5fFYN9zLUmRSHvHRYdQArrBoUaAZYURq48xrTi",
  "key12": "679fy72xHT8DgY4pqoVJFWeemchMEdLU2rhmUwrbcJ3QivsWer4dyTSy1LmtW7Lj4DCMcczVrXij7uruYuNfUKdx",
  "key13": "3VDeUeZHB7ktJ7ue3NJie9LJU4pakWaxcbRz3wi3QCxuZd9UeGk3e7iTb8TWuVLJHVp2XyU8brY4BvqiuANKAwVi",
  "key14": "1mtpDNzKGm7Kx7GzHuTRgoozmsRiPyDG8LiwBUi8cg91ExfjXJV2mYPuK7JUyoZBVm2hQb4ww85qTB8hS5eR8VT",
  "key15": "66XFFzRR6LGjXAia7cccnfRn226GsL1Edy4rpitbcSndYb19564QDu2yg7s6N7GH7ADzCQG8bZsAXagePNvGJ78a",
  "key16": "4dY2A1zRPzvXSmdpWd9WND4oexHWmqSrfuAXCi4vx3C2kQoixmtzzNgjP9KzMtnvuA1HUVvQ5PvK77ZVPPbbEcTo",
  "key17": "45mTpHQFNkdoUu6AdMi1aMZ35soqevUcjU1WnzKA88ZPRTrzj6PsxS1gpi6YRGC7DVPCUx37WQZzaLKgxA2e4ZkL",
  "key18": "2d9Th14wagGWmp7yZmQreUo949WPvf9UqWTsNAXZe6qwSu9U4GMnUoiRXqWKULghKBTenNBtxKwMAkMfJeuJet1i",
  "key19": "3ec4FAwgZkT6aZFRpLK4F8NnP9HwScm55QEZHRszhmaFGjmHQttgut4ZMzy7CdfvpL2iT54mYAm3founFpSXnzhn",
  "key20": "3B9xPg12rRP9Kyx4teTmjqrktUr8tFYvmoudjXew5nT9JigVRYs8LSRQGJ9m7ghT7wVyafCuEe1ifihELrAvP7VZ",
  "key21": "4Xp4WELEbWMrj1cqajwYLwfQFmBeqUs5fVWqcBShznzg8w3iELWYvx32foBAYdPQJ94nXkeJH57SVTMDzkaWNy99",
  "key22": "2HLbHWnkpNxBtibJkx2cfRebbrRLPAWbaYQ1629y77Gfnu6r8KZFAdAjUq5Lmp35EJMN3aygkuheGvVHrvtCxuq3",
  "key23": "3fvrwFs3MQDup2UDvM4vwyVE5RDPaev7e3c5xUXTmvpkrxUU5hWhPanQtLLuXGdCkPJGYnmgLfgccquF1C6J51pC",
  "key24": "38Jb7CpkwCHGzVys998u7tkL4jdEUeRKctyq7jmmVKExV19RAgBCCAXeuTjXeuerBBMBBCQuag2mzd91MsJEkibN"
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
