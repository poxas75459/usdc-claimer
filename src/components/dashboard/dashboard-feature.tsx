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
    "nAbDRGvpa5ZtmAGcKKTWpxERm4cK9af9onZhhNvh1kPf1VEoQbGRTrPMe6XRcYAFwr47n8a14P9SPKTBN3GNKrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59wf11wu3iSaKDd7YXwBThaP6zaAiMJGU6DDfBTKLwwGj3jonVxjZaL1M9wxvh589nNH5aBGx1rTePciubtNN7YC",
  "key1": "548w7oE6WTYDxk3PDmpx2auYRkvmD6357CBSLgRBGxzfiNA4aKjnNctKM5SpqZjvVfsfGps6XHBHXJExB5MUkCWM",
  "key2": "5Pzdgh1YjbCKkFKbqnWZhYPxmVBkDFfZsESLnY8iwQdhe8WXSs65e19aXRWhUtWtiQqsWiW1Hg3mdSM6Z7JK6Gc9",
  "key3": "2J9ujZ45LzFTxyGYVCTVZ3UWrNyCrY4Z2mtV6ptpCiprQBChybXW4BhifczRWfccRinXKxXqpCszFNkJHYvVSFsN",
  "key4": "4Kx9csChgqdsz8HQEJQWEKcCLNqDRzQp1Z5uKx3gfW2VNNQQ3gU8moGZYbPvuY9QVWZfjBS64gXVoJVyGwPq3BWT",
  "key5": "2zdrdgF6roQZTuL4maVqfE13aUtt2Usn7Eq6o7ZdkQVssEMXj1EyV37Hb7PzXsrkNPpLGsxCBWZJJCGZ2mrMPKMp",
  "key6": "55rQWiN1MFLtTaQGSjHkAzutBSKCh24bUzwLowPU2EPp6UfRqBPVfzMHkBbcCPiTkSkG6hfNRrxwbxr35i9mi58H",
  "key7": "8Z75cHTA3A1BM1FRsoQqUGZ8rCN4jD8vR6A2KUzv3rW3nQKpEwktouDeemYS7mbUtdYJAp7iEAsadvG4wAEpwSz",
  "key8": "3ncPYPtrijjXESMEkpDX67qtFKWrbZXcdxD56rhMdPNhMJDXZS5PGmzgkTT8nRZtBuY78p63cBZUgJMpePq14orV",
  "key9": "4XqiZaZFsCGHvGoDbwTNdHBAz4GM1GVLJeCraB91N2bPBth7vcrGnw2637JxjfmLPwd14YCrQrgT7yPjApqqdbQh",
  "key10": "5raxuVVSUsMTLVbYbJTtfqbUcZJMKubcKVrkdJtBNKyoQ6EGzqS9Vao3jYbgtDnctn86DFgMnrc4bUvMnxpYaneW",
  "key11": "2BUWig9qZZNqnGmUcMUuLSP4mkFBr7d5rZC8ot1TZFJ8yanUFn1mLKHHrGN5JwKPqinUkUUuBAFJKEZfrcFCCfYw",
  "key12": "2YDCbRHKm8uJULfe8YWTYUC1R4gwULKoY5Ku5PCWnKyy4QFt7oTyjMK1e8px3kU4zSgPp6QxLiaN45TcunGYMi9e",
  "key13": "zm9f4pmzR6LW9YkSJSo4duME98sGPiJEK7tfT9yGwQKCJuW9Fc2uj1iuEgdmuM6JwUEXchivCpWNdsVRg53urQu",
  "key14": "2E9jz2JRsZNovn8nq2SZeVUoQ4YDzwQJzQVdVbwLTAfTt4B3cEnK2ujevpJM1aNVGZtoYYUrcD2PAagbQJt2dmBR",
  "key15": "vLoce6NbXNKG9WNZu9m9CwpNdkP3pVQRJopUEvU2vYSc1Q9EvNDuJ9g9XpwmMk13Zq4sfgiVPZsDCJJ4urvVCcg",
  "key16": "5cJx2qTUCbrrTbHGuEVCrf3GN75jwQztJKkuFAygo1snxxs3VYA9swk9L8JdJ9Ch7EK32haPGK4qEGkt4B2YnWmg",
  "key17": "3cSXUMmfth1gJvp3sfF5topNQcxeieBbeda51UPD9jWEaDAw23u6cJx9XRRRXMWsCpT5p4pjuR3JQ9xUAY7qBZv2",
  "key18": "4jmbTwFwtJNMKdtCUfThcGnpdVRGNJPe8qJufcDMxZAurh5D6HDCb1VQ6TRmXKr7gb6d9UkEC96ute6Z5VApTeZY",
  "key19": "25EBqy34WAfDgUVijUDAxR2PsXQPVHZSE8Tr311hNMRFcQop6epEbvEBNvp8qeJY2WNWxcu6bRn4JDXFMFBbHvTS",
  "key20": "63ynZBLms5cacnp7pdYgdqE3uJVHEoUmhEz9penFAq56vErDsojrVEcmNc815Y4S4RXSpQCdtyNyhHey7W5JyAeY",
  "key21": "5uob2hM2jxuLJwfpiMTsJqRL1mwWrsgQu66TFMhsUVeF4gVcVDuFQZv3Ur2fBVGU68eSCXwgZ3HgxPYyQZFREGuN",
  "key22": "2dY5bVCtrYDeauDbFeQXdCD2hKtr4ZJ1VuWuWyfyjpRQZXFa6h1e8JTsdp4QU3cMbvgFg4XiTNUVi9wRVdpjj1Kg",
  "key23": "41MrVjq9R7hLchneedvd1P96ESfAGuP5RJ7SXTiyqnDBuAFm91fzQGFmu1DoQuab5EaruLgNkhYUUSwwUPtxTNtu",
  "key24": "7GCFAP7eBQymPisgPoii9gJ8jsjH91fz3jSjyecpHWKjbHNkNMaWbGVHYzKdjb8HxfzU5i1euSn5uvrVCeq5K28",
  "key25": "4ePyiUPUTYCK5gCLjdkGsZKW8GCX4JsaEjB8dd8DY99pJ122xuFNLuSmW7CVRtjZLuFgs1MYg5UQMQetH6Cgsqw5",
  "key26": "52adL3nn3NHZGa8cwXHyfnBaKMvDNCmitJfY2ZwnFG4bqEimBzNWcTwqpZRrU7g3RYavVporHsrG2gbtqJwbRUj3",
  "key27": "bF7rKFn9MfnGZVhsDYjvajbub2R4E28PhWziDfjYwNdykvtV1PdvLqA3icRdynt7X5iRT5hsbLoEbozTu5DN7cG",
  "key28": "41Yyqd96Py4tE1Fix6oM6cPoHiMDXhaUAp1nruWULV7KdjmpMpCxraxyEAWWRfH835RvnYjtpmhZyWjJ5mskDJ6C",
  "key29": "4TWJRJsYoLprkWgxtL6gUAtSFu7T9LoH28paTJaUnfLRLmDqKHPKCurniSA7HhRuQxivCfaotDdsxvdvBek1sDb9",
  "key30": "2RbVBR93Yv7pUJfFU9KEzZRTKEpohe8fuzxg3Pu2VmCi7iNuvVi38dYZjpZR4p2pciAXSLiFxJdmMoZDHka9piWR",
  "key31": "4T156yAPCnMzHKwcGJxkgtsUqQEHwT7ZQP9zHHwQKQGDDnnjhEHSH8xAVqSAuB1vvT2NKo2gMcbY5wQ5oKFfQKvy",
  "key32": "23QfdwoYvK84U7HWqYwivy71RfCRi6MKEZBCFBoQX3hwHVU3uxxppT4DYJQa4mHcGwqLcYgGXkxAB82Un7SGKWMs",
  "key33": "4fjRoWjcEaKZg8A58jNNiKHSLrbeewBN4ZRwAJi7kqSs57krnjKzzNu6JdYZCtGoWGUwsNUCCe2hYvChznF9qseC"
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
