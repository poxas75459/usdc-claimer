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
    "2QSBNjveBy6MYraVRWrZHYxLNna7upr9kyqH3M2ZgG8N8TrXYExZ7oGyvgGm54GrjaaBvLjdkoq7QdT8fcHAPQtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8WveYXBsSzz1BVY6uNV9fTi4SCyfnujxZ7hX6i1PnA77CNtcEKSngapnn3awPyjMCJAYdoR9pGfvZi79pmGakg",
  "key1": "4CxMVVqGu6ZNKfDHDkN9Yqu8kQT2kEeMaQgLt3ZYidXmxxQX5ALRkZLn2kQZhmC2v9wHbZ83RYDNZsBJ156jTBHh",
  "key2": "4SpjECKmF3VcTsk1e5PDDv8tfZgDU7xrX5MYDpDSJus1FdQ8Ukm98dTLfwDZVPXA8N9YRPWP3bF5UKatCnwdpmHM",
  "key3": "4oFNBQj2XrcN8DK1LFYqbsT7HJmwfpzrEngtNqRxgJTtNo8iYeNfbhX2dT55X4w4rAu5FG4MzhH5XCo22NFfBp8F",
  "key4": "4PYQVdK9pt88uoq9MsuumbHkjRgkYFaNQxvLzzRWmtjGJp6H12z76y8aPbKKMQ8qasR4gzBd8LWw1uNRrbRGw4gg",
  "key5": "h61Wc1P9W4QzpC43BG7d5MS5enWgPpj22Y8Dczx1QDKz6aN1kKgvqoecjjhEPRpHLP9jY8tNSCcjeuehXLKM6WR",
  "key6": "478XAfSsX1UnvwRsEhHNPhSfvNNCEEzUfCeiXuYc1UGSia6oTS1mNfWmFFdtp7bfrHHS8eaN5A17V25vaanjz4UD",
  "key7": "5EGXgyW1fKeBx5yDpLS8vi2n2ecmdrHh2pyngvT4oW4FCBEbxYa7rwPFAD59HxwMc1rKKvRhMz2edWqMS2wTdR4X",
  "key8": "5WhLCmcJ6NmvBGtGKr9nNU6XFtmV1Qn6u2tinfufeYz5J5YzG8xKSXMfh2GKK7MKn593mxgypG5wVm73MCsXUkrz",
  "key9": "25omUS4xPaSCLH6kzT3FYZGyvMpxY3QXpTm5Jgh23jC3i5sVZY4RHdNWBuwLPJHJ8zGmZRxrafkAA6EbZx9uUW7h",
  "key10": "Tm7rcuenurFTWe6dS2y69TyAsa4fmw4uDNGf9ewqg9NisBoyxHhgjH4NApT9j5rYaTgXeBZGiQ41MswTjmJNaKy",
  "key11": "31ECWwc9unLmkrFVRfiqf4UrXF3VWJiDTSvuiYLEPf1jnCxzARa8qXZmzTJM4gPDArCCiV4efU81xGPmfTeDJw8N",
  "key12": "5KfTZEH6LGtnp82sZzBgUxxT6y876gcit8EdP8uUYTKM6obYCgYr7hX68qRzJv4XHXZwDBK22pLemcVx4MNv2mMy",
  "key13": "268TZcRFfATMyGpzriQrKKj8yApUY3SFdHiq1g3VBHjmkoTTiP3cgjSdtyacdcdT4VZpgJSXHAotcVkq3HytWfAv",
  "key14": "3vAkrv6rMuaMfAXfLSg35kYDHVoCvsHJuGZjaWyx3uUeGpALdJKXUU9rRJyCkARvGfvJkH7qHhsxUge3v5rTTwJo",
  "key15": "2waPP7UmtNJhr8R1JJwiZyCfDvs6os41W1MyxZQVP8JXQLrb3bjf23ey6FdPY8RNoATr2C4SDDEwWJwiWZXYXp4",
  "key16": "YEsNmRS426drEB2zG13D1Hj4PLhfByqFTsug4xDf7wvvvUALyEBSFw6fHJXAEurA1gKsLJ1J8GmFtTYNvWJg9Ax",
  "key17": "BTGZeRZ35fMueMYRc6PYYmJ5nxnnqqndFDiEmKVH52Pwi8cmGD4TzzmtteMXMQ2hhV8mmsb4VLgWEQn3NbkYent",
  "key18": "5P1oDpGinSdKNRVH5ayTb6EzkdJRJpjMYFacV8vfzeEtJkALjiNJDEBfqTMKxPusQZYMs6Wctnuy9iE52whFYpw4",
  "key19": "5SFWi4PTootRGHDRMztzH1cNNWRnJakjNKiMxNbUoBy6xFJNivcskUWT8VY1Wau6PavCEdcypaRqHukjJcDQrLjw",
  "key20": "bEAGoMuYGYopf2wMAfLCmVnbJFzHdhL5ZvxPejHSvbLGPkU6VfV8pZ5UWNk7HFqaxX3L3Z85cZG1d84Xcdkkfba",
  "key21": "3RqNjdUhqZMPXsGHAy2WqTsURuBr4JtHBesaZq6hhMYGQbXS4GoMvt2ct9pxgvzFq6iw5ADVxDkDbtz7YsXJ6qV2",
  "key22": "4xEoNH2CfYc4uT5bA58X68HXUFMoCqMwgowvvewX6vy6pzQBFFyPR2EeFbrXRAkqmCwfDZrWQVb2XoK27UPoHHQo",
  "key23": "5GQJHB8uZyjBecA7SSoRcHMRy6XfwW3Xb4YaphKb51btQ7xfCCUmu2Yvu6DnwQKsSKTo6wzvM2zkfPqB29ofYSYP",
  "key24": "61shsXzBtuPKRKBFXXa34xqW2wdufMB4oAHESEdVX2Xr2iCRA8AcR2PT1Hy9Fb45a96KAtwheVFMyPd8aHwaUcdA",
  "key25": "2eS4up6kVCPpwd9r6nEkKLsoFWhFFVMYhgcPitZg6MhGMbPb4sZus6N1cX2Wdg9U12tU9AJ6jb1gQLdWyMsdVD1T",
  "key26": "2VnFxw2KT3fiqitJmbEoPjmwHi7NTYXFLjnveECXDFQn4E3rorzfAbofmNCDhsTCcuoac4N8A15w47HuzYrssJV3",
  "key27": "4GqudAv3rwUuotazgUfV5DkCLR7CFQPt9nznPRy6HKWn9W1ZxqvTEUMZQWpEKTHopW1VdimShf3SV8BcEZwWAoLU",
  "key28": "3xKszRVTsufYhqEQQcQ2XEsctHcymtuvvMKbxLgHuhWcq74FJCoTFA4Y31xa69wKaXDdYBFKVr9UZeQe7ZEUGasK",
  "key29": "NjbfXJ4SBGsQg74M3c3VhKN1qLj52AcpU1N2G5C4a2MvQ8LPR17dtathbaff8uLhV9bCggSX5yEa8WRojzdbteU",
  "key30": "542Ms5d2AfNQ2GPq5vKjSMVj8SwH7VHbrffu4RhnH4DsvJZoXygLs1A5RBesJfjyv8Rk5Jt4BjaD5wQHHmKgqPea",
  "key31": "5snv8AmQdYejCijBAbAkLPPJf3e11WV1djtnTHj7mgPxvAkY6eeNNa1ARn9EJmt4N3pX75h7VJEyWtpogYCxQM91",
  "key32": "4TMGFMAY8ihjvuw4MsfKQqexLuKTHpRzxogsvemJrsafVv4LVYZTmAZMZB6Xb71tfC15SFBhMHEp5QmEcBQ38NtX",
  "key33": "MeP8ewj3sZyzRK8h4Y9FpnUvHQYQtbXQRtxxyJCebHZaQnxLeR33vFfBREdb6zqPSS8ZLsXDrUh3q7Y5smFoih6",
  "key34": "4GyL57N3P86m4t6hsspmDJn8BeGhXEWp71outvZSNsd7toZWKYRmsPCkxbCCTjG4LSSkfBfAsLEyDd51y7Hv9GYc",
  "key35": "m7GLRx5WLn9VXv7DWPQBLvkYS3gEVAJnV2evFbWzp9PizBamPivHahWCaSrjWi5duoU2BeNW3SMccdaEzYApqNZ",
  "key36": "5uE5Eq4aPQeW1vJfyoTZznBor8SuF5znjDESLqKKgt7MwuexSnh1geEFvUkCADKmm6mshFzRr4g8D7Dr2mzAXG1L",
  "key37": "5a3fUP4xV1S2ME58XizBFULNynzdFuA5d3JWorQsNBNMAtFUW8iwDGQ75e5Lzf1AJ1TtoHU8N2hAGp4bgPh4TwcW",
  "key38": "z3NApvTGD6Puqp32J3TuVGjqdomkYuio3A5nSduqxAhqNQ7MrC5DS1zuPzJohJdWWirWvf6iDVMsnXJ8Hgdey5y",
  "key39": "2eJvZDR2A14KLJjgGJvnrQBeBhyvHaSjybPg7iGA2zgZBz8KoBKqwrtrgTJGqRrpBX3wUakE76Q1rukThEJMu6hn",
  "key40": "3VxTHW1HpdrPjonLowyFA7ncWuCLniVzJgvegkh7oFGgWsxr16QJVv7gfuwZJWffJYgNnU3L1V4af589tfBWskiv",
  "key41": "2E5Z9nxGFusUZE3s9gBt6k31wSYFDFiYGUvfnvKBHAGXGB4YrchwrAFpAzLVZVEb3yUgCd2wZQoaLPDwC9zXkQxG",
  "key42": "2eFDGnxnBhNjf4rrWDErUduXHnwC9K12Pd3v8kiDSzJs4YDpca3HLf6UABBRtf2yqniFtDUF93XXRN6kByyyFmo7",
  "key43": "5cy5az5MojUB6eLwuYHPcmgXVkFvVKM6CSwYyF4km3Pi4fiMPoP4txw7YQoykcmgVdFE4m2VrrGo8cZw7uEWEtK7",
  "key44": "3r7Czkk2Q18PcbxKfh6g2XixGg8k5WxDm2iotZCbQYu26KJVkKiT8R8QGfkczybY6EYKFGixve27ntS423JPNF3k",
  "key45": "347HwvrQT6DVoph9bbFFMVXWT6ke6mgWXDe5gzpLzSjtWb7LgKnyAcV3J6v5STBRfHneJzDsjWy4eAMcLhVnvG3e",
  "key46": "4VGMzYaftzLdh8iu2JrpKxUoF4QjJf2Yc9BduVh225VpeBngBywNqNZpDXMPomrYT1ZxGrqsnEvFbiwToZhcJA5t"
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
