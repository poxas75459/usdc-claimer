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
    "qaMFwL1Y6wF212bP5SoaiqfmKTWCiounEB3mzxTF9H8hpuQ5FB5NWyxsnjCBShgab8YiVzpMPEWPKH4kJbDsTsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrgvXiACiURFivKf19gKaZsrBhsgfy8LTzvU1PNpRdaLzTEhAuZ4fNkbpxXakj5yLyWHwkvreFy8bN1yJ6GSMWU",
  "key1": "DuPQdoJzYRV2YXumDowLaFLc4GQKhytAmTtxZ6smPtY4itiXxA1xkaUeLY4BDnhh28WGKiP97GTSW79Zuxhahci",
  "key2": "4pP32wdovc6jfQ8QydbTTeTQiP28pik7b2pacd9CLYh5YudAjrGwX29RUiTPz8dYzZ6sNP7ZQr4ND5fP8FbP3e3U",
  "key3": "2ZEhLTtcLjzmcqTue6789RXMiBhpbX8z4T5WaryqGte35GXhyAqDFuqN73xxKv9e7LyDG2VdLmFyms1NPufKoi1e",
  "key4": "5mdpQ2erhZ4k8upa9JAxaxWDdy3ouftxrdXCqtgSqc9QjPL9vjUqWXGTJwJMquMz7bZb1YAQj61fqTR2SjK14UfH",
  "key5": "28xJfpJ7wYvKxZswi9RCyDZNL9H6nn3v8ajshoQwwo4ib6hgKgQoN3XWkUT4CTZG9N8y9saPs8PMvW9Qc7vbxzcE",
  "key6": "2B5tW5sfkoHdYhTNinDWSn9kCg6cAHMN9JkQeKPEMby1pSLGZMCaJ9aq2DpaJKdFHc1iR1gXCgKinTbmqDDJkDRk",
  "key7": "5v4WGDHTGVBS3EsatQbLKfegds4mvAzG4HsWBSn7enSX36HVLHjZC7EeExfo7ZBmHWgGnuoS2ViGREYAvrTtSsq6",
  "key8": "611zBvCo5DZ9zCwbSq8Cv85G2esutVrch38zBr8vyaznnqFXvXjthN63Dzo4NohD7GFm9m3xAXcsizZThJWZMLEm",
  "key9": "4yqm8mH1CC1EKwB6cST8JzbeQToAL9NmxgXuyomXyWt7bVqXZbPSiprHqNVChnJ5jM9Ga85NiKc6Gw9kDvv4e3at",
  "key10": "vdg5HrwM9eS61KFu4kqrG57uDt5BJNnA8HD9mfMzWXfNzV299Th4t3Xgkts12Ecs2w1MQdkAkW1AmGTUynJ7RTZ",
  "key11": "No9JsUxqi22s1deMkcoTEdjsbD2y6312Hxs7m7L17vY3HpwD16JNoJG4jAUkiRPzBDQwumKbkJgEu8pqB5JKUaL",
  "key12": "3gkgh2qm5bEURFxd37PPtXvzSRydqpuPdXbRmh5Js2dXyrr99NzD5HUvMGTGu7EX5P3cD9vBc2ccm38nDj1aXFcV",
  "key13": "3PeEwN3aH8VzpRwrckvRKfo4HLZjY2EptNX7SxMBh9otcgXeUC1xhat4ozY2ydW6sfio7fMQhhFUDSY41vzuPd2z",
  "key14": "4kM12YTBYBRDfgBwz3o9F1HBXyGCWQMDP3pU7723xUUyfUgTDtV7eRJyE6i1LTEPDn3A1VqKgQbcrLeY8hmydszA",
  "key15": "5QvdCYko5PraNR75M3hZacWPPv2S9ULGuGhAJ7xBDt47P8T8CWiwweV5kNQdEVjEo2XxsbUwXhiL18KByDgvUK6x",
  "key16": "2ov9VcqK4Q2ZDQopiERvCJxmGqz3h9y3bC3H48xcxjzJ57foenEuUsik4fDDPmJnDX5i3U7cXqYcjkU7Pk7NrtLA",
  "key17": "4n2arqRfspY87272S9iB2984vVkLb3xwgp78XPt1J3zSN1Dv6gJoQ7gU88MaGbNQyqThGgQ3oGwtMn5inoLMa1rF",
  "key18": "3wxHgVa3bK1mLxwqvodgayi3g9g7hGcyQHYaiEexKSbamjpNV71kLBTCF3T1BQZsFjDpbb72JyEB7NcfUXv4Nj4p",
  "key19": "4K2MKMvaNZX4RNB5PqK7h4r3GdZfJmLD7V44LWjR7FYVKrhoMJuaKG3fFHTutLMCXpVeGUozKP7w8tq7CZcJG7gV",
  "key20": "5c2i7Vzqz6KcqyUfM6QWDVdeayekDGb8LYhaQiGMxxBYxZxefXcBndPcYQeuX7TLnPdhXeftmEsMcaMMPH4o9Xy4",
  "key21": "5LUnNGzypkkCEhmkZX8jFboavm3PRbuAz9mmMXZTXLtPMiYsmAiZvzMsZmwK7782WrVVg8hXJWzAbkeXcJmM4QHB",
  "key22": "2ybSgRqcp1yd3GxWwexeTzd5bdbCUpZRS49UnZLW5L3pNWuY3jAqtXQChBLYUy8ppKQdJMnALnesDDVUBQTVh8pH",
  "key23": "4SYmDZyGndRZsB3C7LkMpDPYYviTMp3ayss9wq3R645BcrGED8nT8GfVzU8kv6E1YoDqp2HUWALXJ7ZLRJpSwPe",
  "key24": "3X5CtuEBZAC3qqBhP5Edzp6whiHgrAMFbHmuV2gtWTxrBZBRkFS1ay1cuZea6Bov225sKhAECATGX9x2uoa9Peoj",
  "key25": "4gqTWQCKLcPaugCYm4nBuaKTDGghrwo1aJVNpmAC2HurUs9ziZzA26gfPTYprURLPJif5nVWxWCepeyvdJbGmdk",
  "key26": "5W9ZKesHaSbCeog7VGCihhc4bddJJ6AxbkUjoGswEW1mhkQqnHePv3aCZiAnXxRRYfSiTfzoThDo9s42ipYxKVUk",
  "key27": "48u7GYnkK8rkE6hqizxLu9eMuseYSNSxvTzUAwErUUo3QWjAirAsn7m596ZC5We8Vni5dd6nrpwDRyT79ACBZmcb",
  "key28": "gp6k6KMYk6TNHjBS1Ad99h75yZ9f8Fnzwg756ieQmVEE4hXiqeP3c8Ta2g2AdcvGeRgCQSrspFGZNXBZsjFNK79",
  "key29": "3bAaxWLW4umvvD4pq1oiSyDTyjGp2QaqEr4kAvz3cWPkrULpKqbXTonfkb4p8cNSnosNcszV5ngSUqababRqgCFL",
  "key30": "5zwfuGYLPKU6RhwNWCsNzZnKi81sodNr2PjzbtUyC3R94EgvXWPagnp8A3c858FcrFQPgdcXQCrifm5ehgyfAGn9",
  "key31": "3qPGKcd95VyqQ3grMycWTbraVTprhaTfessqeC8Z3CYxDy6KBbDk1rNSp8HG1FaLpSSbKDGM3jaYDzjM31sufWsJ",
  "key32": "5fNDgwZz9zw4xpFhqEAt1WZgDHYvDsfPHMbS4NYAD6hoAfNEQGzV3n5T2pasndGwVGUoe6Ck7gkCZwENagjbfu1G",
  "key33": "3QJnCkaTUAWwSkKi16kX5JjLqoZBGkRsvxyZjTk48UEvmozTBzDFkd44hw8nDgU27ZAKWwbsbKBfLmFYBhw7jybc",
  "key34": "2HfcZaLdkRDw3tU4AJ14D8tmy57qSzcFM16U171oEEXYr1GkeVTVtkmmuXY5GFPkACJbpMCjSXCfSo9kvokidFjt",
  "key35": "57Z4i3dB8oEQ1jFk3fPTUTWHE5hPzjsvY4E5NbkoEajTe4n3LrHgjXXzeDpbKmCoumuUp4VU5pHSwmJi1dRgjvuA",
  "key36": "svSg9Wzxt3ab7nyLwLkceB73k3FYybYRSaFGxSFY8y2tKoe6y8FvkZagpTW3rYezVdRGnhysPU4HbHJxYqFZrts",
  "key37": "45u4KHigfij3b9BEZzs2fpFduYhwR1gmDnjycCaxqtTocz8FFj42qx2Zt7mFAu8WgWwMLfRdwC2phQDb36dMFU1A",
  "key38": "4t9Lun2edu4JBjMJrSH7MNKpxf1uKcZHkpZdHtkx8zjztBzhzQCuxhDRHGBAW9PceU8M7iNpBDAupcRXvPMkhBV3",
  "key39": "4cNb5WuWdc7T7Gg8TfvR5jbbZHJabkNLyr3ZjZZHTTTygo3RQLHpGQY8TX6fSbtKKuSipd6Xzupu6GBXhsF95YWt",
  "key40": "5EPETBaLVa3ibDE6DtNDRykii4Vb5Ug5iMT6SwPpCqPFEVpyAXuxeqjPkqeapqgjv3DeVDFtQpqMXkt17CiVSkuC",
  "key41": "3fZ4njYHutgeE2LCw49Regh1dpyTSueniFXNVWSe7otAZhyUi5uyW3bxVSvinajBiJRU3kpKNMgsJwKcZok1DfkW",
  "key42": "LM7aiz8FZJjniuMgVbAf4vP4GJWgn2RzpUhm9AkvuYwPps4mh88ee4hytbeLjxZ3JcbsPi8KYvATyomBD3eRRvh",
  "key43": "2pFG2hLG4CmECV7rtiUprVMWuwdtazKWYuy37j2G76iJrLshxRSxnmoXN9swmyFVp6c63PJbDTePW33oU3P37Gnu",
  "key44": "29u4kR7cb9217QT21Q6BEDpnw1RmxsxKSWyjBAKmJh83ui5siS2XbHqJuPcsx5LYC5Y7bzqxaUhNWUxCoBZbPqQT",
  "key45": "5LCYLtjn5B4tkgzgMoQWiBF5Lgptr1dgtGynrkyXwwKpaKUCf8aGYmukdQd7bDEFRsWLwAAT3XqNrWpoVGgY6Cdc",
  "key46": "rg6YRsR6osbQ1GaT5yY841Jo3HZBXY94eaKPdpvpucQGCPaxkQMN6GUVdmNVUPZbJVByQFiVtCqTEfAxyRzZSJ1",
  "key47": "43qctJ6oTThzLpSJLEMpwJeHaZYjRWciB6aRd9nYCUo2UFLkAajurZHDzFgcAnjbDywz9Fb4YLogvdhUNBhGoHT2",
  "key48": "2C2KZRKKWNmGzzko9L1fB4S5U5FhXw4p5FozAQ7yTevnRQMwjhNdFfu17hvfYt6KFDT4c4jUiakJV9CtzL8pBavP"
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
