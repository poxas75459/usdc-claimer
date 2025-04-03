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
    "2nyymBg3UDLsZbR49AZafeDaNVMY4WZCCQwRREb7mA3snuGJepMP6DQuKsvKrKxTCmFYMCefvTQ2eib8bLeoDkug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPswrZEa2u78zy5pPwQ14jJ3FsQrAP7u5b3z8cfj9hsajwAnY2YkCkD8j12YbMod7HHJVZpL42fyN23jdZCWuE2",
  "key1": "2tr95xwDz65vkcFvwT41XjprKxQb9NLSjRmuqgtuaoKk1BaaJ4bxRyHLewPjHHzrmEP9Zv3uUddG4erjRGEDRzY8",
  "key2": "5MtUd3mK5SWAH9MX33HRYtuHUM9J3VuqLHfUw5r9233CTf2u4tmU9vnWMPCG4c8evoHd4pwWm1M8CL59MzzfEADE",
  "key3": "4JgPFkXW6y54LvVULGcL9sixHUopVx89E8WBkncaTsBAN8bvnLXDrLG1YeZ2jJ9rNgniPi7bf7RU97Pm4vRfjJPC",
  "key4": "ubs1mym25Unmik1wKMp6EPTWgF7EBRXKrYsAfBiFSUcx5VVLfAWPYEeoDT9zRzkHrBRfiKXrFQhi82tKXTj55Hx",
  "key5": "BD8LDPxtFE7ekh19n74zwcbFkQMQFEDCeDFo8WazSnFqUCFqLpXzfZArUQDkF6Gf4G3ExLTTDTT2r2uiB9sufU8",
  "key6": "3kzGSPZhUXq4kYSL4gGB55mMUxnEhu8vrUGFSnn22T7b43vNAfMcPerL1g8NNXe1Kt4WnAqHF3DJ3a7zQUZbYfbz",
  "key7": "5u7oHCjqSdgSuvHnJZsq4DQnxBWZC3nyWcv6tQcpEMs2gRZ8tMnXevDP7pyU2e9UJYMJvWbihL1pZrv6wnUwksiR",
  "key8": "4vAAf3iDVr8wVRc8nhVmvLPiWqYseZFEArysLqfnqqTb46UrWY21fDzf47nu4GmGPoabAHYNXiYX3J7aiSFhK2zY",
  "key9": "5V8YGuAox2GfP5AEvncrGQbzSXgL7Vi7KLj3a66KmTEsKdfJtmX11zPhaLJaGo1DTBERtRev1QYyAZqwZzTamAtA",
  "key10": "479AyUY6EkvJ9sdoSeDHhb73oWFbStKmz7TNTwBWLegUcoEygNmkYUPkRanfbBozMVtnRnLxofQbG1ocY7yiu5ne",
  "key11": "4G7ssds3SPNB7rhqozYdHqNFCiKSnSGvTBNGghJuhdqcr3C4o49yVn3QBNtyZH9dkHAyu2V8GZa4fRcBt3WQE1Mm",
  "key12": "3XUmttSiXwAJi9tB93Q8jx87mk5NfeStWW7T2y4JWf61MDJVgyqgwNMJRwavweqi5VudRWWvK5LvugYGwGK2emJ3",
  "key13": "UDHfQUy37PT39HdAYeyc62tZ1KnVdbFZ8VVsPRmEWBgRkaBtSFPtT79Mh4QejvNXskfdVBYFxeXzPB2tRf9ycPV",
  "key14": "5aF8trpWFTyHPAtwAJFEJriKb3PhXbWHS1iBBCecy3Tzbx5A8555WUnQoSkvi7M7bEnUBD2NKHhyr1UgF44eCeNe",
  "key15": "5kjKx2VDASnc83RKoeP2oyPsn4bdcyvmYMU27a55PcvHjZHj3ihNQtqbjn5Kse8DJ9GBKsuYTy5cnxkpyjqsg7Ct",
  "key16": "5evJwr1Jt6rC7swqoMwWdVQuryvX2zGNm1F2g2iaLfWCfChxPX6MTmUp1htPNQUUMLG8mEMT6xpFeN4udvUHufrr",
  "key17": "3LfrTQNFVeasAfGxoWHWZxyhXpUbWfi6heRU2ktxiUmrfmad6Qadmy9xKsN2U4vaJQBEcwZgKSJXe5AoTtUajFbM",
  "key18": "4dicwqBoQi4bzUDququHgqx4E2fkvUJBCUYxav1dY1hAjEc8MfBsLcGhmaDBcdknvkZPLpUYw2hnB5B4nCCFggcb",
  "key19": "5DnkBYvU7MAEiDsvamMGFy92Aeb4SnyT3w3sUxQZDZBFWqMcqsH2tFQFWZSuBSqq3pj1RKPuc594igts6NL2zF7h",
  "key20": "5c4SxCjdX5R18x49zGED5wr2b3CjE6RkXYi7kc3Xk6zfYxb89DDVJpJh5YJNqGVYytujoVpuSRVFHwLJAAQojSjX",
  "key21": "5uh8vTq6yf9aiGTJwHxgSKrKBWVGFpmmqAisizNA1fmPRwFmerVBjEHWuaM8VrFvojsn2gLgwBKqmGrL9EXv8yv",
  "key22": "3StjR6vdS7EUgnZ26gNSA4WscQnRa7cPyfk6MEUgBNLwdZiJjqMyh2hn5oAnY71AD9z5gXRwvTuoU3toqH1JATVj",
  "key23": "2Ug91ZhJTbsfFUzkbZFtV9LqoDxyyXA95NTmeHeJDXj88vmPH6QbPTgHVXCUmbnSV5iiRvEw1SbjcNFHndPokrnV",
  "key24": "4zZPcPeNLDxnS3yZ8zabt9TQpkFKiMDBj8pG5NxeB1R5442p9eYkc1ztPZYcN3c1BU8o3FB7GYRrN3VdSDws88Am",
  "key25": "2F64Wmzgt5viDRDDLwkgob9TC4SUnmjv6wRQaF49m9a7VHQfCUEmm7FWB8FMfjZMAFSMVENDFrqtAUMM5k4gbxGS",
  "key26": "FjTvGCfsu5g5TyQJ4myGX8JNpgLk6h2MuQNVeSuRwi5w9JYTmCGiejq6w6aKhcg22aEGm1bg7GjnXUHoNqvvFQH"
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
