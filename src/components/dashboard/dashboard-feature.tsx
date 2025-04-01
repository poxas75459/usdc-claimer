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
    "2mgquMmMbv1Q9r4ttCo8ypg3FXVjxZKg3sdEyEP2FBANoh4RXRCLWPLTnkDDfKKs6tXqEPEyBNLsru5gVehYgD9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2EbVek4uqz3zow85aDvhkussbgRgzxdtxVKpzHeiYZYP7rvqUw969WMF255yBBsNFW5Je3Jo2Dxui8tGZKFwQM",
  "key1": "4ChCJ69mYupPQsMK4TigspmnQB4uggW14Ma3A1N5K452TX4JhYmBdkv2g4MkBhwT3yJGVw233T8Gb5ficVLUS7bt",
  "key2": "45rXgRfSbat6TQjq4DKdivBasVrMpCFCdLrNoi7T9rECwhspf2WSNM2BeCjSh4Nd9HGtx142morQRkC1Ar429J3D",
  "key3": "3e731msf7P6GAD1GHveLkMAdHK8yPML4UPuRNsU7TUdTfksFNoYxdPK9VaPRkAU8KY886mBBPC7qyYdbhT8EWai",
  "key4": "2Dex8MqdCtkWU18Ttu7HfNsyXPVz5CBiwgoCpK3VhHztUr1xQkCKZqRm3FZDP6oJFkGQcZwX9Eo5TUqn7z89tsTG",
  "key5": "5LadUam8oeW3SHJ2TPT53kWEGLSRZq81DokDNH1VgzUcPFYCNZ5d6gnRH1YWDHPzSWzuqJ8jDxuAqkUnnBA7gJTM",
  "key6": "k6jM1JpFdnDzc4HAScg1a4M7egAYUJScMavs9Piddtjt7WRB13pXS94qU9gNGt47NhadmKU9BGk26TuhcoM1GRb",
  "key7": "5ikmMdkEEPPpfwJ4Q13yR9HVGAsGYJEphNT3KEnUfy9vvHFsNkP8EQNU84GGVD2oPKdmffU4MoXgK7uxrjk6vLNz",
  "key8": "5825SfS3oYe8nF9nLyR4o6gE48owSygdYfCXW4VN5XWvnqTpMcWZDHthdVgAcXt2pZABpcvjNTWcc3e76kNUN9eR",
  "key9": "vZpRGVipWi8kNxcAy8mHAz5WdgktaznkjXhJL55wbUEKwhRim9VJeo2Njc4wvrM8Xx5aHSxEWso6Xxpf7f3gvcC",
  "key10": "659bwFsEph47yPiHZ9ZJVM3HMymixZZdf3npWKXEbcudmp87fcNUhMSQez7U5zMo6nPLQuxHkhVyU2VpFK8dAZGM",
  "key11": "3XQWH8LT7YvjSRLhtEuHoNheL7UUre5XYCikFEdLgPZz7h37ZdqV9pHFcdbu8XErReTSzVhcBEsknsotbxKdjxpg",
  "key12": "281NJSHpKYjJLtNCgj6jeqgdhKrf5szSbSsY1wYpEzAbELGamd4ynn4h8KUYzUvc4urPq5nPCiJsrBdDyKmuB8zp",
  "key13": "YGyAmgQ4VRdJPfm35r2tFJXtqRMP7URCoGNVqKnP1DPvqEC54kF6yLBLXJjFVhj5huEaYXppRh2wqENJkR1f9Ne",
  "key14": "3ye1FZkWr2Bs3AWueRtwwAQ5mJCiM5Y4qqSMpyKgz6xUH1adxG8MjJ8k227fRQ9UkCZc9X3jGjSzJZ2EUrux1PXk",
  "key15": "6gYiJmat1eZoxnDBrfMoCXHk9nysrntUh56gJz3Pt9ireMiAAD9K3GgyY9nFYJ27KasqDe2aFghengRpuKke5EW",
  "key16": "3kLFMCrhnq6FquMTC75CVYC3wAVkjJj76eitUNwLjdPA8iaYFRasbSpDiNFH8tPYChN46NHtwHJUmLCiFh6o8Ubt",
  "key17": "3xpn9BC1vgmTntAoJWaWotVhoo25Q7sJyVceYnufkdqzQMrueC37Rqv3MLMguqot7nHtpmfqBDUC8Tfenvn5Kfkk",
  "key18": "4e4p9bC1WaRCghVg9Vr1UqfpaAViP2dYtKdxs2jgqTVqCwxciXVa4ckiLi44JJo4iYVMTRzdwBvrYEBhv1YsGhYp",
  "key19": "dB4ArrSEKVYt3xHFmAb2Lr8MoZvAApc8my8pkSaxmEZ2QRiYeq5hNtJxCs8m88kwaB4uiRRedRpEx5zrcg3vkT5",
  "key20": "35nazui4M85vsW2757vVADudhknnprXu8tBPShTry7GpG4ic4pTsryNwoVzktaQENp53pzicCu6fqCywhJZadAT1",
  "key21": "5T3cWYZeTGh821Uz8NYHqwjrVfnCw2X8w5rYfF4DP4zPnUxHdRhc6iLr7QNLvghmP1WZLfcLZJ7v7fKGadGzAsFZ",
  "key22": "3s2Jdc7SwjCehJ19ioXdJc98f38TpNjuuobYZD4F2XKeQGFjWHEkcB1h1PsNJYcc3MDNWBAr7Tej7Sun83gar7wj",
  "key23": "w3qQ1WiiJjkhQbQ9nWbUzmgrmKQQG84vJRxPVzntEfEamkuc39JLLNLBzyhK75eC4LkCzhssBKJPnVVu8p3t1k1",
  "key24": "2UwhFJ31ZT8Ku3ioGMBSxR791SKZiSRBDL3vL79MEgHfvR7w8iF8j31nHSfhKqbqMSdWntX6w754njWLNvwTbszS",
  "key25": "3m1aiyCb1dpoUN3rmS8XdqLLSByq1jaGZBE5B993otRBkFRwxWPiYJqV5szuvmMj8qSkRQ8AAo9JoDtMsGyRW3Ra",
  "key26": "2QpvxL1ed9rG2KzqcpTBF1F4Bc3RKhvqNTSfzph9eyCRbLcxEzi9kjufDZEAHNYxZmUj4mhSjcqphpvKJao7oVR3",
  "key27": "2VgksGmZ3BrJD44PP5usys32ShNdhk2s7CibVBJ4U1rcydnZs5NjzQDskc4HEQ2hoe3kstWnnVhZhrDSzWue4h41",
  "key28": "4sK1U1k9mS4dh2stXApNCDHDfDLspo8gRNp4kmA4DDe2XMaBxzkUPsMboxaBfDn5uNDzTvbLaDDic6obAAkbpmDD",
  "key29": "CxYo7MBqAb2qsKvmLZXZPXwgZPPetav2n83BYqDCNPy8uZdEvYcmD2oVZ8konFVDPufiWN8mrppsLGJ9ReqsjUT",
  "key30": "3aibE7Ujunqsdb9hnyMJ4uUf2WkNp6JQXXUMBNXrgcveeUthJWqz2iknJz7H3UBp6CunR6nnwxQRZUeeMejHEaTq",
  "key31": "44qpFGfPgRMRSLW5kpZZjcEQRS5n3PZ4XXb7RnUtbMiiL7CBtgA2zStneucmFFgNNt9QSpHpr1w6eYWTv1SZu62R",
  "key32": "pC84bjU7NKXYRCtQX7ruXaaoJ3D8wPBJ8XRKM7JwuXUVuqsEmibtEMN6kevkCCbuEeDy5LfnBkfEwpihWQ357bt",
  "key33": "4pGz4cdTDe4pDtF3GdGeL7ecvtL1uQo8HLrPyJtTrWVbvgSA6o5Rz2jgo1mLS32ok65XEw3h5W9KcMrJQVRjwvr9",
  "key34": "M5EcBiaanAWaJmr4kRt1MV2wkMuDVnR2ayaKffy7mtTK1sw3TEZTY5M3BLsaqyJ36RLqMNaxKuuL3chtsCMPUwb",
  "key35": "65gd3yuZCa7cVyyTXhD2FxQExBkgyvkQn2Nad9fRQWTtGpwSRioaN9aZLVBHAbkKQCYqtdL63134pFn5X3Y9tjdS",
  "key36": "S5YSqmu1MKqPidjQEk9sG6SwbRF4y7tp1nsARpMRs13uNqpAmDEnxvhh1LjZizoYAs4FAYNmxVWPPCK6MtfGngM",
  "key37": "7pCnwGi7LEUMxixztUvQhthRpqRZhTwUwBjura6Rs5gSfJ7SdmNTefboRt8gYQqePnBLm1WWMY11aVfDszjPitG",
  "key38": "w5HcqWyXNrT7ErPZkaMQua6NEzKUvEHVf1TKGCEvz3ngG5TrxQ33AayXCJSdcspBHVXAFwxm4qed1z2rydBw4qu",
  "key39": "21ErjisguMj2J4uJDJoEMa6qmZbf9E3s5xyDmqBJ8ZpPXTNRJwwEVmfWkU2p6tgA2VqZ2KWhZ3SWtmJMrTbSDHHF",
  "key40": "2zZJVwjJoVJrapP9jtyXP83XTzdbLK5myiyfmYYjjdshcLvMyBV6tjQHE1REX4pUVjsxHVUbayKpo2Aq7p8hMy1r",
  "key41": "fkEQTT3SXN6YxQzNZVCUt69waFxxHbXYrCuQtCMcFsYdeveDrhJvo16WFL2paojycJFDLAXCzPhQ2sVzbkZiQ6M",
  "key42": "GiXCqxU31pMYqNygP4Y7kiXAdHsVhFYwY8e6JJH6UdtA6YA2K3SiFB6ddfeUDTBE7BnxMXgozcZxCtcsCrphLha"
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
