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
    "5rHyFqYzLizYUqmKEpLhiTcV5bVcMPt9PZECLpp9mkue43diiiie1gb9xAUk2v1BuVfvrZMvoLsoZPbXKcBEjJKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hW57fFi5rqEg5KYaWrhnJosRhpQgRqvFPnSiwRRfKqpozsZTqtfni8m6J7gc692fX34j5vWPoVMWonsbqMKxAxd",
  "key1": "2bncoZiZKVejy4ZnqW66eU8fh32ZHYkbnVZRgSeBWAVaHV5S4SWnj6xcQrDize6hWutwLaKMKeZS4G5hj1ajFWAg",
  "key2": "5cAuKFA8yYjUx4CUHV8m4uPbt7ZZ9fp12K7SdP5EDoehTEY4aTsR1WmafvYvkHNbs7QGF8Hr1f66PZ4qr1Vx3fpJ",
  "key3": "25AJCoFCGcXbwKzAN7DwKnRKLENm4fi3tVddkt9xEg6EjPFVKj7FmtSxg6v4Xr5mmkd5L9zAXoEviijcc8TByUGJ",
  "key4": "5JNyN5LjeUhbLToK6eekSogoQARTQphddhamn1esq2aHHmkVJcvGHU9jQA8Q6PhSpWMqSM2iUVaNoUgREPxBaLZe",
  "key5": "4BxEsZ2bHyRENTVoktjcGupNzv9zNam82KsEtkJceqZi98yaDjHDCfB6MhJtuufcX9LvuyoivuCVRHASnFdVb6GW",
  "key6": "2JLtwzqM1EE47PyosM93quqyTTB6swquzvfFmjE2mcxi6tt9g3TXj9kkSc6NBYA3G75sn9cvd8v5VERgkisVjHD",
  "key7": "2gVKLyP5imigVLgA3aWpApwWhbrQ6ztTLQZesuwBQLNXgcx1PqWpRGjFBqHuSew8hDSy4U9V8usWvT1Vf9dtJC19",
  "key8": "pmKWQqdCesKd9GjkosFTDRZEv4LE8HhxB5Bi5XAsnVh47THSMdvMJ7VzjNfpGKHLmJeSckLAToWbUiyusPt4JX6",
  "key9": "5z3bkqHjvnLfip6kkPWqho4Vm4TzBjZKGbE5nW8eu67z3sytBjZS3b4YzKkGvcwJqaUqfp6Z98L39WMxtrxM4taq",
  "key10": "2HBTZr2y4oa7cgLccfyrgsdQEGsiy9MYSJJVurxA9gapEPofNRurSjBKvhtmzPVCrQfRV7pHddnf7jLrqLq4trYh",
  "key11": "5MFqMZUDSKVJmLtNALjUSmJghXBUnb58xN8bznZ4SfMTSzEc5kYoxDd5kyqU6jRVhtxGFLMpAyoCsS4HZz4TwEuo",
  "key12": "ZjDUZAFkiekrpE4rVRLWGyPpLGyVVTVyn31iVYDACe6W4z7JLsL6wAg55dQXUZFB4pBWwSSq6Y7pZRqW8PLAXUe",
  "key13": "2DBPZVG8pUnvxfuDpSpYSAjPtDKDvi2UfSjpLJM7U8CENgpizp7nyHacEf1yYdX4FNSvkNdPG9EXpVSdNarMt628",
  "key14": "4zLbm8WSF4ox1NamLuD5gWfqpaUoRuxmkc9d9faMm962e2tvMfphHGf1mcXFx8uYstrgSqsQAgp7GHRJhpZeSpyX",
  "key15": "5xmktMPRxKRAY4zjTQtvRSJ5FVHVU4wVCq3tAWDX61e4sGvqo466MC9uX2kovqACHfAfMaLCX3mTBYxaqTNZSgtG",
  "key16": "3BTd92EUHZ8xCynweVTyH75FKnM5zk76pefW5x6528A2QVEsg2Cde5b79XHsZbp5T3R6BVQqXc8KKbSqHik2UHJ2",
  "key17": "3zeJzqcrht4TAjD2SdMytfiqgnQRuUNxLkZVfsWkHjb4VGxnBHJXrGZbf5xW6EZnarUkLZ5KvMxowA3Vpg3YpfRk",
  "key18": "4Con9BHq8JBXisaKKRmS5UEeU1e6Q4KcWeyEDYXZDcXRsZmP785zW5AKTSHQcooLN3RC9YxEMSSKkExxUKwhYj6k",
  "key19": "26whkhTZyWnnKUDRULLnXAcT1WKm3hNLpfv2hpXsJYN4Xv9BDvGp2ccrShX2btNy7vBZroaMkz1TiLsNV34VFxMu",
  "key20": "4ArF97er3xYaN7bsXdsAczp3SoNqmgJmFJzHcZL2ZPRkUrWYDQ1QphLE3P438XAma7JL9m9Xr29EoD8akUZL9tDe",
  "key21": "2f149xL8LpWhgq3dE6bCDwdMwW6jt3itxv6X7Q3K67b4akeEV3kGSBewrc9Yirh3ePYVXMVTaWXh1zxAiS9bhd1R",
  "key22": "CFkZy1PADhRoZi76HWfSMoHjB4SbWur3JcaRVJK147dgbdzWNDHkgPAhCQCZJ57L6gi5VXHZ2oUNF8NCQn4zyTT",
  "key23": "3yQui1V3nkqWFNzFAXoexMQVf3NQhmhHiVG5h4Aph89vUuwQmYPrec1d7QKa6RZ5uNDGJweaMGPycJyHxPsZgnnD",
  "key24": "2e36rdASZH5P3JVqAQuJi3sihAHyRsk3D1nKDYdbzR3ERS6h1vgHeJRCv34wq2JnsyQbNQc6Y6Lbzan5NXM99mcA",
  "key25": "FLdPgRTzTwWy7jquC2FeLTQERBfVaVMivEzpsgJ6bNnJEscq3zjHnjf9zrZVBAN4MwtLLnSsd3gsxmouSo4oJUQ",
  "key26": "4hZRigGXUfvvgRrAv5FUBtURJUZ1N23kD7MNsh2W7ATYFxuZpsKgw8qHSgjGVueF6pvWvfgQ9zg62wghQrmcbB5R",
  "key27": "2ALie76YSSALsrGBC1du5P51xx5x4Tg9h39JwKjG69dmrLJWV4xaK68XpGXnrmua7b7CZnRydfiAHSm9fRve8phv",
  "key28": "4EtYXsk87SKCzBwPfXdZWqqLtYjMokNzqBUhcwaAHT7tHxyZJmURUHxzqP2hGck4M2n1Y7vwek1HXr8pDynoB1iF",
  "key29": "5fj9FAjZXk4ryFBgvMSWXHQ26sA96svBf1zibvUNZkqGxLXUeod5vkHYGAxrizMdoXJxY1r2i44jQrrY6DTb7g4L",
  "key30": "3KCrcwDumBzvBYxCtcobAAHeWYkGtX3G3gUNn5ATUfeepeTrktmmHBxyMdCmfyAmP4vpAeAY63XDNFZdjtvng65s",
  "key31": "4zmubM5e5QrAmMypmSmDcQjoYyVKqEpnrJB8uKRXSTSPNR2QDe3wtz5pNSKc8yRYPywCas3VamcuSXFH7mwNrjwE",
  "key32": "2yCWtmLnbzpdmMsmob5L8VirvkuXfmFiq2BsciF25sbdyK4m3wpMyhvTNox7UtfxdrGsxydz8ghzWZ5u2iwv5cuN",
  "key33": "5VbQepzYMrs8wSZ7oXaioogcDK98UPhathLGuKMs5daB9gaEXGgCwmqesTJLj7gioaepNnJ3LZ57bRWpPnCuEtua",
  "key34": "CTSQf4oKs18gJdV3JGtrUU3bCwiuDHpsFSafmXXQLYhuEJFE474ch9PiST7cwUJPiPp8njM126TFJ58UG6auSb2",
  "key35": "5XQt2Qa8bmbGYUSDhMEYKjTvE8NdvZkBYBPhQeG1MhZArB2uikb84b13yo7qMpMejbzxscrFpxLtEGAfx4sxv9tQ",
  "key36": "2LrriKcQkVFm7vYzgJk1CREqqUzZeKEHNpBc54QyT4b2XxSnmSbGBtuL58hDsnXLEDDkKYCJkZYZmDesENsUdxCP",
  "key37": "5jex2dMbY4mXvSKGLYuNzig8i6aP6reqryaatJxKzdu2YmGegzYggPjLZ3faLNRKDacEa7pmb6mfhSZPbZFvUuXd"
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
