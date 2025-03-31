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
    "4AtGFELWt4fsHCeYBTYB4bWALqiX47QS2NyaF4wngkyyRd88b2FWXPT9WGSmmzruRMQs3cgwcksVR32yEE57PE9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWQQx2jmq29aABtEpcnbfQenBVfSZ8B2CARsx8CzAadJEFM8JMtkuzQMxuN8sc7j9NNZRuHWdVGn9B4WeCb1FSt",
  "key1": "4jWATn3rkXah1R86NYurVEjxMNtuZn2qoXpHp281RwHYfFT7WP5XnUDkxSn18yr4S8TaDLdmcnUWz3b7Xc6tycqr",
  "key2": "NuacggwXWLyD9c3pZ4x1v41F5h8DdTuFnqXnoUH5t5UyPrrh9xZQTzc9u6tBaV5EnARBdeNRW17r8nR4Yufz6Zx",
  "key3": "5yU9F8VA2Rx1Vp4Cp5EMjkqadTHY1cjmptbQ6D897BHDqZFnkVQeyELY3RDt2FZBx1nKzuuTs1zH25MQzdF4MPm9",
  "key4": "3pJgBPgBhLd6QDjjdEk5W8HCjvVymUNLLx51Mpg76uZvetQbEwTUiCNdEzjxvR6YEg9Ydrx7FcxXCKLyKNxRQ6R1",
  "key5": "4YKbEhexFvcLior89LUwACVJ66jk5qxZL2v5qZhWGqcuyWfjAdKYXDJwnNaw7NTJfopKv5Z7MnqbiBiwkrABq8mo",
  "key6": "5xF9asLcHTaEu28y8UfortJdsjq2yv3gFxGvD9ByB8dTeV21p7PAYqfxVNhvdecaZheTpbEZfrNiyqwavAXkg8to",
  "key7": "4QmiFcAUYKg3S3urxitLpwKRiZMFLDaAVJ3BFFCC8t1dWbiaKggoBXKdCjJCsECEPTFk7AsFCcNrZQpHLcqs7DPS",
  "key8": "3aBS4XfVR2x5mnNFPpRmRVdMyNyz1KnZERwr55Gw6MmZK1tQBZzUvNmeQ3dpycMQzZLBPgmUDdDvV6HYi5rxdvvW",
  "key9": "gaou2xLg3ti6gtwZLTVwYhLkVEDtLVPM7QEzhhk2SC6AcmXVX3BuQD6gXe4RtESmxonw3QWePjo4xNu26JTY53T",
  "key10": "3nEL8JCQvy3SBzfUrAKUSxyoSRQbo89VzDWzeKuTKewe4jtw1fd9G8LTiLecx5C18ht6ay3GYkdxH1gtk3XmHpm3",
  "key11": "2KcmoJPC8a7MGtMttJcxRwWE9Q2MrKaykHoEdCSvPDDy4iVtakwcsKkuLZ3DwAEe2Tp4i8sQFYGVjSt7CPVjLyEv",
  "key12": "5bDGL8d5Ux5nax8mRv6kXgBSNuUm1crtx3TUjdQ6xpsduxSrbypzxYdWZe9u6aTaMQ8kAbpGJ6fYavUmSDSa3cK",
  "key13": "2BAD3kCgfQwkaRwi6N5pJ2soPCPwZv9j27CSutpGc1t7Xo1bjh7mMrWMxcUDNVQ2mHQgQWVfEBTDQqUrjnEWjxr8",
  "key14": "3pKJBTY7ssKNmH6Um7im3T9JWkYhxhY3imtE7UBYfQevcogd8rXaYyuZY4ehwfyUoVg64ef8KZivoow8po6heWfs",
  "key15": "5wUnuzHNVfnz3kRzMFNML4dHUQGnqtpHA7AcMo4zua9GNALtPhrHBKiLVz5pWyty2fETmv4Lu1X7yMffFeLwauxs",
  "key16": "5vt1nCw9nkoSX61icVMJyMFyNAsks9FeUkVnTeiWpcA7JAT3pwwVWttiqC8MyaXskncWgxgecZiCBSbbaKpYarj2",
  "key17": "55H7QEZEeMewhyFHVC4AdqecpCNhDU1CHJVscQWGQicF8HrUjn7DXfejduWwEgjiNx7e5GxSWsKxHp4cfUw9fMm6",
  "key18": "5yHUGhm8fyuMXGxhWCnxToPYhQAsbubmKzW1ogfcRkU3Aqci3MmEJdDSwo1HxQz5ih8NKr6ywzvWSE1z4GuMQdqK",
  "key19": "4ZVFcxVhUa4KXFbq5wAF4QXnvgk5ow2A13MSbeBy2UVjdY1Xe9jEL3ngiZLjRisqAG3Hfgswgh5GsRfqfxyTNZ5",
  "key20": "35hjfWeXHd4rEThF9AFr2wvUuGHeh2d8uid9qi5q6bKpXwC6RSYtXhZrU27JPKRBJFnD7Uad3Ga9tmN3B5DuhjJu",
  "key21": "5f1ThyBrrBTzNDgHXv7fJvzAj7dQ2h5zbMiCV4aRamii4Ks5yQjufV6UN3KvrPEapfCLF81UqeeVawsVukxcypiz",
  "key22": "23CErKdEGjQQKVB6PsxLQ69ZukM49KBeE9ysiRLCGCBnAMFPpYvnPmMSRAdTjAzAp3hx2KuBZdPCmLH7B9BgmxqL",
  "key23": "3fDYNAaiFun9S3r2sJ8WjFJvdUxLyggc9bufx1CwoEZPMooEdxCuy8Sr9SzJBUj9EsbZzKZ1nikNSvC2LwPV3yZm",
  "key24": "5Pigp5XfobXrm6ERbtajUkdWbWRXcTuQw1Lv59QudYN958Fpy5YZrbwEuKRtxgw4G7LQQHqsaZY46nPM3Jdrnqt6",
  "key25": "4AEkq2gn29LYcSuwbjabq8E6V6qAX2kWR6cfFsE11qim3ywsQQ4foe6SdzHdBD7XDE8tYcpaFVVjhhxFDduD8TAW",
  "key26": "2J4DV8zSPmCR5fTCpFx9aZMJhSe9f7KXMRA9Pycqk7NU1tBeYSJ3f5Rjev4AQNQRkfJhcFaL97zkqQinD2ChetgE",
  "key27": "5jvubTnFvxuEG8LUUBEB6gPDeFGqus2pzBEAYcgdT1aPDukPHf9nQtbd85NDkLAFdwjEnynu9iiiuEKHbMS5GtCK",
  "key28": "5kvXqJ6EuAoxFkCscs3habyf61C4tbJYGmfRErvgdJ96oHbXcbaGkrV9kXCC9nXwdR8vimiPCYUK3Y5TyaMmYRhA",
  "key29": "5WEQX4e7CWWfV7EVd2V1RqdAZMHMa6CDV2BoUFtHSy7t4jSyhStjVp1i1GNJvPvaxZoJQhKgxrDK4eFH6y8eK8BY",
  "key30": "2P95Xh96RtxhRiS2VtDMLCuAXtWh3DerCrU789X6S4Wbp2bP3xtpwXrYihkCj2avc5aCj5dCCzJ5dDgSmAkbrGBf",
  "key31": "2FNMpgioNcXfRsvVwcNtFRDWCeFG6C4oveFpXSHiM1HLYtkHNrSzd6R4B4o4A2BEbZMJwR6fQEAexkpv9xqcL477",
  "key32": "apPWwQjp6FxotaNigMXGMq4Tx626gAfGtw4yDsX9ior8D3y3arCUuwzNir8DBhMjTGc6ZykMdLzRZKeRZpPiTHK",
  "key33": "7S2fwXF4ZypBM4D8hBoeWkeBYd7NcxtjziAe2cWbymTTuR5tyhdkhAAc2pCjUBKFBD4cCRbqnvsogEesZ9ja1Kg",
  "key34": "2WQALDhH1cktFgj69woSjNj6hE4rsiymChWi8souQjZSE1pqbi1GZwC5bXz8yt7HbZi55RErqpztPcP41CL4pC1E",
  "key35": "5kgqkHyKaSETPR8c1A5e8kmmKjJ82cukh8x5fn2RxCbnn3oy5SWXjvEEPGBadVMCFJ8h5QKV7J7ggwTeBdp2XF7c"
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
