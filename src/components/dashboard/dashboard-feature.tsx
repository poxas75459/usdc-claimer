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
    "66QJJpiGddda9zvhgESYWXQR6xoGi5bUemjFbynBPVnL8PF4uuY6ehy6Km9MkhfiQzYYBMEEZeAqnccnfMWTZZgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsGbdTsyAuMdMn6BXTBfTx7tzKpUzP9DRJXeNywkghCwCvNii2adbvD98FAWAWEnrfvj88WMiVchZ2kDvF5XMRe",
  "key1": "3JnMAhEbiymJkhHJvVRejab6USYVtJAghLggsuL93Uuybvjy6DNxrzbC4MNWoaF21kokJo2mLwQ266osd1TDcNtX",
  "key2": "fvsPEi5fhqUPCP9qjUJtRQsPV5W7yAYfvPYYFifvgjwgZ6QRF3rkajtfnvnUUymGawMuqxViZZ5aGzxpaMXbkkx",
  "key3": "5cyfv5rAUvthGQ4BKhiiPu4jMWHnYrESbo1FxksbDsppGV8HCc5p3zSwEnAQoDQnR2fCbKavNLfL7226qEGewpGW",
  "key4": "3y7YEt1Zf1eQ6MJG9cC8SUpAvaMboaRzbPV3hu4YVRffFszuiQQxLyWWm8TnTopiRguyTTa7t8E1F9CB1JBHf2tp",
  "key5": "2atjVbBZxLgCJRqmmmwAV5k3xMBmy6mJwPBf2LrDyTMMyUWqoaunyZiVdT8bjp1bcoZ9vrmUMH5XBegV1R6R72X7",
  "key6": "Pp5GdijFX2bggRNkSvL7sTHh6MdDYFybo68HiwvVW8PmoRTX9GeCyiwRmyfNG8BevG1DyWSc4rSUtDXuWEFVtKC",
  "key7": "qv4azUfvja2q8QnWTnivPVSBNyZwA6a2aM7sArUETBjrSpLZeqWu5EgkpGyGTd7AMk9x8z5ccQDq7Xu2BeoWyp2",
  "key8": "2LSFVfQSP1oyXtcAKoairsBke5cus5mXezH9my1BrV7zArqSCTF1jeymFFaypLXGuXqQ2zM844SknZk7DfyCu6wW",
  "key9": "4RzoGabnVQqDDyF3QGMmyBMwytKmvEN2KKoyXPLV2nLqcpDGj9RA6dBzucRUe5pQkkiTWk9XbX36FXLJrNf2nJFD",
  "key10": "4LdWw6KJFAiUhuKt3hSxRuNnL19E4W9erah6qXdAdUhxL1pbLCdVSsV2X4hUeHK81K7hcVt5JyMGEuMrDLojYEED",
  "key11": "3NkVa6dicoCj5eS9ibmSE8ZkxERFdP6aUJLmaysenPoz2dm2565WbeyoNxk1SGm1GUbxqpRZSdbZ1yxukciD3UwE",
  "key12": "qwD2MiW4pSeocUBBBGLAYYugXq2C9oijyQ7W8nWtpMCKc62FuJLFyRJjD4AE673rhpUJRGkHQX7erURhdUiC51q",
  "key13": "4Rknr7vqwj4Bbx8d5EMEcLKasbkM91162CHrpT5Vo8bsyjhuAaxhT6KCpZgFc3aaAsiY43E8iRABvfV6DLuN9wvG",
  "key14": "YRb5Mt4GVaD1cuDe9t5CrM2jFZn8oYHp31Rfmw6Pxn5Cy5DE2st6VT2cGXuhtCzh6QqW7yfP3WaWVCs5U9PuLfC",
  "key15": "HsZdoCFTV9Aht3N3cQxqVTJnBcT2zuiimToeVUBspbYrbMnvpBjY5PkghvjW5MNs5jSTh1ZYno47oesWbMQyphE",
  "key16": "3XK4MsHzN7aet7esm9rNexzWSeNTqyh5Symg2AToUDaZrkJMCJaeUpVZTV3b9xRuhN13X1cvwVbzbS22SfqLmT9B",
  "key17": "3VMZVtJysezetn4p71TkbUidRSa3v5e2GcnbqetVotP7dnJX6CSZUkEyfHKZtN9dvhbPnqwo7inKsy9MreRTYeXr",
  "key18": "61ASjuTXuLTnAARuKyDhNTAxhCCg1kKkTMDV4izgTfCwUYts2wHadshiJkC2gpECfqFQVRJifBS5VYRoT3swHxSo",
  "key19": "2EY6wssbQxSHod1BfX9bSAMWDtEgSiMGpyNvVbm9xDSapkRaJhZLtYySxNSPMNsDz68BYTA46jiuX5KqR76hwC49",
  "key20": "2Z4AwjTxivscztZf1R2ytkSEbXa97ZX4gWCJy7jt8DWaUUB1NU2XuKAKjo2cgs4ViqGZhg9q2HQSM6MyUJS32c9T",
  "key21": "2sVPFZNKX923HcHK45frTS4DufEekyDnJLCTMXfxQmeHPXxfrxTRBei4uuPM9kMmWK2Vovck1z45ewHfZ2oPm7LY",
  "key22": "4EAmcxAcNdYPjmj8kaeQkJuohh3eDfnd8BJCEy9G7cRr9xktYFJFTcmJg54hUmag7rsQUHEnsLU26cYUiNtgqrSH",
  "key23": "3kiX6ZWns3XmxHFxaJydW1TruxRHeivP9qXZ1QPYh1jd4sSd1YRiyVtY965m8JyPXyGyYgMhq87dosuo8ECskcqR",
  "key24": "67dobvx2MJafgszvRyx1iJQoLFR4kHVwLGmDpUPnEYKJ5UrLScCjHZh1idZNMi46N8rtjYS3bCjWLUPksrctWhWE",
  "key25": "2tJ3P4s1UWEGnLYr8cWCWhhFVE47MpG8zGG6eEeudTNCShyfVSuvxpPJy4UpwPrbj33dxPDv78UsVbvbuPy3XPrP",
  "key26": "3XVMpBS3Xsq3sK1C3UwsL6hSv6hyjbFFhLkaFXgvwt2mLg68Tt7zAkeoyLvTv7kYzMuodLCTn4uyQrgRt1pFw9F5",
  "key27": "qfcUceBEg9xRjziJtbLtQCJ8RQJR3161GxFD7au3Des3Ngz57u1dtdrFW2tsEnYRpr7VaMyDAv3jqKmDvWtkADg",
  "key28": "27PQ8Qmgi9sPZa7yC4eEG11quEBQSGDYMcrpCWeLipKUf8MBWXANbanMFHrvc6DZgJZafrhbxueKv8mCvvmSd8tg",
  "key29": "4cREZeSvxv1UG4wByg6QiQDzN2Zh3Kacg9kWVvoP4qPyDdSE7fiazP9ZWEku8Ur7ahhNY4VeyXBaiztsqsTDsSca",
  "key30": "4aDaJ4DdxazRkjxt4b4sd5eJ7q2bpWTQWts5wBjVD48kgMoPBkWxVn5r1XF5yPXveDbqkjVMDjadNuftHaftuPFU",
  "key31": "55q8McmfxirjpPvqX3gcQqZU3Z1xcB38yqj5xwXJbiY8ocReSNGwy9D5FnRcE6yQ11qF9ykmfZTGbSKjn2KUpE11",
  "key32": "3NCAnvqbuHCdr1kaG1o9W8QcMGBpupzNyVFvP4k8P7wxbZNc7N4vj2vEfPV1kW9xg5FwQLUd78HGJjNJiswud2dZ",
  "key33": "41o2Yks1gB8wk2TXup9hNtUonSfAPXLBw5SaTHc6nmAGUnq2TMX8yjpVUmkyaLNwuCeVVR84o1siRpaR7wDe9EiP"
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
