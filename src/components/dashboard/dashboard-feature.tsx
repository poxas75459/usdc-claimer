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
    "44okRQ33nTq2xSPpUiTi1n5XxgJWqTj9F8a4EUtCLmzZgsQsmdzyREjKqkB7JEmMszuxbKd2QonS4345wbVzL2zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLT9SmL18pLszDd71shpoqpqRGvZgkf5YwzLa4J6tdxibfnCFiUwCFLFxZJvF3cUX8XksiFsScEzE7AYXyTMhe6",
  "key1": "2JBpc8ZU1kb4ihfGQszdQ9yhQFVHXDoqDrSMugA8PVhMUuXgzkpqmbWENoPizGZKBbVhE1t28PpqoXJEDUZPLW6n",
  "key2": "3k6LJ4MmpFnLuV4R8ar2VD83Qmgz5Pc8BAyW91qQaNhp2KPH5DjHCxZs2Pw7n8E7D5WsxdjT1dj8zUM1tAXZxNnp",
  "key3": "3U7MvWcUqqeLqh2N4Zsj96ctBVyAiYbDmpYqMfwWakpM8PArv6z9pQwJ9yqwkdHvwigDDNMktYvNxVSpLNz8DQci",
  "key4": "2MZ2V3VembK4xeVjUeynsNDPGw6CgngydRegGtP5hYqxobCj8oFDFGwcsLtUgM3pQSCEV882hsfNNytrvgjgH1y9",
  "key5": "3urmM4SXmFsCi2Qq3BTvwqWHDNEHGZScPCQGUdfRXSDb1LDVGZfDBAPTWhGUUFpTj5WcedsngvUq8QbX36jnQWsd",
  "key6": "2vQfRvUQNd6o94QUCqwvMqZMpLVdnVVv2z6b7cvD98Mu7E9MTJtu3dQL1deiaE89cQxZbkCTh2iMemngA9SzLHew",
  "key7": "3QCJsufmfLgpNjgDHkLVeU5d524btdkYLDXjTA5kxMX6JcBpHC2ESXcxVzxLmUDNTPRNfdmecQLssfP11X9TJW9P",
  "key8": "5PXSZ6mx4koB2pEYkwTN3NCHwZu71dYWtsHq3xBMJSLnZUtAZCUQkpmq1VgekpGTUJZCBaA4CC2tHziVM6sL7JYZ",
  "key9": "5XEEGQkraNszyQEYyHwk59ETVzP9b3FnLiE3QkDYRDHihn8Xz2mTJeeEGgC1RKrRNoDoisEdEnXXUkF37V3uiDvE",
  "key10": "2HLrdNR7XknMKqbkTjSDANSRtTQGTxZ71js7ajdV61yMEh1EtgwudHPXiZKxM9UH6RhfnAobRsMRuw875bQZQ6pU",
  "key11": "4qZaDLL96PKDDWjSjMB2oz9Kx9uTFyBG7d7XrP8B49kSv96pjRLxvZZq6Eqpyyb69coHVXQPHk6npDMeYH4i2sxU",
  "key12": "2YEe61WxCsWA4WLTjd5sCL1mQMWdP4N9QwdrUMVPf2bTUmdpj2EmoCdBi1eWuZLDHmYKDRCD4JgUi55WD4fsH6UZ",
  "key13": "47VuZqTRLrzNGQTs4MYHQBimvmznMGPRGA1FQU6nN1nNf8zQYkh964SLxdAPdihS645XHbRq8Z5KWDUnYBbqC1Pe",
  "key14": "2oMio2vXB8um635ibMbU82EtM8jVTBMQsZfRVNBhE6y7BeavbrTruoR5o5ZTQzBzGBkPad7HfRc2VLYhAZPjTmCv",
  "key15": "NhfV4ymSgEqTXy1k2Xhdm7XzoM2KCy9fJN7Yr2tnCtCnkPZtgEmPtUwXY79ZcWWwUU8ZsotHzNnHy3iKwQya5L5",
  "key16": "3uWDvyMGsuRKJD2rcWodJ5ZWwfZ1KoBwr7hUBXMzwgMeL4hb5kvKda3qEj6bRyTwQ2jMN5juEDtM3VytmBkKBHbK",
  "key17": "5SsF5FQXdQPvXG5D22quHHCaZtj72mqwP7kC25pJsfNjSFQ3DY7u7GXTzpg2dgUvYnGP5WE2DoNhsmcoxBEEZ1ge",
  "key18": "4EnGGykJTwGquH3HQcDab7vHHwbXu1xvEpHTsQLNbF4q4rgCtoEgqR2jFkAFAmzyLNuxCayDrzGDxXHCH7Fs59Ah",
  "key19": "2MnAqa7UyGQoK6nGoNTLAzxK6LHkBWityHZu7NE6u5a8qvrqUetVNwDPNJJSgerH2scrEdrzSGFK3Rr2eGUnh6k",
  "key20": "35uq1LjUsVe2bFUZNyujRgiLLnbxBxqQi3FPfwrs8jvkiDBbzNFjN7F6psWgqKDAdLDwrVefxMoyh7zZ7vfkpaRG",
  "key21": "4Yq2t3VVe8MGdsR5uMmAadokBkLWkLeLQEAyT24ELnk4UpWj73ynrVrDwb7eGXJZxiReez6RdMPwoaRTmawnVRoj",
  "key22": "JrvVsbiAmRDGg2Lvt53RXgYMaW8JiJ15oj5SZM2BT5b8nkgJHkeGQEWgX7EtcLiLRdsRWS1iYQb7DQsNowrSbDx",
  "key23": "58TSQqHDxjqZ3TPCknykonvPzTdL1AXzQaXU3sn3Dm4EsUNaimXabD84bwpSiZtPQwAXad2TaUhAN5wUp7bQc3Vy",
  "key24": "5pqhm36iBQjnRBcn6JwE54QKgWUZ4AQB3s3GGmuuL4aoo35tDmKGbzmkQNAWzr4z4pQ1VJm2gNBMpphFtMxA7NSJ",
  "key25": "42eNzJzbijFsyzoTNwp4wNLecDd6VBxPjn5emGs4eFQyC9pstGhrispg2g4ySuhE4dTuVPy42NBJZEeagYRCjCUK",
  "key26": "2FoPYoufEa2PtMEvdbpNNXJvnQuvoVtZdZVh11AEGQtARECA4DyyjMXZ3JAGJgExxupxe8LPHNw3cbDT3VKymXQY",
  "key27": "3LR6Vjhiw86RtfUeb7tF57Kj5TkRaPLqKnqM89iB98wz75qRABWehygAo8djEkYEWVbSnfdRwTUDyCGCwBPN92DK",
  "key28": "5k9HpfXHfwjmVHe3c4bSupLZr4uDU7EzDceWiorNHuRBeeHogczoU7TCZP6aMNnYRSiz46isRVEr71u7vhUnvEUr",
  "key29": "3ETtogGCtSuYbCqUCegRXw7nkEUxXbL1VPcwqzYYCyA8cGcDJEeEJRPwHE1FGWf1WcdWav7EHpbvWx7Umb1sNw9u",
  "key30": "31TStKVjERhDaiZCGXGEyAwj9G7fe1af9NdyCjnkMFSq3LrFDuFVMDsfVxNtpWYjM4GKNCKvF8QRFHRawCdB5VFA",
  "key31": "YL8pMiGjzFaY253RPABNMFLP2723DRwqxMvFpcytjittvXeNaP6sN26z8AScs6UAoZughnuWXSD8oS323PzyfeB",
  "key32": "62BhfCp5ogcjvix928PRfjL1cYyg4doufdg3JLQgk7nSjB8n4K1ncDm357yD3wttVsdgpVbGbNys4njF1n8vfqUH",
  "key33": "2MUbEQnAGR8tjbUwTF6b13c29DEBB9QtK6DEwmsQe6XzBq9M3YJXHwfzx7rCNTLHYk6AjYmvJYXGTnycx1sAr4n2",
  "key34": "mkaVTC5NABA8XqJaLzfKoxjUjJojFdtchnG1uLvaekpNTqe93oM1Aq7ds5bki2sb6QFeRCrs2UVbjwkkUc2phVq",
  "key35": "5mfSp1nGmSe7oZ2zNR67r6gva5kTrPHAhDP9mWTCcDepEw1wqbdBdei7k975W4NUagfhuwYE4ujoi4xorg4Xs79p",
  "key36": "4R9KYsVH6953mDDCa4by3ZXRk4hxc6Q7qV17eadNxFk2MV3uUuQ45LKWfVAnruATUPsBfejSiewrRiLnqyoXZMum",
  "key37": "2vq8TUcFNhbmpPuXDwXedEcd8DRoZ9PBkdrnnA6izEfsMmPwwuSctigmvzyC8fUeXjug5bJveoQjSYdBxdMNf7eR"
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
