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
    "4GFKZz2VTmYWyowhp4H5eDazW7pr9h9EJteNWTdKN8Uv3Xs93p7mev4LJzgTK8JyVmpPXkyAu8ekv9Fa7hzG3TD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yR21ftGeXucwnJ9ZAWdTZyfdjAsqAXHX9aNEC1Mh2TtkdG61VLdFBzZEo9rpWL5guamAtWRLXtAC7xCoSMtJtiq",
  "key1": "5AbcsPZtkfsh2ZUDFY8M4QM14kPhewACS3HH5nzp9pZ7B8WMsvLyeymq5pSNoUz8vjg7V5BrYf24p4HradBDfRG9",
  "key2": "jiJAfxrTScVTD4fzNXXQH3QUc146q6btx8PbhgLv5xJjv7YYqtBrvJ2sQVeEvZeJvBQ2pMByAq1h1Y9XTANNxbd",
  "key3": "Qp4E2kkeDACwU5XrZNhzhbNU6VNZjFDKaR7a4NY1geznTSvryk5MxZ9KRnLeaUmWFT3dnWEadcLUFEUHSXPytv9",
  "key4": "WfQGtf79xFEE5QbirLV7bnWyyCeGDj7W3BKT2rSr8QE5N4qefKBKNLjh9Vv79w3pC4zQTBCsEUrbjbaPFCxXypr",
  "key5": "BarNNNktv34GNq2J7S2tNuyUdpbnw72Djv82BaSthLSfQ3DQDv6a1TQoT9enxZieP1jT7jntgpsW4SFBqXQtEvw",
  "key6": "3PLFegKz193zVbxjeQJzMuJpU6QDJySosHodTMG4hDcVgyaz8VV95TjMTCmChFYkJKhTc1eF7ugNNA11HXAypAzg",
  "key7": "4FiKDzRHgJ5fxB3qNNPuCzFNJrBiqL4KUtLtwECK9Jz8W4b7Tp7a9t8TckBDjRqi7MGPnSeYrDED6qnLkc4DK449",
  "key8": "BWZT5KfZSxCedREsZzrnSuHiRHayFjbbbWZnnzAQzjvtwmAkW6W7Dp7TDknVgj29rm48XuiYb5XvpP4yYEPjZfU",
  "key9": "2xcY1ZJTwxLo1m2nEcta3VBBSZYmo3T7ouQ6bqg2i6vi6xAmGMaFbEb1spTMPfcphtVzNnQqetbhtBMMPfczLCT3",
  "key10": "2xxN2FnVrK6QABmAdhMSAWkwgoMtg3u2sLGfkxGxrdAsEAjtZGwonEBQJBip57nePNDa75qarDWo5BgyfbxE9C5G",
  "key11": "5eEufREEKMbcqc29eSZN8mZk4wLoP9CjUdvWkk1QgNETnPx61GLTBPxNByoC1oL2t25paZdnxd32vPaas8SH6SmV",
  "key12": "5RtdySiCK3m958CndTE1MZKjHcCCNVEKtuzhTZ2JJbD2UeXH618rBRCTyyyqGoGKqzVandi3tREZJUKrenbFJ7cB",
  "key13": "4GcRdTRcDNS8KkYNhhFDPojktNsk9e1KNVHxarN8AQdnoAa6nqzAwpsypeDQygmdeJxSfxu4kSqVjEbbYhg4JuVY",
  "key14": "2BHGE2sCf9x5f5R2bKHTgxCassYrmpnAzAqWd6o2RjopG7koemB9EYdNTKYYgJ4arbaqizjF24CRoeg9eumddjfq",
  "key15": "4kkFFTvTbya1DGAaJkeEvoZxY7LbMm4NfU9untApE68DuV9SwbpGh9VvveqNGw4xfxTDGcWciHiwWqfZqXrJcFom",
  "key16": "5ZP6i3ArqjZzgx8CYDXRZvtNRSjNsaKhiNHWmTq69CamMjQQMm43mv7Hao5VzKd4gLeBhr3breE72BqCZdbeCA1f",
  "key17": "53YpCkoTSENkboywXdrTyh8Ua4Naz6V18RkTFfBnGaNwioQkYE1KZNKjAx3MAbY16TxmxhfdL5BfmdqcK9gEqjG3",
  "key18": "5u5Wu9Y8tA7ZBRdPxNmkSqfzoCx97Rkk8F7QU7g9ZvFQCiL6nTD49SvYUVHvsdTifaKKmTopkfHJqGNray3yAeBR",
  "key19": "4Xq6X5w7Jbqsu48Jar9oFM4THjiFMbN8c1z5hWTMc5ve31EjfeFdLZGmjeiNKXQK33vJXp21vNUwDY1PRKoNzJQq",
  "key20": "2LeuShzgoHWhApKn49uj8UzCbz6hi7921ovJNSmkWJNsxwYq9zFMTvGaJUPYmjDmnPopic59ZKqEQrBg3cyHrm8C",
  "key21": "2HDvGdTrD2EYmvxFsRSurC4rDeAQozSgNS9oALJjNL7GcxHUFKhCsNqwdZqxRXGix1Dm2R4DNDY2vMzt7WJYNFv6",
  "key22": "2Z7coru1Lpc7gZyJeMz3ETAp2xdTjd4p5RmkxcHGJfn7nQjqffjh1sj9y5kVef8qpWgCw8fexUFnG9TWnFjhSgwt",
  "key23": "4j4iVTARzxrhcDrTFfQjDR44shZX7wAY6qeYgLX7j2KRMmpzEKjwQefN2JM4x9GKm5xurbmKu7rjgGnRBUKJK8Np",
  "key24": "3syGYi77XLZYPXx8T31EF3bxhb5YmirxZPLSm14LT9u2ddV5LA5XuYeLqTZ7myhKi7Xu3r4TArncmkctL8RnhWgf",
  "key25": "Xg2hbNFgsvfSN8vFYmnmmFH6SG6zbngjb8uckmBAU9GNgm5ZpHGmjXgLFFFmnvkXsS6DGiZrNnYAd2NYbHFQeW4",
  "key26": "4wvQZrj55eFHFZena4z23SMptsU32MQudmjTNCb7e8e7UivKruNSKc1rCeY5sXugC1KgAnU3jBerwx2RCLPos9jU",
  "key27": "5gQbYXW8NUM4z99RS3B7H6cno1h3BqTrHp7VVdkXuFSDk5Vtt9UGwBU63StaEuV1zWnd9KTUJ3qf6TdTncJMCf3c",
  "key28": "2rrzBbJdj45s5x142Xd6fouKooSY1tjVw1x1ZsyatYwDj4bnkYSi5aNNLDRP4P8PYz5oS3eg1TbxVdrba586jq6e",
  "key29": "2sF6bR2igrFq5tLyRyF6Qq4bvk5r7Pfiw4iZPbFfCeqT5cr5od84dhdx5rRUyd8Gcm7yzHPoprvqirDsqaszgMD2",
  "key30": "2JgSdF1QAbmqGguHDBGg28WMv4Fky62ybG6JRDcR3yx8DQ9p9kGew6omFt619QYN9TuhwjzkcQvD49wSyN6uVGGD",
  "key31": "aF9vmoooyPQJzwXHc2qqUmWAhQew3oZDV5YrvuWzH3uR1JSVai9HsTzekkDBfaAFetVXDnAPjy8rmKmUSrN4grH",
  "key32": "3Vjv1jS3CtRWPAbXYNLs3mQdbnwvpQjLB78TqaALULdqndJ2WpMbxxUVPv9tazEc2UYXCEYghwpqyGyuxLaguC3q",
  "key33": "b2YpjwiW4exuWEM8kY5gnwxFEcFhp16mCfQUvvBoDj9e8YTdtmPbeM263dCYVJHuXyhfP6xP8sdo2SY6CDf1Y2E",
  "key34": "42sp7t6u5jkQLmPNdyww5UxiX9Jojgd3UcUuwsfVd6qKqipk1k4VSKiLwXmTdx4sDsXLF56EQ7KRAivSVKeTA1Aq"
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
