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
    "52h7MEhPnA9kLTRDh6Z9L2vN44XbnsNanZRdrz3QuKkkVN7n1fvYJdUCiVdR6QZkCUp3kbLiz956r44eC3Z74ngo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApyB9CuxLf1Zryp4LfayMf2MzYcq3LU1ZSZhdqHwyyk5GTLpWrCpm2boyEZZgXPwfUNxuYgaeAtY8exisRkg8E4",
  "key1": "qGmuMJyPpHDMMxHkhtst8TJYjSGgkKC8N2wanwXnWXViaHrfr3gnzM8yXnPAZzW4MwWSUrMAmFxKfybQiCAFceJ",
  "key2": "zHXoYjBzRDUNm18LLRWFXoLTKoz1sMvgDNeYrrwrRpUe63kxrPuooSaQxR6UZYPSJwk7yCQh7b5Brv817ivKjEJ",
  "key3": "55Qn3ar4xRRfyHoQKYtDphNecqSHR58eosDUznJsTnXew8aFcdrpKMs53csztkZVCoL86ScMzS1VCpJjiXZAVd6B",
  "key4": "64f7iM3oeJMd8UXKHzcoAQTthhPLwoVMJgmvw6iTM2ving6DKviu6vcLXzJHprzNw4ZGoBcUTFgd8yqTUH3UgAwN",
  "key5": "4HgWADAGf4mZggdP7MMihJWYbmQ1ANTCKgoDHXMuXfmtc3gA1QqPqqDG3H7fBM5j88NV9XYQHZSbrQ8bZYKFBoHz",
  "key6": "2GTLxGhyGfMnGq72Xy5fxbxQ4W3QVaE9hvKgg2VATC2WZyFmrj9Y3Wu6ehy8EagS9M6a9f9Wav4xxWjQM5SDYMPX",
  "key7": "2F8yDXyqVx5bnQ2JYBXWe7me84twGbeqRP1EjXvBjjFGFDWXV8EyeSmpaE1iqycbJQsWSmjS4DbRB5uwyBHSrEzr",
  "key8": "4FfdJ6xoSvSgvVszioDYEpTnSPCzQMGCaDLPXWtYsBcav62ttL2tMAiY2AqWs9gMAQjyYSAn4Q5un8zrDFCHnCef",
  "key9": "2QipwwFrKKDr7wUJJtZZNnrVYGJoXw4aSLnCuFbf6YqxE6qZsqcRBHx4x7GYqDP1d75Bz2ivcdxscwvgtYqis5TC",
  "key10": "a5MD1G5wnT6TuebfW35onZSpAWZen3BhZSsc92eNpcc9DtNMBvytoj4QV7o34KoAbsbp9W6yTbcSNJG3CnSoXNz",
  "key11": "28oGvJu6VG6EYh9bVGvAZD2RifT4AmVxzokHX9xHercWTXEZKxm3SiCjHLcke36RDk5v1RuXyQqBEAJMQzLvjM9d",
  "key12": "4cUi4cDDL1jqN7HvSYd1w1F9Be4vogkK7Px28pXdaqT7ucmVMgKi3zb9c516G8VoaTWHhfoHn5CRe3n1SMX22Kj1",
  "key13": "2qv3f2sZVh9Ty2MRpMRWsLYUVEcTovvsbvREQpc1wzC7w9VKPAnqcyZM86SyzSeYNsMAYpDCundwF1jRmGakCxte",
  "key14": "4p7P9iZr7B631S7Aq2814XH3YL9cbzCM2gYAqqckyrz4oo7NR58238wLS3mM48Gp5m9Yj4hVmjBpUyScnRMaBdkE",
  "key15": "2uypxcL5WBqkWtrzGsnJp3yx9HAFQviy6GHLCAhKWVEtXUrntHeJDChUHCoxSUNxNrnqaCB8szmgyxvkmZSrGjKe",
  "key16": "4SYt8rETvSq5AX9fp1ZLQRdEdLvPtVLfVPCxBBuaZXPe1d3vUTgxdVEQAi7DAEJQHQoMPohBG5brfpBNYuiuPJ6t",
  "key17": "53Ck3PWyeAFEM5b3VjWcojkdM3vKZV4fiDUbZywbvYfK6pZLAHMH5NLTo68WyNjDag4KseGGcubjuqdQZ5rtAiWk",
  "key18": "3gdWSxL9UmDMGtS62TWGKbTf5aGZCTVjWYnjRuXie7aadg4ksVqExPGw7ih4wXEZJQ6X53L2No5H4cr3uqKMrQeY",
  "key19": "4Zax3AkHno2q7Y5Q1XSGhJYBmMPMrUBfUwYV8ZJU9NGbnUd6qeMWkYLnXffA8HccqSUyxpeyeaubqzQLaTb2FZ2z",
  "key20": "44tTvxcfFmbEB1njzEvMnz3EgeSZBHznzaGAEh9Yscx4hcShArde2Z4YmoLg22REMS87iM4BdYEdVRCWBkf7KQFh",
  "key21": "4JkXPDX8kXVDt9Xg5NW7NVocGkfdADmXsK5NJWTe9UuU1GBGZ4EapxVtoUunyd51vKoxjwhocLRY3NnvRb1eexkb",
  "key22": "433VzfNSG24yBNvGMaW6hKXXUWuSCpLAmmM2MLnGSDPGHVysdtXMSMkGKjmswLq4g6fvneqSz3DZHgHxd5CrPAN2",
  "key23": "3tA8WCGzwYorEZV5L8BwaWxCgjELBHZdUy8C9EvajDb5sB6nvh8hLzGMwrXmBYRZAVTdmtdLVo3pPsTcrfvnJms8",
  "key24": "44Z5wvpy3QXk215F828WSQ1ux8CPvqaWtCecYGRAvqHAWzHSaeV4XiNJWpFPrtTUncYUWAW9qN5eqb4M17uEyRVv",
  "key25": "4CZSise4K21U4BSyd7sAe61bR5kpe5vS1qx72gmcJDpE9NsWRuvq9jdcA7UJSJidek9VeusUgbVMCwiSVjAyk1k6",
  "key26": "fnZUF41x9Dgdi29m5pyYxGszYpD5WuA9P1jpqTzD3gVNj77warVP7o16QMiAoPLpCXBihVSD3H276gTJ66VhfdN",
  "key27": "3jXYxrzACxZrffHV4Wq7994ngnCuuJ4Fw3fRqPnNQguVV8xAa5rab1aN2VDrtJMg5EgSXWKJW5PbuSTdPGr1dQeQ",
  "key28": "3w4x8pDPgKcDd7bFHcH7BzfurWdXH9cFtjs9wAVhXJtDgiTKK5j2wztK3KmVDSZ83NYjK67csFNnWfNN6xqcmFuk",
  "key29": "3F7EntRDDojwkQyBxXFEeaw5uyMVzyW28FbpxkKQhLNQrdSBds1zRKrE17v7RbmZpBkj6ogSj3hAQccpjzkGnptm",
  "key30": "WXvXck7b4FbCTpsDX73Ed1KE19Cg2chhX7FmnWHHrqhGJE2Y82HmgXygxTGWbNUusGfP9UinRTonNA96qTEHkye",
  "key31": "2s86THeV1izba1qab8T2tzrEFebrkviWfg7sc1t21BSK2eKprYYeEdwrbHfxdfiBvKbXFCiDu8DHG9yDhPr8k6Ea",
  "key32": "4MaesQZsckujGbpTkJT1d5pc8eko1D4uRdTSoUN6NEx8hjsyuxGLBh4UuHvPZvHgDoRNky6jz5etWrwXWfjdJuKe",
  "key33": "B9RJcmAX4xALJJsHvMt4tp3UxptCgqix8FDVvWwEFDncwZrBKPhrPkvWj1W45xpHfMXGMVBvMQ9oL43ajDgLBak",
  "key34": "42jhUQnyjit6s1NwRanaNTbgauYzcyvdJ1BpYMg3W7MZdGpkxJa2vpBBycNrD1esPsFbhvo7YDMvKbYw64v7Eh4w",
  "key35": "4jNdGdyLF5Yr4BTtZgqThtreAFPB4AWA6ktXLkQVjZPGAE4K5S7nrWoJT28GisztXsTonAmZfEDjrvA6TFe3ZpoH",
  "key36": "3wcwqmRo1UKvPwCCZJJexS3meozNvKVN9jVGiSTQ2GqsYdca5MS2x2RNzgPU26DzwNCG4QyvAGUmq7UWNc7N9YU4",
  "key37": "2fBJTBPf4LDrtrvpjWow5z6TuZG7gzvRsefgvEp1PDFxbLZDYSimoQsiaE9GUzX7sWe1nXVwWySv6j7kwxRPSxxp",
  "key38": "2U7KnNRYK3EQ4PqsQrPPxKTd78MaaddFaai2ExoMfu9b6Xu8J5dPtgov9f7tK5EmFfoc9dGFRwsjWjEa1mmcYfLr",
  "key39": "3HVTgbNgK6UPziVKujw4WpRb3QSuBdtmYXUGRfRgshLMWsbuPnAYYt5BB9ATrijbA19pCtrei32w4A74tfTBETBD",
  "key40": "4ZUDwpnPgJWy4j9WrTiDECKv8CXcVLWFYKRxcrKs4YiveJDkY9SZoxubvwr71pL3PCYRozv6EVxwitLECebURvu1",
  "key41": "3r6TH85k1nmUawJRgHMyAPNmGq5QPmkWGcjMmmHZWtYkXHSzhzwCyq5cWNPYvV7rK3dYvjkCfvSyAtT5eKmiUQXC",
  "key42": "nw6s1Eier1CjxCAFseG8hGsZq5SnFHy5S3tVQb9uKTiXNGa71A1S4NNenaEuaGQjH1yDSKtgBqShbLGih1yy5d2",
  "key43": "5d6L16cCKn3JCbHxF8pxQCZtmG75hyFaEbg4g4EhVqdzC3fiT4RUb24fhS2aXfZFDu2joBcWo8fwMyduKMRVLRPZ",
  "key44": "21ck6rqZGE5pZGHh5WHQo9Ku7wMSRgTZMA5YivsB4sP4zf33yPfzUXsi3BD8gnf4hWqyeBuRia4qUj5gdeMK8osu",
  "key45": "24yrGrpp6fnBtWffdHAqF1gANVHWKc3N8G9dFNz8SEM9XEoYHVzdKWSrf6w6mW8soC1KMxzMDr9mVVWsyVE4Fbqf",
  "key46": "kthfy6heKFLixmH1VTuB1EuAV3wUEALf76Rik8Cn39eD2ir8wpc8ZNyj85bM9jCWZqw4LavYkK2qtivGN7abMJR",
  "key47": "5HuZSZp65gee316AN2Yg7LBGi9SxuDE2CEqsBwUtre2kpE5KuLaQuCWbN1pWUk6ukZNH1z5wJR1zxZQmJeRBZ78y",
  "key48": "BsnLFSqroAxxRpme9BWWC3SEPZNaJy2g1nHAm77xhu83AApusu9BA54UVyjXRTNmaPkz5XrHNxujZSC5JEdV4wE",
  "key49": "59sFMUuYukvjbR3GnuBoeSJrkB5LDFZU1SkqrfsAmRwbchm5xJaFU81FkbVciTyDXc624oChfkUuH3yoN81yyq3t"
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
