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
    "45UPGAanP6j7YwpzDbzrJWNhnEZZEb2VvjYUwzhSEmbUcXqUcTETtCinmELoPopnKUfMZPkwJ4pvyNDrZwErtYmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YArELcTsGaus9VknLmanwzn8HZUYKYEPAwJKuAaN2p25C1K5wv7ofCMHJBTvUDFTxnDdxGjYJoPLHUunfMhJbcA",
  "key1": "2jqLzBXvp9Z3Udy8LZRaxxToEYReNkEo8MUGwqRN6JrW4jRvnJaTJNKP5BkPTQ6hoAPgFh1aKkJTXkuysvNSmdZb",
  "key2": "5hKvFDgD4ZcdzdQqfVvCqd9JnAhgTbm7qfeiXnGUZxMqVnWSYbiRUh7EjiJQYP3Jf94yHQxRgtZPeHvse5MuAZTs",
  "key3": "5YVz24YPZ9bTJ9hH6pZAMQZrDXKes1xwVsdBEZm8ZwnVGRx2eLd3MLpBD5jPguKkXSJ2J6fpESqqGa13rVkJ7Y9W",
  "key4": "88BQbnEk2YWdY6v5TZve7WM2sSnHjEFaG4pLcjukfhGhFUtxCr9zMjH7h7mBukLxwemzZEqtmDpLvi2sU1wF7jD",
  "key5": "63km2p6AC82rifuqzJ7scMpPh7pB9YFGiG2vBCBmT7KYKiESQH4Xt4TLDVv4zctP1gHFk8YJydMuNXiA7X5efzwa",
  "key6": "W5zs4LdxgsXp369NbPy6fEf7PgmFvVMnUaSEaguzRvrd4xoU2DaTaCrZteCKrwhoWFQw8cdb8NvF8KJSRjijhtr",
  "key7": "3ZUg3rBXQx2iPDDX5y8vyvxEPJWhV4iQ8vPhU1ZnwthrD9ZPvWUJP3ZQCRRxBY9RUFPNiisuxtf3yidhxjZqSbn4",
  "key8": "5H9zZpr4p85sdQ496S69mttFa6SdumGGpEGkch7qsWoUTm82UfFNnPyFkeKpSSJEk4tSa2AdCnspkG9StLMZi1ja",
  "key9": "Be7noGLTYiMhw4ah7gwazQm4RX23U4fNpmz36Nyekjpy9XLxsfyEoRwKH9yPrHaMKX9oGk9JAr3PvPiWqmJygW4",
  "key10": "63v3Kbm544s5mNwhVDoPyqCBgkYEXEK5uwdHMPPiv4g3ndJUPL8UeMw3arb531pGpMTwAQUDN4DZV5w1s6zPA1WN",
  "key11": "9rGadaybroYej2MHnRqDP1EjLtZvySLDv3gFkSkv4Hp1BiXWehHjAmgQbsVXU4tGB1bK7Ux2oxN4EpuZ6KKw1v7",
  "key12": "5K3wrxEEzj9qEZWeGE2LZkDe4crAPJuGdperBppgBCbk7cDbeLVDYmXMptiWzvKTJdqF3gTvwgzefNTMkZsXNo8q",
  "key13": "4kNLtdGkjSdz5FwkBufZ8bKxV7AxDrMCHu8xTwTpeb3g459RSh2fJrSi7Cw9SDwmjScc1spJ8qm9ddj334zmxq2P",
  "key14": "5cGHkRR8hGnvEgcSrdYUz1QCFWEwuTStfTt9jPPkTH8r6cRBMSmx9ECWf61hfSVHp56wv9WErGBNSXEJBpDFhzm7",
  "key15": "2o1y4ZdLs1D3LLj3aFpJFaNsYVkUtNdp9y9UGRu8G9toQLDj7BXCntqgDfs36PnE1QoKdnBvLeZDFidUuUjUnCwZ",
  "key16": "sCNwgVfizWhyMTwQKhsKk375K8d7D91irrAEovsDDFpuQUjfiLumzv7bDTbFtiMJr4DxVguEMd2uN6MJfnX3ug2",
  "key17": "3GyEZgJw2dAnS5a5YfEh3q4BAQyvWywTKnYtd4GYTnW5eHZaVRgHvHkSBYuaDGEaHZYp68m1rYFEEoMRKLRVa25T",
  "key18": "2aCWQPD5i8eunndfx9o2RdfkmMBa7GJEvDNyYRfGBryrLnv9EVePsXDy76D8nyqMs6bgcTTbQdRiRZCTNVfdCP67",
  "key19": "51R4oj8wqapgUFU3ywVVYHCje1LhC1Pborb4FFDDeC8BnEGKP3mZKggBz4B7j561JD8ZNYkdAJcnSfBGfX89GBwx",
  "key20": "2PXyKDLswjfDheHVMHYFQqJZW3Y5MeWfcYwC8nmART91giydqJwms6mjuVZEFjU7sPkXvzDPxKzjDgzjyRGK15yu",
  "key21": "4MNYgMGm2MmjyxWopZJnzYuBC9BQrvvQWjGf92fB2JKyX6fVsEF2Lp7pGS2jKjhSa1eUFBQyfwZvs1uEsY8S7Nnb",
  "key22": "66uPgToFUHCj2nL76ijehJaGn7fscz63zXSV3an7o5ja4GqD6HNt9tZqaTX9F7GRLe4V6cj4jePJ5jgSJdS2ahqa",
  "key23": "3ciYJxPLtSGnij4iGAx8F1AgcMCwjbwYMqUd2a2wvF47aZb3u8JmHEx1zHk6dZDwHL5Sv4SAzfaRbSLUCUjJ2VGz",
  "key24": "4QYVNb5rfW26scyhUqk8AarXETYuGPhN7zW3s3Hmx9UkWWHYt2XDG4s95t9FxxQRzASo79EKBsj2FyfEUi1wHCaB",
  "key25": "4S9njJ3S61M5Guq9WGvj3ghM75DRrbUEuDivBJx3egpKTSqE1NQaHDsh5KmmZ4KcowjUiBs27bigmmMt88V4Ppi5",
  "key26": "DKoze1326RD9TBjqGLecz8bfj32TZ2858hJD5QSjEitiecz416aNZ3W8e5v2rSXQVAphVhtP3wB2kvD1ft5qNtr",
  "key27": "Qdw4WDBqAwFETSGVt9VJaXFy8mymBkzJr9LWGx8d8xm64RBHkYV7ZuAGj7gqgXzgq8XbuvEPZCbHKhPQNXGpn2A",
  "key28": "327KjyrDrkoCGURtVwWooBCrRNGJq3FQGgrvpaCkmJGgLfNAndcD9QcEto6ohPCfTvutuA58nH1j65wmSFaDq9tC",
  "key29": "2tF7CKH2pstjNvwxHsuSnB6AWkSvTFzZHhEjkNBpFxPEtNWg5CgCqPYuifYub9FKDjhhXKHgWpF2LzYRyx4voYjX"
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
