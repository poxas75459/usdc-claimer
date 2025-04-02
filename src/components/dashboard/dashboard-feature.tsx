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
    "4nkr1aj71zZjwoGL2W9aFb8jPRJtQMmisLoYhA92Vp3ACQQkch4vKyRb22g5xbAycFzMgfdjahTYwyqX5zBDGF7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQViJN9xfDKFjtW9sZRTxPHxbUX3bjUxd3VApoJJEu8SwBu3nxrbYF9iJg1biRHGKCWU81Bd8W8YkCLPFPjk7qK",
  "key1": "4U3GiFuqgovubJLYyNhjdVu7KmXSZ1h6YykGQC8NnM9AdH88w37r1EjD2RBHfcUh4WDB9THc7gQXKeKUqqAA3kpi",
  "key2": "2HjBGC6nYA47naXhi7fM5Y8jWwL6PUNEfjGX7v9yqiz8aaLhhUepT99uLZr7uEbN6FdWfUk85F2XRvucJ2a4trDp",
  "key3": "eXpJHGH6yjXfuDZ4bdFJ8oQNuk9sxtSu4kyN75SsCGk7MYDj11EQCbr78hicLMimKGT8a4vEnLdh4CucTZX1iNM",
  "key4": "zdQzUm2hGzwnWqKNkvVGC55CSrkxSDyWKi62fJ8LEaauWWn5xh9ba7y1SHWEiNYGev4bMWoo1wsenUNM1SBfRZw",
  "key5": "8RyxCHMVSvyqnTicgUHLDNAXX1C968HDbCxdyUE4BR6PYWMBDuke38RUjybUBzjyPYC2t1kXRuD6nVQPTBA8wLw",
  "key6": "62S2qpwa9JgQKgS6RCntwJm8KdmaxkaYvxrwGWkW6USX6J3mSS3oVZ8pWLgdYv3ZBBnoc6tK8Fbkz9MLCTUYPGTS",
  "key7": "5kH5z9X8Npuw7M19sm8qDKhkT9n8VS6XGiLHgm8SLLGUz85BXtMCUwSrnWx8VwQbBXUpWUz33AP1Bs2BwZmxXxHi",
  "key8": "4xfUDW66vsjZrge45bpiMUFXifaqDXYvjp9ssj318eHkJh721H37XM3wgJnJcpfrMSR4m5Xb4q3DWbrY2p2Ykd5V",
  "key9": "61twKSHfQ1kHoxywQuvE2WNRujRjE4y5E3rJy5sE9ZyUu17Cx74uTh8zy83HL9Xe85NYz5eKWojbFKL7Cqz4EdLL",
  "key10": "3jvHpiPYuvtji5vyky3PK7VPutJqUDdRjKZUvrCjybaW6ytwnAetCE1NCom869VaYEW2EctjKTtDVEin8pdqgTLS",
  "key11": "42pPrernX8ARb3sLtEPZGoLxS9Veo1W7R148MTFuCrsGUpDuj7391W7zpiNJTVikf9E2XGoCy9Vp7zFgz42xY2Y8",
  "key12": "4JMDLFWQ35MKTppmqz93QamjBzT1GEu144CvcGeqRHsuoVmXh8UVWJP4Ta5X1cjvgj4zWnM5E4piQ7jHJVWERGz2",
  "key13": "5LFaMrFSRr1mh42dXUG5ANMtgtM6WXaikfNnWTo2yLDSMyjRWhtzvzUCZm8MfpT3G44posKKkVP6VzbdWFeGmnqw",
  "key14": "46xP8o4UhP57d16oYqosTaZcHgFuf52bnNtqNqdNUdyPHoowrM9cHDAxK4BPkTwEQ7SRK5b7G5RiJtrYTQaXmdji",
  "key15": "CyzXh5VBoZKysR9Zf1kMAzpWm96xKRpvRTrqNBeTHTrDqACR94Gb4raDncXNdaJ6vAmxtEictigtyBTV8edCeKz",
  "key16": "26wiDA6aY3MX5cBjgwYgVaXUWHYzNxw4KxmJg4BWXEFAVjekqX83CG2ERouzwdJF1BJa7wqLeRtux8hMYqLQ75oo",
  "key17": "4ZKYESCXPTkF1HtgEb6y1HchTe57vEACZmEjNzcZNV7C76dt1CnarZWcoU67f2fzjDXsYF1VsAPSHg3eGbVbmJU3",
  "key18": "QUwxuWcF7fR1DhmoCP4rN6iNV15UiGrEP58z5t1JSnG7yAcDkAoWGqnoWVhUk7qG4PCn3drb88sm8SM6xv7wpWT",
  "key19": "HUZy3eE5fsRwjWAuThignsCQVcQNPQTeKWpKtakY3VvR1NPVCVtUDTSinu1DsAHKAaQuJTmix2Vg4hvwQAqMFNV",
  "key20": "2Ehqed4Q2icGCLsi9G9uMSTNRQximyhNxyZa8yGvdhy5esEpr42AHwFRDg7AhMq2mCyqQGscCwmdsLX3tJZ9Z576",
  "key21": "5inmyQLAv7nghyAV6RL7mDNAZQYT3YC5uhgXsSqQ9bzeoJh4e6mb578A8CXFKMRsWZk4ZNTFEUJsKbu2BNRTAQK",
  "key22": "4cMe6faXkXTvTboeFjaju3FqyNiASujLVbx8tzuX19WqXBtzo9YdMZ53TDq1sHZLMiQdYURQFwjvkGzQ7jeV6Pug",
  "key23": "2mBV5nKcwav53anjiC1faUUUAcBVjqYPhrDcwGVmgH4dFUNj737VgnkUK4ExLVmqhs8ANm2drpUxYAt1KrqYPTbz",
  "key24": "2ovj1q2GXCb9d5TSAk8nejUDPwSPDSNJTzsUtgRxxUs2CxUQUT84GWuokTfB3fQfPPLHCJP331a9pJ7dGWzMHP27",
  "key25": "3ayY1C6UZVtvQAKwau8ryipsV1J8VDeeTHLArRVYGsBsXF2AUdaQmRvKiHxohX7QCgh9YxEP3MXkzVz5na3sZMh9",
  "key26": "2niLUk7V2X7xw73btf4uMLWHcjaWfykX2T8Rk9xu9xBd5jZXnKx6gKukHjN7Eoee7DrUWPujfR8VUceGgzbE4bZi",
  "key27": "2fbppHinT5TzcaeDFhb2EJSnhFiyePHWZRr2NLBzGywxrYJrsgogLuCEKFwejNf1fvnKhfwteBqqCabKP7r6AX1K",
  "key28": "qGe8Qb3KmUeAvEif5bywCEzsn5D5yJyigpyt3w6AX5hQLh3V2ueSD7yFqmNwJX6gn4YbvuvhhbMiHJJZguLvGRL",
  "key29": "67VuHYGTKLbLsMgVA1b5Wbssxb8xE5yboj1p4cXJmQPhdVgP717HLv6HGhw2no5LqdkthcdX5ErvQQF524csTsk2",
  "key30": "uobJpBN5r9jhQ1TzjpBbYZ6pEr7s8fTc8uoPTMU9B3nS6HCzAHHYQYUb54Q98HrjLPsBbVNUSrZH9De2SyknDSR",
  "key31": "WgBwcJqddLLFY9N8EUXnqK43hGYZ3NJ1VYZ32oTemVmNBDQenE3rACaENo1qfnJEguiB82RGxrvofcHUiwjdBs6",
  "key32": "4Spp95Kt5LcZePfrupsna5QDxryQwJZrTXpdWr5tLxTUyLe47omVVoKFp9vENAk5swrrFYF4U51GgDPDSACEVD9T",
  "key33": "3NdPVpNRh2cXQceztTyUtjy8gfMUVnQer2MzAxHfKgcqqqZnkQNtAz1d1aMFvbS81DRBV6uzrFbDebY7Hufv3yE5",
  "key34": "3bkCUQW95dRgscYSsDaTxBb43BPyupCMpr5woRw7ZPSYTXnmnXkE75tts43w4Daxz9XuBcu3ePyBginszyWuRCwD",
  "key35": "4TFyShEyzWrZTKZfepB8Qi3SW6zAJeRsjUsg4WLTTBSbFwCCGcWDvS8SXn9PHqG67T2bDp7spyCutheTLajNj7z",
  "key36": "39A1EDmuLynixoD3MsaZVFd9KCfsooNhWNexzYu1zEWBBj7w7eFerpbnmuJGxPHopELv7zjHWfYc55KQSbJ1GgW6",
  "key37": "wfZLFiWTyP6SDECrPsjva8iUsX6Bohbcv87oXJQ6ZGQZ6TYfjoa2nZf8gTLACFkF9eaitf6GYnjMLNZFrxXjf1z",
  "key38": "53p5vr8Z9FW7VTUESpNY2AzzB15xPGqyJoZ44xSKhae7my7iYKWJnzma5q7heCCdEj3VC4SVvTuvNahwhiZsLt3e",
  "key39": "2TjMqJK6NBz47cXvNkb5bQXe9ZeESFL7fAywYdRZUh6bspf7oX8Ph7euVFAcqWaDnJJMiiQRSA1oN6X6UzRY7hef",
  "key40": "2wZ1ayMFYq4Z8jaHgcErQqgvoTqX4aDExuNPFrsagX9udFu6TBphXZTxBKtd8tCz9CMow9Ft8Nj2759zvVV1eyUk",
  "key41": "kdaKqYvuZ1UX8Kwn7S7sVfySheFp5JbHS8Q87kHTbt2VTgLK8KqugFYCTt6hJWpVPmUyzUa3aJTW4xQsCYu7sFJ",
  "key42": "uvhYc7xRjBG48rS6mAAPnysPFwyLfYvxTRvTKZKtiExog7RCnwzTRjV6arC4YaS7xD9DqqHQugSx5pbHxzeh4dz"
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
