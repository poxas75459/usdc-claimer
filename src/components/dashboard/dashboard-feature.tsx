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
    "rJDqymg6SnDYi77CR7x1W18quDRUKELk2JTA7m8Bp8CKaUyWPKvCFKWEd7vFui5b6JYkuNvrQmaequeY2tcPApX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TyQLzY9FLFawoz26LDPnrvFQTHjyPih8fU2EuBRH9H4WbQnJu2EGCmQh3Ppz4cfbYppzcTz8gCWGZsbFPBPZxRs",
  "key1": "SqDQvxd6gzBhfw2uWqua59JHdk7t6vgthrNLSrqoYZ9n8pi2LqJ2VJjNWzF8J6FEtjyZB2gQa6DRaZiMGgdu4gH",
  "key2": "2iufmtsS8mQpG9HtfnomoTijA6UPc7AwtHrQcQsW3MtyNReogk9HdrKbAhXB3qsyU5Yz89BuCqGtYdJvxUTHGcPQ",
  "key3": "5Jf8wzUxmu9JA3KJsDXdqSxZC5XcUKm22xxeQYHomwtcNvjmigDkQMC2VW7BNpX5Z1MdxCM3FFjrUPNA9S8zGaME",
  "key4": "7kXNKimhYpmKSex1fJ41DMjwNLmeSpA3ui79WJe7nLDQezQsHz6PUwaacGJnekLEKkigY95HCPqWLNNPSbz8FZR",
  "key5": "6AmRCrqWPMbLRsMTDDzyBb1HxQGzeqpyY2CgF4LspfooCZxwy9UyH1SBwVBPESmkNZ7TWTx2rQcj7GVUNjxYNFi",
  "key6": "733kjZWFYYvYG8kcS2DqpUXdUaU4rL7wmzVKQMVoV1iGhEtamUUxBHbXom3vAVkSBfhk4vUvhYpbzkP9eaK3eop",
  "key7": "62wJYsLFvuxMxBd53LcfxHAxg8Wg7pdExKsWoSSwk2Wg4WfeLfbTMrmri6qx1nLEvzQhRCsDfbcsabb617NsE6ZE",
  "key8": "2HTyMfmc4TjPtF2tJcWc1VDqcYTLz3G92RqjDJ3xS46dYXpLjHq6uYWEjFPC7QwctiPdDkyadaooxMQHLUrT18n6",
  "key9": "2gHXZhUVRMXVtry4nnL9n8h1X7EXWojEZdFNP9tkN361d92SnvkhHZn8mkaQaXjrs8oEV2u9tVghgyWX58di7P3G",
  "key10": "5sk4v49YUwr6FVKnMbA9sQNwqGakqpoN9hXkuYo3Gbozk3fbTWmGR7oUpwDS7PEh5TaFLPK5bhWMynKmLD1v9ruF",
  "key11": "5QFZZsx7Lvz2tsPV54F71v8PRbZzGLeKdqYT1qKqJEr6ofG5VoJDJTLhLNPayofV1xNoYYXa5SRjNW5vJnyN7Qxg",
  "key12": "3fCg5UJKK3r7k7CkWqt1hGPvDTsxbXEVTor8Zu9m694ShG3pYCx6czcqmGsEJU8uUuruYUVdEdy5WJCBYYqcg5vS",
  "key13": "3A7vjSrisjPfqxKPXjtbWf11hARuqvNvivp2fsGFrmLLs7j12V5uVgVbta26kLJ1BoDFZJ6YvgfxD2eymoXrMVYE",
  "key14": "4HNpCJB5eA2F5P6dmjbj3Gnj7EMifTSAewp7th6ShFXLu1FeEgFZdxrxowUz1Ccd1nxtxRkDykE13VstUP8Q3oik",
  "key15": "2eH3gQVMneMy9pEhXtbgLg9Pdjn4SQYHLuXmAj19kmCDHCafjkPmndFAsbgbcg6DwiazA51XpPTsCDFJ4nyGxex2",
  "key16": "3YS3zD7Lv5hE8uzT4MSBbrAbavs23NG3SQ44FtHeiRSMedbBhEBtBwPE6FbDn3dPXfxDVhSa1y3jvttqYNdhdcHR",
  "key17": "4Jeu4tosV5Kunu7h8CVNU7fhSRdD7aRKcqbVxRioR9jTq3DTmCyN5Laee1rxuzrZhQeRKCBm9xYM2zbwC5P9rMyQ",
  "key18": "5E5EVnj2yg7yV7H6R5z1LTDWscpYm322fr1dtALTdHaApi2G1iAtJ8TDqXmZhW9gqgFXNT9g9wmzTjzZoCYBvYMv",
  "key19": "5ns5ZQCPvYWYL8kNgbci6ZjqYSp5uzj9xF7PLRHwzE1wyxrPHfinWrYsEGqiT2K4xCiuy8mj8uWRzvVdqbtpurq6",
  "key20": "4ouNvSRAMKTq5heW8BTR88krYUB7VLokW1eM8NKmzSnrr7sj2qKLfqPgj6YXWQZFUuzNgVC1rTESysdBE8PQo5GU",
  "key21": "5b7sKuEgQH9VCA2B2TxMRmkfXgqdzaKFxrFQPZReC6UE8MqXxB4uXQr8KH2rGXZiXATLuz1DVjydCVyqAKGppo5c",
  "key22": "2WHMn3jRi6zNE1VFqK4Z7p8Q1wTfGkATbssbyrbsZJMpy19YpZAodsEUetsEGhqYu2r2XUk5am6BCz5yAhNYMkhp",
  "key23": "5V9ZaXbYXjkUPtj4cLLpo861mELxCcBkSoPRku3P8JxoP1PreDF1MLoCLpYS1e3bBhPtgrUoZdF5tK1QCC4WZ8A9",
  "key24": "4pqywFnz9uspShtoLWgD4uK4DYEo7uTY8LHpvedbcfftrX1aCbAEpvxA6cPYxjfDQ5dHtQEaePMSjTPYzspnNkEA",
  "key25": "5dX99pAfuMpiEwWuHsfi2KAMQyK4YGvNkd7GbS5VH5oeXbzCEkLMerXxkXsZVkHXWFNbiPLXAJKaZJkPgYdw2Bed",
  "key26": "1T4NmLDLUdsDopjsUzQFGYuEeNwDRwPdgRRV5zJaAYoiTdbos9g441hxSpc8ugFbiQXgQeHpXAmvRf8CVKZBZ91",
  "key27": "sgDkB1R8hwVvBVExfgLpqtht4NErhvuiJfSaLVTptJChupi9z6RrqbRGKJTV3uwRwG6ZqSdB5GSqHG27ohM6iKK",
  "key28": "4N461ATdr3ePSGGj13uiHUyy7oBGzRWAfePk1phUHXu9j6cKtkKMofpP1GFn7Z7sRKszNaKBAz7LJKJJZ8he4EVD",
  "key29": "2wCESSuH9j1VXbm3NChxP3zzGkz1Ft7tEzZrBXBNFi9RVFpyvwVHuAkMTYP2KgeAdG7fQFGDFHVHvCJ9y4uGN63Z",
  "key30": "CzDo85RarHJtW4AoGRkXaraSv8VCtsuU3wpfcPrsE5QSB1xbyyhTuArPxV8fmeVJocLkxDY5XAzYo5Pa38deQfe",
  "key31": "d4TQasT6cpuyMvbZLatt7Lajve6q4oYRRn9p2LVWYMFTJKszKLoYhqxgrZFK8oit3fVje1Yo72kdbVTzAvbLXkz",
  "key32": "3CudDVKQ1ksN3WC28AiqVvMX4ZJtdnQq1HGVYkFHWh4aAq28fVTzo8pGcyRmcH9fr5Mv83pGNcLHRYJhZPfrTeNr",
  "key33": "3crPwQqYpiyz5JAQ5JQbhsscVkmHFiEM4MY4ty6g7dUcGrcdJixua7H4x8T9ouXpNEjZ7dQJXL8XRygoUjWwNiY1",
  "key34": "5hcKhB4pUp1AjNfuVaTjB4aSYtsYQPQoCxFLrX7NLCJ6CTmFTh9kyyPKw3UJCNHnF1f5xpyh1pTBZg6Z6jJabxuW",
  "key35": "3J1tj6mPh63iQmotLwG5reSYVc3XL4hnCkZAG5Je9VuKYxnqiBxJV13BAsWu1s64q71N6NBqWF7xLKzTqxgiBQ3q",
  "key36": "5rZjpCScgDrnuy7QVcWL95jo87za2Dyj3kbs752oFxTciQ39jZinwSi6MvdMF61i17anQLepyk7gLTJU99wuBPvH",
  "key37": "5AmG5uQ2toKdkmHnFB5Senw3hs1vK7tBPZXv95J6QWthCRBfzjAPhSBsAKUp57X9jQwuTU9ZFDQgQicoWQcqoA7W",
  "key38": "d97AGtR4PjGmgQntygaM9QiL8cewv7Xu3o29pPtwU9V7m7ZBfjtWTkmfFoJAeq7Bc8FUFYszFY6MHHuVpzgZZSD",
  "key39": "4JL3gdbQomXovY5GMCbuU83fFtikK7PHHHcxMugm8Z3DSptiYw1ys7MR154qRtyjXKvtasb2kWxUDgKcHkr3bLTF",
  "key40": "3oKg37uk7DxuSmCS21u4EzcvvkjExPMaVGWThSHo4DpwPEKDpxA9r4D1HTagRY6Zs9g5JsuSWaDHnFPFCSNvojUC",
  "key41": "64wEZhzqftaZyrFrLjYJZJdGHvbpi1hrJTvgUdpFzFtq3tUvyiKtsfc5friEmQ45QuEeTgkdS62drk64WJHt6Xqc",
  "key42": "5RSHzo3NDD1pniM6ucCJ6vu8WZYmuMxv4XitngMfo9WHtZviJjopVsKAQWJB4N4KP2KxNz5E2UD4Uf5fNRQCn7hB",
  "key43": "4YQF4Lm82Zok7yxBY28h52yH9KEcYS21iYpeKsWMzfo6ozph8iVcz8XRTRTu8CQJRsmwp6GrYB66KWUQFKz7XkY6",
  "key44": "3cGkJjdGLDigNx5vT973ByzpKPUWdxo8uJQyDqakRHtYQA9YGiia3tA997JbNDN17GjUR2NuR5gNEBLk1GbZ9hvf",
  "key45": "3GooUd1AuusgmGU3cp8iGeNLxzfkU8fijT7ceipEpKXMGNmfNYEpiA9NRamgw91ra4zpyLZ9htRiT7nrNyWenjS2",
  "key46": "32MXhFVChCdE7GasPC6cfWbpMmwu8VE6LEZtRCth27s5rhhe6L6rgkhxdgRC3NbZtFrNYGRDLYBMxnvY2Ycu57HR"
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
