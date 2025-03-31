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
    "2ZtGrJiHVxmwwEngfPVSvf2B4AfX4AfTtaAcPG7GmszMNAvdq61CLcy5AQKfGNvaNC1LKt9posFBMkVRPWNt8Cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22KQhaiKizbovD7s59LiV72GHVpKrLqiBmj9okRLcW8QnFmRRFqr1hfxNcFELk5QbUU1Dv4qfTTtuBw75jpXsoAA",
  "key1": "32c7dm7oA7xQgyaYcLF5ayAjAUPE1RK5fruiCaHRiQLnDCThSubQePkxMRRN91Z7LG2HcjBsB4N6mHrusaoE2jhV",
  "key2": "123uGakYbvGKJYJiwtpUEHWLim1za9xEzTqVKa4MARDWindQvEXgXPgGj3SEUtCkGaKgAsEJL8nDQ3YMXqamwUgy",
  "key3": "3aFZHmcg6vHtjE1Xwr5p4PBL9w6kgdx1zg2PdDvGERqc83wxCh64Ten9e7WV2TRVZgWGruhyuYUDNkYHG2scgmDx",
  "key4": "NrqX3n33bvZEJRez7JbPpwri9bv1iaTUcsWjC8dkPCrEJKXTx8YKV18ECEAnBc1hhiZnfskv2W7hTJwmyoNCswy",
  "key5": "25zjG4xbtvE9bt72rGzyj9SmERo43s6b7KXBF5ArmXd6tGohTKsct91suLXffBwVN5A1Bg6t8kKj7eVpDBoTTbhD",
  "key6": "2QMC23d3gpQ3F9pDGfAcuBC13j7C8NDk3BsWPBDijia1yzUEaPJsMYDfCr47SydeLT5fYQmhAqsTk8XJvS4o4aMa",
  "key7": "4hg7ovuxBEdvnzSGAfgYcGrWShSKfzgUUYATXnJDxUBrUXt5rAjQbr1Cgp52NP18Mf63Ka67DuHsUranDzwwT9WG",
  "key8": "virK85r258kv7yhWgDD4G8ZZ2B97pY3AnNS7tkkyEvCZEzHZjceExhQrJMvCTe4L86Dm1L3KeciLSsvDZDcLarn",
  "key9": "3DRkJcs52tFGLvMCPyFzEFkerRL7a4aSzD6MqH1CMvdwuXDEaziH8gruMDeVQp5xfJX6FoVTMvwPYKWVL3e2uagZ",
  "key10": "5nWpSsNv1CVNCskcQ1cdFnb9RZLjxq9PZnK1eBV9GzPT6MaFFcUiXAurfH6jbw51rDsYMDGRSkMP24LKBDfyM5Dv",
  "key11": "4pXSE9F3ykUd9SKxdorA8JyCPxD6rgga4b6SfE4hSJf21qtDHn3k3m5VYvNN8cu6BJE7x8rM2hRiNPNWNxF4zkZs",
  "key12": "5HGgxfkZLcgfhkirfshvZN1KxtHg7WSWkR6GJocKAhLJfPU9Aws2S6H2MR9dvUcpKs1X6wy1LeNGyMc816RM6VSE",
  "key13": "35USQiXiSeWTKEcy6T9TyUtn5pSZzWm3LptpnmCnCF8BvcsNroDmBmjdaML5eEJp3SskS29Go4X5RFttYQ4BLPhG",
  "key14": "4kQsJs5bA8Mu5qQSnwDrtfWaZ4BqPCDeeERm5qiWpQSgTCopt2kaVodFU6AELxSmP2DgR4obFDmADkR734cZBL3M",
  "key15": "3AHcCymgLo78922rtbiwpmxQr2Yx8DeY9bbxkr7X1waGUJB6EHtnnuTrUF4efVtrsxpWTGAWtHRRrcuXCFnbourH",
  "key16": "36qGXHS3p3DnPGaf7j2GsZaXCiG7bYxK6iJmqFdpiXFReisydUhyxmNKEorqm1467FfMiYAEdbM6UCjUFgK18RSQ",
  "key17": "2nFVEbBY96yNsgQZ3X3CJ1wePFfPhmBKd3mgAqzMg2Jpe9yATcYy8hwGtqiozB3QH35dw2P7C2knBMk8Zno1uqtd",
  "key18": "5rNtSAHEX96nyGW7Deiz3ALDSKiXihnDssUHsNJQkEyJX94QSQBhDoMJ7NSWLmJf2QyPJVx8gymTnb7TM6iy7pZC",
  "key19": "3kJY8A92XFBxctLtRaUB6ygtnB39FkkiUWtRCXfKAiWFCZUC4ucbRm53r6HFskzbBcaXeb7tS4JUguRoVgu7Vv7C",
  "key20": "3w1A1xPUmeWcrGxgXLvLWpMMsWuN3ANambrgh79MQXYnch4hHT2VzwfckmDuZQMKWgDPc2mZdBdE15w9LEJNo7g1",
  "key21": "5tKfZrXecDjQHXS849SYKypSDCnKpbyoLGeAMavdCidBYZBECTXy9DUrFWNXekuNzKX4azdiK7uHgXNLYUgQhF8N",
  "key22": "4aGeQPheneVAJYWjjAi4udP6zS27k4KYLmcSG4563EVT2EAfhw9KHwBPTPsF7fRSMxVE3exFDBGEMaH3nPBPWhAM",
  "key23": "sCjBdwwpCY2oimhxR7UP8JqPLKEfJjwGa5qaZWxcfk2iG3ETXmv7S8PZ1n7LBLPCcQxSJfHWb5fKSCXkbFUYUBN",
  "key24": "5Jgha1DzQXJi4ERWwSjK8ZixyRvCMmQXgmoyQUjiTPjE6e2uVcp9sPrmehvfMXwNDnuMfkqi7oyWnRCr5XbQGdPq",
  "key25": "2zSqF2hSPeeWZWLLgtGdrxQ9EP8oTBpCmYAVcbacteZtdWXPG1zN4qs61pSXK8MtRBSij4uJdBEhSGQxij5SRaPM",
  "key26": "2wmjqjvXTZsrLiAsRZmZzdEcJrSrYxYcDwcSS5Fhg1LbyXvRkS6Whc2pdBzRew46qEhWPKxhbpnPTbWbeAYjc6bu",
  "key27": "67TPieSZYBbVETZgoTp9cNnv76Gj3mZTjYqQt2vL7tgn8myiKdnBX8DkJhyCQTGi4D5Ep9H4YNXLaoEUbRfJEHMo",
  "key28": "5NbogQezFfpNpoLM1Lg1Uv8fwdzM4UDNUUvo98kFazgrzVUUD2Yty5SSCarL2phbnXeLCbsAR9qiFyvzMfCZMWoP",
  "key29": "5Be1A86YSqpzNw4Ldk9wXMCnR2PBVQvUepyJVAWnxXuV2BmtWeThz7iibrRJY8UWob8tASD4hPhA92XzE1NsuyBK",
  "key30": "426bjKi6oXvE4hkvC3nzjsvpaJgjP2zNkFMR218xqKM4YCDB6TJXjjooPfzPzAqA9fJ41xAeSLTJD1VLeHU9B2Q4",
  "key31": "3UgmjP36o8SiJtgbJDaZM9yN2nrUyTEcKEAUEqhdbSBMwRgsGk6oQAATs5cBgk55jA7wq1r6tevo7ogbcYeV14U1",
  "key32": "kd1RYgRYXKTKG5GirXJZYGtK34EBLeF2wZMtr9d6iTQ9xUCQHVipzdS3BdHU5ZKS7cVqftbDRQcvEhZ7Pj5hXdj",
  "key33": "43CZNQBMuJiids5gAE4qTWognN9h2GT8jT2EqwaJJ4L6SLH14zoDA7FWWyWPiZt4KZSiLJPq9ek9BtnWGa9TK2Ni"
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
