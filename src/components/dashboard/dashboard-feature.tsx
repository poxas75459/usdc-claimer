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
    "2CFzicM6xcAGxezkD3E7rWbWXEPYDtoRHuxeWDnrGZWhNBDGJG97Db6dSRbnwa4o3c18qf182B5PcUKnxyfKNz3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2einw9fPoiRsqGB58JyhKLPcaotwDfhdHW8kEMf8DULV5tp5qQEosKdwpNfx8QACcVPGTk1JqPtHQrVS3yKtg3u1",
  "key1": "5Z7UqaQD1FQGD3tMSe4BvJSqn9taxMUoWWsSLMoPirCwuzhzeVuP6X3degDP4hQLmfouFpGEhTrdWnqi1PkgEhsi",
  "key2": "24pc5xf1LwV2mH6oPjq8fZgUJkSQX12xCvmqrUELfvhEgyHU5EBmYXmw1HjvVTeAwUfe5BvAZkrAMYotXL7A9Uwr",
  "key3": "5chDzJ7H4ND7ZvHuh2Xmby6iGg7BY4GbX9bgMvgCcbJ1VipR9kCR5bFPDNyimkpJj4KkWGVEm8PuXUUdNpYvxFC8",
  "key4": "3FkS2PGV9dR4ZY3BvQuRNjk1fPmksEQyxYbjiPqjqLRvDgwGry3YGTGbp5HUzUpaYoUx9ThEVxNBbLNg94h7Jwn7",
  "key5": "U3F2i3BBCCpdB26UJwEGX55hebNBzBjwYvLbf1TzSE5U3WA6RJRWVG6vuwdFceXX64dPLEnNzbWbXHDGnokUCFp",
  "key6": "2todQvsSA3pkCuDk3gH5gx4YG5W96rDzdEcSXu8dW9CVRnmxJWRURhXgsa3XDnQpCnwe1ByQNW9uwKRvd91MTKLT",
  "key7": "331hSuQTkxYLxTD83wNF3z5j2eLHzGEX7obtjCR5YL6Sk1CKip29H4UT4ffKaX3P9xCD7P8UY6vUEBUeXN4UBFV8",
  "key8": "5bNLxrPv6a2XtMVSpGLiqsn5eSWHQHgF9nJDNhADjaFAGWJALcPxJVUoTof3s4DmZ2nRN889dSH9zMj1ZmWQmdQD",
  "key9": "4EgQ1vmf4nKkVY52nNJvrKC437vtZx7mNJWZDHphPNfXuntzFFK5KAXRkY3Eu58z2uReL6hNRpQcE75ko87PRNtk",
  "key10": "Qy288VRo8u196Jfeyeev7fVTj1BCCWQFFet4Gbckm5deKk25Z1CE4cPMT9A8a8FhneErcDBArdS7KFg8K5skPX1",
  "key11": "2aj2zEVYr6JjsqCEdR59BRoPTtSwbCo8pkUGWN7gRpUTbLkYDKp9mnWsxQiGGp3hGWfWnGxDNEtvPWDaTKZmoXB7",
  "key12": "ninRSBFbFvM7z6KWGjFnimCFnN6GfqErcgFXEzEdmqeeD2S4EhqeGdiVzpaMJPTabohx22jyrQtm657QT3ekcQn",
  "key13": "4k5pDCwLxma8AqnJ43P4n2QA8bz7nDPorNvtHvnu9F3pAYnR4pXSJpuNfzpCAqyt7NSJRLZqd63kiHV3DJSbazyC",
  "key14": "uSbgLYSCM6cBudg1rXkyTkYE1gCiJF2kJRApCmZC48KjaWecjcwPwhn2z8xtSzdazkjd12xtr7WPcckAMarZMQq",
  "key15": "7EGokD8g3mu67Kj5iNaV2AXHWRUy57gLuVoQoDuNZMao8JLXZz913uHqAzjUy8RpbmoA3uMikL1TStYrv9e4XhQ",
  "key16": "zdzPAJBrPn5ry6Kb4m3d25tmvudheRoBkXaT5W9v6PCjeNY4jCMWUSvmUb3kn88ygT9TTK6VRSu7weFMewL8Lxr",
  "key17": "4BTfeiqrXPTTisNUt77bcuZDpxuau8nP9gvZjAPiqZxv7kdxG63APC2Jac1wYnPtXu6PCvxgUx19i2GoEWYhKcoc",
  "key18": "3ZBe2SfdE8iCNDQ9d6KrF6xHSnb6wMkzcJWkuGumAUUJyWoF8DmYiTY8Ld6YVMS77g8gqeTTh1ucPZvJapjsXiu8",
  "key19": "hdFBjKA4CH6m9odhBDwJ7fX7kpX14VTdXbH1sUmcDh2gx6NADk3kQ2JPKajwDf7m9B29UidSG76XS2FdSWjbwLF",
  "key20": "4CZGvjQ6Na7UUPgPgK5JroGsvWT7y95J5Bim8KXPT4od99jP2kLxMtaude4tuYJ78rw3SfAcGDZ9oA8V2Z3TwoVG",
  "key21": "5V4LSqhjsZEyNock2auexSXgEWtZyA7B8DZee9edmJLVYagJ3Kh3oDWRXv6DUNAzLVJ4tHjaNk17wPZumvmwBzCV",
  "key22": "4bCfYHaHrPXBKdVSH6xAQBEhLxsLn4gMkDTBVbxZpLPSDhA71KnidAXyoPmknFwovmtZZruNFYckmt4Vew4Qusep",
  "key23": "4SEpMdKDYH5SYrxncWs6EyKS7DbBN9SXnTq4mu6SnEMG64JzTvudBPQRCFhzFAodWYBCgd2RXMfYhTsDcAUJzpaZ",
  "key24": "QvDLDvhyFoeZ6HFq3H9rBNCYibkduEoK94bE5stkLuakfabteGkBAq2wRpdFyvnQGG6WcPCfMVXNRq7py2BZ4rH",
  "key25": "37r6cux8uXnKpWFz8PYSPYDxtdh7RhFV5daygT2zsGsF5cyYNe5pFRDDyVCzqzC4rkZrMffkZd5AzBaYBq3bdqFU",
  "key26": "fTyzv1GwLep5m2TrDBnpQ37r8g8XbbiN3fFiic445kgLS1R9f1Lr2Bz531DickfptZLz5GGgzxGbj9s8mt7FzAF",
  "key27": "61ah4Y5mjSHkteg5o1Y4AFPTDLV8G6NhaGRH68gMhw8t1XpQAbzrFHDadMwqbY8GB9DapJdtRDnM3K8EQAAz25yB",
  "key28": "uu3NMTsqAbe47ED82e63kGW6tcw1YwinNsj2tUadZuRrSvh53VHatvTP3p3ds1P1ZnfwDYiqaPNUhL7mRathvgs",
  "key29": "qr6tQS8ToQzDsKeA9avjpT4DZKJPVC5AUXNSvvoT4CaURtYzq7HzHDVSrJTDCRpScZtWScXYT2KdWXTwpmuCRqm",
  "key30": "2kg553DHQVZkQ1axYXdG89pB5WkLkHF691HTyR9mqEgGXVp4QJnF2FF7hQgt7Q8PkdTKTEpenqxsPZZeV5BcSJt7"
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
