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
    "2HGHYNEWxKqe5yBvuRW2H1Xo1JF7UXx88oPzdkxZvFMNKxikqDNTpXebmRFgwrCzhCRsk8rQ3tVynGbin4W95mCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJFDYSFyHd1LBskbVLbwUeZNL17VUrKnNXGKT5v8n9C3vknTRKrqkqWxeck26oPMppaMmYpuGYkQ8gDSKM83tJQ",
  "key1": "5TiGdxMvZmA14TSCZvL5uHtjnDMggn7H6NSdBUvaoVPdLbvMvm2wgzHgX4mArsotzLgCWVZgCzqLHP6BFsjPFknM",
  "key2": "5qKanfQXWqhsUNMg4fQgVuAfcSRTT27Aqsz2XqSCiFRB1gDKEKX34Wg1JQaAKJEcNLCy54Evt7LqPYLFLfahc8qw",
  "key3": "3oPMURT9WVJ6J4bNiWmzFymTso1dQ8GmY1dZfsx4sTWkcAe5mMuGnv1z2RwhVVU8WZhKWCPANsK2cfo5uTg3VAPg",
  "key4": "3ge96QEThTCijcvTu2CjFg6XeRV9D3p4vAXruZMzSvjKZLbeawnY8YvmjBzjaGLHTqce5GCJYT2RVhiKrdVrPxqB",
  "key5": "3MrZtJBns9GNcKbSY8SgnvDHv4c7yfo1Sc74CEjUUn1okfr5xPHsGJUeqFkwqM13zGxTtibcHwatQACymC1s3g4A",
  "key6": "25cq7sqwt7QZsPQb6BMqn3cxC3K7bcnBwBKqmudq1hw51K2aBvb97xa7wL8XRbk9V81Tc3AAJGJhuhgELmTxTdEA",
  "key7": "31iSfZH63rohGwtTmKQfCxTgRWaPR1WrmaVKGSgA9yZ5btPANgmstsbEtqDJMgseBJFgg5PdLpL2dZe2tsW2QALt",
  "key8": "jg7XQJxSCSHtuSK51xaKh2cqvLq3oM2PWKbPTKCVGBXFb89ra3a83RoBhiScU5i3EZg2hBM2FvJcv6EHt2st1Fc",
  "key9": "4PEXwhSgFLHXNq3LBHvJaMeTZhZaiP1T8YUhpLCxmsC2UdgynNHkjmZjsjkFnVcaVFow2FDwmftJBhsQZhpAHfF5",
  "key10": "nDMAxaYYsWdB68xTXUCHT9s6ZYtfdcU6jn2ubuVBGV1sKVHzgx1KcGfcNxLCyfQWVi4xgxnnsjwhj9Puh9joeJG",
  "key11": "4wghHpk3qYezdmZn6RRe1nWXGR3t9vtfqegWn9bPk9Z58TGB5kAG2QEm1L63eFwA9u9CRVDZqQupCmNLiEcXSZ8F",
  "key12": "3GBSRm9LiWFj5fyhM6PXsaFCBaTqmvr6NaMZoN3sVDKJLXM5YvEWDFcoaYWdmU4fNiy7DKVz2P3f7NeK8nCeMkiU",
  "key13": "4vZrDwHSW2iWTwbUM3S4p1i1jWDCkx5R5WqFo8DuVeHvnVKDx6whZ9z5EX1X2SQNBAKSE671QhAU6624gi8GYXhq",
  "key14": "4h55a9BrVu1pWqRi7MqqQaNvcxD2K9ZojVupcUfL9GBaHot2nAwJf8hGccAoxvPASp92R42fQjVHhEGCaZnYSKYg",
  "key15": "3oFhJKKFRbvBTq9KmpJnFYBRLEVnUKhG2rQeFu6vsUTKU5aPSGQdHCCx9WPQ6CyxZYrLteCbuuXvhThTLDWYm6o1",
  "key16": "53eWg8z8jTzAtGaD6anV49Vxp2FmPDLaqn8ycj6WJJCYPDcbg5to5emifrMpnF8v5FE45YYbrLBfkUueBumqHf6p",
  "key17": "4dVNu9Y18wJYm5Yj8Vup7faW53SAMWHsNqcauBnFBWqkQdBaQMRPe2MBnifo5SQ7oxz5FRHhURYu3pyuRMVXD7ec",
  "key18": "3JZetV4VdxkSbGDS9FCGJEdK2qQxLhvqkMiXdXr4uiXvUSMSRnefM7m1sBBdvoV1RuTdD3DFfLh732yzLp7765td",
  "key19": "5TSVuJFYQAYdvsMnF3zKYTLxH1KhjcCvQ7Ux6BwPT4462Dd3nbhfiWpHs87XtpQNRtJd5mrFDAJqTzcwWyufbs2V",
  "key20": "2pDbWyry3xg7myqnkrC4yrxFQ6rSypgtqKwV1Pe6LA8vtrwBp313pYMpZe3j3fhxd66kR1kkmg37eFGFDXAmXaP4",
  "key21": "3usyBvW1jHaQnQuy1K5wpBFXEZMY4N36757qs87QbW3zWvJk4oia25G3VeELpPnpTCHmZ2Rr6aNK4ScBBNCiPeen",
  "key22": "5bJcMcEGEG9TevX5LNQoqWqyCage4sus2h2wDq6zrT1PUtNN92hZKA6tRVTj51dGgaGKwuvJ9GGfQBEX6Gfn28zp",
  "key23": "MUvtr4qRMe6gtiABaVszt2pRgmP4c6ZXDP3FZBqx8hAaYX4LzgTHCtAnvnCBA3eeduxJJvcqJnsUbJBMFw9Tb51",
  "key24": "64AMmWov8kjkTBBYBBSypFxH9v12QL4UvGGd2onVegF9S6Jveo9KsUhQHQTnci1WfVeZXKBHjmAWb17PPkeBXwJU",
  "key25": "3i9Ppea3ms9fpHU144LcDNTjtHDEJzcDKFmrrJVRvjgSRtE3vtLR8f5s2ZsUjxiCtxrJZ1WkLMmtD5Jm4BrVNkd3",
  "key26": "49Jpcg9yEE5K53CUrtcAbYQzWLsGtFe57puXCbnvXmrcLW9vZpLb4LRvV1GGy2XzJLGPwMmKq41wWvVmXQC43hBV",
  "key27": "2eauTwqwvET7Egkmgr5CMSwtX9z7jwRw1Cdf5sCV5VR2w2hhakw87yfqkAPdBrdxwATXUzzfb7JvkCFR5nLhNsUG",
  "key28": "352BZhddMfUQw5jqy5PDkQWTztNQMfDapS8tYRk17eBX77tUoaRPvpvJ32BVLVnPyQ3ycpk5EPazYnKK195DSy8v",
  "key29": "4JUsG6Lc55FQDxRtfmiEWXqaDaWHSPzVhGbSv8QoZYTP2aNkL6UcCXPwgfXmEUv7tjJafcwLmCnQVyrDmeNhMwqA",
  "key30": "2uWimYzCzCAdamwLXyeAVtAjnERkHgmRns6MtyvMoWipRPYt1KKHbKZuZKFFstwTb3PvR15tNGwVgJ6Rga7LdZKm",
  "key31": "2NfC5EL2dd3RbQRotF5LxHxw66m5gBYjX1X9p8g7em4R4yKRKs7SHg8EfMeUibvM3Dcx2BDsZoHVje3b26soyKZW",
  "key32": "25fTmgdNSmpyivMEL3DP9tsCzae6tNiJ5GJUMrsPhMmNYCsQKNj6edFGYP44qQ9wdwuciA2SVUm2jjgRRM46MEKQ",
  "key33": "3SfxcoujRt3ijbH9vTs6z2vuTE3vF9juQULMMCuNHNYxCFWmppYJGQh8kwzdBHpHW1GBesxFC8g5g8Pa4ayBDLLV",
  "key34": "2R3K7Pq27bmQFr577f9QUXHgLBpydpX2tvLai5rkxHTMXyw1UMmothL74TbyByjrvFkoasumAhQbsRihNrx6Cbho",
  "key35": "2BcQvL5BPjJiwevDUovnymXPbxi4iUfx6APnWmWemYCnUS7mK71BTv4z4nfz87Jd1NjejZdUyEp6vaBTHDBeY7Y3",
  "key36": "2u8ic5S63mvh8aXa1SBQCy49wLnkekM5T45SrtziCfwbhiLps4SX2stZHmHdKs8GYR8CPpxLQJBR8p9JNjXTz3g7",
  "key37": "4VwskZttfFdFYJcewbsp32XDgqjhP2sGuRaD7n2ZD9QMtp5pZVsfRLj3bi4RgmDMN2seteSgn9yxmJUTxKDdpTun",
  "key38": "5XfeSfExPQdqDi7Rg31uz4dw7hJmd77afFURxz5UgqKngAKv1Ez7toUr5vtZGfJXx7wpqnx2GaigtMcSDWt8zFtP",
  "key39": "3a1BrerAgP7NALK5UTxcKV6rRGLhu9SJKwvJbZy1ihCXuHr3NEcXeyeJ9ajoAJF9by8TNCGTfCWsm6YTXUNDQrmb",
  "key40": "5K2hXheUSxjQDVfTqew4XT3s9Yr1bpctCd67qhEpCg1qc9pAKqvToz7S3Qx5BK3DooDhf6VZp5VpBVx1BaicmtER",
  "key41": "5aF5P2q3hLB5A9YXDwsxVV4VZbXBAYDbg5AgJxWzz4PYrbezwruY6eKArW6o63HUYm8NPw9HU7GACTAsGS9F82vY",
  "key42": "3vxrN4f6hXHBhf8W1he7aTuSCdi7Gz2SKWvdHrdHmuegj2dGzjx91hj81BVu79oySYaksZ4c3sYkuMD4ALhXzRnT",
  "key43": "21F9AaUaXJPTm7xgipmqkRf3wS5PKBaPfPStwn7TvnxqqN8ckeYTjFxirJWPnw8BM2ktwxkFxbAa9rWUgyyKrL1k",
  "key44": "4wUwL9gZb9aDf4EQmKEPzjzqjAcxZdUHEZCuQnmbg9n2nFeJHg59Fc8ieM7uTe9f1hvgcKWvh8koymzEyHMwE2Qn",
  "key45": "4F2SbAPBHzDJ4GxGeGwdpYq2tde5WzSyYPJTc65vC6i7ak5qZQ7cXzgS9e8kuX1hZrJKhcU1YVuCWvAYcGQGjPy9",
  "key46": "4JPMpgGBBfqfduLTyDXNt3Rv29S7J7wsqqp7RzLfJrQSn7H2UCT5M84Nb85FRzvWoEbqNcGzfLW8uFLF34tU3u3R",
  "key47": "47jQNgtcegifG8NcPtaCaBrUGred7SFqyWe9wghNfDY6vocR9m7yRpqqRMg9ye57xQg6xffQmAPuSvCp753QkafN",
  "key48": "2UVsUFsmvkxtr4w3xNXH5c63CWqbZyuG9k9gnEAdKZQbXJHGXyjzVRzSoaMLFrvgG8XTFvRfpJ6Gz5Kjcark6JXK"
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
