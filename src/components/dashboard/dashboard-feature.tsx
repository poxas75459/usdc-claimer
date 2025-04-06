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
    "9CzPWrfwWA2exGi2EQBKpWfj3LobAcZvUtKBDEBgkJ6ipx3V8ozYMGzJzvdqmAWFsrvVzn1aHf6b4md5QY3DnQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4EEszoMca3VPoHUJ7unPdvM91sEBAiQ3Zvyyfy7huJ2pwetbeergLFsU4H1ah6idPchfQ8b4LnSEZggRrwXnpZ",
  "key1": "2UzchHp7B8EDCXg8qKh47Jv1uJaeP8Cn684eKe5YZFCZegh4qjQLvBfoHLKSkTswUSRzNtwdJNouMMwaTnvs67hJ",
  "key2": "5cKmWFDUaGoiSGkJfBSSEijUcpxhvYcoxBXQXPPYBpokw3N27Rpi49ws5AVcY5trWHCEKRYufWcHy1PWRTYVsKFb",
  "key3": "2eAHLHv2v72XxrfLivNHay5HvRHQk7TxzUqrjGXL1buD9UF37iqeLk79Z6zjWgCTUfuDn9NtxM6DTBXgQdLQSFmA",
  "key4": "313rGjr5THEmt4kr9GzYyUS2KskR8VPpMQZYCgX2iwdzFfHeGCFpv9ZkkwEHmeqqpSeew4MirkpMmyYk4NFvSFxZ",
  "key5": "5F2QWi18Pgihm5MkSxF9g8uQ2cdKR9yU4mfJ6Kp4gtHvNYohQY75TFPqUhLd3FVMUwsPtcLDhwuxZpXAtB2axT5C",
  "key6": "4kZ2hMoiuFtwNzgYU59tyh4o72XeZQyKnnEPoRejSR18JwVPHKxwbrHzHZM5TEZN5Tz8TCRoXhPUFqcre8QEmiVF",
  "key7": "4u3frwZ1aTdW8hJgwBafTrkdT4v6xRfF6WCpwyxR6gGKs5t4uWEaEzMnRMZwCSS85gacTFAQFUfEz9qYdQhBL7qy",
  "key8": "1JY7HSeNUuiGdtpcbshdZCp82n2uk3pk3PSq4f1T6byXANoPi1bjUJkXL9zJZ22Vuv8YkoMJdU9CyBt3fDjkDdk",
  "key9": "4AChXA39fGpxhfQWzMm4JmHCeeesCStGfdiqP8zmW2qbc3fzuGTi4NVE66BWiAgRQjGeqh7L6YRKZvo81KyaJoq9",
  "key10": "61Pt9D1J4rAthGsRjgdRfD2UJWZP3UzamVS9i1SLdahNp5fnXsL9TTqu8tMbQeXoXtYPvfwiFzu9e42o9SoV6Jky",
  "key11": "3FuMRZYn4j9ZUK58nK2VXLeKYM3kxHcbSpPnXLfwz4KtxbJcurxuC6cQkhiTk3i9niXkfbhTubYTMDuCyN6BArSQ",
  "key12": "5PRuo9RSXR4PsHXGrfQcFfvrQ1Pd7sVr1GxSDDdgYiCRbUbNdChGuMFdsEGQZEZvEbSrqQcAot5aqSNmKvZ6wXtq",
  "key13": "ChzRuNLS9gns8sRtwJ23YbEv9SXnfcJ4MHkokmn4HTKWWDPEK9c8oT5f4w26fQFG1TwKRSkShNgmUHfU8USSB5y",
  "key14": "5vEHPHMMZwTYXhMUyMqDU5YzmRpY7Vnt57wiAN9ve5uebpnjRtBxM7n75wpEvJSW3xgzVgjN4aaC2d358tqkn2H5",
  "key15": "4Hk13pfMyjkiLu6JgJ6mEk6fRQXgVUCptJhZu9mzFBqYkLKJS9xKpENqgpdevjWUryQrTV9Sm7Yu6LQgj5yRBJiR",
  "key16": "6XeSW8GTq7aSskwUVtX6ziWcGivM1qbCpomsBgPfsYGTDmzL9MSyr6xv8YeNLFd5a3fDKUL7w2XmNnQYLeAD86f",
  "key17": "4jUWQGoPNnApVEbtyQBWC3WASJ9qxTCJJEMhMVcKaJ7obCdcMSgykyaVEihVp1UcXMXyz23gg8gekTX3dMn12Rvq",
  "key18": "2QA4gyK1wgzvw9Ba6kS8B9DwDtLGA9rzJZTmcHxA67sDPgXiaRckGr5wQRQGru44TjQGExzDVr7UqVUPP4eU4kSk",
  "key19": "5SbArsDq6HcfqWnNUQtorpDrCpDsWaR2BMXBAfy5uMdMeY9pSSLojBSbhWWuWj7ytncG6To8wpfLbaAKRqcPhiGu",
  "key20": "5GrcXUW9TqerGzbNYzJwiVYDHFgZdhw9K8yBzz1epAgbaXtD3Y4JXkPnwgUyhFXBbnhYZA24QRV5miAhhE9bZSBn",
  "key21": "QFDN1v38xZUndXx19W7pJ5rgJDaUu9E5aXHbLAZCT7FEoh5THTATaXysivBY6Kkor351EeVEYShU6c6SEkrB3xb",
  "key22": "HabAa6bwS87NFCkSGrdh556twq3oocUkHge5C1giAZNZyXed5H53Y18WvCiQ2CmEKwFReVw5YCHcf3KC7wUCkoj",
  "key23": "QeuLfW6t8nqBUsWG9tzYwseAXk7v23QGUX1eXtjWcyWG1rufQXZ1CtWPx9SToyGkigMX4a4GRJuezrxnvHGZviq",
  "key24": "5k2WkRtFpFXBycpFgkiwWSjjz9xxi3FXdhigSkMWec8J5yJvUT7wKxQj5TZexM64uXq12FjTwVuXHmNtYRSuso5U",
  "key25": "2NAZVr7RTVrp1884AWL46sGAzHF1d8DrnGxmPbfRhd2VQTGFTaHNiCR7XvbtXmKw6UgDkrCBxpDzJknP6XPJ6cTY",
  "key26": "36bsgaAuEZvd5rX6Su6KmznU6e8ynQtdrFnapKPf2zTZzr8KTpaNg9QkSc6hJxFTTp5xCdvLdQyDWdx3hcofcqnh",
  "key27": "2JrRtZ9znzmpjk6H55pjkadaqhK1xqm9NaWJaxWtawWQfnE8kUr8Xf7B9Lgr89AmcLywbB4L8oV1LYEzBD5RH2NN",
  "key28": "3MBSitQi3FBvrw3xNZeKVSvty3Jdkas98D2mUVbUrBPxKgvE5XG93gR8dbS5fSf2zXfKDBFRqSPwmwMR6C9dWD22",
  "key29": "3kZXhn1Z1ZFm1vsq1XfyR3pGg7it8jwBoGE4wANeMxhw3X9kW8crsrnWvw7SPyGBWhC7WtbBvXmr9CcBU7FngyVU",
  "key30": "2mLsSSbssvobBr7FPuVFWNsF8XCi6QZRjq8Jk6Vnn7fDizUNCQzz4L7kLzR6m6c7kFG8TAvnCjyrRaq2kwzBWuZ5",
  "key31": "4hFpbqs2bN3wNh1kzJ4xQfDaUDiN397NZhbS6RWrzgmC7sLrsXV6WGS6d3yn4kjBnKA1L7etaHvgjaPADbqXDmaw",
  "key32": "3LLLqXLxnMwSBz14epRAkAwAcCZF7HfMbCHHT8rgpSCLo2qgyribFeXZqrppdgLFHhwS2jEKpHGhcbJkzfqL4KQq",
  "key33": "2nCWBhwJvogzrvdqnPfwmRE1cSUtcSihRBvNsUaPBbosrhhpg324p2K4CZZ9NDW1iZx5xk6bE8vPE6tT49PQvRHb",
  "key34": "4Sb1ra156eZj44YMQhHxymFP1d1jqs14muoFixmZhHUoggVipmfn2nvpHwxPU9L9d3Cn1W5xixcEmk6wtM1hXtLo",
  "key35": "5gp5zeb6AcoSz6tdsZgLpiY4iGMbSfwHRKV86WvWa3e7hv7vwLcvCx2iZFw7eipGyV1NtYUairGzZZysHTZ4zj4e",
  "key36": "4DYFYETcW2UfXzthFZUA2ZXoNERCpjuCHyomqDkQVXKrDzrfFcsAxzX2CNNgefcUt5CZZuiYtta4VL5qzBEcXSXY",
  "key37": "4WASdJmDoRJWviH821z5Dqrqm71Uguwueud2dpAynSWNETPv3JH51VMUWyhSufEQU5YrDx7zS7yp3P2sUReqncKN",
  "key38": "5pppkEDceSPacotmEcL2axJg7qAP2ngiFqV4jh5w2UmonZL5wA1Zz9BJD8CByXcvGxnpYszWdhvHZRwm769UXbnW",
  "key39": "4dd3vNcKHo4X34ATuNpMt7mphAHhv66UmXpUcZK3wqrghEwPBHYXgxrPADDWxRJKw7r2voar6k2bo9NiHsiR3AEE",
  "key40": "4UjmWuqgzVyyTSxizHdjwqqqJd7AY4XZn1HkXvdCrRzhbusRL2JYc1u8ePhBiozKDsboQdv55C2auBz1wFdQDPAs",
  "key41": "2gxQdhqBFRcbZUJgBdTZ33nXpf6KgMJHkQAhQBVhQXtCnG8KsbP9eRgwemW6wR3grvDKQfXup8dm8Ni62SKUn8Vt"
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
