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
    "5A1GXMUBAMRqESHZKmHFD3my4AVUMC3bTk1YzM5LDY5gmsP4BDRihmj3DyRtT6Do1WHCXKHGWbNfWGPF3HFkVDaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YuUMYLeETt8XNA6bmpECZMwU6cdVJRDsy2V22nDCUwRspxti9jcb5crTQHKvCcyXKvawCLcHabp4h8P16eERzap",
  "key1": "31mo1F2MkTqe35TwBDAA6o4Gar88QZBTaUsQS4vi2198TzhydMydZCqrF1FemCfVaTPoDtwPYQudfLTyrpzyQmMf",
  "key2": "nEwQ4Y7TRy6ua6KEWQKgkphU8zBxRqYhNw6WEbSGvrKsWzn8XpNnstiWzdCCniKjggW9oMNzHUMsJgsngfUBxJt",
  "key3": "3ZJf6TZeNExMoi77wGQbbdQeZCGJpnaaKEnSv5tDRoQWLQBNjGrYW4PVTcAD1Bz9BDvTaTxmYPKZEdCDN3qNUfEj",
  "key4": "5kU3jDLaH2HSeZWfgpVi18yPK1B2MNnXh1Y8bsXSSrMvJxs96eT3jDKcZ7s4gRxuCvkRacXAkWoTkraYeabysinE",
  "key5": "5kWKFccwziTene1PkPQxWAJJH5Dn1Tdicdsw8HzoMscUMrNDiwbE4RBHVkT9zs4JbyB1yUGGmZSjSa5RzTTyXDSH",
  "key6": "3U8HRSU7Hmj1BzdyEQ4hf81p3BGwziRgrr35PFYNh384UbbTuZSvvyid694dujCZEKY9AqaPSNiKBojF7NZfPS2Z",
  "key7": "4kpknD5qxmdKCmktYp42W9U66Y1xtKd3hXPVn1A29P2obSSN72nNBzSzu7Mb2vucYu3cniqEroSyJ4SkLn4TPgK2",
  "key8": "BAj1Zdb3hqNxFVsoR24Ga2y5pcTMP3Vavr6T5mCdHeZFNNTaMUqHTQt97j2tVfwK5o9ycbT81gfrt2TyciS5cFA",
  "key9": "2D9yEgBHASVJuWpbMi8Uy54B6W88LRmm8oFJbunpJW5FiGboFrpsCqSM5emmQMfLMaG4VtSnSooA4TnnzpWU7BHL",
  "key10": "2vDVe2PHnwA1E8PMCxioiRftbXzWvo5a7Nw1Hg5f41fk94eBDja4WGNwKktKYKv9cuhBCyjo9SVk6Qia5NLzViCk",
  "key11": "CPitJRYeAkqZCu56AUdeohKkrYM3VmaD6or3bff4tVDKrfrVfFKS2SvB1ck3gpbqeji1MeAgpmzXy7LfRpnipv5",
  "key12": "27Kndb3SxiyWpzJNrSx1xjzcvvLsDj8FGPsxLVwhzw1kKQdGYGvCzHiuXHqMxmtJQ6SQiXsKDQjZE6mvrtXsfPgt",
  "key13": "b9nZDTvekBSVuLZh4oGkQ4HuFGMZbsdD6u4Ckcj2T5JQTo9pyk885CqBs8RbJZ2sdAg7H2857d7Z71EP2AKG95H",
  "key14": "2Q3wMrgBeBTvR3SoebRShuS5LtjLc3wfhNBSSLngzmkp9KH4eAGC3ZSYjK1FqFWfkDW4v9tdF9KBMUGkVNK1s7Fo",
  "key15": "2ALF5AQeroM3t3vJivxjA7DphBRXvUbFTaE9JChe29uWDpmyfWz8EFGyiYZ3oRi3iyiYj7YZbJZ7jE5SYDNgBN6s",
  "key16": "LpDraL5bBqfNZVs2xsEea9XzJbwZMMagbnKpHCrq6BaTFXjus95it1uyY1yhNchBJJ31wSy9t1DnAQsSTbvAhM4",
  "key17": "5zpzbmPk14kUHJEYPQZCrqnGduP9F5k1Y3jsUtJtdJC8Yo7JzfTYsRkdCfiZzkAzG719EHCbxKoVUCZe1ZArYdtM",
  "key18": "29jLPYyvNZtLngVWvghKHjixvHgL8bpboFVmSMoFmDX2JB2ruNZw8GVMfs3XsMRX2pA9txP7dQQK22UwWYtVoA7g",
  "key19": "4RFDisdNxRGjMscAUxE3ENuBL27dYEzqgrZGw1hZMsF63jztHQN796mSNfxdbzuL8P3k4GhmvPGauydRqvwLyd97",
  "key20": "46xDtT5v1JfGypQDFNeetrLQaQmcEzvXjw7Grxe9qBvYzt14raWEbhKnpMmFViQJBLnzvX7ykhLuUkT2gTfHvTT6",
  "key21": "2dNGu9Tvd1r6KXzYjRReAgd1fZ9QSDZ6EGcySQEjgUsFSPcRFtZLgRkFSRhZVtg7zt8JhHUh7a7PirfphnjXqyVa",
  "key22": "4JDqWyqTVxX6MD5RWJUTmypUuSd7qVf2XCzfhPhjs3s5JgXL1Le7J51AdBSydxpVdhqGGC8iM9t2hKfcTEo8G2Q6",
  "key23": "drJ3n4dpega9p8RYWqvWh1jGJ4USrNg1tXL9S37FLswWcoRXQ2BcGTqqpBeDMBefkzA7usST3qUYJ1CmiA8PdSR",
  "key24": "4C3sDtcpHM2Pw4ZVu6zmtr3z7pCDkoPzKTXHrZquooSanA9gWx2PUvjG5mrYpWfVRmGKRqWjEvjS6gkhB6mVheyc",
  "key25": "2J2MAABBY6e4ggQ1CmnRjWA3waPhVhV4Y4HuWvrVAie1GsDo8JDx9u2cKsN7zifeBrpXx1Vf3Z2rQ9KFzEGcAA4B",
  "key26": "4vYZeY2vyFTuK6Ai8iuRYhZPcdrp5NmfTfTKPtVgDkUGH6F4JWbrgdvGbJQUyAUHmF2JwMQqH4wFp79p87K49at6",
  "key27": "41eCSSzrkGYE2rwV6zs9Z5pd2P2vWPLCodzztNUTjNPfHNYT9YxsKFgKXd9wBnLpL1X68Ujp6gjPEwijSX6Aco5b",
  "key28": "BNkFhky8Cdwz7jQQCEND8TT4TYNPf3fQND5veCGsYyAKnCj1A2B53rtUbEwcCktNuqfzgX7huruFXsR5yAsEJPR",
  "key29": "3LPNf7XU5DMTqt3hfdJs2CXXa7PA8xgq5DLwtMf5JgbrhRhMhDbniTg44bjKVkSHjfy1Z9fEftbAzguoXVesnpHc",
  "key30": "h26KiLRkPTaVU7GaGnwXhyGPPqQnajxduLNupxcYUqjwHLuoym2hguFycfe9N8JFYVNPhHWXePGWuE58wiaj1ho"
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
