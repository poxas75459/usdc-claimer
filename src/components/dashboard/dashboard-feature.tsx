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
    "5kGUzsFjRShbVHsWJuqVyYskrhHhN7R2wUPQ6E1doRdEruYhY9e1ZC1A9gh2YevSiecdgSVbRgjgpDEAVdcbiY8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RGNk958u6VLV1gSDcnzjeJ5kNKddWZHLJBMm9kdXdxFhYvtc6MALK6cj4AnsJgwAswJNeNy7cbGg2JMT261w2W",
  "key1": "49bzshJMVvB13N3waP3AmUY3LKuFxtMb9wQ8m4o7oSqBymGEmsH14QYWhuAopiTiQRBBvaYJqaTogiHumQUffKGr",
  "key2": "4EgunNQ9A5xqr7SqUWhHRD2SZXLFbkndaAdXtWDxjH2yYfxqXtU15Tq55bLDKWdozdk2Rt9M27Kq7QzqW93zuZTt",
  "key3": "A2KDMpoTjAGNggkEqrVPJvFm6V7SsMM5URLPNxJzyjUFR6P9o4Q7HcYZ6fLBHQkHeEX2boaxeFxhvrtrAMvcqaa",
  "key4": "31CKKLSN9d7xbJuyY7bcbQnGCKd41ELAuFpNTyiCZBt8Co5jAwFYeMBsw2yZ5phnA9mmfAXyAva7wTq12QMeiqMT",
  "key5": "2FTqWxTQeVmu7JGspfZYzLA3LxnistwdeUsgunzMrg6JY86hwpDimcjHyr9q81xEYM8NRqT55bCg182urRU1cCVw",
  "key6": "5QQjaWrNgkTNCmQFxSjTbV3XyRFj13CqBQ3ncGNfSdWwVLhwwHtZzQLGBUscNNc5CXKfpxPsKY5RQW8R63rmA2Ff",
  "key7": "hntbX2knN2KAe2wvs4eCbFktcrr2hnH6Pt9L9kPQ9w2N9CrZ46gJ7SwmRqEnnaA1kNq3nuMf6NK8nUDRqEjpxdf",
  "key8": "8SrqxPcarTaGoZ7Xnqi6esjqEFyFxQ4DBeeL2NLvjwvLVWh2bYMKHspSVdHRV3kFQZBxENoEJ2aMntafwPpMZy9",
  "key9": "32aGyokuDMXinrcCk3GKG1VCgq9AVTaq2H6nrYRFF8Zy6uZMSRwu7gxzatydFDWeQsV9CALk5hwhN47gcTtXwPpu",
  "key10": "2patWJt9XJ6rvHFPxwoHmme9Jwe2ZGbLA4LJhWEQHSPTfMNdFauCRbCy2qz3CmhWKGAEFfd2zUckSn4qsyaZYkJw",
  "key11": "4YAxVsmZWudAG9LP2tKoTkv5FMhEMSAxoUXKWoCCarCH9BjrVrTHgzKNKeRQ2U2xkeQRmwoYGrZgLzTKJRib1YnV",
  "key12": "3HLRE1H8FcSbucn6g8i2hbG5BsompEjSXSDNJDRK6XovKbiUDCULJXP1QS2Y7LRyY8W6YgMRCVRxpeQHkqmExz3G",
  "key13": "3Fmrfra73qsm2mfnJHdwS8YJqMPgAxmr9rWUPqb296tJyQ2DcRJrUBYTbL3BSdpfsi33y2hnLmRmb9FNBeiF1Jud",
  "key14": "33376ggbV2ZWrb993dQdNSofNtvJbCjxwSN3vCopkbmns94nD8746rLcqzQ1VfLmFr8Q4meGm1kVr5TNwCShayrX",
  "key15": "3rRpdUuY9u9fH3c4AgNCYLuZM57aJoTccZN1C3vDrWycGKWxSok8LxvaeDaqedzhZAriCfELuzuwfkPkKQbD1vR4",
  "key16": "4oiPJA9GQpLJ9gWfet72d8CeuwnYXVhGXaPQgQhjpUwynH5S3216EjnABC9s3gjkNzPfS77LP3XyK2MPjHSLCqik",
  "key17": "2dWBiPUYTrcHRPSfPL7yUfiTyjgGEELJxwWcrg5FEnTtzofxaE4ZzHg3H1vZ6GJHDTF41qs4B1k8YKqqLGbVrcdn",
  "key18": "tAYkgcEaQUZ9XWhSEDPggoUVcpEfir8NEdJubrV6pHEUruLDqzFANFa9yLZ65ACQ2CCrCWs5veqpGwhdjH7jj4p",
  "key19": "eo64DBEAb5KtXwRVmp91P6d87s4AGQFSguyknJFruc5MK6QtcSAaWE5XvSM5jErH43QWjGvndgMvSDrt2ZbrGr9",
  "key20": "4PGsupn1yT3Wyd1Wnf9LaUWrEJ4rCoRRLffBcpeMTP719pp3AYkRV4Ga9KSsjMhRjr1N7X2HhcKSpokodQa4ZCXB",
  "key21": "3htdSryhXg3ZBN8srxs8PLTBx2h7SvuUpC7nPiHyVQut551Pk82jnbRX69EtyfdCjQhNfLihhkCp33AZ9nzoNDDu",
  "key22": "5CHd5D1CiUHTcSmWb7mUcaWg3q1utuMk79oswKMG6G4tFuqWqxja7pwPXYwxKnX4uKMVfvRbhA4JGEfenJdAv1dZ",
  "key23": "5m9qeHHtC35hxdZjfqJEpSQWTSssYM1jnZGQuLLLFUvTaUGTB6kamdzaTgfMKed2yK6GtfhFpCXUorWHCPQftGWH",
  "key24": "JJc9j52nZAjQnBkNVgVmfnerMsFJfxGLcS9TDy94NNr7j75qJZCpKUCMTMJsgMtjAhFoA6RthNxcYqwVnq4VPPf",
  "key25": "5twaoV2eZsL6JXEav2g9ADJmovY2mDEZ8LMUb1JGvUry4uasPT1JjZTheVgnkFWG1oHzGFbPQ2rg2bHAahdTCmWf",
  "key26": "nDTdU9gKQagXLhRcY2S6GPCzyZQ3BDTck6D8gDoBRcfEYaqLAo5rdsmtHeGX3jwWfuZUn6MJhuyZbuPjNng2qXc",
  "key27": "4zE8QwqRi9fSWFKG1u4abf4eqKPqhUkFMi1z6hcMfMX79yaE4Fcytiqu5RpsovfyFRT6FAMfaL8YL72sAMQHxh3C",
  "key28": "4Yf3hbyPKDY3JtVUSCXDkeS8u4nsUrPmSBEGAKFJajHcqBKjpVk9aiUtzFyVyYD45vFCo5wMbScj3pyj8fhiuheh",
  "key29": "4KXbiJWf7umB79U5t7bvWzDYJ49KuHQ52QdG8WEx4X7wK9Ypp6KrWqqxxNeTmrviwwBQK8M8nb1pShxrgEKNREsf",
  "key30": "34eg3P26qXh3rFWFT4SFrS9Mmd4RQ2VzH1zDt4NBSejFnnZrReoktbkqEnUFXAodjCLU5SY9pKgzZTQNGF9reBMs",
  "key31": "48iqBp953vfLBpiRwagdHCtKJJdaNvNNNfKXDxSg7G6md7roqtngP2XV1Nb5593vuLpmZ9psSZ3whBsp8RW1siRQ",
  "key32": "2V4hF6dhHUoPSiJQJepnbu62LDW5zPFgi6MSD6JCf4XFUjZ2WokjbTUESyh9C2LGVcaXM9Z2VBgzdgUiaa9cDo4X",
  "key33": "3evwPcaAXWCFqd6sJCt6RWPsWE8K9GRk7S5KVnLogrG8mGkuACsq1yHzeBPvMSGZSC3QVwBfZcGzH2fNQq3iYvAP",
  "key34": "268AwCjUF4TyZkVv3kAraQZKZjvAt1nsSJb8acXbjJiaWKqjhHguQj5LUgoye9tjk4kppWfYQZrHxKgGs5pd2JBY"
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
