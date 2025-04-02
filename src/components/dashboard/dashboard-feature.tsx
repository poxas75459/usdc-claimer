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
    "mahHmXexGvvJcgxjCbzV7wfi8AuKmPkGozDkrFWtZmPSYsav8Q54J3zq2JAjpJY6ew1M4SCN91YDC3JbZULc5p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeEYsjxMtKP38owwaHQ3J4qrf8JMRSTYypkKcvU6JvL6gUpgmDsooK2gn22uPE96J1SLu8coxX1YeB6vnDECfrD",
  "key1": "4wJfpYLVf6joMrvuuT1pyYY4xb34CYkxByDo5pqd45Tq977qQLpPYpoNZQJ8FSWkUL4uCUNbhMpywYADN8fr4CJA",
  "key2": "4gV2RUoHfZ3ibfqjnZqUWqBvUUtt4bSS6iFKCZWp3MnXJeTWrbz4N6XvJJtz4qPnRnwwkHKaZUKyuSh6YfDuQuS3",
  "key3": "4N8PAL5sHtkSkgLNxSDdpoWm5E8vz7ham9o81B9ar7er5iFZ7ErZwSBapsBf1h5qoLtCfoFYxApbEbYHxixz1eCt",
  "key4": "56EDomdiwMw8R5mSyaya5Hv4TvXLnaLeTa6EHtycqu1XvtUNGssaDVh9rQSbEoH2X9imbaDJ7FoM2QiXSYHQqQvq",
  "key5": "5xe3rj8LzJxT5haqY9hjN9txEcEFGeR9wn6H9aVzjE2EG432wuCHnpYr4rg54WRa1nFgrqWhRrVDmWzjyoUJbTQY",
  "key6": "3N9QxrtEx8yH5RrYRw9DHu7LxZTJidctyTb95yNBtYC2FXScqLJnzQ9A3YN69QxsdShqhRUWuENwvugqrW39RLe3",
  "key7": "7FZv1YUg8xZGS1Po9kMafVSB4Uh2RhEm4nTcdUdfPjX5h6vdSEMbpt8wzNmK96UoTUkwuzCTJvLb1fJ1XcfCb4A",
  "key8": "2uKo58MHFjd8RaNxNJovqt9CUibLQVamGE8rVe319QaeXDwoP6nQebMimUpMKfrEw79pyVhUcfQUL1R57ymQQEsY",
  "key9": "4jcp5ESLc2qLjToa2XA2xUU1DyvzqjBMbiHTs8b4YhBLei27HZ8L4T7fvHXZTCQ7ZExfhmK6Hvc5BL3vULPCb7gn",
  "key10": "2jcfGghKBUtP3NKf9vgKEfX3kBpqGqxgNFeHX2x6RofggNhBkdAHJVKESUuzFnu7iSdZoE8r296qezyEF46pZutW",
  "key11": "7xLavrvj2y6z21J1P4UZHbu3ZPYBsqjae41dPvYjrgjUMjArvseRA7WfJcLaPDN2GixK85NJxuQibmQs51eEkay",
  "key12": "3hKmEhhA7iCFStUXJcBuKqYQvQgJZG61Df9Fq4WS1h6JFj6DJjH9eNrgn7HzkwrWwq5hVJhwoJvVQJgebu2yh115",
  "key13": "397UfzidhDQsDoQft3JvoCaePmnC9jsQ6qsGtthH56dZY5sRxaHRA6ToVyBuCcWAkM4VCnPp1KFCfE9qJdf5qtcT",
  "key14": "2LkzXKbLR9hQQqRkFwrxThEiEitUQfKGtfqjBsAL1W44PktgfZZ2cCEvuMVALQkQbnUE5wiW88rH8Wrpu8H9h96V",
  "key15": "NAjQYAcHhy8Swiu6DBjQq116BzFZTGuRcegS7gwMQStjZXKf11nXHUdn18zPMcBaFJxxUcxcArzmcwD81mw2Ztp",
  "key16": "3Y356E1h8ea23Wt9Q4d7VTo7esSEGZiAMhyKMsX6uFzZQemJcAthD4yKjCN8tFjAbTDVzjY9mExfSpfKqJhpsnuS",
  "key17": "41GtEJezCh6HsKKA6eMp3s94u3Btk3eGSatitWeQoPM96p5fZbLptPtRk3VwEgw4qcLS4HZ9tyNKNPzVX9tRrRQc",
  "key18": "2WA4KMSKaovivg3WEdB91tx9cYh77qstyvvCyJvy3sQHyY1chnVbbzPttGryhbMC6VzANekRZ9SXTDcbe1d2yQ7w",
  "key19": "LixWXLyyThXpnx2CAbqW7SnqvEk8qALSUqTUpwd65PWcQN8X8Sj2Jiac3dYvJztJbsf78Z4YaE8RRJARzK13tg7",
  "key20": "veAj2orRXGY2J9aRdHbUdbz42PLs5jd2N9LFCVoqjJZmFbCsnCvY7VohESmdgg2QDKnVg1KU6dxVtDDweaPmhnL",
  "key21": "5hysMqn9Bcpe8k2ChxxX7eGu29fd3rRE2Qu8bg4yYmgvSgrBtFgCdHpRGSUpLc75ciJVdNu3kWfofM7Vy7GRS3xg",
  "key22": "4J1ujnG6s6GUoYgapnw75jpfvDXMvnii6W9z5VcAA3jiZF5P3GAfZtndDkcSutMQWdv7sTLp1xRpDKY9c9BwQWQD",
  "key23": "3nV6yufv1Jajk4aEv6Zf8HJBovPUkCnSRDJ4TqdfMPJHpgZLKGWGMseYdup49a7F43rKsPgu6A9skUGmQt7juWsj",
  "key24": "64xTFX1Xqz5xM21RqWuFtR5phZCwT7kAChgSjqir8yBppaEJoweQfpoyAjTodQv11gLu8BgAvF6YFjKnodzPfQKz",
  "key25": "5fLY9Mxwdm1uHeR9BkLPyRrdAQbAL2hPBuKAwrE3Dbe2JYy6TPbnBBF3pbvh6CVuGxH4mgBiKnShdRAyvP1DE2mP",
  "key26": "2LwyUwLf9N6SYH6JLr7QqsX5bpGjFt6doT24J63ereJMQG4UCFFwkVcynpfL8LnPbV9rEvtVxZ1mS69Z8x4KQwLn",
  "key27": "3e8Wd2PmMgDdd2Rve3vLNEcZUsNx2PeiUnBLKUwgfFBwkPQipPcy2fd5MEAA6JnrNSDwn9ifEoDNYSpxrGQdHR6G",
  "key28": "5jiXzgsCeRAKiscQF1sJ5WWD8pGqcszPFAAno5rMV8NvJqRX98npjP9fokQ9SnrSX18HU1hC9MA3FmM5Y1absXea",
  "key29": "2PfyfSdiwUrQYEB5XvXWxxiFuHxHtKyP55FZtt2EuwuAn3TNW4WoDZzF5B5nhGgnjTZTszvQwvGavus1uP2VJBBL",
  "key30": "66cL5i92MPYEUzFEjRqdBDt4UYnenWULPhLRSXtLdxqp3bSuC7NCwCnZGe84feYyYECmKuyjZmi83jeUE5yowv4h",
  "key31": "k4JJRVxbYiZcEaaxL4EmgTQk21EQn5bCMm9VVrusttHiUa3fiB3fASspNWBfQ3PXtCkRFkUVrGZsRU1VF7hCg1E",
  "key32": "2TzCfNic9azEHiQWtxrcxARbiDbwGJbxxJrbisVgcRq6qKVyURuYioAGrbmRidSTd6zm86oxe5SEmWTX8eh9DzT9",
  "key33": "wo3NouKUcHyYpMx4busqdTmYp7vwwVsydfBNbfhm3MNeTLokC9jh7a5twvukFHNQ9sRMgK4GFaWjptnWst1pYy1",
  "key34": "4TF6tzGZZGEshHf5jdQvRahZgkaDkpCeszK5yws6MPKqFUxmEStjx9TbckUnUYXJQsUf4Xj1GwESZUXFDvu8TkjJ",
  "key35": "63PqUMRP6UBgbFBneDCkdV3UQjxXfSZdsbUBpkUYdGu989nz7Hp3cJjaXBRgnv5T2c6AcLWKhmgkE75k56eVjJjA",
  "key36": "RruS72TkckbuEssdXMKUnFgvrGHGC8XdSDgFxr1zSuBSWsb37DaTAY8FK8zxLY3GcX5RhVYL2q4ywSZSJhG3SqQ",
  "key37": "4RDzd3XxMmJpY3WEPfpEGuAejw8UAtBTTZxMseNNnzqVwCAQ6zSXpA6GrCSE7jzw8v4r8jwb48UUgxybhrbSRVZ7",
  "key38": "5FiLoiCufU1cpdwrwpQGMCL834nukVNbBPUqf1Ky3nb4pQvyf6gf8bEsyUGHfYzeaAMAJsCs9GXUnuSQ8PE7tcmj",
  "key39": "3Fd4j2e14MQiJwcRW3LF9jfCVv47W4UPvXmV4eXPVrzLhX7NkddCoRmFYZNt7FXDLcozVkowv1GuhMAhGjMAG4Mu",
  "key40": "3Sn1Nw83N5iuCWiQgLwafgozphTp4iqKFk3ovBaJYt6T4NUNypDZ4CdnShB4HasT88ojMbgBKY12Pnr7Ufw6h1rt",
  "key41": "4ikSRKYrHc8DoZzKu7hs9ZQvfzrvQW2uvwdHfhkeYhwEpSGmYPPJ2w9BMsnjTLruCPUVdtwcZYz6HppBMR49dGhb",
  "key42": "5qS6oGfaYJ2eL4qDckPosXAUsvBz6xMb2TdS9Q5KfKaQbNbVuhvzSpxAAbSK4hgq3dnpX8e7UE7Dnq9U3J4ABKKL",
  "key43": "4khPCustyt4zH7QMGtfkzHCGohsAFwktPj6HxwbnWWNB5dX9MWTSe7N3Ku2yjw2VXFcjS1QCCH1MMQvJw1qSDthz",
  "key44": "3r7WxqeeZTcvZwt4a2rBKza8hi96NkoV7tAjM9nn2ZNzncnccL3s2oFSmL47NRGJ5uGQaA6k5vyJRiexei4WcCZo",
  "key45": "2M4BpSbnZmJjxsxA1GQY2FwAvPpEV25Vav9snLcxeracXJvarFhy8vGqYsrJxQv43psH76sY532pTkRk7QxGEabt"
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
