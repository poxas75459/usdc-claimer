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
    "5jLDnBuadJuULQz3LQPu9mPteq18KszbZBiWDzAHk3xsNKfuCJACy3ZMN5gw1Bv3YA5yWVfoZ75qjBNmzpHYcET7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PR5j7uyz5i2xKRRaP45jtuvetv9c6pDmDRXpt62QsDLJfmFkixNCdhMrZZsmD2u43TT74qYdRyWDAXoDWHYJdgB",
  "key1": "3JtcX2LVu5KniEPAA2BPFrtA7iyUcdfyGhCsrdqtt1aX2gNEVAi9B9EhR7zBZaAAdtwLEZrQUvYofmq5429Si39E",
  "key2": "nXXhGhPv2NyvtsVSQHzq3vrcrWpGSDW58FhEjxSrs3jsoiR2dc7NzkrwV4TWCmVDzJPupMugsz4f9MtqZBcZY4v",
  "key3": "3mENjeP4xveZiNnBt2RBctjux5Eeuag2Wua8AYEmE7QkurRDs8rzCKKJ8sztcoSfzaCueUnGp9cxGVE3ohX4jvM1",
  "key4": "pCR3TqSWPG75Fhw59SjnPSP7BNR16B7NwMh1wRDLTBnXr379qBZJZEAKWpzYCtHz7tErX4QUjXkKrdoL7Nyp4RP",
  "key5": "388xPZkTi2993LgJvm4rK7KFahwGwZUvp4DxWHiQzbavx7scfuWSGeu5gqDXV4vom9CxJDqABorTjW9tbqjm9VGn",
  "key6": "4oaPAacdLCMeQmkaSPs44czoXjVqqGp3r8Biq7QH1mAmZnsRegeKGMk838rTSN9v7rRdKi1wsbYmAqGpPNR9Wt5m",
  "key7": "24rfy9psK5U1tcuppo6zL1vxbgtXyFLDJmhJuafnmah62DV3gAA6e3B3bkbV49aRC59KkvejJPWhTmwAdvm1yWRm",
  "key8": "4DLKKHvTX9kBbfrG1xu96iHG6C8KCfmyYf5Y87rrvWnZho8w4hc6mSdUpYgNhRp1jeCpvPvP1Kuu9zvjS3qqPX2m",
  "key9": "5FLz8cZsyFvmivGWevqMgfuJq5k8Q9xBdmq9C9arKCoiysxgZCvjN6mbtPEwz7f36nFBv1bKyu6EpFf24eytjgaQ",
  "key10": "2H4284HWDFk9Dc9hftEq4W5F1E5o2aD5GkkGXByxsN3XjgiAHcBGCySYxXLJd2RhQuJtW7AWb6CdrU6crXKD5hQc",
  "key11": "39W7E4guCozo6CFi6rCrV8esNB8mGw3BBReWHUPZT8xgxdhzroXRju6nBbHEDHrMSG2GS3W4Ka2LWyC4t3YWXp1V",
  "key12": "5fgZabsXQMSnknXgKBT3Giy7Rm9FBXpoHbuzixrEtXd1jCGwWaNtUc3iJBjoanqXmxadzLdmm2tRb2oJoVDaMJW5",
  "key13": "4w1Y91QgicnZFgEz74Ur4Lx3sD82gK5iXAAUiNtzros4EjqdSd6Y15xhnZm54321BvPorAySPTwwEwpwtZ4MBpAd",
  "key14": "jyuZS65UnzbgtfW47Mk6Soyp9cHtjPS78ZUXZxVPW2MX3Nw1J5LUpviQTMRpxscRvJxyAx96APUFv9PwXSXSj86",
  "key15": "318WJ1D53WbajF2StWBh2aFFxdUFtJCyGMDc3Tc41dByARtXcsaP2AE21SkrihNvXgASEmiNhycGu1LPNR9Xf33C",
  "key16": "2QQL2GTS7DyrfMsaF3pCvwqZFC1K96FPeo8cRFgnF4oeneXVFbREcgMjxEisrR9zDPdB8iKgcjz8vgTmUejjrqnX",
  "key17": "59PfxV8coqd4kVfiW8d3osjJHTh5jh2w1T7yNokEEuj53jCkQYzRWGyYtAcmULL3X2adS8Zuc5y1HZhw31xZvvqV",
  "key18": "161RGotNwZ2nq7BMJ5R4NorywwztftNgq7mGae53oZZeCFFZMBwaxryhTPkQR3VbDpaart1VaL1oG8FZeHquUUv",
  "key19": "4G26QNEzjHkjABkdMLXpmjipyVcEc4kWXzx41h3srVYXtiGmF8C8yFY8SvZorcgAppvGDWYgycV9JxKKAJfmpTCM",
  "key20": "5RS3VJRfpTwt2yBFGnZyZhU5Y5MLKrWpKs4x1X6SyrxHBSrm22d2zE9KjzP6h15rUqCSRbRA2tT3uJ8Mc6gEZzPN",
  "key21": "4LJB3WGrg8218669iGuoJiGqy5mJ3SMDFAMMHmcT9eq2nVQzbE5RjK8vUQbaj1JKuAPEQuz6DZk1GnPyWYb4nRVZ",
  "key22": "3f5vPfCN38zr9NWiwG8e4eTBmX8KpwgomiQt16Azx9Cy5nwyHbAYrbibgt5kxxaKRMEo7DkQAAQSR6yfos8h6hgA",
  "key23": "5tsHFVwjFgo5oaZkocg4zsn3cfzk4ioXBS69CaJQHcgbmav1XVCvEMcQvSsGSu5wWFaDcF8kX62sbd88Ts8ismX1",
  "key24": "5wvR8f4nVMwAutvX8wdLjzxUAVdwozasTdAbXmZUgd7CSDns3pT41T4mfjKU3hhMapXGJjdsPhTWut6pJr6tmHs9",
  "key25": "3QY6twCDJn9gTcPaE54CiPfaVB5i7Zggss6Ajd2BqNPBfv2GPyeLfv8Eh1iwke3muP5YTm75Eh4UdaYPPizd5827",
  "key26": "3SMBVv7nLTxbJy1Zwz6kPdtqwFEbTr5yinnybfpcGzaR1GvYWpNf9du4JWLrx9f7Yzi6kjEGDXc5t9dF5XZRz2ai",
  "key27": "W9ZRgwAAcum1HsesfAgSXkGWN1oRByHsCwtsCdQLVug937RA5LXLnZEYdrdJwXBgxgsfYMd22H52WZpTSe8yRsk",
  "key28": "2raTzsZUuTsqJBjTxYsLwFuMESpr4bNPhSLiBU9b4SaeMoK7VBBkP3J9uEMY3EdGwUL75BKhZ5ZejH9tyVnmKDen",
  "key29": "5uBT6u8rjPa87ZugvQiZ4xHq8czKk7YpdPjPEScw3YqainczEaHcQEHEBURQxBuNdiW4XEvrQdmrkZ5GpSRAYuAe",
  "key30": "4Jc4Uz5n11PqqaEEzaoFjRt1rxMtL82tzkW2YvWgm3W9aaUTLf5W2oVazD1vf1PZCnPsj53Q7pJyLAaGXmHvU9Zb",
  "key31": "4VMJnFDsaFdV1TE78gwSqkLDiPvgjkV7HqnbGfKJAKDZqnqUd5WS5NXDjVowtEVKDqsvpQnDobSdnqvCwhB2F6m6",
  "key32": "pPvX9CYBGJMNvDP4ZE3o9bbB6tY662ifhMQQzTeRiKomYzb7gCvM4jYD8zxDqoVKYpqudG5VnA32vLhwKaZbYWS",
  "key33": "5mLV8ViYT7setc3f1fD4S7Lqb4eBBLDmDojfVkiHXeuhhUnLAP1GfRgH8QvZasVMzGFRvK4sZ5rFChWiKYjuPaBV",
  "key34": "2dSnCLAdiFCtcJnJX3wSZdMDWBbntd1EFwQ59T2nVCjG2K9ppUhE5rqZq9A8hRG3Y9icTHxP2p9njCyV74ExhUjt",
  "key35": "2z2G3rwtN1zJD9UxCHSoh7dvY31kTiVCXbHmN9F8v4nP8KRumAagm23Gt3FHs59d6xqfBX5Gi4QkXAsd5mGVXu2K",
  "key36": "5GSQdaJhn93fg8oxWr5DrWfuNkLzSy2BE9suYYHpkfuuZ9TmdxwPaCyN2wKibB2PPtZZhnsPz5LHNuMFAVwwiFLn",
  "key37": "5saRdkY678sM7c8RkZ8yDgPkAP5uaySBrWCGuBnf2wbX49VyaojJuA7crHgCQSe1k9yRbZYYE4KkAydthQRJL5de",
  "key38": "wK7ZTU3YMadrspPTC8rvmF3KWbJLKFo1B4T6WxXaGF5j1At1wsSfQ2DHfcfP1shgJLiNCbGHfoxpLMrS68nc7fq",
  "key39": "4c4dkMmoRiCBjR8poBqJifstiCufdtPBvoRPHgL8BTQ4ZHL8VmQKkKuZdFY6vB34s56rgV98MZmdXqqpHw968RJ7",
  "key40": "4CSaqrEL5D9rTcJGm2SjZsybhrKdchcQTYjpfJYM52sogb6GgBoSPYnomPp8rLgrUyKqzZS4cNkSkooAJFn7QpNw",
  "key41": "3fDgP2zB5WHRA25YMevNBjHeqzjkNji4SfV8MmCYQfPYVDCU4ZT6E3P51KUUVX2ZHW33Q7j3sWV2uJaUVG1Mhvja"
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
