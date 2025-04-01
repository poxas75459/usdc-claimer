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
    "5do8YN8scesTi1NcHcmtixCR96cUVTiCAsT1PLsym6U3ZTAQFV6BBB4udBPejZMk5aESmnnAGbQAhARyWEMyQwMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QewCAU5Kz7iaGNK3YyLHNJkdcrKneRwfL4MQHg8njbcRLJFk7Q9Zf56Ji5Mr41mjRW8EdF1BJwkETp1Fz6LXnSU",
  "key1": "5VbHhHUoLMrWk4kCuSd9jBikkvit62TBHJqpdTfErVzjwzTXXvd9gZJkPgpGpbvxU84oFtubLEsCLPUCjn9MqpFm",
  "key2": "HN22DuCyHaWCxCdgsErXeyirAMgaDyJyoGjCDconZGApF3gHMWtscUfErLFACb3NJTYCsWw7q7KcGP2fW62iShW",
  "key3": "5mYsJwuQr6RDibQDTR6fPtYxwi4cVZ22n2xp9sWXDo6EY72HSvGbcmZZgXxp8RugdP7gRKve3pV4XRKDQ2iwza1",
  "key4": "5i8AKi1h3h58aogZH1xWXauDLCwL8Wsj5EaPmSF8VYRuhw6dPAfX3oLuNdzJ3PzwFkoY3ywkoAdvFemjt7P7DaCn",
  "key5": "E6QRYNPUDoVpkA7gcV6VzHWrdwp6vKvjCXgDuQAsGXLcEyomjLmDmcGAxUZoVfeRMHn6XzVfWZjRfejKCRBFJDV",
  "key6": "2RCykpECtxyFro5skGvfJ4e6vPJBQoLMh9znQupgcNchfwYHWpa78ocHjtNBYJPUM6xpb2pKme3kS8UqawbJFzA9",
  "key7": "mgZwmeiCPSrLJyiQFcBD4G8k5mVNFWBesCuvk9SdsnKNZRffdMXwiViu9xhW2HYSA3mG8QzJuJbyEFEmNJzDQD8",
  "key8": "3TnDmbBp4kvGD1G2xhGcBi1gdaFF8yMTK6DN4wvx3YtA4m5DpNYT93vNkWjbGhTuW31AAGjMTs8pP4tDiFx81k4s",
  "key9": "5h4V4988xHKgXqZnoxZ7aCNsEXDRa67wsTNPakmVNz6XhjPS6yiCVz3XVUCiaJQsYQboXop3CrkMYrznpFLCMF1B",
  "key10": "2Pu5ZLmZqctcuxRpDSQaN3VEVq77JyiwfKhCP3of8xJMYb8LPX7q58bwFTs9vMt3kwMoWgp9jzdA2FWocZG8Rpbo",
  "key11": "2peDGVxPfWWjYF1HCRKxpdyuNcXAyaqg3FW2CanUNcfTBo5MRTtBucPZEvuxsNMx2e5Eb5EHWPmMsZXfiuNCw8xg",
  "key12": "5GDMWUXgBX4ysFr2b3gSWLkY2nmGJfRC4qHLPvErih1Fd4LhCgzsWzGQt2tHyGbN9jEgxNAD12yxjtXYPbukLxTy",
  "key13": "5uHiydxvKFwa5JAApAyEjNg6YokKjjJNtGXQSLfHnwZKqJmpcdiJiEgWisxK3RvYSDPXzZU2BfqKwff5FiM1rB9F",
  "key14": "2KQgXq8mNwnk1QE3ayzQJfzCwtm5fapy5i8YWT2FviC8mG2iLmDwwz5o1pqTWZyXecJfJ2rDoXDhUaYvkzJct1Zy",
  "key15": "gEhgNbSegnEvXDvLq3whBkBpHtsgKrsGiQ8MdC4Zxbb7axS4uz4PowNcP3tWbK75SuS6c6bkoQm6PLRa7g43JV9",
  "key16": "4j4o2doXpXQbhQXv1QV1JF2XmefgPDkqXeYmaKVq75CK3JNtLAbHURZp9wcY8KJgq4UzLDoWu8L9sxkY6q2ptVr6",
  "key17": "66GA9gcukXVPwPmDJZte8FgfJjeG6DRo7ciNNRPtfYnSvjhnhYsjsCQbRCYD3tn7gj7iuPZQMNtMHo3hcQzKY9jw",
  "key18": "3hyJtGACciNduPJMvfuGNUCYvmdUaa9JzVXYyUXWzgiy77T2Dr5kXsQmvcrReXVUfekpeAJiUTUtWa1ffEb2vWLR",
  "key19": "3Ed6gDfY6dffe4BgLnRx33NPu6LtyR7bWdTXUPud9ZS4P6kDykbYrQmNQuRzPQjjknYJtrzUN4QQizEMBMSs3c7",
  "key20": "5rNGh5mJyePjJxEWfJrbKm2eLahAnSEjEBqTdLKHwDFc6bwywSBWaF9bUfW5R3R9Auae25r93yqG4sDZwpjvFJrN",
  "key21": "8DgPBohuAGbwoWooo5nfpyvyEr7aohMDUHpxwiX51KD8jTN3dkAr45KS4GpFjYW3NeeJS3qJKMBAszVc5c8W7Bu",
  "key22": "3M12iJUA1CXwaWJDK8RE2rA1XZ93uznkvoajrjCjLvtz7AawcPW5Wcwiaox14tzgnz5hwZGHwwa7eu2T29qaL4Tc",
  "key23": "gsQk2sfALJvTkUm2XgpWET3U9KAMR91yM2WShmdqc63sZ27xe9xcDb9sC8GwSBcoKD1eXFCBUedibaauBEpYb2H",
  "key24": "KLy7Wjk8M6t4JkkDdWC9B6YaQfV5RWxmHs6bmQRgn4qiavmMgHsNoyjQDT25uJn621wdawLvBucqAskgbK1F3h8",
  "key25": "3TSAuZDnSch5JLVnRjPUSrJqoAFP5P7u8U9MtijXKJd52uhT8ibZDn26mcZZtnaG55bE87Cwapxjh3ujpUCqzpaV",
  "key26": "4hfBARLbLeoCaPPSnkBdKrxayY81LZh52JpBwoc1e1dPvZVWMKjVNntMg1UDVBKKgVefcZVDUBihUpSG1U1Vetf8",
  "key27": "6v1vxUgmQyHVMZMHAN1HCnuvSStsVd8YVY7rZs7CmVvfNGMtRqg9nF5SBi4H8Ke7FVTahPWKirE2JFUMkCgpWoq",
  "key28": "3nyp8ZieTyN5Ndf9oBQDKhkiaGeDCCN3ZG5dMbPsA4ERUsNTRnbK6XRMqiV4282YNbnFM1SR8A6i2stT4SECCuHq",
  "key29": "4AFb3sR89JMpRBaJYkWpHLkqn2tsGTmGooqMirDktqQPWCDGdswXnkXe5dLRPksM5jyWMmSfbiYfWNH9HF3xdt8t",
  "key30": "ZZyMep1bovXemEDyhvP3d3j5S44gLKcbZUnbCL6kT9jDVXe9MxnwHkoWf2YVM6JLpED7oukcn9gFDeUSs4p8xGr",
  "key31": "5anBKvegJ6dirT4X8sxZJFdcHFpWCygd1ByjREFJJvehqMTnVytZ4AnPTrjhSdrRtpo19tLrrUC3mGeLRTnN9YQ2",
  "key32": "4VDdBAxvwUAPKwUqRzK9ovNoudU84c759eS3QPtkFRqMK2VwgNQpMC5sFxpySjj5JHkNAst9aFqCAsbkwHM2JN13",
  "key33": "US3W2Z5cbGyNVpRDrP5sMzrhXzsJWgP4JtGuRiS7ELsfwXHnNPrLR3xuWM7BsGNdgjpnWPVKUaxE5rxpEm5gS5d",
  "key34": "5nP6twQSQzPr2vxSBZhx9EmDTeg7FqENvzedEWzZXXpgFadod97HqvsVZ2KM8Sh2dCZZ2sBA9VYwqeVR4nosH6Up",
  "key35": "2TDLZ7xSvhM4RNkc8dPZahSGi3g6rZfFxh3WUYoDRULUBZiU1Rx8gVwutE8hp3R32Z9E4T9HMfA8q1vr6zV4MbWB",
  "key36": "2b7ydD8qi8Nuf5L828V9JGNf8N1Wa6JkDdQYpVJQwg6cYroXywPSrdPUKozY48UGTAeosgqtXdnSNudDrpFXvZFQ",
  "key37": "5fgvU6npeJfiBvEhXzHKNcg28ouRZtB7Qn3pvdGZ5DHjkc5Qe6sA2Z1Jk957NDo255Gv3zKYWvQSkMc5prdAGzpt",
  "key38": "46LmGafjisrGc9y7H7JtXfYxNEMLet7SABVRLbsyfyMRxS2JAri75ueFJpSHwyQeTABihT9o3DFptFrDB58YwPxv"
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
