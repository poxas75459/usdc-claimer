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
    "4xKQzdeeJQodyyEAGzaisJ3km8zvKv7pHqEw7FCcFoHar1kxK3o8aECu1Fjz39yt6kR3G3VnDuFM6yNwqmmARCC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2DdjgjSpoTaiiXFcojMq7MzbJwswCGh9BLAgx6hNDKjVk1X4o81zbqdvL1YRpcz8VBumC82N2GUEgA6tUWn51T",
  "key1": "3HPFDyikzfnDD117t6RSYGc5WkP9DP3KqZ8wE7mzt21ivDNQfUnEtrroWfcs3uX48sE5tufpwD1LeSMcEs2oiDA9",
  "key2": "2No9mKWKCjZwVkYCRA8j4zVsPHnTGBJCTy91sr8s73TndZ4gxYtyEo5YkRDBBzbaDVv1qxkfZsa2C9XVQpPWn9Qk",
  "key3": "3GXuYjKDHFK8KLFBcHVFRJGTqZ8XmMTd9KZA68mV3SzveYujugMpY8h1Ki3tVnmgZaNGBYcVDb43dXRQDPQNYxn9",
  "key4": "FfopKzSXB1x3vbBcasB2akFPG66RyzvmHEMQcGwVdv65huxX9nb645Y363Mseo7jBVAeaJxfj634Bge5PxXtWYX",
  "key5": "3MyEhWoXT5rVMjTf2MgFzYxFt6GqBz7q8jTPoZX3BJSbXVKMZMccWjZS4ssYi7aGAB7wyBC77WmMcKnzaXjkYYvw",
  "key6": "LAxBu2cFLtNEu53PhAvDisvAZFBRPoCGyXEAs9HyYHhGvDQjXt9x6JPDMW3SRe3ZYeTYutNr2qNNsZKi8mx9EQt",
  "key7": "3V8BBQYVoUCcwBYqYfhyNGRfJGDxewETaMbHgt9BLpK3bFYYHAXYJPzUUBd2nzTUGqdVkfD96n2fja6RX6jaZST4",
  "key8": "2DEgXXoNux29mauU4Xt27cxg2Az6jQSfNtDkZEKnzgR73wLpE7BynxUjvSqnheb4ARdEXM4LiHMXL3isuSDjvsSx",
  "key9": "57nRwqMciv6MHer47rWTf4Yx3HzsTwTvnxQvkr9qgWc2szLjs35uSoDKT3Y4eVKfGng8K3xnKPK3yJT1mCNVNy6i",
  "key10": "2MMQ2WSqwHedPD4XqXWCs9zTufzdxTanymWUwUTyY92bLZ71uTDsNuSqciNhBUCJXaCDZdZaPnoMqz3ssiCkB6w",
  "key11": "8iHZ7CBE9VNGrRRRXF6ZAWGD1mP6C3hg7FQrfLS48nCmHA594P9RwGKuD3g1RidWTiqknBZANKhprHpLuMZQJ4V",
  "key12": "2UEUezbSXR8FzNkAZ1kwSmrxMw7ovFzfLSkuKW4N9KmDZgivKE9kATXxZwX3jd55pBuckwt9Kz3EL9a9u1twMs7y",
  "key13": "rgsF5aBDdaezdWvoWpW3WHeMuj7LZhJW6CoagpivQzGiBpsx11zDs1jXis95UKvprZT2yHNY5fmE4kJkACxBXdL",
  "key14": "2N2bGujGjrb5BK2vTTk8AdgWHbGjuCaDnHbX41PvjcXtMcYzLB56nCyUeS4QsWah8ky5AZdser2UGHtEh4pCH2sJ",
  "key15": "2Auw3fQWx7VvTxQgSieSEZNzN3faFYMy1kPLxFBKXeMgQnsGjN7mJxnwzBHuXH5cURF8HjRGncqkxtm36qgSzxTU",
  "key16": "4eL3bZse8xtttr8QgAAwW22XVBGZibGJjNeXzXJnRfWzpYcRXTRv3jg2i9YSPr7ZFXETd8dr7quSeAVZzByVG6Xs",
  "key17": "4LZ4LLY1HmVVJKSNDrCpgdx6xBsSUXrLpY5upppt77EkuAM3auvqR9sUrHRKFSeLmHzoi5wi1MM6L1rgQCFd1n1s",
  "key18": "5DMV4gfxDo4ZgeJz2i67X96hM5j7emEgW6h4CD26Ur7PhTfxSoicDRSJL53C5tdonk2BMmJ6MnL5QT43o3BbrMu",
  "key19": "3eSAefz3TUzXMsuVZSjNyyfDAavtgwB6C8GKgJuGv2Cdx5cT2zcC5Ey7bMpRDMFU5Znphj4hFGQHYD7VvdyE6GY4",
  "key20": "2AgDFwpvswLXCFKSPhwRX9FrzPEEQnFzTrMXQcHDXkpYP3GyZ8yACd7jHH6vCXF8N3BhqK7HPBLQpkuK3usMDDkY",
  "key21": "2CriTUfJkCNCEgqmqWQDiHiWQDyZZvFMy3KhUxJZVEbWT4bzKQUVabPnND3a443effxE2Ncd3u1VxrJj5aVz9qZP",
  "key22": "3xVHo9RFueJfJP7JXAbxAFTuhjH9ZoHEAq63qtuZte2aAF2xpv9qoXcBV66a1Ex9G9E8e67BqqFgyZTes7VvQCrh",
  "key23": "4hKcQZ8VQ3z77e7NmNwKg722UmYxJNwepEecPq54ag154GAqdMeezigtjTk4MNCh3EMXa14LhTH5bpZTn1EDEQjQ",
  "key24": "2dbmM4FuAHNH9U41pWDtLs6wf1k5i6UCZnofzaZzTQmMN4mrF3U57tKGoPEMNEe8A79E6DfVZkt2xybB3t2s8dnZ",
  "key25": "VuHXQkyGL9qxJNnh5sFQ37EHC1u93dX2u4iYMndWm5Ah71dXGnGNFhX4mwr8QgY3VCvUNguzwJb7gSEYnriH6GG",
  "key26": "2fLhvBUusNZrYCs6zHih43djnuTDL3H7dLQGAdGZe8G9SFqwAD58Jds2vjbeVct75aAuJeV2NCrrQnkt41aD6N5B",
  "key27": "5Yg8cT4VNS8gBLqH2m7iHdfqdFkoDCz1FP7eEjBxspjWBCF7QAomWSGRpyP3H7G5j8thYxR7pmKKyRVQjSNBTXuw",
  "key28": "4fAtKNyQBUkDeazkhBGWYmv1qsRXKjj2xMhLW33b6d8MJ7J4bHUe2rBSwiDAF32yUT7ayZRHcUMALy7AZqvDtraq",
  "key29": "5dmwHdNGhdArqzbbnbRRmDRzxvyvG8X7Ep1LXKuc6ugc8qHtRsyGbprkr4E8eNDQmJbzXQRJJgmgREFtjjU5DyYR",
  "key30": "5rfzuS3Eoqnmpobd8cNhmauMVixWUUsLZ3RerLyNu1tvbn6mRk5UfUrLaXMuENhFTLAoaVtjEfnxa3F2QVosyC43",
  "key31": "3N4cRMrERFjBDSG6kSBQpk9AXzA7fdhu5mjHMH4rQGgscptvWRPx4jcDaArE8e89zpN9fUme9qY19sneoozaz6ec",
  "key32": "3axDCGh68NTtXNai7att8NhmJBAABVMK2kMDtekjXFmiFidV3bsTm4qoCy7EHm1cSoYsqAoiR1HFZZwjT5JvxwjD",
  "key33": "4aAEKz23ffHVXTzYZf7fucFAfXuggfsLByVk1TPksL6UTTpWd1Gazf2YCWMQ74441xfs3LL8q23J1zb9ZoAtqSf9",
  "key34": "4FjYbz36a8HUCbkMqeepSDuge8WGf8qWyWAKVhcfnkJQMprmnbxzCA3spsrFhSkjujrX8PX1swru1hJrzYmZUjcm",
  "key35": "51bw1QPNEB9JbGPcbZMGQcC5VKyerTfkXjkrBcT7EhZt2Drj5SqYrq1axiZETQey9ePfTaT9yCf3ShYAJybuJQTA",
  "key36": "3RjqUoGQT89Cem2ZEnhk7GAyqLVsQHabLo38v4WhdjQUB3CSDsNCtqvR9fKuS9K6Nmhbou15hedkbrgJpLuhuTRY",
  "key37": "3hkQ3d3vWcgvm1phaMqhjeHdxFQYvxmJn4bZGZde4VtojdnLxj8GSs3qcG6zoP87kgSv5oxrMzAD34KqZDSj1AXL",
  "key38": "3BM7a3XvHB7ZH5ARYUmAGpCJwdW4fNNeV2m9Jh4ae9DnQxgAsWrEvKF17rExLtTeL9zk1fPyes2BA48EEJvsx1vJ",
  "key39": "4ACVhvGFgsyH8NE4KgSoD5Z5sXJTTqeW9DwNU2yoKtuR3cuQbrNzgQfMpmpy63NJjLYkmX7bKWj94aBUMLYsP15g",
  "key40": "42C3eF8HATwtQzWut6GhT8yEEztYQPJJWrhGNPGYk6mMG1KdngnHAcx9cTVwH1rNeVart5LJfawaCrY5ufGYPoiC",
  "key41": "2jyTWC7bXXopPiBQZ8EPHBUsGZnrTLgm7NUWRgPE7ns7oyzxAmLskwANziLqZbKYVSRmb3KAACb77aKyihMh2ZLa",
  "key42": "4L92YpgEPm3s6SyMJpfHyEaZNWaVDmFC7km8jHGe3FPPFuSekV2FP3fDpBi2Pd3UhfbUJLCEG7EpwfG7VTFdbjxM",
  "key43": "GiXbFdeAg3qf8Drifzm2KET4MUpgbGGgFJuMAeNc33DFPfn3agFAhuHq2Hg2ZGYaksY7v1i6Dtot8Ygnm6yLc5h",
  "key44": "2RxAetz7JDMXaw2szxe3QUpwTN3fHV5VXT6SBnjJ5iweFqWDzFBZSEvCBPx7utSbnT7HHMKev57HP8AFNG8kZZiD",
  "key45": "w3aSGQu5eMqDvvjThA5JNj6iU5ZsR8y45DLoL6o4k5TtXeRGz3J1u4EkLQVs8SVykeBfwcY1HnNgA3yd2RXyJfA",
  "key46": "36mZ7koRmZX99ejSYDo9VnfcUyv73kvxf2VSNTi3WZKtxW48fdzkeHqdjgoUsvq8HcvDE6r3FWU3kqCNAUnFagNS",
  "key47": "3zjjpbjrVAC6Li39rUPC2u4wmUhgs2DrcXtMoqNqXwm31YZZ4fZNA5ixw4Wh6hDPyuASpaLGCLGDidqc9H1Ty1MY"
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
