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
    "5uBcAtrUma92mDxrwLHK8iSM3EpREwx2prw4RVUrXmjRsMyvRvgF646q2o9o4HSYbv2ea9BCrLNu3WTF4j14tJXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47F8X2dZybpHScDgoDFgYoJwqfJz9W5k8ayxNqtyTUXDNwmCeYtYN8NKVFR4xV38qSEWKLn2K5f3ZGwCFs4LD7oB",
  "key1": "5H8HaYLKj8Q88MN94JbbDioFcYVzN3JokEQANbxp1pLLzB5uymjJPieyD6wPxFWbWP3QVZ5GPSh2tG2zQeCK5bUf",
  "key2": "rsrvG2SoPA1kXTkujMPJwfRPCcUETb83Hh7JjZCbnguhgoYLEYjKeZ7nL2CD59znuK39vcVoK7iHT8coU2pP9RQ",
  "key3": "3NU1weKRM4Y5QHPz2z4ZtcDg22SK26ueEbxt5AnuRSqHG4LCBf3wTGP9hxCym7ZhMUjcDsUSVQbwfCr57h7TrbCy",
  "key4": "2nz8We84Qhn8yJEHHz5dgPWSn5HR93winFQqiuWp8DzFy3JcaPFuGo8vAUcoVCfBbgn2SpgsqxV4Js7HtmvsTq3V",
  "key5": "3yee5ibRFAAPDKtY1drbLbLi9VnG5CBEpqQiDnTWBJteo5uGTRHvZZbBMvFk1mgM1rk9w9HyugNmidEQqiLhNrxa",
  "key6": "35Mhbyo2AH89hworw5yaaaSTA4B8bv3pjhPgA9A324mWGZV7qMAki5na6zKcJi4rdpzEvLFMRizvBmMLdkVqJWoN",
  "key7": "2RSB8ZVuNrqhbxutLUnbRJvR89sus5LRUGVFN5TomjH6chbuGZxqTVmmDcufm5qHYSJsnaa3PDX6TJGJU82y1mMG",
  "key8": "3CtkmZNDvA3XpPgLjkabbBdhkQMf6Chkoee9TYn6KEAF2Ygq8p91chuw5u17m8UEd6XBFV78EKjkcFb4VzkHN5Lz",
  "key9": "2UJruEb3YC8a4YyE2LbEfBwoD9YEyfsJHrukabA9Ajxn4RooNhcCZX2W6YjXnZCNpS1vBp4Dx856WJU1URhsVndY",
  "key10": "5ZKivFxYBRP4CdssP2WtKUW2VKAEg4UwdxjyvcXDCFuaBHzHUssPxAypNRmyUnpep4hBt9oM8Gcteph3GSbehCsg",
  "key11": "44RTCJMssu4dVNpTtoGRj13uT5QpLnSCbsZBLfPeqKDTDfRQ8JepT9kT1Xo6FWRAZwp6oVD5Jf1sgtx7y7Ln7ryK",
  "key12": "23tXNWib499AqKBu5gJMeh6WUQoahCcPMHVP8SLndK1cinYKr2W4FScgCenrfeKBq7xEVqRb8BesPpjYAHKQ3J2Z",
  "key13": "5ncTcFDcnkPutovunPZhxWt44RjVBCBVJgU8WuMasph55Lpcw2qWDUSpELQqnnHK31SufP5qabhJnEjNobi3eAxN",
  "key14": "2C2RuEXPZv55tWNM4g9Qpc7p6UCjBh1Z3HPADYU7r4QNzMtqxmj9XoZB2hjgkiwkAxFGzUpKuoEcng7npirWdrhG",
  "key15": "4UaSNUHkRXVrGTkfdYMcC6ug3frjMb278kh2jnwfJp4sNxvh1tZourGbEbyvmUxAcbP7XtAferwiLCTxyP8PB9P1",
  "key16": "4jcbVTSZeLiboa71iu3KrBjhw1y6kmPtBVVNSXxUuZw3v5xVcav6qvrTyov5vvVzvDJzhBKpsoG2YpqAL8vvqJo4",
  "key17": "GGMXY7wvvdT9btX6QTTCWqvzctP8ki9FvCjDhjb52beUsMapXsi2tis4X1DzdKjiekHe8nkckej4kzaPuUPh1qT",
  "key18": "4mFkxGVxDJZ2rnfUpiiVwDUuz6cMqGvt9esYwb4wLgXvzAfwJYTykYuhJLYmsLuwrq5fxsL7NAGiGnEcRGhNxX7m",
  "key19": "5dzs5QDsPTcAUFuvjLbJrKoDrBoT8ZCCEwLbUACes34M5xXQPtxSchY5acYxTDCpBkhNTWfp5X7v1cZSUaGSFtxx",
  "key20": "2o8zMKLmS8DCSG45985475oEYnDp23YTfNgqnLiTkJusTuo8d3X832LF1LMeaMxMWBWz213vzXKpSquywU4L334h",
  "key21": "57ftxsDY3macJDJ257kCLthphysrY2ZUxeeRhBTdUXus5NRk5L4bJZFuo3tPk4wc99yEBYuCZUKCg3v3sUvVRSXx",
  "key22": "2MJYpXDk4vtsuEyd3kgpkL1Gt4tfCkYssVHjmiVW8wMice9rnyDVygrhXtJatSE8WgL2a2i2wnf72NNkKQwtMqnL",
  "key23": "55Qt1DD8xPiPUrCEHNBksPCNPf4yUZyhfzuFpDajy5xUXAMJoUfrBETjsj7GvAgoKqeNwvAQ3WS1USBt9Rr75pzN",
  "key24": "5jF6fPJHFEjKSBJRrvq22Uc31fdyZSffrGACDsYPsKDecyfvmoFKDxEegshmZCTcKioxUESBB12gg8zriGRvnx7J",
  "key25": "65CdTi2FUbsoruJaBSxPkfs9L2wL1syRAbxJ6fb8YnzencNuvKEzExTaaaSDW3uydiLRHThdfFMb5N9tqGsftTXq",
  "key26": "5cimGzgun7qJqvrxTS6yUweNoWSdt1fQS8ripGCAJWtLTJ9TLx6RNGAAkj4AozTNd5gFFmf5y7ERKRbMBRJPBoHk",
  "key27": "3JHRzic9h1bDzoe1jLFYqT53NvyKazxJwTMXFiD1jWtMLovELSZBSG9kC84ExtmmRAW4aTXQHdVYT3qpHkeMMwYe",
  "key28": "5ApikHVSfQR6bZ6GSYDvjqnHtxUknTb8ZVx4VqcRkUsUJbgfBYgxoczCytjJCjqL11zVhKPao2DKzKcFxVs85Nv5",
  "key29": "5EnJkLoB5GUz39xQ75d3NzT6ph8AcdGuzfkhKbyoDHLJtNWCTEU4FJf18phEMHq9VJQjHUrnPEa9b6MHQsaqgdtX",
  "key30": "fCAjbrr97BNTvZ4VvG46YdCSQtHQAMW842EWtgN1wKWU9v2b9dicZw3JQfA4nsU7YAYAHaiUgJS2jArF2NVxomd",
  "key31": "5rw8bVXxNKjtGEh676Q2L96wQ1D2fLru6a1DHipKroaJFmbkLYNH3Zo1ULwLGmQ3PgFD8o3w1NPuHtLqVH9vrUeD",
  "key32": "3G4wPMB6nQ7mfK2G9BdWtw8NK98fH3Pkzac4oxm2NQmMSAGc14NCp4Mx4rmGtUFdwhpziKD3rzKNEXUCd1TRAAaQ",
  "key33": "5PULMNp7WzUXDvsCp4Wc2od8UWmdjm64vwKVV1jbKWe9vqDLE5faL7yyqcGbXEJoibzyz4nhSLqXNqFn4cKS5Xrz",
  "key34": "5tNo2F5AC8WSHaESb75VoSowy4duWTYKnwMQkpnLqX2UkaWz9i72mUoeT3SNURgPytgUCVBQVZmBpe59iyjBHYcb",
  "key35": "5K1VN93LUqfGCUiYYFyPnR1dXDyrJ44SEBY3av6vugqG1JrNU3y1PKEiUDB3vc8bxAvMuLxV7qCdkLkZWihn47zY",
  "key36": "3G73VhtJcbt65E6AT53dW3R2vxda1YTmHWdGPprfXp3xtNyrCcXXrZaRMidTBsB1S7pnZWwcBWvPZo1qekscCxzc",
  "key37": "57yD5o2SnrhS9TjzBF1cYoYEFyZzGBDEMgHcddrXRkeL5cXygLwhqVsfZR3AJs3YbZPqntJNXttchkGF7B8NNQm2",
  "key38": "KsEBx11k5cZiz3SaBQtyseJWALzg1VASNPRHNupUR8uerg6952P1KUZzGsEKp3pU41Em9SPMoqBGVMq13ZtxaFa",
  "key39": "5j6a4mngTnoAzALxEEuey3fF4EPo3QGGt3Q5mMGpUh5wBVBAEPKQbjzAmwSZSNbD3vGmjSSVSFN4U7AYQ2Eu4nDj",
  "key40": "3R43kfsBWBLFLWeg6LiggqJvjkxu9VRcG7yxvnJZ4BDhqBochpGqRLnz1aT5t1PPAwh4ZUY9RnHBsp77vS55GzEZ",
  "key41": "4j63t5hM3S73gVHpE5t4ykKtGfJGmVc5BeDSNRNcCzFxKqLL9Wef2wTaEiF6XKzdCLEcGKoLKrUfPKP71hmEqdTY",
  "key42": "2nMdpzmJadGiHXJAjWNJmochC6QF3fYfYhnypow15YE8gFvpicy4LpjcqpLFj462ThUVsLXvirn1wbe2xYX1wWCz",
  "key43": "5zcoTQtKnsZ8sVRdFdD1aorruFwgRFT8v5JCsruEi8SHBGGj2P1u5NCYuL4Uhw1C52r7TTMjJkkooK9uwjhFRgou",
  "key44": "NGDKKs2DdLDpPnPLPcyWNduy9uNLafeuLR9RASefW8p7iwASnTxuDynKvfC7umrjYaUjidea7q4oDmHJVGDukjJ"
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
