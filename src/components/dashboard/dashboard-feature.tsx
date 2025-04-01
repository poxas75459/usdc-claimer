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
    "2uHhweiyRKV1KP3CpGFq1QsZBpEAcKTp8bhDMJJzBdP9mgcSswmi1aVqgCbn36TpETnPsjm6abbGmZe2ogNwvX1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkMnJ5spyapvEZTzPoEakrerisNZN1gJ9qhE57rjNGQbV6u2328AR2QpmAaDQx1Cp29gXiaeCGxRuWzBXteALSw",
  "key1": "4BqmFP48qJ7gzdJJCQiExaQbGwsZqSyxZ3JjTQ1XJgqev9GxnFyBB7aVsL6eeSDguVaL6abEP6LNWXp3Giqj1hNX",
  "key2": "4cc4ancLbSgtQpQEeNF4PY2PZNSVcpX7KeyuHrFt8HD3uxjUqFSNwoz79VnKsJUPeFHeySzCe6bF7fEp2HAwbXWg",
  "key3": "n82Nfx1ac3TVf4QtmmtXsbJRsz9baFrQJgBaVdSYTsbh8VgynjwUnSv1qwxvNMrnTRPpLdXnhDZrKG3kdGsK6H5",
  "key4": "equezJ43116SvP96MxAWRewu3CrdVYvpqE2raEYhBZv1W4xSUDWEWQwJT4UQw842e7UPFNiWmoQq191coBbPQit",
  "key5": "3YTG74iJiS267pkVcYqtJY7t1mj3dXvuXRC8cdsDvTP6Gtx3E8cTU7b2zdtGgQoQ6Vm8zTy7FBSFTN5bV9TosWL",
  "key6": "2h8FBzof9Y9b37tea6jrWkbwxemp5f7jBXFaGFKdz7eR3fqBLcuJpBHWHJYHeZQCbka1xfyoW98pSXw9VSd69crZ",
  "key7": "2cPba7yH2sKExoyAswZGx5Hu8CQF1EDZhZXyvaXvWnKECMp2nukcjpNk1pxBHVr6kNc1ubdowfApHXvcrHm4K7cT",
  "key8": "3ZgMghkUajL1eMKJ73ksm2HPRRBtgHcmbZsFHSzsTxBLJU4RgSdieVmMw6Eiuxn9AN6d86w9X4trGrY2iYSFmYRm",
  "key9": "5zPVuqSLtG3y7y9ALQ8Vi9R4FMQSD3CbQfcZw2R4bbFfeh6LaBL4m6Bsckw3kiSub32TnvtW4wZWrvJwiF84F4au",
  "key10": "2DAdup2sKeUnhZvEE32MxBUtWxsvLUQR6VJYuZPNeN46pa2mEi3nMTWBXzsgVhh1Fehb5v8HWCUZcxwBoRDLkq2y",
  "key11": "3qfKxqm7uYsAA2jqW8p1jJZToX3nrhFMPGEcMCYZD6mKmmipbZfHyLf1PFj1Pbj5NDDHcnharZAYbg1AnYxhTByt",
  "key12": "7h5vNF7SpHHD1kkKfq1wCcQvBwYKmdgbjGrBTpmVVMr7rveHrX6jiQmpTZ7TctE5pQhQYsyD8cmLTq9MtiqeQE3",
  "key13": "2tv3RyLRvT6Ns7bvMbVtscuMmzNRL3C8pDVqEnhZbkVmkXvzDRXaX8awuLTKEnetRcAFgjoH9RrCLz48A8hTLY8U",
  "key14": "5ywV9u65XuZhFDSFWw5YuLY1RmgWxMqUCA9ocaXD8Gd48euY9jyyMU5KCVhBpiVgZmzPap48G4cAY4xf87N5LoRA",
  "key15": "MAjbZoA9ZAY4CR2XVNVNuTtzePn8zukuSJwRMVoWDCkPeuRksEw11ySXNpdpyG6miLBG38erBxrgyBYtuyspG4g",
  "key16": "RK4o1zR5PwHmszEAWctaK6NxpM3S5YKgV3zeX4DL7KHF253fCki5E7RYBAPw8rUrhhAHrr9htfoFZTu7t216q9p",
  "key17": "edXRGJoVCvQKEcN2qnjFuskeNa25SAYGRBcMJCoZyzcZ83V2A6M7p8EYqZp3mXjYQfEgdsPqTf3k7wRHDTgbAJU",
  "key18": "2hm4qUNMHCTq2DT6YymFrMqLzo3JxkajgynVRuXiSnHGYATrYh9dMTQiDQG4UGPbcsQWiWTA3yXqXz2o7s7K52gM",
  "key19": "ho1Z6Ej7DGqJxVWPnR8rv4ZzETevLWNxjFoQvzNSXRoB5PgfQni2CzManPATQscGEsPK9SUoJwDarcgVyR9BjCw",
  "key20": "51DTa2x77EG64iXawfoHHEjwgKHv8BFoofKRdycsUZQJRP13rvJ1g6XAmUFVqrV6aenXjSxh2RqFDWUaGGQup3NV",
  "key21": "3TXZK55zM67cqghPF4YFZYpMyt9GW1S9EMKgcmVb7v4i1qc4CCfLZo6zrMeiQgzer43m4tru7Z8Q1RUs4k8TDNQZ",
  "key22": "4LwAhp6WKRArgDsdSSNKJdkaEd18xuFvLa6zkYbCkDKHUfUFq9GXhF6xUMNJxH8PTF3uMatSyjsy7hoSWQwTVYL1",
  "key23": "3ngcATne57JobqpQt8ZmCiU12QXJ8eaJHpsMeSv4gfhLoQ5NbaQndchRPvNbmSL3ZxNysAGW1WDakEQW3GeTWiE9",
  "key24": "5rZ2AqKsJuTz2jG48RudysmFioPDkVwFvt5zuCQhJeYEWLPMfdrCHCQAgHBnEcKxbC5ue6EU1cS6bZMu6TWB2YeU",
  "key25": "22171HVKfkksZTcfqXoXQM62dyWm3YPhAu8jnuirP6w5D4uaGUwrzzANUueqrKfahcdMYdMYQbLtRQk7xa3g2Fja",
  "key26": "4DLw4w2KAHbxw2CbEKhugRQPuHH3mcfVJm5CJidxp9AzzD7aTF99PPZ3ob9wy3Gc5UzbQG5VcdD42SsRoyA9hYr1",
  "key27": "od1vFHQjJjeMXZduDgH4YqNZcQiXhM1hCi27nA4kWwQz5Atbr4fn5ABmGHxuPqU8SkJC8UxDatPtticUyEftWuV",
  "key28": "2LsEd7KsLmMfSJq1Z6xwwek5ohbVFHgmueGY2i2URXmSwjvgBKEG26H9iNm9jJ77ZiPKXqzccmqxuVQo9q32c66Z",
  "key29": "3WH8C1rNXWbM7EGN2PaDRAjum9zsE72DoTaNZCyjMwCkbQqE7QqjBJRZyQKiu5fc5DQo3m8BCCoEJYaM26CNkx5b",
  "key30": "25sSZQDjk3C8ZVnEMT9o2BeG1Cc25ayGBnLXxNQBb5uGGvSpcHfXsxUo2bStWhMVXpfndhBLqqMSY8Bhqp8p7sqF",
  "key31": "4LzkjeHMgW9LuwWCfxkUD71bJesKAr84fwcYoBLuw3D4AEh4NbJXEUickFtLn1j7Y7jtE9GVAvzUC3aBsporwWBz",
  "key32": "2txXXydJhzie3BmCNTN7XH951Ebry5JmDbdLcoWjssaN8aK8f4UqFYGrcxKgVCdZ2yHRBKtZyeQemJGa1rNy937B",
  "key33": "BqcE532WfPJEHTpLsuy1TskFydHsctuM8cexvbrm3rSEvhnia4PG5pkgZKmSW9J3Di3mW7P3ASnRc9zRYKy75NN"
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
