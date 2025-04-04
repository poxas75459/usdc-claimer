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
    "24fqcAd17HwZAcLd2bsevRpgUrcf2khzeoYfcw6hfcJs1v6586ncMtr13v4fhJPxFTomg6zpzaUUd7wnrgEhRk97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Veq2Fb71kSW7wtTf7SgXSU4Rb7ZAsx2p9eH4RKikAABfbjf7SH1qnJfMNYyRoq2qNqhb1B4eektxgsdxxUzvd5H",
  "key1": "2gs9zGAvdYStYRtJ76RG8xYe9JQzmT6zk249z7R7TA85h98xwgvsJMooJoEe1FzjZ3K1YYU2WYgrxiexuWJAL679",
  "key2": "4xA77YMGXyQBTorRTQHBoTju5HGZbqdyAUig4y3wv7JcN6pNWWbCHzfa4yCjRo1s8qUmVhDt82SCv7xuH9RdrqYb",
  "key3": "4hRZHY7eGJCxkfZrX3AhNMaGeaW1o4muoeNKzqgRSMe2FYQL2NU14b65VtkHodGKvPRjx5EEMvivTJzWZLrpMfWh",
  "key4": "5AY3CkBx1qxypVQ3mvuit87xGHuEJoZfU2X2nTaucRTUa6QeGpLTMzF6kpSeMxqa1kwtwUjbsNV3VZkLKNYrm4X7",
  "key5": "WTXndFqj62Tabth1jVA9A3gXt5CjXKkw6VnvW3gCWeVgjTV7V5MsJ1BPvAWJjnEfuhdQjYDZASGDSjXicL2FA7U",
  "key6": "64XALVLWdLCvzLg4C6XPM4syaUkvqitGiw4Mvvy98tGvUrCzaX4injaLGoMujhyc7NVT4bSJyAjZnDp8zja3PjXE",
  "key7": "5WTvQg9QVCFGsK8icqfcDqws9M7pKpMhkTmaBTG5qSmBPxfp27PvzR8khEo6Z75z1sKUWj4im9TYUUGEUBiXcmVx",
  "key8": "41yaRxLKtqwSpDkPbrP4zLj4syfLyrjfWy3bphmBLG31JwFUochH94UBmq4nrmKnQyQuck9jKyikwuvNptxkfRTc",
  "key9": "5Y8LddtJ1AmDkkNgzX7yCUzSFKo9Dc4peUS3w89yLN5vmaX1mdDm7w3Zwrotd3sKyBUjSvcz8qAVPJR7ANzLyXp7",
  "key10": "HetoZz3YoCK5tETVNH3jxvaYqQkBfEY817tSxqq4Zn3m7eQZeqTtcw6ERUAMpjXvvDsQBrRv2AirdXzckpy5qgg",
  "key11": "58WkmhibiTHJzb56husFsvrZXddx64cM4iitLiTboasjx7tGky8XLjzhLzehvxG6Dkv7fPZVydwZNxRgj4iEhJRk",
  "key12": "5GGCsmX3Uox7djn2PFi5GaefPRs2y4NscA8UtRiY6E58PCarukManG6xAJTyvXggEZkHbAybHGyz1CQvSYGA4CWX",
  "key13": "3xL129j7AWRkED6px5xd7JBK3vApeZYGqUpFPxzDEKfMuSXy271A82nYyvoGaJkAqo8s2UiFkKRvfcbr4Wcnz39k",
  "key14": "2667QnYaQJdctFPfv7ADs59DUNb5dKmy9cSBYsKG4KEcEzTaDqrEADgjSTyrTDfSgXEkoJPDEZGU2LrYMzTVR8Ln",
  "key15": "2txFLnFJEuVhCWJyoi3oZ5cgxXFUv26HjRH29BddWu7A6VPfRSyGKiNNGud94CPrAJLQrPZAzcQ7buK4RdzdKJe4",
  "key16": "5mgA7ejh7srvMvYCUwvsunH8zmdUmWJ1R42dxypE4n5mksDkmNWGrXQNDSwscfYUtGi5kjrpv4gP4XQ4oQXCsSvz",
  "key17": "2PHmXmwWZbUWi1agxH1g4sj5jfiQ3aixPLDDPUsxr9FTuFGSqF2z5MJHkiS2mUpNBw3CNiC2ieysUVAQ86EwMNQV",
  "key18": "5RpboPmXxsnQmhYuvCLbueBvNzb5fHVmzsJr2A12w8X93jTsDGAKxxV8uvim9ArSn5CQyGGCuFYEKr8qTojfVYBX",
  "key19": "4merxXQ1DMiKon3RgqgmsYc98nBBwhdAx4rDv1k9Qi1VeQmF2JJCSJnknWET3KM4b3YanD7MEBpbxuWrAYjUiqE7",
  "key20": "wxaLgYfRbofANqfRwxVuots95tUc1C4yh2MH1YiYeRk1puc5hjU1Qdo8dGQ4JGJBt2yLh5PcMmprgDtY34jqFpq",
  "key21": "3pr4UZxYoctLGkNFSbSfwXATH7V8Uqvc7NfdCt2twbpWbjoGCzVAFreef1LQv9VD9WxsWcMkeLtJpYTz56aujeeE",
  "key22": "vyRXWAej6nBorfqzygvB4aXY1JkMRmv179Ryc9wGAqryR3SVfdW6cbm1S5bkiJt17vX5vsNQGVDwX9eS6QCiQxi",
  "key23": "E7D8wPuWzK4XjCGGnZhspuU4ZkrHBaY85BsPcc82bUaHVZjs9vUcoLLVhSQQ2cWdxWaGQ9QGN5FbYANZCpzS37g",
  "key24": "gWdMt43hSb2xFesHLTAZeJYEssQCx5QMeHyDszYpTBjQcSX7KK9ubMPNU8EnYP68NZqCW15f5mtWvWq9iBq6VNt",
  "key25": "4XoELqr62TSfyZAPKRUxQhmHPvyXc9syoJ1tMCLhSNcSw1N1BxqLdqMxmZ34P516zvTVM3ZnXYDrGwpGkvSW2EwH",
  "key26": "r43fFQ9RKeezeL9BHXznh69YmiGDZhxA2pBboM62zbi6gXiv2YKzHnsxwBz15WWo1uvedJnSQhyDCxkCXrre29t",
  "key27": "2iJUBh2XNXB7Jg6xyFcRyR9VNQitDsPgMiUqpGWp6CoDadqhgVDe3FboUqekBg2MHh4EMJwgTN3whq3fWXK9UpiW",
  "key28": "4PUBuZwJLW26cNMSuvb6F9DAbe5VtrdY82UFNsbpxyhy5NibaWboMYHhp6pu9S4qsmNyfy5bR2dMuzoFfUPhBYYF",
  "key29": "2FrYF4suJmhkgwKbeQGwKBU2tL8fpCmaXr8Tvj2h2chdnDANSvpKxVPcH1hAaEybRUEoGQwU2V758LPisHY1gFet",
  "key30": "3YtcK9TmFFjES34xvCpNJRjYSBNp4AgsQvBLqfAEASWSdSNqVpLd4RPVxmjxzBiEPaYquC2MTAbMrRUzJPrcCVJX"
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
