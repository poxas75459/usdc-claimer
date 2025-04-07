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
    "3XRrdoKSoMWQ8pradbXRaf22bQi7As1xhFc4CkMGntpUM9A7pNymoNUbp1iVpzujy1ec4fz8agjYLBCS6ioi4wFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LpEzyQMc1PG15RPrPoqRsBihQK8VjqvE7B9JGGE4SVdayg5pKtJ5GUtMExdWv1TJv82YP7CJJrnE34oNeVWX85",
  "key1": "3G4RtuANn4bu6H3b63KopzupqDR4Pmgopz4kHkWbhbNX9qDRtuUDKctK7SZdDMeHMki4rAgRgptjuQe5W6W3fGD9",
  "key2": "3HKfZz5D8VnDahR4NZyBMU55Edn7EHWmSKE9sZRZRAPbZM66FCks9a18YK6D38UkgnXBReFWFh7Jw7eRv7PnhCGy",
  "key3": "3FoiwzucjNCo17WnRKVQUNqpoGspEEe21nZQkm2jzENLR1NG7WhvxsfYaNAJDqUk74N5uH76HeSRKyYGoZqFffsM",
  "key4": "4CYHfjNGpxzFe64KHZHhoTN4M88w8bPsR3ehUN3VocEwDi8wpryk2vNb8HDYFeu5dnfrJjaFRfVFK29gCWZ6jvrD",
  "key5": "5SzPqaZTqxEHUXWn2F49C5jfXoBPVSagq3UR2p5byUjwRDtgJxm4KJU9Hyr3eryTGnb3KUAERwS9E1pSjqF9aS4z",
  "key6": "4CDXNXLBMV4vZahYUne6YABrcyYjDXU4e21aVvdziJjc9Qp5PRncRA1SA6LedMX6rnPaWcexpf5xdZ2S3iMNVf61",
  "key7": "22LxUWxmu5aVrUXGZLt4Bupo3rQV3CPpYP4ZC1ymmtVxgvaFGS6ht3EN1V3UTS1UaboYtmarFijJq7KhjxHH7qg1",
  "key8": "5SCTLdJ2gRmaPSh6jyGRv5DxAb3Qp67wX8Azt1SjEWwJudNghDYkVNhx7KKSod3AqqbqQuVDYPmchEpD227a9NtX",
  "key9": "4Hnfsai5L7Kq1RXzkGSXzgEUW8ysbypj5VFw2EiZ9vhLaP4dJ5aXj9dyRFn5B5N2L34ApN5SWbuCBAHAzCaVUt73",
  "key10": "56pJLzqaUdUwFzVPpt4cXb1unuEEU3is74koViPXKGJShAZAeizBRzQurjPbQcZSFTm5wk1ZrYgRtFBxdNr5y9kS",
  "key11": "2wJFNmQWxWGEtNYjgLCXTfFX4Z2MyEKGq38tR5sHqxAPGJqYK2XdMcVEkMPYGEW9Vi2Sz9vXyDRX8LKV1eBPjY66",
  "key12": "5Eso5SdsqGkRbqiLjaN4797kiTBvqGS4dZDPfFYfF5QobAP64KYk3h31fZc3oTjwxtd7HtkBvoSY2pb3i2E8X38s",
  "key13": "4wGxhbR7VaU7cagXqTQ5cHg6JgEKWT4ZKUsoQ8jRNd8jyuZz7gap8g3SVEtr6f7oyBmxsG5AWggCVqKgyEcEj6dv",
  "key14": "4hPL2wP411G8eH57k8jb3hKwb38dzgFAvkCYTJhitnw7N7tyyYfF99MfxgN1NpRmi5Mjy94k9Wm8oR7nB9To7o7R",
  "key15": "2HxwaUKoFZaxU2vzamWwxfQJtKBfpoL95QVnMnyRwGo6fBbHW7Sqghw9CDKs3RtuLrmc6T9zN8NMiWZXVp2N4AeG",
  "key16": "32pkA5dNHFuq4XUqAC75cnZYhmceAfxEycPadLagXmHVcWavEUb187RqqbHp2v2duWCfEjXEEEoYg2esnmiz2ytR",
  "key17": "3DxU7zLyrbqwzwdznTK3JdN6fjobMdLAoYnLH2Za4qpEtpPGLQtmQwRTMCkcUV5Bw16F1cbtjVz9ui9wS3ThGSUA",
  "key18": "2Ba3vgCNWMqd3HjEb4ujJ8q3QTiNE1YveiD4QtuJxWaqr1BDPT1dKfji7ubVwuomBzsaDixSRqepBSpeukSoGdPE",
  "key19": "2ykg3gaYmTWXtsdxpJdA5kkQota9vgeyoirw3uk2md4w5gmCeCCXRkLdQRwKoSF5qLufs4SU4A3ShewAZTMGH95q",
  "key20": "hETJvYNcvF4CChLPf1Fdx2VRGnvzaMXD7hHCbViUprM2uJYw4KSvTuW1j8eHj9e2yhT8c5CJFMHZEUdHira745c",
  "key21": "4DzLoJ83iqV6SDDzXnkL6tBhmrH66hQrvZV8pZFPYH6HdqhTQDZq8wY5zy7utiiKSNdFAbwoNG7SMi2Pfnp7akHR",
  "key22": "2Qe8RUha9Gg5EjcBoGE9XVWY3pUsKZtTof2CNF11h1NK6MhPrdZgf5WA2G9GumrAH9Y8vF9JQkatw7gn6tGS2U7x",
  "key23": "XyLFuRvAAXGSMKi8tFuXNg1UZC2xMAETo9zyGgtTuKhW2wYZK9yGuiYY3cWYzo1Q5nEznA7uDaXkS8FKYWnbS5R",
  "key24": "3yTE7F7BuH59dndvr5c1yW8XDEcbTnh9C75dCdBepUfusJyZhKPatiwh9nMsypdJEFzH4XAaLiD1U5nR9WnqJyGb",
  "key25": "4KMx7vxntkNNEYUWeZhE4v37EvENw6xJjwQXqtzAARYCeb6wznZjTBnF7V2ZP2LAGbQzSMX6ScpXfPe2WKEunFCp",
  "key26": "48L39WTQVKyoPkMsyARqsNmTnMNknET7DBgDSn44rqbtu7Z6BJMXrCQHzdWvCpSzD55FTEL69G9qHcDBsJFroji1",
  "key27": "6BXMyDJHJxBZ2kcRNd6ms41Zzf6VegnBgLPeH18ca7bVqoAvzWxcxXTTZcvJZsV5Qrfwn1L1KXaQiETneoKaCSC",
  "key28": "3ae4L48Apd6C8PDVGffPCLyh9FT7GAvuU7qoW1a2ns9fa2WKbueX1F1tzBoyML3uwqgyAKH9aZScMiYoNSCCehnw",
  "key29": "45SydfBRgppj5rUKsC7MpG7THqhKLrcfTUuBvoixZXYPXEqnD6oc4NU7V6quwFSBDfemHNqf7JDk7G99xwbPtHip",
  "key30": "4WXsKUemENcB5yYGYTR2grS9DDcwL1UgXptnq2ScNSDAgCrV21RJNXLdPu2qVUdgZfYXwar3hqzmbxiV8svv2s7X",
  "key31": "3sykG4bnRw5qGF1WyEMcCCZfwHxEn6cgrW5sA9pvDnW4u6vQDpmD8YfPSFHHZLSgEci9xprHBVWrg5n2bUMjsNFm",
  "key32": "52X7hdPFCdRUJWEM7uREv6osHsURVsGAvZsuX1a3vp4teRmww4HdtXapBTqQcHQYvtJg22rXHKC95XXZGvKuF1gt",
  "key33": "2uG1G9kh4cusVhoyHoXWV3T6JYd8cnXD9JYDo1hH6pwPWdShVwdMWXJjtqt5yPVMWKF2FjMnUebk9ahp1W4BRvWW",
  "key34": "3GuFVZyKX9oWA2imkg5HsyRHFwhNTyiD88s7YPV1Q5uKZcTxGrQP8miLKwQFCPdWADfByfwSRLkcT1AXfgokR8XW",
  "key35": "CbsGztPAa9zpsH25CZVtX63gVPhsLozzL3wApMKRARsfN3LjCrJjTGJDmjbtjaN7GtZb6PKXcTfY65pSkaKhUdh",
  "key36": "2Z3LWgxmN3YV76msCvVeZVDSAnz5VXQryesLLiV821mtE86DgPaaV6EKZiDxBukBJTt6gChFL4deuAiNm15Yj6Mn",
  "key37": "47pobZ1ko19cRjn8fNV5f37Ls73iZByvXSqbfK9hKwM1eeT5mP3cWXYVxonz1T94QjDbxpZtq8HA3UbqwjpFJ32u",
  "key38": "3N6wmuPMeFwsgSPdnQm7dPyPgUwunq1ddppcY3UVyAhnMa3QuZnbRr8myGUcfC1XTce3WH1WyffjvHNS69HWtbvs",
  "key39": "5own78PavgPohfjQPWbJLzrNh43inQqAzkDnx8GiXNacFK8TyKQaPWAycQeuBQjF3LudoBW9axzQ54imVi9V3ZyZ",
  "key40": "2chB6DThCG2FY4YUp5qHAK5vMcZD72P1b33gKrALjodipLaCEDhb9o1xFwxqtTwfwBLdHdeYZxGBTfeQHCMoygCX",
  "key41": "2d9KTL44ijyCUVzcBAJYMT8zfwdswLBcB7rG7syLaJk2JCX1R6WFCJz6RQYEC7Hx8sStydP1C6NuhzV8y8sBj1hG",
  "key42": "vnf1pnTVHD65Mr2UwqmRnPFKZ5fP3rygajN4hdnEDBRD53UUc1mDsdiGkLKxZANdenXTvBtm1PgRG5YJvhiZwHr",
  "key43": "Vt61SXiB6uLJYoDcL8wTjusJnTXsDSM158K9fohxWWteHaG9zJugqh2tZ94PLL5AX5GvY3sybGYHHQfYcc3zdvG",
  "key44": "S64v6HUt5rRYhhmDkqYYy1p54d7aXq8bh6yBAp7KeFZKQPgh4fnCQTujLSesEZGeWkMiYfQHCvFyYbamNhZ7mfK",
  "key45": "3ij7RHa6buhtXoaQq7DhLAiVSAfNjBxjzHMp9R2XTzXuEg8y6XrvCGzJ1ii8kv2XcojGLWRpHYT2CR3VRDLCU1iX",
  "key46": "z1nYEnBdzxjqfAVGxJpQrVbqhJkC2yPetyKQ9k45JRBaSDB6uLgHpRSQL8NeVWVwug5S5n5YfMZ5r44ND85AHuY",
  "key47": "5twSaTL5ByJSGLDpoB3EERpHAxbSJCoeGtb3t97XdWYz4fK6TXrbKyk7LCtNztmhALAjWgaYvnS8QeaGEf8fUsgM",
  "key48": "37H9ELrqzc6DCEADdYrYGeNuKJ6qB41YqesvridZRkHT56UzJdKGmnPeezbokNaWRH7pyukGMLLzZBPyX7PmSDBw"
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
