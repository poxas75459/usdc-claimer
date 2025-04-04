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
    "5DSaxetw3YRSVJv2MWFNdjywDRVibx9waBdehW3qvYEXrVjR4VmGjJ6V3z43rMMzqg9QNmRU6xGJcvG3fd86DNsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6u7woCiiDJPKLGnNtRJ6tqC3e2L5oFyuMSpyM8xGNw1HnDRVKqpDWkZJ2YSd6cPBpvR8D3zbDxiv3VJLGHMEPy",
  "key1": "2VFusacFXBTmksXwWsnjVXYdpNmTyPjWDJpaGCCxBPEsa96mFfk8FKbr7Gafx9BUCcqqJs31QaSqC4piKRoRDJzY",
  "key2": "2EdG5Vn9ZvgmMHfzduaK5b3vsXpDKRFGcyWRNoYX2nEant33DjJWWHtiG3V1SAfChyCkgSb46qUdVMV3tW9jeFrm",
  "key3": "3uN9mMQaN3wTh3womKLuwR3Vb1PYDw8fdxsDd2kGrj466aTKC3kusaGRNrvWS6PzwvmK4CKmWpJh9MbdRW9Sim6b",
  "key4": "4WTu3nDDTaS3arP1q272NYzMrekrALoP3z88rygPHDvssR9oz7uywZ55CKPWXg2tL2UzgUmcrFaiB3Dqy4GTDtYX",
  "key5": "51Axyr1DyoDUjkCnNhmw4zsuri1eUNVuNtHSn7gqAaKiRY3aC9yyHdLKwqgTAkNXwwSUWGfNCASccgii54SELAFz",
  "key6": "UXgkacQFxVfQ8ks5V3wAVEdNKywBmXvuQjo2JmoeDWDfBtP5F4ytvtaU2QvuznjE8nBfCTJF6YiEHyMEAnE9efW",
  "key7": "2tizVHnwsSCejtzsPxYCn7YmaSV8QjCzWvymDGonirbKu3qWQAK3rtzwbUxCsBfxT3FJ3it24eByftRBim7cfdhP",
  "key8": "3LqXVjF9iNkeLviUK3xxRVBNiSMPeP2L7p5D6fvXctqWfGnTK8ER3AsiQiCobhuTAdNtp5P1tQsCLpoGyXNfiMvV",
  "key9": "54yCPLcUFAK2JKrTfkSDn3HNLAW97XBSbEgASA4oWLpyBM5Uh4B1fY42FaWkjy6tsHvnzs6144nGRtRLNnm6NP86",
  "key10": "2a5SqpQnwtRyprL275MZpjfEYNua5xiHKbkgKjm5FtCzPHEofqd1Ja2sMhexjiizLo326ANLR9RGXm62MLeT74h4",
  "key11": "27u94UXbE96j6nm89rrQ2PxZwxW7GKkDPmtZqD9g1tKQXL4A3hPCTdBdJdBFL5vqLAr8Zj8EbRjUUwPLPLK7yDYM",
  "key12": "Xy9euY4BihHtrMdWuYrLLdTBAZj9YvDMPQgcEAWjxgMZL5sfYgoDzwTmuMUUBmuM12fMb8nBaDi4wnkNG2zerof",
  "key13": "2WrNeYgSMPWScYwWcRoNcXg6Zzn2XLMhG7gB52eJoLuvcYk49fC5WdZXfmtMPY6hwRUUZ85YXxJ3uKiNWfszjisr",
  "key14": "4a59ptjTTVYa6gt3VmWfA1rDCeGQw3ne6gcesenkx3W95cs1tTwum15txv2ymUGquYfVHJLA49VSyogSmNYDoHpT",
  "key15": "g1Wc74Tyd9UdNPdpifNVRf34dp7aydoKpH5KJ5ADV9sAUjC5P3NCT2kBZoVyjaMA2dsdhevbgXkj4uJqsPiESGH",
  "key16": "3kJjEtskGXRJby4KtMAda1gotE7aNdBCydbdZUwv8jUJjyZRWJgqswHeHx7ph3gafwyNorev6KLzF1FqcSRGgHn6",
  "key17": "5pEGSkrBUEdejJYxvPRSHDq53Zw87CbyEG8o6Nr6DJoyn8qG3VaKhWygek7uCrzC7ssqDqgTTpNKcnMq5pfrDEBZ",
  "key18": "333RpLFduit6JMMsa7uYg3NbPJVkXss6kRuaTZnDsLy5k4qxBBrfpobNLYHoWZufMD4MEwu6BzaAgTwArH2bc83K",
  "key19": "faQjGayKV7v9Q7tH2NiYoGyeE4wpS25X2XcogQHCQQk7CbkD8ftUTEzCfTDJntF1rYe9PtZB79unErBn9uxTagR",
  "key20": "4N99YmgBnDhYjDzni1w85ZMp1r9yzvefEPQxttf36XQK8aTVAhNgR5w8vvqcvvyGLJyaaXmyaYmBEDWpK97Ve6WS",
  "key21": "3rejrzQbXY12hJpGkViKkU2pkUpRstS7yXfXARDSr1v3rNZ8jbMDyPeu198AKY4dtd5fJCoYGtGGDxrc6CCvR8pp",
  "key22": "57T1WjT6WhYtcxkoFmoucL4kkitsKWDnZc4vDYDqz4RUxr6eQ1PNizULfLqXqEeAWowAKSgD6hCrhJkBakCPE1Cc",
  "key23": "4jLS5U52Vgh8ZUgCzAzoy9rjt8LdkW7A2TbD46wJMLAEH4nUKWSDUAv5DL8edwe4aQXyyF2iKDPpSbGbuiQLHVpL",
  "key24": "mSV2aDuw23d348p1WNXyTP86HViZNuUx37NSKZW3V8wTzxAsLiEKK5tyvwdwxFARh7JBPxXxUbt3yDGqG4unCjq",
  "key25": "WmS2jnvkxg2TU7sbRJwNeRssRyYZsJa4pUDqgztBMmMTVv2x3rnNvAjeemvWo9kaemePQRaHVkQQZ7N6YEXSzs2",
  "key26": "3tZCFVt4BQp8yz4ZhKqPsKGXbG15SygoeMkNzWY3DeT4G7nn2Dfz9QGC54gohLpFPnrLDxaQJm3byHVt8NV6s4RG",
  "key27": "4bEo3xTBiDUaYmVzHTKA6wBZAWsZWZngGX7SWC24gGBL51fAwzvB3ZMC6riBLsNW891WUVjPwwErKai8xCGL2d2f",
  "key28": "24fVqDihMztNVzb2bw6DGfKnC87YSpSpLWWYfeKCDVwe78q6Z4VVhE1vVxrYJhyKGVjwJG2UD8PekMfCYn39Msjv",
  "key29": "2yFjigDt4Y8ns4qbZLhRTMWUotKkph9Qurikt3LbUJGXw4rpEkJnggn9Mw19gwANZsf5qBBTsFRP3ZAeXJKuub1Z",
  "key30": "5wjqHv8XsEicrSxGhFFbJFF15wFE9yLZWe8wdbKsKoctU54F6QqJPxLqmPBLQKcmAyD4KsJ922ap9zB9YgLJXDBd",
  "key31": "Ph1Evz4iCwQJY9wiKkDBwhYp9mMrcLnbYWo8DGCkqLm4djUhzDMc3WYGidVqFH2vy6EMxPNaACCM9VhfpPihZDB",
  "key32": "2utzRDt8HoTNjv2Emg588ge9rG8WZNcvPh7v7KYLmFTeyT7k6FjqcUxDZVyd6xdwm7R1AfpdAxRSFjM6FTw271uU",
  "key33": "654DzJqTtjt1QVHgeoySjNPf5EQcWmSzq7Guqto387A4r1RnR4d6rjtHa8KjfqHZM3TQ2LYXQ31K1PPBqmxmTEU6",
  "key34": "4AbjRa9P1Fb9d2HuB3EA5kmzVtFdCbG7CB7iaLQFC3hZF2oSqqFZoetxSzppBdof5G1k73PuyZ2EsZMHcVyxDD4"
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
