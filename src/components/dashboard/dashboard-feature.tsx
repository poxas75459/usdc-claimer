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
    "4LWdQ7rWSvzoJthHnhsbwF2zNxk3opDk56uVshvAA58JevaXi2aocGGd5yXVMrBMhDRAJs5oyW9QBSUeTXAVgfz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXRVw8AktwSFUaH1mRK8u3NNco8TSyUtNRi3Qa1vHeMGDWepe9nQa1PnvK3jdG46UsYX8JbQnTmK5FwP3EA6A6o",
  "key1": "bDBMpEqyyWBauo3bry4kaBMtMRjoQfWkavArQw6MeGm3NTMrGDRueDxRgKuN9MMbobBSWEz86XuUdQYyRvrNL2x",
  "key2": "5G9m6gJ3uLGL1QHMSEmExXFXb1u9a5wZK9QRcgxgU77WhAYsWSe2vjHmCXPpvTMLiZQ5RFxYYqsNCjmwLe8KvQm2",
  "key3": "C8cVsNhG33wLaY24kYLUh4hAdP8fBvkLshRd9qmrdWyDQ3ggSSdxyGsH9Xr9U1PCrNYaFzKk23a4bnKdnCZRVFY",
  "key4": "4SZEbJVSkTexxA4fscfjwCcYT27xgh4n1rAbVz334EMA57U5dXqxEiJsdCf9HSqVrqHKZhhJGPNkYnrvAktuVZ7x",
  "key5": "5fE9U47CHrLaxKZxMxdkLKrxoahrZ76jyoL7HJqshhYw2AxonYLQEfzYSXj6oeJr2FgQVbwD1Q76KRpmEvjk3hwX",
  "key6": "3Skynnb9he4qxg3CJCYGXCAUWmfkdCXa9DwKCHiGj6rfdKuoeXd49smN29zM8vAWfP9RrAh4BVn3zCiSgpXL3JJW",
  "key7": "2cyFjHimgVd5TZkfHUzPASx5Eqp7QyPRamhhuh84P49iNfx5qBg5tyoNS9uFZ4UzHz5rZuUxfpKAWs7oB46VY4wY",
  "key8": "3UWSREf84f4EBCNKoQvzkYSD1EfMnjsjkBohoV3r1wxdPM9u6KzCGLCEyAwhc4qDqB61bHSJeKzZd66ceMtmx4Gs",
  "key9": "yd2mbJuhGEi78RpBRXVgJbCP1iaevwQ8tWbNT3J4tD8RexC3iw75KgUGdJAi5iirP8xTqjwd1Jw2AHuzh4Hi7CW",
  "key10": "5VBHoPzRiD2NHxw3UubndVdxFj3ZB7J7qqdnTPEZhBxvQz2oddpxaVJ4tgyYW6PFhk66vDPcKmxufSTmmgdVYU9B",
  "key11": "2hxYGTDUDhFFDithkdRgguSVkgRbcbhmD3Pubiw1J5nXr9epRWvMYfSVJFnXP3Pty9BrqQWmjhM8SD9FSPuCANp9",
  "key12": "EVpbexLARDdNKiWXEpszgGREaFeAbVfd9W513D55ZjrkHQeRyH4mmMpw5fkjtEagNYfS5Yrc67ekmcETaKKU7Mp",
  "key13": "2NsFjBDina4QMv7ry1ov1qzLLtAmKGsTSyPTHT3VXFYV9Hw5NUyr8NRdekzBuuHasuvxj3vXFMSiT5tfvgteVMcs",
  "key14": "5YNsssyFgGVPtjQCMYQKeGcWoQWfSDhJjP7KGdVsShPUdfpNgbnYWkbbMs6zSwBo8tv16NQBGNY7VmfP3hMQ7EQC",
  "key15": "3e4w5fzJrZtfYBPS3PeBYZKMuEGcs7Va2rWFMmTACNaA4QLTvLrrH1c7XDwrrGWuZagjH3LAtsfcMLs4EzHTnG3",
  "key16": "2VxFekCYbQLt2w9hsAyoC8x8ShGdmTyfA2f9EBaDoNqv3LsoSxBU1Mtj3QszWfUFDbBvLMTPKRY1VptRTajEZLKD",
  "key17": "2s48JuyaBvEkkhTE2YonMZaz1mM3XbmjV4QdUEVzVGaDf3nL2JcPi9GbNC1k9EVBB5qXt8vPFDN7PaC7m7SfGxpy",
  "key18": "3YGnFtGZ54DSWQF5fZqZxY6QNqqdRzRu9BTCY2NsK8xaqMrJT2hH6MvKTvTNyrokJA9z1qgsKaNihCsrDnSHhjcy",
  "key19": "4BxnmE18pY6DaUi2CjbAvf3vyqSf5Wtx6Xf4VAodEam21D2HW69pKmLtY4A9ZYSLThBwXSdyNh4eM6LoZmpcoc1B",
  "key20": "AGhcvYTEZP6hZmHjBXfS7sFnKwsKcPsTtBqvY149kVH4ganuhywrKgTPJryzGLcmLisdoUkUQhnbhEprpM5zQd2",
  "key21": "3r6nhyT1CJ7u5nTWcRaPMFGwuxGr9A8Upq99sD4cG58scJaC7gHCHNcdbupXACFcySyt7Rrn19om9ApagWgqNe1j",
  "key22": "2ER7EC6peeqo58GWiQHuAuZSAun5XoD9zrdGLRsQ5wEYvneun3FiC4CP84apS8xDkpGwjLw3pYzpvuKbFhmgwEjV",
  "key23": "3FSaibPNgQZADRY3p1R8xsLeVBDcGoCckJtar1DrqmR4JNhJx25GxTbJZveJxM67W3JvDj2GPmGfJSb8jbeneZUQ",
  "key24": "DTjgqLuWq7BEHjRXJn5mKoBdfVcUdtdshorvxw2y1VHQtkaNZif4A3TniskGwCyMyHY7Cqfxvue7vtygbrTYMvU",
  "key25": "3rMZi3gZoqGMTo7DKANW4SMm2DLbTZ3A6CW2ch1KaaZLxnWHqkTSQvSdEKafpftk69WYpvKJYRbKKLdmFxddjeX1",
  "key26": "2cL5TA117X9jhgrrQ5HyPqVHHqtW6HvHXdczZjFi7nZzHTnZvATgkA3xtqHxrEKJEp3prf9MomeNEvEcbigGm6ye",
  "key27": "4AAx1PSUyegwbXaYBa1YYiysb5nMGYCuvCaCfb81NLrz271SDePCDZy4XyPnjpahRKyL98EDCQLjFKB61G76DdWy",
  "key28": "3w67FKzQAZTj4LxW8SgUtx9FTzvxh3wjQv6jdi6Q8WptDcqeMcE8w6GLfvfdx9kNMGpTUPBbuUcMw4qfJEC7Fqc",
  "key29": "jHpMM73SnDN32RLa96y3rDcW96VgxiNs7BKVUnPn7XTWqZ62Sc3K2TM73gKv8W4XeMXLs2fy8UJXU5okeDBw5mT",
  "key30": "4WbV6qGu17EsfeDGGBYein1f2T5EnovyHeGAyehPSXaEBKSPFKjhsSVR1ZzTxFnV36qrE3KCvRh1ZibjvixVC2Ay",
  "key31": "2LWvN5tr1f7HxcA1F3vTU6M7eYZwfipDkTrQMy3sqnmnnt2NyXESt2rP5MzLNEC9v56FZvxZXzhPejLjBYXouJXb",
  "key32": "4nZF1CN8WRWWVBzUQ18NGtwsAfZJZNJCkg8vpypMJwhbQEkMQ2neqdTc58GzUukxTfX9LcVvxvexXP48DJ1PADZs",
  "key33": "27k1MdpinYSNDdxgZWXhsJuMHoe5hqGkz5nvuNQ6J8kgBrWHNrQoqm4uHvrUhHqtJbhFp58yfHb8DBxYKHB7AhnD",
  "key34": "BTCpRFcWBZ7QNPkVBeQp1urTSZTghKRbHsVtoVyR5P4S2jNz4Q7EAWyPwXrAkLsemtVQNEYuUBxLbgtVzKG3Ax3",
  "key35": "5DUJ7KkyPN8affLqyRaDiHwcLoKmVgoRsbuwdZywPox2qPptVBAEgJdySags15m4Qxe2xUqfxwv7LGqCcZYMXWob",
  "key36": "4FYxdVEggHF83uUw5vt8a5FWb2YJhArhAgKMsPJjEmtWxGE1yJhqyAPMDdgaJimk2QV1NpNANR6pRbJWAE2rj7r7",
  "key37": "2sH4WYYjMhcbuNjEiEieXaFwJLs9zz8NW6Mm732MFvcfuKUwfk5SA7U2UzR6H4VkqXNt1Tgp7dyD3H2AbXR76sjh",
  "key38": "316Rwqdsx2eFxr6QRx7pa1aGyaEavdZR19u9iKh66vHpLX4NES42Vpb9Qqzu9C1VWLJ2hAe4H9RFfkeB51H1HhyG",
  "key39": "4gdrsXG8JXhEzifQWWJ45AVU68utKyaX651eDsxPKCueC2LVUKa3Sb8yyNK25b5UGU6P5Zcw8v9c175N1kDdige9",
  "key40": "4smBr6rcM46Gna4vkxvTJ6RnWAafu9CQJiWnBQyRDUVTvX2TcmU1PcYPiGwP6axA4HRv7LHT3YRrkmt5kNF3Mvxr",
  "key41": "3VtaPry61fxLuPXtp81R6nj9LvBv75QWAE34VouUDHgKbQrrQwiYxGP92TEwqwLGVGdSH9Pwp5j5U8dPxJmYqMw3",
  "key42": "4xeRQW9WchMZJBT5rF6p8fQ6EUsu9mDurrzNm1EYS8KWffUGvq7pKRko4zV1L2Q2zVAi7WyUkiXYrtcxy3mNgayK",
  "key43": "575R2Ajttq7x6ZbMQAJNt57GoYrjAf4N4fKknwphg7kDWH5pKPC6meUAL6J9TChcLmtF7fsknijfcY9Gqrk82KzQ",
  "key44": "4y9iJ5FKJVoeXWLT3sYx7yfCnd5KTjSf6cdJ9DNDVn3vpEb1YAj3DxHDN1G2DdCqbYajE7Hm3LrtaZEk12URZ3Nr",
  "key45": "2Cbt2SLbTcUmVajxfBymtoGnQYqCiiqKrJUU9L3Rkq5KCFaDv77Nae5XJLGwZJ93rRurhkfgf9Tp1iPqNxjipFqX"
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
