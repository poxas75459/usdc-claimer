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
    "64nAuCSX5MbSsmKjiza9PjFJPcoiWfVjBqsLhQHUj8kkagzPRmGnTHVHZoZfy713ua9fc3MERWJnzxXLqi7FqiMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEGUWFhMAmyjeousYtmqh5k6phbNipGDRf9FWUR9fzxctDQTH8Vj3TMsBGm8nUZh85JrfwVSmV3RH6LXTnj2ubi",
  "key1": "4MERrmzrCoU54WCVmnorB8FwnsoVM2BP1q6ydrmqjLAHzBKN9XaCdbfKzehTwiCzVtPPa7e8qomkcmiMsyDThh7H",
  "key2": "5JtWeJcH6avxdCG3MyCuBesEqqwYSZU9RUFKWQ9AoGZi84m8TD2N5v3UBjqJxLpz2rC1kY2G2R2JpqkggD9Nn4QE",
  "key3": "4i238FL3QA1JSHCQWxWG3jfjEXipbPGnYMbboypdMR1r2AM6a2uFgpKNsTysj8U6S8SzxjvcxxmE3GNAHGnm5n2A",
  "key4": "5x58BEn1gR64TjB5ZCkgJPCuypWGoWNeRDN3mtdkAbmQPHjpWyRSNP7WcYXhqSnADLC4k1ZMb7BFQzDv7BUToPcw",
  "key5": "2LHmDHo1XZC7vBCzqEwtoXSSKb2b3tiHBEq3ZMJzSAfvbEmrK9bjsL4SGZuCskxqzdXEBdmdVufcfxyo175Pz7aS",
  "key6": "2A5hx4ey4yHmuD9u1pxGMmsHXUiZyydFprBzR6DS3jz9MbV6BbG4EF3sBZVEkYsBFvGLt8z6YrVQwDgsuzsdMVmX",
  "key7": "2iq7rHJ4bP4RhSAMoF3iNb7zb4t1vru7EcgoSgymiQVjsZQE6Sh6VF59whJ5o8fMYXszDiYJvWobvo9EDK3oMMVw",
  "key8": "2yWwmyibimQayyLCquAspaxxv458tF2X1LZxkFP47vVsB7NKtYKeWSiEvchxdvcpYZW9o5PyD9t8sbPrgVRV1Ac4",
  "key9": "4dM6N9bPzAnzj91mdELUYi4f5PLxTJrSBnqyr8imUypH7jmcpPN9iC7yuquWUkxv1Ghm5Hj8JkpPBJeXRFuFyU6Z",
  "key10": "6xuFXE3qs4jTTpLjnrbyp4cArWwWmojhXDoWotfj8MejFdcKMfumLExFyq6PoXkUaLxYh3NvgSizcKWBAGAiQFr",
  "key11": "2Q6hNNvw5NceDV9XamykhEmmv9zBhMAJF23eXbuCFrPAzPUQfzfo5pMTwfyx358FRNpV7cQxGu3xAx1Rxy3yjyZ6",
  "key12": "5CFmTprA6CSUx47nobBRhmFu13b3US9upT4YWhgciZEAQXTguCR9hoNDjnKUYbxbwtWDQt1rdCpq9to7dtMcDWED",
  "key13": "3n773AXgrGEn4atKmnBQjX4Ryk5GqzWCdUmkPNFYqopmmWq3QYCQBSq67Ppih2vSySkPRKGgKcA99s4T1CBdTVeD",
  "key14": "3s13PC7Uk8NntfX9yNRkQwQVCSSbhjMabebMD93AnPFoTC6yMDsMYF8nCkwPvef9km1Usv6VCVivPX37j5D5i2Wz",
  "key15": "5ZLpMmVgLUxQ38e5bXjqFbg663D1Lh1T2Gjiq7G3Hr1USwbLtwA8ADM6miXpE4HXk6sv7VCbRKMFghn5B6wGXyjQ",
  "key16": "47NsjeCvgQH2c3LiCRmRuBi3HgrRnJQJ3zPcuAygr3Q69hLYEVTu9AS8ggBnagp13psSAviG7y6nBtMFmyFCAtT7",
  "key17": "58RJZxWH4a16YpvgfMAPH6Sv8UnKixLzmwgUwQX4tvmkMTDwRKtafbD1J9Z6TedV9RzCJWN6ygjwLN7zPcPjyav7",
  "key18": "3cThSpo8aKexkiDgteh8TtBjNVdbNciSwTfSEMtLzHFSaDGgjfrTQaLjL2KprZGNDKf9PwdUZMmbyH8noY7vdZA5",
  "key19": "4ED7dMb9Hb2rMBa5VndReERyttQBP9XoYoPZpkAembJx9wFU4XmzxtTc6nKrm2xMtkT3Ys1ke3Zh9RL9BmHqThMQ",
  "key20": "3hq7kjkspbTwGcK1wJEgbQFPVYvjFE7Agc4PfZYevB33eRUa5U2UYHrDBprWfbV1n8drcbyjbboGPfEYTsUMdYuL",
  "key21": "3hiiGJiNyfEWQHQ7u5wdZhHbAAH6pfaPoEePEFQV1PBUMzuH771emFAdMuLQnamfxZfD92CuuJj3YFTMWnyVEPKe",
  "key22": "5WPPwTGxsrR2zruNuALxhmXq7vw9N8wzS685M2J8zuwPB44EawWVeTw3ZVkJ4UXTPac899TFXLf4nAgVK4kf9ucc",
  "key23": "4qdvyUxxtMKtKkjzct2spAQwueqCdwNhARfgxKD2ZQnPyZhdVfbxfMzkBdd7vQPJ2zJweB3BALhtopP3y6XknLgZ",
  "key24": "RBpDFarixwpcG89kHpNJLCKfFQqs2rTT3FZ5JxMZqyxdcroqGkHuKFTUJ34S5ZTwBE5gmDerSrN8L527uUK4wGV",
  "key25": "5F9Z52wni9XeUZ3ccEizmrcd9b4y6uHK1gDCGkBbCmYdv3Ctn4nH3ziBfx5QqbjkPNFFhKwUyCVT1pQn8FWWs8xr",
  "key26": "wHDvj4pVK3se6F92aBLCzf91Go9hajaSu97s4U24ojUhsfeYF9HuYgmNbaBMJBHVsaNnDfMAVVuzt5UbtPBehEm",
  "key27": "nzdECXRjEgncrBMddqUUMBoRdueDZg62zcFAYs72AF2w6wG2EfTDMYveqoANcXMYMT69G1FmYFEkXEDY3scjXDp",
  "key28": "5ocYanRCpdxyzzsb9fJgnDaUsLSpGwnoMoWpUzxQFWAxpWhSCyZwAKRpoywKNG3g4NsD1T3TmtwpANXe6hHehApx",
  "key29": "2KxZwk1BTJShqytCRCxuUGfnZQ4b75wEN8iwuwEej5bQFpCHMnQx9yyjs13nNKiza2YQN636S6vcC23PsT92RY8u",
  "key30": "4C8jb5evfawGidBmFNUhZo2V3TmPmQrgUqENvJKc3kWm1V9SBKVkR3jXacNMBdPJHWLtkpbMjk6MZfcoSmSJhVCx",
  "key31": "29dswDdVcnDxSuJbsw41KBrTJH8ZkMBdJiQdYR2gifMCSdxc6gsbQ9m8HbtXwprftHLETZUCnzqqV5U33PUFbfZg",
  "key32": "5XNK5oJa8tzr2mCNbZFNYkCiAWvD1qeVt1crBcKBRQh8b4vfDvQKM3kqTh87x9jY98yifQwLfthFFa3ac68McRJn",
  "key33": "54cz8TTMwEpdrax6MAurgzMpXwVu9YzoAReBsA5B9goRdZWn1pDpaprmLKPM3TwipGWJHnttjpRZbaWa7x3ziZH4",
  "key34": "5a1mQhQZoL3rtQcxHzcJZA9Yu8gkoA5hsccd5CCySgd4ktaukxhwCsJuzjQsZrram7DiyYCdMDnqmZZRo66EqMZL",
  "key35": "4g4EszpdhG2RoD1csAdhC9H5m94z7MnJZ9UMMxQDb3eThXJwxvFdqxvTtnihgd4LtTzqPp9EDhkQzSjYPP8QCweT",
  "key36": "5Lvwsw8N9kPsE77mC9GCcBq6wPPjAc2fpH6nzzi7qsJYxrbjsUHNtArhzhQwRKzDvqEeuoEMmqYYDBpeWi6gea8X"
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
