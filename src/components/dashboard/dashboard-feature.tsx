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
    "5vrCsSVDGPmUAv3rHirN3DEqqrBBBSKvkVPMvuHQ7ssSsxEsT5Hbi6wVofjGWYfWwrA2CjhpWoubpLif7zqPsr8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjLJPSLzcsvqs9X2w4RQrMx9u3F4ABdQonHqM6MsiyeGuKyMnbWC3QiwFkVNCoaYff75dzeHvqewL1Cp1eitRNR",
  "key1": "3WZWv79REfQTuUFxsALnqNEQ9yrZNZBSiMjGH2wVmNtKWuzq1Fvb1RwZfCddgYjztig7x7omx9zPidBdEt1Lqyn7",
  "key2": "4Dz8G8Tzj6667P7H11K7uEVqTgnZL5fikiS8arDnFfXqZNtK4zUZXn9LfDGDPvUCXugerukEHo3u8A9UU2CLNYAE",
  "key3": "Eyndsh4cajQFHtXTrQEYSDTwdbsxVRtVKvwPPgAcwmLrFSqZhstAt5ZsiH2RUJv5XzKfZtFUTYHdastHyXAHxDd",
  "key4": "tedv7TcoiYt6S5GtJMzGPtkK7HsMLApqVTnGuwCRaXuXNLLMRPe9tZpVwLnH86XtyaFrFx8qGJcKNzGKGgka4TH",
  "key5": "2opUcCnkguba2kQ6m7oiJ95Q3bnQMRZsZ5VUL8CwoHuqd1wsEumvdygWdgwBq14E7kGXhCXwV2WouiivywjuNGsj",
  "key6": "2DYk9TiTCg2iP2P4DFJTd2Kr3ugVFbiX3WgPpxxG2akJvJGkEJBWvPySdsRAJPRRBdzKDPhKdUuqkZcZYKzrwptG",
  "key7": "2fCfL2BcvYj8gLbEJ4M71QgfWwbV5MD8dvhNK5Bfa9fSwopiXH4EugcPF9kZ2xb15s4X41ufEGB8cJRV4H2DBWMD",
  "key8": "j2CYC86rvDycy5WRzWGV45zNxqZquE5j1yd3xWs3FkV3rBzyJSZg6v7bmB9PpmSNEZFmNVkzr6ojRPpvPMz9Mg4",
  "key9": "234nZJPCEYFcwmgo8XDXTupUCxLWWhaoDnHvsYbJerUdqMQPVcufJ6vHqqD2eJFJFyhicM3YnLZoenSfF7Su7k8v",
  "key10": "2dZMMLuxW7Cm1ASZ23gYwdcCD6qDcKa6HbmNzS7eYk9fc651wymsa6SfPoXEgYXeA7DCsJrdiWwBm4nrUW1yyy47",
  "key11": "ws9UjzueXsHYb3h1a1JRG8CHGhWWmugV5bDDALE9UjJBJUEmKZ5Xw5bhq5yKnT2X6PzCUZKnC78cLsWspVKaUpF",
  "key12": "4TqPzpraPJocDoqHkn3GTBkGs6xPk33z5EngajfCYNkbeyoBdd5Pfc3CE8XuVtyXgnrDEcqxztaucdPSQ9AqeMsr",
  "key13": "hSqQFYjTZKhFKjztVJ9LwkWJfaQRhLgqUyxynCGgp3EBH6367GkoP9BQgQ6VkVS4JjtX1ZDpuKwjDT87GwKCd7i",
  "key14": "27mpxcDZagFE8cN5HLoLL2YaCaYefmoXLHretxA9kxi4Hk1miDsWnJ9uVPZNWmwM1eRQkgCLSv5HSbWnwFoENA4C",
  "key15": "3AddVgRBuiFuYgF14pHaTjmxdkWtouPG6hjpKUj6QcVrLYeY1T9joT3o6wfXFiuFHWEZaFoUcfXj6ibniDiZvcMD",
  "key16": "3WnssXhLTgZQqg5Mi1PzWxgTcZo4psYA6QJobSyyianYh39Ayv33b9AXKsSbQ6aMtSub6iJ7agxDskhuKM4gj14e",
  "key17": "43JeEHtuqg9cH6kUebBTU2zCt6R5c2w9QHcsiCScV7N2mKcPX2YjQkhKf7Du7CgoRMwwh4qcXLTQ8pkB7ndPiQv",
  "key18": "2Dh6GAo9BwvM5MeWMiare1Wq8yAVqGLhqi5J6V2Zmc9Vr2WjuRf5wCTgw9CQPfvCMxU19pPT8aqS4PDJxXwyVbpU",
  "key19": "5ib23BSmk7ZrUbuAsCTn4dP74XXJMrKH8LWQpqgiqCAzmAUQjaCoSrGhupmhT9QnkPczzwG24xHy5CW4BrJgKGEe",
  "key20": "R6rcTqVZJnFTLxyYmZwpsg37UGv3Xe4s8n3TR53XrrmyakiivaSB354YL7PAUq5CqW7R4eAZ6ySzGK4VYpZeC3F",
  "key21": "5amdNbsfVm7KnVsfzFArRZYwF7rgJv8MBoveWApCETH4RKc9YqNLznPmK9JxZo7QArPcxu5JsRjDWRVYsCM6fTJ9",
  "key22": "56hL8ZCCiWSVQHRmU1kDtJvJRjX1xMPGsuhLE2Frj5JiSQ65kZvDeNA7LVeVoWZefKPC4f7bWKoQ3sevBN7XECRR",
  "key23": "52n75tEhLx12UsD3UQdA19pziNFbZEusBnoZe83r3ToHLWR9bAY6pr8R1aPKadZTxRjKfqvP72DXZXadTNUejUBt",
  "key24": "2JLn227q2myYSrcXfeyLYv9nA5Fn8YZ3twTqwpFEkFCdtDxeMTjxvHDTSV18KY2hXjA9ZPHpizVQJ7yQcDYFZKjy",
  "key25": "2Hievd5XPcGpNE8wRksgw3114fVhWt4EVs7RKvYLBmcR5cPzJ1fQjVUU6BFRzibfjmKL1zi6uB6yqTcUJYyGuRX1",
  "key26": "oRBLeTKgfKwqgMrmbMKiDtn7s1V52C7qPB6wSs17JfKAJ7Y5SKP6kGTVsXwth26ASaADKZ2UnxwEQL5m9Tigp3T",
  "key27": "5HTyB2oodPM2LS1jQZo5U3QYtMNeYHW4unPpe4qRKdwvYXSw5VYWj9KdsHBKPnBYV24ijYMxrdYc36YDM5SpDpra",
  "key28": "YpoLLVAX5kmEECjEc3sroTG59TvLmDhYmSLgTYq4ZSp7jMCFNTu8VoRj2xyEgnf7qrhzynP2on2X1yjcarDuKEi",
  "key29": "5wFevNJ12aN4oLstQPdn9V82HiZtfe1GYFacvy64dNqZkrGLFVtQEknPhUYMYXnrJSfDwNsBDGoFsMWbmEwHBAHi",
  "key30": "QgBFLc9C8eYkR7tDgXj5Wf7J8Q7x4tAC1uBKSNy6t24n6Rf1PUSkkEththZ9nU8j73SRKEwuxYadtfna5j3XrPZ",
  "key31": "5aJ7AURetK7Zkd6wZwirKpUt4wnc8tMuPkXLT6ESmnNTeULuJtUjRSRGd6m3NupwG6p1UyFrJJhTF2FcbHynxfZm",
  "key32": "Ut83xU9uFSS2RqbUGr9XMQXuyhXa4UA2WN9AMFVABaMFmHBV6wZ8uCtcY1PFgUaHSiWrgLfMK5xJ3ZNw8eBFyUq",
  "key33": "X8sCAyVsrmqsmkuZBZsAKB7TvsLZeQZWvSgDkC9gV8UXjF9PvaQGvsdkgfABPzwijC3bd8dswpziGrGYoQ1kjDM",
  "key34": "vP8pKfCNfD8EAfzshd2y8gAEZ7wujdHfX4AjmZrst19agsmLLLTR1VZC7xVNG7evYdsAqeCxNHnKDixm92MYPHZ",
  "key35": "9esJQ631vUGBkswkiHFzgQra5KupCtTonfB134zDoVJD3vTUgC3PNmJGbTPDME7d7eRoiDVkhpfEKmwm5R84n76",
  "key36": "3t8BPWdSPxDGMKTLELAXtADJJiUxKiNACJfttvRZSsYBVNYsU98wsiCoazRY38MYazGs6G4Sam4ufrTVKVtXwPiU",
  "key37": "3VPANFPm4FGwhsApKnDfk3q3mszb2F83rFMFLK2YFCoSQXNB5NrF3UtRd8KtRRjKrsk5qGfgonx3GhzoHqrjaxiG"
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
