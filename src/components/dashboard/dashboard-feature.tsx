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
    "21eQwNN7ipgkNbs2cZrNuo3Hki9paS57kYhQEtFvzkXkiX6rB33QdF8NGVvTzCAyySGgSawT86hGarNDp3gooQgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoG8a86vj4wa67VWBVR3KVwkfdduT8V8pLA4tVtS4w9Asz7i8oZpvcDVNA21cTL8E1Mtnn1xswvkZJKkLrTuBS",
  "key1": "3vNcMZifHRnsfvaDCK31Z1DFLsRfKz61xx6yYbNHHQDbdiVdUFhw48gKi6T1jXRMGaBC9wQ3YAEcpHZkN6LjWnuq",
  "key2": "5TmHnwXXbwVeRnhQuYokXd6N6dWfVTWSmTgiDEbJFw8FRJMvZn4Nodm2bF3Ew6vo2KSw2sxLBPMpnmz9zebE3ax8",
  "key3": "4M1fJRghYexMJz4R1Dxt8pzYwWuNkq2BT4NBqYthQdPMpiUQdthHoNqyaj5YQVLFQT2RbuEsXAmMfhuzaKoCGynJ",
  "key4": "3d3wk6aGV9W3yjc7p6yYvemXhkQwZ5PkQnpqv8wqAxWTqpKVEWv7yUaz4UW2HoMcyf8hL7srJ3uRKmVfZCEta9LG",
  "key5": "5zJrcdE7YTihCmbWuQRMXdHxLHdpMJkABsG1UAqnDwQK98e7ezaM36J2mnyxsvJ1JwmESYZEh4PEEjWFbRZkxm9P",
  "key6": "5r9dHZEFTdCiCAbFLaZZw5AgBKDWTEieV2oJaZFL3uqy99EWZCnkPubGLYYLDb8Ax7FGihYxkbHMRR4Qjn54V1GE",
  "key7": "2nAQjmn81S85fVawSBKDK9VmkeDQ91nRXc6x2r3ebzYfUs57j32GkuZXe5Gt3B6P1dPfpp3t6JU4trL8pJgUApT9",
  "key8": "5qYobyibtQkpjaE6RSoJHR8BAJCPrqnRkA1DXanAiBu4yeyaPcNBBMAKd1Jz2PgzBcpheeMdTd5PQu3ENJJAw6MN",
  "key9": "EajeXXYPoDusENAFEBJ9FsGkrH6UiHKNBT3VmvSbSbUqKUMH62Qa4kT43yXKg6ZKUts5rGPBEQFi2TB635LcBQH",
  "key10": "52ATwyygKedLWRD2otmgu6s43jWuYsCFmeN4ZyW4kMrJYT9bDRdRDFLayfPbL3zTRSriDCvK7phZjk5QVSytkoZD",
  "key11": "2mYoGFVAy7WoGB5C1c7fHDHebFpZh2pGWgbqaVasV1re1sv3yVHB58vMZP8npPNKm4GNWBXNy2CqK4NRKyZyy5RU",
  "key12": "2zqL6W3UC7LF4NhQPwf8vsrB1dSwGNvGZtfkf7gqVCVUWU9sXzdGbJy389yqxkaAFFLVegjMEpi9FmQdKRB28wuT",
  "key13": "v3RJ9aFRRaw5NrEV6hnvgNdSpdRUhu4TjHPRt5SYZh2cVSTJDq63Pim95dDCCofFcsvwTohDXzdtf2mwhQUTpZD",
  "key14": "5wBraeuSMg3aFiETeWyPkNUUqW1G1Cwj13Y8ftH9S4XQ65SCu3AHyNcEJe3xohZasPZbixPYqn8LkQjoqrywqCF8",
  "key15": "39bYHidDLpmftvzAi2iZCy7UTRc8fxT4PEiYMfLF56yJodPQPsUsUj3sjbtSyFvz4meo5ZjrXmR7y7Me3a1Xij9",
  "key16": "2CRiBvuUjggtZCPuHwN8YvTuydKdibSLriDpRRqCgZqfsrTut9yb3GPPLq8Lp3f9xzVQnGMEmJMLPp3gN84AXv25",
  "key17": "9V3EQhvYMxKxHsejcJCWx5U4JCUdsN4xZttE9ycFTn4XcKbsv6HXqhzABjrHceKSUKnhVz918H3RJaxbqniTNr3",
  "key18": "52KZFhiPMoikFLcCN4qK2m51hbSArcu7ZyEJRZqdMGaKvJqVjQrCwcs4QD88YgBzpvGkeM9wBiSDSEvG73BoRZ6x",
  "key19": "4jRhx1hSirgdKmbX2yxTcGTgKYLVBEr6FAvWPJfskYgZDBc1bBmHpnE9S9NyeYFxCBToArouTpLddYaLJ1di5CDe",
  "key20": "4rhXeq1Ab9THzHDsQwH8E6TB1SXZ2x5RajWLt7puBxEDgrL3VM4wHVR9PzQkprqR9oNK4otxTCVrs1UVBSLuAsup",
  "key21": "4ejb4EiuaEMVq1UwnDgb9DbWdVRzTztbPkN6pCHa5eM9A481mUbNtT7t8ov9cWAyH3pQS6PCcHEN2M7VCwkSbFTY",
  "key22": "52RswWNC6NpeyqUr9NxUEij1d49pNDzxPYkci95DHtw7q5Wii9KtjUC1HcqfVupfrGChsZ6snijXXHV6CuwzVWby",
  "key23": "iaGYQmQEJD6kpLupHHFGH9CXkDHFeVnjXVm5zJh17XbFDb9Lmj7e55QdsbPcGv68RsScuKPVXg9oDo6j7bjKZRH",
  "key24": "4yB82xwcSK48EhwBkWD68vtSZ7o4tjNMVkFdjMHGdP6t98s69uLHzxBSTc382g48WK6FeoJyqEjhqJ9WrdcxQJu8",
  "key25": "5XbnM9xrrHQftY3GHB8FxUYALsnTPHRPLcW2EtpvibADaTQ5KEawNFeDUb4fmQRsZfYDzc67oqqHuwtCznvUXTYu",
  "key26": "4wd24c4kU9fEuXbgWWKDfuvHfCGPZspz1PiEa5b5TwCH1FKfpFSKXrK2iM2AtEBztwWBAfKPung497Ww9g2pH9fn",
  "key27": "XKwnGTMxmbjF1b62TnjK2VBgLqy2jjW7DZ8ypURkhEJmxTMLqTK9q1M2weT7PDsYZ6kvWVjAzNHaGSHkTr9iY8K",
  "key28": "2Ao67WspuekmTDBDQSVFx3haY2ioGuwPZWCJmihCeQR7Gv3z2TQPgE8Lig19Acymewbe5n53KgdQaR7ZomXPyZmR",
  "key29": "3tk182xF6FRpsSyNjRU1V2LCXwNHjPTVe63WTYJYgEGQdbcsP8LjGhrsdFEjNaNSpPbg4WwftKFpvL9EPLXR9RLC",
  "key30": "3X3LJqhxenJDGNEyibRCrVSUHBWTJ3rqqNRjxotD5TCPjY5re39JMwFSE6YKRUBi5Yd8hkdmikuDjGrJqrHZfwfj",
  "key31": "gUYYMGxgLakowbyTnEqwxhnHGhhsxavsvEZ953Y5UspwjxhVQjWzqgKwdUgcjd2LYpUBFwbonWq66CJuBy6q92d",
  "key32": "3vd3VbK6aUgyCP3hXTe4gBHTXAPJkpUABoWDbGHRcEggu1oFHUWSAvaLJHh3DwBCEz7zEvaZdxo2WGzyjthooNyw",
  "key33": "3RBAahMsZPtbA7DvvJxBqicP1cp12nDHcephDJ36Ed4KdvfxbJi7ePjHmjZBCo17QZ2psfphfvWKbnJUjRrqQeDz",
  "key34": "Wqjak4cL7XvH7T3RmaMcvBopW3N1Gmga7NErwpfoZBPNvSQ1Yv5aMHCE2PCFCY1AZrHPaZoNnHF1KQoGQpyf2tH",
  "key35": "4KdfRvcBGqG3QuhH2HaXr1S2NCWSmGRTFrNTK8MJgmfzod9ryxr2iBhVnReg9AVv5yhLem9H6KpwmYKghyfdyyw6",
  "key36": "381sj2ete3pEny9xGnu71yjndcU9o5v1BgUWX37Usqd6GEEEjtGB4kcRKk7wooSYrLBazHRnJKz15VxAGvMv8X9z",
  "key37": "5qsDyFBDkmwpV8tYmFGiTDP9tENdsNpq6tdmSmVG9AkRYhT653pc9vgQdGzkDVqvg36ynXxYvQizkijVoog4CqA7",
  "key38": "7Q5c6hasoxcj7b7DdLvqW2mmNDr5TwJGZZnic74ESrJiEZ2NEjWZwbsTmWburAUfpQ1oEZoLJ7waS1m7ExHLvSg",
  "key39": "uxFQPX2XRJ9zMXE3avj9ySkLszKqNhUozaWAkReD4pHuY59jJMXyF67BrqeRQABAL23sXX6gUMtY7ACjop67fLt",
  "key40": "4RPejqQKufKmM9z2q1REUFX7Esch2pW8gb9EEGWK7V4VnMj6onNNGF5JFaKUTXgH8sDykyhds5QSe9SK7EA6poD2",
  "key41": "5drY3P3Wvgtr4ZyuDMJKsy2TWwRZdZrLMy7nTzp1J2YBGWGc963YmX4yFxtjfFwQvk9YGzR2QbtDX1XJwAWLY9yK",
  "key42": "57zBFKpK4AZfa5eyasmebty4X9bH7wnLmjA4u9x1qSAbv1xEFAbJDzkwnLugeeb9yn2w5DGJVHFW4Yv4yX84wJPK",
  "key43": "3wPm8KN6esG8C5tGWxLAXRJAC5dmk3jJGtdFCZC4JjJSHGr93WBmej8bomM4NdQWRDzWKLdmmJ8mcavzB4UeWvNz"
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
