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
    "4yB9qygZTJAe4NF2ptzFFbiQaqUX2rXF776MZxpXGqFFGSEYbWJutY8LNaBWyuW5e7GTPKwrMijhx3W4dVjJrWRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GPD3fd3zgyaLShEKjvpDQ4pyBH2cZXU5GryZy1ysjoHH1S9XwJsbMU31wnjXr1ssfp76bsDaWgmR37WstiHiim",
  "key1": "Diaei7GQhH4jYjjQcRjuNmjTt3w1oy85uw5E6d8VpqwEeNvGcQnECeHkPRpTy2QcvYqJBDUqHfYe2XGg4TGVVCV",
  "key2": "2skYTJb4dVRk7UdNS8RZdUadJ9ea1xAqELLRXLasysJzTLWVEJmdejvKaFNoPk6nZo3jaGqBaA3bpiT2AFxYeQU4",
  "key3": "3vZEVhzSLiaRCpqSsiTS7gePTRdgqAnrMp7crFGqrLRMhx5iN4rosh7QiydN5ohEm3NqrZaBR4WaEQTyr52ufERF",
  "key4": "2ULqHAvkBx7gQcmdde7bAQRnxDUciTNCbig5QNa2ddB2W2KJ164A7Yg65ygbQMP6yY9H39BVX5zfELC446MgEtNX",
  "key5": "5ZTjQxS9JAsxVbuP4NM3yDF6g89YpccajZVx6U2MMGoUTg2vqZLxgn9hgstypu3BR4kLnuy2pqbrgqKz5SHw6ndw",
  "key6": "2yhnMcpaz12TX8DBejtHiByBTe4byUi7yrPRrACTCk1DaReyUkKxwu8UUgXxtAUU39pWAscYgvB9wkXaooibwET2",
  "key7": "3U6Sn2s1Y1psg8kKSZpmMPK9nprr97vBPsSFS7o6uWH5XNjHxmP9zYjmmKQCYqkeKoxz7eBCcMDqpb4yrtXMYHr2",
  "key8": "4y6DyDT6xmF48tdNz9CXxwhmwGgfxnVvgq9zePaQtk8suCSzmdndXgeBNff46s4CtK7Ja353d6Jr3DVWScVPjEUa",
  "key9": "4PspAv3pYq44U48d2XZ9D4fAzELtEUFsrJXeAHGEX9Qxk5nrKiWfWRohzoE82BcdV5jApLoiFFZgQkATe3XApaYp",
  "key10": "5bEQhEFRWwSPtep5gvmGEyVx3khukHA9W9mkivokSUBaqNUvvtNuTco7MoRxkiTL5vL8hhmieryiUnazpNXrCPeJ",
  "key11": "4PySnuLsrVwen5zeSx3RtuvBGe69oK3QvGrgMbU88rkZvJhU4wuWHuL6dC3S8jTc6w6DsL5f3tFA7zk19DeCdk2S",
  "key12": "4mJZuj6ZrqRBehpp5yy41F42wHnJxqBLbkpS7tgkcApKS3qyEUwnzoHSLpSYYCs87NqMFeZmUG6Xxycm1VfqdJAe",
  "key13": "4WwGUA8X2kwfsVsq57PsaRCx2jrfmjbMSrxedxerW5SYyb7sq2rUSjd6dyZih7Mws329cU4k7XXMjZeSo4gPkNdr",
  "key14": "26SzmqNwFUBna3jt8SNoEiY3Kis3xkGjadybVoUr7eoPjedQeE1ibs1oxoMNpgPj7V358gHkSm4XcQQwH1ZgayWP",
  "key15": "mysrpqijFt4jYdWwM4khnngAdf86AZUTzTNkWA2UguFQ5nZnH31rgeQDdnuV6rWSzWKuyhwWc9MojHpi7t6qfqy",
  "key16": "47dy9H5XtZ2QdCiN3Ve9tYX8vuRmdStEZEY8gAnk8F1ybmxGyf7G4aoDHCWiJUKrWE9AmBguN32x97ssHkCRX2kf",
  "key17": "52wcMLdAKK3RPt2x7DmHW84u6Qo4vm4vJms8m4R7593pMKmv1SYSn2HP7GVC3HTaoN9N4E6vxjrvyDs61Z2dAaeS",
  "key18": "2Dtg54GRYn84dYPFrzos73frDLNXnWUm1JeNvXiA7AA6jvpkfETo8yjC5TBZGZdgcNMH4LmoGDwc5CZ87vDoMsYJ",
  "key19": "3NgWmV7tU4gafehJztqyhZ31g7AZhtLABbnrjbCLjv3ZpTgWVw3VKjNMgwqebA7zUwcqcUfE6SaSNw4z75U86ufy",
  "key20": "4cf4k7EYdPmkV42nFyXkUmo4ogBNZVSepsgaYPfsVSHKQi3fEZLzLrVfzcPGQ5cCSsABndhj5ZQQDKWnawQpjuT1",
  "key21": "4AtMRmm1bT6ECVVJtaooWzc5wPXEbtbzVSVXJVSWgbUcEANxqQa4D3AR8KXsSLz7Lupz8uEmHkeTU5F1qeKQuT2p",
  "key22": "4Bc1Goer9cja3iCk317kYdX4YHV8XLmm8sKp7QGiAvxe5C6iju8ef8WRZ3CtBA9sSZWaAycWzkYKU2nhn4XrbhuX",
  "key23": "52i5Mxd4jAPWgHJYHzdK4fQvMqWd5FZ7oe4PYk4W5aGCTq3VpQ2mRKebYj4Gkm65Ks1p4DXtZsUuZ1EZD1HfVLvq",
  "key24": "41KEdL3emoNvtc2HwwpopEG9XiE9JK4pJqTC8GNdumNQy5EoahugFVXZ7Ks9gAqtpDFVVHcGbfpAmgJ9oQpBZ7Yw",
  "key25": "SZjXtoFuJrduQ22Bibv5v4b57Z9ocJR9JLT4oKu9JvBSsvfkDxApAW44i7JrYpMZNVsKDdkjxi9hckWEGPaxJMK",
  "key26": "5ZH14qgpmNuumqTxS3Pbhe9ovvtR1wAHXoWeXuVupiduhKepGSu6RhBgMiX7pqToXArXQmD9q2CMdN4P3SmRm1Q3",
  "key27": "55LTi1mDrQ2kPsVdEqM3MEjqTx1LsJ3WieKm233XS8Ew6772QfrjS6WftxCbJUbH8XAUYyZzGmR9Q8inyNAdr6iL",
  "key28": "4EhyZeHZTEoZvSaLbU5omyw7sGRYzLHM3JsG2SH6k7sLhRgh2EvxUyUhsjQPNUJHWTg1NEUBtodE7i82k3GYm3K6",
  "key29": "4h7qBwqjGXjEW8MKXFLmY2cVrSLzB4QvHEdG2AGT8ThVDr4ieUnmLoviQbUuuxLm2BvvmKybbAvuT62rV4usLKa8",
  "key30": "3fi3nnZtUXwm7r7c72LAKoMJWUfnv1g8bxuX7bSkZLonFu79YEbxTVqaBmeBUyRJJyqY1zotdBkkzxR3VEGT82Kg",
  "key31": "53zpmZ9LJFzZ3Qwayqo9rGxokeCpamcCbTamCq2Vnovk7ieYevH6d48orRLGuK4mUjgSg7WUF2nuQt1gcJyk639U",
  "key32": "3WC5XMuG1W3ToDWG2khaAfUAwRGAyf38wC4So95i8bjDhyW998gQ6gaoQPG2GDZNF22rqMHR7mpGqJC8UnJDcXGb",
  "key33": "2m4pD4mLTubApfSq8TxeNprhFoJv5NYNfhfCxtzCTHbDpPQHwfdnANNV8u5DdaTfHNfAnA6cXc9UoJrFtNpNQiKD",
  "key34": "3vpBnzTYyXL1aPpNz6h3rnhD9e8vKcxaBfHkDdPiooRU2tQabiUfvRrj8pcWAqD4EVUDn4t1cxGYkqFo9VMv8uKy",
  "key35": "hVZg6fhm6rVRbYoSaxcMaTjK5m35aV6fcjQVsbsViWRdP86b4kdPFPoCZ9VX7HcQZh6utBJzf2qWVjyzZ2iJ2WB",
  "key36": "4EbedBpQuzWqRMZ68EcWKrFwRmG3EWz8NSzFTJBoC8toHze8cRS9NDKB1v1rZr4WUWwFFrXzXXQr6hdemjJ4QwsU",
  "key37": "2EHmH7ZyBtYEasAVY94J8gYQBt4dexD7KPsrnsoRhJcoDgknBsBpbgeHMThFjLukCu3zw3ZuvNWyzEVGFH4U5tbC",
  "key38": "3cc8NSa25PrFoSM6bJii2w1JWPwPMs7C3EhoWccAAB1Hbef5QGArkzkb1TzgT31Hr6yzAwitWXU4LwbsHqSoudRk",
  "key39": "2KBKst8yEnL35jpr9FfoNDtwYFZ9ZMHXb9bELAK3BcG34M3GLarqH9RTJ3nRs1QTFsgiibwhYA8CgAEPqy4Jwqk6",
  "key40": "13edajY1tKKaed21nn1NdgQpBL9Baq2NQ9WgfpvjHMZYNwCf7XT96nHRQzMK37cHAQTu1mcwLfh61Z1oxmT5CxC",
  "key41": "4ScUCdPZQK41i5FD7hGjVMF8KH8fJ178Pt2fKe5YCuX9o9KUeowhuDR68NwUqCFt74RWQ1sie27Jk93s5NuH3VLj",
  "key42": "2v3S4SREWYjWu75mTnENMwHhP2VHL2oS5WNctnaBA4Tinrab3xwFiBce5azMwkUV3RHLXLEEiU8SqY5c9r31PcPP",
  "key43": "bAKTMJAonTtPSacsRZARccYzCL6ho8rqz3f2gmrbGuxXP7vyDmYD9yzLJZGq9TDGwM1JWqEHBZA9Rkipfi64Eqn",
  "key44": "3N4KtMUQ1ne7RL7XVe1VSqabFae39J9kmaNvQYhHQuE1jVCipaxKtzVjhtAbduf9G1pmVze4Quea22Su8EU4VfYs",
  "key45": "wzbpWamuXpoPc19N6U6Ppw24jXTh21d6nfDM32LKCy3n5z7GFReJUP2fLLGDuyoEo3h5TopHBGNXxRMXkvmf7Jw"
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
