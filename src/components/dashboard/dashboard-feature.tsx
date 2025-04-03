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
    "39LQAc84K5iW3po4SSZk4jL7WcCjEvApXCXnzUVK3UiiWgTk4gkYsM7wewKuXWBCSeiex2R9XpSpNgqxNtCV9AGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqSLeiE3T424zyaFKxD4J3cK7fvcDgxYc1FLnnZPxQhihHgpMxNkVpK3zjDBiZXgXrMy2EZmtoyegKWN5Cs3N9a",
  "key1": "2Peq56nP5d4zViT3nn9woWcr1knEtyeqYjxwe2yGUUQTbn7kMdQis1RH8hpcvoTpWedCUWm12vkSDostgw7NMsN2",
  "key2": "3BfNWoyp6rX2HRp8XuJXwsoXWjqJfD45eRfUyh8mYHeBG4fef3s5THoDr888xxvxT8UAK8vjDKkddR4eywSTn7Q5",
  "key3": "vh8nbrVamg7vn9NHPR7VFitpoSuMGoCoaLEnZzkzUEh52YfJJt8PLMrviR2EPuqaCDPjS3BwZejo5QQRhzsT5Ew",
  "key4": "59zemP12f5gyMG93K42zD7PW7MbeGWTTwfAqy51EWFYmde6sBBWEwt4xGD6R2kGLwiSwZfmgCDdNyS4LwAHgkHTr",
  "key5": "2ZUwdmiLtpnHUvhBQBqdbuhLVpvguG5bhetAoCAaMXA4mnhdJHKA2nY1jEKF2uqAzVTdTdpQS5ycdX9hav8sfYsW",
  "key6": "5T9K2nqjktTtM51Ag8VTkmwxgkBRmnaVfZqaScvCsuuopt2CTohhKZk9LKU144979XgtB3gYccKp9uc77zNmDTYo",
  "key7": "5gHURmjQVSfPcsi1cFfzEkjYGEGaHGzv9R51Fsdec2wcQthNQkpiwaRMQQvhFnrwge5NnDoppzPMomZR2gKE1PrC",
  "key8": "29LYvGVW84pUx7e26YWW43m9kiKWSXRzU8XmYWcbM9WLPwAgCCFcKsCojNzr3ZSnRvdRf8JSVQRiCTTqEBoHrCXK",
  "key9": "67ckvN4BH5M6wcPCjGYfbFqkKtgdiBZbXCRTYAUd93STH7afFheNPZj8mPaKimgPHMEszbLUrpGtMvXwQu6joZZb",
  "key10": "63NHZCCVzcnG86BQUJvhjSdEW4FZdWYnADgKsLR2sg7Ncdt6VQkpCXmCLi4q47Jb5XmnhjzhMMJFvBDXVNgTwxEx",
  "key11": "2Gw41ESn1CXm57HEg1t2qtaGcBq7fR3WcWGxDwDF6NCpD3A7vM75xhLnqZp44fU9rGpPN4YNLvxU56NMk8H8PUtD",
  "key12": "5RTa8PtXuxGsEbmS3rX1tkyXK5ViwbP1Gw6njDPSRPy6eQk3dWM7vgCdre8Fn3qswAH46fggiY4vgsuwV4wYvobw",
  "key13": "28wByPvqUHMrs5JwrGwbYZMbezjvgHRQFPv6uugdWmLYCz9F8XtPtnTzzR9v5b575Tjp7h8FSP9iRR1fJJEcCedt",
  "key14": "2vPW3UECNMqXm4qhifNfMuyQ5UyGh55ogSCDDXsm4X4icsYawwbhbscWtnyNNHg9DjL5d8VKok1JQoMopUmyRpMr",
  "key15": "jWNPSAXcX693A9Vf5vAgr1oMFxgxpbQapuv79HSnYbEPFbeTojmNPkQUJGPkCGp685PMJotqc7sTD95Lfo4zzqh",
  "key16": "67W5hHgHWSs4hCCBBKUQesYT3hZ1fmZtSdzDcKp9C4WFdZkmwNRMiCq1uHk3mUTnDQbkSAptdXrcraCCF7C5EL3r",
  "key17": "4jW2ggKv67uGmPC9Vp8GGvv68tjNnxMDYuSNEboHgwV8SDCcEZWzkk7tAutwVii167Xs4Uj8YazFZ6nm8BbLbdSS",
  "key18": "5u36n4jwogBYM74mh45R8avLULWjDrBwg2h6p5LkyAUVTqBAZGhitoXo73pKZhVpLfxzxha6hTNYBvXu1u71RiEB",
  "key19": "CSzN4QU9P9D6Az9PhpVskFLhdMJqpnPHyBaoue4gPptS8Nib6dR6PAJFFMWTheM9KNbjhmuTggPqGdAShofxGsc",
  "key20": "2uqAXZppnxLJTYp7ko1tBicvP1DYxXjY19v3Fzef7np6EqhcQ3teqJfBGUa8SqtigGWLDJ2UtowSCx36v9UvbG5j",
  "key21": "Dj23z9qspPUmGkjS5vBDDoNR3zhRHUmK3rFb7kM9pwghro8aXLCCjy19GAcvrpa3X3bwXUuNZ8KofEYvQkcAzyH",
  "key22": "2nSGFEgo77YfjZr7AYGeuCYeug94pAuL352a72PXkqAK3LrcktruKAxSPxjnPpUUSkhWhE7Wjha9cVzVsifM8pWj",
  "key23": "5voiBGeAkda9nLuQtoJYv4mDp3ciq9owyM9CuoDMh9fUCsEbSWMEBJAGtKP1rJyDRqK9DuB2zz3kqhDB81ea2sfN",
  "key24": "suEH9BJpnv4YKSs2teKjs8BLtrT41jE4G2ANf5aeaqqSd1AHT5PBUHqjUvhvb5UVPEmUEyqY83fnpk42ZpmCodU",
  "key25": "2gbwUczRZhWZJMPwx5WbhMjcJTyPayrDwaKDSUPQgQYNjp7i3ApeNM5TJiUritgqWS2EzqpxXsjZYTp6mEuj6fwC",
  "key26": "34f52zXQ14ypxVU4Th8AiaykSCzcGMaAZJgZ4w85JCbqJjKrZJqbuveKSbtpURBvVeVzsQZKybVdD5eyePQEnMjB",
  "key27": "2G3QkAA5Topc6YPxQW5NbpFMcAr8e6ds3FPeUQ3nmvtRfRgiqNQEFeC6oJQujnaBWZ8qsY9qExYcXNusZi9iV2A3",
  "key28": "3fPh5Rv6q6uHVXQ39b1gXR74MnDMjYrmkQHbv5thRqqyShTDe83XUcne8YVc6hNT9WnMy6Gb6daj9mLxBn2Sre4z",
  "key29": "4LDAj8roFxe8FDprd2SJdwbZajdCBgCpGQZQzbt7yLQHvo2XRDQWeGAd9CVD8BPK6rLVHAsMrPzGLm6CbewRtBEJ",
  "key30": "4HnRM8J8sSzQEx3CCQutrrKjG5TuFqn8Cf3b35kvvk8pbkByvxRmPJM26uGi4ShqnXN2ZnvCAb7eCogTCaL3gEGK",
  "key31": "2HYZGWYyfn2n2FrtUtkwQNSQ48g6AhdSLQnYigKAamqPvTbW3NFrxxSEb1tsPkHsnGkoYz7kWBymSzZ16F2ogrGx",
  "key32": "4rb8ckxVmof52HmLN1o9nUmkn5FB3XySQ4UwD5vUsymMAgYQH6sBCJdN8DUye1f2ZtMU3CR8YjGv1uyzUqXdEEEM",
  "key33": "593VLnoJsdD4rUL35vWQsZ1RmmpvL117ujZoEorkHANw5MLE7LkPvpCkKZfpdxjiSTud9yLFETkHdRwPNpMYPmfQ",
  "key34": "5jJGL7qZ3aiGADsVJ4WK3X3kwazt8g9rS4R3BQ4kmqrRwnw5Znm3ocPh3hDXqDo5AyM9N8tqvW35xWjx7fYEEkwW",
  "key35": "3zaK1RwyzRaan9xVKAVpqym14YfRDEYgM9JfPZCAMTRTz82VfonjijLDU8yuxHoeDYgUdAVN1DNYxQEr4w4WwHHQ"
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
