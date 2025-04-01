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
    "4ovYoebrSvDUvgHxMTTg1YHtHn6PraViiD3S1EftfacYn7sqtjD5E71u6xwcSAnSfWLA9siSp4F3zCnsV7fZy36q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqV9KFgqgw1qtKLowf3AF1o2ecTveCWAuoU3FaNXJhYbR3BU5Ly7KdYNFoKckQFnsN4W88bbotK25A8nZJ7C2NL",
  "key1": "47KcYV2cemTYeyVxZ5H76uYtsLfxyE6yvmgZbeiQoz9N4YCCfL9vNUhqGeMnGMrNRp8gbEt3Yx4PGZbL1yJwp9BL",
  "key2": "2bTTTWzDHpCPoh4p5LeMUR72QqfUHqVNugzX37W3CHJ6NbirWF5i3s2Dd1jCH4FPMNLmjpJMKGuf5eVSeEmmmyu6",
  "key3": "27CcXnmWKhHonpG8jkJW9qvAoSjK7KADQUewe7vhUvJfDhgYV3DHzFsjN8AV1MK6dLzc2UP4Z8dVnVbySFjCHcsz",
  "key4": "5xAQSkHGsdUx4u4sUEQuu59c7z9rt8RcNhW4bbn52NqddU3j2uN6ui15jiYMKxSPmgJAVEh28iK7o53RmEkUJg1d",
  "key5": "RzvJA9zYXf8amHPirYvtU5Ls5TxThGFpdyr4XJLfefZVm72wgjtoTcRDH38HVSB93uANruEW6d5YuWydtDPoLPw",
  "key6": "5aShj3djoKaei3BgagzBSPz28PvAhGFFEqkxTkp7dMVQpWq5tcSQUmW61m9rB8fapXe47UpaDhAJDGJjjMvS4JTo",
  "key7": "DdvRo8FyHWucjN4HRVtnDfqhWin5aysN4bY2ewt5CZXRjhUrk4Uv7KpPkAYtKpmhzMBxonqr6xEszwK2wCiThGf",
  "key8": "4FRGHXKC9QZRLQuoxr5AZ9B5x2fuoidqMCiRFVebwV1WJv37gAWb7iD2wizxeiH4LQHKk8stsRnxT9SVPDjzdMTy",
  "key9": "g9pwmftrUGevozmpodLbLfTkEXCT2tSFvPpJrLNVEuTJd8HyMUq4jGr2AgNEJpGZEXguH28KRG4vNQ68mzBt6FD",
  "key10": "8AUKVH29ytK2L5JYzMWtGgYHqyzr1EFke8VNGv6Rdwz64WudWTihc5NNPdCefT8smgnVJQGyHq4UP8FSqm59FoH",
  "key11": "2dYH9eNBpyez6qYHECNDmyUfzZvkB2yCEkcAb5mqT8YeRt5zJL2jqmGna2VHpGVWSyPGLbvCFPKWiqW7tBRZUATu",
  "key12": "37jjJGGZhV8bBar5UXAnunrp22pYoVKhyFbKJrRZMXi3THDdQ6RUpw5CzTxwRwHKGCr2whXQM5HvVdLjfijkxqoz",
  "key13": "2sMWXEpDgnSLetubSzDwDqXtXTwztt2zgmg5N5RdBEo1cTZgdZwjYGMcPJ73vn6L8nbXTMBHfy4kZdQkbScDFXxM",
  "key14": "3RJ7g6sPxDP92FktDijaXNiKqRZCas99BYnQ9oJQoUqc7aqsXh3btEmXsQ7zkF8bJtDjY9psazaX71DmJgb4Z4cr",
  "key15": "3tmTH9deEEot9oQmi131SLBkayGUE9ENyLzKRcNXWcnLzWCr1r9CMeAoohwygi5RzhhR2Eu6w28oC6jvvWvsRnBY",
  "key16": "2xv4p8vxV9PYN9pPkViXeoJ68U5s3WBrFnwPkDCsRwvk5NJdVydjiHUK653Zan4Aimoxn5Ch5MkM9CgRQnUToPeC",
  "key17": "5LuEQekKTkXHVmnESCxvB8wZ9BeGQjd4H7yWUvkKyMMyUHzp5eJ7XUeVNi9esneKMqrzCkDrR3Feha2V1FvLJAGR",
  "key18": "5QLJtDsSTsn4FuRxyRpnSF6NX2Sqrq59TFAbevDZvxfcMwUV7xv4HcSsi5SoAsAGCgqErdVM6CngBZKC2nCHD1Xc",
  "key19": "5HdywL6pczF6rjZT4CRnbR4wnDAStRSD8Jr93Rs4WP4yqMjjpyoG1zEMLX19k9zPziixT129pRkzAkNVfvGBH9rC",
  "key20": "4qxVkSbQUhWzdYhWn3ap77sSvoLiTVzcz6nbQVKW3GNYhoRQXWs3SpFbPRtRFq3cSceCReUFPNHBTvMrhccqP4hT",
  "key21": "4ckh9fvxRf2Gs9g5RvrV5szeeqWM1X2DMgri69JwDjuFgX8b1YPfgPqqnU2B9iEo1qcAQP4jQXSqWCM64ytR76Za",
  "key22": "3k39fieVq7q6o7u7mmhFuALK3GxKhMQh7kyHcwPrvM88myYBjoJYgD4HzpQFGP9p6HDKnWoFzBghPRxEdxfHPSsi",
  "key23": "2yqJ4wZaTdqKaoAMtnBnnnEMxuFrGZF1j73Hg6FK77AgpVa4Wsq4cqDC77PKrrzZQAYZfufhdUB7fNECPnegELQ7",
  "key24": "35mYAnszi311Jw6u6qpPnrBVoJSJe1M4uDeMep7aJmZb3fiKWt1REMvKjLkS6cPKp3cgvayPKYMcXzU2bzbpg5vL",
  "key25": "3texBWUiCSkdURAdUmMCJ95Mhmq7JsLesmT6Vsk94r8SkyVdMhrCXpvBTwyCQgvJFK9sJhyhRGq9Rpa2Kb36yxGe",
  "key26": "49gxm76mXehnMeFEJzSS2fZWbn6usPqherHWPQ4cgCS4Tbvbt9HxbzLxv2q168w6K5tgRDU9D9UKgdxaa5EgN3YA",
  "key27": "3SjguJ8NpwbSBkAQoUsUuEeUcs8QPHgkMEU7C2fgpsW9wExUFDHAnMjZtTv4AToWBj3vZAJDd7XorCfw3SxPgmhz",
  "key28": "5ySL9oXxXjJW67BS4Qwc2yEAnJpDKHmmPJKKiddEB1XC9QpLXSnF6EMnR7FpDiaLHxQHruhSvc2sqFv83bzH5CJL",
  "key29": "61JfTKPrXe9NdnTikpGPaB7JnMwF5QHXNWfi6tsqKmhJGoixGs2pKZtLiHuc4mtEV9jGDxcExBwujLmfQqZTb84e",
  "key30": "3sg7CRtHjt9Gd7edyggbcSXLRCWyAcevj85hDTPZ2HgcvRx6mp9x4YcDiVkm2HPvdXSPjBEhXpf7ffnu29bm5bQg",
  "key31": "41nkLBFfkHBEM663xmq1fBrDorf7Yhu4YJ1kTG58mLe98XfGpfgSgA114rce4ykPA3nXifwqjhETiTG1htpJmHox",
  "key32": "2dCCByP2YXPHqCQVKG6PR2ntRP3NNQtDPKZa2FxU1gGVrcR114aYQNjNc4ryupmcYLHSNKHwGK13fzwUrdvsrBms",
  "key33": "5pckHvyZSMvDRV7i6KX6rCowauBtT9gcW8beva3mEdAcojosdR5qhS55AmFAhhf53yJ434Mr94438F7ccyWejniN",
  "key34": "4LNH23JBK5giDoZze4HB4dHkedEvS5fwHm96wepkgSqUrxe7ru9oM6Yv44te8hPrBGGLYQ61ga1gcWzEp1LupT3E",
  "key35": "2Q3eDuiyHzmtaEgmyTK4nh4gbLrqMejMaKtocoe4FNfhorbDwWsqzaC3Q3Xz7MtEy95SHG5egFSmnSHuKqaWZAWY",
  "key36": "2zzpgtSMsWN9Zcmr6rmcEswVoAJokgsjAquuBqCfQo2PN2sH7L9in3nJhBbBE6Y7pn47JuxKPAzG2aGizFMThVQZ",
  "key37": "4sF3bzJ9G2yHN1WbegAnnbJUikwvr2ApVL8kqAR9fbJ5uSS7j9HBBnxAUXzP1Jc6a8ffUiRuE2yHGb3ZwmkRet9M",
  "key38": "ps2SVGW8Ln7db71W7Sf6ygoYxfCmQzcnWvuc2Fwu9H62eGBVXoANWuf7aZtBxdDwkSi3zHB5iPkrRiQKSNKfrMy",
  "key39": "53k5RxRgtw7Jb1UJBF3oaUnCBfFHpVkrzZ1M8Ght4srGwZQSq5Gj4vgRMXFhJdPmtNoKvgFc8kZqzoHvTjr4QuQG",
  "key40": "Ytoqs65PHGFEkTKT3T5hvhtvQkDrgVrKxtR4RHmHkNA48VYDmD51myApGFZ5CQcGdLZc8fL6xRihyTA8BM7ByFB",
  "key41": "3ejyxQS4YQ1WLcvjTRJkgdjx1psB5FYmeHhf62AyEe4MU4V6qnmyThPLzaq6FzgqsFyDbF2xHiDozpucP4oP7SYB"
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
