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
    "3wGCoevF1vmokYLnjqYbsFGe33ET8fuF6uvyR9NTqzvWM6MTHRjcSBKh8sesZgkeqF7fAJoivdPTxkJVNgBYGNLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLvs7HXcWk9ihjpwVBCvKSnsJC83Ym8nDihdRDVs5uWh9fU8Yoh5VujbKzEczrqcCsFn6mghgXsKsLijgoZKddc",
  "key1": "54Fxn5PgDWgEhE4rVxzzco58tBoXrffyCtfKAq4phafn8LAUSU9EuTTJhCZnURkbuZCfHZiyXgsqSYERfTpCazE6",
  "key2": "5RwBvkFmJ3xjaoqAVaJhPzv5EYZQdwaBHXSvXP5N6dc5sntzX8TQMXX4u3B39PgbJuseBZcez3rzrVUAbrL2N9Bm",
  "key3": "CW7bVMNRbaCQRiTDA3bbHDvNc4GNihmxvgomnhS6TNYV6oW3fwGHP572ZrWMq5kLrLrUV8gHefDrKcyU6qwJcsB",
  "key4": "2fXRLHK2Nd8booJB5daDQpgSA6cDc6tCUGM76bJJwytTS8mPKeGEZK1ZVVQ6Jem5B66wdYVjpEsre86ERVmogG57",
  "key5": "3KEB9CBZtcVEZgqof49sXZ6hNFVY4GaHpEKTHsaVYYjJKxEcTxfQViN5vxW2mbSp1HFDaN3t25RyVx35SLVoVMS8",
  "key6": "27Tz2SrGxzwsFYSP4qEv6CdV25wogmBiCFiYq97mk4h6HMV9S5SVPdTz3Nv1d84Smsv3caoSSWjQk1sQRoc3HuDE",
  "key7": "4BAyRsWJEHE9q5oMAmDZSpJLgfYyq8SJabPua9sKXSovnShfs5rpgBuA6hVUdCRuJwkr41UUtk5PZQviSBPMdHwr",
  "key8": "5we23SL1iRRxQzLi6e9qkV1zLbiNPPYSJUuq5aeTr12ZfxPbHHheJRjK7T8v9ADTm4mLKethdmseBkSoZkRjww3v",
  "key9": "kxx9fdTsiAMpKw5j9o9P1LZBvT2KAW8aoSVan2vjjFgyGsmYEzV7cq4p9DoyEJqpVtzjGWZvVUusK749Zhd52wo",
  "key10": "3txm5YBzkaDwpfbzGr9HpztNaeqa46pZhT2nNpiLgtNWHUj2AiBr6LUt6nGjG7eeED9gsu1EnXSpneNFyso1r7in",
  "key11": "2ycRBfoiLe3RHCEheVe9RMHi5RUQ3CLQTEVHqZd9SpgaAHbYsGjM5sn66R8tW67fNhmiAoD2Uh9SwbgQ9NdQXRMh",
  "key12": "2rb5yrxmeK6Fd7ERcddYUKvYHqP862LEBZMAZb35sV5SqpTqA2gR18rXYWDes45KRz1L1RQTRuRTNexF2tnWqU6t",
  "key13": "4FQd87HY4K9NoPgZKxkyjojqSCu3WoWwBAtudQuVrtisA2MTQa2e643xnLZYpnu7cZdvxoEkEbb1FSR4E4TV6kBv",
  "key14": "MNNagB2AB9Zy2VkgBLJkKn1PkgbF5ubWoEEjRK3CreKLLAkzVgRsEsyazrgYfWzjMzSCogS2db343UArLy1JwZz",
  "key15": "4FyrLLimm42To1Mqzi7NEq2AGu6TQYRSArFsx4D1T4h1ixWVTiuDmKZ3BSAwoUwVwaF3zdeJvJRXdZj7XFegQcxA",
  "key16": "2QUqnye7Jq5yERkFg2TeLdH272aas4MkAJjTYSknJoB45uSJnjamJLLgbSczuoTMyKV7nbpCMj1S9gXrUvDWrwzJ",
  "key17": "23Dr1MpWi8Pg7wqNVo4whqePrHcGGj39Sxa4mpNFfyAvhi7EtihBpyyQu3jyxg127d5achFfPaW4K5GzKMPyDUUJ",
  "key18": "4Xwj3UcKGexS3wG8YxNKUjQ6yXy3jeh1dJc1FCYk1jSEnbveuMB73TJgYCpaCBi3nGfnLS7HUN8gBD24umPtFVhD",
  "key19": "4iDLy9hvRWajnWTKrc1vZGM415wcCqXS6ensLCcRZeYEq56mvPP11M4FC4vMyBfefhB2XZE9AKbZbU9FUngt3Kfy",
  "key20": "65FiMhtrYBKzX6MoHbfsvZGaUrhuVXmyzDZAz5cE1AL2fYsAYQgcQXEBsREkTXbt5fV3tZXc6hL3a22MxLatenPv",
  "key21": "2nJghE4K2ca3qJakk2dNtgSxR28rEVzAsRjan27oSEfEqc5WpYLmbtyMxKWaqsFxgTHJjn2MaU4dQwx4t1xocamQ",
  "key22": "4gs1HKpFUA9PWA4FCtC3oahUfD4dYwYUnvqrBM4qjsEzCrG4xjJEE3rensepUpba7gcrYxtZAhZKu4pNnL632Jx6",
  "key23": "3PF3r3vHbrvjfRJVTCBrWwxBkeY2tDDEn62uqTLNSFuixhRQGiyEcbLkq3SsUgXfM8Rovx8qcfthgKkyobrhVmu9",
  "key24": "2DmYpcJsrbfQA6nqBYbw5m1vdRMP7MSKvMiRBqFRqHp1Xu2WnqMP47XKadPSY3eWhdTmQWRHPojco6wE8FRzeXvy",
  "key25": "3kNApeqhoG4sAjG5kLipLiGxkXTWbCvaVaYvYJw1Pam9iqAGnW9bgZzCTnm1UDECwSMhoEdmGFAR1JippzvTwRwH",
  "key26": "2A24MNomLFBHrTeT6ZVozBLpFqa2dbVrUPPnpX5nGPFMdJzWJB3cVuWhuqqVwhpr5suha8ACm5B8jgEryT1p2qUK",
  "key27": "JX4DX8gCbYfRB3kxi4GRHuhjpUFhbMSYHGKtgKjozxtzhjpGtpRKcV7Z18ZRJsCPGzrVHUfxNYYES8KJXUKQwTx",
  "key28": "3yrwpxvEW7jSJvgNGXJHd3McxTozH3FV3EAADVmKVTgwt9jDcTDXEtBEMY6CXJnVR7jrc7n5wS88trPAomypF7gU",
  "key29": "Ap2B9BYfuFLzZTcUP6K6Z9hP6zH9pHtHUTEpM2xanZYWfLDuux7BN6fH1Pi9f5vHtEHXsqY6bQwvGfJRchdkxwX",
  "key30": "2Z271jQonWhJoyk1WDfdWCWx19LMcqPpyRCSbnLQyHtAu4h1UNruSwjxAyxy2JGaSVKtke3gm8S3o1erzgfyJLFh",
  "key31": "5euXxfYrfc2HQhNdiS5VCtC1fDHy7dKjQxZcbvKjiW1LfCa9mYm6C2CyeCaoMsoqPazC5yBWjuR7kvFvfNBobCg",
  "key32": "2xVNXLbgYVohy379bqznGmbU4DZBk8Ka3SwDZA8zXDYGNXgK5ogUpPtqNhWgAwKFsrtpK4QSwTBC7pcdpveP2qWn",
  "key33": "XS3XWDWWu6VrWHgBpUSSqWyM8F2NfJCKU8vrdYgwaXUvEavsahftAa1fbV1rLNUkskVSp8HhcNsqz5Wug5iisdT",
  "key34": "ANZLQwS1oAeMsrN5GqxrjwtBKZSPHRmAgfXethnYkXKd8RZbMn67qHsrXmSUf9Ytuba93dAz9cVVMUEHPod27nv",
  "key35": "F2QMLuzTuFVfgAYava2ucNLDHKipg2FutVWJgjfCNmJZuHV4mCTVDxxYe1vTuuFCyrCJeq69ppuQBHLtspHAFJR",
  "key36": "owR918DrcuFjEDna2o3sqSyQKW1hRdwnepwopJTxe7MPVeurMmE6QikE48jE4GnpzVXqzJSgt7Ds9AwJWV27aZZ",
  "key37": "5GTSTrRmQs5JgSKf4kCMVH24Lt15E2nZHE2Yi9KyW5GKxxm6LkcBqsjo4kozPEM1MuSpWZ93widHMmFZiakjNrEJ",
  "key38": "41SKe6TUZZSABEingJzSkHnFmqrx64aCUVL8o8cDfV7unsXG1VwfVgPyktdWjrdv8xgMz2tchbPkfBW5ch97Vkoo",
  "key39": "taccvg8hnaJRe8rLRMKT26BAyMzaWTiWxU28AZ9zyd1QsBWad4bCWFfSLHAgP3Bfg2PRbXPZLdtY9Kk1mokie9z",
  "key40": "33bhuPp9wbRg6XVZ1KAaSTsfXWT3TSXFXsbnNRFwbKsxYULHVQNa4t9YdYLTKPcwGDnn535uCVN2uXoTytkTTuXJ",
  "key41": "3AERs1uWZpymxjQf1AyVvAKZftWcSfgJowXeWVZANn4RUKjhJ2y3iGWykZnDsxhM6qwd2CnVSb5d8L8EzxRDv6Xy",
  "key42": "3d6cafKoWumCpLYu4Bb9xHEtbqpYYFrDzsMmHATtXjiF1CPdT3PUmi4MKeqN72RRSu1UWyRYTeTgwWfs4Y1ESR7H",
  "key43": "4KBG9Mn7SncjeWgGQe54JJsMGdi4gSVmUNaH3kyf6JtZ98r6P5u8tVR9BP3HP4uNbQeX3WHLqjfEYswQ4ChXR39F"
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
