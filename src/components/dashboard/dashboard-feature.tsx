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
    "2Cuhb1pmbV9SyY5f61QZuBELiNdd9gNRtUKjV4378Y297T9vEPWo9LExeomjFEVrMEPV3mKX63wPc4iayySbrxq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jRJ99dfRtnSSWkBsvGfZx6y5ECj3aoJCn9n8QgG9P1GRCBfQ6urTJ5ubTEdTdPBYwPL7JndzLwLo3Kvc8yMjyn",
  "key1": "3ETVU7G2LVwj8BeKTvwCFYZFjQfbpKReHTJnMD4uwvHQxCa74EzSPpF2gawa7RQh1r3rvBci2J3spbXELunbBBnu",
  "key2": "WrrZGDtdHwVw9KG7MbzZii1PNCmTQVPr7EYe5F4oiaS5eWJAAeCwBha1jwywuZpfHxq3x28mzAb16NqeaVqJpmE",
  "key3": "4jzaFaKZ9UerF1p2gCwzrtZ3zJSEQgbZouWtutEqqgmF4CDHq2afzym4XwzqjKm84krdbQMiiEt1TK73MSoA1oqq",
  "key4": "4xZQCSMSkmi9pNoLcAx2MboQ1NL95kL1P8mnfHgdFspYjGgRxz2BjSDq1CBtMaa2u1ejFV2AGofrPV4U3gnqV4ev",
  "key5": "izvS3xd66gEar7ZYXCzBdoELWKvLSykXU7GLsEXRB8C7ecgDKBcCAq6viSyYsb2tUZNXUKFExAgA4fHZWjFFNk4",
  "key6": "2giFNER3gtcqTxGra2pTJfPMM67kBoxjSqKUQ4NQtTwntFDNNKF1zSPeT9cnDC9Btq7yB84zK5sYXxYXSeC14Ayr",
  "key7": "4uuhtBtZYb5Ppxv6Xc1MwWv1pF8bALjMCormJ2SMsYxbF2D2wGMZMjSPXPUKYpt1k6osS3vtPzWegviYs1QRefpu",
  "key8": "VGLDfjR8wYtqdczBHvhk6KDETho8LnHXp9rEcxgick1bhRzUTPFdDxMLac2DeXb7sHCR1Ugyxcs2mrBKR6QPSxr",
  "key9": "PUf5V5KsKuVgL9KmBafLau96PRX5qFafcvLag69TR4wKRBPUGh2mK9iAFLvzmsryzTBp1RKgQKNAZ29MmMkwpzi",
  "key10": "29ykuxhsw6NtY8NpDWrKrWAZaGkxrABfTiAMi3QMWwXJy2GtA6HdFDyJ45btTxtcNNWEB6S3JLTkqpzqZFWe1nHa",
  "key11": "49EaF4fgtCxYBoCvyzDZd4MciSKW6DySR8wXY8gyNyrGSGg2Z3t6DeseByRQshtFEzrcRRu5L2QaeEVHEPjgDSNA",
  "key12": "61vTJWcB4Vx27P9c4c2kEuzAk9BpQZW7LhiHkn1p3NLADdcJoCNj5t1pT23UQtGg1XAyXiRGrasPDUQZBQiJWdnH",
  "key13": "4H1JHvXaehLQ83SstAphprkakJWmnbr5aVB9KQBe6FGa8GjhyMGSzUXQfJksogxWXz8Ycg1xqzypszbYwchMNZKP",
  "key14": "4th8PhBCP3ntY4SiXTZvTGbsvsevVWRgKG9hc3TNfEixxpkB8gZ6Qn4n9QcHBRmPBAv7iumuWr1ofZEJ4tY19yfw",
  "key15": "2P9m29U4Rio3pbVdqaXTS6mUp3Ny3EZNRMPTW7G4R84sbKzxPxzpHKFTjjfVYjQthGgCwbvTD6Qx9VU1T5VmZAM8",
  "key16": "WbvDuVdyJEYMS9kMvMRg6h5EB9p15qYsnpwr1G3mGBLWwz716nuoVshXhNEx4AJKjdfV635eBsJR87KwFvtxq6b",
  "key17": "2fEJijUs3Bx3tB2aLXbJDbmvjzwYdRgbUxbeV4JPwAFnk97YixTiniXjJHG6LfcXqYaw9FrsPTpairAZdDwrCgX8",
  "key18": "VrxyY5wjSVKXESzgvGwxctCU5PsxxqR9TCiTAsvxzkHBD27pAA9ggMctmfkGGy2Qm1ANtomE2q9EMFrmNNfkz4Q",
  "key19": "4BwKRhAC6Gp45ydh7uwZwzcQctYLzmhrk8E5wHRdBwePxRuF7Huf5NhA4vDiQNMrj1ibd8PeCjxMz5e25trYiScv",
  "key20": "5N8JGyQW4pQ3NHrkc5sM2efqJg77UkQVvrRZS9Gu1aXSj6q3PkSmDrTCKYj12ReBoKAyL4qzVLQCqefmaYykhdz9",
  "key21": "4bsnFhEqEJUp9cynaNY4waqzhBcHsTSp8YWzrgzN7GaAttSgBuewXSYCVhwQtQMy7cCYJYz7TGT99bWypa4v2svr",
  "key22": "437VvKHhC57RmX4UHbbHpJQedJN5tf2Rc4f74QZfAQGxkS9L3f1ZwkDmmPaKRCkQnUDLjrgYuAZL2zGXBeQJkSkR",
  "key23": "54UsxdnCUbn5MRnnZqeHF59Zd43WsM3eHjZAy9NDjS5ih49u7LsBey3DQvTZ8VuRtg5Bui4Aoed3KWnUfp9RSNpu",
  "key24": "5JmEcwdzc69Nh2qCw7bX2Ed4EMXCrir7RSgiPgQGAUcwVZ1DFZyyB6En59FRUwQ172T1uD4iq6uRUAWftW7ukcqw",
  "key25": "5yAiwRp4t7jveujVPRJCzKj8UdnYSMetSZCwfqdY8JjAcJ9zHbDqpYH2byr1KGKq8axAeoGHgGTbbYMjCu5Jmts6",
  "key26": "3pTupniiksAkCe9jDHCGU1HqVhNzxnTsxWfqtFYG7HMDt3AbBF3XcdxPUgDMtVgoCuCj1vEtWJbrp1vuwE9P1n1J",
  "key27": "3C9nKGUywQuqd3NbzoWQe4AZb88McPpugKAmw8TibdeXKfq7pycNkG4GUT7wW4Z9kT7sJzHEbc1AeHc8Aeo9WErS",
  "key28": "29hcNdGyBiN4vVMiJG6u3ypBkjXB83yjvXKKATVEYkV5aF6sXHQ6QyzfFZ14TmpxckmddKDGmxnjiwV7DufmZuJx",
  "key29": "126kM1UXfcfEZKczwtH1aq5eoc8eMrS184XgpVGtpEdycqg6YyVRPMf2ANPhzJA6hyekNAGamYFEpW2tWkz8oJrt",
  "key30": "5FABDjaujqduFM2X77H8AzR3LCLurprJht3X4HYNGYqPWcWYA6jA3daUWvsbX38LgMCFgsQGBLBUBr4WYY77MKbY",
  "key31": "25kbutw87pbYEdGywCyhDheaJdHDEXcYsnVSvY7nRDkANfSkSrXAjxqPvnooEpoKumvn2aUDepYoQHBC67GZ6YJ6",
  "key32": "4JybQDucVDpZ4snoWP2wDjNkzTeK8REKUjhjoLaygznwUN77xPD4NUUbwNHdiBUAx9chNBwiCYvvuRdsJq9aJfSj",
  "key33": "2iuKqRdNLk93wcJsFbef9PtipwqEipqaK184EeQVQXsHtGo6SAg3FMWKKDLZRJtm3BXeA7qo4huZDDfgrkm1nonn",
  "key34": "5vHod9Rru9mjY7nXhrwcq3ks4WwGmVHJ4gSCu1DMAiPJTQZWmo1ReE9dB1AcPQZvyCU4rHeTiX4oXqJg4PhTB5ML",
  "key35": "FfVfq3mbZMMkAGFYrGGzS8YmkToRFm2SwCXgnf8RNjPDcVdDUG72YvvSARtCAKJcV2RNUbJuRc7dT7PM3ytUPF2",
  "key36": "53EH33EicBdrFRbHkQ4LxfNiECSE272Rtkv9LGxTU5aUfGhcucxti9sFU4ESfL3TbTcoJq4kdsErsMGoFjqsbNzn",
  "key37": "5jWvh7qZkVpWtZvUkVEKCrABStDwPSyuP4xuCJgxiCmEzGNYG8uuJQWg8cURWyxL5L7GpqmVGbF2GLGzUoyoGzEQ",
  "key38": "5SJ4d9KD6odTYGsS23iN5WG9yRabmxnsDLtZeoBvY3S366Ts1UbaBKjFVE483WCfjNCF1tv8hYWmAncCqnqRJyKj",
  "key39": "PYZQky2t9bfMourPmNeg12hkppTg72BJtJC7HetbRa9xoFCdp1NFhc6MkWm9qF8LGkj1ykqsp8jnRDTVk2LtCaR",
  "key40": "36MQaf1dzWhE6i97ZDonhN6jQsCMRgB5pAgbA7Wg1NziHZXDsZr9dmtU4RTPrwLvzFngv84W2UCFu8xkhZoVLj3g",
  "key41": "5aUoQdUes2RX99nLd29XurQqrSu9FEjoUTpPnps536MTXAdVpH9kY1nG6KdVdqFCnuv1knGLJUmjxAGkyAqtyJnm",
  "key42": "4vJPhXj7FKKCZosrtSRuxNDRkqgGgBPwY333sgpcmY7BbyL4yLTqezcBuFz25bnxEVLo9EUNfs58NyBoqtpE9K5g",
  "key43": "5ReUNDpPkmbBsycR3tu4hSdMbyVr53geV4rMyTuhSWGQLU43QcEJyAAMAhMtuKanquwsPLcXmQvX3nfooxxG9oTe",
  "key44": "3DHq5zmHpcAzcdV5mH9PLtxuYbzVK8jXQSzpWTq3WT3ZojMJqLqAy9VKHeWfvzQnKhHgc6bRR84GspFKQuV9QXhH",
  "key45": "5y3bqZsvYvcvkbUmKdKjY9Vge21WQvuqTSfRENhSFGHukcDvNVF1CTKg74yVHhivFX2je6bBjwxpcgvJcQCsAKxE",
  "key46": "KuKzeKztQR3TbRSywc4WSR9gjRb3Srgp5Pscb98PrG9krN3XiqrdsfF3C9c6wGvL8me1NQE1CUtBfMUtQi2i1od"
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
