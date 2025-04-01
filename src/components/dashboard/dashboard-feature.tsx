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
    "5U9VBh4JK4dWEJcjTeXMEsN68WDP4KNuRz7mEJoca2A2kAcBTJdLy1Hsk5AhoJBPycegbqEtWdUSywtnghB8AL4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23p2yH37ELnHRym9XFQrEKkAgMydsHQPGojxfTBXxkYqvsneP4XzpetugtgPA3XYd7QTvghXrmngndmqGFqDMSvF",
  "key1": "3unac65CuqYiSd8eYHzNHzZzM3srh3zXH4SuHWdKyVWqE1i5mX9cm8b8zAhjEjktqxn1X3wYuqLegPxj4BTFiFjF",
  "key2": "4i2sc83s24CwcrUc7QMcUuryNWFztPe78qwPmJfGrruKPwxqrrmWfUyUV5phpE7JVFb6s19PLA4V32AcazCipu2L",
  "key3": "5sptMM7cKEoQiQsHFmctetrYfY3B2jzt3e1Cpy6Ak6AnZJxoCYSwSAN9NXpRWyLfFGWrtNE1tSJw6eB3AUvJty6g",
  "key4": "3ULMoX6HcKWUnSuicz832B7cXK3GUVi35W261RVcgJuHECDbejjS7dZkaJgrutQ1DxENghwrJceBaKWhdbRoHgVz",
  "key5": "4mz5FpN2Y8nwhe2r2R2uTWeosv18HkDRjodzuHQSi9nk2Ud5hopoT3NiBbSPt1yp2Nm4Gjdg4MDnFUBT7MxbfVmn",
  "key6": "U7FxzfjZ9hrteSc9DU3WdT1BEtRcHN3aGKqYwtvKTFLt72CPxXwkA3k7ZekbZrdVdpHM2tBJRcdbWhvgUT9joKm",
  "key7": "25GYXg9HL5BExHqFdbBitAZMTkJbmrsZnjncKeHXU3GsEg8w3keFKw5yVFgYwAKo2Xjc8amCvg1kBbdTwFEpnhw4",
  "key8": "4TiLm9MECrtFdMdi28Ae1rXmbqfiGt9wHiCrYohLBg9Ad1VbuHuGLFRhK6pfqdYRhdYYVnLUEbWxutjMmpJBsLYm",
  "key9": "4TrFmT2XHRHu1LHb9cMJwqyy5pVtfagfoTS1nbLFkYBUaXBFDjyYPeEbdv2jY1GKPMBGmusCXM72ZWRb9vLRoXjW",
  "key10": "HHKdZrayv3paMzJ2CbiP7vgE8Zwb6AfniUyVZFUuqc6AX5Ybs1tFErjmVeXxVRecvZiNhAaW1GpwqZ1P4Z92Mia",
  "key11": "2WbwsQyauUyHKfrXvceSFjJfp5j7ND33Xk6euG4pZ5yEFUss8UctcTX1MoooAwaA4tfn85p7P99kpcrVJZZERvBi",
  "key12": "yLv8tH1ruDRCDB2qtAs6nZcnsfx5dEozNSJ8NYa42CaJ8dao35DgyEVaJKJhPrvy6Y3j1uDp7b715vf6ZzdhcaS",
  "key13": "3iXDKJeBJRuN3TDrRmCqzcgZdSTkSWaYCeUtg8dJ35hP6FWWU8ce4jE4PFwRnmZUqrbz2Z43wyoHfxv4eVNVWc3v",
  "key14": "3JLCLr8ZnuzNcp3bJ6nktH8DcPCrS7jms84XTstmJd8U6K4MGWcfsUeyfDTZVoNtBLKd6xiuz14wW9MHYxFoRKvj",
  "key15": "55B761Qed6JAfRa9F74hHVGYtzac6c7qqCi98VkqDT3bMxDWxVwwFMS3k6J1cw2qm8ASaLSYHcq6PSiWjcFWWW4Z",
  "key16": "2K64g2CxhcZnKd135jmQF3vPZyy7CZHtUaz1UG3CcBzk3vBEbhDijZmqt31aza6Ef61PCEuwYBtWuas1rErXmbLz",
  "key17": "4tUiSJXaDxR41nCg36goPgR7wg7uB4pqA3nzxT2dF8xYGowzn8TipUbQKs8ebV3FWCRqGY4ostb74CYTHt6CWSe9",
  "key18": "4zJHbJpNQZDh2QF6JB4zkVbhEhKFTw4JNm3AzLkUL1iZGUFZxHQXFeFg9JHBz1Xg6PcjFHyZkPqpNHTuP9eaExcL",
  "key19": "2zni2F6gccimypBghgdf6cjEYbPGob8daG5ZXSoafLU1fPXscvtVyJrtYnEug2e9BVsnNeof1QHvDCAuvk9ePF9C",
  "key20": "zSiVrVKugr55b2kEXTxr4YpaWCMj5Mxn49wmfqXSS63Hhh2SdwDR51qpcyZNyBCu7ULKmLzrKK9938LGGXD8UjR",
  "key21": "44VykHF5wK2aYxRW6XnT2hTnXbiewuxh6tgz8axbAL5fC89aS4QpxnNUYPuWtPBT66sbkkScve9wjqTLG9jo5BdU",
  "key22": "5wNtzb2Zr7HGbxL55yeuChwWmHovKfHRkEBQT257iYASLLZrKTPp5ju5adaaWmbHy1tj96qREGHdGmMBDggKDtVz",
  "key23": "yHM8PqxXwzzq4gJqjqeb6X2w3RieAnRoU8ACdqtRTpmPjJukYh61htzNx2E6VnenMzmLqXZWGYCN6q31wWfqx1F",
  "key24": "28EmY4dJcc2y5EBaw9QaAAE5CpHX799fYjA1AmV1Won7jP8bbMRLvacjZdeWvE4eU6fTFEtEecJhDwN8jaozU4Az",
  "key25": "5MX7hcLZAJuCvuUQJXUJXVgor8D9QLbqUeS5dGHcyiMc5CjKn53zSsWqd8FkZ85puQkpRFBCGE5tctzeLx4VS2fy",
  "key26": "23YNBQ2MuTfqbEUcZZcmuLfB7XZpjJLxLeAEZ5fNRFMLQLPihfRPs2m2pZyQELczAApLb7CFfjv4LJAqzxAMWyvq",
  "key27": "4qLsB1NhudbDZeCqF9ZbB4fJiNqxNJ39uuX87Zxfzx9EJGdcKPwfXF2kAMhC7dVYbWtQqvXMuZcMixj4HFHiWr5k",
  "key28": "2x6YfXQCkYuFmcAPptFDBqbN2KiG9pfLTMap575bsF6LSYpkYNeEGvBB3LpVRc8ewZM9wDZhrVsBmRDqbgTWiPRS",
  "key29": "2fMa8VTSNDt21WJTCMWZr4452XRKwvcm2FgfA6DhSHW6C86iemNWNAwPdvTLWVVMQjy9DrWVkZaLwhd79f6CCbiR",
  "key30": "3HedF22sFmAy3ZSsdamaba9f7WUi63Hnxy4ZZfrDcDS3NrtbpEbtngfZ62Fin3ZvH5p1zmbGJAXZQw1eQEtuuUii",
  "key31": "2g7XV76mZY7uLrQR8eKb6FwkgwsQhpdBVtxR8SBGSRJi4SwMtySK5wFK74SzV5YEebLVQRwqXWQWM1droBuhEuU7",
  "key32": "33fL3PgBY8zoMYR24Fae6PyBNzqFT2PicX5kHC8QVNG9VpboWooQJhDj1yZ4t7imtZK5mvM3nyubvt5aGwyYFht5",
  "key33": "3exgJ2y1DwYSzfAnPaE8KdwtYpKWigToeGXox99BVZk9pNjVHdNGydizqgV2dBRh8aBeEZg58efc5mjrgYhPYyQs"
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
