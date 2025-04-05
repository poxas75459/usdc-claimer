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
    "3oWn1nrtf264wCJ5UdCSLSaTyQwn122T7ZhC4JbjtwMXqLAygLnDjcHvPyUR5TrioCT73zWcbDGoXs2pmkY6Wot2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjY2LUPKjDK9pBg2tbW3XHZtbuLVXDEpXsUthTeoanJs9C8GRrPBuiZXMVs3UvXqnfEbTKE7xsM5p9uhHuRrG2N",
  "key1": "2LpB83mKjfqACeZ6zEzZaAHbFZKuY3BWYfsy8SsAdYGuG8ZJz2kLTfcUqhPa5u2Adx1Hoqx4oKQWFLMEysoCcjBk",
  "key2": "3A3qVede9C4thDAodkfgkMof5S6HcLZWR8JLo9ahoEs6sAAN8Uqhnzs12rNXtZ1E5gC74CywLkD4q5Nf4AgxNxAU",
  "key3": "ZhrFdxs97RLLTMBKkABuhuZirXktZDA2ERSDEQnn4C1Kj7mTgTySme2E3pMMrmLLQ2aiD3HgXx2XAikGTYqtVq9",
  "key4": "3v66UVX3d1YRCcoETeLBZy9hkhKVw1XF39FD7xQNsqXZ1UoJwEVXQMdkZWiyoYfjNj6uxWNvwtT4TxZpi2RGc6Sk",
  "key5": "23jyCxj3MV1arKFkgf1YMQrGzgJbS24YCqTVDTdHBcwz3vZJ4g549QxS8xcGAsxWdrsFphktNQUyWpC3pEGaMRx5",
  "key6": "4JW1LuV55nzdQYNe5BsdpXzfuiMTcs6baXQWwpn4QDyAMyu2mV4Uwa5ZNx9JCjdG32SP3RQ5xu28sSYxon6WMU6Y",
  "key7": "5SM8X9PLpKGQSrzPgDobLg98wEWcogv3tfyxuZxybhgfy4WmCjezrvfrFanG8VN9xi7KPf7DMMz1cbnbLz3cgJK1",
  "key8": "2eg2icaFCp3zLzCLQQLGrUwH3VBL4L4zzQybU6EuHhNZnBgZwr1JJwMFocBYPgcrrFVAogZ7rxY8XbA6sUYK1z17",
  "key9": "5Gx5HAfD4hCKqtcSn6QXhxyGqCh5apzZgE8B94vKc53Cykc7bk5u9FQCB56oGzEARTwiSd6EAqkm3fTVgFSBDUoZ",
  "key10": "565K9HHFFhhVkNGXbiXYBycMjmRsZ7mgo8s1HX4UiVYYiWHJBjtzWNSkMG9ihuGbLYsd2CMqo1ET5Ysboau8htmA",
  "key11": "cahBCUZBafsdd642aoerQQEj8KH572CrfG3TFvhU1tZG1Xde8W8fzMQTgCfNfk3ibSMdq4DXsESQkzHnL5owTtg",
  "key12": "x3FuiZuXkZtBysVENXvudV7mh3TFCvGRuVxyGMViQh1j57VBuHFTGBqjANBhqfQWXKsPHKoXpG2mPatmTr389qk",
  "key13": "2G4vqm82rb9DMBqPykjmp8hVETuKNUopBb3DQMa1o79Xhf8P71DkGAZmfZ1izvcg57QY7EjdHkNJTrvp1r94xhq8",
  "key14": "4Jvms44s8stF3ZhCcCyvUfXPVxaUAWowUmH8pmava13tuwbrG2XN62CkA3sJjwFWLqqCvDy4rUBemwuei6YqnZZL",
  "key15": "3oEzfvnbv1ntdcGYeqiFqkmNYDpUt3iA9DADNYnx5BYgV8zQttLi2Tngmfwa6c1YCg9iFufmbSHi4xTa6caFdVxk",
  "key16": "qXW6ztbctGijEwzgunSg1WpHtGF8r8Rrv1XPW9JcGWXYVGrgUXaeffg7P7gEGMp8FBQ3GhjuSZ25dov9yawGdVA",
  "key17": "3dTd3vdsbMpaXujjwEf44SwN2Vx4CzGax19eAgVWrbYYQuBCiAAsYsWdPS5RjKJaiy5E2cxeP89MEMXfe4bnnrgQ",
  "key18": "2m2Kjjze2J9HPtjKks1NmmX4zZTX77HSufaWGKtSXawNmqed7hEWZx5228sFwNqG9RNvbzDxBeDm5526MTKkfPyp",
  "key19": "4sFTGbJ6vA3cMa7PhmNUKqnbJwYzaUMvfd4N4RGDuHQhnRyHVpXCdA2UP3mAgq1WAbZJiqv43QcPSUho54w3b1fA",
  "key20": "4mwRNLRa4XWzY3CdRGjoVFwYKvX2zwgd4CX8hAoH6FHddugk5jv4WRSLZuNza2KsWBKvY7Fh4MeeLAHZXMZY9Rrd",
  "key21": "VRafYjBGQsYFEMA485gBzsedo5ozgBzKEKjeXUfuZJ9C62Rtuvi2zSk3FdCzia7AgaHvbAWcWFzwGHzPKja4oTQ",
  "key22": "29gcfVisSo8z8Kx6HQeW1bGGqGVkMYZaQMvGpF7w7Kbo8FWzvRgz6t9bSvg4PiPDkvZ9WH7bstMH9Vyx4frLbaUn",
  "key23": "ruroU9mCoJh374rBTX5Qc8i1qLT5JRXrJT7BM96t69kFSAdDYB11x4gKjToaxbR2EYVu2UzFPReg1fYyvXviYhQ",
  "key24": "2xMWFWC3aS2bttqWEfNnyrJHUsx22y75QjXRspsnppHQx4nsUyHrz4RG1pcinR2pe2DfjKdjVZ2NpJEq9Dam6ybo",
  "key25": "4uin1mK5mLft5BFX9i3e7ctXQYPPBUWrLhZ8goEaCmuVKEyWaagyW9yvYN67mjfB7YaL5qD16oK8Dar9x4NHDp6F",
  "key26": "9huFC8rqb6J3YGR5WFSCJbejghKYApFcC2bDKPu5ukfc8zAvPadbo4tApKoxnRGdjoifuKx7GKyBnnpY1NRiAUu",
  "key27": "2dHpPdunm23yVNnGnmUs26fr55CA1EyHC8t6aCUHbvHLUwTLt4qHhq5tbFGpagikBm46gmN5SGh8a3E6GtxWFUCC",
  "key28": "2Cxoh11gG6QcPiUM81ukcc1nLJd92eLuV235Ap3vxk6zzXFVGsmGyKjcXY8Ah2TQo5ft6UTgFECyEWvT1YNMarr3",
  "key29": "2Ztd5GqS3jXBxDSDaABonyskKrs3CPVLqtdWCHSrYXkHtkZCMX9X1Segy6GzkjBqHEQpFunaAcrwC1Z1S31ZhMPz",
  "key30": "5ARvEiwBdGpDZQW4r2jYYj1PLw6EWsCP2jaDxvC5cs3oH2tSqnUPNPne8qrMUEXSR5CS3W7ipbtbvWWE946rYvyM",
  "key31": "5qMZ1fvYKrFX3vVcqSiRLiwCMGh7TjRfcMZkMzB3iX7iMMgtg8DLbY1ESWJYkxXDx2pNsZSmv9ce48pZCRUwKW8L",
  "key32": "3ZYgzXSVgPapg24AjKVKUWuLpw4XFoZF5gGkdB5WxyoQVZS2mobbwq5tzPDAE7xe7YmjcrbHGFZQJhuEcKFtXWNG",
  "key33": "3c54sDF8AWrqAgAXzbddQunz6QNCAEF2vvu37Ss3VXMYaKnt1TAVfffz7DjeKDh7g2W49CM5yWLm7XEYJqSjM3qV"
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
