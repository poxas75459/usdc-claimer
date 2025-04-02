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
    "5U5xRGxkMb2qh4pf6fKtbWRyTJWqAqY5D8XdDTd3emjkm8fwXeSVKB8LCGV8c1TArCvbRszmoNMXtqPc2g8qrfn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUxRrX9dBmEZj9rsC97HnvBKYsjyeX2WfW5bTswbzefypTwJPmoJify2mSY9ForteswHcKAff2nT2zZNxpafY2f",
  "key1": "BcExDFvfFnzcHPEAVX6vnmR4T7L75FAvQcmRosshUWcrnJvuzwE9NJZh11LmtrZLiDbdD8MbQKi77bBvR7f5isR",
  "key2": "2yZKCo1VuMxz8JncZp7jhGoo7JxXd5g9ZXWZvJ68ZKHdtXTGDSTBA9Bi31yvrbJuDg921uQof9pgDt9D6NcSP58v",
  "key3": "2tw8KgwAFBRTmERgRJC4nfzRqDy6PNanVmaUoRfwbvFhb6h1ZjQCJJBReCf1dJ2VL3r4QjEikwkho1sJQF65Lsxo",
  "key4": "3G4entC9qvK72i91D5TStZgtFZVmAsTtBtg6DqqHw934rTzLyC9GqwVVdoBDYiqeM2rvK8eCpVHpwgdX6swJXQuu",
  "key5": "5ZSt2PENRGAKExq6apuqqrJqJJQSLjmk3Ec2xrvDUsoFYChfkQfiLT25NxUQshSMAnL9W2PwJMgbEhFyXRLuFoJE",
  "key6": "3uvQJ7RoXMZdG3pYofMcc3AZuUv2Xz17hRbzRQDEJcTn1uDJCQCQysek8aVmYGsrbQ76svk56ecKbjVdrRo5JFUF",
  "key7": "5zooEzacnDcWTQLB4VQ7FfCongSr1pkVjcG1qqcAqNbjyxhZqVhD6W6aWvcqQpy99SWzXWPgeyKYkNtaUbZLoAcZ",
  "key8": "3hEA1JQDXCdbweBHiX5kV27TUK83FybNfLhEDePdvYkMBfoPdjRFGjD9m3BUMYvT8GnrYfB2CKvEkWCr9Y2QVxZv",
  "key9": "xGLxratKNYb6fdQLfgs1KJN2rKwqbnjzmi9VHaBVgTTEWttinnjq9wxw3VRucZXCdQxFgPrZBj2XtCLXk3azkof",
  "key10": "5U9TWfUHyKXWKT5eQdHrJ2Mk29e4rwSiCYGN1vNMG1YUFrKnxKHoB9Nv2KT7diFs4Sdhf2eQpA3n1c6SSx7JGVyc",
  "key11": "8k2KBYw369h7zPccNfL5HvSctsACnGDgEPBWYvMgYRMoabJYSrKqPcTFXci4T66k9k22EfXUpUXV2bvpw6hDRbH",
  "key12": "5ct52z7Xp72S9neKC9uZJ9LY7rvgD27XKwaG7YQ8MvHXgyhg1Ey25GeMp6qpYe6WAPdtppsk9RvMiouBHyi3LQ6m",
  "key13": "5GW3ox3VX22rjg9h4r5gDwmpoHYstFJhHQuRQLuJ7RRGiWbbZdrJGapjbpP1sFnG4Wti8ucAdk15qtJ1woutwfH7",
  "key14": "39rRW8mWfVCYEz74NnRDM6HPq3WM8NggiQwqT2CpkyVRY31WbsEdWQb5uoVrsVvxWYnC8XUPB6L5BwtrMUbWANXB",
  "key15": "2snQ9JU8ryD6KF4PX58YN8RpTPa5A4zGP6eihcRKo9rktZytZYuGvroL41MK7kBV6RAYZfc8DEcB9D9qD6sSpgbj",
  "key16": "LbuifwrSCNJgfHduYSciGtqvJ1Uimg4DXH8VRiidL7ZZwmsLPWbnQVPtTYS4g9P3JcexTvPVkC9Fercghuj1jha",
  "key17": "Vb38HV1YYx4TtVcH3JWTFum7SooVPPMDNu4AWBjZBVMPREzGUNeBg4HKrcjkaB6B6yt8zxv8mwLftf3xorGjbti",
  "key18": "39tbgQPGiNNh3SEe6wzWyMHkorcfSYuXjbZxkPNZsu7rfDREwTWN8HZnxPFYi6BerTRDScfAaMpRhPhzgRJ5HMTd",
  "key19": "3ig5cSHGQ1s2qrB7DGFkTgc2TQr51yJLsAffwu5jQNgqwF4MvRu6U2meYio91eMuLsthCRJqrjRxsvpVZJCbnzPV",
  "key20": "5wYHQEm9NFZSRcogzJwN6Rut52BAJzYh1sfSfgfDYbQS4xESXUnWDnTmQfdQmzaNNyfdPyXtJecGmCukGbMkpFh7",
  "key21": "4MFawfCCAVhwUxgCmgRrnz7N8kf7rAFnu9oH1iQKU2nVKEXiwY4VYEoSwjj6b7F3eWRVMdnsWjUyC8G3G1yAWMWf",
  "key22": "4LFpey687xt7NqDVrMzAUEB8tZmLK9LgyD4xjfpBS9H73YkVwPNrUP3NBER7ZzS2yhk7w2rKz82z7wFWg7ebRhJo",
  "key23": "5onyDKEwv8dfro9xPvYb8J8Dt4odeqpMDjjuVvwKP861AzYpLaQsVyugbfr5xHa6VfQmatxRE4yVYXsMQcyHSVUF",
  "key24": "pdkNgF7FnxQ59VzDqgzEh62SeQmTsUHMkqxAv7Y9LHgaF6T9wx8VLK3b8NMgATJNPo3V6cvu1DMJqKZCnq7KUWk",
  "key25": "5hpfGiWxy4peNQf8nyq2hcu9HP7U8mzkvvTpporBzFeEhtGSo8UN8Kdnfn88SRCYhoEeXVhkQYkToquopwZj8s7Z",
  "key26": "K3JgYB6A2wmLRSMajHEHi289yJADnQ8Ch4eswGkrxhUNS15qiYCxWuMaUwccE7oqk7TE9VdqYjbLTVnsfBMzn6M"
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
