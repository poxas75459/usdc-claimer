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
    "33PVM3eTH5Wc5GkkrL3TVSDEe4aKPZkie4DdmZui6FBhTESr3gm38anCvVoBk6SYpMkn2v635jzv3PiWB8izmgmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NF1Tr5RJeFJ1XXppg8QHkmoLEeTgf5gADWrNu4Wtux5UBCmk3ckFHoR4Gy2EKuQWF3AkBJdumMGNT2wGkXsfk4K",
  "key1": "2GdtCAg7WEgiCFvLegroN4R7ECt89PQ5Yd9gFjQ5VSnzTtXzkpVK3Law7TEVjianJG8xDNvq5qMdAq9rasFAGqyB",
  "key2": "2UvM54KsaqHHb3pArrS5SfPeHDQRKpmAEQAAAA2vbxkocgxDj2FsGt5f5GDRLxR4KAqBPNFDUbjB5Zu83kME6iCP",
  "key3": "3C6U3hqGy4H4u8AVT3FWXMWRHgFnMQbP83XNXz4wv82FNJX3Pw1syQx7Dw336qqp19kCCf6jsoFKaeurQEQLjQH1",
  "key4": "t4WEPsJSKuWvfkcYK6pZ5hrL6Z8pRGbctcxjyPYDwFW7r332icQGXwo1ZB4jAohx8BLN4WnMj2rxrA3uShKKcmA",
  "key5": "2Q2SvrxYu5xt2u81XH3BNuJNpdcsaXdX9ysqKVm7AAWe9pmWeTDRp7wBRh6fyzhPryDvQjTGcAGZ7ES1faHLZXME",
  "key6": "TtQzAJCA9dBAFJUuXwSBpLvyLvwm1pdCoEEiTimjxc9P1YmFb2mQ3ua9otFruojo2djGrPZ89NGDKYFFbvPo3v8",
  "key7": "5F1NYGuWyhhoQZxkbcyyc7wQzN7jYi2TDpyD3496WvWwK26xkZcb4h8hHebuz9MNexZKQans4cP6hFt3xwGJC1VE",
  "key8": "4Ut22E9vCPYYEW5ADwCLbcZP7Tw4DZjpXXa3eGt5jyQrVrkv5yjBuw1XWDt3N47NhHJFq1a5uf4ivMmtYW8r2Kft",
  "key9": "4GwqsDanuMAqfV6jPoQbxmbwz93H4C3cBQr9jozqqaAHTTytD6xuphcAWdgJwhpWw5U2xCNM88rHEqzrpHDyGRSW",
  "key10": "2YnyMKXngsXSdNfhKaS9R4AdNq9qpvmebsWjDdThdhjXWGjn3TAWx1qpDA39Ndnz7BSuX1RZiTVj7Y57qSMhKDVf",
  "key11": "22Lghrdi3dzJmjBRtagZ9m8Z6Kw5zrUWKuZD5r5GeTTBJ3kBoM189zCGqUdJy4MMgte1FrFwNkKDi1U6Jc8TsRRi",
  "key12": "TAufkpLVxDcVfUy2GXxo8DekvufxW7R3jbLDVrjbotj8sKyphzN269aWThy6Lf2mN1pqWgnigeFyo1a6U3NXtPD",
  "key13": "2VfxuKB5oGPFco7rv6CKtG4KDtL3Y8prEBdKzbXNRj463fCLLPyyLjsgvmKUzpakpJU6datrcLAqXG4YUPG72v69",
  "key14": "28WGgMT6UkrFXiCZmJYktucy9Zv7LyFnW6tEAEB4m2Mi8pMo6M4Q8mXAZiHzXXGroyke5Wz5NGaehvWK8HNVmbmY",
  "key15": "mC3CUPpKCMvL4PvSauP7eTWsWaPv6jEbNmNaA6feYvpwZsJBHsdzyhDz7bcJuaaaGGc98jCY5pGPVnpBGinZKQ5",
  "key16": "5mZTtVjt7HYD9uXKAHghuzHmgN5dDUcHyWWU92UVJ8WFuzuaizaBTLXKXwNrX3psvsvWs8Z65GqSw7tTxDG6C8XE",
  "key17": "2pZcgWYjkXnv8kUpRMzYPe7anLiPo6QamgRj8DX1vYwWN9z67DMwGV1oSvdAn74wV3tErN1NQ828GEABWsfS9KsL",
  "key18": "gWZ3SqGVtQnyBUgLhhvaQam7G6aJZYrffMPegMrzAAr5npwKDFmuJF9XU4EJVaRZN8sddvV7rGMKqHVvrN1DvS8",
  "key19": "5MHZFwpaRtFSChGNTKywaDRFgovS8DmSt8MiofM2ez2iwE8yQBpTWhg3GcW4A5RLBPCuu6sc6Dryi8E5ReEa4M34",
  "key20": "kmiCwFKBXM4QtQf7VNmVg9G1fnB9KiJMpnT284EryHo7bUbJYTqtWwjxt2cuzzR17bZ4oYEMmnaynmWFaCmphUr",
  "key21": "SJV7ZtkG1Lzqfd3XXLyKaCZvDHVjhW42QQJbKcekQ6xWPa8CMm7Y6CigkMHRwts6BfnS6qgFEz75PtPGaGi2VJ9",
  "key22": "3wyKa6ocu7rBKC3egvmBywL6o8a6kdtrp7NMnihQKpDvXp4NYRYSqYvno6xHxRd3wwTHjw1yExoGTBswpjSMywUb",
  "key23": "5bEbWtHDZb5nmcKfasERwVK6KHdpxJfLZ8qtbXv9jS4MX8492s3gVTC2gthzADoSTX77X7MHUhZZrANUGPtNgTLk",
  "key24": "bNrnNeTuDwVT4YBiGu2TWUWMv5i5YFsfzcwWZ9dkypDL5bKwpoVMCWD91FhWqmfdH4dA6QyP3H8soT7BuiNvZET",
  "key25": "2fo4kxUfHC5CcbZJDTNCBwdaZMaR5Ht9XUQcWT5ck1CFHuqDurVN9czeYgEB4LNmcsbNXbwoDo3tF4Fxhu2v5v9K",
  "key26": "2Yv5cZbDZNdykKtj7zZof8cwmTqWXRWu6s3fojNoDhQz1GNBmqFSyNvxkDLLHL6fBkFQJwWWdQGuiTdHCP3ssujV",
  "key27": "sr4LFj5QqN3yKdmGbBKLQLZoYcCL3MjZdcUYYQnHJL4KGxCacgUkox7zaURVwK5XqHjLmBqVtD3s6HygLBcAFKo",
  "key28": "2fwGabrXevPuCyzJkEBXFQwj3Stv2iozwpLsRdCAux9su1XMxpdYxditucLYsnqvJFWPs7SvvYKvxCAqyTwxwZPG",
  "key29": "3eTDaN53PqAvf7pPW27ot3giFXxUykomzaFCGTRQA7ZYJuUofxGvSzftwBjeDcADrZYom979vXtBKkAEytncw3f6",
  "key30": "2hn3EmL42cTXNrX27iA5WhynsVngra7yp3AQ4E3urW7vy4nY898KNkBDJVcVSEQFB7rgzYP7tX26QZMjtg1vshyz",
  "key31": "2LBqazwBKDqgUiBUfDUud6eUM77uKkocGhaAScZK8W6nbH3Kbct8ncACRneuxxEbhyQ6JNQ1nq99HvFmKey2vwH7",
  "key32": "d4RRiQoFNF6TnCbDYGoDYPhxhR2KQBACCzWBctDfQmMtsZezYvUXfdZzFgjm1otTatGXJxaBMnGVt9fm4fDdNTm",
  "key33": "MXDhZfBHerJLnU9kh8apa8H1M9Reu5U5VD3yd8fsFZwkvksHAP2CmQUAeY5aVzCznaMR8FfHZFtGbPj7wKkth3t",
  "key34": "22kGff9WgERcojLVKfSkCF9869B8ARDMBQDPGZLfx6rriUM4hZVry1XUcGqNzCzysJx3QPRaJ3uE2qvsscgTqrBS",
  "key35": "SyGjxahmUkp2H76UmASWfjTR3up3HLkcdfnH1yCvZ1uV2KLjfbzfpoF1ynqt3b7w8R5QF4Ef7fZSKs7dQC258pj",
  "key36": "qDrz7vg6vq9esMSuzHpvGGcebjDqmcF3MBEiWEGfoWGczyHjNuWVvbGF5SBgsXnTak6tDXJsA5dNh7gnoSwW3LP",
  "key37": "3keiNHUvxqQWqW6jYvPekMn2wFpfsHNGHLqX6nqbJHbqixjWB3QdL7Lnh4xSB5cYMh4nrB5L7vG1SKrZRkt1N9iJ",
  "key38": "5vLt4BepTnEhFZacamWi4QFKB5tMA8i1ZSwgFGtdSDo5PGodq3BaYtR4ZaqpqFrBt8iUzfYdfmidmzbA1LfAFYCr",
  "key39": "2aPPyhHrvp1fQbfJ1aVtSV2egtG9zG4sb9XDebCZ6a9W2TKpK549ALat437g8iC3WQS6n9AXSX8gbQD2754gTDai",
  "key40": "5BQNUY9oLmFJpnz8kvhS4XZg2wJDqYXXJjjLnsipStCSLohwRowCQTGkJasMykf6J5UVrnDc5sxKKE4do57wX3wo",
  "key41": "2cAfmiXrH6hHpj357SehXanuHim1YoLSBgUTgjV95BHffwi8TxRh7gaW6uKLdfdVZLs1PTWbrQEa7MQXrG43WTBM"
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
