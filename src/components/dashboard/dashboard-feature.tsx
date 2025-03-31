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
    "5PA7iEKdDwpkeKKwhgQy9Dqcv3uEZvemfm69iFSzRw6kNybWSuCwNtHDrcK5cNHT8pBCPn9scu588WRxWqa8YZa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anAVjfCbhQz9N59mmvt7JfUHP2TnNfrnEfULyiUAUnazPPgP8hABPegvAmfhR1fMuBFYeLHKYr2U5195obiGVDW",
  "key1": "4tnsPcRGogkUZe416fivv4TABq9dJiwf4yNXifr1Riw84PtegKc8TDPgXw9DoBBjjGA9qJdG2rBKdcb29UJRbgtc",
  "key2": "2czLK4M1qvz45He6QJsZguv34QqWNHRxSCeZWMMd1EtBFy4t5fNSfxDdspqNRAFmJzErm7RzJxZ6uUkig37KVHhf",
  "key3": "65ZmHURkbwRi7Nik7wh9DXmP352nXNtxpXDNGA5xMeanwRphmG45S1YsStpZGz6tcSMpkkKBboruB6viTfcQDspT",
  "key4": "3NtMH9P7YbsRNXMPn5Y3NckRgJDaZnMU9cH4qj72ebkeCUWuugnb3JtZYasf1Vi5zEzkvwDmHfZ6hq2yvEVAonoX",
  "key5": "2GFwxAgR7X7L6otNxmWtMdpusASkBFiNx7hWe6PRQL4HWhBzs2f1zGS3pP9VT5wu8sR29y8NoC4rFJTgBzf7YU6C",
  "key6": "4fCVfLA8eu2bNSzQyH4yrzD9z8icYVbKVmqighmVP6hpmSxz1FUzCJX6sP5JT5YW6CnwrpLGhrrTbgkytMGobBac",
  "key7": "34pvMw74n6P8kcbL93ARq1ruF1pANCvn48N4mZoEDRrsjKSN251XwzmEQEvaVz44gxhsKdAmAPZejCoP6ixGFW2j",
  "key8": "3VGWtK4Sx1ECpWPNwAT77Sp15guEWoXmRyPxHX7jE1NoVtYFhPLVzgx8LQHYctfUJcmSxu2M3Aq8Mqph6QoZLEMe",
  "key9": "49zfQjQQG1A9WRDhPvoe4KvTS3iQegMpFHk6dbLWKqvu7kzs3zHsdhPHaPjVdanhVzxLKANwW8FXXbJcaHRRoqLH",
  "key10": "355zW4gSj4DoRiHcTGbxDckC1mMWK8KseyH5wHGSJV7BLFErqkNtfLYFAz4gN1tPwtguJbjEef11Vup2UeKF7ZdE",
  "key11": "4CiY5eAyhhQbiuX3xJAjn7YhU2gRVnSSCc3iFGH4xWwDQ3zVN7fc2U9WtyXMqMvMg8SV4ULBCyDgAAz1DPPz3iY",
  "key12": "38o6hgJqUkQ2fCKX1n9F7BJYsMyqcheTJH5vsjVPzKzk3Gqt7CmKjffMvp33pKxmYB7G1SwsGbtyjKxoTeUq5gw3",
  "key13": "573f6NrPwrX3qQTwYYXaakGRZ7VUEd4jhd6g3Ax7EnNBkb7BNA25u9Wz74KysAELRb7PBKw3C2dD2Hiw25b7KSaM",
  "key14": "gbR6YoS83xCL23pCra7i8bxCUZMsw4iVKRrzPzcnyxcQ7RmMbV3Ug1qTgkXDuzXX9bZ4Thv7m3t2T7xDMr6g5wc",
  "key15": "3hj17xu1L4sY3diqmTg1hXxxb6A93nmfDKpYBFU2kPGpBs7JWhKWy7Dbz6sXUw9PCTmYX3kx2ampBMGSVFssF6D1",
  "key16": "2DDKetcikNAJVu6N47YGZeRMAoWugucbTZu3Qy7tNr2rpG3y2qUk5DGPc4EKho2tPNS6LPfCP2oe8a2ENaZm5cxk",
  "key17": "5Yvbs1HmYUX7rby6vFewCNw4fc8LDKmDtGQFkn8LfT8zgtprwVwedErmbbhPvPAS4b4iVyw268LaQy7ZEVVfqyVd",
  "key18": "WtDxjq2wRjgBihCch1Tj8G8KZryonSp22uyXqy7mcRtSXL8SpUzrpueVGkZP4MvVG7JgdDswAKoQ7JgdJt3Jw7B",
  "key19": "oou5Xg3m5U6dz7x2RoYeSfcco6rMEabpxZzcjdKHSA36zGmAvFTRgCmrQfy7zARrHSGb2cEYnHwAt871oyBgBZs",
  "key20": "5vgU7LNfEiyeoemE7bp3UyQBte5JW5e2SdEp2hsP8tN6FwUTB1Jt8rcVbVPhLMGWhmFJyQAt1w8XeHjwhU29VmAt",
  "key21": "33Hw4gsheKdGYJzxpWfpYiNCQS3Kc6cyWpbdPBCYD4vHkePhQzmvjiQUj7p4TqftVZFuP4skG6QSbJjrxmxGQgam",
  "key22": "5fyByr58RsDvg3J1mqscgTCgif6sQfvATdXUmyUBgNKXH4f7QcGqEW1M3CqGLnW7MPLPwHDxoSeL6L3sw1Q7fQEd",
  "key23": "4RMEJtj4XZgoKVDsHzG6zLbPxSWr5eKLufGDYixbDWDn6LEiTqJsYewpLuDoMMV3FbXcMuFW2J1FMoRevPWDz7Rh",
  "key24": "63VwncGueaVAHfVHBdTB9mdhCccbQWC6T7yK35eLwj3jGhWaPgK7pX4t2jhd5xau353VCBX943FCsYz1vTrJyPHa",
  "key25": "56v6e6GQp7Fw9hv23oghcAbcoSx5Ld6Zr2HgAniagMfJSUQx39vCseBPjJoYubXvSyoWMUUkiWsSf29NvP5bzWPc",
  "key26": "tYzFSMJh7opLgRG2BjbQiqvU8aAaAjW2JVSCELGV5xzQV4gRvQZjnQ87EUWbEufgikhs7GqfTWcA54XomvphVwZ",
  "key27": "5Vac8nuQM1aUUQoj2ZfuMT5Zar55m57AeCtq93EUZwKfUXnc9nSSbiww2eMvP188keAhEdHJs2WHudSQaMQLuTUJ",
  "key28": "45bq7GGubtAwpHBPrLW456zqHPQoJYkHD4uK3ycynRgrRZnx5vEKqdoBsjN8rjq5M8H9LDqaZwg1heJgUv9SURir",
  "key29": "3PKSmXWF6gEgDVt1uw3retVRB9wtzP1JCXc78bqQcSjhfFoetqxbqEQWJBoz9CKk4XgvhwDpMyf4LEYWeavUxKw",
  "key30": "5TFbsFJWz78Qwcjwubd57iC11NFSHYRLBLWeNpNSdZFcsBrjPMKo9H45Mrcb48H9MzcCtWbah4pYpaWhGXSpyCDE",
  "key31": "A7YH927eRou1yiun7DV5A6XC2pyiDZ7Zp8jHRAwmUZY4C14K7W4FeELUMDPUY9MhCvRBod1ySkmnbciZmZKTaMT",
  "key32": "zWDRxYDofQxbDwQj6E5a6h71zVutm1fBHzmsYN22aowyyd4rxSJxBBQ9DrofLq69mnphSRnFRsECeBjo5sAhfMD",
  "key33": "3VNRAjC2nDgMYLzp45nrf4tWTNZEsgPUaooTY63GLsQGtyZrHVSU5U9z6ACdovcGjAa7UAbaCTRLB2Emvmhh6ypE",
  "key34": "5GNCWss2pojy1zw74UQJjQArEBTyBR91bDUrpeb1DTwK4kfb3P5wyRECSAMUokoA1mwTJJBc2R5WD66pLLZzkNgx",
  "key35": "3qhKyFgTj2gL7XswaYhi56yTPdWqjyqshsFyuVq2Qzx5DjLqVTQnCBZ2otW5bnVybJdUGkYTuu7ug6qJWeauTEUa",
  "key36": "57qZqyXanph5jajsQ3Jcugqzdt7WnKcyuHqaWtyWCW8hosxJZugHvCRhipbfWMZLBAVFK5bkhQSpKUjp8ZXh4cvz",
  "key37": "17Fuga59KsTCgQRcWe6txY7kzfvzR8K8eBq51YN3VhhWPwynfHMzB1ENYu1PRzSCMUKcpyh22D7SoXcwFQKgxkf",
  "key38": "3p2wYshB36MUtsQGRZuU1sCkBTnkfADnfkCjd7pTUDjwtT5EzGPEjUAuPfU1waB1MnYhCBYKeTnxCCb21CcBfAZX"
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
