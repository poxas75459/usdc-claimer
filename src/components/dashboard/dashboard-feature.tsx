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
    "ZryYKsTWj6qSgfMT3XBGi3oN64e2X83u87g2j5xVUWR6XoD31wmCTLAQmw38XNFTrjq4hSky7UaeJWD7uGYPjTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9jzgrrb7iiXeYarb8LoFvNwcPFbsKGt6Ewg42osTEfz6JctFuht9DF9eMoY6enuswdhGTXjdm2C3hTmSSF8yR2",
  "key1": "61QbrzUvQFvgryrup1WGcUHqTgV49F65Xszi6PEckgC27N7NjSBnUQbkbTkhAdwhyKKWrDTmfEvX2sdcqHAKEGKJ",
  "key2": "4FCNDtGrahLEvbUmRqLtvCHYjY9CPnWGapWavPkyF8nAAaFYht4nPPLg64wFUXL5WjzAioqWrYAjkHErtKi8FxTw",
  "key3": "5KaTRkSUZ7ai8te7HwX2Xtf9gxnykXpHd8n5KRbySbezRLHgRQG4CyKfCrJeZRg6thzibi1jec8vY3sAtLhDay9u",
  "key4": "44kZ2s3foKK3fNq59vJn5s2AFAkXpwDWauidvswb1Hf1Uaja9Y62ruDbCCdA36iVxH3pbnLGUJnyD9uckmDy1z8e",
  "key5": "62ttTdqztF3r6t8cAue8aDcMj7g7ux1HZtxo2ZHxFS8gn3BjsCfToxaj624kJzDgKpdK6aeBJ6jQPKn5mjEwuL5b",
  "key6": "MoVpzW8ViGKVLNfsTzCmP4BZTBB9aR2p81Xq4U2HSfsdFujcbEBHdVqYbWUv9PbyvUJe2STETmRft23HzVxCa6Q",
  "key7": "7PiAVmdA7sfbS4jFgFTrg8hQ8L4ek6qV21viyWRNnybpbMDCMh16mPbvf4WSVAyv7bZTtkFLHaeFPD9pvJbgX8n",
  "key8": "eXxAA7Fnj6aNJAKmwGQYqQYpdWxsKCWHXDRHCucW8fmq3CyTfsFFG9ELtF7FvRD9uY1EBfcCD4KYgCMDStRvGXg",
  "key9": "3Mztvu4vtWQ6Ays4udWF3VMPU8ckBvKx5GNQmZ6Yd6eQeJzLPKYQdoX7EDZdAdurWV8NKGspwzs195jgAmG9nQeZ",
  "key10": "3BVzGSTcTVArbUmpakh65QC3KrMcAAGpbQikFx8zEhygHp9k4xHhNBXEVpyGeYTBndj9XZ8m6w2DSARJH3UDVQyt",
  "key11": "3eWbKxZzixaSNDUwgf75Yc2P9a9Hop7LBLM91MzBQJrubEj4XA7GPwhcFhSBFBT1Mcbj3nsxBTRVaYfXteHLxw66",
  "key12": "2K1pNd3x9oRjUZRj29ucHCsaouxGKfiLam6Y8KxV8TbfDTGwABSNRV8JZY4z4oeA1hr8n11SLDnKxDBpSZoi8Xt7",
  "key13": "uk1Yy89Gj7VjQSbaUVctq2rwGdNkDsSoPm4iLEzu7bB8ZqyZLEMYCw2Sm6gEuSniEMqT5NvzG6GrGDVovVhzJLp",
  "key14": "3KJk6jvSxV19QUDDNKNqBJPodJYCBy1WuuFqzFwnej3XnRqVWLFW668TrquUc6kvgTkeSfAyUzoZfDQcXUzkRWGS",
  "key15": "5EUT9vggGXdVWXM8FHzfrkSugj3h2X1RKev9hfUfBrYWj7xHCbZ6Uv1ANpfcfrGhoLPewhX2v5BoXJBUj1YeSr75",
  "key16": "d9NL3EUgsMcE9KWsiFZj8N3fUeu2vDEhRRRc6Xym9eo5ALKULFBYrvbidjYQkBNt1FVZB7RDzrkeuWsf84x3pkC",
  "key17": "7ADEcGbyw8ZEYYaUGeoqQNmYHHV7ai8xczk9qqT83R6Pwy28uXVzm3p4yf7MrPiD5K1MwpwXko3Qbh3aQef2Dyz",
  "key18": "556CT4wBC7qpX3SnW5Rn5GbnKpM3eCvnRdW7r5KVyCsYFwocKfiSR6CbH71rneSQWRvmHj9bYoBVCNoCw2A1vmHU",
  "key19": "rxV8koQCwT4tYnWrPXWBTfRc2NZvFex7iCJg27idVhWdxURSCLa28CcPs9JU6nfakPDC7vhkwaPDw42nikXpkYf",
  "key20": "4NvRmqLdi4ReLiDhyDtsvmDiZPgm68Vr8bBtV3eQfnGeeMMCFnG7fGTPSTiLCJAgXC9ragGWbx3g3PanHH4k4pu1",
  "key21": "2Kr8ctLBUmJhE1D7oF3CPRWN7n8257d3uAiYkYXV3kx1fucaiSYPXczPzzgEt9a72UxdDCuQwyWwWp18gT4NuAb7",
  "key22": "3r5Erm2PriGJdhaJBFhQuWe3NnySB9uYUchexpyMasMe3NNeqNwRtYLo8km8NdwPFEinggonRk71xEqyxLEYbT41",
  "key23": "WzREBu9yrwqJB4WjcR4nnjqxroHiuPX25Z1dLfyAhPCtMpXnJvKzMMqXcn6kTNhX9KY4FWmTWu2HRru8qhzdYqr",
  "key24": "5rkraBfwGepyJHixtbTh27nyr949mA5zzT28atTYd8orChLEiK15bDjvfGD1kiiqDPux8bNvXgxG1ceuXiH7UpMR",
  "key25": "5NES1bs2BVfsxccdU6BVDNCWr9BmxVKqJK7B29prcHbEyi69yxP24m1quSwyaMBZNr9DZxd24vPuqEUE7EXhvHRY",
  "key26": "5LnVcU47vtTqN4G6kMpW8vkKzcVaps1bAAhwNjtM4CbUrXrLBe9P6DyTMcnRxoFxS2Zws2nN93rXtsjrJerc7Jzd",
  "key27": "4RxzfRJaH7utJsuDaeQYNBHj2y16ZQfujUjjQJELRduoDiYYiGEXdBcmwVsJ4WL2nSptGbJBVRKecNN9bA5zHRxM",
  "key28": "33GeQuHdajNh6zAuN2jDj3eyHd8JPF4vaeFSEVvktqXyGkYXGQ6ZmhEf9qSsWamyvsbMssP4CwadFafAF7WBBFaY",
  "key29": "3UPnYSDQREPWCH4awDJUn9QB4KgpkyxCjMdPZXNrghm1YW5pgTAZRRns2cNeRL9QYXmxS79imb7ck5XZ9a9Fa8UJ",
  "key30": "66b3wiGjybqekk5kmGqzp6G8vJ4XaK6Vdu8GJkWm9KgssD2kZFTgB5DGeR6rtD8THucrTGbi4WnVeuAguWEXRgZB",
  "key31": "2iajMX3xZMcS22BXzkunWX5JNmXCsYSFpsusELv6xZZff18iYuJfkTJajs8tJDUqKxYV3W1iAoTUpv278UPT1N4R",
  "key32": "6T8GpMg3KTfu5Toao8URA5NHLXirRbo4btuL4JXQUAQxyURRP2jptyP7bKbRYNjrcpg6dSmjDgVniddwS7L1SVv",
  "key33": "3fmu4Dw3LB8SAeN15LooM9brZZwKk6RVW6VXWMVXkrV4zQGJp3HgwCGPvrEwiV5Z7LnDcrHLaEhh34jsnEdiF77N",
  "key34": "3rufTacn7VsQmiRk1hANwjNEHjkioKVwNAtyB1yqRvEGZrdZagynvxdJe7FDwfrk6s1TmSZ812CCYobGpvVsRB2z",
  "key35": "2eY178NUaT7woJRB1M5fnstoJF2F5wC1TMCMUDveSQ9P8S1NB7ZK4xWwYmJksv6v8utGcQJ2SSDXkwJGCapCjHde",
  "key36": "2ZsMHjGB2kuHMJpAeCYRR7z7WiqQkUPetWBmVjMBAf524zXAjBwFr9c1wxE99gQM9foYnHjQkujAgXBKPcseyj9t",
  "key37": "2cujMGbBX6HC1R7brK22QA2aJJEftmdiu6t1GrHyKMSLwikqKDaVpx4E6uED5PvVxS8qfMBx4j8rKBVAgnZLtGQ",
  "key38": "3rLxtzPPSkUHKnUxqSRagQDdzVNdGtiBTkkB9edZMN3BKfpeVTLgP3j4DmHHcrNTBLk9cNV24qt5J5sfDsKeTaTv",
  "key39": "29KtZB9oTD5hLPtqkjfhdWBhjcL2V4Jx9rQPL4H9nCz1GRMCswCDAqsEaVqzALCo9fLBzxKfozgmrxhCGkrmMVuw",
  "key40": "k6qbJDZznd3k9SNJmEccEN5cuCNaWLQP7x3CSV1UrweNcm9mVH3A8enT1oyauLGFq11pTW8gTnkFfDdSG85MkL9",
  "key41": "RdW1yBNUG2WGXfsW1kotbaihTzK4g4nUqJr4mN1ZPaNCS7KyqRS11hRvbMggXqRw1bZD9HwaQeUCVvDayvDTq9S"
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
