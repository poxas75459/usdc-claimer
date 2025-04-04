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
    "Aq4tYMuBgCJ7LtMhyMP5CkKGUo2AcmsdbtYnPGouYNZ3fjH1D8M3eyb6F1kJDGMhvjKXeMax1hzRbTW6tLRUzc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qnuQTNqkSDqag1eNubgGphmbVVZpfhknd1qz9Nj5gBHUaUYZjMgVSHC9NH44sCewXCyT78zUdYRRn6wwkXLFvv5",
  "key1": "63MbACJLSwZvuCTAJSvbjd8GmWUUm5izXPQb2fj7rG2hL397LxuxZBRiVMGkSPhzKdVvfA9ZZdYEpmzevbqAoc4W",
  "key2": "34GzXRsHXFYfrHPqhAoSJVw8cR4kfKvJSGmzUEtYHCXrXXFqTKUkKWRCRT5iSYyAZTkKetL1URS3FbybHRkHvngc",
  "key3": "49oER6RpfaHpXYxSugk1odDysfxQS8upngDDW4Q2pHjqM6uAxLJtRt8Y61v3Xamc8uoUbVES4GnUdvvXZuC15sBh",
  "key4": "55feMTncoCpEtNhLUgL3FYUyaFfBppmaqQq1dhgs1VuYiX4fFB8R8HfDL4YpmW3zt8RihQDaS55SKBmptSrr7D9v",
  "key5": "61j5C6C4qhYVcDAzfYLHdFnFVZ8XHSJD7oiNW9xyt6Z2XmDHkrTJ1vhEMebNdMpHVJ7B1h1ZCJwgt3SKciXLLwxF",
  "key6": "3tDGngZAQoJXPLutJavg4qanYdqRaBwUzSmjJsxaeTkA4HHZvP61gQSCFjJG9ypCzmLo67TDaDxumvsnR5F88qu2",
  "key7": "67TiJXJiiqPv3Lu6PANbR4ieLixqnNHFJES9yeHcw6bXM6vbzuNi5N1WadJpa8NdqkZyMqnpps9rBgsxPMB3aKo2",
  "key8": "5pU7Ebv9WPek5mLZUiUR5i9XAVSVXNG87iSvWHggidEBCVNPePWJGz8ThFtWupGetMisiDSVbuZCYzvMzdmoR5fo",
  "key9": "RCtBeFCA2aGFbQgrd3QZiaMezoh6YaeqP7CfNf4f9pB2w9E3dYGbYiqDyAZMWEBBo54hhWK31WkewCEhuBboHod",
  "key10": "5yyJmxSZtWiAZoWJLL6ZWZHbcUD4BCNZkzgVnhNfo6CRKn45Rq563somZFFQ78rHBfQCWDegrrY99Z17DPYSVWVb",
  "key11": "3emYYwrZJDZYNhMYtXvDfFzDdqkbJjx9fZTiBVf8kxrNQ9Wcish3oiGSDNj3s8c2rVkWcSKDrwJzNsicZqif6zXx",
  "key12": "268MFu3nDtUfG9B14DTDAHNcuSnmvWGRygugUfBRoeP267KKd1hdptPrMyQTaGCEaQSu4v6q765HwKNSzk5Aoari",
  "key13": "3dG6HZ1afjqVnUvVXof9QGnP8zrRbHkJCSq23JZrBwR49JNMHfDo7LcUqDSgQyufEXmVkvnALxUSxN3DGXgcj2GB",
  "key14": "5GFUjs3RCXKgmeQbtZABK8SRDeU2ns9ZYb4DdnYGxi1KKC781Api8vbbgedRHwJLPzEvzjimqdN4ofJSbuahNs6v",
  "key15": "3VPjkm4RFQ99DqWB9i17tH2R78U1C6hbA943n993DksVajhQqyY8yDpzPtVUCmD5Tnv2K9rMMghTj7AcvrF8MhQn",
  "key16": "33GkDoisHyPLuTJtpAPjFcQDEhsamawaeL1re3XvB9Qdh9Ns3NvZbKZXsp71ityUhPoQSw9TXgG27ugQisZSJDaf",
  "key17": "mLLtBcJzBioq5uheJpJDXgWQoLikJJ8bmnx2KxbLQrnKF7HLXQBfqFLpnNnPLKVq1QzrT6BHsbWDQfWxVvFj3z9",
  "key18": "49vnWQFYfZbKk23pWuRTWjtKyymbQyfVssc8i1NzbHSJRoeLzRX9GC4DKbxSxjTGpqZNZKy6MjUg6c4NHdsJPq44",
  "key19": "HSBWwXF6mHabNip1hLUfGv5FcFtUrKuqpSfC9cGpt53ir4cCZHV5cWPviAe1RrD1k9BErFANRZjgbRJPc1tQZGy",
  "key20": "4tP65QYpJ2b78gfiM2pTjCwwEFV85F2q4Axx1TNHXKZ6qa5SMGcoBtDYuZRVkNJWSTUm9XVTnouZayCaQuB9AvkR",
  "key21": "5ocB5WAGjnZjgq4irFYgMDaAiHF2yQrZeVwETud5sr3RA699rY8AoBG96wAVL7a1ZDnDrYV4jcF4f93BMzh12Mhg",
  "key22": "5LP4rwuFLRkP6sM72z5qPCesMALRSKwUYaT9uebiuWVwkcR2hDkHYnoMgVBT1LycXAMcGQk3fzXPL8XireqWy8zW",
  "key23": "583UvGyu4HgLa335HmLAeeVdsvvSE7hetHFUVBV2cA1C1mEUBMkGp2n3PzVki6YiNXAgoScYyrn8wgvQqkxzNovG",
  "key24": "5PvEPSEqVp6pXPpiGQQgo34ifwaYp2tio3s8p82XPSh8yrAG4ngUgr3T3ZSfHLn5D1T3ztzdGnjqm7LS4E2Dksmz",
  "key25": "24BCSQPXKJim29yyyhS3HpHY83shywFZf7fMzHVRQQCMFCuNKhQV6EeTcMLgC7zgPaDv2dbPAbko9feDrJ4z2gpy"
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
