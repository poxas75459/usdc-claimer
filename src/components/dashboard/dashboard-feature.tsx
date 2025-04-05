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
    "4cmSVdRCor6cCc9KVxKkndDMVz93rS6wQbYQzhxVkouAKGT8dYEoNKFCqHxSGQx3iqdLB7MWAatGYPWjJ99Vbzvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiWQs6ojufZm5dJX1bJ4YATbnimgkC79fJRctNbSMdMH4zKPHptjPnVEfzikKGWZtxw9Vm6JPYGGRX2Actu4Usb",
  "key1": "4nX4R2gbofmf9kwA5sYQZTrg7FYpvwD7KCSp4YxmbKVKGo37kMozetGpjeUEpZHzmv4sQf82NfEM9q2r9g3YJZrm",
  "key2": "4bGNJCv8VXBq4jaFujEQ54Sua8eyZbPvQoT92NsLAjKogVQjrFJ5G8DycFP8GLDCKzDRyrDnnBShRmCYyitCPmy8",
  "key3": "3FnheDQrhxKmo7HqkeQpWbA26XHncY3Qo7yjjcyTpnrtBe3huoxwwc2kRNTQpWzSyrKTmQf62D8gPqD3EPVVTdLz",
  "key4": "2KW8wr9Tkqq4JoZxpdxw3b38uhVAah8CGNjWAwBe8QdMcqfpU3zw6TdxBzG2cFgVF8NsRocX5hd2kbv2mqoUPGFs",
  "key5": "aouX1e2C2knGGNbypMnQn6z5gtYeJAf3T3ZCDnjb2DXJndNg54pWiX746Ufj5PTdMkzgQ7SaCsjg4xRxiA5jJhK",
  "key6": "TiHUX3YV6p5TH8ZJYatFiT6kApqp1RyY9rD7BwjnZQj27sqe3yWzZ4xzEpxev3NJk8eCjB3f1BT2JmsmoXZq9cf",
  "key7": "5rJFutMYVMzSuErebdmxht5irKZQw8qMYkmKeigiFthBL679CsTbhQZ9KCQaAJtLPunde2F6UdH9gFbwWjSUceEc",
  "key8": "48drfS9Fqtkx7FAGYKk9nZ1kaAFNWZSojFg425tVVXEVrCsBUvPiXWPkjjgPb7TASCSWM53umy9SHexghN2w9QT",
  "key9": "VGAvmmzGwUvgAsXXzn3zzDdB7ztXX7wsCqMSRiPfR2fLgRVgwLozgmeDjY3ueKm8UM8rY8XDFRbNL7qpsmnaEYm",
  "key10": "3hzXVU5JMrYL3HBCUaL61zSsnfnQDmrJ89T8yyDfL73axUxzHy5yGC5DYZ2stwKKKop26xLr4BdJjEryfXMkLDh8",
  "key11": "2uYJnh9VGKkjVadHc6QGvic5B76PHQhC8JZHkj8PmFKLd2j1v7EJMXL8vjYLEhJxQ1ALqAurgBSPGGYxi8edGbK",
  "key12": "64n7dvNvJQVFxhL7SKg6QELonZHxJaTbXNx3m6o4tmwcpvJESAr4ZFHjka5EKs9oCDMJhmQo8J565QHtFdQCbkK",
  "key13": "34heHnAb2xeKEpJmV8L6BJNcvvqoE1jq2iczKenRPpb3HZP8N6Hp8B2gUBWKtoiYw6XvE9JBtjEAcZasUmhHSF9q",
  "key14": "2voZcfcnXeCZN8ftUz8HmWrPpwLvLtZCBAKiMe211Kat2c3KrJDzdQVZBHEAqEzmMT1XYBidS4U9fZWVU73nrVTE",
  "key15": "4EVMvFsye46wAeQ877azrQZ74mbEDF9TCELxKsUQKwHzMv3kx8KCisDFgZW7hkq5ZUYkewYVXd3Mz4Mz1q85LkJM",
  "key16": "5iJ5eDfYqD3EPdSxW8DxwKLZCThD6r4qapX61pjZWQZZteUNApGv7kuh6ng8gaduaWvJ3b7e2bho1VpecXWjC4SK",
  "key17": "5ePtqg6ZwNnrwPnV8qj4rz1rPnbrjAHLsF69C98uxBaKkgfXhuxCuM8Ex4y2uSfg1UZoFehH9zZCwrKL5y8bUeo5",
  "key18": "43UkZcbbB4xW3b4NUaXJRCRmeJuFW6ynZDTNo2Cfe92smygTS9zLZJ8JTRQX2iLMwV21XTQJrYnQsBmqsZSsBhn3",
  "key19": "37XGLsNk3Q8REdycUJbTpEVADdLtcHqS8vbX82ihKhQBDKWvJEdCW5dgvK3BRoCpD4s9JWn9EEGY8rQZjESgvPqj",
  "key20": "3BVNcXEdH9SR9fFKn5m5Uy2hnzmEC1mMJf7gUx9L54J9qTchYYP1nWZu4xj5Es9w8reEEXVATq8qxkxqxoe3WWJ8",
  "key21": "QrMiHcS8n4MYDdd9ZCmrAb3FsSQJT8GmSjH2qAnHdnsHkkrJdXuG2ZaHvBqJtT2RmvRWxXkAfKqiJPTX1Txg5TH",
  "key22": "54J2RMKGwhw1pfbCrzEMisgbkPnskeYFH1c4xLuRVJsgvngYSWAQcrybCo5tb3DQLNs5zdEZmRK4VGSKrSWJLCLD",
  "key23": "5SWBzAn5Dbpn7HvHNriEVXZCCs5sqvenrQFDT2J27Enf7R2nQ9NC6RKGNmaaxoQ7TCcYo3F8W9vNnd3E7cJe7mMZ",
  "key24": "3xB9ChtYpXfYiLnEitszn7ozJFcMC54RE22i5Ao59NdmQsWk2qbEtHND1LSDsHZHFXzkp9V8fZ4Re3v1JysJZ4f7",
  "key25": "5ZmztAicUsKmRv6HfuHKNgwyuFpFZnnG3bTmTuCsAd2Jj5jpNYWmMbrQS5JNjvTPeZCwZ2e73p4PJMA3cGFfXVmr",
  "key26": "Zr4dgCaobZrm1h3eqvZRW9bMuXPCDzsQazFp68JbSKuENAZHHxrhPd7Y277g5yaLDNok8uHTkNavP7QXxnMPdk3",
  "key27": "4EsGcA2VSBLHFNdmJjQU7zsUEkeMpwkomvwtEXMyr3gjh6Edgd9Esz8cmCi2Lz99hAuLZ5z6W1uWu5E8r7dMJmZB",
  "key28": "4y6QSYtduQVrqzdYPuaCT2GZjAJ2Ag11n6m3EeyazLCtrTvxzmcWguDxR5SBKpS57vUiHfJuRzPxELZYUXQGg6rs",
  "key29": "38wreuCXAXTeSVg9k6o5ADxvEuXC5rKGNecFBywpfdoEDooCb6zAhDGAya6ZLPsavkryuqFQjav68KXhacQ6D3K3",
  "key30": "5DHCZm7jSoLPKdkgyxxHkEEC2xmXQeHhjZaZ7oZsqcDeEb2hzyDet94HLAnLbvXwFHYMQvGjnUeWLtRPZwnNAbo1",
  "key31": "6dkKy626r5K2y9xGggSrcwdg1a9MLZvung7oQtxcwVmo4FYDZAcorY2RLSusMHsRg7mkBtdwMyTXp8bLH7oREbS",
  "key32": "23K3qhLcxp1BeN5ADU1nERLpCXM2K4M665oqM6osdYhMAwbMbb2B6eivUDPfKwrw9HWZgjVs4ELoAUfyHRDmamH3",
  "key33": "62ppz9zVoABSKzy526EnGAxcqWGwsrfEq1k3aZT9Wku8f6EoQVpPwuuD9WM2sYstNSXcCGYwHNyKSTJTy9F6LxCF",
  "key34": "4suhDCALUeVFc1MPMRmEDeChoBSBDYe9bAJVruPRcMsrqdR8LsZp2CotV8Np5zNZjsJFJuvD4v2D5Tffd9tU2FEp",
  "key35": "kQ2h89CbGBRi1PKeHiUtXhVYSM1VqNPTRG3W3YdpMQbnqpJQmEQjEmV9DyedEJTMK1NQhzHV6Z35XXqXQqBnpQG",
  "key36": "zqWmKeYCXrppN23dAqd4Sgd6hhbVRA4Cf3MGTMcDUNv53gXY7JtXZDUhAYDfWjWgnvqdUnUCNxkPhE12S22Jpyg",
  "key37": "3Z6qcELPZwtBUAFhjA1BgVwcuhM1TkkMZAMgskNtxyxmTcUbPwKQJvkso6twFyNfBSTqhzJkVuJggJzcuXopmedf",
  "key38": "AuuDPrSVcVsveytBJ5PE52DnSoYYZorH4JhVfjXGJuFE75DtDURNTdQtKWp3Z27xrMBAfTgonqvZJHF6v1ZgKak",
  "key39": "jyMpVegiGjezposhyMdxfPxrfqd1srLBa91jBMoafSwm8zw3qvzaC4xCYACPuMEFQvt4rbV83fXuLennVDEkyDy"
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
