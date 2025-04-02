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
    "3ueqwXbdaEzeonYCeVEYWFJSTMmNaWmPHSoktTPaATWpmyT2b8NRUpsMRgihABq5xVeXwEP6qaiKiNpurW6pFrP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNC1LxAVSS5U1YuxjwKijjJPe3v39MSLPWXKtsVGPkUL9TTXqdxvzVZ8zFQe433AfZm38wHczqbwhgwrCHK5tBi",
  "key1": "4amf4Gmzn4t9AWhw9CxZPFrSGmn1bo6vTdKrCh1norUZeKvo9nf4v37VUcu6nYj6gqa1jG8jtW1oczS1Mg98LFiN",
  "key2": "4TCkgZB49chbb5S3RTj6NbPxds74Dj5eDcs16bc5k7eX4aJBLbo87ne3U3F59xuEfPapk18AgrkndWeY7kAhyWGa",
  "key3": "3ojGYK3HGpU7wjFgvj4Gmfmu9vKgDEByoTLXzAwWaCebqWSpGGgbW8TfneTX6atxuHebD9CERYETBYnRgv9SUo6A",
  "key4": "5zqhZhWrnjfmnpKYRJqPiqhehqXJVr9gNZqTinDun6FbGrEGBTXViScZpah2i2yexCrEnE7jc7fQEmuK34LqdXr7",
  "key5": "4vstBvVaZkR4zggBjRLPJQUF12kCb5yaaDtCxDsZcLZb5uXd4Um2aA7aqB9ZURF9JwAEz6E7SE5to8x5KPkwCYem",
  "key6": "3NB7xSUvEuWianPVoTjXwz2Thdc8NuF31EcrWqdvuhGJZ328xvYwGUBrUzbQhMFnxf37sZ15UiVyBgdZXETkuJa3",
  "key7": "4qQJ2xtsxisCWS4vUoS1E3effCrRTrsMDBCPE3JxH9p2J4SoJvcNFEWSxiYh1ohnUwBswbsHUZQjR1Bx1PmnKLYD",
  "key8": "hoFoMZYhKBJiBUGWjk7shPCMT4SEbe4y26hvYxUb1XgrB5cUobEyZMLqkiuJ4CPdYJsKQiWoVu3veLkZVjKuASp",
  "key9": "3mdew37LttL3KRjSaLGoZ9oYLv1pTKT3oyC7Kn2KHgLsSpCDmscEBzkmx9js5iQFAzS4Hg8M8koYMqcY9RHjVKUo",
  "key10": "e4nZRiVKwetXE2JyGMBCj3UCgQDtWQcvT9j4dm8wc2BAgN8a1TXmXExz1P82MeuJqy5rNH5kGnmA7nz7nS5gwhd",
  "key11": "5oJKwfuMcX3pQo6CNJTrp1EgRBXeneaeWqzxALkpgSpZh5LzvVa3hB3byShHHdttZnU4kKJAGL8znEMA8qjpZBGn",
  "key12": "2sDWRSLntJmtJLwwtqcwfrvwiuYpvroGQoPfooDFoWwHi4n5P3RjiCRmHDidFCX8Kr6cNBWUkxb7pkMmEkMCSjZr",
  "key13": "4VqXgqzbmX96GhrPHjmwxurkUyU128zGukaRJoeYCkpdxcyTzB3jbFTZzKTNo7cvgBY1iqZkJtCqBDqyyucDiGhY",
  "key14": "3y3k92uhXrN5qtVbnfmTBj86uTht6PikUpB8MCquVdxxqCA8VMNJQYPxeQoZxMKnPfr1C9h2wGyUXrKig4tMvy3f",
  "key15": "3APSbhmzvwFTQwis4NVF6f3MfCJyPDLhRXHyAcnVYhR75QUUxNnKg1J78SMjUcbRCSEjKQ8kuhD2zg19c5gkEZZD",
  "key16": "4MZVKQchdLeqS8WzkSJR6HFsZTA2se7rveo8BrXEP24popJwxWKzTLBrM3BjoJCsFKrSYGopSjSHhKqtdQbcu2AW",
  "key17": "351HdoxtjTwxAXRK5zbMpmeiNdPcFCnpeiaXkuH4Rkggfw2QUgNWgk4BZB9W4uMjBE9xS8EzEWjPFzn53Y3Mc4Pk",
  "key18": "pG3nbniqrfAP5RvMGSKkN3eqAj8MidjurDAgpJzQcASpkJoNbaS3KG3QDWkdg54SsAKi2rdqmx1GRTmBLmw6Rdc",
  "key19": "3gNwKWfPvrXKPNa6btzozGYYAYmXaQ16A3epsvb6JeKS4ssHybcJ6wVspmVYhJB24VSR7AdTNqd8Lz2TNTH8H282",
  "key20": "5jU1wPGejG65VYB2YqCT8s7EFspjdzSkRWoFemPCCut2wJZR462ohyRNdQ5smjADqPkz4X2yKWsbCBGtHzhGKNrT",
  "key21": "5YwuSfWeszuPuRQZ6sb3MPoHUoefCeX8Haqj9fKYha8P6gD9z7PWC8j11BvL6gxLLMMjdQ5rXyUwAxtB394Ne3Zt",
  "key22": "4tzTwVx36QSeiVeSQbspMGryAp9gg489p5X7ubA7mWay7s9svfZ6ZRoCnY8gJb6mfMa2Zq1kRm7i9A7ajJoMWAVe",
  "key23": "3TyywCNQAqMRyw7wTVYpGrCSPVWZtiih5p43TYxdBNUnkeLPf8tsoepJiHVwM5724K8ExW3zzcNiSinVgYWBs6Gd",
  "key24": "Nbb2xtgMPJ1PJQoWT7BwCNeQk42FfGjJv9Mds6agFx72b9MZL9AEnaxX9EKxhf4G8pQESigqshrLnHYWbERouaj",
  "key25": "2jFhurtgAy7utqtmEptXBR3GuKtvrD2pEysTrwsKUCRWZ8AZRKUwrB5B9aasX8jwY62SFCjc6KRZ4pQEiLaDhA18",
  "key26": "539Uc6kmmuoi7YbgFJ6s3BzyB8ojuZx1qGcGidTsRgVgLtohnrpYsn5zUSoKmSFQf4JDQSuwyCWksZtWBry7r6Yw",
  "key27": "3rpNzaWjJBSx5QbwFxX2ZzntxQNcCUFE3Np8X96GJy44y1V4T8VcZrVmNpWEnH4u8AWT2h7enuRXLFTtxqGeXD4M",
  "key28": "2cgKRBB24R5HE9AL7rHAk2C8nbaboxygwf8wtUuHZk7PxzfFpUmK1vA1JjAQpqNGTJ6VdbzaNCXWzgYohySEtQ5J",
  "key29": "3XD5ZecsQSSJCw8t8SnsSNy9sTGT46DFV231kSCnUrHyi9gBxHPfWPtyov35qyUANtMum4RkuxPz4GxnJv5Ya9zk",
  "key30": "37CdrvHbmxHHRT6cAZaReqspa3WFG9VPxjsgMeFdffRJg4rPAyL4kAJSJMsvJ1tDWEC27pcEeoFWqHsj9L24y5FQ",
  "key31": "2HKSK1xa291CGPAsHPmZsSLU43zmNYjNAnwqu7rpYqitQqFxqcQ3kjNRUyA8vnHLEnvrj1ervi4rSyFVuDgBFgsJ",
  "key32": "3pcXqHgAqE96Z7FJZUnNT7VmmvbYVmtgjSS231p7WxG2MSpakfnvrpotFxtQAmqZT3JegWMMK1PEZgmohHdaTcbd",
  "key33": "Q33p8ykTFw1DmCgNJP1ThcLjyX8bS9W9DaBgHEJD6GeTKyvLz54ZWUoB6V4WQMC3vGPndpkAP41WHQPmcgNxBCj",
  "key34": "2XAi6BxKmUGqDsdEHHLnN24ERhMU8vcq8GbtaUMbUzs1pmyCiALZGEgNL2JfWgTQE1d82YF8jfMc6jiv2jAjri2K",
  "key35": "2bZkSdmxUqpNAxPaavavXrAzzWeUbsHCRJbTcvUAufibAwaQtAEks1aSry1bm5Pj6NKkBtMewUPnShQ1orcgFEdh",
  "key36": "3Dgu1at7MWmqEiEYSgxcYdiJUDeuYw4rMvQEHymK5VR4WwxoqxCnxiL2MPV6cpd1wUVrAui9vxfu7uxu8F7XF4od",
  "key37": "xXDoV4LMZn7rqzyAGhGgg4pLkvENxwQWKwctEAchzQFwqkFtGBiqcWmPGMUpnbLFVNHeUptZmYrv27MqDtcTNxV",
  "key38": "xcWGBKxkx41bqT2dVYY5TYZb7Zqh6d4f82FGiyxR9uKx6tvbas818QT3vTDUjfX5ZnoD7UW5iPxgG3cDs2rz2pq",
  "key39": "5hKBWcRvr7CKBr3gTVtAYBjdt3TstXSkAxxg6p73uqKLHaqdPADRdir2CgLgGikmRdFHBoTmqx7HzdZVSzNGBrs3",
  "key40": "62eXLwJx92A86vHZ4xnNsTKHubTgNLo37ZwuzajDmn6JFhuk3ob9NVKL1umxUx3C26CccPPCRWihXW3Yf2rEZTGD",
  "key41": "4jBGd29FfDKDHYESyKyks4o8mmLLwcDasW2wfsu7XnYb1Y844sYDt8z5ZY6v7wsyyEcxaMBupTnHQa1uBdhi4Erp",
  "key42": "5NjRYtEBW9RzLPADVeJgQSbhSeb8GYpp9xcnyKZjGpnctLzLqD8YwtW1wAdVdtu8UkhpqYb6NAWFWH9RqzZA7MZ2",
  "key43": "4PJAyUKn8a7jUxJLy9xi38JgdU4eE9qcNFifSzYUQoXKUtaHB7a8mra9sQG2MySYeWfDKJY9NZWzhup4MqmE5Pjm"
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
