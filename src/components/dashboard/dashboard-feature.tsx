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
    "2EW6YXvwqAZMCcGMcov2eefjveQnkg2z9BedoqH2wsCfuho6sPMkvJYEaJsLavWAK6uaSgrzWJzxktKcfZAnfTXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXNhEcHN2hQeMdAVbKxMEb3MwnVUuBNDcYMQq1ZRrjZbYvHTkAi21P2waeYYaP1QbVd43ksRDJwcTyjXnuoBgz4",
  "key1": "2VAxZ5VgGZkLfQDxc8dhb9PEYD3QeszovSJYTRUcXackkhR3MrxjeKKrTh6Lth8trWgRqjpbUfb15eZRSPv7M7M6",
  "key2": "2LCmUJqwhJtYkWry24W86sWjH5yu4t8WsGDBPBpZsun3YD4bwCS26oaPFJphbgchNby7Ks7C6vQrAK9od1nVi8GP",
  "key3": "5MHZLVr7jcSVAd52EvtfpUM5z7j77prtBwJyfjAKtFUgi7WYUtW7L9LPc9r7ruFdd7MSAsLTybAFctxDr2AyUbJt",
  "key4": "3JH6kWXEkyFw117KYk5Go4LFbqC49Jh5ZWZBPXyh8YBPSv18YipNRwC7R2JwuLTBaXuG4H47rKwF4GXgMmktGNdQ",
  "key5": "5h2Q7saT1qhsBvzzNczXqRqdLhstHDMJcGYyoyy5aVFbhkb5hnpJAAE4rKBQof4mWkFpxL9w2zPV6BRncUdEYtuQ",
  "key6": "3rtRWTY5w7H129z4tWp59Z6hLwyHYbeB2Fj4XMghPAVbnubVpApjZfHvCKeNsNiWPNBcfPJpuyZzAiVexBiJFLkj",
  "key7": "2mjPT57rjwQ8Cx9Dbm777oqZ8weVQPDuQbrBR5PfsgTANyPXRueJoqZc2n8NTNAFQwzwv5upFogmewkJN7j1tixp",
  "key8": "4mPeSiER7wVd7DRdJprkJv6UvnUxXH2yjMvg2P3X5fPJo4gQrEigh4M2D7oMpMApUif5qVeBPBnNzRKKNNyMeini",
  "key9": "4aUenB7QXAXcK2RauY1AL56L3gN7ERjr3CHe1Kgc8V2JyBemfTLyUpp83cdrKJuzQtUsayKzq47Z1n84UBPdvWr8",
  "key10": "QXTyNfPjYLsuoWvyt9t1SPUyA9Vvp5KRwTWwtZZiVpuvVwREncRJA6rpmFdd7oeikjTdm5cQicSAAtfGv92KT5P",
  "key11": "5LvoY6A3HN3KwRHfRM63DJnAr2fKvT1vB6TbmMB9mijNVvhV19b6NkD4jDAXefEcfWD3sdep8g1LGWyK9UPAtE9R",
  "key12": "5emWZ3H82u7vryXgL2gEQ3kv4vExp1JuZturmeP63sLqz3u7MqKut6xXZEns2uSnrdLYYWvFNRUNi7s4KNXLBfCG",
  "key13": "5svVcSKZcFtTHmTo1Qs7Wjp5REPVwp7U3aNqSMYgs5btRb1KNNX3ZsaaQqkyjE7tcaEnJN2uVLSCEdpHS1Bvk2BJ",
  "key14": "4DRxDwoygQ2hCcAYPtj8BMKKeitdYu54yeQ2Dbq18CHXUitvRBm7iAChZMqM3CmTQbXqKeEivrNuiY4Dc1Ygfq3L",
  "key15": "2piFJpYXpzkKb5Y4KHuooTnCbEWyu5aBDYa83ak8GCafWiAohwqq535M6LisxT5c3AhbvKyAt9g7prUFEQdABF7r",
  "key16": "2LWd6eNLqwiUdNdxwJUQXMpx47hxN3axTgW46tvFe1gPMF6HCwT21N7oEwSZ87Z1yCpUV2m41vkknf7Cio7TMapL",
  "key17": "3oxPQ6vZt3gEwKWZEct48xRx9enTqizL4UnXGkE43NYQ1VNQM35XYnLtS4vC7MTtNqxtbYkVZh7quzb2HyHQJqUf",
  "key18": "3wwdbhp6hphA6pzKYgTMZGYnfAMCMsSZgZTPaBFS6SkMXssm4P6UwwYmQ5nNvpy48mDqSVx5NBreYi4Piz2XVKu2",
  "key19": "5kVVBo6p2KbDQebAgtssf4sX2pDjgMJEpQbdDbBggAdtQUvydKpuqBFaQVxZx3wd1FuFdAkAr2wuoCPGEFpY51Wm",
  "key20": "3bPNv6oP8Wa8A4G7iZHjyhXLjvnbRZdWBMV47xLfpG5xfx5yueWkeGw3wp5ocbYGpLPFk4iNJQ6xzEiLENTSEEwv",
  "key21": "4JeeP3qBUvgX9G7UXxEVBzxjqYmSGGeeWrVfAchqcMoVhMuw7y4ziz1ZPtdq34A1kHPb4FmhespqSeufhKBw4mM3",
  "key22": "5siLZQ6UBjt7fPCCXEfiePxkpg8MqMbwgpGREjgoyeK4Ssvqcch5XjwZwtCq2KGP89qHVa5Smg8Ngwt2pHcW7PAo",
  "key23": "4B932C3vvABZxfqca53bAHDVT5JLE6SXyiFq3eLp4AUbUUrbkCBzEzNwCEF8QaFpMoL33R4yzYg4PxpzwYXJ4dRV",
  "key24": "2aKhwiGpqhgmFVUM52s1V82gffvcaUBNtnXjUQDocxda9Ui4Nq6JPTHEv2zc29r1tg6dcXiSmc3HGAGG3R2AkFgb",
  "key25": "5MnvTeZE5jvKbAhXHrvAZNsdpaeuGbkoa6ANq4THqi6ASsiMmQxbJvMFuEv5HztG7TpswmSrqed26mGDrDmUqied",
  "key26": "2PnqFMrKrgQLqHTMWDTV7YUoqHS5ZH5EtJFJxTEQm47Uk4v1MJzKEVC7yW9US7zQt95VtARb9q1ByZC2SuZKCx6z",
  "key27": "41AtSxBVw6zKdszdRFKFHEe96MC9z2zbW2y3DSC7it8JLxKfw21Q8BVnMg3ZQf6Ei9R4zTEVRXTBbamWcsrZXdvE",
  "key28": "4mT3tL4ELT7YxoPGhVt2GvjgVGxvsst4AeTffyvsbWm2fomgJVRT5ChUFuzXSbgo6Kh5L9zdrP2s1ujLy4s68JYM",
  "key29": "2hmwASApAZc9QHo6phb5NGDthodqsZi3xJtK8MTko8EzkG3LmgCn3WPdu9enWUKvfskzAaLvsC7zqBEQqsJ9hRX5",
  "key30": "46bKq9eDzuCi1LKH3Wzc2N4R3vHQuEgUZhgfoWvpmEjp8w5iyV1BYWjyswU8GUt3x12T1DZzBfxiY6PPYrJmaWbR",
  "key31": "JAvtvBM2XTa3ex76DDjCimWTqdJEzYg3JvhNcXXhfNAVQEskr3osjCYTu7b6xbrNCEyLe4cqsjdSXEVyqgms54d",
  "key32": "VZ6U4cggFZUhxJPGRQfPybpVjpMXieHVechijikrJfyC2dFwbLdGnXu5qphCkwNN1Rni8At6VC19EHoVxaSpS9u",
  "key33": "Qmtpx48wPPZ8GebCqH5HBoM45a93vpQyxdyxYYy2KiDUoh1wwBK7UpKRpofnk3Z4J7cV6bEhqzRkWu6KgwaxZea",
  "key34": "4CDNETU3gkkJyty4nb7wWSCkwdyDy7NNmDuMvHAS6jD1KMvFXWE436aE3gPDUGdmzMQZvgGKAXmJa2a3H31CLoKs",
  "key35": "4C6ycS8WPeqVvYSos2QFFnGytvVF2aWDnhgVrM54v1aJqPuhPgKKTKUjF2JjhSAQDwmB4AaZA9WTmpeBEQmnnRiC",
  "key36": "3Yni1HXJRCiKnk8C6iUD4JbJWGKJmVKPWwArtCYksT5pykKX4BKRpL1ykoW5d2mEcS4WzKLQntkoaMZLrkmU8NQv",
  "key37": "5xjLouB7ZRNmbWc6Y7WTuF2GJuAYZAuFTd1wNgBnjsoQWQ6CVST3CuFoNGURoik2c6KrBb7PZjZjbpHJQc3tpdEV",
  "key38": "apSeKSb4EaUrUthaT39pbsrxrFkFQ6LyyoEzFBxMHph8VSwb2fof6uQSrUKaFw9d6K9GmsME3nNDeNcArgb9do9",
  "key39": "5bGhNMXVE8obmULgbn1ph2whoeYpwcm9rS3yLDire9xKAZFFUnF8oveHjh3kjhucqW9s5KwMNCoEDX29By1Mequn",
  "key40": "4MLXRqdDQvMFxPzutbPTiQdJPH3NHJXW46vpo932QJC4YsUVXQV1UyjiyumiLD7fX4ZgjtngdvUSyEZMbqihxVPU",
  "key41": "5fcjeoDM5J9hc48oGKurc9AdGjKYWaqv3JZPyupCgt5CtvLFz7xYCqkyxvZ9Cduo12wYaviT2W3gNJCrp7UcSX4L",
  "key42": "3EczL8Dbug7Vw1YRDYwvnxFw1GJ87XhsgyPyoncN74Fyf3DWnW46kBnVjad59asMcD3FbBPkWNiPKuJxybhBp27a",
  "key43": "51C6MYGTh4kTLK9jXiLCSg6oZ3PSvKXQurkptRgzQHmK1CFMgdheLL5m4rgJT8MHN7Bsyi4Mcop3yNaFZCVn2k9X",
  "key44": "3L7JBHsZsgVH8PqQ6krwreb5ZhriZGMDxrcTCYaS7P5aAyBtiQcTvRwu6rPKuuVsSNPwj56RRxAJh75J7SgSZuTT",
  "key45": "3zTn9zsK9f8now1LfHeyMqUFLhGDvkDvWvVvFkQenVq1a6v5hbWHSEt4tSwcmPaj8dshJBHSH32iEHqqWprjAwzb",
  "key46": "4irjUjKEkNEegUyyQ1q7se2EwGzbE7WGuikt6Xp2YzTSR2N4iKnm27UxBZSjP5VG9dtgekecTw17h8J7gCmtPtiH",
  "key47": "4SBP4LALFEcKgUFyJJYot8GjYAKW1rKDSfCdqYsaysAK9yxR3GqyuoNZ6bF7vLmEftbnJniRFxPRTyqyp4Nbrbqe"
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
