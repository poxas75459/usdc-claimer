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
    "5YTLqA8PNNQyUnFLeekJq4ZNB3wa6E65cMXLVjmH6YhtottHC1uWTXZrzGgWhU66ibGSSUFKw5vLnUMJvNxVeuE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fBhpp5UTaEj5wuLGz9NZGdb9GuXHtHtUeR3gWvTTJL2byN8VgwaMp1mNffyPAKjFWWJHKp2GEy5SkZdmDEteac",
  "key1": "2KWNT18ez1UkzBFBjYSquCWFXMg1yapT6xZSbu9fb5k3XTRYCB3N1Ak9Cy8q3NCL3eDWbTodNraKmtfKJt4JCFsG",
  "key2": "43h1dT85FTgPoR6mRhkzpcW77B9WoDbDhHREafVVAhnAomUnHPZfUddWezMdzyFwpPN56JahuSJPkgJAFxLZtzsj",
  "key3": "2CwgYMFaDXc5EL4uFbEr44xFHpN1qY5assCmeQTYJSHHqQcr9TGfgj5DL8nmpg5n58mETM51mCZCWdz9z3JYGw3s",
  "key4": "4PucJCcnrAz2WoDBS6EcpqASv6BftJGEik64iFDy6K2Vug4B7CihvgjDNbbBRb3FWh22h3m1Pzn1tbc24jEDX5bR",
  "key5": "2MHGF9s4rA3onsQQ92X1MNLq2T2G1NLKkhSQGG7envE4BmkZRAft1886A54o2MrqhNto91HUmrPu4WsTDJcvS3LX",
  "key6": "2aZcCik9cjG4fa9hCx8bzdXXJHiHQKYLgG63MZxW7qtMsYMhovthF6gi8aYUHf5vJNyfNEJSHGzxVFjdN7RJWzfr",
  "key7": "NCqX1E3K5kpe6y27aiMXt5rNBNgpR6ZgSvPaibgtUQt7JNTjqCkDGSjUeFZvHuP6RNq2AUMkzNtxmn6moDhFfrc",
  "key8": "havciUpAi8KACDr5nzbD92o6bforM787opZRp3UTp7yM9LTVAvvLAvybc8mZnQiK3sWWNMBEkJzUUx7ft3k6kyq",
  "key9": "4bunBveQED66vt68WVRafAsDd1X7tsnAQGSdCUR9Rfs7HHvCduLuAJ6PKkPXfRSWFLi4AMU1BrbEqACRHbCzxVmW",
  "key10": "6grSrA7aP3yBFmU32fkgNC96Fbikina5rv83oZhaMAhdoCL6ZtXU61WgdSWVvgM4oisVpctwDkvCbwADAjSXUsg",
  "key11": "5YevUu9A34PEyBBz85fXx4GAbWFHp8WUY5LZDXXKykKtfNHUtbDBhFSve3ezdqcJRRtk49CXnCJBXQCmb7zP4LBc",
  "key12": "5UxWyfRBUQEm2HerEVEzVnLw2ZqkaKjKgSHeBL3ouKMxfNyWEXz5CvDNMDs635ao2EhNE7T1st83gt1xNZUyTQU2",
  "key13": "2F1UNRtHn1nqLtJvXgndqJMQp7TuDhVFESvApxWpdaV4Pqaoqiigwg4tw2gnCr7PeeHWLNU25sTJ8NVnfPPVaq99",
  "key14": "ouNbFvAMnnSKgnLCoQhTK56V8LdgiWa6uRksHVKTaZBzxMugpGjrXvXzH4eUyvFmrWhKwGHSi87QR3s3LX6v7fs",
  "key15": "R8qV5MkRoFnaY3uY1Z3AiyEt1bMw87VcaP9Kq7Kt3SXjgJDmNB9MEVAC7pNegXp3MEsBAeh9YD6GL9eawrQ3PcL",
  "key16": "42RjQjvCLds6YvjMdseH7RmjAS6qPiqJG4qBFefVU2PRba5MSD7UvncnqohSQVAKZuGZbhLUaWJBxKa8BhKQtGr9",
  "key17": "RuT31oNH7k5YskXmx1du8oe4EfA9mwY97TicbXyvVXePZWcBY6AEUpSm7WkyM3ErYFeBkgVi7AwEJoDwwdKkeB9",
  "key18": "nSjhat7TUWbVWn65feVSrx7CpFoT87FWaUNd4ADepaWEZnjgNzU172djf3VaDKph1MrNeVk7XksW8YffXvsH2eV",
  "key19": "3PQgamr1z17TyUXgoDdBnmVDtXfscBgSNTsJ79U7bF7NcWN7mahHRYfoNwkhMXvMGBAGq7Js6SU8MEsfyDPc5aL",
  "key20": "2K4t7hbydQDRrKY7DFWK14WW7rZG3W6UCjNciTED1Y6A8vhPfSP1qZCeVCPf1uh3ZjoXYQTkJndegrnUwBpKJu1Y",
  "key21": "2uNic8aEDNZkRwY8fH1o4CqSFRaQR2T2JBCUcXRTe5zhChEcxC2h1p9y3p4Z2iv7ZRrnXfxjuuWZ9RvWnXTv3dxj",
  "key22": "2jkTxCprDZdwspr9BUfjbM3aXGZSzhZK3EMFjtva82PU9ZpAG2uiRH1oyffzVT7BvGWGHCfKAeC2aBMDZxRZk4Wu",
  "key23": "24Cqk5PxALFqJcbK1nHczjCYTUTxJPVoG3FB8rMTipYFpEGVxZaniaPRizpRA1iekipdCaujtdXJY6JyjNW8PFop",
  "key24": "2mRyUgeu1FjoHg5HywjTgR5Pe4KcFArpbUDVFuutoW8fmxfVVCo28VfYKM1CLHfwjqvn26WqeYQEvP2i3QtwqViM",
  "key25": "24zMEn5LZFF65P6eaWGAcguaWkJnJymUdgjdVEj9Z382ViVMddbuTVky3Lnc7fALScPHEovqTYseGtxUkH3dBoki",
  "key26": "2p51JA9dYAZVboHc6L7aPAwL1SLr7FYqkhNXzuNFV9kCQ8QZPD6WWZqNp9KJUD21qhDRT3tnRnV3h6fYJDDFrTrR",
  "key27": "4soKjVtNqioQ8xxd536tY9Bd2NC5iax8zXvJpBxrE87PoupfmZDp29xtPa6ELRprtfK8kTosQ8DvBwVGboN3C2Gi",
  "key28": "3p6J1JDB6uzUqdQJWyiGRyQjeHxeJBWa2PH4DAvqfA4fcKoiysPBmb8yoq3U1wbZDuCFJAyVng6Y66C4ZUK8Ej3M",
  "key29": "uStk9iaUTarJho6DguKCCMLNkhZN4bo9YtNcFDSRi4HgqdcUZND7XWLhhWoC2tLMusRv8ZXo7pbyJW1jsBfyKbL",
  "key30": "Puvq2ETgVTsyt8s85dmLad4agrFgnauhR4rFsVeqQsJDsg563K57ZT4mFW5E6hi2GC6uBJJEzs3UJRhbDcFE4TT",
  "key31": "3c2P9mHzMv9kyDjScnbLKMSpa68LxfojwJQYWsvR5fn8kCr3nzoq6BCJBjbTzzDaXmP6HAB4xx7TWwXBbEJhtz9P"
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
