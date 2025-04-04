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
    "4T1faMrwhnTfGzDS7J61LdQZLkwrce46ujPzXZhBBXfAHm6CNxeUjBceHBqXZnHZKRJpxVfA2MrH6mvpwdsiZST3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3bTHa4gJZw5jWUuHdjryZUB4a4d3jSNFHsVFKRRtQuvcCbknCXwBsCrsEokfvWxth8U1eJCiUfL5TswAjMriGC",
  "key1": "QXguphFYXLHrpf2ugoASyTHDh3JoEtCHsyosf93FjMBbXZ1h4i3AvbVCcugrqJKWXu8kL7v1p6aRc2hN3j8fZdv",
  "key2": "3knYXsutrjLjWGiyxLQWhqHKorff2gUX16gECFy4CDsxEMr4Ug6HpSWTt4JcvHL9yyi9su7pEBshxWN4BWMnBqnW",
  "key3": "5EWn9YCvvbJJ4me8U4owpr4A8Ypp78gEocYpyeZf9L7bRZXVCwVwB5fvFBL7KJcfLfMm4WpCGmbcyeuUGLtqg6Dv",
  "key4": "2hmrF94Zbajb7Q5X6QyWNKSh2mLEagnnYcsomgkYzxsJv5Gj7aMrpEbq4DvSaD8VgwYWM1KZe95pxqEp4g94KGoh",
  "key5": "3kng5pSNRw5fw9vAWkoUd5HPd3gfDkfKgy9NWvn8YYGN89jxon7VdzvVZRun1kmVyCBHKzLwBKXv3vj9tiXwj4my",
  "key6": "4bHofERwBA9HVkWxYs9dLpW2b6aWcqhW5uFRAaUyhupikm1jutVDCnFEsiXEydukxVjX53mtdo1ECS8foyLWPNxB",
  "key7": "4npqVdWoXuvjy6yxkpYbBPwjafXHih53oK5uX6Dk377tCENWDnVS6U2NJTAniqkPQkLo3H2hsbdq2vAiKQxjPPrC",
  "key8": "GVg6T2eCLdmh88dYDCLEbqonKdmiQvckfAiNgqhGjntZwUNGZeVpAsdoVfL366YB6Vcb3ghaUVY6RF1wJEsP1US",
  "key9": "4zPQQ47sgYqtKyNafp5nhQKVxu2yFgDVz9uvFVZ8LbW6cW1mhKTGM2idiHmnX48bwZFcCjH2KTDQEW5QE4CZF8bp",
  "key10": "448HGsVn78uLUEGrteJeEuJSeiPp3cuAs8r5QiXGMif3CFnKENVtZ8nfPgkC8RFoYZjBxN53Qmgg7T5bBd16BrkU",
  "key11": "yH1rMPCTtEzffzisJ4kb9RgnhJcr6PSpxKFuhSxrCfcb8FQED1EnpTfZGejD78Fyf6AxMBepdMReJhRbcedakpF",
  "key12": "jiwADVjnfa88zCcUHKjJoHTnnqqiEHqCi15CmSnqRax2gDVxuVdksETCn7ptvNkoeMbG8Pt1xGy81Ff87oqdJVA",
  "key13": "3U28wBfJUBAWQKZ6mH2YcTZEXsTCdkQBTBqh3ZJdzcJQPxJtUioR4kiZA5Jy4bn7oGZ7gxr56QYeznP5V5iGfU9f",
  "key14": "65aHTWKrpTHW9o7E5fj8ejdwDxN147WRiLvNuxt4dWMdFSwABWAmKFhBQc42qeGGkeSzLsZXm6Ke4jZQ3DCHnSBm",
  "key15": "2D2Cm3bY7DyTrQw6s5Q53Pcn9R6LpBArpYVLxXQFMUV2rHCir3sxWjJGcb73LjHZPcAYbMWvaiL43rqHJfPzBsqw",
  "key16": "4xFvJHUhR5CkwB4MR5m6nEDKKcMZP4YjnNAcFPrgj6UazYYDdZ2qevtcAoDJRBMy9PDiQwQucGcMqk4WPeYj9yD4",
  "key17": "WyjJsBj5RjtqiUByy3B5TdKV6Jzz87YCAxeJS1MVbUbq8eT16Fby7XL5xVJ9MZpeR9QdGinpJ5x6fvGv8KRZNo6",
  "key18": "MMMGhXAUx7c3UrqCVf5s8SmCYAKVRGKnCP1YavtseXAFSrZF1Wm48KtPVfJNyScy5sSX3DRKCv3GcPjAZJRr6NG",
  "key19": "5p5TGbzf9beniQ1nWPwivHKCjXZpwRWZJhohmZ8Sb71KwVgXNBq93WvNFLnaSAYY3WgDpJmetkkqUFz8LQSTiehA",
  "key20": "3pGYsFpvpRVf1HZNmpQYpGrrFZwGMVKpRHF18NePnqb5vJLvGLoMfKrZknB2v7WiJaPwTnPDZtNQKzBcHV3k6KNv",
  "key21": "2fMMb8hPPjGXJwyYVShc2jiQkyKiukS6Qwkuv3BVHD2vGdXktpmHbY2zmgYB96CDbyvWfvZQCCkU5X2sMjjWdZZZ",
  "key22": "5VGK8UfUVhcJRMuoLzALXLtAX8YkJiNLRK3JB3HYpHs9aR2qAceiYLBF53m9CawHA8GP5Xf9zngf2aCKmCvfikAg",
  "key23": "4aEJ5sA5vFi25Soyzbw5kQfBuQS5xJeUERY5BNXYQmLb3JR1dRS45rX7AkuYHZRc6uCy5JvpNERe9iKETgQNWvxr",
  "key24": "2nL3UoFZqvJCkfzLkKgqNkjD5omyLVFBSuborgKsPWgazfhjiis9irZWPHLiBMmnmNhyqkA8vJEwhgWV8mR8VLwp",
  "key25": "n3W1xe68DshW3zg4DbwreBjfWXw6kf2W2xychUGNapqn5Y373Lq8bMqUNzDF8bBo7Y64d6GA6J4dbDXzEDcE8Vx",
  "key26": "5dNYSBi1Qm51ugHcigiDZzWKT7mHJZvMdRjGgU6tCoz68WFAMtbhE8hsQZbqKd5Tht7Kab9dndG4rPR8LnjyezZZ",
  "key27": "5UUAya6k16qzUu9Yc3bQ2Mhbt16TqY9FWFUnJMN2MRcRkmEdji4FrrPF1DgQE7YQSp6pQtGExnyGfTNhgVRBd68D",
  "key28": "3MdgGWrJQQBecUA3Z4yBgRgFC2FwZhpDp4cKaapyvQMAHEhrDKzTfoe6gBrp5LPrwpywzmoWn1Lvrjoz5NaqNHAP",
  "key29": "4ksQ3HmgiqUsuj179H3pzfWhKXd99aYf9iLNP9cbVEFmSBzSLDk6NzpXNvM4WpatGVYPMC6oKiNZR7sVbWLmiLAg",
  "key30": "o9ZE4cnRzcc3mpu3bWRyxhhL6rRJyb84fzHSaLhUHXvUSvyFv8ZYceZRePX6xEveNSstU5hcSiwquxEYg7RnoiS",
  "key31": "kNMmLpKE99s6Tsm3PfKekHXsGNtDDFxvWKpjLWfYSS2zhWUNsdRix13oJ4wHNnVcfzyuir28MWDnBDLvkdezBCQ",
  "key32": "XY4Dfp3nEMQjMHRvuwHDVrwbutaWhCrkXAXUpRzvxJQKxVDy46vErNi78b9TSVgeY3qsuYNAXcbtAP3oaHp5rYz",
  "key33": "5vuMyj1fhMRfBWke8RFV8PvkkqGCBKJWEM7dmkivnLvxQmKfvriNDPPWGyY2RPKVuY3x9q2d2QmDZtv1Gx8hsUio",
  "key34": "3eKL4GCYfJDVKER2SRza9HxBjincgL35Rgk8NXbiXR6DqtdLcR91mXMMUy6F3Lxrknw1z3w5dQ58GoKBeHZ9qJDZ",
  "key35": "4UnmfeMkn43fsQx7nKKEFzVPygTBJB1p6HgYjD6TEyG1Tzs5QZ9iQWNonV7p5bsqmWLqTmccPSyxthUsvd8QaGw2",
  "key36": "3nn6Lr9NGJzmUtZyvrCUqYgSnPyTDANMBBHEUQNQumQFsLUGHXGV99UjD8JNgnqfNBhEtymLJpP37k29S2bQfaFg",
  "key37": "63oqgNTs6CXPwEGuDxZipkcmSdbm2XugUCsQ22nUTtKEwkpY5Mrd91wYC75FR8pVgumQABbt3c6qE7GNKKeM5Rba",
  "key38": "4VpTZ7NQw5F3nNjN5aHgSyyAixW8nB24fUdyM8woi4KU1MSFLrG3FAPESfcxzyKqDkswS68cZ1Sh2Ta2TexjZNm6",
  "key39": "3qSGNRp4fm4qixzJSdLWxwFTCCcBfBGMK3ubABKjCFzKU5cKdK1hbJ3DJwghCCU5sQa1NonSoeBEoVJQtTamCvdB",
  "key40": "aHD4QQEGAJGGuHXN6RUvUrN2cexY7tpPQ8rg3cZK6T26spqLpc77V1jEGz2UzPXcSSghvEuZLLdaAecsqfcQoes",
  "key41": "3HToa4BYacnqbNCBE1fuJR71DLMaMxqFFdVLCcWY5JiP53JzWy9Aw3FH7jEnJczTkQ12q7oohnDN5FX3ob5QRwob",
  "key42": "3aQBDeRQvPVCj9hKcZ27wmFb32QkJwZZr5RhGfZWb39ynDFu7JEJUcK4DUN5psRpBf9pCpyBsaMGv6ZEurUsGqG4",
  "key43": "2apRyahFHGRHM3Yc3x98CNH7YarimqwyBjVrrbaUWFg7uBg7uqhTyP3NW8xvuxf9hXxJNWnjPVn7qMTLpwnYLgYd",
  "key44": "VRBdegreTFMwHE5zVaWpYPZxaDCD7TnacAczjM52K3YVA5NSDqdQc3JnARy7AHakWKJB1UoBxged4G64qABFNsm",
  "key45": "3TN2vUN655upJMtcdTB3fULydjaDw7UjqehzmBpZXBgsPM7KWUFkYo7FWY85zCSB5sBi7qoKGBuHEa3iYCTLP3w2"
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
