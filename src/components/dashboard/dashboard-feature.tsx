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
    "4MLgnbpUoFFbZLLEkCvvLiigrvMB42qZfqQHD42XzHySZWbfboTQ6BKk4CGABjBxNBReRuobJuRiFSZsUpLsvB6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzXhFhLt5DNxN6ZNNUzcSpDQPgj4GJ6RiU3mZq2Z7soSRLy8mTyP9QLKzx5Fg94yR214TahU21tkdP6yM52RV5r",
  "key1": "23yi6r551ASAp8DqEwu5fcDKiFPqcS1eF8z7SyRikFs7mh9yh6Q1xXcfnREEnP7YJarhVXA2WNcymV3UQW3fcjGm",
  "key2": "5TYpXSzVqzJSjHYNRZdczPFW3ks3rgicCKs9CERwhBLH165Ab21EGnq5w1eMTSkdsqrzDmjinBEF6MpUpJkQQY4P",
  "key3": "3GgNP5g88Gtk16okbgFCZXpHwdFn98HiZRXg7YoaMEGrkbgykSAie3JE1VxYsTif99Yri93ErZegcxouZzFGfTiN",
  "key4": "FBAD7vi5m7xitoTKDaVdt6NHkiWxzDZ1RfpZye9ERpTCzz7eiVHG2vKuGAzZFum5UdLbmWaRiwxcYWQ8jcm2ipN",
  "key5": "4amNgevmd3jVHYHuYB2V6Y2NFadAzm8DonJ5N4XmkqKm2wVjs9fZgbQobECYLx4pjsgBAY5b2uiRArdyX3bsGBr4",
  "key6": "5KJZv5yBLQ6HHRhjL6qkzdyUchbaPfCVujic2EwnbBDus7CSKM4cx3gLm74AUzU4moiPgwzPVR1S7yXjmZHwsFqt",
  "key7": "2LawGM5akR2UPFB8Fv1sMj2YBP1KXXgcNvAR4tcTH9dckMx7F5FgoomopVXs2MDPuLNCyQLNedFiXcvufbJQhq1z",
  "key8": "fqc7jVrqUD79U25HM6cxanvEgQYxjdMeU97NCN8nEzvpgsLBuSxeVA9Wz6Pq7fasfQHfEiU8pxEvCa24FArmUSo",
  "key9": "2RYWhNzGKrmR6gBobvvCtfAQjd5yBsHUro17tpJkPZNmrzNAT7ngAiinu7ASK6ewtiGnGPAQTW3C561aefy71aBe",
  "key10": "33DBwEC2wYN8QPxLDbTavMVD2P1TXhNLWRrfBDERNcJJxZwSDt229gnnza9QELJ9W8kX8F8T3bLfU7XPeeSrdEbF",
  "key11": "UULpPMtxVCoXMDJrZBaf1TXK6D58H6jXRV4fZswcz56QdpC1GcZHL7RQrzFUMV6EaceKiURQyYZTwYexxK92EFg",
  "key12": "52jZxZ2gDUvToN7J4n4eNzr21iir1TQRY4oXapWCe2YnYjTdEtAubeRtz4EqJx1KMpzRpUk5wZsHAULXPZMEA5Am",
  "key13": "5VwY1YZT6erhJwJCQbAcnihBjhsTELcF6PHXoiYf1SwXgmASnkvckVdJhL3EoyLZGipiYSTU5bSVtQXmM331RB5p",
  "key14": "D4UKiJxNo3MPPP2kWbpCWBceVVVKiazwUbFhbUvw5McsUMEQNtnCAvyijMdWCFNwoyFZnyAdqYye49QKS2yLpKF",
  "key15": "4jaLU7KcpVZCKVCtoXeCx5R1ULF31Fupfy62C8k6bYcGiaQntJ6JzdFsJhUbsNgFDa83jiWvZMq4yBw47nN1xvhp",
  "key16": "5AhSWci9tprWuKkk4nMJtASVsgCeqsVnZD12hHc7Gt9379P8BsWBNedZN25ph4PZgCFTRamu6tH7P9h46ZYF1FW2",
  "key17": "2iM6b7k5AuAhWbmUu3po64d8qxkrJJPmi6hGHX7619e7m5xynyaCGnz7zQ3CixMszq5NE1vgqzYL38N3VS5fZMKY",
  "key18": "5o41YC1YCfnEZpcHSSArKA7Yp7Lsj5Qs3yBEgj5PGuNQYTUuGRthhtw1ghwnw42iTUvuQDMCYLPWoa4L9rdKmXXe",
  "key19": "2Fi9vdewsH4db9827yRGTJ55hWpFD4QH5E1tHNzooe5qKMhevigAcM5QQ7uN6Cku9UCV8aq5ExcxbsfJxdBGNsLf",
  "key20": "22WgNUpYr1cttmS2RaArc1Q5tbyq2tHhRE9wkprM5d2SySSrNa8bxHrdhb4nYH568Xr9a5NaC3KKwFboHHHUzgSC",
  "key21": "4oEgF1YUpgAb99t7GotzetTdPReZppJbjaX6wg3YtZxH9TnTEvmUQGznpyStydjtGCSBjhJVn5zCof1LzFzBoNc6",
  "key22": "2gA6AgJQKuGumUX8cBD1LoKtJxuxzrNmFy7kVuqKJAUHdKxtpHePcBq48JdMCPCRtHe5KtbsPe9nbcGKqeU5dPW1",
  "key23": "5FEgKucf59vAWsY4npMddBcfQZNN3THwFhDg6FBXpBs2n2aoxtyuL72TmUSD6XCXhxRCPANRNhw8ZczXqi5R3HSH",
  "key24": "27ZDvgczWJGAAZcUtkqYAvhMBHKxc8CYQd4wAjCJ8uweZMVHNFEDhFpaArAwqemyJ2LeVZY2nenP1opAiV7UKhxE",
  "key25": "2B1ZiqETcWNfUzHerfGPnJLC8bqRtZBCM9ywFRs82BWijdqghcqPGMXF3bqsi2tjXMnvppa6uPVC1jSnsUU7ChQa",
  "key26": "3wPN6a3PTRv1UimDJUXhCzcQMtStyZZTS1HMHZATKJKh5jRuzy9oQ6uvqRfBTiLN7dW9X67Net4h4rBB31bN4jGG",
  "key27": "4dVdvo1dZ5pxKEwSa9didqRukXXnWeSzhnonEZG4nX3kskuJLUpr93PphcKL8pQE5icppi5keSbgetPhKHWwxnq2",
  "key28": "4ExTbgLBukcZ8roumhyo8CpihAEy4JR91fdvGGE8fiJMdFZWUKTCEFgdgcknYQtKE2WSPkGsUsJPu7FhQg81tAji",
  "key29": "3EeRkz3NYFb2EZn4EBXitoxPVCEXQiwg9jNaKi4ryiGGHyNQmLZhixNs5nxr43F4EhoukTVDXngfh9FcWht4Zv7X",
  "key30": "4gsi4pTRgaPPtDYusk26dZm9nkWgUB7M3vKagvKvahjdmuPjmyFTtACNjtqEyC7kC79W5VahNMsic9obLzLyLaLu",
  "key31": "39bM2Qwys8DfLV6oSB3MQDXNc1vpEyCNVTzVaXE5GQyNdd9VTZHnHp5SQjS8duujkK1SMSiyJzqVCEgxvf4oFGK6",
  "key32": "33bSfdVZgzBfnC7jouecJ9MKWCwAHCi8znRkxVarJFgUBQUqSQZ88aReRagv5H2jDGufx7NgC2QCF9BpoDMt3k2E"
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
