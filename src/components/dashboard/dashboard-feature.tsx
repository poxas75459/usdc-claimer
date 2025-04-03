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
    "G8chUne9bpi4J4Zkasxr2ZfGaQ5pCQLx3s41UoyXQtmmxqrH75EdNfto58SyupX2sjmSYTaEiRmT5cSH9UyNMiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LBxsaimDQwHaqK3An7iNkKyjx9kA256ib1AcCN4E9i1Lj9mv5S3Ho5rmEtHLzHT498s6ZxWpHT87ydTr5qddu9",
  "key1": "3pzXSL1KBpPKuX4MWXqRvpuhPxvsMzPBYs1gCnQErDXHQZdEtZnYprneYMG1wDGsPCeA1Tb49zVYhLBS5uagJSpH",
  "key2": "2L3spWpedTPqXPXfbfGxzT8qqDVD4UMiEFKKRfwmh2rsnxC3uV9dDubQG728AhoG1UacL2v3MjkUJugCi4i5jiAF",
  "key3": "61a8r16G1NYZgGy7tdkAscQh2KowWBhTWx5TuybRC1C96K9QKWXEhuW4YYFB4iCfj2azwHwvcH2CdbWf2kv6DVJt",
  "key4": "2J24qNvkdXG3m7ZtAjT7GF2FTXrTQKtGeMLn4RnyvfpgstgyoitgNrDTKDpMdPPrSYJ1h7wDaSRcREdMNTJtfKnt",
  "key5": "3PxLgpChUc5bVEjXDyHprKivrkuQmi8XBNy6TShU2Zgd3VxFRJPveEejeQMmoeiHGVfk6KuBd7xyAmGLKaKVP93T",
  "key6": "2ubhxkv3nM1Hhw94UX4D8mbef7RTq1D1PZhhokJfJekAtNsTLDnoD7Dh162D5Zm669DVgaYeE2LxZcvTvziKNrbu",
  "key7": "67ekK27fB2ivqwsy9N2m8DY427WuSNQJAAxEH7BcSGEv61ADkprvhe66YozjitYgLEfnAW7nauquH6TMDgbVRA6Y",
  "key8": "gdAPVMVvHNWZLWWch5i6mcntuqFytj3fhiMSuQxc114kZsmAcHNQx4hAh8CBiLqPPrSYYdRpC8eeCrGfQv4r7Zs",
  "key9": "2pA3xgEanKgYpgzHcyPfBQU6LnwKMtATQBoC7eCY1AdxReWMKmGPvun2V7xM8FGHVDN52kPTNCdWPVKNRAdpM75b",
  "key10": "2T7sDfdSpG8nqBz5sMwD53XVtNiS8Cpd8ZBnw1mnzPzgJApaniLMBZtWKUnEiyLK9SsERSCswxiopPBEdDLu1vZg",
  "key11": "2eyNmpTkRzGDtpcjpVsTfN2TNUYPkKKSyv5FpwGBTimYzZ1CrS7sEJLjunax9eVQCKAGbK6UFZUKeUK1yNyABX7h",
  "key12": "HbjhBtKDEtYjvrzHYnjnc1KudF62NFiMiorfxbPRd4fcYehGjDoDV3CZ9hcaK4vdJArs8GPEVBGpreJGpQTNvTt",
  "key13": "mGZJEheddntYtL1JZ1hHDr45arknHF8gUPQme2KZ8TZqoFAdW2DeWQnzbA4i7BYYFyY7hBSaCafEfrMymdnM48b",
  "key14": "3ajiyNVZBQwpiTpMNxw5xtSwvR7NVvksGDb6wKtB2xJMQ6xDAggMg16KdYtuzW1EVShqfCYXBYqJDMDrYCPYvGh1",
  "key15": "2vk3FnmZWszGihPKLQdC98no8ZSkxMj1AudYQr1FjNQun4uEJCwqL7u1WC86kymL8y2G4fA8Pxy53vs9vZjNd7tR",
  "key16": "4yE6Ni7Ct7uiisF8KvKKeG9WRZpMY6udNUcQj41bfmm92PBnSjhvZMLCfLmxf35hqKARrbURcAGneP9EUNUXRW2Y",
  "key17": "Ds8By6jy9KBfovNWxUbg8F4DaJmcvtUp7pDyA3kthHnik6mqZGdFzKLkGmCG42h8V7uHUsJR85171u8NX6qmDqS",
  "key18": "651YcFtAN3TZWw9uaLZ5j2Tfv819vP8qUtKi9SpTHvFUGkdRYaiXgQvRCRLV9xmCrYWzWvAXajsSWpgKWae8HCC6",
  "key19": "3uvCdFWPdvzGfpVJvo7DGDhBqhxUuwoE1mmzc36CseEaNNk6fzFqFhgZzNdntLXpa1WxDFCnryvod9AcG4qCqkpS",
  "key20": "GhXUHHhzEjbZZhgomBEwyJ6HsX6X4FuQbecx7FnZQcieStyoQodEv9mwrwFBLofXXcEXZ1P9qjNEkkP8KFzEB6W",
  "key21": "3WUgZwX5D6rrP8Sy1WwJsw9Mv6iR3JvhTz6KYEUiMxMN6JzbN3BTRNKuffwqfniVkyBBzytT5BPH5LDruryQhp8b",
  "key22": "2xyK68snAuqKyh3ZfaR2MvxeE3tVRoase4ciujwbxuje4SGyuwSvTZTPncCbRbs8ycvxFj7PSEFahDCgEBJUEc7p",
  "key23": "29pq6hn9iS2VxnhQGymeqHfpv6FZXzdFC78iG4GWhQSpNtYrh9BR7CqctXX6LrTsKtNzzzhEJktRShmNWSKj6upo",
  "key24": "5zoZVH8cbkPrCRcdxn5UEZ9Sugn94YWTo721VPoSdiVUQGndytNLJTKni8B8YaWYLc7PKBoq45j1CKWbBTpUC2Jt",
  "key25": "4YhnyRS4bfv9Pr8DiGYS7TsXgW3QBhwXg9MsTiFXHiadXfpmEUW96GVDKjfVmEz213tBQyyWQrQYwoFpUoQ9T14n",
  "key26": "2vcxKvZn2BFXJha4WA2XGCxQYGpoVdqbfcjY94vzNtT1tgwSd4YrAUiKEKXUdU2KoL63488zT5FATFuwZodVcga9",
  "key27": "5iQWo4MTFJ6JUYHWKRrmBzUDgArCtjnsiu4uJixUsWB5sWNcT7toTTr7LmCjXZXwEsh6i6ShESrJrfFEP6Dv6eN5",
  "key28": "4nQAWz14hHZCW7D2eJrHFhauefAZXdm6amxpTFYiMdB4dvvSpNru2g8HcwunHAvrLoXTB187UNz5eY4qGTgNULoR",
  "key29": "2gvvgF5sk71NB9PN66PX6a8BB24zHgvckwjeeRZYuFqSTm9SwZ4VCv63EptqzZyPCdpnUM84xYE61CB9pxA48pKA",
  "key30": "2oXGUBXcnRsBwRemm574Q2pnTheBQV1aqbmDUwrfy7z4NCRKtDuEBffVShGDjVYDWmn9xRAExxvvoXHKVpCeP7fo",
  "key31": "5W4WDsMVKittRtqcnF8c4jrHkgoeHgLKMiVSjfmLsgDNmZHtEcX1Nf6VWQmw6F1kXCzXxJEb4Zi1Nhg79q3uHbgw",
  "key32": "5zbuSgUGdWrH8ymeXfLQK13xNRKj1WqKQkZF8bK78LzW9EgGMY8wSgpSymN791hrsJgo2gfRXfYgv6macjpbi3FC",
  "key33": "Fu1mUDsR6FRRS73XW91EZk7BTcojuTXtdThRFc3p9n38oPNYGg4u69bYgiRgS4ujK3WRLPg3oZELneRE2PqVnnY",
  "key34": "4yAfzgdzesvgA8QfUbNKPC2n34eb2JY2RVxJv6xU7MNdjpao64B9ADuRV1riN3PdqGbNL9fWUeAKMQnTtbV9nv1e",
  "key35": "fqvCYjdy8jKnz9TxAo34JWjNGdtT8txhXJqhqNQc7f5Yhh5DTHdygoiUPoueUqYCcfPfUWUBDbSvgJ8vX4teHgX",
  "key36": "2ZpuLpF99nW9BR3ngJyjYENQcTZ59AE4yeFdbohon5Krs6AbqnmzDkj2eD9UXoLkTb7izZDGoc2BzXoFAYrh25Qp",
  "key37": "3ChAADAWfPRP5CPUqPLFpkGbGM6QgFJFitam6vn5Jd3UcaGR7qhXCNxCQ7G6hJB19Ls6SQ8f3sqBwNC1m4BRtnRS",
  "key38": "31NH2CD7pT5iwFPcpemeMFMo5wYkqyBMdUK5L48GuvXnhUrPkUztXhG1stT38nxuK1WDHtWaH6kFso3crFiwr9qk",
  "key39": "4vVMWg9hFmxzh1fvD7QkuqQph5BiBKHKkmgKq6pzKh64Z92J5aYPCQtBrRorCLGk5VfrbD9joe4hKLJVXCA7MdYT",
  "key40": "4v8MpcZV3fbUFhJ28Vj5zRac1UuJ3H4DzQMKrRcYdd413f6ofeVoRimyLeVcWV9kMgEtk3LXGKk4jt82xSsRXBgk"
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
