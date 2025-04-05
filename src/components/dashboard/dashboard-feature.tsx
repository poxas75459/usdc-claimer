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
    "5MdJqnmGntYEjMHiutTVjL7k8tQ45MYd5MaVRtYtwif83FGC1isKgWaFiPkGv2PpmZbmGgr9KwMrMjKooLXzgjjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9hhz8DLkWyR6SBTQKGhves3f32bJ2sz2ezGpmqXUGVPGwrbD4KXPV28W3NLtAEpLh2swtUuYCvYfbPrhS2uZ6C",
  "key1": "ubxocjniubkf4nq9uJwYtEZy91Jy4hDAx9whySVrLa7JCeQuV94dfvtY7PriX9LJFVu3ZhoFfeCsBQkLS3nMcaK",
  "key2": "4LmPXPgmgCejeL8qNT6mJjWA42u6s2x5azVuBmMGR9E7t3v96AcRbsFqik1p4AZebxfvpPKE3c8nH2quskffHNkp",
  "key3": "2x9FRwto3xuWgMLSP3WBEpEd8LPouSsuc51R6CxmEWqbxkhNWZCJihvTiZdHBx7L2DtdRDsZBUEaadSJtrLX2fZY",
  "key4": "2Mcpkj9uhNCf33RSzGBLPme6LTnupKqh2gbTLd8oeUSuRPZUonaiFHMr3Chq5binBPm6JdEAbMJWSaoHgHYBPUQt",
  "key5": "3ACkGYupLhFVcqeYcZLMBtJndcZC3VXwhDZr491fpFAXy7nKGHLdNVVchQEMExooi18aAV1MthPHMaaqFjs4wp3H",
  "key6": "q8UwDZ9ADz7UoXEHUdkW6KEWTZTFTawurgd37TVtANT2WVW8QCcpzZ5XUo922XCY4MWh52M5MMcp4mtzZSgZsfj",
  "key7": "2N7n3gxFygQsEnHCwRdt6uV7YgUBSkBe3PqjLRaxhdSqgUQck418DAhaV6vDnrceim1XAnoSYXGZby14oLJuyDu8",
  "key8": "2GuEyYz4Ze5uVdDmiYj6vRyhgYRaM2Y1h37pVHneWKUFGDdVoBYn6kvBDGHEpRcBMBoQYUgkxnvm281mNbqEEhj8",
  "key9": "UZQXorCojtMKJD3w4qtZL2zQkV2RAp5NnHr1dEDRiTwQWiGyURmSufTtFaUF4MScF37jKGujKYDnQC2fvQuvsSJ",
  "key10": "32B6uRgE7NwPkFDKFX668PxGNkBAs7cdp3E2cSR65cRUaN1npd5Rv7yEtdZBe37S45Uaiv4C6EcKSUV3GUsKU1aA",
  "key11": "3o7uUj57TTwGBg9Ed5ZVfbPTkbi5naUXLwfaZXB8F7bchma7QAkpKjDFaEbjEEid3cTF8bBx5QhGnYd2peaMKhu1",
  "key12": "3JicEWjF6BsCqtnyBpiVU3QSusrv9Ei3dboHcfbbpXeVo48fYRDXMpQ2UDJWaKSL1k9qv9MNpQovRvvidDgkSxjZ",
  "key13": "41gggpVn4Jst8QDXN72gCMzZbgbA7s2PUSgr5dNVVTtCH3pGPQY1g2Gesq5HWGg6dAqUn4xFGNUgDQBSFNVQ73bq",
  "key14": "iuFdx4wXEWMnb9BgCWg2apDc7DVDR4i2Sp4cho95x86DPBpZU54Zcw3eD2b89gnGoKYBrLuetcq6FXw21ZxcijX",
  "key15": "vDjQfSs7eSLPxKek6DeYAJwQcbr9PSzFGu6a7zhooFyiG8We1uiFRkKoFhhkNP7dp3WCiYKMEsWz9oy6Ne1CV4A",
  "key16": "4s42dttVbFU9mcjVFdigGjugfn2jnSNW8GLnh5GSJmrSK3CXLFg94KthAj3zL6TMY7dEmeS4iMwxCVMgy3rXBNzG",
  "key17": "3qgScWB6Jha18MWrnpo66RyCPSMSfoSxQZoQeBttL1wQbSsdTASra5ABRZYZmoBbGaCkhDodYUdYsLnb9jiMEaAz",
  "key18": "5ShseAgxanHxwuTpyj8wtbkTZBxNb5mkGYmAf4Fv12fWN9fr4LEpZGzLpRwosaLHP1e1QDFrC5sVYGBbnjpW9thr",
  "key19": "3xW65nDwo1xSoNDq5Zu5JXDnKb7sKyVQNHhMe2GnxpRWzRmbU1WaWvx2V1S9WcZyjEHmB3bEDZhGHxJ4BQT4oGPB",
  "key20": "Qsy6LWx2eD9xuzNB1NY1simvnvfEqxcAKP73ru9BgBcZiBFc9K9V28Hyyg4aGsqWDgiE3UmxdLzZUTQTLXnjdib",
  "key21": "3UVkUXGnjegiY1k8izMmdFCBsqBwWq75SNkqnGZQygvXbUCijCC9mhSt6wu35pjKqqZv57SatZs9fyGLxwQqNti",
  "key22": "3orNdAo9oadw8TQ8ukXhTNuAbMDhbCHR2n1Qk4cDmvgSJKLCYGoXvjHsv8rE6WbEEM7NVzXKrmprZZ6ZZyDVpZe5",
  "key23": "3bBGSxdVcaSEj5BWFxJgAz7M9r7VtZHnkcygK1J8iXJruXHzuQE5rLXmxjoB7sURaXNsFxNkVxQfGRjn3wc4Ph8R",
  "key24": "4o4xCSiEN8919bpUBjY5nQHD84STtzfF4bawTeAPLvH3MWCBAHs6V9spyNJz8MKTdrnHFJsTRj8Nd4A8caNauLFK",
  "key25": "2isHCeQ9HRWxR3u9BxGLMwWXcLB5RWjkq5uh3jDZmyD4zVkTCM6YATVMzK9vfGeLfVki8Dqj9RtXsoZaNg9BMDdm",
  "key26": "mL8m24Gthj2bvagoaXrFbwe7nLjMyrEpXhyqon6oGod5PDrq1qLuVJiorZRhJY2fG9SpUt3R9EfrzuKyKk89tj2",
  "key27": "4NUK5c4xjYzWJJymN285Srsf61ZJqcDME75tMerJi94m72idTd9DpSD6SLnCaEVcyk7HB67g9LYStu9X5xFxDZki",
  "key28": "2UjtftyajUJUweMuQS1q42J2Z9hAYCqYiXg2KqHr3sKMYR4fBvgJLAkE3vgaxhgHY4b3MosDa2StGYxEvLtCUznE",
  "key29": "4MVTU2YE5akHn1RXLLT4UncoHfZGa37DXcTHDU1asi4wSfS2QGg6idSfVgJ8tc3tgDw8SeW77PhFAYZHB4bpQEjo",
  "key30": "4wH1z8rr4rLBuvFPN9J9Rk9ESWDCbyku46c9nSWgLPNuufvhNDs1hMq7vM13BsLsMxqV2mABcc5VsdGGLYmjp1SF",
  "key31": "2j8CDt4PC4swVUBpiYptau7KV3gUS91SnVYoPmeMUtV3vNqW3L38z9JT8xAwkQ8Kgws5tDUo7MesiDQB59vzjVcv",
  "key32": "2YFR8MqWN3vmgeds9kypKLCAFkCTUoBFxpsT4K7YYqCzgQJBG2zEQumNR582JywGvZpXnHdJgF36Ga5Pq1C3GruK",
  "key33": "2huf11G4BJmJFHenutNcUs1jpW3vmjRUKSVvtG2qPHxeEqhKHcvvqN3436zXcMCprRBBDGuWrVYEEmz871pkj6Qe",
  "key34": "4gViHcQiZUiBAHzqdWaAHzgzBqmY5AcTDWnNR95FpYpPRuo8oesU3WXw2pma9hwATvtfevLhWjwZ2izrcpHkBUgY",
  "key35": "BKqUj3M4ntJuYLcZTvetLqGWkypjssUkkhN1NnTxpkW7Sbpx7rM3ijFUcCCcFtTyN65G3uYqnKLhtmHfditXs7y",
  "key36": "4GkT4fxTbtyUAGxfBZC71GFt1L4xZcf7zMABsnSdgC528DdnPWgLpStEYrwLbn33MZnjm9p6r5hLakmFPHqvfW2u",
  "key37": "5tB9CF6x2E171iRUjQccTc9EiKJ5Lg4VrFwzQTaby4ikARWSB4EGtPTzy8bfYMpUpNBV7zcVbNXw94Hns855fZZb",
  "key38": "4KcmkboxnTwAEo3sD7duHcshvEDT92dYzpnJVHjM5HG7BVs1TbEBVXQi4BejXgqPpdi5mJpCNUa3c34dB2nhTt6r",
  "key39": "5tYawtyMRN1iNCoVabcgPLf3Etu8Qa3My3V9VzYHxQuk2xDJU7hTeNzd9cA66WER3eC47DhU27U4RQFp8L3fbSQQ",
  "key40": "5DoyzyRzZ1vXMQoasnPL3impMEC9y9fPspEvcqD5eHTTn9JUVcyRwgXjFuuqDoGPsiEk4dTsCSmAr6RoE7fVmVNe",
  "key41": "2YQKw3DMZm1d6ctHyGXURPwa4HZGycY22HCZ7y4rDXpEL9Sp5Bstmz71gxckShHcc2x8n7DUEvkKwSBBNxrVds3H",
  "key42": "66NRcKwZWk1jm4orvtz2rmYcBzqrnenA29p36fXLjP2cwLNsWYtSMFisGsGo8i5VrU4zASXXkXLMBFJ9yQ62SPzm",
  "key43": "3KEef63nQovthPjVBSSLHJ63yK9gWQ6G6vfkYjAuKhkEQ9trEGanX55ndiDQDBZotcLJj7fPVksiazCvfbZhk4V4",
  "key44": "4uNeQPYxXUuJFvUJ3A7Wb852ueTobNvKPqYnpDqNe4pefRUPRVutgE23gNy9sshputya1r7o7UKc7fdv1FNEdSEd",
  "key45": "2mZ6P2nn2ot6xoQBW1zAcuCZcUhcXBBfECqzeMG28c5Q7iNVraUZjL5LJhyBD91mkBBFPDF5kPCYhhTrZ6234KvT",
  "key46": "4Sf3dMveoLMdwmDaWAgTo5ojqUhNfEvwu3ogLt46XMyumGbfmHCBB9pHujATZYQNoEVvjif1FZezSGX1JqeHBtGy",
  "key47": "2JhonZvMJGqsABeAQzb9T7TCzBnDYADRZoBGdCVwYuSE4QYMTnchBwPUmGS8YvGRDiFKW8YrLAhzc1hUwaLzW6Qz",
  "key48": "is8CkDHWCaiziArbibRQ7j9he5e16rxNnSunvJPHZdbxTtAzmKZkyx68HUpGoY9xGM5B9FmWBuU2RtZHoya1Tqt",
  "key49": "4dF6RxoetWYreNrDkVbBmPJTrdor3jSYqgGgm6Y63hjQvDaP4FQu2sCUs8TQCQnpufDCeJgU5nuvtxuB1KHXo1h6"
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
