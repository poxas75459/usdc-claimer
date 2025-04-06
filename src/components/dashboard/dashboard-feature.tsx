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
    "WACMoB62Z4TqGYJajGz83LPDz35eX5cfAe9MJr7sbrZtzfsN9DXuSPggBAk5R8nPbvzZYvJX8fmE2w7eGWcchAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8qjGFXRPoV2CrXheJS1QuTt5FiNkfRiVWjxbZgpMT4EqPZh2jYq36ivB5P2DMvwg3sTmmbuE4EJyMyKZDycJct",
  "key1": "5hZdEb4SqXK3TmE37pXWipTXMYHRkSKALRH6wDGNWfBwRyNv7q4mT1UV69tyBmN438C3D5NqK7VzVEzg97SRnDEu",
  "key2": "2evRBmb6xTjt7oAxW2WjPVJz9bmDPFpsFDUv826xYa6h6bEvpzQyfVAzXqgqpwzsd4xZJwjxvZpb3QnyM5gVcWDs",
  "key3": "4H7Yg1tgCfo569SnEE1JD1RfTCSr9SQpbba237MLsxwofneAWBADo86K9CXm5UBfdRDpS75p4XfdxN14Hh8hxsfg",
  "key4": "3F1j1TKA2YS3G8bd2TLhHnkNmuPrqL25Pde55C73D36qQ2jFsUPTVSX2gYB5JN63hcHbpxuwjGx4pB5yd8mACiw4",
  "key5": "2TeqSG5tmGF6RnG5ymJ3ch4FyTvJzfoFnyApNgVYVGJM3oXvQ5e4uqLWvH45ysqaqPf4UCQ9FceUWtNRp24j2c9Q",
  "key6": "e5qMxeMW8UzWGBFGrDAVwy2ZoBXCE9bQb1euRr9TywYaxofzNpsyqd213iVk8vw4FXuHxNm7udYHgMs4HcncG5r",
  "key7": "3V9SLPQpyBsZmFSfvZ1AGTL44XFGZ7j39mnRm68YwCtRS7rmEUv6Z7LXi3i3s7bjxzY6TkNeVzPeTnmZvZ7bsgRW",
  "key8": "5a37crEf5SaxdHRptHfWmYBv5YqCvPiUaxFyeW9LrSPgqmBfHHfgmuHK8hmWgAtiXrV91eXPYinuuGn3GNSobz7Z",
  "key9": "5RRooA4LwezhPMiavKeoecS89Cjd72Pzt7XdWQmo7C2DC1AsNrrKUC6nhHehtzf4zV5TEy6oTEzVt9K55KmmPv5K",
  "key10": "2eRpqfBgY83cUgLaZqAHKE2wRgd4EYCqazAgmNu9orS3LbBZVFQh3iuzGiLFNncQfdje9cvnRzySHvSifcxcyYn7",
  "key11": "3QSDKmLvdRe6Fq7rcwskvYCQjGouiLFRVNXUS8qBKBka4ftbg2Kp7XDUaz5C8XyGexec4RojCurgARtbyE6GGqZq",
  "key12": "2uEx718R6GTHLbSm7AXRPJRpmh8c36am4TTouKHPQSgkQSjgoH53gUefnJJ62q8scKmBW5FSroAPP2A1TvWv7BSd",
  "key13": "4qWE5vfvZi1oumHCYyTjkAu43hrNZHkinXLT69PwJYqm2vjujNDsawZDFoGxZuXCfuTf2FTXtN5VHuD8752hwyby",
  "key14": "4BdgBmrut3mSkPqJj7YA9QANrmoCANsq6XxFiuGLPa2vSvGv6ExrFf8M3hhgSupXBMgwy4iTontrMntVmETeWYdP",
  "key15": "48HZ3mGuNea5GVRN9EL6DuAFGVqiiPKEiUWHGZscKx88wmtWWFGLSnqeA1di3q9pBL1QLamFN8LiqZ3VWdwitfCb",
  "key16": "4ivBeTamgD7waxGHudSUNf4aYXt54eU7x51HzmiPiU7kNC9FMRFvQMJzmeLRgmhPQRB9RfLHN4vau67mssJwJR3",
  "key17": "48VUh524WeLBi3nygm5KTLa2VshSnwqNAbReP7Uotof5Ppn3aVndeN9keGkFF1YX6Lg7afCsBTFuT3ze2zfZoUBS",
  "key18": "3U8VpGT8tYDqCpo6bF9K6JFmKrbRgwxAmd751HtNU8DtWZL4d2Be34srE7oEURRKDNXzzZniWjRPQFo2SS8ybTSU",
  "key19": "49oqEg3U5SeuZoPd1ipQufMP6d8ibG1pu4HmQQJSre63k2G8EAiqag4Qf8s5BxTzy1ZFTmD4dEQ2eFta6vG3DS1D",
  "key20": "4d5LTDVS9NYjN89haFzAjQbiDBFWzQ6LeaB78bGhGibfGF5DYjJZUfgS9BDxcuz1NJZ4vFK6ipVhYaNVHDPjsPfG",
  "key21": "34b3NnQaam37Vshv89mUEJaT4Yhr9AB7z6YS2m9RdooXRLYSX9LD62taGqKdLAtrfLpuPLZ4aM27XyUeTEAvMWGn",
  "key22": "31uFsQa7pPXAVtM3MxmuWvo2u8DBXq2a7i9pqty6LiwoTvfrgSYuu4syHw29F8jJUJkmQYx6fU8Wu8KkwR7ymA8z",
  "key23": "4yW5qYuMAYboBnACGByhLtbMZvygoUZgLdzkq6iYbuunb5u5adz2ZAZGmRKwKV5gL8TewrtV1fmdKKC6DYi2unKs",
  "key24": "2s2D1mv23uff3f2kSRii2kjTX3PUHg96iNxxkaYEPiN6ApfRYbGuKQPTwrYMaxyq22FCsqzPu1QDPt5QGwQfv9wn",
  "key25": "3UCLtrTEcWS7vMS5rYJ1LsEFkTjyasz2k64u4MC7maifitBAKX8kpLME2yrvV2BvkxPEx7FzX4z8yhVKRNUomLFk",
  "key26": "YNUMpKWKb6FkJWiRbztHS27MvkF2TMjRZtV1sBbM7WNjgUFVDJiCByBaqmBVyroXE6zdU4tbTamavxFZaShhgT8",
  "key27": "3HaJFwYBmmHoxHnXca6xTn4fC5u6KWs5x1ZrRecyS3tdD48avLz8Jjkr3E2bYqWZuUFRt2MtFeiXb2cwDf9qy8gx",
  "key28": "65HpTVid26XhsUd9UgcBEZ8mt8uVLpNuov84YSKGSXjL7YwyDYZoRGZx2D4UVfuCGQUBjxqrcjMazTC7c5sumgCE",
  "key29": "3mHCWWes7wrjU2KSeb2MQPKKp39LSEvXpeczWicPDCrVxxguTzH6ojEmXQAi8hgBdB9RzBdYochxhEykzs9d55yj",
  "key30": "24QMTPMHNxhviaUJydrjG6PkhP7uUS38hoxQxXTXjAH3M4QWy4FaXYQoQSqkw6nTgCqSCmppHJ2LMB6QcXUNEEWf",
  "key31": "2HXypakaD5eKcCidV3Fo8QZhR3UfUP7xDiqmxDWdXMob4P76fcGE7hPtaZxLDz721PaQnqizwSTheyw6QHSn5ars",
  "key32": "4ijDyf7LvyF7YDkRihp2qVbobrEEktAUc2SEEsHmK1hkDwSoNRvnXUUirJDzvGRBB5bk1Q8DLMBMxofkxGMZsQcw",
  "key33": "3z92CbnQ3YoJppSuJFs4qqX1kx9vfPq6ZQ9Z8Vu627jdnsfBVSdFSNmCnQVkoWDJb9Y2VXJ45Asuwo8S3ggtdaZd",
  "key34": "2dU9yPJ1TdqniGb1C2qB9c16zVCRu2xkpRtoQwhgg5feFkgdhUBzoZJv77mDarHjYmrrqj4dKRSbPeKpmSs8TnSh",
  "key35": "zWGKDeMzupnabUyEsamwuUZzV9As7QhuRBuyMjdEvy5X3KAbm99bLQMZP3WSKPbfMT46yxxqrxWVAvXrFXWJUz5",
  "key36": "4XRrGDE6QjxdKMJqhfd4otVwpkhPsngUk81tRWW1Q3k7ByNdorZHCWuAByAiAkCvrRHE2PJWJTjjigPTaxrYSC28",
  "key37": "3kZtBoedAa3JTHCpK7qbGf3Ldazfq47HZzL83ALireJgZXT9i25MpNQRGFMtjR5H94Y68suQfghTTXcgGsHFffPL",
  "key38": "67Pv7WiFEvkXCo1tA1Ybpf4Lgymb4UJ1PGpAyHbbKGN7KQUEbaDFcpJNrAujgqJgCeJ2M79ecb7HNMnvonTJLDDT",
  "key39": "21StXvaP596kBcfkWaY69qWmwbbd6QojJBrhjMfbzGt9abF9ryT93WPfe1EwiyDNJS2LJmxBzVrjn5oeHZsA7Fmj",
  "key40": "2HngEfxZteqtY4HRs7mebSBg4TUVPgpXJvzD5mii8fKg4bqceKLrJNAVJtfBecMVjL1CjRNEJYftpk4JBMfi8Eov",
  "key41": "8VuSB23yh2QvMPEk3NqCGw1ZfaUGYu3FPEDTojNHTwzooEtkNWmdiv3U9gM2qyywrFxRTmUrVW7T2SMeBkrU61u",
  "key42": "3M1EsVZBmHHwuupuT7X8X7od6x1duKGJB9HqMkxx2S4FNvD3ZKhZFMp2oidZDMeNfwbVVppzVpmkTj3SKYamAXQ4",
  "key43": "5AKgVeFckf4RZtbdBjsVERq7VqJ5kXGNsJJP4rTJjYwLQP9qwktE8w4tBc9MzvwUCLSw6z6QeXcAR4dHodD6tEoB",
  "key44": "22kmVBP6oshb9HV3MebadKf7uvWDMdu2m1DZd5SP7228nLEVCYr2tvUqgk3BeLegB9RZFvMXH2ydQX7NAo2A5KCn"
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
