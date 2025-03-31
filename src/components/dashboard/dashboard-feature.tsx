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
    "J6cEgLgZVACiNUVb2rHw7q4MxvtDGcVRZYKqfdaC5WAxNevhTpNY4ewhtryA2RYb49TDz8DZqWtxvodMuRSPowe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVdZSt8D7YFjRBJzBP2RncxQLxEZKb1bVsVq3oWASCLApasWnvAhNqFxQQxARzaSFYES9HmMXKFqjf5CZZA4ezE",
  "key1": "h5KH2bfE6j79qdTAfC8s9p4kwnzg5rH6yyjL53ZCBsL5GrHaui4j9SXBe4JztinMgSHscc7Xa8rmWP2xSuQMy5X",
  "key2": "3fhw9eNPoJVdJcBMY7q2upSZpczYSFhVH7ihRC8XAbYUyHYfAYZpbfqTLB2HzJr7YNfNjmYr8e9cNrzWdKGeJ5MA",
  "key3": "XMYcS2qDFgF6dgQGFsHHfYY3qhFn9PqddJTxtpxrUjwSYiPZGLkpFWXsTpWWUpFuUgyYxyGtnznAPwNhAocGAUy",
  "key4": "kiuEhDRP4WQN4SwXWDkiW2WWSJPWqSCsBJsmhGkBbaBBoqc3b16DggLTsMD14Du9SnURgZZ7qFQwhiDK4hosrhn",
  "key5": "2THAsXbadrp4nVozsUuK3Q7TGNF7DuLaSKMiFCSFhuieHxUJe5ydcWPnSMUtbgYyAEzW4gT9h52LfNkptY2wPYkt",
  "key6": "2cuiqTzwguGjsLx2JyD9AWuu9nqBCuyJBjCHeL8wLR92qNrsefqATaHCc36w7wetN1T3rXXTRrWAvL5zjHxe1fvo",
  "key7": "5fiozc7b6NNPqSKv13K56A65qmPHxwikwpQdimnJc8mpbdph3JCqtUHekkiGw3LEwduGXR1miqrBacR4niobdYD5",
  "key8": "5FFwWC866Tgiv8RZbzuNQKnW4nYYhUtFZw1EyCarAiVmgNCzLtSY6np7R2NnWmT4wwLAjbe7L1zxCJQiYXHGw6Eo",
  "key9": "3ctUhRq7wYRtRVJRp22v4aqbWXWXVfpbnNyfyEySWFMd1rMAMTmLF75f1LFpMtAjgpr2rz6AptbqBtMULezMmAXu",
  "key10": "5s7yd98qKRqvFpJx6TYHziw56CEwNKcdQudJKgMPBRJa4rYfvS2d4T2uDrtY8CWfFVXkAPA1WYiCAHqroLmpW2ur",
  "key11": "5J4trvgHVWjZ1YNsC3i3c7p58scKeAdd983tUY5hzB84PbzLF6nzBVgckBoj9uQ7r25ruw8rQT17tPeatEgtQfYr",
  "key12": "3fxeRmTMP8RzqAJ53MhMmgnxbRwwNGPytMwmUiSfJEUvz7uaYSXQ2YJtCLT3Z3HkfQJ1PWvrNC8f1cwWq2oSTzjm",
  "key13": "3TMKsBRsTKvp8WS2UhuHVy8XxW7F4RBb9A4488aUaMVqsMzS9yRap6RYBNKnduVvzRqrj8iXxxUG1dcRaFPj5VWi",
  "key14": "21oRCbxa3nVJRemm4xCTRRxYSMGvoU6KBY9KCg2JXbXqBykDzCtKKCKbYHMJnC3L8mDoUDDzqP8D6fCJPoPw3P8A",
  "key15": "3W9eR7B2KoX3NxsUqyCWN4bWvDUBgDdpu7d3GMmySV5VJnwN84RCvvz6Cn1wgm8jfvcZdSRc9nBgnVp9guoneVkd",
  "key16": "5nHE5HFD3k9ZYsavXc1UUPd9de2SsRhv4gK5GPYaX1N2EfKyt5ZfoveuTZAeRjHDxua8JYB1vsMLktkof3mvZm6Q",
  "key17": "zCuGF2KiUdXgLkP1fsjygP5NWCtGNY4ZgZELHF2eP6qMXSsG3GvD9FRYWtVw61KYh8uxZr5mZzEPdWY1GhN5hiC",
  "key18": "3VxCHH3LiGTMEkTvk4Pk1TerzXWbt28FVK72mR5YG9wYYiFvLmFodw4EVHtrTTVp3Jen9NSisxuj78s4WH1MaNhP",
  "key19": "5qfGEw6zRjmSu4krGNp3omErGndKxeFQUCp4Eamb3JJTT9FfoZgHCX5zmqBRQ3aFmCAfZYbGQXwCeWmgKpQRXkni",
  "key20": "5SvjuUZVSaEp7x7yB3BPPSe47b2XdTGXVssCCmze2qSAdiLSFguJEwA78hp4apxhHekm5jb7ri5WD6H2UqDh3DgS",
  "key21": "c38J9kjrqP2soxUzT8aXrRYQV5nbTaSwxx4spBbhi8hiDnhyq7G9mzGmrYLjSnNK8rVmjSHRS4WBQc4fuSHW7jM",
  "key22": "5ek3iXJxoJU4T7bczFRzkyuVRQQBFS9o7ta8jftnMPVxNpteYxa1eKyBzrDjw22MSk4XqkAxSRz1Zstv2PWQJaaH",
  "key23": "4i4b9EHNBGFb3MMESYDjASjoQwAPzoqvuSyeMxSvYS5VZyiABTVTWVvmFijSwfZWn7EV1ZzaXuR95JRJfSZyy4kc",
  "key24": "6AJbyXEByN24bh8yC9mB6KWQNxU23siwjzHnE5U29bX5BDD2mjQFJ2GtHzvddcQ7oG65tHnzEcYZfN4Zt1pcrzG"
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
