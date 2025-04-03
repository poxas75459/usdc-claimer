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
    "3MNqwSEVktxFv814s3y5eN58uzEFy4X9VJHHDS6zv1u59VDJDNciwV2b26fZucjsmh2ckrLjH1zgiyCEYnisNch8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jo7uPvYs6SonAb6RMUhTBp7n8K76CmLDtLfiGCPu5BJH9NYKVLVdJfwi63KHcq8dLZ6JVHdhFiXgPBfVzyzDf1t",
  "key1": "4RTXP7xnNG9YgGeseik6WLRmEkd1jNc9WNAm4KcjNM2wPfm56X7zSqcXJykTBVwkxed6ozWXnisApRhRbiUBA2R8",
  "key2": "X4ggKpV5xsgGPLCrgyATG2r5e3rrrdnAUTYptk3y3A9yyEnPKYUbGYkJqr24h1dRyAvYJ2bDVogcw2mpJcFr9aG",
  "key3": "59rj51GMZk6rodn49JGDB6G9rXNPuMVsptGW3JCG9vPVH2sULqtjhc2WWhEQ7DhJW3ogDFikqh6RiR4hiGh5tx3s",
  "key4": "3W86bTvkL6RjzJFagPSNjcK7AvdiaaeUCSUr7KGtsut6HxME9BWRX6125FxYxG3UmabPHdDFsQpkvYzdzQ4qfB59",
  "key5": "2wSHYfe1ycnVZdqCrgoJXVRDuBXm2bWHXmKLz1rXkRoDHypevzw5M1i1v5KnytmiWZakNTixjAsoYeb4wufLj33C",
  "key6": "3N5UCwkTkH7PkNxJcqcvuYD9fyuZaqt7E4CLrisS6RNmeeTL2BPesHC65wKzrhwPfsXgCmcYsGejXABWSgh33go2",
  "key7": "RMbgB6tedWXRNSbhWHB3gMGSET9tBBgeT2sXvyp2b4tSZP4yuAiWz8syZ62P8gqYhujH69HM9nJLjudWden718N",
  "key8": "4SGj4Bcji6qaQBRqpb1iSXP5FLyEK9cXf9R7UH4UJZb4Jr5v5DWdYEszZgfFDgvEer2PCbdKASafQoGSxkejMkRq",
  "key9": "48XMJGxDXE2MZE5jmeBKnZq3ua4nKb5QeGnKNiXsQhe7HPwoJiDqNXMo3WTbtgiWPRGftXHP85pCfjhi8hDZWAuf",
  "key10": "5edpkWNF4JrZKWF1ffSe7utC1PrW8yFTR93UA1WQdLFD1L9KWrnrVQUF7oe6SyC9m7Br6mREy4YUWRoPTNWQ2a9s",
  "key11": "moWRfrWyWXCZzTTaaiKzVV9bG4GNAy9xL9YpaLwMCk9L3YSDuPTLyrjhHYoBZvFqaxy9Buz4dwYsrvzueYC5ifF",
  "key12": "41km48J1fqBuxjfrxz2Rw4vv6JUAnUyg87dSs5PVh5DtXrpA9ctb8PJjKNAocMZUtJpG7VstCMUm1g8MZo8W6DiR",
  "key13": "fAZG7bB7ZE3MKeu3345xa1nESGKWAjcb5wjziuv8nb4zzncHx4MEavYmGJUHH3anqViR7wUV8trPMxRg7n724X6",
  "key14": "3DX2yYX33dFzMus6XSdVGVzo8q1gaoheJ5AZqsMmr4b9PjvsQcPYeenD8enSZQnFDqWVnhLK4Z88Fg5eebk2Qp6",
  "key15": "67kzzhajiaYTfs2d6hw8fBZ6sMizFqZVhuYCgj67PNqghHNesN24eJ4z2Vpj5saRNLwDLDfSYzu6WBVwgYKjnEKR",
  "key16": "475zdga8UMfdoW21Z3U8zwfHt7A9S8TDKMRL6sfPnJBTreHPuPg3BRWaN8ksZo1vhQh8BiitVzA9Upn54K9dyqXU",
  "key17": "24mkPbrLfDH3UZDMqKF9t9G39RT9MtFGNUs95wShvL7Jvv87rEGwVYJHD8xYsDvNa9bhDaLQ2DtU1itWtuoq9QBb",
  "key18": "2YbZ6vigZ566vA9LqPX4qUJxasPm3WRHMVw6BetzAZCgR5WM6nT9vxZqeeXyC3ntLB66dceceqoj2ftgfQy6ejr",
  "key19": "yeHC4FHMeMF4Bh6xHjwZAnGzp7vwSnh48C7XQhg9i8MFxF4yVA64gZFGHeZatAhhxqFj8UzUaV3mo4c7yhWbZDN",
  "key20": "4rsXBnJstDzUM8H12mQ1TTvwKyCAcM4q7vZjQXRuBDoScwzUKpPBCHHftydMvYFHopXFcBFyXZpaC54HFivGzRT1",
  "key21": "5DqwqexSR9vzoXhuotZRGBgPnBHA2wtwxWZSmpaZm352dkq8FHepGNiw45rK9Hqba89EE23AszHHozSvKDc8YhRB",
  "key22": "589vYfZWviLF8HSKRMYdxb8hmtbJnpP1fyQYHBrrb9bb9Cvr33MtPt7ZiZRuCRHFqzYhP5m31mbWbdcig5RNVoGo",
  "key23": "S91sqCDW7XvuCeiQcPbYrJ7ZGVvmVoTHiYbt1REib3HfJ5r9TBcpzCdmjty8YXq4egX68GoEX3XEAAEA74K23Ug",
  "key24": "2MmihLrGn45qxsXV7BM3PQkPKCkL1ezxkBrBYeofpkvXCCmrvnE5jzma37k53NefnUxePVPGAYynWePzzAyNLBmJ",
  "key25": "5dvPnqqMaWyNoHqDqwC8HyutEF2rRwque648rmCum7JcddSkKpkYMUmfExRH4S12AZbd4ozHg6qXuGieg8Lri2SJ",
  "key26": "3cdg7gfW9V3UTcmh5ehD3QVuLCjaSmPqYGwqiAX7GoVvCAABHUC6qkqovj4XrwX7nDiAgb1n1t1nwgtsaWZVD459",
  "key27": "ERvY1xWhbzwoN9fWjSK6qATCaMVtq976McdYSDiHGtuLgTqjMYLCPS5BXWDrRHJwWP5rUK9EuxduJE418CgGBMR",
  "key28": "2KNSYo6HWFcpes6bjmhPQ5ekHLxjkGmnG7ZMcfhQHzrpqe5deHSkAxWEXFpTHokzaK8kp6szG8XPdgUiecqDQgJG",
  "key29": "2TmHVRtF32tTvUKmynvwm7KmAwXK72kBy3YuvrGTvbUFMTcBomQe573s8Cv4pLiQBus6bJXPD9SrZn7oAj1DjdL5"
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
