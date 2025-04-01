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
    "qrTwEHMeox1PsDYjbtvYL9DLJY6TLwoVaD9faGnFVFGxGYs7T8NABJRLQ7oQoYDE4ZB963S43pxoBjz8B3EubGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PD3tX2GLCAnkptm9cJ4vt5mSw7sKzd9kci3m9cPR5GzL1xhD4wZFPNC57Via5sotrsGouEPQSRkp6pm9rP8S9mn",
  "key1": "5BowVLzgBJnbbQWNaGMqN9936T5LLyq7AvSsidwHRDgSUHo46pv5WbEBra9nkrpqbrPtuwgWirqMjZG9W6ND6gT6",
  "key2": "3vU1GwLptALBPSN3SZ2U4oHpHPFvZ5PKMp7xnY5FzJB2AesG2PFJzWWoKDA6MWkHNaz2ktFipGyBKtT7JDBfUeoc",
  "key3": "kgdx4dohum1bsn1vT5exoVdG31YqXjf1rwwpbdDtbCihtq1tD96VeEWyQEMAcYpXEyoG81uptVgbLCS8mkJNxNG",
  "key4": "SQ5LLBe5fW84dE9m9YkXwovsT9QLeZo9V9pJUrVoFKg691d5LL2uESLf3xVFa3HnRtx1EHfL4m1xUAstxNabZmc",
  "key5": "3uJH94o5PzLpQUvKP62G5iuuDTWsQA7c6oaD7CKXFw7hN2wYFpSnnZtXDmu6ZXrshz2XyfrCV9Dfq4FRKjSKJf9v",
  "key6": "5JGX3DebUZY22nbuuATHFHF1NiE1zfEBJD4GY2PTWNkb8ntDMALu126U2VRaczyPCuR7fzkLKprKZBbctRN1ncJV",
  "key7": "3TRsRRdgaFayEgTM4emjEEf5ZFMFWiZ13Zy99tR7SfLHk42CnJymFLU3CQi5uhXM2AwJhHJGYvU5frxYyxLp8YfA",
  "key8": "2HFU32ymeZa3ujnpQuKycjXNHaUqoSwFgd8zs6hPRzGP6yvr8eFHaPJxBL5o9dHnF1ot8GQM2VXmr835gVXakocJ",
  "key9": "2svsZjSzKCBo9rUDyMHRdR665GZJDdUh8wmSvCPzyv2RiHxWEpieCKXwpC1DcD6cts8L7Ua4u8RPCeR1g4Akf7NS",
  "key10": "4MJ6zyvs5VvmJJjdHmRqBGheG89uEFxvVW7TtmyuNaKb6dd9MWYgexaaRhYLCNsH5K3jo1nqF4KMEb9wcfYcmr5J",
  "key11": "2UA8vLssp5cNAg4o6CTui2XPCRKmA6J9TiMgDSzBC1MLzEQcH7B5DdFHRx3c5YrBTN4WcaH8ADmS52xtCsgc2WvA",
  "key12": "3xmak8o65Ab4Zb1jFVNeb5y3tGTehsPK6CKeDk5ABCpiyfqKNJ6ycw2Au5yjxYR5EzUQZLaxdYMyq2U1bzeeHD1T",
  "key13": "qyqr51pwdysTxPsLaMmqFn3sS4qCdDN2jHLPosfhM3Xjj7imAWiePsXRMgr66NhLCNCXCojupG7x3BkWQCqjqEA",
  "key14": "41C8ke8FeYrcpZxFqZRm3VA7pNvczg3r8iePTbm2TLPGcyJFd22S6kSobbZGrquFSes5GjNp4A9M6mwwXhipw4im",
  "key15": "291BQnzUuJDJH4ADPfDu2QFm7euAZXeJDsP3Vajdb2FSAGsJiXBehpPqTYaFJvXnwF8b3xdhH6mm96YeM9L7PeF8",
  "key16": "5JqsW8xvikrAWDbQ4SpGfSyiiZz1RkxQ5mBevUdfDQJ5r3DkASGbAR2Ui8ceZywKZ6nBM6erJXxkN49VEFER2UQm",
  "key17": "3tym9S4CLmewUHbBAS5nmctZevhtT1f6Pz5hbjuy87k7TBgMdmb7K6i5yzbTzNv5DjzV9hJX1giaCoNjk4trkonS",
  "key18": "3yCUTFw7GBFuRJ5tu17Be5q6Ruts4fLXJ5HpqB4MqeWDmsLnt82E7aQN3s1bdQb4FPLTMsxuPKa13PQ6CzCriKxg",
  "key19": "3ryVxx59W6anTpvb8nYU4VWChtgRjiPP9eQHveMS9WcjZB1y6WqvRMYoN1m9RN3cfN24Lw1JzobnR6Vu1h7F6Tby",
  "key20": "4mzckr6J1Z1dMc8nXiwNZisTxhbMqFjyUDR4jRRKMUbR4BLuczzZRQAgAxckFFHbkuEFt6HaVXpG1GZPMgi3ukUV",
  "key21": "5Etj4fY5e6xnnhwj3A9a3bbFNooFBkAQcDM1fozjxcBydFFUUauchaSh4mvBhbmdYdUuCpSfaC4F15vQ3ZA5yN25",
  "key22": "23yHYPtcMe9PUn71LrnKsAJ4y2oSAjHW54cdVB6PFMrNaVHbDV6YMtFgP8abjNooi4BkEo7mNUWpnuLnwKarA63P",
  "key23": "4DEVbUaGf6vAV2Lt3vxd83jaWe3rJwaQKa6cL8RmupFd5QBmkMbZoxjmFc6bkN1QbkZhXbcFtdBgq1fTsTu3jhDH",
  "key24": "zExoxbdpg5jXhuogVfwiE3EDz82NMW9q8EsE3cJiLM6o9Xqjy5dG6MPNwXGuqF8HQMFWCbtyMoPmfBFSwLCLM3m",
  "key25": "27phmuGDexCfZytqZTVp28VW4Ba8ii5mXoxwsWkCecLm7mdWxvYAdAhkubcJYT7DXxDcPP3ffVTZZW1MpAoatVyT",
  "key26": "2xtDmUkoVxwQBp1Nq8wrHud6Qq4gcgwKzfwyxcZor48s3KzQQSU4bEiB4qDQihZdBdLGsFp9PhjGuQmyzMhLEmDh",
  "key27": "3oLfCSf4xTVJr34uzbe6CW2uQvwpzRxjsR31XXytrg7eFw55hepuifvmGspfvEqbrzTcjR3JqDMoNfJfSXmkbKHp",
  "key28": "5wvKeSGiDxvJpASczRoKaw7wyYk87Wgw14hCcr1VrfDGTcYYBWHktUtCXc3CkCymd9WxaFxRfWLFm2Byzxg6mz6a",
  "key29": "52aNijjikkR3ov4yDqHKo4gBUWWpqYVzjA69Z3DSaRCxKvRW2q5VJkZF3phvqdsMHAreGqWPvzfCdcT6HZgAv17k",
  "key30": "3pxv3pir8LFVA45CTeQ88cUeuxPshdPg6B6u9w8zY1Qmomdi74GLVjcWtChyuP3wCghdagCYu3ihnUxhSjJsNRho",
  "key31": "3kDipVEmYdraZvxX2TkBSGGL5LZZUwfueN8Jxu9naGHcrphys4VmfXKMRfCM9CBJfw3Ls8ZxXaWgjtxMVtVYPuP6",
  "key32": "3JkChF2n5AgeiyhoJmRJ4njhi2zjcAkaKfpgXS2NeaY92hdR9PqGzEPkP6PTmuGQP3z4FE9RZAa6ibruvovMWkqA",
  "key33": "3aJ4AVEAh9JouJziTdxDG7U2gXK58SLCAS2muTr2BbXv1fRqCcksD8ZMgbg9JUhLxRhH1RSFbEm1DMnyZzCGLv2s",
  "key34": "wSfs2mJLb5Yg2uDhUMtfDsc3qGUywTtxdfw92GYjom5PUwJH3h1hCrwjvKL3jUmvFvSMcbKwiEejEuedQAkAVv3",
  "key35": "2MpU5EjhPZgDackbgsbC9LhCf2hJhPud1Q7C4NuSPbq55aGaJehAY77tdDyqSR5bb6rSiLzPwoksq7j3fgAGXced",
  "key36": "2HBPu4Ayzo8DEJcXQG5mLfkFcBCvsVjbrFPdTHa2RGevxbUTk7kMhzzQcRzNNkKbprTbg76k4YxVvtHM5Wa95YzR",
  "key37": "s5bCBJU7nv4ddLEWtKCZXbMSi7C9dtXyW6DLSXYfZsp7G4kqKRi8qtb5cj7XUBpCR4JeFNmBXtHzVhQEMvr6hAx",
  "key38": "3iDZMnqBJzSotBz6jBBmx37zd4zbnZ3i2cx62hEG6QZzjA9bSavfYioFYRQiG67WUX7uGMktbKE67fxjU1TnFGNx",
  "key39": "3J9Wbydt4urj8nioaJaZ9NigxxvxYYPGgLWtFrB5mQtDAnPuNLgXmbxGR56TUc1P9bN2YBqrbXPvRs2ERHji5GWj",
  "key40": "4BWdqkegjE8aDh1Je8rjBwv6tW8SXuL3W6wY24x3ioJ3uogqKbsH2Jb9qt32EYDt8Kj4fsN6okM5yZUcMgU9LeTe",
  "key41": "2aNaJhJbpgeGxjGGJPWHyx5yFLpD6LihBNrMFJSk8RrqFgQd8ZAoZg3GWz6kzzM76atjXQJfUgRZEqzo5eMCGqDx",
  "key42": "5df7ydYWkpidyUpwp9ouPdajycyeJXpCnvL1uW5y7hrRpQFPeBHNJJbcn6g3jEgtSWS2Y8vEezxfBmY8rfhvVnDe",
  "key43": "65zsyxUqEu7jBwFfoBYDxzHC7Btt8zBMiqC1WTyPeuWdHDc7epmmeKQusjD8x5TLmt1JfWMeMLreWuj7LNfewFax",
  "key44": "b7UxrzjGWRGwVoPFK89cPc68QKWBwqq8wncrZSuaQXS7ikSBjDM5vxKVnzm5df5PZEqPYLwpUyYUqzN7CMv4ckQ",
  "key45": "PtYuvSjKaZZiUV3XAhKDXXzhErNiAe5MX8VjTiv8ShJceVnNBJR3oWreCTwvb4NhZqfuqVTfrfKDrRW2JCQHVkT",
  "key46": "3sfQgcLLMdnU3TAPpURkSQBzPPmPVeMbKQwXpU8gizdhY6GQruMicgub1ixXBQAtE5Nq11PZuhBTx7BRMM6v65LU",
  "key47": "3XFkoaXCVPx56PwZAD6ZHq7SKC2XvLV2M6c8P61uHPyStqVxegCiqdmLE7p6fAfwpGvbWSgLS4GaKmvv38L2rBER",
  "key48": "5PhVKatK55mwoQHFh6XzmWndBS3E53ct86AX2dJfKiPXpdq68iUXaeU6bHcvy8P7VsbhUvbrj1cxhEobMdVbWhJS",
  "key49": "3TNQQ33gkzXwbaePMdDj4d9yXmkQY6bXdBaJ7bYHF66VTdZFHrf7LUdNutCNbVSE8CdiLXT5jgPNcxSaeMWu7zKp"
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
