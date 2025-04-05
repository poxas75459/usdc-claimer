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
    "2BcyjFcqNL1Temk28V2NgJryKDbZe8Q4j6iPfoYnD8Y8YK9fraBLVW9ZDFZvDAgAQA4MDBzrYTadnDgyjM3bAJcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jXuYnj8X7Ypna4n4HfyPKzvcki1ZSXkYbY5KdHNhF26rCmA1u2AMB4C5ATYM6TTgL81nGmuiyA5BYjos3oawDXs",
  "key1": "5BofNuhb8nxRg5kTmjrL4Pa58Y43RS2hmfEeie5sThFsy5peZw6PpysX5PRumMiHea9L5S9ZnVSAxLkSfhgdG63N",
  "key2": "5WJhsR7tJMgUhrLJRP4Ey7B74BoR6fboRycx6iY9B3v14Qo6jd4jct4Axr4KqmE7NxuTRU19FPfZgmHzPWCszVH1",
  "key3": "3rVVwF7Q9WxKCYbsakK2kEhW96gkxm13gefsNrGKwMvJee6z4bRSK5DFBg9skb8thycQKFhqSGchsYR6iy1dgRNL",
  "key4": "5QUqVRbnueDRjfAcm7epz7PrSUSEuvE8wno4i6QNvqVDqt3247tPbmDXHPQRyzXR8AFqPt38DMivtBdEWiTWc3nq",
  "key5": "2r57kDubvFEcf6B6aAkKr9cyqdxkYvAnTSDGpxRe7c82T9KSp3bq4w1GiCVVWWpuVNfyqZZ6kjpNMn1raVUQQv5D",
  "key6": "5hHB7SArMwZ5e8TE836oNJPjybkhBnhrkD6ihq9kReVGKusVZtqDoTC12g9FjHLrAi8QdRe9Uqf5SLpafc5iwULg",
  "key7": "wnd497uHw1BbxVi8bVLQyQnkXVYjhuMpYVWoaZRDU7HH8HL4UGxvECYMeZDNm9zbPTzHHdtf2P6f9Z3JgZayvEj",
  "key8": "4KYK1BfAVaKS36uF7PmtjjzaPpEMB4MR5Yr8Pi8FhCWAogT6oG8BYqUivcpy8KXahXedgVbL5kfo1jSP8pe9ngeX",
  "key9": "39DjXXqiyHH3FYHqkroHnadk5y3QL4ab6btJJTGLVodk12GfGBTtfYmPQKw89ZrbU7tRZyQt9L2SdfNgEEm3fCJb",
  "key10": "3tSALuKid8pSWzabFMjFSWQ6AYaNLatgy1hKDtwJnsu4bvhGN1vS8J6Y1W3aE8ma3ZunToWSLa5JxPg7NuBHGthK",
  "key11": "5hSR1zm1idM3juNsULbxvU8NRSBcWWUjopQHHFvQys9zbXi4WxaNWoKsecmAfDhzP5RnPuPrZhHmh3CeRiT2f319",
  "key12": "5jewYBuJhNZGVME1BHgE8C96sGKT1qAeevDSjv7JcVAmGCawW2QFfJY8U9KA6WwYtJdpSRHJiC8qXJcu1S3tQVND",
  "key13": "2f4C7tydWr3DnEYVnKnRDa8sXc3oxszVpvtMReWSPFT4QkD1Fo3EojZGwRSnaLAdSja3cvhPPEsNMjtK4N9eGq5B",
  "key14": "3Vjdmg8E4a89mg9AGWTSfsUos68o9tVY2uQUeudK3oRM358bPiRJKh9mUMu2aTjgNNE5JjekWpZzk7AM1cWWqSNr",
  "key15": "VX12AfwXnh6bWJitgWe24tZsUJRVi72LfyFnof9FJDXV7wMVNEpWRgkbFAFEzt1fS3na51RZGniJcEFSCqqCU7T",
  "key16": "5EvreGbG7Qe7MbSEmTsYM9KamkN7XvYtSJN44AebTwg4Rn2FHmeVv5TEiUiAuirHEiDktVutYsrsEhXKdz5RGnR8",
  "key17": "2cKP6w1bxuBPwFgdMLkLnMyhayzhCsBpEp8svev3hBjhkALGUEQdnEYk59W9K6BQeF5FToGU92hCBfYLFdGgNv2R",
  "key18": "XVEjuXYMLfrDrpGbGXkX2RKN9dowKmXVtNWrq9uQu1sqAVYWjSZ53DArnE5gD2Wkw56ap351RcR3HhRE9qpepUK",
  "key19": "4JZFBQ4BjDXrXbvuwZyCAmShcEK5hSGkNHPS5FLTyAkSnYP7vKhiaC7e8VmogUmmfNRF5Pt3GZKjwYJUEaYc6TMj",
  "key20": "4mFXsZTf4Vof9VeUjrXqPCXNpKrRVjQCUuPgScsCL8UmtDptna9pKDsK1Pw2KhV6rkFqQbc9d7KLkVpdc7r88die",
  "key21": "HBrCBxa9B73c335FvuibZC7oPcSFWXJ4shjHj62CuHAhRYVa3pdCGxijpTEx2ej3bst277bcFg5ozr1ifbVnjhe",
  "key22": "5BbYqS877V8FnPbdJCerq1FsVuzedSwXX8fsJu4hF1Fd6FznMhY4Hw9mf6NG8JHeeQB6YPmHEQED9KY5c6i7Bj7v",
  "key23": "7peVYYYdLpPrd1TGjLF5zoSos9D4bPn9VFsEZ7Xm87qNaH2iDWsvaUiwSKTkReNkt3ifbnFofc6SQkrSVEocVRQ",
  "key24": "LS7HsuYDvLn8Daw2hbZsRL3Fti1RtW1z9E331SF5R6zzKDJRhPzkqjVPaFe82U8uNyhGEmKjCZK5LaGu3ahgmwR",
  "key25": "ZCZhSgwYnK6CqrFqGCnizv3EmcHwDuWU17bW8B6FWAP45W2Dsn7upmeBMVKCfe2eWohKByehyK7Us4U8aU7vs5v",
  "key26": "2b8PNGpjK28pxF8txpEHno1fivYMMpd9exLmpAskCauPr5oFT2LNWHYdVsUMzQtmfa8Vgm3z9NZdf5Ah9hxN93R7",
  "key27": "4bUL7rcQtiAR1AzF1F2YYJUMwpYeT6aBhtsALzFRrEQB52QcCv4A8AyHnnwwGT84PLNd7zYXer8y7zbA8QLubJA5",
  "key28": "XPVJ5Vk2x2TyokxJvZMc3hL6osVwK8hfkRJozyragEyMAYkkaEo1butBn2VKf4BMH6fLC1rdsZHNvina7JnJ2Eh",
  "key29": "2epH9qQ5eSYYZ7FKCJRZ6NnGjVufX6onACrrudBNqGGSZpeYANPv7HmKgyBHABfWjNJJQSQRxZ7SMrZvG6L3ssNQ",
  "key30": "2BTS3FgR4YJWaEajjiw4hPYKRaWqU95rfyBRVJ5fLoFU1EHztq4Q3t7Pr6v3B5kmeabRTZ6gnXvrLAEoAiopdX45",
  "key31": "5HPWc5kNBgpv4iR2KVf9PicAaMhUTN2uYqTH7PLT23aJMFndS2jYtwoXs2V4s1ShnyF5cHfJTmQXzH21BdyGnGCG",
  "key32": "wCfo62KUjvDxBYF8Cx6XeDCUoZKbRTdd7zhWF5yTdGrVq5zjXiD1GqBWtZzhjKeN88r78BWAzWihEh69tKGtWDH",
  "key33": "ByXmvVab7cGdwKi9Wk3dhnoiFBHyb4aQz6ZGLam6Hjs4ZNUjgqfUkXFLaeMPMrrCKahHfh71BNXMwkC6R5eXBnm"
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
