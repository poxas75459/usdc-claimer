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
    "gRxLzDev9d8J5Ga37KXTFyL53W88bHTHzLEM9d4LCTKugzG63S2y8qnPiDc3Ha6G7sB7ig6XavNH2p6MUt9FLeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YztxyMRHJqqGv11gzdAzo1Kf1LQ7oRC8SeNBA4QxK17EF9JvD5Xp9bEhS3yMyXiPNcsBQ5cGfivS9oDeKAfe7vK",
  "key1": "4cgW6BNkK2o31DfcxAvtWqsQALLxuNPBWNqJJQrjeH43ErcSEdNYD6JQRrWmXZ7ou9rPavUmUsSQZMdEGos7LQJB",
  "key2": "5U9CmZHe8WNAoKWdDTVRvmfScnpxV385ErZXPWxCyzH53pWe4o67FSYSjbqt4E3yQq4EKBomtEubWdM9HjDSdRHf",
  "key3": "2F9MPuw1FfmZTSD61U4f4gvK84QFCni9igWs9i1XhSq21xCXanmymPG7R8VWB9hMKBq4TnMfDyHtvSBubktmu3GM",
  "key4": "2mNivXdH9hMSpfivjzouG7vF8xSAYKqPYm2WGmDDCCw5CD8PujLXpX4Ho89R5y5KhuSPvtGRbAZug1VsR8LPseWf",
  "key5": "5kyedfkyuZEU5zHpfRWgYE5ccqFsDm2AET1C8BnQJnpKg1HCMAHApL9ffDWor6uHj7qxY73QRHcMTGVziPtDmrk",
  "key6": "dnMLVZa954E7QN9PVwncXzFzY4ii5orRRLFEq575j2WzwL5eQxrwJNd91Nj696bwtZuP6XqDM25VbhEZy5RYxUq",
  "key7": "5XsPohhhqv6XFsnjZrQVjjLfEfEvJeDrAn56FURJhMgFzz89TrfytbTvnNtH3GcyDCko3cbRSzETJSqoNQPRmsvX",
  "key8": "3pCqPYtC9kR37SsGUCcctA4Re8o6BQMBtVTtrHuSM3oxkMaoGJKzNVuNYgx9ZuLGnAuitiaEc6sux6LBmy9MTCL9",
  "key9": "3ktbtA2tSDUhPBXBwgcxXHxags7vNSFzi5bZgHfJPXfMu5owBDMEdL2h5z6zH84i3NPja3n5QirndGNdN3QQJWKy",
  "key10": "5zbHH3jVpvYmm1vpwC4WbcqMNC5mEkw9smHjiofugBcqnKn3bqMErVs2yazxDeCkmM7KDVBUZYXLgLS2PwxFuUM1",
  "key11": "2yoKHRP9JPyYFmMcSTVdrLhHMtcL8LZpWK5m1QtvocHriNLEg2x796Gjvq7TXPgw9EDN4WhmfzMohioJ2FvAZs9i",
  "key12": "3PA5XbNZNkhDCwhe4mTzZa9arwexj9TCYLmuKci516qPcpQNGf58HCQ4BF1aaPe6XiiBNwQvXQ2R3XxU1nJJefc",
  "key13": "51H1qCka9Wv89Sk1XaBfG3TUUmN1D3K9FrRPMENG4fTUgcguLzaxfKTdHJogPPQUfwGHv2McFFkSEFzFjjuDKWkh",
  "key14": "4Jo4rq4AQ3N5MNk3LUPKZVnxjDixgGyFsCuRbVnCAQ2fE6RVZCau3K91JvrHkEXeMR2YQ5dKiwx3HmhfvBsd1q6D",
  "key15": "2mffwNpgrGvDdwLyRGM2yx51eppxyxx4bgcS3a8tVXQmKkckAZzCqP7tLewzzcNZpC9JJ4c4ZCgzeMF5oU5caXGv",
  "key16": "4Wm5dXe5CGVpNEt1C1GGu7gTYh1ZSqLDqd4TFnSPBWNYLrzSiiQYaRL6fqRtbmLEpMEr93SnvxcU3i2Uqz9t966D",
  "key17": "4BLFNDsJDUW8XzPbsf4jEHVN4FSeVUvcmpJTyPvMSaqisNDqVSRKQEw6vyzahWiT2yWr7zPLNUpT5H3pBwZQwdQ6",
  "key18": "2eSxDycUxjcnBk5ALqjZ5r9mKacdRR44ASf9LbpVAqTVJkCQMzcQD4CVqvpG2bEDQNKK34Z95uo98j4y4pjDmUX7",
  "key19": "u94EfFLRJKJtDqjxHCnQYY7LBYdyLuwKFK9ebP41f7Nuo1hSYuBFrAHsePtxi4kETN8n6ViPFcCcoPLQru3DDKH",
  "key20": "5TKViqTs8xzdNNS8Tg3wYD1R58rZfUyArqJRm4bw3PGLZ5D5rFD8B6RGHgVXotZ1gCgeakzpYpmJRFUt8P2szbeF",
  "key21": "4GTBpSyKigQNLsTrj1qw7vmt6YQo9hQod5qqRmCzZMeukf5siKZh8x3fHZXdY2Sm14z4da4fnEZvwZnmRy6a8ybg",
  "key22": "5ox345SLXpVmuPi5xt7q1vxWVdBCN6NV9Pbqs8RVYhMWYdWzQ4WvKHVeSUmZNniJ7fAv55GToBqtzSkwDozwKqwD",
  "key23": "5b6UsWUBPybNttnPypT5hSTpasmDks7B6JsmDHD3FAifZxhRUpzWVqacxVwkUfW5oA1HxDUW2HH1miXEupTpWqwe",
  "key24": "UD7ZHEsqdEyoRvckHt3iVMeWz3Lg2JwomBoKX9BS9Bzcavo6r6M8yk5vd8KWyCxrgX9DtekQiwXHcYNgrahN29K",
  "key25": "2PVz7pRof88LC99eYprrnm1HFncjXjANpWxPg3wcxDUu74mt6bzyo9kfCZ6xqTviTCn7t83f3eUojEoTe3rqUNSK",
  "key26": "4UdBXav7A6DVA8aZNsyny5z6hySYCmDhER4MDNrofRPH3hyqSsQGLvWiKbDaspiJJrZEvsjkoiFMv9365QfzEFdb",
  "key27": "2GKpjYr7EWjvVDGgbTLtM176sdfYF4Y6ufP4NBW27YjRTzed29GN9QNbb4i97C4wMXr3PNf8b3pCj9gYsQwe7od3",
  "key28": "YgbczB5mXXkEarqRUFMRNAVqiWfkFetth8L5ABW7xWD4aGo8BfJYb1oufwCwm4xDPmDTmbVuG4N4THKshBFndrJ",
  "key29": "Y4FJmWmEBpqiwMuk7CHApoV7x2xof7MTzeuVRbqMcAZ6HFthiMm8huZDRRX4FC4PMeTLBKkFAjwfKGRyqxZ1W1D",
  "key30": "3navy6CxnN3xmTCYwU3WdwcWdowTA8KKQJpoFCZSPKgX1xfQYvMiSXHz3EecVmyNV3KWdtTrrq8MsRUce5zHNgB9",
  "key31": "2APemNLeiyuMcjbkAAGQZutDBFZxae4eveNAzjrzAVn51tDgfdaq8AyodKxX8fzL5JDy1iMDhSg8NKNiFtHpMMXo",
  "key32": "5AQUEAa6f1GQPhd2mMqRs1dTfybcd4mxYp8SeJ7kqbwNbfycy2v9RTJsuGBQaGZup3VBG6SDebMFSAd6xGjUon83",
  "key33": "3w1QpjFFCZWE4mxVRvtX6o7YGVPLDYRKJmyXbTyBiFr1eig6yf9v9Uv7XSsT8KhgBVBqTyQodiY1tocG94dDkZ9f",
  "key34": "Mfwg8APmJY2heE8yWpAm1gDVM7AYkT8kPYCyih4BibSx3vRiybW9TrYAF2VPB31DFG4KTvJrNN2b6bSFXDPTujT"
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
