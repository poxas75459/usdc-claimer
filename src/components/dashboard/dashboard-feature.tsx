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
    "5UuHxXW83VQ5nzFx848vvHScq61FMyE8fCLtb5T2up5RvYJkkYSHFhAJRak1qERT573MVgDBiRCJ7QG37ZtqUfoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w76Y7cBwSTtfXdh5ZHEBihqNR451aHwQBcTTp5s7HS43bvHhEN1DhgTnBWKG2GBUExmcQobsAs5jSg6TW6oeRrD",
  "key1": "41XiivYFwt1Su4wsMYcuqsKyrBPiyjFfoL3qNtBpbxjiQKfGerqnCEvRscdBmLoReSvC2H7gYKrDXbDmG8mKCmtz",
  "key2": "37ZS12ff2X97VuNd8fXa8u1St8ZVXFf5hUnKisNEPLpDpP87UNRi4wACn6H5DUMede9pv4aRZjUHHQFiMQt2Go5s",
  "key3": "63L6fYw4wfecNYGR2f6StxDKJ33EwwfXnwA6kXXrmP5DquiRvmZNtAKjo9Wpzhfg8fBCCebrzGEEfj58rkCgDYpG",
  "key4": "3GuzNGHLkeCipJ5aMwnFGpoNym1U7GQEcNNAPpmvYK5EAkXBYh5jhFW8Bat5muBUUFfgH1eBNS1Cn2zpdqHXVAMq",
  "key5": "2TEndGCkguUqZqgKoszg6pQaCbjEfYPAa8EU1HVdfgi1B5PBtAK4NXXL6not7oH2uLLYrPShyyJGycmy1DEEEeze",
  "key6": "38xXLhH5Wan3z8x4QkJqjQy44P7oEfej54WcitwVmBVUjaa4rASox4CJAnj1HuPAZT5DvT29gaHYDTLnZRTX1krs",
  "key7": "2asRYpjaZf6r9CPQquAA9BXMUgARfKk1e1h37Tkq32JXGKmp852B3qGydenXLAqUoxNk28HmnRbsMhyfM3UQGQNv",
  "key8": "51dkLTBRzk2zYzmQtcSuKuA5H4AjuCnZEkgnedrnya4vYKqKyvpD97LiJPn7zAsrwi1q3dbrKy317g9bTZH3fLFp",
  "key9": "4wLm7vpwyvwgCiyZn844YGmiXSurv42vG6DNGb4Bb2tf2u4982QRMFZAUuPw1i4TE8iKttuWPvyz67UxLZWiqr1H",
  "key10": "3BnX8facgMqpswRDAzPHVKfkufU8pU4pEu7jTKwMXt7HCa5SxeXhMf2WSRvhziY3CygMHzXdhwS8AjuWzwkouQfY",
  "key11": "5QBwdE73N5VkxGSTKV4H9LUcExnQVHuptVHerRn9v73rwUkZ9LerxrTbxTt1CZ4nFnfwKy4d6Q6rVLqcf1KjTT2v",
  "key12": "NTrMdtY9ThdDNvBodsKgqMBRTeDkNzSfCJ2YqhskSbKK4WbQ9WxEYU2vAxYVk4hkuzcjG59YsN8RkQt8bHUxykA",
  "key13": "3BFC3wobzGuT2WfJuVeJyjcycweyE9eUz9TyopHWb4NLHiGJ3ohT6oanTeRQVnx2w3sfwY1rGJ5pP1XRueKyx7MB",
  "key14": "2nnXhrP3jKP7HEMYc6GfhLHHrMBpH2qQoi8d5YbzHDJVEzaaL1U6D9CFNPuuXsc1cDSNYexyzmYfqxqrjKunrkMi",
  "key15": "7S3JxLj7kesGfXmQE2Zq1fWTC3vPd2GhUjwwS6CPuzrABLGezX6XhTEbm9tJktFzpECunUf47nYcmLN22prdpYX",
  "key16": "3jqX6cbq3UqAEFipiTX7R9iBp9J768SvMXQrC7HfYGfxrfGMMs35JhBMe73jczvDbMH7xcynhpX2rhau5cAuMaxy",
  "key17": "fo7311V26jeci4jWiHv2LtytbYKK7tBXZ1W3Fw1HrwnX3GVJ9wJ9drXAxt6N4GdmkxrbUbiC1M9QwR6YyyckuaK",
  "key18": "52shNgFhj8iwSW2YARSqmcNfDBs4Tc9XXgHPvqAAEhqmEA7AHmXupJRdu1dcydKYx2J2KSJypGBekEao7E8uXD1Y",
  "key19": "2F4v7abiWsP1ue5xTxaSqrkXvsrdg8wxYN3WujdwHFsyfphCqLTX1QjfN2e2XYq9DMJqfRrPreaZJg1JtTEN9uFJ",
  "key20": "2x8Pco9m5VoevxtHJbvo6rDcq7v6QcMgtW5S5VYQ2tYUo8uqnWQnWucHoA6LVrs3buF2eBCFyDkdjC1TKNwocSJ4",
  "key21": "5nYy2sGHh6YBUQDKWFFSVmu7qgRq6axHpL8qvkrpQU9bXSDXqgYBmPmoWdPNE3z58gAA7oTHeBdG4frjydSDuaDo",
  "key22": "4Ax2sqpjiojgTwtapZDvPp5zT3ecxmif7qUtwbBHYNqbjSVu7sqGuz3YozFzBZcguUxYDZ1FHAvJzk699ptokweH",
  "key23": "5KYbgFQgSTKuUrBYjjZ1Ya4s8wgq7R5DY75gi7c7gTcm5VC61CAcTSj51ZSTFZwhdDu67cQ9q3QkfHMwJVWV8NHP",
  "key24": "NN2ajQSBo49HeS1b7YEEkQH4wEDhwyWzTFNkYDAShzJPxENeTTqnWbVFtK8EgmE8zj18DR1xiianx1cy3eZcDzN",
  "key25": "HccDDSfgcoxn4b67a92t7LofSspJUXMir5ktmP1ocr2SexcTSmkqPoWxwx3FRhLnQhow2cXWtBNeL1T6DDxoxtW",
  "key26": "4r2sWowe2tLf5mEk1MfohGc6nTmU4cQqa76q4YeL1Vhp7iJwTK3CZtwTZQLWVFBg6Zp2zQJ7x6UTdcjMpuiiyU8o",
  "key27": "3LgvQPwg81TVLFJNcZhRtbCGhReWb2PzMPwHvPhxH4sDwNufG2xDjK8eDUsGPZKKX1a2iYAT3MGggWF94VMtVbqZ",
  "key28": "5JiPNUHMKaigoDB2prLcGfVhPzoonxNUvqMweFn9H3wuiuX3LuDwkABqEZyF8P962a2bc83ob6jEn5vG6k74XkBs",
  "key29": "3NF1EeptvpLYpZoLEo7ogkxFwLvusoX6tXij5bGPhTzpqydSqoJ6FEiF2o9qL92iVCGNnTo3nyoUcHz5r44nGkQq",
  "key30": "4N1ZDaY7SnJhhF7pXrCeEpkM8Jw6Z4j5jegjiZkg838jTpeJ1bKLa9HzvbdoAbTpkLsrK7XjLrKSB2D5is4cB29b",
  "key31": "2xPfDyD2U3zeHhSMy4dKMY3vyTjNMkoDcnDuMwf93tUC2FDS15mFuTeTC93LjiQ2DTZDzReh55XrfB1RP1kfiEDA",
  "key32": "riCryQAbMXBLNnLqrVcFpFNPeQcQqbcezFAsPfs4m1w5feWMEt7MLwQi7emvLm7c5khqTo9eYmRVsV6nrZL6Vg7",
  "key33": "3HGwSPay2te6A579jrvj45HYnU6xQNmtPrjLHwC81qDncdQsdegMeWuk68DHVToGYNSGn6TE459vv2zvmVW5ZQtJ",
  "key34": "2zRNEfeD9K7EE9BL3tBqqS7MtycYQB1iqVr4i2UR7FFhb6K2BuPVfUPw9aJ4W5dbg7TpGHtZPWsRS8gXED6Xge2W",
  "key35": "BDQyyi34wv2uX3SivLNmJJi2Gdvk5WDoBZguwxv7VCjYw2PtQquR7k36QSfCb4QLADaNwajxQRTWkVFshn564xU"
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
