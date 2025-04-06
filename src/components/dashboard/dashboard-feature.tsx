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
    "3z7AcQmjpjYKEkbRcaQBLHHbycHUzDhc8nLRUU5dejSobKihKL5JpCC1F9YPYWRg269CGK4S1LmMttSocbxUra3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XJQiVwCLA25vXRnL7eEe7MsBPcthE6vZkxFB7AsHihmfbMUU5mq6pUJ9wCcFjCkCFa7n5EVgVg6RchBaurZkrw",
  "key1": "4YiKfa3ebF8zHftaBku6gdt4n3WdsAswYzz7e1UYmT2GUYh4FMjgL8ERsBymVHPiKv9ts3fM1VPThfLX7kHEJ3Hi",
  "key2": "229xqpmjkgpcMMxskvfAFZYDiChouUfgM4vtydZWQGS3nXcbCARMX2f2m6if5rvqLZZ2xF1rGQbWEhZ8qQmJ8Yso",
  "key3": "4kBYKfCLXRgfYApH6sXLLXvoevwcr7cncEGVzJRhWF5QVScyUzeJEmJmjQ6LGMmJUYyyP5EzqZUUpL2TPk1weeuy",
  "key4": "58vUbtGv2R6FrEobYznqzMQnngxC9no5WDRGBc2P419ayoR6pgnnijz4Jw5Vru6pGZfMTyMAYST9i6MX4S5F2Wx1",
  "key5": "63fdmDh8JvubtR2FjBojPiixps5i6upsD9zw4yVtShPQ5VnjBtBmtvxYQyryg2dFxRGgEuvGaZFSbave8y1CmXV9",
  "key6": "3bxLnxYAbDNFU564R4K4ei4ByUz2NzKVXZXbwAYWEtNEFLzGMKVwPpHn1La6Nh311gBw5tw8N4kkZcC1XLshdnsC",
  "key7": "EqXnhxupWsBCaqd2iLfodXnJ2XHWrdLZSeUU1QadGTREAaEyyid2tuZ7VAdbDEzYkFofPbd2y2KRm4h2BgdoX6R",
  "key8": "2bZnAwtj1jbfaNifbcWrheR2vRbduGdzv54pU5LYM1FqgAZSLdThDDEE9Te1tTPJk7G55AoQLavmnUn7z5emvFU4",
  "key9": "4Fd1zZctihTHsKS63QtTpA9KW6msg6ctLBciPwirFkmZTK8abmaiSBDTRaA6HDpZP2o1ReN4EoUjUiR1vgrhhLzr",
  "key10": "2ARsLEJjpjtpAaBU4eMyBYarr28BT7tVytgMdhTTqEK9bZWEHLCFvzsmefwPQY153nYr8F6hYc33KZ6oRpXbF6P3",
  "key11": "bpstJVyEmrWPF6sB2gektS7Cd4kmcSc7wmsLcuTWKf6spCYaXZHQLDqAnb4NXZ9XF8nFf8CGRWCS4uGUzUaBRE8",
  "key12": "Eu6XozhFTy6wTr3oXqwFkbyHcNUrbKVv3VsC12AWULYP8sqo7pqTrc8YUPEDzCrSNSe7wE9crSkraJV8ruBFaSj",
  "key13": "3tdg3NSfpsCLkqc1Ejc2Q3XWSoz13o9kCfVWXGMcYf68ywCYCX2nTtP5a8895pz2s7ZTFVuDKPD8wuQXY6fywk9G",
  "key14": "5x4GrZtyXrD1E58D1DFefyaF7veb2J7PtfvkJwDRrjQ1J9Y4P2hWqGPLSb8KaAnhnPe5yn43rUmtpSScUJg8MXBb",
  "key15": "573jHnaoT8WHdZmqu6nr2VBLS93FBfr5jtZAqHjjuKrAwmceYGP9qe5B8U3MGkKAMZYFDijLx8jj5crw3n5UTXLF",
  "key16": "57ZKDx585zuahqn7QmmBVVBEwrGifsiat4QxKsMsHHzby7rfgqiYDbeKFxFstMHBu9J44zhqXd4zcrRtWucquH1R",
  "key17": "4PaCko2eMpd3P1KL46EomgstSZMNaYHJ1fyJjja5LFd4L2XBGY6rRs3wRhTpd654bHn6FkCSrqgzCyditd6cYH7x",
  "key18": "277FUz8gi38tYY1pTKFZy3TcntKWzMR43BNHvfyKcmDET5DHgUT7Ecf64TMNme6cshWrH1C63VT6Dc95nx1gWeWb",
  "key19": "2U5qrC3Zq1PW4jhqFgPKSUBGnmRwavtNSeoHztHYQunb1LeRqb67FFUomY6R42GkVJaQ86cWKwy6gw8yYbu421pm",
  "key20": "5CMJxHWp7qUS9kYsqmoS9yhfkDjuvcaFzucJH1T2Wrpapk4JV2bcffekv4txD1RfbkRUqk1mFdmQm4sDNkXFsts",
  "key21": "2HXymZs5h1yyrLa6n8wzvuyjCiUGDgyVDotuSreqgmdx2jxSGYQYJB6nqQn78Qq14tsyNBGhCFRgTFD3t5zh4Xoy",
  "key22": "MaL6QoZQDtEHXB4QQQKjkxcvNrLgjNboKHw7a8d23QWL6c6Kq4mBvZpF2Q8BrSHJk59FN7aFu5ai2dc5L2WVkw7",
  "key23": "323rBSt29PhW4771JyiLHQcg7inH4ZqBJa914ko9L25amDENG52rRy9ZLWrKKAgxTY8Fg6hDGf3AvbM5S8Li4RWz",
  "key24": "3jenczUDkCJDcThQMuRJtQSuAUyL6HRMA1wdysgNoS346Cs2xgfwEx12ijAfUuap7Go2mCa8uNmDXeQTdQmHirtg"
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
