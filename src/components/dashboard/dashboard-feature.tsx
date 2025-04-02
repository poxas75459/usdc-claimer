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
    "5Cdvye4X8XJCNLYG2tRFA2uxmc9bNGYFm2KCytrGC7yJLdwYKDXvVPJESm1gdQF3Uga676mDXJmYHa6YNhHiBQ9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkEP1Bsc5ua4ojL82HNdapPKZVBsvf5mgWHXg1tNMstdNGzcDZsEALyJJTq5CWBDzgzKTPhBr54uU7SZ3z6PTW9",
  "key1": "5YpUaKFxx6fKKKBY9UWt3xuxP5kBTcaDvedfivwQezFtaU7gjvSiQrVYzV84ARpFd4TxD9Li8fj5H6wdxji81Cqq",
  "key2": "25QTyfnj5hooAeQmqVc4CkCAyjhe9skTGLKmGFVd7hedwQ6RLN9hWMRvTsVYMRM9fxUwPTcYoapaQtgBLVsoSUMs",
  "key3": "3AXV224NrwnvY9VYnwJvfZbNoKYRkbsKzu7myLuF6QENop32couZy54YhmFAxe2nCQeya6nPdcnoEkZfbpGGCtFi",
  "key4": "33No69dFJkddoQnNwfxWZX41S93HUkoicAuyqa4FYqe3idQith5r3KeUYCWg3Vr2dG1o3iThB3QbdfroeX6UAXDP",
  "key5": "4Z4FS5GrvTif38Sjoy9owj5DCR9RTaDpMGuVQ21qVDkvXkhJXpNpi3JUMv77cmmcKgLXW6434u8pT5HUDkQqAkDw",
  "key6": "3NctNsG9hgfHiknN9zssaXtRALnYDrCQoRNdKZMndv8NhJpXazvAM6DiXtvUztjrjt8wHeCEpLidTrJujaBySXVZ",
  "key7": "4n5tXTrbPgWC8UbsBJLcAszdcH7BpAAP7GwHTe4b8h9ds2ajgCw2ZUhZaevkztkc35qtgYaTL7z2BQdD5EW6USfo",
  "key8": "5BJ8SPsQJZf1MBA3AY6Kfw71MS7DJxPG58MSraBHRoiD4S1fmv5z2gpyFLftTVR8Ws3nFNMK4iiQrNSQPnPdwF6J",
  "key9": "4CUiLoc4Vi595dJFecUQCdWuJiPHxpoczUBYonaMYUPEEb6wqVpKyf1zRWQBb1hNxumUzSki9TFNfELQLUA2Ri4W",
  "key10": "37feq5oBmMjH7Jnoy15ruLxAt3y6CFxU7bmMxGTks7oMcHbRiaBwc6YeNSrj3WdsbkbRLQSGtGvwbXFxkfoRvaM4",
  "key11": "5nELoYWNcK5QhdbkBwQpT6N4Zccoi9BfxpyFQqEHSj4MaiLWj5KvMRvLcnDR6irJNZnArzTbaix2wmpiJejm9s4t",
  "key12": "2JRsstTdZL5bJsf3VzwpWRDoEwvZJ8oWL3LZbwSBjCQj41YWUb2YHJTxcjAFESuQDHrUaxR9hXMUqQLvGS9pqb12",
  "key13": "3XkBXNujM5Xo6qydbZYDxajmc94TLofwvt4eAw8ZmVfNWBY4aAfGPyVU7mKMLjEZYt9WoKwKm5MgskixbqZmfC25",
  "key14": "Q91wTrmBDdbAC8fCbxKcgCHDRu9SeJ4AS6pjwCdR8Q4yuEYbAT4bii92wLm8V9r3tWUzJeC5z56CkQKK4yAzUfW",
  "key15": "4REC4dvbjRzPxKi2un3LaKNtF4GnXf5mmoeeZTp4BY27iQjZm22ZwY6hwJLsfR8mbLxLTcquFQpykweNqyG2xVSR",
  "key16": "4oowSJte28rzrrpX43Lfe1gmYJTP2FKHkkusFXbnRznH9CmDY2Ps5t35X8dQbxgroupoTTxy4ZsgFJrNCQybsn7k",
  "key17": "ihFVgibw2NMVfdsyhrUsu1ouwPjyR2Hb43DbSuBnuMhwVeSKhQ2ho7Kcq9pYvoZuCiw1Ve6p6A3aedRBcLNYuWB",
  "key18": "6i7k3BYSZCqoAYi3JKmSzkyQrsf6GBiud1iFR8pFy3Lv9KgjattCHdkggUTDteUNPhMoueVZocPbRu1nAHQFLbd",
  "key19": "Am9N211t32BtQCsFFwGnwFsuf4p2mLynjG6JiTXacT1Y9fchiojLmMWkAVcQunkZPDzr9ZKA6bECVYBetEYWP2K",
  "key20": "2rJBwmEdMP17EbL81uUgyDTd6eAakeeZSBVaCkyXXC5TvmhhxDVKnfR5ijmaczKGFEtMQPZ9YyP6WVFw9tv5nm9q",
  "key21": "WRG5kbToAbB4AEPyxbKR2q4CAFwbJ3miPdZLEWQ6S37UxhQy574rT5DV2fyvUB5qiL4dZXDPVFP8jL27jp9qLAg",
  "key22": "tmbdug6eHxezGSck2kmQKaU9FHqGNjtigPqNnVBUfTq86GX3YJBjVQDkV9CokroPcwJWiKTMgJAw3QPi82PyvbB",
  "key23": "5bzQVN4CMZPSgU6VH9jPQedkGjPxXtN6bywU3JWWwkEMwpzohNHZ2vNi94dqYzmZyvbhhnD5BZCCnxpsV9ATPTw1",
  "key24": "3NmcfNYgnxNA4SUEq8NdTD2Ru2A41KMnfuViUeM9s9ciuo2SYdYK7C7i9XGhw1uqVAmVy1jKN4DUMqn5Lj9kd2L3",
  "key25": "3djLiwNg1F3Axp9zGixn9QTS93F14gNUxWTVtJirzMtNr1DFWtfXYF4BJ967rd4cpSCUBnjeat4Vkk1rPqgQ372x",
  "key26": "2jCSwh8pV5GaA3gdDsSpsTaLDianDSTQHfRui43jHCEzGFFnb6fexwCvGeeVhsQmsY1Hmpg2xnhFy2C8iiPiabuF",
  "key27": "5YJtxenkJUFGS33Zoo5JRRfeWM2CoS92aKNe6oSfVA6qiKateLomAPahGWCQPkbR6bJQDDdmQJ5o9NfDKmvwSmMv",
  "key28": "CrVqpZMiuYHZEFCGuuv7qXcygt926iXHPw3c18Y9Y8UEk9kCqLSaLHLfYooMwQQBeE58361GDR4XAfzqPaFJbQ3",
  "key29": "5hw3LiBQkQWs5HsnGBzjWisPwDidvRom3kPs6kPo1cogqGTyNiZ72Xos63Xd7vxDUedNcKpAppfHyvMQqp5hou3J",
  "key30": "Mr2o4vibpAwidouP3Ft4Ys7fCCWeAPXZ6Ar54eek8ruUgGt2tgJVsxt7XKdwdUiVPQgt7mJ3GLoeDTcmFYKUrJ5",
  "key31": "3SnmKzj1emkxqzthTbgDtPXgXamTdRiae8zSUNxBWnbmyFYtUL195NsWEGewEuy5kJYLECGaa1Bz1v2dTpG43DF2",
  "key32": "5eHobp4KbeBnnGYPKNw5DnQXBrEy5k7ZhoNkKSp6BYUpcfEKGbfVHdVaH89NtimNv1934rRh1PWjnhfWaznSX3CH",
  "key33": "5tiBHEFmwBp2kbG9zStzWbB8fG1VZpsGoEcLbqqZBhkNyHuozGcYjUdoecgWQM3kPYMMH3iBEmzZsQX8SmCHBsqq",
  "key34": "2biiKbFuK6zvrGHrzndXkcFJc8ySrr7YtdwcsDp1Gw9G7LkYsXwFuZe2omYNNwQFs9USbnHZPFS8nZcexLwkbYUE",
  "key35": "4FxkskHY7ZcnjDwxkrAVV5otb6odf5DxAetdpF6w2DVWXrhyCZHppDwiXs5kwdkoFzspTBEMHgh8PHC7twzgFtHF"
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
