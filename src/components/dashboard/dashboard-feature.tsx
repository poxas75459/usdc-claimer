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
    "36QXXwFLNptfHgNynUXEpaUWCA5v13qWW4iX263Dhie4wdDsmtntinF3q591wVXwjGjL4EHhbJPH8VNxcEyMyt5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JPSSkJwwnceA88vT5nCburGvsqrcmLqvHFKsX3wcSQRtT4ALhmNirPKfUz3ZaQqQSJJijtsdBVHGzPyhbVbK4tK",
  "key1": "3v4qi43ouZeGU1giCJDfWq9xk7uYxDipGd5tLLE33YVYqfEAgfybHRtr3GQQBTgthHomXVSguhkrQVTkTTGQzabn",
  "key2": "t9JW6qzPRWoEaGc7x3rUKm4ZxrqETQHoPg4wGnSeDrUsjyiU6JgkHGvYabPat28hxbaXAuaRFy5L94BFzVjBvJ2",
  "key3": "4HQSE82FgJCAtwwFRZQFuSsq2tsv4LcbUQQ5Ea3zoT8JswYo3412jbuT3g3CdFg1JTzwdSmMfMdMfWWEcL4n6TF4",
  "key4": "3tAkyhrjwxStBSP8DdCPbXKqB2TkECG6ouyAhwPhzCv8dK5mu8e65CiBknUCB1tXEmez56yK4tpWSe1oN9Bmx2SJ",
  "key5": "61nZGWsJF7KWRLnKMUMwLR1uSvq2Zp8Wn8JNmwNDM7963uVGGRhJyZxv7HjaqmsQhac1gTVARTXLyu7oLhEknK98",
  "key6": "BQ7sCCHDWZHxUyeRMo1kEgQC51fZghYKJUoWC8EwgJMsaspvhEBTaVAKh5uEjDSU72jR2Fqa2d5WJonKwbyAP3H",
  "key7": "4VF2Xf6cq9VJL44FSVLHVCvjgBTDxxxpx4X2uN8DhLqrvCpVUJBAKfvasbRnEPf4CHXJXTQXaEUiAYqAddsuKhRD",
  "key8": "BUTrrvGfAsydimPSVqwn7RCVvjZ6yfUTJRXT3YY6K9YuhdaE4ngxtJeBHEqhkP2cPAXN2yxXEE7f6US5vTSrzNe",
  "key9": "YU2gifJVu6ddukUQKM5Dm3jvC2PDDSqeBRLCpTrL2VpQufZ7ZoxcnVaXQVkq9NfEWgCE1xpujCVgwW7knSNr6id",
  "key10": "3Cf1ChtUJGgHmvmvA6qAMRtVC3mAG575ybdc7aBz8yUJxxFBqEZAsxB3mqGS8oc76xe7QMM4Atua7gDxqZ8G3WKY",
  "key11": "2WZDov2ksFUiJqZRyHzpR8UJr6G85pnAe4TBRuW14K5YCJYNE3AfZkeyiy1ckx2tuWrwKNFck6gSiaeqLnPNaFHE",
  "key12": "2jJHAkCB2r6WPohn6XwQKU57RUarJP5RURYVGgJkuXgmKLbUuPMYb7qMmpbzu67UdFKcXU9CxMaqu13okeXxMocG",
  "key13": "42cqMfeEUh665wfJeLm6JUo2Kj3MjQj5gWv3xt1Ca66X192bty4S1LH2VYZDDUxMaPdPS15n7RWx9DAASfbJtXJN",
  "key14": "5nuTfmwaDz7K5dmDXM5XsEXrhTcpiC8H6EUMEQJcQRUqUvqS218hDvnZoSs5uymPiWhcDVVNrENeMwQij8aRgGR4",
  "key15": "4cWb6unT917yxuextmpwMYEZpvaxyUobCg3RwFjEoHXHxsQcpQHAGtrVdoXdbTMn45aX4tLeD1sdGhrD9Pti9ymu",
  "key16": "5cuVLQu2ztBuzBjXpqM2NeB9ppmR5geryZkmq9CMqQuyKpk6P4jY5up6fFg2jCMBrb78YnStsjJmAWFTbK22HBXT",
  "key17": "5aYP8KduyCJ1Uvfn9uyH358N9e5iUgJqwEzbMiJxPNSmpTA27eeYnqpiYKw6H5fJQho67sro49ox94spLERTNQo5",
  "key18": "3BBTvcMAUDjeTnJsdp9bE99ZtJYy37PvQMGv3CGPWDNymYoLoyFtaUkWqxbWnBXZkzUupjwPhhzFdNw3nGsTBHnq",
  "key19": "4M9bmEUPKquXWAjWyjNaRBhhGFM41eDQGLFg41W4qPfLs5NA5cHCMJbY9oJ2CVsDuquEr2amVH95SsUemSXdqhyd",
  "key20": "5xbCZ82rbuSMsioRpKd5MJd3Nipri2yfCR6poCZ5UVq4Sgba7Nvk8ws85CHcpETVPsudhU6SwYLeGcdd8eea3Wgb",
  "key21": "4ZkT6ZDxrharJiRrsRjJ9zybhSA6Yo5FQDkAFLAEDvEDcAVZZ7g3YSrcmGUAwLJXoDPScsn62fC4BQnCWFpamskg",
  "key22": "598ShKNnsaZhB7tRGMr7CmQb38tvMLoPfweMgXtEZXHBCtSgE4KgJKJPxYDh43qzb7S5HPthTGSquvr4afhV8MSs",
  "key23": "5RAaoCtcCPUk1jSrvEUbwBrEKsfVvagmFMSwqC1viYDHYpwdD4Y33Tg5XYRJVcDL9a4S8x3YdNUz7BFVu9LTYgRk",
  "key24": "3dYWDV82TTF1VSP1c4gbx6z3A1FoXYZ4Mf6akm1AMtL8kvQ1CtspsTpxUFwoCEnxLircAXmpB2m4y1wYKNzEiKny",
  "key25": "29czCMR6mzMQsV7syuU3zoVxuPgpazig74N2oei66iN5SGJA7aF3xqNUSXK8tmF3Go4W9Jzm5nLRXMUknBRRNPaf",
  "key26": "47mgrNmN7ojvS6NLCMVsEJEyscbdHSTM42w3vSh5M224BVsRdgwHZnc2UZsNVQ9uKsL53QWVdrvXUnWeQC4PCw9j",
  "key27": "3KHF8dK7mjoKQdjnmaasong9fhJWDM9Xxh4HAWqE88KCKq2G2CkPhA88u8n7sydKyqq1vpz4CT1uYMwKXZANh2ni",
  "key28": "3fHXausxNyZeaxDi2mFemCiimDwA4fCRuDnWMjGLTZm5w8WJr3ciciPoKrj8ApJQDQz5T2ZpvoSFZ9Nj2BbhwgUN",
  "key29": "5JQmheYVhsCWqJavbmVGc2ANgfPxwMpUs7QxerS4nU3RPfWLopy39dJK5iTwV4sy68LMjoxoSyMjDoWcAhdkkcTo",
  "key30": "5Xhb2fFiovmDLBguj7tAzQs7TaLPn5hhnD2ATvKdEdJsYrggAXZZip3hvjM7h8u2HGJwo52dT5vfkQhDFPsTwXYC",
  "key31": "2p2WTM63FM3Z8ogn23rJwz2fhTtx6PmjACEPxk9k8q4tAaaNhABXh1kdoNoVZ4NHY9ozowFsMi3ZdiSYY7baaoov",
  "key32": "5zXCWt9iJRpBnNYnxJxPZq6d1FrNiyK6KBUHWDQRStbkradK3oRBWcBe2ycjNERpJJWBSLVfFwPf3jbCSmcEg4NA",
  "key33": "3HvQreDg2wdiMhCSFdjSXNj2wt7UraV3tWWa8UyQQVUg6P6bvK75yntqVUCtrfP4d2UEx2XYduTKPZGZhPVrbmKV",
  "key34": "2ViAmEqyG7suRdDJJheAcSogCsXX3g3BDBJS7StZBoX66jqHZJ1uWSLfgMEHe6uaa26XTHKJFznoaECzeXNyANio",
  "key35": "HE6JKfMDuUN1Hw999WPyT7h9BLgUNuuhNfpsNcnQkE76o81pBJnpT9nq55MHhHxL9PxFX2nXuMos96LQ9iQREpK",
  "key36": "2qHAYMcKVGWLWEBDWXcuNum1ZeCasr59UdWbrEM9EkKJDX4v9abyqbduaLuHdWs9HRL7GSoGrNvvqazRxYq2f9iW",
  "key37": "5NYuRrmkyd5xTJBWASnf1NpZbpuiWpkoppySF2f1pWWFCHP1SshsoW5pT6yCUUbJGT7d3XWYkb1rA1VSpxV391ax",
  "key38": "62zypoUqMcZZ6S4WCbrLVJQVmRQf2HQ3kFXq4wsBnzS3oiyvYsii6E16xqZMxVZXu8dLBmy3W5t8jjRG4YQGmhUC",
  "key39": "uPCpFwAnpaKwcWtc61ZmFH56sE6nswLx2jBVM89QMBfVKTKpoLNBdmXBpXptNAZsN67U9TMyi7huqw7LZzDGhth",
  "key40": "22LSELxkfpjCtQTqqTnHxnu8K8mGPmhFu5CQ1XjULvHfUo5iuvicAAGeyfconJDs4TCFn3yAraNqjH8i4xKZnDJp",
  "key41": "LhqRj73bUwhs2x29hprtFSENSC3tRL2Y436NjJbmtQef7E9jq2XTsaBCe8L5SF8A65EGHbGrpiK7ocfKbNyebnx",
  "key42": "5HzY3sg5aayfMKY5wXV3udu6s2en3eZoM6qwz4GGffAZYuJ79zdxrQspgwjGrCvLdtd1uWC4dhXqhsvLERgTbNRh"
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
