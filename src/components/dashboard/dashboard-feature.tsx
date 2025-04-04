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
    "2Mjt8z41haNn2JyU662i72gydeugXY9L3kityuW6vcNYm8v9DSTxYXhiMQt5DnyJDEMvX5mj2fA4auZJdfqZF4E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRBbfFwKD9qHDCUTMcupAnXGtpEgKKNrNfHzk43WH95b3pyqqF9PhZvKNTGpVGAMHWB3EkV5bNcy9sZrhzHGNqm",
  "key1": "3gcMR1Mfp7KQnyTcuhdHnCAEixZSWTqAh1ehqzh6kZPA6QNmxZ5sudMYpknA33ZCmVKP2HduvZ2zHWMPmeCjEP8V",
  "key2": "3qUmCpWX4krQqyjTN1zNcsidd2kzyG35HhNTymuM6PCiikj2cWhGuFQDar7C3fWrrWhi84xWMcF6r8rREFyGvXGC",
  "key3": "5MVzFZH6rGDPzujcA2WvW1XpNjNjgWjMVCpLZXMBjq1GqmtYeHuE8mqjL6i9Pchp7ZPQDXex6N4XxYbiRxvGWWeK",
  "key4": "5eGP8Gv3iVcoN85M7dzXq6bcQyAM6LqGqEy4PiCNqTR4xkwo2tbwE5EzZeNDhRqyD8esKF7guGihXLU2P8Rhr6es",
  "key5": "VPkQAAD9QCYYGCY1bwmoeKDWMAkiMYX1CnZvdpmVLF8wJm6PkEq3AVuvJZ4UQjFZWc9rsuaTmYmy4JbnJCVmFYg",
  "key6": "3BBXLjMdiMcQZdgNryxSQiVgXcTiqNq2W5UjJiNPWtmuVxM97h2Rag4YNmPV3JhY9dEoKh88KLZ4UsmR9JJwHnAP",
  "key7": "4mvx6X3tzctYHzRvHv3H7dnY3z1YMF8e7ZZX2z7bBT23TqLVubdNoDi4WxQzFzPPZp26iEaAEJ66iA5mXwum82X6",
  "key8": "3imMtkfxDc4GeCb12z4hUHJ16Eu4TaytCtXhoDsJEP37wvTd6DUQdiTd3WAPead9Bj7onZrmtotLrafimgTCrzR3",
  "key9": "2mhrMtUrCFjVSkzYjeYJzwAZg8oFMHvQfWiLJHoFeMzbzAvfWHBRQMFFwRiDUqmEqLswRLVRznigVMNbPARjZqAv",
  "key10": "4iDXPwLuiceYXUBKvvG6Y8vJR6D2PRtcLD7UEMb91sNCoJQRG6Gt3Cwimqbak5EvQQ62k7iKSEmAC1PmT4L84gRg",
  "key11": "47koyeA6aM4HZtPgmu5uWfVu4TxWMrHXDtjRFhnab7kvjkAfy2BvrmPoRFDeqECCBGc9nkEw3YuvCYRx71fiuXX8",
  "key12": "5ky66H9xszsqQsCBtS5njy58ik3LcwQZhKHMBDjpmgwPYx8PsWyoPcSfYZAjy8FLBQopRtTn9N9vwbSSDqLeQYjE",
  "key13": "3LZMShVyqMir61uS2DtyTPiLo9GTZmMCyuiezcX7eFmcK3gJ68ATVMgKZCaqAXGA18ggjXQ5tmiJV4sByGD2rPHW",
  "key14": "4aBJP1JGp4N6T9TML1Nhjs3c1Z8dj3eu1im12c62dASr7GKAx9QJutd9wZFzj1ZybiQbKE2Dukpfq4rgPTNwZ7jC",
  "key15": "5J8hymEsp8BpDmRC8MAi5YQ5k4Fo7qyNPPnTzrDZqGWkPdtrukLM6uj98vD4oJhLDHbpKQ4o3BMpbHDVtSpv8FNK",
  "key16": "3v2xBXoZzLAHM3SmDmcvzYzvHwZ9bmuUVej72hhvDZXHjTsimYZwpMMjKiRSPMiJEVBhbKVfiKZkcFPS7smbMSPn",
  "key17": "4LgSGGDVEGNpfmCFtv3NUhNZVhn2U6wPSLxBcaU8xF6w7dubeWvw1hYnAu8LiyTj7dtmMmYF5gqXbX7y1iWTdopT",
  "key18": "5R3ZiUzWyroxvpPcbN1HZV4SDvr4YCrfDj9GYG5mnC361h7apvAjqWaQKjLnEnisVhR5pRe4ACQf8T8bQoGHxEnw",
  "key19": "t7bWuDXmUEn9iTNHAtxpgrvYemnKE8jhiAGJ4nZZ1WMqWAe3rpjovQwPnBrxjNi8eFW7i6FEsvGEnUoRT6We4zP",
  "key20": "538MKtcNYHunBZXHnUTSwpC3914XPppAj1h5NZUFqRP8K8UyfwLWFNamintACsHUi56avEPkWuYcrWSnUkE5tMt2",
  "key21": "rDydsn4uZEtPnSR8r2yDXke4gPEzvTNvKRDHoZBfkSfV2BmtEZMQC8XYxU441RYTnh22i63SYj9zeys1tqqgsz1",
  "key22": "N1odaY9Piu5m41MaWxvLjyD4oy4bm12uihoqFg52k67AkGNVEC9BpeurBXg8m8fUZdSBNTWoWEfgjQAWJQJWi3G",
  "key23": "2g7wXBXo3UTrp25Fr3hoTmLc99vGsYtKLPee6iWX31vN9Q3WSuxttY9QQE2P8MdRwERsTJPrWL7ERBjvxHVPEHZh",
  "key24": "2gRVJqeHoEeKwjUe9eKkgeb1XXBKn2hKPmxThzkxvcrZLdAHhNPFauXL29xGD1N31A6LiRYcNyC2knkVfxeFsHS1",
  "key25": "3SqD7zh7o8fhiV1wGi5twetzk53VGEpKVm1VbssChyXzoaHN8rS2u6Vh2MscoS4sPfrkRAY7WrbBurdssKVWSBsh",
  "key26": "5sL2p5oinQLCZS215amCZcwNZc9wmtqzx6S3vzcff3L37KYYFQ5pD6ckMWibQGP985ahZ2PhGCdbKreBpaHUidC5",
  "key27": "kQwKcdNFn2i2rUvxG8smPZ3ya66gGE4PXfRwgzgKUAN2wMNYFdqViKriciNiRGuVm6AaREP7kbCv6CoX1nxSbC4",
  "key28": "Hg2hgL7QZC7me8aNj3ZicwAWkceGu9Az8SerQzq32zqyQpvp2KhmGhyStzq8eQB7TrhTrg8G91zVizi3PCCXXqJ",
  "key29": "2sxtowaLd7xEt4HcwgTgqm6ifPoQQV7bx6Lmw8YQao3sEXvDUakReKZ3cF7bvW4YSrbgzU43aiFuRz345Np8K14m",
  "key30": "5GbhHWh8hnebErF5mQTVd8Uv4g8D5c94vBHjsP7TBphLCVqCPLgcAXNPw4Q6x2NxoLCUNKvkaoPkP11nMQbcNcDR",
  "key31": "2odKkdtJy2X8EbAbm1QkmEGiKiGp8Djbm3ucr4yaBTBYeinfyhvyACpm58ZzxJWvo3U8eKoUS9NjQtHF6YWRGrkg",
  "key32": "3dCMv7TwzprJ2726r1Q3RYoMU3EkrxVrCT1HTEQXHUGRXWFxPrt4PHUG3XQFET9oGCDCjLsKkvmSgKPV97HzVNtj",
  "key33": "3Un8P51ZxyoxH3nkhgHeteFFQ4GGh5CPaqXvmXQz3XsEmJNMKcFSvWo3JBpKSS7WZyULemNdqSPVqvQXF5inZH5",
  "key34": "mAY9Vvg5msaYWF6uXfpFCcDTJL4yAsqAkQAdzNzYRSojNNbSmDoWwDU36cdA3fEiD5u49QdvZesrwEtMA2de7LQ",
  "key35": "2Yq3fNpwDwLPhrJQjVvHVeT6kBCELVBVHVH4gWe8j4bYVWbtVvGUECFWQ7vuqsNiUfXq4KMAmYdivkAvEChkGjEK",
  "key36": "5WizRkoH5VMa5ZjAJeAT5Q6NK9FLrLhn5aF6hr8Fe7CcoSDoMyiLbATCynp3v1JFT9ycaHv5631H8Ke83cMmv9Gh",
  "key37": "446nCSsX6kdUMNGtJXMo6LWWCns8FtfGhz1LtZug5PzjxKhPERxWbRrJvdT31qUQtHNQAkT47N6KpggcBxNp1mzo",
  "key38": "4X9QE9q74UJvEVC3ds57t6qXVx6JhqhokJ8DhbbhSYdSY6E9QCREzEPfzs8iav2FGKUd5yJ95KCwRmnhSoubUiDP",
  "key39": "4D2pRk5eACa8tcgGagtMFoUFA81WqSw1RmvTCdRARSpE9XARV9qF4SxzVgGmWXxrHDChpZ6MKqQfYseq6jmFhgUW",
  "key40": "3ctCjqq8V4LKzdnFc9BiJxWHadEBM9fvMABHQGzfKgdF4G88kqv4UbJWqDP8S1SyKFSUL7DdKs48MZN7J7LeLcq1",
  "key41": "5qZuBcRyT19aqG9WkdibScacWUrtmEb76B8dhaGj1ShCjVsTPYGRMascohmqpv5cukX2SbUWK9o3Vbe8j3iLbQMY",
  "key42": "2rTMQk1xfX54bozEbpNSVwApLdiKkX9v5v1aByUodt53WVEk1zfKcYFpbJQzYBR943dFJWFV7LQag8LaB4RWV4Vv",
  "key43": "UDmJx2bUezWtjnQZoBZVoxmx6tFGgQ2UKrkB4SZbKjdbN6qxPDmRu5VkyUS7H1Pd9LSojzgxMCwCzMaPC7Fpu1Q",
  "key44": "5jTm69xmakg3HtVic5cHLw4MoHHNwPP7aRmJTRj9cToYvLfJAguRRksjnVb1ppSTS6JDSW5Hb2me3LjdReNM2H1k",
  "key45": "bmuXX63Nimk1nvfsPXaBcFVcs3oMvhLTbwZGXNXPurahPd9Vm5MmqRMkiLPMAV6di4e7cSwFTmajK8pGWinMxuu",
  "key46": "3vjMWGBe2GLzQZrmPSY3rf78V6NFQRB3cyoHf7hmJD3ihCANx8sVubuLa8xRjgSwgTRC2uwUoUP81KZM2pwdWkp8",
  "key47": "64edRECXPTsL7f2VYMx7AzqVnYJPrrYBtFtW6T7zwUQGTxKyMfDZ6qJd4xWANnbr6YLW71wMgeDh5omZno5nyytn",
  "key48": "3HALGnXxGeuWzbECZdqoQqaaCQPbUczpXewBcxjE3u8yyDyDe2keNatwXBKv9uVC4mgDEMkR2ayrwu782C5YqXtB",
  "key49": "4X9i7xHFqE1Xmmrzfg584PQ7btsgJKzn9Z7uc1hSEqJ7PgT2w5pBB6sjKtxigvn71CA7MhdC8yj61qPeEvH2dBFK"
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
