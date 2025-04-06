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
    "5WYkBTKau6iMJMdhujr9BBThuzCXtXSRvooyBk9gog4WwLordDqfMWCJUeb2DEZNkEh3cPL5uE8bBSJM8arBvRBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7GmNTLbueVjZSpt6z8kMPBFKaB4Hmdg9P9jVe2y6zedkQQ9BvZ1rMQpCCvccNH3ScJFm7y3RhT5gU3PW6TzFa6",
  "key1": "125Eii3PnNjCU2SnuicygZDjE7f5wn1Vi5SZJMU3tbUhnqSFwhBjqkm3Pv9LFmGY49oUTCbxivYvUJpnp7TBJsPr",
  "key2": "4VEuAXtWFASuQuG6K8fC2FNKPtY8GhWn1MKV6YNdE7YHqCCJ4Mcbvsvk8HJcYdCZPpcRy81xZabxxFhip4udXQUH",
  "key3": "4Z7WBpw8DGNEe4yCQtA2t1ggQhmYFG78CsckvvMCafDKYwKf2Pui3kc6PgGGbrTnsnDyzBnMuWTUzSXB2VhQ5w66",
  "key4": "4q5Do7WCs4txap4STopVrKkBT3vxRud1WW31RJtRptaizBY5pAhpoqMou1P8tNRqz8Pd2bXqZzmNBkMvnGy6GPWd",
  "key5": "2cPJKYpVr4jNeeJqyhwcqzyc2SbuYM1H7NUwWgVhVm2s5smw6pfsAFZWVvEBDoHwTwq2Methseziy3jNoisg7aqG",
  "key6": "5ZhuawJgsKLVL4oBFwtAz1UNbXhcH4tgSwFK4xGoHT76w93gnnFadPYummVNZNn1FKrSrt7FFGnMLsSmzDyTWCi1",
  "key7": "vE7vWHZUKdUShRtWyBMAA9oitvGr1m3iV6ww22UzZADnj6wBXFzXrsuD6pyRyZRZFBT9VLTBDrV7XHBQ3mxmQEU",
  "key8": "5hPRVhjuV1pGWDcnftRjsB9LegRd8QqVHySXYKZ6ztxgg1yn2pAqcT4mVqw2AZknDL9YQpxsoAZxaRcCvV25w8Fg",
  "key9": "4BYbckPRHh3Pcca4J98AxNYsXEDw8r3ncjQR4Z6nH62pUavBjjKfHNJF6Ue5FTimYj82APFnYk9mXtssiRRtMg8f",
  "key10": "eVBpbA6Jj9Quwu6RZicNACuVwKUVR7F6qB8TFb8Ui4HQ5RHee8L1w4FuYGJ49nqJtssa7zrwbp2UnnmBzZaV941",
  "key11": "22EQC1VeqGsnNYnJH6kH8XsU3P3XaTm2kfDyq7C485Qcc1eoXDLapjNYdxitkgGLRrTD9zyVshT4iM8emc7eZQCA",
  "key12": "5RVQLZCuzFkU4QCJdGWENWd97Rh4zGKAEkmQeqNw2gsZbv88xpb7w5r8uwzSDsm4UuGU3AwWAcmQufxTwPYmQmVk",
  "key13": "wYgg9Gwe53qcDWjETijd76ePDucEKePpyBoqcAd6juEikM6FRFkKXLk9u6EPXTj2iUQkMhkGJyJfaRoB4MK16U6",
  "key14": "4vxZ3TRyUXE33MfRLPKtree76pXMZncfWCKhBd7MEcjnEDJCdjqkCXLorME2c4mB7JAR3rnbMcKcG1AMQYo5wyVs",
  "key15": "2Kfmie4fXJ8SuuHRBDFz8zxTbnocLAA9iypScitu4uNWQtVaAxMteiaRfdthkjTcfkwuheLYRBvGcicfKT5QaP6H",
  "key16": "2gjAK6q2z6BGuchGwPKcvD9qCoFtBT4FopXBUtC8CvEs1t9217KUtG94RksccHRiZC8Aer3Unct4GCRrrY7sKK2P",
  "key17": "4duyGmDjdCGzNCu9ZFEhUKoiQSsbhojG9GXwbG7ATwurB1ue8F3whYH7KReCdXpmNQ6p56ZPWRh8RKFVw7qxxRZC",
  "key18": "24stAuCabaNSAxbEcEB6CbCNCBtLKfEeEGCnJGdw4sa4Gi1uXD5N33Sov6FAQdvWP2NePkfGciFWifxBWUdwLZYV",
  "key19": "8iyeCQdp5EXLBMEYijaxfevAioAgp77T7nxx6AV8P9RkwSsszWpqzU2kmeS4F1AtMtz1unZUMDH7TU1336irmWv",
  "key20": "5kMYLF69tUKzi3j5v8N5jZ3n96vpCRs44h3irug6HwZKxFQ7sUsPokBzdQuNvi9nGeZFPX2fkR3wt3vBBXkQhM2h",
  "key21": "4fuauSoc2pn8Aj8QPauDUdMHeV4bVjDq8cfJ8UzvehUDmGb9wAKMSAyow5u95xDwMpQtqZzkzfLVoa29nKzMxh5d",
  "key22": "3CgWRYVxM7eygfJdN7mBGapky13UnHCEGdqnUsnND8PUxqKXLH61CfVVP18EMNCY32f8Q7JFLgqX4AP1jVyP5KPo",
  "key23": "B7L3hSRn282uuMcRKVXHE3v5YL2DEay1foF9cxot9bXRnES74p2HaRcoxQDxgphzcSBRvxQaTYpmDS2vbyGGaGP",
  "key24": "4y7e6DNRtWU97LMvpyJ5kQifsYtQa2rPTH74SewGMksKJ9quaZunsnN6MGrq6mC9bd8bUej64NDgDbUhkQ9KGakR",
  "key25": "513g5dcfHfL6ZJHZMuhDKvt4C8qTVTzXcRzTEFbNnTdjLW7EaLPnsN2hjDes1hySsbmUGtcJBHq1NPUqVbCBtgsr",
  "key26": "5bxYzcNraWjzKRPAiMqhcSce912rfwqGMuJMjXB6HZ6hWyb6N9H7C32aRF3f7WUMLsmuvRa6v5TD3MHy2P1DPk7r",
  "key27": "59oYxigVX8LiB76ERBYXJFwEMnpqn5YQchhdTMDawqqrvEuLtskytwPPNR4XSPagvuHgpxtWfQsD4HX5bPnQbUdr",
  "key28": "3AE5SaDHS5iJzEBLRTCJ1ygcYJnohuD3aNYqCQX97UuoiaRrDmmMXiRtjqUx8DPjc1mSKS2eJryAPVvbPNRE4Wkd",
  "key29": "4M9BxomjH4VRodE6WvLhNCQCQ5g483BR4aEPyMgs4TVZvJW7iNgWAUbSBEhKeFMuwWWmfC8e6c7CojMuZ8HDYGEA",
  "key30": "41fTMyaKfWKJK7cKe9eRLhcYp9PpVtB7CpEgbRm7XuAWpHAkukXXEcxxjuiZX1Bp3sPoWbPRSd31BNFh65UuWRfH",
  "key31": "F51X88Naa9xvr5E1fhqDBg5S2c1EjmrSmTFwkYJxT6ZeqJXvBgs5Lzzdx4nsHMTPW1Aj1dD7kkXk1hpVgFg7Ae1",
  "key32": "ccPPN82uvZ21399qDZ9hhmD5Ykh1hpZPMnN472Ji1rP4Lj4MKqxqpA55WxXs9vFuKMQUnwJG1jjcyFTRCqHDVVB",
  "key33": "HM5fMfBaUHYFUqqXSSVow3gtNJ9xQzwrPfARhEuf6tjegZGigYuyMhjDtc7hvLE3iSFpxKYLmcjAEVtc5kSQA8p",
  "key34": "2eCqV5RdnCiqGwPNEAHg8MV4Q18YuaRuvR1jgpy91CcWeERdkuDQvnoMoEpPLnFgkdpjDbLDvjZRZcDGaPs2VHgT",
  "key35": "4kwe8MNkMWGSwmVvbf9Aw4rAxP54jpsXa1pz91FXLLs9qe3CAFPg3LUgVUojsdtU6aBRyBVSzZiTtttERdFrnnEW",
  "key36": "3MrSFUYAim5ZH6AiFEHYTevhoMXk7kMKfoPYcj1Z1U1Egbb8UNsnUgXQZ187McoduK2jYLxK6HCJekK5Cdhzq5Cu"
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
