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
    "35VaqkRvDEajDeUp8nKb9kiNvba1giomLKHXMvudVcrU8oPfMy5cxjNJ1JP5Nhq4ksdEGzaoHcnBVTctWvP7ZmfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZaDTjYx2UqgmgTR2DfdLz1BrA6wUgiyFF7v3xBhmmbDXJ2qyU3h51z8CH1FdAjAiDchZw6vgJGKR7zFtSqGV59",
  "key1": "31ZjVjBFVic4rEy8fc6yiQwc6gXwH8FzZa7j2nJxbYGAYx6YGjb8eWDeUEuBVCuUBzxgRbvGP3ZsgZZdFDUx5oN1",
  "key2": "4cPWRpykKGKfYbc6F9XoUvA5DLk7euyfskH6tGtcEbkSrp5B551gtojKgCCjjJ1ywYVNVaKhu3FQdsoY12vjMjJ",
  "key3": "tvRe1UqELDJcJXwnaUA7HArgUvzwA1A2aDXyJ4jWPwrF418Z4VtkJZfyTB6co5Xu7R1x1Ggon5zUFZN7wc79R6c",
  "key4": "2wifavmCvnDHkJJKm3kq93wsFeeGQ8hpv27Kc5ZD3jmsUgXj1rYDYpgXXPt1KsJJrb8hcFTwXeVF8fmD2aTYvDND",
  "key5": "2tyguTF9qrqX8qZxAscNUXAWV5CU2Fb6dADAmp4Cwa7ATPwBqG65Vm9UzPyjVF688Fxfi4NxN27Ua3CzyaJLzHZy",
  "key6": "5ZfSd35xmjLNc6ySUZEc7WobnkUycmmD4DR2Q2HRFCoVX72cnAFj6Xq4xzTFbumuZiQy9dysFjEnjFCY89aYrkNE",
  "key7": "47aJnMPHiSfLXcP9yLnqmTTfay6YEjzr4zUUmggQL5ogwAuAVvfgQMXCqqi7Ey9KLNmuL87dXoDAW2vBLN7GDC69",
  "key8": "2XUfJerehtE26JN9ZEmfSBTcjzZ6LyWHe1easmNEdr53rx2JEGhXJA1p5yCpSAe9mSwgEjreMDcgsSZUUGoZ5cen",
  "key9": "5GFosc9LRHWppsPyNogKNZk1dSV5nYwBs2LsURVHN8cY6dXxPhRXrY23W9ZmzNJYEFH1knZRpK7kLyBiipPkuUwh",
  "key10": "PXQhemcPuBD9yBC6jdWFSuT5TyB4P8hMAg85rvqiGEyCvmKhnNXF8F5y6HLTqRFcDhbrbMy8S2cHmM89rzPv5xX",
  "key11": "mpEyVtz58owWiBmj23AtPn3XEk3Lsy38kPt674LnpNMxzEQeCFKTayHnkWoSY28t4rs4wt6zgJCiH21w9YAcKYr",
  "key12": "ZYBrQ6Givi3GFMnJ4ir8qGHtHgUySYrMhsVUZdJms4XV2Qyv9ndr4ModWMxdYvmkZSsHShd3DXpTSSsPHYu193E",
  "key13": "2Ti3x3PwM1F6pJffTG3WNEfPZexX6dYveY77rB3x7zjHUTLAvQi5hE5Qs2mugmU54Le3twgYN8XbaPm7dyLfUDmb",
  "key14": "4Bb9LNmVGs7GA8oajdrbgFQUKhUvLdBC2HVAsVEKnneV75zhPswmR6RjCN19bzCDYKVd2CoXFZqrHkaDkAt7tpEx",
  "key15": "4QaXfYusB8EHKX5SUSGi5kFjk81FXxoZAD4advYNMY1UXrMuN9igCQezMigpeTDcHAa2UQabHJjj8BRfsZkUXzRX",
  "key16": "TJ5adKk9QbvvseTPW1mA9dQeptQXJDsq9Vq2Ytx7mhbRVdV5QaBwxpVSFWTSgNYMxVnRrhyQLEeCyBxGeS9iMoz",
  "key17": "2pGLYnCYePPDr4zT5zQ9yae8zv6YRHVKQ8aL2JMfPWUuxcN9ZVtMWDLg1cUUhrWGxLZxdRRuAKW9RRS5Qd17xNYi",
  "key18": "2tsXNuFzmHEtp6onT8EuaAvxK6VzwtarGRk1pibEU8dFGHeYiWAKYzBpr5sGva4AFQvUrKV6KDASEh8oyhWATgyo",
  "key19": "3gsvzbFjpA33vv3kkQiUxnAFFyDNXAEURazPBnDGEanaL5SuvwfQK3zKjVhPPRr2u2mbjxvxkVpewGvgswHarxD8",
  "key20": "36VWXDco1nKSoSJinxCJZqgpt6dVdQQf2MUZrTxwpbx4CDrcu3Dt3GkJiG5eCwhzqzxqtgBgEdfgqyrV7H5dzHGS",
  "key21": "3mSHGimSytjEzzaLWLmv1jSpDhrSMsGKCyoNeyQARjCkPsnxkdrhZPbtRv6MiiaXXDN81uivWAw9BAGSwWdmcy8T",
  "key22": "3scAGHNWpAWn4dTZHjTZRDHfokUrs5De7bY5P8kWWcUHouosPWAyzLHYZm5qcdNAe1zjbLmJ2gnywLDoLCmNEbaT",
  "key23": "42xTp7uUfJNKRHEoZEdWwEABKVaE3NBoSAoY6tkhJ5u5tTS8hg5nCNzo3oiqNCVyhGmp4jST2YGqBBSMVaNan4Tp",
  "key24": "26ALNbZJQh8BSHqUimQAfUqTjjK945vKoatVXs5yFRcWrMUG7gfFu5owk88TnGccyN37jkdvD4tRWVarhsw6u3pG",
  "key25": "4K1TLnKV2X8YxAVhT8MkvQP7oLXLB5rH73vL42VaqyesSpqYSR76qJQn9CXTtb8foZTPMnssdGYMSDaCpBwAKiMw",
  "key26": "2aEoA6Cg2d6KdhBfkYjiT6nPSbwwwWyNd6k6nqbhg8hiDGhEyLbwgVtkCM318rcHPDNdfNNBi8s8wQWdTDetEYdt",
  "key27": "3ZMWKb7gBLKkBo4jriceuuzwpvDFA1otQtoJN9XaBswhKp5LzbsAq4JQojcT4wAo36h4315s1733MQD8KMWB5cbo",
  "key28": "3Z8xmUU2VCfz3PvzspckxuspJWGLaVrSgeMUieXYqFf5mD43xv99c9Z7STJRsNZrU5fPffSexP7zbbY5K7QBsVnQ"
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
