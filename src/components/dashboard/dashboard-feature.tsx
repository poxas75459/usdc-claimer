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
    "3Q17aAGQqbH8AnkuY1YjHhjhiybadmteR28gADuFeLsMJRycQDm73TqsaVqUDhKrik5eFX4jK7c5bG9KgP39WUDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLpaE7yUMDzsLSLkqg2L7fLBbKipuP3z2b5jMbwq6oj9Kc54ge8rmaZhFiXaWcMJBbpFQRbCmheXV3BWphScqjt",
  "key1": "qPyzsQV4D6wBEPhUq9m1edzdtViESyzHu47q4rD8nSt7xLLhHpirLc4cTxc4zHY33mbZ5U7Z9znJ9n4K7F5ppCi",
  "key2": "4YLDEvo7CnEs7TUfyZct6hFwsD1CGxHS6xSaLrZbo9QRakgQ8tNR1q9ZW2JM8ahPXNECTby7k1XUKXff2Lz8TtVn",
  "key3": "3XbAs9ikEUsrD8ojiHD7pE1qu4yCcpWJDsBwVTBMHE3eaT7JJEF1F5w5xy4zJis6Yfrn7y9uhmyzeWx73Wk2tAor",
  "key4": "TqNuf62kyH5RdjzFM15oPbhik9YjQfi4s4i6frupMXAPHMGnzyWsGQmiPe84gAsbGBra4jFHwD9NnPvMXuDBwU9",
  "key5": "3Pgoo6uxbroS2QCr7HyyT3GUFtH3XeDwEsUvSG9BFDqQWUhZkjyYqyByPoEgYr6yGVQX9Kyt7TpWEhXwrecH4kiB",
  "key6": "3nhraFiyX9UT2w5HJEPNW8Y6ifg3QzfWEvWDeCTpo7Nn7oxdfXswmtRvKoJt42fRDfEHa9aX5PTqqK5hL1W5eAdm",
  "key7": "5jj51rMSWtWJUXoXq8a92BCDm8VPgSnsKEAHcn13v9Yfuhx7o2eU2dX9nzGSjKvVTY95Q6WrFEoGFGJgxEzkS7qS",
  "key8": "5hK5h9LTBvW9XxLTdTtpTjyZQ9gmo8sbm5qvKQZ8y6rfgTCtNR2D3pLx2i4J7btYK3wLzy1fPApUKts7bn4fciTu",
  "key9": "5CyGpsE9WoewLZfwcUgm9ymVeLWMsTFjKHSLQ1FD9A4VeSDemLqP9dkyTCdPofjbJgkeJnBfCZSKgBhHL1oSsWqr",
  "key10": "ntbBs6vHYxyYsQMKXdkaASE8xXMDLFnnwoJWyVaHJjGqqMMUSy3VVgNs66ibYcSyTY2zUshAvkdjoSVqVh7aR4K",
  "key11": "4JbdXCECcEshKZwhkCN1CSD7fohanD7QRG7q4ZUZ8EwaE2DrH19D6LX85W436P4otUbPbFQrS9C6ZUwnz1qhEgwJ",
  "key12": "2UxRLzky7y2cbxVBskLdfzvqmwhssLjqbW6YsAEEJQuX5XSVZZMSbnZu2Qk5ymCyCB8gHudYSC1G6Ks5ZfSy8pSG",
  "key13": "5tfvJCtDQmuUFRer2nagi9h98qd2wH5qmJvYpFNPEoVE7A8JNMTaAHsgeqrSdQ7FHVDQQsCy9JWrgmJmapLH5kNU",
  "key14": "53NkbB85C2cbW3LN6r5nMU6zdxeBC7DthoZsKkuWdeC9XgESfN6t6Bt93dqf8ZD4CZaH6iNbRF8uuuz6Mt1ou3Te",
  "key15": "XwfxkTyj5xxdTXYxFcVKbLk6oyD3Q7qFkufWKWYMhK2XjX6nMQzRCxsU8spzJf6Nf9FT1xeHBDqkQ1yQbzFN7Ci",
  "key16": "XU2tBqzpEwXZj56FV1bvaQnXAFB5tRoUYiNWyL7w9WLKRZADFNxiRAKANWYMcaKwoiR2thYe1P9UuVJ1gLMLzAJ",
  "key17": "2xbk6y6HUmkzS9DqWVECsAwpGSnqNCaoqqyQVQ4umVVFbvPNsT1RmY6CZkd2Pg6ZwKidBPPrz6Lu8TVR9wbzbkfJ",
  "key18": "4nsi8dPPQGiSkwoEAowZbvxcfKfnxzrywdWZYu4YB7XURABTzzKx9xhg8jtqrfndubY113XZxKqBMuMgNQvgGcKP",
  "key19": "CEZ3PxcAn8SUfWi8qSft137Ypq3vRktKvReXg9syPATTppmydK4uxebq8atZCcn5no5R3VpNnn2iCMbDxiEgybi",
  "key20": "59WNHqvFHEN7McocvyeZMBike8r9gm3AZ5tsZw2VqMLc2A4jjeWEDV7wqsRTejM7bKGkJx2mf3feME3LbKK6pAp6",
  "key21": "4Nr1KpEkAUSf726i7FjgpdRw3MNVFStNtHS7BzhEM3g9GukS7gEJUkcYcUwFUv6xJo4Qoqe4Sb5DehHhDHGBkW2F",
  "key22": "4MBMqnkweW7T6CGWNQSkpFutxmLcB75fDkTWfhSkSye9VLRiJjB5zDHxVCG9KutZXamWExjWkz47QNZYuFCbCoZo",
  "key23": "4WKkm5uCX7DnKpZ2Y6uWKQMenxhxMiXJazc1kFhs7qcXWTECPgzbANeK3ZS9ZTN49GjmxqXyb18A5zbPqYHUGbG9",
  "key24": "2QAHqmgWpmvYVF1qzQCkMneYU8LYHikqg9cfHB85TDhCZpaKEX3LoxWgryE8NHntJT4WCzBYpwnhh6uvQ2ieMoa4",
  "key25": "29JxL3oA4C58EVteDCXjxwQmiVSzpWUtKH5aL8pPAyoAK4rfFZjC9UHWraA62ENjd7YTLLxeisutQDbD9GBbAMXT",
  "key26": "4uyAVVtoYKt9ZGvEgVNWsJdtZsA39C2BhMzXz9WKj1z4W3WxDkhmUk1Tq46dwinFBwb4VZJxuhsEqCEackTVfkBN",
  "key27": "3F8dxApMNHmu8A4vpfjRTgPiBGZ1axs8YJLQFBKbmXDN7awK58ENZy2ABTNzGRUqsF6YxQNMHCDiFY4TpyjtSYZW",
  "key28": "5kp8pXQWUFqPdKAhRePBdPjyGk8sjdieP7Ph1nqbAkDbX5Gfbe4DmebGjTs32kuvqbUCqHXrb46QCS4TXNsDbuqN",
  "key29": "5NsUH7gxCPLmAR5uYJtq6pSoZ9pvTZUd3PJnenYB9FzDRQfberRWFA2eyT76Gw7QgYNZTxD8Zm7RbsDdGnK8Jt2Y",
  "key30": "5EB8gwFGac4gndztPDENUQWKnjUfrzbcHheYE55pdYZpDmtSXCGrSvrA7AG9suqRoUmT18qiaiGMwAWsJuGqQ1Ev",
  "key31": "2XYwyGAfmfv9oEBQKZqrwf4rucoifW4zEpFAbwGPJrxYAxUCpb821Ms52fQunuwf1VfK54XGpKj7zPhpqGKWW953",
  "key32": "2GXzVEZiG12esebBHJwDMeBWPi9E8KkjiSE3d71GwEqvss8JLF6nVhq2icnZJm589p8yqks4MfRJ47m7Hjz9Gi7B",
  "key33": "4R9HjRdw4HWA8gUmBjL6i4XZDTtNXD2c38a2tqJatbHciTmUSvWgXkTa49qf3hRRSVHcvWXjZy6AUumGs7K8yd1d",
  "key34": "2vCcj5MRV5CzUKt7iPcz3rneNRV9JXn9TDsqCiXs14zPsnZpTyZp357qJMr4bapfqz2tWVKetmPqEuMDKP1DakBo",
  "key35": "47r5d7LSAFRt2eChnFqzGCW9hkp4r9qHPr7SXQ7W4jqP3RkL3UaMnatNjPJMziq8cXkhG3771A7bVv9BZYjeYQZM",
  "key36": "nKwypya4Rwp2mzRmH1kd1NSiZU63zeVeMF9EaWAPMstV3vuce88CCQLgYrvPdDrLbrLakah6F9AnaXSTN52Hs9G",
  "key37": "2ombU4hU51jqVLhjMu3VqpKmvXP6NXoj1GQG7oqdP2qKVNsD5xTPXBDKcRjpmzr1QmeWYMJwtj7ccZxB1iFwVFHu",
  "key38": "578C9526C8p8TX3S7gA8P4f4xZps3QPm9Gvi4cjQvDB6J9n9ksfvJuxvYu2hKNefsuufYqYtQxgwBXaBxWEtuLj9",
  "key39": "4yzBSU6GYrQoutJa14hZPfX9kd3GfPPA3DUNT2BDgSSRGaDXuntoCuBc1RDGBru4AkcSAKXdeJWUnmh3zGEefz48",
  "key40": "5SqcGaT7L9fp4oyYPgRjJsbBv6ERZSCU4YMcGKwzNXQVW7kEtc7EyowgMdAcEnsYBRQnE6fWefXtPn7r5967Zn7q",
  "key41": "3ishZP3r7UGyF7iXhYEFuzvzrro9o4jVVsbavJfrukukFDXgcFEwFDSj5Akn4sUCi2oPQumPbKKuy2Kw9bfyCh5E",
  "key42": "5ndrSgN3ojKesWqxQTsGhmVhi27TNqBQTp8ThiKrhxxT12ph9TN2Fppr2WuYoWdEXraPo5HiYBq1RX1VCrv8qJwj"
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
