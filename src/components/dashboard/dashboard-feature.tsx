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
    "3pbCmiTU4GafDLJScFR6SxqedLJhhuHEeei1sZm8dcB9MWugBhrKn4Cdn7VvU3xWwyLPM9DugMT4VWaGJqYi2yY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQxeCVjbEiqMNdcKAyFuFo5X8vLtnsFjWRZbouyFHdMkn4Z5BhVyv8oJTPEeageXuqyiiecYsAQbVsc6hvm7G6o",
  "key1": "2KsG6PyF2FnYj9HqBKMJKqcNdhJcydZf58s8JFoPa7JKfe9fThFaUyyz5yUSkG3Y4PKhZXDkPk46sEJxDYygKeKB",
  "key2": "5oLBLzsz4FCJ7GBPryfZ9WNqFxGE6A1LQUPWjg2he8BUgUQH8mE3fD5ErYQAEq9oRZ5i361xVgiECC4CZTkVDJE6",
  "key3": "4NxuLR7Vye5uP8RSwsrbXkqeLd5iiULNxFdYECnTtq3ZrDmcAzyXzm3qAix1fNZMZyGmAn2xnAxqiXniAxjRvUX5",
  "key4": "5pLmnsQ1dr7snDfA6pNKaj5i3zQT7BB5VLcrRPjGA13sh7fQseDjWwYvW2ZTtjDBwouavWBTkuFaKZDy9uQwYhxL",
  "key5": "B5BDGbTdb6qSb5TEeFdsrDiF6jgP5WcXRadJ2ZojXFxCZzk6mzwY7yJyESofWSsCAwnjwnUuiVEWMV48ngxgCve",
  "key6": "5X2gAxCKsc9r3ioPKum5G2mRtCgNfy1YedAYu4pUt1Y5wfap2oCxJrRgcis6yN1QNNbd1ouq95m6JR4rTnVNP4g6",
  "key7": "3iB91gazTqD2UKXm5FbGYb5WsdUy7hwBWFni5KDwSNAUWCMU5FfcLT2AqBcinyinhfSpjwyTGR9hAaZaQYJozJYp",
  "key8": "52B7Vc4LR9PgNWGE8ZwCmirsnsomMLUAVHEsycM7nbxHcaHe5hadesJrvAATbQPXK1popkcsYpAibXuPVLjTr8z4",
  "key9": "3vgmoP3bbDwoScC5WzuAaajU3udxchLUPgnWjd8o32rhW2rQuQ4Kv7MoaLzhMN9k5DtJysw5MRxXjGWwzVAWsMtR",
  "key10": "5vWegiuLsNg9T5E9zEYp4pJULSh4eGgNzgxQGDdTdfwPPinW6Ziv2ar1ZswenAKEZbzKD6M2zm2yGUQJmanW2L51",
  "key11": "31HH1Z9btdSTxoQYVxRuVj7Dmh8fcU4vvGWLY4poWtRx7zBw6FC2z6Rrw3WNPzJDgUCz29mkpozWASg9vLDvtBZZ",
  "key12": "5UHdCa8w7hmjXT9xk6zaUGpy9X3BhruMtNEJXK6eefS36rs7tREPVRsxkeRE5xdDR83pwELp5rMirL36fdkB9x4W",
  "key13": "ZX1GJTEkGpCXiCkquY5oi7KyPfNepmt65tPkXPHyCqsvDQAbJSt2Y9mjGPDvYUAG3yL5uLgyVzrXJ7wdepDfaZc",
  "key14": "3yzopf3EFZHqcLgvSaHsJ36akhXA11ZGtE8sZ5iUyuk4j7jhHiUE58BNE2XMvJ4fayfTFkhxWZY79VEPGKREpaE5",
  "key15": "3mRNkPD1spZzeofzcJLvqYJrfymCrzvP4ZrUQitzTnU4khUUSoivHZF4VYdmkfCSHxB7jMTnVSpdaTiMV9CcRhdB",
  "key16": "G6Ahg42QNq5YDn9vc2kJXWYSiFwRrv6RiQ71s5deBc4xTfaTm6GtNCopHP7qn99nFo5P5EqhheE5mEEWAF21m1P",
  "key17": "4zfzXLdkpwXQjHbTw2ybEFeNSVrLzsxw69P2mX18rcu9AbagbB8WMdKbWURizMADXiVY8ByKt49NTDDhmfT5YXm2",
  "key18": "2fkNHKVUZwcyAEo6S124sfcG21bya4V9Lo8uidFgot7hN5jrFUMEEBFJoZ4kX1BtqUEmJdGSF6kXEEXnyWJEThoQ",
  "key19": "2fL762DWFUANd7vym38efr9W76RZDZ5nBoHnskzhXRwhSESmD6QmrBe4AUDmTdqFT2UQRe1jsH7BTDs4iJp2QghH",
  "key20": "365PzLLFxiKBHmDL8AbqVHXQqNKvvm4CCkRvKZWdk47rSGSh5tRErz4jH7bpgaDTUXdm1BSGp6rEAEC2nHsphJpo",
  "key21": "4gVfPcnPUpt4XrfoKfYPETWtQrFGWuisSk1wcXPF844XtaFYxmkHieQe4zz5bHdunTTi5dE1BaYZeZ2HHY4rwCJe",
  "key22": "5zig1tGhu4AXn3m4o8guNo2SsVUWhA4pFgJLJnx3EYGZTAv1p9SKcVxp1rEZqnXj1tkNkJsZVa8yp2nKmF6iJnu9",
  "key23": "1KR4Q33AuKQNZVCmTJj27z17rBqxdGHoLjsuxD6QX1REapc2P5VTHUB5BYKLDTn2FSZp4aQxgW2AoPbc4Fp7aun",
  "key24": "4HrNQbxvTa3zndkKW9iD67rbyv3oGeK1iocSp74k7dbBgWkQo5ktXyVxmEAD33XhNXacAbX6tfCmVifoHdZJNPKt",
  "key25": "5Y3kbAhBbSny35oN7ESenk6BSJrbXuj1igJv6Hha469u8Wb8BFrZ8beq6wDD4DYmX6AJmXFhBPLWsWffyJHgF7tZ",
  "key26": "3RbRd2kFuPzjX4dahheWBDeSA4jZwE9kMkhVdzEg99C7n6WpzqzVqpZGn9LmaVVNEHnYoLK2PpuByCrJEWgp9ncm",
  "key27": "4LfcxG1RqhkYn951otb9t8DxNFJJLCtcexi8CdxeQfGayCmKnTpLPhcq99Utrd8hx1TS1fF4UoXcDkLYPWYf1aqs"
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
