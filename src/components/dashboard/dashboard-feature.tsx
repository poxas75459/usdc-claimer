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
    "2w24HMCNEUe64HrpXdfyNEecTqTsuEpaNbZzt9Eru6d4HZATg2H8HEu3thNpcfBTq5ahF4D8TYtCSt6uxHNF1iTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKtaqStEU7j6EewJBBUPgtnV5PgNCbB2G7ypMjYe5d9H6YCKtwAqTwyohfQn7k2WahQxj2PdCp3SafCXHrH7u2W",
  "key1": "4pW9TTAgqZz7HMBGx5LhT5FJuB3g6KS5a56S7f28ZE1h53KZ8QPu91ZA2WgWNekKYX3wvWuQKC3DEpYY128jiKCw",
  "key2": "42fvwGgdvDucmWvg36ryHG3AbRG8pfe7i54cKV3oCkuxYSAP7M6C8tt2jsqKj4TRAwqiEdfeiiiQXkhRN1tmt9Mo",
  "key3": "5uGg3uekphYEfCphh9HfY2oR9kEJ1B1tLdfNSmN5Yt1CQMxQ7DgEQrJivajm4r9DtsWzrcQwv2XK4kGEtmv7iLq9",
  "key4": "5EN9wZKxTKtvktXCrPRhHJwvtANpvo8EQbdmgKCoL7ydLU9nG161KRd1NiE14kDfRThmFJgT2KewwW3ZyxvZVYMX",
  "key5": "4S3RKFp2oCy2Qu1Uuso1YzwLWVJ6hkG4FXT3eA4TBNS5fbM5kJunRShKPNNWoVrnsefd4D1NXm8s9YGgJSC7PPCG",
  "key6": "3Dhndmui8n88U82TJMB7deUuGCYmHYs3GkjpRbNc58ygeFdYHSDzR2ZaBNUNJjw4mZauhhy7DpPbpsXqQgyJW2Ut",
  "key7": "JuGoQbsc9uyxWYSn3R8qWQ89sM6918nhtWxXdWxsVT6e3uqHnCuXkTx4UYtVbU73hRQoYKuEkxT7LAt85Gp63iM",
  "key8": "32LFonP3e96etvWBYWyAzfSfptag5LD4DDjAWj9CdfXJANgJYAH4Mb5EfoWx1axA8Hq6hxhawJg7M7mQV99KPara",
  "key9": "sGc9koj8GFH8svY5oj5PWSTrWZGaWCBRgDgixChzjhVKNKqSqczQJDRUFNNezoTwT9CuVk9q8n9VBxjMqBJLjkj",
  "key10": "K8dyWWBkdeAL4MAKj4d47F5gFLL6PXW3RmHa8BQkuy88siHd5iZfX729fLG3guTfbm7ownSGQpzJoTx72T8zUT5",
  "key11": "3Wx58ewVPWHpGi7uY24psf4s565VTrMYnJ4zvTaNy6h26ZP7GeQoQpT8CtChRuHNrH2KYpoARQvpDjGGccmgmzxC",
  "key12": "Lgj2hHny76Tccretm1jbfQ1ahe9eqAgv1KfzDmzYDYwTFMwSP36ygoTWiRkaoi75ZcunCcspCvBKjwNt1YaPKdU",
  "key13": "3iNGViyGVYBahP84eN6vN8tFWfon7EJSMuicX83ZcTiYgh2cdCejPezoEjEEbg1x4aj5xgpvDwWPLNtv2UXubcW5",
  "key14": "57tVoUzhFigkeLai9AwpCXYj7Hwz6nGwiGqmxdpNYEXsZfGuf2sxB8JtJYisEfii1gaWWuGeSNBt5HwYXcYufhEW",
  "key15": "4vdY3tGoJ8BoHCyqBUp5bUryFtcacBEMwd2Msf6wEwopsMxty1JhTmQn86TzDvhkCByfYjQNBghiakq9MdYkf1PK",
  "key16": "4Nu1973TkhvtPrjT1XmcYhxCJg57Hvrokq98NPw5BhQZ8WdQWpWFm6n24edGSCqKcFrKajR3SfyMReWnpet8W1UT",
  "key17": "5wCDDYVWZADNx5RUUAUHRL8cq3dbKiGueWuu96NjUNuP3yitSqpNdJ63krM5XbCtxJyg1Uz3xVxwUfDD29k915Pi",
  "key18": "JfJvKDddyaRaMjpHMuXiXzdcQai8i9YgELj5dDX6zbtN8GKYbQ8363V3ku8SeAXQwHpRCYZvMnX8kFonndi5nok",
  "key19": "3sup6YWkpF6mtCoVF5mm5wG6ZYsN4VhSsn7qKfUQQqNP45GxwmRqDySewzaXF3PFbC5P3Qnpqne4o2Gi3XYkH1hP",
  "key20": "2ACpt3i8u7Uwdw2KvvdGZs47Jq2h9e99bEdnhWRLb3AGf4YopzaagLRR3eFmAperu5CetFTQxV7j49SeQABSSCYT",
  "key21": "4zQQXaUovcjYHbUp4cdtVrmGaBtfZbD81Kn8P3MC4mfiBCrzRauxBSNivTpf1DZ5uZRrzd1LTj9PDS3jyznjxqEe",
  "key22": "2PgpunnUdM73GH3wWTFWXi5CA7W34Pvamrbe2jCvwhpe7of5dSeE1ye374T62xkCrGycWUUv6YTgj3K9ts4ykQPu",
  "key23": "52HBqfeJgz7opErcZeNrrURpM98KoH7j41EGd6UH9iDnYnKaGFrVapuQ74i5kpjh6jTjA92pcPTcAYPzmz1faXVb",
  "key24": "4uyBFQopRbQUUQGMC2E6s5J8rV8RvnoWr9rpGW3NmDWCd3Pzi2Sda2aJ38SJSVmFy4XQcf8ToFZ7C7DEbRVa4Z8G",
  "key25": "5RqVLaQqthFWXnpxcSz3zyBfZ9BDbnuL4P3Z48BKfzjPANykGmX62EiWXW4PPXLLpbWy7V5dzK4SXvRutc5HKm5C",
  "key26": "3K5AP5QWjV4y8d4taLmKP2mVekmL8bH5eH5YJTicq1DXbGSm5wPbGyXnPMBFeWbgqTm4NYMeF7jxqbv3bx4zGPGv",
  "key27": "4ZwUFjgdQKqjkBY83Z5gQRgRn9F6Li4JMdETDAVSABJ5933dKMiFkSNVsLnbQHAjVZ4YAU95kEk9reEABzJvGdYq",
  "key28": "hsPyexP6TqnPVo2xjhGKced4qKB78KxZ9YkDg52U9yk2XZ3g1xLVEkPrrzC1eEu7eLDzBLVmPuNYWnE9xZyM6qK",
  "key29": "3iKHx6VUNwKFkFvJdexT8gMR9eEDmdezzfRVo9JM1BrYak2jd3WMt5Wso4aGRRBywHnyLqaaxTzwWq9QCiqwNWuh",
  "key30": "4y8Y419mGNb54sjiNMG49vYKGfWTUQLXjZdbNVJG5Jvsa5nUyGWQAUgUPuMHCZjLWDqCwz9ap3uanRUijb9XeLzP",
  "key31": "56P1UBi23RZ93ZSuHzAvgcEKVTnSxRhhiomhsnJcr1wmf73HjC3vyZevjPZ2QBrFABUkV8aKoGDsXq5PuWPJUB51",
  "key32": "DZBakFK84RFd1HrpxxSe1uG76XW9YjiGMb2gs4Q1gW8MaTBCAetRPhwyMXQEirvttipTHSf7ax9FequVqDY8YZe",
  "key33": "eR8CT5mQgrmWMYSPWra4Y7eQ7HNHKX8hTxAbX8HWCqLrg2HB5QACxuVFGtz8Ki336w1QZXvUsWHenk5CEZV6eWR",
  "key34": "57X8T3tvYJvWnkFtteLs4r23cSRogm92HBKSpgPTe1hkQEBeaAtRMcdoei2hgLVHHgsxGrezYFJcVA5diZxRMj8R",
  "key35": "47d9YWWkdCmETLG9171yfV88XBiburh7H4hvGt3mvH7WxRQ25w4uSd2LoJJqr3DjUKCyZ1cptRyMaghqcx5fmJvm",
  "key36": "24cbxKyztXfiMMUp4V1ENCsteHWLJcQT9Vhq8iHrZgk1KyxvWbWewwmxd7btjmvMWL9tLRNxYemSD17xjyRCnvrk"
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
