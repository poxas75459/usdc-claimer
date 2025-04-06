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
    "5da6AcAwrBgsXMK6st5EhHHiBAYwGNbeKwUm57F5wGBqRnRvh1cLZQ4jM5WHAiXuy2RhEkPnq4Et9Yd7gpYEYGPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYm7us7m6JtoqmZuGqVAQaoMvA8XkLupeXYCM8YZR75yqNkX5jyieyqQa2a5mM9zHwWj1u7QqdnuW75cZWHG4W",
  "key1": "2bjZE3whECAZMfrCx77hysctG3K7iJRae4trD7Fge6PrJ2LkiBbscr4veXBBk74ReAqUekXVezr46T3gtgzWatvZ",
  "key2": "2ZzNL74Evw4EbyhByg9v5WJrDytSyKZdxKnyzywyoUKGjgkYob7jVz18tKeXpTh1WFEwzyps9FgasRuBGerRichc",
  "key3": "3o3K8D7vxFRefedZqnE9JQPZJbBZg1MwWD8tdxk6Kdu1mgYvPrr1yJdfq778JEG4AX6iVNF4e6sAov1hs62dHQa1",
  "key4": "4jzkafej7U6TrYA3L4togoVv845aURPrB19MxPyDp2FabghVKnwrips6LNjnDi6gXMDMGkpyJeBay2u9pkY1MmQc",
  "key5": "469JGVGPLDsqVDbFAJW6HHgGDVAsXutQ25LfCeBLqsdQFXHGcXZqmMMBAVZ1CRZDNsCbMPpYn8M721xQ4ZiGtZgW",
  "key6": "3eSS1GXcnRypyLks6xoRwyDYv9grGtk55UDD3h8Lf55oAgfiDJGSK53usMs7xw8Bxkr1PJuezodnzcZkiWdbUhBm",
  "key7": "2AD8LtsNLqZVMYt5XVDVcofkjf9NJSVGGw3iNJEybCTHGN3g3ez8yb18NApNkkgvYjukCHjKTN3oNYPVPz6PTAyB",
  "key8": "5m4fpdRzEH4dVEKB2KcLvCoRhmJaKyKfkUsZLWg4tPSPFTe16HhEzCdz97VJhfB8zqUruBCsKCQZeTBtFPHxHqwJ",
  "key9": "2oavGhAvm5RKyV9N8pLcxbSEatX5MuomzB5A1SVE4bDdRAwYwGfcJX2Tq2zx8eh6QnXGdvqhVDSKahQs44yFMdtq",
  "key10": "2qMNnt6XEUrkCgqGWFKHSLAsVGUkdVMkYNbuXwV2424QKxVx8bnTD1jqJpfMQuwQMMTJ6dfZ7ZhMVxMxLZbBqoJe",
  "key11": "5kWcFTiyP23DrRpCZfMoH9XY26qA4CrUz3ZPMUHoyTJ1vFQULt5Pb9pE3KqTgVS4sjiJjdNudD3JMuf6REahyt6H",
  "key12": "3XLbFZRyomu19vUoeZK1N5og8kGhZrFB1JtekQCCU51NPFm61WLFnp1dpqyAT7bALuD2TxzzK5EGZfBndZqcNmAk",
  "key13": "5gWjQeF5p6tHjdgMbEqHBEUvhhcAFSToqpmu3CswFku16yshr2oVG2b3Z1bf9MYEeDgtj8G56BWDfjQ9xYQRnLou",
  "key14": "6RzH23NKaVuPwDCnV3tx89SD5xPNSLVXqJbjx51SYYAqAkbcwHP6mQpz3NzbGhWNasL7FTsqkhrgqHZbanFdkrG",
  "key15": "4CcNGGTLoFW2UUraesKKx981v3gzkvRZJyPWqtsLZBBF32Vvet6G9SrcMbdwdptHBe3Dt8TBH9k7fr9exi9UY44N",
  "key16": "474ueutN4tbr1JSMhPk1uQ1aRtuUTR5A1ZxEzqL54wfnyVJtGiNFKYgzpP4ZjBHxLfyWLtweEasjS3D3Af5oP9tF",
  "key17": "3YmX22HPWYtx52TuzuSbevzSKESGf5BN6zrf84VPUwpk3YbwgU5nvHz9s5fvizyhd4R6x7oCoV5wZrY8G2RNfSV7",
  "key18": "2GBNdnEydMQbWktjcSfYRVQxoTyFGzGsrVDZmeFKfWz5XQSqLoRfJJ2wgXte6bN4rcdJSDcBba6bPbBEhPHoPPhU",
  "key19": "GKaLU3rau3UPrtWFtLFdbzxJ1vcLrbgRAkXfTp4sh3XfGTtVa3LRu1SWScQTtcvyFWQXavn49VTQk4dEqiAWLka",
  "key20": "5NsaBdf59yeLricK2UeJ6ECaJr57rRRUGx51xBeTYMKvG4p88Evx5D9JEs7UiPJiNrUNtHoJVRwbeRBzYx5ufsNk",
  "key21": "4hdaKLq8YnvunJasgGb3dgL18hCz3ohAbFe1HtqX2TcSEXuidV9c2W1TuYqTN5F8vesm8E7SkyvNX8MwDeJRH73V",
  "key22": "22PTk7vskcLxSGt1SMFmVnmYViMBrAcVokrBuV6q7Jwgz9PuFMjkP5XFhv1rkWjABXMCxWx1PmonQ6YbiE8Urohc",
  "key23": "5i1yB2ueiMVKG3QFqKPr3eFUz1684uNzySUZCbz9aQWjEVWesChq2zsyp9n4vi7xhkwYkEHerFfcq6FPYmZCT5Y7",
  "key24": "aP8w37PyS8NsKGfvkH91fWEBaTPUmQGFbJNYrZCicJ2rcY9s5MYyj6mzCFSssrpGCescrvAF9FQcFKL5GxEKZY2",
  "key25": "aGXMZHHXK374NCR6bsAK2YvMzmSbyca91BKJtPVCDwXeWaBr9TCL5jz4qbSPVjP7zBSLtwXLnSpCdg9hnbyf9A6",
  "key26": "5JbxXt2Teon656U2NdpXTCfwdsmiL41SPdfCeFLEe3ZDq6FTNLgm4cNaYoRLQZeGQbEZSYhxFSnbM3rKJNL4wLeo",
  "key27": "4g7vUZQndCBeUuoj8qPzRy9SBdWKGnkLSoCR2iezxQ4UfMkAerjuHJwu3buk4u6thyhWerhUWu8qMqDEzGy1EDRi",
  "key28": "DJRkaCc4Fqnc49aJ9A5KBuaWQn7bhA7j6A2QKccLKUvYx9VuQfXmZsNCuGYa1LQ1MmjpXyZgddtbSjZXuqs5fsm",
  "key29": "2NckKHiyaZZqVx3XHEMKLwjprNGUo6LtvtFy5V9FDKNfzcDMGaS5iXJY3JP94iAxoPFwuyT9oBTDjrKVHzddVqgf",
  "key30": "3iW4iCkgQKXWhzbXwBSmCGwnfapkB1z5pB72KmKnkWkeDzkUja35EW4G1pMs36Q3LDAjVcTVh5eJ7Apc1VNrT6pV"
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
