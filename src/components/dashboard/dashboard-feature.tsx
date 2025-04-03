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
    "2FRWo4Nk3voB45Ls6w936JVQa6TruRooLStpT3hkm7yNsCoaU1QQxypBDGoV68FwV5QgmDCMrUmNth7RYthtKnhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6nKftdT9mGitcxXCmS39qHopMLwetSQbhaJtNGP7W6wsZgckG1PThdT53YhSY5sranUF5UJwQzyWya3z4yHgsG",
  "key1": "2vaMQSs9EtZVJKAupxq7xjzUNDVNk9BdB4dih67j8cxGJcetEcBcTqJyAMH4irRB7KKm17qpU3G5mTWcEuxShLAA",
  "key2": "48s6szzbVPThx7Suqi3qXf4jKmVRcznhbXZmvTweYBBtXosJ3aWGatk7ic4ohxB3mw1qAyt8ipmBGMtsTYRuH42H",
  "key3": "3eiETamrqi5JfexyGrv5C3ujpXxa8CWcvSGDnoghwTwp2W1rj8vcWQdpKyC8RGuAJoUuf76GpFdfgT5thgr1M6yD",
  "key4": "3gJRjE99pvJgg9n5TMA5eHaCLXp3qAGjUDXPt1L6qfjWiSWbbr38HRKqZDojdgDKkzez12FtF4BL9VwKKm7nS7GP",
  "key5": "2fUA4yZdutT9Qb76Wjq73n4rgcuRijvPYCfcx4HyFyvUqVyi8BKV2bjgkJNFuXVcTanNamjDapHqXSyzxjC3wQx2",
  "key6": "4nknSAJR3juqVfaJCDQJB5iVbvh9dZpD6sdeqdajgy3okYQZaJWPPkaMY7MeAeK7feBtGXKWLk3LFDDH6qoUX1fS",
  "key7": "4RHEuLg3CxYMY3Rv2LWZ4FJdTwYQMzwAfBXMtzdZfYsGo3pQJwcAzsTSzZ7K5M1DR4ZuGTK3VKDWdFcMouubQmT8",
  "key8": "2N8kA2VJ7ThUTho3DkenQPxgCMEweAWEtsUQz94snwmujf8rGJoq9KyHQeHudSZ5Do2fB5k4wiryL56hm1yokapL",
  "key9": "5R6oDPiDPuGwC7G4M3WR7sLh44vdwkpKuN5eAmrDMbvjNhdJEdqo7o8DpiT7UWGTiMqcJk1xK7jD79Ur2kRHzad6",
  "key10": "3AjZcdW66MBQjvR6XR7EVz2dnEskgABxFbrD8xvbT4ZSbnEvKF7gxqKcLxuPf7gTCX1ua8GFYxAPgHuC86ZL6dJK",
  "key11": "4sajRiJr9wAAnXuw7RaPBEqVUNw8wboqkug7AyYLPAN9dUGxE9MLbFSrTTFL1WPH6BNghNjqR7oEo7i9NnbLMGVC",
  "key12": "49N7NmGnGf25hMVHL178FyDJHCBKS28Zo4wDoD3xFh3pqvHVyvkATozdZfF3vHicwp4Z36jdXPQUA9K8KfLEVCvG",
  "key13": "5Dj8XMvtibkzBHYGrXkytpcFK2iYwow7FGrQXZL2mCTEwQPJBWfygyessbga5cgHorUVcknet7GzCUjucFyogcwU",
  "key14": "5HAeydfoewtLYehLZu1sdVN6mtD2b4JhwzWTSZUxDTQF4ofWmL5LWddoRRi3DX9FZ3awJRBNzuntFjHsktr8FprG",
  "key15": "T6nX2q2Zj2pfWerM81Y6BGNU3dmWmynvXUmrnXUHnqsncNFLi7X56indUy5EmDuKXBCHHFU3myGau3gNZDcXE5S",
  "key16": "5k9YDbswhcQyd7ikccKeShB4BSpiZfBRbvzFzH56MEtBnd5z5jkYa1uK5FKxJzFdc4KNhMmkvVskR5gZnCWusK1D",
  "key17": "4s8KN9KqJqoBogdQu71dcumpw8Ns6smSy26g7bEHKSV5fv7s55HpWxz8QxB1fR42TVCcUcEcWxFGk7rjUwdu8doe",
  "key18": "36pBuq7HHdTHagnRGanDTTKwQRTXgR1Mi9eYtHt5JoSwSzhPepk7xrV3qAyXDfsdnQQo9w3jP3PGviuH6nKhJfqj",
  "key19": "357eQELhkvJeUZkJmmjX6jRfeixr7fvxGNXgq9xSG8JK5JvTwdpgs7M6ZeNk2pxihyXFVxHP2VvhZfCyjAifpx5n",
  "key20": "5JKf9LRSrjSowMob4Lxxhkg8SvqhFbygj3va4W6uoxfohUpjPwA7mtsnCCevLChtCr64ZGnEcFHXHwV7HsUhJwp1",
  "key21": "2LKj8wGzYMrBsgpSeS2gsp22NZSVsjHusu6QVzVYtDF5qJJWMAYNby2SFTBXKjfaPUPexUAyPu3BCPAYCozqNVoC",
  "key22": "3WExhtHH8EDr38iKETwN3vkwZy1Zb7fd8UUHeQNCQt8tGDXVbPLLbRDmqKYjkdLzqL1kC1PewW4L8mFCMof8Pq77",
  "key23": "2EWw5xrDD1T37ATppvsTQkuyJKubp8bdVNvwoAgfUmA7Z4NowfC3hV23yEjMZ5yQnuiz1pkW7Pyrh9PuUNTHvKQ8",
  "key24": "4fc5eKqiHLgpyx4ZH5iQvJFc87ZyM79qKhte6P8eB4GHEYhufPwxeu9woXjexEpAFvrZYLac9QK5tib1ZdsXm5Hp",
  "key25": "4YRturnMEFgqJeXyE6m4dFyGHmsAMQGyxB7SEosVYDA9f7wXB9jqsM3JufHmMpGdAb4BDp66yTqmQz9EXrcY9tFC",
  "key26": "27AoHD2a3gVktnuFiJ3XNVYPENjnhNPcNp1TawgwsKrkJ6UtYuzNagGhEdv7SrEt1rwqgg4ZroovQSHLtSd1Fmjc",
  "key27": "2Nw14wBsUbtVkYSSAiAKSNwZgbKt1jKz9uj8qNw4xAMYFoSrZee9Bmo892tMPN4XkEkpzbGoBAQudW5NGSk2yz8D",
  "key28": "2kjKV7HYuG5MKzarEq4EwiPYh2d6QiWJmsT1FHQSkN2jVgDbY2NgDBYtNo483Ve6bmr6jqzX3Hq9pJ4eDadjsECr",
  "key29": "5ptemgXCSMN9F7cjB1Nzn3FCTvdC3yephR24Wz1LPk51MPZ1s3iAeEBnXABv9xbLcu6HE86Jbsvb1mtrKXqp3yG6",
  "key30": "5jAfkZrttLBaQgmgemFEDTwUZP85BKP6fMYPxA7XsA7hgygTPXM5qE76cVo5DTKUQbdmg64885xeGybBVFRERVat",
  "key31": "3Q3KpBHW9BXjPMXxzAJr7PQWDdrqizJ3qxsNunig1z8LiULZ7v5PJGibVw11zd5ySJkd2XeZqAVjbajUkKebXAqJ",
  "key32": "6hrhmH6ipPGg7gANT14hEbjiKm6X5dCZhrZyognmFhcNL4nW185W6rj6tDMN2EZk36PN45hWqFjSL6nTwCDosra",
  "key33": "324hnQLo2aiWaRXVf8HirF4mktbz98CeebZokZTFMdmz3nJpJK9zUiiBgg3B8skGmhH6birjQSE7e4RQdEXvLZxg",
  "key34": "3KzDtLjkPtZx77PTLeS9Jg3jdsRqSju5uqmy8Sem4rFTumpzZnfnqrfvKC1R6EF95qceuiTYaa4rWfYHmvzDGc6h",
  "key35": "2cya3NvW5QhCDqu22zF8h6KMjQpgSWi4Z8gfdiRWmo1rzsk2XNULVHeZPvQVXZxJisHQdbJyYu3KTvkPBm3Tfdwz",
  "key36": "35pE2JXypngsq4CH31aYctLJjCJB8AqszFPX1RtaorNzsEZYaZ2VCnHbx4zXYEm87RRmNdkz6wJjNi9SN7Vk1Dzc",
  "key37": "3azBqbMpkwYZgRpao45uZt1mJXYmzULZX8BokmgT9xhSfUqqcnn5BTkMb67qaGbua6kLD2TVh22AMSiMoBtQhXmR",
  "key38": "sPjYMYAMTzQyPyhzCmj7hLuokhvCzSmBuEU94H9LeP9KFDQ9Qou58NEmiaDCUbGCPcTjtbJX5pQ2vC7ck3px72Z",
  "key39": "38DZ7kY6zTDhdF7nW2Bs5KziwKTdejzXv8iGKtdKApL3mrQCaubYWozFNEWLzzwjTQpLPtew3PVpzkdAMALUfTLz",
  "key40": "65W1gRwHNL7qbm8cJEyFDvNpjjEVZHMp4QvadeP6HfY48i9mSwLJZHiH4HQCnY2kyE4JPgNZGmS5euEHcGUVAy6d",
  "key41": "5WACeGXJVfAozPRKQgdyRGBTvdKJUjLGpsJwBeTGMNLreKBTxPWxJagW41AWzsEnpfxj5Cuz1RseMWmk84xa73Zt"
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
