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
    "5HWK4dSAEonk3MAWk51K69Y4topkNEYizsZawBGdqgewoG8QSkaZAahGbH2M3SUqzT61TvaCU9tge6VtgqUYb7D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vw8iYmHsHgaQvh86ee65oTEAzynxe4avMbDHtMg515UGhVoR83t515HFhCGgJZ4VaRtmoo7FzRKLQDRMhS2mYA1",
  "key1": "67MrTdHUxdYYJutVW17Fey69uTSmcAAx1AEL8qfUhvbrdR1M7tZrtSnCWqwnFZAgtm6DBEQ1uUTWwDtn1waNiHv2",
  "key2": "5RXcy966gyiWm7MU2mhB9qs2X63K11TFZSQy54NZedcSPKgP1VzeqsWXLkmK1XCYFP12cZjfAVDeCH4RgTjR6t2X",
  "key3": "4TwBrNMrnk1um4FTRbGD3ZeZuP5a3iyD8RG9pGpZ9qUmvtHCk5kn3VLqmukhttJT3Bv7QuFMH2cPxXjUvaxHwgeJ",
  "key4": "nw6wEW4uFEqqo2RWdKsEvThDokAa76qpvGqFXS9j3rRvgbDA14AxUvNAj6KeVMx1yZooS3AVCyYfec2u5pa8M9n",
  "key5": "iHVSMwigybrAxPUGGAwbiDGbVf7V1mBJvTdNiK7Wpyx3eBqZpzVKaZ5FwBcVgEQUPE2dkg4pDuixvgHaitH88ER",
  "key6": "4YaJ3VjqDBdKmSmCh2yUAA932JRBzL8XpNZzpt6fT3ejjK4pEJLMkwG5YRvkjRQHT8qEyZYAcHkcLU6yHDjXACeX",
  "key7": "2ThKeRPxtG5hMp9KQKdp7xNooFNWNk2RhKgNDw7XM3nKTQaswCJztYT8aJbhVygyKXsKwaBNbprFDmekMRDgVULr",
  "key8": "ELSLdBoGcirKRvdzyXv8DoNkqkdXrDZzBKMB4nV8ebZ9zsxDNXofwJzSqTUgf78mL6fnX2vvNxX3VXRjFPKK3DX",
  "key9": "36Hjh2ib8VsU8Tv5h6sJkkbZMyjD8yvsMhZJ453w3rm8vh4vWyTqYzzKphdRADpBBM3hN8i1SLFeTMX2uGXb43Fy",
  "key10": "4kwzz5jcFyJZst2feMspdJZUSwEsmpYSSbE1sja8LeCh7HLpqAU3GmN3JWevD7sKjVnLoGzSSBNNg4YcEwzckYAq",
  "key11": "5hLv5dYDfoYWdTb7sG4XRVe67Y8RPQ86rYYf1LUvasPV8DjqT6a2XAyMuVEQZ2gTamnpEXkQoVmUMhNNYzrZJSbk",
  "key12": "LGmx3TxxMWv2atxsUo87yvxRgTBgrdL4BAM6u85g78f8bFhRaMoHx8gqod3iocdsRtHMPsW4chQFtkTq4ujj8jz",
  "key13": "5xZjuCZgHD5Vc4jsbD7onc3TfWJaQ5iuFRatS5DSrNmmHAqAW6apd7xUbVUnaGp4L34qEMFEEZUDeeD7ubhhFUdf",
  "key14": "63vQM5WWiwMuY6TYcnfMkmGBgSMpUDTfrfcoGwfgMLKqJENFUv8ZkrwfG5LvdC2DSzjsNv3otAEbSTHaf7kiVun6",
  "key15": "473FaEMBRe7jwqbq3fEquFPkKVYzckewce3WLr55x678fHf98b7YeEvP8vWcJqn48i1GnrLvy5JZznnVa4yNqQPv",
  "key16": "2cRLqxM1SPuwTBcza91c6a1zWbQLc7q2fDwjHBFg1p3zZXLrd8giBFjqLgCuVxffiYd6AnBtSgErxc5tQrYWFwuV",
  "key17": "nr7GbMVzy2iC8ooqJeFT1kZNYKqgsRckNMBsZUejsHuMXtfPTjovn36D8eXinUAkFv2vcS1NN49BbWqzfgC7gtQ",
  "key18": "4kCkCX1HfsAqBCMN8BQxrx2vnxUeMpcDDkhCnh5ALjw67aobGqBksCHxqx9oQep2unSXhPZ9wkritvtBJJjMpYzx",
  "key19": "57byJVim6hZMv2gG4aCwKHVgzQVGpnMwdDSU1MBgupuNTLaA4YzmsHjLPKdccr5os4qT3B8DguutMuEfm5LihLgj",
  "key20": "4DvKVZejJrXdEDPZZ26T7YTP34yEdzRL18Q3XYPq4eHxL5HXMPCK2bezS1x89QpH3DACmh5srJ6dqnPJYzvmN2Ld",
  "key21": "4YVu685UETVKZkxYSFAP2uFePuc2XuPahsEAFskZRFwX9dk7K1YaW9YuE52wQGP2xcqPDq66HjfowFDbDCZBGJ2k",
  "key22": "5223oRz7ajNyZcpH1rvjg4SDs32FWAsBsdZpdCdeGSreSqu6HVcw22xRGxVjc5cqA9nBaCLXj7M44Vwf3p5JKgLV",
  "key23": "5aPsC8S6Ue9UPg32Ng6kxkSjxiVg6KEjZTShhNvMEbnzKLoVHVwx91Nh7ThKwg3mtqGyL4C2c6oUZacQGSwzqNCe",
  "key24": "2cdvwSUC7XXTNES8REPj4VteHoyXWqPq6PYedrdzQJ2QSmGKaokFytqxt6J8D9Gbg2xzTezgHFCXMva9UzLkEMvd",
  "key25": "31rELpsso4kkRY6UetBRPtkjRqsMNhXaqGpTjWFE3gF6okPu9H6bKqWa7zieSNUj4nroZHk32SnkYyjCSDrJjTHU",
  "key26": "4NGcwzKYwguAkx1F9sLyaC346QJZzDan5G4tSafKaipCsZAuh4YqPkMhgXzrfA9SvVrS7TZHYkzD3e5GadAbCp1U",
  "key27": "3Xcpf7e6pT2GJYUiFwn3L7MoyTtBfNC8GDPq8rJYpQyCsEcLUjGrZi3rNNUPxagd9xJqLXoj1Z8exh5SygRMWXHb",
  "key28": "4EQ9kpBf1R4Au9fYMUqndX3XrxcJQBDX5Sx6pVzNj7wMx8KjW2uekdtuM7K3xD3n6pc7mBfgyT7ga7gMA2upMBGq",
  "key29": "48kL34gzMGNjjX1o4ripWb3hLBiktg6qapCBX8QRxyLeoLTsgDuJHr3VZuA7JWX68QoCKTg2Kj53GC96wHHXyyXi",
  "key30": "3bE6M4LYWeVV8JdZXk7QRjFULNAup5MTbyBAkqjHPQwaSvxRu27YPKuEw6KzLmwitA5nG5WhHFqnnqhUKxX3Rg2r",
  "key31": "5VG3NFw1RFbQgcY3bySAnUPv4KjZtidoY1QLzu9Bz6ojrk9Trmzk6Wqm6knUHucPQ6F5XqBNU334LcUybi34EhPp",
  "key32": "28tk7kPyfXpgy1Wm5Ewn4pGYFJ7yuYwBKSLBZm5q6t9HeBiPPB6e1noWJi6b5KBMTNoN3bqFZK6w4Uc85cgterJj",
  "key33": "4pzfJKDjPnY6YRcRzpE94WschM5VLrvKGSy956LRNDPkRnBXqrqgpMdedjFr45vnhdQUHLLmEr5nemhJF2r94zwQ",
  "key34": "44j5jhuWHBWgmj2Q6T586tWYxBVbwwMnUsazjTZyukBdKPN4y8Lg2mmm1wpWFaoNWHH9WHbFxHDQJoaZtPWCCYye",
  "key35": "4YmVDfE7mmuGwmGZsKeLKMaSewyYNNHG2d9CEpzjDhxvr54Rpwe28aWKqwEgKQgE3jrPm5s79LG9ZsHigaG28xwz",
  "key36": "4u7MvU9QJPX7F4c3ZMnERtArRKdqiT78ptEVVQfujfCnjHxezBJAZaLd58vAaYweixdo4nmVSs69M4UQge3RR9V4",
  "key37": "5ApT7uxou8sfsv1zZMj1LZio3ExhnGNBR2Hi83PBhxMCJVkiWbp98uqPCCn6dasiePTF6pjYGi4komebCppAwJi5",
  "key38": "DSdaKe49Ku5wvCPXCwoVVfbDBPDFR7kUVYS13BLmDeBjZKhXTtmL6pXrVWyH5BovUjzTBmGzDzemEcmDiRL5uZL",
  "key39": "2xW5xP8M86vUWhxM1ByqeyQ9W6dSpk5TL19LjCKBLHtFcpSF4UWsgGq34Mgo1k1WWZ3j6i8F9dYioMS8rvMPeZVQ",
  "key40": "47qPqQQ3UURo7gcHqRi7jxVo7caBV66ZNpAmxDCuQDZnndA5pF8i9pJeQ29quTiMnTM6B582cKNgsakTnKuVHJbm",
  "key41": "4Qfp1B8hFeZcZmJszcfz6Xc3ENGpikk25B3kYtfj7p43VLFtSqEfWmKZB9FWELSQNa6KtASTyMmsEef2GWBLsSbm",
  "key42": "4Kjwe31nRzo6iWpqmsPFJbAGyjZusRQd2oSiEqLKw3iC2hGdfenVj48PnNL6GMcBMMLhCGZfEuga58oDSCA8Ei9c",
  "key43": "QNfeHd2DGxn6TvaDvZqbw3QzkRNfdFCWAHrtW4tLgn5AzqSUeUyWERHZXyGAQBCesYtKyTU12mJy32Cg8uXdmh5",
  "key44": "3G7ADTuEbjfTSrUSuw7fafyeNidCKmM9wxv3FZqFR7eBVzbj9hu91jMHr92dHiaPs4JkCtzASHE9s3kJ8Bdwe26e",
  "key45": "5WBYPHuKxapArH5RnwJT8yWJqTimK8By5m9yEG4fNCn7DWnrX55hQqqJMk4q5Pg5SEV4zg9t5gMc9xYFPFW1xrsJ",
  "key46": "2K2yXWJNQtk3YWjqrnkTaeL992MQKYShLXPC42hUhyFreBXTdDnTCyuHhHD7Zv7p9RYPZ1aQYiUX7ee4uqU5rEum",
  "key47": "3vNyeXJzE7mhkrmY8B2w9iHsXw6AkUT8UxBdinJGPRkAXNAecfNikw6BpegsmbGV6vvc6BVuM5eWkJrZPV7DiPB6"
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
