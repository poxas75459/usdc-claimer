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
    "4XkZfk21G9tnnQ2jWwBo8SkfEn5cnL4CxZ7nRoAptWvszU4FJcVzAo9QrGDrYAiQtXcY7dFZNi3v9XrTyYwzdUz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwTfmtdSmGv5kFKZ8NyMYSLw5VHBPRsR5NPP97zU6bPYgVq1hT8ggDW48vdWgKdaLDE7ZMcriAjKDgbACyKiugp",
  "key1": "533RM3Wq51b6tePbBNbu7kfYqmW7VUzie3oynkV7yPhodm9ZE3ZaZQmfXAygqLK1WNACYWKWjCJamtm2yEoi4V1p",
  "key2": "4TDUDXAFHnRx2GjDXfDtgAkMcU4LAeAHYc2Wm5mdNXuAyGyftWPv3S2yywtD7YnhaDs49GEWgkBFCP5vo3HQPjsH",
  "key3": "3TWHSt62r184jyP22A2LBuuZt73zEnGdE2o2uDKSZcRwkwzKFDQ3vmm9cAV4d3eyDLcpbeqZkGaMavRa4XvjomMB",
  "key4": "4FMSrXxvx4f3upAW552UiAxGyW41XSYpmz4wWGhWDrv9WnBeWHBKx5ki71mfDytTzWmtHuWeqSpRoqsJL1kXiEuk",
  "key5": "5BXmAFZpJNbKcptGg5oYg1HDKEJxE5CLcgdm6Jr28rExFsZ3fcCerC4LQqZ8JZAh22hZ4Qp3RuaF74BeY9vha7PF",
  "key6": "mFxDQKA2XzW7kDJNsUBG1sv8rVd4vkRoGFWzBJP8aR1qcXaKpxH7VRem53Z4fvCdVMp3rZSS5chhaSfS3SDjKRs",
  "key7": "4kdjGyqEpcuYFq5jKqroB2HwfWjZSFsJKcenXHP7SAvntreYkog41VnDEoqEDSB1DGfzRR88rAty1dNELMP9Xc68",
  "key8": "5dG9MVDs2an1qyRkai3JX9gn1yDDQVGywZBfbZfobCEirNjXVUayLC1AguurmKkmcQv6UiT9noASUvip2o5Emkjr",
  "key9": "5wfyncG5E3Dw14TyauxzgmiGKZhr2oFMWxr1ueUvcsYZNVmFb6xZ2BkgydEbazazzHmBDucM7hc5jRiWwHGd78HB",
  "key10": "4q8avSuYtqsFsdUgYhKLmsjxqDWaFjD4VfDhPUux9s1x9rKPzCemx8cLftohi4JN6fj85EWN5gCKfGKMCnAJKX8a",
  "key11": "233NLimYLornjrVEwCeCiavo2FAPGpULtHDniCbc5FeRcsimcu3CKDpsha9aiZJzLLSJxUzUeMRUBvCxWWDCau5M",
  "key12": "5f34x6J7X337hLY1WWiSxJRfk4jxQ6zxmDKFnAvKAWPKLmYz4cUnf1LuPpPZzWtKraXBGmeHvfgowRJCcYwMDwJN",
  "key13": "3ttN2WPkrQJXHj7bypxKke7WdkztGUJuTq1pFHpD15guSQeiGPrtdCi3Dac1d5nVBUGoQFJTGZ5BdUQRPHEw8Eyo",
  "key14": "2YeZjZxkLdUd2T7iX1oovESBuAFkSWBGz5exggwCSPJf8JaAa1QtwEZYKUwmfTrc6yWYJ6dbaJP5XtJhxATrycFp",
  "key15": "5B694QJZrmhWSio9K3MHJ2nogYydLezGBXEPLXWLxGaHn3Ff1RZX1sXpMaH7n7NXasDvoS6VUyJSBU7gheY4a1BU",
  "key16": "5s8oUJFfH21aZWh47DX9AZJx2DB2Cw4tiGYdgwWSasoMRntGV7rR8uAfzpAkBAsbaq6mvV6SStYi1NvFmzrzXVTv",
  "key17": "57KFPEJFiF1KRivAHmxypnqLZdfGnGeVq1xm6e36h2A37QYinT9Gubrhr7PDhv2n78oxGhH3bWi4puLvF3mtZ6vn",
  "key18": "3K1WvMDTD2iKr5u5fw1TTW3WgjBCXTtxNpFU4EFhK7WuYeAANba5aUWtoHdjzQdjVbiWj8xf5DDyMRUCAmaNmTtD",
  "key19": "31dchairJHeXowHNKrrEcg2PxnKHBu6u5Gm7voziz7CmTLc8LJHYz77ixvcZ67wvEKpWLrGqNijup43XnPLFcgzw",
  "key20": "3pPcNBGyBEKLXjDnCVpXvZQeTNujGyHQc3cVjYbRzyFTaMhnAoWRbTxZvfnyssBkBUxRoVrTGKucNyuBnGzCkNKM",
  "key21": "66GX7wkHXPcQYh7WV9ZbS5BuhNbz3r7FXLBWmGsLgPtaUySGZXWBiuj6H7YfhqTmE55HNe45YeXbwe1KfcQanqKa",
  "key22": "4d5CFRW7n52eEHg6pbnfN7u7zxv33CGRT8Hq4AWcmXDpuwi7bRb4RRsAkSccfjF31iBv8gKawt2Fo2usHfmMMwuh",
  "key23": "48nZCX4PhZdiqhNcTJ6ES2ZNhDvu9mgUn2tX9oGtzFYjyUH1h8fuzD4gA3DSGFEtChVeRWW6dhWnt1enYVyYdNYD",
  "key24": "CAm8Ff5m4hK9mSsLJaDD9S8aCgHRbwFNtBZL6qT3dkgTw6xRQiABK1d43eYVtS2NCfyp9ihmQmJsyZr8uRWZ3UM",
  "key25": "3AjtxMR93yENjqmFstwm2v5cmP6KnBCwcSBXbdBhyzFoHW8UtLZGkCE7ZqmpmtQ4NodGZHUzgv6pxioQaVEsMnj2",
  "key26": "5JCJ83bcGNRtbBJxV3WScKduHgaVB5kJuwpeoWjLUCP48T2G7gofzdCKCZui3QvSGD58AJDVv3DaXpWWmodnXMdS",
  "key27": "5rL7qGsYFJf798EHHKryDutWgEqWbYyXUa3EwgHnNa89dUs7SPrzUkxwUAXoBuUUZFgYhK8mjjTCdL2C5bV5tpNv",
  "key28": "2nA69Q9xZLNWVUHCsAUy9rTMLedoFmHqgUNwDZqS6bN1JkuA5crcqkQBZQAKsQWyEfmBEhbKux8ENuPjWmygqVjH",
  "key29": "4wid5aMzdjSknwkaw6k5RHGEhbsv4ngfXPYXQFdwrEXh3JseSwYYbRwvTsWSeg9JkjHJSVA7mNGDKhyKapmL8A81",
  "key30": "4Pib1pxYaumnaZYVCGWqBzMCSb2vxNiKuiQFXWFFVuZZxxWdYjWb6bTRmUaF79ZRxzFGL5wJ3ivd8beHMfzY3MAN",
  "key31": "2Dh4C4pYfZ9UyEvhjWZGXotVZLaxZSeeenTXTsfSdKmozxqVpBG6Fj7zuRN3qhfEgCsrf25G5zJsdNkYcT12eUBH",
  "key32": "5kaEiv61sJJyxyic2LqiEfxe8WsUcmWmRSJ4c77y6JKopkHTeHbkXmzxnMRP5V7wNf2K9EkZdTU8EJNU7pDdm7av",
  "key33": "5zohaUkKNhNNdqdNNzYtCkPvnh6GDRUt3jgoqroAUr3uePWjAy2Wwr4VeL1HvkLxYhGWuVyqeUcLHMEyqaUGQTw2",
  "key34": "34RTMDeG59QxKSyrWLPUQAtcLJwqYUCiiwT3r8JhVbGCJZi9tdrd77ZGekQ5eKnup76wtcxunv1c8NUTvkC4Soxe",
  "key35": "46BQfTXUzDBDU8m7RhruTULmkB2sNsQvmDPJbGogwe1q684RZq64b9qodyrxFMeXmcUj6D8s1gHctC65SpNJhRvy",
  "key36": "3DNNTp6sXWqUQawM4ZdKxXDvnsArdMUwK9BsoPCHQSLrjixP44Dk4JZKkTZZ4x1XEnTCpTgQzLPwYFeRSqWt36ty",
  "key37": "2tpB4TY8rZqzSkGtEYw4TygMNWLuB27bF8zAfBhHxT2vk31NVgya2pWJpC5mEwvtS33ZZQEJuE3Z8cykwyfvgra",
  "key38": "2WvreJZ1W2La1dkFELQKkZ4pRtiaBdPAFVkmjT1MsVBzyuWvdRKRJqvZC2UqVHr1m9nB2EatpgtrohJ2hLikvTNv",
  "key39": "4b5L5X24Fqxb9ecLx5s9FwBzerQMjRCLiHVne9qCnDBzxznJxeaAhJTP76maebySL751pdZ6aqhUSwbhzssy3BUp",
  "key40": "55j4b8cgejoKpssJBDRLEb7JGv1f2wp249LzUg9aq45Ps5X48VYyzagWCGGkwqFzZt1LySfeyUxMV4zxPvgKnNKP"
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
