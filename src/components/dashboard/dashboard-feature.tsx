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
    "4d76qk4JHV57fnFyDAHnJSi3jU8PZ7DxeJ3Jk7cCqhSE5QMFrnbqwcGFX1AJRjqCaQKY6UuEn2Y78G3CTuR1c5yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJcPpXpVDNLfasPsn5V3NXgbru3Y5Na4F29aNCmpSkHeQAQstAi3pULtCB9GK5cL9UKxLnyhB59XHosrsyZjJkh",
  "key1": "4v8aAdxsQC2A9xnLPtouQTsdnVvU78Nvr9JHmSyBD19eSLw77gAWDxUd9gfeQvgDHq6MGVT2TKpSgvwNvV586BCv",
  "key2": "4uFHKc6YxVbMoGDdsPG99dnGZSYZN2k9d34p3kwvPomaAGRRjhcezFS2AXb4n2GanBjpPGbpSLV2mk8GJASwXqpW",
  "key3": "2xTNDWX9pnT5tT7euzLCA5fgvFnuQanYV8kSUSRp4M2UPWnUNV2b7JthL1neGDLehVWhked5uU5tBFiteg8qdmeY",
  "key4": "5QFaoXVcZJ9mNhyKNp4R86w5oBHucPHWk86mLFFXP5jfQsfmFJqwzKkwTyJ6vRGKnLMRNShjktUZ2eXZyqdGwFkH",
  "key5": "2cCXh3PdBTFF4yn2usYpQN1EZBJhxya2p52ph7LwCq2LaNwqy5Xe14yppZFR7zjCSLPJuzmUJHYQp8WE15PtxVhh",
  "key6": "2izUkWpKTKjDpWart7CBJuT2gmHGGsRG7H2CTKyYagJo52w6nDS3orCn4AnS4UTSp6LQ16s4ivbLmgrF3rX8BPWE",
  "key7": "3D4YefJuh2q1VzZ8ZRVopHVUN81D9mm85b9nmJci7HuK5zYKVTfNN6oVkQ31aeXzsLnhgEHXNgpQmEpsUqCysMvQ",
  "key8": "4wXbdph7FEsr1SU2GHaUKaov8UpCRtAMFPaTLXzahv21B9wN7ytaRcXmTrdbQRW8Ha392bbDa4pp2NGUwcovudm8",
  "key9": "5DN9eNqoKsUkWAuJRJ8BRj8pW9v1s6ueMgMr3M8SUU1uSz1yuLzwDER5W2etXyudLmRyNhgLJVzSdqpC1RpoHiFP",
  "key10": "4p7qJPVUiL1nyDUD1pvwDUWAcQhj3JDjNLY7c1zSyFQ3my3Aic4j2nP8kckM39xneQHx9yCi8dQPyXfdu7jVHtKN",
  "key11": "31M9fvVnWqCDrJCJHvEdJqwejR7k1BNhDCoRM7kbXgRB8HbSrXkQHRHuo5sgyGhDQypEDxNvNUhK6jnrKwsREHGT",
  "key12": "3whHZau6BjS2dMa2DvsmWr47wRELsnGdPFEuN6zphU17cDMMMvQ8vVbY79u2TffGZqTxHbXSnLkPZmZZoY5CwEqx",
  "key13": "38ckJRXRVnWqCXT3u13uxmcBv3UeoU8aeHW7mhKEEjpJBAddLzKCCTPcfBBZ4DtgviLeWDdq8Pfcarjuv8V4czr4",
  "key14": "4GaRH5aeNQwNxEtf31MtTjN6jyFumuPiQTCXonvEkceUnF9dbxPvop5kaSFCseE4Yb3P3VhYgEACTxFRcwG8rFU",
  "key15": "626gnvFJsd9Xd3t1b7nyHNMnCEJkAQ8oQ3X9PAXHTawFnNA1vWdV3vRFaTDgn2on5iaH3Rna9zy2D3ZCC38LQHrF",
  "key16": "3RfPzn5pYmJ7y3MuoV7gr29JwFjvre3bK543j5aR6BEJfh6CMCMtQPYwcirZUrkxsv83mMyiYoQnsLGABc5iVD84",
  "key17": "4v5xkTAiMZ8jjudARhQJHV65xbkBL14cgoXn5mVHMXwh6ynkBo5XjzyA3eSwGgfhdKRxs67d4ZncwkRR9Pwj2baD",
  "key18": "DFk3hetfB5emUPsbS9y3D5i6Nyb8PU9rM7QzPL1EqQE3gJMjgBxkyKVrZJwRppaAzcNBs2H7C7apXGrfoBMf9d7",
  "key19": "B4D7CaCeVwNnSPRGyzZTATaHdR2u3cNcwG2X9eziD37k7ursEJj87VT2XjBCyaNkEowujuBraDZ1xKup3SMuZZJ",
  "key20": "3Pp72YHvpqzZC7DVsLyF9AMxAzW2SiNbAwz7FXeHCHaR8giD9zhkDgPd7oBQuhdTJZoPuuimpWbUW8tFJiQmGMak",
  "key21": "4LEMphuQyotTC5Cy4NNdjvFcjQoitR5nq7L7osbYsA1N7ivMAC3dYecwE4NNe3bqj23X9Yo1VMnryztSzbNxsmUC",
  "key22": "4uHc9qbYucLywssbaXgF9s4z7zuBWK2F7nv1xEkGx7H5jSdqerZPu3SMKrvF3gXw59SipdRKYVA9ti6ZizamCBXg",
  "key23": "34MgDd51iVTX7eN5gUqoK2fFgasSsrenk9MS6ysyoiZ7mo2P5axb31FjepitrUuVKCd65hCd3Kj7eeNzvLgZrPNN",
  "key24": "2zvt45gUNZGfXWmxTEjjep5Q5kaVpoZZcDTfBLZNWjeBRdWUTBkuB4BGuaYoYNXmkWRA1krpgF4z7vtuN6qazBnY",
  "key25": "2KuxBK1BjD7DvKJSnW4vrjSSJhU5A9cvbu4DRqhLWHiqzqQzB2vjMASwNEW3M2EaBEE4puGwEk3Ko7oBq3WdXVfA",
  "key26": "5CMwXNf1nenz83gXJhBC75RU7MF3cihSUkdfcRes1Hej6efupkfEL6MTEMWoD5S4aD5713CXDEq55R1QenmssVte",
  "key27": "5U2mpXFqtad6EZiGXbi7DaRnvHv9fwyrGCTPxTNUBtNpgg7auNfik9ZXFHJrLEAjH7GQYzHAU54bQbuFTQy9N5nY",
  "key28": "F8o23a9A5BMYngqkeT4pzMGX73RxuXTU8h44999FxR3e3oWUeje22TqtuHH6q9Ze9d4xDHBsuDZ6APSJ9suN43Q",
  "key29": "4U2SL5dHwHAkZ1w4ScCmHyJjyZY7aTCNWFCQdJtnPCVkB4bHm2xiwDXpWUvELPBij5qnXzFbMkYtygeU8Dkwjxkg",
  "key30": "3rUy5UmHDfkath83Hts9oQaGzk8RAEV8XznmswCz62qyZ7vtvRXM3wUdyEbYTLwU8caF7qN6MY8xGnneTkKaEY1p"
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
