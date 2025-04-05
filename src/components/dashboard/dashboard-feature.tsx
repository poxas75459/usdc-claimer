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
    "26rLYWjBjr5qU8jxQ7fBAgpx9n7Spqdy7wFx6uFWjsNEdJAqgVrUBsqqwErbDwQL7qvtNV3bXed5zSx7YbvvFHgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6yYwx94rQcfN3yJce31FKKmX574mVYknQbW2CfaA26hsQVmWEfFDXbjMXBJBR32KpPKenMGsy1z2Q46tzzN7oHK",
  "key1": "3gk742PXLet1oWfhumdSM5Eb6qb7KfjFbF4NdZLPtHKdDoD4D185GFmojZdoRJwqJzi8rJyckq8WrwwPU3rJK7ZH",
  "key2": "4AJFu6hjYjEScWhMBNuTZv33mVeqTASRCVzm3FfHLd6VgJNXAUYgmQcSPUg88y4Vs2GSGvdcnrDq3egFeBsB2V7V",
  "key3": "2qzaSZJYFuZh7CBBWw4aCmg1spWoAuPaf9pub3XDNuLf9XFjCunK4DagP6sBWRph4hW73mjCPsrxovvph8ezrEQo",
  "key4": "DqpWzd9RVWTVU5gBGpt8UNjtzbANKiYXJqkCdfbvvqpv1gFneUhRDg9VdvNQoyfZbXmGiAvQEemGdDW7TVRmodQ",
  "key5": "4WRFw7s9eNPPpRxyjMyKk6V8SAnMp7yugNxYVozz6VM31C9T9JxYxyaPqtSFFVvBHz2CL4RBEG39MdpfhJH1Nzgh",
  "key6": "eQ6fmvPVPZVpMk1WBRziqkChcv3DejoRmraKrvJdddUBKvCt6PtoTLf8ChBTKZo2jKNNo3BTDiDVVsKyJ6gRMwQ",
  "key7": "kUA7wfqFstixe7SRcrMRm6HkKJmZ9YfKmbB632oeU18nBU27am4tTTMmttwPSm7gMfb3wbyuGFd3T9gXYjEFFi3",
  "key8": "J7A5cPCXHK89HtnTyCkpcajqB6titA42HPqAjkYAYzYtSUBV36LZ7qwrKQ6puGrk9uwnFvhdTwR89FkwBSVznXh",
  "key9": "4KSDhF5Zde6gqr29roPSmmKsz3w3fxaW4STc9yjuc5r4DbX5BtYCXFJCLWvKdhNC4e13G6TnLFqeC1Ag9uaNhAzN",
  "key10": "2GG4CMDoZgZRuV69aERL4dMqr3xUsU122bNJ3SqZxruRnVn4b3UTmwCPScFzNBFMHYwNbpiAGJT86kqnvMQqVphs",
  "key11": "3RmM2SUimaJf4UgDmYqUDY6tCHni29rvYVFWYrRQyB5QFnB6WV7VhFswwPH7uMGQpeQUE9gPF4bSndqYfBhMw9Yy",
  "key12": "37ZVA2vU39dZo9JJFJv8LWeYbsuJSrXYfXDS8T7pJrWdqQUSFSXZ7Gm4JNq5GPbci1DyZL7usJmsVa6gdEKGtDu8",
  "key13": "4cHfzuv9qMZEz8pveYsTMfTCJopcv8Wj7MoTeEgmsqZzATNNrxEmm1ru7LAt6SCe53ZjuZEf6TxdQmQxx5VpLLM5",
  "key14": "4Ug4kAUfuyw7Auhync8pX8u7V8ChiHWDFyEzYZSDfdn5XisY6HjKpUieooFYUT2ouvJMvZ1u6K3YL25v376dEhFF",
  "key15": "2iPwJQr5BaCVLC9PQYGy96oaxXf8hiLBSmZRMB8ZjE5K6CvXN9TX1rwuUhP9F42kXFvLJUY5cRy3enTm5pNWdSyV",
  "key16": "5Fc4QzT5z6uHEVikjQMubVw8v2zLUt3iDVQTVJxXxrWs5PgVXsm5LzarcePVUVQtXeZKhnfcCYT4DJTSYo5S3hE2",
  "key17": "3QShp9fBTFETU15UTtRLQpnVZccoqSS3ZuK9a5tvFrXNakbSHs5LpmM3sirstTtsMatyAD9h4SD9Au1ndZFYzeR3",
  "key18": "66JmWrsDUU26XQgEBkBFR6CbWAqCoiobfT2WrEGYaLG4HZ1Ts6WK68UH6MhBk5XU3U2Qk8Lr2NfXbdoM9sEaX4BM",
  "key19": "5SwWG8MhADFG1ggxQgmkPRr7o7CJjQTheE9RLdyNrqrDRLsBU2ETArFaHKnHJcxT85GoDy3Jh4RocthvUkTmKn1G",
  "key20": "2MVgSFx8osbFHdUwKaivaST1RJKTr1C1p7mCKEwL2nncG7eMuQYxrUPggB6yWwQUBFkDQXtkQYDjLeAEHTgxAXs6",
  "key21": "2DZ8LQHz65G59aPpYixuEZn8wowBjctpQLGy1Gw6JcLEP2V9yBDzTvyXPCAJn157A3Yi91xPBkKhAg7iTXNhvMwM",
  "key22": "5x3xbayg7pQCXEGrLeYHQ7ZSrFGDNBU79yVRjFaHKwqzxbnsMhvTr5Cdq2CziCHTfxKZMreZShE5M5gKzs2AX29c",
  "key23": "5AHkRZQMnSWsXHoXgn2d9d7YUNXu3sJSWTWtqvvbvM7TwCQAUGQw6Z1TKJVyKrCHFUMfgcVFpVA3qdKku2jDYhFb",
  "key24": "3669iz1oN8Tv61eGG9LiDGWwKh4VdLD9sCy3FjTKEPb5fFRF8uHX2HMBpvU2mMftyL7XgB1wRzyMYDPRZZCk9M1",
  "key25": "4jStt1vEbModB9M8S67nKYPw6TCRoNugiiEc2uGHULotnRHufHxjuHHgkMWnu8CFdhzRqNvtiaWbdCFJEqgu2gpt",
  "key26": "4LoES6aa9fn8BRZw4t1NVjKt6hzLysW6dVZVYBCbKnpiFMbdcCfKZfRoMwHEDWMb1DeqacNRywQRo9JEz5TK4wwe",
  "key27": "5vE4kQqkBUcqX22h8i3WivsF3QHVDGkgJo6dcADKWY4MzA24gJvpQUSydgDRJGkmHFDtPaZt2HwcZn41mPN1mG1E",
  "key28": "5SeoU8s6P7eb7o3dhouYqKsDJK9xGqmoqW9fzzsBJ8M3k2YmUM45AuHGHpDUSAD6FRvPwqswDmAhG4pKbCiehdGC",
  "key29": "32JHwyxiGfyHbLedJKFHnVrGTtAubaKTyxSTvcHQveiqPQ5WHJNdJRckBckbzKxjuUxvBcVzUUbRDPUW3yGWC8B7",
  "key30": "2EsyK1UT6Btj5QxSeyurScKkoMyLZXaeQiog7B4pmXQLMPFRKoeUC3zFtz19Zkk1dbDZbYRgQLLVvE5VtvD5yGJy",
  "key31": "3SLXSvWKU8p1FrdMwY56DuRbVpxx1Kz92XGjUBfZnnAUkwb3Po6NseaV8j9dwPokGkgkSs5jdcegEYaTP5Rb51F",
  "key32": "3rP15DGitCcwbjoWxQQNb8rh5DWHGZuSUxuUhKVrnfH6ZkfHLJBzB9fpygt6Z1LBFkVfoPi6FPaKYFdiYxqRauGi",
  "key33": "5XvfEeomzTkNuSuz3casS1BhG96vEymTimGurAAKqZiaZHySqCjx8KkoFUeoMwzui1SRpzZUWqvF4GB19KDq7Rtd",
  "key34": "5FqFD9ck8R8kALYPrHDLo7EiLiYNLWroXnFpARieQSpcrMjVfh5Nk98finDSSknUDFdfaic8nXz1m9wRCbFSo8XC",
  "key35": "5FGBg2QANS2htih2Drwtw3zZ5WFdUhUHkoEBDbvJnybcEHnLHeGiVM6Hg6Sjo7mskb5HR5gLs6cLofRrgmqiFxcF",
  "key36": "4QHbbWzrGdxoJ6ZtHsaqfok1gxkkMcd18XNUNqj8aYTKRWMoGmupJeMwqvgc3ZSrxhKqqNN8NZuYMG3ueEy5kQuY",
  "key37": "3M5G3yNP8oCVG5vhzoKH4PfRAURbTeAmQGWGR4PzoW5PRgaK4SnzJus673j1EguK97r6xf1MZH7dyCvmCrup1G46",
  "key38": "5aVPTwHuzDZcupATvDZADuCng4kuvEDUKX3Ah723mYkKEpciARAJNEqST7LQDQPoDFVVZb6CuJDgntyrt36kzUwV",
  "key39": "3WxxqqgpyJGsxnRCgvprM2r8VEqyF8a3RD6NiB1LYJr4HnDpfF1jxqLEKDVsD36tC7VPGWNSMCerFmDpsJLopoJK",
  "key40": "E5E2q6xyJkFJvJCd1MDvn4HudPJRrQnU8dvjLqxBRsKjUoN2DLxF4WkVnBvv7ZzLUPrRzV65hzfXkSPo7UuRBqd"
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
