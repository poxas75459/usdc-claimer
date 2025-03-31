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
    "PpmkcoJWR5SQYbmtkmV5EQtt4o3RaTHrSb4RpCco8JNRxrpsPkgCLoeWfj1icgjuNUajSNSYvfdpCu8ZgrHeSF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thWkwEsfkMJD2smSH91Lpz6hrPek4jWTR1G5JjnopVF6pYnMGEiShwaAh2PMNpqdniFxd7mPa7h5fSiLtAxyBXv",
  "key1": "kr5yTdivYD1zPp1kFLD6hYhdcT6aRFdWyA86PX2gPCgb9HFQx6pG7EyCcMckdT2VqNYBxbqZ7UXBP9NxEtrdMie",
  "key2": "4HaGynxPawsn6LgcCVCvGYsk6BdbWR6pChEZg3a5Mg7Q7GhNRLihfgpTqsSBSkmhC4EtSgHQnvmUSUTHTEwdDRA6",
  "key3": "5qpRzSTq12HnES3xEKQr8EYr1Lo5JTa5m1YRkAXvVRB8JYg8JJJfk1mxmJeaGKFE65tpEkkTsyyiX5c5gTJ13NUV",
  "key4": "3zKhLQhTNqwwAdBXSqhwjXw4JZAkYobcc9YXrbRyKTSCNnuUyhpu1tb853jkv2HAgGSBrjGJypRvRzHZG1aaZmdt",
  "key5": "oPVnJHj5f5B3NFVEWwNjqGf6pfCyvfnAYXkeQ43aq21WUxaJ8kJrs5s3Q3eyaXN9qq6v9RHobxNFLsGfhcRynVC",
  "key6": "3bbYF6MdbxzqkAKbjFLK14L1Dc4s9AfMpQ8UT9nrX8J4vn29ZwaYrrgdgpeaY64JALhNmMkaJTkJfC9PAibC6rkt",
  "key7": "2YjZPNvysPGwprRtR218PDsUKkx1y2jKWsUGYiof5qnd1PzUtMgTb67c877PUgJtCSjeuPC3YvGh6wjr7DyApnwE",
  "key8": "4aDhs2AJQx2zSxo8s3YWifeV7vK9zkZGepeSEpVrscusWxkNTGqn9eGCjrqjTpNNgEXDsEpcRoBk66QyWGoLVmag",
  "key9": "5wcfeowGKEwjjYSg1jtqKoYzomgGdSFYfdC1QQXryq8SVqYAzprw4WPW6HtEULQSmApJ1qehY1JCjstwUYQRRXfx",
  "key10": "3w9xpEM9UJn6SmxHLvgnvNeLU8EQMPdFDgrTp1C4g4wQwF3qFZ3dhp15TJXyYXLC5NZM35kNCr3iUeeSFotTHqkA",
  "key11": "4i7fPaWVZm4XGKyt5ZL21v9xSaVVbxNXnpYNzxzXbFZHuh6MzNHAz6ARnB2cT3zXaTKjWJQf1QxRTfZ6pR4keTtW",
  "key12": "2y3GM23gky1aeD82kfpFcwd5qEWcSweTWfiEKmNH3Tp6D6BNGfX5RgLfcU4e1pZnwf12AW7MfzRguG9sAh1fdsDo",
  "key13": "5BwoEaLrGNdoHLdC7Qa1tNv3h7fjnBbRpEfBn5wKEfBy7egMTpiyWZDgivrEAEvbAKe7CLgsGSS4nWkQ5ysqpr35",
  "key14": "gdRjYTJxL5cvprcjkYEEUceU2Cfzco5c2VGA16Rbo5DWTXaAZYZsBNnK1a29bRdRgxPCeWHUsRvjpz8YLophaRh",
  "key15": "3hancY13phy9acuCa2o9mLHA9tJWDnxKiQcnS7BFhztjehu8zXPnGqDGP6XqTwmJq7kCnrMuoUaN6Gvd9Dks7jr2",
  "key16": "9kbSL93D2HeBBjYqdK5i7PFmwDjZcfuen9ThfSGYQgJwG8N8WLWDGVMmWF9xgmuh85AoUyd9Jwmjr2SMRrZTWfq",
  "key17": "5D4vtQSSydPsgkReMxsoEPdSySw3MMcYnJY1L87HkmZ573ttn22jKaRnmiyXouYoVir7KjCZf8AEq7rAePR48vd9",
  "key18": "M2YnfCyznAMRLJgVgZfRVamuSJEZJovVkLoCfQEtT53PnEV5rbAdSMZgPJ83Ue5MCTXDxBmysSobBqhzhVjq2mF",
  "key19": "2drgkTNrwQhNDn7AvoziEShLdfXaR6RYT3y1DXGcqXo1GgxiCG87U3uziJypvZMjdRucELXizJLdKAhJUKjBSUaH",
  "key20": "mMsWuCaEKviUXNnXFQ6ohe9YPxEeB4o2ucmqhJwwgghs3DRkkGCGVCgVEk64FgTMiVeNnXWgrExgQecWg7J7zjp",
  "key21": "2Dcr5ZEQ5XveTuzpT6n3Jc24rMGwjzUTMwggb7ba2wMWv6ApBHgrvT9tLx8D12VrzT1FWSjm3kmDfMk5124VvWaB",
  "key22": "5uzj2detASkLKmiw6dzDWjvmuYdAgVKaf6nZeRRawmQ73vC2jDjV5DQPCcgrN7h56dt4qkXjCWdFJ964UNDMnk4u",
  "key23": "4sMudtFUGD6Da9eR7s4ULhdtZ2vuasFMiwWtmVBHfEAKAkcmLeh3777J5VTFMMAuc4ZeQSKaJKhAotaJsDUMrEDG",
  "key24": "5vUEP5qmjUEaBi7TusHhbW3hNM1RaZMDs4JQyj5Qfn99nurKwZnq12M49c7Q5e7BMCEJj53h5rswe7FofAVRinPa",
  "key25": "3y1mkNJhVWGcNSa3YAqVNNVUCMVP47DwZPq2NrB8ht7Ye2jbp7eRWmLoHe3AazHgRwiRMF73t8NK1yGwdc1Zgdz1",
  "key26": "3o4i7W4JoPukLTgb8ebXJ8mw2DywJa9taRTLHf2Ycci9dmzNCEa9UMvNMncTToqZxyp6TywgSA9ysmARC12UMg3S"
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
