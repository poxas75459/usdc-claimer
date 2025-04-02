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
    "2jW3wbagHnVgMUaUqBfd3nX2mVNZvwjJ7XKJbjxdajbs4QmTED2BeowqPkCMPcPDs2XCe3D9xXCvGC84jwQUUtV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACDYvpvbVMZL9aC71K3cwejVze8PbRtwznNGdbaniTE74h374M9BZccxT6nyeZeAvw97Tw7262kx534ZGyXV8yd",
  "key1": "4JZTgWcCUzZKzFDgb8XXEP1oqHD4qPo7beYJ6NzNPENzSVux8TKfYFpjLZ8P5t7rWB6qBsT7QMmvCQhxCtpgqtew",
  "key2": "41m1mw5PtViFUkHTrNJTZrv2H36ikNkAQwcQ59VpxNm3wb5r4xzUfNPW4sQNhiPvh95xvexJHrxs1J8XLW2op5nP",
  "key3": "2dZt4fSJF1HicTeNHc9HdenNnRk3cumUPrY6RgwUGFCt6h5WZwmhk4SXqWvKqAoZaLb4enoC8K6K4VFiDTm7MLK4",
  "key4": "46rJiYP7PirHAbP8K6dkShbokefieX1gErRkkzK34u8dggxw2p1QWfDgord8JAowt5HgFavYQp4u3saJxjpy5vDQ",
  "key5": "2aY3vzF9MHhugsQswH43BgcyjKrMH9sQRcoNzbSo7dDtaLXBjmrL2hGM2Wo7Du5NCKvWvuq91qEuZk7yb8TZunir",
  "key6": "3NmApkfAG6Eht8VZuPxt4pxeRqN7xUrJHqCX9AiStfXskAztovBxRbGxxPJB4HGBqXH6Rhed6UgQ9mRsLAK91dEF",
  "key7": "4jNfvGfG4Aj2geL42gEAtYy4uFswLGbiXX9wu6YiVFRzDiVMmn3BKmeyjpd78Eh2jB1pfY1eTvaHUq8t2Y323kBT",
  "key8": "4LX58ptKc9JdhDmD9EwXw2oujUb8fWaEWcTNZGCMP7Ae76E2BpoSSTQzNomQHAexSzmmrCzV1JiEc3mALdXdHz9X",
  "key9": "2bJb29KubqeruN75cB4BURTirocPvoRcrKztUhFxMWb8MHKnsKBzfhsYDADhrcmyPuMfENp5TZEmFF7xA94JwjYL",
  "key10": "BTki4nff1suohpNMJdw328SMtb26QMKRKiqdo2oLmxyouA4k9Eo3kY6dMspZPS4cKxTid1CoDzYCrLZDubbn8L8",
  "key11": "3hiVTJuLenfwaisczZFBJgnR3EtnrRUNCKC1JMCNeJYraz8rpbdsUZTHWvSBrTSsVGkmMm2PWdP3yEyMm634STTy",
  "key12": "JvCfJinBMubTT5qa5sefWC6W2QyUCUVBpNegws2uQd7cEmQQfjnuHgrB2PomfePDnuiSiVK6jZ36c2j9SmaBFZX",
  "key13": "2MkYsebXHm6xpD6sgaHsUZvCckRuZYHfKms3b2kDXLMXJ39bMHBuxXryXBwqDywpQBXia6V8wBUgoNGnapHNKWNY",
  "key14": "5rnYidw9Apw1gYzxsEtymuWpfH12D3SuJgvXqQ9dLniw4xEvubddcBanSENv19GCdZZ25Saz5vTwEcQLYnabanfS",
  "key15": "3PsQVYeJE5TgQ6eEwtPxHEQPJ4vMzC4FZdZiRtKrDafdEFkF5mGyAQYmPBTATzTEAKZXUG1FhyhfPHXBsjw83jz9",
  "key16": "ZTYomYQqeeEP62ygK2bhWBZfCTPB2zzVnmzLLm31c8JQqd7kNv9KLy9ewwaWw8mFqACuAJ8u1y3x1fdw1tdJKZ9",
  "key17": "54Bjp6FMKUiRyveyZepXB4dzzkhzAbHk3DvKqYbqUQhfgV2V9k48Sxhkc3Nv2xBsaarb6XcdLqdo4hfJpmTMQoJh",
  "key18": "4aMQM5EUaa5tom6NLB3zMqSx1LjYarYMbyLB2ioBmid6m8n5gYB8ZbeAAWhXQwginipJ5SqjU7r2UEk1cFnda2gg",
  "key19": "4UC9Mptp92wS5baomwnbEGeuTZY63w8WYxDf4HyCA1AfRHE1pRy3kheFFi9BGX45BpxCnuPMQQNXDgwacpb382ne",
  "key20": "2njDKJSbQ6jyrVvKEEXUYVMjHHVD36WVqjKJEW61Q7tDvRHu3p4zmTw6vf6CADDh2eshoUKxazdKqj4VhoWtctv5",
  "key21": "3tgANbo1ZdnKBFHomzd2qFuvQFXarA4uXLcDipG6QubvE2yC7yf7HdWaXrBcGvLgR8LzDMuaTBqc7XQsavX4kriD",
  "key22": "3XbvLoanTzzwvwXSrkSyEiMzYyLti6aF6bfaLJJHPGxLbRPkw2hE2x7S9ETEtu3GfzdGkE7D4ikzv42d9ghdiaqq",
  "key23": "3HbdoNC7EJcHPBJCGJqRi2PE7hedVaquMtV8uYwFBYFQ6Dt4iMqeoDKjsw1UbRHq13E7Yhv7jWV3cUNyRjCHeWsX",
  "key24": "5FZZhQBpH38KB7rsiEQ6YAEfdegNtXZqd8sG8Aa3T5ioNexpzTyVLi4Kc7e4vDP9ksToVfBkCZKJ4R82q6aqif9t",
  "key25": "5zAbsEeuVizdvtqH2mUj7z5htWRAxAzSt3T4VRQ3bwu6LSRTvkefc8HLbpZqRCErVLMjJoRh5RKYwLGmk67Syb8x",
  "key26": "LnFxiPPoPzrQkta1Mr9iH6HbwV3NmQ1XbKJUFcLZiXfTq2TERiQNKUWAgjbJsod6AKgkzkBnitUqznmKAWZXyzT",
  "key27": "oFjm4miHjMqnZXF6y9tDz6EysVxoapfFW2PwLYLEpAWCp4aF8CK5ev7Xr7RR5ygdYbRAS2zbXvCUidSo3dc3a2w",
  "key28": "5SWYFa21T8XyJaaKb7VXUywGBT4WfpWjAabpE695zfWiQZQ6EYgd8AogjNF9LKYgLsk2CQAC8ECem1FZGgUrfwbJ",
  "key29": "4zWS7hkQVgEzHWbjNCfiM8b54Gcn4Ao5qeVSn3dkxyWy1tfHSYSqyWtsnnC3KXEwchi41Gj1jXKEVmzxaCyaTjcb",
  "key30": "5U79kPDuZD2Nc7ryBRXEV2ZZGDytMYesod7A6hAKua9iNZ2JYJph9yqKtCxvgPRmhsh1PcXBWuyBArXWs5S4k1Lg",
  "key31": "3wwCxY8YhL4W8vD1sFRVmYpkA5JSdvqdE8cb6Z4zDTuwb4b1i2v1xJEQEhusRDxxcDZ5X8KfgH4jvH9KcDG65d4f"
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
