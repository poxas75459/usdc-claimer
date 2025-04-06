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
    "61TxfSHcWVtQKVPtazYCtKtsgGcrQqKfvawXFn8qWqc5ADKFsQYurHCeRA18Tt4UsfbxujGLng6wbyJ2giw7ADrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAZqD7yMqeCZSBpbtez6J82BVYxd5huzgrKmAizimF5B7keeuG4ZRYSrU9qsz62tvXbqWHPY61GuFcYGWCmctwr",
  "key1": "2pDqMEjEopQeSTtSFYudBDqHMSDnZuZpzYW8yhQ8hkMqdVFjGb5tkPcy6w5NK6X6DbYVnYQRvZ4YMrPsARB4topt",
  "key2": "4XCGzYyUEMFRNFi2oatxdUevNDKbK28SkFQD3M5rEAzSXkQSXs1uPwaeVrPRJZ9NRK3FsGnZ7yL1z6eDtW9UMWuC",
  "key3": "42tD8rAEVLEQanaezq6ddYJcBGuj3DqLgjxrsH8bo7H3SAXQ558JRxHyGXtVAuwPipWJkC564h3hm5EeoWEYYaDS",
  "key4": "5kMAoZbudPvxcAVX29Wmw3MF1UqcV1JEVTDtgp55U4UFmfhiiQ6pLYPsHdEhnt2wViEYKZijjA7XNdN9N6azjt6z",
  "key5": "4da1LNnKsdWthfCo1U27LUqkEc4QJMTGxrRkxEbdVByMS34Gdas7MG2PSJimotVHuHyGVi7PLdW3MFTRjTc2yYV8",
  "key6": "2RYLpj2SVtpiHDqHdjS982gtaMCWSseaC5WDxXshGxrWk9SJQniXSScJ3VtqZP8am2WhWKHFvohku26NUru5Pp8e",
  "key7": "49A1LWPGt9jakWcyUhWhYTgNCBdnXAGoTzjbc7W9EKapW9NE5jFAkp7wVXhf8iuqXN29pUszZ38jWPkf9J42cXk7",
  "key8": "3K6mT2V9LWVkbEVggsqrLiTE8BgNurFTeSWZPfdhVKX24ixw8u2JMmfJr3sVkL3CWRAWqB6nMcxof1c72qeStigz",
  "key9": "k2V1h78XmSdZykkRSJbjAwspkiq5sFabp5w6pRDHqpGXRAHt39JZM1nyTtxji79L8tYvhDZR1SYUAjvsTACjPU9",
  "key10": "5wG31KdarttDeMADpwFdn684mRP9ADg5X99HZTB12fG5di9P4hUN5E4bJE5USxMoetDeU6Gjyntt3JtiN1Zvf9RM",
  "key11": "5qZ6HgBCaJYX5bB553x963uNsBSJT7DfBy8gcvqHACEmb324Z6qzVZwpwkHcFn3GRzcMfsbjQpcrB9tkDQQnY8m1",
  "key12": "3YYgHzr3DkJPoK4VjH1e7xVr5KgxKeXWANtQT5p4jyc7ReLDzDJ6GrpFCSywpgtcFEVy6CYt6M4XgB6S6KXGzhJw",
  "key13": "3Res5MezcXFB2Kp4MhgLhpgYTPsYhN5HVtQfXriUJNrhNHVbSih3RP8MvA74XSxevWcNfQAHR7qcLDUw6u8cP3Pt",
  "key14": "3K3cjNVEYPCKf9eDgTmUhYBSDnga4sK8QZx24z2VL9cNMYFiz9SEkvG48EA3yJrbVE1HLihG51NTcf4BChLcaXnE",
  "key15": "25hjyoT5FKiXenYsuR8aU2KzbLbGzy1bJX5txE8HWn8HKK1wj8UsPm6AdXBJsuyBgYLN5davCFSEJjwytxinto8X",
  "key16": "3kLGfAMWwxAQsDwg1KcgujTkS3qgu7CtFdv1P1iv3r554Yn8G79vhz9gTKcZFoC7bs8XAUP4T2yZ9gY3PnRAaLDf",
  "key17": "5XSXrsnJzQ4rUp1abftdx6KmpyDgCuMkxqMcY198SS3EPts5RPimUVZokQp11eycPAdw4LcZoagLtA1zRVKeQNEq",
  "key18": "5hR2anDKSMSn7bNmv5ieCmouzjYcq87ZGgV9bZYfRGtUTfBk3AxaZq894vYyRbTGwD6A4cvf8qmjthKxJKdAQGHb",
  "key19": "67eKFsRA7sinK1KYNFLTbhi7kVEnvgiMaZnByaJbNaQbRvXUw9PtWZ6pqJ7HVap2QqjtQAWA8Rm3PmBzdxatv37M",
  "key20": "3Y3jVUWppGDFTNzfiz4rQSbSRqgWzT8e6PXcYCs23qWvFQoLVcymC9PA9tM1DYn4XWPofvH79kNcRZU37aeqyKEP",
  "key21": "Ev1hfRCuye7Whc8Pj8a5WTXUYZAd313g4PtWBEkYxDgNfzidbR5DrrWfzh6EjFgW7aHGT6a2CMwaGVRaNsyWFGS",
  "key22": "2UZvfidU6KRkZMNq3H3KgeaooyqJm365fmwiMf8qHT3ERac7fVaxAcc9LjCmvEc8yE6mYNeQe41QDP6oLKxLU5dr",
  "key23": "3awkPkUPd6N8fvQxta3LMBVN6c5VhWrkUkxb6VGghpHFycnG3CRJ2hS5xVd1SCpEkwEZqo22rpM5A9BvQCh1BKPH",
  "key24": "R38Y31HXuhq8ToMWevLWZpzLwjJq68ZgSfCs6G5rCHsUHVU5Eb5XuiJVhAD3mXh4T7m5XPH3S7tUmzAuwc6FXLf",
  "key25": "edtKeJ1eZonrne1YxYn5GbFPsnnoMFe2MayNTuyVRjPqFFnz5bpeUxdq44dcQKnorxhvFnWCbX5Dv5J9SXNiWqn",
  "key26": "22NZ81pVc2ottJDKednTVyc1NUiBziZzCkdC48AousUSFLZt37Miy34ksexAhNMJQ3skrtLZXNgTgV1FKoUBtD5i",
  "key27": "28Rg3gwCU7kYjVp7P7tseGqYku3Er5azLpkMP5GGYTJKmch4KfwhSBT4MpCVH1VFt3zfi7y9h4WNmtehceAty1VU"
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
