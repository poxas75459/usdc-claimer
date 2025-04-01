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
    "5gg4ze594gLFarfXCDPZBiw9z4YNN9vteqePyQBuFCEpinqfvaE5rvNEA6j1ABqHrefFYJ49ZKD5ghJXkabhsMfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPdMfxHS7q7M9xrGLuWjhXijiVkFzn3DAb7JZgJRHdKYeHChXsobQpaa5AhLn7ZA9q9F5Y2nL8qwcYNA81tbNmq",
  "key1": "4FhYMgevCCZbtSS2twfHmm53Qri4PbdeGPnTMUHid66utnDMDtyHxXCiNc4jYxngW64XtXe7qH88CzQTCLW6dR4r",
  "key2": "4SrUQKjCBxGsm5G3BcherSgCKeu1LtxebmxkHhcFAhrXpXQrEvNApAPwjnx252DGufsRbXX3YkUtigxCHRvsvA7v",
  "key3": "2rKRa7bQx2cNkQ3e13dSnGFHSTCzjmLi1J4v1TZEcvVnQhPd6ZpMVARScmvMAcMt2HHj2PcmHokG7oUDizJ9ZTtg",
  "key4": "2ahc6DKU1E5tj8ZDhNpt4Tsa6AEEYJn3oJcsZLQF8HAHa1bgdvAByhc8pbyfysKSti4czX9iLCUzdUcRTJUimB1w",
  "key5": "4KDAF92roG9ePonnHDvxooaD4MY3BbDs2EjV9Z1XZg4KCMXdzDW2mGHBFt6NDizmxtyd82QMvKwhagRwXaDW4eM8",
  "key6": "sYLQMCDNUWzepbMym8ZtjceCh39F1ieH56Xz7tz1uDe6sHrGhVxx7owcJvRPMRdc7YZ5x9vbjqUEJJKGXbf1PZQ",
  "key7": "3Myu99Lm62fAvdb8TixknbyQhB23P1sySdrgLjTnScB8PZkfiLebmYEgm5DzoFnkfhJeQbiu3k6DaxazFhVCq7pF",
  "key8": "5jowXSSb3mAFSZUCGqP34Vs7AX16yUSTeS9ysYpuTweWZkqcCMDwiFMnPvaPEmiJgua2LgoMwrxWai3C3pJv5qRc",
  "key9": "3es5AE52crPALWq4WYEWHwDLVfTXoMBSWE4NoxWz2em2QjssQetu36kQrwscuuUqtCcqdCW2e3SSkFcNDXmWFSaU",
  "key10": "39UkLDMmF6x55sLnj1V4LKpJtrzpCWo8TyRhh1zo11aiDq8Kc9fEQ88Gg6S6uDvbkKjdv8JNgpQqu1CtZq8TrzbU",
  "key11": "2qBzKuTd7w2njTGkqj9cEWM6Lz584CY15LHza95yWFonx6hstp5NbMKSyG37GLUnBPs8ptJPMsWricUDmX6jmSWo",
  "key12": "4wCvvozWo5nLWidPpJKSnYfXcAviKL83w1EU3dMgVWD8WxNJAEeKdG9h3575RPw1dW9TKxA3MhST7Vw5sSLxmiNN",
  "key13": "3vgyqFsZivRNYmeTYa1YQqozm2fXUbmHkAtorm6VQCiRVM4JNGQLKQ4DakkkxFMqTXPox6RY4ookVGqKB1P3HZ1",
  "key14": "3e5bFThckFFhBycU4WoD2gVgcu5StfQitdseS64SF2ykjH2L3M8ULykdovQznmEDCV95d4NDhfDmV3KLjFceevyx",
  "key15": "zxG95M1BAZ3bWtWeczuHyoQV2DXjhTpJvEaEYTPk8a7fo8k4s6j17td4ruytXxuMhLozkgtU4mXrXNSmpa92fx1",
  "key16": "KpQ6hBmJmupugDH2Rb1VCKKS5n521Ur2icriGJLEbc29CnzJSheMPFBqYQTx6x3BSdQXKgVHgkBvyswk1t7tHgp",
  "key17": "m4LyVmmZkMD6dehb9oH8kWDLi2zNYwTqWwF8gVinW91HAPPU7BHHu9UrUYhL5oCpzJa664iakzy6ATLigdpfZUZ",
  "key18": "3nPupYjSs3wMbUQxgXPDAW2o11cyWdAZniPvjUjNwbPYzdhDJc4bYSvwBChPp2TpQbu2sfdYtTJQnFvQ7bFGx4fv",
  "key19": "2gfizkBhoFAdDRSkGt4QcW7RMKi2T3cUD8dFtMH1nnngUPLX4MAjFdCfZGWPFTaqsFoTcCY5CZAWL61vrvVASsX8",
  "key20": "3KcKnujycphMMx9dMzAtQ8WBaTZM7nhkLQaBjPWdd4tkD39SaAaWtriRFjBGvaBbDTHWuotc1xaDGLXMjkvRJhqd",
  "key21": "5SPzP9T9BE3GZ7Gm5XNFWsmNBPYgV9H4yBphqGCfsv7Vse8KnesH5EfxEG8LqHtv5nQFaCCWtUu8PjUovc8XXVfj",
  "key22": "2WxneCdq6XxWQsZR2vLsZoBMEknD4VnxfosxNPYZhaQ99NdNYFwosvLHsRuu1FADEjsHHcPtUhiLcDrgfnvYRVnf",
  "key23": "4cr9zNjpTkUMfK1S3A4YPYyTF6p1p2aj9KCN6uKV1FccDpjjaoxeGXSVbwGsDYgi328YpeoVqqNnXqcaDRBiWRYy",
  "key24": "fg289kFDwZUSvZiJHFjDe7k7EVm26BCpQLDr8KMcyrrAmRznXfihSbG7UYbHkHpXt75wRwQ7sebyV4BqVj1LtD4",
  "key25": "P4FwTRMxibqgdwm9brU7Kusf1wnNhcqFGoiT9jofivBBDHzqjqEZVywqjTP3CKN37MXGFKHKCqBVJzKrbQE4Qzj",
  "key26": "2qiEZWiPPSSK51v9TKAp5APQxP25hrebAzDmqRXVmcnQSErghdNwPpEDkHmsJ7JwkCTfboM44GnSFeeHGr2oR8Bf",
  "key27": "53EKbmhPT6WL1F8TfBqHbvrzR9edPoYi1gKfdGBc3dcTKzsh158cnCXT8Z6i4t4Co5HvUMZaRF95Zk8FzLF6VVi5",
  "key28": "VbY4FH3jLJD742rpy8HKyLLuXHqhrHXs3FBwkintf73AJzYWfw1JWM8UTxjKrcugPJHNwv1gA58DpVqRgUYHjK8",
  "key29": "4LRukGXQRszpi64cdtQfvwWGn3n3Eps9Jvk2gE14gsFnHXKhMuFCv4xvvhWtafvbrkBoVRPyckYWrq71wyyV9AES",
  "key30": "3ctgFNqrgu2pUEmn8PLMR42E8QG8bTWnh2gRwi6pSWNXJmszURfFyiNPNBLxR4ainMZunhjn9XvvJKyUp8sY66Cu"
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
