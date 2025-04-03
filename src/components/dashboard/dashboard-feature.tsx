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
    "5sJYmBG7BgUvGRWLJzWXrMt2DmGBwinbs3WwfhgqrpoTHPox7nwmvhU3AvGHnnxaJ9X2fLrmgaTJBQSfEtoFBeNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36MkuWHR7Y452vkwRZjbAkxfDziK3bAqsb2es3C22bEyHdjt4gt7ZSFwRfo2Gc3n3ATL5eVkJBrK5ueuQzuodToL",
  "key1": "5PkTUqx6J4jwJZU2vfaSNwNEfE9NyvXEq7hn5U1HMW8LYMBkqHNp7ogkoWKprkesVkJYYHurJsBb1HFXcSddzpgb",
  "key2": "5nX1ca2ohmC3tMuEh2f1cAXT5rq8DH1NEnLUyV4HSgC7b6cu7D9EePNGjcBTPEfrjcFUUjtLD9waGFCuNoegyzbQ",
  "key3": "4ryGnqg4AY2qvuS575cnb1s67WpMs5r1GevhrgVhqhtAE1gHTJ4t6x11YiVYn42WZ5mQC2yJeTpQYrfZ4NMAwm2Q",
  "key4": "ofXAodWvfobPb3afeeFSsY3iLAPESSZTHyGhSanEUkBmMZ84uFZBwom7yBzN7NjuPcZVDpxJGjFStJdFdv6ybmc",
  "key5": "5QWiF15BYfPJvUGAvQ6YpqKkLpHprHjy9Msgk1bu9dswXggemdQAis9StdxLJVW8vZEemj412ncGhJ96m2vYUkXw",
  "key6": "3HjPGCp5iRpmSqjCjVpYfPa6jec7FFeQKXyvbtxxLpQYo7vnbFPA9WbckfboxVmaw9bjXKRhoyuCRuY1i9jK1GHV",
  "key7": "AsHjcnEzTmQmAQSuj2KdqTzbK3WQmGUykxaZ14bHfuL3No1znVEz7k5oBffeM9mP32W2BLH5HTYvS9MjuLQo2CY",
  "key8": "5ZDHGfzjyXak6qnkjzrn6AJ4CzfBjnyPqiXFjmtWwo1nfeDUmQMtaSQ8YxDBtKSga3MoDoLt22v56BTaGA2zHitD",
  "key9": "5wsDdnLBEUP7NuYiEhyTsiUPHSFMsGwHJq9F46A2tuaShAnMiREZiJdQ6nNMmEfQZSZaaW1NMXDG1vp9xiAo7nRJ",
  "key10": "pTEpgQMCprgVB2NX2cPNbW11PTXJL25AjmU5Xix9xVYQiJRBirsTXho52fjiyPg9MXoFgnNkwDjxtpCYPMFGrre",
  "key11": "4aG3c4LDjcCf3vpbRzuefMQNyuQ7iwhLoLrmrfVii8c7AoXKhwpKbrMqjTJWHCa3cLWk5GhuefMYf6wRkxh25hfP",
  "key12": "GCsimhzTHsPpTBGfvmEJaTtzTDT3fJLWTkKyFkPCbnMUenY5SEP9T86J6hWBzaLoJ7piQvpQsT4HNvfDH2U2jgp",
  "key13": "63K5M2AHvpsndvtcvzRPCwncKmKuEXqfo5Z7J5JAw7H2aLnwhFz6CXtjA4BkiWknxyjosQZXP4a6sMEsQLoZTVKM",
  "key14": "ChfS6NZh1qqVyCPLCEGe3TxA9SainDhhFFBMsgnGfuusquPPEkaFuSv2wkStRy3PCFq3txZkh8dfLPUhrGXRYmY",
  "key15": "U7dt6cQH8ZSLvGQivVeNvmky558VYoxzknnew6c82NPjk9Xn3jpaV9tEP8Mrd1WY5htd6DWQKMrjWZZRPK5VCEs",
  "key16": "RWuePr2kn5zSAVmxzJ6Vob6tqdU96GTtbVE3tFZHkFiDWCo4T8yHHJ8GYG9pyaAU2s5PH4oMN9JQcC1YgDagvq7",
  "key17": "26RkETgnndSenumB838tPR4NYUr12TQLZqCKVtRXeCmPcmzhZk6dcSZ5hqBq2idmhUBht1s8AYmpm2R591MHZTF8",
  "key18": "5FFin8r2Bfe13owT4zQyNcSAYNkqcS3o6PR184xS9GJ4e7HLL7xqjhbUEa4RSQTF6G9nn43GuvPAMDt7n24JFxyT",
  "key19": "58rbvRi8MYrioSnMh4zrASrt9ztKkbFaasMndmp9guyjHKyRQ2Mo6fPwHJ9cXuK8BJbxWoFQucWd8tGTMqWECAb8",
  "key20": "5wGa9XPM5GbnZS1SSSgnxSFWmGfNhgVkjZQzwQE9fa4R4yQffsTomVjGMwJb13i4YbyckGSucSPS63cSohQQNFJj",
  "key21": "4o5pUGjpeGWEJgPVRzvxxPBULVzQ2LynGqpxrm1deDn4XFnPgpqKbGTEGx36qtg343aRh9AdqSQG1fFM5RQbMysJ",
  "key22": "2MgrangQGBtLnBKPBxGmSYzBrZ4UQwie3AsxfveC3tsaPN4jKeNNdaH8h9z2jjjNo74QzSjkAn1YLwB1ohs9neEN",
  "key23": "3bfEsU9odGoGerJV9mKVH9mmBsdBwBmCwQHsmaSY7tEJBeiAE4fHgve1kgfCXykk3VZR2zuQqvd5dRTSfV8R6XLJ",
  "key24": "2vZgQxJ3GqTmt2yTvPmLR1zx15RZ4yvsBWDkWDpGSP8s61jg1K66nqdPWkpyG3DSKwHJzr5T9dfGeJvzL2knumCy"
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
