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
    "31fha3Bu1ThBunqcEzgD74S1Eu1dKrtWLL6F3uKd7s3fGXt3YbURHR4vikZcdL5H83Bc35bYQjHfjN2yCD9w7czy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9UtdPk9MnwYzoTgiafD6BiucZmrcS1mPgxCXtXkjBV15GVToFN7NoKLAozqNwb9EnwMNqNHT2tYKpb6HPN9rKn",
  "key1": "3SDWVRERkB6TCQsMMcKvNjx8yS6kHs4WuDBHqAUQm1JASnZzN7di8FQiEw1XfCChswDfBJ8Z1pytrFmqgRScHFaM",
  "key2": "5ak471mmQ4YE1kJo6ZvJLxGiiUjfB5q47GiSmbDDAgLYsh49zFEge9J6M8a1nBtocn4xeAGNPEe8Xm4CA9yiBabx",
  "key3": "3cpXUjdvRcC2tcZYcHdCARzSCVgE3sHZGhq36FwSq39wBinW4EzgQ7AiPmhAihMwwLdWwZXPw4uj83fiLFs1XnXQ",
  "key4": "5EgihZZ3LX8XWvzLXti295tH78ZHpkpHDuim6LsmFTypX5nH9JMAg6o9BFVhJVYFX4ezSXmfTozfcdA8BLVSAbY9",
  "key5": "PPMDrkv2k3CFe179iBx4Wb7q8YmupQnLE6Q1pPRhthfYcUGpNnVfiLFQCEqR4FX7DweoiXEWYsBYrRXUYY4Gtos",
  "key6": "31gMjSYST1tLD6v6818c5U8sgjp4TDsoqYFn71xkLwKJTAYvL6eUSPXV7jpMr15N1bEx3mDgqDcB1MbjXSB5oT1x",
  "key7": "EMm9913GqF1Dmt6iFomFbPAqJFRrTV1LdVFt53nUWBCB4BbQLE76CgBXhnYRcx6yxzSEmrXkaXdeTEy9zZfMGdn",
  "key8": "iM6uvcGcj4HotmCCAriCGTFNnw5xdev63STSKHD26cekixoUwhevcLwgAeULYsjWStqUFNBQfaL9nrKbwLbx2yr",
  "key9": "3bzkmhFF4mXh7xu1yEmW8hRoiCoPT5yLTfcv3oQu86mKa87WTJiztAELaoZo8VG1rmn8Bidv1cMsr2S68gQjTY9",
  "key10": "3RTChFyPqWrytZ6Q1DUdQY4MYN4EQxpUYCekZLK4QsTxgFjYHisZvrPgs5oQ9pErHtWd4GDtiPtW5S8vMokP5pR7",
  "key11": "4TZL1vsY43h68nNh1hXZCyikJTQvqogK6yCuMjSapWNKndfuCDYubTCy3Hu6uvwrPFRdNqLhjB1Pu7KzyTYhheuD",
  "key12": "3khQ4X2rcL4sRSrWxUxthBSGgM2fza7SWyQaTKAwRrKSw2RsCraP98nwZshfE95NgnqJHwG6TxYT8iyRRsXETbKF",
  "key13": "3fy4WbmkJQDTbPKGBUgo3aYXuSs4b8uYWZwnwi5o2Aa5JNmW6RtPhWsYaF2AXyty5TdBPvsBsiBykz9Egjdk3U32",
  "key14": "4NA4oGd7AtuGkZzdddF5uMuME9oSTxE82sphJ559Evg3eNtEbj6V36FZXDuQWGZimHxfB3evGeZj1LqsoHeNdo89",
  "key15": "4Bt6YzuZDhzAN8gt3ACTGFwA7K2R9S7aYUZ9L9nwELHkRRSueKbSVnyhsgCBoBkNaP9kdAyf9K4b9iJWMNvkyYGx",
  "key16": "4wReAp6aQzxfuL9VVQEVQ14VMaRCDUSV3LYBsG6XW8DwR4V1sjSuXqZVU7aKnmTjmbLxNrMVSsJzTqjawNuJCQzk",
  "key17": "Ftc7w45h5VvYCj9T2jM3VhQy4TL7f8FGXroCopTPZcGZhaA9uEEaoEVFtLkBiTR4e7VnrEfyZX21KGkYb22XR84",
  "key18": "29qqpAGVftReurGZjZdLtzPuUwAeQxRmRBkTwGTb7wPoEPJeAsBzg9nSzWYh9mJGB3cE1GfQrrM2Yj6HXwF67Due",
  "key19": "4o76zsZ5MRTEuxUnfLsPff4ujnHnwFCXN12KjT8sn28VXFBWMLvVccGxaMmSv7EG4xdcoLxW3gLPkjZ5Ee3JGsz1",
  "key20": "2iZDhfe8Vfsoj3dLkUqiYDtUYgatiZPNaxKXRxEcXumG4ouFhxUb1hX58YYMsyJwoV4zAFQqi8yHB6DHA8XtgFA7",
  "key21": "Lt3V6fvhXHCKBRmvx7huVhVC8eWA2CeEjayxzNfKgG8bRCWrQUZEUAQdPtSqxoLPao3CGq74bqibhQqNyxjQwhV",
  "key22": "2WLQNxr5TtiVx6v6qAmYUt9x2JqwFbeBbNq389T8E29MmbAyXs51AMSqSurU9DWmKNUgjABeT1tpBRmhxgkJgW3T",
  "key23": "5qnXRMKuqD5Ub7aegtbASGjqtRYt4uF9CL62FLaMty1VGC45N776dYBPw9rR7yuPsUHkMBczkNYLpgM1GawvHEQK",
  "key24": "56uR16mYvwwYEARAoEnvaskdU8EuSLuEy5SKDHWvxxfYAvAUbf7Kirk4gH7TmVL9uUkdncsXpL19xc1cmtPSwAQv",
  "key25": "3yonM64ZsArCewmTLb8f7xg4FMat6urMNSxRauBzM47pbK5tzUA4hoUeemtkkMeBaKuL5i88vpk3a6yUqhpGm6oi",
  "key26": "5R8PDwkpWbxFZQwfW7QPBJbWL4oSntX94FyMn4geiKCToqmPTzGsRWXQz2Z4iNtf8QrfxBwTCR62DYN7GgycUcNx",
  "key27": "2ozWnLFBssUKuNJLuXDDAmyvpqQCcuBTou8DYvLHVD8jRMRbRozFAHZMwTbmmXUNaPGHrHNQ5jGGCMMiWaaabpzf",
  "key28": "34wZ373cendqW95PyYxB9CA6aDgYeUTjUenXHo3gWN4EjKVCfL9eHtV4WB6QijxXXTqLBuKJ57KQVSbzedYBepdT",
  "key29": "4ex8YsARnCL5V4qS1XNYvt1FkNvVaY7x5S5wttNXyeU9od9YjqHP2X8cdRh1HS22emFeNQpykRPTMweb1jQxuMya",
  "key30": "Hk66Xy733MvAgrFxJ8mgRXQtxinLbQSSZFnVFuNrvgbLkXL6hNuH8HuyU3ouXAV7UJ5YUTUE6XUeUmRARArTbWG",
  "key31": "5zSiQqVm71ZkURASt6HJtzWPjDEaCe2KD1viZbTgsj15SD6E6bGdCYrcL8VfwW8FKwPE61FybKsHFRh4ZNF3mZni",
  "key32": "C9Wrs57J9RD8caCn8AhEBSB7FX7eBnbha558seALLgFLNXZMdqSGhgiknD6sDcMiR2XGmBuehXPj2ZEVu8jwwTC",
  "key33": "2Rd3GXaZkxf4U5rukNqfcpi5iCru2geMHe7CGmKe6GUTvD1qvGyrt98NH62a3L5g7yjRS7eV7Z3RUmiBhLxUfhv3",
  "key34": "5Rp4MHHMMDSrCd841N5jWMnEu1uNRUwXGaiAEcGLj4A2TD3znw5okBBNb5knKzzBUMMESg8L1hWkm1mVrvuxFLA2",
  "key35": "cwY92c1FDUcnvfu3wTAsoBQTSAPyN6HAuGp7GykkULpUp1wEvgL2Lyf2RU5qJMzvxTVLrznYTAbmAkVpVw5tw3V",
  "key36": "5KSgPngkVCCvUWhB3yx1qECqzwPrsRTu7A67v24CoxqD77NwGeh779hG1hkCkgrWLDz5xBzvLDbdnGsT7gSU4gJi",
  "key37": "4VZxUm4J83bERFSD4RyNhiWzVg83MPqRZawz8DSu9yY6DCNaWfs6WWSKdG4TJCBGmt5KLf79WHxr1e2ZSX6EJhFf",
  "key38": "joiaL5tNbkKXyuYcVYQHfok5bvqszNFYuGhJLpZuHXXFeVBjdgjmrFkUs79atRFBwmdpKhUegqbrQypnb7fUGkx",
  "key39": "4deb2AU8UxeeWhjSUARuNqtqXQJY1BASHe3V1FHWSAa4T2CxZr2cSjMBjhEPYvN63ksGe62EvMX1dxN4CFmFLAYo",
  "key40": "5zeG2r9QLBfi8zjVLf4UKUZymysEnBj57PbfrtXwuQPcWm3fetfcEBcCfBksX5t1MxLCDTbG4kC4Y7dfoXhyc9Tj",
  "key41": "2r5xxJaBfNPNomUx6pU6HTBWouPvh2osT8vNDwvkXjpXuzxpabNkNwvXguS7jcN6UbqnLgXTaSdXbCdrAaLrvxDi",
  "key42": "2pxkwV5WATGU7ke6m74KqyfWBMkzdCfqG5k5eecUNq2BXSy4pHQJQotQbeyvcmDVpg5iFYwkjKNRpW9Wgeeac2kR",
  "key43": "2MjnwJLPpaJGTrFbXerxBkuBuXasS7sXr5vKoULQuPxLZhcPvTcXrzbMCDTqvPpEikoLziYGKvZnz4zJcgHpw3FL",
  "key44": "3upZ2cdxmJTvTzom9JyBtFcLT1Coy26w8YZi3oFjrkyvqgp5w3azkMoQggGkC9PVMKwftyEmnha5stW3Woxx8nJz",
  "key45": "3jKEJyGJdtvEmPSdaQVxVfFABiEroum5uy3RajqjkKTfwJvNtqDD6WNPdW5VaQMUbPYk6cJuUHjYQ2NriXgm9CBU",
  "key46": "1QrkdM7JSszTkc7nV5xwGE25snebmt9zxexMUy86dawPXwYZy7n8fNaG2Ea5LLSMjvKr7fHMUE7GDTQgXHzPUDK",
  "key47": "LkoENubhrpSFAu2a4tPXQvtRZ9ZoPHaGMEM2dSkmmPiG2X5c6ryDriz6eubVELDMXGyLvCCwiKa4neHTShxryoW",
  "key48": "3rNRgY93XT3oymDyUZAsLK3M3Lweyk8GpPs3V7mm2ZMoDGNatMCjMp2QdhsWCyaNv1T5rYvAQdt4fcz2A2gJrgno"
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
