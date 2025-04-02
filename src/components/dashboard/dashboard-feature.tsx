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
    "sfRkGweqPunRGMJ6Kz8pFs1y2dnqeybrhp3J3U9EA3QznPmDEswQYtFQ2VZFwH1hy5iQNLLgZ37QjASf57SuDE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyjjU7tysoAA9RkaEMiYoLpZZNSqDXr1LgqfJEiwaguCRpziy99o1oT5k9fXSenyY3BQSNoTCzKz7MfSFaw6EVY",
  "key1": "43MwtbzBYNcWMmSkbw9cQtrexu7o7qkGztgYhMWkhD3o53eqGKQXWf8efMibDKCmkqcBuCmirrzr3Y7CJjXfKtxa",
  "key2": "RJDAkCQ927yJffrUvcHACLR7fHtGmTZekfNpLR8pf6LM8Vc2wc9wrdqVZ34ZvXMzz8TDiNoTwqviQeawskxZF7D",
  "key3": "58KXcwmXcZhv4CCgGGv8iDQL2B74jPgDqN4hPL5zCb5zxefpgtJ8JHSTVwkJoSKifKfPAHrtAUnBo4S9dhgb6MEy",
  "key4": "XYLEEurqXU9tocgAkBbgahqGRRpajYf7tkTmdbj6XB3ayBaYnChgbtmyTaNoH4h6bA5HnPHo2nCfebak1t4ny2y",
  "key5": "2o8PWk6kNZciFgiFpmGfJmdNLXpqW7SLqKhV94MrUJtBmkhi3qAA99k6cVQamXruc5NMLh7uf7eHQHAnXyr6RDpR",
  "key6": "4gsXGLSDR2t3DsLfhehCQcxDMVwy4BLXJMjc55MfiGaDPmEcVZ43LqBLm4D5wh2DPvyMk3SfTAkrkQif1vWj2jWg",
  "key7": "56jXBPN1gpSjHyK6oixLB55v7ydYbWwnFVDQpgvAab7Pge6omDRCEWsCz3Cf56xcEZdxNEJ6UB8K8Yy8Bbse3B4z",
  "key8": "4DrkJEtusCck7SNFwgAgo7YXUiaRcRCx5aEK232eH8sBo716A3oAEn73kixeYUQ7GUEkTFwoXpjrDkZiiJgpNdgN",
  "key9": "2yAn65STMFRYmZ9czdhys6DzrqkjYoWUS1VkJFHxZAZezYYMq8s2QY4WG9cRUG7qJBmz4sAh4BY52WR3gf2pqDKv",
  "key10": "2wyLaibTd57thEiYQ6enaLXW9YqVwUH6KD8HhRtJoq25iqdP7ZhTVuaQRvKfA7EVfJ358wSEiBNaQPLEVwYqwe4B",
  "key11": "3arir3nb2Ye77zWwYh85w31WYsvdo3nc91PJrEe75BpkpDMjdkdWdRZxYEcGLftBt7rztP1X4Uow1p96pNvh6jZo",
  "key12": "5X7zCobkjEeM9KoZtRMgb6nVdaeRXGwk8WmUSjhfAkopgyoV47hrDdbGLZ4czsa3UtHSATnyDDqHPhSyRYYQfx2S",
  "key13": "5cxNrYAksmWLxUg8AEs6LayAqJSapE8xLmmaUfG4k9LvVrKZVVqkdqKvFBuTGphvR7nPqsEQ7MUnFzbgkq1Vwcj2",
  "key14": "2BoY8WJZfj42tnFK1dQ3To82EbpN4th9c5TuTJ37TMLE6C1vrB5h8WFUe2untXRC9TdeWevcqEDy6dgsYQQsDMY5",
  "key15": "xNQAA4TzcGt8nwFn4WfSncuwHNC9afzePoNT3PxJwwKqjMuChyZ5vfiUqnAQi3y7FTdk1zsS7Psdqyj5yyFGBWr",
  "key16": "3RX7XKRmshqL274PpmamKMUn6SLZ7VLmsWXVbS6tNZs9Gcet9vGkBVh2T3CYmCaeqwgS45z7Rh5n4L9Wp4xsCF4S",
  "key17": "2y1xpDqqo6duaZpvnKd82AEBdqfgNyopbbB83f1SsZeLF2dt6sNFtF6uEnV3vcdG64FFXEnbtuU1zz2iNhLS5SJK",
  "key18": "6482jgP633w7iWxnEj5nU2cBFhrUuAw7Bwf3zUmE8ajaeQMp6NZ2BfxvCn586kajAGwKGw94A53sRyLkStrTcgGK",
  "key19": "3rmv3WW7QkJDrqHqE3RTusscv6rADyh51N2vQ4bWDMJTib3sAQ82h87uXufxxu83cGSY48E9vXXmZS2rgVfJJx5z",
  "key20": "MufUMdtRPJVNckMbcetbENrYNJr33JhJ6i7QoLcMPbjBRtmdeeSDWzJQgDjfHpG1XyVgbsNUcqhw6d7sP8Zayqo",
  "key21": "UN7DJ248Vpe5QQtY4ZazVTAY25QvLVEX9DC5ATQR4HLaDi99i1ZbEKycDAFDRByatDGATmo334K46adpHLb3bU1",
  "key22": "5SAd7z7MbeEL2zbMKHyxys1ZiLhjzVKj8Wsujh9cYaAbViV91usvPnuVMAkx9ZUqLVqoiwBg6v19erq6xUgrHdAq",
  "key23": "3jLAJqzULsvx4CWZQNdNpL6d566xf2jvAjoGLbq697PmhKuZ3LR3muJdazrNjcJ1Nk3B4q3S4zZwQ8SnDFhdhagh",
  "key24": "3nuqaUXhbPMtz1fcb8XYxFuZmp5APzUxkfrramrMg9GpggFU3MaEP2rfxgaggenAXp636Do8Zb1567Winsjq3d3x",
  "key25": "3g1LYPu4Du6rJNvNBzMXUcSab4NLp9DnSWmyuAJ4DCRCTemAFRm1j85cf5FEuCqUeADxjyX2Bxd38uHx9Yk6XMY",
  "key26": "27gE4pgm4TG1tnH9YCy9BZHfvG9GFQskcWXYtUj2FbMpfkTvDtthoJHE1jerNAcdkihEMs9DGCrHN9d5rymczoGF",
  "key27": "2dQeZnCLPJ1KGBs6e4xDT72KBiTwNtdcyAnvSbjDrsJywAiiMcgLehKdrz5Q88VsqtBF18PQdLEhcsUdj6j6Z3nH",
  "key28": "52WyC5EyZ9nyzfux6vsoVZZiBcQTDK1kKiBP4JXNATF5fyuHwHb1KvwkBZY5Xq7yw8g28USRodgNBrujknUw9gCL"
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
