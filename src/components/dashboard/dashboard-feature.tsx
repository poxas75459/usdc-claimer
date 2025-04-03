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
    "3NjeNXUheUVfpC2qkCoiC8uRqKHeSq4VpdEY586wVWasgeXCaci1wA43Yts9PiuKrDTE1k3TZTKBJpyXtbvCBWxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ALfGgosjwYqcFhmQipKuvxBy9YSg7F9TKeh1oqP3AMhqBhHqjb1eqpuu9fscjJF3n2qdFSHQubLYcXkrk1fi1f",
  "key1": "5xfh9Q1PrR752N6HGAEwhgDAXy37rFcsGgaj6mY2QE9vCFtR4hsPnN27s81r9yY5nuM9W8mnBtGHYjedX6h1yByv",
  "key2": "5ZqLAw3sA3Qbgo2JaogUv4Q3Z5DMs94Jwc1VkaPmFg2dQu9sdyD3cmVCZeXJLBMxt8cgbGWxxAV7mi4JNHS7n7gC",
  "key3": "3VkUNEwqZ8BPL4JRnAft2DJnbQ1Sx5AHiX2jv2utGnWTPUKUYARXMp4MB5PQYairpy7BmPA4Z3gaThQ5dwnF9Yhc",
  "key4": "4aUH24mjh3xaK2umfGKAnqPFnDqXPCy5Mbo9sTBq6AoULPikKucAKnypyHMwWBkQhw95Bw86dc8DGrzcumnVSSK4",
  "key5": "4erovzDsiHsLRMHyWb5Bgmek5a1MnMGkuKvjj6D1KVXWGh1Ai9RdZVPFMQtPG9YC9d6mvoqj2EM5qajpDdH1fP7Y",
  "key6": "439rB5ds9GNUXpadMFQNJLA2jkgHdy8sXUHhCgSfU88DuqnLPGPrKq5kUr8P3ceWogWVpEfasAedMsGkezPweXNG",
  "key7": "55GFgrG349XRdSoqds2m1bRiwp2P1CDkg4okYuQPCZDJZ6PSsncuQLyEc1hGe46L17jXkPgTZtgCo9TNhFKBP2dP",
  "key8": "3EKm3gCU6MD2vbzkeK61GP51xB9FSRm5vxvvoo3pxqJVZrTLCZPEVJH3ADUWHWtXhANoJfUvcN9ASPYGBJXaD6MR",
  "key9": "4RsgwtwWHu4L8vuJQCqGeCHsMHdD9TBThnNeyewC8pikkgxENGRu7hR8Cu2cFqGjCKtaLEEnVGsDzwtPQbdJp6hV",
  "key10": "2wwo1kPSdpX4pkTzGCYrCWusigmzVKf9gVkU7u3NxmS1Md1vqiCgwptuEX8CsCen8LzAe6r3pZT8NK6Zew5RKWXd",
  "key11": "3XEL1An9FrsM5xE1Ffziib93PsFfYZFsaEBFFiPGHuHM3RQJt78MCNvtpuqvoajgaU598fuofPsHBhu8kmnhCL2S",
  "key12": "eN3Mfvfq19MtQdCevkHQdEhB68EzR4YuxTtktPHqEmhDBimJTaYWoRFa5Wei6oGCYdkZsZU5qT1hgh6yGMEyxK3",
  "key13": "5jT8kt8qM7JKY81Fe6GcCh9yNAA13JDgouRUzDNTG6WYW1G1C1eEbJs6nYoHivDe1aMif4nueD5umoJVBZPJYrus",
  "key14": "41rKLKQ3aMa1b3eLLKxiddFgzxd4V3aKej74Wv2gTUmbaoFZ7stANYjnuDn8YdxSbBaamFZkf8XcQBsBxZiSXiex",
  "key15": "5G3YMsmMQqGiCdpQL4y33mg1JnWm7LBYSy7aDhJHpP9FZVYB9tfxtP3CFdzVfpkeE7iQ44AuqCMWe5wdggSiQNZU",
  "key16": "5enPiebyoV2CjLNrvtiLQzEBkYbeV5g1Qyv9Rc33ZLpJEjpCEmVjgDfd3VuabFSQgGDBAvuB1pDfNe3qDYQc3pHA",
  "key17": "4o4JjEf7NNq1q4kRhcJXBG6dMDkXUgD4PBCJ2G3LgyeJsZojk88ZiCGVQMPUdB59nQUBog4pjxKht6A9CfcZHcFi",
  "key18": "67nGivvA8RJiDnMXQyPGiJ6HudgVUC1Y822cuNidVEatknUXrwUBZnHxW9sezEnkejEoJTW1Fk5Q2aKJXGHEooUd",
  "key19": "2xTQiuAeeNViPQ7ZmeirG1uMSnNsP4dNNwqjChGFeZhe6qnHK9WQvXgBuLkPqGpy2eMeiL753f9vQZAjbeoJYsR2",
  "key20": "4S1ARvWg3AEjqz2DbmZ4YJAnYkns3ZFT8Vrren9qUKxWkGqrZ8khwaSYEgKeapqnsj2soHVWMpC6VUfmywTuNfuj",
  "key21": "2oRe2wmkmPMyDr7zREkNo83ArDbCMAHLLSd5UH85L3i5mvdW2vQkgS4dGtUcUErcFUDEXqwJMGATVASjsWz74wTt",
  "key22": "wrkh6CfGRka3tiybQuyioCwNfV3EmY6S8NuUKwb64j3LhkfsZkYhUoD7G8XtL3CMfLYELz5EM8mk4JvtK8AS5ME",
  "key23": "26Kc6FTcwQjNzumuD3oCBWGRVp2Hiyo33vpWe2A1t4PmxRU8cuQi11PFLTDBCwRZ1KTr5QrgeYA26jvJBTJCikLQ",
  "key24": "63nbXBD1SodTUyjb9EtodzfAsU9jM9GyW56ZGRZTaAgmhLyL7diAETpLZyeHei5DJs2Qhxjz8Kn3DhagY5BBLTYz",
  "key25": "4enM15SzKUJFSDJScF5ekV4DdkZKRAKcuuunCLAE2cqQzkKEwepJXjQMihS3emfVz5XKJwywFWWk9k8XPYfRqJ9E",
  "key26": "3b49Q45vSmZMUTfUb21WXN63tik9dmh6mCuZRqAQvBqrbMbeownsgJyuptHXSBxi1Bn8cQjezkayXsWQRyyTCGqm",
  "key27": "bUEKkXV7pRERsMvhJX5iVboP9fhdV4F9kp3GtjfKFMstoWTxeUf3f9FGYM6EcTwnxxXbXkJpSy6DGeBtcLTfdVi",
  "key28": "Udb1TssNEURXjaZXDXxWXWjWpqvXLTcU1f1En1qTQqpVkC12upqk7jkJo9QSM47a8ayb1cEqEBUuRjMoQHGpLR1",
  "key29": "3FMxNCEbyXyFEDUYvKz6qfho7xeQiWrxxgmqn6guFpQoQuwF7oNvjpeoGzUAM4fwHYgiEzLbbSczpdionYeW7TiA",
  "key30": "4oyy8FnkTZCA4zDj9R8jcHEdAt9RnY6Sa5nRg715HJS71wTERvS2aeZi1NKswwhqsmL4MeL42hDBruZ8kcr25WYo",
  "key31": "5WZdWdtCCyNiP3S14vXP29PQNqmc4MEXra6yFFqc1xEK7qvgBgDbHbWdwTBfuVv48B66wJRSVhicqNBbmTCgDUdU",
  "key32": "ojJMLA6GKSvVBWwtDo7m7qEKvvdjv6i5qpB2hduFrjUmt1geZYe7DUBAZHZzRxdWDZzMxw8rqLHsdMpmi1p3xzH",
  "key33": "3cnRLweSYRtxXrcCS7Umy1zB74kNmmdyeBLtpokKcvckkCkV44emetuThko4JqQqSWZ58pDS4j2ZdVnJmBbnZQHf",
  "key34": "6ZKXCTTM7fjgZNtrWqfKCTZ7xgGzkoADN1Vjv6b5gMEYAGGW5V5pmVafGDrPDgCvcXRB9NNYfM6vsy4yHrFgQGN",
  "key35": "3FLWew6p2ni7L5QnWo3bghj8abfUdpcnA1NW5hdnJTCx9HgdvLfCW5BuvqbHLWHfNg3VT8nJcpXf83GErWcFyFWG",
  "key36": "3dGPx7gi6P6mziq4irw5iAQr95oCsPdBSUqBXb4psAQfGv59nrdhmJoMDxt2od82zM4q31UbXfcccgC9Abd94wh1",
  "key37": "3z2HnvbxmV1Eo1RhxfgePnKAQnsJysiXY9eh6yW3NgT9rYHX9QM1xDrFggE2XVFrNATHLb25rZxZS2jLRUxHJ4w",
  "key38": "4WLWmJXJRJie8cr59sNQuXwSzqT1iGcRCpkh3QgPPdcJPnCK1fDbXAHmgXkxS7Wt4vibFrYHuiFERze36w1gsxnR",
  "key39": "2Gj8BXUp5Wf6Duhw5CE1aqmpVRKAArv2DGi6qTcSpD4TSda9fd1ZTqgfC1iFVBKSVBoFrHwJAa7ZGYaQ47zb9bCV",
  "key40": "5MGcNZXaqz1UWU2RhvLw4C9KRaDTnvs1fLeLZ8afwurarCGLE9U2CsNPov8YFsLGHivACZsRbtZTcmFjYnL1juJX",
  "key41": "5gefzXHKkhQsb8HF4rdauic6f3gvYnsfU3YEWtHgmLYU4w8z9TxHxQd7MYHWPbwKyWbfeDvKBopc9zTuskhyGtjx"
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
