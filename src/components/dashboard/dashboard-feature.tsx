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
    "5e2twhi2XSgXpVW54Q4w73dzoAByyg6QMMptX3Qux1mjZpgi76gw8eHo73zBk6odrDeisYHmqVSyvNwvpCNiZEe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbQBJVXU3joovW7b3b2SxRDvv8VEqYJ2475RHxpzazHc8beYS2rLg6xYLHzq43Jt6WjUSx6ZziknvG8NS6rBK32",
  "key1": "6pRStyH8g4h83mZs22S9iFew5Xh3Gti84HxpqvH2kJoPJ3G8goG9f3i3ue2Yw1PrCUpq2iqKE96g9SYYCxVn4KJ",
  "key2": "5r3NcbMNaZQ9H74rTiS5DRVFgzzDuuLnjN2iM4pLh61aExXo3q44L3MRQnZQ42Gp9hX6kytDYrZgFVu1wt1grRsQ",
  "key3": "3RtaWMhtC9C4E1oUstxsxDSPHntGPgnHY9moLgkwEJnmizVmhvydXX4RAoUoVZEDR4Vu1P9zaubLCnWCzyBRcL1C",
  "key4": "44MMtjC4zUE8ub1vwWiub6bJkEpmd2ahadTcbFYzRjT8ECgF6hwDK7BAwzhupadajHyVxVFhboWU2Wekq9wqZCkE",
  "key5": "2nxQJUFywGGNxkQ4DA6431Ab12DYvUjrWEagjfKa1hC46kdgtyvvZE5FyE8EwQRmu7TYa7Cufo3yrrXxaRLB6cd7",
  "key6": "5c7qfAX8ZYdZs7ZDD96Xu3gQSKnEtH1S6Xzevk8puBc3fpHEMfsFBW8RDeLDS4rzpmzEQmjzr7q6QzbQ9pC7gwQ8",
  "key7": "4RRpYFRNV6pmCWUGgaeS8Pa1Py2zr3pkgJ8At5nD57ictB6rPwafwU7WaS9b7QbDVEwWjimLWWWNPJWAWeBo6qZj",
  "key8": "5yf7GcupE24bvqmuGQcghMtVa4R7FYhtoTuiGVXf5Mhdmm1RK7NqUwbXo5nwu8MNnnWAijSvBbn2BXrxXKA2z2L",
  "key9": "2Z7Tn6XR6pKL9FYk6VxxRwJNY4afEf21cmgqNNkWXzPvpne3aHpnLLjgpB8PfyugANGDLrJHQxRGmzLTzV5FQYJq",
  "key10": "mS4rMH9L1pzyuqNjs1aD9QJm8sK2VeUgCPqPtaJjNZht2eX6My39CkFtqa75bQTHLF5uU2tGCCDU18XzwfaFz5H",
  "key11": "4KdVyC45wZwJYpAMRG7yJU3thYATAxmDcvj2K9YnbJibiwTiWjF4bzh7gxZu1FkKbjrD9SbaZeFyZCzgB8fDwZ26",
  "key12": "7VkjDqqggLwc87F1UfGY5P8iPzEr9bYaB9tcBVgttqUqSSvDkou3ZSqRPhYQUbfLbQc9wCsD5oU1i65VqNRmDFw",
  "key13": "2Dnv4hAhydinYaoQuKebP3YcHwAtrkxjCdZ3yTKsP1ko3oLfMVHr41bPqJ8JP2QphU7YW6fGSBpZ9NbRBY2t7CB1",
  "key14": "4rzgo7syPpCfNE5suhM2TYwW7QDHF8fS3u9UMdZQHnoPHCMko9iGfVjd6b1zbGkXF8GoKsQmETDJDkR29U4pa4LB",
  "key15": "4ueRiJgp67UGVUp7MaC7UvmPvzpJMDeN3JtEdmKxvQGq1K7EGozQaUtbK4VimT4uwHJmoCw4u5N2QLAgmYCntuDz",
  "key16": "L2HdkiTjFmWhT6efsXofRZgu3vqJRS9sM4XkCWspbvMoGkdGVvLgyuVPi7SRhcreMqTiFG2XkLmwfmUxHxkwQ7A",
  "key17": "4wqHFnv8KSApK6B6eT6G8uce74bVJVPME1hAUKpsPjf6sr65TiMrkKgExBzLip4sz6hMS1tQx1EzVnnipvKZXX95",
  "key18": "n9W23UHrCnuSeNhXCbobZ8iAwZ9oX71ka14oBL1rvxgRndWamDnM4yhhG8NCJoX9UEsez8RLCTLDUFGzvxWstvF",
  "key19": "VbvixWHMJtUT3WreWW2iKwLMtt83HWxh1zBdYN3R4mfm5q3QjraZjKMPX8R1Pe4BUzGCqZhjt3fCixkYpE4SUgm",
  "key20": "3WVV8diWbkeRvknqWigZUHssTDH5LnGGsRsXEA57VWrTcr9d3wicLJQJzKiQFNAuZMveQX3PH98PLKrSoJEtDCox",
  "key21": "4Qdpvmfv7vYhLjzXPBao4dwfrLvsEmjSXSponR3xTyQg42Jkvs6xWRQDmwAG4yCdgdepXbccvLmHZFREjFS9GvCw",
  "key22": "3xcVvm65zVPu4BpFttC5Ly4s3S58FuC89GJspEnCxA5qehHPMWC8hAjmbwhg2xUEeN778r7boTYXhiem1PC9vaRp",
  "key23": "3tr9qZCeKhUY3M1hCp799TqpQb9mfGpV4cRWAXYD7QkFZg5pmANiYg7MHw6DRQcokYzbay4m1Xk2KvgLXgRuGgjw",
  "key24": "4k5PMfVWJyZCnpNBUFNf6Pr5pPfre8TL2JdNXEQ3ktFC9eJbxcs6hSxuq47mXPDjkqMAq248wNy68CFbsPbNFHVc",
  "key25": "65hybkuH8H6nzhUmMTunXiiBt3q5FLh6qCHLmFjzrHQNGiSd3PEgwMFKQeQFQeuvjTUqFraMRtnY4a9SA6Y7Ejaz",
  "key26": "23rwRgPamBPkUtbq3wZ1zqiestZdnxs3hZhxKWMJv99DrPvcvfWDEUrQPjDXgSvSECiRSKsyMfa3Y3eXNH3RQyXA",
  "key27": "2MbKCMaLYXJW1v7Gx38uab5rzW1kWUiY1um7AoJnBHV45rLivz58zmrT2PbrHuSuyXhvfX3aHhrYPHkTQJxo5kYs",
  "key28": "5phm8BpY3DNq8dK2AGS3sNnBp2NtXzPYF6x7Fg5VMqa7MQjtKubwSMwgUSSAjRD8RgxyREf6LRgHRCV8NEPbpGT3",
  "key29": "4V4vaksVEW5Egz3ETp5Xgq8r8jExpRzfGMKaovBs8BhmqrYiSJZY9sxEdLtHgrbqaUdnZubMvQrv7FwU6f4UJ7Jk",
  "key30": "3h43qiUqXbTMzKN8cPhBxcC4XMGUYPyuaT57jJTLi4E4uJvZz2ntXAukMLNqBGHtnD3BuLbG4RS2xahqXF8n2Cu7",
  "key31": "4nZCkbLNYV96otpagKsFKtL7DdoJCTtYNaWfxN3BW5uQN9Z2qRPph8FbHsJGd2EhBkGDhaZswm2YEwoSMAz6g9nL",
  "key32": "4TjKLdp5y9vRm8Hy6NNwshbezP1XPVXiouHdqJM4BYwfxqAyyns1uCvMUQ9Y8u6cQPUcRERTDAfJ1kUm4eueRKSb"
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
