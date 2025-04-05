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
    "3JyRTm4NYFPxHeCQEitbukXsqncVfwQiEL9tDs2THFr6VqZDKFXk9PbS255yeuDPAoZuLJzrJ9CbziT6t7osCXzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mwA25JNw4AFXpKpZ1jVKM9fKJ6dCGGoX65MbDWhJDa3GX5edtsFK5mDVn1p3StGnJPP6mfv7ApHXquWzAQDeuMX",
  "key1": "5wKzpm3C7CYtDue9iLGzxYVt4bb7chGugeB9mQbRQ1feszR3VF6SdEsRwFnAwtCCUVYBc9uLdcSd3PNwGjgwSTPY",
  "key2": "3iER59VdtugYmP6ZjjjmjC5EhZbk3iAaBmaqwdHSt9VNmLjL2EouGMEBv529tZhvyVAyjLKwGGiWVrXqazE9W8CW",
  "key3": "mWGecUNhPoW6H1NhFy5URhotNCGxQWH6Jj9nHXdYWhu76BbXrkVDooPcJLGDR6H3tWDETA7ZjKrfKbUZ4su4voQ",
  "key4": "UQC8rE4AKSMtAd4UERehRFAs7cyAwdJMyUtK49sq82DF9y1gxAvkN1gBKr1NF1dbCuojjKNPVU28pfoavAQVkag",
  "key5": "5rVkm9jzXP2HYCcAsgAkE27Pzcuooh1Pe6MFjE4T8Gu3n7QMgZVkBpomcjnLYQ45ng8MhRuA7r5qKj1UaeQMnax6",
  "key6": "4JFNhMWqLyY6fomv4TkitwN6VfdekPDbFcFB7HW54FTDebkxL3AGp45uqfa1jvVNHk4Avy7VVTcguBMvqCYCbmQo",
  "key7": "4cWzLYytzx6vUucmsTfyTJfjXYkahcUt8j92h91EG4HLqmAEQzEzMX3n5SvHzcdz9qdWWkbWaPmGBJ9ZePsJtJ8n",
  "key8": "MpqTDP9vmw9552w3xKKKQAHVEPPafS7hLNxeXF6RdDoh6KV5EsajQXE6yJkJfv4fSTzTmNbjcwCAVWyuD53n5Ar",
  "key9": "3PswETYVYUpPtWbhu4krjzhXHKYiKvD1GCgxg3pco75DPJDdyLsAoH7fXVQtV7amaESRjiD3v4dygcAh4Ue3EWvw",
  "key10": "5gACHLf2MWCMP2NDSH5LgHPufAtK7wgzhEptGbb3V4JafEjaKn6myVY7keYYD44kMNrWEKFjWd6mPPXTnY2iWYep",
  "key11": "3FJRbYmBSsiSnGsgbEtk4WLNNWw4SJnVz3AsXfW4pe8Cf9TBzQp9KA6ZhCDKNmUKiPG5VUFThm7Rd8w6AK6ZWRG1",
  "key12": "33VcKoTB3o3DkzEfJ6BE9fsapqpPXUs8NzjVNWzSz9U6783aENcDFhrcVa2AzztmhshHR9Xr5awYjgBmJQHBcqhe",
  "key13": "4J2WdXhmM53Gsdd3FiCiX5KgUQbBxzRpKHKGoym7D6bWNrBD9pqCCephyqkNDWfdwp6piw5Sg4jYUukqWUtcaNka",
  "key14": "2QuwD5AkbvPuGUV4PoKyUyLEHjozSpU9RdpYgMEWgN22pJm54CHRLPv78J2zga16KtWN29s3euzRuqmDzKk1CvSa",
  "key15": "5UDNoDC3qrWbCiHagu26aYX459sotADQBjayVg7gNHKztMhVLXfL6uXqtJHX8AZNKya8nCU3egjHKwRDVwz1Zn9A",
  "key16": "57knhfTupqVHLDUrX9hShWfcCC8ZCQjP9HvUgxQ6ZV1DUnFs7C4nLsYBoDyvcpwZaKgGai3GCnntVcSfbHUzjbiW",
  "key17": "287AaeAEsSVZiiRxxLubc8EZuAS2VjtqLbgcVKeGe9838WEexNZyCFwZrcvhNUcDZvPzJnjFBg7KHrnpdmoLxp96",
  "key18": "5wu4BdgoeMTrdpHugP18N9pLZ2hoLiEPXgrBDohHjb1bshLpXw7d1bpp6x3oSjtFRAM9z57u4jqrBU5XLQMJPQ6i",
  "key19": "2CFLQ6dv68VS4yYtPoJ6V8oDyFXu5AMA9cU96DVG5M87ekipjCbD1ikw2mQYrAMuWp3vTLgj1t3ZV2VwPzERDuQA",
  "key20": "4MVBUuTSzDiaJxF1SNRj5H7BSBpD3ShV9ombxr9i23kcZenvXwG3EU1GQnCWuYFUne2pVTT4EpDXxxGgmigyKE3T",
  "key21": "2ZNmv1GQLaKfjeeCKiZq1HrDeM4TX63UW9oZdkykdzLbkUA1pvDarJrihahPCLRsEG6uUzfxCqsYKRPXT3z5LNYm",
  "key22": "41xnbNR6CTxH8mw7JG3JVRiAD6n12N3D6CmRRjJCj9CXTMcqYphtNgfU7z33ToKDfThkiuTfZR7pPEjkdFS3t9mA",
  "key23": "3vFmMuqJaPyT7KXiPo8C7wbwiPbFDLztNRGhbw4PFdKfbt1byyT3zmu6A3JfT68jRhuexgXgHMLnr9yADZKafyty",
  "key24": "4sb8KSFiLUSYcoCK1YM2qUR58j2dAEr17AnDnrvvpWjqP8wpxBUhrxEA1mL9RwwZfGKp6Vp28XcaN4hDqTmbNxjH",
  "key25": "5VPPZVUCvSh9NTtow69AjpEpLLWFfayAKCb4C9TqKgqigoYV1ZvsypqUZzSkJHZTTsL8wFB79xMibZCw3Now6cit",
  "key26": "ZKhhdjgsmF38bDRHKe9EWbWdKFtBjTEjHanBzs1Be11S5Uf16ThGawB5CWHi1upEK1e1hYAiHzh78mHjXNPpLhR",
  "key27": "5wgwnvdTYcHGwySfawmc4U1GuFwwSLRJ9pxJqZCCffQgMh7RfnvoR4iquLmLUaKQWkAU5TRcmYaqRWowsGvhzMCR",
  "key28": "5sRNWuAjNAphEMuCHoAyGegizWYuxzXgizHi5RaeG3JGXYkC9KTbbyohDVquUXZK84miFTKq7SZetQa3FwQrybko",
  "key29": "3XNAeu7kfmj7dZa2HjR16tQ1T9e8YSzh2KHk9GRHvpAFEeahBszKd32GYrk7J9vEhHWwbXX8UwYb9id9H6nhQmY4",
  "key30": "41f9yAAAwQBFSzYUm7mhDczGrEc5FVtyyzwQto5t39Qtufse3p5s1WTsKccRYPTm8TWzNtjG6Yy2e65usfZQgijc",
  "key31": "2NgM4V3D4WqEYgS4XMWd99ghiiAT9bE2TBvtyUwit5UQKcEvhRa2rHddpLfkVLXVCYUDY3c3Ep2wTjqYA7NAGn2c",
  "key32": "2mtFqV9yJqMnFEavgFsyS9U9HBpKb2aiLZGKxfshWSwpNmBiFjcF4ncpicVXwzNMbv3mPEZ4He7kWAWFptnMfvEh",
  "key33": "2i3t49wTgP2DKggN1boqFDyTTiiPZnKc7wUyZUYtBg1anvQH6ok8A1JU6gFY5BkR8z6K2kYPvh9tLGHtprpXNwJy",
  "key34": "32yRxTz2MYunwCZv3o69Kp9FT6e8wx2pyG1xV9chx1FzD6ry3E3ngnxqr641nmUXRndmEdZBeBjpFNw67FqfUHZC",
  "key35": "4LqQwHwfiKaKv9VmnNgaSvBPUVYiK5s43KtuVyqe4PAR9a4uTKKmb5b2XdjwMQns1EHwiEYrmvwww2EKUXrpkRB2",
  "key36": "3kcWQKTJPnYrZDzcfceT3mtzcsmB5NtxshqBhzKXWGPdTYRt5yJc2rps94X68FTi2aDSaFGtLxo2iRL86jTrwRQf",
  "key37": "3SY2s13XWM7wRMTyWrHvN46FyVdNhn3rKkstvYSMgtdsp3xMGPoQFcFXDhFKu1x1h9EKDpwXmG6JMbvNyptefNTW",
  "key38": "yBtUDXWBX5uuK3FUE2QGfgDPvVXyXuYCKxyfKiz44tmVe2PRVnqhGBkRmoK1VgaBKHSThtrqXtTdjYf7q8RMtpB",
  "key39": "CUTtFnuTXQhVNPMfvnQfZynoUeoy6xzVzJ1d4JfF22nCvz1R8ovqQbsUfbNrc8Csn7VKrUcJ1Tev2zYHnPUHyrD",
  "key40": "4iLss7ae2v6VuZSWA9VHCyvDSEbVwDmfdgBFynxbDYFi6iZCK8fayd5K97S6GyNT8EwgWHqYFN9WXMF4BK9cY9Vk",
  "key41": "5omU2S1ZK6oqhVJAwrWd64hxm1EaMKris1JTL84iF3eZsosRDnwarAT3ekAtf5yC9RXfvXqTrDqTx26jv1V3bfGz",
  "key42": "375rFibysLUQ1G1VMNmn2F4KkKtVEUZpDyckweMBbnAvg9QgMK7yVuEZiKSscUzutcmU72FmMZFA4aiK2XqGKnWR",
  "key43": "23xWK2kBzKzZhBnLJmdsefPQYdadsVumRPgThYmjHAN12jsCBADwEAWEofb3RrqNhCReb54k7v2Smh3BZCeMGsrP",
  "key44": "29ePAmBtHaazhxTr83L54cwc4q3EADbBzz7QFUTfcE2dqJjGuS3b4f4XSY2MtqtXYaJ936zUG2GNKgz27fY8bgnL",
  "key45": "3BYbVVBs9XVky4fPSehFhEcEawDKdLobPXakyVdzYCDNoKz1CMHK5zD9xyqdsJQ7WYYrM7NBtyxx4NowESa3beKu",
  "key46": "4MUgPEyzL3MM5qHtSKBUzcHhmYjSh94sgxtVjwBb9kx4KZPAF1YWBVSPZrfqsJVcr1cwqzJYXnU2Wz1aSbbh1s7Y"
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
