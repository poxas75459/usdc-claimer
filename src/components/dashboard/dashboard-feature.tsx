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
    "2BFMUjE4bFnMnf4WJiecZ3EH3Ji3h7m4XvEEZL88LiAvXowkM36EPNG2DrNJ4RkkDgFEW71wdT78t18Et4X7TetL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATqAfcXuV6KnfA2Q3TqiXNkRFeJTtoxr4jFG6hQ1n1YkbTb4SKsq8eEu33Vm8Ck1nQ9jQJB9Kr4bVk6A3ocDdYz",
  "key1": "4gbe93yEkWYzd9HQpZq28esb4r6H7SMJtY1qEjSPpZCtPEfMai4aoX1kykrTkqZ1vYw2qHyPdQY7uGWhAeWS3Nzr",
  "key2": "usCWCz38QBvfpHEEim71yp3zJvdhPVaiMYUz3TWYmZ5rtv3kn3hWxuwUWqQ926kFvESXN8YmcsCzU7Z9rEK5ynp",
  "key3": "5suWDkW54UrF1QUmtXpbicrcih11qW9BxDabmCKir56zQLynatyJCUP2TS8PT4RiPQ6Hu8gWD6iXpsRzTyw9RBQp",
  "key4": "5nSexxRtgZrK9Sc3Ui8Ri9L1KMxaVPZhXXFT7o8ha92XjWK3sY2PugDzxH5s4yyYJn6QfS62n6oapkdSwZY71LYT",
  "key5": "65GsKNjts7Qkaa8RXmCdAiNGy6n5FxmAZPnMo1qt4G3dgnbMTrhnd5bxQ1fAzfp8i9BvvbqV28sjiPjRCEiXEJXY",
  "key6": "61T9KUgwYzScZsnhoAcnLJXZQDKHyAFLBSUPFWpQwpFXZ4o7gwk7hGHNDjxqPqQegr2whGwK6jVz4ALTRaTbZb3i",
  "key7": "5NyF1VT8dpFYSZ4T2AAvAAaVvD9bU2FxSdXvX6wxUQed1sS4Uuc8wHatL838PkMhaXpXPUXLwFGuoeWiqx7eyJDp",
  "key8": "5c4eMtunH9jVcCHG2yaS4qgicDXjdc3oFXb9jyVPMVXBUkptkxv6EBGM8Dpbr7oeDnC7zRtsQF27HDEHfiUzLd9G",
  "key9": "4vvRq7z8Qv4nG6vWH8qvtSfC8puCFQm9B5xXk7TykP6ZuxVCSqBUwccdbdpREXkonEDSt1ngNGnkfuyMy3WgDFVe",
  "key10": "49DTXeCShqHP9DdiudjhTHmsxVkvUcWdhVGCA7hQwpChWd3SCA178WoLdxMspzsueS25p1wNNhcF69aNzuEe9ZLa",
  "key11": "2M1JSNh3GBHygrGiXAs2z5FiyJRRdSbFx7Pap7xfFSY3pqWSzKK93F186hRoCCBiE9aA7wHrW7iP6hsPh5kv4BjZ",
  "key12": "4jW1EWkUuaTnKTt1LNbzFasH84ZU8c4jKeV6ot1ihtXN3X5mRCS6rp1Pcv5zQsHMsptCqJbPjGM33kMkDf4arMjP",
  "key13": "2CL4D1XyMdXgBdRYNCXvR8qxLkUodhNUyKsker9BvUaQwioxk7utNNDxR5xxFwH1RUfMDedd5H1GKpcvUYqxtvDB",
  "key14": "4KoeLaYJu1FKic8Kt5ZjSUQBo1e6rBAAkqs4dy3W4sgPGWYnHfHp4Zg83escZ9djDJPNh87bnhGMcKNu9NnV6bW4",
  "key15": "2SdsaAkX91NmHFWA5PL9FANQcnCSiuf522ttQsvKhD1n9nhTK9gZc3qjmztqxzb9C3pdHY987taaFdj23SccHHme",
  "key16": "5yijH18LaAhL48UKaoWMnKCfSoVHh3BgvXeUrLPzvmSbpV8Mywo5Q85JbXZb6eUfwkQ2TM6vYECH912obczD2kBU",
  "key17": "3e43tRadMG2EeParu6Qi3pVqZiBUf514GiopbTBHtuA1vV3yoKKde1Gu5XaUhyD4EcV71uChtzsvyVwwHARxEf1p",
  "key18": "cTSduGMo7Ycv7S3Z4SpmnawMF6UFVdWDE6XbzVM8riLPSFgDXzR6ptvHRMgNszFsFN8hvJa3ewRkUYBJBAuP3BD",
  "key19": "dttUSwtr9w5VRtSdm5WPLfsayK3CZiqiLqqmuCxG9MaiSuudC9LYb9mGbjQKGAqt1bWfidbycaRL5g5MaKD4KkA",
  "key20": "2FUc8jgpQHP4njd6DjLGLMso3HGhcvRdU2cUtfry7JrmwqF6WXsHxxGDGXDjFb6zDgqJHpRLEyYda8eEP82PXjyc",
  "key21": "y5fqYLguGLwuM1VVmS6JMiF4NGfKunwiFBe6HLS2SwBq61YpV1FdD4tBSJK1XTKjjKEXrMkNjy3i127ZfoJPgqr",
  "key22": "26Eud4sZN6p6i4eMzzKP57Q3zwmwnwYhjqLDhhiTjf1z4HdcCTYkcMpzefq94PPr8GArogC9xBvHY5weEAc28JJz",
  "key23": "4ByTVcyTcxMBsYAsweYaGEL6yTM9jSgfCM4J6XiFnJFSygAzsdsxbLT3LiBG9pqRuqaYguDRWxTRs8DhQbVaCu3k",
  "key24": "4Y7x2NKzoGcT3pqEeQ4tPYD73BZwYGZXRU6d2oPRec4A3s4ELDZ2Mx2GbWP3E8EQsQ2gzwf9qNrDT12XVBPABreG",
  "key25": "1ByFrUEnUghyrHqTuYxNCe3cgAvhVTuUhuoLE1WQybBypVYZKcUfd2mnkSrozuHeDxoFdSNsVhJKpwddpGyCfmi",
  "key26": "3QwSY1Y9RTS4XUUQWBs23ZpN8RNMRmYU4RPSF4a9oHnbBW4VVtkuFyeZbM2KFFUuzotDJYXNKbFmTUbqiygyKHuW",
  "key27": "4p2e38dwJJm9xC2wUebS27zhcwCWMHN9hjuAg83MX2ADaWS2J78T5mdMPjSfhzG76xxdfJFy1haC1DEo2jHGiUYw",
  "key28": "5uxRgDWhe9njh2QrBssugc9NEd9GHD3PiJeA6fzaZQAQ1C2aRsvyr4r8Q9pnVXgMokhGpbWFjSJhCNo6q76CFJt5",
  "key29": "DEJkQaJMg2bbirQUkEVL62JKUDfryVd6mtEPpbnVc36H2RiqqqFQp4UNhDQRH19ce2dSzN77uT528SdD5UWdUxn",
  "key30": "2vfc5nREw7ooD39a9DmKVqRhLtYCP4bq1wE8t46oaHyERVxrnbS4P6BotUkEazDEGj1vnmp26CFohVCCDkpNasst"
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
