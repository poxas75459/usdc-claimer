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
    "621Gt4Hx9KK5dVSJfdQkTHXze5MTAhGmXkZMNLqDghijb79fvMsX4mHMG9bnkgCwHY728QoWEM69Lyryam9ZkCWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxuj4GA9X8jKCMD5b4kbeZaZ9HsmhpwgRDEdZBgSdWsdgUATYFGGPTgjpZ17humTndRv7boj1qoXHUe8X1jPRS1",
  "key1": "38uM8kd5qftT4rW3jjFiJ4id74Nk3yxRdrtBg7Ws1samVcp1Nsk2JhPb4moxvAcab57nWvEfpb8xiJhUDwtZyciW",
  "key2": "3ei1A9PTBdCA7VGT4DxUGE6yUVZT7RPUHSSsnY3EupATtwEhYXyHpcLfxpjkMyFifFaqWTjrFScrGT4AYYyswLvr",
  "key3": "36BpegfTgPWegcgUE18kZq6R9eS7AjxccyLTmNVJzocpNJ82bHHree8dU7m9JeVyLCgziHxrV8UBZMhfcnWbm4xY",
  "key4": "3njGbyUXyhK9gF6cPHiKYUgvDHL8szXXEezTfeBpmkMJCgBVdF57HTHNe6rgMGghyf4Mghb6vWpjSRADqoQeU6Fc",
  "key5": "2oEydC2NzyjGsnpFu7AeEpva84qJy2m8QUZJwmsY8aMBJHs8pXvLvGANAaQXMdRfX19ND56tqoeg9vMDcpZnyUP7",
  "key6": "56GsSfvQsY8w2F1Viga19aLa3oyxM3xzkUbBxbSpXoRTDq3xUQkhfaaDCSAUMKcwfYVbvAjU6TwBb8EKDsCwX8yS",
  "key7": "2iNiTivPBbNss5zfu3MCkMNX8jMRRX26nVGi9ahbhkSjeZraTB13NxaWN9hEJJk4LfC5SjicaEQRzYb8DVCjRcYu",
  "key8": "35LfYMfDEn7ta5wj8cPPMTh9eWRC8fWAPEjp3CPgXdcbPezz8XCrE2Z99kR2gxRXjEr12NMgKYMCrjrb3KTZgAfN",
  "key9": "35YZaf7Be8XKFMEMwCXGjm87Xsiamh89bvR1sDAxVPK2EpMiW4Kfnvri2T7TJLMnFhU1tJQAiutiqc2MUZkFSmZK",
  "key10": "WJpAjGJJ38CNtp87EMGBKyobmRgsDeNXav7msKCCfh84iygNmTcXdQ68Mf4GpMEXFUqhCcpHp7hLpopiwQbVJuL",
  "key11": "4PHXWZtWgHfaqczjqQeSjkBTDdRYUYMLfZiSGZKC1Je2gzwhcsXyEmyk2AzFV2Y8d86ZLMPf5TFh7gwSkKLda2um",
  "key12": "5kQWDcHw6PqYYSFNx9bYKpBfZjbSCM8UBHM6paTWGgHT7aFYzn7WCBf9pgPdH2WyFd2vRtmuDx9FBKhXvBxLaAj9",
  "key13": "ccDEvbXzuuTTHp6WMAz8BdzxFbLHu3Q2y4DnH51icZCRmf9NsnCEt6za8bQhb99Cxuex64qZCWNX4QjngyT9iTi",
  "key14": "3eGYPcveGjXk3ngShaXR6HyPo1mSnxGsShHz45PwMzPrcYtZ5CMsZ25Pn6t9e4BFGdFMGcrcjTVfyakGuMrPz324",
  "key15": "64bF93UYstoEE1u5HqDEap5JA92fXob4e3317JE4MXJzrLVZfVTRpSPDXvRvwb6pk7hWJzunjCAsDB9s4v65jPAH",
  "key16": "3y2uAaEie1UFVCUjA2FB2a8urVQzNfWThJ568ifpuokfqktPUddgZnxSGj1PdJCN8JHB5wk8rr6obJcyd41sc3Mx",
  "key17": "4VBrmjYS8XCDXS49EhppNCwwmrgJoWEiSE5q4jtD8ToaHVrtwDgWwmXDSQfAW48rjWmAheABJ2LeA7DwvW3MSj2P",
  "key18": "3c9pKgMbexCP4r7kNwMUykvycJgh4SVqNp6HDSGUE5rjsDEjodXrw5PpDkyQzJqaypiKAB1Bn8cPAvZKMpnTicvm",
  "key19": "qAkEMuntnSJbpg43nb1nbK4tub13iabecnSER54sUta3NjSCdNcubCpZEjcdNdgdzY3XGEdERFRorsCks7DzTJ4",
  "key20": "2zyBSTrRyRUmpzenwoCKxp6KPr9tmNYy6bWG1v4yrZT2TfYCUhTHu79t2dATYf1sC9Ft87JHTLS7WfTqhrupDQbV",
  "key21": "3iEaKfAjruSEHdJe84t3RVppvwsadkZVcLC1djzHdibRdQmeCU1U8xWkWiQSXMM4XkXJ8s6uSxXu5imMzRfPNiZA",
  "key22": "AT9a3P9yXqW3BtRcV2NJSbrAiqqcgLQzUG7HZkFYodFTz5wAZvMDWtRJd1Xo27jkpZ54q9Y4GKqiADqHKDfv1wV",
  "key23": "3c4XfYiBGnBNkAGLVgYcdbbh1xitnY1sdmTbR1emivjFVA1gJQQqZeVCYfazN7pfxCNYUd4sNNToR7Wdb7MZieEn",
  "key24": "5uq4Xut5KgfttmV7nNbQifBhKnzFYg3quSEsFL31hdL1kso1Q5s1KGCs3veVk4VaeJmjY5sWW3aNY9x38cFCDJYV",
  "key25": "2vabsg9ms7pFgTGr4PoEcHPK6McprRDFVcqt6d4sHHDt2dZfRzXYzTY4Red8Ezv1wjuxeuKd92Dr8qRuS1e6mNMH",
  "key26": "4sVv5x85KkqH1UBTYrMousFxhYzyswwW7ySGBDbNVAotSfFPqVWfDBHpzYUfmV3ZZGWXYadDFxGmQUBeGm96Sh24",
  "key27": "672m6xgHimXopLNkEsThnkc9GsmHRdiDwRyNCmExLfGKzKdkFT7TTDFAoHz2YQPdpQ6BLtiwyZkV1WxMs7YQ5frq",
  "key28": "cEi84C6i6tg9BRucDhLe8oqMDrTADXypBjzWXFFz6b62Mn4RXfTYYnyQf7FrWBMqAZyAWECsAtGcyfdu918ihkb",
  "key29": "4dDx4qbxock8ScsioU7yHJQxdAKWWCMiwNrxZRcXrEfXKQsv4CwdVeYvoFmZVTrdgapqNmK8mwecxSCiouZ3qsGP",
  "key30": "289Y8WXRPfUcCu5syHVxSjpq7Dv5ANxm7YHhatqwreSyzk2BRugkg2RBUYYXWqibQg8Asz5BvasMZgTA1DNUQ55k",
  "key31": "3MaH7G68HgNYY9Rf9KDqJqQZrvEssYNv49X4TuKRc6P4LpZfdd8JkNR5dp9CEvhPwvqdkG9FuMJeSDHBA4hZntr7",
  "key32": "2Q2Lwu2EQQWCPPohuR7Ww1aZMkQd5gSXin9UyZEWBBWPPN5wHvS3j4L52fQZfp8M2YqV2FxDmFfdPxfg9v2WSPZL",
  "key33": "wda6qtUSx5RGhjmS8ChKacyZBfmXkzCpGbkVd7wNcqd3hcn64m3JfaUv9Ly2BBJjnugmDXmH9jzEQGYFfqjgr1R",
  "key34": "2uX8CYarg2mfyoLcV9T7c1kpADJdUHSjYZeimHYzXVvX3obP385HuAgn9YhvJUp7pbXyeAyfdLMkrftdWchMi9oa",
  "key35": "4kR7qkeyfkGANczv9vpc3NjGtQBKFUhaeQEm1LGZ8FfcWvVVafCQVJ14y9L6yDqMLDVsFLh9KGfAsN6S6MZfvjiQ",
  "key36": "5ZXs6uVyFNSqT3ARxkEyMBJT1HWGGBe1oyssgJ1cCrpTvoR6ScG4ZHKrfvuBWbBYbzWbemougSHVEpBaterjNj85",
  "key37": "57TXh9Y95KXA7mBhhGEhueHjMDeNQYMNDddYqmzpeXuT7gopmZWjNJGm64dQpCX8i65qYRwPCVBpS3RWQVNEdy7f"
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
