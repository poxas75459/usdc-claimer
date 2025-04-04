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
    "5RkWHDVYUqHTZPNikUsrmequSKm6QmqwgKm7R4B9hSCDUVTBp4jios5rsCREbS1JCRLj3dtZdmoSh9LPp5YcEA9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwphsXKE3qAS3Hcag3jJMBRv6nA6CeXubcqrghPqmbTuCvyYT6oaWBm7Pt7ny9964B6h6dfST8MDHoF6Z4BKeoz",
  "key1": "129PrSpLa9sjNY6brUSRvFu7qoUAbFiAhaYccmeb3CgvrVwa8QGCGs4ZkuYJ7xf9jfQokSSVxmWQuskJ5u8buVWk",
  "key2": "1j7QSCymmbQ4KyoKUj67FuM3DLhZEVnK99QrR85iqk7t52of1sMi4SMK7xuEE2hkLCqtjuYRNpD3ZS2waqoXjbH",
  "key3": "JiGXz6ep7ZhLqVL1HQnwDUF43V8hvFZcWrKHFZYciJMa271VF7H9XG7S7Bdetf3GcdAhkknfEf4YEo867nCjR5C",
  "key4": "37NM97xozwQpdjrLBz7qUmWTGs1HERWR5yPQqc3GaTVG5TyppLfxTyEbjU1zDLpRiNboZJVAmo8XRauaGURXS4b6",
  "key5": "4pzmWjHNixX15phyd9WPbxqUN9nSkmgYsnopBUNvHvvQFnYG7YKYsof6FGDMmtBR2u7cQ5AH8X37hpcAJWeKv2SS",
  "key6": "5Xtv4s6UVy6JRia4jcVxCBqv59TrsBpMSKZRbUCBavKvRpaona6S49NJBvLGkmcaiLKuYFFvkmzCWy2mQ1oEYuw5",
  "key7": "2yQZbAzvoYK5sh5gkns4wgutpQc4J4xLCCtSVcHZoXWCAV34UtcP2d1BAcksK4iLgX75hJQ3vd2NXjn2oijRKMCU",
  "key8": "46C2uEyCvu22AohXciqoucd7YBHVXSHr4i13XHpXqsPutGsgU7HfQKNLs68hDtXKJWqfhFmspN7pGjKmkbYgKQxK",
  "key9": "4ziizD7XxzwHYbpnJ2whzkaguNZqGUmzjeGeq4TTTiM8FzvsVQ9h7TG5GtNoUahq3Jhbf4r1tjf4uJ7wdCNcbsg5",
  "key10": "3mHKuPKLVdxurMMYS3ZDuKGGAmuHgTW9frcqJoykEGicvkXfbs1kPDg4xrhyTfedQP1c3K1CLW7ZHzzJU9b6jZQG",
  "key11": "3mWUgSpRffPh9p6BuMFYHdjPGGfVSGRh9NUJpQKGErU1zbnh6ZDWsws7PChyoDcLXWk1dm4X8MHGFHeB8cHXMGDa",
  "key12": "4JTV1Rwd3Puc9ao8pCkBqUWUoS4dq4cYHhr9gnPgUDhxRnY7KasHgRc3AVXYbn87vK71it1qEBmRqUz3N4geVtLz",
  "key13": "5XoJwXrqKYDhhd94XPEkbgyFQUwhFdy6grnq52qgEJBekva3UXKmS8YFnQSPWty31DApp6puLEcyK8Tkm4cPLQkQ",
  "key14": "NW6416LLHwKnoHbzyRzHHA4zmESBkiqzRj9Muj3my7BbeBF6AtkQW44YZEvQnXwF5R1KN17wmbmasr9zbTWvAW7",
  "key15": "4XUG7ANd8ucXsfGd64Mq5pjq4jYDM1vejeWSR5eZ3NyzFEpWdRW6pLeQin5yNvKSpHFiJXtfmDLvTMgMgfbjXpJb",
  "key16": "ig6t4X2A9TFFznbpJ3DmUbkiyG21qrE3VVfoVHUEcuBi7xPrwhshfrEySa3rwgLXasUzxx7TJm1ZGm8hDG4WS1F",
  "key17": "2i2K3y6CNhY5QeBVWn18pp7gGgwRv8LT9omhKiAVSDUUf3dDn4ax9btGeF9ysWWzhGYY4SFnMzJfggYzFiL6Mi6c",
  "key18": "22eA6xST8fkHSach9hJVLd3UWfU4dh2u49L1TzDzd3w1tbgudAP6YEd7UGiNv3Jg66QTuK1aHeZHsHBMZdiMQAGe",
  "key19": "4t1MHGvL84pqak9FvpgB5m73bWn67MT1As4M4CN3C81BiX8ptb1KASrvVLvQ6Dx5D16gPsAPDSCHz5suFhaqLNxR",
  "key20": "2Ks3xzLYauemps1XdiEXJCi2bkvxChN4kMrq4QxKqFzPZWrZUgCBx9HLWv2bq6vrcoxCpomxx7Pxv59ZjtW3aJ1L",
  "key21": "3zGV1C9LwQPKd5piFBYEgdFEgFavEayCJLqEF74EvLxsdwgcuJ4Ygzu36RbV9iYWyyiy6btKNZZmN7Rn2Lh1h8G6",
  "key22": "3rrni4MVTJxdhQZ2njErvBx52ZL5W3uLfdpqiGZ7wKGaomhzBQTKuL8JkjPgp5FUo4gS827JTtvxXdvg5nGo53au",
  "key23": "4CB2XzrsmS5e4n1bWEw9xsMWHmQg5jd2hFyEygXA7BvC7jY2yjn83o7fEmpKxyMscoSARs2dGpCFBBxwMq4YSseT",
  "key24": "2BiJMuTowwpBKgLJwzvTBMo7poKjt1AkEKTVHoDSDvFjUeRSmwScnYJq8oz59TFS38UunDTCnprffEpQv4wkDxXP",
  "key25": "3gLAyXz2w2pLCokzspcU6LZk3Aof2h2rVTYSJicmKWeuedMyePECPP6Mf4MPWqeVzX58C1UxC3VrLGMzzQBa7vVu",
  "key26": "VJs6ddaR9z2jWkLofVYVmERq5PiEsQYXHegyt2UGWX48DWt65mz9HhfXGvGwGmiA5q9hkcbNHtbNR48UZbggZie",
  "key27": "62SLoU85Fn9JJEMUuBna28vVp7VW8fuij8hD7YBe7dGrFiigFTcTgAnmfJAcidh9P7yvg55538W1jmWZCHGLJwTG",
  "key28": "vy33eRWGbnq83VZbVRv8QzZL8CaB6LAdWoCLJAcp4v8Vc664QujoJBFffRNw8L8eLActWTdFo1HexJjbv1pNRHb",
  "key29": "2NEqpwQuQNdeBhBFYraBsxeaWUDLdB29XLknC5kVQSbTsEHb9ifZicsqwURXJH1Rg1rNiRkH8x46KCvKgjPB32As",
  "key30": "3wm1cftvP5LYp6bxXNZWx3F5ZLfNhLuYk3M979sSnTdRRUfnj6BD7GAM3mDJ4XkCqwNYCYb9xGkGLx6EJkNLCPr7",
  "key31": "2jyEY7azMT26Rui1t74jCvqByFUSvjqgifMMJuAHu8WYky7mffGyhpyHcZD4uCaF4L1tSsisHDiZFZbtRwDGNSHP",
  "key32": "4daPUm73L4e5VXcVJBFSe4Jn4E7d9tS8eFFJatvubAkkKNyPtemt5bSvdMjSrnfdva85EpVLpaDPv6dxPspYzib6",
  "key33": "ebgnAjwZSgD63kbC7jVQAuSb6NNSm3i3RtQw3GX5gdkv7EWQvXdbxqZ3tRvWP8fL3jEinSPz5MHbvrMZh4m63bt",
  "key34": "Msqkar2CtCjRxsswdsHRyGN46ZYZxsTYBsmsLKCUniGA8wCYoinNtknHxQiFtJuvEPCRsdrRVYYX4QjNtsYSKyC",
  "key35": "5xmue692tgEHswzeGLHMm2F3AQFfhu2Kg35SgYZmpQ8efvi9BUFBpe2AjPWWGHzrXJ7ctZRWy7VH5kwKK8gHkcnc",
  "key36": "4Yf9NE8JjDaZiUPeR265vaq8igni6ZYBfYTqfqnxwR8A7FZKst8nhpU68cqaZ1fci3pXdT4mKVFFrdnCwQ5KJTVp",
  "key37": "5oMQwn9CLNXT3666PAka7mYk97BKAkcCz3PE8UqgjTNbDhrwZ6aDQuA1GiNyYcaA3eCriAKtFeCtbC333bU2ZkQp",
  "key38": "4wS45qKp5iVoJAdALMMTTRLLmfKZ7nkhG4vQfM9bUVM2o3QsL47UKyntr6Wghw5R5nLycKNfNqt47QtVnsm5pMFz",
  "key39": "42d8VAwdRhh1yHNFxGmBqMbPLMiDESdTjyg2WiD5oigpHbo3RyzkP2rhue4RvdKEK3QdLH54RPuFWrNJZMfMtQ2j",
  "key40": "2RKiNvLfoYv3bWKpVfwy4K2m7Drp62SE8ZyRrrxtSoebK9fiEqLTPRntefRbQ7YEWSMa2PtMffJERzNi3cPDF6as",
  "key41": "5e3S3KSuQQ1XPzNmTCDjWQLFWWbMoye6W1aWtbmuJR6udn2QjobXJMpdeFQMJ1em7wZwmAuvN9PtXe6zB76ZcTja",
  "key42": "3UKysa3Ti6GhASDn9V18arwRZ256kt935oLbdF2LYmu9XHxjvsuaTLip3fWNMkyxJNHcXAgYZaavRSMh7jiKSQS1"
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
