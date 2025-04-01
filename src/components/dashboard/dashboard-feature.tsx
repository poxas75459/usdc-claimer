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
    "5oDBbrHb2QTRwg7Q1Tw8RJZSvnvZxQhPLFGoYin8rPUFfUbCtdMjR4FxioyNXxV2T5t9LBNGWomAfqNjCz9dcyuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FUXpVLr1s3bNfhtLHZfuETZjSKEx9fWjEq5nkrf8iBTmo7vEsNAvxjE28TS1tAXsFNgCPfnUsBttDMn1m9U8zRH",
  "key1": "63kfTLX7DE6iURuMoVnz9mNjPwVQGQjFETgGRUNyHF7Fb6rsNDCjYVaGEwPo3QPV6XP619MtM5CJK24d7xrjX1fa",
  "key2": "2gWymydWRxUDLH23QeMuKM5mrdtGMKp9yZKxw4UsvvGS3FonkPrwp1yGKQjzfAfJFGU9VfYCURxw8FN3npzh4B5",
  "key3": "28qkc8abAMEQjtqwW4UvTEQ5uzLz7W8cKHkGSBwB6UPJcdCtYKCFS2FjgAxt7nM6S3NSnmdsub1gMpkaeJJL8A9u",
  "key4": "oYgJPYL1g4GjR9JroR34uJsAnmnmSQUCkVLD1EcfZn9gkQjj9tENLaAy51MSWPbrg1SJjUaPxmn53m6s1qiTYT5",
  "key5": "4LkiPtp4jegU4Rhr2MSGJr37bptBoHwJbnvPecUAe8Pg8eRk7KgmUdZZMjjfmDgvfSt2VWrv8GtJMUxi3SMJWNm9",
  "key6": "2H6nvF1XknjKxjTRfRJUF4tudYqPoNTi9skQfeEsgek9k4YPvTTVqWKekQ71c7bimwmrVoMALFai9YfmcJsNdef5",
  "key7": "5LQGbSQW2yJQvnck4Vc7X61SAibHQPZ9L1skF8b62oFKeZLqyFKcSkVaGsxdjjSQg6NXR2MFTehho5Zrgq2mxFEv",
  "key8": "2QaMM3GzqTiF7mYw65p4zM4vzUNWCh1ycQpWfEnpxRDr5y1HykS3bB3dw8ZuGGXRub5vwMKfBoLozL5wy87ypiZf",
  "key9": "2iucMF9ZaEAhMQcKxgJpMHCCZfjXkdSj7vghrfnzq11Mz9SCyA8T1jBRrdfjXSQMSYwbjuGA1vFMTmFj6azuRebL",
  "key10": "2McgzLQqWboUVRdZHzPZmVQAU5CXffmmvuUbqDDFB9RZ6idXfVZ8XSGiE6tS1tsmyPHJtxJz2P3UzHSMpkR9oaiC",
  "key11": "5B7wVb475UeaetVKC5zV8tNYQAfEgAeBA2xLZAZXvmJpSz8GXU75Nrh3CtPsCUx1mFjP4Atnj4F3WbYsXNPqS6QX",
  "key12": "4Z4vGqVbuPGzRLPXXX9BXeFxEJieCybfzYJyjN7SJh3sippV53J7kYGJdxiSVoo2dbfQzTRFsGTWS28KgxYYA9hK",
  "key13": "5PkMhdandmhPtp33F2MXVDpV1KAuFdqBin391W1obnNFrqnAL5bDH3k3rtVJUVzgEUemGKNxKQL7Wo4gCqxZagF5",
  "key14": "3ea5DVUWijh5Vd1Snqzv8P2SZPcTGPeiAL5vX9BFKQ672RLzo1GjWajxQBS2hhizhgFih8ijQDkktJEt8Ye4NV6V",
  "key15": "PbWDgqdbUMUp3qBts6SdyEcztGqDTqQavZULP8aBwQ88HqrwvYhdd93SpPJmfspybAZhYYxtYiLDGfjNYrWqrSA",
  "key16": "2UbTHXKF734jHhcLHfagDmZF6ZsKsSSnttXF9qLRGM42cCVgoGECbUqyFo2apxHVmXtcmNBoSQ17ddPfQFK1H8hy",
  "key17": "3g8x618DFMCaW7ehHokxsYHheLK3U1PicgdVJQkyq6PkvqY7KiJvduN9qky1LDyLeJU4Nrv9T5fYSyh8CrDowSP",
  "key18": "47M9zsAg1RhR9ViYFRRYmm2iGUtA6B4cjCunpMSyM7zpBeCmuKK2bcAM3hbfRiSAk4zyXH5Cm31jbiYM88H6dVMG",
  "key19": "9qNvzzMwyW9x5r8HPKTfHNefcT3QS27QdH5SGV7NvFWzzxF6ES1c7sSfLzpER2W2HCkSsCBQHKMrEm81KgWrnVH",
  "key20": "33rx6TB3tT6BFuNeVPUVSDeTbmYTgYPBqf8CCphZxnw2kDvC6Ri3kMU45yWNmxbTdCcaDusCJQG2NLydKgDuYqmf",
  "key21": "7HUn5F4WHFEzxRoQq4ZELawC2PknN4uPfJz4UYgapiEwTt1rCKs7zev4wXxqMWq7X4hi1Pbm7YCzGm2xiAardZb",
  "key22": "3FkDtSKMLT2H3y16jHcFBvWE7mAXsMNmC7hZrszp8yr9nFSSnsRWi3DzzFAhhio6m3U5DK8JFF3zStnszZ3RcYcQ",
  "key23": "25Gt5LDdMYF5WHrJiJGBaivfcf9dvdvviTQsqjFoq7FodperRi3ZTgz9bpcd5ashHLH73q8PwaZWByozgkyvj6JE",
  "key24": "4JDXN3TR5hZjfn7482kZxwZ9wDjKNTwR1rdVbymtgye55RjyWgt341iQ1Fvj5DKF5DEvHooWWadSeMesreMnFV2w",
  "key25": "3SHsdgw4yvMW4CY57kfS2WEZrJteNy1qmks2UX6cXWgFiEAbtLyJqg5GA8ufrXJEYgTeeJUSt9nGjZHh9tRMu1JR",
  "key26": "124hibaPtnJ69JCc1HDmVZhmisHyuqfKrWP5LZU7DnbDNCJptA7d8DkUnTSZHGnQG2TBETJbNTMXoHqL7egv8Xdm",
  "key27": "4obVWtwqPmHKSFKb7QDc2fZT1s66mEUTL2SvYaWwYuwDf3EsmUnAv78aZs8G4zBbXdDUfJwq7A57nvMBhVYvqunR",
  "key28": "4pKaorLZeUzQDoQXFvXXGL3dC2KJHmT2o3qkKTyk8JZSCXMM8Wg37dB8aqgK1UzaFcCyyLSDZVv6SaZvXNYku8qE",
  "key29": "fYUvsWxsRvfrubPKp5kdsRUFa2icvCq4bhRVm8HngzZaHf1ANuAQHCPJXirZLTRriVjoXZ2PE6tEKvwkrCdnLrS",
  "key30": "3uHG8xM5oWhfJcBJ7R3TxJgEc1HutdKhqEAYingu57DBHMv69kWLqABrZYLY5LLKMXeV7Q7hhstBV24BCdeEJcmR",
  "key31": "5eJ9sSe6HQ2e5Dawr3ZQBkZa17Ko6M2BVvomuDv5CEc6AsnX7ssm3JCnjz8r5mcEtyKgaDLKMthudni5f1pfTMRY"
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
