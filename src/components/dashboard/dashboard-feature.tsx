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
    "5AphAVbAMmCRWbVHvp5quRZTffBzS1ajaSpfUZ3rJ8S8H8thzmTfdekMTXbruDfsdAEKZpUQy1qqT5JVzynz1mfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pk9ZNdSujQtepKm9v2NZ7pogbM8vhqReYG8mL6RBqK1yBcjRYZ5P7SceZWpjNJPZiXuiqgST5RYitR75ASduwm1",
  "key1": "5gZVZ7qT7WC3VH7LBEsdXhN13ayEugf1E7YSfNaue6nJrZGBRD6CZYs9857zX5MxeRDRqyfp6tUWq15SsBawxM93",
  "key2": "4KKf3fiBujBjTCTqKzLUDULudRg7c5NKnzwrYUctEbT9S51NhfYGtXVYwzu2NvnWGDzUfEjPB8aAtcyc6JWbCRYQ",
  "key3": "21Yy4q5cubojoTRFfMvFyNfdjX5Rb8c2Q7B15F269NM3dhi64uan2yoJr97Wz1FC6DCHukX8pUb172jbuB9e47F7",
  "key4": "3S25yQpwQjkc3ZjsdeK2XpJgU7G38k5oTfxLQoeEPqdkpatj82W7pVi8wsZ4VkADhbsgGMp4vjtMxq64n4yUU1xg",
  "key5": "iWj1wQM7fTyt5hmUyBYDoMiJZKU1CqvWzqG2qa19493S4ssuvDmQ4kr6TkgYwYEMKvhfAQzMwFekgteCUZwDup6",
  "key6": "pja2UnmwWvem5Zm1DBnwxnihqG6JgoFBd8BRqpen1u3jjbV3Mox2cxqDBCrQMaHguj6ALm41YcC3wZK3sw5Qm2u",
  "key7": "3S4NXuhEQJh2rZBkBeqHKSqCSSMv1C6qe4x6YzJwrrnPD1NZHV4WXMftXeoB1WSrZJgNdQJeV7kmWPpAxWDQssim",
  "key8": "43gUtouXjSAB3WJBWS2taHC7gZxmysuqCuGjN4RrLEMmw22cWKNvPfHC7EERmuZFnPs8F6e5fMWJSV8mdYx5CXWL",
  "key9": "3xHVx6Hx2LyEgzXzFvRvrgAHFRmmymEpSqcfrtHUTRszQwVWvosizaouyqyakLpHWd2is3AfQtPwYCQjgyEM29dg",
  "key10": "62P4hTAPkJTpppPyyiCNvmh6PjrYK4T1Cxx2HB2k2Qm5XTHMcQjUvULN1jQa5zWB8o5phqkgKQmxGHdqaaxMcWz3",
  "key11": "2a16TZfFefqABTmqqtxNRwYv2JLhUAusYEevs2gfnKjahUySqYTZYKRZtqNJvTT5Uba7YdwskxPgg8gjuzi8dWL4",
  "key12": "4Kz1gNpVtazY4YbF5NnpUaHEKspARpxRraYs5JTAeWH8j7ghhcyJqe6pjoEM8gZvPydN1WHqWi35ek6ZRB6SW6Nb",
  "key13": "4BK6vo1nUvPSMG1ofBLahjTBqZpXTQPtPWDrDpMbQNSPU2V3VCuBMQAQKK41VZZQfBVBtbFrQYspiadXB9kYdEu3",
  "key14": "4AcnarqFX3tmJgNRVDZzUoA4hFSBy3cx2rbRXU92yJuvw367g9JsakL8hW1bsgFpw35T3ad1hJ8WPABStYuQKGfn",
  "key15": "3RYq6q6AjX9uMmGkEosoW338ZnDGD93zhwCfCPrq4anHagubDzPiFVawZoEHNo7JyA9ZRvF444VfdqukrUyQ7VUC",
  "key16": "5F9uDZLphkQAeit5GZadKh9QsfeV6ME71p7eQyinYcmmzqnyGK8Zq5XHPNCQAMDwQiEWQpZpKuqxGgEYbg5qdsN3",
  "key17": "8aCnMayPVYeZS7vfctnLBeK2kCQJWPhKoVQ26Ma6KXTPLtMFEhLHkXvY7SnxabGh38rzsrxxjgm2eUmbowcAJrz",
  "key18": "3Wo9F55HNkfLr9ktu5nyu8DpjqS3Z8TKLwUyqrDyMHDUUDaj3gkrn6AbFeRC5qNig9Z72wkGjs7PTD5BJbd2ijds",
  "key19": "52YhLubbhsdwWmWwhkpjeQeRtHQhyfUh4cT5ExxVoDTDzFHHCeHp8EXrbJ7ugUXfN7MjN8wXS1uou3NUtkhFBra",
  "key20": "3oCXDuCheFbcBoen76aXYQbURhNULwsR9S3mjdNFAVngk24PzsD2EwHJLRnxXxyvgiMoUbar6JmK2uLrrzP9Qe6x",
  "key21": "2dyRZRwzM3izQsRzsSEar5tRmFXdk52Td7HDTXyLeHCn3fzNQaUKsVnEr691cghn8egz82UzoEudVFazTe7kcC3g",
  "key22": "2TBS2MnbxhoyGuXPHAVSFnfdjuwGA5FtbVc2Vr5rFugnpq9rVDs59Up9XKkbQhGHFPZYPW75eiCkk7Hcw7YbQ3gq",
  "key23": "rFuotU1LqcCVBqE9kdRTv13Pj2DuHmFgcDof7g63tAK4WZwUa9Ne7M9NoaWPZdtsyTx9uF76mw7qfWiHvDqRRhY",
  "key24": "kwMmii345pRp8Ro1BUq74nsqVooN5B6v8F4eyJ3PcFBDbYb8efSjjwzTTjhtkjkEUqp9Z2uaQApetzgA4sMkxYs",
  "key25": "5hYZEadRLiQjDks36SMrXPUSuNRbWX2W3CG3hHJoCy1xUZXXxQEgiCtnVhJ7oDC5VeazQGFByyPRCdvyF5g53YKS",
  "key26": "ghUYnjACkEefk6V5gxFWe4aKsi6g4P6DQSH3htvaiQMdPjpsiBpPcQVuj7RySokyrvMusFBH6Z4X9vWbcnhLCRD",
  "key27": "4dTNbpCyKteQCnrWWKHD1boKjnvoUv1X61QiZ3uYLuZJzJR2z3adCq3ECjRvaEPnvnCagjFbUc1mdfHUGb6s9PPr",
  "key28": "UabL3vPWBsQRVERJ4XwinKNdeFY7QTJZHcPbWQHoicvC3aK2dNAeeZW3sUfqeB196FHnxBNJjDP6uAcFRmUTwQ5",
  "key29": "KbdaQ5hQUZY7EiRFGn3H9WxzKmd67bW3ruZiYWDhZcudsDEFRPKBwuTx4MmvcqTtd2XunbWiX57dE9dMcueaE5K",
  "key30": "aySRd479Q1yPgnpAf3XcYMmuK5NH8g36kQSsKUiDCsX8Mxnacfsk2vWr6oS9GEdsyysBWQC97r1XzB8um7XroQU",
  "key31": "4ijnLRRMG8JVAAVZW3JMRJPpRm12eCiRBhgwZKPRAtXehzw4ohXJpaNYYfqKvYRkP23bX1E9grMopMSibKfUizeS",
  "key32": "3FU87hAH2nnRAVPvX4SJWCHew5zeQmzn2U4CYrHzW9JPQVueVLYzhcBpAyGRsYPq1c1WH2QUm2oJzaYAnm8pLQrY",
  "key33": "5qUcZgwJTiZi6JkruzD3iMX8SPpGLzmEd7RKsBRMJtmTkgVyCAbwpsQwDwV9UP3XoG38fNFG5oeGxoQzTa2LSvoW",
  "key34": "3EUfocesTK2Z2ViXpwJi6MBWjq9Q21B8YXpHXjy8ZYmTBaePZFM3EygWbhi3JGKVMZyoeAht2LgEYiXGAdFQSSVv",
  "key35": "5WtgotUfftPqjfR2gcgneGHsq5xTsAduF3t7x6VH4hMuaafqqFwBGdg17x6pJocYTcU1qJkkVUNYZD36Rtiv4Biu",
  "key36": "f6vESkt8J8V78QkEyQ2iiPk865FzvPyQhrDXCqL1fznfvRhbqmR9UdCfSZgV5qLM13fta9KKGcSiwjSHheZUAvo",
  "key37": "5DhFfydLb2L5QtTXdgvovVMJxoiVMkYKPxbuyRzcijcv64GyUza8LQW518XUjAaeeJ2vmMSLVgRmQ2cBQAx4EB2U",
  "key38": "v7p3ckGXh8Bwo2gkbkeRVGskgGAGs8nwxW3kYSyZhJYa697p5RchgziMCz7jYsJBDApAtmMKNQZCE39dA7WStYA"
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
