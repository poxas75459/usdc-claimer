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
    "5SXZ9SrreU5zswdjWGtDahBhBSS7NMEEgAmF2VpprWiiHxLNqAUedPvgbMJ5RotmkBXudteQ54ByjjSrXHirsg19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGuuYCfYPt6vxaWEXECvUeewcW5GVbjdbS9p3n11TkrgnMUT3bThUzXMLnWCf4KsQVVAUmcWoH6wphcPUpadqgK",
  "key1": "3TCuUFAhb4FfWo2xfKBctLnMkKPbmiDSakDDu8FS9Ni4cKhb7xFbNKWSEJhn6coaZv2MpLyBkqykVtriXeH33tEX",
  "key2": "YCUr8VxdiSxjLnrRhsJz4eevaWFAusLVfumdRuR7k2JXHgpAz8Mo7fiNAbeUJ8LR4a2Q3nriv5iU1PuWQiNUgE3",
  "key3": "yqor8EYs4M16P1LSwtsDE7AowuDUExgfrU2D8yiCRshoAZDsZfmvoZXNTSB3F47K5y42TDgjdmzKAZc4y5hPFrR",
  "key4": "5Whf3TCD5hrLpfeekZ3vGa1YmB8xqcvsnemD253tZSPVgBc1iKUCJwS5Ut8QmiczpcPBE43uV7SavCTQvWrQgDsz",
  "key5": "3zeu2HZBoGG9JozEpBjXBfD5fd9wV6wys3BLRzE3FnxymZQFykt9bMa5W86WNYiQGtfqyxeotPZqR6HsFtp9Zv3j",
  "key6": "5Zi6snfudpn4a86Gq67ZUyjYo5b6ag7MTyj6DTR2DoVM2z8boEpTzEDNCjTcwSvdjeR9w6thjY4C9eet4qUf7nyk",
  "key7": "3XUtd9SCmyTpYTCjZ9mJHUPVtT6a2uts7PaWTSFqproyu8U2XSZGLW9EENsZG12L8qVFx6UkD35wmPPwj8gA5ZTJ",
  "key8": "5daEi7USucTbCiHEkh9mpDReaeLo7EBCw4dMXTy9EzMX3dVMtXh85RqtiUD43bK9zinsmQzTSmgCEFNLSZqMpXUm",
  "key9": "3942xJZN3dKtFjyvXacDYYz48tvYZ79eBA4ZTjeDcuXQtqPL8ZceSj9sq5rUfJQyUNAsLfsJDzk4inRKmmLRF7F",
  "key10": "2cirwygNf8yUD6KGHKwTNZxJx6c3wtuk2waohAHoH4m1rAM6xXPvw3pVfvMzExufAwySNBxAxmNJNhaYvP5dPpFi",
  "key11": "4JgZgjrGKt96sctJdiXQ52GjwSnN2wFvnhVXTL3KLtK2a4GD9U3pUGSwxPMaw7jsdYYe6qPoeuY413m3rQQqbhty",
  "key12": "44pxXDTVdyoBE63XBWwRGHLfZSUwaLn9wDWHSWfPT4WMr55YcNB2ZYJNCQGgwVjANZrjsebbFjwUVY8jKqqGxviK",
  "key13": "654iZ64ZX1iFdDWKBnPK6Q2xJk7jPtWymCF4NCvy95fYRGk8FtQsUzHCjxaCSnu9MqGy2MEpu4sCGSCrVXDTUW6P",
  "key14": "3jQNbSuJDMQF53MVASnEoqVvgQoYKoUX7E3DcrS9BrGBZTsLqEt466T9jMria13MPdDXmubGE6WJ3vQ8ShN3VVzY",
  "key15": "2XRuzpXC7mWNinTmf1T1DuPZanwpgv5BkfW6UKVqPF1Q9eAffxd932BNX8Df8PUvZs5y4S5GZ1mYLxwvEUDT3HpQ",
  "key16": "3obsqYmK2BdzSqEHs3wFF7MKDk5yirJt6ZJNcxFo2XFExfp8nQA6TzAAsohbm8579zNaVp6vMQ7vhXSGaUt7AX21",
  "key17": "3bJ31Ka65EUBV13ak98jVenisReQ3iisJ8MK5bp3itPSKZpREKanLfebhs6pTp5CuYqwVsefnZJWaq9eSd6Rggrf",
  "key18": "28ypfSm72NTbWUJqPkKs8J9asmpJXAz4vAEgs5zPNiLAHym1B238NguqZDnWWtYFE5NjvmeDxvUNmc16Ps9Leczm",
  "key19": "CsucY7fMoE9veibsNgmWZ1GP5xNXL4UGX6beKVgundp7DZAaPC5jkwfokAxb1ijHtdrX17iYnvMRkTyEL91ypFW",
  "key20": "gapB1C77nZAegJFSQ19Dif2bWNUMXBCJKpi1q3QD9hMjNY1Rk46aKdmXUdpUUq1LK2UNMqtbJU9GsXM7HCX5uUG",
  "key21": "5qA8XieA6g3HQX2SCSeWoKeu7oC1tQG6UneLgQgTomW24YQ71soMVYT6LVm1VeshQMGWmRwctCNLkTzJoHSXKDEA",
  "key22": "5C5sXfyjrZXjZpAsxo6dNGq3BX4sjcjPDoYV7FQRVW3mUoDxM4Vhp6V3cYMnz18v9gPaM5LA3XK2UHyrTDtJmMf5",
  "key23": "4GNXx82PrNEE4LVU7hWZtj89Uqnb4gTsEDdbxEVF12iyiWATSFygyYGKBB944KrTZW4qcLA6BocyJUewWY7yJ8Bg",
  "key24": "2HsgtbpExKqj6uxnC9oY78gkTXQRHfNqpVEqd2NnHEFoahto8DBqidN5P6ACszCEAiGsssqLoAKxmbv9f8UfYpv8",
  "key25": "56Tns4kK3KzYSq9t2yGjgxnma1CUaumKVDUF3NZ7987nHabzmya71ge8dQtqWLtbaDiTQgoANnoKo1UbSKLcy9E",
  "key26": "2TkRg619r3LvEx5Hx8gZ6KwQL8uMGsn9PNEkSX99xfXU9YqDNagbG2M1CaFCTwQqwNczvGoYq9ne16w3v6XjWHxc",
  "key27": "46GRm4oRyVnXjnDDEDxQtkRg6dZrHe1LSGRetnBzgjrCETmu24hBVEMXARy4YXQ71Yi1MiBbw91LQ2UrHdwWHdEu",
  "key28": "4A4YYNZXqYwUFXiQxstMJjsDdi35maMepXaoTBxxG7miLoakWgjzjdb4LH4XWxoxwu7VGzTFZDNduoAD37xpwLYn",
  "key29": "2FDqZtxtjbmyaAaNsKLbCoGXxgTaAkG1BXGfxsonXYKgVTLG9zxT1k9Z2CpFFfKThPEsaGV3wEVi484ueveBVbcA",
  "key30": "3DeMj5NpXeBhjP3dCUxUWBxMy4t8kF1fRo3c8Xft7rMhhxK486P47QSp3QCP9akEYYxQCRr5h2rG6kfJMkTtHaJg",
  "key31": "4jXaAWBcv5gGTA6TLRTT16FjjV5DaCguagA8YPXqMKQpxYWUTMf6CL4dXSnniYQRqAUbz4HtqRw43dZrRHjxKXse",
  "key32": "2xcnApp5nZvawHJgu6dNqyM4qPTEEvV7Y21zMoVTNXqcZmnjncXiouUausqi1wTxA5PJX2fwfohuwJuswKd1u217",
  "key33": "7kLWpgPw1f4acX5bSJtng8DMZ6pCoB4WdQbTJxuofbNjQ43mJYVqEVTRNufAUxfAWDxky49Aci3bhXDRd5gVYvY",
  "key34": "2im7mrWWMropfoiHV3sjw6TAf7oxBfTHY4zuPPa2BGGbj8q9XBwjAXNShmynsi8Zcqsg8xHrt1SfMFq6zu2Ha7kb",
  "key35": "LNRgZgvcW3VUw2F7pU5KMhrSTJQU4yVzxFMEKnd753ZE7RgJsTkjVQbAKeZhuPLHfFAkV7sSWHuiuogtcM1ibTM",
  "key36": "4woSKj97BPpk75afDUT37p9AKaMENBf6XRkWPYqiXKBmiP3h5jYUDG3h3Xs62X1FwrAgc6RizxJUGAqCMBiR48h8"
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
