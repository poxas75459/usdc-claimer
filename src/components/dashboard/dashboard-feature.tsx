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
    "3hmeFJzmNEJdz2NRxw25Eco5WMhqU8tbLkcnDiJhDwMuFJHaY1UghMD5aJGaz6TUP6vGJsAwZB9ZuvR8GHJ6Q7XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJfvxbEpgPb95ASzepXZtVe5jddoYhKGXnM6jEfxYpoCAKx5Ugh5U4WSLGC8nG6kJ5b3McHpgg3jHhJeB2WEEge",
  "key1": "L3WEzn5Br6hBC3W2wdSzbfPzo4X9m7eCUxiYKmC9FkNfrxFu78hCbdtEUEhYt1NYtpYQr2LNyFYECsErUwrieGK",
  "key2": "3629PZSCVzvbcocitfw65s41poFGw1S8JLeyaDxim4g7w7KuDg72NxEBJQ6VDMFXnQixWSjmqVgNm9dPEAcHrRuS",
  "key3": "WE9UD6BQ2wWRL59hmbUB6dk3P7Xe19aTe5CQ6CjKDtNc4WpAXPSbgHrEVSaqXwRCsZFjk1fyJuNFuugFsUy9zrc",
  "key4": "4MdCdmzLgJs6LugTdDyhBtZjuqjSGb5jMw7CsXnyVJCE3McR9UoGZzmbTfTuJLigSMz3MCUgyz9txMoGxrMgxW6m",
  "key5": "4VyiVEvLTCwHRVxKRed5LmHXphcm7F1rrAgzgNp7saQQji1dBoR4LyGk5yn6QXSPA466zRR1UVJbqGzU2TFFF2ii",
  "key6": "426kLLwun5pFjbnYQM8vC2MTP7zftx2meMbVDH9iRbB9s2WmFqygMMJNDJhE7WdKJyXdiNRDddgn2dZZSKCTRHQB",
  "key7": "3AuF6Vjce9UB7tvAMS8ejkd4vha75fBgp4QpSMYoFASD95xcEofSAhgCt4f5fZqavokaZ2bDmiaPzMnKAUHMB64q",
  "key8": "4ozyGF2wFtWiopeidPLuVUauc59QG8CK9uKBJM9mXzhwp9h4XZJtn3gqRMTMMUt1nBDZAixzqTWfTYYUscnNy8un",
  "key9": "kpFsJkgrfypT6jFmdYdWEQ94g8ELKjx7NvXySz3jpqjmuyoHxzM7T26nCu3QmqV43dRY133ce59PVHWx3DhFXjf",
  "key10": "4bJ6LgnLWhhsAGdfZEMca8haaGnmGLE8u4HK3iHMjDQg1XLRrMRJG44tJRe1SNmDVUKfVQ2ygyEGkkXtHG75mVNv",
  "key11": "5vhMqnStjggABKhmeKjFyzXiydezDEuwUBs3RKvX33715zMN7fShjLqDquNHBF8uFqJoLmLuZweRZ3mkyqvEmLu7",
  "key12": "4SUXTMbvrM5uD6YADXXHfaA8NAXqc7WSFD5ap3j9kozouGEctwnbaGDteMQCbschjuzRaZ2Ba1nkXQZYUPXuTk8",
  "key13": "4JykUT9sUNrS2b3REefburwkxvTiYJpe2nYebgM2JQ6CnHVJxSH7mcRJYir8xUjUFL57ouC6vuKPy1GNsfogki43",
  "key14": "37aHEx4EriUwFpbSGmTaC67NzjfcgtJULiUonQJnrpFC2362yzYeSQSR9RSp4jbCruB5VgtjUUziEcKfmMhXRExR",
  "key15": "3cqLCi91Gt7je2RgUqY4pm8QqS7sQTHuby87r96ha3r6B4PBq2oZLsqhph4wQMkqTr4CSZJuxAE7v9Tr5HKEoJCU",
  "key16": "4y5vxnBjx6ie4khgCC59ePH1jiHmyR4skfbLBtDXSokEVMQNYjPo3hYG4RUpaERGpKF6D9FrYTiy4sC5wJmPwyzr",
  "key17": "4SXQMG5Uh7t2tBwfMryGxhgsxsQrhF35CJH7CxG4i4XPGFWnYQ6FovWbN8szu3iDTu7o1VTBsyu7GPDTXHQdwtaz",
  "key18": "3yLFgtNdLM4XKdw5dpzJYjLFvPRUtrsiAg91AiEK8drPFGafwT2E4Ftb86QCwKWDa4JsPCNHaxYeX8fTkKxWL61B",
  "key19": "3zkd6c7V9b2diBzHLYSYp32V6oXmzc8gXBhBLhJZB26GMaXdPry4JuSEqttitutG3mf5tjnvKCdKKV1ADDHEsT9C",
  "key20": "4r5GRrvCT9jxRUM3AJ4C4tXpmPunpAWkfsQ6FHfVkNoTHjZMbapxUErsMymtutoCi1Qts1XNKfoSMBpKd28FJnfz",
  "key21": "2CH94ENE2458TQwtDS7DhpnTaejNUK45ALAqqm962Rrmz4eMues5x6iRfQb2f6N1Yw3c4BNDVJh4YcSPt113rBue",
  "key22": "31YYYMhbcwkhh1EgtCUDG5X31qJHWv1acJ99meUcGg6sCLFo69VB2g8Xfwjk23kQ9SDAXmpykNzhrXSUohe29GRc",
  "key23": "gNjC2pxhZGV1hXGcJSpm4SvLe9C7zrrf4XxJeo4qiCjg1XXmGthRfuKHV9RNhnyt2fkUJqQB8Tw5GAhVZG4CRJm",
  "key24": "4icKnyfsmXophngQa7c1YCUhQddHZTHifPMcEShNGUiKBsArcdDykJeyaosYjb6yNdx6ySHgXoVa5S5JiQZdY2bW",
  "key25": "5aYJi21dodZXRh1i28mGg8c7k8VwQzCkvBYWoiHSTfpmX4KhQYt87dRAQ6dC4P3X4jZNxAxor51zM5SMnjMV2xgj",
  "key26": "hHSnVJYqE2PaPHdjtYoJnsiPBJvWd9N1XwDoyrqZcpdVtTnztmPKTXnWC2XiMdqaCTBM3vYdTtHWMzNSApDgwus",
  "key27": "AhG4SN2WhsuNPYpYkzjbQCvMsadfhb9c2Luv1WKy6avumxSH8pxvQQaVLCztBbAPGK9hr6ZzhEB41g32RLX3gX2",
  "key28": "4o4kLs3ad3JCRRJYMUbhtRKoqxunuHhEQh3NSrPeiaVWxqpRRUGDZgxyKs8d1uiqmA9iptKctVZSu9namyt2u3TJ",
  "key29": "25AbHAB3GgFbAQKEzSZuPZbPUr95QqbBzBhZ5z66irtKyEy4H98rXrgBXMDenTpbRqq2xMdk5eQnpHUVCy4WArVy",
  "key30": "3BbK47rJw7KBxy2mEFXFV9YzXesMUuz3tdvmNAwMvvBkEJt5ppfrAtSaBtmZwY6UsD1wvHJi9FYwiDSXxzHwoMHb",
  "key31": "4iexza6x4sGd6iAo8sa56or9SuP3mrZfZpk7mVDc1mpz4JE4HSLLopv9HMC5X84qCGsnot21D2uwVp6t9Nk9xjBr",
  "key32": "3UXTU1VWEmAgujgasQ4sZDUKzdAuRYVvbaHAzaAiqt4rwrDcvkFHjrjTVJFwdkbYhK7AsPZ4Gsa14SnBa6QerzmY",
  "key33": "TK7rueGwXDc165Lg6wnXXAD4UbcNfeEamhfdH9qnhw29waHYTsiSAFt7yiiPbdY98b94F6yP7QKmXeLC2oLUf3c",
  "key34": "3KnjLfBQuyFkr823VLgkUm6QT3L27pDeU2MnqzyvwsFpEF39LWKJwkZm9oNuLe6wpkY1nid3uxwxGDtijfnyM5Ed",
  "key35": "2ECde48HKQxMndBmyNCgivxg98aKzUrFB6E3xG4f3aZ4z63CNHkjfpdAJmrreU7cnTXmFwbf7DVy2PNta4uVp9FG",
  "key36": "67N4vkTPyGKuyaMEoxyRWVw6qgdKorKh3m73JozCDjPuojr2hKjVcyzCBWHP1pJiaY9zZSMLewyLh4maTgzvM3Nr",
  "key37": "3XmBaX1BU8fo5CeJXeKHWBZcqkqPb8MsSsDHCohxHrR7b6BYex8ee1SgrmwDPULPFqkAH5qYt6NAT4BgYAvcTSG8"
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
