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
    "22dyNr9f2TsxiMQUTKD4B6APrvFxkA7wEsyLiecgtnDhhEX3nNQn8JAdBNFBwahqbtvdCxBYAwxFtmpLdbte8sCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8sUj2FzvdNE29nb61tponGLsKkBxrdGzdLwNgFzziEMGpQpMJ7t3nizHpoa1h6yJNBH1Rfb8F7bNhAPjNisLQ9",
  "key1": "4JQusi3afkXTpfMsMKyKhoV4MqcSDvbK9r75yJDZXxDXJa8G5TAqP5UK9fGykhChP3MB1hsw886yPVMVpah1mSNx",
  "key2": "3PUpnCavMeV9MsEK248AU9TRSgGNySsRjMK9AVmmFKyxU4LxyTYYjVD9wUUtt1ZDRjp69P7DGJnpu4odmY91dPvE",
  "key3": "3B2eSRB22nyg4Y8fDtLTEfvxGBC19jW399mfyuzhTkrh3jtcrxyufG5sCg2bvw1HapV3PUq2VnHRGhfJkJyajGao",
  "key4": "4YnFBGw15Am5JurZ3ZsnFhKU1ttZVzjEgkHbTj8SwALbSEPPnpRnAReWKddbLaNBumdMbmFnbNRhiC2Dm9KF65Kn",
  "key5": "4427PJuPdQpgau7baj3rY4WusJURkUZqM9e4hKuwcUfCVKLD2gQChmwM6oAG4qJccMcfS1FJPsz6yiSdNBkkpub1",
  "key6": "zqSqvLBsfrawNL8MgVEovt9Dkwm5qS98erqcFZqimxwkP1mwwwK3BvcpFwW8SmwP7dyWnRkV4F6z3zotcCZpYJK",
  "key7": "47ovkxh8GbWttKXw1yDyEJm4nYnf68by8J8jLhCqeQezh9oDEik2yP7JadynJVtPpd98w4otsyKDKGTSWCSSKKhz",
  "key8": "3ZBmHecWdQcjPxXQqv3wRHNf7a2x51dE4avVEH2CqmvTZHUmJgxZW2WHhxw7GJ925hetEmHf6Gbp9d2jMtHVRTzW",
  "key9": "jZ6VKgyk1aTbgM5f84kBL8TrJbwTjzxLafqxaN3TaDhccvJEZebiefeQo6gTsjA9XBVz9d8bU86w5tt19MtZLoz",
  "key10": "NWteyuUjSntCRUvxABkJtQubEEuEskZBt1TALp9qVZBhJVMjk5PCQq7LUoA597pncf3YoJcV8FHVQB2BkNnA8J7",
  "key11": "1axKCmkfRuDarUgFJMzdfJEzKvC9iVTGx1Vm8RLS7ajoBwn8jVcrbDYsPUG1r3Pr47jR5oth5BybbSU6xCA3Gcs",
  "key12": "XvitSB5KSoiMokHxfsth4BiKGMnEKg2JP3xCsYT74yvuLwabSqjoRCQgF5xjFpNt2Xkm1oh62KqD4V9C4mAVay7",
  "key13": "4g2ArWXL8TFbWPzMuafgQcrUrGx5BuFHVvhWU7JNZS5q1JpU2tL4MAoXFES6oC6vZwnRHKetPBr2At9H9isEWGEt",
  "key14": "4SzQgMbeQNXC2Wtru6dZWKaxwK7sHj48mzeqoEJwDRmxWAQTcspmM3bwAYgUxVH6fToDqbCtqrBGqetkKm2Q1ntM",
  "key15": "45Ev6az7dwog7ZqizMzrb6DJ63asA87PiA5FyrsnejYGSSp6p9NB8s3J2xNcVT4su8jcXnBhanwrkk4jaGE6Qhfm",
  "key16": "5FK92aERv1v73qpkHjbUHHhzNuKedKRJ2tywPbMhi18Pr9bF9y9AzdckfpK7gNDCtJdnPVdVaMqsKY2poAECcHCj",
  "key17": "4i9tDrA43GuFME4QLBc3narAoyp4ZwuMEqeZ7eUgkDRFA56e5i1kQN5Fd2gRsXCwuSjcDq3Em32ege9C6CsqWLzY",
  "key18": "4gRaZ7A93je7eRtAUQj8GA7LRL3abQVWy5LoLqsfehsgJXLRXQUaf4pFTTVoE8PmidzKuWds1MmtRCbwGH95hqML",
  "key19": "3fX62rPZ1RoBRmR88q9YYGkLWhF5jpvG8vQuDK5wnfzoKrQJ4zZoaGfKpWbRwA2SPVKaPiARPEWW9Xa9Yf81rHZj",
  "key20": "oAbcTbdF72LXv2jQiTy2MjSu14exASHuJv9AqF3TjyhfMDkoqGfeuhoy2Whvz4dKZ6fbDiExVMLnKnn7H2xdXUV",
  "key21": "4h4La2raN2mrN5z3h1dT1bikgbqCBDJznhVfsAap1bQcMHU88VYbshTb6XRz7EhHz4ZzeAsMdbr7Gsf3AeKQi68b",
  "key22": "5Nye547Kq1xVWEa1FRtQA5fHxwtFC2577aAQ3SCBT3s2yNFfCgvpF3syA2UjYut5NmZaXRjtFxhYL9X56WwhN2hL",
  "key23": "bTsJVN7CsZCGQjTgDDpWPXW3eiRaFEqB2h2XHmPRGQ3PqwgkoS8xbytkBrgsGQe6B9DKthczFisAMRZuf1mEtkb",
  "key24": "4c8mEzv9ivcnGFqGgcqdtmwgKYYQ5fUwVB3uiankMNGtL8QjrhVB5EauHGvrfGqPnw3AqNtjioPna2Ac86z1YXRm",
  "key25": "2uGMKWufZD3S3wj6Gwxj8oA5FRwTxbgT9XXaJzVmZWsyAdpSL2gLGv1RXPBfXkb19oZqo21kL6Usfbx3kB84ZXv5",
  "key26": "59xxH58Rq1wFPZSSDMdmsiadNcfxjxsJW4Rnv6NnjeC5JrKxhWzD5EtNgi2BD5aNqwj8Ap81Pst6JeEEvkGSLGr3",
  "key27": "2gus5FwAztgktQKesRMu3BZxHg8kTMfBLdgg7NxhTzd8dUCwnXpnxmF1p8Pc9xF8ZsKjipaL2m9UzfW3ZWw1ftqW",
  "key28": "41qiVzuUWGWkpx42Rji3wrNfoG9T9HUTT3sEcG5NiYxnApvQ9BHiAw57zFqZSGyMsiNDjgGn8J5cW9XaiXgHv3yZ",
  "key29": "2ZN2Gs69fJLK8Yr7aBFchrz9DPqDCBQMpbprLFMoofdsuyGAsic77XvHh5tvMERL43qJ3g6mn7gpLaPbPji6W2Ti",
  "key30": "47idbgTNUDMdvgWS5sM3QhpmZpsJrVLSa8jSP8ge2dzQZHbHCnD9JBHcR5paHxG3K3r5myvYHV9sqAM74w5ok2RV",
  "key31": "4DJp2AzruQNGPxpqc5r4DVU6cWxqRd6SWy2Sg74utX61WSgXJJnU6JT6ZKy77P1QKoHdJY4Le2Wk3AtNR94wueNu",
  "key32": "5N8V4SkhvTLx8HSqzhcWfS3nzRc7pzGo3eRjXLJQPAG2HsAQB1QfRc22fDQXS4ZJPpX7u1oXdcjgAT4ALVfnM4fz",
  "key33": "4MPYMU4236PKzzSkNJom1GuY7g9aS8JGRbAVetmVb7ZYCu3tMSvr9ri3PSpzYgaa1PFMgQaqkCGrRGpLDXrjb4cQ",
  "key34": "3PDvCuDwisA3Qb3zgQ2XJyBFt8EK4h3VijqXt435bh79FRwtqCWXnNbj9B34hU8GishqfiUMCsuiFvzosQxRT1vp",
  "key35": "2R4Mh9KCk81XBLpzi8f5kM96T31Af2aHN8QW1H4Mvd1FhHQukoYj1nGZribehxn6wnMYbYTcjrTJ62gMBNTELWGd",
  "key36": "3P3bswKFaBLSG4iCAQui4vXkQyde4vyw53kb77xxU21f8D3TmPTT4ajdLMahfNRbsKqjXdLnWcm7MRL9LPDf8pdp",
  "key37": "3uxEpgczbqQVg6xi2e4C96hm9dMY3j23LCK8JYPRysVCADxRcqZ1VEjP9faX4HQ1ZfvcTQBUj72kWpFFLrng2NHc",
  "key38": "fdPk8Z7frmVfmWMqFMYQ61n8rCTPRYg5nk463qV3pfNapyKZHcRzr6mwAxUH74CHWNw1Qtj8WmacULnmMrpLjN6",
  "key39": "3T8cX2YTaef9MNoas9GCBVh3MeAsNC8tsdPmES76iyQsUSc9W86FGzVF863NambQgqiL4VCWyYSYVQVsYsmuTbXd"
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
