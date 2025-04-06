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
    "6Tmzv9MsUMemjsKsQjeqNMKpyZzCAx8KH3wJXmgUT1hqTd9FB3ncznpfgWDKgMbeuQnR8mYUAnDi1H2WYAYZ23S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8UvM65nbumM3VqhQKUSjMyB65rJedPnkp8xK2MtcqhXLD8TurE3gJKTvaJY6YKLgXbaYZvTj4pMuZsnohkKHnd",
  "key1": "51AxNReHcwDrpy8sZCqVeXZh5cdhog2pWekDPLTaxX4negWr5wt21fbkLbmNNA66GYtQxxeauLNhddUZxGgVFXXG",
  "key2": "3gDSTdQvGbD2oyKixjLndKefwqKLgLuRwndPyqys86181tk9NArywWWUsbZm9PbNfDTP3LSW9avxbKuCdpn52NgY",
  "key3": "53kAWzMs7a9vfqyqHo2XGzw9qTkb9PTv3Gy8wexKDhRQYxLXrEoqFiNppqKqWHcybqcEaCML3tV1i3WhDQ8nJW74",
  "key4": "3TauVEfpfqGNw7aL8bNoQts6MZ9USYgPMfjpcwQ3eB9x9UBFEthPYUfGBoiv2oQejh9F81XfZKF1bT3UXDU8gpuS",
  "key5": "21W9SKhKvMkahPjuLU7X5c1isBpjemKw3BRkaXQePNKwLyzNmfirVquZtnyfYjS6xQhZc7gNwxh2X7mR2ughCQYM",
  "key6": "4FTJePsjck3YW2GUQLxoKqrkQm2ma7YV46jMUdG7tcdD126WoXiPJGojo8V39cNZ8kX1XfLBgtR7xp78LyzSA2kx",
  "key7": "479goDPjsW1Nzu38jEbYQZ2K3GqW4oe7hqiY6kBhDfVkt4YdRK2kW4ytw2rpPqMUMXxngrHufHwjAZbeMfaZv3YU",
  "key8": "4fAyKBhD6AogJhBCeBWisshTgXtdd1zqchtD5hCSrMHnwA1K5KGvEVVyD4PovuoLXKGszit647Gpo4aP7R3mpUmy",
  "key9": "3iwVioGKyAKv5E1ERFM2dgkJWFh89PUxeW2pJkjmLzDk1SPFqNs5m7yeQCcsEKsWH4XaonssdEVwFiwQjaZA7wVZ",
  "key10": "2SoM6wyd3ZHv4VVbqASDszKkf8g1iEFY7d3RPn7c1txPyEJuGMV8ZuT8BatVVNEEbBLR2u8PFHewzqhrTGoR6eNb",
  "key11": "4dptSYAidEDCGuct3rTCazo7M4nxqQguv9s4uv5DC3K6AHy2xiY5WJbxKNXQM8LG2GjUiEAH5BEj712obUK4sEWs",
  "key12": "3fkm19m47VqZP6aUDSUaq3LkCVT8dobzRWstGPgBj9xS8nsCMwfFoYq1pPVXiJ1RYwaRjD5ZrH1ML4mL5yyGrYAp",
  "key13": "3rCKYKkZ6SKTtZ3Pvtba7yqUUwHTe1Z1KQzthAJ5JnWNvUnxVta79Doc5vmatXhmoLmpWywHBtGHEPvzkCLKcV4P",
  "key14": "2CC1f6XJhRdpVF4Q9znpfvgFqnWKX1VU2NXYmHWG5kJfZuZNzTAU8kUhtMnw2z3gPho71voBeXSvd2MaGEtPVQUk",
  "key15": "BkntYJxotAZuSMYDdJMhuUcX5mw8oV4p8XgyNFuqWhJtM4BRKTK83kErxw4QgLe6ULJLiwoPn6hV7n5WfaKiomE",
  "key16": "4RNvkm2TsQQf6CNMyNouwtzYZRYTvASNxKGRmyT3wKho6EANAFuCDud3wkwmUobvKD1ffFMUEqDBRaqSwWrUdyPo",
  "key17": "5xrrsJZzA1PdEh8oGgpNtZ8VX5GWZN5fe8mwMtYoioyBJyds3dmuqe43WGYg9eSA6W4D8i21dLQS1bNmziDM7sPQ",
  "key18": "5L5BeF9wT3g3pjTAvde39Ke3RATFm5PEergNrvMJAxxM7LR9oxjbT2F8ChLBtFsrNSikrDq2nDPMz7Gveemrfiv9",
  "key19": "3Geb7MnPxD9e881XZjh11vCqwj73g7Euky52VD9UeHhTZSE1ynuQDcV4qKdrT54Mng7YG6878bexH6o2gyxLgZn5",
  "key20": "5yd3KXDthUMU1ekD8E3aaKUiGo47oGhoxmy4aJWFzR9x4SdrV8fwjyiSphTdFzTCXHqDup7oD7N2kzBrqb7oKPMH",
  "key21": "2JrTUuMJAoNRoFSWXZHtXRXwzSZisKMGoo77uNxxwrfNz3GrQXcC5aoB3NpZ2BR9BTLQMTWz14GsaFgWYZ4dkxLW",
  "key22": "3CZhFx4QaLp3TBcUZKc62t8J1FMQrASqouKAWv8m8sQxUunMwgQpeTfJg7qkHaeKQz389JsLzbJc5ekFQ6rULus",
  "key23": "4L7r5LQS7gxeVjTbsZqEC2YuHLR3hYVKbLwfhwqzGA6bJ4YcdjznWPnrK8HqBKTtyGR2gowX17AehZ6VPqzKZn5u",
  "key24": "5r6sj8QjKRgUXhNEs5VKyEjUv8HDZYzPr7oKVAbhm4N8vqWs1RxgVtU5zrXZuNqCmfAvGcbMpCs75uAsQwYTHqst",
  "key25": "5e6f83LZRLn9Xi8seUSt5Uu81B6jZYMQM4fv8RqsD1cpRxFGNEMciaoSex651Em73Q2vV1m4FpdKib2jxfsBQiEA",
  "key26": "2dEC9uic3YntMBYvgrvjtoVniEA3Bj6M3VxcF9AFtmmWvjFAsrgcbiYYnNQWQS6J8BDCMq69MqWNCcCvHw9vLpB",
  "key27": "29t3iutEdwJ9NA1FaUrwiwesy8FwoGWiwN9Syk2dVEPvG2K3PyQu3pungY5XpfY3DdffsxpByGe5jVbSJqFtZtFo",
  "key28": "5mUXpqDhdFgoz3a35VDW8GqVyCYEge717HQXoBQUT37oGPpSiYDFwq5zzK32sj45Doz6Ex1zftx8y8LRqCBed6vV",
  "key29": "otTZUgx7ZHXtQygm5xG8dLAHpegmpktE3iHRyqEXzV4QW4bub2S9SzEUBxxUfjGBzoKuBf4cWKoLFAwQhTtneuN",
  "key30": "5xZbE1RDCwoeXXrcjMd1tAqpGNHcgitUT8RQEBCWf5CH2ZLTC3kWoceXwycpMiwhLKyeNv6wsmRV3M4Vhz3fLPX7",
  "key31": "2aEyVKajZ7XeNJH6boW4FczJ27BP1bQtMfxkjZgQa9TgZUjSmagqMRyKYyYMKYAQCq8GJuzMbozBmxwTD1Ecbgc6",
  "key32": "5tK822RmsgRZdbMLanr563jcX7hFfhg2LJL5HKC2ns2MCax1o34pE2V3hfyfeqxeeTVAsnr9K1mV71oA7aTHaYnG"
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
