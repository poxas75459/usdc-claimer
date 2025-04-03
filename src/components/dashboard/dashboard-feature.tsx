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
    "2TkezjYLDifh924hZkU172dcscd7QtfXfExWuCNY6WsWLphHRCuCWQGrAiiBMVm4rqVxjpGjWvELFVDaHasUb69g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMkXaGSkVgWyjgdt8wTQmgvnNW1fzYKp5zcCmFeAubnhRjigEm8y7HZyCTWqjMoeA4jUn28bjbcwvRN9PMvtQth",
  "key1": "4YekfK3pD3fVMpmnaiXbrDvLNTCDypujXm62CyeHotuAz18utJrLm6Ry2DBcXko8HqZ2xG7hUj8MNNJ6m69Mixjy",
  "key2": "4zZCGkQAaPE3qHgXakWgyPCXKNFjHaYNjYCUC2WoCc9t1PsmJ8viDMaNuAtGA4LcLnMPwfvgLKRQ1CXRXBqMvBNp",
  "key3": "5CRJF6uvsBXyzEPCv4VvZ53ygcHHf56aQbVS4doUmns6SxiGdyj8REMWQHRMgwbP68wNKyqFBBuWn9xnCj8bkEWA",
  "key4": "sY8p4V1KVQUgwCU5MpuTYmXZUJs3n5XoeAr5A7MMqApqanKU6UMPF5v1n8W5wxHDhXPRYy7u92R2MCAKHkAB2H9",
  "key5": "RMvBw9Nbzxx6nTeqsJSTS87jm3QKAtVnwY3REBrBNoC8PGdNqVqLpVabFNeu3d1VJcriBZBk519XoRTNLPjJJLp",
  "key6": "554BuCEnJb33iiNybxbGL1Z8ocmK9rLiyDzUfi13CatghQ8xwYdNifzD5r8eeevSF2NqYVm9TDvmL8SoHf7txjJg",
  "key7": "31qLwQjSNdU7SRBx9UWYF3Ei53TpJuWv3RNNrUtGhAyceK6FfVBZ3XmpjeMzMLCP3y9giTFdFaFY5T9XbdA5WJ47",
  "key8": "3KzZMHqViYo7TCrHQ1Unu7t3PcR6UGysMkEVyox9SosCCCnfesiy9kQNSs8copJdifXd4sRj3DukiywqzZp4BLPW",
  "key9": "3bmSY6sqv1KuF2kWg8PWdJ5duua8V2KsnBGyuqkk14eBbmbwXcNt5ys2HfMKbUwd6p9iu4ZxQvmEDvfEX2u3TQV7",
  "key10": "6221hrN2iMWkovyMnaQ3RqLtiDpXEWiLjXVAEbL3EbHqhvmMZhgqcxMjXDkKQQbeLirEY8ojaxmrGX3W8zYvcUae",
  "key11": "5xL9JuCr3wzDss1FyGrb7BPqsERCVkYg83bSowSbAYk3xqrrQFE9k2CFacbNcvrD3WnewfhxwXTVtgRWu3s9WruN",
  "key12": "3uZMRG1dNvquPmuaCF1TCGT1eYndcMDtCT1LXoZotvWwcQmwA21LeqJb2qMkegYgZUeaAePoDxsbioeVknMCUYgH",
  "key13": "3YU2wJ7rdxC8G1n5D72Yx57JoVHFBPQT5AoeK9jDMZakFEAYfva63zkCDLUBjXBhPyyG1WVrKShsSWPnxchCCMn9",
  "key14": "3RupToDFPwoWj6PsBvTWoYd4hPB8aJBZw3Bq9ziJ6H3oYM5bXCvwGyeLnpizyE4hLRyyxkdrRKiofkU8Vq5QRVrS",
  "key15": "4tjyXT6AhSTfvbU2b21wWjJK5YaRCoiJdodScu6VnWkr41rYsaWa5aGoFmKoB81jfdMmaD3yur5TsmGUdVMHJC6Z",
  "key16": "43MHNRSQoCCy3ou6u1RrSMVL8mfJAEPbm5SYoqQc5HDeMnrK7vM5FtFLBVX7GYvC1B6qSBhNmcWjz8sxddDXNpjB",
  "key17": "51Z33aSCJooCt4uTPyJts7b9sa4yngVN6ap5LyLs1nG5HnJ2GFQJJy9Sr71evyBNaKvqhdu84XvqKCmEa2u6dJPr",
  "key18": "3t5tKLUTSPURFcmiQn2bzvSUWunRKMjg6tZgwLJk6Bhpriu1CM7iZV5h5Q13qJnAgTQeS5gDSoVM3rzNWB1UR2B6",
  "key19": "56bA53xW7ZTxPa9uYTP74XVfujpH5cy4ob7FHSdj1kJ52R2ZCnPapFKZYVGBGDkbKnCybrxXGM4FZ7pj9vP4PiSW",
  "key20": "5RvUNhDaHEUZQuyzLXv9WVp86vFLTme8GPyM6pAEuEHWztR1ymYf89sd8i5xPiLri3nZYSSYvosruxAVtJqBdP9p",
  "key21": "4VZNY9Njcrhg7SZc5V2q1kvPR5gZpoN7h3PfTuMp1DxtjULYHgp2jxCkGVvwEQiWrzg2iKCjz8rGfUbdpFAC3D5C",
  "key22": "4ZcUr1RRHL8Ke3b4pViEZUoe6dve3ACSYhmKgwnoDxYfFDJjzf4fmUH5zUx62PwCE4LDkyrVDpXabVabk9whaLve",
  "key23": "52Xiy3eQvhD9WYQctdSxzXbvzTzf7h73ZiPDJJxq2LvKwWPeJvsm8c4wfvjSu1qSndVpHwn3bv8NgdSSfTZoYKAU",
  "key24": "5Ah9QYdRhC8WgFu8NuTWU8FEon4QeZs5KsXDTtDUCgdbHtPW9NkiBgb6Y3juhoyR1XqC3vKarPdqreJkkXcHDLYo",
  "key25": "5tQ1RGRPuU2dYsYpdVJY8a8DmP9qgWxQdp92ZPeb3xgpP2RA9AY47RWTke5revJLQohWGKDTrXVTKbroYmc644R8",
  "key26": "PjeAgTQs2oHxoc7ggyKyZund4oCV1YBBa5eJiuiKFvnp26KPUG35BZaHuAErnWwFJnAmK1NHSX9GMD13vnARJCF",
  "key27": "dTpv1jzTAgssUDttLUnTRjbBBJPbVHYTm4YXb5M1LNQoCxQX5fYWKXsYguGyp142EJQQ7d3GLFXePrCVesGBUs5",
  "key28": "2aB9CVkySSjGKDnACJjS7NkwChXfzq82HGuScasc17UfjLoqXNGRFg1Q1p2pQr6y5r7sDtdfDx1V6AGuzMg5FwsR",
  "key29": "2rESfXhrowqe6xNv2azYZLzWYcjP6Wbnw86Y6BZG5DQC6xmM4NPX3nVMiT1Xqmd6L4ydiEH2ysZy2U9WXUHgut8G",
  "key30": "5RbQPhkzmQBv6QpZSLWxDZoXftxNg3ortVBC99K4TvML2ofJoiuTmNeLRwpbfjZzr7FAhZ8VyJfkc2XHc6bKDZ7z",
  "key31": "2f6ZnH7cEPuvqVS5i8WZjAJhbpHhQL6REABJ9HwtpPqk3BdCxbUy6scJ736j24xjYrNwcPFgVF9y686LtDayRDzB",
  "key32": "2YMXoYijqbzXe9yofNQjhrjV27kzmXxD2HfP7JKH7Lqoqz3QDqwnCS4ExWkNq1NcoEGrkAjsziF2guPHeEF6XafM",
  "key33": "64zBekeVsdadUzHAgeFwBbbQ3qfpnXivihiWzD2sZP8sAvk463tsLGh6gTzd1VgrQmpKZ9mVrfWAz7d7BpuVnawC",
  "key34": "4YDX8LSTMkQLqYk9AF89sTKaRAZY7GANm4s1ZiGfidepM4mTwfVMviKweuCm8Ba6PVJ4kpq3NHpZeTQnJHCBRp7N",
  "key35": "4zABp9XA9Mh1ngUj1sLrNfPMnyV4izBs6w5LbBkGZWSjZR32jEptrSPqTw7KLR7F1BrCPTioMB528PskmFRtQVCL",
  "key36": "4YtPrWuQvB54dBwF4ezxLUkPP3te5BnbSvmdaNiBwE8KSY1R2UkpqA4EVvfEejGLa9rEr9V6KLm3pDezPJYdLrce",
  "key37": "4SBqdETG946okUtBXEAkGe5gSE6uL5TBTRLFpmtr1c3qtqGtY38JFkETrh6x9PAR5BLfbqDeW9sbBMLvZnUUejav",
  "key38": "45T8EDcdZLxBVvMYqusuMKBMG1AVpZbxjoHRgfLZjaZh1hoXCyQVwyWvk6DjXrCrct1ZHweeVNJCbyBHUM28j57f",
  "key39": "3Ut3VLKf24LCtY3z329pYZ6ovimVhWWUGLwXTFFyntEKJt8NcEpfHCP1g9xAy4t5V5hqF5s5RLLUJ512WJ1epGo6",
  "key40": "67BrAh8vtvC8sHJ51rrrge5mwwaD5Tjm8Whv3BRFnXwgAHDEfucu7TrtuzxnFss2o5sXhEne6aevmyusRoiEXQ7D",
  "key41": "dNKYSpxq1Ufe3693jU8MSJSCdZ2zETBVhWZSFep3b6aZrZUNBdR4LdqQJZGBE5hrdJqdX9QDq3KjispyWESEtv3",
  "key42": "zXU28LK6mXEh1yVjmm8pP7Dy7WVCViN2Cfzsr5KoGVYFmLSTXpD9eDATTWcvn8ZyiD67hTZGaEchdWTtgxHSkjB",
  "key43": "3S9KYkCqHwyY3pWyWYykV3DzvuCmiHqZmRpCg3NrhEahvVaXVBmLXKm8wnQzZd4rXUzdQ2kkLbNTQ21MAwUMqYRR",
  "key44": "4C6RCyox5zBT1PNt3LjqACzCnJ5uwuD2J4wffKf3k6vMraUby6QYmQLutCuVHofqXtuxJAPfqNFdjTa5fbCHtKGM",
  "key45": "4Gxdsu44ZXLW8UKfM92mgSdFhvYeF4eufFrWC8G382cZQSST6ZDAvkXJSxCkMxDKokMmEfFRSUqqcLV5cQhZSDhX",
  "key46": "2kWcrR3ABvCEG4qu6FKJPz6PcZokjfw7JPwfXVRLN6iW212VGpS38LdjnLo8NotvBhU9stKP9UiMQv5LjJwHWeww",
  "key47": "3eT7CAJ1a5LDjBhvuXjBCoYg7wYZVdmBNmmsdj3NAdbZD6PT2ChTgaKZagaGNCv8g6WXQyQwmdp215UEKVcd12Fs",
  "key48": "54bsM9kXdwhJbsuAVv8NSb6B6NPKhkxAWyc259ggc4GugdTKvztNoEHtRdJwnCU5PL5Y35KtDugjaXswCnrLqoiD"
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
