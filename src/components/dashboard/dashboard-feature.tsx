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
    "3PUkp6NqX5XTjZdybtFYAoCTMu9FyXtm6tb7mNJJPCPaa2S5JjRfbbxHmMkFiaxJqF125yc27vky4h57dn5JhDy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2qZ6JFDR3tfYUx3oNmj9z3Ua1t3czf6veJ11e8Gy8QdJ4djFsVUCFjY6funnYHw3hEJ7NCbFqhmCGg2ZibchSm",
  "key1": "5LsSUMrxgVoFZxSuMbVtwwzeS6rLmbsgcWsgQauAQHN6QEskUQ84wetWBPLBTZJE9y5MKf2Md3Gb8sUCScZkMWut",
  "key2": "GDwvXCx215HyDnv7VbcGMYmt2E2SzXrvQXP8UjJU42tZsYgqmLEsydugYx2mbjBekYjUnVAL8SWed4SYeNuoq66",
  "key3": "25awCPxrq73tQsvY1kDVcskajUhWJpmPPKFxvDDHChi6p6oEMeN3hcdPFMq8N5d4pTGZYD89Ktf21samqh51BrUT",
  "key4": "4jSDMoCH685buGfv2m56xaSCdgznAJdLRQCtb6PpMMadYjRAqdPMtkR6psyAWxU69sFyueFzXkpocj6mmkwgVsSR",
  "key5": "65j2kxM4pvCmKYDxaJkzh9wstAWyhLJeVrLnLHVbXYbFVVet783vyida9c8DUNhQ7akspihBQJfPWGFHgzsAUGNr",
  "key6": "RtFBxRc9Hx14pgaTq9VSEdSEV9CKJTFzpCpahnCfJXfLZPjrAUwND6XWsh57BXehQzvHhVXngpVhnD78V4F1FLy",
  "key7": "3Da8CBKK2R3cbNaYCeRdBuYbp3zVRDL2t6JZ3V6qAnVHH9qURZdvTuySdecMBqCzZwHgfUkqavdAw35cL8aLdLkJ",
  "key8": "2qdkbrRoKCAQNLo6H7nxcvHJQE9PfVdLytdiMvGRLT8grbWgtikbA7EDQYY1yPb6oVP9Nu31Z7ipowVoGxL9bnbQ",
  "key9": "4SBWAM6CLginY6mFTyJ5V8nM7UXc7MBe6UkYp3Ajwb4VqEeDXHdVGvdS6Z6beJ1bbHYG4F7C4XDM3GoJ1wwS3q3R",
  "key10": "38dh4bXQwuRxKb8WeAA3qXJWdB7HqBmKjEQnPTWAr4NH9ChrhxpGXGAUZeiLssP99sv2yhtPHgLk1DN8nDCYAjUU",
  "key11": "2z71JYWSMYGM6DLMGuQaYPa2cgmv2n56h5byUgqdGERTEaVjNy74Ny4KiAiHZPk5jUJuaD6HZL5SQRrk275JX5dr",
  "key12": "3ssB1nkaqqdBbfdL7hHENjUyNNogZU6Pu1R67cLLygckG7XPmPw3wSKFob6r3S6nZ5kp6DoQ42VXjduvd6YAbHXD",
  "key13": "2MAmQsNB3osZq4PCnBBv3U64ByAgc3czWkSxk5FcnunXTfubqmTT8stMHPRw8mUXRErfedd6WLasKdVzy5mNSNEt",
  "key14": "51e7nYPp5q3YKoDFJpvLaamr3b41FK4WLmhzh5hxBRnYYYEPKSBVDrhttcqGRaQ1c8WjsXZVLJcJa821HEEu8fji",
  "key15": "2VUtkeiWcfbxmFMUv5q92CofCTXSm2YbLHP96qa5tWXpW1fPpPsU7aNLKA2UDtCbcztU3qAKcSUdDqFMwaJ2V3Ed",
  "key16": "fT8LD3KaPJekYvPkt34hMpwMEJU8E7D7k7XmAnebhbo1TbaDo9LYiNynCMpXJS81KseRvUCB45Ju8XKwr8reU8i",
  "key17": "3DGyqSrPag69fCJSGG2gw9Bm8HZhdPJzse2ztSqzT3Sumj9Mr4bDLAGs61NqiHoFveF5x9abCVPSBKXKkAfV9NtE",
  "key18": "2g3my7MKbK1vpT39ZyN4GkNak5fKh9bJkav8nx9GhTTmJszZKKwx5g2DLLybiJX5qWaWubaBe77JCi4LyuaudXtK",
  "key19": "5wHyghqLB21tDhqQvJyFvBxJmGik3WzYWZh3TRhAC2D1wTyeUdzSQy7m3KCE2FniRC7hrb9fNEqt4ZE3bcQvuJf3",
  "key20": "4dJtwSCQXKn24qB8XxZjUvggSm7s1asAXJtBSQrdvUHKoW6CWMeqdzcybBwjgzcVCzHoAx4V9i5k54r7kynznhgX",
  "key21": "3KD4yUhwgsjwGcEETHZgyfCk7UQBBQBM8P7SVeYUZ4mApoUDUHPreZBgDUug1BT9buvdpNvGS7ZVvfkgL52HPEwn",
  "key22": "3NsQFtggVxcryDtdcLGYMGaTivBPcd2zDUxkQGhA1MmPuvKc84j6LwrdAf2EimE7C3qUQQuU3LQ1Be2ZFvCdvMF8",
  "key23": "26uf1nnFmrHbXdPqtqEocDVRweySJk1K4FPbzA3QNFkDmzW4v6HyeXWtv7zkQaJWQPhGS9WYKcb2X9bQoZDHPdfD",
  "key24": "4PRjoA4Gje9ijwTct2DeL2pJvocxkJp2GRb8D18rP5axkzn456aqxhAPQPvSRbFbvxUCpWUHuh1HbAWPtZHdRWCu",
  "key25": "5JxpqEqRA8gZMh7LAL4JWjf6SERzKdwcoAVWuXTyXRdMv2cFHMRFwiibJBkXcbnXupkqhRau6orWVh1LncxTZdos",
  "key26": "3ax87JcnTuk3EfZTmpmvrAwdkSBLJuJ5C97FWgnpL3RCM498hgy42aTSn9LHayKHHkhBrGL8ThYnTE1jSzfdMG7S"
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
