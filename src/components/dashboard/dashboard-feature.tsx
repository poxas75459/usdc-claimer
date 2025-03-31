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
    "SVhHgdpjR1bwxMxmZr8x8QpGVFkudNyqGmqUZmLoXLZWFC3mdn4BxoWLtnkJbqhRCXw7BBeNsSwG16Nmxu6xwHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okKcGARgvN3ePQyqJYCpYX5jo2DmiaC2ks7GEju7voeVHkCh2zrSrmPDwrZEeYnFDvcNzrsdNwePC7WF11PuuYF",
  "key1": "4zDBV6MHimd6ib2u6ywAxRxZ7hhvP24Znrhvhuiu3wfhPw546Sgs3KrcZsN5Y8NTFBJ1v3ajLjL54pjjEtcVaXGF",
  "key2": "2SABgEQefdEMyjub3JXf1dmg2hHALHL6VQuoquSZJNhEgzi5WG9sQ3PB1iBMV5d19GeYycnwft2ojowH7Hf6cWF6",
  "key3": "5s82msvxyn6ABJp8aGt62DYJLpUEYkcBehEtB6APhPmxFwi8dLKUWJayvY4WD3Ryith2HmiJucsVkNhWryAy7AVK",
  "key4": "2ssSzB9hEZrYV3NHsnFxY3Q9QT9fcJ2RrfnBB3n6a4gig41CjKi6RKzdq9Hpb6okw3ti6jfjJjWSM3KA7MW9W6kf",
  "key5": "3RFrVLnGfdqomKBSQ1Tg5QVdjneUM5drCwjqr2nvRshxcJ7jJ7n7bkqfk597Ac37CG5wAZGa4qXf4cyAo8NTBCcq",
  "key6": "4N3LKLuzHq7JQyFWmDiVegwbwLQpWpBcz8JFFsLe3dojgfC7QYgfcpoio1tWdVQUgj8yhC1kqFrWpuctZ9pJMXcb",
  "key7": "czAfP9NHJD6mPj1aaE75cstESAYA9B3Mb2RURFggHYLX5qSPYh4gTb4rDUFsLkdwCHiKoCvUSKvDGcsmnT2r7xH",
  "key8": "5CwjHxy4uTVZDWHrrPRMkp368KaY7SkUPhwt3wVxXBCGsPcxQSeigeSXjhSzF6DSyYrBN2HX2GVuwvaXPYPJMucs",
  "key9": "4A2tBbd6oLiHchWQhd3Zgu3H4KQn36nGnUvAUnG2Ye6Py3p1WmoLPobuUSVapUrTPzDNpUykpGMVR1XBtZU5CyDs",
  "key10": "QraCksBEFCe2pEYCV2qt8daBbaShFrZTDPmMr5vd3BVC8bXxx9ZUA3xjcaUNQNtuurtnvVcoK9si3Q1JPn3RAGL",
  "key11": "5CDVaUge3gJsij6SirxRgoU3uT7NjF7mS4ELrt1mXR7mU8NXJqZ9JeDM12BCdbU54DLeMbZtafsRKjXXhEQVuhUj",
  "key12": "2p8KXK4GZF6N3PFtLkcPj3U86JD8nhaUjEnqQ73nKfjYxfV9t4AM9B9ebRMF2QpbphvJPfsaMphneXmCi6nStn4A",
  "key13": "5EWoRursBr7oJzc2Kdvi3VQDKLJGXtj9XM9deAwFRnmokWkA7n5JVwZpEZZXuACoerDgFzYkVaiGBG8pQWMgKJgY",
  "key14": "2XxbH9AnUL5gsvNMU9o5EuzdTNnHVv2iSBmTPh4kHhmrGxp2QTAREiqwKYiXDodTQ6QmANpjaxLzgCwqdBMDMbUM",
  "key15": "P1d6TBB4CM4BZGKvcKk4ujuj25qKpcvb3jzx4Fkh8LVjScaXdcrJ4URX4KmMpQ2dYWD9xjtV7kt4YaC2awwx1jG",
  "key16": "2HEiJr49Utse57oLgXYNS1mrWuaTXUdz9hhtZuJPPMt2vaX1RnGW6jr4CG6HXQiF5kim9ZjduFcQHYGQ3f9grhZd",
  "key17": "4XbXTog8qHpJGVG22qVRsrvC7vRYv1JLksM3owUKsi3MV8oD8EDnEuJF17fLnDsvVja1ezb5XgoNNqAxZAhafiej",
  "key18": "2pdFXqQJ7nBsJb5taPRouZLSnFs7XxkHcqRmm3nEZtvfdF46EBGL3VEuvteFCxzAUNJPnALq9hWocGFqr8QUeqHq",
  "key19": "4Hdavi3XhZCdpq8zNbSSK8vgrKc6mE2bSnkoXwvEmhtMY6ewDkSTvHcW2Bm469Z84R4C26shLBqhTgoMZSgaqfDT",
  "key20": "4erKZNWrF5ptZ2obXbxj9cUmx4QcYsD5BmpzqYYbvTaFjUdHXZMJLdyjWEG4Q5WFzt4jy35sCTtCy7ciCrsVPBxJ",
  "key21": "5kcby6oKmsEFeui5qUHrhG79UACUQTzhsmfFGJaZ5ScVKMheWAKS34hQmpUXWnJ5FaroivBPC84Amern7F8EULpT",
  "key22": "3DyfwWSiyHQJBwbKk4eGPRauZKkoRXEnmPpEHcAYZxkxFBExHcf8WLFdrN93AfThPmk5e9Y2NLwWhRWLKVEYbGaK",
  "key23": "2Dx8seYzpzH31m4FHQHEzHUQNGoHoVX4M4VtG1KmX1au8ZxwBUkx5SNx6pieB1H9oNamUNevZXQ74eBEhL9RWLeZ",
  "key24": "5VWLvYt9gKfUcCgQ8T4aryWbb33mwK3m5mTAyVA8sxZsbj3kXasYYUg4mpBaUeh8JgnZivtp4yiajB34Cau4KKqG",
  "key25": "8WMG4kznHw7V8s5zUZZmLBNiPpdXAHs97AA5hBfWnVM8ZMazkEyEG6JDR2VJowtnNEt9gNy1vLpMaqjUd2Z6jQw",
  "key26": "2VU61UA9cTJTL8usfkU9A3cuv8PZapfbGGHZ7hJSSVv5hmjmZ4KefFQJpSizejM6TubwtjUMMXasQiVQngFgUSoB",
  "key27": "2MMEz7t1RA54DkMkp4LTC4LHYA8PpkLP8uBDcffwvMu9S5T2DDYHCc3SUcWFSxiQmVpVdKeCLnurn76KGPD2Vngk",
  "key28": "zCCWZLANYLN87bCgM8DbkpwxgHmUCjyksuDeNRYRzPzHWb3eQSdYQgCe3Neqr2iVNHHAT2P9u3D3AicCCZMa9DE",
  "key29": "2RydBzSZRXjvZbVuWyUqTPBAZhE2Gt6VoPoZc4F9B9888iS5GarWVnn3jnQg55PQ6uf9Fpf6movQFA1JkRQdjzaK",
  "key30": "2ZY77nqChSuqrVNHF67P3r9bq7pcfNRb1V9H2kCY2pepaur1vaRky7uzuEBYQFLH23FP8sqyBstZWNfiRFgcbh74",
  "key31": "5E6dgTV8McDLF3JAsgvY7gJB55e8oBn5Q4mVMKFmUQvJHRLdJ9xSBWmk5t3Xf1daUjR5e8MJVR65vPy61UNWtT5M",
  "key32": "22bbHb5vZDQZtSkEv2nZR69nTCCY9G8wBUWzsaXEb1j1SzmtjYG3A3KuVGU7PcxJkH74pw5MzfAoZaCi734rbBUD",
  "key33": "4kt2XsBqfEKZ8sdC3ooDEk3ZF6a3dxMWrW21J7eMa4sVD63MR9JyLZ7r5ZmmmmTrAWvz2tiH1L1ZaAdxmocy4TZ",
  "key34": "3cLnPAmCSB5NMRwDiVmSCyS21JqSR6uSK5jVRHtiWCFvTivDNrcpuYSQQDLCz95RoCE9dGEWaNx9Tb1b2DLJPSqW"
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
