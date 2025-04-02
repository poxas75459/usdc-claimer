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
    "KZoc8Uor8L2rULceSan7TG3HduSBenLDr8LfuYYoN8hTREg4NPPj8wFDASqg6L3AQme3JjJ3XHoBoK5Z6NCxGSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8zike2smdKPtB2mEgn9BgTtCwVN7UWbf2s9zwRYfXZpioYSVgEX63oq6EQnmEEJU98yqNv7TXL5qmhDg4dqJM2",
  "key1": "64a9iy8ipX6a1NonTt8QJM74WhPzzzPpeV5uw3aR91NabhTLvjE66579BVooT9mGXjuBUUAiLzkPM96aTPfx4SVP",
  "key2": "5EdH8k7K4Vkb66VejyA4sJMCUNzFLnyEwyzBGV1tzuyYgxCmzed4v3CyoB5ujTLvLqkarUznEQWqZFhXgVowJ2TE",
  "key3": "4fo8qhdUB3SPAi3NNLhkwtf3AyfBJCHJBokiakmCsQuKZkCEM6cdX9KCWBhNduHwwTJdGRPxbYC8dkhTuBbJDfAG",
  "key4": "2RC7iZU6jE7TyAJ7UoLn1v2rqb1QzHJGGXH2UB5qJ7FWGLgKJmKUKA5aQr8jwsugd2crbrbFnyQbT71iV7e7ZQzh",
  "key5": "33u2FDWuvZaxvy1sckiKA4AXzhZtwrpu1vG12C47EHYGXduL4RuhUWNMtUPFr3J6CFNjX47M1Whriyz86fWEVW5b",
  "key6": "4Zv9v3SFz5e4zoJ5oKUK7py7RGbhDD7oMriNCQw2Vfu9HrvPr775CJPMGg7PMotRE88SHRs7vjUhg5SG8Tu1pHML",
  "key7": "4xVWeez87aSP4HYmpJ8fdT2RHhD7zGJojiBJ9hd3hsfqm8b8Sa4z8SYsW5EDyL4wvgoF88SYYaadjRZgbE38e44q",
  "key8": "37HtSYASdVDTLu4x1N3kapuJ12suz6xkfkAG7kyUMjGNRCc4PrMGxQK4U5GKHK6QeJoKnSRBqLL5g3FR5a1mARkC",
  "key9": "5hAEvkugcTsJFSCbPzBagtbZsTpc23fEP1hafMtsyJPdsbMR9eEaHiSYXb4izkok7VN5Y8o6FcL1ftmfZSTrPq9k",
  "key10": "21U4QYkzjQ6PRoMJFEzbMrFRTTdDoUmBBFH9D4yP7U2t8ZjEMHyF7eT3YHj8J17xjeeaUzw54iibc6byTkhjfwfK",
  "key11": "3jtJY49DBgf7jTYNU1G4TbHai4beEfr9mR1zCnBtgpnk6hkEZPd91655W4xy9p7X4zWQzCvhn6fw5AVDL8dUXLvj",
  "key12": "2evjCCsbz8hjQBKATUdXP1rXikqmBQcs8p1NathhWqMjyhwFekL9N6jE4nNSbj896PdxYZ5sXexgDivmSCmBQTDY",
  "key13": "XSL6KPwQekjs9BJBdAv9QW8xYYNhytcJRc2DeVHPkQUdrajvKMydSbDXcyp14AH8vLEvP4TcGV3vZ2dEb9pGMRf",
  "key14": "3BUk7Lp1C63xARMWmhho8Hoqgak7Jx1Cgkj5KeuvAhWHmiaJKMjbD4hBV9hXBM5hUceCCVuBPaVcvkw84LKTRqPc",
  "key15": "GQS5RdSwP97duoKGUfoiBEXViTjZuBpxEzD4KRtfTwQaMuRxovGYnu6faVegfvqVDU1YX26euga2GsSV38eUzT6",
  "key16": "4MmuJBTCNGcYZXCrxjcbX3tsH9hLaoaFiY5VnWUHhS5jr8P2wS9EX8nUkmpXraT3MxHQKjtgWK75AyjT9L2He6KN",
  "key17": "3sNprzVRpxvQGeKMKNTaEigafKafrc9epgQEi11z7mCk5TqhcKudPKfsSftvLoAkd6UNb4BdbkZUCT4egYP4sxF9",
  "key18": "5M9Qu5p4q3Wq7xNBJGWEhy4XZKYKPdVK4aTJzWqH1mpvNtGfdqDw1WxYqzy5a5tkyQE1vmZZDgpbwqhp8grWasJW",
  "key19": "2EoEURLnjoZmmZbZTF2nRN2nBgkTZ3HtgdhNjPtam9cC2F3vB3hi8fL4vK74Ys6SKtw2rUgDZH2e8xRDQRQ2jQhu",
  "key20": "n5Vv8EFvKQSQKD4oNnBGFNupk2ovUz4tYxaUxFvztefwJkK6H6Dd3PcP9u6nifrKi8jd7nJuwW9wT4Uox7Kb22v",
  "key21": "v8hiLBcwdQuSoefUmc5akYM5dZkNjebwEreaoNviJx55VK9CBMxbJvegyX3NAGc3UbwsA7quEF2nsSYx4VTDh2e",
  "key22": "3RZFkhnPTNHye816oo9T1yUHLVHa8EbinUPGK95Vc7UkuQinf72GdSSmQY7s9kT7kV8do3BEy5xMTU117wtSx1kq",
  "key23": "29kSS2tfqwPTqJNPS9ja8sTfRBAds2XV5ktZt6Aey8z9G3gojXQ9vibeehcHowHC1BsHUE6nCXXmMAxRbHVLjUMH",
  "key24": "2RPmCdFk4G4w4p5mECX2YL1kS73Es4cQBCYYvSMWUCKnsU9sZrtiP8HTWD6Jxt86LdhbjPeVawHyQcN9vKVtvdhr",
  "key25": "658ZEdmBR8cKeECSLUj5t3PYgs4kb1VE9JswpgEpyyDEf1XmxSPXrjB2AvYSwxKeZTBE173N1WYkREQK1EUJYKxt",
  "key26": "3NUMizxsPTzsuuVhwsf3h5kpebEfoqscuLSabaa4skNMUyuSNXV36MXpTkkajZuVjPWjDjc51yY9ir9dmjANPEFT",
  "key27": "5Fq93roSQWtFmNs8Gsch9MEfWfgHDKbVBfq9KFbtCfJvvxqvVV5pu9ZAogyBto5ysiqiXtEyZbzCoVqyNJDk4ig8",
  "key28": "3FYjvxicnbzPxnFTFxLbjhdgbDvinDMetoa7DbF6KVkJvxAKBaSuLDjKcA6KmemgtbTj2G91CJUYb5ho9PVyeCTE",
  "key29": "5w1HagWCVzuiNosRXdhSNnF8LWzc8g6ZdwYjqFd6PJizcMSnD4jV78PTseP2xEbzkiznSmhvrQz2ybPbLB98dyi1",
  "key30": "3cB4f4xUwz7F8zADcNi636LQD2moQ7Q6qg9r33qLK6zTgRBoH8yPnNsHQVcFkZnAd7y6jbp4j3yeCHTMZkXSkf57",
  "key31": "25ikX2RkxzCAnLZyZbh9oW6xBhi2j2hpSK2mHyoWoWCfnKYfyMejs2aNDDke15inHt2xEtmm4AUm5b3a7pKB8a9t",
  "key32": "xHnuEugkjR4LhwWVJeuYP78RwFzSsECYVNAMPfNb67JfMT8iVPb7mqatq71vTs2qM1zntSb61Eyg7gtWXXMetQk",
  "key33": "3eipWdTrKSquv88fFQPqSV6VW1YgqmfVAowYszgMam1LKg89FfUik6AxCd4p5eJRsyc38Jp9x64k4PgqdBfiPNB3"
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
