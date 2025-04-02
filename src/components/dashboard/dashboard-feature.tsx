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
    "4y6qP62XKPhG8qLhUXS3zNMRrx7GsiQnbwRCSQJTGuDjcNNHFshJ2vJmbq3Wu5jS6qdUBdNaqYDfQnEtPmNf67qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDVFnvpeghjhJgMNLKFKWBT6thCbcG7KdWW2dvh6zqJuZUDzeWYQxRpqJzQMrz7Zs2Xg5Q9Kdri5Ebi58SmQY1v",
  "key1": "3BQjv9ps1byhUxCz7Db3ocBrPtUBG5hDW4uoJmBJcYNiDKWF2Kd3XjjPRMDfvUPXmXhWY33jCcp5EkKhh3xGuwws",
  "key2": "2UV3JbEhzRnnNJZHydfaMwrB1YtkycRMsbCMeFVdo7Zu1eyGZ3PfmGMqVhYPCyDAQDxLVdrSLVAk5Tz3Ddt59TXs",
  "key3": "i2KMTpooTt5rh1aCTJSGo8rZ4SmXDwv21FUPGK55E4ourhMLCu2ngQJVwSC5T9bh7m9kHUjxQT277cfhnEssmgV",
  "key4": "TbNVK9jTxYg43X74U7Dy2hRNoinZhJ1JJbH8wXYbwozaCwjrAK9Z3yj2hk33dkE2FwtQbQEfJ6WDoPVgHhanqXV",
  "key5": "3Z5zKQRP9kMSTZJfgcUHbb4KQfYqCW3FmjhfJ8rn1vfQvvp4SsXeWHTGduDmAFQqFaHS3n8fTmNErFKS3CCwvrbB",
  "key6": "3bWQM9AiiaKqCeUWZoeTQLENzKrVLfVQ7SMp1TMK8AkumUToERhNFKqv8xG1fyvY6A3dZoRr8SKohG3EUgb3EtmP",
  "key7": "4U6LMtGoRn4CX8TyMCVYY9jjM2YW5rbb3gUPVH5iSL6Kb2VjCyXvWYTfzqt1BaqrsUPcB9f59qa8QLoMmRp3T133",
  "key8": "UawXjZmZYsn9FHuqn79mDppEQa7ZqMGfyMPFTi1LCyao4ez4XhE1ZahqsEzFuUJreQbBsb6SSdWtrk736d3qABB",
  "key9": "4SzDafK5XhmBghKf5MwZXd9jf99tVLKsiRA1py2gv7LLpRK5q1w7pGdpYmGBM7uzx7ZiKMRfbQhRD5JGxU4qYQ4n",
  "key10": "4bxzY24QMw6boCtdaHEUmsmuujgAmY2E7DHDTtqCNRExxZFtPSNrR33Nd8L1hGLifTp1mtRK2NQ6n732f9T3TG9M",
  "key11": "5QrV8s2UFxWfYPN7Kp12UeSTAXEveBMghZS8BtNHRsxe7Ue6aufMMUZznHXUx6jGFvqd7NKNsNL7RncpwK38EpEv",
  "key12": "2q9hn3E13Y74KjK8eqBFWjLaPtgmQZS2qNeNMgr2Lo2wm27nKqsLWFqwFVWMGTHWc5qMnMjXkPbELnBdX3SGs5og",
  "key13": "4QRYrE8yLfywLwuQySgvBC5T4MywqFRgjperQuer4ZzGiwyfSX9Exm2eC5b7z4WaBgTGxvnJEwhLFq48aw99RoWy",
  "key14": "3w4vzwiC5J4eAzuvqUrzb1S4m55vFgQb6QGxeQLwQprWzjwQ7eQRLz27MQzsoYKGtdKDJTWsyK8FvBkFBsfSYmuS",
  "key15": "3KA9Xrw1wbhfPPhxbuJYVBwSiJ9BsnsUGm8BkZcEMWW1W2UqdDShodJGxWkayEiPiJEMg84HosWdbzfLZCdnBVTH",
  "key16": "38dahqKLqV9Wk2dXLQWXq2CS9ZeUNH7dCTyUL4MwxEhb2zvXXZukjDKG2kGoXFPmUzieVi1s31EurdeCcJTo4UJP",
  "key17": "4isEry1csKcgLWhhWZAsHUpT1rvgejACcoEUtiKTz5SGXcXihNrzJguFTtvuDfuYHovXzb3LvkuWN4Excc66LgLU",
  "key18": "3sTHbXpuZ1wAVMThUSjWpQX8cMZp5XJBYQwTaAeXifNEcsA1vBTaWU9XjPDbf6dpbXXyH5xEr9SV97sTEVfooXX7",
  "key19": "4cF5S8u9sAnxkMC64YG7ucvnvPSQpcWwg8mKRjrsobXwra3Q7Y9scvGqHt1mwbrk5aQqavva6bzDALVE7dGk5Tzo",
  "key20": "3ohqFkSZwaBrveZjqWn1exMaxTdeugmRyA5RuphxdMPW5EUqy8wyCCCrfYt5vjwTLaiySmokXyai43jDDxDgU1Pq",
  "key21": "47U1fFrUsF1XPFsLHXupypZuzzSdCknMk9mrAP1q4kLvJGGVERu9KLxGjCTqSbLgdWjRMtBumyJXAiVMwyCsD2Wt",
  "key22": "4ERg8XP1i4ZSvTuoNWZN9mxa6sSk9B83juSXgrCbsaSdp2UjtWmfvq85QxdjPcvYPZ6FT8aM6AZzcTBNXxANnTG2",
  "key23": "2bmZYRKbUMQmCHrLxEHbhYcv96yRpUZf4ea2gfkfYcnrLMMekA7QAx3XmXxbhFUg3Nt5HMfhm1qdy4ejNo7rKf19",
  "key24": "2R8eL8Y7Vv9jPMoXDkFoyiNikRymWCdogPYELw9FCWR2B6rht32QBLakioUWEmxzHQjc11wMp57WMiuTwFK6LiWu",
  "key25": "4dpdWvUq9DJJeHiq62sNp5PTX7ZNyXKNneyNuLP1bhkpAQiW56TQwFgRXZN7gpbyAYR6NeWmYQSf5tshjstULYBW",
  "key26": "4hXefVV3ZqkAKzi6Mmc42ZUTVD8NMHDH7KWaqMBsoAAJ5LEcGQqYyMdB7ZCbxyhoi9ER3zdqAVAr6f8EQLzQvjmB",
  "key27": "29Lka5SmnpgcZmA7vptP7uDWRa1ghQKvKF8Ufz5dJYkFrdz2hC23Yb48hV3P2TpapYtfQaKhsU7oukjSwHn9fvXw",
  "key28": "5dmirTzx48xsG1gBo5DKBs4d3bxWyS1UqYu8ZDHeTnCiDfw9C3AyzM8rUgwM7NzWE1eNohrN7dLzJMqN6RKwD5MW",
  "key29": "8bH2J824sV9SGcDgE22iW7Nm72HxtxDATH3Cs5AGFxMh5XuwmNP6QnAJXHt14NPr2pEna5ePF9cTyjQ4Jp9nEmh",
  "key30": "2ZMZbAWwBV4aJBGosYdBZYjYTku3stW6vXyNUeN1Nqv54mUPPknBLy978a9QDq6bZ22Ko4BdZkwN9o7R8AYcb8ot",
  "key31": "3pii63eyi59ajmvcFXqycccdw9rzD89kopW4YWeCg6MyCG1ZeCuRnXLyKLEb8Cu7q5Abj94WDx8bqTiqprhpwKr",
  "key32": "5aGsUzJ6RtxT6PWuPU25tHXSRiH6EqApZCgUN8pcgLKUWdzHSQMu1jmYmRgPBNtFFWkyEJgcG1XkTvY5vNcm1TTr",
  "key33": "cpodGZVfHxmQpzfeBkZttCbc7VjajEo3Y3kRaWfy6ed6pbUNoz3p9HBQ6Dzo5Y34W4uetPJsuE43yqdJB7kv3mS",
  "key34": "3Pd7A4CmGyzCG5Z4dDRo1YZeBCb6XvD6vH6uc983Y7ea8xYt9ny4sBPPW6qz9j4vnXoNBwfkRiLmDebiJ63pFu9b",
  "key35": "Ss7DXp1aGTLADdN8UG6HaRao96Yid9aoscVYB3HVAzRb8baV7XmgDyd6caCvXeZ9HoGk4zayfjt7vCe8PY3Kr7F",
  "key36": "4eDCHoFoS5knjCq3XFJkfVtgddSu3T2uUaBTiagvf7kQur8NhdCE7cqyTpy9BPYt8euWq6NEve2QnpEgbW9WLAHF",
  "key37": "5Gy3G9Xi9HV3jf185EuD6M2zzVVKyb4mtJE2t8CBPWwFqFtCmtNaqmCHBjKGa9K8kypKLzgQDSz88KEeT6VuYsiJ",
  "key38": "63PTJhoWPmH8TN28PKUAp8Uub3ta1GecrrYa4M5e25HptdnUX7HaPaketutSHhVi93G33m6LR3TkecY2QwBKyonn",
  "key39": "3mARbQbrqobq3jboiv6Frj3ECuMcJRH5zKe6P345MkgY5K94V6VVGMQQmPzq4N4ghndFiyvQABxCGrQD9BLDAXEL",
  "key40": "5oWvNT88cdj9XQZ5xDPWig1FsV652u9iKMYNw94SyX1VDbDfzC5e82968xQ5UyGaJtC37tPpHMz35E77EAjXcqUR",
  "key41": "2tTuYBTo37wArCDqKWQGfJCNPm3xn25gpo2UNZ2KCNgHBjHPC7JCfE7zFTPo19uDQjHyAhaP4Xixf4XoiZT3Ck53"
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
