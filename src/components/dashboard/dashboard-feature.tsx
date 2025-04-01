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
    "2LNUvdJxGZDf7Pmcfodmm55en1g4vKXtvpvTHbTwwfM4dBrugNZ8gD1PxSqAE2LTois9vs79s14ZRUGvSiXKpNWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AB8fQrNJRMuVQTxx5u557k4WsDaKeF2e9CpopgodtTTo2bJ2eNtpufBAGxcYWrN1UYVsKFKpjUEcCyga7ECzarB",
  "key1": "674v74wc224iXG6J2kUUUzM3szaKmS1H7KLGQXxLdH4T9A9UzEeFrifjvZwaVpaLv3jpWf7xdL3jpux2xzgKWw6j",
  "key2": "3bVwEfp1miEg145dbbT4Ja3VXT75Zu5vdb4wuvH6exfYmo8rQCnmHxpmgmRteEdBPM5J8ZyVUQa5dS1ADXhRQgzX",
  "key3": "4jJ8xnA3uDBJAYhkEShcNVAzAshoMAJcJ5f5m9xpBJudsPzE89xR3vCBb6ceP9mQ31tn4HAKbMitQAZH5eUQfG5t",
  "key4": "4jCcNaUq82GQeJtC5TmXqnKCfGYPNBAAc2L1wtr9Dz814UDZbJu4aWGyDnXwKLVDSrhLfqXB7i3Jx18QtVcLQxNg",
  "key5": "5b1nZkeEk6jhRKJ5qK9uf7orjzaDFeCDrUWMQqB372r2V6mbN4p36rS1keZMPL8jEqDuFj7z9yVSHA7mCo49jbi6",
  "key6": "2mHCpg6PCyYC7ARr78DphJ76DceQHqW9Vsjeq6zq2ys4xaWJuBTKKBj2ecdxWLjBdGERs8z3tBPpbchyWv7Kp9Mm",
  "key7": "RtEGXJ5pTRCPj3DEK3PfzKL8DY5xUsASSPtzfCtKjvRbR9uVaV1ijWv6vgCMqwxEb4pheszeaTVdEdUArhiP5Jk",
  "key8": "UKNpoSUHhgD7X8bFwF3Up67a2rvPRwL6BfkCNnW6WUyf4yU8uyRwhEZ1WUHxuFeL8goQZ4pxXMFK2X1XB6sAqx2",
  "key9": "Zdk1sKU1kAgn5xewXTxw79zCeDGUEkVqstXmHr3STqpwuartFCzZ7npTAuZKqZBMZjHzehrFwk7L6kS2dEjyTZu",
  "key10": "2zC8hpET5aYDy6SGUwLxdip2BBhTK5qkaExpuquawaWeVGFtz8oyL9WBZNjqXLDniXR986uPRyWxTkvtwHHeAVF1",
  "key11": "4z5CEmvdmVPS5fCuVn6ZhGzhY1L4zR6WPWn8pavGK5tXeCamUNKDr6HvtLoY7e3iog3YzraMbLvnQzyF4uBHq3Dv",
  "key12": "48J28uMBJrnhNtFg3uWdBedLrZFhs6WJKDwxw7Bn5xA7kSPZicmnQ7QYu445hYJiiwubSFA1vKkUFqr1338SAbYM",
  "key13": "4gxMfXnqmUECod6BPfjfb7uVrkoBSAujvoTWvx1wWgSNxu1joJR81HD994qQzoTBFXoadrWFtyMDf3Q8cPpZ4b1o",
  "key14": "LtvQT96dEMYfHreyn1nYTsYEd9CoRQVrynzhsoaLFLj116UdbQB5bmE5eNMCNtssakHUprVKzkCWFvuv6Be93UL",
  "key15": "4dKTxvHuNVdRw9adxmV7Rm7n3j6KZMucgKceUsfrWuai3LLWt7UvSsjR9E43ycNHwWd5ZFnrt7McMrTMPcyezTvh",
  "key16": "2s5arh5UxBpespcmnWTLFqEMjGv9jEwhmVnujqjRZudEUEPqJpWWmd8jXZFTt4zRcTerBp8JM61YYtQkxopSV2wb",
  "key17": "2gFoVFPdZXWkzvrnpDMaYGoMUn1hxoiJkRUgke2rswCpDCdw5SS8fNEx4jDNXqWpW7QMhqpDpX2vhJ2xH42ynBTJ",
  "key18": "5YpL4wPY5KdecMWdWkodF73c1SGj7Mnf8tgeM9FZc86GJzc2ehpVCKyjNBXfXbqqmZnYwYgXBXUgZLRZL3FVX9rg",
  "key19": "4kja6KHcvMBfXw4MDXX392E5a3xJEPT25W5jv4JcbSvZdR3YXGWBnEphjRjNVHbRfnoeuaxXmtxyKd9koFMz3qMo",
  "key20": "47CUEiDfzSkNa2HonJzTMfqPzzhPsoXrvvTE7ETQaxRhNTszfVKDtyN6WYkEDdhLVVhpR44e19oZ6YiBrz5k5amg",
  "key21": "4izb6MpXPuZKu71KuZFWAeLRrto9KXRCjnY885jjAqSDiFZMQJ2HnVwsTCGQsmva3YdvxnqFFjSNZe8GyQyXk7g9",
  "key22": "2MRCsy6L2qADbVdPSpYPSXYcdF16rf2cYuH8yDYP8rnzFCZivbP9BWkgXbAsM5kRZeXvXJXrDhzHsREbrULWRbT3",
  "key23": "2hdPuKJiE9rKVTJWnrNqqfSpQvpi7wGms2hrBbhmUZeNFuswp6yM3WS2tQUbf7HKGrqSebrbrwyJ3LfrMDo5CkiS",
  "key24": "4QaTCXhGp4Pd34mRUgUAt6bVBfJeVTDYN5a1hUn1jzWFA3SnRiF9fnVUCESD6e9twDqEoi4koqaMS1N2fyJL3AiC",
  "key25": "4hkk5nbQVSG1hzMufN6fqZ9NUc7dxm8BPnmS2AbFLuYTeCpy7LPBBuyB9eumysxfud2nNf2BJdZ1BcFNTNUwPqZ",
  "key26": "TbPw7eks8bSiMoxVDgxfCx8ZXGMwJKANvAnH4Htm3zqWmiqaRvzp7sYWdLKJpZgGuB28H6mTwf3Vg61gXKRiqi8",
  "key27": "2xiyzLR6XxGndiGzuBnMQ1S9P69Xi6p23AZ7x9GMbxRaPGzgrrMzVAgW2cQqu8SSMtoVNoMFz1BdCbxMxYvB6G4o",
  "key28": "55dF2TUeQ5xYnYXH8q5oLMQwNLMAm1B6aKJHxLbSN1czAycU1jh5dAMMA8DwgQQ7q5pmcHj9qw9Dx8LhfSVkrzeo",
  "key29": "5MRnT9PrsKCS8gAVMQYGKDR7h513ozUy2TtnYRQ55kHGZ1pbddA1kEQHbJZ2MQweQ6nXdgLsEui8cwK2TJm7ZvBk",
  "key30": "cxJ9JBWhUzSp1vtXxCSZozVNzB3WMPWi9jEyi4aS2dKyQqBg7oRHTB2U5SqJwhnQCn523GARgLxKWDmgbBdD7pJ",
  "key31": "2dQskss7DHE4RbDDboVBqKmE1Nfj4QecoYYkq3TkAXhF8FjXRBqRQZTrZ6UmqD3Yeyv75rgx5yVZypZkuzmhdCPJ",
  "key32": "2468rh13ogdSk9dmGUTUpepKUJERHjq8kD6ax3TaVoec3M97EDrRfMovyyaiLwybNUNrsVyqZNaPLnM23EpSu5PL",
  "key33": "2hLShTgPTpJcyi6rzCVXp1VKp49xFaAaNgvuR7sRQuVvUPu9CKJTg6PBxsUHwz9FhEDndw7zN7vaHnptCCAvgKUa",
  "key34": "5tKzqAAXCDTHqt8uqbsk9uMu4u9RXot9eKRnpenW2sk8X1f3LbsnUxFdD8iEv7QYjrNcBwYMG9eEDQLkSGjUqjV9",
  "key35": "4AY2iNrpxLxYophc7bYYKs5Z54X2bLYpegjUwtHiE22XSPHNS53xwX6QrS5oeLgk2aMMS6fv2iT5eUSt5C2YqUS3",
  "key36": "3qRS5X2TJgw6NGNaEXQTMrGqQqbgXmai8GsCyQpLSu8N9pc2YymvWPYcKbz3HovevKN3t34ATnFm1Kh2UzGAZQQT",
  "key37": "5nYZVjCXbbd8jwzVf6cQdgqFpxUiTT5qrPwvdJ5gf95kDGizM7mzFPbzvPiyzpExz6M2HSNZQiutejisSfLJ1JtG",
  "key38": "2REWynU7vJzfXbxiX2HcMk6Rtu8tvtXiZ6CwA5BGWzP2rKw4jnFjokXC1934GRC7mqYGaZ1TgHdoEfkkXj3ukLPg",
  "key39": "4Kgu9DvwVoTbDitSy6VH5jg2i5ww487cTTFkH6f9JGTu5evz8fsm9mJjTnUn9mU4Wp85T6t8xuPYDuP6QzPmZfSj",
  "key40": "5D66S794hyLYjJpvoQrMBpnr77NtweDSPXn93ipiNGrVkNdM1Zq1EuwNi9EmzSSayoa29ACJKKPaQ4JoBpeaVoBR",
  "key41": "5uoM2i24PpJp1smAKGfeQpyjyeTYDUzA7geof3ggLsqHYDRgkiBBGKqUd6emFxt41jvRvNzcJiGUac6KTNZoAUH6",
  "key42": "4i5bTHca3N7tEE1PbC41zQ5Tgqo2pCHS3v3fAEjYnKgryVyqWS9Sm9uLd9A5mT9QB4FdwfczuWLdcorpLCSW5iCu",
  "key43": "5WonhsMoysevx9oqXsqYYSoYJC6wZq7CYpMjsvckW7wXS1VZHuuLE1afqB7ePdEX9V4GG147tZsTSMudFHtvua23",
  "key44": "4PCsRH7Q32aBiuatZyeBamLL4LoH7W6tEe2uCEW7uj9EDPgYgc4THzUmjFKkUyrTPb8i7qvQCUqFUEt9BCy8Rq8A",
  "key45": "3ewMc9xR63fJeLoH8mjpiyE3ztcZRB7PNDdjdD9zvenWYY4Eg29hdRgpUT77mCKfHtiVM6uFTf1vcvouWfPVtA3V",
  "key46": "47jEB3uuBroNqEoDN78vgR5L3hZvKZTdcywp284QtTdePEZghM5AcHBugwQLmLatQERAhFQpjsABKwuCNXMUFAMR",
  "key47": "4Mjpy5UQjt7CAQmQgA9eoXha2WNFMvaBGvcpDvZebnXdFhdqvzU9y7cV7pvfpf6Uvz5M2Z6tvFHNiZgyUNz9eVpv"
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
