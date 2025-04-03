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
    "H6EnyKMffkg75NVASMjbx2gtg1hg4GDstTkRASuhjRjmUndSTBJJZs2buB2cxZxxvAycRJSEggFH2DsfpgBHLmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AngPd7GWp1KccztxuFqKXiFKj9vv12xfHhdhK821qwUkHnJ11H1pC1XyrmRUoUFk1YPy1BCtVCxgXrcTvXvu49M",
  "key1": "3wePCue1B4NNV68RYNg2DKw8uWsREQjbLTWzAhegGhymfNeFRfJLwrp62A4WDVYQdmQ2oEEjF6nBH3rBLL8ySx6G",
  "key2": "jpuw4G5t8WMNgoR3xSd2eUwTC9F5pV9dFVJgwdMVchMKjFD1c9yzbkywrZYNya846X2BiSNnZNhWCryWrkPm9zz",
  "key3": "22cERJGrfJZ7xxJWJ76MZ6PsPCg4EtooAeC7hme9vpXuViAUs2UKThDqs2KHoCbFiBh2GVvGv6zpjXbXFbzjfCtV",
  "key4": "5RTZzmGQDkLFk88gDCGgMaUr6Usogq1JgRNQUUeYTUH31cb9Shgt8vPx5FTdQbHgvUKamX5Phet3Y3jtnvEuTVtQ",
  "key5": "3XdkeLFi6dhpTHXSSPf5UoDks9hUxbDMgz76FaHtSHhp1me2pTS9MMxWTbFCoqCHeJ68XMrbXm38XwzRgfEAzC95",
  "key6": "3xEn9WM3Nk1FTqv4X11BgokBVquZqFwGz2N7YcEqZPnAMR9XtbtcPjcuycUxnEhhjBD8HAfbqGety4hoPnwYLFVT",
  "key7": "5d9RQ6rMjvFMf1W4R7BWAadmZbfBpuT1PV1YDv4cqmNKRTJuvuEvymtWF1cLMHeCQzrSW9nCZhoSiQpySBrVv8ua",
  "key8": "3u3UfNqB5vDey9nVZPPTJMV5LzmAGyZFA6eRX1cYvbHxMAvFHw2noxcjjvezQdFk4fwn8EXMnASL8WmfZzzrTrzv",
  "key9": "2cVw3WgzsRvfWq3whyZgx5ceFqXR2dNQTksSS3vf9CKytppxZwU7HF1Vtf3b2jtBwYfqMHWVJxK9K3tfzf8iVxLh",
  "key10": "4fH5d43K59TQ4AgewBWg4HQqL4GLX4apRvokiFsghVvU7C8ES7wPrTn364Ws6PJDJxaDKrz9KMn8n88xdTnWKTwK",
  "key11": "5ftYjc83oq6p4oHdGUJELd7En7ZjGDrUdt8bjGbymzJACoMV7qoy39HifXsPMuuhCBTLufJUNzVC2jyVBeGsV2B1",
  "key12": "5mdxK3X48dJgkTikro5ybZYM9nrW3TrYhHmE89BPxkMgvQ1nuChD3Ch7DQobQ66DoMD6gqeokmgp8ahcYdaHL26d",
  "key13": "4dUxS63E5YsLuCEjE7TcF57qLofBgSaBAPZZetXMqN2ay8ULuPjk5tbUYBdGMGDz1r9s7vxEgpT2fyFbyqYv4dyr",
  "key14": "2ksPnQdPiitq7H2my3wqYRL6HUk9FepHrkUMRwbmPRxQNuCxAdXd9qPwcWqhG4DKufBFn6ERGqsXgC3fUvjLumHC",
  "key15": "4FrgEmXcxC3mYWGRu7xNCNUbdrC4NRWaR76hMcztfRUnZGPoU3bSBHDrVGav7G3cRxGm27AB3pPrLJuiq4KMdLgE",
  "key16": "24HuhmKELSJiqkt5YrMyFWjMNnUU7HmjWN3gew2rZaRTpbSp1obiqb5eSXx3TbGpsWtxABoDk4DUE7vk4LLakpfN",
  "key17": "sYVcwUimPYonqfa6SdSLeyPYG4tmGpWm9GLiBo6nvtRiizfbpfjkNLSBUrbEN8dJ4nKa27rV122eoUD5JJunPNk",
  "key18": "4LrJARre1HPPyJcsCijS7cgrKarmhsH5CyDoh8oS98cPk79qwHXpyxsVwTeGXbhSHcj3ftQDQgTizudD9g4iZuyk",
  "key19": "2uJ9HWbZ1vKdrGgPuhf81WzTCcSqgDtsYdvgGi2DQJbHyxMEuBhtmg4FExaj7Pq3oaK93wDsteBBL7aXYwX2XTGN",
  "key20": "5ojKDeWMrKVkybfFTFzFbxsGLsk69UvH6Fiwu1jxzf6woDDeQUwSuMqJ1x9Ef7yoKi1nfVzgoPkensKHeFnYsjJu",
  "key21": "5qGj2G5ZYfnA952rGzdfuw7L5Y9JzYCpBBqby7Tgmw2cmAmnT65ejsJgG8dJnukfZgyePB1Kgc3TVH8c8rwnQcSM",
  "key22": "4rsyp5VaEESX5A1bkRuZmDk1LxqoRHkkwnVXD5tNJnKtqXG84eKaWqizLVT6ynSk6LKzZ1dhgXtGW33F8FU6j9G4",
  "key23": "4Xoh3to6ipwZZoM7NLbFY3ryQUfCLSM1p6n3ext1qjhvdsKFJN4CCKqvsuccmkbauH5sA3qxqC3kkPq2S6E98wCP",
  "key24": "5tnFLJCoveuAnoLZnWRzzbY3tXYNywqrjf3ysMtMcpX3M8Lmmm4b6q1cKWBJkWeu8zqAgRHN5djgDa3Ue9gH7hjh",
  "key25": "23y846eyekk4ETNQCf89PPRKE8xvxN8pNEGj9vDoCW4LgRo8TBeSvqCMwWbaz4ayFqjMsQoRC8ZVqnGmocTwzLxh",
  "key26": "3NwEt6QmVzkXUSfD9SaxmaFwS2A468Bt9SeyQy6AgG3wce6Yw5PaHc54GRtUJa3bZ3E1g9SBaXvvprma3Tzrj7q8",
  "key27": "4191ZYqQwV6BDBqJgL6MFBmxSfDVYw8QMFEgTApFSRLJ28M7UUpdtTHVDMVB9UKo6knr98mLToqf11vMobXZRgSt",
  "key28": "5V35jmXHLNVAxkBXiXnc9M8mSrf4d1zUMCzWDdEDRBz56oomdPnZ48wo9bv1vGvje6GshjKf5bfEHCxGRKD5rvaH",
  "key29": "2UJqbQ9BoofVtYK6W8FpmLYNuRvsqDHnxQ63sLpSxbFq9DsJpgWe1o3jJrp5YvPy3fq4jrTYiY3kPcbaXqQ9Frm1",
  "key30": "3eUvpzHiQZ8wKwaSZw6o2pX7rEdF4SdzvXx36Cyx4rTWaSp3yDu8QkP32FnVBsV5kz4DPE1fyGnrXmw4WHtv5ceD",
  "key31": "4VRY6axZASuR5vSrb1SxPxpbsVmZt3NeaqxvUPBE59DS9Yo8wDMSGt7hBJSHy2XhuYg4MZXsqGRfTibLkP1LoxAF",
  "key32": "4ix63SZRs93ADQaEmyxp8Khjg4ttxvZChGcREFX5qv4oHhZ4EaBQdkFd8Uh1HoewzzV6SVWrXnW5FBKVtX8fBixk",
  "key33": "5WT2HVzm7ptBx4d7H4idExHRDRXeE1uQi8pXUX24b4WkbowFRkcFTeqfXvDSDMaVek62Ak7vVNk3KBRnfKgNMRWx",
  "key34": "38k7NrkDbJLp38xtJNQGW8RVshgTavECPpw5mfWUtidLcyBkqGa3JH5jtQeZS7kRYydqLmDtwbu5r5aY3c6wqQzv"
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
