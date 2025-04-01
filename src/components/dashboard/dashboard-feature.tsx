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
    "41UpGVbhZskMawRoHBvhp2QR4JDZ4RKHFHMGKZ3zZC9DvbTTcFEfsm65JamRPZ6P3cZJM9oTSCh9y1cjfwncunHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1Yh1ReVfy15WWvjQ5y3RqArg3B3gcScqAW2ZQRT6TNEWC41ebYqn6BpVtPQtSSt7hoyL3ZAHUGq6UcGrgvcdEG",
  "key1": "xVaX86xNVnwKYUENrjHac5pQ9DnjTZyzGbcyBVTLPEcf45ukFjy4R9aGAKnHSzNfibct6a7Gp4pKoz9EJQuGaWg",
  "key2": "4vRfwxVkKjhQVsU9BtKJ68ghuY9nm8B9HHqA1jewz6WkQy6wz29obdJYZHVC9J8c93i8fLdH7ixG8MZwNqNBtwC6",
  "key3": "4v6bYstTheGFMUqVjtbszsGiDW6M5ZP26UcakMoEyouP5f74WSxZFbz8R7KCkvDdLfEmrByWaA72P3Jw2beoxUKN",
  "key4": "8peHhpGYsKJ54234S1ZhFfx5bTJzmQk2AoGb22hvaddMNcKog8ih1dpXogZb2SthCE4THxU8VYcVKZZaDgj9mKn",
  "key5": "T5JW7A855LcpGLtdJk9p8ESHZi16JvE2CVHSCvporhMgk8zPhSBBDn8rf8FHXtLkh2R83voEJURmDDAADSV16o2",
  "key6": "ifuPLcm79zkF5mwQ2Zo8S6cqeT57CkZTrKA9s44HfoffVAgkhPqWLh7hfN2Qggb3sSgbJrpCJm7XVgLgKmDFwfJ",
  "key7": "Bga3oRc6V6N27jXAAdirTHCJx8pNaa3grcrQXuQrD3nE7dFbf9Gga7Ch2XLUBtDBiANMNHvJwZZat3RdMvrYvNs",
  "key8": "31JbXbBSbEEusqzshMU5rJtpiTXZkVaib4ccsqmeZKBeVJVLtAR9kPXNPQ5Xy6TbxBE13MaA9x1wmr9PXMhCbhgM",
  "key9": "LMgA2b5mPHEGJzuaHbDju5zPKnmx8p9BR1N6YXKL1oD87RyCXyhCugcU45HVKCAwqJgt2VUo2uVPH9YYyHKjYMN",
  "key10": "9QbWUogL8tsL3Yt4YqngfomKyaxf6M4QFRjgqoQJokaLfwKqSxUhU3ogy3NafjqZ4yvE529WUZUSNKac5SAjr6U",
  "key11": "4iZsFBd1tpudARA5hRwSBd6cysq81P2Df5RjWLEDw5paki8YJsy6DkQULXsHKNmjvUYBsNye3QsYkjsws92VtywV",
  "key12": "4BQBZcEBJBuPYnJQReEd8ouM6r1faYoi4WpZBfEEcWNcsd5Kt98oTwa2MXah4f2tH6J7Jetos3FZjFVxvZ3LzBng",
  "key13": "2g1YQz88NnnM4gjasBrmywkyafr2ADSiWtPmp3ZTsDDHUbLfzYhaHyGav3F6sVoVKurwZkfe6PFSDZCdR7FfcUav",
  "key14": "55t1GCrLRSW1Y61DkGDqXCv957xZtSRYw2WxyccQa9YpFLGpn8pHBrQs5EJ7a5EP8GJpw9j1wM4kXWUuDUSsNLJL",
  "key15": "61CMa555RaE6PY31izdhdDUY9QaUnPDXJaWzKXbsVdREDUHGKrU1kznwY4hyrm19N97pQTMHV3kWJG5j7SNBgAqx",
  "key16": "2WAMNCEzH9rL4SrYhxQyrxij9TAahJZQ2esYoQBLVXcSNb6cKGzuWqCvYij8PZNRgpXYc1xHgoPJjMhqecdvWYN9",
  "key17": "4BbCb7wUu9Met3CLdryJdkcTdotm5zRHtqsyBUUyWt6un7i9r8AqxsWB1Tuwv7zXK6ZcMyY6MPk7CdE7ELzg7f6b",
  "key18": "5LU473xSVruFafbz7v8wds9ybfhF6VRShiePGNzfdjdetba95UkiQDCj4iZL3rJqGsVLgGt79zUQuGJ9Di6doMK9",
  "key19": "2jvfA51kQpbK6yPxoFnivsZXjTK3dBT6kAKWokMp72BzbHDTmG1BFXLue2Y7bCv9Fz2X8jAgFjtqonFT2mXwAGuP",
  "key20": "h4UVREJ7gth6fY6PVgWPgYRXNUrQP7jYQTEgq4XaQvXrPAhFMeEqBny62wm1osoMxzFcqR9QkC65C2Jjh28MtcC",
  "key21": "N4cNTNxa3g9GiCYJGtaHwYnLRyB8Zic5ZFfE7tN1RfWNYBB557TqtThEK1cjexis8ZC5oeu42Kfi14v8i4uTURd",
  "key22": "4JPzxzkojFpjMvT4LEQQpuggsMgPYQPagZziY6zeco2bbvTJxCKQsm5b7eyv31EYA9a5E38dZZu4xJrquJDTKdTt",
  "key23": "4QAHUEhXzcUaNvdHvQ1XVd5i8nNdpn5GRj72L2idVrjFhZDFwAJUZJzREudwBmADDFPbBKSnq2EnvwVtTVkrwaa1",
  "key24": "m6kkFS5REVQsAsab69Vrn5NBPMv8oKEz9cJWCMsz6gvmXPibJxXek4JY1DW9Q4Uxj4jfwMrUeebgkaTDiMuG83D",
  "key25": "48WU6BzNYEUxCUtGmfpGHUNpzsJW2yDRQpU2Dis9oAKq5s7z4n6SPbSSS3uNzqWLQbUr7qdRDzNw93Dsym3VFhxM",
  "key26": "3V1rFCqq6kx8EYm1GL35hgVhwrvLPRTXRfWHTP5UaENhfY2ZTHNJvjPCj8ECKRAL49GsB29ymsHgmFsfkfUS2aXD",
  "key27": "NFDLdGFEUTBPEjce4Vy9aSKUuDa1L9Ji7jH3wyYbevDSUhgS7utsRdYd2fUCF55DbcZk2Tqi4b8ZCpUFuJtjAjX",
  "key28": "51SU42k9z4JWkAfYzWqVU3tZUsf37XQ7M5SR6Rm7UxkvVshCkrKyrthNqi6AXvCLEUCtxssWMsgPnixy4hroj83W",
  "key29": "CkP8PoXPisFDQYWcoCoQ4QYYBYJ69UXiAMdDHW1s4Ea7cKhRxmL5H9xEukCttu9RcRFjJDwtwMx91VcDoPC6BYm",
  "key30": "2fmvkWnrJ7zgNGB4cyMSs7PsAodo1ikfVCuLvJdQmGu18vSnNwbE7bDkuw8cxKS6t9U5F1AQzzEMpcu4fFnBTLoY",
  "key31": "2xjxS8xuksFw14amhtAAxeEeqH8mzrpusmnd1Cuf693bEBKvTBJ8ZysP1ALSw8KqsACbZgPydfqwNaLFFaxtzjax",
  "key32": "45aEEpPzxHzpnDMx1f3sZtLHo83Mh66HpPF5d8ae6zPnkMpGjfab7Gn4hwp2Xa5jMvfbZ3qbS3ZVvEzH7YMrcv1U",
  "key33": "3uAVAPKBkvQwWq1MugnUCSqhsZBsQut3czwhdMVk4DQw6AoGJpM5H1dsBEJRg1USBqxgYZBMgQPFzJ4YzqzRCepz",
  "key34": "4DSYPrLhuPBv675bf79fN8RYP8w9dQWr56C4Sviu2GnP7xn5W93og5Uye7HBcrMvWXrvEw7e9XeZJxLDKqSbDpP6",
  "key35": "3BK9wsnG1nBDTW4bRtL1Kyhft3AYDH49Xqpj5QxsgM9V5LuCXBiohUiQEkn6FYcaAKozcVuFVHFbr2i2ZVoMAqfi",
  "key36": "3T9qn5MvwavUPUkFp3EtcAonQ8GyrJ2UMq7AP3B8wNbWb5NdbHhLps6KKkBSb6XHm98eRjhfutGh3mc6LKtfwuWd",
  "key37": "Fh56AiEnvEeTkKscacyfXWpeLVvEpfGX9MGoECeXtReRCLdkVBg4zLw7gzDiW2wVsYvTH9gQeAJJ9stdDyh7HPC",
  "key38": "3PitumEe4hSFYxQ7Hmew1NXBJJeoYLHPasUKCJecnA43WRF8v3eG86nCP3gvCcF7RHUNFxsfLw9ifjSUHUtKqGfs"
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
