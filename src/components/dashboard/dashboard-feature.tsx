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
    "PV7Ef9wvUEdmkmWgHWTBeb9doW4wDthczQa9XMWJLRmGVirtKPX6t9Z2ntZVopAiBN7JMLCxSE24b2KcDkzXFUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQn4HR6VM5oaWz2vSsLL3wWiP1bJNYET5sT6JizkG8774A8FrWEYrXsRSPFfgYd68jrGtBtEwLoNYgJuRGqbLku",
  "key1": "3M3mCfdJNMnEV218Xr5VoicGR2vJ7EKTT4scWvPkMYxyJdGFbQYtP3hCBcMpb4nCoBYJAVkJYqbyL6jBPGdpWcAx",
  "key2": "3Cs9F7nhLSu1r7mg3N3RbsMR9BZ2aWPphqE9VEGAURCVGKTvQhA1mAX6Rxyo6pMHPMa2hNL7ox7NXeCnbY6XcAG4",
  "key3": "375oRv8LmZcnGttno91JLXAqUvyYfBv2kyYSULj7kbGAiatZFDfKBKn4xmLy96MinuFucs3G6GuETRbZQbVBVoi5",
  "key4": "455PPDXNQeJYKQyEsz5sYm1MqRDzfPpsxsuzXQ2UzSaL6PiLPrGGUdr5ArDQiVXGLE9ys5KA2ub3b3aBVvZDTtjW",
  "key5": "4tu8gWL2wkUHEd15Jfeo2dTDfwkjWDtmK7ptUuYphVJWM6SrE7bRstLYkAbPxzp3hiBAd53uMTAKT6qhkUjZnxY8",
  "key6": "54nZETyMQAdSwUJD1h96d9RbrxWUYqcxQ6NFsyu2G5TJdUFWbdzcGCWNHKC6RLzKdpmRrvDP4rkWwkGZ2TKWbBo2",
  "key7": "3rH2oWiWXkc32nQBt8CEQfdY3QzYZBhnkSSo1c3xuXn6Si915dBCF1LtmSYE25Q1uT1MhMo5WPsQxT1Q1wwzRKiu",
  "key8": "STSqDGmr8Bd5h8mB2SBF5867VVacexQdRtV28gFXCD7n6LQ6vshZ8QeJkZ54sKwwQNJN2xB8LyesoPtA4H5y91q",
  "key9": "5XzQKWDASA14h5kJ644DYjoSxnhA8BGkeTNEWyuuBdnM1VsmcuB9Txts4HWaBQPuCHf5UXvBUzMUeyZRKt9BRNQU",
  "key10": "1226gTMnJfjjcZZAbJLVFjpDKFT8VfcZXUHkaxX9CFCyHTeH9WxryYeW4bp46w6X1J63VViwjk8wRro1C9QhAxrP",
  "key11": "3sxUULaQGr4vAKZGf4R5S9dxZ4mHQDdeNttfLkEdRrjJXb91Q3KtG7ZCFSo4swKuyuSXhdEf98W8VBkYG7Ub64Ze",
  "key12": "4LfQpMGuvawyLUp8sGXzRqwUp2rKoW4bGJnssYnZ1ihDr7dJzJBRKu1hLaTwsvg7AbeBfSsyqENDX2kedaroY3RY",
  "key13": "4RbH9Muiq5RuEMRTDpBXbWw3sUBmEFZCt31Y718wPrNr4WEvgLcqpXeS3tm5HhLNn6sq6cDtHtMTRsZ43r42LvmK",
  "key14": "4GMnWj3hCFmdj5SHAeq9hrNikPJm7jeVqk9tPeQnM5XyNkR1rGpUuQMqrD4KeE2nEHsHEaT5z5nAHZTbedZsmwSk",
  "key15": "2KrqTBya1xQfaGLz32B2mufxbazYKJ1Be1jRPMpCHYcfciPZFgcDCUHEmcGj9HHPXNtodpiw79FgZVE6b6ENGCLo",
  "key16": "3fZzZrSK525E8pcCKkMsfbrWAWXky3FwZMWNFZfnBrRVg8QKyzHZuqDK5z6juenCUsb9EjsPjfSisaEFBK2D4Nyw",
  "key17": "66b421SjndnrwWKckLGNWXrLQMYT9cCXJKMmV8KNQisbwUPyNh4BtXu2hpSkNPchzRCvfz8nJevPkntaomp2paKX",
  "key18": "5LhvK9tCEsAESXTAk8x4Y7XqacBqR5n1sMa936ER697eEyi1q36MSBVHBGvWR27uCn5HwTAXUqN6aX3TwvYaaRL7",
  "key19": "4NBLuZR6woNNnDxbSc5kRZ4fdsCEoYseAtbu5ty2RpqJR8XydWmYsjH7FBx8tFNk4sEsXwNjfRP47Vc9AYKThQ5N",
  "key20": "4omQqcfDAJAtdDtSzGncU8m4Wa3PgZkVmn4th8dDozS5NC3TNPhAiHh4oSE2NwwgmNkPvvbw3p19T7VfQmNAahrg",
  "key21": "49B6jeUJwAE5TcES81nvhQkTQwk1GHTueEMYYpagEASoc1goHEQtqWSdyY1TKuBDvXtdmUY9xCWMEhZdbVeBd4hg",
  "key22": "4GuBv5NYUsjGp2yykSMZ7uCTMVnjYLV4npuJxpEgVNpxBodeYEbijacvmu8RQ9r1pWeAeh8X6mvu7h29jppGfoGP",
  "key23": "YGaio1u6iG76y93mTrDSbuUEn2JsivQoqj4twGSttgt66MFCSQgdwikVHhLFqt13M4xThR42z8buPveLXBUbsyZ",
  "key24": "PfvXzH2uvZP7XnWnJGzuD6pVRyHjQV3sRQqjYoLwUFknZFw8ykagz3m7qJ4cPPNBQYK5dwssaLyE4EmeCoEcaju",
  "key25": "5jqG9cYBb5hAQG3cuNoVm4ngvtUCUXbtDreX5Y2myRedu1fsCmxfMbpnh42fWMWFRqC79wTjxXjeEsYeofvhRAQS",
  "key26": "3aPBZ2cetDRAdodybK533KZcGQ6StcYgAX3kUJ8QAs1ZUFdobMj5QwvogVd9HLeVGw4a6BKuNqtB7o1fNjaRXuK1",
  "key27": "2WV4zKgQvkPSxr98ubgYrAC2UtpFyV5ecL9F3NAujb21ZhSem63vjTUfQHujTZ9KKLy3nMYudUgW7TwnjA2HyEuK",
  "key28": "QUxrALzDkPm6WyJzbNSXQa4Coj4gXxhtTQFPL2c7v2BAsgv4bW8hrPcA6AQaUap1kiVZ6VyEz1eE4isMbqQ2F3M",
  "key29": "3DtTBnWuXBjxzfGnEgySYwLk25mXR5SCJK7h19trRbHKNMR8rX6XArxPWiTJ26iTgwAEHMiEN2TZqdiaivsDLTus",
  "key30": "31PmZ6X2DE1MtjVH3PeouafgofyNabZ53DSPd3stVQT5WZmv97ADb1TAy9L7QfSPGDD2fJX9E856EzkEFg33eJRY",
  "key31": "3ewQj56NWBDZTCH9Dd9vvPtxNXeVhXvvHERdBBcAkAF8Qr8Y3RQL7E39g1ZoyQFFE95rm3u6tJ9PFGyNfnXaBe6S",
  "key32": "5FgNcvt6yWJMP9Dxs4Md43gtSgDqpasiycBmq9RVL8wr48CoX6EecdNyLzenXkNrPPsGbFDFPVFgtMuBUo9hmbPf",
  "key33": "9eJjPtg9UXyS4HYJJQQAU67JmAmqRhu3Bo8WMZFNkv4QsP8vavxybPfsdry5JkSLrC8sC5BKb5dEejZmagtjvqL",
  "key34": "2LSDQzVqxYaqLxzmthGUPvGeR6Vq44FWmGSCSkV1UGmfk5H5omMJNdEGWu6o3X3jWwD3gW6Riy2CQXb22fn3ySaC",
  "key35": "32ZigKCgjMeaT989m1r5MaJsBQULmwQn3qtGhKfBxZGPxVPdqGUisaQbpUcUn6KwTtcNoy9WBfvd812c4WJq8wf6",
  "key36": "57ZhEtdGLMjnKbwscXqWQX1hXHDzHs6Pk7C57ZpSQxKK6L3KjEYNq1NGS2912fa2d9z5v45sdtmstdbDm28RBEBm",
  "key37": "3sU2LDhrEqaHCBMXkGqUbTGoC1mfQrMXaDVsFRYyEFa2YStSa7YxP4KLjMprUksnxVhYFoPeqdz9jZp4EAKZodtT",
  "key38": "5rTFJDJErdFAbikTPKAZsVHXj2AvPVj3vziidPvDhBfF5xxho8jqQSnMhxY6pLFTu69KQMngvhRYpyHeCmdkuXri",
  "key39": "5RSpDGPph8g4DXSmeWLC9ET4zbRcsjpAcKE5noB3uTCqz3V1NCm1AzvdQo1XxesgCrhWgT7mcD3en63b3weEyEjN",
  "key40": "4P9hb9xcjgxoqeu4yyHMopx6TEUDZipeo5hFLAwWKDsoTwgZurBpZCJqJ5r9Ex7M6Lrzwt691enDnxA5bzCr8Pey",
  "key41": "51GntJQajeX3tguhm5N2nH7cJpfAXnzjcQg1VhADYPN5hsRuUKfT9Es2ppKe2CdtUuaCL7sNtR16woXf19TjHFgA",
  "key42": "45WS6dAKaewG2PZucnt1gRGkJ99Z1LAMWp4tyC3hjqZF4uA95i4yVChkpATke2pAQf8j6KVyXUYzZk3U44Nd1F8P",
  "key43": "2DyzeSVkwkrwvNh6wzb9RrYc7ASWThveVVx71owe6PxN46JjuyjF5dKuNArK7ezfQy9AuQpYL263uxzP5wXxG2TQ",
  "key44": "4KdGKKad9m7LLsct7HoRWJvD1xhv7vTVYDM4jAPGviH7Ks9iaaGnq55PcKfxANmS8WSGHDZxwv9pu3fLpegTAXF1"
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
