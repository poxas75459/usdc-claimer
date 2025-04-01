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
    "4w2V2QdxkA4p1pQCf8kCwEG7HRaTvkq71B2wsrM7TV7ZzZKLRb832m2tCaDh2Fv1AokjEjGRyaDQn1kZvjCrtSGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27hXpEDNCimnyw1D4sBMbrJEDLA2rVmoaUG3zVu3nPXMcatM1zeysauSuA3QMEkFLSiwHtvxpxbRXyyekVzwzkCc",
  "key1": "5hUgZJUv89T586agCr3RGPuDLVc2SyQvzFVY4kTWxEAC64tyAjymXNDJ3EaG7BkcRFKzkGyewYxUWC2dzMd96ti7",
  "key2": "2x5kXGgFeDehodPVVSEdozNDE2VLxkvqbzLoAGfM8F2RQLd7RwTEQdeJGiJVFDDK1YukntyhEUPry1g18scdgavD",
  "key3": "55RmBRUZ1ydnFJHYbLCEEjvk1x35j43A9USiJMHgFjTDz49FzwcnFXwafMHXCcLivZGHZHh2otG48x4KdLRdvxqP",
  "key4": "57jpMMwYaxUhDcT2HDKRrZnqLQP8PLWHQu6mJjyUUTTvhjWuLGLAcHeTHs5m1jury1yYk1svgVn95xvLt6q32WDH",
  "key5": "2CVa4cNr9WrDL4JEVdMGNspTaQvNzREeV11Lv9cRGvsNo4ZqPpspNTUE1QshQrYwc5mbHL5eTq3Xep4KkuQ9acXv",
  "key6": "3xG5UGLWZ1Ku1hqqHZhDzv3sBiyRPw2RHCWzRYi7GymSvWbsgUpj12yVuk2dXokVf2X8HYYdST3NJYbCUkPbCj1D",
  "key7": "1GoYEzQSFMPx5Aj4EVFJFs2bJgQp8DJhxRcc547gP7pk68qVKdDc8Hmhc25hzRfxhjNSDWgqAtzeSavqEa8UL4o",
  "key8": "2f139hE6A62jTVbbynEm4qNTQMUK8Ucu95P6nVTuxFBXCRxqJ4LyW4FhzRSBssYk8uv9C9JqY17Czz6XQqBP3KEy",
  "key9": "fg9k9ATEH3oaj6DkLLAqV4NPY93kVRo4DqVvrr1WDqEMGizbAcyRjLmfaLrRCnLfh7UXHeP82iJXC8Sr4k8qR5x",
  "key10": "SyjmW3RWtCqzV4dcN7fBXPiQ2fTouQkhFzo85AhHw764rh4sqCBk5M6tAbFhtdhNjXbdy2ctAqqeTTBQFmUsCsv",
  "key11": "5NtQkQJftT1EHyZ3qTp7LbYYRvpkW6yoxKJ4TLTrveEx6d8x9iacHTgVCrWQs1dpZWbdAE3TAnn1xpENYEVd24i9",
  "key12": "5jVihEGbaJQM7fUr3EWFJbdddmVXPZHMSCDibE12Gp7LWonZJHvLBJifdjyxSCpELXWLUYfGiFEC3gBByYt9F7Lu",
  "key13": "53qa262Mm7F3WkuFEKVRJRFDFuUgLsymdbjQRoy8Nqpnak53hSX8h3gRWYGK7syvpxXURiYZx9MBVSTaAewugMg7",
  "key14": "665b8J416BfeEdvLek8yhVGFvQMR5PMhvNgTTM5YoQqemtGe33qPG8hPuKXymKE5NsAdeCTipmxCeoqVa3CEmevx",
  "key15": "2Yg5KbqhoMAgijAh1SftYwNWYoPRh99EHtURQ98LM8FjF8Lg9ZosrhrKGN4EAJCKi7HBtrpqT2MvJcZGJ85hQ8Zc",
  "key16": "125YbpEYUV1P8Y1SesvkAf9emKXrSvggt1TJUSbGsvwfv7CpskWDRSnnNRsWFQDHc7mq565Cg7tdN6u7VKErKQrR",
  "key17": "4ZYq2aP3QUvWC36GCYhw6hYWHq9TF8GyrqUekfgqFpWqFsn5bsHvox53GERWCVripffXrvKJtsWTeAgyUmZash4r",
  "key18": "3QxicV3dGM5nyt6YVMFv7JMphCKPsZcTRoekgQKNvvE4bypBYJgrg6AY82bdsgXXLZQH875swQT23NTb6qQCpGG8",
  "key19": "9MCWtALfqyackZnurAanhtALXf4ggcW8xe4Ed2qQZdYacczr8uqRcJ5QnWhTV7wG4xAf4Y7ELf2iBarG5jX3xWw",
  "key20": "4ThAeeqVCgTzpRXWaX3FSeQbzYyakHYzxK6zE8L5uJp2Trg74iqxwW5DWzDrHyWvzPNXUakRimEPaGirRRzExz3D",
  "key21": "3yTn83koyAu9wY2sUJG5vCuUXJ5dtH63GEVxzk9yN4f2FBfXc1TkxAYL1W2WKp7RNPv8b5oZ4j25NzfwvMYhEd9r",
  "key22": "qcYgFPDRpfcSeaRozBFBDouHYodSYG5oVkekfzaN7dXFVXaPm9CWcHSz6wAQrYky4c63dsKLS5Fvi7mS8YAMCun",
  "key23": "3FNw672QY1WePENz4w3RMDA4oYWreUMvNmpRzABjDynVCcCG7d7yuo8hh57xoGte9Z23YBiu4cWHuzGwPPbK1UdW",
  "key24": "4KyVBHJ63grhfQmVNeonuchDWk88fKkfRkPDaUpvEf5SumjTG4AVavvsddkGSD5zX4uvgWQgafaKeFb3oMzstxM3",
  "key25": "8ZaZTt3D8h2Dwb1XeT1AGMfsnqc7bKHinaztfCczsQPsYXgiGkAJ7NrkT91CuvGK4yo7YVnygqeTts5FK93p6So",
  "key26": "twUCxxWmLJEZETEwseZLwu7Epcx55cYTBd7qYzcC7bJ7N2vc8eRtLQPaoGX8C5Ki5vpomsJB51hWJU63DhfiJ21",
  "key27": "3CNA8bnvphXVgZvwbmDSPhvFmCEdJmtQrpuwHdnZo6RwDPPBUcouz6AYH8SUhTb3m21baUhCXMgao9667bgRFmzy",
  "key28": "2z3zEf6yA7UQj7K6pmtGXQPQRtTZqBvvHGji7XLBTChhSDGV6cSmdnExfx5QPmwK5xTMaDUqLzsXY5B7fWGdgVx8",
  "key29": "27XAHLH7uvChngJ2FdC3VVMip7c98erd38xuaQStRQckBAF4uHtLXBUpftDtREonxmbtTuxuUNkGYJ783ujKQ1z4",
  "key30": "61GcNPETx8NGM3sF6S6dwjyiaj1N8Aq2qpYXxLK2ZNMHkUDsG6ugzwkbvKp4cbYLGkWGBeqDzM8cLpc68czfGs6W",
  "key31": "3CcoiUKSvzECvBxasLGgPMLhtSaSQv3dVYDp5F5taBSSCaE7kkwxTNrT1C6zo22Mm5VAXXbjBPVfdQuzXimCh5tU",
  "key32": "4giCiPc35B4CZw94MPZLNkDnBnaeny5HfFp3VUJDkt3UowBoKNMbh73iqCoPjuda42DxXG29QPe6qcnCGcQ2w2hi",
  "key33": "66CnK4RzYr5CmWYrRCKS4QUYXA16ohZfaZSHVR5wWZ3xYpaR2QXFrQA9vSpoXxu63Ga6AHS4w4UmXFW3RUr8V4LV",
  "key34": "2dKriCNr6hcSuT5PA7XtkuvHzpk5cdBsbWiVwpjdcyh4Mie8JpY7Fbnr1sRuVmLuDpxh2MySDho969sdLPJF1Vu4"
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
