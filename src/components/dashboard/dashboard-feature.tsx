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
    "J5BQx8wAQE7Qq924TZZ5NpqHgiPHWecjoQ5Yj45mGyh3Dc45dGqV1LQriyGUqqgvufBwR96bYzsfUdtbrMxJJTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jquzMPCQX1xwniyGwttUUJEBxa2ay9eSayqsSPsPaDXURghCRhshhquPd6jPXWLf1nRywxsZ7PyF9RDPsYBnk5N",
  "key1": "29E5StbTZdav7KFG7bYMsQJMTpxwbFgP2P1oPcC2WFKeEBo4FxZ8A7pENBpcHGMe33HsryKmsxGhD15GYphbQugr",
  "key2": "4eV8eTA127zJzR8Hz3nCynM3V44H5tbAPh2UHrUyWBWsaTCMDHSq1iMcEMSgiyAy6bmzBeNqRv1fnf6douHw93Re",
  "key3": "t5Ukk8Cpsg3JXVyrxPBCBqYghJzJBVanAEieHMnhwLtLn2xcvtUpdh49qn1igttKh7REoxTsCiU3VTfyRAtnpX5",
  "key4": "4Y3VfiFpME3i7jnTNNiMbvTYrmZpB95FgahvQzVtGiPySQYS9szSdYGdchgtcqKghYb4o1zqwDetRPs1Fa82sFYF",
  "key5": "5umnQbzViWcnmnzstno6nt4UocwBkxHe1PmeW8QfGEdLrnp6YzFmwZwt3s3JFgjfg4dzAAjSaNdj9FoFHtGwNf6o",
  "key6": "4UMvny2Krjpqm2T1NX68YSPNtjsAzExDwXzZyWeBaSee2wvztTwKHH8N5BBa7k1HUcCmnmBjmecXfW76YRCCSujD",
  "key7": "5CMda2r3qy5UcVf8yxWjaiKiCKYhNtVTqYSKvfapnqk7uo1EQDfVh5GzVcNfsmzp1dW3SainTKDUhbus27ihL3hj",
  "key8": "3WjcgjKuXq9oJNDGo6UBZiEZwaQBZrzpmQikj6TV9UmVo1562ju6SQcpbs5Q9vGpgG5Y6f8zYz5oex2e4Aq34iRK",
  "key9": "36YvEcmrJqsYJoFTADkFT8ncWkFDFHTFnJfnswYQnMB3sEixne3JMWnQxfdD1WJKXLKGCv2KnLrYjmoV9FFyadvq",
  "key10": "5dfLXn1326XaZCmq7eLdFMDf37rbcgq3hYWK526gVnoF4epsXjM9gZhdP8taHHRjezr3vz2vrSCUU8cxxVD7X1uF",
  "key11": "3CqUoHTsbxaTUVpgeavpAcMV44Zf4msDbC46qLkuf7keu9qR4xoKRa5F5DskbXGfBu2gBxtJtHiATTi1PX5JYJ2Z",
  "key12": "4QQ61gSVUi1Z9AiH5FEkFSegFfCgMv5qGVXtw1oi5nTzAYuSW9oFbwBFc4i81fs645ec5ZX7mHZTarv7eBoci4VP",
  "key13": "2YFnEoLYL5KKdktNXQWEsCw9wCkBNEzMs6dgfdbwrBavgMHWUzV7EeWr1791GX2NKq25rFgiXTEg4oEV12hSpwqg",
  "key14": "357FpVFYjoijjQggpVLofH8h7MhRtWmU7Fqoi9qq1ZH63ya3SMjBdcojCxgggHe513ZkZChwHmhEpbR8J3JMKS9A",
  "key15": "5uQAp9Xott1TgiZBoGTMpijjbymeQXGD9Haj6uvjUoao8sSM9yQ2dNNFjZKaXp9ksUjuBopE51sN1VUrTqgr1Zj4",
  "key16": "3NTcChNYTn8LxcFciS27f9EQSmoP5jhN6fSoRGrjFvS4rVCkPHSC2pRmRB3AXy2wFFkLnoyi1EmEo2Sz2erBrijp",
  "key17": "3SbTPLh6xf62GLMYYhcYG5shiY7yUSs2wGLY5NN5uGtKvT4LJXRqUZ1q4vbMkHTLeNUhVCgfdMLgQcVkRpE6G5Rj",
  "key18": "2HEjf4TJTGDNt1zckA3jdkHtkWty9Za6WfnBXHVqxRxaVRsZdoSysMjW4pmNcnfJZRYsuNpkpZSUnZ4ntC1Pstzb",
  "key19": "3h8ozvwa7nByfD8x8tF6gqT9RN91MLFodZMeqcsWWzbwRrzhjZPiqddLXrbeSmgLUZkks75pHaAmvoatRXctRp7w",
  "key20": "3nCXBNrNPVrFWLZ58wu9jYRafBvqUTgrmw8hann945WmJ1iFwpwRbk8nq3ZsPhRBVekZv5Tjgeh6EVDSEgutxXSF",
  "key21": "5Y81QYSwt7ejybTBqSkcpTdEo2RkXf3k1yE67UNi6MTdK6RdDMUxJrkEQYsiTBPzdAVhYnJ9Y6DGm3WdH1JLuFH4",
  "key22": "4oxLzVemYVyDV23BGanYB1r4bC1QSJNj6gDiFqBpacCBMdyRdoFimzsFd4E6W4rSfJdXHTX7hwEb3T7KkW2feh7u",
  "key23": "3Xyz8vtA3D7ZsE2uP4APrqGwt8HZbASMMnUA2qaZiai6ETfKcPwovCjcgYQsMZTPZHpCPj9u1DeKJpRwaVVNrEXZ",
  "key24": "61u5eduP2pkPoDwE2EHCkWtuS7bHafkEbEVe7RisiqNYu8scxk5NbfohDx29P8ehY5JHDxTyFyvYKEAQqU33wpGY",
  "key25": "4L5Fv4u1fPALjpzPxPusUHqUzz1zqvWpaabmhBxz9PDMP2DKse18xLoZuYHDha7ipKQoPqinaBoYuAiuDjpYKKX7",
  "key26": "3fKWEwHTbyLW6ekvm1d7RySFR5zDSwMGwvCyJuD5533g99BfwoXL7U9u7keFRSLZLMztKGBJQVnxRHuUXLm7GHU3",
  "key27": "3aRDR8D8kfp74LiwtjdWsybaeYWyU8299Hx9TRianVoG7ds6Hu8rGK3BcHVY6pAWM83Khr7SSEPmhmjm3WXeTd4t",
  "key28": "4oQfN7XwkLbt6xy5WhjP88wyXRMEobtKdv3gnA1AH8uaxY1g6rpJGf4TU16pQammDF5FMtscoZ9fuQBUmhuBakZ8"
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
