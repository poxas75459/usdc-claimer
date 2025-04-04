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
    "323d3omVAG2QkWuhhfXFf4JtFiJ58ViFaFZ9zjETrwLPW7YSpEfUQ2i3KGtLZvowJNcEN93AwJQunjSBdtaCbWMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztfXxgqBobLoT2uMs43sEpP4djSgfxftED3mxWboRmiHMCjaKZM8KzpfJbF6waepzdqgTNrzjxGj7ZS3Jen44Md",
  "key1": "3AWXHUHyqzgLnqe38vdu4WKKfya486raVi8BUYcv8SQSbH9bN5u16S2g6SS23tY4qLtddrep237WSV6624PgcP2a",
  "key2": "5vyEcxJ2KVUPzwziRBarpcfgxQwAtJXb4zuhrdMZrR6ooWF3oDN6Mukf1jfi4DmV41LguNKYYaTg87hN7fQJBgFM",
  "key3": "2ipW9QeZdbwoAbjeWvRP7YPTuV4yhLGbs3VvAYKXCEuxQoBebyCQ2DA1YAZkq6u5QPikaMTtDvcx4fiqR1Af2eVm",
  "key4": "32ucbbsY1NpCqskX4ZBgypzLFJt92QJEr8is3SXq8BmSJG3MqPeZ6o7Ji3M2QRGA6GMVrn71RSrXoMnyv4mg6WaB",
  "key5": "37pncYUeM4ZLpjVfHeFYqXxS4DstYJaG79HhHzJkGQSnufK9Ei7TF4oWcCPKg2hKmexCF3pNLG3ixxRT1R1jfrQR",
  "key6": "36FzgSZVy9RZQxcV7mMyZXDmbEi5opTG372qeejzBNXKyXWhMmm5BuWKZqrBgfwzJdY8L9jxuJxGzeudVas12Kdc",
  "key7": "3HAPLsgToTxnyua3WkbiWwfQuaBuqvH3LGkcEPndPM8BbmgsqZvbXWewDnQfkrfkZoUek42r2QTDeDQ1FiRg4MrE",
  "key8": "5Fm8TAawmpWwfx2YfthYbvPwYdBiQUQA8A21LA8ebHiePX6Bnw77aMAxsGEwbPaRobtG15cUX3Xq5RXvhoJjGnjf",
  "key9": "3ZpyVosLFw6BfuVjFMCdo4qPxivCmrwqz3BEWSMFqiZNz8DvTGscXqQB5iUQ4kJC7hBsMnN4Fw7gUDPEmGE22fp5",
  "key10": "2YM9Ac2xymtUNa828B7ncLfcYSuY1Wzr2Ur3VSxY74Wm5NU28o8sNRLpxHZPS2gKMNmnTTRfY4w2ZSHF46ArjFqW",
  "key11": "4dxWag5CEz8bD62kQ27hQ3hWkjgzP3ad9hS2eeD7csBQG86t4y9vsRZJVZxsFU2LxEifXhshFxKawEtjkm5EgLKU",
  "key12": "24UVjRxusRdSPpN6i83wfgEQmNhpt32oHSX9K32TKSGLd5yAQ5Da2eBXtQXu4pPgH8zecjXeeVxyYB9nebhy6a89",
  "key13": "cE5oKQmSP2XpTABGLdjmvqh3ymNjMvQsSsobVkJowNMC5nzsorvopkFyCe6y7f8dh8Kt1CUzpV7RnCFht5JirQ7",
  "key14": "62GmWSP67iYNDGXFBGrTcMfCjbbS8cq5FMX5yeqrNct1LixELgoPF5TZzwzdTnqcEMNAutjw8V53kkmsRiBDPjxF",
  "key15": "64JLndfLtxNm4jTMDwtTZ3UFELLKoJPnJfUKWknCihtuEKu6rHnpwedxNKtN5pckR7QX1GCRbMQBTj8F7DR4pFeu",
  "key16": "4hsYDzZAembgScctfFZnDeVomZP77jQ5wKkA5n8oDDCWCgPxgdreKCf5hUyHavdJd5YxYXpdLxU7shBEMJqvEhNA",
  "key17": "3f8DhWHX8M45aar4S3nHhAnM1nN5hP1WuHHmKAgoXFkrAPu2M5DtswLQUYv3YugMq1ZA9vYM1vSF242q9UHL6Ns4",
  "key18": "46eERym88WvCaKSxQ4KWrLkVLYAgUWSmGtkdL9J9DRUtFqKDpj2savMi3ukba3oo9bEbAZigbSV455xWAHHm86VH",
  "key19": "Fg2kviVkrpR86ZpEq4HpNFjds1t4yvzSYRXCmqWKsHjfcLuoSuDd8e9iegq7XHrJutK6AjuQJHZVzx863W6UNVi",
  "key20": "2BEXDDYRNG9LaWWyc6p8VGbb91C89NwJSgfbhVYZqanMzaFiRzTTwGBthSmPN8iPcDUFnxDMDb5MBpjC9FFB2ss8",
  "key21": "22THWLhzLTNZnQSEmKvzZVZD1Zp5N2Tgoyhcn5tn9bTiCZPCbePK8Nsc5ot6cXYTvtppxmYSekQcYefd8XosAvKq",
  "key22": "3L4YjmTVyu6qcPMkxoiL7Pqa5eKphWcJfaL83q5jGPGLhXB425nvGtdYKotqrwuTRGy4uUqurmAV887vJdrNfqEz",
  "key23": "89ZTJ2asyjjoxKhRCvMK6CS9hVubFEqAayEtEjULr3jkQfBJ5PgdAau59EzRC9stNQsJDKk2sw4nNV3ae4jUcTZ",
  "key24": "3iUwLqy1hsXbHCYa2oLuhWKWwFCdsEbyDDYbBTbQLGZzMxDyyhFEdFZ7g32RBHcDtmVbtWU9suCM8KgK3GfRmhZW",
  "key25": "MCjhYB6EMGtHAke2nWbcMPeHmanqX5qfVT7aQiNKaQ2w4YuaVZHNFC8VNuGLFVNnJAWs5PvW33m2TV9rnTSWRsG",
  "key26": "3qVeuSS7cP1UvXTzbytAs7rU4LvxeUf7beDyXwEEnu34DTjpDHwyRYio1kcuQbk5wfsv79AnNPocT9gAySjpnx57",
  "key27": "28aEJFG8EKyNmzXjyeTXj5KXVgxeKbmgHHV4EvsmR9KYJXBTjT2NTUMtaffQzQ6s7587XhGx72s2kEkHJq7V22zr",
  "key28": "3bQDmR3EXpvwjk11YvCnh7Wzyh3Kwv5ucvXS51K9BaXP6Eq5mMyjtU35mRPaF4uixkNeL4ku3PsBtxMRu1Anbndt",
  "key29": "ijTyZWDCaNKFdCtuJWMFbZrj28A32dYaRnycR4XjfHBY1SrUUBenLwEM7NF8a1wnru75gYhFk1dcUcXkW5WeRBc",
  "key30": "3Vacymy9uSQarj595NB8Q7D8cwWebVk9Ri5gQ7vY5ALo5AZQePANYKGHEo36ZyuQA7pKoKhGStmAhu3zQB66ArRC",
  "key31": "YbZMeavhEXQe99MY468vryV3yUfEruyhZtPDV3xVpfp7Ennpcege29LuSo8Dq2RnBB23xJxDRhEcK5BBJVf3aMx",
  "key32": "3hcN3ioqhH4WzxWwcm1faErNHL9uvmsMMEPoigmSjastBF5UaKsKrEzCeS2zZcY9EZ2uWABF6LrbQUztXztJNoYY",
  "key33": "4jQ6vwDAipBm8nHGNCty6hLQBrgYbyCDFSECQysZJSoGzvfn62eopqTg8UMXDBimbyyhTNkDqJFHiHT9TvrVQA4u",
  "key34": "45FXhjVRLH7wTqRAeCQ1D5rNSiu4MbQJ47s2p29dwEx49bjW7LRy3dsojfo6GXzD1aY1UC6mjoojumd3bCdyUAnK",
  "key35": "4fA62N7CfzNVpmncPMABK2BiBCdKZv9HfDc9H1CGBRBMPYtJgtBRjg5jq7JgraJLTRn2RXmRoEC8jqZN4zV9itsZ",
  "key36": "3HGfh4rkphwSmZZDS5UFWgz3zLj6KmcL3UBZC1Fv3PBvNnB86NQZpj1rEGpD7Vt5Bpnuu97iJDN2S3caX3RjhqoG",
  "key37": "2bqAjHy3h91FnKUCDTiHmZzau4dZmJMT8MM2VP4vfYUPquM3GZZGGjUofwTkAgbYmJAjfBcQKvytNuyB5iwYoi1N",
  "key38": "3jo5hVWFkKNcKtS7vk3BugrevTSKN28ppp5gUiLkGLrE3Pn6pdbe9QMmiPQVaG2r1N7hJqy8XNmu1yDkSRByTxRq",
  "key39": "2kUq4iKNo9ga3FPpg2NHTHK62aquh4QnJH3sdLEBqqEXEEsxEoACoVKfKsjQdjzxm8TwomPouFvBYi9EHuRDM9Zv",
  "key40": "3syhaixGTjKsHUniuGmu6vnPcpp8CUnK5hQraD5uFcha6L5z2URGgW9tjGmfEbFBg2WCRPf3f1gwtJXUZ6YA3ASH",
  "key41": "Qkiy8DRiFqTViZPY9jQH9sUFxSRjDvRjUJshACMvuWSQGLFgMN9YoyZPVUPtMuKHHkqoUu7jKrzpGCU6Z9feasu"
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
