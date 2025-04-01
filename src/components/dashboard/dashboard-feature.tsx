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
    "5u9AtXhYctNmoRef5rAdTmUNNFZ3rgfPECUH3pTC2bEHPocn2WFpCVspYYWPhAghSVdC9RC4WoQFWpyBY5eXEmnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8WiPqfRuc79JBc1vxxf4RLG4y9Bjk6yzjLtB4AFYBs976u8SWQdUs2GxGjmByMfnZNuZEY1xhfh72Hsetrkagb",
  "key1": "FqQJZ1tSkXBMFm1o5m5gFsJYFwSENCUyiNPpDFYVqgv9jGAERaPm3AqwLHqH2UtsaipLhDDhSn6sgZg8JC8cswy",
  "key2": "XozPcqVBW3acNHrSmmdFxQqjYRg31q4UEg1kAgwAQnyra54UVvrYD1shEMrEWgvUbB6fn9gexVGNJXi7wFFdiqV",
  "key3": "51PykzCkk278fPLX745vWtmN2cXHDwsaAhyWnWU4UfTvsmx9ofh48qDwXq9nRr3WAnyGvaJUFNzsrpVZ7AMrhuXo",
  "key4": "2ncza3SBidkWPpEh2HEGkG6TFo7QcrHqPWh3riJ1ZDtQkLG8ssM92jp48npwwhYLC9njjitwuCfMy5LqedfBNxzH",
  "key5": "2e11AYEKCjdjvHP8f6KJ3MdbX6trEM3wJ6psaAsNnd9tZ74XPd7e3Nu5M63sMT2TE5qdLGvQNsig75uwTrz5Rwhu",
  "key6": "5vPhUsipByf3vJwFygTNyh7kFunNGpQsRTg5o8aXkrC3Gte1C2iAKK1gWHMRtxzMdMGBZwjpGnPSZi1a6YAoAJwJ",
  "key7": "4ri8ZdTnXpsEnTaJ8yDjqdqEQCrjUvZ3Ds2GS9QYGMwq71faPe5jQCZTuoG2D95a3dHVXvW8LpPzBfoPud6TjDMm",
  "key8": "5pY47ckSp4i3pRUGaAp6KCSAisD34zGSXe7DHJuaZx8QazgaCDz8Q3RzZ38krY5wdANY448tUxeta4RifgQhpfJC",
  "key9": "RgZ6GUNrroRwvgoYko9J1iJuPPt6112SHgp1zTLXDHs8B6XVseotQd8ujavaum3DUmSrn9Eg2DFRuF6TrHJ9jah",
  "key10": "2Yz1YjWfAp6DPghNnznwss4ELg5FT6ckngJhMp4y8t4GXN29yMEb9XyL4oJzPZTCHNiS4wQPfK8wMULN5MfgMvEP",
  "key11": "24ADgrpodAqFUTNthKpXpjuF4CtAU9Q62S4EwJoLFrrsjKhGkmmXTMWcV2dAXxoxPeyCKtKX34hwCSZcLGcBmB9E",
  "key12": "2adu73KucJVyvFfVEBw2pARCeWURo1QECDbRjQQCAsLX4CnZLsBEZDGujLFF2WFTvcaFyzXmQkzRMer3NmKJGMMw",
  "key13": "5f6GCMznXynky8zTaRND6B4eJgq7fRa1qDjEgZBozeTsEEgFWuFiFXGJqMQJAiRbBJm8Ej79BqCkouAs7pVDcPip",
  "key14": "4M9cJHcfivqmfeMoXJBRWgJxwj2TCMH8sy1KRToMafy3ryXLDqC4PX5syGnHyWffKnxuQWExcbJZWTU2FvHCgStT",
  "key15": "3FiBNRqAQnKYvXdfVxRr3QoSToaKJJX5835svE5ggQ1unrs9rHmj55dQkS1aNsYkFXJGpTW5VMffdgLAzVV4VPEk",
  "key16": "3zFoDuJK3RJokqghQQQZS3Jribhc7qPBzAwV3Q89YCUC8jNvDuxCCk1VG3piYVSpX528ZKZN861PjrN8c1yC2BKy",
  "key17": "2cwj65ZtgtjTj2PqLFaHUrh86CBYhsZKmL29LZaf8j3c6GR6TQJ7oqUJGZHgp4R6cACuRRyPdmdpCSCcHAXtKSGb",
  "key18": "4EVJJbFkNBJUw6qXN5rfsyUUuJrpxk5Ud4u3WgESYKgvSbsPhGNd7b1zh8vjqLFDAR4zpb9NdUPWzovptw2YUZGm",
  "key19": "5H75k9nUxhFkQWqdXL7YSuw1BqRS3DHvvkDv1tQqTQvgqowzLjEgQgjyWjqz5VZJhbwexACAXMFzQnoH23ULY9ue",
  "key20": "5p5Jh84Yuad2E6GueF8r3KFnGePRDjgycFLVNBojzRYUgTJhChVuXCeEXWVtb5JXrE2AfP5sqQSPGwhW67wkFDRM",
  "key21": "2jM3ejzUXYSqnshnJ7snJmMe1XTBozGk8soNmkD1xm7Jk4v8reWGWsiW1YoVEWN1zwfeiKF9mVxmQifWW7CN48Hj",
  "key22": "5BmzD3W6s67Ynam4BMFXwUGMv3L6RgFkRuswpzN93J34szdhBi87HChJwEEcNUVSPk6P7zqrU6dNyy8JoRMpRMYV",
  "key23": "2YPwooXP4g9kW5szr9Red29UirFYMfAeLX1kuykZiHzxhnJQBEWGqBFGHCQuaRTNP96QFJgEs21P7X8DL5obAo8h",
  "key24": "y7R5bjoaubHncTxwTziFeBiFBsMf7zzNZPmGLRcqvupRYJ6kmZVo5s1wbDfxyeQevjU3hZ8EawhBqLtN8aW4BtZ",
  "key25": "3BnyhAWbFAEiqtD1Z4KENJGTh2ePeiY4M3kgkxhxNCjwGZ3MjpMP8kamiqwDfi6EbpaQiewt5hew8aR5GywbVhGu",
  "key26": "3V1zPGnHPf1eAw5bgpGT3kRPWcJ6wLSQbf4W8YdoqBiFnHxEUV9fmGd7iNgHWAQyrqxLSe5JMJ2UDLK4jNoSkvab",
  "key27": "2KoU5Xw7k9EkhV7wLxBKzA7BWt6WWxvwKBkjcqCw8P7WCm2QuaSHQuA1KNTtonDfUB5ZWjSGSMmaPNbGdtF5mEwD",
  "key28": "4mhE3BKRuxQRS6tczQAuEXTdcwXY4FLBkDsryYKuT9TCB6AdKFgig71hUxnvRtNJwabCRuHW2F57K5AfSv89xh5m",
  "key29": "2HQKYxb53eKJDsGTPqcXVKEFpoGwFmMvGsRExSYz1NHBmKfB9prCy5o6RvZ3R4iGkqHTvVgk7RDbHxqKxF6HAN5z",
  "key30": "64xsmUFM3DLpTjBJf4SsBNhhrxKkU7DmYQXJJR3tweW97hRaw7e6Z9DJYWgsKY3reXUCUhEbQYZq2dQkmgstzKK3",
  "key31": "e8vd4ystkyjLprY2fkdMPyC7LHgP4FJU99n6v6xFkFUyy6o82oupYcnP8Hj5gqm51AJGiubRtqtstPHsfujdNqY",
  "key32": "2JEzkasMiHLBgZBYT53t6fBv38n8BXjDiY13fNfQ6Q19SLBYrrUvFtbaqPLBFmeVoa7EzR5ZbbJSVgKaRPzk5o9T",
  "key33": "5kNqaaJwzDZ2oo5bPqjYTgR2k12veqSLeCCCaox7MMKGWx4ax4YHxi9UpiApJf1WeA3bQmZ15Kd16s72jhHQ3J48",
  "key34": "5UmDBvEEnJemaPVFhAG7n8AKGQwGnxAHV3qZijAYHRLMfKJPhVv1R87K3GxDH972gVt13H9wDuefFZwe1SexAvxd",
  "key35": "4jvZEAVV4Kta5wMarxPsGyKoF2ssYeBQWQmkDtYLvgjYd3BBfWDKW2b6Ujca6muFAw45XJ9c9jXEmzC6qPzxJnHp",
  "key36": "4GhR3s8c8BxsppGkgALpa7zGZCwMPV2wusdLkCp1xKGiNeGz4Sb5pAgXPuRjmg8qj4XewuK9AuvFwkcbZSvDvNUD",
  "key37": "3SeiLft3jaXMWJyyihkjaG7Ysw9txFQSZyysyR2oyAXDp6qZiF5qqqFRZi8ken9o5F3cdmS1t9uCuwvTxEaiWJ4k",
  "key38": "3PGYa4mFTH488BK8He6HUkGVFoy2g8L9tEXSP4WoVrRbi7e9G26LApny2VKk7tfMtXrR2yRpu32z5aZQz5va6ew6"
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
