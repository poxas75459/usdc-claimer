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
    "47NntZbFAUaNP9TBFfaBdPU2NSzVKUjRK38NvX1A3JnDf3vZPfAaQdyMTikHntGoBxjgYbn3stddARqcoYeXZGjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6NXuZsJee4Gw19hjhbFv6NLgcFd35mshkyNQSNKmSxEe4FaFzUbpTt7Vgb9NvND1QbJkFhePe5dbgDy616kZN8",
  "key1": "4GFjEsXS7oqUiWNHm8eUw37EULh5uW378HxgBpWgMpPwNGwq9zzAJx9sZBCXhUonG6UhWbeMqyepbN8jtLt9QFc6",
  "key2": "5L7oTUSEn5mDagsfFgUFp8AXU12gZ3KytnoA1SEmutYgb5tZuW78gR3mxTSQr5dLhyvULgpe5sfV5eFMCfTVZfjY",
  "key3": "byEN3b8GevEXfvscf2sf31o9BrbnxUg3RxPaix5QUQeZXtR2ZkYmktpf7VKrfjjS9BhnH2KnnJtvwKmN4zoMV64",
  "key4": "5EhCXz1yM8B3YxoaNkbmQquAXtFwee8Vyjd1QM92KUkvzMWNqJfph4NxwMf4dQNeMpjhR4Z5p7KfMw6BT83A5agR",
  "key5": "rzxkxbWB7hb92vv9PsgAh1T4EjKgjR9oA54D4h9svnrpcYampUUNFWJ5FjzoqchQ9NAdbydaaGTXSaZgFoJomaM",
  "key6": "3Aci8dUBn5gqkFXGU1Q7AR3nPui7hraBxiFACV6LfDs7ehix5dFT1Xets8XJPrSwKZamGZeP9nf5Y8LftH5oDqur",
  "key7": "91WojH2Js4rDjKrNgF5hKyaWhF6ucFR3ENRnstT26SaDfEKRopdEWdsipmugWS4dBjjP1fLrXLhwAK75mFwztXn",
  "key8": "5TCpc3gKpyLACcbBYBAwvLrG3pjhKmvhRQxCpyCpAHCbb1QiHbpX4yaWdecY8ffQdCNwxhTZ5RtCPA3beWoqPEWq",
  "key9": "M8P7MdwJvkNaiW7zUYKtfLVfe4AzhC9WXAqc1apHkkYaxaAE1q4VQhFi9dEfXejqAFcjNH9ncLd3uqunihzdvYq",
  "key10": "38Vmkgzj7vCYr8bAaQgvJynU8uUDGD6ewTb5opFvF7KbFVVrZgCHwDKtgbeuForpX3Tzs3ySHFQqMfgDr5okJHAq",
  "key11": "53V1LFWoEzeCZgUjjwU8JsfkHJDQ8rhsvxppg6ykmBfREz9idVJYr2US7iSEynGYqjfJtDuuhrqoFffyfrPzF98x",
  "key12": "4HjKoH8zKPLRZ4PFgqdWSnr11htjUW4kZBUjKQrk1Nq4ZaJUcRrggywWhWewyjU7coPHuybKCp5dwJ5gKhL1JJDX",
  "key13": "63KTwcEQntZXFHTanT1S6LEFsjJFg9SuCpigjokiPLDbZDiHTgwyhqrcUg7U5kkjiGM5EZ6TAiJj4pBPj3mYgMHw",
  "key14": "3Q6f3PAbCLznExUGej4esaj3tY8cfR7efVJytaLVn5SB6VqnyiLeK5DzURkapZfnEf7xZMu78zYpdys99kr8Bxt3",
  "key15": "59c8pYMwaHZQ4hZho99wjTXJAKuvC3xNSAQDEExCLsTGAQWhqBFE25gSRmr57t26WhfjEDv9bTV9iJGG6M61G61a",
  "key16": "xeQJwVBMEcf8J2t6uDz4CvXSy6tLE2fuC6cUYw6xJ435piX7pDjwjN3Fjw76vYTiv7acYqqWx95WK5A48UcfQZ1",
  "key17": "4CzzEkYepLpxob3YoFHQ9f6aVypvfaMsdQqViFJdb2NwsZdMhVgV8AKtJRthm2rJek7iJKSPDeByomgsDcwk5YhP",
  "key18": "4pLj1kZ6QGs72CSdeYExGiQwWdUMnM7sWdKfYRPgoa4y7eooJtD9Swc7f65ppDqkLadEd9oSo1yV5wiXQGj6MUGF",
  "key19": "2r3g7i4HGhJ9pqsD3UxU2rEfGqUzXRD6fwcvskn6LqADJfFoy56QCcH4esVHT8Wf9Cr25uCCbtRuKDYiDXAhBDmm",
  "key20": "5YTXUWg5A9MszTYvZzWhqofXykcgqxF7xQQUnCRUXsgHYjjg1yCGddmDVKUnFRbKLtfVMMJUm3aYqpVDCTPLVhff",
  "key21": "21KC8DNpR3B3MDiSPYiqd9aqzCCi9xaQHG9SbY4gXZXdGgykBk7gpfpx1fFcYAbzwfqozpgWnv8MbLPJTEYRauFd",
  "key22": "5u3EV33fVfr2o1AqpuVRhtBSnySizRbLEE4eFwqZAA7Np5rCyqQUBMXvhHTo97eJWTrXBPsxTZJSyc1VqgF4xrrg",
  "key23": "2zhcyn7i9tw1SSKQfpBY42tAL4K4Ch9QsNUFSaa8YRp6xi19BDJabXCfNvXEfCCh38FMtS92rVkw93KFBJ2wngbk",
  "key24": "5FMEoekR3JvFHPqppX61Tc7vrV1iXr2VeUpwf5YAEzFnhQZQtUzaSsfuM7Ar5qqqnGYXXGcqHadsaBQd8XevjdBE",
  "key25": "4Ae8H19S896x9SoGjcwZTFcqzMvoStacPFvYDcTg5ZvyZDn1KDYRoRjvisZdQiwozeNLPtQBUmMWjpccx3wRrpkP",
  "key26": "3kT5GefH8rydLB457j4CUfHDrQDrdrXVX5gYEz7VPNd26bfe2hYjVYsTrmmfUfkhWzjspHo12qwhNH2asjVggMWx",
  "key27": "2mpZSFDhMo4QUSsKN2YJTuxPusrFvwPzPHhsm7TTKhy2qXoHkrPyaJhPwUN1NCB2qLsmR2nMhAzrjwNY7MU1kvEQ",
  "key28": "2pAUJGxgbnTAqdV21RcSeNWtuZJH5GfQb7XjC8VTzNTw7nCvWZyzMeKS4oXyGPyC2ZxxAbQGcoaCgwgTWTz2W4QH",
  "key29": "38GaN6BGwHDCKERxDYDBE69iCVww9pTegFmyQcsbH48CdPGAD4LdksAY2JWqzn31E7qrA4BtHfcbdMq1tKSKBozg",
  "key30": "4PRsSdu3DymWPvPM8omxHwtfDKFAXF7um7pMoy1EjqyZC1rPzTnKjJJRFtN3rpKZU5PEzu46zr6YE9U3axPWN8TJ",
  "key31": "3GfS1tJVLwKgr7efR9xaCAgkbsRLCLXWQNZCV6eg2HX8G9uQ1GYXzw3AHScKgFKDjUKTGEgmiooYzJmhm8GTepmz",
  "key32": "2sRuWvXkuNo2A8n7sQ13LcPqxuL1aUqocF7BgotSiGRZNS5NkuhwM3UeHMbXp7puMa9owsYQCBQVR7jf7k8zR3dG",
  "key33": "3NZJtecGFduwTdmZPdUJNfhCpb1a56Higm6MkFvFipLf2x6nYRhPtdL5rRsbHW5jZy14YBLhr4fpJxMeZxCVkBYx",
  "key34": "2zFGy7gp9PYNT21Yn5bhshmYDDEj8zRduXsGVrBqb1PSwLX58DzAXnJD1p7KuiX49XQnNEnH8pEY8jrm6STHMYv1",
  "key35": "2534RQFxLdeoxkg7gSf5wiCDykNqoQ7LLxYxmqmzFsgH3Harz5kaJFiYVkEJmzuFEaCumhBzGGrWHKRHh1nEPCdr",
  "key36": "4j4LPjtjuCcJDveA3qa3XaN5oCULpsAgoRQwiXwDCqj1agoLEpu3oMViPocYT9yzvLvcXaFGHok7LMpZyEHAaAJM",
  "key37": "Nc7iwdTWPFghQ9SNrW61siKmc23ePEDe6oVpnGq4NxmyzF5WLXhQqjDGmfP52VjEUp8yENR3MkrNKCnmoox2BrL",
  "key38": "2DX3kgCQpidfev2AmG4VWMvQR5XZJXKjdD7pWyHd8XqJ2PsrQ2knDjkdHResnywiB7rzQmbBZvqgZGRtGFpj3YK3",
  "key39": "3DiN77e2ju1tqPcHHcDWAnDBZeuEn1EdQiaKcbJzNUyvZcaPk655ztZXJ3EYAsW8PXpfBrUZCJzvXNc9QimmAzJk",
  "key40": "5T8A9o3bhuuMGQ2GVu5U9QjP4j7WufiCnQTmo6iyLZyN1WTXyW8X1hNHsC4fJ33JWkxRMVWVW7C3M685NRt3Z9mF",
  "key41": "5SahxCvsM7fMkESaoAJmSXd2fnUUcuRpCFErr8DRh9mad8DFEvsZLYDY9gi1T6rVqTUs9fkqXunqFDM1UtBzsXdU",
  "key42": "4tnUxZJDBDhxH28Y6ttHYbppAq28r32u8VKX47t7rzXvCEeRDyPQDeK2hgnvyfNh6pKp6tVn58dsF9ZMoq7bpt2P",
  "key43": "HXKFTZfGRpYNFkeuKSMmGjUss7d8YqvQBgq7vtGCoashqPsnZJnLtpnVEAwucNobP53AesM6ZGHPQCK7Etzw41Y",
  "key44": "4sdiB7KNVHJ5BoJc8hC3aFzjiMWeCpETshYYU8p7xV5HtnAoTEQx2CYBGgEncJmbdm2mNenUr3PQdhPVJ5md9Xkh",
  "key45": "4JvMFAeX745NvysXoiRnPAqWxKgq6ak8p7sMn9babPHky2orvNCwo8GjcKKq2rRNTefnTtKcFFW38Vd7oiPhxS4u",
  "key46": "4Ta11UaFQoMURRoPwpBeH7aZDE6qqfMnCXFyYodnk1R7gwUXPgkTAg84hN3U5rYKgxTU9KUqTp9Q67RBuJv1ovB5",
  "key47": "2KsYVMXF383BCqFjYfAY6gohN7MVmWwxJoR6cXzu8YKAWf2yqwjUmCuyCJTyofWFsQFDvsNsF5ud6oNjHYSSvkqV"
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
