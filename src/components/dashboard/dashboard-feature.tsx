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
    "6PQTEBeU3oLyUVsZFcWVTkWLSrPqdWLrJ8asyicVyP7A5Gv9AuS2mK2CugUjZhJXJYNPZwxeYcLVJB9stdZSEDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxzrMA2c54dJwTFPoZHXzkms4jxCMYzQLm3RjBixGiU2R8ECy3btcgNkyyqbmPteo8QfYPH5fGcFLvT9Zj5cHkM",
  "key1": "2AQ1y2zJbNn3M2TnYb1n25u9NUN8q2v8j9YorZG9wt34fMaZJxMxstBkgv27joyHJLcZ8HudR7DFtbo9MKC7dee6",
  "key2": "K64FgAZ8S767JDYfY6t61ztzK3TDswqmJN3HVcPDwpgP3ZaFZfWGEbA9mCikcxK9YLX5qCTCdMmMTyznL3UuJpP",
  "key3": "43JixDonxDCbksSLdJ6shq1au8VadQYEj6ZcrTALwgUTaZeijig4ZmhF9osr8P6wQVxVKinmowUNaWHuq6e3tbwL",
  "key4": "5Hsu17svdEJxJwmTE5W2mhLRVHmGE7i62gV6K5dECkmXhsm1BakoMoijf91rZ1FXnB31Saa8XDYcg5W3dWrvTL5X",
  "key5": "4SgHPnHQLwqXWJ7XWQckv2M22QNnXAReHsZDWeTDGXoHDKd4uLkEuCjCUxLhnEoisDXarbB5vDuYJLevJc3FK87A",
  "key6": "36oiQ8HyLKd1tU5E9qc2P9m4kWF7hZVjoHPs1shLnhPbY91zGNtEVSZfwFngXxjMKdGpFgdZDgpMxPnmDnZM6oKk",
  "key7": "Avo8uDxR6FJwiUmGDmZPWCenA63jJp1n29nKPScnhc5VL4RmfD8V9V59PVzAkYL5znTv4VyT7LP4uVnmY2C9UHY",
  "key8": "2mFubjCaSaVZDGdG88ftP6zTpesYMR6emjJcboSJBgateezTFdJiV3AnD5SR6bW8MyEuFWcsGRSAUNJ9MVTZSJ1u",
  "key9": "3Hqh9Ao4WebjpYAMWxsf8viGCBXsL7qQoBxBpUudmooqHWU1XABBf3m4ZiadiQwGEcsm6EctCAsmkjwCDAutbFBr",
  "key10": "4pmAg16xBqWVHaWiaAZNBhFyCKH4EUhGFXLo8SpJzfMbn4NXJCVJgXPcyE9mZZ9LfKja746tV4ALPWDZgB1mZB12",
  "key11": "5TMZTZ5DX9s5uscuWppAK5i856xFAttJ3g6hN5og1xskqpe2HRjVNUvLEhs4noZSrGbAqtnyccMp7RF1ujhs74kN",
  "key12": "VdcLViCboYgE6CFrLkTCtwa69BoYtMAf7cTasQTvu6Z3yj5a1f4tySLjyvbu95gYsCVbmKSFV1uHcNKfPptDYYH",
  "key13": "3YJ5utwYBYDAFeD8QUsg2G3vQJexegPFopWf3BapS4UWGBuRczUBBEczWX1iXTmcZLw5JRXHB5SyYDxZ14Q7ypDy",
  "key14": "4Jy3SjK43fnDkr5RfdXD1Y8JGWRZqJEN9m8wKJrc92s5WGUyqAmyrTEMbqYycpBLGUkh1KKXEDShyCcLoZVJ788Q",
  "key15": "5U1ZXXqoryGoHtKp2UJR1WPvcuVRWL3WJfrUc2k5BA3U4f81tmJWYebUgxme94i4D669kiRr5p28qqNTNLjeSaZy",
  "key16": "YeoHMDmqnkhjpeAsBcPPMzcAcskxsCz31o7jnLtwjappxYaaBWqfwrbaZrK74tGb3hxTgmz9s8dEV9gNpMnwr8S",
  "key17": "4XNshhyr9o2XbkRNc6KF4gNtk5XjhTgxh2fKzLBBRAzUp9WteuZKaVXscMMyRP4ZHQSpxPkFVD2vcUoazMvjSAfw",
  "key18": "3knMB95dMD9Wryn222ZjCh5woGhx58PoeCV9r5x6E438XJkZfXjxFnH4Q6bPsfkVNRT9S4dgJcTmCNvKkVE3AQP5",
  "key19": "3F1zqFJfQm4RrvErrJCtkHqJR3nUAkDbgrj4weni73SjtJ22BYVrXLFqV5rJZc7Q7mci3pZGkgkEHmUdevTFVkxe",
  "key20": "456jYvgUkByyU2oaCk6XJyiL43w8Qy3a3dFXrRYXPeMtv2hWQ6zk6qPBSqYRaByaW4L7ut9GkVe2ztKvh8xu1X8s",
  "key21": "m4KRVaJUs5Edxmc9d4WeJviUVsGTq4DjKjgoeQ7CDynBYVp3c1FUebyyoNEehbSZdENz4FcTceVkbG2pkWs1FMo",
  "key22": "4aqVakJ44C5VFoF6dZKqjiHjFedFdBvtfwo6a4NDYkt3VHKEYvBqdPNSB2ZvKGVGDdxTdTbRufb5CRhUXJZZaA9y",
  "key23": "3oBbDqX3pYdw9aQf7tJCi1RQTD1XSX1qaZLjZjkN19vfmRNrDUbKbhRFrgKP2pForgRaMXwGzDtVF5zGKRzYFVkx",
  "key24": "a1GjkLdYk5ZfU9KbsryUUEVn3KMuqYFsHFW4SYqHs8Y1bRBCTXxw5xjfNTLcGqmAoYpQAYAA2TPG5KtSX3k2GPb",
  "key25": "2LZeyDJY8YpyJ9ZA2Rp5gNq1naQ7EJLhX28HGDvxLroomeYbvmKLVpc76g6z9HQxg53ZgyzM3eo6LRWa4CNikrdM",
  "key26": "2WdhyoAmCciyRXy2FfqJn5wbPfkBKTJS39YAzdhVVCs3Wxh5winVEppmfa5d7eicT67VJfhTD8QtUgGT9oMKv3wE"
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
