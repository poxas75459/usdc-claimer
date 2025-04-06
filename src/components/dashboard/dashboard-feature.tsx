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
    "5QLfsnggBceNzDZERGHA6DCcZJW2jSTzq4v47uBC2M7mjK8NnTZaafZRBFB7WKUWkfbAsxR6WCM62mERd9ShaXRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARzczkRWxgdYMQ4PyMBASWs5JrZbkbs5k2ZgcfmL1ZWoeckRSnRogWKcZj8tDLGzpBTFodC6CEwcgGiwmR2bYhm",
  "key1": "2aZT8Kmj5wivNtzZwBapxCeUbmRbraNgERmFTtTsxs6fqzYv4SVS4FVw4BxiRYaGjiFGwE9Ur1bTp2YvM4zxGnF4",
  "key2": "2kbz4LtMRHGghxkfZgEgaC8Lbv6mfm3fFe7Ugab16Vj1otReQoe1Bz6rqJ6VLkNSoT2geHVDHyHPPHdtXsTHVBwr",
  "key3": "4XrqmXUWDgkn9Lq2EaZYJMiw5SbrKEnYQUHASS3h77f5jshj2n82vbodDarK3wVnWnjNqGbiv1WhdNFwyyJ4GJVg",
  "key4": "3etpd36HZaJW6k1P4LzyUn2cA8BJeEfLpmfhNCzg1c6cFGBoVo8fgQZ8cEP9ssVchjuBuFPgkBX2XsFnbzDDYgBC",
  "key5": "32jtvHkvJaaQ6YExS3ue1q3CEcgdHRtv7iRTfhdNtSqiUXsf6cBrbtjGcR2RrMxeW73Y8DypUpgBK7cpvh1QL3k8",
  "key6": "yJtw2aRy779siuvtwttqvCvwKy7eLFyfWHRafK8MV1nAEE6E8cgXgBUGwPNFJuun39rjdoxE4fk2etpmtFJkscS",
  "key7": "5PcFTRqKDjd7f9Xzvx81fAjvEQVPAtgf1cNfWp5eRV5uNRajEj5SVKHzhdPVgauoRNb6Y9uaaWfQgipK9Pzrpaxc",
  "key8": "5tDmAxLgjZTBSSYTUxSqnhVMoCUPMeC134UkWDwhW7DK2DSjtrXtPmjA7eszEaifoP7y19xfM7DQJ7ky74AdkeBk",
  "key9": "2guRT7p3iJiMrWWwr1n9XY6TUQTpzL2peuDW8YoENSsWpiNAwnBTUZQRuvpa1tM1UzZtrZhnD2KfDsCfU2YoiJpy",
  "key10": "4GwUX1fehvgiQyB67a69ZneZ9uQrfFYYUP5J6WYzZunm1YQUkPmSGZFpDFBCPBFRnTrVY5o7moDkuQs19b5w6ZLu",
  "key11": "3ruWJAP6ECWGnMKzxhK5ByD5eZXNqSsCBZcpjkxKHjiXU53V9Wk4FhhpXDtdjk3vMybrNyTHHY3VB4h3y45MBc2X",
  "key12": "4ippBa2tRNdWgQv8531VwoWMvF3LSXtmHGDSqmC9gFCrNewUtifdQurxy8XceCguGght952Dyx5c3ktDMW4Vvojo",
  "key13": "4wSyhc9b1Q4gxTNfTDTT374UqGYxqLV3PfGSY7tDiaaqUqw4DTwyhXYbsDh6iDenJGgFgTwtjzJH3Gp8z7QdRAJF",
  "key14": "qzByBQeq8umzgDjwBFKJNfC2mn89QhZ8Y5ZNDMWGo2KTqebSxN52dZKZrtEkUU2SpHHSGZV6tf6ZSEsTmpJ89fv",
  "key15": "2DhwzHavXVJ55bX2daJXuxKfvukdYWjiJyg82S9rQt33bWXcqorD3T3X8uZqb7Zk34FzZRzthheYhPdQWtKySj9w",
  "key16": "rznuVsvpi5HJb8JRJs2Edcoq6wqRi3pGBpMmEqnuatkgNY7frs1nLe2Rwf6518QumxkbNbWNQ4CRGgDuakZDBF6",
  "key17": "5KpfjJ8fQEE2FAqhtcoepZEVNiy8EFtpzSBVazeLHc7Mu27Zox1MCrSwYei2LcdUBqFzSj4L3eTcKKP7cDiJjJMk",
  "key18": "5qLEeGxUK38AcbQZdkoJXfSRnUKBY27yLAEwMLFxZ4gTneXxAryaK6GhieTKnbcQBnNoepuEc29g2JormANweEU8",
  "key19": "3hhSA1uN4zQ7eEbHJhdymYrSZhBewrURTHKUKCubXAZZaje9pWMMJtEJoJaKiqvRVm9VhJ5d4T7KhvywKQHEwhAq",
  "key20": "2WddpCtJfLStydnNqoP1NkCyRyMjeoU8zE2z66GQJZkCB5DSexRjiUnje1ctFWQoeKEzJWXR8t3QGQFuXrpV8e1F",
  "key21": "5sTcocPioMPEpCYtmQpgw1YRB3fVVoHmiZi6dQyK5uGQo1ALUb5UAoPsQpDBboJjxuXw65xvBcGT9zF1JvnXdYit",
  "key22": "5Vm5KofwW1uk2zqJpebrbKYfJ8ysT92d4n5hcJej1SZSyQLoetbET7UhNyn7CiiaQvtn2kRpkVnfESzVZ6VTtupE",
  "key23": "29QHe2D2qKco8yCYRd9YZJfenBa8ejvTXKr5qrxKTWx6myTx967xxBXTVt6QyzMLovyYM97o8ZUueRcATVmdJXpG",
  "key24": "5ViKEFg2aDJh8pCuz6cR382MnZoXvajjzuqWMuwV5wCqDnPPwHrQHJF3Lo4rEn2Q1yWHKtEfo1uqmX8zsm12CbCJ",
  "key25": "2M1ETkMpgj9wxgwtDoyZsEwG3mHQFHvCidD7WCYHUUw1qpgeQqioxzj4BiHEVwKfcL9YKWekxwKaNwzG1UTmebJ7",
  "key26": "4iMe8U9yoXfpyHoYbfYoUJaiTQhJv3s4rGEmwgeyLVc7oRjZzZNrpjHoepZVHmSLSLAswgmedHP7FSqipthjsmT3",
  "key27": "5d5HrSgWjphhkXixWWT7hNKnaxsMswuXBvXpksFii759JGqUfnufnEkQAv4kt8PoYXfDPHmw2R1EgaVgTfTsvwBd",
  "key28": "3fDhTbMh7cKNDrnWqrwwaCsMQUBWpfo9GGqTRupB1RyYnoQZCvvQwE6k9L9Lg2SRAKrZQUJUAiToD7jmA3HKg8qH",
  "key29": "4kgeg5kHpWiefDywBGfhsmhuo94uuaVfm67swDSzWXKZnYygAKAvaBgj9UP33bJ2Qs2dKfmoAgL6DbPQe2foBCPW",
  "key30": "4eoGPX29XuSfjzBYazpsDZu9bRFXVAjBESegoJd6dDipubDHTx9SG7oAHX35Xf8resqprHPkTBECP3nQwb2R44PW",
  "key31": "32tXtkuQVcEbC7E44fLdqf2Pp7c2gtG2Ew53A63TJhsH4riumYAK6hk7tZ83robPoG367poDBv4xDL764hTBXYB1",
  "key32": "29GZzq4HAhwupNQpdfZQA1qG1bxuurPzTfxiV6gjtTNgqtaiSjznWYJqj2bGHACXSH83mQ5F6maHSZgNtKfBDQSz",
  "key33": "4SUr3gbn6xNy3mPr12dKeQz9rroKBcwP2QGzwiEAHJBBJCvVaX2JiYwdSsbpdqQtkk3rXz6ZKCXHH78Z51t2nNjE",
  "key34": "49TveYFLDx6oe6MPLR6Y2WNNf6E9FCgGEqxc8K9AL7ieR2Q8PdKwD9FCq26CYKGqpPxhHCKuVs8RZ1KrqhuEP1qA",
  "key35": "4gDsGdQVxpLar1MKE6APcuUVCX9R3azNWiJZxP92v1qxJ7E8TcLak5BfYVY3M6oP5kBAxqpFdH1ct1Ffj19y3JnE",
  "key36": "5BWaqTWeeXFYUUiBQEycjLMrrSKvK5BEUxsP1anfa9TFysyuDQXMUVJP6BWEvgx9wHPpnntAB7gf72DnQ1Fgh7gZ",
  "key37": "3FTXcciaUzj2vTCUwdSKfxBo47emLGXjyJqH9FYT35RjuuSSNqpnTsrDRb9niXsJkudUCjA4e46WbMf6mdtNWCeH",
  "key38": "4aw17YYASXnvUKtKUWHPSMjByCVs8z9mAMhRvscAAHXgkYeRxHsYCxwMC1HgTXnBmLzq41WHj4dwECpsEnN2yqEH",
  "key39": "rxBXxDBHvFKDkFcBXNGnBkvskNCxNr6MT3k15Tk1RaSoxVMM8PMXFATBUZj4vXGeNs12d52Vo3JWPzjBpsZvtdb",
  "key40": "2kBtkP1FrSgFHAPab9cN7WtgoGi1oesB2JdWW6q8AHUwAXd6FUWzBEgRPBmKr1wXGqw33wgsnLTmhcjdHQFJHtk7",
  "key41": "BMwpqdnSiRAaXCbiuc4fxvNiNdP9nHFfWjTK4MK1Mbz5g91XZaEKVbhCS3FKG9udMtDan6potveL2m1B1RVsrXu",
  "key42": "imxaih12SnEc4F1uc6DeLAs6H7xiRT564XKAPZXJpS2QcsCWXC3XwG66pLEggFV7towhZcoGB3oG7jCskrpXqCk",
  "key43": "67WJpSoQS3HWQ4F1gZz3nBsibPjEZx5sP7FpPPMwp1UpDCrq3MEo4M5bjqasuo7eWfdoqyGkCEr5ZEdLnxd25vmg"
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
