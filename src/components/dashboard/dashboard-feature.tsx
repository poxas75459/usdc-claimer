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
    "2JiLt9Gtte7cBYZRLPucz46wPrWc2vRGfVkoAekLYA6MEakY4Cm9d9kkKGgiPRJ9UD23KeDdjrDNPUGFtHjGWyAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjRNV9NH28ExEMRdzjonmbo4Vr1Vu83WX1PjD6CsF3Fzs2SShh1v6wqx4Rm82cr8AkTUy8mvkEeBt6Y5LyjikAL",
  "key1": "4YLyji2LA9nLms3L2Et9NaQAYSYXSAjoEAJXwNxoHYX3m5G2SKYtEksACmjfedctdEWx8yWDehfUCEBFyCyfQSDq",
  "key2": "1iuPrqF8MHUBu9jtmuHR1tivXAoKrgT9ui2zPGEBvUfATTPiwqWLnDM7DuQFn2h4nbUMUU43EfFWeKaVouPtmFo",
  "key3": "dk8VwgdrPWYim3q2h8gZwgYCNwWsSJ7u3mcSP6hr6KkAde9B178eov52AEqhQv4VRsVKPf3HmvGjtWohaydbqpr",
  "key4": "5KoP1NevVj28SQUp9CszKqV4wZ96PqTp2HXyyGXjUS8NgZUz1PAnJp4fk1QM831xberumjHppVPkDEqKgamtd2bb",
  "key5": "5QPKrE29H1YiwwsVPwdLJGBunLmQ7sngzpNqsXVzXnv3koUxjDDjjSahBnVnbi145SZhKd8BwNFe64xCyf8idAZt",
  "key6": "2AuyUPQRV7PjMAnqvzRAmWZcEDMyrt9Cu6h6rDiQPEDNkMH9644warGxLh4Wp3wij4WTBrFGyb55tWu16BnyDMGT",
  "key7": "4LjmfHHWhFukqdLMoRGFo3RjyJvJSBA4hqn2gdoPzPs3MBURWJVjnB5CysxPRbcxnSNs2f3t18D3Mt4iHMEMiGYY",
  "key8": "26YXNBSmtTRq32WzK89pmdKe613xtVLKAoBeP6LhpQ6BY1BDv7SLiAYugDp8ejUZ27BGyMXHuo26EnUcEJuRAWe6",
  "key9": "EUrAW2R4M5tJvM629UjEeXHuxkj1RhNNF884yGZGeajiCJWBA3vZ3x8cp2NxETooB3eMqVYEtmzgCBjrtpkKwhV",
  "key10": "5bUurPPC6W851GM7yqMHSVNWqfqKrAJ1gWGeFJ1QcPG7htem43XbLfSUauJubE2jLfcnMdpXE8xyFvs7X7BESd2j",
  "key11": "35VB7Axee7g3DoDLuYpQeKBtNS5LgA7q9Aci1DsW1F3wgy9Jq1cEj9VyyBa2bwfdhv2Yf6zTqbj9r9L4aakWcGei",
  "key12": "2xGv3kMXFAZsFg45sT3XqN1qYRYmrKsPFbveTLmKUM1rVWuZj7vwYkByvHXwBF2mVbJM8vnxRtTVXC6oS7tvbvqa",
  "key13": "4TosBfDsZShSUb58qA2LWEHxpekgB9ghNR7tzZJ4cJGHnYkTWU2QFVBGanByuyefVJncNipQgLkEFsqfekUSVL1H",
  "key14": "3E4pZiLtxBDuFXCs9Dwk3cX5zz1KA3fiThKXuNYboqr7tYw1Qcre6mNsDYN6xpF3upSXJKd5nPpfZaSNnPm6DP1D",
  "key15": "3G67NdnCMEEu8DUCkR5gsgPR4wL2A2aNP3JKwPYbC48yzVKWURjuYWynwEeBnp7ifTS9xWx3e1RtsDzycLqCc4kQ",
  "key16": "4n3aVefHBYC7D5ivKpqbFGyCMv2Gr2k3MGSBvYZp3ZVapuuwKazg5fz6ntKqzDWiCeRnsgMTAdWgz6EKTa2FsL7L",
  "key17": "4zi8zP7JkPto4DR4WZN9CXqbviTaKVX3osEYc2wz2ZMwxz4umNTm6iK3iiTmHqBro9upfSEDKGXz4Y2hRdQ6FYqU",
  "key18": "4reS8J6oc2yKvrgSrZPCZVKC276MJKRQA2xvSa4MYcUAC8Mg9AMLLGaMH2KL4ZytqFGrUU7AUcxLwnQzaNu6svig",
  "key19": "NzC8WKFgKQmCWFhEdSJKHeBzor7Nwoia6e5dUTJgwJNQo8o2r1WYo3zFVDB7HtYwoBu7UdgnhvDPXjT4tsczXu5",
  "key20": "2UotXuB5xRUPbHHRAtudePXdMHWkQqdGjUMeTJUAphwvco5JSNKBNNRU4NC2nFoCtiC2xxEW5h2e7UhmoyFSFeMs",
  "key21": "cML1sVWbTBGbCXYQNzCRoDrSnKJFkEpyQGyTNB1JBxmek4LKFAteHhrjtXYTvdz7mnoCKPjyYpFiE4QGjjh9CAz",
  "key22": "4cwYucBorAMxr7zxGMSV7XAxLk9B7JeL5u58rBBc9pGJgKkcfHJZtC8JPuP5C5RGoENcdvje8TLTmnsMB9EBSy35",
  "key23": "33F417krkcMk6niFHDbzARMg2guFjAHrMVkR5aSwkSeYtLoJ7QcHo9ZSuDJPiib3JTP4fFPyBaUuo9rZ8TCM3sUL",
  "key24": "4Aj7W9GDTDKxRnvCqxY9rVruno1Fmgmw6EFtbUXdVvQQfrjdtm15G4FmMAGKJoEcHXCDCGMx4SXqHq5pu6KLMuKi",
  "key25": "3hcKFeEeSdjavqhwZLQWqMnydSjsA11D34U8CZTR7LYjvkkvP4fRkhXis4rJ1sPGJaPo8f7X3KrpPHnv83K4q3XE"
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
