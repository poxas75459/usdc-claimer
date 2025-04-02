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
    "XC4c5EHNBSCoJtTPvyj5FtBFx5iLG2YJ8CUVUcoQHW7ywWGRRk93qxkXQfQe2uYPMahpfUATRK1kCmNdr66ibtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjLg8VkvbPW5TA9EX8X6H4jiDLmLS41yCFzHRuBi2q9qW1SaZpqgwAybQLTeQdFfq2wrYw3nQQqYG99RCZDDAS4",
  "key1": "4y394AgrR1S9V4vxoZ9LDAzDWQFWNDuHuHC4wYLDdfvyMKcZskNECfHoMUP5ZyFwGsEg9DoDskfmG9ysaTjnBfC6",
  "key2": "29z2iuVCAPnayhbkKuabYA8xC9tAg8d72U8vRnRMEEJDMkYm5VqW1Br5zmeTtvtixtHeiH3T23wRoCvffwR5Z614",
  "key3": "4ySv9oRBPTWGfPmnG6H9jFLHa4uAi5Pb3rej7PzdVjKSXpw39M9S1P3G1qASUjFj2QtSC3mieduSWvF12LMg2sB7",
  "key4": "4uqF6xtstPVVw9BtENQvbCbQR4Wag4xRcaECKnMJ8tAPqM45bdPduFKWgjqi2UVaki4iTZRbURUAq4vaYWTe5mcc",
  "key5": "5PiSy2nv76WXcnLLbYycW1dhjEN2jvoLjsXrSAX9g8gPQGRZJVy5d6wHBdWGHLQ9NwDNaLkAkzxXc2xHa1Xogamc",
  "key6": "3w1sH69uuYDkZLuyXK8rcTjchX25cJ1aHS8xarxMuBcuVztC4EGP4FY9tFFvtEj7AVzxdYQGfUkzU2S5Umqgmh1d",
  "key7": "65Jbf5r42dLCPk4rAB8Npqdp98thiqyFK2ezL3cwWgs4rfDsRiY3TcUzctQAF8BanYqhY9Ji1jatZYkxQTZPs2tm",
  "key8": "3xz2aY9W2NHo8gDJuDDv6SkeeMwKvGmRFzefiNPojH1rZYrACBWN6fqcfrApAtNbQfVbUXRQXctPSJwX5jwkhAeF",
  "key9": "4QWHV3emaxnZr6yWVLsDh5qTEuHwaW2vvk68GwyUy91E5w4bPNErfHreF4URiTrUu7u8Qkia5GsQQePEijMfFLmF",
  "key10": "3fjaw3aDXoKg6F7zLgh2ofYPfmEeR84jpdMDMYNhL32XHaVSDqSgNvkZm979dFznLmZ1XxwknxMkEv7Uzq9Apr2t",
  "key11": "2De5QepWVjiXVJcBESD4uZUMwPmGxEEC4wEGB8QHzSuNFwCav9czWTCKCnmdJ3QvuHETgwtM8NgK9SwGKCRF4PVs",
  "key12": "5aVYM6DHKG2hoRrcRkE7NtKj8yw9mDXAcQqWsBoaeu4jWLL5M48Uff4YS15p8cqbMvHdqjMnjsoPt2hymmUDEhQ1",
  "key13": "5KDXqfYot1QfH3NtHhbS2S769Zuz3XXTGwFJT76Wa7vux5zTYWFs5KUuMNYTRnzgoQAWdZtV3i2fXZeTX9YRy7y6",
  "key14": "3zPUreaSakqsCvchNfFbEiiBwn4iTChcHMGTBdSYRYNHobohChQ6Kii5VHdNG5wXTwHBvEM8KCydLTKw5WBk2ux3",
  "key15": "2ZDpE2qduEsxYPbxJWdttBvAHSUHny3h9RB9Cr6aZNL8SzHZ2XQ7sutpR4aYiFTHTK53iaQXTC238sp42zBJSp3W",
  "key16": "4DfeZS5PFSGRSv5ZrzrqGYDe5z34RgsCNWJpU7B8ASzVw1qDYAisUNoxfzNFLzfza8fjxRbmtS7DVkrMbYE6Y5cg",
  "key17": "57ukgv33LNEk56xrPNkjhsEACSeEtqWNkgTXRVqgak46Kr5jp6A1kmdiPgEE7LnHTXF48fwiubKnZQKQuxBCiCcq",
  "key18": "29mfWv5Z9s5uzSkdriT8uTMdYh9YsLN43JRko8UvnTUDXc2XWfrhFKmcPvLn2yjrmXqAapS7mxab92vADBuKkLJ2",
  "key19": "32t5z2iZxgSKm9iK4nrUSpWdNo2fxE5DnCMZkQdJh5ksArxzdS3YjyF1a169h3pLGNmr68fc3TLiNbkwahxmwrKR",
  "key20": "xJ2PSotr3b8ToVPHCoMjPhSoaJBZpaXiozoSrDwQCaT6E8AuWpFSmVPtAuBRzntL7Yc4aTkd6PWhPQt1hyWtcEX",
  "key21": "63DLYSLfSwvAovsL4oUwr94GUtBKQT39h5vpPhFZReNiPaGW1e8Umy5qtWzUHeGGpPfP4api6gi1aUqCLSuMF2dS",
  "key22": "4rakfPjY6Yq7XWBv7PDi8SMECZpyHbKNPS3tdefF4nGn2yH5tFQHHyDjEufVu9itqgxoNGVBnCuvaNDhxPJ9w1H8",
  "key23": "a5jAiQ3G7xpqYYH5mvFned5g1vs6KnTaXEXX9BGqrpdYdR2gYBb7hZ19PhjV42TxhLWUdAy53zc1HVZsGGCBE3f",
  "key24": "3pzv3xGgJfHMn2nn1ehQVodFTZhx6R48MYEixXjR7kiEtRPaNr4hm2MfXpU5PNmCf8nJjWFWXgcYmfKVmi4aadkh",
  "key25": "3bEgVNZoZfYGyTDc6BPga69KR2aTTBDbiLRcfq38rH45eiqRBhrepahHbMPDUzSh1yDYJeBTa7NJXMiS6P9TRUgW",
  "key26": "4PTHCjpvaHChw1n82ZQ93G8M48PUhYYyZnT8KautYfb9Ddf75QM33JwZvX6nNcHXgEkySCdGhm945uGuwJSBw7ax",
  "key27": "4VAY3ER6oQ6EapJ5gutXPuwr9xQ7qhWSGK68qFT12uhZJEw3tRht1N7zHAupPbtd3yP5SqU8ogJ5GwacEnWtsib5",
  "key28": "PVQSgqKUaLn14YmVvPaTg8K5zYCM5V91Ef3mB3Bke5nBcy3iPtNPLeqNyhykeaQK8aHncKDdsjDzV5WWcLcsJYM",
  "key29": "2do81YbmZnQ31UHz2Kc58ASupzq6hvKAWFKKsZyd2eAitYZeczCUUzK9i9wsiUnNU196qrxCB6fZUBUYvQq6XsYA",
  "key30": "EzwVSsFb2kZJ1C1wxw3GVR7oWonH5ZSHgF5wvJXfTqsGvrvzQ1B1yFCQGPe2yW7oXmb7SV5svgFY9AytRau5mnJ",
  "key31": "2YrhgQxTHtSyn4SHgXHVeRtYcv5kCPPwLKKdHauwEUEZAS5zoVinYCPXbsMgmGfFzAPTpNKZMvuCmK81RZKRyoM",
  "key32": "4rgjMpzN7v5UcXLiAuMSnbnDutk8RJgPjNHtTtzTjJcuvHuuCs4Q8hM7RThGkgXumg8PujJ4Z9pQFFYEbagqFkdf",
  "key33": "4UBCAnNE4iSgGQAvesuXgDRDkoLmxUqX79DRjx9HUfQQjJFKQmTdeSTWnHHtCQ9riJjmuGq8Yt2rBARqsX7cRuBW",
  "key34": "2xMFSqPFxMLG2cqhSUG2L8B5aAhC2Z1FA9mpx7sbbKSaxjdrBYX5NSr98wySqvfy1FRLmiptA6dcF2AVeRKVJkHZ",
  "key35": "5vjXRP2EBKaVJFt12siVSEa6Cnhb1FCZfHg7E2AogZL97i44YxiJXKAKvQkyzBFCXpxjqA5wPydC7RaPBfSgCuGX",
  "key36": "3GtgL5zmS8jp64k2cwAKz5qoWWHZ9SJNQ6ZxLtDqdVp4osQnBSP2deQur9yoSxeCswpvUudtvL1iQDFj2D8i5kvq",
  "key37": "5FJ5mfMPgYDbuBPY2S3NRUpbQ5DY6ZQEuTw9HUbxpusyeFTxpY4RtdHRoxADWESBrPzx82PMezjYUUtTfuJRPAZX",
  "key38": "4XAwomSu45qNrBTnTebu1ofLUuyhrGopbBz9reUWUQt8o9z585HbGRkAZ3SVNwqDFt5JjLq2QxMcxeprdWzv7bBt",
  "key39": "ic1a3YLkTcntgxkvUAuMHEnBeEENCntdnnoy2BTgsGK8ho8rZZGbAFwR4ymqESf2egbddxPRMtnreroXL7E45NT",
  "key40": "7tZv2Xb8G5AjGFsKiRGzV9YBsi5wEocU7y1adBHimnYjXDkcf42aDi2CznpjfiHot7K8Z2Lu9XU8Gqcg7kcte3u",
  "key41": "4Xt8YXctbnJpewS5JE8n33N5KQsepa8TsM2WFq9M85EwExFZ1HBvWqyrs5ydfAKjnN2VxhmBQD5TLiGXJ3RYJjdH"
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
