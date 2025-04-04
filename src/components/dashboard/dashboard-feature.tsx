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
    "Z66AesphbNtKHkaxAgrZyaRxeJ1VGaHVh2Am1w17qfmAJcqcqJVCZeohgwXvfpruxeiqEoXadq5vw3A49Bzyumx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhJpFYZ8c6dt7J5rj4zHzBopQNGf4uPd7Xhor5dWMLmZkyhCzQPR14TPDH7Zwv8hfPNhqEwGGWWiPv975UYTXXZ",
  "key1": "3VA6JXUXnSw6tosHtE18pifimoXUtg7X94zAMAkzDcp8gHhx9Eehsui3AxbE7pV3oeY1kVyY24yuC9u62kroYxYA",
  "key2": "nbDmb2j2k1BeUcQrFEga8PwTQqmVMP3UZbLdVtQMFN5bUFcu6b48XyNVmnXHBCqCedVT8wVAz8Q4DsdFoPuztYH",
  "key3": "4BuNohP7nVdtke9GkPxeYe1uoryHwwp3vsUjbzfMhfpEZyRWHiJDpJUea7Fnfx2MmvSq2R7EqZLbfWkLh1XXkrTX",
  "key4": "3tcyNtGSwANaMcGoJRramwMUkJTtXm9qSUNdheB4LdKfQcuvoRpCp1SGwZ2HwsvwXG3YRbTTdtoUSzuq1hNkwhwV",
  "key5": "jEFFgpFZ9NyetmKkQ7YchkDG28rDjP9EofpevaEVSoA9yYjccdGiiwQKSpVmc9pdzGBCg75yP7tHNTfvmNjMmVq",
  "key6": "5CxvDK7JYDwyNnvA1bSBiZm2CVVRRXKEzxasDqRugv4FACY67T1ukaAEXwZ3Gs6KdxYFpGfvpfiVSdcCHYDsAqv8",
  "key7": "5fesfYriLR5EGaVyfS7G2W6uAmUBqtb5Z76v5Kb4HuxR2ro4mGh6sTPe6XnLms8V4L83uqaiPUk7DcfLGTz5JdaZ",
  "key8": "zxsvo8K2HFVrFLPE4NaiTzubj8VJQPUsynvEY7xNMLCYBEvREs6BjwLbWYXVd4QmNPJGh15giLfxQUY1UjHvfrc",
  "key9": "5cdWXrqBpYdbU4ihSxKwFuydoCzcwPFW16G6yij4vcEzZqJg5fHStSa91UExPomN1LofhicoSkNgWAaT77onumhL",
  "key10": "4B1jkcsUxpaG5H3K2wk1KTg27JMpnMK2siKMjYnyx7SN5HdybcVhp6JZsvPSbhmAdU3yMzfEEh4ZACnwTuTESP9Y",
  "key11": "22jsRGiZwKH9KngavsVEipHZenxzVGEnCyjkCrEKRuYK4igfLQR5ybxzT4BmbvkRfbXB4Qw4HY6YcAxewxL3BK8f",
  "key12": "4gvrWWxEyhCJmV3VbRVUpswJXx8mMyN1JBQJiM3jMmncs6LnS17qTJ3yFV1EW8nVM42ony9weeA4LYtpgPACpQud",
  "key13": "2HbNP1Y6ihPy9Xa9D9oWuVhqwiT5p94ZuPDjFdAH9zVZq99jU3cFvmNZEsGetqT1NB6j6nmvuGTzmGTQuAe4ySed",
  "key14": "2Kf4BcZDNR9pZW5mF4HNdquu1Ko1Qi11C8EUTb3uQSeKPEtw8TPD9KziB5LMjbsEJ4QPjSQ5oSQkWHRTHnsDb9oz",
  "key15": "5h4NDzq5wcbbZWrTHGD5QDUYzdhwGnSnEVDvTzQjhDUBWfgBj5qoyeok9BdeGys9sk4UVCJitceu4f8nWBLnR5TT",
  "key16": "2w5pA4DkGHbfUPJS8h97qtuqF9BFQZMhSqnvhZdJEY1mSaGizFXmauZ6DuYuQcJJqkhYfHdHDP3zEwSF2eYdthiJ",
  "key17": "ChVCN5LEKzJ92pyWxsoZNdNepaNQqz27XjtyiaMkoYbUvhBc7Qv7FNNGjW8eyQC4uZAyV8HV356BpDU6UScrN9g",
  "key18": "5J4QykVS4SD3iLv9CbmywrERCExwVXDrnpN5wcqx2wmhea3SZ7qMd8byqae4hAo6gBkd2U9CLLx49f4Wtu2JVd4B",
  "key19": "42zpU5eQbTztcPgfh9wENWNzFpydRMJp5xXp7z4d31JM3VTCLe8Ayf44Dq5kq1Yt6k7PyKU29udXR6penYtN3DJz",
  "key20": "44DB3JNCMEuAGtAjKCxwWTKKg3WyAb41RNqnv5LyP73LBubKXD8mrPBLznvGz3j6efeQKoTxuGfFYhGwP8EYng6G",
  "key21": "45U1HXr5YCNB4yGQHLbBrFJq1rdvcJZVJpoKNBhf4Zfix5RuqEABrNqTkbKywXTntzonKsCCPqsYJ8PAHFk5gVo5",
  "key22": "4qLAX5ig2CPqy9FH5cvAi9PsNcG4kvWh3J6TfWg6hzMkojNoC5XJaosbXraCcKrKabAZmhYzSXhRsGXjmyw4prnv",
  "key23": "2gkqbDCpMZDpDSaPQ84bBNZa6UG9R7RNJRx7TvAEg6SaeA3TCRD7RCQV1LiHRVSgPxUSQJo1so27NpeDdsMhruQu",
  "key24": "2ZyJx3WBNkbrNfYsMDqUfJbLnzSseaqtbFBfshrN6YSZQbD6T2rT1bU82LFU5DxFtgkfRTe64A1nNq6uxM5uxpn",
  "key25": "s1CTxAhBuLuT1h9ivSWva6qNc1xWM9zLWrri8eYt6DKkr5ijPxAjcii8CxzjW9WMKPTxzQRuf4EGSA5kEZ7MgmY",
  "key26": "2JzRRoT5ptDWWUHgPDGFTxPZ5Ciy9GZPK7NmBMGk1dsQZeUVdqsK2ph7MAsoUNUTh8BEYEZTwgMFdruAiaj8iDd7"
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
