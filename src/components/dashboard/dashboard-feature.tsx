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
    "ZxadhYVrbuJcbmCckDwWkDdshEvfpaEnciBXZRDpVMkNQ1ETSjFbW7MSG4QdpzX7PRFs18yAckHT1sNGWTMKbBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PKXaPPHATxGqoK6He3HYKogrxNrDw94qnMFvp9QUWktx2MGTfwvk4HZpKCh89q9RU3EqBMMXjzbMQknkb9vLEBp",
  "key1": "56oayv4Z21jBYSPBMGdrkATuqvoJRMVXVCuSWdCEgmwQgMofHRKK5TrLmmn9SxgeanwCodmWmFCVEAaB23EFTHif",
  "key2": "2AzPbm2APhFFrCtesUScVpoYYS6TFa5SqTTKpnuHzYgfjEFZaUpx72HFYBpKSAn6MVc8tysLUNCjAnXENiuy3X6k",
  "key3": "Ek5XDpJo3wzgP9KDZkjSq3u9dooZ1Uxv658U8HPyoeZpK2k9jbnoqccnemvNQnZD7KuizhzdbZRtbrgQssJDdXu",
  "key4": "5ZJ6sexSyQPJ98ZAGL5ixXKDmMyZGi3UaSpfqsuXKSGghGMaEomSvd9E9skSxdgDaMwDbguk11LX9HGzRR1d8GC4",
  "key5": "4f1mmJ3uKtJpVP3HQdnGvyXmpZTopeWYDasnpJimg5sDJLPD377mLFLisNXi3YeZ32vvHjveCdgqygsUYowCxemz",
  "key6": "33Fwp6ppkpMHDDVJpCdddoC2NJT4o9reJZqRPUXwp3fLKcY6p6vkri2FP6P2EyuDzTzvzDvHh4DiDw1uAXDggHea",
  "key7": "3Ys38PrMpuaAKf4tcT88oajKAUaGXvpmdZgSoppB1Se1uBogswKRKGKfBvD55Kn6pB92RQzwTT7ind1mirqrwraG",
  "key8": "3vf8wwPcqkUr5tSdFFMWEDEVvDe7pLHC5QVbeRWnHiX8E9weAWtUWivcbxC2onBsW8VgrfMpcSjss4jX8EPHzp6C",
  "key9": "33ZdFnBSo59LoKCXgQSJFWqZpsxdQpJwpDanmuF9vkTqxcLFczs3EL17EXtN8XRerWukYTTYdFQGD7kZAcSvpsPk",
  "key10": "m4dwrDzWPFhyicbU6nCyuBx8rYksULeFpgrtAo1f7APXBDP1QVVQsUQ9X4nB1joyeTFrLHTMauLiJ3g5LB5twov",
  "key11": "2HtxceZS9F7L9tTFnPoEErWWvLFTFHZ4i4KdmRHJmnsudoDCYkuAxirFzJzGzgRnifGj3pKrsVzSzpgv38QfqAAL",
  "key12": "4aesf3FxarQFM6teSf5CrEE5SqN54HtUWG7SeKEQ1ApxkA1qUznAjYP4BThDaqxJv4UDQyBWMB21tknt5x5HZipi",
  "key13": "5fffrrTWcHqcYhR7fvnCm2QYVHaVWRPdjyXwW9Akf1mhKkrKPXCdfZtd96sPrZPZQHfz57PNBqPjUGZdjQyPWuiB",
  "key14": "4otieVqLZjw2iHCAup9yLnaXPDjSF9JyJQEhZcJVDmsnubiB1C7MAjZ32M783LgRJp8GtoxxtoqjTqeFHuvncLuj",
  "key15": "3uNQCPDKYJhQJfa4R8F1HAWwgRrLenpfzsxQAiZXuDFsQ4sswiTR97wnQMs7Ev8G6TRtV3XguNWeWfqhcZt4bcon",
  "key16": "3Y9it6Aaoiqr8M2otzj69EhW3seye5AbjdqJYz5AzcEqjRNDj7xKVmoZtDLY3Nyh56HjvWUKu8uKqMdromyZEJGP",
  "key17": "5xDVwmA83qWihdtmeKi1zZ5GWN6drwMKiUN5jiKNhghA4UW9oxScCDEpCKxc6tQE7zm2EQekCHdn8wjjwEF8Ds9z",
  "key18": "2ML3izfv9art3p6cR2q1YQQ8irX7miD77whxfUZKmtUVmQ7Mqts1JHgec6nnA8Gt7iPBxJezeAx6zXCpjqrtinGX",
  "key19": "4kbh7cPqAWimhaqiN7AEPiDiobwDhm27VRTALfVSWJ18M25uFkoJS5QPdDcyVNC7ZBgYUuqUjmtijhgDcYzfRYJr",
  "key20": "ARexLSFFdpEfVmnxaS9BBxjTHgYrFhkGqYxiWnXpDC7Gzy7jcM3soxrSP2EeffE66W3c8ummPRpvvywcX686q5B",
  "key21": "5EJocLs9mV6TqDWMEubv27x2Dviu3JsY7gnc3uTrJdF67Zcve54XEcsd9X2rcyXpmRvJrUuT6eRu44mEdvdeEpCv",
  "key22": "4vjTrTpH72Dw1HrbqdyLMXqzVds9X7aFvBCh25iQdGX7nactujwXwvWnsmZUxmWFcQuDQbSWf8FSLk9BWBkzdxjP",
  "key23": "gxGKXU13gPd9XAWzTPjWw51bnfFu6UpPwiqJgFbgr8FRc6MoEuf1jrd9dsQKU71RBahmifpN6uHy8A5LMASowDJ",
  "key24": "65DQWHeJ5pxUdR6CdXBBbuLakAGxpSP9WcLuohDvy5Q3fjS2EwLT7xWYdxCcpF5wCLyxbaPeHHmJQLFEPK1T4Etv",
  "key25": "4ySKdMAskNiquEKbSbtVpi7mJ1iABrfx53rrAMM2nUgLTsMCqxtSVktMPNWYaqQoMWDErr65BxPynTwCbVpQ9rDf",
  "key26": "2ZBPLVJbHPhcjL1UCYfEbU3bNBuN5tDSrdwu62m3PeHa4EXYc4HVWNaGAeXZNmd4uFZQL1BKf9m7iNAWoASQaSRB",
  "key27": "Fu8u22ys54Pz1acMsxGgFUGxboPMEr8sCwvwcWthZmvMjiA81EyVSMCBF6mPb52VJd7F3pt5ZF2FnfCc1RVjGfX",
  "key28": "3aWdhyAwV1CNV4eNBrgwBMSD9JoA82RQruBfzRMpGKoddYaU85R2MTq9qcoJcnsq7Y4e2jYnsv8Dxn6Raka1CNy4",
  "key29": "4fhX3PJ9xDFm4ZZXcXgnio1cBa9wYZBjLTi4sCsynNE19HDZyfZBHQKuvMqHnZvLBBYbKA1kNXVaRe3AMDRNJ1pJ",
  "key30": "3kAjktr2ULw77YZGMj5gisvRqqzRN7VRp4aABam46i1KX44KHv1AYuzxJvRNzdkBuAr3Nk5JFkesXbuhd8d7AVHQ",
  "key31": "5byxFE61FmQMAayqegEbW22nm8T9tpfcP33ebysPg5rP2CAyEEarQNLgZpotiVtjzsc41nFzXCHtMcyxS6fKyhzD",
  "key32": "3iMqXCf42M2Jgps8iNKcoQHVuMceG78czosoLYr8sHNMr4JRTPvUJQx4b4PEbG45fevuR3cdMLTG12SJNAKoMMFc",
  "key33": "22uodm7AQ6LpRTW6Q4YFD8nkpEXppZwpYCu9z1qkJsPkSE6mYBH1twTU3Ym8quB9k3UeeZ6DaCpDkgKFfSUMpjWe",
  "key34": "4ohtT7W9bsQgQRVtmDdMRfDSFGzTqQ1bdMXLsiHhLdW3LM23gKrpQpSvhFoNyTBRPcPVRmpSpaW2cecxudDSCMLQ",
  "key35": "3seMfFrVBzzNbA8NAiPcAV46JM91NTT9e2G7eCVkB1gv9jXwkjZogvWB2qnnMXVV9kvuvvZGrUQxYkPPMEEgB37e",
  "key36": "51tbaPWS84D9zfVaCN2tF4Tx2zmYqXcLGZfHWDSKLTme8TiCLcqYbjmFNuDmoHVezCEwKjaBycqGBZkGwxa2yYk8",
  "key37": "3Ratik3Dhd1W1zn6JNsa4b5cNiqvRApZbLVKaYWrbkX3PbAf4w1rpNHwFJsw9Dx27DUfhkiH7BitSXNggxToYBWM"
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
