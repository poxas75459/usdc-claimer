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
    "3WVDqEBjTKY1BzHeJ6NzBKpSMi9nrLiJWTuSoKGNDydt1mvfHoWhWYDh2JEtz9PjTcG96BfmMarskKV13EVA6mMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qh3zDqQ6c5CjZXvGGAYjR6bweaBfJx5bbsAskWqaiYtpPdFw9AQrfiomzbHHm6Q2M1h1yLd3dawNuM2tgCTmTCy",
  "key1": "3JPV5e8e39173UsXUpFrNph9MNSLNbBe6WuhRVVrnc8BUmmLtuQsdt8huF4LvN5ntfyynQpV3YusQsXPzcyk7yKK",
  "key2": "3eHjo8nhBUWKY7xEAwhQ7SmgnxDxMt1T6zPyuSNzZuTHwSDVaKsGY9JK6Dwc43fHxaE9G9czEMLXt2cAtrg3RY8e",
  "key3": "3wUffqsafXMKaZhoXNRuoBCXsLt5c35qUANUVaNRkUqMUWHojT3vjrZFtoRcNf97qupi9yftrSMkYMhBh3seYhEJ",
  "key4": "4hoYsofj5vCYSY4xaixd9hQZDqjgWKsnXeRrLMXggVRAZYfxRwGKeGk2t4oXfjQ3gL75YyxCBL6KAacmuKg8JrLJ",
  "key5": "4AoesvieUiRCC4WupundVq224RPtHuwsKxYgZLKscyXhKJPdKdHigarfGGRcYX53MUUa8GnAfDxHWV3iEeBNaoHi",
  "key6": "2VERvNMTwJCYAFeSdhLzBp1uQF4XTcpab1syGCbKX2smhUPHZ4GE7hzr5JgtpphZY6qHBQLcucJbEMAT1JCo4uNt",
  "key7": "3P3kJCNESyv1aWTC334wkbTqBZQ5Fdwgm1rF63adpZcmQgymDHsz1u6mQZiJ5EY2XTM7d2YQDbCWZRPu2WHt4J9L",
  "key8": "4Ut8gRnXgHDzAzLiyKJcu4vJvM2GFcHX77S8zDBuTrgyibk5vWRdm5FVX36vCqzeJgryMcDCRmgGk3XcPbxbUxua",
  "key9": "4EGd4afQSsd1d89t6DbEaLav4iz45u497GdBDxujC7P8T3gP41iZ6RpLLKV3k2TV8AheAXiwghMTgd61mCPfuZaU",
  "key10": "4y7HercjWEovokYDcuuoQPxuwiM5e99Q2gDoygvtXTTHTwypHciXaBNr1whY4TL35nARbBogpgbQEKoNVrtc6wW8",
  "key11": "3cL3UeWgichcV9F7brMTQJKP57nyceqHde8EedntyCWb9CFyE7rkTSrxgyPMxCQSFwQY4bjvwUPAE6xfXksziFnA",
  "key12": "2TwoHu9rLNLF6dxPpMHcp8sTA531uxUwwv1cg8i2pJvcHkYz7gfLELhP8diPs7JqffXTTaNgBuN3FTP33cbvR5ZG",
  "key13": "3b2WhhGuyHdsMKiXnfV9QuSa1ckkfFe4rUJNTP5DxLH5CCTdxn2AKMsBScuVEeiRyA1VQJrwTN9n8J4yYDijKiGs",
  "key14": "55du2z7aDPUo8fDELE5P75CqgjsuTpuXhMNGi1uu474PdHip8VEx4mL5npJ76vE9TmZ2mnV8Nv2tsr9BLDdVSrVR",
  "key15": "5S9KD4DshmESyzP7zeDNgM8QR2qmdvUzZBbuST8g3Tzcx9TitcHJgSftw3ywz6eXoXB83fWrJBEmhYyUunvn17FY",
  "key16": "4g7x8fwi3LYEyVo2o3jhzrwwoeR6bUvFH7GEjHMxg2HC5kkVJ1HS1bWW4PWtT7gWsLDA1N4XMFMAFaeU2XYsnmJt",
  "key17": "5U4FmGYNwhUiKswQm2n5rAX3GWVy526BFRjgeCv8XMyMbtYzEzyVyzJuwCHEpECuLMPpoyg1YZv6t2Z411eMTa5Y",
  "key18": "QFjCbW6uDzEn1ehgBZ9fZGx4rSoMW4gika7aJyVaY3F4EXHwnViXRYBZkZaE1pcQkp9apEMtMANhPhAYAUhj6pM",
  "key19": "5HLfT1y2ndbcfxWuwJZFj1v7mgUfzyYdbkbjmvyJVap1Pobs5uCDCjz9vZ9frFnTrKED1EpP1zCtbEvwHkJDtrtS",
  "key20": "4BEZncC6cdX3faqGR4LgZ9ienW6PjaGRwZHKyVbHvaNXWBtYhgZVGysWDmHoK49VxkyEXmZmpnXCrYjA5Aot8XoD",
  "key21": "3gJT3sArPhVRav93G2NGQG5rEX9bFDnSF4gUXiz8x1qMu79RnJocfNb52L1YvJAFjLivKwZT5YigP75JFtBF6Yca",
  "key22": "4uxLYBBykxy6vP12M39SRYoicZuEB8PiieiJ2ovCW4K5RKbz1v1pSfPqaQ5dScB4mx4bLieqaJHbdYci6gqcUMSj",
  "key23": "4nzpQnaaBbaU2aNJeX14aAo7vWcGCwVYNnrExbWVFSQuXru4HH52PB1pArHV4KWDMRvW8XgZseru1iakLYB6948d",
  "key24": "2W885rhc29J2o9HhkCTJNcdX9AddDj9dv7qTijY8bvQbRcX3K3ZCpQrG47KBKATEdALjXqt9b7gXS1FnZfJQwi1M",
  "key25": "5ZBHAXFHfeadk2ypsBRyEYej3kjiDuYPtFpbvU2Ayo6JQGshsLdUnXkR1kRLgPKSiNb2iDR7xmmtQzJfRhTTXNbF",
  "key26": "5SUxLHVFqCWZHNm1uJdZn2szJZQmTifQAJ4mhJfy6kaa6gejLftccPEki8d22DJtd8P5K6sXyiUDMWWi8PiRYpEA",
  "key27": "5d2gMCDjf36F26f7WcqGskQLb4EGrC8EcNBP6u9VRtkDXJMBSx61WpzKSUR7Ek4PThXERiXaZ7JFGthbXM453PMk",
  "key28": "5SoowLkGHoqbC4x9EhPW4rSXyLjxETHhMcSsqSGpaj72R46ePLTJooBYeqC25FtYkL4koyRwQgTgkxmxT3d4v1hX",
  "key29": "4tXvFP3CfMCs9j6dz3iyj8AneL4WS41H2HueNRPAsrTfmvmptA1XkChR8L5niRoADwUwPsXNkndX5Q7sgz56YJ92",
  "key30": "2BM58YzkczCWoo57X4QaWxJxjmycuc6SQs897WnLaotUPKKm46dQLcZPeNJ8nmYeKcaZCtabxUTv8bn4uVqm7dLc",
  "key31": "5LbqiFRYf4WudGHPc9HNDcSYpFLQ8xwjbLGwTDMkuxddUfNHTcTj9YAHyyW93D9W9Aj5fTcBjRSsnfHYGVMsUUMW",
  "key32": "4jX3GwdpEohn2i4AUuBKj2do8K3BhAqKMykwLU1831siEtGUyt8qD9WYfngwXrJtNQ6CqA95Dxw1CLLvLeKfD4Jq",
  "key33": "4p4RekoirniSg5SrRYcUPwjs9qiT7YZ6QzfynNyYEBUdTHR54NEHGPvepQdKrWMLVtUDKSRJ3dsYeSqDyEtvKMsp",
  "key34": "6sxafp7AvpHXBpqSfqQjMdHfyTjYBmYjk7S34XQshnSfZztDkW9bmtLvAxW47S8iv9iMkGLyVuRmjdY8yhZsgLe",
  "key35": "3Z9GfTbzvh5atcDThLTtaVzhdggqv25bBLFR28aTwdki4yr9qfMKTPMczJ6RAmdnEsBvpwFeYykaiR6pASdcijuJ",
  "key36": "3u3nSztgewaSu2v2213DB1XQmhP3xh1nNKY8iV7LWSSsnSThmpGG6KQ45dYXhSz5TVqKBG5t97472BvG5JetBomD",
  "key37": "2UbrE2pSUPstW9VmfNju2aG2kXtMXbDQa4hSKZNaDehrNeSt3ea4VDaLn5bR2pzynzP66wYo5BxCSEghudyxrCJv",
  "key38": "5bTbfZgY2qbhSKBV16HXQzhYk48XPcvTcb1MVUVgwbfXEpRAikPVR3KGxKPuWr6533E638jMZV33CFhsArXnrh6G",
  "key39": "4V773hPSNZaPBYCbWuPqAkmx3ZXzLN3krXx2L9FdEPDWV4Si5z6y868trQ3oF5JTycM37oqxZBs4XRgMKTNcgYsU",
  "key40": "3vnXtchMZBGwX2zGWSa1zmZGfkUux9HeUzf56aigVPgPvjhSPT3Vj7DJf3A3SPjaAWkPosKmqCdQhnsVW8ksAZzv"
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
