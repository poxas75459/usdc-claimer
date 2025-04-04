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
    "4kBhQPSwB8vAmFxYXPaXuF68pts64L6hrgjzYTd7eNrpriErvce7axy8zZGriT8KTYxT8MrnC3ym596Q5JFNrFo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TpYVepyuqRMCE2pQkyevTERXiXb7pmMxMquNv7Ydrrx57itYvEZqzdEQpWQdnf8MqqiJUcrRCpBkmVwCgvPJL83",
  "key1": "mxwekb8QMuM4UAYHiUNvuFXiWVUvpeEzHgNCxULxp85oitwqYwGz23K6VQXo7gzs6B6ZFK3GNLHyFr837aYfc8e",
  "key2": "LRSrwzMzSyMJzMjy5EFcRqDeda63gnHQEc2wXjnanBRd4xWjVgRBjG8Vx3jM81S8c2gLQgBK1vHPa7Fs3hp6s3N",
  "key3": "5To8d8qdGApxCsDWgurn2AaQg1t74h1wKkW3yAdMrwKTBsWBQgVpirY2ypWZTC4BUMNRyF2Rfz3ZPV5zCDQMrjgq",
  "key4": "awMThuWsUShF96urJ6zARULFCCYZCjkD7QHRcqi5DiVqmsi95iXDzGMAexXJJxF3wJdcXR1bgZzcBWUgsrcpoXk",
  "key5": "5myN8ySqEx3UWaHBBe1VZ1hjvWavvsN5tp9JuvHgDb5FFdvcHPhFsmKXDV1E9y4gBKEScTFRFui2ZdTHHesz4uX3",
  "key6": "eiSNuiWbiMV1P31dabeRa69Tq9jza6MjTXbFJwdZZWHDicFH7fTwc2pQha2zLJgHye4PriLe2cQRcfSKS7TCpvh",
  "key7": "5FCUmnDJc4zX7fR2SpuQQ7161xrD9ce2uWmXfduX5MmLoVcFxc6S6cBYfEewZbv9tou8P2bVRYDLsmZ4ByUzSd4R",
  "key8": "7P1Egf6j5YzZAeH6qh1NQCsn4t82rehFsZ1RqLN8LjrRYv5TMk6zYPDkiguib3d2onnAd5s4QgfLqVxwYfiRNKq",
  "key9": "3LBuej3zd3hgxgo1NTCrX1tRCtXf7wNMMQE8Xn9Ya66JaygH6ZYtda85WEL9R9thz3s1BCGRrutj63R8mK1iifVC",
  "key10": "4JRS6YhEhTEbHCMwBGLDEqS8x25MYnYRYAmBJ6r8DUKDBvgT1Q4YVeNgVaP5T8K2MCEXkjpSXTVBEuDAdoXW2siA",
  "key11": "5zLTVxV5WyaP3pzDALKShe52GUVcHNRkR4zfh1RkusgAxx6DSovJamX9FLsHkHcZbA7d92uVaR9oiFyMsSLJRgjj",
  "key12": "24Vd7GTTcK166gPtMQPe4qDSk3SZWojvZdyt9WT8zBXXECHM3HddnJfnvr3rLS7Rg6N4ojQ1Te94vSth8UEC3z9n",
  "key13": "3d2rVoJLrSPY88xRyTFT7RgPag733ouEbZmar8AbNDVXamHfXVp6Jez12XGJWe51VSe3p7ohQprb6PiFwwbHoypc",
  "key14": "ueBRTB7aqu5StsMB6G3dHuedY9N2gTZ1YR35qVcryjMnDtmr3VdZBw3fqQhfWPaCv2W3vgmtWkVuCr77aRP1eSa",
  "key15": "4kqNmG846b54vMnS2n1UV1XVTwvfPWckXgbg1ATR5yPW7or79LsMXxovzs1jFeisKRei3YBh6AVT3NGAkJSAGQ5B",
  "key16": "3o3EYUZEnqnGtefDorWfXnZymRWUUzC9Ps6QCRTJMxWwcjvfqpdEmkvbZMoZUsg5C4CiGxJdyE7pJPSu9cm5EkrM",
  "key17": "8m4aJ4GmgALZYevfBJ65aojrZfRdADHDM9LTKejWkaoKNVqRdCtkXPLTFLygabZP3jbEd61kW7pWMwMX1dYKCiz",
  "key18": "31UPpQY4gRXitetWAiTmXw89punKWCNnnHUnzaXNFd6Fy9vTHJEtpHDBjCSnT6wdbe2kz7qLnxw5tb3CSjyMtyLB",
  "key19": "3rfFTeTD3hu1SFCV5EQXXGPkFbsBPqWTAyt8DiJ7pDwXknb3yLRDnDxUxbEybyF7j5V2Y7qhygWjkXUoFSnJNGxB",
  "key20": "3CJiyXxpQmJVPCXWeYen3nb6XuG4GcGELvjh1XWjK7ME7GkKguVzeBWrUnDZxW9U6msTVqWoY4MGCEVqtevjTWxs",
  "key21": "2s2QRHHsZKbJmyBArCEUMUTPKxEzL8HdPZpKyYVGBkDjVc6NBFA5wVNmH8YA7f8StvRZf5d5SHhaTBn2HW7w1e8T",
  "key22": "56BdN8fHAeqPq2dtztLXcQEU55LGG3xJJrqAkBzthqQoaFGyR1Lhp9HtosbMsA5QNAa65FqBkkeFRp7AGQZGhW1N",
  "key23": "34wnErz6RXyyXDDfPesxtzjBLxqNLjimcL9cHQRjJEuwtohVkDdd2G8sb9GPonsRGEpLTMkRis7ooPfeVhR6rNHV",
  "key24": "3gN2TPHdVYPhJWAP3TUjms3b4VsbsQaFME73XnxNfA2aQTCUVv48T54BHh4qKi1wa2tC5ehsJDWq6xqRPDuMZyg3",
  "key25": "23yn9eoVcEBAKxmmesvkyfUeZepVWeAvEnmGSmE1AoBVv8VzWMSrxCrYn45gk1peYvgMu5PycoF4yj3dzipMb4gV",
  "key26": "573iezHdoovDQj62Uohs8BgNURRaKNNXV9S8gkts6RnwkQYV5skzVHJcPscP5JUXpjRjTwrcokpUtAZ8vFC1oi38",
  "key27": "2QQgerzzbrp4kCbxp7nw9rbUn3SnkUeNe4eHUvJxYiNsTqh5nCXaExPWwMpL9A4LDvAiPjx8X1wjSh3q14kLzNzi",
  "key28": "44V89HC2gZ1E4y3masMJUzeBZijzSifPgkhecYN9pvWk1dEw14uVVX9kbuzFssLu5cHL6LC2oiE2PwTuyTVeMb7k",
  "key29": "2Fda1RTacvZ3YJZSqZJwJ6sfEwHcE3TEYRe93vE5pB73p3UCi4cy2M2ufL25tFqZitJn7dHLuv8U3VKnfSgEZYik",
  "key30": "5QsAhsGbBvj9HY3YnwHLsMR7EmiMYFM4thp2zbo2U3qygLUsLY3ti6VUxMbZ2R2bL1Xbb5SXtHC7DorLNhxNagTs",
  "key31": "KJqYYCgYQQ9Q7Yp8PCxNNryohwhpDvaEojkvNnDPvV4F2ahSRWFPn57mjfg825sCpz9SkXHQg9A8oN8bEgyVU5i"
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
