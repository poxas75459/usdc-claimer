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
    "3asRoJ38Xi6ybmWMZCXtZGtGLrbvCsFyDyYabzTUdoMgy3B1jUPF2wSkhE7QkXKAsaCowPhVicsuqKJ6i4sLAPCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFM3WWeBWn8cBeBNRUaB79pZBzbio2ifDt3AavMusrCDKPpWQJxcJid9R3ojiqyWD4VVuBbmuSFLPghpCFFwpPP",
  "key1": "44stQfaSkfizqy2nGeN3y8FKELwKtJcRL4vQJ54cLFBJ1JwqvXGcFambANyy4uVCookTbRuwM1H69Ckv5Esg1MFb",
  "key2": "3ULJ85w7FGoHEvougyWcHWUuEWraLgvN32pz1D8Thyq4wRfLrBPYPkgsfkAoA4MwjzPrVgKfxF8PiKNGpwquuziF",
  "key3": "3aUrVAUvjCpn5EDiPkKHMKZF6TAQfnbqeH2kZd7Rnn4tGpPMVzhh4NtEq5ApQHnsMN4NRFMZok6qYzttwJZ2Ak7d",
  "key4": "2FPsxvt5aGTeGPtpybbuSyuudTRnMHm19k9XHE3TSwSmampYffNXXjSD2Pgcsay2Tv4QLiGysELN7wGQraXC32Hg",
  "key5": "4A5CP9cYt7WBiFcCLcQ65gz59AyfGQHKXDWWr13YgjuGFZosaKtfYkZnzrQwq2o3DYCK7ckYFeFmoQ896ENCuVUz",
  "key6": "37RiWtCRmDQaLHsZCfhWkTzXzCTL4Pd4JDLK5qqhxw78CRa24zDmG74FTLFbUfhrabUtd83FwYMckEH67aXcND3o",
  "key7": "ZDTk36YjKuiuZx4dXWzuqzRGYKgBgsR49Xa9vmoGgR12FuorUoFkSu46SEXM1fJJPjYTwXoCKA4K1whC2mEZJMp",
  "key8": "4j2hUraHtq3hwTYHNBJAoR9xiq9FQ7ZzBLEXJuwDFbpEAAA9K5XDAnwGr6PuNJeqvdd7dmqRHKdgkMG33pjmVwiB",
  "key9": "2vCPBSY65pTbsZSR6fCBqgGeDURzkgcpCbcBzrYfaw2zwuPHbQcSeUgv8TQodDfSaENTKNAGTdWz185WcJFxSBjm",
  "key10": "365kV1RM78G7gYSqmdfEYai8HecvukC7nFHKDb33PMsTJJhtMjq2vHsNygJsRjLwhMzAW4FvYV9nkrY4mj9xz6NE",
  "key11": "5LjZgyY76cCyk9LvMJqY3UhWFPoXGt2P7BDHa6NYab6uEoMNwDSsHEK9WXbvuB3w4rTMXtUpwJoscFvjfp2vPhh5",
  "key12": "522ABtBaZAL92JC4xaPL5NgBrzArKArcRB3f8HTYD2GmwQdJbf5Y2dzuArku6Aeud29u9tvX1Lnq4FyMspyzCMRS",
  "key13": "5FSyEXNtSuNaans2ui1QjAed8LuHA6BnAZReTb7Y8oaJEnfkqgPxM12d9pf4fbos8s4qkz2FTbxtGq4uYuMwExrX",
  "key14": "5B435FvXa8zA9916FAkVKeqtw9rU25mzKLPXT4Fs9He7Tb4D49bw21aT32vzP55tJn1YDTpHSJnPn5mWK1bGue1q",
  "key15": "7xaNzo9ehhXNsgJQcnvuGee9F87z8Zdgp3FcVAUwrN6ZirWmwLcFEDqWMtiUwgtFRnKbsjDsBUJRFF9d2zVzShJ",
  "key16": "3XvJV7wD4Ao1nSij6UrHAxCDe1p2JG3gLW4A1iziMiRhF6zqzqZUnEvAoDTsjUFacW2ZTtoUUkBFUDcuKi3oHGtQ",
  "key17": "59v7jQ2S5ztY4gzQAwqNz1vwvmcASA2XD4sCnmAbERnoDdEiV6GovLsNi3qUvd8CZ3cS8gQRVJ3KRvY1kmxauweN",
  "key18": "48hVLcJt6C3AH3iFKuqTV6sZ1hcrehxg6Vd25qK9uhubiiKDN2siPWbtcDSLvssC43kZCnZGJHAqgRfEgtDs54an",
  "key19": "44z7wuo6F8LMd8X8ofKcEg56paWY3KkMSXSKxm1rvGdmg6sW8MY2XUzaJsvaYH9iKjdTakdaNoGbj4YimachS3gP",
  "key20": "83LuA8aeNPTQaeHL8pRpbnYaatx93DdYSVb5Jz9tcdq8BXEjYG3cM1zPCzf9xM572yfUFProws6rx61vGdGt1h4",
  "key21": "Mv2egpMaH76VtSs2GTjqAGfn2bAdAG4yAMAwm8F8PrvnVfVdfLvkXuk33QnQKGfBrDLWpGYjg8KdF9hUVAWWvLF",
  "key22": "3ueNcyx4MpwRQkGRA2XcCTwjWQHRcC6b65t4mZ6UQpg3b6pSWr1t9F7BQfYshrTD5knzezDdpYohGtMqP3b9TVHa",
  "key23": "54YeEGn6u9vbEfjTmnbFLojQDSkc1wfxaAw2LxjTHxykcFR2v7tYDg1HiEM5xKRYhu11v1Ggb3YQgui54AsTwCvb",
  "key24": "ipS7aUXcWjYdqXuRK2ePRtyJxC7jSLTqHfxTXfDbNbJnzbnqSbiDRUVyZvRSdBsCGJ7mL8JNdBxJW2RCEoipP76",
  "key25": "5dEbqHM4N2XNcYBWg7YaTPsvTWUwKJcZnwm5y4zY1WVJ6KDxiMe9fb8GMnzLodYcqSF3HtUrp6NfemubTRXFbJCB",
  "key26": "FQCm2JttBCYfLceMhyomCXyH29d6CBWy748kA88QP6Ewr5p1XYLWqrYtuGDcxqKAadyksdSbM6VpJPcWZcNZDNX",
  "key27": "3ZVn2Pn75d1paEQgr1m3ehFovG8ezKPsxsQ9SJQa71sXriNmUsXg5FF4iqBisXSQUcWjg1q8muwH2nHnLQKyyjDu",
  "key28": "5CQUdRrFW8cYJdgMZcG5c5uwrAbzqGYaZ8QHWNG3QhGXAYSDDqLjRAa5nMD1TF9bhKcbYcTrtA2hZ4rtSnw8QiKj",
  "key29": "42Vu926QirJu46TxdUDMG2DiKshJzFVPKahJhp2wu1bzPNihDX9tCEepT6cuGtX87HYFTw5fpsrknF2uwhwfCuu5",
  "key30": "2XdgpPV6HaLtZvh6JaeLXYy6fjL4x6anchQJ2KgQwS9a7r4zowzW2DsQiTpc9ukC8qrUGWSCKP2bQDW6DtxDSUU8",
  "key31": "7DafnkY5jiVqdfVscYSySsh7AErDcALqA3tvsy2rWrDVQNhk4cVdacx2oEuS6QgfZJkxvnufSfMLyTbxGekAN1i",
  "key32": "32dZsDGKFvRKbjoHxr5KtnjCWpCnFZLPFSQu7NXm2UP9z2vVp8F4XsGYssWbh3bTM7Adgz8osrJcVFHTgKbvoHuK",
  "key33": "wnScvLScUWbs6Fi4n2ewfMrDK5YzenN14CrmtWpdmzgG92oxo9azGzP2u9nM3wkq3ks7nd6wjaRnVfLK3yCQXv7",
  "key34": "5YtSEdgmcpzXozC3MaY4FYTSZqUgwH62hHu1F8baEUTZbLqhwC8Lp2TKCStHZGk56L55fy8BaaJdkHzNDNpbF2M3",
  "key35": "5HkUgHXoBqvSGJjbHCBhWUK5jNvEBnjSkrWrQGMZcQ8cN8ai78W8wkWv9ay9WaPJZAWEc9P97fSetqxwGNmSb2WJ",
  "key36": "Qhd44XZchC3z3B2mUJ44fS1bSv3HFYowziZTEVaaxZr1BCxh3YrfxttmiZrZ7hkvUMdBMzy6V2eGSxDhyDaLLc1",
  "key37": "4HHUXK3dLhvXLNS7jqKqXUjGmbab1Kz57GjB5umxUkxtQvJmL373eYTSKzMKoLj3NU1KEUmNt8aSx6bXuSvtfrXF",
  "key38": "AXmudvTcvzYBugBgpGU2PC1RvyxgUZUDneWPjt9Vw6HQ5NJQkvp5i7R1BoJ5ggi1VRhRWBfB4qhbL4yRbWJkemE",
  "key39": "4BucZywApqQEUwU1b8VKUdGA8YBBsX4RSFMc8iNxDHM9mxYBV1itF6PjcVUPdcVQHQUStbvvhSuPYEzNYyoFGoq4",
  "key40": "4wvxu1At1h4GS1vmrsUoe8qaHEGsBiDd2TyXzWDG8LUnht2EMUivDZLdUHzfJcxKjGHnqhnLPRUqAQWjxWpXxSjV",
  "key41": "2824vR3F1iaefvKrLYfH9kFN3JRm91eZWr9MCymVrKSVb1k4FPmFxJqwBaz3b83RB7FNANHqgCEdUfrJpRED2KbL",
  "key42": "5GrjcgdypYCr6m62AefQKaVfEcVR2HuL4XMeQ6epf7HECRRwYXLBFpdx4tSB9e5cLok6WEN8XSsvMCgiQ6moxYZE",
  "key43": "5ZJ9EZdF1mtKZN95qDBuRAHb493kRZYCTPQSxYumQJxdRJmrRyVgMWt1UcVD3R6ifzU8AwaG3LfvuJz4gPi3daTC",
  "key44": "4XvK5TVZSpSmR3czcPwXx2C5gmXhcdo7mVFe1LobLyHt1GYyThpJB5w7Le6mzFemLyDgMX3RCVPgjc9smxf8pYr4"
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
