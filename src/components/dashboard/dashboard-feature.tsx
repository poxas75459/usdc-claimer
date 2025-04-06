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
    "23YS96jmaQmQiiSimVsrL3YaQ56UhPoR8qiudcTKWERYbe6Rac4LbfSAqSqY5W4Nn259RCTesEBRdYDZn1ExgNgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vSqVdd89NFdn84WGFZKnj3R4BtBksVsfYF6S4seLUFveuhAoSbmdFigeHFCT6nCoHrpuSFfPKfmDyeXKHCaR7j",
  "key1": "2SwXmZXt1ZrmxPUhNMopMbAyyoX2xH2oKF6QgDSFGpKvAFLLo6bURM3RT635D4hnvY6SnhraCJ9iGB7XyfiNWJu8",
  "key2": "5rfn6kcWFn5bNZVAM2LuS1o81J722PxErqCQSxepQ91Z6v5n2t4Co8w6PT6UPWNukjetfD4FgNNTU7SVhhAGeiBh",
  "key3": "2wrEqNdwtgV3bpqMowEi4uCMYMZj6ypKTwwmiUfTH8yYbRgjhYzeF9uGiBTfF5AzYVGuzzdZeEqJdu7DZHbVEozb",
  "key4": "r9FUP9R3ptnQbCeh7DEDv1mztqARvbZWtd6b34YpPr66rEHpWrTazqkLLG949v2VhVkG5igkKrkt2zARp5dpSq6",
  "key5": "4fEpbx2KHRo4KtF1wsSp6xSPmqRA55cAvk1CHeBVcsxxfZstVxj6TMyY3ZB3suDp5gb1k8sbhH2tYcsUEcErZRZL",
  "key6": "4LUtND4jjMXNN21RKuawVazpRk7DceN3sJD8v7fu7qcuqSeGXEWQwW7QFYK5AmF226ZGqvPdLgwQ4iLs1xTzwgtH",
  "key7": "33ZkAgnzPar4jHKj386VRt4AFWRt4UsbrhSV1tbBkYA7wGYQwywRVoKkszQDS6Au7NKiEdbsUwe67J7xo97bhoTw",
  "key8": "3Cs12z2fBnUncbSeuzAN6MxwZYXNEa3ZkiPfNFfmC3Pm2FX5tfn2tvv7v2bFpJpUBsD5NQWWbcnvJiUi66VdJ9ET",
  "key9": "4nD8izdtDTKBgtEv1op8nY49WR1cbvfUqjQPxqPFYNiJzpHMm9REUvSRDhrrHLthnLFqxNGdYWNuYs9DjzeZecsM",
  "key10": "3LQvowBE6C6wdZv2ax4rR2J1uobAQWJFGgAAmhztgfn6MCRgESr9UvUGAoL4Nk8qmfAXEwDFhWRPb6naoY2hdEEx",
  "key11": "4mY9ZMbyceGHoPus5CMSL3ckMk2FVcBpxRR5uqmzVbauv2VZZd63mFfB5aMkxZcCvfady1aX5m6hhzCcxHcyGEEt",
  "key12": "24yvF3nsjGNAByWZZCQHtTRnqfVd1mYe3t91wHs84UpF1QudT25hqhDjJpZkT3htH6PZLgGvXeVmxxqH8xbkUKNj",
  "key13": "4hbTgmkiKNp2aiVeX5mg3rfXj1ddQMths3WQemE8Q7Gix57PeNrrfPxM2p95s94ZpG1vWvBEqHgaCoTY3QVtNjnA",
  "key14": "3niYaqfrD2f4a52ZDGTPrEXvvNPE72Ukyki2BWJHKqw1NCZb9cpRv2PRnY8sVoUYxLtt99seysERXYVSA4Cp4tmE",
  "key15": "4ZFnKEQogZA8jcpDVvWx4VRadvdDrCML4Qx4qU7k9BP9LvN12AtoCnXMHR789i3nU8FS2L6FwNeZCRk3qEhxfcSY",
  "key16": "4tuUiQRfMJfXCsc1q1FrynW4rqke6ZV8LttMCvgKayksYW15sVWo7a8vADJMh594qcPgY7rrroSyX9kMMo9WoFyC",
  "key17": "2c5rAKURLV9JFmavLuk7C6GTiHh8ATdonzwi8qV3CP1zJmijp6ESBSVdhFzTgqbAGvGmJXTzLkijJvrNVD1sxdbK",
  "key18": "48SKFTJMpKzEkhGKR2wtWNjm2mjeDhAPRcw8ydMRarMKawFEphTYYomyvyNwEG72XZekWaF3DJij61TGVvS4bBfJ",
  "key19": "2HWGrK3iAXTSuAzwu5H6F85T5z4tdZJLRScraREwVHYsS48EzzgrDyggUeEx4dEdyKB7Luao8uYMLDiHz2kLMLgy",
  "key20": "38YVCjp4Bqg4VPbNmwhG76NLefsTPS4ahpRu6e34srccSg1AoRpNdwQ6pRmybq6F9nG5143k2Sa1yy5DGEKSGrgk",
  "key21": "5oshRwehW2Ps9EiUXwk41DUc1oJ3UPe1TF5NwpbyfXkNAVovupoM86qq7gGA1W34z8pFRQT8qChNZ6NpbAbHVWqx",
  "key22": "2MFxog18o1hGFKBLrZt9FyDksRAL5NQw58vp4d89SEdNcRrCe9vrYrteLGwj2qfecHegvnTfBjZWMH28Lgv1eooL",
  "key23": "PxkiYELjRTZDExs8gYAB9pyDntLqA98MoPah9N2cogj1GMaHYXwnQemBfRxDgYoe1FmrpWmTHQqAiMh7ac3ULJA",
  "key24": "3J6qcwiESG3gFNFNDmMTde5L5h97hzZMcVaJXRBLNQ7FQJTjdHJ5GJsQJJrjCYRo36BWJZMaWD616Fpn2Fe29MhM",
  "key25": "4ELyxo6y2ogSu7mRAAgHDfLCj9irMjAU3RLbQZnZGSMyeT9pZpRvX75AB4hWWKG7pdW6R2k3Nofdk38krBKVZ8yp",
  "key26": "3NyesRcfnBuG2P9QD3hcBa6NxhbxQD73dacN6H8rp3aeobNAKQG6ouHAHDkFXkYcXEkUgtzCnYFAWv7y2QwLeToh",
  "key27": "F5rit5kZY7kf78FEwkqP3d6CuLAiF9z6b53gfkT9A1rcq3JAG4cuHaS21Q6o3NfmMpA9Z1EC2oP63KnLYPf8ab4"
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
