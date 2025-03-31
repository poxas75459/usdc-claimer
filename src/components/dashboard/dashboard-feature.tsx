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
    "2QudaSQWaQaR41gDssrWwT9KpTPEqnyz4WyfBNhszCfPNrJyaVKru5RRMvK6PrG8A5u1bLJxgWgEnVyjX76VnyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rRCzDGhLKVT2tkkMhfF42S8CjMcoEBvK5f9Y6EG6iRWhzPfa6uXpud6WwZH68dnLadzfcQFhxdX8yvSmUNGx8d",
  "key1": "4eLw4xa65SK5uc66hFdnFG6cP7Zrz49YZfoDasBbaY485KkeYxSqvCt9C5opqyMEWueH9fkSzpC2QUDFh7oxsP8C",
  "key2": "5X3ubsW3FqiAy7YZeiYerZuwn9Sa3QvEPkjJ82N667wppcNsSKqfBKj5EXEp2xZuwdKHn79eVwXDsc8k1V8SCcGd",
  "key3": "3TN7akrN9PoAVUPZfdKrADkpoFN6V5cCxtio36Eu1SyHwfWyAr9x5siVRGyh85jnvvwz6BJBBBipWuFay9DTs8Ji",
  "key4": "2UXWyzaKu8farrgBWMRKnJNqSUpepZ63cjkHntTRymWA7hYz9CdqKvFQHwhA44wTVS7ZSbY7g1sk9Vy7Yg2ecvgG",
  "key5": "5ZHNmfvV6ma4mrWjoXpFPPKXnbGhnYHi3MeVDBpmzTjCri7eh1aq9n77vnFvKibPbRp5Jf3QGiU4k5Sco9Nx52B5",
  "key6": "2kbuZWdkAzLNAWuzpJKCL4KMZzQ1XvqAX5P6tnvgCAajvJkxUSN1NACVBiPN2tgJNEeTm7iVvHjXQhcfYuGhxmf3",
  "key7": "3Wrj44rrvRNWrrdJc1o35r2p8aL7ZevvPudkAotBHF5iR7dfBjgDsqb7jSxYHRaRUaCY5daru8rw96yxfz6Hd4WX",
  "key8": "5jV3ndQby1VrMtAKUfoHzhP5rK15xxCZhmUsnMyQDPZP3EAwtDMiynTFe8aCPkEJyFTYRWN1CQCt7WVgNTnRPsix",
  "key9": "3M1QdX99Ws7xfZzibpqNVBcc9UYkfr3N6bK7zTFSapeHoQaTofjHBbLX6iCWEDCVuoLX47kourk3SHjmuVsSNm1q",
  "key10": "31MhAspgAD57s15Kc9x4BQbT9fA2VtB41C1YRUMRRnpngQddJ3QdmmQEd9kwQTfSy2LnUNS1XMZTPMcR9pi99Y3D",
  "key11": "2d5YKVPCKR6k6zf37SrviCNWBEGHt4FgHUnHEigPwTWYHc5deXo4gy875QxosBFJWsg21Jnf84bxtSPuSfPKgk7Z",
  "key12": "2Sk1t7SybJTXUGVbCARw1eVydHjiW6QHxTfeFX8LPmJS4HW79LStZMit5Cq1AQb41UQGr49aat5ZNa7aAPS2p3Ka",
  "key13": "3CmR4XnE8unQ4vM4Mdu6NqkH4iJeazbPeAVSFWawYxR7sXYkaJrtYxFRtph2jtdmMmvhAfFedUZruE5n7hsEjGqW",
  "key14": "3pY1gf46TaQxrWFfgTMvac9SNWF415Ts1amA4yScZxTgWnd1ktLDVQRPtte2K5ZwXS6QURXUGs1pgsj6xVphcatz",
  "key15": "3uapyfND4pV9PZCSbMfcSMYMXvzDrwExPDjbUxiVPQeqay2FTfZvScYCXXAX5HdrtnAXPPmh74op7JYyKdErW5Fi",
  "key16": "5SWdzWooGYmNpopQ3PeDLr9dQCp7TjCVJXd4TGjxWAdESyqszwMFmaYJEmG6moaEFhboFSwCgUHYraG4U9vnsikq",
  "key17": "VeN9gWxsyUrb73cJxRD5fneauLhG8nrGjNfvoaysQVNALHAftNU2iK4EaGic6JzeK6iADnHMEcap6odemegEnHf",
  "key18": "3LLP66zzMXQD94K2iutXMNQ9PtPntXHcqGnSNfc16QvcE4mvDXmavw6Do1hbZwgcUsFkMJg2KvLfRSmNPTyoaq57",
  "key19": "2SLRwV4anZKvbNsrsQdM8fu1q1PCXg5ZtWpLbBuU4vwvZ9HEjkuwhx58UB6f5QLnKw5fgFbSAPaVePKv3wPfWwzH",
  "key20": "4bYBvVifC7gzcapBdm7dYVutDp5unTjPmiJ9P5PCHbAMQqTspmniCJVPYnQNcHmtJ8cEqRr1PiZWVCKrubxegygf",
  "key21": "23KcsJX3Z38JybUwoGPokhVhiwdpdYcaYTvD3iA6UfofbyGfUtG9vaSfnSB2G1wNsSG1aRwKzt8Mra1gmq7tquj8",
  "key22": "3bf1nrTA71C1cV6WzMCFLjaBfrPpVCSXSystjzdM6z4bRaqL48gxwMLuUCwXqJBNWRDyrYmpMuuP9xyyCj6bWmCX",
  "key23": "XRGCFjnKFcUaPb4u7n7SWagCbeTizFQ1Ju7UQUwuJm3wUT21LNuX4Gay8g9GhGnc1DkREm4KErnbMn32LRMRQCM",
  "key24": "5Pd6YFWatUWwWth7Y8atZiTdb6w4tiXkXhT1fto2BZJ3EhRAw1fTa8vLWCKbSUgCvsDgfkM78KF9iCTVQs6myomw",
  "key25": "5ZzfCDqfLDWiFvqpVKuAWtUEN2ZUgCN1BRfBLCsr7nAzcmPzSDdGWByKooDJmHNCAEq315hc6Gj5zvPN52ewTWPa",
  "key26": "4EwoHbSs3hreaZkyXmwkt9X7Kwm88vhjEpqFzHuD9Fr5xvpkJmhSAw2pFskjvMhao4o7Yfoc8FjUxQ1zzWqPa4Xk",
  "key27": "7Zs9TJ2UK8gdvCFpdNo3SGWpyjZEygSV6xBo3aQDusANZQLhny1peJWX6K5XJhi8YVhNhnH2Apj8wJiLe9W9bGH",
  "key28": "2zCQK94PXWxNvHfoAMXFc5XY7SHHRSHTJ9BFhMXu5aCnqZXJdXBh7HTaNUoqhxztX2otEB46MrMGQvaXrvLP3ZB1"
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
