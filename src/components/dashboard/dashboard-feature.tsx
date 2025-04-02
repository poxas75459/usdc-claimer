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
    "2BpwXD1783SZKKzp2UtgNp9WmmyAar1RjTAnodRjJbPhRaMh5LNUPGkkYW95vheWoZNX9x8ftFn5WEL2JU4ncMMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EztGmXF2jJfyZY3X5dn6iAPNJFwS9SjrNNPapJgv5v33DtfBtRZDAAkJuoemXw8KtVxfR2zT2n3fxryVZKD2yA1",
  "key1": "3d8niicvNgB8rL59nqZ1ywsyztyigEaYKzHibNh4Q8tTm7MNcS9ffcL7woDPnBLrBSVsDtKdvHHBcgYRpEYL6AXo",
  "key2": "KtWpq54ppMSiFavLsdMafUuputXECvY1VPBWQAnuEqTpfrVNrEBfexvCPVW7e7t3WHRg3j4orp8hryDAiXjtFVc",
  "key3": "3uDP5BnFL4DZnC5sSugUs7UGhA5ejibyE5RAkwmHCFrvoyXE7dtyLfQ3x1VQsQPVGSV8edq8CyGnCZikFyZa38jN",
  "key4": "4fEB29DwrisVu1Zkd7iLFnws8qokxqKkATS4iyXNmUQbCTPzWRUxydSiT4WFc7tL5V9aYr8nLLjxbW1ytYrZbhVo",
  "key5": "3mMzLUJZ7U6zHorsSUw3shxqyZ2TNARLMTZ99qYXnXJ3vfAaMqpeVw51E2ekK4UC7BHy5wQmP77qiqBQmKFAALjR",
  "key6": "55ocqWaBGoupUnQVFQzVUq5Mg1Ts1FF5XWBndAnCL2M4ytipDVCotKN3q9Df5fHHrNFJsq8Q569eRYNYQFX8zY2M",
  "key7": "5YWVa1YNCSqowDxQkUAbH6qryjCxJzG1qrR6wHzbR6eYfHFWmPJMRxFzHyZ2bJhrFf3unio2KT7BLufiuzc6CjqC",
  "key8": "2WAcQ5VCtyevA95ap1yaReF3XuXTar8XxBAAN9pY9vNsTHkNgqUsYT6qxz1uGzWexadDXTsNwuwA7S6mrBvSG2Vo",
  "key9": "bEL9aaiC3iu84TB6WitT6LSGCKrw5ZJqKsjXo4nEC9ELZgbmatCTGibiHs55G1aSd76uF7NFDYEwUCJF6KGYJSa",
  "key10": "bJhwbryoZ3bHJRaWdfsv2M1squAuxpSyc8VFkF7pu6U9V9p6Ti1S9BBxHpscHhEECtgqGdpwHhEWSXp5rHRDL98",
  "key11": "5WWfuPKUz3XJ2go1zNjMvp4Niqr8tcUGDB6PLMmTc4v9BtoWsu6QNZSBffJ6BzJRuqbRq3G2pePS9jrVcL74aMzU",
  "key12": "3hYLQfysCdVzM1Xfwd4sAjgA32rPrJwg3SKZgCHG3DM4pceesUGFCB5VVL9MAogL1kVJE6kpp2hmHPV9GWzytLSW",
  "key13": "49aBPPyZNY9ATCZLLt1seuzYZH5NAdrWFhY2krouzc721PLfyu2fZzpgPNikJSoyEQuKDDDYChFpRgtVFXEGMNvr",
  "key14": "21hnkqywBj2RaKJvBtfJ8ujeTqNFeq7SKbLJiQno1LAt15rJETXPVpYKd6xiBT6RLMRc7mW3eH2SaXVNrgvD5iFL",
  "key15": "2dDcabSs4Q5yaJDDbum3zA2KGr1kv9kgHupDK8o8UtWiT8cjrPfkywd8fnE71CfJXpQN1xqXRj4s6MBJxbiZqK5U",
  "key16": "2RGYbX1tXHhJswtUSbY7ZeDVoKw435gbwsHtfU2H1RC7j1eKfboWzQysDznvDmRN8L8wphSA7WYAK6x6fAPdCEJa",
  "key17": "3N8JsGmbDk5w19UNiaDT6HzjNURuUTJcZKeCLTnWMUoEPncKnWDX5B63jJE2LyMubi6wj5zvXN6K5wnj4SbhWaWL",
  "key18": "3rk8Tc9PdJq2Hd2UNn84X6oxZkpkQqvmNuzzg6xsBKyBTaPYk62q6rPsyuGUqwGz25PApWZzGxAAgZHdJ37oEkRD",
  "key19": "5ghkzBWNAinVPJJmSHDudE7HgTeuh6sdc57xHqiv8j3EJSHtXMHiWKhGLeN8UeBZtduQ9UEJA1otvWnVGRF4ULSH",
  "key20": "2SnzsV9VzoE9YS7eAetJ1Xmcqgawk31edKKNCQonP4kktuZdqHnQpeRYztayqX4h75BEX7XU4ep7eW8JuUTGhJjA",
  "key21": "4XauAmnTDkYxojSs9iJFioSMB75sEBFjm3x5XgUuknREmh1fsBrc8SPHcDMU1G5RQksYKF1khtRC8eYPJBKbPxSS",
  "key22": "5gw1oT4CsavdMmteQcXAQ1buGxbzqrXSr32ENXiEwaFCRJEGqDuEPxgaEBUakoGxqSAjHCL4nBJkmjKLu9xSUmTw",
  "key23": "81pnzfpEcFHkATqCQ3eDqac81wsRGC8evRyva2pzneLuiHbPD8M9Gjhbm3jDffRmzbvDcR8xVpEzDN8UvJktU7p",
  "key24": "4jZqBKaRSGP3K5ZZijiq4h43BAaBjyvcXQt2DxpyGzHnYvaCte1dXWy1DuzQaaek6stTVwHkKCncpZEQJbN8FDhs",
  "key25": "2wtQ3FgpWvDBNGEtPG38tEfYSQ7bQ4cVNB3QidqyFPnyWoe7z6a37tPD5zSrY1ZNuNUgHaiDcgfNAPHs1wferys8",
  "key26": "4EqoaCSnZddo9Bwa3LrH1to1Tr9gcoJztM3tjJMsNWHuMSFUysmGLikZEcB1X5ELo4UF6YEj3qCpuhJqzmXg5vki",
  "key27": "2dMorwVphDpk88bhStQ8st9LU8JELKcrRqUmgqBpjRSoUqzvpZbA7hYj4RBckfrMTPCrrqgFF6r5DijxCxCnck3A",
  "key28": "678qUHogr9Chh9bd9cPc56xhDyGoaxcFh3Yw7QujV3Q1peXLeJEoFoG7317PHYZNajofpCS7CxHAv9yDas2dKMwv",
  "key29": "66CZRPN4fSHY1qiut7ttRhNyP8qdiXTuZctzuSzdneXzGyiwEBxuna9jtGwDXNYS95MMTihannM8NLDLk6CdnHC6",
  "key30": "3Yec9MRVpwAPJ5rvdFKMhyfa86yV3jR7WKxisZ1CgezdxZN27HWdunPXzD6JTc2UGbKuE9AkPDT1Hir6qCdCkEz9",
  "key31": "3hTwPnfUDPSV5Cofv63rG5x5dA4b9YNjmgpwoiG7MKRS4UzZauivzTV27d1deXTMBzcM8ErWVweo7nLyiPWGvz4T",
  "key32": "JbHZhcUUBQWVa8Rks29VQ79pS5FSFBintB2TMfi5dHQ932fnJyH7apEV7XfTeDGcRdNmxqHfu2AJFAdC5F3C1em",
  "key33": "5amMzPm7aye4m4qyfVmRefHv18hwKRXKZ3hqv5mzphkqfh8FyZtFAaPYER4hPgkJcpWsWNuBPCknWx8srecC2PDs",
  "key34": "3EZ4cimFiq6z5RaMrCvtfatZLPCWtKoJj49tJPBfTKwMgMUQvBDbkt8xqKyCV4iKZSjjgqHK7DYGi8CYESeTjgtr",
  "key35": "4LAcNdDAnx196eeiVqnLW1mqQ4kLW8zP1ZovXtwYSscnnRJV4zPeRfottiFPfJtXBkYGiJpPgZE5GyNdGsDehtZZ",
  "key36": "2zYypvta824eeVqvjg3Mi4mpsXPULWDghF42Bit42ueoKU5wHPHc95PPjfn5KQt3LdkqpmHZvmvGwdFh3rNBCZXw",
  "key37": "3cWWne5vDLJsZnhkFKvnJThNtj6oj39CkiZLm2WJayEHhxf1pstXq93sjELhc5hPXyv2s53xKBE1WePemhrJm1U3",
  "key38": "3JdnqN2t6ugbYx7S7pfjyUMYEMo2Hj4yo6cTJxELTzo9QGRMFWUhxsnz1aztUR2B2iGVbvG5DwQBQq783BzPsd4q",
  "key39": "5J5NkbntyhobmBt1kemiJNUdPj8U2H1YJSLFEJRmuUnu6Hz95Mv8uJGKdFadmxA5Ho2HNMxsdWsUiTXANgG8KoVz",
  "key40": "4mSojgUsCFdKUiexvBDmddvPi2Hb7Cwf6b3ZdCfBQ4i398N4AdW6p9D3QEn4wbu4xoVE3C7zAhYK1xqvFEzzG6b8"
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
