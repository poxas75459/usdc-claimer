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
    "58SuNyBDQzVpNeC3rfZNzLZwE3Tf86gU1SN2SyeSX6JDP9yq1PwVxsPtjuQ9xrB4YEi2AAG5LyyWbybfc2g2RCf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HArAy6yXU66ksXFn5JrkXXP2iHCTKvmxmYaoNAebEQhrW4n6c4cQpoMPtBYGzN2YxYaqgGUqTHrm2aTxruQ3t42",
  "key1": "oYheb5613UeActFzeLax89ehchqqf3HDD68N6BkfkrSk2sQdsEPsaVAgvdMH873xfjF3sGcNLyQfbrQdbCXwtga",
  "key2": "pVVgVMzoe1DJeG4vhii9swh8USMVCRkCaVUckhqMPue5kxoJApnFn8oRKyNj8LVvS1bnTggW2PTRyi2pTFH3KGG",
  "key3": "4prM1tBkpDAfrzyNRTPp8M6vm7gbBfE6FdxgrJcP2JSrmk57iGsf734yHsSSf4RjYe3tSpYqyYFkoAJUk2yrR9UN",
  "key4": "2QmJbYGRHQHiCyjFjh2wi5eCTkpJGLskA46LzUKcoYJxZSJMi2W27tmec37ZXaRjmZ23V4Ag2DLCoYTjUFCwGNR4",
  "key5": "35VsxZqn8AgMmqwJyetBsNAUx5gjgsTG5YST5679sd6SH8ByKCRuq3dwkPxnZoGpXAaoMT2k2Ct7N91ViN3VrKeL",
  "key6": "51J69M4ygeMXCgwD6X9UjF3rKHHUGpvNtHtH9tyk4NUM8gXCELYpH51wpEReLcxiRvxViNcyhw4zDMTkXVvxhR9w",
  "key7": "3QKpNRuJRLNaQ41CXkMnZRY7q17xEV25yAN35zx9os92w31c66mf5GyqaBKV5TymhoFdejyePw6qxTbffx7GTuo3",
  "key8": "4mQWaC4qn1sZ7jCLEC2Hx9XGJKdA81R3T9eMnWtreuACCoTdPZxpTdyXqwMb25tjnV84QC4mXium7ypeu7EN6vb6",
  "key9": "65H2sP5Lv46a2i8AA9esH1FbWBruhDMUWyR6rgL6ALDfFccKVF3RP5tspJXDbGyWvGQkTGcAN5oiDNNQ8LURCYrU",
  "key10": "5qZmRfwLqfuh8X2L1AL3c1hqBbKXanit4AJhBRWdRgsZKy2PcQEVnBfr7uAtUH9nhvsHdr6T8ux5CrG1xbtr3V4Y",
  "key11": "67CbJ7ttx6ZqDdXyvYAPr6nPicEohbodHsdXzTDxwNSGbTbBXVQeVMX8kJBuKrcRAXujFmNYhDVwCjZVGM4uieN7",
  "key12": "3oEWjsasMVNA8zodarCzvwMctLqavZpZ3LUXA3CDqNsBwZXGGjhbVaQaHmczZZm9Hhzsm57qrHHEJzHZ9f4RAHrv",
  "key13": "3WkUZCNTceLLKiuW1932HTCeGbLaKYqgGgHtMv6pzfPmQDevawRrjwZTa5F6D4rKjvREq2ifERVV4MfyXtWdVQ9Y",
  "key14": "2YVECzyuxwncPhkEhePo5EunZTdXdewKYmSJD3PzqY5aNyaLaDxBTRZbk5WueqpkYcfxQzoyLWir9KyKNfh51L2H",
  "key15": "5wfUyMyPAY36pPnW8J2fo5dU15a7RSUjB8RNYh7r8h4zS4usqGGsPHbFLmbTWRfWUoEfxjaBeqvg1QAdTPTBzDwf",
  "key16": "4QzUnvzsb8F7dJSkiBKt96cVNyFqcQKAvYAsuaxLvLuSqvkjBPuRUfgCePfn7D33zArSwynzWyvHTAuRmRLjVusx",
  "key17": "3iWXjqntbSaVdj1Rfe572fmhtykYiq6m6zervZV8YnT6wVT6FwPVsVA1P3quLf5mF7zC9rzK3f1DYp34NB5zrPGA",
  "key18": "7Mu7hBQnTf9V1778agtBA6DjySPiaqcuLJRcUzMsYypH1AYZvQAgq4rStBK6wYVHu8Mv9WzfcZZjmEKxAjdVwbt",
  "key19": "3okgQuEb6q6C4iv1rQX2nvbtkZpnVVBnpvKRusK1V3HCadmDDDJi4eU6EwQJH6DAdCBXzyoCB9dZ9t4kk3NKXJ6T",
  "key20": "4k12koSxMscV3XvDv8NoRkoBx6oqesQsLqTbxsXKBkDAwhTx8JM6cX29bT9Xi33tQWdSuaVxWj61zsNUUKAuvevo",
  "key21": "4nFProyrMg5vwHkphzLL3a33iYgtsyWAj5g664kRkhm33BvVbiu6Wk8nt7wXev6wM5BmZKQs3NLk85G4fNoVcPD8",
  "key22": "2Qk135mTuUdjQfJNvuc164ESzpJcPeEVqZG84Sog2wvM7yprEpgqemuWpz6NDUEbjFVabqVR5p1LqxzVHVK56jAf",
  "key23": "5ZmfJh3utz1RQxgMNPsnwvJrr7wDLkd2g5Xr6WaUZRzGSHvrKU5uEie1ogvugCCNs9SH7KXE364NzvXcXiqHwkAm",
  "key24": "u7F1wr9LbX21sTDCxgMrdLkWEW8vqkRfu9xGu5EonbBNcaKDHHbFLjGmSSjfon5szwbo4gvXy9R5XY6HpXRB5M8",
  "key25": "Rqp29kJgTAA4KnCJii6WigMQFENZKCGvBCu6gnwvykHvvZwQrGNW4WCoyz9RxWDpbyFSr155qC5XRAtXdDg253H",
  "key26": "2WcG2raRDtL4DDQwFW71i8LieqVhxJ1ALuLJUzUjzkdUQFoxA5EV2wWtFShKF8FyByRKRSLuUZz8Hq21C646AYfA",
  "key27": "4ovc8S45n6gVfuMckf2dkei2snUYqruPGm1LN9EzVP6X1T9QK5qyAodLmn9N5w58VxqmWGM5uromaekPAjwoMmxC",
  "key28": "5yfUtJ1p1S5ik8mj6pg9su9byfRhm2UvBcTYeAtRgcrUcKPghrTxiNir7eyCVqWnesr9vbAq5D8dfRHNsHwNvKX7",
  "key29": "2n6N4jfKkdEkCSme4YxCECtuydfUM3WLBJyW9fZv7cLbLq87GjZC4AhTRYwu3TvwbUrjLh1k6nd5M41nQJD15yhP",
  "key30": "45ip3WXo2kHyaEKk58uUBeQGi2bJ1rLWjNSxZUxLp2NHNquiHGui7KznvdNwDn6iCrYvACV6DCcM6t3qaCfzqbq3",
  "key31": "e9xiS9BKuZkN1jkjX3PQmHAjZRJA4XDnFkcZYpTsZnkx6xUCU2tgijGjCaXi8tR2DEtoYWLA7DBhH7JQ8jWAifh",
  "key32": "3RfTN16TuDmrug8iQaY9uFAyYamETAMURE6RmSD83e3NSXfeTPBbsBs8n1oZrMnDAPxGjUwWJGncxvUGK7TMG8Ha",
  "key33": "4euuYKv9bSLX335JgxYTqUf1ioikYqDh6LePMozVUK9xApGpacC7fTLK1efm9ux8EY1xBSRbNQ51UP23JwSAT5VD",
  "key34": "qs8GjBtKaaTfmbpFnf8Yq6CwRSETCyfjGvQ4Ty9W48ZUXzVTadjBSuNpjUEFD4qJ5AozKVjVXpbbpxA8gkcyTCM",
  "key35": "2QxZXniyWY4mxxcZeQm2VJH7hJ5DGEiYoBC3wgrXV5nFAWdkK3sqp93nh2CcLk8ndSPb93yuQVhmtzJs4CyHsY2S",
  "key36": "5ZB25ed8C6vE7S7sYNxAZAqfNtJiLVrj8oYiiquoNsmECAT7FjMAamCzSxccHKdcznhEpjuYNeKRCuu6wXLTdQ6x",
  "key37": "3jA7EzrX22W1ZqmmCt8gWGiZ7jRyVqvtbQZdi4sPisUAvEPQR8pAgsaNJoyVMHEdqTD4Pa5EzmkndS1nBc9yoF5b",
  "key38": "5D8WojJyFo9nyDyJ4mmrXFtnGUrFfsaCa2vKaQc8Q4KLTA9viqnyU5m6jKUDD3YDAVoE5nSPWdKT7qda2Qydmx3E",
  "key39": "hzLZWQdJ2cPevK2zTYNuwySz1oKWVM2pPDUExWkBEXyZvWWyJd8f3R9YLiYgtHnV6JNU6KmtTKsXYH4o2myBd2J",
  "key40": "5L6fWAnkhsxL8EL4UgA76ZDa6g6b9ZEuMkwmQfw1nxTMBGtHBmQaBm7gNYBDCV589zaSgS7KpdJPbVHMvSPM2VxN",
  "key41": "51rPTEmzjTGnvZ9a6aphZwA11MF8RFWBoxvVmGbA6nkgdHprwQqR3hF2ACZfi2U878Mj2L3FXNA6GdHHAUAUNkf9",
  "key42": "3Fi1M7Ktx5cdVrEme4NQ6ZMLbgzqJPSk8tZdC7FetfwFW2qejXYmmJhDXWgekExsMHiDiHt5c838FvC2nUGHy4tA"
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
