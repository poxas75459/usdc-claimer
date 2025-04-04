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
    "wKtHMnecCe3q8xUjtwcsSBFaTphmfnHdrnHURrxizEvZunpSqJN2cqFBQJfpGLJF5ZSpguDg5PGvAkJ4FWfEJdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pXXtpTgzNWNtcTk4YobJzu27mBshnvCZGAUR5EEmDdr2bnYgnu4BrTTq7BwbELfnzHfRPE2KStAJXvqM8xc3W9t",
  "key1": "4S1vauLM4LyeJkTPtz8AGiYQd76jW8iLfD8TQp6DSSvUFZmECByBnByjAZeNxoxC3Zp7i8u8F3ay2FWLufA1fa2j",
  "key2": "5EythBhiTU9Da87EqWqX87VTp6Xhk8Brh3My488KWybD7YKinJX3AMcL96N1xXxsh34X4DkQDKdtcWcRx6zPxiPa",
  "key3": "3kDc1cN1EQvRnE9hBYB7toCtVYqA4BEh3oeAAzRzdnx9mJ9P17jC5ew6F3caUq3DYE6HfxUshDEZD6E3wy2Q2Uak",
  "key4": "46vBQLYnq15Cnc2ib3yfdANwFDN9pWoJPasqYr9DFSzeaza995u8gDWheyxjYSHMQzLz6TFkh1irYnMACwZqLKvF",
  "key5": "3m8L5nYjZ6fzGdrTbX8wg7fSbKvCWf4b7wrzM6mx9SjA5f3J3KUwyF7gh5qJJ1gQTwN1gkmoEeVK2DixyYb2zwz8",
  "key6": "3bLckXk3Gr4iVMUnSK3t7GykBuYWtCBs1jqnZehu7P59GtCik71Gkkt2trZGNyyV1nuvFUzpNt2295ehRzEfZT7W",
  "key7": "4hdSvE6SyudFcsZbQMQn4NAg2r5QNQPwZHaovJ886CpT7w3LG58XUBRpWaxZSREJ4WGd25CG451SfgZtTgSkP63v",
  "key8": "4cUMH2bm4TXnK3azrsarujUWQpoGjLqj42MveaEM752bXhRoPMUgV2vbSnoQg2QJMSDXSCLdeZu1QyjPtvaTdfpT",
  "key9": "4twndrJxKxf5bpm944Wwzzjy92ozSdBZHX7xjWspKDFesq3MWctrHnzoRBkbfJaEdi8gZmYBnrV615WdphfzWDx8",
  "key10": "5LvJk13oZTT8ZtWqDGXZwjdSowBHgnki7vsDmVga4PfKipzb5NZMBCerVooaTCgNoUNbarWas9qK8cmScHNfs6Bx",
  "key11": "2tHm9Jzwm9SfiLn4scrFxfKxCDHd3AzXTKBgpFFFPcrXLx8mtiMkVut9TWLjK9x1ZGaxbG4VDpeFCgGzXonD8s5G",
  "key12": "3q3pHUJb8x6aJu3J9Rv1PAammr4C8PyWVdQEezNRuf3CQsUYJDurbeeFzUEp2GLhqnv7CaKTFYdeqg3fnwqgh5Et",
  "key13": "2KZwpJsbaoyaApqZG3mx6ihJksgRHZNjPL9iwYDBTRqAYF2ouZjRuRe3HhrV297B3by6RAThaFoPVvGFdJEnKeBY",
  "key14": "3nha62GarUiEJdozwZrxPbsKZYp5AvQbZyyg1AgvmxTigeDGPnqK4pDoW5EmrXb54dmKDmHZc9GCR8B7AuLSiyrs",
  "key15": "4xKyNpQDnDtQLC8nzjdag4Mbz32WtfGFcMcfbpNXuTNhKjozLSe34BaDcrSLR3XX33c77vcnkkEpc2uK6N5U4is6",
  "key16": "5QrEDS3PRAdhDTA8zgG3TX9e7hzPHz2ppwdiu1MSE45STfyAJV6EoBfwzv2MbozAbeWcz63XoyL9YHzLE4sUdLCT",
  "key17": "3sPmaZYDWndo8CaE3UET7PaZCMNKnmNZExYDAEbjHJWNGofwXLhJpfekSKNMiTXUJF3BqR1DqvQ6nKdyWBmu26tq",
  "key18": "3LYL9fGhvgGhLsNK5hRNnXQZwCoY6zZJQC3m4qricNu2gamrC6oHtxg8AE4f2YmFQEPtGaGv4Zyra6ycCtGqr4rU",
  "key19": "2r7nZ85hp53tJQ5zPeur2skkxghZAiKEVLbnq8h5rznpAu59dN7GnmngPR119jmxRZR6d4gAx8MVSTTzWSUqx6aN",
  "key20": "3T1ur9douBCnxKZpAdLwYk4nmE1DJhoP3eie4KvsTpEcED2c3EXFAbpfpVt9DQcDSUARvUxVQJAHiEjECAyja8Gy",
  "key21": "3MbrujppYqQyPgE4AaX4chyuWmbqnQqE5p7gpyzTyCCDkcGZ5H3pikLyc89wuNXKnCumziVJqjEsL7syM8LtX8eo",
  "key22": "2LnDzLcd6VtviR9rFbKsdBeMF9c53p454oNkzjVjLb1VFoCgZrTmWUVPkbNoqQrRK6zHnTKCzMAdpuYQmfMNXL5s",
  "key23": "2gnfRgfkGaYGe162XDV6ZNoXT42FHMzMUfKFzqnrhW6QQQa2jNW9TiMztUMbj3raAHTj9kWxzaxMYKUxdv7wNLue",
  "key24": "2GXQXra4sj4xHcKaN7n9GKbSk93acVYxkBNmSSGGQ4K9ev2vBZbno2thqUi2THqQP4xUm5mFfPvM3AggB23PBU3W",
  "key25": "3poktSdKsqUtsmUtwzAauTFirwGFwtYwc8ptEpzQWazHNpUXx77F7rQZ8vK6AxmMjbi8PaWsnaYuPumaB3qhvrmk",
  "key26": "4yphLpBjDizcjYnXcBPXe4ezRo9w5eJhfV9DWCaLhqMjiRgwMXkWLZ8uF7Vvq6Vc1y1muFJgAse7P33SN5FHPufB",
  "key27": "4cReJagXvru9wDaxMJ9KXDf5riGP7MZgQwpG1bPZS8U1tBHWz2tUr2V27uQVNgifpV496z4d6ZuQBhinA6BGMtAE",
  "key28": "21S4KAy1VV5JXFWWVzApZNpMRoC8FeNMZ3ixuPZxVQb7tE2XXtM4tq9D9doVZUW9tLAjzdWKpDCcW62FP7jocw7Q",
  "key29": "5J7qFTpv3QFp23LMbbXS1fwSsAjvkrvRAYX4khxTpHF1HtTHkTN4GGKVDyBmUh3LPknss1t6eaFBPuo3PvbP5w2Q",
  "key30": "3xikktCQVqUifrcsrwyTKzxQnLE2SdEYQPxrCHWAUnkbUsyvKt5sLiUDN9UcJGYy317iVwKuBWpmTDkCZWNgGZNw",
  "key31": "3hqrQNdRFu5RFsKWve4nTqVjYWAGbZe2GoJ2z9kMstsZAfdPEncVkBMEkLwFtesd377HQpS7zT8doALp64kViWbD",
  "key32": "5iNhC79ysd7GycUVbFESHsdSJQ9fhmdP8g98cUHMBH7rZvswkixGjoNWNomovUzVxwa89CydfcTjpaqcKfXUR2xZ",
  "key33": "q82rSxhyveAHm196FjmKo3fDGHcyUdduJEuXzq3pUK6PRTsZEWdBtZh5wViaPtmYucFbufeXGaM5HRrPUwg1ZSd",
  "key34": "28ASWz9DTkhfnmwwwHc6EDTU3GN32KToeZtCV9SWXHPSrTqLxAwTLN5uSjjTLVf9UHbLhQ71dL8zJZ5ERvn6w7PU",
  "key35": "4jLiv97BHjydNC8hiYanvZWTNkyfqXDgEyPxLfDEdtrQU7aQNZ6j9suFGSvZX2xGACJRGotSdTum5aWqEFCpstGc",
  "key36": "4Gk4oQBmiaNM6zXRGo899eAU8vQCYmDNbfkfWyQTbPfkKJFp951WhsnJA6tC6bDKvm3rgwd9ur82j2kbjhcpbXW7"
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
