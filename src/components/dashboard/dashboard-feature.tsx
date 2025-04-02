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
    "4xLvPxKKxa9aRmJjwZpgutcRWxbEYxpmzHi7zMBKu1jKUsF35AQs3T21JbJurRGrUCmDZBzjQrCv8Kcku63PzJCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ibqBAEiRGMyiLB3ibznzyGuK11jnC3NyKFBPN2yvy6vp5qG4bn4TNmhHGthLnZc6CFF2f2GyNxFmURjs9kpNNSq",
  "key1": "3xbBvA2CkEQn4YvBQVCQWt54dwYU5KqyNGF2oBBP7rJ81krcSENJ1Y9hUm8uV2hY4yy5vXkSLsvRrdLsVoHGd64A",
  "key2": "eSq558q5r3Qk8c68ZVQJETAvjqMnrVjv1goS9jSd3eP1sVp5L2Xfaf4U96oYr4zGKtmezfCfLQeRLvgNMK2114h",
  "key3": "5t2bTWBYdEk2CABaxt9dMVAnittzmhv1XvFsZ6W8gKhDnWobrscKPtpu74orEQuXacW8J52mRwYFTkhJmHd3tafA",
  "key4": "28LKhjVBD934WLWcnhMukjc6LxbYm3sKuuyDVDycS1xhbLc8V1ceMnw1D2WcYACKEvcuVUxVBDpqHhauFgzzzRQn",
  "key5": "XCzisMQ5z9Rv5Pazs14bHD3X81TaEU8TBeQ6V2nzSVaFpWxTstAK7LSgMdR4LdRhcZctZc4bYavdNM84BjyteXw",
  "key6": "2pjB63op8BrxQ7JQZo8PkYJJXhD1WidEUK27c99X8c3kVkuuGhAqb6jZmEaqdhqthDP8Kji2KgvJMY8hgvexhfhk",
  "key7": "3nUKyk5RCTjSmPGgZYSjQ2nZmy3597etbozudbc5C3jVJb6XaoMvEtL6HEEBmEroPkZkjawqviPoWvNcys8vqpQY",
  "key8": "5kyYTMKmFD8ctctbGaMzJUhG45r32NMun8UL3UMB37TK4EoLaXVrzsRKXQPV8F77cUsB5GP67kqCnAXwuHx65na8",
  "key9": "2Uza7T1gA8eKNBDsJfAYPxBEY2D1qBXb55k2sXbPphxS84ATSLW6KdAFfVFkt17d4dUJQYexeeUWTbAnT2gKpRe1",
  "key10": "ANPg3fDzB5W2CjcxGwQA3HwLTHx4CVwMQSSq1ai2RhueDdDCcRtpDCPmhJinJFDoCeNzoHzMyrYUMfNQj9vL7EK",
  "key11": "w5ALcyN2KHv5jL37gZo89g2knaqf12AzvQv155oU3VyG6cKViNqj1NxiCGE8Zz5MF5actQhMKpzC1qXxNKXwLMj",
  "key12": "EzvoEAhPP9GpkuGfWfsn1ZU79nJ3ZFcmDBoS3DJDun3u4eU3WxpmsYPVorbhXbsv7d5neA9yn2s8xQEAELnVx94",
  "key13": "3kKzyQ2f7ibBSi1yxeATCrELGowBQhWsL8qEc9Q8gkjt34twaGecRYtHm2o5agVkBqu4S9sPNzuFhPbRDVZB7NSi",
  "key14": "4yPQzV8VxPjKPMfaepPMw89HKFUgQ2Jq5tpUm6SRX8A6cuSEQRnPa5xjc9WSuMGKNmqCxj1Y4PnCtgXUYbA8nVW2",
  "key15": "2xoe17eNQhJXsGBA3aLXTbWyeu9rPZBCWsMy68R2y47u6j1yvDCMtTe1fzCXNaF7Xo6UjQi5n5FahtU7EY5k4t2u",
  "key16": "2S7t8ZiVppyAatv9fRNbuBjFDcrqLZRdx7xnrQVTeSwURXiPMd8VpifnuCMVZ2g4YA46XDLZUE6KyJfi6j9uQAK2",
  "key17": "P9kvPvwtGnBgRrRSBTAQnJP9b4ftETpMfq6MVFz1Ch74PUaABDeN9MhYTWbcm7kwvFaAZniimq75Rm6V9omUV6i",
  "key18": "5exNyiggSzebH7Vw4XuGdWTJcpXY4P3NN57fwFBezsUr1B3UtoDcWroGMTLYMtECeAwxKCTbWw7x68ewV3kZo1Pz",
  "key19": "ViggfhYCusia3tGnFRWbQijiKCepyzoAZdJGCweBhdHzdzubYFHzxbunmqPRTqkjJbKVZvew3CGEZ3ZyagVU47D",
  "key20": "2pro2a2LuNcdG8ceKftRpquZbiSihpBQoYgtWBHeLG2H7j1BrjcMVCR65MJLnhDUxxvQTdQoThdHpvuyR6To2igu",
  "key21": "2di9u4gP5jnyzJxNHAjvQZuHWspAXGmGtNVLgBYJuukq1fzAaLFu7ve6qXuNzziKYhVZb3c6UAEQSCSb93pgoTkx",
  "key22": "DDm4pgENunQwDAZpSxZB4nUuqHSM8Zw1BnhcoEwrcUQP9Lm9t4yj9pSinxfsUHhdJBWLPGyursEUcxN4A8qb4p9",
  "key23": "4XVZftNYbim3h7KQJqspYBd19tjWi1KfSAuq6mx5VHzQVrUJozVxyEtCyhdoW3yGMZccCzrPU4WuECzbjHGR8CdZ",
  "key24": "5VPos8gkta6FSKicLwoKk39Nwp8wN34anZ3gg43bmaMBrW3wmHAYkrZDDCrFX1EFfSSUo68xX9PHoQCUp3cqxvf3"
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
