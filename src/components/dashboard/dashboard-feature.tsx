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
    "2UPcFiPbsDsgGRyTVi7SmNpQMwmb6BENaGQE1eXDZ8VAczdJBGjn5ELSnuJSaEXbgXoiL5oLwF6LwPxzBB4zEdnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBWwSBC5MJhorhCiKpy8CvDAq5X9YWPmzfio3cvW2ytsDxb5nCmo3BU2HkwkQDZjMfDhd3eTKEbUKW3qMJFoEn3",
  "key1": "5xREjpV2Wt6kzS3BfteDJLbYzxPjL5maiFasBPy3VCjo63ZdYShSDMSDxquzhbLF2x9QVMyhyKtZZsX1JaXc73D9",
  "key2": "56xSVgSh1qFJWtM6MzjfM4dcWK18f3rheEnnzPVAVGkFjxazLLodXuWcV4fZtUxCjCdQTcPnaZbP5GgtTFNhkBUC",
  "key3": "39tYW6S4gL7y8sBxbdMYZjLJgxVriDVnc32g1yr4jTJGDnBi8CvF9ZJLQKg93NyUtcPMpsQco1PsVjMHdsMsXDbz",
  "key4": "4BtimdRZmWB89ASQkMnV7KsX96jKBRVVyawApAKBvBwRE2KDDZgT9pdFCfCW156geaNT3BvwVwBR5GWKTqTuLTz2",
  "key5": "65pr16ioTygzPthP7ysXRZKzg9TjhUo3n4dXpUYXJ8C8d547wiuADHiQYZtEiGAwC4ZBXyX2Nkzhx2Q7oFeKFoDR",
  "key6": "2HQF5dA5q2He8W3sFySJNRaLmtpVPzFna3UC52nuj52CuFM9Nk5iU6fWi3VNaobigUYS1vgQ7kfQeQe4jsX9zEui",
  "key7": "2eiF1YrHwNR3xonm7zfiUHkeiam88ZhSCB5gTqqGpDuQRM1ecY6c8v4m3F4xvJiET8aSPee16puVXsRE8n8nScTa",
  "key8": "5QAWjZYKX73omatUm4SboGqkpm4JAz8RGdL2UZqGABZzSFVVDLWAE3hCkhz1ddStKXNGPjnhVttkTWuvK3bKc5y7",
  "key9": "Y6LWhCnk41kRuhGVTVUMsjzxPG5Ko9VPSxhPkZciptcr171PBjKdeQzx4trCBsdYVLsuxd2bBq5QtHqGTUo7jiA",
  "key10": "na6cDpp6NLXxK6ws7Bt7mRWPJsQ46ohkvq5t9tXA9h9S9Yg8HBvN9NwWJA1V6t5MwcUBUGTZqkJUVD6y6EcfjnN",
  "key11": "4abMYDuUKsb1vGTHozjCpt5GmVqNtfcCQDoyTtZ3GNZNW5qkeShUNvtzu3bJTYwv9k6XYVXDss1jrTCFdeA62WGT",
  "key12": "BWRDLQihTARPgjAYnPQRXt6zs1YQzQjLMhUFpKGWxvuiHMeZF9yYrC2ddnrCd7YezYebFJfx9PwizQn9H4pNuJn",
  "key13": "3vY5d8HCWvQXvSashJ1yF23ZgfwyNsLzrY1zwaCTqCsscxvbV3CQvMs19u78ymadmPAgcwxifmGFzBZZsHA9e8MJ",
  "key14": "2hVpqznfJmWnGXL5D7Auu66kpbbe3adiHoUL7iDwVbRrmVY47pTK5s5h3YqE54CTG2ASvAkbSRepdYuqVSwHQkWv",
  "key15": "uroPDm2whVbkPAoin9JzRDfrZKjw7scYNP3cQzBh8BhQpJ4fA5WaS6QzzvVabbjDWQ4NB1bAXp9aw7y2Bg9ipfX",
  "key16": "3nSC8Z6RfdFNxPMQhbJBicS2wYSC4kQFdoQ8xjFxQDL7wqUwopXA8xFpG72hL5nBkKxKSYEqLDRURzpNZYDWDHXv",
  "key17": "3YHEhVUEgKZ3cLnAmYcpZTwRaGmxDK3MXekignzCEPCzwAazweo6ABz9MjNSx5BrUcyBFfB7Cw1JT62q3HeNi3kR",
  "key18": "4rWSkBje27FtT8j58in6o5PRC7XhAWVMpTRFxfSvPrt4h22GAFJvtuQZHwkBK3fziEVufCge9cyK5RARZ123o4fz",
  "key19": "4zSjMDSXRfXKzx4AaKG5sovwHKgqkLNocc1DtVJBQmK6HjDkK3LsjgA7ZgETZAeCJSnkDBEHLtUTW1eKJ9zbmgGe",
  "key20": "K6XMfG3RXZhrYVi2PodNRFxrLZcig59y3R9MgmaxQLhvX7xkqwqEStX8qGdngm8pZ3AnjbwFBF6mrHK2zNJ9xQm",
  "key21": "fkMvA39izywMQ1v1y6mDqUA2pYyhfeuz9dBGvwN9uRJEnzp5wjn1ucPRWkMrT35Z5zJThRa7r3jh2rgVhwEQsJW",
  "key22": "2m8FUzjKsrnrdqxgke7f6XuYe5GcCxDGth3XrEEd4WKBxQ9JuMaNXS4a9w3AsQYHYU5urvFYexnfD31c1VZ9uE6B",
  "key23": "5kuiRo4Hx9m8no852NJKKfmssLtp19CREYrnPFtto2zeNndY6wWXoCWNrFxKCqEnzRaWpDAuiRnSisgWuqLLGFg8",
  "key24": "4iKMSCTRfbLRtSEsseHgoEqBRuyfwB6oySaG6BMne1zcf2dwTHsjWozGiFw29pE1CimqzT1giPztKnJDeHFhKtYP",
  "key25": "3nDm93wzCNvjumH6fC8ogNr8FrQegFAf6UHpXqd5AaeibphDHYwNZy71Zb2BPxQRX1mBjStpJ7JEprW5D9GxwVe2",
  "key26": "5T4W4jHeMGoBE38oV6tKVhHCN868i2BmGCbknUVws1Ks95UV9uf3ThPpiqQkP27QHsFpqc1NeyANXvgEbYCEUmb3",
  "key27": "33yckWKn5KwWkTrRVzv16tBjUquwmJxTkTrpuD4VzMTHikjWZot4xDAJ1rwcyrVTEnKrrc6Wnm4Gxx9QeXBjS6aG",
  "key28": "5fAXiUZHA5kYzYJvE1h1BFWvEEmeqBEdrfEcGurzTxfbbTEeJ6ZPE1TLqdumgq9TjgrKaeeq22fpNQx6a58BV4Zx",
  "key29": "4LEJARpC8eYvVzZYSDwwiMNgUe6hoqg2fTpK9dp74xH91AYZ9sD5kb32QGmkr5JFN5qCJvpCFt4ifsnbjjSvuWqE",
  "key30": "2JyxL4QbLL34n7RyxJkK9aY1kmV1ZFFneLS98Psusau3w5cALNtNXeAmzteskzNce2RYNC8yzSiB8rYMuwzKKhie",
  "key31": "QJ6isMq6yFTQBFsrSTBMu1xAE4cA9L4YvjdHEzWYaYgSGmhafDmsQYZ8RAJpYX46DndoCDrGBvwFBeFVjHScU1L",
  "key32": "5eE3D1QqmEnZvfQ8hCqL7LXmjGD4ndbx4pFLXMKtHA6NcYL8jrY3fNS8wnnBS1XZ9D3puoPXMC1qzBfQTrF1QHZA",
  "key33": "3oCUhVJXWhse81KXnUKw1XksJLAJ81f8fUNjB97iEYpxNji3fuHibkyt4kGn8aU7bBWTZ8ernQTCgHEnGhUqAe74",
  "key34": "SS5m8Aq9rKsScx3UPLUXzzRW4HFdXuu9Tf6bLtuVDYjMKW7wGwD6fp7rb1inAL1ZcdQQRDqUR6ddTjVwjrY38gv",
  "key35": "3ssD8s8uZRtjofo4ayqE8ZXzTyJXRgnEYQFkdgeydCs3F9y25e89sQUAXyt5tSUsrYfwmmLr43HJrieyfiT7qa1i",
  "key36": "3QvkDBiZSiLN4VrHi52vtWCnQ5H3kBwEE5hXaEZhfzzjhZuv7VpGdBq8UFobcib4oqxN1ahVSsQYH31mi3M2jJYd",
  "key37": "3R5CFMPGtWswLsRq3GHtHCfELYhx9ynyxTF2VJdnqjrSLnMB2rf5rVNk3NVo8FP6ePWJv9r9L5e9sqmbE4ACYdDU",
  "key38": "3eXbbPbGaW4HJc4S2QNfPrVREHLyjeekJ5U6mf6mkazVquQyc8fhTAkCbfoAMRqfeh5HTDy8kDyS5rmtdkpp1EkZ",
  "key39": "BbD1AT3dBAw3vBX2gRQTuazMMjwF4y95QGEEwdqwXGgun6aNiTGbJfdcx5W5LiNEwDyzzbzUDvGfamoYSLALCRV",
  "key40": "4icNiA4RsfFBRyC74hD5EfXM1UoswB4mdGyMrKyp7RSsz9Nx8Lt2H2Q1veUe7ZM3kr7sRBKNLyb5GEEK5SHxGihg",
  "key41": "fTm61mNdZwCWXticVE59TuQX57NsxnhQx8ivVe2n3k8KYP16SdnGCb68t2er4EGUicr2WHCTtFBc7sBiE8UBW6j",
  "key42": "3CrSvFXhiwV2mPUyqBgo7x41n1RrmPxNoZqxom8BwZHURckBGz7qpEYPuqk4PEjaFV1Mw64yjSCTJ5yn7acztjxt",
  "key43": "3aEdg7NJGtYQytcp9vWxpLJuUtv9imFMQjR1RMBuWBukRU2qBp4JmRUrN1bm1vmSoYqVf6zkLsa3HVQFL5L1bieK"
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
