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
    "3v9caYK1zF2n3SJGCKmvEnyUNHMtNb3idAnDxTNtsYmttnpeSeCMENLn88aUge1zvCnVn7LHfqERqwchJngcm1B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1LygBbseDgHe557fn8QSJJMxoq7ZAh6dm9vo3fYoKvTf51XtSbHwnjgyHwj4SLeztmapfRrpu3Yhodg6WcJjo4",
  "key1": "3iAzmGYZshmvAjvxHAj5ZbZi6ngTCLKHxRNu2YM7bYgbHFBo1CQLMR3GMCaxvtceDKYVPpKQ9sm9n6MMsuCes5ae",
  "key2": "EkgCR8LsignYjU348TRsCD68QGYV7djZM77iFVYcNXS95AiMqYDT4hCiyjVKahMkPmdzzFnQAeqcbSvkeNFtpXk",
  "key3": "2RHPh9MswTbJ1vVhKBmfs2jWXiF6TRRtz8zBMf5eFueVN78PqrryvrSkxTdXg39ZAaQVk2b5furcfVektuAsj9S",
  "key4": "UMEsJCUbmCXPsE649PNdEcdLuEjBh3TkqK3va5querd3Yxf4gfXZshz9h9KbJeSMPcu9eSZ5gRxaX6dP8FBph4N",
  "key5": "4hcZqXAqENjKkC5G9gncpid7Kmbdu9nvpjuGYTqShg2qqrL2g1JagxV2cC39wdyPmfCkR5iAdEye3CE8dD9u9BMo",
  "key6": "yvXyTyVovTCcmvu72zXpXAW3VWQEZaPR5FYZLDjapXvFUsV74v3Ct4iNXgoPQwa7QZZZfvttj53Zo8RyMUjsGfH",
  "key7": "53WT7EKzEmdSoRwyx9teLXW3SbdmixUxe3gfeycECcKHGvGVPQ71ud6V774N6EKdRxF9Hj145z6LJkmjtFRfRbQa",
  "key8": "4kqCM7pT6wV6bkWpusuhC5p1KkDYC2ufS1MwTJwwyUhVaxbB2wdzhPRBRXGatZLdq2LGJRUbDXcw4oVo2ktvsWh",
  "key9": "5s7XguxGBN36XNZGUc91jbSRzgURUY83hb8L7M5mos59CcJSpcwVRxNnNW7pGdiCxrPci5rKkCssRf7WgRrG33Rk",
  "key10": "3uJHVYoqp7TbyED9Pvuw7WUPVH7T2bWMiQDqA8ZCP9QvbFmEkDGnHPcTHzc2PXfeR4AbBKZPpgSmwQzELDHcY1ux",
  "key11": "b6UmgGzitTjhfdkD55omJGnct6bqLFEjzdX54fgiPHkZm3npT7K9YjaK8ogoGyJbDV31hrRsVKA2qnbfD3YqbRY",
  "key12": "LqM7jmCxS4agMPXZAkjRizrSsyUh3uzGcPvNwzxxnrSHFfbk9kerX8CgC7e6wr3YmRTZJZD8siciFwjsGU7aLx2",
  "key13": "3j7zr8EH6811ADELNbM8erY3uDfv3ijBWM1JAto4uf3S61GDJTnj3BQwxn3eTJkNMCpJMxCtEjRUsZPhxLGL399Z",
  "key14": "51GqQGMYUkDc2hbJeWhvMS96oDaBQzPoqrqXTppy9h3McBne1NdFt2x1zMMJ3rQAjwgwDbb8emwcG5hWPzSqmS4D",
  "key15": "2JTJTvxMJv4RA4Yf4xKXSDVsjWHFFJKftMzN4BbeCuNdyYRExDkbbcdmS6E8NxeN4PcnpC1fY6CevTxoZfsaFMGB",
  "key16": "q8e5TuXeieTeSrkroUhWi5ABnqZ9v5SJ1ryHnDAi8jodewLxf6w6bS254VwcfD9j4SanbXwjjPiViNZqGjV3HEz",
  "key17": "5EGMAQs4s5XwGeM3d6DnuByWk1g2GdjW3MDeJSzkVSmR1UjHhpBtTKBwZXio5C6f3291ewH22GRSebv61LGqLmsH",
  "key18": "1MQHz8Xgw8qxNsQbjW1EoCZJJ5sCT5w36jNsC11hyxz8hhAvuofzoZoG4Ac1TBa6fZNoazTvhp4LZdDLNvQYPsT",
  "key19": "3CqVDyS87iPSuwguWpwwvpfJ5jZeMTCmARydB7yDFUjorW36hiym1whZw3ZYjruWipvTUefh1sruFGy2hKxdUKvy",
  "key20": "akcwwp2gDGpFVYjs74RZSufgTVp8DdmKS8ojPt2CUHjz3seFk7NFH6xh8MG9HbfDMEpBtR9uwpJHzzjxaiQwbRj",
  "key21": "4fyYJwdzSVxhubqsZGAkypVidC8GrPwzGZAPEZD1hqZuRtgnWUbn8o2jATMyNLN6kiL1B4YJq6zxWsNVg622gpFq",
  "key22": "4jaofkwDx3HgYknDRhFiXxJL38rSbebHppess7M3xBPRsDu4fHz4hboobmPEd8azh2xojSxrJdqAARBqKhMK3HRz",
  "key23": "3XecCka8EDofzX7a25f91xG3qi9KPpLXkfH45Yt6KQmZyQ19tJpbY3QoTqrcEWGHBYAfbXx5G93fMhwf2L7ArPkp",
  "key24": "4kCCn5YsGvW4kouRJb3yiV1TnM81E1Aj8hboQp6KiegAZhn2nAV814FJriqQBpNHTihmCQbzkS85StcDmUx14Kge",
  "key25": "61PscTT7nqM5Wmf4C7DhpJ78Smvyn6reX4WUEc3WU7g1HyuuCWjPAkR6H6AWzWrQ4rzR6w1DBUbZFwYEthdpSD6k"
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
