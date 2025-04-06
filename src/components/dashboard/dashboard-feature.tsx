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
    "2eMhjbwUtpTWBFbz9Am4TPka3tAuzEmukwUsJSz1vfyj1yHmB7C9GaMfeqJmd4DBUkXAzaFr1eqmnQkNR7hRVHXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLAoXxP2ePbKwqmVTZSaCpAWfVCi4bZmMrZPCKiaxRJLUK41vuugjvV5nU4f2aDmCXBStmhDz8c2feLiK6DGYax",
  "key1": "B82Ryfhw5J26uXSQMdJgBGwYgZsKgp719YV6tdiEBnpm6RKdPHvNziHhMB7jR42wBB6k2rTiEyt5ytD6zbcVSAT",
  "key2": "4EfQtV2tzWEfU8CSNs7HJuTLhhPqUZCQtnKS3PrVYYEpM4RaG8VPk6uyFoYvuyKXTiCqwYVSfhEKC9tq6obHZ9HR",
  "key3": "3U8rqSKKgJQyf56LmsVrvnUWPTtX1BVQEXBHBkQifFzghxW7FyUHcD3tgHk7YdwqcEYMNZRToV3yBE1gqa5M4Hdb",
  "key4": "62Fos6WweJDmPw3bcvrTuiiK2qmqxcNEsfxiXZNoa8Zjjhe4ySXuLazw9Nm4Pk2Uvvaknnnu1EiFsqMBm4g7odv9",
  "key5": "2CX5jzZNx512H4Y8GqqkegZ9b6oW54EgRkwLhArtQVwsjHvC585K3ZPq5265Zf47wUS4EzCQJogb8NMRyfr8YLW8",
  "key6": "5vsRCEpKbTKx3YyoUiCNVCxwBa7sFrq9oq2pwjMPPmspJckC4ipMe1dqCcDES6NzXAXNFCLTtFLo9VLunb1GinZ",
  "key7": "63GzP8fF4hqNkPUzyQY1W3gNvioFp4tx7bJhzGGxaanKYx2HSBJEtMWYjRD3n7gGbsDvpeior6bzgHRmV4UJCiWP",
  "key8": "3wNvJ7Rfh8StSzSbNN1zXu4j5DDjMoWASdpfcyomtP4JZ31qxt7H3ZrY11TebHA6vD6mu3nxZ39YuxmCZBwXhhoJ",
  "key9": "5a2FeBCwGQa5YLoC3WvVGdRKif3EFvrB4tAeQXqGtGS7cd99kHiSAiWtPFNZzAiwF17k34MeA6fu5Uu9bTEmEcrw",
  "key10": "LUwXjmCFm95jsJnVPQu1N3hGYA94Uw6xSq5XBoE9BcHJAHJ2cwPihGaFebU8kfRc6oq6sToYwwSmTck75ryYWiU",
  "key11": "5K72j1TxycuzYgKdPN49mmwYiumi2dsBBLvQjmu3SWmZrhSerqnG72mu6DitGj5YGL9VAL729ta8xTSpStgrrX3A",
  "key12": "W4hoocE7AhgQv4YDDnu5iTz1FHFfDjTBKZgKBrs895R5sP2XeEa5p1RTwda4RyAxGL4J763RCfnjEuR9DCQERy9",
  "key13": "2yTT9JPMqR2iYwmyR2Rhn4WDLrHiC5y1nhUmM6sAMWqHYMvxYuSFwShf7mHFbLkGJ1ws7byGuJdHEv98zbUCUMZ5",
  "key14": "3zM26V5B1G5ueD4nnB4Socjq9GxNmsLZskVwEGFhBmRgNftteQfAg73K5GdPnpt66NNBVv1Y4fsSPZcXaKRMCVug",
  "key15": "4EnTQoxY25K9o8nSKXw7SJLsrFdg6PpUzFR1bcpJLGhuTh6zHRkVgzvVKpE1zXzx9Vs2mY4TbzixsngkzDtmUA85",
  "key16": "TPDFrtZB91UbMNnS3KTnd9nE9bpTA2fqM9bHb2VMFKM11tHSnvuySLaoRnNB3uf4dB1jq28GtDKZruLjUjWKnQT",
  "key17": "NbjTQQPMMvYFwi37FKpFMK5mU3LNGGfGBpeGgDxZyjh5kWjPjzUfNkoiA8ERMzEYcz2KH22TU6oXwcDF3Ey6eMH",
  "key18": "3f7TFskhouVAoRvCPnrVd6YDaYRcDb2J4aK6DVpQrSNtpXEMtQXX8aw1TjQ2DANUmBvL6Dg746gwqSjtYPHdjUbQ",
  "key19": "46dsQEUyrfZoeuS5EVjzAzNHTBBoVDYkHceWxrKzEK8Pbdjdk1HhgUyFtZeDBtrHx6NugDBEvyFTA37nwnvDY5NW",
  "key20": "4p8dBZeL3sz342GcetRXkvmVn5kRJDgozukh8z7i6ZRTR623Mtnn2PysEZvFzopRNJy7bPfwdVpxgaZ8x6Cvaep9",
  "key21": "213SNid6Gc2RLJNW9MAbR2mBHHj1QnrbusmzSk4eYcV1q8NcgC5T2cWvWpivWksxha9aXrD3HXvVvPBGsBmUMesM",
  "key22": "4Pmq5XFiZhbPvrozxSm3BufV18wrxAiRoX77Y9UwzcxM9JRpvp2LvL8yeUq27ctZ4ZHrZdtMGpMaoGmAaw41z7mE",
  "key23": "ikbnAuCvBxhrqDxNeKhHybmo8ZzVRMqKRtPwEHjziZyrnwcvyD5vHFeQ3eq1fdokdznz72WkKzSp5q2roQrzJzZ",
  "key24": "2cga1PGWki3EXCS6XUyAMv8hZbRAMrKCcKhbh4hyjBq2GRcpZdutCm2nmVNzaPgjJnACBFYAzhMai8rRRX6ePtAH",
  "key25": "5Px43nRBwmzatjPVmHZwDHS47VLh5HMurmxkLEhAnq8DgJ9kQwPRQPdiTiQBW8pDEeUZLUs7kjLJpy1bEWHHaL3V",
  "key26": "5Yw1GEHPGX6SYhGCNyLGTXGmwYVqwsrjHewSDcsiwu9qJL9P5u1TtSNFBRZ3ba2DyCYNrG5riboPXWeE6LB22XEc",
  "key27": "5UquTLHFVytmQSyhVAN3veZEk2StGaA5qiiQiEg3Y8c239ZMU6sRRvfLqVJocaenngQMM7Ukw9hoo4xzK5vuNAdM",
  "key28": "3ruTeFKY9b5i9iGuxeQS6bYxgfqqCjymDDouKNzuftKTkw37ShJQwGEv6CkFUoDKDSchpFLKymqPQSx4HymzyDtt",
  "key29": "35DckdsfCBTzNsuL262YfH4JGSVgbtiY3TwEoRCqwhdXkrtA5NTJw96NGVmvzgGxLZnpLApYW5yVm8YQPsaYJ8Vi",
  "key30": "3dQgaL7anzqR9BqTZJDAa94EMZadXeM7kuS9WZgkQggfjEtd5oHobCxsLS9A27nGZq9UfecV1VBPHUp9wpgEUTrK",
  "key31": "5EBkrdxZ3RorxBJHcE9ZLhFNyLJrN7kwFitdJvXAmAchDFh6GZ1rZkMfuPcznBWKwVR7tJeBaPcuodTwW9znQiuc",
  "key32": "5YWx7BFU1oiiyb137g4Ppy3aZozBQo2xAq6fGcVGNQDtZtsTrvEHCB9GNQxqVwD5ES4GrXaRcGzfepBJ3BsyBcHE",
  "key33": "3iNSxTxwrwcjC1LpggfY2dfhFpY4VkHHnWLXPVDQANKAPdnYoTRFcLLYPrZ5RgUot8JhyChCAdmfNEHyP4QTU56f",
  "key34": "46wYEJGC8CQHyyhofs7p1wx6ngHUFNBK2BUB9Bkd1wZg5NeC71sWXGxfavGvh1ZjiA3iqg2YW7vWqTUBpVukkbMZ",
  "key35": "2kpXxZgCj3pBrwbbd3wQfbz6HB9Aphy2rqBUh8fQ4Uar1YKgeJBwgiffT2jxF9N1K4GFYxUo8PahV3RyfkagbnhM",
  "key36": "5VMhUewC5zyYPurXpWb1Y6VdtKxxvaoyusdmsFSLzarjv6N6WMAdugNFKLkKg4BWhbVTWhErNuGQiM1e74vntQ3U",
  "key37": "32yLcJRj3yBpuaQmkdFQgbc1E5PSdWzQ3F4f8w6knWcAusbmx6rbMHfGHd7gc2rew1a9hqWtBv3HThr42UiaZj6t",
  "key38": "enuevWHoUo6YtJpNhza2myNDkR6MgnByKKF3kSdZaGK4dNQQecn7q3H3spHicergQhwnMMETsGr59bcuN1QUTPW",
  "key39": "52WA74XC6NTbJfMBai5Duhd1hgtZ3oVJ1SRvgkuBYBPov7KyLk2bpVDfRjvc1A5mdi3WHB3pxPV17yshzgq7TXMs",
  "key40": "3vyS2XHS7osKGuG8sK8diTKfsHQcPCVjhr2SNrPANtABiLVmCA6cMqcdXVpc69c94KURreSj89Mqxhtt6CJs6gDD"
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
