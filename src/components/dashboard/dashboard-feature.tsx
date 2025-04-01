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
    "4yvhJAiLUYXLF3DgVQvh6h59jg32ZXG6K4MjGTh7pCXd8GZK61Nm1xkLbmejg2ZFCY8RNagtLpBX2zjY2WzL8a9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525iSMk4TT9WHnTVVWtphgBysd4YTSFbekr7nKhmUiPGeVynrCar9hewYoNyxBW9pEnpPVFr3kH7H9HkzU4wPh4Z",
  "key1": "5WcttHiNRNwrDA97RHroJwN8ApZ4mUct9dsaPs9HLCQmTzpsD9d1n2N14GbBTnthv866mnFrQYAXT7sQu4KPuhUa",
  "key2": "3PQh2nFKYnKmpTG6dcBMSKwcTs8kKpCCHsQDjsFKferF86rY2G9kSNiWfNfmHQ2RaGd8xTrKkbp2ibZq9nDwFKqQ",
  "key3": "4KY25MkBKay7AthFkkJHay6EyRKPUbn18PEqAn4pvpRitKCdqLZBCng7mBFckGEQoedmZ1kqsK6RGwXvGGhESbJ4",
  "key4": "3AHviR9sVKbWdviEDxcoCu4PgyfeornXsrBzviETEBRuEzgCCTTXcJ4pABLgxrtUBExjLhh7CRQAZhdBgxKjgBHi",
  "key5": "ZkDPiCPWiWVzLRZ5QVSwWANstQTozaA6Emr2NKVnNfeuuTxHNSh6wG78Gzu4KefBw6CtppWv3XE7Dz9NKLG73hu",
  "key6": "kUw4Y2eT134GX7PEtY8xsYbu7jz6EVyZWp2hsHv9mEhnXcR3EHrMBxHFitCiL7WVCZ8ZiFDCwfaAPuwDSkDHsKA",
  "key7": "3erbQURTSTkbRuXcUWN4ea8asoRcSPjD91je4cZtpCgi2a1Z1PEbbdoyDE8B32uvRh6D45H9DNdk9ayxjkiUx4KT",
  "key8": "2eWu7F3PkEKeorVsJWaQsszJVuSnTEsNfVcf6wKQnX6cSeUUFKsDEZUCjdiZHrQdS4uQ7gwB13qbYsitGpm5k5nw",
  "key9": "5kEcLK6ukXUM6S2Dxy9Fs273JaNBGztSW4DpHuQDbETnUMD3VSAG9GK4rzqc7Kcgrq5KCWaKaT4KNbNPuzA4qqeJ",
  "key10": "3DXTjHhkdSNZPq48Ax5pxcFayEAKijMJ5NPCqLg5SnQuD1EopdqN7B8EqiTxd3K8RLwXFueUcp542LHayuK4qXJ1",
  "key11": "4qPCLtanLT9qBzhnm3g1kacM9942zZF83wfHr22DG4oSjcNFBknBjWQD2UGtrxjbxiG7ZRabZe4tjTrfBPZAuphR",
  "key12": "2dbdCPWDo2jhxSYNcdmyvQsHHYGsKctJkUKSjYDPTrSvmsX1Vp7VGJBjQYhaawPPsXUxRkEadwFwHaQvAeSdueFG",
  "key13": "64NdD3scMDaBtNjJwe3wupoRc5R3uyoM4tRfrUsq6j6EP2SyfQN4SxLdkNHEJmYjFYtfQDAaGsGJjAasYnis5qPb",
  "key14": "3Zm4ma6N39ZE9jL32mgpogtn25XYLXzdTqDNPCbtfmXw47hxpPeDJRUUeBWVrZx7UKE144ZG4of3eqj7o9Zo2pcs",
  "key15": "39pY1k6T9ZRr9NWHLQHvmcRwazaoexQSZZgtTKiwqxmYPYMigkigta71ib3ujzRz9D7JACUtwwZdB1r5XMHvV7Wg",
  "key16": "Hos5htEuoMayXepyVLhmagEEewtpgo9MrsDXpT6DVfD3GPTHhgc37gnTmeWARHCKDrpBD977F6v8X8Z6RKw7gzm",
  "key17": "vHrScwDtzdmrYArt6yTypJfNTmMCzDnweo3m8yJDXxK18pHNPciLjpjRBHpM7HSrr5TwYWMp9jkCmo1a1bQgaLY",
  "key18": "5QfS1AWWgLxeuSREMEVKc9AkBBA9SYP2Ksd6YB4X78gB6M8gyNhSvYXaKu7u5iVafaHEtfPkZtNJdN9AqTJT44Ts",
  "key19": "25goArgn53pwXKTQe2qDEoEhiuj3ry5stT9zCQQGcBABd2XS7psF9xqzrmYe2TFi1A25F3vffHcKDpuszyUescJ6",
  "key20": "36i42iUPHbJFUXAR4t4fkMUCuX8H3zFrwLpVW1NTm5hwCMXK4ZY2oi8rfWs9ksBn1zsQ6Qwa1TqCefz1CX6mv3u9",
  "key21": "3wF4MBE8PBmrtFYd9K4SUm1ENyiZLLDHCsiRda8ztJ6NQfMFEULkGGB41BxtHeFWbqW9f98hsBAmVCdPz72JTt8C",
  "key22": "x1NNCJZNLcdJGjAkvwxTi5pFLY5Upz3tPxCxQjDDDD8KbdKWvgG7m5BhFodUZbMRCGa92aAH8XvvtS2dWisJN9t",
  "key23": "2euyJbj6DE58KLHnFFFgrH7msMLCDPPBc3AigHdNtRi7upBZwQn3ktqCABW6cM6zdK5x7shuGBkW8Wturx8c28NJ",
  "key24": "3Cq5MydP4fDzHV2PYUYJntfNENmJZKUvHkszQXc4teVpFBkMwnsHxcV6wrLYTpr2gXyucy8z4yRcgY6Apc4h9ah6",
  "key25": "2hcMshkRNQpVst5Rd3haGqLkCp47hVhhTs7SJ8dgda5n2oQCsacGTbMoP25AQdAcFaKaPKJJ5jV1h26yGnoKHP1s",
  "key26": "5B6uj5U4iQXK5Rieh2TQbL6iST6etsQYKubyhELVyDLPGRSdxh2xvVrU9jadpbhMqXVu3HgFcRz7eCQC1EMhN6ZX",
  "key27": "ZL1YS5ijrjAFMCX6FkD1Y8qvtn1TyNgcuyNUNvZ44Zez8Cf9Wn89dAujVFaNE7r43sPFWjcrNSbmiEXFpJNwT14",
  "key28": "5SpxTd3ijcrnxA6RxKnsg6iz5eVyS6y79kscrL8LtsCEkbjZHE5yWavfDpjkF4iLardD2A28yBwvsvmrYV7S8XJs",
  "key29": "42JgB69ws23q4uWTD56Sc8M1Gg5mDxeGZ38DHZWGfjLhUviLnhBvm9i4RyhzqRVnzTBnAPrvLDv2rqpT4tLa89f6",
  "key30": "2SR1s7UQY2me6JwN8xTah3RQpd46JcMeDyJ7AsBkek8fFf4zCi7yz2pJ7qEwuP3otAhBjR6ToaMDrD5s9kMnTC9D",
  "key31": "jJtocmpQhFBW7eyY5gfkypfaUzZh4JNy3qhB5B5qF82mFq3JPPRGxa2HDJRpa8uci4fmic2RR6xhgXnbDRnit8B",
  "key32": "3dqkEYsqoazqcZmAtPv9dTaMFxQaz3GtqV2fycoCVYXWEEKDk7AdWq397PdGQTfsLxH9h2mxF6KTzoki8Vzx1JrW",
  "key33": "qyhnvDK9qMsatRVRK4r16eBJLY2GvTWsAJLzXdkAE6VWAPqj7sC9haJD7iB8mc28XMYJfYiTPXP8Q8pxkSAZjxe",
  "key34": "265op7SLST9FdUmMt5dkt8AudARTVNJd847w8Fmj2XxV4YbEBfG6PS11jJVjXu4sqYn7GMCZqPLRo7uuV6Er7pVc",
  "key35": "AyYqPpRsDFiKMjKEUzPkM71Edx8i98vbbjCCHs338VA86ZgNkZwhAqcS3r1vb5GXajmQVUtzTpZ9fK9R3Jw8ymD"
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
