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
    "4QmCa2fzZ7b7g1Cj784hQRKgXZRFmHugXpfytLocxt8Ad4Npwga781sXnEBSZNZgdjSfRxgK2gdR6CS7gVmnEqfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNPaKdTqoTo828JipsX5V37aZFSJUQzJoudAUF5a4ofhcMXQCxC8SeX755UEWgbh2zzLA4mVf76WTD4QUC3a6uS",
  "key1": "4RnJbFBWYj7wJTtV6Suotfj6LJHWX7AthzFuPmSGy7hUQUyBNfzrYp8LLNdK4YRzD3z5D3pV9aN6dBUTcRpCRbNu",
  "key2": "2ZwSau9htBtjjnRqz4tDUMCkCi9e5akdeVzCN3YTmhvB4ZJKqLYWy2xtLYzEsrE4LDy6HyCiDimXJjjkREX2hTaF",
  "key3": "4apQiJFaudGrKKVH9xKhsbNcbeyk6dQZBWkSgpCpjeuf6NtJMJHyyCK2tb2MnPAKR5L7uMmaLCzNtVKycCSZj8qw",
  "key4": "4AFyFCvvdsJpFKtdEH1PTZoDMxcdGpshXdETmxLZMv1bU6eptqUqEEWVgnnRCswjPByUTpa9etp89DU2RRGsCVah",
  "key5": "5F6xVtWrc42dzA23HDxHbB9aFfqig4o7WNTb7SQqmMhP2fg4gQm37teGYgenGYxKFwiUBkjPGk9p8EoNQo8eeGrC",
  "key6": "3DrgVafSiv4R2nHKq59XP5M3FcLktSw1ipbGVsZ62zocD6x6kX68L1Zqbna1WAErs6KvMaQJ8NAxYuyuyQvCjYZf",
  "key7": "2mgt77zyJdg2Ruw5wfNtMkE5ocvFDbxaH2mL9TcTnnQSiZiBgKdsgpUGPpw62Mkf8SsByUp5nxRrqpar6gkgWHWg",
  "key8": "3mDLn1b5EjwWa1pVNuusWjyd4pUuEkEbb4o4XADjbhE5tzQL3JU32PvRutf7GBUEJkCxXLBJmpoL9omM3xj1kp49",
  "key9": "2YnYsQ4sLZvhkrkiAsqgWrBQZjZaVDMjKR2EP8KoZhWMfKnWSstPsdNBPW3gAnRT83TKAHLDKc4QoK1u9T3qQZpF",
  "key10": "37bHt5u2ToYuG4KLRwZSH6WhzfepuSMLFo8tjnifw7zE2fgEgxKeZ3Vx43S8cdx6C15RwZR2dUMoFkzE8AC3H6QF",
  "key11": "2ZCGpVbDMBZiftLDt6hRiEMzJfksVzJgjhjuzRMEuz2F6Y6kgdVcVJ2D4gSZ9Jc5ptynd2oH5w1QHpXu95xtTVAD",
  "key12": "2keUF6mYfKHLzjfrsxhXRGPWAcEBevjMPgiWCCSUXJcNKsFDQmBjn8MmoVJWy6yhrYnSWkJZci2cLQ9nQDLXX7ui",
  "key13": "3CGkjatUaSRodRyyVi6p55x8gZRkaKLYE5pKmV9bXEwggEw2UtkeV1VQwGHBWowYggfRVR7vhUUKFZ4c7Momd2WV",
  "key14": "4fAMgcj4oo5iqH16UXc1AsYHALKFasu5EJZDwjfpbU5rfbT1XehvrEeBncNq9YJGvQdZ5z3zozC7PDdTAmiCHdDg",
  "key15": "3YH842TDNz6PUj3LxQ4fT21L5vvrrDryxmFySNaL1Zq6BPEjehFrbNGytSZAJtgLw3bjtfqCiwjSKAZ8CMKk7Rfm",
  "key16": "WGaVMFWf9ec1YjH8JDgMGt47hQcz7ipagmrJSqNEow8TAE8Lress3zNYFUPje3SyB1cfpsJsCtojcT2LWU427de",
  "key17": "2h36KwHc11qhqWS2gpW4vNGc8LaDMVpNncs4eYgGpdi4EAVqZ8MSpJZkdFRuwPXpNgkJ2H8CwL6aNHHSCwhEuV7N",
  "key18": "5NDHoPwJPThqw5SxgDQsyxfmzwTMreojHqykrGV313GAnWmmwUy4ZcHD2AC7j2m3yxP7mg2DPTZi6ZTCgNj1cV1u",
  "key19": "Fpdhm3HsKFpnp2weGHYbjRRiEsMcq1VrHMRhWm9j5zzZjx625CAY2qrbBStVdRDxuy6WMYLA31ci4SvbCWTmtyp",
  "key20": "28FwgtctujA2iU8mq2QXh87hiDjKMKy4DYKHwAfWP4WctpGqa8NPmUAwRcf8rRiL3GrZ7Fs96uerGJvt5VArfh2p",
  "key21": "4E9TpeE7QGokpnZBzz1gzSGqPwtPsv6ibfE3TqCck7QYguQ3wZpqda3jzRHWmFimiaksAyYQNcpnvCoxZzwFuZ49",
  "key22": "3mMjAaY8yf6pXJtryMpwkscPWibei1oUJEcWpPdmro5CfC6nwbUL2Gu6hejK42REAPoTY8To3eAn4NyRkapz43nT",
  "key23": "3pEDGsmQkLZ4GDebLeuoUTSZCukavnBYui1a69N1ebq5ZLLfxzwBQonXfKBLoapbZss73ZouVxACcSW6rZyASNBN",
  "key24": "2ZcLvJsnk1wWLtGtqtbTcCV6nBDyDtjGNE9KBSCqpQFZxLmbejGnutPWuaBWv5NGFmNb4RrKfDmixQSDcuH8SKY6",
  "key25": "1yJEPGEtuT67fLqKrTn1TbwBtBqtDiGWKKFsa8YmonbEYHsw8g7fipQuneuWUrQKBxFG7xJrrstW2ZH1Q7Pv4QT",
  "key26": "3cgnLzEfKxbztwiqRAn2i5s3Fn9fDBfpdzFRzBAgQrxCaS5zWLz9qKp1NcEa2JH4dNAgS9Q3JEXgtjmD2wW8q8xH",
  "key27": "54YcPBrBZCannX8HCxig5rrhMMoH9G6dStTmike3jdSj4Abd8wvdgnrpgawV9puVZCyb7jXFiRHNuszmHQJPMJxi",
  "key28": "5HkibJKHe5XTwKPTCQnt3dcs5TWTQiuavSBwcCP4eM1h1g2vJFBSFuJx41HwESAV3waZvcEeThv8UgEEsZQuieC5"
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
