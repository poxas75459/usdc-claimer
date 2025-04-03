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
    "iDMsGLdQ7pVrATDcmd463ZcRWH2P8QkzJNo34755ek1es2WrNnMRcytPHcfEgQWp1NcccibDNrv8Xd1m9rgHQqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PeLD8crXBERgwPPjJ41STjRe2rSYKjVt1uXqM4R83j1WBBqCso6XHiSMqf9Jz9Dxc6F7Hr2Y2oZgyCPdh7gRnPu",
  "key1": "4AY1E9V1xP7KZzrgjbQNJmmYmrbemf5aZWdWuQL6QtMV2WbE1NcBvi4Xp2AxUnJYi8LBMvz78FGMprdQe1YrEsno",
  "key2": "3ZZwkLLQibvCPxFykW4ihLtkQBqp2vkLrZvi6j2droyGQGYF9jRrgHfzEih55HrRmWJpNnGnjHkqAzeUs3XgC93r",
  "key3": "tGsQTorskG4221aWhiz9UCuHsySvvjTmL8ngnWHWkgfvjAWCZmBYpRyicwC6dsTnZqcDRySt3L6KFFr1uBVqUUe",
  "key4": "4LTxyg85Ue4uStw9Bxp9QCg8s7fbvEjpbA1PXMwemrR6mmMuqJhdoq3bQyFPELu9jcpVSADp7k6TKV47BaM3qMKv",
  "key5": "5mXMTV48DS7SyV1fYbqP2DwHpJoteyYJYDc7MWKPeRT79XBGTBGXAeFuZWj3uwYiGrvXWXL7pPP3SDhas7vmQFrQ",
  "key6": "4MyQEMFNH7sHKQhaV9dEVPwemoukuZTtTX2JSMi9348Rd2cuE5YJgb98QJtqwkLSv8VMRSbQbUMDNWD2QBKYZD5y",
  "key7": "2r6q4uJZ5wjeAkE3KKXsSLS8kmD2P9BZ9EUgjsKUQQiCPnH4cRTo6WufNyNbvfmJGLbi9YnjUoPEY5qSLXcCkrES",
  "key8": "5W87jVTmEr3GTzQrfy4rLW7M1HuBEgGgVrETVXPvvu7yjGz3hxgoDe7JmexkpdvxfUZ9FgQKDwjZRf4kmePpgKpc",
  "key9": "2PMyNc3iePyapcbTvuoTMnsjMBHAoXT3PkpP8RTcotsGeK4xGYgjSNrpw2QQruTomCxJ6fEwV9MfXSFpaYgSTyTR",
  "key10": "6TvqTdNE6CxSuyX4VNir5ct1H3Aowc1XK7xyqXvP4TCUYGA572yzAq9o2YREwscgTRyHwAYBMMm69VTpNBZQcdS",
  "key11": "2Po7fgdoQ3MMGPGBoCj6JRpBciFraq4rUaiAm3g1ebynmzLwHzt7QNEXPCrhKT5V9eQaGibnvafG4f4mGyaq5aA2",
  "key12": "5Yd8rsQ12zrTtcWWRhrge66EFtrsEYMwM9LoFKwJ3RKJv6VpFeu2E65zSFdzwwR5MSc8xsZwaVYyMYxE3SnFmWtZ",
  "key13": "9wYBL3PcaMofXYMAcPoozcufp1UuG7mLFFcY6FCVw6LEfD2UPmjjcrU1RyuFUWDDqtHN2QTBdSmtCAPrQkFXcNf",
  "key14": "7b6x965V3McWYQdP2xx5jrCCdaG1JHds4hX8aPXNAD6GiFpFm3S7PRDbEmK3VbAWVqG6thk66A9TFa4mdTq3kbf",
  "key15": "5gqofQauZgJhMnzS6nDabsYhB5Fn4VEW2StSx5XFVztqd29xrud6uwE1SCz3ptvo6RpJPr7MpzU8qTgqvy9LaPsB",
  "key16": "M6a357n6wSSnYhFsq1MLva1S9ULhNgwYBNRFJkeRpk7Wq3mDgV1uvh4y8NEi1odChaee8gVM8KtgtqFJPBSSLRs",
  "key17": "4CHiuVE5oCy7caRwJHrcrcPF4yYHUMeoQYLsSGHLJxBAWmtZcfTE3QVnJ8a3BrpZ51rTMTYer6MhqfcbvB1vfiDa",
  "key18": "3G5sHsPYe8RxEn6cdgciVo8bAbVMJrNPSayyuvdmBpQZD4wkcRCSLsqMjwNQNioLxXqzRpdtize43r1eg1EhQbS4",
  "key19": "3YUeqAARDxXG91tfCTcpvBAq5qd5yLy3yaacS3Mj5XzVL7iV95viLeiUZo9foF6ZzeJzfsuB88Pu7WwuNJ23fAWN",
  "key20": "fpLfLfz5VG2C5KuNVTRopvsgG1smWoS4uNF5wZ6pTuuyrRMBE3PCPbveeHmomgykoBV9dpWoB2yxmy1YmdRXboe",
  "key21": "4vAi9FpzZ7XFts3YW3WtJhc7n3WSXWKwh5qf9t94Cd2oKJhDnStsgZaBzKwgActMBD8qf8YAks9DsYic3KWtEq26",
  "key22": "3T3KiYvGsXYRmjRaqyzvtBoryeDeRdabWhrLBCdanwhHbRKRkrzVpYzLyPLMNa4KL7TjcBzbfyAaYyYR3svjoYnW",
  "key23": "3TLQYLdi4Qs9pkMui1vijdj1fk3DJFooZiZA4CBLo2NQoSaaoWfM7ZTRitVpWpSFUU5HnV68Z8ABwZTkGxnH6zG5",
  "key24": "4YtTLUqub8e85FYjLAgn2hSaAeSzzGgCTEyUH6cLCQNWDYwGAmBjdKgYHeuEA91iifbeSdV3WjpxmiTaVZide5Ty",
  "key25": "3dNVP3VKLKaShQrHYJdg7C7fRuLZHS6FQ3oJPomkBj42ZizTAmRzCZcGwUXk1K8BTTgKuJMHk9fzCKqn3t5sMePs",
  "key26": "3j95iPt2CtZfgSwsbyG31HQZXS5JGsi7Yd35KUraehAS82zmVHHAZVM2KurhZeELdJojsYPhPhwMaYKvPgE2HD3j",
  "key27": "5s1JJS6MuucNLCaDEFkEpvo6utQR3dGQ2McXKhBC2qtCWcent8RFNwwfAhYm9dvWeQTZNws81XZHt9ojdfyjE43x",
  "key28": "5546nEYk9Nw57R7f3zfMqGepXd7ejbSEuWXkCdcLjfZvC8zPUUbxqf7AmwiEFDZxVNLUHgk5rJiv2BZpRUUi8mAz",
  "key29": "3qvvjjtnBrBpWtkKYKoPx3oSrDMtZPT21xZTYmE1VMnvTKVzXfjR3NhcRvnpCsMwWDEGdoW5tX3KVMnm1jPMjqCG",
  "key30": "2FLsuSmVZSi7CjJe7P16MHrU7df6Ma58xjWWtBVGT9xk3A3XsxYycs7GYuPdmhUYda948rkqzMrbVoLDodh3PVjL",
  "key31": "5v8AWvBazVDHzSwX5iMdFXzGPfrQKj7z4y7Grc5XQfHb5b4AgMa5KZTKE1dWFxEGJSnPNwLskTYGoxVqkCGwVTPW",
  "key32": "5kr3zrbsDTmPBVYgexsScvzc8EPL4NChJcHgCY1V9UHXdizGyT2YcU5WKeXuLpKvg4n98x2w4ywpmejB7yWjgRmb",
  "key33": "W5E1psh9wDXNBTt33JFDR3iY8VeBsUX11pNV5gi9j9cegER1tNpZ57AXhr9FD33nW3U2Z5T8vs55jHPx32QvDcX",
  "key34": "4W27aYhatk9pHsYhduSK8RCXkpzGjZWvnFrEEQvxd79fgY8BtqBiC1cdJ1qQruvPvhye1GP9WRyzbGH5Z7dhjAGX",
  "key35": "f3BxwvGY7bX5oUNCGNQArCtoPkt5wRKuDCDTSzm1JRCfNQZyzGMrQJPD2SQBffDqSghrcY2ct6dUSgqdnJYkwEP",
  "key36": "2HKHdFpXtwSWQmYx4KoXAe8Qgc3q6XTNyosaQCTBZxbA7waA97Mozk68PnxbSNew4WQV1E1mF7F9wxCLfYiRuktu"
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
