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
    "3sQfXAwNS9geQUbc2Q62EEvDQqd8NhKgjhN7xrJ2nbE8SHqmCmWm3LcDmsGR7zkb3xZMEweeUZ68BNrMVFBN5D67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9Z2SLmQcVdtXGTp2maCXSvypY8oCotTg7dx943AvfETijDmg4Ehvyz4SaK1QznCiTE6k83fsjEcfDqZZYLFC9p",
  "key1": "4iW6JzXqKJDzCTMZuPxzMdnTPbMLSoa22EgqK7bx2zR7h6UCVWZzHtMh5HTvihRcfYNRDnzXeWimcUAAm7hZKsL8",
  "key2": "42fHt8EVXDUwY9CAicijp5YLx6i82XPb2KmMuMSmoMq16NLm7q1GjauS2oTWu8j3Ntux2XMVFWMAr2gy6zjsceTY",
  "key3": "3u9AMPpqezAardstHPx14VUPb9VgtcjDbSxSrYaKH7pziE969dgKZQxpTe3Qs4Qz9oWvwVWdsWEGP9hWz5QmJw5Q",
  "key4": "3EpXMEAeFTUAQaDBkaZpg7rKkatArjDHnaDKF4xFnyaEcHSqJwxqyVjdBjNMaAisoucVLTQcctGR67KELbuq4Sea",
  "key5": "3pqT6wEqCpJeREhWKnvHYgyQqBp6AHECBmb5LVgcjXdVkbH9rnPzPxwWuUzdo8unJgmC3FAkf5cD4ZvMZmz7o6jf",
  "key6": "5Vx8zGr12k9jaQA6dxPGYDyayUX7YQFZ2L5ZVp4mZsZRuH1RC7KstLHkC1BxnJTQVVKuqqwRF6K8UNNS16JnDQBn",
  "key7": "36Y1jEhURWASdRACJNLxqvvTPBWzYzdBgVsX2rcyeMctCgiPu1JPzAbvf5dMnT96o9hUQFqmrvvq84rYFXUmKWGS",
  "key8": "585NH1J7Qmsj3NpMLRnAkC4GkreA9f2wkscR1Qw2crS6QzShrzqr9yNKbHFosF4Y33wgyjBGFyVW28WKYtEbiUbT",
  "key9": "2TDdZhTkg4daZyaQbx7VpFnJwwcNxf63P9yxreoihcxzHLXycPJVU1SXhk1LpCCKjCSbrqjWCLjHgH4UX7kUKmGN",
  "key10": "2L8S4wBDj4gRiYAjcfuSf9bEf2qPcWWkT996sW7MbKwYYWkTCvLx6yPTJT64mpT18PhWXnPJuc576MD7D7gnMR6v",
  "key11": "rbRD3Rvf6JNhsy8AE69o7wrvWTG8vhkteDZuEhDea8UR1GBdPT3wJbyoqwbCgoZ7izTAEeCFniCh1ZvXTFfq7fy",
  "key12": "qRu95ByCvGgjNwTxzfY5m8DxmrBm27xiCntSDQbzYtLEFpuHugWCnwUQ3iJK5bg4upShbn66gBXMjHTb4ZiG5u1",
  "key13": "5oQLDjNzoidE4ipGQnBaiGJ1AhZJZiKwbxAJrMraQJAf6M5yMjHub9SSQcWuAwMv15Z8wH13W5x7pUnmPqLeg58B",
  "key14": "56iGSMuxULzyM6Q4GPxupzYF1ZzeKCNWtcZV8zp5A6F21CQsHArFg2JAgY9gofsv2kFAnuu3pgYa8d4Vti1Fh6zp",
  "key15": "2zKPK1gqPMPrGVbfZtDVcSpHuHhzx2n4skEqmMW3RK9rrRX4QG9FxEjH75P3KWtFe44xVas1rCJizfUmdPFQxWWf",
  "key16": "3TMB7J3Yg3ND8mg2iHnD2p7Vmk56FCgh4bkyqETRJGcNh7N6d9ZVX5gYmU3vtpGGi6pcHaDoPk3VSb4nk8F3oWzE",
  "key17": "4WyE3BEziwuaUNU4CsfLGKxbs6ruE3DjcpxhXHDB4fB25eVZ4p3qBWZzemGuqZPPRg4gzt7wak8eRuF3cCdmtGRN",
  "key18": "GEEyHV2pSfyHfHyXuMKBRRjGERLvDUdYoT88v5SAN5bFnXdikKKoMxc7oamg5KoXw9DFhKMUZrPKYwreMMWqziC",
  "key19": "3W9PystZ94zFp7pUagRhkUPx34w4Ch5eC6pdFzLfLfhKQoCGi6toQa6Wxd642a2jddoqv9GP4DBvLQZNB2fCSQMG",
  "key20": "3cen3g4bftZPVam7fR7JtGz69Qf52cjHs4pFDF7YW4gUXBnmGvt5joz4ELVrvnLPvF33LCTaeUPRRZvtN6veHthE",
  "key21": "z13cHvsmwrTpTjYiPWHEeSPvMFYuK7UqrSLvHL22ivMi11QgWzSu2asbkLhZqHkdTjTJv9EHjm9zHJUkWNT3BYw",
  "key22": "2inVB8cqpSxoS6jqsoDdCJpNxrSXss4JyvJ2TuunP7nMt5hwSNpJNYZ2HwGSjt9zWdae6PLK1TtpMoMKmvMVGhU1",
  "key23": "38fFtnCcE7QjqiafZxo6dWEqbhdpB3xya4keQP5imDGs3qza3X2P1jkj6GnB4qhAdDBFjDPAo7Uc3vR29rtHRNWv",
  "key24": "FAaaUEMjaBjHVvYYAC3Y1Cv7UKAdhQdbcLKjZyqMtaYtSmbnq9NKUH7YBgiyeCDxiAEENyXLd5L6wt6UV3nicbs",
  "key25": "5UJ1te9sH8K5nGpdgadbvvbmw7vSyBFiZQ44wxbCRas8xsxLGodLjeDcA3trqothY7Cf8HVdcRy7FiFKqs9iTcs",
  "key26": "3ErBhW3ycPKdn6jCtbGjcEVBMe6xFNY83ahxrvJXiBgFVK95yB26MyxdZb8bDJDFd6x3xzh9SxjA2eY7wCD2CPem",
  "key27": "5FGSybK9LC2SW8dJJfBW557oGbLpZ3BWzw9xbLg5vAw4QmXxWzYcmPrkcphvTHNNcUK6xnbkyeUg9usGFXLXiDBe",
  "key28": "3L6uuNZPY6keMPZha8DuencZBE69o5nrHkzZFDWTZQkADJgNiHR3PVuoHuEmnXx3MjjDFn8S1G7mBXtJuF4Sg1ge",
  "key29": "2noYCQ5kh2cV6kTaHg3MBgeiW7ZiKDtK6NN665S3xLE2jf9HdyEoJcJtsSnST1yMg8ybxjCNf4kV97jb4FpomUUn",
  "key30": "5ytooMs8qcR8g1r5Et5QtGovtJuye7jBtsM9TWCSYvcXqXVsu2g65KqV2mdYnFMGUSSXVYSJfLLeqaLrF64sC1pT",
  "key31": "3WWA1kFwNcP3b2DUR229qRF79BfN9vijo5tS4LWJwoyNxuNqTqMKRewYyH38tdm4qgvtKCWdmMdmt1btfWavp6rG",
  "key32": "2CxipHNzYWLhSZ1pVecyuUKQzWH1FFqPVaH8sfczf3E6GScyZzx81vhbeYh4FwcH78GbfGD9Btm1ZYtijQgLtiji",
  "key33": "3TbV49TCsxkkPqYVq79j8k7TkHsDdjm74u98uNYfJR4C6z4bX4YHsa9nbkotQ7SrFm3fdFnjmrkvxh4YBQMdJt3Z",
  "key34": "5q7vq4jwgoDUmeWpZ42aAPdMEDGs2rseodTZDU8fgXFLsMUk1M9sqxxxoEz2ty3fLeLcDW94MyYzwAaQAgueie5E"
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
