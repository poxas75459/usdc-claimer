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
    "5y9kAfdHGPPLPWvAAmSmSe19snVrggRYtQW5gdiqjARtZHiKtioBuwYH1xkFDeX9JCkUXpMdejmahtyBFuR3xxg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xh5ujS3ionjiKLto9EVZkYfXGnEQLQD6BL9VkUbtfmhMe5ryTe7ebgqHn5uVJvrJkXooz9hrDeZrBryncqtoKsV",
  "key1": "39TCDNq7HuBiAZoNFE6nNogDeYyrqEjb2yVzuu43jnqKYZcsCqWucCuh7oGjiM1XAFbRRgfGTD86bAafN5WoXsBA",
  "key2": "4PRfKfu5wH7bWeVWmP897wiTDhCkbyAbh8ixYy7NbpCrw3FDHajdCWerysnbRyb1vZzR8ULHf4fjVherdAv6LGnr",
  "key3": "31xMQSock45SeVgbMjQxFVCqw8hnrrcopumhKnkGUQ76SE4Ki1TwdWCeLyhxurvMmc8EDndxJhYTgtbCaRuAjzhB",
  "key4": "3ywBBcHz5CrUr1VATLmkXgJzY8htkTn36gUVqFGbiPudingUXGQhTLhte524PdzPqhafwX12HmmJnMAahY7C5Hvo",
  "key5": "Zv2ccUHWjN6cwE6r3ZgCVV7Am4xCBs9zMPSDWtwfyC2Nq2cgVjBdUhF9qZ5EDLmVjHsx8hkSeSMR6QYiTJRe6tn",
  "key6": "4BuQcweHqTXw2YZ5yDZWdyhGCC8EVxAVUFVShJBbVAAAZaevumFZnSGeFbFJ6D9ZRyZSZjcbL5oWH47Qk2FCdyrM",
  "key7": "2ztY3G8uvU2tw8EebLZ2n63zADqqp31PSaKDHb2VtAnCUHKwLgHvLABTqucp5FLDwofeB8pRPXyT8R7PgXMqKujL",
  "key8": "GCK4Kix3bqpJUcxBNLv1dGVRGw5yZcXo52wgGF4kbUzgN45xpJZhdJ1kEf48d7JghEUJz2DeA13mpJhhSSSApLm",
  "key9": "4t45nWsRgbiDtm8fwrwxY1j9qkvvYzSiTvfTa8beEn8kHhthBK4SmYjtAfZx3yZsCtWVZk9LUnrfU5U9LyoGaaSb",
  "key10": "2gGzPNXiqGM66Qd2ibE9pq5aRQiaYxjr6KGcJR6mvZQNE1N3Bi413V2UJoDEE1os8ZxoNxpjZobf2HMZ2mfvQ3hp",
  "key11": "2obc8248HiKfTBWPWhHiZContVmXHCquhntH9H4UJt3EWcrpTNkCUuHhueQ28nXzdTgDNpabm88FR37PpL75KcT8",
  "key12": "3s38cTcyhz6LA9JvBqtYqJLxj5s6CM1aRJ6uwFMwy6e46qZA1kjtaZe9rsjJxCfuSCgV7BeJ5YRoAk6GnfjrMMRZ",
  "key13": "56maxeE7gLzttSSCAKCz3MkiGMVS9ztmNj2g3KJLa8QTa6JMhAJyMHPUqCxpADBcjRShzzau6Gpfs5wziUgE42zF",
  "key14": "2wFEkudFh9Uy6CurRkMBLJjfbgiNp3c1tMYyqcjoHAuopPw7hobpNBoEE5zZnTkbfu8HFBzb6VKeFmuGz1qMDRb8",
  "key15": "3R4Nvw692pMFtA5HKMKtwFPWrZ1zYCrv8gWBSWa87eFReFD6cpQ3ohyb9JagHqT5Zbc6iM6UHqE1izdgcsoJVyr6",
  "key16": "2ARti89jUexWGXNNUnGrBTCkHUm8HNdPNyte9vMBPJcnjjkngBuWswGzgQYsTA165QDBC7m6CBQ7TDNRfCW7yneM",
  "key17": "Y6pWge4AtNqTXnLfge2875aEH1DUfZi5KvQJK4uHsxAbPBVtK98ca4681nDeCTnTet4oqbhWZ7EzTPZe8V83K7F",
  "key18": "tqXZpEUnpcAD3LKiVU7FNek2oz82iUgY6RGxnRtEgXPRmzsMQhsuYfAbdMQv45NCBbLAFZzn4REu8VCKzzN2Vdk",
  "key19": "3NqGxNo9cDzbAwns9s4ghXXg3Teu5C21L4Jxk4r9qKg6G6Bv3sb9CRWd4pTZowASPKKb4pXPXWHDHzToP3BaKZcR",
  "key20": "AVAfrqHHVhV24qSeaRvK5vJVaRgCzi3VPGBaThMN7EWZGa738QitEzUuvcDLJSgCYFYW9cLGtw6jsvZkVCqY1aQ",
  "key21": "3CRR8xJ1fkoFCUNJffJzt9K4jKQLNZc1efAPUELa2L42PP9FEP8DYtgriKekw9aJoLTY5X1wri8G4mf9WexokjuZ",
  "key22": "57yqaeBgtX2iXXUVdQrx9HuTfQa7ZJS5igtB4mdfcTWA1cen8uqWoB6en84XqovptD5HYWKLTyeAWxdFdDCb4VvX",
  "key23": "2AcUHLE6rsZnFe2drWv3HGNKXhPa8n1iJeVJZjFxwjQWGFfZThbmr61XDTodaJkNPvXXNhHsz71rasTkDoCN2aty",
  "key24": "2vZBgLzzysZuuPDyr2vQnG7XqiMvjn62bTBbB9nTBS9q2idbxRTaEw6zBPt4ZLgLWW8wmrdwHfU1NY3A1xbtYUeD",
  "key25": "xLiX3ybCkWFrPwfANfqktfqtTqwa7oD3TKzmt4kyKz42iTdgLck1Ya4qyBeHs1My27KgmjauPS8QyYZHvb2GeuT",
  "key26": "3hVEPfMFAAz3j6VGxWroJ8mvkPKMNe9ZxiNR6Ad2guBSNmLUy6QsRdDQyrGbFBDexwLpKoZ2bKaudnpPSwW7NoWG",
  "key27": "5nPJVkk9A2Ck1hVKZAqckhigFcp4rmmX96wSrNjNpCBivMonnVeJ8D4qC1qA8i1pT9U2VaQjPUQuR8y9bKXteLfs",
  "key28": "2DMkM866316Lc7rSfgAhxEcxi4YBnaBH5RXC97wLkUMc1fWs8EktyNkzovmfa7vJAEHQnC18MCwMW3HwJxG7FMLe",
  "key29": "2wVpGKn3mkEQ9rWGJq3QgVYjMpyENncutgkQXCqtkeKxgtWZp9m5fD91kdv9NkX4KYikj2pZqexcDYrqD3qWKr1c",
  "key30": "KWR6sGBdXyuDwkLVJUrVmQfc2PaRqv3m9WKsFum8nKTciDH4DsVSDjHQyxJ428tiHobV7eTPXxznmGuEYG76SA4",
  "key31": "dM7jfVEZnwppdaeHBXvkcbWqcARzNgsHH613ZecdBh1HgmYf6UEfiXu25SokVNMv3TzEoACgGvx1gCttAN7zZCD",
  "key32": "4RtoPBUexYJLGbCfFx4xWBjQgotR58qZeu34cz2r71TX92p7ayzDYcvLytCke8S4y81wnBxhzqyVHuHovEsoBaiZ",
  "key33": "isxG3RnsCC58CuPFhF2WKyCystALMKiUcdRPkG87tkEpvRCmmXpKYGvcN2PwmiJCBNLsTh9pdFibU4PKc113hge",
  "key34": "2bhzRwmLdPE5VxbBGzhQfTjY7H9vmyGixMGTHLrZ38tujBszVtaqejYkq8PYCWZX1dt9esyRtT3ftz3TbX6YJ2dw",
  "key35": "4Hv5UvPMuubRu31r6Hm8uPXs14drNcNqC45BJVvE11WgUuvEh7ZsAeaH1a8FBqP9dJLyw8gwREtHik7LRzoF2KWf",
  "key36": "2SNXZJNyvB8kep3JutL7vzdchMdRPKV3FCn3pQk3F91axs4VFeiurWZ2Us53RXsHsz1WmVQfVUBNPEQUstMzFWnP",
  "key37": "LtFK3tHjF5R6kDYvFpdGyxDLh7aBuJiWedyZqCEGcMXisAECsY39jgUj5gC1PhUUPnngtDsNsbg79Z22LiWmZ82",
  "key38": "5y4ZiS65KYs3D5tWEP8dbW78UmTbtghRC5HHwi3qPs9ZQzqXfcLz8FsaQ75SBuNmxMERSYq6M8Hok5DS48FtoFdR",
  "key39": "2MiHgMTc5J6gmX9a8C7qeAY87h1jYXELAyS2kpk9fdbpBFHGwgHU4LATuedHXcE81uiDwpEyKMKkoSZpnJqeEfrL",
  "key40": "4dX2otexfnWEHgSfWgzQptPfnAmJEUANRJ6jyitcCsL6chHsFLaK5CbQV13EMTMaf6xFCVZXKt4Rz6JbEEzawktA",
  "key41": "2amMQzXaTQ3qnJEpSzTnxmdgFHLCgiZu57pRrLpSj3KjYeFLGuAAomPTPaxNuqN3PU8GKFEFXQTsFDGNNWeb3SFk",
  "key42": "51Df6BwsWG5f25Uwj8uFHtCxkfTC3522N1Crjxp7u6QEKyjftVqGzGTAmXV5eERv4kUbiUPzDRwTiocNdjFLcxHV",
  "key43": "28V1QnP62CGKT1xXyEWbZ1RWSZVPX537MzYyvJf4c11kNR83Wz6L9YBr1uL644LXSrHoJJ2Pdrhz2BrfcW1Gc7PN"
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
