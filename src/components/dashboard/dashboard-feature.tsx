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
    "66DWzRat3rNUhJTPcWQpUMM4GDsrjMNbe7coagUKdbfrh5gqjGaJ9aNmeQSZfkrHFnwmpT41cTTX3k74KerZHBP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQrTMbSzZe1bvgNCgMYGdxhLWMkS8Mx88JKc3im4uQAyR5hVpZexYWMiGJkVEqzPeHLHNNgtBtYzQXeMJ29RLKG",
  "key1": "2c4vWTuQTLHtTCBTy1s3hSVGtwNxJ3XZCJFQHXpJ8Tz67oMGB9Zz8PBY87YDCR87AZPTetY3MoV3dyUZHogchwbq",
  "key2": "5KwMjBY6ar7FX217G3xKrftukTP2buoRcasVUs9P7QsbD2xUuxMw5hUcsF7CKmH8mWmTRArETUCmjjsE7bak9z9a",
  "key3": "4aYKXEzMVeykPgHXU6Bww8Rg3XbWsCDqMFtkJ3KGziE2fU6khBhEWVrzFufDNd4YRuaj43thaVH9yuxXrYyZjh5J",
  "key4": "5PhVCPwowJtsKHzeQTJUvMqnHcbxFA6iJJmZ9VzQZ61krV9fEmJ3AdhP3uoPYf3Soe8sgsHesjrnzxFqGdEhNtXw",
  "key5": "2xNHKEh93mdRuTzVeA9b8xCNgaVKaTuB6sFSbB8xzorxG82yfawsa5rojaUnHfz8gfzFrCWovrTuWbvzpVUZNSNb",
  "key6": "3rKYC9qLu67w3CdTbM7cpVy7rkp1U2oXm53unhQktStXzqBR6kWXA6GfavUieae9h4WV3xRmzPY51TLbBNu2bVJq",
  "key7": "vnUUkqN9RPdVpb2nxoYTQ4JkQ2kpC2R4itU7s1o28x7ZVgzQzfwezc9uUBvU9ova8G3cXGJxrvUYE7kfj5ziwzw",
  "key8": "3DLdP1Ha6ZJzB9yRm1iFHcC7MgD8awPyvbQuLMH5eu26AV74vMXN1YadQmken6nLeuKJFMF3rogNvdFSyfPbB564",
  "key9": "49AR2gHqLKHyQmTWzL6cbM89xYWbFcukoxkiFodePQrF8Ueer3PgFckaEqK3BqJJ1QVFmt1G8rMNT1sxbbkgVYqT",
  "key10": "qhqXQJKFeQ5K933BuF2Hq5Tdg2aSeQgmcyhZP9NDrRkW6185cU5oDxbMkWSFg2YaVBAbDynEkvVEUYAeF9hmiqp",
  "key11": "bZSDfMEdeELAwmiexjNaT8AT7vmWVYga1oLGVNVeg2KmYqumL61m3zH2DeGSQ5SGRH73bZopjFpoRkwPme6ti9f",
  "key12": "54UUpfMRdPrKm4DsSphQ7hUaZEu9U18cvzAnRZCfWZcZcfZXNu7CbKwdTYJFG42HVkMEEdEjTucKgP9aAkutvV1h",
  "key13": "2UXaS8jy7HJVDTWLZcWpq6LjF8kayMY9gWpSqYmKxGbYHrfLe8mUo2SMKXmenKJoz5SXAtVucaBHbyD1jzaxbLmd",
  "key14": "DECrupBVGnpd5jfo1KYiFVrm8Gb4u8kzYj9g6yTYCnbtABuzXvPmY8ZPLM9uCRBpPzi5mbnSWheS9sQqVSbhYUo",
  "key15": "3RPtdEaWF71PavFC8GELV1N1RRJicCsdUvSb8JCdrWbvPXLuVfZVUesWeiLn9KwdS881QUp49o8p6cJ5xsyqfGCk",
  "key16": "YhCCbVEpeby7RBAo9565QF7aw6tijWsmU6KfFEdCEb9uZLaywuB7rEVqLgEDoe6NmTscsExbDyvWzvWrKdPqxsw",
  "key17": "46xqsRmtbs5NqURqxDkFBUViX29q5b8fNhU7beDwpJQyELcQLJX8NgbpwAojwis9AB6pgFsfBjhYAnVZ7KiVfSW8",
  "key18": "2tg115eNSv3ZTW61anicMvZg2EFjq6pHhXyAXYPMKuFHPzhp5umjTaP1J9Pk79eeB3L3XhcfnTXtnyMRS61tNzZf",
  "key19": "2sydnSNxw3EnkeM2A9YkG32YQGt7rZKearKBNTQhqNEg7WXCqibQHdnxo3s2ys2ukatUx2dbtbzG46uzASeyg9Wx",
  "key20": "2DBsEmrui8y3sj48sZqbgWcfBgyWxfLJc1LnFn49PSsVBwT1i7Wc6HbLDeGjpo9zeAkwsrd1irtph3A1QDnbAiau",
  "key21": "5VLgQmGYoYyAHhEHkwH8LCqwNYJvam39jgKFt4JCcGJ8g3g5vF3i1GhKYQwdPRUNdXEk59tEurJR1srWPjZnjNCS",
  "key22": "5KUio3vRXDBWipWWVzt2qkYGhBkBdFuHvsPoesSr5iPnUkwWjfYeHg4u22iFHCArMtrpx53H48A8ytEvg3pKsp6P",
  "key23": "4Fi41Cew5g2PGGXW2vuSCWhu3JbaQ68oevurqZFEMCPQh6sqeA1aWLkAmvv91hZBQ1fL9UhXjmtGUVK2DQB91UUm",
  "key24": "vWCmy6aY2qk96pTbJoT9rB3RurYKJRWLH96taTurphpamPw7RExvXeRTg1v218unQxcFdsMPNAe1HrkB3VDDgZu",
  "key25": "3YatVgcN2uvXYyj3dGFAHxHutRvidwq7vmuxhCRPFdscu4HfwFCU8baEvecZkjgCtuL3jeA421XvcV4CutJRTat2",
  "key26": "4Bv7iWXgCkLfzZqdachNMz992SVNZ6g5juQuPsxf6z46YdSK8phPvL1A1Jxg85wUmkTfPvXsL3frqYDcV3gsv3wU",
  "key27": "4TJ42F2LrwBQLpBfoLzTg1F8rQBRjyHmVNrwUVHRHZasZ4XJFyGvwjx2ky3f939zR1whpEkWPJkNVtxffq9mpiJ3",
  "key28": "4BznpCw7ee7tnnbwsvzZW9ABLVzNDZtmeSxEF6D6oRiTmcT63HhySj8mViW375pn7yC25jyRmdL69sEGXNXQxGXD",
  "key29": "2XSHK93jtJMnQ2vNEq9ZdYKYHv7jmHPb5cwQQUb9YEv4eWhcgzs3aj9BFccid1xoPXp5gL27qYwoXsTaFPQDvba8",
  "key30": "rXB5eQhJKFEEqzBRNUB2WCyfH5BWAxP9Ss7NY8mCa9C7utmkUZdHJ1y5bFHkMvSpxwnd8zbFmVmRM9zFmhzQg2j",
  "key31": "3MSwNgrkVWDv7bKThajE3mvJ48RqmXAd4veWzzgnk4kJUWvJgD4yGZTQNNeAUuA7sfDeKPyPAC4AtYjBrNRUfety",
  "key32": "5w6mvXTXy9XM7mnGHYhePRdFzLvDoAs5Y1xtkKCD5FTJsWuCXMYtERCHsaARGhErsXfvxtdQ8GFfVvgBvbS2LbTH",
  "key33": "H6LFdQKNCekrjatUSt2LuFwckLzRr78zavwRparMKzUPtvNDkDtrKpNQ7W3QE6u4orScvBEmTLEjDabPQNNq4Dw",
  "key34": "4LwAJ77e2Z9vTF2Tuir6WirwW3GZdrn3JgX7qVigHYp1eyDuggaZU2CZ643WxQqyyCnh9avExvsyKapBrKkLzjCT",
  "key35": "4VXV6ndumE3QPGQUpqBbAoaxDJciYF2NZTpvKB1Njw6yDW2rn14NRknCspEJjEoDUQcWavfy8YxwjXBgHqSwHZa6",
  "key36": "CAEzFk8iY1YEkocXZZiMAaLkUjRKQvv8Hj3AyqTXXr1HvWcDkTkExP6jCXv5JgZGyscMnfmmQDC1DzNFMdtVeZ1",
  "key37": "3Qjr18iT6rKdULwzGpFAfJD3o5bFce3X8h768zzGGHnLhK9XRnoSYkxNrMWGjsbyxLSQqXJAcwjPgSYBdYXBrDn2",
  "key38": "4RFur2xk2o9tBxxFRoYwB5wYN8AJSivgJWdvDKD4fBiTXczhj2LH1CwY1dnrA3qpk2TGjwu2oz1EQaKPx22bMjih",
  "key39": "ko365X7wi6pazPxoYUdZfL6E33bt4uxE3gjv9pskps6UzxKoQfacbetZ5i4m73gDP4eMdqTsHBDMcJzaZz54Hds",
  "key40": "5VE6E24jwStb6DPwcHy6SioA2qLq4pkyrAtKJfuxSjVDVoB7jXHT7qAmY7KUbx8eUcYSZaD4uZZ6H68xbQ36E3jR",
  "key41": "2qZN5aF7h48K7FHVBhiBcZJUqeMaY1KEMgPPx74isAiihXTCdDeqyUCjQfrpS84qEzYpmykQ891uG7DvZFtDGpeq",
  "key42": "4phQ99xPHvdoFMpDBPGJA9pRVLbSQg3e2gmkjos1Nj3YgEQChLrToc7GooNWetEGM1sL5tDVtg8uTReqJagDxkvV",
  "key43": "oPk5aAokagxWwfEuXF91223K47rsyeAehVV4susibV9iuBto6nxHssoAjBstSWXTxvcCxvgtVRqoj75gYYFVAth"
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
