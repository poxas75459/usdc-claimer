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
    "4V7o8sqLp32ouAkvpGLsisc6XC5a2hBWGTuwLUuj3a3ffVtsk7iEL6coNDXP6yEPLdYGhd76ancRpWsdYyyfBiZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvG1ePAjPXJCKb5xZvi5zhTWEijacj6tiaWTynkU2Sq1HLdMRiKXdSfWnd6zKnRgYvL822BWLePDDH56AfH8n3F",
  "key1": "7aBJoAYAnbQEsyoeLwVDUAJW1XqzBVMq6rsoZQENVBiHNEs2ahx4ACLtrgopbeW6SjJDEJgjp9Ey45QvMpCUde6",
  "key2": "5C4ESs3CvMiG2qL4D15cmMYjgikvBiDqVRtKWUjMxvnd95vHfjje2tPYW8xPFEzcGt875Mv5NTEzoBZZ8pDAbY6",
  "key3": "bvLmr4TXg5vrUT43V9hxcnffx4VcjXtzHeWxYQSqrHG88EH85oXVRts9nTyYsDDscoPQYGvUdhTF8X8EhZ2JG5h",
  "key4": "2tFatzhBYQZSQVk5ZqSjZXYkcQKB1vnkxmx4jBYAeuTMA7eeF5BXQE6Db3ZYBwkVDGyscRsxy9SftWN6wEhefN27",
  "key5": "2sJvC8fKsHeAwebSmZzsna6LE4isFgC5HxJJvXYguYTMisAAiEQfWu8Qzm1V88tBkknAcj1PNna7TV3mz7aUKbiy",
  "key6": "WidUbAZ5UdE5LAr3apiTFr8VAa6mkFMD8NyY3JD3uvtkD8tpPRgCpQVHAyLGb2QPuptGqS917PFxtTbeED8R6Fn",
  "key7": "5bgrqnLfGAcQDgwxtrVAGnu7Ywd1x65ytoePJM86E7MPvgpzTkfNj7Z9YRQoMqaEgdDP9cTXvwQZrWmvf9mjMcJk",
  "key8": "5tqErhzQPEd3gH2Cu6BTndQsd2ykhBN9oiH2BiFmYs6XyxtERsSPFoUSDN2Q5nAX7bnXpKLgrVMBNfdBX2YWc1i7",
  "key9": "4C4bJUQDYnoyPQ1mgVc2TL2Dni2fbSTBue7bfLg8tfJ4XcKEQAtrNWJxYittZHjAfgXUnEZ9vExkyWcQ5vGJv9pN",
  "key10": "2UZ8EcycHWnWwkkqi2rkcb3uWVi4HzwRPMZtdqoQffSjcenESbEapJrdTAAU3EuLMA7jE2vMxiRAYR1Rmv8Xdbjo",
  "key11": "3k3VBUSb53mmsmipJXFKZnbHBEqx3gPkaWjBEiC9Aqd3ySjjaLVTPvz8AEBc5CRvNN2cyCPEFQqY48UGNT4jR3Yr",
  "key12": "5L15FCbbwuCVXrbekWxRnbNWGV5VmRpgiyQTuqVMyGoFwmS3KCUGsDmUH2WWUUi2JJe5qoDTmd7zpkLS61MjBFBw",
  "key13": "2Ni1Z5pNaFALn92wyZhHgf4UJvdZRvxyTcd8vRmfqrQhR4qU25mt8vCmu4Giwyoh6zJKbp5ThnVBLWq8tusZdbUL",
  "key14": "45hP3h3xxJzUeCnHkWAiTZ7pVDmzN4zE7uXPMrSMgez9eQsYjYWeL9UwRRdmZVzTb5zqi1FKZo2T4hiDviQorm1g",
  "key15": "2QnT4BB1cyZe3EHQxaaTNUF1cFFfY8xiszxN3QQCTZJkrNgXqWQCWPGpWyrMkNecyh4QthYdLJcK2Z3nWKwMwVS1",
  "key16": "5XQLyhUVttCoHbiHnPaDkatThLSjnV8mHHoKqZKZeyzVUgftoq4zayyGS1uYWmNR21ACNs9FPQZ8epECFrukyKwW",
  "key17": "4eaEXcETE8H4TrfEgYVZ376jnb2Mt1tfqMowRBnfKGgYGELGUzyks6C75h3PuKViVLekxh45Kbukr9YU1wvR25m5",
  "key18": "9pxCSNxeBvV9XTh6GFMT1Au7wVqodKqz6pbKstSLd2wZKmFhUvYRHxiCRR8EtLXjeNMFaLCbAwYRWkYcSmthyDW",
  "key19": "53Ys4NYjTKPxW6PMDGNadmZjpZtFWHaA4yGHsMoT8XyGEkL64KoonYoTStJG3gjT4wQuyG4tSaVJGmEyPKsZyGcm",
  "key20": "3ipgdVTWDHKZpjWJuQxvye1CdyTHx1JErq9vqjwbM3Qei9h7SF1m6Ddh32ybPWATuNQhKePEg9pDxAAdCxdywUTV",
  "key21": "3ivYhY4LiM3RigPrMfXSXa7g6YMkypt3HavqrnVy7LcYdaZTRxumyc4PQ84rFQKwdetDKmLvK5EUjfhdFYWTZHjy",
  "key22": "2dM9LaKbm1oj6b9ByZHU87B8HPkM6HCkthqRsMeoxED9HxDdfkJTsG6etbZUifpLEaLg3Y3gYkPqZGYACWpfCC7w",
  "key23": "2SjHdUBFHUPrXwWVFrZt7SchSnwQssNSJHzWcwhm8TWjKW2qGbwP9oJhpc8kBHQy8BXqMV8XABRzGmTBcqjHxeM7",
  "key24": "2ypxwB8TCcZzzJinAtqd4zgbx15hPv8yYu6sX6me28ZAYXB8WAt3fkrVPPYuKQbQ9Nusb6SD6iTLC8EQRZFcaFQt",
  "key25": "4CHsFKYWuUDho9diY8mUFG4q5R5rfjwMsdtRq1CvbTW4tZCqPXJZjNHf2bsagVZVuRdasKGvinDVFHhmPMteHA1L",
  "key26": "3gisehygHjFdhztnTHUYmKEFnQrsKBGbCijjpH1isZd5v3XVZLv6GVYPWprGZE3Cc2dMeMXepMog7su6xYdszYmG",
  "key27": "2avi5sDkiB1BVGmXKbxeTCzjknejjrHu8BRw8WsXGC9pPXxYmUjFMn9LsWjzn2WzPYxgTQQRpbjPMxhysneYofc2",
  "key28": "3M9rKqc8jKGEF8TP9HzjAJeDNQXX6dbhnSo4TGKxjxPHWLu2zXiwsSWhGZeFgAM1enGHt6RF7gRjjk5u3UqyWV1p",
  "key29": "2UUsyh54YMcrQ7odFFaWhjpAecmQxQtPKGuhF598Yew35Vf8BZhGfAW2BRA7VkycvrJZNkt58aFaLtNxbauZ2n4K",
  "key30": "2cTrE31qxtG2BHK3RWzzqcQX4rEwRggwhCAy6fjnDLmGUH2vzXwiPYggBGGvEDm1eMMHy5jPaE11Jy7fP9rtxBB5",
  "key31": "3Lnp4w9bnzUCSTA81xcwcpseQPwkGTr6XmrSGoZw7Y1Kgq4aswdPJfwsoFn2g4Ra3nMXeKd7FPGy5Bxv7aXFX14C",
  "key32": "2XW8qFxRb2uUAXeesfjvPwsgibqttaay5zYuuphWJH6zw9YswgxAvnf18pvurZL3RbuR9zvAp9dMPcEsBoMgFtvb",
  "key33": "36DUn3jg7CnkJ1XA8JZvhr5mtWPvFz5i6X5PRfNdeHPA3FtmyeBXmkYYf8booDTzMLy76i23LmPR67atq7r2coWj",
  "key34": "2jdtNmVKuTCTx2h6XRsZGKtCJeGvojbzbd3PjnWTdR3XxHjyzZCvPLsiVGYsE7ebzd9Mo5nvUx7Fnu3Se4Hr9DhL",
  "key35": "3NBunxcY5CWVy789uxtc7A2AdS6vFYhDhhnJrFyGsdrEDj7cUhaAxopatWNURVC3GS7p1dPGC4EYsamAow3uk8HZ",
  "key36": "MDQPg2epMtoWsHpESyAVhk1ajzFwaDJUg1dCRe4dNNPHziAhnVH9pgPMdsZvp49Bx4HvvUVLm5cFNHsoMmVM5V3",
  "key37": "4DPA9S9GbDQsmBoPrFSE4ncjtEDt4di48yz37po6HJ9KAo2UMQWAGGEG9WQP6BSKR1qiZAvkhd8VjRDfDXuKizyt",
  "key38": "5EW37WGUirS7WkqKLHuZrkNenrqw2BYUaP5fV9YmyEMXz8FZhFE3pKPM87833a8VfdmArc1tvN2L9XFVCPprqbQ6",
  "key39": "4D3QUdKT9URhGynPthXJZeK1651MHULGYVHSXmu5ZBZgJ2BtX14izpTCZ5DKybSzMdHZYcVyXgF97seidobH8KYo",
  "key40": "2zePfcStLLehGRk7CYvHRwVncn6xLBz7i4gzsk5BdmFC98HoThtMzZwSC3J5H9LFU1zZZCSnL4mUSGeuQYJ2XUKY",
  "key41": "iPJmY8FEhxj2rUJ8azziex9pt6jtHziguLKwVG2se6ZS1dC1SEtLWNrqXyckcmrMcySjBSR87q2k49Bh6JuP1DY",
  "key42": "4UYZZWcf4WTVAcoZAhG3J51yRKwCnvXW2JfxtjciRHEjBn7pm6HDTp9zFt9RCEuY2EtgmTcbRdCCroeHQAwmh9kM",
  "key43": "YtA11axaBp2FKZvoyjy88uP4GRBhBkZbcFhF1GLASv6HkMPt3WGwZUniqXj1r8otFDbYVUMC2Ue7r3vMs5tdFvH",
  "key44": "2VRK5iWs7LCQfvoQuuEQvyBZhsyNHSrwyoYpZTrwaAqsebFbuuM4E6pxsmiKwjhhn4skxaTSeiPX8YsomAuLBfLX",
  "key45": "4JDjJjhspbzfPxJ8nQD8TzBv7gDE9sQCkLJ4THk4iqNJ4mwwFHwHqCa5XptKhB33h6aseNmfrioFm7XW8owp3UtK",
  "key46": "4wkrFDvZs6KUQ26G5GHcE81t8fZd2e9iJ84grdebzNj89Dzm61x2mwMENKpXHkzdAFJ1ZtkUNv4PCkjVG2YL7Aqj"
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
