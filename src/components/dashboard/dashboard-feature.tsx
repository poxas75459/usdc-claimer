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
    "5eqbVZKDmQCB85HrcC1sdzSnpUyhVyda5fruKQYktiKymPSzsAFex9YVCeqiQXa4CpxgcXxGGwdinxqfvrxA77tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ozvwANUXBzBkk21gEUUitYkcYR9wKeoTf3kPJtPHELd4D7Fet5whqsyXEVN254N7QP3gZHVjiuwNPk4zm6ypbSe",
  "key1": "3vyaERYH1kExL2tKfXLePsv7CeE8uhCRcaegMYaYg9d1b3HC2qxKW1zjuUJmUNFgRnYThcbkcfAA93xKLPeQYPtG",
  "key2": "53LB1EEYUGzPvKKiuCC9GKSGvRVTS5KtjyJdNXHxsRVcafe4FpFg4ps45RZBEnPxAcsHm3uUvxRrhEAn1CvyfQT2",
  "key3": "txT4cJm5VW39cymWNqTifVWp4ec1DZzUWSL7X6tD7kSTaYYqj1DxitfjupBoHEvXYypBe9nPrjH4rnPKrMTkTts",
  "key4": "4y6DtvZzGvor6jdaCXv6QSRy94cUmmeA6ZER8GqWo4Gy5Q5LaKVEK2vmpCYALP6jdSSuhRBKD8n31GbHtppszish",
  "key5": "5ShVjjYdEKDcqrVRCc5gmPkugLERQCBQXVXvv36PqPb67GhBjWE2z8aH4kojSYKMvQ82gXCXz7M14gBsWma9WRbL",
  "key6": "3HYskiQoZEDxo4t2sqiy6JRa63ZmJFwp7ki8z2ZdatfvYYhP6SKj1Ghu6mSgGktFNvHMYe3jxCvc1nkKChrUMJ55",
  "key7": "yG4fi9fxavGDoj9ZfCg6SYGYbuUpebNhBaqtcVgRbVvoLk9ekCVx4gn2wcYxPdo4JMooaTaKiWt1VpY81BYyGbt",
  "key8": "4sRwb13dZFT89bzAq3GXbGgYbjnKisV3K3UYDidJQuTWPfaibiJvJEMUPmg67wAMgCgxF3kDoiqkkB6K2GACsYHK",
  "key9": "3eWy67L625kG3R4MobuaJjFb2kwnR2fYDP7FGt61xzpzm321ak7xGc481ZhCgws13mgStgUwUKe8MxXVvUiCwvng",
  "key10": "3xFgfB6A2ahHWDkoMVQ4LSmmfocAs61sQG4zcd5jo35wGjMUR3ACdpt3xntunDnP393eewe1sLb1NfsGgKhD93JH",
  "key11": "3kEN2315RVN5oXa2Nv1Fv1toKrW9XFV82mFDss7xHSJ8cjyT51zfi53VvSFkE8GBhmKz3gWbn1VoV3CacAH9Uv2C",
  "key12": "3wMcpfnCE6Z7kFXRXdJAGKnmevSoEhFZXeFoX9eK9GFEjyek4BxyMLQ5iiUx43QMRCcBBTK4uU2siHn9BVXZFLhR",
  "key13": "fTqBpKCAPaVoRsKeG1C62s1LxKQ3PxZkDNLFM4P9Cmo5xNgeG5RPtT9suDC2mziybAX3rhk1EuK7TcrbxWxDDRd",
  "key14": "PPE6P8W9yxxZec5ZHx4xJAxVKUbkAKbn9mVPdChdPXmRCV9J3SSMrN5vaj6jk4Dt2jjGoNSihq65aXh4UA2Vvey",
  "key15": "2LMUEsf4bhHqQp6RZks6cLzmH5RTf2g37VMukfjAKqkjx5jBSLThyEi5QXEV9BNzKmQ9yX9Pk9tu4DQxGsBpTQhU",
  "key16": "4EmrPPp228d5DCPwQm7iAPhZT3wE34r7PkTZWzLZiakXEjtpTJR26XEr1JPMvtVQ6dCn2BUgGBMnBVq68WFSHm8n",
  "key17": "mz3Kvs3kEtwG9nmrPz3MbuF4ao9F1DUnsPPHExKCLK9XZkEVR7oTZd48dcdHgU8tabVZoxpvFuTYE9tzoioeA8R",
  "key18": "uTsMA5Uts9FeRmy1Xur9ic7usbGdRfRYJBREmApEAWyHBecQDAVVajf5Cp85dfp4V3Ged2efSY6UbEjBmCUUvT7",
  "key19": "V4ZDExwBj757VizxBhgCFhjC1BW2CJ7MHF54LE8hnzmddv8BRjoy1GC9abdJRjhXWnhskTy9NZS4ygA8RsFC6VA",
  "key20": "2RqME9FrudJX7J2QhvFckn3FCYWM9sm9h544CwawbXfsNqyf7WTJDEnPPB5ZdeBPzPCJ5VqyBWHW7gVNWbH3Djnm",
  "key21": "4WsduhBJ5sEzGECQE3GaYtKcz8rXzfxbXFo9q6ekZydfBqygtYjarwzzQU5PM3kgkDXxvS6hcb7DVmicu38q6kkX",
  "key22": "15zpvweTKyWA9AXoYZ8nnu8quYfLCpAk1fTuxEMEKvX2BMXUN5tibDMXhpyfSz68x7PZfkP8m7TySudKPEW1srD",
  "key23": "5LrVujhwtGJsdifmCVZ6tpsVNJp1H7Q7ewcxLrt5G28JMeKStk5u2knN8opDJb9B8fPPgKRjNMVPMR4uCVWEK24x",
  "key24": "3gzFNPyXJKuvts2veAerjyXMVN4K3VQ4w6BMWS1rL8gkDnyjmGfU6xei3s7MYxtaD1qQNFitt2afqQyPBxKFLEmt",
  "key25": "5j1JGZcAEwyraDtNno9hBLUyPUGGZNxBd4Nm6Snyfq7GRyni6MpTkTJ9hxAmzhwaGu1fu726KNE5aH5B67z2Sgtd",
  "key26": "64GH9mCsegqeBz4xDkceB3aP4MEJHs8ZzQSuM6fp9rBvFp91x7Txwbf3jiTuw721LtpA7tUDt3d3j1PddruAZQkX",
  "key27": "38qpd7w8ykXKFseXg3A2J47JnJTWoRbgoTQjsHT4nJJHXAV97rXVzw2UmCtiv2kPxPaKwL5c4RtNLzN4YyuNzZf1",
  "key28": "5cLTcNv98PPxcUegH4LqAXT8ixN16cJ382CocgL9gtpez3EPPpjUES73raDADsyeWdhQTVPszwqY56f5SsXQVfzC",
  "key29": "5FdMiihAb2dk1JnaT5nZ5RiJCqYsF19pJcsFpojG3hbPDXjwo5hNdxbpYdd4MHBH4Wjxot9qVmGSWv86hWidARC5",
  "key30": "2DBEU9GJzNTM5opw34BHztyZLfhTNguHjiwkzPAP15yDxrsBBX2kLadaSqnBZP8NoyCRxhgWFpWT3SauVvMnnG2P",
  "key31": "5N6frUvwZwN98hDCrYosPmddQjmua4v8SwptsuLRxehiFdszZAbi9PafPYMVTJUTVhzj33zvoi1DNFgVpeNxWB2o",
  "key32": "5yNQsE4knYSAwUMMk8E44YMXim2Kr4gHJtavLPWwCT3TfdmNt86TuwzxypESoNprKjqe1QRayrWyqZY5eGvDTU8a",
  "key33": "4RTRBHy8mTqZL81aD8ujw5KdGQ6H48erJa8ZwXUBDqsbiqAr12Zh6T93GpRUuyiEgwmMRBHxBhoHuQnKBG2mR3BL",
  "key34": "4K989ppUGMg3MUHNzN6rABcNvwuv1XgK48FmV7Qbn39CAxxXqB9E89h8HSTWjvfbCHHjBY14EuXynRAzBAdTjqYm",
  "key35": "476mAtquAQK7o1xWSU2xzAk5zvLfWGvwguCeB9Tktv65cMNZrHgx67cVRzUnruktpHufs51iyY8t61GeXefyhYZx",
  "key36": "311KYzybyJxxjtJyBh2Wc2865SmB6PRRVp4nebLsGUXSA27uz4rmarjtovNG1zNGU5h3yNjVz2mkCs3vaxjEmXEk",
  "key37": "33HtnHya9VXRa88zRULMgo9nwnraDPoTLMXkxnP76nHVsWCW4n5TYeYMP8EaRqK8k46eDP6dCjsp8p5LS3mZNxc5",
  "key38": "2e61hTLZHoLnuk4AtXNj9JBprCkcBRqp3esBzFAmMTMUwsnWnYKmPwvKRC9kjeSjAvguGizhBWNNqtdd7BWegCf9",
  "key39": "67dkJeC4uM3oD6GuMs1Saacnpt6K56mUuNoGMDYhqgCoMbv513Who8YfKMwWKVSpoETreWbm3PcEbcyLBpoXyWg1"
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
