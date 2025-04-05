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
    "31tFPeJL3ZCcP7NwYX4Afz5iGUB1CWUbAWAKQwhS8XxRuXvaim6DyVLu2qKLjZd7A5QMwJbjewoBttHusy9Mtook"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41hGomjiVMPg1ht1PLCUb86DXrJ6PMLBiMWZJCezRHq1at6VqBy2rrSfYFBdoqqJW5GyrB4oQvacBdBA45rNAcvL",
  "key1": "3zWgdp1zahveoU8HvLGzvAMSRJeswXQ7QvaMsSFLhATHrhPKfNNPAwkkvrQqri77VedQH6qKAK2iegupX3XgNy8R",
  "key2": "4PZKY2rPxFaC6fny4dPAYWHFygRdoNFqD26ywD6bMr9Ldugc6k4UmajyewWzjtPnRWyjQUCw9fuwz2wiRofeJfFF",
  "key3": "7tpwBvxc812hJ3uiRii7seCxgTMQcJqWjWdMkcWFVAW4CZjWwKFeiKvxyBpL6TaC5C7wiHFXqye1oap564mGCbe",
  "key4": "5DerqxmexK1KLAnbBz7XNQTxjGKJhLAHppKMSRhgpSB96WYRswd4zhTGbfF2LxUtDgoonEnJPJaLm2bn3XfxFhjH",
  "key5": "2Eq6HuDHw4t6EjC32GAz5yKNd4bk6VN4fkYEXvgdYeJDQ8JdudfQJZNhhi32BBxCuTZtULf1xckU8Drtw33xDaNg",
  "key6": "qpvEYt72AWbxMkn3MYny4oaYXiLUo822wXn7nyBtegAXvYTWixJuJmi31Lfv7pytXVZTqsHLbKVLP4YayzkX4wc",
  "key7": "xxWtUn678JUAQZv5yKUdEpbtK7WPwJtGasd3XKFydwKDoGeUHhyABSdWi4BmhTZ42pvaGRKUTmoNpsfNUm4YGtU",
  "key8": "5qEMzvxF5Ub1ZuUqows57eED5yPtFSo9iN9NiuNMxRG9VAkE3nenTFm7hsv8xZAYWw682ZBCuDxmKE6nu7xqxGk4",
  "key9": "2p7znSadHbeG51DnyersFdyv8HgJbkUtVBzVgAZfUW6o78Z7A6htXXJMs2pXTsNzhwwnDUeteQRt1heNK7ndwK8N",
  "key10": "2bkrbL9jBi2AFzSFQieJE1xXGUnHtX2c3QPbxKDTTMh17rZuFe3MS1XKLBLrp4jcfKNe4CsJM8oHQYkhh8GCujqU",
  "key11": "2WEfr6jFScfKq8Gm9QuFyyPDyq44bsWQnZsiYwiJcDyg6cngWPHbyipZKxMtBRPtNYNegGt3MaqdTdfn8x7gc6NV",
  "key12": "3GxQUuS9bcnsrotZqo1duacquTNHxnEcE9DdVMZibKgEz4aGyAmUZZWTcqSsymXsduSPbYNR1nujbqd6Gzto7RUb",
  "key13": "4Hzrj9MEQQXF9ywFHa8uH7ZQRGq9rziZFECxxvNQCY5KUPymz34dynCFcjBuxuiCsGD2ZFor9K5EqFNUgyhDJZjr",
  "key14": "3i7aScmtz36acPzYFkxz4ivjCM4opUnFdv7XAnqzBui8z1Dap26PJvB7cx6hnA8b8Cx3S2pS4hyLHtKSdLa4TchM",
  "key15": "4dTiuY6fMHfvhjPntnMDVUQajd5seNpy9R1GLh8xbdmB1qnpyxHMtGMPQHWVpZTNi1vNr1pp3QcBJsrMwGkRKoZg",
  "key16": "2rKKR9v5PF3J16LubKYjRy62JhfABGP5TLECKUb5LyqUnePvwiuqGqE9e3f33NTvN3CCE1rHWUQ2mV1TPpjuFoNK",
  "key17": "4GFAeq9W97jX3eQSmiNjkCphBnaKww4fKarEyv2QkLDL9NdcSgvAAaiHayTmUkXk6UUnZMpeDp1iv91nRVupGMjy",
  "key18": "VSjrWLznm3cbiviZFcXQd7zqQqYGeUByfqLK8hR8pHNbTNLSr86582VvEoWghhxRvdZc1d5ms5GFhzk4Vt7s8Tx",
  "key19": "4YzFKBtTBqF1ccUQC1YVcn9NqH9TremL1PyYGfYy1V4espwHXy9x7qVZ55FcrZhqWGDVehA3jYTjMUPMRWYXNHzv",
  "key20": "5EqSdsxH22oD9k9gqULJW9qZrp71gJ1cFJ857XrZFgQD3iGZ1zrgM2iVyxwTzsWz63LEGWh9K5Q9yCjZkr7s7X9t",
  "key21": "3Nmaf4naCrUgX6iioiHFT3tsTwi65J8FgonjpfdGKDQ4ndzbrUcfNV1kQ4RB8b77ThD8sZcE3UKLb6oQRYtnSVSv",
  "key22": "36kRxDYAcXstRfAG71a8Q39pREYCBsHhhpGVK7h8Xt3cmoCMZhH7rx4pVJoydT7EKHT4tk9s1CQVcKKEhnD8ZnVL",
  "key23": "5cjewE7Vq2KjsCjfCTiHHiBVFs8xQc3Qe77FVe1Mbvd1TmjpCnJ9W1PrJqSgMLBqceXkxN7L9a22kHLJX2WnsxFA",
  "key24": "ms18BED6yyYZdJDTXs3gHFeBmKv4NXzMTMeQrjN2Ya9AeuAwFiiZbZ91PXgwkSzQVvRkuwEH6VuiMkPgz4WFPh4",
  "key25": "4BQ5kKUt2JtoG858X6cHBKYEzhzRVQo9eoF8tsy4aNVd2apwCjjEejzzRnAZd7oZVqfniTRgHLZ99Em445KXyhS6",
  "key26": "4HnVwuEsM95VwQ3A4XJEDUHd921PPQYcEQseBSdZ1AdffqHTtYhD1wLYypR9SMjgTrWb3C5ec7nBDRqjWD6G7RLD",
  "key27": "3uRpcqSBJp2rcypzCCHJuX3FppAQXPGsBszHduwFemU3mK6pUDy8YRSGhrkGm5CQdZFAgV2EStPsGihHXbwbqct1",
  "key28": "4KTbEYfG72Jts8NsvJJfmwfycq3hRALzN1ZfCo1y7HXnYzfCDwuWggHa37q4f2fwEUPXF1TeZCtAEmgdCZ4motvQ",
  "key29": "4acLF23UnxEctHywPGvnYzQLkUQFEWc57AFFL8zXLiuuuxBp5xR23Lanz1oZXdkdTaTxVtDiK67eUeGuNMppPCev",
  "key30": "3hLNWqxiBg2NDva2ovogeTSYgNXoV3avVDeuccewguBPQ9fgjp2RKpPHt3yr5ai3nEZgHonzkaBbJNQtherAG3Tu",
  "key31": "4NsaxywBgXr4Cxw67bXA7UHud2wM7Un2BH63tZzMMZYjgFuv9qjeAXUgR7ybgRpYgBgku5SJcu3RugXLCSif5prS",
  "key32": "2J3fFHYWaGaMVPBGMFHqKTTiWM23UARLv3u6NaNRbWF2qEbdHPSzFf32DXe6momimvwEysm4xohWZhdrA3kqsa2n",
  "key33": "CN4wFpZUtx6cPpKdqzWMMmR6Ecx2XYsGzXg4Nkkth1yMcioDGPy1J5vSkxyBco9EpX8yrL4ubgSiLZBSJEUt2NB",
  "key34": "5zMm81sNJnHiJeJ6X2pFRgasxWXjJx2unjGFZGEXgXagSYkn9Z2czYrY4KLq6NwMj9SwmBYwdkgCktjbjuzHxJ5p",
  "key35": "PXeQVjYxEyEYwedCgQTcNszVgT673XpUrW8aD3Xb8QDxWcZYhzHwAHz5zCNADhPw1wtJ7BzyoavnXApxWYeNmpw",
  "key36": "4KuRJpnjRcKQXDUy89KKDrXZHVV1zZMtpxP2McuzA7T33ppRRp96yt5L6UoEoUB5236fAK3jqq14jqk228ehUvUN",
  "key37": "4nuvGk11Q3pTx39kEeAkGinLCqMjeR1D3NqKCUwpQQ9hu6KCXHqH7T2tJ5TiBefbzkpoL2Q5VsVhb9sc62YvtEDS",
  "key38": "5jUKoqee6RHodk4RgJTDriR8XdW5y898DLjo5QSqrTbpdZtX3297KJ7aYTpEgJ9ooXbCeSHGfdYEtPzVB7E6VVnn",
  "key39": "4Dm4tYEp1hHH8Hwc9yN9dXCq6nbrTPT2CmAEcavEypkMFPMXymJz9ZGQHj31z6jA6cZwZWxPmpgaiGgRYPN8zCR8"
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
