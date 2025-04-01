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
    "TVzaQppcNVv7nPZLzwGQL6x5Z1qmu44adVZVvcjRoJfjVkMbuCHRnx4tSwgTR2P2ppN7QXnwGX36JAEvJX8S4Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnG9wP1qo4jmEPfadDV6XAs1AHPHgL4LRM5C2hpC8Gi82oCitf4B1Zs94jNrChi361mUQM3bHmGVeebYtMn4BQW",
  "key1": "4HyYJrv2DK1zVVy9woghMwMKWqKzZmzTu4srQ3Z6PC2HSE86hFRWyJ8isvrCQ3fkpvXzQzeLghGkNzhkjQMfAEJ",
  "key2": "4JRANVs1GWgDKBQUpBMcbtcbDE4MhiG9exPBA1Qiz6WfLaeFZkLaWQREBrsR24cv6UqBpSiwT3tYcn6N2L6ug9ta",
  "key3": "R6TYLnGVdqkL3Ki4CpB9V7979p5HGm26aFAdVBKhAzuAcT8gcSS3rwKX1MqskiTWaHLYK7g3YQ694GUUwpjLHzB",
  "key4": "3N68egvLfayvf6DjitdnVTAjUeBUBzNbJQZuSjZYJ361aLdbcwv2xEfAxBDPGVG6hWbCFY9nWD8QmECbabK6Bj8W",
  "key5": "34TbrCLGUUeAo5ZDM7KbwKxyd7D36xz4UBgg18AU4NSMyNateCTRh79uvehiH5JZazLMN2mWBjw1XVBSkdDBEJYr",
  "key6": "v6SXwAr9cCGkVqbpcfLDjJwK8qy6ggd159QiHN1pa1Xn9QF7Ke2NQXs72SKFSs3bWYvZrGgiRaJjaMhpU3XyHiZ",
  "key7": "5StA4Ggk14vbw8tUyvTnM3iW68KJb9YJVmhhNJCGYe1f7B4t9iXmePeiR6f85VZ2i81gUxHfjUmzFhN5ef27cN8y",
  "key8": "2jKnzWB7wgpPorrCT34yZ2vw6kYMDxmfW2LUdm6BHeqJnVH57sUAmMAMjen5DMNk5bC8be9zoJ39hYTpZAnwB1t1",
  "key9": "4erNKg7JJcVwdxrrmYquUcs8yDvVjaMVjuQByKHhw3XqKr3qu1xoun2aYyeZcByCsYaM4oaDVoHyRMJ8bXjUmkkx",
  "key10": "dE4qrzg1PpZ9gf5jG4VoPcZTAftbQLr3mocaQqeak4DVxHthPQsFfaHSzcuqKpbNQ97WppWgWvFQ9YKLK6TFj7q",
  "key11": "3keVTYfQ66ohYJixukxoKPn4tUUKdEW5hhiRq8bkK42FQ6VrzhKdtDD6X3Z9pMYbeUFxsGXiRT5w1k9ewzmqQNdT",
  "key12": "eCbDivw2J4AKykmAu5CzG147op5y7jGtxZvH3P8AA5J7dHephQGpsJtHTfFiVNTekLJz9WcdLrMTKQnZN7ZZMWw",
  "key13": "26YxEFWShL5uqvAoKsXg6TxzXoi8pbCDvPHStNHLohHrBm98vxrawGveNMxjGnLhWhMoNG8bcTgcEQ12cfLdxBXj",
  "key14": "3ArhwRik64s9G5wpdv8k1TiyTbiGSKZ2FS13rALpZgk9Y3C7eZbtFznx4vqGLQffY5Wtj9TZ9onMvD8aJPK3Kmcn",
  "key15": "3QfEUcdKN6aMaF57nridS3ijQaFPN7qQBo1fnrGJPaqFuBjdBBzMreKrB3sPPFhx3onWYRMKrcPB831SkmaRpGCV",
  "key16": "4zEtxfAcJpwa6oXbRqAuhh4aL4QBavBfMjxESWHYfxkK5JVBmfadZ95crz4MdaVDAFMEPDd5fvTu5dkWEFyDNxiy",
  "key17": "21uLJGx5zM5ere1NXZekgXe6Gp1GDLxSVaShnHiZDrGs9zCQdtonHE8U3LKi8DVQXnQz7KWPAyK2RABJMAZrVYvE",
  "key18": "5hDZL2q299xkMmT8zLGbdVNgERxRtJSm2DBdcEdXQBDwg2AKkSABXuxvhABmQfd6iAgBfNuxByeynoAYoPS377qv",
  "key19": "3DmBmLVKLi81YHNaC1ie9qZefGQFhJZXdBQtdvQLmaQubXDKLTeXVpRs41igzyJNTBxnZStUrFrTGfwnoAqoy8uH",
  "key20": "4ED6mgRnyoaUtSMaUCciQjDpPmV9didb2wMSx3Fe25bJLrDmpdEc2Abrn5EWkS5opv9DCpmw35KT4ZrfXMBTj26X",
  "key21": "596n3AC6WVw6WqpFBXzHQ2aZyV4qD9VkHjS5JoF6nwpHNkFeEDRNUb1zNs6gDPaYdPrp2xZWnbDbUHtpWaX4P3vA",
  "key22": "21n6raDWkGkKpxx23HTzH4xrb5MhCvEa6jHDkthrDT1d3yCzGTPHcEBnbA2Y2K2RRBfBLYhEDZ93APzE7ipJ7DyC",
  "key23": "39Py3YUmVRNRV74RkayTjKDf7snGBLwnkguPxRzNSHtcEcPHHycAHxLCFnbrDZYyvGKhaCKxd7CMViVH64ZPF1Gi",
  "key24": "YTyUjQxjohZKDm7pxn9Tg9WdF7bstz4DYxbB2v1xvhFCWGiU9ViZhSks6LtBQbZnfVsAkdV9BzWWss8tKKeUPV1",
  "key25": "4YDSSNnf1wEYS7yuezQrTrmUAnZKAZFsYCUezsD2ivCQGHPN9ZvBMbBDr2P763AD2nxQx3TycovtdSPgY8bM4Xmg",
  "key26": "4SxrCCWHrMY1AwZHvviTjWhrTQkcFDEZEnMtNwGXCNe2m8x1bR5fQ5WZ9KgXNkaX1Yt5xZnRru7zLSJTjZ93KPPm",
  "key27": "3uuud9wPqb9vtgsLLryHdsw8WHCuVRVweeEMDTE2oGcjgjG92sZDh1kMgkanJazFL3McpceHLEt9SCvjzMwSHcCc",
  "key28": "5dC3oQPQG83GD6asVSYVgXxJT4BSTET41x6zSGNmNf2an2ALgKdv5VF5rGF5rnrdo2hZ38M8fffZ8eBy2T4iykYj",
  "key29": "2B3y2dEhDKHMVyZu1R2vi4bjYboBdW1yExCdQX2AcHML2dKNybSv1LyZof8ihwkVPtCCCsULtBa5MzBaYGbBEQfo",
  "key30": "5zEbqPekUF9sujbdLWqG8RzQZBZsjfC8Kd5gTvmLJgzq2cKMKLhUWcVeVAXFDAitPgiYE6jAiUwXyjUrKLifkiqy",
  "key31": "4R91pHjc2kPq3TPLPCxLPZiErPTx43cutsDtTapdAz6WNdmUmiPhXbWUdpNFLvY8SMq3bMG2VRhBJvccHYWqWe5y",
  "key32": "5ewsSbtPAxiuFnxZ5zCVWVMNN5CpkQWdRj1vevkWqAwgBnoixZZxp7matEmNLhJbdUVzznMMXcsXdzuVFtSYW2b4",
  "key33": "4j2tZixRFp4pXW65CH5RUVP1ARLoVfoYkaJHxnpQjrBM5HuhDcXCJ2MAYaLhvsBpkM3F5wAVjVX1BpfB8BSmDJyh",
  "key34": "4s6maTYGCqu2SN1GyMTrZnURi1tUx9CqHHPByXwvhXnf8uVZYAMbb6MWJuQZeQgACFeQ4VxmQwqmDE5mfSmAGunX",
  "key35": "2XvHEoyqqgK3ZvvgoPV3f7QiqETK9FnZ3SBqq83rCGBh1UYb84VrfTPKQMt4uETDvZpBKY7DCB1eEGXH5oE8gAoL",
  "key36": "3isZPinZHEc42gXHDmm74EvCcG4XTuf5kWbepcqcyNgx4op5brDbFk7NEQ9nmtzYhrTxuMe3vDu1irFk1vYU1tTc",
  "key37": "4qyUmX4Nd5LRBTSPYZtkmuqUP6Le2eEV96oKnXhstwZ2cvTokZGCdHVrmpDk5Az1iNzsmN62hZPMrKNJmNMGqCJX",
  "key38": "4dfHcP3kpH22G6G1cgrSJBHu728Da6GLPRLbta17mr3TMrJrFyW63XRpmndjTb4sUMpnNtkGrK3uAv17wt9eKoFr",
  "key39": "brAzKRs3oNxweJVUmVGEDbaQYjRLgWnVxYDsSiXLUyU42J99Lwmr8VQzfg4UUDc2CpvrYF6Njymvyfajythwhgu",
  "key40": "35yU6Zu8mqdctGiVmRYEvageVYRgdxsGT8mnCU6vBzsYQGJFwudtpNRNm3Zi9FiQrivv5ayAEu6oYxNdQ5DVER2s",
  "key41": "5FyNiQkwArzu3cnwGALJvUZXrhFGoNqbj8Nga6VF8jkeoQqNsPkbnS1M4Lvhu4K3exDfK5vVmTM9dt9u2Ea9wkNc",
  "key42": "53Wyxj35wzB5BzXuXKCdBbZwZHqbdTFfqyBFpbbkULG54e8NSgwRsajseYSvXYDuV7HggW3AY1W1SUmQDB98ycvh",
  "key43": "39hncvrcUcSDtW2WY4JQJZz2Ndj8gWHpUQGvSM1mPvnGP45rXGYu4X2vdUZ7jmeZ3UN3CoYHAvTB2tVXUYZ6n7Hd",
  "key44": "4m5bA8JnRJRJSUpDs3hq8C1P3ARf9LbAE24MZjKqUo3BoMk3N1sseARHZ6NyXYG3QGphn7FQVYxnUurJfQ7MXqiE",
  "key45": "2d1dwaV5sLsiuNUaFSDaNQcryBHqEjmqvHSUKx2uRCsiHjbSDFFeLEy7pfCGvJ2aH9SzxmddvnAn3DP3Dmxgt1aV",
  "key46": "66ccHV1N1pPWLVmd6ZPUaXtkjQZwBNc3A4p2mmwGLMriRuwno4CBphH8zK6p8BDvFkgsJU5Vb6K6UaVSBPZ6ct92",
  "key47": "4foc1jmp2Xmf6fuv1aXzd4Dv52o2DTN4HnnRhfkaNEa4P4ZqCHe2SxbQ2RNADkBHEYJxi353LxXp8ACNJav8jD5e",
  "key48": "5kJ1JzwsUrykVA4EFYHexba9PmHdVmnzoGtDWjTaiUsa79hQsGPj3MTDYPxqXCXgfjVFSQ16CrkpUcNrYB4hbkfM"
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
