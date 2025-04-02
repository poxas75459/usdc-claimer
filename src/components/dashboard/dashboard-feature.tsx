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
    "3uxS82MMjiRsgE5sQsjb3sHd5nykXdBWgx7cNSggYHjZCzjwfBvXpGYyYqwJeLJUSfxMf1VhFQRnbtLBRKcBnE7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPm9hVWu6XoKbTazXQSfywCfzsjUz3bPccewHHkXgYBnjuHJ7AW9f5dS8MXmeezcmoxkH2MBgoHrYowrt1p9jAz",
  "key1": "3nSmZPmW4hbefdB6n4SiBaSv3DcGybSqdGRyc7SsrdUNbdyvjKTtnVEQfoLVd52fksPrmRTzanujRvpkJaWdkd1p",
  "key2": "3m9LjeFUqy7abSRTPxgtUaxoo9Qu55FdiEjJxhGoQL1Hm8nMUzsspBkX5XD1qGiHiF812uPs7SeAdYNhtvbkgCVk",
  "key3": "4WLFrR845K8Fpt1zpJZWTUGCyfjugURpXyqFiUTK8tgsJ5JQE7T3NqiX5kpi5SbCScDdPhZUUYAioEKgKR76ts1D",
  "key4": "5h5oNG1rpagBgBSWmpkLcCptxh3AB8NFAnSH2qEDVbN9fT1KDvKuChbW5FzYvXZEZXdporVC4m3aPpC83vzQKJMU",
  "key5": "3PB9xPFv3rkCrXLPTbss9ZUC9fUZfm7a8os19eNqQfCg9W1XkDRsVWiByR7Y3M7ganrHXMQzwkgdmabaD1PrsKk7",
  "key6": "5HgTf7YvfZ8p7m213UiyQcEh19y8psM24nr88K8mKgHYAFcnVGjhWswESM9b9M9rqyoCMwvxLUqsP54efdSKqWbk",
  "key7": "AnHGhYqYZ3fBn9QhH7BtcaySNfAGiEK9fH2w3nSbR4xdtb1Sv5wU6xsdrdiUnowPe7FqmhbE7mPMhnbDbbUp7V7",
  "key8": "59nbhanduy3LyEEd6CR728wuyinvwoN4ea44QaZ1CDkB4UxFBAswwuo8po1ZdEPuvtYRd6ADJDLvmu42gxDGu1xX",
  "key9": "2Mey4shW9noN8pWRf1d2fZTMkfNqx8GVvudVqEeL8Qd3sA4YYcyJnfn6cngEwVvzkyamNuRy1E9HrWoS2RAakrbT",
  "key10": "2ZvphaFEorTi4qpzJjAzNDRjTx8UnUJJWgDeTjdZMZkV1pvKTXnQLBKnbyYQ41D9aceTbWzpBF1f724UFZLJy6Ah",
  "key11": "MANMUUQtmGf7Y4xReG9BANx36FY19Fvek8Swfo4yRdPToypQcA9tLPWCRfydTqhomPyvcGfUmtppzYNUpGSbEct",
  "key12": "4Xcy8yheLH74HKr1sVpUsRAJCHGJxZVLsY6Bqk5noqGEh3aar41R3MMym8K6cM1khyTjDbU4McWMd2Xfm9zEzwx6",
  "key13": "kwpu6vcG3j6MYZmY7nSf386WaATg2b9FLC2htjWsPH8Xq7ZUd2CfGEBpPr5fP2rk8WKQGm2NULfCj4j8NUmqMcv",
  "key14": "67nBX4Y8Foh5g8b3Z2sPN14wDknQPoPVV7c6BQ2UH8pC4txUMWdFYjtrGSSwdcK33AAyZzsPdauBpPuLyUcxC2g8",
  "key15": "46jgyf4HC7NsK5PzGNbLviCgCYgiL5DcSYU4yj3DcGRTpchjZxYYEXEia9jYdrhY8GN9PBHRtWa3Qrs8P9MCC3Yc",
  "key16": "476Jnyp9Y88bMaPdfCsexVdSet6CLpayu4M5ZsJwsDstuC8jRkB8Efwvb6cmQUZ4uVNfYBbzpUT56iS6gs9wHoDq",
  "key17": "wUEtkXCHoJNfDsrpftKK9afYYyMUwZ2xQVaYQ4A2fnQThfGuEpEanPNnScASBLsXxqvTWmcBp9J4pMzjMYvJTAT",
  "key18": "2wNrZ2mrFxmUwCtTYrXazA1eYeyJdiLHhKsPtR4556J7YxUmXgtWpc5mnqhnM82UwTPquYoGTjztroUcvenrY9pN",
  "key19": "tEkA3AfBbNzDUVeJ6xb6yZ7pjfoPCVFPexpmH8jVRCqRp4UwVNZE1yqBkz77kg1D2omKsPbChniGCLY38bNRzae",
  "key20": "3honfG9sn7SYwYmDAUvLzzecCibXGNx67xEr4rC9y2oCWwL4pstjp8XqW4EP4vFVfHDU1vb4V38RrwM8EjUbiZRr",
  "key21": "23vWzojFTpzMJDke4CLNwwpSSpYqfNLPhuZxuiRnTvYbFbVtaXFyGDUjUkU9wNrZWB6yBneER8YGQiicVSuiHqbN",
  "key22": "5HKYLpG1HjiCvE4XVD61WhbzCvfPjrXERxpHUbh1HEDaSCFDPCPEwTsdg7HNH1j4CmrQE5erSFnDagR5AsNnkoxp",
  "key23": "VysjhcFJpVcGaNs2eSmQatqBd4XAoZ5hnk2JTAfgzLHFSgsieSpzYzwpQRJGxt7yiEfZZtgusegCFee74VNDMC6",
  "key24": "4h3pNr6uiW2pJStosbAp1xHj8Va6R1AdfWZ6xRL97SUhdrJbfLmX2XfG7k4xPBatvcmV3m46Mc1BjypcDd548xXx",
  "key25": "bfGxvfTBC1iHHU2HtnUjw2PhqJtXgbwfeSfM7EEvZeDgJknCdnuN51XveLmkFRMCSS7RU34x6nzGpqGDaZSwVhE",
  "key26": "St24JkUCKgvHv5FLtgLee2QJjT6VvrF4BZbKpf2gPXNNqsQGTjJpjzhG1kwUDwthALCoMDG2kYxLEoRfd5sEqBB",
  "key27": "4cGvcqNjnduzArbR9D1h7wQ5qdp3d9VU6iPgDUJBazpKmGDMbSjXRMdC3obNXeZCiVxkrrMpVgsE4SBjCt5UwHjN",
  "key28": "fCiYY1RCmJJpBJe5doFPAzsvMo5NFvHfbYBcqfjurJDNeBKdGLYttM7kwo5oSAdPKBb5wRRDs3k22W8krWi2NVA",
  "key29": "4YpbMfGeJ2UqYtZ9mq9C4DC62GCB5vJGYbNQmG9LVdMqGMwXwy31xN2oTx1iusX4aqJjwx2ncLqg169aMR33FNno",
  "key30": "2vh65Pg3PiGsoNZ43imv4uuNT6FBt648D3NpABu72UxXjLYxVYYcmyAhyk564DVd9TodNbPbz7bZMViLtAQQGzsu",
  "key31": "4wu7H67nFrQYzByhPDKiY8dwRxqeD7KKJgJQ14uaZY3Y24qJck3i5tnAyq3orfsd1TVv4zdPe9XotRBQMC48tXcE",
  "key32": "641whaY9L7ULj3z5XWvz1pS1erSQGzRZhd15YByiwT8NBHTMTtMeTRZXSjqCLmoHiDG4UgB6tZMJTVKNDcxmzT6K",
  "key33": "5jY4naSSbXHTr6qet8jWhUUKGYtY3S8AVqHRavMv3q6odfR7JTum7GsPtpxazxpgVfM23dPewzPHCv8zhnEwh6T6",
  "key34": "3WZaGouSVm3JUQxYHCH4m4Gtgs1vmzoSSs5VSa8pb8xUgEeMx7HBi3a3ta85kT4EkWYEzKeeRfD2o8ETAgSbrWuV",
  "key35": "44ZePY1p7bbEWh8rVuBunWZU5b1FvYhEHF2SY1LsG1tqLaZukBMDDfGbQCnAMpZzCiTJeTJmpKG9JAbJ3vxC4Sj",
  "key36": "4utzuBBzHNRMWh19L2szQK7GkpQCpnsStNSjQ28MxBcyUnxPgQKuUCesTpwDXKfyyxtFAFFuh82hn4vR1PvLoqbP",
  "key37": "4RcFPucxgAqhJ8TbPJvwYG1HYh8dyRzk3GKMSf2FzX7RNAzisuGcEZ2dZ3uVW8ACiF56e4w1iEVd1dk3QhGKqQyG",
  "key38": "52VGMTCtnhPacpyugMjE1wzCvk61fs4VQN8rsw7xu2K5oLHSazNTFK2jQVm3qEG8XgXCy9u7sXnw4hihb68GwzUN",
  "key39": "4ke978rd3DYRoBRzoVYPJAJfe4w43PEDtTXAKwHry4oTgn3Z8GR4ErBGJcny9kYpa2BB4G1R3UWuWyEnomP1oKmT",
  "key40": "w2ueXDvLHdzn7r1ifohv4tp2oW6LtBTS4rN1RiicubBQFQPiNQ6oJKknjRXNmAhvg9PwpXXEitxM2G9ktaKR8Yv",
  "key41": "3npBPc6Mj6tS49jUzJJ7MUvEfCNRYWZ1zhbg6jVA2UTL8RcWyZaxYaEkYeGvADokNAPRr1mzrKzhVZ6Z36GqPk5c",
  "key42": "4bt37XJm7JMsD3vooDSFtPiM7abQxDnNH2ugzDPsFeKZEHo8mdTornFwuBtEswXdZCNRcm3RWg3WEQdshUszm3py",
  "key43": "5CNJHNyiDFXezyGAGYfkBg1b6X1EnWVL3WPq7mwRqFaKBPhdxqb1oEVpi83oD3D6ZPRP8wLce5qrnsqETZyZcqNi",
  "key44": "5uE6cgq5eWvosE32ktbd11MmZ94BbjBuXCN4JrX1YNPG4RNJ94PVBPw7VM72BA5zEMPQPaV25BXPA4gfUB6M3Dow"
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
