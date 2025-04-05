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
    "Tf7moQH1AdPwBu9GXi7yLxyFwq5f75AZ1qsikj16uSFftFJUZr6B9Qnhtf3qofXCQ6kiuPGe1a4GMXSSN2TCwUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swMrHhW2EjHhUzKhhq1EsEcMkggHng1UyTpsampAzmXPgP65s8nySgqPszx3PWTyaECngVC2NmgPbz52zgF6iJH",
  "key1": "4hf6viutd1rnKxyqLY6oberh2z1Ujh1YLfLg1BfAdvfveUzDgMGBfFcdD5BJjTegVwc2BwuUcQYoc6Xjw9c4tyS",
  "key2": "23jiNeFnpdwr2HeUH63SbwxQTuGZUn7K6Nicqu9vuDCE3fVhfRBnfYyiB6RWTwXtrbw9nS4SZrrnF3BQDUSbe4Wm",
  "key3": "4GUNk1knDjcwzoF6DSz7VvApSDTwyJbXQZJT546xbmW1ZRjTLXaA4PcZPcYftNnfiHXX3EB9XsZMsyprNN9CfuH8",
  "key4": "5ZwiWr2Cy7ZW9s2vrE4NZKWg86epheygQSfiBMQnSiKfsTLr2JiYEA6BLujV5G5KG6kZVYMazLFhGkFPuA4SgjQN",
  "key5": "2CzH8Xyzhpny316rDBaEd6vS9dsq3P7BTkXBexzuqaNTHv6uU6LmCNarpWwY36s42YUVqFioWJXXvcL1cyMTCUaS",
  "key6": "3qCfGeLSujQCcTdVMytZtsE2hxcCZs8VRfmMy3R7vdw3UfwSKZpRQaHBMAwibrPvGW4yqqHRzz6QDxCA3DsfBU6t",
  "key7": "y18sAm7q2CUhP5G76LS4M4t3kfCZm1o42bgsciawk1ecUMHELyTNvp8agTeN1fm8cG6Lnn2G4z2ouoztQS7YQSu",
  "key8": "4qqVs3wYAcAfexWMm6HWzLRq2FAhDVi2DXfV8iY4aLXQyjqfrnNST75pZ2xJDPhrURbWY7h5KCMKaG3tiKRBa7yK",
  "key9": "3dUeVFdYovS3ZfgpWMKsNFvaq16FDoLAnq9jmFgHHg1B3MPFKK3ReEeQ2zy2NWXM2UP1CYfP688xkmrkDE7C5Jvo",
  "key10": "3NPMWuqEtLTeZdkuFFiuujADVKDVQMcyEi9uKsbtpCKSWsyodQwJYeH4VgxPveCSsgUe5c2UCojbWmXucXS7m4Hv",
  "key11": "4xzbLB6NxDzvuTiWEfe5XTwhix2yncSEeWYWZLB6yYNfRc6MRCbP43fHpQYM5dTNp51Cob4ZMuV6VfWoBQ4SDD4D",
  "key12": "4kJyNNDwDZi2cBpr5znBqf65oMrDLFFefXPzHZHRHKbrQZMXYt1PMHyhAGnY5o4mWTvWyuvqZ4GihNPP4EdLnfti",
  "key13": "5J1istXn7LuQMf4eLReips4KZYfnbkV2KywSPj1mzkUmUFikFi3iusdjkaXmL7wAwanj2GUbpP3TEmnWmuDeU1ug",
  "key14": "5sLuxtt7ft7G6J4c22cuGr9h6L8QD368xJY9dEE3ta7TNhpi2XDdQVzvSKeKn3K8M7npGNdDsXtdzZYDE5yzuzgR",
  "key15": "r683A6CHZpyTnfumAcKGMct19QdQppoEAcVPE7Av5VAvgaNmQyZXHy2gf8Do6Vzdc6xWBzxGfhw5csBVDwPG9W3",
  "key16": "37CjJRvwgYPhzJMWL49QW3DS4hb9mQR5XSE57921mZx1fGYKgTpuAtZJ5zD8YJAgRh8ZV3EKuo56tUenxFddeDvG",
  "key17": "3jqEpkhqS7kJXsQ1Z1zoiodRcwsd3mHzr3U2ymx9yttVWSDUmN4sq4W4qZQLxT6p1ZJMUKnDgA86cWMCxUbVEP1u",
  "key18": "2d9YLK7fKC7M3Y9Sdy1mpWTHC6inHF4PhJi9uiPjAddNxFAwM2KnSgA5isAwymFJZvEf6NKWJpiWHZgo1mRMyEVT",
  "key19": "2DKwkyhWdfCYV2TU7ie3tXdPHKjF1oqvpsptGC8FcGtiu5f9RBzneuqfTsumYsfzzCXwWo1fNt6pMpteKpF3WDJ8",
  "key20": "5JBWMhEzqr79CYum6gtPA5iiHtsUcdxruTzS6RjaYsu3Nn2vtUCsbka4cHNeBtFo6BZuuYGzz19spKtamJr7bBys",
  "key21": "59ho9j2PEG8mWbZ7zNc8cU5z8jRhLECymX7RmoEFdU7YxaKK895u9EemmX7U4R5ormRtsZcQnYe8Kpwm9h269s16",
  "key22": "FE8PaB5uCNSKisqufgt1GNccFSHpvNiJkct1NGckAncr1yEzBjiuwmoQpEoLp6EgeDo4K7snAifAqWxHC4NfVJD",
  "key23": "faZgiAMLZhVWQSSn75PVkYsNPtKCdHaDYiZxAt7NFU7CUb4oyJC3oKW8CUiCzMmcu5HsWrD4FELdYjikACLpcTo",
  "key24": "5P62MKwDZxqgT1bDzqkaNxjn7cRC7RFdNubMWzyWUsSyA85nY59VRcg52S1pKXN8uHxooLvPn88zRasJLLmcT4Ym",
  "key25": "3sQzW8Z7B6RdMDGRNRTh1Xbjp1P8KtxDpLTuw6ZZMhhypqKBjebqWBLTEvFY5gcxeYSoXw4uXc38FCg6bKFSuEf",
  "key26": "47tGACdwDHy178x1FFbtCZL6w4HYfEnUJ8LrhQDXM8GiroaduZchMKMG5FqKY7VKV7jQhdDGKsYhhirV73f9APSL",
  "key27": "3cAHiTGg4F6WS3L8P2xqx5uLiM5tZ9MxEyL5g2yZujdDLEvazkvhYL1VhFHApwaw9PBjdh4vkPNE4a5iaUdkinhu",
  "key28": "2fm5ipjmyKbXBiXHSwrWkvrRaafntvKutfh4XrPoDJPBHHBToTQEs5PwJseFVWSadyzwCxhXE2gYkioXXat9XMKu",
  "key29": "5wjRvnhSqdDxDWWKwDTzeqhVTDmiw3dZSdQMT7W9b4W3ioXoynR7FVcNCYUkSTJui3AcL1NMY7bLHm2d8BVHNiDz",
  "key30": "4xkd6x8szyA2RLWsNJeuj9Jh5YTsRkoaGu9bfyQrvywSxJC729sJtwoxuYpdFcYjtD6dL6MkpAJAkpExmkMm4Y5T",
  "key31": "3ge27dpEMFuzanp54w6UQrA4uSyWo3XnfQxe6wPM15CDKDgJiu745M1Nr8snpUVs9dfxiE3NYx24Gz8g2i1fWdwN",
  "key32": "4GbEiaovtHBBzwVJxLe2gCSEykkfxQEhMRXDPtNnKf7KDVp3cYE4HHbjAbmYiHYHAUnhTMPYyR6BDLdQZaBEnkvC",
  "key33": "sJXptg2aLm2RQZS3HvyUU5vtyRcVpmoxSzFdadZ5XzFBDfDru3mkNpGX6kiTCprDUCmmkBdju3KpX1zDA4xJ3UL",
  "key34": "5ECNUSMQg1XRkC5uFgbE64eqvaEKtGLkqF2fYjS67TfRSrWnYTC745PxHHbCxsEcFujk9DV3VqAzBoRr4tss1G6e",
  "key35": "fNEH9iN7GyZXZhuTSYaJd8Q3bfkKF2NVkzv7T75X2xM3at28bqZ4Yo5nQ1burLV2q6WCpYHdAhMEDBGH9dcL4i2",
  "key36": "3KPy5fgFXg6fM9Cbg3G8fKpLKNKadiYbS88Wv8DX89Y2nh4NDSdBidEF3VkFHN7FeYxX9eFh4VEpJ5qw5hyWHrJz",
  "key37": "4WhuiyZUfDbNy7MEAE5USjthFVgKCX2uFRvDawQZyXgRyBWrTi3xHpPntxv5BHL4LrTUfPY7vgRN3avh3yg1kX9f",
  "key38": "5sEoaetpi5CtpDJWy8mUq1wwKefFB6HfMLQfan8LY4vNCFa5873CNdTNXt1JdJcPsUPvMwQLVoH7cC8VTK37R5VX",
  "key39": "2FfSrce9mdujF5DT1rgfsKaaCfpuqDYrS8L2aEDQTY3TukgJGbJq5KCw6cD39d1cjxh5kCASxfVCJ78cGwmsDtsr"
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
