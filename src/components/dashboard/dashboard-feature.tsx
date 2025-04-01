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
    "4LqUe8RXzc8nDHcdnBpGfB34VjQNk4spXodV6YSGtrV9DyuBLGRYfxeDr4ekQu1Pn6F55zPXnY5mvtfKLqsP7nkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NpAmtW8MqYrW4sekVJngfeu8k2PEK8q6k8EwrcUTN4NSETF7yJQeVTLZF4B73HC4g6KZzYnkKyXYDPksT2vk8Q",
  "key1": "3rP4YZ1tC6GHDEkp1pBid7oHJA5samWsAHdLbDyAAke6ESHGXfa3NC9jJAXrRWxBmmBK3w2Lx2weGDE7HETrKA6p",
  "key2": "4ipkaRjMLf4XyCqjwtdXsSXYmWeYprB1T7QUALPBsZQnKYp5HtkKA1WMX8Vht7S6nhatiXRZMYgFA5NbapC8nVnx",
  "key3": "2GhmZXqMpxKV9gXcbYBSZWPzaQW5QrN8Yhf32LUHSTLL5VArCesZUdDDEvN1eWxxrGmhgyNFu8sGJscpAgEXQaQB",
  "key4": "4eFcPV5CSqADgQtLypSHbx6tLJ3tDPMHgXgNy4pzJst1SXNdsihfCbF4mjxZw5nF2X16QhTFNddSVR8VDgUkKW1Y",
  "key5": "zPMjZjZjaGrWQZVdb5ES8m42EGtyw47z5thd8qbydN9W4MAGvob9sGwadRfrR4aXo1yZo2pQFrBfvcCfG2x4xp1",
  "key6": "4S19s6aqt55Liyq55WgyXB4TDxRgkaWpBLtGq3dAR3ywuwQbUH5sqjHKPdcdrAyZGVAPxYfJRcV2NgphARCjCEwC",
  "key7": "4qdcAAYPvFYzVi2ZW2H3haFWtGNhGkH4jvcLSKSuiYf1FXZKHeZe1y77Xm54qLtYYWxc9uFfDdY2RUF49z7FxNcx",
  "key8": "5miG6S7VmsNVyanQTtjJA8NUapNvfeUfDk3zX1x1P9PJ5szUP5STccKtMNBq5u4ueBT4bkQdaYxuv32kxwkxF6Zo",
  "key9": "3Ri91V3LRsmmyQaDaSv3eLLMF4BNNTskwosentkwoh9QDQh41DcnV4uBjJuFsBicSKmuzbotjFatKTxNQteY9xbE",
  "key10": "5s5JtrnwMMH9rU3CYsFrRSvPwRSt5n7LGFHSREXq6FgDmPzqVkSqzMmHrHxmjpwXP4uoCBo32TgpWAERiTkZmzJ3",
  "key11": "2NtZFoDpqZ333rwGPgTv7B45q7xr9dGixxbZA7BCoZ16AqCcjjUSpYbY7TuSydM3MrfF7NRR7Ft2fHV6KZcqzi4s",
  "key12": "22u322vtzLGK6cqgtz58ECn1ZRBLNp2nDi1hdJyvHxzxyTEPVSergvqccCFjZ4AcLaXvb4H1nxdU1zfXZWQcy9pR",
  "key13": "4mTVJhgHxBH5gQhk7WYbBxLuaqQ2JfcgNsLg2qJUG7HMM6HJH59dTsB57XcAZoCNq9fejokex6nxDufQ3N624Vta",
  "key14": "3EUXb3vNjyzekrwBqj9v2Wi8tykKdwabtABbgDRci76eed6Syzaht2x29axsU7ooBPeW1shLAc87AqzQgXJsJgHk",
  "key15": "55sTJ6kmyEaBbMpNT3NDdHtF1ZrebVtpjRs5eC7Y6Bz23erFuXPHw8yvuRzd8W7qEzuv5wb9t1Ug991YGDuJa2ou",
  "key16": "2E4eWxFXksvanL4PGmBTvkdmzAPipUxVUagGAUtvJrMWTSDktZLr8j6zC7bTUxuqAmUypDXP7uprYNZSNmWTJxEP",
  "key17": "XEvpmm1RY9Hf4tfPvgtU6WmTfjb2xcCc1S2sXav5AbMzQqeQGEoeXPG51YmwyQJZJnAXeBQqAWPAySiWgRZNGwC",
  "key18": "jdPbs8ghgvQ48W6rxLa3TbzDGdjJTCpFjRdmxr9TXuAvwXKUTQTq9Q3szySDLFLVGDY1Vo3k9QUt8Qv7iNY6Yro",
  "key19": "PryhtskuMDpx4rnABM1MVmpUeSn8tDbFBbe5HesPGAfjB4TiiqC6p4TDshkwPZmB84bbv58z4qS89wnbHDRP11K",
  "key20": "3CtiVQoq79Fao3czd1tVQdstgssQGYAZjx5wcf86EKVWMdL9KMwTK9fVmor5FVBsgaG9DMcbNFazw9ZspTBNqwXy",
  "key21": "2NFLtEUxY56Kg7k7bAPsSW7bCHJ6vLzWXK4ncoLEPTsWc4SVWhZu9RYWLjNhEXDZF8FiWcvQf1VQwePVFzxZsxcG",
  "key22": "cQfATaYC3xktt9N54bHqSoXGDpoBCv3YYzwqugXNuj8T5ajg9CUXhuspzPPu3R5w5gKDHNSyzeyYZSb24AiiTgq",
  "key23": "2sMX3XiBab4nYhseQFcdudV3JYzEbW8YiJDdP8wcqb3UgYH1rFfKJ8GK7cu9WMN2yBKhgPD8sVxAsvqY9NhDhoHY",
  "key24": "2DVTLfwBHjMoYmE4trHgTuDWSQMpc4LtPsr8y29Dcb1UJvRzsY834gwUvoHnAtFJQezFbbnpxK2C2p7Bp85NhZjo",
  "key25": "4qjzaczgWBLUZRkf6RtXZo9FAhek9oEwaxWk53cFrkLF2sk78UBMufiPQJ44wYbt4egnavJVABeuDFfvtrKBmMQX",
  "key26": "52ruJe56muh5ai6tPX96rFdL1KRyineRZ4S5VV9B69KFJFUhM7iTM4v5HmajNEQw2dLJZwssn1dXa9gVqKwR48Cu",
  "key27": "3WwMPo76EnLXm5N6QSuARaZhSykTzdJTe5Dmy4xgD539W17eh3CnxudE171WwADNZVhVKtyDQrFbkY6e2EBWRWgZ",
  "key28": "TjiFQsaax2Gtdmtq9wuct1FQV9TN1stBaVxfUSBhuRrpYeQau8eoccCko9126EN1JujWjg2sM5rfPocbTm3PNtY",
  "key29": "5Ru3ySnuYJmt64oSVmT6sd1Js3DDjiygS6RLwetWQsz3RPxvKwuH83PhzZqaAi7cx5Aqi1jRAZHwS763KA2SVB9H",
  "key30": "5JLvanY4a6xwtLTCT2WENxkDwcpN9qUJC5zeWxXJ9AiFAMfdXXzfzg2uy1jzfjqQ874aFNcdpqad7WeEyXBAd7rN",
  "key31": "4Q9PC3xQZswwVB9gzsZeRM7eMeuwFpRDUjVrbyLiJVKNnzW3Gki71mDFvTHi6XUsRBRG6fNfLEUu9KtHrMVCwxZw",
  "key32": "33DLH6wLTGa5ei8wRQkM19WAbMDpN4VXXJQQKy8rKheopyXNukbYzbm2ZmFDkjdMiVu6oDHGZeseMBkcbroGTF1u",
  "key33": "4EKGueSAGYDDvDodCcuuC4nbaHR3gbV6e5uvWG7Ueb5tffHp9vZPNk6SWDVMGTYiC7pQihtnMBbha1AGnp3uqHnu",
  "key34": "5uhNX5ki9i4uSoEUoNfkZJWY1DrZSA9EMkNzofqQoyMuLkcNAzhbaSjiePe6gGoGE9Ps3ne13ejhy8E8StBezMpr",
  "key35": "2zrtadRoD9n5wD1hkaJaZoSEJhgrdr4kJF8dc3mysjnnrZuMp4Wqrrf41dYLmzDhBpYkEy4cAwcq6HWVqh7c4XGt",
  "key36": "2da5tTjb6upy2vBPat11BTivf2n1qTMjcgs3d4BhTXE2GQbQtdppQMJy133tWoJDVpyHxEwEjmZ6aQF1nqkHMq28",
  "key37": "27iCu1ULxKtctKBXDUGymbRd959XCo5Z3C9awRZaD1q3WA5AzCUup3WxQgXQuqjcaHCREtia1VNf9gxZdoND95hH",
  "key38": "2aswaHGEKA9iMuJhdqLJg2y1M2u5BV4uTV5gZERDWA99tpzSyTCYt9q9pkmgPT2RnkGWAz5Ws1FzqE5xYn8k5y7q",
  "key39": "2MHCsNvK8unxcjrVzjuoCioNBU993BhTtjcZkjGKWUEnkapHQcy1nMzg2kE94Zy9DjXiQDFAfyxpwrPUT4tehzwJ",
  "key40": "61mpG9yQXZG1Z3GLLe1btXScpoDRPQEi6HtReAcd3MhJ6c1S8c7oNg4mAVmo9PEyK3KHdLWHUPWGLboyZ3vYP9Xr"
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
