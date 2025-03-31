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
    "2BebjWKfGyFAYdJuWXCF31ZVeDKmdzbbwKHmKma6DhU1pGEadQZmWqdngA1KeqC76b9bQ13Aa24G1FDztnStisBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXbHiPymPB6eJTgbJhkdkPM7xDvcv3Xi4DcjCnXPCceu8ihctSqqbWYFoQFMnwHqFw6sULGf1YVKCLaQfHi4yRE",
  "key1": "4xH3xGR6Y9dGfSzKMA7xtxhkLCXhd6ftLFVWd23YfnRReJnTEbpV4Ceet6Kc9m6uhyktuoaTLRRYhssbp7j2byhM",
  "key2": "2M8M2UqVdBwCinbFqNPt2QXngu1f4NKwLfj7aaLVoy1UTrAEqFM594XJqTKkx5ETwvjAZVA2yH9HB4NHJhEPu6Er",
  "key3": "5JqEoFo1AtNoHdmoGoet7jNqC7rVFHv68bhCLZxH9oTLMTyTrovirFMxAJ8FVX6m4YxACzbPxihjSj45b4t39j7p",
  "key4": "2ngwKyb4bd3PPGRHSegdQTuhNHCZZnbYovUSZSZL95kKXV9Vp6LxBQzvb7BZqzFWtU8gjbMo8LTYBDkjX5ApUSAm",
  "key5": "2Fap83WTwNRwE2NhYyRVPhXcjCVJLdg6kv9tWij1mcraZMCJ3k1KVcCCt5qnoP8WhmVVdb81J7yxdvygcvQVvs64",
  "key6": "5KWoXiX53DxmDJgGZzMnc1zhtcgSaC6kfgZ4javCxNYE1fw657zQ18j6zbCVBB2VXFCbaVHd8DmbZMEaNwu8jXWn",
  "key7": "39YuFL5raBWd19HD8CCtJtTCE1MdVCUkv71T26Zp2ZqZSXAWKLTZpXLmBG6CyLkRZJfwYfNDjrewNYwdf6RJNxRa",
  "key8": "343YgZ5swHhEHCzAtGkvL8fyR7irrspcJKy8RjrgqQuQRxKVQB55fmD8LDYvKBP2ZHHkA5fgG1a9apnjVL6iXrRF",
  "key9": "3xa2xhCuVBGeHBgbQqPNzV7mqsLYzMRVB97pV3MPo6YaAePR5V2uxR4qFnD5MNffgCNKRKLzgJJPrVXUwy7yJAND",
  "key10": "3ri2HpkVsUWa2m9jorrneN7Q42ouPVbzanA6mhbzKhNGWNGGxMWvzyvbCg1f8UoZt19YMUS8ZWgn35JAcEDiykYF",
  "key11": "2oQdoE3RCZFXsDTmDdrfjfW3ktKLTXpDcKuMs8GnSgc71q86uvK5RydizwiHdw4iR643mVfJEBwBEPYyyDBVpNwa",
  "key12": "3vKn8cwyTEJ6wnxRLEaySKkxKirT9UGBUpugmD8a77RH4h5TCB3yqfbZSzazwo5q9BoDvyT5gxJcy3BRHK3328Be",
  "key13": "4i6xezJgTgwZgUcU2BK9Skre319VuJDRv8G3fP777ZcqjGiJR7vVzg8VEd6ymJMyD99NcB4ymLTZfjFQemN8tG2A",
  "key14": "51Z4oRYqMQZos3gJqHjzFb8Hp9izWvoBYxXjEH3Z8HumD1SefjYFdmkKxLwKCwydhzBCQaZ6JqjFkQYaz382ndkQ",
  "key15": "5HmeXZL9L8Ycwj5FDRMVifh9scW3RrTB3oSinZ9y2URsxu8bDFM6kWBPqvox2fmTP4eR652EhmiwhVXBhfBDGPgL",
  "key16": "3jNGFtxwd1Vjh4KPQUxGLUG7GXUtv5KJ6NLkCCtAmPV6ka3VKf88c2s6VWqBGd1fLaxD5VvVWFaKYAga5uKeQ9by",
  "key17": "57bBBUoX21VWM2H7hUc7VcXe291UUxcJps2mLoEwJKD4N6qeJX4BczgK53TQchx2zzdo3GihYLJ4d4x5H6ahKVCX",
  "key18": "3FDWGa9hVpdoenbUY6PPJNNfiVDxmtzzNDKb6ZhRkfMGvNUo6a7DAhVp9BgjFMzzpvXgBa2dQfMKKXDMC2fPxcRr",
  "key19": "3npBRMmTe229aVpcL1Hewyc9r3K6GjvDUTdZUk83fKo4ku6wTWHaGAHAdYYUcwNCSoWDqaQ9Rr6p9C7NbxbaEDLc",
  "key20": "3c5MrpmhhiVcXX7Q114PD5gDuYDoTSBgcFZgYUp5UDDcSELRG1SPLDvryyvXdjJqQmtcMmJQ2mqy1rSkL4nyX6JH",
  "key21": "32br4gESZC3Drm6949VpVkw53g4JkpH8BhjwaDnWbqRt5jhasRQeV7q2VaiJFNdMQYFKHEU46vrZDU1qUM73wAfr",
  "key22": "4k9mSSgDKzEPVVW8em91MSSpAEyU1RcSrNxvMRK1MadEuRzF3bL5dVPLjyJfL751isF2vwjmEL5gtnbKAiARHayj",
  "key23": "5iYMNiE29q3zw9arntFei3g9UAsnCpJLNX5XNYVoFSCkPBXosHdmJfogncYQDabzT5LHePi3Cp52KbDUMAE5pTz1",
  "key24": "54CN2xyTZjAjEPyiwEsKGR2b9tEQG8jHnnzNEUKCjRFvCe8uyk3JZUvGCCyUTTZHkxZeVeFuWnRYRh4ohLBBdcPw",
  "key25": "3U2A89PKhuRRm3ZDH7dStzqdgPZcfsb6nznVVKrPo7Ty8aRKo59x8HHjwYYy22hStxdag2brFALRCgXmaEhvCNN1",
  "key26": "XFs1w5jP7zpGhoTbKjig5JMCKgqrxH7DyyuQy4w88Bg9NvRge5DCYsbiCKjH2x9hr6vuaN2gHMfp7PDtySFhdpC",
  "key27": "3PwpdLQd8HtG7sddYCtkqZWUg29kZs5FKgdPQseR4ihYKCJr8owy3rqWhLA9LBYAgzjGJRQRFxeeyMRGL6msRNqt",
  "key28": "3Xd5tRgowBevNVRvnxJ8kTYBb5dbi34Qqu7kR3VfpAwGQyTMPA8AJJ85rKmvMNiyu1QfvF35xs9LPbGLFmK31JuR",
  "key29": "5dLFPejhv2Tq3K18wAYYApcqQaTDKXacfsJPstZM79gTmZKunzGfHu4gyVCJEfg2JmpCzBb56TMHMbwkrmHgXRcQ",
  "key30": "2WdXAxXvxMuH25TXze6QiUbb5tUpwtjoGSXC3Tt5GFpc2MS6cyqctfAJW1Qkw9EqqiRCeB7q4XHvXQfkREoFZqK1",
  "key31": "3yLWukL3K95iC1p1akpc27i28wcxdYPpkMwga6thCuPhuh27hSGPRLfQW5q5X56cGk92P9yjc9LgDoKwqDz6Hxo5",
  "key32": "25bmqBZLEknRdUijY3X5mxyLvu4EvTy2VjgcN54LCZhReR7oxfMFTk4Ly5ktdiY2dbcYi9m4HFuhBjhcyYZKzRN2",
  "key33": "3XqmVYn6RWNxCwdUWFoDj7ywX93HSZT3Pg8Kw8QjbxPAs6BGUkhWiaTgoDY4JbDqbCWuLJREQaSXeALzdtpoQKpc",
  "key34": "4wNZ3E2F7RtDFjv6QUHnSEvw4XqnYRqwZmy7USV6236CM5zFhkATR4RFZd8tdRM9LZA1UEsqfG15a6o8A5ULvuTH",
  "key35": "37eRxHvFSnaujuSWuTn51qGySmqk9NUJVTxpStYd6cFQ4Aq5uZtzjtYbnD6NtPM1TKEqASTSe8QB3ZWQwbinNrqr",
  "key36": "4KfGb6qaUfvmuxXZKbNiG3Z7EKLd2LwXkS2Jw6EiJVR7bmzMpu5msR7ec1xHngwbd6acefHxuc6z5Sme2pzgYnEi",
  "key37": "2g4DVe93ofVxzhzGaXyPEu2SVJB3rS7RgUMaak6HijgTbJSc65hv3vgZNu1gjFQDwEFyAG4UDiit7pV6JBf2v9as",
  "key38": "nPMY4TjwDbYxqqVVALKM3faxXAisLGEF2or1Vx48YXTCqAF4ZZHaNag3sSCmCEBBmMta65zuvRWjh7rkw67sday",
  "key39": "4TzngyWyzDxLVQeXqGSG18ExgvzCCL3CyDbXj4KwdqN3r4VJUV5uf68Lk3M81h6R2KCmoh2nrhq1ZMw4SE5NEk8A",
  "key40": "4jXRoazzD778jy7p4uKtiiCddLJptK9BVdwvkxuqNzqmPomXewPwGEUnVogirDpC3AgpQdYjA5dCAG3RGpvXoA9M",
  "key41": "5NBtUidS5Pz8b9WMd9PK1P7ejAYT3iA5eDV7iojWMZzx9Rp6B4TagSNqbXUW4wPQj8kQKRLxZDuC7SRmKes3LtfA",
  "key42": "59xeod4VD8DKSNcqTjVGqD8bytJUnvewgFQtnV8SJM91NnYjunPhKLCpfE88Z7Q5izihTixbf3To3PEMkCjs1M32",
  "key43": "2Ewqrn4WdutvoVRmg71ofRPQVtT64wkbuo2SVbmkxH5ARfRFN2V8MMA12Fekbd52HPbicw7yygKUTmeYAD5uWpoR",
  "key44": "4UAWQeQ5B3gBmWEccWgWxGV89ES9PY1pnS5nr4ZyJh4Xxk7MPGppRnEDJhgjCoUTFbiZvgPxFVSBkJHyzhfwr7CG",
  "key45": "BsNZXQsipZddPZcQJQ7Zq6PgFu59RA9tKxTAsYac4akZgEC3uP1agP7Qr9VSTzL96m81pShm5JiNxT1TtfdmrVm",
  "key46": "5GoBEtXfwKQ2QmhVzTm37vpwMz6aSDjoC5UT6VDUJjs8UMv1749KEGvN8D4wmXvL7wPva1TMHkwnn8uYwTLA4bCq",
  "key47": "WqfftejCBCbRgZUcVBUgw9naJqMEXRKLPnowXztCUpGnHeSWp1yBDqknG1L8z6SGvQHR4CzAnuPvpYbWbwJ97SV",
  "key48": "2L2HibKH8o4AyjFbaUFHt53Va3jSUJhXj7rdhvHNUbzgS8fUXoWV3MNKVSf4X1hWDae3PGNhGQzd9vU4PYxTug9e",
  "key49": "rt4RPxQgrGLXh8q6DR33j5zxFqxjYKR4qJcJmcyhVXp9Qcgi1uMBfAJSqvzxHbtETFEGkagWM3yzyxH4ZxNkA4w"
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
