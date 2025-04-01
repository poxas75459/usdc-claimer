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
    "2aQTgzKwQ892Voa7TYfcFTXL4JsKj9tsD5spzQcNkLwoVJCQxB1mFGFwZKvvaPFTMixXo3qtu6qC7nADHoVt6vHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRNnrCnzv29WLq6SgthHfR8tkT6tZ7mKU1nzXsfW1fE4LuThrcAN6tVYS4oeLoo6WrWdDnrJd6LHtr9AYHy478c",
  "key1": "m52UGkPiHmDCqDCuQNTG7FVE2gSq2Ko1EthivnP954RhdcVqbBaXeEsbqdLJibHef6uy8gRMPAMQBGdecVdkz19",
  "key2": "4uvCZGGeANPNJ66zvqPEsvBzFZTim8vfa4eepPu3BVBTAaBKT31GRAD6YKJ5xuZ7omeikBFnPaaVzckLPVGXVbHi",
  "key3": "5bBFFgKReXnzhpqW1ULqjGQQvXtNyWFHa8SZgb3LFGKdYoeNQrDMo6JZPTbQ5GCqnibJUsF6PdGDPxXnoxWhANC3",
  "key4": "5Ht1Ti4jFCBWf4CREyNhoMQvsgPpupkmGdJAMH3P8vX73vgkNvjGkn18zfmRzZmSgF25gpaDCVH8NPQaf7PDvRBP",
  "key5": "3CihHhH2QcgKjSPt7xqYmvDqMGf9wcBwDkrs9kPBiTsp3cwnHXkTHR13WMd3X4N8kWa4Y8NHLeHNkUBsrqHenomq",
  "key6": "58YZj6yN4xJHRNrmFFhgoNsSAXfcRGXmt9bcwZbB642eP5EMmDYr2V77LYBK8mfeDjsHwe5wPgMBMwWAnHvY81BE",
  "key7": "2FYGpuGs74ugvar9HSZfUf264XiYY3MFXMbTSbyM6Sf2GVfXcJ3v7Kyyk3MkMGt2sepYLRjQxp6QY41t29Y2QPRe",
  "key8": "4Qa9bujNJZk6xCmsNN39xE4E6RrLVpMxb3efC2tvEr2LY3fjjKFtxdnJBAxfkfYEEqzy2x5hfkatUg6z439TeVPM",
  "key9": "2wVQZfzbbHMwM3X3ZWiwBCezGRsC23oNkN2eps7KWcTNQXsHyW8BQWXrdcjnaBaC7rhdTVyqS71u18i5HfMe8CKh",
  "key10": "2e1oqH4BUMMbK3kpNKqPhFDPZnoodc9XS1pc3QrRXwbWG1aj93TKbpLd6Y3g1uyWyQpZfEwuh6BdqJcZNikjtGCw",
  "key11": "r1ajQ74y6jjkGs7fFyszErdaGN2xwu3KQW9LNZsGMuZnAeUHJTuqW9hWWZftoEjkpTZqZH4Akopzencb758Lt8n",
  "key12": "q18HFQstJ4RBKVoRWD4TMD1VSM5uD2Z7Jqx8MZxFzfgV5UDEKWc81wL8y9DzVN8P5yEzDRqnpy8PwuGwbNXsjev",
  "key13": "4SXDdpep6dQ5YHHh4CsM4QNh6dUswvqTPZMQZgyQ96Pjr8S2u2CZrnFHFXm9VUzGfZ6oMbnpHB8LALETLbmRf6Sn",
  "key14": "22kiwAwrw7oHUcY6aidjB7ZeXWtaUQJ2nDG7xEZ8wm5NeBqbUj93yFTXKuUpeKxy6Kas4D9DngDX5iGC6Fi3tyJT",
  "key15": "2Xap95bX44grFYAWx8KhRVuXnkrb8cd2s1EnVWQsvsS4BxhgqxP1CEqMgiba4zvEdh5A1FDJcReh5gPjoA7GJTzr",
  "key16": "kYxLPUHfBcE3qQCZqyrZDgcMGgzEmuqXN94JFz4Qdm4tvcUK5YfXRHh23DM9hyHwH8hu1xV66MQ1qLMAJmQo9xY",
  "key17": "4mWmmHtDi5zYTPNuhJZDGvyyR2yHiutK2DXG4eWnYfZbBqTZHxhG3n7W51AQX7ig9kzdMyiGRjh5yzTX52juPb1F",
  "key18": "33q9eQXvdysZE85SznMh4JSg8DpyMZV1JAtVRQWiYoZGB4kfjNXYTTbCSXYRFV62GuBUbgMkgnLyURbQKT3iHN9k",
  "key19": "drc7co3UsMYihjgHRWrLt1Dhh5Tajbth2PtTgpg9K1KSHJEVmTns9ShrKkUYBMkjDQKKYC8FdfXjtMWFpBgfUuY",
  "key20": "2q2qbfAbzUx2ikqxkxczgkjgnG4Dvv8UAPWetomhnDjFCe6ZcinEXeTLkaQSpUUJVGHjvsmTQLkB5nshDgUJ83mz",
  "key21": "5c6eievCnhDLKRPJyEPinMCFfjoLJnCBpuVGUTQn3yE7aBdqeBqEVCZ2wDaUDACbdiXiAUnTiGNDA3t1XiEYWdBQ",
  "key22": "oP92ed2nx6RQoyQPWPZrCwMg5YC9kq4fwc4H7c2EECzDpRLAujKjnT4CLvRtQ2ZVnD5Vt3oFq3zBCYZfMTY7JDC",
  "key23": "5Na4rPqdfRJFqnDqYaLkWKjxfenxBK12YvDWGx3mj4id4poiu35KgKzrVrrARrnMQyWnTNev46WiKLRxzqwVn8Ey",
  "key24": "5HvgMbTUkDUsuzUiFz9EH3m32mt7G9zNJhfyrUgXzUogzU88bbJQueTUkuQYaT4HBDh5GFgr5UhLrS9jRmksn9M5",
  "key25": "31rm7ifhgycUmzizJriqHZZoTrSg4ccqkiDEzjmz62kyLmpqX3ihwdkMNSqLy6PJLCgbUMv5gsei5Bd9K5gz7nok",
  "key26": "35fDzL49sAzgdqXVDM3VUDytBZo8sFrBcTQJNytqjF661rvWWwVbXf2bJ57y1jc3wWgEwThGGfAaW2DEzWxGJe2U",
  "key27": "63wdXveEsMdoWtPSoYoNenSWq9WXfJMptUrufNL6uEBcoXYJa3R7pJWM9idTohNX1G2kVa28JTUBpKX5kqakgsq5",
  "key28": "5oXCPHQVvLapQN13GVZz8vE7E5qAyrz8tUF5Uh68HFW4u83xUMBVrtCUQHPiarGAxsfihaoXh1WgViSg834RUHDc",
  "key29": "JoDbBXVbNFKk5Dk4oAK3kkRHJ8mLkqU4BR8aWydAWdRqGv7biK5YNdsFxJnJYfVXcyufMhmacFJJgPmwXnMQcV6",
  "key30": "3ZgfyHwp9prSKKg7BdNFjgjtbmgrn9e1JV3848Vn4yFEpgUmB7Fe98uoAkVTJuZYrbPH4HZQhRRaVjwdyEwmv4nw",
  "key31": "3GWWRDEX82m4SzWZu9EkAVCMe7ciu9qXhsdvMvwYeN6MZmcvoZ4RMiZDoeXfgSHYRpf9uu9GWsMpCsJbo351njq1",
  "key32": "4fJxuiNM3NTH7LYDM6b6yiSk9yrBceX5zRXrnb4tHLFkSCMqGhnh3HXr2zwj1iuAEPACdjGedXWX4fN2GMaWYGUt",
  "key33": "67je8fhNK2RgKyfhApXNeKibMSyuRUtbQXFcqZsdzVQNgS54sbpCmNTyXmCwZDLJjkmEtziXJQKCEgqongkKj1fM",
  "key34": "5RMgSBYmiiGxaAPShNHqbhPwbLgXjcFtn1j2wJR7Ts9a2w3nSuy2uKsfgnfcZAGzHFzvSrV8tu2Skat72E4FvSQH",
  "key35": "2BdQ3dRs9HRYXtTfSZ2A847Uru4XaE5WqhXkAWwM3XNQPw7GMZrfgBWhfAm6dqCMzDbjDWCqjzhqjieeiEN1J7RT",
  "key36": "5wxZFbZLRUtTdDgEJoPceKoFWUkbXo1EjMkcyaiZdZtoTKff6ovr5EwMvVF6t62um7eEaRfYjUadLKgnUxexaphZ",
  "key37": "47Y3DX4T8PFsyHyFeuPW6VJJKCSqsVwmrBjbnE2EyNR7qd2igvMD3xfSyZZbDGWa6d3A5BSMBRg7kf4Qu74Xb9sZ",
  "key38": "3uECVV8B4RtcL4CEMhMJvSExpizS5wWHR5JzAv9mUavz549QwSJM4tmk68Zd5mM2DfWLTBFv18t14qmk3tukz9yb",
  "key39": "5vJJVyUNaSdKXTK4pZVvvLwsQVxT4ijBbXjv3E6quSCQBPuq2XezpwC6MJKV3fMy99gGjeahdHNhVujSB6K1jD1F"
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
