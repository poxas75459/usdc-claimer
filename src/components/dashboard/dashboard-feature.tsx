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
    "4spgX53ERHgKm86h8rnFC96ASM8a8t7ee57kneu2V3D2Ey5YTUueWLnSANNL8TWi4kSqre5wsxbEuURxq3FRLTe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5du5yJNa8veF6woCgswdzMtuJA993q66TVT8XoPwPFGnzdDH1S66EDxtbtLrfdVKNXaqGFVH1QFA6mzqfihrKitq",
  "key1": "zKU54enpWCGHkwzQtDhtEv5am32xSGYwxezRcRkKFamW5ZxHv6kkwqLXtNahbtbXV8KtVYUTiJz7hWVAFpzRs1W",
  "key2": "2Mr3mSDdCLb28MzZ6NHff8Fkb5hR82SzmuMTEuR6KbTGDRigLZ6reVhhoNxFyvwPL8zJ7KixHvx7BG3XUpAfpVqa",
  "key3": "5G2tT9oTsqMbFKVqvV9e9L7ErJuKrWHxzpN9KeC8YpaQXP29URpgXv4juY8bXizyDCZr2nqji13PVrC4vfvWYcLA",
  "key4": "5waqrmk6xR7ti39aQLveVLPVmN6Q4WzTCn1WWMED7QGxsY3S1eGPFpD3wmtY3LFWv5AmCnNXmyxqX9CdaB32mNde",
  "key5": "3cjL124ZMhcvgGWj9MNBpoMQMtmDYHwEo83QvZyMXrsScqcmj1e8HXc6gyLjs5qx8BWcK85VxFrHwEnFkXfVSJUp",
  "key6": "4s1WjfrzSZndmHZFvx5zdcgM4RPPS9PsmNP68a4ZayBuaXHgocGRrSsKn4NLZm8aseWxmYFEWkZ6F2iNDuBxvRdT",
  "key7": "2sLtqZqDi5wvJLVXY99W3GVT24cnu3wXLhU2ybZsHWSaPYUNSgCf66z5fhp1NrnLREW4zyYQtUzFBNdRWN1zDbHd",
  "key8": "28Qz5nRpWRLp7M5hPfZDu1YmviY59CqYspCiB77oovhwPxsJqKndiZpk1uG7FT83ytfNfDnUqiHeFhfCkTcPiTKS",
  "key9": "588i73pzZ4m1gB1CpGjnpqrxJo58UBQv8qTykchgBZZdsBob8mws1HBFRF2sQsQ9wzu879jRqdHQ97WTo9vZZH9L",
  "key10": "4NvnRNYoPaPtePTPG1q6saawZEMeH2Sj4nbaEfrCFVPjwNE91qM7nD5arihJWERGaQfjMUg3yaVVu8rkYjdTTizP",
  "key11": "u2ReCeAZ1nouhAAFjPQhHKi6N4VibaMzzfdekspKJsrHhb6TELjf4fwvdqYWEb7tcd6CJETQs64X928iZxdTjUU",
  "key12": "2RxL4pEv1zKRdrUPBgzwKgBQ1ukNmNicY8GUU8FTYXLtdPLrzcR5xZCr1iuZENN93jKjG7EcXgV7B4h3EjwTV5U9",
  "key13": "33PoznNBJ8xGGirCyixXr9iLdC4pM5cEWozzgMsbyPKH8kEguWVDJ6F543qaM5csbxTNJSMjdgQkDk7SaYXPo86",
  "key14": "44p8vBSZGnMPbKSpGNGXqpqSQNLkK3Ei8wRC7HTD6ZQmnY1ZawTWhogE2JAACPecb6SAhNKBZYGnofBvBic6dRJy",
  "key15": "5yfbfQhCMxcPfMqj9KFp6HLyxByuSGS6PCBM6BNZFQGP4vc4Fn8vCmZdakpCk6sPAzrQYms1Cto2Lati5d4yqna1",
  "key16": "5Ybwkj3PAFEdyBZ2q6UBFW9dWq4RHaT8pQuLcoMRisujaSLNkAKR9S6ke5X2sZ9JC2DzXKV9aMgPSfxVWKA4teHH",
  "key17": "R6gt5uksaVeJPsmntweqAzH3TvS5WZsYsH1cT1hLVKMx6uM6HvYrrN216TwM8Rz7ASsMzNonTW84PPy8hF3nDgy",
  "key18": "cNGFS6uxiiYJz3miLnTLDcSBaGbhPNzGsYsGH5eiB1W6AkMtci7NuKVPhwkEYoP2dpcg1BKfUTo8ogqVtVEFhcL",
  "key19": "2f85tjoxGaFnNuK371tuf8bmVFyiWeyFJdf95bWmfhUP7AfpKf6USpzLjwEdNr9KPBRBoGoPAkHGbsBcbdPf7YjE",
  "key20": "4DxoS7RGwHYR6Cuuc6V1yvgLBkaesqZofE4XXLjYWe4e1ieEvTJohdxEGhuE44cfMwr5NTUHkR5u5JWRtjn8Qdoe",
  "key21": "5xiqCmWUEHRHfnWEhCRUTHTgaxUyvhXYwrb7eiJREbAyh8FRULc3CQCMAbQHvG6RsEsKGBSMq7nNX7YJjw5oUMfV",
  "key22": "4dCRSWJYwGhbF85389P785EXjG11qPBgDJ4HzAGHNncSJ8UVqVVCZ9ZTrnaczcwSpFb6MMFcv5LSsXk59BPwE74g",
  "key23": "ZW24FSj4dcUhGS7f1HHabNUucuhqGTVMrXojmjJsQKmiqQqyJaUegN1NBv9XJhfopk1vR8wbVEJkEmpQzBpiKsV",
  "key24": "3PntAUeWYMCJaTAPMwJ2wuzzHzgrtj6V87JSZQ4k19QaDPAjGAprWWoy4cdAxSNCxTGpMeqhBgdaG9Kb95c1gSWc",
  "key25": "4Nay6hSy21mWqhJxCvt6xEaeiBEWMgyEut6xjY7LWfry921Y6NYNeSatLgZJUxb3TEXtppfWkqw59ZLk3AcwfASX",
  "key26": "5iBV7yBBFZKssvHiRgsSr6vkPQHy17dQn42tw6HqnvTNC42BNDNR4M7ED8KZiRz9ipmZ8Rmv3GALjytrLuGbuJ7X",
  "key27": "kzfsfJGbQti81E15oS1DU8PEAqS5JwHaCAJVzW5gvffyQBWb9eoh66EJDxRQXDZkQxfN6rhuBycYV6GcWQkmRYz",
  "key28": "4inc2HgPd8xcKUqAcKuzoJb6Y6Cw35KfTRN5uaR7Di55mSb86xbhGiEkAxxK9VBKs2DMpTVBiAsRhwEL69KjnB2U",
  "key29": "FcXGo27WzdStjCSJ1TgxBfM8jzGeemKNzg4jwFnr7qmt6CsK9BnK3tDBZLQQtZKGFcNqa4h9wP6Z2jp7Q4AUQhX",
  "key30": "3KQ5us8Gtsh3rzjbZi7okZY2PUvrE4rkfyXEpEz3CLUis1xqxcUoo8U1xk63gPreEUBm3hEww1anvDob1pm8G5st",
  "key31": "4NnKvkYpGNTrwpnBD3XFguDQNpBsE9FV9ACrRWb3jHZLvoVrbsYxx1X2b1YqmZckF1WNHRst1cd9ZFvkjxySS43g",
  "key32": "3nArV7xNhrcLdkjM3q6SrKGjQgN27qhzqcjdqZhhCYCJtHqzxgDGwU4DkMr7QXDXsCpHdfggM5XXPBU5vFSV4jgU",
  "key33": "3rs9zt2DCjfTU9meR64Jz4LjVUBkPRNCMhb816FoWEA7qBhjiBEvSYv8vqonJFo1GexmgWxEyRncb4QgqPP26hbW",
  "key34": "3WNwnV1UB2C8YaVgfKkruf3KEThmRzMSfZb7TayoiWWfoyTRVvcoTaD1UU1UsZPbgUQzh13qU68RCGbgHp4EXiHe",
  "key35": "2LUGNqGew7W1TV8VRt57jdgVvCPp3Y54Y9jQhQurUQ43xasJkA5MDUYxLcDEbyGRBVdEFJ4RPJq77dRQ59MQHR1G",
  "key36": "22TrANh5TPbf2fSGPruqLdaenbgWdgGQSNK78QCepirwsZmVKWwtCADNfXbXw9gY3aQc4rFt9MqZrmVa8zvqeRBD",
  "key37": "4LteqzLdhyFQjUMCktd9mYojGwpotQf3c3nni9sNAUd33uHTHpCzsb9mi61ESTu88s78TXKuhxgq35LLBwWiFMwj",
  "key38": "Ge2Yuu8pTCkJZe7wpa1CWuRV6Z2Uyr8wGypCqH98GMxt9eUzBVjCfB93nsqQhvo8cwyEvTM7XwTkwKXfmzAEwSo",
  "key39": "3uSnT8ePnLAia3b59kAZLxppAjpttpyiaBHcfPhR93QjWeQ3tpNhXuJTyfokwV8JpEYh9d9N5ePHRoEFSX25GL8u",
  "key40": "3goWtteb4TfH6Z8ycxtNTYi5Mw86rtTFcCkxS8ZpTXXcbYgGfPqYDpsBX11JzUkciERWCouajSUy4T1zhWwKGrgf",
  "key41": "27AXwftK4togn4g1cRmRmmjzm3RY7SRPW9NVCmEbYzHpdaM2HLhKwi8EhkZgPxoc2Nx7PCo4AxGQ8zpBJNgUZUUR",
  "key42": "yzip4ohAL5xirjcZfnorYevwLmmtzawDa4JG1t1BVSE8FgG11QpYRDrgS4absZAiFNHDceQsMmyGa42x7Y7qynW",
  "key43": "4pA3eG9uhgPaGwsqpQnZ6LP8X3cuooxqj33MRWac6F6nXotvq4xS8sw7PYdAWtG6yfi9VpHcDticd1A4rn6avfP9",
  "key44": "652vMXoJeZuPrA3m7p14HZs5RMchVRBTrLxAMPC6FEqNsst6Q82kKpg2xuRRRkHMGJn1KJEdhS7y7Ja6WN7ZvGHR",
  "key45": "41sHXZ8zXAmqSuh1s3rKrVpo9b2Wvvp4ji6pbEDq9yPcAHxuUSZgKUYZFKFZ4Xs9VBfad62KiHmCsYK6W1GGaMvq",
  "key46": "tTcxdZk1ACWvb2Pb7AfmGvFch2Qqh8QRYoHZYzXU1FQ4nNCfDPEiuLbenzxmPM4jrBxGSGSuRTBNb1AshVBUHS4",
  "key47": "sQT2W4BU8Lcmp5PmRpm2Jku5dtekLRwg54tTcPEy3rCrXhZmyB2nofg2UADwkUEwderKnZAVmQ1irjPX4wVzqik",
  "key48": "3X8uG2o9gND6oRL7P1A87g6TGhcpk3HN3yHb9VcRnCWT7NNSpPi7ZyJnGcsU3T4PsgAPd91bLBEtjQDa5Y8eGvaZ"
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
