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
    "4iUuJkRHnFsMEQK82KaiT7aD62o2XCrziFvfdZ5tyJBJbsFBeD6MMMRonVofYfGQRiS3JCVUv23oy6Ahf2d3NMcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPciZEFqg5f4RKRzvAwKHQFo2dN8kymGEbSF8ZT2rWiQDfCyHeWbXyhPcSdXQ2FH41ZSP5V74xyBYcsDp7uya7w",
  "key1": "MRvHX8NssHuDWGsvLJuvxnnCL9VTEFaydD6zBEUHxfXJvUir8g4vajSz56e1eDkTLhduoVo5y3KYibqvesPNxAX",
  "key2": "4s6MBbgwWQz2G4Dk3Fohc1sYxPcXW9LFRvMZJavP6hCxtPmSDkxEDykBdrUTbcKGX9LGy7yvBkPfvRFv94mvZ7v9",
  "key3": "5x1Yp8ZaRDLT8xg2yUMiHG3RieP688GwNURZAbHGV9RrhwMZpPzMbkvqJm21GHGaz1Q7aqYos5qEe8GSHeYKpHoX",
  "key4": "3vWVT7aZmoSHRL7coAAYwtiYEZDjs1fWhLKa4s78bzDt1D9zJsCtqg35L6Wox9b7wqhmScdsMXgwEBpwKx1CsoyB",
  "key5": "5aJBkkp5RBrMHZDi8xevS4iJ2uw83zAK6ts8DGZzU46EQdULYTHexDYM3un1DPjRy17RywwDGXPGryEtCioxCFXi",
  "key6": "M8hnnLMXuXEi5UDgMoHfXnNbS4JU34rAJu5erwdptWogkshkmsiAVVypU11hpk9RzMiHn7oHji5EAVGt4hDGz68",
  "key7": "4xMpR31hBxqjw3d9Zr471WNqcrisu9hFDbKWqPwqctD62MKiMXKRDMrgBMfJFhAEk9M4R7xWyYprKTUBU9Rf6UUL",
  "key8": "2YvzMAomC4Cu1uS1wyWAMUCz2KftJeJUzJKdfiXFH8ojz3RaQ8HLvSJoSJfeMUbRusc8rM1Pxdo3p1sb4EPZxG5r",
  "key9": "3Qp9gQbi5NuqY43fcd9huUyFN8m5XBxmj9BxDVeiS8Po48YyFYy7Ac46akzqDTDDgob3zYv3TX6nnEwL5vZYQSGs",
  "key10": "4wXUufqDA3K1Wizp2BPczCWM6jheFtFxheWRUPKLpuwpPE9pCf61JJpXF8dYcajdBLSvSnJqtTDB5pVFYxDmTAUA",
  "key11": "PXDvHRjG3Ngzk14HwYhRUrsGm5hCPzC7d8AmifMtR9Jz9N6yy4WgcLMgXkMRKsZcSvvcgiWp2j47qmDnkuk4JZj",
  "key12": "4NqUK6974nfALWbMrjFVqbp9PwmAM8WaSosKEVAviM48964HKc2rReahEK8K3psLCumU32ec4BoAw8G2WDcjnSbm",
  "key13": "2896XTi9TNVUHEwk4CzVt28U9aaoifDfLZrAoHQtZusVt5qXhzHPnfrahwkYH15fp6TEpyDVBaQv2jLivTYJ1P1R",
  "key14": "3aLPvUR9VwTC9qd2PhW468yjuiuRUQwTaw8MnHyH39hmLbBt3eENmFZZhqFeB4zPU6Qa2EUPxrYygsT9KiuZ9wna",
  "key15": "4SgA4rfcThPMRkEbBtB7wuVAaF9cTW9HBaBUseCXcSkQZto89R1SREZRoUTJZ6Y3Wx4cMRhuU16WijnLsvbWiYSe",
  "key16": "4zRWFnCvGy2jgTQyRMz5HwYGRt6eYfRRcSuWEhDiowB3XJHybGmKvH1fjXP62dfbogjJc4mwRNu1B6anrYzYKmAQ",
  "key17": "4XSt1sqz2CkPBwBU2uZjbeoPYqp7h2P9XDi6czYMZcZFyxfrENXCeKE9yDv8HgUodRVcBNPanfn36rHgdZW2wuLB",
  "key18": "432HhbofbvrW9jqWZdoH3yssjSaTyjJ7xDB8WKoa8uzGF25YUcs3Rfo7gNnp7WBxBi6xPHKLk1TCUi9JL451sNui",
  "key19": "3gc33B3VhYRZq2deXCkWd2AYaB4Hp2C2h9h5aUcGyfv9jLzGFeQz59hnkzmhCFEDmsAZMqDWRRqgPpmj3BVWG3WP",
  "key20": "5FYCcw9TwH5R6665aaEXZgz5n71VPxAFtzyZ3WiqzCs5KFm4RZf9TRdC8T6oopNE3usT64voJeKNDRYmYrUzw3Js",
  "key21": "2eQWYVP9FdFBS6r7v8KccY4fx8JdzWD2DkWxsJCNY7vmtZ7gHzGDze4FQgDyq4t8Ehsfk7HZPPKUfUBdVV7DL6Js",
  "key22": "5trHnBkkQwgWSnMx3zqQ6KQS1EWXU2SR1DjTS3SEfFkkvt3R9L2BQCP1c7ZZEJvujtj18jVhojfg3zc7F6YRumbE",
  "key23": "3kTR5hCCGY68aMKgXZVbJEscQ4XcxTbzeULkgYEjZkujEWHP62bHF5U9U6QtPTMEcvQebeFCmnzsnv38NChr11Ab",
  "key24": "5TrAy65KPMJoNyMZGkcgaRcpHHQQwJxhmPTBnJRNurWY9TnrYfbLKbBBQzitCh7o21aKrmsf1X8i9kyf1RskFjtj",
  "key25": "4QK1p98pzoBgHd6mqUKiSrBXg9RBYcXj4g29mBoFKCQ4sDrZwocSNT4fcTsWmUtxzsbQohJdZs6FU5PyZ9eQzUP4"
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
