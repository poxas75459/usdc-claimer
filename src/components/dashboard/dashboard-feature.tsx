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
    "4oQKd2mtrRG8yAcBnc6avcQ98tYvzi1TYoABw1Vo2EZfPqqK45ccB4PBXmfTiFCEUFV1joZv5Wbq9CnRKhZ89zZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UowSLpuheViTJxPPCMPnD1wY2La29Ffds5t6RBZ535ef6NKk41xFyw4Ef8PemZXjXpL648TpvVLmTQy9xu9A1GJ",
  "key1": "3VxTPyvqPBGdXvppGaRhYzrePUZwceAinhVzhUPfku5JEecxZ3ywo74JMa37gg5LCGVzkgmq828G5FmiczPG5BiG",
  "key2": "47AKR6YCT58ShmmMiRsPu7JqpfpkLxm7DTf3aiGPt6HDiRJkBpwcwDN7Y4GrPviEvEsUCCUCKUpgXqrxQPRYxu9A",
  "key3": "3RgVyADXLnFuKttbbM7SUxSPbJ5LuFm2KGxi83ztivnbh1ft1DPTpmQVTKN7yf5mzL2YJdpZZ1DkBxtGck84n4LK",
  "key4": "2w7RMsBpKarcj2nTFAdzDKj2NmsapKFptwzKa2R6o7xySrYyLdmzu75H3Qsm73rx1LGPZCUQDGZKYUYDtHSnT85Y",
  "key5": "36Yp9Ep8cMPTPwLmARSoMmafH6z8cBrn2Q3nis5P6AnerK1v4mDUEqWn2b84u3DtqcNc7KwkooC3b3ahDcmSMWzd",
  "key6": "5FHVhx6kfx2SYbM3RpSAA5WhQ7oNwToczXV95L2n7C54w7iwTLNc2ggv5h9a3jJsNhB3wNdRKKJG6c84DonUq4m7",
  "key7": "2j3gGX1KBvKGEaeKpxxPZEFoXzVmoUwxPLUTFJb4xggTHCa1DgtaRbGraAefFUnHzX798DhLboeLNYkFo6Gr3Rfu",
  "key8": "KpjASChtqWHmBQ7BUgPNurGw13YTqMdyxwjhEE96V3228BVEXz6CHJq57YRURSyLDmVVHKgoivFWd86WBEkz4du",
  "key9": "5DWBCkeZE58UY5QtghnJvozHdADEA9omVj5M9gYrdFZ8ZWnTws4FUHqrGDk6fFokbzHQ9EHQvNNtWGSqkuRgUBxZ",
  "key10": "D9U7GUKMbPhka78t2guzojaCMsDFxxT2MKDwXxnNJKF31iEdP2gEsX6FcpNY8p46kbevyd8JyYaATLHrJCgX5z7",
  "key11": "5a8hqv7yBGCUiBg31mScfzA2E7nDAXXszSnNDFPTRceayAFWZ8mPQgknjjpe14oEWwpajAcktpUhe19zywtkktxB",
  "key12": "reNoqdQ9jA8PzuKxDvFdTbDTDkfoF3fyrAckHj6akyeWPZv577cRgoDUJGYF9MB67cgQrLvXCXUDivZNuciFK1W",
  "key13": "3R3229N9LRJfxapAtLiaivPJSXNHyUUtj5jB6H9UaNWiHxt3YY8YT4ocDWwErTXExVyL2TT8hGYSNE4LH1Uk9rCX",
  "key14": "24tTJygSAUgwbrsrDZxuank5ssDPawUV6UPZX1w99dR5WDHQ9R24nFu3AXeUipU7NCC4wUCgr8XPBYuGBeyRhFQ1",
  "key15": "2aJmD4t73Tao8pVa1NSsKYqtv35BPnt8fYjuoGGDAARcF6foCkFz1yrHzBCdAihwec16mT1TeirdTaTA6oA1Kk4E",
  "key16": "5dwQt5X27NykQFGKUUj9t1Uyt1GBsvrtQLAFPx4iKdHhQm4o33xThfQ7oYzWBNEKpKnZ3ZKmTMJk5Pa6KCDYpyuB",
  "key17": "2LWihSZFVZrT1JJ7BDHnH34JvmLod2mr5hZ68YvBxCvjukkA6rzeNR4fcR8GqMLuoacL5vZwbCxrgMtHFfi1ehgv",
  "key18": "4yoxkWZoXeSvxDx5MsWCzmJRC6BSKaMPchDE6CpCQHZr432oxQ9QqEPBU8MR1TtyYGkJP579Fy17xcoV3YpBBi2g",
  "key19": "4U4HUPLRvh3a5JTv1N4WwfB9zET6kyLwG8xSGRgQRPrchcdT2XaFZesK2aRLWssZCB6MziJNFJgJjgkrWk5qzePG",
  "key20": "2gMhaqsTcJkgzxsAPMv8BfCrm3WMfbNC5HPWvJ1Ry3h4fhEcAp54X9Zu7TS7mo3D7a4nEXwaNni2CwJXcB4pbc19",
  "key21": "4SmAYwhbwkU13GzRzFsUkpFVW9RYmnc1Q6otrvH1pD6NKipCgcdkonUqAL9byAXspSXqT1FQzaJM97VoEmtXTaHH",
  "key22": "2nJ2VghsPQhBcrrF5tM8Lwes6nwPy5Au5JLkg7siCxgywNRuXWVTf86bKKiQu7PoNVWzY1rjwRdKkqQygHQEhidN",
  "key23": "2TsZwK3xCBW7SZDnRTqzKv4MVCUfHaYGTQnNcdm4bd2cWbBbkupRPCxuMRE7BugNEymBP4Kj4LaMRrp5BVbcuMxX",
  "key24": "7q9Jzc6nXhm3iVU4MZALJwTGzTjoJWnmYzWjosojv7kqH9nJWbb3yyoW8T61ZWWbEajyvqWPjL9CKTGZWJVL36C",
  "key25": "2TZuTU58rnfNqchVF1uVwpvk853wj534a32dB8chFiC1rY3DBYwvHUEurTptstWZgt236s6XfZzJB3P7qiHBNqvk",
  "key26": "4hb5XvPZ7aCMuYUMSFco5X6XwYEzQjgtJuAa9jPZhzK9nzWpmSgqpx6cT2UtcvBohhS3TTUNzstTJvrEA1xrQuKZ",
  "key27": "3U6sccRPAKC4dXSbTjrJC7VBFEtwJk98J7eFuj5a8FCU7fhNmH2HQAX48oLzaUTwhVAWGMcb2BhhCfPCYav3EgZ2",
  "key28": "2GPVQk23yoFsCNw7GtXPNiKgqq6TwY31gm4wTFgQ5ESAGrsBkDSeQTLCzoEgD8B2Z7KzQFjf6p7iuiEPSDj8GXmn",
  "key29": "2qbVzM9S4jEHvqfH9JEMKuveFA1xE6LYWRwhFRr7p2bkCnt9jYJzQ6RpzrAdGJbn6g9svrGZ8gd5nkq9ASG5qKfn",
  "key30": "2Ff9K5DAtyPD6b1VhPF5Wat3NBBZMpm1jpFy9iesjkieNVoKXbTS78sK3B1iuXSseozuY42xTqh7qxJJdo2kwj82",
  "key31": "5Q1Jb7wH2YqhYPB39JLt6U8XrinWW7VPiaLJ9zLMNBeviSW2p7shjm3CrrvG9TF4XokEAPABdt66dbG9k5cdZ25A",
  "key32": "43oRvQVrhG5PhQQ7HqGZByPaKgH6RsYbXSRwgKi9Yd5JN19kxTd65GsEwqzvTtFSs5KgkqNBi2rvbfapALGk9xZj",
  "key33": "ppCsp369DrVrBhQ7ae6u4Hmu6vALtRgXDuyczCfVjXYPRZrNuWjzy2h8zgq7d9dpH38fTeCv2eBMxMtpTj24Q2t",
  "key34": "3MfjhB5VgRTo6bZzJoXYxxk8tt9GCoWqNpseDNFEs11XXEwdCMYEVw2FAoeHQeZY2bqkGwBGYM5L9sNaUwURyyPJ",
  "key35": "2YDSsyNLPneVhS8LbdBAYCzwbrLJrPMG8n4siZ2ifnmKR5fdynBCfWFH3dhLqKjEwPYX5c5wSiNyCK9VNiSYKnZS",
  "key36": "2tuZhTzAd5X1AT876cBKJ6iyvH85Cu9JiWRNHjQbovLyiAArdxm8W5LyRpAtvd8Y5FaM7bFc13KRbEncX7W7R88N",
  "key37": "3yq7Pw9g7AC8oh4pzri6rrnE5m2MW8MbDY35R3QFkhGYSHMDGJFG8BpCQzvsFwXVE3viuqTbSSthVdtfRZLPAF4X",
  "key38": "5ZYEuyYyeLBiYNnKFmj7Ndqumn59Qvn6W38XUMm7vyiV6a8sF9jsiPNcdcTdQ1mCrGi9KRNzVBoCTjYXMTULTiJA",
  "key39": "3yB3HN52sLB4Cyb8WYEocfnEWuafFVRiDVPNM3tYikf4Ye6Jw91RqmXRoohQe86WYzEyaY1aAftwRH6H9LrKNM1Q",
  "key40": "4wcMJmLYLXxBMym9ZfC5PQRS5SYHZ2Z9q86C2giQmsjNxaNEN3MyFvcU83kPRSwW21YCP1f8mXDXgJAkhTS1YSPe",
  "key41": "4KjcZPsDCSZg9id5xuFh8hCp5N3E4xWSJB2hSAyqwJ744iMQouudcG6UA5556BYXEewAm9P8qUtBLGkf6xKRKGRy",
  "key42": "4bzsaZ8U8absFpkSrFdrDW7mNbwd8LGkyd36CTi6xZci77avr6s5cCwePXPSKPwSv6wZrTSbj6exLESWw5QgFVXj",
  "key43": "2AMc4eGZwAUUyzdyaGkYVNq1jNynqoabPmU6T6ANLHJ3AYLBuoiXrjaYC8vDdijb9pc7trwQmdrL52K4xgs7wmkX"
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
