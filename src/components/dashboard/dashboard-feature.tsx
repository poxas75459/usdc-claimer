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
    "thPeWpMA18bX2MdsHxufeR54eA69Dw6FawPE2APxhsPjZmTtPpA9VGv414zXu2AbtaY6mikvBrEQ61dtyPrqe89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emg5u8t2Du3p9TBYyxePGWQKgwc1GK27SBYLKbsB9Ew1W1d7ezMtEEoFapSBAET8mpuwUfii41hYifVy3ni9Fzi",
  "key1": "4ao9GTEkYgGpCqW7J8HiKLRia3HpS8xyQSUboE2vameT84Ad38PrzxQRk6mAv9dYFcWCkuLjtVmzDwJA1q5sdD5Y",
  "key2": "5afFpgAVQUQo6s3z78bPBx4GkiMsqpnxQzXWxvFc1XdzaZWfdm1QMJBxqEaBPSDm6ezwtxqeBJ9g4aimnL8VnMGu",
  "key3": "nZYrXvirKRK6zWEBWJLzJUqi1PMPbsu4JV7DH15RgKhN3ajXcDj5RYNB6oi4Ef69tSrWPJ691HRoBMHyGxquCe2",
  "key4": "4TEh5aWJB2fKE9nY29nVphFDmWnaYKzGfzhXpzJvLX2e1gUx9J83VVrJFXYTDrw61TcV2ig397iPTgxoitG8FzdU",
  "key5": "BsPqWHoDRTrb2q7paa3rnKaWERketJBsfTrvNWE64Cun8DQ1oSwkC4GVLxEYvnm5HvoJCXTJfxQmQNnLyaXXG73",
  "key6": "2XzYnp8Y7nGd6Bf5LdanQsQSSegXx96rtubJxUZzAVt8ptEae7x3uVeLXbx1ptpRPjzGKSTf2AkpEDfWKbVsdGAR",
  "key7": "36MqwXAeLqEEhyJGKi8WwQYwNDgfmzfMUVbXTtEdXPRMJCXLnbNXpssArHrXVcJLEGxBm8yJWd27ETZBrkGdSSdS",
  "key8": "4riGy8sjiaffrzzLunbNu9AHbMKvDYDeaJY5mq5kUkWkgRrtze5L1SrMby7YFSwiUW8fg1uZH5qbp2wRrxyguTod",
  "key9": "2w2pGQ8p5UGqMwZMYtd9qg3wEogQjYtaCBm68LYWEpj2xJn4PZAJo6X3Luxgo33DL3AD9aWoWcW7jByS8Q5vgDmL",
  "key10": "3qhBtUif1FTmfEDQdkKqv4vRNady2VEvuAa6q87wFMxk3aZff2GFetuRvG6zL24NLMWJS4NHTYYjkzZhv2nLqZic",
  "key11": "2zG7yvpZdn9mjuhsh1otHtdDpbYC2mbdQKGT8sq22QqssB1XjEW8PMpBWe1YaHmuoSkDFYRvEyB4TzyK6jU6P3vU",
  "key12": "4ZdA7HWG59F4wPa6U42Ehyx3tg3h6YaPc31941tD9qNaBvsrXd5rBwnMrdb2dFEzjkfukCZ9fMRpc3PUGUDcEDee",
  "key13": "JNbSwPdmNWJxsR16gMHJVEYSx3kRthJU6mYcHHZxtLiLcAiFLd8i7GJnrP82tWE2VPQ3TgkwrhwoX3t98uvP6Si",
  "key14": "5Q6wEcdKxdpFfLBpWxgNubW3iz8TiUrCpPkF3rx2zJQwQfWXdWNoEbBJA2s8RbuvDh2PaEj9e8LXFKsNgWiFfZtw",
  "key15": "CrjQdXRsgA4g656C19BVuj7xjFr4AeHcpmEZht7qJBrihf5YUmcTTfLcKgvKPBHyfX4eymaRCWk7fF1WLxE5gHg",
  "key16": "2vfKK8xV9wT26WueCdTCqpyxwCoyN3yZiQTjJmUc2o9jRPb47wUurS9r7Xf7NcxbRBcCNRMjXY2TU9WYtUVyWG4F",
  "key17": "45Wi6fkZYkcg9w66skHyRR8zLvnoU7zUKAomzLCcdVi1tL2BrRMXxQM78vjE7AMNAvH6Ax1KQaVzkZxm4NrXXBCv",
  "key18": "2SojRxacxEdQoif3mhCbTpT5J3h26qkM9XJLunDgnPFajJgVA7UeJPYtWJqJESjTq3CMNnHuT9PPmwULpk6WpuTW",
  "key19": "1fis2yEpZWvLHHuYB8ZBmf9ocHJbaFGppBxSgabnzJWM4Y5CJypC4HZz8YqQxHfo6iVfTv8E5253wLFoi2SGkTQ",
  "key20": "5vBtjp7meb14BepBvAprRXat5muJEcJQ3PkC5BUhgc9CVdVYUHYDp7PpRpHUQ8sVHoj8nJtscFf4scZ5tXZTstnx",
  "key21": "5fSPEgVhi5kHkjzPUyXPQ5ByAFp1AUQbmdDZ9Uz5afBGcmiAwu9NnQSEu9vyNfQuEXwzYjp7AJ8MmDkMTU3g9TYx",
  "key22": "3BJDUsq8gTxmyLcKrt3BJQkKrjm1esZJ4ibqTyYWkChXbXszQPZrPWNWwZj6ggTtbbpzFrBkwH1EJct5NoEeXMTD",
  "key23": "2V5Nq7uQoxEbu9chM7JbifrMJVZ6yhVuRiyz4qoTjMALWms2sap4GupBCRxLrdRNEztEjDbM9oSHkcEwE1sCmaJv",
  "key24": "48nqPrx4aARebUf28P2UMotNtjnjY7kkFPTxMB1wxDddEzJ2VkeFPXGQ2DxGViYTZgaayuHR645gvyqVf6w8zsDy",
  "key25": "63eK7PmhYwoC98AsS16WHkcKodNqb6vsmYsHCsdmWrqHKqNXBGNJUqJtWMARpGqd4e6VPJtcSDxFc8qPqZ3muGWv",
  "key26": "43LHW3ypc6GHQREEREQBb1qvXhwVpg3MS3x9woJUy9fk79UGjGttWf2tYhfqbaSMi1K8KKYejuattkiSVD9xwFT1",
  "key27": "5SVCpKwqH3YdcyL2Az9ktcMEB66AzCp5Yui1tcL849zo4n4HBxUu3JxL91qmdT3JE3h1jLKjUHFkCmu3sA8G5kFQ",
  "key28": "4WXSbNeowG26ntkJtCvNUJACL49vXJ9N4WNk2c1zVwRq3dMuWbWQgUSBY3r7HFcKwbaiuatK4ygHu2HCTwNJFYb6",
  "key29": "4SbzvYi8in8uHuTbSkqatY4ii8TpJY9vsq2xH1XgnWjE7rammFbCQhGxEg3cukVPhwXVYxmjD3dPZ5qxGDsi1zYQ",
  "key30": "5fHTQpbN1AKMZuSW6Aaw24WXj3htVDmx8Xe9aCabox2T91i9LNFkpvu6xk7yC4MhqR8GUB6CXYTJaUWKYG6UGzgh"
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
