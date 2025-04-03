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
    "4PLbEqzqpgieyA5MV2FA1b7xqeWq4jzY9eJdScBKSFe6kMddafUomTENYNFdWPTKqAD94ihoUUU4M29PsVTVoyVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpGuPRR9qgpcS8RRTUzm9Ws55WCgeTakr1KBg8AdYXT1Jbc1KjuLvAvSWyL33Pxbosx1jbk3vmm9wjYPvhHwmEY",
  "key1": "4AVcwBfVgVNwM6rSE3RDR9wrvZkaxAVWWYRyZvtch379S4WZEUfgkg126aWmaDQAd9LojcVe7kqHbyggzgf8AFC2",
  "key2": "3TzaZSbQjyzjXUnHEDPmad14iEZxS7N9e3UFRtqahoMzoREA9YtE4Mh4ThJZYh33kKRmJqL9r3y7e7YCXkFfe2gb",
  "key3": "2Ysiv7A4dbbtU2noshFWV8DmfV6j7eLKo6Esj8kJStRV4qyR6ijYjaHuLdDgE2WQHNLw3rsn6SJbUn8otfzbGqtj",
  "key4": "3idXWfB9djJhznystftijEwVDVPD7UrasPrNWwDfmZ7vdjFbXHPdUtbXXy7vzJZS3KNEQbv27S2GGtcs9Cgtm2pC",
  "key5": "3dtsnCZqgRoZ16VsqjnjzqfHMUiP1EDZGpASzYguxRUzuKZ6NKSBZpDYwTGAxAKrprNxj8BF8RNnG4ingNVtcujV",
  "key6": "3qFz4SwwkepQnZNdSvZBzf7YyzjsWEgCJmAPjmHfUV1PprBoRXCmxUr5QX4ynZWcgXk6eKPdzizrLLEaKxd41Cs2",
  "key7": "YAyMTmg4VyiYj1e5uy7G3LnL9p2UKDnTNED65SzhBVJ6ayTb45JsDENWNfJiVWbLWPQj9ZKZEuVpotSVtCzLYMd",
  "key8": "3z8ybB86s2pYYe6Kux6dtw9mgCZpHLhoMwqYXBQvtYSavcdwPM6EXDFXkvFygJVwfqP4xbVkMRE9J6acjKBn2zXF",
  "key9": "df85xUz2fMat4Jm4bNgDTHyhDNX9MdeKaxpuzAc7ZDNwyBjxnXJyuLUsdy1fNRBTTWk2svnigAhW9quVgn3qiEx",
  "key10": "hy7sHybWMAcRzkqFXQfgbsTf8W3GfVf5h5VLsZ27dKysGTnR9nS8XGZzNe2GAkJYHtSwuPWmK231it4jAjDDvdp",
  "key11": "kkB156BfZKj3w6FStRYo8Dum9x19BTzsvuQuQsuTqN4tvPiuqVwj2SGfjXk7Uaeg5krgZ5cj37g6MzAgVMBfubT",
  "key12": "2JY17Dc9phnX89w9E6ei266nNGRuVjLTL9R4NVerfYfJ2ehSB5QTfL8fpC1yF3QRd3oJbXj4MzoyvyMm534FvvBG",
  "key13": "5HYDxjS6TsvEVCr1UX14Ag2FJv4A5mDEoARkczqDtW4bRkjMkv1BgcNayo2woXTYmqYc6C1c1CcweJ5UGerxkU51",
  "key14": "2bmitDDuudYpEcb2NGVa2nNSC8cussgthvDq2J8jFMhVFLBZyGmiGhDrKLGuHqWMvELeBBwdhE4cz5auaqWEVpor",
  "key15": "62DRrwHV1TtTTyGeYF7twUwctENzbt9qoi2g7i7UYcNS84quhj4MRyLjwaUEJ1meuzJsciPtEqEAVsty61JZs2ZC",
  "key16": "5SGe8BxEV8xt38oMzPv1mS9ASAMNbrPeWgUV42dkdnW8Fah74mGghQvKayYrc6Adux3pzmUbypwv18WDuiGcFBXZ",
  "key17": "4C55o2fiZvsGYayTbMoG7aNBeQTN485ZDvzeNC7qWdzTvuh66bEbAjfZ3DMkLVY6X1561KtyTtMybp5awDW1QWwo",
  "key18": "61QzRWZKJ9BEZfMJLN56wrcq8JzshztPZFSrK3XUS5NEC4XVy5fgDGpMWpqn1dKgEkMp3CE486Z7c2K5n4aGXcxA",
  "key19": "5UKqqNGr4K3fn2z8bmYhtp816RoCFnk5wnAhqmiixeYXYH22imALPpzwLuWJ6nzRJm8LG3gQYbRRkTy8jAKYNkwJ",
  "key20": "51VNU4ThXs2LCALYhF1ciu3cgGLLE5id6NehZ4dNHkz4oDEYUcVfAXTkRtCEJoP547SZRr5HAvcGM5rKBpbFQAEf",
  "key21": "4qoSfLzVzWSn3w6kvV8CvYozuJXKqKV28op82vMvdu5tbiPVmf2n5g4zzEHKUi7WEEs2ZSkvgWCZs6GMjkHqKPYr",
  "key22": "3sYBzohNCikhbnH847cDygGZhCf8aqKMDuvVgkt4YGkmXgrCEFegjXM6gxLAgEAWm5D1raWZ8k8s92ett4vLBh6E",
  "key23": "2ksSVcwWgpZyxrgdXTP3FQcCTe2TRBkbmB35LUvjU4gfqgPsxER8TqKgx5icmkvReT2jXY2eGDFFPZWJXCojrjZR",
  "key24": "2crNmgqyroDRbqnUkxBLX2CTUKt8o6hJT3zphqfGQUo1QiML47w7zDSLJPHw5VQ7pGKmVBydwBzFgUaXY8gXSY4q",
  "key25": "5FiFsRFGFoThj3GBGzvPRcHaQBpdpJ5GRz9rX7e2H9yS7Ra1ckGLa2BjuX4QtQpF9T2Acc9BeKAg3sf4nHkguu61",
  "key26": "64PdqA3M1w4L6sx2ZcNmepLtXgYUevMyKgRjxEmNVYA6Xd3MuRiz2RJ76Qf5u6oLhvZXs92vLuxzQNBnLkbbBQNF",
  "key27": "4YCZxU7S5vj9gajnDWXu7xUrSere7iRnaKfXaxaxiwuxLv6ZrnwznERBgusH1BNfXA4jSDPHTHRp1R9R8F6W7UwK",
  "key28": "4nBDwo1CfxKbcQghjPBf2eQemm7pBKh5b6UL9Mo8F2kHFQmQMajPXhZkMWSv6A4THUTWtnJQ8KhcWZFAN35QyBLE",
  "key29": "2R3EBf1Uthp2dyk9vmwPDXbtBzELHab7kMxYB5ceyazJXdpsePNwboPjxugGPfbqxUAsnah4R1iaq1aBD1SoZhnr",
  "key30": "5VTMb9zstsre3KAQ6mdgdgQtjakDJ6XtixauR1VeSMCgHxoNDJV6LDog52SkQRbcRzKpaLSZVCmwsefBTC4iNcgG",
  "key31": "ntjUrAvC1Ky5ce4gTxQPZQTVHLrLAhTYuZiaFnTQ2z8ZsNRLnNRgaiY4M6VhukTe6skkfnEwgrChBLqr1G7zQQJ",
  "key32": "B6oSAgWEzh3Agy4uA7M1YTQh6NzgqhqwRu6zFf6FRuGGEZd9sMLXrtCjaXxQNaqVKVWXXiyTm5RLsUi2g5sX3bR",
  "key33": "5DxJiABTUwSfqKKVj3UrNhFrBN4GdgwCzAe7EHyHHGGhTk6o6FUFaMhy1DwpmfaYPRN8bw3N6uHj4VEgjj6HPtik",
  "key34": "3JCDspkUBNAAaCsyLrzT15BQaXLXYUyrG8SYCe9tHnU62VhXeTcucy6AtnQeVkR2NuV7Dsj4EUSahBu37WnGqUbk",
  "key35": "5d9SG8BWhrXpuGQrcU1j79nBdTHaHNvdzrF5cRzzQkuKfEpcpdXcKXCXbPpFt9eMuxCvV5vi7Mxs45TY93xfsqXd"
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
