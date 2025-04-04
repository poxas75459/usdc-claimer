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
    "5ieY3C2c2xTcfJ563sD5JdRftac2dTiCBJcbevgfA2WawQuZbi56KK1x1Cz9y9sx7ZTxh5VznBnsdNXnUAmVEbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkXqUyrLj18pr2BW6uDNgAwQXj38uARPehmGNLkSGexgaWezacF5xkDkcuy8U7hq86UN33jrThAyfaAe1DKoqY1",
  "key1": "3eAsvLE9MMkmQgNTQY8WCNco9CTV7asGa8aGEA2FBDnVXkFFWWtzU1HKJA3pjTUCh7PaCK2fdmSyZz9jngCScHaF",
  "key2": "4QVhpqVExzRrtqkDRTeG5x795ir97coKYqe89hKBBfQiaUqHqbSVsMWwvcxPAx8uYHMpbFEGCUTAL5ALwWGkssMc",
  "key3": "4UHed8WKFWDSiNzbBUhNpLhrt1woh7ZZqDefACCC7CLtVV6kAV9uwRtNnbMi4PjxPAYyAj2QgwY9iSmfHyjy9Xky",
  "key4": "4z891hrnw9PgNnsoihpq6g1PDoDP6Kg6WbkbTbkPxQEk8rN1JVWHWyeHi54ugr1bAyLiYoEB3pvHaKwNLCyLeVPF",
  "key5": "4p7uBJna75zeasKTVe6LqhNeNeBDTeHtWqc2No7AnLt7qnrGVAqeP52CKbYEd6PFQTkeZtwH6SjCs32j6cHYw6br",
  "key6": "3pV7izkZ9bKpXVrVwZBYLMPPSNnoN2gGZD1fvNkUySNRgaNLRvDRWFe8QVRWA62UH2HZ4oSfdSWMgvA3M15iPMth",
  "key7": "2ZYicUj77Rsg43pzhuPu8sH1y4QWMhvGTr1QvmHDJuaYSSKs2uMAnUGgH8BVdpaL7VZS5fc8M7eWq1fNnSoWKm4C",
  "key8": "5kbdTS3G4roxyeFeAi3k7xymPgjsm4bBZbYiBrSgoh8vi45ojbHC9mWuFSXe5wUxGd8APPyJQXMhw6KroV9q8ef3",
  "key9": "2cPURtA23YkSyvbud6gNWdQ1suAF9ZjhbySzcj9uxdiSCFHhzapbrTJmGnLvyjQvYWxwTyRv7SUuTvPLXgmgo9tH",
  "key10": "3MPfmxpiMwupBqx2Gjvca6iDWY1Prc9B2DxCZtHp7WacjPfcWe23jLDstNah4kfFRvweB8fKcZbHkjAsvjBtmcxA",
  "key11": "5UbhYBVkYVcCi2wdGHmL59eLzKfoRSyVB1NAU72a8jBeJWuACkzSiXe1UPG7e2mpR7dj5HGsn1JrUkV7bRci4m1X",
  "key12": "5CRNNLbkib3w8ih9vsT65UKTjPNw8XsXV3UVWqQBuCU9CBysnzAHFC8Fs8yK3Ws2PEWChkAf8enndxqWzZwNc5js",
  "key13": "49Qn4yZTryZGwchptq47mcFBvEqu61Tpsg4Ki5w7Kjbtabc2oBpNQGf2e7kDG1HpTnKv6L7HPfcVxiotejR7TrXx",
  "key14": "2VPCGzF3TAZi296KdBY5gsd2HU8qXxaJDmh8hnNqmgsj8io4rnjmwXjZsqDhMPhXb1ahFMDyTrxBEt2RS1Ca18tR",
  "key15": "WbW9rYvKtMvsUF1UwZgTcXiGoK3KuqP65VqYkt367KGyWpbXMpUL8DohphUW5C8m1hkBxCjNuqbEQhQbJ572epT",
  "key16": "3RvGuhSohZyB6QG2ocxpTueXUc3XnQzaokQSugs5kQXBYaBJ6Lp1NLEetugs5Xoi95oM39Kuxkgrh19hqdZVe9oM",
  "key17": "3mu2yvsVf8gGaxWPNkxviQw4tNNyXtMNbfhMCUoi8zCz5zbJp5AWzL6LKJ1dRKnZx5yXJ2FbFGtigUbLTqXLyinr",
  "key18": "49GRmN1cmKyVQNryZXY8HdGNPXhm52M4ccr35UipE9kY9QKKwFU4opzhpfvftCTk82wViNUNu6eRJ8GLFTDVELLY",
  "key19": "i3vUy849mxcRrfz3fVDSXZrihbGgqAj7rv6DbXvMMcPf9p56mYFjGC55uwxM5EascvevCTg38fqU3sY45FBzfH1",
  "key20": "3NaULEz1tW3eYGQeVYzvc8RTCfhFwQzdPMYwU3YWNtWVCKnaSrk5CGwrUU4AKx1NRcreYZi6CUmEC1XcE8yAxtMr",
  "key21": "4TBoiue4BSzd1Am43ZHgAf1QePQe1pWfcB9MTqcergn2svPkge3oMzhGbUCtf1sXaRT7dqKM2yNgGD4Nr1ua4zys",
  "key22": "2XjFXkvEeqXSSWYxPrKvV9WvUvUtLZ98rx3yiuhCiRVSrCLq9Vg28di99jsuX6PL4gS3AtMbWUNMBGij1LBPLnd1",
  "key23": "2TaLNB6vMZhJwaiJVZHfzWfZ9tYTLgNsLqebGFnHYSyKHL7f74R838jvuR9dx5ihLikPcSuYCdfPwC36TVWiecxU",
  "key24": "3b18AHBNezURcb7PvguAGoNt4sibXGXTUVLowZxrMgDbgdDiNSB3KrDRPWP5NR2jUJ2SUrzFrdfnPvTwqQ8gCzeL",
  "key25": "2agcztRUgW3gNfDTD7mB99LyKfJGGuy3Pm1fwhXfnvbodKoeD1j1j4Hjhdss4hWX1hJ7TMqvZJoz3i7guCYrkPPn",
  "key26": "4bQfhAD232SGw89VL8u1vkfRdPaKKrHWQbTvmTW2SqjNQzZB44RsaBV5NJCyFBEmRt2U2JBmVrfdqeEyVfVxMthk",
  "key27": "2PLaD9XYaaxNsW6GAeR58kfS4QMQkmPVHPwSAqShMNz5d6Mta5ALN5r5EN67fuckVxsfgBSQytiuPZhXM4r9bX2z",
  "key28": "4TwF4wUzdgxthGpq5X47emnCoAtYRTJ8TpsMDbT1y5he9NfwswJ3kv9ovGRKHvB7KjF8KtrkAHxgZm6eY4WBWU3c",
  "key29": "3znQZN3NQs5Cx4BksdUXoUu2YSvPLXo9miyM4KoFYpYmjSbv5bQvBuH8ho4WJYqzQ72jgUdN6GczUEwYwUXEoqMq",
  "key30": "4UpgffSVSvg1sZhaLwKkLzR23yEsf4oWH5gcwAyJVWRoRSa1bkdiKdCYCP3265CymmhKwMKXaMSfrUST2XsPxvSJ",
  "key31": "5dmcmfPNbdCsTdTcCWN4VfJQRwkHanhzANq62DYbnK1PYz3aKTirXsWSSYVoUYmLLohsXRv6vvGY2wMG32q5yhTv",
  "key32": "mCUKYrJismFbdvhauFisYvT3bzmJjpqeYtA1Hbio1acEQTQm3J5Wyh7yyqHSAv2AxUaGWW9Yse6WMXxbqchR89H",
  "key33": "4nFHXVuxuKfYayHD1qbXe3MRCJRfZWQSSiCqPCzfWaaMLKhHLjshuxHCXoGZY5MnUVFV4uwMLDySDYRjuqytLRFR",
  "key34": "47xW8SMHWfXv7SpvNcmkr8oTTudXQt3ffGc7aagX4cBBjtJxGqe4PzPRy6zq3Gkg6W3v8uVGoM4awNW5c1KUxCve",
  "key35": "4qEgifeg73idFtxEo54uYajzvUWnhuaWeYq797SpD9rap27juK5uRERX9p6T1MGyVa2xaFEZJduTf7iyZWDSrZL1",
  "key36": "5XMth8oGKP18pSLfQQftzMpstGEkw2tzRjmnGtpBkzdqTMFVN4gKNNiC9dNtvAiVpnAoy3j7zodEbs9DJqYPyy7T",
  "key37": "3gN5ybG17LbAaYfjMc2an8yxroxiUZpSfKjEGdGLkAepSfxjLd6kuvxKb5a4d3uQwQjUqsefUDafFbQhQoMuur8L",
  "key38": "5hHPrpoEewLytt6JA4fJ8yn3T2bpEkjkTRTqRjaCLmvQaxYKa8Eo8WD3wWQp8ZGX19RswZYTRz7tbZNhLbMyZiKm",
  "key39": "2cnHpUwkasF4nCzqKyXcj61ev7RKSJ7w74xqQuLKHRcbWRnaSDhBUmjns8iod7d5i7MWEShRjiMFL8NjNMiZzTeQ",
  "key40": "3dxhmdYjYY7Rx9fQLJ6Xzqdx4Y6bFAzCwvCUpk799iBTHaVTyVJFwUihrnuou9uSsZeXzz5UNuY4oiGqT1DtCTsg",
  "key41": "2hjZ6FpM1dfFgospFvqTH9iGmqWEyXAbq8cpBcZ2n4WCcWgxBxXGpepMgFkMrnuPLkYxn5AZqSwNTzVWhRsT1YDX",
  "key42": "4SKNy5a4XuuNJ2ZC9KrxqzweFiJwenTtqgDxjptDjqHehqUwdEuwB8yc1qTMkMtYX7fC8B8e6PnYmhwJjkRThGg1",
  "key43": "2wDLjxpgk7bpaKB5jW3NpLFgYTGdqPU4mT46X7jB7nVvFYdmKcsw13zeHfe5hzDTMSFSNGLBVDSi2EqCoK3D7Uc5",
  "key44": "5iBULdWsmpxHGaiRgXGA5GN5y6VoeV7pxfxeQZBCU2GHgb3KJ8VRjAcudMo2E1zQMTakjEygBQDUpTzAfBgzGQq1"
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
