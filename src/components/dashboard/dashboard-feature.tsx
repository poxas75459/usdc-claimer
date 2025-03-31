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
    "AAzcjVwzrpscesNpmaTaUPwQ7XPD4956sUqDpFYVfv8Yfr81w6Hq7ujxEtaAKUUtCEEuViwmrrRixrcXr3cEYMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZvhLtn3R21j8tnXJA1PBgUn2tp9H72EjhXY3xJcJodmVMpqeGBGUiNWgy9zbwwuuTeRiW5iy6i6JAQ6E8Lofj4D",
  "key1": "dtLFZqGaaAfExnUE8E1Jf8cZgAVCSfyHyDpPzTPcoZzaUGPLPvh8ijBjoqYSNa233t1rHZB33xeSzikrUNh2RYE",
  "key2": "463x9NFo29bntddWJtSdSwAu79so182k8XR8zJ4vHyuoLtgK5tb4p8JZCmRawmEuECAqmz74fBCJYV8juSRcCUJv",
  "key3": "2fBzS2przFUxB2QmxCCgwDagFDEWfxCCXQYXATEFzRzgmZky939eJcYhzxkmRfvoBCMm4qmH52YxqmUXiQNE9FNd",
  "key4": "42UNqTv5qcNkneGffq45Ck2c4nif1sDKdcB6395FyCkoJBbMEHwsXB4LjSrV5dtoXN11fGWPAwpnr8vtYSw2xz7M",
  "key5": "51cKfVL3sHQLcnpFzh34gX8n6g9DMt56ryJRv9GqhgJVet46RiTHfGrmqAau2j2xsDbKTrKC8Gj6eqHb3Ef5fbHg",
  "key6": "2aBiitxQgFioUDBCJJPGvnc42nLo6BFytgeeaGvRGGiAXRx6gBx6UzqJS3TD9uTsw8zzaZD8y7CYNdi3xmUZFm84",
  "key7": "xLf79RbJrGi7y8ymtTYxLuLiY6G7hDgYRLRbuHec76KeRTzwFfZHeWhxHHv6ZK9q6kUP79DpiMe3YjW9MzVr3Go",
  "key8": "2tSDgsXdJad76WbiSq7QWrUxG6ZRWbUp4XB91aZv4i6B9N4PL4HdV5fTVBZ6mtww2SU86or5Fi1RfbnpjRbXX93D",
  "key9": "2JTyVbWbMCmTR6noAfUYMfVnjAtdHx8193SGaKzCULvqrbqEGxJDpsRe7gX63cdT83sNbCAvTCkhnowDmFcqnD5V",
  "key10": "5Y65nZsr4xhW7EoA7MegWTU6qLVQsG9Qd8CXpkCURL2ZC1gdb77CnSh5UKveMboFRkQrVY3HRFe72SzoDSHKfTUh",
  "key11": "5xzaaQaqiUkz4KTMVpzeS3usdChwhpDqqw64Yo86rA9tMxiNgiUHPrsZ6DiUdEbewdqcA1c4MMLmcC7iKgJkG9rz",
  "key12": "126tHeHNDphYPStZ6eD6TdHAAxpcHsMQXcxnMQVgTuyn2CGyB3xtqXKeMFVhxne1doEGBxeGn7v7cjHsbGFeuFDn",
  "key13": "4e9YzZxJEthQq7qbf9fVioNhmXXEWxLKrZffFGukdhqarPxxRLS1D5tscczkt74effz2semRcdDp8fWFxNJL91Lj",
  "key14": "1hggwc6bHfo2Nou9H6j9NXw3b5Fnvb5fJqAZAGhnZVu8XGkr5hAAfu1bR6FRTDfr3rFeofbo6ht9gVeNV1PupEP",
  "key15": "67odgD2K8o8Pdv554pHxcbWAzVuzeWcBCcVeQGDajshiwHWJviV7UrUetk38wPEps2dTPhkvS28x2ao8Uv5tqchg",
  "key16": "4pPMpDhjH392PS4PziaBUqYLjgeNfWmjntjAdaZsFjhf9fMNk7Sxv4aDaVVwU38QMCxR7Acx1THtavvzsv3okJDp",
  "key17": "3q73GSVjWysoAuDcfE5uKi9oVFvT3LmtZ9NCBTZSZXBigEe1hdj7z8sLDPaxM4DgGUC87NpbYjHp86wypgX4bJ3E",
  "key18": "4j77CqostMmeQvFPxBzzv8uVgxKid19F6dmVKZ62cuJw9fUBszduPA56FLwjgQW9H1LpnYCUfviUi9AHmAPqXicg",
  "key19": "2TgZvX8eo8F6dEjM3c9qXnhcxvvF1VfJSdTZTSvwnETJX8vyadoiN3GvJYZJ6La7tnX2hp64iyEGSG2QSQibMyva",
  "key20": "xQNUbxR3Sc3Ghxa91AAQummCGVxCUmD463bFiG5RDwhzpK18StDFPu7Xi8L2cUp2jou4DdgLZBZqpgzVJXCjC6E",
  "key21": "61h1D2sJmD5MZgfEEG2rzATyXG8w9sRmorXtqXmewXKud8GjLJ7unZKMiztgoytLQWVqACJMo1GvV2DUvFuTcGtm",
  "key22": "4NyHnrySyuZLXcnaLusW5XWBwffmsGZQ92J2xvR2RV4fotgvXHRcfLC4g83P4C6dMzW1ogUpexrxEHY1NdmgwhQU",
  "key23": "5LwNjnEjLtz9efF7X1tAjfzt8fD4LEoBVHaPhBaxBMzdwf9fQWWQEwuXHhAY2kuUBoLcM9bYedsRQM3y8Veu6K4F",
  "key24": "3rDF2n16xtGbrfXhRYeDweJ2Bne8Zbz9pqLGyLbLomvYHPLLpvC4AmUT1miaH2YS4JetXiEaeYxea3ozjfHmxqhH",
  "key25": "3kUy1vPsvPjChVrVfnywZQvK3B4bTDtntMPz6EF6vxJfsubA8GVLhFNzyQ4Mv1zfYmzfR3972tqEJfskX9tYs91U",
  "key26": "jd2etnEJSA9agbpa3jLzKSvZxbAM76g3wxydVch4vfqU13yySrYgPxEUJBnt8oUZ1zfcTmcSRCgcHNrCy9P3Ljq",
  "key27": "4DScj9zHXwDLBxTN7w94QG5yDEXwY2XaGsF2NtD7wCe6EEkqnGfUUjZC9tc4Ehv4RKd1oGDUEEpzEuaA3ty27v8r",
  "key28": "2QGmv8SvzchZxChCAC8rRN2JV6oVXqELM6tgkGUPxTZcj85jHDE7q1ZZN6shYRnRA4kCW8W8eH4tiHakX6g7hfEn",
  "key29": "5iGKoUwokcwyVnvRthKhywLK2eg8PvX7192euHF8Xro2LZHh5mh2z7AuYMcZyTN8tdM14SYTvV2sVdaG9dryhaSU",
  "key30": "2DATpq8NUmDZsua9MkYv68kHh1dxGeXe4nrLrbcbP8t3dE6YnHcHZoG1WysasATPkj8nbxgJp1iFXZuVGu5sCZ4q",
  "key31": "2DrFSWADfSbFvMxuuiCsFr7Sfc8dT5tBRmf5Pzsfeg5vBitBFVsEPRB1x28ZjvnxWcx7SkrQ4jEzxbKB5c86kakh",
  "key32": "67mswfbqWD3aB5BxXmJAFfmoYHZKvqcS7sC2mUibTGyKoqQM9EPwayXuiKjyecXmpoYknmYCFvWm8ryYVev5ZHqb"
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
