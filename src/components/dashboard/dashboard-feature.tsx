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
    "3JXbDN3xu7mHzQJBcgJdSjfjcTvouNuFZddggcpLLPBXmpEpGYM4hTi9wTMJ3vnihTFa57Y8HqfVZtWRdF6cq2Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ujQyAf3mLnAXNE4tCnkKB7AqniFmxrMBJfNJRdcpbLoneGKCXpoHtMCDPJ4ShpMDRqpcFAdyLqGauBvBfYTTcF",
  "key1": "5DUTU7CDXjw75syqud2vU5qrW6ug2HQVSwNMaJKgFL6K8vcKvYRzeRgD7WCq4W3yFSjKSroVD3ZmbwW4f8LB1pN6",
  "key2": "1aidzKdvNKKcxaysxXSpNVF5xEzuKFkSiRi67oQg7oDNynhgd7fnFMS5H9mYtUvTN8hdnkm52c8FtDHUmWuSTz7",
  "key3": "3vPQ4ugNYH4WTLv3bCd7gUHUSa4C49EjSKXY6tDg9D5wrfqzitnAhbkwNV4dKEsX11TZhDr1Ge868Z8gefNW9JBi",
  "key4": "21XnEUR7JNrDwXVesm5p8DCssWbGSpfS5Gg6sE9GjQwJnCuzeB8E25tEsHrNkrUwmpQ1z67QDPvKFs1AcGdsgJkf",
  "key5": "2rs18eyN9xA2GMCR5RM9hFDA9dF2rG8QtZA9T4MPe29vapyEZ5MRCZ9Vn7TDtv2a9CjCrMjeXhHBJjNUfHzWvNcg",
  "key6": "aP7p2CoyLhUkR8DU16AaqFmGmhxPohNChRs5iP7zHxHWXeWqQzzqyC4UYSNkztKd9QQV7ewfnRZXkr7bv27Us1G",
  "key7": "2F6WXtEQ4oiuj64NLJfHbdCybJoejrnHwPxg5pUik4993tHsKxwkigAD4VLmnrA1Z3aNFt5WvwqjHpqhpNzQPN7h",
  "key8": "5uFwHdxDqDYowyGrYGY1BhJuaniMhz8tqekKpCENFPwC9XPuHaefx81gdw2hrx53piRGmGy5yuskBKAp8mGPj5Wn",
  "key9": "JwCiAbsYhQH6CNWRvYh6Zyz8bSaUomRLpiPDrRK3vcx6FSKMdKeQGVyLRJkN6Ti3r7XKq2ma4pCMprgbBnMJFBe",
  "key10": "cX2yYcxpNWr5Zd9bhTnVSS7etb4evSKP3ax3sfmy1xBM2cLPvQkpKsvbuWFx7NXHXxwJh4jNh4fJJ1JqRnCDCfF",
  "key11": "2RT4RCL3SxB6fP9ygnYhJFhQ26tQuBus6KniDjMUUSZDFW8QUv7Vx3wTvk22qJRvnojTDpzLttrJjsv9A2MCsbtg",
  "key12": "5NbGqgMqcnkxYmUHweLhxBvNUxdjZxy5d1UsWNStXDz2hnHy1nAs6F4uXSEmV7ehq3vrFkcqcnMa7gqtPqSZAB3u",
  "key13": "2sQgQTvxAHeRgFg9wGWe6uDc1BLW6rpEcY1RknHS4fYnSqEYmvpajKqL9oRCssqnjtLdBU4F741ymjrTqvhLxcWT",
  "key14": "941siyGQ7CQSoeb7sVgWcZmtMxTmtTnDJjPXbWDXecaR5Lvd3DviasB27H9WK74bwVaPzjkXCdMxeHkM8NaHvEF",
  "key15": "3dz97tbZBWHfwwHWBRLZC5vpozuKeJekb14QJtRxYNKRL2cPnU7jC3hPnSicwG3pr5y9rNLiAUs68SCGyc6JtjSL",
  "key16": "5wbCP2V2Y1bnc5LT6F2GKxtTG6ZrmD4E5LShtkJuiSazvNu9uSRarUz9ApAPzc4QQAGxuW5V51itjX4reaB4eHbE",
  "key17": "3SGMVu84Bz1Gxu22wQ7AstAkbsYxdH3M8L27zeT2Q4qinrnjNsJiCp7SqxZDADcRS8yWU24suBQ3tQjWpMYpfdrK",
  "key18": "otiFBZRBQWc1J85DLf4nLNNuscvskmJEoSvFaN4fG94aDcv9wSgrfThNAbwb1uPCs8GhBDCgAn3NQsRiKCYG1yS",
  "key19": "y5GLebWxTd2q7UqNmLpbFM4KRXUhpbh3h9PhRk6N3VnLZ91qmbqmG5rF3PeAXDKUR69UF7rxwpJ6SgmUpDVXPK7",
  "key20": "5CDhqDYovcFuE7qobinmxhjqqk6uv1q1fnGJmxNr2Rci5GnfeKag5pmrJgt6BfnMJpYQx4Sc6WB5uYpNwiWdskAm",
  "key21": "2M7NqPEuWY1svPAW3SzLxdxGRS2LTYYwYAazb7Pr7nFtPeHt6YZuKTr6y2QBJH7PbnhJ6rzSHqtGWHc5hd4JQKzh",
  "key22": "4iTYjXzvvS661ztiE747s5yBpQDN48fKAyVTLiTiH8aQw9mhRRJrtQsQ2nBr4zgaXa8mci5VqKpv7hkae4i4oTEi",
  "key23": "28BSqLjuR4BGGaJinewGLKRnxxwRRZVZubb75c3L9UT16fbmU8KWi2if18MzLAZZ4yjAQf6wwrUBs61cAZ74FjEc",
  "key24": "5Rzb65uRebMkgN3PzsLVLgW3H9usMRDjxDW3DKNnYniVoqrK7oCWizK7xJ9EYbP4a9XyPVzZ2Pa5GcQjCPCGBxDx",
  "key25": "H9UJQ6tAoAQ9pqnkmEyaQAtG9tyR61y78ZkN5JD5HDZ3kdRYET6gBbYtrXwX6t8CozQbCTdDcfBkW2YAvRGu5zV",
  "key26": "53va7QxyY7MxLeEYMMB7qZoN9nuLdERWrKWJ3829hYe1NXGJdoDFfnMUbo51h37nT8yWGCCtpKgjSZaZbicvjvWb",
  "key27": "Ww85qEPzPWxxRc3Rfu7vKFmy2SDcCzQfBWz7cNy81KKiaQtpJMJUcgdh4WG1hjiXXa2ZFggJ9YgkRfXYQpWiXxJ",
  "key28": "3auktWru6jLtTLJb7mqa6E5tLfWD1f1GdHYmD8cTKHwD9PAuByDhqUDf2HT3b7hPbEh37ixpDcvaxmUCAPWLUKRE",
  "key29": "5R516LVAhCdVap7nWt7YHFEPgpWRua1KRQYAKywPwVSa5aLsbdeyLxpMMZow57aHo88whdVCrN7FijdkqwGV1Cau",
  "key30": "22Ff3NEPtjnWDnAmiXXBHNEKX6xAEBdkdA9EDsoGJTaj95vCLpvw9MqL5hnAVYdTgJ2v682SjLEhHjgMMTqzFWkW",
  "key31": "5nMPJq4WK4XVFKXBF5odJfi9YYSHtnRZW3Sy5KRQGube7bna6FqVMpKN8tMpZHXvgqAnLd2f2GvhNch3JKDfK37J",
  "key32": "5hrgpYP2Zj4jsoG87BZUdiQ4BfPqswKo1X45ytg6dkbWCyyX1Ja8A1KvhcWpc9pKyqFfkuP43D85MThGvG9c8K7X",
  "key33": "4xPraaqMNec7DSqERfwmVrHPjsb8MHFFe3ha8oPKPWtAknu3mRpGaFDofMTsRy31cXZUYGfgBmH1fn2KCwQuXvic",
  "key34": "z4QkYoaJMNPxUfummV3dBhYXiV1fowjvvFScxVqdwBrYCe4H393hxMJCWQyTXTqnR8Grqe8gPA2tp7jZ9ta6GQz",
  "key35": "2FEgPh4pouWCDMQEKu1XNi1m6e56peZDTg2oxKdCh8Tdf51iiSr1NufBMgqTucaB7arDsibKkAYszmXQD4dXqNrN",
  "key36": "LQEts83ZA3y91HYNTR7N4KxNryDBsGTNU5gPru4NAyDJGDwzMcXWYwL5xxCQBodmMpUcrnkVGRjukNGtawXuxC5",
  "key37": "2KHUYCxKJqUGzknfBMDu8BGipiTYnctCmzELbmJ96LZV4bkysvapbTd6x2ZY4JfXzteQSYbMat4q8p3v8hhnjCdn",
  "key38": "2hGBc3hrdUtR9F1cSKoybv63sYSiYpH1Bp4mYWCkN1NpTeYAdCwkB3hVCnxActgXzY68pu1KguvzLN3Kzy2AXKWa",
  "key39": "4GJFBMwFSTyCTmpzRS7oPX8RFPyGrbb7TfoCYGEQj6dJav4HpwzbPB4eDTJXHsVfdNZuyy6YjjVS1axJN5AjMCPy",
  "key40": "3PC3XkiGUeWf9w4MPvg1rjQkWjt4tCNuSvGTd4gWw95Hoh4zyEYWHSao4Cn9oahVHBq3aVvRJFYdDQcSKTQWfRkq",
  "key41": "cvXEyXhtRnFGspcrhZDawcxzQUu83QFf9QNFp53eCcdZN8yBtUSwFYisEipQuAs5tDG8HcbbNz5Yx2ABrzC14sx",
  "key42": "3EapQDwzfGkULL49XdPMviGvQNVGtojPejsEuERpBRcwBLRExRZ5zXPpWKXmUs6D1RkPaJHUG8kbQ1baYRFwi8WT",
  "key43": "2iY43d7HNynPGrWZ4SgAebAQTFHjPhptu4U7AZ34q6dayMVUaXc4hEP8vQ8ShrD6yB6dGNrxDDAMATzTnxHSguSC",
  "key44": "982B51vWJS54YF21RiGoaKVU3KDYyo3dzSpxtj7B4nzKRMF8VXUXRA7mkA17USiTNCFxp1Fs6qFJgsRCJfokLP5",
  "key45": "39etCHXDchKumJ2WWcQtvvzLChNYEDSPCBSAUUSerxovgpUuRrmAcxFUebNhBXXWrm527MchnEqt9Nffb89L4xnr",
  "key46": "2NGvYL2HNWsffn3e1yLh6Ba3dZHv3VGhgGe4xYar8yxVhYz9XA9yzrWojVyKH4mEvvsMFfFxyw2sjhCTSYXmP2p6",
  "key47": "5E2zyYxgt8e63TFsHgstiXGgY5M8VzAG26zDjnV3Zvt9wcTGa1S1RD3Q8TM7YgPLp7QXVj7ji4DSVZYqvXeQ24Wj",
  "key48": "2iCCGSW7YWGQLxuMUL2PbQbd5DwVwK9Ctm8xk1rgWV6vamNwaeCHYXMgxiLHo3wicNKVfSqvq2c4TtnASrv7P4Tg",
  "key49": "62KrJyJ9XrFT1sdtKCRSY4s1SSWSQKQNZ21bDRH7NMzG8LcYqQxDQ6mJUtWWpZWNRM8SPrTwMt4kpYhcmndsNsfU"
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
