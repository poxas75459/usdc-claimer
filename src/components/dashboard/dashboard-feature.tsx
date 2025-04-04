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
    "2UcXR2sVGU541eovsFRK92DUYR8p5xeybn7SoSE62xwEKkjSF1ZPFc7PLid4Cf5VnMFF8eS1P3MrEPSVbmsc3PyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "twoaaB1nnVUK57QJZTzin2fJZBgjxA51jJMXvb8uFZhMvvPb1B1F9WfSgrH3Pj8ARAsd68FD8AypG5LLpLfcALC",
  "key1": "QTirYiugSNMYVST7aDv5iL5kRs2xJ1rGWWQ7rMrm3ej2dsJbJaxrtaNQo6bmCL6xdmVJtCAsMMDxsstZrmo8hof",
  "key2": "28odC2rB6XS9kaXebzsGRdraRhXzdvnwdL21aMhoG6ZrNm1iMjhjECYFsUcMyqip1triZ8GQq44oUxrnCj1dRkPN",
  "key3": "3hWPqJzkfDdqyGvtJf8ZFFyFjCgXvU7Qb9xomiKh13mGHhCqhDe8ydt6R8KjiNpyd79YEuHQryzWQFF1NFYZFWFs",
  "key4": "31qBKz1rFkxDgbP2FiKVE1pdTumxGPjhAimP5C39pDeAmM9ncCZea2g25Zmg5ehAG44rara7C28eYSJdeh1Y1HRz",
  "key5": "5R8UUs1t5tCgcnGx2WAsmzvWFwhY9jJK3erj75FVkrPMrvmdTtGayAuczQAE1UVjvgvLiEroWZCo5w1hBna1rSZT",
  "key6": "5J6bfcpw5HP6oQdCTawBheycwJU47dtGBmKNFqMhRWYJJC7yEU3BNLtPchNw5uDiNGzgjprvZkVtyNFdNerpbV8W",
  "key7": "4jBcSSvJx7tYgw3v7n3PicYUwQxsm2GezNqZnbGfCHhnsUnvsLVgd4UxbFcpYzw8WVT6YARhr34ZU65v4AFCxkUp",
  "key8": "2gpAWZLwb8eDisdAcbeAv9JRkDp1XHdH9PshZ9W98DS7ChmcZRgVFLVNcagxi1bwTnf8TfoUMHTFbnZqvHhd2bPo",
  "key9": "2G6mJ7QuW9ACriHYLHCczyC1qMPLNMNdkTMNJ1uvPzQ2q5XeVxtMXwQ9rjyTiKAgeZqxY5aE4SzvMUunU7mbL1ps",
  "key10": "3UV8DzpnDYEenLomPEyGv9jtoyHiayGLzSyTwfTmiJc1bbkgJm3VMY85v89jHnpn4ozCAibLwGi174QAYcxPVLPN",
  "key11": "28Ra43Nm5ntQPvAPEmMC1VvaKTEgYdYoMGgPPDaiQgPFrN12sjjvb4rw4dwJTgYrtMm4CW3UhhftzxFgS5fVESvX",
  "key12": "5wgtoArJG7VybLeoW2SgA7d2vN1bEojYQWkpd9sMjPj6GkpugRrQs1jAyQ8UP9gn9J6Eeoo6sBDA755cmTvXNod1",
  "key13": "3S92dHS7DUjnXcYYdGLYi5tBhupkQzEssDegZjQo8wuNCAThrM6CxvYVbPCP9EDRJPNZEhVXGgfQZGVgqsvYU6U4",
  "key14": "28wveErtBXXFDeHCeyEqbqLgfpesZj8F2HrgibzeYS7mhPZQe9LCbvZTiT4HbKaRJS49VQEkY1d17D2r4GUxqDHv",
  "key15": "3HyKhLhQJveAHh87D1M4yQUPCLzHaEkEiZtBwn7QACTh4ZMiMpuh8vRESVbSypmH6FMzHXbDfEiZYCU2M6YmEy7N",
  "key16": "2H2aH5umNaUpH3egpdRGatooMLCgYovCpmaL6Legpbew3GJPDWDYT4KbhzSSx6sG4Pp41y6Mmi4C9mLxhqtDDhkb",
  "key17": "5rvHdPHt6axDjLJbqZn9X42Jk3Q9cg6zaiRkYBLMSJGS2wY2UcfjRyeprXLtptKFFHaLK4d74NWArpvwukteBLeC",
  "key18": "39vqzggLWtUCYufqzh67Tzyk9ZGcnuftJ5q5WsSXc3t17ZDG2GpDQQRrkiWwSVLGphnzaunQz5odELjrXu35Mcor",
  "key19": "66Sct7wfZzD6rzUMyGcjx6Rh3pQHHzbc2Jk6FweRuuZVnEPpbE9xfeBVKqTUWeiui5sGcqKf3Gft62fm6R82bohZ",
  "key20": "4EkY28tmCag3MCGWGZ1MaBmrxe6HniZmrhqHugKLZhAvTCgEGjypGvB7LWGgXzzgSHYKCpg7DsjQXnVQzxhZZ8vW",
  "key21": "55zgGWNr8ott4B6DzkrY4knDB3UVzfp64DvjVzG3ayBsQeD94FqSLyXWjeEz6JF5vp1isWs7MJxNhJU2Eu5r4HDC",
  "key22": "5xjtywMZCSXfia8pxZoFpxgtPxzR4skrHLv9hPP1XPPX6AWfzvAvRvBDWju7ftNkWoq1LSTYqD4T8TNrDZ5aMhRH",
  "key23": "2Zw8gsp4fW9keaniPeKBjuW8hsgPCyh7KrRMZwtqdY1yeNNjCvehBRqtkra2b3ZZJB4WDXgR2iXiwijsk8G1nV4E",
  "key24": "3a5Ujdw6oYRktQqr3dUreqrhpLSfjR9u9mQw2dGsT8HDdsJWyXkY9xoRueHEAJrSTnWm12J4Ww3NB8CyVUs1mAkS",
  "key25": "2V9XfUX4NG4eDaySksgCTZyLUeS4qH5moczg3PUayfAcvWmSMnUyt5ZgaKpGW1fWP6RN4xvq8idCwCKS6CuCxbn8",
  "key26": "52roKKumEKWmBHJiduRxLEceMHxAut8pCjRmEnhYSGD5ceYYR9yzRuWdkT5s5R4i8NcZ4YnxGP8oBbKkTRzPndfj",
  "key27": "3ategyuy6ftQdrFBcZyKg9EiFPg2i78btc8g7bD6MSEFcuCLMdnpHEjUnRpiBDVmc16cXpSxWxAXU1R2BBreTX6F",
  "key28": "4fYmheGNGSG5qg2xgXHYmAYrEBn34ngoenz26qjfAEDKvk7cxHQZcnmLPEAhPxyhodVmwp2AzjZu4ipULAXZi8w4",
  "key29": "5Ry5YgpLypihBGssfeQrSa9g4nAiTRKEjfJ9rUfYLLPDcWvfDBvrGYeak2R755EyerrDHEom2HV5aZorKQhfqnLc",
  "key30": "267BMvgEHfwZX1WPLVSwSzSU3YFibuk7eijdhk9QrZ5qQcs3U8uxMU5Q5jXqXicGjTc3RJF8pP1saVEYBvk3b6fU",
  "key31": "3BXmWW1sfEXmgucKpJW9rHsZtBM4Fv2HRcC371rdyR97iYuZg7YpYASX49kx5kL5ivaDsDQGQFiiNQU5PvH2odhA",
  "key32": "2prPMcHM7WGFmiSen9KWYinDxFhNC5Zfdp9pqCgysJ3yy7a8Gk93rkrFrz5CrBmTd68SArR6fNRFDScK6RuNZBpU",
  "key33": "5jJrWhGYpszwPPe5rNHhYFaNTskLmsd2WJvfv1xbdxGvLSg7pXYKhVZvrsLa91HiZJ4FYhCxzDE3U4oCiW4KmoiQ",
  "key34": "2p7UzTjsu7gWFd6tQBDEJjzbY7PePnCU7xdLKkZuwgB2NYadSZYmqFM6fuqgdxgukHNrwQFfysbKBP9RmEwsLcPb",
  "key35": "2HrzgRkbyy1k4r7EH5qKYa8Yvsg5KUpLZbJZjLXU8ja4UZezCbZuywKBGJ9kzg6orGwMuiFDpsdZg2r4YM6RkJmU",
  "key36": "4vmN9QjKxTNxRPPQ5MZdXHaMbr6m2KCwL95VZh6s5MfySyoZ9P7GTbqVhbJCupy2W2JXgegAZaefjJ5qBZQjQZ8a",
  "key37": "2quVW3MFH83o2S9P4aFqEpV3bwY25GTr15Nzv24WuXff9EW4dT9vkPwHvJKrXfbQ28y3M56rs1Gf45cXjS6wNp7G",
  "key38": "28bxDRuLEzb32wKGQTcnt4AfdeEBpFcD99ZiqgKnQg1kjgYBn7pzPVU246xRmvVYMd5iy5BcxTbmrE3aYcc3e8pe",
  "key39": "2cC39o3N3N6VjoV6Y6kx69dPn4yRTNFZUPjMfuVAZscWyLeQCX13zUjubAdHh5z8gRBvGY8XELT3pCCokdMfG33R",
  "key40": "5nkkN4bg2BpEJ2qVVUC8JajHCechCC1SzD1R2mFmfMbKdsfwXLh3mqSPhwTRnYS7ryMWkPXoJXbAPWRGaMfLpbpG"
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
