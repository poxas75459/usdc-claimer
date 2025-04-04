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
    "3ukXTbf1dbkSF7ooUmXPuhPfpnmjA7vGvg5Xj9BsBNDA3mReWLwyugCK5sAkr35dnniiheLNF8wrpXJdAjEQPGhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqyT3TpnCw3twPWtGRkYKnKgeeX5Gg3jh2gjgu5FisCzdnZK4vfrgFP473tXxBpyipLjVLPy6RUb6YQYqyWSL5Q",
  "key1": "5ojyZQFLAaJnFwx7Lu1R5BPVKpr5YLeTg3deyo5irUJTkZgQcZqLHTkLwTTzqb2E9ieQChn18J27LTahrBJEd2pr",
  "key2": "4uPLj1pGh3Zuaa2tkBjhF6mYwzvwzdcp1RJQVr7tJFMpWdVMaYpik8ivkGfxtsvSQ9NssGuq4RNNy3qwc2iGupHw",
  "key3": "2v2dSdfgwWNbLxSVuxCCMJotrkped52z6EXJprmLf1Y985DDBP1aajw479WZ65KHRWf2cXH4mRQM6Xc8wCPESSsp",
  "key4": "3y58YN2kHoiffhYs7bPdsVgy2kcuLATU6ykFoeL7MoqbJQFA1V3XoCGonymKVMq8td3p8ZA2pGrPbMq6cy2UYLrK",
  "key5": "3RmyWbHGBhBNMtGpd8TMk34ZzPpNoZMDe79HFN7CuSpLVdYYfMZ4p8zhYFzvRsD9RG61R3MSAZMoXCn5Kpjn6r6i",
  "key6": "66hwJmYgS2NPBiV9y25t7hrctcP8j3YBXW5NuyPFzbR1HFwURisNHAeyQhRV8iSRbkYKnsP957qf9P6HNW8XF6GT",
  "key7": "4EbEEdoHLBMdxETDSvFJKHTqURdHWfz77s2Pw42AYe7k3bxnhspCMW1Qdes3CJXWASL6F8rxZzFZ9NHQ4ew1FtCg",
  "key8": "4XiCLTYq2DesmzBoGo7968PWL82xsaBC7rqA7Q3rbywU6qWjEQ9ctemzd2VHnV8gsNN9bEm98PpcQtcnS1vogLEQ",
  "key9": "5kN3QYVeG72ypgnZuhotTgxH5tVvsC5yxU5kjoXiGfsn4X7j6YzCvLTUSms5qiUBJqXrGg5v84ENqJyzsordXmso",
  "key10": "3P45EKbnkeFx5CRp1XVRKV2Jfzi9FCBUtYk3v48LS2pS7EW6HmLwpY6VgRcsAoThQk1q1iXuNQHZKu4PRLNmiEFQ",
  "key11": "2Jehfiq2rL1tg9CRNXvskHWpK1gE7t1VEQgGQw9TD2C4BCLtHYmKoV8V3q39DfMQXFwpno75ZskLhMpyYs9TWJ7x",
  "key12": "3ZQn78VYqKcR6nint95AYh4Jsn3p59Hjx86fUVzXM3xGdJG1yjdBdjT14kaFQhePRr2QxJPscPf89tPcCwfamAYh",
  "key13": "uJWVeC2RW1QK4U5UprsU7g1tt3AnDEu6yqWYcY5SLR9JCtgqHKLNL3sLNmiPYvMfDpQgYWV2mkN9PdtyhPcmV6g",
  "key14": "uYbZvpctz9YWH5TEQ579bkFvDQTmHbwYDMZdSwqmhcrcsJkSmq6tdg56oqtJ9cVZvE5tkdVCAbU5wB1LxqqhNvH",
  "key15": "34w5D2kiME3eFdAt7RKWznnU3xozp8fobdgRMD5JiaCqDEMDEhcmfLsPNvW65kYmM9fxfKJekabYVhFWZ3Zzh4RL",
  "key16": "5bPhHwSXmUQKyKxTy3LDSTd4b56GH6sB3QL5AgfbU6YcquEgk4QvmuxP3QfzXEWKBUck3EC3bVtm31JB43v7YY5t",
  "key17": "4VYfPhDcqnRCFasF2y8Uou4UqrZPbJg2hPBr2oPzrXXybhzLQ6Fft7sBZjrDgbzK5ghXc7z1pR5826QtmkGi6uuV",
  "key18": "4eScoWoH1M9BrtKXYoZBNycZP8N89iFERr8Xqiwmn8DypHdJZp6sGCxAfSQadRLiL5hd2YKMuzVFWDjkzXftH6Lx",
  "key19": "46QtwNt1yK5rYcZjB1hXjASw3ZuSrGKupFmee55dPCVXujm32kbhUEDeTd324jZmSuxRSbomv6jhFgaqVLeVzqsi",
  "key20": "3NwpcVAbko9nS4wd8TuUsZidaVVmKK3mgSfwg12Kwjq1zRPJ4H1EvHyrgaYfrTPbyGwH2jVfuqszmZ1wsL3hbCep",
  "key21": "3Gqboy4gLL8jev43DRNEByxAseZCrjNYzsivaZCfF6qeUKSdPgR1Spst9GXaVV6po6HqPuUFWrr2BoLp7zCeRpof",
  "key22": "3RaopojorM1vvLdVtPXLVhpwqNcad1AV5BJRDXkxRHRuStphszGL6A3wo7jNg5FhHosuzAygTkjckthnoV996CDc",
  "key23": "5hN9Q9AQASgt174p7AJ2bzWuUNTkM2yBqAkW1eUR6jwwQAfWVrT9B2pby7SNNZ2kaavA9BpcGWxCn8sZu7uR82Sb",
  "key24": "4K8qfpGRcjNayNLHHsqqSuJL7dx828tDVQYeK5RtM6qkunUkNmtomzx5cDNyZeP7dP1Tbas2eowFQ7kTDzy8omBN",
  "key25": "2or5TqHRNJnjx7uos7hZLFSvVU3fr8LkviSK4wj7oTxnm4gikjXNyKw9LmKVDgDYCFMjegHuFRJYS3ps46hbKffv",
  "key26": "3D6a8WJApfaoUMxgGFDrCPNaS8KYhdJsnZTzvUzVt419ySoHDv1c7kHrRzFuexggaPJrRUfj6RzgC7BbeZYsLU1Z",
  "key27": "5TBhL9RsJh6LiygxpieozeGfYTtP6dw1Vbc1no3APoWAEjzjE7L74iRC6PUYJ7FBF1F2GRt7X5twBYi5MQHRqzbY",
  "key28": "3uC9uPozHp4yonPgLbvWRa7eCqTEnDF6mYbCshn7Q8JcQUSqwfnwEsNta2PkD8UipGjRWMnGgLcCDJztM7kiQBWE",
  "key29": "4P6AdSwZokH4SeyzL16vng6YPxFC2BYGjTdoWURoinMeV9rkqSSYom2eCVHvh3pdFyLwyHd4okrCs4Xtr8g1aq3v",
  "key30": "2yB7kkDjR42XjqvboMJvaZN6V48nvQ4WwT6kxjfbfmBPz75vEWFFUPLMMjJhMUnnCcbrZXK6TEJu8Lx7eEkztx3K",
  "key31": "2rTrSwwzTxwrWhxrG5NLpmDud79Ffo4MB82MBmY7x4MJCifygNMByvMpQVP3dtENwo4GipgKPkqDiuKx4fRHKevp",
  "key32": "2DZ3R8fNsNtoKeTHjwGRqaUw8iVvwQg63dHU7xYh63L5ZKpPnxcJtdpU8Gy5xhMjBAs8WPQu1CRmA5QcyHUtUu7R",
  "key33": "2XWM7ETxfkuELECrGcoiFsN8p5MQdhNa68MkqrdC29KReAQ6bXsjWzYhqqypBQaxF5EaAmeGjqkh2nNYknwCJ2mr",
  "key34": "5vv3GPH6nCwq5KHf65ZCkDAZmfLpF15rnM3ZuTuuZfcdd8LDXGbC43Gur4V6NTcmLe1iLLVtY91wM8P2DcS6Skay",
  "key35": "3fR1tCrL2ZhryQfReBxbEzrdJjL6kfbQrgCK3xSEPNCj3kP2zP19CiuXEDkqhVkWH3AKWj8VisMSNhjPf6LZzW6F",
  "key36": "boa1apyHoD82LBEkHGKVDGfNfG5j8EeBLbu1nCJdwg8y9XGBS1H3TNKvfd7G5VHzopvryGUKccANFM8JxqgGBjC",
  "key37": "3og1BXo4a1rdxYbDG3mk86yqLAJmyXvrWXuBQ5g772Zfk1NVh4Q6SNFYfE3ASPiAxg5A6iiYMRDvkHEoqA5Tm9uy"
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
