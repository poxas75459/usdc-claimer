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
    "3x6CVH7QnAzqKbSRYboXX4iyQZhXXWYGnEbHr1drWkYTA4Q2PK8TaUZQRckiyKdeTqwkkEEHw2wB66ni23wWzDXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mg5FWqFN5ZowHU97y7g553aH5R1gAaDeHy933xEVfuPF9XHLCLweeu6QkDz9uBfqrWCcwY7fMesPP1x4Cn5bHjD",
  "key1": "5Lpbe3oFRqJ2oW3bA2kmhEzExmQ465wCGEifZxVVYJx3hBA3dwLYZ5MFwPyKFQ1ktump39Q9eV5G7ZhXtfLWeA92",
  "key2": "4ogjbR3UGM82W43jwnAverLhfjSvLjuQamYSbfuqd8YDrqKQfSutvX4fSFcLgTQMGv1m1pkbdxBnez1nbC97B7uK",
  "key3": "3FTUwjcXqBTbSqLZrW6EmULSjjPWiSsjTs8oLpdLkzmLfF9k1LzvcbVeAmybh29ei9jZaxR4ho9wa4TSKV5XYwY5",
  "key4": "31hBobze1VVqPcZuuG8BGAVL9EFnGoNXDa9YavT2ZXbqtUeEbawqUXTM6iV6uEnsDudu63NrEmodWzyZCikPxXZu",
  "key5": "5eBnuTwPxxMWRt2Xb7yMHhbzCh6PcCxcnUwwrqzrMjsoH9Cr6hjiftNVEfUydpbRhxtTADkAniRR58wjCUxeERcc",
  "key6": "5iRmFs1mwyanLrjqUr3j8F1FWvzyiESHdUsGWz5D37cWsomnRotGftTDt2Xdigkg62Nx3Piv9Qpe1kSUwb8CyGk1",
  "key7": "4egJ4fqvuki87EpzUXRChoLGcv1TTgfTJhMLRd9stJd3TPEddsogqrkZEr59EShQVdVJcvgYwEDpi5cLYckhyMkr",
  "key8": "2P9nSmRgK7PdWWrgHtX2fcZ3iYnnS6broucsUeHs3XKw8A1hvFBmvdbeUzdNLqe7TLmwHLkE6vCFa6wa7NunReQq",
  "key9": "3LZYPxJ2xDjSmQSkpkQJfw4BD4Ko98wV4oJ522h8EkW7GuchNhcBqg183mB226b1gJ7XMTA19pGs1GxgaPTsX3Eo",
  "key10": "5vZtoazjGaJNVT5deCw1izCXbi6yspeVX9SZYsh61NPVBbGuh8wXuqsxWj7RBzrFCcYuShJPPNi9nZ8NkXtFTSkk",
  "key11": "TgeMuDMkaQ42kZL988FeNnqx7i4cSyRGUH6aznaxZmnoDosVjeQeNL32LnCZ4LcMppXmuh5UVpwnGZLggdkzs1p",
  "key12": "4vACtVuCPTYdcv7VaLPFDctjQ5gbwQad2J7fhijmLbBauUrDRPY7DFr9RXVJtbcAnW8BYD7ZkRbgdxJcEStzqDLN",
  "key13": "5NdsP2Jyq9SpAQZpNwevadbQDxZZdGk6uqUhXJmh6sJVM3LnLW3TWUqQ7PFCHZHSjhXf2zX6QFfXkcaNSQ7jVBvU",
  "key14": "2AyMBvmeXyR9JdPxtYLHwi6nx1NCwsdtGpPckBxVGka3guftRWmhxgqsED1NP8KB9KVFALBy67nwoP8ES5JCdSe6",
  "key15": "LYg4rnUiUVcQLQsrpJq6Q7JV3Ah7bQMyaKtpJQWQ13FbqYcHX48QMo2VGvggxYWe8WSRBX2g4ZS4BzQJymN5t7E",
  "key16": "4GymhQ9pAzTWvKC9c2VNYuu3WG1iqx3krRi1H8rzMNmpWH55kEtzGXmA6rUjUmEsWAU4SHBneUbbuoCNtY3ju4hL",
  "key17": "5zEDUGg5rkjGjkWLWqGBpnTGMMfFqfwzn5jUxQ7W4eF7g2LhbteFfkQ5vSDqMKx4pK3vp8qhofkP2sSH8fFc3NkK",
  "key18": "57D9FNibb7JpJRdWUgd95ay2qSDkoVd3fspLzinEKwKqUyWCf9hJ3ZfLfXS1KKRkEYJXRL3Hew9PoTF2XCGUWWNX",
  "key19": "5gjyTSGZaYDYPvgk6GxGKmgy7i91s33CUrBZDSzqR6yviPQhCWzBh79XvBy3XtkjsTMisN145Kf2jfC1gbAnGmQm",
  "key20": "2asiHkCTQX7MecUfpt66je2NMvUmyyo8y7ehLyTASXc5bZwPeqsFYNmW2oyijK1bPzCjpHrQBNCNYXo9mhP8LMMP",
  "key21": "9jaLr3hA4ydhpPHRTX7Vo7Yg7fQLRTvpcXiv7yAXHesFGenvnxZj6QDiYZyE4j8kpmqYqr11ds5no2TrfAEZerZ",
  "key22": "3MbyqrHSoYtffjTGutis5BtBqWNHgdc2s9SVAEq1L3iNTN5fxRmuzmUZVEyMbbzLMux1T2GR1EfshG64JEYPsAso",
  "key23": "2mxVp8943jGaAxke7xhJwuhGTmZzuJcAQBjtaprtrE5gUWgm7PmH4jbEAZS15bUCEAKa6VjkZLtPin7pQ7YdyiwJ",
  "key24": "5zZ5GVAJs2wx9beESF1kLe2UyfRBuFohXr8dfjPCohzxq5pLT1ci4PNdCakn5W1K7YKKPm1rssSCstNJbLEXVsJy",
  "key25": "25gjYq6QRjESMVggvnKqZ3V4nUc1b2dHH1kvARc51ysqZuUpkYLRCPobx3B1jtMnZgL2DTVhefC5vS4hrkFAYXRB",
  "key26": "ekRjDxjvfK4dez55G1b4LBKGV5Em5ydffehjcwbB7vVPLq7ZTDMiwVP9CL3Ys4hrZFe3U4L27iiPE9Vvmgxsui1",
  "key27": "35u5r8gcDTYuqCLYsY61vfiPhVPohBz8Do529cyTWtUhn3QqKScmRYmeMyQ2Kv7PVhqodbypEBjjnEQkago9tUJq",
  "key28": "5QQT3hKDFJnQzNe7mRuwyU8E5tk6gdVHAaPjbw3kq2oDxgqaRtF4WY7oAvcq6CmQiF9QBUQNwuVRBBybKJTQg6D7",
  "key29": "51u9WCj1z31bbYGwa8AsDUdjmNDxH8EsrYPhLx6ZzjiPMMCxHUm6HDAJpvMoL6mjAxKAch4N14kkMLkXx3yHaUE3"
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
