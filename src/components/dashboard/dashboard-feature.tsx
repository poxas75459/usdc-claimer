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
    "8v2WmnVtjf8ejLYiahxJ1ptZT5wg4yXLzvNpfW8GLzan5WpRi2eweQGrmFTtsWf2863zPraZLiEtsdrV3u6S19F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWsJ8CfPvo3Wn5A3rkxBDLk51foHqMH5N88M857hJx2QdwntwXjdnGFGz1eMBNXgP9cpfhb8mVmrfL6e9phZ1vY",
  "key1": "4KJjwFL8rEdFvq6uxyFKmqE9u4nECdZzP8Xih4RipF4dKnP9dfohJdmEYhjwqBCeFDHkzpDP5NNJryKKn5pnMmTs",
  "key2": "5LeXwMRPHHna2K7UxzURRiDpBAK4peGh3TwsX8kCiu18WuRTzrJgVsbR2sxdS7dGdDPLrsz9HsZVNtbeJWmADAqm",
  "key3": "2esETgjkeB3tFiCqfnh9M9cThmSScDD9PN6YCgwVz1CFQv9RJGgU7QcfFiCXePUXLk15PSF2pLGLibX42L3CCeQs",
  "key4": "4kggU8NuK4ZXwcEhgRZGpQWkpg26GwpppLuJ63JppXH2f3CUgE79NcnxraLiDwxmNUvgCJb7N4SQGRqnSCHFRZq",
  "key5": "59qWEfdCxS6tActtgLTVLRT3H4ikrZcGVkMs7oC8z7mEV3EtncUY9chewHZDcQnZCMYLvokUrzAVYLAqVHAiEsBB",
  "key6": "5LXrS6c2abvu3FUV5vdkcxAfBGKydX2QoMuSsZdUHG4ohF3JYqk13fyWVZmeaZb7Nr5QUjL6rhQ8mf3ZQeTmeaw2",
  "key7": "2JuHCHk9p4wrmXce2ZKADbtKKaz1P3XtqgGoc4dCSqcsfbbKtNcfyu1kywhKD7DdSocNAh5eaJhKAZoxyQox8J22",
  "key8": "qykX8pdeKbqirfSgtFdDckvWWeAB7RXDp8KM3eCh2HpEucAYVKWyYx3BJehysoSn1XJ41NUDZiFo3KRnz3hXa5C",
  "key9": "4aaVm71wHJX2rMtNRpxCJevyxdXpFbDfMfsAwkincWUfgwi4WBGj9BC3vr7e6AZk1zVp6TJa1dXDVY7yB247BSEF",
  "key10": "5ebfmaiLownUNiKAMcksE6fRjQvDCxATxKqviaogbM4n8Zx524w5GzXDNAK1kwVF8Hamse2sg7gxfskPUivnMkDd",
  "key11": "4uH9NgP2hei5zJK4F1FZhEHKTEtKGCk51b9Zxy4GGcuhFUqfYHwNg8txFLH9bYmWnBYY2vPnkLdrNzcWasJ5zGvV",
  "key12": "4HhMLogph5zEcRuChV5s28UUPdDyjFBBwdajTd9Nh4YYvmGKqqaxYPsMXXBZtM46m5pjdHf5cmvk7FNsAFyxnrME",
  "key13": "2XsRKeMJzMJvNfTtnsG9okA9F8PEEe9YPV4Pz7Tp42fh8yoFSryKaZUpwFqEfR7EvpKweYmyAE9JYgTaf6aab17e",
  "key14": "9amkpvao4RUABV3MbponZ6EF7F3mUjgtjrZ4hSPzTF5saCWUU9RjYXuFWuKiByycHH66JWfSozYRFtprnKH4JUB",
  "key15": "26WwkosHd9UEtrQ6xAPuc6iPrkGhFzwtPWgzdYNV5DikYkBdJx6xE3UVYpGjGeD1vteDPVwBNzYk24VXcbMgidEw",
  "key16": "ATzQ96P5eRibwwmCi2fSxuC4edzFKpiF7Hg6mPpdRxacLwykTxDq6Dv8XihyA9Ry7ebhwh5FTi9nifCnjLaniDQ",
  "key17": "2qgeXE3S8z1FW22aS2VifN9uvyXpkNanm97eppvp4SbZ53yjguYUZny7e4EyacbFxtFkDLZxef8HWPFVwSPwnDPp",
  "key18": "4zS3aF4ZpewamS52ddxo5UTGnDECJAjNKUA2SYVvP5jhBHmxhWKSsV5JdJG1rXZhrmi324z63kP1dZVBnmPNtFYX",
  "key19": "3jecx3kYq8DK41ZA47DKUhc4PWmbiMZ64bZcrcrvLDwD7XupAh1R5XmHdupdXFgtHxJfWtLDiggRVGJNc8SQFNPd",
  "key20": "4ebVhwZcmXm1sr8NbecLDedBkzQwM1xBfgjoS4fYnWYPePq1t5mB97MLCv5yjZKBsP8KLBHFMNs3bJCuLRpbyhRr",
  "key21": "PnYd2bQh7ZCHxshJxd8qBG2Ura8BgrJ12tv9UnM6aAQgUUBk3dy31V2VBmwZYAvFBBKMEUPd1AhcCeoPr3xhJ8F",
  "key22": "2qmEYGVBfpnXqAR3VH9BzhKu3qGYxfV1iCYTPrH6eXkhH4vCfFVL8LaHGTFRwBzGdymFNJQJBMCCiZ7NTh83D6mV",
  "key23": "39D6dz39XpUxZneyntR1AZg8HidtH82rDVdg9xkdrg4EDaac6zDoH64YTFubWpiDCcToWLH3MVN9Bw2Yopd6n5rJ",
  "key24": "2C4XKjQ1SE8GLMvcviNLb1sh86LLU9ptUspiKPuEvKfaBV23jwuz9X1u2XYv3CmJy7d6FG1H3kUvB6kF5za3BPWi",
  "key25": "3MfGYHtNxsiT3TMqN5NUytWE3cMvQ4K7DGiYbrSGP9G7FfKk3N1VAsKbETEzTwURb2bUC5RUoXkhmzNfZQzNKsBf",
  "key26": "2inDaXWZ6p75j644fcH849HoojgLzmd5AZjehpdfV9kf8kT5ELoDTsf1yfTYaSoNPgYXmxF5EjFEz3Sk3qnQ4fe",
  "key27": "H45ScSuKgA564f7GReL1s74muB6m3GaEP8Xvh7DiJ1UuBm5igsTdM9E5q231nPYyC4SFMZhyoCqcX5s5TXRLP1R",
  "key28": "3NPME2GZUrQofjUFw9ykpsSHpR88fvGqUD34tX3VSPefC68S2qMiizPUGbCHFTTsALWP9P285EBeCHKN7TGKNgYF",
  "key29": "yHeApJNtsP38dYtw96BkGbGVj9o2PPeuL6CVLqnQbXiT18SK2uKDB2KKfkYamfP6XZhTppSMXAmBAeoF49shF3S",
  "key30": "FGGvmSkNX52uPfj3VRwZUDRLbqAPh8rfwxzxtjH97o45qgRyB7BS9G9ouXuQ2sM1WY7K4UqqF4cdZh6ywF2RxW3",
  "key31": "3PtuuQLkuJwCVN7s1hKVh7FfAVE9FL3Z4TuRhJLLGaJgp2cNHurR21mDPAoK2XRkaWgLNuFriztrVwZYcdzEYYbw",
  "key32": "2p2FcWmiMtx6YvdJBadB9rrGWmR61vvaDRtjSADrbrYS832R95Lvn3jLtXtZDkbQD9SkfgxEhz3UBo9exMcju3qi"
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
