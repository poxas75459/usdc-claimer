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
    "2VX6nH4JHiZWR1FJsqxP9QoCt2dHiTCF39mNq2XTxL2KhH2ZStnLz4yhYomW5wZkaqWGL9S82EwzurrV54fnJz2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZsuUoJshJW5Q6rvAYyNGxetyhUr8eGcmGFFR2EEMx48vy1CXk6iNq5rnwhDoC91zsBQWFaM36jFMEBYm98U8LU",
  "key1": "363FykLUPVGhfHrrqfJU5ijYAMArThN1zLg8n3nvj1pyX5QfdMhtajF6Sxvsn4DJ5C6BLnVowB3Py4D2nq7tN8Y7",
  "key2": "3nasasp2UQ7KGPEaXaYFf7joirm79v9H8Kf5XQ1pgH96MsUDf42FjDSUAUcECAmXwggRzftNF6XXA1KkEdnnmGuF",
  "key3": "3yNHEEjWXySG7gah8ydYNUDdMfgZptHe926XrCwkEGwADqojjUPgC226fkxHGUHXrSVUKkrBe4x8iD7fbiQRct9t",
  "key4": "4hx7CHbmgrN1DRQXLxa5ctdLrWw7mRybZMthAPNZQLkUARj3UzjCXMbprq1cYySL1xoYRi7VF2LmLSsB3dEqJArm",
  "key5": "g3yARok8FnmaCCGMng5iozh7veMWy4n64XvE4d6dra31t1xiJkKEoFssFjBamQTnnmHk4UeG8XLAGkrBLxYnEik",
  "key6": "3oLBdUsNzRLbwteZEMMqPJHJ3P3G7LzTLzpKLJn7VG2wDKbUFPw3FpTMjVSGRhB6VvHwhpPwBfPPiej8oPD7oSdo",
  "key7": "4tVssZhCCzEpdLpS894aBbYn7z3rTN5aoQ8P2Lrmi8dHngeBDtRzWYr7t6EoWDNYNRiMCeVW9YcQ912Kf16fbGxZ",
  "key8": "5uABJWTLGbxuf4m8nmESCZW1ghbC8ocsVWoX55afvo6ERQu8AYGMx7JiYSddCMnU1sKwJQiyftMAz2YbzQTq6QSE",
  "key9": "5pebsobmc1uRVvqng28xJyLtyjkncXgvCR9Tv8ePzc6xMskW7ZXcaYfRHWuZd5uvPVc8Rs5A4hNiXbg78T3tMXkk",
  "key10": "4msfrb3pKeHCKFzdQTwMBwUFgnRXPPKYmrM9cLahhsn4Y53fs6TNomBN6LiBn7S2KfztvzyvU4gWVoEdL2CPnXpu",
  "key11": "37avNBRSSJXkNwkHVD7nstFf9N4Cm5kZxMVvtimRthVxD8BTJCYq1odVfyEvH6Hbu7Bp4JWFxNBLsgARFJqizn4N",
  "key12": "4sGCEj6RusmTnTUMJhC12nMHkPGTezEo38d2wpg3CPggzpdf8DCueqq7wEnszMCweWAueyCYzKvGzRHw5GoNRsKg",
  "key13": "3crQLe9owjy6V8RdU553PVp5k4EHWiaBJyZj93UCfotqxu5tFxDREuEq43m8xfLB9hBvPjL6emQqhaG9eeqwsKkY",
  "key14": "4iVF3oww6Ttj5sE8sLxnoUXcrTLiSc3QKsxJJqF4cQhPtrxyLPz3B1hVRJtVLKthng9TafZqhDWXjV4k3wLtCCHf",
  "key15": "5wGqJ6nEbKHTCfpHoTu3XC6U34g4sNM2K1BPrQDR3iiJUZSJgcA2tmaGe9PqUJXuC8TKKBe3TGjC4tG9SA55j7nN",
  "key16": "2VVFriNcwwJ6JoDkfopJuvmbtySk8zpYtDigCsBp1vpjERqJsHGN8AMRPxKNmvfSpK3CNmjzszcfVCy8TWc3pf5r",
  "key17": "2HJBBp9Vid3vJA9Ue8tmdDFY7KBkvQmsLMnkkDKtzN3RhH7Hz365SLiPLwfRe5hSHwMP7rHHxZjT9d1zCTMZRHyB",
  "key18": "5AkXeXMCTdCRTDBn3UZgetEf7xqg8YRhwRsPySMhq6qLHQnvikBSyChehoeHnJAykbBCc9sj8MeHgk966B2Hb1W2",
  "key19": "4xco8ZCjrwpkxALSxXx8YygM9AP7bTG8rJLz47kNW2uqTeByScy4LHZAnzcvfn6HZTFiq8PSwThUrx3cqiRUYeED",
  "key20": "5buXnNsWypHLNKkjsznMNNnr5LKxWEpRELei6DWKeKWdpgUNfYSsS4sQgkKksjsjNGpk6wHaCY7Yq4gJtPQgWiiW",
  "key21": "2rvCkF5B7aw6EqbNvyW3Vi2sTszbAXLxusXW7Mzm9PmV95kh7NLvzQqqigD2vgyhrC34DfMdb1zAZGmRTtt1rWe7",
  "key22": "tCBn2YoQNetQD5DK6SSrqPUvJsHR5roQCbSNAgL6otGyPz4fZP62xAie7ehgmaYCkHSBPrm5wS8wG3kAWkaX8py",
  "key23": "4Ne7jD8qUCLRR6ze8vXord6Kc3uSYuhZvaGXsTGjWwSTXHdRaha6Curr4YMhXNZENqaoZ7N9oFBq8qHJHbZazUgp",
  "key24": "25ayvEVCTQpUhCycu5vgc1FpX9iWUVG1rtpf2g8n95NyCR28wuKem1DP1BK3kp8FCistUF5pjC1VXzN5s4HTgEUv",
  "key25": "hZ9ontMeTetspTZbuVZHgMt1sXDZRNb7w3riE3MEWZsU3FMmG5beJX32DRhrbYZve2Eta7QfzCUvDdgXiYCvD8t",
  "key26": "5fZhYbKkiUBahbgoXcJ5r4KnoV8QgfgPVpEGg5cnjFSr2s71k4vs2oqQ23bNRjPhKWxCadV8Q2Dr3ZeSZxKpgoCv",
  "key27": "39z1mHL3VbY6pu7Q9eRaYVjTxBchC8xcBYzWDD2x1YYYjKzojmMCPcQ2gJoun4wpP7nta9K5CP3R1N5A1LB2rASE",
  "key28": "5syzeTRyw6YesFpTQCqLQ9KpRRGbd86N18ZB2EuzujAJ8ic1pgidrcNjvSxZmSWoirdhCbdsRSD5FzBKur6mVnZJ",
  "key29": "3hrtYYtJekXMdgfwmbikuXgHJnm1JrC5G4cauw1GjccLLeL9bD4Dc1Q4e6XzarKoEs9CjNWac1YG6DR8NxtXivZp",
  "key30": "5oyDeqmMB9x31H9cDLUL9hxUYq6NkT48SfFy8HA8M4LREdsBwhoyEw9UgHagqX2ycBgAerpnDoK31y7A6qR2mFUU",
  "key31": "4KiQntoEjvVojEn9VWLpNDKug5jRNz8dGM5XhQUoY2eHRECVQ5iRr38u4AJjQEW8W7NYnVeKkiSN9wkQJPyGexXo",
  "key32": "hkWTsxYqY7fWF4FJKMJsnwF9rwJ54pEsb3GzsF9KCpJeS5J5s9moYJkdhQ8aMgFgJjXWmTYdMCfQR8W8W8Ej5j1",
  "key33": "2y2UWJPgo5QpXtmShqTLergZNmb78oV2ps3Ua7pcLDXoNAJGsRtUecNGgd6F6EzVaNer3goWU19Le2eeNPukJdEB",
  "key34": "oFcGpwVuN4fzFqbRTCzPm5cBDXB38R8yj74SEnXLHfxSmJHUfSJdHzhAmc9MbLNTza7BzgfRJwbMHbiweBD54gL",
  "key35": "5gRkWS9wi4H4CZCk8pQbrzLsCxu3ef2Yakb17xKjFcU6EqT9JjZLY7XMAfunPX9vqykziSRajiiAhqc5cWANpjX6",
  "key36": "2QLSH3Ff4i2VNAUUBtGyh9ii7u87LLLHG6dwuAgWEZ6xm9gNG6kboDtvoxVQ4RdZzBg2oNhJaB5MpRHRYpauPpTt",
  "key37": "4SqmJwvYu6nK35hWE9ukLXHJViaKgt5SyHg7Z93WjVaYg5MFfnBvVFfNG3wfgAhVM7FsBhck2hfipiABLKKzMbrN",
  "key38": "1a92MHvUPPkb2JNYUQFe73dsNSAXk9ayrJ7ANs4WaRo9gqb88XQhw9M2HMtFnygduU4U6ZEp3xkDWoyBuzkZS5m",
  "key39": "2G2Vjn3ohSSgh25XcSPZsan31KK8GHa2b3ZkcPu2oeXk3jE6ZJfDrKK4KgvE7HYWsseSgsLoZhTw4HvjWds1WCxM",
  "key40": "2YiDNmy7LUr2ias7X7XXViarbcbcQNSZyGDd2AYWwXfZPNToE1hsHCuT1FGaTX1vTM4YbHB9ZSgoSy91BrYt2x6F",
  "key41": "2yWStesweUeFn5LF8GEYSFWrdmZijb6H5GCgmX7mQTAa98pE7qsrShkJe9wG6XF5UGW3kmCZhYH5JxgmcTYVf5vN",
  "key42": "3qwaSH2exJs5TcwkE6L41DsH8XMtYxCmfZza88ebvxAqd7xmFcgoyhjXSbH7jgiNfonWaDdwLhfrmQkWbXZp89Ub",
  "key43": "ZsGmWzcaLurgcX86iffEryRC2K7NVtbgULrNNMVDZEHcRhs26NWqkKJ5iBss7otoBvmrYpakVwkfJ7jLrSLC95b",
  "key44": "2hdqGvdsrQmzfCHDwQCdFukp2ztZt86ndcADze1FPjPEya6ZjRDD6WE7NjFCwEc1NSU3Xk67onpENhTVExYbi53V"
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
