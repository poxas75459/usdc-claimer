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
    "5ocNmjdWfrmgUQPyA85QYWTAkRop5qVivgH8HH6jnAY64RruXDd8hJZNnPEGvUHkXUDV6A3p4GP6SHhrvjS2c8ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjL5AZNsHhnHy31HsViyrFvzbXX4VoCwo7VsBn3WMzrcQD47mWvyNABTffYYFPaVekHnWNmTDHG4nKHZScp7DTq",
  "key1": "2EUw28uqJ3NzYL9dTdzXDb9AFcMa6a5vEy81JPyehak9nM7nEW5jS3RoLcvFthJGcvz25VN9BWz6XrmdoizkDLCz",
  "key2": "3kLz1M7NRPioPpDTjbip3wj2hxbtbZsVSBZUmxP2FnqDhWNEFjEJVRJFLnnVxVXTSCvRCnh7NoBAuLYSjoXr3FJ9",
  "key3": "61ne5nDUUkpPXWoyyr36VSiRLjThPR8gDHSisGsQHju8HqFpT9Ua89APDF6fQyoXu3jqwkGBEYAujuz5rekRCece",
  "key4": "2S2VXmML6SjV2RRYHQ7ert7rxdGvYdaQCaYEgNmPEXXEP2G5ZDs5qgVSy2pNZRRakV6c1jCHqAbLXzySb7TSvQ9J",
  "key5": "3j9dtguYCZVNxPByPVS7peCLygRyrBVbJTU46mgqJYBBmuPAPnifm232SSRoZhaLS6YxJQkr9dco5FD5b9e5sWs",
  "key6": "5mAk9EQc5HBo7798BtyifdE15bcKouJ4tYJpKDadRJPCvApncKvGLaCN1VfnjQQFSbFM8nMMJJry1fwuoATo5Y2g",
  "key7": "63ZBwBP4X66Ee9s5hf5LVuFnfNeoEc6B21WtRMqfiq41qCezhuyjS9G65LNmVFhCXmRs2dETYVfFWNc5DmbiEx32",
  "key8": "51XKTmWt52FBRESUXoZLMTovv8vhRe726QG4Ug5obEdVQJZGM3bCqN9d1icLBmvkBwtTYwe5bw83eyfv8PkRvbEm",
  "key9": "LdRVid3zxqVdNjS3ysiWaPjHFJrfxdRjVda3rLeScbTv79NgESQyanHcAxfonm7DM2GYrYtKDS7sKVWXiAr7JKH",
  "key10": "3hPUnSXJg4JrunmRZp1Q1yquqde9WiGQjH3Tdvh2oxmxBqoP2ZiA6wVdsczc5KysXYDUTUbzYGv4tjy1LsjGnQSb",
  "key11": "4TwLvA8n8MgKCQysSLiyx5YxAQhUzmsQBCqLpe1YS3Q5dCmEEGw11qREWsLWwG29szVtnQsKAPF9MNPowUz1oUha",
  "key12": "4uW4pYXeV9GabvPA8sSssj3fXiounsXewjspCH1kCxgYfCgqr6GZW7q9JLYZCUysWakRbL95Dt8ecDDVfy3dwXqE",
  "key13": "4fTh5APRfE8Wdz2MjuQPppw94Qf6Ac2sNPH5Sh5cbm4xBXwFK3Dxa1FWY65bM4V1k5wLJmUPjaMJUUmWnkpvPpNz",
  "key14": "51fmYeCeQFjiAs7JemVCmNJzPHE1Vm4CtKQqgkQ8eZtCKs6QV7U9gth5AY8bJ9AUJBoTSyDGHSWnSDcMtX4TGL4f",
  "key15": "65nkCEGDp7zntugXawoFUAHZghkbKyAtV9c8xunVitjnnRzSyXVxLof4Q27dEFWoyA5hz6agjSABG8cSDanA19gJ",
  "key16": "54b4xen6TnyFFBY4XCB5fWCc3wqE7he4GjiyMhyDtvka4HAjYsDW3SkoafZo51ujs9F9BkKYwa4KTEUSAHhJF5sJ",
  "key17": "3yAB3b9Dovny8HqmdGm9an6sEXQvTmK7ck36vQ6xEeoP5LMSseHPgKNWTSwmNsj8xgsZmKuaJX5YT2iCdBMs3WSp",
  "key18": "3jY43VtbYpXYfCNWBVQzPQrosnt4a8L4q3p7baUsW4F5En7DHE6e5fRLmY9QQWDfYUDLU9wDH8DxBN4s11TGSyrm",
  "key19": "2FYYRpvUnRxYF6p7rZ1ZeseU3E3m6MKyYwpQYs56uvZxV5FrAu3ttG95sR23m5hPndotz8jgTmvBTvLPEWXaeeUP",
  "key20": "4jjBCyDs343ytYxjRfAs36nXrw2cRbfLd5WCko7JcUL6mUMQ6Y72cZuj1Y981T6NckY5cfUyceWtpc3eqxSgcXnY",
  "key21": "5JtASNha2HqaVqzXXYfxhUXTgx9mu4mCHuN32SWPZbMXxAN2eMYQCCMWGhritsq9nt4dFXxxWkzNKth9mqbtncgN",
  "key22": "4wk99Vjr5ZqWQ9nRq2sqrRTbwv4wJZr6qXjX2sGTciQ5FKuuVz7EE7kyJURfQCbPWTLe7zXYRMGyYe5CfrwF2gw7",
  "key23": "eNwV8WjhK9jR6QPYBR5KMRLCUy2qqapr7Y8omjkeggE4xkSyQJAqz9ZLSkyN8ubEckMZRfayGGKrGoub4Sj8ViP",
  "key24": "GAhc2m8BzX9Z1uJRwtQycWFmZrSqEhvDuPpAbdH3sLBq4BsdGBGoPtq7bsvhNshGEy3voCAg8G4B2eCobNAbeyW",
  "key25": "5t7kBmBMXSuv48sH4zYP99iJAZgkwuAzZWcyWhTzjQyqNTYQHJ2Ega78fyxUwjuyahfSQjt1FkJNKsseKvMVm4Tt",
  "key26": "4GWdWDLBZTGzW4avLuQ2GhBvwY9XhD2Zu72LFwikSSmCtyz3KbvHmTAijURadVKQNo6XmRiTru65Ta81SzuBvJBZ",
  "key27": "3PejvNX2N2z1VZ6eqEtAAtDKt4yhCUcrhpoD3gByzvTZ5WcauWguaMxthotk9GMMWZdN3TVF681EYvZPtbLgSxhx",
  "key28": "4cneimrbpiXA19xoAzJA2ipuq62dHzv7on8LokLNTKbfVx6TsEFMA7XYg4irAcqbfHNebhREjTEq3Hs2dxbSF85o",
  "key29": "5aEmEfhAK7BCARetyHe4esx7JJuk2vwjWtF7NUJM1SjzYvyokgmrRZaEpdm392277D6e2rev3efnHFVd7dnq3BBS",
  "key30": "2mnrMfqbMaWGoR9vU9tRD26f1o3UfhVbyVp29f6Eg2QTitEdzywkFWpJeuAHsxUaufyMpD5xaJBkoJRphzkgdQiJ",
  "key31": "2dmR6Qo41WXPMhxN9HjqL6NFuWs6f4QyKu7VaNQ8KaduWHkwi4hpMNLVceN7tHsBqhcyAQ5gBbtmsUPKRafziie2",
  "key32": "3tGgYQEL9zW9RuRF1bfrdQ9DnLF2Mcjp6J13QStZ3f37mKmbCAk9AFS3YsH17ctoYDaQAwM1wzTwvuwZcwngccvD",
  "key33": "4y95YB68wWhJJ68woeWhigaYQscC5nNhYfSznQZUnuCmzsbT8p3XwoURNPPTfeNAMaxTYKSgDZvrDwgRLDPrvBJY",
  "key34": "5eDDcuQPTjyqbfHT4Mokigbs2wuZmWuX5LChcvGkMzd2xpcmu9GmH9kU8viEoPotKJZ1XEuXcCPZyMMGYS8aJsdV",
  "key35": "48YPZuSHiXy5kTg7dgsNJNgsRYbkFcauSjRWXfLB39uPowF78NJs8fNydj8ThCrT4S15SMUY3ceh1Ht2f8XZcrU",
  "key36": "3oHsvukvBoejv9CawB7uWmABK1rUxpwmFSUUtTfmAzead3khFK4Bq8c3RZDmTCQgyxB59vALvwvpidHDWAyPXvH9",
  "key37": "33J6NTUqm8VXfnXK7UQQsVVSFyggGbKP2ZhUHP6kQimCWFTxo1dhiqr5YEKX9qNrLM3DWF6UzpTjHXyoJBp48yvt",
  "key38": "3QKmWNYE7rKyJ5G35Ae9DzCicgnAmLraSMzF783EBgpnsqWR6w1sQmHeAjPkY9RVgBX2N49N4Gr98pSASWBfb6kg",
  "key39": "3Ko9FdsNby9ohxJNhRAddTqSdnfMnvzyFyPNHQzHA17F3vSaVk5GAeQwGmadZmKaH6U7MZAe5QbEpKfZAjteg69v",
  "key40": "2o7eYMghmKbGoE9JiK2HmoPgAwYrMkYQ7P1dNyUum7kqHuscj4acKpPRrAUySjiKaFGbrikztVii3A3tJRTnZZAb",
  "key41": "5Q2sTF2MjJN93LQGfMnmjpL3aS9aoomhyXmeG8ntebK6kgyhfcSJAdTZQPxyEUT5RHUR9Nxzs3pyixMvaXsnr2Q7"
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
