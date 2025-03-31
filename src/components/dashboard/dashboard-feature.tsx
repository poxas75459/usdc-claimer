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
    "3PKTuc6dPimTbxJscHUukTcvthqxb6MLbky7na1ZUDEusYfFWDXNFTLes3soE5cyCitG3BTzh2Srm6Kaj8FZ9A9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9hSdAWRf6rHinP9LbebqYXxxKhfCLj9GaDF3dPdhcdTR2ac5TFsDx4jhXzJU3mj5BZKJ2j8fkWbne5LPwt1ybQ",
  "key1": "3Ftmekk1svm6QoLkNLK441XZNbhUYYEzszMcqWqCuFLUaKTbSxTu82bVYPUc4xqRzX1SosaeXzZb8v3nhXwCQy7S",
  "key2": "4zGd9n9kgGgrzsDug8jwC3WWohvySd5g9d8iq4kuYVSmqiZCyQWUa4PjqKBp8Wry9p13bqKBN3JRtp2sALURCjvC",
  "key3": "4sMMoqxj6MxZW3k4x7kKPAr7KxXxPXw8WX4CDFA39j7QQ3wSVCgrJjW3f56W81bzEdDXXZSMeRbbq9mfpVq8tF2m",
  "key4": "2xEQtmRwd6tBmiutFhajGKBtrceikVdGXVtQnkMgiCEDJaM2hueibBzhDEvRWtPzQTjERSjBH3ggLdgbBJUzYH6C",
  "key5": "53684bdd38Q4B6kKNuYunMLzdDsfBEmAsR8VXsj7ogJsPugKv1NxjCim6fYAGZBn4yps1VwoyBvfCNcsGmwbbZQ4",
  "key6": "4qARVNVEHkzEz2nMRh3zqfB8qHeatK6xZdU4npj8qTh4tMDmgLFgwYXkUSh8iNjijsXBGZED2FBHCxkgym1g7XeH",
  "key7": "3VRRAmfHFTfRa3KpEvr5Du7xLMRvvz8SC8s2nMUUe5M36sxxXsWdCPsLWnRovyNssxTPkajLZmRbWtCqggnaEt7i",
  "key8": "5rkmnLALwevVFJpybCCbiNpgs23wVycrDufLU56H2weYWUMVh8LDhFdg8ZYSLjw3sFy9NMBA7o7kxeYBWrEEynjw",
  "key9": "5YCCUYQZCrHrv4dWXVmCgNMBfo1m7exYRRcjWrpU7S5YChSAocV1R9E5GE2dbhuj7ZabqpxnJUgCqQ9ZWaziGsun",
  "key10": "5kA6fGyuxs8vuReosnEPWQe58mcg3rrXHMdR8GuS1us6Td1NnvJV4ossgaNLc8roMreTGGMUfzAZnAXc4SayeLQ2",
  "key11": "4JG2evvWUpYcAF93yAvQqz2ru4oxZ4Ljw9t9aDEf9jXzSnT5ve5SFsxj1JMquFTmbKW1SgHNKqWkfrStdMRjnTqL",
  "key12": "2MQejdvrxB8fQyvcSFSEasN94KNrinQg7n8JdgqRRJRFMmgsd7uYT2AamppFV2GFdLFmchRABeL8doXwhNYSG5dK",
  "key13": "3YXdV5ffkir3NaGduoU48fWxWEdstxjMrkMyunbCHUDvaMv2gLdxfReZU5bjKXtB8Uds2FfAWLcqJgoexHiZiEAn",
  "key14": "sy8dks1FhQ5PKHczhJffRGAQT6dqUdPwx6FZfbUgaYGKKcqXeApBsxG5gUuuBneHRzogvuTMJxL42zq6oh1GiGN",
  "key15": "5SSDyDbmevofyGQwJnqNk22vpETxStPcfeKtc9o8CEESBgdJ3xGKanQQ5YmN2WNvVEbXNeviRdcxvwEKrKRDe7hU",
  "key16": "5Hbw8fhQhPVhTnafg7vedXBAqUgNd6AAqpp32LWUF4VzNmz5KbmY9SZFwqcK8dQXgZEPFJYP4nEYvHCLpnspXPqB",
  "key17": "VQ1DaxHmNkRr8nKsCDbrW31vnRfDve2jddDGbsWbD51JGVQgxmsct3AsFQCDrknBEnTmjfnv28P4hu9zy3trPeA",
  "key18": "5sdL2hkhi7EHyhbRJQnf5WTD5a5NNccxqCvxdL8LgcL2btJC7bmCe3bKPZNK95f5oqGAph4CD12nvAXT5n6ohzfJ",
  "key19": "5GAtBkgTfFecp7y2rYGWVrGqMGGpcLGExDG8y882kAw7YWhXamDwthyadknUV1P6bxa1vtvA7ahTdtnA13qK6zut",
  "key20": "6uLMJiWubiSDKk5L8nFnUExXRcL3rPvtGgHMu1Lz62p3eNr4k7U5ycLaYu2UEDH2zvkdVhg8muf5wBREh4bpaWW",
  "key21": "65iDj8A5NfwoH7gQQEgqrSugVhLRVKvBZgQ7azzwFor9MWvyMgQS6fSYVC2Yr7JvPdtvtJ1D8S3XFxwfbkrU28Jy",
  "key22": "4Boyiwvr84BRF7j4RPLJMBLsDhjd92pPijcvHRWsgf6G4umNebH9GFuivwht1xVDPa2mk3XbyNgiCYCBFFQS433X",
  "key23": "4Tc7wxLjigfoZTDme7focHJELhXi5UAoTUWyr3DVvfvULN8aNyH9BKkdQ7rKSRVMtTGQhTS7Adry8afBXHsCT4tp",
  "key24": "4hVETUyoaYi9NLoXZJ6wTgSfdBzQui76SMNYoxHBN8hQbgjg5wsint7M3sgj3THJnfnnxKqVymFx8aSXvGhdRJf2",
  "key25": "3NrcWakA1HmseUYb7REv9A6tVSyWtUYMHefSWprvBJRXQrMRwVanNuMiQunCj9L1da2ZuwZsk8btYHsTFphTNotG",
  "key26": "3VkL8CkwziZTM3cTxDunvsxfB1au1MwidJmouar7KhCLc6EMdaFFMfspLsSJnxZoCogJX35HSZv2r63xhFBYXZgh",
  "key27": "5MZkar9hrAF5DUphrdiaQPhZs3x9pAehQbaXDTKnxTbdGEe8KYoa4mTdMnXcNdtHQ1DdgCN2dgpguvhaPVYzqbJM",
  "key28": "33W7rQuZ9x2E5aqQpNDAtMdN5Mkf9hVaaq9QhNoDHDFLrHv7r14jWdeKex8XzwjrTREU5XRsxKeDobEu5UMmUZVx",
  "key29": "4TYjD3NPcuDv4Z9Eg5Kw6KHLoTBcRkpxShh95fkCxPQa3VHWThh4ehJXFeW2kuH8SesCHAXE6CamrSa5wykzZedF",
  "key30": "4sdigCHfUZyjmtBQsuDQJW8oUrUWWb45eeRAhZsP3us35UMF8WAVTKvpFGpjCENHb3cF2XusCjyei6Z5c6qiFgV1",
  "key31": "46jJ6RHmpSocTsWgxbFgqArZnYY49SaqzHkLyZTAfAq1rw4xnRiKiAQ32Ju3KGzy4NUTrH1Gw6TqqhCHpYxPJ4Q8",
  "key32": "366ShvkdyotBbA1UC2w6i2g5yGd9zZZ5VFjPiADEWbNy7u9t1R6Tpu9XuqJzNnaBENPuYmGsZ5yBrk9Ef8dpxP6Z",
  "key33": "5ApT6b26vDeTUbDunCuKNfqe6k9vmMjZ657BDWe7aZksVFAAd3hDY7iMCEm87W75F42MSwBpSQDfzh9fTgR2SKsd",
  "key34": "5A4hvntQCTrTGa5cAkNzoYtyizKremdDkVkPF2UwtRVYEf1ouKg84ubGxW4u65ofP63S3BJksyck1zRuoxEPLvRT",
  "key35": "4NbBX5NAJJp6ZmKJYoJSMrDy1xn4wkqqJZWW68nsUqsQYU1Y44v7pfZjNw6Bk9NLLUrSXV8MvBntKvb2CGUUvwiB",
  "key36": "3uEs1BGyVNyjZZv1x5YMmUspVPniRPB7qdyv77wdiD27PZghHb1ckh83JqM3dJKPtXbFXGiTL74GPAvGhLb3msAk",
  "key37": "2Swy3Fjm6ZPxz9MoD2j7wubwTySkPwY8cHub3HFA9qcG26aonfcDPUSFg1q1LgFZEr8TgxFqttLauhpwfm1mrLWb"
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
