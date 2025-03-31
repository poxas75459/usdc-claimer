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
    "e7XiHeixb9xGhb8bCHdGHj3LPEcLArDUd2nJCMNfYRfLc3iYfBg3rhQDDo6FmBbeTMGW6UqoWi2JpsTNAq3NwBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HisNS4pCmAgvJJLBZzysQtU3DhYk5X8JLugu8rvVWL8Mv8fakwySWeHryxN7yPu2nqqcDSRRKAEJ2ro17J4MbLF",
  "key1": "5xQRDNrf6YDcRek7d5kz1JczY958zWFjiWAQoBd2rqeVi5M5rXJvKYLnwoc3hMRFA24MZXLvut2H3x2QbaDg8Ewq",
  "key2": "3qut22G7W6bHJUZerLPTcsyCWBSNWptNMcw2XfdXvVoMNwdTaftPoQP45CWmeE3CE5o8xWo7c1u7kQ2CQK3bThBM",
  "key3": "5jWfP9TFDSJDHgYuviz6m8hVgr5roYgQuR5vxWeQsuii92xoHJKiAyUrSdSjXT1FWa4ayNs3T5boJ86XQTQLaUmA",
  "key4": "52RybBC2pDqG5Ca2fHG1THpjr5cQmnEZmutn2FV2cc7FtZWMgqevTBfxRaVdqfpkYNQoj3eAugxuwBJxumkqY696",
  "key5": "5CZbWsznqDWsbaHkAcX7Gpqs94y34CZxJWuzBvmPE4AM36bC936WzkbWHewTs5JoXtJcDhCgnkhR6LMbi4xZWqnr",
  "key6": "2AQ7PAsfagGcNKsdMFjSnmrGYDjLpevDU79fK4A8XJVH1io1riXC1DZ53UrUitJ7TECpZpLvctV9gvE7AVKvSYZA",
  "key7": "4UbaAMjAHG5WkiJ4n8TPtzJAf3L6tN3rkS7ghEsbLma8PKTWwADZWQoirY6MsF6BVNR3HSVeQ2GVZTyB56rTd3yU",
  "key8": "4hdSViznkkTQsGdNrPYNrjYjUYmeHiXsTXDCthty7qncDNDvtJcRPRWLoV9WWifxqymfoz7xujN6kMEr121wLU98",
  "key9": "5i2Wa8Dx9KGou36Avmr3c7ihr4y8BzJJTKJK2AunDVWLHf1R4xb9bhmEP9Wc56T85dLdF2mznfYibsQp7aMHmXME",
  "key10": "bkJU6U7s9ELuahbSRaWagbAngcgQcjbo6d3TLWTVVEWN4WD4jCu7kCyHYbbpsFs7bPRfqmmMTsSGzb7dXmUn6Mv",
  "key11": "4CbVhoe9i65n7E8bAua5dV3hSFbsE4GokT3FYX1RY7MCcuHbrEHiEqHesGfGZHPhzLeeHJdxwihN3a4i1ZLcfEur",
  "key12": "4XEyEKCVUGtNHVzqBxi5RGHUYiaLkfH3kHrUUKaSYfMorKCYUWK4WEkEjSPfMqwRutQ2jUCRTdKqhAxKTBpX44Eu",
  "key13": "4g3sikpMo92TJSJkbipRvhNErUWWDgVJNhYqf27hx9nUnCgDTQMVih7vxomesnUhyjVeqwGgj1Lv8mXFbCFjdsnE",
  "key14": "2VHAPZqsRAVEMKRfQyd3eG4HXqeL9Gw6FdSrqNW5CYS4jYiURb4KjPtCgT5acZFCQfYpC9Ak4XcYka6unCuWVwkJ",
  "key15": "ZwJ6RYg84FbDfTr7aCSpKWSB2ytmq5cg72VGHbdmYg7Zx4GbQG8TDufuuMVY5PXYckBwFcVovJombgQGvuQ21YW",
  "key16": "61Ygj8iJNtiDrPYNjKQUnuzGqWEhuyLEzMVts3sQ2ndCw8Pzwv7tvst5tDaXf3odJ6DDZCFUSG1htndo5cN2PedC",
  "key17": "3Ywq2ZGBXRwZ1NTLTJi3K6of2yTdTfR8wnSyhRnG7FagnpHt9stPzaYBreY4T3oNrQk6L5RsxyDBvLwfzW2htZXQ",
  "key18": "3wkbUb9qG5NvkGzw2fVsM5ckSzxv7hsubXix1TeKRv2mp6MiTeam6AFk7rQQQve8ADr24HogaaipPnP14uuoC74m",
  "key19": "HSbTAVKahuxbgn6Eg4bvdWTYfC6hMrHstM47MQTYWazJoKqFgBHxnUxa52GCXb428RpQBYNj3U2SmticnFw3qUi",
  "key20": "4tiVNfbMqzLhFNjfNx52Q1RpvY5gQieRR77nQWWfhF16puNZfqMQzcUARkorhTwKFMp6C1atnXV38Kkm97Sr3pRr",
  "key21": "AZXYX54LhuYeiWZnBFMqrwR73Chs3z6rVysgYzztGCfrv4fEj3ekeV1ACj6Gv5bAC7mzf3g5aXYr5tKbBZRQDbL",
  "key22": "3EgvUXEnjKUEUsaC9xQsonKAGRNb5GNkea4bLjXbRQ3jMkRV2ZHkQAjxtBicGra28kx3G5B7gxmK8wAExqxov7x",
  "key23": "5m36nRjMz8cBCXJyK7rBpm7m8DnTC9GEKZpGADcWSah52cjpfx1mkazepFccJx7Nf6hua1bfXPtD5CpWT5Yfoqbv",
  "key24": "2M13g6Qt1ZZZEnPrACaJjQDdMZ7Mw2VkAzC9t7pHSKY1ZvSg6EgGu3VNvoHnyDtbRGs5jeD3tDbgwEtwXNLv9zSL",
  "key25": "2ELHNKyrLLJ9egf1neUH4q968EzUPxu6JVJGHbXyMMtKgKr7iqsFefPALoyndMp2jjkopoY1QCjkDChKSp7NWeBH",
  "key26": "3iXN7ZMcsw6p5y9S9uJxcwdD1FetrmnAgp8sgFwovMsJmuDKnujUwV8DGPm3Y9nNDLPBUQtUrXf3tE4sftqkHP82",
  "key27": "PMFTZkWCsPUEVKsQ7jWzqS4fNYjxz1xyXvmzdDSjdtZQRaR2TS4XMay2aR4cQDtvScheVwZnAZ6VtCPPoWMGXCA",
  "key28": "3o4EitUybxKLeN43FGH18Yd7Vs1Jkr8pGCRB1R8tcPwR1aX7uotEKjp6vToj1UNDD3Kx6m7gSDzEBodnwBKZ7w6K",
  "key29": "2dFmzNmnBhLuymkmxCijKPhZBXJrXY3C5LC1jHStL2HA8oNGw6Moab7sL77Lo6Uz3bWtyNpvEKUU6G2h6UxiydLc",
  "key30": "4vCac25ACAdquiFp7rZ6JACcuhCqTsYpGFusLRrMSK4jZqwFWenBuydQbyaobuXpEd9yVZbMr31QaaJV37MiLo6s",
  "key31": "3csTPSH9ccQ1QrpH7cyN7QMESWEbzweTNejRJonU1ez1zFyx5jCsRWqHfUnkSEH9cHL9PEYC2bubyuS3MoXgdsnx",
  "key32": "5fCAEGMtrsYEu9GBwk9bXkTNnvaeC1C6La8gsPeExmX9meVv8uNm4un75TZW1KzAgGaAVJZRgx3TEjEMZ4DjZDhj",
  "key33": "21MiYQUoBFWDBoLwKgaomMxbqbnyjchHkxky3SSSuga1GyQV3a2qhjhEgNstSnT3u6rx4RE69KNdJCqV26nEHxHt",
  "key34": "Fg26MnjPzjsJxokyXE2UHAdtb7TW4gnzAa2ZKGDDpVhRTtN3oYHBV4RETHyZ29z8b1824pAtZ1idPWHuUJPAufW",
  "key35": "4qf1f77sLciZGnVyPuGd5hkuPxGE9rvsiMp3Si2nQAtt3hFenTenDKumHupSThmjqBUfR1pwAsmd1ESY5Vpu97Hf",
  "key36": "5BvLYeAmRcPNFB8HA2Qb7nkWWgHEWUVXyu1AuipKcbQwTwpRPk8CGDgq7Xem29irAoqjwuANi6jqRZqPFDRaapEq",
  "key37": "Robxpz8zNhGKyg1wM3nYR7CoqcDCt5AZCX9n2pjxarTKpWciVSNrrofYVv2pseDe7ukNeLLGEe9gZ94Lgo8jMjB",
  "key38": "EtRd1YjGREbuKaXfzxj1DCcLdkiXU8h12zP73vwWPHGmnbVfJRFy8bJ9N7bHqm19oVwoAXcm8N9p6JQBFQXxcEq",
  "key39": "5Ljs2xBsf9yTiG8oUAiPC6pRFgXmcPH3ivZ8zkyTbbKVqjjpJ7HXsHGWAUfBmYwmP37QscNir72oKY2qPCN3daND",
  "key40": "3neVa5362eeAQbB6UJzdtj9QrsKfrfCqMvMN4DDHFH6r6GgeStVerosZ68kqe7W33touS1r6hYkGWNyuBdAG8o6h"
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
