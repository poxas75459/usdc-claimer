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
    "5ocr2e4SBPqGnEidUQodG2s9pxzJqvHhBYmUyrWvk9Z4S3y9chicqAKKvDimQseeR6CoCekgyWPysbQER6gZhBYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vHipdoTtcdLffNYHYNz9JP7HtEviEwqkb73gU7pHHV2aPnWPhy9aSGHkYY7ZrVemZvm7FZP4LXvdXD8ikFKUXY",
  "key1": "3YqiohYw9j7tgWRHjwxRtCcqKNXyXUgrkjn3ZPpGUN5LqzbunD3V5kfYX9dCNTcxV6x2GNRa9SvoU18uJBQHUCN",
  "key2": "4dyeBKFW4kpF7ju2Ccr54PS15sapJh43Jsts4XoJCAHsfDY8Abrj4UjjCSAAK4zQSprxtGgkM2HJPdKDPU7f3YtB",
  "key3": "2ESdxbBrparA91WZF6ceCUiMs4p9p5zo58GMQGqYSYPNKo5ApXzEchrZ6C5ds7wcUmdt39zqXuGs5Wq9erYhvzHH",
  "key4": "skgL3KnsFiLmck4rxZpWYhPYRfyrqGmRrLJT4g2kJR56dP2LLiNtEt2D4dJSrM3aqNiizbQU43w7eCujrN5wNPZ",
  "key5": "JKqm9qbzcTWkHWHkkExVej5VMvRyexRQ2M4pUWSTw18Nyoc7ozT4csU57qz1qwk8ZhqEhbrAdj954gMwEtL5xAS",
  "key6": "2YofgtaeseJRarFHwc1rw3yPefduPdE6C6MSKCqRMtZT2Rghig8BJQpqsmMu7kFRG9SB9XnUTXeFLxsXokBHnbEZ",
  "key7": "3yENKcExGnN6DnDiPNpHWk4cGgkc9VkwsfcQWqfupgmYBUDnT4YDfWmLzN4X67CmsWjrF6zzqrc1yWrmNei5o8U8",
  "key8": "zrgP3J6QNe6S4jazdJ9UfkQoA9U2pjrpfmt1NHWFwD2v46X25G1xFeMYQk63UoKpDKHnhvejP61L9ntoSn8yCSx",
  "key9": "5k35pjQP3jjS9qdaypsUR7eKEygzgYsHFZwHedtL8UuBNexG8RQgwcmWU6HqNXu6NGd9ecBoWU1ycswo8z6tWb8f",
  "key10": "48MrFzbssYr8zZRveTbnarHggJomdQzCBc9H76mQRcWLmtZArVT4qEzaVpFuPRNMeWRXNQmR9jScUE9yhXNEhFZA",
  "key11": "3pJVCARAL55sKSbX1kWeaGPvVT6qv7GmVJCHnWnJU7qU6z6Lam1aeSqrP2ypcCEtnetvLz6N4CNpyga5uBHSvncY",
  "key12": "4VtodVn96ZShAKiRnnqXETgcFHJevYBgQjBzynerXVfnQqiHEQ2oEWE1aWzZTm5GFcjZ8ePQLrQ2NhMweLdF6mGC",
  "key13": "CcqbcMfKcMMEnk6EWhRBYj9hHULV1CPBSy9nDSJUJoSTDTAzem4pgVwyyUpE2ianBbbvTtzphFQTskgdt9AUVb4",
  "key14": "4a8CDTtRdF6BZeMCTZuEVBqMA2qgTiBNX6aJiT2y9Vbf6Me5Jk1TKhFqXr846tCEiauPDwLaBNUYwySuA1tMPXsg",
  "key15": "2PtCag66CLTTeEoRotZM3eXXCoXssLXKyKZpqJ1dj5LZPeo2MEUk6mBwMxyfu34q8WaWrnv4XADEHufGFsnb5fG5",
  "key16": "3EW2APWFyqvs5z3pUApnbQsrtfs1JeokbEZ4gbuysw2qqhNejmrMmEHthEqt7AoceXkLixwZFAAit5guYoR8M8hB",
  "key17": "2BcHmkhYfftGyS1Jo2tRNJ5NqTrNQjXE9pUhWvw4JtxdisR3VMit6fgkRyhqgyjzRELq6hXc6EPNaHrphYvn87om",
  "key18": "4jiHrHCWqXxW6TAEFCN1QHTaYfcG3nhfZPZfS6Hy8VV3V3avprTenntvc6FM1kdnvXnSoWtd6vhBqhAf1PkAoYq2",
  "key19": "31pC3YzV7LDyYizzGoobmRarAqBM9dGW1ZZyYkwjd8MKfNqzBQyJpftshbje74JociGcz2P4RfRprLpk3ScCAZGx",
  "key20": "56Qxws6Rcx5nNCQXdGvexvEWVBCzeZLYxSE55U1ogbAY4LSWFfVNzKLDQqTe2sPnRFuQPxYyowgHADeKeHmNzgCg",
  "key21": "uTxdRzeszv8zVhTcX2pEEkdKH5Cq45xjYEA3Gr68rjGBbX6atP7NLf7TiviwVpHZk8rFAmGTfwq1pPdCRTUcVbD",
  "key22": "3jsbPnKQm6L6sqUgz53St4E9XXYZHzNgS4i2RC9jqsE5NtPQTvYV2Y1ZMBeX68tV5GqcJzT3icRHQ41NTXMMSvn3",
  "key23": "tCMzS1LnYHSDcWuch9PHeb6fZdV2Trp3ASfkWJHo7YcmKe5n2JxpgPDM1aA6fzCwEyAy9HJ1QwJ5SkU9QMG8wZB",
  "key24": "4hNcvRZTc4suuLmafqUN9hQmu427qdZ5sDzTsuqf1HCGDt8kR1MLiUg2DQp76L57RSNYfWP2dPX9oreXzUrFN9yf",
  "key25": "4dBRBdo12THYoip6YGHcGh6Gx5EyrqPgB798GxkkRG3895rE7j5zor8JKBZQmTrmdALdvs8GAjXsqEtn1iPL7ohB",
  "key26": "xzS4DQfe84ToREfk7Nqc8N6y2Hn66eCBcU6a8DWEzHFPNBXisCGa7BPwkQPf71wuQ7AyDbG5QRGNNoDS9R22oC3",
  "key27": "4BvmwKoojeoGPmkV6hy3usLQWjxmPfB5AtW9dmWUtoWXEnH9Sg98JSxzB8rAHq2Cbp5p3Bxx5yY2xjLan9X25BEj",
  "key28": "3CxYAJRj3s2PXMJ6eDcnXEgyxm8DzumKC5qXtZJLhMEAqa9UC37tJAvzmddpeMhVvsrJvqh8gmnkcb9TECJA5NaN",
  "key29": "MdhtEic4yT6CqHpUhcQRxN5onmeKW898NhtXGJP2iqvUusQgo4V3RyWrQ8zSxX2ndoHXmPTQPLAP3u6nAWyRAtY",
  "key30": "2sp4TsU4z3D3WoeP55FNDUnUeUSjo3SzvuiSbgCNgzkhBPJ3LUgkToS992wQ9qa2d77Yy2ochiALFHiyEPxb1zKd",
  "key31": "5rygHrqiADwH8VYYX4d8fShVLrQVKvYPfaL2nHZSZPAHNW5jeCndc9TsAeFMH8uewbzitsZXcmYS9goQ3QfRPsf9",
  "key32": "5HwpvXYHUzF4DZDj6t27Eqw6z9FAfwsFrL9iRXYC8ru3Dc5NTuQCRUpxBsqEyqaVcZNkEons7Lo3oKMGL2zn7oRY",
  "key33": "2Gi92nnkwkq8NV1tbNEcUteFz8yvBSyW7YSipMjsUhHFZ2EcxFcdWKWapsRRy3sULNu3dtUe11iNoEfGMJ6mYwQx",
  "key34": "2V8n8hzCL1e9rGKLVCMQ8aBm1xuFBgYjYeNn27QEfRzdp6PF1AarBrWxcvr5goNEkhDVTfSbKcrzuhaXvoEso4f",
  "key35": "3enUVGNoLvRn82nRRHcBGSdQqSToUjqk57FM22kZvCQqsP6kLqSsAUxhqk1kvCmViL5aTtz4SXtXP94UGyibSUd5",
  "key36": "5nUutEtvHktVPJCFtFziYMWduJhhgq2GsKGrRWUs2ityx1cVqN9e3H1VxbfunK3tY7GgobeEr3xszaYuTKDd7ipW",
  "key37": "3XUGEFKw77DJYdr2ozDXMRm2e9N7v7i83AotvReV3EEUp4fsZ4GRo2Wv9uP8zbGowMV3TPdYHzcMsjP2UktWVHax"
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
