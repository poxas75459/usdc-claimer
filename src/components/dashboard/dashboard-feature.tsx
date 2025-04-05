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
    "3SQQgg5CGEyK8q8cQg4ZYqrJzkzWH9TByHwHoCAVDnsgnKrLfA4pNc1spQWNG1BtCBc8u33Vm2XGGdpSV9rMAXtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VrMzLpWEFUCi9BLfUvgA2cPEG5oUHRudhcUBMXgP89bCrHWU2B3wGDmiLbX59VxSXnCnpj5zxDeqC78PXj2jBb",
  "key1": "5B6Yziku6Qefe7zgzaWcDYaixzFBwXJut9BTYY5AdJA6c4GpVoqqNxheiC1tgQpJ1cuu9u237U2Pk8arnDVxojM4",
  "key2": "5rZYCqtm6w96iwemfQDJiEQbeFjjmZpag7oug6s9DAkMyamYKkvfMo9RSgDnn9i8BuBtyDaRSUiSKK3qCmnpWWQK",
  "key3": "5JWd5WSbskAb3Qf71eLK4MwDCUtTFCsoMGtSSjsw7kKYXFq1fQx412Vc9dzFxivLeUNmaGsFK48pCYkJAGGMgJk1",
  "key4": "T7VTCQ4iFbRCaggq2xCcTk2nPnW1pNGCzpUyKfNcWNn54JLPLVTmxkBgasmjFJ8wtxZgpv3V4A9SfDoA76cXPmP",
  "key5": "5bihwMM83U4RbQfGt7f4yJu8hgWy9FEGGEeVEEm9Sw57EyeLZ8QtfnTwC6UDbmbPt2ChUBBVpZQgp1hArJfa5WFa",
  "key6": "3Eu4qW6sF9GcUwZhdQSKwXUUvoZPhmvHyiQ7nidnX5BAdRBN1JeBuuewQhMMjDjpvomWNJcRv9jLq6UbQP7WzsuQ",
  "key7": "Ce81Mqm1YeircM1AxhkDoZvkizyXAqfsqnGv4r5zQBSHThSr8tKNZA9UykEdx3LAdotzrXFw3UANEqmbaczhhew",
  "key8": "4AKJ1gybQHkvarXSpstexN4wHvy4crsQyFxVMQu3s9H2jkHFUw3QCwqYJQyyADUbQso6dr3S5j9TJqeKzMv2nLMo",
  "key9": "RmpuWVA9vWciSCiTqLwFGgEybqtkZv1bQYTiguageB8KqKeSo953nBYNkfeNX9Vpj3ksvoq6YusTzhQcfSFmDmf",
  "key10": "4XssTyPTLaq5LpF4D74anZ2yGndGtopLCTNTbUgU4cv3E3SWuLFLEcNqpzwtBde9fTdW221BqFaQWL4H4XbmyE51",
  "key11": "dYvkJ8iSfVUMspLx2Wk5qRvuDQfX3x617f8da2tuyD5G3xQd3ZSf6ukYthpZPXeJcGJRLnJ2CqYPu428c1BiYF8",
  "key12": "5NCfXa57HsPurgXVxRTZemJJas14miiJRKwtxBE17NoGRTNFTsr8bVDpXvhrP6uww7ReuAe9idkavZY5aYCGCWtM",
  "key13": "5SNj3SBWKApDbgXVjYKGtPCAP7nyStyVWB6htELMDUGwFMJ5tQz7MSNqPmh7R6iPgmhS2xS2rBDCAYDbh6mhFMxs",
  "key14": "KWFhDKNbkSoiBbxse7hjscYBXPWt1BCFEodwAMabZnF4btzMj9bZixnG6xTJjhjGW7A1pqS4kuBZ5ZduHLBpu4i",
  "key15": "62oV4qQLQjV4XR9q8Niouhydw3eZeAwopxHqHP4ed4se7Cg8zpDXTxrLViNJRSVoF4xDEB4RqGHeECpbyEgvYZSJ",
  "key16": "SruCKKWHqsZgubzU8s8dwQdZS2GJbALTuEWGdf4pjdiLuysXYeBqSngQhVTnEgUQ6zPkogDuBhcYZiSKoGxsZ7x",
  "key17": "3ZWSm5GGT4B7mtKseJFwjukPAUg3Rx8e4YgQhSFhGDEzmFZ4MixNKNvMsxFHtHYsKbte7JPGGsf734rCvqExHxJs",
  "key18": "3t35RdQot6Gx3767eYavNgAzTGTL2AEpSKEf8HzJEuYyFeyUrXJzK388DTufMT2MEfjbHx5Ap5LYHNGdMtvqZLC6",
  "key19": "4EDcosAsbcYaJ9QdybCW1PYzNXb6cYZ9EeuEq8u1M9tfthZFTVkFEvMNAHRLeLSaCoX3ZqSCmc7eTiAQ4MgMkE1S",
  "key20": "B5NCALrcECbnS5ZcgF1dz8eAQY64WTrGWkpwVca8M21jAVLDb7Mm8yqZ1wG1xb7iVou1Td6pHSNtXgva2QAAgK3",
  "key21": "5DfpBLPd7iKgsbPdk2DGAbJYqGKx6nt3Fa5QVEBj7XHwmGFKDvnkUYvton59WXa4odemuGQMuQvpeKj3sjKzJNRH",
  "key22": "3Ew7DtHqRxsFqupzgt1uqqvoqVeB2GZqK1rKFJm9QrJyyP9GpyzBBJfqT93t2H3U431hKWRixtvjZrSWscvQTKaW",
  "key23": "dJetq6hg7sZaSm7a27DDgsk9d7yE9fkBghG6w7pAMhrAPhFoHUs13riNsj1qxNEgdxCeaTwnkic9xiJPK5iUxs3",
  "key24": "4S9cGPFLGJ1aMayxjuQUvPwmPbhKGaUPtLeatas7rxkURb8WaLm71fMfDSsEpudkwYMbWxK2cFsexF6PHK5HMKs4",
  "key25": "3yA5BQ1Hk4VL4i3aYBoERnDYRsSsvQcKVBXgh4p7UmDgYm5AA65Bkt1UnUhsbYJmB9VzU9FRKudy1segtVNeqMEA"
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
