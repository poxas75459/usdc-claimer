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
    "53M7d4KYW8tJZEAjMmq5Mx6HJdiiK5fjExGFFjdfBmHiAA9WvF7TbbPrbjq9sLAEVxKuVu8LBJk8YX7orKEm3nQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LbPaoRefrktCejegKW3TsRUg9i3A2Kt3mhKhUdjuEQXqYFm2LXps47eAvj7d5ne26uqwjTaTGsvRUG1RAG5Lppu",
  "key1": "5Y7s1bnzn4BbeKD1Cu2r1pfhz3yKCdMZCQ9jHKosZRXkHCr55Na3JJnAThKunws5KocSFXV4VDUQPwMe5B36QeAm",
  "key2": "3RPG7vNU7hKsn3pJBUAmcYjsSJMmQaVMattF1fqkLtPKCNptUShQ76MJtXNRGx65psqcWcjwdWHGwui86MpofCYL",
  "key3": "2S7a6fg8iQ9x9GBnDMAKEdrAtVcC2HNcMkVFA4QGyaKrPBY5AeTNU89KuktDXQbAiG18RShMN5RECkkQxynS6hhS",
  "key4": "ZWU613cnWSP7QQUSKax9e5YwR7btT7toLbU3o6MmE8DZUDTzB88Kaxt54u2eL7rbBomxuWAXxUUwyK3CtpBrWSR",
  "key5": "57xEBBZ9rAHFt9B6U9xmgfXR8copp431s1DDQEYfTF4gYCDnraLeQpkLUg6W8tu4dx3y2AjoXJTkmCB2PWrfaPfF",
  "key6": "4ViA7sRbGmvvv28rmx6926rfARPQHmVrcDEtWPC7d2gXSmWYFRipBcWU6zh3EgQsVtRxx7y6uTxrenoFodAWBb3x",
  "key7": "5iqdd5ekdQ8EqEMgNzCRPhkLnXWS1Snfec5trnqcJKqjA8gCTg5gKa4LEf9X4b9idJUbL6moRwjo49NwbuAg8L3t",
  "key8": "5hBhp3oHAd9BnRiJ4omh42v1TEaFfrMZ72XXGw9uuHX8B2YYFFhhhvgf3HZL1Q9wJYRVjMdH9EcNPW3DT5DRa6aX",
  "key9": "5aqYcMzjGgA4GtWTEgmmL267YNCHNPac8e35qdvXYQXG8WqqreCfZfWxBSKbbWNGjk7tJShvjL9Cm8vcRwE3Gag9",
  "key10": "5UmVXkpeSmHogmzunhhqPMgN6CZc7fgG6bnUpjRkKSdbDE6T9tX2J6mskjfA3syfUwzNDN24cVJeVZeiDV2BCQDL",
  "key11": "2ibW4oiJGicetcdFvwvZMWMi77AhFmCHCoYHqaA2bWKn4uKDYb3Wea48sneDY9sXc6UmmNj5Foz5RJ7vMGJQWrSs",
  "key12": "3FX6UQLk4D1kWjAabU2h5hNFrwHDUNBwUU9YAmBnsN9WZAqgR5ethDPXCCCjeKXAsjx46r45Y5cEGqAUd3BhmjD5",
  "key13": "3E95w6Mr1rxVtwPxzrSuVTGRUBTs9RiDBy64fLvcGPasYBL3Spiw387ZdA7nSy6UXrNLqXixyzwmFopE4oikyyEV",
  "key14": "4oZmJFbdGGa533YUQ8AEKcfm2w8HkFsdefUu4L5HNScrQSXzVRkAtkGumyzEa3QnGRNpRd2b8PNRNAdhcN8VorXs",
  "key15": "26BHEAde99DQyNGBWpM9fMDjXbN7XXqBMJVp4wP6d8UEcZUxq9rpmV9F9ks3VkVBf7sMSho7jjkWioU3TzC7PeC8",
  "key16": "3mhWVjKK2vZPHaypkKZWv2AL9p427rvELMztEqF1kUX6fAVy9xYFSAtvHVpzDC4dxb6TP8rm94LZGigTk4NGeVbQ",
  "key17": "3Sa9wAvfvnMHbM2k7jQLicuawLvAjie4jhht8udT7cB8U4X4uAP5ek6gsCPmx3iu28sG6AViVDkecD2dwRYRdeb8",
  "key18": "5Q3zVAwkG6QRxz42sncpX3N7TwkUzF1U1ZUBhTd5YSbzCctFhL6yH2HUu7iHCuLQhjD43bsG89XdHTPvtyg4sqEB",
  "key19": "5yHBcwCtaq7zM5nHEeRPtvLPHHPvBH439BzkyXk2UWtVaTeesLLMALU567mgrifnBS3rzAbrsjkYEPDuKzEAYiPv",
  "key20": "2MeyAgSy1JpNMrXYYp2KD1vDdWUzbmV2GxxvvByTuBPouwNkZNjWisqnZ9CkXrbQK5bA34C6yyGu8zgxR9HwBS1W",
  "key21": "21hEoygLWdhMPs3TzQ24GmckzqmwWf25mPZSn5cAvXkvVbipBeWDQuiDPR4cRz531ZdpC7k3BgJK3cB8tfrD5n4Q",
  "key22": "4uZvSaCDvsrkod85wGzYZHzDPGFrWyGVHxvoPieoZhuFNQvr7BmYWzP4VMMVFSm2ZtrXb7poG7b2Aev751XKePtk",
  "key23": "4ErHbP48bYGn7kE1B8SrQHi4r5DxswTX5vhQmibF43c4Vjgmb8eSavbYUtx1X5NadMVBBumTh5sympcgPn8iy835",
  "key24": "4TJBkuD8P8gRei849LeX33iQ24nXhpDVgNesRq1BnBK1KqMiga5snHf7BafF8iibgFNMa5LyDNE1dFcbigsvsXFA",
  "key25": "4pWmXoueApBW28SDNXVrDbMZP9vBsi5GHyUPcYqDp8v7qNrqye7bykRL5yLuPFPJaj98gUSZdNGyBRQnZKW94XTd",
  "key26": "2PwhMqL2BsVAR9aYWd3doX68qCJ5PF6zvGEeBSC1H6DQKa3uZbwRqUSVBErxbxzhxrpUZA4ef932eAwAfsCbmc1o",
  "key27": "RhWfGh7rD6zGA74YjBbv76P7rf4VAsu7SxP8sxnS5dy5rLfkRhmC2iAKkzPuiGMx8J17CzV37UFCu2poGnaWeSE",
  "key28": "3sm5LgbYmQuzfmq1HjvCvuUvo4w9xjXbtMHJ98fMZHUtCUgm2Uh6kFNMtANGWtgd27rk1ktfSAzjXkS8L6CtCZjp",
  "key29": "2Dgck74DuLaX9accFsamzGt25WoyF45Ym3xYwcrnqw6VNUmHCowqQd9rQarTzF7K4ZiZsmk28B6oLsaB8ANE45Sq",
  "key30": "eM5nWVmMVMHkeYid1qws7eY4aaVKvqmp8h6tAUWB166A4ZLVyC6x6y6Yf6U66CiVLqKwwXc39CjQwyJt3bxpe2G",
  "key31": "3mZUYb6J81VcpLuZxD4apYnfVwzzszWhH5gJtfv1sU4PXy58MZaYMcwJbvhc6vXNm4QEwQroxfeL8LBT5tK9Qo1N",
  "key32": "2FUWyy6tzJhJC6jLvPdeR9pwv2mDFQgVVRF8rXAoaPuAPUkFGPqdnB11wAovzxhpYBoRFhnvFqbjeBZNxu9LBAd9",
  "key33": "4tZHPbeE4zdbPUfFfqg9FVMrB5BNmJCYuwCkRHaq61zghwkM2WUxjRFAurxJaHYXaHLYkMR5jU3xDfwGKKNNh8U7",
  "key34": "647UW3e4wqNq3igaz9kS6rGBwi1AvDafU4rnTd8jBcgzWoNi4rMRTgodoBRD6pYVHm6P4XNrd5V8Y9VZKRhuj2ZX",
  "key35": "pdor521DUhw9KNL2C8vwZxneApBGzJYri1MZCFKutGQzn1MjxEfnQ9STHMvLZ9pRkftCLWtK4h4vsaL8eooKCJw",
  "key36": "2qyqk2PoumyessWUZERRvHsL4iAksCWoJk4x64uWxduiiPf9sYycGkcNtZUbvKheRE8ark8a9LhCyCKPU4SD4Yq8",
  "key37": "2GDzrm6hvfGw6yiJUtncK4fPDjJorh4ZayaRjLEgHKszXJKj51893wWMsf9yonosTakmMALeHs723biEemMx2K9q",
  "key38": "BBC61ZQJh5rbCRNY2ywfKxjK9yHo4fuEDWfp4x9Y6wgNVbJvZwMVmLjfEeY1NGatHD9VjeCaCLgk1MZoHzevspQ",
  "key39": "57xQecfyjmpWd9Y6vEYUnQ79eywxhrR9GxrML7q5ztcwSwFMLeS6x5rMjTRG8RRZStMYJfArubuytjmvZocK5kg8",
  "key40": "5fU5rXkvbPvt16Z1Ys81NfgeLXo8r1fq3ojjCKNwMDvmdV2Rnt4htsSYt8mqSdPeHtygGLsFPCbbz2dB8wcpvAkb",
  "key41": "673PWs7QVuSsewva9Vv9C54t2mgdkNhT96Vgwf6zqK3iCCui3NCzi2FL4txRNDgAeC1Q48p7rBiSJN6GGaiDpQk3",
  "key42": "b2B1YyTxEAEfCCjPmkaoixSCPpLTHaLwocvR9meAKp7NV1NVhhKhRpAZARQrB8Q55bMXvCGzt5BVbeHHbYE1RHZ",
  "key43": "DG5ySA1cHzD2Bidnmy1zxQR6uWo6SdaxXNJfLKtPGe5NH4o7Pe3Q1rK2DgGbTwL7MEhzHytnekLTFaSiMy2J6jB",
  "key44": "3wHFkDduoGogACnL2HgZYBzPTzvvRVdNnv7k9VrkYHnF51MB5P6eJS4m3phPs45hqhA2EotJ3iRRkiVfLPs62euT",
  "key45": "5kYwwmNweZLvoCYkqP9idQtaVgjM9EJZcsWsKuASJgvLGcmjNrn2XjyTEzJPQaTQV8yHXGvFjEitjTnev6RQvEJP",
  "key46": "4raCZyQYbAq1RT5gTbepquEj34VV2RGkvoHSpb9kutc6KNjTShgV18gcA63r5GvuySoJEjMeZ5frrCLFdJ2a9yup",
  "key47": "bAj4Rj9pKrzMcHU9L61DLqQmiuNpB8K8nWkhgDi7LPJSUzkjtJiVpcawvpBpaqWajbqmi4vJBzZNSRXPNSLXmMb",
  "key48": "33q3KSAGoHvZrVydAkeHzpnkx5Zdr2gRW5U4Vb9FE5ie9NkCCqkVEi9KvxJiiRU3Ad2Xyj8j8iC2v8esnJ6ppSFT",
  "key49": "4gq4tubar7VFnVUp9QdY7tgv7gwqbzjHoKktgmWATFJ8FZLZxru2U84oKSrzWiLYZ61bWfALnuTQQoDX6YPxhSTq"
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
