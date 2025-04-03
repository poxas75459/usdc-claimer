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
    "scEXyrxfZkTqyf5v2wGAX5pBsdq7LNc85EqANq7HtQVJ5iHTVD3z1g8efKayJrLUt6f67Aubhw4uCzq3JeDh7a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d65aKE38rhGvgN1TWLPx9bDCnccbA469LaqTcT4Upf78doDfHBrZ3Mt15a2vwoUVSt91AvFEHq17exsm2yD87hV",
  "key1": "5s4drwD3aTCiH3zMzFiKY4hJj63rY6CNkbQiPGR8ViHNdJ7KYUXNrXydwHdD59xY3SQQoy8evFpeBWMtRMcibahv",
  "key2": "31RkXyL8Tr3Npt27Kddt5o5GUnShM1CLdKJvyN7HiESHw6vcE89KgpNQhjcFuhjM8XQehwvq1WYenyLfaX4HLzDV",
  "key3": "4yD2C6asmG31A77HXtzxmTfjkBSRqJrxGFFKJU2dspuLUSmp9bFEK1KwYarqjELGEEbTATuvYhVXcZXCghFFfw8S",
  "key4": "qVTxfGATxrC4MbM6ZNFu3WyENaXJcJwMxSA5onrECuBuARr2kCSKpjPksesn3wYjKEvqG1hhRpFVJEB873yeogA",
  "key5": "5K9uGjsE8qti7Th9rM2TCX6fUqsuJKCoSZL6Q5VFbsbAf3mQ9RqqxNAisJXuztb4Wjszk4y5h1V3QyxNzo5tgRcr",
  "key6": "5a3EpM9fU5QWM4TgFgknXe5nMfmz5wACcgNh5tA3MGLtgQzJkG79PyYXxsRNgAZ9pSTPcGt2EbDdGTxcM3YeTka3",
  "key7": "PUcEoNCV1kEfYXTsFdVAvEuWe4v17DYf5JZ14n61iYTT8qw5VwjtQeAknDBn4LdECrKhNrPvh2jKx6pVTNTg8TU",
  "key8": "66mZ6KEVHR1kzztVXaXr4rexTVvTa8tT6MvouNXSf3y7aQxGjoa3sbBNbDx2CBTVh1SN9JNVGkwRhJiva4RPYkbW",
  "key9": "AtxNBZTQAQoLaNByK1r3rd3CVYioEif1euQr6BLQQRkEZGqThXQoJ1bFzkESXdEg9amXKLaSSaPpBQXRq8zQjdx",
  "key10": "4d5648N4w937EGfbXg9vM89U8dsCipuQzwU7yY1eK1UWb4DykVQDNTJMRXDQ2bZJckjAX56bUycrzYwCLQg9xd24",
  "key11": "jX9U111qcjJuKdQ8Fm5MzTQ1G8MrQi1kKu9uA4fmPssEHhku7Wcvja9Whd6dLFGV4ueg8YBfKnKxmWaVChHrw8Q",
  "key12": "4wDxEBPHsz43hLM8pqBGQz8dq72AKZbYv3RbKjA1mKxEZwV9NKxtVRo2Z2GkSooZ5YdD965uCfSM8FLwJKVsDtw2",
  "key13": "3y5ErsePjNtFNHaQAG6h1gfhCrYWEpNFwnEGc5LTpcC6bTMauXG9fSoFQGaoBgN7dHNxckD1Tk4kVs9mKWZQyPK3",
  "key14": "qmceduPBMKRGmUCXUQsNfgT1v8q1KG3sTtCVcXYxTKUFzwkoBbmtNh4AKZBLEtcpDnhgY3uxYfksjzJP5qLvd2n",
  "key15": "PWNMAMhBPQTgfTq16kq5BKygVJSKUTPoSQ98i6uW8ui4sAqwvSXtRwMRq6jKobTucBDuQPDvgaNVi52DTGDdXcG",
  "key16": "3qi2RkKReMoiCBEALmtUBVSGzZiUECLXNeoxyE3MkH2megH6wTLNSG1oj6B7uF25Ke83jqWyoYJBMXd9B9a6xiRV",
  "key17": "4VVFe1a5jvodaBvonFpy7arHPK8AcWecLZ3VCkMiraKCwFC2E7JEFtbqFVWHhZ4BhHj5dfBFFwYK1YSdQvQotfbP",
  "key18": "qfApG2oUfyKQbz2iH8hQQpnQvisnUMdzhkU2LpvoZRhS7imhCVXuivXUDYcgNjhCG2p7apfawac4QJNoU3RyM1f",
  "key19": "4ETJqv35JvtpGgk1RmsbehceGsGN21RiJcS6sTE5ohkWU79NW3XucCTYJs6hVvnE2W1ijdQNpvqSARExNvD28DR5",
  "key20": "4sPpUbqxoCHUXXSdA8YwfMxPNykJisGiDYPdLhjT1xMLfv5eh78KzbbXiQLzhX7gsobqjoFD36mL3U5nbSkPzjpj",
  "key21": "kJxbLaPPzA2A1n5EdWRGKqqW9yEVj94282r2JZp4wnPMdnznckmtM3mr14dTZ689x3zBrS7qTsoyuFjLJCjMVgq",
  "key22": "2AegQ51YUJMQpZnKpuh4fUikEepvYpU9XRrA8F3NjJkNC1mpHmCi5tKcXutws3MhvjRbcX9xZt9QEsdXayPmJ8Ch",
  "key23": "2oGhfAFKX8Q5uiHwaCGxgEGj9tU9ReB7uX767HMePkkesWkocVnYxxe6gxg4uyxURTPzhCQCPVqAXtpSXPBPA2cp",
  "key24": "38NJhqZ9pwxnyQej64cFxTkenxHBH7XKiNiXDuQZ7u525yUj7P6bKEHuiqMP4T4XqNSSSznadPauWwZRn8zCRzE4",
  "key25": "2pk8Yb92QcZur8ybdQb51DYq6hCpADfHHPPVXhrh6wCMyGWcesXLAiQ4gt6nG6ugApt1JHNsHkFP1tkHdgmwdcNp"
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
