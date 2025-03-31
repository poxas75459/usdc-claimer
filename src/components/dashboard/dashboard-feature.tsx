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
    "4B4hTriJHVN6X1Kwiphs7wBiFvPRZfQXP6fm8JnS65cMeCwtVFXYCEaWLY7HoZsFrcUeWR2sF56kVCAGAPrHNhpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8rJN6evoknk2T3chaaFSojSirr7nmbwyQKrA3PcaGdnw2ePCLueYLYHhCeLzVvk9VHtNWKkozqL5ctQdPbSVCT",
  "key1": "3LENLYqQ3aTQaVmuMhN8gujk6wutiLcgyGKKpCj8oDJcsH9NQqYcciuDH9ineGLefMDniDonueYMGDoDN9im2hqs",
  "key2": "2QCigbXeipncuihVHYQPmGiSe4GD8CHQD8E81HUy4F9qkit9Ay1pnv4QULFonSbNuxSNabLwEvCmm26FFew6hnxn",
  "key3": "4H3FuANdA5ZRxfDULURbjjVTT81nJS5G1X5WV4awZNvJ1RLv92ooqFa83K8gUGp61tz1jGwPKiyjNLSN49sSEHj2",
  "key4": "35HJ3zmNHUxoNomgBveJKAq2BjhPjTC2VwB4PnFrf87pBzEAAmC6bVWp1gB9wdvaSdZwE51uuBsvTNAXEKzxtZ9L",
  "key5": "4sF8GrgJpDqbqYfj9guzV1xjiiCmzJ8pGcAz6tzznJUQsKZW1SovcaSi6SEpFPfDyEA3DFDhW4PnMx8ihsAtiCPR",
  "key6": "3qY2TncJM112qwPgkewbbb1NXU2tbXS11pLYL1BLMK75YVQLmGSFwUVucCCtcz9fASnHWCmBaHAuEx3denVcPxh6",
  "key7": "3C3oV4WTBjfcSxWDHESTPMo2hAd3KX6up8wqx8CLDCK1iii3cNy9owuwvDfsje7J97t4kUDAGkxev5ZMaFnm5zue",
  "key8": "Jog3xATSgE6Q1XtMFGpfX86tssPRsMxcmCAtLG8M4UtEEwGqXHceoMK2WUu5wL8xM28xqN5KRMuvC1sHxqpLqC4",
  "key9": "3SL1E3EH3euXMUoG8ZRySckCNsLRcB9Hw5csJcifKUYgD39T9bLSVHSxZQwg1W8GTSA9HGeg5TuJJRhQYS2hxRbt",
  "key10": "3dNRr17UQ9oa1UbrsPRF19VmbokYUXYzEqxPsm2u6h53BQtEJtTVKJMxwzyqxRwt4xfgwwtxe1Zw6WH8KF8C2HKN",
  "key11": "5ESK33Yjq8NfGtWi1adbS7Kb2fgQRM3Br1nipzjbTACgK8bWCsFdos79Fsw9Dtrw7mLqqVEmesxZn7ohuvrwLBky",
  "key12": "34ypkmKMTqNW8YzA84ZLJBPBF26j1vMGCciHw5wtXf16xgLw2ZHgEDrNJeFY2s7EDbF53w3VTB3HcbfEFxSULy42",
  "key13": "4Dp1naGhx4XaimkCdCdgHXZS6X5u2aGL9havVTbLm9ug2xuPgEYTHm1JXHBZgGB49XWJLjb3eRfAwb5kx8FdzgVG",
  "key14": "yrnUoKpqHpfSnykXafz94k13T28KDd95meAsGUDC3dfyaqZp62Wp6ogdad9f27wjBNSLS3NMBysYvkDU4hQjjuf",
  "key15": "UJZBtNLFLwotc4R3cxdmrMnb49x9B9d9uqM8AHFsrtjM3Y8gwKLudrKrTtRCDSoQQCh23q4LiM7Fdqd249BuLyb",
  "key16": "XGXk24gpjhBxQKuGHAgWrE76iW9WvgagtsQ4qPMgpGMEokB9wtyqZgC5K4aoK4oT5E2eoZEM3vDk35t6n13Nqkd",
  "key17": "3vjMmZhDJ4m7DqHXi4je83vJzHwDKM13q6F3QFLCXPztfcsrKRvEFKp6uJi5uy4Sz7mxQCn8fp5C36WequaX4TNE",
  "key18": "5PZazGZcvystuorXjNz8KE8re3VyFnt4vURzNHkrEYkxf6dzsARPGotBxtytZbkmxARjpHey5PueBU6GrU1aCdJ6",
  "key19": "4rYT6qXgWqLWX1LG7uh8qBYrEHefYhYSQZVtj36ocVexr9jFfmiwoSThsi6fpgPaBwAfEeowwoam3teDaw8uFkkb",
  "key20": "4D7z8NNWDYdjymHnd2W2ZAVbR8Xf7wLzygbQvDnjGApkPG1AjP5sQVGg46Ba1jM7yjBRL2PYEFXNGw4nbqFwjxND",
  "key21": "3hwnBFEW5WpvhGiM6qd5fsKwTAG1yAVfiD83RMxaQZFuAtJKRwnb5tMkLAViHuHHgeFj5VPDsPun6RqYhLh7yCnn",
  "key22": "D2UaYjJ9kukDkXxkyMvxsoysrWVpbTzKtKgTT3db51CBWhS7nTLveypzqZUahm15UGgYNka97T6GA31btCuCcfk",
  "key23": "Pb28NEEoto2fvLP5wzFZG8m8GQQ94KnigjPTkzem9pT8TNTUmqusnuuz8gDHpkC9hHnv51CdsT2jLBxh9cs6F3J",
  "key24": "4Hnwmtb19VM9kmaAKAGzNFukBytie8397gs8HLTLtrVUetap6SZxf641Fm4vKNDsEX5AcLNw9A7CCMTNDHgbAUvM",
  "key25": "MsKjMQ48vUtXGAUxxVbXYLoPseiW4k8HHzTBTQ82Y37gusQw8J7fGfLyA717VA4cPizTgGGuf98giVZmPqq39Kh",
  "key26": "5fePSyPWsZRD12dbxDwRndaL3djP8UtMrkspoovtRNAK2kbUGWT2Dch6Q2qRVU1LsZx7aan6Z1TiAX3bap7mTfwL",
  "key27": "3y6HaUcedaohG7yJAsgHQHpeZZLL2WVTggEHqfrfWstJ75crjT4tuLv7CCz943QjRGbKUWvtPHnbgY2reo51RKkF",
  "key28": "2idRdajsPNAAhzw98btKyyE8bKYJBUr9t7ptsFdBqENvLCcTj6V2di6LxRWNcSYEbzFpCsyPbNuz8SkHLWwTakr3",
  "key29": "3AHUseQFGtFuuncdjDUtph3rCg8mLzrtQ1cKsRzmH9weSJihy5hVP9y7R51GyBMrTNY7vjz27E2vM3hg52KPsSxf",
  "key30": "2kDVvshPXrf93KVFxZrAgWcdEHXmiU8WCvV7hwhYCF8R8ptpYLgVdDJQ6rUq1vzRXNtJQRZr3k7r3QpwfS1pKhkv",
  "key31": "5pZ21pAH8zNcRtc8XaAsDd5MDU8AUTmdP4Z6Ckjig6XpKZpq6jxmEhTTXiWVkYZUzHU41SbstRJML614w6WSHBhS",
  "key32": "2j6GZMVL5LUTBCQX5gYJSY28BcAj5LsDvAUps3uvtvNQrTieCbUGrgBfYumqiGJvtWoCG6geT7jsUX8Hug1rAWti",
  "key33": "5waqUtUvXjehGLqeVkFvFvAQXtpgtUkcStUD9DtrxrxTHpVaeQ6GgRLTVBU4edG7bwd4nNpL3xzhdqQXuzvAQZdp",
  "key34": "4i8XPjKiLw2FPRFr9DAJqTcJ5imXKVLR6z7XSzUPqwkv22YwPTFcwHJpVfmGBXatbx8afE3aurdrAu5nZRypZtwS",
  "key35": "3CAhZAPb8MpGskRNVR1hbSTgUuhsjiqCZAwWocTbvtin4uRPLhVJPLPGW8JJHQH2sw4EzwxcKgoEronAmZRsQoqo",
  "key36": "ZqgfZFfUezpV6UgJJKRwLue2i5jYj2dVCpMa9APEtDiWwCvuQg4f8YARKGaGsszxpgq97p29ZK31LTRPFLvA5ij",
  "key37": "NXxS5Vpnq9uFSSXHKtyV3tGkzymoF4NDCiRP7bj8zV5mRyeysbSvBGYhLbEmdDjwgFRuH2QpuUJHWxntQ3RLeuR"
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
