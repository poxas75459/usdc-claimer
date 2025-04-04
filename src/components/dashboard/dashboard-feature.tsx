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
    "246KSRKs53VkVPvNHvwLh7tro8X3oirYjCKB3JU1tgY6TP35dz7r4fXpitUUZ9DgX9Cmknbj2o8Xie7b23Hz6RjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJDishe3ohdPdkeWUAmbkbcPYQ5cgUoTGHq2MT1PfUDwUQ82kfDtvKbsWYSZ9qYcExgdzhU95YFrJqDQTyH4MQe",
  "key1": "SAMYAykSgKHw8rpqc5bk3eKcZs6RmuWpB32cm1qe84eW9JVb3vw4qMuzN33J7a7qhpsNCT3oJbpCE4nuit8vVyC",
  "key2": "bhBkMsAEj8JnZKF3s3zbAqcQESUUchKSWyW2CzbTfVMVQFDV5sw2ayZ3a7VmGPeNE19VKZ6xzyJ7X99XdcirqPb",
  "key3": "2onM1sqgZSAoPTfNe3enNPPXUduLQExj82inz6Zp6ZPMzkfvv9UwkERRBWfibkMNM27sH4pR2VxFwVswRwrALBzB",
  "key4": "M1ezFuJ5w9TwQ98R5G9HujvfkfCXABKPZn8qxPU9jpVLmBHMx42poSgBgfYXYj2qqnfLXwVVV5KBivW6jaDC5o8",
  "key5": "3LT9dpeagMy2kc2XbF4VdMJJRBaaN5BALpFJsBsmaHiiFyGpGHrgt7qh9tVJy6o93pvHasjTmWATquRxYa9YiTYF",
  "key6": "3oJMgjq4VXdMBSDQntH6hQi2spnADjE4vzd4JBPN39rxraN1WtBr5MBxAtoyUUBfbVFMopnsENcdNLbw9Hh1yHJe",
  "key7": "5TJRhv31usTU2uxkCYEFj88bwnm2T9Gj17yLTCh3K6W1XJtAQK3y3Z3FjQo4npJ6syKYyzEwZexZuApsmqpzp6Vj",
  "key8": "3HzaznrF8n1ruHa2aLF8kVfALwHdiQLqBpJse4xYjnvprZfQgtHjYn6btnLqzP4t2bvH6rTn5wCMm6oKYeQFxpQu",
  "key9": "4DiK3bgEsaHDutuZ8zLLk1JiFKpQzHNqXu5Xm9iG6RA6TC1wqvB6toAaJD8V7W1LBY7tU6vimeZ9SuLGRhmWJXxZ",
  "key10": "3YYZ5bxfvsMBsyicmhV5Sr9ZanLWgZ8r5xFKW1bThDbZNHqFVztC2mR978riwLuH4azsTUpVQm79mjcXVkrTUNLr",
  "key11": "3bfuKMjDK6ZuAUPj2Yz1Dinb7z4nPythoUAjxzpk2GkTwm5JMgdnm3GesLEphinoutch6aK5k7Lx9EAuPNjfGmT1",
  "key12": "2wEsF2zK7fRHjrGXjqg8sEboNtLua5Y73KqKuzSusdepk4oDFYL6zhdgJBSnDWSXULzQse3n6acEiBJeXtoRwrMy",
  "key13": "3oapD53aXsMrM14GYTs2uJYJGzV9CmMdpzkxxRe23Vjj226v3JtzTapm37xgCwYG64dR1qSgBmgMNKujxV1hH6xp",
  "key14": "4JHdBTA4cnvzNyswL2TLgqPkRGauvaRDVJgwkfw8UiT2mE9Va9Pw8wTX5A5PFq1brKPRvuJ59GhFBdktmfwLdN6K",
  "key15": "21U92BuEdBW1ydFwqJxX7PZFbNmWXwdoAQ4D7PSdwiHg8ZPGQ42tBqBNEcvZEoV6Lg8Qrg1fvabapVeRq13L1b1x",
  "key16": "4mSsjjxEqj2oQERBJU9PobEaKZVYx3ygVSPMXYUZ4drVdeZWsbgDK7KyroHiLMybJ9Ar9Cfe6KLmoCHRsDFq4xt6",
  "key17": "4CwpuurmYhRYtopGX6cE8fQqomBG4r6CQo8FhsjbGZF9qT9kZDCj5w5pGDauCf5QJ5Kx7wK9WASBAgn5FZCyZa8S",
  "key18": "4BKNkrdxGV75xbQ8vbSjxgyrWJ7Nyixe3k3wfa47fkU7ZJkUWLZyjxxPv8hUqNUUx1pNUB3Lg6iKkdMxqrtLE6Gx",
  "key19": "UJUGJKd2gdJXw67NuPKcxotw2DXCftoqehFrUoKPEsyUqgpWbmxsnF4vAyFhxr1EsCvbQxroHKSixvGiTvUqCRi",
  "key20": "GuSMmxTF4jLqxX25AqLVFkJUcBn4dMRg2LHFP4rR31LVkDNB12fhnJexxVDnQknsdynr3NVT9k2RaqBwtkNuSYs",
  "key21": "2q5SbtFUjWMJUvGG11ZgvX55iMfgpL5Gk5LDAgRZ42uZvbLZVq2fdtDPozT15yh1cfaSvb18x7xqNrh3LDdqscCr",
  "key22": "bqBkpqKamyp483vWiERLtpMww7RW9cfHUWz6tB59ttKXZ8P3UESt8q2D4QuessbZ8PZMbxWx6Ws9y7oo2BaLLCZ",
  "key23": "3axeUvJn9mGipJPnv62CM6FYEVzgzLQV1v52ZXaUubAis2e8gdPpgoMZV6fQe3p6D1aG9dAnZDkF3Jsu92Tt6i4Q",
  "key24": "5QPBi1v79JdqXBhtMmEgUFecj9AGrw3woBRCMDm2qLgCJv8uSM8Wt2JpxAFue65FsWvZSpuasAopaF2VvHGmbnoH",
  "key25": "2mZaMqTwmAYK9aUVYeh4Fx5NtTDLpiPougBztZe1TNgo4iCZr74vNpDJMgRDTqS7pqEBPthKHygwkaCE5ZL6Zfze",
  "key26": "3XAH9dVGsxnHbN3cZgF8hQm3fAs1xGrPyeb5FTtmE2m8fKM1cQKrPPeYZvED4EhZehC1o1YqmXguHGe28cjiXMWY",
  "key27": "4paHSPoAZUvm62dVXpDpE6HNo1oEaoXhf3k2dcTRzMPDMjdp2ZAx8v7YPU38Qux1ENR82kfj5od6akwsZVF417L2",
  "key28": "2ksG32EiTqcDHLcjqdNqjRXSJY8AQPycXAoKo4T4PocXjue5bSMeWy88PsLyc6ChvVnZLaxGyb55SMjM24BHAZe",
  "key29": "5Nm1sfLuuzPvdwehmkNfGh2jg7At9C7C1vABiQQG9WUmoCVCjBF53p8a49BYm5LJLX8arW5Ya9KWMRnC9BeB2v5M",
  "key30": "64Q5TctbJ5CMmjJXiS81u7Qcbf7dgqXKDkMzVaLXBopTP1rTXwrrpsuubVNFbuc1dcgHrYMSGxcCa339mSfTTWxA",
  "key31": "qSkzCcp12D6YDr19wpxu6d1r7Qc3C4nfyCPuAwwGbcEBFeFwbmNbGfVsYL1s3ryWVfUQkUTfRbx5UoZyJ6ZWCLT",
  "key32": "5kKQvMgtbBFYJakpArjE3aFQCT5Kn1Hyx1RhUKFaobCx8cd9egSvxD7CddHHtJ6H4GXrcjkxEeVAKPw5uC5fTUXT",
  "key33": "yL2W1AZmHmyT7pSR53qRgxAjXLeG8TwXiows9TUPbGRtHtGe6q3kXGmpb3P8vQbuFCKUNMxzw98jyFNgG9VhPiK",
  "key34": "3bPJtT7nm76gErXcTj4hZ5CxVBbgJuk2aU4ARZM23DnGnECKhHt9AnqZcBHHGRcbrbaPnHq8xx8nABDBSHSYFPE7",
  "key35": "2ftonsPrtzN7bwBn8DAZhRofAbCpphLr9nYqEHgfNmq9zu4EpmKxFNfUJmn6Edm9pWxvLV1tUZ4Cssp876ZHvdgS",
  "key36": "61Yd2zUcp3ixyFHfg5gznKsxnCfjRFS9goX2HAnmKhuv1v9RNC67bJCs7SaKVyYPJTnW2CYSB8kRGhHCpv9zgnSb",
  "key37": "5JVTNi6yfeM3Nnac6RHLWQx2vDfmiCSaQh9GZDhLAu3wnhdiWsr5ya8CogqFFcmfPrEhSv4WcmpdmwbcwaFCHghk",
  "key38": "3BqYQsSkQ4pe8yGWoem4W24guwjbLtUAPYQVwQ5vYDbPFDdqVi3zFeGBsWw14H871Ef1Puhfr6S4EQqTJ8sHm8rK",
  "key39": "2gdVcgVUbtN2GfY6XjCThh6uZPkccEDmbqNN57BMQvM9PCjVBRUFWTaL8gxPZtEBW2rYaqVKppMHmE3sNCkB5rhe",
  "key40": "2EEJHWKgTbkC429rKbHW7vwUryJcn9AbZrdrn3z7PHsBCLJciYYPrZ3s1YHgm5sekSDqYnQk2jDpCx8uBEym6uA6",
  "key41": "peEDYJo7GU14JrBGKWeSCBeX7YDjq8MZgyrj59Ju72B5d3SXTCegLnL7vK2CRoCbyNfBLQq5TKQmHAscAEBuuor",
  "key42": "jUfqTw7jw9bERuh9Y9144iRShVUg6KcgkNZQJhK65STaDYBYhtT7hXacD7znbGTRqhE2Dms1Zx2sCyWdQYvsb3X",
  "key43": "2V5Sn1Re12RpprpuzcaHP38M8jgvyBt7UL8kJpXvGFDkJ7gvTLzmN3yWu6G8DmLRR89itNaBqfMwEQEeD5wfjjXf",
  "key44": "3XxKQnHb7pnvTAVMpfksZYw6zKNtXVEv25gxJ2DovQ7aoVjQgqHTq9mgwaMYXe3bpZLJvupaeUGjaqDztvkfsZrm",
  "key45": "2ABc4PuFEhxm86L9kfhuzLeBxiMtur6HPQvUSmoReAtkSJkHYrcPE6RzuttCcXHtQftte7rFTmM1qy9WEANfzLVw",
  "key46": "4War2aVywHQktynhvNiXQc9oFmsrWRgkapVYnmWPohX3CizLt1MFt1SSN7fJSFseDWh8jfjBoTCVytNXdrhaDnbo",
  "key47": "2dzD6EKeq9FUrqq98wdcZgXjexiuYcRfGCYruckGWf3w7j9rFbCwXwF81UcVEq374UCgosxCYD3UhonSr3SxjwqL",
  "key48": "2dNGHGqc8aHHjD5cR4fBSUz7TbfLYcbjK8HR8Nn6A3ioiuXCMo7wbCqC3YyXUc5SRuBQ3i1EWtrgEHBEobh9EiMa",
  "key49": "3PLiGAs4QThW5joZTzCHjurzYtLpGgPTy2g9EfkfEJwHf8dvjHqYM1wRhqWcxASFqJ17ncoGax1HMD48C4m6T1Bx"
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
