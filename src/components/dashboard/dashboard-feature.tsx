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
    "36MWaTar9QaUgZWujsCkatuANhoynY7K3eAENfpDRtwVnqpJV3fG2DGrjQcee8mf4yDoAZBRhJ6zZVUccBEAv77R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgrwDXHhSBWxpuvvbywKHyBxBc7tNZJRxPAC6FKEgLWNmwNHjGpbNDAQzAxfvUVtmw6GqSHHKgQTvKAvUSDtfrp",
  "key1": "5mspZjC4ksNYVXKBGD2f2xyu1bMY2UDWzXWEMYjPxxCDDCYihmRHKZNyzZN4YwM2ZkpDP2vcbPMeLuszjBZT2jDz",
  "key2": "2mkwArc2z9YQcfcGfNxijZui6jJHG3eNpo7Pb8TnwtV7iHSyfVTJSJQatMPvXNwTQMhmE7kRKmvS475i16TFtG5u",
  "key3": "4o9vjwVMkNV9kaQoTK3f3Ay5yLghvenenPg3CGGn2iVEt5rpHGGxByuGnNYz2dsVFPNZZAykoXftMPFgTY935KQJ",
  "key4": "58bxRCYPdaaccDdZ7eoubjynvELu9JkZDSeNRCegjqbFGjatF9oTtVMG4nW8xJNS8aYsXk112D2Sdk2FDV1ePjc7",
  "key5": "hCx5zLXnZHxJEqHRRr3LkAmkfZpy9MBVJNFeskUEhiJ1ZxRF4sFdKpJbEvxxiaZmZCdEfQyzx7zVyjFjtHBW8TZ",
  "key6": "3w1xZCg1vxzPoDi6CndxcPd6zWwZaL9KTHMjB8uRA3p1NqfzoUx4gGxdspqYSGrzEY1hhRCfNVuvTjoVchg2jJBS",
  "key7": "5tK1DP7FZKxeUWLYcvrAFKYaZxYSkBcD15tvNhPKEkwAa7oW9q9PDkKYQ3MyFzALdiNxsiTnB6zVrC3GZ9DeG4S9",
  "key8": "6311HNG8YiN4rvTRGJRtRSaQYFGCBPgigR1Khw36hR3NDvY3dAAvEDSPau8ubLHcretqCteUwCCGatNjpp8eciVy",
  "key9": "2mRvydQ7EWchVb4VkTYrhW2rZeCD2k7LNMagkDQPcpU8b6gs6wZSHytpgaEvTLx2UpAxXkppZm1x2TwC2bxoU3Np",
  "key10": "7gLj1AMQvTKWd8QRDUk98UyJhCF2VBBApdEJXUg8Xc2ZQVvJXXKhBw7ne3FbR3gjJNx5mNbj1JrnP3UUBApgrap",
  "key11": "2TuCaKHp6gRF9xp3ufU3JHzqP3Sd1azHJkfBY1QbTbjEwNZ5v4joQsJibLMTUzmMaccJF44DARiQid1QvBWPxv2y",
  "key12": "4weKPqPn6R88DYpdS9WWE2hFfV5iY9i7TEGh2vtv25MdHHPcfdiwzkSJse3hsqikRZfwZUSyqoU2sRq3c4L9uNoM",
  "key13": "2EFXpHAp6jxkCeWCsPcQX8GvWraZnTtVYNd5384LTvzNJqjLaqUDhyiyHesvAofQ3atRAcCpt4NHXCKWAmABDxsZ",
  "key14": "gGeXHyZVgq3Uc8eTdUmFDMXktkxQVimCACqcL3drr3ndFZqdeEto7wEfNQCBidWck7t2fr5DwWNSBPTuwDZL3wB",
  "key15": "3dciwB7KwqD47C3wDRVqn5unesnL26VwruQTykDSAH9a5JwBmXisBZSCyGk2YP2NUkPid7CBga7pYamw9CwQ5zcf",
  "key16": "49Uucd3XnizBPpSuR7ckmSoT5XF1Qv4NjUzjBbEURNVUV3dqMnmRDZxPuZtU6k2xPkdM7AgdscatBug886SvC27a",
  "key17": "57CB8eEaMCQ36SHTtuuNsj5YJb3ggm7AsR7pZb9N8QaTPm81tpSxFSEr7Qz5VLkZ17xUMeomQB6VGhsb5Qd4ZKRo",
  "key18": "2PGLQqVmPKjbGm4273Xr8xmtF1T5hTXyMKjojXwyLRJQEoLzMdnmdenTcdgYvkxfuCubDiALHRMf6p9M4qcWAmqq",
  "key19": "3iKofPyn7wa4AWcszvunCvx7HPkRHKNpnT3uLYkPR46i51iYMd68uenYQ2TDuS4BqDVCwLr5cGDM98yDRcpaMT2n",
  "key20": "sxh1ZM9eFm7LnyRBrchP9am2WhJQz8AYkb29VqAcbmGpr89Ea6XFzVKzY2KWHa6w5dzSZDaYKy3kh92mK8gPhN4",
  "key21": "5T7XNmPMx7316CZ7gLgdDwBwJ6Gkbfm7PEVesRV7AEZ36TdEvN7PbEQvHDSQwD749aPfxU7JNh3rLrBtJHWMfg6X",
  "key22": "4WwNU1bNRrRUSTippy3ewMkVJcCpthC5QhnswDk3gYCTtFVo6fpPsfzKMbE6ZoZmj5RDVjLe67SKLQrJT1nk339w",
  "key23": "5s5rhRnh7Pgk7mwGom22PcVbGjEuJ7bw1DSXVjwa81jVurg3FsTRwB7m2Am84k2JTbAtici3avXF1EjC4WM9FMJq",
  "key24": "64kjYH8dPbbFaNbfSQ1AVvd4uMvRCrQ4etGfpo2z3NFMf1ctiFsaUVxB8wtigNC1PokYYqko3WMTKPC4rZVQaVJR",
  "key25": "4HbSCPHRvTVkPdC94AntxmArjyVq2LQpqve5hHXtEReQTGwRmkAdqWhAc9E6fXdjKW3fVdmcSp9kWjC3ZYAQjddq",
  "key26": "4tiRYkB1TfMtH8MXBiRQkNVKtAgo2HZqD8h12ixMQjKiHaTc42ujejMz5raHwSdvRfA3nb7SGpkdwmd6K8SssELm",
  "key27": "23UxNA7R3jivs1HbpgNjWDe9dV7YHfQfcTtAqyKjpiZqCBm4NAXijkz5yooS1ZJSjGzKzNd5QqxomNJVZQNqqTox",
  "key28": "zgVYJP4gkBpTHtFKaMSDjBHrfdxvbxokDi43jZB5e8QukeAwy1MU3XFjQNzU1B8ZPdp1v1s8z8hEWsVfm3xbddZ",
  "key29": "5v8VEEMYk9fT3hDoP8CpVtJMhWrnG2xDvCxdxEGdHGCff2zhBabHun3BXGV9nsF4mDwoxH3ooN9LqH3jb8cNBbSb"
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
