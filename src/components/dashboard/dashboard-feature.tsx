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
    "4ALFsgtGydWsi7Z1J2tN1mKxmwnBubH5VgGPFPT6p1fV1JTfVj26vkcfgek4qtmXbKwfzmhFUcAdmkCb8RbM7SZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38tGh2BEkaN3rcmoU3skWxbZxaoCwRBBopsD2oEM1XJA92eYvFNCk66xx7pEZ113ZNuHwT4cQyUDyfz5SWGdpwzU",
  "key1": "5ajFxCxiswwGCyHkF3Yw9EG8skMrTnK7YEZLs2e1SJsBYf7LGcWPWUMEShVbpC2WaJ5NMNEHednzm5z75FPwmfv3",
  "key2": "8taAHnnAbbYxVs4xBfNSTpjPw6MN7t3cV5VBGvNNNUYcwy2gCkdEMNJC4gxtcj4vkTUXS6JLLThhujSRtnREWN6",
  "key3": "4JQYCgqS1Rz481t5NuDMn5aQRU9eRLRTypXN4nWvoxW5MHBPftJaKzHNN6tLoHrZmpNVWrV1BnP869itmnvSMFDZ",
  "key4": "9mCmhBf7MgnbxUZMJfnYoGM1JbRtW98hvmEwhDJxgDwgGUJW7scH2HVnkwDZ6ZTPCsvK5WNU5ro7EwRX585o1EX",
  "key5": "2qPSDSK6PiTjdgJkj3zsR1TWukSV7oAjLGTtC7FDTEHMAihPZERcGHKwoNDNQSbi5xC4R9o8S9oMSFt9qss8MyL",
  "key6": "5qooQnwc8w2emfKaKwHUAYzSnmaZJB5NqamBSpDgMszpmJVgGGtMyC1fRSSZFgYDnheTbq59cCL6CPnT37BxDD1p",
  "key7": "5CaFijorZzdHJ6F4Wsd8p87zwTU3yvxYdRNb1rrpYTFRFcPozggDTJXhdNc3gq4typK37gLEghSrBhUdCxibQnHK",
  "key8": "3udibW97FCxmMyjM427eAVJ5qMmJPhKtxVdCekkWFeTnnyExMZBQauTaXNrCiUAtKzP6AegAWkXvqg4Nc6dBRmNi",
  "key9": "5QvHwJFxNyxNPMJqah7x981TEFLQDweumHXsYudVaYXhXahyX4WbWEGY5W6nDAv1yKamT9KajKHET2JTmnsUEsKA",
  "key10": "5knava8p76RMySVgN1531Ty2psJj9GjR4ezBPzeiwMvMHB1NyHMcAaCvx9Zx5APEBbuegnybaEKkpasFjAxGrqJQ",
  "key11": "pS1iendvREjjFwX8G52cogJsBxxPM26joYdhyy2qpkJd13ZpU6JAqLrQfk44QSGc9MWo1EDMKQAh1KJxpezS2F6",
  "key12": "3Bn9vXCsw4TAQAua6Lkp63rVwmgYiKwRACDKJY7srkyhe5Ez5Dc2729XQAdnwEM2DuWT2qUkaYF8ehNn48yKv6PY",
  "key13": "2XH4HZi1Sc4hbpqb9Nn32tvz8DZXzpJvEgGSrbBAewBXy7NqwVjUx4fNedSXZ2KXk5Q1Sa4LtR4XPs7wcnQz5fLQ",
  "key14": "7jSLZ8AMBS4LGdHg56kJn6kRsNQbLWqV4uMQQXWxixcbATncjyqsdxLjNFA6ubzN4DcvZw8KcHJs1AuKMqXHB2q",
  "key15": "4r7uirGR4iZyvzpX2QkUxNkoA9C2oCFA32fbBdrUkhqa75U6eHtmPnzrrgB1c5N4gPep76oxFYedFht4h4Xtusm6",
  "key16": "4eyfFp5SQeeSubZujScCUasttvRKGAFj9jSdQhr8YRJeMHjsz7KNmUV7X2tXq48dyqiaEtm2jwc7ysasZrwUsmQp",
  "key17": "4GboMhCfLTC6cnLoUF8XVF6947WDi2gkCc9tqdx2X5347uvY8rgFsqPyxrUkDYsiYVt6DBFtfoEKL8Jg2oXmjeHj",
  "key18": "4ko3v6NAnKRz6JtLHcjUf2yNj5U2agZb9NbCBv9wFcVj7QoGa9JZHbPJMeHC7x3ByikDs2H6SgXPZTmovHzVFKY5",
  "key19": "2dRD1UTdDn3Ci9m9DdMfQT9qaudoENAAMzzoWuVivdFS6T7EPRkZyvwt9tEZTbvMZdVwyREKXn76ZeaNLCinXrtu",
  "key20": "49Sc5ihxTEeeTeeinL3yhdb7kQVGkJ4VMdcL7bjTmxzUCyBA9D8bz4At7PuZzfJcKm6id5xptSSt1bYcEJvgjJa3",
  "key21": "39S5hJUkKJMruDBvE1YfpbfgCrXE7TWuv5RD1M1YVfk2TuuVsjSpYmgpoyzzftPjFZogQ9gamBoEXXfgx27LtY52",
  "key22": "4K8XMFqbJKmJMRNJExxA3YiVwCTrxwLJYj1dGhGdRk4B7kKPBZwNEGVdR5TTL7gurL6gwgwwAyBtZZQBapmn9c3h",
  "key23": "4pUQbzQXs642fqtqzx1fcGutmhjViCb2KWqSJMbXNiaPsHTgmwh7kytBjgif8c7hXzMafefMdhCq8ybznbodfhaq",
  "key24": "25H1my4BM512zZdvYvjDdoctUJ1hD5iyPPzwGo9GAv8d8T3Xq7u3WpK5EcfTbcz2K95fpjXPrjnpyYQMXiXQJWZH",
  "key25": "6KBXFHZ5eDgJTrzsMcj6gKv3wqSqymDPMTs97EDVQ9EifjCUeMR9QLpmef71LpqKNXHLgumjtZcAo1Gx4GKBrmf",
  "key26": "5DM6g6T2JWWdgqr14h876bJjBY6W1kqdsj8aGDZSz8g7HHWeKFAGZjfm1aR4ucg6FvB2NYgoh6X5L8kKbxVncre7",
  "key27": "4cRGtFki7FEucahhLpr967uAD6DEfapDZStfyrcCGgXJALJLbDod4z2sr2SBvam82JyQPjExhcVG3acqWyjx3zDt",
  "key28": "4wvGWTk82jpzMoq5wqyRTJaPqGkWV2h24cBWjQYw1ngEMLQsUHmFsh374mfXrW3to1mGW3siSXQ5eUazeJTUD3MA",
  "key29": "25C8vicupXHtkZfBKijXL8vBAWWRpg8C7uPQopi69iqX1UxahVKU19coaGtiPxoavKADZcp8xqNK3yAb3koc4Bjv",
  "key30": "4nyKbLKQTBXBRfjLeCC5MzzAkRufP1dp2kjd7ooxx7g77jraU1sMAMRX5JynAEr1Z43bAV75nv8ArSQsZMdwZmfT",
  "key31": "2hx5WgU4gS1f75uX3DAQU9aHfdwqzpT4543mbinmDouVpTqGtVHhMknjyoApidzB7dBfFKt7fvaZeYQzk8krYKJe",
  "key32": "245SxmC9rPitQqEhiNQPhMZkM5qGvp7o9F5p62QNNBhvraAfgzbeTQzLPeATUaGUP6MMkrxLdgMceDkEC2R6unzR",
  "key33": "5dyp5efusLCMUooNmzpjCYaWy26k6pTDiSfoWffj3rbzKQxSJ457CJTtqZ7LvrfM8H1wGdSYDzCcZm7dGTpMzAti",
  "key34": "4NSxqWuErxtBqdMJmFgnzJkhAFxsLxMstUNYkWU4iFs2ingfuPooGPfuxik7efRKgzp1tWc68qTt8sBe1Z3WoDsT",
  "key35": "4yKNMwPiANCvCc22hTYdxr45PFydu7ysMZfTjUrvuEQGMeTkKLB4T56xi2MdW2gzXXSYmRUUB6i1rcTZ54ZRe3PC",
  "key36": "3FKyNVXwnTvTemS55McwVSUbo1zrDRi1gxPpABqWe2cQvjsVHw8LxDxw3DYHJFwDgyyZANE5iAbuZhP7RhPcEmau"
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
