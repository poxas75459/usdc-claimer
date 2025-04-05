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
    "74uphx1Heq55BY5fkPiyNvRVBM5WvqSJbGP9Dw1zdcGGRU9a19QkxPjE8vHc4nSiYW1QGRGoRgbASKJJU67U3GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cbiSPvHKYRv82TQ2AfLxxYyC3UgXvgE3SpTKJuTxtnJsmnJat37tYmV5opUpHdUAAJFQyp9mzuXWbSJeSzZ7RV",
  "key1": "3RTBXMbfn6VsEwuhopHwq1KAi4j9EUfUSCJb3riL8xUGV2SCQgVUysdsM6L7e53YwFofvRvLa7LWDDMxzvaawjs",
  "key2": "3BcjB4SmjYQaUjcP9esGmd1jzv2sj8ZU2g1rXfVX8j9w7xdC3ipuCgGyAXiP5BMucGJRAfbW4igMrAJNRWsMzct2",
  "key3": "3jeTf1wsUqZz2DSM5C9g2uJn89jfG3UHeDpD8UTH6nHVKPgQFKBBkSkYnbZCvsSuUYHAJ8hvKRynCxPr8hj2UEh6",
  "key4": "4Pg5ippn1LLSaZsJvAAaLgEp2dnU6hhupFferw6BJ68AyWdcNhtHP4qnGmzW2gdSgEemuiYPYTsQw1EnM9wpufyZ",
  "key5": "5jWrasyUDgZshQUo5UpT6GwKCj5TQduVLRtBB5xvG9yb6aDzSFPCdjUFkR9KEKfM9gRu8azFYB4qKZSwKdS3eSCR",
  "key6": "36r56Nxra3fwiEgdibu4b9uuWNjjGNEwLtAqS5icpAjTtNPEgRYGWGAEy6zo6xKe5M7hxkeuHsoRBz3iarA39arv",
  "key7": "5Kf84a6SECNMS8g479F5vUfQxJR8bY7PNMRuvYa6oA48bjnDa3Q9Y6nhQyWDMCu8v9WyV3epNbWzvcawbny3jfb5",
  "key8": "3Q7kEeBFVaJWboZyGCkmTbRHSr3ZhXXGM7nDUtqJ6tvNCkve5euMyAxiYtkYqeMaY9p2noF57DgeparvMyPucuT",
  "key9": "2bRvFP9wbx37SMmxzg75VS9xtdeSjQPB5qQX1LcdAiqjANULZ7sLPTHuX6qKfREzBSYGrW6yoGj8nEhkHrzNEQy5",
  "key10": "3L5rhMLaZNFNn5xVfzfgnUJTcKTJCksmn4Eho7RJp7Bjk4SbF6awXnK7aXQzsQd7JEkLTiE1fBz5oYTP1hUGon93",
  "key11": "2QMTnW2QJ7PMmTddocNnh85Vj1GfCKwK5pfub2XWdoMUtbJYH6bvyBBPTRXNUFzt8YfDFRfLdGcsvfdsE5DsuJcE",
  "key12": "4wj98sxeW8sa61EpgFstskW8QBXYuZ6o17cXBkD2X8GwukrTunpFTpyNHoL4ZYpDCLtxNpFoKXw7FoCj4wa3qiKG",
  "key13": "5wfucpiTKsRvorqe3ojLkCRYZKuhTHtffpYKNsjvDwyQRsnrZHCziitTaPMPyLaDd6jAKBLMr5Qe2XCPdAW23YfP",
  "key14": "3XS97J8BGrt5Gg1bWJdkAoQ5QyuSBVnAAJBWgSBar7aPoD24hRP5CR1HBtrfG4EXYqUvo9XHg9rZoR5Pg1xZPq3C",
  "key15": "5DdQdpci1FksKFar8qu6SMexBeiQsDksAdqU2ce3fLrT9fXShjs7rC6B94rusPYP7oKrVgDBZ5X4bYvaQ4eiqtS9",
  "key16": "9o9kVSLgiro4V65dAuPhUoRaM9W9SYVzcUkZSpQqkxDWMadRRaszfteFSCoapKqFSadoipDRUbKpyCeZTS2gpxr",
  "key17": "2Xr6eKWZ6zV5rToSs8sUVSeecU9HoDoWN7aoru2v99UBXUVgS7jQsLZd5Wjnj2JK5ZUEQtgFHNySLFJ52HhE5teS",
  "key18": "2E7okhHBHsUbWARZ6jNajRSEobk8UXFim4au8m7eQdgUCbrjcZzAQgkqs85jyQsmyXPu9TWFLSfNZ8DCAKDk6TcB",
  "key19": "3iGx3cpeJq9ZwLEvjBUhFKjhvcA9GpWWxFzCvfobbukFenbnkmeYMekzHHLanMPpFYfb67ByqPypLmfceSQTuP5G",
  "key20": "dbKDgGr4QFsJW3YsEzgjgvi1Fpmz7vTVAKBHuegS773Xc7BYBLsab35YgcJTGXwWFWCfQbTw2eHZCNaukvLGXmk",
  "key21": "3tFJmEyRhU6hRqDsyo4XNmiPAmhkGVwkXjd6qbkSt3Tes2TeTphFHVU4BLPhCsZmmK2n8zRzCeS2HVUdfYRUWtDP",
  "key22": "oTfEHSPFabMnV2mzyJgQw27jhKVjtkGJqBoM9Xr127ckQ5Kg2A9hGzrugWsAi6So4D5yrvs9oAjkkgRAixRYKZn",
  "key23": "4uGnSEXRj3QPHz87xzbrReavKQ1xX2T4TEYfxs65GF1BzpBGaHPEw88ShLoPmv3Bk5VuwoUtWm5eLCPc26rLxod",
  "key24": "dnrZNm1Qko1pwnqmJH6Td2Yz7ByLGK49hJbyzABDT7sp6jM31TTqCE5KfEwofmcMNwQaroALiz8JggsoaVX67e5",
  "key25": "2fZJcioLupi5249hVog8QcaTJg5gGNTrSmHAkovM1upvvGiVZjbzQmu1a9tHw8h4oHTnpVetAAvY8oRY2RcSuScH",
  "key26": "3zKQKkjKsWKiSg996cDSVutmUci4MdydXnZy3CLs3PcDER1nfT4ReGa58WysxxwVgBnJGY5aFULhSLa4VTSJiG4c",
  "key27": "4yuQsG7w6zJoxFd2Cfu27XPGqN4TSqdp9fnTQ5127XAkZvVCFLeRi2oAYJesBGxgRKixJwcojpmqv8FE6cWNjU26"
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
