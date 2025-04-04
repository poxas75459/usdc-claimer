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
    "5ygoDR59fFR89vcbi31AVUHU9XfQ4KXaZhmGypvfccZQXXajHV2gohwv9e885v9feh15QxZF1qe2sDhyppeiV2tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ST14R8Vw534FLCWZXb99g6KpbtJcyEUKGx7ojgiJGSLsfuLLsvQHwhcDL4SeChihcEJ7fKoBPjqbZ1jXszFMftM",
  "key1": "5WhicYVzctSxkVvGsmMwKUMybP3Xtk5EdvaH33nNu2kNV9Hjs6prhThsbDay3ZUTd56YJ7twSru4D7VLbFsgwHAa",
  "key2": "5KH93YJj37ThHQ1XmMCmNwgSosV6qUM2qW7us8AAddZPVRj8oe8HQ5MLZwvo2JegcpAiK8rpebQibY3K7zueAL2R",
  "key3": "24Pjb7M9JsMWfAT3y9ksVCfJarMNQqVo4gCWx8NCtVdcBiVnadJa6SzBZxrvTgf82eMWsHS9VCcYvNHs5Ncods3F",
  "key4": "wNXSwNb6FCRL7BMMMmKSYWsh751yMXVxDCTzDBKUGzYBrAqKnTssD7nJRJZrVn3SLQbxN6F3HxRUsz4nqX5UAqj",
  "key5": "5vQUykT6goFv3MQTCJkJH6NfToZ4u2eNiNAsQXtDddhCJSG97ejF9itNQWbKYQum82zCwgowPVFzHjSeKYXEDspQ",
  "key6": "29qxRBVha8cYTMtgSxXyauFDjDLE3cySxzoePY22a5iHrJGo2KxxJB6Rf26hhzpn79HhaazKyw5biqi64eP2mKbD",
  "key7": "2yg5w6TjZ4qhu3ywuq1NStc49Z5fwYvvCma9FErqNstFNmL2D1XALLiGHcCPHEojwKjCyvJTNR3X9FAPAreUWs4k",
  "key8": "4AH5Av32uq8KVqEpYhqQjNbHeBRU3deM15Hy3tms4nJnndMFPTwmr6rJaJvRpYR5wdWwzRq8hqN9pnKEF1kPCrXe",
  "key9": "3fq99rTzksNhnhm5ik1izmutkAV6pWSkXrvoMvJFxsEzLgPH3zxGan7Rz87HUXFQYpdp6YLnZwtxJDcbFA9Dj8Wx",
  "key10": "5fwUjGmDBj1Z7wqwdrbToN1y3j8ajufPN2Mvp3AEdUfU3mVux2TfvDXfw12ZWGvgs9VR6i9MDfGkhqZf3rAbLeTg",
  "key11": "2W5GZXQhDDJN8psRZyZVat2RaboUDhPV2NxFxGQQFBRZFGwbLpeaz6enaTUQwJe2d1hebCKhuzZteHaP9gGzsrBi",
  "key12": "4yDYXBBabeVxptssdvPEeu4KpuZdk6fxwDAoZqht5ZUtk7SsQexwVHxtV5H6EWsvJgUjdXTLoU6Vnp8L77K1z8T3",
  "key13": "5DvpMQLFdiMkpAk3u5isHGY7jfrDgKAcpiwygXz5i15DW3YAj1cezpa6Akk5CaqjcrbHWUDfpbqLbMDrVZVJggH1",
  "key14": "T3JBTFrKnmTU177EuvPzaQJvYDCCwC7bgShfZjfZspBmrPGpMXCi642KSYsTEAMS8LSiag2KN7qnpLHVQw6Dnz5",
  "key15": "4fYHHWfueHDMg7ebkvkoiv3KZGz6vfYk68XjSUJarnks2orWkWqWnBUyNLbpAyG8XE25nnjQpvjnRM89XfJFi8Wp",
  "key16": "WzojTPG2V5oMiNLW4tfVuDcmGQjRmv5fBp1JMFwYPgQRUeo3d641rAZSpZFakZEbh9NRMsMGcvXoPMmLNi7uq2X",
  "key17": "2mS6UEXNo6ac7RpCpEqWDTcT9A3Rm5axVKEgcskmaVNBPedLxcEo71ZPyM1y98STuYNwYqtEyHYLjLzG3qKJNQPy",
  "key18": "V4W6yJfokLqf8ZZRsYTUtes4FxyVLDukuJDC18VhW6AJepLFtM6pr2MUYBMotYTfXTViUVeXQcMB9jHGqR6KGKu",
  "key19": "2KYR6JBXmWvFPwXcjsx49q6fBkqrrZww7sB4ZMnezC5bGGYXcmsoHpozbW27KyEus2bJgQv1yq5BwDz3HqmtGJwc",
  "key20": "4QgC24k4uMqCtfht9WL9YGSxkKPfE4ZShxmV1pzxayLhkUqjDE7PzH4Mgxskj8akQJwZ1rf75bwZurFokiWf565e",
  "key21": "5tZip7D1nK8yEfFatftdEwvdFUDRkEnDw6FDji9e3zjFqWgrzymRc8ShSYeEoXDqBEyaFTuua2EdV228oaBnSyGc",
  "key22": "2qYsHST629GhSofYSdRiQFatbPW3TxsvShaw87BqQrKXLyZu89jRxm4EWFvLLWP3W3JEXSqf67SS2kC6UjqwxvSU",
  "key23": "5T9G97Y6Q3YYcDTHXaF2SWpcTRZhHuPt3NMWojCndZrmcEPpgVQVHCtBMjgk8um5MdxbpFaZhoud5PBpN9eM3eMV",
  "key24": "29TKdoFdQuoLaRanG9iuhMXpTZyKFhCY1iZhJfejxjqbWBkvEaqtcJMAqyjV9F6zApKZt51orE76Tp9dTGirvh5u",
  "key25": "3aZBq54D9BtZw3gUvqYLu93BC1ZiidGWSjP1TJN2tF7qMf6T27AJnhXK2XYXJQn851s5PHUa95Lx4gaqE8myujcP",
  "key26": "3YxwFjWa372tqn7fKc1UR1baxH71goUDoL8tFutWa69PBijAfBxLQSQ8c1Xni4KwgLo5Jk4fH4TqPL1KAWR3yYmF",
  "key27": "3wEt9L9SkwjjE1btkHcSHxRwCDL1eHp3nkKeZ7EBtNHcHF18xbkGPzKH4xsxf8jMJ7XBvDQM8w3PfuxGfrDkw4ff",
  "key28": "4LWRWjdFHe93njdio5rBREmy4MhvwvA2zqTPvx7M9Qb2NUvK7HQuXwaBLwDi4eXd6B9s3w9YCc9KduT7kwZLpR6V",
  "key29": "4yMRQj1zaLXbtmn1WsuNodx2YbwQcZFVTJpL23tXbohQKgis7zkciSGE1FPpFuz7PGaTReUaaZq8K7ZHEJ6U3ctd",
  "key30": "3sqBWq9ixza8YfrD9uqu1DLf8T6UwTPxp8DtYWqUTyFU3AhhF2DXmr5aF5sSsCFepQEcpHNTNxtjc1EbnpHDYNz",
  "key31": "XGX2vsaA81sHR5sAEB6R9gJ7U72XGDJUTA9G8dTS4UbsaV42jfF2bHwHwPCZ28Pf4Wfxef3jeDacGWHQHwBAkJo",
  "key32": "5T5bjPVgAdPM1n1xuc1ze4zDUiyqNv8DQ6eoecVxQeY4dLwPANEDks6NZtSc4CrAPkLnoLdWhbmmTz5shRLRfsiZ",
  "key33": "63yooAHFddFW2P8b5KZqDoLR7AZsdDX5cBqD34zFVPF4ysHpTgR9pExfLXRAe9RfuZuFvgSUY9AK4iZgnkraFpQx",
  "key34": "21Qn8fXrHBFSCbBUiYpf7RLgaN8VH3twkJqu8z9U6rP6hBLcX7PmvRvoTPwrw2PcJNHf8HaqNwera3xnAUaEBZTK",
  "key35": "4XGQbJUcm77eeQtAbvvruwjwngQmYihy45pSnvckyVLtFLvnAuMYvPXSvD9TXpEaZFn8DLhs2wn5uCu9dZEx5UVa",
  "key36": "4ZyYp5xvhwnFo8SXoP9M3uyUuPjEitPXDY1Zvd7TW9JKLZUf1PgvASL1qctqP4BF4swjeuiAZ3dwaf1BwVx3kuA5",
  "key37": "whRgQiEY3o7vY3HRhUnJbvipDkkWobemhVdAxG2fmSBc6B13VG2YBCMv4wckFKwDhDoHZgPkQvBsC496SxBGcaV",
  "key38": "3msvhH8J55McHYtw3kMsfv3wFguuAqik2qkYEF1xKPdSS6FLyGZRgcRT35Xu7jomuhuoAQqRNzPqjuqbXLd6tGZL",
  "key39": "3xsDcdC12oKSxshKVfXoxWpeYmmiHXYHc1knr5B29QZvrRYBPThZ37hbZQyx2WBeJNr8iC2u4Z7kiJrn6orR13rZ",
  "key40": "5SVae2VAbLwzE6JskcHhspFZJZP6XdgVTthUs7qLd3V3KtqMzVYSfmZbrbFtdCjgnJwhukSD6VnbVhS661JFP3hc",
  "key41": "3rRHN34WMWBHF2a5QCX73Nj6NRhNZANZkXWtVq1Nmj5FLsaEe8ht7PVwp7fh7TShHmmZ7TC1vXvi58k38SEDhnCT",
  "key42": "5JA3rJ1k5yr7n5zJdz4WnkyGRW87KjsafVfJqBBn9eGngxkQeUXYiTZ5sivXw8LuNGuBw28bCWCPRqUeVSYnbpxE",
  "key43": "2eX8ArrC2vHgBotuNJu28MszWmo1NduZVC2zEm8CYFsVpoSM8b6t9UzumG8LRd2UiQhr73hKYq9223mcijeyodXT",
  "key44": "3ATQyJi3eiYToZd53HmqB9gomZVoYUzwPoNxdUFGgfDRNtBhHVXY7nf89dAQzEYUua2bhKZtDv31fXnWmetebbTS",
  "key45": "ahFYTsAyZ57PobnndYVWSeCZtoMkmsk5Q8jaQ4DPq92i8tmzqfe33viGWQRKBAzqKmhYEGD2hEjnuBkBKbhDSoa",
  "key46": "2XH9qSgnFLotY66E452c2yNyTt2iTRmJjmFhLYpBkmLQtMXw3xg6phKW2fqibYRQPfrYhrv36TpocEv8V53gUqVb",
  "key47": "qSYfT3abmzofACzkMrf5eEj5k1t21e5HRKFssD493gQYwdJnC1TYvZsn1FsqFpKrqocLbZKPCJTPpCXPWPfWmra"
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
