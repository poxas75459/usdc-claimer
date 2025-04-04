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
    "4jzPMQs7jU8xy5g7MdJwufw8uWULPGkcCY728cigPxDkfVxHyeaUmhnatrrgqpnA81NBqJQw54K1NVAReRSrqLzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2ejhitqwyXAeD8uB5749uGH8gz6chCw3CMQrukorngs2wSZrgL14qNrgzz9uxPR3UNf5Mqgm8LyaGTQPkhVgdu",
  "key1": "48mEwcxsVPH9uX5T374ZCMzZLUUyLshyqQce3bKJfAckHZu1tvAukVXnZvqufTKdRSAHsi1vtXpDr4wcr3uq6ey8",
  "key2": "8gyG3QKRPG2LkzaG9hAF2fiMYAAqHnD11SzxXjpY4TziuNtyXN9KDEQhrVF1UMjRbs4h1bd8ZpbVrqVkrvLpSEg",
  "key3": "4DyW9DaMietyfa9kDk2Joxq3wnk3g9tZpw3LJUuodfFgunJLfjgnufg26w7YBNNx4KH8g8pXiVQ3puN5pSPJiHDB",
  "key4": "3FR754W3D11crLGUfXiXVW69pWa6xnVPRTcvkxdjaGSHidAE4mdEv9EQSLyfxTQLRDhNGTTBYL5hFp61ykNrUMzA",
  "key5": "27BXjN9WQNqpwJurMm8H9zdnBGt4uTJXAtwAGo1HgyyURzyTZGPQSYd79e4oDERhs8Z496e2Zss4UhujzYbX7kaN",
  "key6": "4oa8KJWpT48u5oaLbmDi1p9RBepQzK4JM64Uz9tmjRHXdGChcE6tCszZHeEgjr5q2v3zfg4XFhFRQe6Ufwuadu4s",
  "key7": "3U5xwDhUKvkm9xu8ckFzfnomkwU56XAJBAstt5x3mUAMaWZYwuH48taVg6GR38zEpbtvXkZTv5oem8K82WnA2CgU",
  "key8": "2pbdfsjZhLaZspxNTzHJus8WqPGk9stDBuSeEDEBbcfN2yj9havr6PPPmfNxNav4JWSaWbZnXSzQxZrBebmS3rB2",
  "key9": "4asTdocCbTWPYEwo7Vup2M61B4g49tYdAF3AY5kmakgg23974NRqUZHEjcCKc1Ts83Jfj4MGPBGWSCYm9qqSoPMY",
  "key10": "2JrK1zxuUnezEhCA6fwqEyq3xXAQkzJ9VhrqS7AWZxVJgv7mtUwvi6SsMBZ4rL5scrikzDThH18HqTrgcfDF4iTe",
  "key11": "myTmUgbtFkBvzxRQnUYrmaqk6xxJGhMrCwE3cMzoCzMdNECmgN65Kf6p2jhogDXqobMiGPMQQCoNnt4CC6DTcS6",
  "key12": "4dpCZDM7RY5PrYe46ZFRVWPheNS6SSY25tdC7PEk2cnZNJPvpAmSNcgpbjRe6qcoV6xgzDiyYrSXCQ9wa7xBtXRk",
  "key13": "5suejeF1KmzdmE914kDsDfrWZFbKePJc7BVbCatBgA8zjWy7GVpGQJBL6WusZupVHqaunj9NjNK7oPPfhqM5S5UY",
  "key14": "MsfCrWzrqszAcGT6qNzeTPqXrnr7993FREy5Hx2j5mdQx7MuUBqzt72RHeq5qkiyBDHVeuM6CKWfkfr2G8KNmji",
  "key15": "3ofAukpb4dTJcpbXMBgeumGcavMD9Z1Mhm9X7GBhQF828UzjpKcbf8kzyrghJ4HFUPfyBRidKUecBt8xW5RHvg42",
  "key16": "2HfZ1Svwihr9pTavuK4haZ3QEKUR5qUoZzdbbxpNdB4PJsT7G5HN1tF7i4Fts1dCArxPkraYKQKK97uvEH6F5Tbp",
  "key17": "4Hs8GiHiYnyMLr6iWbpGfEaAZsj2tfc5UvSHuczBQsnJZ9YgpawhRks1hVm4gkwMathvhm2tKcwgV8NfrgjEgG8A",
  "key18": "vZSge9fqYU5qCtqZL8LD57cnUaGEsoNzoqiToAk4QXQoda7etbf9qyV1i6iNxrdoaMZJvQKJN4WEmSP2nLdrzRs",
  "key19": "3L3oRoZKBYUkdgHcY678HVPyGQoyPziTWnaf324x7y37pYUJd7a64sNmG88WuEob7VMCzU2A1cLyPCmJVUcMtyeQ",
  "key20": "sRqLT84xcswoYRGb1oUN4FMGUXDfdaymyh2tKUjMdevqDMAsjeVF19qxsbdCiWgZfvWPF5EUKuWT8SBsC9wNXGY",
  "key21": "4dHPxHi5WASKhVnrZRevQ253dJxksSNwtWFdWuAnzK4yzyzqQHHp2TmA5TrLfeTTknyaR2CBpLiRAyJNfxijxpNa",
  "key22": "4fqNq5auDhosBz6DM9qoidJ4sqPSWGq7wk8HVQ5L6Q7p9WkB2SqJ5X7ZSX8hqkX1jKFs9fujAegXzZESxeJAyDmM",
  "key23": "3uDuGrxWvp4L9fn8oQQQDqByHnt6JBmSyvVdgPgaotNDa9P2yUGSLHo9GDTMSoNvK2GPHWZqJjnYACefwSXwPYf9",
  "key24": "2xo8PrphVzPHUDPPYVToYUEn7UkhVK82GJShZ7zhs72jX6LGKuTJnozCnJmuPFN9JJV1H9pNmq54dGQy3sHv1TEh",
  "key25": "2GREGhQ7jC6GnkiJpnV6MvLBeEkKWWituaHzHrzjbiMMf9HrsuVWwkfuRnrTeCTDqfCkmqiwjDfygrDVbfxEPC9L",
  "key26": "4qf4AyRWcsUqzDyfKabmJ19LJvuBnqoebs9t6uKdN8e1jwoCXX8r84QW9JBYkvxkjginECttmSCV7j2Dg7VLu5sq",
  "key27": "3r9df7eNujNJyLt6fbHAT2mJjPWinEBT4oQGm4Y6hgvYAD42QpooPaHvYKMPZbf2VpenWpkJy6ANqe8DJYq7jxEb",
  "key28": "3yhoCFFrvG5U34XZ4sdXifRuq9arYAXwD4Nk6YUMfYRDkX5Wrcashu6GwRkLWWpC2QNctKgN7htkoeeeMJrcS2gE",
  "key29": "64ZvAxCTBvqbYfuqfxnW21y9HtdLjnv9Ev1yr32pv9d4UUmcJJy244BYmngTAaixowRG91fPuLUwo65mgJ9zDfz9",
  "key30": "3RDztt11zYYsRgNfihu5TPhAREjaUJkghmfnHugw7nyJmuy56N7gdZagAb1AW8aNvHy837ces54pFNcX6Wr2MDsn",
  "key31": "3E6t4vGkQacwasrJw2sS6sn2YuPAmubSyiqd1KTz9oepfhLZn7LSUCsGF6zsgywJMqq1QS73iQ2ZpZVSrsRB52o4",
  "key32": "3nZXGVvU2okXBVaf2FUV8ynDTcWYPqHkMUxKGphhieTKeGrLDSLRvrxo4BLsV8PTkDdGrVvWQVDRTitBaHtcVpHV",
  "key33": "4uidmy1DqEbqczY8Km2npqpP6AG7azmUdmJ7u19r7uKs2meeZSBV7S81Z1n6AMzvd6ZUp7H53tG3bHj9T6Z3oQao",
  "key34": "47EeuepdJ5SeGx7NDbxjSefTYJVLDxehj1JsPnqt18ooZf4GCri36LZNDRAcC7kFuomG6uGM2AVbeTp9PqqZrBa5"
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
