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
    "45ABt1Ubt8ovFjPktBWwctinh4oawAk2GY2x9ymvErc8GSB6kdtj4wYugRLqvDzWezaNu3ThN8GgLKzpMtrCFENg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3or2RRaCSeM4eFCNt64cRU2snhzgAzbk6JEzWPN99FzTo6e8oXgHcCeaX8cieWaeG5K55gZtcrhGndjy43xA4RLZ",
  "key1": "46rmRuaWhVANcoyFeCgQwD2b2YJCEwEzZ6G5dEDRsk777Je581m4fPjQXsSuvCw7tv9YLA269yXW1w8uoicGJM4k",
  "key2": "41FTGAc3giYwc5fnad5kPTVPifif4X7YLCmHZaVFqWnoW3gc1EGpMbvpzV6S4aiFysZrzUbpFRHZCCmHdPyi8rHu",
  "key3": "4nVqatpmXbhTWJP3XT7htTMAhq1EeCuZXWvF3nXyGBK22gVzAv5MUTiX1mWmAZPxKf1T8WaYpyNyiqPvLp3tEXXX",
  "key4": "MV8EsdKUjszpBvvvLzA7Npsfv7XFXRDQXkoZ1aCXpQnewPQkXGiD6RfuRQbgstA6yrfgFERU7q7MM6RtLfaviTL",
  "key5": "21Nt5Tw56QZK8VrQWZoao8K3uRBDuGhXnQve3pHnrx9f6eNEH61BBpyhzthduidsZp8vp2pVMkRF4ADmNfYygE1x",
  "key6": "25N6JD6JKnVe3a8F7sknJzQyMYSHf5DbhsXie47bgNMYE2wvGMzEruJgKJBNuHBmr9SnY9w8dr9VUtLUjmN3grYE",
  "key7": "4pnp9XEebXhausgtmBJdsDizPDJtxS4aZCuWA7DpWxiVFJPUtMyVsqpVo4CdjxJyPAJSpAbBWDXGuS8eSqeH5j6z",
  "key8": "3viSnC4TYwyTysVEuF6ofNaUpVWvVhUax5NAeKrf8Lg8KR1QY5nsNQ43W1MrVVojZ1mgNKJPM93vMdE4uSFbapH5",
  "key9": "4BsKtB3XDwvS935yXqqQiQff5hhedW2d8gUfwvazrgiUaQ5MLWzF92QKpeNAMkvTWgbVfhpx1VM7hGWv6eruzjMR",
  "key10": "8uytHsPAo27oqSvrA5ytivCu2VC87jaQPisZx7Bw1zvK9TGnVxXjZw22v7tjGN5Qk8KAyKym7i9GgSoY2brTpAe",
  "key11": "2oVrz1FBxoC8yLh7munLYn25S6XFKJHTH5pVg2AUTN7Hbt5A1dBP1NMDz4kVo4bGHxUrgNo6ZS8B4yhoGLvsEqrD",
  "key12": "g3DeyACxueV1LHP4KGnafpcXqkrqCM8NzpM6pXg6sQ9m3sv5Xi8xdbkouoHArvnnivWwpdShK9JY5FQ1NpAFnvY",
  "key13": "EPciS8TELechDq2SzML3MRdGqRg9xjjdQ4fTxdzEhEf73vyV99tjW4f1sCTA1dWyN5kvG1DA2kDrFN2WNM6ebGA",
  "key14": "EV3HkLBto9g4hRK61WtFu3G7WYtgmg2pycj3LEc1H2X7yoi3iAGCTLmnzyZGtucHDriDWFibp5zNCDZujiUSeww",
  "key15": "rHzkpPNNnXKsswW2aitL1VikkVKXcx6Ugu66p3LRBGENXsDcgzNYjJ1kAtoSJh746xvZaUHc8cPhbpjZtZsVRK6",
  "key16": "ypS2B3YAKugko8DBaoWXP4grzLDFSWLkZQENGhS3WbvR8wbVP4pwfn465GQckTYwH54R8nvURtpGbC4WAyi5GH5",
  "key17": "21dXCmiJskN5B9Zswj8YCqfeCwNJRH237gXw7jaQti4mZUuYPQqfBmxYUSk1K4BsFywe2dLaAj5WkRxMr1fPvEdH",
  "key18": "4HPgRmDtQuqJKUa2yT9JvUiidibFnDE45fejXubRYAASrMHZqHnJ3i5wsZrV4E5FFwJn4qU5CjpkaCNsGoWRngVQ",
  "key19": "2Hmem2Jct3irera4GM7f1296T2QMfjheSieuqShF3QTwdn8sBd1juBA2bvQZiDKuZUN6Ea9jSDyUA4MvxMJWSYNP",
  "key20": "59TeMNQEF48SnGwufXuENFGwjJS35Zm2JSmsK5SS8mX1ypwgd2BGAzEFPGa6DRpEBCVLYigZhkqmBKEKEn9vvpGK",
  "key21": "4Xch8HECjrJcwWHXKwrdB1FyBr2K1GL9mvubMJhH3pjWNSYyLTj3PTUQBNEpmQk1cZaV8YJKoJ7oBRNpuz6VKoAU",
  "key22": "4ztJd2ceNstHZTBFJFpyAvF2Km2RdWhasnj4DZYYYiAgUALAQghd8uzMtQJdBajr2nXubrYkP4DzCTm8bQ2ToLqN",
  "key23": "5K8NTuPUgiAEUqMjubERWce7Mb65aFHcrdksoCMQak1Y2i21RJueQwSntx43xxqbUFQFscDFbV8HbatYDuz3aSyn",
  "key24": "34DY7kRsYGZkdS6fFS1qYAQWgfCVRvoC5mkYwpbQuM7zfcmH9VpoM6EYA7qY84A618GQ6MUPbrHS8cAAz9BHuVrc",
  "key25": "4p9BPvGTVWLfHPtk3GUyf8EnSetVMtNDrJgHAmhntt9rDFCggcGSPya8fx8SJzGaH3EHMEAY3vb6YajbCmfd1fkT",
  "key26": "36qynX4rs3FzYGFALLAeZFu23XFqmGDxYCDEKP2tstm7yfxm5sQCB3MZWzJnd2tgdt2A2YVwzr2Pwqfp3FWYjK6Q",
  "key27": "3xKi3hAVEprzwM4r3iTuHfJGy1CVzKu2YCREoJ6zZ1hD5MeFcHf48PE4bT1phFu6gp2VZKCnD9LEJgVijQwsWuje",
  "key28": "4XPXudJpjMhpdiYth2JaWhhK7wrsEtbA4U4HBsxmnzcJ6vuw9LPPbBjxXJnqvzkEqfVpQ1Jefkv5iVJ9nnWCoiot",
  "key29": "4fGAvHdkqC123qsTunTfqBVYP5Go5yvD6pGZiBoLH5HeRefxM9i3AZFFC5qXRrmZbF58oCGTNhkCNn8AXPF5gggo",
  "key30": "5YbMccYv6nS6hk3mt6XGgjJP5iPgimVWtDATdZXZ2BSacr9VB9HWRSCEd4j93W5DJ34vozLnhWfANu8NUFvrmsLe",
  "key31": "2aDTeg9oXk8A8SashdSSUioZa594ZXLzEaLTNVyJH1pVmDTS9zred79KDqkcKfKwW48e1xDtCvq5RiFSnzfFYTxL",
  "key32": "3zbCyTkYnTKofRaWMG2UJ8CrJ8X245vAVEE3r3TLBf4nkTqbe9dxLyLmyPhQCqtEmgR6Hg3q1BcoirJ2o8Da4Vic"
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
