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
    "5s52vNrGpVhnUcBkUqrZkEXTVtVq7EV6QzfC9M9r3Rc2ye4UtVXETDZ9aLFVNNBpjB9f6VEfbY6NBe3jUDaTR482"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CKXkB83uLuUPf4AtMnJMap5z6MP7tSCa2nNSLkZqVUAMeBFBHuVvZLgLU5CBVR4AwDbFj8PcPF3kaGks9vXNHK",
  "key1": "w1ocRRGZSkhbNuqZ4FWc8MQ3ioRhKw2qNwBVbJ7JXPboo76nNpFif9ik1wUSSJGVpS81dcTkL9UZ4YfuKRRXpry",
  "key2": "2X1YRF8rgoDNajRmmfk6JHBN4MVcrma3VwwffitxBVxB1D3UHzSUe9gX1woKaPJbQbHdVZWTVzErjX3ebyWhXJwh",
  "key3": "4ghMg3ubfG4Ci6SEWJEGeH3xQxzMajADoDg59gre3t9TQr7ZPod2CD6AkqsLUWUvstAd1Dc7sgxJiau7qqyFSt8a",
  "key4": "LB3ZmsNvgW4Jd9r9vB1p1XpMwYa8cJUMEGpQEoaGzi1ViGfLcj4f1B7N6QY1kFjzkpd5ZbCbYfp9LHkZwBKubf9",
  "key5": "43zaTD7mgmDcpsF6c4Q74WWRv3BdoKACYGYKp9iXgLJtwXaUtv51sUiNpK4kkXptK1z6XHi1kBzpdTf8XSN962hf",
  "key6": "5DCqjVoMwtRRhYfK2RioqJxChDtvQynrzY7hrWVg3eqrkzc8VManc2dks64tzSHwatnP4s3RyXxdMLZ9h8fbMoS7",
  "key7": "25LAq4uEwYzukwWXwWep35zcCJLWHzhPGPbr6asS4QABrvsR5kie9pGG3Fc7tcWeQqAW5h1pZWX9bqLv22kBQBTP",
  "key8": "2eVofb9XnvVAVtvoo8SwZXiS4MWrLkhUxh9PU5xd85SEtMJv6DksYrQqw8y5Njzbqr8WmZEHipBQTeqcoybZyUaq",
  "key9": "4H1DaGckc9f16ntpuGyuv9f2DXe76kXgG2zXzHuZPpcKrKHYSZVo87uoNKVGGAU4nfdD7P1DuU4ZFaTT9fWjZsEz",
  "key10": "64YmeY2p8Frmgd24oRkht2PGt8xX5nkHVCfCi7uW1hFr7iL4KFxdierbu4oTapq4WbWgcuDWvh8pgBq6RMwjMdkX",
  "key11": "4oPXv5nhMUfGdD1XWZsETga21nqh4iqHUPaEE75cxzHAnn65MYQaA3Xk27aTMxr7Q9nMg6xRD8vHGVbsmkV5WLwv",
  "key12": "2yR8gJ1VGVN4Qa5wsBHebYjzMywHK5EWMySZ8v6GEaDQrPZiwV74HyeenWfzNoGuDxYHh5aDtp5jvJFBG8XqFN3D",
  "key13": "2JmtahSjSEZudoa1uqVkVLz9V3n979Fr3a72QAi2qAtoU9178ugm28LQFaLv7go9nMZgcj9w99Ayy8EzFuXKd7qq",
  "key14": "5hquJD41APUdYKwnb1U3ksMmjU87yBgZsbDuVEsqR3b6qwjpAur762yCA2avrYpD4w1WGvRrkXgaHKLVsebnXtya",
  "key15": "5Noc9w33NgPjceAKqqJKtGPniGgrwuXKsHSkzmEFdegWsbboGf7ZDdtigKDSeXu8JQDRGFgn6Mdi14X5mHszKSQT",
  "key16": "5nwuKQpqSvzYXeXBoSzjkXbToWqKEkJAJibXRPGxzdXtLTsXNczwKPcrf266XTZPynExidG4msmUkVFdUEABgyNe",
  "key17": "5n2QNyAsGsCvwZydu8T29HzynF73ynJekzLsbFFXwShP9zwQiLQuUbXfDU5sNtjGQ2gWAiwk5SzKVrQewVPLb68x",
  "key18": "gx29sv4ZHkDPQBtEjpU9QXwts8WJsRobwFEnnkPvsotfFJRYyBRXN9aDXNsc9fxJj6CW3KTnwGu6jYikwCG1G4g",
  "key19": "5aYKK24RxxmSpdizeqMbowMuTMmm8Wn2JZopwTD9D2GdE7WpY24Uz11i824pSDwAdggoo7LfebZCaYVNUbDeU2Xv",
  "key20": "5cArbWQDnSiRxNYPP3eHZ1Es8tParh3mibDZB4swTd8bRPqZR4aHsPrembGsEKrNp4y4Nx7jjwdtFyEGjPgRLQ1M",
  "key21": "5Hendfay7SxvSqHTJosVajRp3KDCDFTwmqxvMxH5JPD9J6WdNn1SP3YpebXYzLj5L78JBrMGUynV6htFeGaHAU2r",
  "key22": "3awwGHj9rTXeQQgefGsBnbv4D4R9SaZp9WjiyXKntKmkkhWFbCTdryKYX1cV8ZQkKQpi4w8tiyFYiqw1o2uqk5Xz",
  "key23": "4kwLVUbaGhjEMnbL9NwC7XPdRy5qh7RtREMJu12uA1DzZQgmMUpDuRWvuh1xUVCq5QPoaqbDRh4GHFDfv6SHo3qU",
  "key24": "2keS8JXSQupjy4TZvH7cFWzvK54iCR75eG7jmTWC3LyqTjviaowm2Gx6yBkY9gVV8m2z5TUHP39kYBGQ8tzXkn1V",
  "key25": "5eoYm2twauLwAuVUbYhirgsYh2jBbzCaUadZicF8kP2FPTYhDUgEa1398y6Zjcw4MaYSQotyt25kbLvyjqhApp1L",
  "key26": "66W8NMFeVbdRFQbf2V4cNpDow4W3rjAqshE18z98zsaPCrWGqLTm739xUzCgeDSGZJC1EGrCKtPKCreEBR46emqx",
  "key27": "5DKu5CWQz5KNxvmtvaefZjozmxUmqZBXcHyhpa6RjUcYKvpJKYsVCuzD7QmN3HmNPqrBt91dn8uymumEVUY7ghtE",
  "key28": "4J9jdcFW7wjyzDykavpuPPYPUQTya5tGQkfDZyCARQr1EQLbfZkteQJHur4kvLdWbvEdNqEeawy2ZnmHVcQitZ2m",
  "key29": "4x78nuYaoP4sVufs3Ke3hXHU8sZYp7Y1B5xFm7GAcYTPwM9wUqjz9SodpHuaH2Gn1EZPM1gzksQ7DFDdShofCGEp",
  "key30": "63uphDdQkiKBjLLhdLM6Vehqruy9uuASjCtBXXmXQgErbVaeWtPLvpdQYpqt5YBace38ZZmyD9YDFsf7SzbE5x9x",
  "key31": "3B5FrwFR1bZFXh1EYPpyff64JJZgfTJBCtx7r2mHsSAhtHmnWX8yMmhkgv9HpNer5U6u8QxENavQvQRYTee8XhEw",
  "key32": "3bZFMfuPsCH5jPVSpYUPAYv8LQmYg4ZqANBBzxSPDHwqjZGk5qLhyvi6FeGjTBb1Kt68A76mrLkwA3TmCWm9oV3Y",
  "key33": "4hsc3srLHo7rzVbdLfErigftJ8JCYskXTkdB5ooCBR9uP1UrgutbRuKppCmvVmrbpN9P5sjeMhdNZbhzRGEn8JWk",
  "key34": "3zVTuX8A4J9RB7NK6yHGp1M3QyZ3BZYXbtKrbgZAcZHEgB97cmkkQUKGEyNsovWaQ5arFgWHhG7GMa4cwwWENt8t",
  "key35": "12YKcuHL57u7tmHqoHQqDzGCvP8Tk7u8TJbrDPSRHF3FFrU3apALJGUGvVF4PczdiwaUhm1uQN1DLnzBteCXk4L",
  "key36": "33K7ZuLb3iPBgkQ2QQPHrPjDS2hcaUtzy1CtpKKHKAqTwTZEccnSFL6y5eMJQZpqnnEL9sxjBGc4kzt6kSsK4UaF",
  "key37": "4gsKkHoNTpDfuGy7Fp1K1N4MYEoBmNF4y2f877QwC9pN8knvX5YAqcy6eHPDqRg3Sfeu4aG7yF3pGUCFhGxZcABm",
  "key38": "62gasA21z2zoBsZK7yb16r3xXnKHUZn6MrTa31jxdZDmLrWnktmpwpA3FWDKWMv4JQdb8nxtivycpX6wyyghCWZB",
  "key39": "4y2KjSAcr2i87yFTrkz2xngnNtUhQ9PUX6SUykjh38zLm5mmtVSERR48XWsdE1B9HqP6u142UMWiFN8soxncMQ91",
  "key40": "4BiXvtqvJAvYAve21XiZtMB243U9mVDZ9iLKbX1SQNWWhnXZmx4x4QgKGN4n9jC2P4BaML7MQPNRopebUFZ674VS",
  "key41": "2J1yHfYbBybDbfGARxDRrYmkkwVPeRW9bD1XLamMPBycFR2zs8sjTs8akbvsgf2NeTH6NdkxGonvahjcbg9V1DxJ",
  "key42": "3CeHqXigkVdZHfvs42Vj1dmar65oFuRmfWFDsb4GuFHHgH7eoJs4Z89wDsWd6CWQMM6oeJtSDTPyUxmUfJPuUUvW",
  "key43": "aFCFa4ophqeBqHHvPqaghJ9BSnrrwesb1jfEKHsk8dtEAMBD9m1rmwccNBLJCgyfXhRgNskoZNNUqN5E3g7Bn21",
  "key44": "4RyDfyvLLYSufoDWJTZwzzGaKoheq2Xrj5zivwjerSoUAnXXFZba5BjcEsbL9AbaNgVfAAbP2wgwKHJu4qVcTaQt",
  "key45": "3nBTnaqvCrwfrZadKB39KFeToiTPMhP3mg3YYtRTKq4ZA9yc2jwcbUA54BrADzLDyTaVUjx96MzZSLeTkjarRp3e"
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
