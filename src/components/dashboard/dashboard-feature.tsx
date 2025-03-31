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
    "5AiQUDWnUYYXXMKM1S9YfqXBYEQTpLFXy7WPc4ndkdyaHwvaaDrBP36fez8LkUyXDyvZC1cgWu73d2S3C4kWAyeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ytKt5r5PZD6EsocV5eciJefF9eJxM3svoBcYiZx5x1TUFkGWfz1w8C6f6kEXhtZYg81JDgmGquBKiRDFhfQffU",
  "key1": "3ViDDMk3YsG1q3XgMFc2fjHxgkuNTaKndeqphXbk2yV4xAL2jzHUhQ61AxUdH77c1KTyJULMaUiyHvVLD8s7udwr",
  "key2": "2EZF7LLS8SU8QyR3PCmQJyximrCCJ3Xyj9M7ssUeotr5fsctrUCsPNxWUiy2ESnhWiACXRCm3rye4rA71M5MWr7G",
  "key3": "4k25vZggDobPMfANwqdrHQRW6FzqYboKkckdazp4wTYJrQvubCUyc8zMGiYAyx9JJf7Koj4n5PxwCPrSwrLWQuVr",
  "key4": "299mvNrTXicuAMBXnwffZSRs4QACUXcfcf8D7czuSbUyNCxhbec7Q9TTCRxm3avnPPKqbDB85h2ctQQGEECNcNL5",
  "key5": "62CJ8d73CBSpDVPtBbhSigRVc5PNJPShmTvh2nedHMUkyMw2z8ct9uXsRPD1gEVVDi7kcB9vLf3NnCmYHwpvSEAx",
  "key6": "3TXFSx676tKin5m7GTQcgW85aAL3qRdQXwZheHeXeYfBNHiwiVb4MVDXzmugViSZFuDnnznJqs1pxG8ZTpH48qt3",
  "key7": "51R2Lc53BvazQYZPjeQyXVdFQVib7PppTRHJiPfwLy1CrQ5c8Bq2Lv5jMSTEsqSyTUbVjMh6EeJzUhd22GFQMK1x",
  "key8": "23F17SPbbLXgT5jFatfF7oN8gt3AmZe7bTfEz5qkDqBoRqQsoSgBr86aWpjbkZ58W92kGM71e112zfjpfqpvp9Ko",
  "key9": "K3386xYurSFasknYzDrfntf6TGimMuTafCRKom6HL6X6ppbDpvtkckpUZ9FPLYU1AYLDKfjxrTGawaZtjYS8ibu",
  "key10": "XAJmupoWTTv2qUHzUS6hRrEMEKW5kmg7x37a1BvtrFgLFXXUNLXFXm2gAc5X1dJjfiPf67ccveHYtxtocEmCzfj",
  "key11": "65ZbjFemjbWL2eDvgYtpybQVTHA3aauZmsLRyFmaUzEv9RrZBd94fmSdoMGhtYSB1g5SkrA6JoMR8Pkixja843u5",
  "key12": "5oimLGk6Wi2R8Vc54crMdbzzjdf5RjJ5swFvnSWpPnbFLe12ZwWHQ5q9ST9j85GgWKJsgYdQfKCDvf2HNk7r1QkN",
  "key13": "5B8Uj7k8Prw5G5ShMmEhLr7gJv3xCds5sDzTCeLAe2Kp2EYFYyCSwbCqxG9juXz7sBPNZ84KTxjbFr1nhAPiXkaY",
  "key14": "214m1Yjzt9jACEj7c268AXdZXTvbrgQdsqk5eNzK1yKukaCHsBNygjwzb1vssynWkQ6JixL5nYRJje2HjfK82FXv",
  "key15": "5vTj1qS2HBUnyYS1x5Ey758mrE6CgHSzJSUxknByoPMYKU1gw9mSuvTK2NzngwpF3vBtocs8TxADH54VaCxnX2Yh",
  "key16": "28X2vm6KgMuh21VSrq6vqizKvpzJ5h8hjw3JzKzCgFZDWrwUqMciWWmG8Hf6UHL8JGe1AxVF9KGN7G2qB4qXspKD",
  "key17": "kH9eKLcaEEdiDm5SvB6UGS8ScrsanVZKXqJ5NunX7evFXknJY2eUaUoJxKWwhCVVdk84QNdxh1XWwjhTQcgZ6gJ",
  "key18": "33aPx9V8kgwEDfjfiuSc9BeJYYcyD5uoQVDDaR9yw1WM89iMtGLmnsHPjuAypu5cToFwLvsBhZewqZr5otkdTpot",
  "key19": "5GTKbBZhHz4dMY3Dq3yS2YcjqGsQtAAfwH5jYv1eQaRkrsg2BL13pGyLpcy7t8crZ9vx81kcukCGaKaCCPrZc2hW",
  "key20": "5SYmFWAsLPnoRHn17TtiZi8ekhmVnin5NYF62T43iZcJqe3SF8digZRJyjvrBLPnMgL8F5A2gKTArcNrv3kB71q8",
  "key21": "2D8qiMBoyfkgnQq4qWjppb4q7kgB6yYsrURKG7Z1V6K4nNTedopKmF3M5DS8Z5Vahf7MYnx4cwqpH3QmGn6NHv4A",
  "key22": "5CKNuKpX1wd1xtMUruZuQAQxgpixYpKpjDkYsJa8NCmAFuUpwTmNZDiKqieEG6cjSqoDhL9XCVTcemradMp3R9HD",
  "key23": "46RYh1xbxoiiht1VvJCSMriRbcJ5tNPaNBBDTHgeNm7DKHFGFWXMiLue8H6tUDpCinqtdW6hkjXyHqDQcjzhX4yd",
  "key24": "yNQSyUcF4uqAwyMLDCmdr3288Nwxt4XLHSMqbHFnbQ58EcKL7fFbeav8MATJsvaKEjX2T63NtbMBArmMV1oPMAJ",
  "key25": "31C6qfQfXUSUh9ZqWG8JDPA7isbdL3TnXqzLzvsqQYew5cwwUZcnhpp8jFWvqQPawHaBc18xx1jbVNqLr4f1e6Xd",
  "key26": "2LXrksTJihbTjNwrR2nZ7fouU84ZMceEvDJGwyxG1kabgkR4n7pmo6KygNQLdj8rQ4uhpUgBzp6tRg88fsGh4Eao",
  "key27": "SdTGK3ZzGKAPDyHUSXhFEcyd3BaNTqQWJY4vKC6iRKLQMdXmGxCHeo1wURMuaUisyeYv5vBYe7nWJyXVKY6RX7N",
  "key28": "M1vWmatcCKfwErgheYwQQDrhtVdoTtgxv1ZPZTqAT8ttAf81hdyxPSnGo5RcchMy2toKgc26k5w7EVYNzKbiAfx",
  "key29": "VJTV9DDqrac4WNPJUHi54gCTkjDVMQa15bkZzzxHLdqgw6TZoZbrSpTFqbdp7XFKEnjA3b61G8oc8JS6R5o8Rvw",
  "key30": "4X9o95j17ucLxo2EG87mvgQHx7Cdo3rbqm4Tfaygygn3aH9kF17x4ShcnWqKaNZav2Y5p2YuAsZVytiHV7htmpM8",
  "key31": "5E4fywJ4wfDEtzDR6pPXTkr9n1vZ4SiHXbocEksoDBcYsC7gbM3fNWe6hJ7XXJUk8dBbJ1xYE2t9AhzN2R32yEVw",
  "key32": "2GVLXJjnvqgeixbVnwzUaw4coVb1R9yN5cVsfcdWZBrb7Nnuy2tFU6aWwjqq5AsQ3rckEbPsjBF67SQZncDdahY7",
  "key33": "4XqtSj9KCJowQVHFg68zQsYAdBBjsaqKgNpdxMzKLrjeKpjwJwTPEBkErqkRGYFNyHYCbpt5r3L1uJijoj1tKdWG"
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
