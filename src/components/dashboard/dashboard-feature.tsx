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
    "46u6u5Vox77qWtkaYYDdeZBvQf6HVSyJgNZorDuScfYAWRosx3szufPZXicWZf2oB2By89v7jwr84X2biMHjBN3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1EKLjWNkrdoS8iraSoBdPsGZyiwjsMqw9cHKes9AhSGf3nReF2zmPvpNTi37wSXY94o2WX2AZDJv9LD5su9Wxo",
  "key1": "Tr3nBqehJZQME1PTi2Zc6ghmcrYLG73iNSwmgCwncLUbfw8BbZGb1FyZH3Z6WwvUPVVQFpn3skZL4QmhecUQXcm",
  "key2": "2iTLNqomgxuKEfbLtxisw2amaSeqNdhWebsSTvPEhgzGgVkRL424pY2fzsMgm3FBc5RVU8jYgGw7ZEopBqid1M7K",
  "key3": "4yoLchJEprtyVqdJmwqNLmGEcVBTvD9MQzYxMDDgeC97WmUS6g4sn9iu6g1cq7SCtkXFrvBiooNvwn5HszajiXte",
  "key4": "h7TRUXBdRxtgQkWRMKPn4XomgfoGmmD3dwdv7qVfSHRgh63NVajXM99tvboVfAA2fMDVwcczKq99iptVWLPXm1D",
  "key5": "4VD4HeeLoUxZAdGc4kNzLzfe9XsJ6seYkBiSgZcP5XVxeaR5vHvs32XG5mtevkNExQycqFo9z5LUuQkgyNhTfDpN",
  "key6": "4KJQt7wnXjdDZvspXX5SzRVWD6cPcALCX4Zv5wwnV3JJgL2LkyAP9L2LRMXVWoMj3sa8a9WBGg6YXX8eAgzGStB5",
  "key7": "AE45wxtmb9zX5pm2YDikxjzekv5Qj8rEdMtozbXBxjRgcmP5mvg3kgwxdPYe8LFcofiMLBe9Docm4qXzDxTuhCw",
  "key8": "3oDhYxhbeM4JSMpTx3oBwkZU4KdcfA6pfKwfRNs23rw52Uxgvf4GReNQSwcCa9mwyUfWGaa9Tdt3ZwGejMSp8RqV",
  "key9": "3PAwugAFWe1vPAdj7XwLW13YBQtYB3tmZXXtJ8KLv1ntzuhx7E4yy3Lauv27pr3rishVHpKFvTY543UWyKwoNYcg",
  "key10": "637pNRAP3W3Kzckwh5XXTvrNqahPUStZpqGWNs8fVtpoVD3oeorEgcrk9Q9oa5ZBeADJmjp8QXM8GpUMHcHfZHyu",
  "key11": "66HxMEm5sRCscXcm1gf4NDbaKUgLw3J7uQ4uAiNZBhS2gGc2tQKx4NJWRgeDwvkyGUHCZzsX7EfbLrSTnvj6Retp",
  "key12": "3RduzLZN27vS9PqJx9Lq4AEgdDx38Qgf7LHEUruNKGc6FzccmLUrxaSgWQrfHakvLNEEfQ9WjBH5e7KW54pCZqJ8",
  "key13": "5eRVa3mC5hY5Xbr1b33kPBFztugUfbP9YdeuSHQurKziFk67QLcQ6f9o4ACiczjJZah3YcjbKgKKk6NcJ7tvLQE9",
  "key14": "3qMkjo8dxSpwNzb7BuojYa6VAwcu8pnQeMFARj6cfgVF6jpDF4RmbTYSY3uoV4Q1UJxQUgx8YP4RkVm6QGWQTyJz",
  "key15": "9ZQQiohtBg1kTwJhPK7JBRBwAHqmiHUgx2VUtqYsQiq1NQHsexUBTubuccVZdFXVbG7BcE8C9AgJp5GgFHCVgeS",
  "key16": "5z69ZmZ4MAfx3hu8HUimYpcpCDQ7N3dPNuBRFLXQzg6xGbpfTpSEG1hcUde7F4YopuZsdu71PTJyixDpvqVHQ22",
  "key17": "48EYjpL74WRd3b7rSCwXEWNhUNTtoP6MrnJaaW89NfvL4uXbaJAw5M5yqcxMmNBfxGS7iRKJTtqPxpH5YTLDmymX",
  "key18": "29xcS1mQyomesJDfsLrFAiSLZmRKzJHUVsN4XMSBG95r4rbSrooqCChfp6FJ8DG15bZx9NKJubukYaixZGxYTTqP",
  "key19": "3r8ARft3vfbwvsz5udBs36EQAd5PjWqiZark6Q9i9M5PFoKXebhVnGu2Hk246chuhJdkztuQi4P7cM1qxxCJDqyh",
  "key20": "2NEp9NPVJeJMTW43odjJvDnG9EkerU8ebAovtM7yxZc5hdouzioKxHdk2Xh8PgaFp4aSeP1WcGEfcw8JECVuXA1R",
  "key21": "5BAJYymKJWw5psfcBioz9gAuLMYMHxCQiL6L8ryfRQRXRACDqvNrePSdyNkj7mehGFHvV64DgwXZnVZp4Kxdt7zF",
  "key22": "2AAs6R1agUxrvm4YPvgn38R4poZxXKUnxiALxwUKRT8cfgcxhajbaA36nw1J9TqTaQaD35htGmSNxk2jrKwafinN",
  "key23": "55fZVfWdKSUXVfscgBDa6bDUni7751ob17LW2xXWqZW5mCVCPGe3L3cGA73V6SywxjLkcv7x1LAKz8pxJMi3ri2j",
  "key24": "3buQqhTRzcKyrdSHasqEUWPMdHGeZUmuDxox3S3GAe4SbswF8ad5Cuxwrcuc8iQsaRSg4QS3Rgugkbq4WrB6vYZQ",
  "key25": "3g6wBffAgCRhcxDLgJ69tha4TBxA4x9eWrB6zi2J1csqSkwY1jmS3q6C8oeYWBErvpZZudJSDyVkMpqvbz5caTa7",
  "key26": "2CZDVbCpBeCKAyBoYCTRboLDPBup9QcnHMhrXCS4zzr1VvsaS91yj5RkWMCDBB1qpS4iUoBwpRKCoQN2vDPHeGQo",
  "key27": "3BiYomHshdWxHLS6WtRpSXGgffyEoQDQXEc4AEvrviYzsaLPB7swn9nioQUxbXiBhtxi3wWn65dc4VZpeM3bNpQV",
  "key28": "5tvXf6KW5DhK7vfV9oa7jLQTSRFSKLMAcXvSpUKHGJ7JBDUEVNKEC3CTiVzCqtCdiF8wtHJFqWARhpGJotx8jgSF",
  "key29": "4WTAD6jjSzsaKw3NB2N6Mbabg4kGB7jaSCpgXR3pzvCFFrJzUCKQUVdPu6VSRFU5ER88f6TGkBNnnb3tyvD7rJ5N",
  "key30": "3txqG3y9YLuTXtqjqcKqm84wfYVCNcyDf1RG4YQY5giyy6NY7akiwfEf68rEMKN8JPyHYf5hyYQ1uGg9JYxF1Gw3",
  "key31": "2hywzKqx6nyR3jHr2ti2v3jUiPaT9X5VphyDBihxCEF9ujMaBrR7ygm23hiWwFt76CM3NgZc5nZot3LsoMPM5W5s",
  "key32": "5P2J6e8FPb8gw8o5MCWaopUkPCaPKWi3grWjDf7AksBW7RTUm4wuRfLHo27rA8QLVFijL5r3bcLVdAdapnUnCHD5",
  "key33": "66VnCSREdmLq3LabhwqaWLbezdz7y5k2bDvVkLuZuroG6i1E3hSoGd2JePLQU44Fb7MdMqJ4UKkWPG6GeujoEN53",
  "key34": "3UUNvCo16dhfMx5v7aRUTszzVLJxhYY61i67WaxH1cCyk9tPeF9nknp45ihZ3SumG7SDKa6wkb7R6y4dPecV5Ljg",
  "key35": "5UzQrSy9nBVk35AMoYTjNsduqM2s1zfgguweSq17BcXPnmypom5Sb9AaDnoGcASGfp4RmRZhSWfkQ4s9Mtx3FWwc",
  "key36": "2YAbDSiRgVMNyGDMEukD151cimuCuWoSjkML267yoRtFZrmYDbWwaSE2xwqiRxHRFTJU7TXXoc9eMXLHS1Jp2SRB"
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
