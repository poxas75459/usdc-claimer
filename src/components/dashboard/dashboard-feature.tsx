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
    "2BycZU3oqFxKWCHvjebosK7SQ8EPk9snQZkHyLLSc1F8BFC7bqgHeGSHD89saJ8hWVNuxNd5BcWLYKShz2PEc6UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhEnkrJJGmRVkacBvpTjBywM6dCHtH4aGCjpBEYop6zPcPHVDXUNa1KcPj7KvaxabcQ7p77uvHKSNmrdRnKspcU",
  "key1": "4twxjpJaEe4JcQ7WE4NS7ZgKqi3yrHA5ewazoU6q4Um7ERHCi3B6qxo6swqJmn64ydryV6WgLzoKyo2EC9VpdFUs",
  "key2": "4AwBw7Z57xcUx5dRZS3UZtSQxZCap8zNSjV8Rs32dzpa71dHvTvyKyN3NYTAHZMpvr6wsraA8XUCyW9yTKodAjvv",
  "key3": "2nvQEH2pnT9MXwAdbVVy7b14Jvwoo62XM8Z9VCmyLhvorYMWRQknGjqLoMCVXtfxaVuu9cbcj4gHSwbSZofmUuZW",
  "key4": "5dKA9AgWpAwjLA7Et6p5MjL77e7mVkCqJT3uUgJBT9oDMLwGfgbr2cBpJun1HrtK9LGxKCwsRui6RwmNDVugZdyY",
  "key5": "4Ri6n1VSc8fsRPwtrrWNK5de6vEJWohbLzRntgQShe2wiUdDB5v98sYiprZ1isS6NJuzaj8tmpjnjXaE7HRVBEfK",
  "key6": "4mxi8REMehmJtv4nsykXzbbYCkpn2u1Dbbqw9F81NaMJV43SRsroQfDxzhrH1suqTBKPCvcKzPXqzcwR6nivspGB",
  "key7": "3RPkcEbJ8EjN81My7n8TQWVTVDEhksYaYxSvhuVZsEuk9GhWqwrRxp5kwDhVYLY5pJiKCFz27pdxfVN8Ynz64T6h",
  "key8": "33PyRHJppygihJXFWH9qqXWtyedtsgzYHZBEdxACu6wTqDA1REihRYZWtuntwouTdP1KGtkKVBHg7tNCbRiT2F8Y",
  "key9": "5BShsMimvfjpuPuwC8MaVYrkvgBr5gk3JZ4bBW81k9mEPfvTL88nv15Zbqj4cnwQdskomuNVbTpfHxBPV5Y2cevo",
  "key10": "pQGMwrAiCj3hr366f4Y2jSCzjMDLo2DAhTbNRyuKsp9v87ZnYawnFwkYokJk8HupAvqRrY9TDHu7gZ5AmTFA4S4",
  "key11": "4HeC4YLzZoQ7XpCvv7VvY3EXYRugtGZKTrC8c7v85v4Gb49FZ6WxjAs2xDLJsXVJdcicHcETSMV8xGaEVTcoy1W3",
  "key12": "5MWVXTBZYvoMjc7EQmFXmZjDT7XnR4DjSETicnV7Yf12w5BbPUB25V9XWyQnwETFVjNNziNiCJMhrdnfv9i9uta8",
  "key13": "4R6Zk5AiW9Yt62D84evVXuWnW1b4r24RxNFGgwe119A374uNo7VMRPRhFWsjqo43ymGSyS3j4m6PCaM87tuKKXii",
  "key14": "49ATuhG4r7iesgY9oGUtQR146hYq4FUTV642C9srmcPJfYe72mBDti2jqXXmTXNdjM32PJWQyFUTuoBxMR9eCARH",
  "key15": "55dg8fYL7vw61PBAd3tdWv1449Fe3kVTHnGNHW35j6br6xiTQ72pCKgV8W7r1VypoUe2nZA1MkVFpM77QyU5U1R1",
  "key16": "5saEA3UARru84cyZRAUzm5BCTFMMqGGLsiSHJowEh4HUKwZDyy9pE6gKfk4zESwGKSJroc4LsnHJKBw8afEnU57Y",
  "key17": "5nREvPXTXzQZiF9nkPkX1gffNwC8ScQD6ZZ5MRutx5rA7czamDjqcUtF4cjhryfAHPfqLXrNm3C1tRko6jB3G1qL",
  "key18": "4yw2F33939dXjkYQw7hn9h4VyVjRVj2eue1mjkcRnMdm4N9jD7WmEQaLJRrQpmPPVcxXArWtPn7LWEn2sdCrAwd8",
  "key19": "5EdjJuDvU9SuzwjqM3rmeFAQNZkCG2mHA91FBSrmBJaGfV65SdefvBDKbCJJ9RXZCMwSbqrje9oUPVvWHGiFuAR9",
  "key20": "653DYnJ4Q8EsGrrLMuEQ9UGwFok8eThcSJWgCShFVmMEFZRKyJfXSZKdvJ6aJ6ViKxdyoEayg3MunX3NLLYhK2iD",
  "key21": "3WqWyvc8sSsLaLE5XUGpcE6dt7Aj2BrbiYue2YwkA9Ab1d9Lycv4bFj87sGetvcTiRxXQfseaNuxKTTNcrLqhsvp",
  "key22": "3wWpwnLDpti3nWMbrk8eo1srXPKYjSs3K3uDPx2NQ7Xc7rzKoB7ecoVAh52Q6ALnnzet162mh8Do5YjFcFVNoZuc",
  "key23": "4iKz6vaUGR54VzqyzVr6FLvnfRMcazAjUV5eHzCt7VztSj2HDe57R9Hp7KJ48TEtZjSP9P9TwRd5cG4LZ3EBEfYh",
  "key24": "22EVCr87hcTQB84QvcDFUv4Q7uE5Ab4MPrTk98vQ35Nofwessifaznb6XCQTd4fNBFT7NyBwzDLhcEp5voDEwnhZ",
  "key25": "4K1Av9mXH2YKARNFes9FfbHGNsoemZhDQUEUKaiR3LXuZUe9KpGKNE8v8K3xS94zhi4mAYVDAhw6vVQtLJaD8oP4",
  "key26": "4FdfV9EG53dQuVkuanY2JPAMWjdDW9dj8RHcSm3n9DLkcAoLmaykQxZQWV7D4JsV5XF3AobXtwq96zxUiVSG5FrM",
  "key27": "T7xJYp2NVTC4hDtA5y9iFayoHdEXnovsKHmimi83vVVhHdJELZ7Bj2mgk9nu8NRyDAC3USg39nfDdmcXCcmXBgH",
  "key28": "3W1xvcC2B8PegxxEKdT7bwyPcbXfDyg8LEgPBWY8VHUDwxHsmM6dLsHtb4wbouYoq89rmnkArNLBDPSVT8B1EA12",
  "key29": "2Ej8hVMfrXdd4w5VACypkX88ceMsxjMZA9xKeFzFpP14oZ16nGtf1rGfNaJtabKjtPZQLdaSnLxdkVHmBsAbKiV2"
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
