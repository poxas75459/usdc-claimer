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
    "55aqzNz4ZCFDXcDLsKW4uRE69ZwePcpHdrx7gq2dGukEenqAcZY4sfPnwJbLmfK65T6kXZHYunFMSzPWi8jbmPjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVPB3qcwnAeFW41xbYYywPESiAKVgDQFadmdQP9JQSyiBHajdxKdiGzeMAG6kuKju7AoQEenL9fPptBrtL3QX8e",
  "key1": "3ViNGqx6FKCi1a4A29yncvPcsEdTGbiR2Yc686CpVcjsQZFJtVXhjwrntATK6tc3jKrvjmH1GAAsZEEGCKteYxt2",
  "key2": "2awhQhTLQYsMeJBvDdAmwzfzqQrJ4Abpacrb8VYQPaDEuMYxk2D42dSphccE6NsBRTzMds5XM75N7GV1BtgcQz3q",
  "key3": "5y6X2fv1vTwX4DA1RkDktmqchvZqGhguiiwnhbPxKBwc4D4GZGNx5aPJdH6vfyrVFwjVXmfSwLrv2gj9UpcUrQUR",
  "key4": "5xSFcix5iBd6D4euikHSefRBuWpovcNe9zSvXmSvPvK9ZKtpfrX4nxGbFtajtkM4pMdvqmMk42tcYmvyXCM79dqn",
  "key5": "2Yf7NYXBsGcaTR9bhwRnBHfqZWZ7DDHQXQhvLYerRbMEKoMFeFApRqehARJRPCR4ae1tvzSvKvLJKX7g2ZyBF6wo",
  "key6": "5c3bNnZfouat5qBCqy8CprsiMeRtG1u8aoFDdN4aoxR2HjfQaG4xdEm3gPKowS8qTSQ2ZDZNtFr4jHCvPr31sCDi",
  "key7": "35MoPSnMghc9UygZGzvY4xFnqTmBtfnnzvDbc2cyEX9bzjbfGfCacqo7PBNTpLefeYAyHMnRrrDZRN46PaXSdkBv",
  "key8": "95kf88ptooV7JFkGZhGAKmkWbmh9ki2RDDFuFFh8UPL1MNyqAQTGV6eEumNhj9JmaShd3uBFFBPXoNYgPVW4Vxv",
  "key9": "5STMmHR4QTKcnvhdUhJHUr2qUjAgSkQLHiQyRxNqCvG8WzEuRPop2zh6JbC73rvbWDFkecb32XnAbe5ATo8ePmJp",
  "key10": "5kZwY3VhaB6e7i8yT9ht7SvZwgffZNBjPyhzf9mMuKnDPrVGbhVZ6kNtZfkkD84Ea5gHSgxCeDYsZzi59jAT2L4Z",
  "key11": "RwJmUDdSGJQu5qTq7gqrn4EtbfE6DqohHbGwVC3iPKimLPnjTpeThcNiqEwrY5XoLVrozEtkiyHGEZRKWoajJbm",
  "key12": "3pFF2eYTwxiNoKbGfeao7sW5JWocGvPP92MwUcKVhc2qwZgDDJMZwbNRC6sqVLUSksbVRzUnBJEb3k2xvX84vpTM",
  "key13": "4i5W9ixbzs1j9xvQ3FrXzZQVwowLdY5ahahcc52ZKGDX5pDCWsFq7M5spzS671b9mGsWuE3i6ZqZwVXuXg7WSpud",
  "key14": "26QaJRbsX2aWkAXPRnZL74vnPA9ftGDeXhyCFYuHN9ZLZdhQo9BzaWc1M8gzTSNym4cuymaKgEWZUAmbxLuvioN9",
  "key15": "55yyq17ppe7LsQga9vqFZAZA8mcjGLijcjZwDSf5NRPCjYDuG64EEnYq4XC1VfvBfTvqWnHvSunWTLjEAJV8bJ3o",
  "key16": "4pHAXNcGTAeU6xaYdCSLrskwD1s4aoqzL8WhooyrY1PEJAkcmwpKSuarWoqLaN8uGfdxfcxKgkWC8Y6WR18c4Yab",
  "key17": "CeqSEVLyBNwmNg7xMF14X6NbBhQUfajtxx6JiWxVfcjg814pyxYsFDpnfXCm5NM9isVNqEZvR1Wf7jdZx7m5CBq",
  "key18": "43agk7oz1Z8vA944RFAvqbCwmWfrxzefVDc9qQ6dtccxrVUD6Bud5wEgjsPYoadP5ueBGcoSznWwzHjx42SmgZn",
  "key19": "5fdqV5ghw2xqDWKyidUfzkCZL4M7xZqN4RwRwyk6pCsXe27xYPkHvRyge2yj73HeXug24QQDUZHYv8xHHVG8Aftg",
  "key20": "2isooWzuJwcdQ2NBa2XQoCTC26kKSCGDCMomVDSytCjTH8g1Vndnxi6oYQsuW8QmB6rAXm8ossKutQb8KnQpn9Zu",
  "key21": "65HMPAnXhuvAYw3JgDHdyUoDRWA2YmoFXVjuGkB6VXFZu9mnKQyN8Pycu9yNSRDADQ1DrBqbuu7hMKaQwiSJNDen",
  "key22": "5YxAojER5FnSEMsD84DTEpgYtUPmncmtSXi3ESJxLypqH4G2bRcu22AWnfsAGXfCf7Na2VvHyuabnooQvh9k8FB9",
  "key23": "3CANVbWAxXPTpg7TodxpSCyXsbxTb4XP72VFq1Vzd6wZgQMzo9Ep5ESd39jXpJSKp8KPkKpCFeDAkemQNeVcXti9",
  "key24": "4XmH7wfBrEvEYs4B73ps1w8T6h9nwWvRrEcHsTkkVL2WhEgA5ved49vrLd5CWVVvRKCKQk7bMzu6peNH6JxGBge4",
  "key25": "VdFcsJKMAqRAR9n5p9eLThESHZKWeiPUtZMGSPMLzqz8rrjwprfagbJZ7gEQMXvuMF5zmPAzsTYP5yqmheBDHKY",
  "key26": "5CM9oomPCYJw6c1WRQoe8CiaadDiQMTb2MeQGNTxx48qrtsf1GQHiEWR7GYWBeTWjj9oYTFUPUsmd1icdFzRb21j",
  "key27": "4cop2RTomnSKafAiUdwtE9LC8BsfyfhaL2N3t4M5wc3nhuouGzDw9J4Fw7nNzHGybfHWVr9txnALmhvfdS6yVUHg",
  "key28": "gcfrvLGzL1kAy8846rBkh9VTCCv1y7kzz6htrn25dysW7rmutWuNqQ3DPfbaGfFfNbvppP3FWqAZQWPV6kdymkU",
  "key29": "4W7XPz5JqCTZYj3DUqhCwYZurr2qGaQo5aquYoBYNJt5iXemx1i2pcEQLnXDstJbFQ3LU1XmXavY9MH7FbJTKa9x",
  "key30": "2rfvLUZs1PXgemFe3yL45quWjPz8XMwqN9vesrBoxeK84pSHfHxGeZci7MtkbBCQ1NR7n9etk3SKmJ6LBqY8et89",
  "key31": "421iQpt1UpXdvCXMsFpDup7dbrj1z9aeHZynsN5JfE7xV53jBF2WWgURtpueCdMTMdQc3ptzsL8GQurG4avc2p96",
  "key32": "21sDUgD1zv8RWJSknpEPnFh3L1d6BSb6wd38nuHNTjpFPbzjjanV6awBxUGYP25pDj5F3vBHe6A93mbQUcWXwGvu",
  "key33": "2sdjniCbK46ft2koCNZ4UGNvvzPWCHdNRW1CVjRwf5adNd7oXrXUKAd8uXjAo7wnWZfhhFozpxkJyPaod7Ge62Sg",
  "key34": "3J24xahT8obdg7g4QnPWq8dBawv3KcZEKHJGQvgxpAKy4iEmz2X8mo2aqcypBhgdNQAjdtfDyXF99bVhr1opo1Xw",
  "key35": "TF3u8orUaD9WXSZA9zWTG4QGzvHhMERa1gKufhyBHUceuVTmk2yom6Hy9xhWgBj4jQe9V3zDG938u8Lt4Gnx9YY",
  "key36": "3xVu2BHDUKjAHhGWC5CXRiJ56mmrGuJwNCiUEUTe7NpArL7exXQ2cEPt8MVgkKiYQcDmhMjyJQ5sYGas9mDtFeiH",
  "key37": "QsQggikxE7oursiBf2UoRC78mHqDGpNVdXWrXJ7mjFNNZ4YjbAvHdTbv5MDDTrwhfBdKHz7zHwFbQ2aiCHA2t4Q",
  "key38": "U88wgZ4Xo5rGRjmxqU8FjMBv4rKLu69ZArpzxxiv54JjAmL5o2m7Cz9AiSESa1NSQb1zg6w4heAw1Sp43h19R1D",
  "key39": "637WVLrzuL69zd9BU3x1jAaaq4XFcMSW9xmKpR97P1re7jxBpFn35wgZXAEfHULiDpHQu13MEEiRQqi6Uf9vtSyP",
  "key40": "4Z6bySCXxV1RbqjWTsEze5DudPPekqriKHXT8m54bCczTiv18mHsTvDJDcRpfxkCGXot2NiCiFbzD8Q4J7DR3f5p",
  "key41": "2Vv222itL2M45UQP9kmVf9mNi789TBTaLqvrF9JjNKyXgHhPXMVYrn3KEjLkzQFfrWgtxKeBzVyK1KfT1bHckbvu",
  "key42": "54YeeRiYzzrxmL3YNcXR1FazjFUmdJesGTW9qR21X5dWBpgFFSDwb6h3gWhmrpuuUfyXEWnXCc8uvXY977wW9mky",
  "key43": "4s5JP54yuatHiLvkz24P7Sy2Y878YNPjqukChLzYV6eePYUAepZ2tgtaSeMbJTUYf32EgfwwjPvaEY7d5N7dk9s1",
  "key44": "2mnwpj1zk2B8tuLxwmjkQ3Bp1Zq7u95L6SL2JeSMwTdSHDJejxmxL2QiK7u9VLbQ4qYVfJSmpULezaJtsWdXfJWm"
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
