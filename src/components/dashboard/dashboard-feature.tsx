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
    "2HBtvvytpkPvmGHSSHVDyEcNjVGoAZ1xYcQdyucKiU9KReRsyTyFL4vik5WRSmguuc5fTDStjcY84L9zG9RZoVYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3ar1TK3VB2DEXQUowTrkoV4M8Qut1HtxuyNmH2SxzufXg8RGtB5yvbNGFtU9ppNkg6cSxLm5ShvPive2iGGpsk",
  "key1": "eU8Jyx7nH9VNZTtBTxLABXPpsZGGscfCncXNxJ7nbG9ussVGcMkcYbYYNkQ3zVQPwij4v8ccpPY2tREHR1j3hVq",
  "key2": "4YytdPQuqspXLmMk221jTNPhHMRofGoS2Vwx2UU6P4E6tGeuA7Tw84i1PPc5pieUmsCruZC7xhGQPTsk8D8H58Yp",
  "key3": "2qeASbUKLbem4rrurYWiN35GYUTaAt79wpEZVUJpqR9USwJjyjAksUXA5JvCERNoDc1YYHqQ4Q54Wjd7zGzAk3fj",
  "key4": "3fSnkMoHEDW6yHykDf19SPpRegAAvDdawhmcD5UXbHF2PhhFevbUGDsEJXY7VSVn4KRqQn3f1ekwRwCtKUTrDebo",
  "key5": "264GXjHEBne5dc92dzHckkcoqoGSt11F8eEQawaumfAsc27qrCcJeWNFAnWWcuLRmTD5wdFuDdPEwEFT9DHB6wu6",
  "key6": "5xmRdqGN8tn8jHgsZWdrxw3DbQEuTSatWRSynqqLCNwm9f5Q1toWgPAfNcYM5Kra6o1K48HTqdU3iu191HVXGqGZ",
  "key7": "4ZGAysSwYzQS5NHMRcHBUDftVwZFjE8hQQYYTANZAbsWfSwBjozrW8qwiCDyraxVMada7tqwE4hsT9UhLSi7rSaa",
  "key8": "5F7tsJuYHzBbSLMTMCfLj2hdsE9MeH2mnrbaL9VshX6vEuwZoNspeT1qPXvVUKo8yRbZEDcfycuJCMyJwjFMtmgx",
  "key9": "NKp5KYypYeq6t7QY5z47kBiRgWYXiM8ughPHN8EVCmYmVzHcqQXqdLhfuMyFWAH8nEi7zCM5Eto9nFr1oT2hLLd",
  "key10": "2xuoxofQCR2kuUmVKBx47uxjobaiBdqP9ateeLk3tXj6HrZ2pvJhH15yrGYHxGvWaAQ3MdTeeVp3YcoZ1AavWh8j",
  "key11": "4d1xdNkBrYX5AFNx5DmbqBFbs24G2VMA1KdyaZU2NyZ4zsXznYnocSBWvEiehrrSLsDhvdcYaQukJutb8QNcs3es",
  "key12": "um9Y93FE1q6kdqrUKSekDAgWSfuGtB8QSdHfFGVMkB9gay3KSxf2XvkEFQmPfaswTzvjoQf5amfDbbQZWsQdZzA",
  "key13": "8WDVhjmZGJMynkxVE7xfvCbpfvHrZc4KrT3rgUT3hFxR9EVzUKCpVcUcX2Ju3oQKZrNQ91xptnmLkQu4f9Qfhzo",
  "key14": "ZUgk2x3PZW3pHU4wSWKdZY6SvxgZT2uPD3y8AzWnJL6e9XMwNbfQa4L2EzAXgiaDS6j8nEEzNhXNGkzxUoHXz5p",
  "key15": "3RGS4pSQaeWGrTFCXohtvC3kn1vPnedreQiUTFL5hmva75t7VE1Ew5BGCMLeJymqDJ6vi48vbCUgDbKLAq59RmAt",
  "key16": "4NGcD4BKzzJ9eVsJqL5UYSRHDLHDRxEN2YRE42EqihiiWcPHNnZ2MxESNLbpbbKUJbZvTtvN7Pu8JXXHapV8MYzp",
  "key17": "WGxSudkH6u6WWHA98qvG9zC24EgRR6WrUrkaW3WfEX8NPZTV3kzp8sZuWvw8ZRifDzrhDr5PCSkWXDQXvBaJELj",
  "key18": "3cbaTqHeQwWAy57Rn4GLLsuz9ZcKVnXHZiVjJarKZfmWV2RHmrwqPtkhVbA4xJ7vXduopHV42QgfDnbbwWQM5jVB",
  "key19": "iANHeL9FQtX3bqEACTiSWK1hiw4pYgcHgwPqaXFy64f9Qg62icX9gTxtfd5hVDKmZvxyDMfqyrQm2nnbKYKgdFk",
  "key20": "4PMPxuzCLPt5SLA9SbCJM9cBmRDr2WtDEb9eFbqFHiWXUxFCRb5h3PrkzoBSf6e6tdonTb9rYvkURGRUmRM1VmVX",
  "key21": "4vKRzYnXWMsiU5JrVXFXkgPvRNuH5oDNv7LLeUvXnn2QD8YT1BzU8qScMrkdD7aYXcRTddq2iMuRXS2G7o8715yP",
  "key22": "4ADmaJYoEb3mzCwqtwdTbsJuq9oeKhqL4TJv1gy2C8K7PL5i6tqpRZC3oR1PXyRm55dtw4zHh7w138vdEJqNdL1h",
  "key23": "3hVahE71rTQojuUFP8ZX66a7DjPjmThG2HKETWRGrvDE9eLHpFDzzSgc5oFePwLTUYzA11ywU9DKQE5MXsMRGKQq",
  "key24": "42dAUQUJBzVjRj8yjBJnmkQ21MEC9YhnmECSkCxp4wvQqobteicYKCMd4iQYf7uZqYaB3VwxN1PF4DsNwaVHce5X",
  "key25": "4aeCs52dEgTQP4dZENZs4MDLxsPJsSTui9SEVyxygw9WMBoVwiimYrELWZDN6KJiXCTnDu2kbEh1RsMedui6vAYf",
  "key26": "R3XaXNo5rTmAd9Z3RXWiemXKJEk6ED68bpEoQRur9FrqKPZ8jCCKWrgAzQyHizgmdSYQBioaLDodFuM6DSLBNuf",
  "key27": "Q5vV6fSBfZCYUQzASWi9AoWURo31JWKPVQgMVpGHPBz1E4uf2Jogx33EX5ewcWUsn7kf8YifVdPyuyKkhRmehMY",
  "key28": "3gB6xodnQWstRJTV43SGCaQDxXQ15t6LFuCUuS6yB2tmxHMyEfyUEfPwLHo6fGFPJzmJwJTNMjTMCSf2HCrwiP5F",
  "key29": "2i9s71jHxApeazEBGGxocpSF27kxCHxvmf6SbEWr4TdhRYTvjvDQBzN7v5Rvv2ss7v82a2aGhTn5Fn878RmBUyDR",
  "key30": "vGkXU1zVE6g4TVT2wkMARNxPFPH8r3hrtqo7ykSeUPiRSQjGsisXLotjWLd4AHWnF6A4KZwRTfJftrPwVzed7YF",
  "key31": "3LH9v6Fah6mSojoGW8Xnwe7FbDCPaWorH3v8iMw1u9jt7zFTshQuoQBQHggZvoMtiMgmQbTBMPZ1MD6FhevxDZAG",
  "key32": "ThYWoiwyZz6tiFXwedYmsq9WQ3o31ctv6ugdjji4D3d27jULQM4qKiqmhSGrEJBNtEckQhZ5QrmTgKg4qeMabtQ",
  "key33": "4BvDtvPovzKZe3B4zeDzDVki4FxjpJwveVwjsMMhtHGixVD75bSVYb3CbbMKwmwytHxpwg55iepT6yW2xi1S9Pry",
  "key34": "9kB7Xp7j4qdPdt5ZMRYLyiXXUY3JhGTv3BpnRRK9aNhJfjxjVbJoJs6xiamJTCS4DAiHydhw7c2L9yGDtkJtvoW",
  "key35": "36EvYDu6YrxTXNvJDFgtoqPmsbFNbnhHuX9F46i56hHUrNmcVtpZWfCA15Y1pDHs2hm6H8n4fppfrLkR4ZBAmqBY",
  "key36": "4XF6T3uM3sMM994iXcEmaZMKrwwiLWRshDBiS77haMcxhfhERhJACMsuigh7VQHDPKLP5eRJQiCwuW8S4LtJ6YZa"
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
