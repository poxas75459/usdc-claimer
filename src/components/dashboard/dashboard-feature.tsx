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
    "36y1bwHmRQYty8drmzBj957QqVuhyyAHodzG3gUiAcwz1Cg3cSgxZVbfMDGxQww4PVctDzji45q7FJPy38yG3i9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fKaeZ1jrvy8sVBZzAZCNK6uucbyJowVCg3oWAirGzt9VsHDiHbxTy4dsA56EiBWznfEgR6hk6tYJzqELNjtjk3t",
  "key1": "3bfuRTUkgARMGW38n1Sp1e5XjAM2vyKkH5vKnxMoYpEJKGh24poMrkthZmpXEZKK5b1GAaAcaYc1z1QKUiqZyKKh",
  "key2": "4fb4tnWXYvhxNHoYmNaYjbkqYa1RYNcDUDBa2RxtMa2L9GTZYDaHSGn6YmNj4NxSG4ZkXMFDzwLn7D5jAugM4JRT",
  "key3": "2VCd4YpDiQQFNHfWjdNUUeh24NDyh3mGqp6woED8Wd9v44RtgWehzeAVL912DfecRYLRntCiGpJy7NPMXWAyUEeP",
  "key4": "4WZL8JFA6YRST5c1ew9FwwY5TvaxS1u4iSQ4MW6PTMnEMeQYQWr571wS1Qc3rF2kkkLmDiD7n9aAAZBLmeXeDxAA",
  "key5": "4UFsYMMSK7HnPeCCZ22Mhmqoy95haeWfhCEu3d3MMrGyTggjQvUQz3xc3g2LCkTBFqsF6Dc1jEJn7jGXNGCK2eFn",
  "key6": "66MDy4ucDMR7EKDkHjkeWGGmQSjZTqTB9A1bfutGYGttqCHMPHAgcgeQcsQVxa9V3teCENyMEEfmux35QrUUyP2s",
  "key7": "dvmi9V2neNJk7vHEyZvabiaLwR7QUW7w5mi6XMrYMmBYQR4KxNQr2nnBYcArdDY3DEcKqWyAXYyEhhcGg7tsdpB",
  "key8": "5vY6NmZDVzGRJK2L287uoj1aSx69AsDsdR1YZSekQ9DsnQjegP2DQNN9GFDT1xm7MSwvp5knuSUa4tb6jqsUSjKq",
  "key9": "5Egt1mDPtY5b3iTNM7WhYUggyiEYQFzuHcecNT148X6jUgyquS8EAWudEXraWofDb5XoXw9iWXfJNtTYsNHMdKNx",
  "key10": "4RjbFFtYEQ8sb5mtgpkun4JcjXHZVPX21KVvartJhGRPxMCH7sQA1Las8QrHqN9jNmEHWe3ve6jpCckGfCPj4qx2",
  "key11": "3iugy4xkeRCs4obeLkyUshDQLXuBzvKgMCWYwVz4AEJw2AmxxXw5EWisMvV1GUghg4qQcR7oSQRiv6NBbJDuikyh",
  "key12": "31MFy6SmuMBmPa881DBbekeSK8CKcThDirZ3a5tTshVJeRNKQYuAhqeBUWXjLwMAHhnyEttpVJoboNLh64pmGzsq",
  "key13": "xV5fMRmi1wtoQoWNULyW3uvKgBw8hjohngNsdBWw4wAWF4W2F6c6ciB8ZUZ4w8Lgkt216MAQWaXvo3bv5FRYKYA",
  "key14": "23e8SeoMks3yaGszQUKJqW6RmYkLe3kcphkcLvygMRS3aHn5izNPQ2ko3EB4yd1Vs4VqMX9RsnPCvWuNBbKUdcn3",
  "key15": "5Cw9fgMVhJVRsekZH1sKzKs4YZZyTaNZwAMjzptFgF9Mco6s1XPxwRcqwXxNkJxucsvRERWr4ucoRQiEA14nJqoa",
  "key16": "31LDcS2oj2sLGjB5HzzEcAZ6nDbJkEgb7Uyjog7nWnagqbD9vmkHxsGVWk3Ye6BqqAKyYpHZjQHey4CdHqqQsb78",
  "key17": "k2XDsFscXHv5LG7a4CKPr4XFpKMieXmp3UQLJ8X646koHMhx41CtmD2LzHHniWhGDJfGPnLudE5fKcFBP2JdJZ6",
  "key18": "37yugajx6u9H8d9VdVLrG3d7GAjPYMGtbhYR8ywCkcNJYE9BSVmGYk8y5HZLsdACuVsYKJwMHrCcEgs2TKuP1eP8",
  "key19": "2dA7Mk1CL9PxmtbxkBxswCsfZmctgRXPvnr28Q9EdjLbh2qCniCwUwza8YMBkNtnaMS2bXQBrXqkAnfTNtY6ZtNG",
  "key20": "HN9hzcDC684KYjpGS3QKJdHY2DY72QcmCVCmM3RVk7JYanKVFJsqHZihckMyeWd9d2UULGWG8BsyZtW7vLEJoWy",
  "key21": "2Ak7QqThLgRmtRjjPZoKgiwT1bBVnkBQZouqiEACNBZzzmaPDozeDx4Ze7Xcvi34aF5tUzMcviQRHSGo7hz7AMLf",
  "key22": "4ruBJEpiBogY2GmSaLGn5E3wPPjbdU3CZXtRYHAvwrB2g8jekMvofScAdx4sYYpZkQa2KaC6PxGpvno7EgueLjZe",
  "key23": "2Qtave53yrs9kbxDXhT1i6Dk7ZWvGdx2r8je6jS8Ccr1HDrxhmHwmi958ju3qYvqG6r8DxsPTpLkeo2ApQoZyrMi",
  "key24": "3GJTmmPmT1yiAPJ2p7n1fUfycX9E1Jz9chbQdNawiHhwdDwRsmWt8nKKX2fRDfg3K3vkTGC3zKo5qb79diwbqWKT",
  "key25": "2nwDfDTfY5ziRPQPFqV1S8gnAG2bWeN4n56av7Z2dqzDpuZwh6mP6R8AngwtQWC1GFqtUiTrvyZLzQfuEk79QAfL",
  "key26": "436kUUMW4rKrP5LnsUF8eqBGipg9PYpRGAsZHAo1Wjx2xC2VqioZkQxBBECa8j3MA2J4ZnfZyMw5DZWFY7VAAsTi",
  "key27": "41TciToBqjgXsKXW9k3asmFhDmfLmpiVHZWTZY97sMffa6xohutnREZ5Tn41YkHPme11TfpbzAieLMjJJRn6yhE9",
  "key28": "5xj9yMWY1yde7a1SqdbXUKs1WQ4eDR9i8sxdhNm5Yg1HKJW3FYrfrDZrqAEkkqCabBbyVoc6pwEcPqmJUGzRA8Ee",
  "key29": "5BUDa8qw3iFyRdsQc1nzAVPDqw2q9feZ9zgLRZv4mxjLGHMBcGywo4BNWeevZjKSEJPhUJ8BwqyCYkrrtkpxApmj",
  "key30": "4ySW3GfC8cD7ECe2id7FTYToT3TUFJScvDro9dew6Fzfo3s5NWyEZGbaqgESzJbu6SNL1XfLtXpHEzQAq32EyFo9",
  "key31": "3sgozKZ1aLCDTJEXaxqJ8ZSwxVHVqvxBmtMPPY21hCixnjbRK8VQkvEb8XXEDztqHk2S5GTgSeLzn3BnAdSnvXzm",
  "key32": "2inZ83pnvhfU6PQ9LF51nk7gEaW4iy7ZKa8ojWvnTojBY9UunQvBLfcRaQv2vnYJwJisJr87FXd3sBGAiEvSZAAY",
  "key33": "2zm4Eh3ceWoke1yGkJ1KDU9voh5LHHj194hgAhqwwGR5fWtaMaQgrgM1SkJ3CxL3qYV7SEH6FaMNEqFvp5dezYik",
  "key34": "2sxW6FPqy6rMDdxG5bSgFAyPTsQwoVie25tY6bekkVj4P4CvuZhoMF6uRQ1FSYUErdX3V52qqyEedo7usuWp234Y",
  "key35": "2jToHx9Vz2bQBVmRyhrKuu4cJX4eigdB9zaNTeEwE2UDALDE7RfuTfdomk6QRvLJ6X2kKZ431Ewpe5sKQHrvp24P",
  "key36": "4MNu3WNwydasDbfzpPQ9czKFxkEp26w1wVbsw2JkrLbQszyhux5Rbkp9HbEa7i7QsuP188x4maDcM6hrbJdh5WqM",
  "key37": "5uMJ2LMgvfwU9hJz7gKapSAQMqe99D2rbVnpAc3nFYZbGZ2wA4e3awZxkp8GhbgHri17mKW2VMhDRPkmZaup4vS9",
  "key38": "2S9dHP5WEKaumSTTZxaWWLnt2NCZhJbcppvoaFBnX5nziFsv7rcuvM4K6abbUMgBQVGT24oVsFMpwC6Sqf35Rt4b",
  "key39": "5cdM97ygKqapCUDjW5GiKbU9j9QvQ5rHZoEGktoUiPZyR97VD84DzyDRyriy1ayKTZFLh29mECBieRpygwfvzzEZ",
  "key40": "4iSHzKjzzF2Zts3cssTj6Lfj1hCficJxbGDPdE23Xn9wYDRk2KRU8JBXDTkGmwSDfJC8gDGFM3wcMDwb4Exud3q6",
  "key41": "52PhymwoJeZGP9DAdGyQZRRhqvVM8ZKb4PV2fgEMukC72GCywoaqGozbD6bT4S73QHGJ1UA7XDUrTsbRN3mcZX51",
  "key42": "3UnGDKtMJ4JTYxCNAAtA3e6MeATgnjwuEQ1gBxgi5RJqgWgipNZeeM89Ansz2S3yFF4s2jPyXurKJ6zfGMx2emrM"
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
