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
    "4TjFXFAVSae1SteSygiNHqgKiKwCG4QXp29NenZaWZdjDYd1LXZzbjTPjDGApEsvu1d3BNAW7qAu9NPEwfwDPX2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpcbSEL67vfbDupjnGCGEC7jBc3uJ9aQZQkH2bJxd6vDWcnFkYKk7zmKDfPFLEtmp7Ph6kEFztjnnsNkGePSnTm",
  "key1": "5SBv2VMVhDm3M13DYD5MANcFZiEZgPZRyuhgAjyT7v6nKjLBTGQ4L7LrKmuSNA6hc4qiieAtEAu5wveXckiWMzHg",
  "key2": "p3YLivRZhufCBvsJPZ5VhhtqTAzoUYp5pa3fx8R9Udo91TgS7VZay9FZzN3P87TBFuhHaa9B95s7Lsv8q97uiBq",
  "key3": "5WHEQ3gqH6QFXf6jPoMhH4k496E1xodKPiVbf8h4b6hy3YyRcsjr53rDjRtvyBCtJ5UGcqytZhbb4H6TxsgCZEny",
  "key4": "31u8xmjJymqWNVQ2ou7iqGiHshhwLTvX2k3PCboVZgQvqd8gFaDp2Z4B5rFAXEtmf9CbMeg3cF3TMVTtXP8vHPE8",
  "key5": "48y17E9u6ZXLSFsxHavFbFpKc1ZYr16hxo3ZGHAVvXYszWvy8Uey8AoiRCVoSgceJskKmD1ykpAk2wVhyTS7oLv9",
  "key6": "4GJrRxE8Q4tqRfZrWJKFueYc78pXdiuoFdz3aU9J8BJg87oYmZYhSh8ECpWerJNffLi8G1aHJoiPa7We2BkeS81i",
  "key7": "5JPEczkMW4iwjh9DvAyvV3mFBDNY7z6kUutry4PKsAUgsqxc54mQBA1ewdDg8uReLmFZwF1NypU9FTL16fCJ5N1W",
  "key8": "4cQpfa5kouNQTtd2cDsNYsYTzinNoqXZ8BpcaJh3NF9Jxz6Vb21qegV4K9gzGVG6wYE7VdgiYsyrpPq8UccraTzD",
  "key9": "2NqX56xUzj6m5gShAMchCtwG5AZzGQjP7sZ5HpjxcYC18tioddpZSionfHdMPfxmSHjDNNWtvbA6AJhTkfNbGEmw",
  "key10": "3d2YgQP5X1Nd889JyMefeyYa1SQDVMAZJv3z2LB8xcErg3pdJ7Q1CQ6YkAhGH4iZQSCk9fPTGRxLry2GovZdZtVA",
  "key11": "2qdYsZgUkMtWdKruHBiGqtdzWesU885DAAmAki1QbaNyCEAowPaa8hn8xW38gi44oepRuqL2fTgeNgebPcvmiTUy",
  "key12": "58hhQPexcByBDCBPYVW6B9M7URuM8Jh68fZURudXVSJZQiTuZVCrmLcyBGfd7igTeDBmBVYePPbKYtnEoQr9Bcdu",
  "key13": "5R75bqzvkmTy3Df87xR3AXcaN3Eq4uvsGDTfm2rC5gJuyduPaTbU19b4UCLmLwjxWfJJrK5yMHxxqKQBKBJnbmL8",
  "key14": "4eKmKqyaMHyK5ZkjQ3aroAfdrtM7QPYVM9MdqMhVfptDQnuu7imtaP3AGgPUUfmjnmanzpuqQc44N9v4zF6TD4H8",
  "key15": "3LFwVXETFcew6jeEuc4xuXiQSxBdcQKRx5VaPYVjVQXfsHbFFtJxywZWSQGao5bReQMTgg7d7B2Ueck9HVbfhMyc",
  "key16": "2PE9gAexB6GFCWxdekRtiG1zAd5d2pEhY9XK7GCCkUQAqn63H3k4yvrD74UJGmjBRwfYBhiNdbFunKVEAxvcLoJ3",
  "key17": "4VbfdmWaByEpX37K9tbarsNwEe45RBZorLJVCYuhGLbGXFEXQWfpT3JppsAYwwQSxJ298Qi54r2JimMQZsCULoUZ",
  "key18": "33HC3diMjQ7g1s5uztTMMn6nRWd8tuuUWSN7SZYBoDwHnWPDdxdXMbr49PF4QraMph9X9nqpeCgp3uAcEwTmrBzN",
  "key19": "32DuUkdoqzzvABbEuKNDjPb4VdtY6cnb8zzFBKc3PhvXdCNzQJRC2Bbij7uBHMvXHqS6fQMySJ8VagqzQqK3Cb82",
  "key20": "5fQduRtGyWoPaYBEoRuTZebQR18XaHjWssXbwVvATi8JP1xJRTSoWcyt6rUFzxnDYZqZgo28PdkUM12Qp6AQTqJQ",
  "key21": "uLJ7aL463aC1LdSPpcC3SPYHTnnMfMTM5bavHvFq36X5bS7PkPZzuFmiwqdA98jqQVh5rNJWfJGQ2utMiWhVv9a",
  "key22": "59T92ydPBnPNjMHsZNwH3FtWyQqsvzXZHvwG8aLUe66Ua1nyFPPnNjtD1FxwnKTgjr31kwfL87rXChQFPuan3UHA",
  "key23": "2nDT3eBibyBZyMoG2WjsVSJhs23miEBozC1MFqBtUMYFSwpdz2FHaXVBHxzy9Tbz4h3gTki9MQJypaBj1bospkxZ",
  "key24": "tsfXPaC6U5GMY93VoewzU8DCjoMuTUzepVrbWVWFDWMEDCGavTWCMB12bvABWKrwjZQcwjs5e8XMXm67AyEhQNU",
  "key25": "2Jg6rGoVtea4wL1z4iMnQ6Vj9e6U2re7HG3wUGr2bp7wfKnwX6aEs8Td7MqKs5Z8RSfoYxkUYShN3KbFoqcQWTqJ",
  "key26": "3jePZep9RSFMt9fCnz5fdfjQUy3seDajSbmfQrbW6GkvPcdzzPWgJ4E48oMhRkanEJotWZPYUoTfPpMub4saGvw",
  "key27": "5vPzukUvTN7UzHRKo7935K8NWzojoekmUmtc5vapFLNyEbkgv4weWsWLN5rm1eRqpt7MmkykuqKAqt3WGH4huY6x",
  "key28": "3QanfRJeFRZLBpXXPDmDqT7Gv3zHYfHf4GYCMGiJPahoTZtYg9gA9EeNfqVWiMcNX5a7CwXLc9gexNEs45wNh5dP",
  "key29": "3EXVnJgN1i1onTPm6CTdB5hm7tviQ1QtPee8eez5GvF7gtEmVo33wqXJ4RYjLRG2wauJaKZgBfH1xwAz6v5RgiTh",
  "key30": "5porkUqDmHsjQGmkoAEZUiBd55wroimSriEbDePbMJLcZNQZg6vSkZPMfrqDGYQcHRNrXY9GxywLiScALLiubqFX",
  "key31": "3PVw4j1D3PMC1LDBybsDAccP8Yc5gWKRY2B4N5aSyyddsjVEQFgJzpC6SWZ9TsXRwxqCqcoBWiVoaQJWF3Nq7ZPf",
  "key32": "STToeTSdLqZbhWVk3PuC9GTstcCKw6A4CMCPoRhpsXxPXf6snTHjPKE2XwmbZq4cD6rDn5wbFzqi7RQ4hB4cxKi"
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
