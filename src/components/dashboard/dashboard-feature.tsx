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
    "3x3ajdTFTKbUyFoxF5nmkiNdKdounm4uekmUAxRQDHysrum6XH2cLnhFMmvdLEgAPRfttoghdgQ8yn9HQLfiawwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g6UQaLA41XkpgGNM8KR8jd49cFKHtKhViufSWYqNbpM1qT3z2ETtk5p3ufbFCCc3aucR9cPi7m4crqitvfMdQHA",
  "key1": "3ajFEwCbBVb4zTX8PjDNnsoJAg33QhnANKGoAAKdqXbKXsUBtfvnxzDZNuRWKJpfaLb4Q7DFqvNS1TZpHncQQBvD",
  "key2": "65LfSVVj7BZQLtAhxtiqm4YaHUUAjbbVQXNJE3qQmMcvMrHDt18L5cthEDY63DEkfhikwBq5REAxteqtsoQ51uUc",
  "key3": "4TDro5TX6k6s1p9HRm2jjRPp8XdU49eye5q3Ky2eaCT9u1nEaUehjWBYwpaqZMfBs1VNjeY3ZK7Kv6dPQeJLDDUq",
  "key4": "GvSGWC7qPhSrWQEYZ7i7bbgGiVywESVENn9gMqyx7c6ba74ekBdF2jnaiuDTVnGvq8Nk6L66cgSMbnrCwCg5XVM",
  "key5": "3rWN8u4Eqf4rYJhcS8noYatzxwefwQoPw7zBnyRad5R8msrYdQtvcpoPzGUsGxtVyrcCXXGL5hBG61CP5PnjEi8x",
  "key6": "5t6hHVdDxLiaGkwmLRAiqMGFGCrFjewJPKvK9CS1jYqAnYa7mwij1HoLwXjEfJoZcCXW4yscxinht3uRbpzyxSKm",
  "key7": "3iksVH9ZFoPWhCtxZCpgKgy6roroiYz9PEykgBjfAmqyn9quq9JUjc8TpQ4d9cpPsX3GybgfMGGBops67QoR9VTs",
  "key8": "5rnnpAnJWSieHMytzBJwetSSnHNmJZtkaMXLfGGMfsiZRf24WRjLCfpMaiXKMuG5ficrT1ZeMkDh2wf8Dyy6CAxU",
  "key9": "3WnGd6X3m2MGMhhm3wNsyBS84ACaTvszjfbC28Bi3o8bqauKNyWLzTwZ1TwC1xqD9Z39AXiBje5axtneBsRs8ecL",
  "key10": "44f4GD9VUN6YUr1yZdQty2mK81NyPi6pqMxGRdXDTTmZcS3TekJJoXAXCKDqFw4ZjrT573hYHNdBBnvRCFqVnocH",
  "key11": "4T3FsuaASgtMXh33Q1HNjua9ozgcEQVWD5YjnaNfT2hW3mCFDAZLKwM93GF3SRKe8xHSJjmy9x9JCuBWJf3aavxN",
  "key12": "2k16TTPRpnAnJmEeXPocayeytFBkKZ9KXjcwv8xzq7PcnWymk4zhD7fxFBr4ZdnPWMoDvwgcpNRT9Nc2W2LGpFYK",
  "key13": "KajPsojb7pWwnedWPWp1NkstEzqCh4CTvcD8U6mNHNSqtp7PuwLuMPJF78qPJ3YNn8Ps8TyrGDZcL14i6DBSvnf",
  "key14": "CP9nbihW2PLkdLKFFcjSs6aArThpM54nL2DBPU97gSe6huxaNnEKZvVek2eqMX1tAZ3pt3s7ynqBydaxgzyXeNY",
  "key15": "22Z4pffcivKkHFzgGWjpQfz5QrmErVyhkNTdGWSTnhAZ33sgRqRqeWWA8zSC1SUpDe5st3PKpiBvN2VCiHse6Cth",
  "key16": "2fgYBTFJxNvJkgMgZUSgsoVmT5Dg5huKJqNaqKEoKQyi7wqthv6SyuDfnKwKvN1P1PCDy1xynYFBcJjTbRUqcgzB",
  "key17": "5XiyjWhAS8cePtXiHUoXQyeQQ9UWXGsPTvfivKvR7Bks1VMhyBJ3hyzaJR4FfuEua2QBsNTdZZhTJgQZnBHTWAng",
  "key18": "Wr6fdNkGVXrJVmRcmGWhmCWTPQ7pChaBfb8c8tZG5YFKHRLdcqiVPC84ExrdPTRDRHMQZHnDJZTmUCNXPRefVor",
  "key19": "4ZzgDAsove7DiyLZwhcBNzmQ9nLw2ZeCYPYomY7PTuCwLVDrUwQm26ynq4cC6vSKoMFuk2SGmTFCNcsPCLe2gWor",
  "key20": "5G4X5vdNcqGt364rJCEs1GxXtmrKiDBENeWVQLNBRqinKkbt47hYxTz8paMK8jTmi3gSLX7NTcbK7kpwzja471XR",
  "key21": "2oYuYBu5w3LSUu8xZhXzQuNEDeUduxXbJ7TsqSCvDJReGUNYaMf944RfcA7DcBHmj7E6LiJxFm43pLBDotWaxdVZ",
  "key22": "ovCC565TsykPFXSnN3wN5B1mnjaLgKCRwJUgmd6d57YeKvjJgNPTNLs7x4VLs59vSug5HmYtSfe1nTqoVsSD9Uk",
  "key23": "DRCrRbH8zpmhJnNXKMzEvvb5DUy8oL41vtGwZGY1gGvhxBgEPa1Su46qdhRSb6WXNWK71kpxJ9D3u6oWmMzypKZ",
  "key24": "5me7Yr4wVmNp42TNbVVkgxNkbHLGSbBwagJ5419W8eGKY5k1K4EQVRVEd6dPqcA6rSLJv3GsKSoU2sfuUTcgmaVk",
  "key25": "2qR378wzTv8LH2yDEhBhYzxFUW4PwnFyNavdRQFzbLmzuZhuY5QtQeE4p5uZpA56CaHscHS4gCU3JU7A74iFB1Nx",
  "key26": "2sHUtg1j8h2JfhS2NWGZs1ve5FQsYxri8LThZSJPHgkrvyk1LYm2TPbw5yqNhG3rbPqztDBhUbDoLiBezYsKZbQf",
  "key27": "2KhgM242AaB9i4DfW1keea4vggYYcDotRLu2P4jDY1qbJz9cvjZnU9Hutm59tFFKXq4aSHzEdcAy2zPc9waZxPz",
  "key28": "4puRad9RTs18mU5aaLBL969LFiecCt1sb7fNNHAmbRaqiDfG2PtGqr8u8yejmnRCkFnUy4fA9EtKmGHyqPQ7ViS7",
  "key29": "47UXB6TSs3xQ1jq2fK7aoXDTEnnXJ2Rg2V9rdx2kRJxJbML8R77r8ZvF24sTV6Pa1EWGfFSP9kSzBBxscQCH2e7K",
  "key30": "EAf7FmkfdD3vbgiEqKpNSo4thiaWU5jdgS7gFNXMrtvKJn3J5piQLy3YZEMERjQCusYZ1zVQW4kQCmodHzfUHF4",
  "key31": "4uPwYDBQBVgC41dXSBWdkjUbBr1AMvYrJXhG4cFKPyHnE3uKdHsTRo9h59FPiszdqQvCsLA34cudAgYhiCzj6XDS",
  "key32": "4rT5EfzcCEbxfzwXsFpK78TUcgvzKDsvMQoagDefFp1qjqS3TrCbLHi3VoCtoYLXvwkcgcNCJZSzpCNNYMiXmuQw",
  "key33": "4Z3pJQTKFjWSqyrM3quQaeAuaoYVKLDer2vNzZRE69wm8UQmZnomJNFmr6DHuoU9No2oEk5hjaAEuq8egT5P3bAr",
  "key34": "37ZsDe17qH3th4gWnAqiFUp4JxUEs9CYPWDhYhphNWB5ptwkDsCTHVDg2V4eeN3j7ukKZNCnENrNaPMp7G2Dc4C4",
  "key35": "QKTPnA83ysThrZRLTjBnYUbnHot5eiVMn5wKd6DXPpcsgDJBp7WLh7eFzmZ6QZP4KHbyE6Emoq6TqdCop1piUaj",
  "key36": "25Z9aPwqqjrbrTyVE2B4VyBjoBdEd9rhGY2LG7UzUn4HRHPCJStiG5PT3tsxYK5W3KDPQ7KcdmpULZQqJijj6e7w",
  "key37": "2QqPt3fUKL4mXo2z5Nwc8ebUcAEDCocXXgHVxjB6EroYy6hYPz9yTV9kfV2Gw1gcJYYe9NkQTQtkP2bENzSrjGyj",
  "key38": "2QUKnbjqNsNvoyvAb5mM7fbKEGh79rqkMvTKptTrT4ePikhCr6rFdz8L5gPXLqpyJrmeQ6idPXt75qLomjzHBW2S",
  "key39": "2B9a3o9HyvCotKwRBeANv157SA5Dn89PeKc98YZrxRucDHe3bt5ZqEnLfnX9zJGaRFcknGWmjeikp5FvxnrVGBHi",
  "key40": "k9ZZgD3dEPd4CbTdvcTp4uhfH4jdXjN1a11hxRkFs1pfFhaZ3NNGg8PmAbCBQANsszBPFqFCaDWyBDKQEaenCTu",
  "key41": "47e5SyFowdj2sFeFzjaLwbPyLmQ5XNM5gcsL27eiW8E8fCFXiGx2aUwET3ypeBW92n4F4DGhBx8djGAewn2CQcHw",
  "key42": "3wKhstNj5tTX2LwNQLpQw2E5YqmkoiHUXEA4gCokbA5Ckaj654FQbt4dkwE4eBKWt5ivtc31ZTtHVJ27X7DETxzC",
  "key43": "dHHsifLcbvDXE34gDrsFhbCiPjiHezH6v36jk8Dc2n7aQgL7XADfhmxeo7ZjLZyyjaNeARGCB3cMJ9bCENvQ6mB"
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
