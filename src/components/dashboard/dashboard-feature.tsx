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
    "5vymmvs5exsKnn9S6XPyGG9NnvLBix5nwV3oA54TgdrycazX2t12zBFbjL4uKbrxEE9xCyk1HCasAbxfSr2FkSCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ukx8jSapqLrtQPjji6sW1pPkjSxRushp5z48zR8pFbb7GvrMxToVbeNx65UwNKQaB6Mtcin1TAwEKXNBbVubc4",
  "key1": "C7SqwGgEW5LCFgtzoKsvQYwwXbLVEmMTDw15xJVKzrPjK9XdKswf42zmnnJ7wuN1hS3wuEXjoBPHWV1CCZSGZWC",
  "key2": "5f3QTFqtLPvfRVumuaFbGR6CzGwdKrxAa628rYUGpQbdDUqYK3zhokqQ8dicAtrPK3cn6Y3dHh7ux5VcwdAw6fMQ",
  "key3": "5FKtRNnoxkVwTH5iEZhMBCbpgx2bNSQn7kpTg8ebd5U27PVEdki4Mt7XgkBe1z2Z7ddaZiyNwVaijn8Xxe3wHxbM",
  "key4": "4R2s4YV3FUiMErV2YjCQUCVoMoAtYkvUGkUeFxdRvpUvJuPbkHWnutDw3vQGVHmNVaC7t25FyxTquhS5JPLciydb",
  "key5": "4d6dFNh4DKp2Hx25nZNLv27WWXcrmz1RQGbrkuFhbtm9xMxipxAS3rzbQok4P85CfWyaeTKaYpKT7qMnEjzEXaRR",
  "key6": "3rj1v5zFvU7CqFPLmz3KmHP9j6L9ENa4wjpZ2HyWeXTpt2PtZH95Qssdh9HeCFx9FzLB5HmfaZSp7WuaTarupYGQ",
  "key7": "3NgtTm1dxRDqZNANzSVovEpTtfiyFet7mvkj3Rhyw9wWtrKGESdkUfH1jhYHzwLbpzDpJTP3outQRLTdK8FYCcoA",
  "key8": "4EmpGP1z3sJmm3mikBGgWrGkXSQAxBGQgTBytEBbuyEQVW5E39yqD8LqMxLKr1SKgv2kr2WK1xHuuLAUaYRcyjRu",
  "key9": "2BMw3nqy7eJTscfLZm9RyEhhHLfDPjko2MDATmZdRc8woLPsnL1rK9R2UsZPNdupnKCPe4wQC9yjp3PTYGxXVXfo",
  "key10": "5DoHb3oSK6hzuF4H9W9CNm9dzTNE4Z2g2DKx6MstMAZyCzM1ihC5EiuGHCJS9VLqATpsXNZPXB1QV8ANcac6Naph",
  "key11": "88TGoxP7XrG9VHnW4cqv3VHT2X1N6dfk9r6RuvvSTutzSC2ZGuU26DP8cPiq8yXXq4aQt8enjae9dNuzwbEGzcv",
  "key12": "3ys2JHQ411g9n5kpYsGDzyT7v3pLcMNE4peyMX2FgKfnB5BX9kXowfxqLoQ5yrQ9PqrMbnN4vjShGKY77uG7yiTS",
  "key13": "9TugoHELSTWuhQWVfbvTpqcTWXbtn5oPZeKKzW12fUkwjAWRtG5apT9S2e5niaAo8LaEzi7iJJgg3SHGPspqBDC",
  "key14": "5MyWTZWm9MA3JW5NAtc241yzQWdjwP5rK7MtgbLwxeX4EhCijKms4dvurS9mF3mwQnfMAbVoJH1HKzf2TbPwfs2A",
  "key15": "57PU2bMUe1MNnbET9kA7S6KzemP8EzhyKVHYhhtUaVABV8VgEz3Wt8Z8KX9XU7oyVqXthnDCezu2iMr6a1mxaG34",
  "key16": "thYMicuzxTVQ87gAtMTtiwdeENRa711R1HupJTKDTWMB4LW9zqZDH1eg6jGvTotzZPMFQ72nZwgWCF5gwELFaGf",
  "key17": "4PGhb4U6vQpyvS5MzyygKPZrKortEsVd3gF8TmnjRmNi11NEgveWWv1c3XKA2vwpgdYqAeCASvQdoTDdu9dh4ZtT",
  "key18": "2rbnEo6Ag5zeg2zWuWEuSQxzJcYKRRtUhYyW1NkN7XAnr5thqNAiaVyJ9YtnUmXFWMrKpMTos2UFT3vaZRo9LgxX",
  "key19": "hktR3KTiRKRi7hbsYsatz143ZSU9urHkw5NM3F6s8tRxaNrqYtLtkdyoAYAfPUrFYeWLCbykYRxbgsfhVJ7SAs5",
  "key20": "4jstUc5DuHQK1LRYu3YbLn9m2YXbUT33GMyWBWdd5iCAX4GEdLxLSrFyrFJvyg4cKHMCNkvAzvTn7RaPr5nT9foV",
  "key21": "3F6zDPL2vR5pUBU6g5jg3emsJ38bDKZECbQZkw1qaWrRavczrojFzdpqVwkGrsvo85iEYy2Wo4w16bDETCQK6gUN",
  "key22": "mSJmYbd7qWXGxNxvq2cFQXoe2zeWTm5iT4wCoZSSYJZ8B3KkR6as573xLBKT9dsnwY4ETnzv2KYSJb9jYh5e45b",
  "key23": "4LSz8HbMxpMe8gqXcaCoJFqGx77tp9HH6eUfS7v4pFBvqMiREAGfP4HNe6giWE4oULSEQnXqMmGW9JmtccLLVsw7",
  "key24": "5m3rLMW4YHHFR5vudjJSzb13ndWoJKNeXXaHe3UYiWvvSozaPS1pYG7HS3f2BCsdsCWr1bPJzPTtdqfYXRQDuX1K",
  "key25": "2Zk48eG7ywstCM82UGr2VuJUDnCUastj9q4ykNDzE1RS67V3vcHtTRpU3QJRH3pNzsPsdqp48J892UDfyEU4A7UB",
  "key26": "57WHGCps3M8MsQgjNF3deiASQCWMiBmLjfBkyXpaCSk8dZrnm8NX53Ey78FWfqFBgaB5MJmDD3FhGUoo5Biw5xTu",
  "key27": "2AFWxPaGaoEkdGjUMF4YVGU9yQiMofZrc5h2ZNEuEbTG78rENroanxKJAW1xPJmt9PBJfYxAaEGk5vMjPUNbJJap",
  "key28": "4FRTDdAHUjdf46oazEraPEJFfsGoGPjsx3wQiMUKUnssd7g6F4evn2x1bm91GFvQv2TzwHsmjiishi1feToCYsr1",
  "key29": "4fDM3F2eFandLdg39iGBJi9gKozmuCKj8Ai4oHba3cvor1rDPUSGELzHy1DMRX7ZyAfvSzpFNxNSza6reh9HEhav"
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
