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
    "5oGTj962CN9Tj3Uq2bBXXBgYoZBQ5Zq5kF4GTktQPcot5RMkDAmCusiAtE6bpSzhLGMwWDGSYVX4gw1baMLmNyK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gguP9ZgYdhqp9VmypBXrwY6Fi1Uqw84B7xzNevmFqDw4t3keBCtu9JzUFfLSNs5F4UWoqyjwy8s81cqynhA4XrX",
  "key1": "3pV2UHHzWprmPf13Qxn3ygHCcMYiBCpwwZSSfCYDGpiX7g17d3vs3bHPn4WW5doM15AsiGeZpUEymEmZAmHXVz6p",
  "key2": "32GELh9EKTDsCtBJenWs6v94kYvwhsYF8W2pEyLFj4aemy6R6g9zXPTpRBuhZvFLmxJV4boGthQKufGJJH1i85tj",
  "key3": "2s4rkgwMes85XMBdrRjJz6v1bqdsUMA6MHVveJVtwtN37URDAmfE139ckroEfySaMGfj1wdo83dkaddwubGbPfe5",
  "key4": "5Fj2mVAqEbfUWjXfGaYSjLmKE1ahXRspRA7vyud3YZFbbHzGvVurg6ZKzkKcuS1DxutV8SHkdZCB7RTsaTnhvY2J",
  "key5": "3xG7JrwyoxHhSwxqtvgWvTvFSVwzZPm3iojPXR8xtUWprPLZFv5yhp4GJLQKKcWUYFWeU26JyzEqHLr1x1xQdC8K",
  "key6": "3phQgoE1sYAxeVw9P7TYiziQ7PX7vqQ95yKLbJqVQX8HFLgbbeFt9oUwnaiutABJWVKQZbdPurfdoXw3gtmeNB8C",
  "key7": "57GPwFwq9hLtL5oBbkqev23jtqjRMQuLudVKz1RaijvN9Da86k4K6DCDjGrLuBSnTAMTbxnUGtPgPvyhjHmwiBq8",
  "key8": "soMohTjEkY8hv3G2NqzPK1FWMdEfNvE4hod28qf9cCiNZ1tWwixLog8MCoqJbw6t2YJztrFLad6F7zFhxLVUnpm",
  "key9": "3PDNzmvjv5MV1KiHzs2REQSn7cqgGNR1tvGZWMn6iotSqRW1tUqJJocHxUzDm6sFvNY2C4D7JKLzZzz6RcLWaCPG",
  "key10": "39fYc6Efe7RtJAcEvGkgx3P6udymRvKgtMpGQz6r2AiUtK7eHZ7DoVKnAqwZJubmazWTYrES5PJgYzmXK1eXBXTG",
  "key11": "qQrSWGPCKhZ367bXdvtAnmoTkb3hFsKzc544NqiPEc1361y7mWGM6KUe2gF3Fz6SZuLT6bLh8n5vh7hR72nsZKV",
  "key12": "3W4seuRMSTagPwQ3tatdXPa26ABs659vG9FvNQPXTUJ28LgbdzE4qU73MLdwC7LTYb23v7xJsHXxR8g89LkP2YUg",
  "key13": "3SsuPNoqQmxmdQiEr6AFmcQuuZVC1yGD1yP6XwrrKGrNBs1MjQQgN1vSf76TwqTmrarVT723xbSz1wniTuhqLdy3",
  "key14": "3fETUBPpXp9dQkYxPK1xEe33es6nTG6TjC4CjesUBUN1Zrz2dGS6DsueZhQFCWcbPuLm668Pt4DeyMPnfmtEZmwt",
  "key15": "5nELdXwKhLeXG2okk6UF3ZksKJj2rpJLfKYvGx7K9MGBbbC5Mobf8Kyw1qfktRJvP2CabKw1BJuRnpKxWdGgAEJQ",
  "key16": "5qJ9bCXLBLUYP6tMEDGvbBjgmWFGtfXmpgaG6Fvj95dXihLVsoizKxTNZKBExHW6Tg3P2UvZLtThhWEfx33vd1L1",
  "key17": "5H9aJnZj8GGD2Hj7F6m5b5dNHTSrQeE82aWyG6qKrM7ePtWLnZpCFLFZDctKSxhRMGG5X4TqX45i67Pub69GwBu",
  "key18": "b4rzmnE2e3QHYRwY4XZLJZM1Gedq1AFSxPoaAgYATJrQojt7oD3d8jLxAAhdKYLQm9QDxMrzH7gqkbEPPeiXsPB",
  "key19": "4DQXMd2WhJ7Mcnb8qVd1dDDCVFfALd4rEA3AoCnb7B7hY3eDfdAzVY4BaMFv4FnA9aJSsFLteXXMhD4i5upbRQk",
  "key20": "4kmfxkHEDotnGr6e5NnZ1yWt4o8fxbUw39QstzQNV34hVwpNigtBCcswySFZgSc66Hk3o2q38fkMdaiAST3VRVDq",
  "key21": "2UfmVbjGAZvmqEf8xfyyXeLAUvYfYVtep1tnoDuyrJQha9F6pEt5BbVJuUb4hK4KKZSeyyDSLARHixo7yyx5GMG6",
  "key22": "4f2f3HM9MSt1LmtSLc5bVwnTwC1TLE99dBz7LwX9uumbCVcp2ajrWiCsqqXcFVGz2r7Cyydn7hRTwF77C8KPcs3s",
  "key23": "4ATWwp6oVz68PTb1dmBxk2CEgdMhNH5xK1aGuDJEejYDQrLAQDQ35p2oFLKiKazTvu4vK7BqhuvosGB2nEorpGm7",
  "key24": "2CKFZFgtSoUUDKzx94RZtBhQScQLGFLsBapTv7E11ngYHDQ3fzPhgjVG1P4dfgpMbQURg1WAdwEAMXd3ZGxBXdrA",
  "key25": "24Lger9gj5rEKbt6tjJGFfQWd8syXcBWWvy1YufgYwrJLqiWA1P8zG9xqZVzAKgiU1EVRT1pxrgcEzyTRqtBzW74",
  "key26": "3Cw8sr5MJCoQvhZnLe6P52UDgnBH9LmjR5m6vN93F5biUR4WGVDw2XMwMq9TAYWJT6FC4FhdXJEp5wW2ttWdipCp",
  "key27": "2SkqKxCHUFJeaJXuhhH4y5DjPmyLsaH2i5YSbJQApS5NavkNPo7wr6jM1vLvnuzPgwdjK2JnLep5WsRNw4WNfnU3"
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
