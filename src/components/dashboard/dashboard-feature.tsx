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
    "2m6JJC5fzujB5FsBGZZDbKs43m6g546xqpR5ebcFDx8UYhmvEbny9qLYUnRUVaHcofSvQuV8yBFrZjjeKDhNpbgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeQPbDiVLw34CF1dotLRK1rMugaNhrZMf4fAgiNKXiaUef61iQgtvJLHuvGEXfEix3v58h4e9zR62ZQSYbwwJom",
  "key1": "5d6MmE3P2PvGeM14513CBipfjAGasTGc51AmEtAXo7Qm9KvU7tVYEqMjTBjq7jokVzFDFJt17VArcd453fgvpZDw",
  "key2": "dqWmG9Aq8hWV6y2hMaZyyWywRTauRnuYHHaUUXPc6HQej8Jb2ZqRBZ3kqB8c9MGMuxiDKe6mhcqu9fa7zozg4uY",
  "key3": "5bEaR9aMbBa7QowKQHhxLeYr2LvK3821SkrazBzEu1pCzWuoFeKgi2ARMwT8eiZzefDswLpKqQ37SZJbXwShNBLi",
  "key4": "5z7wALypNXyYCmmYJDcEYJz7kALVozBUEyuucSeSqLhQHzhZnRvkY1DWw2LmnWXSHnatxJXXLoyCrh2Xd5HR3Tna",
  "key5": "4kWJByHRjqKhUELVt4hEPWBAt7VvfLmYuLzat4RngyhNweLLzf7WcgRVLwN1x8X8mWXUEseb3A3tRNM9hCi7vtYe",
  "key6": "2NRQeeaSXEbndcAKvPX2PLhMLHDe4bhWtaMcvxiqB1TzSXsz4T4i6NrpTuxjTZLs7yzgEcmnCKJigzHqK6H9ajN2",
  "key7": "4pTFCZQC1DiDa8HLKTdvH3FEDpDpVHyK1FqkC6Mc9z35c1ZPiR7PGXmnH61r8iUkrAmmWTSEDSdB3zDfGjqdq9Z7",
  "key8": "3jguhWNcuvmRnK8jDc5EGsdkbqEAVBMCmWFcktU67mTKDxDCZo9haRhkY3dwuS4fBeuPruLvyqGVADPfNqUvcuSK",
  "key9": "5x2oTD99u4N1jKbB5xekyvh17Mu6asWgoHzz63AoPCeGU7nzLeUufWqh7Q7TRhVuLGagQh5TgyfHnTRnJeFaqPwP",
  "key10": "GcbPhsBdD8SeYjZCfLB2gjKBZp1oRMSEPciFiemSde4QERear4Too6ddDm5Q22PzJYAXvKHSPu5scgUijaKi9Dr",
  "key11": "zeGJ77QdjrVJ7PQKh4udfvwPG8yrng38CFTKb7G8vSDZHeMUkjE8PFDQDfx6sjgRAob73VVDUdvowDASMbT8GyC",
  "key12": "qBaUqu65otUNWN7LU4yA6mk65yTSefxunQzpVFK4v4tNvopvVvNeyY9Huywjw64fwajunfoqBeJwgcaTnuGoaHK",
  "key13": "4bCaky7cwGYWNbukaKxQhSwKFhy7D4T9Wshj5xh91Seu83Fv4qA7TJZLC1o1wxqDC8pQ1fQPsVD6iwYBZmJTMnzg",
  "key14": "5SBsS5aU718rktDiSv6GAqjzVfL4ys3VjhumnauRe1MLxMeNpkWjS6v23fawP9RKGa29c6SzfFyavTr8yh5cXLQ3",
  "key15": "gA7hfQHLTuWDZcUenBmUeR9fbZb2zjGdPttz2Mv2TVvcSUo1d6LyUHfrC3Ae7Y8sHB4e2YAWbypoxe3MoUf63um",
  "key16": "2cN9RtsGDDKzxCQTPVTBSH1uq9tSyASsCVFt6Lw8MYJ7dgKRusFbevRaKDfFSsFUZwiFvoWWAhYmkhqggLb7MmAD",
  "key17": "2VDgbWVcn7rJekpz36cCSj2ChPrmGW99n6i55FUujYM3UbEAChQJFLG44TGaYt8vZ1hGxhtV4Ps4qh8TiWEGTYiX",
  "key18": "vmUYAywhqAwU4aMhhAqr1ZMEgsD8qRMFJoZVDGsy4re149iDnysMpjm6YhHR6QjkweicdzkzaWxFvTeVgaKTNrU",
  "key19": "3Tdj3MwVBk7RfhuCMYd3GEK31FPQvtq1WmhvZt96tcFWHwxVDMav3Vm3u5r1H4YSawby82RVyED1RmJzbCUMXcj4",
  "key20": "YaCeWp733fhtAsz93cHEyXj4tPMK9bncxzHni4w5mxhFdpi311gnxMvwee8sby1pbm8e96FLCcqbwwvcKczQERS",
  "key21": "4c1ERnoBUzuouAv6AUSGG1kkCRGGSeSeZV6AWz8eVZjTMAcLpkSfLFdtr6j8iHKAGTaNCDwt5QZQMmyVBichrJkq",
  "key22": "4JAJ3psYkmcDNLBqBz5RfhLuLCpQhFHmdVU96o5E82QGRCiM7KyGEAp5V9WRfGAgWCNjsMTYt7R2Gn8wMdqguQqb",
  "key23": "551KRjjfkGFamCHtLjku11Gfp9Sm3x2vjGwcFVmzs35vUNUrDXyABwJQgqJoGWHDxdLrTwrqavpmH8EtRcqvVG9",
  "key24": "42dNQD7WZDZPj7A5cC87JcqcpfrXL7KftcqUcVYZ2uyVNYdwVrmgV1dtubfAALjMdG9pC32xrUXn3PkxneHeqvW6",
  "key25": "2JRH2MhS2JqNus6qWF9jW1wbNbSVUrEJVvGTyRAp98pxMdLYu4BiFg3xzjd6qTXe38QcUmW3FtBQVHGKqfJaTueT",
  "key26": "49aMniCUsiEyHQfSXu174ku6uyc4YgPPcxQYRAPGJpiwejWFzkhUyox5Xe9iAuDANe6F8Zi74o7SvTPLpQY8xpfT",
  "key27": "3TGiGbJHasAsVbcj9p2944yCtgUvznTaKb7tyMfxgKBnZ9q8ov3EpcwF7iqupmSnwCPEqs3D7c89dTpAZSwD1Ljo",
  "key28": "oDJDEme84muDB2P2UjeUjHFYWsBHgTHqwocxmvr2eMyydQLdjRNEZH3UgdVB7EZivisK6vDZFmn9Abq3PfE1NtE",
  "key29": "2xA1Cck523UsGKRgveN2g3edWwjyUmYeBCP5QpWbyQWd1gFajCqhKbJqoTcbpXvzVYAdacGptmHGPhmrNMkbccpG",
  "key30": "5aUfYVGrAd5LVKC4aSe4DY6Ps1qRxsYKvSvC42egwxY2ZX8PQ8fHhchzLTrRDqQp6aTCZdgJd18qqgEBt2S5rWtg",
  "key31": "3SsK5mJaa6dAUsafzQcwybogXnJhfw4tiCCBw5zBgXABaetXoJwutcQ41UVF8QfCQxUgnf5UnhfcRq9GCf4S2rSc",
  "key32": "4J6t5u5ogw8LdocyffDZq1h63ccQbPrK5kfz4P6d9wTgcWFnZKbbT5KzfsttbmPVJj71VnMETAJ918uW2i3PdR6E",
  "key33": "2nGeWSdcJ5xMWyyBvpfAvCVY6HoVbnASdd9kQ4YinMZ9se6Df3Yczak5nAGzByDGuYvjjuj2bynmx9gZ29nHD8Wo",
  "key34": "3n2GSrj5kVwBgkabdeFALZDbSBaAUKDM56haabE9ggdyhswKKiVtty7Fo1vXnutNgrDY6QVjbVmXg5YSrKXqJKrd",
  "key35": "3po2afczPMZEaqKHQ5RyEGsC1UoEJrEn1KEzn9k4p3aPVWdcML1RE2tdTG27Z3fyd1A564StDFZ8tWyUGQfsmtYY",
  "key36": "58KMLgebc7jBQ82JX6JAzEYeyjG9LyMbv6z8ekQfT4f4faTHaxyPi6cknnxte3sbXoFAeY28htmqkBoWLjdDsUqm"
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
