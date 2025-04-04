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
    "2JiHuE6zhGMpf8VZqGzUnXdQuznGxQgDKWNVPTVRB2xj9JfDfu2p1yTABBWkLQ6fHv5dxeg8EvvrV6U1RdBo2Tua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXugBZNYVnjy3nRGmqVxzkCaGmsEzP7tX6LNyKD9b8rNa9erkkSTyLr7u7LPyE1PTVo2nFRbzbk8JDcXY4oNVio",
  "key1": "3nEs7i7hA73p2wgWQEcHUgnzogQPTmhi6EE2dKS7EhtfKiHfW1jmq46ZaLCSBQnG6AQU8Qwnby3ku3jm7gYPxCEz",
  "key2": "8rRVoHLiBSm6sfWxZKdokoZPES9ku83eUyGuwDG197XEAihfw348z21Za6LPdNdRgz4CGjYcfKGU4GgahvKvTJy",
  "key3": "5W4woXWXfpYPkU8zGy5mhB6QBjsxoZTDS9mbwViXW2p7AAp4wPG7xCGdEsS8d8sQzaq3x6Zpr9pgzo2jLiEBsanf",
  "key4": "5LQFPJuP3ZPuYpkrXLF3ZfgNwKuaHogS8ZMtjRDyDrEH89i7jfCLF2XsmAcKPnRXZCocBGo7kYvB3dUnQBeGJpnH",
  "key5": "2sZDp8nMhLF65n5FjhJBWMJFrh3wn47cnCypbC3aZYUqztrLsEt93cYZRPwBPXGZK7NKAiNzyrHt6WTzT9iiKiu5",
  "key6": "TzuKKFyV7xBDAzC2sfPA4g8hjTj4eVyr1SNWhvT4EUe1GAgMAaAPsei6AXhzN1nVJbA4WKJ1aj6SAGHZLVFJGo4",
  "key7": "5iwAunxdUEm8SfpjXueff56WjxsScvqdNiPHJps6A5FUtNgAUxUoK18aSNPUgDPWewEoBZ9E8geTUFbPjea3nSvL",
  "key8": "5N5C8AV5RpcujEFfBWeDHdpqauEearrQVmBM8qf3QRoHgFVV3TwbcDghb71HvL29UAtm4cg7MV2Ne6u4ZUZnu5YX",
  "key9": "64NjtwhBcdvdcZa3b7iazy2abNbk63xub5uEvjNwLnBJ14yFeti9U1QuzyuTqvTiNanF7rSgpaRMX5y7wCENsoQm",
  "key10": "3y5vo6h53hsbSb8Lk4RjCycXBHyX1fb5TsngyU2AHW1K7SGvigcY9HQj7RA6GYf823X4Ep1zKaKb8Yv3HMBCYVre",
  "key11": "3Xsbu6eAJJnMNQ3FL3qfrDaR91PBzeV1PLsZfYPiW1sBF1xiN7FEtH6X86iPg7xCBfzq1FiyV49VZU643FbFQE2",
  "key12": "2G2NXYCVKkBKj6D54SEKst29TMJK3whCs1g43CorXjgbBUgFbpiKEFTqw8FFe842CtqLL2TEMzu37tdRCdRoJofL",
  "key13": "36ZjwWQrrRWteF8PZiWZ8vCHyfGdy51AmWtj24DAiPGABmVFdtC4FUiMJvx65FxGSsb7EH4RZ9dxxsm8hfgb4YAJ",
  "key14": "5PNMq1fQM4NGM5xJrMPY9aPvGZFJZaJVsiXFQn2wNu3Lw2SBXB59PAEMzv2qWdkqv9CRR2E1KYo6YYgmV711uRqj",
  "key15": "22kBUous5JY3BQnLVs8hWQSzJUdo16oo9TjXBqpJMhh3KM3m5P71AVM746JAJswfBmBBXUVtXqRGPVL3JQgdCtan",
  "key16": "7yfUwxBoKAnc3KSeG2NUjVxKN6fsqAAf7Kzi5rfryrh5jdDHgHsjt3a6FR57CqMn4i8rcMFoXT79uonmtRAYpzE",
  "key17": "58ijBXWkXebju97XccprnxitR3bbvQtn94prtLS5LSnv98a3pdJk4dqBD2UBLVzS4fCsJUtFEHfMqcoUVQci6zdG",
  "key18": "2ddpzLDk9cSQDdJnyRnhUyVhU6GeQoL85mfeCs1dyQFyuoyzC2Simwrv3WiAiTfTFXjR5suuAPtXJAe6y6Dk2k6z",
  "key19": "26YCZkC6nPf8ANCeTh8oNjwBp3qAC8ni2vsK3rpTHKWxkaB1Wf41EFQT3RUEsa1wreDc3Dt8FwMi2fjNHYXRiWhD",
  "key20": "4o6KdJNvNo31LoTifoAykTLdNrbDxEnV7VBu1MMZHdZ232nVS3zzAJEziycApqZmd1W79SUyFMy6pMXhum8H2que",
  "key21": "2v1awfJEyBUHSJgrsgomacirCQ2NAKoNWW8qXB4KWXoxb7EMCdNEkdZL3F5dWif2ZGAG8xZJeaSe28ZHcSm1QnN2",
  "key22": "3ka7mzAX2g54KcyaUxiapr9zBXmhs7EkvJnyWVwwp4kpmD4bwudtxW83GcmQta7NrmuNfFydGZksPBu8zsoXX4un",
  "key23": "2UeHixMLN6HihUnmZYQAob6ftJbnx7dZ3HaCbH94iJTfT2msdzzQu457uneZd5vco4bUJ6NTxrqRMMTMcd1XKyA1",
  "key24": "5rmd68cQ5nvVpPCC9mCAEWgtHeu9Gpiz1sxADzVHfb5KmbjpBVd2964rQ3rrHrtZ7hvLMyj6SLq2m7GBDC3YRpP",
  "key25": "3Sf3EGVWxXmMjmKeJnYRKzvuWoX2VNEC41VyC69HgbAHNh2ghhemAi4V8PqFWwVZVz4dWAJLK5i7baX6GzPmZTaK",
  "key26": "RuNAqpFcjqAmehZSCn6mmKMcgVQPPBocRVPnCVMznVqPhM5BDo5J6iwgRqVBSedTUdcynwnnET2rGxM7Rqc726j",
  "key27": "4FBseidKbvQgTZfVDabXvoiDrhVSzdKwCSRHJKX9Tk4sdsPjSxuRcbqcb8pDtLiRmNwgksowrnSdhz5DaHQi1Usg",
  "key28": "PwCqrvfNR5qHxL7kStDiLHaYyHsPxLkgr2Q1GiUvRgX7S5hjTntJ41e4JfAH2zEbFuF3uxW5KE3XUBrHdP9YUMN",
  "key29": "2sLD4s8LMhNDYu5moukKiWMccjxAiBex7Avpe4cd3rc54nvPGouRXtV9CFRk1t4H6TETscoFYEJcT1K5YPTtrqGR",
  "key30": "4F98qnEU4GBkmLHiMnFsxCyQjKW4SEw4MwfJFjUQcy49mxsAFBwQnFXABWWSVpo9zXTFgPY2M2kbhnEPVnEt4BzZ",
  "key31": "2wsWWbXsafjZisbAQfPm3AGFxaDNBQNo853bHHXvLunHvUufdY5wEUdDyaUWjT9imvJfGkhiW19BVHcWBtrwymjC",
  "key32": "wFnE3HB3rvTs6gHRi8XVNnyaPyWwxAAfDg2SE6SkL1pb6Rkm8qRhBn61C35RT8vhrHiGHJ1Cuehzoki6EFTjALh",
  "key33": "3UJGagijVxKLYCUCB18HGE9CGo5CL8r6qMoPxoSh8om5aTDHzCRZ2c6r9N1uPJsfThkFXUFWH9NvUaLtRx2RaNrr",
  "key34": "387KGNdo1XDocC2yPCtSv4V52k1qmKQ1ZmaswraahTniFioHqcGSqDZTKAHSwAwopq6NJHYaQQsiPDj2YGU4dpMP",
  "key35": "3rH3UqLx2c1ZjbzHNoYijrCiVkwtSEkbpVhUQ4eRT5u4wqdBmkAFFLcUnSoPpov9XAa4MMTUfkMYFn33T8Gsx76Q",
  "key36": "4QBcxAifhMNnikQhZDo97GNbDAdYKJHFdUPCCTVpkJw4cqhpgjo41rAaE4KTRqB8oJpPxRMPhiz1C9NU9qS3kaxQ",
  "key37": "65Kyvw7SUhCGGLrYAkYdNKfk1Vh57ZCCosQ3pEbiHq71FmuzATAEqBVn55Vc1ynA8ebLWKKmcDA61hz6qfQBKurJ",
  "key38": "4jDGvFRYjEmR6dziKveLstCgKaxVHSkKwbZkm9TXV9uXt1JXB4xzbYLKQujKbVG8QTEhDtNYvueZBzs436dogdmg",
  "key39": "3hvmn5vDipsECg4tgAa9wK2LyLrEWHd5KDtS9TUycLZTJyxp4mTu5PZvnyS1jGToUwhoo1S5bVAveNUp8wGSuwYB",
  "key40": "5GWNHAA9ths7a5W864fPE6tQd6AreKhsZN3YHx6GpAFrRGaHbH8rkVNbpjh1Den1X23jTedzckVcnQ5i5mdokQoF",
  "key41": "5Prjqefzp7eq45egLJc2THY4NXjqP8ZcX2EsPZWm9ujvf35G7KcL3BXKSn1EH8yYiLtSkm49nmXvgzL9NSiRp7ry"
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
