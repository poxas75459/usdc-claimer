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
    "41HjJoHfxrjejeqqyzGxMwaGe5CYedYD2DejK8arjVzNZ7nef63sXh97UVLpLUymStNw2pwbuC3enALLfdZ5GYd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWPQWjHdWTACAXRh9xyD7p1SqmAVGz1eCRQtcmG15P3sHdHGT8JRB7SBsFui5WD5nznVcFpSnDv8VpKnV5e2T3o",
  "key1": "3N3rgR46Ush3rDYJFbQGn5CQWyb6T7QiELFQU1zDna4b4kRYUUrs8kiMbBhwAz8RTCbpYucALws4CDArZhUBZD9R",
  "key2": "2DZPK64TBVWCceX9tWenSasFgaxPqNyQziJ64yjLNounn6faDh9oDEzx2UxjaaTbTCz9msxKmgV8ajrtTucH329D",
  "key3": "V2RkFeFJJXJQULU6VQRfD5pxvcemUwaUxpUJBY3QthnJnyKaHthbVBuZFiTCzByyF4UTkQ32N2FntiJ3m6U7ZjC",
  "key4": "4uQNTjikLxj6n8PLmfBL1MArJXSsSW76H5dEs2dhGNXqB8oPyuqLuXtLHvhTASR31z8DvUw9jiFB6N95QVpKnDeq",
  "key5": "QTqEKhb6UMoT3FjbULwiESSgW3ymDnXRyK3vDQUJSDUQZdZhVFyZvEmKc12wva8rZucdJxxEJgc5X5Xy1XNeZQM",
  "key6": "59eyGAA6XJ4jUvx8djXEVVHmAPUZNxZWroBjr6UeZcPFoUA4XyEVWhTUcrFnpcEvYZyU79EBiM1C6TdZYQ65489y",
  "key7": "4pAkyHuoZUJzh2a7fx3g14ugiumNFJ2TdhnHLqZBXuqqkZrLXcqhfJE3fLvoySgYzPU4QY6XbNJwQR6EumQQqmoQ",
  "key8": "5a3fTabBPZZUHhdkvbQbwB1c53XVanKyJwxq14sbijFiwDBDi7LYD3F7R157dDfPmhQiapeMXxX42soCaSXMWTtN",
  "key9": "26t5cMi7sQhKT9fFQDxLMG6MumpQLBB5k4nm5BcxV3orjkepUtsbFdJoxu5svgftEChbchHcUzLc1DTorxeRauco",
  "key10": "3R6Fx3KdGskrqTb3mpN4Q8FXkjqnEnwE6B15oxKimE78aCqukEV2TMQYEXR1i3KTNC8jJ5zG8SyTTxVrHhqmU7BM",
  "key11": "3V7wcniNiav7JHk2ep7f1u8ULEXo9FAzjPKTvGAHstsfLB3nQ5K7a4pZud3g5AgA9H6wRBmuxQNkUWSijjehyCSi",
  "key12": "jB9fqbNN5frUGqDd3TFnNHavZcoKsN4L1453KTx1HYJ2E4VzVgAeys8cBvfj4jqUXAwYdEwL2xSiV96iiZyAKst",
  "key13": "4reNKoDaQ65Jf2yFzpWJWuLXoKmxoSdN36r4CHwGJc3SfYENeoGh9mPwx17nKDv1C9vzXPd6ET6QE5WhtvvzhgZC",
  "key14": "4S6JYtMKbVFLDKLs2qRKbkRE2fupomj2FQYVLAmzU3Di5HQG1ZLXkJtWo3rR18MNUdkVwDLoLsWz8n2ruuzrqEDQ",
  "key15": "16uZFRqNXsmXBDWrfUhd93WGvCK8zzCMPBhS8MXibu2XVmFfdPbPiMdFd7xNxDCXEYLjXZEGjAWyrw9CMndiqjR",
  "key16": "48JHFYsLSmMAVTxxdRUZYhM17mWkciH1DEanpkNHNA7SSzZm6RFPBUgSYL7hnhrvYW3UUyA4MbkKaZrGEnqduV55",
  "key17": "HHHAThHTG8MxiYwMLMzmMGSj3wjeRUgpdgoNUAptqCv7kcafjh1ZueQQ2gE3yrg4iWHHKAnTEFL4Rup8oEFnac2",
  "key18": "4r7etRacheNbDYzEoUe3itrp1q1JEPyxwCagb6v7D8qLJv4pToLFrzjh1iyhh1FVueNCLVkviQGznK4HbhqU9QmD",
  "key19": "5swt6UkJDmUHLwxXJooUTFWbvp7KXMCpAex3LoYAgpJTN3Jvn5EFjz7cr4VpN8fF8YtGw3uZtBidHLW8hGcQqRNM",
  "key20": "38RhPmnibhpoCYfZXL9tG36kKVC9tUQiSitxM9985dTo7iduTKGBWRgatvdpis9MNiCSPPbz2MyPRCih5ic8GMY7",
  "key21": "3DLzguWs6ttzxFJkMhuwEq6iBV2s694ZLSWD6TW9Tsu1cHWjDu56owTNvDqUkKBrnGomE4vKmpHo9FpwU5Vr3J3h",
  "key22": "4ZTyUFrPZLQMebGenXaKrThy3F7t2H4wvvmZoyK76s5WBNGE2BK7PWT9YfGRBw6nuWLeFCWSYq1RgcyCz552GMxy",
  "key23": "5Pr7wPeCrvPBeLgJnUUWoJCV1ViG6r3moBExRtxMQakpmfQgCuafnBpSy7LdSQRHRtbEikDjhaSnG3T1mPYa8q2V",
  "key24": "mtZZBCyVoALxwHMthQoJVGXMJ1cLqqpJAZZVVdMjYxDKTAAPAhrCr4Wuthse4yuReWE3sj6Y8yQGJBqEx3Mtkb1",
  "key25": "2iE6pU5hoeYtNANk1BNooYqV7sMYQAYFn3Gg3QApunMVVofRUFbbLURneNwqS1mqYULbp9SgGTC6PSWZjEDzTvmL",
  "key26": "2gvx31mi8rpc5s7GAN3GWLQq3MytWNgmQdrTxusRFsPbu4VbVL3HsoSbhnobrkqsgQv8TKkVw5qcibJGE8t2i5Ld",
  "key27": "55ACjp6mSMJobyigvLW3j81sB4SJmGbivRzhs2voEkfDxkFVnt8R73H6fsijz6yN8LKKNobQd6QLhwRCthVSFP8E"
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
