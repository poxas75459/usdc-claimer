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
    "5deYEmN3VzP1cQfW5Xkf5zURDWQRtcfEBww9GRPwWA1sR1EZAhq4ZTV8UtEDQNBVzHGk27Xb4ua8ph7MUFz1UfGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzBCcqakrU8PT1Rwiuhb8QyFqHYvAK8V9v1Py4t6BQfC4zGreYxoHxscurzZZTZsK5Tz82Q6aGrwWtRgW9dhcqv",
  "key1": "5FjkxKtCPmsp8EbgN1BzYy8BqpMU8YfsuWzNYRQX7jUzihFb6jmTPYiR9DRt1sPEqvAxirfP1X9GdahQnppgUBjQ",
  "key2": "5q26j6vZzw42fxhFVyRdfi4myGypsFCb672YruGFPjQ1fw3RaPxS75xPdZi9NycBaBuxytwf8V5JZSgCDpKDdpGf",
  "key3": "65vEmwgZR3voGZivXKqe9d2zE89tkXM2WrHTL1NAEVouREMFxHtwa4e9fVM5Ep4p9ZmQz69UKNWWdpBvoCdu4QDn",
  "key4": "4ipa57Jm1hPhbshcvNPitN7dgfkkTu8mVWCUMfYJjdYFebcdTmZczR7kRTqoG6LvR7JgWyf5rAULCgR4fDSaj7N7",
  "key5": "65XqgsqfCmgCKid2oQb1pzCWrsJiaC9jveNXfV3Ei7qdgPvKe2WRHQbvY87aJwJpzfxmqMDzHDERbuhsTKFUNnA4",
  "key6": "23EYNW5pXPKLxKg3fkeXtkeu4sn6C8LmZR2a7c1dpQsWhe8Le8TpKC8D1CgjA2xcpAMxUDPiNZ7SFSeHzVFj2fKF",
  "key7": "4zbE2BWCjvLRGyA7UM4wFNtve5WsXNCn3WBZGfnTNAYsAbmLMNHnw5kj9fjUbcJXGzVBub8tyxFqyS2KuvJ4Sch4",
  "key8": "5yeXeaFBvePuYycn8wZLwuVqpoREtRZcnhnVGT8ZvnwvPFCWr39ofWK8LRQAJRxQTtNXtwGfY5YhNSvmCmpQK8wa",
  "key9": "5xfBx1JxedtcsoVYpkJpU76iwT9cvvhWhjvaMCKnLjVBBjsFS6vNfr8GxGy3uaiDwLEohHzbuoQSjoTy1rznHTYw",
  "key10": "4jFqrAKL9nYbVtXRrepkzCEAYm3crB56aidk5s3ivauNJAamqyhKFzHTbxjPKN5Tp7EwfW22UUs3y4Y9kDRhSWNv",
  "key11": "2QxbuhdxsYbKdogVCwAn8z1L1N4iYYecPc7WTREhG1FsyDSHfSAMkHWzmncJLnGw6RoY2FfzwuGrzxuamnhbBBvs",
  "key12": "48hqcWi4fnAjykt3yvVgC1jWWosafoNJ2EZJ72k76wMTfPPkPbugEWPJ34cDyjZTdfFuvLv8DumuKjqaC2TJSxVu",
  "key13": "5gLYmH7MgYoZPRLHc9wD48MUo5rPdsas3ovAtVmmDgWqXXcVu1StahxdSWhBjE41CMynpomFaSR6TTczkf1NmdMK",
  "key14": "2V4MLyYWJNUu4yXdXKjx7MkDCZF3JgvxU493opU2b6osEr32fAMC5JpZxdPRuPSFcFsLfX7urZ958WJJpTsrJVgL",
  "key15": "5zzW2UfwzpgxjNTgTzAFq3s1qjEigjswWmFrcH4riNRPdfNgGhB5HQrvfCN3gdhNjrDshNVZ6LDwjBrSY3a83qHh",
  "key16": "3ZqnFBnstUMSP1UMGHxgX4r5NxyezMwvzezZm74vV2NLn2oVR91VS31Y52zjtWGc4UiwD9ADzF2PfCnuLoxpPVEw",
  "key17": "zwFmzGCdsfz6C47e3XkfoViQN2kRFBdsV97MzKjKpq4hRhk4NPnP2nN5RgZaTtnEYCLMMu9BgyUQMrZc4o9pKB7",
  "key18": "3Ce9QZFT1XbJHFVxSaXJdWZBd7kMPQyqNPmfY2wiana7Bwgv35PoUhxsNhwZzs3N1RtVGGqoYtW2Rj4bUCd38Xwv",
  "key19": "2NxeYBmVRnYovjxjs8DAULnVAHuDqWF9BVAPVWPrzCuQTJHLFYe17GH8nrpRvCqzrMbxQebSvVkVzy4RVkxeTsWy",
  "key20": "61Ro3FdefF5vvTJickKez6MvhDKv3v6Cu1UqEtjSUVSH2cxDJjYyxmYGFjS5KsXFarEj9HoMNBun93NPZJNBLKDV",
  "key21": "2ELnSMxgPSeMZGwMu2U2q1ZUJMm7wu8oFMZ8J6SF1CxvnaS3G1tp4f8kVn6o3BE4XWRDJpBjbxBrAdsLPk5vaYec",
  "key22": "4aJS7S6n5dyYwc2EBG6AUzeQLSbC6zoP1JetXybXJjmgc88dfUm3u6w36Ys4wJffaT8tm6kcyFND9yewcnPyhXA6",
  "key23": "4CMHwr39yNp2fa3TUNhrGJfy5wBf7BtPmXFMkp3vGAJsD7uzbryG9KpaU5VNeDjo5GuWHs7Gt3XEP3RX2G3Dn5ba",
  "key24": "4mEvtT1XNYRtjbg74qVZ2Ls68J2AVGmM6jvFoX6f8sDiydz25rXkTbpY9SM3gEQyW8Pw8wdRVodWqpehQurxhxPS",
  "key25": "f62WDJ8HgaLutCp5oH8UQYsqDVaTk1L73SjjiymSD2FhNptawMgTENkjMzYUkXVKGmLby8tPYYQv53GVEssSPdB",
  "key26": "4W9JADRmv8BPnXmRyuzbvX5sxSSeArY814sYJk64DG9xhk3RCp35qVRdVKKxsHiyvo76dsvxbDM19akcY1zuZb8u",
  "key27": "3W5xx7HNmCyHEbAbs5oLZEpzRDMeeCKbFrwnSKxK8aLAcRdqAHiFU3kxacKCPRANqRswsiqMf2vdx4zEofeGkgcx",
  "key28": "2DrWMqQgTpfxsgycQcNLRouj3RSRFVnfBCvSkafBCv39RsxybwHofzLq6K4CAD4PErcswcDwyZcGBR9ckZAHcZw",
  "key29": "2mb1kkw65jrBSgUVfKF8HJWTSB4BxYTAZieropXFZD5NbHmPimzPVSWJPJTukzmQPToe4DN2U8X7xqBXutEgTWpX",
  "key30": "5SBi5weiryiPjvmoGcwLxQQPrLsjUpi7SHPu1MnHAYmarivxqYGTqFoRGAvxyFQfyaFD89arcYnYcGumKffxtdqh"
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
