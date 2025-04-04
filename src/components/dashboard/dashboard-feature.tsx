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
    "25CR3tnR3xjAEPCtnFZt4hvjHa1SDpaxdSwzU6KfUYpVaw3NT2AHhRGfGdwu7MmvgsibfiPdFKZRq43FWTN5TRzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PzQxsJNJe49ZsmjriT6SnUuV445v8zMJsxMqSCVviyC7f2UKic5TuWgbEUPLsB8kvK6vz6JLA9umw2u2WrRFaZ",
  "key1": "5RWGCJfHWL5rtntJnZAHG9EuhpTQ7sLVuyXSzHhsmazpuuCiG1NP7m6rPYskx17D5c7KBAVEtjW58Hx7GEF2ziXi",
  "key2": "4mtZ91bgyxPLWT8bbAaUjTxi2X3iLwiFRAftVEfW35ftMGctjz4kAc9KtoZonm6Voze5KQvgWkn6ykVALVwBY5kq",
  "key3": "5sXYYbkP4rfCRoWrJTReWeRZfRfg9Xxz1okfxbGNSR38Uo4YotABLG487H1Ty4C36FRQ2235DEJWn5TdT8SLuqAL",
  "key4": "3qjSGk8JCXobh97Aq37pVimqMdduhugMRyCDhiqzpuU5sJC6Uv7TzEv8pnYaJWMHBi4dXC7YCSJE7YPtLPeiBNkB",
  "key5": "2vUgh6tWJpD6YnFVpsuuVF9sKp5tBUbeVTrFBLz2R4mvN3pEy38VvPhonKeGSusVcBrnBwwJb1iVvpHJVcpewCfS",
  "key6": "xAoP45rBoViDV5CHkW19eoCoWTqrgCaTnqdVuEKVzvS6YuY8ZuAVofzzHTVW4rAsFivUsHDdBL9iz7xRjWV4sw9",
  "key7": "29HTC11f7JFpneF55d314DJZSGmj5mzHKgEgh9rMctMAaF5fPNE5aFuZ9LPkGvajHnE9Q8g65YXoge3KXD9u6ieX",
  "key8": "PpW2y8dRLPAmwPuHhBVc6F5QVp2f68AnMJTES2pa6CQ7TApEEZfYJMCbc55tUm3C5toXUixpyEGFEPMgy5ao74m",
  "key9": "2cQRxK6emqCbVUKdidzWPztZFPUP2HhY9YD9HJrKVT7wnqHkMcJombRnct7FiRzCAdBbtVFL1gL5osMbDWCUBBLu",
  "key10": "3f7Xqu4JCDgotRko8hdxawLmwU19fJQ9c5PUe5QtaLkrbAK9Ypo9FFvwBXfrxLYfgpDobvDihwUUDtwcTBV5k9DZ",
  "key11": "34UuuR2iNDqDMRNtyhMiFsJC7dac7UnZwuuYuz3t4xGiBgjdgLdF15g6V1sfYrGM2QmJfRVofR8Dtaejthg1puhH",
  "key12": "3LpGPUGRQhj3q4bEM2Cpu7w2YAy8CjwmCE1fREZmX1498ZGkr9sRDrc5VzhJQaVSW1mEydSUagt733SWquyK1vnn",
  "key13": "2z55fuZy6Bu7T7wfpdmgPuXXWVs4vhmqbjepRMHKrT5F57wJ3B6P8dk8qDyGNkwcouEdv1u2aH1xqE9zGYnxayrA",
  "key14": "4i5mV8iiN3qFJpwEfk5pCGAXhuY9awoJYDwRawkELpXZjCyBebQzGK9nNVVVyJRdXqtnWfaM2iqRcaAnkyRbt4ep",
  "key15": "1pQ4u77TQzanfJbz6dMdRc7NCii2x7SnKmm84i6KDMTHnQ9EKjTZoL6TMa9E9XLXB2MZ46HE2mz4kVy6icsyUFG",
  "key16": "62c1qA5D5tvkNbbNb4iNVtnirUfq3g7akXXQ5kDSCRyM11JqmjZ6CwB7PwYmokuFmKFd7KdGejyznCPfQeLgptve",
  "key17": "2vn9yYxeCrxQc6Ebrhbior699hACtG5Ds1HXzEn8j3fQV5eHPn7DRYvaaTDVLddRUuERtr181VEdHL9x8BPYNy99",
  "key18": "dM53gsEW6i6nWtqRcMFE3Tv3939V3yPeEZAvLNMDw4tmtytMxXwJffSpdSDU3hHUzsqkq22uxuCuHgu9C6yDrVQ",
  "key19": "5BxyaCSVGxpu3qWZ2WjdfZDdQdvrgtGmhnc28TwKX977buu2Bp4jjJSaJKQ1uAR94ND61R7UcMbmXDepg5xAyfij",
  "key20": "5bGyshyNMK8g1BXbvLCuuP68yW1Cqx4i8TNyAa1uKqZw86Qv8ugTTQHtq7eVR5BNA1k51QY4wX37yJq3MxFDR6UP",
  "key21": "56i5EpF2KQsxgdkijeyHp5DL14BcEXHKaQbrNYdwLWeP4FHTef9EHNZ7vK9kivkWfHx2nB4mmZNwU2ZrHs1dDr1u",
  "key22": "4k2JzjoUGopFQFdB3vTZgd4VSmAYVoYzwMewbZM8WkN95pnbyVa5Nxb8Mzas5e2VaBJKw1RkxezKEgAzXgrhZwwn",
  "key23": "247fnaVTj1LgpbL3A8W2XV1tfTJkWDbjuWHnPrBbqCWVkgpqW8iWibmTZ7ZUtj6t6nwxq8LXiYSXzxDrkJe7z4Yt",
  "key24": "2Dzpq2SZj1kogZYRc3nBdUthmAnkLsBvW52Mf9FGDyJ5Y6fvbdGppk24e8io63ytrUvrpk3jNAZVcWiKj1NEVLLL",
  "key25": "4RLHsw39akenM8JQKmA3XdB5FmxaNMwZGmfeL54ZdSPYrZH2sMaiwAP7hBXRkDgm1B3whWAaXhbuqMU4GobjU8NU",
  "key26": "2Z2uewnd76o5c6ZQ7Mk7HQGkoeqHig18su4Ev4SRW4NqHJ8YSoN5ZFbJ9HvwTzXcE7LspPqGRLYJEqyuq1RcUKHT",
  "key27": "29NnkduV5Y7Y9kci6DJ5LupNhxfS5NDZotPNzvjbNFJ6ed1tb38DZWzeDj2j1q35CxP8sfFgrXFXr996q9b1uqfJ",
  "key28": "3AUvk6DqyASbiXWDgr12YUv5FguPBFSv5oNhut5S94gA2huxNkcuTa3NdWtVHhky9BveWsLnAbsNGfPfDp2is3AQ"
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
