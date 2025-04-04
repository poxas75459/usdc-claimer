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
    "5NgoLoZmXrsk9AHeJHNkMT3131kcTB1TELpniV6D4ChMrqv19pXGqiHkyyjczNaxUyxRSRzWMiZ4EZ4C3X9jHmgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mx6Y788boJPFq4LiC664ixkMRR2UeiQKHKi1omqxPbwSJdN9opzXxi5KwyJKcSyZmAfHF9bTRbJhVvS6DpiALD8",
  "key1": "USnXExbrT9NAq9VLr4sH1vW51cHKvg7Szu1wBDwCcDX4HorWCzzHkw8swKxpvKkoN6qqGT8dmR6K7vVsRJiVYSu",
  "key2": "2Lw2h1v2MjJ6HUcYLQuPVKUDEsM6RbuXR7GRASNSJhbxjWqvEhdEzfN1HTnHGxyp65kQVyoKuvAyMLXLgNzHZRwa",
  "key3": "mtZjJFAf6qubNwatFN9pAjmzJrJGoNmiG8FXMcVZwGkd3wcsLqiCpYm116X3UDdhX2hqwJZcoyh2ZNYwRYmYhty",
  "key4": "29JrzzHYunojRvdYSZExbi5UMpHDYryRFr5VJ8mh6DHT9wLhXq181BbHC9XaSxKGERNxa6aBL1DZ3C8QqsvFRSS4",
  "key5": "Y62BTfGe9n8vzj9YgLz5wSjJcYDGMEWWQbwLRBNQtu5cP1FaCJQL6UcEos1ASn9KpWXqz3JqbU15ALhQM738Lxw",
  "key6": "41EFNdMPXETjBXGiFoifzhvXRDtNdwaAYU1p5wVvk3edzMgW8qgDRj8nYYuTE1qaCTMvtFzz9oPQQMJB78B29ez7",
  "key7": "5fsWCzQ927gKwuX8sWhUxSackLEUGyyqqCipSKkj7TY9XACY15emWX5zpFMrWZHvNhUp3q2WqcXShSekeQAKLd6T",
  "key8": "537JkZWR8RtW4BTJct4nU3orQokkE5wKrMddYrYWxeTBwdy4usuqiUZqy8gTM829YeBhLvo2hQbbkz1NVhBwA34K",
  "key9": "m59TB4XnTnH4eWZMVWJiPjyK1AH7cRGdYtyqY9oeCc78qCrzb1nbm4DeV9bpSTfUZ6347digtdD3kPMS1ZVfcWg",
  "key10": "5xRh3bAuZnJpZiHzY3YRnFkQxvLdFEV3y6Ya1hYoQR9RN7k62WKkM7SahLn5uRcNxaeRuFH5nFdvRFqTvvzgTELu",
  "key11": "5BwBUgs1cN5MBr3vJocG1FVdQSYpyWZ91sWh3ukE7jTgpwG1FqJZPWbSW3qqjoKRFzhopnrER1PcxB8v9m7oydJM",
  "key12": "4hiSRYt4AKdUwr7mUuTHn5yR9rKNYcoxDf46khxnva5MiLJG3zUPXNS4iHTGtpNccDimY61KQRGNFem41VomGD6F",
  "key13": "3TFeRCLkMgGJ22WAHxVPSEAo8rSJK1P8qUTEjC1AHTKruuKVaza1CHRagSh9gwkdaxy8v3PpyLuMQLy1Mb6otNpD",
  "key14": "3wJpVWTQtm3kPFD6X713BrrgghSWBDpk2rN7hvXVXhgTxpvHNh8fyUZzdgwcicLmHxr1o7xcTdScNgNkxersJLX",
  "key15": "54cBccD9NiwYFzLLRSdbfitbiHjENU3kj5XsWobVXP9wRCiYag3DQHtTnZe3xXc4AUrFSGY38e7qPqNAkDA26XpA",
  "key16": "2338dwzV2DknTuPKXwDYrQCwXSPczMZd3yRRY3ePidWsg5Q4qCf9Nvny9wL6TZ7og8ZFYAEYch6X1aR3Vz8JJvqJ",
  "key17": "5RGxjtKNhmC7kxfRfUrY5SdRr4rFUy2qNiL2tRagJgbJavmPAmoej4oL9oXrvuWkhBcZgALuoGejjaEveWqfP3AF",
  "key18": "fjebL5FGhZsp56VRnwQ7E8m8yaNkdJ9buekBvUtCRHao7BZDKGgDhMn8XCki3zxDh14vtp3ep5TDuVmb7MrSn5s",
  "key19": "5D2uG9CtLYaHDJDjDgFESXNyK8SoaR44JEuYwnvcGD1nwe7wH2XJkWpAxXdeCvTuupSfS2GotwmpCun9uBEyWtZD",
  "key20": "2X9TtLA4ZUyr7Xutvhr3bKVdVY4rXpNfNgPLeEKWZnCoTtuc49uL82YWVg6AoeiHgffELPAwam7u3LkSGX8v8dBW",
  "key21": "61aAo4iankooieKWkksM1ndGFevRMNRUM5kvsRaKWuvoD12GHhf3BgK4ssyGSQev7TGtRK4ACCzg71pbXHKSJdqc",
  "key22": "pGW11oFyPnPN8ZojhHeCNEcM3qKy58ttQ4k5UJpCjLrVfteEF3upyJXYeoJDA6d5CDzM3ocJWDTE2V63HfByHBo",
  "key23": "2YVNRCrabVZn2RW3ihzuLCtGm1GcvRythSM4egbmyMHbeKNCLvsxbUesNdkMWBPvoT8RT1dh9CJHmf9qtzQxQquz",
  "key24": "5H8aFnuwcLcc1zX5R6z1Lk53JVuCX3wyzLzU7a1yBugivqdKiDhWZ3taqZvPwDDAMTP9vzp6YJ76k2cBoPTXAVv7",
  "key25": "4FXM8PmFiv5xxh7T3EYrt5KRkJ4AEh5KMkydrUqPv5rgpQLPFTEDxNbPpbDJCvkmtExCQpwFDg2xXgqXeRYuDeWD",
  "key26": "5eJSDMxNXg1CdG2vCumrRVnkEXSyyRFdjsEh9ewML4umth3w3P3dFtK4oU5NsiT8Qo8AR5YPrTwMa487iK1SJNBQ",
  "key27": "NM5Pyq1gtxcLHxFFyqFQDynK8qWbWQ6bc4dzuHe8XsHPte1P88kJBH21x7y9S2AxY7SHL6aYVM3nWuKtdj6cg9d",
  "key28": "2vFbdNEWmJ9TeaK7fA24z83V22rm2XChKDf5SGfn9ZUb3KDgvcLSg1AgY6SkhXeFHNxmaJyzCqkpxD93DRfo7Vat",
  "key29": "54J8UMUSVsJr9zVWrzBfJ3WU6nukBZCk6yumftQuQP5b14b6cScXjdh3sWF9iUPYNzw4nmBZhom12rR99HVfSYES",
  "key30": "2jfwLxQM7q8oEPec7txLqdN92ciAYg1c98Z9v9PHZNom27Lh1PGpEiPPwPGTefYNvatZPnEBGYcG3NYhpkdhsWpu",
  "key31": "5yDh1eiV3JNKpxj6xqSdC9417NMxaAqLFG2ZhFhg37Tcej1F2rt6J6tgiqw6jyA7Fs8LKMFcGRELSsCx8rQif81m",
  "key32": "268FqRYmu5zHWT9yZFqLgm418TivNMS2mtfFxcz7Pd4jHKxoCxUaefqub4EAsb2ftUN6GELNe8DuDc6n6jAnobAj",
  "key33": "56XocS2n96Yo92pMbqwPuc225g4p8wdsrKtX5vMqLBhBPy2N77cToz1uubWH1wuLjEzytN7F6eRWW1JzdvmfDGYR",
  "key34": "ZmsMKuWfWY1z2RSfmm5P3D4M6YBZNMHBdKS6zDvPWQMFyVzgnK628AYeSMrtWjV4muZ8pYdEjgHUFLH31gJmJbo",
  "key35": "4fK7yQDaBFVheJ6ePt9UT9bAJrr427SzyNVop59A4UfG93DW4kDzAQT4tAdzUxgxtC8zPQytUuAmGy38gjtBMQGJ",
  "key36": "VRm3TE5S3FbN7EJb7Ma7b23ykNTedsVwuwgiZjF2JpX3TWdxpUCzjay7p6oTJc9fmsiYYQKT2SMwGjNYtH6vGro",
  "key37": "f8XdWFtpCVzD6AR93mnAeYpzHeDXoPGweyzwvSmirpboCTzNUgBgpisSbs4LzkHUEdRNNPK2tfUwDcqp7131wtQ",
  "key38": "4inHh2duuDgJeZ6F629iRvMyZ2qa3SXYyQxaoGDU6y1qco7QGCr6W39fn7Wx3N7CsLbB4C9Euymozt7BJsydwAFC",
  "key39": "2HKEsnJhPx86zkjMpruKeYwPXXgd6w6deV3Fw3rUBn881DbB3jELPNQjbuJHPrhcE9YGtic2LwmaJB8dpfYtJLh2",
  "key40": "3Jxyfe2RQEPn7MtxnxAGq2ToZbS5jaMeKHnKRhtf2cwnTxqGwXUvda74J7F9WYQHmZQkmEPRh2ufhUnWZ2wgSqQa",
  "key41": "k1rusV87Sc7QYov2xRauaJ2MCGitqKwk5AHTuxaisupY74gZpdcR44Do67LHzDthcS8WRN8RVyUjLV6iypyT1tY",
  "key42": "5GTF1oL6Tezafktph8T29KrVFsHJgy4cy9hWY9eYXWAAwAz5UJAmKVqLR2wL2BVMB2dbKVLYpedKY1m3TDP3U5vx",
  "key43": "59sR74wtL72cLo9xZsab7PJ3D4KWzEYs1iuLbncg7hENjgWSynzbET3ZjBgrzHdPtobAbNg8hxCZry1eHKTMeEAq",
  "key44": "5tsovUgf5CFkoAit9FAizrC9b7eqqRM5h8o5j44hgLWQ7CvF3Kg8xMT46Vtiwd9soww52VnTEaZYdBQHri74PC5H",
  "key45": "P4g36zpVpLt8zpoTrKgttxCCJm8DdX3xQ35hQtL8jTY3WLoJzRNbmQM6oNyYuDtNs1gFV4h6VWnxxyi1oH5w444",
  "key46": "4iVESANXVPYL7QRiPT5QKwFPCBEKkgvXUwvco2N8RA79hJSKXMFAKuLcvrdZkrq9dECBXen73NrNjnnyDX14yxM1",
  "key47": "5gZr7izEgDFtb54Z8h7xodVhzVG2YP75nqDPLBKwk622RQjpdvY5Wb8G9H4yyGAHyH86By9gNTVMuzHH9yGu3waf"
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
