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
    "4und5dPJrgJUzhZmpXcHuoqQ8SSgVHKnM7iVx2E734GmXGhhV9uB3iPF8c49tDyEXhqFWbgBaMN2D2czMMGTCd4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1TETwdj7fcWdAyaPDAVe4cL6yYfKW2vMyEcFcPMzMy51rmaHdx7uf9qiGG98ownkAJ2fvMF8sGo2vZFzK3r77F",
  "key1": "3RYYkXCQLhQnopj41vqfaMtAHJi1ruRxQZD32b814q5cmYtRsgT9KtiKkDKME7S22ndtXxF6crBX8DJ5oHnHHmAJ",
  "key2": "4v13qrNFMHrHR4cWqqqh4MQkxrrb5Fcofu7XngbPtYYJuSCdhymDrdBtN8hbDyCQLkGjkUVsRiMBDNPEyvMNmtKs",
  "key3": "2kcBYUNM6EEKz7Sv32bFQKprHGwgmi3sE9ZjXEP4arPSemztXbQMdQAa4RD1s6i2aofN7dLTs6aPFH1sjpBowjks",
  "key4": "4Ly211t39bhgAfEU53S8pNCjnRE7o1Ji4pHcdavgLaHCNf3eBoTiBRDFKxcBCztYn1prjDKSEAy4ce9bCoc1UJVZ",
  "key5": "5xubn2uaC6c2Eq8oroKDNptV2mqEhbxP2c8oFuYBCPQMrYfr4gtsNDfjxokVcfBZjhzkpnUuNCyRuReJVzdPqozR",
  "key6": "5oaHtVunsFrZ4FHbfXtL7kvrQ3y9Meh51jzKUjyfVjKZuUwUtLyAWxeMohq5gug7DkCx4zrjkwQmJe5qp4mzLsN4",
  "key7": "3yCMoKEngMUpR8BbaxnDTGoKrP5Nf3TP4XAQHDx8krcEKSufxAsLWBQNN1JHuN4yX23fbQMnfrZRB3uYqTeSroGr",
  "key8": "4TL6Mc7D4ZZzqEWYs3TFBdx4HLkQEXJQARCKoeUBqYBpTMGP8HpSRagzshJroCZAxFdVuTkSbMsXsihuEbqQYS4c",
  "key9": "5ds3fSNZuzFKVBNFutGrLTosn79nNG5nJPBUtCJUvxt1QdFMkHEAd9cDPjftEtFocXSs72sQtnCAEzResvDUh3Qo",
  "key10": "2kg7j1sNpbdHryGUDNZ3kTncx4jHFuWdxNM6EqerUBjbYwkmRYa1osKSe8Y1nZg2E1uncMm1fTBmTTBAd3yyNQ5Z",
  "key11": "6Dj74VKbqQRTRWQLmsvsrPSqsQU5e5nhAZd4U11DbauUPQcm2r3d7YvFwL5ZKbApCM6mXYFLhchGr9bVuAmtjYz",
  "key12": "2qzHspTm2HUu8qvurg9G2DdSsRVTeE2mVZC3Q5Xhxvw7rbF8Z1P1eSFAMho27Ez4CC4yKAcTPXZxEquL5H6tAEnu",
  "key13": "2Eg5NrgFNgY8Cp4Meaq4TFPcnxERZyWV7tASAZYEb7D5dVGKoagZb15JgDfMGFPaeTV7TLYEtuHkWndouCCJePXr",
  "key14": "2ta7LRBQMFXTwFxxsXCj1rjzRrXydCAK1Pf1qEXx1W2KJcHXf8HvLDtZxeM3qpL8DQxFeAjVVgzqQKvWz1z619a8",
  "key15": "5LP8A68dPsCbzFJe7Zky89Rmn11jLoR45JzuFSCG1dbDnWncTd16DS7pAbHSyq5fsyb4UpHMY9oGsoGk3S3zTi3",
  "key16": "3QaCU4723FAPAniVSbpcYhbYd2sWUnGiJmAi2vLHro2GcEmVuGSMrJt3nsSAp4BCjRos4ooyaJt8orwaXeBHQzAu",
  "key17": "mk7fbaJxbgz76a8BxptEzYTfBeVDy571b25Q4P2XBDG1EZLxLVKHHEHTWhMiTHh9yqLuX1eYU6VGDeMpH8R6Pka",
  "key18": "2ZHjfnc9WE16AQi4PeBP1Hd8z79A621jgFu8x2jXeGNYxuwwKTTyT8ZakSPU41uwHWS2nKa16gDYEjNqMsr8WU6U",
  "key19": "5qMn5AVdKLGQZqb6eywvpSi616Ku2we8YJNmx9B3tfrZ4cEpyVA9EPNvttWDj3nhzNT4qvbeNqEEbERbjXZDacuq",
  "key20": "2x63BPcwZ2YgfCVE67uV4LjTVoRW9VS3Em2eMjp8oGfqznNtB52cSTcGNwpcQhCDoSBcgEa1xjLa3mm2W7KtNxhM",
  "key21": "4MRrFs7kVSjoztU94jAvfg44K9jsTtPmr1jkGXCq47eRKm8BLNEEfuzxpEUeWKQbnaJ5msqhJBPNHMpNZiuingsu",
  "key22": "2pQEVCMons3xbAtrbc3vDpocbGmH4YGMmxzTamU7ApmHzQpJFekdsMzRQGJJBsxsq6gQMEam4wFBaYG7LziDcxFW",
  "key23": "4Li1dU5UjKKuRjxkVa3ARyaAorJvtbsTFwGtBZLZrgCEGRLQUfCesQKui6WCo8ddFWb9brdKXXTCpnopKoFa6FZg",
  "key24": "3fYv9yMeahLEuM2RP1PmaxGV7c8t97wJxD7rGp1rKEXPUrJ8GSEbiWbHp5SzHwPHP7qpGXJBcasDBAucPVDWaQHh",
  "key25": "4n89p1xqzhnATmX2kGBQ32u42eM1cGfSuL8GwWVQLPRSmSsdjFRhmehF1HxVRq88HrPiJYMCaRWRYsYao11J2QVK",
  "key26": "3myYv2ZuyqQmFo6fZJ3VKiVvYyjyHzESY9Dfo8X8tnk5fDcDDJ7YAUPimjiKMbkgdM65t1ePsDV51d45tuzQNM8H",
  "key27": "49nqDPyL3vTAW9P9h9FpjijczrYKYcwbD5DihZY4wp86DXo16sNnSAbcwTe1weadBas1n8CcBZVKeVBFhgp3aua7",
  "key28": "55AFh1drpyh7wYUjSgR9UrzRnBAwbaY62r3uTCvvX4rTNLs6RJAQmbJoKD8jbX9faZkzSF4YaewSXivrVTGFUdgo",
  "key29": "7WX6qtB5vJGuUzjnMUj38vPBMACrNe1YTWj5wT26rTCcVFvmKDS3pRDuPB31wqVfagEiLjzchMXrzxbb9RiUKKE"
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
