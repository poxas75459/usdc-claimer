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
    "222GMz3d8xabfYDQ5NREwKR3be15gazFJVobM2jNLLnEqCvFqRshhVmPueQEKAb2u3VcNNfxmUN5p22SQW3pbqkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLSYpLG2XBU96NjTm2wPMuyzyrYoPYSuVdEiqnxBhpDPELMk5eMUAvU8bPa5ueDx9vF94FUrkrBEjrWESV8WuEE",
  "key1": "4RjaGQ7PQKvNVGPnwdePMryV18tbBdrLuUWmfwQkbvFggQ4KW3bnXvx5KyZTjXctEMEea9Ljp1Da2HTcHwD352FP",
  "key2": "5a9oiYC6Gt5zgWtq6TrphYjWXpx5MkTfgtfcERzM3D776kbbGB8ahVXUXzt2z1rmwHzcC8mWJFr2ikHkYSfJZnXL",
  "key3": "5EXhahD1WmRL3ibwJC32pAWD7Gjrm7tLeotUZmRRMPpE3E9eEA2wTag6jS9wSiuCGPXZ6xzq9pcbkQ75YMAdnbHD",
  "key4": "5FDSN4bJZP9RNeXAkbBcRoyjvxeVzccjHZ8bcxTPeqNhraME6jfGdWCP7YgGxCcuHFvizysXiqzfCFu4XTYa5crm",
  "key5": "3annVJWA4yZ2cY1ohV3GMicit8yHgELNV8KRr6Te6t6qVBahcYraa81Kp8oa16NNoDTbj5hUnjziFgPipAwKy5Hb",
  "key6": "4JX7L7YByyUCdcQda5QrispLqcQGwH6H1Udp65aLy6rDQ6NHtLwGX2eVc8fxDrHrcpDgSiHZCHbtn7sWHXytcmZ2",
  "key7": "5BfAAL5zxPKkgYmFtdENGbF11udJ5YEAi2sDPj5QBXwFVUYrcHdaKoWqDE8L1U75emkAvXZSCPdsQFW5TroeH9R",
  "key8": "5XyzQvqCWnfjkoQY7Neiv7nyt3AdzrmnnQPq5ZijoQe3ezgpLGBQNdrKCzeaidkS37xLaxTKqCGuPrvG4taBDM4o",
  "key9": "4cxQ6NxCTz27xjNukSY1wr3iDpdKtMmhCyyX6cAKvNhKhCt4R6vAnSDnNZJ1Fy8LpJU9m3eMzeX5F33kJZq4GUK5",
  "key10": "rM6MVLi1ef4zZr5sPWjH7k2KJHVuzojdkDbDNnLjsHHfiMN8H28nciT5mvmTFWiuTNYBpm4tyJtogcXpN3qZCa8",
  "key11": "2r419wkQh3hZRUr9b93Vf6d4arJtJji5gu1CMabsdp2qCho9zkXQuMksFEy5optvASPFCtGpkvcBLwcmtxGTKcXt",
  "key12": "2DuL7HeY28DWKYxD2cck44UMpzuZ6AWsciFBAgB1x2SyyFSTZXu8qUvHYRsHMJWwZvjKp3aWvVgY5GXJ6oDRNoYc",
  "key13": "jybQTHrkuBeToeEwxEJNVBBrQKWHgMW3U5gG13KymVrsFKb7rTbpEtSK9XufpZYsG7XpReCFkrPwqaqNQLEhH3Z",
  "key14": "zgnYiCpFeT9oPmoZ8u1Qc2bwWXUYM6poJybziZiRLFwFR5UemEtjt6gxqck7HzpBTDKUmMYPHZb1dXnV51BKkGH",
  "key15": "3hUaF5vxqwvA29n5CAxGiKsZJLkumM2d143PUnuQkVWzXh38xP1anv8mTCcUKJjJffQsgNJAVDDFCSAhRMD4V9bV",
  "key16": "2DGWQPWadG3zBSHTRzo57JrEZLMqd7ijySo2gY7Reftzy442PpCqYPMZjGZYSv71BeVfBGiNa8kuy6dZKkREJyRy",
  "key17": "67ELiYH9U1HQd75WsbfdB9pm1nLyv8ojRbKNETQm7PteMoHXNY6LcFFbubGeszZzwFA7ZfpBKhudQFUBy3VyswQq",
  "key18": "2a6ZFz1hPTTLn6wkTd4KLeBPDfnf2TiKQopCewTijVxRCmW913yvvgEbbQPH1bXDRF8cikeerkrSoZZWYu563ART",
  "key19": "Y5ZKSaRqrFM1NrNfjST3Kf5BXe4vWRH7YCoFpF4LQqRAdghCpo9XZ2XknoUoNVXj3izGnuNjBJ5JncrVeqriici",
  "key20": "2bFYU8FrXtEpkR2hTqyJHHmQEUQfeXb7i5EkjNUrvdRY8zq9uNGpWpnrXnhoFt2FYjQLih8Gbczp5eSo7FsooTzJ",
  "key21": "vbdYXxGT9kmTYsNkCCa3uaTTXjE8TvXpNC8QuqeHoTavvE9g96tzArwSWrhbV5dWoaaiP8pfJtXv2fWWAzLsmcf",
  "key22": "kJfn2ee37Jkoc5QHw42bnUqowoVuN5t5f8F1cTUe46Divs34JkjphSdLNiXGWSNEjBE6DLVyc8Ldiep2S6iT57f",
  "key23": "3jQ7UV9GKm5tybrvJs29poSmL7FLQnCx9jLa4FDrytcM7mSE1yTLaT6oNjPjKSAEFfKvBpYdQREW2dGPYZQxePeX",
  "key24": "3CubuNyTyeGJBU71GYpRy9i7TyDb4fzHFQjdLyfoutvgXkPzkBLpqDczUQxEBqCMfr7X2Vh7yhRcRQgXWUoaZrT8",
  "key25": "4tyexxrJhxA6um7VSqA4aCLT9YzF7Meb6QAqNcpKLf1FvcWtcerDaxNm99mjpcd7ehTwSrLdgcnnFMtk1nRq6Ar7",
  "key26": "2NKAAtbunwZddWBpBivE36TSSxzEUxmDWbfuS2JLDfaUatWmwEER8GmAavbrqamNvot55M2L684wyYtTNLkoHGdr",
  "key27": "5dFjtTnBR6abxUEUAV3KgYHVrqVtUnfHxwHNMUXqmAfo83Bx8QyVTJukCJMcZyMZEFh9iBEH3HV1QR3rBuAXMFwN",
  "key28": "5B9Wxii1gML43c2XqXYA8iKRGkW9JtZ2y6nMVgsV2xWXTqUYp8vi1Jn4eqKJ4tjCgmjgXfvr9exLT8pSgkKBPhmv",
  "key29": "38JvxaLbGQSHYMAjLonsK4HqNNZwC3DEg1ii4gjesALwaiUWoMw7H4mTp6tB7DNPZ7JGqw4BKgh2bkgS9RkJfs5A",
  "key30": "4NzEqoRg8ZgPCmx1i81WZJETMam4KvGVMaVfzpWjmtwsn9ujvWAdVi9tqpyaD7ShGwx9EL1iVv1PMEt8c8mY191T"
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
