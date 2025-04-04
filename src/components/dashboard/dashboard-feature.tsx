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
    "2LRz4XCvBjhKRVYcc2fNZqH4mFzvqXonDgJQNguDvYCMYAnmPUEGJKpthRgLn6QjQezwGQvVSJEaBMX53wzGrJp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hh6N6S7v8SSdaSz6NbrkQFcFy7owWjZgP94gCkCGPsaKdz9QweBBo9TscUE1KJMpy7gWqUBjR5BQWMMifEGXk1n",
  "key1": "3nef95BmCnPQYHtGCW3EqXAcUNV3N7Ry9ZNgv5iiwhU3bhizt6Kn6Y1VAkc2QHbo4jqJePvKVG2j1hkSao62icv1",
  "key2": "2GQa6eRFMuNyYsG5RPsXJsWMvTsWSreKjE7sKPFfDy3eusLCf4oRnmhGqkYnQ1HYfsBa1eab11HeNQja8qXE65Jn",
  "key3": "3q7FXN2UUG1TvssLkYseVFGEZNniGxUu4SYweURjoRvDRHjnLAiVNSzePyBdSdUpAcirjrRgKnEmDSPBnD5Nw5Px",
  "key4": "2qYWqoePdyTYWwyv5VT1fkeELatENwhUAUgPKfsYqUXPr43i5PHWzfQGueBAHL2SuhUUe52pVezYdMRj84psZoEP",
  "key5": "3yhDNBSzYGHSm4PQYhorzThiSjhpX5UuS35G7pJT2vDczuKDLFKWLQyRYRnhvJjedh1wZhLWcw1MVXUxPhuBzPEx",
  "key6": "4pxJnWft6nhrFTyyTdEnvCb1mJ7khEtnoxxCk5UhyT3qsH7SMsUQuD1EekFWWP6NvegT4He6nCVfareEb5haL5XA",
  "key7": "27h1jGW9YmeEWkoGqjEhNp5bTKhNgSnKm8WpDjJmyUBARKQ3NtJ4pRS9S7PYzygajdmBgdCToL844BksrRa5Yitd",
  "key8": "4k5UR1gn7daUo5S4QFEJ8T41SHwL9mYAHUADfq2zP254nvGUf7LhAH7kFtLyCXMAkxKfVgivasPYoDtpb1tmoTFx",
  "key9": "46eoYPLPYShfd37A9iY4jD1ADs5k7Nbc69gvyepgPy9bVPZbZJT58Yf2XkKUX9CQc1eNENyAKVD3kC1hKaMpiGX5",
  "key10": "4aCemha6fCvDWMDQkPjLs24GSgnLmnPdzgPJa8hSvyz7AHVbuLkojjVtmAx9DGMVeGnBE7vZLK4vQq6VgpwcALEC",
  "key11": "21Zgm1rjZgq5JiPsiX3dAMXsk29CRWWNEHbRZmDDZLPeja7y1pGCtbF7rTJ5y9XDw3EfgVyazKyTzGXtzHsda91V",
  "key12": "62oFDoxVmdffNPm1YNJuhXgjZrozgi9hmHHW6HDXKFr8AEJTX8qiA8T7hC9LnKj1fbxuuHHTzD12WvmEEJtvtgS6",
  "key13": "3xkddb2KzqewmKzHHpTQhkN3xtHwB85JRMB2HJdTeyh4wfTPLYwzTNeNMfStLgQUPo2AzS6u7WiKWHp1oj8fYQ4L",
  "key14": "4p1nrhUqdfotgqXFYV18u9RcmLCtF2Xw8mWnWH1nxzRbA1GuEGtk8K28V7PQ3eyCKpuRSXA629qdBjQPyqb6Y6tb",
  "key15": "3i3bKXHcwvEM51oPbFkRCYTAKuKL56MXpr2PX1UTdJrU44ZBQf4VqYP9GtJMzTyQygKUGWXo1LSq8sc5suSomtfw",
  "key16": "Q7kKwkqv7zkjHDFFmXg2JHQnNGMhnEFoKU4BdCvbtixFpkPYx98bmU4gKFA6kkf5UEwtMxPoxNDtrmCvTrECW8f",
  "key17": "2dMMTAEaTREDjtmJkwpdWfoXM8to8VLdF9AQ7FAPzZDATMEmshc7wwcMYvBjyfHorxQPz3SUfQBcJ6zCUsjQZoT6",
  "key18": "4h7ikZYmXX8e73ySZZ5pxRXMGMM8cbFvd1iPWDgkG7YLjcqaEXBEwydk1oLtGqJhJ3GJbmXSfHHguQ3xwUBBShDp",
  "key19": "97EihvnVQYQtZVDNkATCcDGtA1fiyU1cVx1xTCzaf5K6Vc8xhiMFLu4M9ayrxjdgvcHVixziCpnQrGTt5temmMf",
  "key20": "5xLUXxV6tEGoYefveFX66a9vs9kWJkd5jw68NqyBUhkaNBnVVL9jnqF7hdYpq6CdcjytJNTk6SVe1SqnhtZtZVS4",
  "key21": "3vp3U1wxkRuoK5AfMerevnSwWueEVhYGw6xvCcPLWrVuRTZBowo1HSBAwLqUWMer5iUkf3p3eVLq9BS1RafKzZ6r",
  "key22": "3AzZ4hbwwXYbt8RTis34knFcZ81ZMHMvav6Qxkpo3iny5QHDWvn6Manns1dSguTtF7Nao5VzvVkf15ibx5pZPWgx",
  "key23": "g7KrEzvKuv13uWQ45JG5jkcPwm43weEFQbEMCBmWVZf7UjZvti2C4SdPkVojT69woauRKcwvzyWugrWJ4Gan4Me",
  "key24": "3ZbnDw3NxCrfQwyxJRnVNhAg1v5Ua8C89RhJqfCSjd3cyAh8fduEpikCuZTKKD6yGwY7A2HxwuUhTURt8MQCZeuw",
  "key25": "2ddocBK6t9UstQkd1bTrU1PK7cdxzW3JjXnv1xr9y3NHizK3BSeQEghUQjXm1PYscQ4mX5hgHG4UMaY3nzQbbrrh",
  "key26": "5KdUSMg9uCkeBu5EriJh1d5RQj6HF85TfwheLJwVtq7QoPJGKpcc3FNESYuzSFkCnTcKbh8MQ57Amd75b2U7TVdf",
  "key27": "vAebS4XfguGKhdAPZYqkYvvpw4JPHHyKnyAnTFaW95HvRteryMpLByAMdUqKvnDoZREHYXXruFyUpq5RHvk2Wmw",
  "key28": "3J9bawr9xod5qC8RX4KUM9VRxc6GSfKYxMzDmoNmskoaVZTBaSkcghsMVJUxhT3rdU3BW6tWPGUjxx1JGPYHSh2i",
  "key29": "fsdTgwv1GgPXWSRFncQ5tLsseeumfkgrSMrPzR649Cs7a15L5KHdFZQjUPn3N1CwTpv6XQCM6yrchbEKHT6oygM",
  "key30": "2z3NJrC2U29psxzHiTXWL73w6FLUFZw2LNLRK65wiQWv9VX5gMtUyFaf6jYKWL5ypo8AxYqgZ2WXXnqL7tp5KrwP",
  "key31": "3igAsNEyTQY4tsCnhguo5qnFgansAHDLV318oWVBWknAEagoujCu1CpqbKBuAzQNTDHPiTCDu8zVcufoSrvhga8M",
  "key32": "41BjdtAQUfeCGZbdQKEjGixrfUkindFHx87b8CH45ce5MfXuBbKSfmStq14jYpeuzcZVKFVH7JYGUiv9hrnW1A3b",
  "key33": "S5HE3UguncvUsrPi5moAD6fNTCzVKqo5Lh5FNBZPwFfVnX7EnaZJMzNFgJG1o3uAHRHwEw6Rr4rZR2cDH8YxTJY",
  "key34": "RmmBfZ4P6fsQwC1Gi9N95jjs9BZw1bCEhhsCNMANu6UXbgdcdvaSh6AUHQSrXJNCVUTRyptn6o9evxW2ngw7ddT",
  "key35": "ZAhYKKwAhJPxwVonNqffSK1KzLEWKM69iUE2gt6r9uvc2DxEvZKYixEkMCR8LN8sYqPsQZ6LdjfNLFsxtdGtGkW",
  "key36": "2A35FbBUhm4pg5NcXqYHu79P8Pnh1tC5K7KywnRsxRAZbUmiEQJLkeoZP6sw3VCVxR8cBkjsboFxV1eVvXW8oPSj",
  "key37": "3FaP4zQqyKsESyZ8gni5bpSAcEhpFGkmahEWRSCQJEEvyutGKsaoaJgfd2AcAnFRLKBDDQbMGZrsJEyCNx8AU89M",
  "key38": "2BCqhtbftLszjdc547AdhuhvW2yeHYfKCx8NzTkiTdTCu81KE7zDkpfAgr7MPsv7ZdFhcn2TXu8Mm3v9fjEcuUs",
  "key39": "3xKbNrZXo8mM35rTS5UT8mB14gXVs1tbnkva74Xm3EwMkAsPRL1K2vmfrQQktAXkgakGrgibWqmNznc7VQ79VC96",
  "key40": "2RcZLDShCLaHz4UoMG4kh6pkJFFLFgZQDu1QfGm1EL6viaymAuqJQ7TSJQxbYBoBv8Hb7YV3V7wuxnAeLMSbSJT9",
  "key41": "BeUfiG4NAdzVejEsdijuvqS6kR346HWrHT9BRkwFpfydN1yt59T2QTm23WVQzJGDZc4bpVaAGUmmNYZ1vGbKpnW",
  "key42": "479foaaNq6H57FCWH87GPrZv8seBMgwEH2QkCm6k6hfEXdV3e4afspnu11LCv7aQoa3n3j8HQ5iGiYrZaeVUFeVS",
  "key43": "4nPrF4FxmnUpzWvtYsKTWzC1YpQ9GXGDnydc4SrnrHVshkYMLBye81MDHWRgaWwfKkSg2XoY46ER9uXVFpxVr3zQ",
  "key44": "4sPJJSsC14RzGgyuYysXQwbq1EYnWQ2MeKchqmhfVjoUE3Xe9trkZBgYkZeX6FtPhLNC7x8gjJUyF2D3zh24Ae8w",
  "key45": "4mJVzDrUyy4javTZYg7Q6Gh3tqjJLR36WxoFUwKFgJUi6mHWNbxDttHMy5nqpSmJVxuBbDQqzxDfkJhfCLnLiePH",
  "key46": "zYi1vhVFgvkXaA8ZRsdz3D6mwUicck2YCSWormGDBWSBjDsEJQGijzXsX3SmLZZEe2ha4mh9VAVdm7Ujzvw8enf"
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
