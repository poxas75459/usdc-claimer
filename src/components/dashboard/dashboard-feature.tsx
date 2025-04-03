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
    "3iq7hGjd88xLtVgKqhXG386G5ZYNNXQWeaZrbz9W4LbSKUAPyanbmR8tvBywouDULg139gMJGhM1mNSpZKz3w1Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46kR7NzBNoADyBaHHsM7oFNHY9ZkM62QHDMBzjWGUVbsEYGfGLHT4rWVWTHzGH8VPQGdUjH4qFBnReVkKxHsGbAQ",
  "key1": "2VB1CJaWXNmbk3tGXNrJHQsNN1nXfxN9fYrVWH2Hb5fLiU4Vp7KoWJD6bHgVahy7ta3i6hcLJahWd7iWEbnoqh2Q",
  "key2": "2hcafPrRjMEwZ4gr2tBGvkkUg8gKBb234FP79XCo1GeWVJxKvigcNVN4iXwFd6Bx1D3ZSteGN2D36QvfcNJa3c91",
  "key3": "5RMkaNvYopYHSeHSzBfYjp1uRLStWdY6nWj1rik8CdSo3wT8N7UN8i8CQ5ELgmu67RMcxxtermHwxERfsUKEuuU",
  "key4": "5Tz1QLxVQrDgcAdwmf2Bnt4ivyeqjvoi3nJU2PqgYaNj9c6dVTYsWwuCCfNUfFqwTnHLbBU6ZTNcxx78pFuoHop9",
  "key5": "5AEfGUNAWS1gLzZGxGXfDcFrQRfwV7FfhUx9mRLhYLKgieEwC5ZjffnD9u6VJb6a2LmCa3deKNcgezYtbJrtMxTS",
  "key6": "5U9GPfyU9bUFRunkTfanpwZq4hisXYRQqGotUeUVS5vukBxE7gxhXXm4rKqRZ8rKL3yGjPBX2YBX1NYyTJBC4Hna",
  "key7": "4JRB7ZQgxSNLCCBz1N89dYxdnJLfvibD4eXCSuGjybvdY2FoCJfb9AZzWCJ5tJ7UmT6uuAfpEYq3nt8ibaUAV7c1",
  "key8": "3qyWjuLMb6cMc7fYwWu6yH414jqApG3vDMsycYtFxYHoAggkMtEQfhZv46iFTjfKKhoQCGazy51NG1dBQ3g92M7c",
  "key9": "2Y4vxcRXTHexEibDiBto7uYerGEe5nNSYr3xLAFFbiG2TZDYMkSvTCMyAhG5zXTXQn4Ti2h9poxMiPzoPkyC8i4k",
  "key10": "9Sstgdnk7R7fYoxNX8SsbujA3t6pTwErniUgqpgHRLqZyw5pB1oAJT76dfM1AzfC5cy3XS225pYk9cTo82hfTDN",
  "key11": "5GHbM9rXio62NR2sPbrjfUR1c3hmjW3KvdUjLTBoMQaFGJjy95to4NdfDvuSXt3xNhiupTfqp6eJDdSvZYsk5cgA",
  "key12": "BG8VWE81WutMwqY3jUpgZhMGLaDKwLZoeNmME18w62tWq3iNegQ95vMPTGNkbgU4ZHNuDxE3BZiNQeMQsJRWEiB",
  "key13": "2a3zDfoU6XJDUhozfRafn3T3wBFBWdXe1t8kBr1hHcpaMagwJrAKRc8ptD8HFCRnyuj1qEqzvwDPUh6of3vhPicC",
  "key14": "4ksLrLzJyaNpv4oJwmmjG3Hz2R4dA785784KQ9JXJ5xhshcSsYAz3RDSLVbRtThukT95feVGBUReufXJ6i2RRkDz",
  "key15": "DyExACjegwVGVTJEYgNzxGE7sQbSVmSX8Zguu9tLJ2y47dbTUamSM3ggqkjQWjoWkN8K6EkD645gtLuokUDB1VK",
  "key16": "hcvmWa5VjpqyV9hQpipQLCtyfkwnvRBVvhMwC67sRuDHH1ghUdQ4aFFPSo2BdETZmdWSPkfoaFE4sDb5YNGQCb4",
  "key17": "3CQkHNqzjM2chS9T4wVUvz23q8gr7WeE9Z3712vc1wVsmBQEVfe27MDzFqEAgfaaMiRpftMxeTPzNQd3EmDQWQYu",
  "key18": "4FYWmCqXVWAYgCPncjEfPBQ9idZQHhUgrzkuy51rKaaiUTgMnaa6Yqm8hzaxQ9P3rSfGhRvNfLnynhWMk6mmGnCS",
  "key19": "4Q5gParLbMpSDe8G8FWpD78qGHA6LqBU84q8RY3aUoRjfJRcn8y1WmmrvNEZhf8ifeua6f8dAFB8VJrvAnTA5riM",
  "key20": "2NZSffj28Mu4P6dVNqaxubCT8sNhgisWg147Wse3rd1Zit2p7DYVth4T6C839wHPKyVeiTBt7t9dhrxKAn548Ydc",
  "key21": "5GuitrfE5yx6LCzTkKcixLHWjC18Qrq55bMASk11fBGM1QozCPJ7dyuyoqDj9hsxvhkFZHqAbN16yVaDMwdx6dzA",
  "key22": "4kofKbJj9FVG46wuffokRiAbcSDrBp5HCpW3UmvbrXxkrSb3voUfTFYoLd4GZCqxnkLvDJFPzc7fky1zpH5QctuQ",
  "key23": "5nCh2kDEXFLEYpd3QPWDABiZLXWknd4vAnb2CHjk1h4ik3LaRp27cAsQcrwSyucSMjAVoqZ8UkSx6DbMFQ3vn5JB",
  "key24": "4vrPvGBcWT37FoJay8BYxpysyMj7QnidGUJyCg4oNnjeNWj7mMXmAjmxdsNekgsomBuJGvhpKZHf3vKoubYFumwz",
  "key25": "55J3LW3acfjVHSyLHzJuoEdVnYuGGCBy2T1w74xKkfb64rqrS33TYSgUhyFuzqmapCTZbYnmPhVAASnNQA4sd3oc",
  "key26": "2Lvv6Dq1RUHmiuZ3GJjsYwVaCzvMQ8EB2PJEXmwmPqNfsj5dFbj5A8x8YmW8NWxZDcsqhwjefDxvUoTRuomHcbZB",
  "key27": "3d9sVPK3mUjxDq1vAwYfx7cunj2kUknsiD4gyWmJqTDgzxAi86hFtrmyFLpMhAnMUYcV1SuZKR1RWV2x5GjKunhG",
  "key28": "4abyZuRDpG8FLvp6vSA1XV3K4kqwazyyhs6YvPCSwynFkqRDCUnAWKDNiZmDiSYemAGKxEkk8VJWQVLvzFNEvj8Y",
  "key29": "521JEaxck2f8P6gXSPcFQUYedcHYVtrXiWA2zu4bEEknp6NWSY2TBnq9HhXJZksVx6X733cNMoxZg4wZ8zP7uS6n",
  "key30": "4m1nUCsJD7vNt3XHeHEtGjYXbLNusct8k5gxivWsAHztNcBQ5qbAWmbC9ZuDYqwCxhxdpjr15xwLjxcyFjNTrAyu",
  "key31": "4xFqCYiFh2zioJ8GHYwdaTWvK67j3N8UgK2uvn1CMJCGuCFbEHrJXmRTbK1vzjUQeKJUU1jfKedZW7esX9kvztbh",
  "key32": "3Z6qKDxMNh6QCF94bfB2Sk7nbXLXa3XJCrzy84hj7PMKENJpWUTmuMAMgqL5tsGudX7vj1E5XXp5S1EdFoHUKnJx",
  "key33": "HiNHz5xE6aoF8Tf93gKczBHMM52xRB6EnrCvNFimShCC6RtGxE7o48QhEwFeMwdMCd8Z37c43SGCHcy1Uq85myc",
  "key34": "3HhCF3RFfVPhS69YHC94PuJX7rMX3w2yAfJLhKgBxmpQuicZ6tTVL9bWxUhYeBqbX67QtXrsFBjC1N9fPFNaCzZV"
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
