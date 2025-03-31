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
    "4yLWVpvZvYkKUQRx1dkrpmgD5KyA2R4viWLzuF6dLmLHXGGHr5ppjzqH2HZ13dG7z3q8iT8es8LdYXEBRMANNqte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPvS4ALzCdGrJLbA9wCgN4DkfZMS4GznbMoLr7EXnWAezVe45ZCKPzNctrtU8emsy8VSHAdiCADibfD5CBj9xah",
  "key1": "2cWgexCG1dXVTr3fdrVVjB47sTiYz61yAYRspHgcoT6KSpKahHZQnHKJwFb1m4kyPRzmpb8vz2iAz7ghstdMuavg",
  "key2": "29j6JKLA32Rg99JBZm9Ms4R3u1HiHbw2byoXoBZPfmnPpmxnac6SexuMiycqVBtgrGGX4cY7LiQAB4fr72jPvhNj",
  "key3": "cTks8KKzod4uFFNUUYR2FKaMyqaSCHVYiEnBBjcdCe14umRtS129FhRDjCjwmvt9K2xrxST3jhNFgMMWCt5sg3L",
  "key4": "38C6iyojjpZ48zgP2TByVQbKZ96P2bnjnfaf3UxZxbsKs9m5qUeyy5BBYmJoqM9uMnKCUHxsiBab3kvypmXkgfe4",
  "key5": "3BC6LifScnS5h4kd6p3MontsMA2be9r2eNdxpuS2xcLLpwcqzpqCHjaCLVQcZXhAB9wL7Aq3vYspywDHTkZJkz4T",
  "key6": "2cWojbvQbHbm4ahFjnMdEhbULo5RPvqqQJ9vLTprnfVpWRRN1PpPy8KNthPwuezS6AWdZKcj3Gbm2m1Hpd3FgLWW",
  "key7": "5NxjXQAmesZ1F4Ly3itjDyACCpidfwycD31jatLDsknnkRQoTdpiBkP44JJNdP4Ppi4gym44e8gK5d7KjQsS8ZkY",
  "key8": "4GDVbMccGTKSzgyKtAEkbHtV8ZVTDCwCVEYrC2mZGZYLmgAo78Weytbh1grQoDLMMPGxNggrQwMqSS7KmzBbRJCZ",
  "key9": "22MP3T2VKwL9ANCCMhsXCPb26Mcz488fGKEocHYarJXo4iTeaaW4bAjsMj3YUbmnGes1QFg2554p4o2qHRmnbiah",
  "key10": "338DpNkw1rBXfGn16UQS3mb5Zayfw79BGN4B1guTsbC9LCzgKPQvJ56mPeK6sButELabsuTbUuK5jB1vHTChSquh",
  "key11": "5DGL7fprNsZKyLbKsa7Yd9yWQEzJFXa7gUNozZq6aP8VWtGbUXmiCE4vW7pSCXSmxHeQkU7mxKGWSeMvtGAnwqsa",
  "key12": "5g9tSt4yznqbBN5Uok4PZMU2xSidWPfYcZWBJ4EhRAFhwLr3RLPt4fXAm568ndkGhWaMQRfNL8F5Z6Wwjbk554fZ",
  "key13": "51BAnMdAjyyDcYtAUdjJdt3n93jJTavkebUWnZxgvZGJJmH7uDMwUw9s3oHafq7s4YZKGzbb4Q634VYW2QuWrxGr",
  "key14": "4dFNkNPFEEFMxPQLNgPa4XpuhXct2faCZRrUioDun52HUKF4nHnn3CPCGzX72ktTr5Y4fGpwhXeN8z1tiU2Wtdu3",
  "key15": "2vJjQdXGnSeLtcNqeUzMDHbZmx1XAty8jM2CHvzEYNWit1bgapfpGJfiqjy4n88MdN2v6VmxFSGivy13vNgnVN3t",
  "key16": "5yDGM6GLDUU6M7ge1uYPC64TtZRx4DfUaZ7Qyjtr1W9ybXprD2HSNhJzMfU83Q5Qp5TSy6oimpxmSmycQCsgAf2c",
  "key17": "4xDiJLTwrLEGvD6eNyJzG3qzdKia4YhLFRM559dsrXPcEaSTBLJqJZF4vawHwkw8r68KdmxF3NJeEoD75TirXoC2",
  "key18": "37cJksrDsHazujqD8M1c9mk6RnBHK9pTBz1VMmU8chA4ZHqpTszxjbdTkKE6ivf3ygRGZHchC9XXdw7WpSxTke3u",
  "key19": "2TiANMHtt2mijqRoFBMCGCwp8nsYUGUjiJJK9yoSrkz6VMqafGT7VXjVx6ixBLbas2kFhFxTM1yfnnUR8GDgeush",
  "key20": "2wWGSPqjbwFxazndjutzwzw774h2huyHGTGALTCShSZ6Wnun1r78WdZM8TPFRoqy6CAK6zGWPCnzsGvLiduYJhab",
  "key21": "56XHQngaCocUBXATFthuWr4JQsgyHWmN5vn8jmJ5iW5DBeeZ6zR4ChjSyQh6cUsPXxi1VRZFxnHi2y5ABf6hzTgR",
  "key22": "FAWyM5Ez7d1qJhAgLseLQcqAqAj2hZnUkGPdggXx5QaZ4BFKBAq7nYxuScj5rqHx5a2N3Ha7bXxt8V9ugLtGXmG",
  "key23": "MSeEeVuX5YnjWBavFMQGiJYxf1SydjAJj6NktadDoL6gDR11nry2tML4PK8MqzPYih8A7Vfv9uQkgxM35a3JDLi",
  "key24": "4rQuNutmhLmwu73KxqJzhVEQkaXddgLoqBKFSwzHq7soHUcm8S1WYYMn5EEg5iz97jxoSFC89JpWt7TtnTi8sEKV",
  "key25": "2wYcXLhPPeWWnPFmVebLYR1VZCtoKVm3jBuYEqXZ45D6KNTDWLCcZo848qY3YpnDpYXgnzi8A4N8cNQyTMVZnphE"
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
