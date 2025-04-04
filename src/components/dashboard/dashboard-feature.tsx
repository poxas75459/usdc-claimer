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
    "BoxCqyRBsubAicYQb4n2KJtzsKqQLEJMoAWGqmeYMJ6f8y7ML9ypaWkhDDMqBRLGG9VFoNbSEuGhMfg68CxLDj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRat7UdLLyccMK2Bp6WRT4cnbBp78YSwkUxFyj9iDW53sAXYFyKcgjYHUgZuMDkpgTcRoYsnBbpBK3Xk4RmNRhP",
  "key1": "eFHdZVs18HzgKYa6Xc2WXWQPsYprsqDNBiuC7pcGLqhPxpojDyJ74BbKZx5ZqH8YBPUVzZXG5E2v2352ekKENXN",
  "key2": "5rwCdXCNgij5pmgbrKDEM8hzqsAzBVRJfwP7rSuCxtTpv37j9aL177jvKty31q5RMfSZCV8cNRU3mBrQMCUn31ya",
  "key3": "4cfZdUj4Esor9kxSQo9R6Etgn3KminPq4wvok6vcrcWdGj7goisGkFXLag6WEKoT4yop38mX8CSXQvFz37nWjUKJ",
  "key4": "4yAZdM8fBx4tW8eXb3p2CKvQDWmmEKcYsh9ADT2NxBvQ7XL2HR7LGvt1RYW8nLuYuoSS6ZYvF9GLsYKwnynuAhsY",
  "key5": "2diywLLgJm8XHnJdgb3Q6FvEb1iHLRkL51NiZQPa8drWMEC3phmuPpKoj2AFXzqUrabnhBRAGfQCNgBxtuQ4jBzf",
  "key6": "4EsX39xtGgvyPyVQMzVRUmzQ38yonhFn7S13nTaAvzi9PjzfJK1pzKboUyDLSxywz1FSxSXqEZYm1ao4WMUto7Qw",
  "key7": "3A9EdZoXKHqnUCtibujwt1fuuv9jempGENghxPMx5jp2i249ioVggmmzwEZfnGfdUZnNV9kVU4aQ1xU4WJciQHdp",
  "key8": "54wJA1uZRzfGWkPwBWCbrejRe4sPbyQCJfSZ73x3LtAocAN2ZqmXhh9DASztQeLKjMhWz4mz1WvRCG68xJDNxXyv",
  "key9": "3ng9pijopwYxnkusBbAXVrftmVwpm3oGasfystMriv8CjUXDDCvDq7spsQu5HPLhT6kaXSkFRzHQRDtyV2MfF5Vx",
  "key10": "3Ez2AoQAmaxXG4uFkDcJ7yC6SKspie1gKnSQJY9AWqaa2jnJS5BTFaRHEmuDZ8do4AcLyEYiMQHKN7etVJL8gfXP",
  "key11": "4wtvhV4dGNeshnx8eKgPVzPRGELbAeigTPmiXERoigUzYnsC4hwGqRvZAp9FoCZt4z6xNBVbAkwUBto99JyefjiL",
  "key12": "36Zi7WhM4QJ4tR5VYMzgLXmtbFMNsTSmqPfqFDR1Uh91BPTw8rzXfUiby931RzLgbHoUirY8nz3Fx9dmLUV3v9ej",
  "key13": "3fKgavUSR8BUfukc6FcpjTpTLD1VyyATgK7XxvoUU6b1rsAezmeEUG9bt8K4DWnqJ41LV4Ag24rdkgtNitoTbACM",
  "key14": "21PPMsTXGkZbW5ru7YVRyLzKGAEAnThvJ9QGMrAJFFLdKpJreyRa5ucYKp2N68kXqvKm1TZLQeM3uME2giPMESzb",
  "key15": "NZBfPAp1QCpHiAEHumxKDm33hrkZJimCiidYZRFXba8p32YMsxSgS3gF6FTnL9h5a9DqKWpqqDiUi7y9BnDPVpS",
  "key16": "4oe7XThM2VugiehAAnzr7jjGRvBBJte3SeA8b4jddnwCmEZZAhTLLLyU1WfH6UrPQsx1V7LG7UoaZEq7Qra9FoyX",
  "key17": "8oCTPnKhHh8kscMgjH5Jejik6zpHYN6nvoStqe2DHrdnUzYitsQKmYsZMbWuxnDEoFpk84WB79QTqawv8fZWaMK",
  "key18": "3eKiyScfivMg1sCmvpqLnzpQPWSLuFVKd8S415q6UdAMNYn5BWraQAiYnZDNFM6VzyBhRXAsH7pUy7he5FF8Lq59",
  "key19": "4JEhZTXpDyLaudYeVMNULZPuyWhgJ86kC194tVARV2rydYZJNo1wQfuEkqgmHuFLzGHEXjLr3Qdrp1mCUBiJ6hkd",
  "key20": "3LH7WfmT6fJvRin4U1irvkqkSJFh4ym96HU7rwYoqK3DcV7CSYAMum9M2HqHMAt5HxHznc7cjzbUrpCVb3hQBX4j",
  "key21": "2DikHNoGGqhbtojXvqV7EmyrfTLpR6yuqrmsV2RsSej7Jx8nckTESChNQZsbbf5iM1y4bkKpsCreB8DPkjyjCzAt",
  "key22": "SJx69eiWyJdgL2XMQTsojuYSbgxp4aV1E1Y4fuyJVCNSBkKvSACKz5f9ULK9EjSKyxtfNB8HXjqJcMaLZdZhr2i",
  "key23": "39XDrYyHWFHzM6KZ1noGVhV7WYkZKcioBhTM98rAUQa9AevmXs2sk7S37yY67gj6rfm7phqoJnZezBdDg6SJ87fz",
  "key24": "35RM4iS8Y8atDgzPj4WJdFV2EWGRZ3U7TD5iEcxJ55uvr95ZuGmsANgRy4xkt5cvx8TFVoqZFXM5vChhytKmTiYH",
  "key25": "3uReqMWP2TXywMTajHFKRfz2LXvE6zSn3ijeuy4XH4xiVLrnX1Uve3qog9dNaQrd48iqU3eM9CF5y5NU9ayJ6Rag",
  "key26": "2hT473BzBcoM4P4P8Aw1WdNx2kS5BQvk5ET5rQ8kXGkLw3sX31z7xwgHwdgNPgwQewUHui8rPi6mxYEi93DupizA",
  "key27": "PB2pep51T7uPuFfq9G7gWsLjbUN7PppJivnXtEdPKX66nt2gTkQ5HhhQaYsaALaMhrd3B2ET8FUGQbWzUiLEwDR",
  "key28": "41hffeLwBgS5U3Uyn2Gj7vdDChYyp58tzYk3gCeSFx9a4ahCXKdo2hqEJ528dtveSn67n7gRKzrppuYPSR3rWLCM",
  "key29": "bQYft9BfgVw2X4pMH9wYrPvuByvSXXSFQfjyecfaUy8sisgceEHEamjcLsvS3knfDs6FuXoAj1FG24x8iRgRcDP",
  "key30": "3n352hMmCJNnHjesrgRQcLEXp652tYUFVm1CubrSkdWPESEtevGbkDqv7HpKFuaDbGVTZLL7GhtBpfY4AL8EMM47",
  "key31": "643q4YQpHjxnxtf2CvPKSUbaxoJqJZotnnTksyMgGmDgCek6DNBUv9LdCz1hu54XdhQMAZGPtespbZ8sE3VX7oZm",
  "key32": "3e636d8qCbpeSeiEaKAEeyLBgeEGw5f4BDopzDKGVyEhUvWaWtGcmZdsZuuMZoLv4uwx6aKikPmVNtDCyaZQejM2",
  "key33": "5vzpXbh2S89GP9UCWRcUMRMDbgAUEKr2BDddR2b1M9Vzw1dbGFhW8D2VFZLWW8K6sJZgPNoERdd4aNcyMsnauAFx",
  "key34": "54N6BKrsjaTqQHPywS4pXSt7MQ5HudcoKUQD2ycZeLUWBuuUFdxQgrpADqnxuAfWDCXvLKAhgt8cGSZskrXhkhTR",
  "key35": "28cpe2KnFM1gVEUcu5m7QjHcquUx5YLaAkCgQMnWxewmmoDbz2P7KxYS7Za6bn5uQJ1XKih4zArPhTqvgtDVexrr",
  "key36": "3JaJXCsCtYEaxxAG5oGJcZcLyGPKn5wwevRNY5mNTamBDuN3HzEh7TVUZxiJ6ZBijafR3X91ubZE87t1y6gzQq6m",
  "key37": "3uSTgegtnfk86GBq6vVCUJmb4i7VuA4yuxDbVAoHVLk346d1qbXGsvjBCHxJYMRinXwpf4N7gs5fyFQFGXodQaK8",
  "key38": "4EE9FSw2ZXj2Q1zUZLyh8abt1fDvSDX35uoDnSoej2jwgMYN3J6tZAfHs929Pps3bHh3mR8iBfNv4a4WM7YHMGhy",
  "key39": "61jvruoeFbZiopk2QPT7EiLyi1RpCUqSNs8qDesiEKjjfAunypQa6uUpXu7GhDcjhdG1goU1nnkKoTpxLfRKtD5T",
  "key40": "xM6Kf3Qvu7FPgi2SfjxDgqxbwBrgTPCTQiM4r39e8ZM2R21ZtrMk3cQ1sw3EhBizqYwC8kYuVypvFUbnrXZA193",
  "key41": "khdpy2Eufd6rVtwgdVaavH7wCwWfuuKmuE6rcK4KLY38CaFcXXjK3tvWdzVy4CMf1cSYk1GD7Sdnr51eQkvApaM",
  "key42": "2QRe9BX6snsg6E3Fwfqry5KaGzGkQZRYnLoEeanJkj9r2KJBwbRS9AdMJfPj75Je8TkpFCu7jn5GzvfmBCxrcrLs",
  "key43": "4XSZAFPjMo7DGuET7UdnZSiaPqbxmSQ5f3Z1S3WGEmsTiRRrBdgkJFfzXt7TGzFCKFeoxoWkpDyxhy4t3Qinhr4X",
  "key44": "4YLPuGUQUVMbDdFRCZVjLsFFpUrkAPTkT2EpjjCvfmHNod6kWeCYRvr5bph5cU1ZK1SbfCezp1h9pBAhejmtuK4y",
  "key45": "3fASFovTkq5wE6pknSbTaJ5aJQNNCA9pH9YtRBgxWXWZh7zzgXqx4YN16Ec5enJFQevXKv5q5jCPdPPfD8PDkXSU",
  "key46": "5AqDVKiGDMpjhsngwz551ovkdAsGL6tdBAphVuBQRf95H7daesLJsdLnnwqXRvcVdXx8m6MiH7xR9qK4K87wc357",
  "key47": "68YjGSpTYwVVZkt9Tb4gdmpoZCpe7yvgKBtwEyfPd1dyGiHux8r5nWUNVqS6qBmx7rokLazQzvdwUTdvBcv652E"
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
